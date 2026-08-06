<?php
require_once __DIR__ . '/../../config/db.php';

/* START GIP SSO CALLBACK - Exchanges one Portal code server-to-server and creates the normal GIP PHP session */
function ssoError(int $status, string $message): void
{
    http_response_code($status);
    header('Content-Type: text/html; charset=utf-8');
    header('Cache-Control: no-store');
    echo '<!doctype html><title>SSO unavailable</title><main><h1>Unable to sign in</h1><p>' . htmlspecialchars($message, ENT_QUOTES, 'UTF-8') . '</p></main>';
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'GET') ssoError(405, 'Method not allowed.');
$code = trim((string) ($_GET['code'] ?? ''));
$state = trim((string) ($_GET['state'] ?? ''));
$consumeUrl = trim((string) env('PORTAL_SSO_CONSUME_URL', ''));
$clientSecret = trim((string) env('PORTAL_SSO_CLIENT_SECRET', ''));
if ($code === '' || $state === '' || $consumeUrl === '' || $clientSecret === '') ssoError(400, 'The one-time Portal sign-in request is incomplete or not configured.');

$payload = json_encode(['system_key' => 'GIP', 'code' => $code, 'state' => $state], JSON_UNESCAPED_SLASHES);
$curl = curl_init($consumeUrl);
curl_setopt_array($curl, [
    CURLOPT_POST => true,
    CURLOPT_POSTFIELDS => $payload,
    CURLOPT_HTTPHEADER => ['Content-Type: application/json', 'Accept: application/json', 'X-SSO-Client-Secret: ' . $clientSecret],
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_TIMEOUT => 10,
    CURLOPT_CONNECTTIMEOUT => 5,
]);
$response = curl_exec($curl);
$status = (int) curl_getinfo($curl, CURLINFO_RESPONSE_CODE);
$error = curl_error($curl);
curl_close($curl);
$decoded = is_string($response) ? json_decode($response, true) : null;
$consumed = is_array($decoded) && isset($decoded['data']) && is_array($decoded['data']) ? $decoded['data'] : null;
if ($response === false || $status !== 200 || !is_array($consumed) || empty($consumed['external_user_id'])) {
    error_log('[GIP SSO CALLBACK] Portal code consumption failed: ' . ($error ?: 'HTTP ' . $status));
    ssoError(401, 'This Portal sign-in link is invalid, expired, or already used.');
}

$externalUserId = (string) $consumed['external_user_id'];
if (!ctype_digit($externalUserId)) ssoError(401, 'The linked GIP account is invalid.');

try {
    $pdo = getDbConnection();
    $statement = $pdo->prepare('SELECT user_id, username, full_name, email, profile_picture_path FROM public.users WHERE user_id = ? AND portal_sso_enabled = TRUE AND is_active = TRUE LIMIT 1');
    $statement->execute([(int) $externalUserId]);
    $user = $statement->fetch();
    if (!$user) ssoError(403, 'The linked GIP account is not enabled for Portal sign-in.');

    $secure = !in_array($_SERVER['HTTP_HOST'] ?? '', ['localhost', '127.0.0.1'], true);
    session_set_cookie_params(['lifetime' => 0, 'path' => '/', 'secure' => $secure, 'httponly' => true, 'samesite' => 'Lax']);
    session_start();
    session_regenerate_id(true);
    $_SESSION['user_id'] = $user['user_id'];
    $_SESSION['username'] = $user['username'];
    $_SESSION['full_name'] = $user['full_name'];

    $userJson = json_encode([
        'id' => (int) $user['user_id'], 'username' => (string) $user['username'],
        'full_name' => (string) $user['full_name'], 'email' => $user['email'],
        'profile_picture_path' => $user['profile_picture_path']
    ], JSON_HEX_TAG | JSON_HEX_AMP | JSON_HEX_APOS | JSON_HEX_QUOT);
    header('Content-Type: text/html; charset=utf-8');
    header('Cache-Control: no-store');
    echo '<!doctype html><meta charset="utf-8"><title>Signing in…</title><script>'
        . 'localStorage.setItem("isLoggedIn", "true");'
        . 'localStorage.setItem("hasLoggedInBefore", "true");'
        . 'localStorage.setItem("user", JSON.stringify(' . $userJson . '));'
        . 'location.replace("/frontend/dashboard/");'
        . '</script>';
} catch (Throwable $error) {
    error_log('[GIP SSO CALLBACK] Session creation failed: ' . $error->getMessage());
    ssoError(500, 'GIP could not complete the sign-in.');
}
/* END GIP SSO CALLBACK */