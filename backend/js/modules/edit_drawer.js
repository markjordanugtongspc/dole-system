import { isDarkMode } from './darkmode.js';
import { getBasePath, isSupabaseMode } from './auth.js';
import { apiGet, apiRequest } from './ajax-manager.js';
import { supabase } from './supabase-client.js';
import Swal from 'sweetalert2';
import { ASSURED_RELATIONSHIPS, COMMON_COURSES, COMMON_ASSIGNED_UNITS } from './modal.js';

// START: showEditBeneficiaryDrawer - Opens slide-over drawer to edit GIP beneficiary details
export function showEditBeneficiaryDrawer(data) {
    const dk = isDarkMode();
    const inputClass = 'w-full rounded-none border border-slate-300 bg-white px-3 py-2.5 text-sm font-bold text-slate-900 placeholder-slate-400 outline-none transition-colors focus:border-brand focus:ring-1 focus:ring-brand dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:placeholder-slate-600';
    const headingInputClass = 'w-full resize-none overflow-hidden rounded-none border-0 border-b-2 border-blue-200 bg-transparent px-0 py-2 text-xl font-black leading-tight tracking-tight text-royal-blue placeholder-gray-300 outline-none focus:border-brand focus:ring-0 sm:text-2xl dark:border-slate-700 dark:text-white';
    const fieldLabelClass = 'mb-1.5 block text-[0.625rem] font-black uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400';

    function parseBirthdayParts(value) {
        const raw = String(value || '').trim();
        if (!raw) return { month: '', day: '', year: '', iso: '' };

        let match = raw.match(/^(\d{4})-(\d{2})-(\d{2})/);
        if (match) {
            return { year: match[1], month: match[2], day: match[3], iso: `${match[1]}-${match[2]}-${match[3]}` };
        }

        match = raw.match(/^(\d{1,2})[\/.\-](\d{1,2})[\/.\-](\d{4})$/);
        if (match) {
            const month = match[1].padStart(2, '0');
            const day = match[2].padStart(2, '0');
            return { year: match[3], month, day, iso: `${match[3]}-${month}-${day}` };
        }

        return { month: '', day: '', year: '', iso: '' };
    }

    function toIsoBirthday(month, day, year) {
        const numericMonth = Number.parseInt(month, 10);
        const numericDay = Number.parseInt(day, 10);
        const numericYear = Number.parseInt(year, 10);
        if (!Number.isInteger(numericMonth) || !Number.isInteger(numericDay) || !Number.isInteger(numericYear)) return '';
        if (numericYear < 1900 || numericYear > new Date().getFullYear()) return '';
        const maxDay = new Date(numericYear, numericMonth, 0).getDate();
        if (numericMonth < 1 || numericMonth > 12 || numericDay < 1 || numericDay > maxDay) return '';
        return `${String(numericYear).padStart(4, '0')}-${String(numericMonth).padStart(2, '0')}-${String(numericDay).padStart(2, '0')}`;
    }

    function calculateAge(birthday) {
        const parts = parseBirthdayParts(birthday);
        if (!parts.iso) return '';
        const birthYear = Number.parseInt(parts.year, 10);
        const birthMonth = Number.parseInt(parts.month, 10);
        const birthDay = Number.parseInt(parts.day, 10);
        const today = new Date();
        let age = today.getFullYear() - birthYear;
        if ((today.getMonth() + 1) < birthMonth || ((today.getMonth() + 1) === birthMonth && today.getDate() < birthDay)) age--;
        return age >= 0 ? age : '';
    }

    const initialBirthday = parseBirthdayParts(data.birthday);
    const birthdayMonthOptions = Array.from({ length: 12 }, (_, index) => {
        const value = String(index + 1).padStart(2, '0');
        return `<option value="${value}" ${initialBirthday.month === value ? 'selected' : ''}>${value}</option>`;
    }).join('');
    const birthdayDayOptions = Array.from({ length: 31 }, (_, index) => {
        const value = String(index + 1).padStart(2, '0');
        return `<option value="${value}" ${initialBirthday.day === value ? 'selected' : ''}>${value}</option>`;
    }).join('');

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
        
        <button type="button" id="close-edit-drawer-btn" class="text-gray-400 bg-transparent hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-slate-800 dark:hover:text-white rounded-none w-9 h-9 absolute top-0 right-2 flex items-center justify-center transition-colors z-50 cursor-pointer">
           <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/></svg>
        </button>
    </div>

    <div class="flex flex-col gap-1 text-left w-full">
        <span class="text-[0.625rem] text-gray-500 font-bold uppercase tracking-widest pl-1">ROX-ID</span>
        <input type="text" name="gip_id" value="${data.gip_id || data.id || ''}" class="bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-white text-[0.625rem] sm:text-[0.6875rem] font-black px-2.5 py-1.5 rounded-none border border-gray-200 dark:border-slate-700 uppercase tracking-widest shadow-sm outline-none focus:ring-2 focus:ring-brand w-full" placeholder="ROX-RD-ESIG-0000-0000">
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mt-4 mb-4">
        <div class="flex flex-col gap-1 text-left overflow-hidden relative">
             <span class="text-[0.625rem] text-gray-500 font-bold uppercase tracking-widest pl-1">REMARKS (STATUS)</span>
             <select id="edit-drawer-remarks" name="remarks" class="appearance-none ${getRemarksClass(data.remarks)} text-[0.625rem] sm:text-[0.6875rem] font-black px-2.5 py-2.5 rounded-none border uppercase tracking-widest shadow-sm outline-none focus:ring-2 focus:ring-brand w-full cursor-pointer transition-colors duration-300 h-[42px]">
                 <option value="ONGOING" class="bg-white dark:bg-slate-800 text-gray-900 dark:text-white font-bold" ${data.remarks === 'ONGOING' ? 'selected' : ''}>ONGOING</option>
                 <option value="EXPIRED" class="bg-white dark:bg-slate-800 text-gray-900 dark:text-white font-bold" ${data.remarks === 'EXPIRED' ? 'selected' : ''}>EXPIRED</option>
                 <option value="RESIGNED" class="bg-white dark:bg-slate-800 text-gray-900 dark:text-white font-bold" ${data.remarks === 'RESIGNED' ? 'selected' : ''}>RESIGNED</option>
                 <option value="ABSORBED" class="bg-white dark:bg-slate-800 text-gray-900 dark:text-white font-bold" ${data.remarks === 'ABSORBED' ? 'selected' : ''}>ABSORBED</option>
             </select>
             <div class="pointer-events-none absolute right-5 top-[28px] text-inherit">
                  <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
             </div>
        </div>

        <div class="flex flex-col gap-1 text-left relative">
            <span class="text-[0.625rem] text-gray-500 font-bold uppercase tracking-widest pl-1">ASSIGNED OFFICE</span>
            <input type="text" name="office" id="edit-office-input" value="${data.office || ''}" 
                class="bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 text-[0.625rem] sm:text-[0.6875rem] font-black px-2.5 py-2.5 rounded-none border border-indigo-200 dark:border-indigo-800/60 uppercase tracking-widest shadow-sm outline-none focus:ring-2 focus:ring-brand w-full placeholder-indigo-300 dark:placeholder-indigo-700 h-[42px]"
                placeholder="e.g. DOLE Field Office">
            <div id="edit-office-suggestions-box" class="hidden absolute mt-[45px] left-0 right-0 z-[100] bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-none shadow-2xl min-w-[280px] overflow-hidden backdrop-blur-xl">
                <!-- Content injected via JS -->
            </div>
        </div>
    </div>

    <section class="mt-6 border border-slate-200 bg-slate-50/70 dark:border-slate-700 dark:bg-slate-950/40">
        <div class="border-b border-slate-200 bg-white px-4 py-3 dark:border-slate-700 dark:bg-slate-900">
            <h4 class="text-sm font-black uppercase tracking-[0.14em] text-heading">Personal Profile</h4>
            <p class="mt-1 text-[0.625rem] font-medium text-slate-400">Update the beneficiary information stored in the master record.</p>
        </div>

        <div class="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2">
            <label class="block">
                <span class="${fieldLabelClass}">Contact Number</span>
                <input type="text" name="contact" value="${data.contact || ''}" class="${inputClass} font-mono" placeholder="09XX-XXX-XXXX" inputmode="tel">
            </label>

            <label class="block">
                <span class="${fieldLabelClass}">Gender</span>
                <select name="gender" class="${inputClass} cursor-pointer appearance-none">
                    <option value="Male" ${String(data.gender || '').toUpperCase() === 'MALE' ? 'selected' : ''}>MALE</option>
                    <option value="Female" ${String(data.gender || '').toUpperCase() === 'FEMALE' ? 'selected' : ''}>FEMALE</option>
                </select>
            </label>

            <label class="block sm:col-span-2">
                <span class="${fieldLabelClass}">Complete Address</span>
                <textarea name="address" rows="3" class="${inputClass} resize-y" placeholder="Barangay, municipality/city, province">${data.address || ''}</textarea>
            </label>

            <div class="sm:col-span-2 border border-blue-200 bg-blue-50/60 p-3 dark:border-blue-900 dark:bg-blue-950/30">
                <div class="mb-3 flex items-center justify-between gap-3 border-b border-blue-200 pb-2 dark:border-blue-900">
                    <div>
                        <span class="${fieldLabelClass} mb-0">Birthday</span>
                        <p class="mt-1 text-[0.5625rem] font-semibold text-slate-400">Select month, day, and year or use the calendar.</p>
                    </div>
                    <svg class="h-5 w-5 shrink-0 text-royal-blue dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 2v3m8-3v3M3 9h18M5 4h14a2 2 0 012 2v14H3V6a2 2 0 012-2z" /></svg>
                </div>
                <input type="hidden" name="birthday" id="edit-bday-input" value="${initialBirthday.iso}">
                <div class="grid grid-cols-2 gap-2 sm:grid-cols-[0.8fr_0.8fr_1.2fr_1.4fr]">
                    <label class="block">
                        <span class="${fieldLabelClass}">Month (MM)</span>
                        <select id="edit-birth-month" class="${inputClass} cursor-pointer appearance-none font-mono" aria-label="Birth month">
                            <option value="">MM</option>
                            ${birthdayMonthOptions}
                        </select>
                    </label>
                    <label class="block">
                        <span class="${fieldLabelClass}">Day (DD)</span>
                        <select id="edit-birth-day" class="${inputClass} cursor-pointer appearance-none font-mono" aria-label="Birth day">
                            <option value="">DD</option>
                            ${birthdayDayOptions}
                        </select>
                    </label>
                    <label class="block">
                        <span class="${fieldLabelClass}">Year (YYYY)</span>
                        <input type="text" id="edit-birth-year" value="${initialBirthday.year}" class="${inputClass} font-mono" placeholder="YYYY" inputmode="numeric" maxlength="4" aria-label="Birth year">
                    </label>
                    <label class="block">
                        <span class="${fieldLabelClass}">Calendar</span>
                        <input type="date" id="edit-birthday-calendar" value="${initialBirthday.iso}" class="${inputClass} cursor-pointer font-mono" aria-label="Birthday calendar">
                    </label>
                </div>
                <p id="edit-birthday-error" class="mt-2 hidden border-l-4 border-red-500 bg-red-50 px-2 py-1.5 text-[0.625rem] font-bold text-red-700 dark:bg-red-950/40 dark:text-red-300" role="alert">Enter a valid birthday using MM, DD, and YYYY.</p>
            </div>

            <label class="block">
                <span class="${fieldLabelClass}">Age</span>
                <input type="text" name="age" id="edit-age-display" value="${calculateAge(initialBirthday.iso)}" class="${inputClass} cursor-not-allowed bg-slate-100 font-mono text-slate-500 dark:bg-slate-800" placeholder="Auto-calculated" readonly aria-readonly="true">
            </label>

            <div class="relative">
                <label for="edit-education-input" class="${fieldLabelClass}">Educational Level / Course</label>
                <input type="text" name="education" id="edit-education-input" value="${data.education || ''}" class="${inputClass}" placeholder="Select or enter education">
                <div id="edit-education-suggestions-box" class="absolute left-0 right-0 z-[70] mt-1 hidden max-h-48 overflow-y-auto border border-slate-300 bg-white shadow-xl dark:border-slate-700 dark:bg-slate-900">
                    ${COMMON_COURSES.map(c => `<button type="button" class="edit-education-option w-full border-b border-slate-100 px-3 py-2 text-left text-[0.6875rem] font-bold text-slate-700 hover:bg-blue-50 dark:border-slate-800 dark:text-slate-200 dark:hover:bg-slate-800"><span class="option-text">${c.name}</span></button>`).join('')}
                </div>
            </div>

            <label class="block">
                <span class="${fieldLabelClass}">Designated Beneficiary</span>
                <input type="text" name="designatedBeneficiary" value="${data.designatedBeneficiary || ''}" class="${inputClass}" placeholder="Assured family member">
            </label>

            <label class="block">
                <span class="${fieldLabelClass}">Relationship to Assured</span>
                <select name="relationshipToAssured" class="${inputClass} cursor-pointer appearance-none uppercase">
                    <option value="">SELECT RELATIONSHIP</option>
                    ${ASSURED_RELATIONSHIPS.map((relationship) => `<option value="${relationship}" ${String(data.relationshipToAssured || '').toUpperCase() === relationship.toUpperCase() ? 'selected' : ''}>${relationship}</option>`).join('')}
                </select>
            </label>
        </div>
    </section>

    <!-- Contract & Work Info Tab -->
    <h4 class="text-sm font-bold text-heading mt-8 pb-2 border-b border-default whitespace-nowrap">Contract & Work Details</h4>
    
    <div class="flex flex-col gap-4 text-sm mt-4 px-1">
        <div id="edit-date-range-picker" class="grid grid-cols-2 gap-3 mb-2">
            <div class="flex flex-col gap-1">
                <span class="text-gray-500 font-medium text-[0.625rem] uppercase font-bold tracking-widest pl-1">Start Date</span>
                <div class="relative">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z"/></svg>
                    </div>
                    <input type="text" name="startDate" id="edit-startDate-input" value="${data.startDateFormatted || data.startDate || ''}" class="w-full bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-gray-900 dark:text-white pl-9 pr-3 py-2.5 text-xs font-black outline-none focus:ring-2 focus:ring-brand rounded-none shadow-sm font-mono cursor-pointer" placeholder="MM/DD/YYYY">
                </div>
            </div>
            <div class="flex flex-col gap-1">
                <span class="text-gray-500 font-medium text-[0.625rem] uppercase font-bold tracking-widest pl-1">End Date</span>
                <div class="relative">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z"/></svg>
                    </div>
                    <input type="text" name="endDate" id="edit-endDate-input" value="${data.endDateFormatted || data.endDate || ''}" class="w-full bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-gray-900 dark:text-white pl-9 pr-3 py-2.5 text-xs font-black outline-none focus:ring-2 focus:ring-brand rounded-none shadow-sm font-mono cursor-pointer" placeholder="MM/DD/YYYY">
                </div>
            </div>
        </div>
        
        <div class="flex flex-col gap-2">
            <span class="text-gray-500 font-medium text-[0.625rem] uppercase font-bold tracking-widest pl-1">Assigned Unit</span>
            <input type="text" name="designation" id="edit-designation-input" value="${data.designation || ''}" class="w-full bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-gray-900 dark:text-white px-3 py-2.5 text-xs font-black outline-none focus:ring-2 focus:ring-brand rounded-none shadow-sm" placeholder="Assigned Unit...">
            <div id="edit-designation-suggestions-box" class="hidden mt-2 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-none shadow-lg max-h-40 overflow-y-auto">
                <!-- Suggestions will be injected here -->
            </div>
        </div>
        
        <div class="flex flex-col gap-2 mt-2 pb-6 relative">
            <span class="text-gray-500 font-medium text-[0.625rem] uppercase font-bold tracking-widest pl-1">Replacement History</span>
            <input type="text" name="replacement" id="edit-replacement-input" value="${data.replacement || ''}" autocomplete="off"
                class="w-full bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-gray-900 dark:text-white px-3 py-2.5 text-xs font-black outline-none focus:ring-2 focus:ring-brand rounded-none shadow-sm placeholder-gray-400"
                placeholder="Search GIP beneficiary to replace...">
            <div id="edit-replacement-suggestions-box" class="hidden absolute top-[60px] left-0 w-full bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-none shadow-2xl max-h-48 overflow-y-auto z-[60]">
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

<div class="absolute bottom-0 left-0 right-0 grid w-full grid-cols-2 gap-3 border-t border-gray-100 bg-white/95 p-4 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/95 z-[60]">
    <button type="button" id="edit-drawer-cancel-btn" class="order-2 h-12 rounded-none border border-transparent bg-gray-100 px-4 py-3 text-[0.625rem] font-black uppercase tracking-widest text-gray-600 transition-all hover:border-[#ce1126] hover:bg-[#ce1126] hover:text-white cursor-pointer sm:text-xs">Cancel</button>
    <button type="submit" id="edit-drawer-submit-btn" form="edit-beneficiary-drawer-form" class="order-1 flex h-12 items-center justify-center gap-2 rounded-none bg-brand px-4 py-3 text-[0.625rem] font-black uppercase tracking-widest text-white shadow-lg transition-all hover:bg-brand-strong hover:shadow-brand/40 cursor-pointer sm:text-xs">
        <svg id="edit-drawer-submit-icon" class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/></svg>
        <span id="edit-drawer-submit-text">Save Changes</span>
    </button>
</div>

<style>
#edit-drawer-container::-webkit-scrollbar { width: 5px; }
#edit-drawer-container::-webkit-scrollbar-track { background: transparent; }
#edit-drawer-container::-webkit-scrollbar-thumb { background: rgba(0, 0, 0, 0.05); border-radius: 0; }
.dark #edit-drawer-container::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.05); }
.text-right-select { text-align-last: right; }
.datepicker { z-index: 99999 !important; }
.datepicker-picker {
    background-color: #ffffff !important;
    border-radius: 0 !important;
    border: 1px solid #e2e8f0 !important;
    box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25) !important;
}
.dark .datepicker-picker {
    background-color: #1e293b !important;
    border-color: #334155 !important;
    color: #ffffff !important;
}
.datepicker-cell, .datepicker-controls button { border-radius: 0 !important; }

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
    drawerContainer.className = 'fixed top-0 right-0 z-[100] h-screen p-4 sm:p-6 overflow-y-auto transition-transform duration-500 ease-in-out translate-x-full border-l border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900 w-full sm:w-[550px] lg:w-[650px] shadow-2xl pb-0';
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

    // [DYNAMIC] Suggestions for Education and Designation
    const educationBox = drawerContainer.querySelector('#edit-education-suggestions-box');
    if (educationBox) {
        educationBox.innerHTML = COMMON_COURSES.map(c => `
            <button type="button" class="edit-education-option w-full text-left px-3 py-2 text-[0.6875rem] font-bold text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-slate-700 cursor-pointer">
                <span class="option-text">${c.name}</span>
            </button>
        `).join('');
    }

    const designationBox = drawerContainer.querySelector('#edit-designation-suggestions-box');
    if (designationBox) {
        designationBox.innerHTML = COMMON_ASSIGNED_UNITS.map(w => `
            <button type="button" class="edit-designation-option w-full text-left px-3 py-2 text-[0.6875rem] font-bold text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-slate-700 cursor-pointer">
                <span class="option-text">${w}</span>
            </button>
        `).join('');
    }

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
        const birthMonthInput = drawerContainer.querySelector('#edit-birth-month');
        const birthDayInput = drawerContainer.querySelector('#edit-birth-day');
        const birthYearInput = drawerContainer.querySelector('#edit-birth-year');
        const birthdayCalendarInput = drawerContainer.querySelector('#edit-birthday-calendar');
        const birthdayError = drawerContainer.querySelector('#edit-birthday-error');
        const ageDisplay = drawerContainer.querySelector('#edit-age-display');
        const startDateInput = drawerContainer.querySelector('#edit-startDate-input');
        const endDateInput = drawerContainer.querySelector('#edit-endDate-input');
        const seriesNoInput = drawerContainer.querySelector('input[name="seriesNo"]');
        const gipIdInput = drawerContainer.querySelector('input[name="gip_id"]');

        const rebuildBirthdayDays = (preferredDay = birthDayInput?.value || '') => {
            if (!birthDayInput) return;
            const month = Number.parseInt(birthMonthInput?.value || '', 10);
            const year = Number.parseInt(birthYearInput?.value || '', 10);
            const maxDay = Number.isInteger(month) && month >= 1 && month <= 12
                ? new Date(Number.isInteger(year) && year >= 1900 ? year : 2000, month, 0).getDate()
                : 31;
            const fragment = document.createDocumentFragment();
            const placeholder = document.createElement('option');
            placeholder.value = '';
            placeholder.textContent = 'DD';
            fragment.append(placeholder);
            for (let day = 1; day <= maxDay; day++) {
                const option = document.createElement('option');
                option.value = String(day).padStart(2, '0');
                option.textContent = option.value;
                option.selected = option.value === String(preferredDay).padStart(2, '0');
                fragment.append(option);
            }
            birthDayInput.replaceChildren(fragment);
        };

        const syncBirthdayFromParts = (showError = false) => {
            const hasBirthdayInput = Boolean(birthMonthInput?.value || birthDayInput?.value || birthYearInput?.value);
            const isoBirthday = hasBirthdayInput
                ? toIsoBirthday(birthMonthInput?.value, birthDayInput?.value, birthYearInput?.value)
                : '';
            if (bdayInput) bdayInput.value = isoBirthday;
            if (birthdayCalendarInput && birthdayCalendarInput.value !== isoBirthday) birthdayCalendarInput.value = isoBirthday;
            if (ageDisplay) ageDisplay.value = isoBirthday ? calculateAge(isoBirthday) : '';
            if (birthdayError) birthdayError.classList.toggle('hidden', Boolean(isoBirthday) || !hasBirthdayInput || !showError);
            return { isoBirthday, hasBirthdayInput };
        };

        const applyBirthdayIso = (isoBirthday) => {
            const parts = parseBirthdayParts(isoBirthday);
            if (!parts.iso) return false;
            if (birthMonthInput) birthMonthInput.value = parts.month;
            if (birthYearInput) birthYearInput.value = parts.year;
            rebuildBirthdayDays(parts.day);
            if (birthDayInput) birthDayInput.value = parts.day;
            syncBirthdayFromParts(false);
            return true;
        };

        if (birthMonthInput) {
            birthMonthInput.addEventListener('change', () => {
                rebuildBirthdayDays();
                syncBirthdayFromParts(false);
            });
        }
        if (birthDayInput) birthDayInput.addEventListener('change', () => syncBirthdayFromParts(false));
        if (birthYearInput) {
            birthYearInput.addEventListener('input', () => {
                birthYearInput.value = birthYearInput.value.replace(/\D/g, '').slice(0, 4);
                rebuildBirthdayDays();
                syncBirthdayFromParts(false);
            });
        }
        if (birthdayCalendarInput) {
            birthdayCalendarInput.addEventListener('change', () => {
                if (birthdayCalendarInput.value) applyBirthdayIso(birthdayCalendarInput.value);
            });
        }
        rebuildBirthdayDays(initialBirthday.day);
        syncBirthdayFromParts(false);

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
                        <p class="text-[0.5625rem] uppercase font-black ${dk ? 'text-green-500' : 'text-[#2e7d32]'} border-b ${dk ? 'border-slate-800' : 'border-green-100'} pb-1 flex items-center gap-2 mb-3"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg> Absorption Details</p>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                            <div class="group">
                                <label class="text-[0.5625rem] ${dk ? 'text-green-500' : 'text-[#2e7d32]'} font-black uppercase block mb-1 cursor-pointer" for="absorbDateInput">Absorption Date</label>
                                <input type="datetime-local" id="absorbDateInput" name="absorbDate" value="${localISOTime}" class="w-full ${dk ? 'bg-slate-800 text-white border-slate-700' : 'bg-green-50 text-slate-900 border-green-200'} rounded-none px-3 py-2 text-[0.6875rem] font-bold focus:ring-2 focus:ring-brand outline-none transition-all shadow-sm font-mono cursor-pointer">
                            </div>
                            <div class="group">
                                <label class="text-[0.5625rem] ${dk ? 'text-slate-500' : 'text-gray-400'} font-black uppercase block mb-1">Where?</label>
                                <input type="text" name="absorb_where" value="${data.absorb_where || ''}" class="w-full ${dk ? 'bg-slate-800 text-white border-slate-700' : 'bg-gray-50 text-slate-900 border-gray-200'} rounded-none px-3 py-2 text-[0.6875rem] font-bold focus:ring-2 focus:ring-brand outline-none transition-all shadow-sm" placeholder="Where to absorb?">
                            </div>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                            <div class="group">
                                <label class="text-[0.5625rem] ${dk ? 'text-slate-500' : 'text-gray-400'} font-black uppercase block mb-1">Position</label>
                                <input type="text" name="absorb_position" value="${data.absorb_position || ''}" class="w-full ${dk ? 'bg-slate-800 text-white border-slate-700' : 'bg-gray-50 text-slate-900 border-gray-200'} rounded-none px-3 py-2 text-[0.6875rem] font-bold focus:ring-2 focus:ring-brand outline-none transition-all shadow-sm" placeholder="What kind of position?">
                            </div>
                            <div class="group">
                                <label class="text-[0.5625rem] ${dk ? 'text-slate-500' : 'text-gray-400'} font-black uppercase block mb-1">Agency</label>
                                <input type="text" name="absorb_agency" value="${data.absorb_agency || ''}" class="w-full ${dk ? 'bg-slate-800 text-white border-slate-700' : 'bg-gray-50 text-slate-900 border-gray-200'} rounded-none px-3 py-2 text-[0.6875rem] font-bold focus:ring-2 focus:ring-brand outline-none transition-all shadow-sm" placeholder="On what agency?">
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
                        <p class="text-[0.5625rem] uppercase font-black ${dk ? 'text-red-500' : 'text-[#ce1126]'} border-b ${dk ? 'border-slate-800' : 'border-red-100'} pb-1 flex items-center gap-2 mb-3"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg> Resignation Details</p>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                            <div class="group">
                                <label class="text-[0.5625rem] ${dk ? 'text-red-500' : 'text-[#ce1126]'} font-black uppercase block mb-1 cursor-pointer" for="resignedDateInput">Resignation Date</label>
                                <input type="datetime-local" id="resignedDateInput" name="resignedDate" value="${localISOTime}" class="w-full ${dk ? 'bg-slate-800 text-white border-slate-700' : 'bg-red-50 text-slate-900 border-red-200'} rounded-none px-3 py-2 text-[0.6875rem] font-bold focus:ring-2 focus:ring-brand outline-none transition-all shadow-sm font-mono cursor-pointer">
                            </div>
                            <div class="group">
                                <label class="text-[0.5625rem] ${dk ? 'text-slate-500' : 'text-gray-400'} font-black uppercase block mb-1">Reason (Optional)</label>
                                <input type="text" name="resigned_reason" value="${data.resigned_reason || ''}" class="w-full ${dk ? 'bg-slate-800 text-white border-slate-700' : 'bg-gray-50 text-slate-900 border-gray-200'} rounded-none px-3 py-2 text-[0.6875rem] font-bold focus:ring-2 focus:ring-brand outline-none transition-all shadow-sm" placeholder="Why resigned?">
                            </div>
                        </div>
                    </div>
                `;
            }
        };

        if (remarksSelect) {
            remarksSelect.addEventListener('change', (e) => {
                const baseClasses = "text-[0.625rem] sm:text-[0.6875rem] font-black px-2.5 py-2.5 rounded-none border uppercase tracking-widest shadow-sm outline-none focus:ring-2 focus:ring-brand w-full cursor-pointer transition-colors duration-300 h-[42px]";
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

        let blockAutoCompute = false;

        // --- Robust Masking Fallback ---
        const setupDateMask = (input, onValid) => {
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
                        if (parsed && onValid) {
                            if (!blockAutoCompute) onValid(parsed);
                            if (document.activeElement === input) {
                                input.blur();
                            }
                        }
                        
                        // Close datepicker
                        if (input._datepicker) {
                            input._datepicker.hide();
                        } else {
                            const picker = input.parentNode && input.parentNode._datepicker;
                            if (picker && typeof picker.hide === 'function') {
                                picker.hide();
                            }
                        }
                    }
                }
            });

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
                        // Close datepicker
                        if (input._datepicker) {
                            input._datepicker.hide();
                        } else {
                            const picker = input.parentNode && input.parentNode._datepicker;
                            if (picker && typeof picker.hide === 'function') {
                                picker.hide();
                            }
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


        if (startDateInput) {
            setupDateMask(startDateInput, (start) => {
                if (endDateInput) {
                    const end = new Date(start);
                    end.setDate(end.getDate() + 243);
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
                    if (ben.birthday) applyBirthdayIso(ben.birthday);
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
        
        // --- ENHANCED OFFICE SELECTOR ---
        const setupOfficeSelectorEdit = () => {
            const officeInput = drawerContainer.querySelector('#edit-office-input');
            const officeContainer = drawerContainer.querySelector('#edit-office-suggestions-box');
            if (!officeInput || !officeContainer) return;

            // Move the box down slightly to clear the input padding/border
            officeContainer.classList.add('mt-[52px]');

            let currentView = 'OFFICES';
            let selectedOffice = null;
            let cachedOffices = [];

            const t = {
                textLabel: dk ? 'text-slate-400' : 'text-slate-500',
                textHeading: dk ? 'text-white' : 'text-royal-blue',
                borderDivide: dk ? 'border-slate-800' : 'border-slate-100',
                courseHover: dk ? 'hover:bg-slate-800/80' : 'hover:bg-blue-50',
                textCourseOpt: dk ? 'text-slate-300' : 'text-slate-700'
            };

            const fetchOffices = async () => {
                const cacheKey = 'dole_offices_cache';
                
                const syncBackground = async () => {
                    let freshData = [];
                    try {
                        const res = await apiGet('api/beneficiaries.php?get_offices_advanced=1');
                        if (res.success && res.data?.success && Array.isArray(res.data.offices)) freshData = res.data.offices;
                    } catch (err) { console.error('Office fetch failed:', err); }

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
                        // If older than 30 mins, sync in background but don't wait
                        if (Date.now() - timestamp > 30 * 60 * 1000) {
                            syncBackground().then(() => {
                                // Optional: re-render if we are still on the OFFICES view
                                if (currentView === 'OFFICES') render('OFFICES', selectedOffice, officeInput.value);
                            });
                        }
                        return data;
                    } catch (e) { localStorage.removeItem(cacheKey); }
                }

                // If no cache, we MUST await
                if (cachedOffices.length === 0) {
                    return await syncBackground();
                }
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
                                    <div class="office-code-option group/opt px-3 py-2 text-[0.5625rem] font-bold ${t.textCourseOpt} ${t.courseHover} rounded-none cursor-pointer transition-all flex items-center justify-between group active:scale-[0.98] mx-1 mb-0.5"
                                        data-id="${o.id}" data-name="${o.office}" data-has-locations="${hasLocations}">
                                        <div class="flex items-center gap-2.5">
                                            <div class="w-2 h-2 rounded-none bg-blue-500/10 group-hover/opt:bg-blue-500/20 flex items-center justify-center transition-colors">
                                                <div class="w-1 h-1 rounded-none bg-blue-500/40 group-hover/opt:bg-blue-500 transition-colors"></div>
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
                                    <div id="add-office-location-row-edit" class="hidden gap-1.5 items-center">
                                        <input type="text" id="new-office-loc-input-edit" placeholder="Location name..." class="flex-1 min-w-0 px-2.5 py-1.5 text-[0.5625rem] font-bold bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-none outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all">
                                        <button type="button" id="confirm-office-with-loc-edit" class="shrink-0 px-2.5 py-1.5 rounded-none bg-blue-500 text-white text-[0.5625rem] font-black uppercase tracking-widest hover:bg-blue-600 transition-all active:scale-95 cursor-pointer whitespace-nowrap">
                                            Confirm
                                        </button>
                                    </div>
                                    <div class="flex gap-1.5">
                                        <button type="button" id="add-office-with-loc-btn-edit" class="flex-1 flex items-center justify-center gap-1.5 px-2.5 py-1.5 rounded-none bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800/50 text-[0.5625rem] font-black uppercase tracking-widest hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-all active:scale-[0.98] cursor-pointer whitespace-nowrap">
                                            <svg class="w-2.5 h-2.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                                            Add location
                                        </button>
                                        <button type="button" id="skip-office-loc-btn-edit" class="flex-1 flex items-center justify-center gap-1.5 px-2.5 py-1.5 rounded-none bg-gray-100 dark:bg-slate-800 text-gray-500 dark:text-slate-400 border border-gray-200 dark:border-slate-700 text-[0.5625rem] font-black uppercase tracking-widest hover:bg-gray-200 dark:hover:bg-slate-700 transition-all active:scale-[0.98] cursor-pointer whitespace-nowrap">
                                            <svg class="w-2.5 h-2.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                                            Skip
                                        </button>
                                    </div>
                                </div>` : ''}
                            `}
                        </div>
                    `;

                    const newOfficeName = filter.trim();
                    const locRow = officeContainer.querySelector('#add-office-location-row-edit');
                    const locInput = officeContainer.querySelector('#new-office-loc-input-edit');
                    const confirmBtn = officeContainer.querySelector('#confirm-office-with-loc-edit');
                    const addLocBtn = officeContainer.querySelector('#add-office-with-loc-btn-edit');
                    const skipBtn = officeContainer.querySelector('#skip-office-loc-btn-edit');

                    if (addLocBtn && locRow) {
                        addLocBtn.addEventListener('click', (e) => {
                            e.stopPropagation();
                            locRow.classList.remove('hidden');
                            locRow.classList.add('flex');
                            setTimeout(() => locInput?.focus(), 50);
                        });
                    }
                    if (confirmBtn && locInput) {
                        const doConfirm = (e) => {
                            e.stopPropagation();
                            const loc = locInput.value.trim();
                            officeInput.value = loc ? `${newOfficeName} - ${loc}` : newOfficeName;
                            officeContainer.classList.add('hidden');
                            officeInput.dispatchEvent(new Event('change'));
                        };
                        confirmBtn.addEventListener('click', doConfirm);
                        locInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') doConfirm(e); });
                        locInput.addEventListener('click', (e) => e.stopPropagation());
                    }
                    if (skipBtn) {
                        skipBtn.addEventListener('click', (e) => {
                            e.stopPropagation();
                            officeInput.value = newOfficeName;
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
                                officeInput.value = opt.dataset.name;
                                officeContainer.classList.add('hidden');
                                officeInput.dispatchEvent(new Event('change'));
                            }
                        });
                    });
                } else {
                    officeContainer.innerHTML = `
                        <div class="flex items-center justify-between px-3 py-2 border-b ${t.borderDivide} bg-slate-50/95 dark:bg-slate-900 sticky top-0 backdrop-blur-sm z-10 rounded-none">
                            <div class="flex items-center gap-2">
                                <div class="p-1 rounded-none bg-green-500/10 text-green-600">
                                    <svg class="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                                </div>
                                <div class="text-[0.4375rem] font-black uppercase tracking-widest ${t.textLabel} opacity-70">OFFICE LOCATION</div>
                            </div>
                            <button type="button" id="back-to-offices-edit" class="p-1.5 rounded-none bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 hover:bg-red-100 transition-all cursor-pointer shadow-sm active:scale-90 flex items-center justify-center">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"/></svg>
                            </button>
                        </div>
                        <div class="p-2 border-b ${t.borderDivide}">
                            <div class="relative group">
                                <div class="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none text-slate-400 group-focus-within:text-blue-500 transition-colors">
                                    <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                                </div>
                                <input type="text" id="location-search-edit" placeholder="Search in ${office.name}..." 
                                    class="w-full pl-8 pr-3 py-1.5 text-[0.5625rem] font-bold bg-slate-100/50 dark:bg-slate-800/50 border-transparent focus:border-blue-500 focus:ring-0 rounded-none transition-all"
                                    value="${filter.includes(' - ') ? filter.split(' - ')[1] : ''}">
                            </div>
                        </div>
                        <div id="loc-list-edit" class="max-h-64 overflow-y-auto scrollbar-hide p-1">
                            <div class="px-3 py-4 text-center text-[0.5625rem] font-bold ${t.textLabel} animate-pulse">Fetching...</div>
                        </div>
                    `;

                    const locList = officeContainer.querySelector('#loc-list-edit');
                    const search = officeContainer.querySelector('#location-search-edit');
                    const locCacheKey = `dole_locs_cache_${office.id}`;
                    let locations = [];
                    
                    // [SPEED-OPTIMIZATION] Try local cache first
                    const locCached = localStorage.getItem(locCacheKey);
                    if (locCached) {
                        try {
                            const { data, timestamp } = JSON.parse(locCached);
                            locations = data;
                            // If cache is fresh, don't even show "Fetching..."
                            if (Date.now() - timestamp < 60 * 60 * 1000) {
                                // Already have fresh data
                            }
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
                            renderLocs(search.value);
                        }
                    };

                    const renderLocs = (f = '') => {
                        const filtered = locations.filter(l => l.location.toLowerCase().includes(f.toLowerCase()));
                        const trimmed = f.trim();

                        if (filtered.length > 0) {
                            locList.innerHTML = filtered.map(l => `
                                <div class="location-option-edit group/loc px-3 py-1.5 text-[0.5625rem] font-bold ${t.textCourseOpt} ${t.courseHover} rounded-none cursor-pointer transition-all flex items-center gap-3 active:scale-[0.98] mb-0.5" data-location="${l.location}">
                                    <div class="w-1 h-1 rounded-none bg-slate-300 dark:bg-slate-600 group-hover/loc:bg-blue-500 transition-all"></div>
                                    <span class="option-text truncate">${l.location}</span>
                                </div>
                            `).join('');
                        } else if (locations.length === 0) {
                            locList.innerHTML = `<div class="px-3 py-4 text-center text-[0.5625rem] font-bold ${t.textLabel} animate-pulse">Fetching...</div>`;
                        } else {
                            locList.innerHTML = `
                                <div class="px-3 py-3 text-center text-[0.5625rem] font-bold ${t.textLabel} opacity-60">No matching locations.</div>
                                ${trimmed ? `
                                <div class="px-2 pb-2">
                                    <button type="button" id="add-new-location-edit" class="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-none bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800/50 text-[0.5625rem] font-black uppercase tracking-widest hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-all active:scale-[0.98] cursor-pointer">
                                        <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 4v16m8-8H4"/></svg>
                                        Add "${trimmed}" as location
                                    </button>
                                </div>` : ''}
                            `;
                            if (trimmed) {
                                locList.querySelector('#add-new-location-edit')?.addEventListener('click', () => {
                                    officeInput.value = `${office.name} - ${trimmed}`;
                                    officeContainer.classList.add('hidden');
                                    officeInput.dispatchEvent(new Event('change'));
                                });
                            }
                        }

                        locList.querySelectorAll('.location-option-edit').forEach(opt => {
                            opt.addEventListener('click', () => {
                                officeInput.value = `${office.name} - ${opt.dataset.location}`;
                                officeContainer.classList.add('hidden');
                                officeInput.dispatchEvent(new Event('change'));
                            });
                        });
                    };

                    renderLocs(search.value);
                    fetchFreshLocs(); // Always trigger a background sync
                    setTimeout(() => search.focus(), 50);
                    search.addEventListener('input', () => renderLocs(search.value));
                    search.addEventListener('click', e => e.stopPropagation());
                    officeContainer.querySelector('#back-to-offices-edit').addEventListener('click', e => {
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
                if (currentView === 'OFFICES') render('OFFICES', null, officeInput.value);
            });

            document.addEventListener('click', (e) => {
                if (!officeInput.contains(e.target) && !officeContainer.contains(e.target)) {
                    officeContainer.classList.add('hidden');
                }
            });
        };
        setupOfficeSelectorEdit();

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
                                    <span class="text-[0.625rem] font-bold text-gray-500 uppercase tracking-widest pointer-events-none">${c.id}</span>
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

            const submitBtn = drawerContainer.querySelector('#edit-drawer-submit-btn');
            const submitIcon = drawerContainer.querySelector('#edit-drawer-submit-icon');
            const submitText = drawerContainer.querySelector('#edit-drawer-submit-text');

            const resetSubmitState = () => {
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.classList.remove('opacity-75', 'cursor-not-allowed');
                }
                const curIcon = drawerContainer.querySelector('#edit-drawer-submit-icon');
                if (curIcon) {
                    curIcon.outerHTML = `<svg id="edit-drawer-submit-icon" class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/></svg>`;
                }
                if (submitText) submitText.textContent = 'Save Changes';
            };

            const showLoadingState = () => {
                if (submitBtn) {
                    submitBtn.disabled = true;
                    submitBtn.classList.add('opacity-75', 'cursor-not-allowed');
                }
                const curIcon = drawerContainer.querySelector('#edit-drawer-submit-icon');
                if (curIcon) {
                    curIcon.outerHTML = `<svg id="edit-drawer-submit-icon" class="animate-spin w-4 h-4 text-white shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>`;
                }
                if (submitText) submitText.textContent = 'Saving Changes...';
            };

            const { isoBirthday, hasBirthdayInput } = syncBirthdayFromParts(true);
            if (hasBirthdayInput && !isoBirthday) {
                birthMonthInput?.focus();
                Swal.fire({
                    toast: true,
                    position: 'top-end',
                    icon: 'error',
                    title: 'Enter a valid birthday',
                    text: 'Complete the MM, DD, and YYYY fields.',
                    showConfirmButton: false,
                    timer: 3500
                });
                return;
            }

            // Immediately show loading spinner on SVG upon click
            showLoadingState();

            const normalizeBackendDate = (value) => {
                const raw = String(value || '').trim();
                if (!raw) return '';
                const isoMatch = raw.match(/^(\d{4})-(\d{2})-(\d{2})/);
                if (isoMatch) return `${isoMatch[1]}-${isoMatch[2]}-${isoMatch[3]}`;
                const parsed = window.__parseFormattedDate?.(raw);
                if (!parsed) return raw;
                const year = parsed.getFullYear();
                const month = String(parsed.getMonth() + 1).padStart(2, '0');
                const day = String(parsed.getDate()).padStart(2, '0');
                return `${year}-${month}-${day}`;
            };

            const formData = new FormData(form);
            const beneficiaryData = {};
            formData.forEach((value, key) => {
                beneficiaryData[key] = ['birthday', 'startDate', 'endDate'].includes(key)
                    ? normalizeBackendDate(value)
                    : value;
            });
            beneficiaryData.birthday = isoBirthday;

            beneficiaryData.id = data.id;
            beneficiaryData.gip_id = beneficiaryData.gip_id || data.id;

            if (window.addBeneficiaryData) {
                (async () => {
                    try {
                        const success = await window.addBeneficiaryData(beneficiaryData, true, false);
                        if (success) {
                            // Let the edit drawer finish closing before the success feedback appears.
                            hideDrawerSafely();
                            await new Promise((resolve) => setTimeout(resolve, 450));

                            await Swal.fire({
                                toast: true,
                                position: 'bottom-end',
                                icon: 'success',
                                title: 'RECORD UPDATED',
                                showConfirmButton: false,
                                timer: 3000,
                                timerProgressBar: true
                            });

                            // Rehydrate only after the toast closes so the refreshed drawer returns smoothly.
                            if (window.viewBeneficiary) {
                                await window.viewBeneficiary({ ...beneficiaryData, id: data.id, gip_id: data.id }, 0);
                            }
                        } else {
                            resetSubmitState();
                        }
                    } catch (err) {
                        console.error('Save beneficiary data failed:', err);
                        resetSubmitState();
                    }
                })();
            } else {
                resetSubmitState();
            }
        });
    });
}
// END: showEditBeneficiaryDrawer - Manages GIP beneficiary edit form submission, SVG loading animation, and rehydration
