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
<div id="print-area" class="hidden print:block font-sans text-black relative w-full h-full bg-white">

    <!-- Watermark Background (Fixed and Centered) -->
    <div class="fixed inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <img src="../../frontend/images/logo/doleiligan.png"
            class="w-[60%] h-auto opacity-[0.04] grayscale blur-[2px] transform scale-110" alt="DOLE Watermark">
    </div>

    <!-- Header -->
    <header class="relative z-10 flex items-center justify-between border-b-2 border-royal-blue pb-4 mb-8">
        <div class="flex items-center gap-5">
            <img src="../../frontend/images/logo/doleiligan.png"
                class="h-24 w-auto drop-shadow-sm bg-white rounded-full p-1 object-contain" alt="DOLE Logo">
            <div>
                <h1 class="text-3xl font-black text-royal-blue uppercase tracking-tighter leading-none mb-1">Department
                    of Labor and Employment</h1>
                <h2 class="text-sm font-bold text-gray-600 uppercase tracking-[0.2em]">Lanao del Norte Provincial Field
                    Office</h2>
                <p class="text-xs text-gray-500 font-medium mt-1">0048 Purok 3, Tibanga, Iligan City, Lanao del Norte
                </p>
            </div>
        </div>
        <div class="text-right">
            <h3 class="text-xl font-black text-philippine-red uppercase tracking-tight">GIP Monitoring Report</h3>
            <div class="mt-2 text-xs font-semibold text-gray-500 bg-gray-100 px-3 py-1 rounded-full inline-block">
                Generated: <span class="text-gray-800">
                    <?php echo date('F d, Y h:i A'); ?>
                </span>
            </div>
        </div>
    </header>

    <!-- Main Content Injection -->
    <main class="relative z-10 min-h-[50vh] text-sm leading-normal">
        <?php echo $content ?? '<!-- No Content Loaded -->'; ?>
    </main>

    <!-- Footer -->
    <footer class="fixed bottom-0 left-0 w-full text-center border-t border-gray-800 pt-3 pb-4 bg-white z-20">
        <p class="text-[10px] text-gray-900 font-bold uppercase tracking-wider flex items-center justify-center gap-1">
            &copy; <span class="auto-year"></span> System
            <span class="opacity-28">Developed by</span>
            <span class="text-royal-blue font-black opacity-23">Mark Jordan Ugtong</span>
            <span class="mx-1 text-gray-400">|</span>
            Exclusive Property of DOLE Iligan City
        </p>
    </footer>
</div>