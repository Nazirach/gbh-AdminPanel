# ERBETE WEB APP UNIFIED FUNCTION MAP DRAFT

Generated: 06/28/2026 05:04:53

## Tujuan

Dokumen ini menyatukan peta fungsi Customer App, Driver App, Restaurant App, Admin Panel, Store Panel, Website Panel, Firebase, MySQL, API Laravel, dan Cloud Function.

## Sumber

- App collection map: docs/FIREBASE_APP_CORE_COLLECTION_MAP.md
- Raw connection audit: docs/ERBETE_WEB_APP_FUNCTION_CONNECTION_RAW.txt
- Ecosystem map: docs/ERBETE_ECOSYSTEM_GIT_APP_MAP.md

## Ringkasan Keyword Per Target

| Target | users | vendors | vendor_orders | settings | tax | wallet | zone | sections | notifications | Firestore | RealtimeDB | delete-user | deleteUser | cloudfunctions | api |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| CUSTOMER_APP | 36 | 37 | 2 | 59 | 1238 | 1213 | 88 | 26 | 4 | 6 | 3 | 2 | 10 | 1 | 10 |
| DRIVER_APP | 54 | 5 | 1 | 101 | 735 | 1393 | 225 | 107 | 9 | 6 | 3 | 0 | 7 | 1 | 1 |
| RESTAURANT_APP | 0 | 0 | 0 | 0 | 29 | 2 | 3 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| ADMIN_PANEL | 1091 | 500 | 87 | 6067 | 3271 | 746 | 6640 | 269 | 261 | 0 | 0 | 2 | 10 | 5 | 73 |
| STORE_PANEL | NOT FOUND |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| WEBSITE_PANEL | NOT FOUND |  |  |  |  |  |  |  |  |  |  |  |  |  |  |

## Fungsi Inti Sistem

| Fungsi | Data Utama | App | Web/Panel | Status Awal |
|---|---|---|---|---|
| User / Auth | users | Customer, Driver, Restaurant | Admin/Store/Website | Terhubung lewat Firestore, perlu validasi Auth + MySQL |
| Vendor / Restaurant | vendors, vendor_products, vendor_categories | Customer, Restaurant | Admin/Store | Terhubung lewat Firestore |
| Order | vendor_orders, parcel_orders, rental_orders, rides | Customer, Driver, Restaurant | Admin/Store/POS/Reports | Terhubung kuat lewat Firestore |
| Wallet / Payout | wallet, driver_payouts, payouts | Customer, Driver, Restaurant | Admin payout/payment modules | Terhubung lewat Firestore |
| Tax | tax, settings | Customer, Driver, Restaurant | Admin tax report/POS/settings | Terhubung, perlu pastikan scope sama |
| Settings / Version / URL | settings, Version, websiteUrl, storeUrl, providerUrl | App membaca config | Admin mengatur config | Sebagian sudah valid |
| Notification | notifications, dynamic_notification, FCM | App menerima | Admin mengatur/memicu | Perlu validasi FCM |
| Delete User | users, vendor_users, /api/delete-user, deleteUser | App/Cloud Function | Laravel API/MySQL | Terbelah, wajib dikunci sebelum patch |

## Kesimpulan Sementara

- Web dan app memakai banyak collection Firestore yang sama.
- Sistem inti sudah satu tulang punggung: Firebase project erbete-putra.
- MySQL emart dipakai oleh Laravel panel untuk fungsi lokal tertentu, terutama jalur delete-user.
- Risiko terbesar saat ini adalah jalur fungsi yang bercabang: sebagian langsung Firestore, sebagian Laravel API, sebagian Cloud Function.

## Keputusan Kendali

- Jangan patch sebelum jalur Login, Order, Vendor, Driver, Wallet, Tax, dan Delete User dikunci.
- Jangan git add .
- Jangan commit/push dulu.
- Tahap berikutnya: audit khusus Delete User dan Settings/Version karena dua fungsi ini menghubungkan app, web, Firebase, dan MySQL.

## Koreksi Restaurant App

- Restaurant/Vendor App sebelumnya terbaca 0 karena filter scan membuang path yang mengandung vendor.
- Audit koreksi membuktikan Restaurant/Vendor App memiliki koneksi fungsi aktif: store/outlet, order, driver, dine-in, chat, employee, role, wallet, tax, notification, dan Firestore.
- Dengan koreksi ini, Customer App, Driver App, dan Restaurant/Vendor App diperlakukan sebagai bagian dari satu ekosistem Firebase yang sama.
