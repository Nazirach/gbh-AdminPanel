# AI4-0041B CATEGORY ITEM VENDOR TIMESTAMP COMPAT REPORT

## Status
KEEP_PATCH

## Tujuan
Mengisolasi patch kecil untuk normalisasi timestamp dan kompatibilitas field pada category, item, dan vendor.

## Perubahan
- categories/create: menambahkan createdAt dan updatedAt pada vendor_categories.
- categories/edit: menambahkan updatedAt pada vendor_categories.
- items/create: menambahkan updatedAt pada vendor_products.
- items/edit: menambahkan updatedAt pada vendor_products.
- vendors/create: menambahkan isActive, updatedAt, dan section_id.
- vendors/edit: menambahkan isActive dan updatedAt pada user/vendor update.

## Prinsip Aman
- Tidak mengubah Firebase rules.
- Tidak menjalankan write data sekarang.
- Tidak menyentuh tax report.
- Tidak menyentuh layouts/app module selector.
- Tidak menyentuh database server.
