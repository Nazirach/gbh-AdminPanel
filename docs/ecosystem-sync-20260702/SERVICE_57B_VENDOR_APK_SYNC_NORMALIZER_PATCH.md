# SERVICE 57B VENDOR APK SYNC NORMALIZER PATCH

## Mode
PATCH MINIMAL

## Tujuan
Menormalkan Vendor APK agar write path utama lebih sinkron dengan kontrak Admin Web dan Firebase.

## Dokumen yang Dibaca
- `docs/ecosystem-sync-20260702/BUKU_BESAR_AI_ECOSYSTEM_HANDOVER.md`
- `docs/ecosystem-sync-20260702/AI_CHANGELOG_PROTOCOL.md`
- `docs/ecosystem-sync-20260702/MASTER_ADMIN_CONTROL_CENTER_SYNC_CONTRACT.md`
- `docs/ecosystem-sync-20260702/SERVICE_57A_VENDOR_APK_SYNC_AUDIT.md`

## File yang Diubah
Vendor APK (Flutter) runtime:
- `vendor/lib/models/product_model.dart`
- `vendor/lib/controller/add_product_controller.dart`
- `vendor/lib/models/vendor_model.dart`
- `vendor/lib/controller/add_restaurant_controller.dart`
- `vendor/lib/models/order_model.dart`
- `vendor/lib/utils/fire_store_utils.dart`

## Product Patch
**updatedAt ditambahkan di mana**
- `lib/models/product_model.dart`
  - Tambah field `Timestamp? updatedAt`
  - Tambah parsing `updatedAt = json['updatedAt'];`
  - Tambah `data['updatedAt'] = updatedAt;` di `toJson()`
- `lib/controller/add_product_controller.dart`
  - Set `productModel.value.updatedAt = Timestamp.now();` pada flow create maupun update.

**photo fallback ditambahkan atau tidak**
- `photo` sudah aman: `productModel.value.photo = images.isNotEmpty ? images.first : "";`
- Tidak ada perubahan besar struktur photos list.

**createdAt tetap aman atau tidak**
- `createdAt` pada update mempertahankan nilai lama (`productModel.value.createdAt = productModel.value.createdAt;`).
- Pada create tetap set `createdAt = Timestamp.now()`.

## Vendor Patch
**updatedAt ditambahkan di mana**
- `lib/models/vendor_model.dart`
  - Tambah field `Timestamp? updatedAt`
  - Tambah parsing `updatedAt = json['updatedAt'];`
  - Tambah `data['updatedAt'] = updatedAt;` di `toJson()`
- `lib/controller/add_restaurant_controller.dart`
  - Set `vendorModel.value.updatedAt = Timestamp.now();` pada create/update save flow.

**photo fallback ditambahkan atau tidak**
- Ya.
- Sebelumnya `photo` berpotensi null saat `images.isEmpty`.
- Diubah menjadi non-null string:
  - jika `images.isNotEmpty` → `vendorModel.value.photo = images.first`
  - else → `vendorModel.value.photo = ""`

**coordinates diisi atau tidak**
- Ya (minimal, tanpa ubah struktur besar).
- Di `add_restaurant_controller.dart` ditambahkan:
  - `vendorModel.value.coordinates = GeoPoint(selectedLocation!.latitude, selectedLocation!.longitude);`

**publish/isActive dipatch atau tidak dan alasannya**
- Tidak dipatch.
- `VendorModel` di runtime tidak memiliki field `publish/isActive`, sehingga tidak aman mengubah flow aktivasi/publish.

## Order Patch
**updatedAt ditambahkan di mana**
- `lib/models/order_model.dart`
  - Tambah field `Timestamp? updatedAt`
  - Tambah parsing `updatedAt = json['updatedAt'];`
  - Tambah `data['updatedAt'] = updatedAt;` di `toJson()`
- `lib/utils/fire_store_utils.dart`
  - `updateOrder(OrderModel orderModel)`: `orderModel.updatedAt = Timestamp.now();` sebelum `.set(orderModel.toJson())`
  - `setOrder(OrderModel orderModel)`: `orderModel.updatedAt = Timestamp.now();` sebelum `.set(orderModel.toJson())`

**authorID/payment_method tidak diubah**
- Tidak ada rename field.

**paymentStatus belum dipatch bila belum ada bukti**
- Tidak dipatch.
- `paymentStatus` tidak ditambahkan karena kontrak/field di model runtime belum ada bukti.

## Tidak Dipatch
- `vendor_categories`: **tidak dipatch** (write path tidak ditemukan/masih NEEDS_CONFIRMATION).
- `paymentStatus`: **tidak dipatch**.
- `publish/isActive`: **tidak dipatch** (flow approval/field tidak tersedia pada model).

## Verification
- Marker `updatedAt` di model:
  - `product_model.dart` → field + toJson/toJson
  - `vendor_model.dart` → field + toJson
  - `order_model.dart` → field + toJson
- Marker set timestamp di controller/utils:
  - `add_product_controller.dart` → `productModel.value.updatedAt = Timestamp.now();`
  - `add_restaurant_controller.dart` → `vendorModel.value.updatedAt = Timestamp.now();`
  - `fire_store_utils.dart` → `orderModel.updatedAt = Timestamp.now();`

> Catatan: tool `rg/search_files` tidak tersedia di environment, sehingga verification dilakukan berdasarkan inspeksi potongan kode yang diubah dan pembacaan file sumber.

## Final Status
STATUS: SERVICE_57B_VENDOR_APK_SYNC_NORMALIZER_PATCH_DONE

