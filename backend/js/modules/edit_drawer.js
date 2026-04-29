import { isDarkMode } from './darkmode.js';
import { getBasePath } from './auth.js';
import { apiGet, apiRequest } from './ajax-manager.js';
import Swal from 'sweetalert2';
import { ASSURED_RELATIONSHIPS, COMMON_COURSES, COMMON_NATURE_OF_WORK } from './modal.js';

export function showEditBeneficiaryDrawer(data) {
    const dk = isDarkMode();
    const inputClass = `w-full bg-transparent border-b-2 ${dk ? 'border-slate-700 text-white focus:border-brand placeholder-slate-600' : 'border-gray-200 text-gray-900 focus:border-brand placeholder-gray-300'} px-1 py-1 text-sm font-black outline-none transition-all focus:ring-0`;
    const headingInputClass = `w-full bg-transparent border-none ${dk ? 'text-white' : 'text-royal-blue'} px-0 py-0 text-xl sm:text-2xl font-black leading-tight tracking-tight focus:ring-0 outline-none placeholder-gray-300 resize-none overflow-hidden`;
    const officeDefaults = ['DOLE Field Office', 'LGU', 'DEPED', 'DICT', 'PCA'];

    function calculateAge(birthday) {
        if (!birthday) return '';
        const birthDate = new Date(birthday);
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) age--;
        return age >= 0 ? age : 0;
    }

    function getRemarksClass(status) {
        if (!status) return 'bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-white border-gray-200 dark:border-slate-700';
        const s = String(status).toUpperCase();
        if (s === 'ONGOING') return 'bg-green-100 text-green-700 border-green-200';
        if (s === 'EXPIRED') return 'bg-red-400 text-white border-red-400';
        if (s === 'RESIGNED') return 'bg-[#ce1126] text-white border-[#ce1126]';
        if (s === 'ABSORBED') return 'bg-[#2e7d32] text-white border-[#2e7d32]';
        return 'bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-white border-gray-200 dark:border-slate-700';
    }

    const drawerHtml = `
<form id="edit-beneficiary-drawer-form" class="h-full flex flex-col pt-4 font-montserrat relative pb-20 overflow-y-auto">
    <input type="hidden" name="id" value="${data.id}">
    
    <div class="flex flex-col relative w-full border-b border-default pb-4 mb-5 pe-12">
        <textarea name="name" class="${headingInputClass}" rows="1" placeholder="Beneficiary Name" required oninput="this.style.height = ''; this.style.height = this.scrollHeight + 'px'">${data.name || ''}</textarea>
        
        <button type="button" id="close-edit-drawer-btn" class="text-gray-400 bg-transparent hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-slate-800 dark:hover:text-white rounded-lg w-9 h-9 absolute top-0 right-2 flex items-center justify-center transition-colors z-50 cursor-pointer">
           <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/></svg>
        </button>
    </div>

    <div class="flex flex-col sm:flex-row gap-4 w-full">
        <div class="flex-1 flex flex-col gap-1 text-left">
            <span class="text-[10px] text-gray-500 font-bold uppercase tracking-widest pl-1">ROX-ID</span>
            <input type="text" name="gip_id" value="${data.gip_id || data.id || ''}" class="bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-white text-[10px] sm:text-[11px] font-black px-2.5 py-1.5 rounded-lg border border-gray-200 dark:border-slate-700 uppercase tracking-widest shadow-sm outline-none focus:ring-2 focus:ring-brand w-full" placeholder="ROX-RD-ESIG-0000-0000">
        </div>
        <div class="flex-1 flex flex-col gap-1 text-left">
            <span class="text-[10px] text-gray-500 font-bold uppercase tracking-widest pl-1">SERIES NO.</span>
            <input type="text" name="seriesNo" value="${data.seriesNo || ''}" class="bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-white text-[10px] sm:text-[11px] font-black px-2.5 py-1.5 rounded-lg border border-gray-200 dark:border-slate-700 uppercase tracking-widest shadow-sm outline-none focus:ring-2 focus:ring-brand w-full" placeholder="2025-00-000">
        </div>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mt-4 mb-4">
        <div class="flex flex-col gap-1 text-left overflow-hidden relative">
             <span class="text-[10px] text-gray-500 font-bold uppercase tracking-widest pl-1">REMARKS (STATUS)</span>
             <select id="edit-drawer-remarks" name="remarks" class="appearance-none ${getRemarksClass(data.remarks)} text-[10px] sm:text-[11px] font-black px-2.5 py-2.5 rounded-lg border uppercase tracking-widest shadow-sm outline-none focus:ring-2 focus:ring-brand w-full cursor-pointer transition-colors duration-300 h-[42px]">
                 <option value="ONGOING" class="bg-white dark:bg-slate-800 text-gray-900 dark:text-white font-bold" ${data.remarks === 'ONGOING' ? 'selected' : ''}>ONGOING</option>
                 <option value="EXPIRED" class="bg-white dark:bg-slate-800 text-gray-900 dark:text-white font-bold" ${data.remarks === 'EXPIRED' ? 'selected' : ''}>EXPIRED</option>
                 <option value="RESIGNED" class="bg-white dark:bg-slate-800 text-gray-900 dark:text-white font-bold" ${data.remarks === 'RESIGNED' ? 'selected' : ''}>RESIGNED</option>
                 <option value="ABSORBED" class="bg-white dark:bg-slate-800 text-gray-900 dark:text-white font-bold" ${data.remarks === 'ABSORBED' ? 'selected' : ''}>ABSORBED</option>
             </select>
             <div class="pointer-events-none absolute right-3 top-[28px] text-inherit">
                  <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
             </div>
        </div>

        <div class="flex flex-col gap-1 text-left">
            <span class="text-[10px] text-gray-500 font-bold uppercase tracking-widest pl-1">ASSIGNED OFFICE</span>
            <input type="text" name="office" id="edit-office-input" value="${data.office || ''}" 
                class="bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 text-[10px] sm:text-[11px] font-black px-2.5 py-2.5 rounded-lg border border-indigo-200 dark:border-indigo-800/60 uppercase tracking-widest shadow-sm outline-none focus:ring-2 focus:ring-brand w-full placeholder-indigo-300 dark:placeholder-indigo-700 h-[42px]"
                placeholder="e.g. DOLE Field Office">
            <div id="edit-office-suggestions-box" class="hidden absolute mt-[60px] z-[60] bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg shadow-lg max-h-40 overflow-y-auto w-full sm:w-[50%] right-0">
                ${officeDefaults.map(o => `<button type="button" class="edit-office-option w-full text-left px-3 py-2 text-[11px] font-bold text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-slate-700 cursor-pointer"><span class="option-text">${o}</span></button>`).join('')}
            </div>
        </div>
    </div>

    <h4 class="text-sm font-bold text-heading mt-6 mb-4 pb-2 border-b border-default whitespace-nowrap">Personal Profile</h4>
    
    <div class="flex flex-col gap-4 text-sm mt-3 px-1 pb-24">
        <div class="flex justify-between items-center group">
            <span class="text-gray-500 font-medium whitespace-nowrap mr-4 shrink-0">Contact No.</span>
            <input type="text" name="contact" value="${data.contact || ''}" class="${inputClass} text-right font-mono max-w-[200px]" placeholder="09XX-XXX-XXXX">
        </div>
        
        <div class="flex justify-between items-start group">
            <span class="text-gray-500 font-medium whitespace-nowrap mr-4 mt-1 shrink-0">Address</span>
            <textarea name="address" rows="2" class="${inputClass} text-right resize-none max-w-[250px]" placeholder="Barangay, City">${data.address || ''}</textarea>
        </div>
        
        <div class="flex justify-between items-center group">
            <span class="text-gray-500 font-medium whitespace-nowrap mr-4 shrink-0">Birthday</span>
            <div class="relative max-w-[180px]">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg class="w-4 h-4 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z"/></svg>
                </div>
                <input type="text" name="birthday" id="edit-bday-input" value="${data.birthday || ''}" class="w-full bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-gray-900 dark:text-white pl-9 pr-3 py-2.5 text-xs font-black outline-none focus:ring-2 focus:ring-brand rounded-lg shadow-sm font-mono uppercase cursor-pointer" placeholder="MM/DD/YYYY">
            </div>
        </div>
        
        <div class="flex justify-between items-center group">
            <span class="text-gray-500 font-medium whitespace-nowrap mr-4 shrink-0">Age</span>
            <input type="text" name="age" id="edit-age-display" value="${data.age || calculateAge(data.birthday) || ''}" class="${inputClass} text-right max-w-[80px]" placeholder="Auto">
        </div>
        
        <div class="flex justify-between items-center group">
            <span class="text-gray-500 font-medium whitespace-nowrap mr-4 shrink-0">Gender</span>
            <select name="gender" class="${inputClass} cursor-pointer max-w-[110px] text-right-select !pr-1" style="direction: rtl;">
                <option value="Male" ${data.gender === 'Male' ? 'selected' : ''}>MALE</option>
                <option value="Female" ${data.gender === 'Female' ? 'selected' : ''}>FEMALE</option>
            </select>
        </div>
        
        <div class="flex flex-col gap-2 pt-3 mt-1 border-t border-gray-50 dark:border-slate-800/60">
            <span class="text-gray-500 font-medium whitespace-nowrap">Education</span>
            <input type="text" name="education" id="edit-education-input" value="${data.education || ''}" class="w-full bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-gray-900 dark:text-white px-3 py-2.5 text-xs font-black outline-none focus:ring-2 focus:ring-brand rounded-lg shadow-sm" placeholder="Course/Level...">
            <div id="edit-education-suggestions-box" class="hidden mt-2 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg shadow-lg max-h-40 overflow-y-auto">
                ${COMMON_COURSES.map(c => `<button type="button" class="edit-education-option w-full text-left px-3 py-2 text-[11px] font-bold text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-slate-700 cursor-pointer"><span class="option-text">${c.name}</span></button>`).join('')}
            </div>
        </div>

        <div class="flex justify-between items-start group pt-3 mt-1 border-t border-gray-50 dark:border-slate-800/60">
            <span class="text-gray-500 font-medium whitespace-nowrap mr-4 mt-1 shrink-0">Designated Beneficiary</span>
            <input type="text" name="designatedBeneficiary" value="${data.designatedBeneficiary || ''}" class="${inputClass} text-right max-w-[250px]" placeholder="Assured family member">
        </div>
        <div class="flex justify-between items-center group">
            <span class="text-gray-500 font-medium whitespace-nowrap mr-4 shrink-0">Relationship to Assured</span>
            <select name="relationshipToAssured" class="${inputClass} cursor-pointer max-w-[190px] text-right-select !pr-1 uppercase" style="direction: rtl;">
                <option value=""></option>
                ${ASSURED_RELATIONSHIPS.map((relationship) => `<option value="${relationship}" ${data.relationshipToAssured === relationship ? 'selected' : ''}>${relationship}</option>`).join('')}
            </select>
        </div>
    </div>

    <!-- Contract & Work Info Tab -->
    <h4 class="text-sm font-bold text-heading mt-8 pb-2 border-b border-default whitespace-nowrap">Contract & Work Details</h4>
    
    <div class="flex flex-col gap-4 text-sm mt-4 px-1">
        <div id="edit-date-range-picker" class="grid grid-cols-2 gap-3 mb-2">
            <div class="flex flex-col gap-1">
                <span class="text-gray-500 font-medium text-[10px] uppercase font-bold tracking-widest pl-1">Start Date</span>
                <div class="relative">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z"/></svg>
                    </div>
                    <input type="text" name="startDate" id="edit-startDate-input" value="${data.startDateFormatted || data.startDate || ''}" class="w-full bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-gray-900 dark:text-white pl-9 pr-3 py-2.5 text-xs font-black outline-none focus:ring-2 focus:ring-brand rounded-lg shadow-sm font-mono cursor-pointer" placeholder="MM/DD/YYYY">
                </div>
            </div>
            <div class="flex flex-col gap-1">
                <span class="text-gray-500 font-medium text-[10px] uppercase font-bold tracking-widest pl-1">End Date</span>
                <div class="relative">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z"/></svg>
                    </div>
                    <input type="text" name="endDate" id="edit-endDate-input" value="${data.endDateFormatted || data.endDate || ''}" class="w-full bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-gray-900 dark:text-white pl-9 pr-3 py-2.5 text-xs font-black outline-none focus:ring-2 focus:ring-brand rounded-lg shadow-sm font-mono cursor-pointer" placeholder="MM/DD/YYYY">
                </div>
            </div>
        </div>
        
        <div class="flex flex-col gap-2">
            <span class="text-gray-500 font-medium text-[10px] uppercase font-bold tracking-widest pl-1">Designation / Role</span>
            <input type="text" name="designation" id="edit-designation-input" value="${data.designation || ''}" class="w-full bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-gray-900 dark:text-white px-3 py-2.5 text-xs font-black outline-none focus:ring-2 focus:ring-brand rounded-lg shadow-sm" placeholder="Nature of Work...">
            <div id="edit-designation-suggestions-box" class="hidden mt-2 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg shadow-lg max-h-40 overflow-y-auto">
                ${COMMON_NATURE_OF_WORK.map(w => `<button type="button" class="edit-designation-option w-full text-left px-3 py-2 text-[11px] font-bold text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-slate-700 cursor-pointer"><span class="option-text">${w}</span></button>`).join('')}
            </div>
        </div>
        
        <div class="flex flex-col gap-2 mt-2 pb-6 relative">
            <span class="text-gray-500 font-medium text-[10px] uppercase font-bold tracking-widest pl-1">Replacement History</span>
            <input type="text" name="replacement" id="edit-replacement-input" value="${data.replacement || ''}" autocomplete="off"
                class="w-full bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-gray-900 dark:text-white px-3 py-2.5 text-xs font-black outline-none focus:ring-2 focus:ring-brand rounded-lg shadow-sm placeholder-gray-400"
                placeholder="Search GIP beneficiary to replace...">
            <div id="edit-replacement-suggestions-box" class="hidden absolute top-[60px] left-0 w-full bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg shadow-2xl max-h-48 overflow-y-auto z-[60]">
                <!-- Suggestions will populate here -->
            </div>
            <div id="edit-replacement-loading" class="hidden absolute right-3 top-[32px]">
                <svg class="animate-spin h-4 w-4 text-brand" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
            </div>
        </div>
        </div>
    </div>

    <div id="edit-extension-log-container" class="transition-all duration-300 px-1">
        <!-- Absorption or Resignation details will be injected here -->
    </div>
</form>

<div class="absolute bottom-0 left-0 right-0 w-full p-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-gray-100 dark:border-slate-800 flex justify-end gap-3 z-[60] shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
    <button type="button" id="edit-drawer-cancel-btn" class="px-6 py-3 rounded-xl bg-gray-100 text-gray-600 font-black text-[10px] cursor-pointer sm:text-xs uppercase tracking-widest hover:bg-gray-200 transition-all border border-transparent hover:border-gray-300">Cancel</button>
    <button type="submit" form="edit-beneficiary-drawer-form" class="px-6 py-3 rounded-xl bg-brand text-white font-black text-[10px] cursor-pointer sm:text-xs uppercase tracking-widest hover:bg-brand-strong transition-all shadow-lg hover:shadow-brand/40 flex items-center justify-center gap-2">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/></svg>
        Save Changes
    </button>
</div>

<style>
#edit-drawer-container::-webkit-scrollbar { width: 5px; }
#edit-drawer-container::-webkit-scrollbar-track { background: transparent; }
#edit-drawer-container::-webkit-scrollbar-thumb { background: rgba(0, 0, 0, 0.05); border-radius: 20px; }
.dark #edit-drawer-container::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.05); }
.text-right-select { text-align-last: right; }
.datepicker { z-index: 99999 !important; }
.datepicker-picker { 
    background-color: ${dk ? '#1e293b' : '#ffffff'} !important; 
    border-radius: 0.75rem !important;
    border: 1px solid ${dk ? '#334155' : '#e2e8f0'} !important;
    box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25) !important;
}
/* Editable field hint icon (shown only for editable controls) */
.editable-indicator {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='2' stroke='%2394a3b8'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='m16.862 3.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L9.582 16.07a4.5 4.5 0 0 1-1.897 1.13L4 18l.8-3.685a4.5 4.5 0 0 1 1.13-1.897L16.862 3.487Z' /%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-size: 14px 14px;
    background-position: right 0.6rem center;
    padding-right: 2rem;
}
@keyframes pulse-highlight {
    0% { background-color: transparent; }
    50% { background-color: rgba(16, 185, 129, 0.1); }
    100% { background-color: transparent; }
}
.pulse-highlight {
    animation: pulse-highlight 1.5s ease-out;
}
</style>
    `;

    let drawerContainer = document.getElementById('edit-drawer-container');
    if (drawerContainer) {
        drawerContainer.remove();
        document.documentElement.classList.remove('overflow-hidden');
        document.body.classList.remove('overflow-hidden');
    }

    drawerContainer = document.createElement('div');
    drawerContainer.id = 'edit-drawer-container';
    drawerContainer.className = 'fixed top-0 right-0 z-[100] h-screen p-4 sm:p-6 overflow-y-auto transition-transform duration-500 ease-in-out translate-x-full bg-white dark:bg-slate-900 w-full sm:w-[550px] lg:w-[650px] shadow-2xl pb-0';
    drawerContainer.setAttribute('tabindex', '-1');
    drawerContainer.innerHTML = drawerHtml;

    document.body.appendChild(drawerContainer);
    document.documentElement.classList.add('overflow-hidden');
    document.body.classList.add('overflow-hidden');

    // Initial resize for textarea
    setTimeout(() => {
        const ta = drawerContainer.querySelector('textarea[name="name"]');
        if (ta) {
            ta.style.height = 'auto';
            ta.style.height = ta.scrollHeight + 'px';
        }
    }, 10);

    // Fetch offices for suggestions from database
    (async () => {
        try {
            const res = await apiRequest('api/beneficiaries.php?get_offices=1');
            if (res.success && res.data.offices) {
                const box = drawerContainer.querySelector('#edit-office-suggestions-box');
                if (box) {
                    const defaultOffices = ['DOLE Field Office', 'LGU', 'DEPED', 'DICT', 'PCA'];
                    const allOffices = [...new Set([...defaultOffices, ...res.data.offices])];
                    box.innerHTML = allOffices.map(o => `
                        <button type="button" class="edit-office-option w-full text-left px-3 py-2 text-[11px] font-bold text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-slate-700 cursor-pointer">
                            <span class="option-text">${o}</span>
                        </button>
                    `).join('');
                }
            }
        } catch (err) {
            console.error('Error fetching office suggestions:', err);
        }
    })();

    import('flowbite').then(({ Drawer }) => {
        const drawer = new Drawer(drawerContainer, {
            placement: 'right',
            backdrop: true,
            bodyScrolling: false,
            edge: false,
            edgeOffset: '',
            backdropClasses: 'bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-50',
            onHide: () => {
                document.documentElement.classList.remove('overflow-hidden');
                document.body.classList.remove('overflow-hidden');
                setTimeout(() => {
                    if (drawerContainer && drawerContainer.parentNode) {
                        drawerContainer.remove();
                    }
                }, 400);
            }
        });
        drawer.show();

        // [FLOWBITE FIX] Re-initialize flowbite for dynamic elements
        if (window.initFlowbite) window.initFlowbite();

        const hideDrawerSafely = () => {
            if (document.activeElement && typeof document.activeElement.blur === 'function') {
                document.activeElement.blur();
            }
            drawer.hide();
        };

        drawerContainer.querySelector('#close-edit-drawer-btn').addEventListener('click', hideDrawerSafely);
        drawerContainer.querySelector('#edit-drawer-cancel-btn').addEventListener('click', hideDrawerSafely);
        const form = drawerContainer.querySelector('#edit-beneficiary-drawer-form');

        const bdayInput = drawerContainer.querySelector('#edit-bday-input');
        const ageDisplay = drawerContainer.querySelector('#edit-age-display');
        const startDateInput = drawerContainer.querySelector('#edit-startDate-input');
        const endDateInput = drawerContainer.querySelector('#edit-endDate-input');
        const seriesNoInput = drawerContainer.querySelector('input[name="seriesNo"]');
        const gipIdInput = drawerContainer.querySelector('input[name="gip_id"]');

        // Setup dynamic styling and extension fields for remarks dropdown
        const remarksSelect = drawerContainer.querySelector('#edit-drawer-remarks');
        const extensionContainer = drawerContainer.querySelector('#edit-extension-log-container');

        const updateExtensionFields = () => {
            if (!extensionContainer) return;
            const status = remarksSelect.value;
            const dk = isDarkMode();

            if (status === 'ABSORBED') {
                const d = (data.absorbDate && !String(data.absorbDate).includes('0000-00-00')) ? new Date(data.absorbDate) : new Date();
                const tzOffset = d.getTimezoneOffset() * 60000;
                const localISOTime = (new Date(d.getTime() - tzOffset)).toISOString().slice(0,16);
                
                extensionContainer.innerHTML = `
                    <div class="mt-4 pt-4 border-t ${dk ? 'border-slate-800' : 'border-gray-100'}">
                        <p class="text-[9px] uppercase font-black ${dk ? 'text-green-500' : 'text-[#2e7d32]'} border-b ${dk ? 'border-slate-800' : 'border-green-100'} pb-1 flex items-center gap-2 mb-3"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg> Absorption Details</p>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                            <div class="group">
                                <label class="text-[9px] ${dk ? 'text-green-500' : 'text-[#2e7d32]'} font-black uppercase block mb-1 cursor-pointer" for="absorbDateInput">Absorption Date</label>
                                <input type="datetime-local" id="absorbDateInput" name="absorbDate" value="${localISOTime}" class="w-full ${dk ? 'bg-slate-800 text-white border-slate-700' : 'bg-green-50 text-slate-900 border-green-200'} rounded-lg px-3 py-2 text-[11px] font-bold focus:ring-2 focus:ring-brand outline-none transition-all shadow-sm font-mono cursor-pointer">
                            </div>
                            <div class="group">
                                <label class="text-[9px] ${dk ? 'text-slate-500' : 'text-gray-400'} font-black uppercase block mb-1">Where?</label>
                                <input type="text" name="absorb_where" value="${data.absorb_where || ''}" class="w-full ${dk ? 'bg-slate-800 text-white border-slate-700' : 'bg-gray-50 text-slate-900 border-gray-200'} rounded-lg px-3 py-2 text-[11px] font-bold focus:ring-2 focus:ring-brand outline-none transition-all shadow-sm" placeholder="Where to absorb?">
                            </div>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                            <div class="group">
                                <label class="text-[9px] ${dk ? 'text-slate-500' : 'text-gray-400'} font-black uppercase block mb-1">Position</label>
                                <input type="text" name="absorb_position" value="${data.absorb_position || ''}" class="w-full ${dk ? 'bg-slate-800 text-white border-slate-700' : 'bg-gray-50 text-slate-900 border-gray-200'} rounded-lg px-3 py-2 text-[11px] font-bold focus:ring-2 focus:ring-brand outline-none transition-all shadow-sm" placeholder="What kind of position?">
                            </div>
                            <div class="group">
                                <label class="text-[9px] ${dk ? 'text-slate-500' : 'text-gray-400'} font-black uppercase block mb-1">Agency</label>
                                <input type="text" name="absorb_agency" value="${data.absorb_agency || ''}" class="w-full ${dk ? 'bg-slate-800 text-white border-slate-700' : 'bg-gray-50 text-slate-900 border-gray-200'} rounded-lg px-3 py-2 text-[11px] font-bold focus:ring-2 focus:ring-brand outline-none transition-all shadow-sm" placeholder="On what agency?">
                            </div>
                        </div>
                    </div>
                `;
            } else if (status === 'RESIGNED') {
                const d = (data.resignedDate && !String(data.resignedDate).includes('0000-00-00')) ? new Date(data.resignedDate) : new Date();
                const tzOffset = d.getTimezoneOffset() * 60000;
                const localISOTime = (new Date(d.getTime() - tzOffset)).toISOString().slice(0,16);
                
                extensionContainer.innerHTML = `
                    <div class="mt-4 pt-4 border-t ${dk ? 'border-slate-800' : 'border-gray-100'}">
                        <p class="text-[9px] uppercase font-black ${dk ? 'text-red-500' : 'text-[#ce1126]'} border-b ${dk ? 'border-slate-800' : 'border-red-100'} pb-1 flex items-center gap-2 mb-3"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg> Resignation Details</p>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                            <div class="group">
                                <label class="text-[9px] ${dk ? 'text-red-500' : 'text-[#ce1126]'} font-black uppercase block mb-1 cursor-pointer" for="resignedDateInput">Resignation Date</label>
                                <input type="datetime-local" id="resignedDateInput" name="resignedDate" value="${localISOTime}" class="w-full ${dk ? 'bg-slate-800 text-white border-slate-700' : 'bg-red-50 text-slate-900 border-red-200'} rounded-lg px-3 py-2 text-[11px] font-bold focus:ring-2 focus:ring-brand outline-none transition-all shadow-sm font-mono cursor-pointer">
                            </div>
                            <div class="group">
                                <label class="text-[9px] ${dk ? 'text-slate-500' : 'text-gray-400'} font-black uppercase block mb-1">Reason (Optional)</label>
                                <input type="text" name="resigned_reason" value="${data.resigned_reason || ''}" class="w-full ${dk ? 'bg-slate-800 text-white border-slate-700' : 'bg-gray-50 text-slate-900 border-gray-200'} rounded-lg px-3 py-2 text-[11px] font-bold focus:ring-2 focus:ring-brand outline-none transition-all shadow-sm" placeholder="Why resigned?">
                            </div>
                        </div>
                    </div>
                `;
            }
        };

        if (remarksSelect) {
            remarksSelect.addEventListener('change', (e) => {
                const baseClasses = "text-[10px] sm:text-[11px] font-black px-2.5 py-2.5 rounded-lg border uppercase tracking-widest shadow-sm outline-none focus:ring-2 focus:ring-brand w-full cursor-pointer transition-colors duration-300 h-[42px]";
                remarksSelect.className = `${getRemarksClass(e.target.value)} ${baseClasses} editable-indicator`;
                updateExtensionFields();

                // Highlight and scroll effect
                if (remarksSelect.value === 'ABSORBED' || remarksSelect.value === 'RESIGNED') {
                    setTimeout(() => {
                        extensionContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        extensionContainer.classList.add('pulse-highlight');
                        setTimeout(() => extensionContainer.classList.remove('pulse-highlight'), 1500);
                    }, 50);
                }
            });
        }
        
        // Run once on load
        updateExtensionFields();

        let ageManuallyEdited = false;
        let blockAutoCompute = false;

        // --- Robust Masking Fallback ---
        const setupDateMask = (input, onValid) => {
            input.addEventListener('input', (e) => {
                const val = e.target.value;
                const masked = window.__maskDate(val);
                if (val !== masked) e.target.value = masked;

                if (masked.length === 10) {
                    const parsed = window.__parseFormattedDate(masked);
                    if (parsed && onValid) {
                        if (!blockAutoCompute) onValid(parsed);
                        if (document.activeElement === input) {
                            input.blur();
                        }
                    }
                }
            });

            input.addEventListener('changeDate', (e) => {
                if (e.detail && e.detail.date && onValid) {
                    if (!blockAutoCompute) onValid(e.detail.date);
                    if (input._datepicker) input._datepicker.hide();
                }
            });
        };

        if (bdayInput) {
            setupDateMask(bdayInput, (date) => {
                if (ageDisplay && (!ageManuallyEdited || !ageDisplay.value)) {
                    ageDisplay.value = window.calculateAge(date);
                }
            });
        }

        if (startDateInput) {
            setupDateMask(startDateInput, (start) => {
                if (endDateInput) {
                    const end = new Date(start);
                    end.setDate(end.getDate() + 182);
                    const m = String(end.getMonth() + 1).padStart(2, '0');
                    const d = String(end.getDate()).padStart(2, '0');
                    const y = end.getFullYear();
                    endDateInput.value = `${m}/${d}/${y}`;
                }

                const selectedYear = start.getFullYear();
                if (selectedYear > 1900 && gipIdInput && seriesNoInput) {
                    Promise.all([
                        apiGet(`api/beneficiaries.php?next_id&year=${encodeURIComponent(selectedYear)}`),
                        apiGet(`api/beneficiaries.php?next_series_no&year=${encodeURIComponent(selectedYear)}`)
                    ]).then(([idRes, seriesRes]) => {
                        const nextId = (idRes.success && idRes.data?.success) ? idRes.data.nextId : null;
                        const nextSeries = (seriesRes.success && seriesRes.data?.success) ? seriesRes.data.nextSeries : null;

                        const currentIdYearMatch = String(gipIdInput.value || '').match(/^ROX-RD-ESIG-(\d{4})-\d{4}$/);
                        const currentSeriesYearMatch = String(seriesNoInput.value || '').match(/^(\d{4})-\d{2}-\d{3}$/);
                        const idYear = currentIdYearMatch ? Number(currentIdYearMatch[1]) : null;
                        const seriesYear = currentSeriesYearMatch ? Number(currentSeriesYearMatch[1]) : null;

                        if (nextId && (idYear === null || idYear !== selectedYear)) {
                            gipIdInput.value = nextId;
                        }
                        if (nextSeries && (seriesYear === null || seriesYear !== selectedYear)) {
                            seriesNoInput.value = nextSeries;
                        }
                    }).catch((err) => {
                        console.error('Edit drawer identifier sync error:', err);
                    });
                }
            });
        }
        if (endDateInput) setupDateMask(endDateInput);

        // --- Flowbite Picker Initialization ---
        const PickerClass = window.Datepicker || (typeof Datepicker !== 'undefined' ? Datepicker : null);
        const RangePickerClass = window.DateRangePicker || (typeof DateRangePicker !== 'undefined' ? DateRangePicker : null);

        if (PickerClass && bdayInput) {
            bdayInput._datepicker = new PickerClass(bdayInput, { format: 'mm/dd/yyyy', autohide: true, orientation: 'bottom right' });
        }
        const rangeEl = drawerContainer.querySelector('#edit-date-range-picker');
        if (RangePickerClass && rangeEl) {
            const rangePicker = new RangePickerClass(rangeEl, {
                format: 'mm/dd/yyyy',
                autohide: true,
                allowOneSidedRange: true,
                orientation: 'auto'
            });
            if (startDateInput) startDateInput._datepicker = rangePicker.datepickers[0];
            if (endDateInput) endDateInput._datepicker = rangePicker.datepickers[1];
        }

        // Specifically fetch the latest start and end dates from backend to ensure data accuracy.
        if (data.id) {
            blockAutoCompute = true;
            apiGet(`api/beneficiaries.php?id=${encodeURIComponent(data.id)}`).then(res => {
                if (res.success && res.data && res.data.beneficiary) {
                    const ben = res.data.beneficiary;
                    // Safely utilize native DB start_date/end_date column bypass string parsing bugs:
                    if (startDateInput && ben.startDate) {
                        const parsedStart = new Date(ben.startDate);
                        if (!isNaN(parsedStart)) {
                            startDateInput.value = ben.startDateFormatted || '';
                            if (startDateInput._datepicker) startDateInput._datepicker.setDate(parsedStart);
                        }
                    }
                    if (endDateInput && ben.endDate) {
                        const parsedEnd = new Date(ben.endDate);
                        if (!isNaN(parsedEnd)) {
                            endDateInput.value = ben.endDateFormatted || '';
                            if (endDateInput._datepicker) endDateInput._datepicker.setDate(parsedEnd);
                        }
                    }
                }
                setTimeout(() => { blockAutoCompute = false; }, 100);
            }).catch(err => {
                console.error('Error fetching accurate beneficiary dates:', err);
                blockAutoCompute = false;
            });
        }

        if (ageDisplay) {
            ageDisplay.addEventListener('input', () => ageManuallyEdited = true);
        }

        // Suggestion dropdown helpers (close immediately after selection)
        const setupSuggestionBox = (inputSelector, boxSelector, optionSelector) => {
            const input = drawerContainer.querySelector(inputSelector);
            const box = drawerContainer.querySelector(boxSelector);
            if (!input || !box) return;

            const close = () => box.classList.add('hidden');
            const open = () => box.classList.remove('hidden');

            input.addEventListener('focus', open);
            input.addEventListener('input', () => {
                const term = input.value.toLowerCase().trim();
                let visible = 0;
                box.querySelectorAll(optionSelector).forEach((opt) => {
                    const txt = (opt.querySelector('.option-text')?.textContent || opt.textContent || '').toLowerCase();
                    const match = txt.includes(term);
                    opt.style.display = match ? 'block' : 'none';
                    if (match) visible++;
                });
                if (visible > 0) open();
                else close();
            });

            box.addEventListener('click', (e) => {
                const opt = e.target.closest(optionSelector);
                if (!opt) return;
                input.value = (opt.querySelector('.option-text')?.textContent || opt.textContent || '').trim();
                close();
                input.dispatchEvent(new Event('change'));
            });

            document.addEventListener('click', (e) => {
                if (!input.contains(e.target) && !box.contains(e.target)) close();
            });
        };

        setupSuggestionBox('#edit-education-input', '#edit-education-suggestions-box', '.edit-education-option');
        setupSuggestionBox('#edit-designation-input', '#edit-designation-suggestions-box', '.edit-designation-option');
        setupSuggestionBox('#edit-office-input', '#edit-office-suggestions-box', '.edit-office-option');

        // Replacement User Search Logic
        const repInput = drawerContainer.querySelector('#edit-replacement-input');
        const repBox = drawerContainer.querySelector('#edit-replacement-suggestions-box');
        const repLoader = drawerContainer.querySelector('#edit-replacement-loading');
        let repTimeout = null;

        if (repInput && repBox) {
            repInput.addEventListener('input', (e) => {
                const q = e.target.value.trim();
                clearTimeout(repTimeout);
                repBox.classList.add('hidden');

                if (q.length < 2) return;

                if (repLoader) repLoader.classList.remove('hidden');
                repTimeout = setTimeout(async () => {
                    try {
                        const res = await apiRequest(`api/beneficiaries.php?replacement_candidates=1&q=${encodeURIComponent(q)}&limit=10`);
                        if (res.success && res.data && res.data.candidates && res.data.candidates.length > 0) {
                            repBox.innerHTML = res.data.candidates.map(c => `
                                <button type="button" class="w-full text-left px-4 py-3 border-b border-gray-100 dark:border-slate-700 hover:bg-brand-50 dark:hover:bg-slate-700/50 flex flex-col gap-1 group/cand transition-colors" data-name="${c.name}">
                                    <span class="text-xs font-black text-gray-900 dark:text-white group-hover/cand:text-brand pointer-events-none">${c.name}</span>
                                    <span class="text-[10px] font-bold text-gray-500 uppercase tracking-widest pointer-events-none">${c.id}</span>
                                </button>
                            `).join('');
                            repBox.classList.remove('hidden');
                        } else {
                            repBox.innerHTML = `<div class="px-4 py-3 text-xs text-gray-500 italic text-center font-medium">No active beneficiaries found.</div>`;
                            repBox.classList.remove('hidden');
                        }
                    } catch (err) {
                        console.error("Replacement fetch error:", err);
                    } finally {
                        if (repLoader) repLoader.classList.add('hidden');
                    }
                }, 400);
            });

            repBox.addEventListener('click', (e) => {
                const btn = e.target.closest('button');
                if (!btn) return;
                repInput.value = btn.dataset.name;
                repBox.classList.add('hidden');
            });

            document.addEventListener('click', (e) => {
                if (!repInput.contains(e.target) && !repBox.contains(e.target)) {
                    repBox.classList.add('hidden');
                }
            });
        }

        // Add small pencil hint only to editable controls.
        form.querySelectorAll('input, select, textarea').forEach((el) => {
            const type = (el.getAttribute('type') || '').toLowerCase();
            const isEditable = !el.disabled && !el.readOnly && type !== 'hidden';
            el.classList.remove('editable-indicator');
            if (isEditable) {
                el.classList.add('editable-indicator');
            }
        });
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(form);
            const beneficiaryData = {};
            formData.forEach((v, k) => beneficiaryData[k] = v);

            beneficiaryData.id = data.id;
            beneficiaryData.gip_id = beneficiaryData.gip_id || data.id;

            if (window.addBeneficiaryData) {
                (async () => {
                    const success = await window.addBeneficiaryData(beneficiaryData, true, false);
                    if (success) {
                        hideDrawerSafely();
                        // Instead of full hide/show cycle (flicker), update the view data directly
                        if (window.viewBeneficiary) {
                            // pass ONLY the id. This forces window.viewBeneficiary in modal.js 
                            // to do a fresh fetch from Supabase/MySQL instead of using stale local memory.
                            setTimeout(() => window.viewBeneficiary({ id: data.id }, 0), 100);
                        }
                        Swal.fire({ toast: true, position: 'top-end', icon: 'success', title: 'Record Updated', showConfirmButton: false, timer: 3000 });
                    }
                })();
            }
        });
    });
}
