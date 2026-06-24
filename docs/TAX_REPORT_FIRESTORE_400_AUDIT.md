# TAX REPORT FIRESTORE 400 AUDIT

## Status

Halaman /report/tax tampil dan permission/route sudah aman.

ReportController mengarahkan type tax ke:
- resources/views/reports/tax-reports.blade.php

## Query Firestore Utama

Tax report memakai collection berdasarkan service type melalui:

- getOrdersCollectionByService(service_type)

Untuk delivery-service default:
- vendor_orders

Query order:
- status == Order Completed
- section field == section_id
- createdAt >= start_date
- createdAt <= end_date
- orderBy createdAt desc

Query subscription:
- subscription_history
- subscription_plan.type == paid
- createdAt >= start_date
- createdAt <= end_date
- orderBy createdAt desc

## Kemungkinan Penyebab Firestore 400

1. section_id kosong atau undefined tetapi tetap dipakai pada where().
2. ordersSectionField kosong atau tidak sesuai dengan collection yang dipilih.
3. createdAt pada sebagian dokumen tidak berbentuk Timestamp/Date yang konsisten.
4. Query gabungan status + section + createdAt + orderBy membutuhkan composite index Firestore.
5. Query subscription_history juga memakai nested field + createdAt + orderBy, kemungkinan butuh index.
6. Halaman membuat query hanya setelah tombol report dijalankan, tetapi request Firestore 400 juga bisa muncul saat dropdown tax/refTaxes membaca tax dengan filter sectionId kosong.

## Risiko

- Halaman report tetap tampil.
- Error 400 tidak mematikan seluruh aplikasi.
- Data tax report bisa kosong atau gagal jika query tidak valid/index belum tersedia.

## Rekomendasi Patch Kecil

1. Tambahkan guard sebelum query:
   - jika section_id kosong, jangan pakai where section.
   - jika ordersSectionField kosong, jangan pakai where field undefined.
2. Ubah filter tanggal memakai firebase.firestore.Timestamp.fromDate agar konsisten dengan vendor_orders.
3. Tambahkan try/catch yang menampilkan error manusiawi, bukan silent fail.
4. Tambahkan console.warn yang aman:
   - collection yang dipakai
   - apakah section filter dipakai
   - date range valid
   Jangan tampilkan data sensitif.
5. Untuk subscription_history, jika query index gagal, tangkap error dan tetap tampilkan order tax report.
6. Jangan menyentuh data Firestore.

## Kesimpulan

Masalah Firestore 400 pada /report/tax bukan masalah permission.
Akar kemungkinan adalah query Firestore yang terlalu ketat atau parameter kosong/index belum tersedia.
Patch berikutnya sebaiknya hanya guard query dan normalisasi tanggal.
