<?php
/**
 * Database Configuration and Connection
 * DOLE-GIP System
 * 
 * This file provides a PDO database connection using environment variables
 * from the .env file for security and flexibility.
 */

// Load environment variables from .env file
function loadEnv($path)
{
    if (!file_exists($path)) {
        throw new Exception(".env file not found at: $path");
    }

    $lines = file($path, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    foreach ($lines as $line) {
        $line = trim($line);
        // Remove BOM if present
        if (strpos($line, "\xEF\xBB\xBF") === 0) {
            $line = substr($line, 3);
        }

        // Skip comments
        if (empty($line) || strpos($line, '#') === 0) {
            continue;
        }

        // Parse KEY=VALUE
        if (strpos($line, '=') !== false) {
            $parts = explode('=', $line, 2);
            $key = trim($parts[0]);
            $value = trim($parts[1]);

            // Remove quotes if present
            $value = trim($value, '"\'');

            $_ENV[$key] = $value;
            putenv("$key=$value");
        }
    }
}

// Load .env file from config directory
$envPath = __DIR__ . '/.env';
try {
    loadEnv($envPath);
} catch (Exception $e) {
    die("Environment Configuration Error: " . $e->getMessage());
}

// Database configuration from environment variables
$dbConfig = [
    'host' => $_ENV['DB_HOST'] ?? '127.0.0.1',
    'port' => $_ENV['DB_PORT'] ?? '3306',
    'database' => $_ENV['DB_DATABASE'] ?? 'dole_db',
    'username' => $_ENV['DB_USERNAME'] ?? 'root',
    'password' => $_ENV['DB_PASSWORD'] ?? '',
    'charset' => 'utf8mb4',
    'collation' => 'utf8mb4_unicode_ci',
];

/**
 * Get PDO Database Connection (Singleton Pattern)
 * 
 * @return PDO Database connection instance
 * @throws PDOException if connection fails
 */
function getDbConnection()
{
    static $pdo = null;

    if ($pdo === null) {
        global $dbConfig;

        $dsn = sprintf(
            "mysql:host=%s;port=%s;dbname=%s;charset=%s",
            $dbConfig['host'],
            $dbConfig['port'],
            $dbConfig['database'],
            $dbConfig['charset']
        );

        $options = [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES => false,
            PDO::ATTR_TIMEOUT => 5, // 5 seconds timeout
            PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES {$dbConfig['charset']} COLLATE {$dbConfig['collation']}",
        ];

        try {
            $pdo = new PDO($dsn, $dbConfig['username'], $dbConfig['password'], $options);
        } catch (PDOException $e) {
            // Log error (in production, log to file instead of displaying)
            error_log("Database Connection Error: " . $e->getMessage());
            throw new PDOException("Could not connect to database. Please check your configuration.");
        }
    }

    return $pdo;
}

/**
 * Test database connection
 * 
 * @return bool True if connection successful
 */
function testDbConnection()
{
    try {
        $pdo = getDbConnection();
        $stmt = $pdo->query("SELECT 1");
        return $stmt !== false;
    } catch (PDOException $e) {
        error_log("Database Test Failed: " . $e->getMessage());
        return false;
    }
}

/**
 * Get environment variable value
 * 
 * @param string $key Environment variable key
 * @param mixed $default Default value if not found
 * @return mixed Environment variable value or default
 */
function env($key, $default = null)
{
    return $_ENV[$key] ?? $default;
}

// Set timezone from environment
date_default_timezone_set(env('APP_TIMEZONE', 'Asia/Manila'));

/**
 * Handle CORS and dynamic origin validation
 */
function handleCors()
{
    $allowedOrigins = explode(',', env('CORS_ALLOWED_ORIGINS', 'http://localhost,http://127.0.0.1'));
    $origin = $_SERVER['HTTP_ORIGIN'] ?? '';

    // If no origin (same-site or direct), or if origin is in our allowed list
    $isAllowed = empty($origin) || in_array($origin, $allowedOrigins);

    // Dynamic pattern check: allow any local network IP (192.168.x.x or 10.x.x.x) if in development
    if (!$isAllowed && env('APP_ENV') === 'development') {
        if (preg_match('/^http:\/\/(192\.168\.\d+\.\d+|127\.0\.0\.1|localhost|10\.\d+\.\d+\.\d+)(:\d+)?$/', $origin)) {
            $isAllowed = true;
        }
    }

    if ($isAllowed && !empty($origin)) {
        header("Access-Control-Allow-Origin: $origin");
    } else {
        header("Access-Control-Allow-Origin: " . ($allowedOrigins[0] ?? '*'));
    }

    header('Access-Control-Allow-Methods: GET, POST, PUT, PATCH, DELETE, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');
    header('Access-Control-Allow-Credentials: true');

    if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
        http_response_code(200);
        exit();
    }
}
