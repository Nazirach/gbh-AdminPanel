# SERVICE 54D-FIX1 CUSTOMER FOCUSED RED SCREEN TRACE

Generated: 07/02/2026 17:46:09
Mode: READ ONLY.
Reason: 54D captured Android system transition logs, not Flutter widget stack trace.
Target visual bug: Simo Market -> Fruits (4) red screen: Null check operator used on a null value.

## Focused Flutter Runtime Trace
TEXT_START

  07-02 17:46:10.807 D/InetDiagMessage( 1698): Destroyed 0 sockets, proto=IPPROTO_TCP, family=AF_INET, states=14
  07-02 17:46:10.807 I/SmartPanelService( 4503): onTaskFocusChanged taskId: 48210  focused: false
  07-02 17:46:10.807 D/ActivityTaskManager( 1698): TaskProcess findExitInfoForRecentProcess mLastIndex#=0 mTrackPid= 11190
  07-02 17:46:10.808 D/ActivityTaskManager( 1698): TaskProcess clear proc= 11190
  07-02 17:46:10.808 D/TaskProcess( 1698): TaskProcess clearRealTask removeTask#=false mLastIndex= 0
  07-02 17:46:10.808 D/SceneController( 4503): checkCanShow canShow: true  changed false 
> 07-02 17:46:10.808 D/os.fingerprint( 1698): onTaskMovedToFront Task{c40922d #5 type=home 
I=com.transsion.XOSLauncher/com.android.launcher3.uioverrides.QuickstepLauncher}
  07-02 17:46:10.808 D/os.fingerprint( 1698): activityComponent = 
ComponentInfo{com.transsion.XOSLauncher/com.android.launcher3.uioverrides.QuickstepLauncher} inMultiWindow = false
  07-02 17:46:10.808 D/InetDiagMessage( 1698): Destroyed 0 sockets, proto=IPPROTO_TCP, family=AF_INET6, states=14
  07-02 17:46:10.808 D/InetDiagMessage( 1698): Destroyed live tcp sockets for uids={20509} in 3ms
  07-02 17:46:10.808 I/PowerHalWrapper( 1698): <amsBoostResume> last:null, next:com.transsion.XOSLauncherhasATProcess:true 
  07-02 17:46:10.809 I/libPowerHal(  970): MTKPOWER_HINT_LAUNCHER_ANIMA: set gpu opp level max: 0
  07-02 17:46:10.809 D/os.fingerprint( 1698): onActivityResume next:ActivityRecord{40e8ac u0 
com.transsion.XOSLauncher/com.android.launcher3.uioverrides.QuickstepLauncher t5}
  07-02 17:46:10.809 D/os.fingerprint( 1698): activityComponent = 
ComponentInfo{com.transsion.XOSLauncher/com.android.launcher3.uioverrides.QuickstepLauncher} inMultiWindow = false
  07-02 17:46:10.809 D/AppLockLice( 1698): onActivityResume: packageName = com.transsion.XOSLauncher,mComeLockPkgList =[],mPreLockPkgList =[]
  07-02 17:46:10.809 D/AppLockLice( 1698): onActivityResume:isAwake = true ,isKeyguardLocked = false
  07-02 17:46:10.809 I/libPowerHal(  970): [setGPUFreq] Soft min/max = (0, 0); Hard min/max = (44, 0)
  07-02 17:46:10.809 I/libPowerHal(  970): [setGPUFreq] final min/max = (0, 0)
  07-02 17:46:10.809 I/libPowerHal(  970): MTKPOWER_HINT_LAUNCHER_ANIMA: set gpu opp level: 0
  07-02 17:46:10.809 I/Usf/appStateManager( 1698): handleUpdateTaskOverLap uid: 10196    packageName:com.transsion.XOSLauncher remove
  07-02 17:46:10.809 I/libPowerHal(  970): MTKPOWER_HINT_LAUNCHER_ANIMA: set gpu opp level max: 0
  07-02 17:46:10.809 D/uas-service( 1219): thread(pid=2371) com.transsion.XOSLauncher is uxtag 0x440 ref 0
  07-02 17:46:10.810 I/mtkpower_client( 1698): perf_cus_lock_hint, ret_hdl:55981
  07-02 17:46:10.810 I/libPowerHal(  970): [thermal ux] update cluster0 to freqToSet:2000000 maxToSet:2000000
  07-02 17:46:10.810 I/PowerHalMgrImpl( 1698): hdl:55981, pid:1698 
  07-02 17:46:10.810 D/uas-service( 1219): thread(pid=2773) com.transsion.XOSLauncher is uxtag 0x440 ref 0
  07-02 17:46:10.810 I/Hiber/fastState( 1698): do fastFreeze reason=cpuboost
  07-02 17:46:10.810 W/Hiber/fastState( 1698): uid=10131 is default-app
  07-02 17:46:10.810 W/Hiber/fastState( 1698): uid=10271 is pending
  07-02 17:46:10.810 W/Hiber/fastState( 1698): uid=10205 is default-app
  07-02 17:46:10.810 D/os.fingerprint( 1698): onUpdateFocusedApp oldPackageName:null oldComponent:null newPackageName:com.transsion.XOSLauncher 
newComponent:ComponentInfo{com.transsion.XOSLauncher/com.android.launcher3.uioverrides.QuickstepLauncher} mFm 
:android.hardware.fingerprint.FingerprintManager@9e3d33b
  07-02 17:46:10.811 I/TranSCSourceConnectManagerImpl( 1698): hookDisplayResumedActivityChanged displayId: 0 packageName: com.transsion.XOSLauncher
  07-02 17:46:10.811 D/tranpm/BehaviorManager( 1698):  onAppLaunch nextPackName = com.transsion.XOSLauncher currPackName = com.erbete.customer
> 07-02 17:46:10.811 I/PowerHalWrapper( 1698): amsBoostNotify pid:2371,activity:com.android.launcher3.uioverrides.QuickstepLauncher, 
package:com.transsion.XOSLauncher, mProcessCreatePackcom.erbete.customer 
  07-02 17:46:10.811 I/PowerHalWrapper( 1698): state: 1 
  07-02 17:46:10.811 I/libPowerHal(  970): [thermal ux] update cluster1 to freqToSet:2200000 maxToSet:2200000
  07-02 17:46:10.811 D/TranCPUBooster( 1698): [setAffinity] Pid:1012 mask:6-7
  07-02 17:46:10.811 I/Process ( 1698): String at 0: 0x767a2b0601 = ProcessCapacityNormal
  07-02 17:46:10.811 I/mtkpower_client( 1698): [PowerHal_Wrap_notifyAppState] 
com.transsion.XOSLauncher/com.android.launcher3.uioverrides.QuickstepLauncher pid=2371 activityId:4253868 state:1
  07-02 17:46:10.812 D/aegean_TranRecentTasksProxy( 1698): FW_getTasks=3
  07-02 17:46:10.812 I/mtkpower_client( 1698): [Legacy][PowerHal_Wrap_notifyAppState] 
com.transsion.XOSLauncher/com.android.launcher3.uioverrides.QuickstepLauncher pid=2371 state:4253868
  07-02 17:46:10.812 I/tranpm/Preloader( 1698): preload error: preloadList is null.
  07-02 17:46:10.812 I/tranpm/Preloader( 1698): preload start activity result: null
  07-02 17:46:10.812 I/Hiber/nativeServiceClient( 1698): check binder uid=10098
  07-02 17:46:10.812 I/PowerHalWrapper( 1698): amsBoostNotify AMS_BOOST_PROCESS_CREATE_BOOST:false 
  07-02 17:46:10.812 I/libPowerHal(  970): [setClusterFreq] MTKPOWER_HINT_LAUNCHER_ANIMA: sysfs_freq set cpu freq: 2000000 -1 2200000 -1 
  07-02 17:46:10.812 I/libPowerHal(  970): [setClusterHardFreq] MTKPOWER_HINT_LAUNCHER_ANIMA: hard userlimit set cpu freq: -1 -1 -1 -1
  07-02 17:46:10.812 D/TranCPUBooster( 1698): [setAffinity] Pid:1098 mask:5-7
  07-02 17:46:10.813 I/libPowerHal(  970): [thermal ux] update cluster0 to freqToSet:2000000 maxToSet:2000000
  07-02 17:46:10.813 E/TranCPUBooster( 1698): setTranSchedUxTags fail tid: 2423 threadName: wmshell.anim
  07-02 17:46:10.813 I/System.out( 1698): [scale_ufs_gear] pakname is not antutu: com.transsion.XOSLauncher, file is not exist: false
  07-02 17:46:10.813 D/MagellanHandle( 1698): updateRefreshRateForSceneVsyncs what = 23
  07-02 17:46:10.813 I/SmartPanelService( 4503): onTaskFocusChanged taskId: 5  focused: true
  07-02 17:46:10.813 D/os.fingerprint( 1698): onActivityResume next:ActivityRecord{40e8ac u0 
com.transsion.XOSLauncher/com.android.launcher3.uioverrides.QuickstepLauncher t5}
  07-02 17:46:10.819 I/MultiWindowUtils( 4503): pkg in multi window
  07-02 17:46:10.820 I/TranTp/TranTpSwitchManagerImpl( 1698): Set [com.transsion.XOSLauncher] is tp rate as default.
  07-02 17:46:10.820 D/TranTp/TranTpSwitchManagerImpl( 1698): sendCommand: rate=0, cmd=echo 0 > /proc/report_rate_switch.
  07-02 17:46:10.820 D/TranAppm/SystemMonitor( 1698): the app is not in the whitelist 
  07-02 17:46:10.820 D/PowerManagerService( 1698): onAppLaunch: currentPackage=com.erbete.customer, nextPackage=com.transsion.XOSLauncher.
  07-02 17:46:10.820 I/Hiber/nativeServiceClient( 1698): check binder uid=10254
> 07-02 17:46:10.820 V/WindowManagerShell( 2380): Transition requested (#1232): android.os.BinderProxy@3975b58 TransitionRequestInfo { type = CLOSE, 
triggerTask = TaskInfo{userId=0 taskId=48210 displayId=0 isRunning=false baseIntent=Intent { act=android.intent.action.MAIN 
cat=[android.intent.category.LAUNCHER] flg=0x10200000 cmp=com.erbete.customer/.MainActivity } baseActivity=null topActivity=null origActivity=null 
realActivity=ComponentInfo{com.erbete.customer/com.erbete.customer.MainActivity} numActivities=0 lastActiveTime=179621819 supportsMultiWindow=true 
resizeMode=1 isResizeable=true minWidth=-1 minHeight=-1 defaultMinSize=110 token=WCT{android.window.IWindowContainerToken$Stub$Proxy@356e4b1} 
topActivityType=1 pictureInPictureParams=null shouldDockBigOverlays=false launchIntoPipHostTaskId=-1 lastParentTaskIdBeforePip=-1 
displayCutoutSafeInsets=null topActivityInfo=null launchCookies=[] positionInParent=Point(0, 0) parentTaskId=-1 isFocused=true isVisible=true 
isVisibleRequested=true isSleeping=false locusId=null displayAreaFeatureId=1 isTopActivityTransparent=false appCompatTaskInfo=AppCompatTaskInfo { 
topActivityInSizeCompat=false topActivityEligibleForLetterboxEducation= falseisLetterboxEducationEnabled= false isLetterboxDoubleTapEnabled= false 
topActivityEligibleForUserAspectRatioButton= false topActivityBoundsLetterboxed= false isFromLetterboxDoubleTap= false 
topActivityLetterboxVerticalPosition= -1 topActivityLetterboxHorizontalPosition= -1 topActivityLetterboxWidth=-1 topActivityLetterboxHeight=-1 
isUserFullscreenOverrideEnabled=false isSystemFullscreenOverrideEnabled=false cameraCompatTaskInfo=CameraCompatTaskInfo { cameraCompatControlState=hidden 
freeformCameraCompatMode=inactive}}}, pipTask = null, remoteTransition = null, displayChange = null, flags = 0, debugId = 1232 }
  07-02 17:46:10.820 W/System.err( 1698): java.io.FileNotFoundException: /proc/report_rate_switch: open failed: ENOENT (No such file or directory)
  07-02 17:46:10.820 W/System.err( 1698): 	at libcore.io.IoBridge.open(IoBridge.java:574)
  07-02 17:46:10.820 W/System.err( 1698): 	at java.io.FileOutputStream.<init>(FileOutputStream.java:259)
  07-02 17:46:10.820 W/System.err( 1698): 	at java.io.FileOutputStream.<init>(FileOutputStream.java:147)
  07-02 17:46:10.820 W/System.err( 1698): 	at com.transsion.server.tpswitch.TranTpSwitchManagerImpl.sendCommand(TranTpSwitchManagerImpl.java:311)
  07-02 17:46:10.820 W/System.err( 1698): 	at com.transsion.server.tpswitch.TranTpSwitchManagerImpl.setDefaultTpRate(TranTpSwitchManagerImpl.java:267)
  07-02 17:46:10.820 W/System.err( 1698): 	at com.transsion.server.tpswitch.TranTpSwitchManagerImpl.setTpRate(TranTpSwitchManagerImpl.java:293)
  07-02 17:46:10.820 W/System.err( 1698): 	at com.transsion.server.tpswitch.TranTpSwitchManagerImpl.-$$Nest$msetTpRate(TranTpSwitchManagerImpl.java:0)
  07-02 17:46:10.820 W/System.err( 1698): 	at com.transsion.server.tpswitch.TranTpSwitchManagerImpl$1.onAppLaunch(TranTpSwitchManagerImpl.java:93)
  07-02 17:46:10.820 W/System.err( 1698): 	at com.transsion.griffin.core.HookerImpl$b.run(SourceFile:1)
  07-02 17:46:10.820 W/System.err( 1698): 	at android.os.Handler.handleCallback(Handler.java:959)
  07-02 17:46:10.820 W/System.err( 1698): 	at android.os.Handler.dispatchMessage(Handler.java:100)
  07-02 17:46:10.820 W/System.err( 1698): 	at android.os.Looper.loopOnce(Looper.java:311)
  07-02 17:46:10.820 W/System.err( 1698): 	at android.os.Looper.loop(Looper.java:408)
  07-02 17:46:10.820 W/System.err( 1698): 	at android.os.HandlerThread.run(HandlerThread.java:85)
  07-02 17:46:10.820 W/System.err( 1698): Caused by: android.system.ErrnoException: open failed: ENOENT (No such file or directory)
  07-02 17:46:10.820 W/System.err( 1698): 	at libcore.io.Linux.open(Native Method)
  07-02 17:46:10.820 W/System.err( 1698): 	at libcore.io.ForwardingOs.open(ForwardingOs.java:579)
  07-02 17:46:10.820 W/System.err( 1698): 	at libcore.io.BlockGuardOs.open(BlockGuardOs.java:274)
  07-02 17:46:10.820 W/System.err( 1698): 	at libcore.io.IoBridge.open(IoBridge.java:560)
  07-02 17:46:10.820 W/System.err( 1698): 	... 13 more
  07-02 17:46:10.825 I/TranSCSourceConnectManagerImpl( 1698): hookDisplayResumedActivityChanged displayId: 0 packageName: com.transsion.XOSLauncher
  07-02 17:46:10.825 I/TranSuccCrashMgr( 1698): Post key event: type=0, 
event=wm_resume_activity0,0,com.transsion.XOSLauncher/com.android.launcher3.uioverrides.QuickstepLauncher, ext=null
  07-02 17:46:10.825 D/TranPhoneWindowManagerInternal( 1698): onActivityResume false
  07-02 17:46:10.827 D/NotificationUtil(23882): data = CriticalCrashModel{, appPackageName='com.erbete.customer', appVersionName='1.0.0', 
crashSummary='r=USER_REQUESTED sr=FORCE_STOP im=FOREGROUND d=[FORCE STOP] stop com.erbete.customer due to from pid 23995', timeStamp='1782989170789', 
firstTimeStamp='1782989170789', appInstaller='unk', appInstallTime='1782987523515', adjInfo='null', exceptionType='exit', extraInformation='null', 
reservedOne='null', reservedTwo='null', crashFrequency=1, crashAverageTime=0, causeByApp=1} adj = 0
  07-02 17:46:10.828 I/TranWallpaperServiceCommon( 2536): tran engine resume 0,livewallpaper_theme.json,this=b3.a$b@9131b3f
> 07-02 17:46:10.828 I/Launcher( 2371): onStart##15.6.2.066#@@#150602066
  07-02 17:46:10.829 D/TrLauncher( 2371): onResume: -----
  07-02 17:46:10.830 D/SurfaceComposerClient( 1698): Transaction::apply InputWindowCommands.focusRequests timestamp=162751962407777, windowName=<null>
  07-02 17:46:10.831 D/ActivityTaskManager_Recents( 1698): 	excludeFromRecents=true, taskIndex = 3, isOnHomeDisplay: false, isAnimatingByRecents: false
  07-02 17:46:10.831 D/ActivityTaskManager_Recents( 1698): Skipping, not in visible range taskId: 48211
  07-02 17:46:10.831 I/WallpaperService( 2536): engine resumed
  07-02 17:46:10.832 I/AndroidInput( 2536): sensor listener setup
  07-02 17:46:10.832 D/ActivityTaskManager_Recents( 1698): Skipping, unavail real act mTaskId: 45172
  07-02 17:46:10.832 D/ActivityTaskManager_Recents( 1698): 	excludeFromRecents=true, taskIndex = 11, isOnHomeDisplay: false, isAnimatingByRecents: false
  07-02 17:46:10.832 D/ActivityTaskManager_Recents( 1698): Skipping, not in visible range taskId: 36443
  07-02 17:46:10.832 D/SmartEventManager( 4503): dispatchEvent event: SmartEvent(action=activity_check, extras=Bundle[{is_activity_check=true}])
  07-02 17:46:10.832 D/ShellEventHandler( 2380): onPostRequestStartTransition CLOSE token=android.os.BinderProxy@3975b58
  07-02 17:46:10.832 I/SmartPanelRepository( 4503): hasLoadData true  data size = 12
  07-02 17:46:10.833 D/tranpm/OomadjPolicy( 1698): down oomadj(visible): os process (com.transsion.sru), rss=74MB, recent binderservice time > 5min
  07-02 17:46:10.833 D/tranpm/OomadjPolicy( 1698): down oomadj(visible): os process (com.transsion.mol), rss=88MB, recent binderservice time > 5min
  07-02 17:46:10.835 D/SceneController( 4503): checkCanShow canShow: true  changed false 
  07-02 17:46:10.835 I/DynamicUpdater( 2371): startClockTimer: not start clock timer
> 07-02 17:46:10.836 D/ActivityThread( 2371): handleResumeActivity#3 r.window=com.android.internal.policy.PhoneWindow@164e2ea.mFinished = 
falsewillBeVisible = true
  07-02 17:46:10.836 D/uas-service( 1219): thread(pid=2724) ux_exact_launcher_anim is uxtag 0x100440 ref 0x2
  07-02 17:46:10.836 D/SurfaceFlinger( 1012): Focus addInputWindowCommands timestamp=162751962407777, windowName=<null>
  07-02 17:46:10.837 I/BpBinder( 1012): onLastStrongRef automatically unlinking death recipients: 
  07-02 17:46:10.837 D/ClockWakeHelper( 2371): tryWakeClock, LastClockWakeTime: 1782989015269
  07-02 17:46:10.838 I/hwcomposer(  935): [HWCDisplay] [Display_0 (type:1)] fps:0.116540,dur:8580.75,max:8580.75,min:8580.75  
  07-02 17:46:10.840 D/SurfaceFlinger( 1012): updateWinowInfo=1, setFocusedWindow timestamp=162751962407777, windowName=<null>
  07-02 17:46:10.840 I/TranThermalBacklightCtrl( 1698): cur package [com.transsion.XOSLauncher] is in TemperatureControlWhitelist
  07-02 17:46:10.840 I/TranThermalBacklightCtrl( 1698): mParamAPTempHigh[0]=43.0, mParamAPTempLow[0]=41.0, mParamBrightnessMax[0]=0.79999995, 
mParamLuxLimit[0]=2000.0
  07-02 17:46:10.840 I/TranThermalBacklightCtrl( 1698): mParamAPTempHigh[1]=46.0, mParamAPTempLow[1]=44.0, mParamBrightnessMax[1]=0.65, 
mParamLuxLimit[1]=2000.0
  07-02 17:46:10.840 I/TranThermalBacklightCtrl( 1698): mParamAPTempHigh[2]=49.0, mParamAPTempLow[2]=47.0, mParamBrightnessMax[2]=0.5, 
mParamLuxLimit[2]=2000.0
> 07-02 17:46:10.841 I/BufferQueueDebug( 1012): 
[com.transsion.XOSLauncher/com.android.launcher3.uioverrides.QuickstepLauncher#19910](this:0xb40000731f5ed698,id:-1,api:0,p:-1,c:-1) BufferQueue 
core=(1012:/system/bin/surfaceflinger)
  07-02 17:46:10.841 D/uas-service( 1219): thread(pid=2726) ux_exact_launcher_anim is uxtag 0x100440 ref 0x2
  07-02 17:46:10.843 D/WindowManager( 1698): currentFocusId -1 newFocusId: 0 currentFocusIsMultiWindow: false newFocusIsMultiWindow: false
  07-02 17:46:10.844 I/SimpleEventAdapt( 3928): onActivityEvent get com.transsion.XOSLauncher, com.android.launcher3.uioverrides.QuickstepLauncher,true
  07-02 17:46:10.844 I/SimpleEventAdapt( 3928): notifyEvent2  activity_event
  07-02 17:46:10.844 I/SimpleEventAdapt( 3928): notifyEvent  1
  07-02 17:46:10.844 I/SimpleEventAdapt( 3928): onAppForegroundEvent get com.erbete.customer, false
  07-02 17:46:10.844 I/SimpleEventAdapt( 3928): notifyEvent2  app_foreground
  07-02 17:46:10.844 I/SimpleEventAdapt( 3928): notifyEvent  1
  07-02 17:46:10.844 W/WindowManager( 1698): Changing focus from null to Window{ac8a64c u0 
com.transsion.XOSLauncher/com.android.launcher3.uioverrides.QuickstepLauncher} displayId=0 
Callers=com.android.server.wm.RootWindowContainer.updateFocusedWindowLocked:528 com.android.server.wm.WindowManagerService.updateFocusedWindowLocked:6849 
com.android.server.wm.WindowManagerService.relayoutWindowInner:2856 com.android.server.wm.WindowManagerService.relayoutWindow:2515 
  07-02 17:46:10.844 I/SimpleEventAdapt( 3928): onAppForegroundEvent get com.transsion.XOSLauncher, true
  07-02 17:46:10.844 I/SimpleEventAdapt( 3928): notifyEvent2  app_foreground
  07-02 17:46:10.844 I/SimpleEventAdapt( 3928): notifyEvent  1
> 07-02 17:46:10.845 I/BufferQueueDebug( 1012): [Surface(name=174f644 NavigationBar0)/@0x46ac9dc - animation-leash of 
insets_animation#19911](this:0xb40000731f5ba278,id:-1,api:0,p:-1,c:-1) BufferQueue core=(1012:/system/bin/surfaceflinger)
  07-02 17:46:10.845 I/CacheManager( 3928):  save new data to cache activity_event
  07-02 17:46:10.846 I/bsc     ( 3928): notifyDataChange in activity_event, 1
> 07-02 17:46:10.846 I/BufferQueueDebug( 1012): [Surface(name=f48663c StatusBar)/@0x8eec4a5 - animation-leash of 
insets_animation#19912](this:0xb40000731f5a0868,id:-1,api:0,p:-1,c:-1) BufferQueue core=(1012:/system/bin/surfaceflinger)
  07-02 17:46:10.846 I/DataServiceImplV2( 3928): StandardDataService notifyDataChange  in 
  07-02 17:46:10.847 E/h       ( 2536): will resume, mPause=true,livewallpaper_theme.json
  07-02 17:46:10.847 D/WindowManager( 1698): updateSystemBarAttributes appearance:0, win appearance:0, opaqueAppearance:0, win:Window{ac8a64c u0 
com.transsion.XOSLauncher/com.android.launcher3.uioverrides.QuickstepLauncher}, appearanceRegions=[AppearanceRegion{ bounds=[0,0][1080,2436]}]
  07-02 17:46:10.848 D/TranDisplayJamMonitor( 1698): checkExceptionWindowResult = 1024
  07-02 17:46:10.848 D/TranDisplayJamMonitor( 1698): check display window jam detection:Window{ac8a64c u0 
com.transsion.XOSLauncher/com.android.launcher3.uioverrides.QuickstepLauncher}
  07-02 17:46:10.848 D/TranDisplayJamMonitor( 1698): remove screen rotation animation detection
  07-02 17:46:10.848 I/CacheManager( 3928):  save new data to cache app_foreground
  07-02 17:46:10.848 I/bsc     ( 3928): notifyDataChange in app_foreground, 1
  07-02 17:46:10.848 I/DataServiceImplV2( 3928): StandardDataService notifyDataChange  in 
  07-02 17:46:10.848 I/WindowManager( 1698): Relayout Window{ac8a64c u0 com.transsion.XOSLauncher/com.android.launcher3.uioverrides.QuickstepLauncher}: 
oldVis=8 newVis=0 focusMayChange = true requestedWidth = 1080 requestedHeight = 2436 outFrames = ClientWindowFrames{frame=[0,0][1080,2436] 
display=[0,0][1080,2436] parentFrame=[0,0][0,0]} outSurfaceControl = 
Surface(name=com.transsion.XOSLauncher/com.android.launcher3.uioverrides.QuickstepLauncher)/@0x405ec62
  07-02 17:46:10.848 I/CacheManager( 3928):  save new data to cache app_foreground
  07-02 17:46:10.848 I/bsc     ( 3928): notifyDataChange in app_foreground, 1
  07-02 17:46:10.848 I/DataServiceImplV2( 3928): StandardDataService notifyDataChange  in 
  07-02 17:46:10.848 D/h       ( 2536):  resume  isScreenOn=true isLockScreen=false
  07-02 17:46:10.848 D/h       ( 2536):  mLastTopActivity is com.erbete.customer.MainActivity
  07-02 17:46:10.848 D/h       ( 2536): from application to launcher animation
  07-02 17:46:10.848 D/h       ( 2536):  present startAnimation livewallpaper_theme.json
  07-02 17:46:10.849 D/TranLayerControl( 2536): startAnimation aod status is APPLICATION_TO_LAUNCHER
  07-02 17:46:10.849 E/gold/aod/aodGold.atlas( 2536): aodStatus APPLICATION_TO_LAUNCHER isFinish:false,current alpha 0.0
  07-02 17:46:10.849 E/gold/aod/aodGold.atlas( 2536): anim null,after animation aodStatus APPLICATION_TO_LAUNCHER,alpha 0.0
  07-02 17:46:10.849 I/Kolun_AI( 3928): SystemEventSubscribe: onPublishData {"type":"activity_event","time":1782989170845,"data":"{\"className\":\"com.andr
oid.launcher3.uioverrides.QuickstepLauncher\",\"isResumed\":true,\"packageName\":\"com.transsion.XOSLauncher\"}","provider":"dc","dc_version":2030380000,"d
ata_version":1,"user_id":0}
  07-02 17:46:10.849 I/Kolun_AI( 3928): SystemEventSubscribe: publisher.getMatcher() activity_event
  07-02 17:46:10.850 D/BufferQueueConsumer( 2371): [](id:943000000e4,api:0,p:-1,c:2371) connect: controlledByApp=false
  07-02 17:46:10.850 D/PictureInPicture( 2380): setLauncherKeepClearAreaHeight: visible=true, height=240
  07-02 17:46:10.850 I/ApiInvoke1.7.1( 3928): SubscribeManager: publishData success host DataCenter#StandardDataService matcher activity_event
  07-02 17:46:10.850 W/ApiInvoke1.7.1( 3928): SubscribeBusServerImpl: onSafePublishData start ==>> publisher Publisher{channel='DataCenter', 
apiName='StandardDataService', label='activity_event'}
> 07-02 17:46:10.850 D/BLASTBufferQueue( 2371): [VRI[QuickstepLauncher]#224](f:0,a:0) constructor()
> 07-02 17:46:10.850 D/BLASTBufferQueue( 2371): [VRI[QuickstepLauncher]#224](f:0,a:0) update width=1080 height=2436 format=-2 mTransformHint=0
  07-02 17:46:10.850 W/ApiInvoke1.7.1( 3928): SubscribeBusServerImpl: onSafePublishData, post publish data form DataCenter to {"pid": "3928","process": 
"com.transsion.kolun.aiservice","packageName": "com.transsion.kolun.aiservice","channels": 
["com.transsion.kolun.aiservice","APPService","AiEngine","GlobalGuideChannel","DataCenter"],"version": "1.7.1"} pid 3928 isPublishLocal true 
isInvalidPublisher false
  07-02 17:46:10.850 W/ApiInvoke1.7.1( 3928): ApiRequest: do publishData to remote activity_event
  07-02 17:46:10.850 I/DataServiceImplV2( 3928): StandardDataService notifyDataChange  curServiceName StandardDataService type:app_foreground
  07-02 17:46:10.851 I/Kolun_AI( 3928): SystemEventSubscribe: onPublishData {"type":"app_foreground","time":1782989170847,"data":"{\"isForeground\":false,\
"packageName\":\"com.erbete.customer\"}","provider":"dc","dc_version":2030380000,"data_version":1,"user_id":0}
  07-02 17:46:10.851 I/Kolun_AI( 3928): SystemEventSubscribe: publisher.getMatcher() app_foreground
  07-02 17:46:10.851 I/Kolun_AI( 3928): SystemEventSubscribeheh:SimpleEventBus post event AppForegroundEvent{mPackageName='com.erbete.customer', 
mIsForeground=false} 1782989170847
  07-02 17:46:10.851 I/BaseDepthController( 2371): setSurface:
  07-02 17:46:10.851 I/BaseDepthController( 2371): 	mWaitingOnSurfaceValidity: false
  07-02 17:46:10.851 I/BaseDepthController( 2371): 	mSurface: 
Surface(name=com.transsion.XOSLauncher/com.android.launcher3.uioverrides.QuickstepLauncher)/@0xf9edde2
  07-02 17:46:10.851 I/ApiInvoke1.7.1( 3928): SubscribeManager: publishData success host DataCenter#StandardDataService matcher app_foreground
  07-02 17:46:10.851 W/ApiInvoke1.7.1( 3928): SubscribeBusServerImpl: onSafePublishData start ==>> publisher Publisher{channel='DataCenter', 
apiName='StandardDataService', label='app_foreground'}
  07-02 17:46:10.851 W/ApiInvoke1.7.1( 3928): SubscribeBusServerImpl: onSafePublishData, post publish data form DataCenter to {"pid": "3928","process": 
"com.transsion.kolun.aiservice","packageName": "com.transsion.kolun.aiservice","channels": 
["com.transsion.kolun.aiservice","APPService","AiEngine","GlobalGuideChannel","DataCenter"],"version": "1.7.1"} pid 3928 isPublishLocal true 
isInvalidPublisher false
  07-02 17:46:10.851 W/ApiInvoke1.7.1( 3928): ApiRequest: do publishData to remote app_foreground
  07-02 17:46:10.851 I/DataServiceImplV2( 3928): StandardDataService notifyDataChange  curServiceName StandardDataService type:app_foreground
  07-02 17:46:10.852 I/Kolun_AI( 3928): SceneIdentify:onBusEvent AppForegroundEvent   com.erbete.customer, false, SceneIdentify
  07-02 17:46:10.852 I/Kolun_AI( 3928): PreventAccidentalTouchScene:mIsSceneIn: false
  07-02 17:46:10.852 I/Kolun_AI( 3928): SceneIdentify:checkShortVideo com.erbete.customer false 
  07-02 17:46:10.852 I/Kolun_AI( 3928): SystemEventSubscribe: onPublishData {"type":"app_foreground","time":1782989170848,"data":"{\"isForeground\":true,\"
packageName\":\"com.transsion.XOSLauncher\"}","provider":"dc","dc_version":2030380000,"data_version":1,"user_id":0}
  07-02 17:46:10.852 I/Kolun_AI( 3928): SceneIdentify:isShortVideoPkg false
  07-02 17:46:10.852 I/Kolun_AI( 3928): SystemEventSubscribe: publisher.getMatcher() app_foreground
  07-02 17:46:10.852 W/ApiInvoke1.7.1( 3928): SubscribeBusServerImpl: onSafePublishData, post publish data form DataCenter to {"pid": "3928","process": 
"com.transsion.kolun.aiservice","packageName": "com.transsion.kolun.aiservice","channels": 
["com.transsion.kolun.aiservice","APPService","AiEngine","GlobalGuideChannel","DataCenter"],"version": "1.7.1"} pid 3928 isPublishLocal true 
isInvalidPublisher false
  07-02 17:46:10.852 W/ApiInvoke1.7.1( 3928): ApiRequest: do publishData to remote app_foreground
  07-02 17:46:10.853 I/AppsFilter( 1698): interaction: PackageSetting{6c145b1 com.ustadmobile.meshrabiya.testapp/10405} -> PackageSetting{a57b1f3 
com.erbete.customer/10509} BLOCKED
  07-02 17:46:10.853 I/AppsFilter( 1698): interaction: PackageSetting{9102617 com.ghalbitnet.meshx2/10532} -> PackageSetting{a57b1f3 
com.erbete.customer/10509} BLOCKED
  07-02 17:46:10.853 I/AppsFilter( 1698): interaction: PackageSetting{4456a04 com.android.microdroid.empty_payload/10232} -> PackageSetting{a57b1f3 
com.erbete.customer/10509} BLOCKED
  07-02 17:46:10.853 I/AppsFilter( 1698): interaction: PackageSetting{af38bed com.example.hotspotmanager/10510} -> PackageSetting{a57b1f3 
com.erbete.customer/10509} BLOCKED
> 07-02 17:46:10.853 I/BufferQueueProducer( 1012): [NavigationBar0#93](this:0xb40000731f567928,id:-1,api:0,p:-1,c:1012) queueBuffer: fps=0.22 
dur=124122.03 max=123655.86 min=15.59
> 07-02 17:46:10.853 I/BufferQueueProducer( 1012): [Wallpaper BBQ wrapper#66](this:0xb40000731f56a6b8,id:-1,api:0,p:-1,c:1012) queueBuffer: fps=0.01 
dur=130281.70 max=130281.70 min=130281.70
  07-02 17:46:10.856 V/WallpaperService( 2536): wallpaperSpringToDimming dimming: 0.08
  07-02 17:46:10.856 D/TranDirector( 2536): resume..livewallpaper_theme.json
  07-02 17:46:10.856 I/AndroidGraphics( 2536): resumed
  07-02 17:46:10.856 I/Kolun_AI( 3928): AIM_AppRecManager:new appEvent AppEvent{pkg=com.erbete.customer startTime=2026-07-02 17:44:00.434 duration=130418}
  07-02 17:46:10.856 I/Kolun_AI( 3928): AIM_AppServiceManager:updateLastOneHourApps: 6 com.erbete.customer
  07-02 17:46:10.857 W/keylau  ( 2536): play finish, index 42,mode NORMAL
  07-02 17:46:10.857 I/BufferQueueProducer( 1012): [VDS-studio.screen.sharing:0 SINK](this:0xb40000725f6b6a38,id:-1,api:1,p:1012,c:1012) queueBuffer: 
fps=0.12 dur=8602.14 max=8602.14 min=8602.14
  07-02 17:46:10.857 D/TranLayerControl( 2536): animation finished layer name is: keylau
  07-02 17:46:10.857 D/h       ( 2536):  present stopAnimation preview = false finish = true
  07-02 17:46:10.857 D/h       ( 2536):  present stopAnimation
  07-02 17:46:10.858 D/SurfaceComposerClient( 1698): Transaction::apply InputWindowCommands.focusRequests timestamp=162751989765931, windowName=ac8a64c 
com.transsion.XOSLauncher/com.android.launcher3.uioverrides.QuickstepLauncher
  07-02 17:46:10.858 E/ApplicationHelper( 1698): Fail to get PackageManager
  07-02 17:46:10.858 E/ApplicationHelper( 1698): Fail to get PackageManager
  07-02 17:46:10.858 E/ApplicationHelper( 1698): Fail to get PackageManager
  07-02 17:46:10.858 E/ApplicationHelper( 1698): Fail to get PackageManager
  07-02 17:46:10.858 E/ApplicationHelper( 1698): Fail to get PackageManager
  07-02 17:46:10.858 E/ApplicationHelper( 1698): Fail to get PackageManager
  07-02 17:46:10.858 E/ApplicationHelper( 1698): Fail to get PackageManager
  07-02 17:46:10.858 E/ApplicationHelper( 1698): Fail to get PackageManager
  07-02 17:46:10.859 I/Kolun_AI( 3928): SceneIdentify:onBusEvent AppForegroundEvent   com.transsion.XOSLauncher, true, SceneIdentify
  07-02 17:46:10.860 I/Kolun_AI( 3928): SceneIdentify:checkGameIn  com.transsion.XOSLauncher, 
  07-02 17:46:10.860 I/Kolun_AI( 3928): SceneIdentify:checkSocialIn  com.transsion.XOSLauncher, 
  07-02 17:46:10.860 I/Kolun_AI( 3928): TipsSceneService:event com.transsion.XOSLauncher
  07-02 17:46:10.861 I/Kolun_AI( 3928): AppPredictManager:onBusEvent com.transsion.XOSLauncher true
  07-02 17:46:10.861 I/Kolun_AI( 3928): AppPredictManager:broadcast curTime: 1782989170861 mLastBroadcastTime: 1782989015336 INTERVAL: 600000
  07-02 17:46:10.863 I/DisplayDeviceRepository( 1698): Display device changed: DisplayDeviceInfo{"Layar Bawaan": uniqueId="local:0", 1080 x 2436, modeId 
2, renderFrameRate 60.000004, defaultModeId 1, userPreferredModeId -1, supportedModes [{id=1, width=1080, height=2436, fps=120.00001, vsync=120.00001, 
synthetic=false, alternativeRefreshRates=[60.0], supportedHdrTypes=[]}, {id=2, width=1080, height=2436, fps=60.0, vsync=60.0, synthetic=false, 
alternativeRefreshRates=[120.00001], supportedHdrTypes=[]}], colorMode 0, supportedColorModes [0, 7, 9], hdrCapabilities 
HdrCapabilities{mSupportedHdrTypes=[], mMaxLuminance=500.0, mMaxAverageLuminance=500.0, mMinLuminance=0.0}, allmSupported false, gameContentTypeSupported 
false, density 480, 392.839 x 392.828 dpi, appVsyncOff 2400001, presDeadline 28600000, cutout DisplayCutout{insets=Rect(0, 108 - 0, 0) 
waterfall=Insets{left=0, top=0, right=0, bottom=0} boundingRect={Bounds=[Rect(0, 0 - 0, 0), Rect(468, 0 - 612, 108), Rect(0, 0 - 0, 0), Rect(0, 0 - 0, 
0)]} cutoutPathParserInfo={CutoutPathParserInfo{displayWidth=1080 displayHeight=2436 physicalDisplayWidth=1080 physicalDisplayHeight=2436 density={3.0} 
cutoutSpec={M -24,0 L -24,36 L 24,36 L 24,0 Z @dp} rotation={0} scale={1.0} physicalPixelDisplaySizeRatio={1.0}}} sideOverrides={}}, touch INTERNAL, 
rotation 0, type INTERNAL, address {port=0}, deviceProductInfo null, state ON, committedState ON, frameRateOverride , brightnessMinimum 0.0, 
brightnessMaximum 1.0, brightnessDefault 0.2, hdrSdrRatio NaN, FLAG_ALLOWED_TO_BE_DEFAULT_DISPLAY, FLAG_ROTATES_WITH_CONTENT, FLAG_SECURE, 
FLAG_SUPPORTS_PROTECTED_BUFFERS, FLAG_TRUSTED, installOrientation 0, displayShape DisplayShape{ spec=596679847 displayWidth=1080 displayHeight=2436 
physicalPixelDisplaySizeRatio=1.0 rotation=0 offsetX=0 offsetY=0 scale=1.0}}
> 07-02 17:46:10.864 D/BLASTBufferQueue( 2371): [VRI[QuickstepLauncher]#224](f:0,a:1) acquireNextBufferLocked size=1080x2436 mFrameNumber=1 
applyTransaction=true mTimestamp=162751997106777(auto) mPendingTransactions.size=0 graphicBufferId=10183367461073 transform=0
  07-02 17:46:10.865 I/StatsLog( 2371): LAUNCHER_ONRESUME
  07-02 17:46:10.865 I/TopTaskTracker( 2371): onTaskMovedToFront: (moved taskInfo to front) taskId=5, baseIntent=Intent { act=android.intent.action.MAIN 
cat=[android.intent.category.HOME] flg=0x10000100 cmp=com.transsion.XOSLauncher/com.android.launcher3.uioverrides.QuickstepLauncher }
  07-02 17:46:10.865 I/Griffin/DeviceState( 1698): virtualDisplayPackageName :{com.android.shell=2000}
  07-02 17:46:10.866 D/os.permission.PermissionInfo( 1698): checkPermission 10196:android.permission.ACCESS_SHORTCUTS:true
  07-02 17:46:10.866 I/os.permission( 1698): Grant permission: android.permission.ACCESS_SHORTCUTS to uid: 10196
  07-02 17:46:10.867 D/NotificationUtil(23882): data = CriticalCrashModel{, appPackageName='com.erbete.customer', appVersionName='1.0.0', 
crashSummary='r=UNKNOWN sr=UNKNOWN im=FOREGROUND d=proc died without state saved', timeStamp='1782989170803', firstTimeStamp='1782988240716', 
appInstaller='unk', appInstallTime='1782987523515', adjInfo='null', exceptionType='exit', extraInformation='null', reservedOne='null', reservedTwo='null', 
crashFrequency=2, crashAverageTime=0, causeByApp=1} adj = -1
  07-02 17:46:10.868 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000000,0.032465,0.000023, totalTime 0.032488 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:46:10.871 D/WindowManager( 1698): System monitor finishDrawingWindow w: Window{ac8a64c u0 
com.transsion.XOSLauncher/com.android.launcher3.uioverrides.QuickstepLauncher}; mDrawState = DRAW_PENDING
  07-02 17:46:10.872 D/h       ( 2536):  hookUpdateRefreshRateForScene finished state =1
  07-02 17:46:10.875 I/FPSGO   ( 1080): fpsgo_boost_sched_idle_prefer:1
  07-02 17:46:10.875 I/mtkpower_client( 1080): perf_lock_acq, hdl:0, dur:0, num:2, tid:1080
  07-02 17:46:10.876 I/DreamAnimation( 1698):  hookAppTransitSuccess called,  mState=8 and doUnlockAnimation=0
  07-02 17:46:10.876 I/mtkpower_client( 1080): ret_hdl:55983
  07-02 17:46:10.876 D/BLASTSyncEngine( 1698): transition TransitionRecord{29f186f id=1232 type=CLOSE flags=0x0} isAuthenticateSucceed false
  07-02 17:46:10.876 I/FPSGO   ( 1080): perfLockAcq hdl:55983
  07-02 17:46:10.876 I/FPSGO   ( 1080): fpsgo_boost_sched_rate_ns:0
  07-02 17:46:10.876 I/mtkpower_client( 1080): perf_lock_acq, hdl:0, dur:0, num:12, tid:1080
  07-02 17:46:10.877 I/Transition( 1698): ignoreThunderbackTransition back= false change= false
  07-02 17:46:10.877 I/libPowerHal(  970): cmdSetting - unknown cmd:1438500, scmd:(null) ,param_1:0
  07-02 17:46:10.877 I/libPowerHal(  970): cmdSetting - unknown cmd:1438800, scmd:(null) ,param_1:0
  07-02 17:46:10.877 I/mtkpower_client( 1080): ret_hdl:55984
> 07-02 17:46:10.877 I/BufferQueueDebug( 1012): [Transition Root: Task=1#19913](this:0xb40000731f5c8648,id:-1,api:0,p:-1,c:-1) BufferQueue 
core=(1012:/system/bin/surfaceflinger)
  07-02 17:46:10.878 I/FPSGO   ( 1080): perfLockAcq hdl:55984
  07-02 17:46:10.879 I/StatusBarModePerDisplayRepository( 2380): isInFullscreenMode:false com.transsion.XOSLauncher
  07-02 17:46:10.879 D/TranDynamicBarAnimControllerImpl( 1698): updateFlagsFromDynamicIslandToWindow pkgName:com.transsion.XOSLauncher 
mStartFromDynamicIsland:false mDynamicIslandPkgName:com.google.android.gms
  07-02 17:46:10.879 I/Transition( 1698): updateFlagsFromDynamicIslandToWindow pkgName = com.transsion.XOSLauncher flagsArr[0] = 0
  07-02 17:46:10.879 D/TranDynamicBarAnimControllerImpl( 1698): updateFlagsSimplifyAnimByLauncher pkgName:com.transsion.XOSLauncher mSimplifyAnimType:0 
mSimplifyAnimOpenPkgName:com.whatsapp
  07-02 17:46:10.879 I/Transition( 1698): updateFlagsSimplifyAnimByLauncher pkgName = com.transsion.XOSLauncher flagsArr[0] = 0 mSimplifyAnimLaunchBounds: 
Rect(324, 698 - 498, 872)
  07-02 17:46:10.879 D/TranDynamicBarAnimControllerImpl( 1698): updateFlagsFromDynamicIslandToWindow pkgName:null mStartFromDynamicIsland:false 
mDynamicIslandPkgName:com.google.android.gms
  07-02 17:46:10.879 I/Transition( 1698): updateFlagsFromDynamicIslandToWindow pkgName = null flagsArr[0] = 0
  07-02 17:46:10.879 I/SmartPanelService( 4503): onWindowsDrawn pkgName: com.transsion.XOSLauncher, className: 
com.android.launcher3.uioverrides.QuickstepLauncher launchState=0 windowsDrawnDelayMs =-1
  07-02 17:46:10.880 D/TranDynamicBarAnimControllerImpl( 1698): updateFlagsSimplifyAnimByLauncher pkgName:null mSimplifyAnimType:0 
mSimplifyAnimOpenPkgName:com.whatsapp
  07-02 17:46:10.880 I/Transition( 1698): updateFlagsSimplifyAnimByLauncher pkgName = null flagsArr[0] = 0 mSimplifyAnimLaunchBounds: Rect(324, 698 - 498, 
872)
  07-02 17:46:10.880 D/SurfaceFlinger( 1012): Focus addInputWindowCommands timestamp=162751989765931, windowName=ac8a64c 
com.transsion.XOSLauncher/com.android.launcher3.uioverrides.QuickstepLauncher
  07-02 17:46:10.880 D/TranDynamicBarAnimControllerImpl( 1698): updateFlagsFromDynamicIslandToWindow pkgName:null mStartFromDynamicIsland:false 
mDynamicIslandPkgName:com.google.android.gms
  07-02 17:46:10.880 I/Transition( 1698): updateFlagsFromDynamicIslandToWindow pkgName = null flagsArr[0] = 0
  07-02 17:46:10.880 D/TranDynamicBarAnimControllerImpl( 1698): updateFlagsSimplifyAnimByLauncher pkgName:null mSimplifyAnimType:0 
mSimplifyAnimOpenPkgName:com.whatsapp
  07-02 17:46:10.880 I/Transition( 1698): updateFlagsSimplifyAnimByLauncher pkgName = null flagsArr[0] = 0 mSimplifyAnimLaunchBounds: Rect(324, 698 - 498, 
872)
  07-02 17:46:10.881 I/SmartPanelRepository( 4503): hasLoadData true  data size = 12
  07-02 17:46:10.881 D/MagellanHandle( 1698): updateRefreshRateForSceneVsyncs what = 21
  07-02 17:46:10.882 D/SceneController( 4503): checkCanShow canShow: true  changed false 
  07-02 17:46:10.884 V/WindowManagerShell( 2380): onTransitionReady(transaction=7292854570018)
> 07-02 17:46:10.884 V/WindowManagerShell( 2380): onTransitionReady (#1232) android.os.BinderProxy@3975b58: {id=1232 t=CLOSE f=0x0 trk=0 r=[0@Point(0, 0)] 
c=[{WCT{android.window.IWindowContainerToken$Stub$Proxy@477b3b3} m=TO_FRONT f=SHOW_WALLPAPER|MOVE_TO_TOP leash=Surface(name=Task=1)/@0x2145d17 sb=Rect(0, 
0 - 1080, 2436) eb=Rect(0, 0 - 1080, 2436) mSimplifyStartAbsBounds=Rect(0, 0 - 0, 0) d=0 
taskParent=-1},{WCT{android.window.IWindowContainerToken$Stub$Proxy@f2a3d70} m=CLOSE f=NONE leash=Surface(name=Task=48210)/@0xdd2d504 sb=Rect(0, 0 - 1080, 
2436) eb=Rect(0, 0 - 1080, 2436) mSimplifyStartAbsBounds=Rect(0, 0 - 0, 0) d=0 taskParent=-1},{null m=TO_FRONT f=IS_WALLPAPER 
leash=Surface(name=WallpaperWindowToken{b14fd4c token=android.os.Binder@430597f})/@0x4c41aed sb=Rect(0, 0 - 1080, 2436) eb=Rect(0, 0 - 1080, 2436) 
mSimplifyStartAbsBounds=Rect(0, 0 - 0, 0) d=0}]}
  07-02 17:46:10.884 D/ShellTransitions( 2380): setupStartState setAlpha 0.f:Surface(name=Task=1)/@0x2145d17
  07-02 17:46:10.884 D/ShellTransitions_interrupt( 2380): isIconLaunchOpenOrClose mode: 3
  07-02 17:46:10.884 D/ShellTransitions_interrupt( 2380): isOpenOrCloseMode: trueisInterruptedTask: true isSplitMode: false isTranssionLauncher: true
  07-02 17:46:10.884 D/ShellTransitions_interrupt( 2380): isIconLaunchRemoteTransitionInterrupted isopenorclose: true   mHasPlayingTransitions: false 
mFinishHasPlayingTransitions: false
  07-02 17:46:10.884 D/ShellTransitions_interrupt( 2380): processReadyQueuemIfTransitionReUseLeash: false
> 07-02 17:46:10.884 V/WindowManagerShell( 2380): Playing animation for (#1232) android.os.BinderProxy@3975b58@0
  07-02 17:46:10.884 D/ShellEventHandler( 2380): onTransitionStarting CLOSE token=android.os.BinderProxy@3975b58
  07-02 17:46:10.885 D/ShellTransitions_interrupt( 2380): isIconLaunchOpenOrClose mode: 3
  07-02 17:46:10.885 D/ShellTransitions_interrupt( 2380): isOpenOrCloseMode: trueisInterruptedTask: true isSplitMode: false isTranssionLauncher: true
  07-02 17:46:10.885 D/ShellTransitions_interrupt( 2380): setupAnimHierarchy  ifNoReparentForInterrupt(info):  true ifMerge: false
  07-02 17:46:10.885 D/ShellTransitions_interrupt( 2380): isIconLaunchOpenOrClose mode: 3
  07-02 17:46:10.885 D/ShellTransitions_interrupt( 2380): isOpenOrCloseMode: trueisInterruptedTask: true isSplitMode: false isTranssionLauncher: true
  07-02 17:46:10.885 D/ShellTransitions_interrupt( 2380): isIconLaunchOpenOrClose mode: 3
  07-02 17:46:10.885 D/ShellTransitions_interrupt( 2380): isOpenOrCloseMode: trueisInterruptedTask: true isSplitMode: false isTranssionLauncher: true
  07-02 17:46:10.885 D/ShellTransitions_interrupt( 2380): setupAnimHierarchy  ifNoReparentForInterrupt(info):  true ifMerge: false
  07-02 17:46:10.885 D/ShellTransitions_interrupt( 2380): isIconLaunchOpenOrClose mode: 3
  07-02 17:46:10.885 D/ShellTransitions_interrupt( 2380): isOpenOrCloseMode: trueisInterruptedTask: true isSplitMode: false isTranssionLauncher: true
  07-02 17:46:10.885 D/ShellTransitions_interrupt( 2380): isIconLaunchOpenOrClose mode: 3
  07-02 17:46:10.885 D/ShellTransitions_interrupt( 2380): isOpenOrCloseMode: trueisInterruptedTask: true isSplitMode: false isTranssionLauncher: true
  07-02 17:46:10.885 D/ShellTransitions_interrupt( 2380): setupAnimHierarchy  ifNoReparentForInterrupt(info):  true ifMerge: false
  07-02 17:46:10.885 D/ShellTransitions_interrupt( 2380): isIconLaunchOpenOrClose mode: 3
  07-02 17:46:10.885 D/CarrierSvcBindHelper( 2620): onHandleForceStop: [com.erbete.customer]
  07-02 17:46:10.885 D/ShellTransitions_interrupt( 2380): isOpenOrCloseMode: trueisInterruptedTask: true isSplitMode: false isTranssionLauncher: true
  07-02 17:46:10.885 V/WindowManagerShell( 2380):  try handler com.android.wm.shell.transition.DefaultMixedHandler@91c2c6c
  07-02 17:46:10.885 V/WindowManagerShell( 2380):  try handler com.android.wm.shell.keyguard.KeyguardTransitionHandler@e100235
  07-02 17:46:10.885 V/WindowManagerShell( 2380):  try handler com.android.wm.shell.pip.PipTransition@fb1ea43
  07-02 17:46:10.885 V/WindowManagerShell( 2380):  try handler com.android.wm.shell.activityembedding.ActivityEmbeddingController@6f358c0
  07-02 17:46:10.885 V/WindowManagerShell( 2380):  try handler com.android.wm.shell.recents.RecentsTransitionHandler@f2779f9
  07-02 17:46:10.885 V/ShellRecents( 2380): RecentsTransitionHandler.startAnimation: no controller found
  07-02 17:46:10.885 V/WindowManagerShell( 2380):  try handler com.android.wm.shell.splitscreen.StageCoordinator@a8efd3e
  07-02 17:46:10.885 V/WindowManagerShell( 2380):  try handler com.android.wm.shell.transition.RemoteTransitionHandler@bfee79f
  07-02 17:46:10.885 V/WindowManagerShell( 2380): Transition doesn't have explicit remote, search filters for match for {id=1232 t=CLOSE f=0x0 trk=0 
r=[0@Point(0, 0)] c=[{WCT{android.window.IWindowContainerToken$Stub$Proxy@477b3b3} m=TO_FRONT f=SHOW_WALLPAPER|MOVE_TO_TOP 
leash=Surface(name=Task=1)/@0x2145d17 sb=Rect(0, 0 - 1080, 2436) eb=Rect(0, 0 - 1080, 2436) mSimplifyStartAbsBounds=Rect(0, 0 - 0, 0) d=0 
taskParent=-1},{WCT{android.window.IWindowContainerToken$Stub$Proxy@f2a3d70} m=CLOSE f=NONE leash=Surface(name=Task=48210)/@0xdd2d504 sb=Rect(0, 0 - 1080, 
2436) eb=Rect(0, 0 - 1080, 2436) mSimplifyStartAbsBounds=Rect(0, 0 - 0, 0) d=0 taskParent=-1},{null m=TO_FRONT f=IS_WALLPAPER 
leash=Surface(name=WallpaperWindowToken{b14fd4c token=android.os.Binder@430597f})/@0x4c41aed sb=Rect(0, 0 - 1080, 2436) eb=Rect(0, 0 - 1080, 2436) 
mSimplifyStartAbsBounds=Rect(0, 0 - 0, 0) d=0}]}
> 07-02 17:46:10.885 V/WindowManagerShell( 2380):  Delegate animation for (#1232) to null
  07-02 17:46:10.885 V/WindowManagerShell( 2380):  try handler com.android.wm.shell.transition.DefaultTransitionHandler@a1540ec
  07-02 17:46:10.885 I/Griffin/MemoryMonitorManager( 1698): ProcessRecord= ProcessRecord{cec37b2 23882:com.transsion.tabe/1000} pss= 9 threshold= 3072
  07-02 17:46:10.885 V/WindowManagerShell( 2380): start default transition animation, info = {id=1232 t=CLOSE f=0x0 trk=0 r=[0@Point(0, 0)] 
c=[{WCT{android.window.IWindowContainerToken$Stub$Proxy@477b3b3} m=TO_FRONT f=SHOW_WALLPAPER|MOVE_TO_TOP leash=Surface(name=Task=1)/@0x2145d17 sb=Rect(0, 
0 - 1080, 2436) eb=Rect(0, 0 - 1080, 2436) mSimplifyStartAbsBounds=Rect(0, 0 - 0, 0) d=0 
taskParent=-1},{WCT{android.window.IWindowContainerToken$Stub$Proxy@f2a3d70} m=CLOSE f=NONE leash=Surface(name=Task=48210)/@0xdd2d504 sb=Rect(0, 0 - 1080, 
2436) eb=Rect(0, 0 - 1080, 2436) mSimplifyStartAbsBounds=Rect(0, 0 - 0, 0) d=0 taskParent=-1},{null m=TO_FRONT f=IS_WALLPAPER 
leash=Surface(name=WallpaperWindowToken{b14fd4c token=android.os.Binder@430597f})/@0x4c41aed sb=Rect(0, 0 - 1080, 2436) eb=Rect(0, 0 - 1080, 2436) 
mSimplifyStartAbsBounds=Rect(0, 0 - 0, 0) d=0}]}
  07-02 17:46:10.885 D/ShellTransitions( 2380): isCustomizedsSceneAnimType = 0
  07-02 17:46:10.886 V/WindowManagerShell( 2380): loadAnimation: anim=android.view.animation.AnimationSet@d4dc09c animAttr=0x23 type=CLOSE isEntrance=false
  07-02 17:46:10.886 D/ShellTransitions( 2380): isCustomizedsSceneAnimType = 0
  07-02 17:46:10.887 V/WindowManagerShell( 2380): loadAnimation: anim=android.view.animation.AnimationSet@49be62b animAttr=0x22 type=CLOSE isEntrance=true
  07-02 17:46:10.887 D/TriggerService( 4219): trigger service is running
  07-02 17:46:10.888 D/ShellTransitions_interrupt( 2380): dispatchTransition: consumed by com.android.wm.shell.transition.DefaultTransitionHandler@a1540ec
  07-02 17:46:10.888 V/WindowManagerShell( 2380):  animated by com.android.wm.shell.transition.DefaultTransitionHandler@a1540ec
  07-02 17:46:10.892 D/SurfaceFlinger( 1012): updateWinowInfo=1, setFocusedWindow timestamp=162751989765931, windowName=ac8a64c 
com.transsion.XOSLauncher/com.android.launcher3.uioverrides.QuickstepLauncher
  07-02 17:46:10.895 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000611,0.026870,0.000022, totalTime 0.027504 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:46:10.898 D/CarrierSvcBindHelper( 2620): No carrier app for: 0
  07-02 17:46:10.898 D/CarrierSvcBindHelper( 2620): No carrier app for: 1
  07-02 17:46:10.899 D/CarrierSvcBindHelper( 2620): No carrier app for: 2
> 07-02 17:46:10.907 V/WindowManager( 1698): Sent Transition (#1232) createdAt=07-02 17:46:10.803 via request=TransitionRequestInfo { type = CLOSE, 
triggerTask = TaskInfo{userId=0 taskId=48210 displayId=0 isRunning=false baseIntent=Intent { act=android.intent.action.MAIN 
cat=[android.intent.category.LAUNCHER] flg=0x10200000 cmp=com.erbete.customer/.MainActivity } baseActivity=null topActivity=null origActivity=null 
realActivity=ComponentInfo{com.erbete.customer/com.erbete.customer.MainActivity} numActivities=0 lastActiveTime=179621819 supportsMultiWindow=true 
resizeMode=1 isResizeable=true minWidth=-1 minHeight=-1 defaultMinSize=110 token=WCT{RemoteToken{6d93bb7 Task{7832121 #48210 type=standard 
A=10509:com.erbete.customer}}} topActivityType=1 pictureInPictureParams=null shouldDockBigOverlays=false launchIntoPipHostTaskId=-1 
lastParentTaskIdBeforePip=-1 displayCutoutSafeInsets=null topActivityInfo=null launchCookies=[] positionInParent=Point(0, 0) parentTaskId=-1 
isFocused=true isVisible=true isVisibleRequested=true isSleeping=false locusId=null displayAreaFeatureId=1 isTopActivityTransparent=false 
appCompatTaskInfo=AppCompatTaskInfo { topActivityInSizeCompat=false topActivityEligibleForLetterboxEducation= falseisLetterboxEducationEnabled= false 
isLetterboxDoubleTapEnabled= false topActivityEligibleForUserAspectRatioButton= false topActivityBoundsLetterboxed= false isFromLetterboxDoubleTap= false 
topActivityLetterboxVerticalPosition= -1 topActivityLetterboxHorizontalPosition= -1 topActivityLetterboxWidth=-1 topActivityLetterboxHeight=-1 
isUserFullscreenOverrideEnabled=false isSystemFullscreenOverrideEnabled=false cameraCompatTaskInfo=CameraCompatTaskInfo { cameraCompatControlState=hidden 
freeformCameraCompatMode=inactive}}}, pipTask = null, remoteTransition = null, displayChange = null, flags = 0, debugId = 1232 }
  07-02 17:46:10.907 V/WindowManager( 1698):     startWCT=WindowContainerTransaction { changes = {} hops = [] errorCallbackToken=null 
taskFragmentOrganizer=null mInterrupt=false }
  07-02 17:46:10.908 V/WindowManager( 1698):     info={id=1232 t=CLOSE f=0x0 trk=0 r=[0@Point(0, 0)] c=[
> 07-02 17:46:10.908 V/WindowManager( 1698):         {WCT{RemoteToken{a4aa567 Task{e35342e #1 type=home}}} m=TO_FRONT f=SHOW_WALLPAPER|MOVE_TO_TOP 
leash=Surface(name=Task=1)/@0x894e422 sb=Rect(0, 0 - 1080, 2436) eb=Rect(0, 0 - 1080, 2436) mSimplifyStartAbsBounds=Rect(0, 0 - 0, 0) d=0 taskParent=-1},
> 07-02 17:46:10.908 V/WindowManager( 1698):         {WCT{RemoteToken{6d93bb7 Task{7832121 #48210 type=standard A=10509:com.erbete.customer}}} m=CLOSE 
f=NONE leash=Surface(name=Task=48210)/@0xf4aba51 sb=Rect(0, 0 - 1080, 2436) eb=Rect(0, 0 - 1080, 2436) mSimplifyStartAbsBounds=Rect(0, 0 - 0, 0) d=0 
taskParent=-1},
  07-02 17:46:10.908 V/WindowManager( 1698):         {null m=TO_FRONT f=IS_WALLPAPER leash=Surface(name=WallpaperWindowToken{b14fd4c 
token=android.os.Binder@430597f})/@0x186c404 sb=Rect(0, 0 - 1080, 2436) eb=Rect(0, 0 - 1080, 2436) mSimplifyStartAbsBounds=Rect(0, 0 - 0, 0) d=0}
  07-02 17:46:10.908 V/WindowManager( 1698):     ]}
  07-02 17:46:10.908 I/mtkpower@impl(  970): [setMode] type:6, enabled:1
  07-02 17:46:10.908 E/mtkpower@impl(  970): [setMode] unknown type
  07-02 17:46:10.908 I/BufferQueueProducer( 1012): [FramebufferSurface](this:0xb40000719f3cd2f0,id:-1,api:1,p:1012,c:1012) queueBuffer: fps=0.17 
dur=130495.53 max=130144.60 min=13.37
  07-02 17:46:10.912 I/tranpm/ServicePolicy( 1698): isBlockHsB1 true
  07-02 17:46:10.912 I/Griffin/MemoryMonitorManager( 1698): ProcessRecord= ProcessRecord{fde1589 23808:com.transsion.smartpanel:turbo/1000} pss= 18 
threshold= 3072
  07-02 17:46:10.913 I/SuggestionExtraAppMgr( 2371): SuggestionExtraAppMgr onWindowFocusChanged call mHasFocus:false, hasFocus:true
  07-02 17:46:10.913 I/SuggestionExtraAppMgr( 2371): SuggestionExtraAppMgr go loadAdBySuggest ====== >
  07-02 17:46:10.913 I/LauncherAdsMgr( 2371): loadAdBySuggest call 
  07-02 17:46:10.913 D/LauncherAdsMgr( 2371): isMiDataValid call true, true,mIsSwitchOn:true,mCloudConfig:true
  07-02 17:46:10.913 I/LauncherAdsMgr( 2371): loadAdBySuggest go loadAd xg.j@c8731f4
  07-02 17:46:10.913 I/LauncherAdsMgr( 2371): loadAdByAz call 
  07-02 17:46:10.913 D/LauncherAdsMgr( 2371): isMiDataValid call true, true,mIsSwitchOn:true,mCloudConfig:true
  07-02 17:46:10.913 I/LauncherAdsMgr( 2371): loadAdByAz go loadAd : xg.j@31f4f5d
> 07-02 17:46:10.915 I/BufferQueueDebug( 1012): [afdb257 ActivityRecordInputSink 
com.transsion.XOSLauncher/com.android.launcher3.uioverrides.QuickstepLauncher#19914](this:0xb40000731f5a6388,id:-1,api:0,p:-1,c:-1) BufferQueue 
core=(1012:/system/bin/surfaceflinger)
> 07-02 17:46:10.916 I/ActivityTaskManager( 1698): this = Task{c40922d #5 type=home 
I=com.transsion.XOSLauncher/com.android.launcher3.uioverrides.QuickstepLauncher} is in Transition
> 07-02 17:46:10.916 I/ActivityTaskManager( 1698): this = Task{e35342e #1 type=home} is in Transition
  07-02 17:46:10.919 I/PowerHalWrapper( 1698): amsBoostStop AMS_BOOST_PACK_SWITCH:true, AMS_BOOST_ACT_SWITCH:false, AMS_BOOST_PROCESS_CREATE:false, 
AMS_BOOST_PROCESS_CREATE_FOR_GAME:false, AMS_BOOST_HOT_LAUNCH:false 
  07-02 17:46:10.920 I/mtkpower@impl(  970): [mtkPowerHint] hint:22, hold:500, ext:30, ext_hold:1500
  07-02 17:46:10.920 D/AppFlingMode(  970): [CheckAppFlingHint] 22 com.transsion.XOSLauncher -1
  07-02 17:46:10.920 D/AppFlingMode(  970): [CheckAppFlingHint] 30 com.transsion.XOSLauncher -1
  07-02 17:46:10.923 D/h       ( 2536):  hookUpdateRefreshRateForScene finished state =0
  07-02 17:46:10.924 I/tranpm/ServicePolicy( 1698): limitBindServiceLocked by hs&job - cold: callingPackage = android, targetPkg = com.turkcell.bip
  07-02 17:46:10.925 I/mtkpower_client( 1080): perf_lock_acq, hdl:0, dur:30000, num:2, tid:1080
  07-02 17:46:10.926 W/ActivityManager( 1698): Unbind failed: could not find connection for android.app.LoadedApk$ServiceDispatcher$InnerConnection@b3ec61
  07-02 17:46:10.931 I/mtkpower_client( 1080): ret_hdl:55987
  07-02 17:46:10.935 I/ImeTracker( 1698): com.transsion.XOSLauncher:8537b03d: onRequestHide at ORIGIN_SERVER reason HIDE_UNSPECIFIED_WINDOW fromUser false
  07-02 17:46:10.935 E/JobScheduler.Concurrency( 1698): Error executing JobStatus{ecd60ea androidx.work.systemjobscheduler:u0a393/291 
@androidx.work.systemjobscheduler@com.turkcell.bip/androidx.work.impl.background.systemjob.SystemJobService u=0 s=10393 TIME=-1h38m9s704ms:none NET READY}
  07-02 17:46:10.935 I/ImeTracker( 1698): com.transsion.XOSLauncher:8537b03d: onCancelled at PHASE_SERVER_SHOULD_HIDE
  07-02 17:46:10.935 D/TranWindowManagerServiceImpl( 1698): hookIMEVisibleChanged(), show:false
  07-02 17:46:10.935 I/TranMultiWindowManagerComponentImpl( 1698): hookInputMethodShown inputShown: false, connected:false, unbd:false
  07-02 17:46:10.935 I/TranSCSourceConnectManagerImpl( 1698): hookInputMethodShown inputShown: false
  07-02 17:46:10.935 D/TranSecureKeyboardManagerImpl( 1698): hookInputShowFromIMMS inputShow= false , mVisible = false , mNeedShow = false
  07-02 17:46:10.935 I/SurfaceFlinger( 1012): setDesiredDisplayModeSpecs: calling_process=system_server
> 07-02 17:46:10.935 I/input_debug( 1698): package: com.transsion.XOSLauncher mNeedShowSafeInput: false inputType: 0 methodMap: true isKeyguardShowing: 
false enable: 0 isSplitScreen: false
  07-02 17:46:10.939 I/SurfaceFlinger( 1012): setDesiredDisplayModeSpecs: policy={defaultModeId=1, allowGroupSwitching=false, 
primaryRanges={physical=[60.00 Hz, 60.00 Hz], render=[60.00 Hz, 60.00 Hz]}, appRequestRanges={physical=[60.00 Hz, 60.00 Hz], render=[60.00 Hz, 60.00 Hz]} 
idleScreenConfig=nullptr}
  07-02 17:46:10.939 I/RefreshRateSelector( 1012): Display 0 policy changed
  07-02 17:46:10.939 I/RefreshRateSelector( 1012): Previous: {defaultModeId=1, allowGroupSwitching=false, primaryRanges={physical=[60.00 Hz, 60.00 Hz], 
render=[60.00 Hz, 60.00 Hz]}, appRequestRanges={physical=[0.00 Hz, 60.00 Hz], render=[0.00 Hz, 60.00 Hz]} idleScreenConfig=nullptr}
  07-02 17:46:10.939 I/RefreshRateSelector( 1012): Current:  DisplayManagerPolicy{defaultModeId=1, allowGroupSwitching=false, 
primaryRanges={physical=[60.00 Hz, 60.00 Hz], render=[60.00 Hz, 60.00 Hz]}, appRequestRanges={physical=[60.00 Hz, 60.00 Hz], render=[60.00 Hz, 60.00 Hz]} 
idleScreenConfig=nullptr}
  07-02 17:46:10.939 I/RefreshRateSelector( 1012): 0 mode changes were performed under the previous policy
  07-02 17:46:10.939 D/DisplayModeController( 1012): setDesiredMode 0 {mode={fps=60.00 Hz, modePtr={id=1, vsyncRate=60.00 Hz, peakRefreshRate=60.00 Hz}}, 
emitEvent=true, force=false}
  07-02 17:46:10.942 D/os.permission.PermissionInfo( 1698): checkPermission 10430:android.permission.POST_NOTIFICATIONS:false
  07-02 17:46:10.952 E/ApplicationHelper( 1698): Fail to get PackageManager
  07-02 17:46:10.958 D/os.permission.PermissionInfo( 1698): checkPermission 10430:android.permission.CONTROL_REMOTE_APP_TRANSITION_ANIMATIONS:false
  07-02 17:46:10.961 D/C2MtkComponentStore(  937): setDmaBufUsage: usage 5, flags 0, heapName mtk_mm for decoder.
  07-02 17:46:10.961 W/UserManagerService( 1698): Requested status bar icon for non-badged user 0
  07-02 17:46:10.963 V/TranSecureKeyboardManagerImpl( 1698): getServiceLocked mInputMethodService = null this: 
com.transsion.interaction.securekeyboard.TranSKSecureKeyboardManagerImpl@11bbed6
  07-02 17:46:10.964 I/SmartPanelService( 4503): MSG_TASK_FOCUS
  07-02 17:46:10.964 I/ScenesManager( 4503): handlerTaskChange new TaskId  old TaskId 
> 07-02 17:46:10.964 I/BufferQueueDebug( 1012): [Surface(name=73f9581 InputMethod)/@0x8c09814 - animation-leash of 
insets_animation#19915](this:0xb40000731f5c58b8,id:-1,api:0,p:-1,c:-1) BufferQueue core=(1012:/system/bin/surfaceflinger)
  07-02 17:46:10.964 E/ApplicationHelper( 1698): Fail to get PackageManager
  07-02 17:46:10.964 E/ApplicationHelper( 1698): Fail to get PackageManager
  07-02 17:46:10.966 E/ApplicationHelper( 1698): Fail to get PackageManager
  07-02 17:46:10.966 E/ApplicationHelper( 1698): Fail to get PackageManager
  07-02 17:46:10.966 E/ApplicationHelper( 1698): Fail to get PackageManager
  07-02 17:46:10.969 I/tranpm/ServicePolicy( 1698): isBlockHsB1 true
  07-02 17:46:10.969 I/tranpm/ServicePolicy( 1698): limitBindServiceLocked by hs&job - cold: callingPackage = android, targetPkg = 
com.google.android.apps.nbu.files
  07-02 17:46:10.971 I/SurfaceFlinger( 1012): setDesiredDisplayModeSpecs: calling_process=system_server
  07-02 17:46:10.972 I/SurfaceFlinger( 1012): setDesiredDisplayModeSpecs: policy={defaultModeId=1, allowGroupSwitching=false, 
primaryRanges={physical=[60.00 Hz, 60.00 Hz], render=[60.00 Hz, 60.00 Hz]}, appRequestRanges={physical=[0.00 Hz, 60.00 Hz], render=[0.00 Hz, 60.00 Hz]} 
idleScreenConfig=nullptr}
  07-02 17:46:10.972 I/RefreshRateSelector( 1012): Display 0 policy changed
  07-02 17:46:10.972 I/RefreshRateSelector( 1012): Previous: {defaultModeId=1, allowGroupSwitching=false, primaryRanges={physical=[60.00 Hz, 60.00 Hz], 
render=[60.00 Hz, 60.00 Hz]}, appRequestRanges={physical=[60.00 Hz, 60.00 Hz], render=[60.00 Hz, 60.00 Hz]} idleScreenConfig=nullptr}
  07-02 17:46:10.972 I/RefreshRateSelector( 1012): Current:  DisplayManagerPolicy{defaultModeId=1, allowGroupSwitching=false, 
primaryRanges={physical=[60.00 Hz, 60.00 Hz], render=[60.00 Hz, 60.00 Hz]}, appRequestRanges={physical=[0.00 Hz, 60.00 Hz], render=[0.00 Hz, 60.00 Hz]} 
idleScreenConfig=nullptr}
  07-02 17:46:10.972 I/RefreshRateSelector( 1012): 0 mode changes were performed under the previous policy
  07-02 17:46:10.972 D/DisplayModeController( 1012): setDesiredMode 0 {mode={fps=60.00 Hz, modePtr={id=1, vsyncRate=60.00 Hz, peakRefreshRate=60.00 Hz}}, 
emitEvent=true, force=false}
  07-02 17:46:10.972 E/ApplicationHelper( 1698): Fail to get PackageManager
  07-02 17:46:10.974 W/ActivityManager( 1698): Unbind failed: could not find connection for android.app.LoadedApk$ServiceDispatcher$InnerConnection@185def8
  07-02 17:46:10.976 E/JobScheduler.Concurrency( 1698): Error executing JobStatus{7e348f0 androidx.work.systemjobscheduler:u0a101/32974 
@androidx.work.systemjobscheduler@com.google.android.apps.nbu.files/androidx.work.impl.background.systemjob.SystemJobService u=0 s=10101 
URIS=[android.app.job.JobInfo$TriggerContentUri@26b5948d] READY}
  07-02 17:46:10.982 W/BaseAdsAppMgr( 2371): i onAdLoaded 2
  07-02 17:46:10.982 W/BaseAdsAppMgr( 2371): compareList size changed orgList.size():0, newList.size():2
  07-02 17:46:10.982 W/BaseAdsAppMgr( 2371): onAdLoaded isListChanged:true
  07-02 17:46:11.042 D/TranAppBrightnessChangeController( 1698): [handleMessage] msg type: 1001 isCloudEnabled: true
  07-02 17:46:11.043 I/GameSceneManager( 4503): checkAndHandleAPP cursor: count = 0
  07-02 17:46:11.043 I/GameSceneManager( 4503): exitSceneInMain false
  07-02 17:46:11.043 I/tranpm/ServicePolicy( 1698): isBlockHsB1 true
  07-02 17:46:11.043 I/tranpm/ServicePolicy( 1698): limitBindServiceLocked by hs&job - cold: callingPackage = android, targetPkg = com.turkcell.bip
  07-02 17:46:11.043 D/WindowManager( 1698): getTopPackages# topPackages = []
> 07-02 17:46:11.044 D/TranAppBrightnessChangeController( 1698): [onForegroundAppchange] ForegroundPackage: com.transsion.XOSLauncher splitScreen: false 
multiWindow: false mIsPinned:false
  07-02 17:46:11.046 W/ActivityManager( 1698): Unbind failed: could not find connection for android.app.LoadedApk$ServiceDispatcher$InnerConnection@585626c
  07-02 17:46:11.047 D/BoundBrokerSvc(13291): onBind: Intent { act=com.google.android.gms.measurement.START pkg=com.google.android.gms }
  07-02 17:46:11.047 D/BoundBrokerSvc(13291): Loading bound service for intent: Intent { act=com.google.android.gms.measurement.START 
pkg=com.google.android.gms }
  07-02 17:46:11.051 I/Kolun_AI( 3928): AIM_AppRecService:algMap:com.erbete.customer score:0.7362598702534654
  07-02 17:46:11.051 I/VideoSceneManager( 4503): handlerVideoStart isResume = true  currentPackage =   pkgName = com.transsion.XOSLauncher
  07-02 17:46:11.051 D/TurboSceneManager( 4503): handlerActivityStart: pkg = com.transsion.XOSLauncher
  07-02 17:46:11.052 D/TurboSceneManager( 4503): handlerTurboStart  currentPackage = com.erbete.customer  pkgName = com.transsion.XOSLauncher  className = 
com.android.launcher3.uioverrides.QuickstepLauncher
  07-02 17:46:11.052 E/JobScheduler.Concurrency( 1698): Error executing JobStatus{ecd60ea androidx.work.systemjobscheduler:u0a393/291 
@androidx.work.systemjobscheduler@com.turkcell.bip/androidx.work.impl.background.systemjob.SystemJobService u=0 s=10393 TIME=-1h38m9s821ms:none NET READY}
  07-02 17:46:11.053 I/Kolun_AI( 3928): AIM_AppRecService:algMap:com.whatsapp score:0.5222459669190599
  07-02 17:46:11.053 I/Kolun_AI( 3928): AIM_AppRecService:algMap:com.facebook.katana score:0.2936775910222671
  07-02 17:46:11.053 I/Kolun_AI( 3928): AIM_AppRecService:algMap:com.android.chrome score:0.25880297353214704
  07-02 17:46:11.053 I/VideoDataRepository( 4503): checkVideoApp curosr: count = 0
  07-02 17:46:11.053 I/Kolun_AI( 3928): AIM_AppRecService:algMap:com.btpn.dc score:0.07841651454141851
  07-02 17:46:11.053 I/Kolun_AI( 3928): AIM_AppRecService:algMap:com.openai.chatgpt score:0.06427877461106055
  07-02 17:46:11.053 I/Kolun_AI( 3928): AIM_AppRecService:algMap:com.transsion.camera score:0.05966208574097864
  07-02 17:46:11.053 I/Kolun_AI( 3928): AIM_AppRecService:algMap:com.google.android.gm score:0.05752387541919787
  07-02 17:46:11.053 I/Kolun_AI( 3928): AIM_AppRecService:algMap:us.zoom.videomeetings score:0.057147140615551414
  07-02 17:46:11.053 I/Kolun_AI( 3928): AIM_AppRecService:algMap:com.google.android.apps.nbu.files score:0.05713965889050322
  07-02 17:46:11.053 I/Kolun_AI( 3928): AIM_AppRecService:algMap:cn.wps.moffice_eng score:0.05672444848212869
  07-02 17:46:11.053 I/Kolun_AI( 3928): AIM_AppRecService:algMap:id.dana score:0.05082274659104774
  07-02 17:46:11.112 I/tranpm/ServicePolicy( 1698): isBlockHsB1 true
  07-02 17:46:11.112 I/tranpm/ServicePolicy( 1698): limitBindServiceLocked by hs&job - cold: callingPackage = android, targetPkg = 
com.google.android.apps.nbu.files
  07-02 17:46:11.114 W/ActivityManager( 1698): Unbind failed: could not find connection for android.app.LoadedApk$ServiceDispatcher$InnerConnection@58260a5
  07-02 17:46:11.115 E/JobScheduler.Concurrency( 1698): Error executing JobStatus{141498e androidx.work.systemjobscheduler:u0a101/32971 
@androidx.work.systemjobscheduler@com.google.android.apps.nbu.files/androidx.work.impl.background.systemjob.SystemJobService u=0 s=10101 
TIME=-2h12m0s106ms:none READY}
  07-02 17:46:11.115 D/AdvertisingIdClient(13291): AdvertisingIdClient already created.
  07-02 17:46:11.115 D/AdvertisingIdClient(13291): AdvertisingIdClient is not bounded. Starting to bind it...
> 07-02 17:46:11.117 I/BufferQueueProducer( 1012): [SmartPanel_handleView#19844](this:0xb40000731f5d3c88,id:-1,api:0,p:-1,c:1012) queueBuffer: fps=0.01 
dur=93831.36 max=93831.36 min=93831.36
  07-02 17:46:11.154 I/adbd    ( 1129): Remote process closed the socket (on MSG_PEEK)
  07-02 17:46:11.156 D/ConnectivityService( 1698): releasing NetworkRequest [ REQUEST id=20938, [ Capabilities: 
INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED&NOT_BANDWIDTH_CONSTRAINED Uid: 10509 RequestorUid: 10509 RequestorPkg: com.erbete.customer 
UnderlyingNetworks: Null] ] (release request)
  07-02 17:46:11.157 D/SurfaceFlinger( 1012): [SF client] REMOVE (0xb40000713f411ba0) for (11190:com.erbete.customer)
  07-02 17:46:11.157 D/SurfaceFlinger( 1012): [SF client] REMOVE (0xb40000713f41ac30) for (11190:com.erbete.customer)
> 07-02 17:46:11.157 I/SurfaceFlinger( 1012): onHandleDestroyed: name=Bounds for - com.erbete.customer/com.erbete.customer.MainActivity#19900, 
layerId=19900, parentId=0
> 07-02 17:46:11.157 I/SurfaceFlinger( 1012): onHandleDestroyed: name=Surface(name=174f644 NavigationBar0)/@0x46ac9dc - animation-leash of 
insets_animation#19896, layerId=19896, parentId=0
> 07-02 17:46:11.157 I/SurfaceFlinger( 1012): onHandleDestroyed: name=SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity]#19901, 
layerId=19901, parentId=0
> 07-02 17:46:11.158 I/SurfaceFlinger( 1012): onHandleDestroyed: name=Surface(name=f48663c StatusBar)/@0x8eec4a5 - animation-leash of 
insets_animation#19897, layerId=19897, parentId=0
> 07-02 17:46:11.158 I/SurfaceFlinger( 1012): onHandleDestroyed: name=SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity](BLAST)#19902, 
layerId=19902, parentId=0
> 07-02 17:46:11.158 I/SurfaceFlinger( 1012): onHandleDestroyed: name=Background for 
SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity]#19903, layerId=19903, parentId=0
  07-02 17:46:11.161 I/WindowManager( 1698): WIN DEATH: Window{4b185ef u0 com.erbete.customer/com.erbete.customer.MainActivity}
  07-02 17:46:11.162 W/InputManager-JNI( 1698): Input channel object '4b185ef com.erbete.customer/com.erbete.customer.MainActivity (client)' was disposed 
without first being removed with the input manager!
> 07-02 17:46:11.163 I/BufferQueueDebug( 1012): [Surface(name=f48663c StatusBar)/@0x8eec4a5 - animation-leash of 
insets_animation#19897](this:0xb40000731f642d78,id:-1,api:0,p:-1,c:1012) onDestructor()
> 07-02 17:46:11.163 I/BufferQueueDebug( 1012): [Surface(name=174f644 NavigationBar0)/@0x46ac9dc - animation-leash of 
insets_animation#19896](this:0xb40000731f64e3b8,id:-1,api:0,p:-1,c:1012) onDestructor()
  07-02 17:46:11.163 W/SurfaceFlinger( 1012): commitOffscreenLayers Layer 0xb40000731f60fed0 not alive
  07-02 17:46:11.163 W/SurfaceFlinger( 1012): commitOffscreenLayers Layer 0xb40000731f607620 not alive
  07-02 17:46:11.163 W/SurfaceFlinger( 1012): commitOffscreenLayers Layer 0xb40000731f5fbfe0 not alive
  07-02 17:46:11.166 I/WindowManager( 1698):   isAnimating=false  okToAnimate=true  win=Window{4b185ef u0 
com.erbete.customer/com.erbete.customer.MainActivity}
  07-02 17:46:11.167 D/tranpm/BehaviorManager( 1698): onMemPressureChange : level 0
  07-02 17:46:11.170 I/VersionsUtils( 2380):  getVersion mCurrentVersion 20202091
  07-02 17:46:11.170 I/IslandManager( 2380): checkIslandPermission result true granted 1
  07-02 17:46:11.171 W/IslandManager( 2380): cancel islandId 10006 not exist in mIslandIdsSet
  07-02 17:46:11.174 I/libprocessgroup( 1698): Removed cgroup /sys/fs/cgroup/uid_10509/pid_11190
  07-02 17:46:11.174 I/Zygote  (  913): Process 11190 exited due to signal 9 (Killed)
  07-02 17:46:11.183 D/BounceEffect(30797): initFoldScreenState maxWidthDp=812.0 minWidthDp=360.0
  07-02 17:46:11.185 D/SurfaceFlinger( 1012): [SF client] NEW(0xb40000713f3eaab0) for (30797:com.transsion.personalizedService.xos)
  07-02 17:46:11.190 V/ActivityManager( 1698): Death received in com.android.server.am.ActivityManagerService$AppDeathRecipient@4f96289 for thread 
android.os.BinderProxy@92ae28e
  07-02 17:46:11.195 D/ConnectivityService( 1698): releasing NetworkRequest [ REQUEST id=20940, [ Capabilities: 
INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED&NOT_BANDWIDTH_CONSTRAINED Uid: 10509 RequestorUid: 10509 RequestorPkg: com.erbete.customer 
UnderlyingNetworks: Null] ] (release request)
  07-02 17:46:11.196 D/VRI[ZeroScreen](30797): hardware acceleration = true, forceHwAccelerated = false
  07-02 17:46:11.196 I/tranpm/ServicePolicy( 1698): isBlockHsB1 true
  07-02 17:46:11.197 I/tranpm/ServicePolicy( 1698): limitBindServiceLocked by hs&job - cold: callingPackage = android, targetPkg = 
com.google.android.calendar
  07-02 17:46:11.197 D/ViewRootImpl(30797): setView appearance:0 ZeroScreen
  07-02 17:46:11.203 W/ActivityManager( 1698): Unbind failed: could not find connection for android.app.LoadedApk$ServiceDispatcher$InnerConnection@34c182a
  07-02 17:46:11.204 W/ActivityManager( 1698): setHasOverlayUi called on unknown pid: 11190
  07-02 17:46:11.206 E/JobScheduler.Concurrency( 1698): Error executing JobStatus{8d89b44 androidx.work.systemjobscheduler:u0a121/6203 
@androidx.work.systemjobscheduler@com.google.android.calendar/androidx.work.impl.background.systemjob.SystemJobService u=0 s=10121 
TIME=-1h36m59s176ms:none READY}
  07-02 17:46:11.206 D/AdvertisingIdClient(13291): AdvertisingIdClient is bounded
  07-02 17:46:11.209 I/AdvertisingIdClient(13291): shouldSendLog 179485977
  07-02 17:46:11.209 I/AdvertisingIdClient(13291): GetInfoInternal elapse 93ms
  07-02 17:46:11.210 I/tranpm/ServicePolicy( 1698): isBlockHsB1 true
  07-02 17:46:11.210 I/tranpm/ServicePolicy( 1698): limitBindServiceLocked by hs&job - cold: callingPackage = android, targetPkg = 
com.google.android.calendar
> 07-02 17:46:11.211 I/BufferQueueDebug( 1012): [32f43b8 ZeroScreen#19916](this:0xb40000731f64e3b8,id:-1,api:0,p:-1,c:-1) BufferQueue 
core=(1012:/system/bin/surfaceflinger)
  07-02 17:46:11.211 W/ActivityManager( 1698): Unbind failed: could not find connection for android.app.LoadedApk$ServiceDispatcher$InnerConnection@ea65d93
  07-02 17:46:11.212 E/JobScheduler.Concurrency( 1698): Error executing JobStatus{107496e androidx.work.systemjobscheduler:u0a121/6204 
@androidx.work.systemjobscheduler@com.google.android.calendar/androidx.work.impl.background.systemjob.SystemJobService u=0 s=10121 TIME=-1h36m59s78ms:none 
READY}
  07-02 17:46:11.216 I/tranpm/ServicePolicy( 1698): isBlockHsB1 true
  07-02 17:46:11.216 I/tranpm/ServicePolicy( 1698): limitBindServiceLocked by hs&job - cold: callingPackage = android, targetPkg = com.talpa.hibrowser
  07-02 17:46:11.217 D/InputEventReceiver(30797): Input log is disabled in InputEventReceiver.
  07-02 17:46:11.217 W/ActivityManager( 1698): Unbind failed: could not find connection for android.app.LoadedApk$ServiceDispatcher$InnerConnection@34f3fef
  07-02 17:46:11.218 E/JobScheduler.Concurrency( 1698): Error executing JobStatus{48d18d6 androidx.work.systemjobscheduler:u0a206/1543 
@androidx.work.systemjobscheduler@com.talpa.hibrowser/androidx.work.impl.background.systemjob.SystemJobService u=0 s=10206 TIME=-2h50m51s193ms:none NET 
READY}
  07-02 17:46:11.220 W/Looper  ( 1698): Slow dispatch took 194ms main h=android.app.ActivityThread$H 
c=android.app.LoadedApk$ReceiverDispatcher$Args$$ExternalSyntheticLambda0@133afc m=0
  07-02 17:46:11.220 W/Looper  ( 1698): Slow delivery took 348ms main h=android.app.ActivityThread$H 
c=android.app.LoadedApk$ReceiverDispatcher$Args$$ExternalSyntheticLambda0@f111585 m=0
  07-02 17:46:11.226 D/CoreBackPreview( 1698): Window{32f43b8 u0 ZeroScreen}: Setting back callback 
OnBackInvokedCallbackInfo{mCallback=android.window.IOnBackInvokedCallback$Stub$Proxy@8b2dfda, mPriority=0, mIsAnimationCallback=false}
> 07-02 17:46:11.228 I/BufferQueueDebug( 1012): [ZeroScreen#19917](this:0xb40000731f5b4758,id:-1,api:0,p:-1,c:-1) BufferQueue 
core=(1012:/system/bin/surfaceflinger)
  07-02 17:46:11.230 D/WifiClientModeImpl[24001351:wlan0]( 1698): updateLinkLayerStatsRssiSpeedFrequencyCapabilities rssi=-53 TxLinkspeed=54 freq=5765 
RxLinkSpeed=54
  07-02 17:46:11.231 D/WifiDataStall( 1698): tx tput in kbps: 50000
  07-02 17:46:11.231 D/WifiDataStall( 1698): rx tput in kbps: 50000
  07-02 17:46:11.231 V/WifiConfigManager( 1698): Updating scan detail cache freq=5765 BSSID=ac:4a:56:28:fe:ee RSSI=-53 for "TAUFIKKOPIBATOH@WIFI.ID"NONE
  07-02 17:46:11.232 D/WifiThroughputPredictor( 1698):  utilization (LLS) 15 isBluetoothConnected: false final utilization: 15
  07-02 17:46:11.232 D/WifiThroughputPredictor( 1698):  BW: 0 RSSI: -53 Nss: 1 Mode: 1 symDur: 4000 snrDb 27 bitPerTone: 4500 rate: 54 throughput: 50
  07-02 17:46:11.232 D/WifiThroughputPredictor( 1698):  utilization (LLS) 15 isBluetoothConnected: false final utilization: 15
  07-02 17:46:11.232 D/WifiThroughputPredictor( 1698):  BW: 0 RSSI: -53 Nss: 1 Mode: 1 symDur: 4000 snrDb 27 bitPerTone: 4500 rate: 54 throughput: 50
  07-02 17:46:11.233 D/WifiThroughputPredictor( 1698):  utilization (LLS) 15 isBluetoothConnected: false final utilization: 15
  07-02 17:46:11.233 D/WifiThroughputPredictor( 1698):  BW: 0 RSSI: -53 Nss: 1 Mode: 1 symDur: 4000 snrDb 27 bitPerTone: 4500 rate: 54 throughput: 50
  07-02 17:46:11.233 D/WifiThroughputPredictor( 1698):  utilization (LLS) 15 isBluetoothConnected: false final utilization: 15
  07-02 17:46:11.233 D/WifiThroughputPredictor( 1698):  BW: 0 RSSI: -53 Nss: 1 Mode: 1 symDur: 4000 snrDb 27 bitPerTone: 4500 rate: 54 throughput: 50
  07-02 17:46:11.235 D/WifiScoreCard( 1698): BSSID update SIGNAL_POLL ID: 942782235 SSID: "TAUFIKKOPIBATOH@WIFI.ID", BSSID: ac:4a:56:28:fe:ee, MAC: 
02:16:3f:eb:28:01, IP: /10.226.145.77, Security type: 0, Supplicant state: COMPLETED, Wi-Fi standard: legacy, RSSI: -53, Link speed: 48Mbps, Tx Link 
speed: 48Mbps, Max Supported Tx Link speed: 54Mbps, Calculated Tx : 0Mbps, Rx Link speed: 48Mbps, Max Supported Rx Link speed: 54Mbps, Calculated Rx : 
0Mbps, Frequency: 5765MHz, Net ID: 142, Metered hint: false, score: 60, isUsable: true, CarrierMerged: false, SubscriptionId: -1, IsPrimary: 1, Trusted: 
true, Restricted: false, Ephemeral: false, OEM paid: false, OEM private: false, OSU AP: false, FQDN: <none>, Provider friendly name: <none>, Requesting 
package name: <none>"TAUFIKKOPIBATOH@WIFI.ID"openMLO Information: , Is TID-To-Link negotiation supported by the AP: false, AP MLD Address: <none>, AP MLO 
Link Id: <none>, AP MLO Affiliated links: <none>, Vendor Data: <none>
  07-02 17:46:11.235 D/WifiScoreCard( 1698): txRate: 9 txSpeed: 48
  07-02 17:46:11.235 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.039810,0.000050, totalTime 0.039861 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:46:11.235 D/WifiScoreCard( 1698): network update SIGNAL_POLL "TAUFIKKOPIBATOH@WIFI.ID" ID: 42486102 RSSI -53 txSpeed 48
  07-02 17:46:11.236 D/WifiClientModeImpl[24001351:wlan0]( 1698):  ClientModeImpl$L2ConnectedState screen=on 131 0 "TAUFIKKOPIBATOH@WIFI.ID" 
ac:4a:56:28:fe:ee rssi=-53 f=5765 sc=60 link=48 tx=8.3, 0.0, 0.0 rx=2.7 bcn=0 [on:0 tx:0 rx:0 period:3012] from screen [on:0 period:19449749] score=60
  07-02 17:46:11.240 D/BufferQueueConsumer(30797): [](id:784d0000000b,api:0,p:-1,c:30797) connect: controlledByApp=false
> 07-02 17:46:11.240 D/BLASTBufferQueue(30797): [VRI[ZeroScreen]#11](f:0,a:0) constructor()
> 07-02 17:46:11.240 D/BLASTBufferQueue(30797): [VRI[ZeroScreen]#11](f:0,a:0) update width=1272 height=2628 format=-2 mTransformHint=0
  07-02 17:46:11.244 D/ShellTransitions_interrupt( 2380): finish handler: com.android.wm.shell.transition.DefaultTransitionHandler@a1540ec
  07-02 17:46:11.244 D/ShellTransitions_interrupt( 2380): onFinish: isLauncherReUseLeash = false
> 07-02 17:46:11.244 V/WindowManagerShell( 2380): Transition animation finished (aborted=false), notifying core (#1232) android.os.BinderProxy@3975b58@0
  07-02 17:46:11.244 D/ShellTransitions( 2380): Applied finish transaction
  07-02 17:46:11.244 D/ShellTransitions_interrupt( 2380): onFinish finish apply
  07-02 17:46:11.247 D/ZeroScreenView(30797): onSizeChanged width: 1080 ,height: 2436 ,oldw: 0 ,oldh: 0
  07-02 17:46:11.247 W/RecyclerView(30797): No adapter attached; skipping layout
  07-02 17:46:11.248 D/WindowOrganizerController( 1698): WCT isInterrupt: false
  07-02 17:46:11.249 I/mtkpower_client( 1698): perf_lock_rel, hdl:55981, tid:1843
  07-02 17:46:11.249 I/Process ( 1698): String at 0: 0x767a2b0601 = SFMainPolicy
  07-02 17:46:11.249 I/Process ( 1698): String at 0: 0x767a2b0601 = SFRenderEnginePolicy
  07-02 17:46:11.250 W/ActivityManager( 1698): pid 1698 system sent binder code 7 with flags 1 to frozen apps and got error -32
  07-02 17:46:11.250 I/Hiber/fastState( 1698): do fastUnfreeze reason=cpuboost delay=0
  07-02 17:46:11.250 W/WindowManager( 1698): Exception thrown during dispatchAppVisibility Window{4b185ef u0 
com.erbete.customer/com.erbete.customer.MainActivity EXITING}
  07-02 17:46:11.250 W/WindowManager( 1698): android.os.DeadObjectException
  07-02 17:46:11.250 W/WindowManager( 1698): 	at android.os.BinderProxy.transactNative(Native Method)
  07-02 17:46:11.250 W/WindowManager( 1698): 	at android.os.BinderProxy.transact(BinderProxy.java:686)
  07-02 17:46:11.250 W/WindowManager( 1698): 	at android.view.IWindow$Stub$Proxy.dispatchAppVisibility(IWindow.java:553)
  07-02 17:46:11.250 W/WindowManager( 1698): 	at com.android.server.wm.WindowState.sendAppVisibilityToClients(WindowState.java:3658)
  07-02 17:46:11.250 W/WindowManager( 1698): 	at com.android.server.wm.WindowContainer.sendAppVisibilityToClients(WindowContainer.java:1334)
  07-02 17:46:11.250 W/WindowManager( 1698): 	at com.android.server.wm.WindowToken.setClientVisible(WindowToken.java:403)
  07-02 17:46:11.250 W/WindowManager( 1698): 	at com.android.server.wm.ActivityRecord.setClientVisible(ActivityRecord.java:8056)
  07-02 17:46:11.250 W/WindowManager( 1698): 	at com.android.server.wm.ActivityRecord.postApplyAnimation(ActivityRecord.java:6651)
  07-02 17:46:11.250 I/libPowerHal(  970): MTKPOWER_HINT_LAUNCHER_ANIMA: set gpu opp level: 44
  07-02 17:46:11.251 I/libPowerHal(  970): MTKPOWER_HINT_LAUNCHER_ANIMA: set gpu opp level max: 0
  07-02 17:46:11.251 I/libPowerHal(  970): [setGPUFreq] Soft min/max = (44, 0); Hard min/max = (44, 0)
  07-02 17:46:11.251 I/libPowerHal(  970): [setGPUFreq] final min/max = (44, 0)
  07-02 17:46:11.251 I/libPowerHal(  970): MTKPOWER_HINT_LAUNCHER_ANIMA: set gpu opp level: 44
  07-02 17:46:11.251 I/libPowerHal(  970): MTKPOWER_HINT_LAUNCHER_ANIMA: set gpu opp level max: 0
> 07-02 17:46:11.251 V/WindowManager( 1698): Finish Transition (#1232): created at 07-02 17:46:10.803 collect-started=0.053ms request-sent=0.328ms 
started=28.701ms ready=28.679ms sent=78.202ms finished=445.876ms
  07-02 17:46:11.253 I/mtkpower@impl(  970): [setMode] type:6, enabled:0
  07-02 17:46:11.253 E/mtkpower@impl(  970): [setMode] unknown type
> 07-02 17:46:11.254 I/SurfaceFlinger( 1012): onHandleDestroyed: name=1760388 ActivityRecordInputSink com.erbete.customer/.MainActivity#19899, 
layerId=19899, parentId=0
  07-02 17:46:11.255 E/uas-service( 1219): ioclt error: fd=3 cmd=1075336211 ux_data->pid=11190 ux_data->ux_tags=0
  07-02 17:46:11.255 D/WindowManager( 1698): setParent old=ActivityRecord{28ce32b u0 com.erbete.customer/.MainActivity t48210 f}},new=null,this 
window=Window{4b185ef u0 com.erbete.customer/com.erbete.customer.MainActivity EXITING},callers=com.android.server.wm.WindowContainer.removeChild:862 
com.android.server.wm.ActivityRecord.removeChild:5351 com.android.server.wm.ActivityRecord.removeChild:482 
com.android.server.wm.WindowContainer.removeImmediately:932 com.android.server.wm.WindowState.removeImmediately:2565 
com.android.server.wm.WindowContainer.removeImmediately:908 
  07-02 17:46:11.255 D/WindowManager( 1698): removeImmediately mActivityRecord: ActivityRecord{28ce32b u0 com.erbete.customer/.MainActivity t48210 f}} 
type: 1
  07-02 17:46:11.256 D/WindowManager( 1698): postWindowRemoveCleanupLocked: token:ActivityRecord{28ce32b u0 com.erbete.customer/.MainActivity t48210 f}} 
win:Window{4b185ef u0 com.erbete.customer/com.erbete.customer.MainActivity EXITING} token.isEmpty:true token.mPersistOnEmpty:true
> 07-02 17:46:11.257 D/WindowManager( 1698): setParent old=Task{7832121 #48210 type=standard A=10509:com.erbete.customer},new=null,this 
window=ActivityRecord{28ce32b u0 com.erbete.customer/.MainActivity t48210 f}},callers=com.android.server.wm.WindowContainer.removeChild:862 
com.android.server.wm.TaskFragment.removeChild:3257 com.android.server.wm.Task.removeChild:1590 com.android.server.wm.Task.removeChild:1573 
com.android.server.wm.WindowContainer.removeImmediately:932 com.android.server.wm.WindowToken.removeImmediately:359 
  07-02 17:46:11.258 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.022286,0.000049, totalTime 0.022336 > logTimeout 
0.022000 TIMEOUT!!
> 07-02 17:46:11.258 I/BufferQueueDebug( 1012): [Task=48210#19918](this:0xb40000731f5e7b78,id:-1,api:0,p:-1,c:-1) BufferQueue 
core=(1012:/system/bin/surfaceflinger)
> 07-02 17:46:11.261 D/WindowManager( 1698): setParent old=DefaultTaskDisplayArea@32511995,new=null,this window=Task{7832121 #48210 type=standard 
A=10509:com.erbete.customer},callers=com.android.server.wm.WindowContainer.removeChild:862 com.android.server.wm.TaskDisplayArea.removeChildTask:418 
com.android.server.wm.TaskDisplayArea.removeChild:409 com.android.server.wm.WindowContainer.removeImmediately:932 
com.android.server.wm.TaskFragment.removeImmediately:3337 com.android.server.wm.Task.removeImmediately:2790 
> 07-02 17:46:11.261 D/BLASTBufferQueue(30797): [VRI[ZeroScreen]#11](f:0,a:1) acquireNextBufferLocked size=1272x2628 mFrameNumber=1 applyTransaction=true 
mTimestamp=162752391590162(auto) mPendingTransactions.size=0 graphicBufferId=132272107814979 transform=0
  07-02 17:46:11.262 D/MagellanHandle( 1698): updateRefreshRateForSceneVsyncs what = 21
  07-02 17:46:11.262 D/ShellEventHandler( 2380): onTransitionFinished CLOSE token=android.os.BinderProxy@3975b58
  07-02 17:46:11.262 V/WindowManagerShell( 2380): Track 0 became idle
  07-02 17:46:11.262 V/WindowManagerShell( 2380): All active transition animations finished
> 07-02 17:46:11.265 I/SurfaceFlinger( 1012): onHandleDestroyed: name=Transition Root: Task=1#19913, layerId=19913, parentId=0
  07-02 17:46:11.266 D/SurfaceFlinger( 1012): [SF client] REMOVE (0xb40000713f3f50a0) for (1698:system_server)
  07-02 17:46:11.270 W/UserManagerService( 1698): Requested status bar icon for non-badged user 0
  07-02 17:46:11.270 D/WindowManager( 1698): System monitor finishDrawingWindow w: Window{a70fb55 u0 
com.transsion.livewallpaper.view.TranWallpaperService}; mDrawState = HAS_DRAWN
  07-02 17:46:11.271 I/Hiber/fastState( 1698): fastUnFreeze reason=cpuboost size=6 uids=[10098, 10155, 10198, 10199, 10225, 10254] about costTime=16ms
  07-02 17:46:11.271 D/WindowManager( 1698): System monitor finishDrawingWindow w: Window{32f43b8 u0 ZeroScreen}; mDrawState = DRAW_PENDING
  07-02 17:46:11.271 I/TopTaskTracker( 2371): onTaskRemoved: taskId=48210
  07-02 17:46:11.272 I/TopTaskTracker( 2371): onTaskRemoved: taskId=48210
  07-02 17:46:11.273 I/DisplayDeviceRepository( 1698): Display device changed: DisplayDeviceInfo{"Layar Bawaan": uniqueId="local:0", 1080 x 2436, modeId 
2, renderFrameRate 60.000004, defaultModeId 1, userPreferredModeId -1, supportedModes [{id=1, width=1080, height=2436, fps=120.00001, vsync=120.00001, 
synthetic=false, alternativeRefreshRates=[60.0], supportedHdrTypes=[]}, {id=2, width=1080, height=2436, fps=60.0, vsync=60.0, synthetic=false, 
alternativeRefreshRates=[120.00001], supportedHdrTypes=[]}], colorMode 0, supportedColorModes [0, 7, 9], hdrCapabilities 
HdrCapabilities{mSupportedHdrTypes=[], mMaxLuminance=500.0, mMaxAverageLuminance=500.0, mMinLuminance=0.0}, allmSupported false, gameContentTypeSupported 
false, density 480, 392.839 x 392.828 dpi, appVsyncOff 2400001, presDeadline 28600000, cutout DisplayCutout{insets=Rect(0, 108 - 0, 0) 
waterfall=Insets{left=0, top=0, right=0, bottom=0} boundingRect={Bounds=[Rect(0, 0 - 0, 0), Rect(468, 0 - 612, 108), Rect(0, 0 - 0, 0), Rect(0, 0 - 0, 
0)]} cutoutPathParserInfo={CutoutPathParserInfo{displayWidth=1080 displayHeight=2436 physicalDisplayWidth=1080 physicalDisplayHeight=2436 density={3.0} 
cutoutSpec={M -24,0 L -24,36 L 24,36 L 24,0 Z @dp} rotation={0} scale={1.0} physicalPixelDisplaySizeRatio={1.0}}} sideOverrides={}}, touch INTERNAL, 
rotation 0, type INTERNAL, address {port=0}, deviceProductInfo null, state ON, committedState ON, frameRateOverride {uid=1000 frameRateHz=60.0} {uid=10159 
frameRateHz=60.0} {uid=10196 frameRateHz=60.0} , brightnessMinimum 0.0, brightnessMaximum 1.0, brightnessDefault 0.2, hdrSdrRatio NaN, 
FLAG_ALLOWED_TO_BE_DEFAULT_DISPLAY, FLAG_ROTATES_WITH_CONTENT, FLAG_SECURE, FLAG_SUPPORTS_PROTECTED_BUFFERS, FLAG_TRUSTED, installOrientation 0, 
displayShape DisplayShape{ spec=596679847 displayWidth=1080 displayHeight=2436 physicalPixelDisplaySizeRatio=1.0 rotation=0 offsetX=0 offsetY=0 scale=1.0}}
  07-02 17:46:11.275 I/Griffin/DeviceState( 1698): virtualDisplayPackageName :{com.android.shell=2000}
  07-02 17:46:11.276 W/Looper  ( 1698): Drained
  07-02 17:46:11.277 I/WindowManager( 1698):   isAnimating=false  okToAnimate=true  win=Window{32f43b8 u0 ZeroScreen}
  07-02 17:46:11.281 W/UserManagerService( 1698): Requested status bar icon for non-badged user 0
> 07-02 17:46:11.281 I/BufferQueueDebug( 1012): [Transition Root: Task=1#19913](this:0xb40000731f5c8648,id:-1,api:0,p:-1,c:1012) onDestructor()
> 07-02 17:46:11.282 I/SurfaceFlinger( 1012): onHandleDestroyed: name=Task=48210#19918, layerId=19918, parentId=0
> 07-02 17:46:11.282 I/SurfaceFlinger( 1012): onHandleDestroyed: name=4b185ef com.erbete.customer/com.erbete.customer.MainActivity#19417, layerId=19417, 
parentId=0
> 07-02 17:46:11.282 I/SurfaceFlinger( 1012): onHandleDestroyed: name=com.erbete.customer/com.erbete.customer.MainActivity#19898, layerId=19898, parentId=0
> 07-02 17:46:11.282 I/SurfaceFlinger( 1012): onHandleDestroyed: name=ActivityRecord{28ce32b u0 com.erbete.customer/.MainActivity t48210}#19410, 
layerId=19410, parentId=0
  07-02 17:46:11.291 E/TmcApp:ByteAppManager(30797): close pre init subprocess
  07-02 17:46:11.292 E/TmcApp:ByteAppManager(30797): close pre init subprocess
  07-02 17:46:11.292 E/TmcApp:ByteAppManager(30797): close pre init subprocess
  07-02 17:46:11.293 E/TmcApp:ByteAppManager(30797): close pre init subprocess
  07-02 17:46:11.296 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000125,0.037104,0.000069, totalTime 0.037298 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:46:11.298 E/TmcApp:ByteAppManager(30797): close pre init subprocess
  07-02 17:46:11.298 E/TmcApp:ByteAppManager(30797): close pre init subprocess
> 07-02 17:46:11.299 I/BufferQueueDebug( 1012): [Bounds for - 
com.erbete.customer/com.erbete.customer.MainActivity#19900](this:0xb40000731f5fe7f8,id:-1,api:0,p:-1,c:1012) onDestructor()
> 07-02 17:46:11.299 I/BufferQueueDebug( 1012): 
[SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity]#19901](this:0xb40000731f6126e8,id:-1,api:0,p:-1,c:1012) onDestructor()
> 07-02 17:46:11.299 I/BufferQueueDebug( 1012): [1760388 ActivityRecordInputSink 
com.erbete.customer/.MainActivity#19899](this:0xb40000731f604318,id:-1,api:0,p:-1,c:1012) onDestructor()
> 07-02 17:46:11.300 I/BufferQueueDebug( 1012): [Background for 
SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity]#19903](this:0xb40000731f66ab58,id:-1,api:0,p:-1,c:1012) onDestructor()
  07-02 17:46:11.300 E/BpTransactionCompletedListener( 1012): Failed to transact (-32)
> 07-02 17:46:11.300 I/BufferQueueDebug( 1012): 
[SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity](BLAST)#19902](this:0xb40000731f609e38,id:-1,api:0,p:-1,c:1012) onDestructor()
  07-02 17:46:11.300 D/FileUtils( 1698): Rounded bytes from 8055332864 to 16000000000
> 07-02 17:46:11.302 I/BufferQueueDebug( 1012): [ActivityRecord{28ce32b u0 com.erbete.customer/.MainActivity 
t48210}#19410](this:0xb40000731f559558,id:-1,api:0,p:-1,c:1012) onDestructor()
> 07-02 17:46:11.302 I/BufferQueueDebug( 1012): [4b185ef 
com.erbete.customer/com.erbete.customer.MainActivity#19417](this:0xb40000731f59dad8,id:-1,api:0,p:-1,c:1012) onDestructor()
  07-02 17:46:11.302 E/TmcApp:ByteAppManager(30797): close pre init subprocess
> 07-02 17:46:11.302 I/BufferQueueDebug( 1012): [Task=48210#19918](this:0xb40000731f5e7b78,id:-1,api:0,p:-1,c:1012) onDestructor()
  07-02 17:46:11.303 E/BpTransactionCompletedListener( 1012): Failed to transact (-32)
> 07-02 17:46:11.303 I/BufferQueueDebug( 1012): 
[com.erbete.customer/com.erbete.customer.MainActivity#19898](this:0xb40000731f65c788,id:-1,api:0,p:-1,c:1012) onDestructor()
  07-02 17:46:11.305 D/TEST_TAG( 2371): getPaintTextNumberFormat: localNumber = 50
  07-02 17:46:11.305 D/TEST_TAG( 2371): getPaintTextNumberFormat: englishNumber = 50
  07-02 17:46:11.310 I/CleanDrawable( 2371): CleanDrawable initFontSizeAndTypeface mCustomInnerRadius:47
  07-02 17:46:11.311 I/CleanDrawable( 2371): CleanDrawable initStrokeWidth mCustomStrokeWidth:20,mStrokeWidth:20.0
  07-02 17:46:11.313 D/FileUtils( 1698): Rounded bytes from 8055332864 to 16000000000
  07-02 17:46:11.314 D/Api     ( 2371): get WidgetServiceImpl from cache
  07-02 17:46:11.319 D/Api     ( 2371): get LauncherDataServiceImpl from cache
  07-02 17:46:11.335 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.039548,0.000047, totalTime 0.039596 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:46:11.336 D/AES     ( 1698): AEEIOCTL_GET/SET_SF_STATE IOCTL,cmd= 1074294797, lParam=0. 
  07-02 17:46:11.337 D/AES     ( 1698): AEEIOCTL_RT_MON_Kick IOCTL,cmd= 2147774474, lParam=300. 
  07-02 17:46:11.363 D/SurfaceFlinger( 1012): [SF client] REMOVE (0xb40000713f41cdf0) for (30797:com.transsion.personalizedService.xos)
  07-02 17:46:11.406 W/ResourcesCompat(30797): Failed to inflate ColorStateList, leaving it to the framework
  07-02 17:46:11.406 W/ResourcesCompat(30797): java.lang.UnsupportedOperationException: Failed to resolve attribute at index 0: 
TypedValue{t=0x2/d=0x7f0401a6 a=-1}, theme={InheritanceMap=[id=0x7f110159com.transsion.personalizedService.xos:style/OS.Theme.AppCompat.xos, 
id=0x7f110150com.transsion.personalizedService.xos:style/OS.Theme.AppCompat.Light, 
id=0x7f110151com.transsion.personalizedService.xos:style/OS.Theme.AppCompat.Light.Base, 
id=0x7f1102fccom.transsion.personalizedService.xos:style/Theme.AppCompat.Light, 
id=0x7f110051com.transsion.personalizedService.xos:style/Base.Theme.AppCompat.Light, 
id=0x7f1100accom.transsion.personalizedService.xos:style/Base.V28.Theme.AppCompat.Light, 
id=0x7f1100a9com.transsion.personalizedService.xos:style/Base.V26.Theme.AppCompat.Light, 
id=0x7f1100a3com.transsion.personalizedService.xos:style/Base.V23.Theme.AppCompat.Light, 
id=0x7f1100a1com.transsion.personalizedService.xos:style/Base.V22.Theme.AppCompat.Light, 
id=0x7f110097com.transsion.personalizedService.xos:style/Base.V21.Theme.AppCompat.Light, 
id=0x7f1100afcom.transsion.personalizedService.xos:style/Base.V7.Theme.AppCompat.Light, 
id=0x7f1101fbcom.transsion.personalizedService.xos:style/Platform.AppCompat.Light, 
id=0x7f110206com.transsion.personalizedService.xos:style/Platform.V25.AppCompat.Light, id=0x1030241android:style/Theme.Material.Light.NoActionBar, 
id=0x1030237android:style/Theme.Material.Light, id=0x103000candroid:style/Theme.Light, id=0x1030005android:style/Theme], 
Themes=[com.transsion.personalizedService.xos:style/OS.Theme.AppCompat.xos, forced, android:style/Theme.DeviceDefault.Light.DarkActionBar, forced]}
  07-02 17:46:11.406 W/ResourcesCompat(30797): 	at android.content.res.TypedArray.getColor(TypedArray.java:540)
  07-02 17:46:11.406 W/ResourcesCompat(30797): 	at android.content.res.OverrideTypedArray.getColor(OverrideTypedArray.java:50)
  07-02 17:46:11.406 W/ResourcesCompat(30797): 	at androidx.core.content.g.e.e(source.java:10)
  07-02 17:46:11.406 W/ResourcesCompat(30797): 	at androidx.core.content.g.e.b(source.java:3)
  07-02 17:46:11.406 W/ResourcesCompat(30797): 	at androidx.core.content.g.e.a(source.java:3)
  07-02 17:46:11.406 W/ResourcesCompat(30797): 	at androidx.core.content.g.j.l(source.java:3)
  07-02 17:46:11.406 W/ResourcesCompat(30797): 	at androidx.core.content.g.j.e(source.java:3)
  07-02 17:46:12.060 I/libPowerHal(  970): [PD] fpsgo update cmd:1438300, param:1000
  07-02 17:46:12.060 I/libPowerHal(  970): [PD] fpsgo update cmd:1438400, param:1000
  07-02 17:46:12.060 I/libPowerHal(  970): [PD] fpsgo update cmd:1438600 param:1000
  07-02 17:46:12.061 I/libPowerHal(  970): [PD] fpsgo update cmd:1438700 param:1000
  07-02 17:46:12.169 D/tranpm/BehaviorManager( 1698): onMemPressureChange : level 0
  07-02 17:46:12.206 I/StatusBarNetworkRateView( 2380): wifi is default. hide second network rate view. StatusBarNetworkRateView subId=2, 
isFirstSimCard=false, mLocation=QS_NEW NetworkRateState=NetworkRateState{visible=true, activeMobileDataSubId=2, totalRate=3.67, netWorkState=1, 
isAirplane=false, netRateStateBySettingGlobal=1, networkRate='3,67', networkRateUnit='KB/S'}
> 07-02 17:46:12.245 I/BufferQueueProducer( 1012): [StatusBar#97](this:0xb40000731f578a88,id:-1,api:0,p:-1,c:1012) queueBuffer: fps=0.10 dur=10005.86 
max=10005.86 min=10005.86
  07-02 17:46:12.260 I/BufferQueueProducer( 1012): [VDS-studio.screen.sharing:0 SINK](this:0xb40000725f6b6a38,id:-1,api:1,p:1012,c:1012) queueBuffer: 
fps=19.25 dur=1402.31 max=947.90 min=9.00
  07-02 17:46:12.262 I/hwcomposer(  935): [HWCDisplay] [Display_0 (type:1)] fps:19.660479,dur:1424.18,max:949.33,min:9.74  
  07-02 17:46:12.329 I/adbd    ( 1129): adbd service requested 'shell:getprop'
  07-02 17:46:12.331 D/TranWifiTputMonitor( 1698): WIFI: TX: 2 RX: 3 TOTAL = 5
  07-02 17:46:12.332 D/TranWifiTputMonitor( 1698): High Tput: false, TOTAL TPUT: 5
  07-02 17:46:12.428 I/mtkpower@impl(  970): [powerd_req] TIMER_MSG_PERF_LOCK_TIMEOUT hdl:55986
  07-02 17:46:12.429 I/libPowerHal(  970): [PD] MTKPOWER_HINT_EXT_LAUNCH update cmd:2020000 param:0
  07-02 17:46:12.429 I/libPowerHal(  970): [PD] MTKPOWER_HINT_EXT_LAUNCH update cmd:1404300 param:0
  07-02 17:46:12.430 I/libPowerHal(  970): [PD] MTKPOWER_HINT_EXT_LAUNCH update cmd:2054400, param:1
  07-02 17:46:12.431 I/libPowerHal(  970): [PD] MTKPOWER_HINT_EXT_LAUNCH update cmd:1000000 param:-1
  07-02 17:46:12.589 D/BoundBrokerSvc( 4458): onRebind: Intent { act=com.google.android.gms.presencemanager.service.START dat=chimera-action:/... 
cmp=com.google.android.gms/.chimera.PersistentApiService }
  07-02 17:46:12.598 D/BoundBrokerSvc( 4458): onRebind: Intent { act=com.google.android.gms.presencemanager.service.INTERNAL_IDENTITY 
dat=chimera-action:/... cmp=com.google.android.gms/.chimera.PersistentApiService }
  07-02 17:46:12.683 D/tranpm/BehaviorManager( 1698): onMemPressureChange : level 0
  07-02 17:46:12.809 D/ActivityManager( 1698): TaskProcess diedRecentApp info=ApplicationExitInfo(timestamp=02/07/26, 17.46 pid=11190 realUid=10509 
packageUid=10509 definingUid=10509 user=0 process=com.erbete.customer reason=10 (USER REQUESTED) subreason=21 (FORCE STOP) status=0 recentTaskInfo=0 adj=0 
procState=TOP  swapPss=0,00 importance=100 pss=0,00 rss=618MB description=stop com.erbete.customer due to from pid 23995 state=empty trace=null
  07-02 17:46:12.826 I/Hiber/importantScene( 1698): isTrafficActive uid:10271 speed :0
  07-02 17:46:12.826 I/Hiber/appStateMachine( 1698): uid:10271 enter FrozenState
  07-02 17:46:12.838 I/Hiber/stateManager( 1698): freeze uid: 10271 com.whatsapp costTime=11ms ,last unfreeze 5s ago
  07-02 17:46:12.839 I/Hiber/restrictionPolicy( 1698): uid:10271  pkgName:com.whatsapp isAllowedNet
  07-02 17:46:12.840 I/Hiber/hiber( 1698): msg for start proxy frozen state
  07-02 17:46:12.840 D/ActivityManager( 1698): Hiber try idle uid[10271] by hiber ,bgTime>0 ? true,isIdled before ? true ,isCurAllowListed ? false 
,isProcStateBackground?true
  07-02 17:46:13.487 D/ActivityTaskManager( 1698): 	at com.android.server.am.ActivityManagerService.setActivityController(ActivityManagerService.java:8394)
  07-02 17:46:13.487 D/ActivityTaskManager( 1698): 	at android.app.IActivityManager$Stub.onTransact(IActivityManager.java:3689)
  07-02 17:46:13.487 D/ActivityTaskManager( 1698): 	at com.android.server.am.ActivityManagerService.onTransact(ActivityManagerService.java:3154)
  07-02 17:46:13.487 D/ActivityTaskManager( 1698): 	at android.os.Binder.execTransactInternal(Binder.java:1529)
  07-02 17:46:13.487 D/ActivityTaskManager( 1698): 	at android.os.Binder.execTransact(Binder.java:1460)
  07-02 17:46:13.488 W/ActivityManager( 1698): registerReceiverWithFeature: no app for null
> 07-02 17:46:13.514 W/ParceledListSlice( 1698): Element #192 is 27716 bytes.
  07-02 17:46:13.528 D/ActivityTaskManager( 1698): ActivityTaskManagerService setSimplifyAnimByLauncherType packageName: com.erbete.customer
  07-02 17:46:13.528 E/TranDynamicBarAnimControllerImpl( 1698): TranDynamicBarAnimControllerImpl setSimplifyAnimByLauncherType pkgName:com.erbete.customer
  07-02 17:46:13.528 E/TranDynamicBarAnimControllerImpl( 1698): end setSimplifyAnimByLauncherType mSimplifyAnimOpenPkgName:com.erbete.customer 
simplifyAnimByLauncherType:0
  07-02 17:46:13.529 D/os.WindowManagerServiceLice( 1698): onStartActivityAsUser, isPreloadIntent =  false
  07-02 17:46:13.529 E/ActivityTaskManager( 1698): agaresPreload error: activityInfo is null
  07-02 17:46:13.529 I/mtkpower_client( 1698): perf_cus_lock_hint hint:105, dur:150, pid:1698
  07-02 17:46:13.529 W/SystemBinderBigCoreFeature( 1698): [setAffinity] Pid:2456 mask:192
  07-02 17:46:13.530 D/AppFlingMode(  970): [CheckAppFlingHint] 105 com.transsion.XOSLauncher -1
  07-02 17:46:13.530 I/Hiber/fastState( 1698): do fastFreeze reason=appStart
  07-02 17:46:13.530 I/tranpm/NormalReclaimer( 1698): doReclaim gap: 170460
  07-02 17:46:13.530 I/ActivityTaskManager( 1698): floatWindow: multiWindowId = 0
  07-02 17:46:13.531 W/ActivityTaskManager( 1698): callingPackage for (uid=2000, pid=24071) has no WPC
  07-02 17:46:13.531 D/aegean_TranRecentTasksProxy( 1698): FW_getTasks=9
  07-02 17:46:13.531 D/aegean_TranRecentTasksProxy( 1698): FW_getTasks=9
  07-02 17:46:13.531 I/ActivityTaskManager( 1698): TaskLaunchParamsModifier: pkgName = null, isMultiWindowTaskDisplayArea  = false
  07-02 17:46:13.531 D/ActivityTaskManager( 1698): TaskLaunchParamsModifier:task=null activity=null display-area-from-current-params=null 
display-area-from-default-fallback=DefaultTaskDisplayArea@32511995 display-id=0 task-display-area-windowing-mode=1 
suggested-display-area=DefaultTaskDisplayArea@32511995
  07-02 17:46:13.532 D/AppLockLice( 1698): onActivityStarterIntercept: callingPackage = com.android.shell, 
aInfo.packageName:com.erbete.customer,mComeLockPkgList =[]
  07-02 17:46:13.532 I/libPowerHal(  970): [setClusterFreq] MTKPOWER_HINT_START_ACTIVITY_INNER: sysfs_freq set cpu freq: 2000000 -1 2200000 -1 
  07-02 17:46:13.533 W/OptProp ( 1698): Cannot read opt property android.window.PROPERTY_COMPAT_ALLOW_ORIENTATION_OVERRIDE
  07-02 17:46:13.533 D/MagellanHandle( 1698): updateRefreshRateForSceneVsyncs what = 23
  07-02 17:46:13.536 D/ActivityTaskManager( 1698): TaskLaunchParamsModifier:task=null activity=ActivityRecord{eeb78dc u0 com.erbete.customer/.MainActivity 
display-area-from-current-params=null display-area-from-default-fallback=DefaultTaskDisplayArea@32511995 display-id=0 task-display-area-windowing-mode=1 
suggested-display-area=DefaultTaskDisplayArea@32511995
  07-02 17:46:13.536 E/ActivityTaskManager( 1698): AppLaunchTracker getTaskIndex error: task is null.
  07-02 17:46:13.536 I/ActivityTaskManager( 1698): TaskLaunchParamsModifier: pkgName = null, isMultiWindowTaskDisplayArea  = false
  07-02 17:46:13.536 I/ActivityTaskManager( 1698): TaskLaunchParamsModifier: pkgName = null
  07-02 17:46:13.537 D/ActivityTaskManager( 1698): TaskLaunchParamsModifier:task=null activity=ActivityRecord{eeb78dc u0 com.erbete.customer/.MainActivity 
t-1} display-area-from-current-params=null display-area-from-default-fallback=DefaultTaskDisplayArea@32511995 display-id=0 
task-display-area-windowing-mode=1 suggested-display-area=DefaultTaskDisplayArea@32511995 non-freeform-task-display-area 
display-area=DefaultTaskDisplayArea@32511995 default-portrait freeform-size-mismatch=Rect(276, 672 - 804, 1752)
  07-02 17:46:13.537 I/ActivityTaskManager( 1698): needHookReparentToDefaultDisplay: sourceRecord = null,r = ActivityRecord{eeb78dc u0 
com.erbete.customer/.MainActivity t-1}, tda = null
> 07-02 17:46:13.538 I/BufferQueueDebug( 1012): [Task=48212#19919](this:0xb40000731f59dad8,id:-1,api:0,p:-1,c:-1) BufferQueue 
core=(1012:/system/bin/surfaceflinger)
  07-02 17:46:13.539 I/ActivityTaskManager( 1698): TaskLaunchParamsModifier: pkgName = null, isMultiWindowTaskDisplayArea  = false
  07-02 17:46:13.539 I/ActivityTaskManager( 1698): TaskLaunchParamsModifier: pkgName = null
> 07-02 17:46:13.539 D/ActivityTaskManager( 1698): TaskLaunchParamsModifier:task=Task{1ac0774 #48212 type=standard A=10509:com.erbete.customer} 
activity=ActivityRecord{eeb78dc u0 com.erbete.customer/.MainActivity t-1} display-from-task=0 display-id=0 task-display-area-windowing-mode=1 
suggested-display-area=DefaultTaskDisplayArea@32511995 inherit-from-task=fullscreen non-freeform-task-display-area 
display-area=DefaultTaskDisplayArea@32511995 default-portrait freeform-size-mismatch=Rect(276, 672 - 804, 1752)
  07-02 17:46:13.540 I/ScenesManager( 4503): handlerTaskChange new TaskId com.erbete.customer48212 old TaskId 
  07-02 17:46:13.540 I/SmartPanelService( 4503): onTaskCreated mCreateTaskId = com.erbete.customer48212
> 07-02 17:46:13.540 I/BufferQueueDebug( 1012): [ActivityRecord{eeb78dc u0 com.erbete.customer/.MainActivity 
t48212}#19920](this:0xb40000731f559558,id:-1,api:0,p:-1,c:-1) BufferQueue core=(1012:/system/bin/surfaceflinger)
> 07-02 17:46:13.541 D/os.fingerprint( 1698): onTaskMovedToFront Task{1ac0774 #48212 type=standard A=10509:com.erbete.customer}
  07-02 17:46:13.541 D/os.fingerprint( 1698): activityComponent = ComponentInfo{com.erbete.customer/com.erbete.customer.MainActivity} inMultiWindow = false
  07-02 17:46:13.542 I/mtkpower@impl(  970): [setMode] type:5, enabled:1
  07-02 17:46:13.542 D/AppFlingMode(  970): [CheckAppFlingHint] 11 com.transsion.XOSLauncher -1
  07-02 17:46:13.542 D/TranStartingSurfaceController( 1698): hookAddStartingWindow activityRecord=ActivityRecord{eeb78dc u0 
com.erbete.customer/.MainActivity t48212} snapshot=null type=2
  07-02 17:46:13.542 D/TranStartingSurfaceController( 1698): should not addstartingsurface isStartingFromLauncher=false activity=ActivityRecord{eeb78dc u0 
com.erbete.customer/.MainActivity t48212}
  07-02 17:46:13.542 W/ActivityTaskManager( 1698): Add starting :ActivityRecord{eeb78dc u0 com.erbete.customer/.MainActivity t48212} 
startingData=SplashScreenStartingData{f3c26e0 waitForSyncTransactionCommit=false removeAfterTransaction= 0}
  07-02 17:46:13.542 I/libPowerHal(  970): [setGPUFreq] LAUNCH user set gpu freq min:0, max:-1
  07-02 17:46:13.542 I/libPowerHal(  970): LAUNCH: set gpu opp level: 0
  07-02 17:46:13.543 I/libPowerHal(  970): LAUNCH: set gpu opp level max: 0
  07-02 17:46:13.543 D/MagellanHandle( 1698): updateRefreshRateForSceneVsyncs what = 23
  07-02 17:46:13.543 I/libPowerHal(  970): [setGPUFreq] Soft min/max = (0, 0); Hard min/max = (44, 0)
  07-02 17:46:13.543 I/libPowerHal(  970): [setGPUFreq] final min/max = (0, 0)
  07-02 17:46:13.543 I/libPowerHal(  970): LAUNCH: set gpu opp level: 0
> 07-02 17:46:13.543 I/PowerHalWrapper( 1698): amsBoostNotify pid:2371,activity:com.android.launcher3.uioverrides.QuickstepLauncher, 
package:com.transsion.XOSLauncher, mProcessCreatePackcom.erbete.customer 
  07-02 17:46:13.543 I/PowerHalWrapper( 1698): state: 0 
  07-02 17:46:13.543 I/libPowerHal(  970): LAUNCH: set gpu opp level max: 0
  07-02 17:46:13.543 I/mtkpower_client( 1698): [PowerHal_Wrap_notifyAppState] 
com.transsion.XOSLauncher/com.android.launcher3.uioverrides.QuickstepLauncher pid=2371 activityId:4253868 state:0
  07-02 17:46:13.543 I/mtkpower_client( 1698): [Legacy][PowerHal_Wrap_notifyAppState] 
com.transsion.XOSLauncher/com.android.launcher3.uioverrides.QuickstepLauncher pid=2371 state:4253868
  07-02 17:46:13.543 D/TranSplashScreenManager( 2380): modifySuggestType 1 => 1 for ActivityInfo{4180a3d com.erbete.customer.MainActivity}
  07-02 17:46:13.544 W/Hiber/fastState( 1698): uid=10131 is default-app
  07-02 17:46:13.544 W/Hiber/fastState( 1698): uid=10205 is default-app
  07-02 17:46:13.544 I/hwcomposer(  935): [HWCDisplay] [Display_0 (type:1)] fps:0.779766,dur:1282.44,max:1282.44,min:1282.44  
  07-02 17:46:13.544 I/PowerHalWrapper( 1698): amsBoostNotify AMS_BOOST_PROCESS_CREATE_BOOST:false 
  07-02 17:46:13.545 I/MemoryCollector( 1698): do beginMemoryPredict 
  07-02 17:46:13.547 I/ActivityTaskManager( 1698): START u0 {act=android.intent.action.MAIN cat=[android.intent.category.LAUNCHER] flg=0x10200000 
cmp=com.erbete.customer/.MainActivity} with LAUNCH_SINGLE_TOP from uid 2000 (BAL_ALLOW_PERMISSION) result code=0
  07-02 17:46:13.547 I/ActivityTaskManager( 1698): Add pending draw ActivityRecord{eeb78dc u0 com.erbete.customer/.MainActivity t48212}
  07-02 17:46:13.547 D/aegean_PivotX+( 1698): applyActivityLaunchStart error={pkg='com.erbete.customer', uid=0, proc=com.erbete.customer, pid=0, type=7, 
act=com.erbete.customer/.MainActivity, mHome=false, onTop=false, appLaunch=true} lt:7
  07-02 17:46:13.547 I/libPowerHal(  970): [perfNotifyAppState] pack:com.transsion.XOSLauncher, act:com.android.launcher3.uioverrides.QuickstepLauncher, 
state:0, pid:2371, uid:10196, fps:-1
  07-02 17:46:13.547 D/uas-service( 1219): set scene=0x1 success
  07-02 17:46:13.548 I/Monkey  (24071): Events injected: 1
  07-02 17:46:13.549 I/SmartPanelService( 4503): activityCheck pkgName: com.erbete.customer, className: com.erbete.customer.MainActivity isResume=false 
isDrawn = false
  07-02 17:46:13.549 I/MultiWindowUtils( 4503): pkg in multi window
  07-02 17:46:13.550 I/Hiber/nativeServiceClient( 1698): check binder uid=10098
  07-02 17:46:13.550 W/SplitSelectStateCtor( 2371): Missing session instanceIds
  07-02 17:46:13.556 I/libPowerHal(  970): [thermal ux] update cluster0 to freqToSet:2000000 maxToSet:2000000
  07-02 17:46:13.556 I/libPowerHal(  970): [thermal ux] update cluster1 to freqToSet:2200000 maxToSet:2200000
  07-02 17:46:13.556 I/libPowerHal(  970): [setClusterFreq] MTKPOWER_HINT_LAUNCHER_ANIMA: sysfs_freq set cpu freq: 2000000 -1 2200000 -1 
  07-02 17:46:13.556 I/Hiber/fastState( 1698): fastFreeze reason=appStart size=6 uids=[10098, 10155, 10198, 10199, 10225, 10254] about costTime=25ms
  07-02 17:46:13.556 I/Hiber/nativeServiceClient( 1698): check binder uid=10198
  07-02 17:46:13.556 I/Usf/appStateManager( 1698): handleUpdateTaskOverLap uid: 10509    packageName:com.erbete.customer remove
> 07-02 17:46:13.557 I/PowerHalWrapper( 1698): amsBoostProcessCreate package:com.erbete.customer 
  07-02 17:46:13.558 D/BackupManagerService( 1698): mUserServices size: 1
> 07-02 17:46:13.558 V/WindowManagerShell( 2380): Transition requested (#1233): android.os.BinderProxy@fbec58a TransitionRequestInfo { type = OPEN, 
triggerTask = TaskInfo{userId=0 taskId=48212 displayId=0 isRunning=true baseIntent=Intent { act=android.intent.action.MAIN 
cat=[android.intent.category.LAUNCHER] flg=0x10200000 cmp=com.erbete.customer/.MainActivity } 
baseActivity=ComponentInfo{com.erbete.customer/com.erbete.customer.MainActivity} 
topActivity=ComponentInfo{com.erbete.customer/com.erbete.customer.MainActivity} origActivity=null 
realActivity=ComponentInfo{com.erbete.customer/com.erbete.customer.MainActivity} numActivities=1 lastActiveTime=179755027 supportsMultiWindow=true 
resizeMode=1 isResizeable=true minWidth=-1 minHeight=-1 defaultMinSize=110 token=WCT{android.window.IWindowContainerToken$Stub$Proxy@72657fb} 
topActivityType=1 pictureInPictureParams=null shouldDockBigOverlays=false launchIntoPipHostTaskId=-1 lastParentTaskIdBeforePip=-1 
displayCutoutSafeInsets=Rect(0, 108 - 0, 0) topActivityInfo=ActivityInfo{1442018 com.erbete.customer.MainActivity} launchCookies=[] 
positionInParent=Point(0, 0) parentTaskId=-1 isFocused=false isVisible=false isVisibleRequested=false isSleeping=false locusId=null displayAreaFeatureId=1 
isTopActivityTransparent=false appCompatTaskInfo=AppCompatTaskInfo { topActivityInSizeCompat=false topActivityEligibleForLetterboxEducation= 
falseisLetterboxEducationEnabled= false isLetterboxDoubleTapEnabled= false topActivityEligibleForUserAspectRatioButton= false 
topActivityBoundsLetterboxed= false isFromLetterboxDoubleTap= false topActivityLetterboxVerticalPosition= -1 topActivityLetterboxHorizontalPosition= -1 
topActivityLetterboxWidth=1080 topActivityLetterboxHeight=2436 isUserFullscreenOverrideEnabled=false isSystemFullscreenOverrideEnabled=false 
cameraCompatTaskInfo=CameraCompatTaskInfo { cameraCompatControlState=hidden freeformCameraCompatMode=inactive}}}, pipTask = null, remoteTransition = null, 
displayChange = null, flags = 0, debugId = 1233 }
  07-02 17:46:13.559 I/mtkpower_client( 1698): perf_cus_lock_hint, ret_hdl:55991
  07-02 17:46:13.559 I/PowerHalMgrImpl( 1698): hdl:55991, pid:1698 
  07-02 17:46:13.559 D/ShellEventHandler( 2380): onPostRequestStartTransition OPEN token=android.os.BinderProxy@fbec58a
  07-02 17:46:13.559 D/AppFlingMode(  970): [CheckAppFlingHint] 21 com.transsion.XOSLauncher -1
  07-02 17:46:13.560 D/SmartEventManager( 4503): dispatchEvent event: SmartEvent(action=activity_check, extras=Bundle[{is_activity_check=true}])
  07-02 17:46:13.561 I/SmartPanelRepository( 4503): hasLoadData true  data size = 12
  07-02 17:46:13.561 I/ActivityManager( 1698): Process ProcessRecord{a58ff0d 0:com.erbete.customer/u0a509} already pending start
  07-02 17:46:13.561 I/ActivityManager( 1698): Process ProcessRecord{a58ff0d 0:com.erbete.customer/u0a509} already pending start
  07-02 17:46:13.563 I/SimpleEventAdapt( 3928): onActivityEvent get com.transsion.XOSLauncher, com.android.launcher3.uioverrides.QuickstepLauncher,false
  07-02 17:46:13.563 I/SimpleEventAdapt( 3928): notifyEvent2  activity_event
  07-02 17:46:13.563 I/SimpleEventAdapt( 3928): notifyEvent  1
  07-02 17:46:13.564 I/CacheManager( 3928):  save new data to cache activity_event
  07-02 17:46:13.564 D/SceneController( 4503): checkCanShow canShow: true  changed false 
  07-02 17:46:13.564 I/bsc     ( 3928): notifyDataChange in activity_event, 1
  07-02 17:46:13.564 I/DataServiceImplV2( 3928): StandardDataService notifyDataChange  in 
  07-02 17:46:13.564 I/DataServiceImplV2( 3928): StandardDataService notifyDataChange  curServiceName StandardDataService type:activity_event
  07-02 17:46:13.564 I/Kolun_AI( 3928): SystemEventSubscribe: onPublishData {"type":"activity_event","time":1782989173563,"data":"{\"className\":\"com.andr
oid.launcher3.uioverrides.QuickstepLauncher\",\"isResumed\":false,\"packageName\":\"com.transsion.XOSLauncher\"}","provider":"dc","dc_version":2030380000,"
data_version":1,"user_id":0}
  07-02 17:46:13.564 I/Kolun_AI( 3928): SystemEventSubscribe: publisher.getMatcher() activity_event
  07-02 17:46:13.565 I/ApiInvoke1.7.1( 3928): SubscribeManager: publishData success host DataCenter#StandardDataService matcher activity_event
  07-02 17:46:13.566 I/DisplayDeviceRepository( 1698): Display device changed: DisplayDeviceInfo{"Layar Bawaan": uniqueId="local:0", 1080 x 2436, modeId 
2, renderFrameRate 60.000004, defaultModeId 1, userPreferredModeId -1, supportedModes [{id=1, width=1080, height=2436, fps=120.00001, vsync=120.00001, 
synthetic=false, alternativeRefreshRates=[60.0], supportedHdrTypes=[]}, {id=2, width=1080, height=2436, fps=60.0, vsync=60.0, synthetic=false, 
alternativeRefreshRates=[120.00001], supportedHdrTypes=[]}], colorMode 0, supportedColorModes [0, 7, 9], hdrCapabilities 
HdrCapabilities{mSupportedHdrTypes=[], mMaxLuminance=500.0, mMaxAverageLuminance=500.0, mMinLuminance=0.0}, allmSupported false, gameContentTypeSupported 
false, density 480, 392.839 x 392.828 dpi, appVsyncOff 2400001, presDeadline 28600000, cutout DisplayCutout{insets=Rect(0, 108 - 0, 0) 
waterfall=Insets{left=0, top=0, right=0, bottom=0} boundingRect={Bounds=[Rect(0, 0 - 0, 0), Rect(468, 0 - 612, 108), Rect(0, 0 - 0, 0), Rect(0, 0 - 0, 
0)]} cutoutPathParserInfo={CutoutPathParserInfo{displayWidth=1080 displayHeight=2436 physicalDisplayWidth=1080 physicalDisplayHeight=2436 density={3.0} 
cutoutSpec={M -24,0 L -24,36 L 24,36 L 24,0 Z @dp} rotation={0} scale={1.0} physicalPixelDisplaySizeRatio={1.0}}} sideOverrides={}}, touch INTERNAL, 
rotation 0, type INTERNAL, address {port=0}, deviceProductInfo null, state ON, committedState ON, frameRateOverride , brightnessMinimum 0.0, 
brightnessMaximum 1.0, brightnessDefault 0.2, hdrSdrRatio NaN, FLAG_ALLOWED_TO_BE_DEFAULT_DISPLAY, FLAG_ROTATES_WITH_CONTENT, FLAG_SECURE, 
FLAG_SUPPORTS_PROTECTED_BUFFERS, FLAG_TRUSTED, installOrientation 0, displayShape DisplayShape{ spec=596679847 displayWidth=1080 displayHeight=2436 
physicalPixelDisplaySizeRatio=1.0 rotation=0 offsetX=0 offsetY=0 scale=1.0}}
  07-02 17:46:13.589 I/app_process(24071): System.exit called, status: 0
  07-02 17:46:13.589 I/AndroidRuntime(24071): VM exiting with result code 0.
  07-02 17:46:13.589 E/ApplicationHelper( 1698): Fail to get PackageManager
  07-02 17:46:13.591 D/aegean_TranRecentTasksProxy( 1698): FW_getTasks=5
  07-02 17:46:13.592 D/aegean_TranRecentTasksProxy( 1698): FW_getTasks=9
  07-02 17:46:13.593 D/BackupManagerService( 1698): mUserServices size: 1
> 07-02 17:46:13.593 I/BufferQueueDebug( 1012): [d952b0b Splash Screen com.erbete.customer#19921](this:0xb40000731f65c788,id:-1,api:0,p:-1,c:-1) 
BufferQueue core=(1012:/system/bin/surfaceflinger)
  07-02 17:46:13.595 D/aegean_TranRecentTasksProxy( 1698): FW_getTasks=5
  07-02 17:46:13.595 D/aegean_TranRecentTasksProxy( 1698): FW_getTasks=9
  07-02 17:46:13.595 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.039808,0.000059, totalTime 0.039868 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:46:13.597 D/aegean_TranRecentTasksProxy( 1698): FW_getTasks=5
  07-02 17:46:13.598 D/aegean_TranRecentTasksProxy( 1698): FW_getTasks=9
  07-02 17:46:13.599 D/InputEventReceiver( 2380): Input log is disabled in InputEventReceiver.
  07-02 17:46:13.600 D/aegean_TranRecentTasksProxy( 1698): FW_getTasks=5
  07-02 17:46:13.600 D/aegean_TranRecentTasksProxy( 1698): FW_getTasks=9
  07-02 17:46:13.600 I/erbete.customer(14808): Using generational CollectorTypeCMC GC.
  07-02 17:46:13.602 D/aegean_TranRecentTasksProxy( 1698): FW_getTasks=5
  07-02 17:46:13.602 D/aegean_TranRecentTasksProxy( 1698): FW_getTasks=9
  07-02 17:46:13.604 D/aegean_TranRecentTasksProxy( 1698): FW_getTasks=5
  07-02 17:46:13.604 D/aegean_TranRecentTasksProxy( 1698): FW_getTasks=9
  07-02 17:46:13.606 D/aegean_TranRecentTasksProxy( 1698): FW_getTasks=5
  07-02 17:46:13.606 D/aegean_TranRecentTasksProxy( 1698): FW_getTasks=9
  07-02 17:46:13.608 I/adbd    ( 1129): jdwp connection from 14808
  07-02 17:46:13.608 D/aegean_TranRecentTasksProxy( 1698): FW_getTasks=5
  07-02 17:46:13.609 D/aegean_TranRecentTasksProxy( 1698): FW_getTasks=9
  07-02 17:46:13.610 D/nativeloader(14808): Load libframework-connectivity-tiramisu-jni.so using APEX ns com_android_tethering for caller 
/apex/com.android.tethering/javalib/framework-connectivity-t.jar: ok
  07-02 17:46:13.611 D/aegean_TranRecentTasksProxy( 1698): FW_getTasks=5
  07-02 17:46:13.612 D/aegean_TranRecentTasksProxy( 1698): FW_getTasks=9
  07-02 17:46:13.614 D/CoreBackPreview( 1698): Window{d952b0b u0 Splash Screen com.erbete.customer}: Setting back callback 
OnBackInvokedCallbackInfo{mCallback=android.window.IOnBackInvokedCallback$Stub$Proxy@8ad0aeb, mPriority=0, mIsAnimationCallback=false}
  07-02 17:46:13.614 D/aegean_TranRecentTasksProxy( 1698): FW_getTasks=5
  07-02 17:46:13.616 D/aegean_TranRecentTasksProxy( 1698): FW_getTasks=9
> 07-02 17:46:13.616 I/BufferQueueDebug( 1012): [Splash Screen com.erbete.customer#19922](this:0xb40000731f5e7b78,id:-1,api:0,p:-1,c:-1) BufferQueue 
core=(1012:/system/bin/surfaceflinger)
  07-02 17:46:13.618 D/aegean_TranRecentTasksProxy( 1698): FW_getTasks=5
  07-02 17:46:13.618 D/aegean_TranRecentTasksProxy( 1698): FW_getTasks=9
  07-02 17:46:13.618 W/WindowManager( 1698): Changing focus from Window{ac8a64c u0 
com.transsion.XOSLauncher/com.android.launcher3.uioverrides.QuickstepLauncher} to null displayId=0 
Callers=com.android.server.wm.RootWindowContainer.updateFocusedWindowLocked:528 com.android.server.wm.WindowManagerService.updateFocusedWindowLocked:6849 
com.android.server.wm.WindowManagerService.relayoutWindowInner:2856 com.android.server.wm.WindowManagerService.relayoutWindow:2515 
  07-02 17:46:13.619 W/TranInstanceHelper(14808): Failed to instance com.transsion.hubcore.linkplus.implement.app.TranActivityThreadLinkplusImpl, 
java.lang.ClassNotFoundException: com.transsion.hubcore.linkplus.implement.app.TranActivityThreadLinkplusImpl
  07-02 17:46:13.619 D/TranClassInfo(14808): instance successfully. com.transsion.hubcore.app.TranActivityThreadImpl@b234c75 from 
com.transsion.hubcore.app.ITranActivityThread
  07-02 17:46:13.621 D/BufferQueueConsumer( 2380): [](id:94c0000021f,api:0,p:-1,c:2380) connect: controlledByApp=false
  07-02 17:46:13.621 D/aegean_TranRecentTasksProxy( 1698): FW_getTasks=5
> 07-02 17:46:13.622 D/BLASTBufferQueue( 2380): [VRI[customer]#529](f:0,a:0) constructor()
> 07-02 17:46:13.622 D/BLASTBufferQueue( 2380): [VRI[customer]#529](f:0,a:0) update width=1080 height=2436 format=-3 mTransformHint=0
  07-02 17:46:13.622 D/os.SingleLice(14808): instance successfully. com.transsion.widget.v3.FloatingToolbarLice@6d1640a from 
com.transsion.widget.FloatingToolbarLiceFactory
  07-02 17:46:13.622 D/os.SingleLiceFactory(14808): instance successfully. com.transsion.widget.v3.FloatingToolbarLice@6d1640a from 
android.app.IActivityThreadLice
  07-02 17:46:13.622 D/aegean_TranRecentTasksProxy( 1698): FW_getTasks=9
  07-02 17:46:13.623 D/os.SingleLice(14808): instance successfully. com.transsion.common.v1.CommonLice@d5ed47b from com.transsion.common.CommonLiceFactory
  07-02 17:46:13.623 D/os.SingleLiceFactory(14808): instance successfully. com.transsion.common.v1.CommonLice@d5ed47b from android.app.IActivityThreadLice
  07-02 17:46:13.623 D/aegean_TranRecentTasksProxy( 1698): FW_getTasks=9
  07-02 17:46:13.624 D/os.SingleLiceFactory(14808): instance successfully. com.transsion.typeface.v1.TypefaceLice@8402298 from 
android.app.IActivityThreadLice
  07-02 17:46:13.624 D/os.SingleLiceFactory(14808): using android.app.IActivityThreadLice$DefaultImpl@7693af1 instead of com.transsion.sun.SunLiceFactory  
from android.app.IActivityThreadLice
  07-02 17:46:13.624 D/aegean_TranRecentTasksProxy( 1698): FW_getTasks=5
  07-02 17:46:13.625 D/os.SingleLice(14808): instance successfully. com.transsion.fdleak.FdLeakLice@f29b6d6 from com.transsion.fdleak.FdLeakLiceFactory
  07-02 17:46:13.625 D/os.SingleLiceFactory(14808): instance successfully. com.transsion.fdleak.FdLeakLice@f29b6d6 from android.app.IActivityThreadLice
  07-02 17:46:13.625 D/os.LiceInfo(14808): instance successfully. com.transsion.app.ActivityThreadLice@9fc3d57 from android.app.IActivityThreadLice
  07-02 17:46:13.625 D/aegean_TranRecentTasksProxy( 1698): FW_getTasks=9
  07-02 17:46:13.627 D/aegean_TranRecentTasksProxy( 1698): FW_getTasks=9
  07-02 17:46:13.628 D/aegean_TranRecentTasksProxy( 1698): FW_getTasks=5
  07-02 17:46:13.630 D/aegean_TranRecentTasksProxy( 1698): FW_getTasks=9
  07-02 17:46:13.631 V/ActivityManager( 1698): New death recipient com.android.server.am.ActivityManagerService$AppDeathRecipient@62293b7 for thread 
android.os.BinderProxy@c44d724
  07-02 17:46:13.632 D/aegean_TranRecentTasksProxy( 1698): FW_getTasks=5
> 07-02 17:46:13.633 D/BLASTBufferQueue( 2380): [VRI[customer]#529](f:0,a:1) acquireNextBufferLocked size=1080x2436 mFrameNumber=1 applyTransaction=true 
mTimestamp=162754766138239(auto) mPendingTransactions.size=0 graphicBufferId=10222022174215 transform=0
  07-02 17:46:13.634 D/aegean_TranRecentTasksProxy( 1698): FW_getTasks=9
  07-02 17:46:13.635 D/os.ActivityManagerServiceLice( 1698): make process active com.erbete.customer(14808)
  07-02 17:46:13.635 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000000,0.039594,0.000044, totalTime 0.039638 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:46:13.636 I/Process ( 1698): Sending signal quietly. PID: 18910 SIG: 9
  07-02 17:46:13.637 D/WindowManager( 1698): System monitor finishDrawingWindow w: Window{d952b0b u0 Splash Screen com.erbete.customer}; mDrawState = 
DRAW_PENDING
  07-02 17:46:13.642 I/DreamAnimation( 1698):  hookAppTransitSuccess called,  mState=8 and doUnlockAnimation=0
  07-02 17:46:13.642 D/BLASTSyncEngine( 1698): transition TransitionRecord{9ecd10c id=1233 type=OPEN flags=0x0} isAuthenticateSucceed false
  07-02 17:46:13.643 I/Transition( 1698): ignoreThunderbackTransition back= false change= false
  07-02 17:46:13.644 I/Transition( 1698): keep target for wallpaper animation 
> 07-02 17:46:13.644 I/BufferQueueDebug( 1012): [Transition Root: Task=48212#19923](this:0xb40000731f5c8648,id:-1,api:0,p:-1,c:-1) BufferQueue 
core=(1012:/system/bin/surfaceflinger)
  07-02 17:46:13.645 D/TranDynamicBarAnimControllerImpl( 1698): updateFlagsFromDynamicIslandToWindow pkgName:com.erbete.customer 
mStartFromDynamicIsland:false mDynamicIslandPkgName:com.google.android.gms
  07-02 17:46:13.645 I/Transition( 1698): updateFlagsFromDynamicIslandToWindow pkgName = com.erbete.customer flagsArr[0] = 0
  07-02 17:46:13.645 D/TranDynamicBarAnimControllerImpl( 1698): updateFlagsSimplifyAnimByLauncher pkgName:com.erbete.customer mSimplifyAnimType:0 
mSimplifyAnimOpenPkgName:com.erbete.customer
  07-02 17:46:13.645 I/Transition( 1698): updateFlagsSimplifyAnimByLauncher pkgName = com.erbete.customer flagsArr[0] = 0 mSimplifyAnimLaunchBounds: 
Rect(324, 698 - 498, 872)
  07-02 17:46:13.645 D/TranDynamicBarAnimControllerImpl( 1698): updateFlagsFromDynamicIslandToWindow pkgName:com.transsion.XOSLauncher 
mStartFromDynamicIsland:false mDynamicIslandPkgName:com.google.android.gms
  07-02 17:46:13.645 I/Transition( 1698): updateFlagsFromDynamicIslandToWindow pkgName = com.transsion.XOSLauncher flagsArr[0] = 0
  07-02 17:46:13.645 D/TranDynamicBarAnimControllerImpl( 1698): updateFlagsSimplifyAnimByLauncher pkgName:com.transsion.XOSLauncher mSimplifyAnimType:0 
mSimplifyAnimOpenPkgName:com.erbete.customer
  07-02 17:46:13.645 I/Transition( 1698): updateFlagsSimplifyAnimByLauncher pkgName = com.transsion.XOSLauncher flagsArr[0] = 0 mSimplifyAnimLaunchBounds: 
Rect(324, 698 - 498, 872)
  07-02 17:46:13.645 W/ActivityManager( 1698): pid 1698 system sent binder code 1 with flags 1 to frozen apps and got error -32
  07-02 17:46:13.645 D/TranDynamicBarAnimControllerImpl( 1698): updateFlagsFromDynamicIslandToWindow pkgName:null mStartFromDynamicIsland:false 
mDynamicIslandPkgName:com.google.android.gms
  07-02 17:46:13.645 I/Transition( 1698): updateFlagsFromDynamicIslandToWindow pkgName = null flagsArr[0] = 0
  07-02 17:46:13.645 D/TranDynamicBarAnimControllerImpl( 1698): updateFlagsSimplifyAnimByLauncher pkgName:null mSimplifyAnimType:0 
mSimplifyAnimOpenPkgName:com.erbete.customer
  07-02 17:46:13.645 I/Transition( 1698): updateFlagsSimplifyAnimByLauncher pkgName = null flagsArr[0] = 0 mSimplifyAnimLaunchBounds: Rect(324, 698 - 498, 
872)
  07-02 17:46:13.645 D/MagellanHandle( 1698): updateRefreshRateForSceneVsyncs what = 21
  07-02 17:46:13.645 W/DisplayManagerService( 1698): Failed to notify process 11190 that displays changed, assuming it died.
  07-02 17:46:13.645 W/DisplayManagerService( 1698): android.os.DeadObjectException
  07-02 17:46:13.645 W/DisplayManagerService( 1698): 	at android.os.BinderProxy.transactNative(Native Method)
  07-02 17:46:13.645 W/DisplayManagerService( 1698): 	at android.os.BinderProxy.transact(BinderProxy.java:686)
  07-02 17:46:13.645 W/DisplayManagerService( 1698): 	at 
android.hardware.display.IDisplayManagerCallback$Stub$Proxy.onDisplayEvent(IDisplayManagerCallback.java:119)
  07-02 17:46:13.645 W/DisplayManagerService( 1698): 	at 
com.android.server.display.DisplayManagerService$CallbackRecord.notifyDisplayEventAsync(DisplayManagerService.java:3840)
  07-02 17:46:13.645 W/DisplayManagerService( 1698): 	at com.android.server.ServiceThread.run(ServiceThread.java:46)
  07-02 17:46:13.645 W/DisplayManagerService( 1698): 	at com.android.server.UiThread.run(UiThread.java:45)
  07-02 17:46:13.645 D/DisplayManagerService( 1698): Drop pending events for dead process 11190
  07-02 17:46:13.646 E/ApplicationHelper( 1698): Fail to get PackageManager
  07-02 17:46:13.647 I/tranpm/CommonReclaim-ProcessReclaimer( 1698): Kill process: com.openai.chatgpt, pid: 18910, adj: 925, Rss: 128792, taskId:-1 , 
frozen:true ,rssAnon:74984 kB ,rssFile:105400 kB ,rssShmem:2216 kB ,vmSwap[swapRss]:4844 kB
  07-02 17:46:13.647 D/aegean_TranRecentTasksProxy( 1698): FW_getTasks=9
> 07-02 17:46:13.648 I/BufferQueueDebug( 1012): [Surface(name=174f644 NavigationBar0)/@0x46ac9dc - animation-leash of 
insets_animation#19924](this:0xb40000731f609e38,id:-1,api:0,p:-1,c:-1) BufferQueue core=(1012:/system/bin/surfaceflinger)
> 07-02 17:46:13.649 I/BufferQueueDebug( 1012): [Surface(name=f48663c StatusBar)/@0x8eec4a5 - animation-leash of 
insets_animation#19925](this:0xb40000731f66ab58,id:-1,api:0,p:-1,c:-1) BufferQueue core=(1012:/system/bin/surfaceflinger)
  07-02 17:46:13.649 D/aegean_TranRecentTasksProxy( 1698): FW_getTasks=5
  07-02 17:46:13.650 D/WindowManager( 1698): updateSystemBarAttributes appearance:24, win appearance:24, opaqueAppearance:0, win:Window{d952b0b u0 Splash 
Screen com.erbete.customer}, appearanceRegions=[AppearanceRegion{LIGHT_STATUS_BARS bounds=[0,0][1080,2436]}]
  07-02 17:46:13.651 D/aegean_TranRecentTasksProxy( 1698): FW_getTasks=9
> 07-02 17:46:13.652 I/BufferQueueDebug( 1012): [3ae2b6b ActivityRecordInputSink 
com.erbete.customer/.MainActivity#19926](this:0xb40000731f604318,id:-1,api:0,p:-1,c:-1) BufferQueue core=(1012:/system/bin/surfaceflinger)
  07-02 17:46:13.653 I/Process ( 1698): Sending signal quietly. PID: 15486 SIG: 9
> 07-02 17:46:13.655 V/WindowManager( 1698): Sent Transition (#1233) createdAt=07-02 17:46:13.536 via request=TransitionRequestInfo { type = OPEN, 
triggerTask = TaskInfo{userId=0 taskId=48212 displayId=0 isRunning=true baseIntent=Intent { act=android.intent.action.MAIN 
cat=[android.intent.category.LAUNCHER] flg=0x10200000 cmp=com.erbete.customer/.MainActivity } 
baseActivity=ComponentInfo{com.erbete.customer/com.erbete.customer.MainActivity} 
topActivity=ComponentInfo{com.erbete.customer/com.erbete.customer.MainActivity} origActivity=null 
realActivity=ComponentInfo{com.erbete.customer/com.erbete.customer.MainActivity} numActivities=1 lastActiveTime=179755027 supportsMultiWindow=true 
resizeMode=1 isResizeable=true minWidth=-1 minHeight=-1 defaultMinSize=110 token=WCT{RemoteToken{d6fc33e Task{1ac0774 #48212 type=standard 
A=10509:com.erbete.customer}}} topActivityType=1 pictureInPictureParams=null shouldDockBigOverlays=false launchIntoPipHostTaskId=-1 
lastParentTaskIdBeforePip=-1 displayCutoutSafeInsets=Rect(0, 108 - 0, 0) topActivityInfo=ActivityInfo{607359f com.erbete.customer.MainActivity} 
launchCookies=[] positionInParent=Point(0, 0) parentTaskId=-1 isFocused=false isVisible=false isVisibleRequested=false isSleeping=false locusId=null 
displayAreaFeatureId=1 isTopActivityTransparent=false appCompatTaskInfo=AppCompatTaskInfo { topActivityInSizeCompat=false 
topActivityEligibleForLetterboxEducation= falseisLetterboxEducationEnabled= false isLetterboxDoubleTapEnabled= false 
topActivityEligibleForUserAspectRatioButton= false topActivityBoundsLetterboxed= false isFromLetterboxDoubleTap= false 
topActivityLetterboxVerticalPosition= -1 topActivityLetterboxHorizontalPosition= -1 topActivityLetterboxWidth=1080 topActivityLetterboxHeight=2436 
isUserFullscreenOverrideEnabled=false isSystemFullscreenOverrideEnabled=false cameraCompatTaskInfo=CameraCompatTaskInfo { cameraCompatControlState=hidden 
freeformCameraCompatMode=inactive}}}, pipTask = null, remoteTransition = null, displayChange = null, flags = 0, debugId = 1233 }
  07-02 17:46:13.655 V/WindowManager( 1698):     startWCT=WindowContainerTransaction { changes = {} hops = [] errorCallbackToken=null 
taskFragmentOrganizer=null mInterrupt=false }
  07-02 17:46:13.655 V/WindowManager( 1698):     info={id=1233 t=OPEN f=0x0 trk=0 r=[0@Point(0, 0)] c=[
> 07-02 17:46:13.655 V/WindowManager( 1698):         {WCT{RemoteToken{d6fc33e Task{1ac0774 #48212 type=standard A=10509:com.erbete.customer}}} m=OPEN 
f=NONE leash=Surface(name=Task=48212)/@0xc9cb645 sb=Rect(0, 0 - 1080, 2436) eb=Rect(0, 0 - 1080, 2436) mSimplifyStartAbsBounds=Rect(0, 0 - 0, 0) d=0 
taskParent=-1},
> 07-02 17:46:13.655 V/WindowManager( 1698):         {WCT{RemoteToken{a4aa567 Task{e35342e #1 type=home}}} m=TO_BACK f=SHOW_WALLPAPER 
leash=Surface(name=Task=1)/@0x894e422 sb=Rect(0, 0 - 1080, 2436) eb=Rect(0, 0 - 1080, 2436) mSimplifyStartAbsBounds=Rect(0, 0 - 0, 0) d=0 taskParent=-1},
  07-02 17:46:13.655 V/WindowManager( 1698):         {null m=CHANGE f=IS_WALLPAPER leash=Surface(name=WallpaperWindowToken{b14fd4c 
token=android.os.Binder@430597f})/@0x186c404 sb=Rect(0, 0 - 1080, 2436) eb=Rect(0, 0 - 1080, 2436) mSimplifyStartAbsBounds=Rect(0, 0 - 0, 0) d=0}
  07-02 17:46:13.655 V/WindowManager( 1698):     ]}
  07-02 17:46:13.656 W/JobScheduler.Concurrency( 1698): Had fewer than 16 in existence
  07-02 17:46:13.656 V/WindowManagerShell( 2380): onTransitionReady(transaction=7292854570057)
  07-02 17:46:13.657 W/JobScheduler.Concurrency( 1698): Had fewer than 16 in existence
> 07-02 17:46:13.657 V/WindowManagerShell( 2380): onTransitionReady (#1233) android.os.BinderProxy@fbec58a: {id=1233 t=OPEN f=0x0 trk=0 r=[0@Point(0, 0)] 
c=[{WCT{android.window.IWindowContainerToken$Stub$Proxy@88a11b6} m=OPEN f=NONE leash=Surface(name=Task=48212)/@0x6ede0d5 sb=Rect(0, 0 - 1080, 2436) 
eb=Rect(0, 0 - 1080, 2436) mSimplifyStartAbsBounds=Rect(0, 0 - 0, 0) d=0 taskParent=-1},{WCT{android.window.IWindowContainerToken$Stub$Proxy@cf32eb7} 
m=TO_BACK f=SHOW_WALLPAPER leash=Surface(name=Task=1)/@0x5776fdb sb=Rect(0, 0 - 1080, 2436) eb=Rect(0, 0 - 1080, 2436) mSimplifyStartAbsBounds=Rect(0, 0 - 
0, 0) d=0 taskParent=-1},{null m=CHANGE f=IS_WALLPAPER leash=Surface(name=WallpaperWindowToken{b14fd4c token=android.os.Binder@430597f})/@0x6518a78 
sb=Rect(0, 0 - 1080, 2436) eb=Rect(0, 0 - 1080, 2436) mSimplifyStartAbsBounds=Rect(0, 0 - 0, 0) d=0}]}
  07-02 17:46:13.657 D/ShellTransitions( 2380): setupStartState setAlpha 0.f:Surface(name=Task=48212)/@0x6ede0d5
  07-02 17:46:13.657 D/ShellTransitions_interrupt( 2380): isIconLaunchOpenOrClose mode: 4
  07-02 17:46:13.657 D/ShellTransitions_interrupt( 2380): isOpenOrCloseMode: trueisInterruptedTask: true isSplitMode: false isTranssionLauncher: true
  07-02 17:46:13.657 D/ShellTransitions_interrupt( 2380): isIconLaunchRemoteTransitionInterrupted isopenorclose: true   mHasPlayingTransitions: false 
mFinishHasPlayingTransitions: false
  07-02 17:46:13.657 D/ShellTransitions_interrupt( 2380): processReadyQueuemIfTransitionReUseLeash: false
> 07-02 17:46:13.657 V/WindowManagerShell( 2380): Playing animation for (#1233) android.os.BinderProxy@fbec58a@0
  07-02 17:46:13.657 D/ShellEventHandler( 2380): onTransitionStarting OPEN token=android.os.BinderProxy@fbec58a
  07-02 17:46:13.657 D/ShellTransitions_interrupt( 2380): isIconLaunchOpenOrClose mode: 4
  07-02 17:46:13.657 W/JobScheduler.Concurrency( 1698): Had fewer than 16 in existence
  07-02 17:46:13.657 D/ShellTransitions_interrupt( 2380): isOpenOrCloseMode: trueisInterruptedTask: true isSplitMode: false isTranssionLauncher: true
  07-02 17:46:13.657 D/ShellTransitions_interrupt( 2380): setupAnimHierarchy  ifNoReparentForInterrupt(info):  true ifMerge: false
  07-02 17:46:13.657 D/ShellTransitions_interrupt( 2380): isIconLaunchOpenOrClose mode: 4
  07-02 17:46:13.657 D/ShellTransitions_interrupt( 2380): isOpenOrCloseMode: trueisInterruptedTask: true isSplitMode: false isTranssionLauncher: true
  07-02 17:46:13.657 D/ShellTransitions_interrupt( 2380): isIconLaunchOpenOrClose mode: 4
  07-02 17:46:13.657 D/ShellTransitions_interrupt( 2380): isOpenOrCloseMode: trueisInterruptedTask: true isSplitMode: false isTranssionLauncher: true
  07-02 17:46:13.657 D/ShellTransitions_interrupt( 2380): setupAnimHierarchy  ifNoReparentForInterrupt(info):  true ifMerge: false
  07-02 17:46:13.657 D/ShellTransitions_interrupt( 2380): isIconLaunchOpenOrClose mode: 4
  07-02 17:46:13.657 D/ShellTransitions_interrupt( 2380): isOpenOrCloseMode: trueisInterruptedTask: true isSplitMode: false isTranssionLauncher: true
  07-02 17:46:13.657 D/ShellTransitions_interrupt( 2380): isIconLaunchOpenOrClose mode: 4
  07-02 17:46:13.657 D/ShellTransitions_interrupt( 2380): isOpenOrCloseMode: trueisInterruptedTask: true isSplitMode: false isTranssionLauncher: true
  07-02 17:46:13.657 D/ShellTransitions_interrupt( 2380): setupAnimHierarchy  ifNoReparentForInterrupt(info):  true ifMerge: false
  07-02 17:46:13.657 D/ShellTransitions_interrupt( 2380): isIconLaunchOpenOrClose mode: 4
  07-02 17:46:13.657 D/ShellTransitions_interrupt( 2380): isOpenOrCloseMode: trueisInterruptedTask: true isSplitMode: false isTranssionLauncher: true
  07-02 17:46:13.657 V/WindowManagerShell( 2380):  try handler com.android.wm.shell.transition.DefaultMixedHandler@91c2c6c
  07-02 17:46:13.657 V/WindowManagerShell( 2380):  try handler com.android.wm.shell.keyguard.KeyguardTransitionHandler@e100235
  07-02 17:46:13.657 V/WindowManagerShell( 2380):  try handler com.android.wm.shell.pip.PipTransition@fb1ea43
  07-02 17:46:13.657 V/WindowManagerShell( 2380):  try handler com.android.wm.shell.activityembedding.ActivityEmbeddingController@6f358c0
  07-02 17:46:13.657 V/WindowManagerShell( 2380):  try handler com.android.wm.shell.recents.RecentsTransitionHandler@f2779f9
  07-02 17:46:13.657 V/ShellRecents( 2380): RecentsTransitionHandler.startAnimation: no controller found
  07-02 17:46:13.657 V/WindowManagerShell( 2380):  try handler com.android.wm.shell.splitscreen.StageCoordinator@a8efd3e
  07-02 17:46:13.657 V/WindowManagerShell( 2380):  try handler com.android.wm.shell.transition.RemoteTransitionHandler@bfee79f
  07-02 17:46:13.657 V/WindowManagerShell( 2380): Transition doesn't have explicit remote, search filters for match for {id=1233 t=OPEN f=0x0 trk=0 
r=[0@Point(0, 0)] c=[{WCT{android.window.IWindowContainerToken$Stub$Proxy@88a11b6} m=OPEN f=NONE leash=Surface(name=Task=48212)/@0x6ede0d5 sb=Rect(0, 0 - 
1080, 2436) eb=Rect(0, 0 - 1080, 2436) mSimplifyStartAbsBounds=Rect(0, 0 - 0, 0) d=0 
taskParent=-1},{WCT{android.window.IWindowContainerToken$Stub$Proxy@cf32eb7} m=TO_BACK f=SHOW_WALLPAPER leash=Surface(name=Task=1)/@0x5776fdb sb=Rect(0, 0 
- 1080, 2436) eb=Rect(0, 0 - 1080, 2436) mSimplifyStartAbsBounds=Rect(0, 0 - 0, 0) d=0 taskParent=-1},{null m=CHANGE f=IS_WALLPAPER 
leash=Surface(name=WallpaperWindowToken{b14fd4c token=android.os.Binder@430597f})/@0x6518a78 sb=Rect(0, 0 - 1080, 2436) eb=Rect(0, 0 - 1080, 2436) 
mSimplifyStartAbsBounds=Rect(0, 0 - 0, 0) d=0}]}
> 07-02 17:46:13.657 V/WindowManagerShell( 2380):  Delegate animation for (#1233) to null
  07-02 17:46:13.657 V/WindowManagerShell( 2380):  try handler com.android.wm.shell.transition.DefaultTransitionHandler@a1540ec
  07-02 17:46:13.657 W/JobScheduler.Concurrency( 1698): Had fewer than 16 in existence
  07-02 17:46:13.657 V/WindowManagerShell( 2380): start default transition animation, info = {id=1233 t=OPEN f=0x0 trk=0 r=[0@Point(0, 0)] 
c=[{WCT{android.window.IWindowContainerToken$Stub$Proxy@88a11b6} m=OPEN f=NONE leash=Surface(name=Task=48212)/@0x6ede0d5 sb=Rect(0, 0 - 1080, 2436) 
eb=Rect(0, 0 - 1080, 2436) mSimplifyStartAbsBounds=Rect(0, 0 - 0, 0) d=0 taskParent=-1},{WCT{android.window.IWindowContainerToken$Stub$Proxy@cf32eb7} 
m=TO_BACK f=SHOW_WALLPAPER leash=Surface(name=Task=1)/@0x5776fdb sb=Rect(0, 0 - 1080, 2436) eb=Rect(0, 0 - 1080, 2436) mSimplifyStartAbsBounds=Rect(0, 0 - 
0, 0) d=0 taskParent=-1},{null m=CHANGE f=IS_WALLPAPER leash=Surface(name=WallpaperWindowToken{b14fd4c token=android.os.Binder@430597f})/@0x6518a78 
sb=Rect(0, 0 - 1080, 2436) eb=Rect(0, 0 - 1080, 2436) mSimplifyStartAbsBounds=Rect(0, 0 - 0, 0) d=0}]}
  07-02 17:46:13.657 D/ShellTransitions( 2380): isCustomizedsSceneAnimType = 0
  07-02 17:46:13.658 V/WindowManagerShell( 2380): loadAnimation: anim=android.view.animation.AnimationSet@b82558d animAttr=0x13 type=OPEN isEntrance=false
  07-02 17:46:13.658 W/JobScheduler.Concurrency( 1698): Had fewer than 16 in existence
  07-02 17:46:13.658 D/ShellTransitions( 2380): isCustomizedsSceneAnimType = 0
  07-02 17:46:13.658 V/WindowManagerShell( 2380): loadAnimation: anim=android.view.animation.AnimationSet@6d73090 animAttr=0x12 type=OPEN isEntrance=true
  07-02 17:46:13.658 W/JobScheduler.Concurrency( 1698): Had fewer than 16 in existence
  07-02 17:46:13.659 I/StatusBarModePerDisplayRepository( 2380): isInFullscreenMode:false com.erbete.customer
  07-02 17:46:13.659 D/ShellTransitions_interrupt( 2380): dispatchTransition: consumed by com.android.wm.shell.transition.DefaultTransitionHandler@a1540ec
  07-02 17:46:13.660 V/WindowManagerShell( 2380):  animated by com.android.wm.shell.transition.DefaultTransitionHandler@a1540ec
  07-02 17:46:13.661 I/tranpm/CommonReclaim-ProcessReclaimer( 1698): Kill process: com.transsion.globalsearch, pid: 15486, adj: 925, Rss: 84076, taskId:-1 
, frozen:false ,rssAnon:51544 kB ,rssFile:62804 kB ,rssShmem:2256 kB ,vmSwap[swapRss]:4340 kB
  07-02 17:46:13.661 I/tranpm/CommonReclaim-ProcessReclaimer( 1698): reclaimSize∩╝Ü 212868 reuqireMemorySize: 170460 reclaim enough !
  07-02 17:46:13.661 I/tranpm/CommonReclaim-ProcessReclaimer( 1698): kill info -- processReclaim:  request: 170460 releaseSize: 212868 killTaskCount: 2 
exemptCount∩╝Ü 18 effective: true
> 07-02 17:46:13.662 I/ActivityTaskManager( 1698): this = Task{1ac0774 #48212 type=standard A=10509:com.erbete.customer} is in Transition
  07-02 17:46:13.662 D/os.permission.PermissionInfo( 1698): checkPermission 10196:android.permission.INTERACT_ACROSS_USERS:true
  07-02 17:46:13.662 I/os.permission( 1698): Grant permission: android.permission.INTERACT_ACROSS_USERS to uid: 10196
  07-02 17:46:13.661 D/CallbackProxy( 6515): [onSubscriptionsChanged]
  07-02 17:46:13.662 I/tranpm/ServicePolicy( 1698): isBlockHsB1 true
  07-02 17:46:13.664 I/tranpm/ServicePolicy( 1698): limitBindServiceLocked by hs&job - cold: callingPackage = android, targetPkg = com.turkcell.bip
  07-02 17:46:13.665 W/ActivityManager( 1698): Unbind failed: could not find connection for android.app.LoadedApk$ServiceDispatcher$InnerConnection@fb0bab5
  07-02 17:46:13.665 E/JobScheduler.Concurrency( 1698): Error executing JobStatus{ecd60ea androidx.work.systemjobscheduler:u0a393/291 
@androidx.work.systemjobscheduler@com.turkcell.bip/androidx.work.impl.background.systemjob.SystemJobService u=0 s=10393 TIME=-1h38m12s434ms:none NET READY}
  07-02 17:46:13.668 I/tranpm/ServicePolicy( 1698): isBlockHsB1 true
  07-02 17:46:13.668 I/tranpm/ServicePolicy( 1698): limitBindServiceLocked by hs&job - cold: callingPackage = android, targetPkg = 
com.google.android.apps.nbu.files
  07-02 17:46:13.669 W/ActivityManager( 1698): Unbind failed: could not find connection for android.app.LoadedApk$ServiceDispatcher$InnerConnection@4338cbb
  07-02 17:46:13.669 E/JobScheduler.Concurrency( 1698): Error executing JobStatus{7e348f0 androidx.work.systemjobscheduler:u0a101/32974 
@androidx.work.systemjobscheduler@com.google.android.apps.nbu.files/androidx.work.impl.background.systemjob.SystemJobService u=0 s=10101 
URIS=[android.app.job.JobInfo$TriggerContentUri@26b5948d] READY}
  07-02 17:46:13.672 D/TranHookRttController( 2620): onTaskStackChanged 
  07-02 17:46:13.672 D/ApkController( 2620): onTaskStackChanged 
  07-02 17:46:13.672 D/TranClassInfo(14808): instance successfully. com.transsion.hubcore.graphics.TranGraphicImpl@360d044 from 
com.transsion.hubcore.graphics.ITranGraphic
  07-02 17:46:13.673 D/os.SingleLiceFactory(14808): instance successfully. com.transsion.typeface.v1.TypefaceLice@8402298 from 
android.graphics.IGraphicLice
  07-02 17:46:13.673 D/os.LiceInfo(14808): instance successfully. com.transsion.graphics.GraphicLice@845952d from android.graphics.IGraphicLice
  07-02 17:46:13.673 I/tranpm/ServicePolicy( 1698): isBlockHsB1 true
  07-02 17:46:13.674 I/tranpm/ServicePolicy( 1698): limitBindServiceLocked by hs&job - cold: callingPackage = android, targetPkg = 
com.google.android.apps.nbu.files
  07-02 17:46:13.674 W/ActivityManager( 1698): Unbind failed: could not find connection for android.app.LoadedApk$ServiceDispatcher$InnerConnection@3ff4d31
  07-02 17:46:13.675 E/JobScheduler.Concurrency( 1698): Error executing JobStatus{141498e androidx.work.systemjobscheduler:u0a101/32971 
@androidx.work.systemjobscheduler@com.google.android.apps.nbu.files/androidx.work.impl.background.systemjob.SystemJobService u=0 s=10101 
TIME=-2h12m2s666ms:none READY}
  07-02 17:46:13.685 D/ActivityTaskManager_Recents( 1698): 	excludeFromRecents=true, taskIndex = 3, isOnHomeDisplay: false, isAnimatingByRecents: false
  07-02 17:46:13.685 D/tranpm/BehaviorManager( 1698): onMemPressureChange : level 0
  07-02 17:46:13.685 D/ActivityTaskManager_Recents( 1698): Skipping, not in visible range taskId: 48211
  07-02 17:46:13.685 D/ActivityTaskManager_Recents( 1698): 	excludeFromRecents=true, taskIndex = 11, isOnHomeDisplay: false, isAnimatingByRecents: false
  07-02 17:46:13.685 D/ActivityTaskManager_Recents( 1698): Skipping, not in visible range taskId: 36443
  07-02 17:46:13.685 E/JobScheduler.Concurrency( 1698): Error executing JobStatus{107496e androidx.work.systemjobscheduler:u0a121/6204 
@androidx.work.systemjobscheduler@com.google.android.calendar/androidx.work.impl.background.systemjob.SystemJobService u=0 s=10121 TIME=-1h37m1s552ms:none 
READY}
> 07-02 17:46:13.687 I/SurfaceFlinger( 1012): onHandleDestroyed: name=Surface(name=174f644 NavigationBar0)/@0x46ac9dc - animation-leash of 
insets_animation#19911, layerId=19911, parentId=0
> 07-02 17:46:13.687 I/SurfaceFlinger( 1012): onHandleDestroyed: name=Surface(name=f48663c StatusBar)/@0x8eec4a5 - animation-leash of 
insets_animation#19912, layerId=19912, parentId=0
  07-02 17:46:13.687 I/mtkpower@impl(  970): [powerd_req] TIMER_MSG_PERF_LOCK_TIMEOUT hdl:55989
  07-02 17:46:13.688 I/libPowerHal(  970): [PD] MTKPOWER_HINT_START_ACTIVITY_INNER update cmd:1408100 param:0
  07-02 17:46:13.690 I/tranpm/ServicePolicy( 1698): isBlockHsB1 true
  07-02 17:46:13.690 I/tranpm/ServicePolicy( 1698): limitBindServiceLocked by hs&job - cold: callingPackage = android, targetPkg = com.talpa.hibrowser
  07-02 17:46:13.690 I/RecentAnalytics#( 2371): addTracker start...
  07-02 17:46:13.691 W/ActivityManager( 1698): Unbind failed: could not find connection for android.app.LoadedApk$ServiceDispatcher$InnerConnection@ed5c7f0
  07-02 17:46:13.691 I/RecentAnalytics#( 2371): addTracker start...
  07-02 17:46:13.691 I/RecentAnalytics#( 2371): start track event...
  07-02 17:46:13.691 I/RecentAnalytics#( 2371): start track event...
  07-02 17:46:13.691 E/JobScheduler.Concurrency( 1698): Error executing JobStatus{48d18d6 androidx.work.systemjobscheduler:u0a206/1543 
@androidx.work.systemjobscheduler@com.talpa.hibrowser/androidx.work.impl.background.systemjob.SystemJobService u=0 s=10206 TIME=-2h50m53s666ms:none NET 
READY}
  07-02 17:46:13.691 D/ApplicationLoaders(14808): Returning zygote-cached class loader: /system/framework/org.apache.http.legacy.jar
  07-02 17:46:13.691 D/ApplicationLoaders(14808): Returning zygote-cached class loader: /system_ext/framework/androidx.window.extensions.jar
  07-02 17:46:13.691 D/ApplicationLoaders(14808): Returning zygote-cached class loader: /system_ext/framework/androidx.window.sidecar.jar
> 07-02 17:46:13.695 I/BufferQueueProducer( 1012): [StatusBar#97](this:0xb40000731f578a88,id:-1,api:0,p:-1,c:1012) queueBuffer: fps=0.69 dur=1449.77 
max=1449.77 min=1449.77
> 07-02 17:46:13.696 I/BufferQueueDebug( 1012): [Surface(name=f48663c StatusBar)/@0x8eec4a5 - animation-leash of 
insets_animation#19912](this:0xb40000731f5a0868,id:-1,api:0,p:-1,c:1012) onDestructor()
> 07-02 17:46:13.696 I/BufferQueueDebug( 1012): [Surface(name=174f644 NavigationBar0)/@0x46ac9dc - animation-leash of 
insets_animation#19911](this:0xb40000731f5ba278,id:-1,api:0,p:-1,c:1012) onDestructor()
> 07-02 17:46:13.712 I/BufferQueueProducer( 1012): [NavigationBar0#93](this:0xb40000731f567928,id:-1,api:0,p:-1,c:1012) queueBuffer: fps=5.25 dur=2858.55 
max=2594.86 min=15.26
  07-02 17:46:13.717 D/BatteryMeterDrawable( 2380): drawBatteryFrame: color=99000000
  07-02 17:46:13.721 I/mtkpower@impl(  970): [setMode] type:6, enabled:1
  07-02 17:46:13.722 E/mtkpower@impl(  970): [setMode] unknown type
  07-02 17:46:13.723 I/BufferQueueProducer( 1012): [FramebufferSurface](this:0xb40000719f3cd2f0,id:-1,api:1,p:1012,c:1012) queueBuffer: fps=7.46 
dur=2815.08 max=2487.59 min=9.61
  07-02 17:46:13.734 D/C2MtkComponentStore(  937): setDmaBufUsage: usage 5, flags 0, heapName mtk_mm for decoder.
  07-02 17:46:13.740 I/ScenesManager( 4503): put createTaskId com.erbete.customer48212
  07-02 17:46:13.748 I/mtkpower_client( 1698): perf_lock_rel, hdl:55969, tid:1892
  07-02 17:46:13.749 I/mtkpower_client( 1698): perf_lock_acq, hdl:55969, dur:5000, num:2, pid:1698, tid:1892
  07-02 17:46:13.749 I/mtkpower@impl(  970): [check_work_req] i:0, msg:1 hdl:55969, wait
  07-02 17:46:13.750 I/ScenesManager( 4503): MSG_ACTIVITY_CHECK
  07-02 17:46:13.751 I/mtkpower@impl(  970): [check_work_req] i:0, msg:1 hdl:55969, wait
  07-02 17:46:13.754 I/mtkpower_client( 1698): ret_hdl:55993
  07-02 17:46:13.754 I/PowerHalMgrImpl( 1698): hdl:55993, pid:1698 
  07-02 17:46:13.757 D/TranAppBrightnessChangeController( 1698): [handleMessage] msg type: 1001 isCloudEnabled: true
  07-02 17:46:13.758 D/WindowManager( 1698): getTopPackages# topPackages = []
> 07-02 17:46:13.758 D/TranAppBrightnessChangeController( 1698): [onForegroundAppchange] ForegroundPackage: com.erbete.customer splitScreen: false 
multiWindow: false mIsPinned:false
  07-02 17:46:13.761 D/THubApi ( 4503): getWindowingMode TaskInfo{userId=0 taskId=48212 displayId=0 isRunning=true baseIntent=Intent { 
act=android.intent.action.MAIN cat=[android.intent.category.LAUNCHER] flg=0x10200000 cmp=com.erbete.customer/.MainActivity } 
baseActivity=ComponentInfo{com.erbete.customer/com.erbete.customer.MainActivity} 
topActivity=ComponentInfo{com.erbete.customer/com.erbete.customer.MainActivity} origActivity=null 
realActivity=ComponentInfo{com.erbete.customer/com.erbete.customer.MainActivity} numActivities=1 lastActiveTime=179755229 supportsMultiWindow=true 
resizeMode=1 isResizeable=true minWidth=-1 minHeight=-1 defaultMinSize=110 token=WCT{android.window.IWindowContainerToken$Stub$Proxy@fb6a55f} 
topActivityType=1 pictureInPictureParams=null shouldDockBigOverlays=false launchIntoPipHostTaskId=-1 lastParentTaskIdBeforePip=-1 
displayCutoutSafeInsets=null topActivityInfo=ActivityInfo{da18bac com.erbete.customer.MainActivity} launchCookies=[] positionInParent=Point(0, 0) 
parentTaskId=-1 isFocused=false isVisible=true isVisibleRequested=true isSleeping=false locusId=null displayAreaFeatureId=1 isTopActivityTransparent=false 
appCompatTaskInfo=AppCompatTaskInfo { topActivityInSizeCompat=false topActivityEligibleForLetterboxEducation= falseisLetterboxEducationEnabled= false 
isLetterboxDoubleTapEnabled= false topActivityEligibleForUserAspectRatioButton= false topActivityBoundsLetterboxed= false isFromLetterboxDoubleTap= false 
topActivityLetterboxVerticalPosition= -1 topActivityLetterboxHorizontalPosition= -1 topActivityLetterboxWidth=1080 topActivityLetterboxHeight=2436 
isUserFullscreenOverrideEnabled=false isSystemFullscreenOverrideEnabled=false cameraCompatTaskInfo=CameraCompatTaskInfo { cameraCompatControlState=hidden 
freeformCameraCompatMode=inactive}}}
  07-02 17:46:13.770 I/FPSGO   ( 1080): fpsgo_boost_sched_idle_prefer:1
  07-02 17:46:13.771 I/mtkpower_client( 1080): perf_lock_acq, hdl:0, dur:0, num:2, tid:1080
  07-02 17:46:13.771 I/mtkpower_client( 1080): ret_hdl:55994
  07-02 17:46:13.771 I/FPSGO   ( 1080): perfLockAcq hdl:55994
  07-02 17:46:13.771 I/FPSGO   ( 1080): fpsgo_boost_sched_rate_ns:0
  07-02 17:46:13.771 I/mtkpower_client( 1080): perf_lock_acq, hdl:0, dur:0, num:12, tid:1080
  07-02 17:46:13.772 I/mtkpower_client( 1080): ret_hdl:55995
  07-02 17:46:13.772 I/FPSGO   ( 1080): perfLockAcq hdl:55995
  07-02 17:46:13.773 I/libPowerHal(  970): cmdSetting - unknown cmd:1438500, scmd:(null) ,param_1:0
  07-02 17:46:13.773 I/libPowerHal(  970): cmdSetting - unknown cmd:1438800, scmd:(null) ,param_1:0
  07-02 17:46:13.777 I/Zygote  (  913): Process 15486 exited due to signal 9 (Killed)
  07-02 17:46:13.789 V/ActivityManager( 1698): Death received in com.android.server.am.ActivityManagerService$AppDeathRecipient@426d65d for thread 
android.os.BinderProxy@2c7cbd2
  07-02 17:46:13.790 I/ActivityManager( 1698): Process com.transsion.globalsearch (pid 15486) has died: cch+25 CEM 
  07-02 17:46:13.791 I/ActivityManager( 1698): need getLruProcesses
  07-02 17:46:13.798 D/os.ActivityManagerServiceLice( 1698): make process inactive com.transsion.globalsearch(15486)
  07-02 17:46:13.798 D/ConnectivityService( 1698): releasing NetworkRequest [ REQUEST id=20642, [ Capabilities: 
INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED&NOT_BANDWIDTH_CONSTRAINED Uid: 10417 RequestorUid: 10417 RequestorPkg: com.transsion.globalsearch 
UnderlyingNetworks: Null] ] (release request)
  07-02 17:46:13.800 I/THubApi ( 4503): isTheMainScreen classname: com.erbete.customer.MainActivity  pkg:com.erbete.customer
  07-02 17:46:13.803 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.047046,0.000035, totalTime 0.047082 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:46:13.809 V/ActivityManager( 1698): Death received in com.android.server.am.ActivityManagerService$AppDeathRecipient@cf3670f for thread 
android.os.BinderProxy@1a3a39c
  07-02 17:46:13.909 D/Hiber/alarmManagerServiceExtImpl( 1698): unproxyAlarms leave, uid=10204, packageName=drop
  07-02 17:46:13.909 I/Hiber/proxyManager( 1698): up_sensor: uid=10204, pkgName=com.openai.chatgpt
  07-02 17:46:13.910 D/Hiber/proxyWakeLock( 1698): remove uid: 10204 wiht all pids from wakelockUidInfo list
  07-02 17:46:13.914 E/ApplicationHelper( 1698): Fail to get PackageManager
  07-02 17:46:13.958 D/ShellTransitions_interrupt( 2380): finish handler: com.android.wm.shell.transition.DefaultTransitionHandler@a1540ec
  07-02 17:46:13.958 D/ShellTransitions_interrupt( 2380): onFinish: isLauncherReUseLeash = false
> 07-02 17:46:13.958 V/WindowManagerShell( 2380): Transition animation finished (aborted=false), notifying core (#1233) android.os.BinderProxy@fbec58a@0
  07-02 17:46:13.959 D/ShellTransitions( 2380): Applied finish transaction
  07-02 17:46:13.959 D/ShellTransitions_interrupt( 2380): onFinish finish apply
  07-02 17:46:13.960 D/WindowOrganizerController( 1698): WCT isInterrupt: false
  07-02 17:46:13.960 I/mtkpower_client( 1698): perf_lock_rel, hdl:55991, tid:1843
  07-02 17:46:13.961 I/libPowerHal(  970): [setClusterHardFreq] MTKPOWER_HINT_LAUNCHER_ANIMA: hard userlimit set cpu freq: -1 -1 -1 -1
  07-02 17:46:13.961 I/WindowManager( 1698):   isAnimating=false  okToAnimate=true  win=Window{ac8a64c u0 
com.transsion.XOSLauncher/com.android.launcher3.uioverrides.QuickstepLauncher}
> 07-02 17:46:13.961 V/WindowManager( 1698): Finish Transition (#1233): created at 07-02 17:46:13.536 collect-started=0.027ms request-sent=9.821ms 
started=23.086ms ready=105.746ms sent=109.541ms finished=424.737ms
  07-02 17:46:13.961 I/libPowerHal(  970): [setClusterFreq] MTKPOWER_HINT_LAUNCHER_ANIMA: sysfs_freq set cpu freq: 2000000 -1 2200000 -1 
  07-02 17:46:13.962 I/libPowerHal(  970): [unsetGPUFreq] current min:0, max:0; scn_gpu_min:0, scn_gpu_max:-1; scn_gpu_min(HL):-1, scn_gpu_max(HL):-1
  07-02 17:46:13.962 I/libPowerHal(  970): [setGPUFreq] Soft min/max = (0, 0); Hard min/max = (44, 0)
  07-02 17:46:13.962 I/libPowerHal(  970): [setGPUFreq] final min/max = (0, 0)
  07-02 17:46:13.962 I/libPowerHal(  970): MTKPOWER_HINT_LAUNCHER_ANIMA: set gpu opp level: 0
  07-02 17:46:13.962 I/libPowerHal(  970): MTKPOWER_HINT_LAUNCHER_ANIMA: set gpu opp level max: 0
  07-02 17:46:13.962 I/WindowManager( 1698):   isAnimating=false  okToAnimate=true  win=Window{32f43b8 u0 ZeroScreen}
  07-02 17:46:13.962 I/Process ( 1698): String at 0: 0x767a2b0601 = SFMainPolicy
  07-02 17:46:13.962 I/Process ( 1698): String at 0: 0x767a2b0601 = SFRenderEnginePolicy
  07-02 17:46:13.963 D/VRI[QuickstepLauncher]( 2371): visibilityChanged oldVisibility=true newVisibility=false
  07-02 17:46:13.964 D/MagellanHandle( 1698): updateRefreshRateForSceneVsyncs what = 21
  07-02 17:46:13.965 D/ShellEventHandler( 2380): onTransitionFinished OPEN token=android.os.BinderProxy@fbec58a
  07-02 17:46:13.965 V/WindowManagerShell( 2380): Track 0 became idle
  07-02 17:46:13.965 V/WindowManagerShell( 2380): All active transition animations finished
  07-02 17:46:13.965 D/VRI[ZeroScreen](30797): visibilityChanged oldVisibility=true newVisibility=false
  07-02 17:46:13.967 I/TranWallpaperServiceCommon( 2536): tran engine pause 1,livewallpaper_theme.json,this=b3.a$b@9131b3f
  07-02 17:46:13.967 E/h       ( 2536): will pause, mPause=false,livewallpaper_theme.json
  07-02 17:46:13.967 I/TranActivityTaskManager( 2536): tran getTopActivityComponent
  07-02 17:46:13.967 I/TranActivityTaskManager( 2536): TranThubActivityTaskManager
  07-02 17:46:13.967 W/UserManagerService( 1698): Requested status bar icon for non-badged user 0
  07-02 17:46:13.969 W/UserManagerService( 1698): Requested status bar icon for non-badged user 0
  07-02 17:46:13.976 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.038893,0.000078, totalTime 0.038972 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:46:13.981 D/h       ( 2536):  pause com.erbete.customer.MainActivity
  07-02 17:46:13.981 W/TranWallpaperServiceCommon( 2536): onvisibilitychange visible false
> 07-02 17:46:13.984 I/SurfaceFlinger( 1012): onHandleDestroyed: name=Transition Root: Task=48212#19923, layerId=19923, parentId=0
  07-02 17:46:13.988 I/DisplayDeviceRepository( 1698): Display device changed: DisplayDeviceInfo{"Layar Bawaan": uniqueId="local:0", 1080 x 2436, modeId 
2, renderFrameRate 60.000004, defaultModeId 1, userPreferredModeId -1, supportedModes [{id=1, width=1080, height=2436, fps=120.00001, vsync=120.00001, 
synthetic=false, alternativeRefreshRates=[60.0], supportedHdrTypes=[]}, {id=2, width=1080, height=2436, fps=60.0, vsync=60.0, synthetic=false, 
alternativeRefreshRates=[120.00001], supportedHdrTypes=[]}], colorMode 0, supportedColorModes [0, 7, 9], hdrCapabilities 
HdrCapabilities{mSupportedHdrTypes=[], mMaxLuminance=500.0, mMaxAverageLuminance=500.0, mMinLuminance=0.0}, allmSupported false, gameContentTypeSupported 
false, density 480, 392.839 x 392.828 dpi, appVsyncOff 2400001, presDeadline 28600000, cutout DisplayCutout{insets=Rect(0, 108 - 0, 0) 
waterfall=Insets{left=0, top=0, right=0, bottom=0} boundingRect={Bounds=[Rect(0, 0 - 0, 0), Rect(468, 0 - 612, 108), Rect(0, 0 - 0, 0), Rect(0, 0 - 0, 
0)]} cutoutPathParserInfo={CutoutPathParserInfo{displayWidth=1080 displayHeight=2436 physicalDisplayWidth=1080 physicalDisplayHeight=2436 density={3.0} 
cutoutSpec={M -24,0 L -24,36 L 24,36 L 24,0 Z @dp} rotation={0} scale={1.0} physicalPixelDisplaySizeRatio={1.0}}} sideOverrides={}}, touch INTERNAL, 
rotation 0, type INTERNAL, address {port=0}, deviceProductInfo null, state ON, committedState ON, frameRateOverride {uid=1000 frameRateHz=60.0} {uid=10159 
frameRateHz=60.0} , brightnessMinimum 0.0, brightnessMaximum 1.0, brightnessDefault 0.2, hdrSdrRatio NaN, FLAG_ALLOWED_TO_BE_DEFAULT_DISPLAY, 
FLAG_ROTATES_WITH_CONTENT, FLAG_SECURE, FLAG_SUPPORTS_PROTECTED_BUFFERS, FLAG_TRUSTED, installOrientation 0, displayShape DisplayShape{ spec=596679847 
displayWidth=1080 displayHeight=2436 physicalPixelDisplaySizeRatio=1.0 rotation=0 offsetX=0 offsetY=0 scale=1.0}}
  07-02 17:46:13.994 I/Griffin/DeviceState( 1698): virtualDisplayPackageName :{com.android.shell=2000}
> 07-02 17:46:14.000 D/BLASTBufferQueue( 2371): [VRI[QuickstepLauncher]#224](f:0,a:2) destructor()
> 07-02 17:46:14.000 D/BufferQueueConsumer( 2371): [VRI[QuickstepLauncher]#224(BLAST Consumer)224](id:943000000e4,api:0,p:-1,c:2371) disconnect
> 07-02 17:46:14.001 I/BufferQueueDebug( 1012): [Transition Root: Task=48212#19923](this:0xb40000731f5c8648,id:-1,api:0,p:-1,c:1012) onDestructor()
> 07-02 17:46:14.001 I/SurfaceFlinger( 1012): onHandleDestroyed: name=afdb257 ActivityRecordInputSink 
com.transsion.XOSLauncher/com.android.launcher3.uioverrides.QuickstepLauncher#19914, layerId=19914, parentId=0
  07-02 17:46:14.002 I/mtkpower@impl(  970): [setMode] type:6, enabled:0
  07-02 17:46:14.002 E/mtkpower@impl(  970): [setMode] unknown type
  07-02 17:46:14.009 W/hwcomposer(  935): [DRMDEV] paramIsSame(), id 4392, w 1080/1080, h 2436/2436, pitch 1088/1088, format 0x1/0x2, secure 0/0  
> 07-02 17:46:14.012 I/BufferQueueDebug( 1012): [afdb257 ActivityRecordInputSink 
com.transsion.XOSLauncher/com.android.launcher3.uioverrides.QuickstepLauncher#19914](this:0xb40000731f5a6388,id:-1,api:0,p:-1,c:1012) onDestructor()
  07-02 17:46:14.020 I/VersionsUtils( 2380):  getVersion mCurrentVersion 20202091
  07-02 17:46:14.020 I/IslandManager( 2380): checkIslandPermission result true granted 1
  07-02 17:46:14.020 W/IslandManager( 2380): cancel islandId 10006 not exist in mIslandIdsSet
> 07-02 17:46:14.022 D/BLASTBufferQueue(30797): [VRI[ZeroScreen]#11](f:0,a:1) destructor()
> 07-02 17:46:14.022 D/BufferQueueConsumer(30797): [VRI[ZeroScreen]#11(BLAST Consumer)11](id:784d0000000b,api:0,p:-1,c:30797) disconnect
  07-02 17:46:14.075 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.039654,0.000043, totalTime 0.039698 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:46:14.135 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.039868,0.000054, totalTime 0.039923 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:46:14.138 I/adbd    ( 1129): adbd service requested 'jdwp:14808'
  07-02 17:46:14.175 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000000,0.039699,0.000041, totalTime 0.039740 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:46:14.213 I/system_server( 1698): Background young concurrent mark compact GC freed 9994KB AllocSpace bytes, 276(5408KB) LOS objects, 11% free, 
162MB/183MB, paused 5.978ms,23.165ms total 555.187ms
  07-02 17:46:14.218 W/System  ( 1698): A resource failed to call release. 
  07-02 17:46:14.220 W/System  ( 1698): A resource failed to call HardwareBuffer.close. 
  07-02 17:46:14.243 D/WifiClientModeImpl[24001351:wlan0]( 1698): updateLinkLayerStatsRssiSpeedFrequencyCapabilities rssi=-53 TxLinkspeed=54 freq=5765 
RxLinkSpeed=6
  07-02 17:46:14.243 D/WifiClientModeImpl[24001351:wlan0]( 1698): reported txKbps 12000 rxKbps 60000
  07-02 17:46:14.244 D/WifiDataStall( 1698): tx tput in kbps: 50000
  07-02 17:46:14.244 D/WifiDataStall( 1698): rx tput in kbps: 50000
  07-02 17:46:14.244 V/WifiConfigManager( 1698): Updating scan detail cache freq=5765 BSSID=ac:4a:56:28:fe:ee RSSI=-53 for "TAUFIKKOPIBATOH@WIFI.ID"NONE
  07-02 17:46:14.244 D/WifiThroughputPredictor( 1698):  utilization (LLS) 15 isBluetoothConnected: false final utilization: 15
  07-02 17:46:14.244 D/WifiThroughputPredictor( 1698):  BW: 0 RSSI: -53 Nss: 1 Mode: 1 symDur: 4000 snrDb 27 bitPerTone: 4500 rate: 54 throughput: 50
  07-02 17:46:14.244 D/WifiThroughputPredictor( 1698):  utilization (LLS) 15 isBluetoothConnected: false final utilization: 15
  07-02 17:46:14.244 D/WifiThroughputPredictor( 1698):  BW: 0 RSSI: -53 Nss: 1 Mode: 1 symDur: 4000 snrDb 27 bitPerTone: 4500 rate: 54 throughput: 50
  07-02 17:46:14.246 D/WifiThroughputPredictor( 1698):  utilization (LLS) 15 isBluetoothConnected: false final utilization: 15
  07-02 17:46:14.246 D/WifiThroughputPredictor( 1698):  BW: 0 RSSI: -53 Nss: 1 Mode: 1 symDur: 4000 snrDb 27 bitPerTone: 4500 rate: 54 throughput: 50
  07-02 17:46:14.246 D/WifiThroughputPredictor( 1698):  utilization (LLS) 15 isBluetoothConnected: false final utilization: 15
  07-02 17:46:14.246 D/WifiThroughputPredictor( 1698):  BW: 0 RSSI: -53 Nss: 1 Mode: 1 symDur: 4000 snrDb 27 bitPerTone: 4500 rate: 54 throughput: 50
  07-02 17:46:14.678 I/TranWifiSmartAssistantController( 1698): userIgnored :false isScoredCurrentNetwork :false
  07-02 17:46:14.678 I/TranWifiSmartAssistantController( 1698): mCurrentNetwork :133 SSID :"TAUFIKKOPIBATOH@WIFI.ID"
  07-02 17:46:14.679 I/WifiNetworkQuality( 1698): current rssi is sufficient
  07-02 17:46:14.679 I/TranWifiSmartAssistantController( 1698): mNoCandidateCount : -1
  07-02 17:46:14.679 I/TranWifiSmartAssistantController( 1698): ====>>rssi :-53
  07-02 17:46:14.695 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000000,0.039754,0.000051, totalTime 0.039805 > logTimeout 
0.022000 TIMEOUT!!
> 07-02 17:46:14.725 I/BufferQueueProducer( 1012): [NavigationBar0#93](this:0xb40000731f567928,id:-1,api:0,p:-1,c:1012) queueBuffer: fps=44.39 dur=1013.67 
max=132.86 min=16.23
  07-02 17:46:14.774 I/NearbySharing( 4458): Network state changed: NetworkState(isRestricted=false, isOnline=true, isCongested=false, isMetered=false, 
isWifiConnected=true)
  07-02 17:46:14.785 D/nativeloader(14808): Configuring clns-7 for other apk 
/data/app/~~AyGGMrpckogRKolGYwuADQ==/com.erbete.customer-u1rtc-t_nx-zOoP7I7UCEw==/base.apk. target_sdk_version=36, uses_libraries=, library_path=/data/app/
~~AyGGMrpckogRKolGYwuADQ==/com.erbete.customer-u1rtc-t_nx-zOoP7I7UCEw==/lib/arm64:/data/app/~~AyGGMrpckogRKolGYwuADQ==/com.erbete.customer-u1rtc-t_nx-zOoP7
I7UCEw==/base.apk!/lib/arm64-v8a, permitted_path=/data:/mnt/expand:/data/user/0/com.erbete.customer
  07-02 17:46:14.799 V/GraphicsEnvironment(14808): Currently set values for:
  07-02 17:46:14.799 V/GraphicsEnvironment(14808):   angle_gl_driver_selection_pkgs=[]
  07-02 17:46:14.799 V/GraphicsEnvironment(14808):   angle_gl_driver_selection_values=[]
  07-02 17:46:14.799 V/GraphicsEnvironment(14808): Global.Settings values are invalid: number of packages: 0, number of values: 0
  07-02 17:46:14.799 V/GraphicsEnvironment(14808): Neither updatable production driver nor prerelease driver is supported.
  07-02 17:46:14.803 I/LoadedApk(14808): No resource references to update in package com.transsion.theme.icon
  07-02 17:46:14.808 D/os.SingleLiceFactory(14808): using android.app.IActivityThreadLice$DefaultImpl@7693af1 instead of 
com.transsion.activityembedding.ActivityEmbeddingLiceFactory  from android.app.IActivityThreadLice
  07-02 17:46:14.816 W/AudioALSACaptureDataClientAurisysNormal(  920): data_count_raw_ul 0, mRawDataPeriodBufSize 3840
  07-02 17:46:14.817 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.041825,0.000035, totalTime 0.041861 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:46:14.822 D/ULogGuard( 1342): Monitoring: 15 threads, 0 requests, 0 time-bombs; 3 guards. ResetFlags = 0x7
  07-02 17:46:14.848 I/libPerfCtl(  970): xgfGetFPS pid:2371 fps:-1
  07-02 17:46:14.848 I/AppThermalMode(  970): [perfNotifyThermalState] hdl:0
  07-02 17:46:14.848 I/AppThermalMode(  970): [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: -1,fg->pid:2371
  07-02 17:46:14.848 I/AppThermalMode(  970): [perfNotifyThermalState] appThermalIdx -1:
  07-02 17:46:14.848 I/libPerfCtl(  970): xgfGetFPS pid:2380 fps:56
  07-02 17:46:14.848 I/AppThermalMode(  970): [perfNotifyThermalState] hdl:0
  07-02 17:46:14.848 I/AppThermalMode(  970): [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: -1,fg->pid:2371
  07-02 17:46:14.848 I/AppThermalMode(  970): [perfNotifyThermalState] appThermalIdx -1:
  07-02 17:46:15.064 D/TranMemcgComponentImpl( 1698): buffer not full, no need release
  07-02 17:46:15.064 D/os.fingerprint( 1698): onRealStartActivityLocked next:ActivityRecord{eeb78dc u0 com.erbete.customer/.MainActivity t48212} 
isKeyguardShowing:false
  07-02 17:46:15.064 D/os.fingerprint( 1698): activityComponent = ComponentInfo{com.erbete.customer/com.erbete.customer.MainActivity} inMultiWindow = false
  07-02 17:46:15.065 D/os.fingerprint( 1698): onUpdateFocusedApp oldPackageName:com.transsion.XOSLauncher 
oldComponent:ComponentInfo{com.transsion.XOSLauncher/com.android.launcher3.uioverrides.QuickstepLauncher} newPackageName:com.erbete.customer 
newComponent:ComponentInfo{com.erbete.customer/com.erbete.customer.MainActivity} mFm :android.hardware.fingerprint.FingerprintManager@9e3d33b
  07-02 17:46:15.065 I/TranSCSourceConnectManagerImpl( 1698): hookDisplayResumedActivityChanged displayId: 0 packageName: com.erbete.customer
  07-02 17:46:15.065 D/tranpm/BehaviorManager( 1698):  onAppLaunch nextPackName = com.erbete.customer currPackName = com.transsion.XOSLauncher
> 07-02 17:46:15.065 I/PowerHalWrapper( 1698): amsBoostNotify pid:14808,activity:com.erbete.customer.MainActivity, package:com.erbete.customer, 
mProcessCreatePackcom.erbete.customer 
  07-02 17:46:15.065 I/PowerHalWrapper( 1698): state: 1 
  07-02 17:46:15.065 I/SmartPanelService( 4503): onTaskFocusChanged taskId: 5  focused: false
  07-02 17:46:15.065 I/SmartPanelService( 4503): onTaskFocusChanged taskId: 48212  focused: true
  07-02 17:46:15.066 I/ScnModule( 1698): [GameDetection] packname: com.erbete.customer, apkSize: 228167026. 
  07-02 17:46:15.066 I/mtkpower_client( 1698): [PowerHal_Wrap_notifyAppState] com.erbete.customer/com.erbete.customer.MainActivity pid=14808 
activityId:250312924 state:1
  07-02 17:46:15.066 I/mtkpower_client( 1698): [Legacy][PowerHal_Wrap_notifyAppState] com.erbete.customer/com.erbete.customer.MainActivity pid=14808 
state:250312924
  07-02 17:46:15.066 I/SmartPanelService( 4503): activityCheck pkgName: com.erbete.customer, className: com.erbete.customer.MainActivity isResume=false 
isDrawn = false
  07-02 17:46:15.066 I/MultiWindowUtils( 4503): pkg in multi window
  07-02 17:46:15.067 I/libPowerHal(  970): [perfNotifyAppState] pack:com.erbete.customer, act:com.erbete.customer.MainActivity, state:1, pid:14808, 
uid:10509, fps:-1
  07-02 17:46:15.067 I/libPowerHal(  970): [perfNotifyAppState] foreground:com.erbete.customer, pid:14808, uid:10509
  07-02 17:46:15.067 I/PowerHalWrapper( 1698): amsBoostNotify AMS_BOOST_PROCESS_CREATE_BOOST:true 
  07-02 17:46:15.067 D/MBrainLocalService( 1698): isVendorFreezeConditionPass is false
  07-02 17:46:15.067 E/MBrainLocalService( 1698): notifyAppSwitch failed
  07-02 17:46:15.067 I/UxUtility(  970): notifyForegroundApp pack:com.erbete.customer, uid:10509
  07-02 17:46:15.067 I/TouchUtility(  970): notifyAppState error = NULL
  07-02 17:46:15.067 I/System.out( 1698): [scale_ufs_gear] pakname is not antutu: com.erbete.customer, file is not exist: false
  07-02 17:46:15.067 D/MagellanHandle( 1698): updateRefreshRateForSceneVsyncs what = 23
  07-02 17:46:15.067 I/mtkpower@impl(  970): [notifyAppState] pc:1, com.transsion.XOSLauncher => com.erbete.customer
> 07-02 17:46:15.068 D/TransitionController( 1698): mCollectingTransition = null can't setReady, wc = Display{#0 state=ON size=1080x2436 ROTATION_0} ready 
= true
> 07-02 17:46:15.068 D/TransitionController( 1698): mCollectingTransition = null can't setReady, wc = Display{#121 state=ON size=376x848 ROTATION_0} ready 
= true
  07-02 17:46:15.068 D/os.fingerprint( 1698): onActivityResume next:ActivityRecord{eeb78dc u0 com.erbete.customer/.MainActivity t48212}
  07-02 17:46:15.068 D/os.fingerprint( 1698): activityComponent = ComponentInfo{com.erbete.customer/com.erbete.customer.MainActivity} inMultiWindow = false
  07-02 17:46:15.070 I/SimpleEventAdapt( 3928): onActivityEvent get com.erbete.customer, com.erbete.customer.MainActivity,true
  07-02 17:46:15.071 I/SimpleEventAdapt( 3928): notifyEvent2  activity_event
  07-02 17:46:15.071 I/SimpleEventAdapt( 3928): notifyEvent  1
  07-02 17:46:15.071 I/SimpleEventAdapt( 3928): onAppForegroundEvent get com.transsion.XOSLauncher, false
> 07-02 17:46:15.071 D/ActivityTaskManager( 1698): TaskProcess setRealTask mRealTask#=Task{1ac0774 #48212 type=standard A=10509:com.erbete.customer}
  07-02 17:46:15.071 I/SimpleEventAdapt( 3928): notifyEvent2  app_foreground
  07-02 17:46:15.071 D/ActivityTaskManager( 1698): TaskProcess markTaskProcess mRootProcess= 14808
  07-02 17:46:15.071 I/SimpleEventAdapt( 3928): notifyEvent  1
  07-02 17:46:15.071 I/SimpleEventAdapt( 3928): onAppForegroundEvent get com.erbete.customer, true
  07-02 17:46:15.071 I/SimpleEventAdapt( 3928): notifyEvent2  app_foreground
  07-02 17:46:15.071 I/SimpleEventAdapt( 3928): notifyEvent  1
  07-02 17:46:15.071 D/TranAppm/SystemMonitor( 1698): the app is not in the whitelist 
  07-02 17:46:15.071 D/PowerManagerService( 1698): onAppLaunch: currentPackage=com.transsion.XOSLauncher, nextPackage=com.erbete.customer.
  07-02 17:46:15.072 I/CacheManager( 3928):  save new data to cache activity_event
  07-02 17:46:15.072 I/bsc     ( 3928): notifyDataChange in activity_event, 1
  07-02 17:46:15.072 I/DataServiceImplV2( 3928): StandardDataService notifyDataChange  in 
  07-02 17:46:15.072 I/CacheManager( 3928):  save new data to cache app_foreground
  07-02 17:46:15.072 I/bsc     ( 3928): notifyDataChange in app_foreground, 1
  07-02 17:46:15.073 I/DataServiceImplV2( 3928): StandardDataService notifyDataChange  in 
  07-02 17:46:15.073 I/CacheManager( 3928):  save new data to cache app_foreground
  07-02 17:46:15.073 I/bsc     ( 3928): notifyDataChange in app_foreground, 1
  07-02 17:46:15.073 I/DataServiceImplV2( 3928): StandardDataService notifyDataChange  in 
  07-02 17:46:15.074 I/DataServiceImplV2( 3928): StandardDataService notifyDataChange  curServiceName StandardDataService type:activity_event
  07-02 17:46:15.074 I/Kolun_AI( 3928): SystemEventSubscribe: onPublishData {"type":"activity_event","time":1782989175071,"data":"{\"className\":\"com.erbe
te.customer.MainActivity\",\"isResumed\":true,\"packageName\":\"com.erbete.customer\"}","provider":"dc","dc_version":2030380000,"data_version":1,"user_id":
0}
  07-02 17:46:15.074 I/Kolun_AI( 3928): SystemEventSubscribe: publisher.getMatcher() activity_event
  07-02 17:46:15.187 D/ActivityThreadLice(14808): received OSMessage 110001
  07-02 17:46:15.188 D/ActivityThreadLice(14808): send OSMessage 110001 to [-1]
  07-02 17:46:15.190 D/os.WindowManagerServiceLice( 1698): received send OSMessage 110001 request from 14808 to [-1]
  07-02 17:46:15.190 D/os.CommonLice( 1698): onOSServerMessage 110001
  07-02 17:46:15.191 D/OSServiceManager(14808): update local os service os.activity from null to android.os.BinderProxy@73a8aa3
  07-02 17:46:15.195 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000000,0.039694,0.000046, totalTime 0.039740 > logTimeout 
0.022000 TIMEOUT!!
> 07-02 17:46:15.210 D/FlutterJNI(14808): Beginning load of flutter...
  07-02 17:46:15.210 I/ResourceExtractor(14808): Found extracted resources res_timestamp-4-1782987523515
  07-02 17:46:15.216 I/SmartPanelService( 4503): MSG_TASK_FOCUS
  07-02 17:46:15.216 I/ScenesManager( 4503): handlerTaskChange new TaskId com.erbete.customer48212 old TaskId 
  07-02 17:46:15.255 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.039876,0.000040, totalTime 0.039917 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:46:15.277 I/ScenesManager( 4503): MSG_ACTIVITY_CHECK
> 07-02 17:46:15.283 D/nativeloader(14808): Load 
/data/app/~~AyGGMrpckogRKolGYwuADQ==/com.erbete.customer-u1rtc-t_nx-zOoP7I7UCEw==/base.apk!/lib/arm64-v8a/libflutter.so using class loader ns clns-7 
(caller=/data/app/~~AyGGMrpckogRKolGYwuADQ==/com.erbete.customer-u1rtc-t_nx-zOoP7I7UCEw==/base.apk!classes22.dex): ok
> 07-02 17:46:15.284 D/FlutterJNI(14808): flutter (null) was loaded normally!
  07-02 17:46:15.285 D/FileUtils( 1698): Rounded bytes from 8055332864 to 16000000000
  07-02 17:46:15.295 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000000,0.039774,0.000045, totalTime 0.039820 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:46:15.329 D/vulkan  (14808): searching for layers in 
'/data/app/~~AyGGMrpckogRKolGYwuADQ==/com.erbete.customer-u1rtc-t_nx-zOoP7I7UCEw==/lib/arm64'
  07-02 17:46:15.329 D/vulkan  (14808): searching for layers in 
'/data/app/~~AyGGMrpckogRKolGYwuADQ==/com.erbete.customer-u1rtc-t_nx-zOoP7I7UCEw==/base.apk!/lib/arm64-v8a'
  07-02 17:46:15.333 D/TranWifiTputMonitor( 1698): WIFI: TX: 0 RX: 0 TOTAL = 0
  07-02 17:46:15.333 D/TranWifiTputMonitor( 1698): High Tput: false, TOTAL TPUT: 0
  07-02 17:46:15.374 I/VersionsUtils( 2380):  getVersion mCurrentVersion 20202091
  07-02 17:46:15.375 I/IslandManager( 2380): checkIslandPermission result true granted 1
  07-02 17:46:15.375 W/IslandManager( 2380): cancel islandId 10006 not exist in mIslandIdsSet
  07-02 17:46:15.417 I/ScenesManager( 4503): put createTaskId com.erbete.customer48212
  07-02 17:46:15.421 D/THubApi ( 4503): getWindowingMode TaskInfo{userId=0 taskId=48212 displayId=0 isRunning=true baseIntent=Intent { 
act=android.intent.action.MAIN cat=[android.intent.category.LAUNCHER] flg=0x10200000 cmp=com.erbete.customer/.MainActivity } 
baseActivity=ComponentInfo{com.erbete.customer/com.erbete.customer.MainActivity} 
topActivity=ComponentInfo{com.erbete.customer/com.erbete.customer.MainActivity} origActivity=null 
realActivity=ComponentInfo{com.erbete.customer/com.erbete.customer.MainActivity} numActivities=1 lastActiveTime=179756904 supportsMultiWindow=true 
resizeMode=1 isResizeable=true minWidth=-1 minHeight=-1 defaultMinSize=110 token=WCT{android.window.IWindowContainerToken$Stub$Proxy@95f1075} 
topActivityType=1 pictureInPictureParams=null shouldDockBigOverlays=false launchIntoPipHostTaskId=-1 lastParentTaskIdBeforePip=-1 
displayCutoutSafeInsets=null topActivityInfo=ActivityInfo{3fbd80a com.erbete.customer.MainActivity} launchCookies=[] positionInParent=Point(0, 0) 
parentTaskId=-1 isFocused=true isVisible=true isVisibleRequested=true isSleeping=false locusId=null displayAreaFeatureId=1 isTopActivityTransparent=false 
appCompatTaskInfo=AppCompatTaskInfo { topActivityInSizeCompat=false topActivityEligibleForLetterboxEducation= falseisLetterboxEducationEnabled= false 
isLetterboxDoubleTapEnabled= false topActivityEligibleForUserAspectRatioButton= false topActivityBoundsLetterboxed= false isFromLetterboxDoubleTap= false 
topActivityLetterboxVerticalPosition= -1 topActivityLetterboxHorizontalPosition= -1 topActivityLetterboxWidth=1080 topActivityLetterboxHeight=2436 
isUserFullscreenOverrideEnabled=false isSystemFullscreenOverrideEnabled=false cameraCompatTaskInfo=CameraCompatTaskInfo { cameraCompatControlState=hidden 
freeformCameraCompatMode=inactive}}}
  07-02 17:46:15.424 I/THubApi ( 4503): isTheMainScreen classname: com.erbete.customer.MainActivity  pkg:com.erbete.customer
  07-02 17:46:15.425 D/TranActivityTaskManagerService( 1698): isTheMainScreen, displayId = 0, classname = com.erbete.customer.MainActivity
  07-02 17:46:15.426 D/vulkan  (14808): added global layer 'VK_LAYER_KHRONOS_validation' from library 
'/data/app/~~AyGGMrpckogRKolGYwuADQ==/com.erbete.customer-u1rtc-t_nx-zOoP7I7UCEw==/base.apk!/lib/arm64-v8a/libVkLayer_khronos_validation.so'
  07-02 17:46:15.429 D/vulkan  (14808): searching for layers in 
'/data/app/~~AyGGMrpckogRKolGYwuADQ==/com.erbete.customer-u1rtc-t_nx-zOoP7I7UCEw==/lib/arm64'
  07-02 17:46:15.430 D/vulkan  (14808): searching for layers in 
'/data/app/~~AyGGMrpckogRKolGYwuADQ==/com.erbete.customer-u1rtc-t_nx-zOoP7I7UCEw==/base.apk!/lib/arm64-v8a'
  07-02 17:46:15.430 D/THubApi ( 4503): getUserId TaskInfo{userId=0 taskId=48212 displayId=0 isRunning=true baseIntent=Intent { 
act=android.intent.action.MAIN cat=[android.intent.category.LAUNCHER] flg=0x10200000 cmp=com.erbete.customer/.MainActivity } 
baseActivity=ComponentInfo{com.erbete.customer/com.erbete.customer.MainActivity} 
topActivity=ComponentInfo{com.erbete.customer/com.erbete.customer.MainActivity} origActivity=null 
realActivity=ComponentInfo{com.erbete.customer/com.erbete.customer.MainActivity} numActivities=1 lastActiveTime=179756904 supportsMultiWindow=true 
resizeMode=1 isResizeable=true minWidth=-1 minHeight=-1 defaultMinSize=110 token=WCT{android.window.IWindowContainerToken$Stub$Proxy@95f1075} 
topActivityType=1 pictureInPictureParams=null shouldDockBigOverlays=false launchIntoPipHostTaskId=-1 lastParentTaskIdBeforePip=-1 
displayCutoutSafeInsets=null topActivityInfo=ActivityInfo{3fbd80a com.erbete.customer.MainActivity} launchCookies=[] positionInParent=Point(0, 0) 
parentTaskId=-1 isFocused=true isVisible=true isVisibleRequested=true isSleeping=false locusId=null displayAreaFeatureId=1 isTopActivityTransparent=false 
appCompatTaskInfo=AppCompatTaskInfo { topActivityInSizeCompat=false topActivityEligibleForLetterboxEducation= falseisLetterboxEducationEnabled= false 
isLetterboxDoubleTapEnabled= false topActivityEligibleForUserAspectRatioButton= false topActivityBoundsLetterboxed= false isFromLetterboxDoubleTap= false 
topActivityLetterboxVerticalPosition= -1 topActivityLetterboxHorizontalPosition= -1 topActivityLetterboxWidth=1080 topActivityLetterboxHeight=2436 
isUserFullscreenOverrideEnabled=false isSystemFullscreenOverrideEnabled=false cameraCompatTaskInfo=CameraCompatTaskInfo { cameraCompatControlState=hidden 
freeformCameraCompatMode=inactive}}}
  07-02 17:46:15.436 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.040234,0.000044, totalTime 0.040279 > logTimeout 
0.022000 TIMEOUT!!
> 07-02 17:46:15.459 I/flutter (14808): [IMPORTANT:flutter/shell/platform/android/android_context_vk_impeller.cc(62)] Using the Impeller rendering backend 
(Vulkan).
  07-02 17:46:15.536 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.039305,0.000051, totalTime 0.039357 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:46:15.550 I/hwcomposer(  935): [HWCDisplay] [Display_0 (type:1)] fps:59.906029,dur:1001.57,max:20.26,min:13.52  
  07-02 17:46:15.572 D/BatteryService( 1698): widetemperaturebatteryburn check uevent: {SUBSYSTEM=misc, MAJOR=10, SEQNUM=18165, ACTION=change, 
DEVNAME=eara-io, boost=1, MINOR=117, DEVPATH=/devices/virtual/misc/eara-io}
  07-02 17:46:15.573 D/BatteryService( 1698): widetemperaturebatteryburn PORT_STATE no availd
  07-02 17:46:15.577 I/eara_io@det( 1347): [scnDetStart] 
> 07-02 17:46:15.589 I/flutter (14808): The Dart VM service is listening on http://127.0.0.1:38891/QBczdrYDtTY=/
  07-02 17:46:15.615 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.039805,0.000049, totalTime 0.039854 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:46:15.655 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000000,0.039700,0.000036, totalTime 0.039736 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:46:15.678 I/eara_io@boost( 1347): [eara_io_boost] eara_io_boost 0 , ta 0
  07-02 17:46:15.695 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000000,0.039740,0.000050, totalTime 0.039790 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:46:15.735 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000000,0.039729,0.000036, totalTime 0.039764 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:46:15.775 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000000,0.039755,0.000042, totalTime 0.039798 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:46:15.779 I/eara_io@eval( 1347): [eara_io_eval] r2 617 , r 3131 , w2 0 , w 0 , w+r 3131 , w2+r2 617 , w3+r3 617
  07-02 17:46:15.779 I/eara_io@boost( 1347): [eara_io_boost] eara_io_boost 2 , ta 70
  07-02 17:46:15.779 I/mtkpower_client( 1347): perf_lock_acq, hdl:55340, dur:500, num:10, tid:24194
  07-02 17:46:15.780 I/mtkpower_client( 1347): ret_hdl:55996
  07-02 17:46:15.815 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000000,0.039766,0.000050, totalTime 0.039816 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:46:15.848 I/libPerfCtl(  970): xgfGetFPS pid:2371 fps:-1
  07-02 17:46:15.848 I/AppThermalMode(  970): [perfNotifyThermalState] hdl:0
  07-02 17:46:15.848 I/AppThermalMode(  970): [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: -1,fg->pid:14808
  07-02 17:46:15.848 I/AppThermalMode(  970): [perfNotifyThermalState] appThermalIdx -1:
  07-02 17:46:15.848 I/libPerfCtl(  970): xgfGetFPS pid:2380 fps:60
  07-02 17:46:15.848 I/AppThermalMode(  970): [perfNotifyThermalState] hdl:0
  07-02 17:46:15.848 I/AppThermalMode(  970): [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: -1,fg->pid:14808
  07-02 17:46:15.848 I/AppThermalMode(  970): [perfNotifyThermalState] appThermalIdx -1:
  07-02 17:46:15.848 I/libPerfCtl(  970): xgfGetFPS pid:2536 fps:-1
  07-02 17:46:16.215 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.039733,0.000057, totalTime 0.039791 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:46:16.229 D/FLTFireContextHolder(14808): received application context.
  07-02 17:46:16.244 I/StorageUtils(14808): /data/user/0/com.erbete.customer/files is writable
  07-02 17:46:16.246 I/StorageUtils(14808): /storage/emulated/0/Android/data/com.erbete.customer/files is writable
  07-02 17:46:16.247 I/StorageUtils(14808): /data/user/0/com.erbete.customer/files is writable
  07-02 17:46:16.247 I/StorageUtils(14808): /storage/emulated/0/Android/data/com.erbete.customer/files is writable
> 07-02 17:46:16.254 D/FlutterGeolocator(14808): Attaching Geolocator to activity
> 07-02 17:46:16.268 D/nativeloader(14808): Load 
/data/app/~~AyGGMrpckogRKolGYwuADQ==/com.erbete.customer-u1rtc-t_nx-zOoP7I7UCEw==/base.apk!/lib/arm64-v8a/libdartjni.so using class loader ns clns-7 
(caller=/data/app/~~AyGGMrpckogRKolGYwuADQ==/com.erbete.customer-u1rtc-t_nx-zOoP7I7UCEw==/base.apk!classes11.dex): ok
  07-02 17:46:16.275 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000002,0.039689,0.000042, totalTime 0.039734 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:46:16.282 I/eara_io@boost( 1347): [eara_io_boost] eara_io_boost 0 , ta 0
  07-02 17:46:16.315 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000000,0.039819,0.000066, totalTime 0.039885 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:46:16.321 W/libc    (14808): Access denied finding property "ro.vendor.tgpa_resolution_tuner"
  07-02 17:46:16.322 D/SurfaceFlinger( 1012): [SF client] NEW(0xb40000713f408d50) for (14808:com.erbete.customer)
> 07-02 17:46:16.348 I/erbete.customer(14808): hiddenapi: Accessing hidden method Landroid/view/accessibility/AccessibilityNodeInfo;->getSourceNodeId()J 
(runtime_flags=0, domain=platform, api=unsupported,test-api) from Lio/flutter/view/AccessibilityViewEmbedder$ReflectionAccessors; (domain=app, 
TargetSdkVersion=36) using reflection: allowed
> 07-02 17:46:16.348 I/erbete.customer(14808): hiddenapi: Accessing hidden method Landroid/view/accessibility/AccessibilityRecord;->getSourceNodeId()J 
(runtime_flags=0, domain=platform, api=unsupported) from Lio/flutter/view/AccessibilityViewEmbedder$ReflectionAccessors; (domain=app, TargetSdkVersion=36) 
using reflection: allowed
> 07-02 17:46:16.348 I/erbete.customer(14808): hiddenapi: Accessing hidden field 
Landroid/view/accessibility/AccessibilityNodeInfo;->mChildNodeIds:Landroid/util/LongArray; (runtime_flags=0, domain=platform, api=unsupported) from 
Lio/flutter/view/AccessibilityViewEmbedder$ReflectionAccessors; (domain=app, TargetSdkVersion=36) using reflection: allowed
> 07-02 17:46:16.349 I/erbete.customer(14808): hiddenapi: Accessing hidden method Landroid/util/LongArray;->get(I)J (runtime_flags=0, domain=platform, 
api=unsupported) from Lio/flutter/view/AccessibilityViewEmbedder$ReflectionAccessors; (domain=app, TargetSdkVersion=36) using reflection: allowed
  07-02 17:46:16.355 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000000,0.039598,0.000107, totalTime 0.039705 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:46:16.373 D/TranClassInfo(14808): instance successfully. com.transsion.connectivity.linkbooming.TranMultilinkComponentImpl@9ac3d7c from 
com.transsion.hubcore.linkbooming.ITranMultilinkComponent
  07-02 17:46:16.375 I/PowerHalWrapper(14808): PowerHalWrapper.getInstance 
> 07-02 17:46:16.376 D/ActivityThread(14808): handleResumeActivity#3 r.window=nulla.mFinished = falsewillBeVisible = true
> 07-02 17:46:16.376 D/ActivityThread(14808): handleResumeActivity#4 addView a.mVisibleFromClient=truea.mWindowAdded=falsedecor=DecorView@63db568[]
> 07-02 17:46:16.376 D/ActivityThread(14808): handleResumeActivity#5 addView decor=DecorView@63db568[]
  07-02 17:46:16.378 D/SurfaceFlinger( 1012): [SF client] NEW(0xb40000713f3ef8e0) for (14808:com.erbete.customer)
  07-02 17:46:16.382 I/eara_io@boost( 1347): [eara_io_boost] eara_io_boost 0 , ta 0
  07-02 17:46:16.383 W/libc    (14808): Access denied finding property "ro.vendor.scaler_version"
  07-02 17:46:16.383 I/mtkpower@impl(  970): [powerd_req] TIMER_MSG_PERF_LOCK_TIMEOUT hdl:55996
  07-02 17:46:16.383 I/libPowerHal(  970): [PD] eara_io_service update cmd:1408300 param:20
  07-02 17:46:16.384 W/libc    (14808): Access denied finding property "ro.vendor.scaler_version"
  07-02 17:46:16.384 I/libPowerHal(  970): [PD] eara_io_service update cmd:1438300, param:1000
  07-02 17:46:16.385 I/libPowerHal(  970): [PD] eara_io_service update cmd:1438400, param:1000
  07-02 17:46:16.385 I/libPowerHal(  970): [PD] eara_io_service update cmd:1438600 param:1000
  07-02 17:46:16.385 I/libPowerHal(  970): [PD] eara_io_service update cmd:1438700 param:1000
  07-02 17:46:16.388 D/uas-service( 1219): thread(pid=24146) com.erbete.customer is config default uxtag 0x420
  07-02 17:46:16.391 D/VRI[MainActivity](14808): hardware acceleration = true, forceHwAccelerated = false
  07-02 17:46:16.392 D/ViewRootImpl(14808): setView appearance:512 com.erbete.customer/com.erbete.customer.MainActivity
  07-02 17:46:16.393 D/SurfaceFlinger( 1012): [SF client] NEW(0xb40000713f41f3a0) for (1698:system_server)
> 07-02 17:46:16.395 I/BufferQueueDebug( 1012): [ac87882 
com.erbete.customer/com.erbete.customer.MainActivity#19927](this:0xb40000731f5a6388,id:-1,api:0,p:-1,c:-1) BufferQueue 
core=(1012:/system/bin/surfaceflinger)
  07-02 17:46:16.398 D/os.SingleLiceFactory(14808): instance successfully. com.transsion.widget.v3.FloatingToolbarLice@6d1640a from 
com.android.internal.IInternalViewLice
  07-02 17:46:16.398 D/InputEventReceiver(14808): Input log is disabled in InputEventReceiver.
  07-02 17:46:16.399 I/TranThermalBacklightCtrl( 1698): cur package [com.erbete.customer] is in TemperatureControlWhitelist
  07-02 17:46:16.399 I/TranThermalBacklightCtrl( 1698): mParamAPTempHigh[0]=43.0, mParamAPTempLow[0]=41.0, mParamBrightnessMax[0]=0.79999995, 
mParamLuxLimit[0]=2000.0
  07-02 17:46:16.399 I/TranThermalBacklightCtrl( 1698): mParamAPTempHigh[1]=46.0, mParamAPTempLow[1]=44.0, mParamBrightnessMax[1]=0.65, 
mParamLuxLimit[1]=2000.0
  07-02 17:46:16.399 I/TranThermalBacklightCtrl( 1698): mParamAPTempHigh[2]=49.0, mParamAPTempLow[2]=47.0, mParamBrightnessMax[2]=0.5, 
mParamLuxLimit[2]=2000.0
  07-02 17:46:16.415 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000000,0.039807,0.000050, totalTime 0.039857 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:46:16.432 I/BufferQueueProducer( 1012): [VDS-studio.screen.sharing:0 SINK](this:0xb40000725f6b6a38,id:-1,api:1,p:1012,c:1012) queueBuffer: 
fps=32.40 dur=1851.81 max=867.41 min=13.60
  07-02 17:46:16.483 I/eara_io@boost( 1347): [eara_io_boost] eara_io_boost 0 , ta 0
  07-02 17:46:16.496 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000000,0.040028,0.000056, totalTime 0.040084 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:46:16.535 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000000,0.039279,0.000051, totalTime 0.039331 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:46:16.547 I/Hiber/fastState( 1698): fastUnFreeze reason=appStart timeout size=6 uids=[10098, 10155, 10198, 10199, 10225, 10254] about 
costTime=13ms
  07-02 17:46:16.548 D/TranSignalStrengthComponentImpl(30413): [LTE] dbm: -88
  07-02 17:46:16.549 I/Choreographer(30413): Skipped 179 frames!  The application may be doing too much work on its main thread.
  07-02 17:46:16.555 D/TranSignalStrengthComponentImpl(30413): [LTE] dbm: -88
  07-02 17:46:16.555 D/TranSignalStrengthComponentImpl(30413): [LTE] dbm: -88
  07-02 17:46:16.566 D/CoreBackPreview( 1698): Window{ac87882 u0 com.erbete.customer/com.erbete.customer.MainActivity}: Setting back callback 
OnBackInvokedCallbackInfo{mCallback=android.window.IOnBackInvokedCallback$Stub$Proxy@ed7b7d0, mPriority=-1, mIsAnimationCallback=false}
  07-02 17:46:16.570 I/zygote  (  913): Delayed USAP Pool refill. New USAPs: 1
  07-02 17:46:16.570 I/WindowExtensionsImpl(14808): Initializing Window Extensions, vendor API level=6, activity embedding enabled=true
  07-02 17:46:16.572 D/TranAppBrightnessChangeController( 1698): [handleMessage] msg type: 1001 isCloudEnabled: true
  07-02 17:46:16.573 D/WindowManager( 1698): getTopPackages# topPackages = []
  07-02 17:46:16.583 I/eara_io@boost( 1347): [eara_io_boost] eara_io_boost 0 , ta 0
  07-02 17:46:16.587 D/Zygote  (  913): Forked child process 24198
  07-02 17:46:16.598 I/WhiteNavigationLice(14808): add APPEARANCE_LIGHT_NAVIGATION_BARS for DecorView@63db568[MainActivity]
> 07-02 17:46:16.600 I/BufferQueueDebug( 1012): 
[com.erbete.customer/com.erbete.customer.MainActivity#19928](this:0xb40000731f642d78,id:-1,api:0,p:-1,c:-1) BufferQueue 
core=(1012:/system/bin/surfaceflinger)
  07-02 17:46:16.603 D/WindowManager( 1698): currentFocusId -1 newFocusId: 0 currentFocusIsMultiWindow: false newFocusIsMultiWindow: false
  07-02 17:46:16.603 W/WindowManager( 1698): Changing focus from null to Window{ac87882 u0 com.erbete.customer/com.erbete.customer.MainActivity} 
displayId=0 Callers=com.android.server.wm.RootWindowContainer.updateFocusedWindowLocked:528 
com.android.server.wm.WindowManagerService.updateFocusedWindowLocked:6849 com.android.server.wm.WindowManagerService.relayoutWindowInner:2856 
com.android.server.wm.WindowManagerService.relayoutWindow:2515 
> 07-02 17:46:16.604 I/BufferQueueDebug( 1012): [Surface(name=174f644 NavigationBar0)/@0x46ac9dc - animation-leash of 
insets_animation#19929](this:0xb40000731f5c8648,id:-1,api:0,p:-1,c:-1) BufferQueue core=(1012:/system/bin/surfaceflinger)
> 07-02 17:46:16.606 I/BufferQueueDebug( 1012): [Surface(name=f48663c StatusBar)/@0x8eec4a5 - animation-leash of 
insets_animation#19930](this:0xb40000731f6126e8,id:-1,api:0,p:-1,c:-1) BufferQueue core=(1012:/system/bin/surfaceflinger)
  07-02 17:46:16.607 D/WindowManager( 1698): updateSystemBarAttributes appearance:528, win appearance:528, opaqueAppearance:0, win:Window{ac87882 u0 
com.erbete.customer/com.erbete.customer.MainActivity}, appearanceRegions=[AppearanceRegion{LIGHT_STATUS_BARS bounds=[0,0][1080,2436]}]
  07-02 17:46:16.608 D/TranDisplayJamMonitor( 1698): starting window overlay on focus window. WindowInfo:Window{d952b0b u0 Splash Screen 
com.erbete.customer}
  07-02 17:46:16.608 D/TranDisplayJamMonitor( 1698): checkExceptionWindowResult = 1040
  07-02 17:46:16.608 D/TranDisplayJamMonitor( 1698): check display window jam detection:Window{ac87882 u0 
com.erbete.customer/com.erbete.customer.MainActivity}
  07-02 17:46:16.608 D/TranDisplayJamMonitor( 1698): remove screen rotation animation detection
  07-02 17:46:16.608 I/hwcomposer(  935): [HWCDisplay] [Display_0 (type:1)] fps:3.779735,dur:1058.28,max:843.32,min:15.72  
  07-02 17:46:16.608 I/WindowManager( 1698): Relayout Window{ac87882 u0 com.erbete.customer/com.erbete.customer.MainActivity}: oldVis=4 newVis=0 
focusMayChange = true requestedWidth = 1080 requestedHeight = 2436 outFrames = ClientWindowFrames{frame=[0,0][1080,2436] display=[0,0][1080,2436] 
parentFrame=[0,0][0,0]} outSurfaceControl = Surface(name=com.erbete.customer/com.erbete.customer.MainActivity)/@0x5343301
  07-02 17:46:16.608 I/StatusBarModePerDisplayRepository( 2380): isInFullscreenMode:false com.erbete.customer
  07-02 17:46:16.610 D/BufferQueueConsumer(14808): [](id:39d800000000,api:0,p:-1,c:14808) connect: controlledByApp=false
> 07-02 17:46:16.611 D/BLASTBufferQueue(14808): [VRI[MainActivity]#0](f:0,a:0) constructor()
> 07-02 17:46:16.611 D/BLASTBufferQueue(14808): [VRI[MainActivity]#0](f:0,a:0) update width=1080 height=2436 format=-3 mTransformHint=0
  07-02 17:46:16.618 D/libMEOW (14808): meow new tls: 0xb40000751ea3b470
  07-02 17:46:16.618 D/libMEOW (14808): applied 1 plugins for [com.erbete.customer]:
  07-02 17:46:16.618 D/libMEOW (14808):   plugin 1: [libMEOW_gift.so]: 0xb40000749e5e3840
  07-02 17:46:16.618 D/libMEOW (14808): rebuild call chain: 0xb40000751ea1b450
> 07-02 17:46:16.624 I/BufferQueueDebug( 1012): [Bounds for - 
com.erbete.customer/com.erbete.customer.MainActivity#19931](this:0xb40000731f5fe7f8,id:-1,api:0,p:-1,c:-1) BufferQueue 
core=(1012:/system/bin/surfaceflinger)
  07-02 17:46:16.625 D/SurfaceComposerClient( 1698): Transaction::apply InputWindowCommands.focusRequests timestamp=162757742520316, windowName=ac87882 
com.erbete.customer/com.erbete.customer.MainActivity
> 07-02 17:46:16.625 I/BufferQueueDebug( 1012): 
[SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity]#19932](this:0xb40000731f5ea908,id:-1,api:0,p:-1,c:-1) BufferQueue 
core=(1012:/system/bin/surfaceflinger)
> 07-02 17:46:16.626 I/BufferQueueDebug( 1012): 
[SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity](BLAST)#19933](this:0xb40000731f5ba278,id:-1,api:0,p:-1,c:-1) BufferQueue 
core=(1012:/system/bin/surfaceflinger)
> 07-02 17:46:16.628 I/BufferQueueDebug( 1012): [Background for 
SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity]#19934](this:0xb40000731f5a0868,id:-1,api:0,p:-1,c:-1) BufferQueue 
core=(1012:/system/bin/surfaceflinger)
  07-02 17:46:16.628 D/BufferQueueConsumer(14808): [](id:39d800000001,api:0,p:-1,c:14808) connect: controlledByApp=false
> 07-02 17:46:16.629 D/BLASTBufferQueue(14808): [SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity]#1](f:0,a:0) constructor()
> 07-02 17:46:16.629 D/BLASTBufferQueue(14808): [SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity]#1](f:0,a:0) update width=1080 
height=2436 format=4 mTransformHint=0
  07-02 17:46:16.633 E/gralloc4(14808): ERROR: Format allocation info not found for format: 38
  07-02 17:46:16.633 E/gralloc4(14808): ERROR: Format allocation info not found for format: 0
  07-02 17:46:16.633 E/gralloc4(14808): Invalid base format! req_base_format = 0x0, req_format = 0x38, type = 0x0
  07-02 17:46:16.633 E/gralloc4(14808): ERROR: Unrecognized and/or unsupported format 0x38 and usage 0xb00
  07-02 17:46:16.633 E/Gralloc4(14808): isSupported(1, 1, 56, 1, ...) failed with 5
  07-02 17:46:16.634 E/HWComposer( 1012): getSupportedContentTypes: getSupportedContentTypes failed for display 0: Unsupported (8)
  07-02 17:46:16.636 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.039852,0.000069, totalTime 0.039922 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:46:16.636 E/gralloc4(  931): ERROR: Format allocation info not found for format: 38
  07-02 17:46:16.636 E/gralloc4(  931): ERROR: Format allocation info not found for format: 0
  07-02 17:46:16.636 E/gralloc4(  931): Invalid base format! req_base_format = 0x0, req_format = 0x38, type = 0x0
  07-02 17:46:16.636 E/gralloc4(  931): ERROR: Unrecognized and/or unsupported format 0x38 and usage 0xb00
  07-02 17:46:16.636 E/gralloc4(  931): allocate, buffer allocation failed with 0
  07-02 17:46:16.636 E/GraphicBufferAllocator(14808): Failed to allocate (4 x 4) layerCount 1 format 56 usage b00: 5
  07-02 17:46:16.636 E/AHardwareBuffer(14808): GraphicBuffer(w=4, h=4, lc=1) failed (Unknown error -5), handle=0x0
  07-02 17:46:16.636 E/gralloc4(14808): ERROR: Format allocation info not found for format: 3b
  07-02 17:46:16.636 E/gralloc4(14808): ERROR: Format allocation info not found for format: 0
  07-02 17:46:16.636 E/gralloc4(14808): Invalid base format! req_base_format = 0x0, req_format = 0x3b, type = 0x0
  07-02 17:46:16.636 E/gralloc4(14808): ERROR: Unrecognized and/or unsupported format 0x3b and usage 0xb00
  07-02 17:46:16.636 E/Gralloc4(14808): isSupported(1, 1, 59, 1, ...) failed with 5
  07-02 17:46:16.636 E/gralloc4(  931): ERROR: Format allocation info not found for format: 3b
  07-02 17:46:16.639 W/libc    (14808): Access denied finding property "vendor.mbrain.enabled"
  07-02 17:46:16.639 D/erbete.customer(14808): MBrain is disabled
  07-02 17:46:16.639 D/erbete.customer(14808): initMbrain failed
  07-02 17:46:16.642 D/SurfaceFlinger( 1012): Focus addInputWindowCommands timestamp=162757742520316, windowName=ac87882 
com.erbete.customer/com.erbete.customer.MainActivity
  07-02 17:46:16.652 D/SurfaceFlinger( 1012): updateWinowInfo=1, setFocusedWindow timestamp=162757742520316, windowName=ac87882 
com.erbete.customer/com.erbete.customer.MainActivity
  07-02 17:46:16.679 W/Choreographer(14808): Already have a pending vsync event.  There should only be one at a time.
> 07-02 17:46:16.680 D/FlutterGeolocator(14808): Creating service.
> 07-02 17:46:16.680 D/FlutterGeolocator(14808): Binding to location service.
> 07-02 17:46:16.682 D/FlutterLocationService(14808): Creating service.
  07-02 17:46:16.683 I/eara_io@boost( 1347): [eara_io_boost] eara_io_boost 0 , ta 0
> 07-02 17:46:16.686 D/FlutterLocationService(14808): Binding to location service.
  07-02 17:46:16.695 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.039783,0.000036, totalTime 0.039819 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:46:16.702 I/android.hardware.thermal@2.0-service.mtk(  940): fill_temperatures filterType1 name: SKIN type: SKIN throttlingStatus: NONE value: 
42.125 ret_temps size 0
  07-02 17:46:16.702 I/TranHBMManagerService( 1698): mValidTempObserver : onUEvent: {SUBSYSTEM=platform, SEQNUM=18167, ACTION=change, 
OF_FULLNAME=/thermal-ntc1, DRIVER=generic-adc-thermal, OF_COMPATIBLE_0=generic-adc-thermal, MODALIAS=of:Nthermal-ntc1T(null)Cgeneric-adc-thermal, 
DEVPATH=/devices/platform/thermal-ntc1, TOO_HOT=1, OF_NAME=thermal-ntc1, 
OF_COMPATIBLE_N=1},exceed=true,exceedTwo=false,down=false,data.inspire=true,data.thermal=true,CLR=42000,TRIG=44000
  07-02 17:46:16.702 I/TranHBMController[0]( 1698): onMachineAllowTempInspireChanged state=false,current=true
  07-02 17:46:16.703 D/BatteryService( 1698): widetemperaturebatteryburn check uevent: {SUBSYSTEM=platform, SEQNUM=18167, ACTION=change, 
OF_FULLNAME=/thermal-ntc1, DRIVER=generic-adc-thermal, OF_COMPATIBLE_0=generic-adc-thermal, MODALIAS=of:Nthermal-ntc1T(null)Cgeneric-adc-thermal, 
DEVPATH=/devices/platform/thermal-ntc1, TOO_HOT=1, OF_NAME=thermal-ntc1, OF_COMPATIBLE_N=1}
  07-02 17:46:16.703 D/BatteryService( 1698): widetemperaturebatteryburn PORT_STATE no availd
> 07-02 17:46:16.711 D/FlutterGeolocator(14808): Geolocator foreground service connected
> 07-02 17:46:16.712 D/FlutterGeolocator(14808): Initializing Geolocator services
> 07-02 17:46:16.712 D/FlutterGeolocator(14808): Flutter engine connected. Connected engine count 1
> 07-02 17:46:16.712 D/LocationPlugin(14808): Service connected: ComponentInfo{com.erbete.customer/com.lyokone.location.FlutterLocationService}
  07-02 17:46:16.727 D/CoreBackPreview( 1698): Window{ac87882 u0 com.erbete.customer/com.erbete.customer.MainActivity}: Setting back callback 
OnBackInvokedCallbackInfo{mCallback=android.window.IOnBackInvokedCallback$Stub$Proxy@5959be7, mPriority=0, mIsAnimationCallback=true}
  07-02 17:46:16.734 W/WindowOnBackDispatcher(14808): sendCancelIfRunning: isInProgress=false 
callback=androidx.navigationevent.OnBackInvokedInput$createOnBackAnimationCallback$1@b170ae5
  07-02 17:46:16.735 D/CoreBackPreview( 1698): Window{ac87882 u0 com.erbete.customer/com.erbete.customer.MainActivity}: Setting back callback 
OnBackInvokedCallbackInfo{mCallback=android.window.IOnBackInvokedCallback$Stub$Proxy@1ddf394, mPriority=-1, mIsAnimationCallback=false}
  07-02 17:46:16.736 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000000,0.040043,0.000069, totalTime 0.040112 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:46:16.784 I/eara_io@boost( 1347): [eara_io_boost] eara_io_boost 0 , ta 0
  07-02 17:46:16.821 I/keystore2(  669): system/security/keystore2/src/security_level.rs:235 - create_operation start
  07-02 17:46:16.821 I/keystore2(  669): system/security/keystore2/src/security_level.rs:237 - caller_pid=14808
  07-02 17:46:16.821 I/keystore2(  669): system/security/keystore2/src/security_level.rs:238 - caller_uid=10509
  07-02 17:46:16.821 I/keystore2(  669): system/security/keystore2/src/security_level.rs:239 - forced=false
  07-02 17:46:16.821 I/keystore2(  669): system/security/keystore2/src/security_level.rs:240 - key.domain=r#KEY_ID
  07-02 17:46:16.821 I/keystore2(  669): system/security/keystore2/src/security_level.rs:241 - key.alias=None
  07-02 17:46:16.821 I/keystore2(  669): system/security/keystore2/src/security_level.rs:277 - with_try_import start
  07-02 17:46:16.822 I/keystore2(  669): system/security/keystore2/src/security_level.rs:299 - with_try_import end
  07-02 17:46:16.822 I/keystore2(  669): system/security/keystore2/src/security_level.rs:333 - authorize_create start
  07-02 17:46:16.822 I/keystore2(  669): system/security/keystore2/src/security_level.rs:344 - authorize_create end
  07-02 17:46:16.822 I/keystore2(  669): system/security/keystore2/src/security_level.rs:345 - unwrap_key_if_required start
  07-02 17:46:16.822 I/keystore2(  669): system/security/keystore2/src/security_level.rs:353 - unwrap_key_if_required end
  07-02 17:46:16.822 I/keystore2(  669): system/security/keystore2/src/security_level.rs:354 - upgrade_keyblob_if_required_with start
  07-02 17:46:16.823 D/TlcKM   (  670): TEE_Begin 5.0
  07-02 17:46:16.823 D/TlcKM   (  670): purpose = 0x00000000
> 07-02 17:46:16.824 D/TlcKM   (  670): find_spare_operation_slot: allocate op 0xaed91c03e8731183 to slot #0 (1 ops live)
  07-02 17:46:16.825 D/TlcKM   (  670): TEE_Begin exiting with 0
  07-02 17:46:16.825 I/keystore2(  669): system/security/keystore2/src/security_level.rs:395 - upgrade_keyblob_if_required_with end
  07-02 17:46:16.825 I/keystore2(  669): system/security/keystore2/src/enforcements.rs:249 - finalize_create_authorization self.state=NoAuthRequired
  07-02 17:46:16.825 I/keystore2(  669): system/security/keystore2/src/security_level.rs:401 - operation_db.create_operation start
  07-02 17:46:16.825 I/keystore2(  669): system/security/keystore2/src/security_level.rs:419 - operation_db.create_operation end
  07-02 17:46:16.826 D/TlcKM   (  670): TEE_Update
  07-02 17:46:16.826 D/TlcKM   (  670): split_update_chunks
  07-02 17:46:16.827 D/TlcKM   (  670): TEE_Update exiting with 0
  07-02 17:46:16.828 D/TlcKM   (  670): TEE_Finish
  07-02 17:46:16.828 D/TlcKM   (  670): split_update_chunks
> 07-02 17:46:16.829 D/TlcKM   (  670): release_operation_slot: release op slot #0 (handle 0xaed91c03e8731183; 0 ops live)
  07-02 17:46:16.829 D/TlcKM   (  670): TEE_Finish exiting with 0
  07-02 17:46:16.829 D/TlcKM   (  670): TEE_Abort
  07-02 17:46:16.830 E/TlcKM   (  670): lookup_operation: op 0xaed91c03e8731183 not found
  07-02 17:46:16.830 E/TlcKM   (  670): lookup_operation(session, operation_handle, &op) == -28
  07-02 17:46:16.830 D/TlcKM   (  670): TEE_Abort exiting with -28
  07-02 17:46:16.830 I/keystore2(  669): system/security/keystore2/src/security_level.rs:235 - create_operation start
  07-02 17:46:16.830 I/keystore2(  669): system/security/keystore2/src/security_level.rs:237 - caller_pid=14808
  07-02 17:46:16.830 I/keystore2(  669): system/security/keystore2/src/security_level.rs:238 - caller_uid=10509
  07-02 17:46:16.830 I/keystore2(  669): system/security/keystore2/src/security_level.rs:239 - forced=false
  07-02 17:46:16.830 I/keystore2(  669): system/security/keystore2/src/security_level.rs:240 - key.domain=r#KEY_ID
  07-02 17:46:16.830 I/keystore2(  669): system/security/keystore2/src/security_level.rs:241 - key.alias=None
  07-02 17:46:16.830 I/keystore2(  669): system/security/keystore2/src/security_level.rs:277 - with_try_import start
  07-02 17:46:16.831 I/keystore2(  669): system/security/keystore2/src/security_level.rs:299 - with_try_import end
  07-02 17:46:16.831 I/keystore2(  669): system/security/keystore2/src/security_level.rs:333 - authorize_create start
  07-02 17:46:16.831 I/keystore2(  669): system/security/keystore2/src/security_level.rs:344 - authorize_create end
  07-02 17:46:16.831 I/keystore2(  669): system/security/keystore2/src/security_level.rs:345 - unwrap_key_if_required start
  07-02 17:46:16.831 I/keystore2(  669): system/security/keystore2/src/security_level.rs:353 - unwrap_key_if_required end
  07-02 17:46:16.831 I/keystore2(  669): system/security/keystore2/src/security_level.rs:354 - upgrade_keyblob_if_required_with start
  07-02 17:46:16.831 D/TlcKM   (  670): TEE_Begin 5.0
  07-02 17:46:16.831 D/TlcKM   (  670): purpose = 0x00000001
> 07-02 17:46:16.832 D/TlcKM   (  670): find_spare_operation_slot: allocate op 0xfcb9308e81abbdd3 to slot #0 (1 ops live)
  07-02 17:46:16.832 D/TlcKM   (  670): TEE_Begin exiting with 0
  07-02 17:46:16.834 I/keystore2(  669): system/security/keystore2/src/security_level.rs:395 - upgrade_keyblob_if_required_with end
  07-02 17:46:16.834 I/keystore2(  669): system/security/keystore2/src/enforcements.rs:249 - finalize_create_authorization self.state=NoAuthRequired
  07-02 17:46:16.834 I/keystore2(  669): system/security/keystore2/src/security_level.rs:401 - operation_db.create_operation start
  07-02 17:46:16.834 I/keystore2(  669): system/security/keystore2/src/security_level.rs:419 - operation_db.create_operation end
  07-02 17:46:16.835 D/TlcKM   (  670): TEE_Update
  07-02 17:46:16.835 D/TlcKM   (  670): split_update_chunks
  07-02 17:46:16.835 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.039817,0.000052, totalTime 0.039870 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:46:16.836 D/TlcKM   (  670): TEE_Update exiting with 0
  07-02 17:46:16.839 D/TlcKM   (  670): TEE_Finish
  07-02 17:46:16.839 D/TlcKM   (  670): split_update_chunks
> 07-02 17:46:16.840 D/TlcKM   (  670): release_operation_slot: release op slot #0 (handle 0xfcb9308e81abbdd3; 0 ops live)
  07-02 17:46:16.840 D/TlcKM   (  670): TEE_Finish exiting with 0
  07-02 17:46:16.840 D/TlcKM   (  670): TEE_Abort
  07-02 17:46:16.840 E/TlcKM   (  670): lookup_operation: op 0xfcb9308e81abbdd3 not found
  07-02 17:46:16.840 E/TlcKM   (  670): lookup_operation(session, operation_handle, &op) == -28
  07-02 17:46:16.840 D/TlcKM   (  670): TEE_Abort exiting with -28
  07-02 17:46:16.844 I/keystore2(  669): system/security/keystore2/src/security_level.rs:235 - create_operation start
  07-02 17:46:16.844 I/keystore2(  669): system/security/keystore2/src/security_level.rs:237 - caller_pid=14808
  07-02 17:46:16.844 I/keystore2(  669): system/security/keystore2/src/security_level.rs:238 - caller_uid=10509
  07-02 17:46:16.844 I/keystore2(  669): system/security/keystore2/src/security_level.rs:239 - forced=false
  07-02 17:46:16.844 I/keystore2(  669): system/security/keystore2/src/security_level.rs:240 - key.domain=r#KEY_ID
  07-02 17:46:16.844 I/keystore2(  669): system/security/keystore2/src/security_level.rs:241 - key.alias=None
  07-02 17:46:16.844 I/keystore2(  669): system/security/keystore2/src/security_level.rs:277 - with_try_import start
  07-02 17:46:16.845 I/keystore2(  669): system/security/keystore2/src/security_level.rs:299 - with_try_import end
  07-02 17:46:16.845 I/keystore2(  669): system/security/keystore2/src/security_level.rs:333 - authorize_create start
  07-02 17:46:16.845 I/keystore2(  669): system/security/keystore2/src/security_level.rs:344 - authorize_create end
  07-02 17:46:16.845 I/keystore2(  669): system/security/keystore2/src/security_level.rs:345 - unwrap_key_if_required start
  07-02 17:46:16.845 I/keystore2(  669): system/security/keystore2/src/security_level.rs:353 - unwrap_key_if_required end
  07-02 17:46:16.845 I/keystore2(  669): system/security/keystore2/src/security_level.rs:354 - upgrade_keyblob_if_required_with start
  07-02 17:46:16.845 D/TlcKM   (  670): TEE_Begin 5.0
  07-02 17:46:16.845 D/TlcKM   (  670): purpose = 0x00000001
> 07-02 17:46:16.846 D/TlcKM   (  670): find_spare_operation_slot: allocate op 0x923b29a4d4e6ff92 to slot #0 (1 ops live)
  07-02 17:46:16.847 D/TlcKM   (  670): TEE_Begin exiting with 0
  07-02 17:46:16.848 I/keystore2(  669): system/security/keystore2/src/security_level.rs:395 - upgrade_keyblob_if_required_with end
  07-02 17:46:16.848 I/keystore2(  669): system/security/keystore2/src/enforcements.rs:249 - finalize_create_authorization self.state=NoAuthRequired
  07-02 17:46:16.848 I/keystore2(  669): system/security/keystore2/src/security_level.rs:401 - operation_db.create_operation start
  07-02 17:46:16.848 I/keystore2(  669): system/security/keystore2/src/security_level.rs:419 - operation_db.create_operation end
  07-02 17:46:16.849 I/libPerfCtl(  970): xgfGetFPS pid:2371 fps:-1
  07-02 17:46:16.849 I/AppThermalMode(  970): [perfNotifyThermalState] hdl:0
  07-02 17:46:16.849 I/AppThermalMode(  970): [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: -1,fg->pid:14808
  07-02 17:46:16.849 I/AppThermalMode(  970): [perfNotifyThermalState] appThermalIdx -1:
  07-02 17:46:16.849 D/TlcKM   (  670): TEE_Update
  07-02 17:46:16.849 D/TlcKM   (  670): split_update_chunks
  07-02 17:46:16.849 I/libPerfCtl(  970): xgfGetFPS pid:2380 fps:-1
  07-02 17:46:16.849 I/AppThermalMode(  970): [perfNotifyThermalState] hdl:0
  07-02 17:46:16.849 I/AppThermalMode(  970): [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: -1,fg->pid:14808
  07-02 17:46:16.849 I/AppThermalMode(  970): [perfNotifyThermalState] appThermalIdx -1:
  07-02 17:46:16.849 I/libPerfCtl(  970): xgfGetFPS pid:2536 fps:-1
  07-02 17:46:16.849 I/AppThermalMode(  970): [perfNotifyThermalState] hdl:0
  07-02 17:46:16.849 I/AppThermalMode(  970): [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: -1,fg->pid:14808
  07-02 17:46:16.849 I/AppThermalMode(  970): [perfNotifyThermalState] appThermalIdx -1:
  07-02 17:46:16.849 I/libPerfCtl(  970): xgfGetFPS pid:4503 fps:-1
  07-02 17:46:16.849 I/AppThermalMode(  970): [perfNotifyThermalState] hdl:0
  07-02 17:46:16.849 I/AppThermalMode(  970): [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: -1,fg->pid:14808
  07-02 17:46:16.849 I/AppThermalMode(  970): [perfNotifyThermalState] appThermalIdx -1:
  07-02 17:46:16.850 D/TlcKM   (  670): TEE_Update exiting with 0
  07-02 17:46:16.851 D/TlcKM   (  670): TEE_Finish
  07-02 17:46:16.851 D/TlcKM   (  670): split_update_chunks
> 07-02 17:46:16.852 D/TlcKM   (  670): release_operation_slot: release op slot #0 (handle 0x923b29a4d4e6ff92; 0 ops live)
  07-02 17:46:16.853 D/TlcKM   (  670): TEE_Finish exiting with 0
  07-02 17:46:16.853 D/TlcKM   (  670): TEE_Abort
  07-02 17:46:16.853 E/TlcKM   (  670): lookup_operation: op 0x923b29a4d4e6ff92 not found
  07-02 17:46:16.853 E/TlcKM   (  670): lookup_operation(session, operation_handle, &op) == -28
  07-02 17:46:16.853 D/TlcKM   (  670): TEE_Abort exiting with -28
  07-02 17:46:16.866 D/FirebaseAuth(14808): Notifying id token listeners about user ( knuh6A1Ihnd3BarNsmwz0YFuyKt2 ).
> 07-02 17:46:16.873 I/BufferQueueProducer( 1012): [SmartPanel_handleView#19844](this:0xb40000731f5d3c88,id:-1,api:0,p:-1,c:1012) queueBuffer: fps=0.17 
dur=5756.52 max=5756.52 min=5756.52
  07-02 17:46:16.875 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000000,0.039777,0.000053, totalTime 0.039830 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:46:16.884 I/eara_io@boost( 1347): [eara_io_boost] eara_io_boost 0 , ta 0
  07-02 17:46:16.887 E/ApplicationHelper( 1698): Fail to get PackageManager
  07-02 17:46:16.889 I/FontLog ( 4458): (REDACTED) Received query %s, URI %s
  07-02 17:46:16.889 I/FontLog ( 4458): (REDACTED) Query [%s] resolved to %s
  07-02 17:46:16.889 D/TriggerService( 4219): trigger service is running
  07-02 17:46:16.891 I/FontLog ( 4458): (REDACTED) Fetch %s end status %s
  07-02 17:46:16.894 I/FontLog ( 4458): (REDACTED) Pulling font file for id = %d, cache size = %d
  07-02 17:46:16.899 I/FontLog ( 4458): (REDACTED) Pulling font file for id = %d, cache size = %d
  07-02 17:46:16.936 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.039884,0.000047, totalTime 0.039931 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:46:16.984 I/eara_io@boost( 1347): [eara_io_boost] eara_io_boost 0 , ta 0
  07-02 17:46:16.997 I/erbete.customer(14808): Compiler allocated 6867KB to compile void android.view.ViewRootImpl.performTraversals()
  07-02 17:46:17.016 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.039815,0.000044, totalTime 0.039859 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:46:17.084 I/eara_io@boost( 1347): [eara_io_boost] eara_io_boost 0 , ta 0
  07-02 17:46:17.095 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.039853,0.000061, totalTime 0.039915 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:46:17.155 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.039800,0.000074, totalTime 0.039875 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:46:17.185 I/eara_io@boost( 1347): [eara_io_boost] eara_io_boost 0 , ta 0
  07-02 17:46:17.206 I/StatusBarNetworkRateView( 2380): wifi is default. hide second network rate view. StatusBarNetworkRateView subId=2, 
isFirstSimCard=false, mLocation=QS_NEW NetworkRateState=NetworkRateState{visible=true, activeMobileDataSubId=2, totalRate=0.0, netWorkState=1, 
isAirplane=false, netRateStateBySettingGlobal=1, networkRate='0,00', networkRateUnit='KB/S'}
> 07-02 17:46:17.239 I/BufferQueueProducer( 1012): [StatusBar#97](this:0xb40000731f578a88,id:-1,api:0,p:-1,c:1012) queueBuffer: fps=2.26 dur=3544.08 
max=3328.76 min=16.24
  07-02 17:46:17.256 D/WifiClientModeImpl[24001351:wlan0]( 1698): updateLinkLayerStatsRssiSpeedFrequencyCapabilities rssi=-53 TxLinkspeed=54 freq=5765 
RxLinkSpeed=6
  07-02 17:46:17.257 D/WifiDataStall( 1698): tx tput in kbps: 50000
  07-02 17:46:17.258 D/WifiDataStall( 1698): rx tput in kbps: 50000
  07-02 17:46:17.259 V/WifiConfigManager( 1698): Updating scan detail cache freq=5765 BSSID=ac:4a:56:28:fe:ee RSSI=-53 for "TAUFIKKOPIBATOH@WIFI.ID"NONE
  07-02 17:46:17.260 D/WifiThroughputPredictor( 1698):  utilization (LLS) 15 isBluetoothConnected: false final utilization: 15
  07-02 17:46:17.261 D/WifiThroughputPredictor( 1698):  BW: 0 RSSI: -53 Nss: 1 Mode: 1 symDur: 4000 snrDb 27 bitPerTone: 4500 rate: 54 throughput: 50
  07-02 17:46:17.261 D/WifiThroughputPredictor( 1698):  utilization (LLS) 15 isBluetoothConnected: false final utilization: 15
  07-02 17:46:17.262 D/WifiThroughputPredictor( 1698):  BW: 0 RSSI: -53 Nss: 1 Mode: 1 symDur: 4000 snrDb 27 bitPerTone: 4500 rate: 54 throughput: 50
  07-02 17:46:17.262 D/WifiThroughputPredictor( 1698):  utilization (LLS) 15 isBluetoothConnected: false final utilization: 15
  07-02 17:46:17.263 D/WifiThroughputPredictor( 1698):  BW: 0 RSSI: -53 Nss: 1 Mode: 1 symDur: 4000 snrDb 27 bitPerTone: 4500 rate: 54 throughput: 50
  07-02 17:46:17.263 D/WifiThroughputPredictor( 1698):  utilization (LLS) 15 isBluetoothConnected: false final utilization: 15
  07-02 17:46:17.263 D/WifiThroughputPredictor( 1698):  BW: 0 RSSI: -53 Nss: 1 Mode: 1 symDur: 4000 snrDb 27 bitPerTone: 4500 rate: 54 throughput: 50
  07-02 17:46:17.263 D/WifiScoreCard( 1698): BSSID update SIGNAL_POLL ID: 942782235 SSID: "TAUFIKKOPIBATOH@WIFI.ID", BSSID: ac:4a:56:28:fe:ee, MAC: 
02:16:3f:eb:28:01, IP: /10.226.145.77, Security type: 0, Supplicant state: COMPLETED, Wi-Fi standard: legacy, RSSI: -53, Link speed: 48Mbps, Tx Link 
speed: 48Mbps, Max Supported Tx Link speed: 54Mbps, Calculated Tx : 0Mbps, Rx Link speed: 6Mbps, Max Supported Rx Link speed: 54Mbps, Calculated Rx : 
0Mbps, Frequency: 5765MHz, Net ID: 142, Metered hint: false, score: 60, isUsable: true, CarrierMerged: false, SubscriptionId: -1, IsPrimary: 1, Trusted: 
true, Restricted: false, Ephemeral: false, OEM paid: false, OEM private: false, OSU AP: false, FQDN: <none>, Provider friendly name: <none>, Requesting 
package name: <none>"TAUFIKKOPIBATOH@WIFI.ID"openMLO Information: , Is TID-To-Link negotiation supported by the AP: false, AP MLD Address: <none>, AP MLO 
Link Id: <none>, AP MLO Affiliated links: <none>, Vendor Data: <none>
  07-02 17:46:17.263 D/WifiScoreCard( 1698): txRate: 3 txSpeed: 48
  07-02 17:46:17.263 D/WifiScoreCard( 1698): network update SIGNAL_POLL "TAUFIKKOPIBATOH@WIFI.ID" ID: 42486102 RSSI -53 txSpeed -1
  07-02 17:46:17.264 V/WifiManager( 2380): TrafficStateCallbackProxy: onStateChanged state=0
  07-02 17:46:17.264 V/WifiManager( 2380): TrafficStateCallbackProxy: onStateChanged state=0
  07-02 17:46:17.264 D/WifiClientModeImpl[24001351:wlan0]( 1698):  ClientModeImpl$L2ConnectedState screen=on 131 0 "TAUFIKKOPIBATOH@WIFI.ID" 
ac:4a:56:28:fe:ee rssi=-53 f=5765 sc=60 link=48 tx=2.8, 0.0, 0.0 rx=1.8 bcn=0 [on:0 tx:0 rx:0 period:3015] from screen [on:0 period:19455777] score=60
  07-02 17:46:17.285 I/eara_io@boost( 1347): [eara_io_boost] eara_io_boost 0 , ta 0
  07-02 17:46:17.295 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.039798,0.000050, totalTime 0.039848 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:46:17.887 I/eara_io@boost( 1347): [eara_io_boost] eara_io_boost 0 , ta 0
  07-02 17:46:17.915 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000000,0.039726,0.000061, totalTime 0.039787 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:46:17.955 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.039171,0.000064, totalTime 0.039235 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:46:17.987 I/eara_io@boost( 1347): [eara_io_boost] eara_io_boost 0 , ta 0
  07-02 17:46:17.991 W/libc    (14808): Access denied finding property "persist.vendor.debug.gpud.init"
  07-02 17:46:17.991 I/GrallocExtra(14808): gralloc_extra_query:is_SW3D 0
> 07-02 17:46:17.992 D/BLASTBufferQueue(14808): [SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity]#1](f:0,a:1) acquireNextBufferLocked 
size=1080x2436 mFrameNumber=1 applyTransaction=true mTimestamp=162759125121008(auto) mPendingTransactions.size=0 graphicBufferId=63599875719182 transform=0
  07-02 17:46:17.992 D/BLASTBufferQueue(14808): MS: debug.sf.msleep=0, bufferCount=2, ratio=0.900000
  07-02 17:46:17.992 W/libc    (14808): Access denied finding property "vendor.mbrain.enabled"
  07-02 17:46:17.992 D/erbete.customer(14808): MBrain is disabled
  07-02 17:46:17.992 D/erbete.customer(14808): initMbrain failed
  07-02 17:46:17.995 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000000,0.039295,0.000036, totalTime 0.039331 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:46:18.003 I/Choreographer(14808): Skipped 65 frames!  The application may be doing too much work on its main thread.
  07-02 17:46:18.013 I/BufferQueueProducer( 1012): [VDS-studio.screen.sharing:0 SINK](this:0xb40000725f6b6a38,id:-1,api:1,p:1012,c:1012) queueBuffer: 
fps=3.16 dur=1580.66 max=717.44 min=16.71
  07-02 17:46:18.014 I/hwcomposer(  935): [HWCDisplay] [Display_0 (type:1)] fps:4.268477,dur:1405.65,max:717.56,min:16.90  
  07-02 17:46:18.071 I/FPSGO   ( 1080): fpsgo_boost_sched_idle_prefer:1
  07-02 17:46:18.071 I/mtkpower_client( 1080): perf_lock_acq, hdl:0, dur:0, num:2, tid:1080
  07-02 17:46:18.072 I/mtkpower_client( 1080): ret_hdl:55997
  07-02 17:46:18.073 I/FPSGO   ( 1080): perfLockAcq hdl:55997
  07-02 17:46:18.073 I/FPSGO   ( 1080): fpsgo_boost_sched_rate_ns:0
  07-02 17:46:18.073 I/mtkpower_client( 1080): perf_lock_acq, hdl:0, dur:0, num:12, tid:1080
  07-02 17:46:18.074 I/mtkpower_client( 1080): ret_hdl:55998
  07-02 17:46:18.074 I/FPSGO   ( 1080): perfLockAcq hdl:55998
  07-02 17:46:18.074 I/libPowerHal(  970): cmdSetting - unknown cmd:1438500, scmd:(null) ,param_1:0
  07-02 17:46:18.074 I/libPowerHal(  970): cmdSetting - unknown cmd:1438800, scmd:(null) ,param_1:0
  07-02 17:46:18.075 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.039711,0.000045, totalTime 0.039756 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:46:18.087 I/eara_io@boost( 1347): [eara_io_boost] eara_io_boost 0 , ta 0
  07-02 17:46:18.149 D/nativeloader(14808): Configuring clns-11 for other apk 
/data/app/~~rlDflszzkoZP8d8Z6wQ9uA==/com.google.android.gms-WQxSJrZS9GfZhXRT9-sjXA==/base.apk. target_sdk_version=37, uses_libraries=, library_path=/data/a
pp/~~rlDflszzkoZP8d8Z6wQ9uA==/com.google.android.gms-WQxSJrZS9GfZhXRT9-sjXA==/lib/arm64:/data/app/~~rlDflszzkoZP8d8Z6wQ9uA==/com.google.android.gms-WQxSJrZ
S9GfZhXRT9-sjXA==/base.apk!/lib/arm64-v8a, permitted_path=/data:/mnt/expand:/data/user/0/com.google.android.gms
  07-02 17:46:18.151 D/TranClassInfo(14808): instance successfully. com.transsion.hubcore.database.sqlite.TranSQLiteDatabaseImpl@31a92d7 from 
com.transsion.hubcore.database.sqlite.ITranSQLiteDatabase
  07-02 17:46:18.152 D/TranClassInfo(14808): instance successfully. com.transsion.hubcore.spdopts.others.implement.TranSQLiteDatabaseComponentImpl@45837c4 
from com.transsion.hubcore.spdcomponent.ITranSQLiteDatabaseComponent
  07-02 17:46:18.164 D/WindowManager( 1698): updateSystemBarAttributes appearance:24, win appearance:8, opaqueAppearance:0, win:Window{ac87882 u0 
com.erbete.customer/com.erbete.customer.MainActivity}, appearanceRegions=[AppearanceRegion{LIGHT_STATUS_BARS bounds=[0,0][1080,2436]}]
  07-02 17:46:18.166 I/StatusBarModePerDisplayRepository( 2380): isInFullscreenMode:false com.erbete.customer
  07-02 17:46:18.173 I/erbete.customer(14808): hiddenapi: Accessing hidden method Ldalvik/system/VMStack;->getStackClass2()Ljava/lang/Class; 
(runtime_flags=0, domain=core-platform, api=unsupported) from Lhjmw; (domain=app, TargetSdkVersion=36) using reflection: allowed
> 07-02 17:46:18.184 D/BLASTBufferQueue(14808): [VRI[MainActivity]#0](f:0,a:1) acquireNextBufferLocked size=1080x2436 mFrameNumber=1 applyTransaction=true 
mTimestamp=162759318123393(auto) mPendingTransactions.size=0 graphicBufferId=63599875719189 transform=0
  07-02 17:46:18.187 D/WindowManager( 1698): System monitor finishDrawingWindow w: Window{ac87882 u0 
com.erbete.customer/com.erbete.customer.MainActivity}; mDrawState = DRAW_PENDING
  07-02 17:46:18.187 I/eara_io@boost( 1347): [eara_io_boost] eara_io_boost 0 , ta 0
  07-02 17:46:18.191 V/ActivityTaskManager( 1698): Schedule remove starting ActivityRecord{eeb78dc u0 com.erbete.customer/.MainActivity t48212} 
startingWindow=Window{d952b0b u0 Splash Screen com.erbete.customer} animate=true Callers=com.android.server.wm.ActivityRecord.removeStartingWindow:3469 
com.android.server.wm.ActivityRecord.onFirstWindowDrawn:7830 com.android.server.wm.WindowState.performShowLocked:4877 
com.android.server.wm.WindowStateAnimator.commitFinishDrawingLocked:289 com.android.server.wm.DisplayContent.lambda$new$8:1081 
> 07-02 17:46:18.192 I/BufferQueueDebug( 1012): [Surface(name=ac87882 com.erbete.customer/com.erbete.customer.MainActivity)/@0x9b5e30 - animation-leash of 
starting_reveal#19935](this:0xb40000731f620ab8,id:-1,api:0,p:-1,c:-1) BufferQueue core=(1012:/system/bin/surfaceflinger)
  07-02 17:46:18.196 I/SmartPanelService( 4503): onWindowsDrawn pkgName: com.erbete.customer, className: com.erbete.customer.MainActivity launchState=1 
windowsDrawnDelayMs =4664
  07-02 17:46:18.197 D/uas-service( 1219): set scene=0x80000001 success
> 07-02 17:46:18.205 I/_T_AppBehavior( 1698): APP_START_OCCURRED (pid:14808, packageName:com.erbete.customer, transitionType:7, 
launchedActivityName:com.erbete.customer.MainActivity, callerPackage:com.android.shell, currentTransitionDelayMs:116, startingWindowDelayMs:107, 
bindApplicationDelayMs:103, windowsDrawnDelayMs:4664,compilationReason:1, compilationFilter:12 )
  07-02 17:46:18.206 D/View    ( 2380): [Warning] assignParent to null: this = android.widget.FrameLayout{7036476 G.E...... ......ID 0,0-1080,2436}
  07-02 17:46:18.207 E/GoogleApiManager(14808): Failed to get service from broker. 
  07-02 17:46:18.207 E/GoogleApiManager(14808): java.lang.SecurityException: Unknown calling package name 'com.google.android.gms'.
  07-02 17:46:18.207 E/GoogleApiManager(14808): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3251)
  07-02 17:46:18.207 E/GoogleApiManager(14808): 	at android.os.Parcel.createException(Parcel.java:3235)
  07-02 17:46:18.207 E/GoogleApiManager(14808): 	at android.os.Parcel.readException(Parcel.java:3218)
  07-02 17:46:18.207 E/GoogleApiManager(14808): 	at android.os.Parcel.readException(Parcel.java:3160)
  07-02 17:46:18.207 E/GoogleApiManager(14808): 	at bkqb.a(:com.google.android.gms@262334035@26.23.34 (260400-933906539):36)
  07-02 17:46:18.207 E/GoogleApiManager(14808): 	at bknx.y(:com.google.android.gms@262334035@26.23.34 (260400-933906539):143)
  07-02 17:46:18.207 E/GoogleApiManager(14808): 	at bjty.run(:com.google.android.gms@262334035@26.23.34 (260400-933906539):42)
  07-02 17:46:18.207 E/GoogleApiManager(14808): 	at android.os.Handler.handleCallback(Handler.java:959)
  07-02 17:46:18.207 E/GoogleApiManager(14808): 	at android.os.Handler.dispatchMessage(Handler.java:100)
  07-02 17:46:18.207 E/GoogleApiManager(14808): 	at dcus.mF(:com.google.android.gms@262334035@26.23.34 (260400-933906539):1)
  07-02 17:46:18.207 E/GoogleApiManager(14808): 	at dcus.dispatchMessage(:com.google.android.gms@262334035@26.23.34 (260400-933906539):5)
  07-02 17:46:18.207 E/GoogleApiManager(14808): 	at android.os.Looper.loopOnce(Looper.java:311)
  07-02 17:46:18.207 E/GoogleApiManager(14808): 	at android.os.Looper.loop(Looper.java:408)
  07-02 17:46:18.207 E/GoogleApiManager(14808): 	at android.os.HandlerThread.run(HandlerThread.java:85)
  07-02 17:46:18.208 I/SmartPanelRepository( 4503): hasLoadData true  data size = 12
  07-02 17:46:18.208 W/GoogleApiManager(14808): Not showing notification since connectionResult is not user-facing: 
ConnectionResult{statusCode=DEVELOPER_ERROR, resolution=null, message=null, clientMethodKey=null}
  07-02 17:46:18.209 D/SceneController( 4503): checkCanShow canShow: true  changed false 
  07-02 17:46:18.212 W/FlagStore(14808): Caused by: bjpk: 17: API: Phenotype.API is not available on this device. Connection failed with: 
ConnectionResult{statusCode=DEVELOPER_ERROR, resolution=null, message=null, clientMethodKey=null}
  07-02 17:46:18.212 W/FlagStore(14808): 	at bknj.a(:com.google.android.gms@262334035@26.23.34 (260400-933906539):15)
  07-02 17:46:18.212 W/FlagStore(14808): 	at bjri.a(:com.google.android.gms@262334035@26.23.34 (260400-933906539):1)
  07-02 17:46:18.212 W/FlagStore(14808): 	at bjrf.e(:com.google.android.gms@262334035@26.23.34 (260400-933906539):5)
  07-02 17:46:18.212 W/FlagStore(14808): 	... 12 more
  07-02 17:46:18.215 I/WindowManager( 1698):   isAnimating=false  okToAnimate=true  win=Window{d952b0b u0 Splash Screen com.erbete.customer}
> 07-02 17:46:18.216 I/BufferQueueDebug( 1012): [Surface(name=d952b0b Splash Screen com.erbete.customer)/@0x780093a - animation-leash of 
window_animation#19936](this:0xb40000731f623848,id:-1,api:0,p:-1,c:-1) BufferQueue core=(1012:/system/bin/surfaceflinger)
  07-02 17:46:18.220 I/TranSuccCrashMgr( 1698): Post key event: type=0, event=wm_activity_launch_time0,com.erbete.customer/.MainActivity,4664, ext=null
  07-02 17:46:18.221 I/ActivityTaskManager( 1698): Displayed com.erbete.customer/.MainActivity for user 0: +4s664ms
  07-02 17:46:18.221 D/WindowManager( 1698): updateSystemBarAttributes appearance:8, win appearance:8, opaqueAppearance:0, win:Window{ac87882 u0 
com.erbete.customer/com.erbete.customer.MainActivity}, appearanceRegions=[AppearanceRegion{LIGHT_STATUS_BARS bounds=[0,0][1080,2436]}]
  07-02 17:46:18.221 I/StatusBarModePerDisplayRepository( 2380): isInFullscreenMode:false com.erbete.customer
  07-02 17:46:18.222 W/TranPerformanceAfterSaleHooker( 1698): su=={"par":{"dte":"2026-07-02 17:46:18:221", "qg":"com.erbete.customer",  
"act":"com.erbete.customer.MainActivity", "time":4664}}
  07-02 17:46:18.222 D/uas-service( 1219): thread(pid=1835) ux_exact_android.anim.lf is uxtag 0x100420 ref 0x1
  07-02 17:46:18.224 I/mtkpower_client( 1698): perf_cus_lock_hint hint:101, dur:150, pid:1698
  07-02 17:46:18.224 D/AppFlingMode(  970): [CheckAppFlingHint] 101 com.erbete.customer -1
  07-02 17:46:18.225 D/nativeloader(14808): Load 
/data/app/~~rlDflszzkoZP8d8Z6wQ9uA==/com.google.android.gms-WQxSJrZS9GfZhXRT9-sjXA==/base.apk!/lib/arm64-v8a/libconscrypt_gmscore_jni.so using class 
loader ns clns-11 (caller=/data/app/~~rlDflszzkoZP8d8Z6wQ9uA==/com.google.android.gms-WQxSJrZS9GfZhXRT9-sjXA==/base.apk): ok
  07-02 17:46:18.225 V/NativeCrypto(14808): Registering com/google/android/gms/org/conscrypt/NativeCrypto's 337 native methods...
  07-02 17:46:18.226 I/mtkpower_client( 1698): perf_cus_lock_hint, ret_hdl:56000
  07-02 17:46:18.226 I/PowerHalMgrImpl( 1698): hdl:56000, pid:1698 
  07-02 17:46:18.226 I/DisplayDeviceRepository( 1698): Display device changed: DisplayDeviceInfo{"Layar Bawaan": uniqueId="local:0", 1080 x 2436, modeId 
2, renderFrameRate 60.000004, defaultModeId 1, userPreferredModeId -1, supportedModes [{id=1, width=1080, height=2436, fps=120.00001, vsync=120.00001, 
synthetic=false, alternativeRefreshRates=[60.0], supportedHdrTypes=[]}, {id=2, width=1080, height=2436, fps=60.0, vsync=60.0, synthetic=false, 
alternativeRefreshRates=[120.00001], supportedHdrTypes=[]}], colorMode 0, supportedColorModes [0, 7, 9], hdrCapabilities 
HdrCapabilities{mSupportedHdrTypes=[], mMaxLuminance=500.0, mMaxAverageLuminance=500.0, mMinLuminance=0.0}, allmSupported false, gameContentTypeSupported 
false, density 480, 392.839 x 392.828 dpi, appVsyncOff 2400001, presDeadline 28600000, cutout DisplayCutout{insets=Rect(0, 108 - 0, 0) 
waterfall=Insets{left=0, top=0, right=0, bottom=0} boundingRect={Bounds=[Rect(0, 0 - 0, 0), Rect(468, 0 - 612, 108), Rect(0, 0 - 0, 0), Rect(0, 0 - 0, 
0)]} cutoutPathParserInfo={CutoutPathParserInfo{displayWidth=1080 displayHeight=2436 physicalDisplayWidth=1080 physicalDisplayHeight=2436 density={3.0} 
cutoutSpec={M -24,0 L -24,36 L 24,36 L 24,0 Z @dp} rotation={0} scale={1.0} physicalPixelDisplaySizeRatio={1.0}}} sideOverrides={}}, touch INTERNAL, 
rotation 0, type INTERNAL, address {port=0}, deviceProductInfo null, state ON, committedState ON, frameRateOverride , brightnessMinimum 0.0, 
brightnessMaximum 1.0, brightnessDefault 0.2, hdrSdrRatio NaN, FLAG_ALLOWED_TO_BE_DEFAULT_DISPLAY, FLAG_ROTATES_WITH_CONTENT, FLAG_SECURE, 
FLAG_SUPPORTS_PROTECTED_BUFFERS, FLAG_TRUSTED, installOrientation 0, displayShape DisplayShape{ spec=596679847 displayWidth=1080 displayHeight=2436 
physicalPixelDisplaySizeRatio=1.0 rotation=0 offsetX=0 offsetY=0 scale=1.0}}
  07-02 17:46:18.227 I/libPowerHal(  970): [setGPUFreq] MTKPOWER_HINT_LAUNCHER_ANIMA user set gpu freq min:0, max:-1
  07-02 17:46:18.227 I/libPowerHal(  970): MTKPOWER_HINT_LAUNCHER_ANIMA: set gpu opp level max: 0
  07-02 17:46:18.227 I/libPowerHal(  970): [setGPUFreq] Soft min/max = (0, 0); Hard min/max = (44, 0)
  07-02 17:46:18.227 I/libPowerHal(  970): [setGPUFreq] final min/max = (0, 0)
  07-02 17:46:18.227 I/libPowerHal(  970): MTKPOWER_HINT_LAUNCHER_ANIMA: set gpu opp level: 0
  07-02 17:46:18.228 I/libPowerHal(  970): MTKPOWER_HINT_LAUNCHER_ANIMA: set gpu opp level max: 0
  07-02 17:46:18.228 I/libPowerHal(  970): [setClusterHardFreq] MTKPOWER_HINT_LAUNCHER_ANIMA: hard userlimit set cpu freq: -1 -1 -1 -1
  07-02 17:46:18.228 I/libPowerHal(  970): [thermal ux] update cluster0 to freqToSet:2000000 maxToSet:2000000
  07-02 17:46:18.229 I/libPowerHal(  970): [thermal ux] update cluster1 to freqToSet:2200000 maxToSet:2200000
  07-02 17:46:18.229 I/libPowerHal(  970): [setClusterFreq] MTKPOWER_HINT_LAUNCHER_ANIMA: sysfs_freq set cpu freq: 2000000 -1 2200000 -1 
  07-02 17:46:18.230 I/Griffin/DeviceState( 1698): virtualDisplayPackageName :{com.android.shell=2000}
> 07-02 17:46:18.231 D/BLASTBufferQueue( 2380): [VRI[customer]#529](f:0,a:1) destructor()
> 07-02 17:46:18.231 D/BufferQueueConsumer( 2380): [VRI[customer]#529(BLAST Consumer)529](id:94c0000021f,api:0,p:-1,c:2380) disconnect
  07-02 17:46:18.233 W/WindowOnBackDispatcher( 2380): sendCancelIfRunning: isInProgress=false 
callback=android.view.ViewRootImpl$$ExternalSyntheticLambda12@5e92f60
  07-02 17:46:18.235 I/WindowManager( 1698):   onAnimationFinished on win=Window{ac87882 u0 com.erbete.customer/com.erbete.customer.MainActivity}
  07-02 17:46:18.236 W/InputManager-JNI( 1698): Input channel object 'd952b0b Splash Screen com.erbete.customer (client)' was disposed without first being 
removed with the input manager!
  07-02 17:46:18.237 D/CoreBackPreview( 1698): Window{d952b0b u0 Splash Screen com.erbete.customer EXITING}: Setting back callback null
  07-02 17:46:18.239 W/hwcomposer(  935): [DRMDEV] paramIsSame(), id 4392, w 1080/1080, h 2436/2436, pitch 1088/1088, format 0x2/0x1, secure 0/0  
> 07-02 17:46:18.242 I/PowerHalWrapper( 1698): amsBoostNotify pid:2371,activity:com.android.launcher3.uioverrides.QuickstepLauncher, 
package:com.transsion.XOSLauncher, mProcessCreatePackcom.erbete.customer 
  07-02 17:46:18.242 I/PowerHalWrapper( 1698): state: 0 
  07-02 17:46:18.242 I/mtkpower_client( 1698): [PowerHal_Wrap_notifyAppState] 
com.transsion.XOSLauncher/com.android.launcher3.uioverrides.QuickstepLauncher pid=2371 activityId:4253868 state:0
  07-02 17:46:18.242 I/mtkpower_client( 1080): perf_lock_rel, hdl:55999, tid:1080
  07-02 17:46:18.242 I/mtkpower_client( 1698): [Legacy][PowerHal_Wrap_notifyAppState] 
com.transsion.XOSLauncher/com.android.launcher3.uioverrides.QuickstepLauncher pid=2371 state:4253868
  07-02 17:46:18.243 I/libPowerHal(  970): [perfNotifyAppState] pack:com.transsion.XOSLauncher, act:com.android.launcher3.uioverrides.QuickstepLauncher, 
state:0, pid:2371, uid:10196, fps:-1
  07-02 17:46:18.243 I/libPowerHal(  970): [PD] fpsgo update cmd:1408300 param:20
  07-02 17:46:18.243 I/PowerHalWrapper( 1698): amsBoostNotify AMS_BOOST_PROCESS_CREATE_BOOST:true 
  07-02 17:46:18.244 D/MagellanHandle( 1698): updateRefreshRateForSceneVsyncs what = 23
  07-02 17:46:18.245 I/ScenesManager( 4503): put createTaskId com.erbete.customer48212
  07-02 17:46:18.245 I/SmartPanelRepository( 4503): hasLoadData true  data size = 12
  07-02 17:46:18.247 I/BaseDepthController( 2371): setSurface:
  07-02 17:46:18.247 I/BaseDepthController( 2371): 	mWaitingOnSurfaceValidity: false
  07-02 17:46:18.247 I/BaseDepthController( 2371): 	mSurface: null
  07-02 17:46:18.248 W/TrWorkSpace( 2371): setAlpha: 1.0
  07-02 17:46:18.248 I/TrFolderCore( 2371): folderToState changed:[Normal] ====> Normal, false,false
  07-02 17:46:18.248 I/TrGaussianBlurStateCont( 2371): setState toState: Normal, currentState =Normal, currentStableState = Normal, currentBlurState = 
DESKTOP
  07-02 17:46:18.249 D/SceneController( 4503): checkCanShow canShow: true  changed false 
  07-02 17:46:18.249 D/os.permission.PermissionInfo( 1698): checkPermission 10196:android.permission.WRITE_SECURE_SETTINGS:true
  07-02 17:46:18.249 I/os.permission( 1698): Grant permission: android.permission.WRITE_SECURE_SETTINGS to uid: 10196
  07-02 17:46:18.249 V/SettingsProvider( 1698): name : launcher_static_window_anim appId : 10196
  07-02 17:46:18.284 I/ImeTracker( 1698): com.erbete.customer:542d194f: onRequestHide at ORIGIN_SERVER reason HIDE_UNSPECIFIED_WINDOW fromUser false
  07-02 17:46:18.284 I/ImeTracker( 1698): com.erbete.customer:542d194f: onCancelled at PHASE_SERVER_SHOULD_HIDE
  07-02 17:46:18.285 D/TranWindowManagerServiceImpl( 1698): hookIMEVisibleChanged(), show:false
  07-02 17:46:18.285 I/TranMultiWindowManagerComponentImpl( 1698): hookInputMethodShown inputShown: false, connected:false, unbd:false
  07-02 17:46:18.285 I/TranSCSourceConnectManagerImpl( 1698): hookInputMethodShown inputShown: false
  07-02 17:46:18.285 D/TranSecureKeyboardManagerImpl( 1698): hookInputShowFromIMMS inputShow= false , mVisible = false , mNeedShow = false
> 07-02 17:46:18.285 I/input_debug( 1698): package: com.erbete.customer mNeedShowSafeInput: false inputType: 0 methodMap: true isKeyguardShowing: false 
enable: 0 isSplitScreen: false
  07-02 17:46:18.288 I/eara_io@boost( 1347): [eara_io_boost] eara_io_boost 0 , ta 0
  07-02 17:46:18.288 D/InputEventReceiver( 6406): Input log is disabled in InputEventReceiver.
  07-02 17:46:18.297 V/TranSecureKeyboardManagerImpl( 1698): getServiceLocked mInputMethodService = null this: 
com.transsion.interaction.securekeyboard.TranSKSecureKeyboardManagerImpl@11bbed6
  07-02 17:46:18.297 E/ApplicationHelper( 1698): Fail to get PackageManager
  07-02 17:46:18.297 E/ApplicationHelper( 1698): Fail to get PackageManager
  07-02 17:46:18.297 E/ApplicationHelper( 1698): Fail to get PackageManager
  07-02 17:46:18.298 E/ApplicationHelper( 1698): Fail to get PackageManager
> 07-02 17:46:18.299 I/BufferQueueDebug( 1012): [Surface(name=73f9581 InputMethod)/@0x8c09814 - animation-leash of 
insets_animation#19937](this:0xb40000731f62c0f8,id:-1,api:0,p:-1,c:-1) BufferQueue core=(1012:/system/bin/surfaceflinger)
  07-02 17:46:18.299 E/ApplicationHelper( 1698): Fail to get PackageManager
  07-02 17:46:18.301 E/ApplicationHelper( 1698): Fail to get PackageManager
  07-02 17:46:18.301 E/ApplicationHelper( 1698): Fail to get PackageManager
  07-02 17:46:18.301 E/ApplicationHelper( 1698): Fail to get PackageManager
  07-02 17:46:18.301 E/ApplicationHelper( 1698): Fail to get PackageManager
> 07-02 17:46:18.306 I/BufferQueueProducer( 1012): [NavigationBar0#93](this:0xb40000731f567928,id:-1,api:0,p:-1,c:1012) queueBuffer: fps=14.24 dur=3581.07 
max=2748.58 min=16.34
  07-02 17:46:18.307 W/JobScheduler.Concurrency( 1698): Had fewer than 16 in existence
> 07-02 17:46:18.307 I/SurfaceFlinger( 1012): onHandleDestroyed: name=com.transsion.XOSLauncher/com.android.launcher3.uioverrides.QuickstepLauncher#19910, 
layerId=19910, parentId=0
> 07-02 17:46:18.307 I/SurfaceFlinger( 1012): onHandleDestroyed: name=ZeroScreen#19917, layerId=19917, parentId=0
  07-02 17:46:18.308 W/JobScheduler.Concurrency( 1698): Had fewer than 16 in existence
  07-02 17:46:18.309 W/JobScheduler.Concurrency( 1698): Had fewer than 16 in existence
  07-02 17:46:18.309 W/JobScheduler.Concurrency( 1698): Had fewer than 16 in existence
  07-02 17:46:18.310 W/JobScheduler.Concurrency( 1698): Had fewer than 16 in existence
  07-02 17:46:18.310 W/JobScheduler.Concurrency( 1698): Had fewer than 16 in existence
  07-02 17:46:18.311 I/ProviderInstaller(14808): Installed default security provider GmsCore_OpenSSL
  07-02 17:46:18.314 I/tranpm/ServicePolicy( 1698): isBlockHsB1 true
  07-02 17:46:18.314 I/tranpm/ServicePolicy( 1698): limitBindServiceLocked by hs&job - cold: callingPackage = android, targetPkg = com.turkcell.bip
  07-02 17:46:18.315 W/ActivityManager( 1698): Unbind failed: could not find connection for android.app.LoadedApk$ServiceDispatcher$InnerConnection@241353
  07-02 17:46:18.315 E/JobScheduler.Concurrency( 1698): Error executing JobStatus{ecd60ea androidx.work.systemjobscheduler:u0a393/291 
@androidx.work.systemjobscheduler@com.turkcell.bip/androidx.work.impl.background.systemjob.SystemJobService u=0 s=10393 TIME=-1h38m17s84ms:none NET READY}
  07-02 17:46:18.318 I/tranpm/ServicePolicy( 1698): isBlockHsB1 true
  07-02 17:46:18.318 I/tranpm/ServicePolicy( 1698): limitBindServiceLocked by hs&job - cold: callingPackage = android, targetPkg = 
com.google.android.apps.nbu.files
  07-02 17:46:18.319 W/ActivityManager( 1698): Unbind failed: could not find connection for android.app.LoadedApk$ServiceDispatcher$InnerConnection@6cdf189
  07-02 17:46:18.320 E/JobScheduler.Concurrency( 1698): Error executing JobStatus{7e348f0 androidx.work.systemjobscheduler:u0a101/32974 
@androidx.work.systemjobscheduler@com.google.android.apps.nbu.files/androidx.work.impl.background.systemjob.SystemJobService u=0 s=10101 
URIS=[android.app.job.JobInfo$TriggerContentUri@26b5948d] READY}
  07-02 17:46:18.320 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000000,0.024678,0.000051, totalTime 0.024729 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:46:18.323 I/tranpm/ServicePolicy( 1698): isBlockHsB1 true
  07-02 17:46:18.323 I/tranpm/ServicePolicy( 1698): limitBindServiceLocked by hs&job - cold: callingPackage = android, targetPkg = 
com.google.android.apps.nbu.files
  07-02 17:46:18.324 W/ActivityManager( 1698): Unbind failed: could not find connection for android.app.LoadedApk$ServiceDispatcher$InnerConnection@c5291af
> 07-02 17:46:18.324 I/BufferQueueDebug( 1012): [ZeroScreen#19917](this:0xb40000731f5b4758,id:-1,api:0,p:-1,c:1012) onDestructor()
  07-02 17:46:18.325 E/JobScheduler.Concurrency( 1698): Error executing JobStatus{141498e androidx.work.systemjobscheduler:u0a101/32971 
@androidx.work.systemjobscheduler@com.google.android.apps.nbu.files/androidx.work.impl.background.systemjob.SystemJobService u=0 s=10101 
TIME=-2h12m7s316ms:none READY}
> 07-02 17:46:18.325 I/BufferQueueDebug( 1012): 
[com.transsion.XOSLauncher/com.android.launcher3.uioverrides.QuickstepLauncher#19910](this:0xb40000731f5ed698,id:-1,api:0,p:-1,c:1012) onDestructor()
> 07-02 17:46:18.325 I/SurfaceFlinger( 1012): onHandleDestroyed: name=Surface(name=73f9581 InputMethod)/@0x8c09814 - animation-leash of 
insets_animation#19915, layerId=19915, parentId=0
  07-02 17:46:18.335 I/tranpm/ServicePolicy( 1698): isBlockHsB1 true
  07-02 17:46:18.335 I/tranpm/ServicePolicy( 1698): limitBindServiceLocked by hs&job - cold: callingPackage = android, targetPkg = 
com.google.android.calendar
  07-02 17:46:18.336 W/ActivityManager( 1698): Unbind failed: could not find connection for android.app.LoadedApk$ServiceDispatcher$InnerConnection@c1b1d45
  07-02 17:46:18.337 E/JobScheduler.Concurrency( 1698): Error executing JobStatus{8d89b44 androidx.work.systemjobscheduler:u0a121/6203 
@androidx.work.systemjobscheduler@com.google.android.calendar/androidx.work.impl.background.systemjob.SystemJobService u=0 s=10121 TIME=-1h37m6s307ms:none 
READY}
> 07-02 17:46:18.341 I/BufferQueueDebug( 1012): [Surface(name=73f9581 InputMethod)/@0x8c09814 - animation-leash of 
insets_animation#19915](this:0xb40000731f5c58b8,id:-1,api:0,p:-1,c:1012) onDestructor()
  07-02 17:46:18.341 I/tranpm/ServicePolicy( 1698): isBlockHsB1 true
  07-02 17:46:18.350 I/tranpm/ServicePolicy( 1698): limitBindServiceLocked by hs&job - cold: callingPackage = android, targetPkg = 
com.google.android.calendar
  07-02 17:46:18.352 D/C2MtkComponentStore(  937): setDmaBufUsage: usage 5, flags 0, heapName mtk_mm for decoder.
  07-02 17:46:18.353 W/ActivityManager( 1698): Unbind failed: could not find connection for android.app.LoadedApk$ServiceDispatcher$InnerConnection@a4099cb
  07-02 17:46:18.354 E/JobScheduler.Concurrency( 1698): Error executing JobStatus{107496e androidx.work.systemjobscheduler:u0a121/6204 
@androidx.work.systemjobscheduler@com.google.android.calendar/androidx.work.impl.background.systemjob.SystemJobService u=0 s=10121 TIME=-1h37m6s220ms:none 
READY}
  07-02 17:46:18.358 I/tranpm/ServicePolicy( 1698): isBlockHsB1 true
  07-02 17:46:18.359 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.022781,0.000038, totalTime 0.022821 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:46:18.360 D/TranWifiTputMonitor( 1698): WIFI: TX: 0 RX: 0 TOTAL = 0
  07-02 17:46:18.360 D/TranWifiTputMonitor( 1698): High Tput: false, TOTAL TPUT: 0
  07-02 17:46:18.361 I/tranpm/ServicePolicy( 1698): limitBindServiceLocked by hs&job - cold: callingPackage = android, targetPkg = com.talpa.hibrowser
  07-02 17:46:18.364 I/mtkpower@impl(  970): [setMode] type:5, enabled:0
  07-02 17:46:18.365 I/libPowerHal(  970): [unsetGPUFreq] current min:0, max:0; scn_gpu_min:0, scn_gpu_max:-1; scn_gpu_min(HL):-1, scn_gpu_max(HL):-1
  07-02 17:46:18.366 I/libPowerHal(  970): [setGPUFreq] Soft min/max = (0, 0); Hard min/max = (44, 0)
  07-02 17:46:18.366 I/libPowerHal(  970): [setGPUFreq] final min/max = (0, 0)
  07-02 17:46:18.366 I/libPowerHal(  970): LAUNCH: set gpu opp level: 0
  07-02 17:46:18.366 I/libPowerHal(  970): LAUNCH: set gpu opp level max: 0
  07-02 17:46:18.366 I/libPowerHal(  970): [PD] LAUNCH update cmd:1408700, param:100
  07-02 17:46:18.372 W/ActivityManager( 1698): Unbind failed: could not find connection for android.app.LoadedApk$ServiceDispatcher$InnerConnection@d5548c1
  07-02 17:46:18.372 E/JobScheduler.Concurrency( 1698): Error executing JobStatus{48d18d6 androidx.work.systemjobscheduler:u0a206/1543 
@androidx.work.systemjobscheduler@com.talpa.hibrowser/androidx.work.impl.background.systemjob.SystemJobService u=0 s=10206 TIME=-2h50m58s347ms:none NET 
READY}
  07-02 17:46:18.374 D/ActivityTaskManager_Recents( 1698): 	excludeFromRecents=true, taskIndex = 3, isOnHomeDisplay: false, isAnimatingByRecents: false
  07-02 17:46:18.413 D/WindowManager( 1698): setParent old=ActivityRecord{eeb78dc u0 com.erbete.customer/.MainActivity t48212},new=null,this 
window=Window{d952b0b u0 Splash Screen com.erbete.customer},callers=com.android.server.wm.WindowContainer.removeChild:862 
com.android.server.wm.ActivityRecord.removeChild:5351 com.android.server.wm.ActivityRecord.removeChild:482 
com.android.server.wm.WindowContainer.removeImmediately:932 com.android.server.wm.WindowState.removeImmediately:2565 
com.android.server.wm.WindowState.destroySurface:3728 
  07-02 17:46:18.417 D/WindowManager( 1698): removeImmediately mActivityRecord: ActivityRecord{eeb78dc u0 com.erbete.customer/.MainActivity t48212} type: 3
  07-02 17:46:18.417 D/ActivityTaskManager( 1698): hookRecordSnapshot start pkgName: com.erbete.customer componentName: com.erbete.customer/.MainActivity 
mPkgName: null mRecordParams: null
  07-02 17:46:18.417 D/WindowManager( 1698): postWindowRemoveCleanupLocked: token:ActivityRecord{eeb78dc u0 com.erbete.customer/.MainActivity t48212} 
win:Window{d952b0b u0 Splash Screen com.erbete.customer} token.isEmpty:false token.mPersistOnEmpty:true
  07-02 17:46:18.421 I/WindowManager( 1698):   onAnimationFinished on win=Window{d952b0b u0 Splash Screen com.erbete.customer}
  07-02 17:46:18.437 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.041605,0.000020, totalTime 0.041626 > logTimeout 
0.022000 TIMEOUT!!
> 07-02 17:46:18.442 I/SurfaceFlinger( 1012): onHandleDestroyed: name=Splash Screen com.erbete.customer#19922, layerId=19922, parentId=0
> 07-02 17:46:18.443 I/SurfaceFlinger( 1012): onHandleDestroyed: name=Surface(name=d952b0b Splash Screen com.erbete.customer)/@0x780093a - animation-leash 
of window_animation#19936, layerId=19936, parentId=0
> 07-02 17:46:18.443 I/SurfaceFlinger( 1012): onHandleDestroyed: name=d952b0b Splash Screen com.erbete.customer#19921, layerId=19921, parentId=0
  07-02 17:46:18.447 I/DisplayDeviceRepository( 1698): Display device changed: DisplayDeviceInfo{"Layar Bawaan": uniqueId="local:0", 1080 x 2436, modeId 
2, renderFrameRate 60.000004, defaultModeId 1, userPreferredModeId -1, supportedModes [{id=1, width=1080, height=2436, fps=120.00001, vsync=120.00001, 
synthetic=false, alternativeRefreshRates=[60.0], supportedHdrTypes=[]}, {id=2, width=1080, height=2436, fps=60.0, vsync=60.0, synthetic=false, 
alternativeRefreshRates=[120.00001], supportedHdrTypes=[]}], colorMode 0, supportedColorModes [0, 7, 9], hdrCapabilities 
HdrCapabilities{mSupportedHdrTypes=[], mMaxLuminance=500.0, mMaxAverageLuminance=500.0, mMinLuminance=0.0}, allmSupported false, gameContentTypeSupported 
false, density 480, 392.839 x 392.828 dpi, appVsyncOff 2400001, presDeadline 28600000, cutout DisplayCutout{insets=Rect(0, 108 - 0, 0) 
waterfall=Insets{left=0, top=0, right=0, bottom=0} boundingRect={Bounds=[Rect(0, 0 - 0, 0), Rect(468, 0 - 612, 108), Rect(0, 0 - 0, 0), Rect(0, 0 - 0, 
0)]} cutoutPathParserInfo={CutoutPathParserInfo{displayWidth=1080 displayHeight=2436 physicalDisplayWidth=1080 physicalDisplayHeight=2436 density={3.0} 
cutoutSpec={M -24,0 L -24,36 L 24,36 L 24,0 Z @dp} rotation={0} scale={1.0} physicalPixelDisplaySizeRatio={1.0}}} sideOverrides={}}, touch INTERNAL, 
rotation 0, type INTERNAL, address {port=0}, deviceProductInfo null, state ON, committedState ON, frameRateOverride {uid=1000 frameRateHz=60.0} {uid=10159 
frameRateHz=60.0} {uid=10509 frameRateHz=60.0} , brightnessMinimum 0.0, brightnessMaximum 1.0, brightnessDefault 0.2, hdrSdrRatio NaN, 
FLAG_ALLOWED_TO_BE_DEFAULT_DISPLAY, FLAG_ROTATES_WITH_CONTENT, FLAG_SECURE, FLAG_SUPPORTS_PROTECTED_BUFFERS, FLAG_TRUSTED, installOrientation 0, 
displayShape DisplayShape{ spec=596679847 displayWidth=1080 displayHeight=2436 physicalPixelDisplaySizeRatio=1.0 rotation=0 offsetX=0 offsetY=0 scale=1.0}}
  07-02 17:46:18.452 I/Griffin/DeviceState( 1698): virtualDisplayPackageName :{com.android.shell=2000}
  07-02 17:46:18.446 D/TranSignalStrengthComponentImpl( 2620): [LTE] dbm: -80
  07-02 17:46:18.453 D/TranSignalStrengthComponentImpl( 2620): [LTE] dbm: -80
  07-02 17:46:18.455 D/TranSignalStrengthComponentImpl( 1698): [LTE] dbm: -80
  07-02 17:46:18.456 D/CallbackProxy( 6515): [onSignalStrengthsChanged]
> 07-02 17:46:18.458 I/SurfaceFlinger( 1012): onHandleDestroyed: name=Surface(name=174f644 NavigationBar0)/@0x46ac9dc - animation-leash of 
insets_animation#19924, layerId=19924, parentId=0
> 07-02 17:46:18.459 I/BufferQueueDebug( 1012): [Splash Screen com.erbete.customer#19922](this:0xb40000731f5e7b78,id:-1,api:0,p:-1,c:1012) onDestructor()
> 07-02 17:46:18.459 I/BufferQueueDebug( 1012): [Surface(name=d952b0b Splash Screen com.erbete.customer)/@0x780093a - animation-leash of 
window_animation#19936](this:0xb40000731f623848,id:-1,api:0,p:-1,c:1012) onDestructor()
> 07-02 17:46:18.459 I/BufferQueueDebug( 1012): [d952b0b Splash Screen com.erbete.customer#19921](this:0xb40000731f65c788,id:-1,api:0,p:-1,c:1012) 
onDestructor()
> 07-02 17:46:18.459 I/SurfaceFlinger( 1012): onHandleDestroyed: name=Surface(name=f48663c StatusBar)/@0x8eec4a5 - animation-leash of 
insets_animation#19925, layerId=19925, parentId=0
  07-02 17:46:18.463 I/TranTele/TranPhoneInterfaceManager( 2620): TTC - onSignalStrengthsChanged
  07-02 17:46:18.471 D/TranPhoneSwitcher( 2620): getNetworkType: 4G
  07-02 17:46:18.472 I/TranPhoneSwitcher( 2620): mOthersign:4subid :1
> 07-02 17:46:18.473 I/BufferQueueDebug( 1012): [Surface(name=174f644 NavigationBar0)/@0x46ac9dc - animation-leash of 
insets_animation#19924](this:0xb40000731f609e38,id:-1,api:0,p:-1,c:1012) onDestructor()
> 07-02 17:46:18.473 I/BufferQueueDebug( 1012): [Surface(name=f48663c StatusBar)/@0x8eec4a5 - animation-leash of 
insets_animation#19925](this:0xb40000731f66ab58,id:-1,api:0,p:-1,c:1012) onDestructor()
  07-02 17:46:18.489 I/eara_io@boost( 1347): [eara_io_boost] eara_io_boost 0 , ta 0
  07-02 17:46:18.505 D/ConnectivityService( 1698): requestNetwork for uid/pid:10509/14808 activeRequest: null callbackRequest: 21143 [NetworkRequest [ 
REQUEST id=21144, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED&NOT_BANDWIDTH_CONSTRAINED Uid: 10509 RequestorUid: 10509 RequestorPkg: 
com.erbete.customer UnderlyingNetworks: Null] ]] callback flags: 0 order: 2147483647 isUidTracked: false declaredMethods: AVAIL|BLK
  07-02 17:46:18.513 D/WifiNetworkFactory( 1698): got request NetworkRequest [ REQUEST id=21144, [ Capabilities: 
INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED&NOT_BANDWIDTH_CONSTRAINED Uid: 10509 RequestorUid: 10509 RequestorPkg: com.erbete.customer 
UnderlyingNetworks: Null] ]
  07-02 17:46:18.513 V/WifiNetworkFactory( 1698): Accepted network request NetworkRequest [ REQUEST id=21144, [ Capabilities: 
INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED&NOT_BANDWIDTH_CONSTRAINED Uid: 10509 RequestorUid: 10509 RequestorPkg: com.erbete.customer 
UnderlyingNetworks: Null] ]
  07-02 17:46:18.513 D/UntrustedWifiNetworkFactory( 1698): got request NetworkRequest [ REQUEST id=21144, [ Capabilities: 
INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED&NOT_BANDWIDTH_CONSTRAINED Uid: 10509 RequestorUid: 10509 RequestorPkg: com.erbete.customer 
UnderlyingNetworks: Null] ]
  07-02 17:46:18.513 D/OemPaidWifiNetworkFactory( 1698): got request NetworkRequest [ REQUEST id=21144, [ Capabilities: 
INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED&NOT_BANDWIDTH_CONSTRAINED Uid: 10509 RequestorUid: 10509 RequestorPkg: com.erbete.customer 
UnderlyingNetworks: Null] ]
  07-02 17:46:18.513 D/MultiInternetWifiNetworkFactory( 1698): got request NetworkRequest [ REQUEST id=21144, [ Capabilities: 
INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED&NOT_BANDWIDTH_CONSTRAINED Uid: 10509 RequestorUid: 10509 RequestorPkg: com.erbete.customer 
UnderlyingNetworks: Null] ]
  07-02 17:46:18.515 D/ConnectivityService( 1698): NetReassign [21144 : null ΓåÆ 133] [c 1] [a 2] [i 6]
  07-02 17:46:18.516 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.039924,0.000046, totalTime 0.039970 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:46:18.589 I/eara_io@boost( 1347): [eara_io_boost] eara_io_boost 0 , ta 0
  07-02 17:46:18.595 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.039636,0.000045, totalTime 0.039682 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:46:18.626 D/FdLeakLice(14808): FdLeakCheck app is not systemapp!!!
  07-02 17:46:18.635 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000000,0.039645,0.000041, totalTime 0.039686 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:46:18.640 D/WindowManager( 1698): System monitor finishDrawingWindow w: Window{a70fb55 u0 
com.transsion.livewallpaper.view.TranWallpaperService}; mDrawState = HAS_DRAWN
  07-02 17:46:18.685 I/erbete.customer(14808): hiddenapi: Accessing hidden field Ljava/net/Socket;->impl:Ljava/net/SocketImpl; (runtime_flags=0, 
domain=core-platform, api=unsupported) from Lcom/google/android/gms/org/conscrypt/Platform; (domain=app, TargetSdkVersion=36) using reflection: allowed
  07-02 17:46:18.689 I/eara_io@boost( 1347): [eara_io_boost] eara_io_boost 0 , ta 0
  07-02 17:46:18.758 D/TranAppBrightnessChangeController( 1698): [handleMessage] msg type: 1002 isCloudEnabled: true
  07-02 17:46:18.789 I/eara_io@boost( 1347): [eara_io_boost] eara_io_boost 0 , ta 0
  07-02 17:46:18.823 I/erbete.customer(14808): hiddenapi: Accessing hidden method Ljava/security/spec/ECParameterSpec;->setCurveName(Ljava/lang/String;)V 
(runtime_flags=0, domain=core-platform, api=unsupported) from Lcom/google/android/gms/org/conscrypt/Platform; (domain=app, TargetSdkVersion=36) using 
reflection: allowed
  07-02 17:46:18.836 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.039789,0.000063, totalTime 0.039852 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:46:19.260 I/libPowerHal(  970): [PD] fpsgo update cmd:1438600 param:1000
  07-02 17:46:19.260 I/libPowerHal(  970): [PD] fpsgo update cmd:1438700 param:1000
  07-02 17:46:19.291 I/eara_io@boost( 1347): [eara_io_boost] eara_io_boost 0 , ta 0
  07-02 17:46:19.335 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.039542,0.000044, totalTime 0.039587 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:46:19.338 I/ion.XOSLauncher( 2371): Explicit concurrent mark compact GC freed 4873KB AllocSpace bytes, 12(472KB) LOS objects, 49% free, 
16MB/32MB, paused 437us,1.468ms total 84.487ms
  07-02 17:46:19.339 I/BpBinder( 2371): onLastStrongRef automatically unlinking death recipients: 
> 07-02 17:46:19.339 I/SurfaceFlinger( 1012): onHandleDestroyed: name=Surface(name=Task=1)/@0xc828ec5_transition-leash#19884, layerId=19884, parentId=0
> 07-02 17:46:19.339 I/SurfaceFlinger( 1012): onHandleDestroyed: name=Surface(name=Task=48207)/@0xc75001a_transition-leash#19886, layerId=19886, parentId=0
> 07-02 17:46:19.339 I/SurfaceFlinger( 1012): onHandleDestroyed: name=Surface(name=WallpaperWindowToken{b14fd4c 
token=android.os.Binder@430597f})/@0x1f5274b_transition-leash#19887, layerId=19887, parentId=0
> 07-02 17:46:19.340 I/SurfaceFlinger( 1012): onHandleDestroyed: name=Transition Root: Task=48210#19895, layerId=19895, parentId=0
> 07-02 17:46:19.340 I/SurfaceFlinger( 1012): onHandleDestroyed: name=Surface(name=Task=48210)/@0xfa43696_transition-leash#19904, layerId=19904, parentId=0
> 07-02 17:46:19.340 I/SurfaceFlinger( 1012): onHandleDestroyed: name=Surface(name=Task=1)/@0xdf8b604_transition-leash#19905, layerId=19905, parentId=0
> 07-02 17:46:19.340 I/SurfaceFlinger( 1012): onHandleDestroyed: name=Surface(name=WallpaperWindowToken{b14fd4c 
token=android.os.Binder@430597f})/@0x2e52622_transition-leash#19906, layerId=19906, parentId=0
> 07-02 17:46:19.355 I/BufferQueueDebug( 1012): [Surface(name=WallpaperWindowToken{b14fd4c 
token=android.os.Binder@430597f})/@0x1f5274b_transition-leash#19887](this:0xb40000731f575cf8,id:-1,api:0,p:-1,c:1012) onDestructor()
> 07-02 17:46:19.355 I/BufferQueueDebug( 1012): [Transition Root: Task=48210#19895](this:0xb40000731f59ad48,id:-1,api:0,p:-1,c:1012) onDestructor()
> 07-02 17:46:19.355 I/BufferQueueDebug( 1012): 
[Surface(name=Task=48210)/@0xfa43696_transition-leash#19904](this:0xb40000731f5dc538,id:-1,api:0,p:-1,c:1012) onDestructor()
> 07-02 17:46:19.356 I/BufferQueueDebug( 1012): [Surface(name=WallpaperWindowToken{b14fd4c 
token=android.os.Binder@430597f})/@0x2e52622_transition-leash#19906](this:0xb40000731f656c68,id:-1,api:0,p:-1,c:1012) onDestructor()
> 07-02 17:46:19.356 I/BufferQueueDebug( 1012): 
[Surface(name=Task=48207)/@0xc75001a_transition-leash#19886](this:0xb40000731f670678,id:-1,api:0,p:-1,c:1012) onDestructor()
> 07-02 17:46:19.356 I/BufferQueueDebug( 1012): [Surface(name=Task=1)/@0xc828ec5_transition-leash#19884](this:0xb40000731f673408,id:-1,api:0,p:-1,c:1012) 
onDestructor()
> 07-02 17:46:19.356 I/BufferQueueDebug( 1012): [Surface(name=Task=1)/@0xdf8b604_transition-leash#19905](this:0xb40000731f6817d8,id:-1,api:0,p:-1,c:1012) 
onDestructor()
  07-02 17:46:19.364 I/BufferQueueProducer( 1012): [VDS-studio.screen.sharing:0 SINK](this:0xb40000725f6b6a38,id:-1,api:1,p:1012,c:1012) queueBuffer: 
fps=18.51 dur=1350.86 max=717.51 min=13.03
  07-02 17:46:19.364 I/hwcomposer(  935): [HWCDisplay] [Display_0 (type:1)] fps:19.988083,dur:1350.80,max:717.60,min:8.75  
  07-02 17:46:19.390 I/mtkpower_client( 1698): perf_lock_acq, hdl:55343, dur:3000, num:2, pid:1698, tid:2370
  07-02 17:46:19.391 I/mtkpower_client( 1698): ret_hdl:56003
  07-02 17:46:19.391 I/PowerHalMgrImpl( 1698): hdl:56003, pid:1698 
  07-02 17:46:19.391 I/mtkpower_client( 1698): perf_lock_rel, hdl:56003, tid:2370
  07-02 17:46:19.391 I/eara_io@boost( 1347): [eara_io_boost] eara_io_boost 0 , ta 0
  07-02 17:46:19.391 I/SbeHandle(  970): end_default_hold_time HindID : 21
  07-02 17:46:19.391 I/libPowerHal(  970): [disableScenarioByHintId] Disable HindID : 21
  07-02 17:46:19.391 I/libPowerHal(  970): [disableScenarioByHintId] Disable HindID : 57
  07-02 17:46:19.393 I/SbeHandle(  970): end_default_hold_time HindID : 21
  07-02 17:46:19.394 I/libPowerHal(  970): [disableScenarioByHintId] Disable HindID : 21
  07-02 17:46:19.394 I/libPowerHal(  970): [disableScenarioByHintId] Disable HindID : 57
  07-02 17:46:19.394 I/libPowerHal(  970): [PD] system_server update ONESHOT cmd:3410300 param:21
  07-02 17:46:19.395 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000000,0.037979,0.000045, totalTime 0.038025 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:46:19.438 W/native  ( 5782): W0000 00:00:1782989179.438746    5913 lag_detector.cc:58] Pipeline lagging by 1.317224685s. Continue processing 
samples.
  07-02 17:46:19.483 D/TranSignalStrengthComponentImpl( 2620): [LTE] dbm: -88
  07-02 17:46:19.483 D/TranSignalStrengthComponentImpl( 2620): [LTE] dbm: -88
  07-02 17:46:19.486 D/CallbackProxy( 6515): [onSignalStrengthsChanged]
  07-02 17:46:19.487 I/TranTele/TranPhoneInterfaceManager( 2620): TTC - onSignalStrengthsChanged
  07-02 17:46:20.296 I/eara_io@boost( 1347): [eara_io_boost] eara_io_boost 0 , ta 0
  07-02 17:46:20.299 I/NullBinder( 4458): NullBinder for android.net.action.RECOMMEND_NETWORKS triggering remote TransactionTooLargeException due to 
Service without Chimera impl, calling uid: 1000, calling pid: 0
  07-02 17:46:20.299 I/NearbyMediums( 4458): Wifi changed new SSID: "TAUFIKKOPIBATOH@WIFI.ID"
  07-02 17:46:20.300 W/.gms.persistent( 4458): Large reply transaction of 1056768 bytes, interface descriptor , code 1
  07-02 17:46:20.300 D/ConnectivityService( 1698): NetReassign [no changes] [c 0] [a 2] [i 2]
  07-02 17:46:20.300 I/NearbyMediums( 4458): WifiLanConnectivityInfo is not changed, skip notify.
> 07-02 17:46:20.320 I/BufferQueueProducer( 1012): [StatusBar#97](this:0xb40000731f578a88,id:-1,api:0,p:-1,c:1012) queueBuffer: fps=0.65 dur=3080.47 
max=3030.41 min=50.06
  07-02 17:46:20.353 D/TLinkBrush_DATA( 1698): [NetdEvent]onTcpSocketStatsEvent
  07-02 17:46:20.354 D/TLinkBrush_DATA( 1698): [NetdEvent]onTcpSocketStatsEvent sent = 0, return
  07-02 17:46:20.354 D/TLinkBrush_DATA( 1698): [NetdEvent]onTcpSocketStatsEvent
  07-02 17:46:20.355 D/TLinkBrush_DATA( 1698): [NetdEvent]onTcpSocketStatsEvent sent = 0, return
  07-02 17:46:20.355 D/TLinkBrush_DATA( 1698): [NetdEvent]onTcpSocketStatsEvent
  07-02 17:46:20.355 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.039772,0.000021, totalTime 0.039794 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:46:20.396 I/eara_io@boost( 1347): [eara_io_boost] eara_io_boost 0 , ta 0
  07-02 17:46:20.497 I/eara_io@boost( 1347): [eara_io_boost] eara_io_boost 0 , ta 0
  07-02 17:46:20.529 W/NetworkTypeHelper( 1698): Failed to call buildTemplateCarrierMetered, java.lang.reflect.InvocationTargetException
  07-02 17:46:20.529 D/NetworkStatusMonitor( 1698): getAllInterfaceNames network type is unknown
  07-02 17:46:20.529 W/NetworkTypeHelper( 1698): Failed to call buildTemplateCarrierMetered, java.lang.reflect.InvocationTargetException
  07-02 17:46:20.529 D/NetworkStatusMonitor( 1698): getAllInterfaceNames network type is unknown
  07-02 17:46:20.529 D/NetworkStatusMonitor( 1698): getAllInterfaceNames network type is mobile
  07-02 17:46:20.529 D/NetworkStatusMonitor( 1698): getAllInterfaceNames network type is wifi
  07-02 17:46:20.529 D/NetworkStatusMonitor( 1698): onNetworkTypeChanged wifi => wifi
  07-02 17:46:20.597 I/eara_io@boost( 1347): [eara_io_boost] eara_io_boost 0 , ta 0
  07-02 17:46:20.683 I/TranWifiSmartAssistantController( 1698): start current network monitor 
  07-02 17:46:20.684 I/WifiService( 1698): getConnectionInfo uid=1000
  07-02 17:46:20.685 V/WifiService( 1698): Clearing REDACT_FOR_LOCAL_MAC_ADDRESS for android(uid=1000)
  07-02 17:46:20.685 V/WifiService( 1698): Clearing REDACT_FOR_NETWORK_SETTINGS for android(uid=1000)
  07-02 17:46:20.686 I/TranWifiSmartAssistantController( 1698): mCurrentNetwork :133 SSID :"TAUFIKKOPIBATOH@WIFI.ID"
  07-02 17:46:20.688 I/WifiNetworkQuality( 1698): current rssi is sufficient
  07-02 17:46:20.688 I/TranWifiSmartAssistantController( 1698): mNoCandidateCount : -1
  07-02 17:46:20.688 I/TranWifiSmartAssistantController( 1698): ====>>rssi :-53
  07-02 17:46:20.697 I/eara_io@boost( 1347): [eara_io_boost] eara_io_boost 0 , ta 0
  07-02 17:46:20.715 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.039729,0.000035, totalTime 0.039764 > logTimeout 
0.022000 TIMEOUT!!
> 07-02 17:46:20.786 I/BufferQueueProducer( 1012): 
[SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity](BLAST)#19933](this:0xb40000731f5ba278,id:-1,api:0,p:-1,c:1012) queueBuffer: fps=1.08 
dur=2780.10 max=2529.03 min=65.63
  07-02 17:46:20.793 I/NearbySharing( 4458): Network state changed: NetworkState(isRestricted=false, isOnline=true, isCongested=false, isMetered=false, 
isWifiConnected=true)
  07-02 17:46:20.798 I/BufferQueueProducer( 1012): [VDS-studio.screen.sharing:0 SINK](this:0xb40000725f6b6a38,id:-1,api:1,p:1012,c:1012) queueBuffer: 
fps=1.39 dur=1434.47 max=967.27 min=467.20
  07-02 17:46:20.798 I/eara_io@boost( 1347): [eara_io_boost] eara_io_boost 0 , ta 0
  07-02 17:46:20.800 I/hwcomposer(  935): [HWCDisplay] [Display_0 (type:1)] fps:1.393288,dur:1435.45,max:967.66,min:467.79  
  07-02 17:46:20.824 D/ULogGuard( 1342): Monitoring: 15 threads, 0 requests, 0 time-bombs; 3 guards. ResetFlags = 0x7
  07-02 17:46:20.849 I/libPerfCtl(  970): xgfGetFPS pid:2371 fps:-1
  07-02 17:46:20.849 I/AppThermalMode(  970): [perfNotifyThermalState] hdl:0
  07-02 17:46:20.849 I/AppThermalMode(  970): [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: -1,fg->pid:14808
  07-02 17:46:20.849 I/AppThermalMode(  970): [perfNotifyThermalState] appThermalIdx -1:
  07-02 17:46:20.849 I/libPerfCtl(  970): xgfGetFPS pid:2380 fps:-1
  07-02 17:46:20.849 I/AppThermalMode(  970): [perfNotifyThermalState] hdl:0
  07-02 17:46:20.849 I/AppThermalMode(  970): [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: -1,fg->pid:14808
  07-02 17:46:20.849 I/AppThermalMode(  970): [perfNotifyThermalState] appThermalIdx -1:
  07-02 17:46:20.849 I/libPerfCtl(  970): xgfGetFPS pid:2536 fps:-1
  07-02 17:46:20.849 I/AppThermalMode(  970): [perfNotifyThermalState] hdl:0
  07-02 17:46:20.849 I/AppThermalMode(  970): [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: -1,fg->pid:14808
  07-02 17:46:20.849 I/AppThermalMode(  970): [perfNotifyThermalState] appThermalIdx -1:
  07-02 17:46:20.849 I/libPerfCtl(  970): xgfGetFPS pid:14808 fps:-1
  07-02 17:46:20.849 I/AppThermalMode(  970): [perfNotifyThermalState] hdl:0
  07-02 17:46:20.849 I/AppThermalMode(  970): [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: -1,fg->pid:14808
  07-02 17:46:21.850 I/AppThermalMode(  970): [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: -1,fg->pid:14808
  07-02 17:46:21.850 I/AppThermalMode(  970): [perfNotifyThermalState] appThermalIdx -1:
  07-02 17:46:21.850 I/libPerfCtl(  970): xgfGetFPS pid:14808 fps:-1
  07-02 17:46:21.850 I/AppThermalMode(  970): [perfNotifyThermalState] hdl:0
  07-02 17:46:21.850 I/AppThermalMode(  970): [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: -1,fg->pid:14808
  07-02 17:46:21.850 I/AppThermalMode(  970): [perfNotifyThermalState] appThermalIdx -1:
> 07-02 17:46:22.201 I/BufferQueueProducer( 1012): 
[SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity](BLAST)#19933](this:0xb40000731f5ba278,id:-1,api:0,p:-1,c:1012) queueBuffer: fps=0.71 
dur=1414.89 max=1414.89 min=1414.89
  07-02 17:46:22.211 I/StatusBarNetworkRateView( 2380): wifi is default. hide second network rate view. StatusBarNetworkRateView subId=2, 
isFirstSimCard=false, mLocation=QS_NEW NetworkRateState=NetworkRateState{visible=true, activeMobileDataSubId=2, totalRate=8.091, netWorkState=1, 
isAirplane=false, netRateStateBySettingGlobal=1, networkRate='8,09', networkRateUnit='KB/S'}
  07-02 17:46:22.214 I/BufferQueueProducer( 1012): [VDS-studio.screen.sharing:0 SINK](this:0xb40000725f6b6a38,id:-1,api:1,p:1012,c:1012) queueBuffer: 
fps=0.71 dur=1415.74 max=1415.74 min=1415.74
  07-02 17:46:22.216 I/hwcomposer(  935): [HWCDisplay] [Display_0 (type:1)] fps:0.706356,dur:1415.72,max:1415.72,min:1415.72  
  07-02 17:46:22.216 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.040005,0.000174, totalTime 0.040179 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:46:22.229 D/CoreBackPreview( 1698): Window{ac87882 u0 com.erbete.customer/com.erbete.customer.MainActivity}: Setting back callback 
OnBackInvokedCallbackInfo{mCallback=android.window.IOnBackInvokedCallback$Stub$Proxy@636d9ab, mPriority=0, mIsAnimationCallback=true}
> 07-02 17:46:22.251 I/BufferQueueProducer( 1012): [StatusBar#97](this:0xb40000731f578a88,id:-1,api:0,p:-1,c:1012) queueBuffer: fps=0.52 dur=1931.35 
max=1931.35 min=1931.35
  07-02 17:46:22.256 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.039481,0.000126, totalTime 0.039607 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:46:22.277 I/FPSGO   ( 1080): fpsgo_boost_sched_idle_prefer:1
  07-02 17:46:22.277 I/mtkpower_client( 1080): perf_lock_acq, hdl:0, dur:0, num:2, tid:1080
  07-02 17:46:22.278 I/mtkpower_client( 1080): ret_hdl:56004
  07-02 17:46:22.278 I/FPSGO   ( 1080): perfLockAcq hdl:56004
  07-02 17:46:22.278 I/FPSGO   ( 1080): fpsgo_boost_sched_rate_ns:0
  07-02 17:46:22.278 I/mtkpower_client( 1080): perf_lock_acq, hdl:0, dur:0, num:12, tid:1080
  07-02 17:46:22.278 I/mtkpower_client( 1080): ret_hdl:56005
  07-02 17:46:22.278 I/FPSGO   ( 1080): perfLockAcq hdl:56005
  07-02 17:46:22.279 I/libPowerHal(  970): cmdSetting - unknown cmd:1438500, scmd:(null) ,param_1:0
  07-02 17:46:22.279 I/libPowerHal(  970): cmdSetting - unknown cmd:1438800, scmd:(null) ,param_1:0
  07-02 17:46:22.295 D/WindowManager( 1698): updateSystemBarAttributes appearance:0, win appearance:0, opaqueAppearance:0, win:Window{ac87882 u0 
com.erbete.customer/com.erbete.customer.MainActivity}, appearanceRegions=[AppearanceRegion{ bounds=[0,0][1080,2436]}]
  07-02 17:46:22.295 I/StatusBarModePerDisplayRepository( 2380): isInFullscreenMode:false com.erbete.customer
  07-02 17:46:22.310 I/mtkpower_client( 1080): perf_lock_acq, hdl:0, dur:30000, num:2, tid:1080
  07-02 17:46:22.312 I/mtkpower_client( 1080): ret_hdl:56006
  07-02 17:46:22.312 I/mtkpower_client( 1080): perf_lock_rel, hdl:56006, tid:1080
  07-02 17:46:22.313 I/libPowerHal(  970): [PD] fpsgo update cmd:1408300 param:0
  07-02 17:46:22.335 D/BatteryMeterDrawable( 2380): drawBatteryFrame: color=ffffffff
  07-02 17:46:22.435 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.039588,0.000064, totalTime 0.039653 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:46:22.454 W/WindowOnBackDispatcher(14808): sendCancelIfRunning: isInProgress=false 
callback=androidx.navigationevent.OnBackInvokedInput$createOnBackAnimationCallback$1@b170ae5
  07-02 17:46:22.850 I/AppThermalMode(  970): [perfNotifyThermalState] appThermalIdx -1:
  07-02 17:46:22.850 I/libPowerHal(  970): [updateFPS] pid(14808) : -1 => 60
  07-02 17:46:22.851 I/libPowerHal(  970): [perfNotifyAppState] pack:com.erbete.customer, act:com.erbete.customer.MainActivity, state:5, pid:14808, 
uid:10509, fps:60
  07-02 17:46:22.851 I/UxUtility(  970): notifyForegroundApp pack:com.erbete.customer, uid:10509
  07-02 17:46:22.851 I/TouchUtility(  970): notifyAppState error = NULL
  07-02 17:46:22.855 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000000,0.039899,0.000057, totalTime 0.039957 > logTimeout 
0.022000 TIMEOUT!!
> 07-02 17:46:22.879 I/flutter (14808): SERVICE_LIST_DEBUG: raw sections count=17
> 07-02 17:46:22.879 I/flutter (14808): SERVICE_LIST_DEBUG: sectionList assigned count=17
> 07-02 17:46:22.879 I/flutter (14808): SERVICE_LIST_DEBUG_ITEM: id=6285dcf511651 name=Cosmetic type=delivery-service isActive=true
> 07-02 17:46:22.879 I/flutter (14808): SERVICE_LIST_DEBUG_ITEM: id=6285dd3281531 name=Fashion type=ecommerce-service isActive=true
> 07-02 17:46:22.879 I/flutter (14808): SERVICE_LIST_DEBUG_ITEM: id=6285dd7b50f32 name=Flowers type=delivery-service isActive=true
> 07-02 17:46:22.879 I/flutter (14808): SERVICE_LIST_DEBUG_ITEM: id=6285ddbfd9598 name=Restaurants type=delivery-service isActive=true
> 07-02 17:46:22.880 I/flutter (14808): SERVICE_LIST_DEBUG_ITEM: id=631852d1bc978 name=Cab Service type=cab-service isActive=true
> 07-02 17:46:22.880 I/flutter (14808): SERVICE_LIST_DEBUG_ITEM: id=6319dc53314ee name=Food Grocery type=delivery-service isActive=true
> 07-02 17:46:22.880 I/flutter (14808): SERVICE_LIST_DEBUG_ITEM: id=632309c9d549e name=Parcel Service type=parcel_delivery isActive=true
> 07-02 17:46:22.880 I/flutter (14808): SERVICE_LIST_DEBUG_ITEM: id=63368fb2beabb name=Rental Service type=rental-service isActive=true
> 07-02 17:46:22.880 I/flutter (14808): SERVICE_LIST_DEBUG_ITEM: id=yJTddzJUxP3cOU5DpJ10 name=Home/On Demand Service type=ondemand-service isActive=true
> 07-02 17:46:22.880 I/flutter (14808): SERVICE_LIST_DEBUG_ITEM: id=custom_laundry_service name=Laundry Service type=delivery-service isActive=true
> 07-02 17:46:22.880 I/flutter (14808): SERVICE_LIST_DEBUG_ITEM: id=custom_document_service name=Document Service type=parcel_delivery isActive=true
> 07-02 17:46:22.880 I/flutter (14808): SERVICE_LIST_DEBUG_ITEM: id=custom_hotel_homestay name=Hotel / Homestay type=rental-service isActive=true
> 07-02 17:46:22.880 I/flutter (14808): SERVICE_LIST_DEBUG_ITEM: id=custom_akap_ticket name=AKAP Ticket type=ecommerce-service isActive=true
> 07-02 17:46:22.880 I/flutter (14808): SERVICE_LIST_DEBUG_ITEM: id=custom_technician_service name=Technician Service type=ondemand-service isActive=true
> 07-02 17:46:22.880 I/flutter (14808): SERVICE_LIST_DEBUG_ITEM: id=custom_housemaid_art name=Housemaid / ART type=ondemand-service isActive=true
> 07-02 17:46:22.880 I/flutter (14808): SERVICE_LIST_DEBUG_ITEM: id=custom_motor_delivery name=Motor Delivery type=parcel_delivery isActive=true
> 07-02 17:46:22.880 I/flutter (14808): SERVICE_LIST_DEBUG_ITEM: id=custom_emergency_help name=Emergency Help type=ondemand-service isActive=true
  07-02 17:46:22.885 I/mtkpower_client( 1080): perf_lock_acq, hdl:0, dur:30000, num:2, tid:1080
  07-02 17:46:22.885 I/mtkpower_client( 1080): ret_hdl:56008
  07-02 17:46:22.889 I/mtkpower_client( 1080): perf_lock_rel, hdl:56008, tid:1080
  07-02 17:46:22.889 I/libPowerHal(  970): [PD] fpsgo update cmd:1408300 param:0
  07-02 17:46:22.890 D/TriggerService( 4219): trigger service is running
  07-02 17:46:22.953 D/BufferPoolAccessor2.0(11425): bufferpool2 0xb4000072a18c9748 : 66(139960 size) total buffers - 1(448 size) used buffers - 544/1765 
(recycle/alloc) - 1248/1764 (fetch/transfer)
  07-02 17:46:23.136 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.040112,0.000146, totalTime 0.040259 > logTimeout 
0.022000 TIMEOUT!!
> 07-02 17:46:23.217 I/BufferQueueProducer( 1012): 
[SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity](BLAST)#19933](this:0xb40000731f5ba278,id:-1,api:0,p:-1,c:1012) queueBuffer: fps=52.18 
dur=1015.67 max=82.96 min=16.00
  07-02 17:46:23.225 I/BufferQueueProducer( 1012): [VDS-studio.screen.sharing:0 SINK](this:0xb40000725f6b6a38,id:-1,api:1,p:1012,c:1012) queueBuffer: 
fps=54.37 dur=1011.53 max=47.98 min=10.75
  07-02 17:46:23.227 I/hwcomposer(  935): [HWCDisplay] [Display_0 (type:1)] fps:54.388374,dur:1011.25,max:47.54,min:10.47  
  07-02 17:46:23.233 V/Hiber/hiber( 1698): unfreeze from hiber: (4,-1,-1,-1,10257), rpcName: PKG, code: -1, reason:packet
  07-02 17:46:23.238 I/Hiber/stateManager( 1698): unfreeze uid: 10257 com.instagram.android pids:[16756]  reason:packet   cpninfo:TRANSACTION_-1 
costTime=5ms ,last freeze 25s ago
  07-02 17:46:23.238 I/Hiber/appStateMachine( 1698): uid=10257, pkg=com.instagram.android, transition from Frozen to Running, reason=packet
  07-02 17:46:23.238 I/Choreographer(16756): Skipped 1542 frames!  The application may be doing too much work on its main thread.
  07-02 17:46:23.239 I/Hiber/appStateMachine( 1698): uid:10257 exit FrozenState
  07-02 17:46:23.239 I/Hiber/proxyManager( 1698): up_service: 10257
  07-02 17:46:23.239 I/Hiber/proxyManager( 1698): un_job: 10257
  07-02 17:46:23.239 D/Hiber/JobExtImpl( 1698): un_job=JobStatus{c439f4a androidx.work.systemjobscheduler:u0a257/224386 
@androidx.work.systemjobscheduler@com.instagram.android/androidx.work.impl.background.systemjob.SystemJobService u=0 s=10257 TIME=+14m29s334ms:none NET 
satisfied:0x13600000 unsatisfied:0x80000000}for uid=10257
  07-02 17:46:23.239 D/Hiber/proxyWakeLock( 1698): remove uid: 10257 wiht all pids from wakelockUidInfo list
  07-02 17:46:23.240 D/Hiber/JobExtImpl( 1698): un_job=JobStatus{139ea0d androidx.work.systemjobscheduler:u0a257/224365 
@androidx.work.systemjobscheduler@com.instagram.android/androidx.work.impl.background.systemjob.SystemJobService u=0 s=10257 TIME=+23h29m26s291ms:none NET 
satisfied:0x13600000 unsatisfied:0x80000000}for uid=10257
  07-02 17:46:23.240 D/Hiber/JobExtImpl( 1698): un_job=JobStatus{8801d1 androidx.work.systemjobscheduler:u0a257/224341 
@androidx.work.systemjobscheduler@com.instagram.android/androidx.work.impl.background.systemjob.SystemJobService u=0 s=10257 TIME=+23h29m24s676ms:none NET 
satisfied:0x13600000 unsatisfied:0x80000000}for uid=10257
  07-02 17:46:23.241 D/Hiber/JobExtImpl( 1698): unProxyJobs leave, uid=10257 discard=false
  07-02 17:46:23.241 D/Hiber/alarmManagerServiceExtImpl( 1698): unproxyAlarms leave, uid=10257, packageName=null
  07-02 17:46:23.241 I/Hiber/proxyManager( 1698): up_sensor: uid=10257, pkgName=com.instagram.android
  07-02 17:46:23.242 D/TranSignalStrengthComponentImpl(16756): [LTE] dbm: -88
  07-02 17:46:23.245 D/TranSignalStrengthComponentImpl(16756): [LTE] dbm: -88
  07-02 17:46:23.246 D/TranSignalStrengthComponentImpl(16756): [LTE] dbm: -88
  07-02 17:46:23.247 D/TranSignalStrengthComponentImpl(16756): [LTE] dbm: -88
  07-02 17:46:24.136 E/ApplicationHelper( 1698): Fail to get PackageManager
  07-02 17:46:24.260 E/ApplicationHelper( 1698): Fail to get PackageManager
  07-02 17:46:24.263 E/ApplicationHelper( 1698): Fail to get PackageManager
  07-02 17:46:24.293 I/mtkpower_client( 1080): perf_lock_rel, hdl:56010, tid:1080
  07-02 17:46:24.294 I/libPowerHal(  970): [PD] fpsgo update cmd:1408300 param:0
  07-02 17:46:24.295 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.039732,0.000079, totalTime 0.039813 > logTimeout 
0.022000 TIMEOUT!!
> 07-02 17:46:24.299 I/BufferQueueProducer( 1012): 
[SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity](BLAST)#19933](this:0xb40000731f5ba278,id:-1,api:0,p:-1,c:1012) queueBuffer: fps=22.18 
dur=1081.83 max=449.68 min=16.16
  07-02 17:46:24.306 I/BufferQueueProducer( 1012): [VDS-studio.screen.sharing:0 SINK](this:0xb40000725f6b6a38,id:-1,api:1,p:1012,c:1012) queueBuffer: 
fps=22.22 dur=1080.23 max=452.25 min=12.98
  07-02 17:46:24.307 I/hwcomposer(  935): [HWCDisplay] [Display_0 (type:1)] fps:22.225471,dur:1079.84,max:452.11,min:12.84  
  07-02 17:46:24.326 I/mtkpower_client( 1080): perf_lock_acq, hdl:0, dur:30000, num:2, tid:1080
  07-02 17:46:24.327 I/mtkpower_client( 1080): ret_hdl:56011
  07-02 17:46:24.335 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000000,0.039611,0.000060, totalTime 0.039671 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:46:24.362 D/TranWifiTputMonitor( 1698): WIFI: TX: 4 RX: 4 TOTAL = 8
  07-02 17:46:24.362 D/TranWifiTputMonitor( 1698): High Tput: false, TOTAL TPUT: 8
  07-02 17:46:24.561 I/mtkpower_client( 1080): perf_lock_rel, hdl:56011, tid:1080
  07-02 17:46:24.562 I/libPowerHal(  970): [PD] fpsgo update cmd:1408300 param:0
  07-02 17:46:24.607 D/TranSignalStrengthComponentImpl( 2620): [LTE] dbm: -88
  07-02 17:46:24.607 D/TranSignalStrengthComponentImpl( 2620): [LTE] dbm: -88
  07-02 17:46:24.613 D/CallbackProxy( 6515): [onSignalStrengthsChanged]
  07-02 17:46:24.613 D/TranSignalStrengthComponentImpl(30413): [LTE] dbm: -88
  07-02 17:46:24.614 I/TranTele/TranPhoneInterfaceManager( 2620): TTC - onSignalStrengthsChanged
  07-02 17:46:24.614 D/TranSignalStrengthComponentImpl( 1698): [LTE] dbm: -88
  07-02 17:46:24.616 D/TranSignalStrengthComponentImpl(23237): [LTE] dbm: -88
  07-02 17:46:24.616 D/TranSignalStrengthComponentImpl(16756): [LTE] dbm: -88
  07-02 17:46:24.619 I/mtkpower_client( 1080): perf_lock_acq, hdl:0, dur:30000, num:2, tid:1080
  07-02 17:46:24.620 I/mtkpower_client( 1080): ret_hdl:56012
  07-02 17:46:24.622 D/TranSignalStrengthComponentImpl(30413): [LTE] dbm: -88
  07-02 17:46:25.284 I/mtkpower_client( 1080): perf_lock_acq, hdl:0, dur:30000, num:2, tid:1080
  07-02 17:46:25.285 I/mtkpower_client( 1080): ret_hdl:56013
  07-02 17:46:25.296 I/mtkpower_client( 1080): perf_lock_rel, hdl:56013, tid:1080
  07-02 17:46:25.298 I/libPowerHal(  970): [PD] fpsgo update cmd:1408300 param:0
  07-02 17:46:25.311 I/BufferQueueProducer( 1012): [VDS-studio.screen.sharing:0 SINK](this:0xb40000725f6b6a38,id:-1,api:1,p:1012,c:1012) queueBuffer: 
fps=40.79 dur=1005.17 max=269.11 min=13.51
  07-02 17:46:25.312 I/hwcomposer(  935): [HWCDisplay] [Display_0 (type:1)] fps:40.782146,dur:1005.34,max:269.48,min:13.65  
> 07-02 17:46:25.315 I/BufferQueueProducer( 1012): 
[SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity](BLAST)#19933](this:0xb40000731f5ba278,id:-1,api:0,p:-1,c:1012) queueBuffer: fps=41.34 
dur=1016.00 max=266.71 min=16.09
  07-02 17:46:25.438 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.022272,0.000045, totalTime 0.022318 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:46:25.535 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.039918,0.000071, totalTime 0.039989 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:46:25.564 D/BufferPoolAccessor2.0(11425): bufferpool2 0xb4000072a18c9748 : 66(116258 size) total buffers - 1(812 size) used buffers - 559/1870 
(recycle/alloc) - 1339/1869 (fetch/transfer)
  07-02 17:46:25.583 I/mtkpower_client( 1080): perf_lock_acq, hdl:0, dur:30000, num:2, tid:1080
  07-02 17:46:25.584 I/mtkpower_client( 1080): ret_hdl:56014
  07-02 17:46:25.584 I/mtkpower_client( 1080): perf_lock_rel, hdl:56014, tid:1080
  07-02 17:46:25.587 I/libPowerHal(  970): [PD] fpsgo update cmd:1408300 param:0
  07-02 17:46:25.617 I/mtkpower_client( 1080): perf_lock_acq, hdl:0, dur:30000, num:2, tid:1080
  07-02 17:46:25.618 I/mtkpower_client( 1080): ret_hdl:56015
  07-02 17:46:25.654 I/mtkpower_client( 1080): perf_lock_rel, hdl:56015, tid:1080
  07-02 17:46:25.655 I/libPowerHal(  970): [PD] fpsgo update cmd:1408300 param:0
  07-02 17:46:25.687 I/mtkpower_client( 1080): perf_lock_acq, hdl:0, dur:30000, num:2, tid:1080
  07-02 17:46:25.689 I/mtkpower_client( 1080): ret_hdl:56016
  07-02 17:46:25.852 I/libPerfCtl(  970): xgfGetFPS pid:2380 fps:-1
  07-02 17:46:25.852 I/AppThermalMode(  970): [perfNotifyThermalState] hdl:0
  07-02 17:46:25.852 I/AppThermalMode(  970): [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: 60,fg->pid:14808
  07-02 17:46:25.852 I/AppThermalMode(  970): [perfNotifyThermalState] appThermalIdx -1:
  07-02 17:46:25.852 I/libPerfCtl(  970): xgfGetFPS pid:14808 fps:53
  07-02 17:46:25.852 I/AppThermalMode(  970): [perfNotifyThermalState] hdl:0
  07-02 17:46:25.852 I/AppThermalMode(  970): [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: 60,fg->pid:14808
  07-02 17:46:26.853 I/libPowerHal(  970): [perfNotifyAppState] pack:com.erbete.customer, act:com.erbete.customer.MainActivity, state:5, pid:14808, 
uid:10509, fps:-1
  07-02 17:46:26.854 I/UxUtility(  970): notifyForegroundApp pack:com.erbete.customer, uid:10509
  07-02 17:46:26.854 I/TouchUtility(  970): notifyAppState error = NULL
  07-02 17:46:26.854 I/keystore2(  669): system/security/keystore2/watchdog/src/lib.rs:319 - Watchdog thread idle -> terminating. Have a great day.
  07-02 17:46:26.891 D/TriggerService( 4219): trigger service is running
  07-02 17:46:27.213 I/StatusBarNetworkRateView( 2380): wifi is default. hide second network rate view. StatusBarNetworkRateView subId=2, 
isFirstSimCard=false, mLocation=QS_NEW NetworkRateState=NetworkRateState{visible=true, activeMobileDataSubId=2, totalRate=17.527, netWorkState=1, 
isAirplane=false, netRateStateBySettingGlobal=1, networkRate='17,5', networkRateUnit='KB/S'}
> 07-02 17:46:27.263 I/BufferQueueProducer( 1012): [StatusBar#97](this:0xb40000731f578a88,id:-1,api:0,p:-1,c:1012) queueBuffer: fps=2.00 dur=5011.59 
max=4795.37 min=16.10
  07-02 17:46:27.278 I/BufferQueueProducer( 1012): [VDS-studio.screen.sharing:0 SINK](this:0xb40000725f6b6a38,id:-1,api:1,p:1012,c:1012) queueBuffer: 
fps=9.66 dur=1967.25 max=1601.46 min=13.12
  07-02 17:46:27.280 I/hwcomposer(  935): [HWCDisplay] [Display_0 (type:1)] fps:9.655740,dur:1967.74,max:1601.91,min:13.36  
  07-02 17:46:27.366 D/TranWifiTputMonitor( 1698): WIFI: TX: 5 RX: 19 TOTAL = 24
  07-02 17:46:27.367 D/TranWifiTputMonitor( 1698): High Tput: false, TOTAL TPUT: 24
  07-02 17:46:27.516 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.039758,0.000116, totalTime 0.039875 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:46:27.651 D/BoundBrokerSvc( 4458): onUnbind: Intent { act=com.google.android.gms.presencemanager.service.START dat=chimera-action:/... 
cmp=com.google.android.gms/.chimera.PersistentApiService }
  07-02 17:46:27.655 D/BoundBrokerSvc( 4458): onUnbind: Intent { act=com.google.android.gms.presencemanager.service.INTERNAL_IDENTITY 
dat=chimera-action:/... cmp=com.google.android.gms/.chimera.PersistentApiService }
  07-02 17:46:27.852 I/libPerfCtl(  970): xgfGetFPS pid:2380 fps:-1
  07-02 17:46:27.852 I/AppThermalMode(  970): [perfNotifyThermalState] hdl:0
  07-02 17:46:27.852 I/AppThermalMode(  970): [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: -1,fg->pid:14808
  07-02 17:46:27.852 I/AppThermalMode(  970): [perfNotifyThermalState] appThermalIdx -1:
  07-02 17:46:27.853 I/libPerfCtl(  970): xgfGetFPS pid:14808 fps:-1
  07-02 17:46:27.853 I/AppThermalMode(  970): [perfNotifyThermalState] hdl:0
  07-02 17:46:27.853 I/AppThermalMode(  970): [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: -1,fg->pid:14808
  07-02 17:46:27.853 I/AppThermalMode(  970): [perfNotifyThermalState] appThermalIdx -1:
  07-02 17:46:28.198 E/GoogleApiManager(14808): Failed to get service from broker. 
  07-02 17:46:28.198 E/GoogleApiManager(14808): java.lang.SecurityException: Unknown calling package name 'com.google.android.gms'.
  07-02 17:46:28.198 E/GoogleApiManager(14808): 	at android.os.Parcel.createExceptionOrNull(Parcel.java:3251)
  07-02 17:46:28.198 E/GoogleApiManager(14808): 	at android.os.Parcel.createException(Parcel.java:3235)
  07-02 17:46:28.198 E/GoogleApiManager(14808): 	at android.os.Parcel.readException(Parcel.java:3218)
  07-02 17:46:31.854 I/AppThermalMode(  970): [perfNotifyThermalState] appThermalIdx -1:
  07-02 17:46:31.854 I/libPerfCtl(  970): xgfGetFPS pid:14808 fps:-1
  07-02 17:46:31.854 I/AppThermalMode(  970): [perfNotifyThermalState] hdl:0
  07-02 17:46:31.854 I/AppThermalMode(  970): [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: -1,fg->pid:14808
  07-02 17:46:31.854 I/AppThermalMode(  970): [perfNotifyThermalState] appThermalIdx -1:
  07-02 17:46:32.219 I/StatusBarNetworkRateView( 2380): wifi is default. hide second network rate view. StatusBarNetworkRateView subId=2, 
isFirstSimCard=false, mLocation=QS_NEW NetworkRateState=NetworkRateState{visible=true, activeMobileDataSubId=2, totalRate=0.0, netWorkState=1, 
isAirplane=false, netRateStateBySettingGlobal=1, networkRate='0,00', networkRateUnit='KB/S'}
> 07-02 17:46:32.258 I/BufferQueueProducer( 1012): [StatusBar#97](this:0xb40000731f578a88,id:-1,api:0,p:-1,c:1012) queueBuffer: fps=0.20 dur=4995.67 
max=4995.67 min=4995.67
  07-02 17:46:32.274 I/BufferQueueProducer( 1012): [VDS-studio.screen.sharing:0 SINK](this:0xb40000725f6b6a38,id:-1,api:1,p:1012,c:1012) queueBuffer: 
fps=0.20 dur=4996.15 max=4996.15 min=4996.15
  07-02 17:46:32.276 I/hwcomposer(  935): [HWCDisplay] [Display_0 (type:1)] fps:0.200154,dur:4996.16,max:4996.16,min:4996.16  
  07-02 17:46:32.288 D/BufferPoolAccessor2.0(11425): bufferpool2 0xb4000072a18c9748 : 50(55075 size) total buffers - 1(866 size) used buffers - 569/1895 
(recycle/alloc) - 1354/1894 (fetch/transfer)
  07-02 17:46:32.374 D/WifiClientModeImpl[24001351:wlan0]( 1698): updateLinkLayerStatsRssiSpeedFrequencyCapabilities rssi=-53 TxLinkspeed=54 freq=5765 
RxLinkSpeed=54
  07-02 17:46:32.375 D/WifiClientModeImpl[24001351:wlan0]( 1698): reported txKbps 12000 rxKbps 60000
  07-02 17:46:32.377 D/WifiDataStall( 1698): tx tput in kbps: 50000
  07-02 17:46:32.377 D/WifiDataStall( 1698): rx tput in kbps: 50000
  07-02 17:46:32.378 V/WifiConfigManager( 1698): Updating scan detail cache freq=5765 BSSID=ac:4a:56:28:fe:ee RSSI=-53 for "TAUFIKKOPIBATOH@WIFI.ID"NONE
  07-02 17:46:32.379 D/WifiThroughputPredictor( 1698):  utilization (LLS) 15 isBluetoothConnected: false final utilization: 15
  07-02 17:46:32.379 D/WifiThroughputPredictor( 1698):  BW: 0 RSSI: -53 Nss: 1 Mode: 1 symDur: 4000 snrDb 27 bitPerTone: 4500 rate: 54 throughput: 50
  07-02 17:46:32.380 D/WifiThroughputPredictor( 1698):  utilization (LLS) 15 isBluetoothConnected: false final utilization: 15
  07-02 17:46:32.380 D/WifiThroughputPredictor( 1698):  BW: 0 RSSI: -53 Nss: 1 Mode: 1 symDur: 4000 snrDb 27 bitPerTone: 4500 rate: 54 throughput: 50
  07-02 17:46:32.381 D/WifiThroughputPredictor( 1698):  utilization (LLS) 15 isBluetoothConnected: false final utilization: 15
  07-02 17:46:32.381 D/WifiThroughputPredictor( 1698):  BW: 0 RSSI: -53 Nss: 1 Mode: 1 symDur: 4000 snrDb 27 bitPerTone: 4500 rate: 54 throughput: 50
  07-02 17:46:32.382 D/WifiThroughputPredictor( 1698):  utilization (LLS) 15 isBluetoothConnected: false final utilization: 15
  07-02 17:46:32.382 D/WifiThroughputPredictor( 1698):  BW: 0 RSSI: -53 Nss: 1 Mode: 1 symDur: 4000 snrDb 27 bitPerTone: 4500 rate: 54 throughput: 50
  07-02 17:46:32.384 D/WifiScoreCard( 1698): BSSID update SIGNAL_POLL ID: 942782235 SSID: "TAUFIKKOPIBATOH@WIFI.ID", BSSID: ac:4a:56:28:fe:ee, MAC: 
02:16:3f:eb:28:01, IP: /10.226.145.77, Security type: 0, Supplicant state: COMPLETED, Wi-Fi standard: legacy, RSSI: -53, Link speed: 48Mbps, Tx Link 
speed: 48Mbps, Max Supported Tx Link speed: 54Mbps, Calculated Tx : 0Mbps, Rx Link speed: 54Mbps, Max Supported Rx Link speed: 54Mbps, Calculated Rx : 
0Mbps, Frequency: 5765MHz, Net ID: 142, Metered hint: false, score: 60, isUsable: true, CarrierMerged: false, SubscriptionId: -1, IsPrimary: 1, Trusted: 
true, Restricted: false, Ephemeral: false, OEM paid: false, OEM private: false, OSU AP: false, FQDN: <none>, Provider friendly name: <none>, Requesting 
package name: <none>"TAUFIKKOPIBATOH@WIFI.ID"openMLO Information: , Is TID-To-Link negotiation supported by the AP: false, AP MLD Address: <none>, AP MLO 
Link Id: <none>, AP MLO Affiliated links: <none>, Vendor Data: <none>
  07-02 17:46:32.384 I/WifiService( 1698): getConnectionInfo uid=1000
  07-02 17:46:32.385 V/WifiService( 1698): Clearing REDACT_FOR_LOCAL_MAC_ADDRESS for android(uid=1000)
  07-02 17:46:32.385 V/WifiService( 1698): Clearing REDACT_FOR_NETWORK_SETTINGS for android(uid=1000)
  07-02 17:46:35.434 I/NearbyMediums( 4458): Wifi changed new SSID: "TAUFIKKOPIBATOH@WIFI.ID"
  07-02 17:46:35.434 V/WifiService( 1698): Clearing REDACT_FOR_ACCESS_FINE_LOCATION for com.android.phone(uid=1001)
  07-02 17:46:35.434 I/NearbyMediums( 4458): WifiLanConnectivityInfo is not changed, skip notify.
  07-02 17:46:35.435 D/ConnectivityService( 1698): NetReassign [no changes] [c 1] [a 2] [i 4]
  07-02 17:46:35.438 I/NullBinder( 4458): NullBinder for android.net.action.RECOMMEND_NETWORKS triggering remote TransactionTooLargeException due to 
Service without Chimera impl, calling uid: 1000, calling pid: 0
  07-02 17:46:35.438 W/.gms.persistent( 4458): Large reply transaction of 1056768 bytes, interface descriptor , code 1
> 07-02 17:46:35.454 I/BufferQueueProducer( 1012): [StatusBar#97](this:0xb40000731f578a88,id:-1,api:0,p:-1,c:1012) queueBuffer: fps=0.31 dur=3195.74 
max=3195.74 min=3195.74
  07-02 17:46:35.470 I/BufferQueueProducer( 1012): [VDS-studio.screen.sharing:0 SINK](this:0xb40000725f6b6a38,id:-1,api:1,p:1012,c:1012) queueBuffer: 
fps=0.31 dur=3196.05 max=3196.05 min=3196.05
  07-02 17:46:35.472 I/hwcomposer(  935): [HWCDisplay] [Display_0 (type:1)] fps:0.312888,dur:3196.03,max:3196.03,min:3196.03  
  07-02 17:46:35.512 I/TranHBMManagerService( 1698): mValidTempObserver : onUEvent: {SUBSYSTEM=platform, SEQNUM=18168, ACTION=change, COOL_DOWN=1, 
OF_FULLNAME=/thermal-ntc1, DRIVER=generic-adc-thermal, OF_COMPATIBLE_0=generic-adc-thermal, MODALIAS=of:Nthermal-ntc1T(null)Cgeneric-adc-thermal, 
DEVPATH=/devices/platform/thermal-ntc1, OF_NAME=thermal-ntc1, 
OF_COMPATIBLE_N=1},exceed=false,exceedTwo=false,down=true,data.inspire=false,data.thermal=true,CLR=42000,TRIG=44000
  07-02 17:46:35.513 I/TranHBMController[0]( 1698): onMachineAllowTempInspireChanged state=true,current=false
  07-02 17:46:35.513 I/TranHBMController[0]( 1698): updateHbmLightSensorState SystemBrightnessMax=false,OverTime=false,SystemPowerSave=false,LongBattery=fa
lse,LongBatterySuper=false,Temperature=true,allowTemp=true,SettingsFeature=false,DisplayPowerOn=true,CloudConfig=true,hdrLayer=false,batteryLevelAllowInspi
re=true
  07-02 17:46:35.514 I/TranHBMController[0]( 1698): updateHbmLightSensorState stop. mHbmInspire=false
  07-02 17:46:35.514 D/BatteryService( 1698): widetemperaturebatteryburn check uevent: {SUBSYSTEM=platform, SEQNUM=18168, ACTION=change, COOL_DOWN=1, 
OF_FULLNAME=/thermal-ntc1, DRIVER=generic-adc-thermal, OF_COMPATIBLE_0=generic-adc-thermal, MODALIAS=of:Nthermal-ntc1T(null)Cgeneric-adc-thermal, 
DEVPATH=/devices/platform/thermal-ntc1, OF_NAME=thermal-ntc1, OF_COMPATIBLE_N=1}
  07-02 17:46:35.515 D/BatteryService( 1698): widetemperaturebatteryburn PORT_STATE no availd
  07-02 17:46:35.665 W/NetworkTypeHelper( 1698): Failed to call buildTemplateCarrierMetered, java.lang.reflect.InvocationTargetException
  07-02 17:46:35.666 D/NetworkStatusMonitor( 1698): getAllInterfaceNames network type is unknown
  07-02 17:46:35.666 W/NetworkTypeHelper( 1698): Failed to call buildTemplateCarrierMetered, java.lang.reflect.InvocationTargetException
  07-02 17:46:35.666 D/NetworkStatusMonitor( 1698): getAllInterfaceNames network type is unknown
  07-02 17:46:35.666 D/NetworkStatusMonitor( 1698): getAllInterfaceNames network type is mobile
  07-02 17:46:35.666 D/NetworkStatusMonitor( 1698): getAllInterfaceNames network type is wifi
  07-02 17:46:35.666 D/NetworkStatusMonitor( 1698): onNetworkTypeChanged wifi => wifi
  07-02 17:46:35.720 I/TranWifiSmartAssistantController( 1698): start current network monitor 
  07-02 17:46:35.722 I/WifiService( 1698): getConnectionInfo uid=1000
  07-02 17:46:35.723 V/WifiService( 1698): Clearing REDACT_FOR_LOCAL_MAC_ADDRESS for android(uid=1000)
  07-02 17:46:35.724 V/WifiService( 1698): Clearing REDACT_FOR_NETWORK_SETTINGS for android(uid=1000)
  07-02 17:46:35.725 V/WifiService( 1698): Clearing REDACT_FOR_ACCESS_FINE_LOCATION for android(uid=1000)
  07-02 17:46:41.489 W/.gms.persistent( 4458): Large reply transaction of 1056768 bytes, interface descriptor , code 1
  07-02 17:46:41.489 V/WifiPermissionsUtil( 1698): checkCallersLocationPermission(com.google.android.gms): ok because uid 10113 has app-op 
android:fine_location
  07-02 17:46:41.490 V/WifiService( 1698): Clearing REDACT_FOR_ACCESS_FINE_LOCATION for com.google.android.gms(uid=10113)
  07-02 17:46:41.494 I/NearbyMediums( 4458): Wifi changed new SSID: "TAUFIKKOPIBATOH@WIFI.ID"
  07-02 17:46:41.495 I/NearbyMediums( 4458): WifiLanConnectivityInfo is not changed, skip notify.
  07-02 17:46:41.495 D/ConnectivityService( 1698): NetReassign [no changes] [c 0] [a 2] [i 4]
> 07-02 17:46:41.514 I/BufferQueueProducer( 1012): [StatusBar#97](this:0xb40000731f578a88,id:-1,api:0,p:-1,c:1012) queueBuffer: fps=0.17 dur=6060.13 
max=6060.13 min=6060.13
  07-02 17:46:41.531 I/BufferQueueProducer( 1012): [VDS-studio.screen.sharing:0 SINK](this:0xb40000725f6b6a38,id:-1,api:1,p:1012,c:1012) queueBuffer: 
fps=0.17 dur=6060.31 max=6060.31 min=6060.31
  07-02 17:46:41.532 I/hwcomposer(  935): [HWCDisplay] [Display_0 (type:1)] fps:0.165002,dur:6060.54,max:6060.54,min:6060.54  
  07-02 17:46:41.545 D/BufferPoolAccessor2.0(11425): bufferpool2 0xb4000072a18c9748 : 49(49854 size) total buffers - 1(745 size) used buffers - 582/1917 
(recycle/alloc) - 1366/1916 (fetch/transfer)
  07-02 17:46:41.725 W/NetworkTypeHelper( 1698): Failed to call buildTemplateCarrierMetered, java.lang.reflect.InvocationTargetException
  07-02 17:46:41.726 D/NetworkStatusMonitor( 1698): getAllInterfaceNames network type is unknown
  07-02 17:46:41.727 W/NetworkTypeHelper( 1698): Failed to call buildTemplateCarrierMetered, java.lang.reflect.InvocationTargetException
  07-02 17:46:41.728 D/NetworkStatusMonitor( 1698): getAllInterfaceNames network type is unknown
  07-02 17:46:41.729 D/NetworkStatusMonitor( 1698): getAllInterfaceNames network type is mobile
  07-02 17:46:41.729 D/NetworkStatusMonitor( 1698): getAllInterfaceNames network type is wifi
  07-02 17:46:41.729 D/NetworkStatusMonitor( 1698): onNetworkTypeChanged wifi => wifi
  07-02 17:46:41.733 I/TranWifiSmartAssistantController( 1698): start current network monitor 
  07-02 17:46:41.733 I/WifiService( 1698): getConnectionInfo uid=1000
  07-02 17:46:41.734 V/WifiService( 1698): Clearing REDACT_FOR_LOCAL_MAC_ADDRESS for android(uid=1000)
  07-02 17:46:41.734 V/WifiService( 1698): Clearing REDACT_FOR_NETWORK_SETTINGS for android(uid=1000)
  07-02 17:46:41.735 V/WifiService( 1698): Clearing REDACT_FOR_ACCESS_FINE_LOCATION for android(uid=1000)
  07-02 17:46:41.735 I/TranWifiSmartAssistantController( 1698): userIgnored :false isScoredCurrentNetwork :false
  07-02 17:46:41.736 I/TranWifiSmartAssistantController( 1698): mCurrentNetwork :133 SSID :"TAUFIKKOPIBATOH@WIFI.ID"
  07-02 17:46:41.738 I/WifiNetworkQuality( 1698): current rssi is sufficient
  07-02 17:46:41.739 I/TranWifiSmartAssistantController( 1698): mNoCandidateCount : -1
  07-02 17:46:41.739 I/TranWifiSmartAssistantController( 1698): ====>>rssi :-51
  07-02 17:46:44.204 I/keystore2(  669): system/security/keystore2/src/security_level.rs:344 - authorize_create end
  07-02 17:46:44.204 I/keystore2(  669): system/security/keystore2/src/security_level.rs:345 - unwrap_key_if_required start
  07-02 17:46:44.204 I/keystore2(  669): system/security/keystore2/src/security_level.rs:353 - unwrap_key_if_required end
  07-02 17:46:44.204 I/keystore2(  669): system/security/keystore2/src/security_level.rs:354 - upgrade_keyblob_if_required_with start
  07-02 17:46:44.204 D/TlcKM   (  670): TEE_Begin 5.0
  07-02 17:46:44.205 D/TlcKM   (  670): purpose = 0x00000002
> 07-02 17:46:44.207 D/TlcKM   (  670): find_spare_operation_slot: allocate op 0x4c5ec9fb818e1391 to slot #0 (1 ops live)
  07-02 17:46:44.208 D/TlcKM   (  670): TEE_Begin exiting with 0
  07-02 17:46:44.210 I/keystore2(  669): system/security/keystore2/src/security_level.rs:395 - upgrade_keyblob_if_required_with end
  07-02 17:46:44.210 I/keystore2(  669): system/security/keystore2/src/enforcements.rs:249 - finalize_create_authorization self.state=NoAuthRequired
  07-02 17:46:44.210 I/keystore2(  669): system/security/keystore2/src/security_level.rs:401 - operation_db.create_operation start
  07-02 17:46:44.210 I/keystore2(  669): system/security/keystore2/src/security_level.rs:419 - operation_db.create_operation end
  07-02 17:46:44.212 D/TlcKM   (  670): TEE_Finish
  07-02 17:46:44.212 D/TlcKM   (  670): split_update_chunks
> 07-02 17:46:44.216 D/TlcKM   (  670): release_operation_slot: release op slot #0 (handle 0x4c5ec9fb818e1391; 0 ops live)
  07-02 17:46:44.217 D/TlcKM   (  670): TEE_Finish exiting with 0
  07-02 17:46:44.218 D/TlcKM   (  670): TEE_Abort
  07-02 17:46:44.218 E/TlcKM   (  670): lookup_operation: op 0x4c5ec9fb818e1391 not found
  07-02 17:46:44.219 E/TlcKM   (  670): lookup_operation(session, operation_handle, &op) == -28
  07-02 17:46:44.219 D/TlcKM   (  670): TEE_Abort exiting with -28
  07-02 17:46:44.228 W/fbservices-stub:NotificationDeliveryStorePreferences( 8829): [AI] Failed to deserialize notification item
  07-02 17:46:44.229 W/fbservices-stub:NotificationDeliveryStorePreferences( 8829): [AI] Failed to deserialize notification item
  07-02 17:46:44.229 W/fbservices-stub:NotificationDeliveryStorePreferences( 8829): [AI] Failed to deserialize notification item
  07-02 17:46:44.229 W/fbservices-stub:NotificationDeliveryStorePreferences( 8829): [AI] Failed to deserialize notification item
  07-02 17:46:44.445 W/DGW     ( 8829): W[onSuccessfulResponse:923] StreamGroupTransport[notifgateway] on successful response. DGW is now connected.
  07-02 17:46:44.484 D/WifiClientModeImpl[24001351:wlan0]( 1698): updateLinkLayerStatsRssiSpeedFrequencyCapabilities rssi=-56 TxLinkspeed=54 freq=5765 
RxLinkSpeed=54
  07-02 17:46:44.487 D/WifiDataStall( 1698): tx tput in kbps: 50000
  07-02 17:46:44.488 D/WifiDataStall( 1698): rx tput in kbps: 50000
  07-02 17:46:44.488 V/WifiConfigManager( 1698): Updating scan detail cache freq=5765 BSSID=ac:4a:56:28:fe:ee RSSI=-53 for "TAUFIKKOPIBATOH@WIFI.ID"NONE
  07-02 17:46:44.488 D/WifiThroughputPredictor( 1698):  utilization (LLS) 15 isBluetoothConnected: false final utilization: 15
  07-02 17:46:44.488 D/WifiThroughputPredictor( 1698):  BW: 0 RSSI: -56 Nss: 1 Mode: 1 symDur: 4000 snrDb 24 bitPerTone: 4500 rate: 54 throughput: 50
  07-02 17:46:44.488 D/WifiThroughputPredictor( 1698):  utilization (LLS) 15 isBluetoothConnected: false final utilization: 15
  07-02 17:46:44.489 D/WifiThroughputPredictor( 1698):  BW: 0 RSSI: -56 Nss: 1 Mode: 1 symDur: 4000 snrDb 24 bitPerTone: 4500 rate: 54 throughput: 50
  07-02 17:46:44.489 D/WifiThroughputPredictor( 1698):  utilization (LLS) 15 isBluetoothConnected: false final utilization: 15
  07-02 17:46:44.489 D/WifiThroughputPredictor( 1698):  BW: 0 RSSI: -56 Nss: 1 Mode: 1 symDur: 4000 snrDb 24 bitPerTone: 4500 rate: 54 throughput: 50
  07-02 17:46:46.718 V/SettingsProvider( 1698): name : tran_board_temperature appId : 1000
  07-02 17:46:46.723 D/BackupManagerService( 1698): mUserServices size: 1
  07-02 17:46:46.901 D/TriggerService( 4219): trigger service is running
  07-02 17:46:47.230 I/StatusBarNetworkRateView( 2380): wifi is default. hide second network rate view. StatusBarNetworkRateView subId=2, 
isFirstSimCard=false, mLocation=QS_NEW NetworkRateState=NetworkRateState{visible=true, activeMobileDataSubId=2, totalRate=0.0, netWorkState=1, 
isAirplane=false, netRateStateBySettingGlobal=1, networkRate='0,00', networkRateUnit='KB/S'}
  07-02 17:46:47.241 D/AlarmPingSender( 3885): Sending Ping at:1782989207241
  07-02 17:46:47.244 D/AlarmPingSender( 3885): Skip. Release lock
> 07-02 17:46:47.276 I/BufferQueueProducer( 1012): [StatusBar#97](this:0xb40000731f578a88,id:-1,api:0,p:-1,c:1012) queueBuffer: fps=0.35 dur=5761.65 
max=4995.79 min=765.85
  07-02 17:46:47.287 I/BufferQueueProducer( 1012): [VDS-studio.screen.sharing:0 SINK](this:0xb40000725f6b6a38,id:-1,api:1,p:1012,c:1012) queueBuffer: 
fps=0.35 dur=5756.31 max=4992.05 min=764.26
  07-02 17:46:47.288 I/hwcomposer(  935): [HWCDisplay] [Display_0 (type:1)] fps:0.347486,dur:5755.63,max:4991.88,min:763.75  
  07-02 17:46:47.301 D/BufferPoolAccessor2.0(11425): bufferpool2 0xb4000072a18c9748 : 50(49675 size) total buffers - 1(926 size) used buffers - 596/1936 
(recycle/alloc) - 1371/1935 (fetch/transfer)
  07-02 17:46:47.507 D/WifiClientModeImpl[24001351:wlan0]( 1698): updateLinkLayerStatsRssiSpeedFrequencyCapabilities rssi=-58 TxLinkspeed=54 freq=5765 
RxLinkSpeed=54
  07-02 17:46:47.508 I/libPerfCtl(  970): xgfGetFPS pid:2380 fps:-1
  07-02 17:46:47.509 I/AppThermalMode(  970): [perfNotifyThermalState] hdl:0
  07-02 17:46:47.509 I/AppThermalMode(  970): [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: -1,fg->pid:14808
  07-02 17:46:47.509 I/AppThermalMode(  970): [perfNotifyThermalState] appThermalIdx -1:
  07-02 17:46:47.512 D/WifiDataStall( 1698): tx tput in kbps: 50000
  07-02 17:46:47.513 D/WifiDataStall( 1698): rx tput in kbps: 50000
  07-02 17:46:47.514 V/WifiConfigManager( 1698): Updating scan detail cache freq=5765 BSSID=ac:4a:56:28:fe:ee RSSI=-55 for "TAUFIKKOPIBATOH@WIFI.ID"NONE
  07-02 17:46:47.514 D/WifiThroughputPredictor( 1698):  utilization (LLS) 15 isBluetoothConnected: false final utilization: 15
  07-02 17:46:47.515 D/WifiThroughputPredictor( 1698):  BW: 0 RSSI: -58 Nss: 1 Mode: 1 symDur: 4000 snrDb 22 bitPerTone: 4500 rate: 54 throughput: 50
  07-02 17:46:47.515 D/WifiThroughputPredictor( 1698):  utilization (LLS) 15 isBluetoothConnected: false final utilization: 15
  07-02 17:46:47.516 D/WifiThroughputPredictor( 1698):  BW: 0 RSSI: -58 Nss: 1 Mode: 1 symDur: 4000 snrDb 22 bitPerTone: 4500 rate: 54 throughput: 50
  07-02 17:46:47.518 D/WifiThroughputPredictor( 1698):  utilization (LLS) 15 isBluetoothConnected: false final utilization: 15
  07-02 17:46:47.519 D/WifiThroughputPredictor( 1698):  BW: 0 RSSI: -58 Nss: 1 Mode: 1 symDur: 4000 snrDb 22 bitPerTone: 4500 rate: 54 throughput: 50
  07-02 17:46:47.519 D/WifiThroughputPredictor( 1698):  utilization (LLS) 15 isBluetoothConnected: false final utilization: 15
  07-02 17:46:47.518 I/TranTele/TranPhoneInterfaceManager( 2620): [onReceive] action: android.net.wifi.RSSI_CHANGED
  07-02 17:46:47.519 D/WifiThroughputPredictor( 1698):  BW: 0 RSSI: -58 Nss: 1 Mode: 1 symDur: 4000 snrDb 22 bitPerTone: 4500 rate: 54 throughput: 50
  07-02 17:46:50.553 D/WifiScoreCard( 1698): network update SIGNAL_POLL "TAUFIKKOPIBATOH@WIFI.ID" ID: 42486102 RSSI -57 txSpeed -1
  07-02 17:46:50.553 V/WifiService( 1698): Clearing REDACT_FOR_NETWORK_SETTINGS for com.android.phone(uid=1001)
  07-02 17:46:50.554 D/WifiClientModeImpl[24001351:wlan0]( 1698):  ClientModeImpl$L2ConnectedState screen=on 131 0 "TAUFIKKOPIBATOH@WIFI.ID" 
ac:4a:56:28:fe:ee rssi=-57 f=5765 sc=60 link=48 tx=0.9, 0.0, 0.0 rx=0.9 bcn=0 [on:0 tx:0 rx:0 period:3029] from screen [on:0 period:19489067] score=60
  07-02 17:46:50.554 V/WifiManager( 2380): TrafficStateCallbackProxy: onStateChanged state=0
  07-02 17:46:50.554 V/WifiService( 1698): Clearing REDACT_FOR_ACCESS_FINE_LOCATION for com.android.phone(uid=1001)
  07-02 17:46:50.554 V/WifiManager( 2380): TrafficStateCallbackProxy: onStateChanged state=0
> 07-02 17:46:50.579 I/BufferQueueProducer( 1012): [StatusBar#97](this:0xb40000731f578a88,id:-1,api:0,p:-1,c:1012) queueBuffer: fps=0.30 dur=3303.47 
max=3303.47 min=3303.47
  07-02 17:46:50.597 I/BufferQueueProducer( 1012): [VDS-studio.screen.sharing:0 SINK](this:0xb40000725f6b6a38,id:-1,api:1,p:1012,c:1012) queueBuffer: 
fps=0.30 dur=3309.73 max=3309.73 min=3309.73
  07-02 17:46:50.598 I/hwcomposer(  935): [HWCDisplay] [Display_0 (type:1)] fps:0.302104,dur:3310.12,max:3310.12,min:3310.12  
  07-02 17:46:50.760 I/TranWifiSmartAssistantController( 1698): start current network monitor 
  07-02 17:46:50.760 I/WifiService( 1698): getConnectionInfo uid=1000
  07-02 17:46:50.761 V/WifiService( 1698): Clearing REDACT_FOR_LOCAL_MAC_ADDRESS for android(uid=1000)
  07-02 17:46:50.761 V/WifiService( 1698): Clearing REDACT_FOR_NETWORK_SETTINGS for android(uid=1000)
  07-02 17:46:50.761 V/WifiService( 1698): Clearing REDACT_FOR_ACCESS_FINE_LOCATION for android(uid=1000)
  07-02 17:46:50.761 I/TranWifiSmartAssistantController( 1698): userIgnored :false isScoredCurrentNetwork :false
  07-02 17:46:50.761 I/TranWifiSmartAssistantController( 1698): mCurrentNetwork :133 SSID :"TAUFIKKOPIBATOH@WIFI.ID"
  07-02 17:46:50.763 I/WifiNetworkQuality( 1698): current rssi is sufficient
  07-02 17:46:50.763 I/TranWifiSmartAssistantController( 1698): mNoCandidateCount : -1
  07-02 17:46:50.763 I/TranWifiSmartAssistantController( 1698): ====>>rssi :-57
  07-02 17:46:50.835 D/ULogGuard( 1342): Monitoring: 15 threads, 0 requests, 0 time-bombs; 3 guards. ResetFlags = 0x7
  07-02 17:46:50.903 D/TriggerService( 4219): trigger service is running
  07-02 17:46:51.386 D/TranWifiTputMonitor( 1698): WIFI: TX: 0 RX: 0 TOTAL = 0
  07-02 17:46:51.387 D/TranWifiTputMonitor( 1698): High Tput: false, TOTAL TPUT: 0
  07-02 17:46:51.510 I/libPerfCtl(  970): xgfGetFPS pid:2380 fps:-1
  07-02 17:46:51.510 I/AppThermalMode(  970): [perfNotifyThermalState] hdl:0
  07-02 17:46:51.510 I/AppThermalMode(  970): [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: -1,fg->pid:14808
  07-02 17:46:51.510 I/AppThermalMode(  970): [perfNotifyThermalState] appThermalIdx -1:
  07-02 17:46:53.580 V/WifiService( 1698): Clearing REDACT_FOR_LOCAL_MAC_ADDRESS for com.android.phone(uid=1001)
  07-02 17:46:53.580 V/WifiService( 1698): Clearing REDACT_FOR_NETWORK_SETTINGS for com.android.phone(uid=1001)
  07-02 17:46:53.580 V/WifiService( 1698): Clearing REDACT_FOR_ACCESS_FINE_LOCATION for com.android.phone(uid=1001)
  07-02 17:46:53.581 D/WifiClientModeImpl[24001351:wlan0]( 1698):  ClientModeImpl$L2ConnectedState screen=on 131 0 "TAUFIKKOPIBATOH@WIFI.ID" 
ac:4a:56:28:fe:ee rssi=-56 f=5765 sc=60 link=48 tx=0.7, 0.0, 0.0 rx=0.7 bcn=0 [on:0 tx:0 rx:0 period:3026] from screen [on:0 period:19492094] score=60
  07-02 17:46:53.581 V/WifiManager( 2380): TrafficStateCallbackProxy: onStateChanged state=3
  07-02 17:46:53.582 V/WifiManager( 2380): TrafficStateCallbackProxy: onStateChanged state=3
> 07-02 17:46:53.607 I/BufferQueueProducer( 1012): [StatusBar#97](this:0xb40000731f578a88,id:-1,api:0,p:-1,c:1012) queueBuffer: fps=0.33 dur=3027.66 
max=3027.66 min=3027.66
  07-02 17:46:53.623 I/BufferQueueProducer( 1012): [VDS-studio.screen.sharing:0 SINK](this:0xb40000725f6b6a38,id:-1,api:1,p:1012,c:1012) queueBuffer: 
fps=0.33 dur=3026.49 max=3026.49 min=3026.49
  07-02 17:46:53.625 I/hwcomposer(  935): [HWCDisplay] [Display_0 (type:1)] fps:0.330401,dur:3026.62,max:3026.62,min:3026.62  
  07-02 17:46:53.637 D/BufferPoolAccessor2.0(11425): bufferpool2 0xb4000072a18c9748 : 50(47740 size) total buffers - 1(771 size) used buffers - 610/1958 
(recycle/alloc) - 1380/1957 (fetch/transfer)
  07-02 17:46:53.765 I/TranWifiSmartAssistantController( 1698): start current network monitor 
  07-02 17:46:53.766 I/WifiService( 1698): getConnectionInfo uid=1000
  07-02 17:46:53.767 V/WifiService( 1698): Clearing REDACT_FOR_LOCAL_MAC_ADDRESS for android(uid=1000)
  07-02 17:46:53.767 V/WifiService( 1698): Clearing REDACT_FOR_NETWORK_SETTINGS for android(uid=1000)
  07-02 17:46:53.768 V/WifiService( 1698): Clearing REDACT_FOR_ACCESS_FINE_LOCATION for android(uid=1000)
  07-02 17:46:53.768 I/TranWifiSmartAssistantController( 1698): userIgnored :false isScoredCurrentNetwork :false
  07-02 17:46:53.768 I/TranWifiSmartAssistantController( 1698): mCurrentNetwork :133 SSID :"TAUFIKKOPIBATOH@WIFI.ID"
  07-02 17:46:53.770 I/WifiNetworkQuality( 1698): current rssi is sufficient
  07-02 17:46:53.771 I/TranWifiSmartAssistantController( 1698): mNoCandidateCount : -1
  07-02 17:46:53.771 I/TranWifiSmartAssistantController( 1698): ====>>rssi :-56
  07-02 17:46:53.836 D/ULogGuard( 1342): Monitoring: 15 threads, 0 requests, 0 time-bombs; 3 guards. ResetFlags = 0x7
  07-02 17:46:54.150 V/Hiber/hiber( 1698): unfreeze from hiber: (4,-1,-1,-1,10257), rpcName: PKG, code: -1, reason:packet
  07-02 17:46:54.152 I/Choreographer(16756): Skipped 1555 frames!  The application may be doing too much work on its main thread.
  07-02 17:46:54.159 I/Hiber/stateManager( 1698): unfreeze uid: 10257 com.instagram.android pids:[16756]  reason:packet   cpninfo:TRANSACTION_-1 
costTime=8ms ,last freeze 25s ago
  07-02 17:46:54.159 D/TranSignalStrengthComponentImpl(16756): [LTE] dbm: -88
  07-02 17:46:54.159 I/Hiber/appStateMachine( 1698): uid=10257, pkg=com.instagram.android, transition from Frozen to Running, reason=packet
  07-02 17:46:54.159 I/Hiber/appStateMachine( 1698): uid:10257 exit FrozenState
  07-02 17:47:00.010 I/AiCommunicateHandler( 4461): loadDatabaseAtTime: 2761
  07-02 17:47:00.014 W/BroadcastDispatcherLog( 2380): [21958] Broadcast received for user 0: Intent { act=android.intent.action.TIME_TICK flg=0x50200010 }
  07-02 17:47:00.016 W/BroadcastDispatcherLog( 2380): [21959] Broadcast received for user -1: Intent { act=android.intent.action.TIME_TICK flg=0x50200010 }
  07-02 17:47:00.045 I/niex.vsimhelper( 9504): Explicit concurrent mark compact GC freed 448KB AllocSpace bytes, 0(0B) LOS objects, 71% free, 
2444KB/8588KB, paused 525us,1.596ms total 30.306ms
  07-02 17:47:00.066 D/TrClockView( 2380): updateDataOnTimeChanged
  07-02 17:47:00.067 V/KeyguardStatusViewController( 2380): onTimeChanged
> 07-02 17:47:00.093 I/BufferQueueProducer( 1012): [StatusBar#97](this:0xb40000731f578a88,id:-1,api:0,p:-1,c:1012) queueBuffer: fps=0.15 dur=6485.95 
max=6485.95 min=6485.95
  07-02 17:47:00.109 I/BufferQueueProducer( 1012): [VDS-studio.screen.sharing:0 SINK](this:0xb40000725f6b6a38,id:-1,api:1,p:1012,c:1012) queueBuffer: 
fps=0.15 dur=6485.41 max=6485.41 min=6485.41
  07-02 17:47:00.111 I/hwcomposer(  935): [HWCDisplay] [Display_0 (type:1)] fps:0.154181,dur:6485.90,max:6485.90,min:6485.90  
  07-02 17:47:00.177 I/Hiber/nativeServiceClient( 1698): check binder uid=10257
  07-02 17:47:00.381 D/TLinkBrush_DATA( 1698): [NetdEvent]onTcpSocketStatsEvent
  07-02 17:47:00.382 D/TLinkBrush_DATA( 1698): [NetdEvent]onTcpSocketStatsEvent sent = 0, return
  07-02 17:47:00.382 D/TLinkBrush_DATA( 1698): [NetdEvent]onTcpSocketStatsEvent
  07-02 17:47:00.382 D/TLinkBrush_DATA( 1698): [NetdEvent]onTcpSocketStatsEvent sent = 0, return
  07-02 17:47:00.382 D/TLinkBrush_DATA( 1698): [NetdEvent]onTcpSocketStatsEvent
  07-02 17:47:00.398 D/TranWifiTputMonitor( 1698): WIFI: TX: 0 RX: 0 TOTAL = 0
  07-02 17:47:00.398 D/TranWifiTputMonitor( 1698): High Tput: false, TOTAL TPUT: 0
  07-02 17:47:00.446 D/TranSignalStrengthComponentImpl( 2620): [LTE] dbm: -85
  07-02 17:47:00.447 D/TranSignalStrengthComponentImpl( 2620): [LTE] dbm: -85
  07-02 17:47:00.451 I/TranTele/TranPhoneInterfaceManager( 2620): TTC - onSignalStrengthsChanged
  07-02 17:47:00.451 D/CallbackProxy( 6515): [onSignalStrengthsChanged]
  07-02 17:47:00.452 D/TranSignalStrengthComponentImpl(30413): [LTE] dbm: -85
  07-02 17:47:00.453 D/TranSignalStrengthComponentImpl(23237): [LTE] dbm: -85
  07-02 17:47:00.456 D/TranSignalStrengthComponentImpl( 1698): [LTE] dbm: -85
  07-02 17:47:00.459 D/TranPhoneSwitcher( 2620): getNetworkType: 4G
  07-02 17:47:00.460 D/TranSignalStrengthComponentImpl(30413): [LTE] dbm: -85
  07-02 17:47:00.460 I/TranPhoneSwitcher( 2620): mDefaultsign:4subid :2
  07-02 17:47:01.616 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.039766,0.000049, totalTime 0.039815 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:47:01.623 D/android.hardware.lights-service.mediatek(  965): write 18 to /sys/class/leds/lcd-backlight/brightness, result: 0
  07-02 17:47:01.627 D/AAL     ( 1359): onBacklightChanged: 17/1023 -> 18/1023(phy:36/4095)
  07-02 17:47:01.644 D/AAL     ( 1359): 07-02 05:47:01.628 BL=  18,ESS= 256, 
  07-02 17:47:01.673 D/android.hardware.lights-service.mediatek(  965): write 19 to /sys/class/leds/lcd-backlight/brightness, result: 0
  07-02 17:47:01.676 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.040003,0.000048, totalTime 0.040052 > logTimeout 
0.022000 TIMEOUT!!
> 07-02 17:47:01.676 I/BufferQueueProducer( 1012): 
[SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity](BLAST)#19933](this:0xb40000731f5ba278,id:-1,api:0,p:-1,c:1012) queueBuffer: fps=0.50 
dur=36361.13 max=36011.29 min=16.10
  07-02 17:47:01.677 D/AAL     ( 1359): onBacklightChanged: 18/1023 -> 19/1023(phy:38/4095)
  07-02 17:47:01.683 I/BufferQueueProducer( 1012): [VDS-studio.screen.sharing:0 SINK](this:0xb40000725f6b6a38,id:-1,api:1,p:1012,c:1012) queueBuffer: 
fps=0.64 dur=1574.52 max=1574.52 min=1574.52
  07-02 17:47:01.694 D/AAL     ( 1359): 07-02 05:47:01.678 BL=  19,ESS= 256, 
  07-02 17:47:01.696 I/FPSGO   ( 1080): fpsgo_boost_sched_idle_prefer:1
  07-02 17:47:01.696 I/mtkpower_client( 1080): perf_lock_acq, hdl:0, dur:0, num:2, tid:1080
  07-02 17:47:01.697 I/libPowerHal(  970): [setClusterFreq] mtkpower@1.0-se: sysfs_freq set cpu freq: -1 -1 -1 -1 
  07-02 17:47:01.697 I/libPowerHal(  970): [PD] mtkpower@1.0-se update cmd:1408300 param:0
  07-02 17:47:01.699 I/mtkpower_client( 1080): ret_hdl:56019
  07-02 17:47:01.699 I/FPSGO   ( 1080): perfLockAcq hdl:56019
  07-02 17:47:01.700 I/FPSGO   ( 1080): fpsgo_boost_sched_rate_ns:0
  07-02 17:47:01.700 I/mtkpower_client( 1080): perf_lock_acq, hdl:0, dur:0, num:12, tid:1080
  07-02 17:47:01.703 I/mtkpower_client( 1080): ret_hdl:56020
  07-02 17:47:01.703 I/FPSGO   ( 1080): perfLockAcq hdl:56020
  07-02 17:47:01.704 I/libPowerHal(  970): cmdSetting - unknown cmd:1438500, scmd:(null) ,param_1:0
  07-02 17:47:01.704 I/libPowerHal(  970): cmdSetting - unknown cmd:1438800, scmd:(null) ,param_1:0
  07-02 17:47:01.706 D/android.hardware.lights-service.mediatek(  965): write 20 to /sys/class/leds/lcd-backlight/brightness, result: 0
  07-02 17:47:01.710 D/AAL     ( 1359): onBacklightChanged: 19/1023 -> 20/1023(phy:40/4095)
  07-02 17:47:01.727 D/AAL     ( 1359): 07-02 05:47:01.711 BL=  20,ESS= 256, 
  07-02 17:47:01.739 D/android.hardware.lights-service.mediatek(  965): write 21 to /sys/class/leds/lcd-backlight/brightness, result: 0
  07-02 17:47:01.744 D/AAL     ( 1359): onBacklightChanged: 20/1023 -> 21/1023(phy:42/4095)
  07-02 17:47:02.650 I/TranTele/TranPhoneInterfaceManager( 2620): [onReceive] action: android.net.wifi.RSSI_CHANGED
  07-02 17:47:02.653 I/WifiService( 1698): getConnectionInfo uid=1001
  07-02 17:47:02.654 V/WifiService( 1698): Clearing REDACT_FOR_LOCAL_MAC_ADDRESS for com.android.phone(uid=1001)
  07-02 17:47:02.654 V/WifiService( 1698): Clearing REDACT_FOR_NETWORK_SETTINGS for com.android.phone(uid=1001)
  07-02 17:47:02.654 V/WifiService( 1698): Clearing REDACT_FOR_ACCESS_FINE_LOCATION for com.android.phone(uid=1001)
  07-02 17:47:02.685 I/BufferQueueProducer( 1012): [VDS-studio.screen.sharing:0 SINK](this:0xb40000725f6b6a38,id:-1,api:1,p:1012,c:1012) queueBuffer: 
fps=57.91 dur=1001.52 max=36.86 min=11.40
> 07-02 17:47:02.691 I/BufferQueueProducer( 1012): 
[SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity](BLAST)#19933](this:0xb40000731f5ba278,id:-1,api:0,p:-1,c:1012) queueBuffer: fps=58.12 
dur=1015.20 max=33.73 min=15.81
  07-02 17:47:02.716 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.039826,0.000133, totalTime 0.039960 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:47:02.726 I/native  ( 5782): I0000 00:00:1782989222.726357    5913 soda_async_impl.cc:1426] Current audio timestamp: 1782989221411520
  07-02 17:47:02.786 I/TranWifiSmartAssistantController( 1698): start current network monitor 
  07-02 17:47:02.787 I/WifiService( 1698): getConnectionInfo uid=1000
  07-02 17:47:02.788 V/WifiService( 1698): Clearing REDACT_FOR_LOCAL_MAC_ADDRESS for android(uid=1000)
  07-02 17:47:02.788 V/WifiService( 1698): Clearing REDACT_FOR_NETWORK_SETTINGS for android(uid=1000)
  07-02 17:47:02.788 V/WifiService( 1698): Clearing REDACT_FOR_ACCESS_FINE_LOCATION for android(uid=1000)
  07-02 17:47:02.788 I/TranWifiSmartAssistantController( 1698): userIgnored :false isScoredCurrentNetwork :false
  07-02 17:47:02.789 I/TranWifiSmartAssistantController( 1698): mCurrentNetwork :133 SSID :"TAUFIKKOPIBATOH@WIFI.ID"
  07-02 17:47:02.791 I/WifiNetworkQuality( 1698): current rssi is sufficient
  07-02 17:47:02.791 I/TranWifiSmartAssistantController( 1698): mNoCandidateCount : -1
  07-02 17:47:02.791 I/TranWifiSmartAssistantController( 1698): ====>>rssi :-57
  07-02 17:47:02.840 D/ULogGuard( 1342): Monitoring: 15 threads, 0 requests, 0 time-bombs; 3 guards. ResetFlags = 0x7
  07-02 17:47:02.908 D/TriggerService( 4219): trigger service is running
  07-02 17:47:02.976 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000002,0.039633,0.000075, totalTime 0.039710 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:47:03.123 D/TranAppBrightnessChangeController( 1698): [handleMessage] msg type: 1003 isCloudEnabled: true
  07-02 17:47:03.185 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.029368,0.000120, totalTime 0.029489 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:47:03.232 I/mtkpower_client( 1080): perf_lock_acq, hdl:0, dur:30000, num:2, tid:1080
  07-02 17:47:03.234 I/mtkpower_client( 1080): ret_hdl:56021
  07-02 17:47:03.295 D/wpa_supplicant(32236): wlan0: BSS: Remove id 1808 BSSID ac:4a:56:28:fe:e2 SSID 'seamless@wifi.id' due to wpa_bss_flush_by_age
  07-02 17:47:03.610 D/CoreBackPreview( 1698): Window{ac87882 u0 com.erbete.customer/com.erbete.customer.MainActivity}: Setting back callback 
OnBackInvokedCallbackInfo{mCallback=android.window.IOnBackInvokedCallback$Stub$Proxy@41d537d, mPriority=0, mIsAnimationCallback=true}
  07-02 17:47:03.613 I/mtkpower_client( 1080): perf_lock_acq, hdl:0, dur:30000, num:2, tid:1080
  07-02 17:47:03.614 I/mtkpower_client( 1080): ret_hdl:56022
  07-02 17:47:03.668 I/mtkpower_client( 1080): perf_lock_rel, hdl:56022, tid:1080
  07-02 17:47:03.669 I/libPowerHal(  970): [PD] fpsgo update cmd:1408300 param:0
  07-02 17:47:03.685 I/BufferQueueProducer( 1012): [VDS-studio.screen.sharing:0 SINK](this:0xb40000725f6b6a38,id:-1,api:1,p:1012,c:1012) queueBuffer: 
fps=34.98 dur=1000.69 max=364.23 min=11.02
> 07-02 17:47:03.723 I/BufferQueueProducer( 1012): 
[SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity](BLAST)#19933](this:0xb40000731f5ba278,id:-1,api:0,p:-1,c:1012) queueBuffer: fps=34.89 
dur=1031.80 max=366.26 min=14.62
  07-02 17:47:03.776 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.040837,0.000019, totalTime 0.040857 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:47:03.936 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.039640,0.000071, totalTime 0.039712 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:47:03.964 I/mtkpower_client( 1080): perf_lock_acq, hdl:0, dur:30000, num:2, tid:1080
  07-02 17:47:03.965 I/mtkpower_client( 1080): ret_hdl:56023
  07-02 17:47:03.976 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000000,0.040277,0.000094, totalTime 0.040371 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:47:03.985 I/mtkpower_client( 1080): perf_lock_rel, hdl:56023, tid:1080
  07-02 17:47:03.985 I/libPowerHal(  970): [PD] fpsgo update cmd:1408300 param:0
  07-02 17:47:04.036 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.039853,0.000053, totalTime 0.039906 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:47:04.110 D/BufferPoolAccessor2.0(11425): bufferpool2 0xb4000072a18c9748 : 66(145383 size) total buffers - 1(3164 size) used buffers - 657/2095 
(recycle/alloc) - 1472/2094 (fetch/transfer)
  07-02 17:47:04.116 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.039796,0.000049, totalTime 0.039846 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:47:04.195 I/mtkpower_client( 1080): perf_lock_acq, hdl:0, dur:30000, num:2, tid:1080
  07-02 17:47:04.196 I/mtkpower_client( 1080): ret_hdl:56024
> 07-02 17:47:04.198 I/flutter (14808): RESTAURANT_VENDOR_DEBUG: event_count=4
> 07-02 17:47:04.198 I/flutter (14808): RESTAURANT_VENDOR_DEBUG: allNearest_count=4
> 07-02 17:47:04.198 I/flutter (14808): RESTAURANT_VENDOR_DEBUG: newArrival_count=4
> 07-02 17:47:04.198 I/flutter (14808): RESTAURANT_VENDOR_DEBUG: popular_count=4
> 07-02 17:47:04.199 I/flutter (14808): RESTAURANT_VENDOR_DEBUG_ITEM: id=aceh_clone_6285ddbfd9598_0hB8mx1z1DeNR9CAzXfh title=LA Parrilla 
section=6285ddbfd9598 zone=q8OOxNm1zgyVqggkCibX category=[]
> 07-02 17:47:04.199 I/flutter (14808): RESTAURANT_VENDOR_DEBUG_ITEM: id=custom_banda_aceh_restaurant_demo title=GHALBIT Banda Aceh Food 
section=6285ddbfd9598 zone=q8OOxNm1zgyVqggkCibX category=[]
> 07-02 17:47:04.199 I/flutter (14808): RESTAURANT_VENDOR_DEBUG_ITEM: id=aceh_clone_6285ddbfd9598_1ZrcQ4ysrrheSVguUkFF title=Koobilo Eats 
section=6285ddbfd9598 zone=q8OOxNm1zgyVqggkCibX category=[]
> 07-02 17:47:04.199 I/flutter (14808): RESTAURANT_VENDOR_DEBUG_ITEM: id=aceh_clone_6285ddbfd9598_1vMlKPiniUrzybKkWiS1 title=ahmed store 
section=6285ddbfd9598 zone=q8OOxNm1zgyVqggkCibX category=[]
  07-02 17:47:04.211 I/mtkpower_client( 1080): perf_lock_rel, hdl:56024, tid:1080
  07-02 17:47:04.212 I/libPowerHal(  970): [PD] fpsgo update cmd:1408300 param:0
  07-02 17:47:04.308 I/Hiber/importantScene( 1698): isTrafficActive uid:10271 speed :0
  07-02 17:47:04.308 I/Hiber/appStateMachine( 1698): uid:10271 enter FrozenState
  07-02 17:47:04.312 I/Hiber/stateManager( 1698): freeze uid: 10271 com.whatsapp costTime=3ms ,last unfreeze 5s ago
  07-02 17:47:04.312 I/Hiber/restrictionPolicy( 1698): uid:10271  pkgName:com.whatsapp isAllowedNet
  07-02 17:47:04.312 I/Hiber/nativeServiceClient( 1698): watch app network uid=10271, persistent=0
  07-02 17:47:04.312 I/Hiber/hiber( 1698): msg for start proxy frozen state
  07-02 17:47:04.312 D/ActivityManager( 1698): Hiber try idle uid[10271] by hiber ,bgTime>0 ? true,isIdled before ? true ,isCurAllowListed ? false 
,isProcStateBackground?true
  07-02 17:47:04.312 D/ActivityManager( 1698): Hiber try idle uid[10271] by hiber
  07-02 17:47:04.313 I/Hiber/proxyManager( 1698): p_service: 10271
  07-02 17:47:04.313 I/Hiber/proxyManager( 1698): p_job: 10271 pkgName=com.whatsapp which=2
  07-02 17:47:04.313 I/Hiber/hiber( 1698): proxy alarm (uid=10271, pkgName=com.whatsapp)
  07-02 17:47:04.313 I/Hiber/proxyManager( 1698): p_alarm: uid=10271, pkgName=com.whatsapp
  07-02 17:47:04.313 D/Hiber/alarmManagerServiceExtImpl( 1698): proxyAlarms, alarm=Alarm{bfb382a type 3 origWhen 180132195 whenElapsed 180132195 
com.whatsapp}
  07-02 17:47:04.313 D/Hiber/alarmManagerServiceExtImpl( 1698): proxyAlarms, alarm=Alarm{4589639 type 2 origWhen 186378499 whenElapsed 186378499 
com.whatsapp}
  07-02 17:47:04.313 D/Hiber/alarmManagerServiceExtImpl( 1698): proxyAlarms, alarm=Alarm{81e27fc type 3 origWhen 196492391 whenElapsed 196492391 
com.whatsapp}
  07-02 17:47:04.313 D/Hiber/alarmManagerServiceExtImpl( 1698): proxyAlarms, alarm=Alarm{e68abda type 0 origWhen 1783011627000 whenElapsed 202208482 
com.whatsapp}
  07-02 17:47:04.313 D/Hiber/alarmManagerServiceExtImpl( 1698): proxyAlarms, alarm=Alarm{7bb6a62 type 0 origWhen 1783018801000 whenElapsed 209382481 
com.whatsapp}
  07-02 17:47:04.313 D/Hiber/alarmManagerServiceExtImpl( 1698): proxyAlarms, alarm=Alarm{d901fd4 type 2 origWhen 1480483751 whenElapsed 1480483751 
com.whatsapp}
  07-02 17:47:04.605 I/AppThermalMode(  970): [perfNotifyThermalState] hdl:0
  07-02 17:47:04.605 I/AppThermalMode(  970): [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: 60,fg->pid:14808
  07-02 17:47:04.605 I/AppThermalMode(  970): [perfNotifyThermalState] appThermalIdx -1:
  07-02 17:47:04.612 I/hwcomposer(  935): [HWCDisplay] [Display_0 (type:1)] fps:46.414108,dur:1012.62,max:87.89,min:12.35  
  07-02 17:47:04.696 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.040059,0.000050, totalTime 0.040110 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:47:04.696 I/BufferQueueProducer( 1012): [VDS-studio.screen.sharing:0 SINK](this:0xb40000725f6b6a38,id:-1,api:1,p:1012,c:1012) queueBuffer: 
fps=50.47 dur=1010.59 max=51.77 min=12.54
> 07-02 17:47:04.739 I/BufferQueueProducer( 1012): 
[SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity](BLAST)#19933](this:0xb40000731f5ba278,id:-1,api:0,p:-1,c:1012) queueBuffer: fps=51.19 
dur=1015.86 max=50.67 min=15.89
  07-02 17:47:04.775 D/BufferPoolAccessor2.0(11425): bufferpool2 0xb4000072a18c9748 : 66(191458 size) total buffers - 1(1628 size) used buffers - 659/2131 
(recycle/alloc) - 1506/2130 (fetch/transfer)
  07-02 17:47:04.777 I/DisplayDeviceRepository( 1698): Display device changed: DisplayDeviceInfo{"Layar Bawaan": uniqueId="local:0", 1080 x 2436, modeId 
2, renderFrameRate 60.000004, defaultModeId 1, userPreferredModeId -1, supportedModes [{id=1, width=1080, height=2436, fps=120.00001, vsync=120.00001, 
synthetic=false, alternativeRefreshRates=[60.0], supportedHdrTypes=[]}, {id=2, width=1080, height=2436, fps=60.0, vsync=60.0, synthetic=false, 
alternativeRefreshRates=[120.00001], supportedHdrTypes=[]}], colorMode 0, supportedColorModes [0, 7, 9], hdrCapabilities 
HdrCapabilities{mSupportedHdrTypes=[], mMaxLuminance=500.0, mMaxAverageLuminance=500.0, mMinLuminance=0.0}, allmSupported false, gameContentTypeSupported 
false, density 480, 392.839 x 392.828 dpi, appVsyncOff 2400001, presDeadline 28600000, cutout DisplayCutout{insets=Rect(0, 108 - 0, 0) 
waterfall=Insets{left=0, top=0, right=0, bottom=0} boundingRect={Bounds=[Rect(0, 0 - 0, 0), Rect(468, 0 - 612, 108), Rect(0, 0 - 0, 0), Rect(0, 0 - 0, 
0)]} cutoutPathParserInfo={CutoutPathParserInfo{displayWidth=1080 displayHeight=2436 physicalDisplayWidth=1080 physicalDisplayHeight=2436 density={3.0} 
cutoutSpec={M -24,0 L -24,36 L 24,36 L 24,0 Z @dp} rotation={0} scale={1.0} physicalPixelDisplaySizeRatio={1.0}}} sideOverrides={}}, touch INTERNAL, 
rotation 0, type INTERNAL, address {port=0}, deviceProductInfo null, state ON, committedState ON, frameRateOverride {uid=1000 frameRateHz=60.0} {uid=10159 
frameRateHz=60.0} {uid=10509 frameRateHz=60.0} , brightnessMinimum 0.0, brightnessMaximum 1.0, brightnessDefault 0.2, hdrSdrRatio NaN, 
FLAG_ALLOWED_TO_BE_DEFAULT_DISPLAY, FLAG_ROTATES_WITH_CONTENT, FLAG_SECURE, FLAG_SUPPORTS_PROTECTED_BUFFERS, FLAG_TRUSTED, installOrientation 0, 
displayShape DisplayShape{ spec=596679847 displayWidth=1080 displayHeight=2436 physicalPixelDisplaySizeRatio=1.0 rotation=0 offsetX=0 offsetY=0 scale=1.0}}
  07-02 17:47:04.783 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.026506,0.000164, totalTime 0.026670 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:47:04.797 I/Griffin/DeviceState( 1698): virtualDisplayPackageName :{com.android.shell=2000}
  07-02 17:47:04.908 D/TriggerService( 4219): trigger service is running
  07-02 17:47:04.980 I/mtkpower_client( 1080): perf_lock_acq, hdl:0, dur:30000, num:2, tid:1080
  07-02 17:47:04.981 I/mtkpower_client( 1080): ret_hdl:56025
  07-02 17:47:05.313 I/Hiber/nativeServiceClient( 1698): check binder uid=10271
  07-02 17:47:05.566 D/TranSignalStrengthComponentImpl( 2620): [LTE] dbm: -87
  07-02 17:47:05.567 D/TranSignalStrengthComponentImpl( 2620): [LTE] dbm: -87
  07-02 17:47:05.570 I/mtkpower_client( 1080): perf_lock_rel, hdl:56025, tid:1080
  07-02 17:47:05.570 I/libPowerHal(  970): [PD] fpsgo update cmd:1408300 param:0
  07-02 17:47:05.573 D/TranSignalStrengthComponentImpl( 1698): [LTE] dbm: -87
  07-02 17:47:05.573 D/TranSignalStrengthComponentImpl(30413): [LTE] dbm: -87
  07-02 17:47:05.574 D/CallbackProxy( 6515): [onSignalStrengthsChanged]
  07-02 17:47:05.574 D/TranSignalStrengthComponentImpl(30413): [LTE] dbm: -87
  07-02 17:47:05.576 I/TranTele/TranPhoneInterfaceManager( 2620): TTC - onSignalStrengthsChanged
  07-02 17:47:05.577 D/TranPhoneSwitcher( 2620): getNetworkType: 4G
  07-02 17:47:05.577 I/TranPhoneSwitcher( 2620): mDefaultsign:4subid :2
  07-02 17:47:05.580 D/TranSignalStrengthComponentImpl(30413): [LTE] dbm: -87
  07-02 17:47:05.797 I/WifiNetworkQuality( 1698): current rssi is sufficient
  07-02 17:47:05.798 I/TranWifiSmartAssistantController( 1698): mNoCandidateCount : -1
  07-02 17:47:05.798 I/TranWifiSmartAssistantController( 1698): ====>>rssi :-57
  07-02 17:47:05.841 D/ULogGuard( 1342): Monitoring: 15 threads, 0 requests, 0 time-bombs; 3 guards. ResetFlags = 0x7
  07-02 17:47:05.918 I/mtkpower_client( 1080): perf_lock_rel, hdl:56026, tid:1080
  07-02 17:47:05.919 I/libPowerHal(  970): [PD] fpsgo update cmd:1408300 param:0
> 07-02 17:47:05.920 I/BufferQueueProducer( 1012): 
[SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity](BLAST)#19933](this:0xb40000731f5ba278,id:-1,api:0,p:-1,c:1012) queueBuffer: fps=12.69 
dur=1181.65 max=615.57 min=15.59
  07-02 17:47:05.927 I/BufferQueueProducer( 1012): [VDS-studio.screen.sharing:0 SINK](this:0xb40000725f6b6a38,id:-1,api:1,p:1012,c:1012) queueBuffer: 
fps=14.62 dur=1231.20 max=617.34 min=13.47
  07-02 17:47:05.928 I/hwcomposer(  935): [HWCDisplay] [Display_0 (type:1)] fps:17.476841,dur:1316.03,max:616.95,min:13.01  
  07-02 17:47:05.995 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.039837,0.000050, totalTime 0.039888 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:47:05.998 W/ProxyAndroidLoggerBackend( 5782): Too many Flogger logs received before configuration. Dropping old logs.
  07-02 17:47:06.003 I/mtkpower_client( 1080): perf_lock_acq, hdl:0, dur:30000, num:2, tid:1080
  07-02 17:47:06.005 I/mtkpower_client( 1080): ret_hdl:56027
  07-02 17:47:06.016 I/mtkpower_client( 1080): perf_lock_rel, hdl:56027, tid:1080
  07-02 17:47:06.017 I/libPowerHal(  970): [PD] fpsgo update cmd:1408300 param:0
  07-02 17:47:06.057 I/Hiber/importantScene( 1698): widget: packageName=com.facebook.katana
  07-02 17:47:06.057 I/Hiber/appStateMachine( 1698): uid:10254, pkg=com.facebook.katana  can't transition from R to F ,importantcase is : widget
  07-02 17:47:06.121 I/mtkpower_client( 1080): perf_lock_acq, hdl:0, dur:30000, num:2, tid:1080
  07-02 17:47:06.123 I/mtkpower_client( 1080): ret_hdl:56028
  07-02 17:47:06.129 I/mtkpower_client( 1080): perf_lock_rel, hdl:56028, tid:1080
  07-02 17:47:06.130 I/libPowerHal(  970): [PD] fpsgo update cmd:1408300 param:0
  07-02 17:47:06.136 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.039835,0.000080, totalTime 0.039916 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:47:06.283 I/mtkpower_client( 1080): perf_lock_acq, hdl:0, dur:30000, num:2, tid:1080
  07-02 17:47:06.283 I/mtkpower_client( 1080): ret_hdl:56029
  07-02 17:47:06.296 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.039764,0.000095, totalTime 0.039860 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:47:06.402 D/TranWifiTputMonitor( 1698): WIFI: TX: 6 RX: 19 TOTAL = 25
  07-02 17:47:06.402 D/TranWifiTputMonitor( 1698): High Tput: false, TOTAL TPUT: 25
  07-02 17:47:06.726 I/android.hardware.thermal@2.0-service.mtk(  940): fill_temperatures filterType1 name: SKIN type: SKIN throttlingStatus: NONE value: 
41.47 ret_temps size 0
  07-02 17:47:06.776 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.039994,0.000112, totalTime 0.040107 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:47:06.823 D/BufferPoolAccessor2.0(11425): bufferpool2 0xb4000072a18c9748 : 66(147307 size) total buffers - 1(1246 size) used buffers - 667/2189 
(recycle/alloc) - 1556/2188 (fetch/transfer)
  07-02 17:47:06.909 D/TriggerService( 4219): trigger service is running
  07-02 17:47:06.930 I/BufferQueueProducer( 1012): [VDS-studio.screen.sharing:0 SINK](this:0xb40000725f6b6a38,id:-1,api:1,p:1012,c:1012) queueBuffer: 
fps=40.89 dur=1002.70 max=171.42 min=10.87
  07-02 17:47:06.932 I/hwcomposer(  935): [HWCDisplay] [Display_0 (type:1)] fps:40.844650,dur:1003.80,max:171.63,min:10.33  
> 07-02 17:47:06.936 I/BufferQueueProducer( 1012): 
[SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity](BLAST)#19933](this:0xb40000731f5ba278,id:-1,api:0,p:-1,c:1012) queueBuffer: fps=41.33 
dur=1016.23 max=167.19 min=14.95
  07-02 17:47:07.028 I/mtkpower_client( 1080): perf_lock_acq, hdl:0, dur:30000, num:2, tid:1080
  07-02 17:47:07.029 I/mtkpower_client( 1080): ret_hdl:56031
  07-02 17:47:07.056 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.040094,0.000117, totalTime 0.040212 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:47:07.120 I/mtkpower_client( 1080): perf_lock_rel, hdl:56031, tid:1080
  07-02 17:47:07.121 I/libPowerHal(  970): [PD] fpsgo update cmd:1408300 param:0
  07-02 17:47:07.166 I/mtkpower_client( 1080): perf_lock_acq, hdl:0, dur:30000, num:2, tid:1080
  07-02 17:47:07.168 I/mtkpower_client( 1080): ret_hdl:56032
  07-02 17:47:07.196 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.040096,0.000086, totalTime 0.040183 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:47:07.239 I/mtkpower_client( 1080): perf_lock_rel, hdl:56032, tid:1080
  07-02 17:47:07.240 I/libPowerHal(  970): [PD] fpsgo update cmd:1408300 param:0
  07-02 17:47:07.244 I/StatusBarNetworkRateView( 2380): wifi is default. hide second network rate view. StatusBarNetworkRateView subId=2, 
isFirstSimCard=false, mLocation=QS_NEW NetworkRateState=NetworkRateState{visible=true, activeMobileDataSubId=2, totalRate=35.332, netWorkState=1, 
isAirplane=false, netRateStateBySettingGlobal=1, networkRate='35,3', networkRateUnit='KB/S'}
  07-02 17:47:07.255 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.039561,0.000043, totalTime 0.039605 > logTimeout 
0.022000 TIMEOUT!!
> 07-02 17:47:07.285 I/BufferQueueProducer( 1012): [StatusBar#97](this:0xb40000731f578a88,id:-1,api:0,p:-1,c:1012) queueBuffer: fps=0.14 dur=7192.57 
max=7192.57 min=7192.57
  07-02 17:47:07.296 D/BufferPoolAccessor2.0(11425): bufferpool2 0xb4000072a18c9748 : 66(141071 size) total buffers - 1(1745 size) used buffers - 668/2207 
(recycle/alloc) - 1573/2206 (fetch/transfer)
> 07-02 17:47:07.369 I/flutter (14808): Number of Stories Fetched: 15
  07-02 17:47:07.371 I/mtkpower_client( 1080): perf_lock_acq, hdl:0, dur:30000, num:2, tid:1080
  07-02 17:47:07.372 I/mtkpower_client( 1080): ret_hdl:56033
> 07-02 17:47:07.378 I/flutter (14808): Total stories fetched: 15
> 07-02 17:47:07.379 I/flutter (14808): nearestIds: {aceh_clone_6285ddbfd9598_0hB8mx1z1DeNR9CAzXfh, custom_banda_aceh_restaurant_demo, 
aceh_clone_6285ddbfd9598_1ZrcQ4ysrrheSVguUkFF, aceh_clone_6285ddbfd9598_1vMlKPiniUrzybKkWiS1}
> 07-02 17:47:07.380 I/flutter (14808): Filtered storyList length: 0
  07-02 17:47:07.416 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.039957,0.000042, totalTime 0.040000 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:47:07.495 I/mtkpower_client( 1080): perf_lock_rel, hdl:56033, tid:1080
  07-02 17:47:07.496 I/libPowerHal(  970): [PD] fpsgo update cmd:1408300 param:0
  07-02 17:47:07.516 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.039829,0.000046, totalTime 0.039876 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:47:07.541 I/mtkpower_client( 1080): perf_lock_acq, hdl:0, dur:30000, num:2, tid:1080
  07-02 17:47:07.542 I/mtkpower_client( 1080): ret_hdl:56034
  07-02 17:47:07.606 I/libPerfCtl(  970): xgfGetFPS pid:2380 fps:-1
  07-02 17:47:07.606 I/AppThermalMode(  970): [perfNotifyThermalState] hdl:0
  07-02 17:47:07.606 I/AppThermalMode(  970): [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: 60,fg->pid:14808
  07-02 17:47:07.606 I/AppThermalMode(  970): [perfNotifyThermalState] appThermalIdx -1:
  07-02 17:47:07.606 I/libPerfCtl(  970): xgfGetFPS pid:14808 fps:63
  07-02 17:47:07.606 I/AppThermalMode(  970): [perfNotifyThermalState] hdl:0
  07-02 17:47:07.606 I/AppThermalMode(  970): [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: 60,fg->pid:14808
  07-02 17:47:07.607 I/AppThermalMode(  970): [perfNotifyThermalState] appThermalIdx -1:
  07-02 17:47:07.812 D/LocationManagerService( 1698): network provider added registration from 1000/com.transsion.kolun.aiservice/08650566 -> 
Request[@+5s0ms BALANCED, WorkSource{1000 com.transsion.kolun.aiservice}] permissionLevel: 2 permitted: true
> 07-02 17:47:07.817 D/LocationManagerService( 1698): registration onActive from uid: 1000 package: com.transsion.kolun.aiservice
  07-02 17:47:07.829 I/mtkpower_client( 1080): perf_lock_rel, hdl:56034, tid:1080
  07-02 17:47:07.830 I/libPowerHal(  970): [PD] fpsgo update cmd:1408300 param:0
  07-02 17:47:07.831 E/ApplicationHelper( 1698): Fail to get PackageManager
  07-02 17:47:07.836 E/ApplicationHelper( 1698): Fail to get PackageManager
  07-02 17:47:07.836 D/LocationManagerService( 1698): incoming location: Location[network hAcc=100 et=+2d1h56m49s314ms vAcc=68 sAcc=??? bAcc=???]
  07-02 17:47:07.842 D/MNLD    ( 1228): mnld_nfw_mnl2agps_location_sync: ret = 51
> 07-02 17:47:07.842 D/LocationManagerService( 1698): registration onInactive from uid: 1000 package: com.transsion.kolun.aiservice
  07-02 17:47:07.842 D/agps    ( 1354): [agps][n][AGPS] [MNL] mnl2agps [153]
  07-02 17:47:07.842 D/MNLD    ( 1228): mnld_nfw_mnl2agps_location_sync: mnl2agps_location_sync success
  07-02 17:47:07.843 D/LocationManagerService( 1698): network provider removed registration from 1000/com.transsion.kolun.aiservice/08650566
  07-02 17:47:07.845 I/CacheManager( 3928):  save new data to cache location
  07-02 17:47:07.845 I/bsc     ( 3928): notifyDataChange in location, 1
  07-02 17:47:07.846 I/DataServiceImplV2( 3928): StandardDataService notifyDataChange  in 
  07-02 17:47:07.846 I/DataServiceImplV2( 3928): StandardDataService notifyDataChange  curServiceName StandardDataService type:location
  07-02 17:47:07.847 I/Kolun_AI( 3928): SystemEventSubscribe: onPublishData {"type":"location","time":1782989227844,"data":"{\"altitude\":-28.2,\"bearing\"
:0.0,\"horizontalAccuracy\":100.0,\"lat\":5.53124,\"lon\":95.32995,\"provider\":\"network\",\"speed\":0.0,\"timestamp\":1782989227833}","provider":"dc","dc
_version":2030380000,"data_version":1,"user_id":0}
  07-02 17:47:07.847 I/Kolun_AI( 3928): SystemEventSubscribe: publisher.getMatcher() location
  07-02 17:47:07.847 I/ApiInvoke1.7.1( 3928): SubscribeManager: publishData success host DataCenter#StandardDataService matcher location
  07-02 17:47:07.848 E/ApplicationHelper( 1698): Fail to get PackageManager
  07-02 17:47:07.849 W/ApiInvoke1.7.1( 3928): SubscribeBusServerImpl: onSafePublishData start ==>> publisher Publisher{channel='DataCenter', 
apiName='StandardDataService', label='location'}
  07-02 17:47:07.849 W/ApiInvoke1.7.1( 3928): SubscribeBusServerImpl: onSafePublishData, post publish data form DataCenter to {"pid": "3928","process": 
"com.transsion.kolun.aiservice","packageName": "com.transsion.kolun.aiservice","channels": 
["com.transsion.kolun.aiservice","APPService","AiEngine","GlobalGuideChannel","DataCenter"],"version": "1.7.1"} pid 3928 isPublishLocal true 
isInvalidPublisher false
  07-02 17:47:07.849 W/ApiInvoke1.7.1( 3928): ApiRequest: do publishData to remote location
  07-02 17:47:07.850 E/ApplicationHelper( 1698): Fail to get PackageManager
  07-02 17:47:07.857 I/DataServiceImplV2( 3928): getDataByIndex no data
  07-02 17:47:07.857 E/CommonDataParser( 3928): getParser failed Attempt to invoke virtual method 'java.lang.reflect.Constructor 
java.lang.Class.getConstructor(java.lang.Class[])' on a null object reference
  07-02 17:47:07.858 W/DC_ADS  ( 3928): saveAdvanceDataWithIndex :alg_poi_activity, parser 
com.transsion.kolun.aidatacenter.collect.parser.CommonDataParser$DefParser@a347db8 index 
  07-02 17:47:07.858 I/CacheManager( 3928):  save new data to cache alg_poi_activity
  07-02 17:47:07.858 I/Kolun_AI( 3928): AIEngineUtils:saveAdvanceData, success true resultCode 0 type alg_poi_activity data 
{"current_status":0,"poi_type":0,"switch_status":0,"timestamp":1782989227833}
  07-02 17:47:08.842 I/libPowerHal(  970): [PD] fpsgo update cmd:1438600 param:1000
  07-02 17:47:08.843 D/ULogGuard( 1342): Monitoring: 15 threads, 0 requests, 0 time-bombs; 3 guards. ResetFlags = 0x7
  07-02 17:47:08.843 I/libPowerHal(  970): [PD] fpsgo update cmd:1438700 param:1000
  07-02 17:47:08.910 D/TriggerService( 4219): trigger service is running
  07-02 17:47:09.406 D/TranWifiTputMonitor( 1698): WIFI: TX: 7 RX: 26 TOTAL = 33
  07-02 17:47:09.406 D/TranWifiTputMonitor( 1698): High Tput: false, TOTAL TPUT: 33
> 07-02 17:47:09.483 I/BufferQueueProducer( 1012): 
[SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity](BLAST)#19933](this:0xb40000731f5ba278,id:-1,api:0,p:-1,c:1012) queueBuffer: fps=7.07 
dur=2546.95 max=1648.50 min=15.94
  07-02 17:47:09.498 I/BufferQueueProducer( 1012): [VDS-studio.screen.sharing:0 SINK](this:0xb40000725f6b6a38,id:-1,api:1,p:1012,c:1012) queueBuffer: 
fps=7.40 dur=2568.44 max=1655.79 min=11.55
  07-02 17:47:09.500 I/hwcomposer(  935): [HWCDisplay] [Display_0 (type:1)] fps:7.398576,dur:2568.06,max:1656.36,min:11.50  
  07-02 17:47:09.501 I/FPSGO   ( 1080): fpsgo_boost_sched_idle_prefer:1
  07-02 17:47:09.501 I/mtkpower_client( 1080): perf_lock_acq, hdl:0, dur:0, num:2, tid:1080
  07-02 17:47:09.503 I/mtkpower_client( 1080): ret_hdl:56036
  07-02 17:47:09.503 I/FPSGO   ( 1080): perfLockAcq hdl:56036
  07-02 17:47:09.503 I/FPSGO   ( 1080): fpsgo_boost_sched_rate_ns:0
  07-02 17:47:09.503 I/mtkpower_client( 1080): perf_lock_acq, hdl:0, dur:0, num:12, tid:1080
  07-02 17:47:09.504 W/native  ( 5782): W0000 00:00:1782989229.503948    5913 lag_detector.cc:58] Pipeline lagging by 1.322426227s. Continue processing 
samples.
  07-02 17:47:09.504 I/mtkpower_client( 1080): ret_hdl:56037
  07-02 17:47:09.504 I/FPSGO   ( 1080): perfLockAcq hdl:56037
  07-02 17:47:09.505 I/libPowerHal(  970): cmdSetting - unknown cmd:1438500, scmd:(null) ,param_1:0
  07-02 17:47:09.505 I/libPowerHal(  970): cmdSetting - unknown cmd:1438800, scmd:(null) ,param_1:0
  07-02 17:47:09.606 I/libPerfCtl(  970): xgfGetFPS pid:2380 fps:-1
  07-02 17:47:09.606 I/AppThermalMode(  970): [perfNotifyThermalState] hdl:0
  07-02 17:47:09.606 I/AppThermalMode(  970): [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: -1,fg->pid:14808
  07-02 17:47:09.606 I/AppThermalMode(  970): [perfNotifyThermalState] appThermalIdx -1:
  07-02 17:47:09.607 I/libPerfCtl(  970): xgfGetFPS pid:14808 fps:60
  07-02 17:47:09.607 I/AppThermalMode(  970): [perfNotifyThermalState] hdl:0
  07-02 17:47:09.607 I/AppThermalMode(  970): [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: -1,fg->pid:14808
  07-02 17:47:10.697 D/TranPhoneSwitcher( 2620): getNetworkType: 4G
  07-02 17:47:10.697 I/TranPhoneSwitcher( 2620): mDefaultsign:4subid :2
  07-02 17:47:10.699 D/TranSignalStrengthComponentImpl(30413): [LTE] dbm: -86
  07-02 17:47:10.910 D/TriggerService( 4219): trigger service is running
  07-02 17:47:10.956 I/mtkpower_client( 1080): perf_lock_rel, hdl:56038, tid:1080
  07-02 17:47:10.957 I/libPowerHal(  970): [PD] fpsgo update cmd:1408300 param:0
> 07-02 17:47:10.966 I/BufferQueueProducer( 1012): 
[SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity](BLAST)#19933](this:0xb40000731f5ba278,id:-1,api:0,p:-1,c:1012) queueBuffer: fps=32.38 
dur=1482.25 max=683.18 min=14.10
  07-02 17:47:10.976 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.039620,0.000113, totalTime 0.039734 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:47:10.981 I/BufferQueueProducer( 1012): [VDS-studio.screen.sharing:0 SINK](this:0xb40000725f6b6a38,id:-1,api:1,p:1012,c:1012) queueBuffer: 
fps=32.37 dur=1483.04 max=687.07 min=10.74
  07-02 17:47:10.983 I/hwcomposer(  935): [HWCDisplay] [Display_0 (type:1)] fps:32.359177,dur:1483.35,max:687.64,min:10.69  
  07-02 17:47:10.988 I/mtkpower_client( 1080): perf_lock_acq, hdl:0, dur:30000, num:2, tid:1080
  07-02 17:47:10.989 I/mtkpower_client( 1080): ret_hdl:56039
  07-02 17:47:11.178 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.021944,0.000266, totalTime 0.022211 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:47:11.343 D/AES     ( 1698): AEEIOCTL_GET/SET_SF_STATE IOCTL,cmd= 1074294797, lParam=0. 
  07-02 17:47:11.343 D/AES     ( 1698): AEEIOCTL_RT_MON_Kick IOCTL,cmd= 2147774474, lParam=300. 
  07-02 17:47:11.469 I/mtkpower_client( 1080): perf_lock_rel, hdl:56039, tid:1080
  07-02 17:47:11.470 I/libPowerHal(  970): [PD] fpsgo update cmd:1408300 param:0
  07-02 17:47:11.520 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000002,0.019459,0.004222, totalTime 0.023683 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:47:11.596 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.039891,0.000080, totalTime 0.039972 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:47:11.607 I/libPerfCtl(  970): xgfGetFPS pid:2380 fps:-1
  07-02 17:47:11.607 I/AppThermalMode(  970): [perfNotifyThermalState] hdl:0
  07-02 17:47:11.607 I/AppThermalMode(  970): [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: 60,fg->pid:14808
  07-02 17:47:11.607 I/AppThermalMode(  970): [perfNotifyThermalState] appThermalIdx -1:
  07-02 17:47:11.607 I/libPerfCtl(  970): xgfGetFPS pid:14808 fps:58
  07-02 17:47:11.607 I/AppThermalMode(  970): [perfNotifyThermalState] hdl:0
  07-02 17:47:11.607 I/AppThermalMode(  970): [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: 60,fg->pid:14808
  07-02 17:47:11.607 I/AppThermalMode(  970): [perfNotifyThermalState] appThermalIdx -1:
  07-02 17:47:11.809 I/TranWifiSmartAssistantController( 1698): userIgnored :false isScoredCurrentNetwork :false
  07-02 17:47:11.809 I/TranWifiSmartAssistantController( 1698): mCurrentNetwork :133 SSID :"TAUFIKKOPIBATOH@WIFI.ID"
  07-02 17:47:11.812 I/WifiNetworkQuality( 1698): current rssi is sufficient
  07-02 17:47:11.812 I/TranWifiSmartAssistantController( 1698): mNoCandidateCount : -1
  07-02 17:47:11.812 I/TranWifiSmartAssistantController( 1698): ====>>rssi :-56
  07-02 17:47:11.844 D/ULogGuard( 1342): Monitoring: 15 threads, 0 requests, 0 time-bombs; 3 guards. ResetFlags = 0x7
> 07-02 17:47:11.981 I/BufferQueueProducer( 1012): 
[SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity](BLAST)#19933](this:0xb40000731f5ba278,id:-1,api:0,p:-1,c:1012) queueBuffer: fps=29.54 
dur=1015.44 max=515.98 min=15.74
  07-02 17:47:11.992 I/BufferQueueProducer( 1012): [VDS-studio.screen.sharing:0 SINK](this:0xb40000725f6b6a38,id:-1,api:1,p:1012,c:1012) queueBuffer: 
fps=29.67 dur=1011.18 max=514.41 min=13.32
  07-02 17:47:11.994 I/hwcomposer(  935): [HWCDisplay] [Display_0 (type:1)] fps:29.674051,dur:1010.98,max:514.25,min:13.47  
  07-02 17:47:12.249 I/StatusBarNetworkRateView( 2380): wifi is default. hide second network rate view. StatusBarNetworkRateView subId=2, 
isFirstSimCard=false, mLocation=QS_NEW NetworkRateState=NetworkRateState{visible=true, activeMobileDataSubId=2, totalRate=3.823, netWorkState=1, 
isAirplane=false, netRateStateBySettingGlobal=1, networkRate='3,82', networkRateUnit='KB/S'}
> 07-02 17:47:12.297 I/BufferQueueProducer( 1012): [StatusBar#97](this:0xb40000731f578a88,id:-1,api:0,p:-1,c:1012) queueBuffer: fps=0.20 dur=5011.67 
max=5011.67 min=5011.67
  07-02 17:47:12.334 I/mtkpower_client( 1080): perf_lock_acq, hdl:0, dur:30000, num:2, tid:1080
  07-02 17:47:12.336 I/mtkpower_client( 1080): ret_hdl:56040
  07-02 17:47:12.411 D/TranWifiTputMonitor( 1698): WIFI: TX: 1 RX: 4 TOTAL = 5
  07-02 17:47:12.411 D/TranWifiTputMonitor( 1698): High Tput: false, TOTAL TPUT: 5
  07-02 17:47:12.418 I/adbd    ( 1129): adbd service requested 'shell:getprop'
  07-02 17:47:12.608 I/libPerfCtl(  970): xgfGetFPS pid:2380 fps:-1
  07-02 17:47:12.608 I/AppThermalMode(  970): [perfNotifyThermalState] hdl:0
  07-02 17:47:12.608 I/AppThermalMode(  970): [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: 60,fg->pid:14808
  07-02 17:47:12.608 I/AppThermalMode(  970): [perfNotifyThermalState] appThermalIdx -1:
  07-02 17:47:12.608 I/libPerfCtl(  970): xgfGetFPS pid:14808 fps:60
  07-02 17:47:12.608 I/AppThermalMode(  970): [perfNotifyThermalState] hdl:0
  07-02 17:47:12.608 I/AppThermalMode(  970): [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: 60,fg->pid:14808
  07-02 17:47:12.608 I/AppThermalMode(  970): [perfNotifyThermalState] appThermalIdx -1:
  07-02 17:47:12.761 D/BufferPoolAccessor2.0(11425): bufferpool2 0xb4000072a18c9748 : 52(79533 size) total buffers - 1(1107 size) used buffers - 795/2345 
(recycle/alloc) - 1586/2344 (fetch/transfer)
  07-02 17:47:12.870 I/DataStorageManager( 3928): batchSaveRunnable  isBatchSaveRunning false
  07-02 17:47:12.872 I/DataStorageManager( 3928): batchSave 3
  07-02 17:47:12.889 I/mtkpower_client( 1080): perf_lock_rel, hdl:56040, tid:1080
  07-02 17:47:12.891 I/libPowerHal(  970): [PD] fpsgo update cmd:1408300 param:0
  07-02 17:47:12.912 D/TriggerService( 4219): trigger service is running
  07-02 17:47:12.921 I/mtkpower_client( 1080): perf_lock_acq, hdl:0, dur:30000, num:2, tid:1080
  07-02 17:47:12.924 I/mtkpower_client( 1080): ret_hdl:56041
  07-02 17:47:13.468 I/mtkpower_client( 1080): perf_lock_rel, hdl:56041, tid:1080
  07-02 17:47:13.470 I/libPowerHal(  970): [PD] fpsgo update cmd:1408300 param:0
> 07-02 17:47:13.479 I/BufferQueueProducer( 1012): 
[SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity](BLAST)#19933](this:0xb40000731f5ba278,id:-1,api:0,p:-1,c:1012) queueBuffer: fps=15.35 
dur=1498.32 max=582.47 min=16.03
  07-02 17:47:13.494 I/BufferQueueProducer( 1012): [VDS-studio.screen.sharing:0 SINK](this:0xb40000725f6b6a38,id:-1,api:1,p:1012,c:1012) queueBuffer: 
fps=15.31 dur=1502.00 max=585.14 min=13.88
  07-02 17:47:13.497 I/hwcomposer(  935): [HWCDisplay] [Display_0 (type:1)] fps:15.307049,dur:1502.58,max:585.53,min:13.46  
  07-02 17:47:13.608 I/libPerfCtl(  970): xgfGetFPS pid:2380 fps:-1
  07-02 17:47:13.609 I/AppThermalMode(  970): [perfNotifyThermalState] hdl:0
  07-02 17:47:13.609 I/AppThermalMode(  970): [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: 60,fg->pid:14808
  07-02 17:47:13.609 I/AppThermalMode(  970): [perfNotifyThermalState] appThermalIdx -1:
  07-02 17:47:13.609 I/libPerfCtl(  970): xgfGetFPS pid:14808 fps:57
  07-02 17:47:13.609 I/AppThermalMode(  970): [perfNotifyThermalState] hdl:0
  07-02 17:47:13.609 I/AppThermalMode(  970): [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: 60,fg->pid:14808
  07-02 17:47:13.610 I/AppThermalMode(  970): [perfNotifyThermalState] appThermalIdx -1:
  07-02 17:47:13.716 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.039604,0.000111, totalTime 0.039716 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:47:13.824 I/mtkpower_client( 1080): perf_lock_acq, hdl:0, dur:30000, num:2, tid:1080
  07-02 17:47:13.825 I/mtkpower_client( 1080): ret_hdl:56042
  07-02 17:47:14.358 D/EventHub( 1698): getevents BTN_TOUCH DOWN
  07-02 17:47:14.361 D/AppFlingMode(  970): [CheckAppFlingHint] 25 com.erbete.customer 60
  07-02 17:47:14.364 D/TextSelection(14808): onUseCache cache=false
  07-02 17:47:14.364 D/TouchMonitorProxy( 4272): handleInputEvent MotionEvent:MotionEvent { action=ACTION_DOWN, actionButton=0, id[0]=0, x[0]=102.875, 
y[0]=191.4375, toolType[0]=TOOL_TYPE_FINGER, buttonState=0, classification=NONE, metaState=0, flags=0x0, edgeFlags=0x0, pointerCount=1, historySize=0, 
eventTime=162815491, downTime=162815491, deviceId=6, source=0x1002, displayId=0, eventId=1013082750 }
  07-02 17:47:14.364 E/libPowerHal(  970): [getCPUFreq] error cid:2, nClusterNum:2
  07-02 17:47:14.364 D/TouchSliderConsumer( 4503): onInputEvent : ACTION_DOWN
  07-02 17:47:14.365 D/TouchSliderConsumer( 4503): consumeTouchEvent : 102.875 191.4375 RectF(1035.0, 294.0, 1083.0, 660.0) 
  07-02 17:47:14.608 I/AppThermalMode(  970): [perfNotifyThermalState] appThermalIdx -1:
  07-02 17:47:14.609 I/libPerfCtl(  970): xgfGetFPS pid:14808 fps:58
  07-02 17:47:14.609 I/AppThermalMode(  970): [perfNotifyThermalState] hdl:0
  07-02 17:47:14.609 I/AppThermalMode(  970): [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: 60,fg->pid:14808
  07-02 17:47:14.609 I/AppThermalMode(  970): [perfNotifyThermalState] appThermalIdx -1:
  07-02 17:47:14.609 I/mtkpower_client( 1080): perf_lock_rel, hdl:56045, tid:1080
> 07-02 17:47:14.611 I/BufferQueueProducer( 1012): 
[SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity](BLAST)#19933](this:0xb40000731f5ba278,id:-1,api:0,p:-1,c:1012) queueBuffer: fps=20.32 
dur=1131.79 max=616.04 min=12.45
  07-02 17:47:14.613 I/libPowerHal(  970): [PD] fpsgo update cmd:1408300 param:0
  07-02 17:47:14.620 I/BufferQueueProducer( 1012): [VDS-studio.screen.sharing:0 SINK](this:0xb40000725f6b6a38,id:-1,api:1,p:1012,c:1012) queueBuffer: 
fps=20.44 dur=1125.33 max=610.23 min=10.34
  07-02 17:47:14.621 I/hwcomposer(  935): [HWCDisplay] [Display_0 (type:1)] fps:21.339460,dur:1124.68,max:568.49,min:10.16  
  07-02 17:47:14.642 I/mtkpower_client( 1080): perf_lock_acq, hdl:0, dur:30000, num:2, tid:1080
  07-02 17:47:14.643 I/mtkpower_client( 1080): ret_hdl:56046
  07-02 17:47:14.656 I/mtkpower_client( 1080): perf_lock_rel, hdl:56046, tid:1080
  07-02 17:47:14.659 I/libPowerHal(  970): [PD] fpsgo update cmd:1408300 param:0
  07-02 17:47:14.715 D/WifiClientModeImpl[24001351:wlan0]( 1698): updateLinkLayerStatsRssiSpeedFrequencyCapabilities rssi=-60 TxLinkspeed=54 freq=5765 
RxLinkSpeed=54
  07-02 17:47:14.718 D/WifiDataStall( 1698): tx tput in kbps: 50000
  07-02 17:47:14.718 D/WifiDataStall( 1698): rx tput in kbps: 50000
  07-02 17:47:14.718 V/WifiConfigManager( 1698): Updating scan detail cache freq=5765 BSSID=ac:4a:56:28:fe:ee RSSI=-58 for "TAUFIKKOPIBATOH@WIFI.ID"NONE
  07-02 17:47:14.718 D/WifiThroughputPredictor( 1698):  utilization (LLS) 15 isBluetoothConnected: false final utilization: 15
  07-02 17:47:14.718 D/WifiThroughputPredictor( 1698):  BW: 0 RSSI: -60 Nss: 1 Mode: 1 symDur: 4000 snrDb 20 bitPerTone: 4500 rate: 54 throughput: 50
  07-02 17:47:14.718 D/WifiThroughputPredictor( 1698):  utilization (LLS) 15 isBluetoothConnected: false final utilization: 15
  07-02 17:47:14.718 D/WifiThroughputPredictor( 1698):  BW: 0 RSSI: -60 Nss: 1 Mode: 1 symDur: 4000 snrDb 20 bitPerTone: 4500 rate: 54 throughput: 50
  07-02 17:47:14.719 D/WifiThroughputPredictor( 1698):  utilization (LLS) 15 isBluetoothConnected: false final utilization: 15
  07-02 17:47:14.719 D/WifiThroughputPredictor( 1698):  BW: 0 RSSI: -60 Nss: 1 Mode: 1 symDur: 4000 snrDb 20 bitPerTone: 4500 rate: 54 throughput: 50
  07-02 17:47:14.719 D/WifiThroughputPredictor( 1698):  utilization (LLS) 15 isBluetoothConnected: false final utilization: 15
  07-02 17:47:14.719 D/WifiThroughputPredictor( 1698):  BW: 0 RSSI: -60 Nss: 1 Mode: 1 symDur: 4000 snrDb 20 bitPerTone: 4500 rate: 54 throughput: 50
  07-02 17:47:14.720 D/WifiScoreCard( 1698): BSSID update SIGNAL_POLL ID: 942782235 SSID: "TAUFIKKOPIBATOH@WIFI.ID", BSSID: ac:4a:56:28:fe:ee, MAC: 
02:16:3f:eb:28:01, IP: /10.226.145.77, Security type: 0, Supplicant state: COMPLETED, Wi-Fi standard: legacy, RSSI: -60, Link speed: 48Mbps, Tx Link 
speed: 48Mbps, Max Supported Tx Link speed: 54Mbps, Calculated Tx : 0Mbps, Rx Link speed: 54Mbps, Max Supported Rx Link speed: 54Mbps, Calculated Rx : 
0Mbps, Frequency: 5765MHz, Net ID: 142, Metered hint: false, score: 60, isUsable: true, CarrierMerged: false, SubscriptionId: -1, IsPrimary: 1, Trusted: 
true, Restricted: false, Ephemeral: false, OEM paid: false, OEM private: false, OSU AP: false, FQDN: <none>, Provider friendly name: <none>, Requesting 
package name: <none>"TAUFIKKOPIBATOH@WIFI.ID"openMLO Information: , Is TID-To-Link negotiation supported by the AP: false, AP MLD Address: <none>, AP MLO 
Link Id: <none>, AP MLO Affiliated links: <none>, Vendor Data: <none>
  07-02 17:47:16.610 I/libPowerHal(  970): [perfNotifyAppState] pack:com.erbete.customer, act:com.erbete.customer.MainActivity, state:5, pid:14808, 
uid:10509, fps:-1
  07-02 17:47:16.611 I/UxUtility(  970): notifyForegroundApp pack:com.erbete.customer, uid:10509
  07-02 17:47:16.611 I/TouchUtility(  970): notifyAppState error = NULL
  07-02 17:47:16.729 I/android.hardware.thermal@2.0-service.mtk(  940): fill_temperatures filterType1 name: SKIN type: SKIN throttlingStatus: NONE value: 
41.588 ret_temps size 0
  07-02 17:47:16.913 D/TriggerService( 4219): trigger service is running
  07-02 17:47:17.253 I/StatusBarNetworkRateView( 2380): wifi is default. hide second network rate view. StatusBarNetworkRateView subId=2, 
isFirstSimCard=false, mLocation=QS_NEW NetworkRateState=NetworkRateState{visible=true, activeMobileDataSubId=2, totalRate=12.813, netWorkState=1, 
isAirplane=false, netRateStateBySettingGlobal=1, networkRate='12,8', networkRateUnit='KB/S'}
> 07-02 17:47:17.292 I/BufferQueueProducer( 1012): [StatusBar#97](this:0xb40000731f578a88,id:-1,api:0,p:-1,c:1012) queueBuffer: fps=0.20 dur=4994.80 
max=4994.80 min=4994.80
  07-02 17:47:17.303 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.026694,0.000130, totalTime 0.026825 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:47:17.308 I/BufferQueueProducer( 1012): [VDS-studio.screen.sharing:0 SINK](this:0xb40000725f6b6a38,id:-1,api:1,p:1012,c:1012) queueBuffer: 
fps=4.09 dur=2687.84 max=1900.79 min=14.03
  07-02 17:47:17.310 I/hwcomposer(  935): [HWCDisplay] [Display_0 (type:1)] fps:4.091373,dur:2688.58,max:1901.61,min:13.70  
  07-02 17:47:17.610 I/libPerfCtl(  970): xgfGetFPS pid:2380 fps:-1
  07-02 17:47:17.610 I/AppThermalMode(  970): [perfNotifyThermalState] hdl:0
  07-02 17:47:17.610 I/AppThermalMode(  970): [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: -1,fg->pid:14808
  07-02 17:47:17.610 I/AppThermalMode(  970): [perfNotifyThermalState] appThermalIdx -1:
  07-02 17:47:17.610 I/libPerfCtl(  970): xgfGetFPS pid:14808 fps:-1
  07-02 17:47:17.610 I/AppThermalMode(  970): [perfNotifyThermalState] hdl:0
  07-02 17:47:17.610 I/AppThermalMode(  970): [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: -1,fg->pid:14808
  07-02 17:47:17.610 I/AppThermalMode(  970): [perfNotifyThermalState] appThermalIdx -1:
  07-02 17:47:17.696 I/DisplayDeviceRepository( 1698): Display device changed: DisplayDeviceInfo{"Layar Bawaan": uniqueId="local:0", 1080 x 2436, modeId 
2, renderFrameRate 60.000004, defaultModeId 1, userPreferredModeId -1, supportedModes [{id=1, width=1080, height=2436, fps=120.00001, vsync=120.00001, 
synthetic=false, alternativeRefreshRates=[60.0], supportedHdrTypes=[]}, {id=2, width=1080, height=2436, fps=60.0, vsync=60.0, synthetic=false, 
alternativeRefreshRates=[120.00001], supportedHdrTypes=[]}], colorMode 0, supportedColorModes [0, 7, 9], hdrCapabilities 
HdrCapabilities{mSupportedHdrTypes=[], mMaxLuminance=500.0, mMaxAverageLuminance=500.0, mMinLuminance=0.0}, allmSupported false, gameContentTypeSupported 
false, density 480, 392.839 x 392.828 dpi, appVsyncOff 2400001, presDeadline 28600000, cutout DisplayCutout{insets=Rect(0, 108 - 0, 0) 
waterfall=Insets{left=0, top=0, right=0, bottom=0} boundingRect={Bounds=[Rect(0, 0 - 0, 0), Rect(468, 0 - 612, 108), Rect(0, 0 - 0, 0), Rect(0, 0 - 0, 
0)]} cutoutPathParserInfo={CutoutPathParserInfo{displayWidth=1080 displayHeight=2436 physicalDisplayWidth=1080 physicalDisplayHeight=2436 density={3.0} 
cutoutSpec={M -24,0 L -24,36 L 24,36 L 24,0 Z @dp} rotation={0} scale={1.0} physicalPixelDisplaySizeRatio={1.0}}} sideOverrides={}}, touch INTERNAL, 
rotation 0, type INTERNAL, address {port=0}, deviceProductInfo null, state ON, committedState ON, frameRateOverride {uid=1000 frameRateHz=60.0} {uid=10159 
frameRateHz=60.0} {uid=10509 frameRateHz=60.0} , brightnessMinimum 0.0, brightnessMaximum 1.0, brightnessDefault 0.2, hdrSdrRatio NaN, 
FLAG_ALLOWED_TO_BE_DEFAULT_DISPLAY, FLAG_ROTATES_WITH_CONTENT, FLAG_SECURE, FLAG_SUPPORTS_PROTECTED_BUFFERS, FLAG_TRUSTED, installOrientation 0, 
displayShape DisplayShape{ spec=596679847 displayWidth=1080 displayHeight=2436 physicalPixelDisplaySizeRatio=1.0 rotation=0 offsetX=0 offsetY=0 scale=1.0}}
  07-02 17:47:17.700 I/Griffin/DeviceState( 1698): virtualDisplayPackageName :{com.android.shell=2000}
  07-02 17:47:17.736 D/WifiClientModeImpl[24001351:wlan0]( 1698): updateLinkLayerStatsRssiSpeedFrequencyCapabilities rssi=-59 TxLinkspeed=54 freq=5765 
RxLinkSpeed=54
  07-02 17:47:17.740 D/WifiDataStall( 1698): tx tput in kbps: 50000
  07-02 17:47:17.741 D/WifiDataStall( 1698): rx tput in kbps: 50000
  07-02 17:47:17.742 V/WifiConfigManager( 1698): Updating scan detail cache freq=5765 BSSID=ac:4a:56:28:fe:ee RSSI=-58 for "TAUFIKKOPIBATOH@WIFI.ID"NONE
  07-02 17:47:17.743 D/WifiThroughputPredictor( 1698):  utilization (LLS) 15 isBluetoothConnected: false final utilization: 15
  07-02 17:47:17.743 I/TranTele/TranPhoneInterfaceManager( 2620): [onReceive] action: android.net.wifi.RSSI_CHANGED
  07-02 17:47:17.743 D/WifiThroughputPredictor( 1698):  BW: 0 RSSI: -59 Nss: 1 Mode: 1 symDur: 4000 snrDb 21 bitPerTone: 4500 rate: 54 throughput: 50
  07-02 17:47:21.522 I/DisplayDeviceRepository( 1698): Display device changed: DisplayDeviceInfo{"Layar Bawaan": uniqueId="local:0", 1080 x 2436, modeId 
2, renderFrameRate 60.000004, defaultModeId 1, userPreferredModeId -1, supportedModes [{id=1, width=1080, height=2436, fps=120.00001, vsync=120.00001, 
synthetic=false, alternativeRefreshRates=[60.0], supportedHdrTypes=[]}, {id=2, width=1080, height=2436, fps=60.0, vsync=60.0, synthetic=false, 
alternativeRefreshRates=[120.00001], supportedHdrTypes=[]}], colorMode 0, supportedColorModes [0, 7, 9], hdrCapabilities 
HdrCapabilities{mSupportedHdrTypes=[], mMaxLuminance=500.0, mMaxAverageLuminance=500.0, mMinLuminance=0.0}, allmSupported false, gameContentTypeSupported 
false, density 480, 392.839 x 392.828 dpi, appVsyncOff 2400001, presDeadline 28600000, cutout DisplayCutout{insets=Rect(0, 108 - 0, 0) 
waterfall=Insets{left=0, top=0, right=0, bottom=0} boundingRect={Bounds=[Rect(0, 0 - 0, 0), Rect(468, 0 - 612, 108), Rect(0, 0 - 0, 0), Rect(0, 0 - 0, 
0)]} cutoutPathParserInfo={CutoutPathParserInfo{displayWidth=1080 displayHeight=2436 physicalDisplayWidth=1080 physicalDisplayHeight=2436 density={3.0} 
cutoutSpec={M -24,0 L -24,36 L 24,36 L 24,0 Z @dp} rotation={0} scale={1.0} physicalPixelDisplaySizeRatio={1.0}}} sideOverrides={}}, touch INTERNAL, 
rotation 0, type INTERNAL, address {port=0}, deviceProductInfo null, state ON, committedState ON, frameRateOverride {uid=1000 frameRateHz=60.0} {uid=10509 
frameRateHz=60.0} , brightnessMinimum 0.0, brightnessMaximum 1.0, brightnessDefault 0.2, hdrSdrRatio NaN, FLAG_ALLOWED_TO_BE_DEFAULT_DISPLAY, 
FLAG_ROTATES_WITH_CONTENT, FLAG_SECURE, FLAG_SUPPORTS_PROTECTED_BUFFERS, FLAG_TRUSTED, installOrientation 0, displayShape DisplayShape{ spec=596679847 
displayWidth=1080 displayHeight=2436 physicalPixelDisplaySizeRatio=1.0 rotation=0 offsetX=0 offsetY=0 scale=1.0}}
  07-02 17:47:21.522 I/hwcomposer(  935): [HWCDisplay] [Display_0 (type:1)] fps:0.474833,dur:4212.01,max:3826.81,min:385.19  
  07-02 17:47:21.524 I/Griffin/DeviceState( 1698): virtualDisplayPackageName :{com.android.shell=2000}
  07-02 17:47:21.535 I/libPowerHal(  970): [PD] MTKPOWER_HINT_APP_TOUCH update cmd:3408b00 param:0
  07-02 17:47:21.536 I/ScreenTouchCollector( 3928): resetTouchPara:reason= InputEvent ACTION_UP or ACTION_CANCEL
  07-02 17:47:21.537 D/TouchMonitorProxy( 4272): handleInputEvent MotionEvent:MotionEvent { action=ACTION_UP, actionButton=0, id[0]=0, x[0]=938.875, 
y[0]=1049.5, toolType[0]=TOOL_TYPE_FINGER, buttonState=0, classification=NONE, metaState=0, flags=0x0, edgeFlags=0x0, pointerCount=1, historySize=0, 
eventTime=162822668, downTime=162822621, deviceId=6, source=0x1002, displayId=0, eventId=160607450 }
> 07-02 17:47:21.570 I/BufferQueueProducer( 1012): 
[SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity](BLAST)#19933](this:0xb40000731f5ba278,id:-1,api:0,p:-1,c:1012) queueBuffer: fps=1.58 
dur=6958.65 max=6175.96 min=16.13
  07-02 17:47:21.575 I/BufferQueueProducer( 1012): [VDS-studio.screen.sharing:0 SINK](this:0xb40000725f6b6a38,id:-1,api:1,p:1012,c:1012) queueBuffer: 
fps=0.23 dur=4267.85 max=4267.85 min=4267.85
  07-02 17:47:21.576 I/FPSGO   ( 1080): fpsgo_boost_sched_idle_prefer:1
  07-02 17:47:21.576 I/mtkpower_client( 1080): perf_lock_acq, hdl:0, dur:0, num:2, tid:1080
  07-02 17:47:21.577 I/libPowerHal(  970): [setClusterFreq] mtkpower@1.0-se: sysfs_freq set cpu freq: -1 -1 -1 -1 
  07-02 17:47:21.577 I/libPowerHal(  970): [PD] mtkpower@1.0-se update cmd:1408300 param:0
  07-02 17:47:21.578 I/mtkpower_client( 1080): ret_hdl:56053
  07-02 17:47:21.579 I/FPSGO   ( 1080): perfLockAcq hdl:56053
  07-02 17:47:21.579 I/FPSGO   ( 1080): fpsgo_boost_sched_rate_ns:0
  07-02 17:47:21.579 I/mtkpower_client( 1080): perf_lock_acq, hdl:0, dur:0, num:12, tid:1080
  07-02 17:47:21.580 I/mtkpower_client( 1080): ret_hdl:56054
  07-02 17:47:21.580 I/FPSGO   ( 1080): perfLockAcq hdl:56054
  07-02 17:47:21.581 I/libPowerHal(  970): cmdSetting - unknown cmd:1438500, scmd:(null) ,param_1:0
  07-02 17:47:21.581 I/libPowerHal(  970): cmdSetting - unknown cmd:1438800, scmd:(null) ,param_1:0
  07-02 17:47:21.611 I/libPerfCtl(  970): xgfGetFPS pid:2380 fps:-1
  07-02 17:47:21.611 I/AppThermalMode(  970): [perfNotifyThermalState] hdl:0
  07-02 17:47:21.611 I/AppThermalMode(  970): [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: -1,fg->pid:14808
  07-02 17:47:21.611 I/AppThermalMode(  970): [perfNotifyThermalState] appThermalIdx -1:
  07-02 17:47:21.611 I/libPerfCtl(  970): xgfGetFPS pid:14808 fps:-1
  07-02 17:47:21.611 I/AppThermalMode(  970): [perfNotifyThermalState] hdl:0
  07-02 17:47:21.611 I/AppThermalMode(  970): [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: -1,fg->pid:14808
  07-02 17:47:21.611 I/AppThermalMode(  970): [perfNotifyThermalState] appThermalIdx -1:
  07-02 17:47:21.716 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.039844,0.000067, totalTime 0.039911 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:47:21.909 D/BufferPoolAccessor2.0(11425): bufferpool2 0xb4000072a18c9748 : 66(368621 size) total buffers - 1(1139 size) used buffers - 836/2437 
(recycle/alloc) - 1638/2436 (fetch/transfer)
  07-02 17:47:22.255 D/BufferPoolAccessor2.0(11425): bufferpool2 0xb4000072a18c9748 : 66(367623 size) total buffers - 1(2848 size) used buffers - 840/2458 
(recycle/alloc) - 1655/2457 (fetch/transfer)
  07-02 17:47:22.255 I/StatusBarNetworkRateView( 2380): wifi is default. hide second network rate view. StatusBarNetworkRateView subId=2, 
isFirstSimCard=false, mLocation=QS_NEW NetworkRateState=NetworkRateState{visible=true, activeMobileDataSubId=2, totalRate=0.0, netWorkState=1, 
isAirplane=false, netRateStateBySettingGlobal=1, networkRate='0,00', networkRateUnit='KB/S'}
  07-02 17:47:22.265 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.029048,0.000092, totalTime 0.029141 > logTimeout 
0.022000 TIMEOUT!!
> 07-02 17:47:22.303 I/BufferQueueProducer( 1012): [StatusBar#97](this:0xb40000731f578a88,id:-1,api:0,p:-1,c:1012) queueBuffer: fps=0.20 dur=5010.95 
max=5010.95 min=5010.95
  07-02 17:47:22.421 I/mtkpower_client( 1080): perf_lock_acq, hdl:0, dur:30000, num:2, tid:1080
  07-02 17:47:22.423 I/mtkpower_client( 1080): ret_hdl:56055
  07-02 17:47:22.611 I/libPerfCtl(  970): xgfGetFPS pid:2380 fps:-1
  07-02 17:47:22.611 I/AppThermalMode(  970): [perfNotifyThermalState] hdl:0
  07-02 17:47:22.611 I/AppThermalMode(  970): [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: -1,fg->pid:14808
  07-02 17:47:22.611 I/AppThermalMode(  970): [perfNotifyThermalState] appThermalIdx -1:
  07-02 17:47:22.611 I/libPerfCtl(  970): xgfGetFPS pid:14808 fps:60
  07-02 17:47:22.612 I/AppThermalMode(  970): [perfNotifyThermalState] hdl:0
  07-02 17:47:22.612 I/AppThermalMode(  970): [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: -1,fg->pid:14808
  07-02 17:47:22.612 I/AppThermalMode(  970): [perfNotifyThermalState] appThermalIdx -1:
  07-02 17:47:22.612 I/libPowerHal(  970): [updateFPS] pid(14808) : -1 => 60
  07-02 17:47:22.612 I/libPowerHal(  970): [perfNotifyAppState] pack:com.erbete.customer, act:com.erbete.customer.MainActivity, state:5, pid:14808, 
uid:10509, fps:60
  07-02 17:47:22.613 I/UxUtility(  970): notifyForegroundApp pack:com.erbete.customer, uid:10509
  07-02 17:47:22.613 I/TouchUtility(  970): notifyAppState error = NULL
  07-02 17:47:22.648 D/CoreBackPreview( 1698): Window{ac87882 u0 com.erbete.customer/com.erbete.customer.MainActivity}: Setting back callback 
OnBackInvokedCallbackInfo{mCallback=android.window.IOnBackInvokedCallback$Stub$Proxy@101b470, mPriority=0, mIsAnimationCallback=true}
  07-02 17:47:22.650 I/mtkpower_client( 1080): perf_lock_rel, hdl:56055, tid:1080
  07-02 17:47:22.651 I/libPowerHal(  970): [PD] fpsgo update cmd:1408300 param:0
> 07-02 17:47:22.652 I/BufferQueueProducer( 1012): 
[SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity](BLAST)#19933](this:0xb40000731f5ba278,id:-1,api:0,p:-1,c:1012) queueBuffer: fps=46.19 
dur=1082.57 max=249.72 min=14.82
  07-02 17:47:22.663 I/BufferQueueProducer( 1012): [VDS-studio.screen.sharing:0 SINK](this:0xb40000725f6b6a38,id:-1,api:1,p:1012,c:1012) queueBuffer: 
fps=45.99 dur=1087.12 max=247.23 min=12.04
  07-02 17:47:22.664 I/hwcomposer(  935): [HWCDisplay] [Display_0 (type:1)] fps:44.641823,dur:1142.43,max:247.33,min:11.90  
  07-02 17:47:22.785 V/Hiber/hiber( 1698): unfreeze from hiber: (4,-1,-1,-1,10257), rpcName: PKG, code: -1, reason:packet
  07-02 17:47:22.787 I/Choreographer(16756): Skipped 1423 frames!  The application may be doing too much work on its main thread.
  07-02 17:47:22.790 I/Hiber/stateManager( 1698): unfreeze uid: 10257 com.instagram.android pids:[16756]  reason:packet   cpninfo:TRANSACTION_-1 
costTime=4ms ,last freeze 23s ago
  07-02 17:47:22.790 I/Hiber/appStateMachine( 1698): uid=10257, pkg=com.instagram.android, transition from Frozen to Running, reason=packet
  07-02 17:47:22.790 I/Hiber/appStateMachine( 1698): uid:10257 exit FrozenState
  07-02 17:47:22.790 I/Hiber/proxyManager( 1698): up_service: 10257
  07-02 17:47:22.790 I/Hiber/proxyManager( 1698): un_job: 10257
  07-02 17:47:22.790 D/Hiber/JobExtImpl( 1698): un_job=JobStatus{c439f4a androidx.work.systemjobscheduler:u0a257/224386 
@androidx.work.systemjobscheduler@com.instagram.android/androidx.work.impl.background.systemjob.SystemJobService u=0 s=10257 TIME=+13m29s782ms:none NET 
satisfied:0x13600000 unsatisfied:0x80000000}for uid=10257
  07-02 17:47:22.791 D/Hiber/proxyWakeLock( 1698): remove uid: 10257 wiht all pids from wakelockUidInfo list
  07-02 17:47:22.791 D/Hiber/JobExtImpl( 1698): un_job=JobStatus{139ea0d androidx.work.systemjobscheduler:u0a257/224365 
@androidx.work.systemjobscheduler@com.instagram.android/androidx.work.impl.background.systemjob.SystemJobService u=0 s=10257 TIME=+23h28m26s740ms:none NET 
satisfied:0x13600000 unsatisfied:0x80000000}for uid=10257
  07-02 17:47:22.791 D/TranSignalStrengthComponentImpl(16756): [LTE] dbm: -85
  07-02 17:47:22.792 D/Hiber/JobExtImpl( 1698): un_job=JobStatus{8801d1 androidx.work.systemjobscheduler:u0a257/224341 
@androidx.work.systemjobscheduler@com.instagram.android/androidx.work.impl.background.systemjob.SystemJobService u=0 s=10257 TIME=+23h28m25s125ms:none NET 
satisfied:0x13600000 unsatisfied:0x80000000}for uid=10257
  07-02 17:47:22.792 D/Hiber/JobExtImpl( 1698): unProxyJobs leave, uid=10257 discard=false
  07-02 17:47:22.792 D/Hiber/alarmManagerServiceExtImpl( 1698): unproxyAlarms leave, uid=10257, packageName=null
  07-02 17:47:22.792 I/Hiber/proxyManager( 1698): up_sensor: uid=10257, pkgName=com.instagram.android
  07-02 17:47:22.795 D/TranSignalStrengthComponentImpl(16756): [LTE] dbm: -87
  07-02 17:47:22.795 D/TranSignalStrengthComponentImpl(16756): [LTE] dbm: -86
  07-02 17:47:22.796 D/TranSignalStrengthComponentImpl(16756): [LTE] dbm: -87
  07-02 17:47:22.956 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.039495,0.000134, totalTime 0.039631 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:47:23.071 D/BufferPoolAccessor2.0(11425): bufferpool2 0xb4000072a18c9748 : 66(241823 size) total buffers - 1(3187 size) used buffers - 841/2491 
(recycle/alloc) - 1687/2490 (fetch/transfer)
  07-02 17:47:23.081 I/mtkpower_client( 1080): perf_lock_acq, hdl:0, dur:30000, num:2, tid:1080
  07-02 17:47:23.082 I/mtkpower_client( 1080): ret_hdl:56056
  07-02 17:47:23.082 I/mtkpower_client( 1080): perf_lock_rel, hdl:56056, tid:1080
  07-02 17:47:23.084 I/libPowerHal(  970): [PD] fpsgo update cmd:1408300 param:0
> 07-02 17:47:23.152 I/flutter (14808): RESTAURANT_VENDOR_DEBUG: event_count=3
> 07-02 17:47:23.152 I/flutter (14808): RESTAURANT_VENDOR_DEBUG: allNearest_count=3
> 07-02 17:47:23.152 I/flutter (14808): RESTAURANT_VENDOR_DEBUG: newArrival_count=3
> 07-02 17:47:23.152 I/flutter (14808): RESTAURANT_VENDOR_DEBUG: popular_count=3
> 07-02 17:47:23.152 I/flutter (14808): RESTAURANT_VENDOR_DEBUG_ITEM: id=aceh_clone_6319dc53314ee_1BlB62hfbg7mX0MTIUeo title=D-Mart section=6319dc53314ee 
zone=q8OOxNm1zgyVqggkCibX category=[]
> 07-02 17:47:23.152 I/flutter (14808): RESTAURANT_VENDOR_DEBUG_ITEM: id=aceh_clone_6319dc53314ee_07RFZCxogqVjkbVTt9HE title=Food Grocery store 
section=6319dc53314ee zone=q8OOxNm1zgyVqggkCibX category=[]
> 07-02 17:47:23.152 I/flutter (14808): RESTAURANT_VENDOR_DEBUG_ITEM: id=aceh_clone_6319dc53314ee_10KPhdPgfOUpkHtzT3oS title=Simo Market 
section=6319dc53314ee zone=q8OOxNm1zgyVqggkCibX category=[]
  07-02 17:47:23.386 D/BufferPoolAccessor2.0(11425): bufferpool2 0xb4000072a18c9748 : 66(250671 size) total buffers - 1(3177 size) used buffers - 842/2509 
(recycle/alloc) - 1704/2508 (fetch/transfer)
  07-02 17:47:23.611 I/libPerfCtl(  970): xgfGetFPS pid:2380 fps:-1
  07-02 17:47:23.612 I/AppThermalMode(  970): [perfNotifyThermalState] hdl:0
  07-02 17:47:23.612 I/AppThermalMode(  970): [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: 60,fg->pid:14808
  07-02 17:47:23.612 I/AppThermalMode(  970): [perfNotifyThermalState] appThermalIdx -1:
  07-02 17:47:23.612 I/libPerfCtl(  970): xgfGetFPS pid:14808 fps:55
  07-02 17:47:23.612 I/AppThermalMode(  970): [perfNotifyThermalState] hdl:0
  07-02 17:47:23.612 I/AppThermalMode(  970): [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: 60,fg->pid:14808
  07-02 17:47:23.612 I/AppThermalMode(  970): [perfNotifyThermalState] appThermalIdx -1:
> 07-02 17:47:23.668 I/BufferQueueProducer( 1012): 
[SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity](BLAST)#19933](this:0xb40000731f5ba278,id:-1,api:0,p:-1,c:1012) queueBuffer: fps=55.15 
dur=1015.44 max=33.79 min=15.82
  07-02 17:47:23.676 I/BufferQueueProducer( 1012): [VDS-studio.screen.sharing:0 SINK](this:0xb40000725f6b6a38,id:-1,api:1,p:1012,c:1012) queueBuffer: 
fps=55.23 dur=1013.89 max=36.84 min=12.92
  07-02 17:47:23.678 I/hwcomposer(  935): [HWCDisplay] [Display_0 (type:1)] fps:55.252674,dur:1013.53,max:37.08,min:12.94  
  07-02 17:47:23.724 D/BufferPoolAccessor2.0(11425): bufferpool2 0xb4000072a18c9748 : 66(274198 size) total buffers - 1(2482 size) used buffers - 844/2528 
(recycle/alloc) - 1721/2527 (fetch/transfer)
  07-02 17:47:23.786 D/WifiClientModeImpl[24001351:wlan0]( 1698): updateLinkLayerStatsRssiSpeedFrequencyCapabilities rssi=-57 TxLinkspeed=54 freq=5765 
RxLinkSpeed=54
  07-02 17:47:23.789 D/WifiDataStall( 1698): tx tput in kbps: 50000
  07-02 17:47:23.789 D/WifiDataStall( 1698): rx tput in kbps: 50000
  07-02 17:47:23.789 V/WifiConfigManager( 1698): Updating scan detail cache freq=5765 BSSID=ac:4a:56:28:fe:ee RSSI=-57 for "TAUFIKKOPIBATOH@WIFI.ID"NONE
  07-02 17:47:23.790 D/WifiThroughputPredictor( 1698):  utilization (LLS) 15 isBluetoothConnected: false final utilization: 15
  07-02 17:47:23.790 D/WifiThroughputPredictor( 1698):  BW: 0 RSSI: -57 Nss: 1 Mode: 1 symDur: 4000 snrDb 23 bitPerTone: 4500 rate: 54 throughput: 50
  07-02 17:47:23.790 D/WifiThroughputPredictor( 1698):  utilization (LLS) 15 isBluetoothConnected: false final utilization: 15
  07-02 17:47:23.790 D/WifiThroughputPredictor( 1698):  BW: 0 RSSI: -57 Nss: 1 Mode: 1 symDur: 4000 snrDb 23 bitPerTone: 4500 rate: 54 throughput: 50
  07-02 17:47:23.791 D/WifiThroughputPredictor( 1698):  utilization (LLS) 15 isBluetoothConnected: false final utilization: 15
  07-02 17:47:23.791 D/WifiThroughputPredictor( 1698):  BW: 0 RSSI: -57 Nss: 1 Mode: 1 symDur: 4000 snrDb 23 bitPerTone: 4500 rate: 54 throughput: 50
  07-02 17:47:23.791 D/WifiThroughputPredictor( 1698):  utilization (LLS) 15 isBluetoothConnected: false final utilization: 15
  07-02 17:47:23.791 D/WifiThroughputPredictor( 1698):  BW: 0 RSSI: -57 Nss: 1 Mode: 1 symDur: 4000 snrDb 23 bitPerTone: 4500 rate: 54 throughput: 50
  07-02 17:47:23.792 I/TranTele/TranPhoneInterfaceManager( 2620): [onReceive] action: android.net.wifi.RSSI_CHANGED
  07-02 17:47:23.792 D/WifiScoreCard( 1698): BSSID update SIGNAL_POLL ID: 942782235 SSID: "TAUFIKKOPIBATOH@WIFI.ID", BSSID: ac:4a:56:28:fe:ee, MAC: 
02:16:3f:eb:28:01, IP: /10.226.145.77, Security type: 0, Supplicant state: COMPLETED, Wi-Fi standard: legacy, RSSI: -57, Link speed: 48Mbps, Tx Link 
speed: 48Mbps, Max Supported Tx Link speed: 54Mbps, Calculated Tx : 0Mbps, Rx Link speed: 54Mbps, Max Supported Rx Link speed: 54Mbps, Calculated Rx : 
0Mbps, Frequency: 5765MHz, Net ID: 142, Metered hint: false, score: 60, isUsable: true, CarrierMerged: false, SubscriptionId: -1, IsPrimary: 1, Trusted: 
true, Restricted: false, Ephemeral: false, OEM paid: false, OEM private: false, OSU AP: false, FQDN: <none>, Provider friendly name: <none>, Requesting 
package name: <none>"TAUFIKKOPIBATOH@WIFI.ID"openMLO Information: , Is TID-To-Link negotiation supported by the AP: false, AP MLD Address: <none>, AP MLO 
Link Id: <none>, AP MLO Affiliated links: <none>, Vendor Data: <none>
  07-02 17:47:23.793 D/WifiScoreCard( 1698): txRate: 41 txSpeed: 48
  07-02 17:47:23.793 I/WifiService( 1698): getConnectionInfo uid=1001
  07-02 17:47:23.793 D/WifiScoreCard( 1698): network update SIGNAL_POLL "TAUFIKKOPIBATOH@WIFI.ID" ID: 42486102 RSSI -57 txSpeed 48
  07-02 17:47:24.612 I/AppThermalMode(  970): [perfNotifyThermalState] appThermalIdx -1:
  07-02 17:47:24.612 I/libPerfCtl(  970): xgfGetFPS pid:14808 fps:53
  07-02 17:47:24.612 I/AppThermalMode(  970): [perfNotifyThermalState] hdl:0
  07-02 17:47:24.612 I/AppThermalMode(  970): [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: 60,fg->pid:14808
  07-02 17:47:24.612 I/AppThermalMode(  970): [perfNotifyThermalState] appThermalIdx -1:
  07-02 17:47:24.656 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.039645,0.000055, totalTime 0.039701 > logTimeout 
0.022000 TIMEOUT!!
> 07-02 17:47:24.683 I/BufferQueueProducer( 1012): 
[SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity](BLAST)#19933](this:0xb40000731f5ba278,id:-1,api:0,p:-1,c:1012) queueBuffer: fps=42.35 
dur=1015.35 max=216.51 min=14.65
  07-02 17:47:24.689 I/BufferQueueProducer( 1012): [VDS-studio.screen.sharing:0 SINK](this:0xb40000725f6b6a38,id:-1,api:1,p:1012,c:1012) queueBuffer: 
fps=42.46 dur=1012.79 max=219.51 min=10.93
  07-02 17:47:24.690 I/hwcomposer(  935): [HWCDisplay] [Display_0 (type:1)] fps:42.477646,dur:1012.30,max:218.96,min:10.64  
  07-02 17:47:24.774 I/DisplayDeviceRepository( 1698): Display device changed: DisplayDeviceInfo{"Layar Bawaan": uniqueId="local:0", 1080 x 2436, modeId 
2, renderFrameRate 60.000004, defaultModeId 1, userPreferredModeId -1, supportedModes [{id=1, width=1080, height=2436, fps=120.00001, vsync=120.00001, 
synthetic=false, alternativeRefreshRates=[60.0], supportedHdrTypes=[]}, {id=2, width=1080, height=2436, fps=60.0, vsync=60.0, synthetic=false, 
alternativeRefreshRates=[120.00001], supportedHdrTypes=[]}], colorMode 0, supportedColorModes [0, 7, 9], hdrCapabilities 
HdrCapabilities{mSupportedHdrTypes=[], mMaxLuminance=500.0, mMaxAverageLuminance=500.0, mMinLuminance=0.0}, allmSupported false, gameContentTypeSupported 
false, density 480, 392.839 x 392.828 dpi, appVsyncOff 2400001, presDeadline 28600000, cutout DisplayCutout{insets=Rect(0, 108 - 0, 0) 
waterfall=Insets{left=0, top=0, right=0, bottom=0} boundingRect={Bounds=[Rect(0, 0 - 0, 0), Rect(468, 0 - 612, 108), Rect(0, 0 - 0, 0), Rect(0, 0 - 0, 
0)]} cutoutPathParserInfo={CutoutPathParserInfo{displayWidth=1080 displayHeight=2436 physicalDisplayWidth=1080 physicalDisplayHeight=2436 density={3.0} 
cutoutSpec={M -24,0 L -24,36 L 24,36 L 24,0 Z @dp} rotation={0} scale={1.0} physicalPixelDisplaySizeRatio={1.0}}} sideOverrides={}}, touch INTERNAL, 
rotation 0, type INTERNAL, address {port=0}, deviceProductInfo null, state ON, committedState ON, frameRateOverride {uid=1000 frameRateHz=60.0} {uid=10159 
frameRateHz=60.0} {uid=10509 frameRateHz=60.0} , brightnessMinimum 0.0, brightnessMaximum 1.0, brightnessDefault 0.2, hdrSdrRatio NaN, 
FLAG_ALLOWED_TO_BE_DEFAULT_DISPLAY, FLAG_ROTATES_WITH_CONTENT, FLAG_SECURE, FLAG_SUPPORTS_PROTECTED_BUFFERS, FLAG_TRUSTED, installOrientation 0, 
displayShape DisplayShape{ spec=596679847 displayWidth=1080 displayHeight=2436 physicalPixelDisplaySizeRatio=1.0 rotation=0 offsetX=0 offsetY=0 scale=1.0}}
  07-02 17:47:24.778 I/Griffin/DeviceState( 1698): virtualDisplayPackageName :{com.android.shell=2000}
  07-02 17:47:24.843 I/mtkpower_client( 1080): perf_lock_acq, hdl:0, dur:30000, num:2, tid:1080
  07-02 17:47:24.845 I/mtkpower_client( 1080): ret_hdl:56060
  07-02 17:47:24.856 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.039924,0.000058, totalTime 0.039983 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:47:24.889 W/erbete.customer(14808): ApkAssets: Deleting an ApkAssets object '<empty> and 
/data/app/~~TfisHYfad2p3ewQl9UBnpg==/com.google.android.marvin.talkback-M5lFtKU_ErW3v9Nh5S-imA==/base.apk' with 1 weak references
  07-02 17:47:24.890 W/erbete.customer(14808): ApkAssets: Deleting an ApkAssets object '<empty> and 
/data/app/~~TfisHYfad2p3ewQl9UBnpg==/com.google.android.marvin.talkback-M5lFtKU_ErW3v9Nh5S-imA==/split_config.arm64_v8a.apk' with 1 weak references
  07-02 17:47:24.890 W/erbete.customer(14808): ApkAssets: Deleting an ApkAssets object '<empty> and /system_ext/app/MasterOfLanguage/MasterOfLanguage.apk' 
with 1 weak references
  07-02 17:47:24.891 W/erbete.customer(14808): ApkAssets: Deleting an ApkAssets object '<empty> and /tr_preload/operator/app/Notepad/Notepad.apk' with 1 
weak references
  07-02 17:47:24.891 W/erbete.customer(14808): ApkAssets: Deleting an ApkAssets object '<empty> and 
/data/app/~~bGqm-8FfB71Jb_QvIY9YDw==/ai.x.grok-ShNb-Q4YrSfZT9jDj_Dyhw==/base.apk' with 1 weak references
  07-02 17:47:24.891 W/erbete.customer(14808): ApkAssets: Deleting an ApkAssets object '<empty> and 
/data/app/~~bGqm-8FfB71Jb_QvIY9YDw==/ai.x.grok-ShNb-Q4YrSfZT9jDj_Dyhw==/split_config.arm64_v8a.apk' with 1 weak references
  07-02 17:47:24.891 W/erbete.customer(14808): ApkAssets: Deleting an ApkAssets object '<empty> and 
/data/app/~~bGqm-8FfB71Jb_QvIY9YDw==/ai.x.grok-ShNb-Q4YrSfZT9jDj_Dyhw==/split_config.in.apk' with 1 weak references
  07-02 17:47:24.892 W/erbete.customer(14808): ApkAssets: Deleting an ApkAssets object '<empty> and 
/data/app/~~bGqm-8FfB71Jb_QvIY9YDw==/ai.x.grok-ShNb-Q4YrSfZT9jDj_Dyhw==/split_config.xxhdpi.apk' with 1 weak references
  07-02 17:47:24.892 W/erbete.customer(14808): ApkAssets: Deleting an ApkAssets object '<empty> and 
/data/app/~~AeblwLWIEvASMOi96GD59g==/com.deepseek.chat-T-YDxb9sSH25m_MEX72iAA==/base.apk' with 1 weak references
  07-02 17:47:24.892 W/erbete.customer(14808): ApkAssets: Deleting an ApkAssets object '<empty> and 
/data/app/~~AeblwLWIEvASMOi96GD59g==/com.deepseek.chat-T-YDxb9sSH25m_MEX72iAA==/split_config.arm64_v8a.apk' with 1 weak references
  07-02 17:47:24.892 W/erbete.customer(14808): ApkAssets: Deleting an ApkAssets object '<empty> and 
/data/app/~~AeblwLWIEvASMOi96GD59g==/com.deepseek.chat-T-YDxb9sSH25m_MEX72iAA==/split_config.in.apk' with 1 weak references
  07-02 17:47:24.892 W/erbete.customer(14808): ApkAssets: Deleting an ApkAssets object '<empty> and 
/data/app/~~AeblwLWIEvASMOi96GD59g==/com.deepseek.chat-T-YDxb9sSH25m_MEX72iAA==/split_config.xxhdpi.apk' with 1 weak references
  07-02 17:47:24.892 W/erbete.customer(14808): ApkAssets: Deleting an ApkAssets object '<empty> and 
/data/app/~~jO7fq079Oik6c1oMcVTtsg==/com.microsoft.copilot-VkvKXO8uwlhcWOYCr9QfOQ==/base.apk' with 1 weak references
  07-02 17:47:25.660 D/TouchMonitorProxy( 4272): handleInputEvent MotionEvent:MotionEvent { action=ACTION_DOWN, actionButton=0, id[0]=0, x[0]=723.4375, 
y[0]=1605.0625, toolType[0]=TOOL_TYPE_FINGER, buttonState=0, classification=NONE, metaState=0, flags=0x0, edgeFlags=0x0, pointerCount=1, historySize=0, 
eventTime=162826785, downTime=162826785, deviceId=6, source=0x1002, displayId=0, eventId=1066524149 }
  07-02 17:47:25.661 D/TouchSliderConsumer( 4503): onInputEvent : ACTION_DOWN
  07-02 17:47:25.661 D/TouchSliderConsumer( 4503): consumeTouchEvent : 723.4375 1605.0625 RectF(1035.0, 294.0, 1083.0, 660.0) 
  07-02 17:47:25.662 D/ScreenCapControl( 4272): onFingerDown: 1605, 108, 120
  07-02 17:47:25.692 I/BufferQueueProducer( 1012): [VDS-studio.screen.sharing:0 SINK](this:0xb40000725f6b6a38,id:-1,api:1,p:1012,c:1012) queueBuffer: 
fps=34.91 dur=1002.53 max=166.28 min=12.34
  07-02 17:47:25.693 I/hwcomposer(  935): [HWCDisplay] [Display_0 (type:1)] fps:34.899990,dur:1002.87,max:166.30,min:11.97  
> 07-02 17:47:25.699 I/BufferQueueProducer( 1012): 
[SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity](BLAST)#19933](this:0xb40000731f5ba278,id:-1,api:0,p:-1,c:1012) queueBuffer: fps=35.43 
dur=1016.22 max=166.47 min=16.27
  07-02 17:47:25.702 I/DisplayDeviceRepository( 1698): Display device changed: DisplayDeviceInfo{"Layar Bawaan": uniqueId="local:0", 1080 x 2436, modeId 
2, renderFrameRate 60.000004, defaultModeId 1, userPreferredModeId -1, supportedModes [{id=1, width=1080, height=2436, fps=120.00001, vsync=120.00001, 
synthetic=false, alternativeRefreshRates=[60.0], supportedHdrTypes=[]}, {id=2, width=1080, height=2436, fps=60.0, vsync=60.0, synthetic=false, 
alternativeRefreshRates=[120.00001], supportedHdrTypes=[]}], colorMode 0, supportedColorModes [0, 7, 9], hdrCapabilities 
HdrCapabilities{mSupportedHdrTypes=[], mMaxLuminance=500.0, mMaxAverageLuminance=500.0, mMinLuminance=0.0}, allmSupported false, gameContentTypeSupported 
false, density 480, 392.839 x 392.828 dpi, appVsyncOff 2400001, presDeadline 28600000, cutout DisplayCutout{insets=Rect(0, 108 - 0, 0) 
waterfall=Insets{left=0, top=0, right=0, bottom=0} boundingRect={Bounds=[Rect(0, 0 - 0, 0), Rect(468, 0 - 612, 108), Rect(0, 0 - 0, 0), Rect(0, 0 - 0, 
0)]} cutoutPathParserInfo={CutoutPathParserInfo{displayWidth=1080 displayHeight=2436 physicalDisplayWidth=1080 physicalDisplayHeight=2436 density={3.0} 
cutoutSpec={M -24,0 L -24,36 L 24,36 L 24,0 Z @dp} rotation={0} scale={1.0} physicalPixelDisplaySizeRatio={1.0}}} sideOverrides={}}, touch INTERNAL, 
rotation 0, type INTERNAL, address {port=0}, deviceProductInfo null, state ON, committedState ON, frameRateOverride {uid=1000 frameRateHz=60.0} {uid=10509 
frameRateHz=60.0} , brightnessMinimum 0.0, brightnessMaximum 1.0, brightnessDefault 0.2, hdrSdrRatio NaN, FLAG_ALLOWED_TO_BE_DEFAULT_DISPLAY, 
FLAG_ROTATES_WITH_CONTENT, FLAG_SECURE, FLAG_SUPPORTS_PROTECTED_BUFFERS, FLAG_TRUSTED, installOrientation 0, displayShape DisplayShape{ spec=596679847 
displayWidth=1080 displayHeight=2436 physicalPixelDisplaySizeRatio=1.0 rotation=0 offsetX=0 offsetY=0 scale=1.0}}
  07-02 17:47:25.704 I/Griffin/DeviceState( 1698): virtualDisplayPackageName :{com.android.shell=2000}
  07-02 17:47:25.711 I/mtkpower_client( 1080): perf_lock_acq, hdl:0, dur:30000, num:2, tid:1080
  07-02 17:47:25.712 I/mtkpower_client( 1080): ret_hdl:56066
  07-02 17:47:25.716 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.038570,0.000039, totalTime 0.038610 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:47:25.723 D/TouchMonitorProxy( 4272): handleInputEvent MotionEvent:MotionEvent { action=ACTION_MOVE, actionButton=0, id[0]=0, x[0]=722.6875, 
y[0]=1597.9375, toolType[0]=TOOL_TYPE_FINGER, buttonState=0, classification=NONE, metaState=0, flags=0x0, edgeFlags=0x0, pointerCount=1, historySize=0, 
eventTime=162826855, downTime=162826785, deviceId=6, source=0x1002, displayId=0, eventId=211888796 }
  07-02 17:47:25.724 I/mtkpower_client( 1080): perf_lock_rel, hdl:56066, tid:1080
  07-02 17:47:25.724 I/libPowerHal(  970): [PD] fpsgo update cmd:1408300 param:0
  07-02 17:47:25.726 D/TouchMonitorProxy( 4272): handleInputEvent MotionEvent:MotionEvent { action=ACTION_MOVE, actionButton=0, id[0]=0, x[0]=722.3125, 
y[0]=1589.3125, toolType[0]=TOOL_TYPE_FINGER, buttonState=0, classification=NONE, metaState=0, flags=0x0, edgeFlags=0x0, pointerCount=1, historySize=0, 
eventTime=162826858, downTime=162826785, deviceId=6, source=0x1002, displayId=0, eventId=812772442 }
  07-02 17:47:25.730 D/TouchMonitorProxy( 4272): handleInputEvent MotionEvent:MotionEvent { action=ACTION_MOVE, actionButton=0, id[0]=0, x[0]=721.1875, 
y[0]=1579.9375, toolType[0]=TOOL_TYPE_FINGER, buttonState=0, classification=NONE, metaState=0, flags=0x0, edgeFlags=0x0, pointerCount=1, historySize=0, 
eventTime=162826861, downTime=162826785, deviceId=6, source=0x1002, displayId=0, eventId=253595918 }
  07-02 17:47:25.732 D/TouchMonitorProxy( 4272): handleInputEvent MotionEvent:MotionEvent { action=ACTION_MOVE, actionButton=0, id[0]=0, x[0]=720.6875, 
y[0]=1571.5625, toolType[0]=TOOL_TYPE_FINGER, buttonState=0, classification=NONE, metaState=0, flags=0x0, edgeFlags=0x0, pointerCount=1, historySize=0, 
eventTime=162826864, downTime=162826785, deviceId=6, source=0x1002, displayId=0, eventId=646329133 }
  07-02 17:47:25.735 D/TouchMonitorProxy( 4272): handleInputEvent MotionEvent:MotionEvent { action=ACTION_MOVE, actionButton=0, id[0]=0, x[0]=720.1875, 
y[0]=1563.8125, toolType[0]=TOOL_TYPE_FINGER, buttonState=0, classification=NONE, metaState=0, flags=0x0, edgeFlags=0x0, pointerCount=1, historySize=0, 
eventTime=162826866, downTime=162826785, deviceId=6, source=0x1002, displayId=0, eventId=921258514 }
  07-02 17:47:25.738 D/TouchMonitorProxy( 4272): handleInputEvent MotionEvent:MotionEvent { action=ACTION_MOVE, actionButton=0, id[0]=0, x[0]=719.9375, 
y[0]=1556.4375, toolType[0]=TOOL_TYPE_FINGER, buttonState=0, classification=NONE, metaState=0, flags=0x0, edgeFlags=0x0, pointerCount=1, historySize=0, 
eventTime=162826869, downTime=162826785, deviceId=6, source=0x1002, displayId=0, eventId=985241814 }
  07-02 17:47:25.741 D/TouchMonitorProxy( 4272): handleInputEvent MotionEvent:MotionEvent { action=ACTION_MOVE, actionButton=0, id[0]=0, x[0]=719.8125, 
y[0]=1551.5625, toolType[0]=TOOL_TYPE_FINGER, buttonState=0, classification=NONE, metaState=0, flags=0x0, edgeFlags=0x0, pointerCount=1, historySize=0, 
eventTime=162826872, downTime=162826785, deviceId=6, source=0x1002, displayId=0, eventId=966940021 }
  07-02 17:47:25.743 D/TouchMonitorProxy( 4272): handleInputEvent MotionEvent:MotionEvent { action=ACTION_MOVE, actionButton=0, id[0]=0, x[0]=719.9375, 
y[0]=1546.0625, toolType[0]=TOOL_TYPE_FINGER, buttonState=0, classification=NONE, metaState=0, flags=0x0, edgeFlags=0x0, pointerCount=1, historySize=0, 
eventTime=162826875, downTime=162826785, deviceId=6, source=0x1002, displayId=0, eventId=562029035 }
  07-02 17:47:25.745 D/TouchMonitorProxy( 4272): handleInputEvent MotionEvent:MotionEvent { action=ACTION_MOVE, actionButton=0, id[0]=0, x[0]=720.3125, 
y[0]=1539.4375, toolType[0]=TOOL_TYPE_FINGER, buttonState=0, classification=NONE, metaState=0, flags=0x0, edgeFlags=0x0, pointerCount=1, historySize=0, 
eventTime=162826877, downTime=162826785, deviceId=6, source=0x1002, displayId=0, eventId=756289791 }
  07-02 17:47:25.748 D/TouchMonitorProxy( 4272): handleInputEvent MotionEvent:MotionEvent { action=ACTION_MOVE, actionButton=0, id[0]=0, x[0]=720.3125, 
y[0]=1532.6875, toolType[0]=TOOL_TYPE_FINGER, buttonState=0, classification=NONE, metaState=0, flags=0x0, edgeFlags=0x0, pointerCount=1, historySize=0, 
eventTime=162826880, downTime=162826785, deviceId=6, source=0x1002, displayId=0, eventId=225888406 }
  07-02 17:47:25.749 D/AppFlingMode(  970): [CheckAppFlingHint] 45 com.erbete.customer 60
  07-02 17:47:25.749 E/libPowerHal(  970): [getHintRscSize] hint_id 61 cannot be found in PowerScnTbl
  07-02 17:47:25.749 I/PowerHalWrapper(14808): PowerHalWrapper.getInstance 
  07-02 17:47:26.046 D/TranPhoneSwitcher( 2620): getNetworkType: 4G
  07-02 17:47:26.046 I/TranPhoneSwitcher( 2620): mDefaultsign:4subid :2
  07-02 17:47:26.047 I/mtkpower_client( 1080): perf_lock_acq, hdl:0, dur:30000, num:2, tid:1080
  07-02 17:47:26.047 D/TranSignalStrengthComponentImpl(30413): [LTE] dbm: -86
  07-02 17:47:26.048 D/TranSignalStrengthComponentImpl(30413): [LTE] dbm: -86
  07-02 17:47:26.048 I/mtkpower_client( 1080): ret_hdl:56074
> 07-02 17:47:26.164 I/flutter (14808): Number of Stories Fetched: 5
> 07-02 17:47:26.164 I/flutter (14808): Total stories fetched: 5
> 07-02 17:47:26.164 I/flutter (14808): nearestIds: {aceh_clone_6319dc53314ee_1BlB62hfbg7mX0MTIUeo, aceh_clone_6319dc53314ee_07RFZCxogqVjkbVTt9HE, 
aceh_clone_6319dc53314ee_10KPhdPgfOUpkHtzT3oS}
> 07-02 17:47:26.164 I/flutter (14808): Filtered storyList length: 0
  07-02 17:47:26.176 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000000,0.039814,0.000033, totalTime 0.039847 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:47:26.263 I/mtkpower_client( 1080): perf_lock_rel, hdl:56074, tid:1080
  07-02 17:47:26.264 I/libPowerHal(  970): [PD] fpsgo update cmd:1408300 param:60
  07-02 17:47:26.296 I/mtkpower_client( 1080): perf_lock_acq, hdl:0, dur:30000, num:2, tid:1080
  07-02 17:47:26.297 I/mtkpower_client( 1080): ret_hdl:56075
  07-02 17:47:26.344 D/AES     ( 1698): AEEIOCTL_GET/SET_SF_STATE IOCTL,cmd= 1074294797, lParam=0. 
  07-02 17:47:26.344 D/AES     ( 1698): AEEIOCTL_RT_MON_Kick IOCTL,cmd= 2147774474, lParam=300. 
  07-02 17:47:26.380 I/mtkpower_client( 1080): perf_lock_rel, hdl:56075, tid:1080
  07-02 17:47:26.381 I/libPowerHal(  970): [PD] fpsgo update cmd:1408300 param:60
  07-02 17:47:26.396 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000000,0.039934,0.000025, totalTime 0.039959 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:47:26.413 I/mtkpower_client( 1080): perf_lock_acq, hdl:0, dur:30000, num:2, tid:1080
  07-02 17:47:26.414 I/mtkpower_client( 1080): ret_hdl:56076
  07-02 17:47:26.615 I/libPerfCtl(  970): xgfGetFPS pid:14808 fps:42
  07-02 17:47:26.615 I/AppThermalMode(  970): [perfNotifyThermalState] hdl:0
  07-02 17:47:26.615 I/AppThermalMode(  970): [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: 60,fg->pid:14808
  07-02 17:47:26.615 I/AppThermalMode(  970): [perfNotifyThermalState] appThermalIdx -1:
  07-02 17:47:26.733 I/android.hardware.thermal@2.0-service.mtk(  940): fill_temperatures filterType1 name: SKIN type: SKIN throttlingStatus: NONE value: 
41.588 ret_temps size 0
  07-02 17:47:26.748 D/EventHub( 1698): getevents BTN_TOUCH DOWN
  07-02 17:47:26.748 D/AppFlingMode(  970): [CheckAppFlingHint] 25 com.erbete.customer 60
  07-02 17:47:26.749 D/TextSelection(14808): onUseCache cache=false
  07-02 17:47:26.856 I/libPowerHal(  970): [setClusterFreq] mtkpower@1.0-se: sysfs_freq set cpu freq: 1500000 -1 1500000 -1 
  07-02 17:47:26.856 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000000,0.040283,0.000022, totalTime 0.040306 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:47:26.857 I/libPowerHal(  970): [PD] fpsgo update cmd:1408300 param:60
  07-02 17:47:26.859 D/TouchMonitorProxy( 4272): handleInputEvent MotionEvent:MotionEvent { action=ACTION_MOVE, actionButton=0, id[0]=0, x[0]=756.8125, 
y[0]=1392.8125, toolType[0]=TOOL_TYPE_FINGER, buttonState=0, classification=NONE, metaState=0, flags=0x0, edgeFlags=0x0, pointerCount=1, historySize=0, 
eventTime=162827991, downTime=162827881, deviceId=6, source=0x1002, displayId=0, eventId=330566409 }
  07-02 17:47:26.861 D/TouchMonitorProxy( 4272): handleInputEvent MotionEvent:MotionEvent { action=ACTION_MOVE, actionButton=0, id[0]=0, x[0]=757.3125, 
y[0]=1383.8125, toolType[0]=TOOL_TYPE_FINGER, buttonState=0, classification=NONE, metaState=0, flags=0x0, edgeFlags=0x0, pointerCount=1, historySize=0, 
eventTime=162827993, downTime=162827881, deviceId=6, source=0x1002, displayId=0, eventId=998285110 }
  07-02 17:47:26.864 D/TouchMonitorProxy( 4272): handleInputEvent MotionEvent:MotionEvent { action=ACTION_MOVE, actionButton=0, id[0]=0, x[0]=757.6875, 
y[0]=1374.6875, toolType[0]=TOOL_TYPE_FINGER, buttonState=0, classification=NONE, metaState=0, flags=0x0, edgeFlags=0x0, pointerCount=1, historySize=0, 
eventTime=162827996, downTime=162827881, deviceId=6, source=0x1002, displayId=0, eventId=264472682 }
> 07-02 17:47:26.864 I/BufferQueueProducer( 1012): 
[SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity](BLAST)#19933](this:0xb40000731f5ba278,id:-1,api:0,p:-1,c:1012) queueBuffer: fps=10.31 
dur=1164.38 max=482.48 min=16.52
  07-02 17:47:26.865 I/mtkpower_client( 1698): perf_lock_acq, hdl:56070, dur:3000, num:2, pid:1698, tid:3523
  07-02 17:47:26.867 I/mtkpower_client( 1698): ret_hdl:56082
  07-02 17:47:26.867 I/PowerHalMgrImpl(14808): hdl:56082, pid:14808 
  07-02 17:47:26.868 D/TouchMonitorProxy( 4272): handleInputEvent MotionEvent:MotionEvent { action=ACTION_MOVE, actionButton=0, id[0]=0, x[0]=757.9375, 
y[0]=1364.5625, toolType[0]=TOOL_TYPE_FINGER, buttonState=0, classification=NONE, metaState=0, flags=0x0, edgeFlags=0x0, pointerCount=1, historySize=0, 
eventTime=162827999, downTime=162827881, deviceId=6, source=0x1002, displayId=0, eventId=1028313976 }
  07-02 17:47:26.869 I/libPowerHal(  970): [touch_boost_enabled] value:0
  07-02 17:47:26.869 I/mtkpower_client( 1698): perf_lock_rel, hdl:56082, tid:3523
  07-02 17:47:26.869 I/libPowerHal(  970): [PD] system_server update cmd:3408500 param:1
  07-02 17:47:26.870 I/BufferQueueProducer( 1012): [VDS-studio.screen.sharing:0 SINK](this:0xb40000725f6b6a38,id:-1,api:1,p:1012,c:1012) queueBuffer: 
fps=11.04 dur=1177.85 max=482.11 min=15.89
  07-02 17:47:26.870 D/TouchMonitorProxy( 4272): handleInputEvent MotionEvent:MotionEvent { action=ACTION_MOVE, actionButton=0, id[0]=0, x[0]=758.6875, 
y[0]=1352.4375, toolType[0]=TOOL_TYPE_FINGER, buttonState=0, classification=NONE, metaState=0, flags=0x0, edgeFlags=0x0, pointerCount=1, historySize=0, 
eventTime=162828002, downTime=162827881, deviceId=6, source=0x1002, displayId=0, eventId=554135310 }
  07-02 17:47:26.870 I/libPowerHal(  970): [touch_boost_enabled] value:-1
  07-02 17:47:26.870 I/libPowerHal(  970): [PD] system_server update cmd:3408500 param:-1
  07-02 17:47:26.870 I/hwcomposer(  935): [HWCDisplay] [Display_0 (type:1)] fps:11.041208,dur:1177.41,max:482.21,min:15.90  
  07-02 17:47:26.872 D/TouchMonitorProxy( 4272): handleInputEvent MotionEvent:MotionEvent { action=ACTION_MOVE, actionButton=0, id[0]=0, x[0]=759.1875, 
y[0]=1340.5625, toolType[0]=TOOL_TYPE_FINGER, buttonState=0, classification=NONE, metaState=0, flags=0x0, edgeFlags=0x0, pointerCount=1, historySize=0, 
eventTime=162828005, downTime=162827881, deviceId=6, source=0x1002, displayId=0, eventId=829236168 }
  07-02 17:47:26.875 D/TouchMonitorProxy( 4272): handleInputEvent MotionEvent:MotionEvent { action=ACTION_MOVE, actionButton=0, id[0]=0, x[0]=759.6875, 
y[0]=1329.1875, toolType[0]=TOOL_TYPE_FINGER, buttonState=0, classification=NONE, metaState=0, flags=0x0, edgeFlags=0x0, pointerCount=1, historySize=0, 
eventTime=162828007, downTime=162827881, deviceId=6, source=0x1002, displayId=0, eventId=525964384 }
  07-02 17:47:26.878 D/TouchMonitorProxy( 4272): handleInputEvent MotionEvent:MotionEvent { action=ACTION_MOVE, actionButton=0, id[0]=0, x[0]=760.3125, 
y[0]=1318.4375, toolType[0]=TOOL_TYPE_FINGER, buttonState=0, classification=NONE, metaState=0, flags=0x0, edgeFlags=0x0, pointerCount=1, historySize=0, 
eventTime=162828010, downTime=162827881, deviceId=6, source=0x1002, displayId=0, eventId=435949068 }
  07-02 17:47:26.881 D/TouchMonitorProxy( 4272): handleInputEvent MotionEvent:MotionEvent { action=ACTION_MOVE, actionButton=0, id[0]=0, x[0]=760.9375, 
y[0]=1308.1875, toolType[0]=TOOL_TYPE_FINGER, buttonState=0, classification=NONE, metaState=0, flags=0x0, edgeFlags=0x0, pointerCount=1, historySize=0, 
eventTime=162828013, downTime=162827881, deviceId=6, source=0x1002, displayId=0, eventId=626330873 }
  07-02 17:47:26.883 D/TouchMonitorProxy( 4272): handleInputEvent MotionEvent:MotionEvent { action=ACTION_MOVE, actionButton=0, id[0]=0, x[0]=761.3125, 
y[0]=1298.0625, toolType[0]=TOOL_TYPE_FINGER, buttonState=0, classification=NONE, metaState=0, flags=0x0, edgeFlags=0x0, pointerCount=1, historySize=0, 
eventTime=162828015, downTime=162827881, deviceId=6, source=0x1002, displayId=0, eventId=945791881 }
  07-02 17:47:26.886 D/TouchMonitorProxy( 4272): handleInputEvent MotionEvent:MotionEvent { action=ACTION_MOVE, actionButton=0, id[0]=0, x[0]=761.8125, 
y[0]=1285.8125, toolType[0]=TOOL_TYPE_FINGER, buttonState=0, classification=NONE, metaState=0, flags=0x0, edgeFlags=0x0, pointerCount=1, historySize=0, 
eventTime=162828018, downTime=162827881, deviceId=6, source=0x1002, displayId=0, eventId=349223784 }
  07-02 17:47:26.888 D/TouchMonitorProxy( 4272): handleInputEvent MotionEvent:MotionEvent { action=ACTION_MOVE, actionButton=0, id[0]=0, x[0]=762.3125, 
y[0]=1274.0625, toolType[0]=TOOL_TYPE_FINGER, buttonState=0, classification=NONE, metaState=0, flags=0x0, edgeFlags=0x0, pointerCount=1, historySize=0, 
eventTime=162828021, downTime=162827881, deviceId=6, source=0x1002, displayId=0, eventId=463120871 }
  07-02 17:47:26.892 D/TouchMonitorProxy( 4272): handleInputEvent MotionEvent:MotionEvent { action=ACTION_MOVE, actionButton=0, id[0]=0, x[0]=762.8125, 
y[0]=1263.3125, toolType[0]=TOOL_TYPE_FINGER, buttonState=0, classification=NONE, metaState=0, flags=0x0, edgeFlags=0x0, pointerCount=1, historySize=0, 
eventTime=162828024, downTime=162827881, deviceId=6, source=0x1002, displayId=0, eventId=486118046 }
  07-02 17:47:27.108 I/mtkpower_client( 1080): ret_hdl:56083
  07-02 17:47:27.108 I/FPSGO   ( 1080): perfLockAcq hdl:56083
  07-02 17:47:27.116 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000000,0.039999,0.000040, totalTime 0.040039 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:47:27.156 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.039592,0.000127, totalTime 0.039720 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:47:27.236 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.039615,0.000052, totalTime 0.039668 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:47:27.257 I/StatusBarNetworkRateView( 2380): wifi is default. hide second network rate view. StatusBarNetworkRateView subId=2, 
isFirstSimCard=false, mLocation=QS_NEW NetworkRateState=NetworkRateState{visible=true, activeMobileDataSubId=2, totalRate=31.934, netWorkState=1, 
isAirplane=false, netRateStateBySettingGlobal=1, networkRate='31,9', networkRateUnit='KB/S'}
> 07-02 17:47:27.281 I/BufferQueueProducer( 1012): [StatusBar#97](this:0xb40000731f578a88,id:-1,api:0,p:-1,c:1012) queueBuffer: fps=0.20 dur=4977.94 
max=4977.94 min=4977.94
  07-02 17:47:27.281 D/BufferPoolAccessor2.0(11425): bufferpool2 0xb4000072a18c9748 : 66(548961 size) total buffers - 1(17097 size) used buffers - 
849/2652 (recycle/alloc) - 1840/2651 (fetch/transfer)
  07-02 17:47:27.416 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.039651,0.000093, totalTime 0.039745 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:47:27.426 D/TranWifiTputMonitor( 1698): WIFI: TX: 6 RX: 20 TOTAL = 26
  07-02 17:47:27.427 D/TranWifiTputMonitor( 1698): High Tput: false, TOTAL TPUT: 26
  07-02 17:47:27.456 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.039186,0.000082, totalTime 0.039269 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:47:27.523 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.020051,0.005446, totalTime 0.025498 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:47:27.569 D/BufferPoolAccessor2.0(11425): bufferpool2 0xb4000072a18c9748 : 66(751236 size) total buffers - 1(12227 size) used buffers - 
849/2669 (recycle/alloc) - 1857/2668 (fetch/transfer)
  07-02 17:47:27.616 I/libPerfCtl(  970): xgfGetFPS pid:2380 fps:-1
  07-02 17:47:27.617 I/AppThermalMode(  970): [perfNotifyThermalState] hdl:0
  07-02 17:47:27.617 I/AppThermalMode(  970): [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: 60,fg->pid:14808
  07-02 17:47:27.617 I/AppThermalMode(  970): [perfNotifyThermalState] appThermalIdx -1:
  07-02 17:47:27.617 I/libPerfCtl(  970): xgfGetFPS pid:14808 fps:57
  07-02 17:47:27.617 I/AppThermalMode(  970): [perfNotifyThermalState] hdl:0
  07-02 17:47:27.617 I/AppThermalMode(  970): [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: 60,fg->pid:14808
  07-02 17:47:27.617 I/AppThermalMode(  970): [perfNotifyThermalState] appThermalIdx -1:
  07-02 17:47:27.696 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.039255,0.000054, totalTime 0.039309 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:47:27.736 I/mtkpower_client( 1080): perf_lock_acq, hdl:0, dur:30000, num:2, tid:1080
  07-02 17:47:27.738 I/mtkpower_client( 1080): ret_hdl:56084
  07-02 17:47:27.796 I/Hiber/importantScene( 1698): isTrafficActive uid:10257 speed :0
  07-02 17:47:27.797 I/Hiber/appStateMachine( 1698): uid:10257 enter FrozenState
  07-02 17:47:27.840 D/LocationManagerService( 1698): incoming location: Location[network hAcc=100 et=+2d1h57m9s317ms vAcc=75 sAcc=??? bAcc=???]
  07-02 17:47:27.844 D/MNLD    ( 1228): mnld_nfw_mnl2agps_location_sync: ret = 51
  07-02 17:47:27.844 D/MNLD    ( 1228): mnld_nfw_mnl2agps_location_sync: mnl2agps_location_sync success
  07-02 17:47:27.844 D/agps    ( 1354): [agps][n][AGPS] [MNL] mnl2agps [153]
  07-02 17:47:28.185 I/mtkpower_client( 1080): perf_lock_rel, hdl:56084, tid:1080
  07-02 17:47:28.186 I/libPowerHal(  970): [PD] fpsgo update cmd:1408300 param:0
> 07-02 17:47:28.197 I/BufferQueueProducer( 1012): 
[SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity](BLAST)#19933](this:0xb40000731f5ba278,id:-1,api:0,p:-1,c:1012) queueBuffer: fps=37.51 
dur=1332.96 max=483.25 min=15.81
  07-02 17:47:28.211 I/BufferQueueProducer( 1012): [VDS-studio.screen.sharing:0 SINK](this:0xb40000725f6b6a38,id:-1,api:1,p:1012,c:1012) queueBuffer: 
fps=37.27 dur=1341.52 max=488.01 min=11.17
  07-02 17:47:28.213 I/hwcomposer(  935): [HWCDisplay] [Display_0 (type:1)] fps:37.251617,dur:1342.22,max:487.50,min:11.48  
  07-02 17:47:28.505 D/BufferPoolAccessor2.0(11425): bufferpool2 0xb4000072a18c9748 : 66(714057 size) total buffers - 1(3739 size) used buffers - 849/2700 
(recycle/alloc) - 1888/2699 (fetch/transfer)
  07-02 17:47:28.539 I/mtkpower_client( 1080): perf_lock_acq, hdl:0, dur:30000, num:2, tid:1080
  07-02 17:47:28.540 I/mtkpower_client( 1080): ret_hdl:56085
  07-02 17:47:28.617 I/libPerfCtl(  970): xgfGetFPS pid:2380 fps:-1
  07-02 17:47:28.617 I/AppThermalMode(  970): [perfNotifyThermalState] hdl:0
  07-02 17:47:28.617 I/AppThermalMode(  970): [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: 60,fg->pid:14808
  07-02 17:47:28.617 I/AppThermalMode(  970): [perfNotifyThermalState] appThermalIdx -1:
  07-02 17:47:28.617 I/libPerfCtl(  970): xgfGetFPS pid:14808 fps:56
  07-02 17:47:28.617 I/AppThermalMode(  970): [perfNotifyThermalState] hdl:0
  07-02 17:47:28.617 I/AppThermalMode(  970): [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: 60,fg->pid:14808
  07-02 17:47:28.617 I/AppThermalMode(  970): [perfNotifyThermalState] appThermalIdx -1:
  07-02 17:47:28.721 D/EventHub( 1698): getevents BTN_TOUCH DOWN
  07-02 17:47:28.722 D/AppFlingMode(  970): [CheckAppFlingHint] 25 com.erbete.customer 60
  07-02 17:47:28.725 E/libPowerHal(  970): [getCPUFreq] error cid:2, nClusterNum:2
  07-02 17:47:28.725 D/TextSelection(14808): onUseCache cache=false
  07-02 17:47:28.725 D/TouchSliderConsumer( 4503): onInputEvent : ACTION_DOWN
  07-02 17:47:28.726 D/TouchMonitorProxy( 4272): handleInputEvent MotionEvent:MotionEvent { action=ACTION_DOWN, actionButton=0, id[0]=0, x[0]=798.0625, 
y[0]=1651.25, toolType[0]=TOOL_TYPE_FINGER, buttonState=0, classification=NONE, metaState=0, flags=0x0, edgeFlags=0x0, pointerCount=1, historySize=0, 
eventTime=162829854, downTime=162829854, deviceId=6, source=0x1002, displayId=0, eventId=150611848 }
  07-02 17:47:28.727 D/TouchSliderConsumer( 4503): consumeTouchEvent : 798.0625 1651.25 RectF(1035.0, 294.0, 1083.0, 660.0) 
  07-02 17:47:29.120 I/mtkpower_client( 1080): ret_hdl:56094
  07-02 17:47:29.120 I/FPSGO   ( 1080): perfLockAcq hdl:56094
  07-02 17:47:29.178 I/mtkpower_client( 1080): perf_lock_acq, hdl:0, dur:30000, num:2, tid:1080
  07-02 17:47:29.179 I/mtkpower_client( 1080): ret_hdl:56095
  07-02 17:47:29.179 I/mtkpower_client( 1080): perf_lock_rel, hdl:56095, tid:1080
  07-02 17:47:29.181 I/libPowerHal(  970): [PD] fpsgo update cmd:1408300 param:0
> 07-02 17:47:29.212 I/BufferQueueProducer( 1012): 
[SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity](BLAST)#19933](this:0xb40000731f5ba278,id:-1,api:0,p:-1,c:1012) queueBuffer: fps=37.44 
dur=1015.04 max=299.33 min=13.72
  07-02 17:47:29.216 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.039926,0.000113, totalTime 0.040040 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:47:29.224 I/BufferQueueProducer( 1012): [VDS-studio.screen.sharing:0 SINK](this:0xb40000725f6b6a38,id:-1,api:1,p:1012,c:1012) queueBuffer: 
fps=37.52 dur=1012.69 max=298.26 min=11.38
  07-02 17:47:29.225 I/hwcomposer(  935): [HWCDisplay] [Display_0 (type:1)] fps:37.530235,dur:1012.52,max:298.05,min:11.07  
> 07-02 17:47:29.237 D/CCodecBuffers(17917): [c2.android.vp8.encoder#428:Output[N]] pushToStash: pushToStash -- pending size = 11
> 07-02 17:47:29.252 D/CCodecBuffers(17917): [c2.android.vp8.encoder#428:Output[N]] pushToStash: pushToStash -- pending size = 12
> 07-02 17:47:29.267 D/CCodecBuffers(17917): [c2.android.vp8.encoder#428:Output[N]] pushToStash: pushToStash -- pending size = 13
> 07-02 17:47:29.285 D/CCodecBuffers(17917): [c2.android.vp8.encoder#428:Output[N]] pushToStash: pushToStash -- pending size = 14
> 07-02 17:47:29.304 D/CCodecBuffers(17917): [c2.android.vp8.encoder#428:Output[N]] pushToStash: pushToStash -- pending size = 15
> 07-02 17:47:29.320 D/CCodecBuffers(17917): [c2.android.vp8.encoder#428:Output[N]] pushToStash: pushToStash -- pending size = 16
  07-02 17:47:29.523 W/native  ( 5782): W0000 00:00:1782989249.523264    5913 lag_detector.cc:58] Pipeline lagging by 1.321739766s. Continue processing 
samples.
  07-02 17:47:29.617 I/libPerfCtl(  970): xgfGetFPS pid:2380 fps:-1
  07-02 17:47:29.617 I/AppThermalMode(  970): [perfNotifyThermalState] hdl:0
  07-02 17:47:29.617 I/AppThermalMode(  970): [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: 60,fg->pid:14808
  07-02 17:47:29.617 I/AppThermalMode(  970): [perfNotifyThermalState] appThermalIdx -1:
  07-02 17:47:29.618 I/libPerfCtl(  970): xgfGetFPS pid:14808 fps:55
  07-02 17:47:29.618 I/AppThermalMode(  970): [perfNotifyThermalState] hdl:0
  07-02 17:47:29.618 I/AppThermalMode(  970): [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: 60,fg->pid:14808
  07-02 17:47:29.618 I/AppThermalMode(  970): [perfNotifyThermalState] appThermalIdx -1:
  07-02 17:47:29.748 I/TranActivityTaskManager( 4272): tran getFocusedWinPkgName
  07-02 17:47:29.749 I/TranActivityTaskManager( 4272): tran getTopActivityComponent
  07-02 17:47:29.756 I/TranActivityTaskManager( 4272): tran isIMEShowing
  07-02 17:47:29.758 D/mol_MolService.run(L:134)( 4272): ----MolService focused pkg:com.erbete.customer, cmp:com.erbete.customer.MainActivity, 
curType:SCENE_UNKOWN, molAlive:true, asAlive:false, asCrashed:false, imeVis:false, this:com.transsion.mol.service.MolService@9ecbda5
  07-02 17:47:29.782 I/mtkpower_client( 1080): perf_lock_acq, hdl:0, dur:30000, num:2, tid:1080
  07-02 17:47:29.783 I/mtkpower_client( 1080): ret_hdl:56096
  07-02 17:47:29.815 D/WifiClientModeImpl[24001351:wlan0]( 1698): updateLinkLayerStatsRssiSpeedFrequencyCapabilities rssi=-53 TxLinkspeed=54 freq=5765 
RxLinkSpeed=6
  07-02 17:47:29.819 D/WifiClientModeImpl[24001351:wlan0]( 1698): reported txKbps 12000 rxKbps 60000
  07-02 17:47:29.820 D/WifiDataStall( 1698): tx tput in kbps: 50000
  07-02 17:47:29.820 D/WifiDataStall( 1698): rx tput in kbps: 50000
  07-02 17:47:29.821 V/WifiConfigManager( 1698): Updating scan detail cache freq=5765 BSSID=ac:4a:56:28:fe:ee RSSI=-55 for "TAUFIKKOPIBATOH@WIFI.ID"NONE
  07-02 17:47:30.190 D/Hiber/alarmManagerServiceExtImpl( 1698): unproxyAlarms leave, uid=10271, packageName=null
  07-02 17:47:30.190 I/Hiber/proxyManager( 1698): up_sensor: uid=10271, pkgName=com.whatsapp
  07-02 17:47:30.192 D/Hiber/proxyWakeLock( 1698): remove uid: 10271 wiht all pids from wakelockUidInfo list
  07-02 17:47:30.194 D/TranSignalStrengthComponentImpl(23237): [LTE] dbm: -87
  07-02 17:47:30.195 D/TranSignalStrengthComponentImpl(23237): [LTE] dbm: -87
  07-02 17:47:30.196 D/TranSignalStrengthComponentImpl(23237): [LTE] dbm: -86
> 07-02 17:47:30.228 I/BufferQueueProducer( 1012): 
[SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity](BLAST)#19933](this:0xb40000731f5ba278,id:-1,api:0,p:-1,c:1012) queueBuffer: fps=34.45 
dur=1015.94 max=433.05 min=13.86
  07-02 17:47:30.237 I/BufferQueueProducer( 1012): [VDS-studio.screen.sharing:0 SINK](this:0xb40000725f6b6a38,id:-1,api:1,p:1012,c:1012) queueBuffer: 
fps=34.54 dur=1013.20 max=435.14 min=11.92
  07-02 17:47:30.239 I/hwcomposer(  935): [HWCDisplay] [Display_0 (type:1)] fps:34.529617,dur:1013.62,max:435.55,min:11.71  
  07-02 17:47:30.354 I/NearbySharing( 4458): Network state changed: NetworkState(isRestricted=false, isOnline=true, isCongested=false, isMetered=false, 
isWifiConnected=true)
  07-02 17:47:30.408 D/TLinkBrush_DATA( 1698): [NetdEvent]onTcpSocketStatsEvent
  07-02 17:47:30.409 D/TLinkBrush_DATA( 1698): [NetdEvent]onTcpSocketStatsEvent sent = 0, return
  07-02 17:47:30.409 D/TLinkBrush_DATA( 1698): [NetdEvent]onTcpSocketStatsEvent
  07-02 17:47:30.409 D/TLinkBrush_DATA( 1698): [NetdEvent]onTcpSocketStatsEvent sent = 0, return
  07-02 17:47:30.409 D/TLinkBrush_DATA( 1698): [NetdEvent]onTcpSocketStatsEvent
  07-02 17:47:30.428 D/TranWifiTputMonitor( 1698): WIFI: TX: 0 RX: 0 TOTAL = 0
  07-02 17:47:30.429 D/TranWifiTputMonitor( 1698): High Tput: false, TOTAL TPUT: 0
  07-02 17:47:30.617 I/libPerfCtl(  970): xgfGetFPS pid:2380 fps:-1
  07-02 17:47:30.618 I/AppThermalMode(  970): [perfNotifyThermalState] hdl:0
  07-02 17:47:30.618 I/AppThermalMode(  970): [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: 60,fg->pid:14808
  07-02 17:47:30.618 I/AppThermalMode(  970): [perfNotifyThermalState] appThermalIdx -1:
  07-02 17:47:30.618 I/libPerfCtl(  970): xgfGetFPS pid:14808 fps:58
  07-02 17:47:30.618 I/AppThermalMode(  970): [perfNotifyThermalState] hdl:0
  07-02 17:47:30.618 I/AppThermalMode(  970): [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: 60,fg->pid:14808
  07-02 17:47:30.618 I/AppThermalMode(  970): [perfNotifyThermalState] appThermalIdx -1:
  07-02 17:47:30.706 D/EventHub( 1698): getevents BTN_TOUCH DOWN
  07-02 17:47:30.707 D/AppFlingMode(  970): [CheckAppFlingHint] 25 com.erbete.customer 60
  07-02 17:47:30.710 D/TouchSliderConsumer( 4503): onInputEvent : ACTION_DOWN
  07-02 17:47:30.711 D/TouchSliderConsumer( 4503): consumeTouchEvent : 595.9375 1393.0625 RectF(1035.0, 294.0, 1083.0, 660.0) 
  07-02 17:47:30.713 D/ScreenCapControl( 4272): onFingerDown: 1393, 108, 120
  07-02 17:47:30.768 I/libPowerHal(  970): [PD] MTKPOWER_HINT_APP_TOUCH update cmd:3408b00 param:0
  07-02 17:47:30.769 I/ScreenTouchCollector( 3928): resetTouchPara:reason= InputEvent ACTION_UP or ACTION_CANCEL
  07-02 17:47:30.770 D/TouchMonitorProxy( 4272): handleInputEvent MotionEvent:MotionEvent { action=ACTION_UP, actionButton=0, id[0]=0, x[0]=595.9375, 
y[0]=1393.0625, toolType[0]=TOOL_TYPE_FINGER, buttonState=0, classification=NONE, metaState=0, flags=0x0, edgeFlags=0x0, pointerCount=1, historySize=0, 
eventTime=162831899, downTime=162831840, deviceId=6, source=0x1002, displayId=0, eventId=910254897 }
> 07-02 17:47:30.801 I/flutter (14808): STEP47D_RESTAURANT_DETAIL_ARGUMENTS: type=_Map<String, VendorModel> value={vendorModel: Instance of 'VendorModel'}
> 07-02 17:47:30.802 I/flutter (14808): STEP47D_RESTAURANT_DETAIL_VENDOR_ARG: id=aceh_clone_6319dc53314ee_10KPhdPgfOUpkHtzT3oS title=Simo Market 
zone=q8OOxNm1zgyVqggkCibX
  07-02 17:47:30.805 I/mtkpower_client( 1080): perf_lock_acq, hdl:0, dur:30000, num:2, tid:1080
  07-02 17:47:30.806 I/mtkpower_client( 1080): ret_hdl:56098
> 07-02 17:47:30.835 I/flutter (14808): 2026-07-02 09:00:00.000
> 07-02 17:47:30.835 I/flutter (14808): 2026-07-02 23:30:00.000
> 07-02 17:47:30.835 I/flutter (14808): 2026-07-02 17:47:30.835740
> 07-02 17:47:30.837 I/flutter (14808): 2026-07-02 12:00:00.000
> 07-02 17:47:30.837 I/flutter (14808): 2026-07-02 02:00:00.000
> 07-02 17:47:30.837 I/flutter (14808): 2026-07-02 17:47:30.837057
> 07-02 17:47:30.838 I/flutter (14808): STEP47D_RESTAURANT_DETAIL_BEFORE_PRODUCT_LOAD: vendorId=aceh_clone_6319dc53314ee_10KPhdPgfOUpkHtzT3oS title=Simo 
Market
> 07-02 17:47:30.839 I/flutter (14808): STEP47D_GET_PRODUCT_BY_VENDOR_ID_START: vendorId=aceh_clone_6319dc53314ee_10KPhdPgfOUpkHtzT3oS 
selectedFoodType=Delivery collection=vendor_products
> 07-02 17:47:30.842 I/flutter (14808): STEP47D_RESTAURANT_DETAIL_ONINIT_ENTER
  07-02 17:47:30.918 D/TriggerService( 4219): trigger service is running
  07-02 17:47:30.986 I/mtkpower_client( 1080): perf_lock_rel, hdl:56098, tid:1080
  07-02 17:47:30.987 I/libPowerHal(  970): [PD] fpsgo update cmd:1408300 param:0
  07-02 17:47:31.019 I/mtkpower_client( 1080): perf_lock_acq, hdl:0, dur:30000, num:2, tid:1080
  07-02 17:47:31.021 I/mtkpower_client( 1080): ret_hdl:56099
  07-02 17:47:31.045 I/mtkpower_client( 1080): perf_lock_rel, hdl:56099, tid:1080
  07-02 17:47:31.046 I/libPowerHal(  970): [PD] fpsgo update cmd:1408300 param:0
  07-02 17:47:31.056 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.040334,0.000106, totalTime 0.040441 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:47:31.059 D/WindowManager( 1698): updateSystemBarAttributes appearance:8, win appearance:8, opaqueAppearance:0, win:Window{ac87882 u0 
com.erbete.customer/com.erbete.customer.MainActivity}, appearanceRegions=[AppearanceRegion{LIGHT_STATUS_BARS bounds=[0,0][1080,2436]}]
  07-02 17:47:31.063 I/StatusBarModePerDisplayRepository( 2380): isInFullscreenMode:false com.erbete.customer
> 07-02 17:47:31.093 I/BufferQueueProducer( 1012): [StatusBar#97](this:0xb40000731f578a88,id:-1,api:0,p:-1,c:1012) queueBuffer: fps=0.26 dur=3812.67 
max=3812.67 min=3812.67
  07-02 17:47:31.096 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.038551,0.000101, totalTime 0.038652 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:47:31.111 D/BatteryMeterDrawable( 2380): drawBatteryFrame: color=99000000
  07-02 17:47:31.172 D/TranSignalStrengthComponentImpl( 2620): [LTE] dbm: -86
  07-02 17:47:31.172 D/TranSignalStrengthComponentImpl( 2620): [LTE] dbm: -86
  07-02 17:47:31.174 D/CallbackProxy( 6515): [onSignalStrengthsChanged]
  07-02 17:47:31.175 I/TranTele/TranPhoneInterfaceManager( 2620): TTC - onSignalStrengthsChanged
  07-02 17:47:31.175 D/TranSignalStrengthComponentImpl(30413): [LTE] dbm: -86
  07-02 17:47:31.175 D/TranSignalStrengthComponentImpl( 1698): [LTE] dbm: -86
  07-02 17:47:31.175 D/TranSignalStrengthComponentImpl(23237): [LTE] dbm: -86
  07-02 17:47:31.179 D/TranPhoneSwitcher( 2620): getNetworkType: 4G
  07-02 17:47:31.180 I/TranPhoneSwitcher( 2620): mDefaultsign:4subid :2
  07-02 17:47:31.184 D/TranSignalStrengthComponentImpl(30413): [LTE] dbm: -86
  07-02 17:47:31.184 D/TranSignalStrengthComponentImpl(30413): [LTE] dbm: -86
  07-02 17:47:31.216 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.039833,0.000049, totalTime 0.039882 > logTimeout 
0.022000 TIMEOUT!!
> 07-02 17:47:31.243 I/BufferQueueProducer( 1012): 
[SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity](BLAST)#19933](this:0xb40000731f5ba278,id:-1,api:0,p:-1,c:1012) queueBuffer: fps=44.32 
dur=1015.32 max=199.60 min=16.16
  07-02 17:47:31.253 I/BufferQueueProducer( 1012): [VDS-studio.screen.sharing:0 SINK](this:0xb40000725f6b6a38,id:-1,api:1,p:1012,c:1012) queueBuffer: 
fps=45.30 dur=1015.52 max=195.47 min=11.89
  07-02 17:47:31.254 I/hwcomposer(  935): [HWCDisplay] [Display_0 (type:1)] fps:45.298748,dur:1015.48,max:194.87,min:11.28  
  07-02 17:47:31.316 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.039860,0.000046, totalTime 0.039907 > logTimeout 
0.022000 TIMEOUT!!
> 07-02 17:47:31.510 I/flutter (14808): STEP47D_GET_PRODUCT_BY_VENDOR_ID_ITEM: vendorId=aceh_clone_6319dc53314ee_10KPhdPgfOUpkHtzT3oS 
productId=aceh_product_aceh_clone_6319dc53314ee_10KPhdPgfOUpkHtzT3oS_V1SpZUEw203BJwGvbnaG name=Graps categoryID=636e30433dd7e publish=true
> 07-02 17:47:31.511 I/flutter (14808): STEP47D_GET_PRODUCT_BY_VENDOR_ID_ITEM: vendorId=aceh_clone_6319dc53314ee_10KPhdPgfOUpkHtzT3oS 
productId=aceh_product_aceh_clone_6319dc53314ee_10KPhdPgfOUpkHtzT3oS_b2r8Hp8MYio4LyH8Z1mR name=Fish Meat categoryID=OvjEAidyRSeuoH81pK4O publish=true
> 07-02 17:47:31.511 I/flutter (14808): STEP47D_GET_PRODUCT_BY_VENDOR_ID_ITEM: vendorId=aceh_clone_6319dc53314ee_10KPhdPgfOUpkHtzT3oS 
productId=aceh_product_aceh_clone_6319dc53314ee_10KPhdPgfOUpkHtzT3oS_k0cHUxOLfJvQn3pn74vm name=Cookies categoryID=zzq4LngLd8PWzYJfsvnjfV publish=true
> 07-02 17:47:31.516 I/flutter (14808): STEP47D_GET_PRODUCT_BY_VENDOR_ID_ITEM: vendorId=aceh_clone_6319dc53314ee_10KPhdPgfOUpkHtzT3oS 
productId=aceh_product_aceh_clone_6319dc53314ee_10KPhdPgfOUpkHtzT3oS_oGPyFHXL3uJHIPwA4ktM name=Masala Meggi categoryID=zzq4LngLd8PWzYJfsvnjfV publish=true
> 07-02 17:47:31.517 I/flutter (14808): STEP47D_GET_PRODUCT_BY_VENDOR_ID_ITEM: vendorId=aceh_clone_6319dc53314ee_10KPhdPgfOUpkHtzT3oS 
productId=aceh_product_aceh_clone_6319dc53314ee_10KPhdPgfOUpkHtzT3oS_r1WBqciM3iyIOvvjBvDE name=Chicken Meat categoryID=OvjEAidyRSeuoH81pK4O publish=true
> 07-02 17:47:31.517 I/flutter (14808): STEP47D_GET_PRODUCT_BY_VENDOR_ID_ITEM: vendorId=aceh_clone_6319dc53314ee_10KPhdPgfOUpkHtzT3oS 
productId=aceh_product_aceh_clone_6319dc53314ee_10KPhdPgfOUpkHtzT3oS_rMNaVr9UOshrt6Tpr3Rw name=Biscuits categoryID=zzq4LngLd8PWzYJfsvnjfV publish=true
> 07-02 17:47:31.517 I/flutter (14808): STEP47D_GET_PRODUCT_BY_VENDOR_ID_ITEM: vendorId=aceh_clone_6319dc53314ee_10KPhdPgfOUpkHtzT3oS 
productId=aceh_product_aceh_clone_6319dc53314ee_10KPhdPgfOUpkHtzT3oS_rvH1e0yXrSHnMetXACHU name=Broccoli categoryID=88pNxhccktxkSgIndZ8e publish=true
> 07-02 17:47:31.517 I/flutter (14808): STEP47D_GET_PRODUCT_BY_VENDOR_ID_ITEM: vendorId=aceh_clone_6319dc53314ee_10KPhdPgfOUpkHtzT3oS 
productId=aceh_product_aceh_clone_6319dc53314ee_10KPhdPgfOUpkHtzT3oS_tJoQSqNMDGvRWLEaTVgA name=Apple categoryID=636e30433dd7e publish=true
> 07-02 17:47:31.517 I/flutter (14808): STEP47D_GET_PRODUCT_BY_VENDOR_ID_ITEM: vendorId=aceh_clone_6319dc53314ee_10KPhdPgfOUpkHtzT3oS 
productId=aceh_product_aceh_clone_6319dc53314ee_10KPhdPgfOUpkHtzT3oS_tSqVXFKISP05jDRZy8VJ name=Orange categoryID=636e30433dd7e publish=true
> 07-02 17:47:31.517 I/flutter (14808): STEP47D_GET_PRODUCT_BY_VENDOR_ID_ITEM: vendorId=aceh_clone_6319dc53314ee_10KPhdPgfOUpkHtzT3oS 
productId=aceh_product_aceh_clone_6319dc53314ee_10KPhdPgfOUpkHtzT3oS_tjoJjD7WFoipvBD5WaPr name=Kiwi categoryID=636e30433dd7e publish=true
> 07-02 17:47:31.517 I/flutter (14808): STEP47D_GET_PRODUCT_BY_VENDOR_ID_RESULT: vendorId=aceh_clone_6319dc53314ee_10KPhdPgfOUpkHtzT3oS count=10
> 07-02 17:47:31.520 I/flutter (14808): STEP47D_RESTAURANT_DETAIL_PRODUCT_LIST_ASSIGNED: vendorId=aceh_clone_6319dc53314ee_10KPhdPgfOUpkHtzT3oS count=10 
allCount=10
  07-02 17:47:31.618 I/libPerfCtl(  970): xgfGetFPS pid:2380 fps:62
  07-02 17:47:31.618 I/AppThermalMode(  970): [perfNotifyThermalState] hdl:0
  07-02 17:47:31.618 I/AppThermalMode(  970): [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: 60,fg->pid:14808
  07-02 17:47:31.618 I/AppThermalMode(  970): [perfNotifyThermalState] appThermalIdx -1:
  07-02 17:47:31.618 I/libPerfCtl(  970): xgfGetFPS pid:14808 fps:49
  07-02 17:47:31.618 I/AppThermalMode(  970): [perfNotifyThermalState] hdl:0
  07-02 17:47:31.618 I/AppThermalMode(  970): [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: 60,fg->pid:14808
  07-02 17:47:31.619 I/AppThermalMode(  970): [perfNotifyThermalState] appThermalIdx -1:
  07-02 17:47:31.756 W/studio.screen.sharing(17917): Retrying writing to video socket
  07-02 17:47:31.757 I/studio.screen.sharing(17917): Writing to video socket succeeded
  07-02 17:47:31.763 D/CCodec  (17917): ISConfig not changed
> 07-02 17:47:31.774 D/CCodecBuffers(17917): [c2.android.vp8.encoder#428:Output[N]] pushToStash: pushToStash -- pending size = 14
  07-02 17:47:31.801 W/studio.screen.sharing(17917): Writing to video socket failed - Try again
  07-02 17:47:31.848 W/studio.screen.sharing(17917): Retrying writing to video socket
  07-02 17:47:31.848 I/studio.screen.sharing(17917): Writing to video socket succeeded
  07-02 17:47:31.851 D/CCodec  (17917): ISConfig not changed
  07-02 17:47:31.868 D/BufferPoolAccessor2.0(11425): bufferpool2 0xb4000072a18c9748 : 69(617623 size) total buffers - 1(3262 size) used buffers - 849/2736 
(recycle/alloc) - 1924/2735 (fetch/transfer)
  07-02 17:47:32.160 D/BufferPoolAccessor2.0(11425): bufferpool2 0xb4000072a18c9748 : 66(481012 size) total buffers - 1(623 size) used buffers - 849/2753 
(recycle/alloc) - 1941/2752 (fetch/transfer)
> 07-02 17:47:32.243 I/BufferQueueProducer( 1012): 
[SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity](BLAST)#19933](this:0xb40000731f5ba278,id:-1,api:0,p:-1,c:1012) queueBuffer: fps=55.00 
dur=1000.09 max=33.97 min=14.99
  07-02 17:47:32.257 I/BufferQueueProducer( 1012): [VDS-studio.screen.sharing:0 SINK](this:0xb40000725f6b6a38,id:-1,api:1,p:1012,c:1012) queueBuffer: 
fps=54.78 dur=1004.00 max=38.30 min=11.99
  07-02 17:47:32.258 I/hwcomposer(  935): [HWCDisplay] [Display_0 (type:1)] fps:54.773460,dur:1004.14,max:39.02,min:11.72  
  07-02 17:47:32.261 I/StatusBarNetworkRateView( 2380): wifi is default. hide second network rate view. StatusBarNetworkRateView subId=2, 
isFirstSimCard=false, mLocation=QS_NEW NetworkRateState=NetworkRateState{visible=true, activeMobileDataSubId=2, totalRate=16.102, netWorkState=1, 
isAirplane=false, netRateStateBySettingGlobal=1, networkRate='16,1', networkRateUnit='KB/S'}
  07-02 17:47:32.280 I/mtkpower_client( 1080): perf_lock_acq, hdl:0, dur:30000, num:2, tid:1080
  07-02 17:47:32.281 I/mtkpower_client( 1080): ret_hdl:56100
  07-02 17:47:32.284 I/mtkpower_client( 1080): perf_lock_rel, hdl:56100, tid:1080
  07-02 17:47:32.285 I/libPowerHal(  970): [PD] fpsgo update cmd:1408300 param:0
> 07-02 17:47:32.292 I/BufferQueueProducer( 1012): [StatusBar#97](this:0xb40000731f578a88,id:-1,api:0,p:-1,c:1012) queueBuffer: fps=8.35 dur=1198.30 
max=1031.89 min=16.01
  07-02 17:47:32.449 D/BufferPoolAccessor2.0(11425): bufferpool2 0xb4000072a18c9748 : 66(445403 size) total buffers - 1(818 size) used buffers - 849/2770 
(recycle/alloc) - 1958/2769 (fetch/transfer)
  07-02 17:47:32.618 I/libPerfCtl(  970): xgfGetFPS pid:2380 fps:-1
  07-02 17:47:32.618 I/AppThermalMode(  970): [perfNotifyThermalState] hdl:0
  07-02 17:47:32.618 I/AppThermalMode(  970): [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: 60,fg->pid:14808
  07-02 17:47:32.618 I/AppThermalMode(  970): [perfNotifyThermalState] appThermalIdx -1:
  07-02 17:47:32.620 I/libPerfCtl(  970): xgfGetFPS pid:14808 fps:59
  07-02 17:47:32.620 I/AppThermalMode(  970): [perfNotifyThermalState] hdl:0
  07-02 17:47:32.620 I/AppThermalMode(  970): [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: 60,fg->pid:14808
  07-02 17:47:32.620 I/AppThermalMode(  970): [perfNotifyThermalState] appThermalIdx -1:
  07-02 17:47:32.676 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.039825,0.000062, totalTime 0.039888 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:47:32.716 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000000,0.039649,0.000054, totalTime 0.039704 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:47:32.721 I/native  ( 5782): I0000 00:00:1782989252.721037    5913 soda_async_impl.cc:1426] Current audio timestamp: 1782989251411520
  07-02 17:47:32.727 D/BufferPoolAccessor2.0(11425): bufferpool2 0xb4000072a18c9748 : 66(188683 size) total buffers - 1(751 size) used buffers - 849/2787 
(recycle/alloc) - 1975/2786 (fetch/transfer)
  07-02 17:47:32.746 I/mtkpower_client( 1080): perf_lock_acq, hdl:0, dur:30000, num:2, tid:1080
  07-02 17:47:32.747 I/mtkpower_client( 1080): ret_hdl:56101
  07-02 17:47:32.747 I/mtkpower_client( 1080): perf_lock_rel, hdl:56101, tid:1080
  07-02 17:47:32.749 I/libPowerHal(  970): [PD] fpsgo update cmd:1408300 param:0
  07-02 17:47:32.839 D/WifiClientModeImpl[24001351:wlan0]( 1698): updateLinkLayerStatsRssiSpeedFrequencyCapabilities rssi=-51 TxLinkspeed=54 freq=5765 
RxLinkSpeed=54
  07-02 17:47:32.842 I/TranWifiSmartAssistantController( 1698): start current network monitor 
  07-02 17:47:32.842 I/WifiService( 1698): getConnectionInfo uid=1000
  07-02 17:47:33.101 W/NetworkTypeHelper( 1698): Failed to call buildTemplateCarrierMetered, java.lang.reflect.InvocationTargetException
  07-02 17:47:33.101 D/NetworkStatusMonitor( 1698): getAllInterfaceNames network type is unknown
  07-02 17:47:33.101 D/NetworkStatusMonitor( 1698): getAllInterfaceNames network type is mobile
  07-02 17:47:33.101 D/NetworkStatusMonitor( 1698): getAllInterfaceNames network type is wifi
  07-02 17:47:33.101 D/NetworkStatusMonitor( 1698): onNetworkTypeChanged wifi => wifi
  07-02 17:47:33.160 D/BufferPoolAccessor2.0(11425): bufferpool2 0xb4000072a18c9748 : 66(58399 size) total buffers - 1(683 size) used buffers - 858/2813 
(recycle/alloc) - 1994/2812 (fetch/transfer)
> 07-02 17:47:33.258 I/BufferQueueProducer( 1012): 
[SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity](BLAST)#19933](this:0xb40000731f5ba278,id:-1,api:0,p:-1,c:1012) queueBuffer: fps=60.12 
dur=1014.62 max=19.22 min=14.00
  07-02 17:47:33.270 I/BufferQueueProducer( 1012): [VDS-studio.screen.sharing:0 SINK](this:0xb40000725f6b6a38,id:-1,api:1,p:1012,c:1012) queueBuffer: 
fps=60.21 dur=1013.11 max=21.66 min=9.15
  07-02 17:47:33.271 I/hwcomposer(  935): [HWCDisplay] [Display_0 (type:1)] fps:60.208305,dur:1013.15,max:22.18,min:8.66  
  07-02 17:47:33.371 I/NearbySharing( 4458): Network state changed: NetworkState(isRestricted=false, isOnline=true, isCongested=false, isMetered=false, 
isWifiConnected=true)
  07-02 17:47:33.430 D/TranWifiTputMonitor( 1698): WIFI: TX: 6 RX: 21 TOTAL = 27
  07-02 17:47:33.430 D/TranWifiTputMonitor( 1698): High Tput: false, TOTAL TPUT: 27
  07-02 17:47:33.479 D/BufferPoolAccessor2.0(11425): bufferpool2 0xb4000072a18c9748 : 66(57778 size) total buffers - 1(600 size) used buffers - 860/2832 
(recycle/alloc) - 2011/2831 (fetch/transfer)
  07-02 17:47:33.618 I/libPerfCtl(  970): xgfGetFPS pid:2380 fps:-1
  07-02 17:47:33.619 I/AppThermalMode(  970): [perfNotifyThermalState] hdl:0
  07-02 17:47:33.619 I/AppThermalMode(  970): [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: 60,fg->pid:14808
  07-02 17:47:33.619 I/AppThermalMode(  970): [perfNotifyThermalState] appThermalIdx -1:
  07-02 17:47:33.619 I/libPerfCtl(  970): xgfGetFPS pid:14808 fps:60
  07-02 17:47:33.619 I/AppThermalMode(  970): [perfNotifyThermalState] hdl:0
  07-02 17:47:33.619 I/AppThermalMode(  970): [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: 60,fg->pid:14808
  07-02 17:47:33.619 I/AppThermalMode(  970): [perfNotifyThermalState] appThermalIdx -1:
  07-02 17:47:33.656 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.040066,0.000205, totalTime 0.040272 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:47:33.736 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.039773,0.000073, totalTime 0.039848 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:47:33.830 D/BufferPoolAccessor2.0(11425): bufferpool2 0xb4000072a18c9748 : 66(47276 size) total buffers - 1(845 size) used buffers - 864/2853 
(recycle/alloc) - 2028/2852 (fetch/transfer)
  07-02 17:47:33.882 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000002,0.025782,0.000111, totalTime 0.025895 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:47:34.010 I/DisplayDeviceRepository( 1698): Display device changed: DisplayDeviceInfo{"Layar Bawaan": uniqueId="local:0", 1080 x 2436, modeId 
2, renderFrameRate 60.000004, defaultModeId 1, userPreferredModeId -1, supportedModes [{id=1, width=1080, height=2436, fps=120.00001, vsync=120.00001, 
synthetic=false, alternativeRefreshRates=[60.0], supportedHdrTypes=[]}, {id=2, width=1080, height=2436, fps=60.0, vsync=60.0, synthetic=false, 
alternativeRefreshRates=[120.00001], supportedHdrTypes=[]}], colorMode 0, supportedColorModes [0, 7, 9], hdrCapabilities 
HdrCapabilities{mSupportedHdrTypes=[], mMaxLuminance=500.0, mMaxAverageLuminance=500.0, mMinLuminance=0.0}, allmSupported false, gameContentTypeSupported 
false, density 480, 392.839 x 392.828 dpi, appVsyncOff 2400001, presDeadline 28600000, cutout DisplayCutout{insets=Rect(0, 108 - 0, 0) 
waterfall=Insets{left=0, top=0, right=0, bottom=0} boundingRect={Bounds=[Rect(0, 0 - 0, 0), Rect(468, 0 - 612, 108), Rect(0, 0 - 0, 0), Rect(0, 0 - 0, 
0)]} cutoutPathParserInfo={CutoutPathParserInfo{displayWidth=1080 displayHeight=2436 physicalDisplayWidth=1080 physicalDisplayHeight=2436 density={3.0} 
cutoutSpec={M -24,0 L -24,36 L 24,36 L 24,0 Z @dp} rotation={0} scale={1.0} physicalPixelDisplaySizeRatio={1.0}}} sideOverrides={}}, touch INTERNAL, 
rotation 0, type INTERNAL, address {port=0}, deviceProductInfo null, state ON, committedState ON, frameRateOverride {uid=1000 frameRateHz=60.0} {uid=10159 
frameRateHz=60.0} {uid=10509 frameRateHz=60.0} , brightnessMinimum 0.0, brightnessMaximum 1.0, brightnessDefault 0.2, hdrSdrRatio NaN, 
FLAG_ALLOWED_TO_BE_DEFAULT_DISPLAY, FLAG_ROTATES_WITH_CONTENT, FLAG_SECURE, FLAG_SUPPORTS_PROTECTED_BUFFERS, FLAG_TRUSTED, installOrientation 0, 
displayShape DisplayShape{ spec=596679847 displayWidth=1080 displayHeight=2436 physicalPixelDisplaySizeRatio=1.0 rotation=0 offsetX=0 offsetY=0 scale=1.0}}
  07-02 17:47:34.014 I/Griffin/DeviceState( 1698): virtualDisplayPackageName :{com.android.shell=2000}
> 07-02 17:47:34.112 E/BLASTBufferQueue(14808): [SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity]#1](f:1,a:6) acquireNextBufferLocked: 
Can't acquire next buffer. Already acquired max frames 6 max:4 + 2
> 07-02 17:47:34.127 E/BLASTBufferQueue(14808): [SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity]#1](f:1,a:6) acquireNextBufferLocked: 
Can't acquire next buffer. Already acquired max frames 6 max:4 + 2
> 07-02 17:47:34.146 E/BLASTBufferQueue(14808): [SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity]#1](f:1,a:6) acquireNextBufferLocked: 
Can't acquire next buffer. Already acquired max frames 6 max:4 + 2
> 07-02 17:47:34.160 E/BLASTBufferQueue(14808): [SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity]#1](f:1,a:6) acquireNextBufferLocked: 
Can't acquire next buffer. Already acquired max frames 6 max:4 + 2
> 07-02 17:47:34.175 E/BLASTBufferQueue(14808): [SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity]#1](f:1,a:6) acquireNextBufferLocked: 
Can't acquire next buffer. Already acquired max frames 6 max:4 + 2
> 07-02 17:47:34.193 E/BLASTBufferQueue(14808): [SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity]#1](f:1,a:6) acquireNextBufferLocked: 
Can't acquire next buffer. Already acquired max frames 6 max:4 + 2
> 07-02 17:47:34.211 E/BLASTBufferQueue(14808): [SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity]#1](f:1,a:6) acquireNextBufferLocked: 
Can't acquire next buffer. Already acquired max frames 6 max:4 + 2
> 07-02 17:47:34.225 E/BLASTBufferQueue(14808): [SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity]#1](f:1,a:6) acquireNextBufferLocked: 
Can't acquire next buffer. Already acquired max frames 6 max:4 + 2
> 07-02 17:47:34.241 E/BLASTBufferQueue(14808): [SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity]#1](f:1,a:6) acquireNextBufferLocked: 
Can't acquire next buffer. Already acquired max frames 6 max:4 + 2
  07-02 17:47:34.242 D/BufferPoolAccessor2.0(11425): bufferpool2 0xb4000072a18c9748 : 66(47007 size) total buffers - 1(699 size) used buffers - 871/2877 
(recycle/alloc) - 2045/2876 (fetch/transfer)
> 07-02 17:47:34.257 E/BLASTBufferQueue(14808): [SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity]#1](f:1,a:6) acquireNextBufferLocked: 
Can't acquire next buffer. Already acquired max frames 6 max:4 + 2
> 07-02 17:47:34.273 I/BufferQueueProducer( 1012): 
[SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity](BLAST)#19933](this:0xb40000731f5ba278,id:-1,api:0,p:-1,c:1012) queueBuffer: fps=59.08 
dur=1015.50 max=33.74 min=14.93
> 07-02 17:47:34.275 E/BLASTBufferQueue(14808): [SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity]#1](f:1,a:6) acquireNextBufferLocked: 
Can't acquire next buffer. Already acquired max frames 6 max:4 + 2
  07-02 17:47:34.276 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.039799,0.000110, totalTime 0.039910 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:47:34.283 I/BufferQueueProducer( 1012): [VDS-studio.screen.sharing:0 SINK](this:0xb40000725f6b6a38,id:-1,api:1,p:1012,c:1012) queueBuffer: 
fps=59.19 dur=1013.64 max=34.81 min=12.02
  07-02 17:47:34.285 I/hwcomposer(  935): [HWCDisplay] [Display_0 (type:1)] fps:59.213943,dur:1013.27,max:34.69,min:11.77  
> 07-02 17:47:34.292 E/BLASTBufferQueue(14808): [SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity]#1](f:1,a:6) acquireNextBufferLocked: 
Can't acquire next buffer. Already acquired max frames 6 max:4 + 2
> 07-02 17:47:34.309 E/BLASTBufferQueue(14808): [SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity]#1](f:1,a:6) acquireNextBufferLocked: 
Can't acquire next buffer. Already acquired max frames 6 max:4 + 2
> 07-02 17:47:34.325 E/BLASTBufferQueue(14808): [SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity]#1](f:1,a:6) acquireNextBufferLocked: 
Can't acquire next buffer. Already acquired max frames 6 max:4 + 2
> 07-02 17:47:34.343 E/BLASTBufferQueue(14808): [SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity]#1](f:1,a:6) acquireNextBufferLocked: 
Can't acquire next buffer. Already acquired max frames 6 max:4 + 2
> 07-02 17:47:34.360 E/BLASTBufferQueue(14808): [SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity]#1](f:1,a:6) acquireNextBufferLocked: 
Can't acquire next buffer. Already acquired max frames 6 max:4 + 2
> 07-02 17:47:34.376 E/BLASTBufferQueue(14808): [SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity]#1](f:1,a:6) acquireNextBufferLocked: 
Can't acquire next buffer. Already acquired max frames 6 max:4 + 2
> 07-02 17:47:34.392 E/BLASTBufferQueue(14808): [SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity]#1](f:1,a:6) acquireNextBufferLocked: 
Can't acquire next buffer. Already acquired max frames 6 max:4 + 2
> 07-02 17:47:34.409 E/BLASTBufferQueue(14808): [SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity]#1](f:1,a:6) acquireNextBufferLocked: 
Can't acquire next buffer. Already acquired max frames 6 max:4 + 2
> 07-02 17:47:34.427 E/BLASTBufferQueue(14808): [SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity]#1](f:1,a:6) acquireNextBufferLocked: 
Can't acquire next buffer. Already acquired max frames 6 max:4 + 2
> 07-02 17:47:34.443 E/BLASTBufferQueue(14808): [SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity]#1](f:1,a:6) acquireNextBufferLocked: 
Can't acquire next buffer. Already acquired max frames 6 max:4 + 2
> 07-02 17:47:34.460 E/BLASTBufferQueue(14808): [SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity]#1](f:1,a:6) acquireNextBufferLocked: 
Can't acquire next buffer. Already acquired max frames 6 max:4 + 2
> 07-02 17:47:34.477 E/BLASTBufferQueue(14808): [SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity]#1](f:1,a:6) acquireNextBufferLocked: 
Can't acquire next buffer. Already acquired max frames 6 max:4 + 2
> 07-02 17:47:34.493 E/BLASTBufferQueue(14808): [SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity]#1](f:1,a:6) acquireNextBufferLocked: 
Can't acquire next buffer. Already acquired max frames 6 max:4 + 2
> 07-02 17:47:34.510 E/BLASTBufferQueue(14808): [SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity]#1](f:1,a:6) acquireNextBufferLocked: 
Can't acquire next buffer. Already acquired max frames 6 max:4 + 2
> 07-02 17:47:34.525 E/BLASTBufferQueue(14808): [SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity]#1](f:1,a:6) acquireNextBufferLocked: 
Can't acquire next buffer. Already acquired max frames 6 max:4 + 2
> 07-02 17:47:34.541 E/BLASTBufferQueue(14808): [SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity]#1](f:1,a:6) acquireNextBufferLocked: 
Can't acquire next buffer. Already acquired max frames 6 max:4 + 2
> 07-02 17:47:34.557 E/BLASTBufferQueue(14808): [SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity]#1](f:1,a:6) acquireNextBufferLocked: 
Can't acquire next buffer. Already acquired max frames 6 max:4 + 2
> 07-02 17:47:34.574 E/BLASTBufferQueue(14808): [SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity]#1](f:1,a:6) acquireNextBufferLocked: 
Can't acquire next buffer. Already acquired max frames 6 max:4 + 2
> 07-02 17:47:34.591 E/BLASTBufferQueue(14808): [SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity]#1](f:1,a:6) acquireNextBufferLocked: 
Can't acquire next buffer. Already acquired max frames 6 max:4 + 2
> 07-02 17:47:34.611 E/BLASTBufferQueue(14808): [SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity]#1](f:1,a:6) acquireNextBufferLocked: 
Can't acquire next buffer. Already acquired max frames 6 max:4 + 2
  07-02 17:47:34.619 I/libPerfCtl(  970): xgfGetFPS pid:2380 fps:-1
  07-02 17:47:34.619 I/AppThermalMode(  970): [perfNotifyThermalState] hdl:0
  07-02 17:47:34.619 I/AppThermalMode(  970): [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: 60,fg->pid:14808
  07-02 17:47:34.619 I/AppThermalMode(  970): [perfNotifyThermalState] appThermalIdx -1:
  07-02 17:47:34.619 I/libPerfCtl(  970): xgfGetFPS pid:14808 fps:59
  07-02 17:47:34.619 I/AppThermalMode(  970): [perfNotifyThermalState] hdl:0
  07-02 17:47:34.619 I/AppThermalMode(  970): [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: 60,fg->pid:14808
  07-02 17:47:34.619 I/AppThermalMode(  970): [perfNotifyThermalState] appThermalIdx -1:
> 07-02 17:47:34.627 E/BLASTBufferQueue(14808): [SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity]#1](f:1,a:6) acquireNextBufferLocked: 
Can't acquire next buffer. Already acquired max frames 6 max:4 + 2
> 07-02 17:47:34.643 E/BLASTBufferQueue(14808): [SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity]#1](f:1,a:6) acquireNextBufferLocked: 
Can't acquire next buffer. Already acquired max frames 6 max:4 + 2
  07-02 17:47:34.645 D/BufferPoolAccessor2.0(11425): bufferpool2 0xb4000072a18c9748 : 66(46743 size) total buffers - 1(667 size) used buffers - 878/2901 
(recycle/alloc) - 2063/2900 (fetch/transfer)
> 07-02 17:47:34.660 E/BLASTBufferQueue(14808): [SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity]#1](f:1,a:6) acquireNextBufferLocked: 
Can't acquire next buffer. Already acquired max frames 6 max:4 + 2
> 07-02 17:47:34.676 E/BLASTBufferQueue(14808): [SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity]#1](f:1,a:6) acquireNextBufferLocked: 
Can't acquire next buffer. Already acquired max frames 6 max:4 + 2
> 07-02 17:47:34.693 E/BLASTBufferQueue(14808): [SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity]#1](f:1,a:6) acquireNextBufferLocked: 
Can't acquire next buffer. Already acquired max frames 6 max:4 + 2
> 07-02 17:47:34.710 E/BLASTBufferQueue(14808): [SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity]#1](f:1,a:6) acquireNextBufferLocked: 
Can't acquire next buffer. Already acquired max frames 6 max:4 + 2
> 07-02 17:47:34.726 E/BLASTBufferQueue(14808): [SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity]#1](f:1,a:6) acquireNextBufferLocked: 
Can't acquire next buffer. Already acquired max frames 6 max:4 + 2
> 07-02 17:47:34.745 E/BLASTBufferQueue(14808): [SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity]#1](f:1,a:6) acquireNextBufferLocked: 
Can't acquire next buffer. Already acquired max frames 6 max:4 + 2
> 07-02 17:47:34.759 E/BLASTBufferQueue(14808): [SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity]#1](f:1,a:6) acquireNextBufferLocked: 
Can't acquire next buffer. Already acquired max frames 6 max:4 + 2
> 07-02 17:47:34.777 E/BLASTBufferQueue(14808): [SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity]#1](f:1,a:6) acquireNextBufferLocked: 
Can't acquire next buffer. Already acquired max frames 6 max:4 + 2
> 07-02 17:47:34.790 E/BLASTBufferQueue(14808): [SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity]#1](f:1,a:6) acquireNextBufferLocked: 
Can't acquire next buffer. Already acquired max frames 6 max:4 + 2
> 07-02 17:47:34.807 E/BLASTBufferQueue(14808): [SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity]#1](f:1,a:6) acquireNextBufferLocked: 
Can't acquire next buffer. Already acquired max frames 6 max:4 + 2
> 07-02 17:47:34.824 E/BLASTBufferQueue(14808): [SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity]#1](f:1,a:6) acquireNextBufferLocked: 
Can't acquire next buffer. Already acquired max frames 6 max:4 + 2
> 07-02 17:47:34.842 E/BLASTBufferQueue(14808): [SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity]#1](f:1,a:6) acquireNextBufferLocked: 
Can't acquire next buffer. Already acquired max frames 6 max:4 + 2
> 07-02 17:47:34.861 E/BLASTBufferQueue(14808): [SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity]#1](f:1,a:6) acquireNextBufferLocked: 
Can't acquire next buffer. Already acquired max frames 6 max:4 + 2
> 07-02 17:47:34.875 E/BLASTBufferQueue(14808): [SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity]#1](f:1,a:6) acquireNextBufferLocked: 
Can't acquire next buffer. Already acquired max frames 6 max:4 + 2
  07-02 17:47:34.878 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.022215,0.000084, totalTime 0.022300 > logTimeout 
0.022000 TIMEOUT!!
> 07-02 17:47:34.889 E/BLASTBufferQueue(14808): [SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity]#1](f:1,a:6) acquireNextBufferLocked: 
Can't acquire next buffer. Already acquired max frames 6 max:4 + 2
  07-02 17:47:34.920 D/TriggerService( 4219): trigger service is running
  07-02 17:47:34.927 I/mtkpower_client( 1080): perf_lock_acq, hdl:0, dur:30000, num:2, tid:1080
  07-02 17:47:34.929 I/mtkpower_client( 1080): ret_hdl:56102
  07-02 17:47:34.955 D/BufferPoolAccessor2.0(11425): bufferpool2 0xb4000072a18c9748 : 66(46636 size) total buffers - 1(670 size) used buffers - 880/2920 
(recycle/alloc) - 2080/2919 (fetch/transfer)
  07-02 17:47:34.976 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.039855,0.000085, totalTime 0.039942 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:47:35.196 I/Hiber/importantScene( 1698): isTrafficActive uid:10271 speed :0
  07-02 17:47:35.197 I/Hiber/appStateMachine( 1698): uid:10271 enter FrozenState
  07-02 17:47:35.203 I/Hiber/stateManager( 1698): freeze uid: 10271 com.whatsapp costTime=7ms ,last unfreeze 5s ago
  07-02 17:47:35.203 I/Hiber/restrictionPolicy( 1698): uid:10271  pkgName:com.whatsapp isAllowedNet
  07-02 17:47:35.204 I/Hiber/nativeServiceClient( 1698): watch app network uid=10271, persistent=0
  07-02 17:47:35.204 I/Hiber/hiber( 1698): msg for start proxy frozen state
  07-02 17:47:35.204 D/ActivityManager( 1698): Hiber try idle uid[10271] by hiber ,bgTime>0 ? true,isIdled before ? true ,isCurAllowListed ? false 
,isProcStateBackground?true
  07-02 17:47:35.204 D/ActivityManager( 1698): Hiber try idle uid[10271] by hiber
  07-02 17:47:35.204 I/Hiber/proxyManager( 1698): p_service: 10271
  07-02 17:47:35.204 I/Hiber/proxyManager( 1698): p_job: 10271 pkgName=com.whatsapp which=2
  07-02 17:47:35.204 E/ApplicationHelper( 1698): Fail to get PackageManager
  07-02 17:47:35.204 I/Hiber/hiber( 1698): proxy alarm (uid=10271, pkgName=com.whatsapp)
  07-02 17:47:35.204 I/Hiber/proxyManager( 1698): p_alarm: uid=10271, pkgName=com.whatsapp
  07-02 17:47:35.204 D/Hiber/alarmManagerServiceExtImpl( 1698): proxyAlarms, alarm=Alarm{bfb382a type 3 origWhen 180132195 whenElapsed 180132195 
com.whatsapp}
  07-02 17:47:35.204 D/Hiber/alarmManagerServiceExtImpl( 1698): proxyAlarms, alarm=Alarm{4589639 type 2 origWhen 186378499 whenElapsed 186378499 
com.whatsapp}
  07-02 17:47:35.204 D/Hiber/alarmManagerServiceExtImpl( 1698): proxyAlarms, alarm=Alarm{b21966e type 2 origWhen 2675331340 whenElapsed 2675331340 
com.whatsapp}
  07-02 17:47:35.204 D/Hiber/alarmManagerServiceExtImpl( 1698): proxyAlarms, alarm=Alarm{2190d1e type 2 origWhen 2675331341 whenElapsed 2675331341 
com.whatsapp}
  07-02 17:47:35.204 D/Hiber/alarmManagerServiceExtImpl( 1698): proxyAlarms leave, uid=10271, packageName=com.whatsapp
  07-02 17:47:35.204 I/Hiber/proxyManager( 1698): p_sensor: uid=10271, pkgName=com.whatsapp
  07-02 17:47:35.272 I/mtkpower_client( 1080): perf_lock_rel, hdl:56102, tid:1080
  07-02 17:47:35.273 I/libPowerHal(  970): [PD] fpsgo update cmd:1408300 param:0
> 07-02 17:47:35.289 I/BufferQueueProducer( 1012): 
[SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity](BLAST)#19933](this:0xb40000731f5ba278,id:-1,api:0,p:-1,c:1012) queueBuffer: fps=40.37 
dur=1015.50 max=349.64 min=15.44
  07-02 17:47:35.299 I/BufferQueueProducer( 1012): [VDS-studio.screen.sharing:0 SINK](this:0xb40000725f6b6a38,id:-1,api:1,p:1012,c:1012) queueBuffer: 
fps=40.36 dur=1015.94 max=351.10 min=12.24
  07-02 17:47:35.301 I/hwcomposer(  935): [HWCDisplay] [Display_0 (type:1)] fps:40.359310,dur:1015.87,max:351.38,min:12.22  
  07-02 17:47:35.336 I/mtkpower_client( 1080): perf_lock_acq, hdl:0, dur:30000, num:2, tid:1080
  07-02 17:47:35.337 I/mtkpower_client( 1080): ret_hdl:56103
  07-02 17:47:35.596 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.039718,0.000106, totalTime 0.039826 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:47:35.619 I/libPerfCtl(  970): xgfGetFPS pid:2380 fps:-1
  07-02 17:47:35.619 I/AppThermalMode(  970): [perfNotifyThermalState] hdl:0
  07-02 17:47:35.619 I/AppThermalMode(  970): [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: 60,fg->pid:14808
  07-02 17:47:35.619 I/AppThermalMode(  970): [perfNotifyThermalState] appThermalIdx -1:
  07-02 17:47:35.620 I/libPerfCtl(  970): xgfGetFPS pid:14808 fps:58
  07-02 17:47:35.620 I/AppThermalMode(  970): [perfNotifyThermalState] hdl:0
  07-02 17:47:35.620 I/AppThermalMode(  970): [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: 60,fg->pid:14808
  07-02 17:47:35.620 I/AppThermalMode(  970): [perfNotifyThermalState] appThermalIdx -1:
  07-02 17:47:35.845 I/TranWifiSmartAssistantController( 1698): start current network monitor 
  07-02 17:47:35.845 I/WifiService( 1698): getConnectionInfo uid=1000
  07-02 17:47:35.845 V/WifiService( 1698): Clearing REDACT_FOR_LOCAL_MAC_ADDRESS for android(uid=1000)
  07-02 17:47:35.845 V/WifiService( 1698): Clearing REDACT_FOR_NETWORK_SETTINGS for android(uid=1000)
  07-02 17:47:35.845 V/WifiService( 1698): Clearing REDACT_FOR_ACCESS_FINE_LOCATION for android(uid=1000)
  07-02 17:47:35.845 I/TranWifiSmartAssistantController( 1698): userIgnored :false isScoredCurrentNetwork :false
  07-02 17:47:35.846 I/TranWifiSmartAssistantController( 1698): mCurrentNetwork :133 SSID :"TAUFIKKOPIBATOH@WIFI.ID"
  07-02 17:47:37.289 I/libPowerHal(  970): [PD] fpsgo update cmd:1404500 param:0
  07-02 17:47:37.291 I/FPSGO   ( 1080): perfLockRel hdl:56054
  07-02 17:47:37.292 I/libPowerHal(  970): [PD] fpsgo update cmd:1438300, param:1000
  07-02 17:47:37.294 I/libPowerHal(  970): [PD] fpsgo update cmd:1438400, param:1000
  07-02 17:47:37.296 I/libPowerHal(  970): [PD] fpsgo update cmd:1438600 param:1000
  07-02 17:47:37.297 I/libPowerHal(  970): [PD] fpsgo update cmd:1438700 param:1000
> 07-02 17:47:37.304 I/BufferQueueProducer( 1012): [StatusBar#97](this:0xb40000731f578a88,id:-1,api:0,p:-1,c:1012) queueBuffer: fps=0.20 dur=5012.45 
max=5012.45 min=5012.45
  07-02 17:47:37.318 I/BufferQueueProducer( 1012): [VDS-studio.screen.sharing:0 SINK](this:0xb40000725f6b6a38,id:-1,api:1,p:1012,c:1012) queueBuffer: 
fps=1.49 dur=2019.12 max=1100.80 min=14.22
  07-02 17:47:37.320 I/hwcomposer(  935): [HWCDisplay] [Display_0 (type:1)] fps:1.485563,dur:2019.44,max:1100.88,min:13.90  
  07-02 17:47:37.620 I/libPerfCtl(  970): xgfGetFPS pid:2380 fps:-1
  07-02 17:47:37.620 I/AppThermalMode(  970): [perfNotifyThermalState] hdl:0
  07-02 17:47:37.620 I/AppThermalMode(  970): [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: -1,fg->pid:14808
  07-02 17:47:37.620 I/AppThermalMode(  970): [perfNotifyThermalState] appThermalIdx -1:
  07-02 17:47:37.620 I/libPerfCtl(  970): xgfGetFPS pid:14808 fps:-1
  07-02 17:47:37.620 I/AppThermalMode(  970): [perfNotifyThermalState] hdl:0
  07-02 17:47:37.620 I/AppThermalMode(  970): [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: -1,fg->pid:14808
  07-02 17:47:37.620 I/AppThermalMode(  970): [perfNotifyThermalState] appThermalIdx -1:
  07-02 17:47:38.620 I/libPerfCtl(  970): xgfGetFPS pid:2380 fps:-1
  07-02 17:47:38.620 I/AppThermalMode(  970): [perfNotifyThermalState] hdl:0
  07-02 17:47:38.620 I/AppThermalMode(  970): [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: -1,fg->pid:14808
  07-02 17:47:38.620 I/AppThermalMode(  970): [perfNotifyThermalState] appThermalIdx -1:
  07-02 17:47:38.620 I/libPerfCtl(  970): xgfGetFPS pid:14808 fps:-1
  07-02 17:47:38.620 I/AppThermalMode(  970): [perfNotifyThermalState] hdl:0
  07-02 17:47:38.620 I/AppThermalMode(  970): [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: -1,fg->pid:14808
  07-02 17:47:38.620 I/AppThermalMode(  970): [perfNotifyThermalState] appThermalIdx -1:
  07-02 17:47:38.851 I/TranWifiSmartAssistantController( 1698): start current network monitor 
  07-02 17:47:38.852 I/WifiService( 1698): getConnectionInfo uid=1000
  07-02 17:47:41.925 D/WifiScoreCard( 1698): txRate: 6 txSpeed: 48
  07-02 17:47:41.925 D/WifiScoreCard( 1698): network update SIGNAL_POLL "TAUFIKKOPIBATOH@WIFI.ID" ID: 42486102 RSSI -52 txSpeed 48
  07-02 17:47:41.925 D/WifiClientModeImpl[24001351:wlan0]( 1698):  ClientModeImpl$L2ConnectedState screen=on 131 0 "TAUFIKKOPIBATOH@WIFI.ID" 
ac:4a:56:28:fe:ee rssi=-52 f=5765 sc=60 link=48 tx=5.7, 0.0, 0.0 rx=5.9 bcn=0 [on:0 tx:0 rx:0 period:3024] from screen [on:0 period:19540438] score=60
  07-02 17:47:41.926 V/WifiService( 1698): Clearing REDACT_FOR_NETWORK_SETTINGS for com.android.phone(uid=1001)
  07-02 17:47:41.927 V/WifiService( 1698): Clearing REDACT_FOR_ACCESS_FINE_LOCATION for com.android.phone(uid=1001)
  07-02 17:47:42.267 I/StatusBarNetworkRateView( 2380): wifi is default. hide second network rate view. StatusBarNetworkRateView subId=2, 
isFirstSimCard=false, mLocation=QS_NEW NetworkRateState=NetworkRateState{visible=true, activeMobileDataSubId=2, totalRate=0.0, netWorkState=1, 
isAirplane=false, netRateStateBySettingGlobal=1, networkRate='0,00', networkRateUnit='KB/S'}
> 07-02 17:47:42.316 I/BufferQueueProducer( 1012): [StatusBar#97](this:0xb40000731f578a88,id:-1,api:0,p:-1,c:1012) queueBuffer: fps=0.20 dur=5011.39 
max=5011.39 min=5011.39
  07-02 17:47:42.331 I/BufferQueueProducer( 1012): [VDS-studio.screen.sharing:0 SINK](this:0xb40000725f6b6a38,id:-1,api:1,p:1012,c:1012) queueBuffer: 
fps=0.20 dur=5012.59 max=5012.59 min=5012.59
  07-02 17:47:42.332 I/hwcomposer(  935): [HWCDisplay] [Display_0 (type:1)] fps:0.199512,dur:5012.22,max:5012.22,min:5012.22  
  07-02 17:47:42.346 D/BufferPoolAccessor2.0(11425): bufferpool2 0xb4000072a18c9748 : 50(62060 size) total buffers - 1(920 size) used buffers - 903/2956 
(recycle/alloc) - 2095/2955 (fetch/transfer)
  07-02 17:47:42.439 D/TranWifiTputMonitor( 1698): WIFI: TX: 0 RX: 0 TOTAL = 0
  07-02 17:47:42.440 D/TranWifiTputMonitor( 1698): High Tput: false, TOTAL TPUT: 0
  07-02 17:47:42.621 I/libPerfCtl(  970): xgfGetFPS pid:2380 fps:-1
  07-02 17:47:42.621 I/AppThermalMode(  970): [perfNotifyThermalState] hdl:0
  07-02 17:47:42.621 I/AppThermalMode(  970): [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: -1,fg->pid:14808
  07-02 17:47:42.621 I/AppThermalMode(  970): [perfNotifyThermalState] appThermalIdx -1:
  07-02 17:47:42.622 I/libPerfCtl(  970): xgfGetFPS pid:14808 fps:-1
  07-02 17:47:42.622 I/AppThermalMode(  970): [perfNotifyThermalState] hdl:0
  07-02 17:47:42.622 I/AppThermalMode(  970): [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: -1,fg->pid:14808
  07-02 17:47:42.622 I/AppThermalMode(  970): [perfNotifyThermalState] appThermalIdx -1:
  07-02 17:47:42.925 D/TriggerService( 4219): trigger service is running
  07-02 17:47:43.621 I/libPerfCtl(  970): xgfGetFPS pid:2380 fps:-1
  07-02 17:47:43.622 I/AppThermalMode(  970): [perfNotifyThermalState] hdl:0
  07-02 17:47:43.622 I/AppThermalMode(  970): [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: -1,fg->pid:14808
  07-02 17:47:43.622 I/AppThermalMode(  970): [perfNotifyThermalState] appThermalIdx -1:
  07-02 17:47:43.622 I/libPerfCtl(  970): xgfGetFPS pid:14808 fps:-1
  07-02 17:47:43.622 I/AppThermalMode(  970): [perfNotifyThermalState] hdl:0
  07-02 17:47:51.000 D/WifiScoreCard( 1698): BSSID update SIGNAL_POLL ID: 942782235 SSID: "TAUFIKKOPIBATOH@WIFI.ID", BSSID: ac:4a:56:28:fe:ee, MAC: 
02:16:3f:eb:28:01, IP: /10.226.145.77, Security type: 0, Supplicant state: COMPLETED, Wi-Fi standard: legacy, RSSI: -52, Link speed: 48Mbps, Tx Link 
speed: 48Mbps, Max Supported Tx Link speed: 54Mbps, Calculated Tx : 0Mbps, Rx Link speed: 54Mbps, Max Supported Rx Link speed: 54Mbps, Calculated Rx : 
0Mbps, Frequency: 5765MHz, Net ID: 142, Metered hint: false, score: 60, isUsable: true, CarrierMerged: false, SubscriptionId: -1, IsPrimary: 1, Trusted: 
true, Restricted: false, Ephemeral: false, OEM paid: false, OEM private: false, OSU AP: false, FQDN: <none>, Provider friendly name: <none>, Requesting 
package name: <none>"TAUFIKKOPIBATOH@WIFI.ID"openMLO Information: , Is TID-To-Link negotiation supported by the AP: false, AP MLD Address: <none>, AP MLO 
Link Id: <none>, AP MLO Affiliated links: <none>, Vendor Data: <none>
  07-02 17:47:51.001 D/WifiScoreCard( 1698): txRate: 2 txSpeed: 48
  07-02 17:47:51.002 D/WifiScoreCard( 1698): network update SIGNAL_POLL "TAUFIKKOPIBATOH@WIFI.ID" ID: 42486102 RSSI -52 txSpeed -1
  07-02 17:47:51.003 V/WifiManager( 2380): TrafficStateCallbackProxy: onStateChanged state=0
  07-02 17:47:51.003 D/WifiClientModeImpl[24001351:wlan0]( 1698):  ClientModeImpl$L2ConnectedState screen=on 131 0 "TAUFIKKOPIBATOH@WIFI.ID" 
ac:4a:56:28:fe:ee rssi=-52 f=5765 sc=60 link=48 tx=1.3, 0.0, 0.0 rx=1.1 bcn=0 [on:0 tx:0 rx:0 period:3025] from screen [on:0 period:19549516] score=60
  07-02 17:47:51.004 V/WifiManager( 2380): TrafficStateCallbackProxy: onStateChanged state=0
> 07-02 17:47:51.040 I/BufferQueueProducer( 1012): [StatusBar#97](this:0xb40000731f578a88,id:-1,api:0,p:-1,c:1012) queueBuffer: fps=0.11 dur=8724.04 
max=8724.04 min=8724.04
  07-02 17:47:51.053 I/BufferQueueProducer( 1012): [VDS-studio.screen.sharing:0 SINK](this:0xb40000725f6b6a38,id:-1,api:1,p:1012,c:1012) queueBuffer: 
fps=0.11 dur=8722.25 max=8722.25 min=8722.25
  07-02 17:47:51.055 I/hwcomposer(  935): [HWCDisplay] [Display_0 (type:1)] fps:0.114643,dur:8722.71,max:8722.71,min:8722.71  
  07-02 17:47:51.451 D/TranWifiTputMonitor( 1698): WIFI: TX: 0 RX: 0 TOTAL = 0
  07-02 17:47:51.452 D/TranWifiTputMonitor( 1698): High Tput: false, TOTAL TPUT: 0
  07-02 17:47:51.647 D/TranSignalStrengthComponentImpl( 2620): [LTE] dbm: -88
  07-02 17:47:51.648 D/TranSignalStrengthComponentImpl( 2620): [LTE] dbm: -88
  07-02 17:47:51.652 D/TranSignalStrengthComponentImpl(30413): [LTE] dbm: -88
  07-02 17:47:51.653 D/CallbackProxy( 6515): [onSignalStrengthsChanged]
  07-02 17:47:51.654 I/TranTele/TranPhoneInterfaceManager( 2620): TTC - onSignalStrengthsChanged
  07-02 17:47:51.656 D/TranSignalStrengthComponentImpl( 1698): [LTE] dbm: -88
  07-02 17:47:51.663 D/TranPhoneSwitcher( 2620): getNetworkType: 4G
  07-02 17:47:51.663 I/TranPhoneSwitcher( 2620): mDefaultsign:4subid :2
  07-02 17:47:51.665 D/TranSignalStrengthComponentImpl(30413): [LTE] dbm: -88
  07-02 17:47:51.665 D/TranSignalStrengthComponentImpl(30413): [LTE] dbm: -88
  07-02 17:47:52.038 I/libPerfCtl(  970): xgfGetFPS pid:2380 fps:-1
  07-02 17:47:52.038 I/AppThermalMode(  970): [perfNotifyThermalState] hdl:0
  07-02 17:47:52.038 I/AppThermalMode(  970): [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: -1,fg->pid:14808
  07-02 17:47:52.038 I/AppThermalMode(  970): [perfNotifyThermalState] appThermalIdx -1:
  07-02 17:47:52.272 I/StatusBarNetworkRateView( 2380): wifi is default. hide second network rate view. StatusBarNetworkRateView subId=2, 
isFirstSimCard=false, mLocation=QS_NEW NetworkRateState=NetworkRateState{visible=true, activeMobileDataSubId=2, totalRate=0.0, netWorkState=1, 
isAirplane=false, netRateStateBySettingGlobal=1, networkRate='0,00', networkRateUnit='KB/S'}
  07-02 17:47:52.930 D/TriggerService( 4219): trigger service is running



TEXT_END

## Runtime Trace Counters
TEXT_START
MATCH_NULL_CHECK: 0
MATCH_EXCEPTION_CAUGHT: 0
MATCH_DART_LINE: 0
TEXT_END

## Static Audit Product Category Likely Files
TEXT_START
LIKELY_FILE_COUNT: 110
MATCH_COUNT: 453

  lib\controllers\all_brand_product_controller.dart:37:          if (vendor.subscriptionPlan != null && Constant.isExpire(vendor) == false) {
  lib\controllers\all_brand_product_controller.dart:38:            if (vendor.subscriptionPlan?.itemLimit == '-1') {
> lib\controllers\all_brand_product_controller.dart:39:              allProduct.addAll(value);
  lib\controllers\all_brand_product_controller.dart:40:            } else {
  lib\controllers\all_brand_product_controller.dart:41:              int selectedProduct = value.length < int.parse(vendor.subscriptionPlan?.itemLimit ?? 
'0') ? (value.isEmpty ? 0 : (value.length)) : int.parse(vendor.subscriptionPlan?.itemLimit ?? '0');
> lib\controllers\all_brand_product_controller.dart:42:              allProduct.addAll(value.sublist(0, selectedProduct));
  lib\controllers\all_brand_product_controller.dart:43:            }
  lib\controllers\all_brand_product_controller.dart:44:          }
  lib\controllers\all_brand_product_controller.dart:45:        } else {
> lib\controllers\all_brand_product_controller.dart:46:          allProduct.addAll(value);
  lib\controllers\all_brand_product_controller.dart:47:        }
  lib\controllers\all_brand_product_controller.dart:48:      });
  lib\controllers\all_brand_product_controller.dart:49:    }
  lib\controllers\all_brand_product_controller.dart:50:    for (var element in productDataList) {
> lib\controllers\all_brand_product_controller.dart:51:      final bool productIsInList = allProduct.any((product) => product.id == element.id);
  lib\controllers\all_brand_product_controller.dart:52:      if (productIsInList) {
  lib\controllers\all_brand_product_controller.dart:53:        productList.add(element);
  lib\controllers\all_brand_product_controller.dart:54:      }
  lib\controllers\all_brand_product_controller.dart:55:    }
  lib\controllers\all_brand_product_controller.dart:56:  }
  lib\controllers\cart_controller.dart:113:  Future<void> getCartData() async {
  lib\controllers\cart_controller.dart:114:    cartProvider.cartStream.listen((event) async {
> lib\controllers\cart_controller.dart:115:      cartItem.clear();
> lib\controllers\cart_controller.dart:116:      cartItem.addAll(event);
> lib\controllers\cart_controller.dart:117:      if (cartItem.isNotEmpty) {
  lib\controllers\cart_controller.dart:118:        await FireStoreUtils.getVendorById(
> lib\controllers\cart_controller.dart:119:          cartItem.first.vendorID.toString(),
  lib\controllers\cart_controller.dart:120:        ).then((value) {
  lib\controllers\cart_controller.dart:121:          if (value != null) {
  lib\controllers\cart_controller.dart:122:            vendorModel.value = value;
  lib\controllers\cart_controller.dart:123:          }
  lib\controllers\cart_controller.dart:124:        });
  lib\controllers\cart_controller.dart:181:
  lib\controllers\cart_controller.dart:182:    /// ---------------- DELIVERY CHARGES ----------------
> lib\controllers\cart_controller.dart:183:    if (cartItem.isNotEmpty) {
  lib\controllers\cart_controller.dart:184:      if (selectedFoodType.value == "Delivery") {
  lib\controllers\cart_controller.dart:185:        totalDistance.value = double.parse(
  lib\controllers\cart_controller.dart:186:          Constant.getDistance(
  lib\controllers\cart_controller.dart:187:            lat1: selectedAddress.value.location!.latitude.toString(),
  lib\controllers\cart_controller.dart:188:            lng1: selectedAddress.value.location!.longitude.toString(),
  lib\controllers\cart_controller.dart:524:    for (CartProductModel cartProduct in cartItem) {
  lib\controllers\cart_controller.dart:525:      CartProductModel tempCart = cartProduct;
> lib\controllers\cart_controller.dart:526:      if (cartProduct.extrasPrice == '0') {
  lib\controllers\cart_controller.dart:527:        tempCart.extras = [];
  lib\controllers\cart_controller.dart:528:      }
  lib\controllers\cart_controller.dart:529:      tempProduc.add(tempCart);
  lib\controllers\cart_controller.dart:530:    }
  lib\controllers\cart_controller.dart:531:
  lib\controllers\cart_controller.dart:619:            for (
  lib\controllers\cart_controller.dart:620:              int j = 0;
> lib\controllers\cart_controller.dart:621:              j < productModel.itemAttribute!.variants!.length;
  lib\controllers\cart_controller.dart:622:              j++
  lib\controllers\cart_controller.dart:623:            ) {
> lib\controllers\cart_controller.dart:624:              if (productModel.itemAttribute!.variants![j].variantId ==
  lib\controllers\cart_controller.dart:625:                  tempProduc[i].id!.split('~').last) {
> lib\controllers\cart_controller.dart:626:                if (productModel.itemAttribute!.variants![j].variantQuantity !=
  lib\controllers\cart_controller.dart:627:                    "-1") {
> lib\controllers\cart_controller.dart:628:                  productModel.itemAttribute!.variants![j].variantQuantity =
  lib\controllers\cart_controller.dart:629:                      (int.parse(
  lib\controllers\cart_controller.dart:630:                                productModel
> lib\controllers\cart_controller.dart:631:                                    .itemAttribute!
  lib\controllers\cart_controller.dart:632:                                    .variants![j]
  lib\controllers\cart_controller.dart:633:                                    .variantQuantity
  lib\controllers\cart_controller.dart:634:                                    .toString(),
  lib\controllers\cart_controller.dart:635:                              ) -
> lib\controllers\cart_controller.dart:636:                              tempProduc[i].quantity!)
  lib\controllers\cart_controller.dart:637:                          .toString();
  lib\controllers\cart_controller.dart:638:                }
  lib\controllers\cart_controller.dart:639:              }
  lib\controllers\cart_controller.dart:640:            }
  lib\controllers\cart_controller.dart:641:          } else {
> lib\controllers\cart_controller.dart:642:            if (productModel.quantity != -1) {
> lib\controllers\cart_controller.dart:643:              productModel.quantity =
> lib\controllers\cart_controller.dart:644:                  (productModel.quantity! - tempProduc[i].quantity!);
  lib\controllers\cart_controller.dart:645:            }
  lib\controllers\cart_controller.dart:646:          }
  lib\controllers\cart_controller.dart:647:        } else {
  lib\controllers\cart_controller.dart:648:          if (productModel!.quantity != -1) {
> lib\controllers\cart_controller.dart:649:            productModel.quantity =
> lib\controllers\cart_controller.dart:650:                (productModel.quantity! - tempProduc[i].quantity!);
  lib\controllers\cart_controller.dart:651:          }
  lib\controllers\cart_controller.dart:652:        }
  lib\controllers\cart_controller.dart:653:
  lib\controllers\cart_controller.dart:654:        await FireStoreUtils.setProduct(productModel);
  lib\controllers\cart_controller.dart:655:      });
  lib\controllers\rate_product_controller.dart:59:          ratings.value = value.rating ?? 0.0;
  lib\controllers\rate_product_controller.dart:60:          commentController.value.text = value.comment.toString();
> lib\controllers\rate_product_controller.dart:61:          reviewAttribute.value = value.reviewAttributes!;
  lib\controllers\rate_product_controller.dart:62:          images.addAll(value.photos ?? []);
  lib\controllers\rate_product_controller.dart:63:        }
  lib\controllers\rate_product_controller.dart:64:      });
  lib\controllers\rate_product_controller.dart:65:
  lib\controllers\rate_product_controller.dart:66:      await FireStoreUtils.getProductById(productId.value.split('~').first).then((value) {
  lib\controllers\rate_product_controller.dart:67:        if (value != null) {
> lib\controllers\rate_product_controller.dart:68:          productModel.value = value;
  lib\controllers\rate_product_controller.dart:69:          if (ratingModel.value.id != null && ratingModel.value.id!.isNotEmpty) {
  lib\controllers\rate_product_controller.dart:70:            productReviewCount.value = value.reviewsCount! - 1;
  lib\controllers\rate_product_controller.dart:71:            productReviewSum.value = value.reviewsSum! - ratings.value;
  lib\controllers\rate_product_controller.dart:72:
  lib\controllers\rate_product_controller.dart:73:            if (value.reviewAttributes != null) {
> lib\controllers\rate_product_controller.dart:74:              value.reviewAttributes!.forEach((key, value) {
  lib\controllers\rate_product_controller.dart:75:                ReviewsAttribute reviewsAttributeModel = ReviewsAttribute.fromJson(value);
  lib\controllers\rate_product_controller.dart:76:                reviewsAttributeModel.reviewsCount = reviewsAttributeModel.reviewsCount! - 1;
  lib\controllers\rate_product_controller.dart:77:                reviewsAttributeModel.reviewsSum = reviewsAttributeModel.reviewsSum! - 
reviewAttribute[key];
  lib\controllers\rate_product_controller.dart:78:                reviewProductAttributes.addEntries([MapEntry(key, reviewsAttributeModel.toJson())]);
  lib\controllers\rate_product_controller.dart:79:              });
  lib\controllers\rate_product_controller.dart:83:            productReviewSum.value = double.parse(value.reviewsSum.toString());
  lib\controllers\rate_product_controller.dart:84:            if (value.reviewAttributes != null) {
> lib\controllers\rate_product_controller.dart:85:              reviewProductAttributes.value = value.reviewAttributes!;
  lib\controllers\rate_product_controller.dart:86:            }
  lib\controllers\rate_product_controller.dart:87:          }
  lib\controllers\rate_product_controller.dart:88:        }
  lib\controllers\rate_product_controller.dart:89:      });
  lib\controllers\rate_product_controller.dart:90:
> lib\controllers\rate_product_controller.dart:91:      await FireStoreUtils.getVendorById(productModel.value.vendorID.toString()).then((value) {
  lib\controllers\rate_product_controller.dart:92:        if (value != null) {
  lib\controllers\rate_product_controller.dart:93:          vendorModel.value = value;
  lib\controllers\rate_product_controller.dart:94:          if (ratingModel.value.id != null && ratingModel.value.id!.isNotEmpty) {
  lib\controllers\rate_product_controller.dart:95:            vendorReviewCount.value = value.reviewsCount! - 1;
  lib\controllers\rate_product_controller.dart:96:            vendorReviewSum.value = value.reviewsSum! - ratings.value;
  lib\controllers\rate_product_controller.dart:102:      });
  lib\controllers\rate_product_controller.dart:103:
> lib\controllers\rate_product_controller.dart:104:      await 
FireStoreUtils.getVendorCategoryByCategoryId(productModel.value.categoryID.toString()).then((value) async {
  lib\controllers\rate_product_controller.dart:105:        if (value != null) {
  lib\controllers\rate_product_controller.dart:106:          vendorCategoryModel.value = value;
> lib\controllers\rate_product_controller.dart:107:          for (var element in vendorCategoryModel.value.reviewAttributes!) {
  lib\controllers\rate_product_controller.dart:108:            await FireStoreUtils.getVendorReviewAttribute(element).then((value) {
  lib\controllers\rate_product_controller.dart:109:              reviewAttributeList.add(value!);
  lib\controllers\rate_product_controller.dart:110:            });
  lib\controllers\rate_product_controller.dart:111:          }
  lib\controllers\rate_product_controller.dart:112:        }
  lib\controllers\rate_product_controller.dart:120:    if (ratings.value != 0.0) {
  lib\controllers\rate_product_controller.dart:121:      ShowToastDialog.showLoader("Please wait...".tr);
> lib\controllers\rate_product_controller.dart:122:      productModel.value.reviewsCount = productReviewCount.value + 1;
> lib\controllers\rate_product_controller.dart:123:      productModel.value.reviewsSum = productReviewSum.value + ratings.value;
> lib\controllers\rate_product_controller.dart:124:      productModel.value.reviewAttributes = reviewProductAttributes;
  lib\controllers\rate_product_controller.dart:125:
  lib\controllers\rate_product_controller.dart:126:      vendorModel.value.reviewsCount = vendorReviewCount.value + 1;
  lib\controllers\rate_product_controller.dart:127:      vendorModel.value.reviewsSum = vendorReviewSum.value + ratings.value;
  lib\controllers\rate_product_controller.dart:128:
  lib\controllers\rate_product_controller.dart:129:      if (reviewProductAttributes.isEmpty) {
  lib\controllers\rate_product_controller.dart:157:        id: ratingModel.value.id != null && ratingModel.value.id!.isNotEmpty ? ratingModel.value.id : 
Constant.getUuid(),
  lib\controllers\rate_product_controller.dart:158:        orderId: orderModel.value.id,
> lib\controllers\rate_product_controller.dart:159:        vendorId: productModel.value.vendorID,
  lib\controllers\rate_product_controller.dart:160:        createdAt: Timestamp.now(),
  lib\controllers\rate_product_controller.dart:161:        uname: Constant.userModel!.fullName(),
  lib\controllers\rate_product_controller.dart:162:        profile: Constant.userModel!.profilePictureURL,
  lib\controllers\rate_product_controller.dart:163:        reviewAttributes: reviewAttribute,
  lib\controllers\rate_product_controller.dart:164:      );
  lib\controllers\rate_product_controller.dart:167:      await FireStoreUtils.updateReviewById(ratingProduct);
  lib\controllers\rate_product_controller.dart:168:      await FireStoreUtils.updateVendor(vendorModel.value);
> lib\controllers\rate_product_controller.dart:169:      await FireStoreUtils.setProduct(productModel.value);
  lib\controllers\rate_product_controller.dart:170:      ShowToastDialog.closeLoader();
  lib\controllers\rate_product_controller.dart:171:      ShowToastDialog.showToast("Rating saved successfully.".tr);
  lib\controllers\rate_product_controller.dart:172:      Get.back();
  lib\controllers\rate_product_controller.dart:173:    } else {
> lib\controllers\rate_product_controller.dart:174:      ShowToastDialog.showToast("Please add rate for food item.".tr);
  lib\controllers\rate_product_controller.dart:175:    }
  lib\controllers\rate_product_controller.dart:176:  }
  lib\controllers\rate_product_controller.dart:177:
  lib\controllers\rate_product_controller.dart:178:  final ImagePicker _imagePicker = ImagePicker();
  lib\controllers\rate_product_controller.dart:179:  RxList images = <dynamic>[].obs;
  lib\controllers\restaurant_details_controller.dart:21:String service53bSafeProductImage(dynamic product) {
  lib\controllers\restaurant_details_controller.dart:22:  try {
> lib\controllers\restaurant_details_controller.dart:23:    final dynamic photos = product.photos;
  lib\controllers\restaurant_details_controller.dart:24:    if (photos is List && photos.isNotEmpty) {
  lib\controllers\restaurant_details_controller.dart:25:      final first = photos.first;
  lib\controllers\restaurant_details_controller.dart:26:      if (first != null && first.toString().trim().isNotEmpty) {
  lib\controllers\restaurant_details_controller.dart:27:        return first.toString();
  lib\controllers\restaurant_details_controller.dart:28:      }
  lib\controllers\restaurant_details_controller.dart:31:
  lib\controllers\restaurant_details_controller.dart:32:  try {
> lib\controllers\restaurant_details_controller.dart:33:    final dynamic photo = product.photo;
  lib\controllers\restaurant_details_controller.dart:34:    if (photo is List && photo.isNotEmpty) {
  lib\controllers\restaurant_details_controller.dart:35:      final first = photo.first;
  lib\controllers\restaurant_details_controller.dart:36:      if (first != null && first.toString().trim().isNotEmpty) {
  lib\controllers\restaurant_details_controller.dart:37:        return first.toString();
  lib\controllers\restaurant_details_controller.dart:38:      }
  lib\controllers\restaurant_details_controller.dart:137:  Future<void> getArgument() async {
  lib\controllers\restaurant_details_controller.dart:138:    cartProvider.cartStream.listen((event) async {
> lib\controllers\restaurant_details_controller.dart:139:      cartItem.clear();
> lib\controllers\restaurant_details_controller.dart:140:      cartItem.addAll(event);
  lib\controllers\restaurant_details_controller.dart:141:    });
  lib\controllers\restaurant_details_controller.dart:142:    dynamic argumentData = Get.arguments;
  lib\controllers\restaurant_details_controller.dart:143:    print(
  lib\controllers\restaurant_details_controller.dart:144:      "STEP47D_RESTAURANT_DETAIL_ARGUMENTS: type=${argumentData.runtimeType} value=$argumentData",
  lib\controllers\restaurant_details_controller.dart:145:    );
  lib\controllers\restaurant_details_controller.dart:233:          allProductList
  lib\controllers\restaurant_details_controller.dart:234:              .where(
> lib\controllers\restaurant_details_controller.dart:235:                (p0) => p0.name!.toLowerCase().contains(name.toLowerCase()),
  lib\controllers\restaurant_details_controller.dart:236:              )
  lib\controllers\restaurant_details_controller.dart:237:              .toList();
  lib\controllers\restaurant_details_controller.dart:238:    }
  lib\controllers\restaurant_details_controller.dart:239:    update();
  lib\controllers\restaurant_details_controller.dart:240:  }
  lib\controllers\restaurant_details_controller.dart:268:    VendorCategoryModel vendorCategoryModel,
  lib\controllers\restaurant_details_controller.dart:269:  ) {
> lib\controllers\restaurant_details_controller.dart:270:    final productCategoryId = normalizeCategoryKey(product.categoryID);
  lib\controllers\restaurant_details_controller.dart:271:    final vendorCategoryId = normalizeCategoryKey(vendorCategoryModel.id);
  lib\controllers\restaurant_details_controller.dart:272:
  lib\controllers\restaurant_details_controller.dart:273:    if (productCategoryId.isEmpty || vendorCategoryId.isEmpty) {
  lib\controllers\restaurant_details_controller.dart:274:      return false;
  lib\controllers\restaurant_details_controller.dart:275:    }
  lib\controllers\restaurant_details_controller.dart:374:    String adOnsPrice = "0";
  lib\controllers\restaurant_details_controller.dart:375:
> lib\controllers\restaurant_details_controller.dart:376:    if (productModel.itemAttribute != null) {
> lib\controllers\restaurant_details_controller.dart:377:      if (productModel.itemAttribute!.variants!
  lib\controllers\restaurant_details_controller.dart:378:          .where((element) => element.variantSku == selectedVariants.join('-'))
  lib\controllers\restaurant_details_controller.dart:379:          .isNotEmpty) {
  lib\controllers\restaurant_details_controller.dart:380:        variantPrice = Constant.productCommissionPrice(
  lib\controllers\restaurant_details_controller.dart:381:          vendorModel.value,
> lib\controllers\restaurant_details_controller.dart:382:          productModel.itemAttribute!.variants!
  lib\controllers\restaurant_details_controller.dart:383:                  .where(
  lib\controllers\restaurant_details_controller.dart:384:                    (element) =>
  lib\controllers\restaurant_details_controller.dart:385:                        element.variantSku == selectedVariants.join('-'),
  lib\controllers\restaurant_details_controller.dart:386:                  )
  lib\controllers\restaurant_details_controller.dart:387:                  .first
  lib\controllers\restaurant_details_controller.dart:393:      String price = Constant.productCommissionPrice(
  lib\controllers\restaurant_details_controller.dart:394:        vendorModel.value,
> lib\controllers\restaurant_details_controller.dart:395:        productModel.price.toString(),
  lib\controllers\restaurant_details_controller.dart:396:      );
  lib\controllers\restaurant_details_controller.dart:397:      String disPrice =
> lib\controllers\restaurant_details_controller.dart:398:          double.parse(productModel.disPrice.toString()) <= 0
  lib\controllers\restaurant_details_controller.dart:399:              ? "0"
  lib\controllers\restaurant_details_controller.dart:400:              : Constant.productCommissionPrice(
  lib\controllers\restaurant_details_controller.dart:401:                vendorModel.value,
> lib\controllers\restaurant_details_controller.dart:402:                productModel.disPrice.toString(),
  lib\controllers\restaurant_details_controller.dart:403:              );
  lib\controllers\restaurant_details_controller.dart:404:      if (double.parse(disPrice) <= 0) {
  lib\controllers\restaurant_details_controller.dart:405:        variantPrice = price;
  lib\controllers\restaurant_details_controller.dart:406:      } else {
  lib\controllers\restaurant_details_controller.dart:407:        variantPrice = disPrice;
  lib\controllers\restaurant_details_controller.dart:409:    }
  lib\controllers\restaurant_details_controller.dart:410:
> lib\controllers\restaurant_details_controller.dart:411:    for (int i = 0; i < productModel.addOnsPrice!.length; i++) {
> lib\controllers\restaurant_details_controller.dart:412:      if (selectedAddOns.contains(productModel.addOnsTitle![i]) == true) {
  lib\controllers\restaurant_details_controller.dart:413:        adOnsPrice =
  lib\controllers\restaurant_details_controller.dart:414:            (double.parse(adOnsPrice.toString()) +
  lib\controllers\restaurant_details_controller.dart:415:                    double.parse(
  lib\controllers\restaurant_details_controller.dart:416:                      Constant.productCommissionPrice(
  lib\controllers\restaurant_details_controller.dart:417:                        vendorModel.value,
> lib\controllers\restaurant_details_controller.dart:418:                        productModel.addOnsPrice![i].toString(),
  lib\controllers\restaurant_details_controller.dart:419:                      ),
  lib\controllers\restaurant_details_controller.dart:420:                    ))
  lib\controllers\restaurant_details_controller.dart:421:                .toString();
  lib\controllers\restaurant_details_controller.dart:422:      }
  lib\controllers\restaurant_details_controller.dart:423:    }
  lib\controllers\restaurant_details_controller.dart:450:
  lib\controllers\restaurant_details_controller.dart:451:    String adOnsPrice = "0";
> lib\controllers\restaurant_details_controller.dart:452:    for (int i = 0; i < productModel.addOnsPrice!.length; i++) {
> lib\controllers\restaurant_details_controller.dart:453:      if (selectedAddOns.contains(productModel.addOnsTitle![i]) == true &&
> lib\controllers\restaurant_details_controller.dart:454:          productModel.addOnsPrice![i] != '0') {
  lib\controllers\restaurant_details_controller.dart:455:        adOnsPrice =
  lib\controllers\restaurant_details_controller.dart:456:            (double.parse(adOnsPrice.toString()) +
  lib\controllers\restaurant_details_controller.dart:457:                    double.parse(
  lib\controllers\restaurant_details_controller.dart:458:                      Constant.productCommissionPrice(
  lib\controllers\restaurant_details_controller.dart:459:                        vendorModel.value,
> lib\controllers\restaurant_details_controller.dart:460:                        productModel.addOnsPrice![i].toString(),
  lib\controllers\restaurant_details_controller.dart:461:                      ),
  lib\controllers\restaurant_details_controller.dart:462:                    ))
  lib\controllers\restaurant_details_controller.dart:463:                .toString();
  lib\controllers\restaurant_details_controller.dart:464:      }
  lib\controllers\restaurant_details_controller.dart:465:    }
  lib\controllers\restaurant_details_controller.dart:466:
  lib\controllers\restaurant_details_controller.dart:467:    if (variantInfo != null) {
> lib\controllers\restaurant_details_controller.dart:468:      cartProductModel.id =
> lib\controllers\restaurant_details_controller.dart:469:          "${productModel.id!}~${variantInfo.variantId.toString()}";
> lib\controllers\restaurant_details_controller.dart:470:      cartProductModel.name = productModel.name!;
> lib\controllers\restaurant_details_controller.dart:471:      cartProductModel.photo = service53bSafeProductImage(productModel);
> lib\controllers\restaurant_details_controller.dart:472:      cartProductModel.categoryId = productModel.categoryID!;
> lib\controllers\restaurant_details_controller.dart:473:      cartProductModel.price = price;
> lib\controllers\restaurant_details_controller.dart:474:      cartProductModel.discountPrice = discountPrice;
> lib\controllers\restaurant_details_controller.dart:475:      cartProductModel.vendorID = vendorModel.value.id;
> lib\controllers\restaurant_details_controller.dart:476:      cartProductModel.quantity = quantity;
> lib\controllers\restaurant_details_controller.dart:477:      cartProductModel.variantInfo = variantInfo;
> lib\controllers\restaurant_details_controller.dart:478:      cartProductModel.extrasPrice = adOnsPrice;
> lib\controllers\restaurant_details_controller.dart:479:      cartProductModel.extras = selectedAddOns.isEmpty ? [] : selectedAddOns;
> lib\controllers\restaurant_details_controller.dart:480:      cartProductModel.taxSetting =
  lib\controllers\restaurant_details_controller.dart:481:          (Constant.taxScope == "order"
  lib\controllers\restaurant_details_controller.dart:482:              ? []
  lib\controllers\restaurant_details_controller.dart:483:              : Constant.taxProductList
  lib\controllers\restaurant_details_controller.dart:484:                  ?.where(
  lib\controllers\restaurant_details_controller.dart:485:                    (activeTax) =>
> lib\controllers\restaurant_details_controller.dart:486:                        productModel.taxSetting?.any(
  lib\controllers\restaurant_details_controller.dart:487:                          (productTax) => productTax.id == activeTax.id,
  lib\controllers\restaurant_details_controller.dart:488:                        ) ??
  lib\controllers\restaurant_details_controller.dart:489:                        false,
  lib\controllers\restaurant_details_controller.dart:490:                  )
  lib\controllers\restaurant_details_controller.dart:491:                  .toList())!;
  lib\controllers\restaurant_details_controller.dart:492:    } else {
> lib\controllers\restaurant_details_controller.dart:493:      cartProductModel.id = productModel.id!;
> lib\controllers\restaurant_details_controller.dart:494:      cartProductModel.name = productModel.name!;
> lib\controllers\restaurant_details_controller.dart:495:      cartProductModel.photo = service53bSafeProductImage(productModel);
> lib\controllers\restaurant_details_controller.dart:496:      cartProductModel.categoryId = productModel.categoryID!;
> lib\controllers\restaurant_details_controller.dart:497:      cartProductModel.price = price;
> lib\controllers\restaurant_details_controller.dart:498:      cartProductModel.discountPrice = discountPrice;
> lib\controllers\restaurant_details_controller.dart:499:      cartProductModel.vendorID = vendorModel.value.id;
> lib\controllers\restaurant_details_controller.dart:500:      cartProductModel.quantity = quantity;
> lib\controllers\restaurant_details_controller.dart:501:      cartProductModel.variantInfo = VariantInfo();
> lib\controllers\restaurant_details_controller.dart:502:      cartProductModel.extrasPrice = adOnsPrice;
> lib\controllers\restaurant_details_controller.dart:503:      cartProductModel.extras = selectedAddOns.isEmpty ? [] : selectedAddOns;
> lib\controllers\restaurant_details_controller.dart:504:      cartProductModel.taxSetting =
  lib\controllers\restaurant_details_controller.dart:505:          (Constant.taxScope == "order"
  lib\controllers\restaurant_details_controller.dart:506:              ? []
  lib\controllers\restaurant_details_controller.dart:507:              : Constant.taxProductList
  lib\controllers\restaurant_details_controller.dart:508:                  ?.where(
  lib\controllers\restaurant_details_controller.dart:509:                    (activeTax) =>
> lib\controllers\restaurant_details_controller.dart:510:                        productModel.taxSetting?.any(
  lib\controllers\restaurant_details_controller.dart:511:                          (productTax) => productTax.id == activeTax.id,
  lib\controllers\restaurant_details_controller.dart:512:                        ) ??
  lib\controllers\restaurant_details_controller.dart:513:                        false,
  lib\controllers\restaurant_details_controller.dart:514:                  )
  lib\controllers\restaurant_details_controller.dart:515:                  .toList())!;
  lib\controllers\restaurant_details_controller.dart:521:      await cartProvider.removeFromCart(cartProductModel, quantity);
  lib\controllers\restaurant_details_controller.dart:522:    }
> lib\controllers\restaurant_details_controller.dart:523:    log("===> new ${cartItem.length}");
  lib\controllers\restaurant_details_controller.dart:524:    update();
  lib\controllers\restaurant_details_controller.dart:525:  }
  lib\controllers\restaurant_details_controller.dart:526:
  lib\controllers\restaurant_details_controller.dart:527:  @override
  lib\controllers\restaurant_details_controller.dart:528:  void onClose() {
  lib\controllers\view_all_category_controller.dart:24:    if (Constant.restaurantList != null) {
  lib\controllers\view_all_category_controller.dart:25:      List<String> usedCategoryIds = Constant.restaurantList!.expand((vendor) => vendor.categoryID 
?? []).whereType<String>().toSet().toList();
> lib\controllers\view_all_category_controller.dart:26:      vendorCategoryModel.value = vendorCategoryModel.where((category) => 
usedCategoryIds.contains(category.id)).toList();
  lib\controllers\view_all_category_controller.dart:27:    }
  lib\controllers\view_all_category_controller.dart:28:
  lib\controllers\view_all_category_controller.dart:29:    isLoading.value = false;
  lib\controllers\view_all_category_controller.dart:30:  }
  lib\controllers\view_all_category_controller.dart:31:}
  lib\models\cart_product_model.dart:19:  CartProductModel({this.id, this.categoryId, this.name, this.photo, this.price, this.discountPrice, 
this.vendorID, this.quantity, this.extrasPrice, this.variantInfo, this.extras, this.taxSetting});
  lib\models\cart_product_model.dart:20:
> lib\models\cart_product_model.dart:21:  CartProductModel.fromJson(Map<String, dynamic> json) {
  lib\models\cart_product_model.dart:22:    id = json['id'];
  lib\models\cart_product_model.dart:23:    categoryId = json['category_id'];
  lib\models\cart_product_model.dart:24:    name = json['name'];
  lib\models\cart_product_model.dart:25:    photo = json['photo'];
  lib\models\cart_product_model.dart:26:    price = json['price'] ?? "0.0";
  lib\models\parcel_category.dart:8:  ParcelCategory({this.image, this.setOrder, this.publish, this.id, this.title});
  lib\models\parcel_category.dart:9:
> lib\models\parcel_category.dart:10:  ParcelCategory.fromJson(Map<String, dynamic> json) {
  lib\models\parcel_category.dart:11:    image = json['image'];
  lib\models\parcel_category.dart:12:    setOrder = json['set_order'];
  lib\models\parcel_category.dart:13:    publish = json['publish'];
  lib\models\parcel_category.dart:14:    id = json['id'];
  lib\models\parcel_category.dart:15:    title = json['title'];
  lib\models\product_model.dart:69:  });
  lib\models\product_model.dart:70:
> lib\models\product_model.dart:71:  ProductModel.fromJson(Map<String, dynamic> json) {
  lib\models\product_model.dart:72:    fats = json['fats'];
  lib\models\product_model.dart:73:    vendorID = json['vendorID'];
  lib\models\product_model.dart:74:    veg = json['veg'];
  lib\models\product_model.dart:75:    publish = json['publish'];
  lib\models\product_model.dart:76:    addOnsTitle = json['addOnsTitle'];
  lib\models\product_model.dart:124:    data['product_specification'] = productSpecification;
  lib\models\product_model.dart:125:    if (itemAttribute != null) {
> lib\models\product_model.dart:126:      data['item_attribute'] = itemAttribute!.toJson();
  lib\models\product_model.dart:127:    }
  lib\models\product_model.dart:128:    data['id'] = id;
  lib\models\product_model.dart:129:    data['quantity'] = quantity;
  lib\models\product_model.dart:130:    data['grams'] = grams;
  lib\models\product_model.dart:131:    data['reviewsCount'] = reviewsCount;
  lib\models\product_model.dart:159:      attributes = <Attributes>[];
  lib\models\product_model.dart:160:      json['attributes'].forEach((v) {
> lib\models\product_model.dart:161:        attributes!.add(Attributes.fromJson(v));
  lib\models\product_model.dart:162:      });
  lib\models\product_model.dart:163:    }
  lib\models\product_model.dart:164:    if (json['variants'] != null) {
  lib\models\product_model.dart:165:      variants = <Variants>[];
  lib\models\product_model.dart:166:      json['variants'].forEach((v) {
  lib\models\product_model.dart:173:    final Map<String, dynamic> data = <String, dynamic>{};
  lib\models\product_model.dart:174:    if (attributes != null) {
> lib\models\product_model.dart:175:      data['attributes'] = attributes!.map((v) => v.toJson()).toList();
  lib\models\product_model.dart:176:    }
  lib\models\product_model.dart:177:    if (variants != null) {
  lib\models\product_model.dart:178:      data['variants'] = variants!.map((v) => v.toJson()).toList();
  lib\models\product_model.dart:179:    }
  lib\models\product_model.dart:180:    return data;
  lib\screen_ui\ecommarce\all_brand_product_screen.dart:37:                        ProductModel productModel = controller.productList[index];
  lib\screen_ui\ecommarce\all_brand_product_screen.dart:38:                        return FutureBuilder(
> lib\screen_ui\ecommarce\all_brand_product_screen.dart:39:                          future: 
FireStoreUtils.getVendorById(productModel.vendorID.toString()),
  lib\screen_ui\ecommarce\all_brand_product_screen.dart:40:                          builder: (context, vendorSnapshot) {
  lib\screen_ui\ecommarce\all_brand_product_screen.dart:41:                            if (!vendorSnapshot.hasData || vendorSnapshot.connectionState == 
ConnectionState.waiting) {
  lib\screen_ui\ecommarce\all_brand_product_screen.dart:42:                              return const SizedBox(); // Show placeholder or loader
  lib\screen_ui\ecommarce\all_brand_product_screen.dart:43:                            }
  lib\screen_ui\ecommarce\all_brand_product_screen.dart:44:                            VendorModel? vendorModel = vendorSnapshot.data;
  lib\screen_ui\ecommarce\all_brand_product_screen.dart:48:                            List<String> selectedIndexVariants = [];
  lib\screen_ui\ecommarce\all_brand_product_screen.dart:49:                            List<String> selectedIndexArray = [];
> lib\screen_ui\ecommarce\all_brand_product_screen.dart:50:                            if (productModel.itemAttribute != null) {
> lib\screen_ui\ecommarce\all_brand_product_screen.dart:51:                              if (productModel.itemAttribute!.attributes!.isNotEmpty) {
> lib\screen_ui\ecommarce\all_brand_product_screen.dart:52:                                for (var element in productModel.itemAttribute!.attributes!) {
  lib\screen_ui\ecommarce\all_brand_product_screen.dart:53:                                  if (element.attributeOptions!.isNotEmpty) {
  lib\screen_ui\ecommarce\all_brand_product_screen.dart:54:                                    selectedVariants.add(
> lib\screen_ui\ecommarce\all_brand_product_screen.dart:55:                                      
productModel.itemAttribute!.attributes![productModel.itemAttribute!.attributes!.indexOf(element)].attributeOptions![0].toString(),
  lib\screen_ui\ecommarce\all_brand_product_screen.dart:56:                                    );
  lib\screen_ui\ecommarce\all_brand_product_screen.dart:57:                                    selectedIndexVariants.add(
> lib\screen_ui\ecommarce\all_brand_product_screen.dart:58:                                      
'${productModel.itemAttribute!.attributes!.indexOf(element)} _${productModel.itemAttribute!.attributes![0].attributeOptions![0].toString()}',
  lib\screen_ui\ecommarce\all_brand_product_screen.dart:59:                                    );
> lib\screen_ui\ecommarce\all_brand_product_screen.dart:60:                                    
selectedIndexArray.add('${productModel.itemAttribute!.attributes!.indexOf(element)}_0');
  lib\screen_ui\ecommarce\all_brand_product_screen.dart:61:                                  }
  lib\screen_ui\ecommarce\all_brand_product_screen.dart:62:                                }
  lib\screen_ui\ecommarce\all_brand_product_screen.dart:63:                              }
  lib\screen_ui\ecommarce\all_brand_product_screen.dart:64:
> lib\screen_ui\ecommarce\all_brand_product_screen.dart:65:                              if (productModel.itemAttribute!.variants!.where((element) => 
element.variantSku == selectedVariants.join('-')).isNotEmpty) {
  lib\screen_ui\ecommarce\all_brand_product_screen.dart:66:                                price = Constant.productCommissionPrice(
  lib\screen_ui\ecommarce\all_brand_product_screen.dart:67:                                  vendorModel!,
> lib\screen_ui\ecommarce\all_brand_product_screen.dart:68:                                  productModel.itemAttribute!.variants!.where((element) => 
element.variantSku == selectedVariants.join('-')).first.variantPrice ?? '0',
  lib\screen_ui\ecommarce\all_brand_product_screen.dart:69:                                );
  lib\screen_ui\ecommarce\all_brand_product_screen.dart:70:                                disPrice = "0";
  lib\screen_ui\ecommarce\all_brand_product_screen.dart:71:                              }
  lib\screen_ui\ecommarce\all_brand_product_screen.dart:72:                            } else {
> lib\screen_ui\ecommarce\all_brand_product_screen.dart:73:                              price = Constant.productCommissionPrice(vendorModel!, 
productModel.price.toString());
> lib\screen_ui\ecommarce\all_brand_product_screen.dart:74:                              disPrice = double.parse(productModel.disPrice.toString()) <= 0 ? 
"0" : Constant.productCommissionPrice(vendorModel, productModel.disPrice.toString());
  lib\screen_ui\ecommarce\all_brand_product_screen.dart:75:                            }
  lib\screen_ui\ecommarce\all_brand_product_screen.dart:76:                            return GestureDetector(
  lib\screen_ui\ecommarce\all_brand_product_screen.dart:77:                              onTap: () async {
  lib\screen_ui\ecommarce\all_brand_product_screen.dart:78:                                Get.to(const RestaurantDetailsScreen(), arguments: 
{"vendorModel": vendorModel});
  lib\screen_ui\ecommarce\all_brand_product_screen.dart:79:                              },
  lib\screen_ui\ecommarce\all_brand_product_screen.dart:86:                                      height: 90,
  lib\screen_ui\ecommarce\all_brand_product_screen.dart:87:                                      width: Responsive.width(100, context),
> lib\screen_ui\ecommarce\all_brand_product_screen.dart:88:                                      child: NetworkImageWidget(imageUrl: 
productModel.photo.toString(), fit: BoxFit.cover),
  lib\screen_ui\ecommarce\all_brand_product_screen.dart:89:                                    ),
  lib\screen_ui\ecommarce\all_brand_product_screen.dart:90:                                  ),
  lib\screen_ui\ecommarce\all_brand_product_screen.dart:91:                                  Column(
  lib\screen_ui\ecommarce\all_brand_product_screen.dart:92:                                    mainAxisAlignment: MainAxisAlignment.start,
  lib\screen_ui\ecommarce\all_brand_product_screen.dart:93:                                    crossAxisAlignment: CrossAxisAlignment.start,
  lib\screen_ui\ecommarce\all_brand_product_screen.dart:94:                                    children: [
  lib\screen_ui\ecommarce\all_brand_product_screen.dart:95:                                      Text(
> lib\screen_ui\ecommarce\all_brand_product_screen.dart:96:                                        productModel.name!.capitalizeString(),
  lib\screen_ui\ecommarce\all_brand_product_screen.dart:97:                                        textAlign: TextAlign.start,
  lib\screen_ui\ecommarce\all_brand_product_screen.dart:98:                                        maxLines: 1,
  lib\screen_ui\ecommarce\all_brand_product_screen.dart:99:                                        style: AppThemeData.semiBoldTextStyle(fontSize: 18, 
color: isDark ? AppThemeData.greyDark600 : AppThemeData.grey600),
  lib\screen_ui\ecommarce\all_brand_product_screen.dart:100:                                      ),
  lib\screen_ui\ecommarce\all_brand_product_screen.dart:101:                                      disPrice == "" || disPrice == "0"
  lib\screen_ui\ecommarce\all_brand_product_screen.dart:125:                                              Icon(Icons.star, size: 18, color: 
AppThemeData.warning400),
  lib\screen_ui\ecommarce\all_brand_product_screen.dart:126:                                              Text(
> lib\screen_ui\ecommarce\all_brand_product_screen.dart:127:                                                "${Constant.calculateReview(reviewCount: 
productModel.reviewsCount.toString(), reviewSum: productModel.reviewsSum.toString())} (${productModel.reviewsSum})",
  lib\screen_ui\ecommarce\all_brand_product_screen.dart:128:                                                style: 
AppThemeData.semiBoldTextStyle(fontSize: 12, color: AppThemeData.warning400),
  lib\screen_ui\ecommarce\all_brand_product_screen.dart:129:                                              ),
  lib\screen_ui\ecommarce\all_brand_product_screen.dart:130:                                            ],
  lib\screen_ui\ecommarce\all_brand_product_screen.dart:131:                                          ),
  lib\screen_ui\ecommarce\all_brand_product_screen.dart:132:                                        ),
  lib\screen_ui\ecommarce\all_category_product_screen.dart:37:                        ProductModel productModel = controller.productList[index];
  lib\screen_ui\ecommarce\all_category_product_screen.dart:38:                        return FutureBuilder(
> lib\screen_ui\ecommarce\all_category_product_screen.dart:39:                          future: 
FireStoreUtils.getVendorById(productModel.vendorID.toString()),
  lib\screen_ui\ecommarce\all_category_product_screen.dart:40:                          builder: (context, vendorSnapshot) {
  lib\screen_ui\ecommarce\all_category_product_screen.dart:41:                            if (!vendorSnapshot.hasData || vendorSnapshot.connectionState == 
ConnectionState.waiting) {
  lib\screen_ui\ecommarce\all_category_product_screen.dart:42:                              return const SizedBox(); // Show placeholder or loader
  lib\screen_ui\ecommarce\all_category_product_screen.dart:43:                            }
  lib\screen_ui\ecommarce\all_category_product_screen.dart:44:                            VendorModel? vendorModel = vendorSnapshot.data;
  lib\screen_ui\ecommarce\all_category_product_screen.dart:48:                            List<String> selectedIndexVariants = [];
  lib\screen_ui\ecommarce\all_category_product_screen.dart:49:                            List<String> selectedIndexArray = [];
> lib\screen_ui\ecommarce\all_category_product_screen.dart:50:                            if (productModel.itemAttribute != null) {
> lib\screen_ui\ecommarce\all_category_product_screen.dart:51:                              if (productModel.itemAttribute!.attributes!.isNotEmpty) {
> lib\screen_ui\ecommarce\all_category_product_screen.dart:52:                                for (var element in productModel.itemAttribute!.attributes!) 
{
  lib\screen_ui\ecommarce\all_category_product_screen.dart:53:                                  if (element.attributeOptions!.isNotEmpty) {
  lib\screen_ui\ecommarce\all_category_product_screen.dart:54:                                    selectedVariants.add(
> lib\screen_ui\ecommarce\all_category_product_screen.dart:55:                                      
productModel.itemAttribute!.attributes![productModel.itemAttribute!.attributes!.indexOf(element)].attributeOptions![0].toString(),
  lib\screen_ui\ecommarce\all_category_product_screen.dart:56:                                    );
  lib\screen_ui\ecommarce\all_category_product_screen.dart:57:                                    selectedIndexVariants.add(
> lib\screen_ui\ecommarce\all_category_product_screen.dart:58:                                      
'${productModel.itemAttribute!.attributes!.indexOf(element)} _${productModel.itemAttribute!.attributes![0].attributeOptions![0].toString()}',
  lib\screen_ui\ecommarce\all_category_product_screen.dart:59:                                    );
> lib\screen_ui\ecommarce\all_category_product_screen.dart:60:                                    
selectedIndexArray.add('${productModel.itemAttribute!.attributes!.indexOf(element)}_0');
  lib\screen_ui\ecommarce\all_category_product_screen.dart:61:                                  }
  lib\screen_ui\ecommarce\all_category_product_screen.dart:62:                                }
  lib\screen_ui\ecommarce\all_category_product_screen.dart:63:                              }
  lib\screen_ui\ecommarce\all_category_product_screen.dart:64:
> lib\screen_ui\ecommarce\all_category_product_screen.dart:65:                              if (productModel.itemAttribute!.variants!.where((element) => 
element.variantSku == selectedVariants.join('-')).isNotEmpty) {
  lib\screen_ui\ecommarce\all_category_product_screen.dart:66:                                price = Constant.productCommissionPrice(
  lib\screen_ui\ecommarce\all_category_product_screen.dart:67:                                  vendorModel!,
> lib\screen_ui\ecommarce\all_category_product_screen.dart:68:                                  productModel.itemAttribute!.variants!.where((element) => 
element.variantSku == selectedVariants.join('-')).first.variantPrice ?? '0',
  lib\screen_ui\ecommarce\all_category_product_screen.dart:69:                                );
  lib\screen_ui\ecommarce\all_category_product_screen.dart:70:                                disPrice = "0";
  lib\screen_ui\ecommarce\all_category_product_screen.dart:71:                              }
  lib\screen_ui\ecommarce\all_category_product_screen.dart:72:                            } else {
> lib\screen_ui\ecommarce\all_category_product_screen.dart:73:                              price = Constant.productCommissionPrice(vendorModel!, 
productModel.price.toString());
> lib\screen_ui\ecommarce\all_category_product_screen.dart:74:                              disPrice = double.parse(productModel.disPrice.toString()) <= 0 
? "0" : Constant.productCommissionPrice(vendorModel, productModel.disPrice.toString());
  lib\screen_ui\ecommarce\all_category_product_screen.dart:75:                            }
  lib\screen_ui\ecommarce\all_category_product_screen.dart:76:                            return GestureDetector(
  lib\screen_ui\ecommarce\all_category_product_screen.dart:77:                              onTap: () async {
  lib\screen_ui\ecommarce\all_category_product_screen.dart:78:                                Get.to(const RestaurantDetailsScreen(), arguments: 
{"vendorModel": vendorModel});
  lib\screen_ui\ecommarce\all_category_product_screen.dart:79:                              },
  lib\screen_ui\ecommarce\all_category_product_screen.dart:86:                                      height: 90,
  lib\screen_ui\ecommarce\all_category_product_screen.dart:87:                                      width: Responsive.width(100, context),
> lib\screen_ui\ecommarce\all_category_product_screen.dart:88:                                      child: NetworkImageWidget(imageUrl: 
productModel.photo.toString(), fit: BoxFit.cover),
  lib\screen_ui\ecommarce\all_category_product_screen.dart:89:                                    ),
  lib\screen_ui\ecommarce\all_category_product_screen.dart:90:                                  ),
  lib\screen_ui\ecommarce\all_category_product_screen.dart:91:                                  Column(
  lib\screen_ui\ecommarce\all_category_product_screen.dart:92:                                    mainAxisAlignment: MainAxisAlignment.start,
  lib\screen_ui\ecommarce\all_category_product_screen.dart:93:                                    crossAxisAlignment: CrossAxisAlignment.start,
  lib\screen_ui\ecommarce\all_category_product_screen.dart:94:                                    children: [
  lib\screen_ui\ecommarce\all_category_product_screen.dart:95:                                      Text(
> lib\screen_ui\ecommarce\all_category_product_screen.dart:96:                                        productModel.name!.capitalizeString(),
  lib\screen_ui\ecommarce\all_category_product_screen.dart:97:                                        textAlign: TextAlign.start,
  lib\screen_ui\ecommarce\all_category_product_screen.dart:98:                                        maxLines: 1,
  lib\screen_ui\ecommarce\all_category_product_screen.dart:99:                                        style: AppThemeData.semiBoldTextStyle(fontSize: 18, 
color: isDark ? AppThemeData.greyDark600 : AppThemeData.grey600),
  lib\screen_ui\ecommarce\all_category_product_screen.dart:100:                                      ),
  lib\screen_ui\ecommarce\all_category_product_screen.dart:101:                                      disPrice == "" || disPrice == "0"
  lib\screen_ui\ecommarce\all_category_product_screen.dart:125:                                              Icon(Icons.star, size: 18, color: 
AppThemeData.warning400),
  lib\screen_ui\ecommarce\all_category_product_screen.dart:126:                                              Text(
> lib\screen_ui\ecommarce\all_category_product_screen.dart:127:                                                "${Constant.calculateReview(reviewCount: 
productModel.reviewsCount.toString(), reviewSum: productModel.reviewsSum.toString())} (${productModel.reviewsSum})",
  lib\screen_ui\ecommarce\all_category_product_screen.dart:128:                                                style: 
AppThemeData.semiBoldTextStyle(fontSize: 12, color: AppThemeData.warning400),
  lib\screen_ui\ecommarce\all_category_product_screen.dart:129:                                              ),
  lib\screen_ui\ecommarce\all_category_product_screen.dart:130:                                            ],
  lib\screen_ui\ecommarce\all_category_product_screen.dart:131:                                          ),
  lib\screen_ui\ecommarce\all_category_product_screen.dart:132:                                        ),
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:46:String service53bSafeProductImage(dynamic product) {
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:47:  try {
> lib\screen_ui\ecommarce\home_e_commerce_screen.dart:48:    final dynamic photos = product.photos;
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:49:    if (photos is List && photos.isNotEmpty) {
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:50:      final first = photos.first;
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:51:      if (first != null && first.toString().trim().isNotEmpty) {
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:52:        return first.toString();
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:53:      }
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:56:
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:57:  try {
> lib\screen_ui\ecommarce\home_e_commerce_screen.dart:58:    final dynamic photo = product.photo;
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:59:    if (photo is List && photo.isNotEmpty) {
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:60:      final first = photo.first;
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:61:      if (first != null && first.toString().trim().isNotEmpty) {
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:62:        return first.toString();
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:63:      }
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:205:                    showBadge: true,
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:206:                    badgeContent: Text(
> lib\screen_ui\ecommarce\home_e_commerce_screen.dart:207:                      "${cartItem.length}",
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:208:                      style: TextStyle(
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:209:                        fontSize: 14,
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:210:                        overflow: TextOverflow.ellipsis,
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:211:                        fontFamily: AppThemeData.semiBold,
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:212:                        fontWeight: FontWeight.w600,
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:496:                                  padding: const EdgeInsets.only(left: 16, right: 16, top: 10, 
bottom: 20),
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:497:                                  child: FutureBuilder<List<ProductModel>>(
> lib\screen_ui\ecommarce\home_e_commerce_screen.dart:498:                                    future: 
FireStoreUtils.getProductListByCategoryId(item.id.toString()),
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:499:                                    builder: (context, snapshot) {
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:500:                                      if (snapshot.connectionState == ConnectionState.waiting) {
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:501:                                        return Center(child: 
CircularProgressIndicator.adaptive(valueColor: AlwaysStoppedAnimation(AppThemeData.primary300)));
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:502:                                      } else if ((snapshot.hasData || (snapshot.data?.isNotEmpty 
?? false))) {
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:503:                                        List<ProductModel> productList = snapshot.data!;
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:508:                                              mainAxisAlignment: MainAxisAlignment.start,
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:509:                                              children: [
> lib\screen_ui\ecommarce\home_e_commerce_screen.dart:510:                                                Text(item.title.toString(), textAlign: 
TextAlign.start, style: AppThemeData.boldTextStyle(color: AppThemeData.grey900, fontSize: 18)),
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:511:                                                Text(
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:512:                                                  "Style up with the latest fits, now at 
unbeatable prices.".tr,
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:513:                                                  textAlign: TextAlign.start,
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:514:                                                  style: AppThemeData.regularTextStyle(color: 
AppThemeData.grey900, fontSize: 12),
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:515:                                                ),
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:524:                                                    ProductModel productModel = 
productList[index];
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:525:                                                    return FutureBuilder(
> lib\screen_ui\ecommarce\home_e_commerce_screen.dart:526:                                                      future: 
FireStoreUtils.getVendorById(productModel.vendorID.toString()),
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:527:                                                      builder: (context, vendorSnapshot) {
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:528:                                                        if (!vendorSnapshot.hasData || 
vendorSnapshot.connectionState == ConnectionState.waiting) {
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:529:                                                          return const SizedBox(); // Show 
placeholder or loader
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:530:                                                        }
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:531:                                                        VendorModel? vendorModel = 
vendorSnapshot.data;
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:535:                                                        List<String> selectedIndexVariants = [];
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:536:                                                        List<String> selectedIndexArray = [];
> lib\screen_ui\ecommarce\home_e_commerce_screen.dart:537:                                                        if (productModel.itemAttribute != null) {
> lib\screen_ui\ecommarce\home_e_commerce_screen.dart:538:                                                          if 
(productModel.itemAttribute!.attributes!.isNotEmpty) {
> lib\screen_ui\ecommarce\home_e_commerce_screen.dart:539:                                                            for (var element in 
productModel.itemAttribute!.attributes!) {
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:540:                                                              if 
(element.attributeOptions!.isNotEmpty) {
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:541:                                                                selectedVariants.add(
> lib\screen_ui\ecommarce\home_e_commerce_screen.dart:542:                                                                  
productModel.itemAttribute!.attributes![productModel.itemAttribute!.attributes!.indexOf(element)].attributeOptions![0].toString(),
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:543:                                                                );
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:544:                                                                selectedIndexVariants.add(
> lib\screen_ui\ecommarce\home_e_commerce_screen.dart:545:                                                                  
'${productModel.itemAttribute!.attributes!.indexOf(element)} _${productModel.itemAttribute!.attributes![0].attributeOptions![0].toString()}',
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:546:                                                                );
> lib\screen_ui\ecommarce\home_e_commerce_screen.dart:547:                                                                
selectedIndexArray.add('${productModel.itemAttribute!.attributes!.indexOf(element)}_0');
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:548:                                                              }
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:549:                                                            }
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:550:                                                          }
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:551:
> lib\screen_ui\ecommarce\home_e_commerce_screen.dart:552:                                                          if 
(productModel.itemAttribute!.variants!.where((element) => element.variantSku == selectedVariants.join('-')).isNotEmpty) {
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:553:                                                            price = 
Constant.productCommissionPrice(
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:554:                                                              vendorModel!,
> lib\screen_ui\ecommarce\home_e_commerce_screen.dart:555:                                                              
productModel.itemAttribute!.variants!.where((element) => element.variantSku == selectedVariants.join('-')).first.variantPrice ?? '0',
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:556:                                                            );
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:557:                                                            disPrice = "0";
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:558:                                                          }
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:559:                                                        } else {
> lib\screen_ui\ecommarce\home_e_commerce_screen.dart:560:                                                          price = 
Constant.productCommissionPrice(vendorModel!, productModel.price.toString());
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:561:                                                          disPrice =
> lib\screen_ui\ecommarce\home_e_commerce_screen.dart:562:                                                              
double.parse(productModel.disPrice.toString()) <= 0
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:563:                                                                  ? "0"
> lib\screen_ui\ecommarce\home_e_commerce_screen.dart:564:                                                                  : 
Constant.productCommissionPrice(vendorModel, productModel.disPrice.toString());
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:565:                                                        }
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:566:                                                        return GestureDetector(
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:567:                                                          onTap: () async {
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:568:                                                            Get.to(const 
RestaurantDetailsScreen(), arguments: {"vendorModel": vendorModel});
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:569:                                                          },
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:576:                                                                  height: 90,
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:577:                                                                  width: Responsive.width(100, 
context),
> lib\screen_ui\ecommarce\home_e_commerce_screen.dart:578:                                                                  child: 
NetworkImageWidget(imageUrl: productModel.photo.toString(), fit: BoxFit.cover),
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:579:                                                                ),
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:580:                                                              ),
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:581:                                                              Column(
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:582:                                                                mainAxisAlignment: 
MainAxisAlignment.start,
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:583:                                                                crossAxisAlignment: 
CrossAxisAlignment.start,
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:584:                                                                children: [
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:585:                                                                  Text(
> lib\screen_ui\ecommarce\home_e_commerce_screen.dart:586:                                                                    
productModel.name!.capitalizeString(),
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:587:                                                                    textAlign: TextAlign.start,
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:588:                                                                    maxLines: 1,
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:589:                                                                    style: 
AppThemeData.semiBoldTextStyle(fontSize: 18, color: isDark ? AppThemeData.greyDark600 : AppThemeData.grey600),
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:590:                                                                  ),
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:591:                                                                  disPrice == "" || disPrice == 
"0"
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:615:                                                                          Icon(Icons.star, size: 
18, color: AppThemeData.warning400),
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:616:                                                                          Text(
> lib\screen_ui\ecommarce\home_e_commerce_screen.dart:617:                                                                            
"${Constant.calculateReview(reviewCount: productModel.reviewsCount.toString(), reviewSum: productModel.reviewsSum.toString())} 
(${productModel.reviewsSum})",
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:618:                                                                            style: 
AppThemeData.semiBoldTextStyle(fontSize: 12, color: AppThemeData.warning400),
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:619:                                                                          ),
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:620:                                                                        ],
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:621:                                                                      ),
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:622:                                                                    ),
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:747:                                        child: Row(
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:748:                                          children: [
> lib\screen_ui\ecommarce\home_e_commerce_screen.dart:749:                                            ClipRRect(borderRadius: BorderRadius.circular(10), 
child: NetworkImageWidget(imageUrl: item.photo.toString(), height: 80, width: 130, fit: BoxFit.cover)),
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:750:                                            SizedBox(width: 10),
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:751:                                            Expanded(
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:752:                                              child: Column(
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:753:                                                crossAxisAlignment: CrossAxisAlignment.start,
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:754:                                                children: [
> lib\screen_ui\ecommarce\home_e_commerce_screen.dart:755:                                                  Text(item.title.toString(), style: 
AppThemeData.semiBoldTextStyle(color: isDark ? AppThemeData.greyDark900 : AppThemeData.grey900, fontSize: 16)),
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:756:                                                  Row(
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:757:                                                    children: [
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:758:                                                      Icon(Icons.location_on, size: 14, color: 
Colors.grey),
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:759:                                                      SizedBox(width: 4),
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:760:                                                      Expanded(
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:761:                                                        child: Text(
> lib\screen_ui\ecommarce\home_e_commerce_screen.dart:762:                                                          item.location.toString(),
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:763:                                                          style: 
AppThemeData.semiBoldTextStyle(fontSize: 12, color: isDark ? AppThemeData.greyDark500 : AppThemeData.grey500),
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:764:                                                          overflow: TextOverflow.ellipsis,
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:765:                                                        ),
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:766:                                                      ),
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:767:                                                    ],
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:778:                                                          Icon(Icons.star, size: 18, color: 
AppThemeData.warning400),
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:779:                                                          Text(
> lib\screen_ui\ecommarce\home_e_commerce_screen.dart:780:                                                            
"${Constant.calculateReview(reviewCount: item.reviewsCount.toString(), reviewSum: item.reviewsSum.toString())} (${item.reviewsSum})",
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:781:                                                            style: 
AppThemeData.semiBoldTextStyle(fontSize: 12, color: AppThemeData.warning400),
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:782:                                                          ),
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:783:                                                        ],
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:784:                                                      ),
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:785:                                                    ),
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:838:              width: double.infinity,
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:839:              fit: BoxFit.cover,
> lib\screen_ui\ecommarce\home_e_commerce_screen.dart:840:              imageUrl: item.photo != null && service53bSafeProductImage(item).isNotEmpty ? 
item.photo.toString() : Constant.placeHolderImage.toString(),
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:841:            ),
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:842:          ),
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:843:          SizedBox(height: 5),
> lib\screen_ui\ecommarce\home_e_commerce_screen.dart:844:          Text(item.title.toString(), style: AppThemeData.semiBoldTextStyle(color: isDark ? 
AppThemeData.greyDark900 : AppThemeData.grey900, fontSize: 14)),
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:845:          Row(
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:846:            children: [
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:847:              Icon(Icons.location_on, size: 14, color: Colors.grey),
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:848:              SizedBox(width: 4),
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:849:              Expanded(
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:850:                child: Text(
> lib\screen_ui\ecommarce\home_e_commerce_screen.dart:851:                  item.location.toString(),
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:852:                  style: AppThemeData.semiBoldTextStyle(fontSize: 12, color: isDark ? 
AppThemeData.greyDark500 : AppThemeData.grey500),
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:853:                  overflow: TextOverflow.ellipsis,
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:854:                ),
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:855:              ),
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:856:            ],
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:867:                  Icon(Icons.star, size: 18, color: AppThemeData.warning400),
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:868:                  Text(
> lib\screen_ui\ecommarce\home_e_commerce_screen.dart:869:                    "${Constant.calculateReview(reviewCount: item.reviewsCount.toString(), 
reviewSum: item.reviewsSum.toString())} (${item.reviewsSum})",
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:870:                    style: AppThemeData.semiBoldTextStyle(fontSize: 12, color: 
AppThemeData.warning400),
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:871:                  ),
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:872:                ],
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:873:              ),
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:874:            ),
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:1067:      onTap: () async {
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:1068:        ShowToastDialog.showLoader("Please wait...".tr);
> lib\screen_ui\ecommarce\home_e_commerce_screen.dart:1069:        VendorModel? vendorModel = await FireStoreUtils.getVendorById(model.vendorId!);
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:1070:        ShowToastDialog.closeLoader();
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:1071:        Get.to(const RestaurantDetailsScreen(), arguments: {"vendorModel": vendorModel});
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:1072:      },
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:1073:      child: Container(
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:1074:        margin: EdgeInsets.only(right: 16),
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:1095:                    right: 8,
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:1096:                    child: FutureBuilder(
> lib\screen_ui\ecommarce\home_e_commerce_screen.dart:1097:                      future: FireStoreUtils.getVendorById(model.vendorId!),
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:1098:                      builder: (context, snapshot) {
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:1099:                        if (snapshot.connectionState == ConnectionState.waiting) {
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:1100:                          return const SizedBox();
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:1101:                        } else {
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:1102:                          if (snapshot.hasError) {
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:1166:                          if (controller.favouriteList.where((p0) => p0.restaurantId == 
model.vendorId).isNotEmpty) {
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:1167:                            FavouriteModel favouriteModel = FavouriteModel(restaurantId: 
model.vendorId, userId: FireStoreUtils.getCurrentUid());
> lib\screen_ui\ecommarce\home_e_commerce_screen.dart:1168:                            controller.favouriteList.removeWhere((item) => item.restaurantId == 
model.vendorId);
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:1169:                            await FireStoreUtils.removeFavouriteRestaurant(favouriteModel);
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:1170:                          } else {
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:1171:                            FavouriteModel favouriteModel = FavouriteModel(restaurantId: 
model.vendorId, userId: FireStoreUtils.getCurrentUid());
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:1172:                            controller.favouriteList.add(favouriteModel);
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:1173:                            await FireStoreUtils.setFavouriteRestaurant(favouriteModel);
  lib\screen_ui\multi_vendor_service\advertisement_screens\all_advertisement_screen.dart:74:      onTap: () async {
  lib\screen_ui\multi_vendor_service\advertisement_screens\all_advertisement_screen.dart:75:        ShowToastDialog.showLoader("Please wait...".tr);
> lib\screen_ui\multi_vendor_service\advertisement_screens\all_advertisement_screen.dart:76:        VendorModel? vendorModel = await 
FireStoreUtils.getVendorById(model.vendorId!);
  lib\screen_ui\multi_vendor_service\advertisement_screens\all_advertisement_screen.dart:77:        ShowToastDialog.closeLoader();
  lib\screen_ui\multi_vendor_service\advertisement_screens\all_advertisement_screen.dart:78:        Get.to(const RestaurantDetailsScreen(), arguments: 
{"vendorModel": vendorModel});
  lib\screen_ui\multi_vendor_service\advertisement_screens\all_advertisement_screen.dart:79:      },
  lib\screen_ui\multi_vendor_service\advertisement_screens\all_advertisement_screen.dart:80:      child: Container(
  lib\screen_ui\multi_vendor_service\advertisement_screens\all_advertisement_screen.dart:81:        margin: EdgeInsets.only(bottom: 16),
  lib\screen_ui\multi_vendor_service\advertisement_screens\all_advertisement_screen.dart:102:                    right: 8,
  lib\screen_ui\multi_vendor_service\advertisement_screens\all_advertisement_screen.dart:103:                    child: FutureBuilder(
> lib\screen_ui\multi_vendor_service\advertisement_screens\all_advertisement_screen.dart:104:                      future: 
FireStoreUtils.getVendorById(model.vendorId!),
  lib\screen_ui\multi_vendor_service\advertisement_screens\all_advertisement_screen.dart:105:                      builder: (context, snapshot) {
  lib\screen_ui\multi_vendor_service\advertisement_screens\all_advertisement_screen.dart:106:                        if (snapshot.connectionState == 
ConnectionState.waiting) {
  lib\screen_ui\multi_vendor_service\advertisement_screens\all_advertisement_screen.dart:107:                          return const SizedBox();
  lib\screen_ui\multi_vendor_service\advertisement_screens\all_advertisement_screen.dart:108:                        } else {
  lib\screen_ui\multi_vendor_service\advertisement_screens\all_advertisement_screen.dart:109:                          if (snapshot.hasError) {
  lib\screen_ui\multi_vendor_service\advertisement_screens\all_advertisement_screen.dart:172:                            if 
(controller.favouriteList.where((p0) => p0.restaurantId == model.vendorId).isNotEmpty) {
  lib\screen_ui\multi_vendor_service\advertisement_screens\all_advertisement_screen.dart:173:                              FavouriteModel favouriteModel = 
FavouriteModel(restaurantId: model.vendorId, userId: FireStoreUtils.getCurrentUid());
> lib\screen_ui\multi_vendor_service\advertisement_screens\all_advertisement_screen.dart:174:                              
controller.favouriteList.removeWhere((item) => item.restaurantId == model.vendorId);
  lib\screen_ui\multi_vendor_service\advertisement_screens\all_advertisement_screen.dart:175:                              await 
FireStoreUtils.removeFavouriteRestaurant(favouriteModel);
  lib\screen_ui\multi_vendor_service\advertisement_screens\all_advertisement_screen.dart:176:                            } else {
  lib\screen_ui\multi_vendor_service\advertisement_screens\all_advertisement_screen.dart:177:                              FavouriteModel favouriteModel = 
FavouriteModel(restaurantId: model.vendorId, userId: FireStoreUtils.getCurrentUid());
  lib\screen_ui\multi_vendor_service\advertisement_screens\all_advertisement_screen.dart:178:                              
controller.favouriteList.add(favouriteModel);
  lib\screen_ui\multi_vendor_service\advertisement_screens\all_advertisement_screen.dart:179:                              await 
FireStoreUtils.setFavouriteRestaurant(favouriteModel);
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:42:          appBar: AppBar(backgroundColor: isDark ? AppThemeData.surfaceDark : 
AppThemeData.surface),
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:43:          body:
> lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:44:              cartItem.isEmpty
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:45:                  ? Constant.showEmptyView(message: "Item Not available".tr)
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:46:                  : SingleChildScrollView(
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:47:                    child: Column(
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:48:                      crossAxisAlignment: CrossAxisAlignment.start,
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:49:                      children: [
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:115:                                shrinkWrap: true,
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:116:                                padding: EdgeInsets.zero,
> lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:117:                                itemCount: cartItem.length,
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:118:                                physics: const NeverScrollableScrollPhysics(),
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:119:                                itemBuilder: (context, index) {
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:120:                                  CartProductModel cartProductModel = 
cartItem[index];
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:121:                                  ProductModel? productModel;
> lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:122:                                  
FireStoreUtils.getProductById(cartProductModel.id!.split('~').first).then((value) {
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:123:                                    productModel = value;
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:124:                                  });
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:125:                                  print("cartItem[index] :: 
${cartItem[index].extras} ::${cartItem[index].extrasPrice}");
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:126:                                  return InkWell(
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:127:                                    onTap: () async {
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:143:                                                borderRadius: const 
BorderRadius.all(Radius.circular(16)),
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:144:                                                child: NetworkImageWidget(
> lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:145:                                                  imageUrl: 
cartProductModel.photo.toString(),
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:146:                                                  height: Responsive.height(10, 
context),
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:147:                                                  width: Responsive.width(20, 
context),
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:148:                                                  fit: BoxFit.cover,
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:149:                                                ),
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:150:                                              ),
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:155:                                                  children: [
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:156:                                                    Text(
> lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:157:                                                      "${cartProductModel.name}",
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:158:                                                      textAlign: TextAlign.start,
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:159:                                                      style: TextStyle(fontFamily: 
AppThemeData.regular, color: isDark ? AppThemeData.grey50 : AppThemeData.grey900, fontSize: 16),
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:160:                                                    ),
> lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:161:                                                    
double.parse(cartProductModel.discountPrice.toString()) <= 0
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:162:                                                        ? Text(
> lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:163:                                                          
Constant.amountShow(amount: cartProductModel.price),
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:164:                                                          style: TextStyle(
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:165:                                                            fontSize: 16,
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:166:                                                            color: isDark ? 
AppThemeData.grey50 : AppThemeData.grey900,
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:167:                                                            fontFamily: 
AppThemeData.semiBold,
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:168:                                                            fontWeight: 
FontWeight.w600,
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:172:                                                          children: [
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:173:                                                            Text(
> lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:174:                                                              
Constant.amountShow(amount: cartProductModel.discountPrice.toString()),
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:175:                                                              style: TextStyle(
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:176:                                                                fontSize: 16,
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:177:                                                                color: isDark ? 
AppThemeData.grey50 : AppThemeData.grey900,
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:178:                                                                fontFamily: 
AppThemeData.semiBold,
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:179:                                                                fontWeight: 
FontWeight.w600,
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:182:                                                            const SizedBox(width: 5),
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:183:                                                            Text(
> lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:184:                                                              
Constant.amountShow(amount: cartProductModel.price),
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:185:                                                              style: TextStyle(
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:186:                                                                fontSize: 14,
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:187:                                                                decoration: 
TextDecoration.lineThrough,
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:188:                                                                decorationColor: 
isDark ? AppThemeData.grey500 : AppThemeData.grey400,
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:189:                                                                color: isDark ? 
AppThemeData.grey500 : AppThemeData.grey400,
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:195:                                                        ),
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:196:                                                    if (Constant.taxScope == 
"product")
> lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:197:                                                      
cartProductModel.taxSetting?.isEmpty == true
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:198:                                                          ? SizedBox()
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:199:                                                          : Text(
> lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:200:                                                            "${'Tax:'.tr} 
${Constant.getTaxDisplayText(cartProductModel.taxSetting)}",
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:201:                                                            maxLines: 2,
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:202:                                                            overflow: 
TextOverflow.ellipsis,
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:203:                                                            style: 
TextStyle(fontSize: 12, color: isDark ? AppThemeData.grey500 : AppThemeData.grey400, fontFamily: AppThemeData.semiBold),
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:204:                                                          ),
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:205:                                                  ],
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:219:                                                      InkWell(
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:220:                                                        onTap: () {
> lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:221:                                                          
controller.addToCart(cartProductModel: cartProductModel, isIncrement: false, quantity: cartProductModel.quantity! - 1);
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:222:                                                        },
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:223:                                                        child: Icon(Icons.remove, 
color: isDark ? AppThemeData.grey100 : AppThemeData.grey800),
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:224:                                                      ),
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:225:                                                      Padding(
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:226:                                                        padding: const 
EdgeInsets.symmetric(horizontal: 10),
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:227:                                                        child: Text(
> lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:228:                                                          
cartProductModel.quantity.toString(),
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:229:                                                          textAlign: TextAlign.start,
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:230:                                                          maxLines: 1,
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:231:                                                          style: TextStyle(
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:232:                                                            fontSize: 16,
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:233:                                                            overflow: 
TextOverflow.ellipsis,
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:241:                                                        onTap: () {
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:242:                                                          if 
(productModel!.itemAttribute != null) {
> lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:243:                                                            if 
(productModel!.itemAttribute!.variants!.where((element) => element.variantSku == cartProductModel.variantInfo!.variantSku).isNotEmpty) {
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:244:                                                              if (int.parse(
> lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:245:                                                                        
productModel!.itemAttribute!.variants!
> lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:246:                                                                            
.where((element) => element.variantSku == cartProductModel.variantInfo!.variantSku)
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:247:                                                                            .first
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:248:                                                                            
.variantQuantity
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:249:                                                                            
.toString(),
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:250:                                                                      ) >
> lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:251:                                                                      
(cartProductModel.quantity ?? 0) ||
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:252:                                                                  int.parse(
> lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:253:                                                                        
productModel!.itemAttribute!.variants!
> lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:254:                                                                            
.where((element) => element.variantSku == cartProductModel.variantInfo!.variantSku)
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:255:                                                                            .first
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:256:                                                                            
.variantQuantity
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:257:                                                                            
.toString(),
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:258:                                                                      ) ==
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:259:                                                                      -1) {
> lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:260:                                                                
controller.addToCart(cartProductModel: cartProductModel, isIncrement: true, quantity: cartProductModel.quantity! + 1);
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:261:                                                              } else {
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:262:                                                                
ShowToastDialog.showToast("Out of stock".tr);
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:263:                                                              }
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:264:                                                            } else {
> lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:265:                                                              if 
((productModel!.quantity ?? 0) > (cartProductModel.quantity ?? 0) || productModel!.quantity == -1) {
> lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:266:                                                                
controller.addToCart(cartProductModel: cartProductModel, isIncrement: true, quantity: cartProductModel.quantity! + 1);
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:267:                                                              } else {
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:268:                                                                
ShowToastDialog.showToast("Out of stock".tr);
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:269:                                                              }
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:270:                                                            }
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:271:                                                          } else {
> lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:272:                                                            if 
((productModel!.quantity ?? 0) > (cartProductModel.quantity ?? 0) || productModel!.quantity == -1) {
> lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:273:                                                              
controller.addToCart(cartProductModel: cartProductModel, isIncrement: true, quantity: cartProductModel.quantity! + 1);
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:274:                                                            } else {
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:275:                                                              
ShowToastDialog.showToast("Out of stock".tr);
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:276:                                                            }
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:277:                                                          }
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:278:                                                        },
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:285:                                            ],
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:286:                                          ),
> lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:287:                                          cartProductModel.variantInfo == null || 
cartProductModel.variantInfo!.variantOptions == null || cartProductModel.variantInfo!.variantOptions!.isEmpty
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:288:                                              ? Container()
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:289:                                              : Padding(
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:290:                                                padding: const 
EdgeInsets.symmetric(horizontal: 5, vertical: 10),
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:291:                                                child: Column(
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:292:                                                  crossAxisAlignment: 
CrossAxisAlignment.start,
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:302:                                                      runSpacing: 6.0,
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:303:                                                      children:
> lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:304:                                                          
List.generate(cartProductModel.variantInfo!.variantOptions!.length, (i) {
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:305:                                                            return Container(
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:306:                                                              decoration: 
ShapeDecoration(
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:307:                                                                color: isDark ? 
AppThemeData.grey800 : AppThemeData.grey100,
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:308:                                                                shape: 
RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)),
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:309:                                                              ),
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:311:                                                                padding: const 
EdgeInsets.symmetric(horizontal: 16, vertical: 5),
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:312:                                                                child: Text(
> lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:313:                                                                  
"${cartProductModel.variantInfo!.variantOptions!.keys.elementAt(i)} : 
${cartProductModel.variantInfo!.variantOptions![cartProductModel.variantInfo!.variantOptions!.keys.elementAt(i)]}",
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:314:                                                                  textAlign: 
TextAlign.start,
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:315:                                                                  style: 
TextStyle(fontFamily: AppThemeData.medium, color: isDark ? AppThemeData.grey500 : AppThemeData.grey400),
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:316:                                                                ),
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:317:                                                              ),
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:318:                                                            );
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:322:                                                ),
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:323:                                              ),
> lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:324:                                          cartProductModel.extras == null || 
cartProductModel.extras!.isEmpty || cartProductModel.extrasPrice == '0'
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:325:                                              ? const SizedBox()
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:326:                                              : Column(
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:327:                                                crossAxisAlignment: 
CrossAxisAlignment.start,
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:328:                                                children: [
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:329:                                                  const SizedBox(height: 10),
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:339:                                                      Text(
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:340:                                                        Constant.amountShow(
> lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:341:                                                          amount: 
(double.parse(cartProductModel.extrasPrice.toString()) * double.parse(cartProductModel.quantity.toString())).toString(),
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:342:                                                        ),
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:343:                                                        textAlign: TextAlign.start,
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:344:                                                        style: TextStyle(fontFamily: 
AppThemeData.semiBold, color: isDark ? AppThemeData.primary300 : AppThemeData.primary300, fontSize: 16),
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:345:                                                      ),
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:346:                                                    ],
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:351:                                                    runSpacing: 6.0,
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:352:                                                    children:
> lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:353:                                                        
List.generate(cartProductModel.extras!.length, (i) {
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:354:                                                          return Container(
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:355:                                                            decoration: 
ShapeDecoration(
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:356:                                                              color: isDark ? 
AppThemeData.grey800 : AppThemeData.grey100,
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:357:                                                              shape: 
RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)),
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:358:                                                            ),
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:360:                                                              padding: const 
EdgeInsets.symmetric(horizontal: 16, vertical: 5),
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:361:                                                              child: Text(
> lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:362:                                                                
cartProductModel.extras![i].toString(),
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:363:                                                                textAlign: 
TextAlign.start,
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:364:                                                                style: 
TextStyle(fontFamily: AppThemeData.medium, color: isDark ? AppThemeData.grey500 : AppThemeData.grey400),
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:365:                                                              ),
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:366:                                                            ),
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:367:                                                          );
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:985:                  ),
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:986:          bottomNavigationBar:
> lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:987:              cartItem.isEmpty
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:988:                  ? null
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:989:                  : Container(
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:990:                    decoration: BoxDecoration(color: isDark ? AppThemeData.grey900 : 
AppThemeData.grey50),
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:991:                    height: controller.isCashbackApply.value == true ? 150 : 100,
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:992:                    child: Column(
  lib\screen_ui\multi_vendor_service\cart_screen\oder_placing_screens.dart:167:                                      children: [
  lib\screen_ui\multi_vendor_service\cart_screen\oder_placing_screens.dart:168:                                        Text(
> lib\screen_ui\multi_vendor_service\cart_screen\oder_placing_screens.dart:169:                                          "${cartProductModel.quantity} 
x".tr,
  lib\screen_ui\multi_vendor_service\cart_screen\oder_placing_screens.dart:170:                                          textAlign: TextAlign.start,
  lib\screen_ui\multi_vendor_service\cart_screen\oder_placing_screens.dart:171:                                          style: TextStyle(color: isDark ? 
AppThemeData.grey100 : AppThemeData.grey900, fontSize: 14, fontFamily: AppThemeData.regular, fontWeight: FontWeight.w400),
  lib\screen_ui\multi_vendor_service\cart_screen\oder_placing_screens.dart:172:                                        ),
  lib\screen_ui\multi_vendor_service\cart_screen\oder_placing_screens.dart:173:                                        Text(
> lib\screen_ui\multi_vendor_service\cart_screen\oder_placing_screens.dart:174:                                          "${cartProductModel.name}".tr,
  lib\screen_ui\multi_vendor_service\cart_screen\oder_placing_screens.dart:175:                                          textAlign: TextAlign.start,
  lib\screen_ui\multi_vendor_service\cart_screen\oder_placing_screens.dart:176:                                          style: TextStyle(color: isDark ? 
AppThemeData.grey100 : AppThemeData.grey900, fontSize: 14, fontFamily: AppThemeData.regular, fontWeight: FontWeight.w400),
  lib\screen_ui\multi_vendor_service\cart_screen\oder_placing_screens.dart:177:                                        ),
  lib\screen_ui\multi_vendor_service\cart_screen\oder_placing_screens.dart:178:                                      ],
  lib\screen_ui\multi_vendor_service\cart_screen\oder_placing_screens.dart:179:                                    );
  lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_details_screen.dart:22:String service53bSafeProductImage(dynamic product) {
  lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_details_screen.dart:23:  try {
> lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_details_screen.dart:24:    final dynamic photos = product.photos;
  lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_details_screen.dart:25:    if (photos is List && photos.isNotEmpty) {
  lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_details_screen.dart:26:      final first = photos.first;
  lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_details_screen.dart:27:      if (first != null && first.toString().trim().isNotEmpty) {
  lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_details_screen.dart:28:        return first.toString();
  lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_details_screen.dart:29:      }
  lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_details_screen.dart:32:
  lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_details_screen.dart:33:  try {
> lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_details_screen.dart:34:    final dynamic photo = product.photo;
  lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_details_screen.dart:35:    if (photo is List && photo.isNotEmpty) {
  lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_details_screen.dart:36:      final first = photo.first;
  lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_details_screen.dart:37:      if (first != null && first.toString().trim().isNotEmpty) {
  lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_details_screen.dart:38:        return first.toString();
  lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_details_screen.dart:39:      }
  lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_details_screen.dart:92:                          if (controller.favouriteList.where((p0) => 
p0.restaurantId == controller.vendorModel.value.id).isNotEmpty) {
  lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_details_screen.dart:93:                            FavouriteModel favouriteModel = 
FavouriteModel(restaurantId: controller.vendorModel.value.id, userId: FireStoreUtils.getCurrentUid());
> lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_details_screen.dart:94:                            
controller.favouriteList.removeWhere((item) => item.restaurantId == controller.vendorModel.value.id);
  lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_details_screen.dart:95:                            await 
FireStoreUtils.removeFavouriteRestaurant(favouriteModel);
  lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_details_screen.dart:96:                          } else {
  lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_details_screen.dart:97:                            FavouriteModel favouriteModel = 
FavouriteModel(restaurantId: controller.vendorModel.value.id, userId: FireStoreUtils.getCurrentUid());
  lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_details_screen.dart:98:                            
controller.favouriteList.add(favouriteModel);
  lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_details_screen.dart:99:                            await 
FireStoreUtils.setFavouriteRestaurant(favouriteModel);
  lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_details_screen.dart:726:                            shrinkWrap: true,
  lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_details_screen.dart:727:                            physics: const BouncingScrollPhysics(),
> lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_details_screen.dart:728:                            itemCount: 
productModel.vendorModel.value.workingHours!.length,
  lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_details_screen.dart:729:                            itemBuilder: (context, dayIndex) {
> lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_details_screen.dart:730:                              WorkingHours workingHours = 
productModel.vendorModel.value.workingHours![dayIndex];
  lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_details_screen.dart:731:                              return Padding(
  lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_details_screen.dart:732:                                padding: const 
EdgeInsets.symmetric(vertical: 10),
  lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_details_screen.dart:733:                                child: Column(
  lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_details_screen.dart:734:                                  crossAxisAlignment: 
CrossAxisAlignment.start,
  lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_details_screen.dart:735:                                  children: [
  lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_restaurant_list_screen.dart:131:                                                        
.removeWhere(
  lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_restaurant_list_screen.dart:132:                                                          
(item) =>
> lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_restaurant_list_screen.dart:133:                                                              
item.restaurantId ==
  lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_restaurant_list_screen.dart:134:                                                              
vendorModel.id,
  lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_restaurant_list_screen.dart:135:                                                        );
  lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_restaurant_list_screen.dart:136:                                                    await 
FireStoreUtils
  lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_restaurant_list_screen.dart:137:                                                        
.removeFavouriteRestaurant(
  lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_restaurant_list_screen.dart:138:                                                          
favouriteModel,
  lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:322:                                  if (controller.favouriteList.where((p0) => 
p0.restaurantId == vendorModel.id).isNotEmpty) {
  lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:323:                                    FavouriteModel favouriteModel = 
FavouriteModel(restaurantId: vendorModel.id, userId: FireStoreUtils.getCurrentUid());
> lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:324:                                    
controller.favouriteList.removeWhere((item) => item.restaurantId == vendorModel.id);
  lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:325:                                    await 
FireStoreUtils.removeFavouriteRestaurant(favouriteModel);
  lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:326:                                  } else {
  lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:327:                                    FavouriteModel favouriteModel = 
FavouriteModel(restaurantId: vendorModel.id, userId: FireStoreUtils.getCurrentUid());
  lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:328:                                    
controller.favouriteList.add(favouriteModel);
  lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:329:                                    await 
FireStoreUtils.setFavouriteRestaurant(favouriteModel);
  lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:469:                                  if (controller.favouriteList.where((p0) => 
p0.restaurantId == vendorModel.id).isNotEmpty) {
  lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:470:                                    FavouriteModel favouriteModel = 
FavouriteModel(restaurantId: vendorModel.id, userId: FireStoreUtils.getCurrentUid());
> lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:471:                                    
controller.favouriteList.removeWhere((item) => item.restaurantId == vendorModel.id);
  lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:472:                                    await 
FireStoreUtils.removeFavouriteRestaurant(favouriteModel);
  lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:473:                                  } else {
  lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:474:                                    FavouriteModel favouriteModel = 
FavouriteModel(restaurantId: vendorModel.id, userId: FireStoreUtils.getCurrentUid());
  lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:475:                                    
controller.favouriteList.add(favouriteModel);
  lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:476:                                    await 
FireStoreUtils.setFavouriteRestaurant(favouriteModel);
  lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:613:                                  if (controller.favouriteList.where((p0) => 
p0.restaurantId == vendorModel.id).isNotEmpty) {
  lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:614:                                    FavouriteModel favouriteModel = 
FavouriteModel(restaurantId: vendorModel.id, userId: FireStoreUtils.getCurrentUid());
> lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:615:                                    
controller.favouriteList.removeWhere((item) => item.restaurantId == vendorModel.id);
  lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:616:                                    await 
FireStoreUtils.removeFavouriteRestaurant(favouriteModel);
  lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:617:                                  } else {
  lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:618:                                    FavouriteModel favouriteModel = 
FavouriteModel(restaurantId: vendorModel.id, userId: FireStoreUtils.getCurrentUid());
  lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:619:                                    
controller.favouriteList.add(favouriteModel);
  lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:620:                                    await 
FireStoreUtils.setFavouriteRestaurant(favouriteModel);
  lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:219:                                                                          
              userId: FireStoreUtils.getCurrentUid(),
  lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:220:                                                                          
            );
> lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:221:                                                                          
            controller.favouriteList.removeWhere((item) => item.restaurantId == vendorModel.id);
  lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:222:                                                                          
            controller.favouriteVendorList.removeAt(index);
  lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:223:                                                                          
            await FireStoreUtils.removeFavouriteRestaurant(favouriteModel);
  lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:224:                                                                          
          } else {
  lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:225:                                                                          
            FavouriteModel favouriteModel = FavouriteModel(
  lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:226:                                                                          
              restaurantId: vendorModel.id,
  lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:396:                                                              return 
InkWell(
  lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:397:                                                                onTap: () 
async {
> lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:398:                                                                  await 
FireStoreUtils.getVendorById(productModel.vendorID.toString()).then((value) {
  lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:399:                                                                    if 
(value != null) {
  lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:400:                                                                      
ShowToastDialog.closeLoader();
  lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:401:                                                                      
Get.to(const RestaurantDetailsScreen(), arguments: {"vendorModel": value})?.then((value) async {
  lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:402:                                                                        
await controller.getData();
  lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:403:                                                                      });
  lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:427:                                                                          
      Row(
  lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:428:                                                                          
        children: [
> lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:429:                                                                          
          productModel.nonveg == true
  lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:430:                                                                          
              ? SvgPicture.asset("assets/icons/ic_nonveg.svg")
  lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:431:                                                                          
              : SvgPicture.asset("assets/icons/ic_veg.svg"),
  lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:432:                                                                          
          const SizedBox(width: 5),
  lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:433:                                                                          
          Text(
> lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:434:                                                                          
            productModel.nonveg == true ? "Non Veg.".tr : "Pure veg.".tr,
  lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:435:                                                                          
            style: TextStyle(
> lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:436:                                                                          
              color: productModel.nonveg == true ? AppThemeData.danger300 : AppThemeData.success400,
  lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:437:                                                                          
              fontFamily: AppThemeData.semiBold,
  lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:438:                                                                          
              fontWeight: FontWeight.w600,
  lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:439:                                                                          
            ),
  lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:440:                                                                          
          ),
  lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:441:                                                                          
        ],
  lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:443:                                                                          
      const SizedBox(height: 5),
  lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:444:                                                                          
      Text(
> lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:445:                                                                          
        productModel.name.toString(),
  lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:446:                                                                          
        style: TextStyle(
  lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:447:                                                                          
          fontSize: 18,
  lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:448:                                                                          
          color: isDark ? AppThemeData.grey50 : AppThemeData.grey900,
  lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:449:                                                                          
          fontFamily: AppThemeData.semiBold,
  lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:450:                                                                          
          fontWeight: FontWeight.w600,
  lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:494:                                                                          
          const SizedBox(width: 5),
  lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:495:                                                                          
          Text(
> lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:496:                                                                          
            "${Constant.calculateReview(reviewCount: productModel.reviewsCount!.toStringAsFixed(0), reviewSum: productModel.reviewsSum.toString())} 
(${productModel.reviewsCount!.toStringAsFixed(0)})",
  lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:497:                                                                          
            style: TextStyle(
  lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:498:                                                                          
              color: isDark ? AppThemeData.grey50 : AppThemeData.grey900,
  lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:499:                                                                          
              fontFamily: AppThemeData.regular,
  lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:500:                                                                          
              fontWeight: FontWeight.w500,
  lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:501:                                                                          
            ),
  lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:504:                                                                          
      ),
  lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:505:                                                                          
      Text(
> lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:506:                                                                          
        "${productModel.description}",
  lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:507:                                                                          
        maxLines: 2,
  lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:508:                                                                          
        style: TextStyle(
  lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:509:                                                                          
          overflow: TextOverflow.ellipsis,
  lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:510:                                                                          
          color: isDark ? AppThemeData.grey50 : AppThemeData.grey900,
  lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:511:                                                                          
          fontFamily: AppThemeData.regular,
  lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:522:                                                                          
    children: [
  lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:523:                                                                          
      NetworkImageWidget(
> lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:524:                                                                          
        imageUrl: productModel.photo.toString(),
  lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:525:                                                                          
        fit: BoxFit.cover,
  lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:526:                                                                          
        height: Responsive.height(16, context),
  lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:527:                                                                          
        width: Responsive.width(34, context),
  lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:528:                                                                          
      ),
  lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:529:                                                                          
      Container(
  lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:543:                                                                          
        child: InkWell(
  lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:544:                                                                          
          onTap: () async {
> lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:545:                                                                          
            if (controller.favouriteItemList.where((p0) => p0.productId == productModel.id).isNotEmpty) {
  lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:546:                                                                          
              FavouriteItemModel favouriteModel = FavouriteItemModel(
> lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:547:                                                                          
                productId: productModel.id,
> lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:548:                                                                          
                storeId: productModel.vendorID,
  lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:549:                                                                          
                userId: FireStoreUtils.getCurrentUid(),
  lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:550:                                                                          
              );
> lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:551:                                                                          
              controller.favouriteItemList.removeWhere((item) => item.productId == productModel.id);
  lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:552:                                                                          
              controller.favouriteFoodList.removeAt(index);
  lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:553:                                                                          
              await FireStoreUtils.removeFavouriteItem(favouriteModel);
  lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:554:                                                                          
            } else {
  lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:555:                                                                          
              FavouriteItemModel favouriteModel = FavouriteItemModel(
> lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:556:                                                                          
                productId: productModel.id,
> lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:557:                                                                          
                storeId: productModel.vendorID,
  lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:558:                                                                          
                userId: FireStoreUtils.getCurrentUid(),
  lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:559:                                                                          
              );
  lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:560:                                                                          
              controller.favouriteItemList.add(favouriteModel);
  lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:561:                                                                          
              await FireStoreUtils.setFavouriteItem(favouriteModel);
  lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:562:                                                                          
            }
  lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:564:                                                                          
          child: Obx(
  lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:565:                                                                          
            () =>
> lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:566:                                                                          
                controller.favouriteItemList.where((p0) => p0.productId == productModel.id).isNotEmpty
  lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:567:                                                                          
                    ? SvgPicture.asset("assets/icons/ic_like_fill.svg")
  lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:568:                                                                          
                    : SvgPicture.asset("assets/icons/ic_like.svg"),
  lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:569:                                                                          
          ),
  lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:570:                                                                          
        ),
  lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:571:                                                                          
      ),
  lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:606:
  lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:607:    print("=======>");
> lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:608:    print(productModel.price);
> lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:609:    print(productModel.disPrice);
  lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:610:
> lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:611:    VendorModel? vendorModel = await 
FireStoreUtils.getVendorById(productModel.vendorID.toString());
> lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:612:    if (productModel.itemAttribute != null) {
> lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:613:      if (productModel.itemAttribute!.attributes!.isNotEmpty) {
> lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:614:        for (var element in productModel.itemAttribute!.attributes!) {
  lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:615:          if (element.attributeOptions!.isNotEmpty) {
> lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:616:            
selectedVariants.add(productModel.itemAttribute!.attributes![productModel.itemAttribute!.attributes!.indexOf(element)].attributeOptions![0].toString());
> lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:617:            
selectedIndexVariants.add('${productModel.itemAttribute!.attributes!.indexOf(element)} 
_${productModel.itemAttribute!.attributes![0].attributeOptions![0].toString()}');
> lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:618:            
selectedIndexArray.add('${productModel.itemAttribute!.attributes!.indexOf(element)}_0');
  lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:619:          }
  lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:620:        }
  lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:621:      }
> lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:622:      if (productModel.itemAttribute!.variants!.where((element) => 
element.variantSku == selectedVariants.join('-')).isNotEmpty) {
> lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:623:        price = Constant.productCommissionPrice(vendorModel!, 
productModel.itemAttribute!.variants!.where((element) => element.variantSku == selectedVariants.join('-')).first.variantPrice ?? '0');
  lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:624:        disPrice = Constant.productCommissionPrice(vendorModel, '0');
  lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:625:      }
  lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:626:    } else {
> lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:627:      price = Constant.productCommissionPrice(vendorModel!, 
productModel.price.toString());
> lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:628:      disPrice = Constant.productCommissionPrice(vendorModel, 
productModel.disPrice.toString());
  lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:629:    }
  lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:630:
  lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:631:    return {'price': price, 'disPrice': disPrice};
  lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:632:  }
  lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:633:}
  lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:253:                                            Obx(
  lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:254:                                              () => badges.Badge(
> lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:255:                                                showBadge: cartItem.isEmpty ? false 
: true,
  lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:256:                                                badgeContent: Text(
> lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:257:                                                  "${cartItem.length}",
  lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:258:                                                  style: TextStyle(
  lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:259:                                                    fontSize: 14,
  lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:260:                                                    overflow: TextOverflow.ellipsis,
  lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:261:                                                    fontFamily: 
AppThemeData.semiBold,
  lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:262:                                                    fontWeight: FontWeight.w600,
  lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:633:                          }).toList(),
  lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:634:                      onChanged: (value) async {
> lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:635:                        if (cartItem.isEmpty) {
  lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:636:                          await Preferences.setString(Preferences.foodDeliveryType, 
value!);
  lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:637:                          controller.selectedOrderTypeValue.value = value;
  lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:638:                          controller.getData();
  lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:639:                        } else {
  lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:640:                          showDialog(
  lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:742:                                  if (controller.favouriteList.where((p0) => 
p0.restaurantId == vendorModel.id).isNotEmpty) {
  lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:743:                                    FavouriteModel favouriteModel = 
FavouriteModel(restaurantId: vendorModel.id, userId: FireStoreUtils.getCurrentUid());
> lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:744:                                    controller.favouriteList.removeWhere((item) => 
item.restaurantId == vendorModel.id);
  lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:745:                                    await 
FireStoreUtils.removeFavouriteRestaurant(favouriteModel);
  lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:746:                                  } else {
  lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:747:                                    FavouriteModel favouriteModel = 
FavouriteModel(restaurantId: vendorModel.id, userId: FireStoreUtils.getCurrentUid());
  lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:748:                                    controller.favouriteList.add(favouriteModel);
  lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:749:                                    await 
FireStoreUtils.setFavouriteRestaurant(favouriteModel);
  lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:914:                                  if (controller.favouriteList.where((p0) => 
p0.restaurantId == vendorModel.id).isNotEmpty) {
  lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:915:                                    FavouriteModel favouriteModel = 
FavouriteModel(restaurantId: vendorModel.id, userId: FireStoreUtils.getCurrentUid());
> lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:916:                                    controller.favouriteList.removeWhere((item) => 
item.restaurantId == vendorModel.id);
  lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:917:                                    await 
FireStoreUtils.removeFavouriteRestaurant(favouriteModel);
  lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:918:                                  } else {
  lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:919:                                    FavouriteModel favouriteModel = 
FavouriteModel(restaurantId: vendorModel.id, userId: FireStoreUtils.getCurrentUid());
  lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:920:                                    controller.favouriteList.add(favouriteModel);
  lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:921:                                    await 
FireStoreUtils.setFavouriteRestaurant(favouriteModel);
  lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1083:                                  if (controller.favouriteList.where((p0) => 
p0.restaurantId == vendorModel.id).isNotEmpty) {
  lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1084:                                    FavouriteModel favouriteModel = 
FavouriteModel(restaurantId: vendorModel.id, userId: FireStoreUtils.getCurrentUid());
> lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1085:                                    controller.favouriteList.removeWhere((item) => 
item.restaurantId == vendorModel.id);
  lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1086:                                    await 
FireStoreUtils.removeFavouriteRestaurant(favouriteModel);
  lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1087:                                  } else {
  lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1088:                                    FavouriteModel favouriteModel = 
FavouriteModel(restaurantId: vendorModel.id, userId: FireStoreUtils.getCurrentUid());
  lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1089:                                    controller.favouriteList.add(favouriteModel);
  lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1090:                                    await 
FireStoreUtils.setFavouriteRestaurant(favouriteModel);
  lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1203:      onTap: () async {
  lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1204:        ShowToastDialog.showLoader("Please wait...".tr);
> lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1205:        VendorModel? vendorModel = await 
FireStoreUtils.getVendorById(model.vendorId!);
  lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1206:        ShowToastDialog.closeLoader();
  lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1207:        Get.to(const RestaurantDetailsScreen(), arguments: {"vendorModel": 
vendorModel});
  lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1208:      },
  lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1209:      child: Container(
  lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1210:        margin: EdgeInsets.only(right: 16),
  lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1231:                    right: 8,
  lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1232:                    child: FutureBuilder(
> lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1233:                      future: FireStoreUtils.getVendorById(model.vendorId!),
  lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1234:                      builder: (context, snapshot) {
  lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1235:                        if (snapshot.connectionState == ConnectionState.waiting) {
  lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1236:                          return const SizedBox();
  lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1237:                        } else {
  lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1238:                          if (snapshot.hasError) {
  lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1302:                          if (controller.favouriteList.where((p0) => 
p0.restaurantId == model.vendorId).isNotEmpty) {
  lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1303:                            FavouriteModel favouriteModel = 
FavouriteModel(restaurantId: model.vendorId, userId: FireStoreUtils.getCurrentUid());
> lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1304:                            controller.favouriteList.removeWhere((item) => 
item.restaurantId == model.vendorId);
  lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1305:                            await 
FireStoreUtils.removeFavouriteRestaurant(favouriteModel);
  lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1306:                          } else {
  lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1307:                            FavouriteModel favouriteModel = 
FavouriteModel(restaurantId: model.vendorId, userId: FireStoreUtils.getCurrentUid());
  lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1308:                            controller.favouriteList.add(favouriteModel);
  lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1309:                            await 
FireStoreUtils.setFavouriteRestaurant(favouriteModel);
  lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1911:                                                          if 
(controller.homeController.favouriteList.where((p0) => p0.restaurantId == vendorModel.id).isNotEmpty) {
  lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1912:                                                            FavouriteModel 
favouriteModel = FavouriteModel(restaurantId: vendorModel.id, userId: FireStoreUtils.getCurrentUid());
> lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1913:                                                            
controller.homeController.favouriteList.removeWhere((item) => item.restaurantId == vendorModel.id);
  lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1914:                                                            await 
FireStoreUtils.removeFavouriteRestaurant(favouriteModel);
  lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1915:                                                          } else {
  lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1916:                                                            FavouriteModel 
favouriteModel = FavouriteModel(restaurantId: vendorModel.id, userId: FireStoreUtils.getCurrentUid());
  lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1917:                                                            
controller.homeController.favouriteList.add(favouriteModel);
  lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1918:                                                            await 
FireStoreUtils.setFavouriteRestaurant(favouriteModel);
  lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:430:                        }).toList(),
  lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:431:                    onChanged: (value) async {
> lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:432:                      if (cartItem.isEmpty) {
  lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:433:                        await 
Preferences.setString(Preferences.foodDeliveryType, value!);
  lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:434:                        controller.selectedOrderTypeValue.value = value;
  lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:435:                        controller.getData();
  lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:436:                      } else {
  lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:437:                        showDialog(
  lib\screen_ui\multi_vendor_service\home_screen\restaurant_list_screen.dart:83:                                                  if 
(controller.favouriteList.where((p0) => p0.restaurantId == vendorModel.id).isNotEmpty) {
  lib\screen_ui\multi_vendor_service\home_screen\restaurant_list_screen.dart:84:                                                    FavouriteModel 
favouriteModel = FavouriteModel(restaurantId: vendorModel.id, userId: FireStoreUtils.getCurrentUid());
> lib\screen_ui\multi_vendor_service\home_screen\restaurant_list_screen.dart:85:                                                    
controller.favouriteList.removeWhere((item) => item.restaurantId == vendorModel.id);
  lib\screen_ui\multi_vendor_service\home_screen\restaurant_list_screen.dart:86:                                                    await 
FireStoreUtils.removeFavouriteRestaurant(favouriteModel);
  lib\screen_ui\multi_vendor_service\home_screen\restaurant_list_screen.dart:87:                                                  } else {
  lib\screen_ui\multi_vendor_service\home_screen\restaurant_list_screen.dart:88:                                                    FavouriteModel 
favouriteModel = FavouriteModel(restaurantId: vendorModel.id, userId: FireStoreUtils.getCurrentUid());
  lib\screen_ui\multi_vendor_service\home_screen\restaurant_list_screen.dart:89:                                                    
controller.favouriteList.add(favouriteModel);
  lib\screen_ui\multi_vendor_service\home_screen\restaurant_list_screen.dart:90:                                                    await 
FireStoreUtils.setFavouriteRestaurant(favouriteModel);
  lib\screen_ui\multi_vendor_service\home_screen\story_view.dart:72:              storyItems:
  lib\screen_ui\multi_vendor_service\home_screen\story_view.dart:73:                  List.generate(widget.storyList[widget.index].videoUrl.length, (i) {
> lib\screen_ui\multi_vendor_service\home_screen\story_view.dart:74:                    return 
StoryItem.pageVideo(widget.storyList[widget.index].videoUrl[i], controller: storyController);
  lib\screen_ui\multi_vendor_service\home_screen\story_view.dart:75:                  }).toList(),
  lib\screen_ui\multi_vendor_service\home_screen\story_view.dart:76:              onComplete: () {
  lib\screen_ui\multi_vendor_service\home_screen\story_view.dart:77:                debugPrint("--------->");
  lib\screen_ui\multi_vendor_service\home_screen\story_view.dart:78:                debugPrint(widget.storyList.length.toString());
  lib\screen_ui\multi_vendor_service\home_screen\story_view.dart:79:                debugPrint(widget.index.toString());
  lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:508:                                              children: [
  lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:509:                                                NetworkImageWidget(
> lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:510:                                                  imageUrl: 
cartProductModel.photo.toString(),
  lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:511:                                                  height: 
Responsive.height(8, context),
  lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:512:                                                  width: 
Responsive.width(16, context),
  lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:513:                                                  fit: BoxFit.cover,
  lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:514:                                                ),
  lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:515:                                                Container(
  lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:539:                                                    Expanded(
  lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:540:                                                      child: Text(
> lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:541:                                                        
"${cartProductModel.name}",
  lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:542:                                                        textAlign: 
TextAlign.start,
  lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:543:                                                        style: 
TextStyle(fontFamily: AppThemeData.regular, color: isDark ? AppThemeData.grey50 : AppThemeData.grey900, fontSize: 16),
  lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:544:                                                      ),
  lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:545:                                                    ),
  lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:546:                                                    Text(
> lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:547:                                                      "x 
${cartProductModel.quantity}",
  lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:548:                                                      textAlign: 
TextAlign.start,
  lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:549:                                                      style: 
TextStyle(fontFamily: AppThemeData.regular, color: isDark ? AppThemeData.grey50 : AppThemeData.grey900, fontSize: 16),
  lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:550:                                                    ),
  lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:551:                                                  ],
  lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:552:                                                ),
  lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:553:                                                double.parse(
> lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:554:                                                          
cartProductModel.discountPrice == null || cartProductModel.discountPrice?.isEmpty == true ? "0.0" : cartProductModel.discountPrice.toString(),
  lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:555:                                                        ) <=
  lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:556:                                                        0
  lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:557:                                                    ? Text(
> lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:558:                                                      
Constant.amountShow(amount: cartProductModel.price),
  lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:559:                                                      style: 
TextStyle(
  lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:560:                                                        fontSize: 16,
  lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:561:                                                        color: isDark 
? AppThemeData.grey50 : AppThemeData.grey900,
  lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:562:                                                        fontFamily: 
AppThemeData.semiBold,
  lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:563:                                                        fontWeight: 
FontWeight.w600,
  lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:567:                                                      children: [
  lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:568:                                                        Text(
> lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:569:                                                          
Constant.amountShow(amount: cartProductModel.discountPrice.toString()),
  lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:570:                                                          style: 
TextStyle(
  lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:571:                                                            fontSize: 
16,
  lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:572:                                                            color: 
isDark ? AppThemeData.grey50 : AppThemeData.grey900,
  lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:573:                                                            
fontFamily: AppThemeData.semiBold,
  lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:574:                                                            
fontWeight: FontWeight.w600,
  lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:577:                                                        const 
SizedBox(width: 5),
  lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:578:                                                        Text(
> lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:579:                                                          
Constant.amountShow(amount: cartProductModel.price),
  lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:580:                                                          style: 
TextStyle(
  lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:581:                                                            fontSize: 
14,
  lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:582:                                                            
decoration: TextDecoration.lineThrough,
  lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:583:                                                            
decorationColor: isDark ? AppThemeData.grey500 : AppThemeData.grey400,
  lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:584:                                                            color: 
isDark ? AppThemeData.grey500 : AppThemeData.grey400,
  lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:590:                                                    ),
  lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:591:                                                if (Constant.taxScope 
== "product")
> lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:592:                                                  
cartProductModel.taxSetting?.isEmpty == true
  lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:593:                                                      ? SizedBox()
  lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:594:                                                      : Text(
> lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:595:                                                        "${'Tax:'.tr} 
${Constant.getTaxDisplayText(cartProductModel.taxSetting)}",
  lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:596:                                                        maxLines: 2,
  lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:597:                                                        overflow: 
TextOverflow.ellipsis,
  lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:598:                                                        style: 
TextStyle(fontSize: 12, color: isDark ? AppThemeData.ecommerce300 : AppThemeData.ecommerce300, fontFamily: AppThemeData.semiBold),
  lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:599:                                                      ),
  lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:600:                                              ],
  lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:603:                                        ],
  lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:604:                                      ),
> lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:605:                                      cartProductModel.variantInfo == 
null || cartProductModel.variantInfo!.variantOptions!.isEmpty
  lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:606:                                          ? Container()
  lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:607:                                          : Padding(
  lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:608:                                            padding: const 
EdgeInsets.symmetric(horizontal: 5, vertical: 10),
  lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:609:                                            child: Column(
  lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:610:                                              crossAxisAlignment: 
CrossAxisAlignment.start,
  lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:620:                                                  runSpacing: 6.0,
  lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:621:                                                  children:
> lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:622:                                                      
List.generate(cartProductModel.variantInfo!.variantOptions!.length, (i) {
  lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:623:                                                        return 
Container(
  lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:624:                                                          decoration: 
ShapeDecoration(
  lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:625:                                                            color: 
isDark ? AppThemeData.grey800 : AppThemeData.grey100,
  lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:626:                                                            shape: 
RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)),
  lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:627:                                                          ),
  lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:629:                                                            padding: 
const EdgeInsets.symmetric(horizontal: 16, vertical: 5),
  lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:630:                                                            child: 
Text(
> lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:631:                                                              
"${cartProductModel.variantInfo!.variantOptions!.keys.elementAt(i)} : 
${cartProductModel.variantInfo!.variantOptions![cartProductModel.variantInfo!.variantOptions!.keys.elementAt(i)]}",
  lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:632:                                                              
textAlign: TextAlign.start,
  lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:633:                                                              style: 
TextStyle(fontFamily: AppThemeData.medium, color: isDark ? AppThemeData.grey500 : AppThemeData.grey400),
  lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:634:                                                            ),
  lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:635:                                                          ),
  lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:636:                                                        );
  lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:640:                                            ),
  lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:641:                                          ),
> lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:642:                                      cartProductModel.extras == null 
|| cartProductModel.extras!.isEmpty
  lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:643:                                          ? const SizedBox()
  lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:644:                                          : Column(
  lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:645:                                            crossAxisAlignment: 
CrossAxisAlignment.start,
  lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:646:                                            children: [
  lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:647:                                              Row(
  lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:656:                                                  Text(
  lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:657:                                                    
Constant.amountShow(
> lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:658:                                                      amount: 
(double.parse(cartProductModel.extrasPrice.toString()) * double.parse(cartProductModel.quantity.toString())).toString(),
  lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:659:                                                    ),
  lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:660:                                                    textAlign: 
TextAlign.start,
  lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:661:                                                    style: 
TextStyle(fontFamily: AppThemeData.semiBold, color: isDark ? AppThemeData.primary300 : AppThemeData.primary300, fontSize: 16),
  lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:662:                                                  ),
  lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:663:                                                ],
  lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:667:                                                runSpacing: 6.0,
  lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:668:                                                children:
> lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:669:                                                    
List.generate(cartProductModel.extras!.length, (i) {
  lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:670:                                                      return 
Container(
  lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:671:                                                        decoration: 
ShapeDecoration(
  lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:672:                                                          color: 
isDark ? AppThemeData.grey800 : AppThemeData.grey100,
  lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:673:                                                          shape: 
RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)),
  lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:674:                                                        ),
  lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:676:                                                          padding: 
const EdgeInsets.symmetric(horizontal: 16, vertical: 5),
  lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:677:                                                          child: Text(
> lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:678:                                                            
cartProductModel.extras![i].toString(),
  lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:679:                                                            
textAlign: TextAlign.start,
  lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:680:                                                            style: 
TextStyle(fontFamily: AppThemeData.medium, color: isDark ? AppThemeData.grey500 : AppThemeData.grey400),
  lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:681:                                                          ),
  lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:682:                                                        ),
  lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:683:                                                      );
  lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:695:                                          textColor: isDark ? 
AppThemeData.grey100 : AppThemeData.grey800,
  lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:696:                                          onPress: () async {
> lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:697:                                            Get.to(const 
RateProductScreen(), arguments: {"orderModel": controller.orderModel.value, "productId": cartProductModel.id});
  lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:698:                                          },
  lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:699:                                        ),
  lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:700:                                      ),
  lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:701:                                    ],
  lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:702:                                  );
  lib\screen_ui\multi_vendor_service\order_list_screen\order_screen.dart:320:                      Expanded(
  lib\screen_ui\multi_vendor_service\order_list_screen\order_screen.dart:321:                        child: Text(
> lib\screen_ui\multi_vendor_service\order_list_screen\order_screen.dart:322:                          "${cartProduct.quantity} x 
${cartProduct.name.toString()}",
  lib\screen_ui\multi_vendor_service\order_list_screen\order_screen.dart:323:                          style: TextStyle(
  lib\screen_ui\multi_vendor_service\order_list_screen\order_screen.dart:324:                            color: isDark ? AppThemeData.grey50 : 
AppThemeData.grey900,
  lib\screen_ui\multi_vendor_service\order_list_screen\order_screen.dart:325:                            fontFamily: AppThemeData.regular,
  lib\screen_ui\multi_vendor_service\order_list_screen\order_screen.dart:326:                            fontWeight: FontWeight.w400,
  lib\screen_ui\multi_vendor_service\order_list_screen\order_screen.dart:327:                          ),
  lib\screen_ui\multi_vendor_service\order_list_screen\order_screen.dart:331:                        Constant.amountShow(
  lib\screen_ui\multi_vendor_service\order_list_screen\order_screen.dart:332:                          amount:
> lib\screen_ui\multi_vendor_service\order_list_screen\order_screen.dart:333:                              
double.parse(cartProduct.discountPrice.toString()) <= 0
> lib\screen_ui\multi_vendor_service\order_list_screen\order_screen.dart:334:                                  ? (double.parse('${cartProduct.price ?? 
0}') * double.parse('${cartProduct.quantity ?? 0}')).toString()
> lib\screen_ui\multi_vendor_service\order_list_screen\order_screen.dart:335:                                  : 
(double.parse('${cartProduct.discountPrice ?? 0}') * double.parse('${cartProduct.quantity ?? 0}'))
  lib\screen_ui\multi_vendor_service\order_list_screen\order_screen.dart:336:                                      .toString(),
  lib\screen_ui\multi_vendor_service\order_list_screen\order_screen.dart:337:                        ),
  lib\screen_ui\multi_vendor_service\order_list_screen\order_screen.dart:338:                        style: TextStyle(
  lib\screen_ui\multi_vendor_service\order_list_screen\order_screen.dart:339:                          color: isDark ? AppThemeData.grey50 : 
AppThemeData.grey900,
  lib\screen_ui\multi_vendor_service\order_list_screen\order_screen.dart:340:                          fontFamily: AppThemeData.semiBold,
  lib\screen_ui\multi_vendor_service\rate_us_screen\rate_product_screen.dart:52:                                  Text("Rate for".tr, style: 
TextStyle(color: isDark ? AppThemeData.grey400 : AppThemeData.grey500, fontSize: 16, fontFamily: AppThemeData.medium)),
  lib\screen_ui\multi_vendor_service\rate_us_screen\rate_product_screen.dart:53:                                  Text(
> lib\screen_ui\multi_vendor_service\rate_us_screen\rate_product_screen.dart:54:                                    
"${controller.productModel.value.name}".tr,
  lib\screen_ui\multi_vendor_service\rate_us_screen\rate_product_screen.dart:55:                                    style: TextStyle(color: isDark ? 
AppThemeData.grey100 : AppThemeData.grey800, fontSize: 18, fontFamily: AppThemeData.semiBold),
  lib\screen_ui\multi_vendor_service\rate_us_screen\rate_product_screen.dart:56:                                  ),
  lib\screen_ui\multi_vendor_service\rate_us_screen\rate_product_screen.dart:57:                                  const SizedBox(height: 10),
  lib\screen_ui\multi_vendor_service\rate_us_screen\rate_product_screen.dart:58:                                  RatingBar.builder(
  lib\screen_ui\multi_vendor_service\rate_us_screen\rate_product_screen.dart:59:                                    initialRating: 
controller.ratings.value,
  lib\screen_ui\multi_vendor_service\refer_friend_screen\refer_friend_screen.dart:133:                                onPress: () async {
  lib\screen_ui\multi_vendor_service\refer_friend_screen\refer_friend_screen.dart:134:                                  await Share.share(
> lib\screen_ui\multi_vendor_service\refer_friend_screen\refer_friend_screen.dart:135:                                    "${"Hey there, thanks for 
choosing Foodie. Hope you love our product. If you do, share it with your friends using code".tr} 
${controller.referralModel.value.referralCode.toString()} ${"and get".tr}${Constant.amountShow(amount: 
Constant.sectionConstantModel!.referralAmount.toString())} ${"when order completed".tr}",
  lib\screen_ui\multi_vendor_service\refer_friend_screen\refer_friend_screen.dart:136:                                  );
  lib\screen_ui\multi_vendor_service\refer_friend_screen\refer_friend_screen.dart:137:                                },
  lib\screen_ui\multi_vendor_service\refer_friend_screen\refer_friend_screen.dart:138:                              ),
  lib\screen_ui\multi_vendor_service\refer_friend_screen\refer_friend_screen.dart:139:                            ],
  lib\screen_ui\multi_vendor_service\refer_friend_screen\refer_friend_screen.dart:140:                          ),
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:30:String service53bSafeProductImage(dynamic product) {
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:31:  try {
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:32:    final dynamic photos = product.photos;
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:33:    if (photos is List && photos.isNotEmpty) {
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:34:      final first = photos.first;
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:35:      if (first != null && 
first.toString().trim().isNotEmpty) {
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:36:        return first.toString();
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:37:      }
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:40:
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:41:  try {
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:42:    final dynamic photo = product.photo;
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:43:    if (photo is List && photo.isNotEmpty) {
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:44:      final first = photo.first;
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:45:      if (first != null && 
first.toString().trim().isNotEmpty) {
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:46:        return first.toString();
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:47:      }
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:80:        return Scaffold(
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:81:          bottomNavigationBar:
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:82:              cartItem.isEmpty
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:83:                  ? null
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:84:                  : InkWell(
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:85:                    onTap: () {
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:86:                      Get.to(const CartScreen());
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:87:                    },
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:94:                        children: [
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:95:                          Text(
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:96:                            '${cartItem.length} 
${"items".tr}',
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:97:                            style: TextStyle(
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:98:                              fontFamily: 
AppThemeData.medium,
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:99:                              color: AppThemeData.grey50,
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:100:                              fontSize: 16,
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:101:                            ),
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:196:                            
controller.favouriteList.removeWhere(
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:197:                              (item) =>
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:198:                                  item.restaurantId ==
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:199:                                  
controller.vendorModel.value.id,
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:200:                            );
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:201:                            await 
FireStoreUtils.removeFavouriteRestaurant(
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:202:                              favouriteModel,
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:203:                            );
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:237:                      Obx(
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:238:                        () => badges.Badge(
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:239:                          showBadge: cartItem.isEmpty ? 
false : true,
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:240:                          badgeContent: Text(
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:241:                            "${cartItem.length}",
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:242:                            style: TextStyle(
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:243:                              fontSize: 14,
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:244:                              overflow: 
TextOverflow.ellipsis,
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:245:                              fontFamily: 
AppThemeData.semiBold,
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:246:                              fontWeight: 
FontWeight.w600,
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1521:                    List<String> selectedIndexVariants 
= [];
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1522:                    List<String> selectedIndexArray = 
[];
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1523:                    if (productModel.itemAttribute != 
null &&
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1524:                        
(productModel.itemAttribute?.attributes?.isNotEmpty ??
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1525:                            false) &&
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1526:                        
(productModel.itemAttribute?.variants?.isNotEmpty ??
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1527:                            false) &&
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1528:                        (productModel
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1529:                                .itemAttribute
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1530:                                ?.attributes
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1531:                                ?.first
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1533:                                ?.isNotEmpty ??
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1534:                            false)) {
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1535:                      if 
(productModel.itemAttribute!.attributes!.isNotEmpty) {
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1536:                        for (var element
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1537:                            in 
productModel.itemAttribute!.attributes!) {
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1538:                          if 
(element.attributeOptions!.isNotEmpty) {
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1539:                            selectedVariants.add(
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1540:                              productModel
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1541:                                  .itemAttribute!
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1542:                                  
.attributes![productModel
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1543:                                      .itemAttribute!
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1544:                                      .attributes!
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1545:                                      .indexOf(element)]
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1546:                                  .attributeOptions![0]
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1547:                                  .toString(),
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1548:                            );
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1549:                            selectedIndexVariants.add(
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1550:                              
'${productModel.itemAttribute!.attributes!.indexOf(element)} _${productModel.itemAttribute!.attributes![0].attributeOptions![0].toString()}',
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1551:                            );
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1552:                            selectedIndexArray.add(
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1553:                              
'${productModel.itemAttribute!.attributes!.indexOf(element)}_0',
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1554:                            );
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1555:                          }
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1556:                        }
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1557:                      }
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1558:                      if 
(productModel.itemAttribute!.variants!
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1559:                          .where(
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1560:                            (element) =>
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1561:                                element.variantSku ==
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1562:                                
selectedVariants.join('-'),
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1563:                          )
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1565:                        price = 
Constant.productCommissionPrice(
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1566:                          controller.vendorModel.value,
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1567:                          
productModel.itemAttribute!.variants!
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1568:                                  .where(
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1569:                                    (element) =>
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1570:                                        
element.variantSku ==
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1571:                                        
selectedVariants.join('-'),
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1572:                                  )
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1580:                      price = 
Constant.productCommissionPrice(
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1581:                        controller.vendorModel.value,
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1582:                        productModel.price.toString(),
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1583:                      );
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1584:                      disPrice =
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1585:                          
double.parse(productModel.disPrice.toString()) <= 0
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1586:                              ? "0"
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1587:                              : 
Constant.productCommissionPrice(
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1588:                                
controller.vendorModel.value,
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1589:                                
productModel.disPrice.toString(),
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1590:                              );
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1591:                    }
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1592:                    return Padding(
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1593:                      padding: const 
EdgeInsets.only(bottom: 20),
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1594:                      child: Row(
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1608:                                    : Row(
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1609:                                      children: [
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1610:                                        
productModel.nonveg == true
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1611:                                            ? 
SvgPicture.asset(
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1612:                                              
"assets/icons/ic_nonveg.svg",
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1613:                                            )
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1614:                                            : 
SvgPicture.asset(
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1615:                                              
"assets/icons/ic_veg.svg",
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1617:                                        const 
SizedBox(width: 5),
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1618:                                        Text(
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1619:                                          
productModel.nonveg == true
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1620:                                              ? "Non 
Veg.".tr
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1621:                                              : "Pure 
veg.".tr,
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1622:                                          style: 
TextStyle(
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1623:                                            color:
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1624:                                                
productModel.nonveg == true
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1625:                                                    ? 
AppThemeData.danger300
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1626:                                                    : 
AppThemeData.success400,
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1627:                                            fontFamily: 
AppThemeData.semiBold,
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1628:                                            fontWeight: 
FontWeight.w600,
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1629:                                          ),
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1633:                                const SizedBox(height: 
5),
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1634:                                Text(
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1635:                                  
productModel.name.toString(),
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1636:                                  style: TextStyle(
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1637:                                    fontSize: 18,
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1638:                                    color:
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1639:                                        isDark
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1640:                                            ? 
AppThemeData.grey50
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1703:                                    const 
SizedBox(width: 5),
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1704:                                    Text(
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1705:                                      
"${Constant.calculateReview(reviewCount: productModel.reviewsCount!.toStringAsFixed(0), reviewSum: productModel.reviewsSum.toString())} 
(${productModel.reviewsCount!.toStringAsFixed(0)})",
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1706:                                      style: TextStyle(
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1707:                                        color:
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1708:                                            isDark
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1709:                                                ? 
AppThemeData.grey50
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1710:                                                : 
AppThemeData.grey900,
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1716:                                ),
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1717:                                Text(
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1718:                                  
"${productModel.description}",
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1719:                                  maxLines: 2,
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1720:                                  style: TextStyle(
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1721:                                    overflow: 
TextOverflow.ellipsis,
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1722:                                    color:
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1723:                                        isDark
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1780:                              children: [
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1781:                                NetworkImageWidget(
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1782:                                  imageUrl: 
productModel.photo.toString(),
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1783:                                  fit: BoxFit.cover,
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1784:                                  height: 
Responsive.height(16, context),
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1785:                                  width: 
Responsive.width(34, context),
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1786:                                ),
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1787:                                Container(
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1807:                                          .where(
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1808:                                            (p0) =>
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1809:                                                
p0.productId == productModel.id,
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1810:                                          )
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1811:                                          .isNotEmpty) {
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1812:                                        
FavouriteItemModel
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1813:                                        favouriteModel 
= FavouriteItemModel(
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1814:                                          productId: 
productModel.id,
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1815:                                          storeId:
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1816:                                              
controller.vendorModel.value.id,
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1817:                                          userId:
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1818:                                              
FireStoreUtils.getCurrentUid(),
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1819:                                        );
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1821:                                            
.removeWhere(
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1822:                                              (item) =>
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1823:                                                  
item.productId ==
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1824:                                                  
productModel.id,
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1825:                                            );
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1826:                                        await 
FireStoreUtils.removeFavouriteItem(
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1827:                                          
favouriteModel,
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1828:                                        );
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1829:                                      } else {
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1830:                                        
FavouriteItemModel
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1831:                                        favouriteModel 
= FavouriteItemModel(
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1832:                                          productId: 
productModel.id,
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1833:                                          storeId:
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1834:                                              
controller.vendorModel.value.id,
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1835:                                          userId:
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1836:                                              
FireStoreUtils.getCurrentUid(),
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1837:                                        );
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1851:                                                    
(p0) =>
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1852:                                                        
p0.productId ==
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1853:                                                        
productModel.id,
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1854:                                                  )
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1855:                                                  
.isNotEmpty
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1856:                                              ? 
SvgPicture.asset(
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1857:                                                
"assets/icons/ic_like_fill.svg",
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1858:                                              )
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1872:                                      child:
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1873:                                          
selectedVariants.isNotEmpty ||
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1874:                                                  
(productModel.addOnsTitle !=
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1875:                                                        
  null &&
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1876:                                                      
productModel
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1877:                                                        
  .addOnsTitle!
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1878:                                                        
  .isNotEmpty)
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1879:                                              ? 
RoundedButtonFill(
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1902:                                                      
null) {
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1903:                                                    if 
(productModel
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1904:                                                        
.itemAttribute!
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1905:                                                        
.attributes!
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1906:                                                        
.isNotEmpty) {
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1907:                                                      
for (var element
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1908:                                                        
  in productModel
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1909:                                                        
      .itemAttribute!
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1910:                                                        
      .attributes!) {
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1911:                                                        
if (element
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1912:                                                        
    .attributeOptions!
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1913:                                                        
    .isNotEmpty) {
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1914:                                                        
  controller.selectedVariants.add(
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1915:                                                        
    productModel
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1916:                                                        
        .itemAttribute!
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1917:                                                        
        .attributes![productModel
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1918:                                                        
            .itemAttribute!
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1919:                                                        
            .attributes!
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1920:                                                        
            .indexOf(
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1921:                                                        
              element,
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1922:                                                        
            )]
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1923:                                                        
        .attributeOptions![0]
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1924:                                                        
        .toString(),
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1927:                                                        
      .selectedIndexVariants
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1928:                                                        
      .add(
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1929:                                                        
        '${productModel.itemAttribute!.attributes!.indexOf(element)} _${productModel.itemAttribute!.attributes![0].attributeOptions![0].toString()}',
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1930:                                                        
      );
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1931:                                                        
  controller
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1932:                                                        
      .selectedIndexArray
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1933:                                                        
      .add(
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1934:                                                        
        '${productModel.itemAttribute!.attributes!.indexOf(element)}_0',
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1935:                                                        
      );
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1936:                                                        
}
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1937:                                                      }
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1938:                                                    }
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1939:                                                    
final bool
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1940:                                                    
productIsInList = cartItem.any(
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1941:                                                      
(product) =>
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1942:                                                        
  product.id ==
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1943:                                                        
  "${productModel.id}~${productModel.itemAttribute!.variants!.where((element) => element.variantSku == controller.selectedVariants.join('-')).isNotEmpty ? 
productModel.itemAttribute!.variants!.where((element) => element.variantSku == controller.selectedVariants.join('-')).first.variantId.toString() : ""}",
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1944:                                                    );
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1945:
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1946:                                                    if 
(productIsInList) {
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1947:                                                      
CartProductModel element =
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1948:                                                        
  cartItem.firstWhere(
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1949:                                                        
    (product) =>
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1950:                                                        
        product.id ==
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1951:                                                        
        "${productModel.id}~${productModel.itemAttribute!.variants!.where((element) => element.variantSku == 
controller.selectedVariants.join('-')).isNotEmpty ? productModel.itemAttribute!.variants!.where((element) => element.variantSku == 
controller.selectedVariants.join('-')).first.variantId.toString() : ""}",
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1952:                                                        
  );
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1953:                                                      
controller
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1954:                                                        
      .quantity
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1955:                                                        
      .value =
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1956:                                                        
  element.quantity!;
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1957:                                                      
if (element.extras !=
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1958:                                                        
  null) {
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1959:                                                        
for (var element
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1960:                                                        
    in element
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1961:                                                        
        .extras!) {
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1970:                                                        
.where(
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1971:                                                        
  (product) =>
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1972:                                                        
      product.id ==
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1973:                                                        
      "${productModel.id}",
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1974:                                                        
)
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1975:                                                        
.isNotEmpty) {
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1976:                                                      
CartProductModel element =
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1977:                                                        
  cartItem.firstWhere(
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1978:                                                        
    (product) =>
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1979:                                                        
        product.id ==
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1980:                                                        
        "${productModel.id}",
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1981:                                                        
  );
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1982:                                                      
controller
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1983:                                                        
      .quantity
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1984:                                                        
      .value =
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1985:                                                        
  element.quantity!;
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1986:                                                      
if (element.extras !=
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1987:                                                        
  null) {
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1988:                                                        
for (var element
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1989:                                                        
    in element
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1990:                                                        
        .extras!) {
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2067:                                                        
                      ) =>
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2068:                                                        
                          p0.id ==
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2069:                                                        
                          productModel.id,
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2070:                                                        
                    )
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2071:                                                        
                    .first
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2072:                                                        
                    .quantity! -
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2073:                                                        
                1,
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2074:                                                        
          );
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2075:                                                        
        },
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2076:                                                        
        child: Icon(
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2077:                                                        
          Icons.remove,
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2095:                                                        
                (p0) =>
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2096:                                                        
                    p0.id ==
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2097:                                                        
                    productModel.id,
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2098:                                                        
              )
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2099:                                                        
              .first
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2100:                                                        
              .quantity
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2101:                                                        
              .toString(),
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2102:                                                        
          textAlign:
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2131:                                                        
                            ) =>
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2132:                                                        
                                p0.id ==
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2133:                                                        
                                productModel.id,
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2134:                                                        
                          )
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2135:                                                        
                          .first
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2136:                                                        
                          .quantity ??
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2137:                                                        
                      0) <
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2138:                                                        
                  (productModel.quantity ??
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2139:                                                        
                      0) ||
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2140:                                                        
              (productModel.quantity ??
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2141:                                                        
                      0) ==
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2142:                                                        
                  -1) {
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2143:                                                        
            controller.addToCart(
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2144:                                                        
              productModel:
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2145:                                                        
                  productModel,
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2157:                                                        
                        ) =>
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2158:                                                        
                            p0.id ==
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2159:                                                        
                            productModel.id,
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2160:                                                        
                      )
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2161:                                                        
                      .first
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2162:                                                        
                      .quantity! +
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2163:                                                        
                  1,
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2164:                                                        
            );
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2165:                                                        
          } else {
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2166:                                                        
            ShowToastDialog.showToast(
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2167:                                                        
              "Out of stock"
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2303:                      ),
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2304:                      Text(
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2305:                        
productModel.description.toString(),
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2306:                        textAlign: TextAlign.start,
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2307:                        style: TextStyle(
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2308:                          fontFamily: 
AppThemeData.regular,
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2309:                          fontWeight: FontWeight.w400,
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2310:                          color:
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2317:                  ),
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2318:                ),
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2319:                productModel.grams == 0 &&
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2320:                        
Constant.sectionConstantModel!.isProductDetails == false
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2321:                    ? SizedBox.shrink()
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2322:                    : Padding(
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2323:                      padding: const 
EdgeInsets.only(bottom: 10),
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2324:                      child: Row(
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2340:                          ),
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2341:                          Text(
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2342:                            
productModel.grams.toString(),
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2343:                            textAlign: TextAlign.start,
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2344:                            style: TextStyle(
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2345:                              fontFamily: 
AppThemeData.bold,
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2346:                              color:
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2347:                                  isDark
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2354:                      ),
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2355:                    ),
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2356:                productModel.calories == 0 &&
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2357:                        
Constant.sectionConstantModel!.isProductDetails == false
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2358:                    ? SizedBox.shrink()
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2359:                    : Padding(
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2360:                      padding: const 
EdgeInsets.only(bottom: 10),
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2361:                      child: Row(
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2377:                          ),
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2378:                          Text(
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2379:                            
productModel.calories.toString(),
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2380:                            textAlign: TextAlign.start,
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2381:                            style: TextStyle(
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2382:                              fontFamily: 
AppThemeData.bold,
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2383:                              color:
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2384:                                  isDark
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2391:                      ),
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2392:                    ),
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2393:                productModel.proteins == 0 &&
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2394:                        
Constant.sectionConstantModel!.isProductDetails == false
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2395:                    ? SizedBox.shrink()
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2396:                    : Padding(
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2397:                      padding: const 
EdgeInsets.only(bottom: 10),
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2398:                      child: Row(
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2414:                          ),
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2415:                          Text(
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2416:                            
productModel.proteins.toString(),
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2417:                            textAlign: TextAlign.start,
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2418:                            style: TextStyle(
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2419:                              fontFamily: 
AppThemeData.bold,
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2420:                              color:
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2421:                                  isDark
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2428:                      ),
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2429:                    ),
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2430:                productModel.fats == 0 &&
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2431:                        
Constant.sectionConstantModel!.isProductDetails == false
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2432:                    ? SizedBox.shrink()
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2433:                    : Padding(
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2434:                      padding: const 
EdgeInsets.only(bottom: 10),
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2435:                      child: Row(
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2451:                          ),
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2452:                          Text(
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2453:                            
productModel.fats.toString(),
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2454:                            textAlign: TextAlign.start,
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2455:                            style: TextStyle(
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2456:                              fontFamily: 
AppThemeData.bold,
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2457:                              color:
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2458:                                  isDark
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2466:                    ),
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2467:
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2468:                productModel.productSpecification != 
null &&
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2469:                        
productModel.productSpecification!.isNotEmpty
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2470:                    ? Padding(
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2471:                      padding: const 
EdgeInsets.only(top: 10),
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2472:                      child: Column(
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2473:                        crossAxisAlignment: 
CrossAxisAlignment.start,
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2474:                        children: [
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2489:                          ListView.builder(
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2490:                            itemCount:
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2491:                                
productModel.productSpecification!.length,
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2492:                            shrinkWrap: true,
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2493:                            padding: EdgeInsets.zero,
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2494:                            physics: const 
NeverScrollableScrollPhysics(),
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2495:                            itemBuilder: (context, 
index) {
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2496:                              return Padding(
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2500:                                  children: [
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2501:                                    Text(
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2502:                                      
productModel.productSpecification!.keys
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2503:                                          
.elementAt(index),
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2504:                                      textAlign: 
TextAlign.start,
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2505:                                      style: TextStyle(
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2506:                                        fontFamily: 
AppThemeData.regular,
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2507:                                        color:
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2513:                                    ),
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2514:                                    Text(
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2515:                                      
productModel.productSpecification!.values
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2516:                                          
.elementAt(index),
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2517:                                      textAlign: 
TextAlign.start,
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2518:                                      style: TextStyle(
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2519:                                        fontFamily: 
AppThemeData.bold,
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2520:                                        color:
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2535:                    : const SizedBox(),
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2536:
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2537:                productModel.brandId != null && 
productModel.brandId!.isNotEmpty
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2538:                    ? Padding(
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2539:                      padding: const 
EdgeInsets.only(top: 10),
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2540:                      child: Column(
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2541:                        crossAxisAlignment: 
CrossAxisAlignment.start,
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2542:                        children: [
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2556:                          SizedBox(height: 5),
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2557:                          Text(
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2558:                            
controller.getBrandName(productModel.brandId!),
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2559:                            textAlign: TextAlign.start,
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2560:                            style: TextStyle(
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2561:                              fontFamily: 
AppThemeData.semiBold,
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2562:                              color:
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2563:                                  isDark
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2625:                            children: [
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2626:                              NetworkImageWidget(
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2627:                                imageUrl: 
productModel.photo.toString(),
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2628:                                height: 
Responsive.height(11, context),
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2629:                                width: 
Responsive.width(22, context),
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2630:                                fit: BoxFit.cover,
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2631:                              ),
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2632:                              Container(
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2656:                                  Expanded(
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2657:                                    child: Text(
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2658:                                      
productModel.name.toString(),
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2659:                                      textAlign: 
TextAlign.start,
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2660:                                      maxLines: 1,
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2661:                                      style: TextStyle(
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2662:                                        fontSize: 16,
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2663:                                        overflow: 
TextOverflow.ellipsis,
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2676:                                          .where(
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2677:                                            (p0) =>
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2678:                                                
p0.productId == productModel.id,
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2679:                                          )
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2680:                                          .isNotEmpty) {
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2681:                                        
FavouriteItemModel
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2682:                                        favouriteModel 
= FavouriteItemModel(
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2683:                                          productId: 
productModel.id,
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2684:                                          storeId:
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2685:                                              
controller.vendorModel.value.id,
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2686:                                          userId:
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2687:                                              
FireStoreUtils.getCurrentUid(),
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2688:                                        );
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2690:                                            
.removeWhere(
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2691:                                              (item) =>
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2692:                                                  
item.productId ==
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2693:                                                  
productModel.id,
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2694:                                            );
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2695:                                        await 
FireStoreUtils.removeFavouriteItem(
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2696:                                          
favouriteModel,
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2697:                                        );
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2698:                                      } else {
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2699:                                        
FavouriteItemModel
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2700:                                        favouriteModel 
= FavouriteItemModel(
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2701:                                          productId: 
productModel.id,
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2702:                                          storeId:
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2703:                                              
controller.vendorModel.value.id,
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2704:                                          userId:
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2705:                                              
FireStoreUtils.getCurrentUid(),
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2706:                                        );
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2720:                                                    
(p0) =>
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2721:                                                        
p0.productId ==
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2722:                                                        
productModel.id,
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2723:                                                  )
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2724:                                                  
.isNotEmpty
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2725:                                              ? 
SvgPicture.asset(
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2726:                                                
"assets/icons/ic_like_fill.svg",
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2727:                                              )
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2739:                              ),
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2740:                              Text(
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2741:                                
productModel.description.toString(),
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2742:                                textAlign: 
TextAlign.start,
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2743:                                style: TextStyle(
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2744:                                  fontSize: 12,
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2745:                                  fontFamily: 
AppThemeData.regular,
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2746:                                  fontWeight: 
FontWeight.w400,
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2759:                ),
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2760:                const SizedBox(height: 10),
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2761:                productModel.itemAttribute == null ||
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2762:                        
productModel.itemAttribute!.attributes!.isEmpty
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2763:                    ? const SizedBox()
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2764:                    : ListView.builder(
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2765:                      itemCount: 
productModel.itemAttribute!.attributes!.length,
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2766:                      shrinkWrap: true,
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2767:                      padding: EdgeInsets.zero,
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2768:                      physics: const 
NeverScrollableScrollPhysics(),
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2769:                      itemBuilder: (context, index) {
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2770:                        String title = "";
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2771:                        for (var element in 
controller.attributesList) {
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2772:                          if (productModel
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2773:                                  .itemAttribute!
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2774:                                  .attributes![index]
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2775:                                  .attributeId ==
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2776:                              element.id) {
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2777:                            title = 
element.title.toString();
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2778:                          }
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2779:                        }
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2800:                                children: [
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2801:                                  productModel
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2802:                                          
.itemAttribute!
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2803:                                          
.attributes![index]
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2804:                                          
.attributeOptions!
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2805:                                          .isNotEmpty
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2806:                                      ? Column(
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2807:                                        
crossAxisAlignment:
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2808:                                            
CrossAxisAlignment.start,
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2865:                                          List.generate(
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2866:                                            productModel
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2867:                                                
.itemAttribute!
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2868:                                                
.attributes![index]
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2869:                                                
.attributeOptions!
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2870:                                                .length,
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2871:                                            (i) {
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2872:                                              return 
InkWell(
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2873:                                                onTap: 
() async {
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2885:                                                        
  index,
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2886:                                                        
  productModel
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2887:                                                        
      .itemAttribute!
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2888:                                                        
      .attributes![index]
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2889:                                                        
      .attributeOptions![i]
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2890:                                                        
      .toString(),
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2891:                                                        
);
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2892:                                                    
controller
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2893:                                                        
.selectedIndexVariants
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2894:                                                        
.add(
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2895:                                                        
  '$index _${productModel.itemAttribute!.attributes![index].attributeOptions![i].toString()}',
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2896:                                                        
);
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2897:                                                    
controller
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2898:                                                        
.selectedIndexArray
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2899:                                                        
.add('${index}_$i');
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2900:                                                  } 
else {
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2902:                                                        
.selectedIndexArray
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2903:                                                        
.remove(
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2904:                                                        
  '${index}_${productModel.itemAttribute!.attributes![index].attributeOptions?.indexOf(controller.selectedIndexVariants.where((element) => 
element.contains('$index _')).first.replaceAll('$index _', ''))}',
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2905:                                                        
);
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2906:                                                    
controller.selectedVariants
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2907:                                                        
.removeAt(index);
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2908:                                                    
controller
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2909:                                                        
.selectedIndexVariants
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2925:                                                        
  index,
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2926:                                                        
  productModel
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2927:                                                        
      .itemAttribute!
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2928:                                                        
      .attributes![index]
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2929:                                                        
      .attributeOptions![i]
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2930:                                                        
      .toString(),
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2931:                                                        
);
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2932:                                                    
controller
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2933:                                                        
.selectedIndexVariants
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2934:                                                        
.add(
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2935:                                                        
  '$index _${productModel.itemAttribute!.attributes![index].attributeOptions![i].toString()}',
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2936:                                                        
);
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2937:                                                    
controller
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2938:                                                        
.selectedIndexArray
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2939:                                                        
.add('${index}_$i');
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2940:                                                  }
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2941:
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2942:                                                  final 
bool
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2943:                                                  
productIsInList = cartItem.any(
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2944:                                                    
(product) =>
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2945:                                                        
product.id ==
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2946:                                                        
"${productModel.id}~${productModel.itemAttribute!.variants!.where((element) => element.variantSku == controller.selectedVariants.join('-')).isNotEmpty ? 
productModel.itemAttribute!.variants!.where((element) => element.variantSku == controller.selectedVariants.join('-')).first.variantId.toString() : ""}",
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2947:                                                  );
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2948:                                                  if 
(productIsInList) {
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2949:                                                    
CartProductModel
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2950:                                                    
element = cartItem.firstWhere(
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2951:                                                      
(product) =>
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2952:                                                        
  product.id ==
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2953:                                                        
  "${productModel.id}~${productModel.itemAttribute!.variants!.where((element) => element.variantSku == controller.selectedVariants.join('-')).isNotEmpty ? 
productModel.itemAttribute!.variants!.where((element) => element.variantSku == controller.selectedVariants.join('-')).first.variantId.toString() : ""}",
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2954:                                                    );
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2955:                                                    
controller.quantity.value =
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2956:                                                        
element.quantity!;
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2957:                                                  } 
else {
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2958:                                                    
controller.quantity.value =
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2959:                                                        
1;
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2960:                                                  }
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2961:
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2986:                                                      
Text(
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2987:                                                        
productModel
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2988:                                                        
    .itemAttribute!
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2989:                                                        
    .attributes![index]
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2990:                                                        
    .attributeOptions![i]
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2991:                                                        
    .toString(),
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2992:                                                        
style: TextStyle(
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2993:                                                        
  overflow:
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2994:                                                        
      TextOverflow
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3002:                                                        
      controller.selectedVariants.contains(
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3003:                                                        
            productModel
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3004:                                                        
                .itemAttribute!
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3005:                                                        
                .attributes![index]
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3006:                                                        
                .attributeOptions![i]
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3007:                                                        
                .toString(),
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3008:                                                        
          )
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3009:                                                        
          ? Colors.white
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3010:                                                        
          : isDark
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3020:                                                      
controller.selectedVariants.contains(
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3021:                                                        
    productModel
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3022:                                                        
        .itemAttribute!
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3023:                                                        
        .attributes![index]
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3024:                                                        
        .attributeOptions![i]
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3025:                                                        
        .toString(),
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3026:                                                        
  )
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3027:                                                        
  ? AppThemeData
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3028:                                                        
      .primary300
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3048:                      },
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3049:                    ),
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3050:                productModel.addOnsTitle == null ||
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3051:                        
productModel.addOnsTitle!.isEmpty
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3052:                    ? const SizedBox()
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3053:                    : Padding(
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3054:                      padding: const 
EdgeInsets.symmetric(
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3055:                        horizontal: 16,
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3056:                        vertical: 5,
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3094:                              ),
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3095:                              ListView.builder(
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3096:                                itemCount: 
productModel.addOnsTitle!.length,
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3097:                                physics: const 
NeverScrollableScrollPhysics(),
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3098:                                shrinkWrap: true,
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3099:                                padding: 
EdgeInsets.zero,
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3100:                                itemBuilder: (context, 
index) {
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3101:                                  String title =
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3102:                                      
productModel.addOnsTitle![index];
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3103:                                  String price =
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3104:                                      
productModel.addOnsPrice![index];
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3105:                                  return Padding(
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3106:                                    padding: const 
EdgeInsets.symmetric(
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3107:                                      horizontal: 10,
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3108:                                      vertical: 5,
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3109:                                    ),
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3245:                          InkWell(
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3246:                            onTap: () {
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3247:                              if 
(productModel.itemAttribute == null) {
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3248:                                if 
(controller.quantity.value <
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3249:                                        
(productModel.quantity ?? 0) ||
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3250:                                    
(productModel.quantity ?? 0) == -1) {
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3251:                                  
controller.quantity.value += 1;
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3252:                                  controller.update();
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3253:                                } else {
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3254:                                  
ShowToastDialog.showToast("Out of stock".tr);
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3255:                                }
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3256:                              } else {
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3257:                                int totalQuantity = 
int.parse(
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3258:                                  
productModel.itemAttribute!.variants!
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3259:                                      .where(
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3260:                                        (element) =>
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3261:                                            
element.variantSku ==
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3262:                                            
controller.selectedVariants.join(
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3263:                                              '-',
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3301:                      fontSizes: 16,
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3302:                      onPress: () async {
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3303:                        if (productModel.itemAttribute 
== null) {
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3304:                          await controller.addToCart(
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3305:                            productModel: productModel,
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3306:                            price: 
Constant.productCommissionPrice(
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3307:                              
controller.vendorModel.value,
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3308:                              
productModel.price.toString(),
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3309:                            ),
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3310:                            discountPrice:
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3311:                                double.parse(
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3312:                                          
productModel.disPrice.toString(),
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3313:                                        ) <=
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3314:                                        0
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3315:                                    ? "0"
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3316:                                    : 
Constant.productCommissionPrice(
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3317:                                      
controller.vendorModel.value,
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3318:                                      
productModel.disPrice.toString(),
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3319:                                    ),
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3320:                            isIncrement: true,
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3321:                            quantity: 
controller.quantity.value,
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3322:                          );
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3323:                        } else {
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3324:                          String variantPrice = "0";
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3325:                          if 
(productModel.itemAttribute!.variants!.any(
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3326:                            (e) =>
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3327:                                e.variantSku ==
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3328:                                
controller.selectedVariants.join('-'),
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3329:                          )) {
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3330:                            variantPrice = 
Constant.productCommissionPrice(
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3331:                              
controller.vendorModel.value,
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3332:                              
productModel.itemAttribute!.variants!
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3333:                                      .firstWhere(
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3334:                                        (e) =>
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3335:                                            
e.variantSku ==
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3336:                                            
controller.selectedVariants.join(
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3337:                                              '-',
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3345:                          Map<String, String> mapData = 
{};
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3346:                          for (var element
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3347:                              in 
productModel.itemAttribute!.attributes!) {
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3348:                            mapData.addEntries([
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3349:                              MapEntry(
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3350:                                
controller.attributesList
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3351:                                    .firstWhere(
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3352:                                      (e) => e.id == 
element.attributeId,
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3355:                                    .toString(),
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3356:                                
controller.selectedVariants[productModel
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3357:                                    .itemAttribute!
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3358:                                    .attributes!
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3359:                                    .indexOf(element)],
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3360:                              ),
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3361:                            ]);
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3362:                          }
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3363:
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3364:                          VariantInfo variantInfo = 
VariantInfo(
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3365:                            variantPrice:
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3366:                                
productModel.itemAttribute!.variants!
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3367:                                    .firstWhere(
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3368:                                      (e) =>
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3369:                                          e.variantSku 
==
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3370:                                          
controller.selectedVariants.join('-'),
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3371:                                    )
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3375:                            variantOptions: mapData,
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3376:                            variantImage:
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3377:                                
productModel.itemAttribute!.variants!
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3378:                                    .firstWhere(
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3379:                                      (e) =>
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3380:                                          e.variantSku 
==
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3381:                                          
controller.selectedVariants.join('-'),
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3382:                                    )
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3384:                                '',
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3385:                            variantId:
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3386:                                
productModel.itemAttribute!.variants!
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3387:                                    .firstWhere(
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3388:                                      (e) =>
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3389:                                          e.variantSku 
==
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3390:                                          
controller.selectedVariants.join('-'),
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3391:                                    )
  lib\screen_ui\multi_vendor_service\review_list_screen\review_list_screen.dart:71:                                            return const Text('');
  lib\screen_ui\multi_vendor_service\review_list_screen\review_list_screen.dart:72:                                          } else if (snapshot.data != 
null) {
> lib\screen_ui\multi_vendor_service\review_list_screen\review_list_screen.dart:73:                                            ProductModel model = 
ProductModel.fromJson(snapshot.data!.data()!);
  lib\screen_ui\multi_vendor_service\review_list_screen\review_list_screen.dart:74:                                            return Text(
  lib\screen_ui\multi_vendor_service\review_list_screen\review_list_screen.dart:75:                                              '${'Rate for'.tr} - 
${model.name ?? ''}',
  lib\screen_ui\multi_vendor_service\review_list_screen\review_list_screen.dart:76:                                              style: TextStyle(color: 
isDark ? AppThemeData.grey50 : AppThemeData.grey900, fontSize: 14, fontFamily: AppThemeData.semiBold),
  lib\screen_ui\multi_vendor_service\review_list_screen\review_list_screen.dart:77:                                            );
  lib\screen_ui\multi_vendor_service\review_list_screen\review_list_screen.dart:78:                                          } else {
  lib\screen_ui\multi_vendor_service\review_list_screen\review_list_screen.dart:108:                                    visible: 
ratingModel.reviewAttributes != null,
  lib\screen_ui\multi_vendor_service\review_list_screen\review_list_screen.dart:109:                                    child: ListView.builder(
> lib\screen_ui\multi_vendor_service\review_list_screen\review_list_screen.dart:110:                                      itemCount: 
ratingModel.reviewAttributes!.length,
  lib\screen_ui\multi_vendor_service\review_list_screen\review_list_screen.dart:111:                                      shrinkWrap: true,
  lib\screen_ui\multi_vendor_service\review_list_screen\review_list_screen.dart:112:                                      physics: const 
NeverScrollableScrollPhysics(),
  lib\screen_ui\multi_vendor_service\review_list_screen\review_list_screen.dart:113:                                      padding: EdgeInsets.zero,
  lib\screen_ui\multi_vendor_service\review_list_screen\review_list_screen.dart:114:                                      itemBuilder: (context, index) {
> lib\screen_ui\multi_vendor_service\review_list_screen\review_list_screen.dart:115:                                        String key = 
ratingModel.reviewAttributes!.keys.elementAt(index);
> lib\screen_ui\multi_vendor_service\review_list_screen\review_list_screen.dart:116:                                        dynamic value = 
ratingModel.reviewAttributes![key];
  lib\screen_ui\multi_vendor_service\review_list_screen\review_list_screen.dart:117:                                        return Padding(
  lib\screen_ui\multi_vendor_service\review_list_screen\review_list_screen.dart:118:                                          padding: const 
EdgeInsets.symmetric(vertical: 2),
  lib\screen_ui\multi_vendor_service\review_list_screen\review_list_screen.dart:119:                                          child: Row(
  lib\screen_ui\multi_vendor_service\review_list_screen\review_list_screen.dart:120:                                            children: [
  lib\screen_ui\multi_vendor_service\review_list_screen\review_list_screen.dart:121:                                              FutureBuilder(
  lib\screen_ui\multi_vendor_service\search_screen\search_screen.dart:266:                                      return InkWell(
  lib\screen_ui\multi_vendor_service\search_screen\search_screen.dart:267:                                        onTap: () async {
> lib\screen_ui\multi_vendor_service\search_screen\search_screen.dart:268:                                          await 
FireStoreUtils.getVendorById(productModel.vendorID.toString()).then((value) {
  lib\screen_ui\multi_vendor_service\search_screen\search_screen.dart:269:                                            if (value != null) {
  lib\screen_ui\multi_vendor_service\search_screen\search_screen.dart:270:                                              Get.to(const 
RestaurantDetailsScreen(), arguments: {"vendorModel": value});
  lib\screen_ui\multi_vendor_service\search_screen\search_screen.dart:271:                                            }
  lib\screen_ui\multi_vendor_service\search_screen\search_screen.dart:272:                                          });
  lib\screen_ui\multi_vendor_service\search_screen\search_screen.dart:273:                                        },
  lib\screen_ui\multi_vendor_service\search_screen\search_screen.dart:285:                                                    
Constant.sectionConstantModel!.isProductDetails == false
  lib\screen_ui\multi_vendor_service\search_screen\search_screen.dart:286:                                                        ? SizedBox()
> lib\screen_ui\multi_vendor_service\search_screen\search_screen.dart:287:                                                        : productModel.nonveg == 
true || productModel.veg == true
  lib\screen_ui\multi_vendor_service\search_screen\search_screen.dart:288:                                                        ? Row(
  lib\screen_ui\multi_vendor_service\search_screen\search_screen.dart:289:                                                          children: [
> lib\screen_ui\multi_vendor_service\search_screen\search_screen.dart:290:                                                            productModel.nonveg 
== true ? SvgPicture.asset("assets/icons/ic_nonveg.svg") : SvgPicture.asset("assets/icons/ic_veg.svg"),
  lib\screen_ui\multi_vendor_service\search_screen\search_screen.dart:291:                                                            const 
SizedBox(width: 5),
  lib\screen_ui\multi_vendor_service\search_screen\search_screen.dart:292:                                                            Text(
> lib\screen_ui\multi_vendor_service\search_screen\search_screen.dart:293:                                                              
productModel.nonveg == true ? "Non Veg.".tr : "Pure veg.".tr,
  lib\screen_ui\multi_vendor_service\search_screen\search_screen.dart:294:                                                              style: TextStyle(
> lib\screen_ui\multi_vendor_service\search_screen\search_screen.dart:295:                                                                color: 
productModel.nonveg == true ? AppThemeData.danger300 : AppThemeData.success400,
  lib\screen_ui\multi_vendor_service\search_screen\search_screen.dart:296:                                                                fontFamily: 
AppThemeData.semiBold,
  lib\screen_ui\multi_vendor_service\search_screen\search_screen.dart:297:                                                                fontWeight: 
FontWeight.w600,
  lib\screen_ui\multi_vendor_service\search_screen\search_screen.dart:298:                                                              ),
  lib\screen_ui\multi_vendor_service\search_screen\search_screen.dart:299:                                                            ),
  lib\screen_ui\multi_vendor_service\search_screen\search_screen.dart:300:                                                          ],
  lib\screen_ui\multi_vendor_service\search_screen\search_screen.dart:303:                                                    const SizedBox(height: 5),
  lib\screen_ui\multi_vendor_service\search_screen\search_screen.dart:304:                                                    Text(
> lib\screen_ui\multi_vendor_service\search_screen\search_screen.dart:305:                                                      
productModel.name.toString(),
  lib\screen_ui\multi_vendor_service\search_screen\search_screen.dart:306:                                                      style: TextStyle(
  lib\screen_ui\multi_vendor_service\search_screen\search_screen.dart:307:                                                        fontSize: 18,
  lib\screen_ui\multi_vendor_service\search_screen\search_screen.dart:308:                                                        color: isDark ? 
AppThemeData.grey50 : AppThemeData.grey900,
  lib\screen_ui\multi_vendor_service\search_screen\search_screen.dart:309:                                                        fontFamily: 
AppThemeData.semiBold,
  lib\screen_ui\multi_vendor_service\search_screen\search_screen.dart:310:                                                        fontWeight: 
FontWeight.w600,
  lib\screen_ui\multi_vendor_service\search_screen\search_screen.dart:351:                                                        const SizedBox(width: 5),
  lib\screen_ui\multi_vendor_service\search_screen\search_screen.dart:352:                                                        Text(
> lib\screen_ui\multi_vendor_service\search_screen\search_screen.dart:353:                                                          
"${Constant.calculateReview(reviewCount: productModel.reviewsCount!.toStringAsFixed(0), reviewSum: productModel.reviewsSum.toString())} 
(${productModel.reviewsCount!.toStringAsFixed(0)})",
  lib\screen_ui\multi_vendor_service\search_screen\search_screen.dart:354:                                                          style: 
TextStyle(color: isDark ? AppThemeData.grey50 : AppThemeData.grey900, fontFamily: AppThemeData.regular, fontWeight: FontWeight.w500),
  lib\screen_ui\multi_vendor_service\search_screen\search_screen.dart:355:                                                        ),
  lib\screen_ui\multi_vendor_service\search_screen\search_screen.dart:356:                                                      ],
  lib\screen_ui\multi_vendor_service\search_screen\search_screen.dart:357:                                                    ),
  lib\screen_ui\multi_vendor_service\search_screen\search_screen.dart:358:                                                    Text(
> lib\screen_ui\multi_vendor_service\search_screen\search_screen.dart:359:                                                      
"${productModel.description}",
  lib\screen_ui\multi_vendor_service\search_screen\search_screen.dart:360:                                                      maxLines: 2,
  lib\screen_ui\multi_vendor_service\search_screen\search_screen.dart:361:                                                      style: TextStyle(
  lib\screen_ui\multi_vendor_service\search_screen\search_screen.dart:362:                                                        overflow: 
TextOverflow.ellipsis,
  lib\screen_ui\multi_vendor_service\search_screen\search_screen.dart:363:                                                        color: isDark ? 
AppThemeData.grey50 : AppThemeData.grey900,
  lib\screen_ui\multi_vendor_service\search_screen\search_screen.dart:364:                                                        fontFamily: 
AppThemeData.regular,
  lib\screen_ui\multi_vendor_service\search_screen\search_screen.dart:374:                                                  children: [
  lib\screen_ui\multi_vendor_service\search_screen\search_screen.dart:375:                                                    NetworkImageWidget(
> lib\screen_ui\multi_vendor_service\search_screen\search_screen.dart:376:                                                      imageUrl: 
productModel.photo.toString(),
  lib\screen_ui\multi_vendor_service\search_screen\search_screen.dart:377:                                                      fit: BoxFit.cover,
  lib\screen_ui\multi_vendor_service\search_screen\search_screen.dart:378:                                                      height: 
Responsive.height(16, context),
  lib\screen_ui\multi_vendor_service\search_screen\search_screen.dart:379:                                                      width: 
Responsive.width(34, context),
  lib\screen_ui\multi_vendor_service\search_screen\search_screen.dart:380:                                                    ),
  lib\screen_ui\multi_vendor_service\search_screen\search_screen.dart:381:                                                    Container(
  lib\screen_ui\multi_vendor_service\search_screen\search_screen.dart:420:
  lib\screen_ui\multi_vendor_service\search_screen\search_screen.dart:421:    print("=======>");
> lib\screen_ui\multi_vendor_service\search_screen\search_screen.dart:422:    print(productModel.price);
> lib\screen_ui\multi_vendor_service\search_screen\search_screen.dart:423:    print(productModel.disPrice);
  lib\screen_ui\multi_vendor_service\search_screen\search_screen.dart:424:
> lib\screen_ui\multi_vendor_service\search_screen\search_screen.dart:425:    VendorModel? vendorModel = await 
FireStoreUtils.getVendorById(productModel.vendorID.toString());
> lib\screen_ui\multi_vendor_service\search_screen\search_screen.dart:426:    if (productModel.itemAttribute != null) {
> lib\screen_ui\multi_vendor_service\search_screen\search_screen.dart:427:      if (productModel.itemAttribute!.attributes!.isNotEmpty) {
> lib\screen_ui\multi_vendor_service\search_screen\search_screen.dart:428:        for (var element in productModel.itemAttribute!.attributes!) {
  lib\screen_ui\multi_vendor_service\search_screen\search_screen.dart:429:          if (element.attributeOptions!.isNotEmpty) {
> lib\screen_ui\multi_vendor_service\search_screen\search_screen.dart:430:            
selectedVariants.add(productModel.itemAttribute!.attributes![productModel.itemAttribute!.attributes!.indexOf(element)].attributeOptions![0].toString());
> lib\screen_ui\multi_vendor_service\search_screen\search_screen.dart:431:            
selectedIndexVariants.add('${productModel.itemAttribute!.attributes!.indexOf(element)} 
_${productModel.itemAttribute!.attributes![0].attributeOptions![0].toString()}');
> lib\screen_ui\multi_vendor_service\search_screen\search_screen.dart:432:            
selectedIndexArray.add('${productModel.itemAttribute!.attributes!.indexOf(element)}_0');
  lib\screen_ui\multi_vendor_service\search_screen\search_screen.dart:433:          }
  lib\screen_ui\multi_vendor_service\search_screen\search_screen.dart:434:        }
  lib\screen_ui\multi_vendor_service\search_screen\search_screen.dart:435:      }
> lib\screen_ui\multi_vendor_service\search_screen\search_screen.dart:436:      if (productModel.itemAttribute!.variants!.where((element) => 
element.variantSku == selectedVariants.join('-')).isNotEmpty) {
> lib\screen_ui\multi_vendor_service\search_screen\search_screen.dart:437:        price = Constant.productCommissionPrice(vendorModel!, 
productModel.itemAttribute!.variants!.where((element) => element.variantSku == selectedVariants.join('-')).first.variantPrice ?? '0');
  lib\screen_ui\multi_vendor_service\search_screen\search_screen.dart:438:        disPrice = Constant.productCommissionPrice(vendorModel, '0');
  lib\screen_ui\multi_vendor_service\search_screen\search_screen.dart:439:      }
  lib\screen_ui\multi_vendor_service\search_screen\search_screen.dart:440:    } else {
> lib\screen_ui\multi_vendor_service\search_screen\search_screen.dart:441:      price = Constant.productCommissionPrice(vendorModel!, 
productModel.price.toString());
> lib\screen_ui\multi_vendor_service\search_screen\search_screen.dart:442:      disPrice = Constant.productCommissionPrice(vendorModel, 
productModel.disPrice.toString());
  lib\screen_ui\multi_vendor_service\search_screen\search_screen.dart:443:    }
  lib\screen_ui\multi_vendor_service\search_screen\search_screen.dart:444:
  lib\screen_ui\multi_vendor_service\search_screen\search_screen.dart:445:    return {'price': price, 'disPrice': disPrice};
  lib\screen_ui\multi_vendor_service\search_screen\search_screen.dart:446:  }
  lib\screen_ui\multi_vendor_service\search_screen\search_screen.dart:447:}
  lib\screen_ui\on_demand_service\on_demand_category_screen.dart:88:    return GestureDetector(
  lib\screen_ui\on_demand_service\on_demand_category_screen.dart:89:      onTap: () {
> lib\screen_ui\on_demand_service\on_demand_category_screen.dart:90:        Get.to(() => ViewCategoryServiceListScreen(), arguments: {'categoryId': 
category.id, 'categoryTitle': category.title});
  lib\screen_ui\on_demand_service\on_demand_category_screen.dart:91:      },
  lib\screen_ui\on_demand_service\on_demand_category_screen.dart:92:      child: Column(
  lib\screen_ui\on_demand_service\on_demand_category_screen.dart:93:        children: [
> lib\screen_ui\on_demand_service\on_demand_category_screen.dart:94:          ClipRRect(borderRadius: BorderRadius.circular(12), child: 
CachedNetworkImage(imageUrl: category.image ?? "", height: 60, width: 60, fit: BoxFit.cover)),
  lib\screen_ui\on_demand_service\on_demand_category_screen.dart:95:          const SizedBox(height: 5),
> lib\screen_ui\on_demand_service\on_demand_category_screen.dart:96:          Text(category.title ?? "", style: AppThemeData.semiBoldTextStyle(fontSize: 
12, color: isDark ? AppThemeData.greyDark900 : AppThemeData.grey900), textAlign: TextAlign.center),
  lib\screen_ui\on_demand_service\on_demand_category_screen.dart:97:        ],
  lib\screen_ui\on_demand_service\on_demand_category_screen.dart:98:      ),
  lib\screen_ui\on_demand_service\on_demand_category_screen.dart:99:    );
  lib\screen_ui\on_demand_service\on_demand_category_screen.dart:100:  }
  lib\screen_ui\on_demand_service\on_demand_category_screen.dart:101:}
  lib\service\cart_provider.dart:25:  Future<void> addToCart(BuildContext context, CartProductModel product, int quantity) async {
  lib\service\cart_provider.dart:26:    _cartItems = await DatabaseHelper.instance.fetchCartProducts();
> lib\service\cart_provider.dart:27:    if ((_cartItems.where((item) => item.id == product.id)).isNotEmpty) {
> lib\service\cart_provider.dart:28:      var index = _cartItems.indexWhere((item) => item.id == product.id);
  lib\service\cart_provider.dart:29:      _cartItems[index].quantity = quantity;
> lib\service\cart_provider.dart:30:      if (product.extras != null || product.extras!.isNotEmpty) {
> lib\service\cart_provider.dart:31:        _cartItems[index].extras = product.extras;
> lib\service\cart_provider.dart:32:        _cartItems[index].extrasPrice = product.extrasPrice;
  lib\service\cart_provider.dart:33:      } else {
  lib\service\cart_provider.dart:34:        _cartItems[index].extras = [];
  lib\service\cart_provider.dart:35:        _cartItems[index].extrasPrice = "0";
  lib\service\cart_provider.dart:36:      }
  lib\service\cart_provider.dart:37:      await DatabaseHelper.instance.updateCartProduct(_cartItems[index]);
  lib\service\cart_provider.dart:38:    } else {
> lib\service\cart_provider.dart:39:      if (_cartItems.isEmpty || _cartItems.where((item) => item.vendorID == product.vendorID).isNotEmpty) {
> lib\service\cart_provider.dart:40:        product.quantity = quantity;
  lib\service\cart_provider.dart:41:        _cartItems.add(product);
> lib\service\cart_provider.dart:42:        cartItem.add(product);
  lib\service\cart_provider.dart:43:        await DatabaseHelper.instance.insertCartProduct(product);
  lib\service\cart_provider.dart:44:        log("===> insert");
  lib\service\cart_provider.dart:45:      } else {
  lib\service\cart_provider.dart:46:        showDialog(
  lib\service\cart_provider.dart:47:          context: context,
  lib\service\cart_provider.dart:53:              negativeString: "Cancel".tr,
  lib\service\cart_provider.dart:54:              positiveClick: () async {
> lib\service\cart_provider.dart:55:                cartItem.clear();
  lib\service\cart_provider.dart:56:                _cartItems.clear();
  lib\service\cart_provider.dart:57:                DatabaseHelper.instance.deleteAllCartProducts();
  lib\service\cart_provider.dart:58:                addToCart(context, product, quantity);
  lib\service\cart_provider.dart:59:                Get.back();
  lib\service\cart_provider.dart:60:              },
  lib\service\cart_provider.dart:73:  Future<void> removeFromCart(CartProductModel product, int quantity) async {
  lib\service\cart_provider.dart:74:    _cartItems = await DatabaseHelper.instance.fetchCartProducts();
> lib\service\cart_provider.dart:75:    var index = _cartItems.indexWhere((item) => item.id == product.id);
  lib\service\cart_provider.dart:76:    if (index >= 0) {
  lib\service\cart_provider.dart:77:      _cartItems[index].quantity = quantity;
  lib\service\cart_provider.dart:78:      if (_cartItems[index].quantity == 0) {
> lib\service\cart_provider.dart:79:        await DatabaseHelper.instance.deleteCartProduct(product.id!);
  lib\service\cart_provider.dart:80:        _cartItems.removeAt(index);
> lib\service\cart_provider.dart:81:        cartItem.removeAt(index);
  lib\service\cart_provider.dart:82:      } else {
  lib\service\cart_provider.dart:83:        await DatabaseHelper.instance.updateCartProduct(_cartItems[index]);
  lib\service\cart_provider.dart:84:      }
  lib\service\cart_provider.dart:85:    }
  lib\service\cart_provider.dart:86:    _initCart();
  lib\service\cart_provider.dart:89:  Future<void> clearDatabase() async {
  lib\service\cart_provider.dart:90:    _cartItems.clear();
> lib\service\cart_provider.dart:91:    cartItem.clear();
  lib\service\cart_provider.dart:92:    _cartStreamController.sink.add(_cartItems);
  lib\service\cart_provider.dart:93:  }
  lib\service\cart_provider.dart:94:}
  lib\widget\restaurant_image_view.dart:10:String service53bSafeProductImage(dynamic product) {
  lib\widget\restaurant_image_view.dart:11:  try {
> lib\widget\restaurant_image_view.dart:12:    final dynamic photos = product.photos;
  lib\widget\restaurant_image_view.dart:13:    if (photos is List && photos.isNotEmpty) {
  lib\widget\restaurant_image_view.dart:14:      final first = photos.first;
  lib\widget\restaurant_image_view.dart:15:      if (first != null && first.toString().trim().isNotEmpty) {
  lib\widget\restaurant_image_view.dart:16:        return first.toString();
  lib\widget\restaurant_image_view.dart:17:      }
  lib\widget\restaurant_image_view.dart:20:
  lib\widget\restaurant_image_view.dart:21:  try {
> lib\widget\restaurant_image_view.dart:22:    final dynamic photo = product.photo;
  lib\widget\restaurant_image_view.dart:23:    if (photo is List && photo.isNotEmpty) {
  lib\widget\restaurant_image_view.dart:24:      final first = photo.first;
  lib\widget\restaurant_image_view.dart:25:      if (first != null && first.toString().trim().isNotEmpty) {
  lib\widget\restaurant_image_view.dart:26:        return first.toString();
  lib\widget\restaurant_image_view.dart:27:      }
  lib\widget\story_view\widgets\story_view.dart:30:  /// last unshown page will have their `shown` attribute altered to false. This
  lib\widget\story_view\widgets\story_view.dart:31:  /// is because the next item to be displayed is taken by the last unshown
> lib\widget\story_view\widgets\story_view.dart:32:  /// story item.
  lib\widget\story_view\widgets\story_view.dart:33:  bool shown;
  lib\widget\story_view\widgets\story_view.dart:34:
  lib\widget\story_view\widgets\story_view.dart:35:  /// The page content
  lib\widget\story_view\widgets\story_view.dart:36:  final Widget view;
  lib\widget\story_view\widgets\story_view.dart:37:
  lib\widget\story_view\widgets\story_view.dart:108:  /// Factory constructor for page images. [controller] should be same instance as
  lib\widget\story_view\widgets\story_view.dart:109:  /// one passed to the `StoryView`
> lib\widget\story_view\widgets\story_view.dart:110:  factory StoryItem.pageImage({
  lib\widget\story_view\widgets\story_view.dart:111:    required String url,
  lib\widget\story_view\widgets\story_view.dart:112:    required StoryController controller,
  lib\widget\story_view\widgets\story_view.dart:113:    Key? key,
  lib\widget\story_view\widgets\story_view.dart:114:    BoxFit imageFit = BoxFit.fitWidth,
  lib\widget\story_view\widgets\story_view.dart:115:    Text? caption,
  lib\widget\story_view\widgets\story_view.dart:163:  /// Shorthand for creating inline image. [controller] should be same instance as
  lib\widget\story_view\widgets\story_view.dart:164:  /// one passed to the `StoryView`
> lib\widget\story_view\widgets\story_view.dart:165:  factory StoryItem.inlineImage({
  lib\widget\story_view\widgets\story_view.dart:166:    required String url,
  lib\widget\story_view\widgets\story_view.dart:167:    Text? caption,
  lib\widget\story_view\widgets\story_view.dart:168:    required StoryController controller,
  lib\widget\story_view\widgets\story_view.dart:169:    Key? key,
  lib\widget\story_view\widgets\story_view.dart:170:    BoxFit imageFit = BoxFit.cover,
  lib\widget\story_view\widgets\story_view.dart:222:  /// Shorthand for creating page video. [controller] should be same instance as
  lib\widget\story_view\widgets\story_view.dart:223:  /// one passed to the `StoryView`
> lib\widget\story_view\widgets\story_view.dart:224:  factory StoryItem.pageVideo(
  lib\widget\story_view\widgets\story_view.dart:225:    String url, {
  lib\widget\story_view\widgets\story_view.dart:226:    required StoryController controller,
  lib\widget\story_view\widgets\story_view.dart:227:    Key? key,
  lib\widget\story_view\widgets\story_view.dart:228:    Duration? duration,
  lib\widget\story_view\widgets\story_view.dart:229:    BoxFit imageFit = BoxFit.fitWidth,
  lib\widget\story_view\widgets\story_view.dart:269:  /// or `NetworkImage`. However, the story continues to play while the image loads
  lib\widget\story_view\widgets\story_view.dart:270:  /// up.
> lib\widget\story_view\widgets\story_view.dart:271:  factory StoryItem.pageProviderImage(
  lib\widget\story_view\widgets\story_view.dart:272:    ImageProvider image, {
  lib\widget\story_view\widgets\story_view.dart:273:    Key? key,
  lib\widget\story_view\widgets\story_view.dart:274:    BoxFit imageFit = BoxFit.fitWidth,
  lib\widget\story_view\widgets\story_view.dart:275:    String? caption,
  lib\widget\story_view\widgets\story_view.dart:276:    bool shown = false,
  lib\widget\story_view\widgets\story_view.dart:327:  /// or `NetworkImage`. However, the story continues to play while the image loads
  lib\widget\story_view\widgets\story_view.dart:328:  /// up.
> lib\widget\story_view\widgets\story_view.dart:329:  factory StoryItem.inlineProviderImage(
  lib\widget\story_view\widgets\story_view.dart:330:    ImageProvider image, {
  lib\widget\story_view\widgets\story_view.dart:331:    Key? key,
  lib\widget\story_view\widgets\story_view.dart:332:    Text? caption,
  lib\widget\story_view\widgets\story_view.dart:333:    bool shown = false,
  lib\widget\story_view\widgets\story_view.dart:334:    bool roundedTop = true,
  lib\widget\story_view\widgets\story_view.dart:537:    }
  lib\widget\story_view\widgets\story_view.dart:538:
> lib\widget\story_view\widgets\story_view.dart:539:    _animationController = AnimationController(duration: storyItem.duration, vsync: this);
  lib\widget\story_view\widgets\story_view.dart:540:
  lib\widget\story_view\widgets\story_view.dart:541:    _animationController!.addStatusListener((status) {
  lib\widget\story_view\widgets\story_view.dart:542:      if (status == AnimationStatus.completed) {
> lib\widget\story_view\widgets\story_view.dart:543:        storyItem.shown = true;
  lib\widget\story_view\widgets\story_view.dart:544:        if (widget.storyItems.last != storyItem) {
  lib\widget\story_view\widgets\story_view.dart:545:          _beginPlay();
  lib\widget\story_view\widgets\story_view.dart:546:        } else {
  lib\widget\story_view\widgets\story_view.dart:547:          // done playing
  lib\widget\story_view\widgets\story_view.dart:548:          _onComplete();



TEXT_END

## Likely Builder Files
TEXT_START

Path                                                                                                                                                       
----                                                                                                                                                       
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\all_brand_product_controller.dart                 
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\all_category_product_controller.dart              
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cart_controller.dart                              
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\dine_in_restaurant_details_controller.dart        
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rate_product_controller.dart                      
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_details_controller.dart                
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\models\cart_product_model.dart                                
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\models\product_model.dart                                     
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\ecommarce\all_brand_product_screen.dart             
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\ecommarce\all_category_product_screen.dart          
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\ecommarce\home_e_commerce_screen.dart               
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\advertisement_screens\all_ad...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart   
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\cart_screen\coupon_list_scre...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\cart_screen\oder_placing_scr...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\cashback_screen\cashback_off...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\change langauge\change_langu...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\chat_screens\chat_screen.dart  
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\chat_screens\driver_inbox_sc...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\chat_screens\restaurant_inbo...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_booking\dine_in_book...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_booking\dine_in_book...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\book_table_s...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_deta...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_rest...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_scre...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\view_all_cat...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\edit_profile_screen\edit_pro...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\favourite_screens\favourite_...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\gift_card\gift_card_screen.dart
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\gift_card\history_gift_card....
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\gift_card\redeem_gift_card_s...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\category_restaur...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\discount_restaur...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart   
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two....
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\restaurant_list_...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\story_view.dart    
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\view_all_categor...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\order_list_screen\order_deta...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\order_list_screen\order_scre...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\rate_us_screen\rate_product_...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\restaurant_details_screen\re...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\review_list_screen\review_li...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\search_screen\search_screen....
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\wallet_screen\wallet_screen....
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\on_demand_service\on_demand_category_screen.dart    
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\on_demand_service\view_category_service_screen.dart 
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\cart_provider.dart                                    
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\utils\network_image_widget.dart                               
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\widget\restaurant_image_view.dart                             
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\widget\firebase_pagination\src\firestore_pagination.dart      
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\widget\firebase_pagination\src\realtime_db_pagination.dart    
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\widget\firebase_pagination\src\widgets\views\build_paginati...
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\widget\osm_map\map_picker_page.dart                           



TEXT_END

STATUS: SERVICE_54D_FIX1_TRACE_OR_STATIC_RISK_FOUND