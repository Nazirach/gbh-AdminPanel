# USERS ROLE QUERY RESULT

Generated: 06/28/2026 18:20:15

Mode: query-result-record only. No patch. No deploy. No Firestore write. No delete. No commit.

## Query 1 - deliveryDispatch Expected Field

- Collection: users
- Field: role
- Operator: ==
- Value: driver
- Result: GANTI_DENGAN_HASIL_QUERY_1

## Query 2 - Localized/Observed Field

- Collection: users
- Field: peran
- Operator: ==
- Value: pengemudi
- Result: GANTI_DENGAN_HASIL_QUERY_2

## Decision

- If Query 1 returns documents, continue audit with isActive, serviceTypes, wallet_amount, fcmToken, location, sectionIds, and zoneId.
- If Query 1 returns 0 documents but Query 2 returns documents, active deliveryDispatch may not find drivers because of field mapping mismatch.
- Active Order Accepted test remains blocked until this is confirmed.

## Status

STATUS: USERS_ROLE_QUERY_REAL_RESULT_RECORDED