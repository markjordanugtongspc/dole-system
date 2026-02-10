<?php
require_once __DIR__ . '/../../config/vite.php';
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Export Data - DOLE GIP Monitoring</title>

    <?php vite('backend/js/main.js'); ?>
</head>

<body class="bg-neutral-primary-soft antialiased print:bg-white">

    <!-- Web View Navigation (Hidden on Print) -->
    <div class="no-print">
        <nav class="fixed top-0 z-50 w-full bg-white border-b border-default shadow-sm transition-none">
            <div class="px-3 py-3 lg:px-5">
                <div class="flex items-center justify-between">
                    <div class="flex items-center justify-start">
                        <button data-drawer-target="top-bar-sidebar" data-drawer-toggle="top-bar-sidebar"
                            aria-controls="top-bar-sidebar" type="button"
                            class="sm:hidden text-heading bg-transparent p-2 cursor-pointer">
                            <span class="sr-only">Open sidebar</span>
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                        <a href="#" class="flex ms-2 md:me-24 cursor-pointer items-center">
                            <img src="../../frontend/images/logo/doleiligan.png" class="h-8 me-3" alt="DOLE Logo" />
                            <div class="flex flex-col">
                                <span
                                    class="text-sm font-black text-royal-blue uppercase tracking-tight leading-tight">DOLE
                                    LDNPFO</span>
                                <span class="text-[10px] font-semibold text-gray-500 uppercase tracking-wider">Export
                                    Center</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </nav>

        <?php include __DIR__ . '/../components/sidebar/index.php'; ?>
    </div>

    <!-- Web Content Area (Hidden on Print) -->
    <div class="p-4 sm:ml-64 mt-14 no-print min-h-screen">
        <div class="p-6">

            <!-- Page Header -->
            <div class="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 class="text-3xl font-black text-heading mb-2">Export Data</h1>
                    <p class="text-sm text-body font-medium">Generate reports and print beneficiary data.</p>
                </div>

                <div class="flex gap-3">
                    <button onclick="window.showExportConfigModal(handleFilterUpdate)"
                        class="flex items-center px-5 py-2.5 bg-white text-royal-blue border border-royal-blue/20 rounded-xl shadow-sm hover:bg-blue-50 transition-all text-xs font-black uppercase tracking-wider cursor-pointer">
                        <svg class="w-4 h-4 me-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4">
                            </path>
                        </svg>
                        Configure Report
                    </button>
                    <button onclick="window.exportToExcel()"
                        class="flex items-center px-5 py-2.5 bg-emerald-600 text-white rounded-xl shadow-lg hover:bg-emerald-700 hover:-translate-y-0.5 active:scale-95 transition-all text-xs font-black uppercase tracking-wider cursor-pointer border-none">
                        <svg class="w-4 h-4 me-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"
                                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z">
                            </path>
                        </svg>
                        Export to Excel
                    </button>
                    <button onclick="window.print()"
                        class="flex items-center px-5 py-2.5 bg-royal-blue text-white rounded-xl shadow-lg hover:bg-blue-800 hover:-translate-y-0.5 transition-all text-xs font-black uppercase tracking-wider cursor-pointer">
                        <svg class="w-4 h-4 me-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z">
                            </path>
                        </svg>
                        Print Full Report
                    </button>
                </div>
            </div>

            <!-- Preview Card -->
            <div class="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden mb-8">
                <div class="p-4 border-b border-gray-100 bg-gray-50/50 flex justify-between items-center">
                    <h3 class="text-xs font-black uppercase tracking-widest text-gray-500">Live Preview</h3>
                    <div
                        class="text-[10px] font-bold text-gray-400 bg-white px-3 py-1 rounded-full border border-gray-100 italic">
                        Displaying <span id="record-count" class="text-royal-blue font-black">0</span> records</div>
                </div>

                <div class="overflow-x-auto">
                    <table class="w-full text-sm text-left text-gray-600">
                        <thead>
                            <!-- JS Will Inject Dynamic Headers Here -->
                        </thead>
                        <tbody id="web-table-body" class="divide-y divide-gray-100">
                            <!-- JS Will Inject Rows Here -->
                            <tr>
                                <td colspan="5" class="px-6 py-12 text-center text-gray-400 font-medium italic">Loading
                                    data...</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- Standard Print Trigger at bottom -->
            <div class="flex justify-center mb-12">
                <button onclick="window.print()"
                    class="group flex items-center gap-3 px-6 py-3 bg-white text-royal-blue border border-royal-blue/20 rounded-xl shadow-md hover:bg-royal-blue hover:text-white transition-all duration-300 cursor-pointer">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z">
                        </path>
                    </svg>
                    <span class="text-xs font-black uppercase tracking-widest">Print This Report</span>
                </button>
            </div>

        </div>
    </div>

    <!-- Print Template Injection -->
    <?php
    // We define the table structure for the print view here, JS will populate the body
    ob_start();
    ?>
    <table class="w-full text-xs text-left border-collapse">
        <thead class="text-white bg-royal-blue font-bold uppercase tracking-wider text-[10px]">
            <tr>
                <th class="px-2 py-2 border border-royal-blue text-center w-[8%]">ID</th>
                <th class="px-2 py-2 border border-royal-blue w-[25%]">Name</th>
                <th class="px-2 py-2 border border-royal-blue w-[20%]">Office / Assignment</th>
                <th class="px-2 py-2 border border-royal-blue w-[15%]">Position</th>
                <th class="px-2 py-2 border border-royal-blue w-[12%]">Start Date</th>
                <th class="px-2 py-2 border border-royal-blue w-[12%]">End Date</th>
                <th class="px-2 py-2 border border-royal-blue text-center w-[8%]">Status</th>
            </tr>
        </thead>
        <tbody id="print-table-body" class="text-[10px] font-medium text-gray-700">
            <!-- JS Will Inject Rows Here -->
        </tbody>
    </table>
    <?php
    $content = ob_get_clean();
    include __DIR__ . '/../components/printTemplate.php';
    ?>

    <!-- Logic is now handled by backend/js/modules/export.js via main.js bundle -->
</body>

</html>