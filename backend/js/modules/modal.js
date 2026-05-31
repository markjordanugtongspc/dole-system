import { getBasePath, isSupabaseMode } from './auth.js';
import { supabase } from './supabase-client.js';
import { isDarkMode } from './darkmode.js';
import { apiGet } from './ajax-manager.js';
import Swal from 'sweetalert2';
import { BulkApp } from './bulk_tool.js';
import { showBeneficiaryDrawer } from './drawer.js';
import { showEditBeneficiaryDrawer } from './edit_drawer.js';

export function initModalHandler() {
    // Expose the functions to the global window object
    window.showAddDataModal = showAddDataModal;
    /**
     * SHARED UTILITIES
     */
    window.__maskDate = function(val) {
        let v = val.replace(/\D/g,'').slice(0, 8);
        if (v.length > 2 && v.length <= 4) v = v.slice(0,2) + '/' + v.slice(2);
        else if (v.length > 4) v = v.slice(0,2) + '/' + v.slice(2,4) + '/' + v.slice(4);
        return v;
    };

    window.__parseFormattedDate = function(str) {
        if (!str) return null;
        const parts = str.split('/');
        if (parts.length === 3) {
            const m = parseInt(parts[0]) - 1;
            const d = parseInt(parts[1]);
            const y = parseInt(parts[2]);
            if (y > 1000 && m >= 0 && m < 12 && d > 0 && d <= 31) {
                return new Date(y, m, d);
            }
        }
        return null;
    };

    window.calculateAge = function(birthday) {
        if (!birthday) return '';
        const birthDate = (birthday instanceof Date) ? birthday : new Date(birthday);
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) age--;
        return age >= 0 ? age : 0;
    };

    window.viewBeneficiary = async function (data, page = 0) {
        const beneficiaryId = data?.id || data?.gip_id || null;
        if (!beneficiaryId) return;

        // If caller passed partial payload (e.g. only {id}), hydrate from API first.
        const hasCoreFields = Boolean(data?.name && data?.office && data?.remarks);
        let beneficiaryData = { ...data, id: beneficiaryId };
        if (!hasCoreFields) {
            const infoRes = await apiGet(`api/beneficiaries.php?id=${encodeURIComponent(beneficiaryId)}`);
            if (infoRes.success && infoRes.data?.success && infoRes.data?.beneficiary) {
                beneficiaryData = { ...infoRes.data.beneficiary, ...beneficiaryData, id: beneficiaryId };
            }
        }

        const cacheKey = `logs_cache_${beneficiaryId}`;

        // STEP 1: Open drawer IMMEDIATELY — use cache if available, else empty logs
        const cachedLogs = (window.__doleDB?.getSecureCache)
            ? await window.__doleDB.getSecureCache(cacheKey)
            : null;
        const hadCache = !!cachedLogs;

        beneficiaryData.arLogs = cachedLogs?.arLogs || [];
        beneficiaryData.dtrLogs = cachedLogs?.dtrLogs || [];
        beneficiaryData.docs = cachedLogs?.docs || [];
        showBeneficiaryDrawer(beneficiaryData, page);

        // STEP 2: Background network fetch (does not block drawer open)
        try {
            // [HYBRID-BRIDGE] Use authorized PHP API for logs/docs to bypass RLS
            const [arRes, dtrRes, docRes, absRes] = await Promise.all([
                apiGet(`api/logs.php?type=ar&gip_id=${encodeURIComponent(beneficiaryId)}`),
                apiGet(`api/logs.php?type=dtr&gip_id=${encodeURIComponent(beneficiaryId)}`),
                apiGet(`api/logs.php?type=docs&gip_id=${encodeURIComponent(beneficiaryId)}`),
                apiGet(`api/logs.php?type=absorption&gip_id=${encodeURIComponent(beneficiaryId)}`)
            ]);

            const fetchedArLogs = (arRes.success && arRes.data?.success) ? arRes.data.logs : [];
            const fetchedDtrLogs = (dtrRes.success && dtrRes.data?.success) ? dtrRes.data.logs : [];
            const fetchedDocs = (docRes.success && docRes.data?.success) ? docRes.data.logs : [];
            const absorptionLogs = (absRes.success && absRes.data?.success) ? absRes.data.logs : [];

            if (absorptionLogs.length > 0) {
                const latest = absorptionLogs[0];
                beneficiaryData.absorbDate = latest.absorption_datetime;
                beneficiaryData.absorb_where = latest.where || latest.absorb_where;
                beneficiaryData.absorb_position = latest.position || latest.absorb_position;
                beneficiaryData.absorb_agency = latest.agency || latest.absorb_agency;
            }

            // Save fresh data to cache
            if (window.__doleDB?.setSecureCache) {
                await window.__doleDB.setSecureCache(cacheKey, {
                    arLogs: fetchedArLogs,
                    dtrLogs: fetchedDtrLogs,
                    docs: fetchedDocs
                });
            }

            // STEP 3: Re-render when the fetched data differs from what is currently displayed.
            // Covers first visit (no cache) AND post-mutation refresh (cache now stale).
            // _noAnimation does an in-place innerHTML swap, so the update is instant and smooth.
            const displayed = JSON.stringify({
                ar: cachedLogs?.arLogs || [],
                dtr: cachedLogs?.dtrLogs || [],
                docs: cachedLogs?.docs || []
            });
            const fresh = JSON.stringify({ ar: fetchedArLogs, dtr: fetchedDtrLogs, docs: fetchedDocs });
            if (!hadCache || displayed !== fresh) {
                const drawerContainer = document.getElementById('beneficiary-drawer-container');
                if (drawerContainer && drawerContainer.dataset.beneficiaryId === String(beneficiaryId)) {
                    beneficiaryData.arLogs = fetchedArLogs;
                    beneficiaryData.dtrLogs = fetchedDtrLogs;
                    beneficiaryData.docs = fetchedDocs;
                    showBeneficiaryDrawer({ ...beneficiaryData, _noAnimation: true }, page);
                }
            }
        } catch (error) {
            console.error('Error fetching logs/docs:', error);
        }
    };
    window.showAddDataModal = function (data) {
        showAddDataModal(data);
    };
    window.editBeneficiary = function (data) {
        showEditBeneficiaryDrawer(data);
    };
    window.showExportConfigModal = function (callback) {
        showExportConfigModal(callback);
    };
    window.showProfileModal = function () {
        showProfileModal();
    };
}

/**
 * Show User Profile Modal
 */
export async function showProfileModal() {
    try {
        if (isSupabaseMode() && supabase) {
            let uid = '';
            try { const u = JSON.parse(localStorage.getItem('user')); if (u && u.id) uid = u.id; } catch(e) {}
            
            if (!uid) throw new Error('User not logged in');

            const { data, error } = await supabase
                .from('users')
                .select('*')
                .eq('id', uid)
                .single();
            
            if (error) throw error;
            renderProfileModal(data);
        } else {
            // Pass user_id for Vercel serverless (no PHP sessions)
            let uid = '';
            try { const u = JSON.parse(localStorage.getItem('user')); if (u && u.id) uid = `?user_id=${u.id}`; } catch(e) {}
            const response = await fetch(`${getBasePath()}api/profile.php${uid}`);
            const result = await response.json();

            if (result.success) {
                const profile = result.profile;
                renderProfileModal(profile);
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: result.error || 'Failed to load profile'
                });
            }
        }
    } catch (error) {
        console.error('Error fetching profile:', error);
    }
}

function renderProfileModal(profile) {
    const avatarUrl = profile.profile_picture_path ? `${getBasePath()}${profile.profile_picture_path}` : null;
    const initials = profile.full_name ? profile.full_name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase() : 'US';

    const modalHtml = `
        <div class="text-left font-montserrat p-1 overflow-visible">
            <div class="flex items-center gap-3 mb-6">
                <div class="w-12 h-12 bg-royal-blue/10 rounded-2xl flex items-center justify-center">
                    <svg class="w-6 h-6 text-royal-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
                </div>
                <div>
                    <h2 class="text-xl font-black text-heading leading-tight italic">User Profile</h2>
                    <p class="text-[0.625rem] font-bold text-gray-400 uppercase tracking-widest">Manage your personal information</p>
                </div>
            </div>

            <form id="profile-edit-form" class="space-y-6">
                <div class="flex flex-col items-center mb-6">
                    <div class="relative group">
                        <div id="profile-avatar-preview" class="w-24 h-24 rounded-full border-4 border-royal-blue/10 overflow-hidden bg-gray-100 flex items-center justify-center text-royal-blue text-2xl font-black shadow-lg">
                            ${avatarUrl ? `<img src="${avatarUrl}" class="w-full h-full object-cover" />` : initials}
                        </div>
                        <label for="profile-pic-input" class="absolute bottom-0 right-0 w-8 h-8 bg-royal-blue text-white rounded-full flex items-center justify-center cursor-pointer shadow-md hover:scale-110 transition-transform border-2 border-white">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                        </label>
                        <input type="file" id="profile-pic-input" name="profile_pic" class="hidden" accept="image/*">
                    </div>
                    <p class="text-[0.5625rem] font-bold text-gray-400 uppercase mt-2 tracking-widest">Click icon to change avatar</p>
                </div>

                <div class="bg-gray-50/50 rounded-2xl p-4 border border-gray-100 space-y-4">
                    <div class="space-y-1">
                        <label class="text-[0.5625rem] font-black text-gray-400 uppercase tracking-widest ml-1">Username</label>
                        <div class="relative">
                            <input type="text" value="${profile.username}" disabled
                                class="w-full bg-gray-100 border border-gray-200 rounded-xl px-4 py-2.5 text-xs font-bold text-gray-400 cursor-not-allowed">
                            <svg class="w-3.5 h-3.5 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
                        </div>
                    </div>

                    <div class="space-y-1">
                        <label class="text-[0.5625rem] font-black text-gray-400 uppercase tracking-widest ml-1">Full Name</label>
                        <input type="text" id="profile-full-name" name="full_name" value="${profile.full_name}" placeholder="Your full name"
                            class="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-xs font-bold text-heading focus:border-royal-blue focus:ring-4 focus:ring-royal-blue/10 outline-none transition-all">
                    </div>

                    <div class="space-y-1">
                        <label class="text-[0.5625rem] font-black text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
                        <input type="email" id="profile-email" name="email" value="${profile.email || ''}" placeholder="yourname@gmail.com"
                            class="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-xs font-bold text-heading focus:border-royal-blue focus:ring-4 focus:ring-royal-blue/10 outline-none transition-all">
                    </div>
                </div>

                <div class="pt-2">
                    <button type="submit" class="w-full bg-royal-blue text-white font-black text-[0.625rem] uppercase tracking-[0.2em] py-3.5 rounded-xl shadow-lg hover:bg-blue-800 hover:-translate-y-0.5 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer">
                        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/></svg>
                        Save Profile Changes
                    </button>
                </div>
            </form>
        </div>
    `;

    Swal.fire({
        html: modalHtml,
        width: '450px',
        showConfirmButton: false,
        showCloseButton: true,
        padding: '1.5rem',
        customClass: {
            container: 'font-montserrat',
            popup: 'rounded-[1.5rem] shadow-2xl overflow-visible ldn-modal-popup',
            closeButton: 'focus:outline-none bg-gray-50 border-none swal2-custom-close cursor-pointer'
        },
        didOpen: (popup) => {
            const form = popup.querySelector('#profile-edit-form');
            const picInput = popup.querySelector('#profile-pic-input');
            const preview = popup.querySelector('#profile-avatar-preview');

            // Preview image
            picInput.addEventListener('change', (e) => {
                const file = e.target.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        preview.innerHTML = `<img src="${e.target.result}" class="w-full h-full object-cover" />`;
                    };
                    reader.readAsDataURL(file);
                }
            });

            form.addEventListener('submit', async (e) => {
                e.preventDefault();

                const formData = new FormData(form);
                // Inject user_id for Vercel serverless
                try { const u = JSON.parse(localStorage.getItem('user')); if (u && u.id) formData.append('user_id', u.id); } catch(e) {}

                try {
                    const saveResponse = await fetch(`${getBasePath()}api/profile.php`, {
                        method: 'POST',
                        body: formData
                    });

                    const saveResult = await saveResponse.json();

                    if (saveResult.success) {
                        // Update UI and LocalStorage
                        if (saveResult.profile) {
                            localStorage.setItem('user', JSON.stringify(saveResult.profile));
                            // Trigger UI update for sidebar and other elements
                            updateUIProfile(saveResult.profile);
                        }

                        Swal.close();
                        Swal.fire({
                            toast: true,
                            position: 'top-end',
                            icon: 'success',
                            title: 'Profile Updated',
                            showConfirmButton: false,
                            timer: 3000,
                            timerProgressBar: true
                        });
                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: 'Update Failed',
                            text: saveResult.error || 'Something went wrong'
                        });
                    }
                } catch (error) {
                    console.error('Error saving profile:', error);
                }
            });
        }
    });
}

/**
 * Update global UI elements with new profile data
 */
export function updateUIProfile(profile) {
    const avatarUrl = profile.profile_picture_path ? `${getBasePath()}${profile.profile_picture_path}` : null;
    const initials = profile.full_name ? profile.full_name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase() : 'US';

    // Update Sidebar elements
    const sidebarNameElements = document.querySelectorAll('.sidebar-user-name');
    const sidebarEmailElements = document.querySelectorAll('.sidebar-user-email');
    const sidebarAvatarElements = document.querySelectorAll('.sidebar-user-avatar');

    sidebarNameElements.forEach(el => el.textContent = profile.full_name);
    sidebarEmailElements.forEach(el => el.textContent = profile.email || 'No email set');
    sidebarAvatarElements.forEach(el => {
        if (avatarUrl) {
            el.innerHTML = `<img src="${avatarUrl}" class="w-full h-full object-cover" />`;
        } else {
            el.textContent = initials;
        }
    });

    // Save to LocalStorage for other pages
    localStorage.setItem('user_full_name', profile.full_name);
    if (avatarUrl) {
        localStorage.setItem('user_avatar', avatarUrl);
    }
}


/**
 * Configuration Modal for Reports
 */
export function showExportConfigModal(callback) {
    const currentFilters = window.getExportFilters ? window.getExportFilters() : {
        office: 'ALL',
        remarks: 'ALL',
        gender: 'ALL',
        ageGroup: 'ALL',
        search: '',
        sort: 'name',
        section: 'ALL',
        columns: ['id', 'name', 'age', 'office', 'position', 'startdate', 'enddate', 'status'],
        preparedBy: localStorage.getItem('ldn_export_prepared') || '',
        approvedBy: localStorage.getItem('ldn_export_approved') || ''
    };

    const modalHtml = `
        <div class="text-left font-montserrat p-1 overflow-visible">
            <div class="flex items-center gap-3 mb-6">
                <div class="w-12 h-12 bg-royal-blue/10 rounded-2xl flex items-center justify-center">
                    <svg class="w-6 h-6 text-royal-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                </div>
                <div>
                    <h2 class="text-xl font-black text-heading leading-tight italic">Report Generator</h2>
                    <p class="text-[0.625rem] font-bold text-gray-400 dark:text-white! uppercase tracking-widest">Configure your data output</p>
                </div>
            </div>

            <form id="export-config-form" class="space-y-6">
                <div class="pt-1">
                    <button type="submit" class="w-full bg-royal-blue text-white font-black text-[0.625rem] uppercase tracking-[0.2em] py-3.5 rounded-xl shadow-lg hover:bg-blue-800 hover:-translate-y-0.5 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer">
                        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                        Apply Profile Configuration
                    </button>
                </div>
                <!-- Main Filter Grid (3 columns on MD) -->
                <div class="bg-gray-50/50 rounded-2xl p-4 border border-gray-100">
                    <div class="flex items-center gap-2 mb-3">
                        <span class="w-1.5 h-4 bg-royal-blue rounded-full"></span>
                        <label class="text-[0.625rem] font-black text-gray-400 dark:text-white! uppercase tracking-widest leading-none">Global Filters</label>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
                        <div class="space-y-1">
                            <label class="text-[0.5625rem] font-black text-gray-500 uppercase tracking-tighter ml-1">Search Beneficiary</label>
                            <div class="relative group">
                                <input type="text" id="export-search" value="${currentFilters.search}" placeholder="Name or ID..." 
                                    class="w-full bg-white border border-gray-200 rounded-xl px-9 py-2.5 text-xs font-bold text-heading focus:border-royal-blue focus:ring-4 focus:ring-royal-blue/10 outline-none transition-all">
                                <svg class="w-3.5 h-3.5 text-gray-400 dark:text-white! absolute left-3 top-1/2 -translate-y-1/2 group-focus-within:text-royal-blue transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                            </div>
                        </div>

                        <div class="space-y-1">
                            <label class="text-[0.5625rem] font-black text-gray-500 uppercase tracking-tighter ml-1">Office Category</label>
                            <div class="relative group">
                                <select id="export-office" class="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-xs font-bold text-heading focus:border-royal-blue outline-none transition-all cursor-pointer appearance-none">
                                    <option value="ALL" ${currentFilters.office === 'ALL' ? 'selected' : ''}>ALL OFFICES</option>
                                    <!-- Options will be populated dynamically -->
                                </select>
                                <svg class="w-3.5 h-3.5 text-gray-400 dark:text-white! absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none group-focus-within:text-royal-blue transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/></svg>
                            </div>
                        </div>

                        <div class="space-y-1">
                            <label class="text-[0.5625rem] font-black text-gray-500 uppercase tracking-tighter ml-1">Sort Data By</label>
                            <div class="relative group">
                                <select id="export-sort" class="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-xs font-bold text-heading focus:border-royal-blue outline-none transition-all cursor-pointer appearance-none">
                                    <option value="name" ${currentFilters.sort === 'name' ? 'selected' : ''}>NAME (A-Z)</option>
                                    <option value="startdate" ${currentFilters.sort === 'startdate' ? 'selected' : ''}>START DATE (NEWEST)</option>
                                    <option value="id" ${currentFilters.sort === 'id' ? 'selected' : ''}>ID NUMBER</option>
                                    <option value="office" ${currentFilters.sort === 'office' ? 'selected' : ''}>OFFICE NAME</option>
                                </select>
                                <svg class="w-3.5 h-3.5 text-gray-400 dark:text-white! absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none group-focus-within:text-royal-blue transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/></svg>
                            </div>
                        </div>
                    </div>

                    <!-- Location + Year row -->
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                        <div class="space-y-1">
                            <label class="text-[0.5625rem] font-black text-gray-500 uppercase tracking-tighter ml-1">Office Location</label>
                            <div class="relative group">
                                <select id="export-location" class="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-xs font-bold text-heading focus:border-royal-blue outline-none transition-all cursor-pointer appearance-none disabled:opacity-40 disabled:cursor-not-allowed" ${currentFilters.office === 'ALL' ? 'disabled' : ''}>
                                    <option value="ALL">ALL LOCATIONS</option>
                                    <!-- Populated when office changes -->
                                </select>
                                <svg class="w-3.5 h-3.5 text-gray-400 dark:text-white! absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/></svg>
                            </div>
                        </div>

                        <div class="space-y-1">
                            <label class="text-[0.5625rem] font-black text-gray-500 uppercase tracking-tighter ml-1">Year (Start Date)</label>
                            <div class="relative group">
                                <select id="export-year" class="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-xs font-bold text-heading focus:border-royal-blue outline-none transition-all cursor-pointer appearance-none">
                                    <option value="ALL" ${(currentFilters.year || 'ALL') === 'ALL' ? 'selected' : ''}>ALL YEARS</option>
                                    <!-- Populated dynamically from data -->
                                </select>
                                <svg class="w-3.5 h-3.5 text-gray-400 dark:text-white! absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/></svg>
                            </div>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 pt-4 border-t border-gray-100/50">
                        <!-- Gender Filter -->
                        <div>
                            <label class="text-[0.5625rem] font-black text-gray-500 uppercase tracking-tighter ml-1 mb-1.5 block">Gender Filter</label>
                            <div class="flex flex-wrap gap-1.5">
                                ${['ALL', 'FEMALE', 'MALE'].map(s => {
        const configs = { 'ALL': 'peer-checked:bg-blue-600', 'FEMALE': 'peer-checked:bg-pink-600', 'MALE': 'peer-checked:bg-indigo-600' };
        return `
                                        <label class="cursor-pointer">
                                            <input type="radio" name="export-gender" value="${s}" ${currentFilters.gender === s ? 'checked' : ''} class="hidden peer">
                                            <span class="px-2.5 py-1.5 rounded-lg border border-gray-100 bg-white text-[0.5625rem] font-black text-gray-400 dark:text-white! uppercase tracking-widest ${configs[s]} peer-checked:text-white peer-checked:border-transparent transition-all block shadow-sm">${s}</span>
                                        </label>
                                    `;
    }).join('')}
                            </div>
                        </div>

                        <!-- Display Section -->
                        <div>
                            <label class="text-[0.5625rem] font-black text-gray-500 uppercase tracking-tighter ml-1 mb-1.5 block">Report Volume Section</label>
                            <div class="flex gap-1.5">
                                ${[
            { id: 'ALL', label: 'All', color: 'peer-checked:bg-emerald-600' },
            { id: 'ACTIVE', label: 'Active', color: 'peer-checked:bg-green-500' },
            { id: 'ARCHIVED', label: 'Archived', color: 'peer-checked:bg-red-600' }
        ].map(s => `
                                    <label class="cursor-pointer flex-1">
                                        <input type="radio" name="export-section" value="${s.id}" ${currentFilters.section === s.id ? 'checked' : ''} class="hidden peer">
                                        <div class="py-1.5 bg-white border border-gray-100 rounded-lg flex items-center justify-center gap-1.5 transition-all ${s.color} peer-checked:text-white peer-checked:border-transparent shadow-sm">
                                            <span class="text-[0.5625rem] font-black uppercase tracking-tight">${s.label}</span>
                                        </div>
                                    </label>
                                `).join('')}
                            </div>
                        </div>

                        <!-- Remarks Filter -->
                        <div>
                            <label class="text-[0.5625rem] font-black text-gray-500 uppercase tracking-tighter ml-1 mb-1.5 block">Remarks Filter</label>
                            <div class="flex flex-wrap gap-1.5">
                                ${['ALL', 'ONGOING', 'EXPIRED', 'RESIGNED', 'ABSORBED'].map(s => {
        const configs = { 'ALL': 'peer-checked:bg-blue-600', 'ONGOING': 'peer-checked:bg-green-500', 'EXPIRED': 'peer-checked:bg-red-600', 'RESIGNED': 'peer-checked:bg-slate-600', 'ABSORBED': 'peer-checked:bg-teal-600' };
        return `
                                        <label class="cursor-pointer">
                                            <input type="radio" name="export-remarks" value="${s}" ${currentFilters.remarks === s ? 'checked' : ''} class="hidden peer">
                                            <span class="px-2.5 py-1.5 rounded-lg border border-gray-100 bg-white text-[0.5625rem] font-black text-gray-400 dark:text-white! uppercase tracking-widest ${configs[s]} peer-checked:text-white peer-checked:border-transparent transition-all block shadow-sm">${s}</span>
                                        </label>
                                    `;
    }).join('')}
                            </div>
                        </div>

                        <!-- Age Filter -->
                        <div>
                            <label class="text-[0.5625rem] font-black text-gray-500 uppercase tracking-tighter ml-1 mb-1.5 block">Age Group Filter</label>
                            <div class="flex flex-wrap gap-1.5">
                                ${['ALL', '18-24', '25-30', '31-40', '41+'].map(s => {
        const configs = { 'ALL': 'peer-checked:bg-blue-600', '18-24': 'peer-checked:bg-emerald-600', '25-30': 'peer-checked:bg-yellow-600', '31-40': 'peer-checked:bg-orange-600', '41+': 'peer-checked:bg-slate-600' };
        return `
                                        <label class="cursor-pointer">
                                            <input type="radio" name="export-age-group" value="${s}" ${currentFilters.ageGroup === s ? 'checked' : ''} class="hidden peer">
                                            <span class="px-2.5 py-1.5 rounded-lg border border-gray-100 bg-white text-[0.5625rem] font-black text-gray-400 dark:text-white! uppercase tracking-widest ${configs[s]} peer-checked:text-white peer-checked:border-transparent transition-all block shadow-sm">${s}</span>
                                        </label>
                                    `;
    }).join('')}
                            </div>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 pt-4 border-t border-gray-100/50">
                        <div class="space-y-1">
                            <label class="text-[0.5625rem] font-black text-gray-500 uppercase tracking-tighter ml-1">Prepared By (Signature)</label>
                            <input type="text" id="export-prepared" value="${currentFilters.preparedBy}" placeholder="Mary Joy Q. Nuñez" class="w-full bg-white border border-gray-200 rounded-xl px-4 py-2 text-xs font-bold text-heading focus:border-royal-blue outline-none transition-all uppercase">
                        </div>
                        <div class="space-y-1">
                            <label class="text-[0.5625rem] font-black text-gray-500 uppercase tracking-tighter ml-1">Approved By (Signature)</label>
                            <input type="text" id="export-approved" value="${currentFilters.approvedBy}" placeholder="Noel B. Orias" class="w-full bg-white border border-gray-200 rounded-xl px-4 py-2 text-xs font-bold text-heading focus:border-royal-blue outline-none transition-all uppercase">
                        </div>
                    </div>
                </div>

                <div class="bg-gray-50/50 rounded-2xl p-4 border border-gray-100 mt-4">
                    <div class="flex items-center gap-2 mb-3">
                        <span class="w-1.5 h-4 bg-golden-yellow rounded-full"></span>
                        <label class="text-[0.625rem] font-black text-gray-400 dark:text-white! uppercase tracking-widest leading-none">Output Column Selection</label>
                    </div>

                    <div class="grid grid-cols-2 md:grid-cols-4 gap-2">
                        ${['ID', 'Name', 'Age', 'Office', 'Position', 'Start Date', 'End Date', 'Status'].map(col => {
            const val = col.toLowerCase().replace(' ', '');
            const isChecked = currentFilters.columns.includes(val);
            const id = `col-switch-${val}`;
            return `
                                <label for="${id}" class="flex items-center gap-2 px-3 py-2 bg-white border border-gray-100 rounded-lg cursor-pointer hover:border-emerald-500/30 transition-all group select-none shadow-sm">
                                    <div class="relative flex items-center shrink-0 scale-90">
                                        <input type="checkbox" id="${id}" name="export-column" value="${val}" ${isChecked ? 'checked' : ''} class="sr-only peer">
                                        <div class="w-8 h-4.5 bg-gray-200 rounded-full peer peer-checked:bg-emerald-500 transition-all after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-3.5 after:w-3.5 after:shadow-sm after:transition-all peer-checked:after:translate-x-3.5"></div>
                                    </div>
                                    <span class="text-[0.5625rem] font-black text-gray-600 uppercase tracking-tight group-hover:text-emerald-600">${col}</span>
                                </label>
                            `;
        }).join('')}
                    </div>
                </div>

            </form>
        </div>
    `;

    Swal.fire({
        html: modalHtml,
        width: '680px',
        showConfirmButton: false,
        showCloseButton: true,
        padding: '1.5rem',
        customClass: {
            container: 'font-montserrat',
            popup: 'rounded-[1.5rem] shadow-2xl overflow-visible ldn-modal-popup',
            closeButton: 'focus:outline-none bg-gray-50 border-none swal2-custom-close cursor-pointer'
        },
        didOpen: (popup) => {
            const form = popup.querySelector('#export-config-form');
            const officeSelect = form.querySelector('#export-office');
            
            const locationSelect = form.querySelector('#export-location');
            const yearSelect = form.querySelector('#export-year');

            // Populate year dropdown from beneficiary data
            if (yearSelect && window.getExportYears) {
                const years = window.getExportYears();
                const currentYear = currentFilters.year || 'ALL';
                let yearHtml = `<option value="ALL" ${currentYear === 'ALL' ? 'selected' : ''}>ALL YEARS</option>`;
                years.forEach(y => {
                    yearHtml += `<option value="${y}" ${currentYear === y ? 'selected' : ''}>${y}</option>`;
                });
                yearSelect.innerHTML = yearHtml;
            }

            // Helper: load locations for a given office id
            const loadLocations = async (officeId, currentLoc) => {
                if (!locationSelect) return;
                if (!officeId) { locationSelect.disabled = true; locationSelect.innerHTML = '<option value="ALL">ALL LOCATIONS</option>'; return; }
                locationSelect.disabled = false;
                locationSelect.innerHTML = '<option value="ALL">Loading...</option>';
                try {
                    const res = await window.apiGet(`api/beneficiaries.php?get_office_locations=1&office_id=${officeId}`);
                    const locs = (res.success && res.data?.success && Array.isArray(res.data.locations)) ? res.data.locations : [];
                    let html = `<option value="ALL">ALL LOCATIONS</option>`;
                    locs.forEach(l => { html += `<option value="${l.location}" ${currentLoc === l.location ? 'selected' : ''}>${l.location}</option>`; });
                    locationSelect.innerHTML = html;
                } catch(e) { locationSelect.innerHTML = '<option value="ALL">ALL LOCATIONS</option>'; }
            };

            if (officeSelect) {
                (async () => {
                    // Use advanced endpoint — returns sorted offices with location counts
                    let officeData = [];
                    try {
                        const res = await window.apiGet('api/beneficiaries.php?get_offices_advanced=1');
                        if (res.success && res.data?.success && Array.isArray(res.data.offices)) {
                            officeData = res.data.offices;
                        }
                    } catch(e) {}
                    const currentOffice = currentFilters.office || 'ALL';
                    let html = `<option value="ALL" ${currentOffice === 'ALL' ? 'selected' : ''}>ALL OFFICES</option>`;
                    officeData.forEach(o => {
                        html += `<option value="${o.office}" data-id="${o.id}" ${currentOffice === o.office ? 'selected' : ''}>${o.office}</option>`;
                    });
                    officeSelect.innerHTML = html;

                    // Load locations for current selection if applicable
                    const selectedOpt = officeSelect.options[officeSelect.selectedIndex];
                    const selectedId = selectedOpt?.dataset?.id;
                    if (selectedId && currentOffice !== 'ALL') {
                        await loadLocations(selectedId, currentFilters.location || 'ALL');
                    }

                    // Re-load locations when office changes
                    officeSelect.addEventListener('change', async () => {
                        const opt = officeSelect.options[officeSelect.selectedIndex];
                        await loadLocations(opt?.dataset?.id, 'ALL');
                    });
                })();
            }

            form.addEventListener('submit', (e) => {
                e.preventDefault();

                const columnCheckboxes = form.querySelectorAll('input[name="export-column"]:checked');
                const selectedColumns = Array.from(columnCheckboxes).map(cb => cb.value);

                const genderRadio = form.querySelector('input[name="export-gender"]:checked');
                const sectionRadio = form.querySelector('input[name="export-section"]:checked');
                const remarksRadio = form.querySelector('input[name="export-remarks"]:checked');
                const ageGroupRadio = form.querySelector('input[name="export-age-group"]:checked');
                const prepared = form.querySelector('#export-prepared').value.trim();
                const approved = form.querySelector('#export-approved').value.trim();

                localStorage.setItem('ldn_export_prepared', prepared);
                localStorage.setItem('ldn_export_approved', approved);

                const filters = {
                    office: form.querySelector('#export-office').value,
                    location: form.querySelector('#export-location')?.value || 'ALL',
                    year: form.querySelector('#export-year')?.value || 'ALL',
                    gender: genderRadio ? genderRadio.value : (currentFilters.gender || 'ALL'),
                    remarks: remarksRadio ? remarksRadio.value : (currentFilters.remarks || 'ALL'),
                    ageGroup: ageGroupRadio ? ageGroupRadio.value : (currentFilters.ageGroup || 'ALL'),
                    search: form.querySelector('#export-search').value.trim().toLowerCase(),
                    sort: form.querySelector('#export-sort').value,
                    section: sectionRadio ? sectionRadio.value : 'ALL',
                    preparedBy: prepared,
                    approvedBy: approved,
                    columns: selectedColumns
                };

                callback(filters);
                Swal.close();

                // Show tiny success feedback safely after modal destruction
                setTimeout(() => {
                    Swal.fire({
                        toast: true,
                        position: 'top-end',
                        icon: 'success',
                        title: 'Generator pattern updated',
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        customClass: {
                            popup: 'rounded-xl shadow-lg border border-emerald-100'
                        }
                    });
                }, 150);
            });
        }
    });
}

export const COMMON_COURSES = [
    { name: "BS Information Technology", icon: `<svg class="w-3.5 h-3.5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>` },
    { name: "BS Computer Science", icon: `<svg class="w-3.5 h-3.5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>` },
    { name: "BS Criminology", icon: `<svg class="w-3.5 h-3.5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>` },
    { name: "BS Business Administration", icon: `<svg class="w-3.5 h-3.5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>` },
    { name: "BS Accountancy", icon: `<svg class="w-3.5 h-3.5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>` },
    { name: "BS Civil Engineering", icon: `<svg class="w-3.5 h-3.5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>` },
    { name: "BS Electrical Engineering", icon: `<svg class="w-3.5 h-3.5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>` },
    { name: "BS Mechanical Engineering", icon: `<svg class="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>` },
    { name: "BS Nursing", icon: `<svg class="w-3.5 h-3.5 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>` },
    { name: "BS Hospitality Management", icon: `<svg class="w-3.5 h-3.5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/></svg>` },
    { name: "Bachelor of Secondary Education", icon: `<svg class="w-3.5 h-3.5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>` },
    { name: "Bachelor of Elementary Education", icon: `<svg class="w-3.5 h-3.5 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>` },
    { name: "BS Psychology", icon: `<svg class="w-3.5 h-3.5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>` },
    { name: "BS Biology", icon: `<svg class="w-3.5 h-3.5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/></svg>` },
    { name: "Senior High School Graduate", icon: `<svg class="w-3.5 h-3.5 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/></svg>` },
    { name: "High School Graduate", icon: `<svg class="w-3.5 h-3.5 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/></svg>` },
    { name: "College Graduate", icon: `<svg class="w-3.5 h-3.5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/></svg>` }
];

export const COMMON_NATURE_OF_WORK = [
    "Administrative Support (Records)",
    "Office Clerk (Finance Section)",
    "Data Encoder (TSSD/LIMS)",
    "Messenger / Liaison Officer",
    "Utility Worker (Maintenance)",
    "Scanning & Digitization Officer",
    "Filing Clerk (Administrative)",
    "Receptionist / Front Desk",
    "IT Technical Support Assist.",
    "Project Monitoring Assist."
];

export const ASSURED_RELATIONSHIPS = [
    "MOTHER",
    "FATHER",
    "STEP MOTHER",
    "STEP FATHER",
    "BROTHER",
    "SISTER",
    "GRANDFATHER",
    "GRANDMOTHER",
    "SPOUSE",
    "SON",
    "DAUGHTER",
    "UNCLE",
    "AUNT",
    "NEPHEW",
    "NIECE",
    "COUSIN",
    "GUARDIAN",
    "RELATIVE"
];

function calculateAge(birthday) {
    if (!birthday) return '';
    const birthDate = new Date(birthday);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age >= 0 ? age : 0;
}

/**
 * Show Add Data Modal Form
 */
export function showAddDataModal(data = null) {
    const isEdit = !!data && !data._isBulk;
    const headerIcon = isEdit ?
        'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z' :
        'M12 4v16m8-8H4';
    const headerTitle = isEdit ? 'Edit Beneficiary' : (data?._isBulk ? `Bulk Adding (${data._bulkCurrent} of ${data._bulkTotal})` : 'New Beneficiary');

    // ── Theme-aware class resolver ──────────────────────────────────────────
    // Check theme ONCE at render-time. Light mode = your original "old code" classes.
    // Dark mode = modern slate-based dark theme. No more dark: prefixes needed.
    const dk = isDarkMode();

    // Reusable theme tokens
    const t = {
        // Borders
        borderBase: dk ? 'border-slate-800' : 'border-gray-100/80',
        borderCard: dk ? 'border-slate-800' : 'border-gray-100',
        borderInput: dk ? 'border-slate-700' : 'border-gray-200',
        borderSugg: dk ? 'border-slate-700' : 'border-gray-200',
        borderDivide: dk ? 'divide-slate-700' : 'divide-gray-50',
        borderSuggHead: dk ? 'border-slate-700' : 'border-gray-100',
        borderStatus: dk ? 'border-slate-700' : 'border-gray-100',
        // Backgrounds
        bgCard: dk ? 'bg-slate-900/40' : 'bg-gray-50/40',
        bgInput: dk ? 'bg-slate-900' : 'bg-white',
        bgAgeInput: dk ? 'bg-slate-800/50' : 'bg-gray-100/80',
        bgSugg: dk ? 'bg-slate-800' : 'bg-white',
        bgStatusWrap: dk ? 'bg-slate-800/50' : 'bg-gray-50',
        bgActionBar: dk ? 'bg-slate-800/80' : 'bg-gray-50',
        bgSaveBtn: dk ? 'bg-green-600 hover:bg-green-700' : 'bg-[#2e7d32] hover:bg-[#1b5e20]',
        bgCancelBtn: dk ? 'bg-red-900/20' : 'bg-[#fef2f2]',
        // Text colors
        textHeading: dk ? 'text-green-500' : 'text-[#2e7d32]',
        textSubtitle: dk ? 'text-slate-500' : 'text-gray-400 dark:!text-white',
        textLabel: dk ? 'text-slate-500' : 'text-gray-400 dark:!text-white',
        textSectionTitle: dk ? 'text-slate-400' : 'text-gray-500',
        textInput: dk ? 'text-white' : 'text-slate-900',
        textAge: dk ? 'text-green-400' : 'text-[#2e7d32]',
        textWorkSuggHead: dk ? 'text-slate-500' : 'text-slate-400',
        textWorkOpt: dk ? 'text-slate-300' : 'text-slate-600',
        textCourseOpt: dk ? 'text-slate-300' : 'text-gray-600',
        textCancel: dk ? 'text-red-400' : 'text-red-700',
        // Focus rings
        focusGreen: dk ? 'focus:ring-green-500/10 focus:border-green-500' : 'focus:ring-[#2e7d32]/10 focus:border-[#2e7d32]',
        focusBlue: dk ? 'focus:ring-blue-500/10 focus:border-blue-500' : 'focus:ring-royal-blue/10 focus:border-royal-blue',
        focusYellow: dk ? 'focus:ring-yellow-500/10 focus:border-yellow-500' : 'focus:ring-golden-yellow/10 focus:border-golden-yellow',
        focusRed: dk ? 'focus:ring-red-500/10 focus:border-red-500' : 'focus:ring-philippine-red/10 focus:border-philippine-red',
        // Group focus
        gfGreen: dk ? 'group-focus-within:text-green-500' : 'group-focus-within:text-[#2e7d32]',
        gfBlue: dk ? 'group-focus-within:text-blue-500' : 'group-focus-within:text-royal-blue',
        // Header icon
        iconBg: dk ? 'bg-green-900/20' : 'bg-white',
        iconText: dk ? 'text-green-400' : 'text-[#2e7d32]',
        iconBorder: dk ? 'border-green-800/30' : 'border-[#c8e6c9]',
        // Section dots
        dotGreen: dk ? 'bg-green-500' : 'bg-[#2e7d32]',
        dotBlue: dk ? 'bg-blue-500' : 'bg-royal-blue',
        // ID prefix badge
        idBadgeBg: dk ? 'bg-blue-600 border-blue-600' : 'bg-royal-blue border-royal-blue',
        idText: dk ? 'text-white' : 'text-royal-blue',
        // Placeholder
        placeholder: dk ? 'placeholder:text-slate-600' : 'placeholder:text-gray-300',
        // Hover states for suggestions
        courseHover: dk ? 'hover:bg-green-900/40 hover:text-green-400' : 'hover:bg-[#e8f5e9] hover:text-[#2e7d32]',
        workHover: dk ? 'hover:bg-blue-900/40 hover:text-blue-400' : 'hover:bg-blue-50/80 hover:text-royal-blue',
        workDot: dk ? 'bg-slate-700 group-hover/opt:bg-blue-500' : 'bg-gray-200 group-hover/opt:bg-royal-blue',
        workArrow: dk ? 'text-blue-400' : 'text-royal-blue',
        // Icon colors
        iconColor: dk ? 'text-slate-500' : 'text-gray-400 dark:!text-white',
        // Cancel border
        cancelBorder: dk ? 'border-red-900/30' : 'border-[#fee2e2]',
        // Save shadow
        saveShadow: dk ? 'hover:shadow-green-500/20' : 'hover:shadow-[#2e7d32]/40',
        // Action bar border
        actionBarBorder: dk ? 'border-slate-700' : 'border-gray-100/80',
    };

    const formContent = `
        <style>
            .datepicker { z-index: 99999 !important; }
            .datepicker-picker { 
                background-color: ${dk ? '#1e293b' : '#ffffff'} !important; 
                border: 1px solid ${dk ? '#334155' : '#e2e8f0'} !important;
                color: ${dk ? '#f8fafc' : '#1e293b'} !important;
                border-radius: 0.75rem !important;
                box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1) !important;
            }
            .datepicker-header .datepicker-title, .datepicker-header .datepicker-controls .button { 
                color: ${dk ? '#f8fafc' : '#1e293b'} !important;
            }
            .datepicker-cell.selected { background-color: #008148 !important; color: #fff !important; }
            .datepicker-cell:hover { background-color: ${dk ? '#334155' : '#f1f5f9'} !important; }
            .datepicker-controls .button:hover { background-color: ${dk ? '#334155' : '#f1f5f9'} !important; }
        </style>
        <div class="text-left font-montserrat user-select-none relative p-0 max-w-full overflow-x-hidden">
            <!-- Modal Header -->
            <div class="mb-4 pb-3 border-b ${t.borderBase} flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                    <h3 class="text-xl font-black ${t.textHeading} flex items-center gap-2.5">
                        <div class="p-2 ${t.iconBg} rounded-lg ${t.iconText} border ${t.iconBorder} shadow-sm">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="${headerIcon}" /></svg>
                        </div>
                        ${headerTitle}
                    </h3>
                    <p class="text-[0.625rem] ${t.textSubtitle} font-bold mt-1 uppercase tracking-widest pl-11">Enter the details of the GIP beneficiary below.</p>
                </div>
                ${!isEdit && !data?._isBulk ? `
                <button type="button" id="bulk-add-btn" class="group flex items-center justify-center gap-2 px-3 py-2 ${t.bgCard} border ${t.borderCard} rounded-lg hover:border-blue-500 hover:bg-blue-50/50 dark:hover:bg-blue-900/20 transition-all duration-300 w-full sm:w-auto sm:mr-4 focus:ring-4 focus:ring-blue-500/20 active:scale-95 cursor-pointer shadow-sm">
                    <svg class="w-4 h-4 text-blue-500 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
                    <span class="text-[0.625rem] font-black uppercase tracking-wider text-slate-600 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">Bulk Add</span>
                </button>
                ` : ''}
            </div>

            <form id="add-beneficiary-form" class="grid grid-cols-1 lg:grid-cols-2 gap-6" data-is-edit="${isEdit}">
                <!-- LEFT COLUMN: Personal Info Card -->
                <div class="${t.bgCard} rounded-xl p-4 sm:p-5 border ${t.borderCard} shadow-sm flex flex-col space-y-4">
                    <div class="flex items-center gap-2 mb-1">
                        <div class="w-1 h-5 ${t.dotGreen} rounded-full"></div>
                        <p class="text-[0.5625rem] uppercase font-black ${t.textSectionTitle} tracking-widest dark:text-white!">Personal & Educational Information</p>
                    </div>
                    
                    <div class="space-y-3.5">
                        <div class="group">
                            <label class="text-[0.5625rem] ${t.textLabel} font-black uppercase block mb-1 transition-colors ${t.gfGreen} dark:text-white!">Full Name (Last, First, MI) <span class="text-red-500">*</span></label>
                            <input type="text" name="name" id="name-input-field" value="${data?.name || ''}" required class="w-full ${t.bgInput} border ${t.borderInput} rounded-lg px-3 py-2 text-[0.75rem] font-bold ${t.textInput} focus:ring-4 ${t.focusGreen} outline-none transition-all shadow-sm ${t.placeholder} dark:text-white!" placeholder="e.g. Dela Cruz, Juan M.">
                            <div id="duplicate-warning" class="hidden mt-1 text-[0.625rem] font-bold items-center gap-1.5 animate-pulse">
                                <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                                <span>Beneficiary already exist</span>
                            </div>
                        </div>
                        
                        <div class="grid grid-cols-2 gap-3">
                            <div class="group">
                                <label class="text-[0.5625rem] ${t.textLabel} font-black uppercase block mb-1 transition-colors ${t.gfGreen} dark:text-white!">Contact No.</label>
                                <input type="text" name="contact" value="${data?.contact || ''}" class="w-full ${t.bgInput} border ${t.borderInput} rounded-lg px-3 py-2 text-[0.75rem] font-bold ${t.textInput} focus:ring-4 ${t.focusGreen} outline-none transition-all shadow-sm ${t.placeholder} font-mono" placeholder="09XX-XXX-XXXX">
                            </div>
                            <div class="group">
                                <label class="text-[0.5625rem] ${t.textLabel} font-black uppercase block mb-1 transition-colors ${t.gfGreen} dark:text-white!">Address</label>
                                <input type="text" name="address" value="${data?.address || ''}" class="w-full ${t.bgInput} border ${t.borderInput} rounded-lg px-3 py-2 text-[0.75rem] font-bold ${t.textInput} focus:ring-4 ${t.focusGreen} outline-none transition-all shadow-sm ${t.placeholder}" placeholder="Barangay, City">
                            </div>
                        </div>

                        <div class="grid grid-cols-2 gap-3">
                            <div class="group">
                                <label class="text-[0.5625rem] ${t.textLabel} font-black uppercase block mb-1 transition-colors ${t.gfGreen} dark:text-white!">Birthday</label>
                                <div class="relative">
                                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg class="w-4 h-4 ${t.iconColor}" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z"/></svg>
                                    </div>
                                    <input type="text" name="birthday" value="${data?.birthday || ''}" id="birthday-input" class="w-full ${t.bgInput} border ${t.borderInput} rounded-lg pl-9 pr-3 py-2 text-[0.75rem] font-bold ${t.textInput} focus:ring-4 ${t.focusGreen} outline-none transition-all shadow-sm font-mono" placeholder="MM/DD/YYYY">
                                </div>
                            </div>
                            <div class="group">
                                <label class="text-[0.5625rem] ${t.textLabel} font-black uppercase block mb-1 transition-colors ${t.gfGreen} dark:text-white!">Age</label>
                                <input type="text" name="age" value="${data?.age || ''}" id="age-display" class="w-full ${t.bgInput} border ${t.borderInput} rounded-lg px-3 py-2 text-[0.75rem] font-black ${t.textAge} outline-none font-mono focus:ring-4 ${t.focusGreen}" placeholder="Auto/Manual">
                                <div id="age-warning" class="hidden mt-1 text-[0.625rem] font-bold items-center gap-1.5 animate-pulse">
                                    <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                                    <span>Age must be between 18 and 29 years old</span>
                                </div>
                            </div>
                        </div>

                        <div class="grid grid-cols-2 gap-3">
                            <div class="group">
                                <label class="text-[0.5625rem] ${t.textLabel} font-black uppercase block mb-1 transition-colors ${t.gfGreen} dark:text-white!">Gender</label>
                                <select name="gender" class="w-full ${t.bgInput} border ${t.borderInput} rounded-lg px-3 py-2 text-[0.75rem] font-bold ${t.textInput} focus:ring-4 ${t.focusGreen} outline-none transition-all shadow-sm cursor-pointer appearance-none">
                                    <option value="Male" ${data?.gender === 'Male' ? 'selected' : ''}>Male</option>
                                    <option value="Female" ${data?.gender === 'Female' ? 'selected' : ''}>Female</option>
                                </select>
                            </div>
                            <div class="group">
                                <label class="text-[0.5625rem] ${t.textLabel} font-black uppercase block mb-1 transition-colors ${t.gfGreen} dark:text-white!">Education</label>
                                <div class="relative" id="education-container">
                                    <input type="text" name="education" id="education-input" autocomplete="off"
                                        value="${data?.education || ''}" 
                                        class="w-full ${t.bgInput} border ${t.borderInput} rounded-lg px-3 py-2 pl-9 text-[0.75rem] font-bold ${t.textInput} focus:ring-4 ${t.focusGreen} outline-none transition-all shadow-sm ${t.placeholder}" 
                                        placeholder="Course/Level...">
                                    <div class="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none">
                                        <svg class="w-4 h-4 ${t.iconColor}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/></svg>
                                    </div>
                                    <div id="course-suggestions" class="hidden absolute left-0 right-0 mt-2 ${t.bgSugg} border ${t.borderSugg} rounded-xl shadow-2xl z-100 max-h-48 overflow-y-auto font-montserrat ${t.borderDivide} p-1.5">
                                        ${COMMON_COURSES.map(course => `
                                            <div class="course-option px-3 py-2 text-[0.625rem] font-bold ${t.textCourseOpt} ${t.courseHover} rounded-md cursor-pointer transition-colors flex items-center gap-2.5 active:scale-[0.98]">
                                                ${course.icon}
                                                <span class="option-text">${course.name}</span>
                                            </div>
                                        `).join('')}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t ${dk ? 'border-slate-800/70' : 'border-gray-100'}">
                            <div class="group">
                                <label class="text-[0.5625rem] ${t.textLabel} font-black uppercase block mb-1 transition-colors ${t.gfGreen} dark:text-white!">Designated Beneficiary</label>
                                <input type="text" name="designatedBeneficiary" value="${data?.designatedBeneficiary || ''}" class="w-full ${t.bgInput} border ${t.borderInput} rounded-lg px-3 py-2 text-[0.75rem] font-bold ${t.textInput} focus:ring-4 ${t.focusGreen} outline-none transition-all shadow-sm ${t.placeholder}" placeholder="Assured family member">
                            </div>
                            <div class="group">
                                <label class="text-[0.5625rem] ${t.textLabel} font-black uppercase block mb-1 transition-colors ${t.gfGreen} dark:text-white!">Relationship to Assured</label>
                                <select name="relationshipToAssured" class="w-full ${t.bgInput} border ${t.borderInput} rounded-lg px-3 py-2 text-[0.75rem] font-bold ${t.textInput} focus:ring-4 ${t.focusGreen} outline-none transition-all shadow-sm cursor-pointer appearance-none uppercase">
                                    <option value="">SELECT RELATIONSHIP</option>
                                    ${ASSURED_RELATIONSHIPS.map((relationship) => `
                                        <option value="${relationship}" ${data?.relationshipToAssured === relationship ? 'selected' : ''}>${relationship}</option>
                                    `).join('')}
                                </select>
                            </div>
                        </div>
                    </div>

                    <div class="pt-1">
                        <div class="flex items-center gap-2 mb-2">
                            <div class="w-1 h-5 bg-golden-yellow rounded-full"></div>
                            <p class="text-[0.5625rem] uppercase font-black ${t.textSectionTitle} tracking-widest">Contract Duration</p>
                        </div>
                        <div id="date-range-picker" class="grid grid-cols-2 gap-3">
                            <div class="group">
                                <label class="text-[0.5625rem] ${t.textLabel} font-black uppercase block mb-1">Start Date</label>
                                <div class="relative">
                                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg class="w-4 h-4 ${t.iconColor}" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z"/></svg>
                                    </div>
                                    <input type="text" name="startDate" id="datepicker-range-start" value="${data?.startDate || ''}" class="w-full ${t.bgInput} border ${t.borderInput} rounded-lg pl-9 pr-3 py-2 text-[0.75rem] font-bold ${t.textInput} focus:ring-4 ${t.focusYellow} outline-none transition-all shadow-sm font-mono" placeholder="MM/DD/YYYY">
                                </div>
                            </div>
                            <div class="group">
                                <label class="text-[0.5625rem] ${t.textLabel} font-black uppercase block mb-1">End Date</label>
                                <div class="relative">
                                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg class="w-4 h-4 ${t.iconColor}" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z"/></svg>
                                    </div>
                                    <input type="text" name="endDate" id="datepicker-range-end" value="${data?.endDate || ''}" class="w-full ${t.bgInput} border ${t.borderInput} rounded-lg pl-9 pr-3 py-2 text-[0.75rem] font-bold ${t.textInput} focus:ring-4 ${t.focusRed} outline-none transition-all shadow-sm font-mono" placeholder="MM/DD/YYYY">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- RIGHT COLUMN: Work Details Card -->
                <div class="${t.bgCard} rounded-xl p-4 sm:p-5 border ${t.borderCard} shadow-sm flex flex-col space-y-4">
                    <div class="flex items-center gap-2 mb-1">
                        <div class="w-1 h-5 ${t.dotBlue} rounded-full"></div>
                        <p class="text-[0.5625rem] uppercase font-black ${t.textSectionTitle} tracking-widest">Work & Administrative Data</p>
                    </div>
                    
                    <div class="space-y-3.5">
                         <div class="group">
                            <label class="text-[0.5625rem] ${t.textLabel} font-black uppercase block mb-1 transition-colors ${t.gfBlue}">ID Number</label>
                            <input type="text" name="gip_id" id="full-id-input" 
                                value="${data?.id || ''}" 
                                class="w-full ${t.bgInput} border ${t.borderInput} rounded-lg px-3 py-2 text-[0.6875rem] font-black ${t.idText} font-mono outline-none focus:ring-4 ${t.focusBlue} transition-all uppercase" 
                                placeholder="ROX-RD-ESIG-2025-0001">
                            <input type="hidden" name="id" value="${data?.id || ''}">
                        </div>

                        <div class="grid grid-cols-2 gap-3">
                            <div class="group">
                                <label class="text-[0.5625rem] ${t.textLabel} font-black uppercase block mb-1 transition-colors ${t.gfBlue}">Assigned Office</label>
                                <div class="relative" id="office-container">
                                    <input type="text" name="office" id="office-input" autocomplete="off"
                                        value="${data?.office || ''}" 
                                        class="w-full ${t.bgInput} border ${t.borderInput} rounded-lg px-3 py-2 text-[0.75rem] font-bold ${t.textInput} focus:ring-4 ${t.focusBlue} outline-none transition-all shadow-sm ${t.placeholder}" 
                                        placeholder="e.g. DOLE Field Office">
                                    <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                        <svg class="w-4 h-4 ${t.iconColor}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
                                    </div>
                                    <div id="office-suggestions" class="hidden absolute left-0 right-0 mt-2 ${t.bgSugg} border ${t.borderSugg} rounded-xl shadow-2xl z-100 max-h-48 overflow-y-auto font-montserrat ${t.borderDivide} p-1.5">
                                        <!-- Will be populated by JS -->
                                        <div class="px-3 py-4 text-center text-[0.625rem] font-bold ${t.textLabel} animate-pulse">Loading offices...</div>
                                    </div>
                                </div>
                            </div>
                            <div class="group">
                                <label class="text-[0.5625rem] ${t.textLabel} font-black uppercase block mb-1 transition-colors ${t.gfBlue}">Series Number</label>
                                <input type="text" name="seriesNo" id="series-no-input" value="${data?.seriesNo || ''}" class="w-full ${t.bgInput} border ${t.borderInput} rounded-lg px-3 py-2 text-[0.75rem] font-black ${dk ? 'text-white' : 'text-royal-blue'} font-mono focus:ring-4 ${t.focusBlue} outline-none transition-all shadow-sm" placeholder="2025-00-000">
                            </div>
                        </div>

                        <div class="group">
                            <label class="text-[0.5625rem] ${t.textLabel} font-black uppercase block mb-1 tracking-widest ${dk ? '' : 'transition-colors'} ${dk ? '' : 'group-focus-within:text-royal-blue'}">Nature of Work</label>
                            <div class="relative" id="work-container">
                                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <svg class="w-3.5 h-3.5 ${t.iconColor}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                                </div>
                                <input type="text" name="designation" id="designation-input" autocomplete="off"
                                    value="${data?.designation || 'N/A'}"
                                    class="w-full ${t.bgInput} border ${t.borderInput} rounded-lg pl-9 pr-3 py-2 text-[0.75rem] font-bold ${t.textInput} focus:ring-4 ${t.focusBlue} outline-none transition-all shadow-sm ${t.placeholder}" 
                                    placeholder="N/A">
                                <div id="work-suggestions" class="hidden absolute left-0 right-0 mt-2 ${t.bgSugg} border ${t.borderSugg} rounded-xl shadow-2xl z-100 max-h-56 overflow-y-auto font-montserrat ${t.borderDivide} p-2 transform origin-top transition-all duration-200">
                                    <div class="px-2 py-1.5 mb-1.5 border-b ${t.borderSuggHead}">
                                        <p class="text-[0.5625rem] font-black ${t.textWorkSuggHead} uppercase tracking-widest">Quick Select Roles</p>
                                    </div>
                                    ${COMMON_NATURE_OF_WORK.map(work => `
                                        <div class="work-option px-3 py-2.5 text-[0.625rem] font-black ${t.textWorkOpt} ${t.workHover} rounded-lg cursor-pointer transition-all flex items-center justify-between group/opt active:scale-[0.98]">
                                            <div class="flex items-center gap-3">
                                                <div class="w-1.5 h-1.5 rounded-full ${t.workDot} transition-colors"></div>
                                                <span class="option-text">${work}</span>
                                            </div>
                                            <svg class="w-3 h-3 opacity-0 group-hover/opt:opacity-100 transition-opacity ${t.workArrow}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" /></svg>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        </div>

                        <div class="group">
                            <label class="text-[0.5625rem] ${t.textLabel} font-black uppercase block mb-1">Replacement History (Optional)</label>
                            <input type="hidden" name="replacement" id="replacement-hidden" value="${data?.replacement || ''}">
                            <div class="relative" id="replacement-container">
                                <input type="text" id="replacement-search-input" autocomplete="off"
                                    value="${data?.replacement || ''}"
                                    class="w-full ${t.bgInput} border ${t.borderInput} rounded-lg px-3 py-2 text-[0.6875rem] font-bold ${t.textInput} focus:ring-4 ${t.focusBlue} outline-none transition-all shadow-sm ${t.placeholder}"
                                    placeholder="Search beneficiary name...">
                                <div id="replacement-suggestions" class="hidden absolute left-0 right-0 mt-2 ${t.bgSugg} border ${t.borderSugg} rounded-xl shadow-2xl z-100 max-h-56 overflow-y-auto font-montserrat ${t.borderDivide} p-2"></div>
                            </div>
                        </div>

                        <div class="group">
                            <label class="text-[0.5625rem] ${t.textLabel} font-black uppercase block mb-2">Employment Status Record</label>
                            <div class="flex flex-wrap gap-2 items-center">
                                <div class="flex flex-wrap gap-2 p-1.5 ${t.bgStatusWrap} border ${t.borderStatus} rounded-xl shadow-inner flex-1">
                                    ${(() => {
            const statusConfigs = {
                'ONGOING': 'peer-checked:bg-green-400 peer-checked:text-white peer-checked:border-green-400',
                'EXPIRED': 'peer-checked:bg-red-400 peer-checked:text-white peer-checked:border-red-400',
                'RESIGNED': 'peer-checked:bg-[#ce1126] peer-checked:text-white peer-checked:border-[#ce1126]',
                'ABSORBED': 'peer-checked:bg-[#2e7d32] peer-checked:text-white peer-checked:border-[#2e7d32]'
            };
            return ['ONGOING', 'EXPIRED', 'RESIGNED', 'ABSORBED'].map(s => `
                                            <label class="cursor-pointer relative min-w-[80px]">
                                                <input type="radio" name="remarks" value="${s}" ${data?.remarks === s ? 'checked' : ''} class="hidden peer remarks-radio">
                                                <span class="px-3 py-1.5 rounded-lg border border-transparent text-[0.625rem] font-black text-gray-400 dark:text-white! uppercase tracking-widest ${statusConfigs[s] || ''} transition-all block text-center cursor-pointer shadow-sm">
                                                    ${s}
                                                </span>
                                            </label>
                                        `).join('');
        })()}
                                </div>
                                <div class="flex items-center gap-1.5">
                                    <button type="button" id="absorb-btn" 
                                        class="px-3 py-3 rounded-xl bg-[#2e7d32] text-white text-[0.625rem] font-black hover:bg-[#1b5e20] transition-all duration-300 shadow-md cursor-pointer active:scale-95 whitespace-nowrap">
                                        ABSORB
                                    </button>
                                    <button type="button" id="resign-btn" 
                                        class="px-3 py-3 rounded-xl bg-[#ce1126] text-white text-[0.625rem] font-black hover:bg-[#b71c1c] transition-all duration-300 shadow-md cursor-pointer active:scale-95 whitespace-nowrap">
                                        RESIGN
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="extension-log-container" class="mt-auto transition-all duration-300">
                        <!-- Absorption Log will be injected here via JS -->
                    </div>
                </div>
            </form>

            <!-- Action Bar -->
            <div class="mt-6 flex flex-wrap lg:justify-end items-center gap-3 pt-6 rounded-b-3xl ${t.bgActionBar} border-t ${t.actionBarBorder}">
                <button type="button" id="cancel-modal-btn"
                    class="group flex items-center justify-center gap-2.5 px-4 lg:px-6 py-3 lg:py-3.5 ${t.bgCancelBtn} ${t.textCancel} font-black rounded-xl hover:bg-[#ce1126] hover:text-white transition-all duration-300 shadow-sm border ${t.cancelBorder} hover:border-[#ce1126] cursor-pointer text-[0.625rem] lg:text-[0.75rem] active:scale-[0.98] uppercase tracking-wider whitespace-nowrap order-1 lg:order-2">
                    <svg class="w-4 h-4 group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12" /></svg>
                    <span>CANCEL</span>
                </button>

                <button type="submit" form="add-beneficiary-form" id="submit-beneficiary-btn"
                    class="group flex items-center justify-center gap-2.5 px-4 lg:px-6 py-3 lg:py-3.5 ${t.bgSaveBtn} text-white font-black rounded-xl transition-all duration-300 shadow-lg ${t.saveShadow} cursor-pointer text-[0.625rem] lg:text-[0.75rem] transform active:scale-[0.98] uppercase tracking-wider whitespace-nowrap order-2 lg:order-1">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" /></svg>
                    <span>${isEdit ? 'UPDATE RECORD' : 'SAVE RECORD'}</span>
                </button>
            </div>
        </div>
    `;

    Swal.fire({
        html: formContent,
        width: window.innerWidth < 640 ? '96vw' : window.innerWidth < 1024 ? '90vw' : '1120px',
        showConfirmButton: false,
        showCloseButton: false,
        padding: window.innerWidth < 640 ? '0.75rem' : window.innerWidth < 1024 ? '1.25rem' : '2rem',
        customClass: {
            container: 'font-montserrat',
            popup: 'rounded-2xl ldn-modal-popup'
        },
        willOpen: () => {
            document.documentElement.classList.add('overflow-hidden');
            document.body.classList.add('overflow-hidden');
        },
        didClose: () => {
            document.documentElement.classList.remove('overflow-hidden');
            document.body.classList.remove('overflow-hidden');
        },
        didOpen: (popup) => {
            // [FLOWBITE FIX] Initialize Flowbite for dynamic modal content
            if (window.initFlowbite) window.initFlowbite();

            // Cancel button functionality
            const cancelBtn = popup.querySelector('#cancel-modal-btn');
            if (cancelBtn) {
                cancelBtn.addEventListener('click', () => {
                    // Wipe draft ONLY on explicit CANCEL for Add mode
                    if (!isEdit && !data?._isBulk) {
                        localStorage.removeItem('add_beneficiary_draft');
                    }
                    Swal.close();
                    if (data?._isBulk) {
                        BulkApp.onCancel();
                    }
                });
            }

            // Bulk Add Event Listener
            const bulkBtn = popup.querySelector('#bulk-add-btn');
            if (bulkBtn) {
                bulkBtn.addEventListener('click', () => {
                    Swal.close();
                    BulkApp.init();
                });
            }

            // --- Robust Date Input Logic ---
            const setupInputDateBehavior = (input, onDateFound) => {
                input.addEventListener('paste', (e) => {
                    e.preventDefault();
                    let pasteData = (e.clipboardData || window.clipboardData).getData('text');
                    if (pasteData) {
                        // Standardize separators to '/'
                        pasteData = pasteData.replace(/[-.\s]/g, '/');
                        const parts = pasteData.split('/');
                        if (parts.length === 3) {
                            const m = parts[0].padStart(2, '0');
                            const d = parts[1].padStart(2, '0');
                            let y = parts[2];
                            if (y.length === 2) {
                                const currentYear = new Date().getFullYear();
                                const century = Math.floor(currentYear / 100) * 100;
                                y = String(century + parseInt(y));
                            } else {
                                y = y.padStart(4, '0');
                            }
                            const formatted = `${m}/${d}/${y}`;
                            input.value = formatted;
                            
                            // Trigger input event
                            const inputEvent = new Event('input', { bubbles: true });
                            input.dispatchEvent(inputEvent);
                            
                            const parsed = window.__parseFormattedDate(formatted);
                            if (parsed && onDateFound) {
                                onDateFound(parsed);
                                if (document.activeElement === input) {
                                    input.blur();
                                }
                            }
                            
                            // Close datepicker
                            const picker = input._datepicker || (input.parentNode && input.parentNode._datepicker);
                            if (picker && typeof picker.hide === 'function') {
                                picker.hide();
                            }
                        }
                    }
                });

                input.addEventListener('input', (e) => {
                    const masked = window.__maskDate(e.target.value);
                    if (e.target.value !== masked) e.target.value = masked;
                    
                    if (masked.length === 10) {
                        const parsed = window.__parseFormattedDate(masked);
                        if (parsed && onDateFound) {
                            onDateFound(parsed);
                            if (document.activeElement === input) {
                                input.blur();
                            }
                            // Close datepicker
                            const picker = input._datepicker || (input.parentNode && input.parentNode._datepicker);
                            if (picker && typeof picker.hide === 'function') {
                                picker.hide();
                            }
                        }
                    }
                });

                input.addEventListener('changeDate', (e) => {
                    if (e.detail && e.detail.date && onDateFound) {
                        onDateFound(e.detail.date);
                        // Force hide the picker after selection
                        const picker = input._datepicker || (input.parentNode && input.parentNode._datepicker);
                        if (picker && typeof picker.hide === 'function') {
                            picker.hide();
                        }
                    }
                });
            };

            const bdayInput = popup.querySelector('#birthday-input');
            const ageDisplay = popup.querySelector('#age-display');
            const ageWarning = popup.querySelector('#age-warning');
            const submitBtn = popup.querySelector('#submit-beneficiary-btn');

            const validateAge = (age) => {
                if (!age) {
                    if (ageWarning) ageWarning.classList.add('hidden');
                    if (submitBtn) {
                        submitBtn.disabled = false;
                        submitBtn.classList.remove('opacity-50', 'cursor-not-allowed', 'grayscale');
                        submitBtn.classList.add('cursor-pointer');
                    }
                    return true;
                }
                
                const ageNum = parseInt(age);
                const isValid = !isNaN(ageNum) && ageNum >= 18 && ageNum <= 29;
                
                if (ageWarning) {
                    ageWarning.className = `mt-1 text-[0.625rem] font-bold ${!isValid ? 'flex' : 'hidden'} items-center gap-1.5 animate-pulse ${isDarkMode() ? 'text-red-400' : 'text-red-600'}`;
                }
                
                if (submitBtn) {
                    if (!isValid) {
                        submitBtn.disabled = true;
                        submitBtn.classList.add('opacity-50', 'cursor-not-allowed', 'grayscale');
                        submitBtn.classList.remove('cursor-pointer', 'active:scale-[0.98]');
                    } else {
                        submitBtn.disabled = false;
                        submitBtn.classList.remove('opacity-50', 'cursor-not-allowed', 'grayscale');
                        submitBtn.classList.add('cursor-pointer', 'active:scale-[0.98]');
                    }
                }
                return isValid;
            };

            if (ageDisplay) {
                ageDisplay.addEventListener('input', (e) => {
                    validateAge(e.target.value);
                });
                // Initial check for pre-filled data
                if (ageDisplay.value) validateAge(ageDisplay.value);
            }

            if (bdayInput) {
                setupInputDateBehavior(bdayInput, (date) => {
                    if (ageDisplay) {
                        ageDisplay.value = window.calculateAge(date);
                        validateAge(ageDisplay.value);
                        ageDisplay.classList.add('animate-pulse');
                        setTimeout(() => ageDisplay.classList.remove('animate-pulse'), 400);
                    }
                });

                // Initialization of Picker (if library available)
                const PickerClass = window.Datepicker || (typeof Datepicker !== 'undefined' ? Datepicker : null);
                if (PickerClass) {
                    bdayInput._datepicker = new PickerClass(bdayInput, { format: 'mm/dd/yyyy', autohide: true, orientation: 'bottom right' });
                }
            }

            // Duplicate Name Check with UI Feedback
            const nameField = popup.querySelector('#name-input-field');
            const dupWarning = popup.querySelector('#duplicate-warning');
            
            if (nameField && dupWarning) {
                let dupTimer;
                const getCurrentUserId = () => {
                    try {
                        return JSON.parse(localStorage.getItem('user') || '{}')?.id || null;
                    } catch (e) {
                        return null;
                    }
                };
                const setDuplicateWarning = (visible, duplicateName = '') => {
                    dupWarning.className = `mt-1 text-[0.625rem] font-bold ${visible ? 'flex' : 'hidden'} items-center gap-1.5 animate-pulse ${isDarkMode() ? 'text-red-400' : 'text-red-600'}`;
                    const label = dupWarning.querySelector('span');
                    if (label) {
                        label.textContent = duplicateName ? `Beneficiary already exists: ${duplicateName}` : 'Beneficiary already exists';
                    }
                };
                const checkDuplicateName = async (name) => {
                    const userId = getCurrentUserId();
                    const response = await fetch(`${getBasePath()}api/check_duplicate.php`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            ...(userId ? { 'X-User-Id': String(userId) } : {})
                        },
                        body: JSON.stringify({ name, user_id: userId, exclude_id: isEdit ? data?.id : null })
                    });
                    if (!response.ok) throw new Error(`Duplicate check failed (${response.status})`);
                    return response.json();
                };

                nameField.addEventListener('input', (e) => {
                    const name = e.target.value.trim();
                    clearTimeout(dupTimer);
                    
                    if (name.length < 3) {
                        setDuplicateWarning(false);
                        return;
                    }

                    dupTimer = setTimeout(async () => {
                        try {
                            const res = await checkDuplicateName(name);
                            if (res.success && res.exists) {
                                setDuplicateWarning(true, res.match || res.name);
                            } else {
                                setDuplicateWarning(false);
                            }
                        } catch (err) {
                            console.error('Duplicate check error:', err);
                        }
                    }, 500);
                });
                
                if (data?.name) {
                    // Trigger check for Pre-filled data
                    setDuplicateWarning(false);
                    // We call it manually to not wait for 500ms
                    (async () => {
                        const result = await checkDuplicateName(data.name);
                        if (result.success && result.exists) {
                            setDuplicateWarning(true, result.match || result.name);
                        }
                    })();
                }
            }

            // Identifiers Sync Logic (GIP ID & Series Number)
            const fullIdInput = popup.querySelector('#full-id-input');
            const seriesNoInput = popup.querySelector('#series-no-input');
            const startDateInput = popup.querySelector('input[name="startDate"]');
            const endDateInput = popup.querySelector('input[name="endDate"]');
            const remarksRadios = popup.querySelectorAll('input[name="remarks"]');
            const extensionContainer = popup.querySelector('#extension-log-container');

            const fetchNextIdentifiers = async (year) => {
                if (!year) return;

                // ONLINE API: Parallel fetching to avoid "one by one" delay
                const inputs = [fullIdInput, seriesNoInput].filter(Boolean);
                inputs.forEach(el => {
                    el.classList.add('animate-pulse');
                    el.placeholder = "Syncing...";
                });

                try {
                    const [idRes, seriesRes] = await Promise.all([
                        apiGet(`api/beneficiaries.php?next_id&year=${encodeURIComponent(year)}`),
                        apiGet(`api/beneficiaries.php?next_series_no&year=${encodeURIComponent(year)}`)
                    ]);

                    const nextId = (idRes.success && idRes.data?.success) ? idRes.data.nextId : null;
                    const nextSeries = (seriesRes.success && seriesRes.data?.success) ? seriesRes.data.nextSeries : null;

                    // Apply both together
                    if (nextId && fullIdInput) {
                        fullIdInput.value = nextId;
                    }
                    if (nextSeries && seriesNoInput) {
                        seriesNoInput.value = nextSeries;
                    }
                } catch (err) {
                    console.error('ID Sync error:', err);
                } finally {
                    inputs.forEach(el => el.classList.remove('animate-pulse'));
                }
            };

            const replacementSearchInput = popup.querySelector('#replacement-search-input');
            const replacementHiddenInput = popup.querySelector('#replacement-hidden');
            const replacementSuggestions = popup.querySelector('#replacement-suggestions');

            const buildReplacementText = (candidate) => {
                const name = (candidate.name || '').toUpperCase().trim();
                const start = candidate.startDateFormatted || candidate.startDate || 'N/A';
                const end = candidate.endDateFormatted || candidate.endDate || 'N/A';
                return `${name} (${start.toUpperCase()} - ${end.toUpperCase()})`;
            };

            const renderReplacementSuggestions = (candidates) => {
                if (!replacementSuggestions) return;
                if (!candidates.length) {
                    replacementSuggestions.innerHTML = `<div class="px-3 py-2 text-[0.625rem] font-bold ${t.textCourseOpt}">No matching beneficiary found.</div>`;
                    replacementSuggestions.classList.remove('hidden');
                    return;
                }

                replacementSuggestions.innerHTML = candidates.map((candidate) => {
                    const line = buildReplacementText(candidate);
                    return `
                        <button type="button" class="replacement-option w-full text-left px-3 py-2 text-[0.625rem] font-bold ${t.textCourseOpt} ${t.courseHover} rounded-md cursor-pointer transition-colors"
                            data-replacement="${line.replace(/"/g, '&quot;')}">
                            ${line}
                        </button>
                    `;
                }).join('');

                replacementSuggestions.classList.remove('hidden');
                replacementSuggestions.querySelectorAll('.replacement-option').forEach((optionBtn) => {
                    optionBtn.addEventListener('click', () => {
                        const selected = optionBtn.getAttribute('data-replacement') || '';
                        if (replacementSearchInput) replacementSearchInput.value = selected;
                        if (replacementHiddenInput) replacementHiddenInput.value = selected;
                        replacementSuggestions.classList.add('hidden');
                    });
                });
            };

            let replacementTimer = null;
            const fetchReplacementCandidates = async (query = '') => {
                const q = (query || '').trim();
                const endpoint = `api/beneficiaries.php?replacement_candidates=1&limit=20${q ? `&q=${encodeURIComponent(q)}` : ''}`;
                const res = await apiGet(endpoint);
                if (res.success && res.data?.success && Array.isArray(res.data.candidates)) {
                    renderReplacementSuggestions(res.data.candidates);
                }
            };

            if (replacementSearchInput && replacementHiddenInput && replacementSuggestions) {
                replacementSearchInput.addEventListener('focus', () => {
                    fetchReplacementCandidates(replacementSearchInput.value || '');
                });
                replacementSearchInput.addEventListener('input', () => {
                    replacementHiddenInput.value = replacementSearchInput.value.trim();
                    clearTimeout(replacementTimer);
                    replacementTimer = setTimeout(() => {
                        fetchReplacementCandidates(replacementSearchInput.value || '');
                    }, 250);
                });
                document.addEventListener('click', (e) => {
                    if (replacementSearchInput && replacementSuggestions && 
                        !replacementSearchInput.contains(e.target) && !replacementSuggestions.contains(e.target)) {
                        replacementSuggestions.classList.add('hidden');
                    }
                });
            }

            const getSelectedRemarks = () => {
                const checked = popup.querySelector('input[name="remarks"]:checked');
                return checked ? checked.value : 'ONGOING';
            };

            const setSelectedRemarks = (val) => {
                const radio = popup.querySelector(`input[name="remarks"][value="${val}"]`);
                if (radio) {
                    radio.checked = true;
                    // Trigger manual change if needed for absorption log
                    updateAbsorptionLog();
                }
            };


            const updateRemarks = () => {
                if (endDateInput && endDateInput.value) {
                    const parsed = window.__parseFormattedDate(endDateInput.value);
                    if (!parsed) return;
                    
                    const now = new Date();
                    now.setHours(0, 0, 0, 0);

                    let newStatus = 'ONGOING';
                    if (parsed < now) {
                        newStatus = 'EXPIRED';
                    }
                    setSelectedRemarks(newStatus);
                }
            };

            const updateAbsorptionLog = () => {
                if (!extensionContainer) return;
                const status = getSelectedRemarks();
                if (status === 'ABSORBED') {
                    const d = (data?.absorbDate && !String(data.absorbDate).includes('0000-00-00')) ? new Date(data.absorbDate) : new Date();
                    const tzOffset = d.getTimezoneOffset() * 60000;
                    const localISOTime = (new Date(d.getTime() - tzOffset)).toISOString().slice(0,16);
                    
                    extensionContainer.innerHTML = `
                        <div class="mt-4 pt-4 border-t ${dk ? 'border-slate-800' : 'border-gray-100'}">
                            <p class="text-[0.5625rem] uppercase font-black ${dk ? 'text-green-500' : 'text-[#2e7d32]'} border-b ${dk ? 'border-slate-800' : 'border-green-100'} pb-1 flex items-center gap-2 mb-3"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg> Absorption Details</p>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                                <div class="group">
                                    <label class="text-[0.5625rem] ${dk ? 'text-green-500' : 'text-[#2e7d32]'} font-black uppercase block mb-1 cursor-pointer" for="absorbDateModal">Absorption Date</label>
                                    <input type="datetime-local" id="absorbDateModal" name="absorbDate" value="${localISOTime}" class="w-full ${dk ? 'bg-slate-900 text-white border-slate-700' : 'bg-white text-slate-900 border-gray-300'} rounded-lg px-3 py-2 text-[0.6875rem] font-bold focus:ring-4 ${dk ? 'focus:ring-green-500/10 focus:border-green-500' : 'focus:ring-[#2e7d32]/10 focus:border-[#2e7d32]'} outline-none transition-all shadow-sm font-mono cursor-pointer">
                                </div>
                                <div class="group">
                                    <label class="text-[0.5625rem] ${dk ? 'text-slate-500' : 'text-gray-400 dark:text-white!'} font-black uppercase block mb-1">Where?</label>
                                    <input type="text" name="absorb_where" value="${data?.absorb_where || ''}" class="w-full ${dk ? 'bg-slate-900 text-white border-slate-700' : 'bg-white text-slate-900 border-gray-300'} rounded-lg px-3 py-2 text-[0.6875rem] font-bold focus:ring-4 ${dk ? 'focus:ring-green-500/10 focus:border-green-500' : 'focus:ring-[#2e7d32]/10 focus:border-[#2e7d32]'} outline-none transition-all shadow-sm ${dk ? 'placeholder:text-slate-600' : 'placeholder:text-gray-300'}" placeholder="Where to absorb?">
                                </div>
                            </div>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                                <div class="group">
                                    <label class="text-[0.5625rem] ${dk ? 'text-slate-500' : 'text-gray-400 dark:text-white!'} font-black uppercase block mb-1">Position</label>
                                    <input type="text" name="absorb_position" value="${data?.absorb_position || ''}" class="w-full ${dk ? 'bg-slate-900 text-white border-slate-700' : 'bg-white text-slate-900 border-gray-300'} rounded-lg px-3 py-2 text-[0.6875rem] font-bold focus:ring-4 ${dk ? 'focus:ring-green-500/10 focus:border-green-500' : 'focus:ring-[#2e7d32]/10 focus:border-[#2e7d32]'} outline-none transition-all shadow-sm ${dk ? 'placeholder:text-slate-600' : 'placeholder:text-gray-300'}" placeholder="What kind of position?">
                                </div>
                                <div class="group">
                                    <label class="text-[0.5625rem] ${dk ? 'text-slate-500' : 'text-gray-400 dark:text-white!'} font-black uppercase block mb-1">Agency</label>
                                    <input type="text" name="absorb_agency" value="${data?.absorb_agency || ''}" class="w-full ${dk ? 'bg-slate-900 text-white border-slate-700' : 'bg-white text-slate-900 border-gray-300'} rounded-lg px-3 py-2 text-[0.6875rem] font-bold focus:ring-4 ${dk ? 'focus:ring-green-500/10 focus:border-green-500' : 'focus:ring-[#2e7d32]/10 focus:border-[#2e7d32]'} outline-none transition-all shadow-sm ${dk ? 'placeholder:text-slate-600' : 'placeholder:text-gray-300'}" placeholder="On what agency?">
                                </div>
                            </div>
                        </div>
                    `;
                } else if (status === 'RESIGNED') {
                    const d = (data?.resignedDate && !String(data.resignedDate).includes('0000-00-00')) ? new Date(data.resignedDate) : new Date();
                    const tzOffset = d.getTimezoneOffset() * 60000;
                    const localISOTime = (new Date(d.getTime() - tzOffset)).toISOString().slice(0,16);
                    
                    extensionContainer.innerHTML = `
                        <div class="mt-4 pt-4 border-t ${dk ? 'border-slate-800' : 'border-gray-100'}">
                            <p class="text-[0.5625rem] uppercase font-black ${dk ? 'text-red-500' : 'text-[#ce1126]'} border-b ${dk ? 'border-slate-800' : 'border-red-100'} pb-1 flex items-center gap-2 mb-3"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg> Resignation Details</p>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                                <div class="group">
                                    <label class="text-[0.5625rem] ${dk ? 'text-red-500' : 'text-[#ce1126]'} font-black uppercase block mb-1 cursor-pointer" for="resignedDateModal">Resignation Date</label>
                                    <input type="datetime-local" id="resignedDateModal" name="resignedDate" value="${localISOTime}" class="w-full ${dk ? 'bg-slate-900 text-white border-slate-700' : 'bg-white text-slate-900 border-gray-300'} rounded-lg px-3 py-2 text-[0.6875rem] font-bold focus:ring-4 ${dk ? 'focus:ring-red-500/10 focus:border-red-500' : 'focus:ring-[#ce1126]/10 focus:border-[#ce1126]'} outline-none transition-all shadow-sm font-mono cursor-pointer">
                                </div>
                                <div class="group">
                                    <label class="text-[0.5625rem] ${dk ? 'text-slate-500' : 'text-gray-400 dark:text-white!'} font-black uppercase block mb-1">Reason (Optional)</label>
                                    <input type="text" name="resigned_reason" value="${data?.resigned_reason || ''}" class="w-full ${dk ? 'bg-slate-900 text-white border-slate-700' : 'bg-white text-slate-900 border-gray-300'} rounded-lg px-3 py-2 text-[0.6875rem] font-bold focus:ring-4 ${dk ? 'focus:ring-red-500/10 focus:border-red-500' : 'focus:ring-[#ce1126]/10 focus:border-[#ce1126]'} outline-none transition-all shadow-sm ${dk ? 'placeholder:text-slate-600' : 'placeholder:text-gray-300'}" placeholder="Why resigned?">
                                </div>
                            </div>
                        </div>
                    `;
                } else {
                    extensionContainer.innerHTML = '';
                }
            };

            if (startDateInput) {
                let lastYear = null;
                setupInputDateBehavior(startDateInput, (parsed) => {
                    const selectedYear = parsed.getFullYear();
                    if (endDateInput) {
                        const end = new Date(parsed);
                        end.setDate(end.getDate() + 243);
                        
                        const m = String(end.getMonth() + 1).padStart(2, '0');
                        const d = String(end.getDate()).padStart(2, '0');
                        const y = end.getFullYear();
                        endDateInput.value = `${m}/${d}/${y}`;
                    }
                    updateRemarks();

                    if (selectedYear > 1900 && selectedYear !== lastYear) {
                        lastYear = selectedYear;
                        fetchNextIdentifiers(selectedYear);
                    }
                });

                if (endDateInput) {
                    setupInputDateBehavior(endDateInput, () => updateRemarks());
                }

                // Picker Init
                const rangeEl = popup.querySelector('#date-range-picker');
                const RangePickerClass = window.DateRangePicker || (typeof DateRangePicker !== 'undefined' ? DateRangePicker : null);
                const PickerClass = window.Datepicker || (typeof Datepicker !== 'undefined' ? Datepicker : null);
                if (RangePickerClass && rangeEl && startDateInput && endDateInput) {
                    const rangePicker = new RangePickerClass(rangeEl, {
                        format: 'mm/dd/yyyy',
                        autohide: true,
                        allowOneSidedRange: true,
                        orientation: 'auto'
                    });
                    startDateInput._datepicker = rangePicker.datepickers?.[0] || null;
                    endDateInput._datepicker = rangePicker.datepickers?.[1] || null;
                } else if (PickerClass) {
                    if (startDateInput) {
                        startDateInput._datepicker = new PickerClass(startDateInput, { format: 'mm/dd/yyyy', autohide: true, orientation: 'auto' });
                    }
                    if (endDateInput) {
                        endDateInput._datepicker = new PickerClass(endDateInput, { format: 'mm/dd/yyyy', autohide: true, orientation: 'auto' });
                    }
                }

                if (!isEdit) {
                    const baseYear = new Date().getFullYear();
                    fetchNextIdentifiers(baseYear);
                }
            }

            remarksRadios.forEach(r => r.addEventListener('change', updateAbsorptionLog));

            // Resign & Absorb Buttons
            const resignBtn = popup.querySelector('#resign-btn');
            const absorbBtn = popup.querySelector('#absorb-btn');
            if (resignBtn) resignBtn.addEventListener('click', () => setSelectedRemarks('RESIGNED'));
            if (absorbBtn) absorbBtn.addEventListener('click', () => setSelectedRemarks('ABSORBED'));

            // Text Auto-Uppercase
            popup.querySelectorAll('input[type="text"], textarea').forEach(input => {
                if (['id-number-input', 'full-id-input'].includes(input.id)) return;
                input.addEventListener('input', () => {
                    const start = input.selectionStart, end = input.selectionEnd;
                    input.value = input.value.toUpperCase();
                    input.setSelectionRange(start, end);
                });
            });

            // Initial UI state
            updateRemarks();
            updateAbsorptionLog();

            // Setup Suggestions
            setupSuggestions('education-input', 'course-suggestions', 'course-option');
            setupSuggestions('designation-input', 'work-suggestions', 'work-option');
            // setupSuggestions('office-input', 'office-suggestions', 'office-option'); // Replaced by setupOfficeSelector below

            // Specialized Office Selector with Drill-down (Supabase)
            const setupOfficeSelector = () => {
                const officeInput = popup.querySelector('#office-input');
                const officeContainer = popup.querySelector('#office-suggestions');
                if (!officeInput || !officeContainer) return;

                let currentView = 'OFFICES'; // OFFICES or LOCATIONS
                let selectedOffice = null;
                let cachedOffices = [];

                const fetchOffices = async () => {
                    const cacheKey = 'dole_offices_cache';

                    // Fetch fresh from Supabase SDK (primary) or PHP bridge (fallback).
                    const syncBackground = async () => {
                        let freshData = [];
                        try {
                            if (supabase && isSupabaseMode()) {
                                // Parallel fetch: offices + location counts
                                const [{ data: offData, error: offErr }, { data: locData }] = await Promise.all([
                                    supabase.from('offices').select('*').order('office'),
                                    supabase.from('office_locations').select('office_id')
                                ]);
                                if (!offErr && offData?.length) {
                                    const countMap = {};
                                    if (locData) locData.forEach(l => { countMap[l.office_id] = (countMap[l.office_id] || 0) + 1; });
                                    freshData = offData.map(o => ({
                                        id:             o.id ?? o.office_id,
                                        office:         o.office || o.office_name || '',
                                        location_count: countMap[o.id ?? o.office_id] || 0
                                    })).filter(o => o.office);
                                }
                            }
                        } catch (err) { /* fall through to PHP */ }

                        // PHP bridge fallback
                        if (!freshData.length) {
                            try {
                                const res = await apiGet('api/beneficiaries.php?get_offices_advanced=1');
                                if (res.success && res.data?.success && Array.isArray(res.data.offices)) freshData = res.data.offices;
                            } catch (err) { console.error('Office fetch failed:', err); }
                        }

                        if (freshData.length > 0) {
                            cachedOffices = freshData;
                            localStorage.setItem(cacheKey, JSON.stringify({ data: freshData, timestamp: Date.now() }));
                        }
                        return freshData;
                    };

                    const cached = localStorage.getItem(cacheKey);
                    if (cached) {
                        try {
                            const { data, timestamp } = JSON.parse(cached);
                            cachedOffices = data;
                            // Refresh in background if older than 5 minutes
                            if (Date.now() - timestamp > 5 * 60 * 1000) {
                                syncBackground().then(() => {
                                    if (currentView === 'OFFICES') render('OFFICES', selectedOffice, officeInput.value);
                                });
                            }
                            return data;
                        } catch (e) { localStorage.removeItem(cacheKey); }
                    }

                    if (cachedOffices.length === 0) return await syncBackground();
                    return cachedOffices;
                };

                const render = async (view = 'OFFICES', office = null, filter = '') => {
                    currentView = view;
                    selectedOffice = office;
                    
                    if (view === 'OFFICES') {
                        const offices = await fetchOffices();
                        const filteredOffices = offices.filter(o => o.office.toLowerCase().includes(filter.toLowerCase()));
                        
                        officeContainer.innerHTML = `
                            <div class="px-2.5 py-1.5 text-[0.4375rem] font-black uppercase tracking-widest ${t.textLabel} opacity-70 border-b ${t.borderDivide} mb-1">OFFICE CODE</div>
                            <div class="max-h-64 overflow-y-auto scrollbar-hide">
                                ${filteredOffices.length > 0 ? filteredOffices.map(o => {
                                    const hasLocations = parseInt(o.location_count || 0) > 0;
                                    return `
                                        <div class="office-code-option group/opt px-3 py-2 text-[0.5625rem] font-bold ${t.textCourseOpt} ${t.courseHover} rounded-lg ${hasLocations ? 'cursor-pointer' : 'cursor-default opacity-60'} transition-all flex items-center justify-between group active:scale-[0.98] mx-1 mb-0.5" 
                                            data-id="${o.id}" data-name="${o.office}" data-has-locations="${hasLocations}">
                                            <div class="flex items-center gap-2.5">
                                                <div class="w-2 h-2 rounded-md bg-blue-500/10 group-hover/opt:bg-blue-500/20 flex items-center justify-center transition-colors">
                                                    <div class="w-1 h-1 rounded-full bg-blue-500/40 group-hover/opt:bg-blue-500 transition-colors"></div>
                                                </div>
                                                <span class="option-text">${o.office}</span>
                                            </div>
                                            ${hasLocations ? `<svg class="w-3 h-3 text-slate-300 group-hover/opt:text-blue-500 group-hover/opt:translate-x-0.5 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7"/></svg>` : ''}
                                        </div>
                                    `;
                                }).join('') : `
                                    <div class="px-3 py-2 text-center text-[0.5625rem] font-bold ${t.textLabel} opacity-60 whitespace-nowrap">No matching offices.</div>
                                    ${filter.trim() ? `
                                    <div class="px-2 pb-2 flex flex-col gap-1.5">
                                        <div class="text-[0.4375rem] font-black uppercase tracking-widest ${t.textLabel} opacity-50 px-1">New office: "${filter.trim()}"</div>
                                        <div id="add-office-location-row-modal" class="hidden gap-1.5 items-center">
                                            <input type="text" id="new-office-loc-input-modal" placeholder="Location name..." class="flex-1 min-w-0 px-2.5 py-1.5 text-[0.5625rem] font-bold bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all">
                                            <button type="button" id="confirm-office-with-loc-modal" class="shrink-0 px-2.5 py-1.5 rounded-lg bg-blue-500 text-white text-[0.5625rem] font-black uppercase tracking-widest hover:bg-blue-600 transition-all active:scale-95 cursor-pointer whitespace-nowrap">
                                                Confirm
                                            </button>
                                        </div>
                                        <div class="flex gap-1.5">
                                            <button type="button" id="add-office-with-loc-btn-modal" class="flex-1 flex items-center justify-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800/50 text-[0.5625rem] font-black uppercase tracking-widest hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-all active:scale-[0.98] cursor-pointer whitespace-nowrap">
                                                <svg class="w-2.5 h-2.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                                                Add location
                                            </button>
                                            <button type="button" id="skip-office-loc-btn-modal" class="flex-1 flex items-center justify-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-gray-100 dark:bg-slate-800 text-gray-500 dark:text-slate-400 border border-gray-200 dark:border-slate-700 text-[0.5625rem] font-black uppercase tracking-widest hover:bg-gray-200 dark:hover:bg-slate-700 transition-all active:scale-[0.98] cursor-pointer whitespace-nowrap">
                                                <svg class="w-2.5 h-2.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                                                Skip
                                            </button>
                                        </div>
                                    </div>` : ''}
                                `}
                            </div>
                        `;

                        const newOfficeName = filter.trim();
                        const locRowM = officeContainer.querySelector('#add-office-location-row-modal');
                        const locInputM = officeContainer.querySelector('#new-office-loc-input-modal');
                        const confirmBtnM = officeContainer.querySelector('#confirm-office-with-loc-modal');
                        const addLocBtnM = officeContainer.querySelector('#add-office-with-loc-btn-modal');
                        const skipBtnM = officeContainer.querySelector('#skip-office-loc-btn-modal');

                        if (addLocBtnM && locRowM) {
                            addLocBtnM.addEventListener('click', (e) => {
                                e.stopPropagation();
                                locRowM.classList.remove('hidden');
                                locRowM.classList.add('flex');
                                setTimeout(() => locInputM?.focus(), 50);
                            });
                        }
                        if (confirmBtnM && locInputM) {
                            const doConfirmM = (e) => {
                                e.stopPropagation();
                                const loc = locInputM.value.trim();
                                officeInput.value = loc ? `${newOfficeName} - ${loc}` : newOfficeName;
                                officeInput.dataset.locationName = loc || '';
                                officeContainer.classList.add('hidden');
                                officeInput.dispatchEvent(new Event('change'));
                            };
                            confirmBtnM.addEventListener('click', doConfirmM);
                            locInputM.addEventListener('keydown', (e) => { if (e.key === 'Enter') doConfirmM(e); });
                            locInputM.addEventListener('click', (e) => e.stopPropagation());
                        }
                        if (skipBtnM) {
                            skipBtnM.addEventListener('click', (e) => {
                                e.stopPropagation();
                                officeInput.value = newOfficeName;
                                officeInput.dataset.locationName = '';
                                officeContainer.classList.add('hidden');
                                officeInput.dispatchEvent(new Event('change'));
                            });
                        }

                        officeContainer.querySelectorAll('.office-code-option').forEach(opt => {
                            opt.addEventListener('click', (e) => {
                                e.stopPropagation();
                                if (opt.dataset.hasLocations === 'true') {
                                    render('LOCATIONS', { id: opt.dataset.id, name: opt.dataset.name });
                                } else {
                                    // Office with no locations — select it directly and track its id.
                                    officeInput.value = opt.dataset.name;
                                    officeInput.dataset.officeId = opt.dataset.id;
                                    delete officeInput.dataset.locationName;
                                    officeContainer.classList.add('hidden');
                                    officeInput.dispatchEvent(new Event('change'));
                                }
                            });
                        });
                    } else {
                        // LOCATIONS VIEW
                        officeContainer.innerHTML = `
                            <div class="flex items-center justify-between px-3 py-2 border-b ${t.borderDivide} bg-slate-50/95 dark:bg-slate-800/95 sticky top-0 backdrop-blur-sm z-10 rounded-t-xl">
                                <div class="flex items-center gap-2">
                                    <div class="p-1 rounded-md bg-green-500/10 text-green-600 dark:text-green-400">
                                        <svg class="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                                    </div>
                                    <div class="text-[0.4375rem] font-black uppercase tracking-widest ${t.textLabel} opacity-70">OFFICE LOCATION</div>
                                </div>
                                <button type="button" id="back-to-offices" class="p-1.5 rounded-lg bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-900/40 transition-all cursor-pointer shadow-sm active:scale-90 flex items-center justify-center">
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"/></svg>
                                </button>
                            </div>
                            
                            <div class="p-2 border-b ${t.borderDivide}">
                                <div class="relative group">
                                    <div class="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none text-slate-400 group-focus-within:text-blue-500 transition-colors">
                                        <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                                    </div>
                                    <input type="text" id="location-search-internal" placeholder="Search in ${office.name}..." 
                                        class="w-full pl-8 pr-3 py-1.5 text-[0.5625rem] font-bold bg-slate-100/50 dark:bg-slate-900/50 border-transparent focus:border-blue-500 focus:ring-0 rounded-lg transition-all"
                                        value="${filter.includes(' - ') ? filter.split(' - ')[1] : ''}">
                                </div>
                            </div>

                            <div id="locations-list-container" class="max-h-64 overflow-y-auto scrollbar-hide p-1">
                                <div class="px-3 py-4 text-center text-[0.5625rem] font-bold ${t.textLabel} animate-pulse flex items-center justify-center gap-2">
                                    <svg class="w-3.5 h-3.5 animate-spin text-blue-500" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                                    Fetching...
                                </div>
                            </div>
                        `;

                        const locationsListContainer = officeContainer.querySelector('#locations-list-container');
                        const internalSearch = officeContainer.querySelector('#location-search-internal');
                        
                        const locCacheKey = `dole_locs_cache_${office.id}`;
                        let locations = [];
                        
                        // [SPEED-OPTIMIZATION] Try local cache first
                        const locCached = localStorage.getItem(locCacheKey);
                        if (locCached) {
                            try {
                                const { data, timestamp } = JSON.parse(locCached);
                                locations = data;
                            } catch (e) { localStorage.removeItem(locCacheKey); }
                        }

                        const fetchFreshLocs = async () => {
                            let freshLocs = [];
                            if (supabase && isSupabaseMode()) {
                                const { data, error } = await supabase.from('office_locations').select('location').eq('office_id', office.id).order('location');
                                if (!error && data) freshLocs = data;
                            }
                            
                            if (freshLocs.length === 0) {
                                try {
                                    const res = await apiGet(`api/beneficiaries.php?get_office_locations=1&office_id=${office.id}`);
                                    if (res.success && res.data?.success && Array.isArray(res.data.locations)) freshLocs = res.data.locations;
                                } catch (err) { console.error('Office locations fetch failed:', err); }
                            }

                            if (freshLocs.length > 0) {
                                locations = freshLocs;
                                localStorage.setItem(locCacheKey, JSON.stringify({ data: freshLocs, timestamp: Date.now() }));
                                renderLocations(internalSearch.value);
                            }
                        };

                        const renderLocations = (locFilter = '') => {
                            const filtered = locations.filter(l => l.location.toLowerCase().includes(locFilter.toLowerCase()));
                            const trimmed = locFilter.trim();

                            if (filtered.length > 0) {
                                locationsListContainer.innerHTML = filtered.map(l => `
                                    <div class="location-option group/loc px-3 py-1.5 text-[0.5625rem] font-bold ${t.textCourseOpt} ${t.courseHover} rounded-lg cursor-pointer transition-all flex items-center gap-3 active:scale-[0.98] mb-0.5" data-location="${l.location}">
                                        <div class="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600 group-hover/loc:bg-blue-500 transition-all"></div>
                                        <span class="option-text truncate">${l.location}</span>
                                    </div>
                                `).join('');
                            } else if (locations.length === 0) {
                                locationsListContainer.innerHTML = `<div class="px-3 py-4 text-center text-[0.5625rem] font-bold ${t.textLabel} animate-pulse flex items-center justify-center gap-2"><svg class="w-3.5 h-3.5 animate-spin text-blue-500" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>Fetching...</div>`;
                            } else {
                                locationsListContainer.innerHTML = `
                                    <div class="px-3 py-3 text-center text-[0.5625rem] font-bold ${t.textLabel} opacity-60">No matching locations.</div>
                                    ${trimmed ? `
                                    <div class="px-2 pb-2">
                                        <button type="button" id="add-new-location-modal" class="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800/50 text-[0.5625rem] font-black uppercase tracking-widest hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-all active:scale-[0.98] cursor-pointer">
                                            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 4v16m8-8H4"/></svg>
                                            Add "${trimmed}" as location
                                        </button>
                                    </div>` : ''}
                                `;
                                if (trimmed) {
                                    locationsListContainer.querySelector('#add-new-location-modal')?.addEventListener('click', () => {
                                        officeInput.value = `${office.name} - ${trimmed}`;
                                        officeInput.dataset.officeId = office.id;
                                        officeInput.dataset.locationName = trimmed;
                                        officeContainer.classList.add('hidden');
                                        officeInput.dispatchEvent(new Event('change'));
                                    });
                                }
                            }

                            locationsListContainer.querySelectorAll('.location-option').forEach(opt => {
                                opt.addEventListener('click', (e) => {
                                    const location = opt.dataset.location;
                                    officeInput.value = `${office.name} - ${location}`;
                                    officeInput.dataset.officeId = office.id;
                                    officeInput.dataset.locationName = location;
                                    officeContainer.classList.add('hidden');
                                    officeInput.dispatchEvent(new Event('change'));
                                });
                            });
                        };

                        renderLocations(internalSearch.value);
                        fetchFreshLocs(); // Always trigger a background sync
                        setTimeout(() => internalSearch.focus(), 50);
                        internalSearch.addEventListener('input', () => renderLocations(internalSearch.value));
                        internalSearch.addEventListener('click', (e) => e.stopPropagation());

                        officeContainer.querySelector('#back-to-offices').addEventListener('click', (e) => {
                            e.stopPropagation();
                            render('OFFICES');
                        });
                    }
                };

                officeInput.addEventListener('focus', () => {
                    officeContainer.classList.remove('hidden');
                    render(currentView, selectedOffice, officeInput.value);
                });

                officeInput.addEventListener('input', () => {
                    // Manual typing invalidates any dropdown selection — clear tracked ids.
                    delete officeInput.dataset.officeId;
                    delete officeInput.dataset.locationName;
                    currentView = 'OFFICES';
                    selectedOffice = null;
                    officeContainer.classList.remove('hidden');
                    render('OFFICES', null, officeInput.value);
                });

                document.addEventListener('click', (e) => {
                    if (!officeInput.contains(e.target) && !officeContainer.contains(e.target)) {
                        officeContainer.classList.add('hidden');
                        if (!officeInput.value) {
                            currentView = 'OFFICES';
                            selectedOffice = null;
                        }
                    }
                });
            };

            setupOfficeSelector();

            function setupSuggestions(inputId, containerId, optionClass) {
                const input = popup.querySelector(`#${inputId}`);
                const container = popup.querySelector(`#${containerId}`);
                if (!input || !container) return;
                let suppressInputOpen = false;

                input.addEventListener('focus', () => container.classList.remove('hidden'));

                // Hide when filtering if empty or click outside handled by document
                document.addEventListener('click', (e) => {
                    if (!input.contains(e.target) && !container.contains(e.target)) {
                        container.classList.add('hidden');
                    }
                });

                input.addEventListener('input', () => {
                    if (suppressInputOpen) {
                        suppressInputOpen = false;
                        return;
                    }
                    const filter = input.value.toLowerCase();
                    const options = container.querySelectorAll(`.${optionClass}`);
                    let hasVisible = false;
                    options.forEach(opt => {
                        const txtElem = opt.querySelector('.option-text');
                        const txt = (txtElem ? txtElem.innerText : opt.innerText).toLowerCase();
                        if (txt.includes(filter)) {
                            opt.style.display = 'block';
                            hasVisible = true;
                        } else {
                            opt.style.display = 'none';
                        }
                    });
                    // Show/Hide based on matches
                    if (hasVisible) container.classList.remove('hidden');
                    else container.classList.add('hidden');
                });

                container.addEventListener('click', (e) => {
                    const opt = e.target.closest(`.${optionClass}`);
                    if (!opt) return;
                    const txtElem = opt.querySelector('.option-text');
                    input.value = txtElem ? txtElem.innerText.trim() : opt.innerText.trim();
                    suppressInputOpen = true;
                    container.classList.add('hidden');
                    input.dispatchEvent(new Event('change'));
                });
            }

            // --- AUTO-SAVE / DRAFT FEATURE ---
            const form = popup.querySelector('#add-beneficiary-form');
            const draftKey = 'add_beneficiary_draft';

            // Only load draft for NEW entries (not edits) to avoid overwriting real data with old drafts
            if (!isEdit) {
                const draftData = localStorage.getItem(draftKey);
                if (draftData) {
                    try {
                        const parsedDraft = JSON.parse(draftData);
                        Object.entries(parsedDraft).forEach(([name, value]) => {
                            const field = form.elements[name];
                            // Handle cases for radio/checkbox groups if any (currently mostly text/select)
                            if (field && (field.type !== 'file' && field.type !== 'hidden')) {
                                field.value = value;
                            }
                        });
                    } catch (e) {
                        console.error('Error loading draft', e);
                    }
                }
            }

            // Save changes to localStorage
            form.addEventListener('input', (e) => {
                // Don't save if editing existing record (optional, but requested behavior implies saving form state)
                // User said: "Show Add Data Modal... DATA in INPUTS... unless user literally click CANCEL"
                // So we save draft regardless, but maybe use a different key for edit vs add?
                // For simplicity and safety, let's only do it for 'Add' mode so we don't carry over edits to other records.
                if (!isEdit) {
                    const formData = new FormData(form);
                    const obj = {};
                    formData.forEach((value, key) => obj[key] = value);

                    localStorage.setItem(draftKey, JSON.stringify(obj));
                }
            });

            // Form Submission Simulation
            if (form) {
                form.addEventListener('submit', (e) => {
                    e.preventDefault();

                    // Clear previous error states
                    const inputs = form.querySelectorAll('input:not([type="hidden"]), select, textarea');
                    inputs.forEach(input => {
                        input.classList.remove('ring-2', 'ring-red-500', '!border-red-500');
                    });

                    const formData = new FormData(form);
                    let hasError = false;

                    // Helper to mark field as error
                    const markError = (name) => {
                        const el = form.querySelector(`[name="${name}"]`);
                        if (el) {
                            el.classList.add('ring-2', 'ring-red-500', '!border-red-500');
                        }
                        hasError = true;
                    };

                    // Validate Fields
                    const name = formData.get('name');
                    const contact = formData.get('contact');
                    const startDate = formData.get('startDate');
                    const endDate = formData.get('endDate');
                    const designation = (formData.get('designation') || '').trim();

                    // Name validation (required + no numbers)
                    if (!name || name.trim() === "" || /[0-9]/.test(name)) {
                        markError('name');
                    }

                    // Contact validation (optional + numbers only if provided)
                    if (contact && contact.trim() !== "" && /[^0-9]/.test(contact.replace(/[\s\-\+\(\)]/g, ''))) {
                        markError('contact');
                    }

                    // Simple existence checks
                    if (!startDate) markError('startDate');
                    if (!endDate) markError('endDate');
                    // Designation is optional; default to N/A when blank.

                    // Strict Age Validation on Submit
                    const ageVal = formData.get('age');
                    const ageNum = parseInt(ageVal);
                    if (!ageVal || isNaN(ageNum) || ageNum < 18 || ageNum > 29) {
                        hasError = true;
                        if (ageWarning) {
                            ageWarning.className = `mt-1 text-[0.625rem] font-bold flex items-center gap-1.5 animate-pulse ${typeof isDarkMode === 'function' && isDarkMode() ? 'text-red-400' : 'text-red-600'}`;
                        }
                        if (submitBtn) {
                            submitBtn.disabled = true;
                            submitBtn.classList.add('opacity-50', 'cursor-not-allowed', 'grayscale');
                            submitBtn.classList.remove('cursor-pointer', 'active:scale-[0.98]');
                        }
                    }

                    if (hasError) {
                        return;
                    }

                    const beneficiaryData = {};
                    formData.forEach((value, key) => {
                        // Standardize dates to YYYY-MM-DD for backend if they are formatted as MM/DD/YYYY
                        if (['birthday', 'startDate', 'endDate'].includes(key)) {
                            const parsed = window.__parseFormattedDate(value);
                            if (parsed) {
                                const y = parsed.getFullYear();
                                const m = String(parsed.getMonth() + 1).padStart(2, '0');
                                const d = String(parsed.getDate()).padStart(2, '0');
                                beneficiaryData[key] = `${y}-${m}-${d}`;
                            } else {
                                beneficiaryData[key] = value;
                            }
                        } else {
                            beneficiaryData[key] = value;
                        }
                    });
                    if (!designation) {
                        beneficiaryData.designation = 'N/A';
                    }
                    if (!beneficiaryData.replacement) {
                        beneficiaryData.replacement = '';
                    }

                    // Inject resolved office_id + location from the dropdown selection.
                    // These let the backend skip office lookup and upsert the location directly.
                    const offInputEl = popup.querySelector('#office-input');
                    if (offInputEl?.dataset.officeId) beneficiaryData.officeId = offInputEl.dataset.officeId;
                    if (offInputEl?.dataset.locationName) beneficiaryData.locationName = offInputEl.dataset.locationName;

                    // Prepare ID logic
                    const gipIdInput = popup.querySelector('#full-id-input')?.value;

                    if (isEdit) {
                        // In edit mode, 'id' is for identifying the record to update
                        beneficiaryData.id = data?.id; // Original ID
                        if (gipIdInput) {
                            beneficiaryData.gip_id = gipIdInput; // Potential new GIP ID
                        }
                    } else {
                        // In add mode, 'id' determines PUT vs POST in ldngip.js
                        // We set it to null to force POST
                        beneficiaryData.id = null;
                        if (gipIdInput) {
                            beneficiaryData.gip_id = gipIdInput; // Preferred ID
                        }
                    }

                    // Call the simulation function from LDNgip.js
                    if (window.addBeneficiaryData) {
                        (async () => {
                            const success = await window.addBeneficiaryData(beneficiaryData);

                            if (success) {
                                // Clear draft EXCEPT for Office and Nature of Work for convenience
                                if (!isEdit) {
                                    const draftKey = 'add_beneficiary_draft';
                                    const currentOffice = form.querySelector('[name="office"]')?.value || '';
                                    const currentWork = form.querySelector('[name="designation"]')?.value || '';
                                    const currentEducation = form.querySelector('[name="education"]')?.value || '';
                                    
                                    localStorage.setItem(draftKey, JSON.stringify({
                                        office: currentOffice,
                                        designation: currentWork,
                                        education: currentEducation
                                    }));
                                }

                                // 1. Close the main input modal first
                                Swal.close();

                                // 2. Show the toast AFTER the main modal is closed
                                // We use a tiny delay to ensure the modal closing animation doesn't interfere
                                setTimeout(() => {
                                    Swal.fire({
                                        toast: true,
                                        position: 'top-end',
                                        icon: 'success',
                                        title: `Record ${isEdit ? 'Updated' : 'Added'} Successfully`,
                                        showConfirmButton: false,
                                        timer: 3000,
                                        timerProgressBar: true
                                    });
                                    if (!isEdit && data?._isBulk) {
                                        BulkApp.onSaveSuccess();
                                    }
                                }, 100);
                            } else {
                                Swal.fire({
                                    icon: 'error',
                                    title: 'Save Failed',
                                    text: 'There was an error saving the record to the database.'
                                });
                            }
                        })();
                    }
                });
            }
        }
    });
}

// Helpers for Color Tags
function getOfficeColor(office) {
    const map = {
        'DOLE': 'bg-blue-100 text-blue-700 border-blue-200',
        'LGU': 'bg-purple-100 text-purple-700 border-purple-200',
        'DEPED': 'bg-orange-100 text-orange-700 border-orange-200',
        'DICT': 'bg-cyan-100 text-cyan-700 border-cyan-200',
        'PCA': 'bg-green-100 text-green-700 border-green-200'
    };
    // Simple substring matching or fallback
    for (const key in map) {
        if (office && office.toUpperCase().includes(key)) return map[key];
    }
    return 'bg-gray-100 text-gray-600 border-gray-200';
}

function getStatusColor(status) {
    if (!status) return 'bg-gray-100 text-gray-600';
    if (status.toUpperCase() === 'ONGOING') return 'bg-green-100 text-green-700 border-green-200';
    if (status.toUpperCase() === 'EXPIRED') return 'bg-red-100 text-red-700 border-red-200';
    if (status.toUpperCase() === 'RESIGNED') return 'bg-neutral-800 text-white border-neutral-900';
    if (status.toUpperCase() === 'ABSORBED') return 'bg-green-600 text-white border-green-700';
    return 'bg-gray-100 text-gray-600';
}

/**
 * Helper to show toast notifications WITHOUT closing open SweetAlert2 modals
 */
function showToastOverlap(message, icon = 'success') {
    const toast = document.createElement('div');
    toast.className = 'fixed top-5 right-5 z-[50000] flex items-center gap-3 bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 rounded-2xl p-4 shadow-2xl animate-toast-in min-w-[280px] pointer-events-none select-none transition-all';

    const iconConfigs = {
        success: {
            colors: 'bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 border-green-100 dark:border-green-800/30',
            path: 'M5 13l4 4L19 7',
            label: 'Success'
        },
        error: {
            colors: 'bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 border-red-100 dark:border-red-800/30',
            path: 'M6 18L18 6M6 6l12 12',
            label: 'Error'
        },
        info: {
            colors: 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border-blue-100 dark:border-blue-800/30',
            path: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
            label: 'Info'
        }
    };

    const config = iconConfigs[icon] || iconConfigs.success;

    toast.innerHTML = `
        <div class="w-10 h-10 rounded-xl ${config.colors} flex items-center justify-center border shadow-sm">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="${config.path}" /></svg>
        </div>
        <div class="flex flex-col">
            <span class="text-[0.625rem] font-black text-gray-400 dark:text-slate-500 uppercase tracking-widest leading-none mb-1">${config.label}</span>
            <span class="text-[0.8125rem] font-black text-gray-700 dark:text-white leading-tight">${message}</span>
        </div>
    `;

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(-20px) scale(0.95)';
        toast.style.transition = 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
        setTimeout(() => toast.remove(), 500);
    }, 2500);
}

/**
 * CONTACT FORM HANDLER - FORMSUBMIT.CO
 * This function intercepts the contact form submission on the 'About Me' page.
 * It sends the data asynchronously to formsubmit.co and shows a SweetAlert2
 * toast notification instead of redirecting the user.
 */
window.handleContactSubmit = async function (event) {
    event.preventDefault();
    const form = event.target;
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalBtnContent = submitBtn.innerHTML;

    // Show loading state on button
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
        <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        Sending...
    `;

    try {
        const formData = new FormData(form);
        const response = await fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            // SUCCESS: Show SweetAlert2 Toast
            Swal.fire({
                toast: true,
                position: 'top-end',
                icon: 'success',
                title: 'Message Sent Successfully!',
                text: 'Thank you for reaching out. I will get back to you soon!',
                showConfirmButton: false,
                timer: 4000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer);
                    toast.addEventListener('mouseleave', Swal.resumeTimer);
                },
                customClass: {
                    popup: 'rounded-2xl border-l-4 border-teal-500 shadow-2xl'
                }
            });
            form.reset();
        } else {
            throw new Error('Failed to send');
        }
    } catch (error) {
        // ERROR: Show Error Toast
        Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'error',
            title: 'Oops! Something went wrong.',
            text: 'Could not send your message. Please try again later.',
            showConfirmButton: false,
            timer: 4000,
            customClass: {
                popup: 'rounded-2xl border-l-4 border-red-500 shadow-2xl'
            }
        });
    } finally {
        // Restore button state
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnContent;
    }

    return false;
};
