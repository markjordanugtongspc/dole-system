<?php
/**
 * Notifications API
 * DOLE-GIP System
 * Handles notification CRUD operations
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

if (!$user_id) {
    echo json_encode(['success' => false, 'error' => 'Not authenticated']);
    exit;
}

try {
    $pdo = getDbConnection();

    // GET: Fetch notifications
    if ($_SERVER['REQUEST_METHOD'] === 'GET') {

        // Check for new notifications
        if (isset($_GET['check_new'])) {
            $stmt = $pdo->prepare("
                SELECT COUNT(*) as unread_count,
                       (SELECT COUNT(*) FROM notifications WHERE user_id = ? AND is_read = 0 AND created_at > DATE_SUB(NOW(), INTERVAL 1 MINUTE)) as has_new
                FROM notifications 
                WHERE user_id = ? AND is_read = 0
            ");
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
            WHERE user_id = ? 
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
        $input = json_decode(file_get_contents('php://input'), true);
        $action = $input['action'] ?? '';

        // Create notification
        if ($action === 'create') {
            $message = $input['message'] ?? '';
            $type = $input['type'] ?? 'info';
            $targetUserId = $input['target_user_id'] ?? $user_id;

            if (empty($message)) {
                echo json_encode(['success' => false, 'error' => 'Message is required']);
                exit;
            }

            $stmt = $pdo->prepare("
                INSERT INTO notifications (user_id, message, type, is_read, created_at) 
                VALUES (?, ?, ?, 0, NOW())
            ");
            $stmt->execute([$targetUserId, $message, $type]);

            echo json_encode([
                'success' => true,
                'message' => 'Notification created',
                'notification_id' => $pdo->lastInsertId()
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

        // Mark all as read
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

        echo json_encode(['success' => false, 'error' => 'Invalid action']);
        exit;
    }

} catch (PDOException $e) {
    echo json_encode(['success' => false, 'error' => 'Database error: ' . $e->getMessage()]);
}
