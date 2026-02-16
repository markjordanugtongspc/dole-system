/**
 * AJAX Manager Module
 * DOLE-GIP System
 * Centralized AJAX utilities for real-time data synchronization
 */

import { getBasePath } from './auth.js';
import Swal from 'sweetalert2';

/**
 * Generic fetch wrapper with error handling
 * @param {string} endpoint - API endpoint path (e.g., 'api/beneficiaries.php')
 * @param {object} options - Fetch options
 * @returns {Promise<object>} - { success: boolean, data?: object, error?: string }
 */
export async function apiRequest(endpoint, options = {}) {
    const basePath = getBasePath();
    const url = `${basePath}${endpoint}`;

    const defaultOptions = {
        headers: {
            'Content-Type': 'application/json',
            ...options.headers
        },
        ...options
    };

    try {
        const response = await fetch(url, defaultOptions);

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();
        return { success: true, data };
    } catch (error) {
        console.error('API Request Error:', error);
        return { success: false, error: error.message };
    }
}

/**
 * GET request
 */
export async function apiGet(endpoint) {
    return apiRequest(endpoint, { method: 'GET' });
}

/**
 * POST request
 */
export async function apiPost(endpoint, body) {
    return apiRequest(endpoint, {
        method: 'POST',
        body: JSON.stringify(body)
    });
}

/**
 * PUT request
 */
export async function apiPut(endpoint, body) {
    return apiRequest(endpoint, {
        method: 'PUT',
        body: JSON.stringify(body)
    });
}

/**
 * PATCH request
 */
export async function apiPatch(endpoint, params) {
    const queryString = new URLSearchParams(params).toString();
    return apiRequest(`${endpoint}?${queryString}`, {
        method: 'PATCH'
    });
}

/**
 * Polling Manager
 * Manages multiple polling intervals with start/stop control
 */
class PollingManager {
    constructor() {
        this.intervals = new Map();
        this.isPageVisible = true;

        // Pause polling when page is hidden (battery/performance optimization)
        document.addEventListener('visibilitychange', () => {
            this.isPageVisible = !document.hidden;

            if (!this.isPageVisible) {
                console.log('[Polling] Page hidden - reducing activity');
            } else {
                console.log('[Polling] Page visible - resuming normal activity');
            }
        });
    }

    /**
     * Start polling an endpoint
     * @param {string} name - Unique identifier for this poll
     * @param {function} callback - Async function to execute
     * @param {number} interval - Milliseconds between polls
     */
    start(name, callback, interval = 10000) {
        // Stop existing if any
        this.stop(name);

        // Execute immediately
        callback();

        // Start interval
        const intervalId = setInterval(async () => {
            // Skip if page is hidden (optimization)
            if (!this.isPageVisible) return;

            await callback();
        }, interval);

        this.intervals.set(name, intervalId);

        console.log(`[Polling] Started: ${name} (every ${interval}ms)`);
    }

    /**
     * Stop specific polling
     */
    stop(name) {
        if (this.intervals.has(name)) {
            clearInterval(this.intervals.get(name));
            this.intervals.delete(name);
            console.log(`[Polling] Stopped: ${name}`);
        }
    }

    /**
     * Stop all polling intervals
     */
    stopAll() {
        this.intervals.forEach((_, name) => this.stop(name));
        console.log('[Polling] All intervals stopped');
    }

    /**
     * Get active polls
     */
    getActivePolls() {
        return Array.from(this.intervals.keys());
    }
}

export const pollingManager = new PollingManager();

/**
 * Flowbite Re-initialization Helper
 * Call this after any DOM update to re-attach Flowbite event listeners
 */
export function reinitFlowbite() {
    if (typeof window.initFlowbite === 'function') {
        window.initFlowbite();
        console.log('[Flowbite] Components re-initialized');
    } else {
        console.warn('[Flowbite] initFlowbite() not available globally');
    }
}

/**
 * Show toast notification using SweetAlert2
 * @param {string} title - Toast title
 * @param {string} message - Toast message
 * @param {string} icon - 'success', 'error', 'warning', 'info'
 */
export function showToast(title, message = '', icon = 'info') {
    Swal.fire({
        toast: true,
        position: 'top-end',
        icon: icon,
        title: title,
        text: message,
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true
    });
}

/**
 * Generate checksum for data comparison
 * Used to detect if data has actually changed before re-rendering
 * @param {any} data - Data to generate checksum for
 * @returns {string} - JSON string checksum
 */
export function generateChecksum(data) {
    return JSON.stringify(data);
}

/**
 * Debounce function to limit API call frequency
 * @param {function} func - Function to debounce
 * @param {number} wait - Milliseconds to wait
 * @returns {function} - Debounced function
 */
export function debounce(func, wait = 300) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Clean up polling on page unload
 */
window.addEventListener('beforeunload', () => {
    pollingManager.stopAll();
});

// Export PollingManager instance
export default pollingManager;
