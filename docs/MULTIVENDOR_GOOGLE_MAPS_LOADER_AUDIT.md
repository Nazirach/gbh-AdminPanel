# MULTIVENDOR GOOGLE MAPS LOADER AUDIT

## Ringkasan
Audit ini fokus pada akar masalah Cloud di `/map/multivendor` yang masih dapat menampilkan error `google.maps.Map is not a constructor`.

Hasil audit menunjukkan bahwa loader Google Maps utama hanya ditemukan **satu kali** di layout global, tetapi pola loading saat ini memakai `loading=async` dan memanggil `InitializeGodsEyeMap()` dari `script.onload`. Pada Cloud, pola ini sangat mungkin memicu race condition: skrip utama sudah selesai dimuat, tetapi constructor `google.maps.Map` belum siap saat `InitializeGodsEyeMap()` dipanggil.

## File yang Diaudit
- `resources/views/layouts/app.blade.php`
- `resources/views/map/multivendor.blade.php`
- `resources/views/map/cab.blade.php`
- `resources/views/map/parcel.blade.php`
- `resources/views/map/rental.blade.php`
- `resources/views/zone/create.blade.php`
- `resources/views/zone/edit.blade.php`
- `resources/views/sos/edit.blade.php`
- `config/google.php`
- `config/firebase.php`
- `.env.example` (nama variabel saja, tanpa nilai rahasia)

## Script Google Maps yang Ditemukan
### Loader utama
Hanya **1** pemanggilan Google Maps JavaScript API ditemukan:
- `resources/views/layouts/app.blade.php`
  - `loadGoogleMapsScript()`
  - URL: `https://maps.googleapis.com/maps/api/js?...&libraries=places,drawing&loading=async`

### Constructor map yang memakai namespace Google Maps
Ditemukan di beberapa view peta:
- `resources/views/map/multivendor.blade.php`
- `resources/views/map/cab.blade.php`
- `resources/views/map/parcel.blade.php`
- `resources/views/map/rental.blade.php`
- `resources/views/zone/create.blade.php`
- `resources/views/zone/edit.blade.php`
- `resources/views/sos/edit.blade.php`

## Detail Temuan Penting
### 1. Google Maps dimuat sekali, bukan dobel
Audit tidak menemukan pemanggilan `maps.googleapis.com/maps/api/js` kedua di Blade/layout lain. Jadi akar masalah **bukan** karena script Maps dimuat dua kali dari dua layout berbeda.

### 2. Loader memakai `loading=async`, tetapi tidak memakai callback Google resmi
Di `resources/views/layouts/app.blade.php`, script dimuat dengan:
- `libraries=places,drawing`
- `loading=async`

Lalu setelah `script.onload`, kode langsung memanggil:
- `InitializeGodsEyeMap()`

Masalahnya: `script.onload` tidak selalu menjamin constructor seperti `google.maps.Map` sudah siap dipakai pada semua environment Cloud/browser. Ini sangat cocok dengan gejala Cloud:
- `google.maps.Map is not a constructor`
- area map blank
- callback map-ready lain tertahan walau queue sudah ada

### 3. `/map/multivendor` masih mengandalkan constructor Google secara langsung saat init
Di `resources/views/map/multivendor.blade.php`, fungsi `InitializeGodsEyeMap()` masih membuat map via:
- `map = new google.maps.Map(mapElement, mapOptions);`

Di file yang sama juga sudah ada guard tambahan seperti:
- `getGoogleRoadmapTypeId()`
- `createSafeInfoWindow()`
- `waitForMapReady()`
- `flushMapReadyCallbacks()`
- `mapElement` guard

Guard-guard ini membantu sesudah map ada, tetapi **tidak menyelesaikan** kasus ketika constructor `google.maps.Map` sendiri belum siap.

### 4. Ada benturan timing antara loader global dan init halaman
Polanya sekarang:
1. layout global memanggil `loadGoogleMapsScript()`
2. script Google selesai load
3. `script.onload` memanggil `InitializeGodsEyeMap()` jika fungsi itu ada
4. `InitializeGodsEyeMap()` langsung memanggil `new google.maps.Map(...)`

Pada Cloud, langkah 3 dan 4 tampaknya terjadi sebelum namespace Maps benar-benar siap. Jadi akar paling mungkin adalah **timing/loader readiness**, bukan data vendor/driver.

### 5. Queue `waitForMapReady()` bukan akar masalah utama
Patch queue map-ready yang sudah ada bagus untuk menunda marker/data sampai `map` tersedia. Tetapi bila `new google.maps.Map(...)` gagal di awal, maka queue tidak pernah sempat di-flush secara benar. Jadi queue bukan akar masalah utama; queue hanya terdampak oleh kegagalan constructor.

## Variabel Config yang Relevan
Ditemukan dari config dan template environment:
- `GOOGLE_MAPS_API_KEY`
- `FIREBASE_API_KEY`
- `FIREBASE_AUTH_DOMAIN`
- `FIREBASE_PROJECT_ID`
- `FIREBASE_STORAGE_BUCKET`
- `FIREBASE_MESSAGING_SENDER_ID`
- `FIREBASE_APP_ID`
- `FIREBASE_MEASUREMENT_ID`
- `FIREBASE_PROJECT_DB`
- `FIREBASE_CREDENTIALS`

Catatan: audit ini **tidak** menampilkan nilai API key atau secret apa pun.

## Akar Paling Mungkin dari `google.maps.Map is not a constructor`
Akar paling mungkin adalah kombinasi berikut:
1. Google Maps JS dimuat dengan `loading=async`
2. inisialisasi halaman memakai `script.onload` alih-alih callback/library readiness resmi
3. `InitializeGodsEyeMap()` dipanggil sebelum constructor `google.maps.Map` benar-benar siap di environment Cloud

Dengan kata lain, ini paling mungkin **masalah loader/runtime readiness**, bukan masalah query Firestore atau marker vendor.

## Rekomendasi Patch Minimal Berikutnya
Patch minimal yang paling aman untuk langkah berikutnya:

1. **Jangan ubah data atau query dulu.**
2. Di loader global (`resources/views/layouts/app.blade.php`), ubah strategi init supaya tidak hanya bergantung pada `script.onload`.
3. Sebelum memanggil `InitializeGodsEyeMap()`, lakukan guard eksplisit seperti:
   - cek `window.google`
   - cek `google.maps`
   - cek `typeof google.maps.Map === 'function'`
4. Jika constructor belum siap, lakukan retry singkat bertahap sampai constructor siap, baru panggil `InitializeGodsEyeMap()`.
5. Alternatif yang lebih modern: gunakan `google.maps.importLibrary('maps')` / callback loader resmi, lalu baru init map.
6. Di `multivendor.blade.php`, tambahkan guard terakhir sebelum `new google.maps.Map(...)` agar bila constructor belum siap, halaman tidak crash dan init bisa dijadwalkan ulang.

## Kesimpulan
- Script Google Maps **tidak dimuat dobel**.
- Akar masalah paling mungkin adalah **loader readiness / race condition** antara `script.onload` dan availability constructor `google.maps.Map`.
- Patch berikutnya sebaiknya fokus ke **global loader + readiness retry**, bukan ke Firestore atau marker logic.
