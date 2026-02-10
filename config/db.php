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
        // Skip comments
        if (strpos(trim($line), '#') === 0) {
            continue;
        }

        // Parse KEY=VALUE
        if (strpos($line, '=') !== false) {
            list($key, $value) = explode('=', $line, 2);
            $key = trim($key);
            $value = trim($value);

            // Remove quotes if present
            $value = trim($value, '"\'');

            // Set environment variable if not already set
            if (!array_key_exists($key, $_ENV)) {
                $_ENV[$key] = $value;
                putenv("$key=$value");
            }
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
