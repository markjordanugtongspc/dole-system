/**
 * AJAX Manager Module
 * DOLE-GIP System
 * Centralized AJAX utilities for network operations (Real-time sync handled natively via Supabase WebSockets)
 */

import { getBasePath } from './auth.js';
import Swal from 'sweetalert2';
import { logger } from './logger.js';

// Prevent noisy repeated network-offline errors from flooding the console.
const apiNetworkErrorState = new Map();

// START: apiRequest - Generic fetch wrapper with auth header injection and automatic GET retry handling
export async function apiRequest(endpoint, options = {}) {
    const basePath = getBasePath();
    const url = `${basePath}${endpoint}`;

    // Inject user_id header for Cloud environments (no PHP sessions)
    let userId = null;
    try {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            userId = user.user_id || user.id || null;
        }
    } catch (e) { /* ignore */ }

    const defaultOptions = {
        headers: {
            'Content-Type': 'application/json',
            ...(userId ? { 'X-User-Id': userId } : {}),
            ...options.headers
        },
        ...options
    };

    const shouldRetryNetwork = (defaultOptions.method || 'GET').toUpperCase() === 'GET';
    const maxAttempts = shouldRetryNetwork ? 2 : 1;
    let lastError = null;

    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
        try {
            logger.debug('[API] Request', { url, method: defaultOptions.method || 'GET', hasUserId: Boolean(userId) });
            if (defaultOptions.body) {
                try {
                    logger.json('[API] Payload', JSON.parse(defaultOptions.body));
                } catch {
                    logger.debug('[API] Payload (raw)', defaultOptions.body);
                }
            }

            const response = await fetch(url, defaultOptions);

            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }

            const data = await response.json();
            // Clear prior network-error suppression once request recovers.
            if (apiNetworkErrorState.has(url)) {
                apiNetworkErrorState.delete(url);
                logger.info?.('[API] Recovered', { url });
            }
            logger.debug('[API] Response', { url, ok: true });
            return { success: true, data };
        } catch (error) {
            lastError = error;
            const isNetworkError = error instanceof TypeError && /fetch/i.test(error.message || '');
            const canRetry = isNetworkError && attempt < maxAttempts;

            if (canRetry) {
                // Small backoff for cold-start / transient network conditions.
                await new Promise(resolve => setTimeout(resolve, 1200));
                continue;
            }
        }
    }

    const isNetworkError = lastError instanceof TypeError && /fetch/i.test(lastError.message || '');
    if (isNetworkError) {
        if (!apiNetworkErrorState.get(url)) {
            apiNetworkErrorState.set(url, true);
            logger.error('API Request Network Error (suppressed for repeats):', { url, message: lastError.message });
        }
    } else {
        logger.error('API Request Error:', lastError);
    }
    return { success: false, error: lastError?.message || 'Unknown request error' };
}
// END: apiRequest - Generic fetch wrapper with auth header injection and automatic GET retry handling

// START: apiGet - Performs GET HTTP request to backend endpoint
export async function apiGet(endpoint) {
    return apiRequest(endpoint, { method: 'GET' });
}
// END: apiGet - Performs GET HTTP request to backend endpoint

// START: apiPost - Performs POST HTTP request with JSON payload to backend endpoint
export async function apiPost(endpoint, body) {
    return apiRequest(endpoint, {
        method: 'POST',
        body: JSON.stringify(body)
    });
}
// END: apiPost - Performs POST HTTP request with JSON payload to backend endpoint

// START: apiPut - Performs PUT HTTP request with JSON payload to backend endpoint
export async function apiPut(endpoint, body) {
    return apiRequest(endpoint, {
        method: 'PUT',
        body: JSON.stringify(body)
    });
}
// END: apiPut - Performs PUT HTTP request with JSON payload to backend endpoint

// START: apiPatch - Performs PATCH HTTP request with URL parameters to backend endpoint
export async function apiPatch(endpoint, params) {
    const queryString = new URLSearchParams(params).toString();
    return apiRequest(`${endpoint}?${queryString}`, {
        method: 'PATCH'
    });
}
// END: apiPatch - Performs PATCH HTTP request with URL parameters to backend endpoint

// START: reinitFlowbite - Re-initializes Flowbite interactive DOM components after dynamic content updates
export function reinitFlowbite() {
    if (typeof window.initFlowbite === 'function') {
        window.initFlowbite();
        console.log('[Flowbite] Components re-initialized');
    } else {
        console.warn('[Flowbite] initFlowbite() not available globally');
    }
}
// END: reinitFlowbite - Re-initializes Flowbite interactive DOM components after dynamic content updates

// START: showToast - Displays animated SweetAlert2 toast notifications for user feedback
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
// END: showToast - Displays animated SweetAlert2 toast notifications for user feedback

// START: generateChecksum - Generates lightweight JSON string checksum for data state comparison
export function generateChecksum(data) {
    return JSON.stringify(data);
}
// END: generateChecksum - Generates lightweight JSON string checksum for data state comparison

// START: debounce - Limits execution frequency of rate-sensitive callback functions
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
// END: debounce - Limits execution frequency of rate-sensitive callback functions
