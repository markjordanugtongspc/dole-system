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
        $stmt = $pdo->prepare("SELECT username, full_name, profile_picture_path FROM users WHERE user_id = ?");
        $stmt->execute([$user_id]);
        $user = $stmt->fetch();

        if ($user) {
            echo json_encode(['success' => true, 'profile' => $user]);
        } else {
            echo json_encode(['success' => false, 'error' => 'User not found']);
        }
        exit;
    }

    // POST: Update profile
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $fullName = $_POST['full_name'] ?? '';
        $profilePicPath = null;

        // Handle File Upload
        if (isset($_FILES['profile_pic']) && $_FILES['profile_pic']['error'] === UPLOAD_ERR_OK) {
            $fileTmpPath = $_FILES['profile_pic']['tmp_name'];
            $fileName = $_FILES['profile_pic']['name'];
            $fileSize = $_FILES['profile_pic']['size'];
            $fileType = $_FILES['profile_pic']['type'];
            $fileNameCmps = explode(".", $fileName);
            $fileExtension = strtolower(end($fileNameCmps));

            // Allowed extensions
            $allowedfileExtensions = array('jpg', 'gif', 'png', 'jpeg');

            if (in_array($fileExtension, $allowedfileExtensions)) {
                // Directory: frontend/images/profiles/admin/
                $uploadPath = __DIR__ . '/../frontend/images/profiles/admin/';
                if (!file_exists($uploadPath)) {
                    mkdir($uploadPath, 0777, true);
                }

                // New filename: user_id + timestamp
                $newFileName = 'profile_' . $user_id . '_' . time() . '.' . $fileExtension;
                $dest_path = $uploadPath . $newFileName;

                if (move_uploaded_file($fileTmpPath, $dest_path)) {
                    // Update the path in database
                    // Store relative path for frontend access
                    $profilePicPath = 'frontend/images/profiles/admin/' . $newFileName;

                    $stmt = $pdo->prepare("UPDATE users SET full_name = ?, profile_picture_path = ? WHERE user_id = ?");
                    $stmt->execute([$fullName, $profilePicPath, $user_id]);
                } else {
                    echo json_encode(['success' => false, 'error' => 'Error moving the uploaded file']);
                    exit;
                }
            } else {
                echo json_encode(['success' => false, 'error' => 'Invalid file extension']);
                exit;
            }
        } else {
            // No file uploaded, just update name
            $stmt = $pdo->prepare("UPDATE users SET full_name = ? WHERE user_id = ?");
            $stmt->execute([$fullName, $user_id]);
        }

        // Return updated profile
        $stmt = $pdo->prepare("SELECT username, full_name, profile_picture_path FROM users WHERE user_id = ?");
        $stmt->execute([$user_id]);
        $user = $stmt->fetch();

        echo json_encode(['success' => true, 'message' => 'Profile updated successfully', 'profile' => $user]);
        exit;
    }

} catch (PDOException $e) {
    echo json_encode(['success' => false, 'error' => 'Database error: ' . $e->getMessage()]);
}
