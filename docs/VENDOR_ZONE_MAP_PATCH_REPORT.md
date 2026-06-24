# VENDOR + ZONE MAP PATCH REPORT

## File yang diubah
- resources/views/map/multivendor.blade.php
- resources/views/zone/create.blade.php
- resources/views/zone/edit.blade.php

## Ringkasan patch

### 1. Zone polygon guard
Pada halaman create dan edit zone ditambahkan normalizer aman untuk area polygon:
- `isValidLatLngPoint(point)`
- `normalizeZonePoint(point)`
- `normalizeZoneArea(area)`

Patch ini memastikan:
- area kosong atau format rusak tidak langsung membuat script crash
- titik dengan format `lat/lng` maupun `lat/lon` tetap bisa diproses
- polygon hanya dipakai bila ditemukan minimal 3 titik valid
- jika area invalid, UI error lama tetap dipakai dan ditambah `console.warn` untuk audit ringan

Field Firestore yang tetap dipertahankan tanpa perubahan struktur:
- `id`
- `name`
- `latitude`
- `longitude`
- `area`
- `publish`

### 2. Vendor/store marker non-destruktif pada `/map/multivendor`
Ditambahkan query read-only ke collection `vendors` tanpa menghapus driver live tracking lama.

Koordinat vendor dibaca secara defensif dari beberapa kemungkinan field:
- `location.latitude / location.longitude`
- `latitude / longitude`
- `coordinates.latitude / coordinates.longitude`
- `lat / lng`

Perilaku patch:
- vendor dengan koordinat valid akan diberi marker tambahan
- vendor dengan koordinat invalid akan di-skip
- popup hanya menampilkan nama vendor/store
- driver marker lama tetap dipertahankan
- ditambahkan counter console:
  - `Vendor markers rendered`
  - `Vendor markers skipped`

## Bagian yang sengaja tidak diubah
- logic live tracking driver yang sudah ada
- struktur query driver/order yang lama
- route dan permission map/zone
- credential Firebase / Google Maps
- database dan data Firestore
- hardcode API key

## Cara test manual
1. Buka `/map/multivendor`
2. Pastikan marker driver lama tetap muncul seperti sebelumnya
3. Cek console browser untuk counter:
   - `Vendor markers rendered`
   - `Vendor markers skipped`
4. Pastikan jika collection `vendors` kosong, halaman tetap tidak crash
5. Buka create zone
6. Coba input area kosong / koordinat tidak valid dan pastikan muncul warning/error tanpa crash total
7. Buka edit zone dengan data lama yang area-nya tidak rapi dan pastikan halaman tetap bisa terbuka
8. Simpan zone valid dan pastikan minimal 3 titik masih menjadi syarat polygon

## Risiko tersisa
- Beberapa dokumen vendor lama mungkin menyimpan koordinat pada field lain di luar 4 pola fallback yang sekarang didukung
- Jika data area lama tersimpan dalam bentuk sangat tidak konsisten, polygon akan di-skip secara aman, tetapi tetap perlu audit data jika ingin hasil visual sempurna
- Patch ini fokus mencegah crash dan menambah marker vendor, belum melakukan normalisasi data cloud

## Update tambahan
- fixed google ready guard pada zone create/edit
- fixed drawingManager ready guard sebelum mode polygon dipanggil
- test ulang target utama: `/zone/create`

## Runtime hardening update
- Runtime Cloud menemukan `google.maps.LatLng is not a constructor`
- Runtime Cloud menemukan `panTo` undefined
- Runtime Cloud menemukan `DrawingManager unavailable`
- Patch mengganti `LatLng` constructor menjadi literal object
- Patch menambahkan `safeMapPanTo`
- Patch membungkus `DrawingManager` constructor dengan `try/catch`
