<?php
/**
 * Notifications API
 * DOLE-GIP System
 * Handles notification CRUD operations
 */

require_once __DIR__ . '/../config/db.php';
handleCors();
header('Content-Type: application/json');

session_start();

// In serverless (Vercel), sessions don't persist between requests.
// Accept user_id from session (localhost), POST body, GET param, or X-User-Id header.
$user_id = $_SESSION['user_id'] ?? null;

// Read JSON body once for POST requests (apiRequest sends JSON)
$rawInput = file_get_contents('php://input');
$jsonInput = [];
if (!empty($rawInput)) {
    $decoded = json_decode($rawInput, true);
    if (is_array($decoded)) $jsonInput = $decoded;
}

if (!$user_id && isset($jsonInput['user_id'])) $user_id = $jsonInput['user_id'];
if (!$user_id && isset($_POST['user_id'])) $user_id = $_POST['user_id'];
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
    $isSupabase = $pdo->getAttribute(PDO::ATTR_DRIVER_NAME) === 'pgsql';

    debugLog('notifications.init', ['method' => $_SERVER['REQUEST_METHOD'] ?? null]);

    // GET: Fetch notifications
    if ($_SERVER['REQUEST_METHOD'] === 'GET') {

        // Check for new notifications
        if (isset($_GET['check_new'])) {
            if ($isSupabase) {
                $stmt = $pdo->prepare("
                    SELECT COUNT(*) as unread_count,
                           (SELECT COUNT(*) FROM notifications WHERE user_id = ? AND is_read = 0 AND created_at > CURRENT_TIMESTAMP - INTERVAL '1 MINUTE') as has_new
                    FROM notifications 
                    WHERE user_id = ? AND is_read = 0
                ");
            } else {
                $stmt = $pdo->prepare("
                    SELECT COUNT(*) as unread_count,
                           (SELECT COUNT(*) FROM notifications WHERE user_id = ? AND is_read = 0 AND created_at > DATE_SUB(NOW(), INTERVAL 1 MINUTE)) as has_new
                    FROM notifications
                    WHERE user_id = ? AND is_read = 0
                ");
            }
            $stmt->execute([$user_id, $user_id]);
            $result = $stmt->fetch(PDO::FETCH_ASSOC);

            $hasNew = $result['has_new'] > 0;
            $latestNotification = null;

            if ($hasNew) {
                $stmt = $pdo->prepare("
                    SELECT * FROM notifications 
                    WHERE user_id = ? AND is_read = 0 
                    ORDER BY created_at DESC 
                    LIMIT 1
                ");
                $stmt->execute([$user_id]);
                $latestNotification = $stmt->fetch(PDO::FETCH_ASSOC);
            }

            echo json_encode([
                'success' => true,
                'has_new' => $hasNew,
                'unread_count' => $result['unread_count'],
                'latest_notification' => $latestNotification
            ]);
            exit;
        }

        // Fetch all notifications
        $limit = $_GET['limit'] ?? 20;
        $offset = $_GET['offset'] ?? 0;

        $stmt = $pdo->prepare("
            SELECT * FROM notifications 
            WHERE user_id = ? AND is_read != 3
            ORDER BY created_at DESC 
            LIMIT ? OFFSET ?
        ");
        $stmt->execute([$user_id, (int) $limit, (int) $offset]);
        $notifications = $stmt->fetchAll(PDO::FETCH_ASSOC);

        // Get unread count
        $stmt = $pdo->prepare("SELECT COUNT(*) as count FROM notifications WHERE user_id = ? AND is_read = 0");
        $stmt->execute([$user_id]);
        $unreadCount = $stmt->fetch(PDO::FETCH_ASSOC)['count'];

        echo json_encode([
            'success' => true,
            'notifications' => $notifications,
            'unread_count' => $unreadCount
        ]);
        exit;
    }

    // POST: Create, update, or mark notifications
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $input = $jsonInput;
        $action = $input['action'] ?? '';
        debugLog('notifications.post', ['action' => $action]);

        // Create notification
        if ($action === 'create') {
            $message = $input['message'] ?? '';
            $type = $input['type'] ?? 'info';
            $targetUserId = $input['target_user_id'] ?? $user_id;

            if (empty($message)) {
                echo json_encode(['success' => false, 'error' => 'Message is required']);
                exit;
            }

            if ($isSupabase) {
                $stmt = $pdo->prepare("
                    INSERT INTO notifications (user_id, message, type, is_read, created_at) 
                    VALUES (?, ?, ?, 0, NOW())
                    RETURNING id
                ");
                $stmt->execute([$targetUserId, $message, $type]);
                $newId = $stmt->fetchColumn();
            } else {
                $stmt = $pdo->prepare("
                    INSERT INTO notifications (user_id, message, type, is_read, created_at)
                    VALUES (?, ?, ?, 0, NOW())
                ");
                $stmt->execute([$targetUserId, $message, $type]);
                $newId = $pdo->lastInsertId();
            }

            echo json_encode([
                'success' => true,
                'message' => 'Notification created',
                'notification_id' => $newId
            ]);
            exit;
        }

        // Mark as read
        if ($action === 'mark_read') {
            $notificationId = $input['notification_id'] ?? 0;

            $stmt = $pdo->prepare("
                UPDATE notifications 
                SET is_read = 1, read_at = NOW() 
                WHERE id = ? AND user_id = ?
            ");
            $stmt->execute([$notificationId, $user_id]);

            echo json_encode(['success' => true, 'message' => 'Notification marked as read']);
            exit;
        }

        // Mark all as read (Set to 1)
        if ($action === 'mark_all_read') {
            $stmt = $pdo->prepare("
                UPDATE notifications 
                SET is_read = 1, read_at = NOW() 
                WHERE user_id = ? AND is_read = 0
            ");
            $stmt->execute([$user_id]);

            echo json_encode(['success' => true, 'message' => 'All notifications marked as read']);
            exit;
        }

        // Clear all (Set to 3 - HIDDEN)
        if ($action === 'clear_all') {
            $stmt = $pdo->prepare("
                UPDATE notifications 
                SET is_read = 3, read_at = NOW() 
                WHERE user_id = ? AND is_read != 3
            ");
            $stmt->execute([$user_id]);

            echo json_encode(['success' => true, 'message' => 'All notifications cleared']);
            exit;
        }

        echo json_encode(['success' => false, 'error' => 'Invalid action']);
        exit;
    }

} catch (PDOException $e) {
    echo json_encode(['success' => false, 'error' => 'Database error: ' . $e->getMessage()]);
}
