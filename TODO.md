# TODO

## TAX date range guard patch
- [x] Add TAX_REPORT_DATE_RANGE_GUARD_FIX helper/guards in `resources/views/reports/tax-reports.blade.php` to ensure daterangepicker picker/startDate/endDate always have valid moment fallbacks.
- [x] Update `generate_report` date extraction to use the guarded helper (avoid direct `.data('daterangepicker').startDate` reads).
- [x] (If needed) Update download/history actions to also use guarded helper so they don’t crash when date range is unset.

- [x] Create `docs/TAX_REPORT_DATE_RANGE_GUARD_PATCH_REPORT.md` describing the patch.

- [ ] Run: `php artisan view:clear`, `php artisan optimize:clear`, `php artisan view:cache`.
- [x] Run verification Select-String pattern check and git diff/status.

- [ ] Commit with message `Guard tax report date range picker` and push to origin main.

