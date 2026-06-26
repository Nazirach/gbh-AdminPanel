# TAX REPORT DROPDOWN SOURCE VERIFY

## Git status
Hasil `git status --short` saat verifikasi dimulai:
- `?? docs/SECTION_SELECTOR_TAX_REPORT_VERIFY.md`

Mode ini tidak mengubah source aplikasi. Hanya menambahkan laporan verifikasi ini.

## File yang diperiksa
- `resources/views/reports/tax-reports.blade.php`

## Sumber data dropdown pajak
Dropdown **Pilih Pajak** tidak mengambil data dari collection `sections` dan tidak membaca field `tax_lable` dari section.

Sumber data dropdown berasal dari Firestore collection:
- `tax`

Query utama yang dipakai:
- `database.collection('tax').where('enable', '==', true).where('sectionId', '==', section_id)`

Lalu query itu dipersempit lagi saat membangun option dropdown:
- `refTaxes.where('scope','in',['admin_commission','vendor_subscription']).get()`

Artinya option Select2 hanya akan muncul jika ada dokumen di collection `tax` yang memenuhi seluruh syarat berikut:
1. `enable == true`
2. `sectionId == <cookie section_id>`
3. `scope` termasuk salah satu dari:
   - `admin_commission`
   - `vendor_subscription`

## Field yang dipakai
Field yang dipakai untuk membuat dropdown pajak:
- `id`
- `title`
- `type`
- `tax`
- `scope`
- `enable`
- `sectionId`

Field yang **tidak** dipakai untuk dropdown ini:
- `tax_lable`
- `tax_label`
- `taxLabel`
- `taxAmount`
- `tax_amount`
- collection `sections`
- collection `taxes`
- collection `vendor_orders`

## Select2 / dropdown flow
1. `#all_taxes` diinisialisasi dengan Select2.
2. Query Firestore `tax` dijalankan.
3. Hasil query dibagi menjadi dua group:
   - `Admin Taxes` untuk `scope === 'admin_commission'`
   - `Vendor Taxes` untuk `scope === 'vendor_subscription'`
4. Group `Vendor Taxes` hanya di-append jika:
   - `service_type == 'delivery-service'`
   - atau `ecommerce-service`
   - atau `ondemand-service`
5. Jika query tidak mengembalikan dokumen, maka `#all_taxes` tetap kosong, dan Select2 akan menampilkan:
   - `Tidak ada hasil yang ditemukan`

## Pemeriksaan typo `tax_lable`
Di file `tax-reports.blade.php`, dropdown pajak **tidak** menggunakan `tax_lable` maupun `tax_label`.

Kesimpulan:
- typo `tax_lable` vs `tax_label` **bukan** penyebab langsung dropdown kosong pada halaman Tax Report ini.
- Field `tax_lable` yang ada di dokumen `sections` tampaknya dipakai di tempat lain atau hanya sebagai metadata section, bukan sebagai source dropdown pajak di report ini.

## Pemeriksaan pengaruh `service_type`
Nilai cookie terbaru:
- `section_id = 6285dcf511651`
- `service_type = delivery-service`

Pada file ini, `service_type` tidak dipakai untuk query collection `tax`.
`service_type` hanya dipakai untuk:
- menentukan collection order (`vendor_orders`, dll)
- menentukan nama field section pada order (`section_id` atau `sectionId`)
- menentukan apakah group `Vendor Taxes` ikut ditampilkan

Jadi mismatch antara:
- `delivery-service`
- vs label manusiawi seperti `Multivendor Delivery Service`

tidak terlihat menjadi penyebab utama dropdown kosong.

## Kemungkinan penyebab dropdown kosong
Berdasarkan source code, penyebab paling mungkin adalah salah satu dari berikut:

1. **Collection `tax` tidak punya dokumen aktif untuk `sectionId = 6285dcf511651`**
   - Query sangat spesifik ke `sectionId` dari cookie.

2. **Dokumen ada, tapi field yang dipakai tidak cocok**
   - misalnya field bernama `section_id`, bukan `sectionId`
   - atau `enable` bukan boolean `true`
   - atau `scope` tidak memakai `admin_commission` / `vendor_subscription`

3. **Dokumen tax ada di section lain, bukan section yang sedang dipilih**
   - sehingga selector section sudah benar, tetapi data pajak untuk section itu memang belum ada.

4. **ID yang dipakai pada collection `tax.sectionId` berbeda format dari cookie `section_id`**
   - misalnya tax menyimpan `doc.id`, sedangkan cookie menyimpan `data.id`
   - atau sebaliknya.

## Kesimpulan verifikasi
Dropdown **Pilih Pajak** pada Tax Report:
- **tidak** membaca dari `sections.tax_lable`
- **tidak** membaca dari `vendor_orders`
- **tidak** membaca dari `taxes`
- **langsung membaca dari collection `tax`**
- dan memfilter berdasarkan `sectionId == cookie section_id`

Jadi, dropdown kosong paling mungkin terjadi karena **query collection `tax` tidak menemukan dokumen yang match**, bukan karena section selector gagal lagi.

## Rekomendasi patch paling aman (belum diterapkan)
1. Audit data Firestore collection `tax` untuk section yang aktif:
   - cek apakah ada dokumen dengan `enable == true`
   - cek apakah field section yang dipakai memang `sectionId`
   - cek nilai `scope`
2. Jika ditemukan bahwa data memakai `section_id` bukan `sectionId`, patch paling aman adalah menambahkan fallback query atau field fallback.
3. Jika ternyata source data pajak memang seharusnya berasal dari `sections.tax_lable`, maka perlu keputusan desain dulu, karena itu berarti alur saat ini salah level sumber datanya.
4. Patch aman berikutnya sebaiknya berupa **audit-readonly collection `tax`**, bukan langsung mengubah query.
