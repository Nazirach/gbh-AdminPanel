# MODULE_SELECTOR_IMAGE_FALLBACK_VERIFY_REPORT (MODE VERIFY ONLY)

## Scope
Memverifikasi mekanisme fallback gambar ikon pada **module selector** (kartu modul) di file:
- `resources/views/layouts/app.blade.php`

Batasan dipatuhi:
- Tidak mengubah **tax report**
- Tidak menyentuh **Firebase/database** logic
- Tidak mengubah cookie `section_id/service_type`
- Tidak refactor besar, tidak install package, tidak patch eksekusi
- Hanya laporan verifikasi (MODE VERIFY ONLY)

## Lokasi fungsi yang diperiksa
Di `resources/views/layouts/app.blade.php`, ditemukan:
- `async function getServiceSections()`
- `async function buildServiceSectionsHTML(snapshot)`

### Alur singkat
1. `getServiceSections()` melakukan query Firestore `sections` (dengan orderBy fallback).
2. Hasil query dimasukkan ke elemen `#sections_header` dengan:
   - `sectionsContainer.innerHTML = await buildServiceSectionsHTML(sectionsSnapshot);`
3. `buildServiceSectionsHTML(snapshot)` membangun HTML kartu modul dengan `<img src="${sectionImage}" ...>`.

## Sumber image kartu modul
Dalam `buildServiceSectionsHTML(snapshot)`, gambar sumber diambil dari Firestore field berikut:
- `var sectionImage = data.sectionImage || placeholderImage;`

Artinya:
- Jika `data.sectionImage` truthy (string non-empty), dipakai.
- Jika tidak ada/empty, dipakai nilai `placeholderImage` (yang diambil dari Firestore doc `settings/placeHolderImage`).

### placeholderImage didefinisikan dari Firestore (potensi race)
Sebelum `$(document).ready(...)`, ada kode:
- `var placeholderImage = '';`
- `placeholder.get().then(async function (snapshotsimage) { ... placeholderImage = placeholderImageData.image; })`

Jadi, default awal `placeholderImage` adalah **string kosong** (`''`) sampai query Firestore selesai.

## Potensi penyebab broken image
### 1) Race condition: placeholderImage mungkin masih kosong saat buildServiceSectionsHTML jalan
- `placeholderImage` diisi secara async dengan `.then(...)`.
- `getServiceSections()` dipanggil pada `$(document).ready(async function () { getServiceSections(); ... })`.
- Tidak terlihat adanya `await` untuk penyelesaian `placeholder.get()` sebelum `getServiceSections()` dan `buildServiceSectionsHTML()` mengeksekusi.

Akibatnya skenario ini mungkin terjadi:
- Pada render awal, `placeholderImage === ''`.
- Untuk item yang tidak punya `data.sectionImage`, maka `sectionImage = ''`.
- `<img src="">` bisa memunculkan broken image/ikon kosong (browser behavior tergantung), terutama jika tidak ada valid data URL.

### 2) fallback onerror memakai placeholderImage yang sama (juga bisa kosong)
HTML yang dirender:
```js
<img src="${sectionImage}" onerror="this.onerror=null;this.src='${placeholderImage}'">
```
Jika `placeholderImage` saat itu masih kosong:
- `onerror` tetap akan meng-set `this.src` menjadi `''`.
- Akibatnya fallback tidak memperbaiki tampilan (tetap broken/blank).

## Apakah placeholderImage async bisa menyebabkan gambar kosong?
**Ya, berpotensi.**
Bukti langsung:
- `placeholderImage` diinisialisasi `''`.
- Diisi kemudian async.
- `buildServiceSectionsHTML` tidak menunggu placeholderImage selesai.

## Apakah `<img src="${sectionImage}">` bisa menerima string kosong?
**Ya.**
Karena:
- `sectionImage = data.sectionImage || placeholderImage;`
- `placeholderImage` default `''`.
Maka `sectionImage` dapat menjadi `''`.

## Apakah onerror fallback juga memakai placeholderImage yang mungkin kosong?
**Ya.**
Karena fallback string:
- `this.src='${placeholderImage}'`
Menggunakan nilai `placeholderImage` yang tersubstitusi saat template literal HTML dibangun.
Jika pada saat itu placeholder masih `''`, fallback akan set ke `''` juga.

## Rekomendasi patch minimal yang aman (tanpa eksekusi patch)
Catatan: ini rekomendasi patch minimal untuk menghilangkan broken image, dengan tetap menjaga batasan (tanpa ubah tax report, Firebase/database, dan cookie section_id/service_type).

### Rekomendasi A (paling minimal): pastikan placeholderImage punya default asset non-empty di awal
- Ubah default `var placeholderImage = '';` menjadi asset image yang pasti ada.
  - Contoh: `var placeholderImage = "{{ asset('images/your-placeholder.png') }}";`
- Ini mencegah `sectionImage` / fallback `onerror` menjadi `''`.

### Rekomendasi B: tunggu placeholderImage sebelum memanggil getServiceSections()
- Di `$(document).ready(async function () { ... })`, pastikan `placeholder.get()` selesai dulu.
- Misal: ubah placeholder fetch menjadi promise dan `await` sebelum `getServiceSections()`.

### Rekomendasi C: fallback pada onerror gunakan nilai fallback yang non-empty
- Tetap pakai `onerror`, tapi pastikan placeholder yang dipakai adalah string non-empty.
- Contoh logika: `this.src = (placeholderImage && placeholderImage !== '') ? placeholderImage : '<asset default>'`

## Catatan: dark theme sudah stabil
- Verifikasi ini hanya fokus pada broken/kurang terlihatnya ikon/gambar kartu modul.
- Dark theme terkait `MODULE_SELECTOR_DARK_THEME_FIX` tidak disentuh.
- Poin yang terbukti dari kode: masalah utama berkaitan dengan nilai gambar (placeholderImage) yang berpotensi kosong karena async timing.

## Kesimpulan
Broken image pada module selector berpotensi besar disebabkan oleh:
1) `placeholderImage` default `''` (string kosong)
2) `buildServiceSectionsHTML` dieksekusi sebelum `placeholderImage` terisi async
3) onerror fallback memakai `placeholderImage` yang sama sehingga bisa ikut kosong

Patch minimal yang paling aman adalah memastikan `placeholderImage` selalu non-empty (opsi A) atau menunggu promise placeholder (opsi B). 

