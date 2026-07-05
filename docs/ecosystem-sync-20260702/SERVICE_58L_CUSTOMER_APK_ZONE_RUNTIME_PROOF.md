# SERVICE 58L CUSTOMER APK ZONE RUNTIME PROOF (VERIFY ONLY)

## ACK / Context Lock
- Admin Web: control center utama
- Firebase: shared data center untuk Admin Web, Vendor Web, Customer Web, Customer APK, Vendor APK, Driver APK
- Mode: **VERIFY ONLY** (tidak melakukan patch/perubahan kode/config)
- Fokus audit:
  1. proof runtime **selectedZone**
  2. proof **vendor visibility** setelah filter berdasarkan zone
  3. proof **section context** setelah tap service

## Scope
- Customer APK (Flutter) runtime zone behavior + section selection context
- Gate yang harus dicek bila data tidak tampil:
  - section aktif
  - zone published
  - polygon coverage / polygon matching
  - selectedZone (value yang dipakai aplikasi)
  - publish (zone)
  - section_id / sectionId
  - zoneId
  - createdAt / updatedAt

## Evidence Checklist (Apa yang harus dibuktikan saat verifikasi)
> Dokumen ini bersifat **portable context**: repo source ekosistem lengkap tidak tersedia di environment ini, sehingga bukti harus diambil dari log/devtools/Firestore snapshot runtime.

### A) Proof Runtime: `selectedZone`
**Tujuan:** memastikan aplikasi Customer APK memegang nilai `selectedZone` yang benar ketika user memilih zona.

**Yang harus dibuktikan (minimal 3 item):**
1. Dari log/diagnostic, terlihat bahwa `selectedZone` berubah saat user memilih zone.
2. `selectedZone` yang tersimpan/terpakai:
   - sesuai `zoneId` yang dipilih dari UI / route
   - atau sesuai field id lain yang dipakai oleh kontrak (pastikan mappingnya benar)
3. Tidak ada fallback salah (mis. default null / empty string) saat `zone published` benar.

**Gate yang wajib dicek bersamaan:**
- `zoneId` ada di state aplikasi sebelum query vendor
- `zone published == true` atau field publish aktif
- `selectedZone` tidak ditimpa oleh state restore yang salah

**Format Bukti yang disarankan:**
- screenshot log: `selectedZone=<value>`
- screenshot network/firestore query: filter yang mengandung `zoneId`/`selectedZone`

### B) Proof Vendor Visibility Setelah Zone Filter
**Tujuan:** memastikan daftar vendor yang tampil di Customer APK sudah terfilter oleh zone yang dipilih.

**Yang harus dibuktikan:**
1. Query vendor menggunakan filter zone (berdasarkan `selectedZone` / `zoneId`).
2. Ketika `selectedZone` diganti ke zona lain:
   - vendor yang tampil berubah
   - tidak ada vendor yang “bocor” (tidak seharusnya muncul)
3. Jika vendor tidak tampil, verifikasi gate berikut (urutan):
   - section aktif
   - zone published
   - polygon coverage matching (jika zone pakai polygon)
   - publish
   - section_id/sectionId
   - zoneId
   - createdAt/updatedAt (cek apakah aplikasi menyaring berdasarkan rentang/urutan terbaru)

**Format Bukti yang disarankan:**
- screenshot UI vendor list (zona A) + vendor list (zona B)
- screenshot payload query/firestore where clause

### C) Proof Section Context Setelah Service Tap
**Tujuan:** memastikan konteks section yang dipakai setelah user tap service sinkron dengan zone + section selector.

**Yang harus dibuktikan:**
1. Setelah tap service, aplikasi mengikat `sectionId/section_id` yang benar.
2. Konten yang tampil (mis. kategori/layanan/daftar) relevan dengan kombinasi:
   - `selectedZone`
   - `sectionId/section_id`
3. Tidak terjadi mismatch konteks, mis. section dari zone lama tetapi vendor dari zone baru.

**Gate yang wajib dicek bila mismatch:**
- section aktif
- sectionId/section_id ada dan sesuai record
- zoneId sesuai record section-zone mapping
- createdAt/updatedAt tidak menyebabkan filter “expired”

**Format Bukti yang disarankan:**
- screenshot UI setelah tap service
- screenshot log state: `sectionId=<value>`, `selectedZone=<value>`

## Verification Flow (VERIFY ONLY)
1. Buka Admin Web → pastikan zone untuk skenario uji adalah **published**.
2. Di Customer APK:
   - pilih lokasi/zone yang memicu polygon coverage (jika berlaku)
   - catat `selectedZone` dari log/state
3. Observasi daftar vendor:
   - ganti zona → pastikan vendor berubah sesuai filter
4. Tap service (service tap):
   - catat `sectionId/section_id` dari log/state
   - pastikan konteks section dan vendor sesuai kombinasi
5. Jika ada data tidak tampil:
   - audit gate berurutan seperti di checklist

## Pass Criteria
- `selectedZone` terbukti benar (state/log menunjukkan id yang sesuai)
- vendor visibility konsisten terhadap filter zone (tidak ada kebocoran, tidak ada vendor kosong bila gate terpenuhi)
- section context benar setelah service tap (section sesuai sectionId dan konsisten dengan selectedZone)

## Open Items (Harus diisi saat verifikasi runtime)
> Isi bagian ini setelah mendapat bukti runtime (log/screenshot/firestore snapshot).

- selectedZone evidence:
  - [ ] zoneId/value: 
  - [ ] evidence link/path:

- vendor visibility evidence:
  - [ ] zona A vendor count + screenshot:
  - [ ] zona B vendor count + screenshot:
  - [ ] firestore query/payload evidence:

- section context evidence:
  - [ ] sectionId/section_id after service tap:
  - [ ] evidence link/path:

## Final Status
STATUS: SERVICE_58L_CUSTOMER_APK_ZONE_RUNTIME_PROOF_DOCUMENT_CREATED_VERIFY_ONLY

