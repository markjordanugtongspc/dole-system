/**
 * Read-only smoke test for api/gip/diagnostics.php.
 * Usage: node scripts/test-gip-api.mjs [base-url]
 */

const baseUrl = (process.argv[2] || 'http://localhost').replace(/\/$/, '');
const response = await fetch(`${baseUrl}/api/gip/diagnostics.php`, {
    headers: { Accept: 'application/json' },
});
const payload = await response.json().catch(() => null);

if (!response.ok || !payload?.success) {
    console.error(JSON.stringify({ status: response.status, payload }, null, 2));
    process.exit(1);
}

console.table(payload.checks);
console.log(`GIP_DIAGNOSTIC=PASS driver=${payload.driver} beneficiaries=${payload.beneficiary_count}`);