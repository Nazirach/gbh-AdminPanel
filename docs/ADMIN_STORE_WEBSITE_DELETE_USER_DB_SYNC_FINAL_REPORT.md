# ADMIN STORE WEBSITE DELETE USER DB SYNC FINAL REPORT

## Status Final

Jalur delete-user lokal sudah berhasil diuji dan divalidasi pada Store Panel dan Website Panel.

## Panel

- Admin Panel: http://127.0.0.1:8000
- Store Panel: http://127.0.0.1:8001
- Website Panel: http://127.0.0.1:8002

## Database Kendali

- MySQL XAMPP
- Database: emart
- Username: root
- Password: kosong

Store Panel dan Website Panel sudah diarahkan ke database yang sama:

DB_DATABASE=emart
DB_USERNAME=root
DB_PASSWORD=

## Route Terkonfirmasi

Store Panel:
POST api/delete-user -> ApiController@deleteUserFromDb

Website Panel:
POST api/delete-user -> ApiController@deleteUserFromDb

Catatan:
Route ini hanya menerima POST. Jika dibuka langsung di browser, browser memakai GET dan Laravel menampilkan MethodNotAllowedHttpException. Itu normal dan bukan error sistem.

## Tabel Penting

Database emart memiliki tabel penting:
- users
- vendor_users

Struktur vendor_users:
- id
- user_id
- uuid
- email

## Alur Endpoint delete-user

1. Menerima uuid
2. Validasi uuid harus ada di vendor_users
3. Ambil user_id dari vendor_users
4. Hapus user dari tabel users
5. Hapus relasi dari tabel vendor_users

Endpoint ini tidak menyentuh Firebase Auth atau Firestore secara langsung.

## Hasil Store API

Endpoint:
POST http://127.0.0.1:8001/api/delete-user

Dummy:
uuid  : __DUMMY_FINAL_DELETE__
email : dummy_final_delete@test.local

Hasil:
status  : okay
message : User and associated records deleted successfully.

Verifikasi akhir:
- dummy hilang dari users
- dummy hilang dari vendor_users

## Hasil Website API

Endpoint:
POST http://127.0.0.1:8002/api/delete-user

Dummy:
uuid  : __DUMMY_WEBSITE_FINAL_DELETE__
email : dummy_website_final_delete@test.local

Hasil:
status  : okay
message : User and associated records deleted successfully.

Verifikasi akhir:
- dummy hilang dari users
- dummy hilang dari vendor_users

## Kesimpulan

Jalur berikut sudah valid:

Admin / caller
-> Store API / Website API
-> Laravel ApiController::deleteUserFromDb
-> MySQL emart
-> users + vendor_users
-> delete berhasil

Masalah yang sudah selesai:
- SQLSTATE[HY000] [1045] hilang
- Store dan Website tidak lagi memakai database kosong
- Store dan Website sinkron ke database emart
- Store API berhasil delete dummy
- Website API berhasil delete dummy
- Route delete-user terkonfirmasi POST-only

## Catatan Kendali

Untuk saat ini jangan memakai database terpisah:
- storepanel
- websitepanel

Database kendali lokal yang dipakai:
- emart

Jangan menjalankan delete terhadap UUID asli sebelum peta Firebase/Auth/Firestore dikunci.

## Status Safe Bypass

Masih ada blok lokal:
LOCAL_SAFE_TEST_DELETE_USER_BYPASS

Blok ini hanya aktif jika uuid:
__SAFE_TEST_DO_NOT_DELETE__

Blok ini tidak mengganggu delete normal, tetapi dapat dihapus setelah audit final selesai.