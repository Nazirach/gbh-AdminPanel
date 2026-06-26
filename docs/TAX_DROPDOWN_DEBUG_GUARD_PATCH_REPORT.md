# TAX_DROPDOWN_DEBUG_GUARD_PATCH_REPORT

## Summary
Patch untuk mengatasi runtime error:
- **Uncaught ReferenceError: debugTaxReport is not defined**

Error terjadi karena bagian fallback dropdown pajak melakukan guard debug dengan variabel global `debugTaxReport` yang tidak didefinisikan.

## Files changed (allowed)
- `resources/views/reports/tax-reports.blade.php`
- `docs/TAX_DROPDOWN_DEBUG_GUARD_PATCH_REPORT.md`

## What was changed
Pada blok fallback dropdown:
- Marker **`TAX_DROPDOWN_SECTION_FALLBACK_FIX`** dipertahankan.
- Ditambahkan marker **`TAX_DROPDOWN_DEBUG_GUARD_FIX`**.
- Guard debug diubah dari:
  - `if (debugTaxReport) { ... }`
  menjadi:
  - `if (isTaxReportDebugEnabled()) { traceTaxReport(...) }`

Dengan demikian, debug trace hanya berjalan saat query param `debug_tax_report=1` ada, tanpa menimbulkan ReferenceError.

## How to test
1. Buka:
   - `/report/tax?debug_tax_report=1&v=tax-dropdown-debug-guard-01`
2. Pastikan:
   - Tidak ada error `ReferenceError: debugTaxReport is not defined` di console.
   - Dropdown **Select Taxes / Pilih Pajak** terisi (contoh: opsi **IVA** muncul) sesuai data tax pada `sectionId` cookie.

## Cache/Build steps
Jalankan:
- `php artisan view:clear`
- `php artisan optimize:clear`
- `php artisan view:cache`

