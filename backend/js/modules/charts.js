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
    cardBg: '#ffffff',
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

/**
 * Initialize all dashboard charts
 */
export async function initCharts() {
    let rawData = [];
    try {
        const response = await fetch(`${getBasePath()}api/beneficiaries.php`);
        const result = await response.json();
        if (result.success) {
            rawData = result.beneficiaries || [];
        } else {
            console.error('Failed to load chart data:', result.error);
            return;
        }
    } catch (error) {
        console.error('Error fetching chart data:', error);
        return;
    }

    if (rawData.length === 0) return;

    const theme = getThemeColors();
    const stats = processBeneficiaryData(rawData);
    updateSummaryMetrics(stats);

    // --- 1. WORKFORCE DISTRIBUTION (Employment Status) ---
    const statusCounts = { 'ONGOING': 0, 'EXPIRED': 0, 'ABSORBED': 0, 'RESIGNED': 0 };
    rawData.forEach(b => {
        const remarks = (b.remarks || 'ONGOING').toUpperCase().trim();
        if (statusCounts.hasOwnProperty(remarks)) statusCounts[remarks]++;
        else statusCounts['ONGOING']++;
    });

    const activeRate = rawData.length > 0 ? Math.round((statusCounts['ONGOING'] / rawData.length) * 100) : 0;
    document.querySelectorAll('.metric-active-count').forEach(el => el.textContent = statusCounts['ONGOING']);
    document.querySelectorAll('.metric-active-rate').forEach(el => el.textContent = activeRate + '%');

    const statusOptions = {
        chart: {
            height: "100%",
            type: "area",
            fontFamily: "Montserrat, sans-serif",
            toolbar: { show: false },
            sparkline: { enabled: true },
            background: theme.cardBg
        },
        theme: { mode: isDark() ? 'dark' : 'light' },
        fill: {
            type: "gradient",
            gradient: { shadeIntensity: 1, opacityFrom: 0.45, opacityTo: 0.05, stops: [20, 100] }
        },
        stroke: { curve: 'smooth', width: 3 },
        series: [{
            name: "Beneficiaries",
            data: Object.values(statusCounts),
            color: COLORS.successGreen
        }],
        xaxis: { categories: Object.keys(statusCounts), labels: { show: false }, axisBorder: { show: false }, axisTicks: { show: false } },
        yaxis: { show: false },
        grid: { show: false }
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
        theme: { mode: isDark() ? 'dark' : 'light' }
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
        theme: { mode: isDark() ? 'dark' : 'light' }
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
        grid: { borderColor: theme.grid, strokeDashArray: 4, padding: { left: 0, right: 0 } },
        theme: { mode: isDark() ? 'dark' : 'light' }
    };

    renderChart("job-roles-chart", jobRolesOptions);

    // --- 5. AGE DEMOGRAPHICS ---
    const ageOptions = {
        series: [{ name: "Beneficiaries", data: Object.values(stats.ages), color: COLORS.royalBlue() }],
        chart: { type: 'area', height: 200, toolbar: { show: false }, fontFamily: "Montserrat, sans-serif", background: theme.cardBg },
        stroke: { curve: 'smooth', width: 3 },
        fill: { type: 'gradient', gradient: { shadeIntensity: 1, opacityFrom: 0.4, opacityTo: 0.1 } },
        xaxis: {
            categories: Object.keys(stats.ages),
            labels: { style: { fontWeight: 600, colors: theme.muted, fontSize: '10px' } },
            axisBorder: { show: false }
        },
        yaxis: { labels: { style: { fontWeight: 600, colors: theme.muted, fontSize: '10px' } } },
        grid: { borderColor: theme.grid, strokeDashArray: 6 },
        theme: { mode: isDark() ? 'dark' : 'light' }
    };

    renderChart("age-chart", ageOptions);
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

// --- Auto-Reload on Theme Change ---
document.addEventListener('themeChanged', () => {
    // Small delay to ensure Tailwind classes are fully applied
    setTimeout(() => initCharts(), 50);
});
