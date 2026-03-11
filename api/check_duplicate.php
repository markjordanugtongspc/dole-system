<?php
/**
 * Duplicate Checker API
 * Checks if a beneficiary already exists by name
 */

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

require_once __DIR__ . '/../config/db.php';

try {
    $pdo = getDbConnection();
    $data = json_decode(file_get_contents('php://input'), true);

    if (empty($data['name'])) {
        echo json_encode(['success' => false, 'error' => 'Name is required']);
        exit();
    }

    $name = trim($data['name']);
    
    // We check for exact match or very close match
    $stmt = $pdo->prepare("SELECT COUNT(*) FROM beneficiaries WHERE full_name = :name AND is_archived = 0");
    $stmt->execute(['name' => $name]);
    $count = $stmt->fetchColumn();

    echo json_encode([
        'success' => true,
        'exists' => $count > 0,
        'name' => $name
    ]);

} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Database error']);
}
