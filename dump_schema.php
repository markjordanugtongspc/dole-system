<?php
require_once 'config/db.php';
try {
    $pdo = getDbConnection();
    $stmt = $pdo->query("DESCRIBE users");
    $columns = $stmt->fetchAll(PDO::FETCH_COLUMN);
    echo implode(", ", $columns);
} catch (Exception $e) {
    echo $e->getMessage();
}
