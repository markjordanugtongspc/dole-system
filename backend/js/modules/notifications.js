/**
 * Notification System Module
 * DOLE-GIP System
 * Handles real-time notifications for admin users
 */

import { getBasePath } from './auth.js';

let notificationSound = null;
let notificationPermission = 'default';
let unreadCount = 0;
let notificationCheckInterval = null;
let lastNotifiedId = localStorage.getItem('last_notified_id') ? parseInt(localStorage.getItem('last_notified_id')) : 0;

/**
 * Initialize notification system
 */
export function initNotifications() {
    // Load notification sound
    const basePath = getBasePath();
    notificationSound = new Audio(`${basePath}backend/src/assets/sounds/ping-ding.mp3`);

    // Request notification permission
    requestNotificationPermission();

    // Initialize UI elements
    initNotificationUI();

    // Start polling for new notifications
    startNotificationPolling();

    // Load initial notifications
    loadNotifications();
}

/**
 * Request browser notification permission
 */
async function requestNotificationPermission() {
    if (!('Notification' in window)) {
        console.log('This browser does not support notifications');
        return;
    }

    if (Notification.permission === 'default') {
        // Show custom prompt using SweetAlert2
        const { default: Swal } = await import('sweetalert2');

        const result = await Swal.fire({
            title: 'Enable Notifications?',
            html: `
                <div class="text-left">
                    <p class="text-sm text-gray-600 mb-3">Stay updated with real-time alerts when:</p>
                    <ul class="text-sm text-gray-700 space-y-2 mb-4">
                        <li class="flex items-start gap-2">
                            <svg class="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
                            <span>New beneficiaries are added to the system</span>
                        </li>
                        <li class="flex items-start gap-2">
                            <svg class="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
                            <span>Documents require your review and approval</span>
                        </li>
                    </ul>
                    <p class="text-xs text-gray-500 italic">Recommended for better user experience</p>
                </div>
            `,
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Allow Notifications',
            cancelButtonText: 'Maybe Later',
            confirmButtonColor: '#10b981',
            cancelButtonColor: '#6b7280',
            customClass: {
                popup: 'rounded-2xl',
                confirmButton: 'font-bold',
                cancelButton: 'font-bold'
            }
        });

        if (result.isConfirmed) {
            const permission = await Notification.requestPermission();
            notificationPermission = permission;

            if (permission === 'granted') {
                Swal.fire({
                    icon: 'success',
                    title: 'Notifications Enabled!',
                    text: 'You will now receive real-time updates.',
                    timer: 3000,
                    showConfirmButton: false
                });
            }
        }
    } else {
        notificationPermission = Notification.permission;
    }
}

/**
 * Initialize notification UI elements
 */
function initNotificationUI() {
    const bellButton = document.getElementById('notificationBellButton');
    const dropdown = document.getElementById('notificationDropdown');

    if (!bellButton || !dropdown) return;

    // Handle bell button click
    bellButton.addEventListener('click', () => {
        loadNotifications();
    });
}

/**
 * Load notifications from server
 */
async function loadNotifications() {
    const basePath = getBasePath();
    const dropdown = document.getElementById('notificationDropdown');
    const notificationList = document.getElementById('notificationList');

    if (!notificationList) return;

    // Show loading state
    showLoadingState(notificationList);

    try {
        const response = await fetch(`${basePath}api/notifications.php`);
        const result = await response.json();

        if (result.success) {
            renderNotifications(result.notifications);
            updateBadgeCount(result.unread_count);
        } else {
            showErrorState(notificationList);
        }
    } catch (error) {
        console.error('Error loading notifications:', error);
        showErrorState(notificationList);
    }
}

/**
 * Show loading state
 */
function showLoadingState(container) {
    container.innerHTML = `
        <div class="flex items-center justify-center py-8">
            <span class="flex items-center bg-neutral-primary-soft border border-default text-heading text-xs font-medium px-1.5 py-0.5 rounded gap-1">
                <svg aria-hidden="true" role="status" class="w-3 h-3 me-1 animate-spin text-neutral-tertiary" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#6A7282"/>
                </svg>
                <span>Loading notifications...</span>
            </span>
        </div>
    `;
}

/**
 * Show error state
 */
function showErrorState(container) {
    container.innerHTML = `
        <div class="flex items-center justify-center py-8 text-gray-500 text-sm">
            <p>Unable to load notifications</p>
        </div>
    `;
}

/**
 * Render notifications
 */
function renderNotifications(notifications) {
    const notificationList = document.getElementById('notificationList');

    // Filter to only show unread notifications in the dropdown as requested
    const unreadNotifications = notifications.filter(n => n.is_read === 0);

    if (unreadNotifications.length === 0) {
        notificationList.innerHTML = `
            <div class="flex flex-col items-center justify-center py-12 px-4">
                <svg class="w-16 h-16 text-gray-300 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
                </svg>
                <p class="text-gray-500 text-sm font-medium">Clear for now!</p>
                <p class="text-gray-400 text-xs mt-1">You have no unread notifications.</p>
            </div>
        `;
        return;
    }

    const html = unreadNotifications.map(notif => renderNotificationItem(notif)).join('');
    notificationList.innerHTML = html;
}

/**
 * Render single notification item
 */
function renderNotificationItem(notification) {
    const timeAgo = getTimeAgo(notification.created_at);
    const timeBadge = getTimeBadge(timeAgo);
    const isUnread = notification.is_read === 0;

    return `
        <a href="#" 
           class="flex px-4 py-3 hover:bg-neutral-secondary-medium transition-colors cursor-pointer ${isUnread ? 'bg-emerald-50/30' : ''}" 
           data-notification-id="${notification.id}"
           onclick="markAsRead(${notification.id}); return false;">
            <div class="shrink-0">
                <div class="w-11 h-11 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-white font-black text-sm shadow-lg">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"/>
                    </svg>
                </div>
                ${isUnread ? `
                <div class="absolute flex items-center justify-center w-5 h-5 ms-6 -mt-5 bg-emerald-500 border-2 border-white rounded-full">
                    <span class="w-2 h-2 bg-white rounded-full"></span>
                </div>
                ` : ''}
            </div>
            <div class="w-full ps-3">
                <div class="text-body text-sm mb-1.5 ${isUnread ? 'font-semibold' : ''}">
                    ${notification.message}
                </div>
                <div class="flex items-center gap-2">
                    ${timeBadge}
                </div>
            </div>
        </a>
    `;
}

/**
 * Get time badge HTML based on time elapsed
 */
function getTimeBadge(timeAgo) {
    const minutes = timeAgo.minutes;

    if (minutes < 1) {
        // Just now - Success badge with clock
        return `
            <span class="flex items-center bg-success-soft border border-success-subtle text-fg-success-strong text-xs font-medium px-1.5 py-0.5 rounded">
                <svg class="w-3 h-3 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                </svg>
                Just now
            </span>
        `;
    } else if (minutes < 2) {
        // 1 minute - Success with spinner
        return `
            <span class="flex items-center bg-success-soft border border-success-subtle text-fg-success-strong text-xs font-medium px-1.5 py-0.5 rounded gap-1">
                <svg aria-hidden="true" role="status" class="w-3 h-3 me-1 animate-spin text-success-medium" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#009966"/>
                </svg>
                <span>1 min ago</span>
            </span>
        `;
    } else if (minutes < 3) {
        // 2 minutes - Secondary with spinner
        return `
            <span class="flex items-center bg-neutral-secondary-medium border border-default-medium text-heading text-xs font-medium px-1.5 py-0.5 rounded gap-1">
                <svg aria-hidden="true" role="status" class="w-3 h-3 me-1 animate-spin text-neutral-quaternary" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#6A7282"/>
                </svg>
                <span>2 mins ago</span>
            </span>
        `;
    } else {
        // Older - Primary soft
        return `
            <span class="flex items-center bg-neutral-primary-soft border border-default text-heading text-xs font-medium px-1.5 py-0.5 rounded gap-1">
                <svg class="w-3 h-3 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                </svg>
                <span>${timeAgo.text}</span>
            </span>
        `;
    }
}

/**
 * Calculate time ago
 */
function getTimeAgo(timestamp) {
    const now = new Date();
    const past = new Date(timestamp);
    const diffMs = now - past;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    let text = '';
    if (diffMins < 1) text = 'Just now';
    else if (diffMins < 60) text = `${diffMins} min${diffMins > 1 ? 's' : ''} ago`;
    else if (diffHours < 24) text = `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
    else text = `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;

    return { text, minutes: diffMins, hours: diffHours, days: diffDays };
}

/**
 * Update badge count
 */
function updateBadgeCount(count) {
    unreadCount = count;
    const badge = document.getElementById('notificationBadge');
    const bellIcon = document.getElementById('notificationBellIcon');

    if (badge) {
        if (count > 0) {
            badge.textContent = count > 99 ? '99+' : count;
            badge.classList.remove('hidden');
        } else {
            badge.classList.add('hidden');
        }
    }

    // Update bell icon
    if (bellIcon) {
        if (count > 0) {
            bellIcon.innerHTML = `
                <svg class="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.133 12.632v-1.8a5.406 5.406 0 0 0-4.154-5.262.955.955 0 0 0 .021-.106V3.1a1 1 0 0 0-2 0v2.364a.955.955 0 0 0 .021.106 5.406 5.406 0 0 0-4.154 5.262v1.8C6.867 15.018 5 15.614 5 16.807 5 17.4 5 18 5.538 18h12.924C19 18 19 17.4 19 16.807c0-1.193-1.867-1.789-1.867-4.175ZM8.823 19a3.453 3.453 0 0 0 6.354 0H8.823Z"/>
                </svg>
            `;
        } else {
            bellIcon.innerHTML = `
                <svg class="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5.365V3m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175 0 .593 0 1.292-.538 1.292H5.538C5 18 5 17.301 5 16.708c0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 12 5.365ZM8.733 18c.094.852.306 1.54.944 2.112a3.48 3.48 0 0 0 4.646 0c.638-.572 1.236-1.26 1.33-2.112h-6.92Z"/>
                </svg>
            `;
        }
    }
}

/**
 * Mark all notifications as read
 */
window.markAllAsRead = async function () {
    const basePath = getBasePath();
    const notificationList = document.getElementById('notificationList');

    if (!notificationList) return;

    // 1. Immediate UI Feedback
    updateBadgeCount(0); // Clear badge instantly
    notificationList.innerHTML = `
        <div class="flex flex-col items-center justify-center py-12 px-4 transition-opacity duration-300">
            <svg class="w-16 h-16 text-emerald-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            <p class="text-gray-500 text-sm font-bold animate-pulse">Marking everything as read...</p>
        </div>
    `;

    try {
        const response = await fetch(`${basePath}api/notifications.php`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ action: 'mark_all_read' })
        });

        const result = await response.json();

        if (result.success) {
            // 2. Indicator / Toast Feedback
            const { default: Swal } = await import('sweetalert2');
            Swal.fire({
                toast: true,
                position: 'top-end',
                icon: 'success',
                title: 'Inbox Cleared',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true
            });

            // Reload to show empty state
            loadNotifications();
        }
    } catch (error) {
        console.error('Error marking all as read:', error);
        loadNotifications(); // Rollback/Refresh on error
    }
};

/**
 * Mark single notification as read
 */
window.markAsRead = async function (notificationId) {
    const basePath = getBasePath();
    const item = document.querySelector(`[data-notification-id="${notificationId}"]`);

    // 1. Instant UI Feedback
    if (item) {
        item.style.opacity = '0'; // Fade out
        item.style.height = '0'; // Collapse
        item.style.padding = '0';
        item.style.overflow = 'hidden';
        item.style.transition = 'all 0.3s ease';
    }

    // Decrement badge locally for instant feel
    if (unreadCount > 0) {
        updateBadgeCount(unreadCount - 1);
    }

    try {
        await fetch(`${basePath}api/notifications.php`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ action: 'mark_read', notification_id: notificationId })
        });

        // Sync with server state
        loadNotifications();
    } catch (error) {
        console.error('Error marking notification as read:', error);
        loadNotifications(); // Rollback/Refresh on error
    }
};

/**
 * Start polling for new notifications
 */
function startNotificationPolling() {
    // Check every 10 seconds (reduced from 30s for better real-time sync)
    notificationCheckInterval = setInterval(async () => {
        await checkForNewNotifications();
    }, 10000);
}

/**
 * Check for new notifications
 */
async function checkForNewNotifications() {
    const basePath = getBasePath();
    const dropdown = document.getElementById('notificationDropdown');

    try {
        const response = await fetch(`${basePath}api/notifications.php?check_new=1`);
        const result = await response.json();

        if (result.success) {
            // ALWAYS update the badge count to stay in sync with other devices
            updateBadgeCount(result.unread_count);

            // If the notification list is currently open/visible, refresh the content
            if (dropdown && !dropdown.classList.contains('hidden')) {
                const listResponse = await fetch(`${basePath}api/notifications.php`);
                const listData = await listResponse.json();
                if (listData.success) {
                    renderNotifications(listData.notifications);
                }
            }

            // Only play "Pling" and show alert if there's a truly NEW notification
            if (result.has_new) {
                const latest = result.latest_notification;

                if (latest && latest.id > lastNotifiedId) {
                    lastNotifiedId = latest.id;
                    localStorage.setItem('last_notified_id', lastNotifiedId);

                    playNotificationSound();
                    showBrowserNotification(latest);
                }
            }
        }
    } catch (error) {
        console.error('Error checking notifications:', error);
    }
}

/**
 * Play notification sound (Respects User Settings)
 */
function playNotificationSound() {
    // Check local preference from storage first (fastest)
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const isSoundEnabled = user.notifications_enabled !== undefined ? parseInt(user.notifications_enabled) === 1 : true;

    if (isSoundEnabled && notificationSound) {
        notificationSound.play().catch(err => {
            console.log('Could not play notification sound (Interaction-required or muted):', err);
        });
    } else if (!isSoundEnabled) {
        console.log('Notification sound muted by user preference');
    }
}

/**
 * Show browser notification
 */
function showBrowserNotification(notification) {
    if (notificationPermission === 'granted' && notification) {
        const user = JSON.parse(localStorage.getItem('user') || '{}');
        const isSoundEnabled = user.notifications_enabled !== undefined ? parseInt(user.notifications_enabled) === 1 : true;

        new Notification('DOLE-GIP System', {
            body: notification.message,
            icon: `${getBasePath()}frontend/images/logo/doleiligan.png`,
            badge: `${getBasePath()}frontend/images/logo/doleiligan.png`,
            tag: `notification-${notification.id}`,
            requireInteraction: false,
            silent: !isSoundEnabled
        });
    }
}

/**
 * Create notification (called from other modules)
 */
export async function createNotification(message, type = 'info') {
    const basePath = getBasePath();

    try {
        const response = await fetch(`${basePath}api/notifications.php`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                action: 'create',
                message: message,
                type: type
            })
        });

        const result = await response.json();

        if (result.success) {
            // Trigger immediate check
            await checkForNewNotifications();
        }

        return result;
    } catch (error) {
        console.error('Error creating notification:', error);
        return { success: false, error: error.message };
    }
}
