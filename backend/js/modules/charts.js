import ApexCharts from 'apexcharts';
import { getBasePath, isSupabaseMode } from './auth.js';
import { apiGet } from './ajax-manager.js';

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

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const match = value.match(new RegExp(`;\\s*${name}=([^;]+)`));
    return match ? decodeURIComponent(match[1]) : null;
}

function setCookie(name, value, days) {
    let date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = `${name}=${encodeURIComponent(value)};expires=${date.toUTCString()};path=/`;
}

let currentWorkforceFilter = getCookie('user_workforce_filter') || 'ALL';
let currentWorkforceLabel = getCookie('user_workforce_label') || 'Overall Stats';
let currentGenderFilter = getCookie('user_gender_filter') || 'ALL';
let currentGenderLabel = getCookie('user_gender_label') || 'All Years';

/**
 * Parse Postgres/PHP date strings coming from the backend.
 * Returns `Date` or `null` (if the string can't be parsed).
 */
function parseChartDate(value) {
    if (!value) return null;
    if (value instanceof Date) return isNaN(value.getTime()) ? null : value;
    if (typeof value !== 'string') return null;

    const v = value.trim();
    if (!v) return null;

    // "YYYY-MM-DD" -> local midnight
    if (/^\d{4}-\d{2}-\d{2}$/.test(v)) {
        const d = new Date(`${v}T00:00:00`);
        return isNaN(d.getTime()) ? null : d;
    }

    // "YYYY-MM-DD HH:MM:SS(.sss)?" -> ISO-like
    if (/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}/.test(v)) {
        const fixed = v.replace(' ', 'T');
        const d = new Date(fixed);
        return isNaN(d.getTime()) ? null : d;
    }

    // Fallback (ISO and other browser-friendly strings)
    const d = new Date(v);
    return isNaN(d.getTime()) ? null : d;
}

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
export async function initCharts(forceRefresh = false) {
    // Skip silently when user is not authenticated — charts only render on dashboard
    if (localStorage.getItem('isLoggedIn') !== 'true') return;

    let rawData = [];

    if (forceRefresh) {
        cachedRawData = null;
    }

    if (cachedRawData) {
        rawData = cachedRawData;
    } else {
        // [HYBRID-BRIDGE] Use authorized PHP API to bypass RLS issues in Production
        try {
            const result = await apiGet('api/beneficiaries.php?all=true');
            if (result.success && result.data?.success && result.data?.beneficiaries) {
                rawData = result.data.beneficiaries;
            } else {
                console.debug('[CHARTS] Skipping chart render:', result.data?.error || result.error);
                return;
            }
            cachedRawData = rawData;
        } catch (error) {
            console.debug('[CHARTS] Chart init skipped:', error?.message);
            return;
        }
    }

    if (rawData.length === 0) return;

    // Initialize sidebar user profile from localStorage/session
    initSidebarUser();

    const theme = getThemeColors();

    // Clear existing charts to prevent duplication on theme change
    document.querySelectorAll('[id$="-chart"]').forEach(el => el.innerHTML = '');

    const availableYears = [...new Set(rawData.map(b => {
        // Use startDate primarily for years filtering
        const rawDateStr = b.startDate || b.createdAt;
        const date = parseChartDate(rawDateStr);
        return date ? date.getFullYear().toString() : null;
    }).filter(y => y))].sort((a, b) => b - a);
    populateWorkforceDropdown(availableYears, rawData);
    populateGenderFilterDropdown(availableYears, rawData);

    // Apply Workforce Filter to overall data stats (Total Beneficiaries, Genders, etc.)
    const now = new Date();
    let filteredData = rawData;

    if (currentWorkforceFilter !== 'ALL') {
        filteredData = rawData.filter(b => {
            if (currentWorkforceFilter.includes('D')) {
                const d = parseChartDate(b.createdAt); // X Days filter uses createdAt
                if (!d) return false;
                const days = parseInt(currentWorkforceFilter);
                const pastDate = new Date();
                pastDate.setDate(now.getDate() - days);
                pastDate.setHours(0,0,0,0);
                return d >= pastDate;
            } else if (availableYears.includes(currentWorkforceFilter)) {
                const d = parseChartDate(b.startDate || b.createdAt); // Year filter uses startDate primarily
                if (!d) return false;
                return d.getFullYear().toString() === currentWorkforceFilter;
            }
            return true;
        });
    }

    const totalStats = processBeneficiaryData(rawData); // Static stats for specific cards
    const filteredStats = processBeneficiaryData(filteredData); // Filtered stats for charts/specific cards if needed
    
    // Update summary metrics - we'll customize which are static vs filtered inside this function
    updateSummaryMetrics(totalStats, filteredStats);

    // --- 2. WORKFORCE ADDITION TREND (Filtered) ---
    let timelineLabels = [];
    let intervalType = 'day';

    if (currentWorkforceFilter === 'ALL') {
        intervalType = 'year';
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
            return new Date(d.getTime() - (d.getTimezoneOffset() * 60000)).toISOString().split('T')[0];
        });
    }

    const aggregated = {};
    timelineLabels.forEach(label => aggregated[label] = 0);

    filteredData.forEach(b => {
        const rawDateStr = b.startDate || b.createdAt;
        
        if (rawDateStr) {
            const date = parseChartDate(rawDateStr);
            if (!date) return;

            const yearStr = date.getFullYear().toString();
            const dateStr = new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toISOString().split('T')[0];

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
    const totalAdded = filteredData.length;
    const currentVal = additionData[additionData.length - 1] || 0;
    const prevVal = additionData[additionData.length - 2] || 0;

    let isTrendingUp;
    if (currentWorkforceFilter === 'ALL') {
        const avg = totalAdded / timelineLabels.length;
        isTrendingUp = currentVal >= avg;
    } else {
        isTrendingUp = currentVal >= prevVal;
    }
    
    // Determine dynamic colors based on filter selection
    let chartColor = isTrendingUp ? COLORS.successGreen : COLORS.philippineRed;
    let badgeClass = isTrendingUp ? 'bg-green-500 shadow-green-500/30' : 'bg-red-500 shadow-red-500/30';
    let textClass = isTrendingUp ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400';

    if (currentWorkforceFilter === 'ALL') {
        chartColor = COLORS.successGreen; // Emerald/Success Green for Overall
        badgeClass = 'bg-green-500 shadow-green-500/30';
        textClass = 'text-green-600 dark:text-green-400';
    } else if (currentWorkforceFilter === '7D') {
        chartColor = '#fb923c'; // Light Orange
        badgeClass = 'bg-orange-500 shadow-orange-500/30';
        textClass = 'text-orange-500 dark:text-orange-400';
    } else if (currentWorkforceFilter === '30D') {
        chartColor = '#eab308'; // Solid Yellow
        badgeClass = 'bg-yellow-500 shadow-yellow-500/30';
        textClass = 'text-yellow-600 dark:text-yellow-400';
    } else if (currentWorkforceFilter === '90D') {
        chartColor = '#2563eb'; // Solid Blue
        badgeClass = 'bg-blue-600 shadow-blue-600/30';
        textClass = 'text-blue-600 dark:text-blue-400';
    } else if (availableYears.includes(currentWorkforceFilter)) {
        chartColor = '#f87171'; // Light Red for Years
        badgeClass = 'bg-red-400 shadow-red-400/30';
        textClass = 'text-red-500 dark:text-red-400';
    }

    // Update UI Elements
    document.querySelectorAll('.metric-added-count').forEach(el => {
        el.textContent = totalAdded;
        el.className = `text-3xl sm:text-5xl font-black transition-colors duration-500 leading-none metric-added-count ${textClass}`;
    });

    const growthRate = prevVal > 0 ? Math.round(((currentVal - prevVal) / prevVal) * 100) : (currentVal > 0 ? 100 : 0);
    document.querySelectorAll('.metric-added-rate').forEach(el => el.textContent = (growthRate >= 0 ? '+' : '') + (currentWorkforceFilter === 'ALL' ? 'Growth' : growthRate + '%'));

    const badge = document.getElementById('added-metric-badge');
    if (badge) {
        badge.className = `flex items-center px-3 py-1 text-[10px] sm:text-xs font-black text-white rounded-full shadow-lg transition-all duration-500 border border-white/20 translate-y-1 ${badgeClass}`;
    }

    const icon = document.getElementById('added-metric-icon');
    if (icon) icon.style.transform = isTrendingUp ? 'rotate(0deg)' : 'rotate(180deg)';

    const btnIds = ['dropdownDefaultButton', 'dropdownLastDaysEduButton', 'dropdownLastDays3Button'];
    btnIds.forEach(id => {
        const btn = document.getElementById(id);
        if (btn) {
            // Re-apply SVG to maintain caret arrow
            btn.innerHTML = `${currentWorkforceLabel} <svg class="w-3 h-3 ms-1.5" aria-hidden="true" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7" /></svg>`;
        }
    });

    const statusOptions = {
        chart: {
            height: 250,
            type: "area",
            fontFamily: "Montserrat, sans-serif",
            toolbar: { show: false },
            sparkline: { enabled: false },
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
                    { offset: 0, color: chartColor, opacity: 0.6 },
                    { offset: 100, color: chartColor, opacity: 0.1 }
                ]
            }
        },
        stroke: {
            curve: 'smooth',
            width: 3,
            colors: [chartColor]
        },
        series: [{
            name: "New Beneficiaries",
            data: additionData
        }],
        xaxis: { 
            categories: timelineLabels,
            labels: { show: true, style: { colors: theme.muted, fontSize: '10px', fontWeight: 600 } },
            axisBorder: { show: false },
            axisTicks: { show: false }
        },
        yaxis: { 
            show: true,
            labels: { show: true, style: { colors: theme.muted, fontSize: '10px', fontWeight: 600 } }
        },
        grid: { 
            show: true,
            borderColor: theme.grid,
            strokeDashArray: 4,
            padding: {
                left: 10,
                right: 15,
                top: 0,
                bottom: 0
            }
        },
        colors: [chartColor],
        markers: {
            size: timelineLabels.length > 20 ? 0 : 4,
            colors: [chartColor],
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
    const genderFilteredData = currentGenderFilter === 'ALL'
        ? rawData
        : rawData.filter((b) => {
            const d = parseChartDate(b.startDate || b.createdAt);
            return d && d.getFullYear().toString() === currentGenderFilter;
        });
    const genderStats = processBeneficiaryData(genderFilteredData);

    const genderOptions = {
        series: [genderStats.genders['Female'] || 0, genderStats.genders['Male'] || 0],
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

    // --- 3. EDUCATION PROFILE (Linked to Workforce Filter) ---
    const eduValues = [filteredStats.education["College Grad"], filteredStats.education["College Lvl"], filteredStats.education["HS Grad"], filteredStats.education["Senior High"]];
    
    // Update the sub-metrics for Education section
    const eduMap = { 'College Grad': '.count-college-grad', 'College Lvl': '.count-college-lvl', 'HS Grad': '.count-hs-grad', 'Senior High': '.count-senior-high' };
    Object.entries(eduMap).forEach(([key, sel]) => {
        document.querySelectorAll(sel).forEach(el => el.textContent = filteredStats.education[key] || 0);
    });

    const educationOptions = {
        series: eduValues.map(v => filteredData.length > 0 ? Math.round((v / filteredData.length) * 100) : 0),
        chart: { height: 380, type: 'radialBar', background: theme.cardBg, fontFamily: "Montserrat, sans-serif" },
        plotOptions: {
            radialBar: {
                hollow: { size: '45%' },
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
                chart: { height: 320 },
                plotOptions: { radialBar: { hollow: { size: '30%' }, dataLabels: { value: { fontSize: '14px' } } } }
            }
        }]
    };

    renderChart("education-chart", educationOptions);

    // --- 3.5 EMPLOYMENT STATUS (New Module) ---
    document.querySelectorAll('.count-absorbed').forEach(el => el.textContent = filteredStats.status["ABSORBED"] || 0);
    document.querySelectorAll('.count-ongoing').forEach(el => el.textContent = filteredStats.status["ONGOING"] || 0);

    const statusColumnOptions = {
        series: [{
            name: 'Beneficiaries',
            data: [
                { x: 'Absorbed', y: filteredStats.status["ABSORBED"] || 0, fillWeight: 1 },
                { x: 'Ongoing', y: filteredStats.status["ONGOING"] || 0 },
                { x: 'Expired', y: filteredStats.status["EXPIRED"] || 0 },
                { x: 'Resigned', y: filteredStats.status["RESIGNED"] || 0 }
            ]
        }],
        chart: { 
            type: 'bar', 
            height: 260, 
            fontFamily: "Montserrat, sans-serif", 
            toolbar: { show: false },
            background: 'transparent'
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '65%',
                borderRadius: 10,
                distributed: true,
                dataLabels: { position: 'top' }
            }
        },
        colors: ['#059669', '#6ee7b7', '#CE1126', '#64748b'],
        dropShadow: {
            enabled: true,
            top: 3,
            left: 0,
            blur: 4,
            opacity: 0.22,
            color: '#64748b'
        },
        dataLabels: { 
            enabled: true,
            offsetY: -20,
            style: { fontSize: '12px', fontWeight: '900', colors: [theme.text] }
        },
        legend: { show: false },
        xaxis: {
            categories: ['Absorbed', 'Ongoing', 'Expired', 'Resigned'],
            axisBorder: { show: false },
            axisTicks: { show: false },
            labels: { style: { colors: theme.muted, fontWeight: 700 } }
        },
        yaxis: { show: false },
        grid: { show: false },
        tooltip: {
            theme: isDark() ? 'dark' : 'light',
            y: { formatter: (val) => val + " Beneficiaries" }
        },
        theme: { mode: isDark() ? 'dark' : 'light' }
    };
    renderChart("status-chart", statusColumnOptions);

    // --- 4. JOB ROLES (Top 5) ---
    const sortedRoles = Object.entries(filteredStats.designations).sort((a, b) => b[1] - a[1]).slice(0, 5);
    const jobRolesOptions = {
        series: [{ name: "Beneficiaries", data: sortedRoles.map(r => r[1]), color: chartColor }],
        chart: { type: 'bar', height: 320, toolbar: { show: false }, fontFamily: "Montserrat, sans-serif", background: theme.cardBg },
        plotOptions: { bar: { horizontal: true, columnWidth: '100%', borderRadius: 8, barHeight: '52%' } },
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
                chart: { height: 350 },
                xaxis: { labels: { style: { fontSize: '8px' } } },
                yaxis: { labels: { style: { fontSize: '9px' } } }
            }
        }]
    };

    renderChart("job-roles-chart", jobRolesOptions);

    // --- 5. AGE DEMOGRAPHICS ---
    const ageOptions = {
        series: [{ name: "Beneficiaries", data: Object.values(filteredStats.ages), color: chartColor }],
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
            categories: Object.keys(filteredStats.ages),
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
        ageCount: 0,
        status: { "ABSORBED": 0, "ONGOING": 0, "EXPIRED": 0, "RESIGNED": 0 }
    };

    const now = new Date();
    now.setHours(0,0,0,0);

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

        // Employment Status Parse - Basis: status_id join (remarks) + absorption_log_id join (absorbDate)
        const remarksStr = (b.remarks || b.status_name || '').trim().replace(/\s+/g, '').toUpperCase();
        const hasAbsorbLog = !!b.absorbDate; 

        if (remarksStr.includes('ABSORBED') || hasAbsorbLog) {
            stats.status["ABSORBED"]++;
        } else if (remarksStr.includes('RESIGNED')) {
            stats.status["RESIGNED"]++;
        } else if (remarksStr === 'ONGOING' || remarksStr.includes('ONGOING') || remarksStr.includes('ACTIVE') || (b.status_id == 1)) {
            // Priority 1: Explicitly marked as active in DB
            stats.status["ONGOING"]++;
        } else if (remarksStr.includes('EXPIRED')) {
            stats.status["EXPIRED"]++;
        } else {
            // Auto-fallback logic: only if no explicit status remark exists
            let isExpired = false;
            if (b.endDate) {
                const endD = parseChartDate(b.endDate);
                if (endD && endD < now) isExpired = true;
            }
            if (isExpired) stats.status["EXPIRED"]++;
            else stats.status["ONGOING"]++;
        }

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
 * @param {Object} totalStats - Overall statistics
 * @param {Object} filteredStats - Statistics based on current selection
 */
function updateSummaryMetrics(totalStats, filteredStats) {
    // Top Row Cards - static overall as requested
    const total = Object.values(totalStats.offices).reduce((a, b) => a + b, 0);
    document.querySelectorAll('.metric-total-beneficiaries').forEach(el => el.textContent = total);

    const female = totalStats.genders['Female'] || 0;
    const male = totalStats.genders['Male'] || 0;
    const totalG = female + male;
    const fRatio = totalG > 0 ? Math.round((female / totalG) * 100) + '%' : '0%';
    const mRatio = totalG > 0 ? Math.round((male / totalG) * 100) + '%' : '0%';

    document.querySelectorAll('.metric-female-ratio').forEach(el => el.textContent = fRatio);
    document.querySelectorAll('.metric-male-ratio').forEach(el => el.textContent = mRatio);

    const siteCount = Object.keys(totalStats.offices).length;
    document.querySelectorAll('.metric-deployment-sites').forEach(el => el.textContent = siteCount);

    const avgAge = totalStats.ageCount > 0 ? Math.round(totalStats.totalAge / totalStats.ageCount) : 0;
    document.querySelectorAll('.metric-avg-age').forEach(el => el.textContent = avgAge);
    document.querySelectorAll('.metric-avg-age-range').forEach(el => el.textContent = avgAge + ' YRS');

    // Section specific metrics - filtered by workforce
    const officeTotal = Object.values(filteredStats.designations).reduce((a, b) => a + b, 0);
    let fieldCount = 0;
    Object.entries(filteredStats.designations).forEach(([n, c]) => {
        if (n.toLowerCase().match(/field|driver|maintenance/)) fieldCount += c;
    });
    document.querySelectorAll('.count-office-based').forEach(el => el.textContent = officeTotal - fieldCount);
    document.querySelectorAll('.count-field-based').forEach(el => el.textContent = fieldCount);

    const topRole = Object.entries(filteredStats.designations).sort((a, b) => b[1] - a[1])[0]?.[0] || 'N/A';
    document.querySelectorAll('.metric-top-role').forEach(el => {
        el.dataset.originalTopRole = topRole;
        const showingStatusMode = document.getElementById('status-content-view') && !document.getElementById('status-content-view').classList.contains('hidden');
        el.textContent = showingStatusMode ? 'EMPLOYMENT STATUS' : topRole;
    });
}

/**
 * Populates the Workforce Trend Dropdown dynamically based on data availability
 */
function populateWorkforceDropdown(years, rawData) {
    const list = document.querySelector('#lastDaysdropdown ul');
    if (!list) return;

    // Calculate total beneficiaries overall
    const totalOverall = rawData.length;
    
    // Calculate 7D, 30D, 90D lengths
    const now = new Date();
    const countPastDays = (days) => {
        const pastDate = new Date();
        pastDate.setDate(now.getDate() - days);
        pastDate.setHours(0,0,0,0);
        return rawData.filter(b => {
             const d = parseChartDate(b.createdAt);
             return d && d >= pastDate;
        }).length;
    };
    
    // Yearly counts
    const getYearlyCount = (yearStr) => {
        return rawData.filter(b => {
            const d = parseChartDate(b.startDate || b.createdAt);
            return d && d.getFullYear().toString() === yearStr;
        }).length;
    };

    // Keep basics with nice badges
    let html = `
        <li>
            <a href="javascript:void(0)" onclick="updateWorkforceFilter('ALL', 'Overall Stats')" 
                class="flex items-center justify-between px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors uppercase tracking-widest ${currentWorkforceFilter === 'ALL' ? 'bg-royal-blue/10 text-royal-blue' : 'text-slate-600 dark:text-slate-300'}">
                <span>Overall Stats</span>
                <span class="bg-royal-blue/10 text-royal-blue dark:bg-blue-900/30 dark:text-blue-400 py-0.5 px-2 rounded-full text-[10px] font-black">${totalOverall}</span>
            </a>
        </li>
        <li class="border-t border-slate-100 dark:border-slate-700 my-1"></li>
        <li>
            <a href="javascript:void(0)" onclick="updateWorkforceFilter('7D', 'Last 7 Days')" class="flex items-center justify-between px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors uppercase tracking-widest ${currentWorkforceFilter === '7D' ? 'bg-royal-blue/10 text-royal-blue' : 'text-slate-600 dark:text-slate-300'}">
                <span>Last 7 Days</span>
                <span class="bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400 py-0.5 px-2 rounded-full text-[10px] font-black">${countPastDays(7)}</span>
            </a>
        </li>
        <li>
            <a href="javascript:void(0)" onclick="updateWorkforceFilter('30D', 'Last 30 Days')" class="flex items-center justify-between px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors uppercase tracking-widest ${currentWorkforceFilter === '30D' ? 'bg-royal-blue/10 text-royal-blue' : 'text-slate-600 dark:text-slate-300'}">
                <span>Last 30 Days</span>
                <span class="bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400 py-0.5 px-2 rounded-full text-[10px] font-black">${countPastDays(30)}</span>
            </a>
        </li>
        <li>
            <a href="javascript:void(0)" onclick="updateWorkforceFilter('90D', 'Last 90 Days')" class="flex items-center justify-between px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors uppercase tracking-widest ${currentWorkforceFilter === '90D' ? 'bg-royal-blue/10 text-royal-blue' : 'text-slate-600 dark:text-slate-300'}">
                <span>Last 90 Days</span>
                <span class="bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 py-0.5 px-2 rounded-full text-[10px] font-black">${countPastDays(90)}</span>
            </a>
        </li>
        <li class="border-t border-slate-100 dark:border-slate-700 my-1"></li>
    `;

    // Add dynamic years
    years.forEach(year => {
        const yearCount = getYearlyCount(year);
        html += `
        <li>
            <a href="javascript:void(0)" onclick="updateWorkforceFilter('${year}', 'Year ${year}')" class="flex items-center justify-between px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors uppercase tracking-widest ${currentWorkforceFilter === year ? 'bg-royal-blue/10 text-royal-blue' : 'text-slate-600 dark:text-slate-300'}">
                <span>Year ${year}</span>
                <span class="bg-slate-100 text-slate-600 dark:bg-slate-600/50 dark:text-slate-300 py-0.5 px-2 rounded-full text-[10px] font-black">${yearCount}</span>
            </a>
        </li>`;
    });

    list.innerHTML = html;
}

function populateGenderFilterDropdown(years, rawData) {
    const list = document.getElementById('gender-filter-options');
    const btn = document.getElementById('gender-filter-button');
    if (!list || !btn) return;

    const totalOverall = rawData.length;
    const getYearlyCount = (yearStr) => rawData.filter((b) => {
        const d = parseChartDate(b.startDate || b.createdAt);
        return d && d.getFullYear().toString() === yearStr;
    }).length;

    let html = `
        <li>
            <a href="javascript:void(0)" onclick="updateGenderFilter('ALL', 'All Years')"
                class="flex items-center justify-between px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors uppercase tracking-widest ${currentGenderFilter === 'ALL' ? 'bg-royal-blue/10 text-royal-blue' : 'text-slate-600 dark:text-slate-300'}">
                <span>All Years</span>
                <span class="bg-royal-blue/10 text-royal-blue dark:bg-blue-900/30 dark:text-blue-400 py-0.5 px-2 rounded-full text-[10px] font-black">${totalOverall}</span>
            </a>
        </li>
        <li class="border-t border-slate-100 dark:border-slate-700 my-1"></li>
    `;

    years.forEach((year) => {
        const yearCount = getYearlyCount(year);
        html += `
        <li>
            <a href="javascript:void(0)" onclick="updateGenderFilter('${year}', 'Year ${year}')"
                class="flex items-center justify-between px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors uppercase tracking-widest ${currentGenderFilter === year ? 'bg-royal-blue/10 text-royal-blue' : 'text-slate-600 dark:text-slate-300'}">
                <span>Year ${year}</span>
                <span class="bg-slate-100 text-slate-600 dark:bg-slate-600/50 dark:text-slate-300 py-0.5 px-2 rounded-full text-[10px] font-black">${yearCount}</span>
            </a>
        </li>
        `;
    });

    list.innerHTML = html;
    btn.innerHTML = `${currentGenderLabel} <svg class="w-3 h-3 ms-1.5" aria-hidden="true" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7" /></svg>`;
}

/**
 * Update Workforce Trend Filter
 */
export function updateWorkforceFilter(filter, label) {
    currentWorkforceFilter = filter;
    currentWorkforceLabel = label;
    setCookie('user_workforce_filter', filter, 30);
    setCookie('user_workforce_label', label, 30);

    // Auto-hide Flowbite Dropdown
    const dropdownIds = ['lastDaysdropdown'];
    dropdownIds.forEach(id => {
        const dropdownEl = document.getElementById(id);
        if (dropdownEl && window.FlowbiteInstances) {
            const dropdown = window.FlowbiteInstances.getInstance('Dropdown', id);
            if (dropdown) dropdown.hide();
        } else if (dropdownEl) {
            dropdownEl.classList.add('hidden');
        }
    });

    initCharts(); // Re-render
}

export function updateGenderFilter(filter, label) {
    currentGenderFilter = filter;
    currentGenderLabel = label;
    setCookie('user_gender_filter', filter, 30);
    setCookie('user_gender_label', label, 30);

    const dropdownEl = document.getElementById('gender-filter-dropdown');
    if (dropdownEl && window.FlowbiteInstances) {
        const dropdown = window.FlowbiteInstances.getInstance('Dropdown', 'gender-filter-dropdown');
        if (dropdown) dropdown.hide();
    } else if (dropdownEl) {
        dropdownEl.classList.add('hidden');
    }

    initCharts();
}

/**
 * Dynamically initialize the sidebar user profile from cached login data
 */
export function initSidebarUser() {
    const userData = localStorage.getItem('user');
    if (!userData) return;

    try {
        const user = JSON.parse(userData);
        const name = user.full_name || user.username || 'System User';
        const email = user.email || (user.username ? `${user.username}@dole.gov.ph` : 'user@dole.gov.ph');
        const profilePic = user.profile_picture_path;
        
        // Extract Initials
        const initials = name.trim().split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase() || '??';

        // Update Text Elements
        document.querySelectorAll('.sidebar-user-name').forEach(el => el.textContent = name);
        document.querySelectorAll('.sidebar-user-email').forEach(el => el.textContent = email);

        // Update Avatars
        document.querySelectorAll('.sidebar-user-avatar').forEach(container => {
            const initialEl = container.querySelector('.sidebar-avatar-initials');
            const imgEl = container.querySelector('.sidebar-avatar-img');

            if (profilePic && imgEl) {
                const basePath = getBasePath();
                // Ensure profilePic doesn't already have basePath
                const src = profilePic.startsWith('http') ? profilePic : (basePath + profilePic.replace(/^\//, ''));
                imgEl.src = src;
                imgEl.classList.remove('hidden');
                if (initialEl) initialEl.classList.add('hidden');
            } else if (initialEl) {
                initialEl.textContent = initials;
                initialEl.classList.remove('hidden');
                if (imgEl) imgEl.classList.add('hidden');
            }
        });
    } catch (e) {
        console.error('Failed to parse user data for sidebar:', e);
    }
}

window.updateWorkforceFilter = updateWorkforceFilter;
window.updateGenderFilter = updateGenderFilter;

// --- Auto-Reload on Theme Change or Data Sync ---
document.addEventListener('themeChanged', () => {
    // Small delay to ensure Tailwind classes are fully applied
    setTimeout(() => initCharts(), 50);
});

window.addEventListener('dataSynced', () => {
    console.log('[Charts] Data synced detected, refreshing analytics...');
    initCharts(true); // Force refresh from remote
});
