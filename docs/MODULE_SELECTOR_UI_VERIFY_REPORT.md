# MODULE SELECTOR POPUP DARK THEME — VERIFY REPORT

## Scope
Fokus masalah UI di halaman **/report/tax**: popup **“Bagian Modul” (module/section selector)** menutupi halaman; beberapa kartu modul terlihat **putih/pucat** dan **ikon/gambar tidak tampil jelas**. 

**Batasan:**
- Tidak mengubah logic tax report.
- Tidak mengubah Firebase/database.
- Tidak refactor besar.
- Tidak install package.

## 1) File sumber popup “Bagian Modul”
### A. Blade (markup popup)
**File:** `resources/views/layouts/header.blade.php`

Bagian yang menjadi trigger dan container popup:
- Trigger: `.gm-service-switcher__trigger` (teks default `{{ trans('lang.select_section') }}`)
- Container popup (dropdown):
  - `<div class="dropdown-menu dropdown-service scale-up gm-service-switcher__menu">`
  - `<div class="dropdown-service_inner">`
  - `<h2>{{ trans('lang.modules_section') }}</h2>`
  - `<p>{{ trans('lang.select_module_monitor') }}</p>`
  - `<div id="sections_header"></div>` (tempat isi kartu modul dimasukkan via JS)

### B. JS yang mengisi isi kartu modul
**Lokasi script:** masih di `resources/views/layouts/app.blade.php` (di `<script>` besar yang berjalan saat halaman load)

Bagian relevan:
- `$(document).ready(async function () { getServiceSections(); ... })`
- `async function getServiceSections()` mengambil data `sections` dari Firestore dan mengisi `#sections_header`
- `async function buildServiceSectionsHTML(snapshot)` membangun HTML kartu modul dengan pola:
  - `section-list-box` (container kartu)
  - `<img src="${sectionImage}" onerror="this.onerror=null;this.src='${placeholderImage}'">`
  - `<h3>${sectionName}</h3>`
  - `<p>${sectionDescription}</p>`
- Cookie selection (ketika klik kartu):
  - `setCookie('section_id', sectionId, 1)`
  - `setCookie('service_type', sectionType, 1)`

### C. CSS utama dark theme yang mungkin “tidak mencakup” popup
**File:** `resources/views/layouts/app.blade.php` (inline `<style>...</style>` berisi banyak rule untuk dark theme)
- Memang ada styling untuk beberapa komponen (table/card/modal, dsb) tapi **tidak ada rule spesifik untuk**:
  - `.gm-service-switcher__menu`
  - `.dropdown-service_inner`
  - `.dropdown-service-list` / `.service-list-box`

**File:** `public/css/admin.css` dan `public/css/custom.css`
- Tidak ditemukan rule khusus untuk `.gm-service-switcher__menu` / `.service-list-box` (berdasarkan pembacaan file yang tersedia; pencarian global regex via tool gagal karena `ripgrep` tidak tersedia di environment tool).

## 2) Penyebab popup muncul menutupi halaman (identifikasi dari kode)
### 2.1 Container popup adalah dropdown Bootstrap yang berpotensi overlay
Markup popup ada dalam struktur dropdown:
- `.gm-service-switcher__menu` berisi HTML kartu-kartu
- Trigger `.gm-service-switcher__trigger` menggunakan `data-toggle="dropdown"`

Ketika dropdown aktif, elemen `.dropdown-menu` akan muncul di atas konten lain (z-index/positioning dari bootstrap/theme). Jika CSS theme tidak mengatur background/warna border untuk dropdown ini, dropdown tampak “lebih terang/putih” dan terasa menutupi.

### 2.2 Tidak ada “guard” spesifik agar dropdown tertutup sebelum membuka konten lain
Pada `layouts/app.blade.php` tidak terlihat handler yang menutup dropdown saat halaman tertentu di-scroll/click (selain mekanisme native bootstrap dropdown).

**Implikasi:**
- Saat user berada di /report/tax, jika dropdown di header “terbuka” (misal terjadi auto-open oleh click target tertentu, atau event bubbling yang memicu trigger), maka dropdown akan menutupi halaman karena memang berlapis di atas.

Catatan verifikasi lebih lanjut yang disarankan (tanpa patch dulu):
- cek apakah class `show` atau aria-expanded menjadi `true` saat user tidak menginginkan popup.

## 3) Kenapa kartu modul terlihat putih/pucat
Dari markup JS:
- kartu dibuat sebagai:
  - `<div class="service-list-box ...">`
  - `<img ...>`
  - `<h3>...` dan `<p>...`

Dari CSS inline `layouts/app.blade.php`:
- Styling generik untuk `.card`, `fieldset`, table, modal, form-control, dsb, tapi **tidak tampak rule untuk `.service-list-box`**.

Akibatnya, kartu modul kemungkinan memakai styling default (atau styling dari framework bootstrap / custom CSS lama) yang umumnya:
- background putih / teks gelap
- border / shadow yang kurang sesuai dengan dark theme

**Kesimpulan:**
- Penyebab putih/pucat sangat konsisten dengan **missing/overridden CSS spesifik** untuk `.gm-service-switcher__menu` dan `.service-list-box` pada dark theme.

## 4) Kenapa ikon/image tidak tampil jelas
Poin yang terlihat langsung dari kode:
- `sectionImage` diambil dari Firestore: `var sectionImage = data.sectionImage || placeholderImage;`
- `placeholderImage` diambil async dari Firestore doc `settings/placeHolderImage`:
  - `placeholder.get().then(...)` mengisi `placeholderImage = snapshotsimage.data().image;`

Potensi masalah UI:
1. Jika `placeholderImage` belum terload saat `buildServiceSectionsHTML()` berjalan, maka `sectionImage` bisa jadi **undefined/empty string**.
   - Browser kemudian akan mencoba load `src=""` (tidak error selalu), sehingga gambar terlihat “tidak tampil”.
2. Walaupun ada `onerror` fallback:
   - `onerror="this.onerror=null;this.src='${placeholderImage}'"`
   - jika `placeholderImage` juga kosong/undefined, fallback tidak menyelesaikan.

Daarnaast, CSS dark theme untuk img tertentu tidak terlihat diterapkan pada `.service-list-box img`.
- Jika `img` punya ukuran default/transparent, maka pada background dropdown yang terang/pucat, icon tampak “tidak jelas”.

## 5) Rekomendasi patch minimal dark theme (tanpa mengubah logic)
Tujuan: styling container dropdown & kartu modul agar konsisten dengan theme dark, dan memastikan gambar/icon terlihat jelas.

### Patch minimal yang direkomendasikan (CSS)
Target lokasi CSS paling aman:
- `resources/views/layouts/app.blade.php` inline `<style>` (karena theme dark sudah didefinisikan di sana)
  **atau** `public/css/admin.css` jika prefer konsisten ke file CSS.

Rule minimal yang harus ada:
1. Dark background untuk dropdown menu:
   - `.gm-service-switcher__menu.dropdown-menu` dan `.dropdown-service_inner`
2. Teks warna terang:
   - `.gm-service-switcher__menu h2, p, h3, .service-list-box` (color)
3. Background kartu modul:
   - `.service-list-box` (background semi-transparan) + border
4. Styling hover/active:
   - `.service-list-box:hover` dan `.selected-section`
5. Ukuran/fit gambar:
   - `.service-list-box img { width/height; object-fit: contain; filter: ...; }`

### Patch minimal yang direkomendasikan (opsional, JS guard gambar)
Jika verifikasi menunjukkan `placeholderImage` kosong saat rendering:
- Tambahkan guard sederhana (tanpa refactor):
  - pastikan `placeholderImage` sudah tersedia sebelum `getServiceSections()` memanggil `buildServiceSectionsHTML()`
  - atau di `buildServiceSectionsHTML` fallback `sectionImage` memakai URL placeholder statis (asset local) jika `placeholderImage` undefined.

Namun ini tetap akan mengubah JS, jadi **patch ini sebaiknya hanya dilakukan setelah penyebab gambar terkonfirmasi**.

## 6) Kesimpulan singkat
- **Sumber popup “Bagian Modul”**: `resources/views/layouts/header.blade.php` (markup dropdown) + `resources/views/layouts/app.blade.php` (JS `getServiceSections()` dan `buildServiceSectionsHTML()` mengisi kartu modul).
- **Penyebab popup menutupi halaman**: dropdown menu overlay yang muncul saat trigger aktif; tidak ada CSS spesifik untuk memastikan visual/kontras dan tidak ada guard untuk perilaku penutupan khusus di halaman laporan.
- **Penyebab kartu modul putih/pucat**: tidak ada styling dark theme spesifik untuk `.service-list-box` / `.gm-service-switcher__menu` sehingga default/legacy styling ikut terbawa.
- **Penyebab ikon/image tidak jelas**: `sectionImage` bergantung pada `placeholderImage` yang diambil async; bila belum siap, image bisa kosong dan fallback juga tidak efektif.

---
Catatan: Laporan berhenti di tahap identifikasi + rekomendasi patch minimal sesuai instruksi (tanpa patch karena penyebab visual belum sepenuhnya divalidasi lewat rule CSS spesifik).
