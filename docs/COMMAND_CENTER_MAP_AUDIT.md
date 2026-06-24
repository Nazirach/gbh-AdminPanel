# COMMAND CENTER MAP AUDIT

## Status Audit Awal

Audit source dilakukan dengan PowerShell tanpa mengubah kode.

File raw audit:
- docs/COMMAND_CENTER_MAP_SOURCE_AUDIT_RAW.txt

## Route Peta yang Sudah Ada

Ditemukan route peta utama:

- /map/multivendor
- /map/parcel
- /map/rental
- /map/cab

Ditemukan route zona layanan:

- /zone
- /zone/create
- /zone/edit/{id}

Artinya fondasi halaman peta dan zona sudah tersedia.

## Modul Peta yang Diaudit

### 1. Peta toko/vendor

Status awal:
- Sangat mungkin siap paling cepat.
- Data vendor/toko biasanya sudah punya alamat dan koordinat.
- Cocok untuk marker toko/vendor.

Kesiapan awal:
85 / 100

### 2. Peta driver

Status awal:
- Perlu cek field latitude/longitude driver.
- Cocok untuk marker driver jika data lokasi tersedia.
- Untuk real-time, perlu audit update lokasi dari aplikasi driver.

Kesiapan awal:
70 / 100

### 3. Peta order aktif

Status awal:
- Perlu cek field lokasi pickup/dropoff di vendor_orders.
- Cocok untuk marker order aktif jika order punya koordinat dan status.

Kesiapan awal:
75 / 100

### 4. Peta zona layanan

Status awal:
- Route dan module zone tersedia.
- Perlu cek apakah data zone memakai polygon/coordinates.
- Cocok untuk polygon area layanan.

Kesiapan awal:
80 / 100

### 5. Peta pelanggan

Status awal:
- Bisa dibangun jika user punya address/latitude/longitude.
- Harus hati-hati karena data pelanggan sensitif.
- Sebaiknya marker pelanggan dimasking atau hanya agregat.

Kesiapan awal:
60 / 100

### 6. Peta rute pengantaran

Status awal:
- Membutuhkan asal, tujuan, dan Directions API.
- Bisa dibangun setelah order aktif dan driver map stabil.

Kesiapan awal:
55 / 100

### 7. Peta kepadatan order / heatmap

Status awal:
- Bisa dibangun dari vendor_orders jika ada createdAt, status, dan lokasi.
- Cocok untuk analisis wilayah ramai.

Kesiapan awal:
75 / 100

## Kesimpulan Awal

Command Center Map layak dilanjutkan.

Urutan pembangunan terbaik:

1. Vendor/store map
2. Zone map
3. Active order map
4. Driver map
5. Order heatmap
6. Delivery route map
7. Customer map

## Rekomendasi

Tahap patch pertama sebaiknya membangun atau merapikan peta toko/vendor + zona layanan dulu, karena paling stabil dan paling rendah risiko privasi.

## Catatan

Audit Firestore runtime belum lengkap dalam laporan ini.
Perlu audit read-only berikutnya untuk menghitung field koordinat nyata pada vendors, drivers, vendor_orders, users, dan zone.

## Firestore Runtime Audit Status

Audit Firestore read-only belum dapat dijalankan dari lokal karena file credential Firebase service account tidak ditemukan di:

- storage/app/firebase/credentials.json

Pencarian lokal hanya menemukan file JSON bawaan package/vendor dan asset, bukan credential Firebase produksi.

Kesimpulan:
- Audit source map sudah selesai.
- Audit data Firestore harus dijalankan dari Laravel Cloud atau environment yang memiliki Firebase service account.
- Tidak ada perubahan pada Firestore, database, maupun source code aplikasi.

Rekomendasi:
Jalankan audit data Firestore dari Laravel Cloud Commands dengan mode read-only, atau siapkan credential lokal secara aman di luar Git.
