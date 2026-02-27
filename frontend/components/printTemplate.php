<?php
/**
 * Print Template Component
 * Designed to be generic and reusable for various reports.
 * Expects $content variable to be defined before inclusion, or used as a layout structure.
 * 
 * Usage:
 * $content = "<table>...</table>";
 * include '../components/printTemplate.php';
 */
?>

<!-- Print-Only Layout -->
<div id="print-area" class="hidden print:block font-sans text-black relative w-full bg-white">

    <!-- Watermark Background -->
    <div
        class="fixed inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden opacity-[0.05] grayscale blur-[1px]">
        <img src="https://gip.dole11portal.org/images/gip2.png" class="w-[80%] h-auto object-contain"
            alt="DOLE Watermark">
    </div>

    <!-- Compact Header -->
    <header class="relative z-10 flex items-center justify-between border-b-2 border-royal-blue pb-3 mb-4 pt-2 px-4">
        <div class="flex items-center gap-4">
            <img src="../../frontend/images/logo/doleiligan.png"
                class="h-20 w-auto drop-shadow-sm bg-white rounded-full p-1 object-contain" alt="DOLE Logo">
            <div>
                <h1 class="text-2xl font-black text-royal-blue uppercase tracking-tighter leading-none mb-1">Department
                    of Labor and Employment</h1>
                <h2 class="text-[11px] font-bold text-gray-600 uppercase tracking-[0.2em]">Lanao del Norte Provincial
                    Field
                    Office</h2>
                <p class="text-[10px] text-gray-500 font-medium mt-0.5">OREDC Building, Badelles St. Extension, Barangay
                    Ubaldo Laya, Iligan City
                </p>
            </div>
        </div>
        <div class="text-right">
            <h3 class="text-lg font-black text-philippine-red uppercase tracking-tight">GIP Monitoring Report</h3>
            <div class="mt-1 text-[10px] font-semibold text-gray-500 bg-gray-100 px-3 py-0.5 rounded-full inline-block">
                Generated: <span class="text-gray-800">
                    <?php echo date('F d, Y h:i A'); ?>
                </span>
            </div>
        </div>
    </header>


    <!-- Main Content Injection -->
    <main class="relative z-10 w-full text-sm leading-normal px-4">
        <?php echo $content ?? '<!-- No Content Loaded -->'; ?>
    </main>

    <!-- Footer Signatures -->
    <div class="relative z-10 mt-8 mb-12 flex items-start justify-between w-full px-12 footer-signatures"
        style="page-break-inside: avoid;">
        <div class="flex flex-col w-[280px]">
            <p class="mb-4 text-xs font-semibold text-black italic">Prepared by:</p>
            <div class="text-center border-b border-black pb-1 px-4 w-full">
                <strong id="print-prepared-by" class="uppercase text-xs block min-h-[1.2rem]"></strong>
            </div>
            <p class="text-[9px] text-center mt-1 text-black font-medium opacity-80">Printed Name & Signature</p>
        </div>

        <div class="flex flex-col w-[280px]">
            <p class="mb-4 text-xs font-semibold text-black italic">Approved by:</p>
            <div class="text-center border-b border-black pb-1 px-4 w-full">
                <strong id="print-approved-by" class="uppercase text-xs block min-h-[1.2rem]"></strong>
            </div>
            <p class="text-[9px] text-center mt-1 text-black font-medium opacity-80">Printed Name & Signature</p>
        </div>
    </div>

    <!-- Original Footer - Fixed within margin space -->
    <footer class="text-center border-t border-gray-100 pt-3 pb-4 bg-white/95 backdrop-blur-sm z-20">
        <p class="text-[9px] text-gray-400 font-bold uppercase tracking-widest flex items-center justify-center gap-1">
            &copy; <span class="auto-year"></span> System
            <span class="opacity-50">Developed by</span>
            <span class="text-royal-blue/60 font-black">Mark Jordan Ugtong</span>
            <span class="mx-1 text-gray-200">|</span>
            Exclusive Property of DOLE Iligan City
        </p>
    </footer>
</div>