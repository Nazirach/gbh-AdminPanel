# WEBSITE_PANEL_LOCAL_FOLDER_DISCOVERY_REPORT

## 1. Tujuan audit
Mencari folder lokal yang berpotensi berisi **Website Panel / Store Panel / Store Website** yang memiliki endpoint/handler terkait penghapusan user:
- `POST /api/delete-user`
- variasi string: `delete-user`, `deleteUser`, `delete_user`, `destroyUser`, `removeUser`
- payload terkait (dari Admin Panel): `{"uuid": item_data.id}`

## 2. Mode read-only
- Audit hanya membaca file.
- Tidak patch, tidak refactor, tidak install package.
- Tidak composer/npm install.
- Tidak migration.
- Tidak ubah Firebase/database.
- Tidak commit/push.
- Tidak hapus file.

## 3. Kenapa memakai PowerShell native
Tool pencarian berbasis ripgrep (`rg`) gagal tersedia (ripgrep binary tidak ditemukan). Untuk itu dipakai PowerShell native:
- `Get-ChildItem` untuk discover folder kandidat
- `Select-String` untuk mencari pattern endpoint/handler

## 4. Root folder yang dicek
Rencana root yang dicek (sesuai script):
- `C:\deploy`
- `C:\Users\Hp\Desktop`
- `C:\Users\Hp\Documents`
- `C:\Users\Hp\Downloads`

## 5. Folder kandidat yang ditemukan
Belum dapat dilaporkan karena eksekusi pencarian endpoint masih berjalan lama dan belum menghasilkan daftar hit/hasil akhir di log/CSV pada saat audit ini ditutup.

## 6. Tipe project kandidat
Belum dapat dipastikan (belum keluar hasil).
Heuristik yang dipakai:
- ada `composer.json` atau `package.json`
- atau ada `routes\api.php` / `routes\web.php`
- atau ada `app\Http\Controllers`
- atau ada `src` atau `pages`

## 7. Hasil pencarian endpoint delete-user
**Belum ada kepastian hasil**.
- Script discovery endpoint berhasil dijalankan hingga tahap awal: `[INFO] Starting discovery (read-only) ...`
- Namun eksekusi pencarian belum mengeluarkan/menyelesaikan hasil akhir (hit) yang bisa diverifikasi dalam laporan.

## 8. Jika endpoint ditemukan
Belum tersedia.

## 9. Jika belum ditemukan
Belum dapat diputuskan.
Kalimat yang benar untuk kondisi saat ini:
- **endpoint penerima belum dapat dipastikan (belum ada hasil final) di folder lokal yang dicek**.

## 10. Risiko sistem jika endpoint belum ditemukan
Jika endpoint penerima sebenarnya ada di repo lain yang tidak terdeteksi lokal, maka:
- Risiko audit “false negative” (salah menganggap endpoint tidak ada).
- Risiko pemahaman sinkronisasi delete user tidak lengkap.
- Potensi ketidaksesuaian payload (`{"uuid": ...}`) dan operasi delete (MySQL/user vs Firebase Auth) tidak terverifikasi.

## 11. Rekomendasi langkah berikutnya
1. Pastikan proses skrip discovery endpoint selesai dan keluarkan hasilnya (mis. verifikasi CSV hit `docs/WEBSITE_PANEL_LOCAL_FOLDER_DISCOVERY_ENDPOINT_HITS.csv`).
2. Bila pencarian terlalu berat, batasi ruang lingkup:
   - fokus ke folder yang sudah diketahui “emart/store/website/panel/safe”.
3. Jika repo target tidak ada lokal:
   - cari dari GitHub (repo list) yang sesuai basis URL `settings/Version.storeUrl`.
4. Setelah repo ditemukan, lakukan pencarian spesifik di sana untuk:
   - `Route::post('/delete-user'` / `router.post('/api/delete-user'`
   - handler yang menerima JSON body `uuid`.

## 12. Konfirmasi
- Tidak patch
- Tidak install
- Tidak migration
- Tidak commit/push
- Tidak ubah Firebase/database

