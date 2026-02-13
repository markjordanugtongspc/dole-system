<?php
/**
 * Notification Dropdown Component
 * DOLE-GIP System
 */
?>

<!-- Notification Bell Button -->
<button id="notificationBellButton" data-dropdown-toggle="notificationDropdown" data-dropdown-placement="bottom-end"
    class="relative inline-flex items-center text-sm font-medium text-center text-gray-700 hover:text-gray-900 focus:outline-none transition-colors cursor-pointer"
    type="button">
    <span id="notificationBellIcon">
        <svg class="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
            fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 5.365V3m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175 0 .593 0 1.292-.538 1.292H5.538C5 18 5 17.301 5 16.708c0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 12 5.365ZM8.733 18c.094.852.306 1.54.944 2.112a3.48 3.48 0 0 0 4.646 0c.638-.572 1.236-1.26 1.33-2.112h-6.92Z" />
        </svg>
    </span>
    <span class="sr-only">Notifications</span>
    <div id="notificationBadge"
        class="hidden absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-1 -end-1">
        0
    </div>
</button>

<!-- Notification Dropdown -->
<div id="notificationDropdown"
    class="z-50 hidden w-full max-w-sm bg-white divide-y divide-gray-100 rounded-xl shadow-2xl border border-gray-200"
    aria-labelledby="notificationBellButton">

    <!-- Header -->
    <div class="block px-4 py-3 font-bold text-center text-gray-700 rounded-t-xl bg-gray-50 border-b border-gray-200">
        <div class="flex items-center justify-between">
            <span class="text-sm">Notifications</span>
            <button onclick="markAllAsRead()"
                class="text-xs text-emerald-600 hover:text-emerald-700 font-semibold transition-colors cursor-pointer">
                Mark all read
            </button>
        </div>
    </div>

    <!-- Notification List -->
    <div id="notificationList" class="divide-y divide-gray-100 max-h-96 overflow-y-auto custom-scrollbar">
        <!-- Notifications will be dynamically loaded here -->
        <div class="flex items-center justify-center py-8">
            <span
                class="flex items-center bg-neutral-primary-soft border border-default text-heading text-xs font-medium px-1.5 py-0.5 rounded gap-1">
                <svg aria-hidden="true" role="status" class="w-3 h-3 me-1 animate-spin text-neutral-tertiary"
                    viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor" />
                    <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="#6A7282" />
                </svg>
                <span>Loading...</span>
            </span>
        </div>
    </div>

    <!-- Footer -->
    <a href="<?php echo $baseUrl ?? ''; ?>/frontend/notifications/"
        class="block py-2.5 text-sm font-medium text-center text-gray-700 rounded-b-xl bg-gray-50 hover:bg-gray-100 transition-colors">
        <div class="inline-flex items-center gap-1.5">
            <svg class="w-4 h-4 text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-width="2"
                    d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z" />
                <path stroke="currentColor" stroke-width="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
            View all notifications
        </div>
    </a>
</div>