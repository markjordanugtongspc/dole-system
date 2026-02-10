import ApexCharts from 'apexcharts';

/**
 * 2026 LDNPFO GIP MONITORING - Data Visualization Module
 * Focuses on statistical aggregation excluding PII
 */

export function initCharts() {
    // DOLE Branding Colors
    const royalBlue = '#0038A8';
    const philippineRed = '#CE1126';
    const goldenYellow = '#FCD116';

    // --- 1. WORKFORCE DISTRIBUTION (Office/Place of Assignment) ---
    // Updated to Flowbite Area Chart Template
    const workforceOptions = {
        chart: {
            height: "100%",
            maxWidth: "100%",
            type: "area",
            fontFamily: "Montserrat, sans-serif",
            dropShadow: {
                enabled: false,
            },
            toolbar: {
                show: false,
            },
        },
        tooltip: {
            enabled: true,
            x: {
                show: false,
            },
        },
        fill: {
            type: "gradient",
            gradient: {
                opacityFrom: 0.55,
                opacityTo: 0,
                shade: royalBlue,
                gradientToColors: [royalBlue],
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            width: 6,
            curve: 'smooth'
        },
        grid: {
            show: false,
            strokeDashArray: 4,
            padding: {
                left: 2,
                right: 2,
                top: 0
            },
        },
        series: [
            {
                name: "Assignees",
                data: [145, 98, 87, 72, 65, 54, 48, 42, 38, 35],
                color: royalBlue,
            },
        ],
        xaxis: {
            categories: [
                "LGU Iligan City",
                "DepEd Division Office",
                "LGU Kauswagan",
                "LGU Tubod",
                "DOLE Field Office",
                "LGU Maigo",
                "LGU Bacolod",
                "LGU Lala",
                "Provincial Capitol",
                "LGU Linamon"
            ],
            labels: {
                show: false,
            },
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
        },
        yaxis: {
            show: false,
        },
    };


    if (document.getElementById("workforce-chart")) {
        new ApexCharts(document.getElementById("workforce-chart"), workforceOptions).render();
    }

    // --- 2. GENDER DEMOGRAPHICS (M/F Distribution) ---
    const genderOptions = {
        series: [58, 42], // Example: 58% Female, 42% Male
        colors: [philippineRed, royalBlue],
        chart: {
            height: 280,
            type: "donut",
            fontFamily: "Montserrat, sans-serif",
        },
        labels: ["Female (F)", "Male (M)"],
        plotOptions: {
            pie: {
                donut: {
                    size: "70%",
                    labels: {
                        show: true,
                        name: { show: true, fontSize: '14px', fontWeight: 600 },
                        value: {
                            show: true,
                            fontSize: '24px',
                            fontWeight: 'bold',
                            formatter: (val) => val + '%'
                        },
                        total: {
                            show: true,
                            label: "Total Beneficiaries",
                            fontSize: '12px',
                            fontWeight: 600,
                            formatter: () => "684"
                        }
                    }
                }
            }
        },
        legend: {
            position: "bottom",
            fontSize: '13px',
            fontWeight: 600
        },
        dataLabels: {
            enabled: true,
            formatter: (val) => Math.round(val) + '%'
        },
        title: {
            text: "Gender Distribution",
            align: "center",
            style: { fontSize: '16px', fontWeight: 'bold', color: '#0f172a' }
        }
    };

    if (document.getElementById("gender-chart")) {
        new ApexCharts(document.getElementById("gender-chart"), genderOptions).render();
    }

    // --- 3. EDUCATION PROFILE (Educational Attainment) ---
    // --- 3. EDUCATION PROFILE (Educational Attainment) ---
    // Updated to Flowbite Radial Bar Template Logic
    const educationOptions = {
        series: [42, 29, 21, 9], // Approximated Percentages for Radial Bar
        colors: [royalBlue, goldenYellow, philippineRed, '#94a3b8'], // Blue, Yellow, Red, Slate-400
        chart: {
            height: 300,
            width: "100%",
            type: "radialBar",
            sparkline: {
                enabled: true,
            },
            fontFamily: "Montserrat, sans-serif",
        },
        plotOptions: {
            radialBar: {
                track: {
                    background: '#e2e8f0', // slate-200
                },
                dataLabels: {
                    show: false,
                },
                hollow: {
                    margin: 0,
                    size: "32%",
                }
            },
        },
        grid: {
            show: false,
            strokeDashArray: 4,
            padding: {
                left: 2,
                right: 2,
                top: -23,
                bottom: -20,
            },
        },
        labels: ["College Grad", "College Lvl", "HS Grad", "Senior High"],
        legend: {
            show: true,
            position: "bottom",
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 600,
            fontSize: '11px',
            textAnchor: 'start',
            offsetY: 7, // Adjusted to fix legend positioning (inset: 0px)
            markers: {
                radius: 12
            }
        },
        tooltip: {
            enabled: true,
            x: {
                show: false,
            },
            y: {
                formatter: function (value) {
                    return value + '%';
                }
            }
        },
        yaxis: {
            show: false,
        }
    };

    if (document.getElementById("education-chart")) {
        new ApexCharts(document.getElementById("education-chart"), educationOptions).render();
    }

    // --- 4. JOB ROLES (Nature of Work/Assignment) ---
    // Updated to Flowbite Revenue Report Template Logic
    const jobRolesOptions = {
        series: [
            {
                name: "Office Based",
                color: royalBlue,
                data: [180, 140, 45, 60, 50], // Approximated split
            },
            {
                name: "Field Based",
                color: philippineRed,
                data: [35, 28, 80, 32, 34], // Approximated split
            }
        ],
        chart: {
            sparkline: {
                enabled: false,
            },
            type: "bar",
            width: "100%",
            height: "100%", // Fit container
            fontFamily: "Montserrat, sans-serif",
            toolbar: {
                show: false,
            }
        },
        fill: {
            opacity: 1,
        },
        plotOptions: {
            bar: {
                horizontal: true,
                columnWidth: "100%",
                borderRadiusApplication: "end",
                borderRadius: 6,
                dataLabels: {
                    position: "top",
                },
            },
        },
        legend: {
            show: true,
            position: "bottom",
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 600,
            markers: {
                radius: 12
            }
        },
        dataLabels: {
            enabled: false,
        },
        tooltip: {
            shared: true,
            intersect: false,
        },
        xaxis: {
            labels: {
                show: true,
                style: {
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 600,
                    cssClass: 'text-xs font-normal fill-gray-500'
                }
            },
            categories: [
                "Admin Support",
                "Data Encoding",
                "Field Assistance",
                "Tech Support",
                "Gen. Services"
            ],
            axisTicks: {
                show: false,
            },
            axisBorder: {
                show: false,
            },
        },
        yaxis: {
            labels: {
                show: true,
                style: {
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 600,
                    cssClass: 'text-xs font-normal fill-gray-500'
                }
            }
        },
        grid: {
            show: true,
            strokeDashArray: 4,
            padding: {
                left: 2,
                right: 2,
                top: -20
            },
        },
    };

    if (document.getElementById("job-roles-chart")) {
        new ApexCharts(document.getElementById("job-roles-chart"), jobRolesOptions).render();
    }

    // --- 5. AGE DEMOGRAPHICS (Age Range Distribution) ---
    const ageOptions = {
        series: [{
            name: "Beneficiaries",
            data: [312, 245, 98, 29]
        }],
        chart: {
            type: "bar",
            height: 250,
            fontFamily: "Montserrat, sans-serif",
            toolbar: { show: false }
        },
        colors: [philippineRed],
        plotOptions: {
            bar: {
                borderRadius: 6,
                columnWidth: '65%',
                distributed: false
            }
        },
        dataLabels: {
            enabled: true,
            style: { colors: ['#fff'], fontWeight: 'bold', fontSize: '12px' }
        },
        xaxis: {
            categories: ["18-24 years", "25-30 years", "31-40 years", "41+ years"],
            labels: { style: { fontSize: '12px', fontWeight: 600 } }
        },
        yaxis: {
            title: { text: "Number of Beneficiaries", style: { fontWeight: 600 } }
        },
        title: {
            text: "Age Demographics Distribution",
            align: "left",
            style: { fontSize: '16px', fontWeight: 'bold', color: '#0f172a' }
        }
    };

    if (document.getElementById("age-chart")) {
        new ApexCharts(document.getElementById("age-chart"), ageOptions).render();
    }
}
