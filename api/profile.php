<?php
/**
 * User Profile API
 * DOLE-GIP System
 */

require_once __DIR__ . '/../config/db.php';
handleCors();
header('Content-Type: application/json');

session_start();

// In Cloud environments, sessions don't persist between requests.
// Accept user_id from session (localhost), POST body, GET param, or X-User-Id header.
$user_id = $_SESSION['user_id'] ?? null;
$jsonInput = json_decode(file_get_contents('php://input'), true) ?? [];

if (!$user_id && isset($jsonInput['user_id'])) $user_id = $jsonInput['user_id'];
if (!$user_id && isset($_POST['user_id'])) {
    $user_id = $_POST['user_id'];
}
if (!$user_id && isset($_GET['user_id'])) {
    $user_id = $_GET['user_id'];
}
if (!$user_id && isset($_SERVER['HTTP_X_USER_ID'])) {
    $user_id = $_SERVER['HTTP_X_USER_ID'];
}

if (!$user_id) {
    echo json_encode(['success' => false, 'error' => 'Not authenticated']);
    exit;
}

try {
    $pdo = getDbConnection();
    debugLog('profile.init', ['method' => $_SERVER['REQUEST_METHOD'] ?? null]);

    // GET: Fetch profile
    if ($_SERVER['REQUEST_METHOD'] === 'GET') {
        debugLog('profile.get', ['user_id' => $user_id]);
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
        $request = !empty($_POST) ? $_POST : $jsonInput;
        debugLog('profile.post', ['user_id' => $user_id, 'action' => $request['action'] ?? 'update_profile']);

        // Handle Password Change first if requested
        if (isset($request['action']) && $request['action'] === 'change_password') {
            $currentPassword = $request['current_password'] ?? '';
            $newPassword = $request['new_password'] ?? '';
            $confirmPassword = $request['confirm_password'] ?? '';

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
        $fullName = $request['full_name'] ?? '';
        $bio = $request['bio_graphy'] ?? '';
        $address = $request['home_address'] ?? '';
        $phone = $request['phone_number'] ?? '';
        $languages = $request['languages'] ?? '';
        $dob = $request['date_of_birth'] ?? null;
        $gender = $request['gender'] ?? '';
        $religion = $request['religion'] ?? '';
        $email = $request['email'] ?? '';
        $notifications = isset($request['notifications_enabled']) ? (int) $request['notifications_enabled'] : 1;

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
