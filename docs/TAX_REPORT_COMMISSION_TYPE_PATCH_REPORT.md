# TAX_REPORT_COMMISSION_TYPE_PATCH_REPORT

## Audit Proof (confirmed)
- Audit proof count: **10**
- totalExpectedCommission: **187.405**

## Root Cause
Tax Report commission calculation was not compatible with real Firestore values of `adminCommissionType`.

Real values observed in Firestore include multiple string variants beyond the UI code’s single check (e.g. `percentage`):
- **Percent** (also `%`, `percent`, `percentage`)
- **Fixed** (also `fix`, `flat`, etc.)

Because the code only compared against `'percentage'`, valid Firestore values were treated as “fixed/other”, producing wrong totals (UI Tax Report showing $0.00 fields).

## Patch Summary
1. Added normalization helper to unify `adminCommissionType` values.
2. Updated all admin commission calculations in `tax-reports.blade.php` to use normalized commission type.
3. Debug trace added only when `debug_tax_report=1` using existing trace functions.

### Patched Helper (JS)
Added near the calculation helpers in:
- `resources/views/reports/tax-reports.blade.php`

```js
function normalizeCommissionType(value) {
    const v = String(value || '').trim().toLowerCase();
    if (['percent', 'percentage', '%'].includes(v)) return 'percent';
    if (['fixed', 'fix', 'flat'].includes(v)) return 'fixed';
    return v;
}
```

### Intended Calculation
- `commissionBase = max(0, subtotal - discount)`
- If normalized type is `percent`:
  - `adminCommission = commissionBase * adminCommission / 100`
- If normalized type is `fixed`:
  - `adminCommission = adminCommission` (fixed value)

(Percent “included commission” behavior is preserved from the prior implementation.)

## Files Changed
- `resources/views/reports/tax-reports.blade.php`

## Test / Verification Instructions
1. Reproduce the audit context (as confirmed):
   - cookie `service_type = delivery-service`
   - section Restaurants `6285ddbfd9598`
   - collection `vendor_orders`
   - order status filter `Order Completed`
   - ensure completed orders exist and audit count matches **10**
2. Expected result:
   - Admin Commission total should match **187.405**
   - UI should no longer show `$0.00` for the admin commission-driven tax outcomes.
3. Clear caches / views:
   - `php artisan optimize:clear`
   - `php artisan view:clear`
   - `php artisan view:cache`
4. Run browser verification:
   - If needed, enable debug trace by adding `?debug_tax_report=1` to the tax report URL.


