# SECTION COUNT RUNTIME LOG

Generated: 06/30/2026 22:28:53
Mode: runtime log capture.

## Filtered Logcat
```text
06-30 22:28:44.652 E/FeatureFlagsImplExport(31887): android.os.flagging.AconfigStorageReadException: ERROR_PACKAGE_NOT_FOUND: package com.android.libcore cannot be found on the device
06-30 22:28:44.805 I/TouchUtility(  970): notifyAppState error = NULL
06-30 22:28:44.806 I/tranpm/Preloader( 1698): preload error: preloadList is null.
06-30 22:28:44.807 D/NotificationUtil(31624): data = CriticalCrashModel{, appPackageName='com.erbete.customer', appVersionName='1.0.0', crashSummary='r=USER_REQUESTED sr=FORCE_STOP im=FOREGROUND d=[FORCE STOP] stop com.erbete.customer due to from pid 31951', timeStamp='1782833324775', firstTimeStamp='1782833324775', appInstaller='unk', appInstallTime='1782828076759', adjInfo='null', exceptionType='exit', extraInformation='null', reservedOne='null', reservedTwo='null', crashFrequency=1, crashAverageTime=0, causeByApp=1} adj = 0
06-30 22:28:44.808 W/System.err( 1698): java.io.FileNotFoundException: /proc/report_rate_switch: open failed: ENOENT (No such file or directory)
06-30 22:28:44.808 W/System.err( 1698): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
06-30 22:28:44.830 D/TranDisplayJamMonitor( 1698): checkExceptionWindowResult = 1024
06-30 22:28:44.881 D/NotificationUtil(31624): data = CriticalCrashModel{, appPackageName='com.erbete.customer', appVersionName='1.0.0', crashSummary='r=UNKNOWN sr=UNKNOWN im=FOREGROUND d=proc died without state saved', timeStamp='1782833324788', firstTimeStamp='1782833305456', appInstaller='unk', appInstallTime='1782828076759', adjInfo='null', exceptionType='exit', extraInformation='null', reservedOne='null', reservedTwo='null', crashFrequency=2, crashAverageTime=0, causeByApp=1} adj = -1
06-30 22:28:44.900 V/WindowManager( 1698):     startWCT=WindowContainerTransaction { changes = {} hops = [] errorCallbackToken=null taskFragmentOrganizer=null mInterrupt=false }
06-30 22:28:44.922 E/JobScheduler.Concurrency( 1698): Error executing JobStatus{7f604 #u0a162/2633 com.gallery20/androidx.work.impl.background.systemjob.SystemJobService u=0 s=10162 TIME=-4h35m57s837ms:none BATNOTLOW STORENOTLOW READY}
06-30 22:28:44.941 E/JobScheduler.Concurrency( 1698): Error executing JobStatus{a773ead #u0a162/2637 com.gallery20/androidx.work.impl.background.systemjob.SystemJobService u=0 s=10162 TIME=-4h30m9s787ms:none BATNOTLOW STORENOTLOW READY}
06-30 22:28:44.942 I/BaseAdsAppMgr( 2371): a onError TaErrorCode{errorCode=4006, errorMessage='no ads available'}, mTaNativeInfoList.size:0
06-30 22:28:44.942 W/BaseAdsAppMgr( 2371): onError isListChanged: false
06-30 22:28:44.959 E/JobScheduler.Concurrency( 1698): Error executing JobStatus{56140a9 androidx.work.systemjobscheduler:u0a121/6191 @androidx.work.systemjobscheduler@com.google.android.calendar/androidx.work.impl.background.systemjob.SystemJobService u=0 s=10121 TIME=-6h20m56s341ms:none NET READY}
06-30 22:28:44.966 E/JobScheduler.Concurrency( 1698): Error executing JobStatus{e231a53 androidx.work.systemjobscheduler:u0a206/1510 @androidx.work.systemjobscheduler@com.talpa.hibrowser/androidx.work.impl.background.systemjob.SystemJobService u=0 s=10206 TIME=-34m7s594ms:none NET READY}
06-30 22:28:44.970 E/JobScheduler.Concurrency( 1698): Error executing JobStatus{361e0f7 #u0a365/-1271122664 com.binance.cloud.tokocrypto/com.google.android.datatransport.runtime.scheduling.jobscheduling.JobInfoSchedulerService u=0 s=10365 TIME=-20m52s346ms:none NET READY}
06-30 22:28:44.993 E/JobScheduler.Concurrency( 1698): Error executing JobStatus{7f604 #u0a162/2633 com.gallery20/androidx.work.impl.background.systemjob.SystemJobService u=0 s=10162 TIME=-4h35m57s909ms:none BATNOTLOW STORENOTLOW READY}
06-30 22:28:44.997 E/JobScheduler.Concurrency( 1698): Error executing JobStatus{a773ead #u0a162/2637 com.gallery20/androidx.work.impl.background.systemjob.SystemJobService u=0 s=10162 TIME=-4h30m9s843ms:none BATNOTLOW STORENOTLOW READY}
06-30 22:28:45.001 E/JobScheduler.Concurrency( 1698): Error executing JobStatus{56140a9 androidx.work.systemjobscheduler:u0a121/6191 @androidx.work.systemjobscheduler@com.google.android.calendar/androidx.work.impl.background.systemjob.SystemJobService u=0 s=10121 TIME=-6h20m56s383ms:none NET READY}
06-30 22:28:45.007 E/JobScheduler.Concurrency( 1698): Error executing JobStatus{e231a53 androidx.work.systemjobscheduler:u0a206/1510 @androidx.work.systemjobscheduler@com.talpa.hibrowser/androidx.work.impl.background.systemjob.SystemJobService u=0 s=10206 TIME=-34m7s635ms:none NET READY}
06-30 22:28:45.013 E/JobScheduler.Concurrency( 1698): Error executing JobStatus{361e0f7 #u0a365/-1271122664 com.binance.cloud.tokocrypto/com.google.android.datatransport.runtime.scheduling.jobscheduling.JobInfoSchedulerService u=0 s=10365 TIME=-20m52s389ms:none NET READY}
06-30 22:28:45.202 W/ActivityManager( 1698): pid 1698 system sent binder code 7 with flags 1 to frozen apps and got error -32
06-30 22:28:45.202 W/WindowManager( 1698): Exception thrown during dispatchAppVisibility Window{ddd9913 u0 com.erbete.customer/com.erbete.customer.MainActivity EXITING}
06-30 22:28:45.202 W/WindowManager( 1698): android.os.DeadObjectException
06-30 22:28:45.206 E/uas-service( 1219): ioclt error: fd=3 cmd=1075336211 ux_data->pid=31210 ux_data->ux_tags=0
06-30 22:28:45.417 E/ActivityTaskManager( 1698): agaresPreload error: activityInfo is null
06-30 22:28:45.425 E/ActivityTaskManager( 1698): AppLaunchTracker getTaskIndex error: task is null.
06-30 22:28:45.438 D/aegean_PivotX+( 1698): applyActivityLaunchStart error={pkg='com.erbete.customer', uid=0, proc=com.erbete.customer, pid=0, type=7, act=com.erbete.customer/.MainActivity, mHome=false, onTop=false, appLaunch=true} lt:7
06-30 22:28:45.514 W/TranInstanceHelper(31420): Failed to instance com.transsion.hubcore.linkplus.implement.app.TranActivityThreadLinkplusImpl, java.lang.ClassNotFoundException: com.transsion.hubcore.linkplus.implement.app.TranActivityThreadLinkplusImpl
06-30 22:28:45.535 V/WindowManager( 1698):     startWCT=WindowContainerTransaction { changes = {} hops = [] errorCallbackToken=null taskFragmentOrganizer=null mInterrupt=false }
06-30 22:28:45.563 W/ActivityManager( 1698): pid 1698 system sent binder code 1 with flags 1 to frozen apps and got error -32
06-30 22:28:45.564 W/DisplayManagerService( 1698): android.os.DeadObjectException
06-30 22:28:45.585 E/JobScheduler.Concurrency( 1698): Error executing JobStatus{7f604 #u0a162/2633 com.gallery20/androidx.work.impl.background.systemjob.SystemJobService u=0 s=10162 TIME=-4h35m58s500ms:none BATNOTLOW STORENOTLOW READY}
06-30 22:28:45.591 E/JobScheduler.Concurrency( 1698): Error executing JobStatus{a773ead #u0a162/2637 com.gallery20/androidx.work.impl.background.systemjob.SystemJobService u=0 s=10162 TIME=-4h30m10s438ms:none BATNOTLOW STORENOTLOW READY}
06-30 22:28:45.596 E/JobScheduler.Concurrency( 1698): Error executing JobStatus{56140a9 androidx.work.systemjobscheduler:u0a121/6191 @androidx.work.systemjobscheduler@com.google.android.calendar/androidx.work.impl.background.systemjob.SystemJobService u=0 s=10121 TIME=-6h20m56s977ms:none NET READY}
06-30 22:28:45.599 E/JobScheduler.Concurrency( 1698): Error executing JobStatus{e231a53 androidx.work.systemjobscheduler:u0a206/1510 @androidx.work.systemjobscheduler@com.talpa.hibrowser/androidx.work.impl.background.systemjob.SystemJobService u=0 s=10206 TIME=-34m8s226ms:none NET READY}
06-30 22:28:45.601 E/JobScheduler.Concurrency( 1698): Error executing JobStatus{361e0f7 #u0a365/-1271122664 com.binance.cloud.tokocrypto/com.google.android.datatransport.runtime.scheduling.jobscheduling.JobInfoSchedulerService u=0 s=10365 TIME=-20m52s977ms:none NET READY}
06-30 22:28:46.681 I/FirebaseApp(31420): Device unlocked: initializing all Firebase APIs for app [DEFAULT]
06-30 22:28:46.706 I/FirebaseInitProvider(31420): FirebaseApp initialization successful
06-30 22:28:46.813 I/TouchUtility(  970): notifyAppState error = NULL
06-30 22:28:46.819 W/System.err( 1698): java.io.FileNotFoundException: /proc/report_rate_switch: open failed: ENOENT (No such file or directory)
06-30 22:28:46.819 W/System.err( 1698): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
06-30 22:28:48.273 D/TranDisplayJamMonitor( 1698): checkExceptionWindowResult = 1040
06-30 22:28:48.306 E/gralloc4(31420): ERROR: Format allocation info not found for format: 38
06-30 22:28:48.306 E/gralloc4(31420): ERROR: Format allocation info not found for format: 0
06-30 22:28:48.306 E/gralloc4(31420): ERROR: Unrecognized and/or unsupported format 0x38 and usage 0xb00
06-30 22:28:48.308 E/gralloc4(  931): ERROR: Format allocation info not found for format: 38
06-30 22:28:48.308 E/gralloc4(  931): ERROR: Format allocation info not found for format: 0
06-30 22:28:48.308 E/gralloc4(  931): ERROR: Unrecognized and/or unsupported format 0x38 and usage 0xb00
06-30 22:28:48.308 E/AHardwareBuffer(31420): GraphicBuffer(w=4, h=4, lc=1) failed (Unknown error -5), handle=0x0
06-30 22:28:48.308 E/gralloc4(31420): ERROR: Format allocation info not found for format: 3b
06-30 22:28:48.308 E/gralloc4(31420): ERROR: Format allocation info not found for format: 0
06-30 22:28:48.308 E/gralloc4(31420): ERROR: Unrecognized and/or unsupported format 0x3b and usage 0xb00
06-30 22:28:48.308 E/gralloc4(  931): ERROR: Format allocation info not found for format: 3b
06-30 22:28:48.308 E/gralloc4(  931): ERROR: Format allocation info not found for format: 0
06-30 22:28:48.308 E/gralloc4(  931): ERROR: Unrecognized and/or unsupported format 0x3b and usage 0xb00
06-30 22:28:48.309 E/AHardwareBuffer(31420): GraphicBuffer(w=4, h=4, lc=1) failed (Unknown error -5), handle=0x0
06-30 22:28:48.309 E/gralloc4(31420): ERROR: Format allocation info not found for format: 38
06-30 22:28:48.309 E/gralloc4(31420): ERROR: Format allocation info not found for format: 0
06-30 22:28:48.309 E/gralloc4(31420): ERROR: Unrecognized and/or unsupported format 0x38 and usage 0xb00
06-30 22:28:48.309 E/gralloc4(  931): ERROR: Format allocation info not found for format: 38
06-30 22:28:48.309 E/gralloc4(  931): ERROR: Format allocation info not found for format: 0
06-30 22:28:48.309 E/gralloc4(  931): ERROR: Unrecognized and/or unsupported format 0x38 and usage 0xb00
06-30 22:28:48.309 E/AHardwareBuffer(31420): GraphicBuffer(w=4, h=4, lc=1) failed (Unknown error -5), handle=0x0
06-30 22:28:48.309 E/gralloc4(31420): ERROR: Format allocation info not found for format: 3b
06-30 22:28:48.309 E/gralloc4(31420): ERROR: Format allocation info not found for format: 0
06-30 22:28:48.309 E/gralloc4(31420): ERROR: Unrecognized and/or unsupported format 0x3b and usage 0xb00
06-30 22:28:48.309 E/gralloc4(  931): ERROR: Format allocation info not found for format: 3b
06-30 22:28:48.309 E/gralloc4(  931): ERROR: Format allocation info not found for format: 0
06-30 22:28:48.309 E/gralloc4(  931): ERROR: Unrecognized and/or unsupported format 0x3b and usage 0xb00
06-30 22:28:48.309 E/AHardwareBuffer(31420): GraphicBuffer(w=4, h=4, lc=1) failed (Unknown error -5), handle=0x0
06-30 22:28:50.045 E/JobScheduler.Concurrency( 1698): Error executing JobStatus{7f604 #u0a162/2633 com.gallery20/androidx.work.impl.background.systemjob.SystemJobService u=0 s=10162 TIME=-4h36m2s960ms:none BATNOTLOW STORENOTLOW READY}
06-30 22:28:50.047 E/GoogleApiManager(31420): java.lang.SecurityException: Unknown calling package name 'com.google.android.gms'.
06-30 22:28:50.047 E/GoogleApiManager(31420): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3251)
06-30 22:28:50.047 E/GoogleApiManager(31420): 	at android.os.Parcel.createException(Parcel.java:3235)
06-30 22:28:50.047 E/GoogleApiManager(31420): 	at android.os.Parcel.readException(Parcel.java:3218)
06-30 22:28:50.047 E/GoogleApiManager(31420): 	at android.os.Parcel.readException(Parcel.java:3160)
06-30 22:28:50.050 W/GoogleApiManager(31420): Not showing notification since connectionResult is not user-facing: ConnectionResult{statusCode=DEVELOPER_ERROR, resolution=null, message=null, clientMethodKey=null}
06-30 22:28:50.058 W/FlagRegistrar(31420): goux: 17: 17: API: Phenotype.API is not available on this device. Connection failed with: ConnectionResult{statusCode=DEVELOPER_ERROR, resolution=null, message=null, clientMethodKey=null}
06-30 22:28:50.058 W/FlagRegistrar(31420): Caused by: bjpk: 17: API: Phenotype.API is not available on this device. Connection failed with: ConnectionResult{statusCode=DEVELOPER_ERROR, resolution=null, message=null, clientMethodKey=null}
06-30 22:28:50.060 E/GoogleApiManager(31420): java.lang.SecurityException: Unknown calling package name 'com.google.android.gms'.
06-30 22:28:50.060 E/GoogleApiManager(31420): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3251)
06-30 22:28:50.060 E/GoogleApiManager(31420): 	at android.os.Parcel.createException(Parcel.java:3235)
06-30 22:28:50.060 E/GoogleApiManager(31420): 	at android.os.Parcel.readException(Parcel.java:3218)
06-30 22:28:50.060 E/GoogleApiManager(31420): 	at android.os.Parcel.readException(Parcel.java:3160)
06-30 22:28:50.062 W/GoogleApiManager(31420): Not showing notification since connectionResult is not user-facing: ConnectionResult{statusCode=DEVELOPER_ERROR, resolution=null, message=null, clientMethodKey=null}
06-30 22:28:50.075 W/FlagStore(31420): java.util.concurrent.ExecutionException: goux: 17: 17: API: Phenotype.API is not available on this device. Connection failed with: ConnectionResult{statusCode=DEVELOPER_ERROR, resolution=null, message=null, clientMethodKey=null}
06-30 22:28:50.075 W/FlagStore(31420): Caused by: goux: 17: 17: API: Phenotype.API is not available on this device. Connection failed with: ConnectionResult{statusCode=DEVELOPER_ERROR, resolution=null, message=null, clientMethodKey=null}
06-30 22:28:50.076 W/FlagStore(31420): Caused by: bjpk: 17: API: Phenotype.API is not available on this device. Connection failed with: ConnectionResult{statusCode=DEVELOPER_ERROR, resolution=null, message=null, clientMethodKey=null}
06-30 22:28:50.079 E/JobScheduler.Concurrency( 1698): Error executing JobStatus{a773ead #u0a162/2637 com.gallery20/androidx.work.impl.background.systemjob.SystemJobService u=0 s=10162 TIME=-4h30m14s926ms:none BATNOTLOW STORENOTLOW READY}
06-30 22:28:50.099 E/JobScheduler.Concurrency( 1698): Error executing JobStatus{56140a9 androidx.work.systemjobscheduler:u0a121/6191 @androidx.work.systemjobscheduler@com.google.android.calendar/androidx.work.impl.background.systemjob.SystemJobService u=0 s=10121 TIME=-6h21m1s480ms:none NET READY}
06-30 22:28:50.112 E/JobScheduler.Concurrency( 1698): Error executing JobStatus{e231a53 androidx.work.systemjobscheduler:u0a206/1510 @androidx.work.systemjobscheduler@com.talpa.hibrowser/androidx.work.impl.background.systemjob.SystemJobService u=0 s=10206 TIME=-34m12s740ms:none NET READY}
06-30 22:28:50.158 E/JobScheduler.Concurrency( 1698): Error executing JobStatus{361e0f7 #u0a365/-1271122664 com.binance.cloud.tokocrypto/com.google.android.datatransport.runtime.scheduling.jobscheduling.JobInfoSchedulerService u=0 s=10365 TIME=-20m57s534ms:none NET READY}
```

## Final Status
STATUS: SECTION_COUNT_RUNTIME_LOG_CAPTURED