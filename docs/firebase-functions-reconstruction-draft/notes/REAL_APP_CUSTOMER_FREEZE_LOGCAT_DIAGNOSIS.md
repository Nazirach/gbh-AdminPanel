# CUSTOMER FREEZE LOGCAT DIAGNOSIS

Generated: 06/29/2026 01:30:32

Mode: read-only. No patch. No Firebase write.

## Files
```text
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_freeze_screen.png
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_freeze_dump.xml
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_freeze_logcat_full.txt
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_freeze_logcat_filtered.txt
```

## Current Screen Text
```text
<?xml version='1.0' encoding='UTF-8' standalone='yes' ?><hierarchy rotation="0"><node index="0" text="" resource-id="" class="android.widget.FrameLayout" package="com.erbete.customer" content-desc="" checkable="false" checked="false" clickable="false" enabled="true" focusable="false" focused="false" scrollable="false" long-clickable="false" password="false" selected="false" bounds="[0,0][1080,2436]"><node index="0" text="" resource-id="" class="android.widget.LinearLayout" package="com.erbete.customer" content-desc="" checkable="false" checked="false" clickable="false" enabled="true" focusable="false" focused="false" scrollable="false" long-clickable="false" password="false" selected="false" bounds="[0,0][1080,2436]"><node index="0" text="" resource-id="android:id/content" class="android.widget.FrameLayout" package="com.erbete.customer" content-desc="" checkable="false" checked="false" clickable="false" enabled="true" focusable="false" focused="false" scrollable="false" long-clickable="false" password="false" selected="false" bounds="[0,0][1080,2436]"><node index="0" text="" resource-id="" class="android.widget.FrameLayout" package="com.erbete.customer" content-desc="" checkable="false" checked="false" clickable="false" enabled="true" focusable="false" focused="false" scrollable="false" long-clickable="false" password="false" selected="false" bounds="[0,0][1080,2436]"><node index="0" text="" resource-id="" class="android.widget.FrameLayout" package="com.erbete.customer" content-desc="" checkable="false" checked="false" clickable="false" enabled="true" focusable="true" focused="false" scrollable="false" long-clickable="false" password="false" selected="false" bounds="[0,0][1080,2436]"><node index="0" text="" resource-id="" class="android.view.View" package="com.erbete.customer" content-desc="" checkable="false" checked="false" clickable="false" enabled="true" focusable="false" focused="false" scrollable="false" long-clickable="false" password="false" selected="false" bounds="[0,0][1080,2436]"><node index="0" text="" resource-id="" class="android.view.View" package="com.erbete.customer" content-desc="" checkable="false" checked="false" clickable="false" enabled="true" focusable="false" focused="false" scrollable="false" long-clickable="false" password="false" selected="false" bounds="[0,0][1080,2436]"><node index="0" text="" resource-id="" class="android.view.View" package="com.erbete.customer" content-desc="" checkable="false" checked="false" clickable="false" enabled="true" focusable="false" focused="false" scrollable="false" long-clickable="false" password="false" selected="false" bounds="[0,0][1080,2316]"><node index="0" text="" resource-id="" class="android.view.View" package="com.erbete.customer" content-desc="" checkable="false" checked="false" clickable="false" enabled="true" focusable="false" focused="false" scrollable="false" long-clickable="false" password="false" selected="false" bounds="[0,0][1080,2316]"><node index="0" text="" resource-id="" class="android.widget.ImageView" package="com.erbete.customer" content-desc="" checkable="false" checked="false" clickable="false" enabled="true" focusable="false" focused="false" scrollable="false" long-clickable="false" password="false" selected="false" bounds="[360,909][720,1269]" /><node index="1" text="" resource-id="" class="android.view.View" package="com.erbete.customer" content-desc="eMart" checkable="false" checked="false" clickable="false" enabled="true" focusable="true" focused="false" scrollable="false" long-clickable="false" password="false" selected="false" bounds="[444,1305][636,1407]" /></node></node></node></node></node></node></node></node><node index="1" text="" resource-id="android:id/navigationBarBackground" class="android.view.View" package="com.erbete.customer" content-desc="" checkable="false" checked="false" clickable="false" enabled="true" focusable="false" focused="false" scrollable="false" long-clickable="false" password="false" selected="false" bounds="[0,2316][1080,2436]" /></node></hierarchy>
```

## Important Filtered Logcat
```text
06-29 01:29:56.364 D/RilUtility(  963): notify_rild_crash_pid_set certPid:-1, crash:1624, scn:0x0
06-29 01:29:56.373 D/aegean_TranRecentTasksProxy( 1796): FW_getTasks=3
06-29 01:29:56.384 I/TranSuccCrashMgr( 1796): Post key event: type=0, event=wm_resume_activity0,0,com.transsion.XOSLauncher/com.android.launcher3.uioverrides.QuickstepLauncher, ext=null
06-29 01:29:56.404 I/BufferQueueDebug( 1032): [Surface(name=eda4b89 StatusBar)/@0x1161e9a - animation-leash of insets_animation#20638](this:0xb40000744ea56cd8,id:-1,api:0,p:-1,c:-1) BufferQueue core=(1032:/system/bin/surfaceflinger)
06-29 01:29:56.424 D/os.permission.PermissionInfo( 1796): checkPermission 10196:android.permission.ACCESS_SHORTCUTS:true
06-29 01:29:56.424 I/os.permission( 1796): Grant permission: android.permission.ACCESS_SHORTCUTS to uid: 10196
06-29 01:29:56.489 D/os.permission.PermissionInfo( 1796): checkPermission 10430:android.permission.POST_NOTIFICATIONS:false
06-29 01:29:56.490 D/os.permission.PermissionInfo( 1796): checkPermission 10430:android.permission.CONTROL_REMOTE_APP_TRANSITION_ANIMATIONS:false
06-29 01:29:56.502 D/LauncherAdsMgr( 2369): handleAZShows ->[taNativeInfo : AdsDTO{impBeanRequest=AdxImpBean{, pmid='250414mZksK5T6', adt=6, mAdCount=10, offlineAdEnable=false, cacheAdCount=0, mTriggerNetState=0}, adCreativeId=516640, fill_ts=1782668425321, uuid='7b8078cb8a1146639dd477095135584d', deepLinkUrlFirst='null', actualShowTime=null, actualShowRate=0, showArea='0*0', isEffectiveShow=null, showReportTimeType=null, calledUrlType=3, pslinkAppName='null', packageName='', clickid='null', impressionUrl='null', clickUrlTs=0, adSeatType='icon', viewJsonData=com.cloud.hisavana.sdk.ad.data.response.ViewJson@ed1de3f, showDate='1782666000000', source=2, showNum=0, offlineAdStartDateLong=null, offlineAdLaunchDateStr='null', offlineAdExpireTime=null, viewJson={"offline":{"maxShowPPPD":5}}, adRequestVer=0, videoWidth=0, videoHeight=0}, taNativeInfo : AdsDTO{impBeanRequest=AdxImpBean{, pmid='250414mZksK5T6', adt=6, mAdCount=10, offlineAdEnable=false, cacheAdCount=0, mTriggerNetState=0}, adCreativeId=804297, fill_ts=1782668425322, uuid='27388dcfd0594237966422acbcaf27db', deepLinkUrlFirst='null', actualShowTime=null, actualShowRate=0, showArea='0*0', isEffectiveShow=null, showReportTimeType=null, calledUrlType=3, pslinkAppName='null', packageName='', clickid='null', impressionUrl='null', clickUrlTs=0, adSeatType='icon', viewJsonData=com.cloud.hisavana.sdk.ad.data.response.ViewJson@4cd030c, showDate='1782666000000', source=2, showNum=0, offlineAdStartDateLong=null, offlineAdLaunchDateStr='null', offlineAdExpireTime=null, viewJson={"offline":{"maxShowPPPD":5}}, adRequestVer=0, videoWidth=0, videoHeight=0}]
06-29 01:29:56.690 E/JobScheduler.Concurrency( 1796): Error executing JobStatus{1159f74 #u0a162/2614 com.gallery20/androidx.work.impl.background.systemjob.SystemJobService u=0 s=10162 TIME=-2d9h18m24s404ms:none BATNOTLOW STORENOTLOW READY}
06-29 01:29:56.699 D/DebugTheme.onThemeUpdated(14738): reload start !TranResourcesUtils.isRunningOnSystemServer()=true currentForegroundUser=0
06-29 01:29:56.710 I/IslandManager( 2377): checkIslandPermission result true granted 1
06-29 01:29:56.869 D/NotificationUtil(14738): data = CriticalCrashModel{, appPackageName='com.erbete.customer', appVersionName='1.0.0', crashSummary='r=USER_REQUESTED sr=FORCE_STOP im=FOREGROUND d=[FORCE STOP] stop com.erbete.customer due to from pid 14728', timeStamp='1782671396353', firstTimeStamp='1782671396353', appInstaller='unk', appInstallTime='1782662581375', adjInfo='null', exceptionType='exit', extraInformation='null', reservedOne='null', reservedTwo='null', crashFrequency=1, crashAverageTime=0, causeByApp=1} adj = 0
06-29 01:29:56.885 D/NotificationUtil(14738): data = CriticalCrashModel{, appPackageName='com.erbete.customer', appVersionName='1.0.0', crashSummary='r=UNKNOWN sr=UNKNOWN im=FOREGROUND d=proc died without state saved', timeStamp='1782671396366', firstTimeStamp='1782664074898', appInstaller='unk', appInstallTime='1782662581375', adjInfo='null', exceptionType='exit', extraInformation='null', reservedOne='null', reservedTwo='null', crashFrequency=3, crashAverageTime=0, causeByApp=1} adj = -1
06-29 01:29:56.926 V/WifiService( 1796): Clearing REDACT_FOR_ACCESS_FINE_LOCATION for android(uid=1000)
06-29 01:29:56.929 V/WifiService( 1796): Clearing REDACT_FOR_ACCESS_FINE_LOCATION for com.android.phone(uid=1001)
06-29 01:29:56.941 V/WifiPermissionsUtil( 1796): checkCallersLocationPermission(com.google.android.gms): ok because uid 10113 has app-op android:fine_location
06-29 01:29:56.941 V/WifiService( 1796): Clearing REDACT_FOR_ACCESS_FINE_LOCATION for com.google.android.gms(uid=10113)
06-29 01:29:56.950 V/WifiService( 1796): Clearing REDACT_FOR_ACCESS_FINE_LOCATION for android(uid=1000)
06-29 01:29:56.973 W/FirebaseRemoteConfig(27014): No value of type 'String' exists for parameter key 'zs_preload_news_config'.
06-29 01:29:57.661 I/libPowerHal(  963): [PD] fpsgo update cmd:1404500 param:0
06-29 01:29:57.934 I/libPowerHal(  963): [PD] MTKPOWER_HINT_EXT_LAUNCH update cmd:1404300 param:0
06-29 01:29:58.292 I/StatusBarNetworkRateView( 2377): wifi is default. hide second network rate view. StatusBarNetworkRateView subId=2, isFirstSimCard=false, mLocation=QS_NEW NetworkRateState=NetworkRateState{visible=true, activeMobileDataSubId=2, totalRate=1.939, netWorkState=1, isAirplane=false, netRateStateBySettingGlobal=1, networkRate='1,94', networkRateUnit='KB/S'}
06-29 01:29:58.679 D/AndroidRuntime(14778): >>>>>> START com.android.internal.os.RuntimeInit uid 2000 <<<<<<
06-29 01:29:58.685 I/AndroidRuntime(14778): Using default boot image
06-29 01:29:58.685 I/AndroidRuntime(14778): Leaving lock profiling enabled
06-29 01:29:58.824 D/AndroidRuntime(14778): Calling main entry com.android.commands.monkey.Monkey
06-29 01:29:58.881 V/GrammaticalInflectionUtils( 1796): AttributionSource: android.content.AttributionSource@798116f2 does not have READ_SYSTEM_GRAMMATICAL_GENDER permission.
06-29 01:29:58.896 I/ActivityTaskManager( 1796): START u0 {act=android.intent.action.MAIN cat=[android.intent.category.LAUNCHER] flg=0x10200000 cmp=com.erbete.customer/.MainActivity} with LAUNCH_SINGLE_TOP from uid 2000 (BAL_ALLOW_PERMISSION) result code=0
06-29 01:29:58.919 V/GrammaticalInflectionUtils( 1796): AttributionSource: android.content.AttributionSource@798116f2 does not have READ_SYSTEM_GRAMMATICAL_GENDER permission.
06-29 01:29:58.936 I/AndroidRuntime(14778): VM exiting with result code 0.
06-29 01:29:59.022 D/os.permission.PermissionInfo( 1796): checkPermission 10196:android.permission.INTERACT_ACROSS_USERS:true
06-29 01:29:59.022 I/os.permission( 1796): Grant permission: android.permission.INTERACT_ACROSS_USERS to uid: 10196
06-29 01:29:59.028 D/os.permission.PermissionInfo( 1796): checkPermission 10196:android.permission.MANAGE_ACTIVITY_TASKS:true
06-29 01:29:59.028 I/os.permission( 1796): Grant permission: android.permission.MANAGE_ACTIVITY_TASKS to uid: 10196
06-29 01:29:59.039 D/DebugTheme.onThemeUpdated( 8789): reload start !TranResourcesUtils.isRunningOnSystemServer()=true currentForegroundUser=0
06-29 01:29:59.361 I/IslandManager( 2377): checkIslandPermission result true granted 1
06-29 01:29:59.375 W/on.tranradionet( 6708): Reducing the number of considered missed Gc histogram windows from 623 to 100
06-29 01:29:59.935 V/WifiService( 1796): Clearing REDACT_FOR_ACCESS_FINE_LOCATION for com.android.phone(uid=1001)
06-29 01:29:59.939 V/WifiService( 1796): Clearing REDACT_FOR_ACCESS_FINE_LOCATION for android(uid=1000)
06-29 01:29:59.943 V/WifiPermissionsUtil( 1796): checkCallersLocationPermission(com.google.android.gms): ok because uid 10113 has app-op android:fine_location
06-29 01:29:59.943 V/WifiService( 1796): Clearing REDACT_FOR_ACCESS_FINE_LOCATION for com.google.android.gms(uid=10113)
06-29 01:29:59.953 V/WifiService( 1796): Clearing REDACT_FOR_ACCESS_FINE_LOCATION for android(uid=1000)
06-29 01:30:00.268 W/TrancareCore( 1796): checkPermission failed! uid = 10502
06-29 01:30:00.418 D/FlutterJNI( 8789): Beginning load of flutter...
06-29 01:30:00.480 D/nativeloader( 8789): Load /data/app/~~wYIKaEGsmpynXgklEJswEQ==/com.erbete.customer-5e8kPAckZ6hrtvhMfvKaMg==/base.apk!/lib/arm64-v8a/libflutter.so using class loader ns clns-7 (caller=/data/app/~~wYIKaEGsmpynXgklEJswEQ==/com.erbete.customer-5e8kPAckZ6hrtvhMfvKaMg==/base.apk!classes22.dex): ok
06-29 01:30:00.481 D/FlutterJNI( 8789): flutter (null) was loaded normally!
06-29 01:30:00.563 I/IslandManager( 2377): checkIslandPermission result true granted 1
06-29 01:30:00.610 I/flutter ( 8789): [IMPORTANT:flutter/shell/platform/android/android_context_vk_impeller.cc(62)] Using the Impeller rendering backend (Vulkan).
06-29 01:30:00.719 I/flutter ( 8789): The Dart VM service is listening on http://127.0.0.1:38369/omb0fe-vXEM=/
06-29 01:30:01.330 D/FlutterGeolocator( 8789): Attaching Geolocator to activity
06-29 01:30:01.347 D/nativeloader( 8789): Load /data/app/~~wYIKaEGsmpynXgklEJswEQ==/com.erbete.customer-5e8kPAckZ6hrtvhMfvKaMg==/base.apk!/lib/arm64-v8a/libdartjni.so using class loader ns clns-7 (caller=/data/app/~~wYIKaEGsmpynXgklEJswEQ==/com.erbete.customer-5e8kPAckZ6hrtvhMfvKaMg==/base.apk!classes11.dex): ok
06-29 01:30:01.404 W/libc    ( 8789): Access denied finding property "ro.vendor.tgpa_resolution_tuner"
06-29 01:30:01.404 I/SurfaceFlinger( 1032): onHandleDestroyed: name=Surface(name=965556 InputMethod)/@0xc15efa9 - animation-leash of insets_animation#20608, layerId=20608, parentId=0
06-29 01:30:01.404 D/SurfaceFlinger( 1032): [SF client] NEW(0xb40000740e83b4d0) for (8789:com.erbete.customer)
06-29 01:30:01.411 W/system_server( 1796): ApkAssets: Deleting an ApkAssets object '<empty> and /data/app/~~rlDflszzkoZP8d8Z6wQ9uA==/com.google.android.gms-WQxSJrZS9GfZhXRT9-sjXA==/split_maps_core_dynamite_ondemand.apk' with 1 weak references
06-29 01:30:01.431 I/erbete.customer( 8789): hiddenapi: Accessing hidden method Landroid/view/accessibility/AccessibilityNodeInfo;->getSourceNodeId()J (runtime_flags=0, domain=platform, api=unsupported,test-api) from Lio/flutter/view/AccessibilityViewEmbedder$ReflectionAccessors; (domain=app, TargetSdkVersion=36) using reflection: allowed
06-29 01:30:01.431 I/erbete.customer( 8789): hiddenapi: Accessing hidden method Landroid/view/accessibility/AccessibilityRecord;->getSourceNodeId()J (runtime_flags=0, domain=platform, api=unsupported) from Lio/flutter/view/AccessibilityViewEmbedder$ReflectionAccessors; (domain=app, TargetSdkVersion=36) using reflection: allowed
06-29 01:30:01.431 I/erbete.customer( 8789): hiddenapi: Accessing hidden field Landroid/view/accessibility/AccessibilityNodeInfo;->mChildNodeIds:Landroid/util/LongArray; (runtime_flags=0, domain=platform, api=unsupported) from Lio/flutter/view/AccessibilityViewEmbedder$ReflectionAccessors; (domain=app, TargetSdkVersion=36) using reflection: allowed
06-29 01:30:01.431 I/erbete.customer( 8789): hiddenapi: Accessing hidden method Landroid/util/LongArray;->get(I)J (runtime_flags=0, domain=platform, api=unsupported) from Lio/flutter/view/AccessibilityViewEmbedder$ReflectionAccessors; (domain=app, TargetSdkVersion=36) using reflection: allowed
06-29 01:30:01.560 W/TelephonyPermissions( 2634): reportAccessDeniedToReadIdentifiers:com.transsion.XOSLauncher:getImeiForSlot:1
06-29 01:30:01.569 W/TelephonyPermissions( 2634): reportAccessDeniedToReadIdentifiers:com.transsion.XOSLauncher:getImeiForSlot:1
06-29 01:30:01.662 W/TelephonyPermissions( 2634): reportAccessDeniedToReadIdentifiers:com.transsion.XOSLauncher:getImeiForSlot:1
06-29 01:30:01.665 W/TelephonyPermissions( 2634): reportAccessDeniedToReadIdentifiers:com.transsion.XOSLauncher:getImeiForSlot:1
06-29 01:30:01.708 E/gralloc4( 8789): ERROR: Format allocation info not found for format: 38
06-29 01:30:01.708 E/gralloc4( 8789): ERROR: Format allocation info not found for format: 0
06-29 01:30:01.711 E/gralloc4(  936): ERROR: Format allocation info not found for format: 38
06-29 01:30:01.711 E/gralloc4(  936): ERROR: Format allocation info not found for format: 0
06-29 01:30:01.711 E/gralloc4(  936): allocate, buffer allocation failed with 0
06-29 01:30:01.711 E/gralloc4( 8789): ERROR: Format allocation info not found for format: 3b
06-29 01:30:01.711 E/gralloc4( 8789): ERROR: Format allocation info not found for format: 0
06-29 01:30:01.711 E/gralloc4(  936): ERROR: Format allocation info not found for format: 3b
06-29 01:30:01.711 E/gralloc4(  936): ERROR: Format allocation info not found for format: 0
06-29 01:30:01.711 E/gralloc4(  936): allocate, buffer allocation failed with 0
06-29 01:30:01.712 E/gralloc4( 8789): ERROR: Format allocation info not found for format: 38
06-29 01:30:01.712 E/gralloc4( 8789): ERROR: Format allocation info not found for format: 0
06-29 01:30:01.712 E/gralloc4(  936): ERROR: Format allocation info not found for format: 38
06-29 01:30:01.712 E/gralloc4(  936): ERROR: Format allocation info not found for format: 0
06-29 01:30:01.712 E/gralloc4(  936): allocate, buffer allocation failed with 0
06-29 01:30:01.712 E/gralloc4( 8789): ERROR: Format allocation info not found for format: 3b
06-29 01:30:01.712 E/gralloc4( 8789): ERROR: Format allocation info not found for format: 0
06-29 01:30:01.712 E/gralloc4(  936): ERROR: Format allocation info not found for format: 3b
06-29 01:30:01.712 E/gralloc4(  936): ERROR: Format allocation info not found for format: 0
06-29 01:30:01.712 E/gralloc4(  936): allocate, buffer allocation failed with 0
06-29 01:30:01.761 D/FlutterGeolocator( 8789): Creating service.
06-29 01:30:01.761 D/FlutterGeolocator( 8789): Binding to location service.
06-29 01:30:01.763 D/FlutterLocationService( 8789): Creating service.
06-29 01:30:01.767 D/FlutterLocationService( 8789): Binding to location service.
06-29 01:30:01.790 D/FlutterGeolocator( 8789): Geolocator foreground service connected
06-29 01:30:01.791 D/FlutterGeolocator( 8789): Initializing Geolocator services
06-29 01:30:01.791 D/FlutterGeolocator( 8789): Flutter engine connected. Connected engine count 1
06-29 01:30:01.791 D/LocationPlugin( 8789): Service connected: ComponentInfo{com.erbete.customer/com.lyokone.location.FlutterLocationService}
06-29 01:30:02.623 V/WifiPermissionsUtil( 1796): checkCallersLocationPermission(com.transsion.trancare): uid 10155 doesn't have permission android.permission.ACCESS_FINE_LOCATION
06-29 01:30:02.623 V/WifiPermissionsUtil( 1796): enforceCanAccessScanResults(pkg=com.transsion.trancare, uid=10155): canCallingUidAccessLocation=false, canAppPackageUseLocation=false
06-29 01:30:02.623 V/WifiService( 1796): Keeping REDACT_FOR_ACCESS_FINE_LOCATION:java.lang.SecurityException: UID 10155 has no location permission
06-29 01:30:02.626 V/WifiPermissionsUtil( 1796): checkCallersLocationPermission(com.transsion.trancare): uid 10155 doesn't have permission android.permission.ACCESS_FINE_LOCATION
06-29 01:30:02.626 V/WifiPermissionsUtil( 1796): enforceCanAccessScanResults(pkg=com.transsion.trancare, uid=10155): canCallingUidAccessLocation=false, canAppPackageUseLocation=false
06-29 01:30:02.626 V/WifiService( 1796): Keeping REDACT_FOR_ACCESS_FINE_LOCATION:java.lang.SecurityException: UID 10155 has no location permission
06-29 01:30:02.628 V/WifiPermissionsUtil( 1796): checkCallersLocationPermission(com.transsion.trancare): uid 10155 doesn't have permission android.permission.ACCESS_FINE_LOCATION
06-29 01:30:02.628 V/WifiPermissionsUtil( 1796): enforceCanAccessScanResults(pkg=com.transsion.trancare, uid=10155): canCallingUidAccessLocation=false, canAppPackageUseLocation=false
06-29 01:30:02.628 V/WifiService( 1796): Keeping REDACT_FOR_ACCESS_FINE_LOCATION:java.lang.SecurityException: UID 10155 has no location permission
06-29 01:30:02.773 D/mol_MolService.run(L:134)( 4428): ----MolService focused pkg:com.erbete.customer, cmp:com.erbete.customer.MainActivity, curType:SCENE_UNKOWN, molAlive:true, asAlive:false, asCrashed:false, imeVis:false, this:com.transsion.mol.service.MolService@5a1db7b
06-29 01:30:02.950 V/WifiService( 1796): Clearing REDACT_FOR_ACCESS_FINE_LOCATION for com.android.phone(uid=1001)
06-29 01:30:02.957 V/WifiService( 1796): Clearing REDACT_FOR_ACCESS_FINE_LOCATION for android(uid=1000)
06-29 01:30:03.236 W/erbete.customer( 8789): Loading /data/misc/apexdata/com.android.art/dalvik-cache/arm64/system@framework@com.android.location.provider.jar@classes.odex non-executable as it requires an image which we failed to load
06-29 01:30:03.241 D/nativeloader( 8789): Configuring clns-8 for other apk /system/framework/com.android.location.provider.jar. target_sdk_version=37, uses_libraries=ALL, library_path=/data/app/~~rlDflszzkoZP8d8Z6wQ9uA==/com.google.android.gms-WQxSJrZS9GfZhXRT9-sjXA==/lib/arm64:/data/app/~~rlDflszzkoZP8d8Z6wQ9uA==/com.google.android.gms-WQxSJrZS9GfZhXRT9-sjXA==/base.apk!/lib/arm64-v8a, permitted_path=/data:/mnt/expand:/data/user/0/com.google.android.gms
06-29 01:30:03.283 I/TranSuccCrashMgr( 1796): Post key event: type=0, event=wm_activity_launch_time0,com.erbete.customer/.MainActivity,4395, ext=null
06-29 01:30:03.295 I/StatusBarNetworkRateView( 2377): wifi is default. hide second network rate view. StatusBarNetworkRateView subId=2, isFirstSimCard=false, mLocation=QS_NEW NetworkRateState=NetworkRateState{visible=true, activeMobileDataSubId=2, totalRate=4.82, netWorkState=1, isAirplane=false, netRateStateBySettingGlobal=1, networkRate='4,82', networkRateUnit='KB/S'}
06-29 01:30:03.387 W/AudioALSACaptureDataProviderNormal(  927): readThread, latency_in_s,0.000000,0.023369,0.000034, totalTime 0.023404 > logTimeout 0.022000 TIMEOUT!!
06-29 01:30:03.404 E/ApplicationHelper( 1796): Fail to get PackageManager
06-29 01:30:04.364 I/libPowerHal(  963): [PD] fpsgo update cmd:1404500 param:0
06-29 01:30:05.961 V/WifiService( 1796): Clearing REDACT_FOR_ACCESS_FINE_LOCATION for android(uid=1000)
06-29 01:30:05.969 V/WifiService( 1796): Clearing REDACT_FOR_ACCESS_FINE_LOCATION for com.android.phone(uid=1001)
06-29 01:30:07.559 V/WifiService( 1796): Clearing REDACT_FOR_ACCESS_FINE_LOCATION for android(uid=1000)
06-29 01:30:08.299 I/StatusBarNetworkRateView( 2377): wifi is default. hide second network rate view. StatusBarNetworkRateView subId=2, isFirstSimCard=false, mLocation=QS_NEW NetworkRateState=NetworkRateState{visible=true, activeMobileDataSubId=2, totalRate=8.29, netWorkState=1, isAirplane=false, netRateStateBySettingGlobal=1, networkRate='8,29', networkRateUnit='KB/S'}
06-29 01:30:08.968 V/WifiService( 1796): Clearing REDACT_FOR_ACCESS_FINE_LOCATION for android(uid=1000)
06-29 01:30:09.003 V/WifiService( 1796): Clearing REDACT_FOR_ACCESS_FINE_LOCATION for com.android.phone(uid=1001)
06-29 01:30:09.582 E/WifiStat:NetworkProbe( 1796): java.net.SocketTimeoutException: failed to connect to connectivitycheck.gstatic.com/2404:6800:4003:c05::5e (port 80) from /2402:8780:1040:bd0:3bf5:10e1:c9dc:4741 (port 48038) after 1000ms
06-29 01:30:09.582 E/WifiStat:NetworkProbe( 1796): 	at com.android.okhttp.internal.http.StreamAllocation.findConnection(StreamAllocation.java:186)
06-29 01:30:09.582 E/WifiStat:NetworkProbe( 1796): 	at com.android.okhttp.internal.http.StreamAllocation.findHealthyConnection(StreamAllocation.java:128)
06-29 01:30:09.582 E/WifiStat:NetworkProbe( 1796): 	at com.android.okhttp.internal.http.StreamAllocation.newStream(StreamAllocation.java:97)
06-29 01:30:11.981 V/WifiService( 1796): Clearing REDACT_FOR_ACCESS_FINE_LOCATION for android(uid=1000)
06-29 01:30:12.029 V/WifiService( 1796): Clearing REDACT_FOR_ACCESS_FINE_LOCATION for com.android.phone(uid=1001)
06-29 01:30:12.793 D/mol_MolService.run(L:134)( 4428): ----MolService focused pkg:com.erbete.customer, cmp:com.erbete.customer.MainActivity, curType:SCENE_UNKOWN, molAlive:true, asAlive:false, asCrashed:false, imeVis:false, this:com.transsion.mol.service.MolService@5a1db7b
06-29 01:30:13.303 I/StatusBarNetworkRateView( 2377): wifi is default. hide second network rate view. StatusBarNetworkRateView subId=2, isFirstSimCard=false, mLocation=QS_NEW NetworkRateState=NetworkRateState{visible=true, activeMobileDataSubId=2, totalRate=0.0, netWorkState=1, isAirplane=false, netRateStateBySettingGlobal=1, networkRate='0,00', networkRateUnit='KB/S'}
06-29 01:30:14.992 V/WifiService( 1796): Clearing REDACT_FOR_ACCESS_FINE_LOCATION for android(uid=1000)
06-29 01:30:18.002 V/WifiService( 1796): Clearing REDACT_FOR_ACCESS_FINE_LOCATION for android(uid=1000)
06-29 01:30:18.089 V/WifiService( 1796): Clearing REDACT_FOR_ACCESS_FINE_LOCATION for com.android.phone(uid=1001)
06-29 01:30:18.305 I/StatusBarNetworkRateView( 2377): wifi is default. hide second network rate view. StatusBarNetworkRateView subId=2, isFirstSimCard=false, mLocation=QS_NEW NetworkRateState=NetworkRateState{visible=true, activeMobileDataSubId=2, totalRate=0.0, netWorkState=1, isAirplane=false, netRateStateBySettingGlobal=1, networkRate='0,00', networkRateUnit='KB/S'}
06-29 01:30:21.010 V/WifiService( 1796): Clearing REDACT_FOR_ACCESS_FINE_LOCATION for android(uid=1000)
06-29 01:30:22.816 D/mol_MolService.run(L:134)( 4428): ----MolService focused pkg:com.erbete.customer, cmp:com.erbete.customer.MainActivity, curType:SCENE_UNKOWN, molAlive:true, asAlive:false, asCrashed:false, imeVis:false, this:com.transsion.mol.service.MolService@5a1db7b
06-29 01:30:23.309 I/StatusBarNetworkRateView( 2377): wifi is default. hide second network rate view. StatusBarNetworkRateView subId=2, isFirstSimCard=false, mLocation=QS_NEW NetworkRateState=NetworkRateState{visible=true, activeMobileDataSubId=2, totalRate=0.0, netWorkState=1, isAirplane=false, netRateStateBySettingGlobal=1, networkRate='0,00', networkRateUnit='KB/S'}
06-29 01:30:24.020 V/WifiService( 1796): Clearing REDACT_FOR_ACCESS_FINE_LOCATION for android(uid=1000)
06-29 01:30:24.136 V/WifiService( 1796): Clearing REDACT_FOR_ACCESS_FINE_LOCATION for com.android.phone(uid=1001)
06-29 01:30:27.032 V/WifiService( 1796): Clearing REDACT_FOR_ACCESS_FINE_LOCATION for android(uid=1000)
06-29 01:30:28.311 I/StatusBarNetworkRateView( 2377): wifi is default. hide second network rate view. StatusBarNetworkRateView subId=2, isFirstSimCard=false, mLocation=QS_NEW NetworkRateState=NetworkRateState{visible=true, activeMobileDataSubId=2, totalRate=0.0, netWorkState=1, isAirplane=false, netRateStateBySettingGlobal=1, networkRate='0,00', networkRateUnit='KB/S'}
06-29 01:30:29.811 D/AndroidRuntime(14951): >>>>>> START com.android.internal.os.RuntimeInit uid 2000 <<<<<<
06-29 01:30:29.818 I/AndroidRuntime(14951): Using default boot image
06-29 01:30:29.818 I/AndroidRuntime(14951): Leaving lock profiling enabled
06-29 01:30:29.961 D/AndroidRuntime(14951): Calling main entry com.android.commands.uiautomator.Launcher
06-29 01:30:30.042 V/WifiService( 1796): Clearing REDACT_FOR_ACCESS_FINE_LOCATION for android(uid=1000)
06-29 01:30:31.159 D/AndroidRuntime(14951): Shutting down VM
```

## Crash / Fatal Quick Check
```text
06-29 01:29:56.364 D/RilUtility(  963): notify_rild_crash_pid_set certPid:-1, crash:1624, scn:0x0
06-29 01:29:56.373 D/aegean_TranRecentTasksProxy( 1796): FW_getTasks=3
06-29 01:29:56.384 I/TranSuccCrashMgr( 1796): Post key event: type=0, event=wm_resume_activity0,0,com.transsion.XOSLauncher/com.android.launcher3.uioverrides.QuickstepLauncher, ext=null
06-29 01:29:56.502 D/LauncherAdsMgr( 2369): handleAZShows ->[taNativeInfo : AdsDTO{impBeanRequest=AdxImpBean{, pmid='250414mZksK5T6', adt=6, mAdCount=10, offlineAdEnable=false, cacheAdCount=0, mTriggerNetState=0}, adCreativeId=516640, fill_ts=1782668425321, uuid='7b8078cb8a1146639dd477095135584d', deepLinkUrlFirst='null', actualShowTime=null, actualShowRate=0, showArea='0*0', isEffectiveShow=null, showReportTimeType=null, calledUrlType=3, pslinkAppName='null', packageName='', clickid='null', impressionUrl='null', clickUrlTs=0, adSeatType='icon', viewJsonData=com.cloud.hisavana.sdk.ad.data.response.ViewJson@ed1de3f, showDate='1782666000000', source=2, showNum=0, offlineAdStartDateLong=null, offlineAdLaunchDateStr='null', offlineAdExpireTime=null, viewJson={"offline":{"maxShowPPPD":5}}, adRequestVer=0, videoWidth=0, videoHeight=0}, taNativeInfo : AdsDTO{impBeanRequest=AdxImpBean{, pmid='250414mZksK5T6', adt=6, mAdCount=10, offlineAdEnable=false, cacheAdCount=0, mTriggerNetState=0}, adCreativeId=804297, fill_ts=1782668425322, uuid='27388dcfd0594237966422acbcaf27db', deepLinkUrlFirst='null', actualShowTime=null, actualShowRate=0, showArea='0*0', isEffectiveShow=null, showReportTimeType=null, calledUrlType=3, pslinkAppName='null', packageName='', clickid='null', impressionUrl='null', clickUrlTs=0, adSeatType='icon', viewJsonData=com.cloud.hisavana.sdk.ad.data.response.ViewJson@4cd030c, showDate='1782666000000', source=2, showNum=0, offlineAdStartDateLong=null, offlineAdLaunchDateStr='null', offlineAdExpireTime=null, viewJson={"offline":{"maxShowPPPD":5}}, adRequestVer=0, videoWidth=0, videoHeight=0}]
06-29 01:29:56.699 D/DebugTheme.onThemeUpdated(14738): reload start !TranResourcesUtils.isRunningOnSystemServer()=true currentForegroundUser=0
06-29 01:29:56.869 D/NotificationUtil(14738): data = CriticalCrashModel{, appPackageName='com.erbete.customer', appVersionName='1.0.0', crashSummary='r=USER_REQUESTED sr=FORCE_STOP im=FOREGROUND d=[FORCE STOP] stop com.erbete.customer due to from pid 14728', timeStamp='1782671396353', firstTimeStamp='1782671396353', appInstaller='unk', appInstallTime='1782662581375', adjInfo='null', exceptionType='exit', extraInformation='null', reservedOne='null', reservedTwo='null', crashFrequency=1, crashAverageTime=0, causeByApp=1} adj = 0
06-29 01:29:56.885 D/NotificationUtil(14738): data = CriticalCrashModel{, appPackageName='com.erbete.customer', appVersionName='1.0.0', crashSummary='r=UNKNOWN sr=UNKNOWN im=FOREGROUND d=proc died without state saved', timeStamp='1782671396366', firstTimeStamp='1782664074898', appInstaller='unk', appInstallTime='1782662581375', adjInfo='null', exceptionType='exit', extraInformation='null', reservedOne='null', reservedTwo='null', crashFrequency=3, crashAverageTime=0, causeByApp=1} adj = -1
06-29 01:29:58.679 D/AndroidRuntime(14778): >>>>>> START com.android.internal.os.RuntimeInit uid 2000 <<<<<<
06-29 01:29:58.685 I/AndroidRuntime(14778): Using default boot image
06-29 01:29:58.685 I/AndroidRuntime(14778): Leaving lock profiling enabled
06-29 01:29:58.824 D/AndroidRuntime(14778): Calling main entry com.android.commands.monkey.Monkey
06-29 01:29:58.936 I/AndroidRuntime(14778): VM exiting with result code 0.
06-29 01:29:59.039 D/DebugTheme.onThemeUpdated( 8789): reload start !TranResourcesUtils.isRunningOnSystemServer()=true currentForegroundUser=0
06-29 01:29:59.375 W/on.tranradionet( 6708): Reducing the number of considered missed Gc histogram windows from 623 to 100
06-29 01:30:02.623 V/WifiPermissionsUtil( 1796): enforceCanAccessScanResults(pkg=com.transsion.trancare, uid=10155): canCallingUidAccessLocation=false, canAppPackageUseLocation=false
06-29 01:30:02.626 V/WifiPermissionsUtil( 1796): enforceCanAccessScanResults(pkg=com.transsion.trancare, uid=10155): canCallingUidAccessLocation=false, canAppPackageUseLocation=false
06-29 01:30:02.628 V/WifiPermissionsUtil( 1796): enforceCanAccessScanResults(pkg=com.transsion.trancare, uid=10155): canCallingUidAccessLocation=false, canAppPackageUseLocation=false
06-29 01:30:02.773 D/mol_MolService.run(L:134)( 4428): ----MolService focused pkg:com.erbete.customer, cmp:com.erbete.customer.MainActivity, curType:SCENE_UNKOWN, molAlive:true, asAlive:false, asCrashed:false, imeVis:false, this:com.transsion.mol.service.MolService@5a1db7b
06-29 01:30:03.283 I/TranSuccCrashMgr( 1796): Post key event: type=0, event=wm_activity_launch_time0,com.erbete.customer/.MainActivity,4395, ext=null
06-29 01:30:12.793 D/mol_MolService.run(L:134)( 4428): ----MolService focused pkg:com.erbete.customer, cmp:com.erbete.customer.MainActivity, curType:SCENE_UNKOWN, molAlive:true, asAlive:false, asCrashed:false, imeVis:false, this:com.transsion.mol.service.MolService@5a1db7b
06-29 01:30:22.816 D/mol_MolService.run(L:134)( 4428): ----MolService focused pkg:com.erbete.customer, cmp:com.erbete.customer.MainActivity, curType:SCENE_UNKOWN, molAlive:true, asAlive:false, asCrashed:false, imeVis:false, this:com.transsion.mol.service.MolService@5a1db7b
06-29 01:30:29.811 D/AndroidRuntime(14951): >>>>>> START com.android.internal.os.RuntimeInit uid 2000 <<<<<<
06-29 01:30:29.818 I/AndroidRuntime(14951): Using default boot image
06-29 01:30:29.818 I/AndroidRuntime(14951): Leaving lock profiling enabled
06-29 01:30:29.961 D/AndroidRuntime(14951): Calling main entry com.android.commands.uiautomator.Launcher
06-29 01:30:31.159 D/AndroidRuntime(14951): Shutting down VM
```

## Final Status
STATUS: CUSTOMER_FREEZE_LOGCAT_DIAGNOSIS_REPORT_CREATED