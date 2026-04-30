<?php
/**
 * Logs API Endpoint
 * DOLE-GIP System
 * 
 * RESTful API for managing Accomplishment Reports (AR) and Daily Time Records (DTR)
 * Supports: GET (list), POST (create), PUT (update status), DELETE (remove)
 */

require_once __DIR__ . '/../config/db.php';
handleCors();
header('Content-Type: application/json');

try {
    $pdo = getDbConnection();
    $isSupabase = $pdo->getAttribute(PDO::ATTR_DRIVER_NAME) === 'pgsql';

    // [SECURITY] Robust User ID Detection (Match notifications.php Pattern)
    function check_user_id() {
        if (isset($_SESSION['user_id'])) return $_SESSION['user_id'];
        if (isset($_POST['user_id'])) return $_POST['user_id'];
        if (isset($_GET['user_id'])) return $_GET['user_id'];
        
        $headers = function_exists('getallheaders') ? getallheaders() : [];
        if (isset($headers['X-User-Id'])) return $headers['X-User-Id'];
        if (isset($_SERVER['HTTP_X_USER_ID'])) return $_SERVER['HTTP_X_USER_ID'];
        
        return null;
    }

    $current_user_id = check_user_id();
    if (!$current_user_id) {
        http_response_code(401);
        echo json_encode(['success' => false, 'error' => 'Not Authenticated']);
        exit();
    }

    debugLog('logs.init', ['method' => $_SERVER['REQUEST_METHOD'] ?? null, 'user_id' => $current_user_id]);
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

    if (!$type || !in_array($type, ['ar', 'dtr', 'docs', 'absorption'])) {
        http_response_code(400);
        echo json_encode(['success' => false, 'error' => 'Type must be "ar", "dtr", "docs", or "absorption"']);
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
            $query = "SELECT ar.ar_id as id, ar.beneficiary_id, b.gip_id, ar.period, ar.date_submitted as date, ar.status, ar.created_at, ar.updated_at 
                      FROM accomplishment_reports ar
                      JOIN beneficiaries b ON ar.beneficiary_id = b.beneficiary_id";

            if ($beneficiaryId) {
                $query .= " WHERE ar.beneficiary_id = :beneficiary_id";
            }

            $query .= " ORDER BY ar.date_submitted DESC";

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
            $query = "SELECT dtr.dtr_id as id, dtr.beneficiary_id, b.gip_id, dtr.record_date as date, dtr.weekday as day, dtr.status, dtr.created_at, dtr.updated_at 
                      FROM daily_time_records dtr
                      JOIN beneficiaries b ON dtr.beneficiary_id = b.beneficiary_id";

            if ($beneficiaryId) {
                $query .= " WHERE dtr.beneficiary_id = :beneficiary_id";
            }

            $query .= " ORDER BY dtr.record_date DESC";

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
        } elseif ($type === 'absorption') {
            // Get Absorption Logs
            $whereExpr = $isSupabase ? '"where"' : '`where`';
            $posExpr = $isSupabase ? '"position"' : '`position`';
            $agencyExpr = $isSupabase ? '"agency"' : '`agency`';
            
            $query = "SELECT log_id as id, absorption_datetime, {$whereExpr}, {$posExpr}, {$agencyExpr}, logged_by
                      FROM absorption_logs";

            if ($beneficiaryId) {
                // Find via join if gip_id was passed or direct beneficiary_id
                $query .= " WHERE beneficiary_id = :beneficiary_id";
            }

            $query .= " ORDER BY absorption_datetime DESC";

            $stmt = $pdo->prepare($query);
            if ($beneficiaryId) {
                $stmt->execute(['beneficiary_id' => $beneficiaryId]);
            } else {
                $stmt->execute();
            }

            $logs = $stmt->fetchAll();
            echo json_encode(['success' => true, 'logs' => $logs, 'type' => 'absorption']);
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
    // Try to get data from multiple sources (JSON body, POST body, or GET parameters)
    $inputData = json_decode(file_get_contents('php://input'), true) ?? [];
    $data = array_merge($_POST, $inputData);
    
    // Explicitly check for type in GET if not in body
    $type = $data['type'] ?? $_GET['type'] ?? null;
    $gipId = $data['gip_id'] ?? $_GET['gip_id'] ?? null;
    $action = $data['action'] ?? $_GET['action'] ?? null;

    if (!$type || !in_array($type, ['ar', 'dtr', 'docs'])) {
        http_response_code(400);
        echo json_encode(['success' => false, 'error' => 'Type must be "ar", "dtr", or "docs"', 'received_type' => $type]);
        exit();
    }

    if (!$gipId && $action !== 'delete') {
        http_response_code(400);
        echo json_encode(['success' => false, 'error' => 'gip_id is required']);
        exit();
    }

    try {
        debugLog('logs.post', ['type' => $type, 'gip_id' => $gipId, 'action' => $action]);
        // Handle POST-based deletion if specified
        if ($action === 'delete') {
            $logId = $data['log_id'] ?? $_GET['log_id'] ?? $_GET['id'] ?? null;
            if (!$logId) {
                http_response_code(400);
                echo json_encode(['success' => false, 'error' => 'ID is required for deletion']);
                exit();
            }
            if ($type === 'ar') {
                $stmt = $pdo->prepare("DELETE FROM accomplishment_reports WHERE ar_id = :id");
            } else {
                $stmt = $pdo->prepare("DELETE FROM daily_time_records WHERE dtr_id = :id");
            }
            $stmt->execute(['id' => $logId]);
            echo json_encode(['success' => true, 'message' => 'Log deleted successfully']);
            exit();
        }

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

            if ($isSupabase) {
                $stmt = $pdo->prepare("
                    INSERT INTO accomplishment_reports (beneficiary_id, period, date_submitted, status)
                    VALUES (:beneficiary_id, :period, :date_submitted, :status)
                    RETURNING ar_id
                ");
            } else {
                $stmt = $pdo->prepare("
                    INSERT INTO accomplishment_reports (beneficiary_id, period, date_submitted, status)
                    VALUES (:beneficiary_id, :period, :date_submitted, :status)
                ");
            }

            $stmt->execute([
                'beneficiary_id' => $beneficiaryId,
                'period' => $period,
                'date_submitted' => $dateSubmitted,
                'status' => $status
            ]);

            $logId = $isSupabase ? $stmt->fetchColumn() : $pdo->lastInsertId();
            echo json_encode(['success' => true, 'message' => 'AR log created successfully', 'id' => $logId]);

        } elseif ($type === 'dtr') { // dtr
            // Create Daily Time Record
            $recordDate = $data['record_date'] ?? date('Y-m-d');
            // weekday now stores the 15-day period label e.g. "APR 1-15, 2026"
            $weekday = $data['weekday'] ?? $data['period'] ?? '';
            if (!$weekday) {
                // Auto-compute period label from the record_date
                $d = new DateTime($recordDate);
                $day = (int)$d->format('j');
                $monthStr = strtoupper($d->format('M'));
                $year = $d->format('Y');
                $lastDayOfMonth = (int)$d->format('t');
                if ($day <= 15) {
                    $weekday = "{$monthStr} 1-15, {$year}";
                } else {
                    $weekday = "{$monthStr} 16-{$lastDayOfMonth}, {$year}";
                }
            }
            $status = $data['status'] ?? 'PENDING';

            $stmt_check = $pdo->prepare("SELECT dtr_id FROM daily_time_records WHERE beneficiary_id = :beneficiary_id AND record_date = :record_date");
            $stmt_check->execute(['beneficiary_id' => $beneficiaryId, 'record_date' => $recordDate]);
            $existingId = $stmt_check->fetchColumn();

            if ($existingId) {
                $stmt = $pdo->prepare("UPDATE daily_time_records SET status = :status_update WHERE dtr_id = :id");
                $stmt->execute(['status_update' => $status, 'id' => $existingId]);
                $logId = $existingId;
            } else {
                if ($isSupabase) {
                    $stmt = $pdo->prepare("
                        INSERT INTO daily_time_records (beneficiary_id, record_date, weekday, status)
                        VALUES (:beneficiary_id, :record_date, :weekday, :status)
                        RETURNING dtr_id
                    ");
                } else {
                    $stmt = $pdo->prepare("
                        INSERT INTO daily_time_records (beneficiary_id, record_date, weekday, status)
                        VALUES (:beneficiary_id, :record_date, :weekday, :status)
                    ");
                }
                $stmt->execute([
                    'beneficiary_id' => $beneficiaryId,
                    'record_date' => $recordDate,
                    'weekday' => $weekday,
                    'status' => $status
                ]);
                $logId = $isSupabase ? $stmt->fetchColumn() : $pdo->lastInsertId();
            }
            echo json_encode(['success' => true, 'message' => 'DTR log created successfully', 'id' => $logId]);
        } else { // docs
            // Create or Update Document status
            $docName = $data['document_name'] ?? $data['doc_name'] ?? null;
            $docName = !empty($docName) ? strtoupper($docName) : null;
            $status = strtoupper($data['status'] ?? 'PENDING');

            if (!$docName) {
                http_response_code(400);
                echo json_encode(['success' => false, 'error' => 'Document name is required']);
                exit();
            }

            $stmt_check = $pdo->prepare("SELECT doc_id FROM beneficiary_documents WHERE beneficiary_id = :bid AND document_name = :dname");
            $stmt_check->execute(['bid' => $beneficiaryId, 'dname' => $docName]);
            $existingId = $stmt_check->fetchColumn();

            if ($existingId) {
                $stmt = $pdo->prepare("UPDATE beneficiary_documents SET status = :status_update WHERE doc_id = :id");
                $stmt->execute(['status_update' => $status, 'id' => $existingId]);
                $logId = $existingId;
            } else {
                if ($isSupabase) {
                    $stmt = $pdo->prepare("
                        INSERT INTO beneficiary_documents (beneficiary_id, document_name, status)
                        VALUES (:beneficiary_id, :doc_name, :status)
                        RETURNING doc_id
                    ");
                } else {
                    $stmt = $pdo->prepare("
                        INSERT INTO beneficiary_documents (beneficiary_id, document_name, status)
                        VALUES (:beneficiary_id, :doc_name, :status)
                    ");
                }
                $stmt->execute([
                    'beneficiary_id' => $beneficiaryId,
                    'doc_name' => $docName,
                    'status' => $status
                ]);
                $logId = $isSupabase ? $stmt->fetchColumn() : $pdo->lastInsertId();
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
    $period = $data['period'] ?? null;
    $recordDate = $data['record_date'] ?? null;

    if (!$type || !$logId) {
        http_response_code(400);
        echo json_encode(['success' => false, 'error' => 'Type and ID are required']);
        exit();
    }

    try {
        debugLog('logs.put', ['type' => $type, 'id' => $logId]);
        if ($type === 'ar') {
            $updateFields = [];
            $params = ['id' => $logId];
            if ($status) { $updateFields[] = "status = :status"; $params['status'] = $status; }
            if ($period) { $updateFields[] = "period = :period"; $params['period'] = $period; }
            
            if (empty($updateFields)) {
                echo json_encode(['success' => true, 'message' => 'No changes provided']);
                exit();
            }
            $stmt = $pdo->prepare("UPDATE accomplishment_reports SET " . implode(', ', $updateFields) . " WHERE ar_id = :id");
            $stmt->execute($params);
        } elseif ($type === 'dtr') {
            $updateFields = [];
            $params = ['id' => $logId];
            if ($status) { $updateFields[] = "status = :status"; $params['status'] = $status; }
            if ($recordDate) { 
                $updateFields[] = "record_date = :record_date"; 
                $params['record_date'] = $recordDate; 
            }
            if (!empty($data['weekday'])) {
                $updateFields[] = "weekday = :weekday";
                $params['weekday'] = strtoupper($data['weekday']);
            } elseif ($recordDate) {
                // Auto-compute period label if not provided
                $d = new DateTime($recordDate);
                $day = (int)$d->format('j');
                $monthStr = strtoupper($d->format('M'));
                $year = $d->format('Y');
                $lastDayOfMonth = (int)$d->format('t');
                $newWeekday = ($day <= 15) ? "{$monthStr} 1-15, {$year}" : "{$monthStr} 16-{$lastDayOfMonth}, {$year}";
                $updateFields[] = "weekday = :weekday";
                $params['weekday'] = $newWeekday;
            }
            
            if (empty($updateFields)) {
                echo json_encode(['success' => true, 'message' => 'No changes provided']);
                exit();
            }
            $stmt = $pdo->prepare("UPDATE daily_time_records SET " . implode(', ', $updateFields) . " WHERE dtr_id = :id");
            $stmt->execute($params);
        } else { // docs
            if (!$status) {
                echo json_encode(['success' => true, 'message' => 'No changes provided']);
                exit();
            }
            $stmt = $pdo->prepare("UPDATE beneficiary_documents SET status = :status WHERE doc_id = :id");
            $stmt->execute(['status' => $status, 'id' => $logId]);
        }

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
