<?php
require_once __DIR__ . '/../../../config/vite.php';
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Settings | DOLE-GIP System</title>

    <!-- Favicon -->
    <link rel="icon" type="image/png" href="../../../frontend/images/logo/doleiligan.png">
    <link rel="apple-touch-icon" href="../../../frontend/images/logo/doleiligan.png">

    <!-- Preconnect to Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Outfit:wght@100..900&display=swap"
        rel="stylesheet">

    <!-- Vite Assets -->
    <?php vite('backend/js/main.js'); ?>
    <?php vite('backend/js/modules/settings.js'); ?>

    <!-- Dark Mode FOUC Prevention: apply theme before paint -->
    <script>
        (function () {
            var theme = localStorage.getItem('color-theme');
            if (!theme) {
                // Check cookie fallback
                var match = document.cookie.match(/(?:^|; )color-theme=([^;]*)/);
                theme = match ? decodeURIComponent(match[1]) : null;
            }
            if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        })();
    </script>

</head>

<body class="bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 antialiased settings-body">
    <!-- Page Loader -->
    <div id="page-loader" class="page-loader">
        <div class="loader-spinner"></div>
    </div>

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
                        <img src="../../../frontend/images/logo/doleiligan.png"
                            class="h-8 me-3 bg-white rounded-full p-0.5 object-contain" alt="DOLE Logo" />
                        <div class="flex flex-col">
                            <span class="text-sm font-black text-royal-blue uppercase tracking-tight leading-tight">Account
                                Settings</span>
                            <span class="text-[0.625rem] font-semibold text-gray-500 uppercase tracking-wider">DOLE LDNPFO
                                System</span>
                        </div>
                    </div>
                </div>
                <div class="flex items-center gap-3">
                    <?php include __DIR__ . '/../../components/notification.php'; ?>
                    <button id="logoutBtn"
                        class="flex items-center justify-center text-xs font-bold text-philippine-red hover:bg-red-50 w-9 h-9 sm:w-auto sm:h-auto sm:px-4 sm:py-2 flex-shrink-0 rounded-full sm:rounded-lg transition-all duration-200 cursor-pointer border border-philippine-red/20 uppercase hover:scale-105">
                        <svg class="w-4 h-4 sm:me-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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

    <?php include __DIR__ . '/../../components/sidebar/index.php'; ?>

    <style>
        .tab-link.active {
            color: var(--color-royal-blue) !important;
            border-bottom-color: var(--color-royal-blue) !important;
            font-weight: 900 !important;
        }
        .dark .tab-link.active {
            color: #60a5fa !important;
            border-bottom-color: #60a5fa !important;
        }
    </style>

    <div class="p-4 sm:p-6 sm:ml-64 mt-20">
        <div class="max-w-6xl mx-auto">



            <!-- Page Title Block -->
            <div class="mb-6 px-1 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                    <h1 class="text-3xl font-black text-heading leading-tight mb-0.5">Settings</h1>
                    <p class="text-xs text-gray-400 dark:text-slate-500 font-bold uppercase tracking-wider">DOLE LDNPFO GIP System Settings</p>
                </div>
                <button type="button" id="save-settings-btn" class="w-full sm:w-auto inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-royal-blue px-5 py-2.5 text-[0.6875rem] font-bold uppercase tracking-widest text-white shadow-md transition-all hover:bg-blue-800 active:scale-95 dark:bg-blue-600 dark:hover:bg-blue-700">
                    <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" /></svg>
                    Save Settings
                </button>
            </div>

            <!-- Tab Switcher (Mockup Style Underlined) -->
            <div class="hidden" aria-hidden="true">
                <button data-tab-target="profile"
                    class="tab-link active border-b-2 border-transparent font-extrabold text-[0.625rem] sm:text-xs uppercase tracking-widest text-slate-500 hover:text-royal-blue dark:text-slate-400 dark:hover:text-blue-400 py-3.5 px-5 select-none focus:outline-none cursor-pointer flex items-center gap-2">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
                    Profile
                </button>
                <button data-tab-target="security"
                    class="tab-link border-b-2 border-transparent font-extrabold text-[0.625rem] sm:text-xs uppercase tracking-widest text-slate-500 hover:text-royal-blue dark:text-slate-400 dark:hover:text-blue-400 py-3.5 px-5 select-none focus:outline-none cursor-pointer flex items-center gap-2">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
                    Security
                </button>
                <button data-tab-target="preferences"
                    class="tab-link border-b-2 border-transparent font-extrabold text-[0.625rem] sm:text-xs uppercase tracking-widest text-slate-500 hover:text-royal-blue dark:text-slate-400 dark:hover:text-blue-400 py-3.5 px-5 select-none focus:outline-none cursor-pointer flex items-center gap-2">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 48 48"><path fill="currentColor" d="m24 34c2.4188915 0 4.4366008 1.7176654 4.8999437 3.999812l15.1000563.000188v2l-15.1002591.0011864c-.4637287 2.2816492-2.4812022 3.9988136-4.8997409 3.9988136s-4.4360122-1.7171644-4.8997409-3.9988136l-15.1002591-.0011864v-2l15.1000563-.000188c.4633429-2.2821466 2.4810522-3.999812 4.8999437-3.999812zm0 2c-1.6568542 0-3 1.3431458-3 3s1.3431458 3 3 3 3-1.3431458 3-3-1.3431458-3-3-3zm10-17c2.4188915 0 4.4366008 1.7176654 4.8999437 3.999812l5.1000563.000188v2l-5.1002591.0011864c-.4637287 2.2816492-2.4812022 3.9988136-4.8997409 3.9988136s-4.4360122-1.7171644-4.8997409-3.9988136l-25.1002591-.0011864v-2l25.1000563-.000188c.4633429-2.2821466 2.4810522-3.999812 4.8999437-3.999812zm0 2c-1.6568542 0-3 1.3431458-3 3s1.3431458 3 3 3 3-1.3431458 3-3-1.3431458-3-3-3zm-20-17c2.4188915 0 4.4366008 1.71766536 4.8999437 3.99981203l25.1000563.00018797v2l-25.1002591.0011864c-.4637287 2.2816492-2.4812022 3.9988136-4.8997409 3.9988136s-4.43601224-1.7171644-4.89974091-3.9988136l-5.10025909-.0011864v-2l5.10005628-.00018797c.46334296-2.28214667 2.48105222-3.99981203 4.89994372-3.99981203zm0 2c-1.6568542 0-3 1.3431458-3 3 0 1.6568542 1.3431458 3 3 3s3-1.3431458 3-3c0-1.65685425-1.3431458-3-3-3z"/></svg>
                    Preferences
                </button>
            </div>

            <!-- Unified Content Area (Takes full width) -->
            <div class="w-full flex flex-col gap-6">

                <!-- Profile Tab Panel -->
                <div id="tab-profile" class="tab-content animate-slide-in order-1">
                    <form id="settings-form" class="space-y-6">

                        <div class="grid grid-cols-1 gap-6 items-start">

                            <!-- Unified Profile Details -->
                            <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-4 sm:p-6 shadow-xs relative">
                                <div class="flex items-center justify-between mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
                                    <h3 class="text-sm font-bold text-gray-800 dark:text-white uppercase tracking-wider">Profile Details</h3>
                                    <button type="button" class="text-gray-400 hover:text-royal-blue dark:hover:text-blue-400 cursor-pointer">
                                        <svg class="w-4 h-4 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/></svg>
                                    </button>
                                </div>

                                <div class="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_18rem] gap-6 items-start">
                                    <!-- Integrated Avatar Display & Basic Info -->
                                <div class="flex items-center gap-4 mb-6 lg:order-2 lg:justify-self-center lg:pt-12">
                                    <div class="relative group shrink-0 select-none">
                                        <div id="settings-avatar-preview"
                                            class="w-20 h-20 rounded-full border border-slate-200 dark:border-slate-700 shadow-xs overflow-hidden bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-royal-blue dark:text-blue-400 text-2xl font-black transition-all">
                                            AD
                                        </div>
                                        <label for="settings-pic-input"
                                            class="absolute bottom-0 right-0 w-7 h-7 bg-royal-blue hover:bg-blue-800 text-white rounded-full flex items-center justify-center cursor-pointer shadow-md hover:scale-105 transition-all border-2 border-white dark:border-slate-900 translate-x-1.5 translate-y-1.5">
                                            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                                        </label>
                                        <input type="file" id="settings-pic-input" class="hidden" accept="image/*">
                                    </div>
                                    <div>
                                        <h2 class="text-base font-black text-gray-800 dark:text-white sidebar-user-name mb-0.5">Admin User</h2>
                                        <p class="text-[0.625rem] font-bold text-gray-500 dark:text-slate-400 uppercase tracking-widest" id="settings-user-role">System Administrator</p>
                                        <p class="text-[0.6875rem] text-slate-400 dark:text-slate-500 font-mono mt-0.5" id="settings-user-email">admin@dole.gov.ph</p>
                                    </div>
                                </div>

                                <!-- Personal Details Inputs -->
                                <div class="space-y-4 lg:order-1">
                                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label class="block text-[0.625rem] font-bold text-gray-500 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Full Name</label>
                                            <input type="text" id="set-full-name" name="full_name"
                                                class="w-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2 text-xs font-semibold text-gray-700 dark:text-slate-200 outline-none transition-all"
                                                placeholder="Enter your full name">
                                        </div>
                                        <div>
                                            <label class="block text-[0.625rem] font-bold text-gray-500 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Email Address</label>
                                            <input type="email" id="set-email" name="email"
                                                class="w-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2 text-xs font-semibold text-gray-700 dark:text-slate-200 outline-none transition-all"
                                                placeholder="yourname@gmail.com">
                                        </div>
                                    </div>

                                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label class="block text-[0.625rem] font-bold text-gray-500 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Phone</label>
                                            <input type="text" id="set-phone" name="phone_number"
                                                class="w-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2 text-xs font-semibold text-gray-700 dark:text-slate-200 outline-none transition-all"
                                                placeholder="09XX XXX XXXX">
                                        </div>
                                        <div>
                                            <label class="block text-[0.625rem] font-bold text-gray-500 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Gender</label>
                                            <input type="hidden" id="set-gender" name="gender" value="Male">
                                            <div id="gender-picker" class="grid grid-cols-3 gap-1" role="radiogroup" aria-label="Gender">
                                                <button type="button" class="gender-option whitespace-nowrap rounded-md border px-1.5 py-1 text-[0.5625rem] font-bold transition-all cursor-pointer bg-blue-600 text-white border-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:text-white dark:hover:bg-blue-500" data-gender="Male" aria-pressed="true">
                                                    <svg class="mx-auto mb-0.5 h-3 w-3" fill="none" viewBox="0 0 24 24" aria-hidden="true"><circle cx="10" cy="14" r="4" stroke="currentColor" stroke-width="2"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M13 11l6-6m0 0h-4m4 0v4"/></svg>
                                                    Male
                                                </button>
                                                <button type="button" class="gender-option whitespace-nowrap rounded-md border px-1.5 py-1 text-[0.5625rem] font-bold transition-all cursor-pointer bg-pink-600 text-white border-pink-600 hover:bg-pink-700 dark:bg-pink-600 dark:text-white dark:hover:bg-pink-500" data-gender="Female" aria-pressed="false">
                                                    <svg class="mx-auto mb-0.5 h-3 w-3" fill="none" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="4" stroke="currentColor" stroke-width="2"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12 12v8m-3-3h6"/></svg>
                                                    Female
                                                </button>
                                                <button type="button" class="gender-option whitespace-nowrap rounded-md border px-1.5 py-1 text-[0.5625rem] font-bold transition-all cursor-pointer bg-gray-600 text-white border-gray-600 hover:bg-gray-700 dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500" data-gender="Other" aria-pressed="false">
                                                    <svg class="mx-auto mb-0.5 h-3 w-3" fill="none" viewBox="0 0 24 24" aria-hidden="true"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12 3v18m-9-9h18"/><circle cx="12" cy="12" r="8" stroke="currentColor" stroke-width="2"/></svg>
                                                    Other
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <label class="block text-[0.625rem] font-bold text-gray-500 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Bio</label>
                                        <textarea id="set-bio" name="bio_graphy" rows="3"
                                            class="w-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2 text-xs font-semibold text-gray-700 dark:text-slate-200 outline-none transition-all resize-none"
                                            placeholder="Tell us about yourself..."></textarea>
                                    </div>
                                </div>
                                </div>

                                <div class="mt-6 pt-6 border-t border-slate-200 dark:border-slate-800">
                                <div class="flex items-center justify-between mb-6">
                                    <h3 class="text-sm font-bold text-gray-800 dark:text-white uppercase tracking-wider">Additional Details</h3>
                                    <button type="button" class="text-gray-400 hover:text-royal-blue dark:hover:text-blue-400 cursor-pointer">
                                        <svg class="w-4 h-4 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/></svg>
                                    </button>
                                </div>

                                <div class="space-y-4">
                                    <div>
                                        <label class="block text-[0.625rem] font-bold text-gray-500 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Address</label>
                                        <input type="text" id="set-address" name="home_address"
                                            class="w-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2 text-xs font-semibold text-gray-700 dark:text-slate-200 outline-none transition-all"
                                            placeholder="Complete address">
                                    </div>

                                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label class="block text-[0.625rem] font-bold text-gray-500 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Date of Birth</label>
                                            <input type="date" id="set-dob" name="date_of_birth"
                                                class="w-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2 text-xs font-semibold text-gray-700 dark:text-slate-200 outline-none transition-all">
                                        </div>
                                        <div>
                                            <label class="block text-[0.625rem] font-bold text-gray-500 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Religion</label>
                                            <input type="text" id="set-religion" name="religion"
                                                class="w-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2 text-xs font-semibold text-gray-700 dark:text-slate-200 outline-none transition-all"
                                                placeholder="e.g. Roman Catholic">
                                        </div>
                                    </div>

                                    <div>
                                        <label class="block text-[0.625rem] font-bold text-gray-500 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Languages (comma-separated)</label>
                                        <input type="text" id="set-languages" name="languages"
                                            class="w-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2 text-xs font-semibold text-gray-700 dark:text-slate-200 outline-none transition-all"
                                            placeholder="English, Tagalog, Cebuano">
                                    </div>
                                </div>
                                </div>
                                <!-- Change Password Section -->
                <div id="tab-security" class="border-t border-slate-200 dark:border-slate-800 mt-6 pt-6">

                        <div class="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
                            <svg class="w-5 h-5 text-royal-blue dark:text-blue-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                            <div>
                                <h3 class="text-sm font-bold text-gray-800 dark:text-white uppercase tracking-wider">Change Password</h3>
                                <p class="text-[10px] text-gray-400 dark:text-slate-500 font-bold mt-0.5">Update your authentication credentials</p>
                            </div>
                        </div>

                        <div id="password-form" class="space-y-4">
                            <div>
                                <label class="block text-[0.625rem] font-bold text-gray-500 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Current Password</label>
                                <input type="password" id="current_password" name="current_password"
                                    class="w-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2.5 text-xs font-semibold text-gray-700 dark:text-slate-200 outline-none transition-all font-mono"
                                    placeholder="••••••••">
                            </div>

                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label class="block text-[0.625rem] font-bold text-gray-500 dark:text-slate-400 mb-1.5 uppercase tracking-wider">New Password</label>
                                    <input type="password" id="new_password" name="new_password"
                                        class="w-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2.5 text-xs font-semibold text-gray-700 dark:text-slate-200 outline-none transition-all font-mono"
                                        placeholder="••••••••">
                                </div>
                                <div>
                                    <label class="block text-[0.625rem] font-bold text-gray-500 dark:text-slate-400 mb-1.5 uppercase tracking-wider">Confirm Password</label>
                                    <input type="password" id="confirm_password" name="confirm_password"
                                        class="w-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2.5 text-xs font-semibold text-gray-700 dark:text-slate-200 outline-none transition-all font-mono"
                                        placeholder="••••••••">
                                </div>
                            </div>

                            <button type="button" id="update-password-btn"
                                class="btn-save w-full text-white py-3 rounded-lg font-bold text-[0.6875rem] uppercase tracking-widest shadow-md flex items-center justify-center gap-2 cursor-pointer mt-6 border-none bg-royal-blue hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 transition-all active:scale-95">
                                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" /></svg>
                                Update Password
                            </button>
                        </div>
                                </div>
                            </div>
                        </div>

                        <!-- Save Profile Changes Button (Clean rectangular block under both cards) -->
                        <div class="hidden flex items-center justify-between pt-4">
                            <div id="save-status" class="hidden flex items-center gap-2 text-emerald-600">
                                <svg class="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                <span class="text-xs font-bold animate-pulse">Syncing profile...</span>
                            </div>
                            <div class="flex-1"></div>
                            <button type="submit"
                                class="btn-save text-white px-8 py-3 rounded-lg font-bold text-[0.6875rem] uppercase tracking-widest shadow-md flex items-center gap-2 cursor-pointer border-none bg-royal-blue hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 transition-all active:scale-95">
                                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" /></svg>
                                Save Profile Changes
                            </button>
                        </div>
                    </form>
                </div>

                <!-- Preferences Tab Panel -->
                <div id="tab-preferences" class="tab-content animate-slide-in order-3">
                    <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-6 shadow-xs">
                        <div class="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
                            <svg class="w-5 h-5 text-royal-blue dark:text-blue-400 shrink-0" fill="none" viewBox="0 0 48 48" aria-hidden="true"><path fill="currentColor" d="m24 34c2.4188915 0 4.4366008 1.7176654 4.8999437 3.999812l15.1000563.000188v2l-15.1002591.0011864c-.4637287 2.2816492-2.4812022 3.9988136-4.8997409 3.9988136s-4.4360122-1.7171644-4.8997409-3.9988136l-15.1002591-.0011864v-2l15.1000563-.000188c.4633429-2.2821466 2.4810522-3.999812 4.8999437-3.999812zm0 2c-1.6568542 0-3 1.3431458-3 3s1.3431458 3 3 3 3-1.3431458 3-3-1.3431458-3-3-3zm10-17c2.4188915 0 4.4366008 1.7176654 4.8999437 3.999812l5.1000563.000188v2l-5.1002591.0011864c-.4637287 2.2816492-2.4812022 3.9988136-4.8997409 3.9988136s-4.4360122-1.7171644-4.8997409-3.9988136l-25.1002591-.0011864v-2l25.1000563-.000188c.4633429-2.2821466 2.4810522-3.999812 4.8999437-3.999812zm0 2c-1.6568542 0-3 1.3431458-3 3s1.3431458 3 3 3 3-1.3431458 3-3-1.3431458-3-3-3zm-20-17c2.4188915 0 4.4366008 1.71766536 4.8999437 3.99981203l25.1000563.00018797v2l-25.1002591.0011864c-.4637287 2.2816492-2.4812022 3.9988136-4.8997409 3.9988136s-4.43601224-1.7171644-4.89974091-3.9988136l-5.10025909-.0011864v-2l5.10005628-.00018797c.46334296-2.28214667 2.48105222-3.99981203 4.89994372-3.99981203zm0 2c-1.6568542 0-3 1.3431458-3 3 0 1.6568542 1.3431458 3 3 3s3-1.3431458 3-3c0-1.65685425-1.3431458-3-3-3z"/></svg>
                            <div>
                                <h3 class="text-sm font-bold text-gray-800 dark:text-white uppercase tracking-wider">System Preferences</h3>
                                <p class="text-[10px] text-gray-400 dark:text-slate-500 font-bold mt-0.5">Customize your experience</p>
                            </div>
                        </div>

                        <div class="space-y-4">
                            <div class="flex items-center justify-between py-3.5 border-b border-slate-100 dark:border-slate-800">
                                <div>
                                    <h4 class="text-xs font-bold text-gray-700 dark:text-slate-200">Push Notifications</h4>
                                    <p class="text-[10px] text-gray-400 dark:text-slate-500 mt-0.5">Receive real-time alerts and updates</p>
                                </div>
                                <label class="relative inline-flex items-center cursor-pointer select-none">
                                    <input type="checkbox" id="pref-notifications" class="sr-only peer">
                                    <div class="w-11 h-6 bg-gray-200 dark:bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-500"></div>
                                </label>
                            </div>

                            <div class="flex items-center justify-between py-3.5 border-b border-slate-100 dark:border-slate-800">
                                <div>
                                    <h4 class="text-xs font-bold text-gray-700 dark:text-slate-200">Text Size</h4>
                                    <p class="text-[10px] text-gray-400 dark:text-slate-500 mt-0.5">Adjust the interface text size</p>
                                </div>
                                <div class="relative">
                                    <select id="pref-text-size" class="appearance-none bg-gray-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 text-gray-700 dark:text-slate-200 text-xs font-bold rounded-lg focus:ring-royal-blue focus:border-royal-blue block w-36 p-2 pr-8 outline-none transition-all cursor-pointer">
                                        <option value="small">Small</option>
                                        <option value="normal" selected>Normal</option>
                                        <option value="medium">Medium</option>
                                        <option value="large">Large</option>
                                        <option value="extra-large">Extra Large</option>
                                    </select>
                                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-slate-400">
                                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                                    </div>
                                </div>
                            </div>

                            <div class="flex items-center justify-between py-3.5">
                                <div>
                                    <h4 class="text-xs font-bold text-gray-700 dark:text-slate-200">Dark Mode</h4>
                                    <p class="text-[10px] text-gray-400 dark:text-slate-500 mt-0.5">Switch to dark theme</p>
                                </div>
                                <label class="relative inline-flex items-center cursor-pointer select-none">
                                    <input type="checkbox" id="pref-dark-mode" class="sr-only peer">
                                    <div class="w-11 h-6 bg-gray-200 dark:bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-royal-blue"></div>
                                </label>
                            </div>
                        </div>

                        <div class="hidden flex justify-end mt-6">
                            <button type="button" id="save-pref-btn"
                                class="btn-save text-white px-8 py-2.5 rounded-lg font-bold text-[0.6875rem] uppercase tracking-widest shadow-md flex items-center gap-2 cursor-pointer border-none bg-royal-blue hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 transition-all active:scale-95">
                                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" /></svg>
                                Save Preferences
                            </button>
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
