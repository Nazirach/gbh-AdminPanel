# ERBETE APP PACKAGE DISCOVERY SUMMARY

## Kesimpulan Awal

Ada dua sumber aplikasi yang terbaca:

1. Source 2026-06-10
   - Masih mengandung placeholder Firebase YOUR_PROJECT_ID.
   - Package sudah mulai berubah ke com.erbete.customer dan com.erbete.driver.
   - Masih ada sisa com.emart.customer dan com.emart.driver pada deep link, map user agent, dan beberapa teks lama.

2. Source 2026-06-12
   - Lebih siap dibaca sebagai baseline baru.
   - Firebase sudah mengarah ke project erbete-putra.
   - Customer package: com.erbete.customer.
   - Driver package: com.erbete.driver.
   - google-services.json juga memuat package com.erbete.restaurant.

## Aplikasi yang Terdeteksi

- Erbete Customer App
- Erbete Driver App
- Erbete Restaurant App

## Firebase Project

- project_id: erbete-putra
- firebase_url: https://erbete-putra-default-rtdb.asia-southeast1.firebasedatabase.app
- storage_bucket: erbete-putra.appspot.com

## Risiko yang Masih Ada

- Masih ada sisa nama eMart di teks UI.
- Masih ada sisa com.emart.* pada beberapa file lama.
- Perlu pastikan app aktif yang dipakai adalah source 2026-06-12, bukan source 2026-06-10.
- Perlu cari repo Git asli untuk customer, driver, dan restaurant.

## Keputusan Kendali

Untuk audit lanjutan, gunakan source 2026-06-12 sebagai kandidat baseline aplikasi Erbete.

Jangan patch dulu sebelum repo Git asli dan folder kerja aktif dikunci.