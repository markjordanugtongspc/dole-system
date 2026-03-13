import ApexCharts from 'apexcharts';
import { getBasePath } from './auth.js';

/**
 * 2026 LDNPFO GIP MONITORING - Data Visualization Module
 * Focuses on statistical aggregation excluding PII
 */

// --- Global Theme Helpers ---
const isDark = () => document.documentElement.classList.contains('dark');

const getThemeColors = () => isDark() ? {
    text: '#ffffff', // Pure white (Shining)
    muted: '#94a3b8', // slate-400
    grid: '#334155', // slate-700
    cardBg: '#1e293b', // slate-800
    tooltipBg: '#1e293b',
    tooltipBorder: '#334155'
} : {
    text: '#0f172a', // user's light mode text
    muted: '#64748b', // user's light mode muted
    grid: '#f1f5f9', // user's light mode grid
    cardBg: '#f8fafc', // Adjusted to match dashboard container exactly
    tooltipBg: '#ffffff',
    tooltipBorder: '#e2e8f0'
};

// --- DOLE Branding Colors ---
const COLORS = {
    royalBlue: () => isDark() ? '#60a5fa' : '#0038A8',
    philippineRed: '#CE1126',
    goldenYellow: '#FCD116',
    successGreen: '#22c55e',
    mutedSlate: () => isDark() ? '#94a3b8' : '#94a3b8' // Using original value for education chart
};

// Data Cache to avoid re-fetching on theme change
let cachedRawData = null;
let currentWorkforceFilter = 'ALL';
let currentWorkforceLabel = 'Overall Stats';

// --- Performance Target Config ---
const MUNICIPALITY_TARGETS = {
    'ILIGAN': 120,
    'KAUSWAGAN': 50,
    'BACOLOD': 45,
    'MAIGO': 35,
    'KOLAMBUGAN': 50,
    'TUBOD': 65,
    'BAROY': 40,
    'SALVADOR': 35,
    'KAPATAGAN': 75,
    'LALA': 60,
    'SAPAD': 35,
    'BALOI': 40
};

/**
 * Initialize all dashboard charts
 */
export async function initCharts() {
    let rawData = [];

    if (cachedRawData) {
        rawData = cachedRawData;
    } else {
        try {
            const response = await fetch(`${getBasePath()}api/beneficiaries.php`);
            const result = await response.json();
            if (result.success) {
                rawData = result.beneficiaries || [];
                cachedRawData = rawData; // Cache it
            } else {
                console.error('Failed to load chart data:', result.error);
                return;
            }
        } catch (error) {
            console.error('Error fetching chart data:', error);
            return;
        }
    }

    if (rawData.length === 0) return;

    // Clear existing charts to prevent duplication on theme change
    document.querySelectorAll('[id$="-chart"]').forEach(el => el.innerHTML = '');

    const theme = getThemeColors();
    const stats = processBeneficiaryData(rawData);
    updateSummaryMetrics(stats);

    // --- 1. DYNAMIC YEAR DETECTION & DROPDOWN POPULATION ---
    const availableYears = [...new Set(rawData.map(b => {
        const d = b.startDate || b.createdAt;
        return d ? new Date(d).getFullYear().toString() : null;
    }).filter(y => y))].sort((a, b) => b - a);
    populateWorkforceDropdown(availableYears);

    // --- 2. WORKFORCE ADDITION TREND (Filtered) ---
    const now = new Date();
    let timeframeData = [];
    let timelineLabels = [];
    let intervalType = 'day';

    if (currentWorkforceFilter === 'ALL') {
        intervalType = 'year';
        // Always show the full journey from 2020 to current year
        const startYear = 2020;
        const targetYear = new Date().getFullYear();
        for (let y = startYear; y <= targetYear; y++) {
            timelineLabels.push(y.toString());
        }
    } else if (availableYears.includes(currentWorkforceFilter)) {
        intervalType = 'day';
        timelineLabels = ['Q1', 'Q2', 'Q3', 'Q4'];
    } else {
        intervalType = 'day';
        const days = parseInt(currentWorkforceFilter) || 7;
        timelineLabels = Array.from({ length: days }, (_, i) => {
            const d = new Date();
            d.setDate(now.getDate() - (days - 1 - i));
            return d.toISOString().split('T')[0];
        });
    }

    const aggregated = {};
    timelineLabels.forEach(label => aggregated[label] = 0);

    rawData.forEach(b => {
        const rawDateStr = b.startDate || b.createdAt;
        if (rawDateStr) {
            const date = new Date(rawDateStr);
            const yearStr = date.getFullYear().toString();
            const dateStr = (typeof rawDateStr === 'string' && rawDateStr.includes('T')) ? rawDateStr.split('T')[0] : date.toISOString().split('T')[0];

            if (currentWorkforceFilter === 'ALL') {
                if (aggregated.hasOwnProperty(yearStr)) aggregated[yearStr]++;
            } else if (currentWorkforceFilter.includes('D')) {
                if (aggregated.hasOwnProperty(dateStr)) aggregated[dateStr]++;
            } else if (yearStr === currentWorkforceFilter) {
                const q = 'Q' + (Math.floor(date.getMonth() / 3) + 1);
                if (aggregated.hasOwnProperty(q)) aggregated[q]++;
            }
        }
    });

    const additionData = Object.values(aggregated);
    const totalAdded = additionData.reduce((a, b) => a + b, 0);
    const currentVal = additionData[additionData.length - 1] || 0;
    const prevVal = additionData[additionData.length - 2] || 0;

    // Trend logic: in ALL mode, compare against historical average
    let isTrendingUp;
    if (currentWorkforceFilter === 'ALL') {
        const avg = totalAdded / timelineLabels.length;
        isTrendingUp = currentVal >= avg;
    } else {
        isTrendingUp = currentVal >= prevVal;
    }

    // Update UI Elements
    document.querySelectorAll('.metric-added-count').forEach(el => {
        el.textContent = totalAdded;
        el.className = `text-3xl sm:text-5xl font-black transition-colors duration-500 leading-none metric-added-count ${isTrendingUp ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`;
    });

    const growthRate = prevVal > 0 ? Math.round(((currentVal - prevVal) / prevVal) * 100) : (currentVal > 0 ? 100 : 0);
    document.querySelectorAll('.metric-added-rate').forEach(el => el.textContent = (growthRate >= 0 ? '+' : '') + (currentWorkforceFilter === 'ALL' ? 'Growth' : growthRate + '%'));

    const badge = document.getElementById('added-metric-badge');
    if (badge) {
        badge.className = `flex items-center px-3 py-1 text-[10px] sm:text-xs font-black text-white rounded-full shadow-lg transition-all duration-500 border border-white/20 translate-y-1 ${isTrendingUp ? 'bg-green-500 shadow-green-500/30' : 'bg-red-500 shadow-red-500/30'}`;
    }

    const icon = document.getElementById('added-metric-icon');
    if (icon) icon.style.transform = isTrendingUp ? 'rotate(0deg)' : 'rotate(180deg)';

    const btn = document.getElementById('dropdownDefaultButton');
    if (btn) btn.innerHTML = `${currentWorkforceLabel} <svg class="w-3 h-3 ms-1.5" aria-hidden="true" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7" /></svg>`;

    const statusOptions = {
        chart: {
            height: 160,
            type: "area",
            fontFamily: "Montserrat, sans-serif",
            toolbar: { show: false },
            sparkline: { enabled: true },
            background: 'transparent'
        },
        theme: { mode: isDark() ? 'dark' : 'light' },
        fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.6,
                opacityTo: 0.1,
                stops: [0, 90, 100],
                colorStops: [
                    { offset: 0, color: isTrendingUp ? COLORS.successGreen : COLORS.philippineRed, opacity: 0.6 },
                    { offset: 100, color: isTrendingUp ? COLORS.successGreen : COLORS.philippineRed, opacity: 0.1 }
                ]
            }
        },
        stroke: {
            curve: 'smooth',
            width: 3,
            colors: [isTrendingUp ? COLORS.successGreen : COLORS.philippineRed]
        },
        series: [{
            name: "New Beneficiaries",
            data: additionData
        }],
        xaxis: { categories: timelineLabels },
        yaxis: { show: false },
        grid: { 
            show: false,
            padding: {
                left: 10,
                right: 35, // Force padding to stop right-side overlap
                top: 0,
                bottom: 0
            }
        },
        colors: [isTrendingUp ? COLORS.successGreen : COLORS.philippineRed],
        markers: {
            size: timelineLabels.length > 20 ? 0 : 4,
            colors: [isTrendingUp ? COLORS.successGreen : COLORS.philippineRed],
            strokeColors: theme.cardBg,
            strokeWidth: 2,
            hover: { size: 6 }
        },
        tooltip: {
            theme: isDark() ? 'dark' : 'light',
            y: { title: { formatter: () => 'Added:' } }
        }
    };

    renderChart("workforce-chart", statusOptions);

    // --- 2. GENDER DEMOGRAPHICS ---
    const genderOptions = {
        series: [stats.genders['Female'] || 0, stats.genders['Male'] || 0],
        chart: { height: 320, type: 'donut', fontFamily: "Montserrat, sans-serif", background: theme.cardBg },
        colors: [COLORS.philippineRed, COLORS.royalBlue()],
        labels: ["Female", "Male"],
        plotOptions: {
            pie: {
                donut: {
                    size: '75%',
                    labels: {
                        show: true,
                        name: { show: true, fontSize: '12px', fontWeight: 600, color: theme.muted },
                        value: { show: true, fontSize: '24px', fontWeight: 900, color: theme.text, formatter: (val) => val },
                        total: { show: true, label: 'TOTAL', fontSize: '10px', fontWeight: 800, color: theme.muted, formatter: (w) => w.globals.seriesTotals.reduce((a, b) => a + b, 0) }
                    }
                }
            }
        },
        dataLabels: { enabled: false },
        legend: { show: false },
        stroke: { colors: [theme.cardBg], width: 4 },
        theme: { mode: isDark() ? 'dark' : 'light' },
        responsive: [{
            breakpoint: 640,
            options: {
                chart: { height: 260 },
                plotOptions: { pie: { donut: { size: '70%', labels: { value: { fontSize: '18px' } } } } }
            }
        }]
    };

    renderChart("gender-chart", genderOptions);

    // --- 3. EDUCATION PROFILE ---
    const eduValues = [stats.education["College Grad"], stats.education["College Lvl"], stats.education["HS Grad"], stats.education["Senior High"]];
    const educationOptions = {
        series: eduValues.map(v => Math.round((v / rawData.length) * 100)),
        chart: { height: 300, type: 'radialBar', background: theme.cardBg },
        plotOptions: {
            radialBar: {
                hollow: { size: '30%' },
                dataLabels: {
                    name: { fontSize: '11px', fontWeight: 700, color: theme.muted, offsetY: -5 },
                    value: { fontSize: '16px', fontWeight: 900, color: theme.text, offsetY: 5 },
                    total: { show: true, label: 'GRADUATES', color: theme.muted }
                },
                track: { background: theme.grid, strokeWidth: '95%' }
            }
        },
        colors: [COLORS.royalBlue(), COLORS.goldenYellow, COLORS.philippineRed, COLORS.mutedSlate()],
        labels: ['Col. Grad', 'Col. Lvl', 'HS Grad', 'Snr High'],
        theme: { mode: isDark() ? 'dark' : 'light' },
        responsive: [{
            breakpoint: 640,
            options: {
                chart: { height: 260 },
                plotOptions: { radialBar: { hollow: { size: '20%' }, dataLabels: { value: { fontSize: '14px' } } } }
            }
        }]
    };

    renderChart("education-chart", educationOptions);

    // --- 4. JOB ROLES (Top 5) ---
    const sortedRoles = Object.entries(stats.designations).sort((a, b) => b[1] - a[1]).slice(0, 5);
    const jobRolesOptions = {
        series: [{ name: "Beneficiaries", data: sortedRoles.map(r => r[1]), color: COLORS.royalBlue() }],
        chart: { type: 'bar', height: 180, toolbar: { show: false }, fontFamily: "Montserrat, sans-serif", background: theme.cardBg },
        plotOptions: { bar: { horizontal: true, columnWidth: '100%', borderRadius: 4, barHeight: '60%' } },
        dataLabels: { enabled: false },
        xaxis: {
            categories: sortedRoles.map(r => r[0]),
            labels: { show: true, style: { fontWeight: 600, colors: theme.muted, fontSize: '9px' } },
            axisBorder: { show: false },
            axisTicks: { show: false }
        },
        yaxis: { labels: { show: true, style: { fontWeight: 700, colors: theme.text, fontSize: '10px' } } },
        grid: {
            borderColor: theme.grid,
            strokeDashArray: 4,
            padding: { left: -15, right: 0 }
        },
        theme: { mode: isDark() ? 'dark' : 'light' },
        responsive: [{
            breakpoint: 640,
            options: {
                chart: { height: 160 },
                xaxis: { labels: { style: { fontSize: '8px' } } },
                yaxis: { labels: { style: { fontSize: '9px' } } }
            }
        }]
    };

    renderChart("job-roles-chart", jobRolesOptions);

    // --- 5. AGE DEMOGRAPHICS ---
    const ageOptions = {
        series: [{ name: "Beneficiaries", data: Object.values(stats.ages), color: COLORS.royalBlue() }],
        chart: {
            type: 'area',
            height: 220,
            toolbar: { show: false },
            fontFamily: "Montserrat, sans-serif",
            background: theme.cardBg
        },
        stroke: { curve: 'smooth', width: 3 },
        fill: { type: 'gradient', gradient: { shadeIntensity: 1, opacityFrom: 0.4, opacityTo: 0.1 } },
        dataLabels: {
            enabled: true,
            offsetY: -10,
            offsetX: 0,
            style: { fontSize: '9px', fontWeight: '800' },
            background: { enabled: true, padding: 3, borderRadius: 4, borderWidth: 0, opacity: 0.9 }
        },
        xaxis: {
            categories: Object.keys(stats.ages),
            labels: { style: { fontWeight: 600, colors: theme.muted, fontSize: '10px' } },
            axisBorder: { show: false }
        },
        yaxis: { labels: { style: { fontWeight: 600, colors: theme.muted, fontSize: '10px' } } },
        grid: {
            borderColor: theme.grid,
            strokeDashArray: 6,
            padding: { left: 20, right: 60 }
        },
        theme: { mode: isDark() ? 'dark' : 'light' },
        responsive: [{
            breakpoint: 640,
            options: {
                chart: { height: 160 }
            }
        }]
    };

    renderChart("age-chart", ageOptions);

    // --- 6. PERFORMANCE GAP ANALYSIS (Actual vs Target) ---
    const performanceStats = processPerformanceData(rawData);
    updatePerformanceSummary(performanceStats);

    const perfGapOptions = {
        series: [{
            name: 'Actual Beneficiaries',
            data: Object.values(performanceStats.municipalityData).map(d => d.actual)
        }, {
            name: 'Target Slots',
            data: Object.values(performanceStats.municipalityData).map(d => d.target)
        }],
        chart: {
            type: 'bar',
            height: 350,
            fontFamily: 'Montserrat, sans-serif',
            toolbar: { show: false },
            background: theme.cardBg
        },
        theme: { mode: isDark() ? 'dark' : 'light' },
        colors: [COLORS.royalBlue(), isDark() ? '#334155' : '#E2E8F0'],
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '55%',
                borderRadius: 8,
            },
        },
        dataLabels: { enabled: false },
        stroke: { show: true, width: 2, colors: ['transparent'] },
        xaxis: {
            categories: Object.keys(performanceStats.municipalityData),
            labels: { style: { fontWeight: 600, colors: theme.muted, fontSize: '9px' } },
            axisBorder: { show: false },
            axisTicks: { show: false }
        },
        yaxis: { labels: { style: { fontWeight: 600, colors: theme.muted } } },
        legend: { show: false },
        fill: { opacity: 1 },
        grid: {
            borderColor: theme.grid,
            strokeDashArray: 4,
            yaxis: { lines: { show: true } }
        }
    };

    renderChart("performance-gap-chart", perfGapOptions);
}

/**
 * Helper to render/re-render chart
 */
function renderChart(id, options) {
    const el = document.getElementById(id);
    if (!el) return;
    el.innerHTML = '';
    const chart = new ApexCharts(el, options);
    chart.render();
}

/**
 * Process Raw Beneficiary Data into Stats
 */
function processBeneficiaryData(data) {
    const stats = {
        offices: {},
        genders: { Female: 0, Male: 0, Unknown: 0 },
        education: { "College Grad": 0, "College Lvl": 0, "HS Grad": 0, "Senior High": 0 },
        designations: {},
        ages: { "18-24": 0, "25-30": 0, "31-40": 0, "41+": 0 },
        totalAge: 0,
        ageCount: 0
    };

    data.forEach(b => {
        const office = b.office || 'Unassigned';
        stats.offices[office] = (stats.offices[office] || 0) + 1;

        const gender = (b.gender || 'Unknown').trim();
        const simplified = gender === 'F' || gender === 'Female' ? 'Female' : (gender === 'M' || gender === 'Male' ? 'Male' : 'Unknown');
        stats.genders[simplified]++;

        const edu = (b.education || '').toUpperCase();
        if (edu.includes('GRADUATE') || edu.includes('DEGREE') || edu.includes('BS') || edu.includes('AB')) stats.education["College Grad"]++;
        else if (edu.includes('COLLEGE') || edu.includes('LEVEL') || edu.includes('UNIT')) stats.education["College Lvl"]++;
        else if (edu.includes('SENIOR')) stats.education["Senior High"]++;
        else if (edu.includes('HS') || edu.includes('HIGH')) stats.education["HS Grad"]++;

        const design = b.designation || 'General Support';
        stats.designations[design] = (stats.designations[design] || 0) + 1;

        const age = parseInt(b.age);
        if (!isNaN(age)) {
            stats.totalAge += age;
            stats.ageCount++;
            if (age >= 18 && age <= 24) stats.ages["18-24"]++;
            else if (age >= 25 && age <= 30) stats.ages["25-30"]++;
            else if (age >= 31 && age <= 40) stats.ages["31-40"]++;
            else if (age >= 41) stats.ages["41+"]++;
        }
    });
    return stats;
}

/**
 * Process Performance specific data
 */
function processPerformanceData(data) {
    const perf = {
        municipalityData: {},
        totalTarget: 0,
        totalActual: 0,
        retention: { count: 0, resign: 0 },
        velocity: { totalDays: 0, count: 0 }
    };

    // Initialize municipality data from targets
    Object.entries(MUNICIPALITY_TARGETS).forEach(([mun, target]) => {
        perf.municipalityData[mun] = { actual: 0, target: target };
        perf.totalTarget += target;
    });

    data.forEach(b => {
        // 1. Map to municipality
        const office = (b.office || '').toUpperCase();
        let matchedMunicipality = 'OTHER';

        for (const mun in MUNICIPALITY_TARGETS) {
            if (office.includes(mun)) {
                matchedMunicipality = mun;
                break;
            }
        }

        if (perf.municipalityData[matchedMunicipality]) {
            perf.municipalityData[matchedMunicipality].actual++;
            perf.totalActual++;
        }

        // 2. Retention Stats
        const status = (b.remarks || 'ONGOING').toUpperCase();
        if (status === 'RESIGNED') perf.retention.resign++;
        else perf.retention.count++;

        // 3. Velocity Stats (Application to Start Date)
        if (b.createdAt && b.startDate) {
            const created = new Date(b.createdAt);
            const started = new Date(b.startDate);
            const diffDays = Math.ceil((started - created) / (1000 * 60 * 60 * 24));
            if (diffDays >= 0 && diffDays < 180) { // filter outliers
                perf.velocity.totalDays += diffDays;
                perf.velocity.count++;
            }
        }
    });

    return perf;
}

/**
 * Update Performance Summary metrics
 */
function updatePerformanceSummary(perf) {
    // 1. Utilization
    const utilRate = perf.totalTarget > 0 ? ((perf.totalActual / perf.totalTarget) * 100).toFixed(1) : 0;
    document.querySelectorAll('.metric-utilization-rate').forEach(el => {
        el.textContent = utilRate + '%';
        // Adjust the progress bar in the performance view
        const bar = el.parentElement?.nextElementSibling?.firstElementChild;
        if (bar) bar.style.width = utilRate + '%';
    });

    // 2. Velocity
    const avgVelocity = perf.velocity.count > 0 ? (perf.velocity.totalDays / perf.velocity.count).toFixed(1) : '14.2';
    document.querySelectorAll('.metric-velocity-avg').forEach(el => el.textContent = avgVelocity);

    // 3. Retention
    const totalRetentionSet = perf.retention.count + perf.retention.resign;
    const retentionRate = totalRetentionSet > 0 ? ((perf.retention.count / totalRetentionSet) * 100).toFixed(1) : '100';
    document.querySelectorAll('.metric-retention-rate').forEach(el => el.textContent = retentionRate + '%');
}

/**
 * Update Summary Metrics
 */
function updateSummaryMetrics(stats) {
    const total = Object.values(stats.offices).reduce((a, b) => a + b, 0);
    document.querySelectorAll('.metric-total-beneficiaries').forEach(el => el.textContent = total);

    const female = stats.genders['Female'] || 0;
    const male = stats.genders['Male'] || 0;
    const totalG = female + male;
    const fRatio = totalG > 0 ? Math.round((female / totalG) * 100) + '%' : '0%';
    const mRatio = totalG > 0 ? Math.round((male / totalG) * 100) + '%' : '0%';

    document.querySelectorAll('.metric-female-ratio').forEach(el => el.textContent = fRatio);
    document.querySelectorAll('.metric-male-ratio').forEach(el => el.textContent = mRatio);

    const siteCount = Object.keys(stats.offices).length;
    document.querySelectorAll('.metric-deployment-sites').forEach(el => el.textContent = siteCount);

    const avgAge = stats.ageCount > 0 ? Math.round(stats.totalAge / stats.ageCount) : 0;
    document.querySelectorAll('.metric-avg-age').forEach(el => el.textContent = avgAge);
    document.querySelectorAll('.metric-avg-age-range').forEach(el => el.textContent = avgAge + ' YRS');

    const eduMap = { 'College Grad': '.count-college-grad', 'College Lvl': '.count-college-lvl', 'HS Grad': '.count-hs-grad', 'Senior High': '.count-senior-high' };
    Object.entries(eduMap).forEach(([key, sel]) => {
        document.querySelectorAll(sel).forEach(el => el.textContent = stats.education[key] || 0);
    });

    const officeTotal = Object.values(stats.designations).reduce((a, b) => a + b, 0);
    let fieldCount = 0;
    Object.entries(stats.designations).forEach(([n, c]) => {
        if (n.toLowerCase().match(/field|driver|maintenance/)) fieldCount += c;
    });
    document.querySelectorAll('.count-office-based').forEach(el => el.textContent = officeTotal - fieldCount);
    document.querySelectorAll('.count-field-based').forEach(el => el.textContent = fieldCount);

    const topRole = Object.entries(stats.designations).sort((a, b) => b[1] - a[1])[0]?.[0] || 'N/A';
    document.querySelectorAll('.metric-top-role').forEach(el => el.textContent = topRole);
}

/**
 * Populates the Workforce Trend Dropdown dynamically based on data availability
 */
function populateWorkforceDropdown(years) {
    const list = document.querySelector('#lastDaysdropdown ul');
    if (!list) return;

    // Keep basics
    let html = `
        <li><a href="javascript:void(0)" onclick="updateWorkforceFilter('ALL', 'Overall Stats')" class="block px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors uppercase tracking-widest ${currentWorkforceFilter === 'ALL' ? 'bg-royal-blue/10 text-royal-blue' : ''}">Overall Stats</a></li>
        <li class="border-t border-slate-100 dark:border-slate-700 my-1"></li>
        <li><a href="javascript:void(0)" onclick="updateWorkforceFilter('7D', 'Last 7 Days')" class="block px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors uppercase tracking-widest ${currentWorkforceFilter === '7D' ? 'bg-royal-blue/10 text-royal-blue' : ''}">Last 7 Days</a></li>
        <li><a href="javascript:void(0)" onclick="updateWorkforceFilter('30D', 'Last 30 Days')" class="block px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors uppercase tracking-widest ${currentWorkforceFilter === '30D' ? 'bg-royal-blue/10 text-royal-blue' : ''}">Last 30 Days</a></li>
        <li><a href="javascript:void(0)" onclick="updateWorkforceFilter('90D', 'Last 90 Days')" class="block px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors uppercase tracking-widest ${currentWorkforceFilter === '90D' ? 'bg-royal-blue/10 text-royal-blue' : ''}">Last 90 Days</a></li>
        <li class="border-t border-slate-100 dark:border-slate-700 my-1"></li>
    `;

    // Add dynamic years
    years.forEach(year => {
        html += `<li><a href="javascript:void(0)" onclick="updateWorkforceFilter('${year}', 'Year ${year}')" class="block px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors uppercase tracking-widest ${currentWorkforceFilter === year ? 'bg-royal-blue/10 text-royal-blue' : ''}">Year ${year}</a></li>`;
    });

    list.innerHTML = html;
}

/**
 * Update Workforce Trend Filter
 */
export function updateWorkforceFilter(filter, label) {
    currentWorkforceFilter = filter;
    currentWorkforceLabel = label;

    // Auto-hide Flowbite Dropdown
    const dropdownEl = document.getElementById('lastDaysdropdown');
    if (dropdownEl && window.FlowbiteInstances) {
        const dropdown = window.FlowbiteInstances.getInstance('Dropdown', 'lastDaysdropdown');
        if (dropdown) dropdown.hide();
    } else if (dropdownEl) {
        // Fallback for direct DOM manipulation if instance isn't available
        dropdownEl.classList.add('hidden');
    }

    initCharts(); // Re-render
}

window.updateWorkforceFilter = updateWorkforceFilter;

// --- Auto-Reload on Theme Change ---
document.addEventListener('themeChanged', () => {
    // Small delay to ensure Tailwind classes are fully applied
    setTimeout(() => initCharts(), 50);
});
