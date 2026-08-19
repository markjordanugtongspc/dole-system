<?php
require_once __DIR__ . '/../../config/vite.php';
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lanao Del Norte - GIP Monitoring</title>

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

        // Dark Mode FOUC Prevention: apply theme before paint
        (function () {
            var theme = localStorage.getItem('color-theme');
            if (!theme) {
                var match = document.cookie.match(/(?:^|; )color-theme=([^;]*)/);
                theme = match ? decodeURIComponent(match[1]) : null;
            }
            if (theme === 'dark') {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
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
                <div class="flex items-center justify-start rtl:justify-end">
                    <button data-drawer-target="top-bar-sidebar" data-drawer-toggle="top-bar-sidebar"
                        aria-controls="top-bar-sidebar" type="button"
                        class="sm:hidden text-heading bg-transparent hover:bg-neutral-secondary-medium focus:ring-4 focus:ring-neutral-tertiary rounded-base text-sm p-2 cursor-pointer">
                        <span class="sr-only">Open sidebar</span>
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                    <a href="#" class="flex ms-2 md:me-24 cursor-pointer items-center">
                        <img src="../../frontend/images/logo/doleiligan.png"
                            class="h-8 me-3 bg-white rounded-full p-0.5 object-contain" alt="DOLE Logo" />
                        <div class="flex flex-col">
                            <span class="text-sm font-black text-royal-blue uppercase tracking-tight leading-tight">DOLE
                                LDNPFO</span>
                            <span class="text-[0.625rem] font-semibold text-gray-500 uppercase tracking-wider">GIP
                                Monitoring 2026</span>
                        </div>
                    </a>
                </div>
                <div class="flex items-center gap-3">
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

    <div class="p-2 sm:p-4 sm:ml-64 mt-14">
        <div class="px-2.5 py-5 sm:p-6 min-h-screen">

            <!-- Page Header with Toggle & Add Button -->
            <div class="mb-6 flex items-center justify-between gap-2">
                <div class="flex min-w-0 flex-1 items-center gap-2 transition-all duration-200 select-none"
                    id="gip-header-container">
                    <h1 class="flex min-w-0 items-center gap-2 text-xl font-black leading-tight text-heading sm:mb-2 sm:text-3xl"
                        id="gip-header-wrapper">
                        <span id="gip-header-prefix" class="truncate inline-flex items-center gap-1.5">
                            <span class="w-2.5 h-2.5 rounded-full bg-royal-blue dark:bg-blue-400 animate-bounce [animation-delay:-0.3s]"></span>
                            <span class="w-2.5 h-2.5 rounded-full bg-royal-blue dark:bg-blue-400 animate-bounce [animation-delay:-0.15s]"></span>
                            <span class="w-2.5 h-2.5 rounded-full bg-royal-blue dark:bg-blue-400 animate-bounce"></span>
                        </span>
                        <span id="gip-education-summary" class="inline-flex shrink-0 items-center gap-2 whitespace-nowrap text-brand">
                            <span aria-hidden="true">-</span>
                            <svg class="h-5 w-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.2-3.4a12 12 0 01.6 6.5A12 12 0 0012 20a12 12 0 00-6.8-2.9 12 12 0 01.6-6.5L12 14z"/></svg>
                            <span id="gip-header-education-label">All Educational Level</span>
                            <span id="gip-education-level-count"
                                class="inline-flex min-w-5 shrink-0 items-center justify-center rounded-full bg-royal-blue px-1.5 py-0.5 text-[0.5625rem] font-black text-white">0</span>
                        </span>
                    </h1>
                </div>

                <div class="flex items-center gap-2">
                    <button type="button" id="gip-export-logs-btn" class="flex items-center gap-2 px-3 py-2 sm:px-5 sm:py-2.5
                            bg-white text-emerald-700
                            hover:bg-emerald-600 hover:text-white
                            border border-emerald-200
                            dark:bg-emerald-900 dark:text-emerald-300
                            dark:hover:bg-emerald-500 dark:hover:text-white
                            dark:border-emerald-600
                            font-black rounded-xl transition-all duration-300 shadow-sm
                            hover:scale-105 active:scale-95 cursor-pointer shrink-0">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"
                                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span class="text-[0.625rem] sm:text-sm uppercase">Export DTR/AR
                    </button>

                    <button type="button" onclick="showAddDataModal()" class="
                            /* Light mode styles */
                            flex items-center gap-2 px-3 py-2 sm:px-5 sm:py-2.5
                            bg-white text-[#2e7d32]
                            hover:bg-[#2e7d32] hover:text-white
                            border border-[#c8e6c9]

                            /* Dark mode styles */
                            dark:bg-green-900
                            dark:hover:bg-green-500 dark:hover:text-white
                            dark:border-green-400
                            
                            /* Shared styles */
                            font-black rounded-xl
                            transition-all duration-300 shadow-sm
                            hover:scale-105 active:scale-95 cursor-pointer shrink-0
  ">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 4v16m8-8H4" />
                        </svg>
                        <span class="text-[0.625rem] sm:text-sm uppercase">Add Data</span>
                    </button>
                </div>

            </div>

            <!-- Main Content Container -->
            <div class="relative bg-white shadow-xs rounded-base border border-default">

                <!-- Modern Search Bar -->
                <div class="p-3 sm:p-5 bg-white border-b border-gray-100 flex items-center justify-between gap-2.5">
                    <div class="group relative flex-1 sm:max-w-lg lg:max-w-xl">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none">
                            <svg class="w-5 h-5 text-gray-400 group-focus-within:text-royal-blue transition-colors duration-300"
                                aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="text" id="table-search"
                            class="block w-full ps-11 sm:ps-12 pe-4 py-2.5 sm:py-3 text-xs sm:text-sm font-medium text-heading bg-gray-50/50 border border-gray-200 rounded-full focus:bg-white focus:border-royal-blue/30 focus:ring-4 focus:ring-royal-blue/10 focus:shadow-lg transition-all duration-300 ease-out placeholder:text-gray-400"
                            placeholder="Search beneficiaries...">

                        <!-- Clear Search Button -->
                        <div class="absolute inset-y-0 end-0 flex items-center pe-2">
                            <button type="button" id="clear-search-btn"
                                class="text-gray-400 hover:text-red-500 hover:bg-red-50 p-1.5 rounded-full outline-none transition-colors duration-300 hidden cursor-pointer">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </button>
                        </div>
                    </div>

                    <!-- Filter / Sort Actions -->
                    <div class="flex items-center gap-2 shrink-0">
                        <!-- Office Quick Filter Button -->
                        <button id="office-quick-filter-btn" type="button" aria-pressed="false"
                            class="flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-gray-600 bg-white rounded-lg hover:bg-violet-50 hover:text-violet-700 transition-all duration-200 border border-default hover:border-violet-200 shadow-sm cursor-pointer active:scale-95 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-violet-900/30 dark:hover:text-violet-300 dark:border-gray-700">
                            <svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                            </svg>
                            <span>Office</span>
                        </button>

                        <!-- Filter Dropdown Button -->
                        <div class="relative">
                            <button id="filter-dropdown-button" type="button" aria-pressed="false" data-dropdown-toggle="filter-dropdown"
                                class="flex items-center justify-center p-2.5 text-gray-500 rounded-full hover:bg-blue-50 hover:text-royal-blue transition-all duration-300 border border-default hover:border-blue-100 group shadow-sm cursor-pointer">
                                <svg class="w-5 h-5 transition-transform group-hover:scale-110" fill="none"
                                    stroke="currentColor" viewBox="0 0 24 24">
                                    <!-- Funnel Icon -->
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                                </svg>
                            </button>
                            <!-- Filter Dropdown Menu -->
                            <div id="filter-dropdown"
                                class="z-50 hidden bg-white divide-y divide-gray-100 rounded-xl shadow-2xl w-56 border border-gray-100 font-montserrat">
                                <div class="px-4 py-3 bg-blue-50/50 rounded-t-xl">
                                    <span
                                        class="block text-[0.625rem] font-black text-royal-blue uppercase tracking-wider">Filter
                                        By</span>
                                </div>
                                <div class="p-4">
                                    <!-- Red-rose Filter Mode Disabled Notice & Tooltip -->
                                    <div id="filter-disabled-notice"
                                        class="mb-3 hidden items-center gap-1.5 rounded-lg border border-rose-200 bg-rose-50 p-2 text-[0.625rem] font-bold text-rose-600 dark:border-rose-900/60 dark:bg-rose-950/40 dark:text-rose-300 shadow-xs">
                                        <svg class="h-3.5 w-3.5 shrink-0 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>Disabled. Click <strong>Filter Mode: OFF</strong> below to enable.</span>
                                    </div>
                                    <!-- Select Filter Controls Container (Shown only when Filter Mode is ON) -->
                                    <div id="filter-selects-container" class="hidden">
                                        <!-- Year select -->
                                        <div class="mb-3">
                                            <label
                                                class="block text-[0.625rem] font-bold text-gray-500 uppercase tracking-widest mb-1">Year</label>
                                            <select id="filter-year"
                                                class="block w-full text-xs font-medium text-gray-700 bg-gray-50 border border-gray-200 rounded-lg focus:ring-royal-blue focus:border-royal-blue p-2 cursor-pointer transition-colors duration-200">
                                                <option value="ALL">All Years</option>
                                                <!-- Dynamically populated -->
                                            </select>
                                        </div>
                                        <!-- START: Filter Start Date and End Date Selects -->
                                        <!-- Start Date select -->
                                        <div class="mb-3">
                                            <label
                                                class="block text-[0.625rem] font-bold text-gray-500 uppercase tracking-widest mb-1">Start Date</label>
                                            <select id="filter-start-date"
                                                class="block w-full text-xs font-medium text-gray-700 bg-gray-50 border border-gray-200 rounded-lg focus:ring-royal-blue focus:border-royal-blue p-2 cursor-pointer transition-colors duration-200">
                                                <option value="ALL">All Start Dates</option>
                                                <!-- Dynamically populated from backend -->
                                            </select>
                                        </div>
                                        <!-- End Date select -->
                                        <div class="mb-3">
                                            <label
                                                class="block text-[0.625rem] font-bold text-gray-500 uppercase tracking-widest mb-1">End Date</label>
                                            <select id="filter-end-date"
                                                class="block w-full text-xs font-medium text-gray-700 bg-gray-50 border border-gray-200 rounded-lg focus:ring-royal-blue focus:border-royal-blue p-2 cursor-pointer transition-colors duration-200">
                                                <option value="ALL">All End Dates</option>
                                                <!-- Dynamically populated from backend -->
                                            </select>
                                        </div>
                                        <!-- END: Filter Start Date and End Date Selects -->
                                        <!-- Status select -->
                                        <div class="mb-4">
                                            <label
                                                class="block text-[0.625rem] font-bold text-gray-500 uppercase tracking-widest mb-1">Status</label>
                                            <select id="filter-status"
                                                class="block w-full text-xs font-medium text-gray-700 bg-gray-50 border border-gray-200 rounded-lg focus:ring-royal-blue focus:border-royal-blue p-2 cursor-pointer transition-colors duration-200">
                                                <option value="ALL">All Status</option>
                                                <option value="ONGOING">Ongoing</option>
                                                <option value="EXPIRED">Expired</option>
                                                <option value="RESIGNED">Resigned</option>
                                                <option value="ABSORBED">Absorbed</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="mb-4 border-t border-gray-100 pt-3">
                                        <span class="mb-2 block text-[0.625rem] font-bold uppercase tracking-widest text-gray-500">Sort by Name</span>
                                        <div class="grid grid-cols-2 gap-2" role="group" aria-label="Sort beneficiaries by name">
                                            <button type="button" onclick="sortData('name_asc')"
                                                class="inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 bg-gray-50 px-2 py-2 text-[0.625rem] font-black text-gray-700 transition-colors hover:border-blue-200 hover:bg-blue-50 hover:text-royal-blue cursor-pointer">
                                                <svg class="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 17V5m0 0L3 9m4-4l4 4M14 7h7m-7 5h5m-5 5h3" /></svg>
                                                A to Z
                                            </button>
                                            <button type="button" onclick="sortData('name_desc')"
                                                class="inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 bg-gray-50 px-2 py-2 text-[0.625rem] font-black text-gray-700 transition-colors hover:border-blue-200 hover:bg-blue-50 hover:text-royal-blue cursor-pointer">
                                                <svg class="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7v12m0 0l-4-4m4 4l4-4M14 7h3m-3 5h5m-5 5h7" /></svg>
                                                Z to A
                                            </button>
                                        </div>
                                    </div>
                                    <div class="mb-4 border-t border-gray-100 pt-3 dark:border-slate-700">
                                        <div class="mb-2 flex flex-col gap-3">
                                            <div class="min-w-0">
                                                <span class="block text-[0.625rem] font-bold uppercase tracking-widest text-gray-500 dark:text-slate-400">Phone Numbers</span>
                                                <span class="block text-[0.5625rem] font-semibold text-gray-400 dark:text-slate-500">Display beside beneficiary names</span>
                                            </div>
                                            <button id="phone-visibility-toggle" type="button" role="switch" aria-checked="false"
                                                aria-label="Show beneficiary phone numbers"
                                                class="inline-flex h-10 w-full items-center overflow-hidden rounded-full border border-slate-300 bg-slate-100 p-1 text-xs font-black uppercase tracking-wider shadow-inner transition-colors dark:border-slate-600 dark:bg-slate-800 cursor-pointer">
                                                <span id="phone-visibility-on" class="flex-1 rounded-full px-4 py-2 text-center text-emerald-700 transition-colors dark:text-emerald-300">ON</span>
                                                <span id="phone-visibility-off" class="flex-1 rounded-full px-4 py-2 text-center text-red-700 transition-colors dark:text-red-300">OFF</span>
                                            </button>
                                        </div>
                                    </div>
                                    <button id="apply-filters-button" type="button" aria-pressed="false"
                                        class="w-full bg-blue-700 hover:bg-royal-blue text-white font-bold py-2 px-4 rounded-lg text-xs transition-colors cursor-pointer active:scale-95 shadow-md">
                                        Filter Mode: OFF
                                    </button>
                                </div>
                            </div>
                        </div>

                        <!-- Sort actions -->
                        <div class="relative shrink-0 flex items-center gap-2">
                            <button id="sort-dropdown-button" type="button" aria-pressed="false" data-dropdown-toggle="sort-dropdown" data-dropdown-placement="bottom-end"
                                class="flex items-center justify-center p-2.5 text-gray-500 rounded-full hover:bg-orange-50 hover:text-orange-600 transition-all duration-300 border border-default hover:border-orange-100 group shadow-sm cursor-pointer">
                                <svg class="w-5 h-5 transition-transform group-hover:rotate-180" fill="none"
                                    stroke="currentColor" viewBox="0 0 24 24">
                                    <!-- Sort Asc/Desc Icon -->
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                                </svg>
                            </button>

                            <!-- Clear Filter Button -->
                            <button id="clear-office-filter-btn" onclick="clearOfficeFilter()"
                                data-tooltip-target="tooltip-clear-filter"
                                class="hidden items-center justify-center p-2.5 text-red-500 rounded-full hover:bg-red-50 transition-all duration-300 border border-red-100 hover:border-red-200 group shadow-sm cursor-pointer active:scale-95">
                                <svg class="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                            </button>
                            <div id="tooltip-clear-filter" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-xs font-bold text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip">
                                Clear All Filter
                                <div class="tooltip-arrow" data-popper-arrow></div>
                            </div>
                            <!-- Sort Dropdown Menu -->
                            <div id="sort-dropdown"
                                class="z-50 hidden absolute right-0 bg-white divide-y divide-gray-100 rounded-xl shadow-2xl w-56 border border-gray-100 font-montserrat">
                                <div class="px-4 py-3 bg-orange-50/50 rounded-t-xl">
                                    <span
                                        class="block text-[0.625rem] font-black text-orange-600 uppercase tracking-wider">Table
                                        Options</span>
                                </div>
                                <ul class="py-2 text-xs font-bold text-gray-700" aria-labelledby="sort-dropdown-button">
                                    <li>
                                        <button type="button" onclick="window.setOfficeFilter('ALL')"
                                            class="flex w-full items-center gap-2 px-4 py-2 text-left transition-colors hover:bg-orange-50 hover:text-orange-600 cursor-pointer">
                                            <svg class="h-4 w-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 21h18M5 21V7l7-4 7 4v14M9 9h1m4 0h1m-6 4h1m4 0h1m-6 4h1m4 0h1" /></svg>
                                            <span>All Office</span>
                                        </button>
                                    </li>
                                    <li class="border-y border-gray-100">
                                        <button id="education-filter-toggle" type="button" aria-expanded="false" aria-controls="education-filter-menu"
                                            class="flex w-full items-center gap-2 px-4 py-2.5 text-left transition-colors hover:bg-orange-50 hover:text-orange-600 cursor-pointer">
                                            <svg class="h-4 w-4 shrink-0 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.2-3.4a12 12 0 01.6 6.5A12 12 0 0012 20a12 12 0 00-6.8-2.9 12 12 0 01.6-6.5L12 14z"/></svg>
                                            <span class="flex-1">Educational Level</span>
                                            <svg id="education-filter-chevron" class="h-3.5 w-3.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
                                        </button>
                                        <div id="education-filter-menu" class="hidden max-h-64 overflow-y-auto bg-slate-50 py-1 dark:bg-slate-800">
                                            <button type="button" data-education-filter="ALL"
                                                class="flex w-full items-center gap-2 px-4 py-2 text-left text-[0.6875rem] font-bold text-gray-700 transition-colors hover:bg-blue-50 hover:text-royal-blue cursor-pointer dark:text-gray-200 dark:hover:bg-slate-700">
                                                <span class="inline-flex h-5 w-5 shrink-0 items-center justify-center text-blue-600">
                                                    <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14v7"/></svg>
                                                </span>
                                                <span>All Educational Levels</span>
                                            </button>
                                            <div id="education-filter-options"></div>
                                        </div>
                                    </li>
                                    <li class="border-b border-gray-100">
                                        <button id="birthday-sort-filter-toggle" type="button" aria-expanded="false" aria-controls="birthday-sort-filter-menu"
                                            class="flex w-full items-center gap-2 px-4 py-2.5 text-left transition-colors hover:bg-orange-50 hover:text-orange-600 cursor-pointer">
                                            <svg class="h-4 w-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 2v3m8-3v3M3 9h18M5 4h14a2 2 0 012 2v14H3V6a2 2 0 012-2zm3 9h2m4 0h2m-8 4h2m4 0h2" /></svg>
                                            <span class="flex-1">Birthday Sort</span>
                                            <svg id="birthday-sort-filter-chevron" class="h-3.5 w-3.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
                                        </button>
                                        <div id="birthday-sort-filter-menu" class="hidden bg-slate-50 py-1 dark:bg-slate-800">
                                            <button id="birthday-year-filter-toggle" type="button" aria-expanded="false" aria-controls="birthday-year-filter-menu"
                                                class="flex w-full items-center gap-2 py-2 pr-4 pl-7 text-left text-[0.6875rem] font-bold transition-colors hover:bg-blue-50 hover:text-royal-blue cursor-pointer dark:text-gray-200 dark:hover:bg-slate-700">
                                                <svg class="h-4 w-4 shrink-0 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 2v3m8-3v3M3 9h18M5 4h14a2 2 0 012 2v14H3V6a2 2 0 012-2z" /></svg>
                                                <span class="flex-1">Birthday Year</span>
                                                <svg id="birthday-year-filter-chevron" class="h-3.5 w-3.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
                                            </button>
                                            <div id="birthday-year-filter-menu" class="hidden max-h-52 overflow-y-auto bg-white py-1 dark:bg-slate-900">
                                                <button type="button" data-birthday-year-filter="ALL" class="flex w-full items-center gap-2 py-2 pr-4 pl-10 text-left text-[0.6875rem] font-bold text-gray-700 transition-colors hover:bg-blue-50 hover:text-royal-blue cursor-pointer dark:text-gray-200 dark:hover:bg-slate-700">
                                                    <span>All Birthday Years</span>
                                                </button>
                                                <div id="birthday-year-filter-options"></div>
                                            </div>
                                            <button id="birthday-month-filter-toggle" type="button" aria-expanded="false" aria-controls="birthday-month-filter-menu"
                                                class="flex w-full items-center gap-2 py-2 pr-4 pl-7 text-left text-[0.6875rem] font-bold transition-colors hover:bg-blue-50 hover:text-royal-blue cursor-pointer dark:text-gray-200 dark:hover:bg-slate-700">
                                                <svg class="h-4 w-4 shrink-0 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 2v3m8-3v3M3 9h18M5 4h14a2 2 0 012 2v14H3V6a2 2 0 012-2z" /></svg>
                                                <span class="flex-1">Birthday Month</span>
                                                <svg id="birthday-month-filter-chevron" class="h-3.5 w-3.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
                                            </button>
                                            <div id="birthday-month-filter-menu" class="hidden max-h-52 overflow-y-auto bg-white py-1 dark:bg-slate-900">
                                                <button type="button" data-birthday-month-filter="ALL" class="flex w-full items-center gap-2 py-2 pr-4 pl-10 text-left text-[0.6875rem] font-bold text-gray-700 transition-colors hover:bg-blue-50 hover:text-royal-blue cursor-pointer dark:text-gray-200 dark:hover:bg-slate-700">
                                                    <span>All Birthday Months</span>
                                                </button>
                                                <div id="birthday-month-filter-options"></div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="border-b border-gray-100">
                                        <button id="relationship-filter-toggle" type="button" aria-expanded="false" aria-controls="relationship-filter-menu"
                                            class="flex w-full items-center gap-2 px-4 py-2.5 text-left transition-colors hover:bg-orange-50 hover:text-orange-600 cursor-pointer">
                                            <svg class="h-4 w-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a4 4 0 00-6-3.5M9 20H2v-2a4 4 0 016-3.5m8-7a3 3 0 11-6 0 3 3 0 016 0zM9 8a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                            <span class="flex-1">Relationship to Assured</span>
                                            <svg id="relationship-filter-chevron" class="h-3.5 w-3.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
                                        </button>
                                        <div id="relationship-filter-menu" class="hidden max-h-64 overflow-y-auto bg-slate-50 py-1 dark:bg-slate-800">
                                            <button type="button" data-relationship-filter="ALL" class="flex w-full items-center gap-2 px-4 py-2 text-left text-[0.6875rem] font-bold text-gray-700 transition-colors hover:bg-blue-50 hover:text-royal-blue cursor-pointer dark:text-gray-200 dark:hover:bg-slate-700">
                                                <svg class="h-4 w-4 shrink-0 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a4 4 0 00-6-3.5M9 20H2v-2a4 4 0 016-3.5m8-7a3 3 0 11-6 0 3 3 0 016 0zM9 8a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                                <span>All Relationships</span>
                                            </button>
                                            <div id="relationship-filter-options"></div>
                                        </div>
                                    </li>
                                    <li class="border-b border-gray-100">
                                        <button id="assigned-unit-filter-toggle" type="button" aria-expanded="false" aria-controls="assigned-unit-filter-menu"
                                            class="flex w-full items-center gap-2 px-4 py-2.5 text-left transition-colors hover:bg-orange-50 hover:text-orange-600 cursor-pointer">
                                            <svg class="h-4 w-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                            <span class="flex-1">Assigned Unit</span>
                                            <svg id="assigned-unit-filter-chevron" class="h-3.5 w-3.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
                                        </button>
                                        <div id="assigned-unit-filter-menu" class="hidden max-h-72 overflow-y-auto bg-slate-50 py-1 dark:bg-slate-800">
                                            <button type="button" data-assigned-unit-filter="ALL" class="flex w-full items-center gap-2 px-4 py-2 text-left text-[0.6875rem] font-bold text-gray-700 transition-colors hover:bg-blue-50 hover:text-royal-blue cursor-pointer dark:text-gray-200 dark:hover:bg-slate-700"><span>All Assigned Units</span></button>
                                            <button type="button" data-assigned-unit-filter="Local Employment Unit (LEU)" class="flex w-full items-center gap-2 px-4 py-2 text-left text-[0.6875rem] font-bold text-gray-700 transition-colors hover:bg-blue-50 hover:text-royal-blue cursor-pointer dark:text-gray-200 dark:hover:bg-slate-700"><span>Local Employment Unit (LEU)</span></button>
                                            <button type="button" data-assigned-unit-filter="Labor Standards Unit (LSU)" class="flex w-full items-center gap-2 px-4 py-2 text-left text-[0.6875rem] font-bold text-gray-700 transition-colors hover:bg-blue-50 hover:text-royal-blue cursor-pointer dark:text-gray-200 dark:hover:bg-slate-700"><span>Labor Standards Unit (LSU)</span></button>
                                            <button type="button" data-assigned-unit-filter="Internal Management Services Unit (IMSU)" class="flex w-full items-center gap-2 px-4 py-2 text-left text-[0.6875rem] font-bold text-gray-700 transition-colors hover:bg-blue-50 hover:text-royal-blue cursor-pointer dark:text-gray-200 dark:hover:bg-slate-700"><span>Internal Management Services Unit (IMSU)</span></button>
                                            <button type="button" data-assigned-unit-filter="Wellfare Workers Unit (WWU)" class="flex w-full items-center gap-2 px-4 py-2 text-left text-[0.6875rem] font-bold text-gray-700 transition-colors hover:bg-blue-50 hover:text-royal-blue cursor-pointer dark:text-gray-200 dark:hover:bg-slate-700"><span>Wellfare Workers Unit (WWU)</span></button>
                                            <button type="button" data-assigned-unit-filter="Labor Relation Unit (LRU)" class="flex w-full items-center gap-2 px-4 py-2 text-left text-[0.6875rem] font-bold text-gray-700 transition-colors hover:bg-blue-50 hover:text-royal-blue cursor-pointer dark:text-gray-200 dark:hover:bg-slate-700"><span>Labor Relation Unit (LRU)</span></button>
                                        </div>
                                    </li>
                                    <li class="border-b border-gray-100">
                                        <button type="button" onclick="sortData('address')"
                                            class="flex w-full items-center gap-2 px-4 py-2.5 text-left transition-colors hover:bg-orange-50 hover:text-orange-600 cursor-pointer">
                                            <svg class="h-4 w-4 shrink-0 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                                            <span class="flex-1">Sort by Address</span>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Office Quick Filter Panel -->
                <div id="office-quick-filter-panel" class="overflow-hidden" style="max-height:0;opacity:0;transition:max-height 0.35s cubic-bezier(.34,1.56,.64,1),opacity 0.25s ease;pointer-events:none;">
                    <div class="px-4 pt-2 pb-3 border-b border-default">
                        <div class="flex items-center gap-2">
                            <!-- X close button -->
                            <button id="office-quick-filter-close"
                                class="shrink-0 flex items-center justify-center w-7 h-7 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/30 transition-all duration-200 cursor-pointer active:scale-90 border border-transparent hover:border-red-100">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12"/>
                                </svg>
                            </button>
                            <!-- Back button (hidden when in OFFICES view) -->
                            <button id="office-qf-back"
                                class="hidden shrink-0 items-center justify-center w-7 h-7 rounded-lg text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all duration-200 cursor-pointer active:scale-90 border border-transparent hover:border-blue-100">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7"/>
                                </svg>
                            </button>
                            <!-- Label -->
                            <span id="office-qf-label" class="text-[0.625rem] font-black text-violet-700 dark:text-violet-300 uppercase tracking-wider shrink-0">Filter by Office</span>
                            <!-- Left arrow -->
                            <button id="office-qf-arrow-left"
                                class="hidden shrink-0 items-center justify-center w-6 h-6 rounded-full text-gray-400 hover:text-violet-600 hover:bg-violet-50 dark:hover:bg-violet-900/30 transition-all duration-150 cursor-pointer active:scale-90">
                                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7"/>
                                </svg>
                            </button>
                            <!-- Horizontal scrollable badge list -->
                            <div id="office-qf-scroll" class="flex-1 overflow-x-auto scrollbar-hide">
                                <div id="office-qf-list" class="flex items-center gap-2 min-w-max py-0.5">
                                    <!-- Populated by JS -->
                                </div>
                            </div>
                            <!-- Right arrow -->
                            <button id="office-qf-arrow-right"
                                class="hidden shrink-0 items-center justify-center w-6 h-6 rounded-full text-gray-400 hover:text-violet-600 hover:bg-violet-50 dark:hover:bg-violet-900/30 transition-all duration-150 cursor-pointer active:scale-90">
                                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div class="overflow-x-auto overscroll-x-contain">
                    <table id="beneficiary-data-table" class="w-full min-w-[1180px] table-auto text-[0.625rem] text-left text-body sm:text-xs lg:text-sm xl:min-w-full">
                        <!-- Primary Color Header -->
                        <thead class="text-sm text-white bg-royal-blue border-b border-royal-blue/20">
                            <tr>
                                <th scope="col" class="min-w-[280px] px-2 py-2.5 font-medium text-center lg:px-4"
                                    title="Last Name, First Name, Middle Initial">
                                    NAME
                                </th>
                                <th scope="col" class="hidden min-w-[340px] px-2 py-2.5 font-medium text-center lg:table-cell lg:px-4">
                                    ADDRESS
                                </th>
                                <th scope="col" class="w-[12%] px-1 py-2.5 font-medium whitespace-nowrap text-center md:w-[8%] lg:w-[7%] lg:px-2">
                                    AGE
                                </th>
                                <th scope="col" class="w-[18%] px-1 py-2.5 font-medium text-center md:w-[12%] lg:w-[10%] lg:px-2">
                                    GENDER
                                </th>
                                <th scope="col" class="hidden w-[15%] px-2 py-2.5 font-medium whitespace-nowrap text-center md:table-cell lg:w-[10%] lg:px-4">
                                    START DATE
                                </th>
                                <th scope="col" class="hidden w-[15%] px-2 py-2.5 font-medium whitespace-nowrap text-center md:table-cell lg:w-[10%] lg:px-4">
                                    END DATE
                                </th>
                                <th scope="col" class="w-[24%] px-1 py-2.5 font-medium text-center md:w-[18%] lg:w-[12%] lg:px-2">
                                    REMARKS
                                </th>
                                <th scope="col" class="w-[14%] px-1 py-2.5 font-medium text-center md:w-[10%] lg:w-[9%] lg:px-2">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody id="beneficiary-table-body">
                            <!-- Dynamic content injected by gip.js -->
                        </tbody>
                    </table>
                </div>

                <!-- Modern Pagination Footer -->
                <div id="pagination-controls"
                    class="px-4 py-3 bg-white dark:bg-slate-900 border-t border-gray-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 font-montserrat">
                    <!-- Pagination will be injected by gip.js -->
                </div>
            </div>

        </div>
    </div>

    <script>
        // Security check
        if (localStorage.getItem('isLoggedIn') !== 'true') {
            const path = window.location.pathname;
            const base = path.includes('/dole-system/') ? path.substring(0, path.indexOf('/dole-system/') + '/dole-system/'.length) : '';
            window.location.href = `${base}${window.location.search}${window.location.hash}`;
        }

        // Process URL Query Parameters on page load
        document.addEventListener('DOMContentLoaded', () => {
            const urlParams = new URLSearchParams(window.location.search);
            
            // Auto-open Register Member Modal
            if (urlParams.get('add_member') === 'true') {
                setTimeout(() => {
                    if (typeof window.showAddDataModal === 'function') {
                        window.showAddDataModal();
                    }
                }, 600);
            }
            
            // Auto-focus Search Bar
            if (urlParams.get('focus_search') === 'true') {
                setTimeout(() => {
                    const searchInput = document.getElementById('table-search');
                    if (searchInput) {
                        searchInput.focus();
                        searchInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }
                }, 600);
            }

            // Auto-open specific Beneficiary Drawer
            const gipId = urlParams.get('gip_id');
            if (gipId) {
                setTimeout(() => {
                    if (typeof window.viewBeneficiary === 'function') {
                        window.viewBeneficiary({ id: gipId });
                    }
                }, 600);
            }
        });
    </script>

</body>

</html>