import ApexCharts from 'apexcharts';
import { getBasePath } from './auth.js';

/**
 * 2026 LDNPFO GIP MONITORING - Data Visualization Module
 * Focuses on statistical aggregation excluding PII
 */

export async function initCharts() {
    // 1. Fetch data from API
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

    // DOLE Branding Colors
    const royalBlue = '#0038A8';
    const philippineRed = '#CE1126';
    const goldenYellow = '#FCD116';

    // 2. Process Data
    const stats = processBeneficiaryData(rawData);

    // 3. Update Summary Metrics (if elements exist)
    updateSummaryMetrics(stats);

    // --- 1. EMPLOYMENT STATUS BREAKDOWN (Replaces duplicate Workforce Distribution) ---
    const statusCounts = {
        'ONGOING': 0,
        'EXPIRED': 0,
        'ABSORBED': 0,
        'RESIGNED': 0
    };
    rawData.forEach(b => {
        const remarks = (b.remarks || 'ONGOING').toUpperCase().trim();
        if (statusCounts.hasOwnProperty(remarks)) {
            statusCounts[remarks]++;
        } else {
            statusCounts['ONGOING']++;
        }
    });

    const statusLabels = Object.keys(statusCounts);
    const statusData = Object.values(statusCounts);
    const statusColors = ['#22c55e', philippineRed, royalBlue, '#1e293b'];
    const activeRate = rawData.length > 0 ? Math.round((statusCounts['ONGOING'] / rawData.length) * 100) : 0;

    // Update status metrics on the card
    document.querySelectorAll('.metric-active-count').forEach(el => el.textContent = statusCounts['ONGOING']);
    document.querySelectorAll('.metric-active-rate').forEach(el => el.textContent = activeRate + '%');

    const statusOptions = {
        chart: {
            height: "100%",
            maxWidth: "100%",
            type: "area",
            fontFamily: "Montserrat, sans-serif",
            dropShadow: { enabled: false },
            toolbar: { show: false },
            sparkline: { enabled: true }
        },
        tooltip: {
            enabled: true,
            theme: 'light',
            style: { fontSize: '11px' },
            x: { show: true },
        },
        fill: {
            type: "gradient",
            gradient: {
                opacityFrom: 0.6,
                opacityTo: 0.05,
                shade: '#22c55e',
                gradientToColors: ['#22c55e'],
            },
        },
        dataLabels: { enabled: false },
        stroke: { width: 4, curve: 'smooth' },
        grid: {
            show: false,
            padding: { left: 2, right: 2, top: 0 },
        },
        series: [{
            name: "GIPs",
            data: statusData,
            color: '#22c55e',
        }],
        xaxis: {
            categories: statusLabels,
            labels: { show: false },
            axisBorder: { show: false },
            axisTicks: { show: false },
        },
        yaxis: { show: false },
    };

    if (document.getElementById("workforce-chart")) {
        new ApexCharts(document.getElementById("workforce-chart"), statusOptions).render();
    }

    // --- 2. GENDER DEMOGRAPHICS (M/F Distribution) ---
    const femaleCount = stats.genders['Female'] || stats.genders['F'] || 0;
    const maleCount = stats.genders['Male'] || stats.genders['M'] || 0;
    const totalGender = femaleCount + maleCount;
    const femalePct = totalGender > 0 ? Math.round((femaleCount / totalGender) * 100) : 0;
    const malePct = totalGender > 0 ? Math.round((maleCount / totalGender) * 100) : 0;

    const genderOptions = {
        series: [femalePct, malePct],
        colors: [philippineRed, royalBlue],
        chart: {
            height: "100%",
            width: "100%",
            type: "donut",
            fontFamily: "Montserrat, sans-serif",
            toolbar: { show: false },
        },
        stroke: { colors: ["transparent"], lineCap: "round" },
        labels: ["Female", "Male"],
        plotOptions: {
            pie: {
                donut: {
                    size: "75%",
                    labels: {
                        show: true,
                        name: { show: true, fontSize: '12px', fontWeight: 600, color: '#64748b' },
                        value: {
                            show: true,
                            fontSize: '28px',
                            fontWeight: 'bold',
                            color: '#0f172a',
                            formatter: (val) => val + '%'
                        },
                        total: {
                            show: true,
                            label: "Population",
                            fontSize: '11px',
                            fontWeight: 700,
                            color: '#64748b',
                            formatter: (w) => {
                                const total = w.globals.seriesTotals.reduce((a, b) => a + b, 0);
                                return Math.round(total / w.globals.series.length) + '% avg';
                            }
                        }
                    }
                }
            }
        },
        legend: {
            show: true,
            position: "bottom",
            fontSize: '13px',
            fontWeight: 600,
            horizontalAlign: 'center',
            markers: { radius: 12, width: 10, height: 10 }
        },
        dataLabels: {
            enabled: true,
            dropShadow: { enabled: false },
            style: { fontSize: '12px', fontWeight: 'bold' },
            formatter: (val) => Math.round(val) + '%'
        },
        states: {
            hover: { filter: { type: 'darken', value: 0.9 } }
        }
    };

    if (document.getElementById("gender-chart")) {
        new ApexCharts(document.getElementById("gender-chart"), genderOptions).render();
    }

    // --- 3. EDUCATION PROFILE (Educational Attainment) ---
    const eduLabels = ["College Grad", "College Lvl", "HS Grad", "Senior High"];
    const eduSeries = eduLabels.map(label => {
        const count = stats.education[label] || 0;
        return rawData.length > 0 ? Math.round((count / rawData.length) * 100) : 0;
    });

    const educationOptions = {
        series: eduSeries,
        colors: [royalBlue, goldenYellow, philippineRed, '#94a3b8'],
        chart: {
            height: 380,
            width: "100%",
            type: "radialBar",
            sparkline: { enabled: false },
            fontFamily: "Montserrat, sans-serif",
            toolbar: { show: false },
        },
        plotOptions: {
            radialBar: {
                track: {
                    background: '#f1f5f9',
                    strokeWidth: '95%',
                },
                dataLabels: {
                    name: {
                        show: true,
                        fontSize: '14px',
                        fontWeight: 600,
                        color: '#64748b',
                        offsetY: -10
                    },
                    value: {
                        show: true,
                        fontSize: '26px',
                        fontWeight: 700,
                        color: '#0f172a',
                        offsetY: 6,
                        formatter: (val) => val + '%'
                    },
                    total: {
                        show: true,
                        label: 'Graduates',
                        color: '#64748b',
                        fontSize: '11px',
                        fontWeight: 700,
                        formatter: () => {
                            const gradPct = rawData.length > 0
                                ? Math.round((stats.education['College Grad'] / rawData.length) * 100)
                                : 0;
                            return gradPct + '% of total';
                        }
                    }
                },
                hollow: { margin: 15, size: '32%' }
            },
        },
        grid: {
            show: false,
            padding: { top: -30, bottom: -20 },
        },
        labels: eduLabels,
        legend: {
            show: true,
            position: "bottom",
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 600,
            fontSize: '13px',
            offsetY: 10,
            markers: { radius: 12, width: 10, height: 10, offsetX: -4 }
        },
        tooltip: {
            enabled: true,
            theme: 'light',
            style: { fontSize: '12px' },
            y: { formatter: (value) => value + '%' }
        }
    };

    if (document.getElementById("education-chart")) {
        new ApexCharts(document.getElementById("education-chart"), educationOptions).render();
    }

    // --- 4. JOB ROLES (Nature of Work/Assignment) ---
    // We'll use the top 5 designations for this chart
    const topDesignations = Object.entries(stats.designations)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5);

    // Split each designation into "Office" vs "Field" (simplified logic based on office name)
    const officeData = [];
    const fieldData = [];
    const jobCategories = topDesignations.map(d => d[0]);

    topDesignations.forEach(([name, count]) => {
        // Logic: if designation or office suggests field work
        const isField = name.toLowerCase().includes('field') || name.toLowerCase().includes('driver') || name.toLowerCase().includes('maintenance');
        if (isField) {
            officeData.push(Math.round(count * 0.2)); // Assume 20% office for field roles
            fieldData.push(Math.round(count * 0.8));
        } else {
            officeData.push(Math.round(count * 0.9)); // Assume 90% office for others
            fieldData.push(Math.round(count * 0.1));
        }
    });

    const jobRolesOptions = {
        series: [
            { name: "Office Based", color: royalBlue, data: officeData },
            { name: "Field Based", color: philippineRed, data: fieldData }
        ],
        chart: {
            type: "bar",
            width: "100%",
            height: 320,
            fontFamily: "Montserrat, sans-serif",
            toolbar: { show: false },
            sparkline: { enabled: false }
        },
        plotOptions: {
            bar: {
                horizontal: true,
                borderRadius: 4,
                barHeight: '60%',
                dataLabels: { position: "top" },
            },
        },
        dataLabels: {
            enabled: false // More compact without individual labels on bars
        },
        legend: {
            position: "bottom",
            fontWeight: 700,
            fontSize: '11px',
            markers: { radius: 12 }
        },
        xaxis: {
            categories: jobCategories,
            labels: {
                style: { fontWeight: 700, fontSize: '10px', colors: '#64748b' }
            }
        },
        yaxis: {
            labels: {
                style: { fontWeight: 700, fontSize: '10px', colors: '#1e293b' },
                maxWidth: 150
            }
        },
        grid: {
            borderColor: '#f1f5f9',
            strokeDashArray: 4,
            padding: { top: -20, bottom: 0, left: 10 }
        },
        tooltip: {
            theme: 'light',
            style: { fontSize: '11px' }
        }
    };

    if (document.getElementById("job-roles-chart")) {
        new ApexCharts(document.getElementById("job-roles-chart"), jobRolesOptions).render();
    }

    // --- 5. AGE DEMOGRAPHICS (Age Range Distribution) ---
    const ageCategories = ["18-24", "25-30", "31-40", "41+"];
    const ageSeriesData = [
        stats.ages['18-24'] || 0,
        stats.ages['25-30'] || 0,
        stats.ages['31-40'] || 0,
        stats.ages['41+'] || 0
    ];

    const ageOptions = {
        series: [{ name: "GIPs", data: ageSeriesData }],
        chart: {
            type: "bar",
            height: 320,
            fontFamily: "Montserrat, sans-serif",
            toolbar: { show: false },
            sparkline: { enabled: false }
        },
        colors: [royalBlue],
        plotOptions: {
            bar: {
                borderRadius: 10,
                columnWidth: '45%',
                distributed: false,
                dataLabels: { position: 'top' }
            }
        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'light',
                type: "vertical",
                shadeIntensity: 0.3,
                gradientToColors: ['#60a5fa'], // Lighter blue for a premium gradient
                inverseColors: false,
                opacityFrom: 1,
                opacityTo: 0.8,
                stops: [0, 100]
            },
        },
        dataLabels: {
            enabled: true,
            offsetY: -30,
            style: {
                fontSize: '13px',
                colors: ["#1e293b"],
                fontWeight: 800,
                fontFamily: "Montserrat, sans-serif"
            },
            formatter: (val) => val
        },
        xaxis: {
            categories: ageCategories,
            labels: {
                style: {
                    fontWeight: 700,
                    colors: '#64748b',
                    fontSize: '11px'
                },
                offsetY: 5
            },
            axisBorder: { show: false },
            axisTicks: { show: false }
        },
        yaxis: {
            show: true,
            labels: {
                style: {
                    fontWeight: 600,
                    colors: '#94a3b8',
                    fontSize: '10px'
                }
            }
        },
        grid: {
            borderColor: '#f1f5f9',
            strokeDashArray: 6,
            yaxis: { lines: { show: true } },
            padding: { left: 10, right: 10, top: 15 }
        },
        tooltip: {
            theme: 'light',
            style: { fontSize: '12px', fontFamily: 'Montserrat, sans-serif' },
            y: {
                formatter: (val) => val + " Beneficiaries",
                title: { formatter: () => 'Count:' }
            }
        }
    };

    if (document.getElementById("age-chart")) {
        new ApexCharts(document.getElementById("age-chart"), ageOptions).render();
    }
}

/**
 * Process Raw Beneficiary Data into Stats
 */
function processBeneficiaryData(data) {
    const stats = {
        offices: {},
        genders: {},
        education: {
            "College Grad": 0,
            "College Lvl": 0,
            "HS Grad": 0,
            "Senior High": 0
        },
        designations: {},
        ages: {
            "18-24": 0,
            "25-30": 0,
            "31-40": 0,
            "41+": 0
        },
        totalAge: 0,
        ageCount: 0
    };

    data.forEach(b => {
        // Office count
        const office = b.office || 'Unassigned';
        stats.offices[office] = (stats.offices[office] || 0) + 1;

        // Gender count
        const gender = (b.gender || 'Unknown').trim();
        const simplifiedGender = gender === 'F' || gender === 'Female' ? 'Female' :
            (gender === 'M' || gender === 'Male' ? 'Male' : 'Unknown');
        stats.genders[simplifiedGender] = (stats.genders[simplifiedGender] || 0) + 1;

        // Education mapping
        const edu = b.education ? b.education.toUpperCase() : '';
        if (edu.includes('GRADUATE') || edu.includes('DEGREE') || edu.includes('BS') || edu.includes('AB')) {
            stats.education["College Grad"]++;
        } else if (edu.includes('COLLEGE') || edu.includes('LEVEL') || edu.includes('UNIT')) {
            stats.education["College Lvl"]++;
        } else if (edu.includes('SENIOR')) {
            stats.education["Senior High"]++;
        } else if (edu.includes('HS') || edu.includes('HIGH')) {
            stats.education["HS Grad"]++;
        }

        // Designation count
        const design = b.designation || 'General Support';
        stats.designations[design] = (stats.designations[design] || 0) + 1;

        // Age mapping
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
 * Update Dashboard Summary Metrics
 */
function updateSummaryMetrics(stats) {
    // Total Beneficiaries
    const totalBeneficiaries = Object.values(stats.offices).reduce((a, b) => a + b, 0);
    const totalElements = document.querySelectorAll('.metric-total-beneficiaries');
    totalElements.forEach(el => el.textContent = totalBeneficiaries);

    // Female Ratio
    const femaleCount = stats.genders['Female'] || 0;
    const maleCount = stats.genders['Male'] || 0;
    const totalGender = femaleCount + maleCount;

    const femaleRatioText = totalGender > 0 ? Math.round((femaleCount / totalGender) * 100) + '%' : '0%';
    const maleRatioText = totalGender > 0 ? Math.round((maleCount / totalGender) * 100) + '%' : '0%';

    document.querySelectorAll('.metric-female-ratio').forEach(el => el.textContent = femaleRatioText);
    document.querySelectorAll('.metric-male-ratio').forEach(el => el.textContent = maleRatioText);

    // Deployment Sites
    const siteCount = Object.keys(stats.offices).length;
    const siteElements = document.querySelectorAll('.metric-deployment-sites');
    siteElements.forEach(el => el.textContent = siteCount);

    // Average Age
    const avgAge = stats.ageCount > 0 ? Math.round(stats.totalAge / stats.ageCount) : 0;
    const ageElements = document.querySelectorAll('.metric-avg-age');
    ageElements.forEach(el => el.textContent = avgAge);

    // Also update the range label if needed
    const ageRangeElements = document.querySelectorAll('.metric-avg-age-range');
    ageRangeElements.forEach(el => el.textContent = '18-30'); // Keeping static range for now or calculating if preferred

    // Update individual education counts
    const eduMap = {
        'College Grad': '.count-college-grad',
        'College Lvl': '.count-college-lvl',
        'HS Grad': '.count-hs-grad',
        'Senior High': '.count-senior-high'
    };

    Object.entries(eduMap).forEach(([key, selector]) => {
        const count = stats.education[key] || 0;
        document.querySelectorAll(selector).forEach(el => el.textContent = count);
    });

    // Update office/field counts
    const officeTotal = Object.values(stats.designations).reduce((a, b) => a + b, 0);
    let fieldCount = 0;
    Object.entries(stats.designations).forEach(([name, count]) => {
        if (name.toLowerCase().includes('field') || name.toLowerCase().includes('driver') || name.toLowerCase().includes('maintenance')) {
            fieldCount += count;
        }
    });
    const officeCount = officeTotal - fieldCount;

    document.querySelectorAll('.count-office-based').forEach(el => el.textContent = officeCount);
    document.querySelectorAll('.count-field-based').forEach(el => el.textContent = fieldCount);

    // Top Role
    const topRole = Object.entries(stats.designations).sort((a, b) => b[1] - a[1])[0]?.[0] || 'N/A';
    document.querySelectorAll('.metric-top-role').forEach(el => el.textContent = topRole);
}
