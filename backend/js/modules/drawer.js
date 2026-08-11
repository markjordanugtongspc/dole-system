import { getBasePath } from './auth.js';
import { isDarkMode } from './darkmode.js';
import { apiPost, apiPut, apiRequest } from './ajax-manager.js';
import { generateExcelExport } from './logs-export.js';
import Swal from 'sweetalert2';

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

function formatContractDate(dStr) {
    if (!dStr || dStr === 'N/A') return 'N/A';
    const parts = String(dStr).split('/');
    if (parts.length === 3) {
        const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
        const m = parseInt(parts[0], 10);
        if (m >= 1 && m <= 12) return `${months[m - 1]} ${parts[1].padStart(2, '0')}, ${parts[2]}`;
    }
    const isoParts = String(dStr).split('-');
    if (isoParts.length === 3 && isoParts[0].length === 4) {
        const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
        const m = parseInt(isoParts[1], 10);
        if (m >= 1 && m <= 12) return `${months[m - 1]} ${isoParts[2].padStart(2, '0')}, ${isoParts[0]}`;
    }
    return String(dStr).toUpperCase();
}

// START: getOfficeClass - Returns dynamic CSS styling classes for office badges in drawer views
function getOfficeClass(office, isSelected = true) {
    if (!office || office === 'N/A') {
        return isSelected
            ? 'bg-gray-800 text-white font-black border-gray-900 shadow-md dark:bg-gray-100 dark:text-gray-900'
            : 'bg-gray-100 text-gray-700 border border-gray-200 dark:!text-white';
    }
    const u = office.toUpperCase().trim();

    let colors = {
        inactive: 'bg-gray-100 text-gray-700 border border-gray-200 dark:!text-white',
        active: 'bg-royal-blue text-white font-black border-blue-800 shadow-md'
    };

    if (u === 'LDNPFO' || u.startsWith('LDNPFO')) {
        // LDNPFO = Primary Solid Blue (Active) | Soft Blue (Inactive)
        colors = {
            inactive: 'bg-blue-100 text-blue-800 border border-blue-200 dark:!text-white',
            active: 'bg-royal-blue text-white font-black border-blue-800 shadow-md'
        };
    } else if (u.includes('BOT')) {
        // 1: BOT = Yellow Solid Color (Active) | Soft Yellow (Inactive)
        colors = {
            inactive: 'bg-amber-100 text-amber-800 border border-amber-200 dark:!text-white',
            active: 'bg-amber-400 text-slate-900 font-black border-amber-500 shadow-md'
        };
    } else if (u.includes('DICT')) {
        // 2: DICT = Red Solid Color (Active) | Soft Red (Inactive)
        colors = {
            inactive: 'bg-red-100 text-red-700 border border-red-200 dark:!text-white',
            active: 'bg-red-600 text-white font-black border-red-700 shadow-md'
        };
    } else if (u.includes('NLRC')) {
        // 4: NLRC = Primary Color (Active) | Soft Primary Tint (Inactive)
        colors = {
            inactive: 'bg-blue-50 text-blue-700 border border-blue-100 dark:!text-white',
            active: 'bg-royal-blue text-white font-black border-blue-800 shadow-md'
        };
    } else if (u.includes('PCUP')) {
        // 5: PCUP = Navy Blue (Active) | Soft Navy/Indigo (Inactive)
        colors = {
            inactive: 'bg-indigo-100 text-indigo-900 border border-indigo-200 dark:!text-white',
            active: 'bg-indigo-900 text-white font-black border-indigo-950 shadow-md'
        };
    } else if (u.includes('BACOLOD')) {
        // 6: PESO - BACOLOD = Dark Red (Active) | Soft Rose (Inactive)
        colors = {
            inactive: 'bg-rose-100 text-rose-900 border border-rose-200 dark:!text-white',
            active: 'bg-red-900 text-white font-black border-red-950 shadow-md'
        };
    } else if (u.includes('BALO-I') || u.includes('BALOI')) {
        // 7: PESO - BALO-I = Sky Blue (Active) | Faded Sky (Inactive)
        colors = {
            inactive: 'bg-sky-100 text-sky-700 border border-sky-200 dark:!text-white',
            active: 'bg-sky-500 text-white font-black border-sky-600 shadow-md'
        };
    } else if (u.includes('BAROY')) {
        // 8: PESO - BAROY = Faded Blue Color / Slate Blue (Active) | Light Faded Slate (Inactive)
        colors = {
            inactive: 'bg-slate-100 text-slate-700 border border-slate-200 dark:!text-white',
            active: 'bg-slate-600 text-white font-black border-slate-700 shadow-md'
        };
    } else if (u.includes('ILIGAN')) {
        // 9: PESO - ILIGAN = Slight Faded Brown / Warm Stone (Active) | Light Warm Brown (Inactive)
        colors = {
            inactive: 'bg-amber-100 text-amber-900 border border-amber-200 dark:!text-white',
            active: 'bg-amber-800 text-white font-black border-amber-900 shadow-md'
        };
    } else if (u.includes('KAUSWAGAN')) {
        // 10: PESO - KAUSWAGAN = Gradient Sky Pink (Active) | Soft Pink Tint (Inactive)
        colors = {
            inactive: 'bg-pink-50 text-pink-700 border border-pink-200 dark:!text-white',
            active: 'bg-gradient-to-r from-sky-400 to-pink-500 text-white font-black border-pink-500 shadow-md'
        };
    } else if (u.includes('KOLAMBUGAN')) {
        // 11: PESO - KOLAMBUGAN = Dark Green (Active) | Soft Emerald (Inactive)
        colors = {
            inactive: 'bg-emerald-100 text-emerald-900 border border-emerald-200 dark:!text-white',
            active: 'bg-emerald-900 text-white font-black border-emerald-950 shadow-md'
        };
    } else if (u.includes('LINAMON')) {
        colors = {
            inactive: 'bg-purple-100 text-purple-700 border border-purple-200 dark:!text-white',
            active: 'bg-purple-600 text-white font-black border-purple-700 shadow-md'
        };
    } else if (u.includes('MAGSAYSAY')) {
        colors = {
            inactive: 'bg-cyan-100 text-cyan-700 border border-cyan-200 dark:!text-white',
            active: 'bg-cyan-600 text-white font-black border-cyan-700 shadow-md'
        };
    } else if (u.includes('MAIGO')) {
        colors = {
            inactive: 'bg-blue-100 text-blue-700 border border-blue-200 dark:!text-white',
            active: 'bg-blue-600 text-white font-black border-blue-700 shadow-md'
        };
    } else if (u.includes('MATUNGAO')) {
        colors = {
            inactive: 'bg-violet-100 text-violet-700 border border-violet-200 dark:!text-white',
            active: 'bg-violet-600 text-white font-black border-violet-700 shadow-md'
        };
    } else if (u.includes('NUNUNGAN')) {
        colors = {
            inactive: 'bg-indigo-100 text-indigo-700 border border-indigo-200 dark:!text-white',
            active: 'bg-indigo-600 text-white font-black border-indigo-700 shadow-md'
        };
    } else if (u.includes('PANTAO')) {
        colors = {
            inactive: 'bg-orange-100 text-orange-700 border border-orange-200 dark:!text-white',
            active: 'bg-orange-600 text-white font-black border-orange-700 shadow-md'
        };
    } else if (u.includes('PANTAR')) {
        colors = {
            inactive: 'bg-amber-100 text-amber-700 border border-amber-200 dark:!text-white',
            active: 'bg-amber-500 text-white font-black border-amber-600 shadow-md'
        };
    } else if (u.includes('POONA')) {
        colors = {
            inactive: 'bg-fuchsia-100 text-fuchsia-700 border border-fuchsia-200 dark:!text-white',
            active: 'bg-fuchsia-600 text-white font-black border-fuchsia-700 shadow-md'
        };
    } else if (u.includes('SALVADOR')) {
        colors = {
            inactive: 'bg-rose-100 text-rose-700 border border-rose-200 dark:!text-white',
            active: 'bg-rose-600 text-white font-black border-rose-700 shadow-md'
        };
    } else if (u.includes('SAPAD')) {
        colors = {
            inactive: 'bg-lime-100 text-lime-700 border border-lime-200 dark:!text-white',
            active: 'bg-lime-600 text-white font-black border-lime-700 shadow-md'
        };
    } else if (u.includes('SND')) {
        colors = {
            inactive: 'bg-red-100 text-red-700 border border-red-200 dark:!text-white',
            active: 'bg-red-700 text-white font-black border-red-800 shadow-md'
        };
    } else if (u.includes('TAGOLOAN')) {
        colors = {
            inactive: 'bg-green-100 text-green-700 border border-green-200 dark:!text-white',
            active: 'bg-green-600 text-white font-black border-green-700 shadow-md'
        };
    } else if (u.includes('TANGCAL')) {
        colors = {
            inactive: 'bg-purple-100 text-purple-800 border border-purple-200 dark:!text-white',
            active: 'bg-purple-800 text-white font-black border-purple-900 shadow-md'
        };
    } else if (u.includes('TUBOD')) {
        colors = {
            inactive: 'bg-emerald-100 text-emerald-700 border border-emerald-200 dark:!text-white',
            active: 'bg-emerald-600 text-white font-black border-emerald-700 shadow-md'
        };
    } else if (u.includes('PGLDN')) {
        colors = {
            inactive: 'bg-sky-100 text-sky-700 border border-sky-200 dark:!text-white',
            active: 'bg-sky-600 text-white font-black border-sky-700 shadow-md'
        };
    } else if (u.includes('PRC')) {
        colors = {
            inactive: 'bg-pink-100 text-pink-700 border border-pink-200 dark:!text-white',
            active: 'bg-pink-600 text-white font-black border-pink-700 shadow-md'
        };
    } else if (u.includes('SSS')) {
        colors = {
            inactive: 'bg-blue-100 text-blue-800 border border-blue-200 dark:!text-white',
            active: 'bg-blue-800 text-white font-black border-blue-900 shadow-md'
        };
    } else {
        const colorPairs = [
            { inactive: 'bg-purple-100 text-purple-700 border border-purple-200 dark:!text-white', active: 'bg-purple-600 text-white font-black border-purple-700 shadow-md' },
            { inactive: 'bg-rose-100 text-rose-700 border border-rose-200 dark:!text-white', active: 'bg-rose-600 text-white font-black border-rose-700 shadow-md' },
            { inactive: 'bg-amber-100 text-amber-700 border border-amber-200 dark:!text-white', active: 'bg-amber-500 text-white font-black border-amber-600 shadow-md' },
            { inactive: 'bg-teal-100 text-teal-700 border border-teal-200 dark:!text-white', active: 'bg-teal-600 text-white font-black border-teal-700 shadow-md' },
            { inactive: 'bg-indigo-100 text-indigo-700 border border-indigo-200 dark:!text-white', active: 'bg-indigo-600 text-white font-black border-indigo-700 shadow-md' },
            { inactive: 'bg-emerald-100 text-emerald-700 border border-emerald-200 dark:!text-white', active: 'bg-emerald-600 text-white font-black border-emerald-700 shadow-md' },
            { inactive: 'bg-sky-100 text-sky-700 border border-sky-200 dark:!text-white', active: 'bg-sky-500 text-white font-black border-sky-600 shadow-md' },
        ];
        let hash = 0;
        for (let i = 0; i < u.length; i++) hash = (hash * 31 + u.charCodeAt(i)) >>> 0;
        colors = colorPairs[hash % colorPairs.length];
    }

    return isSelected ? colors.active : colors.inactive;
}
// END: getOfficeClass - Returns dynamic CSS styling classes for office badges in drawer views

function getStatusClass(status) {
    if (!status) return 'bg-red-600 text-white border-red-700 dark:bg-red-700 dark:border-red-800';
    const s = status.toUpperCase();
    if (s === 'ONGOING' || s === 'ABSORBED') return 'bg-emerald-600 text-white border-emerald-700 dark:bg-emerald-700 dark:border-emerald-800';
    return 'bg-red-600 text-white border-red-700 dark:bg-red-700 dark:border-red-800';
}

const DRAWER_EMPLOYMENT_DETAILS_KEY = 'gip-drawer-employment-details-expanded';

class BeneficiaryDrawerViewController {
    // START: Initialize the drawer page navigation and persisted employment-details accordion.
    constructor(root, initialPage, maxPage) {
        this.root = root;
        this.maxPage = maxPage;
        this.currentPage = Math.min(Math.max(Number(initialPage) || 0, 0), maxPage);
        this.prevButton = root.querySelector('#drawer-prev-btn');
        this.nextButton = root.querySelector('#drawer-next-btn');
        this.detailsButton = root.querySelector('#drawer-employment-details-toggle');
        this.detailsPanel = root.querySelector('#drawer-employment-details-panel');
        this.detailsIcon = root.querySelector('#drawer-employment-details-icon');
        this.pageTitles = ['Personal Profile', 'Submission Logs', 'Required Documents'];
    }
    // END: Initialize the drawer page navigation and persisted employment-details accordion.

    // START: Read the user's saved accordion preference, defaulting to collapsed.
    getSavedDetailsState() {
        try {
            return localStorage.getItem(DRAWER_EMPLOYMENT_DETAILS_KEY) === 'true';
        } catch (error) {
            return false;
        }
    }
    // END: Read the user's saved accordion preference, defaulting to collapsed.

    // START: Save the user's accordion preference for future drawer sessions.
    saveDetailsState(isExpanded) {
        try {
            localStorage.setItem(DRAWER_EMPLOYMENT_DETAILS_KEY, String(isExpanded));
        } catch (error) {
            // Storage can be unavailable in privacy-restricted browser sessions.
        }
    }
    // END: Save the user's accordion preference for future drawer sessions.

    // START: Apply accordion visibility, accessibility state, and chevron rotation.
    setDetailsExpanded(isExpanded, shouldPersist = false) {
        if (!this.detailsButton || !this.detailsPanel) return;

        this.detailsButton.setAttribute('aria-expanded', String(isExpanded));
        this.detailsPanel.classList.toggle('hidden', !isExpanded);
        this.detailsIcon?.classList.toggle('rotate-180', isExpanded);

        if (shouldPersist) this.saveDetailsState(isExpanded);
    }
    // END: Apply accordion visibility, accessibility state, and chevron rotation.

    // START: Display the active page and completely hide unavailable navigation actions.
    renderNavigation() {
        this.root.querySelectorAll('[id^=drawer-page-]').forEach((page, index) => {
            page.classList.toggle('hidden', index !== this.currentPage);
        });

        const sectionTitle = this.root.querySelector('#drawer-section-title');
        if (sectionTitle) sectionTitle.textContent = this.pageTitles[this.currentPage];

        const profileSection = this.root.querySelector('#personal-profile-section');
        profileSection?.classList.toggle('hidden', this.currentPage !== 0);

        this.prevButton?.classList.toggle('hidden', this.currentPage === 0);
        this.nextButton?.classList.toggle('hidden', this.currentPage === this.maxPage);
    }
    // END: Display the active page and completely hide unavailable navigation actions.

    // START: Move to a valid drawer page and refresh the navigation controls.
    goToPage(nextPage) {
        this.currentPage = Math.min(Math.max(nextPage, 0), this.maxPage);
        this.renderNavigation();
    }
    // END: Move to a valid drawer page and refresh the navigation controls.

    // START: Bind navigation and accordion controls after the dynamic drawer is rendered.
    bind() {
        this.prevButton?.addEventListener('click', () => this.goToPage(this.currentPage - 1));
        this.nextButton?.addEventListener('click', () => this.goToPage(this.currentPage + 1));
        this.detailsButton?.addEventListener('click', () => {
            const isExpanded = this.detailsButton.getAttribute('aria-expanded') === 'true';
            this.setDetailsExpanded(!isExpanded, true);
        });

        this.setDetailsExpanded(this.getSavedDetailsState());
        this.renderNavigation();
    }
    // END: Bind navigation and accordion controls after the dynamic drawer is rendered.
}

// START: Create reusable animated rows for database-backed drawer loading states.
function createDrawerSkeletonRows(count = 3) {
    return Array.from({ length: count }, (_, index) => `
        <div class="skeleton-wave border border-gray-100 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-800" aria-hidden="true">
            <div class="h-2.5 ${index % 2 === 0 ? 'w-2/5' : 'w-1/3'} rounded-full bg-gray-200 dark:bg-slate-700"></div>
            <div class="mt-3 h-3.5 ${index % 2 === 0 ? 'w-4/5' : 'w-3/5'} rounded-full bg-gray-300 dark:bg-slate-600"></div>
        </div>
    `).join('');
}
// END: Create reusable animated rows for database-backed drawer loading states.

// Keep profile labels stable while only database-backed values shimmer.
function createProfileSkeletonRows() {
    const labels = ['Contact No.', 'Address', 'Birthday', 'Age', 'Gender', 'Education', 'Designated Beneficiary', 'Relationship to Assured'];
    return labels.map((label, index) => `
        <div class="grid grid-cols-[8.5rem_minmax(0,1fr)] items-center gap-4">
            <span class="whitespace-nowrap font-medium text-gray-500">${label}</span>
            <span class="skeleton-wave block h-3.5 ${index % 3 === 0 ? 'w-2/3' : index % 3 === 1 ? 'w-full' : 'w-1/2'} rounded-full bg-gray-200 dark:bg-slate-700" aria-hidden="true"></span>
        </div>
    `).join('');
}

async function saveDrawerLog(type, payload) {
    // Writes go through the authenticated server route. The browser uses Supabase
    // Realtime to receive the resulting database change without a cache refresh.
    const result = await apiPost(`api/logs.php?type=${encodeURIComponent(type)}`, payload);
    const response = result.success ? result.data : null;

    if (!result.success || !response?.success) {
        const message = response?.error || result.error || 'The log could not be saved.';
        console.error('[GIP Logs] Save failed', { type, gipId: payload.gip_id, message });
        return { success: false, error: message };
    }

    console.info('[GIP Logs] Saved to database', { type, gipId: payload.gip_id, id: response.id });
    return result;
}
export function showBeneficiaryDrawer(data, initialPage = 0) {
    const isProfileLoading = Boolean(data?._isLoadingProfile);
    const isLogsLoading = Boolean(data?._isLoadingLogs);
    data = {
        ...data,
        id: data?.id || data?.gip_id || 'N/A',
        name: data?.name || 'N/A',
        office: data?.office || 'N/A',
        remarks: data?.remarks || 'N/A',
        designation: data?.designation || 'N/A',
        designatedBeneficiary: data?.designatedBeneficiary || 'N/A',
        relationshipToAssured: data?.relationshipToAssured || 'N/A'
    };
    // Use logs and docs fetched from database
    const arLogs = data.arLogs || [];
    const dtrLogs = data.dtrLogs || [];
    const dbDocs = data.docs || [];

    // Merge default required documents with database records
    const defaultDocs = ['GIP FORM', 'BIRTH CERTIFICATE', 'DIPLOMA', 'TOR', 'VALID ID'];
    const displayDocs = defaultDocs.map(name => {
        const found = dbDocs.find(d => d.name.toUpperCase() === name.toUpperCase());
        return found ? found : { name, status: 'PENDING', id: null };
    });

    dbDocs.forEach(d => {
        const isDefault = defaultDocs.some(defName => defName.toUpperCase() === d.name.toUpperCase());
        if (!isDefault) displayDocs.push(d);
    });

    const drawerHtml = `
<div class="pb-4 mb-4 flex flex-col relative w-full pt-3 font-montserrat user-select-none">
    <div class="flex min-h-11 items-center justify-between border-b border-default pb-4 pe-14">
        <h3 class="text-xl sm:text-2xl font-black text-heading leading-tight tracking-tight">GIP Information</h3>
        <button type="button" id="close-drawer-btn" class="group absolute top-0.5 right-0 z-50 flex size-11 cursor-pointer items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 shadow-sm transition-all duration-200 hover:border-red-200 hover:bg-red-50 hover:text-red-600 active:scale-95 dark:border-slate-700 dark:bg-slate-800 dark:text-gray-300 dark:hover:border-red-800 dark:hover:bg-red-950/60 dark:hover:text-red-300">
           <svg class="w-6 h-6 transition-transform duration-200 group-hover:rotate-90" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.25" d="M6 18 17.94 6M18 18 6.06 6"/></svg>
           <span class="sr-only">Close drawer</span>
        </button>
    </div>

    <div class="mt-5 min-w-0">
        ${isProfileLoading ? `
            <div class="skeleton-wave" aria-label="Loading beneficiary profile" role="status">
                <div class="h-5 w-3/5 rounded-full bg-gray-300 dark:bg-slate-700"></div>
                <div class="mt-2 h-5 w-24 rounded-full border border-dashed border-gray-300 bg-gray-100 dark:border-slate-600 dark:bg-slate-800"></div>
                <span class="sr-only">Loading beneficiary profile</span>
            </div>
        ` : `
            <p class="text-lg sm:text-xl font-black text-royal-blue dark:text-blue-300 leading-tight tracking-tight break-words">${data.name}</p>
            <span class="mt-2 inline-flex max-w-full items-center gap-1.5 truncate rounded-full border border-dashed border-royal-blue/30 bg-blue-50/50 px-2.5 py-1 text-[0.5625rem] font-black uppercase tracking-wider text-royal-blue dark:border-blue-700 dark:bg-blue-950/40 dark:text-blue-200">
                <span class="size-1.5 shrink-0 rounded-full bg-golden-yellow" aria-hidden="true"></span>
                ${data.id}
            </span>
        `}
    </div>

    <div class="mt-5 grid w-full grid-cols-2 gap-x-2.5 sm:gap-x-3">
        <div class="min-w-0">
            <span class="mb-1.5 block text-[0.5625rem] font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">Remarks</span>
            ${isProfileLoading
                ? '<span class="skeleton-wave block h-8 w-full border border-gray-200 bg-gray-200 dark:border-slate-700 dark:bg-slate-700"></span>'
                : `<span class="${getStatusClass(data.remarks)} block min-h-8 w-full truncate border border-l-4 ${data.remarks === 'ONGOING' || data.remarks === 'ABSORBED' ? 'border-l-emerald-600 dark:border-l-emerald-500' : 'border-l-red-600 dark:border-l-red-500'} px-2 py-1.5 text-center text-[0.5625rem] font-black uppercase tracking-wider shadow-sm" title="${data.remarks}">${data.remarks}</span>`}
        </div>
        <div class="min-w-0">
            <span class="mb-1.5 block text-[0.5625rem] font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">Office</span>
            ${isProfileLoading
                ? '<span class="skeleton-wave block h-8 w-full border border-gray-200 bg-gray-200 dark:border-slate-700 dark:bg-slate-700"></span>'
                : `<span class="${getOfficeClass(data.office, true)} block min-h-8 w-full truncate border border-l-4 px-2 py-1.5 text-center text-[0.5625rem] font-black uppercase tracking-wider shadow-sm" title="${data.office}">${data.office}</span>`}
        </div>
    </div>
</div>

<!-- Persistent Section Header with Responsive Nav Buttons -->
<div class="flex justify-between items-end gap-3 mb-4 border-y border-default pt-2">
    <h4 id="drawer-section-title" class="mb-2 border-b-2 border-brand pb-1.5 text-sm font-bold text-heading uppercase tracking-widest">Personal Profile</h4>
    <div class="flex shrink-0 gap-2 pb-3">
        <button type="button" id="drawer-prev-btn" class="hidden flex min-h-9 items-center justify-center gap-1.5 rounded-lg border border-default-medium bg-neutral-secondary-medium px-4 py-2 text-[0.5625rem] font-black uppercase tracking-widest text-heading shadow-sm transition-all hover:border-red-200 hover:bg-red-50 hover:text-red-600 active:scale-95 active:bg-red-100 dark:hover:border-red-800 dark:hover:bg-red-950/60 dark:hover:text-red-300 cursor-pointer">
            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M15 19l-7-7 7-7"/></svg>
            PREV
        </button>
        <button type="button" id="drawer-next-btn" class="flex min-h-9 items-center justify-center gap-1.5 rounded-lg border border-transparent bg-brand px-4 py-2 text-center text-[0.5625rem] font-black uppercase tracking-widest text-white shadow-sm shadow-brand-medium/50 transition-all hover:bg-brand-strong active:scale-95 cursor-pointer">
            NEXT
            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7"/></svg>
        </button>
    </div>
</div>

<div id="personal-profile-section" class="transition-all duration-300">
    <div class="flex flex-col gap-4 sm:gap-y-4.5 text-sm mt-3 px-1 mb-8">
        ${isProfileLoading ? createProfileSkeletonRows() : `
        <div class="flex justify-between items-center gap-4 group sm:grid sm:grid-cols-[8.5rem_minmax(0,1fr)]">
            <span class="text-gray-500 font-medium whitespace-nowrap">Contact No.</span>
            <span class="${data.contact ? 'font-black text-heading font-mono' : 'font-bold text-gray-300 italic'} min-w-0 truncate text-right sm:text-left">${data.contact || 'NOT PROVIDED'}</span>
        </div>
        <div class="flex justify-between items-start gap-4 group sm:grid sm:grid-cols-[8.5rem_minmax(0,1fr)]">
            <span class="text-gray-500 font-medium whitespace-nowrap mt-1 sm:mt-0">Address</span>
            <span class="min-w-0 font-bold text-heading text-right sm:text-left break-words whitespace-normal leading-relaxed" title="${data.address}">${data.address || 'N/A'}</span>
        </div>
        <div class="flex justify-between items-center gap-4 group sm:grid sm:grid-cols-[8.5rem_minmax(0,1fr)]">
            <span class="text-gray-500 font-medium whitespace-nowrap">Birthday</span>
            <span class="${data.birthday ? 'font-black text-heading uppercase' : 'font-bold text-gray-300 italic'} text-right sm:text-left">${data.birthday || 'N/A'}</span>
        </div>
        <div class="flex justify-between items-center gap-4 group sm:grid sm:grid-cols-[8.5rem_minmax(0,1fr)]">
            <span class="text-gray-500 font-medium whitespace-nowrap">Age</span>
            <span class="${(data.age || calculateAge(data.birthday)) ? 'font-black text-heading' : 'font-bold text-gray-300 italic'} text-right sm:text-left">${data.age || calculateAge(data.birthday) || 'N/A'}</span>
        </div>
        <div class="flex justify-between items-center gap-4 group sm:grid sm:grid-cols-[8.5rem_minmax(0,1fr)]">
            <span class="text-gray-500 font-medium whitespace-nowrap">Gender</span>
            <span class="font-black text-heading uppercase text-right sm:text-left">${data.gender || 'N/A'}</span>
        </div>
        <div class="flex justify-between items-center gap-4 group pt-1 mt-0 border-t border-gray-50 dark:border-slate-800/60 sm:grid sm:grid-cols-[8.5rem_minmax(0,1fr)]">
            <span class="text-gray-500 font-medium whitespace-nowrap">Education</span>
            <div class="flex items-center gap-2 max-w-[60%] justify-end shrink-0 min-w-0 sm:max-w-full sm:justify-start">
                <span class="text-[0.6875rem] lg:text-sm font-black text-heading whitespace-nowrap tracking-tight truncate" title="${data.education}">${data.education || 'N/A'}</span>
                <div class="w-6 h-6 rounded bg-golden-yellow/10 flex items-center justify-center text-golden-yellow border border-golden-yellow/20 shrink-0">
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/></svg>
                </div>
            </div>
        </div>
        <div class="flex justify-between items-start gap-5 group pt-3 mt-1 border-t border-gray-50 dark:border-slate-800/60 sm:grid sm:grid-cols-[11.5rem_minmax(0,1fr)]">
            <span class="text-gray-500 font-medium whitespace-nowrap mt-1 sm:mt-0">Designated Beneficiary</span>
            <span class="${data.designatedBeneficiary !== 'N/A' ? 'font-black text-heading' : 'font-bold text-gray-300 italic'} max-w-[52%] text-right wrap-break-word leading-snug uppercase sm:max-w-full sm:pl-2 sm:text-left">${data.designatedBeneficiary}</span>
        </div>
        <div class="flex justify-between items-center gap-5 group sm:grid sm:grid-cols-[11.5rem_minmax(0,1fr)]">
            <span class="text-gray-500 font-medium whitespace-nowrap">Relationship to Assured</span>
            <span class="${data.relationshipToAssured !== 'N/A' ? 'font-black text-[#2e7d32] dark:text-green-400' : 'font-bold text-gray-300 italic'} max-w-[52%] text-right uppercase sm:max-w-full sm:pl-2 sm:text-left">${data.relationshipToAssured}</span>
        </div>
        `}
    </div>
</div>

<!-- Container for right grid from modal -->
<div class="relative">
    <!-- Pages Container -->
    <div id="drawer-page-0" class="flex-1 flex flex-col gap-4">
        <button type="button" id="drawer-employment-details-toggle" class="group flex min-h-14 w-full cursor-pointer items-center justify-between gap-4 border-y border-default bg-transparent py-4 text-left transition-colors hover:bg-gray-50/70 dark:hover:bg-slate-800/50" aria-expanded="false" aria-controls="drawer-employment-details-panel">
            <span>
                <span class="block text-base sm:text-lg font-black text-heading tracking-tight">Employment Details</span>
                <span class="mt-1 block text-[0.5625rem] sm:text-[0.625rem] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">Registry, assignment and history</span>
            </span>
            <span class="flex size-10 sm:size-11 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 shadow-sm transition-colors group-hover:border-royal-blue/30 group-hover:text-royal-blue dark:border-slate-700 dark:bg-slate-800 dark:text-gray-300 dark:group-hover:border-blue-700 dark:group-hover:text-blue-300">
                <svg id="drawer-employment-details-icon" class="h-4 w-4 transition-transform duration-300" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="m6 9 6 6 6-6"/></svg>
            </span>
        </button>
        <div id="drawer-employment-details-panel" class="hidden flex flex-col gap-3 pt-1 font-montserrat">
            <!-- Contract Duration / Period Card -->
            <div class="bg-gradient-to-br from-blue-50/60 via-gray-50/50 to-indigo-50/40 dark:from-slate-800/80 dark:via-slate-800/50 dark:to-slate-900/60 rounded-xl p-4 border border-blue-100/80 dark:border-slate-700/80 shadow-sm w-full transition-all">
                <div class="flex items-center justify-between border-b border-blue-100/60 dark:border-slate-700/60 pb-2.5 mb-3">
                    <p class="text-[0.5625rem] uppercase tracking-widest text-royal-blue dark:text-blue-400 font-black flex items-center gap-1.5">
                        <svg class="w-3.5 h-3.5 text-royal-blue dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                        </svg>
                        Contract Period
                    </p>
                    <span class="inline-flex items-center px-2 py-0.5 rounded-full text-[0.5625rem] font-bold uppercase tracking-wider bg-blue-100 text-royal-blue dark:bg-blue-950/60 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                        GIP Duration
                    </span>
                </div>
                <div class="grid grid-cols-2 gap-3">
                    <!-- Start Date (Color Coded: Emerald Green) -->
                    <div class="flex flex-col bg-emerald-50/60 dark:bg-emerald-950/30 p-3 rounded-lg border border-emerald-100 dark:border-emerald-900/50 shadow-2xs">
                        <span class="text-[0.5625rem] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest block mb-1">Start Date</span>
                        ${isProfileLoading
                            ? '<span class="skeleton-wave block h-4.5 w-24 rounded-full bg-emerald-200/70 dark:bg-emerald-900/50 my-0.5"></span>'
                            : `<span class="text-xs sm:text-sm font-black text-emerald-700 dark:text-emerald-300 leading-tight font-mono">${formatContractDate(data.startDate)}</span>`}
                    </div>
                    <!-- End Date (Color Coded: Rose Red) -->
                    <div class="flex flex-col bg-rose-50/60 dark:bg-rose-950/30 p-3 rounded-lg border border-rose-100 dark:border-rose-900/50 shadow-2xs">
                        <span class="text-[0.5625rem] font-bold text-rose-600 dark:text-rose-400 uppercase tracking-widest block mb-1">End Date</span>
                        ${isProfileLoading
                            ? '<span class="skeleton-wave block h-4.5 w-24 rounded-full bg-rose-200/70 dark:bg-rose-900/50 my-0.5"></span>'
                            : `<span class="text-xs sm:text-sm font-black text-rose-700 dark:text-rose-300 leading-tight font-mono">${formatContractDate(data.endDate)}</span>`}
                    </div>
                </div>
            </div>

            <!-- Assigned Unit Card (Color Coded: Amber) -->
            <div class="bg-amber-50/40 dark:bg-amber-950/20 border border-amber-100/80 dark:border-amber-900/40 p-4 rounded-xl shadow-sm transition-all">
                <div class="flex items-center gap-2 mb-1.5">
                    <div class="p-1.5 rounded-lg bg-amber-100/80 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border border-amber-200/80 dark:border-amber-800/60">
                        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                        </svg>
                    </div>
                    <label class="text-[0.5625rem] text-amber-700 dark:text-amber-300 font-bold block uppercase tracking-widest">Assigned Unit</label>
                </div>
                ${isProfileLoading
                    ? '<div class="pl-7"><span class="skeleton-wave block h-4 w-44 rounded-full bg-amber-200/70 dark:bg-amber-900/50 my-1"></span></div>'
                    : `<p class="text-xs sm:text-sm font-black text-amber-900 dark:text-amber-200 break-words whitespace-normal leading-snug pl-7">${data.designation || 'N/A'}</p>`}
            </div>
            
            <!-- Replacement History Card (Color Coded: Indigo/Blue) -->
            <div class="bg-blue-50/30 dark:bg-blue-950/20 p-4 rounded-xl border border-dashed border-blue-200 dark:border-blue-900/50">
                <label class="text-[0.5625rem] text-royal-blue dark:text-blue-400 font-bold block mb-1 uppercase tracking-widest">Replacement History</label>
                ${isProfileLoading
                    ? '<span class="skeleton-wave block h-4 w-36 rounded-full bg-blue-200/70 dark:bg-blue-900/50 my-1"></span>'
                    : `<p class="text-xs sm:text-sm text-royal-blue dark:text-blue-300 font-bold italic underline decoration-blue-500/30 underline-offset-4 cursor-default">${data.replacement || 'None found.'}</p>`}
            </div>
        </div>

        ${data.remarks === 'ABSORBED' ? `
        <div class="bg-[#e8f5e9]/50 dark:bg-green-900/10 p-4 rounded-xl border border-[#c8e6c9] dark:border-green-900/30 mt-2">
            <p class="text-[0.5625rem] uppercase font-black text-[#2e7d32] dark:text-green-500 border-b border-green-200 dark:border-slate-800 pb-1 flex items-center gap-2 mb-3">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg> 
                Absorption Details
            </p>
            <div class="flex flex-col gap-2">
                <div class="flex justify-between items-start group">
                    <span class="text-gray-500 font-medium text-[0.625rem] uppercase font-bold tracking-widest mr-4">Date</span>
                    <span class="font-black text-[#1b5e20] dark:text-green-400 text-xs text-right whitespace-nowrap">${(() => {
                if (!data.absorbDate || String(data.absorbDate).includes('0000-00-00')) return 'N/A';
                const d = new Date(data.absorbDate);
                if (isNaN(d.getTime()) || d.getFullYear() < 1900) return 'N/A';
                return (d.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }) + ' ' + d.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })).toUpperCase();
            })()}</span>
                </div>
                <div class="flex justify-between items-start group">
                    <span class="text-gray-500 font-medium text-[0.625rem] uppercase font-bold tracking-widest mr-4 mt-0.5">Where</span>
                    <span class="font-black text-heading text-xs text-right break-words max-w-[60%] leading-tight">${data.absorb_where || 'N/A'}</span>
                </div>
                <div class="flex justify-between items-start group">
                    <span class="text-gray-500 font-medium text-[0.625rem] uppercase font-bold tracking-widest mr-4 mt-0.5">Position</span>
                    <span class="font-black text-heading text-xs text-right break-words max-w-[60%] leading-tight">${data.absorb_position || 'N/A'}</span>
                </div>
                <div class="flex justify-between items-start group">
                    <span class="text-gray-500 font-medium text-[0.625rem] uppercase font-bold tracking-widest mr-4 mt-0.5">Agency</span>
                    <span class="font-black text-heading text-xs text-right break-words max-w-[60%] leading-tight">${data.absorb_agency || 'N/A'}</span>
                </div>
            </div>
        </div>
        ` : ''}

        ${data.remarks === 'RESIGNED' ? `
        <div class="bg-[#ffebee]/50 dark:bg-red-900/10 p-4 rounded-xl border border-[#ffcdd2] dark:border-red-900/30 mt-2">
            <p class="text-[0.5625rem] uppercase font-black text-[#ce1126] dark:text-red-500 border-b border-red-200 dark:border-slate-800 pb-1 flex items-center gap-2 mb-3">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg> 
                Resignation Details
            </p>
            <div class="flex flex-col gap-2">
                <div class="flex justify-between items-start group">
                    <span class="text-gray-500 font-medium text-[0.625rem] uppercase font-bold tracking-widest mr-4">Date</span>
                    <span class="font-black text-[#b71c1c] dark:text-red-400 text-xs text-right whitespace-nowrap">${(() => {
                if (!data.resignedDate || String(data.resignedDate).includes('0000-00-00')) return 'N/A';
                const d = new Date(data.resignedDate);
                if (isNaN(d.getTime()) || d.getFullYear() < 1900) return 'N/A';
                return (d.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }) + ' ' + d.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })).toUpperCase();
            })()}</span>
                </div>
                <div class="flex justify-between items-start group">
                    <span class="text-gray-500 font-medium text-[0.625rem] uppercase font-bold tracking-widest mr-4 mt-0.5">Reason</span>
                    <span class="font-black text-heading text-xs text-right break-words max-w-[60%] leading-tight">${data.resigned_reason || 'N/A'}</span>
                </div>
            </div>
        </div>
        ` : ''}
        </div>
    </div>
    
    <div id="drawer-page-1" class="hidden flex-1 flex flex-col gap-6">
         <div class="flex flex-wrap items-center justify-center gap-2 border-b border-default pb-3">
            <div class="flex flex-wrap gap-2">
                <button type="button" id="add-dtr-log-btn" class="bg-blue-50 dark:bg-blue-900/40 text-royal-blue dark:text-blue-300 border border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-600 dark:hover:text-white text-[0.6875rem] font-black tracking-widest uppercase px-4 py-2 rounded-lg transition-colors shadow-sm whitespace-nowrap cursor-pointer">
                    + DTR
                </button>
                <button type="button" id="add-ar-log-btn" class="bg-orange-50 dark:bg-orange-900/40 text-orange-600 dark:text-orange-300 border border-orange-200 dark:border-orange-800 hover:bg-orange-500 hover:text-white text-[0.6875rem] font-black tracking-widest uppercase px-4 py-2 rounded-lg transition-colors shadow-sm cursor-pointer whitespace-nowrap">
                    + AR
                </button>
                <button type="button" id="export-log-btn" class="bg-emerald-50 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 hover:bg-emerald-500 hover:text-white text-[0.6875rem] font-black tracking-widest uppercase px-4 py-2 rounded-lg transition-colors shadow-sm cursor-pointer whitespace-nowrap flex items-center gap-1.5">
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                    EXPORT
                </button>
            </div>
         </div>

         <div class="flex flex-col gap-5">
            ${isLogsLoading ? createDrawerSkeletonRows(4) : `
            <div>
                <h5 class="text-xs font-bold text-gray-500 uppercase tracking-widest pl-1 mb-3 flex items-center gap-2">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    DTR Logs
                </h5>
                <div class="space-y-2">
                    ${dtrLogs.length ? dtrLogs.map(l => {
                const s = l.status || 'PENDING';
                let sColor = s === 'VERIFIED' || s === 'COMPLETED' ? 'text-green-500' : (s === 'REJECTED' || s === 'DECLINED' ? 'text-red-500' : 'text-gray-400 dark:text-gray-500');
                const displayStatus = s === 'VERIFIED' || s === 'COMPLETED' ? 'SUBMITTED' : s;
                let rawStr = l.date || l.createdAt;
                let displayDate = rawStr;
                const submittedAt = l.submittedAt || l.submitted_at || l.createdAt || l.created_at;
                const submittedDetail = submittedAt ? new Date(submittedAt).toLocaleString('en-US', { dateStyle: 'full', timeStyle: 'long', timeZone: 'Asia/Manila' }) : 'Submission time unavailable';
                const historyDetail = [
                    (l.rejectedAt || l.rejected_at) ? 'Rejected: ' + new Date(l.rejectedAt || l.rejected_at).toLocaleString('en-US', { dateStyle: 'full', timeStyle: 'long', timeZone: 'Asia/Manila' }) : '',
                    (l.updatedAt || l.updated_at) ? 'Updated: ' + new Date(l.updatedAt || l.updated_at).toLocaleString('en-US', { dateStyle: 'full', timeStyle: 'long', timeZone: 'Asia/Manila' }) : ''
                ].filter(Boolean).map(detail => '\n' + detail).join('');
                if (rawStr) {
                    // If pure ISO date (YYYY-MM-DD), parse as UTC to avoid timezone off-by-one
                    const isoDate = /^\d{4}-\d{2}-\d{2}$/.test(rawStr)
                        ? new Date(rawStr + 'T00:00:00Z')
                        : new Date(rawStr);
                    if (!isNaN(isoDate)) displayDate = isoDate.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric', timeZone: 'Asia/Manila' }).toUpperCase();
                }
                return `
                        <div class="edit-log-btn group relative flex cursor-pointer items-center justify-between overflow-visible rounded-xl border border-blue-500 bg-transparent p-4 text-blue-700 shadow-sm transition-colors hover:border-blue-700 hover:bg-blue-600 hover:text-white dark:border-blue-400 dark:text-blue-300 dark:hover:border-blue-300 dark:hover:bg-blue-500 dark:hover:text-white" title="Submitted: ${submittedDetail}${historyDetail}" data-type="dtr" data-id="${l.id}" data-val="${l.day || rawStr}" data-status="${s}">
                            <span class="text-sm font-black text-blue-700 group-hover:text-white dark:text-blue-300 dark:group-hover:text-white capitalize whitespace-nowrap pointer-events-none" title="Submitted: ${submittedDetail}${historyDetail}">${l.day || displayDate}</span>
                            <span class="log-status-label text-xs font-bold ${sColor} group-hover:text-white dark:group-hover:text-white uppercase tracking-widest truncate max-w-[50%] text-right pr-6 group-hover:pr-12 pointer-events-none transition-all">${displayStatus}</span>
                            <div class="delete-log-btn delete-log-control pointer-events-none absolute top-0 right-0 z-20 h-full w-11 opacity-0 transition-all group-hover:pointer-events-auto group-hover:opacity-100" data-type="dtr" data-id="${l.id}">
                                <button type="button" class="delete-log-trigger group/delete relative flex h-full w-full cursor-pointer items-center justify-center rounded-r-xl bg-red-500 text-white hover:bg-red-600" aria-label="Delete DTR log"><svg class="size-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18 18 6M6 6l12 12"/></svg><span class="pointer-events-none absolute bottom-full right-0 z-30 mb-2 whitespace-nowrap rounded bg-slate-900 px-2 py-1 text-[0.5625rem] font-bold uppercase tracking-wider text-white opacity-0 shadow-lg transition-opacity group-hover/delete:opacity-100">Delete</span></button>
                                <div class="delete-confirm-actions hidden h-full w-full items-stretch overflow-visible">
                                    <button type="button" class="delete-log-confirm group/confirm relative flex flex-1 cursor-pointer items-center justify-center rounded-l-xl bg-emerald-600 text-white hover:bg-emerald-700" aria-label="Confirm delete DTR log"><svg class="delete-confirm-icon size-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="m5 13 4 4L19 7"/></svg><svg class="delete-loading-icon hidden size-4 animate-spin" aria-label="Deleting DTR log" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 0 1 8-8v4a4 4 0 0 0-4 4H4Z"/></svg><span class="pointer-events-none absolute bottom-full left-1/2 z-30 mb-2 -translate-x-1/2 whitespace-nowrap rounded bg-slate-900 px-2 py-1 text-[0.5625rem] font-bold uppercase tracking-wider text-white opacity-0 shadow-lg transition-opacity group-hover/confirm:opacity-100">Confirm delete</span></button>
                                    <button type="button" class="delete-log-cancel group/cancel relative flex flex-1 cursor-pointer items-center justify-center rounded-r-xl bg-red-600 text-white hover:bg-red-700 active:bg-red-800" aria-label="Cancel delete DTR log"><svg class="size-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18 18 6M6 6l12 12"/></svg><span class="pointer-events-none absolute bottom-full right-0 z-30 mb-2 whitespace-nowrap rounded bg-slate-900 px-2 py-1 text-[0.5625rem] font-bold uppercase tracking-wider text-white opacity-0 shadow-lg transition-opacity group-hover/cancel:opacity-100">Cancel</span></button>
                                </div>
                            </div>
                        </div>
                    `;
            }).join('') : `<p class="text-xs text-gray-400 dark:text-gray-500 italic font-medium bg-gray-50 dark:bg-slate-800/50 p-4 rounded-xl border border-gray-100 dark:border-slate-700">No DTR logs submitted.</p>`}
                </div>
            </div>

            <div>
                <h5 class="text-xs font-bold text-gray-500 uppercase tracking-widest pl-1 mb-3 flex items-center gap-2">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                    AR Logs
                </h5>
                <div class="space-y-2">
                    ${arLogs.length ? arLogs.map(l => {
                const s = l.status || 'PENDING';
                let sColor = s === 'VERIFIED' || s === 'COMPLETED' ? 'text-green-500' : (s === 'REJECTED' || s === 'DECLINED' ? 'text-red-500' : 'text-gray-400 dark:text-gray-500');
                const displayStatus = s === 'VERIFIED' || s === 'COMPLETED' ? 'SUBMITTED' : s;
                let rawStr = l.period || l.createdAt;
                let displayDate = rawStr;
                const submittedAt = l.submittedAt || l.submitted_at || l.createdAt || l.created_at;
                const submittedDetail = submittedAt ? new Date(submittedAt).toLocaleString('en-US', { dateStyle: 'full', timeStyle: 'long', timeZone: 'Asia/Manila' }) : 'Submission time unavailable';
                const historyDetail = [
                    (l.rejectedAt || l.rejected_at) ? 'Rejected: ' + new Date(l.rejectedAt || l.rejected_at).toLocaleString('en-US', { dateStyle: 'full', timeStyle: 'long', timeZone: 'Asia/Manila' }) : '',
                    (l.updatedAt || l.updated_at) ? 'Updated: ' + new Date(l.updatedAt || l.updated_at).toLocaleString('en-US', { dateStyle: 'full', timeStyle: 'long', timeZone: 'Asia/Manila' }) : ''
                ].filter(Boolean).map(detail => '\n' + detail).join('');
                if (rawStr) {
                    // If pure ISO date (YYYY-MM-DD), parse as UTC to avoid timezone off-by-one
                    const isoDate = /^\d{4}-\d{2}-\d{2}$/.test(rawStr)
                        ? new Date(rawStr + 'T00:00:00Z')
                        : new Date(rawStr);
                    if (!isNaN(isoDate)) displayDate = isoDate.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric', timeZone: 'Asia/Manila' }).toUpperCase();
                }
                return `
                        <div class="edit-log-btn group relative flex cursor-pointer items-center justify-between overflow-visible rounded-xl border border-orange-500 bg-transparent p-4 text-orange-700 shadow-sm transition-colors hover:border-orange-700 hover:bg-orange-600 hover:text-white dark:border-orange-400 dark:text-orange-300 dark:hover:border-orange-300 dark:hover:bg-orange-500 dark:hover:text-white" title="Submitted: ${submittedDetail}${historyDetail}" data-type="ar" data-id="${l.id}" data-val="${rawStr}" data-status="${s}">
                            <span class="text-sm font-black text-orange-700 group-hover:text-white dark:text-orange-300 dark:group-hover:text-white capitalize whitespace-nowrap pointer-events-none" title="Submitted: ${submittedDetail}${historyDetail}">${rawStr || displayDate}</span>
                            <span class="log-status-label text-xs font-bold ${sColor} group-hover:text-white dark:group-hover:text-white uppercase tracking-widest truncate max-w-[50%] text-right pr-6 group-hover:pr-12 pointer-events-none transition-all">${displayStatus}</span>
                            <div class="delete-log-btn delete-log-control pointer-events-none absolute top-0 right-0 z-20 h-full w-11 opacity-0 transition-all group-hover:pointer-events-auto group-hover:opacity-100" data-type="ar" data-id="${l.id}">
                                <button type="button" class="delete-log-trigger group/delete relative flex h-full w-full cursor-pointer items-center justify-center rounded-r-xl bg-red-500 text-white hover:bg-red-600" aria-label="Delete AR log"><svg class="size-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18 18 6M6 6l12 12"/></svg><span class="pointer-events-none absolute bottom-full right-0 z-30 mb-2 whitespace-nowrap rounded bg-slate-900 px-2 py-1 text-[0.5625rem] font-bold uppercase tracking-wider text-white opacity-0 shadow-lg transition-opacity group-hover/delete:opacity-100">Delete</span></button>
                                <div class="delete-confirm-actions hidden h-full w-full items-stretch overflow-visible">
                                    <button type="button" class="delete-log-confirm group/confirm relative flex flex-1 cursor-pointer items-center justify-center rounded-l-xl bg-emerald-600 text-white hover:bg-emerald-700" aria-label="Confirm delete AR log"><svg class="delete-confirm-icon size-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="m5 13 4 4L19 7"/></svg><svg class="delete-loading-icon hidden size-4 animate-spin" aria-label="Deleting AR log" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 0 1 8-8v4a4 4 0 0 0-4 4H4Z"/></svg><span class="pointer-events-none absolute bottom-full left-1/2 z-30 mb-2 -translate-x-1/2 whitespace-nowrap rounded bg-slate-900 px-2 py-1 text-[0.5625rem] font-bold uppercase tracking-wider text-white opacity-0 shadow-lg transition-opacity group-hover/confirm:opacity-100">Confirm delete</span></button>
                                    <button type="button" class="delete-log-cancel group/cancel relative flex flex-1 cursor-pointer items-center justify-center rounded-r-xl bg-red-600 text-white hover:bg-red-700 active:bg-red-800" aria-label="Cancel delete AR log"><svg class="size-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18 18 6M6 6l12 12"/></svg><span class="pointer-events-none absolute bottom-full right-0 z-30 mb-2 whitespace-nowrap rounded bg-slate-900 px-2 py-1 text-[0.5625rem] font-bold uppercase tracking-wider text-white opacity-0 shadow-lg transition-opacity group-hover/cancel:opacity-100">Cancel</span></button>
                                </div>
                            </div>
                        </div>
                    `;
            }).join('') : `<p class="text-xs text-gray-400 dark:text-gray-500 italic font-medium bg-gray-50 dark:bg-slate-800/50 p-4 rounded-xl border border-gray-100 dark:border-slate-700">No AR logs submitted.</p>`}
                </div>
            </div>
            `}
         </div>
    </div>
    
    <div id="drawer-page-2" class="hidden flex-1 flex flex-col gap-4">
        <div class="flex flex-col gap-3">
            ${isLogsLoading ? createDrawerSkeletonRows(5) : displayDocs.map(doc => {
                const dbStatus = doc.status.toUpperCase();
                const uiMapping = {
                    'VERIFIED': 'COMPLETED',
                    'DECLINED': 'REJECTED',
                    'PENDING': 'PENDING'
                };
                const status = uiMapping[dbStatus] || dbStatus;

                const isCompleted = status === 'COMPLETED';
                const isRejected = status === 'REJECTED';

                const isPending = status === 'PENDING';
                const iconColor = isCompleted
                    ? 'text-emerald-600 group-hover/card:text-emerald-800 dark:text-emerald-400 dark:group-hover/card:text-emerald-900'
                    : (isRejected
                        ? 'text-red-600 group-hover/card:text-red-800 dark:text-red-400 dark:group-hover/card:text-red-900'
                        : 'text-orange-600 group-hover/card:text-orange-800 dark:text-orange-400 dark:group-hover/card:text-orange-900');
                const bgColor = isCompleted
                    ? 'border-emerald-600 bg-transparent hover:border-emerald-700 hover:bg-emerald-600 dark:border-emerald-400 dark:bg-transparent dark:hover:border-emerald-300 dark:hover:bg-emerald-500'
                    : (isRejected
                        ? 'border-red-600 bg-transparent hover:border-red-700 hover:bg-red-600 dark:border-red-400 dark:bg-transparent dark:hover:border-red-300 dark:hover:bg-red-500'
                        : 'border-orange-600 bg-transparent hover:border-orange-700 hover:bg-orange-600 dark:border-orange-400 dark:bg-transparent dark:hover:border-orange-300 dark:hover:bg-orange-500');
                const documentTextColor = isCompleted
                    ? 'text-emerald-700 group-hover/card:text-white dark:text-emerald-300 dark:group-hover/card:text-white'
                    : (isRejected
                        ? 'text-red-700 group-hover/card:text-white dark:text-red-300 dark:group-hover/card:text-white'
                        : 'text-orange-700 group-hover/card:text-white dark:text-orange-300 dark:group-hover/card:text-white');
                const documentStatusLabel = isCompleted ? 'SUBMITTED' : status;
                const verifyActionClass = isCompleted
                    ? 'border-emerald-900 bg-emerald-700 text-white ring-2 ring-emerald-200 hover:bg-emerald-600'
                    : 'border-emerald-500 bg-transparent text-emerald-700 group-hover/card:border-emerald-700 group-hover/card:bg-white group-hover/card:text-emerald-800 hover:border-emerald-700 hover:bg-emerald-600 hover:text-white';
                const pendingActionClass = isPending
                    ? 'border-orange-900 bg-orange-700 text-white ring-2 ring-orange-200 hover:bg-orange-600'
                    : 'border-orange-500 bg-transparent text-orange-700 group-hover/card:border-orange-700 group-hover/card:bg-white group-hover/card:text-orange-800 hover:border-orange-700 hover:bg-orange-600 hover:text-white';
                const rejectActionClass = isRejected
                    ? 'border-red-900 bg-red-700 text-white ring-2 ring-red-200 hover:bg-red-600'
                    : 'border-red-500 bg-transparent text-red-700 group-hover/card:border-red-700 group-hover/card:bg-white group-hover/card:text-red-800 hover:border-red-700 hover:bg-red-600 hover:text-white';
                let iconSvg = `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`;
                if (isCompleted) {
                    iconSvg = `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3.5" d="M5 13l4 4L19 7"></path></svg>`;
                } else if (isRejected) {
                    iconSvg = `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3.5" d="M6 18L18 6M6 6l12 12"></path></svg>`;
                }

                return `
                <div class="drawer-doc-card group/card relative flex cursor-pointer items-center justify-between rounded-xl border p-3.5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-brand/30 ${bgColor}" role="button" tabindex="0" data-id="${doc.id}" data-name="${doc.name}" data-status="${status}" aria-label="Change status for ${doc.name}" aria-expanded="false">
                    <div class="flex min-w-0 flex-1 items-center gap-3">
                        <div class="flex size-8 flex-shrink-0 items-center justify-center rounded-full border border-white bg-white shadow-sm ${iconColor}">
                            ${iconSvg}
                        </div>
                        <span class="flex-1 text-xs font-black uppercase tracking-tight sm:text-sm ${documentTextColor}">${doc.name}</span>
                    </div>
                    <span class="drawer-doc-status ml-auto shrink-0 text-[0.5625rem] font-black uppercase tracking-wider ${documentTextColor}">${documentStatusLabel}</span>
                    <svg class="drawer-doc-cue ml-3 size-5 shrink-0 transition-transform group-hover/card:scale-110 ${documentTextColor}" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 12h.01M12 12h.01M18 12h.01"/></svg>
                    <div class="drawer-doc-actions ml-3 hidden shrink-0 items-center gap-1.5">
                        <button type="button" class="doc-status-action group relative flex size-8 cursor-pointer items-center justify-center rounded-full border transition-all ${verifyActionClass}" data-status="COMPLETED" aria-label="Submit document" aria-pressed="${isCompleted}">
                            <svg class="size-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3.5" d="m5 13 4 4L19 7"/></svg>
                            <span class="pointer-events-none absolute bottom-full right-0 z-20 mb-2 whitespace-nowrap rounded bg-slate-900 px-2 py-1 text-[0.5625rem] font-bold uppercase tracking-wider text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100">Submitted</span>
                        </button>
                        <button type="button" class="doc-status-action group relative flex size-8 cursor-pointer items-center justify-center rounded-full border transition-all ${pendingActionClass}" data-status="PENDING" aria-label="Set pending" aria-pressed="${isPending}">
                            <svg class="size-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
                            <span class="pointer-events-none absolute bottom-full left-1/2 z-20 mb-2 -translate-x-1/2 whitespace-nowrap rounded bg-slate-900 px-2 py-1 text-[0.5625rem] font-bold uppercase tracking-wider text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100">Pending</span>
                        </button>
                        <button type="button" class="doc-status-action group relative flex size-8 cursor-pointer items-center justify-center rounded-full border transition-all ${rejectActionClass}" data-status="REJECTED" aria-label="Reject document" aria-pressed="${isRejected}">
                            <svg class="size-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3.5" d="M6 18 18 6M6 6l12 12"/></svg>
                            <span class="pointer-events-none absolute bottom-full right-0 z-20 mb-2 whitespace-nowrap rounded bg-slate-900 px-2 py-1 text-[0.5625rem] font-bold uppercase tracking-wider text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100">Reject</span>
                        </button>
                    </div>
                    <svg class="drawer-doc-loading ml-3 hidden size-5 shrink-0 animate-spin text-brand" aria-label="Updating document" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 0 1 8-8v4a4 4 0 0 0-4 4H4Z"/></svg>
                </div>
                `;
            }).join('')}
        </div>
    </div>

    <!-- End of Pages -->
</div>
</div>

<style>
    #beneficiary-drawer-container::-webkit-scrollbar {
        width: 5px;
    }
    #beneficiary-drawer-container::-webkit-scrollbar-track {
        background: transparent;
    }
    #beneficiary-drawer-container::-webkit-scrollbar-thumb {
        background: rgba(0, 0, 0, 0.025);
        border-radius: 20px;
    }
    .dark #beneficiary-drawer-container::-webkit-scrollbar-thumb {
        background: rgba(255, 255, 255, 0.025);
    }
    #beneficiary-drawer-container::-webkit-scrollbar-thumb:hover {
        background: rgba(0, 0, 0, 0.1);
    }
    .dark #beneficiary-drawer-container::-webkit-scrollbar-thumb:hover {
        background: rgba(255, 255, 255, 0.1);
    }
</style>
    `;

    // Initialize Drawer HTML in body
    const noAnimation = Boolean(data._noAnimation);
    let drawerContainer = document.getElementById('beneficiary-drawer-container');
    const isReuse = noAnimation && !!drawerContainer && drawerContainer.dataset.beneficiaryId === String(data.id || '');

    if (isReuse) {
        // In-place refresh: preserve the visible container, just swap content
        const scrollTop = drawerContainer.scrollTop;
        drawerContainer.innerHTML = drawerHtml;
        drawerContainer.scrollTop = scrollTop;
    } else {
        if (drawerContainer) {
            // Destroy existing instance gracefully
            drawerContainer.remove();
            document.documentElement.classList.remove('overflow-hidden');
            document.body.classList.remove('overflow-hidden');
        }

        drawerContainer = document.createElement('div');
        drawerContainer.id = 'beneficiary-drawer-container';
        drawerContainer.className = 'fixed top-0 right-0 z-[100] h-screen p-4 sm:p-6 overflow-y-auto transition-transform duration-500 ease-in-out translate-x-full bg-neutral-primary-soft dark:bg-slate-900 w-full sm:w-[500px] lg:w-[560px] shadow-2xl';
        drawerContainer.setAttribute('tabindex', '-1');
        drawerContainer.setAttribute('data-drawer-backdrop', 'true');
        drawerContainer.innerHTML = drawerHtml;

        document.body.appendChild(drawerContainer);
        document.documentElement.classList.add('overflow-hidden');
        document.body.classList.add('overflow-hidden');
    }

    drawerContainer.dataset.beneficiaryId = String(data.id || '');

    import('flowbite').then(({ Drawer }) => {
        let drawer = isReuse ? drawerContainer.__drawerInstance : null;

        if (!drawer) {
            const options = {
                placement: 'right',
                backdrop: true,
                bodyScrolling: false,
                edge: false,
                edgeOffset: '',
                backdropClasses: 'bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-50',
                onHide: () => {
                    drawerContainer.__inlineActionAbort?.abort();
                    document.documentElement.classList.remove('overflow-hidden');
                    document.body.classList.remove('overflow-hidden');
                    setTimeout(() => {
                        if (drawerContainer && drawerContainer.parentNode) {
                            drawerContainer.remove();
                        }
                    }, 300); // Wait for transition
                }
            };

            drawer = new Drawer(drawerContainer, options);
            drawerContainer.__drawerInstance = drawer;
            drawer.show();
        }

        // Bind events inside drawer
        const closeBtn = drawerContainer.querySelector('#close-drawer-btn');
        closeBtn.addEventListener('click', () => drawer.hide());

        // START: Initialize OOP-managed navigation and persisted accordion behavior.
        const viewController = new BeneficiaryDrawerViewController(drawerContainer, initialPage, 2);
        viewController.bind();
        // END: Initialize OOP-managed navigation and persisted accordion behavior.

        drawerContainer.__inlineActionAbort?.abort();
        const inlineActionAbort = new AbortController();
        drawerContainer.__inlineActionAbort = inlineActionAbort;

        // START: Measure whether a toast can fit directly beside the drawer.
        const getDrawerToastPlacement = () => {
            const activeDrawer = document.getElementById('beneficiary-drawer-container') || drawerContainer;
            const drawerRect = activeDrawer.getBoundingClientRect();
            const availableLeftSpace = Math.max(0, drawerRect.left);
            return {
                canDockBesideDrawer: window.innerWidth >= 640 && availableLeftSpace >= 280,
                drawerOffset: Math.max(0, window.innerWidth - drawerRect.left),
                availableLeftSpace
            };
        };
        // END: Measure whether a toast can fit directly beside the drawer.

        // START: Show compact feedback immediately beside the drawer on supported screens.
        const showInlineToast = (icon, title, timer = 1800) => {
            const placement = getDrawerToastPlacement();

            return Swal.fire({
                toast: true,
                position: 'bottom-end',
                icon,
                title,
                showConfirmButton: false,
                timer,
                didOpen: (toast) => {
                    const livePlacement = getDrawerToastPlacement();
                    if (!livePlacement.canDockBesideDrawer) return;

                    const toastContainer = toast.closest('.swal2-container');
                    if (!toastContainer) return;

                    toastContainer.style.inset = 'auto';
                    toastContainer.style.right = (livePlacement.drawerOffset + 12) + 'px';
                    toastContainer.style.bottom = '12px';
                    toastContainer.style.left = 'auto';
                    toastContainer.style.width = 'auto';
                    toast.style.maxWidth = `${Math.min(352, livePlacement.availableLeftSpace - 24)}px`;
                }
            });
        };
        // END: Show compact feedback immediately beside the drawer on supported screens.

        // START: Reset a log delete button to its initial X action.
        const resetDeleteButton = (control) => {
            if (!control || control.dataset.loading === 'true') return;
            control.dataset.confirming = 'false';
            control.classList.remove('w-22', 'opacity-100', 'pointer-events-auto');
            control.classList.add('w-11', 'opacity-0', 'pointer-events-none');
            control.closest('.edit-log-btn')?.querySelector('.log-status-label')?.classList.remove('!pr-24');
            control.querySelector('.delete-log-trigger')?.classList.replace('hidden', 'flex');
            control.querySelector('.delete-confirm-actions')?.classList.replace('flex', 'hidden');
        };
        // END: Reset a log delete button to its initial X action.

        // START: Close all document and delete inline actions except an optional active control.
        const closeInlineActions = (except = null) => {
            drawerContainer.querySelectorAll('.drawer-doc-card').forEach(card => {
                if (card === except || card.dataset.loading === 'true') return;
                card.setAttribute('aria-expanded', 'false');
                card.querySelector('.drawer-doc-actions')?.classList.replace('flex', 'hidden');
                card.querySelector('.drawer-doc-cue')?.classList.remove('hidden');
            });
            drawerContainer.querySelectorAll('.delete-log-control').forEach(control => {
                if (control !== except) resetDeleteButton(control);
            });
        };
        // END: Close all document and delete inline actions except an optional active control.

        // START: Persist a selected document status without opening a modal.
        const updateDocumentStatus = async (card, newStatus) => {
            const currentStatus = card.dataset.status;
            if (newStatus === currentStatus) {
                closeInlineActions();
                return;
            }

            const actions = card.querySelector('.drawer-doc-actions');
            const loading = card.querySelector('.drawer-doc-loading');
            card.dataset.loading = 'true';
            card.setAttribute('aria-busy', 'true');
            actions?.classList.replace('flex', 'hidden');
            loading?.classList.replace('hidden', 'block');

            try {
                const apiMapping = { COMPLETED: 'VERIFIED', REJECTED: 'DECLINED', PENDING: 'PENDING' };
                const result = await saveDrawerLog('docs', {
                    gip_id: data.id,
                    doc_name: card.dataset.name,
                    status: apiMapping[newStatus] || newStatus
                });
                const json = result.success ? result.data : { success: false, error: result.error };

                if (!json.success) throw new Error(json.error || 'Failed to update document status.');
                if (window.viewBeneficiary) {
                    await window.viewBeneficiary(data, viewController.currentPage);
                }
                showInlineToast('success', 'Status updated!');
            } catch (error) {
                card.dataset.loading = 'false';
                card.removeAttribute('aria-busy');
                loading?.classList.replace('block', 'hidden');
                actions?.classList.replace('hidden', 'flex');
                showInlineToast('error', error.message);
            }
        };
        // END: Persist a selected document status without opening a modal.

        drawerContainer.querySelectorAll('.drawer-doc-card').forEach(card => {
            // START: Toggle one document card's inline status actions.
            const toggleCardActions = () => {
                const willOpen = card.getAttribute('aria-expanded') !== 'true';
                closeInlineActions(willOpen ? card : null);
                card.setAttribute('aria-expanded', String(willOpen));
                card.querySelector('.drawer-doc-actions')?.classList.toggle('hidden', !willOpen);
                card.querySelector('.drawer-doc-actions')?.classList.toggle('flex', willOpen);
                card.querySelector('.drawer-doc-cue')?.classList.toggle('hidden', willOpen);
            };
            // END: Toggle one document card's inline status actions.

            card.addEventListener('click', (event) => {
                if (event.target.closest('.doc-status-action')) return;
                toggleCardActions();
            });
            card.addEventListener('keydown', (event) => {
                if (event.target.closest('.doc-status-action')) return;
                if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    toggleCardActions();
                }
            });
            card.querySelectorAll('.doc-status-action').forEach(action => {
                action.addEventListener('click', (event) => {
                    event.stopPropagation();
                    updateDocumentStatus(card, action.dataset.status);
                });
            });
        });

        document.addEventListener('click', (event) => {
            if (!event.target.closest('.drawer-doc-card, .delete-log-control')) closeInlineActions();
        }, { signal: inlineActionAbort.signal });

        // Philippine Public Holidays 2026 (ISO date strings)
        const PH_HOLIDAYS = new Set([
            '2026-01-01', '2026-04-02', '2026-04-03', '2026-04-09',
            '2026-05-01', '2026-06-12', '2026-08-24', '2026-08-31',
            '2026-11-01', '2026-11-30', '2026-12-25', '2026-12-30', '2026-12-31',
        ]);
        const MONTHS = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

        function isWorkday(dateStr) {
            const d = new Date(dateStr + 'T00:00:00');
            const dow = d.getDay();
            return dow !== 0 && dow !== 6 && !PH_HOLIDAYS.has(dateStr);
        }

        function computePeriodLabel(date) {
            const day = date.getDate();
            const m = MONTHS[date.getMonth()];
            const y = date.getFullYear();
            const lastDay = new Date(y, date.getMonth() + 1, 0).getDate();
            return day <= 15 ? `${m} 1-15, ${y}` : `${m} 16-${lastDay}, ${y}`;
        }

        const getNextDTRDate = () => {
            const today = new Date();
            if (!dtrLogs.length) return computePeriodLabel(today);

            let maxVal = -1;
            let maxLabel = '';

            const parseToVal = (label) => {
                const match = (label || '').toUpperCase().match(/([A-Z]{3})\s+(\d+)-(\d+),\s*(\d{4})/);
                if (!match) return -1;
                const mIdx = MONTHS.indexOf(match[1]);
                const pType = parseInt(match[2]) === 1 ? 0 : 1;
                const year = parseInt(match[4]);
                return (year * 100) + (mIdx * 2) + pType;
            };

            dtrLogs.forEach(l => {
                const label = l.day || l.date || '';
                const v = parseToVal(label);
                if (v > maxVal) { maxVal = v; maxLabel = label; }
            });

            if (maxVal === -1) return computePeriodLabel(today);

            const match = maxLabel.toUpperCase().match(/([A-Z]{3})\s+(\d+)-(\d+),\s*(\d{4})/);
            const mIdx = MONTHS.indexOf(match[1]);
            const p1 = parseInt(match[2]);
            const year = parseInt(match[4]);

            if (p1 === 1) {
                const lastDay = new Date(year, mIdx + 1, 0).getDate();
                return `${MONTHS[mIdx]} 16-${lastDay}, ${year}`;
            } else {
                const nextMIdx = (mIdx + 1) % 12;
                const nextYear = mIdx === 11 ? year + 1 : year;
                return `${MONTHS[nextMIdx]} 1-15, ${nextYear}`;
            }
        };

        /**
         * Returns the next AR period label (identical logic to DTR).
         */
        const getNextARPeriod = () => {
            const today = new Date();
            if (!arLogs.length) return computePeriodLabel(today);

            let maxVal = -1;
            let maxLabel = '';

            const parseToVal = (label) => {
                const match = (label || '').toUpperCase().match(/([A-Z]{3})\s+(\d+)-(\d+),\s*(\d{4})/);
                if (!match) return -1;
                const mIdx = MONTHS.indexOf(match[1]);
                const pType = parseInt(match[2]) === 1 ? 0 : 1;
                const year = parseInt(match[4]);
                return (year * 100) + (mIdx * 2) + pType;
            };

            arLogs.forEach(l => {
                const v = parseToVal(l.period);
                if (v > maxVal) { maxVal = v; maxLabel = l.period; }
            });

            if (maxVal === -1) return computePeriodLabel(today);

            const match = maxLabel.toUpperCase().match(/([A-Z]{3})\s+(\d+)-(\d+),\s*(\d{4})/);
            const mIdx = MONTHS.indexOf(match[1]);
            const p1 = parseInt(match[2]);
            const year = parseInt(match[4]);

            if (p1 === 1) {
                const lastDay = new Date(year, mIdx + 1, 0).getDate();
                return `${MONTHS[mIdx]} 16-${lastDay}, ${year}`;
            } else {
                const nextMIdx = (mIdx + 1) % 12;
                const nextYear = mIdx === 11 ? year + 1 : year;
                return `${MONTHS[nextMIdx]} 1-15, ${nextYear}`;
            }
        };

        // Add Logic Auto
        const autoAddLog = async (dbType, autoVal) => {
            Swal.fire({ title: 'Adding...', allowOutsideClick: false, showConfirmButton: false });
            Swal.showLoading();
            try {
                const payload = {
                    gip_id: data.id
                };
                // For DTR: send a proxy date (1st of period) + the period label as weekday
                if (dbType === 'dtr') {
                    // Parse period label to get a record_date
                    const pMatch = autoVal.toUpperCase().match(/([A-Z]{3})\s+(\d+)-\d+,\s*(\d{4})/);
                    if (pMatch) {
                        const mIdx = MONTHS.indexOf(pMatch[1]);
                        const startDay = parseInt(pMatch[2]);
                        const year = parseInt(pMatch[3]);
                        // Use the first workday of the period as record_date
                        let rd = new Date(year, mIdx, startDay);
                        while (!isWorkday(rd.toISOString().split('T')[0])) { rd.setDate(rd.getDate() + 1); }
                        payload.record_date = rd.toISOString().split('T')[0];
                    } else {
                        payload.record_date = new Date().toISOString().split('T')[0];
                    }
                    payload.weekday = autoVal; // period label stored as weekday
                }
                if (dbType === 'ar') payload.period = autoVal;

                const result = await saveDrawerLog(dbType, payload);
                const json = result.success ? result.data : { success: false, error: result.error };

                if (json.success) {
                    if (window.viewBeneficiary) {
                        await window.viewBeneficiary(data, viewController.currentPage);
                    }
                    showInlineToast('success', 'Successfully Added', 1500);
                } else {
                    const message = json.error || 'Failed to add log.';
                    console.error('[GIP Logs] Auto-add rejected', { type: dbType, gipId: data.id, message });
                    Swal.fire('Error', message, 'error');
                }
            } catch (error) {
                console.error('[GIP Logs] Auto-add threw', { type: dbType, gipId: data.id, error });
                Swal.fire('Error', error.message || 'Failed to add log.', 'error');
            }
        };

        // Edit Log Logic
        const promptEditLog = async (typeStr, dbType, logId, currentVal, currentStatus) => {
            const labelStr = dbType === 'dtr' ? 'Record Date' : 'Period';
            const isD = isDarkMode();

            const btnBase = "flex flex-col items-center justify-center p-3 rounded-xl border-2 transition-all cursor-pointer font-black uppercase tracking-widest text-[0.625rem] sm:text-xs gap-2 ";
            const checkIcon = `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>`;
            const xIcon = `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12"></path></svg>`;

            const { value: formValues } = await Swal.fire({
                title: `<span class="text-xl font-black text-heading uppercase tracking-tight">Edit ${typeStr} Log</span>`,
                html: `
                    <div class="flex flex-col gap-5 text-left font-montserrat mt-2">
                        <div>
                            <label class="text-[0.625rem] font-bold text-gray-500 uppercase tracking-widest block mb-1">${labelStr}</label>
                            <input id="swal-log-val" value="${currentVal}" class="bg-gray-50 dark:bg-slate-800/80 border border-gray-200 dark:border-slate-600 text-heading text-sm rounded-xl focus:ring-brand focus:border-brand block w-full p-2.5 font-bold uppercase transition-all" placeholder="Enter value">
                        </div>
                        <div>
                            <label class="text-[0.625rem] font-bold text-gray-500 uppercase tracking-widest block mb-2">Validation Status</label>
                            <div class="grid grid-cols-2 gap-3">
                                <label class="relative block cursor-pointer">
                                    <input type="radio" name="swal-log-status" value="VERIFIED" class="peer sr-only" ${currentStatus === 'VERIFIED' ? 'checked' : ''}>
                                    <div class="${btnBase} border-gray-100 bg-gray-50 text-gray-400 dark:border-slate-700 dark:bg-slate-800/50 dark:text-gray-500 peer-checked:border-green-500 peer-checked:bg-green-50 peer-checked:text-green-600 dark:peer-checked:border-green-500 dark:peer-checked:bg-green-900/20 dark:peer-checked:text-green-400 hover:bg-gray-100 dark:hover:bg-slate-700 group">
                                        ${checkIcon}
                                        <span>Submitted</span>
                                    </div>
                                </label>
                                <label class="relative block cursor-pointer">
                                    <input type="radio" name="swal-log-status" value="REJECTED" class="peer sr-only" ${currentStatus === 'REJECTED' || currentStatus === 'DECLINED' ? 'checked' : ''}>
                                    <div class="${btnBase} border-gray-100 bg-gray-50 text-gray-400 dark:border-slate-700 dark:bg-slate-800/50 dark:text-gray-500 peer-checked:border-red-500 peer-checked:bg-red-50 peer-checked:text-red-600 dark:peer-checked:border-red-500 dark:peer-checked:bg-red-900/20 dark:peer-checked:text-red-400 hover:bg-gray-100 dark:hover:bg-slate-700 group">
                                        ${xIcon}
                                        <span>Reject</span>
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
                `,
                focusConfirm: false,
                showCancelButton: true,
                confirmButtonText: '<span class="font-black uppercase tracking-widest cursor-pointer">SAVE REVISIONS</span>',
                cancelButtonText: '<span class="font-black uppercase tracking-widest cursor-pointer">CANCEL</span>',
                customClass: {
                    container: 'font-montserrat',
                    popup: 'rounded-[1.5rem] shadow-2xl border border-gray-100 dark:border-slate-800 dark:bg-slate-900',
                    confirmButton: 'bg-brand text-white hover:bg-brand-strong text-xs px-6 py-2.5 rounded-xl border border-transparent shadow-sm mx-2',
                    cancelButton: 'bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-600 text-xs px-6 py-2.5 rounded-xl border border-gray-200 dark:border-slate-600 shadow-sm mx-2'
                },
                buttonsStyling: false,
                preConfirm: () => {
                    const selectedStatus = document.querySelector('input[name="swal-log-status"]:checked');
                    return {
                        val: document.getElementById('swal-log-val').value.trim().toUpperCase(),
                        status: selectedStatus ? selectedStatus.value : 'PENDING'
                    }
                }
            });

            if (formValues && (formValues.val !== currentVal || formValues.status !== currentStatus)) {
                try {
                    const payload = { type: dbType, id: logId, status: formValues.status };
                    if (dbType === 'dtr') {
                        // Parse period label to get a record_date
                        const pMatch = formValues.val.toUpperCase().match(/([A-Z]{3})\s+(\d+)-\d+,\s*(\d{4})/);
                        if (pMatch) {
                            const mIdx = MONTHS.indexOf(pMatch[1]);
                            const startDay = parseInt(pMatch[2]);
                            const year = parseInt(pMatch[3]);
                            let rd = new Date(year, mIdx, startDay);
                            while (!isWorkday(rd.toISOString().split('T')[0])) { rd.setDate(rd.getDate() + 1); }
                            payload.record_date = rd.toISOString().split('T')[0];
                        } else {
                            payload.record_date = new Date().toISOString().split('T')[0];
                        }
                        payload.weekday = formValues.val;
                    }
                    if (dbType === 'ar') payload.period = formValues.val;

                    const result = await apiPut(`api/logs.php`, payload);
                    const json = result.success ? result.data : { success: false, error: result.error };

                    if (json.success) {
                        showInlineToast('success', 'Log Updated!', 1500);
                        if (window.viewBeneficiary) window.viewBeneficiary(data, viewController.currentPage);
                    } else {
                        Swal.fire('Error', json.error || 'Failed to update log.', 'error');
                    }
                } catch (e) { Swal.fire('Error', e.message, 'error'); }
            }
        };

        const addDtrBtn = drawerContainer.querySelector('#add-dtr-log-btn');
        if (addDtrBtn) addDtrBtn.addEventListener('click', () => autoAddLog('dtr', getNextDTRDate()));

        const addArBtn = drawerContainer.querySelector('#add-ar-log-btn');
        if (addArBtn) addArBtn.addEventListener('click', () => autoAddLog('ar', getNextARPeriod()));

        const exportLogBtn = drawerContainer.querySelector('#export-log-btn');
        if (exportLogBtn) {
            exportLogBtn.addEventListener('click', async () => {
                const btnBase = "flex flex-col items-center justify-center p-4 rounded-2xl border-2 transition-all cursor-pointer font-black uppercase tracking-widest text-[0.6875rem] gap-2 ";
                const result = await Swal.fire({
                    title: '<span class="text-xl font-black text-heading uppercase tracking-tight">Export DTR/AR',
                    html: `
                        <div class="font-montserrat text-left">
                            <label class="text-[0.625rem] font-bold text-gray-400 uppercase tracking-widest block mb-4 ps-1">Select the type of log to export for <span class="text-brand font-black">ALL DATA</span></label>
                            
                            <div class="grid grid-cols-3 gap-2">
                                <label class="relative block cursor-pointer">
                                    <input type="radio" name="swal-export-type" value="dtr" class="peer sr-only" checked>
                                    <div class="${btnBase} border-gray-100 bg-gray-50 text-gray-400 dark:border-slate-700 dark:bg-slate-800/50 dark:text-gray-500 peer-checked:border-blue-500 peer-checked:bg-blue-50 peer-checked:text-blue-600 dark:peer-checked:bg-blue-900/20 dark:peer-checked:text-blue-400 hover:bg-blue-50/50 dark:hover:bg-slate-700">
                                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                                        <span>DTR</span>
                                    </div>
                                </label>

                                <label class="relative block cursor-pointer">
                                    <input type="radio" name="swal-export-type" value="ar" class="peer sr-only">
                                    <div class="${btnBase} border-gray-100 bg-gray-50 text-gray-400 dark:border-slate-700 dark:bg-slate-800/50 dark:text-gray-500 peer-checked:border-orange-500 peer-checked:bg-orange-50 peer-checked:text-orange-600 dark:peer-checked:bg-orange-900/20 dark:peer-checked:text-orange-400 hover:bg-orange-50/50 dark:hover:bg-slate-700">
                                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                                        <span>AR</span>
                                    </div>
                                </label>

                                <label class="relative block cursor-pointer">
                                    <input type="radio" name="swal-export-type" value="both" class="peer sr-only">
                                    <div class="${btnBase} border-gray-100 bg-gray-50 text-gray-400 dark:border-slate-700 dark:bg-slate-800/50 dark:text-gray-500 peer-checked:border-emerald-500 peer-checked:bg-emerald-50 peer-checked:text-emerald-600 dark:peer-checked:bg-emerald-900/20 dark:peer-checked:text-emerald-400 hover:bg-emerald-50/50 dark:hover:bg-slate-700">
                                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"/></svg>
                                        <span>BOTH</span>
                                    </div>
                                </label>
                            </div>
                        </div>
                    `,
                    showCancelButton: true,
                    confirmButtonText: '<span class="font-black uppercase tracking-widest cursor-pointer">Generate Export</span>',
                    cancelButtonText: '<span class="font-black uppercase tracking-widest cursor-pointer">Cancel</span>',
                    customClass: {
                        container: 'font-montserrat',
                        popup: 'rounded-[1.5rem] shadow-2xl border border-gray-100 dark:border-slate-800 dark:bg-slate-900',
                        confirmButton: 'bg-emerald-600 text-white hover:bg-emerald-700 text-xs px-6 py-2.5 rounded-xl border border-transparent shadow-sm mx-2 cursor-pointer',
                        cancelButton: 'bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-600 text-xs px-6 py-2.5 rounded-xl border border-gray-200 dark:border-slate-600 shadow-sm mx-2 cursor-pointer'
                    },
                    buttonsStyling: false,
                    preConfirm: () => {
                        const selected = document.querySelector('input[name="swal-export-type"]:checked');
                        return selected ? selected.value : null;
                    }
                });

                if (result.isConfirmed && result.value) {
                    const exportType = result.value;
                    const year = new Date().getFullYear(); // Just use current year for individual export

                    // Call the same Excel generation function used in bulk export!
                    await generateExcelExport([data], exportType, year);
                }
            });
        }

        // START: Open an inline Flowbite date editor instead of the legacy edit modal.
        const openInlineLogEditor = (btn) => {
            if (!btn || btn.querySelector('.inline-log-editor')) return;

            const dbType = btn.dataset.type;
            const logId = btn.dataset.id;
            const currentVal = btn.dataset.val || '';
            const currentStatus = btn.dataset.status || 'PENDING';
            let selectedStatus = currentStatus === 'VERIFIED' || currentStatus === 'COMPLETED' ? 'VERIFIED' : 'PENDING';
            const periodMatch = currentVal.toUpperCase().match(/([A-Z]{3})\s+(\d+)-\d+,\s*(\d{4})/);
            const initialDate = periodMatch
                ? periodMatch[3] + '-' + String(MONTHS.indexOf(periodMatch[1]) + 1).padStart(2, '0') + '-' + String(periodMatch[2]).padStart(2, '0')
                : new Date().toISOString().split('T')[0];

            const editor = document.createElement('div');
            editor.className = 'inline-log-editor absolute inset-0 z-10 flex items-center gap-1 rounded-xl bg-white px-2 shadow-lg dark:bg-slate-900';
            editor.innerHTML = '<input type="text" class="inline-log-date w-[38%] min-w-0 shrink-0 rounded-lg border border-brand/40 bg-transparent px-2 py-1.5 text-xs font-black uppercase text-heading outline-none focus:border-brand focus:ring-2 focus:ring-brand/20" value="' + initialDate + '" aria-label="Select log date">' +
                '<div class="ml-auto flex shrink-0 items-center gap-1">' +
                    '<button type="button" data-status="VERIFIED" class="inline-log-status rounded-md px-2.5 py-2 text-[0.5625rem] font-black uppercase tracking-wider transition-colors" aria-label="Set submitted status">SUBMITTED</button>' +
                    '<button type="button" data-status="PENDING" class="inline-log-status rounded-md px-2.5 py-2 text-[0.5625rem] font-black uppercase tracking-wider transition-colors" aria-label="Set pending status">PENDING</button>' +
                '</div>';
            btn.appendChild(editor);

            const dateInput = editor.querySelector('.inline-log-date');
            dateInput.title = btn.querySelector('[title]')?.getAttribute('title') || 'Select the submitted date';
            const PickerClass = window.Datepicker;
            if (PickerClass && dateInput) {
                dateInput._datepicker = new PickerClass(dateInput, { format: 'yyyy-mm-dd', autohide: true, orientation: 'bottom right' });
            }

            const refreshStatusButtons = () => {
                editor.querySelectorAll('.inline-log-status').forEach(statusButton => {
                    const active = statusButton.dataset.status === selectedStatus;
                    const pending = statusButton.dataset.status === 'PENDING';
                    statusButton.className = active
                        ? 'inline-log-status cursor-pointer rounded-md ' + (pending ? 'bg-orange-600 hover:bg-orange-700' : 'bg-emerald-600 hover:bg-emerald-700') + ' px-2.5 py-2 text-[0.5625rem] font-black uppercase tracking-wider text-white shadow-sm transition-colors'
                        : 'inline-log-status cursor-pointer rounded-md border ' + (pending ? 'border-orange-400 text-orange-700 hover:border-orange-600 hover:bg-orange-50' : 'border-emerald-400 text-emerald-700 hover:border-emerald-600 hover:bg-emerald-50') + ' bg-transparent px-2.5 py-2 text-[0.5625rem] font-black uppercase tracking-wider transition-colors dark:border-slate-600 dark:text-slate-300';
                });
            };
            refreshStatusButtons();

            editor.querySelectorAll('.inline-log-status').forEach(statusButton => statusButton.addEventListener('click', async (event) => {
                event.stopPropagation();
                selectedStatus = statusButton.dataset.status;
                refreshStatusButtons();
                const selectedDate = dateInput?.value || initialDate;
                const periodValue = computePeriodLabel(new Date(selectedDate + 'T00:00:00'));
                editor.querySelectorAll('.inline-log-status').forEach(button => { button.disabled = true; });
                statusButton.textContent = 'SAVING';

                try {
                    const payload = { type: dbType, id: logId, status: selectedStatus };
                    if (dbType === 'dtr') {
                        payload.record_date = selectedDate;
                        payload.weekday = periodValue;
                    } else {
                        payload.period = periodValue;
                    }
                    const result = await apiPut('api/logs.php', payload);
                    const json = result.success ? result.data : { success: false, error: result.error };
                    if (!json.success) throw new Error(json.error || 'Failed to update log.');
                    showInlineToast('success', 'Log submitted!', 1500);
                    if (window.viewBeneficiary) window.viewBeneficiary(data, viewController.currentPage);
                } catch (error) {
                    editor.querySelectorAll('.inline-log-status').forEach(button => { button.disabled = false; });
                    statusButton.textContent = selectedStatus === 'VERIFIED' ? 'SUBMITTED' : 'PENDING';
                    showInlineToast('error', error.message);
                }
            }));

            const closeOnOutsideClick = (event) => {
                if (!editor.contains(event.target)) {
                    dateInput?._datepicker?.hide();
                    editor.remove();
                    document.removeEventListener('click', closeOnOutsideClick, true);
                }
            };
            setTimeout(() => document.addEventListener('click', closeOnOutsideClick, true), 0);
        };
        // END: Open an inline Flowbite date editor instead of the legacy edit modal.

        drawerContainer.querySelectorAll('.edit-log-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                if (e.target.closest('.delete-log-control')) return; // ignore inline delete actions
                const logType = btn.dataset.type;
                const logId = btn.dataset.id;
                const logVal = btn.dataset.val;
                const logStatus = btn.dataset.status;
                openInlineLogEditor(btn);
            });
        });

        // START: Delete DTR/AR logs through inline confirm and loading states.
        drawerContainer.querySelectorAll('.delete-log-control').forEach(control => {
            const trigger = control.querySelector('.delete-log-trigger');
            const confirmButton = control.querySelector('.delete-log-confirm');
            const cancelButton = control.querySelector('.delete-log-cancel');

            trigger?.addEventListener('click', (event) => {
                event.stopPropagation();
                closeInlineActions(control);
                control.dataset.confirming = 'true';
                control.classList.remove('w-11', 'opacity-0', 'pointer-events-none');
                control.classList.add('w-22', 'opacity-100', 'pointer-events-auto');
                control.closest('.edit-log-btn')?.querySelector('.log-status-label')?.classList.add('!pr-24');
                trigger.classList.replace('flex', 'hidden');
                control.querySelector('.delete-confirm-actions')?.classList.replace('hidden', 'flex');
            });

            cancelButton?.addEventListener('click', (event) => {
                event.stopPropagation();
                resetDeleteButton(control);
            });

            confirmButton?.addEventListener('click', async (event) => {
                event.stopPropagation();
                if (control.dataset.loading === 'true') return;

                const logId = control.dataset.id;
                const logType = control.dataset.type;
                control.dataset.loading = 'true';
                confirmButton.disabled = true;
                cancelButton.disabled = true;
                confirmButton.querySelector('.delete-confirm-icon')?.classList.add('hidden');
                confirmButton.querySelector('.delete-loading-icon')?.classList.replace('hidden', 'block');

                try {
                    const result = await apiPost(`api/logs.php?type=${logType}`, {
                        log_id: logId,
                        action: 'delete'
                    });
                    const json = result.success ? result.data : { success: false, error: result.error };
                    if (!json.success) throw new Error(json.error || 'Failed to delete data.');

                    showInlineToast('success', 'Deleted');
                    if (window.viewBeneficiary) window.viewBeneficiary(data, viewController.currentPage);
                } catch (error) {
                    control.dataset.loading = 'false';
                    confirmButton.disabled = false;
                    cancelButton.disabled = false;
                    confirmButton.querySelector('.delete-loading-icon')?.classList.replace('block', 'hidden');
                    confirmButton.querySelector('.delete-confirm-icon')?.classList.remove('hidden');
                    resetDeleteButton(control);
                    showInlineToast('error', error.message);
                }
            });
        });
        // END: Delete DTR/AR logs through inline confirm and loading states.

    }).catch((error) => {
        console.error('[GIP Drawer] Initialization failed', error);
    });
}
