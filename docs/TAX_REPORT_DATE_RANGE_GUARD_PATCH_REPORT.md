# TAX REPORT DATE RANGE GUARD PATCH REPORT

## Tujuan
Menghilangkan runtime error pada `daterangepicker.js:213`:
> `Uncaught TypeError: Cannot read properties of undefined (reading '0')`

Root cause yang ditemukan:
- Di `resources/views/reports/tax-reports.blade.php`, instance `daterangepicker` diinisialisasi tanpa `startDate/endDate/defaultDate`.
- Bagian-bagian code kemudian mengakses langsung `$('#reportrange').data('daterangepicker').startDate/endDate`.
- Pada kondisi tertentu (mis. picker belum ter-initialize / nilai start/end belum tersedia), akses tersebut menghasilkan `undefined` dan memicu error.

## Perubahan yang dilakukan (mode patch kecil & aman)
File yang diubah: `resources/views/reports/tax-reports.blade.php`

### 1) Tambah guard function (marker wajib)
Ditambahkan marker:
- `/* TAX_REPORT_DATE_RANGE_GUARD_FIX */`

Dengan fungsi:
- `getTaxReportPicker()` -> mengambil instance `daterangepicker` dari `#reportrange` secara aman.
- `getTaxReportStartEnd()` -> mengembalikan `{ startDate, endDate }` sebagai `moment()` yang valid.

Fallback default valid:
- `moment().startOf('month')`
- `moment().endOf('month')`

Jika `picker.startDate/picker.endDate` tidak ada atau tidak valid, maka fallback dipakai.

### 2) Hindari direct access startDate/endDate pada aksi kritikal
Diubah bagian-bagian yang sebelumnya mengakses langsung:
- `$('#reportrange').data('daterangepicker').startDate/endDate`

Menjadi penggunaan:
- `getTaxReportStartEnd()`

Yang di-guard:
- `generate_report`
- `downloadCSV`
- `downloadDetailedCSV`
- `downloadPDF`
- `downloadDetailedPDF`
- handler `.history-view`

## Catatan penting (sesuai permintaan)
- Tidak mengubah logic dropdown tax.
- Tidak menghapus marker:
  - `TAX_DROPDOWN_SECTION_FALLBACK_FIX`
  - `TAX_DROPDOWN_DEBUG_GUARD_FIX`
- Tidak melakukan refactor besar.

## Status
- Patch siap divalidasi menggunakan command:
  - `php artisan view:clear`
  - `php artisan optimize:clear`
  - `php artisan view:cache`

## Verifikasi yang direkomendasikan (sesuai instruksi)
Gunakan juga:
- Select-String pattern:
  - `TAX_REPORT_DATE_RANGE_GUARD_FIX|daterangepicker|startDate|endDate|moment`
- `git diff` untuk memastikan hanya file yang relevan berubah.

