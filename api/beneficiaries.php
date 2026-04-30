<?php
/**
 * Beneficiaries API Endpoint
 * DOLE-GIP System
 * 
 * RESTful API for managing beneficiary records
 * Supports: GET (list/single), POST (create), PUT (update), PATCH (archive/restore)
 */

require_once __DIR__ . '/../config/db.php';
handleCors();
header('Content-Type: application/json');

session_start();

// In Cloud/Serverless environments, sessions don't persist.
// Accept user_id from session (localhost), POST body, GET param, or X-User-Id header.
$current_user_id = $_SESSION['user_id'] ?? null;
$rawBody = file_get_contents('php://input');
$jsonInput = json_decode($rawBody, true) ?? [];

if (!$current_user_id && isset($jsonInput['user_id'])) $current_user_id = $jsonInput['user_id'];
if (!$current_user_id && isset($_POST['user_id'])) $current_user_id = $_POST['user_id'];
if (!$current_user_id && isset($_GET['user_id'])) $current_user_id = $_GET['user_id'];
if (!$current_user_id && isset($_SERVER['HTTP_X_USER_ID'])) $current_user_id = $_SERVER['HTTP_X_USER_ID'];

if (!$current_user_id) {
    echo json_encode(['success' => false, 'error' => 'Not authenticated']);
    exit;
}

$current_username = null;

try {
    $pdo = getDbConnection();
    // [HYBRID] Check actual PDO driver to mathematically guarantee we use the correct SQL syntax.
    $isSupabase = $pdo->getAttribute(PDO::ATTR_DRIVER_NAME) === 'pgsql';
    debugLog('beneficiaries.init', ['method' => $_SERVER['REQUEST_METHOD'] ?? null, 'driver' => $pdo->getAttribute(PDO::ATTR_DRIVER_NAME)]);

    /**
     * Check if a column exists (hybrid-safe).
     */
    function tableHasColumn(PDO $pdo, bool $isSupabase, string $table, string $column): bool
    {
        static $cache = [];
        $key = ($isSupabase ? 'pg' : 'my') . "|$table|$column";
        if (array_key_exists($key, $cache)) return $cache[$key];

        try {
            if ($isSupabase) {
                $stmt = $pdo->prepare("
                    SELECT 1
                    FROM information_schema.columns
                    WHERE table_schema = current_schema()
                      AND table_name = :t
                      AND column_name = :c
                    LIMIT 1
                ");
            } else {
                $stmt = $pdo->prepare("
                    SELECT 1
                    FROM information_schema.columns
                    WHERE table_schema = DATABASE()
                      AND table_name = :t
                      AND column_name = :c
                    LIMIT 1
                ");
            }
            $stmt->execute(['t' => $table, 'c' => $column]);
            $cache[$key] = (bool)$stmt->fetchColumn();
            return $cache[$key];
        } catch (Throwable $e) {
            $cache[$key] = false;
            return false;
        }
    }

    /**
     * Resolve status_id. If remarks missing, auto-derive based on endDate.
     */
    function resolveStatusId(PDO $pdo, ?string $remarks, ?string $endDate): array
    {
        $normalized = strtoupper(trim((string)($remarks ?? '')));

        if ($normalized === '') {
            // Auto-status: if endDate is before today => EXPIRED else ONGOING
            $today = new DateTimeImmutable('today');
            if (!empty($endDate)) {
                try {
                    $end = new DateTimeImmutable($endDate);
                    $normalized = ($end < $today) ? 'EXPIRED' : 'ONGOING';
                } catch (Throwable $e) {
                    $normalized = 'ONGOING';
                }
            } else {
                $normalized = 'ONGOING';
            }
        }
        // Normalize label matching to tolerate case/spacing differences.
        // e.g. "ON GOING" vs "ONGOING"
        $normalizedCompact = str_replace(' ', '', $normalized);
        $stmt = $pdo->prepare("
            SELECT status_id
            FROM status_types
            WHERE REPLACE(UPPER(TRIM(status_name)), ' ', '') = :status
            LIMIT 1
        ");
        $stmt->execute(['status' => $normalizedCompact]);
        $id = $stmt->fetchColumn();

        return [
            'status_name' => $normalized,
            'status_id' => $id !== false ? (int)$id : null,
        ];
    }

    // DB connection is established, session is started.
    // We already have $current_user_id.
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Database connection failed: ' . $e->getMessage()]);
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
        $ageExpr = $isSupabase
            ? "COALESCE(b.age, EXTRACT(YEAR FROM AGE(CURRENT_DATE, b.birthday)))"
            : "COALESCE(b.age, TIMESTAMPDIFF(YEAR, b.birthday, CURDATE()))";
        $startDateFmtExpr = $isSupabase
            ? "TO_CHAR(b.start_date, 'MM/DD/YYYY')"
            : "DATE_FORMAT(b.start_date, '%m/%d/%Y')";
        $endDateFmtExpr = $isSupabase
            ? "TO_CHAR(b.end_date, 'MM/DD/YYYY')"
            : "DATE_FORMAT(b.end_date, '%m/%d/%Y')";
        $absorbWhereExpr = $isSupabase ? 'al."where"' : 'al.`where`';
        $absorbPositionExpr = $isSupabase ? 'al."position"' : 'al.`position`';
        $absorbAgencyExpr = $isSupabase ? 'al."agency"' : 'al.`agency`';

        // Postgres lowercases unquoted identifiers, so preserve camelCase keys for JS consumers.
        $aliasStartDate = $isSupabase ? '"startDate"' : 'startDate';
        $aliasEndDate = $isSupabase ? '"endDate"' : 'endDate';
        $aliasStartDateFormatted = $isSupabase ? '"startDateFormatted"' : 'startDateFormatted';
        $aliasEndDateFormatted = $isSupabase ? '"endDateFormatted"' : 'endDateFormatted';
        $aliasSeriesNo = $isSupabase ? '"seriesNo"' : 'seriesNo';
        $aliasAbsorbDate = $isSupabase ? '"absorbDate"' : 'absorbDate';
        $aliasResignedDate = $isSupabase ? '"resignedDate"' : 'resignedDate';
        $aliasIsArchived = $isSupabase ? '"isArchived"' : 'isArchived';
        $aliasCreatedAt = $isSupabase ? '"createdAt"' : 'createdAt';
        $aliasUpdatedAt = $isSupabase ? '"updatedAt"' : 'updatedAt';
        $aliasDesignatedBeneficiary = $isSupabase ? '"designatedBeneficiary"' : 'designatedBeneficiary';
        $aliasRelationshipToAssured = $isSupabase ? '"relationshipToAssured"' : 'relationshipToAssured';
        $designatedBeneficiaryExpr = tableHasColumn($pdo, $isSupabase, 'beneficiaries', 'designated_beneficiary') ? 'b.designated_beneficiary' : 'NULL';
        $relationshipToAssuredExpr = tableHasColumn($pdo, $isSupabase, 'beneficiaries', 'relationship_to_assured') ? 'b.relationship_to_assured' : 'NULL';

        if (isset($_GET['get_offices'])) {
            // Get all unique office names from both the dedicated table and direct column
            $stmt = $pdo->prepare("
                SELECT DISTINCT office_name FROM (
                    SELECT office_name FROM offices
                    UNION
                    SELECT office_name FROM beneficiaries WHERE office_name IS NOT NULL
                ) as combined_offices
                WHERE office_name != ''
                ORDER BY office_name ASC
            ");
            $stmt->execute();
            $offices = $stmt->fetchAll(PDO::FETCH_COLUMN);
            echo json_encode(['success' => true, 'offices' => $offices]);
            exit();
        }

        if (isset($_GET['replacement_candidates'])) {
            $query = trim((string)($_GET['q'] ?? ''));
            $limit = (int)($_GET['limit'] ?? 20);
            if ($limit < 1) $limit = 20;
            if ($limit > 50) $limit = 50;

            if ($query !== '') {
                $stmt = $pdo->prepare("
                    SELECT
                        b.gip_id as id,
                        b.full_name as name,
                        {$startDateFmtExpr} as {$aliasStartDateFormatted},
                        {$endDateFmtExpr} as {$aliasEndDateFormatted},
                        b.start_date as {$aliasStartDate},
                        b.end_date as {$aliasEndDate}
                    FROM beneficiaries b
                    WHERE b.is_archived = " . ($isSupabase ? "FALSE" : "0") . "
                      AND UPPER(b.full_name) LIKE :search
                    ORDER BY b.full_name ASC
                    LIMIT :limit
                ");
                $stmt->bindValue(':search', '%' . strtoupper($query) . '%', PDO::PARAM_STR);
                $stmt->bindValue(':limit', $limit, PDO::PARAM_INT);
                $stmt->execute();
            } else {
                $stmt = $pdo->prepare("
                    SELECT
                        b.gip_id as id,
                        b.full_name as name,
                        {$startDateFmtExpr} as {$aliasStartDateFormatted},
                        {$endDateFmtExpr} as {$aliasEndDateFormatted},
                        b.start_date as {$aliasStartDate},
                        b.end_date as {$aliasEndDate}
                    FROM beneficiaries b
                    WHERE b.is_archived = " . ($isSupabase ? "FALSE" : "0") . "
                    ORDER BY b.created_at DESC
                    LIMIT :limit
                ");
                $stmt->bindValue(':limit', $limit, PDO::PARAM_INT);
                $stmt->execute();
            }

            $candidates = $stmt->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode(['success' => true, 'candidates' => $candidates]);
            exit();
        }

        if (isset($_GET['next_id'])) {
            $year = $_GET['year'] ?? date('Y');
            $prefix = "ROX-RD-ESIG-$year-";
            // Fast anchored query using index
            $stmt = $pdo->prepare("SELECT gip_id FROM beneficiaries WHERE gip_id LIKE :prefix ORDER BY gip_id DESC LIMIT 1");
            $stmt->execute(['prefix' => $prefix . '%']);
            $lastId = $stmt->fetchColumn();
            
            $nextId = $prefix . '0001';
            if ($lastId && preg_match('/ROX-RD-ESIG-(\d{4})-(\d{4})/', $lastId, $matches)) {
                $nextId = sprintf('ROX-RD-ESIG-%s-%04d', $matches[1], intval($matches[2]) + 1);
            }

            echo json_encode(['success' => true, 'nextId' => $nextId]);
            exit();
        }

        if (isset($_GET['next_series_no'])) {
            $year = $_GET['year'] ?? date('Y');
            $prefix = $year . '-';
            // Fast anchored query using index
            $stmt = $pdo->prepare("SELECT series_number FROM beneficiaries WHERE series_number LIKE :prefix ORDER BY series_number DESC LIMIT 1");
            $stmt->execute(['prefix' => $prefix . '%']);
            $lastSeries = $stmt->fetchColumn();
            
            $nextSeries = $year . '-00-001';
            if ($lastSeries && preg_match('/(\d{4})-(\d{2})-(\d{3})/', $lastSeries, $matches)) {
                $nextSeries = sprintf('%s-%s-%03d', $matches[1], $matches[2], intval($matches[3]) + 1);
            }

            echo json_encode(['success' => true, 'nextSeries' => $nextSeries]);
            exit();
        }

        if ($id) {
            // Get single beneficiary
            $stmt = $pdo->prepare("
                SELECT 
                    b.gip_id as id,
                    b.full_name as name,
                    b.contact_number as contact,
                    b.address,
                    b.birthday,
                    {$ageExpr} as age,
                    g.gender_name as gender,
                    b.education,
                    {$designatedBeneficiaryExpr} as {$aliasDesignatedBeneficiary},
                    {$relationshipToAssuredExpr} as {$aliasRelationshipToAssured},
                    b.start_date as {$aliasStartDate},
                    b.end_date as {$aliasEndDate},
                    {$startDateFmtExpr} as {$aliasStartDateFormatted},
                    {$endDateFmtExpr} as {$aliasEndDateFormatted},
                    b.series_number as {$aliasSeriesNo},
                    COALESCE(o.office_name, b.office_name) as office,
                    b.designation,
                    b.replacement_notes as replacement,
                    s.status_name as remarks,
                    al.absorption_datetime as {$aliasAbsorbDate},
                    {$absorbWhereExpr} as absorb_where,
                    {$absorbPositionExpr} as absorb_position,
                    {$absorbAgencyExpr} as absorb_agency,
                    u.username as absorb_by,
                    rl.resignation_datetime as {$aliasResignedDate},
                    rl.reason_description as resigned_reason,
                    ru.username as resigned_by,
                    b.is_archived as {$aliasIsArchived},
                    b.created_at as {$aliasCreatedAt},
                    b.updated_at as {$aliasUpdatedAt}
                FROM beneficiaries b
                LEFT JOIN genders g ON b.gender_id = g.gender_id
                LEFT JOIN offices o ON b.office_id = o.office_id
                LEFT JOIN status_types s ON b.status_id = s.status_id
                LEFT JOIN absorption_logs al ON b.absorption_log_id = al.log_id
                LEFT JOIN users u ON al.logged_by = u.user_id
                LEFT JOIN resigned_logs rl ON b.resigned_log_id = rl.log_id
                LEFT JOIN users ru ON rl.logged_by = ru.user_id
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

            $whereClause = $isSupabase ? "b.is_archived = FALSE" : "b.is_archived = 0";
            if ($showAll) {
                $whereClause = "1=1";
            } elseif ($showArchived) {
                $whereClause = $isSupabase ? "b.is_archived = TRUE" : "b.is_archived = 1";
            }

            $stmt = $pdo->prepare("
                SELECT 
                    b.gip_id as id,
                    b.full_name as name,
                    b.contact_number as contact,
                    b.address,
                    b.birthday,
                    {$ageExpr} as age,
                    g.gender_name as gender,
                    b.education,
                    {$designatedBeneficiaryExpr} as {$aliasDesignatedBeneficiary},
                    {$relationshipToAssuredExpr} as {$aliasRelationshipToAssured},
                    b.start_date as {$aliasStartDate},
                    b.end_date as {$aliasEndDate},
                    {$startDateFmtExpr} as {$aliasStartDateFormatted},
                    {$endDateFmtExpr} as {$aliasEndDateFormatted},
                    b.series_number as {$aliasSeriesNo},
                    COALESCE(o.office_name, b.office_name) as office,
                    b.designation,
                    b.replacement_notes as replacement,
                    s.status_name as remarks,
                    al.absorption_datetime as {$aliasAbsorbDate},
                    {$absorbWhereExpr} as absorb_where,
                    {$absorbPositionExpr} as absorb_position,
                    {$absorbAgencyExpr} as absorb_agency,
                    u.username as absorb_by,
                    rl.resignation_datetime as {$aliasResignedDate},
                    rl.reason_description as resigned_reason,
                    ru.username as resigned_by,
                    b.is_archived as {$aliasIsArchived},
                    b.created_at as {$aliasCreatedAt}
                FROM beneficiaries b
                LEFT JOIN genders g ON b.gender_id = g.gender_id
                LEFT JOIN offices o ON b.office_id = o.office_id
                LEFT JOIN status_types s ON b.status_id = s.status_id
                LEFT JOIN absorption_logs al ON b.absorption_log_id = al.log_id
                LEFT JOIN users u ON al.logged_by = u.user_id
                LEFT JOIN resigned_logs rl ON b.resigned_log_id = rl.log_id
                LEFT JOIN users ru ON rl.logged_by = ru.user_id
                WHERE $whereClause
                ORDER BY b.full_name ASC, b.created_at ASC
            ");
            $stmt->execute();
            $beneficiaries = $stmt->fetchAll();

            echo json_encode(['success' => true, 'beneficiaries' => $beneficiaries]);
        }
    } catch (PDOException $e) {
        error_log("BENEFICIARIES GET ERROR: " . $e->getMessage() . " | SQL: " . ($stmt ? $stmt->queryString : "N/A"));
        debugLog('beneficiaries.get.error', ['msg' => $e->getMessage(), 'trace' => $e->getTraceAsString()]);
        http_response_code(500);
        echo json_encode(['success' => false, 'error' => 'Database query failed: ' . $e->getMessage()]);
    }
}

/**
 * POST: Create new beneficiary
 */ elseif ($method === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    
    if (!$data) {
        http_response_code(400);
        echo json_encode(['success' => false, 'error' => 'Invalid JSON']);
        exit();
    }

    // Validate required fields (ONLY name is now strictly required as per user's request)
    $required = ['name'];
    foreach ($required as $field) {
        if (empty($data[$field])) {
            http_response_code(400);
            echo json_encode(['success' => false, 'error' => "Missing required field: $field"]);
            exit();
        }
    }

    try {
        debugLog('beneficiaries.post', ['keys' => array_keys($data), 'id' => $data['id'] ?? null, 'gip_id' => $data['gip_id'] ?? null]);
        
        $generateNextGipId = function (?string $year = null) use ($pdo): string {
            $year = $year ?: date('Y');
            $prefix = "ROX-RD-ESIG-$year-";
            $stmt = $pdo->prepare("SELECT gip_id FROM beneficiaries WHERE gip_id LIKE :prefix ORDER BY gip_id DESC LIMIT 1");
            $stmt->execute(['prefix' => $prefix . '%']);
            $lastId = $stmt->fetchColumn();
            
            if ($lastId && preg_match('/ROX-RD-ESIG-(\d{4})-(\d{4})/', $lastId, $matches)) {
                return sprintf('ROX-RD-ESIG-%s-%04d', $matches[1], intval($matches[2]) + 1);
            }
            return $prefix . '0001';
        };

        // Get foreign key IDs
        $genderId = null;
        if (!empty($data['gender'])) {
            $stmt = $pdo->prepare("SELECT gender_id FROM genders WHERE gender_name = :gender");
            $stmt->execute(['gender' => $data['gender']]);
            $genderId = $stmt->fetchColumn() ?: null;
        }

        $officeId = null;
        if (!empty($data['office'])) {
            $stmt = $pdo->prepare("SELECT office_id FROM offices WHERE office_name LIKE :office_name OR office_code = :office_code");
            $stmt->execute([
                'office_name' => '%' . $data['office'] . '%',
                'office_code' => $data['office']
            ]);
            $officeId = $stmt->fetchColumn() ?: null;
        }

        $resolvedStatus = resolveStatusId($pdo, $data['remarks'] ?? null, $data['endDate'] ?? null);
        $statusId = $resolvedStatus['status_id'];
        // Keep JS-visible remarks consistent if caller didn't send it
        if (empty($data['remarks']) && !empty($resolvedStatus['status_name'])) {
            $data['remarks'] = $resolvedStatus['status_name'];
        }

        // Handle absorption log if status is ABSORBED
        $absorptionLogId = null;
        if (!empty($data['remarks']) && $data['remarks'] === 'ABSORBED') {
            $absorbDate = !empty($data['absorbDate']) ? date('Y-m-d H:i:s', strtotime($data['absorbDate'])) : date('Y-m-d H:i:s');
            if ($isSupabase) {
                $stmt = $pdo->prepare("
                    INSERT INTO absorption_logs (beneficiary_id, absorption_datetime, \"where\", \"position\", \"agency\", logged_by)
                    VALUES (NULL, :absorbDate, :where, :position, :agency, :logged_by)
                    RETURNING log_id
                ");
            } else {
                $stmt = $pdo->prepare("
                    INSERT INTO absorption_logs (beneficiary_id, absorption_datetime, `where`, `position`, `agency`, logged_by)
                    VALUES (NULL, :absorbDate, :where, :position, :agency, :logged_by)
                ");
            }
            $stmt->execute([
                'absorbDate' => $absorbDate,
                'where' => $data['absorb_where'] ?? null,
                'position' => $data['absorb_position'] ?? null,
                'agency' => $data['absorb_agency'] ?? null,
                'logged_by' => $current_user_id
            ]);
            $absorptionLogId = $isSupabase ? $stmt->fetchColumn() : $pdo->lastInsertId();
        }

        // Handle resigned log if status is RESIGNED
        $resignedLogId = null;
        if (!empty($data['remarks']) && $data['remarks'] === 'RESIGNED') {
            $resignedDate = !empty($data['resignedDate']) ? date('Y-m-d H:i:s', strtotime($data['resignedDate'])) : date('Y-m-d H:i:s');
            if ($isSupabase) {
                $stmt = $pdo->prepare("
                    INSERT INTO resigned_logs (beneficiary_id, resignation_datetime, reason_description, logged_by)
                    VALUES (NULL, :resignedDate, :reason, :logged_by)
                    RETURNING log_id
                ");
            } else {
                $stmt = $pdo->prepare("
                    INSERT INTO resigned_logs (beneficiary_id, resignation_datetime, reason_description, logged_by)
                    VALUES (NULL, :resignedDate, :reason, :logged_by)
                ");
            }
            $stmt->execute([
                'resignedDate' => $resignedDate,
                'reason' => $data['resigned_reason'] ?? null,
                'logged_by' => $current_user_id
            ]);
            $resignedLogId = $isSupabase ? $stmt->fetchColumn() : $pdo->lastInsertId();
        }

        // Generate GIP ID if not provided
        $candidateId = $data['gip_id'] ?? $data['id'] ?? null;
        // Never accept temp/local IDs as real database identifiers
        $gipId = (is_string($candidateId) && str_starts_with($candidateId, 'temp_')) ? null : $candidateId;
        if (!$gipId) {
            $bYear = !empty($data['startDate']) ? date('Y', strtotime($data['startDate'])) : null;
            $gipId = $generateNextGipId($bYear);
        }

        // Audit columns (only if present in schema)
        $hasCreatedBy = tableHasColumn($pdo, $isSupabase, 'beneficiaries', 'created_by');
        $hasUpdatedBy = tableHasColumn($pdo, $isSupabase, 'beneficiaries', 'updated_by');
        $hasDesignatedBeneficiary = tableHasColumn($pdo, $isSupabase, 'beneficiaries', 'designated_beneficiary');
        $hasRelationshipToAssured = tableHasColumn($pdo, $isSupabase, 'beneficiaries', 'relationship_to_assured');
        $beneficiaryExtraColumns = ($hasDesignatedBeneficiary ? ", designated_beneficiary" : "") .
            ($hasRelationshipToAssured ? ", relationship_to_assured" : "");
        $beneficiaryExtraValues = ($hasDesignatedBeneficiary ? ", :designated_beneficiary" : "") .
            ($hasRelationshipToAssured ? ", :relationship_to_assured" : "");

        // Insert beneficiary with RETURNING beneficiary_id
        if ($isSupabase) {
            $stmt = $pdo->prepare("
                INSERT INTO beneficiaries (
                    gip_id, full_name, contact_number, address, birthday, age,
                    gender_id, education, start_date, end_date, series_number,
                    office_id, office_name, designation, replacement_notes, status_id, absorption_log_id, resigned_log_id
                    " . $beneficiaryExtraColumns . "
                    " . ($hasCreatedBy ? ", created_by" : "") . "
                    " . ($hasUpdatedBy ? ", updated_by" : "") . "
                ) VALUES (
                    :gip_id, :name, :contact, :address, :birthday, :age,
                    :gender_id, :education, :start_date, :end_date, :series_no,
                    :office_id, :office_name, :designation, :replacement, :status_id, :absorption_log_id, :resigned_log_id
                    " . $beneficiaryExtraValues . "
                    " . ($hasCreatedBy ? ", :created_by" : "") . "
                    " . ($hasUpdatedBy ? ", :updated_by" : "") . "
                ) RETURNING beneficiary_id
            ");
        } else {
            $stmt = $pdo->prepare("
                INSERT INTO beneficiaries (
                    gip_id, full_name, contact_number, address, birthday, age,
                    gender_id, education, start_date, end_date, series_number,
                    office_id, office_name, designation, replacement_notes, status_id, absorption_log_id, resigned_log_id
                    " . $beneficiaryExtraColumns . "
                    " . ($hasCreatedBy ? ", created_by" : "") . "
                    " . ($hasUpdatedBy ? ", updated_by" : "") . "
                ) VALUES (
                    :gip_id, :name, :contact, :address, :birthday, :age,
                    :gender_id, :education, :start_date, :end_date, :series_no,
                    :office_id, :office_name, :designation, :replacement, :status_id, :absorption_log_id, :resigned_log_id
                    " . $beneficiaryExtraValues . "
                    " . ($hasCreatedBy ? ", :created_by" : "") . "
                    " . ($hasUpdatedBy ? ", :updated_by" : "") . "
                )
            ");
        }

        $maxInsertAttempts = 3;
        $inserted = false;
        $insertAttempts = 0;
        while (!$inserted && $insertAttempts < $maxInsertAttempts) {
            $insertAttempts++;
            $params = [
                'gip_id' => $gipId,
                'name' => $data['name'],
                'contact' => $data['contact'] ?? null,
                'address' => $data['address'] ?? null,
                'birthday' => !empty($data['birthday']) ? $data['birthday'] : null,
                'age' => !empty($data['age']) ? intval($data['age']) : null,
                'gender_id' => $genderId,
                'education' => $data['education'] ?? null,
                'start_date' => !empty($data['startDate']) ? $data['startDate'] : null,
                'end_date' => !empty($data['endDate']) ? $data['endDate'] : null,
                'series_no' => $data['seriesNo'] ?? null,
                'office_id' => $officeId,
                'office_name' => $data['office'] ?? null,
                'designation' => $data['designation'],
                'replacement' => (isset($data['replacement']) && trim($data['replacement']) !== '') ? trim($data['replacement']) : null,
                'status_id' => $statusId,
                'absorption_log_id' => $absorptionLogId,
                'resigned_log_id' => $resignedLogId
            ];
            if ($hasDesignatedBeneficiary) $params['designated_beneficiary'] = ($data['designatedBeneficiary'] ?? '') !== '' ? $data['designatedBeneficiary'] : null;
            if ($hasRelationshipToAssured) $params['relationship_to_assured'] = ($data['relationshipToAssured'] ?? '') !== '' ? $data['relationshipToAssured'] : null;
            if ($hasCreatedBy) $params['created_by'] = $current_user_id;
            if ($hasUpdatedBy) $params['updated_by'] = $current_user_id;

            try {
                $stmt->execute($params);
                $inserted = true;
            } catch (PDOException $e) {
                $isUniqueViolation = ((string)$e->getCode() === '23505') ||
                    (stripos($e->getMessage(), 'beneficiaries_gip_id_key') !== false) ||
                    (stripos($e->getMessage(), 'duplicate') !== false && stripos($e->getMessage(), 'gip_id') !== false);
                if ($isUniqueViolation && $insertAttempts < $maxInsertAttempts) {
                    $gipId = $generateNextGipId();
                    continue;
                }
                throw $e;
            }
        }

        // Update absorption log with beneficiary_id
        if ($absorptionLogId) {
            $beneficiaryId = $isSupabase ? $stmt->fetchColumn() : $pdo->lastInsertId();
            $stmt = $pdo->prepare("UPDATE absorption_logs SET beneficiary_id = :bid WHERE log_id = :lid");
            $stmt->execute(['bid' => $beneficiaryId, 'lid' => $absorptionLogId]);
        }
        
        // Update resigned log with beneficiary_id
        if ($resignedLogId) {
            $beneficiaryId = $beneficiaryId ?? ($isSupabase ? $stmt->fetchColumn() : $pdo->lastInsertId());
            $stmt = $pdo->prepare("UPDATE resigned_logs SET beneficiary_id = :bid WHERE log_id = :lid");
            $stmt->execute(['bid' => $beneficiaryId, 'lid' => $resignedLogId]);
        }

        echo json_encode(['success' => true, 'message' => 'Beneficiary created successfully', 'id' => $gipId]);
    } catch (Throwable $e) {
        error_log("POST EXCEPTION: " . $e->getMessage() . " in " . $e->getFile() . " on line " . $e->getLine());
        http_response_code(500);
        echo json_encode(['success' => false, 'error' => 'Failed to process request: ' . $e->getMessage()]);
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
        debugLog('beneficiaries.put', ['keys' => array_keys($data), 'id' => $data['id'] ?? null, 'gip_id' => $data['gip_id'] ?? null]);
        // Get foreign key IDs (similar to POST)
        $genderId = null;
        if (!empty($data['gender'])) {
            $stmt = $pdo->prepare("SELECT gender_id FROM genders WHERE gender_name = :gender");
            $stmt->execute(['gender' => $data['gender']]);
            $genderId = $stmt->fetchColumn() ?: null;
        }

        $officeId = null;
        if (!empty($data['office'])) {
            $stmt = $pdo->prepare("SELECT office_id FROM offices WHERE office_name LIKE :office_name OR office_code = :office_code");
            $stmt->execute([
                'office_name' => '%' . $data['office'] . '%',
                'office_code' => $data['office']
            ]);
            $officeId = $stmt->fetchColumn() ?: null;
        }

        $resolvedStatus = resolveStatusId($pdo, $data['remarks'] ?? null, $data['endDate'] ?? null);
        $statusId = $resolvedStatus['status_id'];
        if (empty($data['remarks']) && !empty($resolvedStatus['status_name'])) {
            $data['remarks'] = $resolvedStatus['status_name'];
        }
        // Protect against silently nulling status_id on PUT when mapping fails.
        if ($statusId === null) {
            $stmt = $pdo->prepare("SELECT status_id FROM beneficiaries WHERE gip_id = :id LIMIT 1");
            $stmt->execute(['id' => $data['id']]);
            $statusId = $stmt->fetchColumn() ?: null;
        }

        // Handle absorption log if status changed to ABSORBED
        $absorptionLogId = null;
        if (!empty($data['remarks']) && $data['remarks'] === 'ABSORBED') {
            // Check if absorption log already exists
            $stmt = $pdo->prepare("SELECT absorption_log_id FROM beneficiaries WHERE gip_id = :id");
            $stmt->execute(['id' => $data['id']]);
            $existingLogId = $stmt->fetchColumn();

            $absorbDate = !empty($data['absorbDate']) ? date('Y-m-d H:i:s', strtotime($data['absorbDate'])) : date('Y-m-d H:i:s');

            if (!$existingLogId) {
                $stmt = $pdo->prepare("SELECT beneficiary_id FROM beneficiaries WHERE gip_id = :id");
                $stmt->execute(['id' => $data['id']]);
                $beneficiaryId = $stmt->fetchColumn();

                $stmt = $pdo->prepare("
                    INSERT INTO absorption_logs (beneficiary_id, absorption_datetime, " . ($isSupabase ? "\"where\", \"position\", \"agency\"" : "`where`, `position`, `agency`") . ", logged_by)
                    VALUES (:bid, :absorbDate, :where, :position, :agency, :logged_by)
                    " . ($isSupabase ? "RETURNING log_id" : "") . "
                ");
                $stmt->execute([
                    'bid' => $beneficiaryId,
                    'absorbDate' => $absorbDate,
                    'where' => $data['absorb_where'] ?? null,
                    'position' => $data['absorb_position'] ?? null,
                    'agency' => $data['absorb_agency'] ?? null,
                    'logged_by' => $current_user_id
                ]);
                $absorptionLogId = $isSupabase ? $stmt->fetchColumn() : $pdo->lastInsertId();
            } else {
                // Update existing absorption log
                $stmt = $pdo->prepare("
                    UPDATE absorption_logs SET 
                        absorption_datetime = :absorbDate,
                        " . ($isSupabase ? "\"where\"" : "`where`") . " = :where, 
                        " . ($isSupabase ? "\"position\"" : "`position`") . " = :position, 
                        " . ($isSupabase ? "\"agency\"" : "`agency`") . " = :agency,
                        logged_by = :logged_by
                    WHERE log_id = :log_id
                ");
                $stmt->execute([
                    'absorbDate' => $absorbDate,
                    'where' => $data['absorb_where'] ?? null,
                    'position' => $data['absorb_position'] ?? null,
                    'agency' => $data['absorb_agency'] ?? null,
                    'logged_by' => $current_user_id,
                    'log_id' => $existingLogId
                ]);
                $absorptionLogId = $existingLogId; // Ensure we don't lose the reference
            }
        }

        // Handle resigned log if status changed to RESIGNED
        $resignedLogId = null;
        if (!empty($data['remarks']) && $data['remarks'] === 'RESIGNED') {
            $stmt = $pdo->prepare("SELECT resigned_log_id FROM beneficiaries WHERE gip_id = :id");
            $stmt->execute(['id' => $data['id']]);
            $existingLogId = $stmt->fetchColumn();

            $resignedDate = !empty($data['resignedDate']) ? date('Y-m-d H:i:s', strtotime($data['resignedDate'])) : date('Y-m-d H:i:s');

            if (!$existingLogId) {
                $stmt = $pdo->prepare("SELECT beneficiary_id FROM beneficiaries WHERE gip_id = :id");
                $stmt->execute(['id' => $data['id']]);
                $beneficiaryId = $stmt->fetchColumn();

                $stmt = $pdo->prepare("
                    INSERT INTO resigned_logs (beneficiary_id, resignation_datetime, reason_description, logged_by)
                    VALUES (:bid, :resignedDate, :reason, :logged_by)
                    " . ($isSupabase ? "RETURNING log_id" : "") . "
                ");
                $stmt->execute([
                    'bid' => $beneficiaryId,
                    'resignedDate' => $resignedDate,
                    'reason' => $data['resigned_reason'] ?? null,
                    'logged_by' => $current_user_id
                ]);
                $resignedLogId = $isSupabase ? $stmt->fetchColumn() : $pdo->lastInsertId();
            } else {
                $stmt = $pdo->prepare("
                    UPDATE resigned_logs SET 
                        resignation_datetime = :resignedDate,
                        reason_description = :reason,
                        logged_by = :logged_by
                    WHERE log_id = :log_id
                ");
                $stmt->execute([
                    'resignedDate' => $resignedDate,
                    'reason' => $data['resigned_reason'] ?? null,
                    'logged_by' => $current_user_id,
                    'log_id' => $existingLogId
                ]);
                $resignedLogId = $existingLogId;
            }
        }

        // Update beneficiary
        $hasUpdatedBy = tableHasColumn($pdo, $isSupabase, 'beneficiaries', 'updated_by');
        $hasDesignatedBeneficiary = tableHasColumn($pdo, $isSupabase, 'beneficiaries', 'designated_beneficiary');
        $hasRelationshipToAssured = tableHasColumn($pdo, $isSupabase, 'beneficiaries', 'relationship_to_assured');
        $beneficiaryExtraSet = ($hasDesignatedBeneficiary ? ", designated_beneficiary = :designated_beneficiary" : "") .
            ($hasRelationshipToAssured ? ", relationship_to_assured = :relationship_to_assured" : "");
        $stmt = $pdo->prepare("
            UPDATE beneficiaries SET
                gip_id = :new_gip_id,
                full_name = :name,
                contact_number = :contact,
                address = :address,
                birthday = :birthday,
                age = :age,
                gender_id = :gender_id,
                education = :education,
                start_date = :start_date,
                end_date = :end_date,
                series_number = :series_no,
                office_id = :office_id,
                office_name = :office_name,
                designation = :designation,
                replacement_notes = :replacement,
                status_id = :status_id,
                absorption_log_id = COALESCE(:absorption_log_id, absorption_log_id),
                resigned_log_id = COALESCE(:resigned_log_id, resigned_log_id)
                " . $beneficiaryExtraSet . "
                " . ($hasUpdatedBy ? ", updated_by = :updated_by" : "") . "
            WHERE gip_id = :old_id
        ");

        $params = [
            'old_id' => $data['id'],
            'new_gip_id' => $data['gip_id'] ?? $data['id'],
            'name' => $data['name'],
            'contact' => $data['contact'] ?? null,
            'address' => $data['address'] ?? null,
            'birthday' => !empty($data['birthday']) ? $data['birthday'] : null,
            'age' => !empty($data['age']) ? intval($data['age']) : null,
            'gender_id' => $genderId,
            'education' => $data['education'] ?? null,
            'start_date' => !empty($data['startDate']) ? $data['startDate'] : null,
            'end_date' => !empty($data['endDate']) ? $data['endDate'] : null,
            'series_no' => $data['seriesNo'] ?? null,
            'office_id' => $officeId,
            'office_name' => $data['office'] ?? null,
            'designation' => $data['designation'],
            'replacement' => (isset($data['replacement']) && trim($data['replacement']) !== '') ? trim($data['replacement']) : null,
            'status_id' => $statusId,
            'absorption_log_id' => $absorptionLogId,
            'resigned_log_id' => $resignedLogId
        ];
        if ($hasDesignatedBeneficiary) $params['designated_beneficiary'] = ($data['designatedBeneficiary'] ?? '') !== '' ? $data['designatedBeneficiary'] : null;
        if ($hasRelationshipToAssured) $params['relationship_to_assured'] = ($data['relationshipToAssured'] ?? '') !== '' ? $data['relationshipToAssured'] : null;
        if ($hasUpdatedBy) $params['updated_by'] = $current_user_id;
        $stmt->execute($params);

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
        debugLog('beneficiaries.patch', ['id' => $id, 'action' => $action]);
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
