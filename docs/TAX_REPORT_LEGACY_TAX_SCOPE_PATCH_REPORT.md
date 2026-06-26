# TAX_REPORT_LEGACY_TAX_SCOPE_PATCH_REPORT

## Root cause
Legacy tax documents exist with `scope` missing/undefined. The tax report currently filters Admin Commission taxes with a strict check:

- apply tax only when `tax.scope === 'admin_commission'`

When legacy Firestore tax documents have `scope` as `undefined`, the check rejects them. As a result, Admin Commission-driven tax is not calculated (shown as `$0.00`), even though Admin Commission itself is non-zero.

## Proof
From confirmed audit context:
- Restaurants section_id = `6285ddbfd9598`
- service_type = `delivery-service`
- vendor_orders has 23 completed orders in August 2023
- Admin Commission shown in UI = **$234.80**
- Total Pajak Akhir remains **$0.00**
- Active tax documents exist for Restaurants:
  - **IGST**
  - **GST**
- Both GST/IGST tax docs have **scope undefined**

This combination implies the taxes are present but filtered out due to the strict `tax.scope !== 'admin_commission'` logic.

## Patch summary
**Goal:** Support legacy tax documents with missing scope *only* for Admin Commission calculation.

### 1) Add helper
Added a normalization helper to derive a usable scope for legacy documents:

```js
function normalizeTaxScope(tax, fallbackScope) {
    const rawScope = String(tax && tax.scope ? tax.scope : '').trim();
    if (rawScope) return rawScope;
    return fallbackScope || '';
}
```

### 2) Admin Commission tax filtering fix (summary report)
In the Admin Commission tax calculation only:
- replaced strict check
  - `if (tax.scope !== 'admin_commission') return;`
- with normalized scope check:
  - `const taxScope = normalizeTaxScope(tax, 'admin_commission');`
  - `if (taxScope !== 'admin_commission') return;`

### 3) Admin Commission tax filtering fix (detailed report)
Applied the same normalization logic to the detailed Admin Commission report tax calculation (the history modal table).

### 4) Debug trace (safe, behind existing flag)
Under the existing `traceTaxReport` debugging system (`?debug_tax_report=1`), added per-tax debug traces only for Admin Commission scope decisions, including:
- tax id/title
- raw scope
- normalized scope
- source = `adminCommission`
- applied/rejected reason

### 5) Explicit non-scope fallback rule
No fallback is applied to:
- `vendor_subscription`
- `platformFee`

They remain strict as before.

## Test instruction
1. Clear Laravel/view caches:
   - `php artisan optimize:clear`
   - `php artisan view:clear`
   - `php artisan view:cache`

2. Open the tax report UI with the confirmed context:
   - cookie `service_type = delivery-service`
   - Restaurants section_id = `6285ddbfd9598`
   - date range covering August 2023
   - ensure completed orders exist and count matches expectations

3. Enable debug trace for verification:
   - append `?debug_tax_report=1` to the tax report URL
   - confirm console logs show GST/IGST with:
     - raw scope = `''`/undefined
     - normalized scope = `admin_commission`
     - applied reason = “legacy scope fallback applied for admin_commission”

4. Expected result:
   - Admin Commission total remains **$234.80**
   - Admin Commission-driven tax total (Total Pajak Akhir) becomes non-zero (instead of `$0.00`).

