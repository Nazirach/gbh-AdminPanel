# EMART_TARGETED_PRE_PUSH_CLEANUP_AUDIT

## Mode

- targeted pre-push cleanup audit
- no commit
- no push
- no deploy
- no deletion
- audit and recommendation only

Target:

- `C:\deploy\adminpanel`

Tanggal audit:

- 2026-06-19

---

## 1. File Backup yang Terdeteksi

Ditemukan file backup / salinan lama berikut yang akan ikut repo bila tidak di-ignore:

- `C:\deploy\adminpanel\.env.example.bak`
- `C:\deploy\adminpanel\.gitignore.bak`
- `C:\deploy\adminpanel\Admin Panel\resources\views\drivers\index.blade.php.bak`

Status:

- **BACKUP FILES PRESENT**

Makna:

- repo belum aman untuk `git add .`
- file backup perlu di-ignore atau dipisahkan sebelum pre-push final

---

## 2. Status Folder `Admin Panel/`

### Hasil pembandingan dengan root runtime

Root runtime saat ini sudah memiliki source Laravel utama:

- `app/`
- `resources/`
- `public/`
- `routes/`
- `composer.json`
- `artisan`

Folder `Admin Panel/` juga ternyata berisi struktur Laravel penuh:

- `app/`
- `bootstrap/`
- `config/`
- `database/`
- `Modules/`
- `public/`
- `resources/`
- `routes/`
- `storage/`
- `vendor/`
- `composer.json`
- `artisan`

### Bukti kuat duplikasi

Beberapa file inti terverifikasi identik secara ukuran dan timestamp:

- root `composer.json` dan `Admin Panel/composer.json`
- root `artisan` dan `Admin Panel/artisan`

Beberapa file aplikasi juga sangat mirip/terkait:

- `app/Http/Controllers/PaymentController.php`
- `Admin Panel/app/Http/Controllers/PaymentController.php`

### Perbedaan

Tidak semua file sama persis saat ini.

Contoh:

- `resources/views/drivers/index.blade.php` di root
- `Admin Panel/resources/views/drivers/index.blade.php`

punya ukuran dan timestamp berbeda, yang menandakan root aktif sudah berkembang sementara subfolder `Admin Panel/` tertinggal.

### Kesimpulan klasifikasi

Folder `Admin Panel/` paling tepat diklasifikasikan sebagai:

- **B. copy duplikat yang harus di-ignore**

Bukan source utama runtime, karena:

1. root project sendiri sudah Laravel penuh
2. root aktif yang dipakai audit/runtime ada di luar folder `Admin Panel/`
3. folder `Admin Panel/` terlihat seperti salinan lama / nested duplicate tree

Status:

- **RECOMMEND IGNORE `Admin Panel/`**

---

## 3. Audit Terfokus `app/Http/Controllers/PaymentController.php`

### Indikasi yang ditemukan

Scan indikator menghasilkan line number berikut:

- `C:\deploy\adminpanel\app\Http\Controllers\PaymentController.php:5`
- `C:\deploy\adminpanel\app\Http\Controllers\PaymentController.php:8`
- `C:\deploy\adminpanel\app\Http\Controllers\PaymentController.php:13`
- `C:\deploy\adminpanel\app\Http\Controllers\PaymentController.php:17`
- `C:\deploy\adminpanel\app\Http\Controllers\PaymentController.php:20`
- `C:\deploy\adminpanel\app\Http\Controllers\PaymentController.php:21`
- `C:\deploy\adminpanel\app\Http\Controllers\PaymentController.php:22`
- `C:\deploy\adminpanel\app\Http\Controllers\PaymentController.php:25`
- `C:\deploy\adminpanel\app\Http\Controllers\PaymentController.php:27`
- `C:\deploy\adminpanel\app\Http\Controllers\PaymentController.php:28`
- `C:\deploy\adminpanel\app\Http\Controllers\PaymentController.php:36`
- `C:\deploy\adminpanel\app\Http\Controllers\PaymentController.php:39`
- `C:\deploy\adminpanel\app\Http\Controllers\PaymentController.php:40`
- `C:\deploy\adminpanel\app\Http\Controllers\PaymentController.php:41`
- `C:\deploy\adminpanel\app\Http\Controllers\PaymentController.php:44`
- `C:\deploy\adminpanel\app\Http\Controllers\PaymentController.php:50`
- `C:\deploy\adminpanel\app\Http\Controllers\PaymentController.php:54`
- `C:\deploy\adminpanel\app\Http\Controllers\PaymentController.php:56`
- `C:\deploy\adminpanel\app\Http\Controllers\PaymentController.php:68`
- `C:\deploy\adminpanel\app\Http\Controllers\PaymentController.php:72`
- `C:\deploy\adminpanel\app\Http\Controllers\PaymentController.php:74`
- `C:\deploy\adminpanel\app\Http\Controllers\PaymentController.php:91`
- `C:\deploy\adminpanel\app\Http\Controllers\PaymentController.php:93`
- `C:\deploy\adminpanel\app\Http\Controllers\PaymentController.php:95`
- `C:\deploy\adminpanel\app\Http\Controllers\PaymentController.php:97`
- `C:\deploy\adminpanel\app\Http\Controllers\PaymentController.php:101`
- `C:\deploy\adminpanel\app\Http\Controllers\PaymentController.php:104`
- `C:\deploy\adminpanel\app\Http\Controllers\PaymentController.php:117`
- `C:\deploy\adminpanel\app\Http\Controllers\PaymentController.php:122`
- `C:\deploy\adminpanel\app\Http\Controllers\PaymentController.php:126`
- `C:\deploy\adminpanel\app\Http\Controllers\PaymentController.php:129`
- `C:\deploy\adminpanel\app\Http\Controllers\PaymentController.php:130`
- `C:\deploy\adminpanel\app\Http\Controllers\PaymentController.php:133`
- `C:\deploy\adminpanel\app\Http\Controllers\PaymentController.php:135`
- `C:\deploy\adminpanel\app\Http\Controllers\PaymentController.php:138`
- `C:\deploy\adminpanel\app\Http\Controllers\PaymentController.php:144`
- `C:\deploy\adminpanel\app\Http\Controllers\PaymentController.php:147`
- `C:\deploy\adminpanel\app\Http\Controllers\PaymentController.php:148`
- `C:\deploy\adminpanel\app\Http\Controllers\PaymentController.php:164`
- `C:\deploy\adminpanel\app\Http\Controllers\PaymentController.php:168`
- `C:\deploy\adminpanel\app\Http\Controllers\PaymentController.php:171`
- `C:\deploy\adminpanel\app\Http\Controllers\PaymentController.php:174`
- `C:\deploy\adminpanel\app\Http\Controllers\PaymentController.php:184`

### Kesimpulan audit terarah

Setelah inspeksi manual file:

- **tidak terlihat hardcoded credential nyata** di file ini
- indikator muncul karena controller menangani payment gateway runtime input seperti:
  - Paytm merchant key
  - Braintree private/public key
  - Stripe secret

### Klasifikasi risiko

`PaymentController.php`:

- **tidak tampak menyimpan secret yang ditanam langsung di source**
- tetapi **menangani material sensitif dari request runtime**

Makna untuk pre-push:

- file ini boleh tetap diaudit lebih lanjut
- tetapi pada audit ini **belum ada bukti hardcoded key** yang memaksa file harus dikeluarkan dari repo

Status:

- **NO HARDCODED SECRET PROVEN**
- **SENSITIVE PAYMENT FLOW PRESENT**

---

## 4. Status Git Saat Ini

Hasil `git status --short`:

- root project baru saja di-init sebagai repo
- hampir seluruh source utama tampil sebagai `??`
- folder `Admin Panel/` ikut tampil sebagai `??`
- file backup seperti `.gitignore.bak` juga ikut tampil

Status:

- **REPO ACTIVE, BUT CLEANUP NEEDED BEFORE ADD**

---

## 5. Rekomendasi Ignore Tambahan

Tambahan `.gitignore` yang direkomendasikan:

```gitignore
*.bak
*.backup
*.old
*.orig
Admin Panel/
```

Alasan:

### `*.bak`, `*.backup`, `*.old`, `*.orig`

- file backup saat ini terbukti ada
- tidak layak ikut repo production

### `Admin Panel/`

- secara audit paling kuat merupakan nested duplicate source tree
- berisiko menggandakan source
- berisiko membingungkan Laravel Cloud / reviewer / developer lain

Status:

- **STRONGLY RECOMMENDED**

---

## 6. Rekomendasi `git add` Terbatas

### Jangan gunakan

```bash
git add .
```

### Gunakan strategi add terbatas

Daftar yang relatif aman untuk dipertimbangkan:

- `app/`
- `bootstrap/`
- `config/`
- `database/`
- `public/` kecuali `public/storage`
- `resources/`
- `routes/`
- `composer.json`
- `composer.lock`
- `package.json`
- `package-lock.json`
- `artisan`
- `.gitignore`
- `.env.example`
- `README_LARAVEL_CLOUD_DEPLOY.md`

### Untuk `docs/`

Jangan masukkan seluruh `docs/` secara buta.

Pilih hanya dokumen yang memang ingin menjadi artefak repo, misalnya:

- `docs/EMART_GITHUB_LARAVEL_CLOUD_FIREBASE_PREP.md`
- `docs/EMART_GITHUB_SAFE_TEMPLATE_PATCH_REPORT.md`
- `docs/EMART_GIT_PRE_PUSH_AUDIT.md`
- `docs/EMART_TARGETED_PRE_PUSH_CLEANUP_AUDIT.md`

### Contoh add aman

```bash
git add app bootstrap config database public resources routes composer.json composer.lock package.json package-lock.json artisan .gitignore .env.example README_LARAVEL_CLOUD_DEPLOY.md
```

Lalu jika mau:

```bash
git add docs/EMART_GITHUB_LARAVEL_CLOUD_FIREBASE_PREP.md docs/EMART_GITHUB_SAFE_TEMPLATE_PATCH_REPORT.md docs/EMART_GIT_PRE_PUSH_AUDIT.md docs/EMART_TARGETED_PRE_PUSH_CLEANUP_AUDIT.md
```

Status:

- **RECOMMENDED**

---

## 7. Apakah Aman Lanjut ke Patch `.gitignore` Final?

Kesimpulan:

- **YA, aman lanjut ke patch `.gitignore` final**

Karena sekarang kita sudah punya dasar bukti:

1. file backup memang ada
2. `Admin Panel/` sangat mungkin nested duplicate tree
3. secret indikator utama tetap terisolasi di file env/backup, bukan terbukti hardcoded di `PaymentController.php`

Patch `.gitignore` final yang paling masuk akal berikutnya adalah menambahkan:

- `*.bak`
- `*.backup`
- `*.old`
- `*.orig`
- `Admin Panel/`

---

## Ringkasan

### File backup terdeteksi

- ya

### Folder `Admin Panel/`

- **duplikat source tree**
- **disarankan di-ignore**

### `PaymentController.php`

- ada indikator sensitif
- **tidak terbukti** menyimpan secret hardcoded
- tetap perlu kehati-hatian karena menangani payment credentials dari request runtime

### Strategi aman berikutnya

- patch `.gitignore` final
- lalu audit ulang `git status --short`
- lalu `git add` terbatas

### Putusan akhir

- **AMAN LANJUT KE PATCH `.gitignore` FINAL**
