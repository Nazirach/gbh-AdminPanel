# LARAVEL_CLOUD_FINAL_RELEASE_COMMAND_PLAN

Target: `C:\deploy\adminpanel`  
Repo: `https://github.com/Nazirach/gbh-AdminPanel`  
Branch: `main`

## Status

Status akhir: **NO-GO** sampai:

1. Semua ENV production sudah terisi benar di Laravel Cloud.
2. `FIREBASE_CREDENTIALS_JSON_BASE64` sudah diisi.
3. Database existing sudah di-import ke MySQL Laravel Cloud.
4. Verifikasi pasca-deploy lulus pada route inti dan pembacaan Firebase.

Jika empat syarat ini sudah terpenuhi, status bisa naik ke **GO FOR FIRST DEPLOY ATTEMPT**.

---

## 1. Build Command

Gunakan build command berikut di Laravel Cloud:

```bash
composer install --no-dev --optimize-autoloader
```

Alasan:

- dependency PHP production perlu terpasang
- asset public sudah tersedia
- tidak ada kebutuhan build frontend modern yang jelas untuk deploy awal

---

## 2. Release Command

Gunakan release/deploy command berikut di Laravel Cloud:

```bash
php scripts/materialize-firebase-credentials.php
php artisan optimize:clear
php artisan config:cache
php artisan route:cache
php artisan view:cache
```

Urutan ini dipilih karena:

1. credential Firebase harus dimaterialize dulu
2. cache lama dibersihkan
3. cache config/route/view dibangun ulang setelah ENV sudah benar

Catatan:

- jangan jalankan `php artisan migrate`
- jangan jalankan command yang mengubah schema production
- jangan jalankan command Node/build asset pada deploy awal ini

---

## 3. Skipped Commands dan Alasan

### Tidak dipakai

```bash
npm install
npm run production
php artisan migrate
php artisan migrate --force
```

### Alasan

#### `npm install`

- deploy awal tidak bergantung pada rebuild asset modern
- `webpack.mix.js` tidak tersedia sebagai dasar build yang jelas
- public asset saat ini sudah ada

#### `npm run production`

- tidak ada jalur build frontend yang cukup jelas untuk dipaksa sekarang
- berisiko menambah blocker baru tanpa manfaat langsung pada deploy awal

#### `php artisan migrate`

- migration repository tidak cukup menjadi source-of-truth database production
- aplikasi bergantung pada database existing/import
- menjalankan migrate berisiko membuat schema production menyimpang dari dump nyata

---

## 4. ENV Checklist di Laravel Cloud

### APP

- `APP_NAME`
- `APP_ENV=production`
- `APP_KEY`
- `APP_DEBUG=false`
- `APP_URL`
- `APP_TIMEZONE`
- `APP_LOCALE`
- `APP_FALLBACK_LOCALE`
- `APP_FAKER_LOCALE`

### DB

- `DB_CONNECTION=mysql`
- `DB_HOST`
- `DB_PORT`
- `DB_DATABASE`
- `DB_USERNAME`
- `DB_PASSWORD`

### FIREBASE FRONTEND

- `FIREBASE_API_KEY`
- `FIREBASE_AUTH_DOMAIN`
- `FIREBASE_DATABASE_URL`
- `FIREBASE_PROJECT_ID`
- `FIREBASE_STORAGE_BUCKET`
- `FIREBASE_MESSAGING_SENDER_ID`
- `FIREBASE_APP_ID`
- `FIREBASE_MEASUREMENT_ID`

### FIREBASE BACKEND

- `FIREBASE_APIKEY`
- `FIREBASE_PROJECT_DB`
- `FIREBASE_AUTH_DOMAIN`
- `FIREBASE_DATABASE_URL`
- `FIREBASE_PROJECT_ID`
- `FIREBASE_STORAGE_BUCKET`
- `FIREBASE_MESSAAGING_SENDER_ID`
- `FIREBASE_APP_ID`
- `FIREBASE_MEASUREMENT_ID`

### FIREBASE SECRET

- `FIREBASE_CREDENTIALS_JSON_BASE64`
- `FIREBASE_CREDENTIALS=storage/app/firebase/credentials.json`

### SESSION / CACHE / QUEUE

- `BROADCAST_DRIVER`
- `CACHE_DRIVER`
- `FILESYSTEM_DISK`
- `QUEUE_CONNECTION`
- `SESSION_DRIVER`
- `SESSION_LIFETIME`
- `LOG_CHANNEL`
- `LOG_LEVEL`

### MAIL

- `MAIL_MAILER`
- `MAIL_HOST`
- `MAIL_PORT`
- `MAIL_USERNAME`
- `MAIL_PASSWORD`
- `MAIL_ENCRYPTION`
- `MAIL_FROM_ADDRESS`
- `MAIL_FROM_NAME`

### NODE / SCHEDULER

Isi bila scheduler Firebase JS ingin diaktifkan:

- `NODE_PATH`
- `NODE_BINARY`

### OPENAI

- `OPENAI_API_KEY`

### Catatan mismatch wajib

Karena source masih campuran, isi kedua varian berikut:

- `FIREBASE_APIKEY` dan `FIREBASE_API_KEY`
- `FIREBASE_MESSAAGING_SENDER_ID` dan `FIREBASE_MESSAGING_SENDER_ID`

---

## 5. DB Import Checklist

Sumber dump lokal:

- `database_backups/emart_20260620_1725.sql`

Checklist import:

1. Siapkan resource MySQL di Laravel Cloud.
2. Catat host, port, database, username, dan password MySQL production.
3. Import file dump existing:
   - `database_backups/emart_20260620_1725.sql`
4. Jangan jalankan migration production sebelum validasi hasil import.
5. Setelah import, validasi tabel inti minimal:
   - `users`
   - `role`
   - `permissions`
   - `vendor_users`
6. Jika tabel inti tidak lengkap, hentikan deploy app-level dan audit dump lebih dulu.

### Aturan penting

- **jangan migrate production**
- **jangan anggap dump bisa diganti migration**

---

## 6. Post-Deploy Test Checklist

Setelah deploy pertama selesai, uji berurutan:

### Route dasar

- `/`
- `/login`

### Modul inti

- `/users`
- `/vendors`
- `/orders`
- `/drivers`

### Validasi Firebase browser

- buka browser DevTools console
- pastikan tidak ada error init Firebase
- pastikan tidak ada error credential/config Firestore merah
- pastikan data tampil, bukan hanya halaman kosong

### Validasi Laravel

- cek Laravel logs
- cek error runtime terkait:
  - Firebase credential
  - Firestore permission/config
  - database connection
  - missing table/column

### Validasi khusus drivers

- pastikan list tidak kembali 0 karena filter runtime
- cek console browser bila ada error Firestore/index/client JS

---

## 7. Urutan Eksekusi yang Direkomendasikan

1. Lengkapi ENV Laravel Cloud.
2. Tambahkan `FIREBASE_CREDENTIALS_JSON_BASE64`.
3. Import MySQL dump existing.
4. Jalankan deploy dengan build dan release command di atas.
5. Verifikasi route inti.
6. Verifikasi Firebase read dari browser.
7. Verifikasi log Laravel.
8. Baru pertimbangkan aktivasi scheduler Node jika web inti sudah stabil.

---

## 8. Final GO / NO-GO

### Status saat ini

**NO-GO**

### Alasan

- deploy command sudah siap, tetapi environment dan runtime secret belum terbukti terpasang di Laravel Cloud
- database production existing belum diverifikasi selesai di-import pada target cloud
- Firebase tetap blocker bila credential runtime atau ENV salah satu saja tidak lengkap

### Kondisi untuk berubah menjadi GO

Bisa dianggap **GO FOR FIRST DEPLOY ATTEMPT** jika semua berikut selesai:

1. ENV Laravel Cloud lengkap
2. `FIREBASE_CREDENTIALS_JSON_BASE64` terisi
3. release command berhasil membuat `storage/app/firebase/credentials.json`
4. dump MySQL existing berhasil di-import
5. validasi `/login`, `/users`, `/vendors`, `/orders`, `/drivers` lulus

---

## Ringkasan singkat

Deploy awal yang aman untuk eMart di Laravel Cloud adalah:

- install dependency PHP saja
- materialize Firebase credential saat release
- clear dan rebuild cache Laravel
- import database existing
- skip npm build
- skip migrate
- uji web inti dan Firestore read sebelum melangkah lebih jauh
