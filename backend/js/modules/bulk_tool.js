import { isDarkMode } from './darkmode.js';
import { showAddDataModal } from './modal.js';
import { getBasePath } from './auth.js';
import Swal from 'sweetalert2';

export const BulkApp = {
    queue: [],
    currentIndex: 0,
    isActive: false,
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
                        <p class="text-[10px] ${t.textSubtitle} font-bold mt-1 uppercase tracking-widest pl-11">Upload a CSV file to automate data entry.</p>
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

                label.addEventListener('drop', (e) => {
                    const dt = e.dataTransfer;
                    const file = dt.files[0];
                    if (file) {
                        this.handleFile(file);
                    }
                }, false);

                fileInput.addEventListener('change', (e) => {
                    const file = e.target.files[0];
                    if (file) {
                        this.handleFile(file);
                    }
                });
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

    parseCSV(text) {
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
            if (cols.length >= 10) {

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
            this.isActive = true;
            this.currentIndex = 0;
            Swal.close();
            this.processNext();
        } else {
            Swal.fire('Error', 'No valid beneficiary data found. Please ensure your CSV formatting matches the requirements.', 'error');
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

            // DUPLICATE DETECTION LOGIC
            try {
                const checkResponse = await fetch(`${getBasePath()}api/check_duplicate.php`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ name: data.name })
                });
                const checkResult = await checkResponse.json();

                if (checkResult.success && checkResult.exists) {
                    console.warn(`%c[Bulk Add] SKIPPED: ${data.name} already exists in database.`, "color: #ff9800; font-weight: bold;");
                    this.currentIndex++;
                    return this.processNext(); // Auto-skip to next
                }
            } catch (error) {
                console.error("Duplicate check failed:", error);
                // Continue anyway if check fails, to not block the process
            }

            data._isBulk = true;
            data._bulkCurrent = this.currentIndex + 1;
            data._bulkTotal = this.queue.length;

            showAddDataModal(data);
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
            // Wait for 3.5 seconds to let the Success toast finish (set to 3000ms in modal.js)
            // This provides a smoother transition between records.
            setTimeout(() => {
                this.processNext();
            }, 3500); 
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