# SECTION DEBUG AFTER NULL SAFE PATCH

Generated: 06/30/2026 22:41:30
APP_PID: 32049

## Filtered App PID Logcat
```text
06-30 22:41:16.493 W/TranInstanceHelper(32049): Failed to instance com.transsion.hubcore.linkplus.implement.app.TranActivityThreadLinkplusImpl, java.lang.ClassNotFoundException: com.transsion.hubcore.linkplus.implement.app.TranActivityThreadLinkplusImpl
06-30 22:41:18.107 I/flutter (32049): [IMPORTANT:flutter/shell/platform/android/android_context_vk_impeller.cc(62)] Using the Impeller rendering backend (Vulkan).
06-30 22:41:18.274 I/flutter (32049): The Dart VM service is listening on http://127.0.0.1:45455/7yRNkT9jwx8=/
06-30 22:41:19.272 E/gralloc4(32049): ERROR: Format allocation info not found for format: 38
06-30 22:41:19.272 E/gralloc4(32049): ERROR: Format allocation info not found for format: 0
06-30 22:41:19.272 E/gralloc4(32049): ERROR: Unrecognized and/or unsupported format 0x38 and usage 0xb00
06-30 22:41:19.274 E/AHardwareBuffer(32049): GraphicBuffer(w=4, h=4, lc=1) failed (Unknown error -5), handle=0x0
06-30 22:41:19.274 E/gralloc4(32049): ERROR: Format allocation info not found for format: 3b
06-30 22:41:19.274 E/gralloc4(32049): ERROR: Format allocation info not found for format: 0
06-30 22:41:19.274 E/gralloc4(32049): ERROR: Unrecognized and/or unsupported format 0x3b and usage 0xb00
06-30 22:41:19.274 E/AHardwareBuffer(32049): GraphicBuffer(w=4, h=4, lc=1) failed (Unknown error -5), handle=0x0
06-30 22:41:19.274 E/gralloc4(32049): ERROR: Format allocation info not found for format: 38
06-30 22:41:19.274 E/gralloc4(32049): ERROR: Format allocation info not found for format: 0
06-30 22:41:19.274 E/gralloc4(32049): ERROR: Unrecognized and/or unsupported format 0x38 and usage 0xb00
06-30 22:41:19.275 E/AHardwareBuffer(32049): GraphicBuffer(w=4, h=4, lc=1) failed (Unknown error -5), handle=0x0
06-30 22:41:19.275 E/gralloc4(32049): ERROR: Format allocation info not found for format: 3b
06-30 22:41:19.275 E/gralloc4(32049): ERROR: Format allocation info not found for format: 0
06-30 22:41:19.275 E/gralloc4(32049): ERROR: Unrecognized and/or unsupported format 0x3b and usage 0xb00
06-30 22:41:19.275 E/AHardwareBuffer(32049): GraphicBuffer(w=4, h=4, lc=1) failed (Unknown error -5), handle=0x0
06-30 22:41:21.068 E/GoogleApiManager(32049): java.lang.SecurityException: Unknown calling package name 'com.google.android.gms'.
06-30 22:41:21.068 E/GoogleApiManager(32049): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3251)
06-30 22:41:21.068 E/GoogleApiManager(32049): 	at android.os.Parcel.createException(Parcel.java:3235)
06-30 22:41:21.068 E/GoogleApiManager(32049): 	at android.os.Parcel.readException(Parcel.java:3218)
06-30 22:41:21.068 E/GoogleApiManager(32049): 	at android.os.Parcel.readException(Parcel.java:3160)
06-30 22:41:21.072 W/GoogleApiManager(32049): Not showing notification since connectionResult is not user-facing: ConnectionResult{statusCode=DEVELOPER_ERROR, resolution=null, message=null, clientMethodKey=null}
06-30 22:41:21.082 W/FlagRegistrar(32049): goux: 17: 17: API: Phenotype.API is not available on this device. Connection failed with: ConnectionResult{statusCode=DEVELOPER_ERROR, resolution=null, message=null, clientMethodKey=null}
06-30 22:41:21.082 W/FlagRegistrar(32049): Caused by: bjpk: 17: API: Phenotype.API is not available on this device. Connection failed with: ConnectionResult{statusCode=DEVELOPER_ERROR, resolution=null, message=null, clientMethodKey=null}
06-30 22:41:21.088 W/FlagStore(32049): java.util.concurrent.ExecutionException: goux: 17: 17: API: Phenotype.API is not available on this device. Connection failed with: ConnectionResult{statusCode=DEVELOPER_ERROR, resolution=null, message=null, clientMethodKey=null}
06-30 22:41:21.088 W/FlagStore(32049): Caused by: goux: 17: 17: API: Phenotype.API is not available on this device. Connection failed with: ConnectionResult{statusCode=DEVELOPER_ERROR, resolution=null, message=null, clientMethodKey=null}
06-30 22:41:21.089 W/FlagStore(32049): Caused by: bjpk: 17: API: Phenotype.API is not available on this device. Connection failed with: ConnectionResult{statusCode=DEVELOPER_ERROR, resolution=null, message=null, clientMethodKey=null}
06-30 22:41:26.469 I/flutter (32049): **-FireStoreUtils.getSection Parse error type 'Null' is not a subtype of type 'Map<String, dynamic>'
06-30 22:41:26.469 I/flutter (32049): **-FireStoreUtils.getSection Parse error type 'Null' is not a subtype of type 'Map<String, dynamic>'
06-30 22:41:26.469 I/flutter (32049): **-FireStoreUtils.getSection Parse error type 'Null' is not a subtype of type 'Map<String, dynamic>'
06-30 22:41:26.470 I/flutter (32049): **-FireStoreUtils.getSection Parse error type 'Null' is not a subtype of type 'Map<String, dynamic>'
06-30 22:41:26.470 I/flutter (32049): **-FireStoreUtils.getSection Parse error type 'Null' is not a subtype of type 'Map<String, dynamic>'
06-30 22:41:26.470 I/flutter (32049): **-FireStoreUtils.getSection Parse error type 'Null' is not a subtype of type 'Map<String, dynamic>'
06-30 22:41:26.470 I/flutter (32049): **-FireStoreUtils.getSection Parse error type 'Null' is not a subtype of type 'Map<String, dynamic>'
06-30 22:41:26.470 I/flutter (32049): **-FireStoreUtils.getSection Parse error type 'Null' is not a subtype of type 'Map<String, dynamic>'
06-30 22:41:31.019 E/GoogleApiManager(32049): java.lang.SecurityException: Unknown calling package name 'com.google.android.gms'.
06-30 22:41:31.019 E/GoogleApiManager(32049): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3251)
06-30 22:41:31.019 E/GoogleApiManager(32049): 	at android.os.Parcel.createException(Parcel.java:3235)
06-30 22:41:31.019 E/GoogleApiManager(32049): 	at android.os.Parcel.readException(Parcel.java:3218)
06-30 22:41:31.019 E/GoogleApiManager(32049): 	at android.os.Parcel.readException(Parcel.java:3160)
06-30 22:41:31.020 W/GoogleApiManager(32049): Not showing notification since connectionResult is not user-facing: ConnectionResult{statusCode=DEVELOPER_ERROR, resolution=null, message=null, clientMethodKey=null}
```

## Final Status
STATUS: SECTION_DEBUG_AFTER_NULL_SAFE_PATCH_CAPTURED