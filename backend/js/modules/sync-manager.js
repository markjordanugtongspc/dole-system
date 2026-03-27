/**
 * DOLE-GIP Sync Manager
 * =====================
 * Background sync engine that processes the pending sync queue,
 * pushing local writes to the remote MySQL API.
 *
 * Flow:
 *  1. Any write (ADD/EDIT/ARCHIVE) immediately updates local IndexedDB
 *     and enqueues a sync job.
 *  2. processQueue() runs in the background, picks up pending jobs,
 *     and attempts to push them to the remote API.
 *  3. On failure, the job stays in the queue and is retried on the
 *     next cycle (with exponential backoff, max 3 retries).
 *  4. A status indicator in the UI shows pending vs. synced state.
 */

import { getBasePath } from './auth.js';
import { logger } from './logger.js';
import {
    getPendingSyncItems,
    updateSyncStatus,
    dequeueSync,
    getPendingCount,
    getTimeSinceLastSync,
    upsertLocalBeneficiary,
    deleteLocalBeneficiary,
} from './db-manager.js';

const MAX_RETRIES = 3;
const SYNC_INTERVAL_MS = 8000; // Try to flush queue every 8 seconds
let _syncIntervalId = null;
let _isSyncing = false;
let _onlineStatusEl = null;

// ─── INDICATOR UI ──────────────────────────────────────────────────────────

/**
 * Inject sync status pill into the page (top-right corner near nav)
 * This shows users how many records are pending upload.
 */
export function initSyncIndicator() {
    // Don't duplicate
    if (document.getElementById('sync-status-pill')) return;

    const pill = document.createElement('div');
    pill.id = 'sync-status-pill';
    pill.style.cssText = `
        position: fixed;
        bottom: 16px;
        left: 16px;
        z-index: 9999;
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 5px 10px;
        border-radius: 999px;
        font-size: 10px;
        font-weight: 800;
        font-family: 'Montserrat', sans-serif;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        transition: all 0.4s ease;
        opacity: 0;
        pointer-events: none;
        box-shadow: 0 2px 8px rgba(0,0,0,0.15);
    `;
    document.body.appendChild(pill);
    _onlineStatusEl = pill;
}

/**
 * Update the sync status pill content
 * @param {'synced'|'pending'|'syncing'|'offline'} state
 * @param {number} count  Number of pending items
 */
export function updateSyncIndicator(state, count = 0) {
    if (!_onlineStatusEl) return;

    const configs = {
        synced: {
            bg: '#dcfce7',
            color: '#15803d',
            border: '1px solid #bbf7d0',
            icon: '●',
            label: 'All Synced',
            opacity: '1',
        },
        pending: {
            bg: '#fef9c3',
            color: '#854d0e',
            border: '1px solid #fde68a',
            icon: '⏳',
            label: `${count} Pending`,
            opacity: '1',
        },
        syncing: {
            bg: '#dbeafe',
            color: '#1d4ed8',
            border: '1px solid #bfdbfe',
            icon: '↑',
            label: 'Syncing...',
            opacity: '1',
        },
        offline: {
            bg: '#fee2e2',
            color: '#b91c1c',
            border: '1px solid #fecaca',
            icon: '✕',
            label: 'Offline – data saved locally',
            opacity: '1',
        },
    };

    const cfg = configs[state] || configs.synced;

    Object.assign(_onlineStatusEl.style, {
        background: cfg.bg,
        color: cfg.color,
        border: cfg.border,
        opacity: cfg.opacity,
    });

    _onlineStatusEl.innerHTML = `<span>${cfg.icon}</span><span>${cfg.label}</span>`;

    // Auto-hide "All Synced" after 4 seconds
    if (state === 'synced') {
        setTimeout(() => {
            if (_onlineStatusEl) _onlineStatusEl.style.opacity = '0';
        }, 4000);
    }
}

// ─── QUEUE PROCESSOR ────────────────────────────────────────────────────────

/**
 * Get userId from localStorage for injecting auth headers
 */
function getUserId() {
    try {
        const user = JSON.parse(localStorage.getItem('user'));
        return user?.id || null;
    } catch { return null; }
}

/**
 * Send a single queued item to the remote API
 * @param {object} item  Sync queue entry
 * @returns {Promise<boolean>} true on success
 */
async function pushToRemote(item) {
    const userId = getUserId();
    const url = `${getBasePath()}${item.endpoint}`;

    const headers = {
        'Content-Type': 'application/json',
        ...(userId ? { 'X-User-Id': String(userId) } : {}),
    };

    const opts = {
        method: item.method,
        headers,
    };

    // PATCH requests send params in the URL, others send in body
    const finalUrl = item.method === 'PATCH'
        ? `${url}?${new URLSearchParams(item.payload).toString()}`
        : url;

    if (item.method !== 'PATCH' && item.method !== 'GET') {
        opts.body = JSON.stringify(item.payload);
    }

    const response = await fetch(finalUrl, opts);
    let result;
    try {
        result = await response.json();
    } catch (e) {
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        throw new Error('Invalid JSON response');
    }

    if (!response.ok || !result.success) {
        throw new Error(result.error || `HTTP ${response.status}`);
    }

    logger.debug('[Sync] Remote ack', {
        method: item.method,
        endpoint: item.endpoint,
        hasUserId: Boolean(userId),
        finalUrl
    });

    return result;
}

/**
 * Process the sync queue — pick up pending items and push to API.
 * Skips if already running or if offline.
 */
export async function processQueue() {
    if (_isSyncing) return;
    if (!navigator.onLine) {
        updateSyncIndicator('offline');
        return;
    }

    const items = await getPendingSyncItems();
    if (items.length === 0) return;

    _isSyncing = true;
    updateSyncIndicator('syncing', items.length);

    let successCount = 0;
    let failCount = 0;

    for (const item of items) {
        // Skip items that have failed too many times
        if ((item.attempts || 0) >= MAX_RETRIES) {
            await updateSyncStatus(item.queueId, 'failed');
            failCount++;
            continue;
        }

        try {
            logger.debug('[Sync] Pushing', {
                queueId: item.queueId,
                method: item.method,
                endpoint: item.endpoint,
                payloadKeys: item.payload ? Object.keys(item.payload) : []
            });
            const remoteResult = await pushToRemote(item);

            // If we POSTed a beneficiary with a temp id, replace local cache key immediately.
            if (
                item.method === 'POST' &&
                item.endpoint === 'api/beneficiaries.php' &&
                item.payload &&
                item.payload._tempId &&
                remoteResult &&
                remoteResult.success &&
                remoteResult.id
            ) {
                const realId = remoteResult.id;
                const tempId = item.payload._tempId;

                try {
                    // Remove temp record and reinsert under real ROX id
                    await deleteLocalBeneficiary(tempId);
                    const upgraded = { ...item.payload, id: realId };
                    delete upgraded._tempId;
                    await upsertLocalBeneficiary(upgraded);
                    logger.debug('[Sync] Upgraded temp id', { tempId, realId });
                } catch (e) {
                    logger.warn('[Sync] Failed upgrading temp id', e?.message || e);
                }
            }

            await dequeueSync(item.queueId);
            successCount++;
            console.log(`[Sync] ✓ Pushed ${item.method} ${item.endpoint} (queueId: ${item.queueId})`);
        } catch (error) {
            console.warn(`[Sync] ✗ Failed ${item.method} ${item.endpoint}:`, error.message);
            await updateSyncStatus(item.queueId, 'pending', { lastError: error.message });
            failCount++;
        }
    }

    _isSyncing = false;

    // Update UI
    const remaining = await getPendingCount();
    if (remaining === 0) {
        updateSyncIndicator('synced');
    } else {
        updateSyncIndicator('pending', remaining);
    }

    console.log(`[Sync] Batch complete. ✓ ${successCount} synced, ✗ ${failCount} failed. ${remaining} remaining.`);

    // If any items were successfully pushed, notify other modules to refresh data
    if (successCount > 0) {
        window.dispatchEvent(new CustomEvent('dataSynced', { detail: { count: successCount } }));
    }
}

// ─── BACKGROUND SYNC LOOP ───────────────────────────────────────────────────

/**
 * Start the background sync engine
 */
export function startSyncWorker() {
    if (_syncIntervalId) return;

    // Initial check on startup
    processQueue();

    _syncIntervalId = setInterval(() => {
        processQueue();
    }, SYNC_INTERVAL_MS);

    // Also flush immediately when we come back online
    window.addEventListener('online', () => {
        console.log('[Sync] Back online — flushing queue immediately');
        updateSyncIndicator('syncing');
        processQueue();
    });

    window.addEventListener('offline', () => {
        console.log('[Sync] Gone offline');
        updateSyncIndicator('offline');
    });

    console.log(`[Sync] Worker started (interval: ${SYNC_INTERVAL_MS}ms)`);
}

export function stopSyncWorker() {
    if (_syncIntervalId) {
        clearInterval(_syncIntervalId);
        _syncIntervalId = null;
        console.log('[Sync] Worker stopped');
    }
}
