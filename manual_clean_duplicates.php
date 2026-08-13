<?php
/**
 * Manual Beneficiary Duplicate Removal, Renaming & ROX ID Re-sequencer
 * 
 * Takes specified Preserved, Delete, and Rename ID(s), updates names,
 * deletes requested IDs, re-sequences remaining active beneficiaries' ROX IDs
 * (ROX-RD-ESIG-YYYY-NNNN), and resets PostgreSQL auto-increment sequences.
 * 
 * Usage options:
 * 1. CLI arguments: php manual_clean_duplicates.php --preserve=2 --delete=13,14 --rename="77:MAYA NIÑA D. CORDERO"
 * 2. Or edit the $preserveIds, $deleteIds, and $renames arrays below before running.
 */

require_once __DIR__ . '/config/db.php';

echo "\n========================================================================\n";
echo " 🛠️ MANUAL BENEFICIARY REMOVAL, RENAME & RE-SEQUENCER\n";
echo "========================================================================\n\n";

try {
    $pdo = getDbConnection();
    $isSupabase = useSupabase();

    // START: parseArgs - Parses CLI arguments for --preserve, --delete, and --rename
    $parseArgs = function () {
        $preserve = [];
        $delete = [];
        $renames = [];
        foreach ($_SERVER['argv'] ?? [] as $arg) {
            if (str_starts_with($arg, '--preserve=')) {
                $val = substr($arg, 11);
                $preserve = array_filter(array_map('intval', explode(',', $val)));
            }
            if (str_starts_with($arg, '--delete=')) {
                $val = substr($arg, 9);
                $delete = array_filter(array_map('intval', explode(',', $val)));
            }
            if (str_starts_with($arg, '--rename=')) {
                $val = substr($arg, 9);
                $pairs = explode(';', $val);
                foreach ($pairs as $pair) {
                    if (strpos($pair, ':') !== false) {
                        list($idStr, $newName) = explode(':', $pair, 2);
                        $idInt = (int)trim($idStr);
                        if ($idInt > 0 && trim($newName) !== '') {
                            $renames[$idInt] = trim($newName);
                        }
                    }
                }
            }
        }
        return [
            'preserve' => array_values($preserve),
            'delete' => array_values($delete),
            'renames' => $renames
        ];
    };
    // END: parseArgs - Parses CLI arguments for --preserve, --delete, and --rename

    $cliArgs = $parseArgs();

    // Editable fallback arrays if CLI arguments are not provided:
    $preserveIds = !empty($cliArgs['preserve']) ? $cliArgs['preserve'] : [];
    $deleteIds   = !empty($cliArgs['delete']) ? $cliArgs['delete'] : [];
    $renameMap   = !empty($cliArgs['renames']) ? $cliArgs['renames'] : [];

    echo "[CONFIG] Preserved ID(s): " . (empty($preserveIds) ? "None specified" : implode(', ', $preserveIds)) . "\n";
    echo "[CONFIG] Delete ID(s):    " . (empty($deleteIds) ? "None specified" : implode(', ', $deleteIds)) . "\n";
    echo "[CONFIG] Rename Map:      " . (empty($renameMap) ? "None specified" : json_encode($renameMap)) . "\n\n";

    if (empty($deleteIds) && empty($renameMap)) {
        echo "⚠️ No Delete or Rename parameters specified! Please provide --delete=ID1,ID2 --rename=\"ID:NEW_NAME\" or edit the script.\n";
        echo "Example usage:\n  php manual_clean_duplicates.php --preserve=2 --delete=13 --rename=\"77:MAYA NIÑA D. CORDERO\"\n\n";
        exit(0);
    }

    // Step 0: Apply Renames if requested
    if (!empty($renameMap)) {
        echo "[STEP 0] Renaming beneficiaries...\n";
        $renameStmt = $pdo->prepare("UPDATE beneficiaries SET full_name = :name WHERE beneficiary_id = :bid");
        foreach ($renameMap as $bid => $newName) {
            $renameStmt->execute(['name' => $newName, 'bid' => $bid]);
            echo "   ✏️ Renamed ID #{$bid} => '{$newName}'\n";
        }
        echo "\n";
    }

    // Step 1: Verify records before deleting
    if (!empty($deleteIds)) {
        echo "[STEP 1] Verifying records to delete and preserve...\n";
        $inClause = implode(',', array_fill(0, count($deleteIds), '?'));
        $checkStmt = $pdo->prepare("SELECT beneficiary_id, gip_id, full_name FROM beneficiaries WHERE beneficiary_id IN ($inClause)");
        $checkStmt->execute($deleteIds);
        $toDelete = $checkStmt->fetchAll(PDO::FETCH_ASSOC);

        foreach ($toDelete as $rec) {
            echo "   ❌ TARGET TO DELETE: ID #{$rec['beneficiary_id']} | GIP: {$rec['gip_id']} | Name: {$rec['full_name']}\n";
        }

        if (!empty($preserveIds)) {
            $inPreserve = implode(',', array_fill(0, count($preserveIds), '?'));
            $checkPresStmt = $pdo->prepare("SELECT beneficiary_id, gip_id, full_name FROM beneficiaries WHERE beneficiary_id IN ($inPreserve)");
            $checkPresStmt->execute($preserveIds);
            $toPreserve = $checkPresStmt->fetchAll(PDO::FETCH_ASSOC);

            foreach ($toPreserve as $rec) {
                echo "   ✅ PRESERVED RECORD: ID #{$rec['beneficiary_id']} | GIP: {$rec['gip_id']} | Name: {$rec['full_name']}\n";
            }
        }

        echo "\n[STEP 2] Deleting requested record(s)...\n";
        $delLogsStmt = $pdo->prepare("DELETE FROM absorption_logs WHERE beneficiary_id IN ($inClause)");
        $delLogsStmt->execute($deleteIds);

        $delResLogsStmt = $pdo->prepare("DELETE FROM resigned_logs WHERE beneficiary_id IN ($inClause)");
        $delResLogsStmt->execute($deleteIds);

        $delStmt = $pdo->prepare("DELETE FROM beneficiaries WHERE beneficiary_id IN ($inClause)");
        $delStmt->execute($deleteIds);

        echo "   -> Successfully deleted " . $delStmt->rowCount() . " beneficiary record(s).\n\n";
    }

    echo "[STEP 3] Re-sequencing ROX IDs (gip_id) for all remaining active records...\n";

    $sqlRem = "SELECT beneficiary_id, gip_id, full_name, created_at, start_date FROM beneficiaries WHERE is_archived = " . ($isSupabase ? "FALSE" : "0") . " ORDER BY start_date ASC, created_at ASC, beneficiary_id ASC";
    $stmtRem = $pdo->prepare($sqlRem);
    $stmtRem->execute();
    $remaining = $stmtRem->fetchAll(PDO::FETCH_ASSOC);

    $pdo->beginTransaction();

    $tempSql = $isSupabase
        ? "UPDATE beneficiaries SET gip_id = 'TEMP-' || beneficiary_id WHERE is_archived = FALSE"
        : "UPDATE beneficiaries SET gip_id = CONCAT('TEMP-', beneficiary_id) WHERE is_archived = 0";
    $pdo->exec($tempSql);

    $yearSequences = [];
    $updateGipStmt = $pdo->prepare("UPDATE beneficiaries SET gip_id = :new_gip_id WHERE beneficiary_id = :bid");

    $resequencedCount = 0;
    foreach ($remaining as $rec) {
        $year = !empty($rec['start_date']) ? date('Y', strtotime($rec['start_date'])) : date('Y', strtotime($rec['created_at']));
        if (!isset($yearSequences[$year])) {
            $yearSequences[$year] = 1;
        } else {
            $yearSequences[$year]++;
        }

        $newGipId = sprintf('ROX-RD-ESIG-%s-%04d', $year, $yearSequences[$year]);
        $updateGipStmt->execute(['new_gip_id' => $newGipId, 'bid' => $rec['beneficiary_id']]);
        
        if ($rec['gip_id'] !== $newGipId) {
            echo "   -> Updated ID #{$rec['beneficiary_id']} ({$rec['full_name']}): '{$rec['gip_id']}' => '{$newGipId}'\n";
            $resequencedCount++;
        }
    }

    $pdo->commit();

    echo "   -> Re-sequenced {$resequencedCount} ROX ID(s).\n\n";

    echo "[STEP 4] Resetting PostgreSQL Primary Key sequences...\n";

    if ($isSupabase) {
        try {
            $pdo->exec("SELECT setval(pg_get_serial_sequence('beneficiaries', 'beneficiary_id'), COALESCE((SELECT MAX(beneficiary_id) FROM beneficiaries), 1))");
            echo "   -> beneficiaries_beneficiary_id_seq reset to MAX(beneficiary_id).\n";
        } catch (Throwable $e) {
            echo "   -> Could not reset beneficiaries sequence: " . $e->getMessage() . "\n";
        }

        try {
            $pdo->exec("SELECT setval(pg_get_serial_sequence('offices', 'id'), COALESCE((SELECT MAX(id) FROM offices), 1))");
            echo "   -> offices_id_seq reset to MAX(id).\n";
        } catch (Throwable $e) {
            echo "   -> Could not reset offices sequence: " . $e->getMessage() . "\n";
        }
    }

    echo "\n========================================================================\n";
    echo " 🎉 MANUAL REMOVAL, RENAME & RE-SEQUENCING COMPLETED SUCCESSFULLY!\n";
    echo "========================================================================\n\n";

} catch (Throwable $e) {
    if (isset($pdo) && $pdo->inTransaction()) {
        $pdo->rollBack();
    }
    echo "\n❌ ERROR ENCOUNTERED: " . $e->getMessage() . "\n";
    echo "File: " . $e->getFile() . " (Line " . $e->getLine() . ")\n";
    echo $e->getTraceAsString() . "\n";
    exit(1);
}
