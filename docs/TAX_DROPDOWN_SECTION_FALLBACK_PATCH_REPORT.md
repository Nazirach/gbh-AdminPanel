# TAX DROPDOWN SECTION FALLBACK PATCH REPORT

## Ringkasan masalah
Dropdown `Pilih Pajak` pada `/report/tax` tetap kosong walaupun audit browser membuktikan collection `tax` memiliki dokumen aktif untuk `sectionId = 6285dcf511651`.

## File yang diubah
- `resources/views/reports/tax-reports.blade.php`

## Patch yang dilakukan
1. Logic lama untuk scope tetap dipertahankan:
   - `admin_commission`
   - `vendor_subscription`
2. Ditambahkan helper pembentuk label option:
   - `buildTaxOptionText(data)`
3. Ditambahkan fallback marker:
   - `TAX_DROPDOWN_SECTION_FALLBACK_FIX`
4. Jika hasil dropdown masih kosong setelah logic scope lama, code sekarang menjalankan fallback query:
   - `database.collection('tax').where('enable', '==', true).where('sectionId', '==', section_id)`
5. Option fallback dibangun dari field defensif:
   - `data.id || doc.id`
   - `data.title || data.name || data.taxTitle`
   - `data.tax`
   - `data.type`
6. Fallback sengaja hanya memakai `sectionId`, sesuai hasil audit data nyata.
7. Guard missing section tidak diubah.
8. Logic generate report tidak diubah.

## Debug trace
Saat `debug_tax_report` aktif, fallback menulis trace aman:
- `[TAX_REPORT_TRACE] tax dropdown fallback used`
Dengan payload:
- `sectionId`
- `count`

## Hasil artisan command
- `php artisan view:clear` : sukses
- `php artisan optimize:clear` : sukses
- `php artisan view:cache` : sukses

## Catatan keamanan
- Tidak ada API key/secret yang dicetak.
- Tidak ada perubahan Firestore data.
- Tidak ada perubahan database.
- Tidak ada perubahan logic generate report.

## Cara test browser
1. Buka:
   - `/report/tax?debug_tax_report=1&v=tax-dropdown-fallback-01`
2. Pastikan cookie aktif:
   - `section_id = 6285dcf511651`
   - `service_type = delivery-service`
3. Buka dropdown `Pilih Pajak`
4. Pastikan option `IVA` muncul
5. Jika debug aktif, cek console untuk trace fallback count.
