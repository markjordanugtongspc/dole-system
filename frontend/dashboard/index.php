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
                        class="flex items-center justify-center text-xs font-bold text-philippine-red hover:bg-red-50 w-9 h-9 sm:w-auto sm:h-auto sm:px-4 sm:py-2 flex-shrink-0 rounded-full sm:rounded-lg transition-all duration-200 cursor-pointer border border-philippine-red/20 uppercase hover:scale-105">
                        <svg class="w-4 h-4 sm:me-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1">
                            </path>
                        </svg>
                        <span class="hidden sm:inline">Sign Out</span>
                    </button>
                </div>
            </div>
        </div>
    </nav>

    <?php include __DIR__ . '/../components/sidebar/index.php'; ?>

    <div class="px-1 sm:px-4 sm:ml-64 mt-14">
        <div class="px-1 py-6 sm:p-6 min-h-screen">

            <!-- Page Header -->
            <!-- Page Header (Premium Modern Facelift) -->
            <div class="mb-8 px-2 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div class="flex items-center gap-4">
                    <div class="hidden sm:flex shrink-0 w-12 h-12 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm items-center justify-center">
                        <svg class="w-7 h-7 text-royal-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <div>
                        <div class="flex items-center gap-2 mb-1">
                            <span class="px-2 py-0.5 bg-royal-blue text-white text-[9px] font-black rounded uppercase tracking-widest hidden sm:inline-block">Primary Analytics</span>
                            <h1 class="text-2xl sm:text-3xl font-black text-heading dark:text-white leading-tight">
                                <span class="sm:hidden">2026 GIP Monitor</span>
                                <span class="hidden sm:inline">2026 GIP Analytics Dashboard</span>
                            </h1>
                        </div>
                        <p class="text-[10px] sm:text-sm text-body dark:text-slate-400 font-bold uppercase tracking-wider sm:normal-case sm:font-medium">
                            <span class="sm:hidden">Statistical Dashboard & Visualization</span>
                            <span class="hidden sm:inline">Comprehensive analysis and visual monitoring of program beneficiaries</span>
                        </p>
                    </div>
                </div>
                <div class="flex items-center gap-2 bg-slate-100 dark:bg-slate-700/50 p-1.5 rounded-xl border border-slate-200 dark:border-slate-600 self-start md:self-auto box-border">
                    <button id="view-general-btn" class="px-3 py-1.5 bg-white dark:bg-slate-800 rounded-lg shadow-sm text-[10px] font-black text-royal-blue dark:text-blue-400 uppercase tracking-widest transition-all duration-300 cursor-pointer">General Overview</button>
                    <button id="view-performance-btn" class="px-3 py-1.5 text-[10px] font-bold text-slate-500 hover:text-royal-blue dark:hover:text-blue-400 transition-all duration-300 cursor-pointer uppercase tracking-widest">Performance</button>
                </div>
            </div>

            <!-- Dashboard Content Wrapper for Switching -->
            <div id="general-view-section" class="transition-opacity duration-500">
                <!-- Key Metrics Summary (Existing) -->

            <!-- Key Metrics Summary -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <!-- Total Beneficiaries Card -->
                <div
                    class="relative overflow-hidden bg-white dark:bg-slate-800/80 border border-default dark:border-slate-700 rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 ease-out cursor-pointer group">
                    <div class="absolute top-0 left-0 w-1 h-full bg-royal-blue"></div>
                    <div class="absolute -right-8 -bottom-8 w-24 h-24 bg-royal-blue/5 rounded-full blur-2xl group-hover:bg-royal-blue/10 transition-colors"></div>
                    <div class="flex items-center justify-between gap-4 relative z-10">
                        <div class="min-w-0">
                            <p class="text-[9px] sm:text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-1 whitespace-nowrap">
                                Total Beneficiaries
                            </p>
                            <h3
                                class="text-3xl sm:text-4xl font-black text-royal-blue dark:text-blue-400 group-hover:translate-x-1 transition-transform duration-500 metric-total-beneficiaries">
                                ...</h3>
                        </div>
                        <div
                            class="shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-blue-50 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 shadow-inner">
                            <svg class="w-6 h-6 sm:w-7 sm:h-7 text-royal-blue dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </div>
                    </div>
                </div>

                <!-- Female Ratio Card -->
                <div
                    class="relative overflow-hidden bg-white dark:bg-slate-800/80 border border-default dark:border-slate-700 rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 ease-out cursor-pointer group">
                    <div class="absolute top-0 left-0 w-1 h-full bg-philippine-red"></div>
                    <div class="absolute -right-8 -bottom-8 w-24 h-24 bg-philippine-red/5 rounded-full blur-2xl group-hover:bg-philippine-red/10 transition-colors"></div>
                    <div class="flex items-center justify-between gap-4 relative z-10">
                        <div class="min-w-0">
                            <p class="text-[9px] sm:text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-1 whitespace-nowrap">Female Ratio</p>
                            <div class="flex items-baseline gap-2">
                                <h3
                                    class="text-3xl sm:text-4xl font-black text-philippine-red dark:text-red-400 group-hover:translate-x-1 transition-transform duration-500 metric-female-ratio">
                                    ...</h3>
                                <div class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                            </div>
                        </div>
                        <div
                            class="shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-red-50 dark:bg-red-900/30 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:-rotate-6 group-hover:scale-110 shadow-inner">
                            <svg class="w-6 h-6 sm:w-7 sm:h-7 text-philippine-red dark:text-red-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                        </div>
                    </div>
                </div>

                <!-- Deployment Sites Card -->
                <div
                    class="relative overflow-hidden bg-white dark:bg-slate-800/80 border border-default dark:border-slate-700 rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 ease-out cursor-pointer group">
                    <div class="absolute top-0 left-0 w-1 h-full bg-golden-yellow"></div>
                    <div class="absolute -right-8 -bottom-8 w-24 h-24 bg-golden-yellow/5 rounded-full blur-2xl group-hover:bg-golden-yellow/10 transition-colors"></div>
                    <div class="flex items-center justify-between gap-4 relative z-10">
                        <div class="min-w-0">
                            <p class="text-[9px] sm:text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-1 whitespace-nowrap">
                                Deployment Sites
                            </p>
                            <h3
                                class="text-3xl sm:text-4xl font-black text-golden-yellow group-hover:translate-x-1 transition-transform duration-500 metric-deployment-sites">
                                ...</h3>
                        </div>
                        <div
                            class="shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-yellow-50 dark:bg-yellow-900/30 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:rotate-12 group-hover:scale-110 shadow-inner">
                            <svg class="w-6 h-6 sm:w-7 sm:h-7 text-golden-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                        </div>
                    </div>
                </div>

                <!-- Average Age Range Card -->
                <div
                    class="relative overflow-hidden bg-white dark:bg-slate-800/80 border border-default dark:border-slate-700 rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 ease-out cursor-pointer group">
                    <div class="absolute top-0 left-0 w-1 h-full bg-slate-400 dark:bg-slate-500"></div>
                    <div class="absolute -right-8 -bottom-8 w-24 h-24 bg-slate-500/5 rounded-full blur-2xl group-hover:bg-slate-500/10 transition-colors"></div>
                    <div class="flex items-center justify-between gap-4 relative z-10">
                        <div class="min-w-0">
                            <p class="text-[9px] sm:text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-1 whitespace-nowrap">
                                Avg Age Range
                            </p>
                            <h3
                                class="text-3xl sm:text-4xl font-black text-heading dark:text-white group-hover:translate-x-1 transition-transform duration-500 metric-avg-age-range">
                                ...</h3>
                        </div>
                        <div
                            class="shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gray-100 dark:bg-slate-700/50 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:skew-x-3 group-hover:scale-110 shadow-inner">
                            <svg class="w-6 h-6 sm:w-7 sm:h-7 text-slate-600 dark:text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Main Charts Grid -->
            <div class="grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-8 mb-8">

                <!-- Active GIPs Workforce Chart Container -->
                <div
                    class="relative max-w-full w-full bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 p-4 sm:p-7 flex flex-col min-h-[300px] group/card">
                    <div class="absolute top-0 right-0 p-6 opacity-5 group-hover/card:opacity-10 transition-opacity">
                        <svg class="w-20 h-20 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                        </svg>
                    </div>
                    <div class="flex justify-between items-start mb-4 sm:mb-6 relative z-10">
                        <div>
                            <p class="text-[10px] sm:text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-1">Live Statistics</p>
                            <h5 id="added-metric-value" class="text-3xl sm:text-5xl font-black transition-colors duration-500 leading-none metric-added-count">...</h5>
                            <p class="text-xs sm:text-sm font-bold text-slate-600 dark:text-slate-400 mt-2">Total Added Beneficiaries</p>
                        </div>
                        <div id="added-metric-badge"
                            class="flex items-center px-3 py-1 text-[10px] sm:text-xs font-black text-white rounded-full shadow-lg transition-all duration-500 border border-white/20 translate-y-1">
                            <svg id="added-metric-icon" class="w-3 h-3 me-1.5 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="3">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v13m0-13 4 4m-4-4-4 4" />
                            </svg>
                            <span class="metric-added-rate">...</span> 
                        </div>
                    </div>

                    <div id="workforce-chart" class="flex-1 w-full min-h-[140px]"></div>

                    <div class="grid grid-cols-1 items-center border-t border-slate-200 justify-between mt-4">
                        <div class="flex justify-between items-center pt-4">
                            <!-- Button -->
                            <button id="dropdownDefaultButton" data-dropdown-toggle="lastDaysdropdown"
                                data-dropdown-placement="bottom"
                                class="text-xs font-black text-slate-500 hover:text-royal-blue text-center inline-flex items-center uppercase tracking-widest transition-colors duration-300"
                                type="button">
                                Overall Stats
                                <svg class="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                    fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" d="m19 9-7 7-7-7" />
                                </svg>
                            </button>
                            <!-- Dropdown menu -->
                            <div id="lastDaysdropdown"
                                class="z-20 hidden bg-white divide-y divide-slate-100 rounded-2xl shadow-2xl w-52 border border-slate-200 dark:bg-slate-800 dark:border-slate-700 dark:divide-slate-700 transition-all duration-300">
                                <ul class="py-2 text-[10px] sm:text-xs font-bold text-slate-700 dark:text-slate-300" aria-labelledby="dropdownDefaultButton">
                                    <li class="px-4 py-2 opacity-50 italic">Syncing years...</li>
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

                <!-- Gender Demographics Chart Container -->
                <div
                    class="relative max-w-full w-full bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 p-4 sm:p-7 flex flex-col min-h-[300px] group/card">
                    <div class="flex justify-between items-start mb-4 sm:mb-6">
                        <div>
                            <p class="text-[10px] sm:text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-1">Diversity Index</p>
                            <h5 class="text-xl sm:text-2xl font-black text-royal-blue dark:text-blue-400 leading-none">Gender Demographics</h5>
                            <p class="text-xs sm:text-sm font-bold text-slate-500 dark:text-slate-400 mt-2">Workforce Distribution</p>
                        </div>
                        <div class="flex gap-2">
                            <div
                                class="flex items-center px-2 py-1 text-[10px] font-black text-philippine-red bg-red-50 dark:bg-red-900/20 rounded-xl border border-red-100 dark:border-red-900/30 shadow-xs">
                                <span class="w-2 h-2 rounded-full bg-philippine-red me-2 animate-pulse"></span>
                                <span class="metric-female-ratio uppercase">...</span>
                            </div>
                            <div
                                class="flex items-center px-2 py-1 text-[10px] font-black text-royal-blue bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-100 dark:border-blue-900/30 shadow-xs">
                                <span class="w-2 h-2 rounded-full bg-royal-blue me-2 shadow-[0_0_8px_rgba(0,56,168,0.5)]"></span>
                                <span class="metric-male-ratio uppercase">...</span>
                            </div>
                        </div>
                    </div>

                    <div id="gender-chart" class="flex-1 w-full min-h-[160px]"></div>

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

                <!-- Education Profile (Enhanced Premium Layout) -->
                <div
                    class="max-w-full w-full bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 p-4 md:p-8 flex flex-col min-h-[480px]">

                    <!-- Education Stats Grid - Premium Facelift -->
                    <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8">
                        <div
                            class="relative bg-blue-50/50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-800/50 rounded-2xl p-4 shadow-xs flex flex-col items-center justify-center hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:-translate-y-1 transition-all duration-300 group overflow-hidden">
                            <div class="absolute top-0 right-0 w-8 h-8 bg-royal-blue/5 rounded-bl-3xl"></div>
                            <span
                                class="text-3xl font-black text-royal-blue dark:text-blue-400 count-college-grad group-hover:scale-110 transition-transform">...</span>
                            <span class="text-[9px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest mt-2 text-center leading-tight">College<br>Graduate</span>
                        </div>
                        <div
                            class="relative bg-yellow-50/50 dark:bg-yellow-900/10 border border-yellow-100 dark:border-yellow-800/50 rounded-2xl p-4 shadow-xs flex flex-col items-center justify-center hover:bg-yellow-50 dark:hover:bg-yellow-900/20 hover:-translate-y-1 transition-all duration-300 group overflow-hidden">
                            <div class="absolute top-0 right-0 w-8 h-8 bg-golden-yellow/5 rounded-bl-3xl"></div>
                            <span
                                class="text-3xl font-black text-golden-yellow count-college-lvl group-hover:scale-110 transition-transform">...</span>
                            <span
                                class="text-[9px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest mt-2 text-center leading-tight text-center">College<br>Level</span>
                        </div>
                        <div
                            class="relative bg-red-50/50 dark:bg-red-900/10 border border-red-100 dark:border-red-800/50 rounded-2xl p-4 shadow-xs flex flex-col items-center justify-center hover:bg-red-50 dark:hover:bg-red-900/20 hover:-translate-y-1 transition-all duration-300 group overflow-hidden">
                            <div class="absolute top-0 right-0 w-8 h-8 bg-philippine-red/5 rounded-bl-3xl"></div>
                            <span
                                class="text-3xl font-black text-philippine-red dark:text-red-400 count-hs-grad group-hover:scale-110 transition-transform">...</span>
                            <span class="text-[9px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest mt-2 text-center leading-tight">High School<br>Graduate</span>
                        </div>
                        <div
                            class="relative bg-gray-50 dark:bg-slate-700/20 border border-slate-200 dark:border-slate-700 rounded-2xl p-4 shadow-xs flex flex-col items-center justify-center hover:bg-gray-100 dark:hover:bg-slate-700/40 hover:-translate-y-1 transition-all duration-300 group overflow-hidden">
                            <div class="absolute top-0 right-0 w-8 h-8 bg-slate-200 dark:bg-slate-600 rounded-bl-3xl"></div>
                            <span
                                class="text-3xl font-black text-slate-600 dark:text-slate-300 count-senior-high group-hover:scale-110 transition-transform">...</span>
                            <span
                                class="text-[9px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest mt-2 text-center leading-tight font-mono">Senior High<br>Student/Grad</span>
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

                <!-- Job Roles (Exclusive Premium Container) -->
                <div
                    class="max-w-full w-full bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 p-4 md:p-8 flex flex-col min-h-[350px] group/roles">
                    <div class="flex justify-between border-slate-100 dark:border-slate-700 border-b pb-5 mb-4">
                        <dl>
                            <dt class="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest">Primary Capacity</dt>
                            <dd class="text-3xl font-black text-royal-blue dark:text-blue-400 leading-none mt-2 metric-top-role">...
                            </dd>
                        </dl>
                        <div class="text-right">
                            <span
                                class="inline-flex items-center px-3 py-1 bg-blue-600 dark:bg-blue-500 text-white text-[10px] font-black rounded-full shadow-lg shadow-blue-500/30 uppercase tracking-wider">
                                Active Load
                            </span>
                        </div>
                    </div>

                    <div class="grid grid-cols-2 gap-4 py-4 mb-4">
                        <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-2xl border border-blue-100 dark:border-blue-900/30 transition-transform group-hover/roles:-translate-y-1">
                            <dt class="text-[9px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-[0.2em] mb-1">Office Based</dt>
                            <dd class="text-2xl font-black text-royal-blue dark:text-blue-400 count-office-based">...</dd>
                        </div>
                        <div class="bg-red-50 dark:bg-red-900/20 p-4 rounded-2xl border border-red-100 dark:border-red-900/30 transition-transform group-hover/roles:-translate-y-1">
                            <dt class="text-[9px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-[0.2em] mb-1">Field Based</dt>
                            <dd class="text-2xl font-black text-philippine-red dark:text-red-400 count-field-based">...</dd>
                        </div>
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

                <!-- Age Demographics (Workforce Heatmap Concept) -->
                <div
                    class="lg:col-span-2 bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-3xl p-4 sm:p-8 shadow-sm hover:shadow-2xl transition-all duration-500 min-h-[400px] flex flex-col group/age relative overflow-hidden">
                    <div class="absolute -right-20 -top-20 w-64 h-64 bg-royal-blue/5 rounded-full blur-3xl group-hover/age:bg-royal-blue/10 transition-colors"></div>
                    <div class="flex justify-between items-center mb-10 relative z-10">
                        <div class="flex items-center">
                            <div
                                class="w-14 h-14 sm:w-16 sm:h-16 bg-blue-600 dark:bg-blue-500 rounded-3xl flex items-center justify-center me-4 sm:me-6 shadow-xl shadow-blue-500/20 group-hover/age:rotate-6 group-hover/age:scale-105 transition-all duration-500">
                                <svg class="w-7 h-7 sm:w-8 sm:h-8 text-white"
                                    fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <div>
                                <h5 class="text-lg sm:text-2xl font-black text-slate-800 dark:text-white uppercase tracking-tight">Workforce Age Pattern</h5>
                                <p class="text-[10px] sm:text-xs font-black text-slate-400 dark:text-slate-500 mt-1 uppercase tracking-[0.3em]">
                                    Generation Distribution</p>
                            </div>
                        </div>
                        <div class="text-right">
                            <div class="flex flex-col">
                                <span
                                    class="text-[10px] sm:text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest leading-none mb-2">Age Average</span>
                                <div class="flex items-baseline justify-end gap-2">
                                    <h4 class="text-3xl sm:text-5xl font-black text-royal-blue dark:text-blue-400 leading-none metric-avg-age">...</h4>
                                    <span class="text-xs sm:text-sm font-black text-slate-400 dark:text-slate-500">YRS</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="age-chart" class="flex-1 w-full min-h-[160px]"></div>
                </div>

            </div>

            <!-- End of general-view-section content -->
            </div> <!-- End of general-view-section -->

                <div id="performance-view-section" class="hidden opacity-0 transition-opacity duration-500">
                    <!-- <div class="mb-6">
                        <h2 class="text-2xl font-black text-heading dark:text-white uppercase tracking-tight flex items-center gap-3">
                            <div class="p-2 bg-royal-blue/10 dark:bg-blue-900/40 rounded-xl">
                                <svg class="w-6 h-6 text-royal-blue dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                            </div>
                            System Performance Analyst
                        </h2>
                        <p class="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-2 ms-12">Actionable insights & deployment efficiency metrics</p>
                    </div> -->

                    <!-- Performance KPIs -->
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-8">
                        <!-- Slots Utilization -->
                        <div class="bg-gradient-to-br from-royal-blue via-blue-700 to-indigo-900 rounded-3xl p-6 sm:p-8 text-white shadow-[0_10px_40px_-10px_rgba(0,56,168,0.5)] relative overflow-hidden group hover:-translate-y-1 transition-transform duration-500">
                            <div class="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
                            <div class="absolute right-6 top-6 opacity-20 group-hover:opacity-40 transition-opacity">
                                <svg class="w-12 h-12" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                            </div>
                            
                            <h4 class="text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] opacity-80 mb-2 drop-shadow-sm">Slots Utilization</h4>
                            <div class="flex items-end gap-2 mb-6">
                                <span class="text-5xl sm:text-7xl font-black metric-utilization-rate drop-shadow-lg tracking-tighter">...</span>
                                <span class="text-[10px] sm:text-xs font-bold opacity-70 mb-2 uppercase tracking-widest">of Quota</span>
                            </div>
                            
                            <div class="w-full bg-black/20 h-2.5 rounded-full overflow-hidden backdrop-blur-sm shadow-inner group-hover:bg-black/30 transition-colors">
                                <div class="bg-gradient-to-r from-blue-300 via-white to-blue-100 h-full relative metric-utilization-progress" style="width: 0%">
                                    <div class="absolute top-0 right-0 bottom-0 w-8 bg-white/60 blur-sm animate-pulse"></div>
                                </div>
                            </div>
                            <div class="flex justify-between mt-3 text-[9px] font-black opacity-80 uppercase tracking-widest">
                                <span>0%</span>
                                <span>100% CAP</span>
                            </div>
                        </div>

                        <!-- Onboarding Velocity -->
                        <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-2xl transition-all duration-500 group relative overflow-hidden">
                            <div class="absolute top-0 left-0 w-1.5 h-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.4)]"></div>
                            <div class="flex justify-between items-start mb-4">
                                <h4 class="text-[10px] sm:text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.3em]">Onboarding Velocity</h4>
                                <div class="p-2 sm:p-3 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-500 rounded-xl group-hover:rotate-12 group-hover:scale-110 transition-transform shadow-inner border border-emerald-100 dark:border-emerald-900/30">
                                    <svg class="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                </div>
                            </div>
                            <div class="flex items-end gap-2 mb-2 pt-2">
                                <span class="text-5xl sm:text-6xl font-black text-heading dark:text-white metric-velocity-avg tracking-tight group-hover:-translate-y-1 transition-transform">...</span>
                                <span class="text-[10px] sm:text-xs font-bold text-slate-400 mb-2 uppercase tracking-widest">Days Avg</span>
                            </div>
                            <div class="mt-6 sm:mt-8 flex items-center gap-2">
                                <span class="px-2 py-1 bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400 text-[9px] font-black rounded border border-emerald-200 dark:border-emerald-800 uppercase tracking-widest shadow-xs">Optimal</span>
                                <span class="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Processing Timeline</span>
                            </div>
                        </div>

                        <!-- Retention & Data Integrity Stack -->
                        <div class="grid grid-rows-2 gap-4 sm:gap-6">
                            <!-- Retention Index -->
                            <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 shadow-sm hover:shadow-xl transition-all flex justify-between items-center group relative overflow-hidden">
                                <div class="absolute -right-4 -bottom-4 w-16 h-16 bg-blue-50 dark:bg-blue-900/10 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                                <div class="relative z-10">
                                    <h4 class="text-[9px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-1">Retention Index</h4>
                                    <div class="flex items-baseline gap-1">
                                        <span class="text-3xl font-black text-heading dark:text-white metric-retention-rate">...</span>
                                    </div>
                                </div>
                                <div class="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center relative z-10 border border-blue-100 dark:border-blue-800/50">
                                    <div class="absolute inset-0 border-2 border-royal-blue/30 rounded-2xl scale-110 group-hover:scale-125 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                                    <svg class="w-5 h-5 text-royal-blue dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                </div>
                            </div>

                            <!-- Data Integrity Shield (API Connected Idea) -->
                            <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 shadow-sm dark:shadow-2xl flex justify-between items-center relative overflow-hidden group transition-all duration-500">
                                <div class="absolute right-0 top-0 w-32 h-32 bg-emerald-500/[0.03] dark:bg-emerald-500/10 rounded-full blur-xl group-hover:bg-emerald-500/[0.08] dark:group-hover:bg-emerald-500/20 transition-colors"></div>
                                <div class="relative z-10">
                                    <div class="flex items-center gap-2 mb-1">
                                        <div class="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
                                        <h4 class="text-[9px] font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-[0.2em]">Data Integrity Shield</h4>
                                    </div>
                                    <div class="flex items-baseline gap-1 mt-1">
                                        <span class="text-3xl font-black text-slate-800 dark:text-white">100%</span>
                                        <span class="text-[8px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest bg-slate-50 dark:bg-white/10 px-1.5 py-0.5 rounded ml-1 border border-slate-100 dark:border-white/5">Verified</span>
                                    </div>
                                </div>
                                <div class="relative z-10 text-emerald-500 dark:text-emerald-400/80 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors bg-emerald-50 dark:bg-emerald-400/10 p-2.5 rounded-xl border border-emerald-100 dark:border-emerald-400/20 shadow-sm">
                                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Performance Charts -->
                    <div class="grid grid-cols-1 gap-6 mb-8">
                        <div class="bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-2xl transition-shadow duration-500 relative overflow-hidden group/chart">
                            <div class="absolute inset-0 bg-gradient-to-b from-royal-blue/5 to-transparent opacity-0 group-hover/chart:opacity-100 transition-opacity duration-1000"></div>
                            <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 relative z-10 pb-5 border-b border-slate-100 dark:border-slate-700">
                                <div>
                                    <h5 class="text-xl sm:text-2xl font-black text-heading dark:text-white uppercase tracking-tight flex items-center gap-2">
                                        Deployment Variances
                                    </h5>
                                    <p class="text-[10px] sm:text-xs text-slate-500 font-bold uppercase tracking-[0.2em] mt-1">Target vs Actual Benchmarking Across Regions</p>
                                </div>
                                <div class="hidden sm:flex px-4 py-2 bg-slate-50 dark:bg-slate-700/50 rounded-2xl items-center gap-4 border border-slate-200 dark:border-slate-600 shadow-inner mt-4 sm:mt-0">
                                    <div class="flex items-center gap-2">
                                        <div class="w-2.5 h-2.5 rounded-full bg-royal-blue shadow-[0_0_8px_rgba(0,56,168,0.5)]"></div>
                                        <span class="text-[9px] font-black text-slate-600 dark:text-slate-300 uppercase tracking-wider">Actual Validated</span>
                                    </div>
                                    <div class="flex items-center gap-2">
                                        <div class="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-500"></div>
                                        <span class="text-[9px] font-black text-slate-600 dark:text-slate-300 uppercase tracking-wider">Target Quota</span>
                                    </div>
                                </div>
                            </div>
                            <div id="performance-gap-chart" class="min-h-[350px] relative z-10"></div>
                        </div>
                    </div>
                </div>

                <footer class="mt-8 border-t border-slate-200 dark:border-slate-700 pt-8 pb-4">
                    <!-- Top Row: Compliance Notice -->
                    <div class="mb-8 bg-blue-50/50 dark:bg-blue-900/10 border-l-4 border-royal-blue rounded-r-2xl p-4 sm:p-6 transition-all duration-500">
                        <div class="flex items-start gap-4">
                            <div class="p-2.5 bg-royal-blue/10 dark:bg-blue-400/10 rounded-xl shrink-0 mt-0.5 shadow-sm">
                                <svg class="w-5 h-5 text-royal-blue dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd"
                                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                        clip-rule="evenodd" />
                                </svg>
                            </div>
                            <div>
                                <h4 class="text-[10px] sm:text-xs font-black text-royal-blue dark:text-blue-400 uppercase tracking-[0.2em] mb-1.5">
                                    Statistical Compliance Notice</h4>
                                <p class="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-tight sm:normal-case sm:font-medium leading-relaxed">
                                    This dashboard visualizes aggregated statistical patterns only. PII is
                                    strictly excluded in compliance with <span class="font-black text-royal-blue dark:text-blue-400 underline underline-offset-4 decoration-2">RA
                                        10173</span>.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="flex flex-col sm:flex-row justify-between items-center gap-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                        <!-- Left Side: Brand -->
                        <div class="flex items-center gap-3 group/brand cursor-default">
                            <img src="../../frontend/images/logo/doleiligan.png"
                                class="h-5 sm:h-6 bg-white rounded-full p-0.5 object-contain" alt="DOLE">
                            <div class="w-px h-3 sm:h-4 bg-slate-300 dark:bg-slate-600"></div>
                            <span class="text-[8px] sm:text-[9px] font-black uppercase tracking-widest leading-none whitespace-nowrap text-slate-400 group-hover/brand:text-black dark:text-slate-300 dark:group-hover/brand:text-white transition-colors duration-300">GIP Monitoring</span>
                        </div>

                        <!-- Right Side Grid: Copyright -->
                        <div class="text-right group/copy cursor-default">
                            <p class="text-[7.5px] sm:text-[8px] font-bold uppercase tracking-widest whitespace-nowrap text-slate-400 group-hover/copy:text-black dark:text-slate-300 dark:group-hover/copy:text-white transition-colors duration-300">
                                © <span class="auto-year">2026</span> DOLE-LDNPFO | GIP SYSTEM V4.1
                            </p>
                        </div>
                    </div>
                </footer>

        <script>
            // Security check - redirect if not logged in
            if (localStorage.getItem('isLoggedIn') !== 'true') {
                const path = window.location.pathname;
                const base = path.includes('/dole-system/') ? path.substring(0, path.indexOf('/dole-system/') + '/dole-system/'.length) : '';
                window.location.href = `${base}`;
            }

            // --- DASHBOARD VIEW SWITCHER LOGIC ---
            document.addEventListener('DOMContentLoaded', function() {
                const genBtn = document.getElementById('view-general-btn');
                const perfBtn = document.getElementById('view-performance-btn');
                const genView = document.getElementById('general-view-section');
                const perfView = document.getElementById('performance-view-section');

                if (!genBtn || !perfBtn) return;

                function switchView(target) {
                    if (target === 'performance') {
                        genBtn.classList.remove('bg-white', 'dark:bg-slate-800', 'shadow-sm', 'text-royal-blue', 'dark:text-blue-400', 'font-black');
                        genBtn.classList.add('text-slate-500', 'font-bold');
                        perfBtn.classList.add('bg-white', 'dark:bg-slate-800', 'shadow-sm', 'text-royal-blue', 'dark:text-blue-400', 'font-black');
                        perfBtn.classList.remove('text-slate-500', 'font-bold');

                        genView.classList.add('hidden', 'opacity-0');
                        perfView.classList.remove('hidden');
                        setTimeout(() => perfView.classList.remove('opacity-0'), 10);
                        
                        window.dispatchEvent(new Event('resize'));
                    } else {
                        perfBtn.classList.remove('bg-white', 'dark:bg-slate-800', 'shadow-sm', 'text-royal-blue', 'dark:text-blue-400', 'font-black');
                        perfBtn.classList.add('text-slate-500', 'font-bold');
                        genBtn.classList.add('bg-white', 'dark:bg-slate-800', 'shadow-sm', 'text-royal-blue', 'dark:text-blue-400', 'font-black');
                        genBtn.classList.remove('text-slate-500', 'font-bold');

                        perfView.classList.add('hidden', 'opacity-0');
                        genView.classList.remove('hidden');
                        setTimeout(() => genView.classList.remove('opacity-0'), 10);
                        
                        window.dispatchEvent(new Event('resize'));
                    }
                }

                genBtn.addEventListener('click', () => switchView('general'));
                perfBtn.addEventListener('click', () => switchView('performance'));
            });
        </script>

</body>

</html>