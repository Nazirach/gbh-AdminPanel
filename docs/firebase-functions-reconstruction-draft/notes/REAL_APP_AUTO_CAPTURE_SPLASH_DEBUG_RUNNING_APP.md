# AUTO CAPTURE SPLASH DEBUG RUNNING APP

Generated: 06/29/2026 02:26:38

Mode: read-only log capture. No code patch. No Firebase write.

## Splash Debug Markers
```text
```

## Firebase / Flutter Important Log
```text
06-29 02:26:19.334 I/flutter (18599): [IMPORTANT:flutter/shell/platform/android/android_context_vk_impeller.cc(62)] Using the Impeller rendering backend (Vulkan).
06-29 02:26:19.435 I/flutter (18599): The Dart VM service is listening on http://127.0.0.1:44047/WDqxrJ2kUwQ=/
06-29 02:26:20.048 D/nativeloader(18599): Load /data/app/~~7hgp1tH45397Ki5Ud354IQ==/com.erbete.customer-FHlc-57zHsCKQE3hTBYqkQ==/base.apk!/lib/arm64-v8a/libdartjni.so using class loader ns clns-7 (caller=/data/app/~~7hgp1tH45397Ki5Ud354IQ==/com.erbete.customer-FHlc-57zHsCKQE3hTBYqkQ==/base.apk!classes11.dex): ok
06-29 02:26:24.775 D/FirebaseAuth(18599): Notifying id token listeners about a sign-out event.
06-29 02:26:24.776 D/FirebaseAuth(18599): Notifying auth state listeners about a sign-out event.
```

## Current Foreground
```text
  * Task{5d58b8c #47886 type=standard A=10502:com.erbete.customer U=0 visible=true visibleRequested=true mode=fullscreen translucent=false sz=1}
    topResumedActivity=ActivityRecord{77d5ede u0 com.erbete.customer/.MainActivity t47886}
    * Hist  #0: ActivityRecord{77d5ede u0 com.erbete.customer/.MainActivity t47886}
      packageName=com.erbete.customer processName=com.erbete.customer
      app=ProcessRecord{ad57153 18599:com.erbete.customer/u0a502}
      Intent { act=android.intent.action.MAIN cat=[android.intent.category.LAUNCHER] flg=0x10200000 cmp=com.erbete.customer/.MainActivity }
      rootOfTask=true task=Task{5d58b8c #47886 type=standard A=10502:com.erbete.customer}
      taskAffinity=10502:com.erbete.customer
      mActivityComponent=com.erbete.customer/.MainActivity
      baseDir=/data/app/~~7hgp1tH45397Ki5Ud354IQ==/com.erbete.customer-FHlc-57zHsCKQE3hTBYqkQ==/base.apk
      dataDir=/data/user/0/com.erbete.customer
      taskDescription: label="" icon=null iconResource=com.erbete.customer/0 iconFilename=null primaryColor=ff6750a4
      windows=[Window{413874c u0 com.erbete.customer/com.erbete.customer.MainActivity}]
      connections={ConnectionRecord{3e3cfa2 u0 CR com.erbete.customer com.erbete.customer 10502 ST:18564ms com.erbete.customer/com.lyokone.location.FlutterLocationService:@d04476d flags=0x1}}
    * Task{bdc1f3b #5 type=home I=com.transsion.XOSLauncher/com.android.launcher3.uioverrides.QuickstepLauncher U=0 rootTaskId=1 visible=false visibleRequested=false mode=fullscreen translucent=true sz=1}
      mLastPausedActivity: ActivityRecord{4f4f328 u0 com.transsion.XOSLauncher/com.android.launcher3.uioverrides.QuickstepLauncher t5}
      * Hist  #0: ActivityRecord{4f4f328 u0 com.transsion.XOSLauncher/com.android.launcher3.uioverrides.QuickstepLauncher t5}
        packageName=com.transsion.XOSLauncher processName=com.transsion.XOSLauncher
        app=ProcessRecord{f1811f6 2369:com.transsion.XOSLauncher/u0a196}
        Intent { act=android.intent.action.MAIN cat=[android.intent.category.HOME] flg=0x10000100 cmp=com.transsion.XOSLauncher/com.android.launcher3.uioverrides.QuickstepLauncher (has extras) }
        rootOfTask=true task=Task{bdc1f3b #5 type=home I=com.transsion.XOSLauncher/com.android.launcher3.uioverrides.QuickstepLauncher}
        mActivityComponent=com.transsion.XOSLauncher/com.android.launcher3.uioverrides.QuickstepLauncher
        dataDir=/data/user/0/com.transsion.XOSLauncher
        windows=[Window{962fd0a u0 com.transsion.XOSLauncher/com.android.launcher3.uioverrides.QuickstepLauncher}, Window{76bef52 u0 ZeroScreen}]
    mLastPausedActivity: ActivityRecord{f3ecc18 u0 com.deepseek.chat/.MainActivity t47871}
    * Hist  #0: ActivityRecord{f3ecc18 u0 com.deepseek.chat/.MainActivity t47871}
      launchedFromUid=10196 launchedFromPackage=com.transsion.XOSLauncher launchedFromFeature=null userId=0
      Intent { act=android.intent.action.MAIN cat=[android.intent.category.LAUNCHER] flg=0x10200000 pkg=com.deepseek.chat cmp=com.deepseek.chat/.MainActivity bnds=[540,288][795,588] (has extras) }
      mActivityComponent=com.deepseek.chat/.MainActivity
      windows=[Window{3459610 u0 com.deepseek.chat/com.deepseek.chat.MainActivity}]
    Resumed: ActivityRecord{77d5ede u0 com.erbete.customer/.MainActivity t47886}
  ResumedActivity: ActivityRecord{77d5ede u0 com.erbete.customer/.MainActivity t47886}
  topDisplayFocusedRootTask=Task{5d58b8c #47886 type=standard A=10502:com.erbete.customer}
  deepestLastOrientationSource=ActivityRecord{77d5ede u0 com.erbete.customer/.MainActivity t47886}
  mCurrentFocus=Window{413874c u0 com.erbete.customer/com.erbete.customer.MainActivity}
  mFocusedApp=ActivityRecord{77d5ede u0 com.erbete.customer/.MainActivity t47886}
      mPreferredTopFocusableRootTask=Task{5d58b8c #47886 type=standard A=10502:com.erbete.customer}
      mLastFocusedRootTask=Task{5d58b8c #47886 type=standard A=10502:com.erbete.customer}
      * Task{5d58b8c #47886 type=standard A=10502:com.erbete.customer U=0 visible=true visibleRequested=true mode=fullscreen translucent=false sz=1}
        * ActivityRecord{77d5ede u0 com.erbete.customer/.MainActivity t47886}
        * Task{bdc1f3b #5 type=home I=com.transsion.XOSLauncher/com.android.launcher3.uioverrides.QuickstepLauncher U=0 rootTaskId=1 visible=false visibleRequested=false mode=fullscreen translucent=true sz=1}
          * ActivityRecord{4f4f328 u0 com.transsion.XOSLauncher/com.android.launcher3.uioverrides.QuickstepLauncher t5}
        * ActivityRecord{f3ecc18 u0 com.deepseek.chat/.MainActivity t47871}
    mFocusedWindow=Window{413874c u0 com.erbete.customer/com.erbete.customer.MainActivity}
    mTopFullscreenOpaqueWindowState=Window{413874c u0 com.erbete.customer/com.erbete.customer.MainActivity}
    mSystemBarColorApps={ActivityRecord{77d5ede u0 com.erbete.customer/.MainActivity t47886}}
    mNavBarColorWindowCandidate=Window{413874c u0 com.erbete.customer/com.erbete.customer.MainActivity}
    mNavBarBackgroundWindowCandidate=Window{413874c u0 com.erbete.customer/com.erbete.customer.MainActivity}
      Window{413874c u0 com.erbete.customer/com.erbete.customer.MainActivity}
        source=ActivityRecord{2e2479f u0 com.erbete.customer/.MainActivity t47844} SCREEN_ORIENTATION_UNSPECIFIED
        source=ActivityRecord{2e2479f u0 com.erbete.customer/.MainActivity t47844} SCREEN_ORIENTATION_UNSPECIFIED
      Window{413874c u0 com.erbete.customer/com.erbete.customer.MainActivity}:
        mControlTarget=Window{413874c u0 com.erbete.customer/com.erbete.customer.MainActivity}
        mControlTarget=Window{413874c u0 com.erbete.customer/com.erbete.customer.MainActivity}
        mControlTarget=Window{413874c u0 com.erbete.customer/com.erbete.customer.MainActivity}
        (fullscreen) Task{5d58b8c #47886 type=standard A=10502:com.erbete.customer}
  VisibleActivityProcess:[ ProcessRecord{ad57153 18599:com.erbete.customer/u0a502}]
```

## Final Status
STATUS: AUTO_SPLASH_DEBUG_CAPTURE_CREATED