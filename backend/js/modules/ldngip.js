import { getBasePath } from './auth.js';
import { createNotification } from './notifications.js';
import Swal from 'sweetalert2';

/**
 * LDN Handling Module
 * Handles data fetching from backend API, rendering, and sorting for the LDN page
 */

// Beneficiaries data loaded from database
let beneficiaries = [];
/**
 * Load beneficiaries from backend API
 */
async function loadBeneficiaries() {
    try {
        const response = await fetch(`${getBasePath()}api/beneficiaries.php`);
        const data = await response.json();

        if (data.success) {
            beneficiaries = data.beneficiaries || [];
            renderTable();
        } else {
            console.error('Failed to load beneficiaries:', data.error);
            beneficiaries = [];
            renderTable();
        }
    } catch (error) {
        console.error('Error fetching beneficiaries:', error);
        beneficiaries = [];
        renderTable();
    }
}

export function initLDNPage() {
    loadBeneficiaries(); // Load from database
    initLDNHeader();
    initSearch();
}

export function renderTable(dataToRender = beneficiaries) {
    const tbody = document.getElementById('beneficiary-table-body');
    if (!tbody) return;

    if (dataToRender.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="7" class="px-6 py-10 text-center text-gray-400 font-medium">
                    <div class="flex flex-col items-center gap-2">
                        <svg class="w-10 h-10 opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <span>No beneficiaries found matching your search.</span>
                    </div>
                </td>
            </tr>
        `;
        return;
    }

    tbody.innerHTML = dataToRender.map(data => `
        <tr class="bg-blue-50 border-b border-blue-100 hover:bg-blue-100 transition-colors group cursor-pointer"
            onclick='viewBeneficiary(${JSON.stringify(data)})'>
            <th scope="row" class="px-4 py-3 font-medium text-heading whitespace-nowrap font-mono text-xs">
                ${data.id}
            </th>
            <td class="px-4 py-3 font-bold text-royal-blue">
                ${data.name}
            </td>
            <td class="px-4 py-3">
                <span class="${getOfficeClass(data.office)} text-xs font-bold px-2.5 py-0.5 rounded">
                    ${data.office}
                </span>
            </td>
            <td class="px-4 py-3 whitespace-nowrap text-center">
                <span class="text-[11px] font-black text-royal-blue uppercase tracking-tight">${data.startDateFormatted || data.startDate || 'N/A'}</span>
            </td>
            <td class="px-4 py-3 whitespace-nowrap text-center">
                <span class="text-[11px] font-black text-philippine-red uppercase tracking-tight">${data.endDateFormatted || data.endDate || 'N/A'}</span>
            </td>
            <td class="px-4 py-3">
                <span class="${getStatusClass(data.remarks)} text-xs font-bold px-2.5 py-0.5 rounded uppercase border">
                    ${data.remarks}
                </span>
            </td>
            <td class="px-4 py-3 flex gap-2">
                <button type="button"
                    class="font-medium text-royal-blue hover:scale-110 transition-transform p-1 cursor-pointer"
                    title="Edit Details" onclick='event.stopPropagation(); editBeneficiary(${JSON.stringify(data)})'>
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z">
                        </path>
                    </svg>
                </button>
                <button type="button"
                    class="font-medium text-philippine-red hover:scale-110 transition-transform p-1 cursor-pointer"
                    title="Archive" onclick="event.stopPropagation(); archiveRecord('${data.id}')">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16">
                        </path>
                    </svg>
                </button>
            </td>
        </tr>
    `).join('');
}

function getOfficeClass(office) {
    if (office.includes('DOLE')) return 'bg-blue-100 text-blue-700 border border-blue-200';
    if (office.includes('DepEd')) return 'bg-orange-100 text-orange-700 border border-orange-200';
    if (office.includes('LGU')) return 'bg-purple-100 text-purple-700 border border-purple-200';
    if (office.includes('DICT')) return 'bg-cyan-100 text-cyan-700 border border-cyan-200';
    return 'bg-gray-100 text-gray-700 border border-gray-200';
}

function getStatusClass(status) {
    if (!status) return 'bg-gray-100 text-gray-600 border-gray-200';
    const s = status.toUpperCase();
    if (s === 'ONGOING') return 'bg-green-100 text-green-700 border-green-200';
    if (s === 'EXPIRED') return 'bg-red-100 text-red-700 border-red-200';
    if (s === 'RESIGNED') return 'bg-neutral-800 text-white border-neutral-900';
    if (s === 'ABSORBED') return 'bg-green-600 text-white border-green-700';
    return 'bg-gray-100 text-gray-600 border-gray-200';
}

export function sortData(criteria) {
    switch (criteria) {
        case 'name_asc':
            beneficiaries.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'name_desc':
            beneficiaries.sort((a, b) => b.name.localeCompare(a.name));
            break;
        case 'office':
            beneficiaries.sort((a, b) => a.office.localeCompare(b.office));
            break;
        case 'remarks':
            beneficiaries.sort((a, b) => a.remarks.localeCompare(b.remarks));
            break;
        case 'education':
            beneficiaries.sort((a, b) => a.education.localeCompare(b.education));
            break;
        case 'work':
            beneficiaries.sort((a, b) => a.designation.localeCompare(b.designation));
            break;
        case 'address':
            beneficiaries.sort((a, b) => a.address.localeCompare(b.address));
            break;
    }
    renderTable();
}

export async function addBeneficiary(data) {
    try {
        // Determine if this is an update (has existing ID) or new record
        const method = data.id ? 'PUT' : 'POST';

        // Automatically capitalize text fields as per senior request
        const capitalizedData = { ...data };
        const fieldsToCapitalize = ['name', 'address', 'education', 'designation'];

        fieldsToCapitalize.forEach(field => {
            if (capitalizedData[field] && typeof capitalizedData[field] === 'string') {
                capitalizedData[field] = capitalizedData[field].toUpperCase().trim();
            }
        });

        const response = await fetch(`${getBasePath()}api/beneficiaries.php`, {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(capitalizedData)
        });

        const result = await response.json();

        if (result.success) {
            // Trigger notification for new records
            if (method === 'POST') {
                createNotification(`New user <strong>${capitalizedData.name}</strong> added. pending "Required Documents" for review.`, 'success');
            }

            // Reload beneficiaries from database
            await loadBeneficiaries();
            return true;
        } else {
            console.error('Failed to save beneficiary:', result.error);
            return false;
        }
    } catch (error) {
        console.error('Error saving beneficiary:', error);
        return false;
    }
}

export async function archiveRecord(id) {
    // Show Modern Confirmation Modal
    const result = await Swal.fire({
        title: '<span class="text-xl font-black text-heading uppercase tracking-tight">Confirm Archive</span>',
        html: `
            <div class="py-4">
                <p class="text-sm font-medium text-gray-500">Are you sure you want to archive this record?</p>
                <p class="text-[10px] font-black text-philippine-red mt-1 uppercase tracking-widest">ID: ${id}</p>
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
        const response = await fetch(`${getBasePath()}api/beneficiaries.php?id=${encodeURIComponent(id)}&action=archive`, {
            method: 'PATCH'
        });

        const data = await response.json();

        if (data.success) {
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

function initLDNHeader() {
    const headerContainer = document.getElementById('ldn-header-container');
    const headerText = document.getElementById('ldn-header-text');
    const headerIcon = document.getElementById('ldn-header-icon');

    if (headerContainer && headerText && headerIcon) {
        headerContainer.addEventListener('click', () => {
            const currentText = headerText.innerText.trim();
            const longText = "Lanao Del Norte - GIP";
            const shortText = "LDN - GIP";

            if (currentText === longText) {
                headerText.innerText = shortText;
                headerIcon.classList.add('rotate-180');
            } else {
                headerText.innerText = longText;
                headerIcon.classList.remove('rotate-180');
            }
        });

        headerContainer.classList.add('cursor-pointer', 'select-none', 'transition-all', 'duration-200');
        headerIcon.classList.add('transition-transform', 'duration-200');
    }
}

function initSearch() {
    const searchInput = document.getElementById('table-search');
    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();

        if (query === "") {
            renderTable(beneficiaries);
            return;
        }

        const filtered = beneficiaries.filter(b =>
            b.name.toLowerCase().includes(query) ||
            b.id.toLowerCase().includes(query) ||
            b.office.toLowerCase().includes(query) ||
            b.remarks.toLowerCase().includes(query) ||
            b.designation.toLowerCase().includes(query) ||
            b.address.toLowerCase().includes(query) ||
            b.education.toLowerCase().includes(query)
        );

        renderTable(filtered);
    });

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
