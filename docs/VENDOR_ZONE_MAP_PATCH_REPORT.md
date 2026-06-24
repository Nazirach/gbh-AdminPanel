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

## Cloud InfoWindow follow-up
- Cloud test setelah `7435c75` menemukan `google.maps.InfoWindow is not a constructor`
- Patch menambahkan `createSafeInfoWindow`
- Patch mengganti `InfoWindow` constructor dengan safe wrapper
- Zone `DrawingManager` warning sudah tertangani dan tidak crash

## Cloud map readiness follow-up
- Cloud runtime menemukan `google.maps.MapTypeId.ROADMAP` undefined pada init map online
- Patch menambahkan fallback `getGoogleRoadmapTypeId()` ke string `roadmap`
- Patch menambahkan `waitForMapReady(...)` agar marker dan vendor marker tidak dieksekusi sebelum map siap
- Patch menambahkan guard aman saat legend didorong ke `google.maps.ControlPosition.LEFT_BOTTOM`


## Zone Google Maps runtime stabilization
- Zone create/edit sekarang memakai `toGoogleLatLngLiteral(...)` untuk center map agar tidak bergantung pada `new google.maps.LatLng(...)`
- Zone create/edit sekarang memakai `createSafeInfoWindow(...)` agar popup helper tidak membuat runtime crash bila constructor `InfoWindow` belum tersedia
- Control position dan map type style sekarang memakai helper fallback agar `ControlPosition` atau `MapTypeControlStyle` yang belum siap tidak menjatuhkan halaman
- Search bounds/icon helper sekarang memakai wrapper aman untuk `LatLngBounds`, `Size`, dan `Point`
- Tujuan patch ini adalah menjaga form `/zone/create` dan `/zone/edit` tetap bisa dipakai walau library Google Maps cloud belum lengkap saat script pertama kali dieksekusi


## Zone polygon tool activation follow-up
- Test nyata menunjukkan tombol shape `+` tidak merespons walau peta sudah tampil
- Akar masalah: `drawingManager` belum siap saat tombol polygon diklik, sehingga hanya warning dan tidak masuk mode gambar
- Patch menambahkan `waitForGoogleDrawingReady(...)` untuk menunggu library drawing siap
- Patch menambahkan `initializeOnlineDrawingManager()` agar inisialisasi drawing manager bisa dipanggil ulang dengan aman
- Patch membuat tombol hand/polygon menunggu lalu mengaktifkan drawing manager, bukan langsung gagal diam
- Patch mempertahankan alur simpan lama; error simpan sebelumnya berasal dari koordinat yang belum pernah terbentuk karena polygon gagal aktif


## Zone drawing scope fix
- Cloud test `zone-drawing-cloud-03` menemukan `initializeOnlineDrawingManager is not defined`
- Akar masalah: handler tombol polygon berada di scope luar, sementara `initializeOnlineDrawingManager` sebelumnya dideklarasikan di dalam `initMap()`
- Patch mempromosikan `initializeOnlineDrawingManager` menjadi variabel fungsi di scope halaman agar bisa dipanggil dari handler tombol shape
- Efek yang dituju: klik tombol `+` bisa benar-benar mengaktifkan mode polygon, bukan gagal karena ReferenceError


## Google Maps DrawingManager deprecation fallback
- Runtime cloud terbaru memastikan akar masalah utama: `google.maps.drawing.DrawingManager` sudah tidak tersedia pada Maps JavaScript API v3.65
- Karena itu mode polygon online tidak bisa lagi mengandalkan DrawingManager bawaan Google
- Patch menambahkan fallback manual polygon mode berbasis `google.maps.Polygon` dan click listener pada map
- Klik tombol `+` sekarang akan mencoba DrawingManager dulu jika tersedia; jika tidak, otomatis pindah ke manual polygon mode
- Manual mode mengubah cursor ke `crosshair`, menangkap klik titik di peta, dan membentuk polygon setelah titik cukup
- Tombol hand akan mematikan mode gambar manual tanpa merusak peta dasar
