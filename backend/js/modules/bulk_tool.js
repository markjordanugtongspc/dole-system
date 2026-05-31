import { isDarkMode } from './darkmode.js';
import { showAddDataModal } from './modal.js';
import { getBasePath } from './auth.js';
import Swal from 'sweetalert2';
import { apiGet } from './ajax-manager.js';

export const BulkApp = {
    queue: [],
    currentIndex: 0,
    isActive: false,
    isAutoSave: false,
    lastInteractionTime: 0,

    init() {
        this.showUploadModal();
    },

    showUploadModal() {
        const dk = isDarkMode();
        const t = {
            bgCard: dk ? 'bg-slate-900/40' : 'bg-gray-50/40',
            borderCard: dk ? 'border-slate-800' : 'border-gray-100',
            textHeading: dk ? 'text-green-500' : 'text-[#2e7d32]',
            textSubtitle: dk ? 'text-slate-500' : 'text-gray-400 dark:text-gray-300',
            bgUpload: dk ? 'bg-slate-800' : 'bg-white',
            borderUpload: dk ? 'border-slate-700' : 'border-gray-200',
            textUpload: dk ? 'text-slate-400' : 'text-gray-500',
            hoverUpload: dk ? 'hover:bg-slate-800/80 hover:border-blue-500' : 'hover:bg-blue-50/50 hover:border-royal-blue',
            iconText: dk ? 'text-green-400' : 'text-[#2e7d32]',
            iconBg: dk ? 'bg-green-900/20' : 'bg-[#e8f5e9]',
            iconBorder: dk ? 'border-green-800/30' : 'border-[#c8e6c9]'
        };

        const content = `
            <div class="font-montserrat text-left px-2 sm:px-4 py-2">
                <div class="mb-6 flex items-center justify-between">
                    <div>
                        <h3 class="text-xl font-black ${t.textHeading} flex items-center gap-2.5">
                            <div class="p-2 ${t.iconBg} rounded-lg ${t.iconText} border ${t.iconBorder} shadow-sm">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 4v16m8-8H4"></path></svg>
                            </div>
                            Bulk Add Beneficiaries
                        </h3>
                        <p class="text-[0.625rem] ${t.textSubtitle} font-bold mt-1 uppercase tracking-widest pl-11">Upload a CSV file to automate data entry.</p>
                    </div>
                </div>

                <div class="${t.bgCard} rounded-xl p-6 border ${t.borderCard} shadow-sm mb-4">
                    <label for="csv-upload" class="flex flex-col items-center justify-center w-full h-48 ${t.bgUpload} border-2 border-dashed ${t.borderUpload} rounded-lg cursor-pointer ${t.hoverUpload} transition-all duration-300 group">
                        <div class="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg class="w-10 h-10 mb-3 text-blue-500 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                            <p class="mb-2 text-sm font-bold ${t.textUpload}"><span class="font-black text-blue-500">Click to upload</span> or drag and drop</p>
                            <p class="text-xs ${t.textSubtitle} uppercase tracking-widest font-bold">.CSV format only</p>
                        </div>
                        <input id="csv-upload" type="file" class="hidden" accept=".csv, .txt" />
                    </label>
                </div>
                
                <div class="flex items-center gap-3 px-2 py-3 bg-blue-50/50 dark:bg-blue-900/10 rounded-xl border border-blue-100 dark:border-blue-800/30 mb-2">
                    <label class="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" id="auto-save-toggle" class="sr-only peer">
                        <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    </label>
                    <div>
                        <span class="text-[0.6875rem] font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest block leading-tight">Auto-Save (Fast Mode)</span>
                        <span class="text-[0.5625rem] font-bold text-gray-400 uppercase tracking-tighter">Skip manual confirmations for every record</span>
                    </div>
                </div>
            </div>
        `;

        Swal.fire({
            html: content,
            width: '600px',
            showConfirmButton: false,
            showCloseButton: true,
            customClass: {
                container: 'font-montserrat',
                popup: 'rounded-2xl ldn-modal-popup'
            },
            didOpen: (popup) => {
                const fileInput = popup.querySelector('#csv-upload');
                const label = popup.querySelector('label[for="csv-upload"]');

                ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
                    label.addEventListener(eventName, preventDefaults, false);
                });

                function preventDefaults(e) {
                    e.preventDefault();
                    e.stopPropagation();
                }

                ['dragenter', 'dragover'].forEach(eventName => {
                    label.addEventListener(eventName, () => {
                        label.classList.add('border-blue-500', 'bg-blue-50/50');
                        if (dk) label.classList.add('dark:bg-slate-800/80');
                    }, false);
                });

                ['dragleave', 'drop'].forEach(eventName => {
                    label.addEventListener(eventName, () => {
                        label.classList.remove('border-blue-500', 'bg-blue-50/50');
                        if (dk) label.classList.remove('dark:bg-slate-800/80');
                    }, false);
                });

                fileInput.addEventListener('change', (e) => {
                    const file = e.target.files[0];
                    if (file) {
                        const autoSaveToggle = popup.querySelector('#auto-save-toggle');
                        this.isAutoSave = autoSaveToggle ? autoSaveToggle.checked : false;
                        this.handleFile(file);
                    }
                });

                label.addEventListener('drop', (e) => {
                    const dt = e.dataTransfer;
                    const file = dt.files[0];
                    if (file) {
                        const autoSaveToggle = popup.querySelector('#auto-save-toggle');
                        this.isAutoSave = autoSaveToggle ? autoSaveToggle.checked : false;
                        this.handleFile(file);
                    }
                }, false);
            }
        });
    },

    handleFile(file) {
        if (!file.name.toLowerCase().endsWith('.csv') && !file.name.toLowerCase().endsWith('.txt')) {
            Swal.fire('Invalid File', 'Please upload a valid .csv or .txt file.', 'error');
            return;
        }

        const reader = new FileReader();
        reader.onload = (e) => {
            const text = e.target.result;
            this.parseCSV(text);
        };
        reader.readAsText(file);
    },

    async parseCSV(text) {
        let rows = [];
        let currentRow = '';
        let insideQuotes = false;

        for (let i = 0; i < text.length; i++) {
            let char = text[i];
            if (char === '"') {
                insideQuotes = !insideQuotes;
            }
            if (!insideQuotes && (char === '\n' || char === '\r')) {
                if (char === '\r' && text[i + 1] === '\n') {
                    i++;
                }
                if (currentRow.trim() !== '') {
                    rows.push(currentRow);
                }
                currentRow = '';
            } else {
                currentRow += char;
            }
        }
        if (currentRow.trim() !== '') rows.push(currentRow);

        this.queue = [];

        for (let i = 0; i < rows.length; i++) {
            let row = rows[i].trim();
            if (!row) continue;

            let cols = [];
            let cur = '';
            let inQ = false;
            for (let j = 0; j < row.length; j++) {
                let c = row[j];
                if (c === '"') {
                    inQ = !inQ;
                } else if (c === ',' && !inQ) {
                    cols.push(cur.replace(/(^"|"$)/g, '').trim());
                    cur = '';
                } else {
                    cur += c;
                }
            }
            cols.push(cur.replace(/(^"|"$)/g, '').trim());

            // UPDATED MAPPING BASED ON PROVIDED CSV
            // index 0: IGNORE (e.g. 2025-02-0190 or empty)
            // index 1: Full Name
            // index 2: Address
            // index 3: Age
            // index 4: Gender
            // index 5: Education
            // index 6: Assigned Office
            // index 7: Nature of Work
            // index 8: Start Date
            // index 9: End Date

            // Proceed only if there are enough columns up to the End Date (Index 9)
            // Relaxed check: As long as name exists, we proceed
            if (cols.length >= 2) {

                const age = cols[3];
                // Strict validation: Skip row if Age is not a valid number (This ignores category headers like the first row)
                if (!age || isNaN(parseInt(age))) continue;

                const name = cols[1];
                // Skip if name is completely empty or just header text
                if (!name || name.toLowerCase() === 'name' || name.toLowerCase() === 'full name') continue;

                const address = cols[2];

                let genderRaw = cols[4] ? cols[4].toUpperCase().trim() : '';
                let gender = '';
                if (genderRaw === 'F' || genderRaw.includes('FEMALE')) gender = 'Female';
                if (genderRaw === 'M' || genderRaw.includes('MALE')) gender = 'Male';

                const education = cols[5];
                const office = cols[6];
                const designation = cols[7];
                const startDate = this.formatDate(cols[8]);
                const endDate = this.formatDate(cols[9]);

                this.queue.push({
                    name: name,
                    address: address,
                    age: age,
                    gender: gender,
                    education: education,
                    startDate: startDate,
                    endDate: endDate,
                    office: office,
                    designation: designation
                });
            }
        }

        if (this.queue.length > 0) {
            // BULK DUPLICATE CHECK
            try {
                Swal.fire({
                    title: 'Checking duplicates...',
                    html: '<p class="text-sm">Please wait while we cross-reference your data.</p>',
                    allowOutsideClick: false,
                    didOpen: () => { Swal.showLoading(); }
                });
                
                const names = this.queue.map(item => item.name);
                let userId = null;
                try {
                    userId = JSON.parse(localStorage.getItem('user') || '{}')?.id || null;
                } catch (e) {
                    userId = null;
                }
                const checkResponse = await fetch(`${getBasePath()}api/check_duplicate.php`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        ...(userId ? { 'X-User-Id': String(userId) } : {})
                    },
                    body: JSON.stringify({ names: names, user_id: userId })
                });
                const checkResult = await checkResponse.json();
                
                if (checkResult.success && checkResult.duplicates && checkResult.duplicates.length > 0) {
                    const duplicateSet = new Set(checkResult.duplicates.map(n => n.toLowerCase().trim()));
                    const originalLength = this.queue.length;
                    
                    this.queue = this.queue.filter(item => {
                        const isDup = duplicateSet.has(item.name.toLowerCase().trim());
                        if (isDup) console.warn(`%c[Bulk Add] SKIPPED: ${item.name} already exists in database.`, "color: #ff9800; font-weight: bold;");
                        return !isDup;
                    });
                    
                    console.log(`[Bulk Add] Removed ${originalLength - this.queue.length} duplicates ahead of time.`);
                }
            } catch (error) {
                console.error("Bulk duplicate check failed:", error);
            }

            if (this.queue.length === 0) {
                Swal.fire('All Skipped', 'All beneficiaries in the CSV already exist in the database.', 'info');
                return;
            }

            this.isActive = true;
            this.currentIndex = 0;
            Swal.close();
            this.processNext();
        } else {
            Swal.fire('Error', 'No valid beneficiary data found. Please ensure your CSV formatting matches the requirements.', 'error');
        }
    },

    showProgressModal() {
        const dk = isDarkMode();
        const progress = Math.round((this.currentIndex / this.queue.length) * 100);
        
        const html = `
            <div class="p-2 text-left font-montserrat">
                <div class="flex items-center justify-between mb-4">
                    <h3 class="text-lg font-black text-blue-600 dark:text-blue-400 uppercase italic">Processing Data...</h3>
                    <span class="text-[0.625rem] font-black text-gray-400 dark:text-gray-500 uppercase tracking-[0.2em]">${this.currentIndex} / ${this.queue.length}</span>
                </div>
                
                <div class="w-full bg-gray-100 dark:bg-slate-800 rounded-full h-4 mb-6 p-1 border border-gray-200 dark:border-slate-700">
                    <div id="bulk-progress-bar" class="bg-blue-600 h-full rounded-full transition-all duration-300 shadow-sm shadow-blue-500/20" style="width: ${progress}%"></div>
                </div>

                <div class="flex flex-col gap-2">
                    <p class="text-xs font-bold text-gray-600 dark:text-slate-300">Currently saving: <span class="text-blue-500" id="bulk-current-name">${this.queue[this.currentIndex]?.name || '...'}</span></p>
                    <p class="text-[0.625rem] text-gray-400 font-medium">Please do not close the window until complete.</p>
                </div>

                <div class="mt-6 pt-4 border-t border-gray-50 dark:border-slate-800 flex justify-end">
                    <button id="stop-bulk-btn" class="px-5 py-2.5 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-[0.625rem] font-black uppercase tracking-widest rounded-xl border border-red-100 dark:border-red-800/40 hover:bg-red-600 hover:text-white transition-all cursor-pointer">
                        Stop Processing
                    </button>
                </div>
            </div>
        `;

        if (Swal.isVisible() && Swal.getPopup().querySelector('#bulk-progress-bar')) {
            // Just update the existing modal
            const bar = document.getElementById('bulk-progress-bar');
            const counter = Swal.getPopup().querySelector('span.text-\\[10px\\]');
            const name = document.getElementById('bulk-current-name');
            if (bar) bar.style.width = `${progress}%`;
            if (counter) counter.textContent = `${this.currentIndex} / ${this.queue.length}`;
            if (name) name.textContent = this.queue[this.currentIndex]?.name || '...';
        } else {
            // Create new progress modal
            Swal.fire({
                html: html,
                showConfirmButton: false,
                allowOutsideClick: false,
                allowEscapeKey: false,
                width: '450px',
                customClass: {
                    container: 'font-montserrat',
                    popup: 'rounded-2xl shadow-2xl border border-gray-100 dark:border-slate-800'
                },
                didOpen: (popup) => {
                    popup.querySelector('#stop-bulk-btn').onclick = () => this.onCancel();
                }
            });
        }
    },

    formatDate(dateStr) {
        if (!dateStr || dateStr.trim() === '') return '';
        const d = new Date(dateStr);
        if (isNaN(d.getTime())) {
            const parts = dateStr.split('/');
            if (parts.length === 3) {
                return `${parts[2]}-${parts[1].padStart(2, '0')}-${parts[0].padStart(2, '0')}`;
            }
            return '';
        }
        const yyyy = d.getFullYear();
        const mm = String(d.getMonth() + 1).padStart(2, '0');
        const dd = String(d.getDate()).padStart(2, '0');
        return `${yyyy}-${mm}-${dd}`;
    },

    async processNext() {
        if (this.currentIndex < this.queue.length) {
            const data = this.queue[this.currentIndex];

            data._isBulk = true;
            data._bulkCurrent = this.currentIndex + 1;
            data._bulkTotal = this.queue.length;

            if (this.isAutoSave) {
                this.showProgressModal();
                // AUTO-SAVE MODE: Directly call the API without showing modal
                if (window.addBeneficiaryData) {
                    (async () => {
                        // Ensure ROX ID + Series No are generated before saving (no temp IDs).
                        try {
                            const year = data.startDate ? new Date(data.startDate).getFullYear() : new Date().getFullYear();
                            const [idRes, seriesRes] = await Promise.all([
                                apiGet(`api/beneficiaries.php?next_id&year=${year}`),
                                apiGet(`api/beneficiaries.php?next_series_no&year=${year}`),
                            ]);
                            if (idRes.success && idRes.data?.success && idRes.data?.nextId) {
                                data.gip_id = idRes.data.nextId;
                                data.id = null; // force POST branch in ldngip.js
                            }
                            if (seriesRes.success && seriesRes.data?.success && seriesRes.data?.nextSeries) {
                                data.seriesNo = seriesRes.data.nextSeries;
                            }
                        } catch (e) {
                            console.warn('[Bulk Add] Identifier fetch failed, continuing:', e?.message || e);
                        }

                        const success = await window.addBeneficiaryData(data);
                        if (this.isActive) { // Check if still active (not cancelled during fetch)
                            if (success) {
                                this.onSaveSuccess();
                            } else {
                                // If it fails, show the modal so user can fix issues
                                showAddDataModal(data);
                            }
                        }
                    })();
                } else {
                    showAddDataModal(data);
                }
            } else {
                // GUIDED MODE: Show the modal for manual review
                showAddDataModal(data);
            }
        } else {
            this.isActive = false;
            this.lastInteractionTime = Date.now();
            Swal.fire({
                icon: 'success',
                title: 'Bulk Add Complete!',
                text: `Successfully processed ${this.queue.length} beneficiaries.`,
                confirmButtonColor: '#2e7d32'
            });
        }
    },

    onSaveSuccess() {
        if (this.isActive) {
            this.currentIndex++;
            // If in AutoSave, reduce delay to 100ms. If Guided, keep 1500ms for review.
            const delay = this.isAutoSave ? 100 : 1500; 
            setTimeout(() => {
                this.processNext();
            }, delay); 
        }
    },

    onCancel() {
        if (this.isActive) {
            this.isActive = false;
            this.lastInteractionTime = Date.now();
            this.queue = [];
            this.currentIndex = 0;
            Swal.fire({
                icon: 'info',
                title: 'Bulk Add Cancelled',
                text: 'Stopped processing the remaining beneficiaries and cleared the queue.',
                confirmButtonColor: '#3085d6'
            }).then(() => {
                // Re-open uploader as the user implied they want to see the bulk modal again
                this.showUploadModal();
            });
        }
    }
};

window.BulkApp = BulkApp;