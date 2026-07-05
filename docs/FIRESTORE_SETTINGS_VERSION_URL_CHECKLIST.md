# FIRESTORE SETTINGS VERSION URL CHECKLIST

## Tujuan
Membaca nilai real URL dari Firestore tanpa mengubah data.

## Lokasi Firestore
Firebase Console
→ Firestore Database
→ collection: **settings**
→ document: **Version**

## Field yang harus dicatat
- **storeUrl**
- **websiteUrl**
- **providerUrl**
- **web_version**
- **app_version**

## Jangan ubah
- Jangan edit field.
- Jangan klik update/save.
- Jangan hapus document.
- Jangan ubah rules.
- Jangan ubah collection.

## Nilai yang harus dicatat manual
| Field | Nilai dari Firestore | Dugaan receiver | Status cocok |
|---|---|---|---|
| storeUrl | isi manual | Store Panel | belum dicek |
| websiteUrl | isi manual | Website Panel | belum dicek |
| providerUrl | isi manual | Provider receiver belum ditemukan | belum dicek |

## Cara cek cepat setelah URL diketahui
Jika **storeUrl = https://contoh-store.com**
 maka endpoint receiver:
https://contoh-store.com/api/delete-user

Jika **websiteUrl = https://contoh-website.com**
 maka endpoint receiver:
https://contoh-website.com/api/delete-user

Jika **providerUrl = https://contoh-provider.com**
 maka endpoint receiver:
https://contoh-provider.com/api/delete-user

## Catatan penting
Jangan test POST **/api/delete-user** dengan UUID asli karena dapat menghapus data.
Jika ingin test, harus dibuat endpoint safe/dummy atau gunakan uuid dummy yang tidak ada.

