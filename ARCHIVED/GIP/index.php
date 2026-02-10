<?php
require_once __DIR__ . '/../../config/vite.php';
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GIP Monitoring - January 2026</title>

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
                        <img src="../../frontend/images/logo/doleiligan.png" class="h-8 me-3" alt="DOLE Logo" />
                        <div class="flex flex-col">
                            <span class="text-sm font-black text-royal-blue uppercase tracking-tight leading-tight">DOLE
                                LDNPFO</span>
                            <span class="text-[10px] font-semibold text-gray-500 uppercase tracking-wider">GIP
                                Monitoring 2026</span>
                        </div>
                    </a>
                </div>
                <div class="flex items-center gap-3">
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

    <?php include __DIR__ . '/../../frontend/components/sidebar/index.php'; ?>

    <div class="p-4 sm:ml-64 mt-14">
        <div class="p-6 min-h-screen">

            <!-- Page Header with Dynamic Indicator -->
            <div class="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <div class="flex items-center gap-3 mb-1">
                        <span
                            class="px-3 py-1 bg-royal-blue/10 text-royal-blue text-[10px] font-black uppercase tracking-widest rounded-lg border border-royal-blue/20">Year
                            2026</span>
                        <span class="text-gray-300">/</span>
                        <span
                            class="px-3 py-1 bg-orange-50 text-orange-600 text-[10px] font-black uppercase tracking-widest rounded-lg border border-orange-100 italic">January
                            1-15</span>
                    </div>
                    <div class="flex items-center gap-4">
                        <h1 class="text-4xl font-black text-heading tracking-tight" id="gip-header-text">GIP Monitoring
                        </h1>
                        <div
                            class="p-2 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center gap-2 group cursor-pointer hover:border-royal-blue/30 transition-all">
                            <div class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                            <span class="text-[10px] font-bold text-gray-500 uppercase tracking-tighter">Active
                                Period</span>
                        </div>
                    </div>
                </div>

                <div class="flex items-center gap-3">
                    <div class="flex p-1 bg-gray-100 rounded-xl border border-gray-200 shadow-inner">
                        <button
                            class="px-4 py-2 bg-white text-royal-blue text-[11px] font-black rounded-lg shadow-sm border border-gray-200 transition-all hover:scale-105 active:scale-95 cursor-pointer">RECEIVED
                        </button>
                        <button
                            class="px-4 py-2 text-gray-500 text-[11px] font-black rounded-lg hover:bg-gray-200 transition-all active:scale-95 cursor-pointer">CHECKLIST
                        </button>
                        <button
                            class="px-4 py-2 text-gray-500 text-[11px] font-black rounded-lg hover:bg-gray-200 transition-all active:scale-95 cursor-pointer">OUTGOING
                        </button>
                    </div>
                    <button type="button"
                        class="flex items-center gap-2 px-5 py-2.5 bg-[#e8f5e9] text-[#2e7d32] font-black rounded-xl hover:bg-[#2e7d32] hover:text-white transition-all duration-300 shadow-sm border border-[#c8e6c9] hover:scale-105 active:scale-95 cursor-pointer">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 4v16m8-8H4" />
                        </svg>
                        <span class="text-sm">ADD RECORD</span>
                    </button>
                </div>
            </div>

            <!-- Main Content Table -->
            <div class="relative overflow-hidden bg-white shadow-2xl rounded-[1.5rem] border border-gray-100">

                <!-- Modern Table Header Actions -->
                <div
                    class="p-5 bg-gradient-to-r from-white to-gray-50/50 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div class="relative w-full sm:max-w-md group">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none">
                            <svg class="w-5 h-5 text-gray-400 group-focus-within:text-royal-blue transition-colors duration-300"
                                aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="text" id="gip-table-search"
                            class="block w-full ps-12 pe-4 py-3.5 text-sm font-medium text-heading bg-white border border-gray-200 rounded-2xl focus:border-royal-blue/30 focus:ring-4 focus:ring-royal-blue/10 focus:shadow-xl transition-all duration-300 ease-out placeholder:text-gray-400 shadow-sm"
                            placeholder="Search records for Jan 1-15...">
                    </div>

                    <div class="flex items-center gap-2">
                        <button
                            class="p-2.5 bg-white text-gray-400 hover:text-royal-blue rounded-xl border border-gray-100 hover:border-royal-blue/20 transition-all shadow-sm">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                            </svg>
                        </button>
                        <button
                            class="p-2.5 bg-white text-gray-400 hover:text-royal-blue rounded-xl border border-gray-100 hover:border-royal-blue/20 transition-all shadow-sm">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div class="overflow-x-auto">
                    <table class="w-full text-sm text-left rtl:text-right text-body">
                        <!-- Modern Professional Header -->
                        <thead
                            class="text-[10px] font-black text-gray-400 bg-gray-50/50 uppercase tracking-[0.15em] border-y border-gray-100">
                            <tr>
                                <th scope="col" class="px-6 py-4">
                                    DATE RECEIVED
                                </th>
                                <th scope="col" class="px-6 py-4">
                                    RECEIVED FROM
                                </th>
                                <th scope="col" class="px-6 py-4">
                                    PARTICULARS
                                </th>
                                <th scope="col" class="px-6 py-4">
                                    NAME OF BENEFICIARY/ APPLICANT
                                </th>
                                <th scope="col" class="px-6 py-4 text-center">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody id="gip-monitoring-body" class="divide-y divide-gray-50 uppercase">
                            <!-- Sample Static Data matching user's image -->
                            <tr class="hover:bg-blue-50/30 transition-colors group">
                                <td class="px-6 py-4 font-black text-heading text-[11px]">January 19, 2026</td>
                                <td class="px-6 py-4 font-black text-royal-blue text-[11px]">WALLEEN</td>
                                <td class="px-6 py-4 text-gray-600 font-bold text-[10px] leading-relaxed">JANUARY 7-15
                                    DTR AND AR OF ABBAS, EXSAN S.</td>
                                <td class="px-6 py-4 font-black text-heading text-[11px]">ABBAS, EXSAN S.</td>
                                <td class="px-6 py-4 text-center">
                                    <div class="flex items-center justify-center gap-2">
                                        <button data-tooltip-target="tooltip-edit-1"
                                            class="p-1.5 text-gray-400 hover:text-royal-blue hover:bg-blue-50 rounded-lg transition-all cursor-pointer">
                                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                            </svg>
                                        </button>
                                        <button data-tooltip-target="tooltip-archive-1"
                                            class="p-1.5 text-gray-400 hover:text-philippine-red hover:bg-red-50 rounded-lg transition-all cursor-pointer">
                                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                            </svg>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr class="hover:bg-blue-50/30 transition-colors group">
                                <td class="px-6 py-4 font-black text-heading text-[11px]">January 20, 2026</td>
                                <td class="px-6 py-4 font-black text-royal-blue text-[11px]">WALLEEN</td>
                                <td class="px-6 py-4 text-gray-600 font-bold text-[10px] leading-relaxed">JANUARY 7-15
                                    DTR AND AR OF AGBALOG, JOAN T.</td>
                                <td class="px-6 py-4 font-black text-heading text-[11px]">AGBALOG, JOAN T.</td>
                                <td class="px-6 py-4 text-center">
                                    <div class="flex items-center justify-center gap-2">
                                        <button data-tooltip-target="tooltip-edit-2"
                                            class="p-1.5 text-gray-400 hover:text-royal-blue hover:bg-blue-50 rounded-lg transition-all cursor-pointer">
                                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                            </svg>
                                        </button>
                                        <button data-tooltip-target="tooltip-archive-2"
                                            class="p-1.5 text-gray-400 hover:text-philippine-red hover:bg-red-50 rounded-lg transition-all cursor-pointer">
                                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                            </svg>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr class="hover:bg-blue-50/30 transition-colors group">
                                <td class="px-6 py-4 font-black text-heading text-[11px]">January 19, 2026</td>
                                <td class="px-6 py-4 font-black text-royal-blue text-[11px]">WALLEEN</td>
                                <td class="px-6 py-4 text-gray-600 font-bold text-[10px] leading-relaxed">JANUARY 7-15
                                    DTR AND AR OF AMEROL, SOHAIB M.</td>
                                <td class="px-6 py-4 font-black text-heading text-[11px]">AMEROL, SOHAIB M.</td>
                                <td class="px-6 py-4 text-center">
                                    <div class="flex items-center justify-center gap-2">
                                        <button data-tooltip-target="tooltip-edit-3"
                                            class="p-1.5 text-gray-400 hover:text-royal-blue hover:bg-blue-50 rounded-lg transition-all cursor-pointer">
                                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                            </svg>
                                        </button>
                                        <button data-tooltip-target="tooltip-archive-3"
                                            class="p-1.5 text-gray-400 hover:text-philippine-red hover:bg-red-50 rounded-lg transition-all cursor-pointer">
                                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                            </svg>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <!-- Tooltip Content -->
                <div id="tooltip-edit-1" role="tooltip"
                    class="absolute z-10 invisible inline-block px-3 py-2 text-xs font-bold text-white transition-opacity duration-300 bg-royal-blue rounded-lg shadow-sm opacity-0 tooltip">
                    Edit Record
                    <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
                <div id="tooltip-archive-1" role="tooltip"
                    class="absolute z-10 invisible inline-block px-3 py-2 text-xs font-bold text-white transition-opacity duration-300 bg-philippine-red rounded-lg shadow-sm opacity-0 tooltip">
                    Archive Record
                    <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
                <div id="tooltip-edit-2" role="tooltip"
                    class="absolute z-10 invisible inline-block px-3 py-2 text-xs font-bold text-white transition-opacity duration-300 bg-royal-blue rounded-lg shadow-sm opacity-0 tooltip">
                    Edit Record
                    <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
                <div id="tooltip-archive-2" role="tooltip"
                    class="absolute z-10 invisible inline-block px-3 py-2 text-xs font-bold text-white transition-opacity duration-300 bg-philippine-red rounded-lg shadow-sm opacity-0 tooltip">
                    Archive Record
                    <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
                <div id="tooltip-edit-3" role="tooltip"
                    class="absolute z-10 invisible inline-block px-3 py-2 text-xs font-bold text-white transition-opacity duration-300 bg-royal-blue rounded-lg shadow-sm opacity-0 tooltip">
                    Edit Record
                    <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
                <div id="tooltip-archive-3" role="tooltip"
                    class="absolute z-10 invisible inline-block px-3 py-2 text-xs font-bold text-white transition-opacity duration-300 bg-philippine-red rounded-lg shadow-sm opacity-0 tooltip">
                    Archive Record
                    <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
                </table>
            </div>
        </div>

    </div>
    </div>

    </div>
    </div>

    <script>
        // Security check
        if (localStorage.getItem('isLoggedIn') !== 'true') {
            const path = window.location.pathname;
            const base = path.includes('/dole-system/') ? path.substring(0, path.indexOf('/dole-system/') + '/dole-system/'.length) : '';
            window.location.href = `${base}`;
        }
    </script>

</body>

</html>