<?php
require_once __DIR__ . '/../../config/db.php';

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');

/* START GIP PORTAL DIRECTORY - Allows only the Portal server to search enabled GIP SSO accounts */
$expectedSecret = (string) env('PORTAL_DIRECTORY_CLIENT_SECRET', '');
$providedSecret = (string) ($_SERVER['HTTP_X_PORTAL_DIRECTORY_SECRET'] ?? '');
if ($expectedSecret === '' || $providedSecret === '' || !hash_equals($expectedSecret, $providedSecret)) {
    http_response_code(401);
    echo json_encode(['error' => 'Unauthorized directory request.']);
    exit;
}

$id = trim((string) ($_GET['id'] ?? ''));
$query = trim((string) ($_GET['q'] ?? ''));
if ($id === '' && mb_strlen($query) < 2) {
    http_response_code(400);
    echo json_encode(['error' => 'Provide an account ID or at least two full-name characters.']);
    exit;
}

try {
    $pdo = getDbConnection();
    if ($id !== '') {
        if (!ctype_digit($id)) {
            http_response_code(400);
            echo json_encode(['error' => 'Invalid account ID.']);
            exit;
        }
        $statement = $pdo->prepare('SELECT user_id, full_name, username, email FROM public.users WHERE user_id = ? AND portal_sso_enabled = TRUE AND is_active = TRUE LIMIT 1');
        $statement->execute([(int) $id]);
    } else {
        $statement = $pdo->prepare('SELECT user_id, full_name, username, email FROM public.users WHERE portal_sso_enabled = TRUE AND is_active = TRUE AND (full_name ILIKE ? OR username ILIKE ?) ORDER BY full_name ASC LIMIT 10');
        $statement->execute(['%' . $query . '%', '%' . $query . '%']);
    }

    $data = array_map(static fn ($user) => [
        'id' => (string) $user['user_id'],
        'full_name' => (string) $user['full_name'],
        'username' => (string) $user['username'],
        'email' => $user['email'] === null ? null : (string) $user['email']
    ], $statement->fetchAll());
    echo json_encode(['data' => $data]);
} catch (Throwable $error) {
    error_log('[GIP SSO DIRECTORY] Request failed: ' . $error->getMessage());
    http_response_code(500);
    echo json_encode(['error' => 'GIP directory is temporarily unavailable.']);
}
/* END GIP PORTAL DIRECTORY */