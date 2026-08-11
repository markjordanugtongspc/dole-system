<?php
/**
 * Local-only, read-only diagnostic for the GIP beneficiary API.
 * Never returns credentials and never mutates the database.
 */

$remoteAddress = $_SERVER['REMOTE_ADDR'] ?? '';
$host = strtolower((string) ($_SERVER['HTTP_HOST'] ?? ''));
$isLoopbackAddress = in_array($remoteAddress, ['127.0.0.1', '::1', '::ffff:127.0.0.1'], true);
$isLocalHost = in_array(preg_replace('/:\d+$/', '', $host), ['localhost', '127.0.0.1', '[::1]'], true);
if (!$isLoopbackAddress && !$isLocalHost) {
    http_response_code(403);
    header('Content-Type: application/json');
    echo json_encode(['success' => false, 'error' => 'This diagnostic is available only from localhost.']);
    exit;
}

require_once __DIR__ . '/../../config/db.php';
header('Content-Type: application/json');

$requiredTables = [
    'beneficiaries' => ['gip_id', 'full_name', 'status_id', 'is_archived'],
    'genders' => ['gender_id', 'gender_name'],
    'offices' => [],
    'status_types' => ['status_id', 'status_name'],
];

$checks = [];
try {
    $pdo = getDbConnection();
    $driver = $pdo->getAttribute(PDO::ATTR_DRIVER_NAME);
    $isPgsql = $driver === 'pgsql';
    $checks[] = ['name' => 'database_connection', 'ok' => true, 'detail' => 'Connected using ' . $driver];

    foreach ($requiredTables as $table => $columns) {
        $tableStmt = $pdo->prepare(
            $isPgsql
                ? 'SELECT EXISTS (SELECT 1 FROM information_schema.tables WHERE table_schema = current_schema() AND table_name = :table)'
                : 'SELECT EXISTS (SELECT 1 FROM information_schema.tables WHERE table_schema = DATABASE() AND table_name = :table)'
        );
        $tableStmt->execute(['table' => $table]);
        $tableExists = (bool) $tableStmt->fetchColumn();
        $checks[] = ['name' => 'table.' . $table, 'ok' => $tableExists];

        if (!$tableExists) {
            continue;
        }

        foreach ($columns as $column) {
            $columnStmt = $pdo->prepare(
                $isPgsql
                    ? 'SELECT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_schema = current_schema() AND table_name = :table AND column_name = :column)'
                    : 'SELECT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_schema = DATABASE() AND table_name = :table AND column_name = :column)'
            );
            $columnStmt->execute(['table' => $table, 'column' => $column]);
            $checks[] = ['name' => 'column.' . $table . '.' . $column, 'ok' => (bool) $columnStmt->fetchColumn()];
        }
    }

    $statusStmt = $pdo->query("SELECT COUNT(*) FROM status_types WHERE UPPER(TRIM(status_name)) IN ('ONGOING', 'EXPIRED', 'RESIGNED', 'ABSORBED')");
    $statusCount = (int) $statusStmt->fetchColumn();
    $checks[] = ['name' => 'status_types.required_rows', 'ok' => $statusCount === 4, 'detail' => $statusCount . ' of 4 present'];

    $beneficiaryStmt = $pdo->query('SELECT COUNT(*) FROM beneficiaries');
    $beneficiaryCount = (int) $beneficiaryStmt->fetchColumn();
    $checks[] = ['name' => 'beneficiaries.read_query', 'ok' => true, 'detail' => 'Read query succeeded'];

    $ok = !in_array(false, array_column($checks, 'ok'), true);
    http_response_code($ok ? 200 : 500);
    echo json_encode([
        'success' => $ok,
        'driver' => $driver,
        'beneficiary_count' => $beneficiaryCount,
        'checks' => $checks,
    ]);
} catch (Throwable $exception) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'checks' => $checks,
        'error' => 'Database diagnostic failed. See the server error log for the exception details.',
    ]);
    error_log('[GIP_DIAGNOSTIC] ' . $exception->getMessage());
}