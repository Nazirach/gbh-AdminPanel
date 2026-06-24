# APPROVED DRIVER DATA FLOW AUDIT

Status:
Audit source dilakukan tanpa in-app browser runtime karena runtime/model sebelumnya penuh.

Kesimpulan awal:
- /drivers tampil
- /drivers/pending tampil
- /drivers/approved kosong
- Penyebab paling mungkin: data approval dokumen belum tersinkron ke field/query yang dipakai halaman approved.
- Jangan gunakan active=true sebagai satu-satunya indikator approved.
- Approved Driver sebaiknya ditentukan dari alur dokumen, misalnya documents_verify atau field verifikasi final.

Rekomendasi:
1. Jangan patch besar dulu.
2. Tentukan sumber kebenaran approval:
   - documents_verify
   - isDocumentVerify
   - isAutoVerify
   - status dokumen approved/rejected/pending
3. Buat patch kecil agar /drivers/approved membaca field yang benar.
4. Jika data documents_verify belum ada, buat SOP/manual approval atau migration data read-only terlebih dahulu.

Catatan:
Audit Firestore runtime belum lengkap jika tidak ada akses read-only yang stabil.
