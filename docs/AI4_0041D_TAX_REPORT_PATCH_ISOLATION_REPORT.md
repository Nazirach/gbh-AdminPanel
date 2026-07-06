# AI4-0041D TAX REPORT PATCH ISOLATION REPORT

## Status
KEEP_PATCH_ISOLATED

## File
- resources/views/reports/tax-reports.blade.php

## Perubahan Utama
- TAX_REPORT_TABLE_HEADER_CONTRAST untuk memperjelas header tabel.
- TAX_REPORT_DATERANGEPICKER_RANGES_GUARD_FIX.
- TAX_REPORT_DATE_RANGE_GUARD_FIX.
- TAX_DROPDOWN_SECTION_FALLBACK_FIX.
- TAX_DROPDOWN_DEBUG_GUARD_FIX.
- TAX_REPORT_REQUIRE_SECTION_GUARD.
- Safe trace debug melalui debug_tax_report=1.

## Prinsip Aman
- Tidak mengubah Firebase rules.
- Tidak menulis data Firestore.
- Tidak menyentuh module selector.
- Tidak menyentuh Website Panel.
