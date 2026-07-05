# RECHECK APK RUNTIME LOG AFTER INDEX / FIX

Generated: 07/01/2026 01:19:59
Mode: read only. No patch. No Firebase write.
Device: 115413747T003958
Package: com.erbete.customer
APP_PID: 24352

## Screenshot
```text
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\screenshots\recheck_runtime_log_20260701_011958.png
```

## Filtered Runtime Log
```text
07-01 01:18:35.668 W/TranInstanceHelper(24352): Failed to instance com.transsion.hubcore.linkplus.implement.app.TranActivityThreadLinkplusImpl, java.lang.ClassNotFoundException: com.transsion.hubcore.linkplus.implement.app.TranActivityThreadLinkplusImpl
07-01 01:18:38.367 E/gralloc4(24352): ERROR: Format allocation info not found for format: 38
07-01 01:18:38.367 E/gralloc4(24352): ERROR: Format allocation info not found for format: 0
07-01 01:18:38.367 E/gralloc4(24352): ERROR: Unrecognized and/or unsupported format 0x38 and usage 0xb00
07-01 01:18:38.369 E/AHardwareBuffer(24352): GraphicBuffer(w=4, h=4, lc=1) failed (Unknown error -5), handle=0x0
07-01 01:18:38.369 E/gralloc4(24352): ERROR: Format allocation info not found for format: 3b
07-01 01:18:38.369 E/gralloc4(24352): ERROR: Format allocation info not found for format: 0
07-01 01:18:38.369 E/gralloc4(24352): ERROR: Unrecognized and/or unsupported format 0x3b and usage 0xb00
07-01 01:18:38.369 E/AHardwareBuffer(24352): GraphicBuffer(w=4, h=4, lc=1) failed (Unknown error -5), handle=0x0
07-01 01:18:38.369 E/gralloc4(24352): ERROR: Format allocation info not found for format: 38
07-01 01:18:38.369 E/gralloc4(24352): ERROR: Format allocation info not found for format: 0
07-01 01:18:38.369 E/gralloc4(24352): ERROR: Unrecognized and/or unsupported format 0x38 and usage 0xb00
07-01 01:18:38.369 E/AHardwareBuffer(24352): GraphicBuffer(w=4, h=4, lc=1) failed (Unknown error -5), handle=0x0
07-01 01:18:38.369 E/gralloc4(24352): ERROR: Format allocation info not found for format: 3b
07-01 01:18:38.369 E/gralloc4(24352): ERROR: Format allocation info not found for format: 0
07-01 01:18:38.369 E/gralloc4(24352): ERROR: Unrecognized and/or unsupported format 0x3b and usage 0xb00
07-01 01:18:38.369 E/AHardwareBuffer(24352): GraphicBuffer(w=4, h=4, lc=1) failed (Unknown error -5), handle=0x0
07-01 01:18:39.969 E/GoogleApiManager(24352): java.lang.SecurityException: Unknown calling package name 'com.google.android.gms'.
07-01 01:18:39.969 E/GoogleApiManager(24352): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3251)
07-01 01:18:39.969 E/GoogleApiManager(24352): 	at android.os.Parcel.createException(Parcel.java:3235)
07-01 01:18:39.969 E/GoogleApiManager(24352): 	at android.os.Parcel.readException(Parcel.java:3218)
07-01 01:18:39.969 E/GoogleApiManager(24352): 	at android.os.Parcel.readException(Parcel.java:3160)
07-01 01:18:39.971 W/GoogleApiManager(24352): Not showing notification since connectionResult is not user-facing: ConnectionResult{statusCode=DEVELOPER_ERROR, resolution=null, message=null, clientMethodKey=null}
07-01 01:18:39.973 W/FlagRegistrar(24352): goux: 17: 17: API: Phenotype.API is not available on this device. Connection failed with: ConnectionResult{statusCode=DEVELOPER_ERROR, resolution=null, message=null, clientMethodKey=null}
07-01 01:18:39.973 W/FlagRegistrar(24352): Caused by: bjpk: 17: API: Phenotype.API is not available on this device. Connection failed with: ConnectionResult{statusCode=DEVELOPER_ERROR, resolution=null, message=null, clientMethodKey=null}
07-01 01:18:39.975 W/FlagStore(24352): java.util.concurrent.ExecutionException: goux: 17: 17: API: Phenotype.API is not available on this device. Connection failed with: ConnectionResult{statusCode=DEVELOPER_ERROR, resolution=null, message=null, clientMethodKey=null}
07-01 01:18:39.975 W/FlagStore(24352): Caused by: goux: 17: 17: API: Phenotype.API is not available on this device. Connection failed with: ConnectionResult{statusCode=DEVELOPER_ERROR, resolution=null, message=null, clientMethodKey=null}
07-01 01:18:39.975 W/FlagStore(24352): Caused by: bjpk: 17: API: Phenotype.API is not available on this device. Connection failed with: ConnectionResult{statusCode=DEVELOPER_ERROR, resolution=null, message=null, clientMethodKey=null}
07-01 01:18:44.613 I/flutter (24352): SERVICE_LIST_DEBUG: raw sections count=17
07-01 01:18:44.613 I/flutter (24352): SERVICE_LIST_DEBUG: sectionList assigned count=17
07-01 01:18:44.613 I/flutter (24352): SERVICE_LIST_DEBUG_ITEM: id=6285dcf511651 name=Cosmetic type=delivery-service isActive=true
07-01 01:18:44.613 I/flutter (24352): SERVICE_LIST_DEBUG_ITEM: id=6285dd3281531 name=Fashion type=ecommerce-service isActive=true
07-01 01:18:44.613 I/flutter (24352): SERVICE_LIST_DEBUG_ITEM: id=6285dd7b50f32 name=Flowers type=delivery-service isActive=true
07-01 01:18:44.613 I/flutter (24352): SERVICE_LIST_DEBUG_ITEM: id=6285ddbfd9598 name=Restaurants type=delivery-service isActive=true
07-01 01:18:44.613 I/flutter (24352): SERVICE_LIST_DEBUG_ITEM: id=631852d1bc978 name=Cab Service type=cab-service isActive=true
07-01 01:18:44.613 I/flutter (24352): SERVICE_LIST_DEBUG_ITEM: id=6319dc53314ee name=Food Grocery type=delivery-service isActive=true
07-01 01:18:44.613 I/flutter (24352): SERVICE_LIST_DEBUG_ITEM: id=632309c9d549e name=Parcel Service type=parcel_delivery isActive=true
07-01 01:18:44.613 I/flutter (24352): SERVICE_LIST_DEBUG_ITEM: id=63368fb2beabb name=Rental Service type=rental-service isActive=true
07-01 01:18:44.613 I/flutter (24352): SERVICE_LIST_DEBUG_ITEM: id=yJTddzJUxP3cOU5DpJ10 name=Home/On Demand Service type=ondemand-service isActive=true
07-01 01:18:44.613 I/flutter (24352): SERVICE_LIST_DEBUG_ITEM: id=custom_laundry_service name=Laundry Service type=delivery-service isActive=true
07-01 01:18:44.613 I/flutter (24352): SERVICE_LIST_DEBUG_ITEM: id=custom_document_service name=Document Service type=parcel_delivery isActive=true
07-01 01:18:44.613 I/flutter (24352): SERVICE_LIST_DEBUG_ITEM: id=custom_hotel_homestay name=Hotel / Homestay type=rental-service isActive=true
07-01 01:18:44.613 I/flutter (24352): SERVICE_LIST_DEBUG_ITEM: id=custom_akap_ticket name=AKAP Ticket type=ecommerce-service isActive=true
07-01 01:18:44.613 I/flutter (24352): SERVICE_LIST_DEBUG_ITEM: id=custom_technician_service name=Technician Service type=ondemand-service isActive=true
07-01 01:18:44.613 I/flutter (24352): SERVICE_LIST_DEBUG_ITEM: id=custom_housemaid_art name=Housemaid / ART type=ondemand-service isActive=true
07-01 01:18:44.613 I/flutter (24352): SERVICE_LIST_DEBUG_ITEM: id=custom_motor_delivery name=Motor Delivery type=parcel_delivery isActive=true
07-01 01:18:44.613 I/flutter (24352): SERVICE_LIST_DEBUG_ITEM: id=custom_emergency_help name=Emergency Help type=ondemand-service isActive=true
07-01 01:18:49.973 E/GoogleApiManager(24352): java.lang.SecurityException: Unknown calling package name 'com.google.android.gms'.
07-01 01:18:49.973 E/GoogleApiManager(24352): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3251)
07-01 01:18:49.973 E/GoogleApiManager(24352): 	at android.os.Parcel.createException(Parcel.java:3235)
07-01 01:18:49.973 E/GoogleApiManager(24352): 	at android.os.Parcel.readException(Parcel.java:3218)
07-01 01:18:49.973 E/GoogleApiManager(24352): 	at android.os.Parcel.readException(Parcel.java:3160)
07-01 01:18:49.975 W/GoogleApiManager(24352): Not showing notification since connectionResult is not user-facing: ConnectionResult{statusCode=DEVELOPER_ERROR, resolution=null, message=null, clientMethodKey=null}
07-01 01:19:17.324 W/Firestore(24352): (25.1.4) [Firestore]: Listen for Query(target=Query(coupons where expiresAt>=time(1782843557,1171000) and isEnabled==true and isPublic==true order by expiresAt, __name__);limitType=LIMIT_TO_FIRST) failed: Status{code=FAILED_PRECONDITION, description=The query requires an index. You can create it here: https://console.firebase.google.com/v1/r/project/erbete-putra/firestore/indexes?create_composite=Ckxwcm9qZWN0cy9lcmJldGUtcHV0cmEvZGF0YWJhc2VzLyhkZWZhdWx0KS9jb2xsZWN0aW9uR3JvdXBzL2NvdXBvbnMvaW5kZXhlcy9fEAEaDQoJaXNFbmFibGVkEAEaDAoIaXNQdWJsaWMQARoNCglleHBpcmVzQXQQARoMCghfX25hbWVfXxAB, cause=null}
```

## Quick Status Counters
```text
HAS_PARSE_ERROR: False
HAS_INDEX_ERROR: True
HAS_E_FLUTTER: False
HAS_VENDOR_ERROR: False
HAS_APP_PID: True
```

## Final Status
STATUS: APK_RUNTIME_LOG_RECHECK_CAPTURED