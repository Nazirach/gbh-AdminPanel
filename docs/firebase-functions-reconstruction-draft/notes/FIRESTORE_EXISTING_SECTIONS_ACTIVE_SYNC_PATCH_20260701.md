# FIRESTORE EXISTING SECTIONS ACTIVE SYNC PATCH

Generated: 2026-06-30T19:02:10.441Z
Mode: CONTROLLED FIREBASE WRITE.
Rule: only set active = isActive where active is missing and isActive exists.

## Patch Log
`	ext
PATCHED | id=6285dcf511651 | name=Cosmetic | order=1 | serviceTypeFlag=delivery-service | set active=true
PATCHED | id=6285dd3281531 | name=Fashion | order=2 | serviceTypeFlag=ecommerce-service | set active=true
PATCHED | id=6285dd7b50f32 | name=Flowers | order=3 | serviceTypeFlag=delivery-service | set active=true
PATCHED | id=6285ddbfd9598 | name=Restaurants | order=4 | serviceTypeFlag=delivery-service | set active=true
PATCHED | id=631852d1bc978 | name=Cab Service | order=5 | serviceTypeFlag=cab-service | set active=true
PATCHED | id=6319dc53314ee | name=Food Grocery | order=6 | serviceTypeFlag=delivery-service | set active=true
PATCHED | id=632309c9d549e | name=Parcel Service | order=7 | serviceTypeFlag=parcel_delivery | set active=true
PATCHED | id=63368fb2beabb | name=Rental Service | order=8 | serviceTypeFlag=rental-service | set active=true
PATCHED | id=yJTddzJUxP3cOU5DpJ10 | name=Home/On Demand Service | order=9 | serviceTypeFlag=ondemand-service | set active=true
SKIPPED | id=custom_laundry_service | name=Laundry Service | active=true | isActive=true
SKIPPED | id=custom_document_service | name=Document Service | active=true | isActive=true
SKIPPED | id=custom_hotel_homestay | name=Hotel / Homestay | active=true | isActive=true
SKIPPED | id=custom_akap_ticket | name=AKAP Ticket | active=true | isActive=true
SKIPPED | id=custom_technician_service | name=Technician Service | active=true | isActive=true
SKIPPED | id=custom_housemaid_art | name=Housemaid / ART | active=true | isActive=true
SKIPPED | id=custom_motor_delivery | name=Motor Delivery | active=true | isActive=true
SKIPPED | id=custom_emergency_help | name=Emergency Help | active=true | isActive=true
`

## Counters
`	ext
TOTAL_SECTIONS: 17
PATCHED: 9
SKIPPED: 8
`

## Final Status
STATUS: FIRESTORE_EXISTING_SECTIONS_ACTIVE_SYNC_PATCHED