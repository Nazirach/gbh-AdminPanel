# ERBETE ECOSYSTEM GIT APP MAP

## Status

Peta Git dan aplikasi Erbete sudah dikunci dari hasil audit lokal.

## Git Root Resmi

- Local root: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation
- Remote: https://github.com/Nazirach/emart-panel-safe.git
- Branch: main

## App Source Baseline

- Customer App: work\emart-apps-extract\emart-6.7\customer
- Driver App: work\emart-apps-extract\emart-6.7\driver
- Vendor / Restaurant App: work\emart-apps-extract\emart-6.7\vendor

## App Package Map

### Customer App

- Flutter name: customer
- Version: 1.0.0+4
- Android namespace: com.erbete.customer
- Android applicationId: com.erbete.customer
- Firebase project_id: erbete-putra
- Firebase databaseURL: https://erbete-putra-default-rtdb.asia-southeast1.firebasedatabase.app
- Firebase storage bucket: erbete-putra.appspot.com
- Risk: masih ada sisa teks dan komentar lama eMart / com.emart.customer

### Driver App

- Flutter name: driver
- Version: 1.0.3+1003
- Android namespace: com.erbete.driver
- Android applicationId: com.erbete.driver
- Firebase project_id: erbete-putra
- Firebase databaseURL: https://erbete-putra-default-rtdb.asia-southeast1.firebasedatabase.app
- Firebase storage bucket: erbete-putra.appspot.com
- Risk: masih ada sisa teks eMart dan userAgentPackageName com.emart.driver / com.emart.app

### Vendor / Restaurant App

- Flutter name: vendor
- Version: 6.0.0+1
- Android namespace: com.erbete.restaurant
- Android applicationId: com.erbete.restaurant
- Firebase project_id: erbete-putra
- Firebase databaseURL: https://erbete-putra-default-rtdb.asia-southeast1.firebasedatabase.app
- Firebase storage bucket: erbete-putra.appspot.com
- App title: Erbete Restaurant
- Risk: masih ada teks lama eMart Store dan iOS config placeholder

## Panel Source Baseline

- Admin / Store / Website berada di area work\landing-panels-extract.
- Copy kerja lokal aktif saat ini berada di C:\deploy\adminpanel, C:\deploy\storepanel, dan C:\deploy\websitepanel.

## Database / API Local yang Sudah Tervalidasi

- Local MySQL: emart
- Tabel penting: users, vendor_users
- Store Panel API: POST http://127.0.0.1:8001/api/delete-user
- Website Panel API: POST http://127.0.0.1:8002/api/delete-user
- Status: delete dummy berhasil pada Store dan Website

## Catatan Delete User

- Jalur Laravel lokal delete-user hanya menyentuh MySQL emart.
- Vendor app memiliki referensi Cloud Function deleteUser berbasis Firebase projectId.
- Jalur Firebase Auth / Cloud Function belum boleh dieksekusi sebelum audit dikunci.

## Risiko Umum

- Branding lama eMart masih tersebar di Customer, Driver, dan Vendor.
- Beberapa userAgentPackageName lama masih memakai com.emart.*.
- iOS Firebase config sebagian masih placeholder.
- Perlu peta relasi Firestore collection sebelum patch besar.

## Keputusan Kendali

- Jangan patch app dulu.
- Jangan git add .
- Jangan commit/push dulu.
- Lanjutkan ke FIREBASE_APP_COLLECTION_SYNC_MAP.
- Setelah peta collection dikunci, baru tentukan patch bertahap.