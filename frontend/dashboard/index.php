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
                            <span class="text-[0.625rem] font-semibold text-gray-500 uppercase tracking-wider">GIP
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
                                class="metric-total-beneficiaries"><span role="status" aria-label="Loading" class="relative inline-block h-[0.72em] w-[2.5em] overflow-hidden rounded-sm bg-gray-200 align-middle dark:bg-gray-700"><span class="dashboard-skeleton-sweep absolute inset-y-0 -left-full w-full bg-gradient-to-r from-transparent via-white/80 to-transparent dark:via-white/20"></span><span class="sr-only">Loading</span></span></span> Beneficiaries</span>
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
        <div class="px-1 py-6 sm:p-6">

            <!-- Page Header -->
            <!-- Page Header (Premium Modern Facelift) -->
            <div class="mb-8 px-2 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div class="flex items-center gap-4">
                    <div
                        class="hidden sm:flex shrink-0 w-12 h-12 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm items-center justify-center">
                        <svg class="w-7 h-7 text-royal-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <div>
                        <div class="flex items-center gap-2 mb-1">
                            <span
                                class="px-2 py-0.5 bg-royal-blue text-white text-[0.5625rem] font-black rounded uppercase tracking-widest hidden sm:inline-block">Primary
                                Analytics</span>
                            <h1 class="text-2xl sm:text-3xl font-black text-heading dark:text-white leading-tight">
                                <span class="sm:hidden">2026 GIP Monitor</span>
                                <span class="hidden sm:inline">2026 GIP Analytics Dashboard</span>
                            </h1>
                        </div>
                        <p
                            class="text-[0.625rem] sm:text-sm text-body dark:text-slate-400 font-bold uppercase tracking-wider sm:normal-case sm:font-medium">
                            <span class="sm:hidden">Statistical Dashboard & Visualization</span>
                            <span class="hidden sm:inline">Comprehensive analysis and visual monitoring of program
                                beneficiaries</span>
                        </p>
                    </div>
                </div>
                <div
                    class="flex items-center gap-2 bg-slate-100 dark:bg-slate-700/50 p-1.5 rounded-xl border border-slate-200 dark:border-slate-600 self-start md:self-auto box-border">
                    <button id="view-general-btn"
                        class="px-3 py-1.5 bg-white dark:bg-slate-800 rounded-lg shadow-sm text-[0.625rem] font-black text-royal-blue dark:text-blue-400 uppercase tracking-widest transition-all duration-300 cursor-pointer">General
                        Overview</button>
                    <button id="view-quick-access-btn"
                        class="px-3 py-1.5 text-[10px] font-bold text-slate-500 hover:text-royal-blue dark:hover:text-blue-400 transition-all duration-300 cursor-pointer uppercase tracking-widest">QUICK ACCESS</button>
                </div>
            </div>

            <!-- Custom Search Extra Stats Button -->
            <div class="mb-6 px-2 flex justify-end">
                <button onclick="window.showSearchExtraStatsModal()" class="flex items-center gap-2 px-4 py-2.5 bg-royal-blue text-white rounded-xl shadow-sm hover:bg-blue-700 transition-all duration-300 cursor-pointer text-xs font-black uppercase tracking-widest active:scale-95">
                    <svg class="w-5 h-5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
                    </svg>
                    Search Extra Stats
                </button>
            </div>

            <!-- Dashboard Content Wrapper for Switching -->
            <div id="general-view-section" class="transition-opacity duration-500">
                <!-- Key Metrics Summary (Existing) -->

                <!-- Key Metrics Summary -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    <!-- Total Beneficiaries Card -->
                    <div
                        class="relative overflow-hidden bg-white dark:bg-slate-800/80 border border-default dark:border-slate-700 rounded-r-2xl rounded-l-none p-4 sm:p-5 shadow-sm hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 ease-out cursor-pointer group">
                        <div class="absolute top-0 left-0 w-1 h-full bg-royal-blue"></div>
                        <div
                            class="absolute -right-8 -bottom-8 w-24 h-24 bg-royal-blue/5 rounded-full blur-2xl group-hover:bg-royal-blue/10 transition-colors">
                        </div>
                        <div class="flex items-center justify-between gap-4 relative z-10">
                            <div class="min-w-0">
                                <p
                                    class="text-[0.5625rem] sm:text-[0.625rem] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-1 whitespace-nowrap">
                                    Total Beneficiaries
                                </p>
                                <h3
                                    class="text-3xl sm:text-4xl font-black text-royal-blue dark:text-blue-400 group-hover:translate-x-1 transition-transform duration-500 metric-total-beneficiaries"><span role="status" aria-label="Loading" class="relative inline-block h-[0.72em] w-[2.5em] overflow-hidden rounded-sm bg-gray-200 align-middle dark:bg-gray-700"><span class="dashboard-skeleton-sweep absolute inset-y-0 -left-full w-full bg-gradient-to-r from-transparent via-white/80 to-transparent dark:via-white/20"></span><span class="sr-only">Loading</span></span></h3>
                            </div>
                            <div
                                class="shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-blue-50 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 shadow-inner">
                                <svg class="w-6 h-6 sm:w-7 sm:h-7 text-royal-blue dark:text-blue-300" fill="none"
                                    stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <!-- Total Male Card -->
                    <div
                        class="group relative cursor-pointer overflow-hidden rounded-r-2xl rounded-l-none border border-default bg-white p-4 shadow-sm transition-all duration-500 ease-out hover:scale-[1.02] hover:shadow-2xl dark:border-slate-700 dark:bg-slate-800/80 sm:p-5">
                        <div class="absolute inset-y-0 left-0 w-1 bg-blue-600 dark:bg-blue-400"></div>
                        <div class="absolute -bottom-8 -right-8 h-24 w-24 rounded-full bg-blue-500/5 blur-2xl transition-colors group-hover:bg-blue-500/10"></div>
                        <div class="relative z-10 flex items-center justify-between gap-4">
                            <div class="min-w-0">
                                <p class="mb-1 whitespace-nowrap text-[0.5625rem] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 sm:text-[0.625rem]">Total Male</p>
                                <h3 class="metric-male-ratio text-3xl font-black text-blue-600 transition-transform duration-500 group-hover:translate-x-1 dark:text-blue-400 sm:text-4xl"><span role="status" aria-label="Loading" class="relative inline-block h-[0.72em] w-[2.5em] overflow-hidden rounded-sm bg-gray-200 align-middle dark:bg-gray-700"><span class="dashboard-skeleton-sweep absolute inset-y-0 -left-full w-full bg-gradient-to-r from-transparent via-white/80 to-transparent dark:via-white/20"></span><span class="sr-only">Loading</span></span></h3>
                            </div>
                            <div class="flex h-12 w-12 shrink-0 items-center justify-center border border-blue-100 bg-blue-50 text-blue-600 shadow-inner transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 dark:border-blue-900/50 dark:bg-blue-900/30 dark:text-blue-300 sm:h-14 sm:w-14">
                                <svg class="h-7 w-7 sm:h-8 sm:w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.25" aria-hidden="true">
                                    <circle cx="9" cy="15" r="5"></circle>
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m13 11 7-7m0 0h-5m5 0v5"></path>
                                </svg>
                            </div>
                        </div>
                    </div>

                    <!-- Total Female Card -->
                    <div
                        class="group relative cursor-pointer overflow-hidden rounded-r-2xl rounded-l-none border border-default bg-white p-4 shadow-sm transition-all duration-500 ease-out hover:scale-[1.02] hover:shadow-2xl dark:border-slate-700 dark:bg-slate-800/80 sm:p-5">
                        <div class="absolute inset-y-0 left-0 w-1 bg-pink-500 dark:bg-pink-400"></div>
                        <div class="absolute -bottom-8 -right-8 h-24 w-24 rounded-full bg-pink-500/5 blur-2xl transition-colors group-hover:bg-pink-500/10"></div>
                        <div class="relative z-10 flex items-center justify-between gap-4">
                            <div class="min-w-0">
                                <p class="mb-1 whitespace-nowrap text-[0.5625rem] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 sm:text-[0.625rem]">Total Female</p>
                                <h3 class="metric-female-ratio text-3xl font-black text-pink-500 transition-transform duration-500 group-hover:translate-x-1 dark:text-pink-400 sm:text-4xl"><span role="status" aria-label="Loading" class="relative inline-block h-[0.72em] w-[2.5em] overflow-hidden rounded-sm bg-gray-200 align-middle dark:bg-gray-700"><span class="dashboard-skeleton-sweep absolute inset-y-0 -left-full w-full bg-gradient-to-r from-transparent via-white/80 to-transparent dark:via-white/20"></span><span class="sr-only">Loading</span></span></h3>
                            </div>
                            <div class="flex h-12 w-12 shrink-0 items-center justify-center border border-pink-100 bg-pink-50 text-pink-500 shadow-inner transition-all duration-500 group-hover:-rotate-6 group-hover:scale-110 dark:border-pink-900/50 dark:bg-pink-900/30 dark:text-pink-300 sm:h-14 sm:w-14">
                                <svg class="h-7 w-7 sm:h-8 sm:w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.25" aria-hidden="true">
                                    <circle cx="12" cy="8" r="5"></circle>
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 13v8m-3-3h6"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <!-- Highest Age Share Card -->
                    <div
                        class="relative overflow-hidden bg-white dark:bg-slate-800/80 border border-default dark:border-slate-700 rounded-r-2xl rounded-l-none p-4 sm:p-5 shadow-sm hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 ease-out cursor-pointer group">
                        <div class="absolute top-0 left-0 w-1 h-full bg-slate-400 dark:bg-slate-500"></div>
                        <div
                            class="absolute -right-8 -bottom-8 w-24 h-24 bg-slate-500/5 rounded-full blur-2xl group-hover:bg-slate-500/10 transition-colors">
                        </div>
                        <div class="flex items-center justify-between gap-4 relative z-10">
                            <div class="min-w-0">
                                <p
                                    class="text-[0.5625rem] sm:text-[0.625rem] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-1 whitespace-nowrap">
                                    Highest Age Share
                                </p>
                                <h3 class="metric-top-age-label text-3xl sm:text-4xl font-black text-heading dark:text-white group-hover:translate-x-1 transition-transform duration-500"><span role="status" aria-label="Loading" class="relative inline-block h-[0.72em] w-[2.5em] overflow-hidden rounded-sm bg-gray-200 align-middle dark:bg-gray-700"><span class="dashboard-skeleton-sweep absolute inset-y-0 -left-full w-full bg-gradient-to-r from-transparent via-white/80 to-transparent dark:via-white/20"></span><span class="sr-only">Loading</span></span></h3>
                                <p class="metric-top-age-share mt-1 text-[0.625rem] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500"><span role="status" aria-label="Loading" class="relative inline-block h-[0.72em] w-[2.5em] overflow-hidden rounded-sm bg-gray-200 align-middle dark:bg-gray-700"><span class="dashboard-skeleton-sweep absolute inset-y-0 -left-full w-full bg-gradient-to-r from-transparent via-white/80 to-transparent dark:via-white/20"></span><span class="sr-only">Loading</span></span></p>
                            </div>
                            <div
                                class="shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gray-100 dark:bg-slate-700/50 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:skew-x-3 group-hover:scale-110 shadow-inner">
                                <svg class="w-6 h-6 sm:w-7 sm:h-7 text-slate-600 dark:text-slate-400" fill="none"
                                    stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
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
                        <div
                            class="absolute top-0 right-0 p-6 opacity-5 group-hover/card:opacity-10 transition-opacity">
                            <svg class="w-20 h-20 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                            </svg>
                        </div>
                        <div class="flex justify-between items-start mb-4 sm:mb-6 relative z-10">
                            <div>
                                <p
                                    class="text-[0.625rem] sm:text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-1">
                                    Live Statistics</p>
                                <h5 id="added-metric-value"
                                    class="text-3xl sm:text-5xl font-black transition-colors duration-500 leading-none metric-added-count"><span role="status" aria-label="Loading" class="relative inline-block h-[0.72em] w-[2.5em] overflow-hidden rounded-sm bg-gray-200 align-middle dark:bg-gray-700"><span class="dashboard-skeleton-sweep absolute inset-y-0 -left-full w-full bg-gradient-to-r from-transparent via-white/80 to-transparent dark:via-white/20"></span><span class="sr-only">Loading</span></span></h5>
                                <p class="text-xs sm:text-sm font-bold text-slate-600 dark:text-slate-400 mt-2">Total
                                    Added Beneficiaries</p>
                            </div>
                            <div id="added-metric-badge"
                                class="flex items-center px-3 py-1 text-[0.625rem] sm:text-xs font-black text-white rounded-full shadow-lg transition-all duration-500 border border-white/20 translate-y-1">
                                <svg id="added-metric-icon" class="w-3 h-3 me-1.5 transition-transform duration-500"
                                    fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="3">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M12 6v13m0-13 4 4m-4-4-4 4" />
                                </svg>
                                <span class="metric-added-rate"><span role="status" aria-label="Loading" class="relative inline-block h-[0.72em] w-[2.5em] overflow-hidden rounded-sm bg-gray-200 align-middle dark:bg-gray-700"><span class="dashboard-skeleton-sweep absolute inset-y-0 -left-full w-full bg-gradient-to-r from-transparent via-white/80 to-transparent dark:via-white/20"></span><span class="sr-only">Loading</span></span></span>
                            </div>
                        </div>

                        <div id="workforce-chart" class="flex-1 w-full min-h-[140px]"></div>

                        <div class="grid grid-cols-1 items-center border-t border-slate-200 justify-between mt-4">
                            <div class="flex justify-between items-center pt-4">
                                <!-- Button -->
                                <button id="dropdownDefaultButton" data-dropdown-toggle="lastDaysdropdown"
                                    data-dropdown-placement="bottom"
                                    class="cursor-pointer text-xs font-black text-slate-500 hover:text-royal-blue text-center inline-flex items-center uppercase tracking-widest transition-colors duration-300"
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
                                    <ul class="py-2 text-[0.625rem] sm:text-xs font-bold text-slate-700 dark:text-slate-300"
                                        aria-labelledby="dropdownDefaultButton">
                                        <li class="px-4 py-2 opacity-50 italic">Syncing years...</li>
                                    </ul>
                                </div>
                                <a href="#"
                                    class="cursor-pointer inline-flex items-center uppercase tracking-wider font-extrabold text-royal-blue hover:text-blue-800 text-xs hover:underline">
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
                                <p
                                    class="text-[0.625rem] sm:text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-1">
                                    Diversity Index</p>
                                <h5
                                    class="text-xl sm:text-2xl font-black text-royal-blue dark:text-blue-400 leading-none">
                                    Gender Demographics</h5>
                                <p class="text-xs sm:text-sm font-bold text-slate-500 dark:text-slate-400 mt-2">
                                    Workforce Distribution</p>
                            </div>
                            <div class="flex gap-2">
                                <div
                                    class="flex items-center px-2 py-1 text-[0.625rem] font-black text-philippine-red bg-red-50 dark:bg-red-900/20 rounded-xl border border-red-100 dark:border-red-900/30 shadow-xs">
                                    <span class="w-2 h-2 rounded-full bg-philippine-red me-2 animate-pulse"></span>
                                    <span class="metric-female-ratio uppercase"><span role="status" aria-label="Loading" class="relative inline-block h-[0.72em] w-[2.5em] overflow-hidden rounded-sm bg-gray-200 align-middle dark:bg-gray-700"><span class="dashboard-skeleton-sweep absolute inset-y-0 -left-full w-full bg-gradient-to-r from-transparent via-white/80 to-transparent dark:via-white/20"></span><span class="sr-only">Loading</span></span></span>
                                </div>
                                <div
                                    class="flex items-center px-2 py-1 text-[0.625rem] font-black text-royal-blue bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-100 dark:border-blue-900/30 shadow-xs">
                                    <span
                                        class="w-2 h-2 rounded-full bg-royal-blue me-2 shadow-[0_0_8px_rgba(0,56,168,0.5)]"></span>
                                    <span class="metric-male-ratio uppercase"><span role="status" aria-label="Loading" class="relative inline-block h-[0.72em] w-[2.5em] overflow-hidden rounded-sm bg-gray-200 align-middle dark:bg-gray-700"><span class="dashboard-skeleton-sweep absolute inset-y-0 -left-full w-full bg-gradient-to-r from-transparent via-white/80 to-transparent dark:via-white/20"></span><span class="sr-only">Loading</span></span></span>
                                </div>
                            </div>
                        </div>

                        <div id="gender-chart" class="flex-1 w-full min-h-[320px]"></div>

                        <div class="grid grid-cols-1 items-center border-t border-slate-200 justify-between mt-4">
                            <div class="flex justify-between items-center pt-4">
                                <div class="flex items-center text-xs font-bold text-slate-500 italic">
                                    <svg class="w-3.5 h-3.5 me-1 text-royal-blue" fill="currentColor"
                                        viewBox="0 0 20 20">
                                        <path fill-rule="evenodd"
                                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                            clip-rule="evenodd" />
                                    </svg>
                                    Aggregated statistics
                                </div>
                                <button id="gender-filter-button" data-dropdown-toggle="gender-filter-dropdown"
                                    data-dropdown-placement="bottom-end" type="button"
                                    class="cursor-pointer inline-flex items-center uppercase tracking-wider font-extrabold text-royal-blue hover:text-blue-800 text-xs hover:underline">
                                    Category Filter
                                    <svg class="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2" d="m19 9-7 7-7-7" />
                                    </svg>
                                </button>
                                <div id="gender-filter-dropdown"
                                    class="z-20 hidden min-w-44 rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-slate-700 dark:bg-slate-800">
                                    <ul class="py-2 text-[0.625rem] sm:text-xs font-bold text-slate-700 dark:text-slate-300"
                                        id="gender-filter-options">
                                        <li class="px-4 py-2 opacity-50 italic">Syncing years...</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <!-- Secondary Charts Grid -->
                <div class="grid grid-cols-1 items-stretch gap-6 mb-8 lg:grid-cols-2">

                    <!-- Education Profile -->
                    <section
                        class="flex h-full w-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-500 hover:shadow-xl dark:border-slate-700 dark:bg-slate-800/80 sm:p-6">
                        <div class="flex flex-col gap-4 border-b border-slate-100 pb-4 dark:border-slate-700 sm:flex-row sm:items-center sm:justify-between">
                            <div class="flex min-w-0 items-center gap-3">
                                <div class="flex h-11 w-11 shrink-0 items-center justify-center bg-royal-blue text-white shadow-lg shadow-blue-500/20">
                                    <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.25" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m3 9 9-5 9 5-9 5-9-5Zm3 2.5V16c3.5 2.75 8.5 2.75 12 0v-4.5M21 9v6" />
                                    </svg>
                                </div>
                                <div class="min-w-0">
                                    <h5 class="text-base font-black uppercase tracking-tight text-slate-800 dark:text-white sm:text-xl">Education Profile</h5>
                                    <p class="mt-1 text-[0.625rem] font-black uppercase tracking-[0.16em] text-slate-400 dark:text-slate-500">Exact beneficiary count by attainment</p>
                                </div>
                            </div>
                            <div class="grid grid-cols-2 gap-px overflow-hidden border border-slate-200 bg-slate-200 dark:border-slate-700 dark:bg-slate-700">
                                <div class="bg-slate-50 px-3 py-2 dark:bg-slate-900/60">
                                    <span class="block text-[0.5rem] font-black uppercase tracking-widest text-slate-400">Recorded</span>
                                    <span id="education-profile-total" class="mt-0.5 block text-lg font-black tabular-nums text-royal-blue dark:text-blue-400">0</span>
                                </div>
                                <div class="min-w-28 bg-slate-50 px-3 py-2 dark:bg-slate-900/60">
                                    <span class="block text-[0.5rem] font-black uppercase tracking-widest text-slate-400">Leading Level</span>
                                    <span id="education-profile-leading" class="mt-1 block truncate text-[0.625rem] font-black uppercase text-slate-700 dark:text-slate-200">No data</span>
                                </div>
                            </div>
                        </div>

                        <div id="education-chart" class="mt-4 h-[300px] w-full overflow-visible" aria-label="Education level distribution chart"></div>

                        <div class="grid grid-cols-2 gap-2 border-t border-dashed border-slate-200 pt-4 dark:border-slate-700 sm:grid-cols-4">
                            <div class="border-l-4 border-royal-blue bg-slate-50 px-3 py-3 dark:bg-slate-900/50">
                                <span class="block text-[0.5rem] font-black uppercase leading-tight text-slate-400">College Graduate</span>
                                <span class="count-college-grad mt-1 block text-lg font-black tabular-nums text-slate-800 dark:text-white">0</span>
                            </div>
                            <div class="border-l-4 border-golden-yellow bg-slate-50 px-3 py-3 dark:bg-slate-900/50">
                                <span class="block text-[0.5rem] font-black uppercase leading-tight text-slate-400">College Level</span>
                                <span class="count-college-lvl mt-1 block text-lg font-black tabular-nums text-slate-800 dark:text-white">0</span>
                            </div>
                            <div class="border-l-4 border-philippine-red bg-slate-50 px-3 py-3 dark:bg-slate-900/50">
                                <span class="block text-[0.5rem] font-black uppercase leading-tight text-slate-400">High School Graduate</span>
                                <span class="count-hs-grad mt-1 block text-lg font-black tabular-nums text-slate-800 dark:text-white">0</span>
                            </div>
                            <div class="border-l-4 border-emerald-500 bg-slate-50 px-3 py-3 dark:bg-slate-900/50">
                                <span class="block text-[0.5rem] font-black uppercase leading-tight text-slate-400">Senior High</span>
                                <span class="count-senior-high mt-1 block text-lg font-black tabular-nums text-slate-800 dark:text-white">0</span>
                            </div>
                        </div>

                        <div class="mt-auto flex flex-col gap-2 border-t border-slate-100 pt-4 text-[0.5625rem] font-bold uppercase tracking-wider text-slate-400 dark:border-slate-700 sm:flex-row sm:items-center sm:justify-between">
                            <span>Unrecorded education values are excluded.</span>
                            <a href="../../frontend/export/index.php" class="inline-flex items-center gap-1 font-black text-royal-blue transition-colors hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
                                Export Full Report
                                <svg class="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 12h14m-5-5 5 5-5 5" /></svg>
                            </a>
                        </div>
                    </section>
                    <!-- Assigned Units Distribution -->
                    <div
                        class="group/units flex h-full w-full max-w-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-500 hover:shadow-2xl dark:border-slate-700 dark:bg-slate-800/80 sm:p-6">
                        <div class="mb-4 flex items-start gap-4 border-b border-slate-100 pb-4 dark:border-slate-700">
                            <div class="flex h-11 w-11 shrink-0 items-center justify-center bg-blue-600 text-white shadow-lg shadow-blue-500/20 dark:bg-blue-500">
                                <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.25" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 20V10m5 10V4m6 16v-7m5 7V7"></path>
                                </svg>
                            </div>
                            <div class="min-w-0">
                                <h5 class="text-base font-black uppercase tracking-tight text-slate-800 dark:text-white sm:text-xl">
                                    Total Assigned Added per Units
                                </h5>
                                <p class="mt-1 text-[0.625rem] font-black uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500">
                                    Global GIP count by assigned unit
                                </p>
                            </div>
                        </div>
                        <div id="assigned-units-chart" class="h-[230px] w-full"></div>
                        <div id="assigned-units-summary" class="mt-3 grid grid-cols-1 gap-2 border-t border-dashed border-slate-200 pt-4 dark:border-slate-700 sm:grid-cols-2" aria-live="polite"></div>
                        <p class="border-t border-slate-100 pt-3 text-[0.625rem] font-bold uppercase tracking-wider text-slate-400 dark:border-slate-700 dark:text-slate-500">
                            Configured units only; unassigned values are excluded.
                        </p>
                    </div>

                </div>
                <!-- Age Demographics (Workforce Heatmap Concept) -->
                <div
                    class="lg:col-span-2 bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-3xl p-4 sm:p-8 shadow-sm hover:shadow-2xl transition-all duration-500 min-h-[400px] flex flex-col group/age relative overflow-hidden">
                    <div
                        class="absolute -right-20 -top-20 w-64 h-64 bg-royal-blue/5 rounded-full blur-3xl group-hover/age:bg-royal-blue/10 transition-colors">
                    </div>
                    <div class="relative z-10 mb-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                        <div class="flex items-center">
                            <div
                                class="w-14 h-14 sm:w-16 sm:h-16 bg-blue-600 dark:bg-blue-500 rounded-3xl flex items-center justify-center me-4 sm:me-6 shadow-xl shadow-blue-500/20 group-hover/age:rotate-6 group-hover/age:scale-105 transition-all duration-500">
                                <svg class="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <div>
                                <h5
                                    class="text-lg sm:text-2xl font-black text-slate-800 dark:text-white uppercase tracking-tight">
                                    Monthly Age Distribution</h5>
                                <p
                                    class="text-[0.625rem] sm:text-xs font-black text-slate-400 dark:text-slate-500 mt-1 uppercase tracking-[0.3em]">
                                    Age Brackets and Monthly Totals</p>
                            </div>
                        </div>
                        <div class="shrink-0 border-l-4 border-royal-blue bg-blue-50 px-4 py-3 text-left dark:bg-blue-950/30 sm:text-right">
                            <span class="block text-[0.5625rem] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">Data Year</span>
                            <span id="age-chart-year" class="mt-1 block text-2xl font-black leading-none text-royal-blue dark:text-blue-400"><span role="status" aria-label="Loading" class="relative inline-block h-[0.72em] w-[2.5em] overflow-hidden rounded-sm bg-gray-200 align-middle dark:bg-gray-700"><span class="dashboard-skeleton-sweep absolute inset-y-0 -left-full w-full bg-gradient-to-r from-transparent via-white/80 to-transparent dark:via-white/20"></span><span class="sr-only">Loading</span></span></span>
                            <span class="mt-1 block text-[0.5625rem] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">Latest recorded year</span>
                        </div>
                    </div>
                    <div id="age-chart" class="h-[350px] w-full"></div>
                </div>

            </div>

            <!-- End of general-view-section content -->
        </div> <!-- End of general-view-section -->

        <div id="quick-access-view-section" class="hidden opacity-0 transition-opacity duration-500">
            <div class="mb-6 border-l-4 border-golden-yellow bg-royal-blue px-4 py-5 text-white shadow-lg shadow-blue-900/10 sm:px-6">
                <div class="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <div class="mb-2 inline-flex items-center gap-2 bg-white/10 px-2.5 py-1 text-[0.5625rem] font-black uppercase tracking-[0.2em] text-blue-100">
                            <span class="h-1.5 w-1.5 bg-golden-yellow"></span>
                            Command Center
                        </div>
                        <h2 class="text-xl font-black uppercase tracking-tight sm:text-3xl">Quick Access Shortcuts</h2>
                        <p class="mt-1 text-[0.625rem] font-bold uppercase tracking-[0.16em] text-blue-100 sm:text-xs">High-frequency GIP tools in one workspace</p>
                    </div>
                    <div class="inline-flex w-fit items-center gap-2 border border-white/20 bg-white/10 px-3 py-2 text-[0.625rem] font-black uppercase tracking-widest">
                        <span class="relative flex h-2 w-2"><span class="absolute inline-flex h-full w-full animate-ping bg-emerald-300 opacity-75"></span><span class="relative inline-flex h-2 w-2 bg-emerald-400"></span></span>
                        System Ready
                    </div>
                </div>
            </div>

            <div class="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 xl:grid-cols-5">
                <button onclick="window.location.href = basePath + 'frontend/GIP/index.php?add_member=true'"
                    class="group relative flex min-h-48 cursor-pointer flex-col justify-between overflow-hidden rounded-none border border-blue-200 bg-white p-4 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-royal-blue hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-royal-blue/15 dark:border-blue-900/60 dark:bg-slate-900 sm:min-h-52 sm:p-5">
                    <div class="absolute inset-x-0 top-0 h-1.5 bg-royal-blue"></div>
                    <svg class="pointer-events-none absolute -bottom-8 -right-8 h-40 w-40 -rotate-12 text-royal-blue opacity-[0.07] transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110 dark:text-blue-300 dark:opacity-[0.08] sm:h-44 sm:w-44" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.25" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2m7-10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm10 10v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75M19 8v6m-3-3h6" /></svg>
                    <div class="relative z-10 flex items-start justify-between pt-1">
                        <span class="flex h-10 w-10 items-center justify-center bg-blue-50 text-royal-blue transition-transform duration-300 group-hover:scale-110 dark:bg-blue-900/30 dark:text-blue-400 sm:h-12 sm:w-12">
                            <svg class="h-5 w-5 sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.25" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" /></svg>
                        </span>
                        <span class="text-[0.5625rem] font-black tracking-[0.2em] text-blue-300 dark:text-blue-700">01</span>
                    </div>
                    <div class="relative z-10">
                        <h4 class="text-sm font-black uppercase leading-tight text-slate-800 transition-colors group-hover:text-royal-blue dark:text-white sm:text-base">Register Member</h4>
                        <p class="mt-1 text-[0.625rem] font-bold uppercase tracking-wider text-slate-400 sm:text-xs">Add GIP beneficiary</p>
                        <span class="mt-3 inline-flex items-center gap-1 text-[0.625rem] font-black uppercase tracking-widest text-royal-blue dark:text-blue-400 sm:text-xs">Open <svg class="h-3 w-3 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="m9 18 6-6-6-6" /></svg></span>
                    </div>
                </button>

                <button onclick="window.location.href = basePath + 'frontend/GIP/index.php?focus_search=true'"
                    class="group relative flex min-h-48 cursor-pointer flex-col justify-between overflow-hidden rounded-none border border-red-200 bg-white p-4 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-philippine-red hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-red-500/15 dark:border-red-900/60 dark:bg-slate-900 sm:min-h-52 sm:p-5">
                    <div class="absolute inset-x-0 top-0 h-1.5 bg-philippine-red"></div>
                    <svg class="pointer-events-none absolute -bottom-8 -right-8 h-40 w-40 rotate-12 text-philippine-red opacity-[0.07] transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110 dark:text-red-300 dark:opacity-[0.08] sm:h-44 sm:w-44" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.25" aria-hidden="true"><circle cx="10" cy="9" r="4" /><path stroke-linecap="round" stroke-linejoin="round" d="M3 20a7 7 0 0 1 12-4.9m6 5.9-4.2-4.2m1.2-3.3a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z" /></svg>
                    <div class="relative z-10 flex items-start justify-between pt-1">
                        <span class="flex h-10 w-10 items-center justify-center bg-red-50 text-philippine-red transition-transform duration-300 group-hover:scale-110 dark:bg-red-900/30 dark:text-red-400 sm:h-12 sm:w-12">
                            <svg class="h-5 w-5 sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.25" d="m21 21-4.35-4.35m1.35-5.15a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Z" /></svg>
                        </span>
                        <span class="text-[0.5625rem] font-black tracking-[0.2em] text-red-300 dark:text-red-800">02</span>
                    </div>
                    <div class="relative z-10">
                        <h4 class="text-sm font-black uppercase leading-tight text-slate-800 transition-colors group-hover:text-philippine-red dark:text-white sm:text-base">Member Lookup</h4>
                        <p class="mt-1 text-[0.625rem] font-bold uppercase tracking-wider text-slate-400 sm:text-xs">Search GIP records</p>
                        <span class="mt-3 inline-flex items-center gap-1 text-[0.625rem] font-black uppercase tracking-widest text-philippine-red dark:text-red-400 sm:text-xs">Search <svg class="h-3 w-3 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="m9 18 6-6-6-6" /></svg></span>
                    </div>
                </button>

                <button onclick="window.location.href = basePath + 'frontend/export/index.php'"
                    class="group relative flex min-h-48 cursor-pointer flex-col justify-between overflow-hidden rounded-none border border-yellow-200 bg-white p-4 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-golden-yellow hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-yellow-400/20 dark:border-yellow-900/60 dark:bg-slate-900 sm:min-h-52 sm:p-5">
                    <div class="absolute inset-x-0 top-0 h-1.5 bg-golden-yellow"></div>
                    <svg class="pointer-events-none absolute -bottom-8 -right-8 h-40 w-40 -rotate-12 text-amber-500 opacity-[0.09] transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110 dark:text-yellow-300 dark:opacity-[0.08] sm:h-44 sm:w-44" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.25" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M6 2h8l4 4v16H6V2Zm8 0v5h5M9 17v-4m3 4V9m3 8v-6" /></svg>
                    <div class="relative z-10 flex items-start justify-between pt-1">
                        <span class="flex h-10 w-10 items-center justify-center bg-yellow-50 text-amber-600 transition-transform duration-300 group-hover:scale-110 dark:bg-yellow-900/30 dark:text-yellow-300 sm:h-12 sm:w-12">
                            <svg class="h-5 w-5 sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.25" d="M9 12h6m-6 4h6m2 5H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.5L19 9.5V19a2 2 0 0 1-2 2Z" /></svg>
                        </span>
                        <span class="text-[0.5625rem] font-black tracking-[0.2em] text-yellow-500/60 dark:text-yellow-700">03</span>
                    </div>
                    <div class="relative z-10">
                        <h4 class="text-sm font-black uppercase leading-tight text-slate-800 transition-colors group-hover:text-amber-600 dark:text-white sm:text-base">Report Generator</h4>
                        <p class="mt-1 text-[0.625rem] font-bold uppercase tracking-wider text-slate-400 sm:text-xs">Export payroll data</p>
                        <span class="mt-3 inline-flex items-center gap-1 text-[0.625rem] font-black uppercase tracking-widest text-amber-600 dark:text-yellow-300 sm:text-xs">Generate <svg class="h-3 w-3 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="m9 18 6-6-6-6" /></svg></span>
                    </div>
                </button>

                <button onclick="window.location.href = basePath + 'frontend/user/settings/index.php'"
                    class="group relative flex min-h-48 cursor-pointer flex-col justify-between overflow-hidden rounded-none border border-emerald-200 bg-white p-4 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-emerald-500/15 dark:border-emerald-900/60 dark:bg-slate-900 sm:min-h-52 sm:p-5">
                    <div class="absolute inset-x-0 top-0 h-1.5 bg-emerald-500"></div>
                    <svg class="pointer-events-none absolute -bottom-8 -right-8 h-40 w-40 rotate-12 text-emerald-600 opacity-[0.07] transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110 dark:text-emerald-300 dark:opacity-[0.08] sm:h-44 sm:w-44" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.25" aria-hidden="true"><circle cx="10" cy="8" r="4" /><path stroke-linecap="round" stroke-linejoin="round" d="M3 21a7 7 0 0 1 14 0m3.5-8.5 1 1m-5 0 1-1m1.5-2v-1m0 8v-1m-3.5-3h-1m8 0h-1m-.44-2.56.7-.7m-5.66 5.66.7-.7m3.26.7.7.7m-5.66-5.66.7.7" /></svg>
                    <div class="relative z-10 flex items-start justify-between pt-1">
                        <span class="flex h-10 w-10 items-center justify-center bg-emerald-50 text-emerald-600 transition-transform duration-300 group-hover:scale-110 dark:bg-emerald-900/30 dark:text-emerald-400 sm:h-12 sm:w-12">
                            <svg class="h-5 w-5 sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.25" d="M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM5 21a7 7 0 0 1 14 0" /></svg>
                        </span>
                        <span class="text-[0.5625rem] font-black tracking-[0.2em] text-emerald-300 dark:text-emerald-800">04</span>
                    </div>
                    <div class="relative z-10">
                        <h4 class="text-sm font-black uppercase leading-tight text-slate-800 transition-colors group-hover:text-emerald-600 dark:text-white sm:text-base">My Account</h4>
                        <p class="mt-1 text-[0.625rem] font-bold uppercase tracking-wider text-slate-400 sm:text-xs">Profile and settings</p>
                        <span class="mt-3 inline-flex items-center gap-1 text-[0.625rem] font-black uppercase tracking-widest text-emerald-600 dark:text-emerald-400 sm:text-xs">Manage <svg class="h-3 w-3 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="m9 18 6-6-6-6" /></svg></span>
                    </div>
                </button>

                <button onclick="window.location.href = basePath + 'frontend/calculate/'"
                    class="group relative flex min-h-48 cursor-pointer flex-col justify-between overflow-hidden rounded-none border border-cyan-200 bg-white p-4 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-cyan-500/15 dark:border-cyan-900/60 dark:bg-slate-900 sm:min-h-52 sm:p-5">
                    <div class="absolute inset-x-0 top-0 h-1.5 bg-cyan-500"></div>
                    <svg class="pointer-events-none absolute -bottom-8 -right-8 h-40 w-40 -rotate-12 text-cyan-600 opacity-[0.07] transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110 dark:text-cyan-300 dark:opacity-[0.08] sm:h-44 sm:w-44" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.25" aria-hidden="true"><rect x="4" y="2" width="16" height="20" rx="1" /><path stroke-linecap="round" stroke-linejoin="round" d="M7 5h10v4H7V5Zm0 8h2m3 0h2m3 0h.01M7 17h2m3 0h2m3 0h.01" /></svg>
                    <div class="relative z-10 flex items-start justify-between pt-1">
                        <span class="flex h-10 w-10 items-center justify-center bg-cyan-50 text-cyan-600 transition-transform duration-300 group-hover:scale-110 dark:bg-cyan-900/30 dark:text-cyan-400 sm:h-12 sm:w-12">
                            <svg class="h-5 w-5 sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.25" d="M5 21h14M12 21V7m0 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm-5 2-2 5h4l-2-5Zm10 0-2 5h4l-2-5Z" /></svg>
                        </span>
                        <span class="text-[0.5625rem] font-black tracking-[0.2em] text-cyan-300 dark:text-cyan-800">05</span>
                    </div>
                    <div class="relative z-10">
                        <h4 class="text-sm font-black uppercase leading-tight text-slate-800 transition-colors group-hover:text-cyan-600 dark:text-white sm:text-base">Calculate Salary</h4>
                        <p class="mt-1 text-[0.625rem] font-bold uppercase tracking-wider text-slate-400 sm:text-xs">GIP wage estimate</p>
                        <span class="mt-3 inline-flex items-center gap-1 text-[0.625rem] font-black uppercase tracking-widest text-cyan-600 dark:text-cyan-400 sm:text-xs">Calculate <svg class="h-3 w-3 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="m9 18 6-6-6-6" /></svg></span>
                    </div>
                </button>
            </div>
        </div>
        <footer class="mt-8 border-t border-slate-200 dark:border-slate-700 pt-8 pb-4">
            <!-- Top Row: Compliance Notice -->
            <div
                class="mb-8 bg-gradient-to-r from-blue-50/50 via-indigo-50/30 to-blue-50/50 dark:from-blue-950/20 dark:via-indigo-950/10 dark:to-blue-950/20 border border-slate-100 dark:border-slate-800/60 border-l-4 border-l-royal-blue rounded-r-2xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-all duration-500">
                <div class="flex items-start gap-4">
                    <div class="p-2.5 bg-royal-blue/10 dark:bg-blue-400/10 rounded-xl shrink-0 mt-0.5 shadow-sm">
                        <svg class="w-5 h-5 text-royal-blue dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd"
                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                clip-rule="evenodd" />
                        </svg>
                    </div>
                    <div>
                        <h4
                            class="text-[10px] sm:text-xs font-black text-royal-blue dark:text-blue-400 uppercase tracking-[0.2em] mb-1.5">
                            Statistical Compliance Notice</h4>
                        <p
                            class="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-tight sm:normal-case sm:font-medium leading-relaxed">
                            This dashboard visualizes aggregated statistical patterns only. PII is
                            strictly excluded in compliance with <button onclick="showComplianceInfo()"
                                class="cursor-pointer font-black text-royal-blue dark:text-blue-400 underline underline-offset-4 decoration-2 focus:outline-none">RA
                                10173</button>.
                        </p>
                    </div>
                </div>
            </div>

            <div
                class="flex flex-col sm:flex-row justify-between items-center gap-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                <!-- Left Side: Brand -->
                <div onclick="window.scrollTo({top: 0, behavior: 'smooth'})" class="flex items-center gap-3 group/brand cursor-pointer">
                    <img src="../../frontend/images/logo/doleiligan.png"
                        class="h-6 sm:h-7 bg-white rounded-full p-0.5 object-contain hover:rotate-6 transition-transform duration-300 cursor-pointer" alt="DOLE">
                    <div class="w-px h-3 sm:h-4 bg-slate-300 dark:bg-slate-600"></div>
                    <span
                        class="text-[8px] sm:text-[9px] font-black uppercase tracking-widest leading-none whitespace-nowrap text-slate-400 group-hover/brand:text-royal-blue dark:text-slate-300 dark:group-hover/brand:text-blue-400 transition-colors duration-300 cursor-pointer">GIP
                        Monitoring</span>
                </div>

                <!-- Right Side Grid: Copyright -->
                <div class="text-right group/copy cursor-default">
                    <p
                        class="text-[7.5px] sm:text-[8px] font-bold uppercase tracking-widest whitespace-nowrap text-slate-400 group-hover/copy:text-black dark:text-slate-300 dark:group-hover/copy:text-white transition-colors duration-300">
                        © <span class="auto-year">2026</span> DOLE-LDNPFO | GIP SYSTEM
                        V<?php echo htmlspecialchars(env('APP_VERSION', '4.2')); ?>
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

            // Global base path resolved from PHP config
            const basePath = '<?php echo $baseUrl; ?>/';

            window.showComplianceInfo = function() {
                Swal.fire({
                    title: '<span class="text-lg font-black text-heading uppercase tracking-tight">RA 10173 (Data Privacy Act)</span>',
                    html: `
                        <div class="font-montserrat text-left text-xs leading-relaxed space-y-3">
                            <p>The <strong>Data Privacy Act of 2012 (Republic Act No. 10173)</strong> protects all forms of information, be it private, personal, or sensitive. It ensures that the Philippines complies with international standards for data protection.</p>
                            <div class="bg-blue-50/50 dark:bg-blue-900/10 border-l-4 border-royal-blue p-3 rounded-r-xl">
                                <p class="font-bold text-[10px] text-royal-blue uppercase tracking-widest mb-1">PII Security Shield</p>
                                <p class="text-slate-500 dark:text-slate-400">Personally Identifiable Information (PII) is strictly restricted or omitted from general dashboards to guarantee compliance with national privacy guidelines.</p>
                            </div>
                            <p>For administrative access requests or data policy inquiries, please contact the DOLE Data Protection Team.</p>
                        </div>
                    `,
                    icon: 'info',
                    confirmButtonText: '<span class="font-black uppercase tracking-widest cursor-pointer">Understood</span>',
                    customClass: {
                        container: 'font-montserrat',
                        popup: 'rounded-[1.5rem] shadow-2xl border border-gray-100 dark:border-slate-800 dark:bg-slate-900',
                        confirmButton: 'bg-brand text-white hover:bg-brand-strong text-xs px-6 py-2.5 rounded-xl border border-transparent shadow-sm cursor-pointer'
                    },
                    buttonsStyling: false
                });
            };

            window.openQuickLookup = function() {
                Swal.fire({
                    title: '<span class="text-lg font-black text-heading uppercase tracking-tight font-montserrat">Search Member</span>',
                    html: `
                        <div class="font-montserrat text-left p-1">
                            <label class="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-2">Type Name or ID</label>
                            <div class="relative mb-4">
                                <input type="text" id="swal-quick-search-input" placeholder="e.g. ROX-RD-ESIG..." 
                                    class="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-2.5 text-xs font-bold text-heading focus:border-royal-blue focus:ring-4 focus:ring-royal-blue/10 outline-none transition-all">
                            </div>
                            <div id="swal-quick-search-results" class="max-h-[220px] overflow-y-auto space-y-1 rounded-xl">
                                <p class="text-xs text-slate-400 italic text-center py-4">Start typing to search...</p>
                            </div>
                        </div>
                    `,
                    showConfirmButton: false,
                    showCancelButton: true,
                    cancelButtonText: '<span class="font-black uppercase tracking-widest cursor-pointer">Close</span>',
                    customClass: {
                        container: 'font-montserrat',
                        popup: 'rounded-[1.5rem] shadow-2xl border border-gray-100 dark:border-slate-800 dark:bg-slate-900',
                        cancelButton: 'bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-600 text-xs px-6 py-2.5 rounded-xl border border-gray-200 dark:border-slate-600 shadow-sm mx-2 cursor-pointer'
                    },
                    buttonsStyling: false,
                    didOpen: (popup) => {
                        const input = popup.querySelector('#swal-quick-search-input');
                        const resultsContainer = popup.querySelector('#swal-quick-search-results');
                        
                        if (!input || !resultsContainer) return;

                        let debounceTimer = null;

                        input.addEventListener('input', () => {
                            clearTimeout(debounceTimer);
                            const query = input.value.trim();
                            
                            if (query.length < 2) {
                                resultsContainer.innerHTML = '<p class="text-xs text-slate-400 italic text-center py-4">Type at least 2 characters...</p>';
                                return;
                            }

                            resultsContainer.innerHTML = `
                                <div class="flex justify-center items-center py-4">
                                    <div class="w-6 h-6 border-4 border-royal-blue border-t-transparent rounded-full animate-spin"></div>
                                </div>
                            `;

                            debounceTimer = setTimeout(async () => {
                                try {
                                    const res = await fetch(`${basePath}api/beneficiaries.php?replacement_candidates=1&q=${encodeURIComponent(query)}&limit=10`);
                                    const json = await res.json();
                                    
                                    if (json.success && Array.isArray(json.candidates) && json.candidates.length > 0) {
                                        resultsContainer.innerHTML = json.candidates.map(c => `
                                            <button data-id="${c.id}" class="quick-search-item flex justify-between items-center p-3 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50 hover:bg-royal-blue/10 dark:hover:bg-blue-900/30 hover:border-royal-blue/20 cursor-pointer transition-all duration-200 w-full text-left focus:outline-none">
                                                <div class="flex flex-col text-left">
                                                    <span class="text-xs font-black text-slate-800 dark:text-white">${c.name}</span>
                                                    <span class="text-[9px] font-bold text-slate-400 font-mono">${c.id}</span>
                                                </div>
                                                <span class="text-[9px] font-black text-royal-blue dark:text-blue-400 bg-royal-blue/5 dark:bg-blue-900/30 px-2 py-1 rounded border border-royal-blue/10 cursor-pointer">VIEW</span>
                                            </button>
                                        `).join('');

                                        resultsContainer.querySelectorAll('.quick-search-item').forEach(item => {
                                            item.addEventListener('click', () => {
                                                const id = item.dataset.id;
                                                Swal.close();
                                                if (window.viewBeneficiary) {
                                                    window.viewBeneficiary({ id: id });
                                                }
                                            });
                                        });
                                    } else {
                                        resultsContainer.innerHTML = '<p class="text-xs text-slate-400 italic text-center py-4">No matching records found.</p>';
                                    }
                                } catch (e) {
                                    resultsContainer.innerHTML = '<p class="text-xs text-red-500 italic text-center py-4">Error loading results.</p>';
                                    console.error(e);
                                }
                            }, 300);
                        });

                        // Focus search input on open
                        setTimeout(() => input.focus(), 150);
                    }
                });
            };

            // --- DASHBOARD VIEW SWITCHER LOGIC ---
            document.addEventListener('DOMContentLoaded', function () {
                const genBtn = document.getElementById('view-general-btn');
                const quickBtn = document.getElementById('view-quick-access-btn');
                const genView = document.getElementById('general-view-section');
                const quickView = document.getElementById('quick-access-view-section');

                if (!genBtn || !quickBtn) return;

                function switchView(target) {
                    if (target === 'quick-access') {
                        genBtn.classList.remove('bg-white', 'dark:bg-slate-800', 'shadow-sm', 'text-royal-blue', 'dark:text-blue-400', 'font-black');
                        genBtn.classList.add('text-slate-500', 'font-bold');
                        quickBtn.classList.add('bg-white', 'dark:bg-slate-800', 'shadow-sm', 'text-royal-blue', 'dark:text-blue-400', 'font-black');
                        quickBtn.classList.remove('text-slate-500', 'font-bold');

                        genView.classList.add('hidden', 'opacity-0');
                        quickView.classList.remove('hidden');
                        setTimeout(() => quickView.classList.remove('opacity-0'), 10);

                        window.dispatchEvent(new Event('resize'));
                    } else {
                        quickBtn.classList.remove('bg-white', 'dark:bg-slate-800', 'shadow-sm', 'text-royal-blue', 'dark:text-blue-400', 'font-black');
                        quickBtn.classList.add('text-slate-500', 'font-bold');
                        genBtn.classList.add('bg-white', 'dark:bg-slate-800', 'shadow-sm', 'text-royal-blue', 'dark:text-blue-400', 'font-black');
                        genBtn.classList.remove('text-slate-500', 'font-bold');

                        quickView.classList.add('hidden', 'opacity-0');
                        genView.classList.remove('hidden');
                        setTimeout(() => genView.classList.remove('opacity-0'), 10);

                        window.dispatchEvent(new Event('resize'));
                    }
                }

                genBtn.addEventListener('click', () => switchView('general'));
                quickBtn.addEventListener('click', () => switchView('quick-access'));

                // Auto-open logic on load based on query parameters
                const urlParams = new URLSearchParams(window.location.search);
                const gipId = urlParams.get('gip_id');
                const showProfile = urlParams.get('profile');
                
                if (gipId) {
                    setTimeout(() => {
                        if (window.viewBeneficiary) {
                            window.viewBeneficiary({ id: gipId });
                        }
                    }, 500);
                } else if (showProfile === 'true') {
                    setTimeout(() => {
                        if (window.showProfileModal) {
                            window.showProfileModal();
                        }
                    }, 500);
                }

            });
        </script>

</body>

</html>