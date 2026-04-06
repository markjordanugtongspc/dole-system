<?php
/**
 * Authentication API
 * DOLE-GIP System
 */

require_once __DIR__ . '/../config/db.php';
handleCors();
header('Content-Type: application/json');

// Quick Database Connectivity Test (debug only)
if (isset($_GET['db_test']) && $_GET['db_test'] === '1') {
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
        'database_url_set' => !empty(env('DATABASE_URL', '')) || !empty(env('POSTGRES_URL', '')),
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
        $host = env('DB_HOST');
        $port = env('DB_PORT', '5432');
        $dbname = env('DB_DATABASE');
        $user = env('DB_USERNAME');
        $pass = env('DB_PASSWORD');
        $sslMode = env('DB_SSLMODE', 'require');

        $dsn = sprintf(
            "pgsql:host=%s;port=%s;dbname=%s;sslmode=%s",
            $host,
            $port,
            $dbname,
            $sslMode
        );

        $pdo = new PDO($dsn, $user, $pass, [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_TIMEOUT => 5
        ]);
        $pdo->query('SELECT 1');

        debugLog('auth.db_test', ['ok' => true, 'diagnostics' => $diagnostics]);
        echo json_encode([
            'success' => true,
            'message' => 'Database connection successful',
            'diagnostics' => $diagnostics
        ]);
    } catch (PDOException $e) {
        debugLog('auth.db_test', [
            'ok' => false,
            'error' => $e->getMessage(),
            'error_code' => $e->getCode(),
            'diagnostics' => $diagnostics
        ]);
        echo json_encode([
            'success' => false,
            'error' => $e->getMessage(),
            'error_code' => $e->getCode(),
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
        $stmt = $pdo->prepare("SELECT user_id, username, password_hash, full_name, email, profile_picture_path FROM users WHERE username = ?");
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
                    'full_name' => $user['full_name'],
                    'email' => $user['email'],
                    'profile_picture_path' => $user['profile_picture_path']
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
