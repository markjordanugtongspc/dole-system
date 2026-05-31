import { apiGet } from './ajax-manager.js';
import { getBasePath } from './auth.js';
import Swal from 'sweetalert2';

/**
 * LDN Bulk Logs Export Module
 * Exports DTR / AR / Both logs as a clean Excel (.xls) file.
 * Uses the horizontal "matrix" format requested: Beneficiary vs Period columns.
 */

const PH_HOLIDAYS_2026 = [
    '2026-01-01', '2026-04-02', '2026-04-03', '2026-04-09',
    '2026-05-01', '2026-06-12', '2026-08-24', '2026-08-31',
    '2026-11-01', '2026-11-30', '2026-12-25', '2026-12-30', '2026-12-31',
];

function isWorkday(dateStr) {
    const d = new Date(dateStr + 'T00:00:00');
    const dow = d.getDay();
    if (dow === 0 || dow === 6) return false; // weekend
    if (PH_HOLIDAYS_2026.includes(dateStr)) return false;
    return true;
}

/**
 * Generate all 15-day periods for a given year as period labels.
 * e.g. "JAN 1-15, 2026", "JAN 16-31, 2026", ...
 */
function generateAllPeriods(year = new Date().getFullYear()) {
    const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    const periods = [];
    for (let m = 0; m < 12; m++) {
        const lastDay = new Date(year, m + 1, 0).getDate();
        periods.push(`${months[m]} 1-15, ${year}`);
        periods.push(`${months[m]} 16-${lastDay}, ${year}`);
    }
    return periods;
}

/**
 * Match a log entry (period string or record_date) to a period label.
 */
function matchPeriod(log, periodLabel, type) {
    if (type === 'ar') {
        // AR period field is already like "APR 1-15, 2026"
        return (log.period || '').toUpperCase().trim() === periodLabel.toUpperCase().trim();
    } else {
        // DTR: match by record_date falling within the period range
        // periodLabel = "APR 1-15, 2026"
        const parts = periodLabel.match(/([A-Z]+)\s+(\d+)-(\d+),\s+(\d+)/i);
        if (!parts) return false;
        const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
        const mIdx = months.indexOf(parts[1].toUpperCase());
        if (mIdx === -1) return false;
        const year = parseInt(parts[4]);
        const startDay = parseInt(parts[2]);
        const endDay = parseInt(parts[3]);
        const dateStr = (log.date || '').substring(0, 10);
        const d = new Date(dateStr + 'T00:00:00');
        if (isNaN(d)) return false;
        return d.getFullYear() === year && d.getMonth() === mIdx
            && d.getDate() >= startDay && d.getDate() <= endDay;
    }
}

function statusSymbol(status) {
    if (!status) return '-';
    const s = status.toUpperCase();
    if (s === 'VERIFIED' || s === 'COMPLETED') return '✓';
    if (s === 'REJECTED' || s === 'DECLINED') return 'X';
    if (s === 'PENDING') return '?';
    return s;
}

/**
 * Build the matrix rows for a given log type.
 * Returns { periods: string[], rows: [{name, cells:[symbol]}] }
 */
function buildMatrix(beneficiaries, logsMap, type, periods) {
    const rows = beneficiaries.map(b => {
        const bLogs = logsMap[b.id] || [];
        const cells = periods.map(period => {
            const match = bLogs.find(l => matchPeriod(l, period, type));
            return match ? statusSymbol(match.status) : '-';
        });
        return { name: b.name || b.id, cells };
    });
    return { periods, rows };
}

/**
 * Render a matrix into an HTML table string for Excel export.
 */
function renderMatrixTable(label, matrix, headerColor) {
    const { periods, rows } = matrix;
    const colCount = periods.length + 1;

    let html = `<table border="1" style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:10px;">`;
    // Title row
    html += `<tr><td colspan="${colCount}" style="background:${headerColor};color:#fff;font-weight:bold;font-size:13px;padding:8px 12px;text-transform:uppercase;letter-spacing:1px;">${label}</td></tr>`;
    // Header row: blank + period columns
    html += `<tr><th style="background:${headerColor};color:#fff;padding:6px 10px;min-width:200px;text-align:left;">BENEFICIARY NAME</th>`;
    periods.forEach(p => {
        html += `<th style="background:${headerColor};color:#fff;padding:6px 8px;text-align:center;white-space:nowrap;">${p}</th>`;
    });
    html += `</tr>`;
    // Data rows
    rows.forEach((row, i) => {
        const bg = i % 2 === 0 ? '#ffffff' : '#f5f5f5';
        html += `<tr>`;
        html += `<td style="background:${bg};padding:5px 10px;font-weight:bold;text-transform:uppercase;">${row.name}</td>`;
        row.cells.forEach(cell => {
            const color = cell === '✓' ? '#15803d' : cell === 'X' ? '#dc2626' : '#9ca3af';
            html += `<td style="background:${bg};padding:5px 8px;text-align:center;font-weight:bold;color:${color};">${cell}</td>`;
        });
        html += `</tr>`;
    });
    html += `</table>`;
    return html;
}

/**
 * Main export trigger — called from the LDN page header button.
 */
export async function showLogsExportModal(beneficiaries) {
    const btnBase = "flex flex-col items-center justify-center p-3 rounded-2xl border-2 transition-all cursor-pointer font-black uppercase tracking-widest text-[0.625rem] gap-1.5";
    const totalBeneficiaries = beneficiaries.length;

    const result = await Swal.fire({
        title: '<span class="text-xl font-black text-heading uppercase tracking-tight">Export DTR/AR',
        html: `
            <div class="font-montserrat text-left">
                <p class="text-[0.625rem] font-bold text-gray-400 uppercase tracking-widest mb-4 ps-1">
                    Configure and export logs for <span class="text-royal-blue font-black">${totalBeneficiaries} beneficiaries</span>
                </p>

                <!-- Log Type -->
                <label class="text-[0.625rem] font-bold text-gray-500 uppercase tracking-widest block mb-2 ps-1">Log Type</label>
                <div class="grid grid-cols-3 gap-2 mb-5">
                    <label class="relative block cursor-pointer">
                        <input type="radio" name="exp-type" value="dtr" class="peer sr-only" checked>
                        <div class="${btnBase} border-gray-100 bg-gray-50 text-gray-400 peer-checked:border-blue-500 peer-checked:bg-blue-50 peer-checked:text-blue-600 hover:bg-blue-50/50">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                            <span>DTR</span>
                        </div>
                    </label>
                    <label class="relative block cursor-pointer">
                        <input type="radio" name="exp-type" value="ar" class="peer sr-only">
                        <div class="${btnBase} border-gray-100 bg-gray-50 text-gray-400 peer-checked:border-orange-500 peer-checked:bg-orange-50 peer-checked:text-orange-600 hover:bg-orange-50/50">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                            <span>AR</span>
                        </div>
                    </label>
                    <label class="relative block cursor-pointer">
                        <input type="radio" name="exp-type" value="both" class="peer sr-only">
                        <div class="${btnBase} border-gray-100 bg-gray-50 text-gray-400 peer-checked:border-emerald-500 peer-checked:bg-emerald-50 peer-checked:text-emerald-600 hover:bg-emerald-50/50">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"/></svg>
                            <span>BOTH</span>
                        </div>
                    </label>
                </div>

                <!-- Beneficiary Count -->
                <label class="text-[0.625rem] font-bold text-gray-500 uppercase tracking-widest block mb-2 ps-1">Beneficiaries to Include</label>
                <div class="grid grid-cols-3 gap-2 mb-3" id="count-options">
                    <label class="relative block cursor-pointer">
                        <input type="radio" name="exp-count" value="10" class="peer sr-only" checked>
                        <div class="${btnBase} border-gray-100 bg-gray-50 text-gray-400 peer-checked:border-royal-blue peer-checked:bg-blue-50 peer-checked:text-royal-blue hover:bg-blue-50/50">
                            <span class="text-base">10</span><span>persons</span>
                        </div>
                    </label>
                    <label class="relative block cursor-pointer">
                        <input type="radio" name="exp-count" value="25" class="peer sr-only">
                        <div class="${btnBase} border-gray-100 bg-gray-50 text-gray-400 peer-checked:border-royal-blue peer-checked:bg-blue-50 peer-checked:text-royal-blue hover:bg-blue-50/50">
                            <span class="text-base">25</span><span>persons</span>
                        </div>
                    </label>
                    <label class="relative block cursor-pointer">
                        <input type="radio" name="exp-count" value="custom" class="peer sr-only">
                        <div class="${btnBase} border-gray-100 bg-gray-50 text-gray-400 peer-checked:border-royal-blue peer-checked:bg-blue-50 peer-checked:text-royal-blue hover:bg-blue-50/50">
                            <span class="text-base">✎</span><span>Custom</span>
                        </div>
                    </label>
                </div>
                <div id="custom-count-wrap" class="hidden mb-4">
                    <input type="number" id="exp-custom-count" min="1" max="${totalBeneficiaries}" value="${totalBeneficiaries}"
                        class="block w-full text-sm font-bold text-gray-700 bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 focus:ring-2 focus:ring-royal-blue/20 focus:border-royal-blue outline-none transition"
                        placeholder="Enter number of persons...">
                </div>

                <!-- Year -->
                <label class="text-[0.625rem] font-bold text-gray-500 uppercase tracking-widest block mb-2 ps-1">Year</label>
                <select id="exp-year" class="block w-full text-xs font-bold text-gray-700 bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 mb-4 focus:ring-2 focus:ring-royal-blue/20 focus:border-royal-blue outline-none">
                    <option value="${new Date().getFullYear()}">${new Date().getFullYear()}</option>
                    <option value="${new Date().getFullYear() - 1}">${new Date().getFullYear() - 1}</option>
                </select>
            </div>
        `,
        showCancelButton: true,
        confirmButtonText: '<span class="font-black uppercase tracking-widest cursor-pointer">Generate Excel</span>',
        cancelButtonText: '<span class="font-black uppercase tracking-widest cursor-pointer">Cancel</span>',
        customClass: {
            container: 'font-montserrat',
            popup: 'rounded-[1.5rem] shadow-2xl border border-gray-100 dark:border-slate-800 dark:bg-slate-900',
            confirmButton: 'bg-emerald-600 text-white text-xs px-6 py-2.5 rounded-xl shadow-sm mx-2 cursor-pointer',
            cancelButton: 'bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 text-xs px-6 py-2.5 rounded-xl border border-gray-200 dark:border-slate-600 shadow-sm mx-2 cursor-pointer',
        },
        buttonsStyling: false,
        didOpen: () => {
            // Toggle custom count visibility
            document.querySelectorAll('input[name="exp-count"]').forEach(radio => {
                radio.addEventListener('change', () => {
                    const wrap = document.getElementById('custom-count-wrap');
                    wrap.classList.toggle('hidden', radio.value !== 'custom' || !radio.checked);
                    // Also check currently checked
                    const checked = document.querySelector('input[name="exp-count"]:checked');
                    wrap.classList.toggle('hidden', checked?.value !== 'custom');
                });
            });
        },
        preConfirm: () => {
            const type = document.querySelector('input[name="exp-type"]:checked')?.value || 'dtr';
            const countVal = document.querySelector('input[name="exp-count"]:checked')?.value || '10';
            let count = countVal === 'custom'
                ? parseInt(document.getElementById('exp-custom-count')?.value || totalBeneficiaries, 10)
                : parseInt(countVal, 10);
            if (isNaN(count) || count < 1) count = 10;
            count = Math.min(count, totalBeneficiaries);
            const year = parseInt(document.getElementById('exp-year')?.value || new Date().getFullYear(), 10);
            return { type, count, year };
        }
    });

    if (!result.isConfirmed || !result.value) return;

    const { type, count, year } = result.value;
    const slicedBeneficiaries = beneficiaries.slice(0, count);

    await generateExcelExport(slicedBeneficiaries, type, year);
}

/**
 * Core Excel generation logic (can be called for bulk or single beneficiary)
 */
export async function generateExcelExport(beneficiaries, type, year) {
    Swal.fire({
        title: '<span class="text-lg font-black text-emerald-600 uppercase tracking-tight">Building Excel File</span>',
        html: `<div class="flex flex-col items-center p-4">
            <svg class="animate-spin w-10 h-10 text-emerald-500 mb-4" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span class="text-[0.625rem] font-black text-gray-400 uppercase tracking-widest">Fetching logs from database...</span>
        </div>`,
        showConfirmButton: false,
        allowOutsideClick: false,
        customClass: { popup: 'rounded-[1.5rem] shadow-2xl font-montserrat dark:bg-slate-900 border border-gray-100 dark:border-slate-800' }
    });

    try {
        const periods = generateAllPeriods(year);
        const basePath = getBasePath();

        // Helper: fetch all logs for a given type (no gip_id = all)
        async function fetchAllLogs(logType) {
            const res = await fetch(`${basePath}api/logs.php?type=${logType}`, {
                headers: { 'X-User-Id': (() => { try { return JSON.parse(localStorage.getItem('user'))?.id || ''; } catch (e) { return ''; } })() }
            });
            const json = await res.json();
            return json.success ? (json.logs || []) : [];
        }

        // Build a map: beneficiary_id => logs[]
        // We need to join by beneficiary_id from the API response
        // logs.php returns all logs when no gip_id is passed
        let dtrLogsMap = {}, arLogsMap = {};

        if (type === 'dtr' || type === 'both') {
            const dtrLogs = await fetchAllLogs('dtr');
            dtrLogs.forEach(l => {
                // Use gip_id from API if available, else fallback to numeric id
                const bid = String(l.gip_id || l.beneficiary_id || l.id || '');
                if (!dtrLogsMap[bid]) dtrLogsMap[bid] = [];
                dtrLogsMap[bid].push(l);
            });
        }
        if (type === 'ar' || type === 'both') {
            const arLogs = await fetchAllLogs('ar');
            arLogs.forEach(l => {
                const bid = String(l.gip_id || l.beneficiary_id || l.id || '');
                if (!arLogsMap[bid]) arLogsMap[bid] = [];
                arLogsMap[bid].push(l);
            });
        }

        // Resolve beneficiary numeric IDs
        // slicedBeneficiaries have .id = gip_id string like "ROX-RD-..."
        // We need numeric beneficiary_id — fetch from beneficiaries API if available
        // Fallback: use gip_id as key and match by gip_id from logs if available
        // For now, use numeric beneficiary_id from the data object if present
        const resolvedBeneficiaries = beneficiaries.map(b => ({
            ...b,
            mapKey: String(b.id || b.gip_id || b.beneficiary_id) // Usually b.id is the gip_id in ldngip.js
        }));

        let tablesHtml = '';
        const generatedDate = new Intl.DateTimeFormat('en-PH', { timeZone: 'Asia/Manila', dateStyle: 'long', timeStyle: 'short' }).format(new Date());

        if (type === 'dtr' || type === 'both') {
            const dtrBeneficiariesMap = resolvedBeneficiaries.map(b => ({ ...b, id: b.mapKey }));
            const dtrMatrix = buildMatrix(dtrBeneficiariesMap, dtrLogsMap, 'dtr', periods);
            tablesHtml += `<br>` + renderMatrixTable(`DTR – Daily Time Records (${year})`, dtrMatrix, '#1d4ed8');
        }

        if (type === 'ar' || type === 'both') {
            const arBeneficiariesMap = resolvedBeneficiaries.map(b => ({ ...b, id: b.mapKey }));
            const arMatrix = buildMatrix(arBeneficiariesMap, arLogsMap, 'ar', periods);
            tablesHtml += `<br><br>` + renderMatrixTable(`AR – Accomplishment Reports (${year})`, arMatrix, '#d97706');
        }

        const excelHtml = `
            <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40">
            <head><meta charset="UTF-8">
            <style>
                body { font-family: Arial, sans-serif; font-size: 10px; }
                td, th { border: 1px solid #d1d5db; padding: 4px 8px; }
            </style>
            </head>
            <body>
                <p style="font-size:9px;color:#6b7280;">Generated: ${generatedDate} | DOLE LDNPFO – GIP Monitoring System</p>
                ${tablesHtml}
            </body>
            </html>
        `;

        const blob = new Blob([excelHtml], { type: 'application/vnd.ms-excel' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `LDN_LOGS_${type.toUpperCase()}_${year}.xls`;
        document.body.appendChild(a);
        a.click();
        URL.revokeObjectURL(url);
        document.body.removeChild(a);

        Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'success',
            title: 'Excel file downloaded!',
            showConfirmButton: false,
            timer: 2500
        });
    } catch (err) {
        console.error('[LogsExport] Error:', err);
        Swal.fire('Error', err.message || 'Failed to generate export.', 'error');
    }
}
