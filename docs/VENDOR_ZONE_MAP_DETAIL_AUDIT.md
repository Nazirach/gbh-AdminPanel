# VENDOR ZONE MAP DETAIL AUDIT

## Ringkasan

Audit detail source menunjukkan bahwa route peta dan zona sudah tersedia, tetapi `/map/multivendor` saat ini lebih banyak memuat logika driver live tracking daripada peta toko/vendor.

## Route Terkait

- /map/multivendor
- /zone
- /zone/create
- /zone/edit/{id}

## File Terkait

- routes/web.php
- app/Http/Controllers/MapController.php
- app/Http/Controllers/ZoneController.php
- resources/views/map/multivendor.blade.php
- resources/views/zone/index.blade.php
- resources/views/zone/create.blade.php
- resources/views/zone/edit.blade.php
- resources/views/layouts/app.blade.php

## Alur Data Vendor Map

Temuan:
- Route /map/multivendor sudah ada.
- MapController hanya return view map.multivendor.
- Di view map.multivendor ditemukan query ke collection users dengan:
  - role = driver
  - serviceType = delivery-service
- Belum terlihat query utama ke collection vendors untuk marker toko/vendor pada hasil audit source.

Kesimpulan:
- Nama halaman multivendor belum sepenuhnya sesuai fungsi vendor map.
- Halaman ini lebih dekat ke live tracking driver.

## Alur Data Zone Map

Temuan:
- Zone index membaca collection zone.
- Zone create menyimpan:
  - id
  - name
  - latitude
  - longitude
  - area
  - publish
- Zone edit membaca zone berdasarkan id.
- Field area dipakai sebagai polygon.
- Field latitude dan longitude dipakai sebagai titik tengah/default area.

Kesimpulan:
- Zone map sudah cukup matang.
- Patch kecil zone lebih aman dibanding langsung mengubah multivendor map.

## Field Koordinat yang Ditemukan

Vendor map / multivendor:
- driver.location.latitude
- driver.location.longitude
- default_latitude dari cookie
- default_longitude dari cookie

Zone:
- latitude
- longitude
- area
- area.*.latitude
- area.*.longitude
- coordinates hidden input

Layout:
- default_latitude
- default_longitude
- getUserZoneId(address_lng, address_lat)
- zone.area
- geopoint.longitude
- geopoint.latitude

## Risiko Error

1. /map/multivendor berisiko membingungkan karena nama vendor tetapi data driver.
2. Marker vendor belum jelas karena query vendors belum terlihat kuat.
3. Zone create/edit memakai kombinasi Google Maps dan Leaflet logic, sehingga perlu patch hati-hati.
4. Firestore data audit belum lengkap karena credential Firebase tidak tersedia lokal.
5. Google Maps sudah memakai fallback dari layout, tetapi halaman map tetap perlu diuji di browser setelah deploy.

## Rekomendasi Patch Kecil

Patch aman fase berikutnya:

1. Jangan ubah flow driver live tracking dulu.
2. Tambahkan section/card baru di /map/multivendor untuk vendor marker.
3. Query vendors secara read-only di client:
   - collection vendors
   - ambil dokumen yang punya location / latitude / longitude valid
4. Tambahkan fallback:
   - jika vendor tidak punya koordinat, skip marker
   - jangan crash
5. Untuk zone:
   - tambahkan guard jika zone.area kosong atau bukan array
   - jangan render polygon invalid
6. Tambahkan report:
   - berapa vendor marker berhasil dirender
   - berapa vendor dilewati karena koordinat kosong
   - berapa zone polygon berhasil dirender

## Rencana Test Manual Setelah Patch

1. Buka /map/multivendor
2. Pastikan map tampil
3. Pastikan tidak ada NoApiKeys / InvalidKey
4. Pastikan marker driver lama tetap ada
5. Pastikan marker vendor muncul bila data tersedia
6. Buka /zone
7. Buka /zone/create
8. Buka /zone/edit/{id}
9. Pastikan polygon tidak crash
10. Pastikan console tidak menampilkan red error

## Kesimpulan

Paling aman untuk fase build berikutnya adalah:
- Zone guard patch
- Vendor marker patch di /map/multivendor
- Tidak menyentuh data Firestore
- Tidak membuat Command Center Map baru dulu sampai data vendor dan zone terbukti stabil
