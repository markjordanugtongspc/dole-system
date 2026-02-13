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
            $is_dashboard = (strpos($current_uri, '/frontend/dashboard/') !== false);
            $is_ldn = (strpos($current_uri, '/frontend/LDN/') !== false);
            $is_export = (strpos($current_uri, '/frontend/export/') !== false);
            $is_settings = (strpos($current_uri, '/frontend/user/settings/') !== false);
            ?>
            <li>
                <a href="<?php echo $baseUrl; ?>/frontend/dashboard/"
                    class="flex items-center px-4 py-3 rounded-lg group cursor-pointer transition-all duration-200 border-b-2 <?php echo $is_dashboard ? 'text-white font-black bg-white/20 border-white' : 'text-white/80 hover:bg-white/10 hover:text-white border-transparent hover:scale-105'; ?>">
                    <svg class="transition-transform duration-200 <?php echo $is_dashboard ? 'w-5 h-5 text-white scale-105' : 'w-5 h-5 text-white/80 group-hover:text-white group-hover:scale-110'; ?>"
                        viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M18 18V2H2v16h16zM16 5H4V4h12v1zM7 7v3h3c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3zm1 2V7c1.1 0 2 .9 2 2H8zm8-1h-4V7h4v1zm0 3h-4V9h4v2zm0 2h-4v-1h4v1zm0 3H4v-1h12v1z" />
                    </svg>
                    <span
                        class="ms-3 whitespace-nowrap transition-all duration-200 <?php echo $is_dashboard ? 'translate-x-1' : ''; ?>">Analytics
                        Dashboard</span>
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

            <!-- Integrated Monitoring & Data Items -->
            <li>
                <a href="#"
                    class="flex items-center px-4 py-3 text-white/80 rounded-lg hover:bg-white/10 hover:text-white group transition-all duration-200 hover:scale-105 cursor-pointer border-b-2 border-transparent">
                    <svg class="w-5 h-5 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012-2" />
                    </svg>
                    <span class="ms-3 whitespace-nowrap">LDN - SPES</span>
                </a>
            </li>

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

            <li>
                <a href="#"
                    class="flex items-center px-4 py-3 text-white/80 rounded-lg hover:bg-white/10 hover:text-white group transition-all duration-200 hover:scale-105 cursor-pointer border-b-2 border-transparent">
                    <svg class="w-5 h-5 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                    <span class="ms-3 whitespace-nowrap">Filter Settings</span>
                </a>
            </li>

            <?php
            $is_aboutme = (strpos($current_uri, '/frontend/aboutme/') !== false || strpos($current_uri, '/frontend/aboutme/index.php') !== false || substr($current_uri, -17) === '/frontend/aboutme');
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

            <!-- About Developer Section -->
            <li class="pt-4 mt-4 border-t border-white/10">
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
                            AD
                        </div>
                        <div class="ms-2.5 text-left">
                            <p class="text-[11px] font-bold text-white sidebar-user-name leading-tight">Admin User</p>
                            <p class="text-[9px] text-white/80 truncate">admin@dole.gov.ph</p>
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
                        <button
                            class="flex items-center w-full px-4 py-2.5 hover:bg-blue-50 hover:text-royal-blue transition-colors text-left">
                            <svg class="w-4 h-4 me-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                            </svg>
                            <span class="font-semibold">Theme Toggle</span>
                        </button>
                    </li>
                </ul>
            </div>

            <!-- Profile Button -->
            <button id="profileDropdownButton" data-dropdown-toggle="profileDropdown" data-dropdown-placement="top"
                class="flex items-center w-full p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-200 hover:scale-[1.02] cursor-pointer border border-white/10">
                <div
                    class="w-10 h-10 rounded-full bg-transparent border-2 border-white/30 flex items-center justify-center text-white font-black text-sm shadow-inner group-hover:scale-110 transition-transform sidebar-user-avatar overflow-hidden">
                    AD
                </div>
                <div class="ms-3 text-left flex-1">
                    <p class="text-xs font-bold text-white sidebar-user-name">Admin User</p>
                    <p class="text-[10px] text-white/60 truncate">admin@dole.gov.ph</p>
                </div>
                <svg class="w-4 h-4 text-white transition-transform duration-200" fill="none" stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
                </svg>
            </button>
        </div>
    </div>
</aside>