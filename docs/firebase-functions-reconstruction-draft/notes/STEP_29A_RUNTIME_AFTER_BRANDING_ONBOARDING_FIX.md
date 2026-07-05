# RUNTIME AFTER BRANDING AND ONBOARDING FIX

Generated: 06/30/2026 21:02:57
Mode: read-only. Screenshot and log capture.

Screenshot: C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\screenshots\ghalbit_runtime_after_success_20260630_210256.png

## Filtered Logcat
```text
06-30 20:58:25.425 D/ActivityManager( 1698): getProcessesInErrorState callingUid=10254, CallingPid=15717
06-30 20:58:25.928 D/ActivityManager( 1698): getProcessesInErrorState callingUid=10254, CallingPid=15717
06-30 20:58:26.429 D/ActivityManager( 1698): getProcessesInErrorState callingUid=10254, CallingPid=15717
06-30 20:58:26.932 D/ActivityManager( 1698): getProcessesInErrorState callingUid=10254, CallingPid=15717
06-30 20:58:27.433 D/ActivityManager( 1698): getProcessesInErrorState callingUid=10254, CallingPid=15717
06-30 20:58:50.906 W/BatteryExternalStatsWorker( 1698): error reading Bluetooth stats: 9
06-30 21:00:50.106 W/BatteryExternalStatsWorker( 1698): error reading Bluetooth stats: 9
06-30 21:01:20.159 E/ActivityTaskManager( 1698): agaresPreload error: activityInfo is null
06-30 21:01:20.177 E/ActivityTaskManager( 1698): AppLaunchTracker getTaskIndex error: task is null.
06-30 21:01:20.200 D/aegean_PivotX+( 1698): applyActivityLaunchStart error={pkg='com.erbete.customer', uid=0, proc=com.erbete.customer, pid=0, type=7, act=com.erbete.customer/.MainActivity, mHome=false, onTop=false, appLaunch=true} lt:7
06-30 21:01:20.288 W/TranInstanceHelper(14518): Failed to instance com.transsion.hubcore.linkplus.implement.app.TranActivityThreadLinkplusImpl, java.lang.ClassNotFoundException: com.transsion.hubcore.linkplus.implement.app.TranActivityThreadLinkplusImpl
06-30 21:01:20.317 W/ActivityManager( 1698): pid 1698 system sent binder code 1 with flags 1 to frozen apps and got error -32
06-30 21:01:20.335 V/WindowManager( 1698):     startWCT=WindowContainerTransaction { changes = {} hops = [] errorCallbackToken=null taskFragmentOrganizer=null mInterrupt=false }
06-30 21:01:20.336 W/DisplayManagerService( 1698): android.os.DeadObjectException
06-30 21:01:21.596 I/TouchUtility(  970): notifyAppState error = NULL
06-30 21:01:21.602 W/System.err( 1698): java.io.FileNotFoundException: /proc/report_rate_switch: open failed: ENOENT (No such file or directory)
06-30 21:01:21.602 W/System.err( 1698): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
06-30 21:01:21.780 E/FeatureFlagsImplExport(14518): android.os.flagging.AconfigStorageReadException: ERROR_PACKAGE_NOT_FOUND: package com.android.libcore cannot be found on the device
06-30 21:01:23.650 W/Glide   ( 7826): class com.bumptech.glide.load.engine.GlideException: Failed to load resource
06-30 21:01:23.654 W/Glide   ( 7826): class com.bumptech.glide.load.engine.GlideException: Failed to load resource
06-30 21:01:23.657 W/Glide   ( 7826): class com.bumptech.glide.load.engine.GlideException: Failed to load resource
06-30 21:01:23.661 W/Glide   ( 7826): class com.bumptech.glide.load.engine.GlideException: Failed to load resource
06-30 21:01:23.664 W/Glide   ( 7826): class com.bumptech.glide.load.engine.GlideException: Failed to load resource
06-30 21:01:24.257 D/TranDisplayJamMonitor( 1698): checkExceptionWindowResult = 1040
06-30 21:01:24.298 E/gralloc4(14518): ERROR: Format allocation info not found for format: 38
06-30 21:01:24.298 E/gralloc4(14518): ERROR: Format allocation info not found for format: 0
06-30 21:01:24.298 E/gralloc4(14518): ERROR: Unrecognized and/or unsupported format 0x38 and usage 0xb00
06-30 21:01:24.300 E/gralloc4(  931): ERROR: Format allocation info not found for format: 38
06-30 21:01:24.300 E/gralloc4(  931): ERROR: Format allocation info not found for format: 0
06-30 21:01:24.300 E/gralloc4(  931): ERROR: Unrecognized and/or unsupported format 0x38 and usage 0xb00
06-30 21:01:24.300 E/AHardwareBuffer(14518): GraphicBuffer(w=4, h=4, lc=1) failed (Unknown error -5), handle=0x0
06-30 21:01:24.300 E/gralloc4(14518): ERROR: Format allocation info not found for format: 3b
06-30 21:01:24.300 E/gralloc4(14518): ERROR: Format allocation info not found for format: 0
06-30 21:01:24.300 E/gralloc4(14518): ERROR: Unrecognized and/or unsupported format 0x3b and usage 0xb00
06-30 21:01:24.300 E/gralloc4(  931): ERROR: Format allocation info not found for format: 3b
06-30 21:01:24.300 E/gralloc4(  931): ERROR: Format allocation info not found for format: 0
06-30 21:01:24.300 E/gralloc4(  931): ERROR: Unrecognized and/or unsupported format 0x3b and usage 0xb00
06-30 21:01:24.301 E/AHardwareBuffer(14518): GraphicBuffer(w=4, h=4, lc=1) failed (Unknown error -5), handle=0x0
06-30 21:01:24.301 E/gralloc4(14518): ERROR: Format allocation info not found for format: 38
06-30 21:01:24.301 E/gralloc4(14518): ERROR: Format allocation info not found for format: 0
06-30 21:01:24.301 E/gralloc4(14518): ERROR: Unrecognized and/or unsupported format 0x38 and usage 0xb00
06-30 21:01:24.301 E/gralloc4(  931): ERROR: Format allocation info not found for format: 38
06-30 21:01:24.301 E/gralloc4(  931): ERROR: Format allocation info not found for format: 0
06-30 21:01:24.301 E/gralloc4(  931): ERROR: Unrecognized and/or unsupported format 0x38 and usage 0xb00
06-30 21:01:24.301 E/AHardwareBuffer(14518): GraphicBuffer(w=4, h=4, lc=1) failed (Unknown error -5), handle=0x0
06-30 21:01:24.301 E/gralloc4(14518): ERROR: Format allocation info not found for format: 3b
06-30 21:01:24.301 E/gralloc4(14518): ERROR: Format allocation info not found for format: 0
06-30 21:01:24.301 E/gralloc4(14518): ERROR: Unrecognized and/or unsupported format 0x3b and usage 0xb00
06-30 21:01:24.301 E/gralloc4(  931): ERROR: Format allocation info not found for format: 3b
06-30 21:01:24.301 E/gralloc4(  931): ERROR: Format allocation info not found for format: 0
06-30 21:01:24.301 E/gralloc4(  931): ERROR: Unrecognized and/or unsupported format 0x3b and usage 0xb00
06-30 21:01:24.301 E/AHardwareBuffer(14518): GraphicBuffer(w=4, h=4, lc=1) failed (Unknown error -5), handle=0x0
06-30 21:01:26.280 E/ActivityTaskManager( 1698): agaresPreload error: activityInfo is null
06-30 21:01:26.342 E/GoogleApiManager(14518): java.lang.SecurityException: Unknown calling package name 'com.google.android.gms'.
06-30 21:01:26.342 E/GoogleApiManager(14518): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3251)
06-30 21:01:26.342 E/GoogleApiManager(14518): 	at android.os.Parcel.createException(Parcel.java:3235)
06-30 21:01:26.342 E/GoogleApiManager(14518): 	at android.os.Parcel.readException(Parcel.java:3218)
06-30 21:01:26.342 E/GoogleApiManager(14518): 	at android.os.Parcel.readException(Parcel.java:3160)
06-30 21:01:26.343 W/GoogleApiManager(14518): Not showing notification since connectionResult is not user-facing: ConnectionResult{statusCode=DEVELOPER_ERROR, resolution=null, message=null, clientMethodKey=null}
06-30 21:01:26.346 W/FlagRegistrar(14518): goux: 17: 17: API: Phenotype.API is not available on this device. Connection failed with: ConnectionResult{statusCode=DEVELOPER_ERROR, resolution=null, message=null, clientMethodKey=null}
06-30 21:01:26.346 W/FlagRegistrar(14518): Caused by: bjpk: 17: API: Phenotype.API is not available on this device. Connection failed with: ConnectionResult{statusCode=DEVELOPER_ERROR, resolution=null, message=null, clientMethodKey=null}
06-30 21:01:26.354 W/FlagStore(14518): java.util.concurrent.ExecutionException: goux: 17: 17: API: Phenotype.API is not available on this device. Connection failed with: ConnectionResult{statusCode=DEVELOPER_ERROR, resolution=null, message=null, clientMethodKey=null}
06-30 21:01:26.354 W/FlagStore(14518): Caused by: goux: 17: 17: API: Phenotype.API is not available on this device. Connection failed with: ConnectionResult{statusCode=DEVELOPER_ERROR, resolution=null, message=null, clientMethodKey=null}
06-30 21:01:26.355 W/FlagStore(14518): Caused by: bjpk: 17: API: Phenotype.API is not available on this device. Connection failed with: ConnectionResult{statusCode=DEVELOPER_ERROR, resolution=null, message=null, clientMethodKey=null}
06-30 21:01:26.452 W/System.err( 1698): java.io.FileNotFoundException: /proc/report_rate_switch: open failed: ENOENT (No such file or directory)
06-30 21:01:26.452 W/System.err( 1698): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
06-30 21:01:26.453 I/TouchUtility(  970): notifyAppState error = NULL
06-30 21:01:26.682 D/TranDisplayJamMonitor( 1698): checkExceptionWindowResult = 1024
06-30 21:01:26.732 V/WindowManager( 1698):     startWCT=WindowContainerTransaction { changes = {} hops = [] errorCallbackToken=null taskFragmentOrganizer=null mInterrupt=false }
06-30 21:01:29.013 E/libPowerHal(  970): [getCPUFreq] error cid:2, nClusterNum:2
06-30 21:01:29.181 D/TranDisplayJamMonitor( 1698): checkExceptionWindowResult = 1024
06-30 21:01:29.186 I/TouchUtility(  970): notifyAppState error = NULL
06-30 21:01:29.195 W/System.err( 1698): java.io.FileNotFoundException: /proc/report_rate_switch: open failed: ENOENT (No such file or directory)
06-30 21:01:29.196 W/System.err( 1698): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
06-30 21:01:29.230 V/WindowManager( 1698):     startWCT=WindowContainerTransaction { changes = {} hops = [] errorCallbackToken=null taskFragmentOrganizer=null mInterrupt=false }
06-30 21:01:29.632 E/TlcKM   (  670): (keymaster_error_t)tci->response.header.returnCode == -1000
06-30 21:01:29.644 E/keystore2(  669): system/security/keystore2/src/error.rs:171 - system/security/keystore2/src/operation.rs:847: KeystoreOperation::finish
06-30 21:01:29.644 E/keystore2(  669):     1: Error::Km(r#UNKNOWN_ERROR)
06-30 21:01:35.257 W/Finsky  (14562): [2] STU: Failed to get storage stats for package 'com.google.mainline.primary.libs' (1601: Error getting stats: android.content.pm.PackageManager.NameNotFoundException)
06-30 21:01:35.470 W/Finsky  (14562): [2] STU: Failed to get storage stats for package 'com.google.android.uwb' (1601: Error getting stats: android.content.pm.PackageManager.NameNotFoundException)
06-30 21:01:35.706 W/Finsky  (14562): [2] STU: Failed to get storage stats for package 'com.android.nfcservices' (1601: Error getting stats: android.content.pm.PackageManager.NameNotFoundException)
06-30 21:01:36.247 W/Finsky  (14562): [2] STU: Failed to get storage stats for package 'com.google.android.devicelock' (1601: Error getting stats: android.content.pm.PackageManager.NameNotFoundException)
06-30 21:01:36.300 E/GoogleApiManager(14518): java.lang.SecurityException: Unknown calling package name 'com.google.android.gms'.
06-30 21:01:36.300 E/GoogleApiManager(14518): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3251)
06-30 21:01:36.300 E/GoogleApiManager(14518): 	at android.os.Parcel.createException(Parcel.java:3235)
06-30 21:01:36.300 E/GoogleApiManager(14518): 	at android.os.Parcel.readException(Parcel.java:3218)
06-30 21:01:36.300 E/GoogleApiManager(14518): 	at android.os.Parcel.readException(Parcel.java:3160)
06-30 21:01:36.300 W/GoogleApiManager(14518): Not showing notification since connectionResult is not user-facing: ConnectionResult{statusCode=DEVELOPER_ERROR, resolution=null, message=null, clientMethodKey=null}
06-30 21:01:36.514 W/Finsky  (14562): [2] STU: Failed to get storage stats for package 'com.android.apex.cts.shim' (1601: Error getting stats: android.content.pm.PackageManager.NameNotFoundException)
06-30 21:01:36.734 W/Finsky  (14562): [2] STU: Failed to get storage stats for package 'com.google.android.appsearch' (1601: Error getting stats: android.content.pm.PackageManager.NameNotFoundException)
06-30 21:01:36.819 W/Finsky  (14562): [2] STU: Failed to get storage stats for package 'com.google.android.art' (1601: Error getting stats: android.content.pm.PackageManager.NameNotFoundException)
06-30 21:01:36.980 W/Finsky  (14562): [2] STU: Failed to get storage stats for package 'com.transsion.mi.os.framework' (1601: Error getting stats: android.content.pm.PackageManager.NameNotFoundException)
06-30 21:01:37.142 W/Finsky  (14562): [2] STU: Failed to get storage stats for package 'com.google.android.mediaprovider' (1601: Error getting stats: android.content.pm.PackageManager.NameNotFoundException)
06-30 21:01:37.418 W/Finsky  (14562): [2] STU: Failed to get storage stats for package 'com.android.virt' (1601: Error getting stats: android.content.pm.PackageManager.NameNotFoundException)
06-30 21:01:37.456 W/Finsky  (14562): [2] STU: Failed to get storage stats for package 'com.android.btservices' (1601: Error getting stats: android.content.pm.PackageManager.NameNotFoundException)
06-30 21:01:37.462 W/Finsky  (14562): [2] STU: Failed to get storage stats for package 'com.transsion.kolun' (1601: Error getting stats: android.content.pm.PackageManager.NameNotFoundException)
06-30 21:01:37.492 W/Finsky  (14562): [2] STU: Failed to get storage stats for package 'com.google.android.resolv' (1601: Error getting stats: android.content.pm.PackageManager.NameNotFoundException)
06-30 21:01:37.686 W/Finsky  (14562): [2] STU: Failed to get storage stats for package 'com.google.android.configinfrastructure' (1601: Error getting stats: android.content.pm.PackageManager.NameNotFoundException)
06-30 21:01:37.781 W/Finsky  (14562): [2] STU: Failed to get storage stats for package 'com.google.android.media' (1601: Error getting stats: android.content.pm.PackageManager.NameNotFoundException)
06-30 21:01:37.949 W/Finsky  (14562): [2] STU: Failed to get storage stats for package 'com.android.vndk.v31' (1601: Error getting stats: android.content.pm.PackageManager.NameNotFoundException)
06-30 21:01:37.953 W/Finsky  (14562): [2] STU: Failed to get storage stats for package 'com.android.vndk.v33' (1601: Error getting stats: android.content.pm.PackageManager.NameNotFoundException)
06-30 21:01:37.956 W/Finsky  (14562): [2] STU: Failed to get storage stats for package 'com.android.vndk.v34' (1601: Error getting stats: android.content.pm.PackageManager.NameNotFoundException)
06-30 21:01:38.232 W/Finsky  (14562): [2] STU: Failed to get storage stats for package 'com.google.android.sdkext' (1601: Error getting stats: android.content.pm.PackageManager.NameNotFoundException)
06-30 21:01:38.235 W/Finsky  (14562): [2] STU: Failed to get storage stats for package 'com.transsion.thub.core' (1601: Error getting stats: android.content.pm.PackageManager.NameNotFoundException)
06-30 21:01:38.364 W/Finsky  (14562): [2] STU: Failed to get storage stats for package 'com.google.android.adservices' (1601: Error getting stats: android.content.pm.PackageManager.NameNotFoundException)
06-30 21:01:38.377 W/Finsky  (14562): [2] STU: Failed to get storage stats for package 'com.google.android.tethering' (1601: Error getting stats: android.content.pm.PackageManager.NameNotFoundException)
06-30 21:01:38.634 W/Finsky  (14562): [2] STU: Failed to get storage stats for package 'com.android.runtime' (1601: Error getting stats: android.content.pm.PackageManager.NameNotFoundException)
06-30 21:01:38.821 W/Finsky  (14562): [2] STU: Failed to get storage stats for package 'com.google.android.cellbroadcast' (1601: Error getting stats: android.content.pm.PackageManager.NameNotFoundException)
06-30 21:01:38.908 W/Finsky  (14562): [2] STU: Failed to get storage stats for package 'com.google.android.rkpd' (1601: Error getting stats: android.content.pm.PackageManager.NameNotFoundException)
06-30 21:01:39.614 W/Finsky  (14562): [2] STU: Failed to get storage stats for package 'com.android.compos' (1601: Error getting stats: android.content.pm.PackageManager.NameNotFoundException)
06-30 21:01:39.686 W/Finsky  (14562): [2] STU: Failed to get storage stats for package 'com.transsion.phone' (1601: Error getting stats: android.content.pm.PackageManager.NameNotFoundException)
06-30 21:01:39.740 W/Finsky  (14562): [2] STU: Failed to get storage stats for package 'com.google.android.tzdata6' (1601: Error getting stats: android.content.pm.PackageManager.NameNotFoundException)
06-30 21:01:39.981 W/Finsky  (14562): [2] STU: Failed to get storage stats for package 'com.google.android.permission' (1601: Error getting stats: android.content.pm.PackageManager.NameNotFoundException)
06-30 21:01:41.010 W/Finsky  (14562): [2] STU: Failed to get storage stats for package 'com.google.android.wifi' (1601: Error getting stats: android.content.pm.PackageManager.NameNotFoundException)
06-30 21:01:42.647 W/Finsky  (14562): [2] STU: Failed to get storage stats for package 'com.google.android.media.swcodec' (1601: Error getting stats: android.content.pm.PackageManager.NameNotFoundException)
06-30 21:01:43.004 W/Finsky  (14562): [2] STU: Failed to get storage stats for package 'com.android.profiling' (1601: Error getting stats: android.content.pm.PackageManager.NameNotFoundException)
06-30 21:01:43.159 W/BatteryExternalStatsWorker( 1698): error reading Bluetooth stats: 9
06-30 21:01:43.218 E/android.system.suspend-service(  668): Error opening kernel wakelock stats for: wakeup48 (../../devices/platform/soc/11015000.i2c/i2c-3/3-002b/wakeup/wakeup48): Permission denied
06-30 21:01:43.223 E/android.system.suspend-service(  668): Error opening kernel wakelock stats for: wakeup259 (../../devices/platform/1a000000.camisp_legacy/wakeup/wakeup259): Permission denied
06-30 21:01:43.223 E/android.system.suspend-service(  668): Error opening kernel wakelock stats for: wakeup38 (../../devices/platform/pe5/wakeup/wakeup38): Permission denied
06-30 21:01:43.244 E/android.system.suspend-service(  668): Error opening kernel wakelock stats for: wakeup26 (../../devices/platform/soc/1101a000.i2c/i2c-6/6-004e/wakeup/wakeup26): Permission denied
06-30 21:01:43.251 E/android.system.suspend-service(  668): Error opening kernel wakelock stats for: wakeup44 (../../devices/platform/soc/10026000.pwrap/10026000.pwrap:mt6366/mt6358-gauge/power_supply/mtk-gauge/wakeup44): Permission denied
06-30 21:01:43.252 E/android.system.suspend-service(  668): Error opening kernel wakelock stats for: wakeup0 (../../devices/platform/soc/10228000.gce/wakeup/wakeup0): Permission denied
06-30 21:01:43.256 E/android.system.suspend-service(  668): Error opening kernel wakelock stats for: wakeup34 (../../devices/platform/soc/11017000.i2c/i2c-5/5-0054/wakeup/wakeup34): Permission denied
06-30 21:01:43.267 E/android.system.suspend-service(  668): Error opening kernel wakelock stats for: wakeup14 (../../devices/platform/soc/10026000.pwrap/10026000.pwrap:mt6366/mt6358-rtc/rtc/rtc0/alarmtimer.1.auto/wakeup/wakeup14): Permission denied
06-30 21:01:43.281 E/android.system.suspend-service(  668): Error opening kernel wakelock stats for: wakeup50 (../../devices/platform/soc/11015000.i2c/i2c-3/3-002b/wakeup/wakeup50): Permission denied
06-30 21:01:43.287 E/android.system.suspend-service(  668): Error opening kernel wakelock stats for: wakeup261 (../../devices/platform/soc/11010000.spi1/spi_master/spi1/spi1.0/input/input5/wakeup261): Permission denied
06-30 21:01:43.291 E/android.system.suspend-service(  668): Error opening kernel wakelock stats for: wakeup30 (../../devices/platform/odm/odm:tran_auto_test/power_supply/tran-auto-test/wakeup30): Permission denied
06-30 21:01:43.301 E/android.system.suspend-service(  668): Error opening kernel wakelock stats for: wakeup49 (../../devices/platform/soc/11015000.i2c/i2c-3/3-002b/power_supply/wireless/wakeup49): Permission denied
06-30 21:01:43.312 E/android.system.suspend-service(  668): Error opening kernel wakelock stats for: wakeup57 (../../devices/platform/extcon_usb/wakeup/wakeup57): Permission denied
06-30 21:01:43.324 E/android.system.suspend-service(  668): Error opening kernel wakelock stats for: wakeup27 (../../devices/platform/mtk_ctd/power_supply/mtk_charger_type/wakeup27): Permission denied
06-30 21:01:43.334 E/android.system.suspend-service(  668): Error opening kernel wakelock stats for: wakeup35 (../../devices/platform/soc/11f00000.i2c/i2c-7/7-0055/wakeup/wakeup35): Permission denied
06-30 21:01:43.344 E/android.system.suspend-service(  668): Error opening kernel wakelock stats for: wakeup15 (../../devices/platform/soc/11017000.i2c/i2c-5/5-006b/power_supply/charger/wakeup15): Permission denied
06-30 21:01:43.345 E/android.system.suspend-service(  668): Error opening kernel wakelock stats for: wakeup43 (../../devices/platform/soc/10026000.pwrap/10026000.pwrap:mt6366/mt6358-gauge/power_supply/battery/wakeup43): Permission denied
06-30 21:01:43.358 E/android.system.suspend-service(  668): Error opening kernel wakelock stats for: wakeup13 (../../devices/platform/soc/10026000.pwrap/10026000.pwrap:mt6366/mt6358-rtc/wakeup/wakeup13): Permission denied
06-30 21:01:43.364 E/android.system.suspend-service(  668): Error opening kernel wakelock stats for: wakeup31 (../../devices/platform/odm/odm:pid_chg/wakeup/wakeup31): Permission denied
06-30 21:01:43.371 E/android.system.suspend-service(  668): Error opening kernel wakelock stats for: wakeup6 (../../devices/platform/soc/10026000.pwrap/10026000.pwrap:mt6366/mt635x-auxadc/wakeup/wakeup6): Permission denied
06-30 21:01:43.796 W/Finsky  (14562): [2] STU: Failed to get storage stats for package 'com.google.android.adbd' (1601: Error getting stats: android.content.pm.PackageManager.NameNotFoundException)
06-30 21:01:44.036 W/Finsky  (14562): [2] STU: Failed to get storage stats for package 'com.android.i18n' (1601: Error getting stats: android.content.pm.PackageManager.NameNotFoundException)
06-30 21:01:44.267 W/Finsky  (14562): [2] STU: Failed to get storage stats for package 'com.google.android.conscrypt' (1601: Error getting stats: android.content.pm.PackageManager.NameNotFoundException)
06-30 21:01:44.819 W/Finsky  (14562): [2] STU: Failed to get storage stats for package 'com.google.android.neuralnetworks' (1601: Error getting stats: android.content.pm.PackageManager.NameNotFoundException)
06-30 21:01:44.887 W/Finsky  (14562): [2] STU: Failed to get storage stats for package 'com.google.android.ipsec' (1601: Error getting stats: android.content.pm.PackageManager.NameNotFoundException)
06-30 21:01:44.903 W/Finsky  (14562): [2] STU: Failed to get storage stats for package 'com.transsion.performance' (1601: Error getting stats: android.content.pm.PackageManager.NameNotFoundException)
06-30 21:01:45.118 W/Finsky  (14562): [2] STU: Failed to get storage stats for package 'com.google.android.ondevicepersonalization' (1601: Error getting stats: android.content.pm.PackageManager.NameNotFoundException)
06-30 21:01:45.164 W/Finsky  (14562): [2] STU: Failed to get storage stats for package 'com.google.android.healthfitness' (1601: Error getting stats: android.content.pm.PackageManager.NameNotFoundException)
06-30 21:01:45.166 W/Finsky  (14562): [2] STU: Failed to get storage stats for package 'com.transsion.appservices' (1601: Error getting stats: android.content.pm.PackageManager.NameNotFoundException)
06-30 21:01:45.676 W/Finsky  (14562): [2] STU: Failed to get storage stats for package 'com.google.android.extservices' (1601: Error getting stats: android.content.pm.PackageManager.NameNotFoundException)
06-30 21:01:45.677 W/Finsky  (14562): [2] STU: Failed to get storage stats for package 'com.transsion.connectivity' (1601: Error getting stats: android.content.pm.PackageManager.NameNotFoundException)
06-30 21:01:46.007 W/Finsky  (14562): [2] STU: Failed to get storage stats for package 'com.ahmadprokhan.recorder.xyzscreenrecorder' (1601: Error getting stats: java.lang.NullPointerException)
06-30 21:01:46.399 W/Finsky  (14562): [2] STU: Failed to get storage stats for package 'com.google.android.os.statsd' (1601: Error getting stats: android.content.pm.PackageManager.NameNotFoundException)
06-30 21:01:46.938 W/Finsky  (14562): [2] STU: Failed to get storage stats for package 'com.google.android.scheduling' (1601: Error getting stats: android.content.pm.PackageManager.NameNotFoundException)
06-30 21:01:46.973 W/Finsky  (14562): [2] STU: Failed to get storage stats for package 'com.scorpio.sc.core' (1601: Error getting stats: android.content.pm.PackageManager.NameNotFoundException)
06-30 21:01:47.342 W/Auth    ( 3552): [ChimeraGetToken] exception while trying to fetch auth tokens for app=com.google.android.gms, scope=oauth2:https://www.googleapis.com/auth/googleplay [CONTEXT service_id=153 ]
06-30 21:01:47.342 W/GLSActivity( 3552): [GmsAccountAuthenticatorImpl] error status while fetching token:BadAuthentication
06-30 21:02:11.226 W/Finsky  (14562): [2] STU: Failed to get storage stats for package 'com.google.mainline.primary.libs' (1601: Error getting stats: android.content.pm.PackageManager.NameNotFoundException)
06-30 21:02:11.469 W/Finsky  (14562): [2] STU: Failed to get storage stats for package 'com.google.android.uwb' (1601: Error getting stats: android.content.pm.PackageManager.NameNotFoundException)
06-30 21:02:11.696 W/Finsky  (14562): [2] STU: Failed to get storage stats for package 'com.android.nfcservices' (1601: Error getting stats: android.content.pm.PackageManager.NameNotFoundException)
06-30 21:02:12.312 W/Finsky  (14562): [2] STU: Failed to get storage stats for package 'com.google.android.devicelock' (1601: Error getting stats: android.content.pm.PackageManager.NameNotFoundException)
06-30 21:02:12.566 W/Finsky  (14562): [2] STU: Failed to get storage stats for package 'com.android.apex.cts.shim' (1601: Error getting stats: android.content.pm.PackageManager.NameNotFoundException)
06-30 21:02:12.831 W/Finsky  (14562): [2] STU: Failed to get storage stats for package 'com.google.android.appsearch' (1601: Error getting stats: android.content.pm.PackageManager.NameNotFoundException)
06-30 21:02:12.935 W/Finsky  (14562): [2] STU: Failed to get storage stats for package 'com.google.android.art' (1601: Error getting stats: android.content.pm.PackageManager.NameNotFoundException)
06-30 21:02:13.067 W/Finsky  (14562): [2] STU: Failed to get storage stats for package 'com.transsion.mi.os.framework' (1601: Error getting stats: android.content.pm.PackageManager.NameNotFoundException)
06-30 21:02:13.195 W/Finsky  (14562): [2] STU: Failed to get storage stats for package 'com.google.android.mediaprovider' (1601: Error getting stats: android.content.pm.PackageManager.NameNotFoundException)
06-30 21:02:13.500 W/Finsky  (14562): [2] STU: Failed to get storage stats for package 'com.android.virt' (1601: Error getting stats: android.content.pm.PackageManager.NameNotFoundException)
06-30 21:02:13.531 W/Finsky  (14562): [2] STU: Failed to get storage stats for package 'com.android.btservices' (1601: Error getting stats: android.content.pm.PackageManager.NameNotFoundException)
06-30 21:02:13.547 W/Finsky  (14562): [2] STU: Failed to get storage stats for package 'com.transsion.kolun' (1601: Error getting stats: android.content.pm.PackageManager.NameNotFoundException)
06-30 21:02:13.581 W/Finsky  (14562): [2] STU: Failed to get storage stats for package 'com.google.android.resolv' (1601: Error getting stats: android.content.pm.PackageManager.NameNotFoundException)
06-30 21:02:13.772 W/Finsky  (14562): [2] STU: Failed to get storage stats for package 'com.google.android.configinfrastructure' (1601: Error getting stats: android.content.pm.PackageManager.NameNotFoundException)
06-30 21:02:13.864 W/Finsky  (14562): [2] STU: Failed to get storage stats for package 'com.google.android.media' (1601: Error getting stats: android.content.pm.PackageManager.NameNotFoundException)
06-30 21:02:13.997 W/Finsky  (14562): [2] STU: Failed to get storage stats for package 'com.android.vndk.v31' (1601: Error getting stats: android.content.pm.PackageManager.NameNotFoundException)
06-30 21:02:14.002 W/Finsky  (14562): [2] STU: Failed to get storage stats for package 'com.android.vndk.v33' (1601: Error getting stats: android.content.pm.PackageManager.NameNotFoundException)
06-30 21:02:14.007 W/Finsky  (14562): [2] STU: Failed to get storage stats for package 'com.android.vndk.v34' (1601: Error getting stats: android.content.pm.PackageManager.NameNotFoundException)
06-30 21:02:14.179 W/Finsky  (14562): [2] STU: Failed to get storage stats for package 'com.google.android.sdkext' (1601: Error getting stats: android.content.pm.PackageManager.NameNotFoundException)
06-30 21:02:14.195 W/Finsky  (14562): [2] STU: Failed to get storage stats for package 'com.transsion.thub.core' (1601: Error getting stats: android.content.pm.PackageManager.NameNotFoundException)
06-30 21:02:14.266 W/Finsky  (14562): [2] STU: Failed to get storage stats for package 'com.google.android.adservices' (1601: Error getting stats: android.content.pm.PackageManager.NameNotFoundException)
06-30 21:02:14.277 W/Finsky  (14562): [2] STU: Failed to get storage stats for package 'com.google.android.tethering' (1601: Error getting stats: android.content.pm.PackageManager.NameNotFoundException)
06-30 21:02:14.488 W/Finsky  (14562): [2] STU: Failed to get storage stats for package 'com.android.runtime' (1601: Error getting stats: android.content.pm.PackageManager.NameNotFoundException)
06-30 21:02:14.597 W/Finsky  (14562): [2] STU: Failed to get storage stats for package 'com.google.android.cellbroadcast' (1601: Error getting stats: android.content.pm.PackageManager.NameNotFoundException)
06-30 21:02:14.670 W/Finsky  (14562): [2] STU: Failed to get storage stats for package 'com.google.android.rkpd' (1601: Error getting stats: android.content.pm.PackageManager.NameNotFoundException)
06-30 21:02:15.336 W/Finsky  (14562): [2] STU: Failed to get storage stats for package 'com.android.compos' (1601: Error getting stats: android.content.pm.PackageManager.NameNotFoundException)
06-30 21:02:15.402 W/Finsky  (14562): [2] STU: Failed to get storage stats for package 'com.transsion.phone' (1601: Error getting stats: android.content.pm.PackageManager.NameNotFoundException)
06-30 21:02:15.441 W/Finsky  (14562): [2] STU: Failed to get storage stats for package 'com.google.android.tzdata6' (1601: Error getting stats: android.content.pm.PackageManager.NameNotFoundException)
06-30 21:02:15.660 W/Finsky  (14562): [2] STU: Failed to get storage stats for package 'com.google.android.permission' (1601: Error getting stats: android.content.pm.PackageManager.NameNotFoundException)
06-30 21:02:16.402 W/Finsky  (14562): [2] STU: Failed to get storage stats for package 'com.google.android.wifi' (1601: Error getting stats: android.content.pm.PackageManager.NameNotFoundException)
06-30 21:02:16.942 W/Finsky  (14562): [2] STU: Failed to get storage stats for package 'com.google.android.media.swcodec' (1601: Error getting stats: android.content.pm.PackageManager.NameNotFoundException)
06-30 21:02:17.135 W/Finsky  (14562): [2] STU: Failed to get storage stats for package 'com.android.profiling' (1601: Error getting stats: android.content.pm.PackageManager.NameNotFoundException)
06-30 21:02:17.571 W/Finsky  (14562): [2] STU: Failed to get storage stats for package 'com.google.android.adbd' (1601: Error getting stats: android.content.pm.PackageManager.NameNotFoundException)
06-30 21:02:17.690 W/Finsky  (14562): [2] STU: Failed to get storage stats for package 'com.android.i18n' (1601: Error getting stats: android.content.pm.PackageManager.NameNotFoundException)
06-30 21:02:17.768 W/Finsky  (14562): [2] STU: Failed to get storage stats for package 'com.google.android.conscrypt' (1601: Error getting stats: android.content.pm.PackageManager.NameNotFoundException)
06-30 21:02:18.178 W/Finsky  (14562): [2] STU: Failed to get storage stats for package 'com.google.android.neuralnetworks' (1601: Error getting stats: android.content.pm.PackageManager.NameNotFoundException)
06-30 21:02:18.241 W/Finsky  (14562): [2] STU: Failed to get storage stats for package 'com.google.android.ipsec' (1601: Error getting stats: android.content.pm.PackageManager.NameNotFoundException)
06-30 21:02:18.254 W/Finsky  (14562): [2] STU: Failed to get storage stats for package 'com.transsion.performance' (1601: Error getting stats: android.content.pm.PackageManager.NameNotFoundException)
06-30 21:02:18.455 W/Finsky  (14562): [2] STU: Failed to get storage stats for package 'com.google.android.ondevicepersonalization' (1601: Error getting stats: android.content.pm.PackageManager.NameNotFoundException)
06-30 21:02:18.485 W/Finsky  (14562): [2] STU: Failed to get storage stats for package 'com.google.android.healthfitness' (1601: Error getting stats: android.content.pm.PackageManager.NameNotFoundException)
06-30 21:02:18.491 W/Finsky  (14562): [2] STU: Failed to get storage stats for package 'com.transsion.appservices' (1601: Error getting stats: android.content.pm.PackageManager.NameNotFoundException)
06-30 21:02:18.732 W/Finsky  (14562): [2] STU: Failed to get storage stats for package 'com.google.android.extservices' (1601: Error getting stats: android.content.pm.PackageManager.NameNotFoundException)
06-30 21:02:18.733 W/Finsky  (14562): [2] STU: Failed to get storage stats for package 'com.transsion.connectivity' (1601: Error getting stats: android.content.pm.PackageManager.NameNotFoundException)
06-30 21:02:18.955 W/Finsky  (14562): [2] STU: Failed to get storage stats for package 'com.ahmadprokhan.recorder.xyzscreenrecorder' (1601: Error getting stats: java.lang.NullPointerException)
06-30 21:02:19.137 W/Finsky  (14562): [2] STU: Failed to get storage stats for package 'com.google.android.os.statsd' (1601: Error getting stats: android.content.pm.PackageManager.NameNotFoundException)
06-30 21:02:19.442 W/Finsky  (14562): [2] STU: Failed to get storage stats for package 'com.google.android.scheduling' (1601: Error getting stats: android.content.pm.PackageManager.NameNotFoundException)
06-30 21:02:19.463 W/Finsky  (14562): [2] STU: Failed to get storage stats for package 'com.scorpio.sc.core' (1601: Error getting stats: android.content.pm.PackageManager.NameNotFoundException)
06-30 21:02:19.650 W/Auth    ( 3552): [ChimeraGetToken] exception while trying to fetch auth tokens for app=com.google.android.gms, scope=oauth2:https://www.googleapis.com/auth/googleplay [CONTEXT service_id=153 ]
06-30 21:02:19.651 W/GLSActivity( 3552): [GmsAccountAuthenticatorImpl] error status while fetching token:BadAuthentication
06-30 21:02:46.906 D/BoundBrokerSvc( 5972): onBind: Intent { act=com.google.android.gms.onboardingconsent.api.ConsentManagerApiService.START dat=chimera-action:/... cmp=com.google.android.gms/.chimera.GmsApiService }
06-30 21:02:46.906 D/BoundBrokerSvc( 5972): Loading bound service for intent: Intent { act=com.google.android.gms.onboardingconsent.api.ConsentManagerApiService.START dat=chimera-action:/... cmp=com.google.android.gms/.chimera.GmsApiService }
06-30 21:02:46.927 I/SemanticLocation( 3552): java.util.concurrent.ExecutionException: java.util.concurrent.ExecutionException: bjpk: 44501: 
06-30 21:02:46.927 I/SemanticLocation( 3552): Caused by: java.util.concurrent.ExecutionException: bjpk: 44501: 
06-30 21:02:46.964 I/SemanticLocation( 3552): java.util.concurrent.ExecutionException: java.util.concurrent.ExecutionException: bjpk: 44501: 
06-30 21:02:46.964 I/SemanticLocation( 3552): Caused by: java.util.concurrent.ExecutionException: bjpk: 44501: 
06-30 21:02:46.995 W/Auth    ( 3552): [ChimeraGetToken] exception while trying to fetch auth tokens for app=com.google.android.gms, scope=oauth2:https://www.googleapis.com/auth/webhistory [CONTEXT service_id=153 ]
06-30 21:02:46.995 W/Auth    ( 3552): [GoogleAuthUtil] [GoogleAuthUtil] error status:BAD_AUTHENTICATION with method:getTokenWithDetails
06-30 21:02:47.000 W/SemanticLocation( 3552): [Geller] getToken fails - recoverable auth exception [CONTEXT service_id=173 ]
06-30 21:02:47.000 W/SemanticLocation( 3552): com.google.android.gms.auth.UserRecoverableAuthException: BadAuthentication
06-30 21:02:47.024 I/SemanticLocation( 3552): java.util.concurrent.ExecutionException: java.util.concurrent.ExecutionException: bjpk: 44501: 
06-30 21:02:47.024 I/SemanticLocation( 3552): Caused by: java.util.concurrent.ExecutionException: bjpk: 44501: 
06-30 21:02:47.409 W/BatteryExternalStatsWorker( 1698): error reading Bluetooth stats: 9
```

## Final Status
STATUS: RUNTIME_AFTER_BRANDING_ONBOARDING_FIX_CAPTURED