# STORE_WEBSITE_PANEL_GIT_MAPPING_REPORT

## 1. Tujuan audit
Memetakan hubungan Git/code antara:
- **Admin Panel**
- **Store Panel**
- **Website Panel**

Fokus audit pada:
- Route & controller Store Panel
- Pusat kendali di Blade/JS
- Firestore collections yang dipakai Store Panel
- Koneksi lintas panel via `storeUrl` / endpoint `.../api/delete-user`
- Potensi error tipe date (contoh pattern `createdAt.toDate()`)

## 2. Mode kerja (read-only)
- Hanya membaca file kode dan membuat laporan.
- **Tidak patch**.
- **Tidak refactor**.
- **Tidak install** package.
- **Tidak composer install / npm install / migration**.
- **Tidak ubah Firebase/database**.
- **Tidak commit / tidak push**.
- **Tidak hapus file**.

## 3. Repository/lokasi yang dicek
- Lokasi lokal utama: `c:/deploy/adminpanel` (repo Laravel 10)
- Repository Git terdeteksi (asumsi audit mapping lintas repo):
  1) `Nazirach/gbh-AdminPanel` (branch: `main`)
  2) `Nazirach/emart-panel-safe` (branch: `main`, private)

> Catatan: bagian scan Git remote masih perlu dilakukan bila tool git status dijalankan dengan benar di environment Windows shell.

## 4. Git status lokal
Belum tersedia output yang berhasil terbaca untuk:
- `git status --short`
- `git remote -v`
- `git branch --show-current`

## 5. Route Store Panel yang ditemukan (Admin Panel)
File: `routes/web.php`

Route (group permission):
- `GET /stores` → `App\Http\Controllers\StoreController@index` (name: `stores`)
- `GET /stores/create` → `App\Http\Controllers\StoreController@create` (name: `stores.create`)
- `GET /stores/edit/{id}` → `App\Http\Controllers\StoreController@edit` (name: `stores.edit`)
- `GET /stores/view/{id}` → `App\Http\Controllers\StoreController@view` (name: `stores.view`)

## 6. Controller Store Panel
File: `app/Http/Controllers/StoreController.php`

Behavior:
- `index()` hanya `return view("stores.index")`
- `create()` hanya `return view('stores.create')`
- `edit($id)` hanya `return view('stores.edit')->with('id',$id)`
- `view($id)` hanya `return view('stores.view')->with('id',$id)`

Kesimpulan:
- **Logic Store Panel dominan ada di Blade/JavaScript**, bukan di controller.

## 7. View Store Panel (Blade pusat kendali)
File:
- `resources/views/stores/index.blade.php`
- `resources/views/stores/create.blade.php`
- `resources/views/stores/edit.blade.php`
- `resources/views/stores/view.blade.php`

### 7.1 Store Panel Listing & Delete/Copy (index.blade.php)
Poin kendali utama:
- Mengandalkan global JS:
  - `window.firebaseClientReady`
  - `window.firebaseDb`
- Filter via cookie:
  - `section_id`
  - `service_type`
- Fallback cookie kosong:
  - ambil `sections` aktif pertama
  - `setCookie('section_id', ...)` dan `setCookie('service_type', ...)`
  - `window.location.reload()`

### 7.2 Create/Edit/View (create.blade.php, edit.blade.php, view.blade.php)
- Create/Edit: banyak logic UI + write ke Firestore & Firebase Storage.
- View: agregasi data (orders/items/earnings/payouts/subscription) untuk vendor/store.

## 8. Firestore collections yang dipakai Store Panel
Bukti jelas dari `resources/views/stores/index.blade.php` (dan juga create/edit/view sebagian):

Collections yang terlihat dipakai (setidaknya pada index):
- `sections`
- `vendors`
- `vendor_categories`
- `vendor_products`
- `vendor_orders`
- `users`
- `items_review`
- `coupons`
- `payouts`
- `story`
- `advertisements`
- `settings`
- `subscription_history` / `subscription_plans` (khusus view)
- `zone` (create & view)
- `wallet` (view)
- `wallet`/`wallet topup` (view)

## 9. Hubungan Admin Panel → Store Panel → Website Panel
### 9.1 Admin Panel memuat Store Panel
- Route Admin (`/stores*`) memanggil Blade Store Panel.
- Store Panel dijalankan di front-end (Blade JS) dan langsung baca/tulis Firestore.

### 9.2 Koneksi lintas panel via `settings/Version.storeUrl`
Pada `resources/views/stores/index.blade.php` saat delete store/vendor:
1. Ambil `projectId` dari `env('FIREBASE_PROJECT_ID')`
2. Query user dengan role `vendor`:
   - `database.collection('users').where('vendorID', '==', storeId).where('role', '==', 'vendor')`
3. Ambil setting dokumen:
   - `database.collection('settings').doc("Version").get()`
4. Jika ada `settingData.storeUrl`, maka call endpoint:
   - `siteurl = settingData.storeUrl + "/api/delete-user"`
   - POST JSON `{ "uuid": item_data.id }`

### 9.3 Call tambahan via Cloud Function
Masih pada proses delete store/vendor:
- `https://us-central1-${projectId}.cloudfunctions.net/deleteUser`
- POST JSON `{ "uuid": item_data.id }`

## 10. Temuan `storeUrl` dan `/api/delete-user`
File: `resources/views/stores/index.blade.php`

- Sumber `storeUrl`: `database.collection('settings').doc("Version").get()`
- Endpoint:
  - `POST {storeUrl}/api/delete-user`
  - Payload: `{"uuid": item_data.id}`

Implikasi mapping:
- **Website Panel** kemungkinan berada di service yang menerima endpoint `/api/delete-user`.

## 11. Potensi error `createdAt.toDate()` di Store Panel
Bukti dari `resources/views/stores/index.blade.php`:

Terdapat try/catch saat search:
- `childData.createdAt.toDate().toDateString()`
- `childData.createdAt.toDate().toLocaleTimeString('en-US')`

Terdapat sorting numerik dengan fallback:
- `new Date(a[orderByField].toDate()).getTime()` untuk `createdAt`

Terdapat perhitungan `createdAt.seconds`:
- `new Date(childData.createdAt.seconds * 1000).setHours(...)`

Kesimpulan risiko:
- Jika `createdAt` bukan Firestore Timestamp object (mis. string/Date/number), pattern `.toDate()` dan `.seconds` dapat gagal.
- Walaupun beberapa bagian sudah dibungkus try/catch, bagian lain bisa tetap menghasilkan perilaku tidak konsisten (mis. `new Date(undefined.seconds*1000)` → NaN).

## 12. Risiko stabilitas
- **Riskiest area**: pemrosesan `createdAt` campuran (`.toDate()` vs `.seconds`).
- Proses delete vendor/store:
  - Menghapus banyak collection tanpa transactional guard.
  - Ada dual path delete: endpoint `{storeUrl}/api/delete-user` dan Cloud Function `deleteUser`.
  - Jika salah satu gagal, dataset Firestore/MySQL bisa tidak sinkron.
- Dependensi global JS (`window.firebaseDb`, `window.firebaseClientReady`) sehingga jika belum siap bisa menyebabkan partial failure.

## 13. Rekomendasi tahap berikutnya (read-only audit berikutnya)
1. Audit mapping **Website Panel** secara code-level:
   - Temukan implementasi route/controller untuk `POST /api/delete-user` di repo terkait.
   - Jika berada di project lain, cari dependency URL yang sama dengan `storeUrl`.
2. Audit implementasi Firestore timestamp schema:
   - Validasi tipe field `createdAt` di collections `vendors` (atau doc yang berisi vendor title/phone/createdAt).
   - Pastikan konsisten apakah selalu Firestore Timestamp atau kadang string/JS Date.
3. Lanjutkan audit Firestore collections untuk `stores/view`:
   - `subscription_history`, `subscription_plans`, `vendor_orders`, `vendor_products`, `payouts`.
4. Scan repo `Nazirach/emart-panel-safe` untuk struktur folder dan kebaruan mapping:
   - cari file/route yang mengandung `/api/delete-user`, `storeUrl`, `website`, dan `Version`.

## 14. Konfirmasi kepatuhan
- Tidak patch
- Tidak install
- Tidak migration
- Tidak commit/push
- Tidak ubah Firebase/database

---

## Ringkasan output ke user
### File yang dibaca
- `routes/web.php`
- `app/Http/Controllers/StoreController.php`
- `resources/views/stores/index.blade.php`
- `resources/views/stores/create.blade.php`
- `resources/views/stores/edit.blade.php`
- `resources/views/stores/view.blade.php`

### Temuan utama
- Route Store Panel ada di Admin Panel (`/stores`, `/stores/create`, `/stores/edit/{id}`, `/stores/view/{id}`) → controller hanya return view.
- Logic utama Store Panel ada di Blade + JavaScript (Firestore langsung di browser).
- Firestore collections dipakai: `sections`, `vendors`, `vendor_categories`, `vendor_products`, `vendor_orders`, `users`, `items_review`, `coupons`, `payouts`, `story`, `advertisements` (+ lain di view).
- Koneksi lintas panel saat delete store/vendor:
  - `settings/Version.storeUrl + "/api/delete-user"`
  - Cloud Function `deleteUser`

### Apakah Website Panel ditemukan jelas?
- **Belum ditemukan secara pasti kode “Website Panel”** (controller/route implementasi `/api/delete-user`) karena audit lintas repo belum dijalankan pada tahap ini.
- Namun endpoint `/api/delete-user` jelas disebut sebagai target untuk sinkronisasi penghapusan.

### Lokasi laporan
- `docs/STORE_WEBSITE_PANEL_GIT_MAPPING_REPORT.md`

### Rekomendasi langkah berikutnya
- Cari implementasi backend `POST /api/delete-user` di repo terkait (kemungkinan `emart-panel-safe` atau repo website lain) menggunakan keyword route dan handler yang sama.

