<?php
/**
 * User Profile API
 * DOLE-GIP System
 */

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit;
}

require_once __DIR__ . '/../config/db.php';

session_start();

$user_id = $_SESSION['user_id'] ?? null;

// For development/debugging if session is not active but we have localstorage
if (!$user_id && isset($_POST['user_id'])) {
    $user_id = $_POST['user_id'];
}

if (!$user_id) {
    echo json_encode(['success' => false, 'error' => 'Not authenticated']);
    exit;
}

try {
    $pdo = getDbConnection();

    // GET: Fetch profile
    if ($_SERVER['REQUEST_METHOD'] === 'GET') {
        $stmt = $pdo->prepare("SELECT user_id, username, email, full_name, profile_picture_path, bio_graphy, home_address, phone_number, languages, date_of_birth, gender, religion, notifications_enabled FROM users WHERE user_id = ?");
        $stmt->execute([$user_id]);
        $user = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($user) {
            echo json_encode(['success' => true, 'profile' => $user]);
        } else {
            echo json_encode(['success' => false, 'error' => 'User not found']);
        }
        exit;
    }

    // POST: Update profile or password
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        // Handle Password Change first if requested
        if (isset($_POST['action']) && $_POST['action'] === 'change_password') {
            $currentPassword = $_POST['current_password'] ?? '';
            $newPassword = $_POST['new_password'] ?? '';
            $confirmPassword = $_POST['confirm_password'] ?? '';

            if ($newPassword !== $confirmPassword) {
                echo json_encode(['success' => false, 'error' => 'Passwords do not match']);
                exit;
            }

            // Verify current password
            $stmt = $pdo->prepare("SELECT password_hash FROM users WHERE user_id = ?");
            $stmt->execute([$user_id]);
            $user = $stmt->fetch();

            if ($user && password_verify($currentPassword, $user['password_hash'])) {
                $newHash = password_hash($newPassword, PASSWORD_DEFAULT);
                $stmt = $pdo->prepare("UPDATE users SET password_hash = ? WHERE user_id = ?");
                $stmt->execute([$newHash, $user_id]);
                echo json_encode(['success' => true, 'message' => 'Password updated successfully']);
            } else {
                echo json_encode(['success' => false, 'error' => 'Incorrect current password']);
            }
            exit;
        }

        // Standard Profile Update
        $fullName = $_POST['full_name'] ?? '';
        $bio = $_POST['bio_graphy'] ?? '';
        $address = $_POST['home_address'] ?? '';
        $phone = $_POST['phone_number'] ?? '';
        $languages = $_POST['languages'] ?? '';
        $dob = $_POST['date_of_birth'] ?? null;
        $gender = $_POST['gender'] ?? '';
        $religion = $_POST['religion'] ?? '';
        $email = $_POST['email'] ?? '';
        $notifications = isset($_POST['notifications_enabled']) ? (int) $_POST['notifications_enabled'] : 1;

        $profilePicPath = null;

        // Handle File Upload
        if (isset($_FILES['profile_pic']) && $_FILES['profile_pic']['error'] === UPLOAD_ERR_OK) {
            $fileTmpPath = $_FILES['profile_pic']['tmp_name'];
            $fileName = $_FILES['profile_pic']['name'];
            $fileExtension = strtolower(pathinfo($fileName, PATHINFO_EXTENSION));

            $allowedfileExtensions = array('jpg', 'gif', 'png', 'jpeg');

            if (in_array($fileExtension, $allowedfileExtensions)) {
                $uploadPath = __DIR__ . '/../frontend/images/profiles/admin/';
                if (!file_exists($uploadPath)) {
                    mkdir($uploadPath, 0777, true);
                }

                $newFileName = 'profile_' . $user_id . '_' . time() . '.' . $fileExtension;
                $dest_path = $uploadPath . $newFileName;

                if (move_uploaded_file($fileTmpPath, $dest_path)) {
                    $profilePicPath = 'frontend/images/profiles/admin/' . $newFileName;

                    $stmt = $pdo->prepare("UPDATE users SET full_name = ?, email = ?, bio_graphy = ?, home_address = ?, phone_number = ?, languages = ?, date_of_birth = ?, gender = ?, religion = ?, notifications_enabled = ?, profile_picture_path = ? WHERE user_id = ?");
                    $stmt->execute([$fullName, $email, $bio, $address, $phone, $languages, $dob, $gender, $religion, $notifications, $profilePicPath, $user_id]);
                } else {
                    echo json_encode(['success' => false, 'error' => 'Error moving the uploaded file']);
                    exit;
                }
            } else {
                echo json_encode(['success' => false, 'error' => 'Invalid file extension']);
                exit;
            }
        } else {
            // No file uploaded
            $stmt = $pdo->prepare("UPDATE users SET full_name = ?, email = ?, bio_graphy = ?, home_address = ?, phone_number = ?, languages = ?, date_of_birth = ?, gender = ?, religion = ?, notifications_enabled = ? WHERE user_id = ?");
            $stmt->execute([$fullName, $email, $bio, $address, $phone, $languages, $dob, $gender, $religion, $notifications, $user_id]);
        }

        // Return updated profile
        $stmt = $pdo->prepare("SELECT user_id, username, email, full_name, profile_picture_path, bio_graphy, home_address, phone_number, languages, date_of_birth, gender, religion, notifications_enabled FROM users WHERE user_id = ?");
        $stmt->execute([$user_id]);
        $user = $stmt->fetch(PDO::FETCH_ASSOC);

        echo json_encode(['success' => true, 'message' => 'Profile updated successfully', 'profile' => $user]);
        exit;
    }

} catch (PDOException $e) {
    echo json_encode(['success' => false, 'error' => 'Database error: ' . $e->getMessage()]);
}
