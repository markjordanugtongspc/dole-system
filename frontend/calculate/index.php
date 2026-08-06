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
            if (theme === 'dark') document.documentElement.classList.add('dark');
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

            <section id="wage-calculator">
                <input id="wage-csv-input" class="sr-only" type="file" accept=".csv">
                <div class="mb-4 flex items-center">
                    <button id="wage-show-dtr" type="button" class="inline-flex cursor-pointer items-center gap-2 border border-royal-blue bg-white px-4 py-2.5 text-[0.6875rem] font-black uppercase tracking-widest text-royal-blue transition-colors hover:bg-blue-50 focus:outline-none focus:ring-4 focus:ring-royal-blue/15 active:bg-blue-100 dark:bg-slate-900 dark:hover:bg-blue-950/50">
                        <svg class="h-4 w-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.5L19 9.5V19a2 2 0 01-2 2zM13 3v6h6" /></svg>
                        <span>DTR Form</span>
                    </button>
                    <button id="wage-show-calculator" type="button" class="ms-auto hidden cursor-pointer items-center gap-2 border border-royal-blue bg-white px-4 py-2.5 text-[0.6875rem] font-black uppercase tracking-widest text-royal-blue transition-colors hover:bg-blue-50 focus:outline-none focus:ring-4 focus:ring-royal-blue/15 active:bg-blue-100 dark:bg-slate-900 dark:hover:bg-blue-950/50">
                        <svg class="h-4 w-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>
                        <span>Back to Calculator</span>
                    </button>
                </div>

                <div id="wage-calculator-view" class="grid gap-4 lg:grid-cols-[minmax(0,1.25fr)_minmax(380px,0.75fr)] lg:gap-6">
                <div class="border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
                    <div class="border-b border-slate-200 bg-slate-50 px-4 py-4 dark:border-slate-800 dark:bg-slate-900 sm:px-6">
                        <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                            <div>
                                <h2 class="text-sm font-black uppercase tracking-wider text-slate-900 dark:text-white">Work Details</h2>
                                <p class="mt-1 text-[0.6875rem] text-slate-500 dark:text-slate-400">Attendance changes update the salary estimate instantly.</p>
                            </div>
                            <div class="sm:text-right">

                                <button id="wage-csv-button" type="button" class="inline-flex w-full cursor-pointer items-center justify-center gap-2 bg-royal-blue px-4 py-2.5 text-[0.6875rem] font-black uppercase tracking-widest text-white transition-colors hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-royal-blue/20 active:bg-blue-900 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto">
                                    <svg class="h-4 w-4 shrink-0" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 16V4m0 0L7.5 8.5M12 4l4.5 4.5M5 14v4a2 2 0 002 2h10a2 2 0 002-2v-4" />
                                    </svg>
                                    <span>Upload CSV</span>
                                </button>
                                <p id="wage-csv-status" class="mt-1.5 min-h-4 text-[0.625rem] font-semibold text-slate-500 dark:text-slate-400" role="status" aria-live="polite"></p>
                            </div>
                        </div>
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
                            <label><span class="mb-2 block text-[0.625rem] font-black uppercase tracking-widest text-slate-500">Late Minutes</span><input id="wage-late-minutes" type="number" inputmode="decimal" min="0" step="0.01" value="0" class="block w-full border border-slate-300 p-3 text-lg font-black outline-none focus:border-amber-500 dark:border-slate-700 dark:bg-slate-950 dark:text-white"></label>
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
                </div>

                <div id="wage-dtr-view" class="hidden">
                    <div class="grid gap-4 lg:grid-cols-[minmax(0,1.5fr)_minmax(330px,0.5fr)] lg:gap-6">
                    <div class="border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
                    <div class="border-b border-slate-200 bg-slate-50 px-4 py-4 dark:border-slate-800 dark:bg-slate-900 sm:px-6">
                        <div class="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
                            <div>
                                <span class="text-[0.5625rem] font-black uppercase tracking-[0.18em] text-royal-blue">Hybrid Attendance Encoding</span>
                                <h2 class="mt-1 text-lg font-black uppercase tracking-wide text-slate-900 dark:text-white sm:text-2xl">Daily Time Record</h2>
                                <p class="mt-1 max-w-2xl text-[0.6875rem] leading-relaxed text-slate-500 dark:text-slate-400">Upload the finalized DTR, review the imported attendance, then select Regular or Compressed for each applicable work day. Late and absence deductions are calculated automatically.</p>
                            </div>
                            <div class="space-y-2 lg:text-right">

                                <button id="dtr-csv-button" type="button" class="inline-flex w-full cursor-pointer items-center justify-center gap-2 bg-royal-blue px-4 py-2.5 text-[0.6875rem] font-black uppercase tracking-widest text-white transition-colors hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-royal-blue/20 active:bg-blue-900 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto">
                                    <svg class="h-4 w-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 16V4m0 0L7.5 8.5M12 4l4.5 4.5M5 14v4a2 2 0 002 2h10a2 2 0 002-2v-4" /></svg>
                                    <span>Import DTR CSV</span>
                                </button>
                                <p id="dtr-csv-status" class="min-h-4 text-[0.625rem] font-semibold text-slate-500 dark:text-slate-400" role="status" aria-live="polite"></p>
                            </div>
                        </div>
                    </div>

                    <div class="space-y-5 p-4 sm:p-6">
                        <div class="grid gap-4 md:grid-cols-3">
                            <label class="block md:col-span-1">
                                <span class="mb-2 block text-[0.625rem] font-black uppercase tracking-widest text-slate-500">Employee Name</span>
                                <input id="dtr-employee-name" type="text" readonly tabindex="-1" placeholder="Imported from CSV" class="block w-full cursor-default border border-slate-300 bg-slate-100 p-3 text-sm font-bold uppercase text-slate-900 outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-white">
                            </label>
                            <label class="block">
                                <span class="mb-2 block text-[0.625rem] font-black uppercase tracking-widest text-slate-500">Month</span>
                                <input id="dtr-month" type="month" readonly tabindex="-1" class="block w-full cursor-default border border-slate-300 bg-slate-100 p-3 text-sm font-bold text-slate-900 outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-white">
                            </label>
                            <label class="block">
                                <span class="mb-2 block text-[0.625rem] font-black uppercase tracking-widest text-slate-500">Payroll Cutoff</span>
                                <select id="dtr-cutoff" disabled class="block w-full cursor-default border border-slate-300 bg-slate-100 p-3 text-sm font-bold text-slate-900 opacity-100 outline-none disabled:text-slate-900 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:disabled:text-white">
                                    <option value="first">1st–15th</option>
                                    <option value="second">16th–End of Month</option>
                                </select>
                            </label>
                        </div>

                        <div class="grid grid-cols-2 border border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-950 sm:grid-cols-4">
                            <div class="border-b border-r border-slate-200 p-3 text-center dark:border-slate-700 sm:border-b-0"><span class="block text-[0.5rem] font-black uppercase tracking-widest text-slate-400">Recorded Work Days</span><strong id="dtr-total-days" class="mt-1 block text-base text-slate-900 dark:text-white">0</strong></div>
                            <div class="border-b border-slate-200 p-3 text-center dark:border-slate-700 sm:border-b-0 sm:border-r"><span class="block text-[0.5rem] font-black uppercase tracking-widest text-slate-400">Absences</span><strong id="dtr-total-absent" class="mt-1 block text-base text-philippine-red">0</strong></div>
                            <div class="border-r border-slate-200 p-3 text-center dark:border-slate-700"><span class="block text-[0.5rem] font-black uppercase tracking-widest text-slate-400">Late / Undertime</span><strong id="dtr-total-late" class="mt-1 block text-base text-amber-700 dark:text-amber-300">0m</strong></div>
                            <div class="p-3 text-center"><span class="block text-[0.5rem] font-black uppercase tracking-widest text-slate-400">Estimated Net Salary</span><strong id="dtr-net-salary" class="mt-1 block text-base text-royal-blue dark:text-golden-yellow">₱0.00</strong></div>
                        </div>

                        <div class="flex flex-col gap-3 border border-slate-200 bg-slate-50 p-3 dark:border-slate-700 dark:bg-slate-950 sm:flex-row sm:items-center sm:justify-between">
                            <div class="flex flex-wrap gap-2">
                                <button id="dtr-set-regular" type="button" class="cursor-pointer border border-royal-blue bg-white px-3 py-2 text-[0.625rem] font-black uppercase tracking-wider text-royal-blue hover:bg-blue-50 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-slate-900">Set Selected Regular</button>
                                <button id="dtr-set-compressed" type="button" class="cursor-pointer border border-amber-500 bg-white px-3 py-2 text-[0.625rem] font-black uppercase tracking-wider text-amber-700 hover:bg-amber-50 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-slate-900 dark:text-amber-300">Set Selected Compressed</button>
                            </div>
                            <p id="dtr-action-status" class="text-[0.625rem] font-semibold text-slate-500 dark:text-slate-400" role="status" aria-live="polite">Select rows using the first column. R = Regular, C = Compressed.</p>
                        </div>

                        <div class="overflow-x-auto border border-slate-300 dark:border-slate-700">
                            <table class="w-full min-w-[1130px] border-collapse text-center text-xs">
                                <thead class="bg-royal-blue text-white">
                                    <tr>
                                        <th rowspan="2" scope="col" class="w-12 border border-blue-800 px-2 py-2"><input id="dtr-select-all" type="checkbox" aria-label="Select all visible DTR rows" class="h-4 w-4 cursor-pointer accent-golden-yellow"></th>
                                        <th rowspan="2" scope="col" class="w-28 border border-blue-800 px-2 py-2 text-[0.5625rem] font-black uppercase tracking-wider">Work Type</th>
                                        <th rowspan="2" scope="col" class="w-14 border border-blue-800 px-2 py-2 text-[0.5625rem] font-black uppercase tracking-wider">Day</th>
                                        <th colspan="2" scope="colgroup" class="border border-blue-800 px-2 py-2 text-[0.625rem] font-black uppercase tracking-widest">AM</th>
                                        <th colspan="2" scope="colgroup" class="border border-blue-800 px-2 py-2 text-[0.625rem] font-black uppercase tracking-widest">PM</th>
                                        <th colspan="2" scope="colgroup" class="border border-blue-800 px-2 py-2 text-[0.625rem] font-black uppercase tracking-widest">Late / Undertime</th>
                                        <th rowspan="2" scope="col" class="w-36 border border-blue-800 px-2 py-2 text-[0.5625rem] font-black uppercase tracking-wider">Attendance</th>
                                    </tr>
                                    <tr>
                                        <th scope="col" class="border border-blue-800 px-2 py-2 text-[0.5625rem] font-bold uppercase">Arrival</th>
                                        <th scope="col" class="border border-blue-800 px-2 py-2 text-[0.5625rem] font-bold uppercase">Departure</th>
                                        <th scope="col" class="border border-blue-800 px-2 py-2 text-[0.5625rem] font-bold uppercase">Arrival</th>
                                        <th scope="col" class="border border-blue-800 px-2 py-2 text-[0.5625rem] font-bold uppercase">Departure</th>
                                        <th scope="col" class="w-16 border border-blue-800 px-2 py-2 text-[0.5625rem] font-bold uppercase">Hours</th>
                                        <th scope="col" class="w-16 border border-blue-800 px-2 py-2 text-[0.5625rem] font-bold uppercase">Minutes</th>
                                    </tr>
                                </thead>
                                <tbody id="dtr-rows" class="divide-y divide-slate-200 dark:divide-slate-700">
                                    <?php for ($dtrRow = 0; $dtrRow < 16; $dtrRow++): ?>
                                    <tr data-dtr-row data-row-index="<?= $dtrRow ?>" class="bg-white even:bg-slate-50 dark:bg-slate-900 dark:even:bg-slate-950/60">
                                        <td class="border-r border-slate-200 p-1.5 dark:border-slate-700"><input data-dtr-select type="checkbox" aria-label="Select DTR day" class="h-4 w-4 cursor-pointer accent-royal-blue"></td>
                                        <td class="border-r border-slate-200 p-1.5 dark:border-slate-700">
                                            <div class="mx-auto grid w-20 grid-cols-2 border border-slate-300 dark:border-slate-600">
                                                <label class="cursor-pointer" title="Regular Work"><input data-dtr-schedule class="peer sr-only" type="radio" name="dtr-schedule-<?= $dtrRow ?>" value="normal" checked><span class="flex h-8 items-center justify-center text-[0.625rem] font-black text-slate-500 peer-checked:bg-royal-blue peer-checked:text-white">R</span></label>
                                                <label class="cursor-pointer border-l border-slate-300 dark:border-slate-600" title="Compressed Work"><input data-dtr-schedule class="peer sr-only" type="radio" name="dtr-schedule-<?= $dtrRow ?>" value="compressed"><span class="flex h-8 items-center justify-center text-[0.625rem] font-black text-slate-500 peer-checked:bg-amber-500 peer-checked:text-slate-950">C</span></label>
                                            </div>
                                        </td>
                                        <th data-dtr-day scope="row" class="border-r border-slate-200 px-2 py-2 font-black text-slate-900 dark:border-slate-700 dark:text-white"></th>
                                        <td class="border-r border-slate-200 p-1.5 dark:border-slate-700"><input data-dtr-time="amIn" type="time" step="60" readonly tabindex="-1" aria-label="Imported AM arrival" class="w-full min-w-28 cursor-default border border-slate-200 bg-slate-100 px-2 py-2 text-center font-bold text-slate-900 outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-white"></td>
                                        <td class="border-r border-slate-200 p-1.5 dark:border-slate-700"><input data-dtr-time="amOut" type="time" step="60" readonly tabindex="-1" aria-label="Imported AM departure" class="w-full min-w-28 cursor-default border border-slate-200 bg-slate-100 px-2 py-2 text-center font-bold text-slate-900 outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-white"></td>
                                        <td class="border-r border-slate-200 p-1.5 dark:border-slate-700"><input data-dtr-time="pmIn" type="time" step="60" readonly tabindex="-1" aria-label="Imported PM arrival" class="w-full min-w-28 cursor-default border border-slate-200 bg-slate-100 px-2 py-2 text-center font-bold text-slate-900 outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-white"></td>
                                        <td class="border-r border-slate-200 p-1.5 dark:border-slate-700"><input data-dtr-time="pmOut" type="time" step="60" readonly tabindex="-1" aria-label="Imported PM departure" class="w-full min-w-28 cursor-default border border-slate-200 bg-slate-100 px-2 py-2 text-center font-bold text-slate-900 outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-white"></td>
                                        <td data-dtr-hours class="border-r border-slate-200 px-2 py-2 font-black text-slate-700 dark:border-slate-700 dark:text-slate-200">—</td>
                                        <td data-dtr-minutes class="border-r border-slate-200 px-2 py-2 font-black text-slate-700 dark:border-slate-700 dark:text-slate-200">—</td>
                                        <td class="p-1.5">
                                            <select data-dtr-status disabled aria-label="Imported attendance status" class="w-full cursor-default border border-slate-200 bg-slate-100 px-2 py-2 text-[0.625rem] font-bold uppercase text-slate-700 opacity-100 outline-none disabled:text-slate-700 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200 dark:disabled:text-slate-200">
                                                <option value="">Not Recorded</option>
                                                <option value="work">Work Day</option>
                                                <option value="absent">Absent</option>
                                                <option value="skip">Holiday / Memo</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <?php endfor; ?>
                                </tbody>
                            </table>
                        </div>

                        <div class="flex flex-col gap-3 border-l-4 border-royal-blue bg-blue-50 p-4 dark:bg-blue-950/30 sm:flex-row sm:items-center sm:justify-between">
                            <p class="text-[0.6875rem] font-medium leading-relaxed text-blue-900 dark:text-blue-100"><strong class="font-black uppercase">Automated review:</strong> Times and attendance come directly from the imported CSV and cannot be edited here. Choose only the applicable work type; rest days, late minutes, absences, and deductions are recalculated automatically.</p>
                            <button id="dtr-reset" type="button" class="shrink-0 cursor-pointer border border-slate-300 bg-white px-4 py-2.5 text-[0.625rem] font-black uppercase tracking-widest text-slate-600 hover:border-philippine-red hover:text-philippine-red dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">Clear DTR</button>
                        </div>
                    </div>
                    </div>

                    <aside class="self-start border border-blue-800 bg-royal-blue text-white shadow-xl lg:sticky lg:top-20">
                        <div class="border-b border-white/15 px-4 py-4 sm:px-6">
                            <div class="flex items-center justify-between gap-3"><span class="text-[0.625rem] font-black uppercase tracking-[0.18em] text-blue-100">Estimated GIP Salary</span><span class="bg-white/10 px-2 py-1 text-[0.5625rem] font-bold uppercase">Hybrid DTR</span></div>
                            <div id="dtr-estimated-net" aria-live="polite" class="mt-3 break-all text-4xl font-black tracking-tight text-golden-yellow sm:text-5xl">₱0.00</div>
                            <p class="mt-2 text-[0.625rem] font-semibold uppercase tracking-wider text-blue-100">Mixed schedule salary after DTR deductions</p>
                        </div>
                        <div class="space-y-3 px-4 py-5 text-xs sm:px-6">
                            <div class="flex justify-between border-b border-white/10 pb-3"><span class="text-blue-100">Gross Salary</span><strong id="dtr-estimated-gross">₱0.00</strong></div>
                            <div class="flex justify-between border-b border-white/10 pb-3"><span class="text-blue-100">Absence Deduction</span><strong id="dtr-estimated-absence" class="text-red-200">- ₱0.00</strong></div>
                            <div class="flex justify-between border-b border-white/10 pb-3"><span class="text-blue-100">Late Deduction</span><strong id="dtr-estimated-late" class="text-amber-200">- ₱0.00</strong></div>
                            <div class="flex justify-between border-b border-white/10 pb-3"><span class="font-bold">Total Deductions</span><strong id="dtr-estimated-deductions">- ₱0.00</strong></div>
                            <div class="grid grid-cols-2 gap-2 pt-1">
                                <div class="bg-white/10 p-3"><span class="block text-[0.5rem] font-black uppercase text-blue-200">Paid Days</span><strong id="dtr-estimated-paid-days" class="mt-1 block">0 days</strong></div>
                                <div class="bg-white/10 p-3"><span class="block text-[0.5rem] font-black uppercase text-blue-200">Schedule Mix</span><strong id="dtr-estimated-schedule" class="mt-1 block">0 Regular</strong><span id="dtr-estimated-schedule-detail" class="mt-0.5 block text-[0.5625rem] text-blue-100">0 Compressed</span></div>
                            </div>
                        </div>
                    </aside>
                    </div>
                </div>
            </section>

            <div class="mt-4 border-l-4 border-amber-400 bg-amber-50 p-4 text-[0.6875rem] leading-relaxed text-amber-900 dark:bg-amber-950/30 dark:text-amber-200 sm:mt-6"><strong class="font-black uppercase">Calculation note:</strong> Normal Work runs Monday to Friday from 8:00 AM to 5:00 PM at ₱500.00 per day. Compressed Work runs Monday to Thursday from 7:00 AM to 6:00 PM at ₱625.00 per day, preserving the same base salary across each preset. Both use ₱62.50 per hour and ₱1.0417 per late minute (displayed as ₱1.04). Edit working days when the actual payroll calendar differs.</div>
        </div>
    </main>
</body>
</html>