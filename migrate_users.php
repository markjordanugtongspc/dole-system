<?php
require_once 'config/db.php';
try {
    $pdo = getDbConnection();
    $sql = "ALTER TABLE users 
            ADD COLUMN bio_graphy TEXT NULL AFTER full_name,
            ADD COLUMN home_address VARCHAR(255) NULL AFTER bio_graphy,
            ADD COLUMN phone_number VARCHAR(20) NULL AFTER home_address,
            ADD COLUMN languages VARCHAR(255) NULL AFTER phone_number,
            ADD COLUMN date_of_birth DATE NULL AFTER languages,
            ADD COLUMN gender VARCHAR(20) NULL AFTER date_of_birth,
            ADD COLUMN religion VARCHAR(50) NULL AFTER gender,
            ADD COLUMN notifications_enabled TINYINT(1) DEFAULT 1 AFTER religion";
    $pdo->exec($sql);
    echo "Migration successful: Added settings columns to users table.";
} catch (Exception $e) {
    echo "Migration failed: " . $e->getMessage();
}
