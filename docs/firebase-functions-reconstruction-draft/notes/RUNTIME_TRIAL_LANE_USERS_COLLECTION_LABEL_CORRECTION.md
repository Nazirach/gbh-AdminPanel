# USERS COLLECTION LABEL CORRECTION

Generated: 06/28/2026 18:15:44

Mode: correction-record only. No patch. No deploy. No Firestore write. No delete. No commit.

## Correction

- Previous finding suspected collection mismatch because Firebase Console displayed collection as pengguna.
- Screenshot URL indicates raw path contains /users/.
- Therefore collection name may actually be users, while Console UI displays localized label pengguna.

## Still Unconfirmed

- role
- isActive
- wallet_amount
- serviceTypes
- sectionIds
- zoneId
- orderRequestData
- inProgressOrderID
- vendorID

## Observed Localized/Alternative Fields

- peran = pengemudi
- aktif = BENAR
- jumlah_dompet = 2660
- lokasi = present
- fcmToken = present

## Decision

- Active Order Accepted deliveryDispatch test remains blocked.
- Collection mismatch is not confirmed.
- Field mapping remains unconfirmed.
- Next step should confirm whether raw English fields exist using Firestore Console search/query.

## Status

STATUS: USERS_COLLECTION_LABEL_CORRECTED_FIELD_MAPPING_STILL_UNCONFIRMED