# WEBSITE PANEL DELETE USER ENDPOINT AUDIT REPORT

## 1. Tujuan audit
Mencari kode Website Panel / Store Panel yang menerima endpoint **POST /api/delete-user** (atau variasinya yang terkait `deleteUser`/`delete_user`) sehingga sinkron dengan logika penghapusan user dari Admin Panel Store.

## 2. Mode read-only
- Audit dilakukan dengan pembacaan file (read-only).
- Tidak ada patch, refactor, install package, composer install, npm install, migration, perubahan Firebase/database, commit, atau push.

## 3. Lokasi yang dicek
- Project utama: `C:\deploy\adminpanel`
- File rute yang diperiksa: 
  - `routes/api.php`
  - `routes/web.php`
- File terkait temuan admin panel (karena memuat payload/endpoint eksternal):
  - `resources/views/stores/index.blade.php`

## 4. Keyword pencarian
`delete-user`, `/api/delete-user`, `api/delete-user`, `deleteUser`, `delete_user`, `destroyUser`, `removeUser`, `uuid`, `storeUrl`, `store_url`, `Version`, `website`

## 5. Hasil pencarian di C:\deploy\adminpanel
- **Tidak ditemukan route API** di `routes/api.php` maupun `routes/web.php` yang secara eksplisit mendefinisikan `POST /api/delete-user`.
- Namun, Admin Panel **mengirim request eksternal** ke endpoint `{$settings.storeUrl}/api/delete-user` dan juga memanggil **Cloud Function** `deleteUser` saat proses delete store/vendor.

## 6. Apakah routes/api.php ada dan apa isinya terkait delete-user
File: `routes/api.php`
- Isi hanya memuat route contoh:
  - `Route::middleware('auth:sanctum')->get('/user', ...)`
- **Tidak ada** route `delete-user` / `deleteUser` / `delete_user` di `routes/api.php`.

## 7. Folder kandidat Website Panel / Store Panel yang ditemukan
- Pada audit lokal ini, **folder kandidat di drive C:\ tidak dicari** karena tool `search_files` berbasis ripgrep tidak tersedia (gagal: `Could not find ripgrep binary`).
- Dengan demikian, **belum ada** kandidat folder repo lain yang bisa diverifikasi dari lokal mesin.

## 8. Apakah endpoint POST /api/delete-user ditemukan
- Di `C:\deploy\adminpanel` (admin panel store):
  - Endpoint **tidak didefinisikan** sebagai route server lokal.
  - Tetapi endpoint **dipanggil** dari Admin Panel melalui `settings/Version.storeUrl + '/api/delete-user'`.
- Kesimpulan:
  - **Endpoint penerima belum ditemukan** di repo lokal `C:\deploy\adminpanel`.

## 9. Jika ditemukan (route/controller/function/payload)
### Admin Panel Store (pemanggil eksternal)
File: `resources/views/stores/index.blade.php`
- Proses saat delete store/vendor mengambil:
  - Query users:
    - `database.collection('users').where('vendorID','==', storeId).where('role','==','vendor')`
  - setting:
    - `database.collection('settings').doc('Version').get()`
  - membangun endpoint:
    - `siteurl = settingData.storeUrl + "/api/delete-user"`
- Payload yang dipakai untuk POST:
  - `{"uuid": item_data.id}`
- Request:
  - `jQuery.ajax({ url: siteurl, method: 'POST', contentType: 'application/json', data: JSON.stringify({"uuid": item_data.id}) ...})`

### Cloud Function call (terkait deleteUser)
File: `resources/views/stores/index.blade.php`
- Juga memanggil:
  - `https://us-central1-${projectId}.cloudfunctions.net/deleteUser`
- Payload:
  - menggunakan `dataObject = { "uuid": item_data.id }` (nilai `uuid` sama).

### Kecocokan payload dengan Admin Panel
- Admin Panel mengirim payload: **`{"uuid": item_data.id}`**
- Belum bisa dipastikan apakah Website Panel menerima payload dengan bentuk yang sama karena endpoint penerimanya belum ditemukan di repo lokal.

## 10. Jika belum ditemukan
**endpoint penerima belum ditemukan** di `C:\deploy\adminpanel`.
Kemungkinan berada di repo lain (Website Panel / Store Panel) yang belum tersedia lokal.

## 11. Risiko sinkronisasi (berdasarkan konteks temuan)
- Admin Panel delete:
  1. Menghapus data pengguna & relasi di Firestore (client-side admin view).
  2. Memanggil endpoint eksternal `storeUrl + /api/delete-user` untuk delete user (kemungkinan ke MySQL/user via storeUrl).
  3. Memanggil Cloud Function `deleteUser` (kemungkinan menghapus Firebase Auth / atau operasi lain yang terkait).
- Risiko jika salah satu gagal:
  - Data bisa tidak sinkron (mis. Firestore user terhapus tapi user di MySQL/Auth belum terhapus, atau sebaliknya).
  - Karena penghapusan dilakukan berurutan dengan asynchronous callbacks, kegagalan satu request berpotensi meninggalkan konsistensi yang berbeda.

## 12. Rekomendasi tahap berikutnya
1. Cari repo lokal lain untuk “Website Panel / Store Panel” yang menggunakan `storeUrl` / base url `{$settings.storeUrl}`.
2. Target lokasi kandidat (di drive lokal) untuk verifikasi:
   - cari file/route yang memuat:
     - `Route::post('/api/delete-user'` atau `post('/delete-user'` atau `deleteUser`
     - handler function yang menerima body JSON berisi `uuid`.
3. Setelah menemukan endpoint server penerima, dokumentasikan:
   - path route
   - controller/function
   - validasi payload (harus `uuid`)
   - operasi delete yang dilakukan (MySQL/Firebase Auth/Firestore lain)

## 13. Konfirmasi
- Tidak patch.
- Tidak install.
- Tidak migration.
- Tidak commit/push.
- Tidak ubah Firebase/database.

