<?php
/**
 * Beneficiaries API Endpoint
 * DOLE-GIP System
 * 
 * RESTful API for managing beneficiary records
 * Supports: GET (list/single), POST (create), PUT (update), PATCH (archive/restore)
 */

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, PATCH, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Load database connection
require_once __DIR__ . '/../config/db.php';

try {
    $pdo = getDbConnection();
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Database connection failed']);
    exit();
}

$method = $_SERVER['REQUEST_METHOD'];

/**
 * GET: Retrieve beneficiaries
 */
if ($method === 'GET') {
    $id = $_GET['id'] ?? null;
    $showArchived = isset($_GET['archived']) && $_GET['archived'] === 'true';

    try {
        if ($id) {
            // Get single beneficiary
            $stmt = $pdo->prepare("
                SELECT 
                    b.gip_id as id,
                    b.full_name as name,
                    b.contact_number as contact,
                    b.address,
                    b.birthday,
                    TIMESTAMPDIFF(YEAR, b.birthday, CURDATE()) as age,
                    g.gender_name as gender,
                    b.education,
                    b.start_date as startDate,
                    b.end_date as endDate,
                    DATE_FORMAT(b.start_date, '%b %d, %Y') as startDateFormatted,
                    DATE_FORMAT(b.end_date, '%b %d, %Y') as endDateFormatted,
                    b.series_number as seriesNo,
                    o.office_name as office,
                    b.designation,
                    b.replacement_notes as replacement,
                    s.status_name as remarks,
                    al.absorption_datetime as absorbDate,
                    b.is_archived as isArchived,
                    b.created_at as createdAt,
                    b.updated_at as updatedAt
                FROM beneficiaries b
                LEFT JOIN genders g ON b.gender_id = g.gender_id
                LEFT JOIN offices o ON b.office_id = o.office_id
                LEFT JOIN status_types s ON b.status_id = s.status_id
                LEFT JOIN absorption_logs al ON b.absorption_log_id = al.log_id
                WHERE b.gip_id = :id
            ");
            $stmt->execute(['id' => $id]);
            $beneficiary = $stmt->fetch();

            if ($beneficiary) {
                echo json_encode(['success' => true, 'beneficiary' => $beneficiary]);
            } else {
                http_response_code(404);
                echo json_encode(['success' => false, 'error' => 'Beneficiary not found']);
            }
        } else {
            // Get beneficiaries
            $showAll = isset($_GET['all']) && $_GET['all'] === 'true';
            $showArchived = isset($_GET['archived']) && $_GET['archived'] === 'true';

            $whereClause = "b.is_archived = FALSE";
            if ($showAll) {
                $whereClause = "1=1";
            } elseif ($showArchived) {
                $whereClause = "b.is_archived = TRUE";
            }

            $stmt = $pdo->prepare("
                SELECT 
                    b.gip_id as id,
                    b.full_name as name,
                    b.contact_number as contact,
                    b.address,
                    b.birthday,
                    TIMESTAMPDIFF(YEAR, b.birthday, CURDATE()) as age,
                    g.gender_name as gender,
                    b.education,
                    b.start_date as startDate,
                    b.end_date as endDate,
                    DATE_FORMAT(b.start_date, '%b %d, %Y') as startDateFormatted,
                    DATE_FORMAT(b.end_date, '%b %d, %Y') as endDateFormatted,
                    b.series_number as seriesNo,
                    o.office_name as office,
                    b.designation,
                    b.replacement_notes as replacement,
                    s.status_name as remarks,
                    b.is_archived as isArchived,
                    b.created_at as createdAt
                FROM beneficiaries b
                LEFT JOIN genders g ON b.gender_id = g.gender_id
                LEFT JOIN offices o ON b.office_id = o.office_id
                LEFT JOIN status_types s ON b.status_id = s.status_id
                WHERE $whereClause
                ORDER BY b.is_archived ASC, b.created_at DESC
            ");
            $stmt->execute();
            $beneficiaries = $stmt->fetchAll();

            echo json_encode(['success' => true, 'beneficiaries' => $beneficiaries]);
        }
    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode(['success' => false, 'error' => 'Database query failed']);
    }
}

/**
 * POST: Create new beneficiary
 */ elseif ($method === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    // Validate required fields
    $required = ['name', 'startDate', 'endDate', 'designation'];
    foreach ($required as $field) {
        if (empty($data[$field])) {
            http_response_code(400);
            echo json_encode(['success' => false, 'error' => "Missing required field: $field"]);
            exit();
        }
    }

    try {
        // Get foreign key IDs
        $genderId = null;
        if (!empty($data['gender'])) {
            $stmt = $pdo->prepare("SELECT gender_id FROM genders WHERE gender_name = :gender");
            $stmt->execute(['gender' => $data['gender']]);
            $genderId = $stmt->fetchColumn();
        }

        $officeId = null;
        if (!empty($data['office'])) {
            $stmt = $pdo->prepare("SELECT office_id FROM offices WHERE office_name LIKE :office_name OR office_code = :office_code");
            $stmt->execute([
                'office_name' => '%' . $data['office'] . '%',
                'office_code' => $data['office']
            ]);
            $officeId = $stmt->fetchColumn();
        }

        $statusId = null;
        if (!empty($data['remarks'])) {
            $stmt = $pdo->prepare("SELECT status_id FROM status_types WHERE status_name = :status");
            $stmt->execute(['status' => $data['remarks']]);
            $statusId = $stmt->fetchColumn();
        }

        // Handle absorption log if status is ABSORBED
        $absorptionLogId = null;
        if (!empty($data['remarks']) && $data['remarks'] === 'ABSORBED') {
            $stmt = $pdo->prepare("
                INSERT INTO absorption_logs (beneficiary_id, absorption_datetime, notes)
                VALUES (NULL, NOW(), 'Auto-generated on beneficiary creation')
            ");
            $stmt->execute();
            $absorptionLogId = $pdo->lastInsertId();
        }

        // Generate GIP ID if not provided
        $gipId = $data['gip_id'] ?? $data['id'] ?? null;
        if (!$gipId) {
            // Auto-generate next ID
            $stmt = $pdo->query("SELECT gip_id FROM beneficiaries ORDER BY gip_id DESC LIMIT 1");
            $lastId = $stmt->fetchColumn();
            if ($lastId && preg_match('/ROX-RD-ESIG-(\d{4})-(\d{4})/', $lastId, $matches)) {
                $year = $matches[1];
                $num = intval($matches[2]) + 1;
                $gipId = sprintf('ROX-RD-ESIG-%s-%04d', $year, $num);
            } else {
                $gipId = 'ROX-RD-ESIG-2025-0001';
            }
        }

        // Insert beneficiary
        $stmt = $pdo->prepare("
            INSERT INTO beneficiaries (
                gip_id, full_name, contact_number, address, birthday,
                gender_id, education, start_date, end_date, series_number,
                office_id, designation, replacement_notes, status_id, absorption_log_id
            ) VALUES (
                :gip_id, :name, :contact, :address, :birthday,
                :gender_id, :education, :start_date, :end_date, :series_no,
                :office_id, :designation, :replacement, :status_id, :absorption_log_id
            )
        ");

        $stmt->execute([
            'gip_id' => $gipId,
            'name' => $data['name'],
            'contact' => $data['contact'] ?? null,
            'address' => $data['address'] ?? null,
            'birthday' => $data['birthday'] ?? null,
            'gender_id' => $genderId,
            'education' => $data['education'] ?? null,
            'start_date' => $data['startDate'],
            'end_date' => $data['endDate'],
            'series_no' => $data['seriesNo'] ?? null,
            'office_id' => $officeId,
            'designation' => $data['designation'],
            'replacement' => $data['replacement'] ?? null,
            'status_id' => $statusId,
            'absorption_log_id' => $absorptionLogId
        ]);

        // Update absorption log with beneficiary_id
        if ($absorptionLogId) {
            $beneficiaryId = $pdo->lastInsertId();
            $stmt = $pdo->prepare("UPDATE absorption_logs SET beneficiary_id = :bid WHERE log_id = :lid");
            $stmt->execute(['bid' => $beneficiaryId, 'lid' => $absorptionLogId]);
        }

        echo json_encode(['success' => true, 'message' => 'Beneficiary created successfully', 'id' => $gipId]);
    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode(['success' => false, 'error' => 'Failed to create beneficiary: ' . $e->getMessage()]);
    }
}

/**
 * PUT: Update existing beneficiary
 */ elseif ($method === 'PUT') {
    $data = json_decode(file_get_contents('php://input'), true);

    if (empty($data['id'])) {
        http_response_code(400);
        echo json_encode(['success' => false, 'error' => 'Beneficiary ID is required']);
        exit();
    }

    try {
        // Get foreign key IDs (similar to POST)
        $genderId = null;
        if (!empty($data['gender'])) {
            $stmt = $pdo->prepare("SELECT gender_id FROM genders WHERE gender_name = :gender");
            $stmt->execute(['gender' => $data['gender']]);
            $genderId = $stmt->fetchColumn();
        }

        $officeId = null;
        if (!empty($data['office'])) {
            $stmt = $pdo->prepare("SELECT office_id FROM offices WHERE office_name LIKE :office_name OR office_code = :office_code");
            $stmt->execute([
                'office_name' => '%' . $data['office'] . '%',
                'office_code' => $data['office']
            ]);
            $officeId = $stmt->fetchColumn();
        }

        $statusId = null;
        if (!empty($data['remarks'])) {
            $stmt = $pdo->prepare("SELECT status_id FROM status_types WHERE status_name = :status");
            $stmt->execute(['status' => $data['remarks']]);
            $statusId = $stmt->fetchColumn();
        }

        // Handle absorption log if status changed to ABSORBED
        $absorptionLogId = null;
        if (!empty($data['remarks']) && $data['remarks'] === 'ABSORBED') {
            // Check if absorption log already exists
            $stmt = $pdo->prepare("SELECT absorption_log_id FROM beneficiaries WHERE gip_id = :id");
            $stmt->execute(['id' => $data['id']]);
            $existingLogId = $stmt->fetchColumn();

            if (!$existingLogId) {
                $stmt = $pdo->prepare("SELECT beneficiary_id FROM beneficiaries WHERE gip_id = :id");
                $stmt->execute(['id' => $data['id']]);
                $beneficiaryId = $stmt->fetchColumn();

                $stmt = $pdo->prepare("
                    INSERT INTO absorption_logs (beneficiary_id, absorption_datetime, notes)
                    VALUES (:bid, NOW(), 'Status updated to ABSORBED')
                ");
                $stmt->execute(['bid' => $beneficiaryId]);
                $absorptionLogId = $pdo->lastInsertId();
            }
        }

        // Update beneficiary
        $stmt = $pdo->prepare("
            UPDATE beneficiaries SET
                gip_id = :new_gip_id,
                full_name = :name,
                contact_number = :contact,
                address = :address,
                birthday = :birthday,
                gender_id = :gender_id,
                education = :education,
                start_date = :start_date,
                end_date = :end_date,
                series_number = :series_no,
                office_id = :office_id,
                designation = :designation,
                replacement_notes = :replacement,
                status_id = :status_id,
                absorption_log_id = COALESCE(:absorption_log_id, absorption_log_id)
            WHERE gip_id = :old_id
        ");

        $stmt->execute([
            'old_id' => $data['id'],
            'new_gip_id' => $data['gip_id'] ?? $data['id'],
            'name' => $data['name'],
            'contact' => $data['contact'] ?? null,
            'address' => $data['address'] ?? null,
            'birthday' => $data['birthday'] ?? null,
            'gender_id' => $genderId,
            'education' => $data['education'] ?? null,
            'start_date' => $data['startDate'],
            'end_date' => $data['endDate'],
            'series_no' => $data['seriesNo'] ?? null,
            'office_id' => $officeId,
            'designation' => $data['designation'],
            'replacement' => $data['replacement'] ?? null,
            'status_id' => $statusId,
            'absorption_log_id' => $absorptionLogId
        ]);

        echo json_encode(['success' => true, 'message' => 'Beneficiary updated successfully']);
    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode(['success' => false, 'error' => 'Failed to update beneficiary: ' . $e->getMessage()]);
    }
}

/**
 * PATCH: Archive or Restore beneficiary (Soft Delete)
 */ elseif ($method === 'PATCH') {
    $id = $_GET['id'] ?? null;
    $action = $_GET['action'] ?? null;

    if (!$id || !$action) {
        http_response_code(400);
        echo json_encode(['success' => false, 'error' => 'ID and action are required']);
        exit();
    }

    try {
        if ($action === 'archive') {
            // Soft delete
            $stmt = $pdo->prepare("
                UPDATE beneficiaries 
                SET is_archived = TRUE, archived_at = NOW()
                WHERE gip_id = :id AND is_archived = FALSE
            ");
            $stmt->execute(['id' => $id]);

            if ($stmt->rowCount() > 0) {
                echo json_encode(['success' => true, 'message' => 'Beneficiary archived successfully']);
            } else {
                http_response_code(404);
                echo json_encode(['success' => false, 'error' => 'Beneficiary not found or already archived']);
            }
        } elseif ($action === 'restore') {
            // Restore archived record
            $stmt = $pdo->prepare("
                UPDATE beneficiaries 
                SET is_archived = FALSE, archived_at = NULL, archived_by = NULL
                WHERE gip_id = :id AND is_archived = TRUE
            ");
            $stmt->execute(['id' => $id]);

            if ($stmt->rowCount() > 0) {
                echo json_encode(['success' => true, 'message' => 'Beneficiary restored successfully']);
            } else {
                http_response_code(404);
                echo json_encode(['success' => false, 'error' => 'Beneficiary not found or not archived']);
            }
        } else {
            http_response_code(400);
            echo json_encode(['success' => false, 'error' => 'Invalid action. Use "archive" or "restore"']);
        }
    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode(['success' => false, 'error' => 'Operation failed: ' . $e->getMessage()]);
    }
}

/**
 * Unsupported method
 */ else {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method not allowed']);
}
