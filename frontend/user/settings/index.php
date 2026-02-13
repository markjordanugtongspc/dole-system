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

</head>

<body class="bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 antialiased settings-body">
    <!-- Page Loader -->
    <div id="page-loader" class="page-loader">
        <div class="loader-spinner"></div>
    </div>

    <nav class="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-xl border-b border-gray-200/50 shadow-sm">
        <div class="px-6 py-4">
            <div class="flex items-center justify-between">
                <div class="flex items-center justify-start">
                    <button data-drawer-target="top-bar-sidebar" data-drawer-toggle="top-bar-sidebar"
                        aria-controls="top-bar-sidebar" type="button"
                        class="sm:hidden text-gray-700 bg-transparent hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 rounded-lg text-sm p-2 cursor-pointer">
                        <span class="sr-only">Open sidebar</span>
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                    <div class="flex ms-2 md:me-24 items-center select-none">
                        <img src="../../../frontend/images/logo/doleiligan.png" class="h-10 me-3" alt="DOLE Logo" />
                        <div class="flex flex-col">
                            <span class="text-lg font-black text-gray-800 tracking-tight font-outfit">Account
                                Settings</span>
                            <span class="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">DOLE LDNPFO
                                System</span>
                        </div>
                    </div>
                </div>
                <div class="flex items-center gap-3">
                    <?php include __DIR__ . '/../../components/notification.php'; ?>
                    <button id="logoutBtn"
                        class="flex items-center text-xs font-bold text-red-600 hover:bg-red-50 px-4 py-2 rounded-lg transition-all duration-200 cursor-pointer border border-red-200 uppercase hover:scale-105">
                        <svg class="w-4 h-4 me-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

    <?php include __DIR__ . '/../../components/sidebar/index.php'; ?>

    <div class="p-6 sm:ml-64 mt-20">
        <div class="max-w-7xl mx-auto">

            <!-- Header Navigation Tabs -->
            <div class="glass-card rounded-2xl p-2 mb-8 inline-flex gap-1">
                <button data-tab-target="profile"
                    class="tab-link active px-8 py-3 rounded-xl text-sm font-semibold text-gray-600 hover:text-emerald-600 hover:bg-emerald-50/50 transition-all cursor-pointer">
                    Profile
                </button>
                <button data-tab-target="security"
                    class="tab-link px-8 py-3 rounded-xl text-sm font-semibold text-gray-600 hover:text-emerald-600 hover:bg-emerald-50/50 transition-all cursor-pointer">
                    Security
                </button>
                <button data-tab-target="preferences"
                    class="tab-link px-8 py-3 rounded-xl text-sm font-semibold text-gray-600 hover:text-emerald-600 hover:bg-emerald-50/50 transition-all cursor-pointer">
                    Preferences
                </button>
            </div>

            <!-- Main Content Grid -->
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">

                <!-- LEFT: Forms (2/3 width) -->
                <div class="lg:col-span-2 space-y-6">

                    <!-- Profile Tab -->
                    <div id="tab-profile" class="tab-content animate-slide-in">
                        <form id="settings-form" class="space-y-6">

                            <!-- Personal Information -->
                            <div class="glass-card rounded-2xl p-8 transition-all duration-300">
                                <div class="flex items-center gap-3 mb-6 pb-4 border-b border-gray-200">
                                    <div
                                        class="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 class="text-xl font-bold text-gray-800">Personal Information</h3>
                                        <p class="text-xs text-gray-500 mt-0.5">Update your basic profile details</p>
                                    </div>
                                </div>

                                <div class="space-y-5">
                                    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <div>
                                            <label
                                                class="block text-xs font-bold text-gray-600 mb-2 uppercase tracking-wide">Full
                                                Name</label>
                                            <input type="text" id="set-full-name" name="full_name"
                                                class="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm font-medium text-gray-700 outline-none transition-all"
                                                placeholder="Enter your full name">
                                        </div>
                                        <div>
                                            <label
                                                class="block text-xs font-bold text-gray-600 mb-2 uppercase tracking-wide">Email
                                                Address</label>
                                            <input type="email" id="set-email" name="email"
                                                class="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm font-medium text-gray-700 outline-none transition-all"
                                                placeholder="yourname@gmail.com">
                                        </div>
                                    </div>

                                    <div>
                                        <label
                                            class="block text-xs font-bold text-gray-600 mb-2 uppercase tracking-wide">Bio</label>
                                        <textarea id="set-bio" name="bio_graphy" rows="3"
                                            class="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm font-medium text-gray-700 outline-none transition-all resize-none"
                                            placeholder="Tell us about yourself..."></textarea>
                                    </div>

                                    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <div>
                                            <label
                                                class="block text-xs font-bold text-gray-600 mb-2 uppercase tracking-wide">Phone</label>
                                            <input type="text" id="set-phone" name="phone_number"
                                                class="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm font-medium text-gray-700 outline-none transition-all"
                                                placeholder="09XX XXX XXXX">
                                        </div>
                                        <div>
                                            <label
                                                class="block text-xs font-bold text-gray-600 mb-2 uppercase tracking-wide">Gender</label>
                                            <select id="set-gender" name="gender"
                                                class="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm font-medium text-gray-700 outline-none transition-all cursor-pointer">
                                                <option value="Male">Male</option>
                                                <option value="Female">Female</option>
                                                <option value="Other">Other</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Extended Details -->
                            <div class="glass-card rounded-2xl p-8 transition-all duration-300">
                                <div class="flex items-center gap-3 mb-6 pb-4 border-b border-gray-200">
                                    <div
                                        class="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 class="text-xl font-bold text-gray-800">Additional Details</h3>
                                        <p class="text-xs text-gray-500 mt-0.5">Extended profile information</p>
                                    </div>
                                </div>

                                <div class="space-y-5">
                                    <div>
                                        <label
                                            class="block text-xs font-bold text-gray-600 mb-2 uppercase tracking-wide">Address</label>
                                        <input type="text" id="set-address" name="home_address"
                                            class="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm font-medium text-gray-700 outline-none transition-all"
                                            placeholder="Complete address">
                                    </div>

                                    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <div>
                                            <label
                                                class="block text-xs font-bold text-gray-600 mb-2 uppercase tracking-wide">Date
                                                of Birth</label>
                                            <input type="date" id="set-dob" name="date_of_birth"
                                                class="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm font-medium text-gray-700 outline-none transition-all">
                                        </div>
                                        <div>
                                            <label
                                                class="block text-xs font-bold text-gray-600 mb-2 uppercase tracking-wide">Religion</label>
                                            <input type="text" id="set-religion" name="religion"
                                                class="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm font-medium text-gray-700 outline-none transition-all"
                                                placeholder="e.g. Roman Catholic">
                                        </div>
                                    </div>

                                    <div>
                                        <label
                                            class="block text-xs font-bold text-gray-600 mb-2 uppercase tracking-wide">Languages
                                            (comma-separated)</label>
                                        <input type="text" id="set-languages" name="languages"
                                            class="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm font-medium text-gray-700 outline-none transition-all"
                                            placeholder="English, Tagalog, Cebuano">
                                    </div>
                                </div>
                            </div>

                            <!-- Save Button -->
                            <div class="flex items-center justify-between glass-card rounded-2xl p-5">
                                <div id="save-status" class="hidden flex items-center gap-2 text-emerald-600">
                                    <svg class="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                            stroke-width="4"></circle>
                                        <path class="opacity-75" fill="currentColor"
                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                                        </path>
                                    </svg>
                                    <span class="text-xs font-bold">Saving...</span>
                                </div>
                                <div class="flex-1"></div>
                                <button type="submit"
                                    class="btn-save text-white px-8 py-3 rounded-xl font-bold text-sm shadow-lg flex items-center gap-2 cursor-pointer">
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"
                                            d="M5 13l4 4L19 7" />
                                    </svg>
                                    Save Changes
                                </button>
                            </div>
                        </form>
                    </div>

                    <!-- Security Tab -->
                    <div id="tab-security" class="tab-content hidden animate-slide-in">
                        <div class="glass-card rounded-2xl p-8 transition-all duration-300">
                            <div class="flex items-center gap-3 mb-8 pb-4 border-b border-gray-200">
                                <div
                                    class="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 class="text-xl font-bold text-gray-800">Change Password</h3>
                                    <p class="text-xs text-gray-500 mt-0.5">Update your authentication credentials</p>
                                </div>
                            </div>

                            <form id="password-form" class="space-y-6">
                                <div>
                                    <label
                                        class="block text-xs font-bold text-gray-600 mb-2 uppercase tracking-wide">Current
                                        Password</label>
                                    <input type="password" id="current_password" name="current_password"
                                        class="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm font-medium text-gray-700 outline-none transition-all font-mono"
                                        placeholder="••••••••">
                                </div>

                                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label
                                            class="block text-xs font-bold text-gray-600 mb-2 uppercase tracking-wide">New
                                            Password</label>
                                        <input type="password" id="new_password" name="new_password"
                                            class="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm font-medium text-gray-700 outline-none transition-all font-mono"
                                            placeholder="••••••••">
                                    </div>
                                    <div>
                                        <label
                                            class="block text-xs font-bold text-gray-600 mb-2 uppercase tracking-wide">Confirm
                                            Password</label>
                                        <input type="password" id="confirm_password" name="confirm_password"
                                            class="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm font-medium text-gray-700 outline-none transition-all font-mono"
                                            placeholder="••••••••">
                                    </div>
                                </div>

                                <button type="submit"
                                    class="btn-save w-full text-white py-3 rounded-xl font-bold text-sm shadow-lg flex items-center justify-center gap-2 cursor-pointer mt-6">
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"
                                            d="M5 13l4 4L19 7" />
                                    </svg>
                                    Update Password
                                </button>
                            </form>
                        </div>
                    </div>

                    <!-- Preferences Tab -->
                    <div id="tab-preferences" class="tab-content hidden animate-slide-in">
                        <div class="glass-card rounded-2xl p-8 transition-all duration-300">
                            <div class="flex items-center gap-3 mb-8 pb-4 border-b border-gray-200">
                                <div
                                    class="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 class="text-xl font-bold text-gray-800">System Preferences</h3>
                                    <p class="text-xs text-gray-500 mt-0.5">Customize your experience</p>
                                </div>
                            </div>

                            <div class="space-y-6">
                                <div class="flex items-center justify-between py-4 border-b border-gray-100">
                                    <div>
                                        <h4 class="text-sm font-bold text-gray-700">Push Notifications</h4>
                                        <p class="text-xs text-gray-500 mt-1">Receive real-time alerts and updates</p>
                                    </div>
                                    <label class="relative inline-flex items-center cursor-pointer">
                                        <input type="checkbox" id="pref-notifications" class="sr-only peer">
                                        <div
                                            class="w-14 h-7 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-emerald-500">
                                        </div>
                                    </label>
                                </div>

                                <div class="flex items-center justify-between py-4 opacity-50 cursor-not-allowed">
                                    <div>
                                        <h4 class="text-sm font-bold text-gray-700">Dark Mode</h4>
                                        <p class="text-xs text-gray-500 mt-1">Switch to dark theme</p>
                                    </div>
                                    <span
                                        class="px-3 py-1 bg-gray-100 rounded-lg text-[10px] font-bold text-gray-500 uppercase">Coming
                                        Soon</span>
                                </div>
                            </div>

                            <div class="flex justify-end mt-8">
                                <button type="button" id="save-pref-btn"
                                    class="btn-save text-white px-8 py-3 rounded-xl font-bold text-sm shadow-lg flex items-center gap-2 cursor-pointer">
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"
                                            d="M5 13l4 4L19 7" />
                                    </svg>
                                    Save Preferences
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- RIGHT: Profile Card (1/3 width) -->
                <div class="lg:col-span-1">
                    <div class="glass-card rounded-2xl p-8 sticky top-24 transition-all duration-300">
                        <div class="text-center">
                            <div class="relative inline-block mb-6">
                                <div id="settings-avatar-preview"
                                    class="w-32 h-32 rounded-full border-4 border-emerald-100 shadow-xl overflow-hidden bg-transparent flex items-center justify-center text-emerald-600 text-4xl font-black transition-all duration-300">
                                    AD
                                </div>
                                <label for="settings-pic-input"
                                    class="absolute bottom-0 right-0 w-10 h-10 bg-emerald-500 text-white rounded-full flex items-center justify-center cursor-pointer shadow-lg hover:bg-emerald-600 transition-all border-4 border-white">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </label>
                                <input type="file" id="settings-pic-input" class="hidden" accept="image/*">
                            </div>

                            <h2 class="text-2xl font-black text-gray-800 sidebar-user-name mb-2">Admin User</h2>
                            <p class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4"
                                id="settings-user-role">System Administrator</p>

                            <div class="space-y-3 pt-4 border-t border-gray-200">
                                <div class="flex items-center justify-center gap-2 text-gray-600">
                                    <svg class="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                    </svg>
                                    <span class="text-xs font-medium" id="settings-user-email">admin@dole.gov.ph</span>
                                </div>
                                <div class="flex items-center justify-center gap-2">
                                    <span class="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                                    <span class="text-xs font-bold text-emerald-600">Active</span>
                                </div>
                            </div>
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