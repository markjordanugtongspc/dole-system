<?php
/**
 * Fetch and List All Active Beneficiaries
 */

require_once __DIR__ . '/config/db.php';

echo "\n========================================================================\n";
echo " 📋 CURRENT ACTIVE BENEFICIARIES LIST (SUPABASE DATABASE)\n";
echo "========================================================================\n\n";

try {
    $pdo = getDbConnection();
    $isSupabase = useSupabase();

    // START: fetchActiveBeneficiaries - Queries active beneficiaries sorted alphabetically A to Z by full_name
    $fetchActiveBeneficiaries = function ($pdo, $isSupabase) {
        $sql = "SELECT beneficiary_id, gip_id, full_name, created_at, start_date 
                FROM beneficiaries 
                WHERE is_archived = " . ($isSupabase ? "FALSE" : "0") . " 
                ORDER BY full_name ASC, beneficiary_id ASC";
        $stmt = $pdo->prepare($sql);
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    };
    // END: fetchActiveBeneficiaries - Queries active beneficiaries sorted alphabetically A to Z by full_name

    $list = $fetchActiveBeneficiaries($pdo, $isSupabase);
    echo "[INFO] Total Active Beneficiaries: " . count($list) . "\n\n";

    printf("%-6s | %-24s | %-45s | %-22s\n", "ID", "ROX GIP ID", "FULL NAME", "CREATED AT");
    echo str_repeat("-", 105) . "\n";

    foreach ($list as $b) {
        printf(
            "%-6d | %-24s | %-45s | %-22s\n",
            $b['beneficiary_id'],
            $b['gip_id'] ?: 'N/A',
            $b['full_name'],
            $b['created_at']
        );
    }

    echo str_repeat("-", 105) . "\n\n";

} catch (Throwable $e) {
    echo "❌ ERROR: " . $e->getMessage() . "\n";
}
