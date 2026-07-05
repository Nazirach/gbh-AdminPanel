# TAX_REPORT_TABLE_HEADER_CONTRAST_REPORT

## Masalah yang ditemukan
- Header tabel pada halaman laporan pajak (`/report/tax`) masih terlalu putih/pucat sehingga teks header “Daftar Laporan Pajak / Tax Report List” sulit terbaca.
- Isi tabel dan border masih perlu tetap terlihat.

## File yang diedit
- `resources/views/reports/tax-reports.blade.php`

## CSS yang diperbaiki (patch lokal)
Ditambahkan CSS minimal di dalam `<style>` halaman yang sama untuk memperbaiki kontras header tabel tanpa mengubah struktur/logic JS.

Selector yang ditargetkan:
- `#tax_report_table_container table thead th`
- `#taxDetailContent table thead th`
- fallback: `table.table-bordered thead th`

Style utama:
- `background-color: #061b2a`
- `color: #ffffff`
- `border-color: #164b68`
- tambahan: memastikan header tidak wrap dengan `white-space: nowrap`

## Konfirmasi JS logic pajak tidak diubah
- Tidak ada perubahan pada bagian JavaScript logic pajak/perhitungan/fetch Firebase/database.
- Patch hanya berupa penambahan CSS di blok `<style>` halaman.

## Command yang dijalankan
- `php artisan optimize:clear`

## Cara uji manual
1. Buka: http://127.0.0.1:8000/report/tax
2. Tekan **Ctrl+F5** (hard refresh).
3. Pilih **tanggal** pada date range picker.
4. Pilih **metode pajak**.
5. Klik tombol **Buat Laporan**.
6. Verifikasi header tabel berwarna dark (`#061b2a`) dengan teks putih dan border tetap terlihat.

