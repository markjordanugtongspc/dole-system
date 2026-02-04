<?php
require_once __DIR__ . '/config/vite.php';
require_once __DIR__ . '/config/db.php';
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login - DOLE System</title>

    <!-- Dynamic Favicon injected by main.js -->

    <!-- Vite Assets -->
    <?php vite('backend/js/main.js'); ?>
</head>

<body class="min-h-screen flex">
    <!-- Page Loader (Hidden immediately if loaded class is present) -->
    <div id="page-loader" class="page-loader">
        <div class="loader-spinner"></div>
    </div>


    <!-- LEFT SIDE - Brand Panel -->
    <div id="left-panel" class="hidden lg:flex lg:w-1/2 bg-royal-blue items-center justify-center p-12">
        <div class="text-center max-w-md">
            <!-- Logo -->
            <div class="mb-10">
                <div
                    class="w-56 h-56 mx-auto bg-white rounded-full shadow-2xl flex items-center justify-center p-6 overflow-hidden">
                    <img src="frontend/images/logo/doleiligan.png" alt="DOLE Logo"
                        class="w-full h-full object-contain rounded-full">
                </div>
            </div>

            <!-- Brand Text -->
            <h1 class="text-5xl font-bold text-white mb-4 tracking-tight">DOLE System</h1>
            <p class="text-xl text-white/90 font-medium tracking-wide">Department of Labor and Employment</p>
            <p class="text-sm text-golden-yellow mt-4 font-bold uppercase tracking-[0.2em]">Republic of the Philippines
            </p>
        </div>
    </div>

    <!-- RIGHT SIDE - Login Form -->
    <div id="right-panel" class="flex w-full lg:w-1/2 items-center justify-center bg-white px-6 py-12">
        <div class="w-full max-w-md">

            <!-- Mobile Logo (shows only on mobile) -->
            <div class="lg:hidden text-center mb-8">
                <div
                    class="w-24 h-24 mx-auto bg-white rounded-full shadow-lg flex items-center justify-center mb-4 p-2 overflow-hidden">
                    <img src="frontend/images/logo/doleiligan.png" alt="DOLE Logo"
                        class="w-full h-full object-contain rounded-full">
                </div>
                <h2 class="text-2xl font-bold text-royal-blue">DOLE System</h2>
                <p class="text-xs text-gray-500 font-semibold">Republic of the Philippines</p>
            </div>

            <!-- Login Form Card -->
            <div class="bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
                <div class="mb-8">
                    <h2 class="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h2>
                    <p class="text-gray-600">Sign in to your account</p>
                </div>

                <form id="loginForm" class="space-y-6">
                    <!-- Username Field -->
                    <div>
                        <label for="username" class="block text-sm font-semibold text-gray-700 mb-2">
                            Username
                        </label>
                        <input type="text" id="username" name="username" required autocomplete="username"
                            class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-royal-blue focus:ring-2 focus:ring-blue-100 transition-colors outline-none"
                            placeholder="Enter your username" />
                    </div>

                    <!-- Password Field -->
                    <div>
                        <label for="password" class="block text-sm font-semibold text-gray-700 mb-2">
                            Password
                        </label>
                        <div class="relative">
                            <input type="password" id="password" name="password" required
                                autocomplete="current-password"
                                class="w-full px-4 py-3 pr-12 rounded-lg border border-gray-300 focus:border-royal-blue focus:ring-2 focus:ring-blue-100 transition-colors outline-none"
                                placeholder="Enter your password" />
                            <button type="button" id="togglePassword"
                                class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors">
                                <!-- Eye Open Icon -->
                                <svg class="eye-open w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                                <!-- Eye Closed Icon -->
                                <svg class="eye-closed w-5 h-5 hidden" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <!-- Remember Me & Forgot Password -->
                    <div class="flex items-center justify-between">
                        <div class="flex items-center">
                            <input type="checkbox" id="rememberMe" name="rememberMe"
                                class="w-4 h-4 rounded border-gray-300 text-royal-blue focus:ring-blue-100 cursor-pointer" />
                            <label for="rememberMe" class="ml-2 text-sm text-gray-700 cursor-pointer">
                                Remember me
                            </label>
                        </div>
                        <a href="#" class="text-sm font-semibold text-royal-blue hover:text-blue-700 transition-colors">
                            Forgot password?
                        </a>
                    </div>

                    <!-- Login Button -->
                    <button type="submit"
                        class="w-full bg-royal-blue text-white font-semibold py-3 rounded-lg hover:bg-blue-800 transition-colors shadow-lg hover:shadow-xl">
                        Sign In
                    </button>
                </form>

                <!-- Footer -->
                <div class="mt-8 text-center text-sm text-gray-500">
                    <p>&copy; 2026 Department of Labor and Employment</p>
                    <p class="mt-1">Republic of the Philippines</p>
                </div>
            </div>
        </div>
    </div>

</body>

</html>