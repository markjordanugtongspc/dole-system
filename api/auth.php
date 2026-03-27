<?php
/**
 * Authentication API
 * DOLE-GIP System
 */

require_once __DIR__ . '/../config/db.php';
handleCors();
header('Content-Type: application/json');

// Quick Database Connectivity Test
if (isset($_GET['db_test'])) {
    $dbPasswordRaw = (string) env('DB_PASSWORD', '');
    $databaseUrlRaw = (string) (env('DATABASE_URL', '') ?: env('POSTGRES_URL', ''));
    $passwordPlaceholders = [
        'your_supabase_db_password',
        'YOUR-PASSWORD',
        'your_password',
        'password',
        'changeme',
    ];

    $passwordLooksPlaceholder = false;
    foreach ($passwordPlaceholders as $placeholder) {
        if (strcasecmp(trim($dbPasswordRaw), $placeholder) === 0) {
            $passwordLooksPlaceholder = true;
            break;
        }
    }

    $urlLooksPlaceholder = false;
    if (!empty($databaseUrlRaw)) {
        $urlLower = strtolower($databaseUrlRaw);
        $urlLooksPlaceholder = strpos($urlLower, '[your-password]') !== false
            || strpos($urlLower, 'your-password') !== false
            || strpos($urlLower, 'your_supabase_db_password') !== false
            || strpos($urlLower, 'example') !== false;
    }

    $diagnostics = [
        'app_env' => env('APP_ENV', 'unknown'),
        'env_key' => env('ENV_KEY', 'unset'),
        'db_connection' => env('DB_CONNECTION', 'unset'),
        'use_supabase' => useSupabase(),
        'db_host_set' => !empty(env('DB_HOST', '')),
        'db_port' => env('DB_PORT', 'unset'),
        'db_database_set' => !empty(env('DB_DATABASE', '')),
        'db_username_set' => !empty(env('DB_USERNAME', '')),
        'db_password_set' => !empty(env('DB_PASSWORD', '')),
        'db_password_len' => strlen($dbPasswordRaw),
        'db_password_looks_placeholder' => $passwordLooksPlaceholder,
        'database_url_set' => !empty(env('DATABASE_URL', '')) || !empty(env('POSTGRES_URL', '')),
        'database_url_looks_placeholder' => $urlLooksPlaceholder,
        'db_sslmode' => env('DB_SSLMODE', 'unset'),
        'pdo_pgsql_loaded' => extension_loaded('pdo_pgsql'),
        'pdo_mysql_loaded' => extension_loaded('pdo_mysql'),
    ];

    if (useSupabase() && !$diagnostics['pdo_pgsql_loaded']) {
        echo json_encode([
            'success' => false,
            'error' => 'PDO pgsql driver is not available in current runtime.',
            'diagnostics' => $diagnostics
        ]);
        exit;
    }

    try {
        $pdo = getDbConnection();
        debugLog('auth.db_test', ['ok' => true, 'diagnostics' => $diagnostics]);
        echo json_encode([
            'success' => true,
            'message' => 'Database connection established!',
            'diagnostics' => $diagnostics
        ]);
    } catch (Exception $e) {
        debugLog('auth.db_test', ['ok' => false, 'error' => $e->getMessage(), 'diagnostics' => $diagnostics]);
        echo json_encode([
            'success' => false,
            'error' => $e->getMessage(),
            'diagnostics' => $diagnostics
        ]);
    }
    exit;
}

$data = json_decode(file_get_contents('php://input'), true);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $data['username'] ?? '';
    $password = $data['password'] ?? '';

    if (empty($username) || empty($password)) {
        echo json_encode(['success' => false, 'error' => 'Username and password are required']);
        exit;
    }

    try {
        $pdo = getDbConnection();
        debugLog('auth.login', ['username' => $username]);
        $stmt = $pdo->prepare("SELECT user_id, username, password_hash, full_name, email FROM users WHERE username = ?");
        $stmt->execute([$username]);
        $user = $stmt->fetch();

        if ($user && password_verify($password, $user['password_hash'])) {
            // Start session or return token
            session_start();
            $_SESSION['user_id'] = $user['user_id'];
            $_SESSION['username'] = $user['username'];
            $_SESSION['full_name'] = $user['full_name'];

            echo json_encode([
                'success' => true,
                'user' => [
                    'id' => $user['user_id'],
                    'username' => $user['username'],
                    'full_name' => $user['full_name']
                ]
            ]);
        } else {
            echo json_encode(['success' => false, 'error' => 'Invalid username or password']);
        }
    } catch (PDOException $e) {
        echo json_encode(['success' => false, 'error' => 'Database error: ' . $e->getMessage()]);
    }
    exit;
}

echo json_encode(['success' => false, 'error' => 'Invalid request method']);
