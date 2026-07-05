# STORE_WEBSITE_PANEL_AUDIT_START

## Mode & batasan
- Audit-only (read-only).
- Tidak patch.
- Tidak commit/push.
- Tidak install package.
- Tidak ubah Firebase/database.
- Tidak ubah env.
- Tidak ubah route/controller/model/middleware/auth/business logic.

## git status ringkas
Tidak diverifikasi via command saat ini (bisa dijalankan: `git status --porcelain -b`).

---

## 1) Store Panel (Store Management) — route Store Panel yang ditemukan
Bersumber dari `routes/web.php`:
- `GET /stores` -> `App\Http\Controllers\StoreController@index` (name: `stores`)
- `GET /stores/create` -> `StoreController@create` (name: `stores.create`)
- `GET /stores/edit/{id}` -> `StoreController@edit` (name: `stores.edit`)
- `GET /stores/view/{id}` -> `StoreController@view` (name: `stores.view`)

---

## 2) Controller & views yang dipakai (Store Panel)
### Controller utama
File: `app/Http/Controllers/StoreController.php`
- `index()` -> `view("stores.index")`
- `create()` -> `view('stores.create')`
- `edit($id)` -> `view('stores.edit')->with('id',$id)`
- `view($id)` -> `view('stores.view')->with('id',$id)`

### View utama
- `resources/views/stores/index.blade.php` (list + action delete/copy + render action button)
- `resources/views/stores/create.blade.php` (UI create vendor/store; memuat banyak logic Firestore)
- `resources/views/stores/edit.blade.php` (UI edit vendor/store)
- `resources/views/stores/view.blade.php` (UI detail store/vendor + menu tab)

---

## 3) Firestore collections yang dipakai Store Panel (berdasarkan view)
Store Panel tampaknya **menggunakan Firestore client-side langsung** (tidak melalui API Laravel; konten Blade berisi JS `firebase.firestore()`/`window.firebaseDb`).

Collection utama (contoh yang muncul dari kode):
1) `vendors`
   - List dan filtering di `stores/index.blade.php`
   - Edit form menggunakan `vendors` (di `stores/edit.blade.php`)

2) `users`
   - Query vendor user (role vendor) saat delete/copy/relasi.
   - `stores/index.blade.php`: `database.collection('users').where('vendorID','==', storeId).where('role','==','vendor')`
   - `stores/view.blade.php`: ambil user vendor untuk email/phone & wallet

3) `vendor_products`
   - `stores/index.blade.php`: menghitung item per vendor & delete vendor_products

4) `vendor_orders`
   - `stores/index.blade.php`: menghitung order per vendor & delete vendor_orders

5) `items_review`
   - `stores/index.blade.php`: delete `items_review` untuk vendor

6) `coupons`, `payouts`, `story`, `advertisements`
   - `stores/index.blade.php`: delete koleksi-koleksi terkait saat vendor dihapus

7) `vendor_categories`
   - `stores/index.blade.php`: build pilihan kategori/cuisine
   - `stores/create.blade.php` dan `stores/edit.blade.php`: mapping `vendor_cuisines`

8) `sections`
   - `stores/create.blade.php` / `stores/edit.blade.php` mengambil `sections` aktif dan `section_id` (juga digunakan untuk komisi/adminCommission)

9) `settings`
   - placeholder image: `settings` doc `placeHolderImage`
   - story settings doc `story`
   - delivery charge doc `DeliveryCharge`
   - driver near by doc `DriverNearBy`

10) `zone`
   - `stores/create.blade.php` dan `stores/edit.blade.php`: memuat daftar zone & validasi polygon

11) `subscription_plans`, `subscription_history`
   - `stores/view.blade.php`: memuat subscription & history untuk vendor owner

---

## 4) Field penting Store Panel / Store Vendor (field yang dipakai di kode)
Berdasarkan field yang dipakai di `stores/create.blade.php`, `stores/edit.blade.php`, dan `stores/view.blade.php`:

### Identitas & relasi
- `id` (vendor id / dokumen vendor)
- `vendorID` (dipakai pada relasi antar koleksi, contoh vendor_products/vendor_orders)
- `author` / `authorName` / `authorProfilePic`
- `section_id` (service section)
- `categoryID`, `categoryTitle`

### Profil
- `title`, `description`
- `location` (alamat)
- `latitude`, `longitude`, `coordinates`
- `photo` (representasi gambar vendor)
- `photos` (gallery)
- `restaurantMenuPhotos` (menu card photos)

### Aktivasi & layanan
- `isActive`
- `enabledDiveInFuture`
- `dine_in_active` (mengaktifkan UI layanan)
- `filters` (objek filter: Free Wi-Fi, Good for Breakfast, dll)
- `workingHours` (array per day, timeslot)
- `specialDiscountEnable`, `specialDiscount` (discount schedule)

### Komisi & delivery
- `adminCommission`
  - di view: `vendor.adminCommission.type` & `vendor.adminCommission.commission`
- `deliveryCharge`
  - doc `DeliveryCharge` dan field update vendor.`deliveryCharge`

### Subscription
- `subscription_plan`
- `subscriptionPlanId`
- `subscriptionExpiryDate`
- `subscriptionTotalOrders`

---

## 5) Action yang tersedia (button / UI actions) — ringkasan dari view
### `stores/index.blade.php` (list)
- Create: link ke `route('stores.create')`
- Edit: tombol icon mengarah `route('stores.edit', id)`
- View: tombol mengarah `route('stores.view', id)`
- Delete: checkbox mass delete + action delete single (`name='delete-btn'`)
  - delete men-trigger penghapusan Firestore documents + memanggil endpoint eksternal (storeUrl) dan Cloud Function deleteUser (detail ada di laporan delete-user sebelumnya)
- Copy/Clone (vendor clone): `name='vendor-clone'` membuka modal create_vendor untuk menyalin data

### `stores/view.blade.php` (detail + tabs)
Menu tab utama yang tampak:
- Tab basic: `route('stores.view', $id)`
- Tab items: `route('vendors.items', $id)`
- Tab orders: `route('vendors.orders', $id)`
- Tab reviews: `route('vendors.reviews', $id)`
- Tab promos: `route('vendors.coupons', $id)`
- Tab payouts: `route('vendors.payout', $id)`
- Tab payout request: `route('payoutRequests.vendor.view', $id)`
- Tab dine-in booking history (conditional): `route('vendors.booktable', $id)`
- Wallet transaction (conditional permission): route `walletstransaction` (di bagian index dan juga di view)
- Subscription history: `subscription.subscriptionPlanHistory` (dimap jadi query `storeID=$id`)
- Advertisements tab: `route('restaurants.advertisements', $id)`

---

## 6) Website Panel / Website settings — setting Website yang ditemukan (audit cepat)
Berdasarkan pencarian terbatas di folder `resources/views/settings`:
- Belum bisa dipastikan lokasi file `resources/views/settings/app/global.blade.php` karena proses pencarian `rg` tidak tersedia.
- Namun di context admin panel delete-user sudah ada field setting yang relevan secara deduktif:
  - doc `settings/Version` berisi `storeUrl` (dipakai untuk `/api/delete-user`)
  - doc `settings` berisi placeholder image
  - doc `settings/story` untuk fitur story

Untuk memenuhi bagian 3 tugas (audit global.blade.php dan field website_url/store_url/website_color/web_version/store_panel_color/app_store_color), langkah berikutnya adalah:
- Cari file Blade yang memuat string `website_url`/`store_url`/`web_version`/`website_color`.
- Ini perlu pencarian yang tidak bergantung ripgrep; bisa pakai `Select-String` native di Windows, atau tool `search_files` lagi jika ripgrep sudah tersedia.

---

## 7) Apakah Website Panel adalah UI terpisah atau hanya settings URL/color/version?
Belum bisa disimpulkan saat ini.
- Dari temuan delete-user, admin panel menyimpan `settings/Version.storeUrl` dan memanggil endpoint eksternal `{storeUrl}/api/delete-user`.
- Ini mengindikasikan minimal ada **website/store backend terpisah** yang menerima endpoint deleteUser.
- Namun apakah ada UI terpisah (halaman front-end) atau hanya pengaturan URL/color/version: belum terverifikasi.

---

## 8) Risiko / area yang perlu diuji berikutnya
1. Verifikasi file setting website panel:
   - `website_url`, `store_url`, `web_version`, `website_color`, `store_panel_color`, `app_store_color`
2. Verifikasi apakah `storeUrl` mengarah ke backend yang punya route:
   - `POST /api/delete-user` dan payload `{"uuid": ...}`
3. Verifikasi sinkronisasi delete chain:
   - admin panel delete vendor => Firestore delete + external delete-user + Cloud Function deleteUser

---

## 9) Rekomendasi urutan kerja berikutnya
1. Audit “Website settings” via pencarian native (`Select-String`) untuk field `website_url/store_url/web_version/website_color/...`.
2. Dari `settings/Version.storeUrl`, identifikasi repo/codbase Website Panel yang menerima endpoint.
3. Audit Store Panel pages yang terkait actions lain:
   - payout, payment, employee pages (route mapping dari view tabs di `stores/view.blade.php`).


