import { getBasePath } from './auth.js';
import { createNotification } from './notifications.js';
import { apiGet, apiPatch, apiRequest, reinitFlowbite, generateChecksum } from './ajax-manager.js';
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
import { showLogsExportModal } from './logs-export.js';
import Swal from 'sweetalert2';

/**
 * GIP Management Module
 * Handles data fetching from backend API, rendering, and sorting for the GIP page
 */

function translateDateToShortMonth(dateStr) {
    if (!dateStr || dateStr === 'N/A') return 'N/A';
    // Handle MM/DD/YYYY format
    const parts = dateStr.split('/');
    if (parts.length === 3) {
        const month = parseInt(parts[0]);
        const day = parts[1];
        const year = parts[2];
        const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
        if (month >= 1 && month <= 12) {
            return `${months[month - 1]} ${day.padStart(2, '0')}, ${year}`;
        }
    }
    return dateStr.toUpperCase();
}

// Beneficiaries data loaded from database
let beneficiaries = [];
let lastDataChecksum = null;
const GIP_PAGE_SESSION_KEY = 'gip_current_page';
let currentPage = getPageFromUrl();
const itemsPerPage = 10;
let filteredDataGlobal = null; // Store current filtered state for pagination
let isInitialDataHydrating = true;
let lastSupabaseFetchTime = parseInt(localStorage.getItem('gip_last_supabase_fetch') || '0');
const FETCH_THROTTLE_MS = 5 * 60 * 1000; // 5 minutes (persisted across navigations)
let genderMap = {};
let statusMap = {};
let officeMap = {}; // keyed by offices.id → display name (e.g., "LGU - ILIGAN")


let currentStatusFilter = localStorage.getItem('gip_status_filter') || 'ONGOING';
let currentYearFilter = localStorage.getItem('gip_year_filter') || 'ALL';
let currentOfficeFilter = localStorage.getItem('gip_office_filter') || 'ALL';
let currentEducationFilter = localStorage.getItem('gip_education_filter') || 'ALL';
let currentBirthdayYearFilter = localStorage.getItem('gip_birthday_year_filter') || 'ALL';
let currentBirthdayMonthFilter = localStorage.getItem('gip_birthday_month_filter') || 'ALL';
let currentRelationshipFilter = localStorage.getItem('gip_relationship_filter') || 'ALL';
let currentAssignedUnitFilter = localStorage.getItem('gip_assigned_unit_filter') || 'ALL';
const PHONE_VISIBILITY_STORAGE_KEY = 'gip_phone_visibility';
let showPhoneNumbers = localStorage.getItem(PHONE_VISIBILITY_STORAGE_KEY) === 'ON';
const MONTH_NAMES = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'];
const FILTER_MODE_COOKIE = 'gip_filter_mode';
const FILTER_MODE_STORAGE_KEY = 'gip_filter_mode';
const DEFAULT_STATUS_FILTER = 'ONGOING';
const DEFAULT_YEAR_FILTER = 'ALL';
let filterModeEnabled = (localStorage.getItem(FILTER_MODE_STORAGE_KEY) || 'OFF') === 'ON';

function getPageFromUrl() {
    const urlPage = Number.parseInt(new URLSearchParams(window.location.search).get('page') || '1', 10);
    if (Number.isFinite(urlPage) && urlPage > 0) {
        return urlPage;
    }
    return 1;
}

function syncPageToUrl(page) {
    sessionStorage.setItem(GIP_PAGE_SESSION_KEY, String(page));
    const url = new URL(window.location.href);
    if (page > 1) {
        url.searchParams.set('page', String(page));
    } else {
        url.searchParams.delete('page');
    }
    window.history.replaceState({}, '', url);
}

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const match = value.match(new RegExp(`;\\s*${name}=([^;]+)`));
    return match ? decodeURIComponent(match[1]) : null;
}

function setCookie(name, value, days = 30) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = `${name}=${encodeURIComponent(value)};expires=${date.toUTCString()};path=/`;
}

const filterModeFromCookie = getCookie(FILTER_MODE_COOKIE);
if (filterModeFromCookie) {
    filterModeEnabled = filterModeFromCookie === 'ON';
}

function getFilteredBeneficiaries() {
    normalizeDynamicFilterSelections();
    let result = beneficiaries;

    if (filterModeEnabled) {
        if (currentStatusFilter !== 'ALL') {
            result = result.filter(b => (b.remarks || 'UNKNOWN').toUpperCase() === currentStatusFilter);
        }

        if (currentYearFilter !== 'ALL') {
            result = result.filter(b => {
                const rawDateStr = b.startDate || b.createdAt;
                if (!rawDateStr) return false;
                const d = new Date(rawDateStr);
                if (isNaN(d.getTime())) return false;
                return d.getFullYear().toString() === currentYearFilter;
            });
        }

        if (currentOfficeFilter !== 'ALL') {
            result = result.filter(b => (b.office || '').toUpperCase().includes(currentOfficeFilter.toUpperCase()));
        }
    }

    if (currentEducationFilter !== 'ALL') {
        const selectedEducation = currentEducationFilter.toUpperCase();
        result = result.filter((beneficiary) => String(beneficiary.education || '').trim().toUpperCase() === selectedEducation);
    }

    if (currentBirthdayYearFilter !== 'ALL') {
        const selectedYear = Number.parseInt(currentBirthdayYearFilter, 10);
        result = result.filter((beneficiary) => getBirthdayYear(beneficiary) === selectedYear);
    }

    if (currentBirthdayMonthFilter !== 'ALL') {
        const selectedMonth = Number.parseInt(currentBirthdayMonthFilter, 10);
        result = result.filter((beneficiary) => getBirthdaySortKey(beneficiary)[0] === selectedMonth);
    }

    if (currentRelationshipFilter !== 'ALL') {
        const selectedRelationship = currentRelationshipFilter.toUpperCase();
        result = result.filter((beneficiary) => String(beneficiary.relationshipToAssured || '').trim().toUpperCase() === selectedRelationship);
    }

    if (currentAssignedUnitFilter !== 'ALL') {
        const selectedAssignedUnit = currentAssignedUnitFilter.toUpperCase();
        result = result.filter((beneficiary) => String(beneficiary.designation || '').trim().toUpperCase() === selectedAssignedUnit);
    }

    // Default mode (Filter Mode OFF): show all records, ordered by priority office first
    // then ONGOING/EXPIRED/rest → A-Z by name. office_id FK may be null for legacy records.
    if (!filterModeEnabled) {
        // no additional filter — sortByDefaultPriority handles ordering
    }

    const searchInput = document.getElementById('table-search');
    const query = searchInput ? searchInput.value.toLowerCase().trim() : "";

    if (query !== "") {
        result = result.filter(b =>
            (b.name?.toLowerCase().includes(query) || false) ||
            (b.id?.toLowerCase().includes(query) || false) ||
            (b.contact?.toLowerCase().includes(query) || false) ||
            (b.office?.toLowerCase().includes(query) || false) ||
            (b.remarks?.toLowerCase().includes(query) || false) ||
            (b.designation?.toLowerCase().includes(query) || false) ||
            (b.address?.toLowerCase().includes(query) || false) ||
            (b.education?.toLowerCase().includes(query) || false)
        );
    }

    if (!filterModeEnabled) {
        return sortByDefaultPriority(result);
    }

    return result;
}

// Iligan DOLE office — offices.id = 1 (office='LGU').
// beneficiaries.office_id FK references offices.id (confirmed from schema).
// office_locations.id=30, office_id=1, location='ILIGAN' is the location row for this office.
const PRIORITY_OFFICE_ID = 1;

// Default-mode status ordering: ONGOING first, then EXPIRED, then everything else.
const STATUS_SORT_RANK = { 'ONGOING': 0, 'EXPIRED': 1 };
function statusRank(remarks) {
    const r = STATUS_SORT_RANK[(remarks || '').toUpperCase()];
    return r === undefined ? 2 : r;
}

// Default sort (Filter Mode OFF): Iligan office first → ONGOING/EXPIRED/rest → A-Z by name.
function sortByDefaultPriority(data) {
    return [...data].sort((a, b) => {
        const aPriority = Number(a.officeId) === PRIORITY_OFFICE_ID ? 0 : 1;
        const bPriority = Number(b.officeId) === PRIORITY_OFFICE_ID ? 0 : 1;
        if (aPriority !== bPriority) return aPriority - bPriority;

        const sr = statusRank(a.remarks) - statusRank(b.remarks);
        if (sr !== 0) return sr;

        return (a.name || '').localeCompare(b.name || '');
    });
}

function getBirthdaySortKey(beneficiary) {
    const value = String(beneficiary?.birthday || '').trim();
    if (!value) return [99, 99];

    const isoMatch = value.match(/^\d{4}-(\d{2})-(\d{2})/);
    if (isoMatch) return [Number.parseInt(isoMatch[1], 10) - 1, Number.parseInt(isoMatch[2], 10)];

    const date = new Date(value);
    return Number.isNaN(date.getTime()) ? [99, 99] : [date.getMonth(), date.getDate()];
}

function getBirthdayYear(beneficiary) {
    const value = String(beneficiary?.birthday || '').trim();
    if (!value) return null;

    const isoMatch = value.match(/^(\d{4})-\d{2}-\d{2}/);
    if (isoMatch) return Number.parseInt(isoMatch[1], 10);

    const date = new Date(value);
    return Number.isNaN(date.getTime()) ? null : date.getFullYear();
}

function normalizeDynamicFilterSelections() {
    const detectedYears = new Set(beneficiaries
        .map((beneficiary) => getBirthdayYear(beneficiary))
        .filter(Number.isInteger));
    if (currentBirthdayYearFilter !== 'ALL' && !detectedYears.has(Number.parseInt(currentBirthdayYearFilter, 10))) {
        currentBirthdayYearFilter = 'ALL';
        localStorage.setItem('gip_birthday_year_filter', 'ALL');
    }

    const detectedMonths = new Set(beneficiaries
        .map((beneficiary) => getBirthdaySortKey(beneficiary)[0])
        .filter((month) => month >= 0 && month < MONTH_NAMES.length));
    if (currentBirthdayMonthFilter !== 'ALL' && !detectedMonths.has(Number.parseInt(currentBirthdayMonthFilter, 10))) {
        currentBirthdayMonthFilter = 'ALL';
        localStorage.setItem('gip_birthday_month_filter', 'ALL');
    }

    const detectedRelationships = new Map(beneficiaries
        .map((beneficiary) => String(beneficiary.relationshipToAssured || '').trim())
        .filter(Boolean)
        .map((relationship) => [relationship.toUpperCase(), relationship]));
    if (currentRelationshipFilter !== 'ALL') {
        const detectedRelationship = detectedRelationships.get(currentRelationshipFilter.toUpperCase());
        if (detectedRelationship) {
            currentRelationshipFilter = detectedRelationship;
        } else {
            currentRelationshipFilter = 'ALL';
            localStorage.setItem('gip_relationship_filter', 'ALL');
        }
    }
}

function compareBirthdayMonth(a, b) {
    const [aMonth, aDay] = getBirthdaySortKey(a);
    const [bMonth, bDay] = getBirthdaySortKey(b);
    return (aMonth - bMonth) || (aDay - bDay) || String(a.name || '').localeCompare(String(b.name || ''));
}

function compareRelationshipToAssured(a, b) {
    const aRelationship = String(a.relationshipToAssured || '').trim();
    const bRelationship = String(b.relationshipToAssured || '').trim();
    if (!aRelationship && bRelationship) return 1;
    if (aRelationship && !bRelationship) return -1;
    return aRelationship.localeCompare(bRelationship) || String(a.name || '').localeCompare(String(b.name || ''));
}

function sortDatasetByCriteria(data, criteria) {
    const sorted = [...data];
    switch (criteria) {
        case 'name_asc':
            sorted.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'name_desc':
            sorted.sort((a, b) => b.name.localeCompare(a.name));
            break;
        case 'office':
            sorted.sort((a, b) => (a.office || '').localeCompare(b.office || ''));
            break;
        case 'remarks':
            sorted.sort((a, b) => (a.remarks || '').localeCompare(b.remarks || ''));
            break;
        case 'education':
            sorted.sort((a, b) => (a.education || '').localeCompare(b.education || ''));
            break;
        case 'birthday_month':
            sorted.sort(compareBirthdayMonth);
            break;
        case 'relationship':
            sorted.sort(compareRelationshipToAssured);
            break;
        case 'work':
            sorted.sort((a, b) => (a.designation || '').localeCompare(b.designation || ''));
            break;
        case 'address':
            sorted.sort((a, b) => (a.address || '').localeCompare(b.address || ''));
            break;
        default:
            return sortByDefaultPriority(sorted);
    }
    return sorted;
}

export function applyFilters() {
    if (!filterModeEnabled) return;

    const statusSelect = document.getElementById('filter-status');
    const yearSelect = document.getElementById('filter-year');
    if (statusSelect) {
        currentStatusFilter = statusSelect.value;
        localStorage.setItem('gip_status_filter', currentStatusFilter);
    }
    if (yearSelect) {
        currentYearFilter = yearSelect.value;
        localStorage.setItem('gip_year_filter', currentYearFilter);
    }
    currentPage = 1;
    syncPageToUrl(currentPage);
    renderTable();
    
    const dropdown = document.getElementById('filter-dropdown');
    if (dropdown && !dropdown.classList.contains('hidden')) {
        dropdown.classList.add('hidden');
    }
}

function updateFilterUI() {
    const statusSelect = document.getElementById('filter-status');
    const yearSelect = document.getElementById('filter-year');
    if (statusSelect) statusSelect.value = filterModeEnabled ? currentStatusFilter : DEFAULT_STATUS_FILTER;
    if (yearSelect) yearSelect.value = filterModeEnabled ? currentYearFilter : DEFAULT_YEAR_FILTER;
}

function persistFilterMode(enabled) {
    filterModeEnabled = enabled;
    const mode = enabled ? 'ON' : 'OFF';
    localStorage.setItem(FILTER_MODE_STORAGE_KEY, mode);
    setCookie(FILTER_MODE_COOKIE, mode, 30);
}

function updateFilterToggleButtonUI() {
    const applyFiltersButton = document.getElementById('apply-filters-button');
    if (!applyFiltersButton) return;

    applyFiltersButton.textContent = `Filter Mode: ${filterModeEnabled ? 'ON' : 'OFF'}`;
    applyFiltersButton.setAttribute('aria-pressed', filterModeEnabled ? 'true' : 'false');
    applyFiltersButton.classList.remove('bg-blue-700', 'hover:bg-royal-blue', 'bg-royal-blue', 'hover:bg-blue-700');
    if (filterModeEnabled) {
        applyFiltersButton.classList.add('bg-royal-blue', 'hover:bg-blue-700');
    } else {
        applyFiltersButton.classList.add('bg-blue-700', 'hover:bg-royal-blue');
    }
}

function updateFilterInputsAvailability() {
    const statusSelect = document.getElementById('filter-status');
    const yearSelect = document.getElementById('filter-year');
    if (statusSelect) statusSelect.disabled = !filterModeEnabled;
    if (yearSelect) yearSelect.disabled = !filterModeEnabled;
}

function toggleFilterMode() {
    const nextMode = !filterModeEnabled;
    persistFilterMode(nextMode);

    if (!nextMode) {
        currentStatusFilter = DEFAULT_STATUS_FILTER;
        currentYearFilter = DEFAULT_YEAR_FILTER;
        localStorage.setItem('gip_status_filter', currentStatusFilter);
        localStorage.setItem('gip_year_filter', currentYearFilter);
    } else {
        const statusSelect = document.getElementById('filter-status');
        const yearSelect = document.getElementById('filter-year');
        if (statusSelect) currentStatusFilter = statusSelect.value;
        if (yearSelect) currentYearFilter = yearSelect.value;
        localStorage.setItem('gip_status_filter', currentStatusFilter);
        localStorage.setItem('gip_year_filter', currentYearFilter);
    }

    updateFilterUI();
    updateFilterInputsAvailability();
    updateFilterToggleButtonUI();
    syncHeaderWithFilter();
    currentPage = 1;
    renderTable();
}

function populateYearFilter() {
    const yearSelect = document.getElementById('filter-year');
    if (!yearSelect) return;
    
    const availableYears = [...new Set(beneficiaries.map(b => {
        const rawDateStr = b.startDate || b.createdAt;
        if (!rawDateStr) return null;
        const d = new Date(rawDateStr);
        return isNaN(d.getTime()) ? null : d.getFullYear().toString();
    }).filter(y => y))].sort((a, b) => b - a);

    // Keep the "All Years" option and append others
    let optionsHTML = '<option value="ALL">All Years</option>';
    availableYears.forEach(y => {
        optionsHTML += `<option value="${y}">Year ${y}</option>`;
    });
    
    yearSelect.innerHTML = optionsHTML;
    yearSelect.value = currentYearFilter;
}
/**
 * Load beneficiaries — Offline-First Strategy:
 * 1. Instantly serve from IndexedDB (local cache) — zero network wait
 * 2. Fetch fresh data from remote API in background
 * 3. If data changed, update local cache and re-render
 */
export async function loadBeneficiaries(forceRemoteRefresh = false) {
    // ── STEP 1: Serve from local cache immediately ───────────────────────────
    let localData = await getLocalBeneficiaries();
    // Cache migration: old records stored before officeId mapping was added have
    // officeId=undefined. Force a fresh fetch so the filter works correctly.
    if (localData.length > 0 && localData[0].officeId === undefined) {
        await cacheBeneficiaries([]);
        localData = [];
        forceRemoteRefresh = true;
    }
    if (localData.length > 0) {
        beneficiaries = localData;
        syncExpiredStatusesLocally(beneficiaries);

        // If the cached records are missing date fields, force a remote refresh
        // (prevents stale `N/A` while the remote DB actually has values).
        const hasMissingDates = beneficiaries.some(b =>
            (!b.startDateFormatted && !b.startDate) || (!b.endDateFormatted && !b.endDate)
        );
        window.__gip_hasMissingDates = hasMissingDates;

        // Initialize checksum so polling can correctly detect changes immediately.
        lastDataChecksum = generateChecksum(beneficiaries);
        populateYearFilter();
        updateFilterUI();
        const savedSort = localStorage.getItem('gip_sort_preference');
        sortData(savedSort || 'name_asc', false);
        console.log(`[Offline-First] Rendered ${localData.length} records from local cache`);
    } else {
        // Cache empty — show loading skeleton so user doesn't see "No beneficiaries found"
        // while the remote fetch is in-flight.
        const tbody = document.getElementById('beneficiary-table-body');
        if (tbody) {
            // ── SKELETON LOADING ────────────────────────────────────────────────
            const skeletonRow = (widths) => `
                <div class="flex items-center justify-between py-3">
                    ${widths.map(w => `<div class="h-2.5 bg-gray-200 dark:bg-gray-700 rounded-full ${w}"></div>`).join('')}
                </div>`;
            const skeletonRows = [
                ['w-16', 'w-40', 'w-20', 'w-16', 'w-24', 'w-14', 'w-10'],
                ['w-20', 'w-32', 'w-16', 'w-20', 'w-20', 'w-12', 'w-10'],
                ['w-14', 'w-44', 'w-18', 'w-14', 'w-28', 'w-16', 'w-10'],
                ['w-18', 'w-36', 'w-20', 'w-18', 'w-20', 'w-14', 'w-10'],
                ['w-16', 'w-40', 'w-14', 'w-16', 'w-24', 'w-12', 'w-10'],
                ['w-20', 'w-28', 'w-18', 'w-20', 'w-20', 'w-16', 'w-10'],
                ['w-14', 'w-44', 'w-16', 'w-14', 'w-28', 'w-14', 'w-10'],
                ['w-18', 'w-32', 'w-20', 'w-18', 'w-20', 'w-12', 'w-10'],
            ];
            tbody.innerHTML = `
                <tr>
                    <td colspan="8" class="px-6 pt-2 pb-1">
                        <div role="status" class="animate-pulse">
                            ${skeletonRows.map(skeletonRow).join('')}
                            <span class="sr-only">Loading...</span>
                        </div>
                    </td>
                </tr>`;
            tbody.setAttribute('aria-busy', 'true');
            // ── END SKELETON LOADING ────────────────────────────────────────────
        }
    }

    // ── STEP 2: Check if we should refresh from remote ──────────────────────
    const msSinceSync = await getTimeSinceLastSync();
    const CACHE_TTL = 30 * 1000; // 30 seconds — only re-fetch if cache is stale

    if (!forceRemoteRefresh && msSinceSync < CACHE_TTL && localData.length > 0) {
        const hasMissingDates = window.__gip_hasMissingDates === true;
        if (!hasMissingDates) {
            console.log(`[Offline-First] Cache is fresh (${Math.round(msSinceSync / 1000)}s old), skipping remote fetch`);
            isInitialDataHydrating = false;
            return; // Cache is good — don't hit the slow database
        }
        console.log('[Offline-First] Cache fresh but missing dates detected — refreshing remote');
    }

    // ── STEP 3: Background refresh from remote API ───────────────────────────
    try {
        let remoteData = [];
        
        // [OPTIMIZATION] Fetch directly from Supabase if available for maximum speed
        if (isSupabaseMode() && supabase) {
            const now = Date.now();
            if (!forceRemoteRefresh && (now - lastSupabaseFetchTime < FETCH_THROTTLE_MS)) {
                console.log('[Offline-First] Throttling Supabase fetch (using local cache)');
            } else {
                console.log('[Offline-First] Fetching directly from Supabase (Optimized)...');

                // Fetch mappings and offices lookup if not already loaded
                if (Object.keys(genderMap).length === 0) {
                    try {
                        const [{ data: gData }, { data: sData }, { data: oData }, { data: olData }] = await Promise.all([
                            supabase.from('genders').select('gender_id, gender_name'),
                            supabase.from('status_types').select('status_id, status_name'),
                            supabase.from('offices').select('*').limit(500),
                            supabase.from('office_locations').select('id, office_id, location').limit(500)
                        ]);
                        if (gData) gData.forEach(g => genderMap[g.gender_id] = g.gender_name);
                        if (sData) sData.forEach(s => statusMap[s.status_id] = s.status_name);
                        // Build officeMap keyed by offices.id (beneficiaries.office_id FK target).
                        // For offices with exactly one location, display as "OFFICE - LOCATION"
                        // so badge color detection (e.g. "LGU - ILIGAN") works correctly.
                        if (oData) {
                            const locationsByOffice = {};
                            if (olData) olData.forEach(ol => {
                                if (!locationsByOffice[ol.office_id]) locationsByOffice[ol.office_id] = [];
                                locationsByOffice[ol.office_id].push(ol.location || '');
                            });
                            oData.forEach(o => {
                                const baseName = o.office_name || o.office || o.name || '';
                                const locs = locationsByOffice[o.id] || [];
                                officeMap[o.id] = locs.length === 1 ? `${baseName} - ${locs[0]}` : baseName;
                            });
                        }
                    } catch (e) { console.warn('Mapping fetch failed:', e); }
                }

                const { data, error } = await supabase
                    .from('beneficiaries')
                    .select(`
                        gip_id,
                        full_name,
                        contact_number,
                        address,
                        birthday,
                        age,
                        education,
                        relationship_to_assured,
                        start_date,
                        end_date,
                        series_number,
                        designation,
                        replacement_notes,
                        is_archived,
                        created_at,
                        gender_id,
                        office_id,
                        status_id
                    `)
                    .eq('is_archived', false)
                    .order('created_at', { ascending: false });

                if (!error && data) {
                    lastSupabaseFetchTime = now;
                    localStorage.setItem('gip_last_supabase_fetch', String(now));
                    remoteData = data.map(b => ({
                        id: b.gip_id,
                        name: b.full_name,
                        contact: b.contact_number,
                        address: b.address,
                        birthday: b.birthday,
                        age: b.age,
                        gender: genderMap[b.gender_id] || (b.gender_id == 1 ? 'Male' : (b.gender_id == 2 ? 'Female' : 'N/A')),
                        education: b.education,
                        relationshipToAssured: b.relationship_to_assured,
                        startDate: b.start_date,
                        endDate: b.end_date,
                        seriesNo: b.series_number,
                        officeId: b.office_id ?? null,
                        office: (b.office_id && officeMap[b.office_id]) || 'N/A',
                        designation: b.designation,
                        replacement: b.replacement_notes,
                        remarks: statusMap[b.status_id] || 'UNKNOWN',
                        createdAt: b.created_at
                    }));
                } else if (error) {
                    console.warn('[Offline-First] Supabase direct fetch failed, falling back to PHP Bridge:', error.message);
                }
            }
        }

        // Fallback to PHP Bridge if direct fetch failed or not in Supabase mode
        if (remoteData.length === 0) {
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
                populateYearFilter();
                updateFilterUI();
                const savedSort = localStorage.getItem('gip_sort_preference');
                sortData(savedSort || 'name_asc', false);
                lastDataChecksum = remoteChecksum;
                console.log(`[Offline-First] Remote data synced and rendered (${remoteData.length} records)`);
            } else {
                console.log(`[Offline-First] Remote data matches cache — no re-render needed`);
                lastDataChecksum = remoteChecksum;
            }
    } catch (error) {
        // Network error — that's fine, we already rendered from local cache
        console.warn('[Offline-First] Remote fetch failed (using local cache):', error.message);
    } finally {
        isInitialDataHydrating = false;
    }
}


function syncExpiredStatusesLocally(dataArray) {
    // Keep server/source-of-truth remarks as-is.
    // Do not auto-force EXPIRED locally, because it can override manual edits.
    dataArray.forEach(b => {
        if (typeof b.remarks === 'string') {
            b.remarks = b.remarks.trim().toUpperCase();
        }
    });
}

function initOfficeFilter() {
    const dropdown = document.getElementById('office-filter-dropdown');
    if (!dropdown) return;

    let currentView = 'OFFICES';
    let selectedOffice = null;
    let cachedOffices = [];

    const fetchOffices = async () => {
        if (cachedOffices.length > 0) return cachedOffices;
        try {
            const res = await apiGet('api/beneficiaries.php?get_offices_advanced=1');
            if (res.success && res.data?.success && Array.isArray(res.data.offices)) {
                cachedOffices = res.data.offices;
            }
        } catch (err) { console.error('Filter office fetch failed:', err); }
        return cachedOffices;
    };

    const render = async (view = 'OFFICES', office = null, filter = '') => {
        currentView = view;
        selectedOffice = office;

        if (view === 'OFFICES') {
            const offices = await fetchOffices();
            const filteredOffices = offices.filter(o => o.office.toLowerCase().includes(filter.toLowerCase()));

            dropdown.innerHTML = `
                <div class="px-4 py-3 bg-blue-50/50 rounded-t-xl border-b border-gray-100 flex items-center justify-between">
                    <span class="block text-[0.625rem] font-black text-royal-blue uppercase tracking-wider">OFFICE CODE</span>
                </div>
                <div class="p-2">
                    <div class="relative mb-2">
                        <div class="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none text-gray-400">
                            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                        </div>
                        <input type="text" id="office-filter-search" placeholder="Search offices..." dir="ltr"
                            class="w-full pl-8 pr-3 py-1.5 text-[0.625rem] font-bold bg-gray-50 border border-gray-100 focus:ring-blue-500 focus:border-blue-500 rounded-lg outline-none"
                            value="${filter}">
                    </div>
                    <ul class="max-h-60 overflow-y-auto py-1 text-xs font-bold text-gray-700 scrollbar-hide">
                        ${filteredOffices.length > 0 ? filteredOffices.map(o => {
                            const hasLocations = parseInt(o.location_count || 0) > 0;
                            return `
                                <li class="mb-0.5">
                                    <button class="office-filter-opt flex items-center justify-between w-full px-4 py-2 rounded-lg transition-colors group cursor-pointer ${hasLocations ? 'hover:bg-blue-50 hover:text-royal-blue' : 'text-gray-400 hover:bg-gray-100 hover:text-gray-600'}"
                                        data-id="${o.id}" data-name="${o.office}" data-has-locations="${hasLocations}">
                                        <span class="truncate">${o.office}</span>
                                        ${hasLocations ? `<svg class="w-3 h-3 text-slate-300 group-hover:text-blue-500 group-hover:translate-x-0.5 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7"/></svg>` : `<svg class="w-3 h-3 text-gray-300 group-hover:text-gray-500 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg>`}
                                    </button>
                                </li>
                            `;
                        }).join('') : '<li class="px-4 py-3 text-center text-gray-400 italic">No offices found.</li>'}
                    </ul>
                </div>
            `;

            const search = dropdown.querySelector('#office-filter-search');
            search.addEventListener('input', () => render('OFFICES', null, search.value));
            search.addEventListener('click', e => e.stopPropagation());
            setTimeout(() => search.focus(), 50);

            dropdown.querySelectorAll('.office-filter-opt').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    if (btn.dataset.hasLocations === 'true') {
                        render('LOCATIONS', { id: btn.dataset.id, name: btn.dataset.name });
                    } else {
                        window.setOfficeFilter(btn.dataset.name);
                        dropdown.classList.add('hidden');
                    }
                });
            });
        } else {
            dropdown.innerHTML = `
                <div class="px-4 py-3 bg-blue-50/50 rounded-t-xl border-b border-gray-100 flex items-center justify-between">
                    <div class="flex items-center gap-2">
                         <div class="p-1 rounded-md bg-green-500/10 text-green-600">
                            <svg class="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                        </div>
                        <span class="block text-[0.625rem] font-black text-royal-blue uppercase tracking-wider">OFFICE LOCATION</span>
                    </div>
                    <button id="back-to-offices-filter" class="p-1.5 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 transition-all cursor-pointer shadow-sm active:scale-90 flex items-center justify-center">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"/></svg>
                    </button>
                </div>
                <div class="p-2">
                    <div class="relative mb-2">
                        <div class="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none text-gray-400">
                            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                        </div>
                        <input type="text" id="loc-filter-search" placeholder="Search in ${office.name}..." 
                            class="w-full pl-8 pr-3 py-1.5 text-[0.625rem] font-bold bg-gray-50 border border-gray-100 focus:ring-blue-500 focus:border-blue-500 rounded-lg outline-none">
                    </div>
                    <ul id="loc-filter-list" class="max-h-60 overflow-y-auto py-1 text-xs font-bold text-gray-700 scrollbar-hide">
                        <li class="px-4 py-4 text-center text-gray-400 animate-pulse">Fetching...</li>
                    </ul>
                </div>
            `;

            const locList = dropdown.querySelector('#loc-filter-list');
            const search = dropdown.querySelector('#loc-filter-search');
            
            let locations = [];
            try {
                const res = await apiGet(`api/beneficiaries.php?get_office_locations=1&office_id=${office.id}`);
                if (res.success && res.data?.success && Array.isArray(res.data.locations)) locations = res.data.locations;
            } catch (err) { console.error('Filter locations fetch failed:', err); }

            const renderLocs = (f = '') => {
                const filtered = locations.filter(l => l.location.toLowerCase().includes(f.toLowerCase()));
                locList.innerHTML = filtered.length > 0 ? filtered.map(l => `
                    <li class="mb-0.5">
                        <button class="loc-filter-opt group/loc flex items-center w-full px-4 py-2 rounded-lg hover:bg-blue-50 hover:text-royal-blue transition-colors cursor-pointer" data-location="${l.location}">
                            <div class="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover/loc:bg-blue-500 mr-3 shrink-0"></div>
                            <span class="truncate">${l.location}</span>
                        </button>
                    </li>
                `).join('') : '<li class="px-4 py-3 text-center text-gray-400 italic">No locations found.</li>';

                locList.querySelectorAll('.loc-filter-opt').forEach(btn => {
                    btn.addEventListener('click', () => {
                        window.setOfficeFilter(`${office.name} - ${btn.dataset.location}`);
                    });
                });
            };

            renderLocs();
            setTimeout(() => search.focus(), 50);
            search.addEventListener('input', () => renderLocs(search.value));
            search.addEventListener('click', e => e.stopPropagation());
            dropdown.querySelector('#back-to-offices-filter').addEventListener('click', e => {
                e.stopPropagation();
                render('OFFICES');
            });
        }
    };

    // Initial render
    render();
    syncHeaderWithFilter();
}

function initOfficeQuickFilter() {
    const btn = document.getElementById('office-quick-filter-btn');
    const panel = document.getElementById('office-quick-filter-panel');
    const closeBtn = document.getElementById('office-quick-filter-close');
    const backBtn = document.getElementById('office-qf-back');
    const label = document.getElementById('office-qf-label');
    const scroll = document.getElementById('office-qf-scroll');
    const list = document.getElementById('office-qf-list');
    const arrowLeft = document.getElementById('office-qf-arrow-left');
    const arrowRight = document.getElementById('office-qf-arrow-right');
    if (!btn || !panel || !list || !scroll) return;

    let isOpen = false;
    let cachedOffices = [];
    let cachedLocationsByOffice = {};
    let prefetchDone = false;

    const SCROLL_STEP = 200;

    const updateArrows = () => {
        if (!arrowLeft || !arrowRight) return;
        const { scrollLeft, scrollWidth, clientWidth } = scroll;
        arrowLeft.classList.toggle('hidden', scrollLeft <= 2);
        arrowRight.classList.toggle('hidden', scrollLeft + clientWidth >= scrollWidth - 2);
    };

    scroll.addEventListener('scroll', updateArrows, { passive: true });

    if (arrowLeft) arrowLeft.addEventListener('click', () => {
        scroll.scrollBy({ left: -SCROLL_STEP, behavior: 'smooth' });
    });
    if (arrowRight) arrowRight.addEventListener('click', () => {
        scroll.scrollBy({ left: SCROLL_STEP, behavior: 'smooth' });
    });

    // Pre-fetch everything once on init so panel opens instantly
    const prefetch = async () => {
        if (prefetchDone) return;
        prefetchDone = true;
        try {
            const res = await apiGet('api/beneficiaries.php?get_offices_advanced=1');
            if (res.success && res.data?.success && Array.isArray(res.data.offices)) {
                cachedOffices = res.data.offices;
                cachedLocationsByOffice = res.data.locations_by_office || {};

                // Auto-detect LDNPFO as default if no filter is saved in localStorage
                const savedOffice = localStorage.getItem('gip_office_filter');
                if (!savedOffice) {
                    const ldnOffice = cachedOffices.find(o => o.office.toUpperCase().includes('LDNPFO'));
                    if (ldnOffice) {
                        currentOfficeFilter = ldnOffice.office;
                        localStorage.setItem('gip_office_filter', currentOfficeFilter);
                        
                        // Enable filter mode if it wasn't
                        if (!filterModeEnabled) {
                            persistFilterMode(true);
                            updateFilterUI();
                            updateFilterInputsAvailability();
                            updateFilterToggleButtonUI();
                        }
                        
                        syncHeaderWithFilter();
                        currentPage = 1;
                        renderTable();
                    }
                }
            }
        } catch (err) { console.error('QF prefetch failed:', err); prefetchDone = false; }
    };

    const fetchOffices = async () => {
        await prefetch();
        return cachedOffices;
    };

    const fetchLocations = async (officeId) => {
        await prefetch();
        return cachedLocationsByOffice[officeId] || [];
    };

    const openPanel = () => {
        isOpen = true;
        panel.style.pointerEvents = 'auto';
        panel.style.maxHeight = '80px';
        panel.style.opacity = '1';
        btn.classList.add('bg-violet-50', 'text-violet-700', 'border-violet-200');
    };

    const closePanel = () => {
        isOpen = false;
        panel.style.maxHeight = '0';
        panel.style.opacity = '0';
        panel.style.pointerEvents = 'none';
        btn.classList.remove('bg-violet-50', 'text-violet-700', 'border-violet-200');
        setTimeout(() => { if (!isOpen) showOffices(); }, 350);
    };

    const showSkeleton = () => {
        list.innerHTML = [1,2,3,4,5].map(() =>
            `<div class="h-7 w-20 rounded-full bg-gray-200 dark:bg-gray-700 animate-pulse shrink-0"></div>`
        ).join('');
        scroll.scrollLeft = 0;
        setTimeout(updateArrows, 50);
    };

    const afterRender = () => {
        scroll.scrollLeft = 0;
        setTimeout(updateArrows, 60);
    };

    const showOffices = async () => {
        label.textContent = 'Filter by Office';
        backBtn.classList.add('hidden');
        backBtn.classList.remove('flex');
        showSkeleton();
        const offices = await fetchOffices();
        if (!offices.length) {
            list.innerHTML = `<span class="text-xs text-gray-400 italic px-2">No offices found.</span>`;
            afterRender(); return;
        }
        list.innerHTML = offices.map(o => {
            const cls = getOfficeClass(o.office);
            return `<button class="office-qf-opt shrink-0 px-3 py-1 rounded-full text-[0.6875rem] font-bold border transition-all duration-150 cursor-pointer hover:scale-105 active:scale-95 ${cls}"
                data-id="${o.id}" data-name="${o.office}" data-has-locations="${parseInt(o.location_count || 0) > 0}">
                ${o.office}
            </button>`;
        }).join('');
        list.querySelectorAll('.office-qf-opt').forEach(b => {
            b.addEventListener('click', () => {
                if (b.dataset.hasLocations === 'true') {
                    showLocations({ id: b.dataset.id, name: b.dataset.name });
                } else {
                    window.setOfficeFilter(b.dataset.name);
                    closePanel();
                }
            });
        });
        afterRender();
    };

    const showLocations = async (office) => {
        label.textContent = office.name;
        backBtn.classList.remove('hidden');
        backBtn.classList.add('flex');
        showSkeleton();
        const locations = await fetchLocations(office.id);
        if (!locations.length) {
            list.innerHTML = `<span class="text-xs text-gray-400 italic px-2">No locations found.</span>`;
            afterRender(); return;
        }
        const officeClass = getOfficeClass(office.name);
        list.innerHTML = locations.map(l => `
            <button class="loc-qf-opt shrink-0 px-3 py-1 rounded-full text-[0.6875rem] font-bold border transition-all duration-150 cursor-pointer hover:scale-105 active:scale-95 ${officeClass}"
                data-location="${l.location}" data-office="${office.name}">
                📍 ${l.location}
            </button>
        `).join('');
        list.querySelectorAll('.loc-qf-opt').forEach(b => {
            b.addEventListener('click', () => {
                window.setOfficeFilter(`${b.dataset.office} - ${b.dataset.location}`);
                closePanel();
            });
        });
        afterRender();
    };

    btn.addEventListener('click', () => {
        if (isOpen) { closePanel(); return; }
        openPanel();
        showOffices();
    });

    closeBtn.addEventListener('click', () => closePanel());
    backBtn.addEventListener('click', () => showOffices());

    // Warm the cache immediately so first open is instant
    prefetch();
}

function populateEducationFilterOptions() {
    const options = document.getElementById('education-filter-options');
    const allOption = document.querySelector('[data-education-filter="ALL"]');
    if (!options) return;

    const levels = [...new Set(beneficiaries
        .map((beneficiary) => String(beneficiary.education || '').trim())
        .filter(Boolean))]
        .sort((a, b) => a.localeCompare(b));

    options.replaceChildren(...levels.map((level) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.dataset.educationFilter = level;
        button.className = `flex w-full items-center gap-2 px-4 py-2 text-left text-[0.6875rem] font-bold transition-colors cursor-pointer ${currentEducationFilter === level ? 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300' : 'text-gray-700 hover:bg-blue-50 hover:text-royal-blue dark:text-gray-200 dark:hover:bg-slate-700'}`;

        const icon = document.createElement('span');
        icon.className = 'inline-flex h-5 w-5 shrink-0 items-center justify-center text-blue-600';
        icon.innerHTML = getEducationIcon(level);
        const label = document.createElement('span');
        label.textContent = level;
        button.append(icon, label);
        return button;
    }));

    if (allOption) {
        allOption.classList.toggle('bg-green-100', currentEducationFilter === 'ALL');
        allOption.classList.toggle('text-green-700', currentEducationFilter === 'ALL');
    }
}

function closeEducationFilterMenu() {
    const menu = document.getElementById('education-filter-menu');
    const toggle = document.getElementById('education-filter-toggle');
    const chevron = document.getElementById('education-filter-chevron');
    if (menu) menu.classList.add('hidden');
    if (toggle) toggle.setAttribute('aria-expanded', 'false');
    if (chevron) chevron.classList.remove('rotate-90');
}

function applyEducationFilter(education) {
    currentEducationFilter = education || 'ALL';
    localStorage.setItem('gip_education_filter', currentEducationFilter);
    currentPage = 1;
    syncPageToUrl(currentPage);
    syncHeaderWithFilter();
    renderTable();
    closeEducationFilterMenu();
    const sortDropdown = document.getElementById('sort-dropdown');
    if (sortDropdown) sortDropdown.classList.add('hidden');
}

function initEducationFilter() {
    const sortDropdown = document.getElementById('sort-dropdown');
    const toggle = document.getElementById('education-filter-toggle');
    const menu = document.getElementById('education-filter-menu');
    const chevron = document.getElementById('education-filter-chevron');
    if (!sortDropdown || !toggle || !menu) return;

    toggle.addEventListener('click', (event) => {
        event.stopPropagation();
        const willOpen = menu.classList.contains('hidden');
        closeBirthdaySortFilterMenus();
        closeRelationshipFilterMenu();
        closeAssignedUnitFilterMenu();
        menu.classList.toggle('hidden', !willOpen);
        toggle.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
        if (chevron) chevron.classList.toggle('rotate-90', willOpen);
    });

    sortDropdown.addEventListener('click', (event) => {
        const option = event.target.closest('[data-education-filter]');
        if (!option) return;
        event.preventDefault();
        event.stopPropagation();
        applyEducationFilter(option.dataset.educationFilter);
    });
}

function setDynamicFilterOptionState(button, isActive) {
    button.classList.toggle('bg-green-100', isActive);
    button.classList.toggle('text-green-700', isActive);
    button.classList.toggle('dark:bg-green-900/40', isActive);
    button.classList.toggle('dark:text-green-300', isActive);
}

function populateBirthdayYearFilterOptions() {
    const options = document.getElementById('birthday-year-filter-options');
    const allOption = document.querySelector('[data-birthday-year-filter="ALL"]');
    if (!options) return;

    const detectedYears = [...new Set(beneficiaries
        .map((beneficiary) => getBirthdayYear(beneficiary))
        .filter(Number.isInteger))]
        .sort((a, b) => a - b);

    options.replaceChildren(...detectedYears.map((year) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.dataset.birthdayYearFilter = String(year);
        button.className = 'flex w-full items-center gap-2 py-2 pr-4 pl-10 text-left text-[0.6875rem] font-bold text-gray-700 transition-colors hover:bg-blue-50 hover:text-royal-blue cursor-pointer dark:text-gray-200 dark:hover:bg-slate-700';
        const label = document.createElement('span');
        label.textContent = String(year);
        button.append(label);
        setDynamicFilterOptionState(button, currentBirthdayYearFilter === String(year));
        return button;
    }));

    if (allOption) setDynamicFilterOptionState(allOption, currentBirthdayYearFilter === 'ALL');
}

function populateBirthdayMonthFilterOptions() {
    const options = document.getElementById('birthday-month-filter-options');
    const allOption = document.querySelector('[data-birthday-month-filter="ALL"]');
    if (!options) return;

    const detectedMonths = [...new Set(beneficiaries
        .map((beneficiary) => getBirthdaySortKey(beneficiary)[0])
        .filter((month) => month >= 0 && month < MONTH_NAMES.length))]
        .sort((a, b) => a - b);

    options.replaceChildren(...detectedMonths.map((monthIndex) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.dataset.birthdayMonthFilter = String(monthIndex);
        button.className = 'flex w-full items-center gap-2 py-2 pr-4 pl-10 text-left text-[0.6875rem] font-bold text-gray-700 transition-colors hover:bg-blue-50 hover:text-royal-blue cursor-pointer dark:text-gray-200 dark:hover:bg-slate-700';
        const label = document.createElement('span');
        label.textContent = MONTH_NAMES[monthIndex];
        button.append(label);
        setDynamicFilterOptionState(button, currentBirthdayMonthFilter === String(monthIndex));
        return button;
    }));

    if (allOption) setDynamicFilterOptionState(allOption, currentBirthdayMonthFilter === 'ALL');
}

function populateRelationshipFilterOptions() {
    const options = document.getElementById('relationship-filter-options');
    const allOption = document.querySelector('[data-relationship-filter="ALL"]');
    if (!options) return;

    const relationships = [...new Set(beneficiaries
        .map((beneficiary) => String(beneficiary.relationshipToAssured || '').trim())
        .filter(Boolean))]
        .sort((a, b) => a.localeCompare(b));

    options.replaceChildren(...relationships.map((relationship) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.dataset.relationshipFilter = relationship;
        button.className = 'flex w-full items-center gap-2 px-4 py-2 text-left text-[0.6875rem] font-bold text-gray-700 transition-colors hover:bg-blue-50 hover:text-royal-blue cursor-pointer dark:text-gray-200 dark:hover:bg-slate-700';
        button.innerHTML = '<svg class="h-4 w-4 shrink-0 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a4 4 0 00-6-3.5M9 20H2v-2a4 4 0 016-3.5m8-7a3 3 0 11-6 0 3 3 0 016 0zM9 8a3 3 0 11-6 0 3 3 0 016 0z" /></svg>';
        const label = document.createElement('span');
        label.textContent = relationship;
        button.append(label);
        setDynamicFilterOptionState(button, currentRelationshipFilter.toUpperCase() === relationship.toUpperCase());
        return button;
    }));

    if (allOption) setDynamicFilterOptionState(allOption, currentRelationshipFilter === 'ALL');
}

function populateAssignedUnitFilterOptions() {
    document.querySelectorAll('[data-assigned-unit-filter]').forEach((button) => {
        const value = button.dataset.assignedUnitFilter || 'ALL';
        setDynamicFilterOptionState(button, value.toUpperCase() === currentAssignedUnitFilter.toUpperCase());
    });
}

function closeNestedFilterMenu(type) {
    const menu = document.getElementById(`${type}-filter-menu`);
    const toggle = document.getElementById(`${type}-filter-toggle`);
    const chevron = document.getElementById(`${type}-filter-chevron`);
    if (menu) menu.classList.add('hidden');
    if (toggle) toggle.setAttribute('aria-expanded', 'false');
    if (chevron) chevron.classList.remove('rotate-90');
}

function toggleNestedFilterMenu(type, willOpen) {
    const menu = document.getElementById(`${type}-filter-menu`);
    const toggle = document.getElementById(`${type}-filter-toggle`);
    const chevron = document.getElementById(`${type}-filter-chevron`);
    if (!menu || !toggle) return;
    menu.classList.toggle('hidden', !willOpen);
    toggle.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
    if (chevron) chevron.classList.toggle('rotate-90', willOpen);
}

function closeBirthdaySortFilterMenus() {
    closeNestedFilterMenu('birthday-year');
    closeNestedFilterMenu('birthday-month');
    closeNestedFilterMenu('birthday-sort');
}

function closeRelationshipFilterMenu() {
    closeNestedFilterMenu('relationship');
}

function closeAssignedUnitFilterMenu() {
    closeNestedFilterMenu('assigned-unit');
}

function finishDynamicFilterSelection() {
    currentPage = 1;
    syncPageToUrl(currentPage);
    syncHeaderWithFilter();
    renderTable();
    closeBirthdaySortFilterMenus();
    closeRelationshipFilterMenu();
    closeAssignedUnitFilterMenu();
    const sortDropdown = document.getElementById('sort-dropdown');
    if (sortDropdown) sortDropdown.classList.add('hidden');
}

function initBirthdaySortFilter() {
    const sortDropdown = document.getElementById('sort-dropdown');
    const sortToggle = document.getElementById('birthday-sort-filter-toggle');
    const sortMenu = document.getElementById('birthday-sort-filter-menu');
    const yearToggle = document.getElementById('birthday-year-filter-toggle');
    const yearMenu = document.getElementById('birthday-year-filter-menu');
    const monthToggle = document.getElementById('birthday-month-filter-toggle');
    const monthMenu = document.getElementById('birthday-month-filter-menu');
    if (!sortDropdown || !sortToggle || !sortMenu || !yearToggle || !yearMenu || !monthToggle || !monthMenu) return;

    sortToggle.addEventListener('click', (event) => {
        event.stopPropagation();
        const willOpen = sortMenu.classList.contains('hidden');
        closeEducationFilterMenu();
        closeRelationshipFilterMenu();
        closeAssignedUnitFilterMenu();
        if (!willOpen) {
            closeBirthdaySortFilterMenus();
        } else {
            toggleNestedFilterMenu('birthday-sort', true);
        }
    });

    yearToggle.addEventListener('click', (event) => {
        event.stopPropagation();
        const willOpen = yearMenu.classList.contains('hidden');
        closeNestedFilterMenu('birthday-month');
        toggleNestedFilterMenu('birthday-year', willOpen);
    });

    monthToggle.addEventListener('click', (event) => {
        event.stopPropagation();
        const willOpen = monthMenu.classList.contains('hidden');
        closeNestedFilterMenu('birthday-year');
        toggleNestedFilterMenu('birthday-month', willOpen);
    });

    sortDropdown.addEventListener('click', (event) => {
        const yearOption = event.target.closest('[data-birthday-year-filter]');
        const monthOption = event.target.closest('[data-birthday-month-filter]');
        if (!yearOption && !monthOption) return;
        event.preventDefault();
        event.stopPropagation();

        if (yearOption) {
            currentBirthdayYearFilter = yearOption.dataset.birthdayYearFilter || 'ALL';
            localStorage.setItem('gip_birthday_year_filter', currentBirthdayYearFilter);
        }
        if (monthOption) {
            currentBirthdayMonthFilter = monthOption.dataset.birthdayMonthFilter || 'ALL';
            localStorage.setItem('gip_birthday_month_filter', currentBirthdayMonthFilter);
        }
        finishDynamicFilterSelection();
    });
}

function initRelationshipFilter() {
    const sortDropdown = document.getElementById('sort-dropdown');
    const toggle = document.getElementById('relationship-filter-toggle');
    const menu = document.getElementById('relationship-filter-menu');
    if (!sortDropdown || !toggle || !menu) return;

    toggle.addEventListener('click', (event) => {
        event.stopPropagation();
        const willOpen = menu.classList.contains('hidden');
        closeEducationFilterMenu();
        closeBirthdaySortFilterMenus();
        closeAssignedUnitFilterMenu();
        toggleNestedFilterMenu('relationship', willOpen);
    });

    sortDropdown.addEventListener('click', (event) => {
        const option = event.target.closest('[data-relationship-filter]');
        if (!option) return;
        event.preventDefault();
        event.stopPropagation();
        currentRelationshipFilter = option.dataset.relationshipFilter || 'ALL';
        localStorage.setItem('gip_relationship_filter', currentRelationshipFilter);
        finishDynamicFilterSelection();
    });
}

function initAssignedUnitFilter() {
    const sortDropdown = document.getElementById('sort-dropdown');
    const toggle = document.getElementById('assigned-unit-filter-toggle');
    const menu = document.getElementById('assigned-unit-filter-menu');
    if (!sortDropdown || !toggle || !menu) return;

    toggle.addEventListener('click', (event) => {
        event.stopPropagation();
        const willOpen = menu.classList.contains('hidden');
        closeEducationFilterMenu();
        closeBirthdaySortFilterMenus();
        closeRelationshipFilterMenu();
        toggleNestedFilterMenu('assigned-unit', willOpen);
    });

    sortDropdown.addEventListener('click', (event) => {
        const option = event.target.closest('[data-assigned-unit-filter]');
        if (!option) return;
        event.preventDefault();
        event.stopPropagation();
        currentAssignedUnitFilter = option.dataset.assignedUnitFilter || 'ALL';
        localStorage.setItem('gip_assigned_unit_filter', currentAssignedUnitFilter);
        finishDynamicFilterSelection();
    });
}

function syncHeaderWithFilter() {
    const headerPrefix = document.getElementById('gip-header-prefix');
    const clearBtn = document.getElementById('clear-office-filter-btn');
    if (!headerPrefix) return;

    headerPrefix.textContent = currentOfficeFilter === 'ALL' ? 'ALL BENEFICIARIES' : currentOfficeFilter;

    // Show "Clear All Filter" whenever the view is not in default state.
    const isNonDefault = filterModeEnabled || currentOfficeFilter !== 'ALL' || currentEducationFilter !== 'ALL' || currentBirthdayYearFilter !== 'ALL' || currentBirthdayMonthFilter !== 'ALL' || currentRelationshipFilter !== 'ALL' || currentAssignedUnitFilter !== 'ALL';
    if (clearBtn) {
        clearBtn.classList.toggle('hidden', !isNonDefault);
        clearBtn.classList.toggle('flex', isNonDefault);
    }
}

window.setOfficeFilter = (officeName) => {
    currentOfficeFilter = officeName;
    localStorage.setItem('gip_office_filter', officeName);
    
    // Enable filter mode if it wasn't
    if (!filterModeEnabled) {
        persistFilterMode(true);
        updateFilterUI();
        updateFilterInputsAvailability();
        updateFilterToggleButtonUI();
    }

    syncHeaderWithFilter();
    currentPage = 1;
    renderTable();
    
    // Hide dropdowns
    const dropdown = document.getElementById('office-filter-dropdown');
    const sortDropdown = document.getElementById('sort-dropdown');
    if (dropdown) dropdown.classList.add('hidden');
    if (sortDropdown) sortDropdown.classList.add('hidden');
};

// Clear All Filter: reset every dropdown/filter/sort the user picked and return to default state.
// Default = Filter Mode OFF, All Status, All Years, force-fetched from Supabase and sorted
// Iligan office first → ONGOING/EXPIRED/rest → A-Z by name.
window.clearOfficeFilter = async () => {
    // Reset filter state to defaults
    currentStatusFilter = DEFAULT_STATUS_FILTER;
    currentYearFilter = DEFAULT_YEAR_FILTER;
    currentOfficeFilter = 'ALL';
    currentEducationFilter = 'ALL';
    currentBirthdayYearFilter = 'ALL';
    currentBirthdayMonthFilter = 'ALL';
    currentRelationshipFilter = 'ALL';
    currentAssignedUnitFilter = 'ALL';
    localStorage.setItem('gip_status_filter', currentStatusFilter);
    localStorage.setItem('gip_year_filter', currentYearFilter);
    localStorage.setItem('gip_office_filter', 'ALL');
    localStorage.setItem('gip_education_filter', 'ALL');
    localStorage.setItem('gip_birthday_year_filter', 'ALL');
    localStorage.setItem('gip_birthday_month_filter', 'ALL');
    localStorage.setItem('gip_relationship_filter', 'ALL');
    localStorage.setItem('gip_assigned_unit_filter', 'ALL');

    // Reset sort preference to A-Z so re-enabling Filter Mode starts clean
    localStorage.setItem('gip_sort_preference', 'name_asc');

    // Turn Filter Mode OFF (default mode)
    persistFilterMode(false);
    updateFilterUI();
    updateFilterInputsAvailability();
    updateFilterToggleButtonUI();
    syncHeaderWithFilter();

    // Reset search box
    const searchInput = document.getElementById('table-search');
    if (searchInput) searchInput.value = '';

    // Collapse any open dropdowns
    const officeDropdown = document.getElementById('office-filter-dropdown');
    const sortDropdown = document.getElementById('sort-dropdown');
    const filterDropdown = document.getElementById('filter-dropdown');
    if (officeDropdown) officeDropdown.classList.add('hidden');
    if (sortDropdown) sortDropdown.classList.add('hidden');
    if (filterDropdown) filterDropdown.classList.add('hidden');

    currentPage = 1;
    syncPageToUrl(currentPage);

    // Force a fresh fetch + sort from Supabase, then render
    await loadBeneficiaries(true);
    renderTable();
};

export function initGIPHeader() {
    syncHeaderWithFilter();
}

export function initGIPPage() {
    loadBeneficiaries(); // Load from database
    initGIPHeader();
    initSearch();
    initPhoneVisibilityToggle();
    initTableControlActiveStates();
    initFilterControls();
    initEducationFilter();
    initBirthdaySortFilter();
    initAssignedUnitFilter();
    initRelationshipFilter();
    initOfficeFilter(); // Old sub-dropdown (kept for compatibility)
    initOfficeQuickFilter(); // New standalone quick-filter strip
    initRealtimeSubscription(); // Instant updates from Supabase

    // Wire the Export Logs button
    const exportBtn = document.getElementById('gip-export-logs-btn');
    if (exportBtn) {
        exportBtn.addEventListener('click', () => {
            showLogsExportModal(beneficiaries);
        });
    }

    // Ensure table refreshes immediately after offline queue sync success.
    window.addEventListener('dataSynced', () => {
        loadBeneficiaries(true);
    });
}

/**
 * Initialize Supabase Realtime Subscription
 * Replaces polling with instant event-based updates
 */
function initRealtimeSubscription() {
    if (!isSupabaseMode() || !supabase) return;

    console.log('[Supabase Realtime] Subscribing to beneficiaries...');

    const channel = supabase
        .channel('beneficiaries_changes')
        .on('postgres_changes', { 
            event: '*', 
            schema: 'public', 
            table: 'beneficiaries' 
        }, async (payload) => {
            console.log('[Supabase Realtime] Change detected:', payload.eventType);
            
            // Re-fetch to synchronize the entire list
            await loadBeneficiaries(true); 

            if (payload.eventType === 'INSERT') {
                Swal.fire({
                    toast: true,
                    position: 'top-end',
                    icon: 'success',
                    title: 'New Beneficiary Added',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true
                });
            } else if (payload.eventType === 'UPDATE') {
                if (payload.new.is_archived === true && payload.old.is_archived === false) return;
                Swal.fire({
                    toast: true,
                    position: 'top-end',
                    icon: 'info',
                    title: 'Record Updated',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true
                });
            }
        })
        .subscribe((status) => {
            if (status === 'SUBSCRIBED') {
                console.log('[Supabase Realtime] Listening for live changes! ⚡');
            }
        });
}

function updatePhoneVisibilityToggleUI() {
    const toggle = document.getElementById('phone-visibility-toggle');
    const onLabel = document.getElementById('phone-visibility-on');
    const offLabel = document.getElementById('phone-visibility-off');
    if (!toggle || !onLabel || !offLabel) return;

    toggle.setAttribute('aria-checked', String(showPhoneNumbers));
    toggle.setAttribute('aria-label', showPhoneNumbers ? 'Hide beneficiary phone numbers' : 'Show beneficiary phone numbers');
    toggle.className = showPhoneNumbers
        ? 'inline-flex h-10 w-full items-center overflow-hidden rounded-full border border-emerald-400 bg-emerald-50 p-1 text-xs font-black uppercase tracking-wider shadow-inner transition-colors dark:border-emerald-700 dark:bg-emerald-950/40 cursor-pointer'
        : 'inline-flex h-10 w-full items-center overflow-hidden rounded-full border border-red-400 bg-red-50 p-1 text-xs font-black uppercase tracking-wider shadow-inner transition-colors dark:border-red-700 dark:bg-red-950/40 cursor-pointer';
    onLabel.className = showPhoneNumbers
        ? 'flex-1 rounded-full bg-emerald-600 px-4 py-2 text-center text-white shadow-sm transition-colors'
        : 'flex-1 rounded-full px-4 py-2 text-center text-emerald-700 transition-colors dark:text-emerald-300';
    offLabel.className = showPhoneNumbers
        ? 'flex-1 rounded-full px-4 py-2 text-center text-red-700 transition-colors dark:text-red-300'
        : 'flex-1 rounded-full bg-red-600 px-4 py-2 text-center text-white shadow-sm transition-colors';
}

function initPhoneVisibilityToggle() {
    const toggle = document.getElementById('phone-visibility-toggle');
    if (!toggle) return;

    updatePhoneVisibilityToggleUI();
    toggle.addEventListener('click', () => {
        showPhoneNumbers = !showPhoneNumbers;
        localStorage.setItem(PHONE_VISIBILITY_STORAGE_KEY, showPhoneNumbers ? 'ON' : 'OFF');
        updatePhoneVisibilityToggleUI();
        renderTable();
    });
}
function setActiveTableControl(activeButtonId = null) {
    const controls = {
        'office-quick-filter-btn': ['bg-violet-100', 'text-violet-700', 'border-violet-300', 'ring-2', 'ring-violet-200', 'dark:bg-violet-900/40', 'dark:text-violet-300'],
        'filter-dropdown-button': ['bg-blue-100', 'text-royal-blue', 'border-blue-300', 'ring-2', 'ring-blue-200', 'dark:bg-blue-900/40', 'dark:text-blue-300'],
        'sort-dropdown-button': ['bg-orange-100', 'text-orange-700', 'border-orange-300', 'ring-2', 'ring-orange-200', 'dark:bg-orange-900/40', 'dark:text-orange-300']
    };

    Object.entries(controls).forEach(([buttonId, activeClasses]) => {
        const button = document.getElementById(buttonId);
        if (!button) return;
        const isActive = buttonId === activeButtonId;
        button.setAttribute('aria-pressed', String(isActive));
        button.classList.remove(...activeClasses);
        if (isActive) button.classList.add(...activeClasses);
    });
}

function initTableControlActiveStates() {
    const controlIds = ['office-quick-filter-btn', 'filter-dropdown-button', 'sort-dropdown-button'];
    controlIds.forEach((buttonId) => {
        const button = document.getElementById(buttonId);
        if (!button) return;
        button.addEventListener('click', () => {
            const nextActiveId = button.getAttribute('aria-pressed') === 'true' ? null : buttonId;
            setActiveTableControl(nextActiveId);
        });
    });

    document.addEventListener('click', (event) => {
        const interactiveRegion = event.target.closest('#office-quick-filter-btn, #filter-dropdown-button, #filter-dropdown, #sort-dropdown-button, #sort-dropdown');
        if (!interactiveRegion) setActiveTableControl(null);
    });
}
function initFilterControls() {
    const applyFiltersButton = document.getElementById('apply-filters-button');
    if (!applyFiltersButton) return;
    updateFilterUI();
    updateFilterInputsAvailability();
    updateFilterToggleButtonUI();
    applyFiltersButton.addEventListener('click', toggleFilterMode);

    const statusSelect = document.getElementById('filter-status');
    const yearSelect = document.getElementById('filter-year');
    if (statusSelect) statusSelect.addEventListener('change', applyFilters);
    if (yearSelect) yearSelect.addEventListener('change', applyFilters);
}


export function renderTable(dataToRender = null) {
    if (!dataToRender) {
        dataToRender = getFilteredBeneficiaries();
    }
    const tbody = document.getElementById('beneficiary-table-body');
    if (!tbody) return;
    populateEducationFilterOptions();
    populateBirthdayYearFilterOptions();
    populateBirthdayMonthFilterOptions();
    populateRelationshipFilterOptions();
    populateAssignedUnitFilterOptions();
    renderEducationLevelSummary(dataToRender);

    // Update global reference for pagination
    filteredDataGlobal = dataToRender;

    if (dataToRender.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="8" class="px-6 py-10 text-center text-gray-400 font-medium">
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
    
    // Keep requested page during initial hydration so URL/page won't collapse early.
    const renderPage = Math.min(Math.max(currentPage, 1), totalPages || 1);
    const wasAutoAdjusted = renderPage !== currentPage;
    if (!(isInitialDataHydrating && wasAutoAdjusted && currentPage > 1)) {
        currentPage = renderPage;
        syncPageToUrl(currentPage);
    }

    const startIndex = (renderPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const pagedData = dataToRender.slice(startIndex, endIndex);

    const searchInput = document.getElementById('table-search');
    const query = searchInput ? searchInput.value.toLowerCase().trim() : "";
    const isSearchingContact = query !== "" && /\d/.test(query);
    const shouldShowContact = showPhoneNumbers || isSearchingContact;

    tbody.innerHTML = pagedData.map(data => `
        <tr class="bg-blue-50 border-b border-blue-100 hover:bg-blue-100 transition-colors group cursor-pointer"
            onclick='viewBeneficiary(${JSON.stringify(data)})'>
            <th scope="row" class="w-[32%] px-2 py-3 font-bold text-royal-blue text-start md:w-[22%] lg:w-[18%] lg:px-4">
                <div class="flex min-w-0 flex-nowrap items-center justify-start gap-1.5 whitespace-nowrap">
                    <span class="shrink-0 whitespace-nowrap text-xs font-black leading-tight sm:text-sm" title="${data.name}">${data.name}</span>
                    ${shouldShowContact && data.contact ? `
                        <span class="inline-flex shrink-0 items-center gap-1 whitespace-nowrap rounded bg-royal-blue px-2 py-0.5 text-[0.5625rem] font-black tabular-nums text-white shadow-sm sm:text-[0.625rem]" title="Contact No: ${data.contact}">
                            <svg class="w-2.5 h-2.5 text-white shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <span class="whitespace-nowrap">${data.contact}</span>
                        </span>
                    ` : ''}
                </div>
            </th>
            <td class="hidden w-[24%] px-2 py-3 align-top text-center lg:table-cell lg:px-4">
                <span class="block w-full whitespace-normal break-words text-[0.6875rem] font-semibold leading-relaxed text-gray-700 dark:text-gray-300">
                    ${data.address || 'N/A'}
                </span>
            </td>
            <td class="w-[12%] px-1 py-3 whitespace-nowrap text-center md:w-[8%] lg:w-[7%] lg:px-2">
                <span class="inline-flex min-w-8 items-center justify-center rounded-full bg-violet-100 px-2.5 py-1 text-xs font-black text-violet-700 dark:bg-violet-900/40 dark:text-violet-300">
                    ${data.age !== null && data.age !== undefined && data.age !== '' ? data.age : 'N/A'}
                </span>
            </td>
            <td class="w-[18%] px-1 py-3 text-center md:w-[12%] lg:w-[10%] lg:px-2">
                <span class="${getGenderClass(data.gender)} inline-flex max-w-full items-center justify-center rounded-full px-2 py-1 text-[0.5625rem] font-black uppercase sm:text-[0.625rem]">
                    ${data.gender || 'N/A'}
                </span>
            </td>
            <td class="hidden w-[15%] px-2 py-3 whitespace-nowrap text-center text-xs md:table-cell lg:w-[10%] lg:px-4">
                <span class="${(data.startDateFormatted || data.startDate) ? 'font-black text-royal-blue uppercase tracking-tight' : 'font-bold text-gray-300 italic'}">${translateDateToShortMonth(data.startDateFormatted || data.startDate)}</span>
            </td>
            <td class="hidden w-[15%] px-2 py-3 whitespace-nowrap text-center text-xs md:table-cell lg:w-[10%] lg:px-4">
                <span class="${(data.endDateFormatted || data.endDate) ? 'font-black text-philippine-red uppercase tracking-tight' : 'font-bold text-gray-300 italic'}">${translateDateToShortMonth(data.endDateFormatted || data.endDate)}</span>
            </td>
            <td class="w-[24%] px-1 py-3 text-center md:w-[18%] lg:w-[12%] lg:px-2">
                <span class="${getStatusClass(data.remarks)} inline-flex max-w-full px-1.5 py-0.5 text-[0.5625rem] font-bold uppercase sm:px-2.5 sm:text-xs rounded border">
                    ${data.remarks || 'N/A'}
                </span>
            </td>
            <td class="w-[14%] px-1 py-3 text-center md:w-[10%] lg:w-[9%] lg:px-2">
                <div class="flex flex-col items-center justify-center gap-0.5 sm:flex-row sm:gap-1 lg:gap-2">
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
                </div>
            </td>
        </tr>
    `).join('');

    renderPagination(totalItems, totalPages, renderPage);
    
    // Re-initialize Flowbite components after DOM update
    reinitFlowbite();
}

function renderPagination(totalItems, totalPages, activePage = currentPage) {
    const container = document.getElementById('pagination-controls');
    if (!container) return;

    if (totalItems <= itemsPerPage) {
        container.innerHTML = `
            <span class="text-xs font-bold text-gray-500">Showing all ${totalItems} results</span>
            <div></div>
        `;
        return;
    }

    const startIdx = (activePage - 1) * itemsPerPage + 1;
    const endIdx = Math.min(activePage * itemsPerPage, totalItems);

    container.innerHTML = `
        <span class="text-xs font-bold text-gray-500 shrink-0">
            Showing <span class="text-royal-blue">${startIdx}–${endIdx}</span> of <span class="text-royal-blue">${totalItems}</span>
        </span>
        <div class="flex items-center gap-1 flex-wrap justify-end">
            <!-- Previous -->
            <button onclick="changePage(${activePage - 1})" ${activePage === 1 ? 'disabled' : ''}
                class="p-1.5 rounded-lg border border-gray-200 bg-white text-gray-600 hover:text-royal-blue hover:border-royal-blue/30 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer shrink-0">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7"/></svg>
            </button>

            ${generatePageNumbers(activePage, totalPages)}

            <!-- Next -->
            <button onclick="changePage(${activePage + 1})" ${activePage === totalPages ? 'disabled' : ''}
                class="p-1.5 rounded-lg border border-gray-200 bg-white text-gray-600 hover:text-royal-blue hover:border-royal-blue/30 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer shrink-0">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"/></svg>
            </button>

            <!-- Go To -->
            <div class="flex items-center gap-1 ml-1 shrink-0">
                <span class="text-[0.625rem] sm:text-xs font-bold text-gray-400 hidden sm:inline">Go to</span>
                <input type="number" id="goto-page-input" min="1" max="${totalPages}" placeholder="—"
                    class="w-14 h-8 text-center text-xs font-black rounded-lg border-2 border-gray-300 bg-gray-50 text-gray-800 focus:border-royal-blue focus:ring-2 focus:ring-royal-blue/20 outline-none transition-all shadow-sm"
                    aria-label="Go to page"
                    onkeydown="if(event.key==='Enter'){const v=parseInt(this.value);if(v){window.changePage(Math.min(${totalPages},Math.max(1,v)));this.value='';this.blur();}}"
                    >
                <button
                    onclick="const inp=document.getElementById('goto-page-input');const v=parseInt(inp.value);if(v){window.changePage(Math.min(${totalPages},Math.max(1,v)));inp.value='';inp.blur();}"
                    class="h-8 px-3 text-xs font-black bg-royal-blue text-white rounded-lg hover:bg-blue-700 active:scale-95 transition-all cursor-pointer shrink-0">
                    Go
                </button>
            </div>
        </div>
    `;
}

function generatePageNumbers(current, total) {
    // Sliding window of 4 — no pinned last page, no ellipsis.
    const WINDOW = 4;
    const count = Math.min(WINDOW, total);

    let start = Math.max(1, current - 1);
    let end = start + count - 1;
    if (end > total) {
        end = total;
        start = Math.max(1, end - count + 1);
    }

    let html = '';
    for (let p = start; p <= end; p++) {
        html += `
            <button onclick="changePage(${p})"
                class="min-w-[32px] h-8 flex items-center justify-center rounded-lg text-xs font-black transition-all cursor-pointer
                ${p === current ? 'bg-royal-blue text-white shadow-md shadow-royal-blue/20' : 'bg-white text-gray-600 hover:bg-royal-blue/10 hover:text-royal-blue border border-gray-100'}">
                ${p}
            </button>`;
    }
    return html;
}

window.changePage = (page) => {
    currentPage = page;
    syncPageToUrl(currentPage);
    renderTable(filteredDataGlobal);
};

function getOfficeClass(office) {
    if (!office || office === 'N/A') return 'bg-gray-100 text-gray-700 border border-gray-200 dark:!text-white';
    const u = office.toUpperCase();

    if (u.includes('LGU')) {
        return /ILIGAN/i.test(office)
            ? 'bg-yellow-400 text-white border border-yellow-500'
            : 'bg-yellow-100 text-yellow-700 border border-yellow-200 dark:!text-white';
    }
    if (u.includes('DOLE'))   return 'bg-blue-100 text-blue-700 border border-blue-200 dark:!text-white';
    if (u.includes('DEPED') || u.includes('DEPED')) return 'bg-orange-100 text-orange-700 border border-orange-200 dark:!text-white';
    if (u.includes('DICT'))   return 'bg-cyan-100 text-cyan-700 border border-cyan-200 dark:!text-white';
    if (u.includes('DOH'))    return 'bg-red-100 text-red-700 border border-red-200 dark:!text-white';
    if (u.includes('DSWD'))   return 'bg-pink-100 text-pink-700 border border-pink-200 dark:!text-white';
    if (u.includes('DTI'))    return 'bg-green-100 text-green-700 border border-green-200 dark:!text-white';
    if (u.includes('DPWH'))   return 'bg-stone-100 text-stone-700 border border-stone-200 dark:!text-white';
    if (u.includes('DILG'))   return 'bg-indigo-100 text-indigo-700 border border-indigo-200 dark:!text-white';
    if (u.includes('DOST'))   return 'bg-violet-100 text-violet-700 border border-violet-200 dark:!text-white';
    if (u.includes('DENR'))   return 'bg-emerald-100 text-emerald-700 border border-emerald-200 dark:!text-white';
    if (u.includes('CHED'))   return 'bg-sky-100 text-sky-700 border border-sky-200 dark:!text-white';
    if (u.includes('TESDA'))  return 'bg-teal-100 text-teal-700 border border-teal-200 dark:!text-white';
    if (u.includes('DOJ'))    return 'bg-slate-100 text-slate-700 border border-slate-200 dark:!text-white';
    if (u.includes('DOT') || u.includes('TOURISM')) return 'bg-fuchsia-100 text-fuchsia-700 border border-fuchsia-200 dark:!text-white';
    if (u.includes('DA') && !u.includes('DPWH') && !u.includes('DILG')) return 'bg-lime-100 text-lime-700 border border-lime-200 dark:!text-white';
    if (u.includes('PRC'))    return 'bg-rose-100 text-rose-700 border border-rose-200 dark:!text-white';
    if (u.includes('SSS'))    return 'bg-amber-100 text-amber-700 border border-amber-200 dark:!text-white';
    if (u.includes('GSIS'))   return 'bg-purple-100 text-purple-700 border border-purple-200 dark:!text-white';
    if (u.includes('PHIC') || u.includes('PHILHEALTH')) return 'bg-blue-200 text-blue-800 border border-blue-300 dark:!text-white';
    if (u.includes('NBI'))    return 'bg-zinc-100 text-zinc-700 border border-zinc-200 dark:!text-white';

    // Hash-based fallback — any new office gets a consistent unique color.
    const palette = [
        'bg-purple-100 text-purple-700 border border-purple-200',
        'bg-rose-100 text-rose-700 border border-rose-200',
        'bg-amber-100 text-amber-700 border border-amber-200',
        'bg-teal-100 text-teal-700 border border-teal-200',
        'bg-indigo-100 text-indigo-700 border border-indigo-200',
        'bg-lime-100 text-lime-700 border border-lime-200',
        'bg-sky-100 text-sky-700 border border-sky-200',
        'bg-fuchsia-100 text-fuchsia-700 border border-fuchsia-200',
        'bg-emerald-100 text-emerald-700 border border-emerald-200',
        'bg-orange-100 text-orange-700 border border-orange-200',
        'bg-pink-100 text-pink-700 border border-pink-200',
        'bg-green-100 text-green-700 border border-green-200',
        'bg-violet-100 text-violet-700 border border-violet-200',
        'bg-cyan-100 text-cyan-700 border border-cyan-200',
        'bg-red-100 text-red-700 border border-red-200',
    ];
    let hash = 0;
    for (let i = 0; i < office.length; i++) hash = (hash * 31 + office.charCodeAt(i)) >>> 0;
    return palette[hash % palette.length] + ' dark:!text-white';
}

function getGenderClass(gender) {
    const normalized = String(gender || '').trim().toUpperCase();
    if (normalized === 'MALE') return 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300';
    if (normalized === 'FEMALE') return 'bg-pink-100 text-pink-700 dark:bg-pink-900/40 dark:text-pink-300';
    return 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-200';
}

function getEducationIcon(education) {
    const value = String(education || '').toUpperCase();
    if (/INFORMATION|COMPUTER|TECHNOLOGY|\bIT\b/.test(value)) {
        return '<svg class="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 4h14a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z"/></svg>';
    }
    if (/ENGINEER|ARCHITECT/.test(value)) {
        return '<svg class="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.7 6.3a4 4 0 01-5 5L4 17v3h3l5.7-5.7a4 4 0 005-5l-2.4 2.4-3-3 2.4-2.4z"/></svg>';
    }
    if (/EDUCATION|TEACHER/.test(value)) {
        return '<svg class="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.25v13m0-13C10.8 5.5 9.25 5 7.5 5S4.2 5.5 3 6.25v13C4.2 18.5 5.75 18 7.5 18s3.3.5 4.5 1.25m0-13C13.2 5.5 14.75 5 16.5 5s3.3.5 4.5 1.25v13C19.8 18.5 18.25 18 16.5 18s-3.3.5-4.5 1.25"/></svg>';
    }
    if (/BIOLOGY|AGRICULTURE|SCIENCE/.test(value)) {
        return '<svg class="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21V10m0 0C8 10 5 7 5 3c4 0 7 3 7 7zm0 4c4 0 7-3 7-7-4 0-7 3-7 7z"/></svg>';
    }
    return '<svg class="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.2-3.4a12 12 0 01.6 6.5A12 12 0 0012 20a12 12 0 00-6.8-2.9 12 12 0 01.6-6.5L12 14z"/></svg>';
}

function renderEducationLevelSummary(data) {
    const summary = document.getElementById('gip-education-summary');
    const countOutput = document.getElementById('gip-education-level-count');
    if (!summary || !countOutput) return;

    const levels = [...new Set((data || [])
        .map((beneficiary) => String(beneficiary.education || '').trim())
        .filter(Boolean))]
        .sort((a, b) => a.localeCompare(b));

    countOutput.textContent = levels.length.toLocaleString();
    summary.title = levels.length ? levels.join(', ') : 'No educational level recorded';
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

function closeDataDropdowns() {
    ['sort-dropdown', 'filter-dropdown'].forEach((id) => {
        const dropdown = document.getElementById(id);
        if (dropdown) dropdown.classList.add('hidden');
    });
    closeEducationFilterMenu();
    closeBirthdaySortFilterMenus();
    closeRelationshipFilterMenu();
    closeAssignedUnitFilterMenu();
}

export function sortData(criteria, saveToStorage = true) {
    if (!filterModeEnabled) {
        if (saveToStorage) {
            localStorage.setItem('gip_sort_preference', criteria);
            currentPage = 1;
            syncPageToUrl(currentPage);
        }
        renderTable(sortDatasetByCriteria(getFilteredBeneficiaries(), criteria));

        closeDataDropdowns();

        return;
    }

    if (saveToStorage) {
        localStorage.setItem('gip_sort_preference', criteria);
        currentPage = 1;
        syncPageToUrl(currentPage);
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
        case 'birthday_month':
            beneficiaries.sort(compareBirthdayMonth);
            break;
        case 'relationship':
            beneficiaries.sort(compareRelationshipToAssured);
            break;
        case 'work':
            beneficiaries.sort((a, b) => (a.designation || '').localeCompare(b.designation || ''));
            break;
        case 'address':
            beneficiaries.sort((a, b) => (a.address || '').localeCompare(b.address || ''));
            break;
    }

    renderTable();

    closeDataDropdowns();

}

export async function addBeneficiary(data, awaitRemoteSync = false) {
    // ── STEP 1: Capitalize fields ──────────────────────────────────────────────
    const capitalizedData = { ...data };
    const fieldsToCapitalize = ['name', 'address', 'education', 'designation', 'designatedBeneficiary', 'relationshipToAssured'];
    fieldsToCapitalize.forEach(field => {
        if (capitalizedData[field] && typeof capitalizedData[field] === 'string') {
            capitalizedData[field] = capitalizedData[field].toUpperCase().trim();
        }
    });

    const isTempId = (val) => typeof val === 'string' && val.startsWith('temp_');
    const hasRealId = Boolean(capitalizedData.id) && !isTempId(capitalizedData.id);
    const method = hasRealId ? 'PUT' : 'POST';

    // Edit drawers require confirmed persistence before reporting success.
    if (awaitRemoteSync) {
        const remoteResult = await apiRequest('api/beneficiaries.php', {
            method,
            body: JSON.stringify(capitalizedData)
        });
        if (!remoteResult.success || remoteResult.data?.success !== true) {
            const message = remoteResult.data?.error || remoteResult.error || 'The beneficiary update was not saved.';
            Swal.fire({ icon: 'error', title: 'Update Failed', text: message });
            return false;
        }
    }

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

    // Keep add/offline operations queued, but do not duplicate a confirmed edit request.
    if (!awaitRemoteSync) {
        try {
            // For POST, keep temp id locally but do NOT let it be treated as gip_id server-side.
            // `_tempId` will be used by the sync worker to replace the local record once the server returns the real ROX id.
            await enqueueSync(method, 'api/beneficiaries.php', capitalizedData);
            processQueue();
        } catch (e) {
            console.error('[Offline-First] Failed to enqueue sync:', e);
        }
    }

    return true;
}


export async function archiveRecord(id) {
    // Show Modern Confirmation Modal
    const result = await Swal.fire({
        title: '<span class="text-xl font-black text-heading uppercase tracking-tight">Confirm Archive</span>',
        html: `
            <div class="py-4">
                <p class="text-sm font-medium text-gray-500">Are you sure you want to archive this record?</p>
                <p class="text-[0.625rem] font-black text-philippine-red mt-1 uppercase tracking-widest">ID: ${id}</p>
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
        const result = await apiPatch('api/beneficiaries.php', {
            id: id,
            action: 'archive'
        });
        
        if (result.success && result.data?.success) {
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

function initSearch() {
    const searchInput = document.getElementById('table-search');
    const clearBtn = document.getElementById('clear-search-btn');
    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
        currentPage = 1;
        syncPageToUrl(currentPage);
        renderTable();
        if (clearBtn) {
            clearBtn.classList.toggle('hidden', searchInput.value.length === 0);
        }
    });

    if (clearBtn) {
        clearBtn.addEventListener('click', () => {
            searchInput.value = '';
            currentPage = 1;
            syncPageToUrl(currentPage);
            renderTable();
            clearBtn.classList.add('hidden');
            searchInput.focus();
        });
    }

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
window.applyFilters = applyFilters;
