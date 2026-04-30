<?php
require_once __DIR__ . '/../../config/vite.php';

$id = $_GET['id'] ?? '';
$type = $_GET['type'] ?? 'dtr';
$name = $_GET['name'] ?? 'Beneficiary';

ob_start();
?>
<div id="export-content">
    <?php if ($type === 'dtr' || $type === 'both'): ?>
    <div class="mb-10">
        <h3 class="text-lg font-black uppercase tracking-widest text-royal-blue border-b-2 border-royal-blue inline-block pb-1 mb-4">
            Daily Time Records (DTR)
        </h3>
        <p class="text-sm font-bold text-gray-700 uppercase tracking-wider mb-4">
            BENEFICIARY: <span class="text-black font-black"><?php echo htmlspecialchars($name); ?></span>
        </p>

        <table class="w-full text-xs text-left border-collapse mt-4">
            <thead class="text-white bg-royal-blue font-bold uppercase tracking-wider text-[10px]">
                <tr class="text-center">
                    <th class="px-3 py-2 border border-royal-blue w-[10%]">NO.</th>
                    <th class="px-3 py-2 border border-royal-blue w-[30%]">RECORD DATE</th>
                    <th class="px-3 py-2 border border-royal-blue w-[30%]">WEEKDAY</th>
                    <th class="px-3 py-2 border border-royal-blue w-[30%]">STATUS</th>
                </tr>
            </thead>
            <tbody id="dtr-log-table-body" class="text-[10px] font-medium text-gray-700">
                <tr><td colspan="4" class="px-4 py-8 text-center text-gray-500 font-bold italic">Loading DTR logs...</td></tr>
            </tbody>
        </table>
    </div>
    <?php endif; ?>

    <?php if ($type === 'ar' || $type === 'both'): ?>
    <div class="mb-6 <?php echo $type === 'both' ? 'mt-12 pt-8 border-t-2 border-dashed border-gray-200' : ''; ?>">
        <h3 class="text-lg font-black uppercase tracking-widest text-orange-600 border-b-2 border-orange-600 inline-block pb-1 mb-4">
            Accomplishment Reports (AR)
        </h3>
        <p class="text-sm font-bold text-gray-700 uppercase tracking-wider mb-4">
            BENEFICIARY: <span class="text-black font-black"><?php echo htmlspecialchars($name); ?></span>
        </p>

        <table class="w-full text-xs text-left border-collapse mt-4">
            <thead class="text-white bg-orange-600 font-bold uppercase tracking-wider text-[10px]">
                <tr class="text-center">
                    <th class="px-3 py-2 border border-orange-600 w-[10%]">NO.</th>
                    <th class="px-3 py-2 border border-orange-600 w-[30%]">PERIOD</th>
                    <th class="px-3 py-2 border border-orange-600 w-[30%]">DATE SUBMITTED</th>
                    <th class="px-3 py-2 border border-orange-600 w-[30%]">STATUS</th>
                </tr>
            </thead>
            <tbody id="ar-log-table-body" class="text-[10px] font-medium text-gray-700">
                <tr><td colspan="4" class="px-4 py-8 text-center text-gray-500 font-bold italic">Loading AR logs...</td></tr>
            </tbody>
        </table>
    </div>
    <?php endif; ?>
</div>

<script>
    document.addEventListener('DOMContentLoaded', async () => {
        const beneficiaryId = "<?php echo htmlspecialchars($id); ?>";
        const type = "<?php echo htmlspecialchars($type); ?>";
        
        async function fetchLogs(logType, targetId) {
            try {
                let userId = '';
                try { const u = JSON.parse(localStorage.getItem('user')); if(u && u.id) userId = `&user_id=${u.id}`; } catch(e) {}
                const logRes = await fetch(`../../api/logs.php?type=${logType}&gip_id=${encodeURIComponent(beneficiaryId)}${userId}`);
                const result = await logRes.json();
                const tbody = document.getElementById(targetId);
                if (!tbody) return;

                let html = '';
                if (result.success && result.logs && result.logs.length > 0) {
                    result.logs.forEach((log, index) => {
                        const statusColors = {
                            'VERIFIED': 'text-green-600', 'COMPLETED': 'text-green-600',
                            'REJECTED': 'text-red-600', 'DECLINED': 'text-red-600', 'PENDING': 'text-gray-500'
                        };
                        const sColor = statusColors[log.status] || 'text-gray-500';
                        
                        if (logType === 'dtr') {
                            let displayDate = log.date;
                            if (displayDate) {
                                const d = new Date(displayDate);
                                if (!isNaN(d)) displayDate = d.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }).toUpperCase();
                            }
                            html += `
                                <tr class="bg-white border-b border-gray-200">
                                    <td class="px-3 py-2 border border-gray-200 text-center font-bold">${index + 1}</td>
                                    <td class="px-3 py-2 border border-gray-200 text-center font-black text-royal-blue">${displayDate}</td>
                                    <td class="px-3 py-2 border border-gray-200 text-center font-bold uppercase">${log.day || '-'}</td>
                                    <td class="px-3 py-2 border border-gray-200 text-center font-black uppercase ${sColor}">${log.status}</td>
                                </tr>`;
                        } else {
                            let displayDate = log.date;
                            if (displayDate) {
                                const d = new Date(displayDate);
                                if (!isNaN(d)) displayDate = d.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }).toUpperCase();
                            }
                            html += `
                                <tr class="bg-white border-b border-gray-200">
                                    <td class="px-3 py-2 border border-gray-200 text-center font-bold">${index + 1}</td>
                                    <td class="px-3 py-2 border border-gray-200 text-center font-black text-orange-600">${log.period || '-'}</td>
                                    <td class="px-3 py-2 border border-gray-200 text-center font-bold uppercase">${displayDate}</td>
                                    <td class="px-3 py-2 border border-gray-200 text-center font-black uppercase ${sColor}">${log.status}</td>
                                </tr>`;
                        }
                    });
                } else {
                    html = `<tr><td colspan="4" class="px-4 py-8 text-center text-gray-400 font-bold uppercase tracking-widest border border-gray-200">No ${logType.toUpperCase()} records found</td></tr>`;
                }
                tbody.innerHTML = html;
            } catch (error) {
                console.error(`Error fetching ${logType} logs:`, error);
                const tbody = document.getElementById(targetId);
                if (tbody) tbody.innerHTML = `<tr><td colspan="4" class="px-4 py-8 text-center text-red-500 font-bold border border-gray-200">Error loading ${logType} data</td></tr>`;
            }
        }

        if (type === 'dtr' || type === 'both') await fetchLogs('dtr', 'dtr-log-table-body');
        if (type === 'ar' || type === 'both') await fetchLogs('ar', 'ar-log-table-body');

        // Populate signatures and print
        setTimeout(() => {
            const prepEl = document.getElementById('print-prepared-by');
            const appEl = document.getElementById('print-approved-by');
            if (prepEl) prepEl.textContent = localStorage.getItem('ldn_export_prepared') || '';
            if (appEl) appEl.textContent = localStorage.getItem('ldn_export_approved') || '';
            
            window.focus();
            window.print();
        }, 1500); // Increased timeout significantly to ensure CSS and data are fully loaded in iframe
    });
</script>
<?php
$content = ob_get_clean();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Export Logs - <?php echo htmlspecialchars($name); ?></title>
    <?php vite('backend/js/main.js'); ?>
</head>
<body class="bg-white print:bg-white overflow-y-auto">
    <?php include __DIR__ . '/../components/printTemplate.php'; ?>
</body>
</html>
