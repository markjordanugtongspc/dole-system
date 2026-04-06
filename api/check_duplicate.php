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
$rawBodyExtra = file_get_contents('php://input');
$jsonInputExtra = json_decode($rawBodyExtra, true) ?? [];

if (!$current_user_id && isset($jsonInputExtra['user_id'])) $current_user_id = $jsonInputExtra['user_id'];
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

    $data = json_decode(file_get_contents('php://input'), true);

    if (empty($data['name']) && empty($data['names'])) {
        echo json_encode(['success' => false, 'error' => 'Name or names array is required']);
        exit();
    }

    if (!empty($data['names']) && is_array($data['names'])) {
        // Bulk check mode
        $duplicates = [];
        $names = array_map('trim', $data['names']);
        $names = array_filter($names); // remove empty names
        
        if (count($names) > 0) {
            $inQuery = implode(',', array_fill(0, count($names), '?'));
            $sql = $isSupabase 
                ? "SELECT full_name FROM beneficiaries WHERE full_name IN ($inQuery) AND is_archived = FALSE"
                : "SELECT full_name FROM beneficiaries WHERE full_name IN ($inQuery) AND is_archived = 0";
                
            $stmt = $pdo->prepare($sql);
            $stmt->execute(array_values($names));
            $duplicates = $stmt->fetchAll(PDO::FETCH_COLUMN);
        }

        echo json_encode([
            'success' => true,
            'duplicates' => $duplicates
        ]);
    } else {
        // Single check mode
        $name = trim($data['name']);
        debugLog('check_duplicate', ['name' => $name]);
        
        // We check for exact match or very close match
        $stmt = $pdo->prepare(
            $isSupabase
                ? "SELECT COUNT(*) FROM beneficiaries WHERE full_name = :name AND is_archived = FALSE"
                : "SELECT COUNT(*) FROM beneficiaries WHERE full_name = :name AND is_archived = 0"
        );
        $stmt->execute(['name' => $name]);
        $count = $stmt->fetchColumn();

        echo json_encode([
            'success' => true,
            'exists' => $count > 0,
            'name' => $name
        ]);
    }

} catch (PDOException $e) {
    http_response_code(500);
    error_log('check_duplicate error: ' . $e->getMessage());
    echo json_encode(['success' => false, 'error' => 'Database error']);
}
