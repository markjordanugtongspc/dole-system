<aside id="top-bar-sidebar"
    class="fixed top-0 left-0 z-40 w-64 h-full transition-transform -translate-x-full sm:translate-x-0 group/sidebar"
    aria-label="Sidebar">
    <div
        class="h-full px-4 py-4 overflow-y-auto bg-royal-blue border-e border-royal-blue/20 pt-20 flex flex-col justify-between">
        <ul class="space-y-3 font-medium">
            <?php
                // Calculate base URL (same logic as vite.php for consistency)
                $projectRoot = str_replace('\\', '/', dirname(dirname(dirname(__DIR__))));
                $docRoot = str_replace('\\', '/', $_SERVER['DOCUMENT_ROOT']);
                $baseUrl = str_ireplace($docRoot, '', $projectRoot);
                $baseUrl = rtrim($baseUrl, '/');
                
                $current_uri = $_SERVER['REQUEST_URI'];
                $is_dashboard = (stripos($current_uri, '/frontend/dashboard') !== false);
                $is_export = (stripos($current_uri, '/frontend/export') !== false);
                $is_settings = (stripos($current_uri, '/frontend/user/settings') !== false);
                $is_ldn = (stripos($current_uri, '/frontend/LDN') !== false);
                $is_calculate = (stripos($current_uri, '/frontend/calculate') !== false);
                ?>
            <li>
                <a href="<?php echo $baseUrl; ?>/frontend/dashboard/" title="Analytics Dashboard"
                    class="flex items-center px-4 py-3 rounded-lg group cursor-pointer transition-all duration-200 border-b-2 <?php echo $is_dashboard ? 'text-white font-black bg-white/20 border-white' : 'text-white/80 hover:bg-white/10 hover:text-white border-transparent hover:scale-105'; ?>">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        stroke-width="<?php echo $is_dashboard ? '2.5' : '1.5'; ?>" stroke="currentColor"
                        class="w-5 h-5 transition-all duration-200 <?php echo $is_dashboard ? 'text-white scale-110' : 'text-white/80 group-hover:text-white group-hover:scale-110'; ?>">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
                    </svg>
                    <span
                        class="ms-3 whitespace-nowrap transition-all duration-200 <?php echo $is_dashboard ? 'translate-x-1' : ''; ?>">Dashboard</span>
                </a>
            </li>
            <!-- LDN - GIP Link (Simplified) -->
            <li>
                <a href="<?php echo $baseUrl; ?>/frontend/LDN/"
                    class="flex items-center px-4 py-3 rounded-lg group cursor-pointer transition-all duration-200 border-b-2 <?php echo $is_ldn ? 'text-white font-black bg-white/20 border-white' : 'text-white/80 hover:bg-white/10 hover:text-white border-transparent hover:scale-105'; ?>">
                    <img src="<?php echo $baseUrl; ?>/frontend/images/search-map.png" alt="Search Map Icon"
                        class="w-5 h-5 filter invert brightness-100 transition-transform duration-200 <?php echo $is_ldn ? 'brightness-200 scale-105' : 'group-hover:invert group-hover:brightness-200 group-hover:scale-105'; ?>" />
                    <span
                        class="ms-3 whitespace-nowrap transition-all duration-200 <?php echo $is_ldn ? 'translate-x-1' : ''; ?>">LDN
                        - GIP</span>
                </a>
            </li>

            <!-- Integrated Monitoring & Data Items
            <li>
                <a href="#"
                    class="flex items-center px-4 py-3 text-white/80 rounded-lg hover:bg-white/10 hover:text-white group transition-all duration-200 hover:scale-105 cursor-pointer border-b-2 border-transparent">
                    <svg class="w-5 h-5 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012-2" />
                    </svg>
                    <span class="ms-3 whitespace-nowrap">LDN - SPES</span>
                </a>
            </li> -->

            <li class="pt-2">
                <a href="<?php echo $baseUrl; ?>/frontend/export/"
                    class="flex items-center px-4 py-3 rounded-lg group cursor-pointer transition-all duration-200 border-b-2 <?php echo $is_export ? 'text-white font-black bg-white/20 border-white' : 'text-white/80 hover:bg-white/10 hover:text-white border-transparent hover:scale-105'; ?>">
                    <svg class="w-5 h-5 <?php echo $is_export ? 'text-white scale-105' : 'text-white/80 group-hover:text-white'; ?>"
                        fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span class="ms-3 whitespace-nowrap <?php echo $is_export ? 'translate-x-1' : ''; ?>">Print / Export
                        Data</span>
                </a>
            </li>

            <!-- <li>
                <a href="#"
                    class="flex items-center px-4 py-3 text-white/80 rounded-lg hover:bg-white/10 hover:text-white group transition-all duration-200 hover:scale-105 cursor-pointer border-b-2 border-transparent">
                    <svg class="w-5 h-5 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                    <span class="ms-3 whitespace-nowrap">Filter Settings</span>
                </a>
            </li> -->

            <?php
$is_aboutme = (stripos($current_uri, '/frontend/aboutme') !== false);
?>

            <!-- <li>
                <a href="#"
                    class="flex items-center px-4 py-3 text-white/80 rounded-lg hover:bg-white/10 hover:text-white group transition-all duration-200 hover:scale-105 cursor-pointer border-b-2 border-transparent">
                    <svg class="w-5 h-5 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span class="ms-3 whitespace-nowrap">User Management</span>
                </a>
            </li> -->

            <!-- Calculate Salary Section -->
            <li class="pt-4 mt-4 border-t border-white/10">
                <a href="<?php echo $baseUrl; ?>/frontend/calculate/" aria-current="<?php echo $is_calculate ? 'page' : 'false'; ?>"
                    class="flex items-center px-4 py-3 rounded-lg group cursor-pointer transition-all duration-200 border-b-2 <?php echo $is_calculate ? 'text-white font-black bg-white/20 border-white' : 'text-white/80 hover:bg-white/10 hover:text-white border-transparent hover:scale-105'; ?>">
                    <span class="relative w-6 h-6 shrink-0">
                        <svg class="absolute inset-0 w-6 h-6 <?php echo $is_calculate ? 'hidden' : 'text-white/80 group-hover:hidden group-active:hidden'; ?>" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.5 21h13M12 21V7m0 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm2-1.8c3.073.661 2.467 2.8 5 2.8M5 8c3.359 0 2.192-2.115 5.012-2.793M7 9.556V7.75m0 1.806-1.95 4.393a.773.773 0 0 0 .37.962.785.785 0 0 0 .362.089h2.436a.785.785 0 0 0 .643-.335.776.776 0 0 0 .09-.716L7 9.556Zm10 0V7.313m0 2.243-1.95 4.393a.773.773 0 0 0 .37.962.786.786 0 0 0 .362.089h2.436a.785.785 0 0 0 .643-.335.775.775 0 0 0 .09-.716L17 9.556Z" />
                        </svg>
                        <svg class="absolute inset-0 w-6 h-6 text-white <?php echo $is_calculate ? 'block scale-105' : 'hidden group-hover:block group-active:block'; ?>" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd" d="M12 4a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-2.952.462c-.483.19-.868.432-1.19.71-.363.315-.638.677-.831.93l-.106.14c-.21.268-.36.418-.574.527C6.125 6.883 5.74 7 5 7a1 1 0 0 0 0 2c.364 0 .696-.022 1-.067v.41l-1.864 4.2a1.774 1.774 0 0 0 .821 2.255c.255.133.538.202.825.202h2.436a1.786 1.786 0 0 0 1.768-1.558 1.774 1.774 0 0 0-.122-.899L8 9.343V8.028c.2-.188.36-.38.495-.553.062-.079.118-.15.168-.217.185-.24.311-.406.503-.571a1.89 1.89 0 0 1 .24-.177A3.01 3.01 0 0 0 11 7.829V20H5.5a1 1 0 1 0 0 2h13a1 1 0 1 0 0-2H13V7.83a3.01 3.01 0 0 0 1.63-1.387c.206.091.373.19.514.29.31.219.532.465.811.78l.025.027.02.023v1.78l-1.864 4.2a1.774 1.774 0 0 0 .821 2.255c.255.133.538.202.825.202h2.436a1.785 1.785 0 0 0 1.768-1.558 1.773 1.773 0 0 0-.122-.899L18 9.343v-.452c.302.072.633.109 1 .109a1 1 0 1 0 0-2c-.48 0-.731-.098-.899-.2-.2-.12-.363-.293-.651-.617l-.024-.026c-.267-.3-.622-.7-1.127-1.057a5.152 5.152 0 0 0-1.355-.678 3.001 3.001 0 0 0-5.896.04Z" clip-rule="evenodd" />
                        </svg>
                    </span>
                    <span class="ms-3 whitespace-nowrap transition-all duration-200 <?php echo $is_calculate ? 'translate-x-1' : ''; ?>">Calculate Salary</span>
                </a>
            </li>
            <!-- About Developer Section -->
            <li>
                <a href="<?php echo $baseUrl; ?>/frontend/aboutme/"
                    class="flex items-center px-4 py-3 rounded-lg group cursor-pointer transition-all duration-200 border-b-2 <?php echo $is_aboutme ? 'text-white font-black bg-white/20 border-white' : 'text-white/80 hover:bg-white/10 hover:text-white border-transparent hover:scale-105'; ?>">
                    <svg class="w-5 h-5 <?php echo $is_aboutme ? 'text-white scale-105' : 'text-white/80 group-hover:text-white'; ?>"
                        fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span class="ms-3 whitespace-nowrap <?php echo $is_aboutme ? 'translate-x-1' : ''; ?>">About
                        Developer</span>
                </a>
            </li>
        </ul>

        <!-- Sidebar Footer with Profile Dropdown -->
        <div class="mt-auto">
            <!-- Dropdown menu (appears above button) -->
            <div id="profileDropdown"
                class="z-10 hidden bg-white rounded-xl shadow-2xl w-56 mb-3 border border-blue-100 overflow-hidden">
                <!-- User Info Header -->
                <div class="bg-gradient-to-r from-royal-blue to-blue-700 p-3">
                    <div class="flex items-center">
                        <div
                            class="w-10 h-10 rounded-full bg-transparent border-2 border-white/30 flex items-center justify-center text-white font-black text-xs shadow-lg sidebar-user-avatar overflow-hidden">
                            <span class="sidebar-avatar-initials">...</span>
                            <img src="" class="sidebar-avatar-img hidden w-full h-full object-cover" alt="User Profile">
                        </div>
                        <div class="ms-2.5 text-left">
                            <p class="text-[0.6875rem] font-bold text-white sidebar-user-name leading-tight">...</p>
                            <p class="text-[0.5625rem] text-white/80 truncate sidebar-user-email">...</p>
                        </div>
                    </div>
                </div>

                <!-- Menu Items -->
                <ul class="py-2 text-sm text-gray-700">
                    <li>
                        <a href="javascript:void(0)" onclick="showProfileModal()"
                            class="flex items-center px-4 py-2.5 hover:bg-blue-50 hover:text-royal-blue transition-colors">
                            <svg class="w-4 h-4 me-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            <span class="font-semibold">Profile</span>
                        </a>
                    </li>
                    <li>
                        <a href="<?php echo $baseUrl; ?>/frontend/user/settings/"
                            class="flex items-center px-4 py-2.5 transition-colors <?php echo $is_settings ? 'text-gray-900 bg-gray-50/50' : 'hover:bg-blue-50 hover:text-royal-blue text-gray-700'; ?>">
                            <div
                                class="flex items-center w-full <?php echo $is_settings ? 'font-black border-b-2 border-gray-300 pb-1 me-4' : ''; ?>">
                                <svg class="w-4 h-4 me-3 <?php echo $is_settings ? 'text-gray-600' : ''; ?>" fill="none"
                                    stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span class="<?php echo $is_settings ? '' : 'font-semibold'; ?>">Settings</span>
                            </div>
                        </a>
                    </li>
                    <li class="border-t border-gray-100 mt-1 pt-1">
                        <button id="theme-toggle-btn" data-theme-toggle
                            class="flex items-center w-full px-4 py-2.5 hover:bg-blue-50 hover:text-royal-blue transition-colors text-left cursor-pointer">
                            <!-- Moon icon (shown in light mode → click to go dark) -->
                            <svg id="theme-toggle-dark-icon" class="w-4 h-4 me-3 hidden" fill="currentColor"
                                viewBox="0 0 20 20">
                                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                            </svg>
                            <!-- Sun icon (shown in dark mode → click to go light) -->
                            <svg id="theme-toggle-light-icon" class="w-4 h-4 me-3 hidden" fill="currentColor"
                                viewBox="0 0 20 20">
                                <path
                                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                                    fill-rule="evenodd" clip-rule="evenodd"></path>
                            </svg>
                            <span class="font-semibold" id="sidebar-theme-label">Dark Mode</span>
                        </button>
                    </li>
                </ul>
            </div>

            <!-- Profile Button -->
            <button id="profileDropdownButton" data-dropdown-toggle="profileDropdown" data-dropdown-placement="top"
                class="flex items-center w-full p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-200 hover:scale-[1.02] cursor-pointer border border-white/10">
                <div
                    class="w-10 h-10 rounded-full bg-transparent border-2 border-white/30 flex items-center justify-center text-white font-black text-sm shadow-inner group-hover:scale-110 transition-transform sidebar-user-avatar overflow-hidden">
                    <span class="sidebar-avatar-initials">...</span>
                    <img src="" class="sidebar-avatar-img hidden w-full h-full object-cover" alt="User Profile">
                </div>
                <div class="ms-3 text-left flex-1">
                    <p class="text-xs font-bold text-white sidebar-user-name">...</p>
                    <p class="text-[0.625rem] text-white/60 truncate sidebar-user-email">...</p>
                </div>
                <svg class="w-4 h-4 text-white transition-transform duration-200" fill="none" stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
                </svg>
            </button>
        </div>
    </div>
</aside>