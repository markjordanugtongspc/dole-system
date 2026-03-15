import { isDarkMode } from './darkmode.js';
import { getBasePath } from './auth.js';
import Swal from 'sweetalert2';
import { COMMON_COURSES, COMMON_NATURE_OF_WORK } from './modal.js';

export function showEditBeneficiaryDrawer(data) {
    const dk = isDarkMode();
    const inputClass = `w-full bg-transparent border-b-2 ${dk ? 'border-slate-700 text-white focus:border-brand placeholder-slate-600' : 'border-gray-200 text-gray-900 focus:border-brand placeholder-gray-300'} px-1 py-1 text-sm font-black outline-none transition-all focus:ring-0`;
    const headingInputClass = `w-full bg-transparent border-none ${dk ? 'text-white' : 'text-royal-blue'} px-0 py-0 text-xl sm:text-2xl font-black leading-tight tracking-tight focus:ring-0 outline-none placeholder-gray-300 resize-none overflow-hidden`;

    function calculateAge(birthday) {
        if (!birthday) return '';
        const birthDate = new Date(birthday);
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) age--;
        return age >= 0 ? age : 0;
    }

    const drawerHtml = `
<form id="edit-beneficiary-drawer-form" class="h-full flex flex-col pt-4 font-montserrat relative pb-20">
    <input type="hidden" name="id" value="${data.id}">
    <input type="hidden" name="gip_id" value="${data.id}">
    
    <div class="flex flex-col relative w-full border-b border-default pb-4 mb-5 pe-12">
        <textarea name="name" class="${headingInputClass}" rows="1" placeholder="Beneficiary Name" required oninput="this.style.height = ''; this.style.height = this.scrollHeight + 'px'">${data.name || ''}</textarea>
        
        <button type="button" id="close-edit-drawer-btn" class="text-gray-400 bg-transparent hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-slate-800 dark:hover:text-white rounded-lg w-9 h-9 absolute top-0 right-2 flex items-center justify-center cursor-pointer transition-colors z-50">
           <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/></svg>
        </button>
    </div>

    <div class="grid grid-cols-2 gap-4 w-full">
        <div class="flex flex-col gap-1 text-left">
            <span class="text-[10px] text-gray-500 font-bold uppercase tracking-widest pl-1">ID No.</span>
            <input type="text" name="seriesNo" value="${data.seriesNo || ''}" class="bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-white text-[10px] sm:text-[11px] font-black px-2.5 py-1.5 rounded-lg border border-gray-200 dark:border-slate-700 uppercase tracking-widest shadow-sm outline-none focus:ring-2 focus:ring-brand w-full" placeholder="2025-00-000">
        </div>
        <div class="flex flex-col gap-1 text-left overflow-hidden">
             <span class="text-[10px] text-gray-500 font-bold uppercase tracking-widest pl-1">REMARKS</span>
             <select name="remarks" class="bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-white text-[10px] sm:text-[11px] font-black px-2.5 py-1.5 rounded-lg border border-gray-200 dark:border-slate-700 uppercase tracking-widest shadow-sm outline-none focus:ring-2 focus:ring-brand w-full cursor-pointer">
                 <option value="ONGOING" ${data.remarks === 'ONGOING' ? 'selected' : ''}>ONGOING</option>
                 <option value="EXPIRED" ${data.remarks === 'EXPIRED' ? 'selected' : ''}>EXPIRED</option>
                 <option value="RESIGNED" ${data.remarks === 'RESIGNED' ? 'selected' : ''}>RESIGNED</option>
                 <option value="ABSORBED" ${data.remarks === 'ABSORBED' ? 'selected' : ''}>ABSORBED</option>
             </select>
        </div>
    </div>

    <div class="flex flex-col gap-1 text-left mt-4 mb-4">
        <span class="text-[10px] text-gray-500 font-bold uppercase tracking-widest pl-1">ASSIGNED OFFICE</span>
        <select name="office" class="bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 text-[10px] sm:text-[11px] font-black px-2.5 py-2.5 rounded-lg border border-indigo-200 dark:border-indigo-800/60 uppercase tracking-widest shadow-sm outline-none focus:ring-2 focus:ring-brand w-full cursor-pointer">
            <option value="DOLE Field Office" ${data.office === 'DOLE Field Office' ? 'selected' : ''}>DOLE Field Office</option>
            <option value="LGU" ${data.office === 'LGU' ? 'selected' : ''}>LGU</option>
            <option value="DEPED" ${data.office === 'DEPED' ? 'selected' : ''}>DEPED</option>
            <option value="DICT" ${data.office === 'DICT' ? 'selected' : ''}>DICT</option>
            <option value="PCA" ${data.office === 'PCA' ? 'selected' : ''}>PCA</option>
        </select>
    </div>

    <h4 class="text-sm font-bold text-heading mt-6 mb-4 pb-2 border-b border-default whitespace-nowrap">Personal Profile</h4>
    
    <div class="flex flex-col gap-4 text-sm mt-3 px-1">
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
            <input type="date" name="birthday" id="edit-bday-input" value="${data.birthday || ''}" class="${inputClass} text-right uppercase max-w-[150px]">
        </div>
        
        <div class="flex justify-between items-center group">
            <span class="text-gray-500 font-medium whitespace-nowrap mr-4 shrink-0">Age</span>
            <input type="text" name="age" id="edit-age-display" value="${data.age || calculateAge(data.birthday) || ''}" class="${inputClass} text-right max-w-[80px]" readonly placeholder="Auto">
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
            <input type="text" name="education" value="${data.education || ''}" list="course-suggestions" class="w-full bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-gray-900 dark:text-white px-3 py-2.5 text-xs font-black outline-none focus:ring-2 focus:ring-brand rounded-lg shadow-sm" placeholder="Course/Level...">
            <datalist id="course-suggestions">
                ${COMMON_COURSES.map(c => `<option value="${c.name}"></option>`).join('')}
            </datalist>
        </div>
    </div>

    <!-- Contract & Work Info Tab -->
    <h4 class="text-sm font-bold text-heading mt-8 pb-2 border-b border-default whitespace-nowrap">Contract & Work Details</h4>
    
    <div class="flex flex-col gap-4 text-sm mt-4 px-1">
        <div class="grid grid-cols-2 gap-3 mb-2">
            <div class="flex flex-col gap-1">
                <span class="text-gray-500 font-medium text-[10px] uppercase font-bold tracking-widest pl-1">Start Date <span class="text-red-500">*</span></span>
                <input type="date" name="startDate" value="${data.startDate || ''}" required class="w-full bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-gray-900 dark:text-white px-3 py-2.5 text-xs font-black outline-none focus:ring-2 focus:ring-brand rounded-lg shadow-sm">
            </div>
            <div class="flex flex-col gap-1">
                <span class="text-gray-500 font-medium text-[10px] uppercase font-bold tracking-widest pl-1">End Date <span class="text-red-500">*</span></span>
                <input type="date" name="endDate" value="${data.endDate || ''}" required class="w-full bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-gray-900 dark:text-white px-3 py-2.5 text-xs font-black outline-none focus:ring-2 focus:ring-brand rounded-lg shadow-sm">
            </div>
        </div>
        
        <div class="flex flex-col gap-2">
            <span class="text-gray-500 font-medium text-[10px] uppercase font-bold tracking-widest pl-1">Designation / Role</span>
            <input type="text" name="designation" value="${data.designation || ''}" list="work-suggestions" class="w-full bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-gray-900 dark:text-white px-3 py-2.5 text-xs font-black outline-none focus:ring-2 focus:ring-brand rounded-lg shadow-sm" placeholder="Nature of Work...">
            <datalist id="work-suggestions">
                ${COMMON_NATURE_OF_WORK.map(w => `<option value="${w}"></option>`).join('')}
            </datalist>
        </div>
        
        <div class="flex flex-col gap-2 mt-2 pb-6">
            <span class="text-gray-500 font-medium text-[10px] uppercase font-bold tracking-widest pl-1">Replacement History</span>
            <textarea name="replacement" rows="2" class="w-full bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-gray-900 dark:text-white px-3 py-2.5 text-xs font-black outline-none focus:ring-2 focus:ring-brand rounded-lg shadow-sm placeholder-gray-400" placeholder="History...">${data.replacement || ''}</textarea>
        </div>
    </div>
</form>

<div class="absolute bottom-0 left-0 right-0 w-full p-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-gray-100 dark:border-slate-800 flex justify-end gap-3 z-[60] shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
    <button type="button" id="edit-drawer-cancel-btn" class="px-6 py-3 rounded-xl bg-gray-100 text-gray-600 font-black text-[10px] sm:text-xs uppercase tracking-widest hover:bg-gray-200 transition-all border border-transparent hover:border-gray-300">Cancel</button>
    <button type="submit" form="edit-beneficiary-drawer-form" class="px-6 py-3 rounded-xl bg-brand text-white font-black text-[10px] sm:text-xs uppercase tracking-widest hover:bg-brand-strong transition-all shadow-lg hover:shadow-brand/40 flex items-center justify-center gap-2">
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
</style>
    `;

    let drawerContainer = document.getElementById('edit-drawer-container');
    if(drawerContainer) {
        drawerContainer.remove();
    }
    
    drawerContainer = document.createElement('div');
    drawerContainer.id = 'edit-drawer-container';
    drawerContainer.className = 'fixed top-0 right-0 z-[100] h-screen p-4 sm:p-6 overflow-y-auto transition-transform duration-500 ease-in-out translate-x-full bg-white dark:bg-slate-900 w-full sm:w-[550px] lg:w-[650px] shadow-2xl pb-0';
    drawerContainer.setAttribute('tabindex', '-1');
    drawerContainer.innerHTML = drawerHtml;
    
    document.body.appendChild(drawerContainer);

    // Initial resize for textarea
    setTimeout(() => {
        const ta = drawerContainer.querySelector('textarea[name="name"]');
        if (ta) {
            ta.style.height = 'auto';
            ta.style.height = ta.scrollHeight + 'px';
        }
    }, 10);

    import('flowbite').then(({ Drawer }) => {
        const drawer = new Drawer(drawerContainer, {
            placement: 'right',
            backdrop: true,
            bodyScrolling: false,
            backdropClasses: 'bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-50',
            onHide: () => {
                setTimeout(() => { if (drawerContainer.parentNode) drawerContainer.remove(); }, 300);
            }
        });
        drawer.show();

        drawerContainer.querySelector('#close-edit-drawer-btn').addEventListener('click', () => drawer.hide());
        drawerContainer.querySelector('#edit-drawer-cancel-btn').addEventListener('click', () => drawer.hide());

        const bdayInput = drawerContainer.querySelector('#edit-bday-input');
        const ageDisplay = drawerContainer.querySelector('#edit-age-display');
        if (bdayInput && ageDisplay) {
            bdayInput.addEventListener('change', (e) => {
                if (e.target.value) {
                    ageDisplay.value = calculateAge(e.target.value);
                }
            });
        }

        const form = drawerContainer.querySelector('#edit-beneficiary-drawer-form');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(form);
            const beneficiaryData = {};
            formData.forEach((v, k) => beneficiaryData[k] = v);

            beneficiaryData.id = data.id;
            // Original modal checks form input for gip_id
            beneficiaryData.gip_id = data.id;

            if (window.addBeneficiaryData) {
                (async () => {
                    const success = await window.addBeneficiaryData(beneficiaryData, true, false);
                    if (success) {
                        drawer.hide();
                        // Close info drawer too if open
                        const infoDrawerBtn = document.querySelector('#close-drawer-btn');
                        if (infoDrawerBtn) infoDrawerBtn.click();
                        
                        Swal.fire({ toast: true, position: 'top-end', icon: 'success', title: 'Record Updated', showConfirmButton: false, timer: 3000 });
                    }
                })();
            }
        });
    });
}
