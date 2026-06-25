# ORDER EDIT EMPTY DATA AUDIT

## Status Audit Source
Audit dilakukan tanpa patch source. Fokus hanya pada `resources/views/orders/edit.blade.php` untuk melacak kenapa halaman order edit tidak crash tetapi banyak field tetap kosong setelah penambahan guard data Firestore.

## Sumber Order ID dari URL
File membaca dua variabel Blade/PHP:
- `var id = "<?php echo $id; ?>";`
- `var oid = "<?php echo $oid; ?>";`

Query utama order menggunakan kondisi:
- jika `oid != ''` maka: `database.collection('vendor_orders').where("id", "==", oid)`
- jika tidak: `database.collection('vendor_orders').where("id", "==", id)`

Artinya, halaman tidak membaca Firestore document id secara langsung, tetapi mencari field `id` di collection `vendor_orders`.

## Collection Firestore yang Dibaca
- `vendor_orders` (query utama order)
- `review_attributes`
- `items_review`
- `currencies`
- `settings/vendor`
- `settings/placeHolderImage`
- `settings/DriverNearBy`
- `settings/scheduleOrderNotification`
- `settings/globalSettings`
- `dynamic_notification`
- `zone`
- `sections`
- `referral`
- `vendors`
- `users`
- `vendor_products`
- `wallet`
- `temp` / `tmp`

## Relasi Dokumen yang Dibaca
### Order utama (`vendor_orders`)
Field penting:
- `id`
- `author`
- `authorID`
- `address`
- `createdAt`
- `payment_method`
- `takeAway`
- `driver`
- `driverID`
- `vendor`
- `vendorID`
- `products`
- `discount`
- `specialDiscount`
- `deliveryCharge`
- `tip_amount`
- `platformFee`
- `taxScope`
- `taxSetting`
- `driverDeliveryTax`
- `packagingTax`
- `platformTax`

### Customer / billing
Dibaca dari nested field order:
- `order.author.firstName`
- `order.author.lastName`
- `order.author.phoneNumber`
- `order.author.email`
- `order.address.name`
- `order.address.address`
- `order.address.locality`
- `order.address.landmark`
- `order.address.country`

### Driver
Dibaca dari nested field order:
- `order.driver.id`
- `order.driver.firstName`
- `order.driver.lastName`
- `order.driver.email`
- `order.driver.phoneNumber`
- `order.driver.carName`
- `order.driver.carNumber`
- `order.driver.profilePictureURL`

Jika nested `order.driver` kosong, view mengosongkan blok driver dengan `.driver_details_hide.empty()`.

### Vendor / store
Sumber awal:
- `order.vendor.title`
- `order.vendor.fcmToken`
- `order.vendor.id`
- `order.vendor.author`
- `order.vendor.section_id`

Lalu query lanjutan:
- `database.collection('vendors').where("id", "==", order.vendorID)`

Field vendor hasil query yang dipakai:
- `photo`
- `title`
- `phonenumber`
- `location`
- `isSelfDelivery`
- `subscriptionTotalOrders`
- `id`

### Products / items
Sumber awal dari nested order:
- `order.products`

Detail tambahan diambil dari:
- `database.collection('vendor_products').doc(productId)`

### Tax / currency / global settings
Sumber:
- `currencies`
- `settings/globalSettings`
- `settings/vendor`
- `settings/DriverNearBy`
- `settings/scheduleOrderNotification`

## Bagian yang Sekarang Memakai `getSafeFirestoreData`
Guard aman aktif pada banyak titik, terutama:
- query utama `vendor_orders`
- `currencies`
- `settings/*`
- `dynamic_notification`
- `sections`
- `vendors`
- `users`
- `vendor_products`
- `items_review`
- refund/wallet flow

Artinya, setelah guard ditambahkan, script lebih memilih fallback kosong daripada crash. Ini bagus untuk stabilitas, tetapi membuat field tampak kosong bila struktur data nyata tidak cocok.

## Kemungkinan Penyebab Data Kosong
1. Query utama `vendor_orders.where("id", "==", ...)` menemukan order, tetapi nested `author/address/vendor/driver/products` tidak lengkap.
2. Relasi vendor kedua `vendors.where("id", "==", order.vendorID)` tidak cocok karena mismatch field/id.
3. `createdAt` dan `payment_method` tidak ada atau formatnya berbeda.
4. `order.products` kosong atau memakai struktur lama.

## Apakah Order ID Tidak Ditemukan?
Dari source saja belum bisa dipastikan. Namun karena loading sudah hilang dan tidak crash, kemungkinan lebih kuat adalah query utama mengembalikan dokumen tetapi isi dokumennya tidak sesuai struktur yang diasumsikan view.

Jika query utama benar-benar kosong, guard berikut akan menghentikan render lebih awal:
- `if (!snapshots || !snapshots.docs || !snapshots.docs.length) { ... return; }`

## Apakah Relasi Driver / Vendor / Customer Kosong?
Kemungkinan kosong paling besar ada di:
- `order.driver`
- `order.vendor`
- `order.address`
- `order.author`
- `order.products`
- hasil query vendor berdasarkan `order.vendorID`

Karena banyak field UI diisi langsung dari nested object, jika nested object tidak tersimpan di dokumen `vendor_orders`, UI akan kosong walaupun relasi sebenarnya mungkin ada di collection lain.

## Kesimpulan Audit
Kemungkinan paling kuat halaman kosong bukan karena guard merusak data, tetapi karena guard sekarang memperlihatkan kenyataan bahwa struktur dokumen order yang dibaca tidak lengkap atau tidak sesuai asumsi view.

## Rekomendasi Patch Minimal Berikutnya
1. Tambahkan audit console ringan pada hasil query utama `vendor_orders`:
   - log `snapshots.docs.length`
   - log keys dari `order`
   - log keberadaan `order.author`, `order.address`, `order.vendor`, `order.driver`, `order.products`
2. Tambahkan fallback render defensif untuk:
   - `order.author` -> query `users` by `authorID` jika nested object kosong
   - `order.vendor` -> query `vendors` by `vendorID` jika nested object kosong
   - `order.driver` -> query `users` by `driverID` jika nested object kosong
3. Tambahkan normalizer `createdAt` untuk beberapa bentuk timestamp lama.
4. Guard `order.products` dengan fallback array kosong + warning khusus.

## Rekomendasi Paling Aman Sebelum Patch Berikutnya
Langkah terbaik berikutnya adalah audit runtime hasil query utama `vendor_orders` untuk order ID ini dan lihat struktur data nyata dari dokumen yang ditemukan. Itu akan memberi jawaban pasti apakah field kosong karena order tidak ditemukan, nested object tidak tersimpan, atau relasi vendor/driver/customer mismatch.
