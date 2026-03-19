/**
 * DOLE-GIP Offline-First DB Manager
 * ===================================
 * Manages a local IndexedDB database for offline-first architecture.
 * Data is read/written locally first, then synced to the remote API in
 * the background. A persistent sync queue handles retry logic.
 *
 * Stores:
 *  - beneficiaries: Local cache of all beneficiary records
 *  - sync_queue:    Pending write operations to be pushed to the API
 *  - metadata:      Timestamps and sync state info
 */

const DB_NAME = 'dole-gip-db';
const DB_VERSION = 1;
const STORES = {
    BENEFICIARIES: 'beneficiaries',
    SYNC_QUEUE: 'sync_queue',
    METADATA: 'metadata',
};

let _db = null;

/**
 * Open (or create) the IndexedDB database
 * @returns {Promise<IDBDatabase>}
 */
function openDB() {
    if (_db) return Promise.resolve(_db);

    return new Promise((resolve, reject) => {
        const request = indexedDB.open(DB_NAME, DB_VERSION);

        request.onupgradeneeded = (event) => {
            const db = event.target.result;

            // Beneficiaries store — keyed by gip_id / id
            if (!db.objectStoreNames.contains(STORES.BENEFICIARIES)) {
                const store = db.createObjectStore(STORES.BENEFICIARIES, { keyPath: 'id' });
                store.createIndex('name', 'name', { unique: false });
                store.createIndex('office', 'office', { unique: false });
                store.createIndex('remarks', 'remarks', { unique: false });
            }

            // Sync queue — auto-increment primary key
            if (!db.objectStoreNames.contains(STORES.SYNC_QUEUE)) {
                const syncStore = db.createObjectStore(STORES.SYNC_QUEUE, {
                    keyPath: 'queueId',
                    autoIncrement: true,
                });
                syncStore.createIndex('status', 'status', { unique: false });
            }

            // Metadata store — simple key/value
            if (!db.objectStoreNames.contains(STORES.METADATA)) {
                db.createObjectStore(STORES.METADATA, { keyPath: 'key' });
            }
        };

        request.onsuccess = (event) => {
            _db = event.target.result;
            console.log('[DB] IndexedDB opened:', DB_NAME);
            resolve(_db);
        };

        request.onerror = (event) => {
            console.error('[DB] Failed to open IndexedDB:', event.target.error);
            reject(event.target.error);
        };
    });
}

/**
 * Generic helper: run a transaction and return a Promise
 */
function txn(storeName, mode, callback) {
    return openDB().then(db => {
        return new Promise((resolve, reject) => {
            const transaction = db.transaction(storeName, mode);
            const store = transaction.objectStore(storeName);
            const request = callback(store);

            if (request && typeof request.onsuccess === 'undefined') {
                // callback returned nothing, resolve on complete
                transaction.oncomplete = () => resolve(null);
            } else if (request) {
                request.onsuccess = () => resolve(request.result);
            }

            transaction.onerror = () => reject(transaction.error);
            transaction.oncomplete = () => {
                if (!request) resolve(null);
            };
        });
    });
}

// ─── BENEFICIARIES LOCAL STORE ──────────────────────────────────────────────

/**
 * Replace the entire local beneficiary list (bulk cache update)
 * @param {Array} records
 */
export async function cacheBeneficiaries(records) {
    const db = await openDB();
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(STORES.BENEFICIARIES, 'readwrite');
        const store = transaction.objectStore(STORES.BENEFICIARIES);

        // Clear then re-fill
        store.clear();
        records.forEach(r => {
            // Normalize key: use 'id' field consistently
            const record = { ...r, id: r.id || r.gip_id };
            store.put(record);
        });

        transaction.oncomplete = () => {
            setMeta('beneficiaries_last_sync', Date.now());
            console.log(`[DB] Cached ${records.length} beneficiaries locally`);
            resolve(records.length);
        };
        transaction.onerror = () => reject(transaction.error);
    });
}

/**
 * Read all beneficiaries from local IndexedDB
 * @returns {Promise<Array>}
 */
export async function getLocalBeneficiaries() {
    const db = await openDB();
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(STORES.BENEFICIARIES, 'readonly');
        const store = transaction.objectStore(STORES.BENEFICIARIES);
        const req = store.getAll();
        req.onsuccess = () => resolve(req.result || []);
        req.onerror = () => reject(req.error);
    });
}

/**
 * Upsert a single beneficiary record locally (for optimistic updates)
 * @param {object} record
 */
export async function upsertLocalBeneficiary(record) {
    const db = await openDB();
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(STORES.BENEFICIARIES, 'readwrite');
        const store = transaction.objectStore(STORES.BENEFICIARIES);
        const normalized = { ...record, id: record.id || record.gip_id };
        const req = store.put(normalized);
        req.onsuccess = () => resolve(req.result);
        req.onerror = () => reject(req.error);
    });
}

/**
 * Delete a beneficiary from local store
 * @param {string} id
 */
export async function deleteLocalBeneficiary(id) {
    const db = await openDB();
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(STORES.BENEFICIARIES, 'readwrite');
        const store = transaction.objectStore(STORES.BENEFICIARIES);
        const req = store.delete(id);
        req.onsuccess = () => resolve();
        req.onerror = () => reject(req.error);
    });
}

/**
 * Check how many milliseconds ago the beneficiaries were last synced
 * @returns {Promise<number>} ms since last sync, or Infinity if never synced
 */
export async function getTimeSinceLastSync() {
    const ts = await getMeta('beneficiaries_last_sync');
    if (!ts) return Infinity;
    return Date.now() - ts;
}

// ─── SYNC QUEUE ──────────────────────────────────────────────────────────────

/**
 * Add an operation to the sync queue (called when offline or immediately before remote write)
 * @param {string} method  'POST' | 'PUT' | 'PATCH'
 * @param {string} endpoint  e.g. 'api/beneficiaries.php'
 * @param {object} payload  Data to send
 * @returns {Promise<number>} queueId
 */
export async function enqueueSync(method, endpoint, payload) {
    const db = await openDB();
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(STORES.SYNC_QUEUE, 'readwrite');
        const store = transaction.objectStore(STORES.SYNC_QUEUE);
        const item = {
            method,
            endpoint,
            payload,
            status: 'pending',   // 'pending' | 'syncing' | 'done' | 'failed'
            attempts: 0,
            createdAt: Date.now(),
            lastAttempt: null,
        };
        const req = store.add(item);
        req.onsuccess = () => {
            console.log(`[SyncQueue] Enqueued ${method} ${endpoint} (id: ${req.result})`);
            resolve(req.result);
        };
        req.onerror = () => reject(req.error);
    });
}

/**
 * Get all pending sync queue items
 * @returns {Promise<Array>}
 */
export async function getPendingSyncItems() {
    const db = await openDB();
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(STORES.SYNC_QUEUE, 'readonly');
        const store = transaction.objectStore(STORES.SYNC_QUEUE);
        const index = store.index('status');
        const req = index.getAll('pending');
        req.onsuccess = () => resolve(req.result || []);
        req.onerror = () => reject(req.error);
    });
}

/**
 * Update the status of a sync queue item
 * @param {number} queueId
 * @param {string} status
 */
export async function updateSyncStatus(queueId, status, extra = {}) {
    const db = await openDB();
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(STORES.SYNC_QUEUE, 'readwrite');
        const store = transaction.objectStore(STORES.SYNC_QUEUE);
        const getReq = store.get(queueId);
        getReq.onsuccess = () => {
            const item = getReq.result;
            if (!item) return resolve();
            const updated = { ...item, status, lastAttempt: Date.now(), attempts: (item.attempts || 0) + 1, ...extra };
            const putReq = store.put(updated);
            putReq.onsuccess = () => resolve();
            putReq.onerror = () => reject(putReq.error);
        };
        getReq.onerror = () => reject(getReq.error);
    });
}

/**
 * Remove a completed sync item from the queue
 * @param {number} queueId
 */
export async function dequeueSync(queueId) {
    const db = await openDB();
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(STORES.SYNC_QUEUE, 'readwrite');
        const store = transaction.objectStore(STORES.SYNC_QUEUE);
        const req = store.delete(queueId);
        req.onsuccess = () => resolve();
        req.onerror = () => reject(req.error);
    });
}

/**
 * Count how many items are pending in the sync queue
 * @returns {Promise<number>}
 */
export async function getPendingCount() {
    const items = await getPendingSyncItems();
    return items.length;
}

// ─── METADATA ─────────────────────────────────────────────────────────────────

export async function setMeta(key, value) {
    const db = await openDB();
    return new Promise((resolve, reject) => {
        const txn = db.transaction(STORES.METADATA, 'readwrite');
        const store = txn.objectStore(STORES.METADATA);
        const req = store.put({ key, value });
        req.onsuccess = () => resolve();
        req.onerror = () => reject(req.error);
    });
}

export async function getMeta(key) {
    const db = await openDB();
    return new Promise((resolve, reject) => {
        const txn = db.transaction(STORES.METADATA, 'readonly');
        const store = txn.objectStore(STORES.METADATA);
        const req = store.get(key);
        req.onsuccess = () => resolve(req.result?.value ?? null);
        req.onerror = () => reject(req.error);
    });
}

// ─── DATABASE INSPECTOR (for debugging) ────────────────────────────────────

export async function getDBStats() {
    const [beneficiaries, pending] = await Promise.all([
        getLocalBeneficiaries(),
        getPendingSyncItems(),
    ]);
    const lastSync = await getMeta('beneficiaries_last_sync');
    return {
        localBeneficiaries: beneficiaries.length,
        pendingSync: pending.length,
        lastSync: lastSync ? new Date(lastSync).toLocaleString() : 'Never',
    };
}

// Expose globally for debugging in browser console
window.__doleDB = {
    getStats: getDBStats,
    getLocalBeneficiaries,
    getPendingSyncItems,
};
