import Swal from 'sweetalert2';

/**
 * Show modern error modal for authentication
 */
export function showAuthError(message = 'Incorrect Username or Password') {
    Swal.fire({
        html: `
            <div class="p-6">
                <div class="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-red-100 mb-4">
                    <svg class="h-10 w-10 text-philippine-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                </div>
                <h3 class="text-xl font-black text-gray-900 mb-2">Authentication Failed</h3>
                <p class="text-sm text-gray-600 font-medium">${message}</p>
                <p class="text-xs text-gray-500 mt-3">Please check your credentials and try again.</p>
            </div>
        `,
        timer: 3000,
        timerProgressBar: true,
        showConfirmButton: false,
        showCloseButton: true,
        width: '400px',
        padding: '0',
        customClass: {
            container: 'font-montserrat',
            popup: 'rounded-2xl shadow-2xl overflow-hidden',
            timerProgressBar: 'bg-philippine-red h-1.5',
            closeButton: 'text-gray-400 hover:text-gray-600 transition-colors focus:outline-none hover:bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center'
        },
        backdrop: 'rgba(0, 0, 0, 0.4)'
    });
}

/**
 * Show modern success modal for authentication
 */
export function showLoginSuccess() {
    return Swal.fire({
        html: `
            <div class="p-6">
                <div class="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
                    <svg class="h-10 w-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h3 class="text-xl font-black text-gray-900 mb-2">Welcome Back!</h3>
                <p class="text-sm text-gray-600 font-medium">Authentication successful.</p>
                <p class="text-xs text-gray-500 mt-3">Redirecting to dashboard...</p>
            </div>
        `,
        timer: 1500,
        timerProgressBar: true,
        showConfirmButton: false,
        showCloseButton: false,
        width: '400px',
        padding: '0',
        customClass: {
            container: 'font-montserrat',
            popup: 'rounded-2xl shadow-2xl overflow-hidden',
            timerProgressBar: 'bg-green-600 h-1.5'
        },
        backdrop: 'rgba(0, 0, 0, 0.4)'
    });
}

/**
 * LDN Modal Module
 * Handles the display of beneficiary details and data entry using SweetAlert2
 */

export function initModalHandler() {
    // Expose the functions to the global window object
    window.viewBeneficiary = function (data) {
        showBeneficiaryModal(data);
    };
    window.showAddDataModal = function () {
        showAddDataModal();
    };
    window.editBeneficiary = function (data) {
        showAddDataModal(data);
    };
}

const COMMON_COURSES = [
    "BS Information Technology",
    "BS Computer Science",
    "BS Criminology",
    "BS Business Administration",
    "BS Accountancy",
    "BS Civil Engineering",
    "BS Electrical Engineering",
    "BS Mechanical Engineering",
    "BS Nursing",
    "BS Hospitality Management",
    "Bachelor of Secondary Education",
    "Bachelor of Elementary Education",
    "BS Psychology",
    "BS Biology",
    "Senior High School Graduate",
    "High School Graduate"
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

function showBeneficiaryModal(data) {
    // Current Page Index for the Right Grid (0 = Info, 1 = Documents/etc)
    let rightGridPage = 0;

    // Mock Data for Visualization (Dela Cruz)
    const isMock = data.name && data.name.toLowerCase().includes('dela cruz');
    const arLogs = isMock ? [
        { period: 'Jan 01 - 15, 2025', date: 'Jan 16, 2025', status: 'verified' },
        { period: 'Jan 16 - 31, 2025', date: 'Feb 01, 2025', status: 'verified' },
        { period: 'Feb 01 - 15, 2025', date: 'Feb 14, 2025', status: 'pending' }
    ] : [];
    const dtrLogs = isMock ? [
        { period: 'Feb 01, 2026', date: 'Feb 01, 2026', status: 'verified', day: 'MONDAY' },
        { period: 'Feb 02, 2026', date: 'Feb 02, 2026', status: 'verified', day: 'TUESDAY' },
        { period: 'Feb 03, 2026', date: 'Feb 03, 2026', status: 'pending', day: 'WEDNESDAY' }
    ] : [];

    const getRowHtml = (log, type, i) => {
        const configs = {
            verified: { bg: 'bg-green-500', icon: 'M5 13l4 4L19 7', textClass: 'text-green-600 bg-green-50 border-green-200' },
            pending: { bg: 'bg-orange-400', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', textClass: 'text-orange-600 bg-orange-50 border-orange-200' },
            declined: { bg: 'bg-red-500', icon: 'M6 18L18 6M6 6l12 12', textClass: 'text-red-600 bg-red-50 border-red-200' }
        };
        const config = configs[log.status];
        const targetId = `${type}-${i}`;

        // Manila Time Formatting (Date Only)
        const nowMnl = new Date().toLocaleString('en-US', {
            timeZone: 'Asia/Manila',
            month: 'short',
            day: '2-digit',
            year: 'numeric'
        });

        const displayDate = log.date ?
            new Date(log.date).toLocaleString('en-US', { timeZone: 'Asia/Manila', month: 'short', day: '2-digit', year: 'numeric' }) :
            nowMnl;

        const inputDate = log.date ? new Date(log.date).toISOString().split('T')[0] : new Date().toISOString().split('T')[0];

        // For DTR: log.period is the Date string, log.day is the weekday
        const dtrDay = log.day || (log.date ? new Date(log.date).toLocaleString('en-US', { weekday: 'long' }).toUpperCase() : 'MONDAY');

        return `
            <tr id="row-${targetId}" class="group/log hover:bg-gray-50/80 transition-all border-b border-gray-50 last:border-none whitespace-nowrap relative overflow-hidden swipe-row select-none">
                <td class="p-2.5">
                    <!-- Column 1: Period (AR) or Date (DTR) -->
                    <div class="doc-view-mode-container">
                        <span id="period-text-${targetId}" class="text-[10px] font-black text-gray-700">${log.period}</span>
                    </div>
                    <div class="doc-edit-mode-container hidden">
                        ${type === 'dtr' ?
                `<input type="date" value="${inputDate}" class="dtr-date-picker bg-white border border-royal-blue/30 rounded px-1 py-0.5 text-[9px] font-bold text-royal-blue outline-none" data-target="period-text-${targetId}" />` :
                `<input type="text" id="period-input-${targetId}" value="${log.period}" class="bg-white border border-royal-blue/30 rounded px-1.5 py-0.5 text-[10px] font-black text-royal-blue outline-none w-full" data-target="period-text-${targetId}" />`
            }
                    </div>
                </td>
                <td class="p-2.5 text-center">
                    <!-- Column 2: Date Submitted (AR) or Day (DTR) -->
                    <div class="doc-view-mode-container">
                        <span id="submit-date-${targetId}" class="submission-date-text text-[9px] font-bold text-gray-400 uppercase tracking-tighter">${type === 'dtr' ? dtrDay : displayDate}</span>
                    </div>
                    <div class="doc-edit-mode-container hidden">
                        ${type === 'dtr' ? `
                            <select class="dtr-day-select bg-white border border-royal-blue/30 rounded px-1 py-0.5 text-[9px] font-bold text-royal-blue outline-none appearance-none cursor-pointer" data-target="submit-date-${targetId}">
                                ${['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY'].map(d => `<option value="${d}" ${d === dtrDay ? 'selected' : ''}>${d}</option>`).join('')}
                            </select>
                        ` : `
                            <input type="date" value="${inputDate}" class="submit-date-picker bg-white border border-royal-blue/30 rounded px-1 py-0.5 text-[9px] font-bold text-royal-blue outline-none" data-target="submit-date-${targetId}" />
                        `}
                    </div>
                </td>
                <td class="p-2.5 text-right w-[100px]">
                    <div class="doc-view-mode-container flex justify-end items-center gap-1.5">
                        <div id="doc-indicator-${targetId}" class="w-3.5 h-3.5 rounded-full ${config.bg} text-white flex items-center justify-center shadow-sm">
                            <svg class="w-2 h-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path id="doc-path-${targetId}" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="${config.icon}" /></svg>
                        </div>
                        <span id="doc-text-badge-${targetId}" class="text-[8px] ${config.textClass} font-black uppercase px-2 py-0.5 rounded border tracking-tighter shadow-sm">${log.status}</span>
                    </div>
                    <div class="doc-edit-mode-container hidden flex justify-end gap-1">
                        <button data-status="verified" data-target="${targetId}" title="Verify" class="doc-status-btn p-1.5 rounded-lg bg-green-50 text-green-600 border border-green-200 hover:bg-green-500 hover:text-white transition-all"><svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" /></svg></button>
                        <button data-status="pending" data-target="${targetId}" title="Pending" class="doc-status-btn p-1.5 rounded-lg bg-orange-50 text-orange-600 border border-orange-200 hover:bg-orange-400 hover:text-white transition-all"><svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></button>
                        <button data-status="declined" data-target="${targetId}" title="Decline" class="doc-status-btn p-1.5 rounded-lg bg-red-50 text-red-700 border border-red-200 hover:bg-red-500 hover:text-white transition-all"><svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12" /></svg></button>
                    </div>
                </td>
                <!-- Archive Overlay -->
                <td colspan="3" class="p-0">
                    <div class="archive-overlay absolute inset-0 bg-red-500/95 backdrop-blur-sm flex items-center justify-end px-2 sm:px-6 gap-3 opacity-0 pointer-events-none transition-all duration-200 z-10">
                        <span class="text-white font-black text-[10px] uppercase tracking-widest mr-1 hidden sm:inline-block">Are you sure?</span>
                        <button type="button" class="confirm-archive-btn w-8 h-8 rounded-full bg-white text-green-600 border-2 border-green-100 flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-transform cursor-pointer">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" /></svg>
                        </button>
                        <button type="button" class="cancel-archive-btn w-8 h-8 rounded-full bg-white text-red-600 border-2 border-red-100 flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-transform cursor-pointer">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                    </div>
                </td>
            </tr>
        `;
    };

    const modalContent = () => `
        <div class="text-left font-montserrat user-select-none relative pt-2">
            <!-- Header with ID and Status -->
            <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 pb-4 border-b border-gray-100">
                <div>
                    <h3 class="text-2xl font-black text-royal-blue leading-tight mb-1.5 tracking-tight">${data.name}</h3>
                    <div class="flex items-center gap-2">
                         <span class="bg-gray-100 text-gray-500 text-[9px] font-black px-2 py-0.5 rounded border border-gray-200 uppercase tracking-widest">
                            ${data.id}
                        </span>
                        <span class="${getStatusColor(data.remarks)} text-[9px] font-black px-2 py-0.5 rounded border border-current uppercase tracking-widest">
                            ${data.remarks}
                        </span>
                    </div>
                </div>
                <div class="mt-2 sm:mt-0 text-right">
                    <span class="${getOfficeColor(data.office)} text-[10px] font-bold px-3 py-1 rounded-full border border-current shadow-sm">
                        ${data.office}
                    </span>
                    <p class="text-[9px] text-gray-400 font-bold mt-1 uppercase tracking-widest">Assigned Office</p>
                </div>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:divide-x lg:divide-gray-100">
                
                <!-- LEFT GRID: Basic Information -->
                <div class="space-y-4 pr-0 lg:pr-6">
                    <div class="bg-gray-50/50 rounded-xl p-4 border border-gray-100 shadow-sm">
                        <p class="text-[9px] uppercase tracking-widest text-gray-400 font-black mb-3 border-b border-gray-100 pb-1.5">Personal Profile</p>
                        
                        <div class="space-y-4">
                             <div class="grid grid-cols-2 gap-4">
                                <div>
                                    <label class="text-[9px] text-gray-400 font-black uppercase tracking-widest block mb-1">Contact No.</label>
                                    <p class="text-sm font-black text-heading font-mono">${data.contact || 'N/A'}</p>
                                </div>
                                <div class="">
                                    <label class="text-[9px] text-gray-400 font-black uppercase tracking-widest block mb-1">Address</label>
                                    <p class="text-sm font-black text-heading break-words whitespace-normal leading-snug" title="${data.address}">${data.address || 'N/A'}</p>
                                </div>
                            </div>

                             <div class="grid grid-cols-2 gap-4">
                                <div>
                                    <label class="text-[9px] text-gray-400 font-black uppercase tracking-widest block mb-1">Birthday</label>
                                    <p class="text-sm font-black text-heading uppercase">${data.birthday || 'N/A'}</p>
                                </div>
                                <div>
                                    <label class="text-[9px] text-gray-400 font-black uppercase tracking-widest block mb-1">Age</label>
                                    <p class="text-sm font-black text-heading">${data.age || calculateAge(data.birthday) || 'N/A'}</p>
                                </div>
                            </div>

                             <div>
                                <label class="text-[9px] text-gray-400 font-black uppercase tracking-widest block mb-1">Gender</label>
                                <p class="text-sm font-black text-heading uppercase">${data.gender || 'N/A'}</p>
                            </div>
                        </div>
                    </div>

                    <div class="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                        <label class="text-[9px] text-gray-400 font-black uppercase tracking-widest block mb-1.5">Educational Attainment</label>
                        <div class="flex items-center gap-3">
                             <div class="w-8 h-8 rounded-lg bg-golden-yellow/10 flex items-center justify-center text-golden-yellow border border-golden-yellow/20 shadow-sm">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/></svg>
                             </div>
                             <p class="text-sm font-black text-heading">${data.education || 'N/A'}</p>
                        </div>
                    </div>

                    <div class="pt-2">
                         <label class="text-[9px] text-gray-400 font-black uppercase tracking-widest block mb-2">Primary Contract Duration</label>
                         <div class="grid grid-cols-2 gap-3 text-center">
                            <div class="bg-gray-100/50 rounded-lg p-3 border border-gray-200/50">
                                <span class="text-[8px] text-gray-400 block uppercase font-bold tracking-tight mb-0.5">Start Date</span>
                                <span class="text-[11px] font-black text-royal-blue uppercase">${data.startDate || 'Jan 01 2025'}</span>
                            </div>
                            <div class="bg-gray-100/50 rounded-lg p-3 border border-gray-200/50">
                                <span class="text-[8px] text-gray-400 block uppercase font-bold tracking-tight mb-0.5">End Date</span>
                                <span class="text-[11px] font-black text-royal-blue uppercase">${data.endDate || 'Jun 30 2025'}</span>
                            </div>
                         </div>
                    </div>
                </div>

                <!-- RIGHT GRID: Work Details & Docs (Paginated) -->
                <div class="space-y-4 pl-0 lg:pl-6 relative min-h-[350px]">
                    <!-- Pagination Toggles -->
                    <button id="modal-prev-btn" 
                        class="absolute top-36 -left-6 w-10 h-10 rounded-full transition-all duration-300 cursor-pointer flex items-center justify-center group text-royal-blue hover:scale-110 active:scale-95 hidden" 
                        title="Back">
                        <svg class="w-6 h-6 transform translate-y-[1px] group-hover:-translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M11 19l-7-7 7-7m8 14l-7-7 7-7"/>
                        </svg>
                    </button>

                    <button id="modal-next-btn" 
                        class="absolute top-36 -right-10 w-10 h-10 rounded-full transition-all duration-300 cursor-pointer flex items-center justify-center group text-royal-blue hover:scale-110 active:scale-95" 
                        title="Next: Required Docs">
                        <svg class="w-6 h-6 transform translate-y-[1px] group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 5l7 7-7 7M5 5l7 7-7 7"/>
                        </svg>
                    </button>
                    
                    <div id="modal-page-0" class="transition-opacity duration-300 space-y-4">
                        <div class="bg-gray-50/50 rounded-xl p-4 border border-gray-100 shadow-sm">
                             <p class="text-[9px] uppercase tracking-widest text-gray-400 font-black mb-3">Work Registry</p>
                             <div class="flex items-center gap-3">
                                <div class="p-2 bg-blue-50 rounded-lg border border-blue-100">
                                    <svg class="w-5 h-5 text-royal-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                                </div>
                                <div>
                                    <label class="text-[9px] text-gray-400 font-black block mb-0.5 uppercase tracking-widest">Series Number</label>
                                    <span class="text-base font-black text-royal-blue font-mono">
                                        ${data.seriesNo || '2025-00-000'}
                                    </span>
                                </div>
                            </div>
                        </div>

                         <div class="bg-white border border-gray-100 p-4 rounded-xl shadow-sm">
                            <label class="text-[9px] text-gray-400 font-black block mb-1 uppercase tracking-widest">Designation / Role</label>
                            <p class="text-sm font-black text-heading">${data.designation}</p>
                        </div>
                        
                         <div class="bg-gray-50/30 p-4 rounded-xl border border-dashed border-gray-200">
                            <label class="text-[9px] text-gray-400 font-black block mb-1 uppercase tracking-widest">Replacement History</label>
                             <p class="text-xs text-gray-500 font-medium italic">${data.replacement || 'None found.'}</p>
                        </div>

                        <div id="modal-log-section" class="pt-2">
                             ${data.remarks === 'ABSORBED' ? `
                                <label class="text-[9px] text-green-600 font-black uppercase tracking-widest block mb-2">Absorption Record</label>
                                <div class="bg-green-50 border border-green-100 rounded-lg p-3 flex items-center justify-between shadow-sm">
                                    <div>
                                        <span class="text-[8px] text-green-600 block uppercase font-bold tracking-tight mb-0.5">Logged Date/Time</span>
                                        <span class="text-[11px] font-black text-green-700 uppercase">${data.absorbDate || new Date().toLocaleString('en-US', { timeZone: 'Asia/Manila', month: 'short', day: '2-digit', year: 'numeric' })}</span>
                                    </div>
                                    <div class="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                                    </div>
                                </div>
                             ` : ''}
                        </div>
                    </div>

                    <div id="modal-page-1" class="hidden transition-opacity duration-300 h-full">
                         <div class="bg-white rounded-xl p-4 border border-gray-100 shadow-sm h-full flex flex-col">
                            <div class="mb-4 border-b border-gray-50 pb-2 flex items-center justify-between">
                                <p class="text-[9px] uppercase tracking-widest text-gray-400 font-black flex items-center gap-2">
                                    <svg class="w-4 h-4 text-royal-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                                    Required Documents
                                </p>
                                <button type="button" id="toggle-docs-edit" class="toggle-docs-edit p-1.5 rounded-lg text-gray-400 hover:bg-royal-blue/10 hover:text-royal-blue transition-all cursor-pointer group/toggle" title="Manage Documentation Status">
                                    <svg class="w-4 h-4 transition-transform group-hover/toggle:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                                </button>
                            </div>
                            <ul id="docs-list-static" class="space-y-4 flex-1 pt-2 pl-2">
                                ${['GIP FORM', 'Birth Certificate', 'Diploma', 'TOR', 'Valid ID'].map((doc, i) => `
                                    <li class="relative flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-gray-50/50 p-3 pt-4 sm:pt-3 rounded-xl border border-gray-100 group/doc transition-all hover:bg-white hover:shadow-md">
                                        <div id="doc-indicator-static-${i}" class="absolute -top-2 -left-2 w-5 h-5 rounded-full border-2 border-white shadow-md flex items-center justify-center bg-orange-400 text-white z-10 transition-transform group-hover/doc:scale-110">
                                            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path id="doc-path-static-${i}" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <div class="flex-1 min-w-0 pr-2">
                                            <span class="doc-name-display text-[11px] font-black text-gray-700 truncate block cursor-text hover:text-royal-blue transition-colors" title="${doc}">${doc}</span>
                                            <input type="text" value="${doc}" class="doc-name-edit hidden w-full bg-white border border-royal-blue/30 rounded px-1.5 py-0.5 text-[11px] font-black text-royal-blue outline-none ring-2 ring-royal-blue/10">
                                        </div>
                                        <div class="doc-view-mode-container shrink-0 flex items-center">
                                            <span id="doc-text-badge-static-${i}" class="text-[8px] text-orange-600 bg-orange-50 border-orange-200 font-black uppercase px-2 py-0.5 rounded border tracking-tighter shadow-sm">PENDING</span>
                                        </div>
                                        <div class="doc-edit-mode-container hidden flex items-center gap-1.5 shrink-0">
                                            <button data-status="verified" data-target="static-${i}" title="Mark as Verified" class="doc-status-btn cursor-pointer w-7 h-7 flex items-center justify-center rounded-lg transition-all border bg-green-50 text-green-700 border-green-200 hover:bg-green-500 hover:text-white">
                                                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" /></svg>
                                            </button>
                                            <button data-status="pending" data-target="static-${i}" title="Mark as Pending" class="doc-status-btn cursor-pointer w-7 h-7 flex items-center justify-center rounded-lg transition-all border bg-orange-50 text-orange-700 border-orange-200 hover:bg-orange-400 hover:text-white">
                                                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                            </button>
                                            <button data-status="declined" data-target="static-${i}" title="Mark as Declined" class="doc-status-btn cursor-pointer w-7 h-7 flex items-center justify-center rounded-lg transition-all border bg-red-50 text-red-700 border-red-200 hover:bg-red-500 hover:text-white">
                                                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12" /></svg>
                                            </button>
                                        </div>
                                    </li>
                                `).join('')}
                            </ul>
                        </div>
                    </div>

                    <div id="modal-page-2" class="hidden h-full flex flex-col gap-4">
                        <!-- Accomplishment Report Section -->
                        <div class="bg-white rounded-xl p-4 border border-gray-100 shadow-sm flex-1 flex flex-col min-h-0 overflow-hidden">
                            <div class="mb-3 border-b border-gray-50 pb-2 flex items-center justify-between">
                                <p class="text-[9px] uppercase tracking-widest text-gray-400 font-black flex items-center gap-2">
                                    <svg class="w-4 h-4 text-royal-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/></svg>
                                    Accomplishment Report
                                </p>
                                <div class="flex items-center gap-1.5">
                                    <button type="button" data-type="ar" class="add-log-btn p-1.5 rounded-lg text-green-500 hover:bg-green-50 transition-all cursor-pointer group/add" title="Add Report Log">
                                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" /></svg>
                                    </button>
                                    <button type="button" class="toggle-logs-edit p-1.5 rounded-lg text-gray-400 hover:bg-gray-50 transition-all cursor-pointer" title="Manage Logs">
                                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                                    </button>
                                </div>
                            </div>
                            <div class="flex-1 overflow-y-auto custom-scrollbar pr-1">
                                <table class="w-full text-left">
                                    <thead class="sticky top-0 bg-white z-10 border-b border-gray-100">
                                        <tr class="bg-gray-50/50">
                                            <th class="p-2 text-[8px] font-black uppercase text-gray-400 tracking-widest">Period</th>
                                            <th class="p-2 text-[8px] font-black uppercase text-gray-400 tracking-widest text-center">Date Submitted</th>
                                            <th class="p-2 text-[8px] font-black uppercase text-gray-400 tracking-widest text-right">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody id="ar-logs-body">
                                        ${arLogs.map((log, i) => getRowHtml(log, 'ar', i)).join('')}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <!-- Daily Time Record Section -->
                        <div class="bg-white rounded-xl p-4 border border-gray-100 shadow-sm flex-1 flex flex-col min-h-0 overflow-hidden">
                            <div class="mb-3 border-b border-gray-50 pb-2 flex items-center justify-between">
                                <p class="text-[9px] uppercase tracking-widest text-gray-400 font-black flex items-center gap-2">
                                    <svg class="w-4 h-4 text-royal-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                                    Daily Time Record
                                </p>
                                <div class="flex items-center gap-1.5">
                                    <button type="button" data-type="dtr" class="add-log-btn p-1.5 rounded-lg text-green-500 hover:bg-green-50 transition-all cursor-pointer group/add" title="Add DTR Log">
                                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" /></svg>
                                    </button>
                                    <button type="button" class="toggle-logs-edit p-1.5 rounded-lg text-gray-400 hover:bg-gray-50 transition-all cursor-pointer" title="Manage Logs">
                                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                                    </button>
                                </div>
                            </div>
                            <div class="flex-1 overflow-y-auto custom-scrollbar pr-1">
                                <table class="w-full text-left">
                                    <thead class="sticky top-0 bg-white z-10 border-b border-gray-100">
                                        <tr class="bg-gray-50/50">
                                            <th class="p-2 text-[8px] font-black uppercase text-gray-400 tracking-widest">Date</th>
                                            <th class="p-2 text-[8px] font-black uppercase text-gray-400 tracking-widest text-center">Day</th>
                                            <th class="p-2 text-[8px] font-black uppercase text-gray-400 tracking-widest text-right">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody id="dtr-logs-body">
                                        ${dtrLogs.map((log, i) => getRowHtml(log, 'dtr', i)).join('')}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    `;

    Swal.fire({
        html: modalContent(),
        width: '850px',
        showConfirmButton: false,
        showCloseButton: true,
        padding: '2rem',
        customClass: {
            container: 'font-montserrat',
            popup: 'rounded-[1.5rem] ldn-modal-popup shadow-2xl',
            closeButton: 'focus:outline-none swal2-custom-close border-none'
        },
        didOpen: (popup) => {
            const nextBtn = popup.querySelector('#modal-next-btn');
            const page0 = popup.querySelector('#modal-page-0');
            const page1 = popup.querySelector('#modal-page-1');
            const page2 = popup.querySelector('#modal-page-2');

            // Inject custom styles
            if (!document.getElementById('ldn-modal-common-styles')) {
                const style = document.createElement('style');
                style.id = 'ldn-modal-common-styles';
                style.innerHTML = `
                    .ldn-modal-popup {
                        overflow: visible !important;
                    }
                    .swal2-html-container {
                        overflow: visible !important;
                        margin: 0 !important;
                    }
                    .ldn-modal-popup .swal2-close {
                        position: absolute !important;
                        top: 18px !important;
                        right: 18px !important;
                        transition: all 0.3s ease !important;
                        width: 32px !important;
                        height: 32px !important;
                        display: flex !important;
                        align-items: center !important;
                        justify-content: center !important;
                        border-radius: 50% !important;
                        font-size: 20px !important;
                        color: #9ca3af !important;
                        margin: 0 !important;
                        border: none !important;
                        z-index: 10 !important;
                        background: #f9fafb !important;
                    }
                    .ldn-modal-popup .swal2-close:hover {
                        background-color: #ce1126 !important;
                        color: white !important;
                        transform: scale(1.1) !important;
                    }
                    #modal-next-btn:hover svg {
                        color: #4ade80 !important; /* LIGHT GREEN */
                        stroke-width: 3 !important;
                    }
                    #modal-prev-btn:hover svg {
                        color: #f87171 !important; /* LIGHT RED */
                        stroke-width: 3 !important;
                    }
                    .custom-scrollbar::-webkit-scrollbar {
                        width: 4px;
                    }
                    .custom-scrollbar::-webkit-scrollbar-track {
                        background: #f8fafc;
                        border-radius: 10px;
                    }
                    .custom-scrollbar::-webkit-scrollbar-thumb {
                        background: #cbd5e1;
                        border-radius: 10px;
                    }
                    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                        background: #94a3b8;
                    }
                    @keyframes toast-in {
                        from { transform: translateX(100%); opacity: 0; }
                        to { transform: translateX(0); opacity: 1; }
                    }
                    .animate-toast-in {
                        animation: toast-in 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
                    }
                    .swipe-row {
                        touch-action: pan-y;
                        cursor: grab;
                    }
                    .swipe-row:active {
                        cursor: grabbing;
                    }
                `;
                document.head.appendChild(style);
            }

            if (nextBtn) {
                const prevBtn = popup.querySelector('#modal-prev-btn');
                const pages = [page0, page1, page2];
                const pageTitles = ["Basic Information", "Required Docs", "Submission Logs"];

                const updateNavigation = () => {
                    pages.forEach((p, i) => p.classList.toggle('hidden', i !== rightGridPage));

                    // Update Visibility
                    if (prevBtn) prevBtn.classList.toggle('hidden', rightGridPage === 0);
                    if (nextBtn) nextBtn.classList.toggle('hidden', rightGridPage === 2);

                    // Update Tooltips
                    if (nextBtn && rightGridPage < 2) {
                        nextBtn.setAttribute("title", "Next: " + pageTitles[rightGridPage + 1]);
                    }
                    if (prevBtn && rightGridPage > 0) {
                        prevBtn.setAttribute("title", "Back: " + pageTitles[rightGridPage - 1]);
                    }

                    // Special Positioning for Page 2 (Submission Logs)
                    const btns = [prevBtn, nextBtn].filter(Boolean);
                    btns.forEach(btn => {
                        if (rightGridPage === 2) {
                            btn.style.top = '229px';
                        } else {
                            btn.style.top = ''; // Reset to top-36 from CSS
                        }
                    });
                };

                nextBtn.addEventListener('click', () => {
                    if (rightGridPage < 2) {
                        rightGridPage++;
                        updateNavigation();
                    }
                });

                if (prevBtn) {
                    prevBtn.addEventListener('click', () => {
                        if (rightGridPage > 0) {
                            rightGridPage--;
                            updateNavigation();
                        }
                    });
                }
            }

            // Documentation Edit Mode Toggle (Primary + Tables)
            popup.querySelectorAll('.toggle-docs-edit, .toggle-logs-edit').forEach(btn => {
                btn.addEventListener('click', () => {
                    const section = btn.closest('div.bg-white') || btn.closest('div.pt-4');
                    if (!section) return;

                    const isEditing = btn.classList.contains('bg-royal-blue');

                    if (isEditing) {
                        btn.classList.remove('bg-royal-blue', 'text-white', 'shadow-md');
                        btn.classList.add('text-gray-400');
                        btn.innerHTML = `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>`;
                        section.querySelectorAll('.doc-name-edit').forEach(el => el.classList.add('hidden'));
                        section.querySelectorAll('.doc-name-display').forEach(el => el.classList.remove('hidden'));
                    } else {
                        btn.classList.add('bg-royal-blue', 'text-white', 'shadow-md');
                        btn.classList.remove('text-gray-400');
                        btn.innerHTML = `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>`;
                    }
                    section.querySelectorAll('.doc-view-mode-container').forEach(el => el.classList.toggle('hidden'));
                    section.querySelectorAll('.doc-edit-mode-container').forEach(el => el.classList.toggle('hidden'));
                });
            });

            // Status Toggler Logic (Delegated)
            popup.addEventListener('click', (e) => {
                const btn = e.target.closest('.doc-status-btn');
                if (!btn) return;
                e.preventDefault();
                const status = btn.dataset.status;
                const targetId = btn.dataset.target;
                const indicator = popup.querySelector(`#doc-indicator-${targetId}`);
                const path = popup.querySelector(`#doc-path-${targetId}`);
                const textBadge = popup.querySelector(`#doc-text-badge-${targetId}`);
                const submitDateLabel = popup.querySelector(`#submit-date-${targetId}`);

                const statusConfigs = {
                    verified: { bg: 'bg-green-500', icon: 'M5 13l4 4L19 7', textClass: 'text-green-600 bg-green-50 border-green-200' },
                    pending: { bg: 'bg-orange-400', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', textClass: 'text-orange-600 bg-orange-50 border-orange-200' },
                    declined: { bg: 'bg-red-500', icon: 'M6 18L18 6M6 6l12 12', textClass: 'text-red-600 bg-red-50 border-red-200' }
                };
                const config = statusConfigs[status];

                if (indicator) {
                    indicator.className = (targetId.includes('static') || targetId.includes('custom')) ?
                        `absolute -top-2 -left-2 w-5 h-5 rounded-full border-2 border-white shadow-md flex items-center justify-center ${config.bg} text-white z-10 transition-transform group-hover/doc:scale-110` :
                        `w-3.5 h-3.5 rounded-full ${config.bg} text-white flex items-center justify-center shadow-sm`;
                }
                if (path) path.setAttribute('d', config.icon);
                if (textBadge) {
                    textBadge.className = `text-[8px] ${config.textClass} font-black uppercase px-2 py-0.5 rounded border tracking-tighter shadow-sm`;
                    textBadge.innerText = status;
                }
                if (submitDateLabel && targetId.includes('ar-')) {
                    submitDateLabel.innerText = new Date().toLocaleString('en-US', { timeZone: 'Asia/Manila', month: 'short', day: '2-digit', year: 'numeric' });
                }
                if (indicator) {
                    indicator.classList.add('scale-125');
                    setTimeout(() => indicator.classList.remove('scale-125'), 200);
                }
            });

            // Swipe-to-Archive Logic
            const handleSwipeStart = (e) => {
                // Ignore if interacting with overlay buttons or form elements
                if (e.target.closest('.confirm-archive-btn') || e.target.closest('.cancel-archive-btn')) return;
                if (e.target.closest('button') || e.target.closest('input') || e.target.closest('select')) return;

                const targetRow = e.target.closest('.swipe-row');
                if (!targetRow || e.button !== 0) return;

                let startX = e.clientX;
                let currentX = 0;
                const threshold = 100;
                const overlay = targetRow.querySelector('.archive-overlay');
                targetRow.style.transition = 'none';

                const onMouseMove = (ev) => {
                    currentX = ev.clientX - startX;
                    if (currentX > 0) currentX = 0;
                    targetRow.style.transform = `translateX(${currentX}px)`;
                    if (overlay) overlay.style.opacity = Math.min(Math.abs(currentX) / threshold, 1);
                    ev.preventDefault();
                };

                const onMouseUp = () => {
                    document.removeEventListener('mousemove', onMouseMove);
                    document.removeEventListener('mouseup', onMouseUp);
                    targetRow.style.transition = 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)';

                    if (Math.abs(currentX) >= threshold) {
                        // Snap to open state (Threshold reached)
                        targetRow.style.transform = `translateX(-100%)`; // Move fully out? No, maybe just enough to show overlay? 
                        // Actually, previous logic was moving out. User wants "pause/confirmation".
                        // Let's snap it slightly off-screen or just keep it fully covered by overlay? 
                        // The overlay is inside the row, covering it? 
                        // Wait, structure: <tr class="relative overflow-hidden"> <td>...</td> <td colspan="3"><div class="absolute inset-0"></div></td>
                        // If we translate the ROW, the overlay moves with it?
                        // Actually, the swipe usually moves the content to reveal something behind, OR it moves the whole row.

                        // Let's assume the previous logic: `translateX(-100%)` moved the row OFF screen?
                        // If we want to show the overlay which is absolute inset-0 (covering the row), we probably want the row to stay in place but maybe reveal the overlay?
                        // No, the previous code was: `targetRow.style.transform = translateX(-100%)`. This moves the row TO THE LEFT.
                        // If the overlay is `absolute inset-0`, it is moving WITH the row.

                        // Ah, let's look at the structure.
                        // The overlay is `absolute inset-0` inside a cell? No.
                        // It is in a `td` with `colspan="3"`.

                        // Let's change the interaction.
                        // We slide the row to the left. The overlay should appear.
                        // If we just want to show the overlay, maybe we don't translate the row away?
                        // Or maybe we treat the "archive" action as "swiping left to reveal actions"?

                        // Let's try this:
                        // When swiping left, we translation the row content?
                        // The `swipe-row` class is on the `TR`.

                        // If I move the TR `translateX(-100%)`, it goes off screen.
                        // I probably want to keep it visible but showing the overlay.

                        // Revised Logic:
                        // 1. Overlay is initially `opacity-0` and `pointer-events-none`.
                        // 2. As we swipe, we increase opacity.
                        // 3. If threshold reached, we keep the overlay visible (`opacity: 1`) and enable pointer events.
                        // 4. We DO NOT translate the row off screen yet. We snap it back to 0? Or keep it slightly translated?
                        // If we snap back to 0, it looks like nothing happened, but the overlay is now on top.

                        targetRow.style.transform = 'translateX(0)'; // Snap back to place
                        if (overlay) {
                            overlay.style.opacity = '1';
                            overlay.style.pointerEvents = 'auto'; // Enable buttons
                        }
                    } else {
                        // Cancel swipe
                        targetRow.style.transform = 'translateX(0)';
                        if (overlay) {
                            overlay.style.opacity = '0';
                            overlay.style.pointerEvents = 'none';
                        }
                    }
                };
                document.addEventListener('mousemove', onMouseMove);
                document.addEventListener('mouseup', onMouseUp);
            };
            popup.addEventListener('mousedown', handleSwipeStart);

            // Handle Confirmation Clicks (Delegated)
            popup.addEventListener('click', (e) => {
                const confirmBtn = e.target.closest('.confirm-archive-btn');
                const cancelBtn = e.target.closest('.cancel-archive-btn');

                if (confirmBtn) {
                    const row = confirmBtn.closest('.swipe-row');
                    if (row) {
                        row.style.transition = 'all 0.3s ease';
                        row.style.transform = 'translateX(-100%)';
                        row.style.opacity = '0';
                        setTimeout(() => {
                            row.remove();
                            Swal.fire({
                                toast: true,
                                position: 'top-end',
                                icon: 'success',
                                title: 'Entry Archived',
                                showConfirmButton: false,
                                timer: 2000,
                                customClass: { popup: 'animate-toast-in' }
                            });
                        }, 300);
                    }
                }

                if (cancelBtn) {
                    const row = cancelBtn.closest('.swipe-row');
                    if (row) {
                        const overlay = row.querySelector('.archive-overlay');
                        if (overlay) {
                            overlay.style.opacity = '0';
                            overlay.style.pointerEvents = 'none';
                        }
                    }
                }
            });

            // Row Helper Logic
            const bindDynamicInputs = () => {
                popup.querySelectorAll('.dtr-day-select').forEach(select => {
                    select.addEventListener('change', () => {
                        const targetText = popup.querySelector(`#${select.dataset.target}`);
                        if (targetText) targetText.innerText = select.value;
                    });
                });
                popup.querySelectorAll('.dtr-date-picker').forEach(picker => {
                    picker.addEventListener('change', () => {
                        const date = new Date(picker.value);
                        const display = date.toLocaleString('en-US', { timeZone: 'Asia/Manila', month: 'short', day: '2-digit', year: 'numeric' });
                        const targetLabel = popup.querySelector(`#${picker.dataset.target}`);
                        if (targetLabel) targetLabel.innerText = display;
                    });
                });
                popup.querySelectorAll('[id^="period-input-"]').forEach(input => {
                    input.addEventListener('input', () => {
                        const targetText = popup.querySelector(`#${input.dataset.target}`);
                        if (targetText) targetText.innerText = input.value;
                    });
                });
            };

            // Generic Add Log Logic
            popup.querySelectorAll('.add-log-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    const type = btn.dataset.type;
                    const body = popup.querySelector(`#${type}-logs-body`);
                    const existingRows = body.querySelectorAll('tr');
                    const newIndex = existingRows.length;
                    const log = { period: '', date: new Date(), status: 'pending' };
                    let nextPeriod;
                    const startDateStr = data.startDate || 'Jan 01, 2025';
                    const baseDate = new Date(startDateStr);

                    if (type === 'dtr') {
                        const now = new Date();
                        nextPeriod = now.toLocaleString('en-US', { month: 'short', day: '2-digit', year: 'numeric' });
                        log.day = now.toLocaleString('en-US', { weekday: 'long' }).toUpperCase();
                    } else if (existingRows.length === 0) {
                        const monthStr = baseDate.toLocaleString('en-US', { month: 'short' });
                        nextPeriod = baseDate.getDate() <= 15 ? `${monthStr} 01 - 15, ${baseDate.getFullYear()}` : `${monthStr} 16 - ${new Date(baseDate.getFullYear(), baseDate.getMonth() + 1, 0).getDate()}, ${baseDate.getFullYear()}`;
                    } else {
                        const lastText = existingRows[newIndex - 1].querySelector('[id^="period-text"]').innerText;
                        try {
                            const mStr = lastText.split(' ')[0];
                            const yr = parseInt(lastText.split(',')[1].trim());
                            const mIdx = new Date(Date.parse(mStr + " 1, 2012")).getMonth();
                            if (lastText.includes('01 - 15')) {
                                nextPeriod = `${mStr} 16 - ${new Date(yr, mIdx + 1, 0).getDate()}, ${yr}`;
                            } else {
                                const nextM = new Date(yr, mIdx + 1, 1);
                                nextPeriod = `${nextM.toLocaleString('en-US', { month: 'short' })} 01 - 15, ${nextM.getFullYear()}`;
                            }
                        } catch (e) { nextPeriod = "Next Period"; }
                    }
                    log.period = nextPeriod;
                    const temp = document.createElement('tbody');
                    temp.innerHTML = getRowHtml(log, type, newIndex);
                    const newRow = temp.firstElementChild;
                    body.appendChild(newRow);
                    bindDynamicInputs();
                });
            });

            // Document Renaming
            const setupDocRenaming = (itemDiv) => {
                const display = itemDiv.querySelector('.doc-name-display');
                const input = itemDiv.querySelector('.doc-name-edit');
                if (display && input) {
                    display.onclick = () => {
                        const editBtn = itemDiv.closest('div.bg-white')?.querySelector('.toggle-docs-edit');
                        if (editBtn?.classList.contains('bg-royal-blue')) {
                            display.classList.add('hidden'); input.classList.remove('hidden');
                            input.focus(); input.select();
                        }
                    };
                    input.onblur = () => { display.textContent = input.value || 'Unnamed'; display.title = display.textContent; display.classList.remove('hidden'); input.classList.add('hidden'); };
                    input.onkeydown = (ev) => { if (ev.key === 'Enter') input.blur(); if (ev.key === 'Escape') { input.value = display.textContent; input.blur(); } };
                }
            };
            popup.querySelectorAll('li.group\\/doc').forEach(item => setupDocRenaming(item));

            // Custom Doc Add
            const addDocBtn = popup.querySelector('#toggle-docs-edit-btn') || popup.querySelector('.toggle-docs-edit');
            const realAddDocBtn = popup.querySelector('#add-custom-doc-btn');
            if (realAddDocBtn) {
                realAddDocBtn.onclick = () => {
                    const list = popup.querySelector('#docs-list-custom') || popup.querySelector('#docs-list-static');
                    if (!list) return;
                    const targetId = `custom-${list.children.length}`;
                    const newLi = document.createElement('li');
                    newLi.className = "relative flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-gray-50/50 p-3 pt-4 sm:pt-3 rounded-xl border border-gray-100 group/doc transition-all hover:bg-white hover:shadow-md h-auto";
                    newLi.innerHTML = `
                        <div id="doc-indicator-${targetId}" class="absolute -top-2 -left-2 w-5 h-5 rounded-full border-2 border-white shadow-md flex items-center justify-center bg-orange-400 text-white z-10 transition-transform group-hover/doc:scale-110">
                            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path id="doc-path-${targetId}" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        </div>
                        <div class="flex-1 min-w-0 pr-2">
                            <span class="doc-name-display hidden text-[11px] font-black text-gray-700 truncate block">New Document</span>
                            <input type="text" value="New Document" class="doc-name-edit w-full bg-white border border-royal-blue/30 rounded px-1.5 py-0.5 text-[11px] font-black text-royal-blue outline-none">
                        </div>
                        <div class="doc-view-mode-container hidden"><span id="doc-text-badge-${targetId}" class="text-[8px] text-orange-600 bg-orange-50 border-orange-200 font-black uppercase px-2 py-0.5 rounded border tracking-tighter">PENDING</span></div>
                        <div class="doc-edit-mode-container flex items-center gap-1.5 shrink-0">
                            <button data-status="verified" data-target="${targetId}" class="doc-status-btn cursor-pointer w-7 h-7 flex items-center justify-center rounded-lg border bg-green-50 text-green-700 hover:bg-green-500 hover:text-white"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" /></svg></button>
                            <button data-status="pending" data-target="${targetId}" class="doc-status-btn cursor-pointer w-7 h-7 flex items-center justify-center rounded-lg border bg-orange-50 text-orange-700 hover:bg-orange-400 hover:text-white"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></button>
                            <button data-status="declined" data-target="${targetId}" class="doc-status-btn cursor-pointer w-7 h-7 flex items-center justify-center rounded-lg border bg-red-50 text-red-700 hover:bg-red-500 hover:text-white"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12" /></svg></button>
                        </div>
                    `;
                    list.appendChild(newLi); setupDocRenaming(newLi);
                    const inp = newLi.querySelector('.doc-name-edit'); if (inp) { inp.focus(); inp.select(); }
                };
            }

            bindDynamicInputs();
        }
    });
}

/**
 * Show Add Data Modal Form
 */
function showAddDataModal(data = null) {
    const isEdit = !!data;
    const headerIcon = isEdit ?
        'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z' :
        'M12 4v16m8-8H4';
    const headerTitle = isEdit ? 'Edit Beneficiary' : 'New Beneficiary';

    const formContent = `
        <div class="text-left font-montserrat user-select-none relative">
            <!-- Modal Header -->
            <div class="mb-4 pb-3 border-b border-gray-100/80 flex items-center justify-between">
                <div>
                    <h3 class="text-xl font-black text-[#2e7d32] flex items-center gap-2.5">
                        <div class="p-2 bg-[#e8f5e9] rounded-lg text-[#2e7d32] border border-[#c8e6c9] shadow-sm">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="${headerIcon}" /></svg>
                        </div>
                        ${headerTitle}
                    </h3>
                    <p class="text-[10px] text-gray-400 font-bold mt-1 uppercase tracking-widest pl-11">Enter the details of the GIP beneficiary below.</p>
                </div>
            </div>

            <form id="add-beneficiary-form" class="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <!-- LEFT COLUMN: Personal Info Card -->
                <div class="bg-gray-50/40 rounded-xl p-4 border border-gray-100 shadow-sm flex flex-col space-y-4">
                    <div class="flex items-center gap-2 mb-1">
                        <div class="w-1 h-5 bg-[#2e7d32] rounded-full"></div>
                        <p class="text-[9px] uppercase font-black text-gray-500 tracking-widest">Personal & Educational Information</p>
                    </div>
                    
                    <div class="space-y-3.5">
                        <div class="group">
                            <label class="text-[9px] text-gray-400 font-black uppercase block mb-1 transition-colors group-focus-within:text-[#2e7d32]">Full Name (Last, First, MI) <span class="text-red-500">*</span></label>
                            <input type="text" name="name" value="${data?.name || ''}" required class="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 text-[12px] font-bold focus:ring-4 focus:ring-[#2e7d32]/10 focus:border-[#2e7d32] outline-none transition-all shadow-sm placeholder:text-gray-300" placeholder="e.g. Dela Cruz, Juan M.">
                        </div>
                        
                        <div class="grid grid-cols-2 gap-3">
                            <div class="group">
                                <label class="text-[9px] text-gray-400 font-black uppercase block mb-1 transition-colors group-focus-within:text-[#2e7d32]">Contact No. <span class="text-red-500">*</span></label>
                                <input type="text" name="contact" value="${data?.contact || ''}" required class="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 text-[12px] font-bold focus:ring-4 focus:ring-[#2e7d32]/10 focus:border-[#2e7d32] outline-none transition-all shadow-sm placeholder:text-gray-300 font-mono" placeholder="09XX-XXX-XXXX">
                            </div>
                            <div class="group">
                                <label class="text-[9px] text-gray-400 font-black uppercase block mb-1 transition-colors group-focus-within:text-[#2e7d32]">Address</label>
                                <input type="text" name="address" value="${data?.address || ''}" class="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 text-[12px] font-bold focus:ring-4 focus:ring-[#2e7d32]/10 focus:border-[#2e7d32] outline-none transition-all shadow-sm placeholder:text-gray-300" placeholder="Barangay, City">
                            </div>
                        </div>

                        <div class="grid grid-cols-2 gap-3">
                            <div class="group">
                                <label class="text-[9px] text-gray-400 font-black uppercase block mb-1 transition-colors group-focus-within:text-[#2e7d32]">Birthday</label>
                                <input type="date" name="birthday" value="${data?.birthday || ''}" id="birthday-input" class="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 text-[12px] font-bold focus:ring-4 focus:ring-[#2e7d32]/10 focus:border-[#2e7d32] outline-none transition-all shadow-sm uppercase">
                            </div>
                            <div class="group">
                                <label class="text-[9px] text-gray-400 font-black uppercase block mb-1 transition-colors group-focus-within:text-[#2e7d32]">Age</label>
                                <input type="text" name="age" value="${data?.age || ''}" id="age-display" readonly class="w-full bg-gray-100/80 border border-gray-200 rounded-lg px-3 py-2 text-[12px] font-black text-[#2e7d32] cursor-not-allowed outline-none font-mono" placeholder="Auto">
                            </div>
                        </div>

                        <div class="grid grid-cols-2 gap-3">
                            <div class="group">
                                <label class="text-[9px] text-gray-400 font-black uppercase block mb-1 transition-colors group-focus-within:text-[#2e7d32]">Gender</label>
                                <select name="gender" class="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 text-[12px] font-bold focus:ring-4 focus:ring-[#2e7d32]/10 focus:border-[#2e7d32] outline-none transition-all shadow-sm cursor-pointer appearance-none">
                                    <option value="Male" ${data?.gender === 'Male' ? 'selected' : ''}>Male</option>
                                    <option value="Female" ${data?.gender === 'Female' ? 'selected' : ''}>Female</option>
                                </select>
                            </div>
                            <div class="group">
                                <label class="text-[9px] text-gray-400 font-black uppercase block mb-1 transition-colors group-focus-within:text-[#2e7d32]">Education</label>
                                <div class="relative" id="education-container">
                                    <input type="text" name="education" id="education-input" autocomplete="off"
                                        value="${data?.education || ''}" 
                                        class="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 text-[12px] font-bold focus:ring-4 focus:ring-[#2e7d32]/10 focus:border-[#2e7d32] outline-none transition-all shadow-sm placeholder:text-gray-300" 
                                        placeholder="Course/Level...">
                                    <div id="course-suggestions" class="hidden absolute left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-2xl z-[100] max-h-48 overflow-y-auto font-montserrat divide-y divide-gray-50 p-1.5">
                                        ${COMMON_COURSES.map(course => `
                                            <div class="course-option px-3 py-2 text-[10px] font-bold text-gray-600 hover:bg-[#e8f5e9] hover:text-[#2e7d32] rounded-md cursor-pointer transition-colors flex items-center gap-2.5 active:scale-[0.98]">
                                                ${course}
                                            </div>
                                        `).join('')}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="pt-1">
                        <div class="flex items-center gap-2 mb-2">
                            <div class="w-1 h-5 bg-golden-yellow rounded-full"></div>
                            <p class="text-[9px] uppercase font-black text-gray-500 tracking-widest">Contract Duration</p>
                        </div>
                        <div class="grid grid-cols-2 gap-3">
                            <div class="group">
                                <label class="text-[9px] text-gray-400 font-black uppercase block mb-1">Start Date <span class="text-red-500">*</span></label>
                                <input type="date" name="startDate" value="${data?.startDate || ''}" required class="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 text-[12px] font-bold focus:ring-4 focus:ring-golden-yellow/10 focus:border-golden-yellow outline-none transition-all shadow-sm">
                            </div>
                            <div class="group">
                                <label class="text-[9px] text-gray-400 font-black uppercase block mb-1">End Date <span class="text-red-500">*</span></label>
                                <input type="date" name="endDate" value="${data?.endDate || ''}" required class="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 text-[12px] font-bold focus:ring-4 focus:ring-philippine-red/10 focus:border-philippine-red outline-none transition-all shadow-sm">
                            </div>
                        </div>
                    </div>
                </div>

                <!-- RIGHT COLUMN: Work Details Card -->
                <div class="bg-gray-50/40 rounded-xl p-4 border border-gray-100 shadow-sm flex flex-col space-y-4">
                    <div class="flex items-center gap-2 mb-1">
                        <div class="w-1 h-5 bg-royal-blue rounded-full"></div>
                        <p class="text-[9px] uppercase font-black text-gray-500 tracking-widest">Work & Administrative Data</p>
                    </div>
                    
                    <div class="space-y-3.5">
                         <div class="group">
                            <label class="text-[9px] text-gray-400 font-black uppercase block mb-1 transition-colors group-focus-within:text-royal-blue">ID Number</label>
                            <div class="flex items-center">
                                <div class="bg-royal-blue border border-royal-blue rounded-l-lg px-3 py-2 text-[10px] font-black text-white font-mono shadow-sm">ROX-RD-ESIG-2025-</div>
                                <input type="text" name="id_number" id="id-number-input" 
                                    value="${data?.id ? data.id.split('-').pop() : ''}" 
                                    class="flex-1 bg-white border border-gray-200 border-l-0 rounded-r-lg px-3 py-2 text-[11px] font-black text-royal-blue font-mono outline-none focus:ring-4 focus:ring-royal-blue/10 focus:border-royal-blue transition-all" 
                                    placeholder="0001">
                                <input type="hidden" name="id" id="full-id-input" value="${data?.id || ''}">
                            </div>
                        </div>

                        <div class="grid grid-cols-2 gap-3">
                            <div class="group">
                                <label class="text-[9px] text-gray-400 font-black uppercase block mb-1 transition-colors group-focus-within:text-royal-blue">Assigned Office</label>
                                <select name="office" class="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 text-[12px] font-bold focus:ring-4 focus:ring-royal-blue/10 focus:border-royal-blue outline-none transition-all shadow-sm cursor-pointer appearance-none">
                                    <option value="DOLE" ${data?.office?.includes('DOLE') ? 'selected' : ''}>DOLE Field Office</option>
                                    <option value="LGU" ${data?.office?.includes('LGU') ? 'selected' : ''}>LGU</option>
                                    <option value="DEPED" ${data?.office?.includes('DEPED') ? 'selected' : ''}>DEPED</option>
                                    <option value="DICT" ${data?.office?.includes('DICT') ? 'selected' : ''}>DICT</option>
                                    <option value="PCA" ${data?.office?.includes('PCA') ? 'selected' : ''}>PCA</option>
                                </select>
                            </div>
                            <div class="group">
                                <label class="text-[9px] text-gray-400 font-black uppercase block mb-1 transition-colors group-focus-within:text-royal-blue">Series Number</label>
                                <input type="text" name="seriesNo" value="${data?.seriesNo || ''}" class="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 text-[12px] font-black text-royal-blue font-mono focus:ring-4 focus:ring-royal-blue/10 focus:border-royal-blue outline-none transition-all shadow-sm" placeholder="2025-00-000">
                            </div>
                        </div>

                        <div class="group">
                            <label class="text-[9px] text-gray-400 font-black uppercase block mb-1">Nature of Work <span class="text-red-500">*</span></label>
                            <input type="text" name="designation" value="${data?.designation || ''}" required class="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 text-[12px] font-bold focus:ring-4 focus:ring-royal-blue/10 focus:border-royal-blue outline-none transition-all shadow-sm placeholder:text-gray-300" placeholder="e.g. Administrative Support">
                        </div>

                        <div class="group">
                            <label class="text-[9px] text-gray-400 font-black uppercase block mb-1">Replacement History (Optional)</label>
                            <textarea name="replacement" rows="2" class="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 text-[11px] font-bold focus:ring-4 focus:ring-royal-blue/10 focus:border-royal-blue outline-none transition-all shadow-sm placeholder:text-gray-300 resize-none min-h-[60px]">${data?.replacement || ''}</textarea>
                        </div>

                        <div class="group">
                            <label class="text-[9px] text-gray-400 font-black uppercase block mb-1.5">Status</label>
                            <div class="flex gap-2 items-center">
                                <select name="remarks" id="remarks-select" class="flex-1 bg-white border border-gray-200 rounded-lg px-3 py-2 text-[12px] font-black focus:ring-4 focus:ring-[#2e7d32]/10 focus:border-[#2e7d32] outline-none transition-all shadow-sm cursor-pointer appearance-none">
                                    <option value="ONGOING" ${data?.remarks === 'ONGOING' ? 'selected' : ''}>ONGOING</option>
                                    <option value="EXPIRED" ${data?.remarks === 'EXPIRED' ? 'selected' : ''}>EXPIRED</option>
                                    <option value="RESIGNED" ${data?.remarks === 'RESIGNED' ? 'selected' : ''}>RESIGNED</option>
                                    <option value="ABSORBED" ${data?.remarks === 'ABSORBED' ? 'selected' : ''}>ABSORBED</option>
                                </select>
                                <div class="flex items-center gap-1.5">
                                    <button type="button" id="absorb-btn" 
                                        class="px-3 py-2.5 rounded-lg bg-[#2e7d32] text-white text-[10px] font-black hover:bg-[#1b5e20] transition-all duration-300 shadow-md cursor-pointer active:scale-95 whitespace-nowrap">
                                        ABSORB
                                    </button>
                                    <button type="button" id="resign-btn" 
                                        class="px-3 py-2.5 rounded-lg bg-[#ce1126] text-white text-[10px] font-black hover:bg-[#b71c1c] transition-all duration-300 shadow-md cursor-pointer active:scale-95 whitespace-nowrap">
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
            <div class="mt-6 flex justify-end items-center gap-3 -mx-8 -mb-8 p-4 rounded-b-2xl bg-gray-50 border-t border-gray-100/80">
                <button type="submit" form="add-beneficiary-form"
                    class="group flex items-center gap-2.5 px-6 py-3 bg-[#2e7d32] text-white font-black rounded-xl hover:bg-[#1b5e20] transition-all duration-300 shadow-lg hover:shadow-[#2e7d32]/40 cursor-pointer text-[12px] transform active:scale-[0.98]">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" /></svg>
                    <span>${isEdit ? 'UPDATE RECORD' : 'SAVE RECORD'}</span>
                </button>

                <button type="button" id="cancel-modal-btn"
                    class="group flex items-center gap-2.5 px-6 py-3 bg-[#fef2f2] text-red-700 font-bold rounded-xl hover:bg-[#ce1126] hover:text-white transition-all duration-300 shadow-sm border border-[#fee2e2] hover:border-[#ce1126] cursor-pointer text-[12px] active:scale-[0.98]">
                    <svg class="w-4 h-4 group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12" /></svg>
                    <span>CANCEL</span>
                </button>
            </div>
        </div>
    `;

    Swal.fire({
        html: formContent,
        width: '1000px',
        showConfirmButton: false,
        showCloseButton: false,
        padding: '2rem',
        customClass: {
            container: 'font-montserrat',
            popup: 'rounded-2xl ldn-modal-popup'
        },
        didOpen: (popup) => {
            // Cancel button functionality
            const cancelBtn = popup.querySelector('#cancel-modal-btn');
            if (cancelBtn) {
                cancelBtn.addEventListener('click', () => Swal.close());
            }

            // Ensure no internal scrolling and visible overflow for suggestions
            if (!document.getElementById('ldn-modal-common-styles')) {
                const style = document.createElement('style');
                style.id = 'ldn-modal-common-styles';
                style.innerHTML = `
                    .ldn-modal-popup {
                        overflow: visible !important;
                        max-height: none !important;
                    }
                    .swal2-html-container {
                        overflow: visible !important;
                        margin: 0 !important;
                        padding: 0 !important;
                    }
                `;
                document.head.appendChild(style);
            }

            // Auto-age calculation
            const bdayInput = popup.querySelector('#birthday-input');
            const ageDisplay = popup.querySelector('#age-display');

            if (bdayInput && ageDisplay) {
                bdayInput.addEventListener('change', (e) => {
                    ageDisplay.value = calculateAge(e.target.value);
                });

                // Initial calculation for Edit mode
                if (bdayInput.value) ageDisplay.value = calculateAge(bdayInput.value);
            }

            // ID Auto-increment Logic
            const idNumInput = popup.querySelector('#id-number-input');
            const fullIdInput = popup.querySelector('#full-id-input');
            const ID_PREFIX = "ROX-RD-ESIG-2025-";

            if (idNumInput && fullIdInput) {
                // If adding new record, auto-fill the next ID
                if (!isEdit) {
                    const existingIds = Array.from(document.querySelectorAll('th[scope="row"]')).map(th => th.textContent.trim());
                    let maxNum = 0;
                    existingIds.forEach(id => {
                        if (id.startsWith(ID_PREFIX)) {
                            const num = parseInt(id.replace(ID_PREFIX, ''));
                            if (!isNaN(num) && num > maxNum) maxNum = num;
                        }
                    });
                    const nextNum = (maxNum + 1).toString().padStart(4, '0');
                    idNumInput.value = nextNum;
                    fullIdInput.value = ID_PREFIX + nextNum;
                }

                idNumInput.addEventListener('input', (e) => {
                    fullIdInput.value = ID_PREFIX + e.target.value;
                });
            }

            // Remarks and End Date Logic
            const startDateInput = popup.querySelector('input[name="startDate"]');
            const endDateInput = popup.querySelector('input[name="endDate"]');
            const remarksSelect = popup.querySelector('#remarks-select');

            if (startDateInput && endDateInput && remarksSelect) {
                // Auto-set End Date based on Start Date (e.g., 6 months later)
                startDateInput.addEventListener('change', (e) => {
                    if (e.target.value) {
                        if (!endDateInput.value) {
                            const start = new Date(e.target.value);
                            start.setMonth(start.getMonth() + 6); // Default 6 months for GIP
                            endDateInput.value = start.toISOString().split('T')[0];
                        }
                        updateRemarks();
                    }
                });

                const updateRemarks = () => {
                    if (endDateInput.value) {
                        const start = startDateInput.value ? new Date(startDateInput.value) : null;
                        const end = new Date(endDateInput.value);
                        const now = new Date();

                        // Reset hours for pure date comparison
                        if (start) start.setHours(0, 0, 0, 0);
                        end.setHours(0, 0, 0, 0);
                        now.setHours(0, 0, 0, 0);

                        if (end < now) {
                            remarksSelect.value = 'EXPIRED';
                        } else if (start && start <= now) {
                            remarksSelect.value = 'ONGOING';
                        } else if (start && start > now) {
                            // If start is in future, still ONGOING as default status for new hires
                            remarksSelect.value = 'ONGOING';
                        } else {
                            remarksSelect.value = 'ONGOING';
                        }
                    }
                };

                endDateInput.addEventListener('change', updateRemarks);

                // Absorption Content Helper
                const extensionContainer = popup.querySelector('#extension-log-container');
                const updateAbsorptionLog = () => {
                    if (remarksSelect.value === 'ABSORBED') {
                        const date = data?.absorbDate || new Date().toLocaleString('en-US', {
                            timeZone: 'Asia/Manila',
                            month: 'short',
                            day: '2-digit',
                            year: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit',
                            hour12: true
                        });
                        extensionContainer.innerHTML = `
                            <p class="text-[9px] uppercase font-black text-green-600 border-b border-green-100 pb-0.5">Absorption Log</p>
                            <div class="bg-green-50/50 rounded-lg p-3 border border-green-100 flex items-center justify-between mt-2">
                                <div>
                                    <label class="text-[9px] text-green-600 font-bold uppercase block mb-0.5">Absorption Date & Time</label>
                                    <p class="text-[11px] font-black text-green-700 uppercase">${date}</p>
                                    <input type="hidden" name="absorbDate" value="${date}">
                                </div>
                                <svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            </div>
                        `;
                    } else {
                        extensionContainer.innerHTML = '';
                    }
                };

                // Resign Button Logic
                const resignBtn = popup.querySelector('#resign-btn');
                const absorbBtn = popup.querySelector('#absorb-btn');

                if (resignBtn) {
                    resignBtn.addEventListener('click', () => {
                        if (remarksSelect.value === 'RESIGNED') {
                            updateRemarks();
                        } else {
                            remarksSelect.value = 'RESIGNED';
                        }
                        updateAbsorptionLog();
                    });
                }

                if (absorbBtn) {
                    absorbBtn.addEventListener('click', () => {
                        if (remarksSelect.value === 'ABSORBED') {
                            updateRemarks();
                        } else {
                            remarksSelect.value = 'ABSORBED';
                        }
                        updateAbsorptionLog();
                    });
                }

                // Initial check
                if (data?.remarks !== 'RESIGNED' && data?.remarks !== 'ABSORBED') {
                    updateRemarks();
                }
                updateAbsorptionLog();
            }

            // Custom Course Suggestion Logic
            const eduInput = popup.querySelector('#education-input');
            const eduSuggestions = popup.querySelector('#course-suggestions');
            const eduOptions = popup.querySelectorAll('.course-option');

            if (eduInput && eduSuggestions) {
                const showSuggestions = () => eduSuggestions.classList.remove('hidden');
                const hideSuggestions = () => setTimeout(() => eduSuggestions.classList.add('hidden'), 200);

                eduInput.addEventListener('focus', showSuggestions);
                eduInput.addEventListener('blur', hideSuggestions);

                eduInput.addEventListener('input', (e) => {
                    const val = e.target.value.toLowerCase();
                    let hasMatch = false;

                    eduOptions.forEach(opt => {
                        const text = opt.textContent.trim().toLowerCase();
                        if (text.includes(val)) {
                            opt.classList.remove('hidden');
                            hasMatch = true;
                        } else {
                            opt.classList.add('hidden');
                        }
                    });

                    if (hasMatch) showSuggestions();
                    else eduSuggestions.classList.add('hidden');
                });

                eduOptions.forEach(opt => {
                    opt.addEventListener('click', () => {
                        eduInput.value = opt.textContent.trim();
                        eduSuggestions.classList.add('hidden');
                    });
                });
            }

            // Form Submission Simulation
            const form = popup.querySelector('#add-beneficiary-form');
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
                        const el = form.querySelector(`[name = "${name}"]`);
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
                    const designation = formData.get('designation');

                    // Name validation (required + no numbers)
                    if (!name || name.trim() === "" || /[0-9]/.test(name)) {
                        markError('name');
                    }

                    // Contact validation (required + numbers only)
                    if (!contact || contact.trim() === "" || /[^0-9]/.test(contact.replace(/[\s\-\+\(\)]/g, ''))) {
                        markError('contact');
                    }

                    // Simple existence checks
                    if (!startDate) markError('startDate');
                    if (!endDate) markError('endDate');
                    if (!designation || designation.trim() === "") markError('designation');

                    if (hasError) {
                        return;
                    }

                    const beneficiaryData = {};
                    formData.forEach((value, key) => {
                        beneficiaryData[key] = value;
                    });

                    // Call the simulation function from LDNgip.js
                    if (window.addBeneficiaryData) {
                        window.addBeneficiaryData(beneficiaryData);

                        Swal.fire({
                            toast: true,
                            position: 'top-end',
                            icon: 'success',
                            title: `Record ${isEdit ? 'Updated' : 'Added'} Successfully`,
                            showConfirmButton: false,
                            timer: 2000,
                            timerProgressBar: true
                        });

                        Swal.close();
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
