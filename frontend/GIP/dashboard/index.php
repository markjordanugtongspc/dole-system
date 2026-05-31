<?php
require_once __DIR__ . '/../../../config/vite.php';
require_once __DIR__ . '/../../../config/db.php';

// Base URL for links and assets
$projectRoot = str_replace('\\', '/', dirname(dirname(dirname(__DIR__))));
$docRoot     = str_replace('\\', '/', $_SERVER['DOCUMENT_ROOT']);
$baseUrl     = rtrim(str_ireplace($docRoot, '', $projectRoot), '/');
$current_uri = $_SERVER['REQUEST_URI'];
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GIP Dashboard | DOLE Iligan City</title>

    <!-- Favicon -->
    <link rel="icon" type="image/png" href="<?php echo $baseUrl; ?>/frontend/images/logo/gip.png">
    <link rel="apple-touch-icon" href="<?php echo $baseUrl; ?>/frontend/images/logo/gip.png">

    <!-- Dark Mode FOUC Prevention -->
    <script>
        (function () {
            var theme = localStorage.getItem('color-theme');
            if (!theme) {
                var m = document.cookie.match(/(?:^|; )color-theme=([^;]*)/);
                theme = m ? decodeURIComponent(m[1]) : null;
            }
            if (theme === 'dark') document.documentElement.classList.add('dark');
            else document.documentElement.classList.remove('dark');
        })();
    </script>

    <!-- Auth Guard — redirect to login if not authenticated -->
    <script>
        (function () {
            if (localStorage.getItem('isLoggedIn') !== 'true') {
                var base = window.location.pathname.replace(/\/frontend\/.*/, '');
                window.location.replace(base + '/');
            }
        })();
    </script>

    <!-- Vite Assets (Tailwind + Flowbite + existing modules) -->
    <?php vite('backend/js/main.js'); ?>
</head>

<body class="bg-gray-50 dark:bg-gray-900 font-montserrat antialiased">

    <!-- Mobile hamburger toggle -->
    <button data-drawer-target="gip-sidebar" data-drawer-toggle="gip-sidebar" aria-controls="gip-sidebar" type="button"
        class="inline-flex items-center p-2 mt-3 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 cursor-pointer">
        <span class="sr-only">Open sidebar</span>
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
            <path clip-rule="evenodd" fill-rule="evenodd"
                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z">
            </path>
        </svg>
    </button>

    <!-- ═══════════════════════════════════════════════════════════ SIDEBAR -->
    <aside id="gip-sidebar"
        class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="GIP Sidebar">
        <div
            class="h-full flex flex-col px-3 py-4 overflow-y-auto bg-white dark:bg-gray-800 border-e border-gray-200 dark:border-gray-700 shadow-sm">

            <!-- ─── Logo ──────────────────────────────────────────────── -->
            <a href="<?php echo $baseUrl; ?>/frontend/GIP/dashboard/" class="flex items-center ps-1 mb-6 group cursor-pointer">
                <img src="<?php echo $baseUrl; ?>/frontend/images/logo/gip.png"
                    class="h-11 w-11 me-3 rounded-full object-contain border-2 border-royal-blue/20 shadow-sm group-hover:border-royal-blue/40 transition-all duration-200"
                    alt="GIP Logo">
                <div>
                    <span
                        class="block text-xl font-black text-royal-blue dark:text-white uppercase tracking-tight leading-none">GIP</span>
                    <span
                        class="block text-[0.5625rem] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-[0.18em] mt-0.5">Portal</span>
                </div>
            </a>

            <!-- ─── Main Navigation ───────────────────────────────────── -->
            <ul class="space-y-0.5 font-medium flex-1">

                <!-- Dashboard (active) -->
                <li>
                    <a href="<?php echo $baseUrl; ?>/frontend/GIP/dashboard/"
                        class="flex items-center px-3 py-2.5 text-royal-blue bg-blue-50 dark:bg-royal-blue/20 dark:text-blue-300 rounded-lg group font-bold cursor-pointer"
                        aria-current="page">
                        <svg class="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M10 6.025A7.5 7.5 0 1 0 17.975 14H10V6.025Z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M13.5 3c-.169 0-.334.014-.5.025V11h7.975c.011-.166.025-.331.025-.5A7.5 7.5 0 0 0 13.5 3Z" />
                        </svg>
                        <span class="ms-3">Dashboard</span>
                    </a>
                </li>

                <!-- Reports -->
                <li>
                    <a href="#"
                        class="flex items-center px-3 py-2.5 text-gray-600 dark:text-gray-400 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-royal-blue dark:hover:text-white group transition-all duration-150 cursor-pointer">
                        <svg class="w-5 h-5 shrink-0 transition duration-75 group-hover:text-royal-blue" fill="none"
                            stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span class="ms-3">Reports</span>
                        <span
                            class="ms-auto text-[0.5625rem] font-black uppercase tracking-wider text-amber-500 bg-amber-50 dark:bg-amber-900/20 dark:text-amber-400 px-1.5 py-0.5 rounded-sm border border-amber-200 dark:border-amber-700">Soon</span>
                    </a>
                </li>

                <!-- Export -->
                <li>
                    <a href="<?php echo $baseUrl; ?>/frontend/export/"
                        class="flex items-center px-3 py-2.5 text-gray-600 dark:text-gray-400 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-royal-blue dark:hover:text-white group transition-all duration-150 cursor-pointer">
                        <svg class="w-5 h-5 shrink-0 transition duration-75 group-hover:text-royal-blue" fill="none"
                            stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span class="ms-3">Export</span>
                    </a>
                </li>

                <!-- Contact -->
                <li>
                    <a href="#"
                        class="flex items-center px-3 py-2.5 text-gray-600 dark:text-gray-400 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-royal-blue dark:hover:text-white group transition-all duration-150 cursor-pointer">
                        <svg class="w-5 h-5 shrink-0 transition duration-75 group-hover:text-royal-blue" fill="none"
                            stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span class="ms-3">Contact</span>
                    </a>
                </li>

                <!-- About Developer -->
                <li>
                    <a href="<?php echo $baseUrl; ?>/frontend/aboutme/"
                        class="flex items-center px-3 py-2.5 text-gray-600 dark:text-gray-400 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-royal-blue dark:hover:text-white group transition-all duration-150 cursor-pointer">
                        <svg class="w-5 h-5 shrink-0 transition duration-75 group-hover:text-royal-blue" fill="none"
                            stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span class="ms-3 text-sm">About Developer</span>
                    </a>
                </li>
            </ul>

            <!-- ─── Settings Separator ────────────────────────────────── -->
            <div id="gip-settings-section" class="border-t border-gray-200 dark:border-gray-700 pt-3 mt-2 transition-all duration-300 ease-in-out">
                <p id="gip-settings-title"
                    class="px-3 mb-1.5 text-[0.5625rem] font-black text-gray-300 dark:text-gray-600 uppercase tracking-[0.22em] transition-all duration-300 ease-in-out">
                    Settings</p>
                <ul id="gip-settings-list" class="space-y-0.5 transition-all duration-300 ease-in-out overflow-hidden max-h-[200px]">

                    <!-- Contact Support -->
                    <li>
                        <a href="#"
                            class="flex items-center px-3 py-2.5 text-gray-600 dark:text-gray-400 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-royal-blue dark:hover:text-white group transition-all duration-150 cursor-pointer">
                            <svg class="w-5 h-5 shrink-0 transition duration-75 group-hover:text-royal-blue"
                                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                            <span class="ms-3 text-sm">Contact Support</span>
                        </a>
                    </li>

                    <!-- Dark Mode Toggle -->
                    <li>
                        <button id="gip-theme-toggle" data-theme-toggle type="button" style="text-transform: none !important;"
                            class="flex items-center w-full px-3 py-2.5 text-gray-600 dark:text-gray-400 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-royal-blue dark:hover:text-white group transition-all duration-150 text-left cursor-pointer normal-case">
                            <!-- Sun (shown when dark mode is OFF) -->
                            <svg id="gip-icon-sun"
                                class="w-5 h-5 shrink-0 text-gray-800 dark:text-white group-hover:text-gray-800"
                                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                            <!-- Half Moon (shown when dark mode is ON) -->
                            <svg id="gip-icon-moon"
                                class="w-5 h-5 shrink-0 text-indigo-400 hidden group-hover:text-indigo-400"
                                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                            </svg>
                            <span class="ms-3 text-sm flex-1 font-medium normal-case" style="text-transform: none !important;">Dark Mode</span>
                            <!-- CSS-driven pill toggle -->
                            <div class="relative w-9 h-5 shrink-0 pointer-events-none">
                                <div
                                    class="w-9 h-5 bg-gray-200 dark:bg-royal-blue rounded-full transition-colors duration-200">
                                </div>
                                <div
                                    class="absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform duration-200 dark:translate-x-4">
                                </div>
                            </div>
                        </button>
                    </li>

                    <!-- Settings -->
                    <li>
                        <a href="<?php echo $baseUrl; ?>/frontend/user/settings/"
                            class="flex items-center px-3 py-2.5 text-gray-600 dark:text-gray-400 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-royal-blue dark:hover:text-white group transition-all duration-150 cursor-pointer">
                            <svg class="w-5 h-5 shrink-0 transition duration-75 group-hover:text-royal-blue"
                                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span class="ms-3 text-sm">Settings</span>
                        </a>
                    </li>
                </ul>
            </div>

            <!-- ─── GIP Tips Card (Replacing CTA Card) ──────────────────── -->
            <div
                class="mx-0.5 mt-3 mb-2 p-3.5 bg-amber-50 dark:bg-amber-950/30 rounded-xl border border-amber-200/50 dark:border-amber-900/30 transition-all duration-300 hover:shadow-sm">
                <div class="flex items-center justify-between gap-1.5 mb-2">
                    <div class="flex items-center gap-1.5">
                        <svg class="w-4 h-4 text-amber-500 animate-pulse shrink-0" fill="none" stroke="currentColor"
                            viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707-.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                        <span
                            class="text-[0.625rem] font-black text-amber-600 dark:text-amber-400 uppercase tracking-wider">Gabay ng Intern</span>
                    </div>
                    <span class="text-[0.5rem] font-bold text-amber-500 bg-amber-100 dark:bg-amber-950/40 px-1.5 py-0.5 rounded uppercase tracking-widest leading-none">Tip</span>
                </div>
                <p id="gip-tip-content" class="text-[0.6875rem] text-gray-600 dark:text-gray-300 mb-3 leading-relaxed transition-all duration-300 min-h-[48px]">
                    Palaging i-check ang iyong DTR at attachments bago matapos ang 15-day period upang maiwasan ang delay sa sahod.
                </p>
                <button onclick="cycleGipTip()"
                    class="flex items-center justify-center gap-1.5 w-full py-1.5 px-3 text-[0.625rem] font-black text-white bg-amber-500 hover:bg-amber-600 active:scale-95 rounded-lg shadow-md transition-all duration-150 uppercase tracking-wider cursor-pointer">
                    <svg class="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 8H17" />
                    </svg>
                    Susunod na Tip
                </button>
            </div>

            <!-- ─── Profile + Dropdown + Sign Out ────────────────────────── -->
            <div class="border-t border-gray-200 dark:border-gray-700 pt-3 mt-2 space-y-1 relative">
                
                <!-- Animated Profile Dropdown Menu -->
                <div id="gip-profile-dropdown" 
                    class="hidden opacity-0 translate-y-2 scale-95 origin-bottom transition-all duration-200 absolute bottom-full left-0 right-0 bg-white dark:bg-gray-800 border border-gray-150 dark:border-gray-700 rounded-xl p-2 mb-2 shadow-xl space-y-0.5 z-50">
                    <button onclick="showProfileModal(); toggleProfileDropdown(event);" style="text-transform: none !important;"
                        class="flex items-center w-full px-3 py-2 text-xs font-bold text-gray-700 dark:text-gray-250 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors cursor-pointer normal-case">
                        <svg class="w-4 h-4 mr-2 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                        </svg>
                        Tingnan ang Profile
                    </button>
                    <a href="<?php echo $baseUrl; ?>/frontend/user/settings/" 
                        class="flex items-center w-full px-3 py-2 text-xs font-bold text-gray-700 dark:text-gray-250 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors cursor-pointer normal-case">
                        <svg class="w-4 h-4 mr-2 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        Mga Setting
                    </a>
                    <div class="h-px bg-gray-150 dark:bg-gray-700 my-1"></div>
                    <button id="gip-logout-btn" style="text-transform: none !important;"
                        class="flex items-center w-full px-3 py-2 text-xs font-bold text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20 rounded-lg transition-colors cursor-pointer normal-case">
                        <svg class="w-4 h-4 mr-2 text-red-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                        Mag-sign Out
                    </button>
                </div>

                <!-- Profile Button (Toggle Dropdown) -->
                <button id="gip-profile-btn" onclick="toggleProfileDropdown(event)" style="text-transform: none !important;"
                    class="flex items-center w-full p-2.5 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200 group cursor-pointer normal-case">
                    <div
                        class="w-9 h-9 rounded-full bg-royal-blue/10 dark:bg-royal-blue/30 border-2 border-royal-blue/20 dark:border-royal-blue/40 flex items-center justify-center text-royal-blue font-black text-sm overflow-hidden sidebar-user-avatar shrink-0 group-hover:border-royal-blue/40 transition-all">
                        <span class="sidebar-avatar-initials text-xs">...</span>
                        <img src="" class="sidebar-avatar-img hidden w-full h-full object-cover" alt="Profile">
                    </div>
                    <div class="ms-3 text-left flex-1 min-w-0">
                        <p class="text-xs font-bold text-gray-800 dark:text-white sidebar-user-name truncate">...</p>
                        <p class="text-[0.625rem] text-gray-400 dark:text-gray-500 truncate sidebar-user-email">...</p>
                    </div>
                    <svg id="gip-profile-arrow" class="w-4 h-4 text-gray-300 group-hover:text-royal-blue transition-transform shrink-0 duration-200"
                        fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
                    </svg>
                </button>
            </div>

        </div>
    </aside>
    <!-- ════════════════════════════════════════════════ END SIDEBAR -->


    <!-- ═══════════════════════════════════════════════ MAIN CONTENT -->
    <div class="sm:ml-64 min-h-screen flex flex-col">

        <!-- Top Bar -->
        <div
            class="sticky top-0 z-30 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-3.5 flex items-center justify-between shadow-sm">
            <div>
                <h1
                    class="text-base font-black text-royal-blue dark:text-white uppercase tracking-tight leading-none">
                    GIP Dashboard</h1>
                <p class="text-[0.625rem] text-gray-400 dark:text-gray-500 font-medium mt-0.5">
                    Government Internship Program &mdash; DOLE Lanao del Norte PFO, Iligan City
                </p>
            </div>
            <div class="flex items-center gap-3">
                <span
                    class="hidden sm:block text-[0.6875rem] font-semibold text-gray-400 dark:text-gray-500"><?php echo date('F d, Y'); ?></span>
                <span
                    class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 text-[0.625rem] font-black uppercase tracking-wider border border-green-200 dark:border-green-800">
                    <span class="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                    Live
                </span>
            </div>
        </div>

        <!-- Dashboard Body -->
        <div class="p-5 flex-1">

            <!-- ─── Stats Strip ──────────────────────────────────── -->
            <div class="bg-transparent border-y border-gray-200 dark:border-gray-700 mb-5">
                <div class="flex items-stretch">

                    <!-- Total Attend -->
                    <div class="flex-1 px-5 py-4 flex items-center justify-between gap-3 min-w-0">
                        <div class="min-w-0 flex flex-col">
                            <p class="text-xs font-black text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-1">Total Attend</p>
                            <p id="gip-stat-total" class="text-3xl font-black text-royal-blue dark:text-blue-400 tabular-nums leading-none">—</p>
                            <span class="text-[0.625rem] text-gray-400 dark:text-gray-500 mt-1 font-semibold block">present today</span>
                        </div>
                        <!-- Modern Graph / Status Pill (▼ +12%) -->
                        <div class="flex items-center gap-1 text-emerald-500 dark:text-emerald-400 font-bold text-xs shrink-0 bg-emerald-50 dark:bg-emerald-500/10 px-2 py-0.5 rounded-lg border border-emerald-100 dark:border-emerald-500/20">
                            <svg class="w-2.5 h-2.5 fill-current shrink-0" viewBox="0 0 24 24">
                                <path d="M12 16L4 6h16l-8 10z"/>
                            </svg>
                            <span>+12%</span>
                        </div>
                    </div>

                    <!-- Floating separator -->
                    <div class="flex items-center py-1"><div class="w-px h-14 bg-gray-200 dark:bg-gray-700"></div></div>

                    <!-- Total Absent -->
                    <div class="flex-1 px-5 py-4 flex items-center justify-between gap-3 min-w-0">
                        <div class="min-w-0 flex flex-col">
                            <p class="text-xs font-black text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-1">Total Absent</p>
                            <p id="gip-stat-ongoing" class="text-3xl font-black text-red-500 dark:text-red-400 tabular-nums leading-none">—</p>
                            <span class="text-[0.625rem] text-gray-400 dark:text-gray-500 mt-1 font-semibold block">not in today</span>
                        </div>
                        <!-- Modern Graph / Status Pill (▼ +3%) -->
                        <div class="flex items-center gap-1 text-emerald-500 dark:text-emerald-400 font-bold text-xs shrink-0 bg-emerald-50 dark:bg-emerald-500/10 px-2 py-0.5 rounded-lg border border-emerald-100 dark:border-emerald-500/20">
                            <svg class="w-2.5 h-2.5 fill-current shrink-0" viewBox="0 0 24 24">
                                <path d="M12 16L4 6h16l-8 10z"/>
                            </svg>
                            <span>+3%</span>
                        </div>
                    </div>

                    <!-- Floating separator -->
                    <div class="flex items-center py-1"><div class="w-px h-14 bg-gray-200 dark:bg-gray-700"></div></div>

                    <!-- Total Tickets -->
                    <div class="flex-1 px-5 py-4 flex items-center justify-between gap-3 min-w-0">
                        <div class="min-w-0 flex flex-col">
                            <p class="text-xs font-black text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-1">Total Tickets</p>
                            <p id="gip-stat-completed" class="text-3xl font-black text-indigo-600 dark:text-indigo-400 tabular-nums leading-none">—</p>
                            <span class="text-[0.625rem] text-gray-400 dark:text-gray-500 mt-1 font-semibold block">filed requests</span>
                        </div>
                        <!-- Modern Graph / Status Pill (▼ +8 tasks) -->
                        <div class="flex items-center gap-1 text-emerald-500 dark:text-emerald-400 font-bold text-xs shrink-0 bg-emerald-50 dark:bg-emerald-500/10 px-2 py-0.5 rounded-lg border border-emerald-100 dark:border-emerald-500/20">
                            <svg class="w-2.5 h-2.5 fill-current shrink-0" viewBox="0 0 24 24">
                                <path d="M12 16L4 6h16l-8 10z"/>
                            </svg>
                            <span>+8 tasks</span>
                        </div>
                    </div>

                    <!-- Floating separator -->
                    <div class="flex items-center py-1"><div class="w-px h-14 bg-gray-200 dark:bg-gray-700"></div></div>

                    <!-- Contract Progress (replacing My Hours Left) -->
                    <div class="flex-1 px-5 py-4 flex flex-col justify-center gap-1 min-w-0">
                        <div class="min-w-0 flex flex-col">
                            <p class="text-xs font-black text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-1">Contract Progress</p>
                            <p id="gip-contract-percentage" class="text-3xl font-black text-amber-600 dark:text-amber-400 tabular-nums leading-none">0%</p>
                            <span class="text-[0.625rem] text-gray-400 dark:text-gray-500 mt-1 font-semibold block">
                                <span id="gip-contract-remaining-days" class="text-amber-600 dark:text-amber-400 font-bold">calculating...</span> (Apr 16 - Nov 15)
                            </span>
                        </div>
                    </div>

                </div>
            </div>

            <!-- ─── Chart + Office Breakdown ─────────────────────── -->
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-5">

                <!-- Chart placeholder -->
                <div
                    class="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm">
                    <div class="flex items-center justify-between mb-4">
                        <div>
                            <h3 class="text-sm font-black text-gray-800 dark:text-white uppercase tracking-tight">
                                Peak Attendance</h3>
                            <p class="text-[0.625rem] text-gray-400 dark:text-gray-500 font-medium mt-0.5">Intern attendance by period</p>
                        </div>
                        <span
                            class="text-[0.625rem] font-bold text-amber-500 bg-amber-50 dark:bg-amber-900/20 px-2 py-1 rounded-full border border-amber-200 dark:border-amber-700 uppercase tracking-wider">Coming
                            Soon</span>
                    </div>
                    <div
                        class="flex flex-col items-center justify-center h-52 rounded-lg bg-gray-50 dark:bg-gray-700/40 border border-dashed border-gray-200 dark:border-gray-600">
                        <svg class="w-10 h-10 text-gray-200 dark:text-gray-600 mb-3" fill="none" stroke="currentColor"
                            viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
                        </svg>
                        <p class="text-xs text-gray-300 dark:text-gray-600 font-semibold">Chart visualization here</p>
                        <p class="text-[0.625rem] text-gray-300 dark:text-gray-600 mt-1">GIP-specific analytics coming
                            soon</p>
                    </div>
                </div>

                <!-- Manual Attendance -->
                <div
                    class="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm flex flex-col">
                    <div class="flex items-center justify-between mb-1">
                        <h3 class="text-sm font-black text-gray-800 dark:text-white uppercase tracking-tight">
                            Attendance</h3>
                        <span class="text-[0.5625rem] font-black uppercase tracking-wider text-amber-500 bg-amber-50 dark:bg-amber-900/20 dark:text-amber-400 px-1.5 py-0.5 rounded-sm border border-amber-200 dark:border-amber-700">Coming Soon</span>
                    </div>
                    <p class="text-[0.625rem] text-gray-400 dark:text-gray-500 font-medium mb-5">Manual tap-in record for GIP interns</p>
                    <div class="flex-1 flex flex-col items-center justify-center gap-3">
                        <button disabled
                            class="flex flex-col items-center justify-center gap-3 w-full py-8 rounded-xl border-2 border-dashed border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/30 cursor-not-allowed group transition-all duration-150">
                            <div class="w-14 h-14 rounded-full bg-royal-blue/10 dark:bg-royal-blue/20 flex items-center justify-center">
                                <svg class="w-7 h-7 text-royal-blue/50 dark:text-blue-400/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                        d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                                </svg>
                            </div>
                            <div class="text-center">
                                <p class="text-sm font-black text-gray-400 dark:text-gray-500 uppercase tracking-tight">Record Attendance</p>
                                <p class="text-[0.625rem] text-gray-300 dark:text-gray-600 mt-0.5">Tap button — drawer coming soon</p>
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            <!-- ─── Gender + Status split ─────────────────────────── -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">

                <div
                    class="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm">
                    <div class="flex items-center justify-between mb-1">
                        <h3 class="text-sm font-black text-gray-800 dark:text-white uppercase tracking-tight">
                            GIP Requirements</h3>
                        <span class="text-[0.5625rem] font-black text-gray-400 dark:text-gray-500 uppercase tracking-wider">View Only</span>
                    </div>
                    <p class="text-[0.625rem] text-gray-400 dark:text-gray-500 font-medium mb-4">Document submission status</p>
                    <ul class="space-y-2.5">
                        <?php
                        $gipDocs = ['GIP FORM', 'BIRTH CERTIFICATE', 'DIPLOMA', 'TOR', 'VALID ID'];
                        foreach ($gipDocs as $doc): ?>
                            <li class="flex items-center justify-between gap-3">
                                <div class="flex items-center gap-2.5 min-w-0">
                                    <!-- unchecked circle -->
                                    <div class="w-4 h-4 shrink-0 rounded-full border-2 border-gray-200 dark:border-gray-600 flex items-center justify-center">
                                    </div>
                                    <span class="text-[0.6875rem] font-semibold text-gray-700 dark:text-gray-300 truncate"><?php echo htmlspecialchars($doc); ?></span>
                                </div>
                                <span class="shrink-0 text-[0.5625rem] font-black uppercase tracking-wider px-1.5 py-0.5 rounded-sm
                                    bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-500 border border-gray-200 dark:border-gray-600">
                                    Not Submitted
                                </span>
                            </li>
                        <?php endforeach; ?>
                    </ul>
                    <p class="text-[0.5625rem] text-gray-300 dark:text-gray-600 mt-4 text-center">Backend integration coming soon</p>
                </div>

                <div
                    class="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm">
                    <div class="flex items-center justify-between mb-1">
                        <h3 class="text-sm font-black text-gray-800 dark:text-white uppercase tracking-tight">
                            AR / DTR Submission</h3>
                        <span class="text-[0.5625rem] font-black text-gray-400 dark:text-gray-500 uppercase tracking-wider">View Only</span>
                    </div>
                    <p class="text-[0.625rem] text-gray-400 dark:text-gray-500 font-medium mb-4">Current 15-day period status</p>

                    <div id="gip-period-cards" class="space-y-3">
                        <!-- Rendered by inline JS below -->
                    </div>

                    <p class="text-[0.5625rem] text-gray-300 dark:text-gray-600 mt-4 text-center">Auto-detection &amp; submission tracking coming soon</p>
                </div>
            </div>

        </div>

        <!-- Footer -->
        <footer class="border-t border-gray-100 dark:border-gray-800 py-4 text-center">
            <p class="text-[0.5625rem] text-gray-300 dark:text-gray-600 font-bold uppercase tracking-widest">
                &copy; <span class="auto-year"></span> GIP Portal &mdash; System V<?php echo htmlspecialchars(env('APP_VERSION', '4.2')); ?>
                &nbsp;|&nbsp;
                <span class="text-royal-blue/40 dark:text-blue-800 font-black">Mark Jordan Ugtong</span>
                &nbsp;|&nbsp; Exclusive Property of DOLE Iligan City
            </p>
        </footer>
    </div>
    <!-- ══════════════════════════════════════════ END MAIN CONTENT -->


    <!-- ═══════════════════════════════════════════════ GIP PAGE JS -->
    <script>
        (function () {

            // ── Dark mode icon sync ──────────────────────────────────────
            function syncThemeIcons() {
                const isDark = document.documentElement.classList.contains('dark');
                const sun = document.getElementById('gip-icon-sun');
                const moon = document.getElementById('gip-icon-moon');
                if (sun) sun.classList.toggle('hidden', isDark);
                if (moon) moon.classList.toggle('hidden', !isDark);
            }
            syncThemeIcons();
            new MutationObserver(syncThemeIcons).observe(
                document.documentElement, { attributes: true, attributeFilter: ['class'] }
            );

            // ── Logout ───────────────────────────────────────────────────
            document.getElementById('gip-logout-btn')?.addEventListener('click', function () {
                localStorage.removeItem('isLoggedIn');
                localStorage.removeItem('user');
                const base = window.location.pathname.replace(/\/frontend\/.*/, '');
                window.location.replace(base + '/');
            });

            // ── Profile Dropdown & Settings Collapsing ───────────────────
            window.toggleProfileDropdown = function (event) {
                if (event) event.stopPropagation();
                
                const dropdown = document.getElementById('gip-profile-dropdown');
                const arrow = document.getElementById('gip-profile-arrow');
                const settingsSection = document.getElementById('gip-settings-section');
                const settingsList = document.getElementById('gip-settings-list');
                const settingsTitle = document.getElementById('gip-settings-title');
                
                if (!dropdown) return;
                
                const isOpen = !dropdown.classList.contains('hidden');
                
                if (isOpen) {
                    // Close dropdown
                    dropdown.classList.add('opacity-0', 'translate-y-2', 'scale-95');
                    if (arrow) arrow.classList.remove('rotate-180');
                    
                    // Restore settings
                    if (settingsList) {
                        settingsList.classList.remove('opacity-0', 'scale-y-90', 'pointer-events-none');
                        settingsList.style.maxHeight = '200px';
                    }
                    if (settingsTitle) {
                        settingsTitle.classList.remove('opacity-0', 'pointer-events-none', 'mb-0');
                    }
                    if (settingsSection) {
                        settingsSection.classList.remove('pt-0', 'mt-0', 'border-t-transparent');
                    }
                    
                    setTimeout(() => {
                        dropdown.classList.add('hidden');
                    }, 200);
                } else {
                    // Open dropdown
                    dropdown.classList.remove('hidden');
                    dropdown.offsetHeight; // Force reflow
                    dropdown.classList.remove('opacity-0', 'translate-y-2', 'scale-95');
                    if (arrow) arrow.classList.add('rotate-180');
                    
                    // Compact settings
                    if (settingsList) {
                        settingsList.classList.add('opacity-0', 'scale-y-90', 'pointer-events-none');
                        settingsList.style.maxHeight = '0px';
                    }
                    if (settingsTitle) {
                        settingsTitle.classList.add('opacity-0', 'pointer-events-none', 'mb-0');
                    }
                    if (settingsSection) {
                        settingsSection.classList.add('pt-0', 'mt-0', 'border-t-transparent');
                    }
                }
            };

            // Close dropdown when clicking outside
            document.addEventListener('click', function (e) {
                const dropdown = document.getElementById('gip-profile-dropdown');
                const btn = document.getElementById('gip-profile-btn');
                if (dropdown && !dropdown.classList.contains('hidden') && !dropdown.contains(e.target) && !btn.contains(e.target)) {
                    window.toggleProfileDropdown();
                }
            });

            // ── GIP Filipino Tips Generator ──────────────────────────────
            const gipTips = [
                "Palaging i-check ang iyong DTR at attachments bago matapos ang 15-day period upang maiwasan ang delay sa sahod.",
                "Siguraduhing kumpleto at pirmado ng iyong supervisor ang iyong Accomplishment Report bago ito i-submit.",
                "Gamitin ang Dark Mode sa gabi upang hindi mapagod ang iyong mga mata habang nag-e-encode ng data.",
                "I-verify ang iyong personal na impormasyon sa Settings upang matiyak na tama ang lahat ng record mo sa DOLE.",
                "Huwag kalimutang mag-sign out kapag gumagamit ng shared computer sa opisina para sa seguridad ng iyong account.",
                "Ugaliing i-back up ang iyong mga reports linggo-linggo upang maiwasang mawala ang iyong mahalagahang trabaho.",
                "Makipag-ugnayan agad sa iyong DOLE coordinator kung may problema sa iyong duty hours o itinalagang opisina."
            ];
            let currentTipIndex = 0;
            
            window.cycleGipTip = function () {
                const tipEl = document.getElementById('gip-tip-content');
                if (!tipEl) return;
                
                tipEl.classList.add('opacity-0', 'translate-y-1');
                
                setTimeout(() => {
                    currentTipIndex = (currentTipIndex + 1) % gipTips.length;
                    tipEl.textContent = gipTips[currentTipIndex];
                    tipEl.classList.remove('opacity-0', 'translate-y-1');
                }, 200);
            };

            // ── Contract Progress Dynamic Calculation ──────────────────────
            function calculateContractQuest() {
                const startDate = new Date('2026-04-16');
                const endDate = new Date('2026-11-15');
                const today = new Date();

                // Clamp today between start and end date
                const clampedToday = new Date(Math.max(startDate, Math.min(endDate, today)));

                const totalDuration = endDate - startDate;
                const elapsed = clampedToday - startDate;
                let pct = (elapsed / totalDuration) * 100;
                pct = parseFloat(pct.toFixed(1)); // one decimal place, e.g. 16.4

                // Update percentage label
                const pctEl = document.getElementById('gip-contract-percentage');
                if (pctEl) {
                    pctEl.textContent = `${pct}%`;
                }

                // Update remaining days
                const remainingEl = document.getElementById('gip-contract-remaining-days');
                if (remainingEl) {
                    if (today >= endDate) {
                        remainingEl.textContent = 'Contract Ended';
                    } else if (today < startDate) {
                        remainingEl.textContent = 'Starts Soon';
                    } else {
                        const msPerDay = 1000 * 60 * 60 * 24;
                        const daysLeft = Math.ceil((endDate - today) / msPerDay);
                        remainingEl.textContent = `${daysLeft} days left`;
                    }
                }
            }
            calculateContractQuest();

            // ── Stats loading ────────────────────────────────────────────
            function set(id, val) {
                const el = document.getElementById(id);
                if (el) el.textContent = val;
            }

            function renderAll(data) {
                if (!data || !data.length) return;

                const total = data.length;
                const ongoing = data.filter(b => (b.status || '').toUpperCase() === 'ONGOING').length;
                const completed = data.filter(b => (b.status || '').toUpperCase() === 'COMPLETED').length;

                set('gip-stat-total', total.toLocaleString());
                set('gip-stat-ongoing', ongoing.toLocaleString());
                set('gip-stat-completed', completed.toLocaleString());
            }

            // ── AR/DTR Period Cards ──────────────────────────────────────
            function renderPeriodCards() {
                const el = document.getElementById('gip-period-cards');
                if (!el) return;

                const now = new Date();
                const day = now.getDate();
                const month = now.toLocaleString('en-PH', { month: 'short' }).toUpperCase();
                const year = now.getFullYear();

                // Determine current period and the other period
                const isFirstHalf = day <= 15;
                const period1Label = `${month} 1–15, ${year}`;
                const lastDay = new Date(year, now.getMonth() + 1, 0).getDate();
                const period2Label = `${month} 16–${lastDay}, ${year}`;
                const currentPeriod = isFirstHalf ? period1Label : period2Label;
                const prevPeriod    = isFirstHalf ? period2Label.replace(year, year) : period1Label;

                const cardHtml = (label, isCurrent, isPaid) => `
                    <button disabled class="w-full flex items-center justify-between px-4 py-3 rounded-xl border ${
                        isCurrent
                            ? 'border-royal-blue/30 dark:border-royal-blue/40 bg-blue-50/60 dark:bg-royal-blue/10'
                            : 'border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/30'
                    } cursor-not-allowed text-left group">
                        <div class="min-w-0">
                            <div class="flex items-center gap-1.5 mb-0.5">
                                ${isCurrent ? '<span class="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse shrink-0"></span>' : ''}
                                <span class="text-[0.5625rem] font-black uppercase tracking-widest ${isCurrent ? 'text-royal-blue dark:text-blue-400' : 'text-gray-400 dark:text-gray-500'}">${isCurrent ? 'Current Period' : 'Previous Period'}</span>
                            </div>
                            <p class="text-[0.6875rem] font-black text-gray-700 dark:text-gray-300">${label}</p>
                            <p class="text-[0.5625rem] text-gray-400 dark:text-gray-500 mt-0.5">DTR &amp; AR due this period</p>
                        </div>
                        <div class="flex items-center gap-1.5 shrink-0">
                            <span class="text-[0.5625rem] font-black uppercase tracking-wider px-2 py-1 rounded-md border ${
                                isPaid
                                    ? 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-500/20'
                                    : 'bg-red-50 dark:bg-red-500/10 text-red-500 dark:text-red-400 border-red-200 dark:border-red-500/20'
                            }">
                                ${isPaid ? 'PAID' : 'NOT PAID'}
                            </span>
                            <span class="text-[0.5625rem] font-black uppercase tracking-wider px-2 py-1 rounded-md border ${
                                isPaid
                                    ? 'bg-blue-50 dark:bg-royal-blue/10 text-royal-blue dark:text-blue-400 border-blue-200 dark:border-blue-800'
                                    : 'bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-500 border-gray-200 dark:border-gray-600'
                            }">
                                ${isPaid ? 'Submitted' : 'Not Submitted'}
                            </span>
                        </div>
                    </button>
                `;

                el.innerHTML = cardHtml(currentPeriod, true, false) + cardHtml(prevPeriod, false, true);
            }
            renderPeriodCards();

            // Try IndexedDB first, fallback to API
            async function loadStats() {
                try {
                    const dbReq = indexedDB.open('dole-gip-db');
                    dbReq.onsuccess = function (e) {
                        const db = e.target.result;
                        if (!db.objectStoreNames.contains('beneficiaries')) { fetchAPI(); return; }
                        const tx = db.transaction('beneficiaries', 'readonly');
                        const req = tx.objectStore('beneficiaries').getAll();
                        req.onsuccess = () => req.result?.length ? renderAll(req.result) : fetchAPI();
                        req.onerror = fetchAPI;
                    };
                    dbReq.onerror = fetchAPI;
                } catch (e) {
                    fetchAPI();
                }
            }

            async function fetchAPI() {
                try {
                    const base = window.location.pathname.replace(/\/frontend\/.*/, '');
                    const res = await fetch(base + '/api/beneficiaries.php?all=true');
                    const json = await res.json();
                    if (json.success && json.beneficiaries) renderAll(json.beneficiaries);
                } catch (_) { /* silent */ }
            }

            loadStats();

        })();
    </script>

</body>

</html>