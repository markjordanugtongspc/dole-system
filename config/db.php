<?php
/**
 * Database Configuration and Connection
 * DOLE-GIP System
 * 
 * This file provides a PDO database connection using environment variables
 * from the .env file for security and flexibility.
 */

// Load environment variables from .env file
function loadBaseEnv($path)
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

            // Do not override non-empty runtime/server secrets (e.g. Cloud env vars).
            $existingServer = $_SERVER[$key] ?? null;
            $existingRuntime = getenv($key);
            if (($existingServer !== null && $existingServer !== '') || ($existingRuntime !== false && $existingRuntime !== '')) {
                continue;
            }

            $_ENV[$key] = $value;
            putenv("$key=$value");
        }
    }
}

// Load environment files from config directory.
// Hybrid lock/key priority:
// 1) Always load `.env` first (acts as LOCK/controller)
// 2) Profile override: If ENV_KEY=localhost -> load `.env.example`
// 3) Profile override: If ENV_KEY=production -> load `.env.production` (Supabase cloud)
$envPath = __DIR__ . '/.env';
$envPathExample = __DIR__ . '/.env.example';
$envPathProduction = __DIR__ . '/.env.production';

$loadedBase = false;
if (file_exists($envPath)) {
    try {
        loadBaseEnv($envPath);
        $loadedBase = true;
    } catch (Exception $e) {
        error_log("Environment Error: " . $e->getMessage());
    }
}

// Get the requested key from runtime environment OR loaded .env
$requestedEnvKey = env('ENV_KEY', null);
$requestedEnvKey = $requestedEnvKey ? strtolower(trim((string)$requestedEnvKey)) : null;

// Apply Profile Overrides
if ($requestedEnvKey === 'localhost' && file_exists($envPathExample)) {
    try {
        loadBaseEnv($envPathExample);
    } catch (Exception $e) {
        error_log("Environment Error (Localhost): " . $e->getMessage());
    }
} elseif ($requestedEnvKey === 'production' && file_exists($envPathProduction)) {
    try {
        loadBaseEnv($envPathProduction);
    } catch (Exception $e) {
        error_log("Environment Error (Production): " . $e->getMessage());
    }
} else {
    // Fallback based on application environment
    $requestedAppEnv = env('APP_ENV', null);
    if ($requestedAppEnv === 'production' && file_exists($envPathProduction)) {
        try {
            loadBaseEnv($envPathProduction);
        } catch (Exception $e) {
            error_log("Environment Error (AppEnv): " . $e->getMessage());
        }
    }
}

// Global safety: If absolutely nothing loaded yet, try production as last resort
if (!$loadedBase && file_exists($envPathProduction)) {
    try {
        loadBaseEnv($envPathProduction);
    } catch (Exception $e) {
        error_log("Environment Error (Safety): " . $e->getMessage());
    }
}

// Optional: support platform-style Postgres URLs (e.g. Vercel DATABASE_URL/POSTGRES_URL).
// This helps when DB_* vars are not individually defined in hosting.
$postgresUrl = env('DATABASE_URL', null)
    ?? env('POSTGRES_URL', null)
    ?? env('POSTGRES_PRISMA_URL', null)
    ?? env('SUPABASE_DB_URL', null);

if (!empty($postgresUrl) && is_string($postgresUrl)) {
    $parsed = parse_url($postgresUrl);
    $scheme = strtolower((string)($parsed['scheme'] ?? ''));
    if (in_array($scheme, ['postgres', 'postgresql', 'pgsql'], true)) {
        $query = [];
        if (!empty($parsed['query'])) {
            parse_str($parsed['query'], $query);
        }

        // Prefer URL values when DB_* are missing or still placeholder-like.
        $currentPassword = env('DB_PASSWORD', '');
        $shouldApplyUrl = empty(env('DB_HOST', null))
            || $currentPassword === 'your_supabase_db_password'
            || $currentPassword === 'YOUR-PASSWORD';

        if ($shouldApplyUrl) {
            $_ENV['DB_CONNECTION'] = 'pgsql';
            $_ENV['USE_SUPABASE'] = 'true';
            $_ENV['DB_HOST'] = $parsed['host'] ?? ($_ENV['DB_HOST'] ?? '');
            $_ENV['DB_PORT'] = isset($parsed['port']) ? (string)$parsed['port'] : ($_ENV['DB_PORT'] ?? '5432');
            $_ENV['DB_DATABASE'] = isset($parsed['path']) ? ltrim($parsed['path'], '/') : ($_ENV['DB_DATABASE'] ?? '');
            $_ENV['DB_USERNAME'] = $parsed['user'] ?? ($_ENV['DB_USERNAME'] ?? '');
            $_ENV['DB_PASSWORD'] = $parsed['pass'] ?? ($_ENV['DB_PASSWORD'] ?? '');
            $_ENV['DB_SSLMODE'] = $query['sslmode'] ?? env('DB_SSLMODE', 'require');

            putenv('DB_CONNECTION=pgsql');
            putenv('USE_SUPABASE=true');
            putenv('DB_HOST=' . $_ENV['DB_HOST']);
            putenv('DB_PORT=' . $_ENV['DB_PORT']);
            putenv('DB_DATABASE=' . $_ENV['DB_DATABASE']);
            putenv('DB_USERNAME=' . $_ENV['DB_USERNAME']);
            putenv('DB_PASSWORD=' . $_ENV['DB_PASSWORD']);
            putenv('DB_SSLMODE=' . $_ENV['DB_SSLMODE']);
        }
    }
}

// Database configuration from environment variables
$dbConfig = [
    'driver'    => env('DB_CONNECTION', 'mysql'),
    'host'      => env('DB_HOST'),
    'port'      => env('DB_PORT', '3306'),
    'database'  => env('DB_DATABASE'),
    'username'  => env('DB_USERNAME'),
    'password'  => env('DB_PASSWORD'),
    'charset'   => 'utf8mb4',
    'collation' => 'utf8mb4_unicode_ci',
];

/**
 * Hybrid mode flag:
 * - USE_SUPABASE=true  -> force PostgreSQL/Supabase branch
 * - USE_SUPABASE=false -> force local MySQL branch
 * - if not set, infer from DB_CONNECTION
 */
function useSupabase()
{
    // [HYBRID] Check if Supabase mode is explicitly toggled in .env
    $raw = env('USE_SUPABASE', null);
    if ($raw !== null) {
        $normalized = strtolower(trim((string)$raw));
        return in_array($normalized, ['1', 'true', 'yes', 'on'], true);
    }
    // [FALLBACK] If not set, infer from DB_CONNECTION (pgsql = Supabase)
    return env('DB_CONNECTION', 'mysql') === 'pgsql';
}

function isMysqlMode()
{
    return !useSupabase();
}

/**
 * Debug logging controlled by DEBUG_MODE=true/false in env.
 * Writes to PHP error_log (visible in server logs / Vercel logs).
 */
function debugModeEnabled()
{
    $raw = env('DEBUG_MODE', null);
    if ($raw === null) return false;
    $normalized = strtolower(trim((string)$raw));
    return in_array($normalized, ['1', 'true', 'yes', 'on'], true);
}

function debugLog($label, $data = null)
{
    if (!debugModeEnabled()) return;
    $payload = [
        'label' => $label,
        'use_supabase' => useSupabase(),
        'time' => date('c'),
        'data' => $data,
    ];
    error_log('[DOLE_DEBUG] ' . json_encode($payload));
}

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

        if ($dbConfig['driver'] === 'pgsql') {
            // Supabase requires SSL for most direct Postgres connections.
            $sslMode = env('DB_SSLMODE', 'require');
            $dsn = sprintf(
                "pgsql:host=%s;port=%s;dbname=%s;sslmode=%s",
                $dbConfig['host'],
                $dbConfig['port'],
                $dbConfig['database'],
                $sslMode
            );

            $options = [
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
                PDO::ATTR_EMULATE_PREPARES => false,
                PDO::ATTR_TIMEOUT => 5,
            ];
        } else {
            // MySQL Mode (Staging/InfinityFree or Localhost)
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
                PDO::ATTR_TIMEOUT => 30, // Higher timeout for remote MySQL InfinityFree
                PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES {$dbConfig['charset']} COLLATE {$dbConfig['collation']}",
            ];
        }

        try {
            debugLog('db.connect.params', [
                'driver' => $dbConfig['driver'],
                'host' => $dbConfig['host'],
                'port' => $dbConfig['port'],
                'db' => $dbConfig['database'],
                'user' => $dbConfig['username'],
                'env_keys' => [
                    'ENV_KEY' => env('ENV_KEY'),
                    'APP_ENV' => env('APP_ENV'),
                    'USE_SUPABASE' => env('USE_SUPABASE')
                ]
            ]);

            $pdo = new PDO($dsn, $dbConfig['username'], $dbConfig['password'], $options);
            if ($dbConfig['driver'] === 'pgsql') {
                $pdo->exec("SET client_encoding TO 'UTF8'");
            }
            debugLog('db.connect.success');
        } catch (PDOException $e) {
            // Log error (in production, log to file instead of displaying)
            error_log("Database Connection Error: " . $e->getMessage());
            debugLog('db.connect.error', ['msg' => $e->getMessage()]);
            throw new PDOException("Could not connect to database. Please check your configuration. (Mode: " . (useSupabase() ? 'PgSQL' : 'MySQL') . ")");
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
    // Prefer runtime/server environment (hosting secrets) over committed files.
    $val = getenv($key);
    if ($val !== false && $val !== '') return $val;
    if (isset($_SERVER[$key]) && $_SERVER[$key] !== '') return $_SERVER[$key];
    if (isset($_ENV[$key]) && $_ENV[$key] !== '') return $_ENV[$key];
    return $default;
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
    // Must include X-User-Id because apiRequest() injects it for auth-less PHP sessions.
    header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With, X-User-Id');
    header('Access-Control-Allow-Credentials: true');

    if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
        http_response_code(200);
        exit();
    }
}
