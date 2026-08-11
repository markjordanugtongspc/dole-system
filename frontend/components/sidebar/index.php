<aside id="top-bar-sidebar"
    class="fixed top-0 left-0 z-40 w-64 h-full transition-transform -translate-x-full sm:translate-x-0 group/sidebar"
    aria-label="Sidebar">
    <div
        class="h-full px-4 py-4 overflow-y-auto bg-royal-blue border-e border-royal-blue/20 pt-20 flex flex-col justify-between">
        <ul class="space-y-3 text-base font-medium">
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
                $is_gip = (stripos($current_uri, '/frontend/GIP') !== false || stripos($current_uri, '/frontend/portal/dashboard') !== false);
                $is_calculate = (stripos($current_uri, '/frontend/calculate') !== false);
                ?>
            <li>
                <a href="<?php echo $baseUrl; ?>/frontend/dashboard/" title="Analytics Dashboard"
                    class="flex items-center px-4 py-3 rounded-lg group cursor-pointer transition-all duration-200 border-b-2 <?php echo $is_dashboard ? 'text-white font-black bg-white/20 border-white' : 'text-white/80 hover:bg-white/10 hover:text-white border-transparent hover:scale-105'; ?>">
                    <span class="relative h-6 w-6 shrink-0">
                        <svg class="absolute inset-0 h-6 w-6 transition-all duration-200 <?php echo $is_dashboard ? 'hidden' : 'text-white/80 group-hover:hidden group-active:hidden'; ?>" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6.025A7.5 7.5 0 1 0 17.975 14H10V6.025Z" />
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.5 3c-.169 0-.334.014-.5.025V11h7.975c.011-.166.025-.331.025-.5A7.5 7.5 0 0 0 13.5 3Z" />
                        </svg>
                        <svg class="absolute inset-0 h-6 w-6 text-white transition-all duration-200 <?php echo $is_dashboard ? 'block scale-105' : 'hidden group-hover:block group-active:block'; ?>" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M13.5 2c-.178 0-.356.013-.492.022l-.074.005a1 1 0 0 0-.934.998V11a1 1 0 0 0 1 1h7.975a1 1 0 0 0 .998-.934l.005-.074A7.04 7.04 0 0 0 22 10.5 8.5 8.5 0 0 0 13.5 2Z" />
                            <path d="M11 6.025a1 1 0 0 0-1.065-.998 8.5 8.5 0 1 0 9.038 9.039A1 1 0 0 0 17.975 13H11V6.025Z" />
                        </svg>
                    </span>
                    <span
                        class="ms-3 whitespace-nowrap transition-all duration-200 <?php echo $is_dashboard ? 'translate-x-1' : ''; ?>">DASHBOARD</span>
                </a>
            </li>
            <!-- Manage GIP Link -->
            <li>
                <a href="<?php echo $baseUrl; ?>/frontend/GIP/"
                    class="flex items-center px-4 py-3 rounded-lg group cursor-pointer transition-all duration-200 border-b-2 <?php echo $is_gip ? 'text-white font-black bg-white/20 border-white' : 'text-white/80 hover:bg-white/10 hover:text-white border-transparent hover:scale-105'; ?>">
                    <span class="relative h-6 w-6 shrink-0">
                        <svg class="absolute inset-0 h-6 w-6 transition-all duration-200 <?php echo $is_gip ? 'hidden' : 'text-white/90 dark:text-white group-hover:hidden group-active:hidden'; ?>" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor">
                            <path d="m256 252.5a56.5 56.5 0 1 1 -56.5 56.5 56.5 56.5 0 0 1 56.5-56.5zm-102.228-103.009a5.461 5.461 0 0 0 3.645 5.32l32.243 12.243 3.812-46.45-39.7-14.039zm47.684 22.042 52.506 19.938a5.491 5.491 0 0 0 4.076 0l96.545-36.66a5.46 5.46 0 0 0 3.645-5.32v-42.926l-96.3 34.053a17.184 17.184 0 0 1 -11.862 0l-44.777-15.834-3.836 46.749zm156.772-5.159c0 4.2.811 8.4-3.645 10.1l-96.545 36.66a5.481 5.481 0 0 1 -4.076 0l-54.229-20.592.693-8.448 49.274 18.706a17.168 17.168 0 0 0 12.608 0l95.924-36.424zm-169.598 13.236-.693 8.449-30.52-11.589c-4.456-1.692-3.645-5.9-3.645-10.1zm-6.4 56.713v30.177h15.65v-30.18a7.825 7.825 0 0 0 -15.65 0zm-12.13 36.246a6.067 6.067 0 0 0 6.067 6.067h27.783a6.067 6.067 0 0 0 6.067-6.067v-36.246a19.968 19.968 0 0 0 -12.362-18.462l1.047-12.767 50.998 19.364a17.173 17.173 0 0 0 12.608 0l96.545-36.66a17.671 17.671 0 0 0 11.512-16.648v-68.876l46.753-16.534a9.966 9.966 0 0 0 5.02-14.88l.011-.007a9.842 9.842 0 0 0 -5.031-3.919l-155.187-54.878a17.184 17.184 0 0 0 -11.862 0l-155.187 54.878a9.966 9.966 0 0 0 -5.02 14.88l-.011.007a9.846 9.846 0 0 0 5.031 3.919l46.757 16.534v68.876a17.67 17.67 0 0 0 11.512 16.65l33.755 12.817-1.333 16.255a19.975 19.975 0 0 0 -15.473 19.451zm82.392-201.161-53.546 38.285-94.326-33.356 149.48-52.859a5.426 5.426 0 0 1 3.8 0l149.48 52.859-149.48 52.863a5.426 5.426 0 0 1 -3.8 0l-41.233-14.581 46.642-33.348a6.05 6.05 0 1 0 -7.015-9.858zm-72.182 313.043a46.142 46.142 0 0 0 -20.214-4.563h-44.383a47.4 47.4 0 0 0 -47.24 47.241v5.6a102.119 102.119 0 0 0 84.377 26.171 6.043 6.043 0 0 1 -1.646-4.155v-10.693a75.744 75.744 0 0 1 29.106-59.6zm-10.889 73.12q-3.112-2.6-6.084-5.39v-8.129a63.848 63.848 0 0 1 63.644-63.644h58.039a63.322 63.322 0 0 1 12.454 1.232v-.023a63.936 63.936 0 0 1 51.185 62.435v8.122l-6.033 5.337.01.012-9.765 7.416a135.4 135.4 0 0 1 -158.171-3.185l-5.277-4.183zm-5.093 11.44a114.263 114.263 0 0 1 -105.817-29.052 6.055 6.055 0 0 1 -2.172-4.651v-8.179a59.533 59.533 0 0 1 59.374-59.374h44.387a59.266 59.266 0 0 1 31.684 9.245 75.133 75.133 0 0 1 35.2-8.721h58.036a75.326 75.326 0 0 1 14.824 1.469v.023a75.178 75.178 0 0 1 20.356 7.229 59.029 59.029 0 0 1 31.709-9.249h44.383a59.608 59.608 0 0 1 59.374 59.374v8.178h-.018c0 3.213-2.379 4.939-4.755 7.1l-3.688 3.212-.01-.012c-27.125 23.031-64.859 31.61-99.523 23.405a147.341 147.341 0 0 1 -183.339 0zm-26.423-196.847a44.634 44.634 0 1 1 -44.635 44.636 44.636 44.636 0 0 1 44.635-44.634zm22.982 21.652a32.5 32.5 0 1 0 0 45.964 32.5 32.5 0 0 0 0-45.964zm198.241 165.084a102.139 102.139 0 0 0 80.309-22.56l-.01-.011 4.1-3.606v-5.594a47.341 47.341 0 0 0 -47.24-47.241h-44.387a46.7 46.7 0 0 0 -20.235 4.571 75.81 75.81 0 0 1 29.135 59.593v10.693h-.018a6.034 6.034 0 0 1 -1.651 4.155zm14.972-186.736a44.634 44.634 0 1 1 -44.639 44.636 44.635 44.635 0 0 1 44.639-44.636zm22.982 21.652a32.5 32.5 0 1 0 0 45.964 32.5 32.5 0 0 0 0-45.964zm-109.7-16.189a44.368 44.368 0 1 0 0 62.747 44.371 44.371 0 0 0 -.009-62.747z" fill-rule="evenodd" />
                        </svg>
                        <svg class="absolute inset-0 h-6 w-6 text-white transition-all duration-200 <?php echo $is_gip ? 'block scale-105' : 'hidden group-hover:block group-active:block'; ?>" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512" fill="currentColor">
                            <path d="m256 234.342a61.1 61.1 0 1 1 -61.1 61.1 61.1 61.1 0 0 1 61.1-61.1zm-2.06-105.954a8.635 8.635 0 0 0 6.021-.1v.007q65.626-24.566 131.351-48.892a1.909 1.909 0 0 1 2.571 1.606l2.7 27.45a1.888 1.888 0 0 1 -1.15 1.947 13.624 13.624 0 0 0 -8.251 12.735l.463 28.281a2.774 2.774 0 0 0 2.816 2.732l21.678-.355a2.774 2.774 0 0 0 2.732-2.815l-.463-28.281a13.632 13.632 0 0 0 -10.8-13.1 1.89 1.89 0 0 1 -1.511-1.685l-2.947-29.906a1.893 1.893 0 0 1 1.238-1.981q10.812-4.013 21.605-8.031a.809.809 0 0 0 -.025-1.519l-163.906-54.96a8.638 8.638 0 0 0 -6.022.1l-162.019 60.291a.8.8 0 0 0 .012 1.516zm111.277 30.928c-.258.119-.521.232-.787.338l-100.754 40.156a15.192 15.192 0 0 1 -11.1.184l-102.013-36.837c-.894-.323-1.619-.8-2.61-.133a1.866 1.866 0 0 0 -.841 1.617l.109 6.69a8.818 8.818 0 0 0 5.955 8.336l102.014 36.838a8.62 8.62 0 0 0 6.419-.1l100.753-40.157a8.816 8.816 0 0 0 5.677-8.537l-.109-6.684a1.91 1.91 0 0 0 -2.713-1.708zm-218.368-10.716-.764-46.7a1.908 1.908 0 0 1 2.521-1.846l103.242 34.619a15.117 15.117 0 0 0 10.432-.174v-.007l102.042-37.983a1.909 1.909 0 0 1 2.581 1.762l.764 46.7a8.818 8.818 0 0 1 -5.677 8.534l-100.754 40.152a8.612 8.612 0 0 1 -6.418.1l-102.018-36.835a8.816 8.816 0 0 1 -5.955-8.326zm25.978 230.112a54.956 54.956 0 0 0 -25-5.938h-50.068a56.094 56.094 0 0 0 -55.918 55.918v6.622a1.848 1.848 0 0 0 .607 1.4 117.786 117.786 0 0 0 99.04 30.193c1.148-.184 2.78-1.812.4-3.869a4.2 4.2 0 0 1 -1.464-3.191v-12.07a82.83 82.83 0 0 1 32.7-65.839 1.915 1.915 0 0 0 -.3-3.23zm-16 86.464-7.343-6.5-.634-1.421v-9.47a74.651 74.651 0 0 1 74.422-74.421h65.467c40.556 0 74.42 33.07 74.42 74.421v9.43a1.851 1.851 0 0 1 -.64 1.428l-7.111 6.339.007.008-11.27 8.559a155.313 155.313 0 0 1 -181.389-3.676l-5.929-4.693zm-34.037-208.654a47.715 47.715 0 1 1 -47.714 47.715 47.716 47.716 0 0 1 47.714-47.715zm247.72 210.378a117.819 117.819 0 0 0 94.09-25.811l-.007-.009 4.928-4.376a1.851 1.851 0 0 0 .643-1.431v-6.585a56.058 56.058 0 0 0 -55.918-55.918h-50.068a55.339 55.339 0 0 0 -25.025 5.942 1.915 1.915 0 0 0 -.3 3.229 82.875 82.875 0 0 1 32.722 65.836v12.062h-.012c0 3.43-3.306 3.425-2.577 5.745a1.873 1.873 0 0 0 1.523 1.317zm18.7-210.379a47.715 47.715 0 1 1 -47.71 47.716 47.716 47.716 0 0 1 47.71-47.715z" fill-rule="evenodd" />
                        </svg>
                    </span>
                    <span
                        class="ms-3 whitespace-nowrap transition-all duration-200 <?php echo $is_gip ? 'translate-x-1' : ''; ?>">MANAGE GIP</span>
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
                    <span class="relative h-6 w-6 shrink-0">
                        <!-- Static 23x23 Icon -->
                        <svg class="absolute inset-0 h-[23px] w-[23px] <?php echo $is_export ? 'hidden' : 'text-white/80 group-hover:hidden group-active:hidden'; ?>" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 512 512" fill="currentColor">
                            <path d="m75 201h170c8.284 0 15-6.716 15-15s-6.716-15-15-15h-170c-8.284 0-15 6.716-15 15s6.716 15 15 15zm0 60h130c8.284 0 15-6.716 15-15s-6.716-15-15-15h-130c-8.284 0-15 6.716-15 15s6.716 15 15 15zm0 60h130c8.284 0 15-6.716 15-15s-6.716-15-15-15h-130c-8.284 0-15 6.716-15 15s6.716 15 15 15zm170 30h-170c-8.284 0-15 6.716-15 15s6.716 15 15 15h170c8.284 0 15-6.716 15-15s-6.716-15-15-15zm262.606-85.606-60-60c-5.857-5.858-15.355-5.858-21.213 0s-5.858 15.355 0 21.213l34.394 34.393h-70.787v-146c0-3.978-1.58-7.793-4.394-10.606l-99.996-100c-2.812-2.813-6.628-4.394-10.606-4.394h-220.004c-30.327 0-55 24.673-55 55v402c0 30.327 24.673 55 55 55h280c30.327 0 55-24.673 55-55v-166h70.787l-34.394 34.394c-5.858 5.858-5.858 15.355 0 21.213 2.929 2.929 6.768 4.393 10.607 4.393s7.678-1.464 10.606-4.394l60-60c5.859-5.857 5.859-15.354 0-21.212zm-168.819-165.394h-48.787v-48.786zm21.213 357c0 13.785-11.215 25-25 25h-280c-13.785 0-25-11.215-25-25v-402c0-13.785 11.215-25 25-25h205v85c0 8.284 6.716 15 15 15h85v131h-103c-8.284 0-15 6.716-15 15s6.716 15 15 15h103z" />
                        </svg>
                        <!-- Active/Hover 24x24 Fill Icon -->
                        <svg class="absolute inset-0 h-6 w-6 text-white <?php echo $is_export ? 'block scale-105' : 'hidden group-hover:block group-active:block'; ?>" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512" fill="currentColor">
                            <path d="M384 128V0H256v128h128zM140.7 202.7c-9.4 0-17 7.6-17 17s7.6 17 17 17h140.8c9.4 0 17-7.6 17-17s-7.6-17-17-17H140.7zm0 68.3c-9.4 0-17 7.6-17 17s7.6 17 17 17h106.7c9.4 0 17-7.6 17-17s-7.6-17-17-17H140.7zm0 68.3c-9.4 0-17 7.6-17 17s7.6 17 17 17h106.7c9.4 0 17-7.6 17-17s-7.6-17-17-17H140.7zm256-68.3h-36.2v17c0 28.3 22.9 51.2 51.2 51.2h36.2v85.3c0 28.3-22.9 51.2-51.2 51.2H85.3c-28.3 0-51.2-22.9-51.2-51.2V85.3c0-28.3 22.9-51.2 51.2-51.2h128V145c0 28.3 22.9 51.2 51.2 51.2h131.2v75.5zm105.8 45.4-68.3-68.3c-6.6-6.6-17.4-6.6-24.1 0s-6.6 17.4 0 24.1l39.2 39.2H384c-9.4 0-17 7.6-17 17s7.6 17 17 17h65.3l-39.2 39.2c-6.6 6.6-6.6 17.4 0 24.1 3.3 3.3 7.7 5 12 5s8.7-1.7 12-5l68.3-68.3c6.7-6.7 6.7-17.4.1-24.1z" />
                        </svg>
                    </span>
                    <span class="ms-3 whitespace-nowrap <?php echo $is_export ? 'translate-x-1' : ''; ?>">EXPORT DATA</span>
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
$is_aboutme = (stripos($current_uri, '/frontend/aboutme') !== false || stripos($current_uri, '/frontend/portal/aboutme') !== false);
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
                        <!-- Static 23x23 Icon -->
                        <svg class="absolute inset-0 w-[23px] h-[23px] <?php echo $is_calculate ? 'hidden' : 'text-white/80 group-hover:hidden group-active:hidden'; ?>" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" viewBox="0 0 64 64">
                            <g><path d="m11.757 22h8.485v2h-8.485z" transform="matrix(.707 -.707 .707 .707 -11.577 18.05)"/><circle cx="18" cy="25" r="1"/><circle cx="14" cy="21" r="1"/><path d="m9 37h-2c-1.103 0-2 .897-2 2v2c0 1.103.897 2 2 2h2c1.103 0 2-.897 2-2v-2c0-1.103-.897-2-2-2zm-2 4v-2h2l.001 2z"/><path d="m17 37h-2c-1.103 0-2 .897-2 2v2c0 1.103.897 2 2 2h2c1.103 0 2-.897 2-2v-2c0-1.103-.897-2-2-2zm-2 4v-2h2l.001 2z"/><path d="m25 37h-2c-1.103 0-2 .897-2 2v2c0 1.103.897 2 2 2h2c1.103 0 2-.897 2-2v-2c0-1.103-.897-2-2-2zm-2 4v-2h2l.001 2z"/><path d="m9 45h-2c-1.103 0-2 .897-2 2v2c0 1.103.897 2 2 2h2c1.103 0 2-.897 2-2v-2c0-1.103-.897-2-2-2zm-2 4v-2h2l.001 2z"/><path d="m17 45h-2c-1.103 0-2 .897-2 2v2c0 1.103.897 2 2 2h2c1.103 0 2-.897 2-2v-2c0-1.103-.897-2-2-2zm-2 4v-2h2l.001 2z"/><path d="m9 53h-2c-1.103 0-2 .897-2 2v2c0 1.103.897 2 2 2h2c1.103 0 2-.897 2-2v-2c0-1.103-.897-2-2-2zm-2 4v-2h2l.001 2z"/><path d="m17 53h-2c-1.103 0-2 .897-2 2v2c0 1.103.897 2 2 2h2c1.103 0 2-.897 2-2v-2c0-1.103-.897-2-2-2zm-2 4v-2h2l.001 2z"/><path d="m25 45h-2c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h2c1.103 0 2-.897 2-2v-10c0-1.103-.897-2-2-2zm-2 12v-10h2l.001 10z"/><path d="m41 40.899v2.101h2v-2h4v-5c0-2.757-2.243-5-5-5-1.654 0-3-1.346-3-3v-3h3c1.654 0 3 1.346 3 3v3h2v-3c0-2.414-1.721-4.434-4-4.899v-2.101h-2v2h-4v5c0 2.757 2.243 5 5 5 1.654 0 3 1.346 3 3v3h-3c-1.654 0-3-1.346-3-3v-3h-2v3c0 2.414 1.721 4.434 4 4.899z"/><path d="m61 5h-8v-1c0-1.654-1.346-3-3-3s-3 1.346-3 3v1h-2v-1c0-1.654-1.346-3-3-3s-3 1.346-3 3v1h-2v-1c0-1.654-1.346-3-3-3s-3 1.346-3 3v1h-8c-1.103 0-2 .897-2 2v9.765c-1.371-1.102-3.109-1.765-5-1.765-2.953 0-5.532 1.613-6.918 4h-3.082c-2.757 0-5 2.243-5 5v34c0 2.757 2.243 5 5 5h20c2.757 0 5-2.243 5-5v-7h27c2.757 0 5-2.243 5-5v-39c0-1.103-.897-2-2-2zm-12-1c0-.551.448-1 1-1s1 .449 1 1v4c0 .551-.448 1-1 1s-1-.449-1-1zm-8 0c0-.551.448-1 1-1s1 .449 1 1v4c0 .551-.448 1-1 1s-1-.449-1-1zm-8 0c0-.551.448-1 1-1s1 .449 1 1v4c0 .551-.448 1-1 1s-1-.449-1-1zm-2 3v1c0 1.654 1.346 3 3 3s3-1.346 3-3v-1h2v1c0 1.654 1.346 3 3 3s3-1.346 3-3v-1h2v1c0 1.654 1.346 3 3 3s3-1.346 3-3v-1h8v6h-38v-6zm-15 24c2.953 0 5.532-1.613 6.918-4h2.082v6h-18v-6h2.082c1.386 2.387 3.965 4 6.918 4zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6zm13 41c0 1.654-1.346-3-3 3h-20c-1.654 0-3-1.346-3-3v-34c0-1.654 1.346-3 3-3h2.263c-.166.641-.263 1.308-.263 2s.097 1.359.263 2h-1.263c-1.103 0-2 .897-2 2v6c0 1.103.897 2 2 2h18c1.103 0 2-.897 2-2v-6c0-1.103-.897-2-2-2h-1.263c.166-.641.263-1.308.263-2s-.097-1.359-.263-2h2.263c1.654 0 3 1.346 3 3zm-2-38.899v-.101h30v26h-26v-21c0-2.414-1.721-4.434-4-4.899zm31 29.899h-27v-2h26c1.103 0 2-.897 2-2v-26c0-1.103-.897-2-2-2h-30c-1.103 0-2 2h-2v-4h38v31c0 1.654-1.346 3-3 3z"/></g>
                        </svg>
                        <!-- Active/Hover 24x24 Icon -->
                        <svg class="absolute inset-0 w-6 h-6 text-white <?php echo $is_calculate ? 'block scale-105' : 'hidden group-hover:block group-active:block'; ?>" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 64 64">
                            <g><path d="m7 47h2v2h-2z"/><path d="m7 39h2v2h-2z"/><path d="m15 47h2v2h-2z"/><path d="m7 55h2v2h-2z"/><path d="m15 55h2v2h-2z"/><path d="m34 9c.552 0 1-.449 1-1v-4c0-.551-.448-1-1-1s-1 .449-1 1v4c0 .551.448 1 1 1z"/><path d="m42 9c.552 0 1-.449 1-1v-4c0-.551-.448-1-1-1s-1 .449-1 1v4c0 .551.448 1 1 1z"/><path d="m50 9c.552 0 1-.449 1-1v-4c0-.551-.448-1-1-1s-1 .449-1 1v4c0 .551.448 1 1 1z"/><path d="m16 29c3.309 0 6-2.691 6-6s-2.691-6-6-6-6 2.691-6 6 2.691 6 6 6zm2-3c-.552 0-1-.448-1-1s.448-1 1-1 1 .448 1 1-.448 1-1 1zm-4-6c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm4.293-.707 1.414 1.414-6 6-1.414-1.414z"/><path d="m15 39h2v2h-2z"/><path d="m7 33h18v-6h-2.082c-1.386 2.387-3.964 4-6.918 4s-5.532-1.613-6.918-4h-2.082z"/><path d="m31 45h26v-26h-30v.101c2.279.465 4 2.484 4 4.899zm6-12h2v3c0 1.654 1.346 3 3 3h3v-3c0-1.654-1.346-3-3-3-2.757 0-5-2.243-5-5v-5h4v-2h2v2.101c2.279.465 4 2.484 4 4.899v3h-2v-3c0-1.654-1.346-3-3-3h-3v3c0 2.757 2.243 3 3 3 2.757 0 5 2.243 5 5v5h-4v2h-2v-2.101c-2.279-.465-4-2.484-4-4.899z"/><path d="m23 19h2c0-1.103.897-2 2-2h30c1.103 0 2 .897 2 2v26c0 1.103-.897 2-2 2h-26v2h27c1.654 0 3-1.346 3-3v-31h-38z"/><path d="m23 39h2v2h-2z"/><path d="m26 21h-2.263c.166.641.263 1.308.263 2s-.097 1.359-.263 2h1.263c1.103 0 2 .897 2 2v6c0 1.103-.897 2-2 2h-18c-1.103 0-2-.897-2-2v-6c0-1.103.897-2 2-2h1.263c-.166-.641-.263-1.308-.263-2s-.097-1.359-.263-2h-2.263c-1.654 0-3 1.346-3 3v34c0 2.757 1.346 3 3 3h20c1.654 0 3-1.346 3-3v-34c0-1.654-1.346-3-3-3zm-15 36c0 1.103-.897 2-2 2h-2c-1.103 0-2-.897-2-2v-2c0-1.103.897-2 2-2h2c1.103 0 2 .897 2 2zm0-8c0 1.103-.897 2-2 2h-2c-1.103 0-2-.897-2-2v-2c0-1.103.897-2 2-2h2c1.103 0 2 2 2 2zm0-8c0 1.103-.897 2-2 2h-2c-1.103 0-2-.897-2-2v-2c0-1.103.897-2 2-2h2c1.103 0 2 2 2 2zm8 16c0 1.103-.897 2-2 2h-2c-1.103 0-2-2 2-2v-2c0-1.103.897-2 2-2h2c1.103 0 2 2 2 2zm0-8c0 1.103-.897 2-2 2h-2c-1.103 0-2-2 2-2v-2c0-1.103.897-2 2-2h2c1.103 0 2 2 2 2zm0-8c0 1.103-.897 2-2 2h-2c-1.103 0-2-2 2-2v-2c0-1.103.897-2 2-2h2c1.103 0 2 2 2 2zm8 16c0 1.103-.897 2-2 2h-2c-1.103 0-2-2 2-2v-10c0-1.103.897-2 2-2h2c1.103 0 2 2 2 2zm0-16c0 1.103-.897 2-2 2h-2c-1.103 0-2-2 2-2v-2c0-1.103.897-2 2-2h2c1.103 0 2 2 2 2z"/><path d="m53 7v1c0 1.654-1.346 3-3 3s-3-1.346-3-3v-1h-2v1c0 1.654-1.346 3-3 3s-3-1.346-3-3v-1h-2v1c0 1.654-1.346 3-3 3s-3-1.346-3-3v-1h-8v6h38v-6z"/><path d="m23 47h2v10h-2z"/></g>
                        </svg>
                    </span>
                    <span class="ms-3 whitespace-nowrap transition-all duration-200 <?php echo $is_calculate ? 'translate-x-1' : ''; ?>">CALCULATE SALARY</span>
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
                    <span class="ms-3 whitespace-nowrap <?php echo $is_aboutme ? 'translate-x-1' : ''; ?>">ABOUT DEVELOPER</span>
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
                            <span class="font-semibold">PROFILE</span>
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
                                <span class="<?php echo $is_settings ? '' : 'font-semibold'; ?>">SETTINGS</span>
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
                            <span class="font-semibold" id="sidebar-theme-label">DARK MODE</span>
                        </button>
                    </li>
                </ul>
            </div>

            <!-- Profile Button -->
            <button id="profileDropdownButton" data-dropdown-toggle="profileDropdown" data-dropdown-placement="top" aria-current="<?php echo $is_settings ? 'page' : 'false'; ?>"
                class="flex items-center w-full p-3 rounded-xl transition-all duration-200 hover:scale-[1.02] cursor-pointer border <?php echo $is_settings ? 'bg-white/15 border-white/30 ring-1 ring-white/20' : 'bg-white/5 border-white/10 hover:bg-white/10'; ?>">
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
<script>
(function() {
    function hydrateSidebarUser() {
        try {
            var raw = localStorage.getItem('user');
            var u = raw ? JSON.parse(raw) : null;
            var name = u ? (u.full_name || u.name || u.username) : (localStorage.getItem('user_full_name') || 'System User');
            var email = u ? (u.email || (u.username ? u.username + '@dole.gov.ph' : 'user@dole.gov.ph')) : 'user@dole.gov.ph';
            var avatar = (u && u.profile_picture_path) ? u.profile_picture_path : localStorage.getItem('user_avatar');
            var initials = (name || 'US').trim().split(' ').map(function(n){ return n[0]; }).join('').substring(0, 2).toUpperCase() || 'US';

            document.querySelectorAll('.sidebar-user-name').forEach(function(el) { el.textContent = name; });
            document.querySelectorAll('.sidebar-user-email').forEach(function(el) { el.textContent = email; });
            document.querySelectorAll('.sidebar-user-avatar').forEach(function(container) {
                var initEl = container.querySelector('.sidebar-avatar-initials');
                var imgEl = container.querySelector('.sidebar-avatar-img');
                if (avatar && imgEl) {
                    var src = avatar.startsWith('http') ? avatar : (window.location.origin + '/' + avatar.replace(/^\//, ''));
                    imgEl.src = src;
                    imgEl.classList.remove('hidden');
                    if (initEl) initEl.classList.add('hidden');
                } else if (initEl) {
                    initEl.textContent = initials;
                    initEl.classList.remove('hidden');
                    if (imgEl) imgEl.classList.add('hidden');
                }
            });
        } catch (e) {}
    }
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', hydrateSidebarUser);
    } else {
        hydrateSidebarUser();
    }
})();
</script>