<?php
/**
 * Logs API Endpoint
 * DOLE-GIP System
 * 
 * RESTful API for managing Accomplishment Reports (AR) and Daily Time Records (DTR)
 * Supports: GET (list), POST (create), PUT (update status), DELETE (remove)
 */

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
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
 * GET: Retrieve logs (AR or DTR)
 */
if ($method === 'GET') {
    $type = $_GET['type'] ?? null; // 'ar' or 'dtr'
    $beneficiaryId = $_GET['beneficiary_id'] ?? null;
    $gipId = $_GET['gip_id'] ?? null;

    if (!$type || ($type !== 'ar' && $type !== 'dtr' && $type !== 'docs')) {
        http_response_code(400);
        echo json_encode(['success' => false, 'error' => 'Type must be "ar", "dtr", or "docs"']);
        exit();
    }

    try {
        // Convert gip_id to beneficiary_id if provided
        if ($gipId && !$beneficiaryId) {
            $stmt = $pdo->prepare("SELECT beneficiary_id FROM beneficiaries WHERE gip_id = :gip_id");
            $stmt->execute(['gip_id' => $gipId]);
            $beneficiaryId = $stmt->fetchColumn();

            if (!$beneficiaryId) {
                http_response_code(404);
                echo json_encode(['success' => false, 'error' => 'Beneficiary not found']);
                exit();
            }
        }

        if ($type === 'ar') {
            // Get Accomplishment Reports
            $query = "SELECT ar_id as id, period, date_submitted as date, status, created_at, updated_at 
                      FROM accomplishment_reports";

            if ($beneficiaryId) {
                $query .= " WHERE beneficiary_id = :beneficiary_id";
            }

            $query .= " ORDER BY date_submitted DESC";

            $stmt = $pdo->prepare($query);
            if ($beneficiaryId) {
                $stmt->execute(['beneficiary_id' => $beneficiaryId]);
            } else {
                $stmt->execute();
            }

            $logs = $stmt->fetchAll();
            echo json_encode(['success' => true, 'logs' => $logs, 'type' => 'ar']);

        } elseif ($type === 'dtr') { // dtr
            // Get Daily Time Records
            $query = "SELECT dtr_id as id, record_date as date, weekday as day, status, created_at, updated_at 
                      FROM daily_time_records";

            if ($beneficiaryId) {
                $query .= " WHERE beneficiary_id = :beneficiary_id";
            }

            $query .= " ORDER BY record_date DESC";

            $stmt = $pdo->prepare($query);
            if ($beneficiaryId) {
                $stmt->execute(['beneficiary_id' => $beneficiaryId]);
            } else {
                $stmt->execute();
            }

            $logs = $stmt->fetchAll();

            // Format for frontend (period = date for DTR)
            foreach ($logs as &$log) {
                $log['period'] = $log['date'];
            }

            echo json_encode(['success' => true, 'logs' => $logs, 'type' => 'dtr']);
        } else { // docs
            // Get Required Documents
            $query = "SELECT doc_id as id, document_name as name, status, updated_at 
                      FROM beneficiary_documents";

            if ($beneficiaryId) {
                $query .= " WHERE beneficiary_id = :beneficiary_id";
            }

            $query .= " ORDER BY document_name ASC";

            $stmt = $pdo->prepare($query);
            if ($beneficiaryId) {
                $stmt->execute(['beneficiary_id' => $beneficiaryId]);
            } else {
                $stmt->execute();
            }

            $logs = $stmt->fetchAll();
            echo json_encode(['success' => true, 'logs' => $logs, 'type' => 'docs']);
        }
    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode(['success' => false, 'error' => 'Database query failed: ' . $e->getMessage()]);
    }
}

/**
 * POST: Create new log entry
 */ elseif ($method === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    $type = $data['type'] ?? null;
    $gipId = $data['gip_id'] ?? null;

    if (!$type || ($type !== 'ar' && $type !== 'dtr' && $type !== 'docs')) {
        http_response_code(400);
        echo json_encode(['success' => false, 'error' => 'Type must be "ar", "dtr", or "docs"']);
        exit();
    }

    if (!$gipId) {
        http_response_code(400);
        echo json_encode(['success' => false, 'error' => 'gip_id is required']);
        exit();
    }

    try {
        // Get beneficiary_id from gip_id
        $stmt = $pdo->prepare("SELECT beneficiary_id FROM beneficiaries WHERE gip_id = :gip_id");
        $stmt->execute(['gip_id' => $gipId]);
        $beneficiaryId = $stmt->fetchColumn();

        if (!$beneficiaryId) {
            http_response_code(404);
            echo json_encode(['success' => false, 'error' => 'Beneficiary not found']);
            exit();
        }

        if ($type === 'ar') {
            // Create Accomplishment Report
            $period = !empty($data['period']) ? strtoupper($data['period']) : null;
            $dateSubmitted = $data['date_submitted'] ?? date('Y-m-d');
            $status = strtoupper($data['status'] ?? 'PENDING');

            if (!$period) {
                http_response_code(400);
                echo json_encode(['success' => false, 'error' => 'Period is required for AR']);
                exit();
            }

            $stmt = $pdo->prepare("
                INSERT INTO accomplishment_reports (beneficiary_id, period, date_submitted, status)
                VALUES (:beneficiary_id, :period, :date_submitted, :status)
            ");

            $stmt->execute([
                'beneficiary_id' => $beneficiaryId,
                'period' => $period,
                'date_submitted' => $dateSubmitted,
                'status' => $status
            ]);

            $logId = $pdo->lastInsertId();
            echo json_encode(['success' => true, 'message' => 'AR log created successfully', 'id' => $logId]);

        } elseif ($type === 'dtr') { // dtr
            // Create Daily Time Record
            $recordDate = $data['record_date'] ?? date('Y-m-d');
            $weekday = $data['weekday'] ?? strtoupper(date('l', strtotime($recordDate)));
            $status = $data['status'] ?? 'PENDING';

            $stmt = $pdo->prepare("
                INSERT INTO daily_time_records (beneficiary_id, record_date, weekday, status)
                VALUES (:beneficiary_id, :record_date, :weekday, :status)
                ON DUPLICATE KEY UPDATE status = :status_update
            ");

            $stmt->execute([
                'beneficiary_id' => $beneficiaryId,
                'record_date' => $recordDate,
                'weekday' => $weekday,
                'status' => $status,
                'status_update' => $status
            ]);

            $logId = $pdo->lastInsertId();
            echo json_encode(['success' => true, 'message' => 'DTR log created successfully', 'id' => $logId]);
        } else { // docs
            // Create or Update Document status
            $docName = !empty($data['document_name']) ? strtoupper($data['document_name']) : null;
            $status = strtoupper($data['status'] ?? 'PENDING');

            if (!$docName) {
                http_response_code(400);
                echo json_encode(['success' => false, 'error' => 'Document name is required']);
                exit();
            }

            $stmt = $pdo->prepare("
                INSERT INTO beneficiary_documents (beneficiary_id, document_name, status)
                VALUES (:beneficiary_id, :doc_name, :status)
                ON DUPLICATE KEY UPDATE status = :status_update
            ");

            $stmt->execute([
                'beneficiary_id' => $beneficiaryId,
                'doc_name' => $docName,
                'status' => $status,
                'status_update' => $status
            ]);

            $logId = $pdo->lastInsertId();
            // If it was an update, lastInsertId might be 0 or current.
            if ($logId === 0 || $logId === "0") {
                $stmt = $pdo->prepare("SELECT doc_id FROM beneficiary_documents WHERE beneficiary_id = :bid AND document_name = :dname");
                $stmt->execute(['bid' => $beneficiaryId, 'dname' => $docName]);
                $logId = $stmt->fetchColumn();
            }

            echo json_encode(['success' => true, 'message' => 'Document status saved successfully', 'id' => $logId]);
        }
    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode(['success' => false, 'error' => 'Failed to process log: ' . $e->getMessage()]);
    }
}

/**
 * PUT: Update log status
 */ elseif ($method === 'PUT') {
    $data = json_decode(file_get_contents('php://input'), true);

    $type = $data['type'] ?? null;
    $logId = $data['id'] ?? null;
    $status = $data['status'] ?? null;

    if (!$type || !$logId || !$status) {
        http_response_code(400);
        echo json_encode(['success' => false, 'error' => 'Type, ID, and status are required']);
        exit();
    }

    if (!in_array($status, ['VERIFIED', 'PENDING', 'DECLINED'])) {
        http_response_code(400);
        echo json_encode(['success' => false, 'error' => 'Invalid status']);
        exit();
    }

    try {
        if ($type === 'ar') {
            $stmt = $pdo->prepare("UPDATE accomplishment_reports SET status = :status WHERE ar_id = :id");
        } elseif ($type === 'dtr') {
            $stmt = $pdo->prepare("UPDATE daily_time_records SET status = :status WHERE dtr_id = :id");
        } else { // docs
            $stmt = $pdo->prepare("UPDATE beneficiary_documents SET status = :status WHERE doc_id = :id");
        }

        $stmt->execute(['status' => $status, 'id' => $logId]);

        if ($stmt->rowCount() > 0) {
            echo json_encode(['success' => true, 'message' => 'Log status updated successfully']);
        } else {
            // Check if it exists but status is the same
            $existsStmt = null;
            if ($type === 'ar')
                $existsStmt = $pdo->prepare("SELECT 1 FROM accomplishment_reports WHERE ar_id = :id");
            elseif ($type === 'dtr')
                $existsStmt = $pdo->prepare("SELECT 1 FROM daily_time_records WHERE dtr_id = :id");
            else
                $existsStmt = $pdo->prepare("SELECT 1 FROM beneficiary_documents WHERE doc_id = :id");

            $existsStmt->execute(['id' => $logId]);
            if ($existsStmt->fetch()) {
                echo json_encode(['success' => true, 'message' => 'Status already up to date']);
            } else {
                http_response_code(404);
                echo json_encode(['success' => false, 'error' => 'Log not found']);
            }
        }
    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode(['success' => false, 'error' => 'Failed to update log: ' . $e->getMessage()]);
    }
}

/**
 * DELETE: Remove log entry
 */ elseif ($method === 'DELETE') {
    $type = $_GET['type'] ?? null;
    $logId = $_GET['id'] ?? null;

    if (!$type || !$logId) {
        http_response_code(400);
        echo json_encode(['success' => false, 'error' => 'Type and ID are required']);
        exit();
    }

    try {
        if ($type === 'ar') {
            $stmt = $pdo->prepare("DELETE FROM accomplishment_reports WHERE ar_id = :id");
        } else {
            $stmt = $pdo->prepare("DELETE FROM daily_time_records WHERE dtr_id = :id");
        }

        $stmt->execute(['id' => $logId]);

        if ($stmt->rowCount() > 0) {
            echo json_encode(['success' => true, 'message' => 'Log deleted successfully']);
        } else {
            http_response_code(404);
            echo json_encode(['success' => false, 'error' => 'Log not found']);
        }
    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode(['success' => false, 'error' => 'Failed to delete log: ' . $e->getMessage()]);
    }
}

/**
 * Unsupported method
 */ else {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method not allowed']);
}
