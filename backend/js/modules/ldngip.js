import { getBasePath } from './auth.js';
import { createNotification } from './notifications.js';
import { pollingManager, apiGet, apiPut, showToast, reinitFlowbite, generateChecksum } from './ajax-manager.js';
import { supabase } from './supabase-client.js';
import { isSupabaseMode } from './auth.js';
import {
    cacheBeneficiaries,
    getLocalBeneficiaries,
    upsertLocalBeneficiary,
    deleteLocalBeneficiary,
    getTimeSinceLastSync,
    enqueueSync,
} from './db-manager.js';
import { processQueue } from './sync-manager.js';
import Swal from 'sweetalert2';

/**
 * LDN Handling Module
 * Handles data fetching from backend API, rendering, and sorting for the LDN page
 */

// Beneficiaries data loaded from database
let beneficiaries = [];
let lastDataChecksum = null; // For detecting data changes
let currentPage = 1;
const itemsPerPage = 10;
let filteredDataGlobal = null; // Store current filtered state for pagination
/**
 * Load beneficiaries — Offline-First Strategy:
 * 1. Instantly serve from IndexedDB (local cache) — zero network wait
 * 2. Fetch fresh data from remote API in background
 * 3. If data changed, update local cache and re-render
 */
async function loadBeneficiaries() {
    // ── STEP 1: Serve from local cache immediately ───────────────────────────
    const localData = await getLocalBeneficiaries();
    if (localData.length > 0) {
        beneficiaries = localData;
        syncExpiredStatusesLocally(beneficiaries);

        // If the cached records are missing date fields, force a remote refresh
        // (prevents stale `N/A` while the remote DB actually has values).
        const hasMissingDates = beneficiaries.some(b =>
            (!b.startDateFormatted && !b.startDate) || (!b.endDateFormatted && !b.endDate)
        );
        window.__ldn_hasMissingDates = hasMissingDates;

        // Initialize checksum so polling can correctly detect changes immediately.
        lastDataChecksum = generateChecksum(beneficiaries);
        const savedSort = localStorage.getItem('ldn_sort_preference');
        if (savedSort) sortData(savedSort, false); else renderTable();
        console.log(`[Offline-First] Rendered ${localData.length} records from local cache`);
    }

    // ── STEP 2: Check if we should refresh from remote ──────────────────────
    const msSinceSync = await getTimeSinceLastSync();
    const CACHE_TTL = 30 * 1000; // 30 seconds — only re-fetch if cache is stale

    if (msSinceSync < CACHE_TTL && localData.length > 0) {
        const hasMissingDates = window.__ldn_hasMissingDates === true;
        if (!hasMissingDates) {
            console.log(`[Offline-First] Cache is fresh (${Math.round(msSinceSync / 1000)}s old), skipping remote fetch`);
            return; // Cache is good — don't hit the slow database
        }
        console.log('[Offline-First] Cache fresh but missing dates detected — refreshing remote');
    }

    // ── STEP 3: Background refresh from remote API ───────────────────────────
    try {
        let remoteData = [];
        if (isSupabaseMode() && supabase) {
            const { data, error } = await supabase
                .from('beneficiaries')
                .select('gip_id, full_name, contact_number, address, birthday, age, education, start_date, end_date, series_number, office_name, designation, replacement_notes, is_archived, created_at, genders(gender_name), offices(office_name), status_types(status_name), absorption_logs(absorption_datetime, "where", "position", "agency", users(username))')
                .eq('is_archived', false)
                .order('full_name', { ascending: true })
                .order('created_at', { ascending: true });

            if (error) throw error;
            
            remoteData = (data || []).map(b => ({
                id: b.gip_id,
                name: b.full_name,
                contact: b.contact_number,
                address: b.address,
                birthday: b.birthday,
                age: b.age || (b.birthday ? new Date().getFullYear() - new Date(b.birthday).getFullYear() : 0),
                gender: b.genders ? b.genders.gender_name : null,
                education: b.education,
                startDate: b.start_date,
                endDate: b.end_date,
                startDateFormatted: b.start_date ? new Date(b.start_date).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }) : null,
                endDateFormatted: b.end_date ? new Date(b.end_date).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }) : null,
                seriesNo: b.series_number,
                office: (b.offices ? b.offices.office_name : b.office_name) || null,
                designation: b.designation,
                replacement: b.replacement_notes,
                remarks: b.status_types ? b.status_types.status_name : null,
                absorbDate: b.absorption_logs ? b.absorption_logs.absorption_datetime : null,
                absorb_where: b.absorption_logs ? b.absorption_logs.where : null,
                absorb_position: b.absorption_logs ? b.absorption_logs.position : null,
                absorb_agency: b.absorption_logs ? b.absorption_logs.agency : null,
                absorb_by: b.absorption_logs && b.absorption_logs.users ? b.absorption_logs.users.username : null,
                isArchived: b.is_archived,
                createdAt: b.created_at
            }));
        } else {
            const result = await apiGet('api/beneficiaries.php');
            if (result.success && result.data?.success && result.data?.beneficiaries) {
                remoteData = result.data.beneficiaries;
            } else {
                throw new Error(result.error || 'Fetch failed from API');
            }
        }

        // Only update if something actually changed
        const localChecksum = generateChecksum(localData);
        const remoteChecksum = generateChecksum(remoteData);

            if (localChecksum !== remoteChecksum) {
                await cacheBeneficiaries(remoteData); // Update local cache
                beneficiaries = remoteData;
                syncExpiredStatusesLocally(beneficiaries);
                const savedSort = localStorage.getItem('ldn_sort_preference');
                if (savedSort) sortData(savedSort, false); else renderTable();
                lastDataChecksum = remoteChecksum;
                console.log(`[Offline-First] Remote data synced and rendered (${remoteData.length} records)`);
            } else {
                console.log(`[Offline-First] Remote data matches cache — no re-render needed`);
                lastDataChecksum = remoteChecksum;
            }
    } catch (error) {
        // Network error — that's fine, we already rendered from local cache
        console.warn('[Offline-First] Remote fetch failed (using local cache):', error.message);
    }
}


function syncExpiredStatusesLocally(dataArray) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    dataArray.forEach(b => {
        if (b.remarks === 'ONGOING' && b.endDate) {
            const end = new Date(b.endDate);
            end.setHours(0, 0, 0, 0);
            if (end < today) {
                b.remarks = 'EXPIRED';
                // Trigger an async background sync to update exactly this record
                const updatePayload = { ...b };
                apiPut('api/beneficiaries.php', updatePayload).catch(e => console.error("Auto sync failed", e));
            }
        }
    });
}

export function initLDNPage() {
    loadBeneficiaries(); // Load from database
    initLDNHeader();
    initSearch();
    initAutoRefresh(); // Start real-time polling
}

/**
 * Initialize auto-refresh polling for real-time data sync
 */
function initAutoRefresh() {
    const ldnTable = document.getElementById('beneficiary-table-body');

    // Only start polling if we're on the LDN page
    if (!ldnTable) return;

    pollingManager.start('beneficiaries', async () => {
        // PREVENT CONFLICT: If bulk add is active OR was recently used (30s grace period)
        // This stops sync/toasts from closing your modals during delicate sessions
        const isBulkInUse = window.BulkApp && (
            window.BulkApp.isActive || 
            (Date.now() - (window.BulkApp.lastInteractionTime || 0) < 30000)
        );

        if (isBulkInUse) {
            return;
        }

        let newData = [];
        if (isSupabaseMode() && supabase) {
            const { data, error } = await supabase
                .from('beneficiaries')
                .select('gip_id, full_name, contact_number, address, birthday, age, education, start_date, end_date, series_number, office_name, designation, replacement_notes, is_archived, created_at, genders(gender_name), offices(office_name), status_types(status_name), absorption_logs(absorption_datetime, "where", "position", "agency", users(username))')
                .eq('is_archived', false)
                .order('full_name', { ascending: true })
                .order('created_at', { ascending: true });

            if (!error && data) {
                newData = data.map(b => ({
                    id: b.gip_id,
                    name: b.full_name,
                    contact: b.contact_number,
                    address: b.address,
                    birthday: b.birthday,
                    age: b.age || (b.birthday ? new Date().getFullYear() - new Date(b.birthday).getFullYear() : 0),
                    gender: b.genders ? b.genders.gender_name : null,
                    education: b.education,
                    startDate: b.start_date,
                    endDate: b.end_date,
                    startDateFormatted: b.start_date ? new Date(b.start_date).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }) : null,
                    endDateFormatted: b.end_date ? new Date(b.end_date).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }) : null,
                    seriesNo: b.series_number,
                    office: (b.offices ? b.offices.office_name : b.office_name) || null,
                    designation: b.designation,
                    replacement: b.replacement_notes,
                    remarks: b.status_types ? b.status_types.status_name : null,
                    absorbDate: b.absorption_logs ? b.absorption_logs.absorption_datetime : null,
                    absorb_where: b.absorption_logs ? b.absorption_logs.where : null,
                    absorb_position: b.absorption_logs ? b.absorption_logs.position : null,
                    absorb_agency: b.absorption_logs ? b.absorption_logs.agency : null,
                    absorb_by: b.absorption_logs && b.absorption_logs.users ? b.absorption_logs.users.username : null,
                    isArchived: b.is_archived,
                    createdAt: b.created_at
                }));
            }
        } else {
            const result = await apiGet('api/beneficiaries.php');
            if (result.success && result.data && result.data.beneficiaries) {
                newData = result.data.beneficiaries;
            }
        }

        if (newData.length > 0) {
            syncExpiredStatusesLocally(newData);
            const newChecksum = generateChecksum(newData);

            // Only update if data actually changed
            if (!lastDataChecksum || newChecksum !== lastDataChecksum) {
                beneficiaries = newData;
                renderTable();
                reinitFlowbite();

                showToast(
                    'Data Synced',
                    'Beneficiary list has been updated',
                    'info'
                );
            }

            lastDataChecksum = newChecksum;
        }
    }, 10000); // Poll every 10 seconds
}

export function renderTable(dataToRender = beneficiaries) {
    const tbody = document.getElementById('beneficiary-table-body');
    if (!tbody) return;

    // Update global reference for pagination
    filteredDataGlobal = dataToRender;

    if (dataToRender.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="7" class="px-6 py-10 text-center text-gray-400 font-medium">
                    <div class="flex flex-col items-center gap-2">
                        <svg class="w-10 h-10 opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <span>No beneficiaries found matching your search.</span>
                    </div>
                </td>
            </tr>
        `;
        const paginationContainer = document.getElementById('pagination-controls');
        if (paginationContainer) paginationContainer.innerHTML = '';
        return;
    }

    // Pagination Calculation
    const totalItems = dataToRender.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    
    // Ensure currentPage is within bounds
    if (currentPage > totalPages) currentPage = totalPages || 1;
    if (currentPage < 1) currentPage = 1;

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const pagedData = dataToRender.slice(startIndex, endIndex);

    tbody.innerHTML = pagedData.map(data => `
        <tr class="bg-blue-50 border-b border-blue-100 hover:bg-blue-100 transition-colors group cursor-pointer"
            onclick='viewBeneficiary(${JSON.stringify(data)})'>
            <th scope="row" class="px-4 py-3 font-medium text-heading whitespace-nowrap font-mono text-xs text-center">
                ${data.id}
            </th>
            <td class="px-4 py-3 font-bold text-royal-blue text-center">
                ${data.name}
            </td>
            <td class="px-4 py-3 text-center">
                <div class="flex justify-center">
                    <span class="${getOfficeClass(data.office)} text-[10px] sm:text-xs font-bold px-2.5 py-0.5 rounded whitespace-nowrap">
                        ${data.office || 'N/A'}
                    </span>
                </div>
            </td>
            <td class="px-4 py-3 whitespace-nowrap text-center text-xs">
                <span class="${(data.startDateFormatted || data.startDate) ? 'font-black text-royal-blue uppercase tracking-tight' : 'font-bold text-gray-300 italic'}">${data.startDateFormatted || data.startDate || 'N/A'}</span>
            </td>
            <td class="px-4 py-3 whitespace-nowrap text-center text-xs">
                <span class="${(data.endDateFormatted || data.endDate) ? 'font-black text-philippine-red uppercase tracking-tight' : 'font-bold text-gray-300 italic'}">${data.endDateFormatted || data.endDate || 'N/A'}</span>
            </td>
            <td class="px-4 py-3 text-center">
                <span class="${getStatusClass(data.remarks)} text-xs font-bold px-2.5 py-0.5 rounded uppercase border">
                    ${data.remarks || 'N/A'}
                </span>
            </td>
            <td class="px-4 py-3 flex gap-2">
                <button type="button"
                    class="font-medium text-royal-blue hover:scale-110 transition-transform p-1 cursor-pointer"
                    title="Edit Details" onclick='event.stopPropagation(); editBeneficiary(${JSON.stringify(data)})'>
                    <svg class="w-5 h-5 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z">
                        </path>
                    </svg>
                </button>
                <button type="button"
                    class="font-medium text-philippine-red hover:scale-110 transition-transform p-1 cursor-pointer"
                    title="Archive" onclick="event.stopPropagation(); archiveRecord('${data.id}')">
                    <svg class="w-5 h-5 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16">
                        </path>
                    </svg>
                </button>
            </td>
        </tr>
    `).join('');

    renderPagination(totalItems, totalPages);
    
    // Re-initialize Flowbite components after DOM update
    reinitFlowbite();
}

function renderPagination(totalItems, totalPages) {
    const container = document.getElementById('pagination-controls');
    if (!container) return;

    if (totalItems <= itemsPerPage) {
        container.innerHTML = `
            <span class="text-xs font-bold text-gray-500">Showing all ${totalItems} results</span>
            <div class="flex items-center gap-1"></div>
        `;
        return;
    }

    const startIdx = (currentPage - 1) * itemsPerPage + 1;
    const endIdx = Math.min(currentPage * itemsPerPage, totalItems);

    container.innerHTML = `
        <span class="text-xs font-bold text-gray-500 px-2 py-1">
            Showing <span class="text-royal-blue">${startIdx}-${endIdx}</span> of <span class="text-royal-blue">${totalItems}</span>
        </span>
        <div class="flex items-center gap-1 bg-gray-50 p-1 rounded-xl border border-gray-100">
            <!-- Previous Button -->
            <button onclick="changePage(${currentPage - 1})" ${currentPage === 1 ? 'disabled' : ''} 
                class="p-1.5 rounded-lg border border-gray-200 bg-white text-gray-600 hover:text-royal-blue hover:border-royal-blue/30 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7"/></svg>
            </button>
            
            ${generatePageNumbers(currentPage, totalPages)}

            <!-- Next Button -->
            <button onclick="changePage(${currentPage + 1})" ${currentPage === totalPages ? 'disabled' : ''} 
                class="p-1.5 rounded-lg border border-gray-200 bg-white text-gray-600 hover:text-royal-blue hover:border-royal-blue/30 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"/></svg>
            </button>
        </div>
    `;
}

function generatePageNumbers(current, total) {
    let html = '';
    const maxVisible = 3;
    
    let start = Math.max(1, current - 1);
    let end = Math.min(total, start + maxVisible - 1);
    
    if (end - start + 1 < maxVisible) {
        start = Math.max(1, end - maxVisible + 1);
    }

    if (start > 1) html += `<span class="px-2 text-gray-400">...</span>`;

    for (let i = start; i <= end; i++) {
        html += `
            <button onclick="changePage(${i})" 
                class="min-w-[32px] h-8 flex items-center justify-center rounded-lg text-xs font-black transition-all cursor-pointer
                ${i === current ? 'bg-royal-blue text-white shadow-md shadow-royal-blue/20' : 'bg-white text-gray-600 hover:bg-royal-blue/10 hover:text-royal-blue border border-gray-100'}">
                ${i}
            </button>
        `;
    }

    if (end < total) html += `<span class="px-2 text-gray-400">...</span>`;

    return html;
}

window.changePage = (page) => {
    currentPage = page;
    renderTable(filteredDataGlobal || beneficiaries);
};

function getOfficeClass(office) {
    if (!office) return 'bg-gray-100 text-gray-700 border border-gray-200 dark:!text-white';
    if (office.includes('DOLE')) return 'bg-blue-100 text-blue-700 border border-blue-200 dark:!text-white';
    if (office.includes('DepEd')) return 'bg-orange-100 text-orange-700 border border-orange-200 dark:!text-white';
    if (office.includes('LGU')) return 'bg-purple-100 text-purple-700 border border-purple-200 dark:!text-white';
    if (office.includes('DICT')) return 'bg-cyan-100 text-cyan-700 border border-cyan-200 dark:!text-white';
    return 'bg-gray-100 text-gray-700 border border-gray-200 dark:!text-white';
}

function getStatusClass(status) {
    if (!status) return 'bg-gray-100 text-gray-600 border-gray-200';
    const s = status.toUpperCase();
    if (s === 'ONGOING') return 'bg-green-100 text-green-700 border-green-200';
    if (s === 'EXPIRED') return 'bg-red-400 text-white border-red-400';
    if (s === 'RESIGNED') return 'bg-[#ce1126] text-white border-[#ce1126]';
    if (s === 'ABSORBED') return 'bg-[#2e7d32] text-white border-[#2e7d32]';
    return 'bg-gray-100 text-gray-600 border-gray-200';
}

export function sortData(criteria, saveToStorage = true) {
    if (saveToStorage) {
        localStorage.setItem('ldn_sort_preference', criteria);
    }

    switch (criteria) {
        case 'name_asc':
            beneficiaries.sort((a, b) => {
                const nameRes = a.name.localeCompare(b.name);
                if (nameRes !== 0) return nameRes;
                return new Date(a.createdAt) - new Date(b.createdAt);
            });
            break;
        case 'name_desc':
            beneficiaries.sort((a, b) => {
                const nameRes = b.name.localeCompare(a.name);
                if (nameRes !== 0) return nameRes;
                return new Date(a.createdAt) - new Date(b.createdAt);
            });
            break;
        case 'office':
            beneficiaries.sort((a, b) => (a.office || '').localeCompare(b.office || ''));
            break;
        case 'remarks':
            beneficiaries.sort((a, b) => (a.remarks || '').localeCompare(b.remarks || ''));
            break;
        case 'education':
            beneficiaries.sort((a, b) => (a.education || '').localeCompare(b.education || ''));
            break;
        case 'work':
            beneficiaries.sort((a, b) => (a.designation || '').localeCompare(b.designation || ''));
            break;
        case 'address':
            beneficiaries.sort((a, b) => (a.address || '').localeCompare(b.address || ''));
            break;
    }
    
    currentPage = 1;
    renderTable();

    // Auto-hide the dropdown menu
    const dropdown = document.getElementById('sort-dropdown');
    if (dropdown && !dropdown.classList.contains('hidden')) {
        dropdown.classList.add('hidden');
    }
}

export async function addBeneficiary(data) {
    // ── STEP 1: Capitalize fields ──────────────────────────────────────────────
    const capitalizedData = { ...data };
    const fieldsToCapitalize = ['name', 'address', 'education', 'designation'];
    fieldsToCapitalize.forEach(field => {
        if (capitalizedData[field] && typeof capitalizedData[field] === 'string') {
            capitalizedData[field] = capitalizedData[field].toUpperCase().trim();
        }
    });

    const isTempId = (val) => typeof val === 'string' && val.startsWith('temp_');
    const hasRealId = Boolean(capitalizedData.id) && !isTempId(capitalizedData.id);
    const method = hasRealId ? 'PUT' : 'POST';

    // ── STEP 2: Generate a temp id for new records so we can store locally ────
    if (!capitalizedData.id && !capitalizedData.gip_id) {
        capitalizedData._tempId = `temp_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;
        capitalizedData.id = capitalizedData._tempId;
    }

    // ── STEP 3: Save to local IndexedDB immediately (INSTANT) ─────────────────
    try {
        await upsertLocalBeneficiary(capitalizedData);
        // Refresh in-memory array for immediate re-render
        const localData = await getLocalBeneficiaries();
        beneficiaries = localData;
        syncExpiredStatusesLocally(beneficiaries);
        renderTable();
        console.log(`[Offline-First] ✓ Saved "${capitalizedData.name}" to local cache`);
    } catch (e) {
        console.error('[Offline-First] Local save failed:', e);
    }

    // ── STEP 4: Send notification optimistically for new records ──────────────
    if (method === 'POST') {
        createNotification(`New user <strong>${capitalizedData.name}</strong> added. pending "Required Documents" for review.`, 'success');
    }

    // ── STEP 5: Enqueue remote API sync (runs in background) ──────────────────
    try {
        // For POST, keep temp id locally but do NOT let it be treated as gip_id server-side.
        // `_tempId` will be used by the sync worker to replace the local record once the server returns the real ROX id.
        await enqueueSync(method, 'api/beneficiaries.php', capitalizedData);
        // Trigger sync worker immediately (non-blocking)
        processQueue();
    } catch (e) {
        console.error('[Offline-First] Failed to enqueue sync:', e);
    }

    return true; // Return immediately — don't wait for remote
}


export async function archiveRecord(id) {
    // Show Modern Confirmation Modal
    const result = await Swal.fire({
        title: '<span class="text-xl font-black text-heading uppercase tracking-tight">Confirm Archive</span>',
        html: `
            <div class="py-4">
                <p class="text-sm font-medium text-gray-500">Are you sure you want to archive this record?</p>
                <p class="text-[10px] font-black text-philippine-red mt-1 uppercase tracking-widest">ID: ${id}</p>
            </div>
        `,
        showCancelButton: true,
        confirmButtonText: `
            <div class="flex items-center gap-2">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" /></svg>
                <span>YES</span>
            </div>
        `,
        cancelButtonText: `
            <div class="flex items-center gap-2">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12" /></svg>
                <span>NO</span>
            </div>
        `,
        reverseButtons: true,
        customClass: {
            container: 'font-montserrat',
            popup: 'rounded-[1.5rem] shadow-2xl border border-gray-100',
            confirmButton: 'bg-green-50 text-green-700 hover:bg-green-600 hover:text-white font-black text-xs px-6 py-2.5 rounded-xl transition-all border border-green-200 shadow-sm mx-2 cursor-pointer',
            cancelButton: 'bg-red-50 text-red-700 hover:bg-red-600 hover:text-white font-black text-xs px-6 py-2.5 rounded-xl transition-all border border-red-200 shadow-sm mx-2 cursor-pointer'
        },
        buttonsStyling: false
    });

    if (!result.isConfirmed) return false;

    try {
        let responseSuccess = false;
        let errorMsg = 'Failed to archive';

        if (isSupabaseMode() && supabase) {
            const { error } = await supabase
                .from('beneficiaries')
                .update({ is_archived: true })
                .eq('gip_id', id);
            
            if (!error) responseSuccess = true;
            else errorMsg = error.message;
        } else {
            const response = await fetch(`${getBasePath()}api/beneficiaries.php?id=${encodeURIComponent(id)}&action=archive`, {
                method: 'PATCH'
            });
            const data = await response.json();
            if (data.success) responseSuccess = true;
            else errorMsg = data.error || errorMsg;
        }

        if (responseSuccess) {
            Swal.fire({
                toast: true,
                position: 'top-end',
                icon: 'success',
                title: 'Record Archived',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true
            });
            await loadBeneficiaries();
            return true;
        } else {
            throw new Error(data.error || 'Failed to archive');
        }
    } catch (error) {
        console.error('Error archiving beneficiary:', error);
        Swal.fire({
            icon: 'error',
            title: 'Archive Failed',
            text: error.message
        });
        return false;
    }
}

function initLDNHeader() {
    const headerContainer = document.getElementById('ldn-header-container');
    const headerText = document.getElementById('ldn-header-text');
    const headerIcon = document.getElementById('ldn-header-icon');

    if (headerContainer && headerText && headerIcon) {
        headerContainer.addEventListener('click', () => {
            // Skip toggle if on mobile (icon is hidden and text is auto-shortened via CSS)
            if (window.innerWidth < 640) return;

            const currentText = headerText.innerText.trim();
            const longText = "Lanao Del Norte - GIP";
            const shortText = "LDN - GIP";

            // If we have spans (from the recent HTML update), target the text content properly
            const isShort = headerText.querySelector('.sm\\:hidden')?.offsetParent !== null;
            
            if (currentText.includes(longText)) {
                headerText.innerHTML = shortText;
                headerIcon.classList.add('rotate-180');
            } else {
                headerText.innerHTML = longText;
                headerIcon.classList.remove('rotate-180');
            }
        });

        headerContainer.classList.add('cursor-pointer', 'select-none', 'transition-all', 'duration-200');
        headerIcon.classList.add('transition-transform', 'duration-200');
    }
}

function initSearch() {
    const searchInput = document.getElementById('table-search');
    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();

        if (query === "") {
            currentPage = 1;
            renderTable(beneficiaries);
            return;
        }

        const filtered = beneficiaries.filter(b =>
            (b.name?.toLowerCase().includes(query) || false) ||
            (b.id?.toLowerCase().includes(query) || false) ||
            (b.office?.toLowerCase().includes(query) || false) ||
            (b.remarks?.toLowerCase().includes(query) || false) ||
            (b.designation?.toLowerCase().includes(query) || false) ||
            (b.address?.toLowerCase().includes(query) || false) ||
            (b.education?.toLowerCase().includes(query) || false)
        );

        currentPage = 1;
        renderTable(filtered);
    });

    // Handle the "/" keyboard shortcut
    window.addEventListener('keydown', (e) => {
        if (e.key === '/' && document.activeElement !== searchInput) {
            e.preventDefault();
            searchInput.focus();
        }
    });
}

// Attach to window for easy access from HTML
window.sortData = sortData;
window.archiveRecord = archiveRecord;
window.addBeneficiaryData = addBeneficiary;
