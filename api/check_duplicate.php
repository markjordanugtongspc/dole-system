<?php
/**
 * Duplicate Checker API
 * Checks if a beneficiary already exists by name
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
    exit();
}

try {
    $pdo = getDbConnection();
    $isSupabase = $pdo->getAttribute(PDO::ATTR_DRIVER_NAME) === 'pgsql';

    $data = $jsonInput;

    if (empty($data['name']) && empty($data['names'])) {
        echo json_encode(['success' => false, 'error' => 'Name or names array is required']);
        exit();
    }

    $normalizeForCompare = function ($name) {
        if (!$name) return '';
        $clean = strtoupper(trim((string)$name));
        // Remove dots and normalize spaces
        return str_replace('.', '', preg_replace('/\s+/', ' ', $clean));
    };

    if (!empty($data['names']) && is_array($data['names'])) {
        // Bulk check mode
        $duplicates = [];
        $rawNames = array_filter(array_map('trim', $data['names']));
        
        if (count($rawNames) > 0) {
            $searchCandidates = [];
            foreach ($rawNames as $n) {
                $norm = $normalizeForCompare($n);
                if ($norm !== '') $searchCandidates[] = $norm;
                $upper = strtoupper($n);
                if ($upper !== '') $searchCandidates[] = $upper;
            }
            $searchCandidates = array_values(array_unique($searchCandidates));

            $inQuery = implode(',', array_fill(0, count($searchCandidates), '?'));
            $sql = $isSupabase 
                ? "SELECT full_name FROM beneficiaries WHERE (UPPER(REPLACE(full_name, '.', '')) IN ($inQuery) OR UPPER(full_name) IN ($inQuery)) AND is_archived = FALSE"
                : "SELECT full_name FROM beneficiaries WHERE (UPPER(REPLACE(full_name, '.', '')) IN ($inQuery) OR UPPER(full_name) IN ($inQuery)) AND is_archived = 0";
                
            $stmt = $pdo->prepare($sql);
            // Execute with parameters for both IN clauses
            $params = array_merge($searchCandidates, $searchCandidates);
            $stmt->execute($params);
            $dbNames = $stmt->fetchAll(PDO::FETCH_COLUMN);

            $dbNormArray = array_map($normalizeForCompare, $dbNames);
            foreach ($rawNames as $inputName) {
                $normInput = $normalizeForCompare($inputName);
                if (in_array($normInput, $dbNormArray, true)) {
                    $duplicates[] = $inputName;
                }
            }
            $duplicates = array_values(array_unique($duplicates));
        }

        echo json_encode([
            'success' => true,
            'duplicates' => $duplicates
        ]);
    } else {
        // Single check mode
        $inputName = trim((string)($data['name'] ?? ''));
        $normInput = $normalizeForCompare($inputName);
        $excludeId = trim((string)($data['exclude_id'] ?? ''));
        debugLog('check_duplicate', ['name' => $inputName, 'norm' => $normInput]);
        
        $sql = $isSupabase
            ? "SELECT full_name FROM beneficiaries WHERE (UPPER(REPLACE(full_name, '.', '')) = :norm OR UPPER(full_name) = :upper) AND is_archived = FALSE"
            : "SELECT full_name FROM beneficiaries WHERE (UPPER(REPLACE(full_name, '.', '')) = :norm OR UPPER(full_name) = :upper) AND is_archived = 0";
        $params = ['norm' => $normInput, 'upper' => strtoupper($inputName)];

        if ($excludeId !== '') {
            $sql .= " AND gip_id <> :exclude_id";
            $params['exclude_id'] = $excludeId;
        }

        $sql .= " LIMIT 1";
        $stmt = $pdo->prepare($sql);
        $stmt->execute($params);
        $match = $stmt->fetchColumn();

        echo json_encode([
            'success' => true,
            'exists' => $match !== false,
            'name' => $inputName,
            'match' => $match ?: null
        ]);
    }

} catch (PDOException $e) {
    http_response_code(500);
    error_log('check_duplicate error: ' . $e->getMessage());
    echo json_encode(['success' => false, 'error' => 'Database error']);
}
