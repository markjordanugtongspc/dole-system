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

    <?php include __DIR__ . '/../components/sidebar/index.php'; ?>

    <div class="p-4 sm:ml-64 mt-14">
        <div class="p-6 min-h-screen">

            <!-- Page Header with Toggle & Add Button -->
            <div class="mb-6 flex items-center justify-between">
                <div class="flex items-center gap-2 transition-all duration-200" id="ldn-header-container">
                    <h1 class="text-3xl font-black text-heading mb-2" id="ldn-header-text">Lanao Del Norte - GIP</h1>
                    <div id="ldn-header-icon" class="mb-1 text-royal-blue">
                        <!-- Clickable SVG Icon -->
                        <svg class="w-6 h-6 hover:text-royal-blue/80 cursor-pointer" fill="none" stroke="currentColor"
                            viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </div>
                </div>

                <button type="button" onclick="showAddDataModal()"
                    class="flex items-center gap-2 px-5 py-2.5 bg-[#e8f5e9] text-[#2e7d32] font-black rounded-xl hover:bg-[#2e7d32] hover:text-white transition-all duration-300 shadow-sm border border-[#c8e6c9] hover:scale-105 active:scale-95 cursor-pointer">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 4v16m8-8H4" />
                    </svg>
                    <span class="text-sm">ADD DATA</span>
                </button>
            </div>

            <!-- Main Content Table -->
            <div class="relative overflow-x-auto bg-white shadow-xs rounded-base border border-default">

                <!-- Modern Search Bar -->
                <div
                    class="p-5 bg-white border-b border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div class="relative w-full sm:max-w-md group">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none">
                            <svg class="w-5 h-5 text-gray-400 group-focus-within:text-royal-blue transition-colors duration-300"
                                aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="text" id="table-search"
                            class="block w-full ps-12 pe-4 py-3 text-sm font-medium text-heading bg-gray-50/50 border border-gray-200 rounded-full focus:bg-white focus:border-royal-blue/30 focus:ring-4 focus:ring-royal-blue/10 focus:shadow-lg transition-all duration-300 ease-out placeholder:text-gray-400"
                            placeholder="Search by Name, ID, Office, or Status...">

                        <!-- Optional Keyboard Shortcut Hint -->
                        <div class="absolute inset-y-0 end-0 flex items-center pe-4 pointer-events-none">
                            <span
                                class="text-xs text-gray-400 border border-gray-200 rounded px-1.5 py-0.5 group-focus-within:border-royal-blue/30 group-focus-within:text-royal-blue transition-colors duration-300">/</span>
                        </div>
                    </div>

                    <!-- Filter / Sort Actions -->
                    <div class="relative">
                        <button id="sort-dropdown-button" data-dropdown-toggle="sort-dropdown"
                            class="flex items-center justify-center p-2.5 text-gray-500 rounded-full hover:bg-orange-50 hover:text-orange-600 transition-all duration-300 border border-transparent hover:border-orange-100 group shadow-sm">
                            <svg class="w-5 h-5 transition-transform group-hover:rotate-180" fill="none"
                                stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                            </svg>
                        </button>
                        <!-- Sort Dropdown Menu -->
                        <div id="sort-dropdown"
                            class="z-10 hidden bg-white divide-y divide-gray-100 rounded-xl shadow-2xl w-56 border border-gray-100 font-montserrat">
                            <div class="px-4 py-3 bg-orange-50/50 rounded-t-xl">
                                <span class="block text-[10px] font-black text-orange-600 uppercase tracking-wider">Sort
                                    Beneficiaries</span>
                            </div>
                            <ul class="py-2 text-xs font-bold text-gray-700" aria-labelledby="sort-dropdown-button">
                                <li><button onclick="sortData('name_asc')"
                                        class="flex items-center w-full px-4 py-2 hover:bg-orange-50 hover:text-orange-600 transition-colors">Name
                                        (A-Z)</button></li>
                                <li><button onclick="sortData('name_desc')"
                                        class="flex items-center w-full px-4 py-2 hover:bg-orange-50 hover:text-orange-600 transition-colors">Name
                                        (Z-A)</button></li>
                                <li><button onclick="sortData('office')"
                                        class="flex items-center w-full px-4 py-2 hover:bg-orange-50 hover:text-orange-600 transition-colors">Office
                                        / Assignment</button></li>
                                <li><button onclick="sortData('remarks')"
                                        class="flex items-center w-full px-4 py-2 hover:bg-orange-50 hover:text-orange-600 transition-colors">Remarks
                                        Status</button></li>
                                <li><button onclick="sortData('education')"
                                        class="flex items-center w-full px-4 py-2 hover:bg-orange-50 hover:text-orange-600 transition-colors">Educational
                                        Attainment</button></li>
                                <li><button onclick="sortData('work')"
                                        class="flex items-center w-full px-4 py-2 hover:bg-orange-50 hover:text-orange-600 transition-colors">Nature
                                        of Work</button></li>
                                <li><button onclick="sortData('address')"
                                        class="flex items-center w-full px-4 py-2 hover:bg-orange-50 hover:text-orange-600 transition-colors">Address
                                        / Residency</button></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <table class="w-full text-sm text-left rtl:text-right text-body">
                    <!-- Primary Color Header -->
                    <thead class="text-sm text-white bg-royal-blue border-b border-royal-blue/20">
                        <tr>
                            <th scope="col" class="px-6 py-3 font-medium whitespace-nowrap">
                                ID NO.
                            </th>
                            <th scope="col" class="px-6 py-3 font-medium">
                                NAME (Last Name, First Name, MI)
                            </th>
                            <th scope="col" class="px-6 py-3 font-medium">
                                OFFICE/PLACE OF ASSIGNMENT
                            </th>
                            <th scope="col" class="px-6 py-3 font-medium">
                                REMARKS
                            </th>
                            <th scope="col" class="px-6 py-3 font-medium">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody id="beneficiary-table-body">
                        <!-- Dynamic content injected by LDNgip.js -->
                    </tbody>
                </table>
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