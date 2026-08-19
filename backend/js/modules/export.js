import { apiGet } from './ajax-manager.js';
import Swal from 'sweetalert2';
import { COMMON_ASSIGNED_UNITS } from './assigned-units.js';

/**
 * Export & Print Module Logic
 */

const DEFAULT_EXPORT_COLUMNS = ['id', 'name', 'age', 'address', 'gender', 'assignedunit', 'status'];

let allBeneficiaries = [];
let activeColumns = [...DEFAULT_EXPORT_COLUMNS];
let currentFilters = {
    office: 'ALL',
    location: 'ALL',
    remarks: 'ALL',
    gender: 'ALL',
    assignedUnit: 'ALL',
    ageGroup: 'ALL',
    dtrStatus: 'ALL',
    arStatus: 'ALL',
    documentStatus: 'ALL',
    year: 'ALL',
    search: '',
    sort: 'name',
    section: 'ALL', // ALL, ACTIVE, ARCHIVED
    columns: [...DEFAULT_EXPORT_COLUMNS],
    preparedBy: localStorage.getItem('ldn_export_prepared') || '',
    approvedBy: localStorage.getItem('ldn_export_approved') || ''
};

// START: initExportPage - Initializes the export page state, configs, and beneficiary data
export async function initExportPage() {
    loadSavedConfig();
    await loadBeneficiaryData();
}
// END: initExportPage - Initializes the export page state, configs, and beneficiary data

// START: loadSavedConfig - Loads persisted export settings from localStorage
function loadSavedConfig() {
    const saved = localStorage.getItem('ldn_export_config');
    if (saved) {
        try {
            const config = JSON.parse(saved);
            const migratedColumns = Array.isArray(config.columns) && config.columns.length > 0
                ? config.columns.map((column) => column === 'position' ? 'assignedunit' : column)
                : [...DEFAULT_EXPORT_COLUMNS];
            currentFilters = { ...currentFilters, ...config, columns: migratedColumns };
            activeColumns = migratedColumns;
        } catch (e) {
            console.error('Error loading saved export config', e);
        }
    }
}
// END: loadSavedConfig - Loads persisted export settings from localStorage

// START: saveConfig - Persists current export filters to localStorage
function saveConfig() {
    localStorage.setItem('ldn_export_config', JSON.stringify(currentFilters));
}
// END: saveConfig - Persists current export filters to localStorage

// START: loadBeneficiaryData - Fetches beneficiary records and status summaries for exporting
async function loadBeneficiaryData() {
    try {
        const response = await apiGet('api/beneficiaries.php?all=true');
        if (!response.success) {
            throw new Error(response.error || 'Failed to fetch beneficiaries');
        }

        const payload = response.data || {};
        const beneficiaries = Array.isArray(payload.beneficiaries)
            ? payload.beneficiaries
            : (payload.data?.success && Array.isArray(payload.data.beneficiaries) ? payload.data.beneficiaries : []);

        // Enrich the export dataset with the same DTR, AR, and document status sources used by GIP.
        const [dtrResponse, arResponse, docsResponse] = await Promise.all([
            apiGet('api/logs.php?type=dtr'),
            apiGet('api/logs.php?type=ar'),
            apiGet('api/logs.php?type=docs')
        ]);
        const summaries = new Map();
        const ensureSummary = (gipId) => {
            const key = String(gipId || '');
            if (!summaries.has(key)) summaries.set(key, { dtrStatus: 'NOT SUBMITTED', arStatus: 'NOT SUBMITTED', documentStatus: 'PENDING' });
            return summaries.get(key);
        };
        const applyLatestStatus = (logs, field) => {
            const seen = new Set();
            (logs || []).forEach((log) => {
                const key = String(log.gip_id || '');
                if (seen.has(key)) return;
                seen.add(key);
                const summary = ensureSummary(key);
                const status = String(log.status || 'PENDING').toUpperCase();
                summary[field] = status === 'VERIFIED' || status === 'COMPLETED' ? 'SUBMITTED' : status;
            });
        };
        applyLatestStatus(dtrResponse?.data?.logs, 'dtrStatus');
        applyLatestStatus(arResponse?.data?.logs, 'arStatus');
        const documentStates = new Map();
        (docsResponse?.data?.logs || []).forEach((log) => {
            const key = String(log.gip_id || '');
            if (!documentStates.has(key)) documentStates.set(key, []);
            documentStates.get(key).push(String(log.status || 'PENDING').toUpperCase());
        });
        documentStates.forEach((states, key) => {
            const summary = ensureSummary(key);
            summary.documentStatus = states.some((status) => status === 'DECLINED' || status === 'REJECTED')
                ? 'REJECTED'
                : (states.length > 0 && states.every((status) => status === 'VERIFIED' || status === 'COMPLETED')
                    ? 'SUBMITTED'
                    : 'PENDING');
        });
        allBeneficiaries = beneficiaries.map((beneficiary) => ({
            ...beneficiary,
            ...(summaries.get(String(beneficiary.id || beneficiary.gip_id || '')) || {})
        }));
        // Expose year list for the config modal
        window.getExportYears = () => [...new Set(allBeneficiaries.map(b => {
            const d = new Date(b.startDate || b.createdAt || '');
            return isNaN(d.getTime()) ? null : d.getFullYear().toString();
        }).filter(Boolean))].sort((a, b) => b - a);

        // Expose distinct offices from current beneficiary dataset
        window.getExportOffices = () => {
            return [...new Set(allBeneficiaries.map(b => String(b.office || '').trim()).filter(Boolean))].sort((a, b) => a.localeCompare(b));
        };

        window.getExportAssignedUnits = () => {
            const liveUnits = [...new Set(allBeneficiaries.map((beneficiary) => String(beneficiary.designation || '').trim()).filter((unit) => unit && !['N/A', 'NA', 'NONE', 'UNASSIGNED'].includes(unit.toUpperCase())))];
            const commonOrder = new Map(COMMON_ASSIGNED_UNITS.map((unit, index) => [unit.toUpperCase(), index]));
            return liveUnits.sort((a, b) => {
                const aOrder = commonOrder.get(a.toUpperCase()) ?? Number.MAX_SAFE_INTEGER;
                const bOrder = commonOrder.get(b.toUpperCase()) ?? Number.MAX_SAFE_INTEGER;
                return aOrder - bOrder || a.localeCompare(b);
            });
        };
        window.handleFilterUpdate(currentFilters);
    } catch (error) {
        console.error('Error loading data for export', error);
        const tbody = document.getElementById('web-table-body');
        if (tbody) {
            tbody.innerHTML = `<tr><td colspan="${activeColumns.length}" class="px-6 py-12 text-center text-red-500 font-bold uppercase text-[0.625rem] tracking-widest">Failed to load data</td></tr>`;
        }
        Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'error',
            title: 'Failed loading export data',
            showConfirmButton: false,
            timer: 2800
        });
    }
}
// END: loadBeneficiaryData - Fetches beneficiary records and status summaries for exporting

// START: handleFilterUpdate - Applies active filters and column configurations to preview and print views
window.handleFilterUpdate = function (filters) {
    currentFilters = { ...currentFilters, ...filters };

    if (filters.columns && Array.isArray(filters.columns) && filters.columns.length > 0) {
        activeColumns = filters.columns;
        currentFilters.columns = filters.columns;
    } else if (!currentFilters.columns || currentFilters.columns.length === 0) {
        activeColumns = [...DEFAULT_EXPORT_COLUMNS];
        currentFilters.columns = [...DEFAULT_EXPORT_COLUMNS];
    }
    if (filters.preparedBy !== undefined) currentFilters.preparedBy = filters.preparedBy;
    if (filters.approvedBy !== undefined) currentFilters.approvedBy = filters.approvedBy;

    saveConfig();

    let filtered = [...allBeneficiaries];

    // Search Filter
    if (currentFilters.search) {
        const q = currentFilters.search.toLowerCase();
        filtered = filtered.filter(b =>
            (b.name || '').toLowerCase().includes(q) ||
            (b.id || '').toLowerCase().includes(q) ||
            (b.address || '').toLowerCase().includes(q) ||
            (b.designation || '').toLowerCase().includes(q)
        );
    }

    // Office Filter
    if (currentFilters.office && currentFilters.office !== 'ALL') {
        filtered = filtered.filter(b => (b.office || '').toUpperCase().includes(currentFilters.office.toUpperCase()));
    }

    // Location sub-filter (only meaningful when office is selected)
    if (currentFilters.location && currentFilters.location !== 'ALL') {
        filtered = filtered.filter(b => (b.office || '').toUpperCase().includes(currentFilters.location.toUpperCase()));
    }

    // Year Filter (by start date year)
    if (currentFilters.year && currentFilters.year !== 'ALL') {
        filtered = filtered.filter(b => {
            const d = new Date(b.startDate || b.createdAt || '');
            return !isNaN(d.getTime()) && d.getFullYear().toString() === currentFilters.year;
        });
    }

    // Gender Filter
    if (currentFilters.gender && currentFilters.gender !== 'ALL') {
        filtered = filtered.filter((b) => normalizeGender(b.gender) === currentFilters.gender);
    }

    // Assigned Unit Filter
    if (currentFilters.assignedUnit && currentFilters.assignedUnit !== 'ALL') {
        const selectedUnit = currentFilters.assignedUnit.trim().toUpperCase();
        filtered = filtered.filter((beneficiary) => String(beneficiary.designation || '').trim().toUpperCase() === selectedUnit);
    }

    // Remarks Filter
    if (currentFilters.remarks && currentFilters.remarks !== 'ALL') {
        filtered = filtered.filter(b => (b.remarks || '').toUpperCase() === currentFilters.remarks.toUpperCase());
    }

    // Age Group Filter
    if (currentFilters.ageGroup && currentFilters.ageGroup !== 'ALL') {
        filtered = filtered.filter((b) => getAgeGroup(b.age) === currentFilters.ageGroup);
    }
    if (currentFilters.dtrStatus && currentFilters.dtrStatus !== 'ALL') {
        filtered = filtered.filter((b) => (b.dtrStatus || 'NOT SUBMITTED') === currentFilters.dtrStatus);
    }
    if (currentFilters.arStatus && currentFilters.arStatus !== 'ALL') {
        filtered = filtered.filter((b) => (b.arStatus || 'NOT SUBMITTED') === currentFilters.arStatus);
    }
    if (currentFilters.documentStatus && currentFilters.documentStatus !== 'ALL') {
        filtered = filtered.filter((b) => (b.documentStatus || 'PENDING') === currentFilters.documentStatus);
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
                case 'name_asc':
                    return (a.name || '').localeCompare(b.name || '');
                case 'name_desc':
                    return (b.name || '').localeCompare(a.name || '');
                case 'id':
                    return (a.id || '').localeCompare(b.id || '');
                case 'address':
                    return (a.address || '').localeCompare(b.address || '');
                case 'office':
                    return (a.office || '').localeCompare(b.office || '');
                case 'assignedunit':
                    return (a.designation || '').localeCompare(b.designation || '');
                case 'startdate': {
                    const dateA = new Date(a.startDate || 0);
                    const dateB = new Date(b.startDate || 0);
                    return dateB - dateA;
                }
                case 'startdate_asc': {
                    const dateA = new Date(a.startDate || 0);
                    const dateB = new Date(b.startDate || 0);
                    return dateA - dateB;
                }
                case 'age': {
                    const ageA = parseInt(a.age, 10) || 0;
                    const ageB = parseInt(b.age, 10) || 0;
                    return ageA - ageB;
                }
                case 'age_desc': {
                    const ageA = parseInt(a.age, 10) || 0;
                    const ageB = parseInt(b.age, 10) || 0;
                    return ageB - ageA;
                }
                case 'status':
                    return (a.remarks || '').localeCompare(b.remarks || '');
                default:
                    return 0;
            }
        });
    }

    updateDisplays(filtered);
};
// END: handleFilterUpdate - Applies active filters and column configurations to preview and print views

// START: getExportFilters - Returns the active filter configuration
window.getExportFilters = () => currentFilters;
// END: getExportFilters - Returns the active filter configuration

// START: normalizeGender - Standardizes gender string values
function normalizeGender(rawGender) {
    const v = String(rawGender || '').trim().toUpperCase();
    if (v === 'F' || v === 'FEMALE') return 'FEMALE';
    if (v === 'M' || v === 'MALE') return 'MALE';
    return 'UNKNOWN';
}
// END: normalizeGender - Standardizes gender string values

// START: getAgeGroup - Categorizes numeric age into predefined demographic brackets
function getAgeGroup(rawAge) {
    const age = parseInt(rawAge, 10);
    if (Number.isNaN(age)) return 'UNKNOWN';
    if (age >= 18 && age <= 24) return '18-24';
    if (age >= 25 && age <= 30) return '25-30';
    if (age >= 31 && age <= 40) return '31-40';
    if (age >= 41) return '41+';
    return 'UNKNOWN';
}
// END: getAgeGroup - Categorizes numeric age into predefined demographic brackets

// START: updateDisplays - Refreshes table headers, rows, count badges, and summary texts
function updateDisplays(data) {
    renderWebTable(data);
    renderPrintTable(data);
    const countEl = document.getElementById('record-count');
    if (countEl) countEl.textContent = data.length.toLocaleString();
    const printFilterSummary = document.getElementById('print-filter-summary');
    if (printFilterSummary) {
        const parts = [];
        if (currentFilters.office !== 'ALL') parts.push(`OFFICE: ${currentFilters.office}`);
        if (currentFilters.assignedUnit !== 'ALL') parts.push(`ASSIGNED UNIT: ${currentFilters.assignedUnit}`);
        if (currentFilters.remarks !== 'ALL') parts.push(`REMARKS: ${currentFilters.remarks}`);
        if (currentFilters.gender !== 'ALL') parts.push(`GENDER: ${currentFilters.gender}`);
        if (currentFilters.ageGroup !== 'ALL') parts.push(`AGE: ${currentFilters.ageGroup}`);
        printFilterSummary.textContent = parts.length ? parts.join(' | ') : 'FILTER: ALL RECORDS';
    }

    // Store current filtered data for Excel export
    window.currentFilteredData = data;
}
// END: updateDisplays - Refreshes table headers, rows, count badges, and summary texts

// START: exportToExcel - Generates and downloads an Excel file representing filtered beneficiaries
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
                .header { background-color: #0046ad; color: #ffffff; font-weight: bold; text-transform: uppercase; border: 1px solid #003080; text-align: center; font-size: 10px; font-family: Arial, sans-serif; }
                .cell { border: 1px solid #e5e7eb; padding: 6px 10px; font-family: Arial, sans-serif; font-size: 10px; }
                .cell-left { text-align: left; mso-number-format: "\\@"; }
                .cell-center { text-align: center; }
                .cell-text { mso-number-format: "\\@"; text-align: center; }
                .title { font-size: 16px; font-weight: bold; color: #0046ad; font-family: Arial, sans-serif; }
                .status-ongoing { color: #16a34a; font-weight: bold; text-align: center; }
                .status-absorbed { color: #d97706; font-weight: bold; text-align: center; }
                .status-resigned { color: #64748b; font-weight: bold; text-align: center; }
                .status-expired { color: #dc2626; font-weight: bold; text-align: center; }
                .divider { background-color: #f1f5f9; font-weight: bold; color: #334155; text-align: center; font-size: 11px; }
            </style>
        </head>
        <body>
            <table>
                <tr><td colspan="${columns.length}" class="title">DOLE LDNPFO - BENEFICIARY REPORT</td></tr>
                <tr><td colspan="${columns.length}" style="color: #64748b; font-size: 9px; font-family: Arial, sans-serif;">Generated on: ${new Intl.DateTimeFormat('en-PH', {
        timeZone: 'Asia/Manila',
        dateStyle: 'long',
        timeStyle: 'short'
    }).format(new Date())}</td></tr>
                <tr><td colspan="${columns.length}"></td></tr>
                <tr height="30">
                    ${columns.map(c => `<th class="header">${COL_MAP[c] || c.toUpperCase()}</th>`).join('')}
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
                    let alignClass = 'cell-center';
                    if (c === 'name' || c === 'address' || c === 'designatedbeneficiary') alignClass = 'cell-left';
                    if (c === 'id' || c === 'contact') alignClass = 'cell-text';

                    if (c === 'address') val = row.address || '-';
                    if (c === 'gender') val = row.gender ? normalizeGender(row.gender) : '-';
                    if (c === 'assignedunit') val = row.designation || '-';
                    if (c === 'startdate') val = row.startDateFormatted || row.startDate || '-';
                    if (c === 'enddate') val = row.endDateFormatted || row.endDate || '-';
                    if (c === 'dtrstatus') val = row.dtrStatus || 'NOT SUBMITTED';
                    if (c === 'arstatus') val = row.arStatus || 'NOT SUBMITTED';
                    if (c === 'documentstatus') val = row.documentStatus || 'PENDING';
                    if (c === 'education') val = row.education || '-';
                    if (c === 'contact') val = row.contact || row.contact_number || '-';
                    if (c === 'birthday') val = row.birthday || '-';
                    if (c === 'designatedbeneficiary') val = row.designatedBeneficiary || '-';
                    if (c === 'relationship') val = row.relationshipToAssured || '-';
                    if (c === 'status') {
                        val = row.remarks || 'N/A';
                        let statusClass = 'status-' + String(val).toLowerCase();
                        return `<td class="cell ${statusClass}">${val}</td>`;
                    }
                    return `<td class="cell ${alignClass}">${val}</td>`;
                }).join('')}</tr>`;
            });
            return html;
        })()}
                <tr><td colspan="${columns.length}"></td></tr>
                <tr><td colspan="${columns.length}"></td></tr>
                <tr>
                    <td colspan="2" style="font-weight: bold; font-size: 11px;">Prepared by:</td>
                    <td colspan="${Math.max(1, columns.length - 4)}"></td>
                    <td colspan="2" style="font-weight: bold; font-size: 11px;">Approved by:</td>
                </tr>
                <tr>
                    <td colspan="2" style="font-weight: bold; font-size: 12px; text-transform: uppercase;">${currentFilters.preparedBy || ''}</td>
                    <td colspan="${Math.max(1, columns.length - 4)}"></td>
                    <td colspan="2" style="font-weight: bold; font-size: 12px; text-transform: uppercase;">${currentFilters.approvedBy || ''}</td>
                </tr>
                <tr>
                    <td colspan="2" style="font-size: 10px;">Printed Name &amp; Signature</td>
                    <td colspan="${Math.max(1, columns.length - 4)}"></td>
                    <td colspan="2" style="font-size: 10px;">Printed Name &amp; Signature</td>
                </tr>
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
};
// END: exportToExcel - Generates and downloads an Excel file representing filtered beneficiaries

const COL_MAP = {
    id: 'ID NO.',
    name: 'NAME',
    age: 'AGE',
    address: 'ADDRESS',
    gender: 'GENDER',
    office: 'OFFICE / PLACE OF ASSIGNMENT',
    assignedunit: 'ASSIGNED UNIT',
    status: 'STATUS',
    dtrstatus: 'DTR STATUS',
    arstatus: 'AR STATUS',
    documentstatus: 'REQUIRED DOCUMENTS',
    startdate: 'START DATE',
    enddate: 'END DATE',
    education: 'EDUCATIONAL ATTAINMENT',
    contact: 'CONTACT NO.',
    birthday: 'BIRTHDAY',
    designatedbeneficiary: 'DESIGNATED BENEFICIARY',
    relationship: 'RELATIONSHIP TO ASSURED'
};

// START: generateTableHeader - Constructs responsive table headers matching active export columns
function generateTableHeader(columns, classes = "px-4 py-3") {
    return `
        <tr class="text-[0.6875rem] text-white uppercase bg-royal-blue font-bold tracking-widest text-center">
            ${columns.map(c => {
        let tooltip = '';
        if (c === 'name') tooltip = ' title="Last Name, First Name, Middle Initial"';
        return `<th scope="col" class="${classes}"${tooltip}>${COL_MAP[c] || c.toUpperCase()}</th>`;
    }).join('')}
        </tr>
    `;
}
// END: generateTableHeader - Constructs responsive table headers matching active export columns

// START: generateTableRow - Generates individual table cells with styling according to column type
function generateTableRow(row, columns, isPrint = false) {
    return columns.map(c => {
        let val = row[c] || '-';
        if (c === 'address') val = row.address || '-';
        if (c === 'gender') val = row.gender ? normalizeGender(row.gender) : '-';
        if (c === 'assignedunit') val = row.designation || '-';
        if (c === 'startdate') val = row.startDateFormatted || row.startDate || '-';
        if (c === 'enddate') val = row.endDateFormatted || row.endDate || '-';
        if (c === 'status') val = row.remarks || 'N/A';
        if (c === 'dtrstatus') val = row.dtrStatus || 'NOT SUBMITTED';
        if (c === 'arstatus') val = row.arStatus || 'NOT SUBMITTED';
        if (c === 'documentstatus') val = row.documentStatus || 'PENDING';
        if (c === 'age') val = row.age || '-';
        if (c === 'education') val = row.education || '-';
        if (c === 'contact') val = row.contact || row.contact_number || '-';
        if (c === 'birthday') val = row.birthday || '-';
        if (c === 'designatedbeneficiary') val = row.designatedBeneficiary || '-';
        if (c === 'relationship') val = row.relationshipToAssured || '-';

        if (isPrint) {
            let classes = "px-3 py-2 border border-gray-200 text-center";
            if (c === 'id') classes += " font-mono font-bold";
            if (c === 'name') classes += " font-bold text-black uppercase leading-tight text-left px-4";
            if (c === 'address') classes += " text-left uppercase text-[0.625rem]";
            if (c === 'status') {
                const colors = { 'ABSORBED': 'text-golden-yellow', 'RESIGNED': 'text-slate-500', 'EXPIRED': 'text-philippine-red', 'ONGOING': 'text-green-600' };
                classes += ` text-center font-bold uppercase ${colors[val] || 'text-gray-500'}`;
            }
            if (c === 'startdate' || c === 'enddate') classes += " text-center font-mono text-[0.5625rem]";
            return `<td class="${classes}">${val}</td>`;
        } else {
            if (c === 'id') return `<th scope="row" class="px-4 py-3 font-medium text-gray-900 dark:text-white whitespace-nowrap font-mono text-xs text-center">${val}</th>`;
            if (c === 'name') return `<td class="px-4 py-3 font-bold text-royal-blue group-hover/row:translate-x-1 transition-transform uppercase text-xs">${val}</td>`;
            if (c === 'age') return `<td class="px-4 py-3 text-center text-[0.6875rem] font-black text-emerald-700 dark:text-emerald-400 uppercase tracking-tight">${val}</td>`;
            if (c === 'address') return `<td class="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase max-w-[220px] truncate" title="${val}">${val}</td>`;
            if (c === 'gender') return `<td class="px-4 py-3 text-center text-[0.6875rem] font-black text-indigo-700 dark:text-indigo-400 uppercase tracking-tight">${val}</td>`;
            if (c === 'office') return `<td class="px-4 py-3 text-center"><span class="bg-white dark:bg-slate-800 text-blue-700 dark:text-blue-300 px-2 py-0.5 rounded text-[0.625rem] border border-blue-100 dark:border-slate-700 font-bold shadow-xs uppercase">${val}</span></td>`;
            if (c === 'assignedunit') return `<td class="px-4 py-3 text-center text-xs font-bold text-gray-700 dark:text-gray-200 uppercase">${val}</td>`;
            if (c === 'status') {
                const colors = { 'ABSORBED': 'bg-golden-yellow/10 text-golden-yellow border-golden-yellow/20', 'RESIGNED': 'bg-slate-100 text-slate-500 border-slate-200', 'EXPIRED': 'bg-red-50 text-philippine-red border-red-100', 'ONGOING': 'bg-green-50 text-green-600 border-green-100' };
                return `<td class="px-4 py-3 text-center"><span class="${colors[val] || 'bg-gray-100 text-gray-700 border-gray-200'} px-2 py-0.5 rounded text-xs border uppercase font-bold text-[0.625rem] shadow-xs">${val}</span></td>`;
            }
            if (c === 'startdate') return `<td class="px-4 py-3 text-center text-[0.6875rem] font-black text-royal-blue uppercase tracking-tight">${val}</td>`;
            if (c === 'enddate') return `<td class="px-4 py-3 text-center text-[0.6875rem] font-black text-philippine-red uppercase tracking-tight">${val}</td>`;
            return `<td class="px-4 py-3 text-xs font-semibold text-gray-500 dark:text-gray-400 text-center">${val}</td>`;
        }
    }).join('');
}
// END: generateTableRow - Generates individual table cells with styling according to column type

// START: renderWebTable - Renders live interactive preview table with group dividers
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
                        <span class="px-3 py-1 rounded-full text-[0.625rem] font-black uppercase tracking-widest ${currentArchived ? 'bg-red-100 text-red-600 border border-red-200' : 'bg-green-100 text-green-600 border border-green-200'}">
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
                            <span class="text-[0.5625rem] font-black text-gray-500 uppercase tracking-widest">${currentOffice || 'UNASSIGNED OFFICE'}</span>
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
// END: renderWebTable - Renders live interactive preview table with group dividers

// START: renderPrintTable - Populates print layout table matching selected export columns
function renderPrintTable(data) {
    const printArea = document.getElementById('print-area');
    if (!printArea) return;

    const table = printArea.querySelector('table');
    const thead = table.querySelector('thead');
    const tbody = document.getElementById('print-table-body');

    thead.innerHTML = `
        <tr class="text-white bg-royal-blue font-bold uppercase tracking-wider text-[0.625rem] text-center">
            ${activeColumns.map(c => {
        let tooltip = '';
        if (c === 'name') tooltip = ' title="Last Name, First Name, Middle Initial"';
        return `<th class="px-3 py-2 border border-royal-blue"${tooltip}>${COL_MAP[c] || c.toUpperCase()}</th>`;
    }).join('')}
        </tr>
    `;

    const prepEl = document.getElementById('print-prepared-by');
    const appEl = document.getElementById('print-approved-by');

    if (prepEl) prepEl.textContent = currentFilters.preparedBy;
    if (appEl) appEl.textContent = currentFilters.approvedBy;

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
                        <span class="text-[0.625rem] font-black uppercase tracking-[0.2em]">${currentArchived ? 'SECTION: ARCHIVED RECORDS' : 'SECTION: ACTIVE BENEFICIARIES'}</span>
                    </td>
                </tr>
            `;
        }

        if (row.office !== currentOffice) {
            currentOffice = row.office;
            html += `
                <tr class="bg-gray-50 print:bg-gray-50">
                    <td colspan="${activeColumns.length}" class="px-3 py-1.5 border border-gray-200 text-center">
                        <span class="text-[0.5625rem] font-black text-gray-800 uppercase tracking-widest text-center">Office: ${currentOffice || 'N/A'}</span>
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
// END: renderPrintTable - Populates print layout table matching selected export columns
