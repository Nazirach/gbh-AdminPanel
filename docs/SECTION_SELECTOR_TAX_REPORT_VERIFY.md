# SECTION SELECTOR + TAX REPORT VERIFY

## Git status
- `git status --short`: clean sebelum report dibuat.
- Tidak ada perubahan source aplikasi pada mode verify ini.

## Commit terbaru
- Commit terbaru yang terverifikasi: `3ba82a4 Fallback section selector query without order`
- Commit pendukung yang masih ada di riwayat terbaru:
  - `795a680 Normalize section selector service types`
  - `cae48a0 Add section selector field fallbacks`
  - `45a80d4 Fix section selector cookie fallback`
  - `7b5950e Guard tax report when section context is missing`

## Hasil artisan clear/cache
- `php artisan view:clear` : sukses
- `php artisan optimize:clear` : sukses
- `php artisan view:cache` : sukses

## Marker yang ditemukan di `resources/views/layouts/app.blade.php`
Marker berikut terverifikasi ada:
- `SECTION_SELECTOR_SERVICE_TYPE_NORMALIZER`
- `SECTION_SELECTOR_ORDERBY_FALLBACK_FIX`
- `SECTION_SELECTOR_FIELD_FALLBACK_FIX`
- `SECTION_SELECTOR_SAFE_COOKIE_FIX`

## Verifikasi service type mapping
Mapping berikut ditemukan dan tidak ada typo pada nilai target:
- `delivery-service`
- `ecommerce-service`
- `cab-service`
- `parcel_delivery`
- `rental-service`

Tambahan mapping yang juga ada:
- `ondemand-service`

## Ringkasan alur Section Selector
1. `getServiceSections()` mencoba query utama:
   - `database.collection('sections').where('isActive', '==', true).orderBy('order')`
2. Jika query ordered gagal, code menulis warning:
   - `[SECTION_SELECTOR_TRACE] orderBy query failed, retrying without orderBy`
3. Jika hasil ordered query kosong / snapshot kosong, code fallback ke:
   - `database.collection('sections').where('isActive', '==', true)`
4. Jika fallback dipakai, code menulis trace ukuran snapshot fallback.
5. `buildServiceSectionsHTML()` memakai fallback field selector yang aman:
   - `var sectionId = data.id || data.sectionId || doc.id;`
   - `var sectionType = normalizeSectionServiceType(data);`
6. Route dashboard section dibentuk dari:
   - `{{ route('dashboard') }}/${sectionId}/${sectionType}`
7. Click handler `.service-list-box` menyimpan cookie sebelum redirect:
   - `setCookie('section_id', sectionId, 1);`
   - `setCookie('service_type', sectionType, 1);`
8. Tombol `Tambah lagi` tetap memakai route `section.create` dan secara sengaja memakai:
   - `data-section-id=""`
   - `data-section-type=""`
   sehingga tidak menyimpan context section lama.

## Ringkasan alur Tax Report
File diperiksa: `resources/views/reports/tax-reports.blade.php`

Temuan penting:
1. Context awal dibaca dari cookie:
   - `section_id = getCookie('section_id') || ''`
   - `service_type = getCookie('service_type') || ''`
2. Collection order ditentukan oleh `getOrdersCollectionByService(service_type)`.
3. Nama field section pada collection order ditentukan oleh `getOrdersSectionField(service_type)`.
4. Guard missing section masih ada dan aktif:
   - marker `TAX_REPORT_REQUIRE_SECTION_GUARD`
   - jika `section_id` kosong, query Firestore diblok, alert warning ditampilkan, lalu `return`.
5. Guard incomplete order context juga masih ada:
   - jika `ordersCollection` atau `ordersSectionField` kosong, generate diblok.
6. Query generate tax report hanya berjalan setelah context valid:
   - `.where('status', '==', 'Order Completed')`
   - `.where(ordersSectionField, '==', section_id)`
   - filter rentang `createdAt`

## Potensi risiko tersisa
- Tax Report masih bergantung pada cookie `section_id` dan `service_type`; jika user membuka route report langsung tanpa memilih section, guard memang akan memblok query.
- Fallback selector sudah aman untuk case `order` null/kosong, tetapi validasi final tetap perlu browser test untuk memastikan 8 section aktif benar-benar muncul di environment target.
- `tax-reports.blade.php` masih memakai `firebase.firestore()` langsung, namun ini di luar scope verify ini dan tidak mengubah hasil guard section context yang diminta.

## Rekomendasi test browser
1. Buka `/report/tax?debug_tax_report=1&v=codex-verify`
2. Buka modal / dropdown `Select Section`
3. Pastikan muncul 8 section aktif + 1 tombol `Tambahkan lagi`
4. Klik salah satu section aktif
5. Cek cookie browser:
   - `section_id`
   - `service_type`
6. Buka Tax Report lalu klik `Generate`
7. Jika report tetap kosong, cek console/debug trace apakah context order mengarah ke collection/field yang sesuai service type terpilih.

## Kesimpulan verifikasi
- Patch section selector terverifikasi ada dan sesuai arah perbaikan yang diminta.
- Fallback query tanpa `orderBy('order')` sudah aktif.
- Click handler section selector menyimpan `section_id` dan `service_type` sebelum redirect.
- Tax Report masih memiliki guard untuk mencegah query Firestore berjalan saat section context kosong.
- Secara source code, patch selector + guard Tax Report sudah konsisten dengan tujuan perbaikan.
