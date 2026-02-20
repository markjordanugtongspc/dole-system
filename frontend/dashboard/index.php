<?php
require_once __DIR__ . '/../../config/vite.php';
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LDNPFO GIP Dashboard</title>

    <!-- Favicon -->
    <link rel="icon" type="image/png" href="../../frontend/images/logo/doleiligan.png">
    <link rel="apple-touch-icon" href="../../frontend/images/logo/doleiligan.png">

    <script>
        // SMART BYPASS: Detect if user has visited before to skip loading screen
        (function () {
            if (localStorage.getItem('hasVisitedBefore')) {
                document.documentElement.classList.add('loaded');
                // Hide loader immediately for returning visitors
                document.addEventListener('DOMContentLoaded', function () {
                    const loader = document.getElementById('page-loader');
                    if (loader) loader.style.display = 'none';
                });
            }
        })();
    </script>

    <!-- Vite Assets -->
    <?php vite('backend/js/main.js'); ?>
</head>

<body class="bg-neutral-primary-soft antialiased">
    <!-- Page Loader (Hidden immediately if loaded class is present) -->
    <div id="page-loader" class="page-loader">
        <div class="loader-spinner"></div>
    </div>
    <script>
        // If already locked as 'loaded' via Smart Bypass, hide loader immediately
        if (document.documentElement.classList.contains('loaded')) {
            document.getElementById('page-loader').style.display = 'none';
        }

        window.addEventListener('load', function () {
            setTimeout(function () {
                document.documentElement.classList.add('loaded');
                const loader = document.getElementById('page-loader');
                if (loader) loader.classList.add('hidden');
                document.body.style.overflow = 'auto';
            }, 300);
        });
    </script>

    <nav class="fixed top-0 z-50 w-full bg-white border-b border-default shadow-sm transition-none">
        <div class="px-3 py-3 lg:px-5">
            <div class="flex items-center justify-between">
                <div class="flex items-center justify-start">
                    <button data-drawer-target="top-bar-sidebar" data-drawer-toggle="top-bar-sidebar"
                        aria-controls="top-bar-sidebar" type="button"
                        class="sm:hidden text-heading bg-transparent hover:bg-neutral-secondary-medium focus:ring-4 focus:ring-neutral-tertiary rounded-base text-sm p-2 cursor-pointer">
                        <span class="sr-only">Open sidebar</span>
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                    <div class="flex ms-2 md:me-24 items-center select-none">
                        <img src="../../frontend/images/logo/doleiligan.png"
                            class="h-8 me-3 bg-white rounded-full p-0.5 object-contain" alt="DOLE Logo" />
                        <div class="flex flex-col">
                            <span class="text-sm font-black text-royal-blue uppercase tracking-tight leading-tight">DOLE
                                LDNPFO</span>
                            <span class="text-[10px] font-semibold text-gray-500 uppercase tracking-wider">GIP
                                Monitoring 2026</span>
                        </div>
                    </div>
                </div>
                <div class="flex items-center gap-3">
                    <div class="hidden md:flex items-center px-3 py-1.5 bg-blue-50 rounded-full">
                        <svg class="w-4 h-4 text-royal-blue me-2" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                        </svg>
                        <span class="text-xs font-bold text-royal-blue"><span
                                class="metric-total-beneficiaries">...</span> Beneficiaries</span>
                    </div>

                    <?php include __DIR__ . '/../components/notification.php'; ?>

                    <button id="logoutBtn"
                        class="flex items-center text-xs font-bold text-philippine-red hover:bg-red-50 px-4 py-2 rounded-lg transition-all duration-200 cursor-pointer border border-philippine-red/20 uppercase hover:scale-105">
                        <svg class="w-4 h-4 me-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1">
                            </path>
                        </svg>
                        Sign Out
                    </button>
                </div>
            </div>
        </div>
    </nav>

    <?php include __DIR__ . '/../components/sidebar/index.php'; ?>

    <div class="p-4 sm:ml-64 mt-14">
        <div class="p-6 min-h-screen">

            <!-- Page Header -->
            <div class="mb-6">
                <h1 class="text-3xl font-black text-heading mb-2">2026 LDNPFO GIP Monitoring Dashboard</h1>
                <p class="text-sm text-body font-medium">Statistical analysis and visualization of beneficiary data (PII
                    excluded)</p>
            </div>

            <!-- Key Metrics Summary -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <div
                    class="bg-white border border-default rounded-xl p-5 shadow-sm hover:shadow-xl hover:scale-[1.03] transition-all duration-300 ease-in-out cursor-pointer group">
                    <div class="flex items-center justify-between">
                        <div>
                            <p class="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Total Beneficiaries
                            </p>
                            <h3
                                class="text-3xl font-black text-royal-blue group-hover:scale-110 transition-transform duration-300 origin-left metric-total-beneficiaries">
                                ...</h3>
                        </div>
                        <div
                            class="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center transition-colors duration-300">
                            <svg class="w-6 h-6 text-royal-blue" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div
                    class="bg-white border border-default rounded-xl p-5 shadow-sm hover:shadow-xl hover:scale-[1.03] transition-all duration-300 ease-in-out cursor-pointer group">
                    <div class="flex items-center justify-between">
                        <div>
                            <p class="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Female Ratio</p>
                            <h3
                                class="text-3xl font-black text-philippine-red group-hover:scale-110 transition-transform duration-300 origin-left metric-female-ratio">
                                ...</h3>
                        </div>
                        <div
                            class="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center transition-colors duration-300">
                            <svg class="w-6 h-6 text-philippine-red" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                    clip-rule="evenodd" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div
                    class="bg-white border border-default rounded-xl p-5 shadow-sm hover:shadow-xl hover:scale-[1.03] transition-all duration-300 ease-in-out cursor-pointer group">
                    <div class="flex items-center justify-between">
                        <div>
                            <p class="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Deployment Sites
                            </p>
                            <h3
                                class="text-3xl font-black text-golden-yellow group-hover:scale-110 transition-transform duration-300 origin-left metric-deployment-sites">
                                ...</h3>
                        </div>
                        <div
                            class="w-12 h-12 bg-yellow-50 rounded-full flex items-center justify-center transition-colors duration-300">
                            <svg class="w-6 h-6 text-golden-yellow" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd"
                                    d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z"
                                    clip-rule="evenodd" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div
                    class="bg-white border border-default rounded-xl p-5 shadow-sm hover:shadow-xl hover:scale-[1.03] transition-all duration-300 ease-in-out cursor-pointer group">
                    <div class="flex items-center justify-between">
                        <div>
                            <p class="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Avg Age Range</p>
                            <h3
                                class="text-3xl font-black text-heading group-hover:scale-110 transition-transform duration-300 origin-left metric-avg-age-range">
                                ...</h3>
                        </div>
                        <div
                            class="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center transition-colors duration-300">
                            <svg class="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd"
                                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                    clip-rule="evenodd" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Main Charts Grid - Improved spacing and height -->
            <div class="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-8">

                <div
                    class="max-w-full w-full bg-[#f8fafc] border border-slate-200 rounded-xl shadow-sm p-4 md:p-6 flex flex-col min-h-[320px]">
                    <div class="flex justify-between items-start mb-4">
                        <div>
                            <h5 class="text-3xl font-black text-green-600 leading-none metric-active-count">...
                            </h5>
                            <p class="text-sm font-semibold text-slate-500 mt-1">Active GIPs</p>
                        </div>
                        <div
                            class="flex items-center px-2.5 py-0.5 mt-1.5 text-xs font-bold text-green-600 bg-green-50 rounded-full border border-green-200 text-center">
                            <svg class="w-3 h-3 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="M12 6v13m0-13 4 4m-4-4-4 4" />
                            </svg>
                            <span class="metric-active-rate">...</span> Active
                        </div>
                    </div>

                    <div id="workforce-chart" class="flex-1 w-full"></div>

                    <div class="grid grid-cols-1 items-center border-t border-slate-200 justify-between mt-4">
                        <div class="flex justify-between items-center pt-4">
                            <!-- Button -->
                            <button id="dropdownDefaultButton" data-dropdown-toggle="lastDaysdropdown"
                                data-dropdown-placement="bottom"
                                class="text-xs font-bold text-slate-500 hover:text-royal-blue text-center inline-flex items-center uppercase tracking-wider"
                                type="button">
                                Last 7 days
                                <svg class="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                    fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" d="m19 9-7 7-7-7" />
                                </svg>
                            </button>
                            <!-- Dropdown menu -->
                            <div id="lastDaysdropdown"
                                class="z-10 hidden bg-white divide-y divide-slate-100 rounded-lg shadow-xl w-44 border border-slate-200">
                                <ul class="py-2 text-sm text-slate-700" aria-labelledby="dropdownDefaultButton">
                                    <li>
                                        <a href="#"
                                            class="block px-4 py-2 hover:bg-slate-50 transition-colors">Yesterday</a>
                                    </li>
                                    <li>
                                        <a href="#"
                                            class="block px-4 py-2 hover:bg-slate-50 transition-colors">Today</a>
                                    </li>
                                    <li>
                                        <a href="#" class="block px-4 py-2 hover:bg-slate-50 transition-colors">Last 7
                                            days</a>
                                    </li>
                                    <li>
                                        <a href="#" class="block px-4 py-2 hover:bg-slate-50 transition-colors">Last 30
                                            days</a>
                                    </li>
                                    <li>
                                        <a href="#" class="block px-4 py-2 hover:bg-slate-50 transition-colors">Last 90
                                            days</a>
                                    </li>
                                </ul>
                            </div>
                            <a href="#"
                                class="inline-flex items-center uppercase tracking-wider font-extrabold text-royal-blue hover:text-blue-800 text-xs hover:underline">
                                View Details
                                <svg class="w-3 h-3 ms-1.5 rtl:rotate-180" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div
                    class="max-w-full w-full bg-[#f8fafc] border border-slate-200 rounded-xl shadow-sm p-4 md:p-6 flex flex-col min-h-[320px]">
                    <div class="flex justify-between items-start mb-4">
                        <div>
                            <h5 class="text-xl font-black text-royal-blue leading-none">Gender Demographics</h5>
                            <p class="text-sm font-semibold text-slate-500 mt-1">Workforce Diversity</p>
                        </div>
                        <div class="flex gap-2">
                            <div
                                class="flex items-center px-2 py-1 text-[10px] font-bold text-philippine-red bg-red-50 rounded-lg border border-red-100">
                                <span class="w-2 h-2 rounded-full bg-philippine-red me-1.5"></span>
                                Female: <span class="metric-female-ratio ms-1">...</span>
                            </div>
                            <div
                                class="flex items-center px-2 py-1 text-[10px] font-bold text-royal-blue bg-blue-50 rounded-lg border border-blue-100">
                                <span class="w-2 h-2 rounded-full bg-royal-blue me-1.5"></span>
                                Male: <span class="metric-male-ratio ms-1">...</span>
                            </div>
                        </div>
                    </div>

                    <div id="gender-chart" class="flex-1 w-full"></div>

                    <div class="grid grid-cols-1 items-center border-t border-slate-200 justify-between mt-4">
                        <div class="flex justify-between items-center pt-4">
                            <div class="flex items-center text-xs font-bold text-slate-500 italic">
                                <svg class="w-3.5 h-3.5 me-1 text-royal-blue" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd"
                                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                        clip-rule="evenodd" />
                                </svg>
                                Aggregated statistics
                            </div>
                            <a href="#"
                                class="inline-flex items-center uppercase tracking-wider font-extrabold text-royal-blue hover:text-blue-800 text-xs hover:underline">
                                View Report
                                <svg class="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                    fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

            </div>

            <!-- Secondary Charts Grid -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">

                <!-- Education Profile (Enhanced Modern Layout) -->
                <div
                    class="max-w-full w-full bg-[#f8fafc] border border-slate-200 rounded-xl shadow-sm p-4 md:p-6 flex flex-col min-h-[420px]">

                    <!-- Education Stats Grid - Modern Responsive Layout -->
                    <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                        <div
                            class="bg-white border border-slate-100 rounded-xl p-4 shadow-xs flex flex-col items-center justify-center hover:border-blue-200 hover:shadow-md transition-all duration-300 group">
                            <span
                                class="text-3xl font-black text-royal-blue count-college-grad group-hover:scale-110 transition-transform">...</span>
                            <span class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">College
                                Grad</span>
                        </div>
                        <div
                            class="bg-white border border-slate-100 rounded-xl p-4 shadow-xs flex flex-col items-center justify-center hover:border-yellow-200 hover:shadow-md transition-all duration-300 group">
                            <span
                                class="text-3xl font-black text-golden-yellow count-college-lvl group-hover:scale-110 transition-transform">...</span>
                            <span
                                class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1 text-center">College
                                Level</span>
                        </div>
                        <div
                            class="bg-white border border-slate-100 rounded-xl p-4 shadow-xs flex flex-col items-center justify-center hover:border-red-200 hover:shadow-md transition-all duration-300 group">
                            <span
                                class="text-3xl font-black text-philippine-red count-hs-grad group-hover:scale-110 transition-transform">...</span>
                            <span class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">HS
                                Grad</span>
                        </div>
                        <div
                            class="bg-white border border-slate-100 rounded-xl p-4 shadow-xs flex flex-col items-center justify-center hover:border-slate-300 hover:shadow-md transition-all duration-300 group">
                            <span
                                class="text-3xl font-black text-slate-500 count-senior-high group-hover:scale-110 transition-transform">...</span>
                            <span
                                class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1 text-center font-mono">Senior
                                High</span>
                        </div>
                    </div>

                    <div class="flex flex-col items-center mb-4">
                        <div class="flex items-center mb-1">
                            <h5 class="text-sm font-black uppercase tracking-[0.2em] text-slate-400">
                                Education Profile</h5>
                            <button data-popover-target="edu-progress-popover" class="ms-2">
                                <svg class="w-4 h-4 text-slate-300 hover:text-royal-blue transition-colors cursor-pointer"
                                    aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M9.529 9.988a2.502 2.502 0 1 1 5 .191A2.441 2.441 0 0 1 12 12.582V14m-.01 3.008H12M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                            </button>
                        </div>
                        <div data-popover id="edu-progress-popover" role="tooltip"
                            class="absolute z-10 p-3 invisible inline-block text-sm text-slate-500 transition-opacity duration-300 bg-white border border-slate-200 rounded-lg shadow-lg opacity-0 w-72 leading-relaxed">
                            <h3 class="font-bold text-royal-blue mb-1">Education Distribution</h3>
                            <p class="text-xs">Visualizes the percentage breakdown of beneficiaries based on their
                                highest educational attainment.</p>
                            <div data-popper-arrow></div>
                        </div>
                    </div>

                    <!-- Radial Chart -->
                    <div class="flex-1 flex justify-center items-center py-2" id="education-chart"></div>

                    <div class="grid grid-cols-1 items-center border-t border-slate-200 justify-between mt-4">
                        <div class="flex justify-between items-center pt-4">
                            <!-- Button -->
                            <button id="dropdownLastDaysEduButton" data-dropdown-toggle="LastDaysEdudropdown"
                                data-dropdown-placement="bottom"
                                class="text-[10px] font-black text-slate-400 hover:text-royal-blue text-center inline-flex items-center uppercase tracking-[0.15em] transition-colors"
                                type="button">
                                Previous 7 Days
                                <svg class="w-3 h-3 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                    fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" d="m19 9-7 7-7-7" />
                                </svg>
                            </button>
                            <!-- Dropdown menu -->
                            <div id="LastDaysEdudropdown"
                                class="z-10 hidden bg-white divide-y divide-slate-100 rounded-lg shadow-xl w-44 border border-slate-200">
                                <ul class="py-2 text-xs font-bold text-slate-600"
                                    aria-labelledby="dropdownLastDaysEduButton">
                                    <li><a href="#"
                                            class="block px-4 py-2 hover:bg-slate-50 transition-colors uppercase">Yesterday</a>
                                    </li>
                                    <li><a href="#"
                                            class="block px-4 py-2 hover:bg-slate-50 transition-colors uppercase">Today</a>
                                    </li>
                                    <li><a href="#"
                                            class="block px-4 py-2 hover:bg-slate-50 transition-colors uppercase">Last 7
                                            days</a></li>
                                    <li><a href="#"
                                            class="block px-4 py-2 hover:bg-slate-50 transition-colors uppercase">Last
                                            30 days</a></li>
                                </ul>
                            </div>
                            <a href="#"
                                class="inline-flex items-center uppercase tracking-widest font-black text-royal-blue hover:text-blue-800 text-[10px] group">
                                View Full Report
                                <svg class="w-3 h-3 ms-2 transform group-hover:translate-x-1 transition-transform"
                                    aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Job Roles (Flowbite Revenue Template - Bluish) -->
                <div
                    class="max-w-full w-full bg-[#f8fafc] border border-slate-200 rounded-xl shadow-sm p-4 md:p-6 flex flex-col min-h-[320px]">
                    <div class="flex justify-between border-slate-200 border-b pb-3">
                        <dl>
                            <dt class="text-sm font-semibold text-slate-500">Top Role</dt>
                            <dd class="text-2xl font-black text-royal-blue leading-none mt-1 metric-top-role">...
                            </dd>
                        </dl>
                        <div>
                            <span
                                class="inline-flex items-center bg-green-50 border border-green-200 text-green-600 text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                                <svg class="w-2.5 h-2.5 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                    fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" d="M12 6v13m0-13 4 4m-4-4-4 4" />
                                </svg>
                                Saturation 31.4%
                            </span>
                        </div>
                    </div>

                    <div class="grid grid-cols-2 py-2">
                        <dl>
                            <dt class="text-[10px] font-semibold text-slate-500 mb-0.5">Office Based</dt>
                            <dd class="text-base font-bold text-royal-blue count-office-based">...</dd>
                        </dl>
                        <dl>
                            <dt class="text-[10px] font-semibold text-slate-500 mb-0.5">Field Based</dt>
                            <dd class="text-base font-bold text-philippine-red count-field-based">...</dd>
                        </dl>
                    </div>

                    <div id="job-roles-chart" class="flex-1 w-full"></div>

                    <div class="grid grid-cols-1 items-center border-t border-slate-200 justify-between mt-2">
                        <div class="flex justify-between items-center pt-2 md:pt-3">
                            <!-- Button -->
                            <button id="dropdownLastDays3Button" data-dropdown-toggle="LastDays3dropdown"
                                data-dropdown-placement="bottom"
                                class="text-[10px] font-bold text-slate-500 hover:text-royal-blue text-center inline-flex items-center uppercase tracking-wider"
                                type="button">
                                Last 7 days
                                <svg class="w-2.5 h-2.5 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                    fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" d="m19 9-7 7-7-7" />
                                </svg>
                            </button>
                            <!-- Dropdown menu -->
                            <div id="LastDays3dropdown"
                                class="z-10 hidden bg-white divide-y divide-slate-100 rounded-lg shadow-xl w-44 border border-slate-200">
                                <ul class="py-2 text-sm text-slate-700" aria-labelledby="dropdownLastDays3Button">
                                    <li>
                                        <a href="#"
                                            class="block px-4 py-2 hover:bg-slate-50 transition-colors">Yesterday</a>
                                    </li>
                                    <li>
                                        <a href="#"
                                            class="block px-4 py-2 hover:bg-slate-50 transition-colors">Today</a>
                                    </li>
                                    <li>
                                        <a href="#" class="block px-4 py-2 hover:bg-slate-50 transition-colors">Last
                                            7
                                            days</a>
                                    </li>
                                    <li>
                                        <a href="#" class="block px-4 py-2 hover:bg-slate-50 transition-colors">Last
                                            30
                                            days</a>
                                    </li>
                                    <li>
                                        <a href="#" class="block px-4 py-2 hover:bg-slate-50 transition-colors">Last
                                            90
                                            days</a>
                                    </li>
                                </ul>
                            </div>
                            <a href="#"
                                class="inline-flex items-center uppercase tracking-wider font-extrabold text-royal-blue hover:text-blue-800 text-[10px] hover:underline">
                                Roles Report
                                <svg class="w-2.5 h-2.5 ms-1.5 rtl:rotate-180" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Age Demographics (Modern Landscape Visualization) -->
                <div
                    class="lg:col-span-2 bg-[#f8fafc] border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-500 min-h-[350px] flex flex-col group/age">
                    <div class="flex justify-between items-center mb-8">
                        <div class="flex items-center">
                            <div
                                class="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center me-4 border border-blue-100 shadow-sm group-hover/age:border-royal-blue group-hover/age:bg-blue-100 group-hover/age:scale-105 transition-all duration-300">
                                <svg class="w-6 h-6 text-royal-blue group-hover/age:scale-110 transition-transform"
                                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"
                                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <div>
                                <h5 class="text-xl font-black text-royal-blue uppercase tracking-tight">Age Demographics
                                </h5>
                                <p class="text-[11px] font-black text-slate-400 mt-1 uppercase tracking-[0.2em]">
                                    Workforce Distribution Pattern</p>
                            </div>
                        </div>
                        <div class="text-right">
                            <div class="flex flex-col">
                                <span
                                    class="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Average
                                    Age</span>
                                <div class="flex items-baseline justify-end gap-1">
                                    <h4 class="text-3xl font-black text-royal-blue leading-none metric-avg-age">...</h4>
                                    <span class="text-xs font-bold text-slate-400">YRS</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="age-chart" class="flex-1 w-full"></div>
                </div>

            </div>

            <!-- Dashboard Footer with Privacy & Credits -->
            <footer class="mt-10 mb-4 border-t border-slate-200 pt-6">
                <div class="flex flex-col md:flex-row justify-between items-start gap-6">
                    <div class="bg-blue-50/50 border-l-4 border-royal-blue rounded-r-xl p-5 flex-1">
                        <div class="flex items-start gap-3">
                            <div class="p-2 bg-royal-blue/10 rounded-lg shrink-0 mt-0.5">
                                <svg class="w-4 h-4 text-royal-blue" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd"
                                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                        clip-rule="evenodd" />
                                </svg>
                            </div>
                            <div>
                                <h4 class="text-[10px] font-black text-royal-blue uppercase tracking-widest mb-1">
                                    Statistical Compliance Notice</h4>
                                <p class="text-[11px] text-slate-500 font-medium leading-relaxed">
                                    This dashboard visualizes aggregated statistical patterns only. PII is
                                    strictly excluded in compliance with <span class="font-bold text-royal-blue">RA
                                        10173 (Data Privacy Act of 2012)</span>.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="flex flex-col items-center md:items-end justify-center shrink-0">
                        <div
                            class="flex items-center gap-3 mb-2 opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500">
                            <img src="../../frontend/images/logo/doleiligan.png"
                                class="h-7 bg-white rounded-full p-0.5 object-contain" alt="DOLE">
                            <div class="w-px h-5 bg-slate-300"></div>
                            <span class="text-[9px] font-black text-slate-400 uppercase tracking-widest">GIP
                                Monitoring</span>
                        </div>
                        <p class="text-[8px] font-bold text-slate-300 uppercase tracking-widest">© 2026 DOLE-LDNPFO |
                            GIP SYSTEM V4.1</p>
                    </div>
                </div>
            </footer>
        </div>

        <script>
            // Security check - redirect if not logged in
            if (localStorage.getItem('isLoggedIn') !== 'true') {
                const path = window.location.pathname;
                const base = path.includes('/dole-system/') ? path.substring(0, path.indexOf('/dole-system/') + '/dole-system/'.length) : '';
                window.location.href = `${base}`;
            }
        </script>

</body>

</html>