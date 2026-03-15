import { getBasePath } from './auth.js';
import { isDarkMode } from './darkmode.js';
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

function getOfficeClass(office) {
    if (!office) return 'bg-gray-100 text-gray-700 border-gray-200 dark:text-gray-300';
    if (office.includes('DOLE')) return 'bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-900/40 dark:text-blue-300 dark:border-blue-800';
    if (office.includes('DepEd')) return 'bg-orange-100 text-orange-700 border-orange-200 dark:bg-orange-900/40 dark:text-orange-300 dark:border-orange-800';
    if (office.includes('LGU')) return 'bg-purple-100 text-purple-700 border-purple-200 dark:bg-purple-900/40 dark:text-purple-300 dark:border-purple-800';
    if (office.includes('DICT')) return 'bg-cyan-100 text-cyan-700 border-cyan-200 dark:bg-cyan-900/40 dark:text-cyan-300 dark:border-cyan-800';
    return 'bg-gray-100 text-gray-700 border-gray-200 dark:text-gray-300';
}

function getStatusClass(status) {
    if (!status) return 'bg-gray-100 text-gray-600 border-gray-200 dark:text-gray-300';
    const s = status.toUpperCase();
    if (s === 'ONGOING') return 'bg-green-100 text-green-700 border-green-200 dark:bg-green-900/40 dark:text-green-300 dark:border-green-800';
    if (s === 'EXPIRED') return 'bg-red-400 text-white border-red-400 dark:bg-red-900/60 dark:border-red-800';
    if (s === 'RESIGNED') return 'bg-[#ce1126] text-white border-[#ce1126] dark:bg-red-900/80 dark:border-red-900';
    if (s === 'ABSORBED') return 'bg-[#2e7d32] text-white border-[#2e7d32] dark:bg-green-900/80 dark:border-green-900';
    return 'bg-gray-100 text-gray-600 border-gray-200 dark:text-gray-300';
}

export function showBeneficiaryDrawer(data, initialPage = 0) {
    // Current Page Index for the Right Grid (0 = Info, 1 = Documents/etc)
    let rightGridPage = initialPage;

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
<div class="border-b border-default pb-4 mb-5 flex flex-col relative w-full pt-4 font-montserrat user-select-none">
    <div class="flex justify-between items-start pe-12">
        <h3 class="text-xl sm:text-2xl font-black text-royal-blue leading-tight mb-1.5 tracking-tight break-words pr-2">${data.name}</h3>
        <button type="button" id="close-drawer-btn" class="text-body bg-transparent hover:text-heading hover:bg-neutral-tertiary rounded-base w-9 h-9 absolute top-2 right-2 flex items-center justify-center cursor-pointer transition-colors z-50">
           <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/></svg>
           <span class="sr-only">Close drawer</span>
        </button>
    </div>

    <div class="grid grid-cols-2 gap-4 mt-6 w-full">
        <div class="flex flex-col gap-1 text-left">
            <span class="text-[10px] text-gray-500 font-bold uppercase tracking-widest pl-1">ID No.</span>
            <span class="bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-300 text-[10px] sm:text-[11px] font-black px-2.5 py-1.5 rounded border border-gray-200 dark:border-slate-700 uppercase tracking-widest shadow-sm border-l-4 border-l-gray-400 truncate">${data.id}</span>
        </div>
        <div class="flex flex-col gap-1 text-left overflow-hidden">
            <span class="text-[10px] text-gray-500 font-bold uppercase tracking-widest pl-1 flex items-center">
                <span class="sm:hidden">REMARKS</span>
                <span class="hidden sm:inline">REMARKS / OFFICE</span>
            </span>
            <div class="flex items-center flex-wrap gap-1.5 min-h-[30px]">
                <span class="${getStatusClass(data.remarks)} text-[10px] font-black px-2 py-1 rounded border uppercase tracking-widest shadow-sm border-l-4 ${data.remarks === 'ONGOING' ? 'border-l-green-600' : 'border-l-red-600'}">${data.remarks}</span>
                <!-- Desktop Only Office Badge (Pill Style) -->
                <span class="${getOfficeClass(data.office)} hidden sm:inline-block text-[9px] font-black px-2.5 py-1 rounded-full border shadow-sm truncate max-w-[120px] lg:max-w-none" title="${data.office}">${data.office}</span>
            </div>
        </div>
    </div>

    <!-- Mobile Only Assigned Office Row (Rectangle Style) -->
    <div class="flex flex-col gap-1 text-left mt-4 sm:hidden">
        <span class="text-[10px] text-gray-500 font-bold uppercase tracking-widest pl-1">ASSIGNED OFFICE</span>
        <span class="${getOfficeClass(data.office)} text-[10px] font-black px-2.5 py-2 rounded border border-gray-200 dark:border-slate-700 uppercase tracking-widest shadow-sm border-l-4 border-l-indigo-500 w-full truncate" title="${data.office}">${data.office}</span>
    </div>
</div>

<h4 class="text-sm font-bold text-heading mt-6 mb-4 pb-2 border-b border-default whitespace-nowrap hidden lg:block">Personal Profile</h4>
<div class="flex flex-col gap-4 text-sm mt-3 px-1">
    <div class="flex justify-between items-center group">
        <span class="text-gray-500 font-medium whitespace-nowrap mr-4">Contact No.</span>
        <span class="${data.contact ? 'font-black text-heading font-mono' : 'font-bold text-gray-300 italic'} truncate text-right">${data.contact || 'NOT PROVIDED'}</span>
    </div>
    <div class="flex justify-between items-start group">
        <span class="text-gray-500 font-medium whitespace-nowrap mr-4 mt-1">Address</span>
        <span class="font-bold text-heading text-right break-words leading-snug" title="${data.address}">${data.address || 'N/A'}</span>
    </div>
    <div class="flex justify-between items-center group">
        <span class="text-gray-500 font-medium whitespace-nowrap mr-4">Birthday</span>
        <span class="${data.birthday ? 'font-black text-heading uppercase text-right' : 'font-bold text-gray-300 italic text-right'}">${data.birthday || 'N/A'}</span>
    </div>
    <div class="flex justify-between items-center group">
        <span class="text-gray-500 font-medium whitespace-nowrap mr-4">Age</span>
        <span class="${(data.age || calculateAge(data.birthday)) ? 'font-black text-heading' : 'font-bold text-gray-300 italic'} text-right">${data.age || calculateAge(data.birthday) || 'N/A'}</span>
    </div>
    <div class="flex justify-between items-center group">
        <span class="text-gray-500 font-medium whitespace-nowrap mr-4">Gender</span>
        <span class="font-black text-heading uppercase text-right">${data.gender || 'N/A'}</span>
    </div>
    <div class="flex justify-between items-center group pt-3 mt-1 border-t border-gray-50 dark:border-slate-800/60">
        <span class="text-gray-500 font-medium whitespace-nowrap mr-4">Education</span>
        <div class="flex items-center gap-2 max-w-[60%] justify-end shrink-0 min-w-0">
            <div class="w-6 h-6 rounded bg-golden-yellow/10 flex items-center justify-center text-golden-yellow border border-golden-yellow/20 shrink-0">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/></svg>
            </div>
            <span class="text-[11px] lg:text-sm font-black text-heading whitespace-nowrap tracking-tight truncate" title="${data.education}">${data.education || 'N/A'}</span>
        </div>
    </div>
</div>

<!-- Container for right grid from modal -->
<div class="mt-8 pt-6 border-t border-default relative">
    <!-- Pages Container -->
    <div id="drawer-page-0" class="flex-1 flex flex-col gap-4">
        
        <div class="bg-gray-50/50 dark:bg-slate-800/50 rounded-xl p-4 border border-gray-100 dark:border-slate-700 shadow-sm w-full">
            <p class="text-[9px] uppercase tracking-widest text-gray-400 dark:text-white font-black mb-3">Work Registry</p>
            <div class="flex items-center gap-3">
                <div class="p-2.5 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800 shrink-0">
                    <svg class="w-5 h-5 text-royal-blue dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                </div>
                <div class="flex-1 min-w-0">
                    <label class="text-[9px] text-gray-400 dark:text-gray-300 font-bold block mb-1 uppercase tracking-widest truncate">Series No.</label>
                    <span class="text-sm sm:text-base font-black text-royal-blue dark:text-blue-400 font-mono whitespace-nowrap leading-none tracking-tight">${data.seriesNo || '2025-00-000'}</span>
                </div>
            </div>
        </div>

         <div class="bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 p-4 rounded-xl shadow-sm">
            <label class="text-[9px] text-gray-400 dark:text-gray-300 font-bold block mb-1 uppercase tracking-widest">Designation / Role</label>
            <p class="text-sm font-black text-heading break-words whitespace-normal leading-snug">${data.designation}</p>
        </div>
        
         <div class="bg-gray-50/30 dark:bg-slate-800/30 p-4 rounded-xl border border-dashed border-gray-200 dark:border-slate-700">
            <label class="text-[9px] text-gray-400 dark:text-gray-300 font-bold block mb-1 uppercase tracking-widest">Replacement History</label>
             <p class="text-xs text-gray-500 dark:text-gray-400 font-medium italic">${data.replacement || 'None found.'}</p>
        </div>
    </div>
    
    <div id="drawer-page-1" class="hidden flex-1 flex flex-col gap-4">
        <h4 class="text-sm font-bold text-heading mb-2 border-b-2 border-brand pb-2 inline-block max-w-max">Required Documents</h4>
        <div class="flex flex-col gap-3">
            ${displayDocs.map(doc => {
                const dbStatus = doc.status.toUpperCase();
                const uiMapping = {
                    'VERIFIED': 'COMPLETED',
                    'DECLINED': 'REJECTED',
                    'PENDING': 'PENDING'
                };
                const status = uiMapping[dbStatus] || dbStatus;
                
                const isCompleted = status === 'COMPLETED';
                const isRejected = status === 'REJECTED';
                
                const iconColor = isCompleted ? 'text-green-500' : (isRejected ? 'text-red-500' : 'text-gray-400 dark:text-gray-500');
                const bgColor = isCompleted ? 'bg-green-50/50 dark:bg-green-900/10' : (isRejected ? 'bg-red-50/50 dark:bg-red-900/10' : 'bg-gray-50/50 dark:bg-slate-800/50');
                const badgeClass = isCompleted 
                    ? 'bg-green-100 text-green-700 border-green-200 dark:bg-green-900/40 dark:text-green-300 dark:border-green-800 hover:bg-green-200 cursor-pointer' 
                    : (isRejected 
                        ? 'bg-red-100 text-red-700 border-red-200 dark:bg-red-900/40 dark:text-red-300 dark:border-red-800 hover:bg-red-200 cursor-pointer'
                        : 'bg-white text-gray-500 border-gray-200 dark:bg-slate-700 dark:text-gray-400 dark:border-slate-600 hover:bg-gray-50 dark:hover:bg-slate-600 cursor-pointer');
                
                let iconSvg = `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`;
                if (isCompleted) {
                    iconSvg = `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>`;
                } else if (isRejected) {
                    iconSvg = `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12"></path></svg>`;
                }

                return `
                <div class="flex items-center justify-between p-3.5 rounded-xl border border-gray-100 dark:border-slate-700 shadow-sm transition-all hover:-translate-y-0.5 ${bgColor}">
                    <div class="flex items-center gap-3 w-full">
                        <div class="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-white dark:bg-slate-800 shadow-sm border border-gray-100 dark:border-slate-700 ${iconColor}">
                            ${iconSvg}
                        </div>
                        <span class="text-xs sm:text-sm font-black ${isCompleted ? 'text-heading' : 'text-gray-500 dark:text-gray-400'} uppercase tracking-tight flex-1">${doc.name}</span>
                    </div>
                    <button type="button" class="ml-3 ${badgeClass} text-[10px] font-black px-3 py-1.5 rounded-full border uppercase tracking-widest transition-colors flex-shrink-0 drawer-doc-btn" data-id="${doc.id}" data-name="${doc.name}" data-status="${status}">
                        ${status}
                    </button>
                </div>
                `;
            }).join('')}
        </div>
    </div>
    
    <div id="drawer-page-2" class="hidden flex-1 flex flex-col gap-6">
         <div class="flex justify-between items-center border-b-2 border-brand pb-2">
            <h4 class="text-sm font-bold text-heading uppercase tracking-widest">Submission Logs</h4>
            <div class="flex gap-2">
                <button type="button" id="add-dtr-log-btn" class="bg-blue-50 dark:bg-blue-900/40 text-royal-blue dark:text-blue-300 border border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-600 dark:hover:text-white text-[10px] font-black tracking-widest uppercase px-3 py-1.5 rounded-lg transition-colors shadow-sm cursor-pointer whitespace-nowrap">
                    + DTR
                </button>
                <button type="button" id="add-ar-log-btn" class="bg-orange-50 dark:bg-orange-900/40 text-orange-600 dark:text-orange-300 border border-orange-200 dark:border-orange-800 hover:bg-orange-500 hover:text-white text-[10px] font-black tracking-widest uppercase px-3 py-1.5 rounded-lg transition-colors shadow-sm cursor-pointer whitespace-nowrap">
                    + AR
                </button>
            </div>
         </div>

         <div class="flex flex-col gap-5">
            <div>
                <h5 class="text-xs font-bold text-gray-500 uppercase tracking-widest pl-1 mb-3 flex items-center gap-2">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    DTR Logs
                </h5>
                <div class="space-y-2">
                    ${dtrLogs.length ? dtrLogs.map(l => `
                        <div class="flex justify-between items-center p-3 rounded-xl border border-blue-100 dark:border-blue-900 bg-blue-50/50 dark:bg-blue-900/10 shadow-sm relative group overflow-hidden cursor-pointer hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors edit-log-btn" data-type="dtr" data-id="${l.id}" data-val="${l.date || l.createdAt}">
                            <span class="text-xs font-black text-royal-blue dark:text-blue-400 capitalize whitespace-nowrap pointer-events-none">${l.date || l.createdAt}</span>
                            <span class="text-[11px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest truncate max-w-[50%] text-right pr-6 group-hover:pr-12 pointer-events-none transition-all">${l.status || 'RECEIVED'}</span>
                            <button class="absolute top-0 right-0 h-full w-10 bg-red-500 text-white flex items-center justify-center translate-x-full group-hover:translate-x-0 transition-transform cursor-pointer delete-log-btn" data-type="dtr" data-id="${l.id}">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12"></path></svg>
                            </button>
                        </div>
                    `).join('') : `<p class="text-[11px] text-gray-400 dark:text-gray-500 italic font-medium bg-gray-50 dark:bg-slate-800/50 p-3 rounded-xl border border-gray-100 dark:border-slate-700">No DTR logs submitted.</p>`}
                </div>
            </div>

            <div>
                <h5 class="text-xs font-bold text-gray-500 uppercase tracking-widest pl-1 mb-3 flex items-center gap-2">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                    AR Logs
                </h5>
                <div class="space-y-2">
                    ${arLogs.length ? arLogs.map(l => `
                        <div class="flex justify-between items-center p-3 rounded-xl border border-orange-100 dark:border-orange-900 bg-orange-50/50 dark:bg-orange-900/10 shadow-sm relative group overflow-hidden cursor-pointer hover:bg-orange-100 dark:hover:bg-orange-900/30 transition-colors edit-log-btn" data-type="ar" data-id="${l.id}" data-val="${l.period || l.createdAt}">
                            <span class="text-xs font-black text-orange-600 dark:text-orange-400 capitalize whitespace-nowrap pointer-events-none">${l.period || l.createdAt}</span>
                            <span class="text-[11px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest truncate max-w-[50%] text-right pr-6 group-hover:pr-12 pointer-events-none transition-all">${l.status || 'RECEIVED'}</span>
                            <button class="absolute top-0 right-0 h-full w-10 bg-red-500 text-white flex items-center justify-center translate-x-full group-hover:translate-x-0 transition-transform cursor-pointer delete-log-btn" data-type="ar" data-id="${l.id}">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12"></path></svg>
                            </button>
                        </div>
                    `).join('') : `<p class="text-[11px] text-gray-400 dark:text-gray-500 italic font-medium bg-gray-50 dark:bg-slate-800/50 p-3 rounded-xl border border-gray-100 dark:border-slate-700">No AR logs submitted.</p>`}
                </div>
            </div>
         </div>
    </div>

    <!-- Navigation Below (Same as modal logic but styled for drawer) -->
    <!-- Grid columns structure for responsive desktop and mobile -->
    <div class="grid grid-cols-2 gap-3 pt-6 mt-6 border-t border-gray-100 dark:border-slate-800 relative z-10 w-full mb-4">
        <button id="drawer-prev-btn" class="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-neutral-secondary-medium text-heading text-[10px] sm:text-xs font-black transition-all active:scale-95 uppercase tracking-widest shadow-sm border border-default-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-neutral-tertiary">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M15 19l-7-7 7-7"/></svg>
            PREVIOUS
        </button>
        <button id="drawer-next-btn" class="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-brand text-white text-[10px] sm:text-xs font-black transition-all active:scale-95 uppercase tracking-widest shadow-sm shadow-brand-medium/50 border border-transparent disabled:opacity-50 disabled:cursor-not-allowed hover:bg-brand-strong">
            NEXT
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7"/></svg>
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
        background: rgba(0, 0, 0, 0.05);
        border-radius: 20px;
    }
    .dark #beneficiary-drawer-container::-webkit-scrollbar-thumb {
        background: rgba(255, 255, 255, 0.05);
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
    let drawerContainer = document.getElementById('beneficiary-drawer-container');
    if(drawerContainer) {
        // Destroy existing instance gracefully
        drawerContainer.remove();
    }
    
    drawerContainer = document.createElement('div');
    drawerContainer.id = 'beneficiary-drawer-container';
    drawerContainer.className = 'fixed top-0 right-0 z-[100] h-screen p-4 sm:p-6 overflow-y-auto transition-transform duration-500 ease-in-out translate-x-full bg-neutral-primary-soft dark:bg-slate-900 w-full sm:w-[550px] lg:w-[650px] shadow-2xl';
    drawerContainer.setAttribute('tabindex', '-1');
    drawerContainer.setAttribute('data-drawer-backdrop', 'true');
    drawerContainer.innerHTML = drawerHtml;
    
    document.body.appendChild(drawerContainer);

    import('flowbite').then(({ Drawer }) => {
        const options = {
            placement: 'right',
            backdrop: true,
            bodyScrolling: false,
            edge: false,
            edgeOffset: '',
            backdropClasses: 'bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-50',
            onHide: () => {
                setTimeout(() => {
                    if (drawerContainer && drawerContainer.parentNode) {
                        drawerContainer.remove();
                    }
                }, 300); // Wait for transition
            }
        };

        const drawer = new Drawer(drawerContainer, options);
        drawer.show();

        // Bind events inside drawer
        const closeBtn = drawerContainer.querySelector('#close-drawer-btn');
        closeBtn.addEventListener('click', () => drawer.hide());

        // Navigation logic
        const prevBtn = drawerContainer.querySelector('#drawer-prev-btn');
        const nextBtn = drawerContainer.querySelector('#drawer-next-btn');
        const maxPage = 2; // Because we have page-0, page-1, page-2

        const updateNav = () => {
            drawerContainer.querySelectorAll('[id^=drawer-page-]').forEach((p, i) => {
                p.classList.toggle('hidden', i !== rightGridPage);
            });
            prevBtn.disabled = rightGridPage === 0;
            nextBtn.disabled = rightGridPage === maxPage;

            prevBtn.classList.toggle('opacity-50', rightGridPage === 0);
            nextBtn.classList.toggle('opacity-50', rightGridPage === maxPage);
        };

        prevBtn.addEventListener('click', () => {
            if(rightGridPage > 0) rightGridPage--;
            updateNav();
        });

        nextBtn.addEventListener('click', () => {
            if(rightGridPage < maxPage) rightGridPage++;
            updateNav();
        });

        updateNav(); // initialize nav

        // Document Toggle Logic
        drawerContainer.querySelectorAll('.drawer-doc-btn').forEach(btn => {
            btn.addEventListener('click', async () => {
                const docName = btn.dataset.name;
                const currentStatus = btn.dataset.status;
                
                const result = await Swal.fire({
                    title: '<span class="text-xl font-black text-heading uppercase tracking-tight">Update Document</span>',
                    html: `
                        <div class="font-montserrat text-left px-2">
                            <label class="text-[10px] font-bold text-gray-500 uppercase tracking-widest block mb-2">Set status for <span class="text-brand">${docName}</span></label>
                            <select id="swal-doc-status" class="bg-gray-50 border border-gray-200 text-heading text-sm rounded-xl focus:ring-brand focus:border-brand block w-full p-2.5 font-bold uppercase transition-all mb-4">
                                <option value="PENDING" ${currentStatus === 'PENDING' ? 'selected' : ''}>PENDING</option>
                                <option value="COMPLETED" ${currentStatus === 'COMPLETED' ? 'selected' : ''}>COMPLETED</option>
                                <option value="REJECTED" ${currentStatus === 'REJECTED' ? 'selected' : ''}>REJECTED</option>
                            </select>
                        </div>
                    `,
                    showCancelButton: true,
                    confirmButtonText: '<span class="font-black uppercase tracking-widest">Update</span>',
                    cancelButtonText: '<span class="font-black uppercase tracking-widest">Cancel</span>',
                    customClass: {
                        container: 'font-montserrat',
                        popup: 'rounded-[1.5rem] shadow-2xl border border-gray-100',
                        confirmButton: 'bg-brand text-white hover:bg-brand-strong text-xs px-6 py-2.5 rounded-xl border border-transparent shadow-sm mx-2',
                        cancelButton: 'bg-gray-100 text-gray-600 hover:bg-gray-200 text-xs px-6 py-2.5 rounded-xl border border-gray-200 shadow-sm mx-2'
                    },
                    buttonsStyling: false,
                    preConfirm: () => {
                        return document.getElementById('swal-doc-status').value;
                    }
                });

                if (result.isConfirmed) {
                    const newStatus = result.value;
                    if (newStatus === currentStatus) return;

                    try {
                        const formData = new FormData();
                        formData.append('gip_id', data.id);
                        formData.append('doc_name', docName);

                        const apiMapping = {
                            'COMPLETED': 'VERIFIED',
                            'REJECTED': 'DECLINED',
                            'PENDING': 'PENDING'
                        };
                        const dbStatus = apiMapping[newStatus] || newStatus;
                        formData.append('status', dbStatus);

                        const res = await fetch(`${getBasePath()}api/logs.php?type=docs`, { method: 'POST', body: formData });
                        const responseText = await res.text();
                        let json = { success: false };
                        try { json = JSON.parse(responseText); } catch(e) {}

                        if(json.success) {
                            Swal.fire({ toast: true, position: 'top-end', icon: 'success', title: 'Status updated!', showConfirmButton: false, timer: 1500 });
                            drawer.hide();
                            setTimeout(() => window.viewBeneficiary(data, rightGridPage), 400); 
                        } else {
                            Swal.fire('Error', json.error || 'Failed to update', 'error');
                        }
                    } catch(e) { Swal.fire('Error', e.message, 'error'); }
                }
            });
        });

        const getNextDTRDate = () => {
            if (!dtrLogs.length) return new Date().toISOString().split('T')[0];
            const lastDate = new Date(dtrLogs[0].date);
            lastDate.setDate(lastDate.getDate() + 1);
            return lastDate.toISOString().split('T')[0];
        };

        const getNextARPeriod = () => {
            if (!arLogs.length) {
                const today = new Date();
                const m = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'][today.getMonth()];
                return today.getDate() <= 15 ? `${m} 1-15` : `${m} 16-${new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate()}`;
            }
            const lastPeriod = arLogs[0].period || '';
            const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
            const match = lastPeriod.toUpperCase().match(/([A-Z]{3})\s+(\d+)-(\d+)/);
            if(match) {
                let m = match[1], p1 = parseInt(match[2]);
                let mIdx = months.indexOf(m);
                if(mIdx !== -1) {
                    if(p1 === 1) {
                        return `${m} 16-${new Date(new Date().getFullYear(), mIdx + 1, 0).getDate()}`;
                    } else {
                        let nextM = months[(mIdx + 1) % 12];
                        return `${nextM} 1-15`;
                    }
                }
            }
            return 'NEW PERIOD';
        };

        // Add Logic Auto
        const autoAddLog = async (dbType, autoVal) => {
            Swal.fire({ title: 'Adding...', allowOutsideClick: false, showConfirmButton: false });
            Swal.showLoading();
            try {
                const formData = new FormData();
                formData.append('gip_id', data.id);
                if (dbType === 'dtr') formData.append('record_date', autoVal);
                if (dbType === 'ar') formData.append('period', autoVal);

                const res = await fetch(`${getBasePath()}api/logs.php?type=${dbType}`, { method: 'POST', body: formData });
                const json = await res.json();
                
                if (json.success) {
                    Swal.fire({ toast: true, position: 'top-end', icon: 'success', title: 'Auto-Added!', showConfirmButton: false, timer: 1500 });
                    drawer.hide();
                    setTimeout(() => window.viewBeneficiary(data, rightGridPage), 400);
                } else {
                    Swal.fire('Error', 'Failed to add log.', 'error');
                }
            } catch(e) { Swal.fire('Error', e.message, 'error'); }
        };

        // Edit Log Logic
        const promptEditLog = async (typeStr, dbType, logId, currentVal) => {
            const labelStr = dbType === 'dtr' ? 'Record Date' : 'Period';
            const { value: formValues } = await Swal.fire({
                title: `<span class="text-xl font-black text-heading uppercase tracking-tight">Edit ${typeStr} Log</span>`,
                html: `
                    <div class="flex flex-col gap-4 text-left font-montserrat mt-2">
                        <div>
                            <label class="text-[10px] font-bold text-gray-500 uppercase tracking-widest block mb-1">${labelStr}</label>
                            <input id="swal-log-val" value="${currentVal}" class="bg-gray-50 border border-gray-200 text-heading text-sm rounded-xl focus:ring-brand focus:border-brand block w-full p-2.5 font-bold uppercase transition-all" placeholder="Enter value">
                        </div>
                    </div>
                `,
                focusConfirm: false,
                showCancelButton: true,
                confirmButtonText: '<span class="font-black uppercase tracking-widest">SAVE REVISIONS</span>',
                cancelButtonText: '<span class="font-black uppercase tracking-widest">CANCEL</span>',
                customClass: {
                    container: 'font-montserrat',
                    popup: 'rounded-[1.5rem] shadow-2xl border border-gray-100',
                    confirmButton: 'bg-brand text-white hover:bg-brand-strong text-xs px-6 py-2.5 rounded-xl border border-transparent shadow-sm mx-2',
                    cancelButton: 'bg-gray-100 text-gray-600 hover:bg-gray-200 text-xs px-6 py-2.5 rounded-xl border border-gray-200 shadow-sm mx-2'
                },
                buttonsStyling: false,
                preConfirm: () => {
                     return {
                         val: document.getElementById('swal-log-val').value.trim().toUpperCase()
                     }
                }
            });

            if (formValues && formValues.val !== currentVal) {
                try {
                    const payload = { type: dbType, id: logId, status: 'PENDING' }; // or keep existing status, API defaults it if null but we need a PUT here for update
                    if (dbType === 'dtr') payload.record_date = formValues.val;
                    if (dbType === 'ar') payload.period = formValues.val;

                    const res = await fetch(`${getBasePath()}api/logs.php`, { 
                        method: 'PUT', 
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(payload)
                    });
                    const json = await res.json();
                    
                    if (json.success) {
                        Swal.fire({ toast: true, position: 'top-end', icon: 'success', title: 'Log Updated!', showConfirmButton: false, timer: 1500 });
                        drawer.hide();
                        setTimeout(() => window.viewBeneficiary(data, rightGridPage), 400);
                    } else {
                        Swal.fire('Error', json.error || 'Failed to update log.', 'error');
                    }
                } catch(e) { Swal.fire('Error', e.message, 'error'); }
            }
        };

        const addDtrBtn = drawerContainer.querySelector('#add-dtr-log-btn');
        if (addDtrBtn) addDtrBtn.addEventListener('click', () => autoAddLog('dtr', getNextDTRDate()));
        
        const addArBtn = drawerContainer.querySelector('#add-ar-log-btn');
        if (addArBtn) addArBtn.addEventListener('click', () => autoAddLog('ar', getNextARPeriod()));

        drawerContainer.querySelectorAll('.edit-log-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                if (e.target.closest('.delete-log-btn')) return; // ignore if delete button matched
                const logType = btn.dataset.type;
                const logId = btn.dataset.id;
                const logVal = btn.dataset.val;
                promptEditLog(logType.toUpperCase(), logType, logId, logVal);
            });
        });

        // Delete Log Logic
        drawerContainer.querySelectorAll('.delete-log-btn').forEach(btn => {
            btn.addEventListener('click', async () => {
                const logId = btn.dataset.id;
                const logType = btn.dataset.type;
                
                const result = await Swal.fire({
                    title: '<span class="text-xl font-black text-philippine-red uppercase tracking-tight">Delete item?</span>',
                    text: 'This action cannot be undone.',
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonText: '<span class="font-black tracking-widest uppercase">Delete</span>',
                    cancelButtonText: '<span class="font-black tracking-widest uppercase">Wait</span>',
                    customClass: {
                        container: 'font-montserrat',
                        popup: 'rounded-[1.5rem] shadow-2xl border border-gray-100',
                        confirmButton: 'bg-philippine-red text-white hover:bg-red-700 text-xs px-6 py-2.5 rounded-xl border border-transparent shadow-sm mx-2',
                        cancelButton: 'bg-gray-100 text-gray-600 hover:bg-gray-200 text-xs px-6 py-2.5 rounded-xl border border-gray-200 shadow-sm mx-2'
                    },
                    buttonsStyling: false
                });

                if (result.isConfirmed) {
                    try {
                        const formData = new FormData();
                        formData.append('log_id', logId);
                        formData.append('action', 'delete');
                        
                        const res = await fetch(`${getBasePath()}api/logs.php?type=${logType}`, { method: 'POST', body: formData });
                        const responseText = await res.text();
                        let json = { success: false };
                        try { json = JSON.parse(responseText); } catch(e) {}

                        if(json.success) {
                            Swal.fire({ toast: true, position: 'top-end', icon: 'success', title: 'Deleted', showConfirmButton: false, timer: 1500 });
                            drawer.hide();
                            setTimeout(() => window.viewBeneficiary(data, rightGridPage), 400); 
                        } else {
                            Swal.fire('Error', 'Failed to delete data.', 'error');
                        }
                    } catch(e) { Swal.fire('Error', e.message, 'error'); }
                }
            });
        });

    }).catch(console.error);
}
