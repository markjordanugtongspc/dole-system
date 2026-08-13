<?php
/**
 * Supabase Beneficiary Duplicate Cleanup, Data Merger & ROX ID Re-sequencer
 * 
 * 1. Scans all active beneficiaries and groups duplicates using word-sorted normalized full_name matching.
 * 2. Always preserves the OLDEST record (earliest created_at / lowest beneficiary_id).
 * 3. Merges any missing data (contact number, address, birthday, office, etc.) from newer duplicates into the oldest preserved record.
 * 4. Deletes newer duplicate records from Supabase.
 * 5. Re-sequences all remaining active beneficiaries' ROX IDs sequentially (ROX-RD-ESIG-YYYY-NNNN).
 * 6. Resets PostgreSQL primary key auto-increment sequences (beneficiaries_beneficiary_id_seq, offices_id_seq).
 */

require_once __DIR__ . '/config/db.php';

echo "\n========================================================================\n";
echo " 🚀 SUPABASE BENEFICIARY AUTOMATED DUPLICATE CLEANUP & DATA MERGER\n";
echo "========================================================================\n\n";

try {
    $pdo = getDbConnection();
    $isSupabase = useSupabase();

    echo "[DB INFO] Connected to: " . ($isSupabase ? "Supabase PostgreSQL" : "MySQL") . "\n";
    echo "[STEP 1] Scanning for duplicate beneficiary records by normalized Full Name...\n\n";

    // START: normalizeName - Strips punctuation, sorts name words alphabetically for robust duplicate matching
    $normalizeName = function ($name) {
        $clean = strtoupper(trim((string)$name));
        $clean = str_replace(['.', ','], ' ', $clean);
        $words = array_filter(explode(' ', $clean));
        sort($words);
        return implode(' ', $words);
    };
    // END: normalizeName - Strips punctuation, sorts name words alphabetically for robust duplicate matching

    // Fetch all non-archived beneficiaries
    $sql = "SELECT * FROM beneficiaries WHERE is_archived = " . ($isSupabase ? "FALSE" : "0") . " ORDER BY created_at ASC, beneficiary_id ASC";
    $stmt = $pdo->prepare($sql);
    $stmt->execute();
    $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo "[INFO] Total active records in database: " . count($rows) . "\n";

    // Group by normalized name
    $groups = [];
    foreach ($rows as $row) {
        $norm = $normalizeName($row['full_name']);
        if ($norm === '') continue;
        $groups[$norm][] = $row;
    }

    $deletedIds = [];
    $mergeUpdates = [];
    $duplicateGroupsCount = 0;

    $fieldsToMerge = [
        'contact_number', 'address', 'birthday', 'age', 'gender_id',
        'education', 'start_date', 'end_date', 'designation',
        'designated_beneficiary', 'relationship_to_assured', 'office_id'
    ];

    foreach ($groups as $normName => $records) {
        if (count($records) > 1) {
            $duplicateGroupsCount++;
            echo "------------------------------------------------------------------------\n";
            echo "🔍 DUPLICATE GROUP FOUND: '{$records[0]['full_name']}' (" . count($records) . " records)\n";
            
            // Oldest record is $records[0] because array was sorted by created_at ASC, beneficiary_id ASC
            $kept = $records[0];
            echo "   ✅ PRESERVED (Oldest): ID #{$kept['beneficiary_id']} | GIP: {$kept['gip_id']} | Name: {$kept['full_name']} | Contact: " . ($kept['contact_number'] ?: 'EMPTY') . " | Created: {$kept['created_at']}\n";

            // Check if any newer duplicate has data missing in the preserved record
            $updatePayload = [];
            for ($i = 1; $i < count($records); $i++) {
                $dup = $records[$i];
                $deletedIds[] = $dup['beneficiary_id'];
                echo "   ❌ TO DELETE (Newer Duplicate): ID #{$dup['beneficiary_id']} | GIP: {$dup['gip_id']} | Name: {$dup['full_name']} | Contact: " . ($dup['contact_number'] ?: 'EMPTY') . " | Created: {$dup['created_at']}\n";

                foreach ($fieldsToMerge as $field) {
                    $keptVal = trim((string)($kept[$field] ?? ''));
                    $dupVal  = trim((string)($dup[$field] ?? ''));
                    
                    if (($keptVal === '' || $keptVal === 'NULL') && ($dupVal !== '' && $dupVal !== 'NULL')) {
                        $updatePayload[$field] = $dup[$field];
                        $kept[$field] = $dup[$field]; // reflect in local copy for subsequent duplicates
                        echo "      💡 MERGING field '{$field}': '{$dupVal}' from ID #{$dup['beneficiary_id']} into preserved ID #{$kept['beneficiary_id']}\n";
                    }
                }
            }

            if (!empty($updatePayload)) {
                $mergeUpdates[$kept['beneficiary_id']] = $updatePayload;
            }
        }
    }

    echo "------------------------------------------------------------------------\n\n";
    echo "[SUMMARY STEP 1] Found {$duplicateGroupsCount} duplicate group(s). Total records to delete: " . count($deletedIds) . "\n\n";

    // Step 2: Merge missing data into preserved records
    if (!empty($mergeUpdates)) {
        echo "[STEP 2A] Merging data into preserved records...\n";
        foreach ($mergeUpdates as $bid => $payload) {
            $setClause = [];
            $params = ['bid' => $bid];
            foreach ($payload as $col => $val) {
                $setClause[] = "{$col} = :{$col}";
                $params[$col] = $val;
            }
            $updateSql = "UPDATE beneficiaries SET " . implode(', ', $setClause) . " WHERE beneficiary_id = :bid";
            $upStmt = $pdo->prepare($updateSql);
            $upStmt->execute($params);
            echo "   -> Merged updated fields for preserved ID #{$bid}.\n";
        }
        echo "\n";
    }

    // Step 2B: Delete duplicates
    if (count($deletedIds) > 0) {
        echo "[STEP 2B] Removing duplicate records from database...\n";
        
        $inClause = implode(',', array_fill(0, count($deletedIds), '?'));
        
        $delLogsStmt = $pdo->prepare("DELETE FROM absorption_logs WHERE beneficiary_id IN ($inClause)");
        $delLogsStmt->execute($deletedIds);

        $delResLogsStmt = $pdo->prepare("DELETE FROM resigned_logs WHERE beneficiary_id IN ($inClause)");
        $delResLogsStmt->execute($deletedIds);

        $delStmt = $pdo->prepare("DELETE FROM beneficiaries WHERE beneficiary_id IN ($inClause)");
        $delStmt->execute($deletedIds);

        echo "   -> Successfully deleted " . $delStmt->rowCount() . " duplicate beneficiary record(s).\n\n";
    } else {
        echo "[STEP 2B] No duplicate records to delete.\n\n";
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
    echo " 🎉 AUTOMATED DUPLICATE CLEANUP & DATA MERGER COMPLETED SUCCESSFULLY!\n";
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
