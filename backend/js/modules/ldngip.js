
/**
 * LDN Handling Module
 * Handles data simulation, rendering, and sorting for the LDN page
 */

// Initial Simulated Data
let beneficiaries = [
    {
        name: "Dela Cruz, Juan M.",
        id: "ROX-RD-ESIG-2025-0002",
        office: "DOLE Field Office",
        remarks: "ONGOING",
        contact: "0912-345-6789",
        address: "Poblacion, Iligan City",
        birthday: "2002-05-15",
        gender: "Male",
        education: "BS Information Technology",
        startDate: "2025-01-16",
        endDate: "2025-07-15",
        seriesNo: "2025-02-132",
        designation: "Administrative Support / Technical-Aide",
        replacement: "N/A"
    },
    {
        name: "Santos, Maria Clara P.",
        id: "ROX-RD-ESIG-2025-0045",
        office: "DepEd Division Office",
        remarks: "ONGOING",
        contact: "0998-765-4321",
        address: "Suarez, Iligan City",
        birthday: "2000-02-10",
        gender: "Female",
        education: "Bachelor of Secondary Education",
        startDate: "2025-02-01",
        endDate: "2025-08-01",
        seriesNo: "2025-02-140",
        designation: "Data Encoding / Office Clerk",
        replacement: "N/A"
    },
    {
        name: "Penduko, Pedro A.",
        id: "ROX-RD-ESIG-2024-0992",
        office: "LGU Kauswagan",
        remarks: "EXPIRED",
        contact: "0955-111-2222",
        address: "Kauswagan, Lanao del Norte",
        birthday: "1997-11-20",
        gender: "Male",
        education: "High School Graduate",
        startDate: "2024-06-15",
        endDate: "2024-12-15",
        seriesNo: "2024-06-055",
        designation: "General Services / Utility",
        replacement: "Replaced by: Juanita A."
    },
    {
        name: "Gomez, Ana Marie S.",
        id: "ROX-RD-ESIG-2025-0101",
        office: "DICT Field Team",
        remarks: "ONGOING",
        contact: "0922-333-4444",
        address: "Tubod, Lanao del Norte",
        birthday: "2003-08-01",
        gender: "Female",
        education: "BS Computer Science",
        startDate: "2025-03-01",
        endDate: "2025-09-01",
        seriesNo: "2025-03-010",
        designation: "Technical Support Assistant",
        replacement: "N/A"
    }
];

export function initLDNPage() {
    renderTable();
    initLDNHeader();
    initSearch();
}

export function renderTable(dataToRender = beneficiaries) {
    const tbody = document.getElementById('beneficiary-table-body');
    if (!tbody) return;

    if (dataToRender.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="5" class="px-6 py-10 text-center text-gray-400 font-medium">
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
            <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap font-mono text-xs">
                ${data.id}
            </th>
            <td class="px-6 py-4 font-bold text-royal-blue">
                ${data.name}
            </td>
            <td class="px-6 py-4">
                <span class="${getOfficeClass(data.office)} text-xs font-bold px-2.5 py-0.5 rounded">
                    ${data.office}
                </span>
            </td>
            <td class="px-6 py-4">
                <span class="${getStatusClass(data.remarks)} text-xs font-bold px-2.5 py-0.5 rounded uppercase border">
                    ${data.remarks}
                </span>
            </td>
            <td class="px-6 py-4 flex gap-2">
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

export function addBeneficiary(data) {
    // Logic to update if ID exists, otherwise add new
    const index = beneficiaries.findIndex(b => b.id === data.id);
    if (index !== -1) {
        beneficiaries[index] = data;
    } else {
        beneficiaries.unshift(data);
    }
    renderTable();
}

export function archiveRecord(id) {
    beneficiaries = beneficiaries.filter(b => b.id !== id);
    renderTable();
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
