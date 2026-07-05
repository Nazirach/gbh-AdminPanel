# ERBETE E2E SIMULATION MASTER PLAN

Generated: 06/28/2026 13:03:53

Mode: planning-only. No test user. No database write. No deploy. No delete.

## Tujuan

Membuat simulasi otomatis satu rangkaian penuh dari pendaftaran pengguna sampai order selesai.

## Prinsip Aman

- Semua test memakai akun khusus E2E.
- Tidak memakai user asli.
- Tidak memakai pembayaran asli.
- Semua data test diberi marker _e2eTest: true.
- Semua perubahan harus bisa dilacak dan dibersihkan.
- PowerShell menjadi pengendali utama.

## Aktor Test

- Customer: test_customer_e2e@erbete.local
- Vendor: test_vendor_e2e@erbete.local
- Driver: test_driver_e2e@erbete.local
- Admin: test_admin_e2e@erbete.local

## Alur Simulasi Utama

1. Cek environment dan project Firebase.
2. Cek Laravel/API endpoint.
3. Buat customer test.
4. Buat vendor test.
5. Buat driver test.
6. Simulasikan approval admin.
7. Customer login.
8. Customer memilih menu/product.
9. Customer membuat order dummy.
10. Vendor menerima order.
11. Driver menerima order.
12. Driver pickup.
13. Driver delivered.
14. Cek status akhir order.
15. Cek riwayat customer/vendor/driver.
16. Cek notifikasi/log.
17. Buat laporan hasil.

## File Script Yang Akan Dibangun

- scripts/e2e/00-check-environment.ps1
- scripts/e2e/01-create-test-users.ps1
- scripts/e2e/02-admin-approve-test-users.ps1
- scripts/e2e/03-create-test-order.ps1
- scripts/e2e/04-vendor-accept-order.ps1
- scripts/e2e/05-driver-accept-order.ps1
- scripts/e2e/06-complete-order.ps1
- scripts/e2e/07-verify-final-state.ps1
- scripts/e2e/99-cleanup-test-data.ps1
- scripts/run-e2e-simulation.ps1

## Output Laporan

- docs/e2e/E2E_SIMULATION_RESULT.md
- docs/e2e/E2E_SIMULATION_ERRORS.md
- docs/e2e/E2E_FIREBASE_DOCUMENT_MAP.md

## Status

STATUS: E2E_MASTER_PLAN_CREATED