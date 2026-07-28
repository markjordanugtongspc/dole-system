<?php
require_once __DIR__ . '/../../config/vite.php';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GIP Salary Calculator | DOLE LDNPFO</title>
    <link rel="icon" type="image/png" href="../images/logo/doleiligan.png">
    <?php vite('backend/js/main.js'); ?>
    <script>
        (function () {
            var theme = localStorage.getItem('color-theme');
            if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) document.documentElement.classList.add('dark');
        })();
    </script>
</head>
<body class="min-h-screen bg-slate-100 antialiased dark:bg-slate-950">
    <nav class="fixed top-0 z-50 w-full border-b border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <div class="flex items-center justify-between px-3 py-3 lg:px-5">
            <div class="flex items-center">
                <button data-drawer-target="top-bar-sidebar" data-drawer-toggle="top-bar-sidebar" aria-controls="top-bar-sidebar" type="button"
                    class="cursor-pointer rounded-lg p-2 text-slate-700 hover:bg-slate-100 focus:ring-4 focus:ring-slate-200 sm:hidden dark:text-white dark:hover:bg-slate-800">
                    <span class="sr-only">Open sidebar</span>
                    <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
                </button>
                <a href="../dashboard/" class="ms-2 flex items-center md:me-24">
                    <img src="../images/logo/doleiligan.png" class="me-3 h-8 rounded-full bg-white p-0.5 object-contain" alt="DOLE Logo">
                    <span class="flex flex-col">
                        <span class="text-sm font-black uppercase leading-tight tracking-tight text-royal-blue">DOLE LDNPFO</span>
                        <span class="text-[0.625rem] font-semibold uppercase tracking-wider text-slate-500">GIP Salary Calculator</span>
                    </span>
                </a>
            </div>
            <div class="flex items-center gap-2 sm:gap-3">
                <?php include __DIR__ . '/../components/notification.php'; ?>
                <button id="logoutBtn" class="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-philippine-red/20 text-philippine-red hover:bg-red-50 sm:h-auto sm:w-auto sm:rounded-lg sm:px-4 sm:py-2">
                    <svg class="h-4 w-4 sm:me-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
                    <span class="hidden text-xs font-bold uppercase sm:inline">Sign Out</span>
                </button>
            </div>
        </div>
    </nav>

    <?php include __DIR__ . '/../components/sidebar/index.php'; ?>

    <main class="min-h-screen px-3 pb-10 pt-20 sm:ml-64 sm:px-6 lg:px-10">
        <div class="mx-auto max-w-[1500px]">
            <header class="mb-5 sm:mb-8">
                <div class="mb-2 flex items-center gap-2">
                    <span class="bg-royal-blue px-2 py-1 text-[0.5625rem] font-black uppercase tracking-[0.18em] text-white">GIP Payroll Tool</span>
                    <span id="wage-header-daily-rate" class="text-[0.625rem] font-bold uppercase tracking-widest text-slate-400">₱500.00 Daily Rate</span>
                </div>
                <h1 class="text-2xl font-black tracking-tight text-slate-900 dark:text-white sm:text-4xl">Salary & Wage Calculator</h1>
                <p class="mt-2 max-w-3xl text-xs font-medium leading-relaxed text-slate-500 dark:text-slate-400 sm:text-sm">Estimate gross pay, absence deductions, late deductions, and take-home salary for a GIP beneficiary.</p>
            </header>

            <section id="wage-calculator" class="grid gap-4 lg:grid-cols-[minmax(0,1.25fr)_minmax(380px,0.75fr)] lg:gap-6">
                <div class="border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
                    <div class="border-b border-slate-200 bg-slate-50 px-4 py-4 dark:border-slate-800 dark:bg-slate-900 sm:px-6">
                        <h2 class="text-sm font-black uppercase tracking-wider text-slate-900 dark:text-white">Work Details</h2>
                        <p class="mt-1 text-[0.6875rem] text-slate-500 dark:text-slate-400">Attendance changes update the salary estimate instantly.</p>
                    </div>
                    <div class="space-y-5 p-4 sm:p-6">
                        <div class="grid gap-4 sm:grid-cols-2">
                            <label class="block">
                                <span class="mb-2 block text-[0.625rem] font-black uppercase tracking-widest text-slate-500">Pay Period</span>
                                <select id="wage-period" class="block w-full border border-slate-300 bg-white p-3 text-sm font-bold text-slate-900 outline-none focus:border-royal-blue focus:ring-2 focus:ring-royal-blue/15 dark:border-slate-700 dark:bg-slate-950 dark:text-white">
                                    <option value="semimonthly">Every 15 Days</option><option value="monthly">Monthly</option><option value="annually">Yearly / Annually</option>
                                </select>
                            </label>
                            <label class="block">
                                <span class="mb-2 block text-[0.625rem] font-black uppercase tracking-widest text-slate-500">Working Days</span>
                                <input id="wage-work-days" type="number" inputmode="numeric" min="0" max="366" step="1" value="10" class="block w-full border border-slate-300 bg-white p-3 text-sm font-bold text-slate-900 outline-none focus:border-royal-blue focus:ring-2 focus:ring-royal-blue/15 dark:border-slate-700 dark:bg-slate-950 dark:text-white">
                            </label>
                        </div>

                        <fieldset>
                            <legend class="mb-2 text-[0.625rem] font-black uppercase tracking-widest text-slate-500">Work Arrangement</legend>
                            <div class="grid grid-cols-2 gap-2">
                                <label class="cursor-pointer"><input class="peer sr-only" type="radio" name="work-schedule" value="normal" checked>
                                    <span class="flex min-h-20 flex-col justify-center border border-slate-300 px-3 py-3 peer-checked:border-royal-blue peer-checked:bg-blue-50 peer-checked:ring-2 peer-checked:ring-royal-blue/10 dark:border-slate-700 dark:bg-slate-950 dark:peer-checked:bg-blue-950/50"><strong class="text-[0.6875rem] font-black uppercase text-slate-800 dark:text-white">Normal Work</strong><span class="mt-1 text-[0.625rem] text-slate-500">Mon-Fri | 8:00 AM - 5:00 PM</span></span>
                                </label>
                                <label class="cursor-pointer"><input class="peer sr-only" type="radio" name="work-schedule" value="compressed">
                                    <span class="flex min-h-20 flex-col justify-center border border-slate-300 px-3 py-3 peer-checked:border-royal-blue peer-checked:bg-blue-50 peer-checked:ring-2 peer-checked:ring-royal-blue/10 dark:border-slate-700 dark:bg-slate-950 dark:peer-checked:bg-blue-950/50"><strong class="text-[0.6875rem] font-black uppercase text-slate-800 dark:text-white">Compressed Work</strong><span class="mt-1 text-[0.625rem] text-slate-500">Mon-Thu | 7:00 AM - 6:00 PM</span></span>
                                </label>
                            </div>
                        </fieldset>

                        <div class="grid grid-cols-2 gap-3 sm:gap-4">
                            <label><span class="mb-2 block text-[0.625rem] font-black uppercase tracking-widest text-slate-500">Absent Days</span><input id="wage-absent-days" type="number" inputmode="decimal" min="0" max="10" step="0.5" value="0" class="block w-full border border-slate-300 p-3 text-lg font-black outline-none focus:border-red-500 dark:border-slate-700 dark:bg-slate-950 dark:text-white"></label>
                            <label><span class="mb-2 block text-[0.625rem] font-black uppercase tracking-widest text-slate-500">Late Minutes</span><input id="wage-late-minutes" type="number" inputmode="numeric" min="0" step="1" value="0" class="block w-full border border-slate-300 p-3 text-lg font-black outline-none focus:border-amber-500 dark:border-slate-700 dark:bg-slate-950 dark:text-white"></label>
                        </div>

                        <div class="grid grid-cols-3 border border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-950">
                            <div class="border-r border-slate-200 p-3 text-center"><span class="block text-[0.5rem] font-black uppercase text-slate-400">Daily</span><strong id="wage-daily-rate" class="mt-1 block text-xs dark:text-white">₱500.00</strong></div>
                            <div class="border-r border-slate-200 p-3 text-center"><span class="block text-[0.5rem] font-black uppercase text-slate-400">Hourly</span><strong class="mt-1 block text-xs dark:text-white">₱62.50</strong></div>
                            <div class="p-3 text-center"><span class="block text-[0.5rem] font-black uppercase text-slate-400">Per Minute</span><strong class="mt-1 block text-xs dark:text-white">₱1.04</strong></div>
                        </div>
                        <button id="wage-reset" type="button" class="w-full cursor-pointer border border-slate-300 bg-white px-4 py-3 text-[0.6875rem] font-black uppercase tracking-widest text-slate-600 hover:border-royal-blue hover:text-royal-blue dark:border-slate-700 dark:bg-slate-950 dark:text-slate-300">Reset Calculator</button>
                    </div>
                </div>

                <aside class="self-start border border-blue-800 bg-royal-blue text-white shadow-xl lg:sticky lg:top-20">
                    <div class="border-b border-white/15 px-4 py-4 sm:px-6">
                        <div class="flex items-center justify-between gap-3"><span class="text-[0.625rem] font-black uppercase tracking-[0.18em] text-blue-100">Estimated GIP Salary</span><span id="wage-output-period" class="bg-white/10 px-2 py-1 text-[0.5625rem] font-bold uppercase">Every 15 Days</span></div>
                        <div id="wage-net-salary" aria-live="polite" class="mt-3 break-all text-4xl font-black tracking-tight text-golden-yellow sm:text-5xl lg:text-6xl">₱5,000.00</div>
                        <p class="mt-2 text-[0.625rem] font-semibold uppercase tracking-wider text-blue-100">Net salary after attendance deductions</p>
                    </div>
                    <div class="space-y-3 px-4 py-5 text-xs sm:px-6">
                        <div class="flex justify-between border-b border-white/10 pb-3"><span class="text-blue-100">Gross Salary</span><strong id="wage-gross-pay">₱5,000.00</strong></div>
                        <div class="flex justify-between border-b border-white/10 pb-3"><span class="text-blue-100">Absence Deduction</span><strong id="wage-absence-deduction" class="text-red-200">- ₱0.00</strong></div>
                        <div class="flex justify-between border-b border-white/10 pb-3"><span class="text-blue-100">Late Deduction</span><strong id="wage-late-deduction" class="text-amber-200">- ₱0.00</strong></div>
                        <div class="flex justify-between border-b border-white/10 pb-3"><span class="font-bold">Total Deductions</span><strong id="wage-total-deductions">- ₱0.00</strong></div>
                        <div class="grid grid-cols-2 gap-2 pt-1">
                            <div class="bg-white/10 p-3"><span class="block text-[0.5rem] font-black uppercase text-blue-200">Paid Days</span><strong id="wage-paid-days" class="mt-1 block">10 days</strong></div>
                            <div class="bg-white/10 p-3"><span class="block text-[0.5rem] font-black uppercase text-blue-200">Schedule</span><strong id="wage-schedule-label" class="mt-1 block">Normal Work</strong><span id="wage-schedule-hours" class="mt-0.5 block text-[0.5625rem] text-blue-100">Mon-Fri | 8:00 AM - 5:00 PM</span></div>
                        </div>
                    </div>
                </aside>
            </section>

            <div class="mt-4 border-l-4 border-amber-400 bg-amber-50 p-4 text-[0.6875rem] leading-relaxed text-amber-900 dark:bg-amber-950/30 dark:text-amber-200 sm:mt-6"><strong class="font-black uppercase">Calculation note:</strong> Normal Work runs Monday to Friday at ₱500.00 per day. Compressed Work runs Monday to Thursday at ₱625.00 per day, preserving the same base salary across each preset. Both use ₱62.50 per hour and ₱1.0417 per late minute (displayed as ₱1.04). Edit working days when the actual payroll calendar differs.</div>
        </div>
    </main>
</body>
</html>