# DELIVERY DRIVER FIELD MAPPING FINDING

Generated: 06/28/2026 18:13:56

Mode: finding-record only. No patch. No deploy. No Firestore write. No delete. No commit.

## Firestore User Document Observed From Console

- Collection shown: pengguna
- Observed user id: OFSjMqynSGXSzFUoyELJZBjj4bF3
- Observed role-like field: peran = pengemudi
- Observed active-like field: aktif = BENAR
- Observed fcmToken: present
- Observed location-like field: lokasi = present
- Observed wallet-like field: jumlah_dompet = 2660

## deliveryDispatch Source Expects

- Collection: users
- role == driver
- isActive == true
- serviceTypes array-contains delivery-service
- wallet_amount >= 100
- fcmToken present
- location present
- sectionIds includes order.section_id
- zoneId matches order zone if zone is used

## Mismatch Finding

- Console labels/fields seen are Indonesian/localized: pengguna, peran, aktif, lokasi, jumlah_dompet.
- deliveryDispatch source uses English/raw Firestore field names: users, role, isActive, location, wallet_amount, serviceTypes.
- Current screenshot does not confirm whether raw English fields also exist lower in the document.
- Therefore the candidate driver impact is not confirmed.

## Decision

- Active Order Accepted test remains blocked.
- Do not create vendor_orders active dispatch test yet.
- Need to confirm whether document has raw fields role, isActive, wallet_amount, serviceTypes, sectionIds, zoneId.
- If raw English fields do not exist, deliveryDispatch may not find drivers even if translated Console labels show driver-like data.

## Status

STATUS: ACTIVE_DISPATCH_BLOCKED_DRIVER_FIELD_MAPPING_UNCONFIRMED