# CUSTOMER HOME AFTER SECTIONS ORDER PATCH

Generated: 06/28/2026 21:39:51

Mode: screen verification after Firestore sections.order patch. No order creation. No driver/vendor app.

## Expected

- Home should show Explore Our Services.
- Service cards should now appear because sections_active_ordered_count is 8.

## Files

- XML dump: C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_dump.xml
- Screenshot: C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch.png
- Logcat: C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt

## Important Screen Text

```text

C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_dump.xml:1:<?xml 
version='1.0' encoding='UTF-8' standalone='yes' ?><hierarchy rotation="0"><node index="0" text="" resource-id="" 
class="android.widget.FrameLayout" package="com.erbete.customer" content-desc="" checkable="false" checked="false" 
clickable="false" enabled="true" focusable="false" focused="false" scrollable="false" long-clickable="false" password="false" 
selected="false" bounds="[0,0][1080,2436]"><node index="0" text="" resource-id="" class="android.widget.LinearLayout" 
package="com.erbete.customer" content-desc="" checkable="false" checked="false" clickable="false" enabled="true" focusable="false" 
focused="false" scrollable="false" long-clickable="false" password="false" selected="false" bounds="[0,0][1080,2436]"><node 
index="0" text="" resource-id="android:id/content" class="android.widget.FrameLayout" package="com.erbete.customer" content-desc="" 
checkable="false" checked="false" clickable="false" enabled="true" focusable="false" focused="false" scrollable="false" 
long-clickable="false" password="false" selected="false" bounds="[0,0][1080,2436]"><node index="0" text="" resource-id="" 
class="android.widget.FrameLayout" package="com.erbete.customer" content-desc="" checkable="false" checked="false" 
clickable="false" enabled="true" focusable="false" focused="false" scrollable="false" long-clickable="false" password="false" 
selected="false" bounds="[0,0][1080,2436]"><node index="0" text="" resource-id="" class="android.widget.FrameLayout" 
package="com.erbete.customer" content-desc="" checkable="false" checked="false" clickable="false" enabled="true" focusable="true" 
focused="false" scrollable="false" long-clickable="false" password="false" selected="false" bounds="[0,0][1080,2436]"><node 
index="0" text="" resource-id="" class="android.view.View" package="com.erbete.customer" content-desc="" checkable="false" 
checked="false" clickable="false" enabled="true" focusable="false" focused="false" scrollable="false" long-clickable="false" 
password="false" selected="false" bounds="[0,0][1080,2436]"><node index="0" text="" resource-id="" class="android.view.View" 
package="com.erbete.customer" content-desc="" checkable="false" checked="false" clickable="false" enabled="true" focusable="false" 
focused="false" scrollable="false" long-clickable="false" password="false" selected="false" bounds="[0,0][1080,2436]"><node 
index="0" text="" resource-id="" class="android.view.View" package="com.erbete.customer" content-desc="" checkable="false" 
checked="false" clickable="false" enabled="true" focusable="false" focused="false" scrollable="false" long-clickable="false" 
password="false" selected="false" bounds="[0,0][1080,2316]"><node index="0" text="" resource-id="" class="android.view.View" 
package="com.erbete.customer" content-desc="" checkable="false" checked="false" clickable="false" enabled="true" focusable="false" 
focused="false" scrollable="false" long-clickable="false" password="false" selected="false" bounds="[0,0][1080,2316]"><node 
index="0" text="" resource-id="" class="android.view.View" package="com.erbete.customer" content-desc="" checkable="false" 
checked="false" clickable="false" enabled="true" focusable="false" focused="false" scrollable="false" long-clickable="false" 
password="false" selected="false" bounds="[0,0][1080,276]"><node index="0" text="" resource-id="" class="android.view.View" 
package="com.erbete.customer" content-desc="eMart&#10;All Your Needs in One App!" checkable="false" checked="false" 
clickable="false" enabled="true" focusable="true" focused="false" scrollable="false" long-clickable="false" password="false" 
selected="false" bounds="[60,123][539,261]" /></node><node index="1" text="" resource-id="" class="android.view.View" 
package="com.erbete.customer" content-desc="" checkable="false" checked="false" clickable="false" enabled="true" focusable="false" 
focused="false" scrollable="false" long-clickable="false" password="false" selected="false" bounds="[0,276][1080,471]"><node 
index="0" text="" resource-id="" class="android.view.View" package="com.erbete.customer" content-desc="Explore Our Services" 
checkable="false" checked="false" clickable="false" enabled="true" focusable="true" focused="false" scrollable="false" 
long-clickable="false" password="false" selected="false" bounds="[48,348][613,435]" 
/></node></node></node></node></node></node></node></node></node><node index="1" text="" 
resource-id="android:id/navigationBarBackground" class="android.view.View" package="com.erbete.customer" content-desc="" 
checkable="false" checked="false" clickable="false" enabled="true" focusable="false" focused="false" scrollable="false" 
long-clickable="false" password="false" selected="false" bounds="[0,2316][1080,2436]" /></node></hierarchy>



```

## Important Logcat Text

```text

C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:12:06-28
 21:39:57.504 29094 29094 D ViewRootImpl: setView appearance:512 com.erbete.customer/com.erbete.customer.MainActivity
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:24:06-28
 21:39:57.508  1032  3286 I BufferQueueDebug: [c2233e0 
com.erbete.customer/com.erbete.customer.MainActivity#18928](this:0xb40000744ea6abc8,id:-1,api:0,p:-1,c:-1) BufferQueue 
core=(1032:/system/bin/surfaceflinger)
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:33:06-28
 21:39:57.513  1796  2454 I TranThermalBacklightCtrl: cur package [com.erbete.customer] is in TemperatureControlWhitelist
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:41:06-28
 21:39:57.526  1796  4725 D ActivityManager: getProcessesInErrorState callingUid=10452, CallingPid=26725
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:64:06-28
 21:39:57.567  1796  1968 E JobScheduler.Concurrency: Error executing JobStatus{329803e #u0a458/784194378 
com.radiolight.malaisie/com.startapp.sdk.jobs.SchedulerService u=0 s=10458 TIME=-1d8h20m48s126ms:-1d7h8m48s126ms NET PERIODIC 
PERSISTED READY}
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:68:06-28
 21:39:57.572  1796  1968 E JobScheduler.Concurrency: Error executing JobStatus{bee8c7d #u0a270/-1198051381 
cn.wps.moffice_eng/com.google.android.datatransport.runtime.scheduling.jobscheduling.JobInfoSchedulerService u=0 s=10270 
TIME=-2d3h23m55s326ms:none NET READY}
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:73:06-28
 21:39:57.577  1796  1968 E JobScheduler.Concurrency: Error executing JobStatus{2778417 #u0a270/-1198051381 
cn.wps.moffice_eng/com.google.android.datatransport.runtime.scheduling.jobscheduling.JobInfoSchedulerService u=0 s=10270 
TIME=-2d3h24m2s516ms:none NET READY}
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:77:06-28
 21:39:57.579  1796  1968 E JobScheduler.Concurrency: Error executing JobStatus{bd5bff9 
androidx.work.systemjobscheduler:u0a257/223217 
@androidx.work.systemjobscheduler@com.instagram.android/androidx.work.impl.background.systemjob.SystemJobService u=0 s=10257 
TIME=-45m52s566ms:none NET READY}
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:81:06-28
 21:39:57.582  1796  1968 E JobScheduler.Concurrency: Error executing JobStatus{588598 #u0a252/-242208714 
com.bukalapak.mitra/com.google.android.datatransport.runtime.scheduling.jobscheduling.JobInfoSchedulerService u=0 s=10252 
TIME=-6h35m17s664ms:none NET READY}
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:85:06-28
 21:39:57.584  1796  1968 E JobScheduler.Concurrency: Error executing JobStatus{72c02b4 #u0a467/2095721313 
id.dana/com.google.android.datatransport.runtime.scheduling.jobscheduling.JobInfoSchedulerService u=0 s=10467 TIME=-25m21s16ms:none 
NET READY}
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:101:06-2
8 21:39:57.696  1796  4725 D CoreBackPreview: Window{c2233e0 u0 com.erbete.customer/com.erbete.customer.MainActivity}: Setting back 
callback OnBackInvokedCallbackInfo{mCallback=android.window.IOnBackInvokedCallback$Stub$Proxy@f95227, mPriority=-1, 
mIsAnimationCallback=false}
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:106:06-2
8 21:39:57.729  1032  3286 I BufferQueueDebug: 
[com.erbete.customer/com.erbete.customer.MainActivity#18929](this:0xb40000744ea59a68,id:-1,api:0,p:-1,c:-1) BufferQueue 
core=(1032:/system/bin/surfaceflinger)
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:108:06-2
8 21:39:57.732  1796  4725 W WindowManager: Changing focus from null to Window{c2233e0 u0 
com.erbete.customer/com.erbete.customer.MainActivity} displayId=0 
Callers=com.android.server.wm.RootWindowContainer.updateFocusedWindowLocked:528 
com.android.server.wm.WindowManagerService.updateFocusedWindowLocked:6849 
com.android.server.wm.WindowManagerService.relayoutWindowInner:2856 com.android.server.wm.WindowManagerService.relayoutWindow:2515 
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:109:06-2
8 21:39:57.732  1796  4725 D WindowManager: notifyAppOnFocusChange focusedWindow = 
com.erbete.customer/com.erbete.customer.MainActivity mFocusChangeCallback = android.window.IFocusChangeCallback$Stub$Proxy@f624dc1
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:112:06-2
8 21:39:57.737  1796  4725 D WindowManager: updateSystemBarAttributes appearance:528, win appearance:528, opaqueAppearance:0, 
win:Window{c2233e0 u0 com.erbete.customer/com.erbete.customer.MainActivity}, appearanceRegions=[AppearanceRegion{LIGHT_STATUS_BARS 
bounds=[0,0][1080,2436]}]
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:113:06-2
8 21:39:57.737  1796  4725 D TranDisplayJamMonitor: starting window overlay on focus window. WindowInfo:Window{4b8ef40 u0 Splash 
Screen com.erbete.customer}
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:114:06-2
8 21:39:57.737  1796  4725 D TranDisplayJamMonitor: checkExceptionWindowResult = 1040
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:115:06-2
8 21:39:57.737  1796  4725 D TranDisplayJamMonitor: check display window jam detection:Window{c2233e0 u0 
com.erbete.customer/com.erbete.customer.MainActivity}
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:117:06-2
8 21:39:57.737  1796  4725 I WindowManager: Relayout Window{c2233e0 u0 com.erbete.customer/com.erbete.customer.MainActivity}: 
oldVis=4 newVis=0 focusMayChange = true requestedWidth = 1080 requestedHeight = 2436 outFrames = 
ClientWindowFrames{frame=[0,0][1080,2436] display=[0,0][1080,2436] parentFrame=[0,0][0,0]} outSurfaceControl = 
Surface(name=com.erbete.customer/com.erbete.customer.MainActivity)/@0xaea226c
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:118:06-2
8 21:39:57.737  2377  2377 I StatusBarModePerDisplayRepository: isInFullscreenMode:false com.erbete.customer
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:130:06-2
8 21:39:57.748 29094  6660 D libMEOW : applied 1 plugins for [com.erbete.customer]:
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:133:06-2
8 21:39:57.751  1796  1828 D SurfaceComposerClient: Transaction::apply InputWindowCommands.focusRequests timestamp=83581905179366, 
windowName=c2233e0 com.erbete.customer/com.erbete.customer.MainActivity
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:134:06-2
8 21:39:57.755  1032  3286 I BufferQueueDebug: [Bounds for - 
com.erbete.customer/com.erbete.customer.MainActivity#18932](this:0xb40000744ea6d958,id:-1,api:0,p:-1,c:-1) BufferQueue 
core=(1032:/system/bin/surfaceflinger)
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:135:06-2
8 21:39:57.758  1032  3286 I BufferQueueDebug: 
[SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity]#18933](this:0xb40000744ea56cd8,id:-1,api:0,p:-1,c:-1) 
BufferQueue core=(1032:/system/bin/surfaceflinger)
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:136:06-2
8 21:39:57.759  1032  3286 I BufferQueueDebug: 
[SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity](BLAST)#18934](this:0xb40000744ea2eef8,id:-1,api:0,p:-1,c:-1) 
BufferQueue core=(1032:/system/bin/surfaceflinger)
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:137:06-2
8 21:39:57.760  1032  3286 I BufferQueueDebug: [Background for 
SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity]#18935](this:0xb40000744eadca48,id:-1,api:0,p:-1,c:-1) BufferQueue 
core=(1032:/system/bin/surfaceflinger)
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:139:06-2
8 21:39:57.761 29094 29094 D BLASTBufferQueue: [SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity]#1](f:0,a:0) 
constructor()
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:140:06-2
8 21:39:57.761 29094 29094 D BLASTBufferQueue: [SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity]#1](f:0,a:0) 
update width=1080 height=2436 format=4 mTransformHint=0
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:141:06-2
8 21:39:57.768  1032  1032 D SurfaceFlinger: Focus addInputWindowCommands timestamp=83581905179366, windowName=c2233e0 
com.erbete.customer/com.erbete.customer.MainActivity
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:145:06-2
8 21:39:57.770 29094  6666 E gralloc4: ERROR: Format allocation info not found for format: 38
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:146:06-2
8 21:39:57.770 29094  6666 E gralloc4: ERROR: Format allocation info not found for format: 0
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:148:06-2
8 21:39:57.770 29094  6666 E gralloc4: ERROR: Unrecognized and/or unsupported format 0x38 and usage 0xb00
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:150:06-2
8 21:39:57.772   936   975 E gralloc4: ERROR: Format allocation info not found for format: 38
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:151:06-2
8 21:39:57.772   936   975 E gralloc4: ERROR: Format allocation info not found for format: 0
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:153:06-2
8 21:39:57.772   936   975 E gralloc4: ERROR: Unrecognized and/or unsupported format 0x38 and usage 0xb00
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:156:06-2
8 21:39:57.772 29094  6666 E AHardwareBuffer: GraphicBuffer(w=4, h=4, lc=1) failed (Unknown error -5), handle=0x0
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:157:06-2
8 21:39:57.772 29094  6666 E gralloc4: ERROR: Format allocation info not found for format: 3b
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:158:06-2
8 21:39:57.772 29094  6666 E gralloc4: ERROR: Format allocation info not found for format: 0
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:160:06-2
8 21:39:57.772 29094  6666 E gralloc4: ERROR: Unrecognized and/or unsupported format 0x3b and usage 0xb00
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:162:06-2
8 21:39:57.772   936   975 E gralloc4: ERROR: Format allocation info not found for format: 3b
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:163:06-2
8 21:39:57.772   936   975 E gralloc4: ERROR: Format allocation info not found for format: 0
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:165:06-2
8 21:39:57.772   936   975 E gralloc4: ERROR: Unrecognized and/or unsupported format 0x3b and usage 0xb00
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:168:06-2
8 21:39:57.772 29094  6666 E AHardwareBuffer: GraphicBuffer(w=4, h=4, lc=1) failed (Unknown error -5), handle=0x0
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:169:06-2
8 21:39:57.773 29094  6666 E gralloc4: ERROR: Format allocation info not found for format: 38
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:170:06-2
8 21:39:57.773 29094  6666 E gralloc4: ERROR: Format allocation info not found for format: 0
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:172:06-2
8 21:39:57.773 29094  6666 E gralloc4: ERROR: Unrecognized and/or unsupported format 0x38 and usage 0xb00
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:174:06-2
8 21:39:57.773   936   975 E gralloc4: ERROR: Format allocation info not found for format: 38
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:175:06-2
8 21:39:57.773   936   975 E gralloc4: ERROR: Format allocation info not found for format: 0
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:177:06-2
8 21:39:57.773   936   975 E gralloc4: ERROR: Unrecognized and/or unsupported format 0x38 and usage 0xb00
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:180:06-2
8 21:39:57.773 29094  6666 E AHardwareBuffer: GraphicBuffer(w=4, h=4, lc=1) failed (Unknown error -5), handle=0x0
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:181:06-2
8 21:39:57.773 29094  6666 E gralloc4: ERROR: Format allocation info not found for format: 3b
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:182:06-2
8 21:39:57.773 29094  6666 E gralloc4: ERROR: Format allocation info not found for format: 0
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:184:06-2
8 21:39:57.773 29094  6666 E gralloc4: ERROR: Unrecognized and/or unsupported format 0x3b and usage 0xb00
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:186:06-2
8 21:39:57.773   936   975 E gralloc4: ERROR: Format allocation info not found for format: 3b
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:187:06-2
8 21:39:57.773   936   975 E gralloc4: ERROR: Format allocation info not found for format: 0
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:189:06-2
8 21:39:57.773   936   975 E gralloc4: ERROR: Unrecognized and/or unsupported format 0x3b and usage 0xb00
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:192:06-2
8 21:39:57.773 29094  6666 E AHardwareBuffer: GraphicBuffer(w=4, h=4, lc=1) failed (Unknown error -5), handle=0x0
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:197:06-2
8 21:39:57.777  1032  1990 D SurfaceFlinger: updateWinowInfo=1, setFocusedWindow timestamp=83581905179366, windowName=c2233e0 
com.erbete.customer/com.erbete.customer.MainActivity
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:238:06-2
8 21:39:57.961 29094 29094 D LocationPlugin: Service connected: 
ComponentInfo{com.erbete.customer/com.lyokone.location.FlutterLocationService}
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:239:06-2
8 21:39:57.985  1796  4242 D CoreBackPreview: Window{c2233e0 u0 com.erbete.customer/com.erbete.customer.MainActivity}: Setting back 
callback OnBackInvokedCallbackInfo{mCallback=android.window.IOnBackInvokedCallback$Stub$Proxy@6f12cca, mPriority=0, 
mIsAnimationCallback=true}
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:241:06-2
8 21:39:58.005  1796  4242 D CoreBackPreview: Window{c2233e0 u0 com.erbete.customer/com.erbete.customer.MainActivity}: Setting back 
callback OnBackInvokedCallbackInfo{mCallback=android.window.IOnBackInvokedCallback$Stub$Proxy@d8cf958, mPriority=-1, 
mIsAnimationCallback=false}
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:250:06-2
8 21:39:58.030  1796  4725 D ActivityManager: getProcessesInErrorState callingUid=10452, CallingPid=26725
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:352:06-2
8 21:39:58.215 29094  6755 D FirebaseAuth: Notifying id token listeners about user ( ObO21tC9wyQq4YgxVGdTW5jD3NA2 ).
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:359:06-2
8 21:39:58.256  4428  4428 D mol_MolService.run(L:134): ----MolService focused pkg:com.erbete.customer, 
cmp:com.erbete.customer.MainActivity, curType:SCENE_UNKOWN, molAlive:true, asAlive:false, asCrashed:false, imeVis:false, 
this:com.transsion.mol.service.MolService@5a1db7b
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:374:06-2
8 21:39:58.531  1796  4725 D ActivityManager: getProcessesInErrorState callingUid=10452, CallingPid=26725
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:438:06-2
8 21:39:59.035  1796  4725 D ActivityManager: getProcessesInErrorState callingUid=10452, CallingPid=26725
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:486:06-2
8 21:39:59.394 29094  6666 D BLASTBufferQueue: [SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity]#1](f:0,a:1) 
acquireNextBufferLocked size=1080x2436 mFrameNumber=1 applyTransaction=true mTimestamp=83583560882212(auto) 
mPendingTransactions.size=0 graphicBufferId=124957778509838 transform=0
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:512:06-2
8 21:39:59.527  1796  2454 D ConnectivityService: requestNetwork for uid/pid:10502/29094 activeRequest: null callbackRequest: 17625 
[NetworkRequest [ REQUEST id=17626, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED&NOT_BANDWIDTH_CONSTRAINED Uid: 
10502 RequestorUid: 10502 RequestorPkg: com.erbete.customer UnderlyingNetworks: Null] ]] callback flags: 0 order: 2147483647 
isUidTracked: false declaredMethods: AVAIL|LOST
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:513:06-2
8 21:39:59.530  1796  2035 D WifiNetworkFactory: got request NetworkRequest [ REQUEST id=17626, [ Capabilities: 
INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED&NOT_BANDWIDTH_CONSTRAINED Uid: 10502 RequestorUid: 10502 RequestorPkg: 
com.erbete.customer UnderlyingNetworks: Null] ]
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:514:06-2
8 21:39:59.530  1796  2035 V WifiNetworkFactory: Accepted network request NetworkRequest [ REQUEST id=17626, [ Capabilities: 
INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED&NOT_BANDWIDTH_CONSTRAINED Uid: 10502 RequestorUid: 10502 RequestorPkg: 
com.erbete.customer UnderlyingNetworks: Null] ]
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:515:06-2
8 21:39:59.530  1796  2035 D UntrustedWifiNetworkFactory: got request NetworkRequest [ REQUEST id=17626, [ Capabilities: 
INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED&NOT_BANDWIDTH_CONSTRAINED Uid: 10502 RequestorUid: 10502 RequestorPkg: 
com.erbete.customer UnderlyingNetworks: Null] ]
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:516:06-2
8 21:39:59.531  1796  2035 D OemPaidWifiNetworkFactory: got request NetworkRequest [ REQUEST id=17626, [ Capabilities: 
INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED&NOT_BANDWIDTH_CONSTRAINED Uid: 10502 RequestorUid: 10502 RequestorPkg: 
com.erbete.customer UnderlyingNetworks: Null] ]
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:517:06-2
8 21:39:59.531  1796  2035 D MultiInternetWifiNetworkFactory: got request NetworkRequest [ REQUEST id=17626, [ Capabilities: 
INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED&NOT_BANDWIDTH_CONSTRAINED Uid: 10502 RequestorUid: 10502 RequestorPkg: 
com.erbete.customer UnderlyingNetworks: Null] ]
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:522:06-2
8 21:39:59.536  1796  2454 D ActivityManager: getProcessesInErrorState callingUid=10452, CallingPid=26725
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:529:06-2
8 21:39:59.548 29094  6761 D TranClassInfo: instance successfully. 
com.transsion.hubcore.database.sqlite.TranSQLiteDatabaseImpl@cf50a7d from com.transsion.hubcore.database.sqlite.ITranSQLiteDatabase
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:530:06-2
8 21:39:59.549 29094  6761 D TranClassInfo: instance successfully. 
com.transsion.hubcore.spdopts.others.implement.TranSQLiteDatabaseComponentImpl@735bd72 from 
com.transsion.hubcore.spdcomponent.ITranSQLiteDatabaseComponent
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:539:06-2
8 21:39:59.579  1796  2929 D WindowManager: updateSystemBarAttributes appearance:24, win appearance:8, opaqueAppearance:0, 
win:Window{c2233e0 u0 com.erbete.customer/com.erbete.customer.MainActivity}, appearanceRegions=[AppearanceRegion{LIGHT_STATUS_BARS 
bounds=[0,0][1080,2436]}]
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:540:06-2
8 21:39:59.580  2377  2377 I StatusBarModePerDisplayRepository: isInFullscreenMode:false com.erbete.customer
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:542:06-2
8 21:39:59.607  1796  2929 D WindowManager: System monitor finishDrawingWindow w: Window{c2233e0 u0 
com.erbete.customer/com.erbete.customer.MainActivity}; mDrawState = DRAW_PENDING
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:545:06-2
8 21:39:59.612  1796  1828 V ActivityTaskManager: Schedule remove starting ActivityRecord{eab92f3 u0 
com.erbete.customer/.MainActivity t47852} startingWindow=Window{4b8ef40 u0 Splash Screen com.erbete.customer} animate=true 
Callers=com.android.server.wm.ActivityRecord.removeStartingWindow:3469 com.android.server.wm.ActivityRecord.onFirstWindowDrawn:7830 
com.android.server.wm.WindowState.performShowLocked:4877 com.android.server.wm.WindowStateAnimator.commitFinishDrawingLocked:289 
com.android.server.wm.DisplayContent.lambda$new$8:1081 
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:546:06-2
8 21:39:59.613  1032  1079 I BufferQueueDebug: [Surface(name=c2233e0 
com.erbete.customer/com.erbete.customer.MainActivity)/@0x75b061b - animation-leash of 
starting_reveal#18936](this:0xb40000744ea7eab8,id:-1,api:0,p:-1,c:-1) BufferQueue core=(1032:/system/bin/surfaceflinger)
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:548:06-2
8 21:39:59.619  4596  4626 I SmartPanelService: onWindowsDrawn pkgName: com.erbete.customer, className: 
com.erbete.customer.MainActivity launchState=1 windowsDrawnDelayMs =5098
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:558:06-2
8 21:39:59.636  1796  2929 I WindowManager:   isAnimating=false  okToAnimate=true  win=Window{4b8ef40 u0 Splash Screen 
com.erbete.customer}
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:559:06-2
8 21:39:59.638  1796  1824 I _T_AppBehavior: APP_START_OCCURRED (pid:29094, packageName:com.erbete.customer, transitionType:7, 
launchedActivityName:com.erbete.customer.MainActivity, callerPackage:com.android.shell, currentTransitionDelayMs:108, 
startingWindowDelayMs:98, bindApplicationDelayMs:133, windowsDrawnDelayMs:5098,compilationReason:1, compilationFilter:12 )
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:560:06-2
8 21:39:59.638  1032  1079 I BufferQueueDebug: [Surface(name=4b8ef40 Splash Screen com.erbete.customer)/@0x3064282 - 
animation-leash of window_animation#18937](this:0xb40000744e9fbad8,id:-1,api:0,p:-1,c:-1) BufferQueue 
core=(1032:/system/bin/surfaceflinger)
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:561:06-2
8 21:39:59.640  1796  2929 D WindowManager: updateSystemBarAttributes appearance:8, win appearance:8, opaqueAppearance:0, 
win:Window{c2233e0 u0 com.erbete.customer/com.erbete.customer.MainActivity}, appearanceRegions=[AppearanceRegion{LIGHT_STATUS_BARS 
bounds=[0,0][1080,2436]}]
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:565:06-2
8 21:39:59.643  1796  2929 D CoreBackPreview: Window{4b8ef40 u0 Splash Screen com.erbete.customer EXITING}: Setting back callback 
null
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:566:06-2
8 21:39:59.644  1796  2929 I WindowManager:   onAnimationFinished on win=Window{c2233e0 u0 
com.erbete.customer/com.erbete.customer.MainActivity}
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:567:06-2
8 21:39:59.644  2377  2377 I StatusBarModePerDisplayRepository: isInFullscreenMode:false com.erbete.customer
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:568:06-2
8 21:39:59.644  1796  2929 W InputManager-JNI: Input channel object '4b8ef40 Splash Screen com.erbete.customer (client)' was 
disposed without first being removed with the input manager!
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:570:06-2
8 21:39:59.645  1796  2358 W TranPerformanceAfterSaleHooker: su=={"par":{"dte":"2026-06-28 21:39:59:645", 
"qg":"com.erbete.customer",  "act":"com.erbete.customer.MainActivity", "time":5098}}
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:571:06-2
8 21:39:59.649  1796  1824 I ActivityTaskManager: Displayed com.erbete.customer/.MainActivity for user 0: +5s98ms
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:572:06-2
8 21:39:59.649  1796  1827 I PowerHalWrapper: amsBoostNotify pid:2369,activity:com.android.launcher3.uioverrides.QuickstepLauncher, 
package:com.transsion.XOSLauncher, mProcessCreatePackcom.erbete.customer 
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:578:06-2
8 21:39:59.656  1796  1832 I TranSuccCrashMgr: Post key event: type=0, 
event=wm_activity_launch_time0,com.erbete.customer/.MainActivity,5098, ext=null
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:581:06-2
8 21:39:59.663  4596  5182 I ScenesManager: put createTaskId com.erbete.customer47852
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:612:06-2
8 21:39:59.675   963   986 D AppFlingMode: [CheckAppFlingHint] 30 com.erbete.customer -1
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:619:06-2
8 21:39:59.684  4596  5182 D THubApi : getWindowingMode TaskInfo{userId=0 taskId=47852 displayId=0 isRunning=true baseIntent=Intent 
{ act=android.intent.action.MAIN cat=[android.intent.category.LAUNCHER] flg=0x10200000 cmp=com.erbete.customer/.MainActivity } 
baseActivity=ComponentInfo{com.erbete.customer/com.erbete.customer.MainActivity} 
topActivity=ComponentInfo{com.erbete.customer/com.erbete.customer.MainActivity} origActivity=null 
realActivity=ComponentInfo{com.erbete.customer/com.erbete.customer.MainActivity} numActivities=1 lastActiveTime=199802140 
supportsMultiWindow=true resizeMode=1 isResizeable=true minWidth=-1 minHeight=-1 defaultMinSize=110 
token=WCT{android.window.IWindowContainerToken$Stub$Proxy@36507f0} topActivityType=1 pictureInPictureParams=null 
shouldDockBigOverlays=false launchIntoPipHostTaskId=-1 lastParentTaskIdBeforePip=-1 displayCutoutSafeInsets=null 
topActivityInfo=ActivityInfo{e0fb169 com.erbete.customer.MainActivity} launchCookies=[] positionInParent=Point(0, 0) 
parentTaskId=-1 isFocused=true isVisible=true isVisibleRequested=true isSleeping=false locusId=null displayAreaFeatureId=1 
isTopActivityTransparent=false appCompatTaskInfo=AppCompatTaskInfo { topActivityInSizeCompat=false 
topActivityEligibleForLetterboxEducation= falseisLetterboxEducationEnabled= false isLetterboxDoubleTapEnabled= false 
topActivityEligibleForUserAspectRatioButton= false topActivityBoundsLetterboxed= false isFromLetterboxDoubleTap= false 
topActivityLetterboxVerticalPosition= -1 topActivityLetterboxHorizontalPosition= -1 topActivityLetterboxWidth=1080 
topActivityLetterboxHeight=2436 isUserFullscreenOverrideEnabled=false isSystemFullscreenOverrideEnabled=false 
cameraCompatTaskInfo=CameraCompatTaskInfo { cameraCompatControlState=hidden freeformCameraCompatMode=inactive}}}
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:621:06-2
8 21:39:59.693  1796  2017 I ImeTracker: com.erbete.customer:7d326dd2: onRequestHide at ORIGIN_SERVER reason 
HIDE_UNSPECIFIED_WINDOW fromUser false
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:622:06-2
8 21:39:59.693  1796  2017 I ImeTracker: com.erbete.customer:7d326dd2: onCancelled at PHASE_SERVER_SHOULD_HIDE
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:627:06-2
8 21:39:59.693  1796  2017 I input_debug: package: com.erbete.customer mNeedShowSafeInput: false inputType: 0 methodMap: true 
isKeyguardShowing: false enable: 0 isSplitScreen: false
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:629:06-2
8 21:39:59.699 29094  6771 E GoogleApiManager: java.lang.SecurityException: Unknown calling package name 'com.google.android.gms'.
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:630:06-2
8 21:39:59.699 29094  6771 E GoogleApiManager: 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3251)
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:631:06-2
8 21:39:59.699 29094  6771 E GoogleApiManager: 	at android.os.Parcel.createException(Parcel.java:3235)
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:632:06-2
8 21:39:59.699 29094  6771 E GoogleApiManager: 	at android.os.Parcel.readException(Parcel.java:3218)
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:633:06-2
8 21:39:59.699 29094  6771 E GoogleApiManager: 	at android.os.Parcel.readException(Parcel.java:3160)
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:646:06-2
8 21:39:59.700 29094  6771 W GoogleApiManager: Not showing notification since connectionResult is not user-facing: 
ConnectionResult{statusCode=DEVELOPER_ERROR, resolution=null, message=null, clientMethodKey=null}
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:649:06-2
8 21:39:59.702  4596  5182 I THubApi : isTheMainScreen classname: com.erbete.customer.MainActivity  pkg:com.erbete.customer
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:650:06-2
8 21:39:59.702   963   986 D AppFlingMode: [CheckAppFlingHint] 101 com.erbete.customer -1
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:651:06-2
8 21:39:59.702  1796  4725 D TranActivityTaskManagerService: isTheMainScreen, displayId = 0, classname = 
com.erbete.customer.MainActivity
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:662:06-2
8 21:39:59.705 29094  6769 W FlagRegistrar: Failed to register com.google.android.gms.providerinstaller#com.erbete.customer
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:663:06-2
8 21:39:59.705 29094  6769 W FlagRegistrar: goux: 17: 17: API: Phenotype.API is not available on this device. Connection failed 
with: ConnectionResult{statusCode=DEVELOPER_ERROR, resolution=null, message=null, clientMethodKey=null}
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:690:06-2
8 21:39:59.705 29094  6769 W FlagRegistrar: Caused by: bjpk: 17: API: Phenotype.API is not available on this device. Connection 
failed with: ConnectionResult{statusCode=DEVELOPER_ERROR, resolution=null, message=null, clientMethodKey=null}
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:695:06-2
8 21:39:59.705  4596  5182 D THubApi : getUserId TaskInfo{userId=0 taskId=47852 displayId=0 isRunning=true baseIntent=Intent { 
act=android.intent.action.MAIN cat=[android.intent.category.LAUNCHER] flg=0x10200000 cmp=com.erbete.customer/.MainActivity } 
baseActivity=ComponentInfo{com.erbete.customer/com.erbete.customer.MainActivity} 
topActivity=ComponentInfo{com.erbete.customer/com.erbete.customer.MainActivity} origActivity=null 
realActivity=ComponentInfo{com.erbete.customer/com.erbete.customer.MainActivity} numActivities=1 lastActiveTime=199802140 
supportsMultiWindow=true resizeMode=1 isResizeable=true minWidth=-1 minHeight=-1 defaultMinSize=110 
token=WCT{android.window.IWindowContainerToken$Stub$Proxy@36507f0} topActivityType=1 pictureInPictureParams=null 
shouldDockBigOverlays=false launchIntoPipHostTaskId=-1 lastParentTaskIdBeforePip=-1 displayCutoutSafeInsets=null 
topActivityInfo=ActivityInfo{e0fb169 com.erbete.customer.MainActivity} launchCookies=[] positionInParent=Point(0, 0) 
parentTaskId=-1 isFocused=true isVisible=true isVisibleRequested=true isSleeping=false locusId=null displayAreaFeatureId=1 
isTopActivityTransparent=false appCompatTaskInfo=AppCompatTaskInfo { topActivityInSizeCompat=false 
topActivityEligibleForLetterboxEducation= falseisLetterboxEducationEnabled= false isLetterboxDoubleTapEnabled= false 
topActivityEligibleForUserAspectRatioButton= false topActivityBoundsLetterboxed= false isFromLetterboxDoubleTap= false 
topActivityLetterboxVerticalPosition= -1 topActivityLetterboxHorizontalPosition= -1 topActivityLetterboxWidth=1080 
topActivityLetterboxHeight=2436 isUserFullscreenOverrideEnabled=false isSystemFullscreenOverrideEnabled=false 
cameraCompatTaskInfo=CameraCompatTaskInfo { cameraCompatControlState=hidden freeformCameraCompatMode=inactive}}}
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:701:06-2
8 21:39:59.720 29094  6771 E GoogleApiManager: java.lang.SecurityException: Unknown calling package name 'com.google.android.gms'.
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:702:06-2
8 21:39:59.720 29094  6771 E GoogleApiManager: 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3251)
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:703:06-2
8 21:39:59.720 29094  6771 E GoogleApiManager: 	at android.os.Parcel.createException(Parcel.java:3235)
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:704:06-2
8 21:39:59.720 29094  6771 E GoogleApiManager: 	at android.os.Parcel.readException(Parcel.java:3218)
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:705:06-2
8 21:39:59.720 29094  6771 E GoogleApiManager: 	at android.os.Parcel.readException(Parcel.java:3160)
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:716:06-2
8 21:39:59.720 29094  6771 W GoogleApiManager: Not showing notification since connectionResult is not user-facing: 
ConnectionResult{statusCode=DEVELOPER_ERROR, resolution=null, message=null, clientMethodKey=null}
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:719:06-2
8 21:39:59.734 29094  6770 W FlagStore: Unable to update local snapshot for 
com.google.android.gms.providerinstaller#com.erbete.customer, may result in stale flags.
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:720:06-2
8 21:39:59.734 29094  6770 W FlagStore: java.util.concurrent.ExecutionException: goux: 17: 17: API: Phenotype.API is not available 
on this device. Connection failed with: ConnectionResult{statusCode=DEVELOPER_ERROR, resolution=null, message=null, 
clientMethodKey=null}
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:734:06-2
8 21:39:59.734 29094  6770 W FlagStore: Caused by: goux: 17: 17: API: Phenotype.API is not available on this device. Connection 
failed with: ConnectionResult{statusCode=DEVELOPER_ERROR, resolution=null, message=null, clientMethodKey=null}
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:766:06-2
8 21:39:59.735 29094  6770 W FlagStore: Caused by: bjpk: 17: API: Phenotype.API is not available on this device. Connection failed 
with: ConnectionResult{statusCode=DEVELOPER_ERROR, resolution=null, message=null, clientMethodKey=null}
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:794:06-2
8 21:39:59.809  1796  1968 E JobScheduler.Concurrency: Error executing JobStatus{a2b2195 #u0a162/2615 
com.gallery20/androidx.work.impl.background.systemjob.SystemJobService u=0 s=10162 BATNOTLOW STORENOTLOW READY}
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:803:06-2
8 21:39:59.842  1796  1968 E JobScheduler.Concurrency: Error executing JobStatus{9ed5238 #u0a162/2616 
com.gallery20/androidx.work.impl.background.systemjob.SystemJobService u=0 s=10162 BATNOTLOW STORENOTLOW READY}
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:831:06-2
8 21:39:59.848  1796  1968 E JobScheduler.Concurrency: Error executing JobStatus{1159f74 #u0a162/2614 
com.gallery20/androidx.work.impl.background.systemjob.SystemJobService u=0 s=10162 TIME=-2d5h28m27s562ms:none BATNOTLOW STORENOTLOW 
READY}
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:836:06-2
8 21:39:59.853  1796  1968 E JobScheduler.Concurrency: Error executing JobStatus{272d3c #u0a162/2617 
com.gallery20/androidx.work.impl.background.systemjob.SystemJobService u=0 s=10162 TIME=-2d5h28m27s474ms:none BATNOTLOW STORENOTLOW 
READY}
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:838:06-2
8 21:39:59.854  1796  1828 D WindowManager: setParent old=ActivityRecord{eab92f3 u0 com.erbete.customer/.MainActivity 
t47852},new=null,this window=Window{4b8ef40 u0 Splash Screen 
com.erbete.customer},callers=com.android.server.wm.WindowContainer.removeChild:862 
com.android.server.wm.ActivityRecord.removeChild:5351 com.android.server.wm.ActivityRecord.removeChild:482 
com.android.server.wm.WindowContainer.removeImmediately:932 com.android.server.wm.WindowState.removeImmediately:2565 
com.android.server.wm.WindowState.destroySurface:3728 
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:847:06-2
8 21:39:59.854  1796  1828 D WindowManager: removeImmediately mActivityRecord: ActivityRecord{eab92f3 u0 
com.erbete.customer/.MainActivity t47852} type: 3
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:848:06-2
8 21:39:59.855  1796  1828 D ActivityTaskManager: hookRecordSnapshot start pkgName: com.erbete.customer componentName: 
com.erbete.customer/.MainActivity mPkgName: null mRecordParams: null
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:849:06-2
8 21:39:59.855  1796  1828 D WindowManager: postWindowRemoveCleanupLocked: token:ActivityRecord{eab92f3 u0 
com.erbete.customer/.MainActivity t47852} win:Window{4b8ef40 u0 Splash Screen com.erbete.customer} token.isEmpty:false 
token.mPersistOnEmpty:true
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:852:06-2
8 21:39:59.858  1796  1828 I WindowManager:   onAnimationFinished on win=Window{4b8ef40 u0 Splash Screen com.erbete.customer}
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:854:06-2
8 21:39:59.859  1796  1968 E JobScheduler.Concurrency: Error executing JobStatus{fb82504 
androidx.work.systemjobscheduler:u0a393/287 
@androidx.work.systemjobscheduler@com.turkcell.bip/androidx.work.impl.background.systemjob.SystemJobService u=0 s=10393 
TIME=-1d21h27m39s555ms:none NET READY}
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:858:06-2
8 21:39:59.868  1796  1968 E JobScheduler.Concurrency: Error executing JobStatus{f59ead8 #u0a458/784194502 
com.radiolight.malaisie/com.startapp.sdk.jobs.SchedulerService u=0 s=10458 TIME=-2d5h14m50s416ms:-2d5h8m50s416ms NET PERIODIC 
PERSISTED READY}
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:859:06-2
8 21:39:59.883  1032  1032 I SurfaceFlinger: onHandleDestroyed: name=Splash Screen com.erbete.customer#18923, layerId=18923, 
parentId=0
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:860:06-2
8 21:39:59.883  1032  1032 I SurfaceFlinger: onHandleDestroyed: name=Surface(name=4b8ef40 Splash Screen 
com.erbete.customer)/@0x3064282 - animation-leash of window_animation#18937, layerId=18937, parentId=0
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:861:06-2
8 21:39:59.883  1032  1032 I SurfaceFlinger: onHandleDestroyed: name=4b8ef40 Splash Screen com.erbete.customer#18922, 
layerId=18922, parentId=0
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:864:06-2
8 21:39:59.899  1032  1032 I BufferQueueDebug: [Splash Screen 
com.erbete.customer#18923](this:0xb40000744e9dc5a8,id:-1,api:0,p:-1,c:1032) onDestructor()
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:865:06-2
8 21:39:59.899  1032  1032 I BufferQueueDebug: [4b8ef40 Splash Screen 
com.erbete.customer#18922](this:0xb40000744e9df338,id:-1,api:0,p:-1,c:1032) onDestructor()
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:866:06-2
8 21:39:59.900  1032  1032 I BufferQueueDebug: [Surface(name=4b8ef40 Splash Screen com.erbete.customer)/@0x3064282 - 
animation-leash of window_animation#18937](this:0xb40000744e9fbad8,id:-1,api:0,p:-1,c:1032) onDestructor()
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:867:06-2
8 21:39:59.914  1796  2454 D ConnectivityService: requestNetwork for uid/pid:10502/29094 activeRequest: null callbackRequest: 17627 
[NetworkRequest [ REQUEST id=17628, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED&NOT_BANDWIDTH_CONSTRAINED Uid: 
10502 RequestorUid: 10502 RequestorPkg: com.erbete.customer UnderlyingNetworks: Null] ]] callback flags: 0 order: 2147483647 
isUidTracked: false declaredMethods: AVAIL|BLK
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:869:06-2
8 21:39:59.920  1796  2035 D WifiNetworkFactory: got request NetworkRequest [ REQUEST id=17628, [ Capabilities: 
INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED&NOT_BANDWIDTH_CONSTRAINED Uid: 10502 RequestorUid: 10502 RequestorPkg: 
com.erbete.customer UnderlyingNetworks: Null] ]
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:870:06-2
8 21:39:59.920  1796  2035 V WifiNetworkFactory: Accepted network request NetworkRequest [ REQUEST id=17628, [ Capabilities: 
INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED&NOT_BANDWIDTH_CONSTRAINED Uid: 10502 RequestorUid: 10502 RequestorPkg: 
com.erbete.customer UnderlyingNetworks: Null] ]
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:871:06-2
8 21:39:59.920  1796  2035 D UntrustedWifiNetworkFactory: got request NetworkRequest [ REQUEST id=17628, [ Capabilities: 
INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED&NOT_BANDWIDTH_CONSTRAINED Uid: 10502 RequestorUid: 10502 RequestorPkg: 
com.erbete.customer UnderlyingNetworks: Null] ]
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:872:06-2
8 21:39:59.920  1796  2035 D OemPaidWifiNetworkFactory: got request NetworkRequest [ REQUEST id=17628, [ Capabilities: 
INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED&NOT_BANDWIDTH_CONSTRAINED Uid: 10502 RequestorUid: 10502 RequestorPkg: 
com.erbete.customer UnderlyingNetworks: Null] ]
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:874:06-2
8 21:39:59.920  1796  2035 D MultiInternetWifiNetworkFactory: got request NetworkRequest [ REQUEST id=17628, [ Capabilities: 
INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED&NOT_BANDWIDTH_CONSTRAINED Uid: 10502 RequestorUid: 10502 RequestorPkg: 
com.erbete.customer UnderlyingNetworks: Null] ]
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:878:06-2
8 21:40:00.008  4390  4390 I UxDetectorRestHandler: loadDatabaseAtTime: 1639
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:879:06-2
8 21:40:00.008  4390  4390 I AiCommunicateHandler: loadDatabaseAtTime: 1639
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:888:06-2
8 21:40:00.038  1796  2454 D ActivityManager: getProcessesInErrorState callingUid=10452, CallingPid=26725
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:897:06-2
8 21:40:00.114  1796  4725 V WifiService: Keeping REDACT_FOR_ACCESS_FINE_LOCATION:java.lang.SecurityException: UID 10155 has no 
location permission
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:901:06-2
8 21:40:00.116  1796  4725 V WifiService: Keeping REDACT_FOR_ACCESS_FINE_LOCATION:java.lang.SecurityException: UID 10155 has no 
location permission
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:905:06-2
8 21:40:00.119  1796  4725 V WifiService: Keeping REDACT_FOR_ACCESS_FINE_LOCATION:java.lang.SecurityException: UID 10155 has no 
location permission
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:966:06-2
8 21:40:00.539  1796  4657 D ActivityManager: getProcessesInErrorState callingUid=10452, CallingPid=26725
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:983:06-2
8 21:40:00.608  1796  1968 E JobScheduler.Concurrency: Error executing JobStatus{329803e #u0a458/784194378 
com.radiolight.malaisie/com.startapp.sdk.jobs.SchedulerService u=0 s=10458 TIME=-1d8h20m51s167ms:-1d7h8m51s167ms NET PERIODIC 
PERSISTED READY}
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:987:06-2
8 21:40:00.613  1796  1968 E JobScheduler.Concurrency: Error executing JobStatus{bee8c7d #u0a270/-1198051381 
cn.wps.moffice_eng/com.google.android.datatransport.runtime.scheduling.jobscheduling.JobInfoSchedulerService u=0 s=10270 
TIME=-2d3h23m58s367ms:none NET READY}
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:991:06-2
8 21:40:00.619  1796  1968 E JobScheduler.Concurrency: Error executing JobStatus{2778417 #u0a270/-1198051381 
cn.wps.moffice_eng/com.google.android.datatransport.runtime.scheduling.jobscheduling.JobInfoSchedulerService u=0 s=10270 
TIME=-2d3h24m5s558ms:none NET READY}
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:995:06-2
8 21:40:00.624  1796  1968 E JobScheduler.Concurrency: Error executing JobStatus{bd5bff9 
androidx.work.systemjobscheduler:u0a257/223217 
@androidx.work.systemjobscheduler@com.instagram.android/androidx.work.impl.background.systemjob.SystemJobService u=0 s=10257 
TIME=-45m55s610ms:none NET READY}
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:999:06-2
8 21:40:00.627  1796  1968 E JobScheduler.Concurrency: Error executing JobStatus{588598 #u0a252/-242208714 
com.bukalapak.mitra/com.google.android.datatransport.runtime.scheduling.jobscheduling.JobInfoSchedulerService u=0 s=10252 
TIME=-6h35m20s710ms:none NET READY}
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:1004:06-
28 21:40:00.631  1796  1968 E JobScheduler.Concurrency: Error executing JobStatus{72c02b4 #u0a467/2095721313 
id.dana/com.google.android.datatransport.runtime.scheduling.jobscheduling.JobInfoSchedulerService u=0 s=10467 TIME=-25m24s62ms:none 
NET READY}
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:1065:06-
28 21:40:01.041  1796  2454 D ActivityManager: getProcessesInErrorState callingUid=10452, CallingPid=26725
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:1074:06-
28 21:40:01.543  1796  2454 D ActivityManager: getProcessesInErrorState callingUid=10452, CallingPid=26725
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:1078:06-
28 21:40:01.834 29094  6804 D ProfileInstaller: Installing profile for com.erbete.customer
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:1099:06-
28 21:40:02.045  1796  2454 D ActivityManager: getProcessesInErrorState callingUid=10452, CallingPid=26725
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:1119:06-
28 21:40:02.162  1032  1032 I BufferQueueProducer: 
[SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity](BLAST)#18934](this:0xb40000744ea2eef8,id:-1,api:0,p:-1,c:1032) 
queueBuffer: fps=1.09 dur=2764.01 max=2581.20 min=83.04
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:1133:06-
28 21:40:02.547  1796  2929 D ActivityManager: getProcessesInErrorState callingUid=10452, CallingPid=26725
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:1148:06-
28 21:40:03.048  1796  2929 D ActivityManager: getProcessesInErrorState callingUid=10452, CallingPid=26725
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:1149:06-
28 21:40:03.461  1032  1032 I BufferQueueProducer: 
[SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity](BLAST)#18934](this:0xb40000744ea2eef8,id:-1,api:0,p:-1,c:1032) 
queueBuffer: fps=0.77 dur=1298.50 max=1298.50 min=1298.50
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:1173:06-
28 21:40:03.498  1796  2929 D CoreBackPreview: Window{c2233e0 u0 com.erbete.customer/com.erbete.customer.MainActivity}: Setting 
back callback OnBackInvokedCallbackInfo{mCallback=android.window.IOnBackInvokedCallback$Stub$Proxy@47d0002, mPriority=0, 
mIsAnimationCallback=true}
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:1185:06-
28 21:40:03.550  1796  2929 D ActivityManager: getProcessesInErrorState callingUid=10452, CallingPid=26725
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:1202:06-
28 21:40:03.716  1796  2929 D CoreBackPreview: Window{c2233e0 u0 com.erbete.customer/com.erbete.customer.MainActivity}: Setting 
back callback OnBackInvokedCallbackInfo{mCallback=android.window.IOnBackInvokedCallback$Stub$Proxy@50c2103, mPriority=-1, 
mIsAnimationCallback=false}
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:1217:06-
28 21:40:03.848   963  1060 I libPowerHal: [perfNotifyAppState] pack:com.erbete.customer, act:com.erbete.customer.MainActivity, 
state:5, pid:29094, uid:10502, fps:60
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:1218:06-
28 21:40:03.849   963  1060 I UxUtility: notifyForegroundApp pack:com.erbete.customer, uid:10502
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:1219:06-
28 21:40:03.849   963  1060 I TouchUtility: notifyAppState error = NULL
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:1221:06-
28 21:40:03.957  1796  1877 W BatteryExternalStatsWorker: error reading Bluetooth stats: 9
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:1223:06-
28 21:40:03.980 29094 29094 I flutter : **-FireStoreUtils.getSection Parse error type 'Null' is not a subtype of type 'Map<String, 
dynamic>'
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:1224:06-
28 21:40:03.981 29094 29094 I flutter : **-FireStoreUtils.getSection Parse error type 'Null' is not a subtype of type 'Map<String, 
dynamic>'
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:1225:06-
28 21:40:03.981 29094 29094 I flutter : **-FireStoreUtils.getSection Parse error type 'Null' is not a subtype of type 'Map<String, 
dynamic>'
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:1226:06-
28 21:40:03.981 29094 29094 I flutter : **-FireStoreUtils.getSection Parse error type 'Null' is not a subtype of type 'Map<String, 
dynamic>'
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:1227:06-
28 21:40:03.981 29094 29094 I flutter : **-FireStoreUtils.getSection Parse error type 'Null' is not a subtype of type 'Map<String, 
dynamic>'
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:1228:06-
28 21:40:03.981 29094 29094 I flutter : **-FireStoreUtils.getSection Parse error type 'Null' is not a subtype of type 'Map<String, 
dynamic>'
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:1229:06-
28 21:40:03.982 29094 29094 I flutter : **-FireStoreUtils.getSection Parse error type 'Null' is not a subtype of type 'Map<String, 
dynamic>'
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:1230:06-
28 21:40:03.982 29094 29094 I flutter : **-FireStoreUtils.getSection Parse error type 'Null' is not a subtype of type 'Map<String, 
dynamic>'
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:1233:06-
28 21:40:04.051  1796  2929 D ActivityManager: getProcessesInErrorState callingUid=10452, CallingPid=26725
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:1254:06-
28 21:40:04.476  1032  1032 I BufferQueueProducer: 
[SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity](BLAST)#18934](this:0xb40000744ea2eef8,id:-1,api:0,p:-1,c:1032) 
queueBuffer: fps=51.21 dur=1015.36 max=83.06 min=16.12
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:1257:06-
28 21:40:04.553  1796  4725 D ActivityManager: getProcessesInErrorState callingUid=10452, CallingPid=26725
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:1273:06-
28 21:40:04.884  1132  1132 I adbd    : adbd service requested 'shell,v2,TERM=xterm-256color,raw:uiautomator dump 
/sdcard/customer_home_after_sections_order_patch_dump.xml'
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:1280:06-
28 21:40:05.055  1796  2454 D ActivityManager: getProcessesInErrorState callingUid=10452, CallingPid=26725
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:1334:06-
28 21:40:05.276  1032  1032 I BufferQueueProducer: 
[com.erbete.customer/com.erbete.customer.MainActivity#18929](this:0xb40000744ea59a68,id:-1,api:0,p:-1,c:1032) queueBuffer: fps=0.18 
dur=5659.43 max=5659.43 min=5659.43
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:1343:06-
28 21:40:05.557  1796  4657 D ActivityManager: getProcessesInErrorState callingUid=10452, CallingPid=26725
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:1355:06-
28 21:40:05.848   963  1060 I libPowerHal: [perfNotifyAppState] pack:com.erbete.customer, act:com.erbete.customer.MainActivity, 
state:5, pid:29094, uid:10502, fps:-1
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:1356:06-
28 21:40:05.851   963  1060 I UxUtility: notifyForegroundApp pack:com.erbete.customer, uid:10502
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:1357:06-
28 21:40:05.851   963  1060 I TouchUtility: notifyAppState error = NULL
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:1366:06-
28 21:40:06.060  1796  4657 D ActivityManager: getProcessesInErrorState callingUid=10452, CallingPid=26725
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:1404:06-
28 21:40:06.442  1032  1032 I BufferQueueProducer: 
[SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity](BLAST)#18934](this:0xb40000744ea2eef8,id:-1,api:0,p:-1,c:1032) 
queueBuffer: fps=5.60 dur=1965.28 max=1165.89 min=16.06
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:1417:06-
28 21:40:06.457  1032  1032 I BufferQueueProducer: 
[com.erbete.customer/com.erbete.customer.MainActivity#18929](this:0xb40000744ea59a68,id:-1,api:0,p:-1,c:1032) queueBuffer: fps=0.85 
dur=1181.92 max=1181.92 min=1181.92
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:1458:06-
28 21:40:06.563  1796  4242 D ActivityManager: getProcessesInErrorState callingUid=10452, CallingPid=26725
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:1480:06-
28 21:40:07.064  1796  4242 D ActivityManager: getProcessesInErrorState callingUid=10452, CallingPid=26725
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:1523:06-
28 21:40:07.535  1132  1132 I adbd    : adbd service requested 'shell,v2,TERM=xterm-256color,raw:screencap -p 
/sdcard/customer_home_after_sections_order_patch.png'
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:1524:06-
28 21:40:07.566  1796  4242 D ActivityManager: getProcessesInErrorState callingUid=10452, CallingPid=26725
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:1561:06-
28 21:40:08.068  1796  2929 D ActivityManager: getProcessesInErrorState callingUid=10452, CallingPid=26725
C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_home_after_sections_order_patch_logcat.txt:1613:06-
28 21:40:08.273  4428  4428 D mol_MolService.run(L:134): ----MolService focused pkg:com.erbete.customer, 
cmp:com.erbete.customer.MainActivity, curType:SCENE_UNKOWN, molAlive:true, asAlive:false, asCrashed:false, imeVis:false, 
this:com.transsion.mol.service.MolService@5a1db7b



```

## Final Status

STATUS: CUSTOMER_HOME_AFTER_SECTIONS_ORDER_PATCH_CHECKED