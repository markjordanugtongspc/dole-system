import { getBasePath } from './auth.js';
import Swal from 'sweetalert2';

/**
 * Export & Print Module Logic
 */

let allBeneficiaries = [];
let activeColumns = ['id', 'name', 'office', 'position', 'status']; // Default columns
let currentFilters = {
    office: 'ALL',
    status: 'ALL',
    search: '',
    sort: 'name',
    section: 'ALL', // ALL, ACTIVE, ARCHIVED
    columns: ['id', 'name', 'office', 'position', 'status']
};

export async function initExportPage() {
    loadSavedConfig();
    await loadBeneficiaryData();
}

function loadSavedConfig() {
    const saved = localStorage.getItem('ldn_export_config');
    if (saved) {
        try {
            const config = JSON.parse(saved);
            currentFilters = { ...currentFilters, ...config };
            activeColumns = currentFilters.columns;
        } catch (e) {
            console.error('Error loading saved export config', e);
        }
    }
}

function saveConfig() {
    localStorage.setItem('ldn_export_config', JSON.stringify(currentFilters));
}

async function loadBeneficiaryData() {
    try {
        const response = await fetch(`${getBasePath()}api/beneficiaries.php?all=true`);
        const data = await response.json();

        if (data.success && data.beneficiaries) {
            allBeneficiaries = data.beneficiaries;
            // Apply loaded filters to the initial display
            window.handleFilterUpdate(currentFilters);
        }
    } catch (error) {
        console.error('Error loading data for export', error);
    }
}

/**
 * Exposed to global window to be called by the modal callback
 */
window.handleFilterUpdate = function (filters) {
    currentFilters = { ...currentFilters, ...filters };

    if (filters.columns) {
        activeColumns = filters.columns;
    }

    saveConfig();

    let filtered = [...allBeneficiaries];

    // Search Filter
    if (currentFilters.search) {
        filtered = filtered.filter(b =>
            b.name.toLowerCase().includes(currentFilters.search) ||
            b.id.toLowerCase().includes(currentFilters.search)
        );
    }

    // Office Filter
    if (currentFilters.office !== 'ALL') {
        filtered = filtered.filter(b => b.office.includes(currentFilters.office));
    }

    // Status Filter
    if (currentFilters.status !== 'ALL') {
        filtered = filtered.filter(b => b.remarks.toUpperCase() === currentFilters.status.toUpperCase());
    }

    // Section Filter (Active / Archived)
    if (currentFilters.section === 'ACTIVE') {
        filtered = filtered.filter(b => !b.isArchived);
    } else if (currentFilters.section === 'ARCHIVED') {
        filtered = filtered.filter(b => b.isArchived);
    }

    // Dynamic Sorting
    if (currentFilters.sort) {
        filtered.sort((a, b) => {
            switch (currentFilters.sort) {
                case 'name':
                    return (a.name || '').localeCompare(b.name || '');
                case 'id':
                    return (a.id || '').localeCompare(b.id || '');
                case 'office':
                    return (a.office || '').localeCompare(b.office || '');
                case 'startdate':
                    const dateA = new Date(a.startDate || 0);
                    const dateB = new Date(b.startDate || 0);
                    return dateB - dateA;
                default:
                    return 0;
            }
        });
    }

    updateDisplays(filtered);
};

// Add a helper to get current filters for the modal
window.getExportFilters = () => currentFilters;

function updateDisplays(data) {
    renderWebTable(data);
    renderPrintTable(data);
    const countEl = document.getElementById('record-count');
    if (countEl) countEl.textContent = data.length;

    // Store current filtered data for Excel export
    window.currentFilteredData = data;
}

/**
 * Pure JS Excel Export (Zero Dependency)
 * Converts current filtered data into a styled Excel file
 */
window.exportToExcel = function () {
    const data = window.currentFilteredData || allBeneficiaries;
    const columns = activeColumns;

    // HTML Template with Excel-specific XML namespaces
    const template = `
        <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40">
        <head>
            <meta charset="UTF-8">
            <!--[if gte mso 9]>
            <xml>
                <x:ExcelWorkbook>
                    <x:ExcelWorksheets>
                        <x:ExcelWorksheet>
                            <x:Name>LDN Beneficiaries</x:Name>
                            <x:WorksheetOptions>
                                <x:DisplayGridlines/>
                            </x:WorksheetOptions>
                        </x:ExcelWorksheet>
                    </x:ExcelWorksheets>
                </x:ExcelWorkbook>
            </xml>
            <![endif]-->
            <style>
                .header { background-color: #0046ad; color: #ffffff; font-weight: bold; text-transform: uppercase; border: 1px solid #003080; }
                .cell { border: 1px solid #e5e7eb; padding: 10px; font-family: 'Segoe UI', Arial, sans-serif; font-size: 11px; }
                .title { font-size: 18px; font-weight: bold; color: #0046ad; margin-bottom: 20px; }
                .status-ongoing { color: #16a34a; font-weight: bold; }
                .status-absorbed { color: #d97706; font-weight: bold; }
                .status-resigned { color: #64748b; font-weight: bold; }
                .status-expired { color: #dc2626; font-weight: bold; }
                .divider { background-color: #f8fafc; font-weight: bold; color: #475569; text-align: center; }
            </style>
        </head>
        <body>
            <table>
                <tr><td colspan="${columns.length}" class="title">DOLE LDNPFO - BENEFICIARY REPORT</td></tr>
                <tr><td colspan="${columns.length}" style="color: #64748b; font-size: 10px;">Generated on: ${new Intl.DateTimeFormat('en-PH', {
        timeZone: 'Asia/Manila',
        dateStyle: 'long',
        timeStyle: 'short'
    }).format(new Date())}</td></tr>
                <tr><td colspan="${columns.length}"></td></tr>
                <tr height="40">
                    ${columns.map(c => `<th class="header cell">${COL_MAP[c] || c.toUpperCase()}</th>`).join('')}
                </tr>
                ${(() => {
            let currentArchived = null;
            let html = '';
            const sortedData = [...data].sort((a, b) => (a.isArchived - b.isArchived));

            sortedData.forEach(row => {
                if (row.isArchived !== currentArchived) {
                    currentArchived = row.isArchived;
                    html += `<tr><td colspan="${columns.length}" class="cell divider">${currentArchived ? 'ARCHIVED RECORDS' : 'ACTIVE BENEFICIARIES'}</td></tr>`;
                }

                html += `<tr>${columns.map(c => {
                    let val = row[c] || '-';
                    if (c === 'position') val = row.designation || '-';
                    if (c === 'startdate') val = row.startDateFormatted || row.startDate || '-';
                    if (c === 'enddate') val = row.endDateFormatted || row.endDate || '-';
                    if (c === 'status') {
                        val = row.remarks || 'N/A';
                        let statusClass = 'status-' + val.toLowerCase();
                        return `<td class="cell ${statusClass}">${val}</td>`;
                    }
                    return `<td class="cell">${val}</td>`;
                }).join('')}</tr>`;
            });
            return html;
        })()}
            </table>
        </body>
        </html>
    `;

    const blob = new Blob([template], { type: 'application/vnd.ms-excel' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `LDN_RECORDS_${new Date().toISOString().slice(0, 10)}.xls`;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
}

const COL_MAP = {
    id: 'ID NO.',
    name: 'NAME',
    office: 'OFFICE',
    position: 'DESIGNATION',
    status: 'STATUS',
    startdate: 'START DATE',
    enddate: 'END DATE'
};

function generateTableHeader(columns, classes = "px-4 py-2.5") {
    return `
        <tr class="text-[11px] text-white uppercase bg-royal-blue font-bold tracking-widest text-center">
            ${columns.map(c => {
        let tooltip = '';
        if (c === 'name') tooltip = ' title="Last Name, First Name, Middle Initial"';
        return `<th scope="col" class="${classes}"${tooltip}>${COL_MAP[c] || c.toUpperCase()}</th>`;
    }).join('')}
        </tr>
    `;
}

function generateTableRow(row, columns, isPrint = false) {
    return columns.map(c => {
        let val = row[c] || '-';
        if (c === 'position') val = row.designation || '-';
        if (c === 'startdate') val = row.startDateFormatted || row.startDate || '-';
        if (c === 'enddate') val = row.endDateFormatted || row.endDate || '-';
        if (c === 'status') val = row.remarks || 'N/A';

        if (isPrint) {
            let classes = "px-2 py-2 border-r border-gray-200 text-center";
            if (c === 'id') classes += " font-mono font-bold";
            if (c === 'name') classes += " font-bold text-black uppercase leading-tight text-left";
            if (c === 'status') {
                const colors = { 'ABSORBED': 'text-golden-yellow', 'RESIGNED': 'text-slate-500', 'EXPIRED': 'text-philippine-red', 'ONGOING': 'text-green-600' };
                classes += ` text-center font-bold uppercase ${colors[val] || 'text-gray-500'}`;
            }
            if (c === 'startdate' || c === 'enddate') classes += " text-center font-mono text-[9px]";
            return `<td class="${classes}">${val}</td>`;
        } else {
            if (c === 'id') return `<th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap font-mono text-xs text-center">${val}</th>`;
            if (c === 'name') return `<td class="px-4 py-3 font-bold text-royal-blue group-hover/row:translate-x-1 transition-transform uppercase">${val}</td>`;
            if (c === 'office') return `<td class="px-4 py-3 text-center"><span class="bg-white text-blue-700 px-2 py-0.5 rounded text-[10px] border border-blue-100 font-bold shadow-sm">${val}</span></td>`;
            if (c === 'status') {
                const colors = { 'ABSORBED': 'bg-golden-yellow/10 text-golden-yellow border-golden-yellow/20', 'RESIGNED': 'bg-slate-100 text-slate-500 border-slate-200', 'EXPIRED': 'bg-red-50 text-philippine-red border-red-100', 'ONGOING': 'bg-green-50 text-green-600 border-green-100' };
                return `<td class="px-4 py-3 text-center"><span class="${colors[val] || 'bg-gray-100 text-gray-700 border-gray-200'} px-2 py-0.5 rounded text-xs border uppercase font-bold text-[10px] shadow-sm">${val}</span></td>`;
            }
            if (c === 'startdate') return `<td class="px-4 py-3 text-center text-[11px] font-black text-royal-blue uppercase tracking-tight">${val}</td>`;
            if (c === 'enddate') return `<td class="px-4 py-3 text-center text-[11px] font-black text-philippine-red uppercase tracking-tight">${val}</td>`;
            return `<td class="px-4 py-3 text-xs font-semibold text-gray-500 text-center">${val}</td>`;
        }
    }).join('');
}

function renderWebTable(data) {
    const table = document.querySelector('.overflow-x-auto table');
    if (!table) return;

    const thead = table.querySelector('thead');
    const tbody = document.getElementById('web-table-body');

    thead.innerHTML = generateTableHeader(activeColumns);

    if (data.length === 0) {
        tbody.innerHTML = `<tr><td colspan="${activeColumns.length}" class="px-6 py-12 text-center text-gray-400 font-medium italic">No matching records found.</td></tr>`;
        return;
    }

    // Maintain user's sort order within sections (Active vs Archived)
    const sortedData = [...data].sort((a, b) => {
        if (a.isArchived !== b.isArchived) return a.isArchived - b.isArchived;
        return 0; // Keep user's sort order
    });

    let currentArchived = null;
    let currentOffice = null;
    let html = '';

    const showDividers = currentFilters.section === 'ALL';

    sortedData.forEach(row => {
        // Status Divider (Active vs Archived) - Only show if current filter is 'ALL'
        if (showDividers && row.isArchived !== currentArchived) {
            currentArchived = row.isArchived;
            currentOffice = null;
            html += `
                <tr class="${currentArchived ? 'bg-red-50/30' : 'bg-green-50/30'}">
                    <td colspan="${activeColumns.length}" class="px-6 py-3 border-y border-gray-100 text-center">
                        <span class="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${currentArchived ? 'bg-red-100 text-red-600 border border-red-200' : 'bg-green-100 text-green-600 border border-green-200'}">
                            ${currentArchived ? 'Archived Records' : 'Active Beneficiaries'}
                        </span>
                    </td>
                </tr>
            `;
        }

        // Office Divider - show always if sorting by office or default
        if (row.office !== currentOffice) {
            currentOffice = row.office;
            html += `
                <tr class="bg-gray-50/50">
                    <td colspan="${activeColumns.length}" class="px-8 py-2 border-b border-gray-100">
                        <div class="flex items-center gap-2 opacity-60">
                            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
                            <span class="text-[9px] font-black text-gray-500 uppercase tracking-widest">${currentOffice || 'UNASSIGNED OFFICE'}</span>
                        </div>
                    </td>
                </tr>
            `;
        }

        html += `
            <tr class="bg-white hover:bg-gray-50 transition-colors group/row border-b border-gray-50">
                ${generateTableRow(row, activeColumns)}
            </tr>
        `;
    });

    tbody.innerHTML = html;
}

function renderPrintTable(data) {
    const printArea = document.getElementById('print-area');
    if (!printArea) return;

    const table = printArea.querySelector('table');
    const thead = table.querySelector('thead');
    const tbody = document.getElementById('print-table-body');

    thead.innerHTML = `
        <tr class="text-white bg-royal-blue font-bold uppercase tracking-wider text-[10px] text-center">
            ${activeColumns.map(c => {
        let tooltip = '';
        if (c === 'name') tooltip = ' title="Last Name, First Name, Middle Initial"';
        return `<th class="px-3 py-2 border border-royal-blue"${tooltip}>${COL_MAP[c] || c.toUpperCase()}</th>`;
    }).join('')}
        </tr>
    `;

    // Grouping logic for print
    const sortedData = [...data].sort((a, b) => {
        if (a.isArchived !== b.isArchived) return a.isArchived - b.isArchived;
        return 0;
    });

    let currentArchived = null;
    let currentOffice = null;
    let html = '';
    const showDividers = currentFilters.section === 'ALL';

    sortedData.forEach((row, index) => {
        if (showDividers && row.isArchived !== currentArchived) {
            currentArchived = row.isArchived;
            currentOffice = null;
            html += `
                <tr class="print:bg-gray-200 bg-gray-200">
                    <td colspan="${activeColumns.length}" class="px-3 py-1 border border-gray-400 text-center">
                        <span class="text-[10px] font-black uppercase tracking-[0.2em]">${currentArchived ? 'SECTION: ARCHIVED RECORDS' : 'SECTION: ACTIVE BENEFICIARIES'}</span>
                    </td>
                </tr>
            `;
        }

        if (row.office !== currentOffice) {
            currentOffice = row.office;
            html += `
                <tr class="bg-gray-50 print:bg-gray-50">
                    <td colspan="${activeColumns.length}" class="px-3 py-1.5 border border-gray-200 text-center">
                        <span class="text-[9px] font-black text-gray-800 uppercase tracking-widest text-center">Office: ${currentOffice || 'N/A'}</span>
                    </td>
                </tr>
            `;
        }

        html += `
            <tr class="${index % 2 === 0 ? 'bg-white' : 'bg-gray-50/30'} border-b border-gray-200">
                ${generateTableRow(row, activeColumns, true)}
            </tr>
        `;
    });

    tbody.innerHTML = html;
}
