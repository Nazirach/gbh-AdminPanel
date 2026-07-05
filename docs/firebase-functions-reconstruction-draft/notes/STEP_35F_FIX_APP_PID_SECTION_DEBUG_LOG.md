# APP PID SECTION DEBUG LOG FIXED

Generated: 06/30/2026 22:34:04
APP_PID: 31766

## Filtered App PID Logcat
```text
06-30 22:33:52.438 W/TranInstanceHelper(31766): Failed to instance com.transsion.hubcore.linkplus.implement.app.TranActivityThreadLinkplusImpl, java.lang.ClassNotFoundException: com.transsion.hubcore.linkplus.implement.app.TranActivityThreadLinkplusImpl
06-30 22:33:53.604 I/FirebaseApp(31766): Device unlocked: initializing all Firebase APIs for app [DEFAULT]
06-30 22:33:53.665 I/FirebaseInitProvider(31766): FirebaseApp initialization successful
06-30 22:33:53.907 D/FlutterJNI(31766): Beginning load of flutter...
06-30 22:33:53.986 D/nativeloader(31766): Load /data/app/~~kZJtLOA9um_ayF_D2mu_uw==/com.erbete.customer-VXgBUlCBZLU2-GLjo41X1Q==/base.apk!/lib/arm64-v8a/libflutter.so using class loader ns clns-7 (caller=/data/app/~~kZJtLOA9um_ayF_D2mu_uw==/com.erbete.customer-VXgBUlCBZLU2-GLjo41X1Q==/base.apk!classes22.dex): ok
06-30 22:33:53.987 D/FlutterJNI(31766): flutter (null) was loaded normally!
06-30 22:33:54.088 I/flutter (31766): [IMPORTANT:flutter/shell/platform/android/android_context_vk_impeller.cc(62)] Using the Impeller rendering backend (Vulkan).
06-30 22:33:54.275 I/flutter (31766): The Dart VM service is listening on http://127.0.0.1:43849/j2RoPtoNmU4=/
06-30 22:33:54.865 D/FlutterGeolocator(31766): Attaching Geolocator to activity
06-30 22:33:54.957 I/erbete.customer(31766): hiddenapi: Accessing hidden method Landroid/view/accessibility/AccessibilityNodeInfo;->getSourceNodeId()J (runtime_flags=0, domain=platform, api=unsupported,test-api) from Lio/flutter/view/AccessibilityViewEmbedder$ReflectionAccessors; (domain=app, TargetSdkVersion=36) using reflection: allowed
06-30 22:33:54.957 I/erbete.customer(31766): hiddenapi: Accessing hidden method Landroid/view/accessibility/AccessibilityRecord;->getSourceNodeId()J (runtime_flags=0, domain=platform, api=unsupported) from Lio/flutter/view/AccessibilityViewEmbedder$ReflectionAccessors; (domain=app, TargetSdkVersion=36) using reflection: allowed
06-30 22:33:54.957 I/erbete.customer(31766): hiddenapi: Accessing hidden field Landroid/view/accessibility/AccessibilityNodeInfo;->mChildNodeIds:Landroid/util/LongArray; (runtime_flags=0, domain=platform, api=unsupported) from Lio/flutter/view/AccessibilityViewEmbedder$ReflectionAccessors; (domain=app, TargetSdkVersion=36) using reflection: allowed
06-30 22:33:54.957 I/erbete.customer(31766): hiddenapi: Accessing hidden method Landroid/util/LongArray;->get(I)J (runtime_flags=0, domain=platform, api=unsupported) from Lio/flutter/view/AccessibilityViewEmbedder$ReflectionAccessors; (domain=app, TargetSdkVersion=36) using reflection: allowed
06-30 22:33:55.240 E/gralloc4(31766): ERROR: Format allocation info not found for format: 38
06-30 22:33:55.240 E/gralloc4(31766): ERROR: Format allocation info not found for format: 0
06-30 22:33:55.240 E/gralloc4(31766): ERROR: Unrecognized and/or unsupported format 0x38 and usage 0xb00
06-30 22:33:55.242 E/AHardwareBuffer(31766): GraphicBuffer(w=4, h=4, lc=1) failed (Unknown error -5), handle=0x0
06-30 22:33:55.242 E/gralloc4(31766): ERROR: Format allocation info not found for format: 3b
06-30 22:33:55.242 E/gralloc4(31766): ERROR: Format allocation info not found for format: 0
06-30 22:33:55.242 E/gralloc4(31766): ERROR: Unrecognized and/or unsupported format 0x3b and usage 0xb00
06-30 22:33:55.242 E/AHardwareBuffer(31766): GraphicBuffer(w=4, h=4, lc=1) failed (Unknown error -5), handle=0x0
06-30 22:33:55.242 E/gralloc4(31766): ERROR: Format allocation info not found for format: 38
06-30 22:33:55.242 E/gralloc4(31766): ERROR: Format allocation info not found for format: 0
06-30 22:33:55.242 E/gralloc4(31766): ERROR: Unrecognized and/or unsupported format 0x38 and usage 0xb00
06-30 22:33:55.243 E/AHardwareBuffer(31766): GraphicBuffer(w=4, h=4, lc=1) failed (Unknown error -5), handle=0x0
06-30 22:33:55.243 E/gralloc4(31766): ERROR: Format allocation info not found for format: 3b
06-30 22:33:55.243 E/gralloc4(31766): ERROR: Format allocation info not found for format: 0
06-30 22:33:55.243 E/gralloc4(31766): ERROR: Unrecognized and/or unsupported format 0x3b and usage 0xb00
06-30 22:33:55.243 E/AHardwareBuffer(31766): GraphicBuffer(w=4, h=4, lc=1) failed (Unknown error -5), handle=0x0
06-30 22:33:55.296 D/FlutterGeolocator(31766): Creating service.
06-30 22:33:55.297 D/FlutterGeolocator(31766): Binding to location service.
06-30 22:33:55.299 D/FlutterLocationService(31766): Creating service.
06-30 22:33:55.302 D/FlutterLocationService(31766): Binding to location service.
06-30 22:33:55.328 D/FlutterGeolocator(31766): Geolocator foreground service connected
06-30 22:33:55.328 D/FlutterGeolocator(31766): Initializing Geolocator services
06-30 22:33:55.328 D/FlutterGeolocator(31766): Flutter engine connected. Connected engine count 1
06-30 22:33:55.328 D/LocationPlugin(31766): Service connected: ComponentInfo{com.erbete.customer/com.lyokone.location.FlutterLocationService}
06-30 22:33:56.834 E/GoogleApiManager(31766): java.lang.SecurityException: Unknown calling package name 'com.google.android.gms'.
06-30 22:33:56.834 E/GoogleApiManager(31766): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3251)
06-30 22:33:56.834 E/GoogleApiManager(31766): 	at android.os.Parcel.createException(Parcel.java:3235)
06-30 22:33:56.834 E/GoogleApiManager(31766): 	at android.os.Parcel.readException(Parcel.java:3218)
06-30 22:33:56.834 E/GoogleApiManager(31766): 	at android.os.Parcel.readException(Parcel.java:3160)
06-30 22:33:56.836 W/GoogleApiManager(31766): Not showing notification since connectionResult is not user-facing: ConnectionResult{statusCode=DEVELOPER_ERROR, resolution=null, message=null, clientMethodKey=null}
06-30 22:33:56.847 W/FlagRegistrar(31766): goux: 17: 17: API: Phenotype.API is not available on this device. Connection failed with: ConnectionResult{statusCode=DEVELOPER_ERROR, resolution=null, message=null, clientMethodKey=null}
06-30 22:33:56.847 W/FlagRegistrar(31766): Caused by: bjpk: 17: API: Phenotype.API is not available on this device. Connection failed with: ConnectionResult{statusCode=DEVELOPER_ERROR, resolution=null, message=null, clientMethodKey=null}
06-30 22:33:56.869 W/FlagStore(31766): java.util.concurrent.ExecutionException: goux: 17: 17: API: Phenotype.API is not available on this device. Connection failed with: ConnectionResult{statusCode=DEVELOPER_ERROR, resolution=null, message=null, clientMethodKey=null}
06-30 22:33:56.869 W/FlagStore(31766): Caused by: goux: 17: 17: API: Phenotype.API is not available on this device. Connection failed with: ConnectionResult{statusCode=DEVELOPER_ERROR, resolution=null, message=null, clientMethodKey=null}
06-30 22:33:56.870 W/FlagStore(31766): Caused by: bjpk: 17: API: Phenotype.API is not available on this device. Connection failed with: ConnectionResult{statusCode=DEVELOPER_ERROR, resolution=null, message=null, clientMethodKey=null}
06-30 22:34:02.007 I/flutter (31766): **-FireStoreUtils.getSection Parse error type 'Null' is not a subtype of type 'Map<String, dynamic>'
06-30 22:34:02.007 I/flutter (31766): **-FireStoreUtils.getSection Parse error type 'Null' is not a subtype of type 'Map<String, dynamic>'
06-30 22:34:02.007 I/flutter (31766): **-FireStoreUtils.getSection Parse error type 'Null' is not a subtype of type 'Map<String, dynamic>'
06-30 22:34:02.008 I/flutter (31766): **-FireStoreUtils.getSection Parse error type 'Null' is not a subtype of type 'Map<String, dynamic>'
06-30 22:34:02.008 I/flutter (31766): **-FireStoreUtils.getSection Parse error type 'Null' is not a subtype of type 'Map<String, dynamic>'
06-30 22:34:02.008 I/flutter (31766): **-FireStoreUtils.getSection Parse error type 'Null' is not a subtype of type 'Map<String, dynamic>'
06-30 22:34:02.008 I/flutter (31766): **-FireStoreUtils.getSection Parse error type 'Null' is not a subtype of type 'Map<String, dynamic>'
06-30 22:34:02.008 I/flutter (31766): **-FireStoreUtils.getSection Parse error type 'Null' is not a subtype of type 'Map<String, dynamic>'
```

## Final Status
STATUS: APP_PID_SECTION_DEBUG_LOG_FIXED_CAPTURED