# AI4-0034B OPI ADMIN CLOUD MEDIUM TERM BUSINESS MISSION LOCK

Tanggal: 2026-07-06
Mode: DOCUMENTATION_LOCK_ONLY
Runtime Root: C:\deploy\adminpanel

## Tujuan
Dokumen ini mengunci bahwa pemetaan Admin Cloud ke bisnis OPI + GHALBIT MARITRONIX adalah misi jangka menengah, bukan patch langsung yang mengubah sistem produksi.

## Prinsip
- Struktur Admin Cloud yang sudah berjalan tetap dipertahankan.
- Label/menu lama tidak langsung diganti.
- Data lama tidak dihapus.
- Vendor, toko, barang, pengemudi, pelanggan, pesanan, laporan, pajak, komisi, zona, dan tracking tetap aman.
- Perubahan menjadi sistem OPI dilakukan bertahap melalui audit, kontrak data, backup, patch kecil, dan laporan.

## Roadmap Makna Bisnis Jangka Menengah

| Struktur Admin Cloud | Makna Bisnis OPI |
|---|---|
| Bagian / Layanan | Master 17 layanan maritim |
| Vendor | Mitra ship agency, bunker, supply, drone, port support |
| Toko-toko | Unit layanan / cabang / penyedia operasional |
| Barang-barang | Paket layanan atau item kebutuhan kapal |
| Pengemudi | Operator lapangan, runner, surveyor, driver, field team |
| Pelanggan | Kapal, agen kapal, perusahaan, mitra, client |
| Pesanan | Permintaan layanan / mission order |
| Laporan Penjualan | Nilai transaksi layanan |
| Pajak / Komisi | Margin, komisi, fee operator, fee platform |
| Manajemen Zona | Selat Malaka, Sabang, Batam, pelabuhan, rute darat |
| Pelacakan Langsung | Tracking layanan, operator, armada, dan pekerjaan lapangan |

## Tahap Pengembangan

### Tahap 1 — Sekarang
- Pertahankan sistem cloud admin yang berjalan.
- Kunci narasi OPI + GHALBIT MARITRONIX.
- Tampilkan 17 pelayanan dan nilai bisnis pada Website Panel/Preview.

### Tahap 2 — Jangka Menengah
- Mapping Bagian/Layanan menjadi master layanan maritim.
- Mapping Vendor menjadi mitra maritim.
- Mapping Toko menjadi unit layanan/cabang/penyedia operasional.
- Mapping Barang menjadi paket layanan/item kebutuhan kapal.
- Mapping Pesanan menjadi service request / mission order.

### Tahap 3 — Jangka Panjang
- Sistem menjadi Maritime Service Control Center penuh.
- Dashboard nilai bisnis menampilkan layanan, kontrak, margin, komisi, dan status operasi.
- Drone, operator, vendor, order, peta, dan laporan menjadi satu siklus bisnis.

## Larangan
- Tidak mengganti struktur produksi secara mendadak.
- Tidak menghapus data lama.
- Tidak mengubah Firebase tanpa kontrak data.
- Tidak mengganti fungsi order/vendor/store/driver sebelum audit lengkap.
- Tidak memaksakan 17 layanan langsung ke database produksi tanpa backup dan service khusus.

STATUS: AI4_OPI_ADMIN_CLOUD_MEDIUM_TERM_BUSINESS_MISSION_LOCK_CREATED
