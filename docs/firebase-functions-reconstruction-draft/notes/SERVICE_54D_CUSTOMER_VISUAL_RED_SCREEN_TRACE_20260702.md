# SERVICE 54D CUSTOMER VISUAL RED SCREEN TRACE

Generated: 07/02/2026 17:30:39
Mode: READ ONLY.
Package: com.erbete.customer
Device: 115413747T003958

Reason: SERVICE 54C log counters showed PASS, but operator screenshot still shows visual red screen: Null check operator used on a null value.
Decision: 54C is LOG PASS but VISUAL FAIL until stack trace is captured and patched.

## Runtime Error Trace
TEXT_START

  07-02 17:30:40.722 D/MagellanHandle( 1698): updateRefreshRateForSceneVsyncs what = 23
  07-02 17:30:40.723 I/Hiber/fastState( 1698): do fastFreeze reason=cpuboost
  07-02 17:30:40.724 W/Hiber/fastState( 1698): uid=10131 is default-app
  07-02 17:30:40.725 D/TranCPUBooster( 1698): [setAffinity] Pid:1012 mask:6-7
  07-02 17:30:40.725 D/TranCPUBooster( 1698): [setAffinity] Pid:1098 mask:5-7
  07-02 17:30:40.725 E/TranCPUBooster( 1698): setTranSchedUxTags fail tid: 2423 threadName: wmshell.anim
  07-02 17:30:40.725 W/Hiber/fastState( 1698): uid=10205 is default-app
  07-02 17:30:40.725 E/TranCPUBooster( 1698): setTranSchedUxTags fail tid: 2421 threadName: ux_exact_wmshell.main
> 07-02 17:30:40.726 V/WindowManagerShell( 2380): Transition requested (#1222): android.os.BinderProxy@66ba13c TransitionRequestInfo { type = CLOSE, 
triggerTask = TaskInfo{userId=0 taskId=48209 displayId=0 isRunning=false baseIntent=Intent { act=android.intent.action.MAIN 
cat=[android.intent.category.LAUNCHER] flg=0x10200000 cmp=com.erbete.customer/.MainActivity } baseActivity=null topActivity=null origActivity=null 
realActivity=ComponentInfo{com.erbete.customer/com.erbete.customer.MainActivity} numActivities=0 lastActiveTime=178113924 supportsMultiWindow=true 
resizeMode=1 isResizeable=true minWidth=-1 minHeight=-1 defaultMinSize=110 token=WCT{android.window.IWindowContainerToken$Stub$Proxy@75c1ec5} 
topActivityType=1 pictureInPictureParams=null shouldDockBigOverlays=false launchIntoPipHostTaskId=-1 lastParentTaskIdBeforePip=-1 
displayCutoutSafeInsets=null topActivityInfo=null launchCookies=[] positionInParent=Point(0, 0) parentTaskId=-1 isFocused=true isVisible=true 
isVisibleRequested=true isSleeping=false locusId=null displayAreaFeatureId=1 isTopActivityTransparent=false appCompatTaskInfo=AppCompatTaskInfo { 
topActivityInSizeCompat=false topActivityEligibleForLetterboxEducation= falseisLetterboxEducationEnabled= false isLetterboxDoubleTapEnabled= false 
topActivityEligibleForUserAspectRatioButton= false topActivityBoundsLetterboxed= false isFromLetterboxDoubleTap= false 
topActivityLetterboxVerticalPosition= -1 topActivityLetterboxHorizontalPosition= -1 topActivityLetterboxWidth=-1 topActivityLetterboxHeight=-1 
isUserFullscreenOverrideEnabled=false isSystemFullscreenOverrideEnabled=false cameraCompatTaskInfo=CameraCompatTaskInfo { cameraCompatControlState=hidden 
freeformCameraCompatMode=inactive}}}, pipTask = null, remoteTransition = null, displayChange = null, flags = 0, debugId = 1222 }
  07-02 17:30:40.729 I/Hiber/nativeServiceClient( 1698): check binder uid=10098
  07-02 17:30:40.730 I/Hiber/nativeServiceClient( 1698): check binder uid=10107
  07-02 17:30:40.731 D/os.fingerprint( 1698): onUpdateFocusedApp oldPackageName:null oldComponent:null newPackageName:null newComponent:null mFm 
:android.hardware.fingerprint.FingerprintManager@9e3d33b
  07-02 17:30:40.735 I/Hiber/importantScene( 1698): app_lock: packageName=com.transsion.phonemaster
  07-02 17:30:40.736 I/Hiber/nativeServiceClient( 1698): check binder uid=10155
  07-02 17:30:40.737 I/Hiber/nativeServiceClient( 1698): check binder uid=10198
  07-02 17:30:40.742 W/WindowManager( 1698): Changing focus from Window{c845977 u0 com.erbete.customer/com.erbete.customer.MainActivity} to null 
displayId=0 Callers=com.android.server.wm.RootWindowContainer.updateFocusedWindowLocked:528 
com.android.server.wm.WindowManagerService.updateFocusedWindowLocked:6849 com.android.server.wm.ActivityRecord.onRemovedFromDisplay:5279 
com.android.server.wm.DisplayContent.removeAppToken:1644 
  07-02 17:30:40.743 I/Hiber/nativeServiceClient( 1698): check binder uid=10199
  07-02 17:30:40.745 I/Hiber/nativeServiceClient( 1698): check binder uid=10204
  07-02 17:30:40.746 I/Hiber/nativeServiceClient( 1698): check binder uid=10225
  07-02 17:30:40.747 I/Hiber/nativeServiceClient( 1698): check binder uid=10244
  07-02 17:30:40.747 I/Hiber/fastState( 1698): fastFreeze reason=cpuboost size=10 uids=[10098, 10107, 10155, 10198, 10199, 10204, 10225, 10244, 10254, 
10431] about costTime=24ms
  07-02 17:30:40.747 D/ActivityTaskManager( 1698): TaskProcess findExitInfoForRecentProcess mLastIndex#=0 mTrackPid= 4859
  07-02 17:30:40.748 D/ActivityTaskManager( 1698): TaskProcess clear proc= 4859
  07-02 17:30:40.748 D/TaskProcess( 1698): TaskProcess clearRealTask removeTask#=false mLastIndex= 0
  07-02 17:30:40.748 I/Hiber/nativeServiceClient( 1698): check binder uid=10254
  07-02 17:30:40.748 I/Hiber/nativeServiceClient( 1698): check binder uid=10431
> 07-02 17:30:40.750 D/os.fingerprint( 1698): onTaskMovedToFront Task{c40922d #5 type=home 
I=com.transsion.XOSLauncher/com.android.launcher3.uioverrides.QuickstepLauncher}
  07-02 17:30:40.750 D/os.fingerprint( 1698): activityComponent = 
ComponentInfo{com.transsion.XOSLauncher/com.android.launcher3.uioverrides.QuickstepLauncher} inMultiWindow = false
  07-02 17:30:40.752 D/os.fingerprint( 1698): onActivityResume next:ActivityRecord{40e8ac u0 
com.transsion.XOSLauncher/com.android.launcher3.uioverrides.QuickstepLauncher t5}
  07-02 17:30:40.752 D/os.fingerprint( 1698): activityComponent = 
ComponentInfo{com.transsion.XOSLauncher/com.android.launcher3.uioverrides.QuickstepLauncher} inMultiWindow = false
  07-02 17:30:40.752 D/AppLockLice( 1698): onActivityResume: packageName = com.transsion.XOSLauncher,mComeLockPkgList =[],mPreLockPkgList =[]
  07-02 17:30:40.752 D/AppLockLice( 1698): onActivityResume:isAwake = true ,isKeyguardLocked = false
  07-02 17:30:40.753 I/Usf/appStateManager( 1698): handleUpdateTaskOverLap uid: 10196    packageName:com.transsion.XOSLauncher remove
  07-02 17:30:40.757 D/os.fingerprint( 1698): onUpdateFocusedApp oldPackageName:null oldComponent:null newPackageName:com.transsion.XOSLauncher 
newComponent:ComponentInfo{com.transsion.XOSLauncher/com.android.launcher3.uioverrides.QuickstepLauncher} mFm 
:android.hardware.fingerprint.FingerprintManager@9e3d33b
  07-02 17:30:40.758 I/TranSCSourceConnectManagerImpl( 1698): hookDisplayResumedActivityChanged displayId: 0 packageName: com.transsion.XOSLauncher
  07-02 17:30:40.758 D/tranpm/BehaviorManager( 1698):  onAppLaunch nextPackName = com.transsion.XOSLauncher currPackName = com.erbete.customer
  07-02 17:30:40.758 D/aegean_TranRecentTasksProxy( 1698): FW_getTasks=3
  07-02 17:30:40.759 I/tranpm/Preloader( 1698): preload error: preloadList is null.
  07-02 17:30:40.760 I/tranpm/Preloader( 1698): preload start activity result: null
  07-02 17:30:40.761 D/MBrainLocalService( 1698): isVendorFreezeConditionPass is false
  07-02 17:30:40.761 E/MBrainLocalService( 1698): notifyAppSwitch failed
  07-02 17:30:40.761 D/MagellanHandle( 1698): updateRefreshRateForSceneVsyncs what = 23
  07-02 17:30:40.762 D/os.fingerprint( 1698): onActivityResume next:ActivityRecord{40e8ac u0 
com.transsion.XOSLauncher/com.android.launcher3.uioverrides.QuickstepLauncher t5}
  07-02 17:30:40.762 D/os.fingerprint( 1698): activityComponent = 
ComponentInfo{com.transsion.XOSLauncher/com.android.launcher3.uioverrides.QuickstepLauncher} inMultiWindow = false
  07-02 17:30:40.767 I/TranTp/TranTpSwitchManagerImpl( 1698): Set [com.transsion.XOSLauncher] is tp rate as default.
  07-02 17:30:40.791 I/os.permission( 1698): Grant permission: android.permission.MANAGE_ACTIVITY_TASKS to uid: 10196
  07-02 17:30:40.792 D/PictureInPicture( 2380): setLauncherKeepClearAreaHeight: visible=true, height=240
  07-02 17:30:40.793 I/TranThermalBacklightCtrl( 1698): cur package [com.transsion.XOSLauncher] is in TemperatureControlWhitelist
  07-02 17:30:40.793 I/TranThermalBacklightCtrl( 1698): mParamAPTempHigh[0]=43.0, mParamAPTempLow[0]=41.0, mParamBrightnessMax[0]=0.79999995, 
mParamLuxLimit[0]=2000.0
  07-02 17:30:40.793 I/TranThermalBacklightCtrl( 1698): mParamAPTempHigh[1]=46.0, mParamAPTempLow[1]=44.0, mParamBrightnessMax[1]=0.65, 
mParamLuxLimit[1]=2000.0
  07-02 17:30:40.793 I/TranThermalBacklightCtrl( 1698): mParamAPTempHigh[2]=49.0, mParamAPTempLow[2]=47.0, mParamBrightnessMax[2]=0.5, 
mParamLuxLimit[2]=2000.0
  07-02 17:30:40.797 D/WindowManager( 1698): currentFocusId -1 newFocusId: 0 currentFocusIsMultiWindow: false newFocusIsMultiWindow: false
  07-02 17:30:40.798 W/WindowManager( 1698): Changing focus from null to Window{ac8a64c u0 
com.transsion.XOSLauncher/com.android.launcher3.uioverrides.QuickstepLauncher} displayId=0 
Callers=com.android.server.wm.RootWindowContainer.updateFocusedWindowLocked:528 com.android.server.wm.WindowManagerService.updateFocusedWindowLocked:6849 
com.android.server.wm.WindowManagerService.relayoutWindowInner:2856 com.android.server.wm.WindowManagerService.relayoutWindow:2515 
> 07-02 17:30:40.803 D/WindowManager( 1698): updateSystemBarAttributes appearance:0, win appearance:0, opaqueAppearance:0, win:Window{ac8a64c u0 
com.transsion.XOSLauncher/com.android.launcher3.uioverrides.QuickstepLauncher}, appearanceRegions=[AppearanceRegion{LIGHT_STATUS_BARS 
bounds=[0,0][1080,2436]}]
  07-02 17:30:40.803 D/TranDisplayJamMonitor( 1698): checkExceptionWindowResult = 1024
  07-02 17:30:40.803 D/TranDisplayJamMonitor( 1698): check display window jam detection:Window{ac8a64c u0 
com.transsion.XOSLauncher/com.android.launcher3.uioverrides.QuickstepLauncher}
  07-02 17:30:40.803 D/TranDisplayJamMonitor( 1698): remove screen rotation animation detection
  07-02 17:30:40.803 I/WindowManager( 1698): Relayout Window{ac8a64c u0 com.transsion.XOSLauncher/com.android.launcher3.uioverrides.QuickstepLauncher}: 
oldVis=8 newVis=0 focusMayChange = true requestedWidth = 1080 requestedHeight = 2436 outFrames = ClientWindowFrames{frame=[0,0][1080,2436] 
display=[0,0][1080,2436] parentFrame=[0,0][0,0]} outSurfaceControl = 
Surface(name=com.transsion.XOSLauncher/com.android.launcher3.uioverrides.QuickstepLauncher)/@0x8090c47
  07-02 17:30:40.812 I/AppsFilter( 1698): interaction: PackageSetting{6c145b1 com.ustadmobile.meshrabiya.testapp/10405} -> PackageSetting{918fa12 
com.erbete.customer/10509} BLOCKED
  07-02 17:30:40.812 I/AppsFilter( 1698): interaction: PackageSetting{9102617 com.ghalbitnet.meshx2/10532} -> PackageSetting{918fa12 
com.erbete.customer/10509} BLOCKED
  07-02 17:30:40.812 I/AppsFilter( 1698): interaction: PackageSetting{4456a04 com.android.microdroid.empty_payload/10232} -> PackageSetting{918fa12 
com.erbete.customer/10509} BLOCKED
  07-02 17:30:40.812 I/AppsFilter( 1698): interaction: PackageSetting{af38bed com.example.hotspotmanager/10510} -> PackageSetting{918fa12 
com.erbete.customer/10509} BLOCKED
  07-02 17:30:40.821 I/tranpm/ServicePolicy( 1698): isBlockHsB1 true
  07-02 17:30:40.821 I/tranpm/ServicePolicy( 1698): limitBindServiceLocked by hs&job - cold: callingPackage = android, targetPkg = com.turkcell.bip
> 07-02 17:30:40.829 I/DisplayDeviceRepository( 1698): Display device changed: DisplayDeviceInfo{"Layar Bawaan": uniqueId="local:0", 1080 x 2436, modeId 
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
  07-02 17:30:40.833 I/Griffin/DeviceState( 1698): virtualDisplayPackageName :{com.android.shell=2000}
  07-02 17:30:40.835 E/ApplicationHelper( 1698): Fail to get PackageManager
  07-02 17:30:40.835 E/ApplicationHelper( 1698): Fail to get PackageManager
  07-02 17:30:40.835 E/ApplicationHelper( 1698): Fail to get PackageManager
  07-02 17:30:40.835 E/ApplicationHelper( 1698): Fail to get PackageManager
  07-02 17:30:40.835 E/ApplicationHelper( 1698): Fail to get PackageManager
  07-02 17:30:40.835 E/ApplicationHelper( 1698): Fail to get PackageManager
  07-02 17:30:40.835 E/ApplicationHelper( 1698): Fail to get PackageManager
  07-02 17:30:40.835 E/ApplicationHelper( 1698): Fail to get PackageManager
  07-02 17:30:40.835 E/ApplicationHelper( 1698): Fail to get PackageManager
  07-02 17:30:40.835 E/ApplicationHelper( 1698): Fail to get PackageManager
  07-02 17:30:40.835 E/ApplicationHelper( 1698): Fail to get PackageManager
  07-02 17:30:40.835 E/ApplicationHelper( 1698): Fail to get PackageManager
  07-02 17:30:40.835 E/ApplicationHelper( 1698): Fail to get PackageManager
  07-02 17:30:40.835 E/ApplicationHelper( 1698): Fail to get PackageManager
  07-02 17:30:40.835 E/ApplicationHelper( 1698): Fail to get PackageManager
  07-02 17:30:40.835 E/ApplicationHelper( 1698): Fail to get PackageManager
  07-02 17:30:40.835 E/ApplicationHelper( 1698): Fail to get PackageManager
  07-02 17:30:40.866 D/TranDynamicBarAnimControllerImpl( 1698): updateFlagsSimplifyAnimByLauncher pkgName:null mSimplifyAnimType:0 
mSimplifyAnimOpenPkgName:com.erbete.customer
  07-02 17:30:40.866 I/Transition( 1698): updateFlagsSimplifyAnimByLauncher pkgName = null flagsArr[0] = 0 mSimplifyAnimLaunchBounds: Rect(93, 483 - 267, 
657)
  07-02 17:30:40.866 D/TranDynamicBarAnimControllerImpl( 1698): updateFlagsFromDynamicIslandToWindow pkgName:null mStartFromDynamicIsland:false 
mDynamicIslandPkgName:com.transsion.iotservice
  07-02 17:30:40.866 I/Transition( 1698): updateFlagsFromDynamicIslandToWindow pkgName = null flagsArr[0] = 0
  07-02 17:30:40.866 D/TranDynamicBarAnimControllerImpl( 1698): updateFlagsSimplifyAnimByLauncher pkgName:null mSimplifyAnimType:0 
mSimplifyAnimOpenPkgName:com.erbete.customer
  07-02 17:30:40.866 I/Transition( 1698): updateFlagsSimplifyAnimByLauncher pkgName = null flagsArr[0] = 0 mSimplifyAnimLaunchBounds: Rect(93, 483 - 267, 
657)
  07-02 17:30:40.869 D/MagellanHandle( 1698): updateRefreshRateForSceneVsyncs what = 21
  07-02 17:30:40.875 V/WindowManagerShell( 2380): onTransitionReady(transaction=7292854568563)
> 07-02 17:30:40.875 V/WindowManagerShell( 2380): onTransitionReady (#1222) android.os.BinderProxy@66ba13c: {id=1222 t=CLOSE f=0x0 trk=0 r=[0@Point(0, 0)] 
c=[{WCT{android.window.IWindowContainerToken$Stub$Proxy@979fd27} m=TO_FRONT f=SHOW_WALLPAPER|MOVE_TO_TOP leash=Surface(name=Task=1)/@0x5d1374b sb=Rect(0, 
0 - 1080, 2436) eb=Rect(0, 0 - 1080, 2436) mSimplifyStartAbsBounds=Rect(0, 0 - 0, 0) d=0 
taskParent=-1},{WCT{android.window.IWindowContainerToken$Stub$Proxy@73cdbd4} m=CLOSE f=NONE leash=Surface(name=Task=48209)/@0x7ef9528 sb=Rect(0, 0 - 1080, 
2436) eb=Rect(0, 0 - 1080, 2436) mSimplifyStartAbsBounds=Rect(0, 0 - 0, 0) d=0 taskParent=-1},{null m=TO_FRONT f=IS_WALLPAPER 
leash=Surface(name=WallpaperWindowToken{b14fd4c token=android.os.Binder@430597f})/@0x564e241 sb=Rect(0, 0 - 1080, 2436) eb=Rect(0, 0 - 1080, 2436) 
mSimplifyStartAbsBounds=Rect(0, 0 - 0, 0) d=0}]}
  07-02 17:30:40.876 D/ShellTransitions_interrupt( 2380): isIconLaunchOpenOrClose mode: 3
  07-02 17:30:40.876 D/ShellTransitions_interrupt( 2380): isOpenOrCloseMode: trueisInterruptedTask: true isSplitMode: false isTranssionLauncher: true
  07-02 17:30:40.876 D/ShellTransitions_interrupt( 2380): isIconLaunchRemoteTransitionInterrupted isopenorclose: true   mHasPlayingTransitions: false 
mFinishHasPlayingTransitions: false
  07-02 17:30:40.876 D/ShellTransitions_interrupt( 2380): processReadyQueuemIfTransitionReUseLeash: false
> 07-02 17:30:40.876 V/WindowManagerShell( 2380): Playing animation for (#1222) android.os.BinderProxy@66ba13c@0
  07-02 17:30:40.876 D/ShellEventHandler( 2380): onTransitionStarting CLOSE token=android.os.BinderProxy@66ba13c
  07-02 17:30:40.876 D/ShellTransitions_interrupt( 2380): isIconLaunchOpenOrClose mode: 3
  07-02 17:30:40.876 D/ShellTransitions_interrupt( 2380): isOpenOrCloseMode: trueisInterruptedTask: true isSplitMode: false isTranssionLauncher: true
  07-02 17:30:40.876 D/ShellTransitions_interrupt( 2380): setupAnimHierarchy  ifNoReparentForInterrupt(info):  true ifMerge: false
  07-02 17:30:40.876 D/ShellTransitions_interrupt( 2380): isIconLaunchOpenOrClose mode: 3
  07-02 17:30:40.876 D/ShellTransitions_interrupt( 2380): isOpenOrCloseMode: trueisInterruptedTask: true isSplitMode: false isTranssionLauncher: true
  07-02 17:30:40.876 D/ShellTransitions_interrupt( 2380): isIconLaunchOpenOrClose mode: 3
  07-02 17:30:40.876 D/ShellTransitions_interrupt( 2380): isOpenOrCloseMode: trueisInterruptedTask: true isSplitMode: false isTranssionLauncher: true
  07-02 17:30:40.876 D/ShellTransitions_interrupt( 2380): setupAnimHierarchy  ifNoReparentForInterrupt(info):  true ifMerge: false
  07-02 17:30:40.876 D/ShellTransitions_interrupt( 2380): isIconLaunchOpenOrClose mode: 3
  07-02 17:30:40.876 D/ShellTransitions_interrupt( 2380): isOpenOrCloseMode: trueisInterruptedTask: true isSplitMode: false isTranssionLauncher: true
  07-02 17:30:40.876 D/ShellTransitions_interrupt( 2380): isIconLaunchOpenOrClose mode: 3
  07-02 17:30:40.876 D/ShellTransitions_interrupt( 2380): isOpenOrCloseMode: trueisInterruptedTask: true isSplitMode: false isTranssionLauncher: true
  07-02 17:30:40.876 D/ShellTransitions_interrupt( 2380): setupAnimHierarchy  ifNoReparentForInterrupt(info):  true ifMerge: false
  07-02 17:30:40.876 D/ShellTransitions_interrupt( 2380): isIconLaunchOpenOrClose mode: 3
  07-02 17:30:40.876 D/ShellTransitions_interrupt( 2380): isOpenOrCloseMode: trueisInterruptedTask: true isSplitMode: false isTranssionLauncher: true
  07-02 17:30:40.876 V/WindowManagerShell( 2380):  try handler com.android.wm.shell.transition.DefaultMixedHandler@91c2c6c
  07-02 17:30:40.876 V/WindowManagerShell( 2380):  try handler com.android.wm.shell.keyguard.KeyguardTransitionHandler@e100235
  07-02 17:30:40.876 V/WindowManagerShell( 2380):  try handler com.android.wm.shell.pip.PipTransition@fb1ea43
  07-02 17:30:40.876 V/WindowManagerShell( 2380):  try handler com.android.wm.shell.activityembedding.ActivityEmbeddingController@6f358c0
  07-02 17:30:40.879 V/WindowManagerShell( 2380):  try handler com.android.wm.shell.recents.RecentsTransitionHandler@f2779f9
  07-02 17:30:40.879 V/ShellRecents( 2380): RecentsTransitionHandler.startAnimation: no controller found
  07-02 17:30:40.879 V/WindowManagerShell( 2380):  try handler com.android.wm.shell.splitscreen.StageCoordinator@a8efd3e
  07-02 17:30:40.879 V/WindowManagerShell( 2380):  try handler com.android.wm.shell.transition.RemoteTransitionHandler@bfee79f
  07-02 17:30:40.879 V/WindowManagerShell( 2380): Transition doesn't have explicit remote, search filters for match for {id=1222 t=CLOSE f=0x0 trk=0 
r=[0@Point(0, 0)] c=[{WCT{android.window.IWindowContainerToken$Stub$Proxy@979fd27} m=TO_FRONT f=SHOW_WALLPAPER|MOVE_TO_TOP 
leash=Surface(name=Task=1)/@0x5d1374b sb=Rect(0, 0 - 1080, 2436) eb=Rect(0, 0 - 1080, 2436) mSimplifyStartAbsBounds=Rect(0, 0 - 0, 0) d=0 
taskParent=-1},{WCT{android.window.IWindowContainerToken$Stub$Proxy@73cdbd4} m=CLOSE f=NONE leash=Surface(name=Task=48209)/@0x7ef9528 sb=Rect(0, 0 - 1080, 
2436) eb=Rect(0, 0 - 1080, 2436) mSimplifyStartAbsBounds=Rect(0, 0 - 0, 0) d=0 taskParent=-1},{null m=TO_FRONT f=IS_WALLPAPER 
leash=Surface(name=WallpaperWindowToken{b14fd4c token=android.os.Binder@430597f})/@0x564e241 sb=Rect(0, 0 - 1080, 2436) eb=Rect(0, 0 - 1080, 2436) 
mSimplifyStartAbsBounds=Rect(0, 0 - 0, 0) d=0}]}
> 07-02 17:30:40.879 V/WindowManagerShell( 2380):  Delegate animation for (#1222) to null
  07-02 17:30:40.880 V/WindowManagerShell( 2380):  try handler com.android.wm.shell.transition.DefaultTransitionHandler@a1540ec
  07-02 17:30:40.880 V/WindowManagerShell( 2380): start default transition animation, info = {id=1222 t=CLOSE f=0x0 trk=0 r=[0@Point(0, 0)] 
c=[{WCT{android.window.IWindowContainerToken$Stub$Proxy@979fd27} m=TO_FRONT f=SHOW_WALLPAPER|MOVE_TO_TOP leash=Surface(name=Task=1)/@0x5d1374b sb=Rect(0, 
0 - 1080, 2436) eb=Rect(0, 0 - 1080, 2436) mSimplifyStartAbsBounds=Rect(0, 0 - 0, 0) d=0 
taskParent=-1},{WCT{android.window.IWindowContainerToken$Stub$Proxy@73cdbd4} m=CLOSE f=NONE leash=Surface(name=Task=48209)/@0x7ef9528 sb=Rect(0, 0 - 1080, 
2436) eb=Rect(0, 0 - 1080, 2436) mSimplifyStartAbsBounds=Rect(0, 0 - 0, 0) d=0 taskParent=-1},{null m=TO_FRONT f=IS_WALLPAPER 
leash=Surface(name=WallpaperWindowToken{b14fd4c token=android.os.Binder@430597f})/@0x564e241 sb=Rect(0, 0 - 1080, 2436) eb=Rect(0, 0 - 1080, 2436) 
mSimplifyStartAbsBounds=Rect(0, 0 - 0, 0) d=0}]}
  07-02 17:30:40.883 V/WindowManagerShell( 2380): loadAnimation: anim=android.view.animation.AnimationSet@175e140 animAttr=0x23 type=CLOSE isEntrance=false
  07-02 17:30:40.885 V/WindowManagerShell( 2380): loadAnimation: anim=android.view.animation.AnimationSet@d076a1f animAttr=0x22 type=CLOSE isEntrance=true
  07-02 17:30:40.886 D/ShellTransitions_interrupt( 2380): dispatchTransition: consumed by com.android.wm.shell.transition.DefaultTransitionHandler@a1540ec
  07-02 17:30:40.886 V/WindowManagerShell( 2380):  animated by com.android.wm.shell.transition.DefaultTransitionHandler@a1540ec
> 07-02 17:30:40.904 D/WindowManager( 1698): updateSystemBarAttributes appearance:0, win appearance:0, opaqueAppearance:0, win:Window{ac8a64c u0 
com.transsion.XOSLauncher/com.android.launcher3.uioverrides.QuickstepLauncher}, appearanceRegions=[AppearanceRegion{ bounds=[0,0][1080,2436]}]
> 07-02 17:30:40.905 V/WindowManager( 1698): Sent Transition (#1222) createdAt=07-02 17:30:40.716 via request=TransitionRequestInfo { type = CLOSE, 
triggerTask = TaskInfo{userId=0 taskId=48209 displayId=0 isRunning=false baseIntent=Intent { act=android.intent.action.MAIN 
cat=[android.intent.category.LAUNCHER] flg=0x10200000 cmp=com.erbete.customer/.MainActivity } baseActivity=null topActivity=null origActivity=null 
realActivity=ComponentInfo{com.erbete.customer/com.erbete.customer.MainActivity} numActivities=0 lastActiveTime=178113924 supportsMultiWindow=true 
resizeMode=1 isResizeable=true minWidth=-1 minHeight=-1 defaultMinSize=110 token=WCT{RemoteToken{ccb8b03 Task{7cddaa2 #48209 type=standard 
A=10509:com.erbete.customer}}} topActivityType=1 pictureInPictureParams=null shouldDockBigOverlays=false launchIntoPipHostTaskId=-1 
lastParentTaskIdBeforePip=-1 displayCutoutSafeInsets=null topActivityInfo=null launchCookies=[] positionInParent=Point(0, 0) parentTaskId=-1 
isFocused=true isVisible=true isVisibleRequested=true isSleeping=false locusId=null displayAreaFeatureId=1 isTopActivityTransparent=false 
appCompatTaskInfo=AppCompatTaskInfo { topActivityInSizeCompat=false topActivityEligibleForLetterboxEducation= falseisLetterboxEducationEnabled= false 
isLetterboxDoubleTapEnabled= false topActivityEligibleForUserAspectRatioButton= false topActivityBoundsLetterboxed= false isFromLetterboxDoubleTap= false 
topActivityLetterboxVerticalPosition= -1 topActivityLetterboxHorizontalPosition= -1 topActivityLetterboxWidth=-1 topActivityLetterboxHeight=-1 
isUserFullscreenOverrideEnabled=false isSystemFullscreenOverrideEnabled=false cameraCompatTaskInfo=CameraCompatTaskInfo { cameraCompatControlState=hidden 
freeformCameraCompatMode=inactive}}}, pipTask = null, remoteTransition = null, displayChange = null, flags = 0, debugId = 1222 }
  07-02 17:30:40.905 V/WindowManager( 1698):     startWCT=WindowContainerTransaction { changes = {} hops = [] errorCallbackToken=null 
taskFragmentOrganizer=null mInterrupt=false }
  07-02 17:30:40.905 V/WindowManager( 1698):     info={id=1222 t=CLOSE f=0x0 trk=0 r=[0@Point(0, 0)] c=[
> 07-02 17:30:40.905 V/WindowManager( 1698):         {WCT{RemoteToken{a4aa567 Task{e35342e #1 type=home}}} m=TO_FRONT f=SHOW_WALLPAPER|MOVE_TO_TOP 
leash=Surface(name=Task=1)/@0x894e422 sb=Rect(0, 0 - 1080, 2436) eb=Rect(0, 0 - 1080, 2436) mSimplifyStartAbsBounds=Rect(0, 0 - 0, 0) d=0 taskParent=-1},
> 07-02 17:30:40.905 V/WindowManager( 1698):         {WCT{RemoteToken{ccb8b03 Task{7cddaa2 #48209 type=standard A=10509:com.erbete.customer}}} m=CLOSE 
f=NONE leash=Surface(name=Task=48209)/@0x5e72dbd sb=Rect(0, 0 - 1080, 2436) eb=Rect(0, 0 - 1080, 2436) mSimplifyStartAbsBounds=Rect(0, 0 - 0, 0) d=0 
taskParent=-1},
  07-02 17:30:40.905 V/WindowManager( 1698):         {null m=TO_FRONT f=IS_WALLPAPER leash=Surface(name=WallpaperWindowToken{b14fd4c 
token=android.os.Binder@430597f})/@0x186c404 sb=Rect(0, 0 - 1080, 2436) eb=Rect(0, 0 - 1080, 2436) mSimplifyStartAbsBounds=Rect(0, 0 - 0, 0) d=0}
  07-02 17:30:40.905 V/WindowManager( 1698):     ]}
> 07-02 17:30:40.907 I/ActivityTaskManager( 1698): this = Task{c40922d #5 type=home 
I=com.transsion.XOSLauncher/com.android.launcher3.uioverrides.QuickstepLauncher} is in Transition
> 07-02 17:30:40.908 I/ActivityTaskManager( 1698): this = Task{e35342e #1 type=home} is in Transition
  07-02 17:30:40.924 W/ActivityManager( 1698): Unbind failed: could not find connection for android.app.LoadedApk$ServiceDispatcher$InnerConnection@4519741
  07-02 17:30:40.927 E/JobScheduler.Concurrency( 1698): Error executing JobStatus{ecd60ea androidx.work.systemjobscheduler:u0a393/291 
@androidx.work.systemjobscheduler@com.turkcell.bip/androidx.work.impl.background.systemjob.SystemJobService u=0 s=10393 TIME=-1h22m39s695ms:none NET READY}
  07-02 17:30:40.946 I/tranpm/ServicePolicy( 1698): isBlockHsB1 true
  07-02 17:30:40.946 I/tranpm/ServicePolicy( 1698): limitBindServiceLocked by hs&job - cold: callingPackage = android, targetPkg = 
com.google.android.apps.nbu.files
  07-02 17:30:40.951 W/ActivityManager( 1698): Unbind failed: could not find connection for android.app.LoadedApk$ServiceDispatcher$InnerConnection@80ed79
  07-02 17:30:40.955 D/TranWindowManagerServiceImpl( 1698): hookIMEVisibleChanged(), show:false
  07-02 17:30:40.955 I/TranMultiWindowManagerComponentImpl( 1698): hookInputMethodShown inputShown: false, connected:false, unbd:false
  07-02 17:30:40.955 I/TranSCSourceConnectManagerImpl( 1698): hookInputMethodShown inputShown: false
  07-02 17:30:40.955 D/TranSecureKeyboardManagerImpl( 1698): hookInputShowFromIMMS inputShow= false , mVisible = false , mNeedShow = false
> 07-02 17:30:40.961 I/input_debug( 1698): package: com.transsion.XOSLauncher mNeedShowSafeInput: false inputType: 0 methodMap: true isKeyguardShowing: 
false enable: 0 isSplitScreen: false
  07-02 17:30:40.962 E/JobScheduler.Concurrency( 1698): Error executing JobStatus{7e348f0 androidx.work.systemjobscheduler:u0a101/32974 
@androidx.work.systemjobscheduler@com.google.android.apps.nbu.files/androidx.work.impl.background.systemjob.SystemJobService u=0 s=10101 
URIS=[android.app.job.JobInfo$TriggerContentUri@26b5948d] READY}
  07-02 17:30:40.963 W/ActivityManager( 1698): pid 1698 system sent binder code 6 with flags 1 to frozen apps and got error -32
  07-02 17:30:40.964 W/ActivityManager( 1698): pid 1698 system sent binder code 4 with flags 1 to frozen apps and got error -32
  07-02 17:30:40.974 E/ApplicationHelper( 1698): Fail to get PackageManager
  07-02 17:30:40.974 E/ApplicationHelper( 1698): Fail to get PackageManager
  07-02 17:30:40.974 E/ApplicationHelper( 1698): Fail to get PackageManager
  07-02 17:30:40.974 E/ApplicationHelper( 1698): Fail to get PackageManager
  07-02 17:30:40.974 E/ApplicationHelper( 1698): Fail to get PackageManager
  07-02 17:30:40.974 E/ApplicationHelper( 1698): Fail to get PackageManager
  07-02 17:30:40.974 E/ApplicationHelper( 1698): Fail to get PackageManager
  07-02 17:30:40.974 E/ApplicationHelper( 1698): Fail to get PackageManager
  07-02 17:30:40.974 E/ApplicationHelper( 1698): Fail to get PackageManager
  07-02 17:30:40.974 E/ApplicationHelper( 1698): Fail to get PackageManager
  07-02 17:30:40.974 E/ApplicationHelper( 1698): Fail to get PackageManager
  07-02 17:30:40.976 V/TranSecureKeyboardManagerImpl( 1698): getServiceLocked mInputMethodService = null this: 
com.transsion.interaction.securekeyboard.TranSKSecureKeyboardManagerImpl@11bbed6
  07-02 17:30:40.997 D/TranAppBrightnessChangeController( 1698): [handleMessage] msg type: 1001 isCloudEnabled: true
  07-02 17:30:41.001 E/ApplicationHelper( 1698): Fail to get PackageManager
  07-02 17:30:41.008 I/tranpm/ServicePolicy( 1698): isBlockHsB1 true
  07-02 17:30:41.038 W/ActivityManager( 1698): Unbind failed: could not find connection for android.app.LoadedApk$ServiceDispatcher$InnerConnection@40bf6e
  07-02 17:30:41.038 W/ActivityManager( 1698): Slow operation: 64ms so far, now at startProcess: done updating battery stats
  07-02 17:30:41.039 W/ActivityManager( 1698): Slow operation: 65ms so far, now at startProcess: building log message
  07-02 17:30:41.039 I/ActivityManager( 1698): Start proc 19082:com.transsion.tabe/1000 for service 
{com.transsion.tabe/com.transsion.tabe.services.TabeMainService}
  07-02 17:30:41.039 W/ActivityManager( 1698): Slow operation: 65ms so far, now at startProcess: starting to update pids map
  07-02 17:30:41.039 E/JobScheduler.Concurrency( 1698): Error executing JobStatus{8d89b44 androidx.work.systemjobscheduler:u0a121/6203 
@androidx.work.systemjobscheduler@com.google.android.calendar/androidx.work.impl.background.systemjob.SystemJobService u=0 s=10121 TIME=-1h21m29s10ms:none 
READY}
  07-02 17:30:41.042 I/WindowManager( 1698):   isAnimating=false  okToAnimate=true  win=Window{c845977 u0 
com.erbete.customer/com.erbete.customer.MainActivity}
  07-02 17:30:41.056 D/WindowManager( 1698): getTopPackages# topPackages = []
> 07-02 17:30:41.056 D/TranAppBrightnessChangeController( 1698): [onForegroundAppchange] ForegroundPackage: com.transsion.XOSLauncher splitScreen: false 
multiWindow: false mIsPinned:false
  07-02 17:30:41.061 W/UserManagerService( 1698): Requested status bar icon for non-badged user 0
  07-02 17:30:41.063 W/ActivityManager( 1698): Slow operation: 89ms so far, now at startProcess: done updating pids map
  07-02 17:30:41.067 I/tranpm/ServicePolicy( 1698): isBlockHsB1 true
  07-02 17:30:41.067 I/tranpm/ServicePolicy( 1698): limitBindServiceLocked by hs&job - cold: callingPackage = android, targetPkg = 
com.google.android.calendar
  07-02 17:30:41.069 W/ActivityManager( 1698): Unbind failed: could not find connection for android.app.LoadedApk$ServiceDispatcher$InnerConnection@a1648a5
  07-02 17:30:41.070 E/JobScheduler.Concurrency( 1698): Error executing JobStatus{107496e androidx.work.systemjobscheduler:u0a121/6204 
@androidx.work.systemjobscheduler@com.google.android.calendar/androidx.work.impl.background.systemjob.SystemJobService u=0 s=10121 
TIME=-1h21m28s936ms:none READY}
  07-02 17:30:41.078 I/tranpm/ServicePolicy( 1698): isBlockHsB1 true
  07-02 17:30:41.078 I/tranpm/ServicePolicy( 1698): limitBindServiceLocked by hs&job - cold: callingPackage = android, targetPkg = com.talpa.hibrowser
  07-02 17:30:41.079 W/ActivityManager( 1698): setHasOverlayUi called on unknown pid: 4859
  07-02 17:30:41.080 D/os.permission.PermissionInfo( 1698): checkPermission 10430:android.permission.CONTROL_REMOTE_APP_TRANSITION_ANIMATIONS:false
  07-02 17:30:41.080 W/ActivityManager( 1698): Unbind failed: could not find connection for android.app.LoadedApk$ServiceDispatcher$InnerConnection@11d242b
  07-02 17:30:41.081 E/JobScheduler.Concurrency( 1698): Error executing JobStatus{48d18d6 androidx.work.systemjobscheduler:u0a206/1543 
@androidx.work.systemjobscheduler@com.talpa.hibrowser/androidx.work.impl.background.systemjob.SystemJobService u=0 s=10206 TIME=-2h35m21s56ms:none NET 
READY}
  07-02 17:30:41.086 I/Griffin/MemoryMonitorManager( 1698): ProcessRecord= ProcessRecord{8e2acd8 15165:tech.palm.find/u0a154} pss= 12 threshold= 3072
  07-02 17:30:41.088 E/ApplicationHelper( 1698): Fail to get PackageManager
  07-02 17:30:41.110 D/TranClassInfo(19082): instance successfully. com.transsion.hubcore.app.TranActivityThreadImpl@b234c75 from 
com.transsion.hubcore.app.ITranActivityThread
  07-02 17:30:41.124 W/Looper  ( 1698): Slow dispatch took 263ms main h=android.app.ActivityThread$H 
c=android.app.LoadedApk$ReceiverDispatcher$Args$$ExternalSyntheticLambda0@2d4e46 m=0
  07-02 17:30:41.127 W/Looper  ( 1698): Slow delivery took 271ms main h=android.app.ActivityThread$H 
c=android.app.LoadedApk$ReceiverDispatcher$Args$$ExternalSyntheticLambda0@147d807 m=0
  07-02 17:30:41.134 W/Looper  ( 1698): Drained
  07-02 17:30:41.247 D/tranpm/BehaviorManager( 1698): onMemPressureChange : level 0
  07-02 17:30:41.251 I/tranpm/ServicePolicy( 1698): isBlockHsB1 true
  07-02 17:30:41.251 I/tranpm/ServicePolicy( 1698): limitBindServiceLocked by hs&job - cold: callingPackage = android, targetPkg = com.talpa.hibrowser
  07-02 17:30:41.252 W/ActivityManager( 1698): Unbind failed: could not find connection for android.app.LoadedApk$ServiceDispatcher$InnerConnection@11d3b39
  07-02 17:30:41.253 E/JobScheduler.Concurrency( 1698): Error executing JobStatus{48d18d6 androidx.work.systemjobscheduler:u0a206/1543 
@androidx.work.systemjobscheduler@com.talpa.hibrowser/androidx.work.impl.background.systemjob.SystemJobService u=0 s=10206 TIME=-2h35m21s227ms:none NET 
READY}
  07-02 17:30:41.254 I/Griffin/MemoryMonitorManager( 1698): ProcessRecord= ProcessRecord{990701e 16461:com.transsion.phonemaster/u0a185} pss= 31 
threshold= 185
  07-02 17:30:41.267 D/ShellTransitions_interrupt( 2380): finish handler: com.android.wm.shell.transition.DefaultTransitionHandler@a1540ec
  07-02 17:30:41.267 D/ShellTransitions_interrupt( 2380): onFinish: isLauncherReUseLeash = false
> 07-02 17:30:41.267 V/WindowManagerShell( 2380): Transition animation finished (aborted=false), notifying core (#1222) android.os.BinderProxy@66ba13c@0
  07-02 17:30:41.268 D/ShellTransitions_interrupt( 2380): onFinish finish apply
  07-02 17:30:41.269 D/WindowOrganizerController( 1698): WCT isInterrupt: false
  07-02 17:30:41.270 W/ActivityManager( 1698): pid 1698 system sent binder code 7 with flags 1 to frozen apps and got error -32
  07-02 17:30:41.271 I/Hiber/fastState( 1698): do fastUnfreeze reason=cpuboost delay=0
  07-02 17:30:41.271 W/WindowManager( 1698): Exception thrown during dispatchAppVisibility Window{c845977 u0 
com.erbete.customer/com.erbete.customer.MainActivity EXITING}
  07-02 17:30:41.271 W/WindowManager( 1698): android.os.DeadObjectException
  07-02 17:30:41.271 W/WindowManager( 1698): 	at android.os.BinderProxy.transactNative(Native Method)
  07-02 17:30:41.271 W/WindowManager( 1698): 	at android.os.BinderProxy.transact(BinderProxy.java:686)
  07-02 17:30:41.271 W/WindowManager( 1698): 	at android.view.IWindow$Stub$Proxy.dispatchAppVisibility(IWindow.java:553)
  07-02 17:30:41.271 W/WindowManager( 1698): 	at com.android.server.wm.WindowState.sendAppVisibilityToClients(WindowState.java:3658)
  07-02 17:30:41.271 W/WindowManager( 1698): 	at com.android.server.wm.WindowContainer.sendAppVisibilityToClients(WindowContainer.java:1334)
  07-02 17:30:41.271 W/WindowManager( 1698): 	at com.android.server.wm.WindowToken.setClientVisible(WindowToken.java:403)
  07-02 17:30:41.271 W/WindowManager( 1698): 	at com.android.server.wm.ActivityRecord.setClientVisible(ActivityRecord.java:8056)
  07-02 17:30:41.271 W/WindowManager( 1698): 	at com.android.server.wm.ActivityRecord.postApplyAnimation(ActivityRecord.java:6651)
  07-02 17:30:41.271 W/WindowManager( 1698): 	at com.android.server.wm.ActivityRecord.commitVisibility(ActivityRecord.java:6593)
  07-02 17:30:41.271 W/WindowManager( 1698): 	at com.android.server.wm.Transition.finishTransition(Transition.java:1448)
  07-02 17:30:41.271 W/WindowManager( 1698): 	at com.android.server.wm.TransitionController.finishTransition(TransitionController.java:1081)
  07-02 17:30:41.271 W/WindowManager( 1698): 	at com.android.server.wm.WindowOrganizerController.finishTransition(WindowOrganizerController.java:546)
  07-02 17:30:41.271 W/WindowManager( 1698): 	at android.window.IWindowOrganizerController$Stub.onTransact(IWindowOrganizerController.java:289)
  07-02 17:30:41.271 W/WindowManager( 1698): 	at com.android.server.wm.WindowOrganizerController.onTransact(WindowOrganizerController.java:228)
  07-02 17:30:41.271 W/WindowManager( 1698): 	at android.os.Binder.execTransactInternal(Binder.java:1534)
  07-02 17:30:41.271 W/WindowManager( 1698): 	at android.os.Binder.execTransact(Binder.java:1460)
> 07-02 17:30:41.272 V/WindowManager( 1698): Finish Transition (#1222): created at 07-02 17:30:40.716 collect-started=2.275ms request-sent=4.548ms 
started=60.699ms ready=60.681ms sent=153.207ms finished=553.266ms
  07-02 17:30:41.274 I/Hiber/fastState( 1698): fastUnFreeze reason=cpuboost size=10 uids=[10098, 10107, 10155, 10198, 10199, 10204, 10225, 10244, 10254, 
10431] about costTime=3ms
  07-02 17:30:41.276 D/WindowManager( 1698): setParent old=ActivityRecord{e483684 u0 com.erbete.customer/.MainActivity t48209 f}},new=null,this 
window=Window{c845977 u0 com.erbete.customer/com.erbete.customer.MainActivity EXITING},callers=com.android.server.wm.WindowContainer.removeChild:862 
com.android.server.wm.ActivityRecord.removeChild:5351 com.android.server.wm.ActivityRecord.removeChild:482 
com.android.server.wm.WindowContainer.removeImmediately:932 com.android.server.wm.WindowState.removeImmediately:2565 
com.android.server.wm.WindowContainer.removeImmediately:908 
  07-02 17:30:41.276 D/WindowManager( 1698): removeImmediately mActivityRecord: ActivityRecord{e483684 u0 com.erbete.customer/.MainActivity t48209 f}} 
type: 1
  07-02 17:30:41.276 D/WindowManager( 1698): postWindowRemoveCleanupLocked: token:ActivityRecord{e483684 u0 com.erbete.customer/.MainActivity t48209 f}} 
win:Window{c845977 u0 com.erbete.customer/com.erbete.customer.MainActivity EXITING} token.isEmpty:true token.mPersistOnEmpty:true
> 07-02 17:30:41.278 D/WindowManager( 1698): setParent old=Task{7cddaa2 #48209 type=standard A=10509:com.erbete.customer},new=null,this 
window=ActivityRecord{e483684 u0 com.erbete.customer/.MainActivity t48209 f}},callers=com.android.server.wm.WindowContainer.removeChild:862 
com.android.server.wm.TaskFragment.removeChild:3257 com.android.server.wm.Task.removeChild:1590 com.android.server.wm.Task.removeChild:1573 
com.android.server.wm.WindowContainer.removeImmediately:932 com.android.server.wm.WindowToken.removeImmediately:359 
> 07-02 17:30:41.281 D/WindowManager( 1698): setParent old=DefaultTaskDisplayArea@32511995,new=null,this window=Task{7cddaa2 #48209 type=standard 
A=10509:com.erbete.customer},callers=com.android.server.wm.WindowContainer.removeChild:862 com.android.server.wm.TaskDisplayArea.removeChildTask:418 
com.android.server.wm.TaskDisplayArea.removeChild:409 com.android.server.wm.WindowContainer.removeImmediately:932 
com.android.server.wm.TaskFragment.removeImmediately:3337 com.android.server.wm.Task.removeImmediately:2790 
  07-02 17:30:41.281 D/MagellanHandle( 1698): updateRefreshRateForSceneVsyncs what = 21
  07-02 17:30:41.282 D/ShellEventHandler( 2380): onTransitionFinished CLOSE token=android.os.BinderProxy@66ba13c
  07-02 17:30:41.282 V/WindowManagerShell( 2380): Track 0 became idle
  07-02 17:30:41.282 V/WindowManagerShell( 2380): All active transition animations finished
  07-02 17:30:41.290 I/Griffin/MemoryMonitorManager( 1698): ProcessRecord= ProcessRecord{ede7fe9 16440:com.transsion.aicore.main/u0a408} pss= 8 threshold= 
3072
> 07-02 17:30:41.296 I/DisplayDeviceRepository( 1698): Display device changed: DisplayDeviceInfo{"Layar Bawaan": uniqueId="local:0", 1080 x 2436, modeId 
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
  07-02 17:30:41.296 I/Hiber/nativeServiceClient( 1698): check binder uid=10314
  07-02 17:30:41.297 I/Griffin/DeviceState( 1698): virtualDisplayPackageName :{com.android.shell=2000}
  07-02 17:30:41.301 W/UserManagerService( 1698): Requested status bar icon for non-badged user 0
  07-02 17:30:41.302 W/UserManagerService( 1698): Requested status bar icon for non-badged user 0
  07-02 17:30:41.327 D/tranpm/BehaviorManager( 1698): onMemPressureChange : level 0
  07-02 17:30:41.330 I/Griffin/MemoryMonitorManager( 1698): ProcessRecord= ProcessRecord{b568c3b 16406:com.android.vending:background/u0a112} pss= 38 
threshold= 3072
  07-02 17:30:41.352 D/ViewRootImpl(30797): setView appearance:0 ZeroScreen
  07-02 17:30:41.369 I/Griffin/MemoryMonitorManager( 1698): ProcessRecord= ProcessRecord{cffcd86 16252:com.google.android.rkpdapp/u0a431} pss= 6 
threshold= 3072
  07-02 17:30:41.401 I/Griffin/MemoryMonitorManager( 1698): ProcessRecord= ProcessRecord{5ae9eab 16221:com.android.providers.calendar/u0a64} pss= 5 
threshold= 3072
  07-02 17:30:41.405 D/CoreBackPreview( 1698): Window{56ebb47 u0 ZeroScreen}: Setting back callback 
OnBackInvokedCallbackInfo{mCallback=android.window.IOnBackInvokedCallback$Stub$Proxy@ad1cc3f, mPriority=0, mIsAnimationCallback=false}
  07-02 17:30:41.442 I/Griffin/MemoryMonitorManager( 1698): ProcessRecord= ProcessRecord{d27f985 16093:com.transsion.pcconnect/u0a428} pss= 12 threshold= 
3072
  07-02 17:30:41.443 E/ApplicationHelper( 1698): Fail to get PackageManager
  07-02 17:30:41.470 I/Griffin/MemoryMonitorManager( 1698): ProcessRecord= ProcessRecord{39ab1a1 16142:com.transsion.easypic/u0a164} pss= 7 threshold= 1024
  07-02 17:30:41.493 I/Griffin/MemoryMonitorManager( 1698): ProcessRecord= ProcessRecord{fcc956f 15618:com.transsion.screenrecorder/u0a190} pss= 7 
threshold= 3072
  07-02 17:30:41.516 I/Griffin/MemoryMonitorManager( 1698): ProcessRecord= ProcessRecord{3004547 15208:tech.palm.id/u0a181} pss= 9 threshold= 3072
  07-02 17:30:41.525 D/WindowManager( 1698): System monitor finishDrawingWindow w: Window{56ebb47 u0 ZeroScreen}; mDrawState = DRAW_PENDING
  07-02 17:30:41.528 I/WindowManager( 1698):   isAnimating=false  okToAnimate=true  win=Window{56ebb47 u0 ZeroScreen}
  07-02 17:30:41.541 I/Griffin/MemoryMonitorManager( 1698): ProcessRecord= ProcessRecord{84c2383 15139:tech.palm.find:remote/u0a154} pss= 8 threshold= 3072
  07-02 17:30:43.490 D/ActivityTaskManager( 1698): TaskLaunchParamsModifier:task=null activity=ActivityRecord{28ce32b u0 com.erbete.customer/.MainActivity 
display-area-from-current-params=null display-area-from-default-fallback=DefaultTaskDisplayArea@32511995 display-id=0 task-display-area-windowing-mode=1 
suggested-display-area=DefaultTaskDisplayArea@32511995
  07-02 17:30:43.490 E/ActivityTaskManager( 1698): AppLaunchTracker getTaskIndex error: task is null.
  07-02 17:30:43.490 I/ActivityTaskManager( 1698): TaskLaunchParamsModifier: pkgName = null, isMultiWindowTaskDisplayArea  = false
  07-02 17:30:43.490 I/ActivityTaskManager( 1698): TaskLaunchParamsModifier: pkgName = null
  07-02 17:30:43.490 D/ActivityTaskManager( 1698): TaskLaunchParamsModifier:task=null activity=ActivityRecord{28ce32b u0 com.erbete.customer/.MainActivity 
t-1} display-area-from-current-params=null display-area-from-default-fallback=DefaultTaskDisplayArea@32511995 display-id=0 
task-display-area-windowing-mode=1 suggested-display-area=DefaultTaskDisplayArea@32511995 non-freeform-task-display-area 
display-area=DefaultTaskDisplayArea@32511995 default-portrait freeform-size-mismatch=Rect(276, 672 - 804, 1752)
  07-02 17:30:43.491 I/ActivityTaskManager( 1698): needHookReparentToDefaultDisplay: sourceRecord = null,r = ActivityRecord{28ce32b u0 
com.erbete.customer/.MainActivity t-1}, tda = null
  07-02 17:30:43.493 I/ActivityTaskManager( 1698): TaskLaunchParamsModifier: pkgName = null, isMultiWindowTaskDisplayArea  = false
  07-02 17:30:43.493 I/ActivityTaskManager( 1698): TaskLaunchParamsModifier: pkgName = null
> 07-02 17:30:43.494 D/ActivityTaskManager( 1698): TaskLaunchParamsModifier:task=Task{7832121 #48210 type=standard A=10509:com.erbete.customer} 
activity=ActivityRecord{28ce32b u0 com.erbete.customer/.MainActivity t-1} display-from-task=0 display-id=0 task-display-area-windowing-mode=1 
suggested-display-area=DefaultTaskDisplayArea@32511995 inherit-from-task=fullscreen non-freeform-task-display-area 
display-area=DefaultTaskDisplayArea@32511995 default-portrait freeform-size-mismatch=Rect(276, 672 - 804, 1752)
> 07-02 17:30:43.496 D/os.fingerprint( 1698): onTaskMovedToFront Task{7832121 #48210 type=standard A=10509:com.erbete.customer}
  07-02 17:30:43.496 D/os.fingerprint( 1698): activityComponent = ComponentInfo{com.erbete.customer/com.erbete.customer.MainActivity} inMultiWindow = false
  07-02 17:30:43.497 D/TranStartingSurfaceController( 1698): hookAddStartingWindow activityRecord=ActivityRecord{28ce32b u0 
com.erbete.customer/.MainActivity t48210} snapshot=null type=2
  07-02 17:30:43.497 D/TranStartingSurfaceController( 1698): should not addstartingsurface isStartingFromLauncher=false activity=ActivityRecord{28ce32b u0 
com.erbete.customer/.MainActivity t48210}
  07-02 17:30:43.497 W/ActivityTaskManager( 1698): Add starting :ActivityRecord{28ce32b u0 com.erbete.customer/.MainActivity t48210} 
startingData=SplashScreenStartingData{3748707 waitForSyncTransactionCommit=false removeAfterTransaction= 0}
  07-02 17:30:43.497 D/MagellanHandle( 1698): updateRefreshRateForSceneVsyncs what = 23
  07-02 17:30:43.499 I/MemoryCollector( 1698): do beginMemoryPredict 
> 07-02 17:30:43.501 I/ActivityTaskManager( 1698): START u0 {act=android.intent.action.MAIN cat=[android.intent.category.LAUNCHER] flg=0x10200000 
cmp=com.erbete.customer/.MainActivity} with LAUNCH_SINGLE_TOP from uid 2000 (BAL_ALLOW_PERMISSION) result code=0
  07-02 17:30:43.501 I/ActivityTaskManager( 1698): Add pending draw ActivityRecord{28ce32b u0 com.erbete.customer/.MainActivity t48210}
> 07-02 17:30:43.503 V/WindowManagerShell( 2380): Transition requested (#1223): android.os.BinderProxy@b4a70b TransitionRequestInfo { type = OPEN, 
triggerTask = TaskInfo{userId=0 taskId=48210 displayId=0 isRunning=true baseIntent=Intent { act=android.intent.action.MAIN 
cat=[android.intent.category.LAUNCHER] flg=0x10200000 cmp=com.erbete.customer/.MainActivity } 
baseActivity=ComponentInfo{com.erbete.customer/com.erbete.customer.MainActivity} 
topActivity=ComponentInfo{com.erbete.customer/com.erbete.customer.MainActivity} origActivity=null 
realActivity=ComponentInfo{com.erbete.customer/com.erbete.customer.MainActivity} numActivities=1 lastActiveTime=178824981 supportsMultiWindow=true 
resizeMode=1 isResizeable=true minWidth=-1 minHeight=-1 defaultMinSize=110 token=WCT{android.window.IWindowContainerToken$Stub$Proxy@552a9e8} 
topActivityType=1 pictureInPictureParams=null shouldDockBigOverlays=false launchIntoPipHostTaskId=-1 lastParentTaskIdBeforePip=-1 
displayCutoutSafeInsets=Rect(0, 108 - 0, 0) topActivityInfo=ActivityInfo{5673801 com.erbete.customer.MainActivity} launchCookies=[] 
positionInParent=Point(0, 0) parentTaskId=-1 isFocused=false isVisible=false isVisibleRequested=false isSleeping=false locusId=null displayAreaFeatureId=1 
isTopActivityTransparent=false appCompatTaskInfo=AppCompatTaskInfo { topActivityInSizeCompat=false topActivityEligibleForLetterboxEducation= 
falseisLetterboxEducationEnabled= false isLetterboxDoubleTapEnabled= false topActivityEligibleForUserAspectRatioButton= false 
topActivityBoundsLetterboxed= false isFromLetterboxDoubleTap= false topActivityLetterboxVerticalPosition= -1 topActivityLetterboxHorizontalPosition= -1 
topActivityLetterboxWidth=1080 topActivityLetterboxHeight=2436 isUserFullscreenOverrideEnabled=false isSystemFullscreenOverrideEnabled=false 
cameraCompatTaskInfo=CameraCompatTaskInfo { cameraCompatControlState=hidden freeformCameraCompatMode=inactive}}}, pipTask = null, remoteTransition = null, 
displayChange = null, flags = 0, debugId = 1223 }
  07-02 17:30:43.503 D/aegean_PivotX+( 1698): applyActivityLaunchStart error={pkg='com.erbete.customer', uid=0, proc=com.erbete.customer, pid=0, type=7, 
act=com.erbete.customer/.MainActivity, mHome=false, onTop=false, appLaunch=true} lt:7
  07-02 17:30:43.507 D/ShellEventHandler( 2380): onPostRequestStartTransition OPEN token=android.os.BinderProxy@b4a70b
  07-02 17:30:43.507 D/PictureInPicture( 2380): setLauncherKeepClearAreaHeight: visible=false, height=240
  07-02 17:30:43.509 D/ActivityTaskManager_Recents( 1698): Skipping, unavail real act mTaskId: 45172
  07-02 17:30:43.509 D/ActivityTaskManager_Recents( 1698): 	excludeFromRecents=true, taskIndex = 10, isOnHomeDisplay: false, isAnimatingByRecents: false
  07-02 17:30:43.509 D/ActivityTaskManager_Recents( 1698): Skipping, not in visible range taskId: 36443
  07-02 17:30:43.509 V/SettingsProvider( 1698): name : accelerometer_rotation appId : 1000
  07-02 17:30:43.510 V/SettingsProvider( 1698): name : user_rotation appId : 1000
  07-02 17:30:43.510 D/MagellanHandle( 1698): updateRefreshRateForSceneVsyncs what = 23
  07-02 17:30:43.512 I/AppsFilter( 1698): interaction: PackageSetting{6c145b1 com.ustadmobile.meshrabiya.testapp/10405} -> PackageSetting{c488ca3 
com.erbete.customer/10509} BLOCKED
  07-02 17:30:43.512 I/AppsFilter( 1698): interaction: PackageSetting{9102617 com.ghalbitnet.meshx2/10532} -> PackageSetting{c488ca3 
com.erbete.customer/10509} BLOCKED
  07-02 17:30:43.512 I/AppsFilter( 1698): interaction: PackageSetting{4456a04 com.android.microdroid.empty_payload/10232} -> PackageSetting{c488ca3 
com.erbete.customer/10509} BLOCKED
  07-02 17:30:43.512 I/AppsFilter( 1698): interaction: PackageSetting{af38bed com.example.hotspotmanager/10510} -> PackageSetting{c488ca3 
com.erbete.customer/10509} BLOCKED
  07-02 17:30:43.513 D/os.fingerprint( 1698): onActivityResume next:ActivityRecord{28ce32b u0 com.erbete.customer/.MainActivity t48210}
  07-02 17:30:43.513 D/os.fingerprint( 1698): activityComponent = ComponentInfo{com.erbete.customer/com.erbete.customer.MainActivity} inMultiWindow = false
  07-02 17:30:43.513 D/AppLockLice( 1698): onActivityResume: packageName = com.erbete.customer,mComeLockPkgList =[],mPreLockPkgList =[]
  07-02 17:30:43.513 D/AppLockLice( 1698): onActivityResume:isAwake = true ,isKeyguardLocked = false
  07-02 17:30:43.513 D/TranPhoneWindowManagerInternal( 1698): onActivityResume false
  07-02 17:30:43.523 I/ActivityManager( 1698): Process ProcessRecord{ecfbba0 0:com.erbete.customer/u0a509} already pending start
  07-02 17:30:43.524 D/ActivityTaskManager( 1698): setActivityController imAMonkey is true, calling pid = 19160, calling udi = 2000, callstack = 
java.lang.Throwable
  07-02 17:30:43.524 D/ActivityTaskManager( 1698): 	at 
com.android.server.wm.ActivityTaskManagerService.setActivityController(ActivityTaskManagerService.java:2715)
  07-02 17:30:43.524 D/ActivityTaskManager( 1698): 	at com.android.server.am.ActivityManagerService.setActivityController(ActivityManagerService.java:8394)
  07-02 17:30:43.524 D/ActivityTaskManager( 1698): 	at android.app.IActivityManager$Stub.onTransact(IActivityManager.java:3689)
  07-02 17:30:43.524 D/ActivityTaskManager( 1698): 	at com.android.server.am.ActivityManagerService.onTransact(ActivityManagerService.java:3154)
  07-02 17:30:43.524 D/ActivityTaskManager( 1698): 	at android.os.Binder.execTransactInternal(Binder.java:1529)
  07-02 17:30:43.524 D/ActivityTaskManager( 1698): 	at android.os.Binder.execTransact(Binder.java:1460)
> 07-02 17:30:43.524 I/DisplayDeviceRepository( 1698): Display device changed: DisplayDeviceInfo{"Layar Bawaan": uniqueId="local:0", 1080 x 2436, modeId 
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
  07-02 17:30:43.526 I/Griffin/DeviceState( 1698): virtualDisplayPackageName :{com.android.shell=2000}
  07-02 17:30:43.534 D/ViewRootImpl( 2380): setView appearance:0 Splash Screen com.erbete.customer
  07-02 17:30:43.535 E/ApplicationHelper( 1698): Fail to get PackageManager
  07-02 17:30:43.537 D/BackupManagerService( 1698): mUserServices size: 1
  07-02 17:30:43.538 E/ApplicationHelper( 1698): Fail to get PackageManager
  07-02 17:30:43.538 E/ApplicationHelper( 1698): Fail to get PackageManager
  07-02 17:30:43.538 E/ApplicationHelper( 1698): Fail to get PackageManager
  07-02 17:30:43.538 E/ApplicationHelper( 1698): Fail to get PackageManager
  07-02 17:30:43.538 E/ApplicationHelper( 1698): Fail to get PackageManager
  07-02 17:30:43.538 E/ApplicationHelper( 1698): Fail to get PackageManager
  07-02 17:30:43.538 E/ApplicationHelper( 1698): Fail to get PackageManager
  07-02 17:30:43.539 I/ActivityManager( 1698): Start proc 11190:com.erbete.customer/u0a509 for next-top-activity 
{com.erbete.customer/com.erbete.customer.MainActivity}
  07-02 17:30:43.541 D/BackupManagerService( 1698): mUserServices size: 1
  07-02 17:30:43.556 D/CoreBackPreview( 1698): Window{20c12c7 u0 Splash Screen com.erbete.customer}: Setting back callback 
OnBackInvokedCallbackInfo{mCallback=android.window.IOnBackInvokedCallback$Stub$Proxy@848378, mPriority=0, mIsAnimationCallback=false}
  07-02 17:30:43.562 W/WindowManager( 1698): Changing focus from Window{ac8a64c u0 
com.transsion.XOSLauncher/com.android.launcher3.uioverrides.QuickstepLauncher} to null displayId=0 
Callers=com.android.server.wm.RootWindowContainer.updateFocusedWindowLocked:528 com.android.server.wm.WindowManagerService.updateFocusedWindowLocked:6849 
com.android.server.wm.WindowManagerService.relayoutWindowInner:2856 com.android.server.wm.WindowManagerService.relayoutWindow:2515 
  07-02 17:30:43.563 I/Hiber/appStateMachine( 1698): uid:10204, pkg=com.openai.chatgpt  can't transition from R to F ,importantcase is : 
  07-02 17:30:43.581 D/WindowManager( 1698): System monitor finishDrawingWindow w: Window{20c12c7 u0 Splash Screen com.erbete.customer}; mDrawState = 
DRAW_PENDING
  07-02 17:30:43.585 D/BLASTSyncEngine( 1698): transition TransitionRecord{84fae5d id=1223 type=OPEN flags=0x0} isAuthenticateSucceed false
  07-02 17:30:43.590 I/Transition( 1698): updateFlagsFromDynamicIslandToWindow pkgName = com.transsion.XOSLauncher flagsArr[0] = 0
  07-02 17:30:43.590 D/TranDynamicBarAnimControllerImpl( 1698): updateFlagsSimplifyAnimByLauncher pkgName:com.transsion.XOSLauncher mSimplifyAnimType:0 
mSimplifyAnimOpenPkgName:com.erbete.customer
  07-02 17:30:43.590 I/Transition( 1698): updateFlagsSimplifyAnimByLauncher pkgName = com.transsion.XOSLauncher flagsArr[0] = 0 mSimplifyAnimLaunchBounds: 
Rect(93, 483 - 267, 657)
  07-02 17:30:43.591 D/TranDynamicBarAnimControllerImpl( 1698): updateFlagsFromDynamicIslandToWindow pkgName:null mStartFromDynamicIsland:false 
mDynamicIslandPkgName:com.transsion.iotservice
  07-02 17:30:43.591 I/Transition( 1698): updateFlagsFromDynamicIslandToWindow pkgName = null flagsArr[0] = 0
  07-02 17:30:43.592 D/TranDynamicBarAnimControllerImpl( 1698): updateFlagsSimplifyAnimByLauncher pkgName:null mSimplifyAnimType:0 
mSimplifyAnimOpenPkgName:com.erbete.customer
  07-02 17:30:43.592 I/Transition( 1698): updateFlagsSimplifyAnimByLauncher pkgName = null flagsArr[0] = 0 mSimplifyAnimLaunchBounds: Rect(93, 483 - 267, 
657)
  07-02 17:30:43.592 D/MagellanHandle( 1698): updateRefreshRateForSceneVsyncs what = 21
> 07-02 17:30:43.600 V/WindowManager( 1698): Sent Transition (#1223) createdAt=07-02 17:30:43.490 via request=TransitionRequestInfo { type = OPEN, 
triggerTask = TaskInfo{userId=0 taskId=48210 displayId=0 isRunning=true baseIntent=Intent { act=android.intent.action.MAIN 
cat=[android.intent.category.LAUNCHER] flg=0x10200000 cmp=com.erbete.customer/.MainActivity } 
baseActivity=ComponentInfo{com.erbete.customer/com.erbete.customer.MainActivity} 
topActivity=ComponentInfo{com.erbete.customer/com.erbete.customer.MainActivity} origActivity=null 
realActivity=ComponentInfo{com.erbete.customer/com.erbete.customer.MainActivity} numActivities=1 lastActiveTime=178824981 supportsMultiWindow=true 
resizeMode=1 isResizeable=true minWidth=-1 minHeight=-1 defaultMinSize=110 token=WCT{RemoteToken{6d93bb7 Task{7832121 #48210 type=standard 
A=10509:com.erbete.customer}}} topActivityType=1 pictureInPictureParams=null shouldDockBigOverlays=false launchIntoPipHostTaskId=-1 
lastParentTaskIdBeforePip=-1 displayCutoutSafeInsets=Rect(0, 108 - 0, 0) topActivityInfo=ActivityInfo{13a5f24 com.erbete.customer.MainActivity} 
launchCookies=[] positionInParent=Point(0, 0) parentTaskId=-1 isFocused=false isVisible=false isVisibleRequested=false isSleeping=false locusId=null 
displayAreaFeatureId=1 isTopActivityTransparent=false appCompatTaskInfo=AppCompatTaskInfo { topActivityInSizeCompat=false 
topActivityEligibleForLetterboxEducation= falseisLetterboxEducationEnabled= false isLetterboxDoubleTapEnabled= false 
topActivityEligibleForUserAspectRatioButton= false topActivityBoundsLetterboxed= false isFromLetterboxDoubleTap= false 
topActivityLetterboxVerticalPosition= -1 topActivityLetterboxHorizontalPosition= -1 topActivityLetterboxWidth=1080 topActivityLetterboxHeight=2436 
isUserFullscreenOverrideEnabled=false isSystemFullscreenOverrideEnabled=false cameraCompatTaskInfo=CameraCompatTaskInfo { cameraCompatControlState=hidden 
freeformCameraCompatMode=inactive}}}, pipTask = null, remoteTransition = null, displayChange = null, flags = 0, debugId = 1223 }
  07-02 17:30:43.600 V/WindowManager( 1698):     startWCT=WindowContainerTransaction { changes = {} hops = [] errorCallbackToken=null 
taskFragmentOrganizer=null mInterrupt=false }
  07-02 17:30:43.600 V/WindowManagerShell( 2380): onTransitionReady(transaction=7292854568602)
> 07-02 17:30:43.600 V/WindowManagerShell( 2380): onTransitionReady (#1223) android.os.BinderProxy@b4a70b: {id=1223 t=OPEN f=0x0 trk=0 r=[0@Point(0, 0)] 
c=[{WCT{android.window.IWindowContainerToken$Stub$Proxy@fb8a6c7} m=OPEN f=NONE leash=Surface(name=Task=48210)/@0x93a86eb sb=Rect(0, 0 - 1080, 2436) 
eb=Rect(0, 0 - 1080, 2436) mSimplifyStartAbsBounds=Rect(0, 0 - 0, 0) d=0 taskParent=-1},{WCT{android.window.IWindowContainerToken$Stub$Proxy@959d4f4} 
m=TO_BACK f=SHOW_WALLPAPER leash=Surface(name=Task=1)/@0x7c93c48 sb=Rect(0, 0 - 1080, 2436) eb=Rect(0, 0 - 1080, 2436) mSimplifyStartAbsBounds=Rect(0, 0 - 
0, 0) d=0 taskParent=-1},{null m=CHANGE f=IS_WALLPAPER leash=Surface(name=WallpaperWindowToken{b14fd4c token=android.os.Binder@430597f})/@0x8bccae1 
sb=Rect(0, 0 - 1080, 2436) eb=Rect(0, 0 - 1080, 2436) mSimplifyStartAbsBounds=Rect(0, 0 - 0, 0) d=0}]}
  07-02 17:30:43.600 D/ShellTransitions_interrupt( 2380): isIconLaunchOpenOrClose mode: 4
  07-02 17:30:43.600 D/ShellTransitions_interrupt( 2380): isOpenOrCloseMode: trueisInterruptedTask: true isSplitMode: false isTranssionLauncher: true
  07-02 17:30:43.600 D/ShellTransitions_interrupt( 2380): isIconLaunchRemoteTransitionInterrupted isopenorclose: true   mHasPlayingTransitions: false 
mFinishHasPlayingTransitions: false
  07-02 17:30:43.600 D/ShellTransitions_interrupt( 2380): processReadyQueuemIfTransitionReUseLeash: false
> 07-02 17:30:43.600 V/WindowManagerShell( 2380): Playing animation for (#1223) android.os.BinderProxy@b4a70b@0
  07-02 17:30:43.600 D/ShellEventHandler( 2380): onTransitionStarting OPEN token=android.os.BinderProxy@b4a70b
  07-02 17:30:43.600 D/ShellTransitions_interrupt( 2380): isIconLaunchOpenOrClose mode: 4
  07-02 17:30:43.600 D/ShellTransitions_interrupt( 2380): isOpenOrCloseMode: trueisInterruptedTask: true isSplitMode: false isTranssionLauncher: true
  07-02 17:30:43.600 D/ShellTransitions_interrupt( 2380): setupAnimHierarchy  ifNoReparentForInterrupt(info):  true ifMerge: false
  07-02 17:30:43.600 D/ShellTransitions_interrupt( 2380): isIconLaunchOpenOrClose mode: 4
  07-02 17:30:43.600 D/ShellTransitions_interrupt( 2380): isOpenOrCloseMode: trueisInterruptedTask: true isSplitMode: false isTranssionLauncher: true
  07-02 17:30:43.601 D/ShellTransitions_interrupt( 2380): isIconLaunchOpenOrClose mode: 4
  07-02 17:30:43.601 D/ShellTransitions_interrupt( 2380): isOpenOrCloseMode: trueisInterruptedTask: true isSplitMode: false isTranssionLauncher: true
  07-02 17:30:43.601 D/ShellTransitions_interrupt( 2380): setupAnimHierarchy  ifNoReparentForInterrupt(info):  true ifMerge: false
  07-02 17:30:43.601 D/ShellTransitions_interrupt( 2380): isIconLaunchOpenOrClose mode: 4
  07-02 17:30:43.601 D/ShellTransitions_interrupt( 2380): isOpenOrCloseMode: trueisInterruptedTask: true isSplitMode: false isTranssionLauncher: true
  07-02 17:30:43.601 D/ShellTransitions_interrupt( 2380): isIconLaunchOpenOrClose mode: 4
  07-02 17:30:43.601 D/ShellTransitions_interrupt( 2380): isOpenOrCloseMode: trueisInterruptedTask: true isSplitMode: false isTranssionLauncher: true
  07-02 17:30:43.601 D/ShellTransitions_interrupt( 2380): setupAnimHierarchy  ifNoReparentForInterrupt(info):  true ifMerge: false
  07-02 17:30:43.601 D/ShellTransitions_interrupt( 2380): isIconLaunchOpenOrClose mode: 4
  07-02 17:30:43.601 D/ShellTransitions_interrupt( 2380): isOpenOrCloseMode: trueisInterruptedTask: true isSplitMode: false isTranssionLauncher: true
  07-02 17:30:43.601 V/WindowManagerShell( 2380):  try handler com.android.wm.shell.transition.DefaultMixedHandler@91c2c6c
  07-02 17:30:43.601 V/WindowManagerShell( 2380):  try handler com.android.wm.shell.keyguard.KeyguardTransitionHandler@e100235
  07-02 17:30:43.601 V/WindowManagerShell( 2380):  try handler com.android.wm.shell.pip.PipTransition@fb1ea43
  07-02 17:30:43.601 V/WindowManagerShell( 2380):  try handler com.android.wm.shell.activityembedding.ActivityEmbeddingController@6f358c0
  07-02 17:30:43.601 V/WindowManagerShell( 2380):  try handler com.android.wm.shell.recents.RecentsTransitionHandler@f2779f9
  07-02 17:30:43.601 V/ShellRecents( 2380): RecentsTransitionHandler.startAnimation: no controller found
  07-02 17:30:43.601 D/TranClassInfo(11190): instance successfully. com.transsion.hubcore.app.TranActivityThreadImpl@b234c75 from 
com.transsion.hubcore.app.ITranActivityThread
  07-02 17:30:43.601 V/WindowManagerShell( 2380):  try handler com.android.wm.shell.splitscreen.StageCoordinator@a8efd3e
  07-02 17:30:43.601 V/WindowManagerShell( 2380):  try handler com.android.wm.shell.transition.RemoteTransitionHandler@bfee79f
  07-02 17:30:43.601 V/WindowManagerShell( 2380): Transition doesn't have explicit remote, search filters for match for {id=1223 t=OPEN f=0x0 trk=0 
r=[0@Point(0, 0)] c=[{WCT{android.window.IWindowContainerToken$Stub$Proxy@fb8a6c7} m=OPEN f=NONE leash=Surface(name=Task=48210)/@0x93a86eb sb=Rect(0, 0 - 
1080, 2436) eb=Rect(0, 0 - 1080, 2436) mSimplifyStartAbsBounds=Rect(0, 0 - 0, 0) d=0 
taskParent=-1},{WCT{android.window.IWindowContainerToken$Stub$Proxy@959d4f4} m=TO_BACK f=SHOW_WALLPAPER leash=Surface(name=Task=1)/@0x7c93c48 sb=Rect(0, 0 
- 1080, 2436) eb=Rect(0, 0 - 1080, 2436) mSimplifyStartAbsBounds=Rect(0, 0 - 0, 0) d=0 taskParent=-1},{null m=CHANGE f=IS_WALLPAPER 
leash=Surface(name=WallpaperWindowToken{b14fd4c token=android.os.Binder@430597f})/@0x8bccae1 sb=Rect(0, 0 - 1080, 2436) eb=Rect(0, 0 - 1080, 2436) 
mSimplifyStartAbsBounds=Rect(0, 0 - 0, 0) d=0}]}
> 07-02 17:30:43.601 V/WindowManagerShell( 2380):  Delegate animation for (#1223) to null
  07-02 17:30:43.601 V/WindowManagerShell( 2380):  try handler com.android.wm.shell.transition.DefaultTransitionHandler@a1540ec
  07-02 17:30:43.601 V/WindowManagerShell( 2380): start default transition animation, info = {id=1223 t=OPEN f=0x0 trk=0 r=[0@Point(0, 0)] 
c=[{WCT{android.window.IWindowContainerToken$Stub$Proxy@fb8a6c7} m=OPEN f=NONE leash=Surface(name=Task=48210)/@0x93a86eb sb=Rect(0, 0 - 1080, 2436) 
eb=Rect(0, 0 - 1080, 2436) mSimplifyStartAbsBounds=Rect(0, 0 - 0, 0) d=0 taskParent=-1},{WCT{android.window.IWindowContainerToken$Stub$Proxy@959d4f4} 
m=TO_BACK f=SHOW_WALLPAPER leash=Surface(name=Task=1)/@0x7c93c48 sb=Rect(0, 0 - 1080, 2436) eb=Rect(0, 0 - 1080, 2436) mSimplifyStartAbsBounds=Rect(0, 0 - 
0, 0) d=0 taskParent=-1},{null m=CHANGE f=IS_WALLPAPER leash=Surface(name=WallpaperWindowToken{b14fd4c token=android.os.Binder@430597f})/@0x8bccae1 
sb=Rect(0, 0 - 1080, 2436) eb=Rect(0, 0 - 1080, 2436) mSimplifyStartAbsBounds=Rect(0, 0 - 0, 0) d=0}]}
  07-02 17:30:43.602 V/WindowManagerShell( 2380): loadAnimation: anim=android.view.animation.AnimationSet@e373692 animAttr=0x13 type=OPEN isEntrance=false
  07-02 17:30:43.603 V/WindowManagerShell( 2380): loadAnimation: anim=android.view.animation.AnimationSet@56af519 animAttr=0x12 type=OPEN isEntrance=true
  07-02 17:30:43.604 D/ShellTransitions_interrupt( 2380): dispatchTransition: consumed by com.android.wm.shell.transition.DefaultTransitionHandler@a1540ec
  07-02 17:30:43.604 V/WindowManagerShell( 2380):  animated by com.android.wm.shell.transition.DefaultTransitionHandler@a1540ec
  07-02 17:30:43.604 V/WindowManager( 1698):     info={id=1223 t=OPEN f=0x0 trk=0 r=[0@Point(0, 0)] c=[
> 07-02 17:30:43.604 V/WindowManager( 1698):         {WCT{RemoteToken{6d93bb7 Task{7832121 #48210 type=standard A=10509:com.erbete.customer}}} m=OPEN 
f=NONE leash=Surface(name=Task=48210)/@0xf4aba51 sb=Rect(0, 0 - 1080, 2436) eb=Rect(0, 0 - 1080, 2436) mSimplifyStartAbsBounds=Rect(0, 0 - 0, 0) d=0 
taskParent=-1},
> 07-02 17:30:43.604 V/WindowManager( 1698):         {WCT{RemoteToken{a4aa567 Task{e35342e #1 type=home}}} m=TO_BACK f=SHOW_WALLPAPER 
leash=Surface(name=Task=1)/@0x894e422 sb=Rect(0, 0 - 1080, 2436) eb=Rect(0, 0 - 1080, 2436) mSimplifyStartAbsBounds=Rect(0, 0 - 0, 0) d=0 taskParent=-1},
  07-02 17:30:43.604 V/WindowManager( 1698):         {null m=CHANGE f=IS_WALLPAPER leash=Surface(name=WallpaperWindowToken{b14fd4c 
token=android.os.Binder@430597f})/@0x186c404 sb=Rect(0, 0 - 1080, 2436) eb=Rect(0, 0 - 1080, 2436) mSimplifyStartAbsBounds=Rect(0, 0 - 0, 0) d=0}
  07-02 17:30:43.604 V/WindowManager( 1698):     ]}
> 07-02 17:30:43.612 D/WindowManager( 1698): updateSystemBarAttributes appearance:24, win appearance:24, opaqueAppearance:0, win:Window{20c12c7 u0 Splash 
Screen com.erbete.customer}, appearanceRegions=[AppearanceRegion{LIGHT_STATUS_BARS bounds=[0,0][1080,2436]}]
  07-02 17:30:43.617 V/ActivityManager( 1698): New death recipient com.android.server.am.ActivityManagerService$AppDeathRecipient@4f96289 for thread 
android.os.BinderProxy@92ae28e
  07-02 17:30:43.618 D/os.permission.PermissionInfo( 1698): checkPermission 10196:android.permission.INTERACT_ACROSS_USERS:true
  07-02 17:30:43.618 I/os.permission( 1698): Grant permission: android.permission.INTERACT_ACROSS_USERS to uid: 10196
> 07-02 17:30:43.620 I/ActivityTaskManager( 1698): this = Task{7832121 #48210 type=standard A=10509:com.erbete.customer} is in Transition
  07-02 17:30:43.623 W/UserManagerService( 1698): Requested status bar icon for non-badged user 0
  07-02 17:30:43.627 D/os.ActivityManagerServiceLice( 1698): make process active com.erbete.customer(11190)
  07-02 17:30:43.628 W/ActivityManager( 1698): pid 1698 system sent binder code 1 with flags 1 to frozen apps and got error -32
  07-02 17:30:43.631 D/os.permission.PermissionInfo( 1698): checkPermission 10196:android.permission.MANAGE_ACTIVITY_TASKS:true
  07-02 17:30:43.631 I/os.permission( 1698): Grant permission: android.permission.MANAGE_ACTIVITY_TASKS to uid: 10196
  07-02 17:30:43.633 D/ActivityTaskManager_Recents( 1698): 	excludeFromRecents=true, taskIndex = 10, isOnHomeDisplay: false, isAnimatingByRecents: false
  07-02 17:30:43.633 D/ActivityTaskManager_Recents( 1698): Skipping, not in visible range taskId: 36443
  07-02 17:30:43.638 W/DisplayManagerService( 1698): Failed to notify process 4859 that displays changed, assuming it died.
  07-02 17:30:43.638 W/DisplayManagerService( 1698): android.os.DeadObjectException
  07-02 17:30:43.638 W/DisplayManagerService( 1698): 	at android.os.BinderProxy.transactNative(Native Method)
  07-02 17:30:43.638 W/DisplayManagerService( 1698): 	at android.os.BinderProxy.transact(BinderProxy.java:686)
  07-02 17:30:43.638 W/DisplayManagerService( 1698): 	at 
android.hardware.display.IDisplayManagerCallback$Stub$Proxy.onDisplayEvent(IDisplayManagerCallback.java:119)
  07-02 17:30:43.638 W/DisplayManagerService( 1698): 	at 
com.android.server.display.DisplayManagerService$CallbackRecord.notifyDisplayEventAsync(DisplayManagerService.java:3840)
  07-02 17:30:43.638 W/DisplayManagerService( 1698): 	at 
com.android.server.display.DisplayManagerService$PendingCallback.sendPendingDisplayEvent(DisplayManagerService.java:3906)
  07-02 17:30:43.638 W/DisplayManagerService( 1698): 	at 
com.android.server.display.DisplayManagerService$UidImportanceListener.onUidImportance(DisplayManagerService.java:1102)
  07-02 17:30:43.638 W/DisplayManagerService( 1698): 	at android.app.ActivityManager$MyUidObserver.onUidStateChanged(ActivityManager.java:400)
  07-02 17:30:43.638 W/DisplayManagerService( 1698): 	at 
com.android.server.am.UidObserverController.dispatchUidsChangedForObserver(UidObserverController.java:414)
  07-02 17:30:43.638 W/DisplayManagerService( 1698): 	at com.android.server.am.UidObserverController.dispatchUidsChanged(UidObserverController.java:280)
  07-02 17:30:43.672 W/ActivityManager( 1698): Unbind failed: could not find connection for android.app.LoadedApk$ServiceDispatcher$InnerConnection@92d50fd
  07-02 17:30:43.672 E/JobScheduler.Concurrency( 1698): Error executing JobStatus{107496e androidx.work.systemjobscheduler:u0a121/6204 
@androidx.work.systemjobscheduler@com.google.android.calendar/androidx.work.impl.background.systemjob.SystemJobService u=0 s=10121 
TIME=-1h21m31s538ms:none READY}
  07-02 17:30:43.673 I/tranpm/ServicePolicy( 1698): isBlockHsB1 true
  07-02 17:30:43.673 I/tranpm/ServicePolicy( 1698): limitBindServiceLocked by hs&job - cold: callingPackage = android, targetPkg = com.talpa.hibrowser
  07-02 17:30:43.675 W/ActivityManager( 1698): Unbind failed: could not find connection for android.app.LoadedApk$ServiceDispatcher$InnerConnection@7a6c1f2
  07-02 17:30:43.678 E/JobScheduler.Concurrency( 1698): Error executing JobStatus{48d18d6 androidx.work.systemjobscheduler:u0a206/1543 
@androidx.work.systemjobscheduler@com.talpa.hibrowser/androidx.work.impl.background.systemjob.SystemJobService u=0 s=10206 TIME=-2h35m23s652ms:none NET 
READY}
  07-02 17:30:43.707 D/TranAppBrightnessChangeController( 1698): [handleMessage] msg type: 1001 isCloudEnabled: true
  07-02 17:30:43.712 D/WindowManager( 1698): getTopPackages# topPackages = []
> 07-02 17:30:43.712 D/TranAppBrightnessChangeController( 1698): [onForegroundAppchange] ForegroundPackage: com.erbete.customer splitScreen: false 
multiWindow: false mIsPinned:false
  07-02 17:30:43.898 D/ShellTransitions_interrupt( 2380): finish handler: com.android.wm.shell.transition.DefaultTransitionHandler@a1540ec
  07-02 17:30:43.898 D/ShellTransitions_interrupt( 2380): onFinish: isLauncherReUseLeash = false
> 07-02 17:30:43.898 V/WindowManagerShell( 2380): Transition animation finished (aborted=false), notifying core (#1223) android.os.BinderProxy@b4a70b@0
  07-02 17:30:43.899 D/ShellTransitions_interrupt( 2380): onFinish finish apply
  07-02 17:30:43.900 D/WindowOrganizerController( 1698): WCT isInterrupt: false
  07-02 17:30:43.901 I/WindowManager( 1698):   isAnimating=false  okToAnimate=true  win=Window{ac8a64c u0 
com.transsion.XOSLauncher/com.android.launcher3.uioverrides.QuickstepLauncher}
  07-02 17:30:43.901 I/WindowManager( 1698):   isAnimating=false  okToAnimate=true  win=Window{56ebb47 u0 ZeroScreen}
  07-02 17:30:43.902 D/MagellanHandle( 1698): updateRefreshRateForSceneVsyncs what = 21
  07-02 17:30:43.902 D/ShellEventHandler( 2380): onTransitionFinished OPEN token=android.os.BinderProxy@b4a70b
  07-02 17:30:43.902 V/WindowManagerShell( 2380): Track 0 became idle
  07-02 17:30:43.902 V/WindowManagerShell( 2380): All active transition animations finished
> 07-02 17:30:43.903 V/WindowManager( 1698): Finish Transition (#1223): created at 07-02 17:30:43.490 collect-started=0.021ms request-sent=10.345ms 
started=17.083ms ready=94.907ms sent=102.665ms finished=410.486ms
  07-02 17:30:43.904 W/UserManagerService( 1698): Requested status bar icon for non-badged user 0
  07-02 17:30:43.905 W/UserManagerService( 1698): Requested status bar icon for non-badged user 0
> 07-02 17:30:43.923 I/DisplayDeviceRepository( 1698): Display device changed: DisplayDeviceInfo{"Layar Bawaan": uniqueId="local:0", 1080 x 2436, modeId 
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
  07-02 17:30:43.926 I/Griffin/DeviceState( 1698): virtualDisplayPackageName :{com.android.shell=2000}
  07-02 17:30:44.538 I/Hiber/appStateMachine( 1698): uid:10244, pkg=com.rlk.weathers  can't transition from R to F ,importantcase is : 
  07-02 17:30:44.950 D/MbrainDebugManagerImpl(11190): getService failed
  07-02 17:30:45.016 D/TranMemcgComponentImpl( 1698): write pid:11190 (com.erbete.customer)  to ljj
  07-02 17:30:45.016 D/TranMemcgComponentImpl( 1698): writeFgPid time=0
  07-02 17:30:45.018 D/os.fingerprint( 1698): onRealStartActivityLocked next:ActivityRecord{28ce32b u0 com.erbete.customer/.MainActivity t48210} 
isKeyguardShowing:false
  07-02 17:30:45.018 D/os.fingerprint( 1698): activityComponent = ComponentInfo{com.erbete.customer/com.erbete.customer.MainActivity} inMultiWindow = false
  07-02 17:30:45.019 D/os.fingerprint( 1698): onUpdateFocusedApp oldPackageName:com.transsion.XOSLauncher 
oldComponent:ComponentInfo{com.transsion.XOSLauncher/com.android.launcher3.uioverrides.QuickstepLauncher} newPackageName:com.erbete.customer 
newComponent:ComponentInfo{com.erbete.customer/com.erbete.customer.MainActivity} mFm :android.hardware.fingerprint.FingerprintManager@9e3d33b
  07-02 17:30:45.019 I/TranSCSourceConnectManagerImpl( 1698): hookDisplayResumedActivityChanged displayId: 0 packageName: com.erbete.customer
  07-02 17:30:45.019 D/TranMemcgComponentImpl( 1698): diedProcNameList=[]
  07-02 17:30:45.019 D/tranpm/BehaviorManager( 1698):  onAppLaunch nextPackName = com.erbete.customer currPackName = com.transsion.XOSLauncher
  07-02 17:30:45.019 D/TranMemcgComponentImpl( 1698): getBufferSize=3; 3
  07-02 17:30:45.019 D/TranMemcgComponentImpl( 1698): buffer not full, no need release
  07-02 17:30:45.022 D/MagellanHandle( 1698): updateRefreshRateForSceneVsyncs what = 23
> 07-02 17:30:45.022 D/TransitionController( 1698): mCollectingTransition = null can't setReady, wc = Display{#0 state=ON size=1080x2436 ROTATION_0} ready 
= true
> 07-02 17:30:45.022 D/TransitionController( 1698): mCollectingTransition = null can't setReady, wc = Display{#121 state=ON size=376x848 ROTATION_0} ready 
= true
  07-02 17:30:45.022 D/os.fingerprint( 1698): onActivityResume next:ActivityRecord{28ce32b u0 com.erbete.customer/.MainActivity t48210}
  07-02 17:30:45.022 D/os.fingerprint( 1698): activityComponent = ComponentInfo{com.erbete.customer/com.erbete.customer.MainActivity} inMultiWindow = false
  07-02 17:30:45.023 D/MBrainLocalService( 1698): isVendorFreezeConditionPass is false
  07-02 17:30:45.023 E/MBrainLocalService( 1698): notifyAppSwitch failed
  07-02 17:30:45.026 D/PowerManagerService( 1698): onAppLaunch: currentPackage=com.transsion.XOSLauncher, nextPackage=com.erbete.customer.
> 07-02 17:30:45.026 D/ActivityTaskManager( 1698): TaskProcess setRealTask mRealTask#=Task{7832121 #48210 type=standard A=10509:com.erbete.customer}
  07-02 17:30:45.026 D/ActivityTaskManager( 1698): TaskProcess markTaskProcess mRootProcess= 11190
  07-02 17:30:45.026 I/TranTp/TranTpSwitchManagerImpl( 1698): Set [com.erbete.customer] is tp rate as default.
  07-02 17:30:45.026 D/TranTp/TranTpSwitchManagerImpl( 1698): sendCommand: rate=0, cmd=echo 0 > /proc/report_rate_switch.
  07-02 17:30:45.036 D/TranAppm/SystemMonitor( 1698): the app is not in the whitelist 
  07-02 17:30:45.157 D/TranClassInfo(11190): instance successfully. com.transsion.hubcore.internal.TranInternalViewImpl@7708eb3 from 
com.transsion.hubcore.internal.ITranInternalView
  07-02 17:30:45.185 D/os.WindowManagerServiceLice( 1698): received send OSMessage 110001 request from 11190 to [-1]
  07-02 17:30:45.185 D/os.CommonLice( 1698): onOSServerMessage 110001
  07-02 17:30:45.222 D/tranpm/BehaviorManager( 1698): onMemPressureChange : level 0
  07-02 17:30:45.527 D/BatteryService( 1698): widetemperaturebatteryburn check uevent: {SUBSYSTEM=misc, MAJOR=10, SEQNUM=18110, ACTION=change, 
DEVNAME=eara-io, boost=1, MINOR=117, DEVPATH=/devices/virtual/misc/eara-io}
  07-02 17:30:45.529 D/BatteryService( 1698): widetemperaturebatteryburn PORT_STATE no availd
  07-02 17:30:45.546 D/tranpm/BehaviorManager( 1698): onMemPressureChange : level 1
  07-02 17:30:45.654 D/tranpm/BehaviorManager( 1698): onMemPressureChange : level 2
  07-02 17:30:45.772 I/AlarmManager( 1698): going to acquire wakelock now
  07-02 17:30:45.778 W/JobScheduler.Concurrency( 1698): Had fewer than 16 in existence
  07-02 17:30:45.779 W/JobScheduler.Concurrency( 1698): Had fewer than 16 in existence
  07-02 17:30:45.780 W/JobScheduler.Concurrency( 1698): Had fewer than 16 in existence
  07-02 17:30:45.780 W/JobScheduler.Concurrency( 1698): Had fewer than 16 in existence
  07-02 17:30:45.781 W/JobScheduler.Concurrency( 1698): Had fewer than 16 in existence
  07-02 17:30:46.649 I/TranThermalBacklightCtrl( 1698): mParamAPTempHigh[2]=49.0, mParamAPTempLow[2]=47.0, mParamBrightnessMax[2]=0.5, 
mParamLuxLimit[2]=2000.0
  07-02 17:30:46.735 D/tranpm/BehaviorManager( 1698): onMemPressureChange : level 2
  07-02 17:30:46.777 I/AlarmManager( 1698): going to release wakelock now
  07-02 17:30:46.820 D/CoreBackPreview( 1698): Window{4b185ef u0 com.erbete.customer/com.erbete.customer.MainActivity}: Setting back callback 
OnBackInvokedCallbackInfo{mCallback=android.window.IOnBackInvokedCallback$Stub$Proxy@c965dda, mPriority=-1, mIsAnimationCallback=false}
  07-02 17:30:46.821 D/TranAppBrightnessChangeController( 1698): [handleMessage] msg type: 1001 isCloudEnabled: true
  07-02 17:30:46.822 D/WindowManager( 1698): getTopPackages# topPackages = []
  07-02 17:30:46.858 D/WindowManager( 1698): currentFocusId -1 newFocusId: 0 currentFocusIsMultiWindow: false newFocusIsMultiWindow: false
  07-02 17:30:46.858 W/WindowManager( 1698): Changing focus from null to Window{4b185ef u0 com.erbete.customer/com.erbete.customer.MainActivity} 
displayId=0 Callers=com.android.server.wm.RootWindowContainer.updateFocusedWindowLocked:528 
com.android.server.wm.WindowManagerService.updateFocusedWindowLocked:6849 com.android.server.wm.WindowManagerService.relayoutWindowInner:2856 
com.android.server.wm.WindowManagerService.relayoutWindow:2515 
> 07-02 17:30:46.862 D/WindowManager( 1698): updateSystemBarAttributes appearance:528, win appearance:528, opaqueAppearance:0, win:Window{4b185ef u0 
com.erbete.customer/com.erbete.customer.MainActivity}, appearanceRegions=[AppearanceRegion{LIGHT_STATUS_BARS bounds=[0,0][1080,2436]}]
  07-02 17:30:46.862 D/TranDisplayJamMonitor( 1698): starting window overlay on focus window. WindowInfo:Window{20c12c7 u0 Splash Screen 
com.erbete.customer}
  07-02 17:30:46.862 D/TranDisplayJamMonitor( 1698): checkExceptionWindowResult = 1040
  07-02 17:30:46.862 D/TranDisplayJamMonitor( 1698): check display window jam detection:Window{4b185ef u0 
com.erbete.customer/com.erbete.customer.MainActivity}
  07-02 17:30:46.862 D/TranDisplayJamMonitor( 1698): remove screen rotation animation detection
  07-02 17:30:46.862 I/WindowManager( 1698): Relayout Window{4b185ef u0 com.erbete.customer/com.erbete.customer.MainActivity}: oldVis=4 newVis=0 
focusMayChange = true requestedWidth = 1080 requestedHeight = 2436 outFrames = ClientWindowFrames{frame=[0,0][1080,2436] display=[0,0][1080,2436] 
parentFrame=[0,0][0,0]} outSurfaceControl = Surface(name=com.erbete.customer/com.erbete.customer.MainActivity)/@0xf613783
  07-02 17:30:47.071 D/CoreBackPreview( 1698): Window{4b185ef u0 com.erbete.customer/com.erbete.customer.MainActivity}: Setting back callback 
OnBackInvokedCallbackInfo{mCallback=android.window.IOnBackInvokedCallback$Stub$Proxy@da0bd00, mPriority=0, mIsAnimationCallback=true}
  07-02 17:30:47.081 D/CoreBackPreview( 1698): Window{4b185ef u0 com.erbete.customer/com.erbete.customer.MainActivity}: Setting back callback 
OnBackInvokedCallbackInfo{mCallback=android.window.IOnBackInvokedCallback$Stub$Proxy@506a939, mPriority=-1, mIsAnimationCallback=false}
  07-02 17:30:47.133 E/ApplicationHelper( 1698): Fail to get PackageManager
  07-02 17:30:47.178 I/keystore2(  669): system/security/keystore2/src/security_level.rs:235 - create_operation start
  07-02 17:30:47.178 I/keystore2(  669): system/security/keystore2/src/security_level.rs:237 - caller_pid=11190
  07-02 17:30:47.178 I/keystore2(  669): system/security/keystore2/src/security_level.rs:238 - caller_uid=10509
  07-02 17:30:47.178 I/keystore2(  669): system/security/keystore2/src/security_level.rs:239 - forced=false
  07-02 17:30:47.178 I/keystore2(  669): system/security/keystore2/src/security_level.rs:240 - key.domain=r#KEY_ID
  07-02 17:30:47.178 I/keystore2(  669): system/security/keystore2/src/security_level.rs:241 - key.alias=None
  07-02 17:30:47.178 I/keystore2(  669): system/security/keystore2/src/security_level.rs:277 - with_try_import start
  07-02 17:30:47.179 I/keystore2(  669): system/security/keystore2/src/security_level.rs:299 - with_try_import end
  07-02 17:30:47.179 I/keystore2(  669): system/security/keystore2/src/security_level.rs:333 - authorize_create start
  07-02 17:30:47.179 I/keystore2(  669): system/security/keystore2/src/security_level.rs:344 - authorize_create end
  07-02 17:30:48.570 E/ApplicationHelper( 1698): Fail to get PackageManager
  07-02 17:30:48.571 D/Hiber/JobExtImpl( 1698): proxyJobs leave, uid=10204, pkg=com.openai.chatgpt which=2
  07-02 17:30:48.571 I/Hiber/hiber( 1698): proxy alarm (uid=10204, pkgName=com.openai.chatgpt)
  07-02 17:30:48.571 I/Hiber/proxyManager( 1698): p_alarm: uid=10204, pkgName=com.openai.chatgpt
  07-02 17:30:48.571 D/Hiber/alarmManagerServiceExtImpl( 1698): proxyAlarms leave, uid=10204, packageName=com.openai.chatgpt
  07-02 17:30:48.571 I/Hiber/proxyManager( 1698): p_sensor: uid=10204, pkgName=com.openai.chatgpt
  07-02 17:30:48.608 I/mtkpower_client( 1080): perf_lock_rel, hdl:55338, tid:1080
  07-02 17:30:48.609 I/libPowerHal(  970): [PD] fpsgo update cmd:1408300 param:20
> 07-02 17:30:48.612 D/WindowManager( 1698): updateSystemBarAttributes appearance:24, win appearance:8, opaqueAppearance:0, win:Window{4b185ef u0 
com.erbete.customer/com.erbete.customer.MainActivity}, appearanceRegions=[AppearanceRegion{LIGHT_STATUS_BARS bounds=[0,0][1080,2436]}]
  07-02 17:30:48.614 D/FdLeakLice(11190): FdLeakCheck app is not systemapp!!!
  07-02 17:30:48.614 I/StatusBarModePerDisplayRepository( 2380): isInFullscreenMode:false com.erbete.customer
  07-02 17:30:48.616 W/native  ( 5782): W0000 00:00:1782988248.616748    5913 lag_detector.cc:58] Pipeline lagging by 955.226553ms. Continue processing 
samples.
  07-02 17:30:48.624 D/ConnectivityService( 1698): requestNetwork for uid/pid:10509/11190 activeRequest: null callbackRequest: 20939 [NetworkRequest [ 
REQUEST id=20940, [ Capabilities: INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED&NOT_BANDWIDTH_CONSTRAINED Uid: 10509 RequestorUid: 10509 RequestorPkg: 
com.erbete.customer UnderlyingNetworks: Null] ]] callback flags: 0 order: 2147483647 isUidTracked: false declaredMethods: AVAIL|BLK
  07-02 17:30:48.629 D/WifiNetworkFactory( 1698): got request NetworkRequest [ REQUEST id=20940, [ Capabilities: 
INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED&NOT_BANDWIDTH_CONSTRAINED Uid: 10509 RequestorUid: 10509 RequestorPkg: com.erbete.customer 
UnderlyingNetworks: Null] ]
  07-02 17:30:48.629 V/WifiNetworkFactory( 1698): Accepted network request NetworkRequest [ REQUEST id=20940, [ Capabilities: 
INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED&NOT_BANDWIDTH_CONSTRAINED Uid: 10509 RequestorUid: 10509 RequestorPkg: com.erbete.customer 
UnderlyingNetworks: Null] ]
  07-02 17:30:48.629 D/UntrustedWifiNetworkFactory( 1698): got request NetworkRequest [ REQUEST id=20940, [ Capabilities: 
INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED&NOT_BANDWIDTH_CONSTRAINED Uid: 10509 RequestorUid: 10509 RequestorPkg: com.erbete.customer 
UnderlyingNetworks: Null] ]
  07-02 17:30:48.629 D/OemPaidWifiNetworkFactory( 1698): got request NetworkRequest [ REQUEST id=20940, [ Capabilities: 
INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED&NOT_BANDWIDTH_CONSTRAINED Uid: 10509 RequestorUid: 10509 RequestorPkg: com.erbete.customer 
UnderlyingNetworks: Null] ]
  07-02 17:30:48.630 D/MultiInternetWifiNetworkFactory( 1698): got request NetworkRequest [ REQUEST id=20940, [ Capabilities: 
INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VCN_MANAGED&NOT_BANDWIDTH_CONSTRAINED Uid: 10509 RequestorUid: 10509 RequestorPkg: com.erbete.customer 
UnderlyingNetworks: Null] ]
  07-02 17:30:48.630 D/ConnectivityService( 1698): NetReassign [20940 : null ΓåÆ 133] [c 1] [a 1] [i 3]
  07-02 17:30:48.641 I/mtkpower_client( 1080): perf_lock_acq, hdl:0, dur:30000, num:2, tid:1080
  07-02 17:30:48.641 I/mtkpower_client( 1080): ret_hdl:55339
  07-02 17:30:48.657 I/eara_io@boost( 1347): [eara_io_boost] eara_io_boost 0 , ta 0
> 07-02 17:30:48.659 D/BLASTBufferQueue(11190): [VRI[MainActivity]#0](f:0,a:1) acquireNextBufferLocked size=1080x2436 mFrameNumber=1 applyTransaction=true 
mTimestamp=161829792106184(auto) mPendingTransactions.size=0 graphicBufferId=48060684042261 transform=0
  07-02 17:30:48.661 D/WindowManager( 1698): System monitor finishDrawingWindow w: Window{4b185ef u0 
com.erbete.customer/com.erbete.customer.MainActivity}; mDrawState = DRAW_PENDING
  07-02 17:30:48.676 V/ActivityTaskManager( 1698): Schedule remove starting ActivityRecord{28ce32b u0 com.erbete.customer/.MainActivity t48210} 
startingWindow=Window{20c12c7 u0 Splash Screen com.erbete.customer} animate=true Callers=com.android.server.wm.ActivityRecord.removeStartingWindow:3469 
com.android.server.wm.ActivityRecord.onFirstWindowDrawn:7830 com.android.server.wm.WindowState.performShowLocked:4877 
com.android.server.wm.WindowStateAnimator.commitFinishDrawingLocked:289 com.android.server.wm.DisplayContent.lambda$new$8:1081 
> 07-02 17:30:48.677 I/BufferQueueDebug( 1012): [Surface(name=4b185ef com.erbete.customer/com.erbete.customer.MainActivity)/@0xe1bc706 - animation-leash 
of starting_reveal#19425](this:0xb40000731f61af98,id:-1,api:0,p:-1,c:-1) BufferQueue core=(1012:/system/bin/surfaceflinger)
  07-02 17:30:48.681 D/uas-service( 1219): set scene=0x80000001 success
  07-02 17:30:48.682 D/tranpm/BehaviorManager( 1698): onMemPressureChange : level 0
  07-02 17:30:48.686 I/SmartPanelService( 4503): onWindowsDrawn pkgName: com.erbete.customer, className: com.erbete.customer.MainActivity launchState=1 
windowsDrawnDelayMs =5201
  07-02 17:30:48.687 I/SmartPanelRepository( 4503): hasLoadData true  data size = 12
  07-02 17:30:48.688 D/SceneController( 4503): checkCanShow canShow: true  changed false 
  07-02 17:30:48.689 E/ApplicationHelper( 1698): Fail to get PackageManager
  07-02 17:30:48.691 D/View    ( 2380): [Warning] assignParent to null: this = android.widget.FrameLayout{2e795b4 G.E...... ......ID 0,0-1080,2436}
> 07-02 17:30:48.692 I/_T_AppBehavior( 1698): APP_START_OCCURRED (pid:11190, packageName:com.erbete.customer, transitionType:7, 
launchedActivityName:com.erbete.customer.MainActivity, callerPackage:com.android.shell, currentTransitionDelayMs:119, startingWindowDelayMs:103, 
bindApplicationDelayMs:148, windowsDrawnDelayMs:5201,compilationReason:1, compilationFilter:12 )
  07-02 17:30:48.694 I/TranSuccCrashMgr( 1698): Post key event: type=0, event=wm_activity_launch_time0,com.erbete.customer/.MainActivity,5201, ext=null
  07-02 17:30:48.695 I/ActivityTaskManager( 1698): Displayed com.erbete.customer/.MainActivity for user 0: +5s201ms
  07-02 17:30:48.698 W/TranPerformanceAfterSaleHooker( 1698): su=={"par":{"dte":"2026-07-02 17:30:48:698", "qg":"com.erbete.customer",  
"act":"com.erbete.customer.MainActivity", "time":5201}}
  07-02 17:30:48.700 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.026165,0.000065, totalTime 0.026231 > logTimeout 
0.022000 TIMEOUT!!
> 07-02 17:30:48.707 I/DisplayDeviceRepository( 1698): Display device changed: DisplayDeviceInfo{"Layar Bawaan": uniqueId="local:0", 1080 x 2436, modeId 
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
  07-02 17:30:48.711 I/Griffin/DeviceState( 1698): virtualDisplayPackageName :{com.android.shell=2000}
  07-02 17:30:48.711 W/hwcomposer(  935): [DRMDEV] paramIsSame(), id 4359, w 1080/1080, h 2436/2436, pitch 1088/1088, format 0x2/0x1, secure 0/0  
  07-02 17:30:48.715 I/mtkpower@impl(  970): [powerd_req] TIMER_MSG_PERF_LOCK_TIMEOUT hdl:55334
  07-02 17:30:48.716 D/TranAppBrightnessChangeController( 1698): [handleMessage] msg type: 1002 isCloudEnabled: true
  07-02 17:30:48.740 I/WindowManager( 1698):   isAnimating=false  okToAnimate=true  win=Window{20c12c7 u0 Splash Screen com.erbete.customer}
> 07-02 17:30:48.756 I/BufferQueueDebug( 1012): [Surface(name=20c12c7 Splash Screen com.erbete.customer)/@0x880fcea - animation-leash of 
window_animation#19426](this:0xb40000731f64e3b8,id:-1,api:0,p:-1,c:-1) BufferQueue core=(1012:/system/bin/surfaceflinger)
  07-02 17:30:48.757 I/eara_io@eval( 1347): [eara_io_eval] r2 46 , r 419 , w2 0 , w 0 , w+r 419 , w2+r2 46 , w3+r3 334
  07-02 17:30:48.757 I/eara_io@boost( 1347): [eara_io_boost] eara_io_boost 2 , ta 70
  07-02 17:30:48.757 I/mtkpower_client( 1347): perf_lock_acq, hdl:55335, dur:500, num:10, tid:19242
  07-02 17:30:48.763 I/mtkpower_client( 1347): ret_hdl:55340
> 07-02 17:30:48.771 D/WindowManager( 1698): updateSystemBarAttributes appearance:8, win appearance:8, opaqueAppearance:0, win:Window{4b185ef u0 
com.erbete.customer/com.erbete.customer.MainActivity}, appearanceRegions=[AppearanceRegion{LIGHT_STATUS_BARS bounds=[0,0][1080,2436]}]
  07-02 17:30:48.772 I/StatusBarModePerDisplayRepository( 2380): isInFullscreenMode:false com.erbete.customer
> 07-02 17:30:48.776 D/BLASTBufferQueue( 2380): [VRI[customer]#524](f:0,a:1) destructor()
> 07-02 17:30:48.776 D/BufferQueueConsumer( 2380): [VRI[customer]#524(BLAST Consumer)524](id:94c0000021a,api:0,p:-1,c:2380) disconnect
  07-02 17:30:48.778 W/WindowOnBackDispatcher( 2380): sendCancelIfRunning: isInProgress=false 
callback=android.view.ViewRootImpl$$ExternalSyntheticLambda12@813192e
  07-02 17:30:48.780 D/uas-service( 1219): thread(pid=1835) ux_exact_android.anim.lf is uxtag 0x100420 ref 0x1
  07-02 17:30:48.780 D/CoreBackPreview( 1698): Window{20c12c7 u0 Splash Screen com.erbete.customer EXITING}: Setting back callback null
  07-02 17:30:48.780 I/WindowManager( 1698):   onAnimationFinished on win=Window{4b185ef u0 com.erbete.customer/com.erbete.customer.MainActivity}
  07-02 17:30:48.782 W/InputManager-JNI( 1698): Input channel object '20c12c7 Splash Screen com.erbete.customer (client)' was disposed without first being 
removed with the input manager!
  07-02 17:30:48.782 I/mtkpower_client( 1698): perf_cus_lock_hint hint:101, dur:150, pid:1698
  07-02 17:30:48.783 D/AppFlingMode(  970): [CheckAppFlingHint] 101 com.erbete.customer -1
  07-02 17:30:48.785 I/mtkpower_client( 1698): perf_cus_lock_hint, ret_hdl:55341
  07-02 17:30:48.785 I/PowerHalMgrImpl( 1698): hdl:55341, pid:1698 
> 07-02 17:30:48.785 I/PowerHalWrapper( 1698): amsBoostNotify pid:2371,activity:com.android.launcher3.uioverrides.QuickstepLauncher, 
package:com.transsion.XOSLauncher, mProcessCreatePackcom.erbete.customer 
  07-02 17:30:48.785 I/PowerHalWrapper( 1698): state: 0 
  07-02 17:30:48.787 I/libPowerHal(  970): [setGPUFreq] MTKPOWER_HINT_LAUNCHER_ANIMA user set gpu freq min:0, max:-1
  07-02 17:30:48.787 I/libPowerHal(  970): MTKPOWER_HINT_LAUNCHER_ANIMA: set gpu opp level max: 0
  07-02 17:30:48.794 I/libPowerHal(  970): [setGPUFreq] Soft min/max = (0, 0); Hard min/max = (44, 0)
  07-02 17:30:48.794 I/libPowerHal(  970): [setGPUFreq] final min/max = (0, 0)
  07-02 17:30:48.794 I/libPowerHal(  970): MTKPOWER_HINT_LAUNCHER_ANIMA: set gpu opp level: 0
  07-02 17:30:48.795 I/libPowerHal(  970): MTKPOWER_HINT_LAUNCHER_ANIMA: set gpu opp level max: 0
  07-02 17:30:48.795 I/libPowerHal(  970): [setClusterHardFreq] MTKPOWER_HINT_LAUNCHER_ANIMA: hard userlimit set cpu freq: -1 -1 -1 -1
  07-02 17:30:48.795 I/libPowerHal(  970): [thermal ux] update cluster0 to freqToSet:2000000 maxToSet:2000000
  07-02 17:30:48.796 I/mtkpower_client( 1698): [PowerHal_Wrap_notifyAppState] 
com.transsion.XOSLauncher/com.android.launcher3.uioverrides.QuickstepLauncher pid=2371 activityId:4253868 state:0
  07-02 17:30:48.797 I/mtkpower_client( 1698): [Legacy][PowerHal_Wrap_notifyAppState] 
com.transsion.XOSLauncher/com.android.launcher3.uioverrides.QuickstepLauncher pid=2371 state:4253868
  07-02 17:30:48.797 I/libPowerHal(  970): [thermal ux] update cluster1 to freqToSet:2200000 maxToSet:2200000
  07-02 17:30:48.797 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.022877,0.000054, totalTime 0.022931 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:30:48.803 I/libPowerHal(  970): [setClusterFreq] MTKPOWER_HINT_LAUNCHER_ANIMA: sysfs_freq set cpu freq: 2000000 -1 2200000 -1 
  07-02 17:30:48.804 I/libPowerHal(  970): [perfNotifyAppState] pack:com.transsion.XOSLauncher, act:com.android.launcher3.uioverrides.QuickstepLauncher, 
state:0, pid:2371, uid:10196, fps:-1
  07-02 17:30:48.810 I/PowerHalWrapper( 1698): amsBoostNotify AMS_BOOST_PROCESS_CREATE_BOOST:true 
  07-02 17:30:48.810 D/MagellanHandle( 1698): updateRefreshRateForSceneVsyncs what = 23
  07-02 17:30:48.811 I/ScenesManager( 4503): put createTaskId com.erbete.customer48210
  07-02 17:30:48.815 I/BaseDepthController( 2371): 	mSurface: null
  07-02 17:30:48.816 I/ImeTracker( 1698): com.erbete.customer:6e0e8b8: onRequestHide at ORIGIN_SERVER reason HIDE_UNSPECIFIED_WINDOW fromUser false
  07-02 17:30:48.817 I/ImeTracker( 1698): com.erbete.customer:6e0e8b8: onCancelled at PHASE_SERVER_SHOULD_HIDE
  07-02 17:30:48.818 D/TranWindowManagerServiceImpl( 1698): hookIMEVisibleChanged(), show:false
  07-02 17:30:48.819 I/TranMultiWindowManagerComponentImpl( 1698): hookInputMethodShown inputShown: false, connected:false, unbd:false
  07-02 17:30:48.819 V/WallpaperService( 2536): wallpaperSpringToDimming dimming: 0.0
  07-02 17:30:48.820 I/TranSCSourceConnectManagerImpl( 1698): hookInputMethodShown inputShown: false
  07-02 17:30:48.821 D/TranSecureKeyboardManagerImpl( 1698): hookInputShowFromIMMS inputShow= false , mVisible = false , mNeedShow = false
> 07-02 17:30:48.821 D/THubApi ( 4503): getWindowingMode TaskInfo{userId=0 taskId=48210 displayId=0 isRunning=true baseIntent=Intent { 
act=android.intent.action.MAIN cat=[android.intent.category.LAUNCHER] flg=0x10200000 cmp=com.erbete.customer/.MainActivity } 
baseActivity=ComponentInfo{com.erbete.customer/com.erbete.customer.MainActivity} 
topActivity=ComponentInfo{com.erbete.customer/com.erbete.customer.MainActivity} origActivity=null 
realActivity=ComponentInfo{com.erbete.customer/com.erbete.customer.MainActivity} numActivities=1 lastActiveTime=178830300 supportsMultiWindow=true 
resizeMode=1 isResizeable=true minWidth=-1 minHeight=-1 defaultMinSize=110 token=WCT{android.window.IWindowContainerToken$Stub$Proxy@8e88c9} 
topActivityType=1 pictureInPictureParams=null shouldDockBigOverlays=false launchIntoPipHostTaskId=-1 lastParentTaskIdBeforePip=-1 
displayCutoutSafeInsets=null topActivityInfo=ActivityInfo{ed3abce com.erbete.customer.MainActivity} launchCookies=[] positionInParent=Point(0, 0) 
parentTaskId=-1 isFocused=true isVisible=true isVisibleRequested=true isSleeping=false locusId=null displayAreaFeatureId=1 isTopActivityTransparent=false 
appCompatTaskInfo=AppCompatTaskInfo { topActivityInSizeCompat=false topActivityEligibleForLetterboxEducation= falseisLetterboxEducationEnabled= false 
isLetterboxDoubleTapEnabled= false topActivityEligibleForUserAspectRatioButton= false topActivityBoundsLetterboxed= false isFromLetterboxDoubleTap= false 
topActivityLetterboxVerticalPosition= -1 topActivityLetterboxHorizontalPosition= -1 topActivityLetterboxWidth=1080 topActivityLetterboxHeight=2436 
isUserFullscreenOverrideEnabled=false isSystemFullscreenOverrideEnabled=false cameraCompatTaskInfo=CameraCompatTaskInfo { cameraCompatControlState=hidden 
freeformCameraCompatMode=inactive}}}
> 07-02 17:30:48.824 I/input_debug( 1698): package: com.erbete.customer mNeedShowSafeInput: false inputType: 0 methodMap: true isKeyguardShowing: false 
enable: 0 isSplitScreen: false
  07-02 17:30:48.824 I/THubApi ( 4503): isTheMainScreen classname: com.erbete.customer.MainActivity  pkg:com.erbete.customer
  07-02 17:30:48.827 D/TranActivityTaskManagerService( 1698): isTheMainScreen, displayId = 0, classname = com.erbete.customer.MainActivity
> 07-02 17:30:48.829 D/THubApi ( 4503): getUserId TaskInfo{userId=0 taskId=48210 displayId=0 isRunning=true baseIntent=Intent { 
act=android.intent.action.MAIN cat=[android.intent.category.LAUNCHER] flg=0x10200000 cmp=com.erbete.customer/.MainActivity } 
baseActivity=ComponentInfo{com.erbete.customer/com.erbete.customer.MainActivity} 
topActivity=ComponentInfo{com.erbete.customer/com.erbete.customer.MainActivity} origActivity=null 
realActivity=ComponentInfo{com.erbete.customer/com.erbete.customer.MainActivity} numActivities=1 lastActiveTime=178830300 supportsMultiWindow=true 
resizeMode=1 isResizeable=true minWidth=-1 minHeight=-1 defaultMinSize=110 token=WCT{android.window.IWindowContainerToken$Stub$Proxy@8e88c9} 
topActivityType=1 pictureInPictureParams=null shouldDockBigOverlays=false launchIntoPipHostTaskId=-1 lastParentTaskIdBeforePip=-1 
displayCutoutSafeInsets=null topActivityInfo=ActivityInfo{ed3abce com.erbete.customer.MainActivity} launchCookies=[] positionInParent=Point(0, 0) 
parentTaskId=-1 isFocused=true isVisible=true isVisibleRequested=true isSleeping=false locusId=null displayAreaFeatureId=1 isTopActivityTransparent=false 
appCompatTaskInfo=AppCompatTaskInfo { topActivityInSizeCompat=false topActivityEligibleForLetterboxEducation= falseisLetterboxEducationEnabled= false 
isLetterboxDoubleTapEnabled= false topActivityEligibleForUserAspectRatioButton= false topActivityBoundsLetterboxed= false isFromLetterboxDoubleTap= false 
topActivityLetterboxVerticalPosition= -1 topActivityLetterboxHorizontalPosition= -1 topActivityLetterboxWidth=1080 topActivityLetterboxHeight=2436 
isUserFullscreenOverrideEnabled=false isSystemFullscreenOverrideEnabled=false cameraCompatTaskInfo=CameraCompatTaskInfo { cameraCompatControlState=hidden 
freeformCameraCompatMode=inactive}}}
  07-02 17:30:48.829 D/InputEventReceiver( 6406): Input log is disabled in InputEventReceiver.
  07-02 17:30:48.832 W/TrWorkSpace( 2371): setAlpha: 1.0
  07-02 17:30:48.832 I/TrFolderCore( 2371): folderToState changed:[Normal] ====> Normal, false,false
  07-02 17:30:48.832 I/TrGaussianBlurStateCont( 2371): setState toState: Normal, currentState =Normal, currentStableState = Normal, currentBlurState = 
DESKTOP
  07-02 17:30:48.833 D/os.permission.PermissionInfo( 1698): checkPermission 10196:android.permission.WRITE_SECURE_SETTINGS:true
  07-02 17:30:48.833 I/os.permission( 1698): Grant permission: android.permission.WRITE_SECURE_SETTINGS to uid: 10196
  07-02 17:30:48.833 V/SettingsProvider( 1698): name : launcher_static_window_anim appId : 10196
  07-02 17:30:48.833 V/SettingsProvider( 1698): Package name : com.transsion.XOSLauncher privateFlags : -1402990328
  07-02 17:30:48.837 I/StatsLog( 2371): LAUNCHER_ONSTOP
  07-02 17:30:48.841 I/ImeTracker( 2371): com.transsion.XOSLauncher:d49f6f5d: onRequestHide at ORIGIN_CLIENT reason HIDE_SOFT_INPUT fromUser false
  07-02 17:30:48.841 I/ImeTracker( 2371): com.transsion.XOSLauncher:d49f6f5d: onFailed at PHASE_CLIENT_VIEW_SERVED
  07-02 17:30:48.842 D/TranWifiTputMonitor( 1698): WIFI: TX: 0 RX: 0 TOTAL = 0
  07-02 17:30:48.844 D/MagellanHandle( 1698): updateRefreshRateForSceneVsyncs what = 23
  07-02 17:30:48.847 D/TranWifiTputMonitor( 1698): High Tput: false, TOTAL TPUT: 0
  07-02 17:30:48.856 V/TranSecureKeyboardManagerImpl( 1698): getServiceLocked mInputMethodService = null this: 
com.transsion.interaction.securekeyboard.TranSKSecureKeyboardManagerImpl@11bbed6
> 07-02 17:30:48.861 I/BufferQueueDebug( 1012): [Surface(name=73f9581 InputMethod)/@0x8c09814 - animation-leash of 
insets_animation#19427](this:0xb40000731f642d78,id:-1,api:0,p:-1,c:-1) BufferQueue core=(1012:/system/bin/surfaceflinger)
  07-02 17:30:48.862 D/C2MtkComponentStore(  937): setDmaBufUsage: usage 5, flags 0, heapName mtk_mm for decoder.
> 07-02 17:30:48.864 I/SurfaceFlinger( 1012): onHandleDestroyed: name=ZeroScreen#19408, layerId=19408, parentId=0
  07-02 17:30:48.866 I/eara_io@boost( 1347): [eara_io_boost] eara_io_boost 0 , ta 0
> 07-02 17:30:48.880 I/BufferQueueDebug( 1012): [ZeroScreen#19408](this:0xb40000731f575cf8,id:-1,api:0,p:-1,c:1012) onDestructor()
> 07-02 17:30:48.881 I/SurfaceFlinger( 1012): onHandleDestroyed: name=Surface(name=73f9581 InputMethod)/@0x8c09814 - animation-leash of 
insets_animation#19405, layerId=19405, parentId=0
> 07-02 17:30:48.883 I/SurfaceFlinger( 1012): onHandleDestroyed: name=com.transsion.XOSLauncher/com.android.launcher3.uioverrides.QuickstepLauncher#19400, 
layerId=19400, parentId=0
  07-02 17:30:48.885 E/ApplicationHelper( 1698): Fail to get PackageManager
  07-02 17:30:48.888 E/ApplicationHelper( 1698): Fail to get PackageManager
  07-02 17:30:48.888 E/ApplicationHelper( 1698): Fail to get PackageManager
  07-02 17:30:48.888 E/ApplicationHelper( 1698): Fail to get PackageManager
  07-02 17:30:48.890 I/mtkpower_client( 1698): perf_lock_rel, hdl:55334, tid:1892
  07-02 17:30:48.890 I/mtkpower@impl(  970): [setMode] type:5, enabled:0
  07-02 17:30:48.892 I/libPowerHal(  970): [unsetGPUFreq] current min:0, max:0; scn_gpu_min:0, scn_gpu_max:-1; scn_gpu_min(HL):-1, scn_gpu_max(HL):-1
  07-02 17:30:48.892 I/libPowerHal(  970): [setGPUFreq] Soft min/max = (0, 0); Hard min/max = (44, 0)
  07-02 17:30:48.892 I/libPowerHal(  970): [setGPUFreq] final min/max = (0, 0)
  07-02 17:30:48.892 I/libPowerHal(  970): LAUNCH: set gpu opp level: 0
  07-02 17:30:48.892 I/libPowerHal(  970): LAUNCH: set gpu opp level max: 0
  07-02 17:30:48.892 I/libPowerHal(  970): [PD] LAUNCH update cmd:1408700, param:100
  07-02 17:30:48.894 D/ActivityTaskManager_Recents( 1698): 	excludeFromRecents=true, taskIndex = 10, isOnHomeDisplay: false, isAnimatingByRecents: false
  07-02 17:30:48.894 D/ActivityTaskManager_Recents( 1698): Although task#Task=36443 has FLAG_ACTIVITY_EXCLUDE_FROM_RECENTS, but it's in whiteList, so keep 
it
> 07-02 17:30:48.897 I/BufferQueueDebug( 1012): 
[com.transsion.XOSLauncher/com.android.launcher3.uioverrides.QuickstepLauncher#19400](this:0xb40000731f5b4758,id:-1,api:0,p:-1,c:1012) onDestructor()
> 07-02 17:30:48.897 I/BufferQueueDebug( 1012): [Surface(name=73f9581 InputMethod)/@0x8c09814 - animation-leash of 
insets_animation#19405](this:0xb40000731f623848,id:-1,api:0,p:-1,c:1012) onDestructor()
  07-02 17:30:48.899 I/PowerHalWrapper( 1698): amsBoostStop AMS_BOOST_PACK_SWITCH:false, AMS_BOOST_ACT_SWITCH:false, AMS_BOOST_PROCESS_CREATE:true, 
AMS_BOOST_PROCESS_CREATE_FOR_GAME:false, AMS_BOOST_HOT_LAUNCH:false 
  07-02 17:30:48.899 I/mtkpower@impl(  970): [mtkPowerHint] hint:21, hold:0, ext:30, ext_hold:30000
  07-02 17:30:48.899 D/AppFlingMode(  970): [CheckAppFlingHint] 30 com.erbete.customer -1
  07-02 17:30:48.900 I/libPowerHal(  970): [PD] MTKPOWER_HINT_PROCESS_CREATE update cmd:300c000 param:0
  07-02 17:30:48.905 I/libPowerHal(  970): [PD] MTKPOWER_HINT_PROCESS_CREATE update cmd:2054400, param:1
  07-02 17:30:48.911 I/libPowerHal(  970): [PD] MTKPOWER_HINT_PROCESS_CREATE update cmd:1000000 param:-1
  07-02 17:30:48.917 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.022677,0.000078, totalTime 0.022756 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:30:48.925 D/TranSignalStrengthComponentImpl( 2620): [LTE] dbm: -86
  07-02 17:30:48.925 D/TranSignalStrengthComponentImpl( 2620): [LTE] dbm: -86
  07-02 17:30:48.928 D/CallbackProxy( 6515): [onSignalStrengthsChanged]
  07-02 17:30:48.929 I/TranTele/TranPhoneInterfaceManager( 2620): TTC - onSignalStrengthsChanged
  07-02 17:30:48.930 D/TranSignalStrengthComponentImpl( 1698): [LTE] dbm: -86
  07-02 17:30:48.931 D/TranSignalStrengthComponentImpl(30413): [LTE] dbm: -86
  07-02 17:30:48.932 D/WindowManager( 1698): setParent old=ActivityRecord{28ce32b u0 com.erbete.customer/.MainActivity t48210},new=null,this 
window=Window{20c12c7 u0 Splash Screen com.erbete.customer},callers=com.android.server.wm.WindowContainer.removeChild:862 
com.android.server.wm.ActivityRecord.removeChild:5351 com.android.server.wm.ActivityRecord.removeChild:482 
com.android.server.wm.WindowContainer.removeImmediately:932 com.android.server.wm.WindowState.removeImmediately:2565 
com.android.server.wm.WindowState.destroySurface:3728 
  07-02 17:30:48.932 D/WindowManager( 1698): removeImmediately mActivityRecord: ActivityRecord{28ce32b u0 com.erbete.customer/.MainActivity t48210} type: 3
  07-02 17:30:48.933 D/ActivityTaskManager( 1698): hookRecordSnapshot start pkgName: com.erbete.customer componentName: com.erbete.customer/.MainActivity 
mPkgName: null mRecordParams: null
  07-02 17:30:48.933 D/WindowManager( 1698): postWindowRemoveCleanupLocked: token:ActivityRecord{28ce32b u0 com.erbete.customer/.MainActivity t48210} 
win:Window{20c12c7 u0 Splash Screen com.erbete.customer} token.isEmpty:false token.mPersistOnEmpty:true
  07-02 17:30:48.934 I/WindowManager( 1698):   onAnimationFinished on win=Window{20c12c7 u0 Splash Screen com.erbete.customer}
  07-02 17:30:48.954 I/libPowerHal(  970): [setClusterFreq] MTKPOWER_HINT_LAUNCHER_ANIMA: sysfs_freq set cpu freq: -1 -1 -1 -1 
  07-02 17:30:48.954 I/libPowerHal(  970): [unsetGPUFreq] current min:0, max:0; scn_gpu_min:0, scn_gpu_max:-1; scn_gpu_min(HL):-1, scn_gpu_max(HL):-1
  07-02 17:30:48.954 I/libPowerHal(  970): MTKPOWER_HINT_LAUNCHER_ANIMA: set gpu opp level: 44
  07-02 17:30:48.955 I/libPowerHal(  970): MTKPOWER_HINT_LAUNCHER_ANIMA: set gpu opp level max: 0
  07-02 17:30:48.955 I/libPowerHal(  970): [setGPUFreq] Soft min/max = (44, 0); Hard min/max = (44, 0)
  07-02 17:30:48.955 I/libPowerHal(  970): [setGPUFreq] final min/max = (44, 0)
  07-02 17:30:48.955 I/libPowerHal(  970): MTKPOWER_HINT_LAUNCHER_ANIMA: set gpu opp level: 44
  07-02 17:30:48.955 I/libPowerHal(  970): MTKPOWER_HINT_LAUNCHER_ANIMA: set gpu opp level max: 0
> 07-02 17:30:48.964 I/SurfaceFlinger( 1012): onHandleDestroyed: name=Splash Screen com.erbete.customer#19412, layerId=19412, parentId=0
> 07-02 17:30:48.964 I/SurfaceFlinger( 1012): onHandleDestroyed: name=Surface(name=20c12c7 Splash Screen com.erbete.customer)/@0x880fcea - animation-leash 
of window_animation#19426, layerId=19426, parentId=0
> 07-02 17:30:48.964 I/SurfaceFlinger( 1012): onHandleDestroyed: name=20c12c7 Splash Screen com.erbete.customer#19411, layerId=19411, parentId=0
  07-02 17:30:48.966 D/TranPhoneSwitcher( 2620): getNetworkType: 4G
  07-02 17:30:48.966 I/TranPhoneSwitcher( 2620): mDefaultsign:4subid :2
  07-02 17:30:48.966 I/eara_io@boost( 1347): [eara_io_boost] eara_io_boost 0 , ta 0
> 07-02 17:30:48.966 I/DisplayDeviceRepository( 1698): Display device changed: DisplayDeviceInfo{"Layar Bawaan": uniqueId="local:0", 1080 x 2436, modeId 
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
  07-02 17:30:48.970 I/Griffin/DeviceState( 1698): virtualDisplayPackageName :{com.android.shell=2000}
> 07-02 17:30:48.980 I/BufferQueueDebug( 1012): [Splash Screen com.erbete.customer#19412](this:0xb40000731f59ad48,id:-1,api:0,p:-1,c:1012) onDestructor()
> 07-02 17:30:48.980 I/BufferQueueDebug( 1012): [20c12c7 Splash Screen com.erbete.customer#19411](this:0xb40000731f5a6388,id:-1,api:0,p:-1,c:1012) 
onDestructor()
> 07-02 17:30:48.980 I/BufferQueueDebug( 1012): [Surface(name=20c12c7 Splash Screen com.erbete.customer)/@0x880fcea - animation-leash of 
window_animation#19426](this:0xb40000731f64e3b8,id:-1,api:0,p:-1,c:1012) onDestructor()
  07-02 17:30:48.992 I/tranpm/ServicePolicy( 1698): isBlockHsB1 true
  07-02 17:30:48.992 I/tranpm/ServicePolicy( 1698): limitBindServiceLocked by hs&job - cold: callingPackage = android, targetPkg = com.turkcell.bip
  07-02 17:30:48.993 W/ActivityManager( 1698): Unbind failed: could not find connection for android.app.LoadedApk$ServiceDispatcher$InnerConnection@46d61ec
  07-02 17:30:48.994 E/JobScheduler.Concurrency( 1698): Error executing JobStatus{ecd60ea androidx.work.systemjobscheduler:u0a393/291 
@androidx.work.systemjobscheduler@com.turkcell.bip/androidx.work.impl.background.systemjob.SystemJobService u=0 s=10393 TIME=-1h22m47s762ms:none NET READY}
  07-02 17:30:48.997 I/tranpm/ServicePolicy( 1698): isBlockHsB1 true
  07-02 17:30:48.997 I/tranpm/ServicePolicy( 1698): limitBindServiceLocked by hs&job - cold: callingPackage = android, targetPkg = 
com.google.android.apps.nbu.files
  07-02 17:30:48.998 W/ActivityManager( 1698): Unbind failed: could not find connection for android.app.LoadedApk$ServiceDispatcher$InnerConnection@ef0c9b5
  07-02 17:30:48.998 E/JobScheduler.Concurrency( 1698): Error executing JobStatus{7e348f0 androidx.work.systemjobscheduler:u0a101/32974 
@androidx.work.systemjobscheduler@com.google.android.apps.nbu.files/androidx.work.impl.background.systemjob.SystemJobService u=0 s=10101 
URIS=[android.app.job.JobInfo$TriggerContentUri@26b5948d] READY}
  07-02 17:30:49.000 I/tranpm/ServicePolicy( 1698): isBlockHsB1 true
  07-02 17:30:49.000 I/tranpm/ServicePolicy( 1698): limitBindServiceLocked by hs&job - cold: callingPackage = android, targetPkg = 
com.google.android.apps.nbu.files
  07-02 17:30:49.001 W/ActivityManager( 1698): Unbind failed: could not find connection for android.app.LoadedApk$ServiceDispatcher$InnerConnection@f9384a
  07-02 17:30:49.001 E/JobScheduler.Concurrency( 1698): Error executing JobStatus{141498e androidx.work.systemjobscheduler:u0a101/32971 
@androidx.work.systemjobscheduler@com.google.android.apps.nbu.files/androidx.work.impl.background.systemjob.SystemJobService u=0 s=10101 
TIME=-1h56m37s992ms:none READY}
  07-02 17:30:49.002 I/tranpm/ServicePolicy( 1698): isBlockHsB1 true
  07-02 17:30:49.002 I/tranpm/ServicePolicy( 1698): limitBindServiceLocked by hs&job - cold: callingPackage = android, targetPkg = 
com.google.android.calendar
  07-02 17:30:49.003 W/ActivityManager( 1698): Unbind failed: could not find connection for android.app.LoadedApk$ServiceDispatcher$InnerConnection@c7fb3bb
  07-02 17:30:49.003 E/JobScheduler.Concurrency( 1698): Error executing JobStatus{8d89b44 androidx.work.systemjobscheduler:u0a121/6203 
@androidx.work.systemjobscheduler@com.google.android.calendar/androidx.work.impl.background.systemjob.SystemJobService u=0 s=10121 
TIME=-1h21m36s974ms:none READY}
  07-02 17:30:49.005 I/tranpm/ServicePolicy( 1698): isBlockHsB1 true
  07-02 17:30:49.005 I/tranpm/ServicePolicy( 1698): limitBindServiceLocked by hs&job - cold: callingPackage = android, targetPkg = 
com.google.android.calendar
  07-02 17:30:50.898 I/TranWifiSmartAssistantController( 1698): mCurrentNetwork :133 SSID :"TAUFIKKOPIBATOH@WIFI.ID"
  07-02 17:30:50.900 I/WifiNetworkQuality( 1698): current rssi is sufficient
  07-02 17:30:50.900 I/TranWifiSmartAssistantController( 1698): mNoCandidateCount : -1
  07-02 17:30:50.900 I/TranWifiSmartAssistantController( 1698): ====>>rssi :-56
  07-02 17:30:50.976 I/eara_io@boost( 1347): [eara_io_boost] eara_io_boost 0 , ta 0
  07-02 17:30:51.076 I/eara_io@boost( 1347): [eara_io_boost] eara_io_boost 0 , ta 0
  07-02 17:30:51.081 I/eara_io@det( 1347): [scnDetStop] 
  07-02 17:30:51.101 I/eara_io@boost( 1347): [eara_io_boost] eara_io_boost 0 , ta 0
> 07-02 17:30:51.109 I/BufferQueueProducer( 1012): 
[SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity](BLAST)#19423](this:0xb40000731f5d6a18,id:-1,api:0,p:-1,c:1012) queueBuffer: fps=1.09 
dur=2763.25 max=2497.65 min=82.30
  07-02 17:30:51.123 I/BufferQueueProducer( 1012): [VDS-studio.screen.sharing:0 SINK](this:0xb40000725f674618,id:-1,api:1,p:1012,c:1012) queueBuffer: 
fps=9.74 dur=2773.07 max=1925.35 min=13.70
  07-02 17:30:51.125 I/hwcomposer(  935): [HWCDisplay] [Display_0 (type:1)] fps:11.535193,dur:2774.12,max:1926.54,min:8.03  
  07-02 17:30:51.174 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.039854,0.000074, totalTime 0.039929 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:30:51.214 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.039491,0.000060, totalTime 0.039552 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:30:51.220 I/libPerfCtl(  970): xgfGetFPS pid:2380 fps:-1
  07-02 17:30:51.221 I/AppThermalMode(  970): [perfNotifyThermalState] hdl:0
  07-02 17:30:51.221 I/AppThermalMode(  970): [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: -1,fg->pid:11190
  07-02 17:30:51.221 I/AppThermalMode(  970): [perfNotifyThermalState] appThermalIdx -1:
  07-02 17:30:51.221 I/libPerfCtl(  970): xgfGetFPS pid:11190 fps:-1
  07-02 17:30:51.221 I/AppThermalMode(  970): [perfNotifyThermalState] hdl:0
  07-02 17:30:51.221 I/AppThermalMode(  970): [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: -1,fg->pid:11190
  07-02 17:30:51.221 I/AppThermalMode(  970): [perfNotifyThermalState] appThermalIdx -1:
  07-02 17:30:51.592 I/StatusBarNetworkRateView( 2380): wifi is default. hide second network rate view. StatusBarNetworkRateView subId=2, 
isFirstSimCard=false, mLocation=QS_NEW NetworkRateState=NetworkRateState{visible=true, activeMobileDataSubId=2, totalRate=0.0, netWorkState=1, 
isAirplane=false, netRateStateBySettingGlobal=1, networkRate='0,00', networkRateUnit='KB/S'}
  07-02 17:30:51.614 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.039516,0.000049, totalTime 0.039566 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:30:51.625 I/BufferQueueProducer( 1012): [StatusBar#97](this:0xb40000731f578a88,id:-1,api:0,p:-1,c:1012) queueBuffer: fps=0.20 dur=5011.25 
max=5011.25 min=5011.25
  07-02 17:30:51.851 D/TranWifiTputMonitor( 1698): WIFI: TX: 0 RX: 0 TOTAL = 0
  07-02 17:30:51.852 D/TranWifiTputMonitor( 1698): High Tput: false, TOTAL TPUT: 0
  07-02 17:30:52.014 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.040070,0.000128, totalTime 0.040199 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:30:59.379 D/ULogGuard( 1342): Monitoring: 15 threads, 0 requests, 0 time-bombs; 3 guards. ResetFlags = 0x7
  07-02 17:30:59.393 D/TranSignalStrengthComponentImpl( 2620): [LTE] dbm: -84
  07-02 17:30:59.394 D/TranSignalStrengthComponentImpl( 2620): [LTE] dbm: -84
  07-02 17:30:59.399 D/CallbackProxy( 6515): [onSignalStrengthsChanged]
  07-02 17:30:59.399 D/TranSignalStrengthComponentImpl( 1698): [LTE] dbm: -84
  07-02 17:30:59.399 I/TranTele/TranPhoneInterfaceManager( 2620): TTC - onSignalStrengthsChanged
  07-02 17:30:59.404 D/TranPhoneSwitcher( 2620): getNetworkType: 4G
  07-02 17:30:59.405 I/TranPhoneSwitcher( 2620): mOthersign:4subid :1
> 07-02 17:30:59.666 I/BufferQueueProducer( 1012): 
[SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity](BLAST)#19423](this:0xb40000731f5d6a18,id:-1,api:0,p:-1,c:1012) queueBuffer: fps=0.12 
dur=8557.39 max=8557.39 min=8557.39
  07-02 17:30:59.677 I/BufferQueueProducer( 1012): [VDS-studio.screen.sharing:0 SINK](this:0xb40000725f674618,id:-1,api:1,p:1012,c:1012) queueBuffer: 
fps=0.33 dur=3026.88 max=3026.88 min=3026.88
  07-02 17:30:59.679 I/hwcomposer(  935): [HWCDisplay] [Display_0 (type:1)] fps:0.330465,dur:3026.04,max:3026.04,min:3026.04  
  07-02 17:30:59.697 D/CoreBackPreview( 1698): Window{4b185ef u0 com.erbete.customer/com.erbete.customer.MainActivity}: Setting back callback 
OnBackInvokedCallbackInfo{mCallback=android.window.IOnBackInvokedCallback$Stub$Proxy@9308681, mPriority=0, mIsAnimationCallback=true}
  07-02 17:30:59.728 D/TLinkBrush_DATA( 1698): [NetdEvent]onTcpSocketStatsEvent
  07-02 17:30:59.729 D/TLinkBrush_DATA( 1698): [NetdEvent]onTcpSocketStatsEvent sent = 0, return
  07-02 17:30:59.729 D/TLinkBrush_DATA( 1698): [NetdEvent]onTcpSocketStatsEvent
  07-02 17:30:59.729 D/TLinkBrush_DATA( 1698): [NetdEvent]onTcpSocketStatsEvent sent = 0, return
  07-02 17:30:59.729 D/TLinkBrush_DATA( 1698): [NetdEvent]onTcpSocketStatsEvent
  07-02 17:30:59.754 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.039957,0.000095, totalTime 0.040052 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:30:59.756 I/FPSGO   ( 1080): fpsgo_boost_sched_idle_prefer:1
  07-02 17:30:59.756 I/mtkpower_client( 1080): perf_lock_acq, hdl:0, dur:0, num:2, tid:1080
  07-02 17:30:59.757 I/mtkpower_client( 1080): ret_hdl:55344
  07-02 17:30:59.758 I/FPSGO   ( 1080): perfLockAcq hdl:55344
  07-02 17:30:59.758 I/FPSGO   ( 1080): fpsgo_boost_sched_rate_ns:0
  07-02 17:30:59.758 I/mtkpower_client( 1080): perf_lock_acq, hdl:0, dur:0, num:12, tid:1080
  07-02 17:30:59.758 I/libPowerHal(  970): cmdSetting - unknown cmd:1438500, scmd:(null) ,param_1:0
  07-02 17:30:59.758 I/libPowerHal(  970): cmdSetting - unknown cmd:1438800, scmd:(null) ,param_1:0
> 07-02 17:30:59.759 D/WindowManager( 1698): updateSystemBarAttributes appearance:0, win appearance:0, opaqueAppearance:0, win:Window{4b185ef u0 
com.erbete.customer/com.erbete.customer.MainActivity}, appearanceRegions=[AppearanceRegion{ bounds=[0,0][1080,2436]}]
  07-02 17:30:59.760 I/mtkpower_client( 1080): ret_hdl:55345
  07-02 17:30:59.760 I/FPSGO   ( 1080): perfLockAcq hdl:55345
  07-02 17:30:59.762 I/StatusBarModePerDisplayRepository( 2380): isInFullscreenMode:false com.erbete.customer
  07-02 17:30:59.793 D/C2MtkComponentStore(  937): setDmaBufUsage: usage 5, flags 0, heapName mtk_mm for decoder.
  07-02 17:30:59.799 I/BufferQueueProducer( 1012): [StatusBar#97](this:0xb40000731f578a88,id:-1,api:0,p:-1,c:1012) queueBuffer: fps=0.32 dur=3162.13 
max=3162.13 min=3162.13
  07-02 17:30:59.818 D/BatteryMeterDrawable( 2380): drawBatteryFrame: color=ffffffff
  07-02 17:30:59.854 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.039528,0.000036, totalTime 0.039564 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:30:59.887 I/mtkpower_client( 1080): perf_lock_acq, hdl:0, dur:30000, num:2, tid:1080
  07-02 17:30:59.887 I/mtkpower_client( 1080): ret_hdl:55346
  07-02 17:30:59.914 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.038626,0.000060, totalTime 0.038686 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:30:59.918 I/TranWifiSmartAssistantController( 1698): start current network monitor 
  07-02 17:30:59.918 I/mtkpower_client( 1080): perf_lock_rel, hdl:55346, tid:1080
  07-02 17:30:59.919 I/WifiService( 1698): getConnectionInfo uid=1000
  07-02 17:30:59.919 V/WifiService( 1698): Clearing REDACT_FOR_LOCAL_MAC_ADDRESS for android(uid=1000)
  07-02 17:30:59.919 V/WifiService( 1698): Clearing REDACT_FOR_NETWORK_SETTINGS for android(uid=1000)
  07-02 17:30:59.919 V/WifiService( 1698): Clearing REDACT_FOR_ACCESS_FINE_LOCATION for android(uid=1000)
  07-02 17:30:59.919 I/TranWifiSmartAssistantController( 1698): userIgnored :false isScoredCurrentNetwork :false
  07-02 17:30:59.919 I/TranWifiSmartAssistantController( 1698): mCurrentNetwork :133 SSID :"TAUFIKKOPIBATOH@WIFI.ID"
  07-02 17:31:00.656 I/libPerfCtl(  970): xgfGetFPS pid:11190 fps:54
  07-02 17:31:00.656 I/AppThermalMode(  970): [perfNotifyThermalState] hdl:0
  07-02 17:31:00.656 I/AppThermalMode(  970): [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: -1,fg->pid:11190
  07-02 17:31:00.656 I/AppThermalMode(  970): [perfNotifyThermalState] appThermalIdx -1:
  07-02 17:31:00.656 I/libPowerHal(  970): [updateFPS] pid(11190) : -1 => 60
  07-02 17:31:00.657 I/libPowerHal(  970): [perfNotifyAppState] pack:com.erbete.customer, act:com.erbete.customer.MainActivity, state:5, pid:11190, 
uid:10509, fps:60
  07-02 17:31:00.658 I/UxUtility(  970): notifyForegroundApp pack:com.erbete.customer, uid:10509
  07-02 17:31:00.659 I/TouchUtility(  970): notifyAppState error = NULL
> 07-02 17:31:00.682 I/BufferQueueProducer( 1012): 
[SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity](BLAST)#19423](this:0xb40000731f5d6a18,id:-1,api:0,p:-1,c:1012) queueBuffer: fps=50.21 
dur=1015.67 max=99.87 min=15.99
  07-02 17:31:00.691 I/BufferQueueProducer( 1012): [VDS-studio.screen.sharing:0 SINK](this:0xb40000725f674618,id:-1,api:1,p:1012,c:1012) queueBuffer: 
fps=53.29 dur=1013.23 max=94.06 min=13.51
  07-02 17:31:00.692 I/hwcomposer(  935): [HWCDisplay] [Display_0 (type:1)] fps:53.288216,dur:1013.36,max:93.36,min:12.32  
  07-02 17:31:00.769 D/BufferPoolAccessor2.0(11425): bufferpool2 0xb4000072a18c2a98 : 66(89444 size) total buffers - 1(346 size) used buffers - 637/1147 
(recycle/alloc) - 548/1146 (fetch/transfer)
  07-02 17:31:00.863 D/TranWifiTputMonitor( 1698): WIFI: TX: 6 RX: 7 TOTAL = 13
  07-02 17:31:00.864 D/TranWifiTputMonitor( 1698): High Tput: false, TOTAL TPUT: 13
  07-02 17:31:00.978 D/InetDiagMessage( 1698): Destroyed 0 sockets, proto=IPPROTO_TCP, family=AF_INET, states=14
  07-02 17:31:00.980 D/InetDiagMessage( 1698): Destroyed 0 sockets, proto=IPPROTO_TCP, family=AF_INET6, states=14
  07-02 17:31:00.980 D/InetDiagMessage( 1698): Destroyed live tcp sockets for uids={10417} in 3ms
  07-02 17:31:00.981 D/InetDiagMessage( 1698): Destroyed 0 sockets, proto=IPPROTO_TCP, family=AF_INET, states=14
  07-02 17:31:00.983 D/InetDiagMessage( 1698): Destroyed 0 sockets, proto=IPPROTO_TCP, family=AF_INET6, states=14
  07-02 17:31:00.983 D/InetDiagMessage( 1698): Destroyed live tcp sockets for uids={20417} in 4ms
  07-02 17:31:01.010 I/AlarmManager( 1698): going to release wakelock now
  07-02 17:31:01.083 I/mtkpower_client( 1080): perf_lock_acq, hdl:0, dur:30000, num:2, tid:1080
  07-02 17:31:01.085 I/mtkpower_client( 1080): ret_hdl:55348
  07-02 17:31:01.186 D/BufferPoolAccessor2.0(11425): bufferpool2 0xb4000072a18c2a98 : 66(51618 size) total buffers - 1(305 size) used buffers - 640/1167 
(recycle/alloc) - 565/1166 (fetch/transfer)
  07-02 17:31:01.366 D/WifiClientModeImpl[24001351:wlan0]( 1698): updateLinkLayerStatsRssiSpeedFrequencyCapabilities rssi=-53 TxLinkspeed=54 freq=5765 
RxLinkSpeed=24
  07-02 17:31:01.369 D/WifiDataStall( 1698): tx tput in kbps: 50000
  07-02 17:31:01.370 D/WifiDataStall( 1698): rx tput in kbps: 50000
  07-02 17:31:01.656 I/AppThermalMode(  970): [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: 60,fg->pid:11190
  07-02 17:31:01.656 I/AppThermalMode(  970): [perfNotifyThermalState] appThermalIdx -1:
  07-02 17:31:01.656 I/libPerfCtl(  970): xgfGetFPS pid:11190 fps:57
  07-02 17:31:01.656 I/AppThermalMode(  970): [perfNotifyThermalState] hdl:0
  07-02 17:31:01.656 I/AppThermalMode(  970): [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: 60,fg->pid:11190
  07-02 17:31:01.656 I/AppThermalMode(  970): [perfNotifyThermalState] appThermalIdx -1:
  07-02 17:31:01.788 I/mtkpower_client( 1080): perf_lock_rel, hdl:55349, tid:1080
  07-02 17:31:01.788 I/libPowerHal(  970): [PD] fpsgo update cmd:1408300 param:0
> 07-02 17:31:01.797 I/BufferQueueProducer( 1012): 
[SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity](BLAST)#19423](this:0xb40000731f5d6a18,id:-1,api:0,p:-1,c:1012) queueBuffer: fps=21.52 
dur=1115.31 max=465.96 min=16.09
  07-02 17:31:01.806 I/BufferQueueProducer( 1012): [VDS-studio.screen.sharing:0 SINK](this:0xb40000725f674618,id:-1,api:1,p:1012,c:1012) queueBuffer: 
fps=22.42 dur=1115.17 max=462.05 min=11.91
  07-02 17:31:01.807 I/hwcomposer(  935): [HWCDisplay] [Display_0 (type:1)] fps:22.425629,dur:1114.80,max:461.76,min:11.80  
  07-02 17:31:01.821 I/mtkpower_client( 1080): perf_lock_acq, hdl:0, dur:30000, num:2, tid:1080
  07-02 17:31:01.822 I/mtkpower_client( 1080): ret_hdl:55350
  07-02 17:31:01.954 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.039933,0.000047, totalTime 0.039981 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:31:02.042 I/mtkpower_client( 1080): perf_lock_rel, hdl:55350, tid:1080
  07-02 17:31:02.043 I/libPowerHal(  970): [PD] fpsgo update cmd:1408300 param:0
  07-02 17:31:02.076 I/mtkpower_client( 1080): perf_lock_acq, hdl:0, dur:30000, num:2, tid:1080
  07-02 17:31:02.078 I/mtkpower_client( 1080): ret_hdl:55351
  07-02 17:31:02.112 I/mtkpower_client( 1080): perf_lock_rel, hdl:55351, tid:1080
  07-02 17:31:02.113 I/libPowerHal(  970): [PD] fpsgo update cmd:1408300 param:0
  07-02 17:31:02.194 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.039663,0.000039, totalTime 0.039704 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:31:02.254 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.039947,0.000298, totalTime 0.040246 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:31:02.362 I/native  ( 5782): I0000 00:00:1782988262.361956    5913 soda_async_impl.cc:1426] Current audio timestamp: 1782988261411520
  07-02 17:31:02.380 D/ULogGuard( 1342): Monitoring: 15 threads, 0 requests, 0 time-bombs; 3 guards. ResetFlags = 0x7
  07-02 17:31:02.521 D/TriggerService( 4219): trigger service is running
  07-02 17:31:02.557 D/BufferPoolAccessor2.0(11425): bufferpool2 0xb4000072a18c2a98 : 66(140727 size) total buffers - 1(30066 size) used buffers - 
640/1202 (recycle/alloc) - 600/1201 (fetch/transfer)
  07-02 17:31:02.657 I/libPerfCtl(  970): xgfGetFPS pid:2380 fps:-1
  07-02 17:31:02.657 I/AppThermalMode(  970): [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: 60,fg->pid:11190
  07-02 17:31:02.657 I/AppThermalMode(  970): [perfNotifyThermalState] appThermalIdx -1:
  07-02 17:31:02.657 I/libPerfCtl(  970): xgfGetFPS pid:11190 fps:52
  07-02 17:31:02.657 I/AppThermalMode(  970): [perfNotifyThermalState] hdl:0
  07-02 17:31:02.657 I/AppThermalMode(  970): [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: 60,fg->pid:11190
  07-02 17:31:02.657 I/AppThermalMode(  970): [perfNotifyThermalState] appThermalIdx -1:
  07-02 17:31:02.806 I/BufferQueueProducer( 1012): [VDS-studio.screen.sharing:0 SINK](this:0xb40000725f674618,id:-1,api:1,p:1012,c:1012) queueBuffer: 
fps=40.97 dur=1000.70 max=250.79 min=13.48
  07-02 17:31:02.808 I/hwcomposer(  935): [HWCDisplay] [Display_0 (type:1)] fps:40.954933,dur:1001.10,max:250.61,min:13.29  
> 07-02 17:31:02.813 I/BufferQueueProducer( 1012): 
[SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity](BLAST)#19423](this:0xb40000731f5d6a18,id:-1,api:0,p:-1,c:1012) queueBuffer: fps=41.34 
dur=1015.99 max=250.46 min=16.23
  07-02 17:31:02.883 I/mtkpower_client( 1080): perf_lock_acq, hdl:0, dur:30000, num:2, tid:1080
  07-02 17:31:02.884 I/mtkpower_client( 1080): ret_hdl:55352
  07-02 17:31:02.899 I/mtkpower_client( 1080): perf_lock_rel, hdl:55352, tid:1080
  07-02 17:31:02.900 I/libPowerHal(  970): [PD] fpsgo update cmd:1408300 param:0
  07-02 17:31:02.922 I/TranWifiSmartAssistantController( 1698): start current network monitor 
  07-02 17:31:02.922 I/WifiService( 1698): getConnectionInfo uid=1000
  07-02 17:31:02.923 V/WifiService( 1698): Clearing REDACT_FOR_LOCAL_MAC_ADDRESS for android(uid=1000)
  07-02 17:31:02.923 V/WifiService( 1698): Clearing REDACT_FOR_NETWORK_SETTINGS for android(uid=1000)
  07-02 17:31:02.923 V/WifiService( 1698): Clearing REDACT_FOR_ACCESS_FINE_LOCATION for android(uid=1000)
  07-02 17:31:02.923 I/TranWifiSmartAssistantController( 1698): userIgnored :false isScoredCurrentNetwork :false
  07-02 17:31:02.923 I/TranWifiSmartAssistantController( 1698): mCurrentNetwork :133 SSID :"TAUFIKKOPIBATOH@WIFI.ID"
  07-02 17:31:02.924 I/WifiNetworkQuality( 1698): current rssi is sufficient
  07-02 17:31:02.924 I/TranWifiSmartAssistantController( 1698): mNoCandidateCount : -1
  07-02 17:31:02.924 I/TranWifiSmartAssistantController( 1698): ====>>rssi :-53
  07-02 17:31:02.955 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.040338,0.000151, totalTime 0.040490 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:31:03.028 D/BufferPoolAccessor2.0(11425): bufferpool2 0xb4000072a18c2a98 : 66(158950 size) total buffers - 1(920 size) used buffers - 650/1229 
(recycle/alloc) - 617/1228 (fetch/transfer)
  07-02 17:31:03.074 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.039924,0.000044, totalTime 0.039969 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:31:03.153 I/mtkpower_client( 1080): perf_lock_acq, hdl:0, dur:30000, num:2, tid:1080
  07-02 17:31:07.674 D/mol_MolService.run(L:134)( 4272): ----MolService focused pkg:com.erbete.customer, cmp:com.erbete.customer.MainActivity, 
curType:SCENE_UNKOWN, molAlive:true, asAlive:false, asCrashed:false, imeVis:false, this:com.transsion.mol.service.MolService@9ecbda5
  07-02 17:31:07.687 W/NetworkTypeHelper( 1698): Failed to call buildTemplateCarrierMetered, java.lang.reflect.InvocationTargetException
  07-02 17:31:07.688 D/NetworkStatusMonitor( 1698): getAllInterfaceNames network type is unknown
  07-02 17:31:07.689 W/NetworkTypeHelper( 1698): Failed to call buildTemplateCarrierMetered, java.lang.reflect.InvocationTargetException
  07-02 17:31:07.689 D/NetworkStatusMonitor( 1698): getAllInterfaceNames network type is unknown
  07-02 17:31:07.690 D/NetworkStatusMonitor( 1698): getAllInterfaceNames network type is mobile
  07-02 17:31:07.690 D/NetworkStatusMonitor( 1698): getAllInterfaceNames network type is wifi
  07-02 17:31:07.690 D/NetworkStatusMonitor( 1698): onNetworkTypeChanged wifi => wifi
> 07-02 17:31:07.873 I/BufferQueueProducer( 1012): 
[SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity](BLAST)#19423](this:0xb40000731f5d6a18,id:-1,api:0,p:-1,c:1012) queueBuffer: fps=3.16 
dur=5059.81 max=4743.86 min=16.26
  07-02 17:31:07.887 I/BufferQueueProducer( 1012): [VDS-studio.screen.sharing:0 SINK](this:0xb40000725f674618,id:-1,api:1,p:1012,c:1012) queueBuffer: 
fps=0.82 dur=1214.93 max=1214.93 min=1214.93
  07-02 17:31:07.888 I/hwcomposer(  935): [HWCDisplay] [Display_0 (type:1)] fps:0.823085,dur:1214.94,max:1214.94,min:1214.94  
  07-02 17:31:07.953 I/NearbySharing( 4458): Network state changed: NetworkState(isRestricted=false, isOnline=true, isCongested=false, isMetered=false, 
isWifiConnected=true)
  07-02 17:31:08.207 D/BufferPoolAccessor2.0(11425): bufferpool2 0xb4000072a18c2a98 : 53(123988 size) total buffers - 1(938 size) used buffers - 662/1259 
(recycle/alloc) - 636/1258 (fetch/transfer)
  07-02 17:31:08.382 D/ULogGuard( 1342): Monitoring: 15 threads, 0 requests, 0 time-bombs; 3 guards. ResetFlags = 0x7
  07-02 17:31:08.524 D/TriggerService( 4219): trigger service is running
  07-02 17:31:08.620 W/native  ( 5782): W0000 00:00:1782988268.620698    5913 lag_detector.cc:58] Pipeline lagging by 959.174554ms. Continue processing 
samples.
  07-02 17:31:08.658 I/libPerfCtl(  970): xgfGetFPS pid:2380 fps:-1
  07-02 17:31:08.658 I/AppThermalMode(  970): [perfNotifyThermalState] hdl:0
  07-02 17:31:08.658 I/AppThermalMode(  970): [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: -1,fg->pid:11190
  07-02 17:31:08.658 I/AppThermalMode(  970): [perfNotifyThermalState] appThermalIdx -1:
  07-02 17:31:08.658 I/libPerfCtl(  970): xgfGetFPS pid:11190 fps:-1
  07-02 17:31:08.658 I/AppThermalMode(  970): [perfNotifyThermalState] hdl:0
  07-02 17:31:08.658 I/AppThermalMode(  970): [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: -1,fg->pid:11190
  07-02 17:31:08.658 I/AppThermalMode(  970): [perfNotifyThermalState] appThermalIdx -1:
  07-02 17:31:08.929 I/TranWifiSmartAssistantController( 1698): start current network monitor 
  07-02 17:31:08.929 I/WifiService( 1698): getConnectionInfo uid=1000
  07-02 17:31:08.929 V/WifiService( 1698): Clearing REDACT_FOR_LOCAL_MAC_ADDRESS for android(uid=1000)
  07-02 17:31:27.778 D/DisplayPowerController2( 1698): caclDuration: currentBrightnessHlg=0.38729835, targetHlg=0.6743559, BACKLIGHT_200_LEVEL=0.04884005
  07-02 17:31:27.778 I/TranHBMController[0]( 1698): hbm onBrightnessChanged brightness=0.18175565, sdrBrightness= 
0.18175565,animate=true,duration=0.86117274,Inspire=false,isMaxBrightnessButApplimit=false
  07-02 17:31:27.778 V/DisplayPowerController2[0]( 1698): Brightness [0.18175565] reason changing to: 'automatic', previous reason: 'automatic [ dim ]'.
  07-02 17:31:27.779 I/DisplayPowerController2[0]( 1698): BrightnessEvent: disp=0, physDisp=local:0, displayState=ON, displayPolicy=BRIGHT, 
brt=0.18175565, initBrt=0.05, rcmdBrt=0.18175565, preBrt=NaN, lux=50.0, preLux=NaN, hbmMax=1.0, hbmMode=off, rbcStrength=50, thrmMax=1.0, powerFactor=1.0, 
wasShortTermModelActive=false, flags=, reason=automatic, autoBrightness=true, strategy=InvalidBrightnessStrategy, autoBrightnessMode=default
  07-02 17:31:27.780 V/DisplayPowerController2[121]( 1698): Brightness [0.001960785] reason changing to: 'manual', previous reason: 'manual [ dim ]'.
  07-02 17:31:27.780 I/DisplayPowerController2[121]( 1698): BrightnessEvent: disp=121, 
physDisp=virtual:com.android.shell,2000,studio.screen.sharing:0,119, displayState=ON, displayPolicy=BRIGHT, brt=0.001960785, initBrt=0.0, rcmdBrt=NaN, 
preBrt=NaN, lux=0.0, preLux=0.0, hbmMax=1.0, hbmMode=off, rbcStrength=-1, thrmMax=1.0, powerFactor=1.0, wasShortTermModelActive=false, flags=, 
reason=manual, autoBrightness=true, strategy=InvalidBrightnessStrategy, autoBrightnessMode=default
  07-02 17:31:27.782 I/TranAppBrightnessChangeController( 1698): [onSystemBrightnessStrategyChange] brightnessState: 0.050324306
  07-02 17:31:27.794 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.039771,0.000041, totalTime 0.039812 > logTimeout 
0.022000 TIMEOUT!!
> 07-02 17:31:27.803 I/DisplayDeviceRepository( 1698): Display device changed: DisplayDeviceInfo{"Layar Bawaan": uniqueId="local:0", 1080 x 2436, modeId 
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
  07-02 17:31:27.804 I/hwcomposer(  935): [HWCDisplay] [Display_0 (type:1)] fps:0.193548,dur:5166.68,max:5166.68,min:5166.68  
  07-02 17:31:27.806 D/android.hardware.lights-service.mediatek(  965): write 15 to /sys/class/leds/lcd-backlight/brightness, result: 0
  07-02 17:31:27.806 I/Griffin/DeviceState( 1698): virtualDisplayPackageName :{com.android.shell=2000}
  07-02 17:31:27.822 D/AAL     ( 1359): onBacklightChanged: 14/1023 -> 15/1023(phy:30/4095)
  07-02 17:31:27.831 I/libPowerHal(  970): [PD] MTKPOWER_HINT_APP_TOUCH update cmd:3408b00 param:0
  07-02 17:31:27.832 I/ScreenTouchCollector( 3928): resetTouchPara:reason= InputEvent ACTION_UP or ACTION_CANCEL
  07-02 17:31:27.832 D/TouchMonitorProxy( 4272): handleInputEvent MotionEvent:MotionEvent { action=ACTION_UP, actionButton=0, id[0]=0, x[0]=207.25, 
y[0]=1060.875, toolType[0]=TOOL_TYPE_FINGER, buttonState=0, classification=NONE, metaState=0, flags=0x0, edgeFlags=0x0, pointerCount=1, historySize=0, 
eventTime=161868964, downTime=161868880, deviceId=6, source=0x1002, displayId=0, eventId=390061606 }
  07-02 17:31:27.834 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000000,0.039672,0.000060, totalTime 0.039733 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:31:27.838 D/AAL     ( 1359): 07-02 05:31:27.822 BL=  15,ESS= 256, 
  07-02 17:31:27.839 D/android.hardware.lights-service.mediatek(  965): write 16 to /sys/class/leds/lcd-backlight/brightness, result: 0
  07-02 17:31:27.855 D/AAL     ( 1359): onBacklightChanged: 15/1023 -> 16/1023(phy:32/4095)
  07-02 17:31:27.871 D/AAL     ( 1359): 07-02 05:31:27.855 BL=  16,ESS= 256, 
  07-02 17:31:27.874 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000000,0.039365,0.000043, totalTime 0.039408 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:31:27.875 D/os.SingleLice(11190): instance successfully. com.transsion.dragdrop.v1.DragDropLice@b08fb95 from 
com.transsion.dragdrop.DragDropLiceFactory
  07-02 17:31:27.875 D/os.SingleLiceFactory(11190): instance successfully. com.transsion.dragdrop.v1.DragDropLice@b08fb95 from android.view.IViewLice
  07-02 17:31:27.875 D/os.LiceInfo(11190): instance successfully. com.transsion.view.ViewLice@9b8b4aa from android.view.IViewLice
  07-02 17:31:27.883 D/android.hardware.lights-service.mediatek(  965): write 17 to /sys/class/leds/lcd-backlight/brightness, result: 0
  07-02 17:31:27.888 D/AAL     ( 1359): onBacklightChanged: 16/1023 -> 17/1023(phy:34/4095)
  07-02 17:31:27.893 D/TranWifiTputMonitor( 1698): WIFI: TX: 0 RX: 0 TOTAL = 0
  07-02 17:31:27.893 D/TranWifiTputMonitor( 1698): High Tput: false, TOTAL TPUT: 0
  07-02 17:31:27.905 D/AAL     ( 1359): 07-02 05:31:27.888 BL=  17,ESS= 256, 
  07-02 17:31:27.914 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000000,0.039709,0.000044, totalTime 0.039753 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:31:27.933 D/android.hardware.lights-service.mediatek(  965): write 18 to /sys/class/leds/lcd-backlight/brightness, result: 0
  07-02 17:31:27.936 D/tranpm/BehaviorManager( 1698): onMemPressureChange : level 0
  07-02 17:31:27.938 D/AAL     ( 1359): onBacklightChanged: 17/1023 -> 18/1023(phy:36/4095)
> 07-02 17:31:27.952 I/BufferQueueProducer( 1012): 
[SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity](BLAST)#19423](this:0xb40000731f5d6a18,id:-1,api:0,p:-1,c:1012) queueBuffer: fps=0.05 
dur=20079.02 max=20079.02 min=20079.02
  07-02 17:31:27.954 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.039794,0.000047, totalTime 0.039841 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:31:27.955 D/AAL     ( 1359): 07-02 05:31:27.938 BL=  18,ESS= 256, 
  07-02 17:31:27.958 I/BufferQueueProducer( 1012): [VDS-studio.screen.sharing:0 SINK](this:0xb40000725f674618,id:-1,api:1,p:1012,c:1012) queueBuffer: 
fps=0.19 dur=5323.00 max=5323.00 min=5323.00
  07-02 17:31:27.959 I/FPSGO   ( 1080): fpsgo_boost_sched_idle_prefer:1
  07-02 17:31:27.959 I/mtkpower_client( 1080): perf_lock_acq, hdl:0, dur:0, num:2, tid:1080
  07-02 17:31:27.960 I/mtkpower_client( 1080): ret_hdl:55356
  07-02 17:31:27.960 I/FPSGO   ( 1080): perfLockAcq hdl:55356
  07-02 17:31:27.960 I/FPSGO   ( 1080): fpsgo_boost_sched_rate_ns:0
  07-02 17:31:27.960 I/mtkpower_client( 1080): perf_lock_acq, hdl:0, dur:0, num:12, tid:1080
  07-02 17:31:27.961 I/libPowerHal(  970): [setClusterFreq] mtkpower@1.0-se: sysfs_freq set cpu freq: -1 -1 -1 -1 
  07-02 17:31:27.961 I/libPowerHal(  970): [PD] mtkpower@1.0-se update cmd:1408300 param:0
  07-02 17:31:27.962 I/mtkpower_client( 1080): ret_hdl:55357
  07-02 17:31:27.962 I/FPSGO   ( 1080): perfLockAcq hdl:55357
  07-02 17:31:27.963 I/libPowerHal(  970): cmdSetting - unknown cmd:1438500, scmd:(null) ,param_1:0
  07-02 17:31:27.963 I/libPowerHal(  970): cmdSetting - unknown cmd:1438800, scmd:(null) ,param_1:0
  07-02 17:31:27.965 D/BufferPoolAccessor2.0(11425): bufferpool2 0xb4000072a18c2a98 : 49(61190 size) total buffers - 1(873 size) used buffers - 700/1311 
(recycle/alloc) - 659/1310 (fetch/transfer)
  07-02 17:31:27.967 D/android.hardware.lights-service.mediatek(  965): write 19 to /sys/class/leds/lcd-backlight/brightness, result: 0
  07-02 17:31:27.971 D/AAL     ( 1359): onBacklightChanged: 18/1023 -> 19/1023(phy:38/4095)
  07-02 17:31:28.945 I/libPowerHal(  970): [updateFPS] pid(11190) : -1 => 60
  07-02 17:31:28.945 I/libPowerHal(  970): [perfNotifyAppState] pack:com.erbete.customer, act:com.erbete.customer.MainActivity, state:5, pid:11190, 
uid:10509, fps:60
  07-02 17:31:28.946 I/UxUtility(  970): notifyForegroundApp pack:com.erbete.customer, uid:10509
  07-02 17:31:28.946 I/TouchUtility(  970): notifyAppState error = NULL
  07-02 17:31:29.024 D/tranpm/BehaviorManager( 1698): onMemPressureChange : level 0
  07-02 17:31:29.151 I/NearbySharing( 4458): Network state changed: NetworkState(isRestricted=false, isOnline=true, isCongested=false, isMetered=false, 
isWifiConnected=true)
  07-02 17:31:29.226 I/mtkpower_client( 1080): perf_lock_rel, hdl:55358, tid:1080
  07-02 17:31:29.227 I/libPowerHal(  970): [PD] fpsgo update cmd:1408300 param:0
> 07-02 17:31:29.235 I/BufferQueueProducer( 1012): 
[SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity](BLAST)#19423](this:0xb40000731f5d6a18,id:-1,api:0,p:-1,c:1012) queueBuffer: fps=39.77 
dur=1282.49 max=416.14 min=16.09
  07-02 17:31:29.241 I/BufferQueueProducer( 1012): [VDS-studio.screen.sharing:0 SINK](this:0xb40000725f674618,id:-1,api:1,p:1012,c:1012) queueBuffer: 
fps=39.74 dur=1283.46 max=411.84 min=11.83
  07-02 17:31:29.259 I/mtkpower_client( 1080): perf_lock_acq, hdl:0, dur:30000, num:2, tid:1080
  07-02 17:31:29.259 I/mtkpower_client( 1080): ret_hdl:55359
  07-02 17:31:29.269 D/CoreBackPreview( 1698): Window{4b185ef u0 com.erbete.customer/com.erbete.customer.MainActivity}: Setting back callback 
OnBackInvokedCallbackInfo{mCallback=android.window.IOnBackInvokedCallback$Stub$Proxy@c582f9c, mPriority=0, mIsAnimationCallback=true}
  07-02 17:31:29.294 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.039928,0.000046, totalTime 0.039975 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:31:29.332 I/mtkpower_client( 1080): perf_lock_rel, hdl:55359, tid:1080
  07-02 17:31:29.333 I/libPowerHal(  970): [PD] fpsgo update cmd:1408300 param:0
  07-02 17:31:29.389 D/ULogGuard( 1342): Monitoring: 15 threads, 0 requests, 0 time-bombs; 3 guards. ResetFlags = 0x7
  07-02 17:31:29.394 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.039831,0.000043, totalTime 0.039875 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:31:29.430 D/tranpm/BehaviorManager( 1698): onMemPressureChange : level 0
  07-02 17:31:29.454 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.039939,0.000046, totalTime 0.039986 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:31:29.494 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000000,0.039752,0.000045, totalTime 0.039798 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:31:29.534 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000000,0.039607,0.000224, totalTime 0.039832 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:31:29.577 I/mtkpower_client( 1080): perf_lock_acq, hdl:0, dur:30000, num:2, tid:1080
  07-02 17:31:29.577 I/mtkpower_client( 1080): ret_hdl:55360
  07-02 17:31:29.589 I/mtkpower_client( 1080): perf_lock_rel, hdl:55360, tid:1080
  07-02 17:31:29.589 I/libPowerHal(  970): [PD] fpsgo update cmd:1408300 param:0
  07-02 17:31:29.650 D/TranAppBrightnessChangeController( 1698): [handleMessage] msg type: 1003 isCloudEnabled: true
  07-02 17:31:29.748 D/TLinkBrush_DATA( 1698): [NetdEvent]onTcpSocketStatsEvent sent = 0, return
  07-02 17:31:29.748 D/TLinkBrush_DATA( 1698): [NetdEvent]onTcpSocketStatsEvent
  07-02 17:31:29.756 I/mtkpower_client( 1080): perf_lock_acq, hdl:0, dur:30000, num:2, tid:1080
  07-02 17:31:29.760 I/mtkpower_client( 1080): ret_hdl:55362
  07-02 17:31:29.775 I/flutter (11190): RESTAURANT_VENDOR_DEBUG: event_count=4
  07-02 17:31:29.775 I/flutter (11190): RESTAURANT_VENDOR_DEBUG: allNearest_count=4
  07-02 17:31:29.775 I/flutter (11190): RESTAURANT_VENDOR_DEBUG: newArrival_count=4
  07-02 17:31:29.775 I/flutter (11190): RESTAURANT_VENDOR_DEBUG: popular_count=4
> 07-02 17:31:29.776 I/flutter (11190): RESTAURANT_VENDOR_DEBUG_ITEM: id=aceh_clone_6285ddbfd9598_0hB8mx1z1DeNR9CAzXfh title=LA Parrilla 
section=6285ddbfd9598 zone=q8OOxNm1zgyVqggkCibX category=[]
> 07-02 17:31:29.776 I/flutter (11190): RESTAURANT_VENDOR_DEBUG_ITEM: id=custom_banda_aceh_restaurant_demo title=GHALBIT Banda Aceh Food 
section=6285ddbfd9598 zone=q8OOxNm1zgyVqggkCibX category=[]
> 07-02 17:31:29.776 I/flutter (11190): RESTAURANT_VENDOR_DEBUG_ITEM: id=aceh_clone_6285ddbfd9598_1ZrcQ4ysrrheSVguUkFF title=Koobilo Eats 
section=6285ddbfd9598 zone=q8OOxNm1zgyVqggkCibX category=[]
> 07-02 17:31:29.776 I/flutter (11190): RESTAURANT_VENDOR_DEBUG_ITEM: id=aceh_clone_6285ddbfd9598_1vMlKPiniUrzybKkWiS1 title=ahmed store 
section=6285ddbfd9598 zone=q8OOxNm1zgyVqggkCibX category=[]
  07-02 17:31:29.789 I/mtkpower_client( 1080): perf_lock_rel, hdl:55362, tid:1080
  07-02 17:31:29.789 I/libPowerHal(  970): [PD] fpsgo update cmd:1408300 param:0
  07-02 17:31:29.814 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.039955,0.000057, totalTime 0.040014 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:31:29.827 I/hwcomposer(  935): [HWCDisplay] [Display_0 (type:1)] fps:20.705442,dur:1014.23,max:411.60,min:15.81  
  07-02 17:31:29.889 D/TranSignalStrengthComponentImpl( 2620): [LTE] dbm: -89
  07-02 17:31:29.891 D/TranSignalStrengthComponentImpl( 2620): [LTE] dbm: -89
  07-02 17:31:29.896 I/TranTele/TranPhoneInterfaceManager( 2620): TTC - onSignalStrengthsChanged
  07-02 17:31:29.896 D/TranSignalStrengthComponentImpl(16756): [LTE] dbm: -89
  07-02 17:31:29.896 D/TranSignalStrengthComponentImpl(30413): [LTE] dbm: -89
  07-02 17:31:29.894 D/CallbackProxy( 6515): [onSignalStrengthsChanged]
  07-02 17:31:29.898 D/TranSignalStrengthComponentImpl( 1698): [LTE] dbm: -89
  07-02 17:31:29.903 D/TranSignalStrengthComponentImpl(30413): [LTE] dbm: -89
  07-02 17:31:29.904 D/TranSignalStrengthComponentImpl(30413): [LTE] dbm: -89
  07-02 17:31:29.904 D/TranPhoneSwitcher( 2620): getNetworkType: 4G
  07-02 17:31:29.904 I/TranPhoneSwitcher( 2620): mDefaultsign:4subid :2
  07-02 17:31:29.945 I/libPerfCtl(  970): xgfGetFPS pid:11190 fps:42
  07-02 17:31:29.945 I/AppThermalMode(  970): [perfNotifyThermalState] hdl:0
  07-02 17:31:29.945 I/AppThermalMode(  970): [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: 60,fg->pid:11190
  07-02 17:31:29.961 V/WifiService( 1698): Clearing REDACT_FOR_ACCESS_FINE_LOCATION for android(uid=1000)
  07-02 17:31:29.961 I/TranWifiSmartAssistantController( 1698): userIgnored :false isScoredCurrentNetwork :false
  07-02 17:31:29.961 I/TranWifiSmartAssistantController( 1698): mCurrentNetwork :133 SSID :"TAUFIKKOPIBATOH@WIFI.ID"
  07-02 17:31:29.961 I/WifiNetworkQuality( 1698): current rssi is sufficient
  07-02 17:31:29.961 I/TranWifiSmartAssistantController( 1698): mNoCandidateCount : -1
  07-02 17:31:29.961 I/TranWifiSmartAssistantController( 1698): ====>>rssi :-55
  07-02 17:31:30.047 D/BufferPoolAccessor2.0(11425): bufferpool2 0xb4000072a18c2a98 : 66(178279 size) total buffers - 1(2610 size) used buffers - 706/1399 
(recycle/alloc) - 741/1398 (fetch/transfer)
  07-02 17:31:30.242 I/BufferQueueProducer( 1012): [VDS-studio.screen.sharing:0 SINK](this:0xb40000725f674618,id:-1,api:1,p:1012,c:1012) queueBuffer: 
fps=43.97 dur=1000.60 max=101.28 min=13.39
> 07-02 17:31:30.250 I/BufferQueueProducer( 1012): 
[SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity](BLAST)#19423](this:0xb40000731f5d6a18,id:-1,api:0,p:-1,c:1012) queueBuffer: fps=44.33 
dur=1015.16 max=100.21 min=15.84
  07-02 17:31:30.330 D/BufferPoolAccessor2.0(11425): bufferpool2 0xb4000072a18c2a98 : 66(193171 size) total buffers - 1(1730 size) used buffers - 706/1416 
(recycle/alloc) - 758/1415 (fetch/transfer)
  07-02 17:31:30.334 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.039920,0.000039, totalTime 0.039959 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:31:30.389 I/mtkpower_client( 1080): perf_lock_acq, hdl:0, dur:30000, num:2, tid:1080
  07-02 17:31:30.390 I/mtkpower_client( 1080): ret_hdl:55363
  07-02 17:31:30.391 I/mtkpower_client( 1080): perf_lock_rel, hdl:55363, tid:1080
  07-02 17:31:30.392 I/libPowerHal(  970): [PD] fpsgo update cmd:1408300 param:0
  07-02 17:31:30.414 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.040249,0.000069, totalTime 0.040319 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:31:30.431 D/tranpm/BehaviorManager( 1698): onMemPressureChange : level 0
  07-02 17:31:30.533 D/TriggerService( 4219): trigger service is running
  07-02 17:31:30.592 I/mtkpower_client( 1080): perf_lock_acq, hdl:0, dur:30000, num:2, tid:1080
  07-02 17:31:30.594 I/mtkpower_client( 1080): ret_hdl:55364
  07-02 17:31:30.882 D/BufferPoolAccessor2.0(11425): bufferpool2 0xb4000072a18c2a98 : 66(180378 size) total buffers - 1(1043 size) used buffers - 706/1433 
(recycle/alloc) - 775/1432 (fetch/transfer)
  07-02 17:31:30.895 D/TranWifiTputMonitor( 1698): WIFI: TX: 6 RX: 19 TOTAL = 25
  07-02 17:31:30.896 D/TranWifiTputMonitor( 1698): High Tput: false, TOTAL TPUT: 25
  07-02 17:31:30.945 I/libPerfCtl(  970): xgfGetFPS pid:11190 fps:58
  07-02 17:31:30.945 I/AppThermalMode(  970): [perfNotifyThermalState] hdl:0
  07-02 17:31:30.945 I/AppThermalMode(  970): [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: 60,fg->pid:11190
  07-02 17:31:30.946 I/AppThermalMode(  970): [perfNotifyThermalState] appThermalIdx -1:
> 07-02 17:31:31.069 I/DisplayDeviceRepository( 1698): Display device changed: DisplayDeviceInfo{"Layar Bawaan": uniqueId="local:0", 1080 x 2436, modeId 
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
  07-02 17:31:31.070 I/Griffin/DeviceState( 1698): virtualDisplayPackageName :{com.android.shell=2000}
  07-02 17:31:31.070 I/hwcomposer(  935): [HWCDisplay] [Display_0 (type:1)] fps:36.199375,dur:1243.12,max:496.50,min:12.45  
  07-02 17:31:31.158 D/tranpm/BehaviorManager( 1698): onMemPressureChange : level 0
  07-02 17:31:31.195 I/mtkpower_client( 1080): perf_lock_rel, hdl:55364, tid:1080
  07-02 17:31:31.196 I/libPowerHal(  970): [PD] fpsgo update cmd:1408300 param:0
  07-02 17:31:31.225 I/mtkpower_client( 1080): perf_lock_acq, hdl:0, dur:30000, num:2, tid:1080
  07-02 17:31:31.226 I/mtkpower_client( 1080): ret_hdl:55365
  07-02 17:31:31.262 I/Hiber/importantScene( 1698): isTrafficActive uid:10257 speed :0
  07-02 17:31:31.263 I/Hiber/appStateMachine( 1698): uid:10257 enter FrozenState
  07-02 17:31:31.272 I/Hiber/stateManager( 1698): freeze uid: 10257 com.instagram.android costTime=8ms ,last unfreeze 5s ago
  07-02 17:31:31.272 I/Hiber/restrictionPolicy( 1698): uid:10257  pkgName:com.instagram.android isAllowedNet
  07-02 17:31:31.273 I/Hiber/nativeServiceClient( 1698): watch app network uid=10257, persistent=0
  07-02 17:31:31.273 I/Hiber/hiber( 1698): msg for start proxy frozen state
  07-02 17:31:31.273 D/ActivityManager( 1698): Hiber try idle uid[10257] by hiber ,bgTime>0 ? true,isIdled before ? true ,isCurAllowListed ? false 
,isProcStateBackground?true
  07-02 17:31:31.273 D/ActivityManager( 1698): Hiber try idle uid[10257] by hiber
  07-02 17:31:31.273 I/Hiber/proxyManager( 1698): p_service: 10257
  07-02 17:31:31.273 E/ApplicationHelper( 1698): Fail to get PackageManager
  07-02 17:31:31.273 I/Hiber/proxyManager( 1698): p_job: 10257 pkgName=com.instagram.android which=2
  07-02 17:31:31.278 I/incfs   (11190): ro.incremental.enable: on
  07-02 17:31:31.278 I/incfs   (11190): IncFs_Features: v2
  07-02 17:31:31.279 I/incfs-mounts(11190): [incfs] Loaded incremental-fs mount info: 1 instances, 2 mount points
  07-02 17:31:31.281 D/Hiber/JobExtImpl( 1698): proxyJobs leave, uid=10257, pkg=com.instagram.android which=2
  07-02 17:31:31.281 I/Hiber/proxyManager( 1698): p_sensor: uid=10257, pkgName=com.instagram.android
  07-02 17:31:31.294 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.039760,0.000184, totalTime 0.039946 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:31:31.544 I/mtkpower_client( 1080): perf_lock_rel, hdl:55365, tid:1080
  07-02 17:31:31.545 I/libPowerHal(  970): [PD] fpsgo update cmd:1408300 param:0
> 07-02 17:31:31.549 I/BufferQueueProducer( 1012): 
[SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity](BLAST)#19423](this:0xb40000731f5d6a18,id:-1,api:0,p:-1,c:1012) queueBuffer: fps=15.40 
dur=1298.72 max=632.40 min=16.23
  07-02 17:31:31.555 I/BufferQueueProducer( 1012): [VDS-studio.screen.sharing:0 SINK](this:0xb40000725f674618,id:-1,api:1,p:1012,c:1012) queueBuffer: 
fps=15.99 dur=1313.54 max=633.13 min=12.90
  07-02 17:31:31.577 I/mtkpower_client( 1080): perf_lock_acq, hdl:0, dur:30000, num:2, tid:1080
  07-02 17:31:31.577 I/mtkpower_client( 1080): ret_hdl:55366
  07-02 17:31:31.581 I/mtkpower_client( 1080): perf_lock_rel, hdl:55366, tid:1080
  07-02 17:31:31.582 I/libPowerHal(  970): [PD] fpsgo update cmd:1408300 param:0
  07-02 17:31:31.614 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.039919,0.000045, totalTime 0.039964 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:31:31.622 I/StatusBarNetworkRateView( 2380): wifi is default. hide second network rate view. StatusBarNetworkRateView subId=2, 
isFirstSimCard=false, mLocation=QS_NEW NetworkRateState=NetworkRateState{visible=true, activeMobileDataSubId=2, totalRate=16.217, netWorkState=1, 
isAirplane=false, netRateStateBySettingGlobal=1, networkRate='16,2', networkRateUnit='KB/S'}
  07-02 17:31:31.644 D/WifiClientModeImpl[24001351:wlan0]( 1698): updateLinkLayerStatsRssiSpeedFrequencyCapabilities rssi=-54 TxLinkspeed=54 freq=5765 
RxLinkSpeed=48
  07-02 17:31:31.648 I/BufferQueueProducer( 1012): [StatusBar#97](this:0xb40000731f578a88,id:-1,api:0,p:-1,c:1012) queueBuffer: fps=0.11 dur=9024.34 
max=9024.34 min=9024.34
  07-02 17:31:31.649 D/WifiClientModeImpl[24001351:wlan0]( 1698): reported txKbps 12000 rxKbps 60000
  07-02 17:31:31.650 D/WifiDataStall( 1698): tx tput in kbps: 50000
  07-02 17:31:31.650 D/WifiDataStall( 1698): rx tput in kbps: 50000
  07-02 17:31:31.650 V/WifiConfigManager( 1698): Updating scan detail cache freq=5765 BSSID=ac:4a:56:28:fe:ee RSSI=-54 for "TAUFIKKOPIBATOH@WIFI.ID"NONE
  07-02 17:31:31.650 I/TranTele/TranPhoneInterfaceManager( 2620): [onReceive] action: android.net.wifi.RSSI_CHANGED
  07-02 17:31:31.651 I/WifiService( 1698): getConnectionInfo uid=1001
  07-02 17:31:31.651 V/WifiService( 1698): Clearing REDACT_FOR_LOCAL_MAC_ADDRESS for com.android.phone(uid=1001)
  07-02 17:31:31.651 V/WifiService( 1698): Clearing REDACT_FOR_NETWORK_SETTINGS for com.android.phone(uid=1001)
  07-02 17:31:31.651 V/WifiService( 1698): Clearing REDACT_FOR_ACCESS_FINE_LOCATION for com.android.phone(uid=1001)
  07-02 17:31:32.283 D/Hiber/alarmManagerServiceExtImpl( 1698): unproxyAlarms leave, uid=10257, packageName=null
  07-02 17:31:32.283 I/Hiber/proxyManager( 1698): up_sensor: uid=10257, pkgName=com.instagram.android
  07-02 17:31:32.314 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000000,0.039922,0.000079, totalTime 0.040001 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:31:32.360 I/native  ( 5782): I0000 00:00:1782988292.360556    5913 soda_async_impl.cc:1426] Current audio timestamp: 1782988291411520
  07-02 17:31:32.390 D/ULogGuard( 1342): Monitoring: 15 threads, 0 requests, 0 time-bombs; 3 guards. ResetFlags = 0x7
  07-02 17:31:32.418 D/BufferPoolAccessor2.0(11425): bufferpool2 0xb4000072a18c2a98 : 66(148848 size) total buffers - 1(1303 size) used buffers - 709/1473 
(recycle/alloc) - 812/1472 (fetch/transfer)
  07-02 17:31:32.534 D/TriggerService( 4219): trigger service is running
  07-02 17:31:32.557 I/BufferQueueProducer( 1012): [VDS-studio.screen.sharing:0 SINK](this:0xb40000725f674618,id:-1,api:1,p:1012,c:1012) queueBuffer: 
fps=39.95 dur=1001.34 max=188.26 min=13.75
> 07-02 17:31:32.564 I/BufferQueueProducer( 1012): 
[SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity](BLAST)#19423](this:0xb40000731f5d6a18,id:-1,api:0,p:-1,c:1012) queueBuffer: fps=40.36 
dur=1015.75 max=183.80 min=15.86
  07-02 17:31:32.606 I/mtkpower_client( 1080): perf_lock_acq, hdl:0, dur:30000, num:2, tid:1080
  07-02 17:31:32.607 I/mtkpower_client( 1080): ret_hdl:55370
  07-02 17:31:32.614 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.039859,0.000155, totalTime 0.040015 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:31:32.700 I/mtkpower_client( 1080): perf_lock_rel, hdl:55370, tid:1080
  07-02 17:31:32.701 I/libPowerHal(  970): [PD] fpsgo update cmd:1408300 param:0
  07-02 17:31:32.734 I/mtkpower_client( 1080): perf_lock_acq, hdl:0, dur:30000, num:2, tid:1080
  07-02 17:31:32.734 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.039565,0.000066, totalTime 0.039632 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:31:32.736 I/mtkpower_client( 1080): ret_hdl:55371
  07-02 17:31:32.809 I/mtkpower_client( 1080): perf_lock_rel, hdl:55371, tid:1080
  07-02 17:31:32.810 I/libPowerHal(  970): [PD] fpsgo update cmd:1408300 param:0
  07-02 17:31:32.834 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.039786,0.000155, totalTime 0.039942 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:31:32.883 D/BufferPoolAccessor2.0(11425): bufferpool2 0xb4000072a18c2a98 : 66(138753 size) total buffers - 1(1045 size) used buffers - 709/1490 
(recycle/alloc) - 829/1489 (fetch/transfer)
  07-02 17:31:32.945 I/libPerfCtl(  970): xgfGetFPS pid:2380 fps:-1
  07-02 17:31:32.945 I/AppThermalMode(  970): [perfNotifyThermalState] hdl:0
  07-02 17:31:32.945 I/AppThermalMode(  970): [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: 60,fg->pid:11190
  07-02 17:31:32.945 I/AppThermalMode(  970): [perfNotifyThermalState] appThermalIdx -1:
  07-02 17:31:32.946 I/libPerfCtl(  970): xgfGetFPS pid:11190 fps:56
  07-02 17:31:32.946 I/AppThermalMode(  970): [perfNotifyThermalState] hdl:0
  07-02 17:31:33.553 D/AppFlingMode(  970): [CheckAppFlingHint] 25 com.erbete.customer 60
  07-02 17:31:33.555 E/libPowerHal(  970): [getCPUFreq] error cid:2, nClusterNum:2
  07-02 17:31:33.557 D/TouchSliderConsumer( 4503): onInputEvent : ACTION_DOWN
  07-02 17:31:33.557 D/TextSelection(11190): onUseCache cache=false
  07-02 17:31:33.557 D/TouchMonitorProxy( 4272): handleInputEvent MotionEvent:MotionEvent { action=ACTION_DOWN, actionButton=0, id[0]=0, x[0]=238.3125, 
y[0]=1440.0, toolType[0]=TOOL_TYPE_FINGER, buttonState=0, classification=NONE, metaState=0, flags=0x0, edgeFlags=0x0, pointerCount=1, historySize=0, 
eventTime=161874685, downTime=161874685, deviceId=6, source=0x1002, displayId=0, eventId=579493651 }
  07-02 17:31:33.558 D/TouchSliderConsumer( 4503): consumeTouchEvent : 238.3125 1440.0 RectF(1035.0, 294.0, 1083.0, 660.0) 
  07-02 17:31:33.560 D/ScreenCapControl( 4272): onFingerDown: 1440, 108, 120
  07-02 17:31:33.562 I/libPowerHal(  970): [setClusterFreq] mtkpower@1.0-se: sysfs_freq set cpu freq: 2000000 -1 2200000 -1 
> 07-02 17:31:33.582 I/DisplayDeviceRepository( 1698): Display device changed: DisplayDeviceInfo{"Layar Bawaan": uniqueId="local:0", 1080 x 2436, modeId 
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
  07-02 17:31:33.583 I/Griffin/DeviceState( 1698): virtualDisplayPackageName :{com.android.shell=2000}
  07-02 17:31:33.594 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000000,0.039717,0.000048, totalTime 0.039765 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:31:33.634 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000000,0.039707,0.000050, totalTime 0.039757 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:31:33.655 I/mtkpower@impl(  970): [powerd_req] TIMER_MSG_PERF_LOCK_TIMEOUT hdl:55375
  07-02 17:31:33.655 I/libPowerHal(  970): [PD] MTKPOWER_HINT_APP_TOUCH update cmd:3408b00 param:0
  07-02 17:31:33.667 D/TouchMonitorProxy( 4272): handleInputEvent MotionEvent:MotionEvent { action=ACTION_MOVE, actionButton=0, id[0]=0, x[0]=239.5625, 
y[0]=1437.5, toolType[0]=TOOL_TYPE_FINGER, buttonState=0, classification=NONE, metaState=0, flags=0x0, edgeFlags=0x0, pointerCount=1, historySize=0, 
eventTime=161874798, downTime=161874685, deviceId=6, source=0x1002, displayId=0, eventId=616031869 }
  07-02 17:31:33.669 D/TouchMonitorProxy( 4272): handleInputEvent MotionEvent:MotionEvent { action=ACTION_MOVE, actionButton=0, id[0]=0, x[0]=240.8125, 
y[0]=1435.125, toolType[0]=TOOL_TYPE_FINGER, buttonState=0, classification=NONE, metaState=0, flags=0x0, edgeFlags=0x0, pointerCount=1, historySize=0, 
eventTime=161874801, downTime=161874685, deviceId=6, source=0x1002, displayId=0, eventId=672577263 }
  07-02 17:31:33.672 D/TouchMonitorProxy( 4272): handleInputEvent MotionEvent:MotionEvent { action=ACTION_MOVE, actionButton=0, id[0]=0, x[0]=241.9375, 
y[0]=1432.5, toolType[0]=TOOL_TYPE_FINGER, buttonState=0, classification=NONE, metaState=0, flags=0x0, edgeFlags=0x0, pointerCount=1, historySize=0, 
eventTime=161874804, downTime=161874685, deviceId=6, source=0x1002, displayId=0, eventId=35626929 }
  07-02 17:31:33.675 D/TouchMonitorProxy( 4272): handleInputEvent MotionEvent:MotionEvent { action=ACTION_MOVE, actionButton=0, id[0]=0, x[0]=242.9375, 
y[0]=1430.25, toolType[0]=TOOL_TYPE_FINGER, buttonState=0, classification=NONE, metaState=0, flags=0x0, edgeFlags=0x0, pointerCount=1, historySize=0, 
eventTime=161874806, downTime=161874685, deviceId=6, source=0x1002, displayId=0, eventId=658702590 }
  07-02 17:31:33.677 D/TouchMonitorProxy( 4272): handleInputEvent MotionEvent:MotionEvent { action=ACTION_MOVE, actionButton=0, id[0]=0, x[0]=243.9375, 
y[0]=1428.125, toolType[0]=TOOL_TYPE_FINGER, buttonState=0, classification=NONE, metaState=0, flags=0x0, edgeFlags=0x0, pointerCount=1, historySize=0, 
eventTime=161874809, downTime=161874685, deviceId=6, source=0x1002, displayId=0, eventId=543547266 }
  07-02 17:31:33.680 D/TouchMonitorProxy( 4272): handleInputEvent MotionEvent:MotionEvent { action=ACTION_MOVE, actionButton=0, id[0]=0, x[0]=244.9375, 
y[0]=1425.5, toolType[0]=TOOL_TYPE_FINGER, buttonState=0, classification=NONE, metaState=0, flags=0x0, edgeFlags=0x0, pointerCount=1, historySize=0, 
eventTime=161874812, downTime=161874685, deviceId=6, source=0x1002, displayId=0, eventId=261840146 }
  07-02 17:31:33.683 D/TouchMonitorProxy( 4272): handleInputEvent MotionEvent:MotionEvent { action=ACTION_MOVE, actionButton=0, id[0]=0, x[0]=246.8125, 
y[0]=1421.75, toolType[0]=TOOL_TYPE_FINGER, buttonState=0, classification=NONE, metaState=0, flags=0x0, edgeFlags=0x0, pointerCount=1, historySize=0, 
eventTime=161874815, downTime=161874685, deviceId=6, source=0x1002, displayId=0, eventId=339506865 }
  07-02 17:31:33.685 D/TouchMonitorProxy( 4272): handleInputEvent MotionEvent:MotionEvent { action=ACTION_MOVE, actionButton=0, id[0]=0, x[0]=248.1875, 
y[0]=1418.75, toolType[0]=TOOL_TYPE_FINGER, buttonState=0, classification=NONE, metaState=0, flags=0x0, edgeFlags=0x0, pointerCount=1, historySize=0, 
eventTime=161874817, downTime=161874685, deviceId=6, source=0x1002, displayId=0, eventId=187638145 }
  07-02 17:31:33.688 D/TouchMonitorProxy( 4272): handleInputEvent MotionEvent:MotionEvent { action=ACTION_MOVE, actionButton=0, id[0]=0, x[0]=249.1875, 
y[0]=1416.75, toolType[0]=TOOL_TYPE_FINGER, buttonState=0, classification=NONE, metaState=0, flags=0x0, edgeFlags=0x0, pointerCount=1, historySize=0, 
eventTime=161874820, downTime=161874685, deviceId=6, source=0x1002, displayId=0, eventId=843943225 }
  07-02 17:31:33.691 D/TouchMonitorProxy( 4272): handleInputEvent MotionEvent:MotionEvent { action=ACTION_MOVE, actionButton=0, id[0]=0, x[0]=250.5625, 
y[0]=1412.25, toolType[0]=TOOL_TYPE_FINGER, buttonState=0, classification=NONE, metaState=0, flags=0x0, edgeFlags=0x0, pointerCount=1, historySize=0, 
eventTime=161874823, downTime=161874685, deviceId=6, source=0x1002, displayId=0, eventId=713181873 }
  07-02 17:31:33.694 D/TouchMonitorProxy( 4272): handleInputEvent MotionEvent:MotionEvent { action=ACTION_MOVE, actionButton=0, id[0]=0, x[0]=251.9375, 
y[0]=1409.0, toolType[0]=TOOL_TYPE_FINGER, buttonState=0, classification=NONE, metaState=0, flags=0x0, edgeFlags=0x0, pointerCount=1, historySize=0, 
eventTime=161874826, downTime=161874685, deviceId=6, source=0x1002, displayId=0, eventId=1017846405 }
  07-02 17:31:33.694 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.039920,0.000068, totalTime 0.039989 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:31:33.698 D/TouchMonitorProxy( 4272): handleInputEvent MotionEvent:MotionEvent { action=ACTION_MOVE, actionButton=0, id[0]=0, x[0]=253.0625, 
y[0]=1406.125, toolType[0]=TOOL_TYPE_FINGER, buttonState=0, classification=NONE, metaState=0, flags=0x0, edgeFlags=0x0, pointerCount=1, historySize=0, 
eventTime=161874828, downTime=161874685, deviceId=6, source=0x1002, displayId=0, eventId=438785767 }
  07-02 17:31:33.765 D/TouchMonitorProxy( 4272): handleInputEvent MotionEvent:MotionEvent { action=ACTION_MOVE, actionButton=0, id[0]=0, x[0]=258.6875, 
y[0]=1321.25, toolType[0]=TOOL_TYPE_FINGER, buttonState=0, classification=NONE, metaState=0, flags=0x0, edgeFlags=0x0, pointerCount=1, historySize=0, 
eventTime=161874898, downTime=161874685, deviceId=6, source=0x1002, displayId=0, eventId=573243276 }
  07-02 17:31:33.766 I/libPowerHal(  970): [PD] fpsgo update cmd:1408300 param:60
  07-02 17:31:33.768 D/TouchMonitorProxy( 4272): handleInputEvent MotionEvent:MotionEvent { action=ACTION_MOVE, actionButton=0, id[0]=0, x[0]=257.9375, 
y[0]=1315.375, toolType[0]=TOOL_TYPE_FINGER, buttonState=0, classification=NONE, metaState=0, flags=0x0, edgeFlags=0x0, pointerCount=1, historySize=0, 
eventTime=161874901, downTime=161874685, deviceId=6, source=0x1002, displayId=0, eventId=838540224 }
  07-02 17:31:33.771 D/TouchMonitorProxy( 4272): handleInputEvent MotionEvent:MotionEvent { action=ACTION_MOVE, actionButton=0, id[0]=0, x[0]=257.8125, 
y[0]=1309.375, toolType[0]=TOOL_TYPE_FINGER, buttonState=0, classification=NONE, metaState=0, flags=0x0, edgeFlags=0x0, pointerCount=1, historySize=0, 
eventTime=161874903, downTime=161874685, deviceId=6, source=0x1002, displayId=0, eventId=82608305 }
  07-02 17:31:33.773 D/TouchMonitorProxy( 4272): handleInputEvent MotionEvent:MotionEvent { action=ACTION_MOVE, actionButton=0, id[0]=0, x[0]=257.4375, 
y[0]=1303.75, toolType[0]=TOOL_TYPE_FINGER, buttonState=0, classification=NONE, metaState=0, flags=0x0, edgeFlags=0x0, pointerCount=1, historySize=0, 
eventTime=161874906, downTime=161874685, deviceId=6, source=0x1002, displayId=0, eventId=346949228 }
  07-02 17:31:33.774 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.039969,0.000091, totalTime 0.040062 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:31:33.777 D/TouchMonitorProxy( 4272): handleInputEvent MotionEvent:MotionEvent { action=ACTION_MOVE, actionButton=0, id[0]=0, x[0]=257.4375, 
y[0]=1298.0, toolType[0]=TOOL_TYPE_FINGER, buttonState=0, classification=NONE, metaState=0, flags=0x0, edgeFlags=0x0, pointerCount=1, historySize=0, 
eventTime=161874909, downTime=161874685, deviceId=6, source=0x1002, displayId=0, eventId=300869003 }
  07-02 17:31:33.779 D/TouchMonitorProxy( 4272): handleInputEvent MotionEvent:MotionEvent { action=ACTION_MOVE, actionButton=0, id[0]=0, x[0]=256.8125, 
y[0]=1291.25, toolType[0]=TOOL_TYPE_FINGER, buttonState=0, classification=NONE, metaState=0, flags=0x0, edgeFlags=0x0, pointerCount=1, historySize=0, 
eventTime=161874912, downTime=161874685, deviceId=6, source=0x1002, displayId=0, eventId=864687135 }
> 07-02 17:31:33.779 I/BufferQueueProducer( 1012): 
[SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity](BLAST)#19423](this:0xb40000731f5d6a18,id:-1,api:0,p:-1,c:1012) queueBuffer: fps=12.35 
dur=1214.88 max=382.36 min=16.09
  07-02 17:31:33.785 D/TouchMonitorProxy( 4272): handleInputEvent MotionEvent:MotionEvent { action=ACTION_MOVE, actionButton=0, id[0]=0, x[0]=256.8125, 
y[0]=1283.875, toolType[0]=TOOL_TYPE_FINGER, buttonState=0, classification=NONE, metaState=0, flags=0x0, edgeFlags=0x0, pointerCount=1, historySize=0, 
eventTime=161874914, downTime=161874685, deviceId=6, source=0x1002, displayId=0, eventId=321079466 }
  07-02 17:31:33.786 I/BufferQueueProducer( 1012): [VDS-studio.screen.sharing:0 SINK](this:0xb40000725f674618,id:-1,api:1,p:1012,c:1012) queueBuffer: 
fps=13.02 dur=1229.18 max=378.06 min=14.33
  07-02 17:31:33.786 D/TouchMonitorProxy( 4272): handleInputEvent MotionEvent:MotionEvent { action=ACTION_MOVE, actionButton=0, id[0]=0, x[0]=255.8125, 
y[0]=1275.375, toolType[0]=TOOL_TYPE_FINGER, buttonState=0, classification=NONE, metaState=0, flags=0x0, edgeFlags=0x0, pointerCount=1, historySize=0, 
eventTime=161874917, downTime=161874685, deviceId=6, source=0x1002, displayId=0, eventId=652654162 }
  07-02 17:31:33.787 D/TouchMonitorProxy( 4272): handleInputEvent MotionEvent:MotionEvent { action=ACTION_MOVE, actionButton=0, id[0]=0, x[0]=255.6875, 
y[0]=1266.75, toolType[0]=TOOL_TYPE_FINGER, buttonState=0, classification=NONE, metaState=0, flags=0x0, edgeFlags=0x0, pointerCount=1, historySize=0, 
eventTime=161874920, downTime=161874685, deviceId=6, source=0x1002, displayId=0, eventId=908561195 }
  07-02 17:31:33.791 D/TouchMonitorProxy( 4272): handleInputEvent MotionEvent:MotionEvent { action=ACTION_MOVE, actionButton=0, id[0]=0, x[0]=255.0625, 
y[0]=1258.375, toolType[0]=TOOL_TYPE_FINGER, buttonState=0, classification=NONE, metaState=0, flags=0x0, edgeFlags=0x0, pointerCount=1, historySize=0, 
eventTime=161874923, downTime=161874685, deviceId=6, source=0x1002, displayId=0, eventId=965475309 }
  07-02 17:31:33.793 D/TouchMonitorProxy( 4272): handleInputEvent MotionEvent:MotionEvent { action=ACTION_MOVE, actionButton=0, id[0]=0, x[0]=254.5625, 
y[0]=1249.875, toolType[0]=TOOL_TYPE_FINGER, buttonState=0, classification=NONE, metaState=0, flags=0x0, edgeFlags=0x0, pointerCount=1, historySize=0, 
eventTime=161874925, downTime=161874685, deviceId=6, source=0x1002, displayId=0, eventId=667979601 }
  07-02 17:31:33.797 D/TouchMonitorProxy( 4272): handleInputEvent MotionEvent:MotionEvent { action=ACTION_MOVE, actionButton=0, id[0]=0, x[0]=254.1875, 
y[0]=1241.375, toolType[0]=TOOL_TYPE_FINGER, buttonState=0, classification=NONE, metaState=0, flags=0x0, edgeFlags=0x0, pointerCount=1, historySize=0, 
eventTime=161874928, downTime=161874685, deviceId=6, source=0x1002, displayId=0, eventId=737735913 }
  07-02 17:31:33.800 D/TouchMonitorProxy( 4272): handleInputEvent MotionEvent:MotionEvent { action=ACTION_MOVE, actionButton=0, id[0]=0, x[0]=253.3125, 
y[0]=1230.875, toolType[0]=TOOL_TYPE_FINGER, buttonState=0, classification=NONE, metaState=0, flags=0x0, edgeFlags=0x0, pointerCount=1, historySize=0, 
eventTime=161874931, downTime=161874685, deviceId=6, source=0x1002, displayId=0, eventId=88053712 }
  07-02 17:31:33.802 D/TouchMonitorProxy( 4272): handleInputEvent MotionEvent:MotionEvent { action=ACTION_MOVE, actionButton=0, id[0]=0, x[0]=252.3125, 
y[0]=1219.625, toolType[0]=TOOL_TYPE_FINGER, buttonState=0, classification=NONE, metaState=0, flags=0x0, edgeFlags=0x0, pointerCount=1, historySize=0, 
eventTime=161874934, downTime=161874685, deviceId=6, source=0x1002, displayId=0, eventId=559534103 }
  07-02 17:31:33.805 D/TouchMonitorProxy( 4272): handleInputEvent MotionEvent:MotionEvent { action=ACTION_MOVE, actionButton=0, id[0]=0, x[0]=251.0625, 
y[0]=1208.25, toolType[0]=TOOL_TYPE_FINGER, buttonState=0, classification=NONE, metaState=0, flags=0x0, edgeFlags=0x0, pointerCount=1, historySize=0, 
eventTime=161874937, downTime=161874685, deviceId=6, source=0x1002, displayId=0, eventId=615123652 }
  07-02 17:31:33.807 D/TouchMonitorProxy( 4272): handleInputEvent MotionEvent:MotionEvent { action=ACTION_MOVE, actionButton=0, id[0]=0, x[0]=250.1875, 
y[0]=1196.75, toolType[0]=TOOL_TYPE_FINGER, buttonState=0, classification=NONE, metaState=0, flags=0x0, edgeFlags=0x0, pointerCount=1, historySize=0, 
eventTime=161874939, downTime=161874685, deviceId=6, source=0x1002, displayId=0, eventId=890237039 }
  07-02 17:31:33.810 D/TouchMonitorProxy( 4272): handleInputEvent MotionEvent:MotionEvent { action=ACTION_MOVE, actionButton=0, id[0]=0, x[0]=248.5625, 
y[0]=1184.625, toolType[0]=TOOL_TYPE_FINGER, buttonState=0, classification=NONE, metaState=0, flags=0x0, edgeFlags=0x0, pointerCount=1, historySize=0, 
eventTime=161874942, downTime=161874685, deviceId=6, source=0x1002, displayId=0, eventId=897968133 }
  07-02 17:31:33.813 D/TouchMonitorProxy( 4272): handleInputEvent MotionEvent:MotionEvent { action=ACTION_MOVE, actionButton=0, id[0]=0, x[0]=246.4375, 
y[0]=1171.5, toolType[0]=TOOL_TYPE_FINGER, buttonState=0, classification=NONE, metaState=0, flags=0x0, edgeFlags=0x0, pointerCount=1, historySize=0, 
eventTime=161874945, downTime=161874685, deviceId=6, source=0x1002, displayId=0, eventId=822095109 }
  07-02 17:31:33.816 D/TouchMonitorProxy( 4272): handleInputEvent MotionEvent:MotionEvent { action=ACTION_MOVE, actionButton=0, id[0]=0, x[0]=243.8125, 
y[0]=1158.75, toolType[0]=TOOL_TYPE_FINGER, buttonState=0, classification=NONE, metaState=0, flags=0x0, edgeFlags=0x0, pointerCount=1, historySize=0, 
eventTime=161874948, downTime=161874685, deviceId=6, source=0x1002, displayId=0, eventId=694305860 }
  07-02 17:31:33.818 D/TouchMonitorProxy( 4272): handleInputEvent MotionEvent:MotionEvent { action=ACTION_MOVE, actionButton=0, id[0]=0, x[0]=241.4375, 
y[0]=1146.625, toolType[0]=TOOL_TYPE_FINGER, buttonState=0, classification=NONE, metaState=0, flags=0x0, edgeFlags=0x0, pointerCount=1, historySize=0, 
eventTime=161874950, downTime=161874685, deviceId=6, source=0x1002, displayId=0, eventId=780150616 }
  07-02 17:31:33.818 D/C2MtkComponentStore(  937): setDmaBufUsage: usage 5, flags 0, heapName mtk_mm for decoder.
  07-02 17:31:33.821 D/TouchMonitorProxy( 4272): handleInputEvent MotionEvent:MotionEvent { action=ACTION_MOVE, actionButton=0, id[0]=0, x[0]=239.3125, 
y[0]=1135.125, toolType[0]=TOOL_TYPE_FINGER, buttonState=0, classification=NONE, metaState=0, flags=0x0, edgeFlags=0x0, pointerCount=1, historySize=0, 
eventTime=161874953, downTime=161874685, deviceId=6, source=0x1002, displayId=0, eventId=651879459 }
  07-02 17:31:33.823 D/TouchMonitorProxy( 4272): handleInputEvent MotionEvent:MotionEvent { action=ACTION_MOVE, actionButton=0, id[0]=0, x[0]=235.5625, 
y[0]=1123.5, toolType[0]=TOOL_TYPE_FINGER, buttonState=0, classification=NONE, metaState=0, flags=0x0, edgeFlags=0x0, pointerCount=1, historySize=0, 
eventTime=161874956, downTime=161874685, deviceId=6, source=0x1002, displayId=0, eventId=409024261 }
  07-02 17:31:35.005 I/TranTele/TranPhoneInterfaceManager( 2620): TTC - onSignalStrengthsChanged
  07-02 17:31:35.006 D/TranSignalStrengthComponentImpl(16756): [LTE] dbm: -90
  07-02 17:31:35.006 D/TranPhoneSwitcher( 2620): getNetworkType: 4G
  07-02 17:31:35.006 I/TranPhoneSwitcher( 2620): mDefaultsign:4subid :2
  07-02 17:31:35.009 D/TranSignalStrengthComponentImpl(30413): [LTE] dbm: -90
  07-02 17:31:35.010 D/TranSignalStrengthComponentImpl(30413): [LTE] dbm: -90
  07-02 17:31:35.083 I/mtkpower_client( 1080): perf_lock_rel, hdl:55383, tid:1080
  07-02 17:31:35.084 I/libPowerHal(  970): [PD] fpsgo update cmd:1408300 param:60
> 07-02 17:31:35.095 I/BufferQueueProducer( 1012): 
[SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity](BLAST)#19423](this:0xb40000731f5d6a18,id:-1,api:0,p:-1,c:1012) queueBuffer: fps=31.93 
dur=1315.31 max=565.98 min=16.11
  07-02 17:31:35.101 I/BufferQueueProducer( 1012): [VDS-studio.screen.sharing:0 SINK](this:0xb40000725f674618,id:-1,api:1,p:1012,c:1012) queueBuffer: 
fps=31.94 dur=1315.03 max=566.27 min=14.89
  07-02 17:31:35.151 I/hwcomposer(  935): [HWCDisplay] [Display_0 (type:1)] fps:27.548525,dur:1016.39,max:566.20,min:15.35  
  07-02 17:31:35.174 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000000,0.040063,0.000030, totalTime 0.040093 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:31:35.192 I/NearbySharing( 4458): Network state changed: NetworkState(isRestricted=false, isOnline=true, isCongested=false, isMetered=false, 
isWifiConnected=true)
  07-02 17:31:35.241 V/Hiber/hiber( 1698): unfreeze from hiber: (4,-1,-1,-1,10314), rpcName: PKG, code: -1, reason:packet
  07-02 17:31:35.243 I/Hiber/stateManager( 1698): unfreeze uid: 10314 com.twitter.android pids:[18664]  reason:packet   cpninfo:TRANSACTION_-1 
costTime=2ms ,last freeze 24s ago
  07-02 17:31:35.243 I/Hiber/appStateMachine( 1698): uid=10314, pkg=com.twitter.android, transition from Frozen to Running, reason=packet
  07-02 17:31:35.243 I/Hiber/appStateMachine( 1698): uid:10314 exit FrozenState
  07-02 17:31:35.243 I/Hiber/proxyManager( 1698): up_service: 10314
  07-02 17:31:35.243 I/Hiber/proxyManager( 1698): un_job: 10314
  07-02 17:31:35.244 D/Hiber/JobExtImpl( 1698): un_job=JobStatus{d92b4db androidx.work.systemjobscheduler:u0a314/5767 
@androidx.work.systemjobscheduler@com.twitter.android/androidx.work.impl.background.systemjob.SystemJobService u=0 s=10314 TIME=+2d22h25m33s213ms:none NET 
satisfied:0x13600000 unsatisfied:0x80000000}for uid=10314
  07-02 17:31:35.244 D/Hiber/proxyWakeLock( 1698): remove uid: 10314 wiht all pids from wakelockUidInfo list
  07-02 17:31:35.244 D/Hiber/JobExtImpl( 1698): un_job=JobStatus{c8dc5ed androidx.work.systemjobscheduler:u0a314/6013 
@androidx.work.systemjobscheduler@com.twitter.android/androidx.work.impl.background.systemjob.SystemJobService u=0 s=10314 TIME=+7h56m39s692ms:none 
CHARGING satisfied:0x3600003 unsatisfied:0x80000000}for uid=10314
  07-02 17:31:35.245 D/Hiber/JobExtImpl( 1698): un_job=JobStatus{b44b190 androidx.work.systemjobscheduler:u0a314/5985 
@androidx.work.systemjobscheduler@com.twitter.android/androidx.work.impl.background.systemjob.SystemJobService u=0 s=10314 TIME=+20h13m25s921ms:none 
satisfied:0x3600000 unsatisfied:0x80000000}for uid=10314
  07-02 17:31:35.245 D/Hiber/JobExtImpl( 1698): un_job=JobStatus{24167ee androidx.work.systemjobscheduler:u0a314/6011 
@androidx.work.systemjobscheduler@com.twitter.android/androidx.work.impl.background.systemjob.SystemJobService u=0 s=10314 TIME=+20h13m28s90ms:none NET 
satisfied:0x13600000 unsatisfied:0x80000000}for uid=10314
  07-02 17:31:35.246 D/Hiber/JobExtImpl( 1698): unProxyJobs leave, uid=10314 discard=false
  07-02 17:31:35.246 D/Hiber/alarmManagerServiceExtImpl( 1698): unproxyAlarms leave, uid=10314, packageName=null
  07-02 17:31:35.246 I/Hiber/proxyManager( 1698): up_sensor: uid=10314, pkgName=com.twitter.android
  07-02 17:31:35.683 I/mtkpower_client( 1080): perf_lock_acq, hdl:0, dur:0, num:2, tid:1080
  07-02 17:31:35.684 I/mtkpower_client( 1080): ret_hdl:55391
  07-02 17:31:35.684 I/FPSGO   ( 1080): perfLockAcq hdl:55391
  07-02 17:31:35.694 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000000,0.040009,0.000264, totalTime 0.040273 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:31:35.744 D/CompatChangeReporter( 1698): Compat change id reported: 161145287; UID 1000; state: ENABLED
  07-02 17:31:35.755 W/ActivityManager( 1698): Receiver with filter android.content.IntentFilter@ffb84b8 already registered for pid 1698, callerPackage is 
android
  07-02 17:31:35.757 W/ActivityManager( 1698): Receiver with filter android.content.IntentFilter@ed7c291 already registered for pid 1698, callerPackage is 
android
  07-02 17:31:35.778 W/ProxyAndroidLoggerBackend( 5782): Too many Flogger logs received before configuration. Dropping old logs.
> 07-02 17:31:35.855 E/BLASTBufferQueue(11190): [SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity]#1](f:1,a:6) acquireNextBufferLocked: 
Can't acquire next buffer. Already acquired max frames 6 max:4 + 2
> 07-02 17:31:35.865 E/BLASTBufferQueue(11190): [SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity]#1](f:1,a:6) acquireNextBufferLocked: 
Can't acquire next buffer. Already acquired max frames 6 max:4 + 2
> 07-02 17:31:35.881 E/BLASTBufferQueue(11190): [SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity]#1](f:1,a:6) acquireNextBufferLocked: 
Can't acquire next buffer. Already acquired max frames 6 max:4 + 2
  07-02 17:31:35.882 D/BufferPoolAccessor2.0(11425): bufferpool2 0xb4000072a18c2a98 : 66(1052558 size) total buffers - 1(12870 size) used buffers - 
736/1593 (recycle/alloc) - 905/1592 (fetch/transfer)
  07-02 17:31:35.894 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.039864,0.000124, totalTime 0.039989 > logTimeout 
0.022000 TIMEOUT!!
> 07-02 17:31:35.898 E/BLASTBufferQueue(11190): [SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity]#1](f:1,a:6) acquireNextBufferLocked: 
Can't acquire next buffer. Already acquired max frames 6 max:4 + 2
> 07-02 17:31:35.915 E/BLASTBufferQueue(11190): [SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity]#1](f:1,a:6) acquireNextBufferLocked: 
Can't acquire next buffer. Already acquired max frames 6 max:4 + 2
> 07-02 17:31:35.932 E/BLASTBufferQueue(11190): [SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity]#1](f:1,a:6) acquireNextBufferLocked: 
Can't acquire next buffer. Already acquired max frames 6 max:4 + 2
  07-02 17:31:35.947 I/libPerfCtl(  970): xgfGetFPS pid:2380 fps:-1
  07-02 17:31:35.947 I/AppThermalMode(  970): [perfNotifyThermalState] hdl:0
  07-02 17:31:35.947 I/AppThermalMode(  970): [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: 60,fg->pid:11190
  07-02 17:31:35.947 I/AppThermalMode(  970): [perfNotifyThermalState] appThermalIdx -1:
  07-02 17:31:35.947 I/libPerfCtl(  970): xgfGetFPS pid:11190 fps:56
  07-02 17:31:35.947 I/AppThermalMode(  970): [perfNotifyThermalState] hdl:0
  07-02 17:31:35.947 I/AppThermalMode(  970): [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: 60,fg->pid:11190
  07-02 17:31:35.947 I/AppThermalMode(  970): [perfNotifyThermalState] appThermalIdx -1:
> 07-02 17:31:35.948 E/BLASTBufferQueue(11190): [SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity]#1](f:1,a:6) acquireNextBufferLocked: 
Can't acquire next buffer. Already acquired max frames 6 max:4 + 2
  07-02 17:31:35.957 I/Hiber/importantScene( 1698): widget: packageName=com.facebook.katana
  07-02 17:31:35.957 I/Hiber/appStateMachine( 1698): uid:10254, pkg=com.facebook.katana  can't transition from R to F ,importantcase is : widget
  07-02 17:31:35.964 I/TranWifiSmartAssistantController( 1698): start current network monitor 
  07-02 17:31:35.964 I/WifiService( 1698): getConnectionInfo uid=1000
  07-02 17:31:35.964 V/WifiService( 1698): Clearing REDACT_FOR_LOCAL_MAC_ADDRESS for android(uid=1000)
  07-02 17:31:35.964 V/WifiService( 1698): Clearing REDACT_FOR_NETWORK_SETTINGS for android(uid=1000)
  07-02 17:31:35.964 V/WifiService( 1698): Clearing REDACT_FOR_ACCESS_FINE_LOCATION for android(uid=1000)
  07-02 17:31:35.965 I/TranWifiSmartAssistantController( 1698): userIgnored :false isScoredCurrentNetwork :false
  07-02 17:31:35.965 I/TranWifiSmartAssistantController( 1698): mCurrentNetwork :133 SSID :"TAUFIKKOPIBATOH@WIFI.ID"
  07-02 17:31:35.966 I/WifiNetworkQuality( 1698): current rssi is sufficient
  07-02 17:31:35.967 I/TranWifiSmartAssistantController( 1698): mNoCandidateCount : -1
  07-02 17:31:35.967 I/TranWifiSmartAssistantController( 1698): ====>>rssi :-55
  07-02 17:31:35.983 I/mtkpower_client( 1080): perf_lock_acq, hdl:0, dur:30000, num:2, tid:1080
  07-02 17:31:35.984 I/mtkpower_client( 1080): ret_hdl:55392
  07-02 17:31:36.323 I/android.hardware.thermal@2.0-service.mtk(  940): fill_temperatures filterType1 name: SKIN type: SKIN throttlingStatus: NONE value: 
41.529 ret_temps size 0
  07-02 17:31:36.433 I/mtkpower_client( 1080): perf_lock_rel, hdl:55392, tid:1080
  07-02 17:31:36.434 I/libPowerHal(  970): [PD] fpsgo update cmd:1408300 param:0
> 07-02 17:31:36.444 I/BufferQueueProducer( 1012): 
[SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity](BLAST)#19423](this:0xb40000731f5d6a18,id:-1,api:0,p:-1,c:1012) queueBuffer: fps=37.06 
dur=1349.06 max=449.83 min=15.08
  07-02 17:31:36.453 I/BufferQueueProducer( 1012): [VDS-studio.screen.sharing:0 SINK](this:0xb40000725f674618,id:-1,api:1,p:1012,c:1012) queueBuffer: 
fps=36.98 dur=1352.11 max=448.77 min=13.29
  07-02 17:31:36.454 I/hwcomposer(  935): [HWCDisplay] [Display_0 (type:1)] fps:36.054150,dur:1303.59,max:448.83,min:12.85  
  07-02 17:31:36.467 I/mtkpower_client( 1080): perf_lock_acq, hdl:0, dur:30000, num:2, tid:1080
  07-02 17:31:36.468 I/mtkpower_client( 1080): ret_hdl:55393
  07-02 17:31:36.522 D/EventHub( 1698): getevents BTN_TOUCH DOWN
  07-02 17:31:36.524 D/AppFlingMode(  970): [CheckAppFlingHint] 25 com.erbete.customer 60
  07-02 17:31:36.526 D/TextSelection(11190): onUseCache cache=false
  07-02 17:31:36.527 D/TouchMonitorProxy( 4272): handleInputEvent MotionEvent:MotionEvent { action=ACTION_DOWN, actionButton=0, id[0]=0, x[0]=307.75, 
y[0]=1436.5, toolType[0]=TOOL_TYPE_FINGER, buttonState=0, classification=NONE, metaState=0, flags=0x0, edgeFlags=0x0, pointerCount=1, historySize=0, 
eventTime=161877655, downTime=161877655, deviceId=6, source=0x1002, displayId=0, eventId=673664628 }
  07-02 17:31:36.527 D/TouchSliderConsumer( 4503): onInputEvent : ACTION_DOWN
  07-02 17:31:36.527 D/TouchSliderConsumer( 4503): consumeTouchEvent : 307.75 1436.5 RectF(1035.0, 294.0, 1083.0, 660.0) 
  07-02 17:31:36.529 D/ScreenCapControl( 4272): onFingerDown: 1436, 108, 120
  07-02 17:31:36.534 D/TriggerService( 4219): trigger service is running
  07-02 17:31:36.603 E/MtkPhoneIntfMgrEx( 2620): MainThreadHandler.handleMessage : 3
  07-02 17:31:36.605 D/MtkPhoneIntfMgrEx( 2620): EVENT_AT_URC_IND(0) AT(prefix): +CSCON
  07-02 17:31:36.609 I/libPowerHal(  970): [PD] MTKPOWER_HINT_APP_TOUCH update cmd:3408b00 param:0
  07-02 17:31:36.609 D/TRNS_PluginBase( 6515): EVENT_AT_COMMAND_URC: [0, +CSCON: 1,7,3]
  07-02 17:31:36.610 D/UrcEventAnalyzer( 6515): Illegal dmf module id.
  07-02 17:31:36.609 D/TouchMonitorProxy( 4272): handleInputEvent MotionEvent:MotionEvent { action=ACTION_UP, actionButton=0, id[0]=0, x[0]=307.75, 
y[0]=1436.5, toolType[0]=TOOL_TYPE_FINGER, buttonState=0, classification=NONE, metaState=0, flags=0x0, edgeFlags=0x0, pointerCount=1, historySize=0, 
eventTime=161877740, downTime=161877655, deviceId=6, source=0x1002, displayId=0, eventId=649159506 }
  07-02 17:31:36.634 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.039488,0.000050, totalTime 0.039539 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:31:36.641 I/flutter (11190): STEP47D_RESTAURANT_DETAIL_ARGUMENTS: type=_Map<String, VendorModel> value={vendorModel: Instance of 'VendorModel'}
  07-02 17:31:36.641 I/flutter (11190): STEP47D_RESTAURANT_DETAIL_VENDOR_ARG: id=aceh_clone_6285ddbfd9598_0hB8mx1z1DeNR9CAzXfh title=LA Parrilla 
zone=q8OOxNm1zgyVqggkCibX
  07-02 17:31:36.660 I/BufferQueueProducer( 1012): [StatusBar#97](this:0xb40000731f578a88,id:-1,api:0,p:-1,c:1012) queueBuffer: fps=0.20 dur=5011.44 
max=5011.44 min=5011.44
  07-02 17:31:36.680 I/flutter (11190): 2026-07-02 00:00:00.000
  07-02 17:31:36.680 I/flutter (11190): 2026-07-02 23:59:00.000
  07-02 17:31:36.681 I/flutter (11190): 2026-07-02 17:31:36.680954
  07-02 17:31:36.682 D/TLinkBrush_DATA( 2620): [TranSST0] checkOos -- state = 0
> 07-02 17:31:36.683 I/flutter (11190): STEP47D_RESTAURANT_DETAIL_BEFORE_PRODUCT_LOAD: vendorId=aceh_clone_6285ddbfd9598_0hB8mx1z1DeNR9CAzXfh title=LA 
Parrilla
  07-02 17:31:36.683 I/TranTele/TranPhoneInterfaceManager( 2620): [getPTWhiteList]
> 07-02 17:31:36.684 I/flutter (11190): STEP47D_GET_PRODUCT_BY_VENDOR_ID_START: vendorId=aceh_clone_6285ddbfd9598_0hB8mx1z1DeNR9CAzXfh 
selectedFoodType=Delivery collection=vendor_products
  07-02 17:31:36.685 I/TranTele/TranPhoneInterfaceManager( 2620): [getPtPolicyforSlotIndex]
  07-02 17:31:36.685 I/flutter (11190): STEP47D_RESTAURANT_DETAIL_ONINIT_ENTER
  07-02 17:31:36.686 D/BatteryService( 1698): widetemperaturebatteryburn check uevent: {SUBSYSTEM=xt_idletimer, UID=1000, SEQNUM=18112, ACTION=change, 
INTERFACE=102, STATE=active, TIME_NS=178878166561863, DEVPATH=/devices/virtual/xt_idletimer/timers}
  07-02 17:31:36.686 D/BatteryService( 1698): widetemperaturebatteryburn PORT_STATE no availd
  07-02 17:31:36.731 I/TranTele/TranPhoneInterfaceManager( 2620): TTC - onServiceStateChanged
  07-02 17:31:36.733 I/TranTele/ReliableDetectionController( 2620): getDeviceState 4
  07-02 17:31:36.735 D/CallbackProxy( 6515): [onServiceStateChanged]
  07-02 17:31:36.739 W/ContextImpl( 1698): Calling a method in the system process without a qualified user: 
android.app.ContextImpl.sendBroadcastMultiplePermissions:1342 android.content.Context.sendBroadcastMultiplePermissions:2524 
com.android.server.TelephonyRegistry.broadcastServiceStateChanged:3701 com.android.server.TelephonyRegistry.notifyServiceStateForPhoneId:1763 
com.android.internal.telephony.ITelephonyRegistry$Stub.onTransact:546 
  07-02 17:31:36.742 W/ContextImpl( 1698): Calling a method in the system process without a qualified user: 
android.app.ContextImpl.sendBroadcastMultiplePermissions:1382 com.android.server.TelephonyRegistry.broadcastServiceStateChanged:3706 
com.android.server.TelephonyRegistry.notifyServiceStateForPhoneId:1763 com.android.internal.telephony.ITelephonyRegistry$Stub.onTransact:546 
android.os.Binder.execTransactInternal:1534 
  07-02 17:31:36.744 I/TranTele/TranRatStallController( 2620): [onServiceStateChanged] Not support or trueOning return.
  07-02 17:31:36.745 D/TranSnifferController[0]( 2620): onServiceStateChanged: subId = 1, state = 0
  07-02 17:31:36.747 W/ContextImpl( 1698): Calling a method in the system process without a qualified user: 
android.app.ContextImpl.sendBroadcastMultiplePermissions:1382 com.android.server.TelephonyRegistry.broadcastServiceStateChanged:3715 
com.android.server.TelephonyRegistry.notifyServiceStateForPhoneId:1763 com.android.internal.telephony.ITelephonyRegistry$Stub.onTransact:546 
android.os.Binder.execTransactInternal:1534 
  07-02 17:31:36.748 I/SignalPredictController( 2620): [onServiceStateChanged] ignore slotId: 0, as it's not default data
  07-02 17:31:36.749 I/TranElevatorModeForCarrierController( 2620): [isElevatorModeForCarrierDisable] disable0
  07-02 17:31:36.749 I/TranTele/DynamicSarCtl( 2620): [DynamicSarHandler] msg.what=33108
  07-02 17:31:36.749 I/TranTele/DynamicSarCtl( 2620): [orgStateInspection] return
  07-02 17:31:36.750 D/TranElevatorModeForCarrierController( 2620): [onServiceStateChanged] subId:1,isDisable:false
  07-02 17:31:36.750 D/TranElevatorModeForCarrierController( 2620): [isContains] value:51089
  07-02 17:31:36.765 D/VoLTE_SIPTX( 1551): [SIPTX-IO] Recv SIP (2407:0:0:45::50d: 9959  )[131073:15466566] <== { MESSAGE }
  07-02 17:31:36.769 I/VoLTE_TRANS( 1551): NITS, conn_id:131073, ts_id:49, ts_state:TRYING (module/volte//volte_stack/src/sip/sip_transaction_sni.c:119)
  07-02 17:31:36.770 D/CAResetManager[0]( 2620): onServiceStateChanged - mSpecialPlmn = 510891
  07-02 17:31:36.772 I/VoLTE_DISP( 1551): Found Normal ua, ua:0xf0a03e78, ua->type:303301890 (module/volte//volte_stack/src/dispatcher/rule.c:1427)
  07-02 17:31:36.775 I/VoLTE_  ( 1564): IMS ICD SIP message record: result=[0], direction=[1], type=[0], SIP method=[5], SIP response code=[0], sip 
len=[792] (module/volte//volte_ua/src/service/ims_icd_ua.c:58)
  07-02 17:31:36.776 I/VoLTE_Auto_Testing( 1564): [0][sms] recv_request/5/1
  07-02 17:31:36.777 I/VoLTE_SMS( 1564): [SysMsg] SMS[0]: rp_mti=[1], request_id=[0x17] (module/volte//volte_ua/src/sms/sms.c:452)
  07-02 17:31:36.777 I/VoLTE_Auto_Testing( 1564): [0][sms] event_send/0/23011/60/1
> 07-02 17:31:36.780 I/VoLTE IMCB( 1570): {{{{[process_msg] msg_id=900001(0x000DBBA1), dst=UA[3], IMCB_IMC_HEADER_FILE_VERNO=8f, 
MSG_ID_IMC_IN_BEGIN=100000, IMC_FEATURE_BITMAP=0x3 @0#184
> 07-02 17:31:36.780 I/VoLTE IMCB( 1570): Pure Mesage Send dest=IMCB[2], msg_id=100003(0x000186A3), len=3456, IMCB_IMC_HEADER_FILE_VERNO=8f, 
MSG_ID_IMC_IN_BEGIN=100000, IMC_FEATURE_BITMAP=0x3 imcb_send_to_COMM()@0#242
> 07-02 17:31:36.780 I/VoLTE IMCB( 1570): EndofMessage process_msg()@0#232}}}}
> 07-02 17:31:36.781 I/VoLTE IMCB( 1570): {{{{[process_msg] msg_id=27001(0x00006979), dst=UA[3], IMCB_IMC_HEADER_FILE_VERNO=8f, 
MSG_ID_IMC_IN_BEGIN=100000, IMC_FEATURE_BITMAP=0x3 @0#184
> 07-02 17:31:36.781 I/VoLTE IMCB( 1570): ENTER ua_imcb_icd_ims_record_ind_handler()@0#4681
> 07-02 17:31:36.781 I/VoLTE IMCB( 1570): Pure Mesage Send dest=IMCB[2], msg_id=100003(0x000186A3), len=3456, IMCB_IMC_HEADER_FILE_VERNO=8f, 
MSG_ID_IMC_IN_BEGIN=100000, IMC_FEATURE_BITMAP=0x3 imcb_send_to_COMM()@0#242
> 07-02 17:31:36.781 I/VoLTE IMCB( 1570): EndofMessage process_msg()@0#232}}}}
> 07-02 17:31:36.782 I/VoLTE IMCB( 1570): {{{{[process_msg] msg_id=23011(0x000059E3), dst=UA[3], IMCB_IMC_HEADER_FILE_VERNO=8f, 
MSG_ID_IMC_IN_BEGIN=100000, IMC_FEATURE_BITMAP=0x3 @0#184
> 07-02 17:31:36.782 I/VoLTE IMCB( 1570): ENTER ua_imcb_ind_sms_received_handler()@0#3589
> 07-02 17:31:36.782 I/VoLTE IMCB( 1570): ENTER imcb_send_imc_recv_sms_req()@0#2686
> 07-02 17:31:36.782 I/VoLTE IMCB( 1570): Pure Mesage Send dest=IMCB[2], msg_id=100003(0x000186A3), len=3456, IMCB_IMC_HEADER_FILE_VERNO=8f, 
MSG_ID_IMC_IN_BEGIN=100000, IMC_FEATURE_BITMAP=0x3 imcb_send_to_COMM()@0#242
> 07-02 17:31:36.782 I/VoLTE IMCB( 1570): EndofMessage process_msg()@0#232}}}}
  07-02 17:31:36.788 I/VoLTE IMCB-CM( 1570): receive the nessage from IMC #72
> 07-02 17:31:36.790 I/VoLTE IMCB-0( 1570): {{{{[process_msg] msg_id=100044(0x000186CC), dst=IMCB[2], IMCB_IMC_HEADER_FILE_VERNO=8f, 
MSG_ID_IMC_IN_BEGIN=100000, IMC_FEATURE_BITMAP=0x3 @0#184
> 07-02 17:31:36.790 I/VoLTE IMCB-0( 1570): ENTER imcb_imc_recv_sms_cnf_handler()@0#5585
> 07-02 17:31:36.790 I/VoLTE IMCB-0( 1570): from rat type = 3, to ua rat = 12 imcb_rat_conv_to_ua()@0#153
> 07-02 17:31:36.790 I/VoLTE IMCB-0( 1570): from rat type = 3, to ua rat = 12 @0#153
> 07-02 17:31:36.790 I/VoLTE IMCB-0( 1570): Pure Mesage Send dest=UA[3], msg_id=10013(0x0000271D), len=192, IMCB_IMC_HEADER_FILE_VERNO=8f, 
MSG_ID_IMC_IN_BEGIN=100000, IMC_FEATURE_BITMAP=0x3 imcb_send_to_COMM()@0#242
> 07-02 17:31:36.790 I/VoLTE IMCB-0( 1570): ENTER imcb_send_ua_rat_change()@0#3503
> 07-02 17:31:36.790 I/VoLTE IMCB-0( 1570): from rat type = 3, to ua rat = 12 imcb_rat_conv_to_ua()@0#153
> 07-02 17:31:36.790 I/VoLTE IMCB-0( 1570): Pure Mesage Send dest=UA[3], msg_id=10012(0x0000271C), len=160, IMCB_IMC_HEADER_FILE_VERNO=8f, 
MSG_ID_IMC_IN_BEGIN=100000, IMC_FEATURE_BITMAP=0x3 imcb_send_to_COMM()@0#242}}}}
> 07-02 17:31:36.790 I/VoLTE IMCB( 1570): {{{{Pure Mesage Send dest=UA[3], msg_id=13003(0x000032CB), len=128, IMCB_IMC_HEADER_FILE_VERNO=8f, 
MSG_ID_IMC_IN_BEGIN=100000, IMC_FEATURE_BITMAP=0x3 @0#242
> 07-02 17:31:36.790 I/VoLTE IMCB( 1570): EndofMessage process_msg()@0#232}}}}
  07-02 17:31:36.790 I/VoLTE_Auto_Testing( 1564): [0][sms] event_recv/recv_cnf/0/60/200
  07-02 17:31:36.790 I/VoLTE_REG( 1551): Reg[0] mtu = (0) (module/volte//volte_stack/src/reg/reg.c:15925)
  07-02 17:31:36.790 I/VoLTE_REG( 1551): volte_reg_handle_rat_change, reg[0] = Registered, old net type = 12, new net type = 12 
(module/volte//volte_stack/src/reg/reg.c:8835)
  07-02 17:31:36.791 I/VoLTE_DISP( 1551): Dispatcher flag = 2, Send the Msg to UA 0, msg->type = 96004 
(module/volte//volte_stack/src/dispatcher/dispatcher.c:1925)
  07-02 17:31:36.791 I/VoLTE_DISP( 1551): Dispatcher flag = 2, Send the Msg to UA 1, msg->type = 96004 
(module/volte//volte_stack/src/dispatcher/dispatcher.c:1925)
  07-02 17:31:36.791 I/VoLTE_DISP( 1551): Dispatcher flag = 2, Send the Msg to UA 2, msg->type = 96004 
(module/volte//volte_stack/src/dispatcher/dispatcher.c:1925)
  07-02 17:31:36.791 I/VoLTE_DISP( 1551): Dispatcher flag = 2, Send the Msg to UA 3, msg->type = 96004 
(module/volte//volte_stack/src/dispatcher/dispatcher.c:1925)
  07-02 17:31:36.791 I/VoLTE_DISP( 1551): Dispatcher flag = 2, Send the Msg to UA 4, msg->type = 96004 
(module/volte//volte_stack/src/dispatcher/dispatcher.c:1925)
  07-02 17:31:36.791 I/VoLTE_DISP( 1551): Dispatcher flag = 2, Send the Msg to UA 5, msg->type = 96004 
(module/volte//volte_stack/src/dispatcher/dispatcher.c:1925)
  07-02 17:31:36.791 I/VoLTE_DISP( 1551): Dispatcher flag = 2, Send the Msg to UA 6, msg->type = 96004 
(module/volte//volte_stack/src/dispatcher/dispatcher.c:1925)
  07-02 17:31:36.791 I/VoLTE_DISP( 1551): Dispatcher flag = 2, Send the Msg to UA 7, msg->type = 96004 
(module/volte//volte_stack/src/dispatcher/dispatcher.c:1925)
  07-02 17:31:36.791 I/VoLTE_DISP( 1551): Dispatcher flag = 2, Send the Msg to UA 8, msg->type = 96004 
(module/volte//volte_stack/src/dispatcher/dispatcher.c:1925)
  07-02 17:31:36.791 I/VoLTE_DISP( 1551): Dispatcher flag = 2, Send the Msg to UA 9, msg->type = 96004 
(module/volte//volte_stack/src/dispatcher/dispatcher.c:1925)
  07-02 17:31:36.791 I/VoLTE_Auto_Testing( 1564): [0][sms] send_response/200/5/1
  07-02 17:31:36.791 I/VoLTE_DISP( 1551): use the sip assign tcp conn(131073) (module/volte//volte_stack/src/dispatcher/dispatcher.c:918)
  07-02 17:31:36.791 I/VoLTE_SMS( 1564): SMS[0-3b0000] delete the sms item, request_id = 60 (module/volte//volte_ua/src/sms/sms.c:507)
  07-02 17:31:36.791 I/VoLTE_SIPTX( 1551): tcp_client,conn_id:20001, channel[0] = 0xefb45ad4, transport = 2, soc_client_idx = d80036, state = 4 
(module/volte//volte_stack/src/sip/sip_transport.c:1947)
  07-02 17:31:36.791 I/VoLTE_Stack( 1551): =============> CCM --> SIP Tx => conn_id : 20001/10000, request_id : 0x31, sipmsg magic : 690, method: 200 
(module/volte//volte_stack/src/sip/sip_app.c:439)
  07-02 17:31:36.791 I/VoLTE_SIPTX( 1551): use the regular ipsec server channel, index = 0, data_req->soc_idx = 15466566/589832 
(module/volte//volte_stack/src/sip/sip_transport.c:3841)
  07-02 17:31:36.791 I/VoLTE_SIPTX( 1551): No need to add timestamp to pcni (module/volte//volte_stack/src/sip/sip_transport.c:321)
  07-02 17:31:36.792 D/VoLTE_SIPTX( 1551): [SIPTX-IO] Send SIP (2407:0:0:45::50d: 9959  )[131073:15466566] ==> { SIP/2.0 200 OK }
  07-02 17:31:36.792 I/VoLTE_Auto_Testing( 1564): [0][call] event/send/list_call_cnf/0
  07-02 17:31:36.792 I/VoLTE_  ( 1564): IMS ICD SIP message record: result=[0], direction=[0], type=[1], SIP method=[5], SIP response code=[200], sip 
len=[510] (module/volte//volte_ua/src/service/ims_icd_ua.c:58)
  07-02 17:31:36.793 I/VoLTE_REG( 1551): get VOLTE_CNF_SIPTX_REG_CALL_QUERY (module/volte//volte_stack/src/reg/reg.c:15227)
  07-02 17:31:36.793 I/VoLTE_REG( 1551): remaining call = (0) (module/volte//volte_stack/src/reg/reg.c:1048)
> 07-02 17:31:36.793 I/VoLTE IMCB( 1570): {{{{[process_msg] msg_id=900001(0x000DBBA1), dst=UA[3], IMCB_IMC_HEADER_FILE_VERNO=8f, 
MSG_ID_IMC_IN_BEGIN=100000, IMC_FEATURE_BITMAP=0x3 @0#184
> 07-02 17:31:36.793 I/VoLTE IMCB( 1570): Pure Mesage Send dest=IMCB[2], msg_id=100003(0x000186A3), len=3456, IMCB_IMC_HEADER_FILE_VERNO=8f, 
MSG_ID_IMC_IN_BEGIN=100000, IMC_FEATURE_BITMAP=0x3 imcb_send_to_COMM()@0#242
> 07-02 17:31:36.793 I/VoLTE IMCB( 1570): EndofMessage process_msg()@0#232}}}}
> 07-02 17:31:36.793 I/VoLTE IMCB( 1570): {{{{[process_msg] msg_id=27001(0x00006979), dst=UA[3], IMCB_IMC_HEADER_FILE_VERNO=8f, 
MSG_ID_IMC_IN_BEGIN=100000, IMC_FEATURE_BITMAP=0x3 @0#184
> 07-02 17:31:36.793 I/VoLTE IMCB( 1570): ENTER ua_imcb_icd_ims_record_ind_handler()@0#4681
> 07-02 17:31:36.793 I/VoLTE IMCB( 1570): Pure Mesage Send dest=IMCB[2], msg_id=100003(0x000186A3), len=3456, IMCB_IMC_HEADER_FILE_VERNO=8f, 
MSG_ID_IMC_IN_BEGIN=100000, IMC_FEATURE_BITMAP=0x3 imcb_send_to_COMM()@0#242
> 07-02 17:31:36.793 I/VoLTE IMCB( 1570): EndofMessage process_msg()@0#232}}}}
  07-02 17:31:36.796 D/TranSignalStrengthComponentImpl( 2620): [LTE] dbm: -84
  07-02 17:31:36.796 D/TLinkBrush_DATA( 2620): [TranSST0] rsrp +EGREG:1,44F2,00D4E649,8192,00,0,0,0,0
  07-02 17:31:36.800 I/TranOtherSimListener( 2620): mOtherServiceState:0subid :1
  07-02 17:31:36.804 E/MtkPhoneIntfMgrEx( 2620): MainThreadHandler.handleMessage : 3
  07-02 17:31:36.804 D/MtkPhoneIntfMgrEx( 2620): EVENT_AT_URC_IND(0) AT(prefix): +EGREG
  07-02 17:31:36.804 D/TRNS_PluginBase( 6515): EVENT_AT_COMMAND_URC: [0, +EGREG: 1,"44F2","00D4E649",8192,"00",0,0,0,0]
  07-02 17:31:36.804 D/UrcEventAnalyzer( 6515): Illegal dmf module id.
  07-02 17:31:36.823 D/PhoneInterfaceManager( 2620): [checkCallMethod] slotIndex: 0, count: 3, simMode: 2
  07-02 17:31:36.828 V/MmsProvider( 2620): inside checkSelection checking sel: address=? AND reference_number=? AND count=? AND sequence=? AND date=? AND 
message_body=? AND (destination_port & 524288=0) AND sub_id=? AND (destination_port & 131072=131072)
  07-02 17:31:36.828 D/Mms/Provider/Sms( 2620): query begin, match = 15
  07-02 17:31:36.849 I/mtkpower_client( 1080): perf_lock_rel, hdl:55393, tid:1080
  07-02 17:31:36.850 I/libPowerHal(  970): [PD] fpsgo update cmd:1408300 param:0
  07-02 17:31:36.854 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.039949,0.000030, totalTime 0.039979 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:31:36.883 I/mtkpower_client( 1080): perf_lock_acq, hdl:0, dur:30000, num:2, tid:1080
  07-02 17:31:36.883 I/mtkpower_client( 1080): ret_hdl:55395
  07-02 17:31:36.901 D/Mms/Provider/Sms( 2620): URLMatcher matches type of message-1
  07-02 17:31:36.901 D/Mms/Provider/Sms( 2620): insertInner succeedcontent://sms/raw/1
  07-02 17:31:36.903 D/TranWifiTputMonitor( 1698): WIFI: TX: 0 RX: 2 TOTAL = 2
  07-02 17:31:36.903 D/TranWifiTputMonitor( 1698): High Tput: false, TOTAL TPUT: 2
  07-02 17:31:36.907 D/Mms/Provider/Sms( 2620): URLMatcher matches type of message-1
  07-02 17:31:36.914 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.039865,0.000017, totalTime 0.039883 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:31:36.917 I/VoLTE IMCB-CM( 1570): receive the nessage from IMC #72
> 07-02 17:31:36.917 I/VoLTE IMCB( 1570): {{{{[process_msg] msg_id=100041(0x000186C9), dst=IMCB[2], IMCB_IMC_HEADER_FILE_VERNO=8f, 
MSG_ID_IMC_IN_BEGIN=100000, IMC_FEATURE_BITMAP=0x3 @0#184
> 07-02 17:31:36.917 I/VoLTE IMCB( 1570): ENTER imcb_imc_send_sms_ind_handler()@0#5566
> 07-02 17:31:36.917 I/VoLTE IMCB( 1570): Pure Mesage Send dest=UA[3], msg_id=13001(0x000032C9), len=294, IMCB_IMC_HEADER_FILE_VERNO=8f, 
MSG_ID_IMC_IN_BEGIN=100000, IMC_FEATURE_BITMAP=0x3 imcb_send_to_COMM()@0#242
> 07-02 17:31:36.917 I/VoLTE IMCB( 1570): EndofMessage process_msg()@0#232}}}}
  07-02 17:31:36.918 I/VoLTE_SMS( 1564): SMS[0] SMS supported in network type 12: 1 (module/volte//volte_ua/src/sms/sms.c:2382)
  07-02 17:31:36.918 I/VoLTE_Auto_Testing( 1564): [0][sms] event_recv/send_sms/0
  07-02 17:31:36.918 I/VoLTE_SMS( 1564): sip->conn_id -1, sip->request_id 3932160 (module/volte//volte_ua/src/sms/sms.c:1273)
  07-02 17:31:36.919 I/VoLTE_Auto_Testing( 1564): [0][sms] send_request/5/31
  07-02 17:31:36.920 I/VoLTE_Stack( 1551): =============> CCM --> SIP Tx => conn_id : 10000/20001, request_id : 0x3c0000, sipmsg magic : 691, method: 5 
(module/volte//volte_stack/src/sip/sip_app.c:439)
  07-02 17:31:36.921 I/VoLTE_TRANS( 1551): CNITS change state, conn_id:65536, ts_id:50, ts_state:TRYING 
(module/volte//volte_stack/src/sip/sip_transaction_cni.c:149)
  07-02 17:31:36.921 I/VoLTE_SIPTX( 1551): No need to add timestamp to pcni (module/volte//volte_stack/src/sip/sip_transport.c:321)
  07-02 17:31:36.921 D/VoLTE_SIPTX( 1551): [SIPTX-IO] Send SIP (2407:0:0:45::50d: 9900  )[65536:14221367] ==> { MESSAGE }
  07-02 17:31:36.923 V/Mms/Provider/Mms( 2620): accessRestricted=false
  07-02 17:31:36.923 V/MmsProvider( 2620): inside checkSelection checking sel: date > ?
  07-02 17:31:36.923 I/VoLTE_  ( 1564): IMS ICD SIP message record: result=[0], direction=[0], type=[0], SIP method=[5], SIP response code=[0], sip 
len=[869] (module/volte//volte_ua/src/service/ims_icd_ua.c:58)
> 07-02 17:31:36.923 I/VoLTE IMCB( 1570): {{{{[process_msg] msg_id=900001(0x000DBBA1), dst=UA[3], IMCB_IMC_HEADER_FILE_VERNO=8f, 
MSG_ID_IMC_IN_BEGIN=100000, IMC_FEATURE_BITMAP=0x3 @0#184
> 07-02 17:31:36.923 I/VoLTE IMCB( 1570): Pure Mesage Send dest=IMCB[2], msg_id=100003(0x000186A3), len=3456, IMCB_IMC_HEADER_FILE_VERNO=8f, 
MSG_ID_IMC_IN_BEGIN=100000, IMC_FEATURE_BITMAP=0x3 imcb_send_to_COMM()@0#242
> 07-02 17:31:36.923 I/VoLTE IMCB( 1570): EndofMessage process_msg()@0#232}}}}
> 07-02 17:31:36.924 I/VoLTE IMCB( 1570): {{{{[process_msg] msg_id=27001(0x00006979), dst=UA[3], IMCB_IMC_HEADER_FILE_VERNO=8f, 
MSG_ID_IMC_IN_BEGIN=100000, IMC_FEATURE_BITMAP=0x3 @0#184
> 07-02 17:31:36.924 I/VoLTE IMCB( 1570): ENTER ua_imcb_icd_ims_record_ind_handler()@0#4681
> 07-02 17:31:36.924 I/VoLTE IMCB( 1570): Pure Mesage Send dest=IMCB[2], msg_id=100003(0x000186A3), len=3456, IMCB_IMC_HEADER_FILE_VERNO=8f, 
MSG_ID_IMC_IN_BEGIN=100000, IMC_FEATURE_BITMAP=0x3 imcb_send_to_COMM()@0#242
> 07-02 17:31:36.924 I/VoLTE IMCB( 1570): EndofMessage process_msg()@0#232}}}}
  07-02 17:31:36.928 D/CallbackProxy( 6515): [onServiceStateChanged]
  07-02 17:31:36.929 I/TranTele/TranPhoneInterfaceManager( 2620): TTC - onServiceStateChanged
  07-02 17:31:36.929 I/TranTele/ReliableDetectionController( 2620): getDeviceState 4
  07-02 17:31:36.929 W/ContextImpl( 1698): Calling a method in the system process without a qualified user: 
android.app.ContextImpl.sendBroadcastMultiplePermissions:1342 android.content.Context.sendBroadcastMultiplePermissions:2524 
com.android.server.TelephonyRegistry.broadcastServiceStateChanged:3701 com.android.server.TelephonyRegistry.notifyServiceStateForPhoneId:1763 
com.android.internal.telephony.ITelephonyRegistry$Stub.onTransact:546 
  07-02 17:31:36.930 I/TranTele/TranRatStallController( 2620): [onServiceStateChanged] Not support or trueOning return.
  07-02 17:31:36.930 D/TranSnifferController[0]( 2620): onServiceStateChanged: subId = 1, state = 0
  07-02 17:31:36.930 I/SignalPredictController( 2620): [onServiceStateChanged] ignore slotId: 0, as it's not default data
  07-02 17:31:36.930 I/mtkpower_client( 1080): perf_lock_rel, hdl:55395, tid:1080
  07-02 17:31:36.931 I/TranTele/DynamicSarCtl( 2620): [DynamicSarHandler] msg.what=33108
  07-02 17:31:36.931 I/TranTele/DynamicSarCtl( 2620): [orgStateInspection] return
  07-02 17:31:36.931 I/TranElevatorModeForCarrierController( 2620): [isElevatorModeForCarrierDisable] disable0
  07-02 17:31:36.931 D/TranElevatorModeForCarrierController( 2620): [onServiceStateChanged] subId:1,isDisable:false
  07-02 17:31:36.931 D/TranElevatorModeForCarrierController( 2620): [isContains] value:51089
  07-02 17:31:36.931 D/TranElevatorModeForCarrierController( 2620): [isContains] testPlmn:null
  07-02 17:31:36.931 D/TranElevatorModeForCarrierController( 2620): [isContains] value:51089
  07-02 17:31:36.931 D/TranElevatorModeForCarrierController( 2620): [isContains] testPlmn:null
  07-02 17:31:36.931 D/UpdateCarrierConfigController( 2620): [onServiceStateChanged] mccMnc = 51089, subId = 1, serviceState = 0
  07-02 17:31:36.931 D/UpdateCarrierConfigController( 2620): updateCarrierConfigBoolean: subId=1, ccKey=hide_rat_icon_when_wifi_bool, value=false
  07-02 17:31:37.075 W/AppOpService( 1698): Ignored setUidMode call for runtime permission app op: uid = 10131, code = READ_CELL_BROADCASTS, mode = allow, 
callingUid = 1001, oldMode = allow
  07-02 17:31:37.075 I/VoLTE_SOC( 1551): *** select and notify_read *** 
  07-02 17:31:37.075 I/VoLTE_SOC( 1551):  (module/volte//volte_stack/src/soc/soc_data.c:392)
  07-02 17:31:37.075 I/VoLTE_SOC( 1551): state: 5, notify SOC_READ to sock_id:28 of idx:655369 (0xf0cc1f00) is_notify:0 
(module/volte//volte_stack/src/soc/soc_data.c:130)
  07-02 17:31:37.075 I/VoLTE_SIPTX( 1551): [SOC_READ] soc_id:28(655369), sock_wait_close:0, is_notify: 1 
(module/volte//volte_stack/src/sip/sip_transport.c:4616)
  07-02 17:31:37.076 D/VoLTE_SIPTX( 1551): [SIPTX-IO] Recv SIP (2407:0:0:45::50d: 9959  )[65536:655369] <== { SIP/2.0 202 Accepted }
  07-02 17:31:37.076 I/VoLTE_TRANS( 1551): CNITS change state, conn_id:65536, ts_id:50, ts_state:COMPLETED 
(module/volte//volte_stack/src/sip/sip_transaction_cni.c:222)
  07-02 17:31:37.077 I/VoLTE_  ( 1564): IMS ICD SIP message record: result=[0], direction=[1], type=[1], SIP method=[5], SIP response code=[202], sip 
len=[338] (module/volte//volte_ua/src/service/ims_icd_ua.c:58)
> 07-02 17:31:37.078 I/VoLTE IMCB( 1570): {{{{[process_msg] msg_id=900001(0x000DBBA1), dst=UA[3], IMCB_IMC_HEADER_FILE_VERNO=8f, 
MSG_ID_IMC_IN_BEGIN=100000, IMC_FEATURE_BITMAP=0x3 @0#184
> 07-02 17:31:37.078 I/VoLTE IMCB( 1570): Pure Mesage Send dest=IMCB[2], msg_id=100003(0x000186A3), len=3456, IMCB_IMC_HEADER_FILE_VERNO=8f, 
MSG_ID_IMC_IN_BEGIN=100000, IMC_FEATURE_BITMAP=0x3 imcb_send_to_COMM()@0#242
> 07-02 17:31:37.078 I/VoLTE IMCB( 1570): EndofMessage process_msg()@0#232}}}}
> 07-02 17:31:37.078 I/VoLTE IMCB( 1570): {{{{[process_msg] msg_id=27001(0x00006979), dst=UA[3], IMCB_IMC_HEADER_FILE_VERNO=8f, 
MSG_ID_IMC_IN_BEGIN=100000, IMC_FEATURE_BITMAP=0x3 @0#184
> 07-02 17:31:37.078 I/VoLTE IMCB( 1570): ENTER ua_imcb_icd_ims_record_ind_handler()@0#4681
> 07-02 17:31:37.078 I/VoLTE IMCB( 1570): Pure Mesage Send dest=IMCB[2], msg_id=100003(0x000186A3), len=3456, IMCB_IMC_HEADER_FILE_VERNO=8f, 
MSG_ID_IMC_IN_BEGIN=100000, IMC_FEATURE_BITMAP=0x3 imcb_send_to_COMM()@0#242
> 07-02 17:31:37.078 I/VoLTE IMCB( 1570): EndofMessage process_msg()@0#232}}}}
  07-02 17:31:37.080 I/VoLTE_DISP( 1551): Found Normal ua, ua:0xf0a03e78, ua->type:303301890 (module/volte//volte_stack/src/dispatcher/rule.c:1427)
  07-02 17:31:37.081 I/VoLTE_Auto_Testing( 1564): [0][sms] recv_response/202/5/31
  07-02 17:31:37.081 I/VoLTE_Auto_Testing( 1564): [0][sms] event_send/0/23001/60/202
  07-02 17:31:37.081 I/VoLTE_SMS( 1564): SMS[0-3c0000] delete the sms item, request_id = 60 (module/volte//volte_ua/src/sms/sms.c:507)
> 07-02 17:31:37.081 I/VoLTE IMCB( 1570): {{{{[process_msg] msg_id=23001(0x000059D9), dst=UA[3], IMCB_IMC_HEADER_FILE_VERNO=8f, 
MSG_ID_IMC_IN_BEGIN=100000, IMC_FEATURE_BITMAP=0x3 @0#184
> 07-02 17:31:37.081 I/VoLTE IMCB( 1570): ENTER ua_imcb_rsp_sms_sent_handler()@0#3560
> 07-02 17:31:37.081 I/VoLTE IMCB( 1570): ENTER imcb_send_imc_send_sms_rsp()@0#2670
> 07-02 17:31:37.081 I/VoLTE IMCB( 1570): Pure Mesage Send dest=IMCB[2], msg_id=100003(0x000186A3), len=3456, IMCB_IMC_HEADER_FILE_VERNO=8f, 
MSG_ID_IMC_IN_BEGIN=100000, IMC_FEATURE_BITMAP=0x3 imcb_send_to_COMM()@0#242
> 07-02 17:31:37.081 I/VoLTE IMCB( 1570): EndofMessage process_msg()@0#232}}}}
  07-02 17:31:37.084 I/VoLTE IMCB-CM( 1570): receive the nessage from IMC #72
> 07-02 17:31:37.084 I/VoLTE IMCB( 1570): {{{{[process_msg] msg_id=100045(0x000186CD), dst=IMCB[2], IMCB_IMC_HEADER_FILE_VERNO=8f, 
MSG_ID_IMC_IN_BEGIN=100000, IMC_FEATURE_BITMAP=0x3 @0#184
> 07-02 17:31:37.084 I/VoLTE IMCB( 1570): Pure Mesage Send dest=UA[3], msg_id=13002(0x000032CA), len=8, IMCB_IMC_HEADER_FILE_VERNO=8f, 
MSG_ID_IMC_IN_BEGIN=100000, IMC_FEATURE_BITMAP=0x3 imcb_send_to_COMM()@0#242
> 07-02 17:31:37.084 I/VoLTE IMCB( 1570): EndofMessage process_msg()@0#232}}}}
  07-02 17:31:37.084 E/VoLTE_SMS( 1564): Can't find the sms item, sms_id = 3c (module/volte//volte_ua/src/sms/sms.c:3368)
  07-02 17:31:37.090 W/AppOpService( 1698): Ignored setUidMode call for runtime permission app op: uid = 1001, code = READ_SMS, mode = allow, callingUid = 
1001, oldMode = allow
  07-02 17:31:37.092 W/AppOpService( 1698): Ignored setUidMode call for runtime permission app op: uid = 1001, code = RECEIVE_SMS, mode = allow, 
callingUid = 1001, oldMode = allow
  07-02 17:31:37.092 W/AppOpService( 1698): Ignored setUidMode call for runtime permission app op: uid = 1001, code = RECEIVE_WAP_PUSH, mode = allow, 
callingUid = 1001, oldMode = allow
  07-02 17:31:37.093 W/AppOpService( 1698): Ignored setUidMode call for runtime permission app op: uid = 1001, code = SEND_SMS, mode = allow, callingUid = 
1001, oldMode = allow
  07-02 17:31:37.093 W/AppOpService( 1698): Ignored setUidMode call for runtime permission app op: uid = 1001, code = READ_CELL_BROADCASTS, mode = allow, 
callingUid = 1001, oldMode = allow
  07-02 17:31:37.096 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.039355,0.001758, totalTime 0.041113 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:31:37.102 E/ApplicationHelper( 1698): Fail to get PackageManager
  07-02 17:31:37.113 D/Griffin/filterReceiveBroadcast( 1698): not limit Intent { act=android.provider.Telephony.SMS_DELIVER flg=0x19000010 
cmp=com.transsion.smartmessage/com.android.messaging.receiver.SmsDeliverReceiver (has extras) } for resultTo not null
  07-02 17:31:37.119 D/tranpm/BehaviorManager( 1698): onMemPressureChange : level 0
  07-02 17:31:37.121 I/TranOtherSimListener( 2620): mOtherServiceState:0subid :1
  07-02 17:31:37.124 E/ApplicationHelper( 1698): Fail to get PackageManager
  07-02 17:31:37.137 I/TranTele/TranPhoneInterfaceManager( 2620): TTC - onDisplayInfoChanged
  07-02 17:31:37.138 D/TranSignalStrengthComponentImpl( 2620): [LTE] dbm: -84
  07-02 17:31:37.139 D/TranSignalStrengthComponentImpl( 2620): [LTE] dbm: -84
  07-02 17:31:37.140 D/TranSignalStrengthComponentImpl( 2620): [LTE] dbm: -84
  07-02 17:31:37.142 D/CallbackProxy( 6515): [onSignalStrengthsChanged]
  07-02 17:31:37.142 I/TranTele/TranPhoneInterfaceManager( 2620): TTC - onSignalStrengthsChanged
  07-02 17:31:37.335 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000000,0.040445,0.000047, totalTime 0.040492 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:31:37.371 D/BufferPoolAccessor2.0(11425): bufferpool2 0xb4000072a18c2a98 : 66(508663 size) total buffers - 1(2970 size) used buffers - 738/1629 
(recycle/alloc) - 939/1628 (fetch/transfer)
  07-02 17:31:37.374 V/MmsProvider( 2620): inside checkSelection checking sel: null
  07-02 17:31:37.376 D/Mms/Provider/MmsSms( 2620): query begin, match = 4
  07-02 17:31:37.378 D/Mms/Provider/MmsSms( 2620): getAddressIds begin
  07-02 17:31:37.381 D/BoundBrokerSvc( 4458): onRebind: Intent { act=com.google.android.gms.common.telemetry.service.START dat=chimera-action:/... 
cmp=com.google.android.gms/.chimera.PersistentApiService }
  07-02 17:31:37.409 W/on.smartmessage(17402): Reducing the number of considered missed Gc histogram windows from 117 to 100
  07-02 17:31:37.433 D/Mms/Provider/MmsSms( 2620): query end, count = 1
> 07-02 17:31:37.459 I/BufferQueueProducer( 1012): 
[SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity](BLAST)#19423](this:0xb40000731f5d6a18,id:-1,api:0,p:-1,c:1012) queueBuffer: fps=24.63 
dur=1014.99 max=415.70 min=16.41
  07-02 17:31:37.464 I/BufferQueueProducer( 1012): [VDS-studio.screen.sharing:0 SINK](this:0xb40000725f674618,id:-1,api:1,p:1012,c:1012) queueBuffer: 
fps=25.71 dur=1011.35 max=214.81 min=15.29
  07-02 17:31:37.465 I/hwcomposer(  935): [HWCDisplay] [Display_0 (type:1)] fps:25.725613,dur:1010.67,max:214.57,min:15.61  
  07-02 17:31:37.473 I/system_server( 1698): Background young concurrent mark compact GC freed 22MB AllocSpace bytes, 36(716KB) LOS objects, 11% free, 
163MB/184MB, paused 4.548ms,16.341ms total 710.293ms
> 07-02 17:31:37.484 I/flutter (11190): STEP47D_GET_PRODUCT_BY_VENDOR_ID_ITEM: vendorId=aceh_clone_6285ddbfd9598_0hB8mx1z1DeNR9CAzXfh 
productId=aceh_product_aceh_clone_6285ddbfd9598_0hB8mx1z1DeNR9CAzXfh_646ec79605f08 name=asdfasdf categoryID=62cd5926d5186 publish=true
> 07-02 17:31:37.485 I/flutter (11190): STEP47D_GET_PRODUCT_BY_VENDOR_ID_ITEM: vendorId=aceh_clone_6285ddbfd9598_0hB8mx1z1DeNR9CAzXfh 
productId=aceh_product_aceh_clone_6285ddbfd9598_0hB8mx1z1DeNR9CAzXfh_646ed3e6ab55f name=Combo 5 categoryID=646ed350d0543 publish=true
> 07-02 17:31:37.485 I/flutter (11190): STEP47D_GET_PRODUCT_BY_VENDOR_ID_ITEM: vendorId=aceh_clone_6285ddbfd9598_0hB8mx1z1DeNR9CAzXfh 
productId=aceh_product_aceh_clone_6285ddbfd9598_0hB8mx1z1DeNR9CAzXfh_YTePbEnm5AxAa8SlGy0d name=Pollo A La Le├▒a categoryID=62ecef57887cb publish=true
> 07-02 17:31:37.486 I/flutter (11190): STEP47D_GET_PRODUCT_BY_VENDOR_ID_ITEM: vendorId=aceh_clone_6285ddbfd9598_0hB8mx1z1DeNR9CAzXfh 
productId=aceh_product_aceh_clone_6285ddbfd9598_0hB8mx1z1DeNR9CAzXfh_xM1iyTGJqM1WuDmAiPJ1 name=POLLO PIZZA categoryID=63aaf0142902b publish=true
> 07-02 17:31:37.486 I/flutter (11190): STEP47D_GET_PRODUCT_BY_VENDOR_ID_RESULT: vendorId=aceh_clone_6285ddbfd9598_0hB8mx1z1DeNR9CAzXfh count=4
> 07-02 17:31:37.488 I/flutter (11190): STEP47D_RESTAURANT_DETAIL_PRODUCT_LIST_ASSIGNED: vendorId=aceh_clone_6285ddbfd9598_0hB8mx1z1DeNR9CAzXfh count=4 
allCount=4
  07-02 17:31:37.534 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.039992,0.000045, totalTime 0.040038 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:31:37.571 D/TranSignalStrengthComponentImpl( 2620): [LTE] dbm: -86
  07-02 17:31:37.571 D/TranSignalStrengthComponentImpl( 2620): [LTE] dbm: -86
  07-02 17:31:37.573 D/CallbackProxy( 6515): [onSignalStrengthsChanged]
  07-02 17:31:37.573 I/TranTele/TranPhoneInterfaceManager( 2620): TTC - onSignalStrengthsChanged
  07-02 17:31:37.574 D/TranSignalStrengthComponentImpl(30413): [LTE] dbm: -86
  07-02 17:31:37.577 D/TranSignalStrengthComponentImpl( 1698): [LTE] dbm: -86
  07-02 17:31:37.578 D/TranPhoneSwitcher( 2620): getNetworkType: 4G
  07-02 17:31:37.578 I/TranPhoneSwitcher( 2620): mDefaultsign:4subid :2
  07-02 17:31:37.579 D/TranSignalStrengthComponentImpl(30413): [LTE] dbm: -86
  07-02 17:31:37.580 D/TranSignalStrengthComponentImpl(30413): [LTE] dbm: -86
  07-02 17:31:37.619 I/mtkpower_client( 1080): perf_lock_acq, hdl:0, dur:30000, num:2, tid:1080
  07-02 17:31:37.620 I/mtkpower_client( 1080): ret_hdl:55399
  07-02 17:31:37.627 D/TranSignalStrengthComponentImpl( 2620): [LTE] dbm: -83
  07-02 17:31:37.627 D/TranSignalStrengthComponentImpl( 2620): [LTE] dbm: -83
  07-02 17:31:37.629 D/CallbackProxy( 6515): [onSignalStrengthsChanged]
  07-02 17:31:37.629 I/TranTele/TranPhoneInterfaceManager( 2620): TTC - onSignalStrengthsChanged
  07-02 17:31:37.629 D/TranSignalStrengthComponentImpl( 1698): [LTE] dbm: -83
  07-02 17:31:38.368 W/System.err(17402): 	at kotlinx.coroutines.q0.run(DispatchedTask.kt:112)
  07-02 17:31:38.368 W/System.err(17402): 	at kotlinx.coroutines.internal.k$a.run(LimitedDispatcher.kt:4)
  07-02 17:31:38.368 W/System.err(17402): 	at ef.j.run(Tasks.kt:3)
  07-02 17:31:38.368 W/System.err(17402): 	at kotlinx.coroutines.scheduling.CoroutineScheduler$a.run(CoroutineScheduler.kt:102)
  07-02 17:31:38.374 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000000,0.039810,0.000044, totalTime 0.039855 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:31:38.387 D/BufferPoolAccessor2.0(11425): bufferpool2 0xb4000072a18c2a98 : 66(113973 size) total buffers - 1(747 size) used buffers - 739/1681 
(recycle/alloc) - 990/1680 (fetch/transfer)
  07-02 17:31:38.394 D/ULogGuard( 1342): Monitoring: 15 threads, 0 requests, 0 time-bombs; 3 guards. ResetFlags = 0x7
  07-02 17:31:38.414 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000000,0.039671,0.000058, totalTime 0.039729 > logTimeout 
0.022000 TIMEOUT!!
> 07-02 17:31:38.474 I/BufferQueueProducer( 1012): 
[SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity](BLAST)#19423](this:0xb40000731f5d6a18,id:-1,api:0,p:-1,c:1012) queueBuffer: fps=51.20 
dur=1015.63 max=49.93 min=16.25
  07-02 17:31:38.479 I/BufferQueueProducer( 1012): [VDS-studio.screen.sharing:0 SINK](this:0xb40000725f674618,id:-1,api:1,p:1012,c:1012) queueBuffer: 
fps=51.25 dur=1014.65 max=49.15 min=11.18
  07-02 17:31:38.480 I/hwcomposer(  935): [HWCDisplay] [Display_0 (type:1)] fps:51.242992,dur:1014.77,max:49.28,min:11.00  
  07-02 17:31:38.514 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.040069,0.000039, totalTime 0.040109 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:31:38.535 D/TriggerService( 4219): trigger service is running
  07-02 17:31:38.558 E/ApplicationHelper( 1698): Fail to get PackageManager
  07-02 17:31:38.563 V/MessagingAppNotif(17402): DefaultDispatcher-worker-1, executeAction(ReceiveSmsMessageAction.java:1045)
  07-02 17:31:38.563 V/MessagingAppNotif(17402): |---------------------------------------------------------------------------------------------------
  07-02 17:31:38.564 V/MessagingAppNotif(17402): | args[0] = createMessageNotification
  07-02 17:31:38.564 V/MessagingAppNotif(17402): | args[1] = com.android.messaging.datamodel.r$e@e2126b7
  07-02 17:31:38.564 V/MessagingAppNotif(17402): | args[2] = false
  07-02 17:31:38.564 V/MessagingAppNotif(17402): |---------------------------------------------------------------------------------------------------
  07-02 17:31:38.564 V/MessagingAppNotif(17402): DefaultDispatcher-worker-1, v(f.java:191)
  07-02 17:31:38.565 V/MessagingAppNotif(17402): |---------------------------------------------------------------------------------------------------
  07-02 17:31:38.565 V/MessagingAppNotif(17402): | args[0] = processAndSend
  07-02 17:31:38.565 V/MessagingAppNotif(17402): | args[1] = 45
  07-02 17:31:38.565 V/MessagingAppNotif(17402): | args[2] = content://settings/system/notification_sound
  07-02 17:31:38.565 V/MessagingAppNotif(17402): |---------------------------------------------------------------------------------------------------
  07-02 17:31:38.577 D/ShortcutService( 1698): rescanPackageIfNeeded 0@com.transsion.smartmessage, forceRescan=false , isNewApp=false
  07-02 17:31:38.636 D/notifBuilder.  (17402): |---------------------------------------------------------------------------------------------------
  07-02 17:31:38.636 D/notifBuilder.  (17402): | action length  2
  07-02 17:31:38.636 D/notifBuilder.  (17402): |---------------------------------------------------------------------------------------------------
  07-02 17:31:38.639 D/MessagingAppNotif(17402): DefaultDispatcher-worker-1, u(f.java:302)
  07-02 17:31:38.639 D/MessagingAppNotif(17402): |---------------------------------------------------------------------------------------------------
  07-02 17:31:38.639 D/MessagingAppNotif(17402): | args[0] = doNotify
  07-02 17:31:38.639 D/MessagingAppNotif(17402): | args[1] = 45
  07-02 17:31:38.639 D/MessagingAppNotif(17402): |---------------------------------------------------------------------------------------------------
> 07-02 17:31:38.642 V/os.notification( 1698): onFixNotification  start, notification= Notification(channel=mms_channel shortcut=45 contentView=null 
vibrate=null sound=null tick defaults=LIGHTS flags=0 color=0xff0a69fe category=msg actions=2 vis=PRIVATE)
> 07-02 17:31:38.642 V/os.notification( 1698): onFixNotification  end, notification= Notification(channel=mms_channel shortcut=45 contentView=null 
vibrate=null sound=null tick defaults=LIGHTS flags=0 color=0xff0a69fe category=msg actions=2 vis=PRIVATE)
  07-02 17:31:38.644 D/ShortcutService( 1698): Getting shortcuts for launcher= androiduser=0 pkg=com.transsion.smartmessage
  07-02 17:31:38.644 V/os.notification( 1698): tranImportance = 14,muteTime = 9223372036854775807 ,currentTime = 1782988298644 ,pkg -> 
com.transsion.smartmessage
  07-02 17:31:38.645 D/os.notification.pre( 1698):  add StatusBarNotification 183658972 current size 1
  07-02 17:31:38.645 D/os.notification( 1698): onEnqueueNotificationInternal wait before
> 07-02 17:31:38.646 D/os.notification.SuspendJobManager( 1698): create job  com.transsion.util.SuspendJobManager$JobInfo@a2fd9ba 
key:NotificationRecord(0x01a04ae5: pkg=com.transsion.smartmessage user=UserHandle{0} id=0 tag=com.transsion.smartmessage:sms::45 importance=4 
key=0|com.transsion.smartmessage|0|com.transsion.smartmessage:sms::45|10131: Notification(channel=mms_channel shortcut=45 contentView=null vibrate=null 
sound=null tick defaults=LIGHTS flags=0 color=0xff0a69fe category=msg actions=2 vis=PRIVATE)) 
data:com.android.server.notification.NotificationManagerService$$ExternalSyntheticLambda1@a92906b sn:-1 owner:{}
> 07-02 17:31:38.647 D/os.notification( 3885): onNotifyNotification StatusBarNotification:StatusBarNotification(pkg=com.transsion.smartmessage 
user=UserHandle{0} id=0 tag=com.transsion.smartmessage:sms::45 key=0|com.transsion.smartmessage|0|com.transsion.smartmessage:sms::45|10131: 
Notification(channel=null shortcut=null contentView=null vibrate=null sound=null tick defaults=LIGHTS flags=0 color=0xff0a69fe category=msg actions=2 
vis=PRIVATE)) callingUid:10131 NotificationChannel:NotificationChannel{mId='mms_channel', mName=mms_channel, mDescription=, mImportance=4, 
mBypassDnd=false, mLockscreenVisibility=-1000, mSound=content://settings/system/notification_sound, mLights=true, mLightColor=0, mVibrationPattern=null, 
mVibrationEffect=null, mUserLockedFields=0, mUserVisibleTaskShown=false, mVibrationEnabled=true, mShowBadge=true, mDeleted=false, mDeletedTimeMs=-1, 
mGroup='null', mAudioAttributes=AudioAttributes: usage=USAGE_NOTIFICATION content=CONTENT_TYPE_SONIFICATION flags=0x800 tags= bundle=null, 
mBlockableSystem=false, mAllowBubbles=-1, mImportanceLockedDefaultApp=false, mOriginalImp=4, mParent=null, mConversationId=null, mDemoted=false, 
mImportantConvo=false, mLastNotificationUpdateTimeMs=0} receipt:com.transsion.app.IEnqueueNotificationReceipt$Stub$Proxy@d3c6dfd sn:2436
  07-02 17:31:38.648 D/os_noti_center_rule( 3885): setNotiRule: chCursor = android.database.sqlite.SQLiteCursor@aec1af2, count --= 0, pkgAndCh = 
com.transsion.smartmessage##mms_channel, cloum = 3
> 07-02 17:31:38.649 D/os.notification( 3885): handleNotifyNotification notification:Notification(channel=null shortcut=null contentView=null vibrate=null 
sound=null tick defaults=LIGHTS flags=0 color=0xff0a69fe category=msg actions=2 vis=PRIVATE)
  07-02 17:31:38.650 D/os.notification.pre( 1698):  add Runnable 103434184 with StatusBarNotification 183658972 current size 1
> 07-02 17:31:38.650 D/os.notification.SuspendJobManager( 1698): done  com.transsion.util.SuspendJobManager$JobInfo@a2fd9ba 
key:NotificationRecord(0x01a04ae5: pkg=com.transsion.smartmessage user=UserHandle{0} id=0 tag=com.transsion.smartmessage:sms::45 importance=4 
key=0|com.transsion.smartmessage|0|com.transsion.smartmessage:sms::45|10131: Notification(channel=mms_channel shortcut=45 contentView=null vibrate=null 
sound=null tick defaults=LIGHTS flags=0 color=0xff0a69fe category=msg actions=2 vis=PRIVATE)) 
data:com.android.server.notification.NotificationManagerService$$ExternalSyntheticLambda1@a92906b sn:2436 owner:{3885} for  app-3885-request
  07-02 17:31:38.650 D/os.notification( 1698): onEnqueueNotificationInternal notifyAll
  07-02 17:31:38.653 D/os.notification( 1698): onEnqueueNotificationInternal wait after
> 07-02 17:31:38.653 D/os.notification( 1698): onEnqueueNotificationInternal StatusBarNotification:StatusBarNotification(pkg=com.transsion.smartmessage 
user=UserHandle{0} id=0 tag=com.transsion.smartmessage:sms::45 key=0|com.transsion.smartmessage|0|com.transsion.smartmessage:sms::45|10131: 
Notification(channel=mms_channel shortcut=45 contentView=null vibrate=null sound=null tick defaults=LIGHTS flags=0 color=0xff0a69fe category=msg actions=2 
vis=PRIVATE)) callingUid:10131 sn:2436 res:true
  07-02 17:31:38.654 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.039809,0.000029, totalTime 0.039838 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:31:38.655 D/notification_state(17402): DefaultDispatcher-worker-1, u(f.java:302)
  07-02 17:31:38.656 D/notification_state(17402): |---------------------------------------------------------------------------------------------------
  07-02 17:31:38.656 D/notification_state(17402): | doNotify  45 notificationTag com.transsion.smartmessage:sms::45
  07-02 17:31:38.656 D/notification_state(17402): |---------------------------------------------------------------------------------------------------
  07-02 17:31:38.656 D/os.notification.pre( 1698):  remove Runnable 103434184 with StatusBarNotification 183658972 for puppet run current size 0
  07-02 17:31:38.657 W/native  ( 5782): W0000 00:00:1782988298.657265    5913 lag_detector.cc:58] Pipeline lagging by 965.74371ms. Continue processing 
samples.
  07-02 17:31:38.664 D/TranPowerManagerService( 1698): registerPocketModeByProximityListener 
listener:com.transsion.hubcore.server.os.TranPowerManagerService$TranPocketModeListener@e8fb061, tag:com.transsion.smartmessage
  07-02 17:31:38.664 D/TranPocketModeController( 1698): No sensor is registered for current listener: 
com.transsion.hubcore.server.os.TranPowerManagerService$TranPocketModeListener@e8fb061
  07-02 17:31:38.665 I/lowmemorykiller(  529): TranMemoryInfo: vmstat time slice: 1004
  07-02 17:31:38.665 I/lowmemorykiller(  529): TranMemoryInfo: PSI stat: 10, 0.70, 0.35, 0.18, 0.12
  07-02 17:31:38.665 I/lowmemorykiller(  529): TranMemoryInfo: vmstat: 458, 0, 7068, 1, 124816
  07-02 17:31:38.665 D/lowmemorykiller(  529): TranMemoryInfo: kswapd pgscan_kswapd 212519011 to 212527938, pgsteal_kswapd 134922428 to 134929496, stime 
124810 to 124816
  07-02 17:31:38.665 I/lowmemorykiller(  529): TranMemoryInfo: kswapd has been run.
  07-02 17:31:38.665 I/lowmemorykiller(  529): TranMemoryInfo: kswapd reclaim amount : 7068 pages
  07-02 17:31:38.665 I/lowmemorykiller(  529): TranMemoryInfo: kswapd reclaim efficiency : 471 KB/ms
  07-02 17:31:38.672 D/PocketMode(17402): DefaultDispatcher-worker-1, invoke(PocketMode.java:12)
  07-02 17:31:38.672 D/PocketMode(17402): |---------------------------------------------------------------------------------------------------
  07-02 17:31:38.921 V/NotificationRecord( 1698): force dont update mImportance 2
  07-02 17:31:38.921 V/NotificationRecord( 1698): force dont update mImportance 2
  07-02 17:31:38.921 V/NotificationRecord( 1698): force dont update mImportance 2
  07-02 17:31:38.921 V/NotificationRecord( 1698): force dont update mImportance 2
  07-02 17:31:38.921 V/NotificationRecord( 1698): force dont update mImportance 2
  07-02 17:31:38.922 V/NotificationRecord( 1698): force dont update mImportance 2
  07-02 17:31:38.922 V/NotificationRecord( 1698): force dont update mImportance 2
  07-02 17:31:38.922 V/NotificationRecord( 1698): force dont update mImportance 2
> 07-02 17:31:38.923 D/ThirdCallManager( 4503): onNotificationPosted nid 0 channelId : mms_channel has fullScreenIntent false groupKey null isChild true 
category msg
  07-02 17:31:38.923 I/ShowBarrageHelper( 4503): showBarrageWindow com.transsion.smartmessage
  07-02 17:31:38.924 W/SQLiteQueryBuilder( 3937): Allowing abusive custom column: null as oem_metadata
  07-02 17:31:38.925 V/NotificationRecord( 1698): force dont update mImportance 2
  07-02 17:31:38.928 V/NotificationRecord( 1698): force dont update mImportance 2
  07-02 17:31:38.928 V/NotificationRecord( 1698): force dont update mImportance 2
  07-02 17:31:38.928 V/NotificationRecord( 1698): force dont update mImportance 2
  07-02 17:31:38.928 V/NotificationRecord( 1698): force dont update mImportance 2
  07-02 17:31:38.928 V/NotificationRecord( 1698): force dont update mImportance 2
  07-02 17:31:38.928 V/NotificationRecord( 1698): force dont update mImportance 2
  07-02 17:31:38.930 V/NotificationRecord( 1698): force dont update mImportance 2
  07-02 17:31:38.930 V/NotificationRecord( 1698): force dont update mImportance 2
  07-02 17:31:38.930 V/NotificationRecord( 1698): force dont update mImportance 2
  07-02 17:31:38.934 V/NotificationRecord( 1698): force dont update mImportance 2
  07-02 17:31:38.935 V/NotificationRecord( 1698): force dont update mImportance 2
  07-02 17:31:38.935 V/NotificationRecord( 1698): force dont update mImportance 2
  07-02 17:31:38.935 V/NotificationRecord( 1698): force dont update mImportance 2
  07-02 17:31:38.935 V/NotificationRecord( 1698): force dont update mImportance 2
  07-02 17:31:38.935 V/NotificationRecord( 1698): force dont update mImportance 2
  07-02 17:31:38.949 D/ModeController( 2380): isCloseHeadsUpNotification: setPackageName:, packageName:com.transsion.smartmessage, headsUpEnabled:false
  07-02 17:31:38.949 I/AppThermalMode(  970): [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: 60,fg->pid:11190
  07-02 17:31:38.949 I/AppThermalMode(  970): [perfNotifyThermalState] appThermalIdx -1:
  07-02 17:31:38.949 I/libPerfCtl(  970): xgfGetFPS pid:11190 fps:59
  07-02 17:31:38.949 I/AppThermalMode(  970): [perfNotifyThermalState] hdl:0
  07-02 17:31:38.949 I/AppThermalMode(  970): [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: 60,fg->pid:11190
  07-02 17:31:38.949 I/AppThermalMode(  970): [perfNotifyThermalState] appThermalIdx -1:
  07-02 17:31:38.950 D/PeopleSpaceWidgetMgr( 2380): No app widget ids returned
> 07-02 17:31:38.966 D/RingtoneManager( 2380): getExternalUriData for content://media/internal/audio/media/32?title=Acclivity&canonical=1 with data: 
/product/media/audio/notifications/Acclivity.ogg
  07-02 17:31:38.966 D/RingtoneManager( 2380): content://media/internal/audio/media/32?title=Acclivity&canonical=1 is exist true
  07-02 17:31:38.970 I/TranWifiSmartAssistantController( 1698): start current network monitor 
  07-02 17:31:38.970 I/WifiService( 1698): getConnectionInfo uid=1000
  07-02 17:31:38.970 V/WifiService( 1698): Clearing REDACT_FOR_LOCAL_MAC_ADDRESS for android(uid=1000)
  07-02 17:31:38.970 V/WifiService( 1698): Clearing REDACT_FOR_NETWORK_SETTINGS for android(uid=1000)
  07-02 17:31:38.970 V/WifiService( 1698): Clearing REDACT_FOR_ACCESS_FINE_LOCATION for android(uid=1000)
  07-02 17:31:38.970 I/TranWifiSmartAssistantController( 1698): userIgnored :false isScoredCurrentNetwork :false
  07-02 17:31:38.971 I/TranWifiSmartAssistantController( 1698): mCurrentNetwork :133 SSID :"TAUFIKKOPIBATOH@WIFI.ID"
  07-02 17:31:38.971 I/WifiNetworkQuality( 1698): current rssi is sufficient
  07-02 17:31:38.971 I/TranWifiSmartAssistantController( 1698): mNoCandidateCount : -1
  07-02 17:31:38.971 I/TranWifiSmartAssistantController( 1698): ====>>rssi :-55
  07-02 17:31:38.972 I/SysUI(260310)_OverviewSysUiProxyService( 2380):  isEnabled mIsEnabled false mIsFoldExpanded true
  07-02 17:31:38.972 I/m.android.phone( 2620): Background young concurrent mark compact GC freed 6857KB AllocSpace bytes, 7(428KB) LOS objects, 41% free, 
10130KB/16MB, paused 7.312ms,1.337ms total 62.038ms
  07-02 17:31:38.975 D/SysUI(260310)_TrStackScrollerController( 2380): updateShowEmptyShadeView: noNotifications=false, visibleNotificationCount=47, 
mediaNotificationVisible=false
  07-02 17:31:38.977 I/TranNotificationExpandButton( 2380): Call setExpandedVisibility
  07-02 17:31:38.977 V/NotificationRecord( 1698): force dont update mImportance 2
  07-02 17:31:38.978 V/NotificationRecord( 1698): force dont update mImportance 2
  07-02 17:31:38.980 W/System  ( 2620): A resource failed to call AbstractCursor.close. 
  07-02 17:31:39.017 D/ModeController( 2380): isSmartPanelState: setPackageName:, smartPanelState:false
  07-02 17:31:39.018 D/ModeController( 2380): isSmartPanelState: setPackageName:, smartPanelState:false
  07-02 17:31:39.018 D/StatusBarIconView( 2380): unSupportMatrixIcon: key:0|com.transsion.smartmessage|0|com.transsion.smartmessage:sms::45|10131 , 
isGrayscaleDrawable:true , isGrayscaleIcon:true
  07-02 17:31:39.040 I/BufferQueueProducer( 1012): [StatusBar#97](this:0xb40000731f578a88,id:-1,api:0,p:-1,c:1012) queueBuffer: fps=0.84 dur=2380.72 
max=1881.60 min=499.12
  07-02 17:31:39.041 D/ModeController( 2380): isSmartPanelState: setPackageName:, smartPanelState:false
  07-02 17:31:39.043 D/ModeController( 2380): isSmartPanelState: setPackageName:, smartPanelState:false
  07-02 17:31:39.044 D/ModeController( 2380): isSmartPanelState: setPackageName:, smartPanelState:false
  07-02 17:31:39.044 D/NotificationCompact$UIBuilder( 2380): create ui builder for android.app.Notification$Builder@aa47f7e => 
com.transsion.notificationui.TranLocalNotificationUIBuilder@56dcdf
> 07-02 17:31:39.045 D/SystemUINotificationLice( 2380): setThunderButtonVisibleNeeded Notification(channel=mms_channel shortcut=45 contentView=null 
vibrate=null sound=null tick defaults=LIGHTS flags=0 color=0xff0a69fe category=msg actions=2 vis=PRIVATE)
> 07-02 17:31:39.047 D/SystemUINotificationLice( 2380): updateButtonVisibleIfNeeded Notification(channel=mms_channel shortcut=45 contentView=null 
vibrate=null sound=null tick defaults=LIGHTS flags=0 color=0xff0a69fe category=msg actions=2 vis=PRIVATE)
> 07-02 17:31:39.048 D/SystemUINotificationLice( 2380): setThunderButtonVisibleNeeded Notification(channel=mms_channel shortcut=45 contentView=null 
vibrate=null sound=null tick defaults=LIGHTS flags=0 color=0xff0a69fe category=msg actions=2 vis=PRIVATE)
  07-02 17:31:39.048 I/mtkpower_client( 1080): perf_lock_acq, hdl:0, dur:30000, num:2, tid:1080
  07-02 17:31:39.049 I/mtkpower_client( 1080): ret_hdl:55403
> 07-02 17:31:39.050 D/SystemUINotificationLice( 2380): updateButtonVisibleIfNeeded Notification(channel=mms_channel shortcut=45 contentView=null 
vibrate=null sound=null tick defaults=LIGHTS flags=0 color=0xff0a69fe category=msg actions=2 vis=PRIVATE)
> 07-02 17:31:39.051 D/SystemUINotificationLice( 2380): setThunderButtonVisibleNeeded Notification(channel=mms_channel shortcut=45 contentView=null 
vibrate=null sound=null tick defaults=LIGHTS flags=0 color=0xff0a69fe category=msg actions=2 vis=PRIVATE)
> 07-02 17:31:39.052 D/SystemUINotificationLice( 2380): updateButtonVisibleIfNeeded Notification(channel=mms_channel shortcut=45 contentView=null 
vibrate=null sound=null tick defaults=LIGHTS flags=0 color=0xff0a69fe category=msg actions=2 vis=PRIVATE)
  07-02 17:31:39.053 D/ModeController( 2380): isSmartPanelState: setPackageName:, smartPanelState:false
  07-02 17:31:39.053 D/ModeController( 2380): isSmartPanelState: setPackageName:, smartPanelState:false
  07-02 17:31:39.053 D/NotifContentInflater( 2380): createRemoteViews isConciseStyle: false, isAppLock: false, game: false, isSpecialStyle: false, intent: 
PendingIntent{2f667fb: android.os.BinderProxy@3456d17}, isMultiWindowBlackApp: false, isMultiWindowWhitelistSupport: trueshowThunderBackIcon: true
> 07-02 17:31:39.053 D/SystemUINotificationLice( 2380): setThunderButtonVisibleNeeded Notification(channel=mms_channel shortcut=45 contentView=null 
vibrate=null sound=null tick defaults=LIGHTS flags=0 color=0xff0a69fe category=msg actions=2 vis=PRIVATE)
> 07-02 17:31:39.053 D/SystemUINotificationLice( 2380): updateButtonVisibleIfNeeded Notification(channel=mms_channel shortcut=45 contentView=null 
vibrate=null sound=null tick defaults=LIGHTS flags=0 color=0xff0a69fe category=msg actions=2 vis=PRIVATE)
  07-02 17:31:39.058 D/BufferPoolAccessor2.0(11425): bufferpool2 0xb4000072a18c2a98 : 66(53177 size) total buffers - 1(467 size) used buffers - 744/1720 
(recycle/alloc) - 1025/1719 (fetch/transfer)
  07-02 17:31:39.065 D/ModeController( 2380): isSmartPanelState: setPackageName:, smartPanelState:false
  07-02 17:31:39.065 D/ModeController( 2380): canFilterCall: modeStates is null
  07-02 17:31:39.065 D/ModeController( 2380): isSmartPanelState: setPackageName:, smartPanelState:false
  07-02 17:31:39.065 D/ModeController( 2380): isCloseHeadsUpNotification: setPackageName:, packageName:com.transsion.smartmessage, headsUpEnabled:false
  07-02 17:31:39.066 D/ModeController( 2380): isSmartPanelState: setPackageName:, smartPanelState:false
  07-02 17:31:39.066 D/NuPlayer( 1307):  don't find container
  07-02 17:31:39.066 D/ModeController( 2380): canFilterCall: modeStates is null
  07-02 17:31:39.066 D/ModeController( 2380): isSmartPanelState: setPackageName:, smartPanelState:false
  07-02 17:31:39.066 D/ModeController( 2380): isCloseHeadsUpNotification: setPackageName:, packageName:com.transsion.smartmessage, headsUpEnabled:false
  07-02 17:31:39.069 D/LocalImageResolver( 2380): Couldn't use ImageDecoder for drawable, falling back to non-resized load.
  07-02 17:31:39.072 D/LocalImageResolver( 2380): Couldn't use ImageDecoder for drawable, falling back to non-resized load.
  07-02 17:31:39.077 I/SysUI(260310)_OverviewSysUiProxyService( 2380):  isEnabled mIsEnabled false mIsFoldExpanded true
  07-02 17:31:39.079 D/SysUI(260310)_TrStackScrollerController( 2380): updateShowEmptyShadeView: noNotifications=false, visibleNotificationCount=47, 
mediaNotificationVisible=false
  07-02 17:31:39.080 I/TranNotificationExpandButton( 2380): Call setExpandedVisibility
  07-02 17:31:39.080 D/LocalImageResolver( 2380): Couldn't use ImageDecoder for drawable, falling back to non-resized load.
  07-02 17:31:39.081 I/TranNotificationExpandButton( 2380): Call setExpandedVisibility
  07-02 17:31:39.081 I/TranNotificationExpandButton( 2380): Call setExpandedVisibility
  07-02 17:31:39.206 I/libPowerHal(  970): MTKPOWER_HINT_IN_SYSTEMUI: set gpu opp level: 15
  07-02 17:31:39.206 I/libPowerHal(  970): MTKPOWER_HINT_IN_SYSTEMUI: set gpu opp level max: 0
  07-02 17:31:39.207 I/mtkpower_client( 1698): ret_hdl:55405
  07-02 17:31:39.207 I/PowerHalMgrImpl( 1698): hdl:55405, pid:1698 
  07-02 17:31:39.207 I/mtkpower_client( 1698): perf_lock_rel, hdl:55405, tid:1843
  07-02 17:31:39.207 I/libPowerHal(  970): [fpsgo_ctrl_render_thread] 2485, 0xb400007bd0404b00
  07-02 17:31:39.209 I/libPowerHal(  970): [fpsgo_ctrl_render_thread] 2485, 0xb400007bd0404b00
  07-02 17:31:39.209 I/libPowerHal(  970): [PD] system_server update ONESHOT cmd:2000300 param:2485
> 07-02 17:31:39.211 I/BufferQueueDebug( 1012): [Surface(name=f48663c StatusBar)/@0x8eec4a5 - animation-leash of 
insets_animation#19428](this:0xb40000731f64e3b8,id:-1,api:0,p:-1,c:-1) BufferQueue core=(1012:/system/bin/surfaceflinger)
  07-02 17:31:39.215 I/SysUI(260310)_TrNotificationShadeWindowView( 2380): onWindowVisibilityChanged  visibility 0
  07-02 17:31:39.222 I/mtkpower_client( 1080): perf_lock_rel, hdl:55403, tid:1080
  07-02 17:31:39.223 I/libPowerHal(  970): [PD] fpsgo update cmd:1408300 param:0
  07-02 17:31:39.224 E/ApplicationHelper( 1698): Fail to get PackageManager
  07-02 17:31:39.227 I/TAG_BadgeReceiver( 2371): LAUNCHER_DEBUG receiverUnreadAction unread num changed, action=com.mediatek.action.UNREAD_CHANGED
  07-02 17:31:39.228 I/tBadge_transsionapp-RECEIVE-( 2371): receiver action one,unreadNum is  1733 ,componentName is 
ComponentInfo{com.transsion.smartmessage/com.android.messaging.ui.conversationlist.ConversationListActivity}  settingFlag=-1userId=0
  07-02 17:31:39.228 I/TAG_BadgeReceiver( 2371): LAUNCHER_DEBUG receiverUnreadAction unread num changed, action=com.mediatek.action.UNREAD_CHANGED
  07-02 17:31:39.228 I/TAG_BadgeDelegate-( 2371): BadgeDelegate#changeBadge ,componentName 
=ComponentInfo{com.transsion.smartmessage/com.android.messaging.ui.conversationlist.ConversationListActivity} , userId=0 , unreadNum=1733 
,isNeedRefresh=true
  07-02 17:31:39.230 I/tBadge_transsionapp-RECEIVE-( 2371): receiver action one,unreadNum is  1733 ,componentName is 
ComponentInfo{com.transsion.smartmessage/com.android.messaging.ui.conversationlist.ConversationListActivity}  settingFlag=-1userId=0
  07-02 17:31:39.230 I/TAG_BadgeDelegate-( 2371): BadgeDelegate#changeBadge ,componentName 
=ComponentInfo{com.transsion.smartmessage/com.android.messaging.ui.conversationlist.ConversationListActivity} , userId=0 , unreadNum=1733 
,isNeedRefresh=true
> 07-02 17:31:39.232 I/BufferQueueDebug( 1012): [NotificationShade#19429](this:0xb40000731f5a6388,id:-1,api:0,p:-1,c:-1) BufferQueue 
core=(1012:/system/bin/surfaceflinger)
  07-02 17:31:39.233 D/uas-service( 1219): thread(pid=2380) com.android.systemui is config default uxtag 0x420
  07-02 17:31:39.234 D/uas-service( 1219): thread(pid=2485) com.android.systemui is config default uxtag 0x420
  07-02 17:31:39.239 I/WindowManager( 1698): Relayout Window{dd05c0d u0 NotificationShade}: oldVis=4 newVis=0 focusMayChange = true requestedWidth = 1080 
requestedHeight = 2436 outFrames = ClientWindowFrames{frame=[0,0][1080,2436] display=[0,0][1080,2436] parentFrame=[0,0][0,0]} outSurfaceControl = 
Surface(name=NotificationShade)/@0xed3640
  07-02 17:31:39.240 D/BufferQueueConsumer( 2380): [](id:94c0000021b,api:0,p:-1,c:2380) connect: controlledByApp=false
> 07-02 17:31:39.240 D/BLASTBufferQueue( 2380): [VRI[NotificationShade]#525](f:0,a:0) constructor()
> 07-02 17:31:39.240 D/BLASTBufferQueue( 2380): [VRI[NotificationShade]#525](f:0,a:0) update width=1080 height=2436 format=-3 mTransformHint=0
  07-02 17:31:39.243 D/ModeController( 2380): isSmartPanelState: setPackageName:, smartPanelState:false
> 07-02 17:31:39.254 D/BLASTBufferQueue( 2380): [VRI[NotificationShade]#525](f:0,a:1) acquireNextBufferLocked size=1080x2436 mFrameNumber=1 
applyTransaction=true mTimestamp=161880387716264(auto) mPendingTransactions.size=0 graphicBufferId=10222022174164 transform=0
  07-02 17:31:39.255 D/WindowManager( 1698): System monitor finishDrawingWindow w: Window{dd05c0d u0 NotificationShade}; mDrawState = DRAW_PENDING
  07-02 17:31:39.257 I/WindowManager( 1698):   isAnimating=false  okToAnimate=true  win=Window{dd05c0d u0 NotificationShade}
  07-02 17:31:39.268 D/WifiViewBinder( 2380): bind: -1,activityInView.isVisible=true,activityOutView.isVisible=true
  07-02 17:31:39.268 D/WifiViewBinder( 2380): bind: -1,activityInView.isVisible=true,activityOutView.isVisible=true
  07-02 17:31:39.269 D/WifiViewBinder( 2380): bind: -1,activityInView.isVisible=true,activityOutView.isVisible=true
  07-02 17:31:39.272 D/ModeController( 2380): isSmartPanelState: setPackageName:, smartPanelState:false
> 07-02 17:31:39.275 I/DisplayDeviceRepository( 1698): Display device changed: DisplayDeviceInfo{"Layar Bawaan": uniqueId="local:0", 1080 x 2436, modeId 
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
  07-02 17:31:39.277 I/Griffin/DeviceState( 1698): virtualDisplayPackageName :{com.android.shell=2000}
  07-02 17:31:39.278 D/SystemServerTiming( 1698): getUserSwitchability-0
  07-02 17:31:39.280 D/SystemServerTiming( 1698): TM.isInCall
  07-02 17:31:39.282 D/SystemServerTiming( 1698): hasUserRestriction-DISALLOW_USER_SWITCH
  07-02 17:31:39.282 D/SystemServerTiming( 1698): getInt-ALLOW_USER_SWITCHING_WHEN_SYSTEM_USER_LOCKED
  07-02 17:31:39.282 D/SystemServerTiming( 1698): isUserUnlocked-USER_SYSTEM
  07-02 17:31:39.283 D/SystemServerTiming( 1698): getUserSwitchability-0
  07-02 17:31:39.283 D/SystemServerTiming( 1698): TM.isInCall
  07-02 17:31:39.284 D/SystemServerTiming( 1698): hasUserRestriction-DISALLOW_USER_SWITCH
  07-02 17:31:39.284 D/tranpm/BehaviorManager( 1698): onMemPressureChange : level 0
  07-02 17:31:39.284 D/SystemServerTiming( 1698): getInt-ALLOW_USER_SWITCHING_WHEN_SYSTEM_USER_LOCKED
  07-02 17:31:39.284 D/SystemServerTiming( 1698): isUserUnlocked-USER_SYSTEM
  07-02 17:31:39.285 D/BiometricsRepositoryImpl( 2380): currentUser authFlags changed, new value: AuthenticationFlags(userId=0, flag=0)
  07-02 17:31:39.285 D/BiometricsRepositoryImpl( 2380): currentUser authFlags changed, new value: AuthenticationFlags(userId=0, flag=0)
  07-02 17:31:39.307 I/mtkpower@impl(  970): [powerd_req] TIMER_MSG_PERF_LOCK_TIMEOUT hdl:55404
  07-02 17:31:39.307 I/libPowerHal(  970): [unsetGPUFreq] current min:15, max:0; scn_gpu_min:15, scn_gpu_max:-1; scn_gpu_min(HL):-1, scn_gpu_max(HL):-1
  07-02 17:31:39.307 I/libPowerHal(  970): MTKPOWER_HINT_IN_SYSTEMUI: set gpu opp level: 44
  07-02 17:31:39.307 I/libPowerHal(  970): MTKPOWER_HINT_IN_SYSTEMUI: set gpu opp level max: 0
  07-02 17:31:39.384 D/VibratorManagerService( 1698): Starting vibrate for vibration 1438
  07-02 17:31:39.386 D/VibratorController( 1698): controller on :350
  07-02 17:31:39.386 D/HapticPlayer( 1698): No  Support Richtap
  07-02 17:31:39.398 I/Vibrator(  988): Vibrator on for timeoutMs: 350
  07-02 17:31:39.399 D/Vibrator(  988): tran normal vibrator
  07-02 17:31:39.400 D/Vibrator(  988): Vibrator using LED trigger
  07-02 17:31:39.401 D/VibratorController( 1698): controller notifyVibrator
  07-02 17:31:39.485 D/BufferPoolAccessor2.0(11425): bufferpool2 0xb4000072a18c2a98 : 66(105640 size) total buffers - 1(6216 size) used buffers - 744/1737 
(recycle/alloc) - 1042/1736 (fetch/transfer)
> 07-02 17:31:39.488 I/SurfaceFlinger( 1012): onHandleDestroyed: name=Surface(name=f48663c StatusBar)/@0x8eec4a5 - animation-leash of 
insets_animation#19420, layerId=19420, parentId=0
  07-02 17:31:39.489 D/ModeController( 2380): isSmartPanelState: setPackageName:, smartPanelState:false
> 07-02 17:31:39.490 I/BufferQueueDebug( 1012): [Surface(name=f48663c StatusBar)/@0x8eec4a5 - animation-leash of 
insets_animation#19420](this:0xb40000731f5a0868,id:-1,api:0,p:-1,c:1012) onDestructor()
  07-02 17:31:39.494 I/BufferQueueProducer( 1012): [VDS-studio.screen.sharing:0 SINK](this:0xb40000725f674618,id:-1,api:1,p:1012,c:1012) queueBuffer: 
fps=50.22 dur=1015.59 max=115.33 min=14.10
  07-02 17:31:39.495 I/hwcomposer(  935): [HWCDisplay] [Display_0 (type:1)] fps:50.228336,dur:1015.36,max:115.25,min:13.67  
> 07-02 17:31:39.523 I/BufferQueueProducer( 1012): 
[SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity](BLAST)#19423](this:0xb40000731f5d6a18,id:-1,api:0,p:-1,c:1012) queueBuffer: fps=31.46 
dur=1049.02 max=499.24 min=16.37
  07-02 17:31:39.574 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.039778,0.000047, totalTime 0.039826 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:31:39.583 I/mtkpower_client( 1080): perf_lock_acq, hdl:0, dur:30000, num:2, tid:1080
  07-02 17:31:39.584 I/mtkpower_client( 1080): ret_hdl:55406
  07-02 17:31:39.603 D/SysUI(260310)_TrJankMonitorUtils( 2380): updateJunkMonitorScene: false, reason: NOTIFICATION_HEADS_UP_APPEAR SceneSize 1
  07-02 17:31:39.634 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.039919,0.000134, totalTime 0.040054 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:31:39.634 D/ModeController( 2380): isSmartPanelState: setPackageName:, smartPanelState:false
  07-02 17:31:39.639 I/Process ( 1698): String at 0: 0x766d535a01 = SFMainPolicy
  07-02 17:31:39.640 I/mtkpower_client( 1698): perf_lock_rel, hdl:55404, tid:1843
  07-02 17:31:39.641 I/mtkpower_client( 1698): perf_lock_acq, hdl:55405, dur:0, num:2, pid:1698, tid:1843
  07-02 17:31:39.641 I/mtkpower_client( 1698): ret_hdl:55407
  07-02 17:31:39.641 I/PowerHalMgrImpl( 1698): hdl:55407, pid:1698 
  07-02 17:31:39.641 I/mtkpower_client( 1698): perf_lock_rel, hdl:55407, tid:1843
  07-02 17:31:39.643 I/libPowerHal(  970): [fpsgo_ctrl_render_thread] -2485, 0xb400007bd0403b78
  07-02 17:31:39.644 I/libPowerHal(  970): [fpsgo_ctrl_render_thread] -2485, 0xb400007bd0403b78
  07-02 17:31:39.644 I/libPowerHal(  970): [PD] system_server update ONESHOT cmd:2000300 param:-2485
  07-02 17:31:39.655 D/TrCloudNotificationSupportController( 2380): containCloudNotificationSupportApp: com.transsion.smartmessagenot in the cloud list
  07-02 17:31:39.655 D/TrCloudNotificationSupportController( 2380): containLocalNotificationSupportApp: com.transsion.smartmessagenot in the local list
  07-02 17:31:39.678 I/Griffin/DeviceState( 1698): update playerItem, pid = 2380 , uid = 10159, package = com.android.systemui, playerId = 7223, 
playerState = 2
  07-02 17:31:39.678 I/GenericSource( 1307): start
  07-02 17:31:39.679 I/Griffin/DeviceState( 1698): Caller from 2, create the new playerItem: 
  07-02 17:31:39.679 I/Griffin/DeviceState( 1698): AudioPlayerItem{playerId=7223, playerState=2, lastUpdateTime=178881160, currentTime= 178881160}
  07-02 17:31:39.680 D/updatePlayer( 1698): update playerItem, pid = 2380 , uid = 10159, package = com.android.systemui, playerId = 7223, playerState = 2
  07-02 17:31:39.680 I/AS.PlaybackActivityMon( 1698): dispatchPlayback size:11 to client size:4
> 07-02 17:31:39.684 D/MediaRouter( 2380): onRestoreRoute() : route=RouteInfo{ name=Ponsel, description=null, status=null, category=RouteCategory{ 
name=Sistem types=ROUTE_TYPE_LIVE_AUDIO ROUTE_TYPE_LIVE_VIDEO  groupable=false }, supportedTypes=ROUTE_TYPE_LIVE_AUDIO ROUTE_TYPE_LIVE_VIDEO , 
presentationDisplay=null }
> 07-02 17:31:39.684 V/MediaRouter( 2380): Selecting route: RouteInfo{ name=Ponsel, description=null, status=null, category=RouteCategory{ name=Sistem 
types=ROUTE_TYPE_LIVE_AUDIO ROUTE_TYPE_LIVE_VIDEO  groupable=false }, supportedTypes=ROUTE_TYPE_LIVE_AUDIO ROUTE_TYPE_LIVE_VIDEO , 
presentationDisplay=null }
  07-02 17:31:39.692 W/libc    ( 1307): Access denied finding property "vendor.debug.sf.dynamic_duration.sf.decouple"
  07-02 17:31:39.696 D/MediaCodec( 1307): CreateByType: mime audio/vorbis, encoder 0 pid 2380
  07-02 17:31:39.697 D/MediaCodecList( 1307): processName: /system/bin/mediaserver , mime: audio/vorbis
  07-02 17:31:39.701 D/MediaCodec( 1307): MediaCodec Construct(0xe59c1140)
  07-02 17:31:39.707 D/CCodecBufferChannel( 1307): mBufferCountDebug=0 mIsUserLoad=1
  07-02 17:31:39.709 D/MBrainDateManager( 1307): MBrainDataManager Constructor caller
  07-02 17:31:39.709 D/MBrainManager( 1307): mMBrainSupport 0, return NULL
  07-02 17:31:39.710 D/MBrainDateManager( 1307): mMBrainManager = nullptr
  07-02 17:31:39.710 D/CCodecBufferChannel( 1307): new MBrainDataManager() fail
  07-02 17:31:39.710 D/MBrainDateManager( 1307): MBrainDataManager Constructor clear
  07-02 17:31:39.710 D/MediaCodec( 1307): [0xe59c1140] init: CCodec 0xe70c20b0, CCodecBufferChannel 0xe6505950
  07-02 17:31:39.711 D/MediaCodec( 1307): [0xe59c1140] setState: 1
  07-02 17:31:39.712 D/CCodec  ( 1307): allocate(c2.android.vorbis.decoder)
  07-02 17:31:39.716 I/CCodec  ( 1307): setting up 'default' as default (vendor) store
  07-02 17:31:39.737 D/VibratorController( 1698): controller off in lock
  07-02 17:31:39.739 D/Vibrator(  988): Vibrator off
  07-02 17:31:39.739 D/Vibrator(  988): tran normal vibrator
  07-02 17:31:39.739 D/Vibrator(  988): Vibrator using LED trigger
  07-02 17:31:39.796 D/CCodecBuffers( 1307): [c2.android.vorbis.decoder#742:1D-Output.Impl[N]] converted 0 buffers to array mode of 4
  07-02 17:31:39.796 D/C2MtkComponentStore(  937): setDmaBufUsage: usage 5, flags 0, heapName mtk_mm for decoder.
  07-02 17:31:39.799 D/SimpleC2Component(11425): Using output block pool with poolID 108 => got 108 - 0
  07-02 17:31:39.800 D/MediaCodec( 1307): [0xe59c1140] setState: 6
  07-02 17:31:39.800 D/CCodecBufferChannel( 1307): The csd Sample queue
  07-02 17:31:39.803 D/CCodecBufferChannel( 1307): The csd Sample queue
  07-02 17:31:39.806 D/C2MtkComponentStore(  937): setDmaBufUsage: usage 5, flags 0, heapName mtk_mm for decoder.
  07-02 17:31:39.827 D/AudioTrack( 1307): INSP: type=audio,case=1,set=0xe7e40010,stream_type=5,sample_rate=44100,format=0x1,channel_mask=0x3,frame_count=22
560,flags=0x0,notification_frames=0,session_id=7753,transfer_type=0,uid=10159,pid=2380
> 07-02 17:31:39.828 D/AudioTrack( 1307): INSP: type=audio,case=1,attributes=1,content_type=4,usage=5,source=-1,flags=0x800
  07-02 17:31:39.834 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000000,0.040084,0.000125, totalTime 0.040209 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:31:39.871 D/AudioFlinger_Threads(  990): Client defaulted notificationFrames to 7520 for frameCount 22560
  07-02 17:31:39.874 D/TranFlinger(  990): checkIsFuncEnabled isSupport: 1 funcKey:FUNCTION_ZERO_SOUND_DETECT 
  07-02 17:31:39.875 D/TranFlinger(  990): checkIsFuncSupportPkg isSupport: 1 funcKey:FUNCTION_ZERO_SOUND_DETECT pkg:com.android.systemui
  07-02 17:31:39.875 D/TranFlinger(  990): tr_audio_stability_state = 0
  07-02 17:31:39.875 D/audioserver(  990): isZeroSoundDetectionEnabled FUNCTION_ZERO_SOUND_DETECT is enable
  07-02 17:31:39.875 D/audioserver(  990): isZeroSoundDetectionEnabled disable, pkg=com.android.systemui bypass ZeroSoundDetect
  07-02 17:31:39.876 D/audioserver(  990): func=init,line=323∩╝îaudioformat=1, channlCount=2
  07-02 17:31:39.877 D/AF::Track(  990): Track, track(0xb40000792731a430): mFastIndex -1, mStreamType 5, mId 996, mFrameCount 22560, mSampleRate 44100, 
mFormat 1, mChannelCount 2, mTrackCount 941, thread 0xb400007b8af48fe8, sessionId 7753, AudioOut_D, primary-2
  07-02 17:31:39.883 D/C2MtkComponentStore(  937): setDmaBufUsage: usage 5, flags 0, heapName mtk_mm for decoder.
  07-02 17:31:39.893 D/AudioTrack( 1307): createTrack_l(1215): 0xe7e40010, mCblk = 0xec7b1000, mLatency = 553, mAfLatency = 42, frameCount = 22560, 
mSampleRate = 44100, mFlags = 0, mReqFrameCount = 22560, mNotificationFramesAct = 7520
  07-02 17:31:39.904 D/TranWifiTputMonitor( 1698): WIFI: TX: 7 RX: 24 TOTAL = 31
  07-02 17:31:39.905 D/TranWifiTputMonitor( 1698): High Tput: false, TOTAL TPUT: 31
  07-02 17:31:39.910 D/AudioTrack( 1307): setVolume(1215): 0xe7e40010, left = 1.000000, right = 1.000000
  07-02 17:31:39.928 D/AudioFlinger_Threads(  990): ro.audio.silent is ignored since no output device is set
  07-02 17:31:39.929 D/AudioTrack( 1307): setVolume(1215): 0xe7e40010, left = 1.000000, right = 1.000000
  07-02 17:31:39.930 D/AudioTrack( 1307): start(1215): 0xe7e40010, prior state:STATE_STOPPED
  07-02 17:31:39.931 D/TranFlinger(  990): checkIsFuncEnabled isSupport: 1 funcKey:FUNCTION_ADDPERFORMANCE 
  07-02 17:31:40.008 D/APM_AudioPolicyManager(  990): setOutputDevices() AF::createAudioPatch returned 0 patchHandle 7324 num_sources 1 num_sinks 1
  07-02 17:31:40.012 V/Hiber/hiber( 1698): unfreeze from hiber: (0,990,1041,30346,10124), rpcName: android.media.IAudioPolicyServiceClient, code: 3, 
reason:asyncBinderWhiteList
  07-02 17:31:40.014 D/AudioPolicyManagerCustomImpl(  990): fm_applyGainFromCheckAndSetVolume size 0/5
  07-02 17:31:40.014 D/AudioPolicyManagerCustomImpl(  990): fm_applyGainFromCheckAndSetVolume size 1/5
  07-02 17:31:40.014 D/AudioPolicyManagerCustomImpl(  990): fm_applyGainFromCheckAndSetVolume size 2/5
  07-02 17:31:40.014 D/AudioPolicyManagerCustomImpl(  990): fm_applyGainFromCheckAndSetVolume size 3/5
  07-02 17:31:40.014 D/AudioPolicyManagerCustomImpl(  990): fm_applyGainFromCheckAndSetVolume size 4/5
  07-02 17:31:40.014 I/AudioPolicyManagerCustomImpl(  990): MTK_VOLUME_DEBUG mVolumeStream 5 != activeStream 5, mVolumeIndex 14 != index 14, mVolumeDevice 
0x2 != device 0x2, force 0
> 07-02 17:31:40.015 W/APM::AudioPolicyEngine/ProductStrategy(  990): getVolumeGroupForStreamType: no volume group for AUDIO_STREAM_DEFAULT, using default
> 07-02 17:31:40.015 W/APM::AudioPolicyEngine/ProductStrategy(  990): getVolumeGroupForStreamType: no volume group for AUDIO_STREAM_DEFAULT, using default
> 07-02 17:31:40.015 W/APM::AudioPolicyEngine/ProductStrategy(  990): getVolumeGroupForStreamType: no volume group for AUDIO_STREAM_DEFAULT, using default
> 07-02 17:31:40.015 W/APM::AudioPolicyEngine/ProductStrategy(  990): getVolumeGroupForStreamType: no volume group for AUDIO_STREAM_DEFAULT, using default
> 07-02 17:31:40.015 W/APM::AudioPolicyEngine/ProductStrategy(  990): getVolumeGroupForStreamType: no volume group for AUDIO_STREAM_DEFAULT, using default
> 07-02 17:31:40.016 W/APM::AudioPolicyEngine/ProductStrategy(  990): getVolumeGroupForStreamType: no volume group for AUDIO_STREAM_DEFAULT, using default
> 07-02 17:31:40.016 W/APM::AudioPolicyEngine/ProductStrategy(  990): getVolumeGroupForStreamType: no volume group for AUDIO_STREAM_DEFAULT, using default
> 07-02 17:31:40.016 W/APM::AudioPolicyEngine/ProductStrategy(  990): getVolumeGroupForStreamType: no volume group for AUDIO_STREAM_DEFAULT, using default
> 07-02 17:31:40.016 W/APM::AudioPolicyEngine/ProductStrategy(  990): getVolumeGroupForStreamType: no volume group for AUDIO_STREAM_DEFAULT, using default
> 07-02 17:31:40.016 W/APM::AudioPolicyEngine/ProductStrategy(  990): getVolumeGroupForStreamType: no volume group for AUDIO_STREAM_DEFAULT, using default
  07-02 17:31:40.016 I/AudioPolicyManagerCustomImpl(  990): MTK_VOLUME_DEBUG mVolumeStream 5 != activeStream 5, mVolumeIndex 14 != index 14, mVolumeDevice 
0x2 != device 0x2, force 0
  07-02 17:31:40.017 D/AudioFlinger_Threads(  990): addTrack_l mIsResampleFixSupport:0
  07-02 17:31:40.017 D/TranFlinger_Threads(  990): addTrack_l() Track ID 996 stream type 5 is not supported by DTS
  07-02 17:31:40.017 D/TranFlinger_Threads(  990): addTrackCount: lock trackId:996
  07-02 17:31:40.017 D/TranFlinger_Threads(  990): addTrackCount: mNonMusicActiveTrack add mNonMusicActiveTrack:0
  07-02 17:31:40.017 D/TranFlinger_Threads(  990): addTrackCount: unlock
  07-02 17:31:40.017 D/audioserver(  990): logFgsApiBegin: FGS Logger Transaction failed, -129
  07-02 17:31:40.017 E/TranFlinger_Threads(  990): onAddnewTrack_l is 19589
  07-02 17:31:40.020 D/uas-service( 1219): thread(pid=19589) ux_exact_audiomixer is uxtag 0x100480 ref 0x3
  07-02 17:31:40.021 D/TranFlinger(  990): checkIsFuncEnabled isSupport: 1 funcKey:FUNCTION_FADEOUTIN 
  07-02 17:31:40.021 I/Usf/appStateManager( 1698): handleUpdateAudioFocusState uid: 10159    packageName: add
  07-02 17:31:40.021 D/TranFlinger(  990): checkIsFuncSupportPkg isSupport: 0 funcKey:FUNCTION_FADEOUTIN pkg:/system/bin/mediaserver
  07-02 17:31:40.022 D/TranFlinger(  990): tr_audio_stability_state = 0
  07-02 17:31:40.023 I/AS.PlaybackActivityMon( 1698): dispatchPlayback size:11 to client size:4
  07-02 17:31:40.024 D/AudioALSAStreamOut(  920): +setParameters(): flag 2, MixerThreadSleep=
  07-02 17:31:40.024 W/AudioALSAStreamOut(  920): setParameters(), still have param.size() = 1, remain param = "MixerThreadSleep="
  07-02 17:31:40.025 D/AudioALSAStreamOut(  920): +setParameters(): flag 2, NoAudioTrack=0
  07-02 17:31:40.025 W/AudioALSAStreamOut(  920): setParameters(), still have param.size() = 1, remain param = "NoAudioTrack=0"
  07-02 17:31:40.045 D/TranSignalStrengthComponentImpl(23237): [LTE] dbm: -89
  07-02 17:31:40.046 D/TranSignalStrengthComponentImpl(23237): [LTE] dbm: -90
  07-02 17:31:40.046 D/TranSignalStrengthComponentImpl(23237): [LTE] dbm: -86
  07-02 17:31:40.049 E/FSM     (  920): fsm_audio_query_param_buf_size_by_custom_info(), the specified file does not exist using 
default:/vendor/etc/audio_param/preset_default.bin
  07-02 17:31:40.050 I/Griffin/DeviceState( 1698): update playerItem, pid = 2380 , uid = 10159, package = com.android.systemui, playerId = 7223, 
playerState = 2
  07-02 17:31:40.050 D/updatePlayer( 1698): update playerItem, pid = 2380 , uid = 10159, package = com.android.systemui, playerId = 7223, playerState = 2
  07-02 17:31:40.050 I/AS.PlaybackActivityMon( 1698): dispatchPlayback size:11 to client size:4
  07-02 17:31:40.051 E/FSM     (  920): fsm_audio_parsing_param_file_by_custom_info(), the specified file does not exist using 
default:/vendor/etc/audio_param/preset_default.bin
> 07-02 17:31:40.051 D/aurisys_lib_handler(  920): aurisys_arsi_parsing_param_file(), gProductInfo "platform=MT6789,device=Infinix-X6853,model=Infinix 
X6853", file_path "/vendor/etc/audio_param", enhancement_mode 0, param_buf_size 2872, data_size 2872, custom_info SetAudioCustomScene=;
  07-02 17:31:40.053 D/FSM     (  920): FSADSP: fs_algo_set_param enter param = 0xb400007b8b2956f0 size = 2872, ptr mod = 0xb4000079f4a3d108 end at 
0xb4000079f4b59000
  07-02 17:31:40.053 D/FSM     (  920): FSADSP: Preset info: 0xFA04 1504, [KJ5] [CY] [23-10-18 23:17:44], data len=2844 check sum=0x533D
  07-02 17:31:40.053 D/FSM     (  920): FSADSP: fs_algo_set_param check sum ok
  07-02 17:31:40.053 D/FSM     (  920): FSADSP: fs_algo_set_param global settings: ch_mod[2] volume[0x0000FFFF] iv_format[0]
  07-02 17:31:40.053 D/FSM     (  920): FSADSP: fs_algo_set_param global effect module with type 0x00000022
  07-02 17:31:40.054 D/FSM     (  920): FSADSP: fs_algo_set_param load effect parameters begin, module count = 3
  07-02 17:31:40.054 D/FSM     (  920): FSADSP: preset_data = 0x0xb4000079f4a51ea8 next pos = 0xb4000079f4a529e0 end = 0xb4000079f4b59000
  07-02 17:31:40.054 D/FSM     (  920): FSADSP: switch_app_mode effect_type[1] enable[0]
  07-02 17:31:40.054 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.039730,0.000083, totalTime 0.039814 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:31:40.054 D/FSM     (  920): FSADSP: switch_app_mode effect_type[7] enable[1]
  07-02 17:31:40.054 D/FSM     (  920): FSADSP: switch_app_mode effect_type[34] enable[0]
  07-02 17:31:40.058 D/FSM     (  920): fsm_set_ambient_temp temperature of battery: 39.099998
  07-02 17:31:40.058 E/FSM     (  920): fsm_set_ambient_temp set temperature to module failed
  07-02 17:31:40.058 D/aurisys_lib_handler(  920): aurisys_arsi_create_handler(), lib_name fsm_audio, 0xb400007aeb29e7d0, memory_size 1249280, 
arsi_handler 0xb4000079f4a28000, retval 0x0
  07-02 17:31:40.058 D/FSM     (  920): fsm_audio_set_debug_log_fp()+
  07-02 17:31:40.058 D/FSM     (  920): fsm_audio_query_process_unit_bytes()+
  07-02 17:31:40.058 D/aurisys_lib_handler(  920): aurisys_arsi_create_handler(), arsi_query_process_unit_bytes, ul 0, dl 3840, retval 0
  07-02 17:31:40.058 D/aurisys_lib_manager(  920): DL Lib, lib_name fsm_audio, 0xb400007aeb29e7d0, sample_rate: 48000 => 48000, num_channels: 2 => 2, 
audio_format: 0x3 => 0x3, interleave: 1 => 0, frame: 0 => 10
  07-02 17:31:40.340 D/VibratorManagerService( 1698): Vibration 1438 on vibrator 1 complete, notifying thread
  07-02 17:31:40.342 D/VibratorController( 1698): controller off in lock
  07-02 17:31:40.342 D/Vibrator(  988): Vibrator off
  07-02 17:31:40.342 D/Vibrator(  988): tran normal vibrator
  07-02 17:31:40.343 D/Vibrator(  988): Vibrator using LED trigger
  07-02 17:31:40.343 D/VibratorController( 1698): controller notifyVibrator
  07-02 17:31:40.344 D/VibratorManagerService( 1698): Vibration 1438 finished with EndInfo{status=FINISHED, endedBy=null}
  07-02 17:31:40.344 D/VibratorManagerService( 1698): Reporting vibration 1438 finished with EndInfo{status=FINISHED, endedBy=null}
> 07-02 17:31:40.344 D/VibratorManagerService( 1698): Vibration for uid=1000 and with attrs=VibrationAttributes{mUsage=NOTIFICATION, mAudioUsage= 
USAGE_NOTIFICATION, mCategory=UNKNOWN, mFlags=0} ended with status FINISHED
  07-02 17:31:40.345 D/VibratorManagerService( 1698): VibrationThread released after finished vibration
  07-02 17:31:40.346 D/VibratorManagerService( 1698): Processing VibrationThread released callback
  07-02 17:31:40.353 D/CCodecBufferChannel( 1307): [c2.android.vorbis.decoder#742] input EOS
  07-02 17:31:40.354 D/CCodecBufferChannel( 1307): [c2.android.vorbis.decoder#742] buffers after EOS ignored (0 us)
  07-02 17:31:40.356 D/AudioTrack( 1307): stop(1215): 0xe7e40010, prior state:STATE_ACTIVE
  07-02 17:31:40.356 D/TranFlinger(  990): checkIsFuncEnabled isSupport: 1 funcKey:FUNCTION_FADEOUTIN 
  07-02 17:31:40.357 D/TranFlinger(  990): checkIsFuncSupportPkg isSupport: 0 funcKey:FUNCTION_FADEOUTIN pkg:/system/bin/mediaserver
  07-02 17:31:40.357 D/TranFlinger(  990): tr_audio_stability_state = 0
  07-02 17:31:40.357 D/AudioTrackShared( 1307): this(0xe7f40d90), mCblk(0xec7b1000), front(12230), mIsOut 1, interrupt() FUTEX_WAKE
  07-02 17:31:40.358 D/AudioTrack( 1307): stop(1215): 0xe7e40010 stop done
  07-02 17:31:40.362 D/tranpm/BehaviorManager( 1698): onMemPressureChange : level 0
  07-02 17:31:40.535 I/mtkpower_client( 1080): perf_lock_rel, hdl:55406, tid:1080
  07-02 17:31:40.535 D/TriggerService( 4219): trigger service is running
  07-02 17:31:40.536 I/libPowerHal(  970): [PD] fpsgo update cmd:1408300 param:0
> 07-02 17:31:40.539 I/BufferQueueProducer( 1012): 
[SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity](BLAST)#19423](this:0xb40000731f5d6a18,id:-1,api:0,p:-1,c:1012) queueBuffer: fps=2.95 
dur=1016.14 max=983.39 min=16.18
  07-02 17:31:40.554 I/BufferQueueProducer( 1012): [VDS-studio.screen.sharing:0 SINK](this:0xb40000725f674618,id:-1,api:1,p:1012,c:1012) queueBuffer: 
fps=8.50 dur=1059.18 max=884.99 min=15.82
  07-02 17:31:40.555 I/hwcomposer(  935): [HWCDisplay] [Display_0 (type:1)] fps:9.432084,dur:1060.21,max:711.68,min:15.69  
  07-02 17:31:40.568 D/AudioFlinger_Threads(  990): mNormalFrameCount(1024) * mFrameSize(8) mMixerBufferSize:40960 mEffectBufferSize:8192
  07-02 17:31:40.568 I/mtkpower_client( 1080): perf_lock_acq, hdl:0, dur:30000, num:2, tid:1080
  07-02 17:31:40.570 I/mtkpower_client( 1080): ret_hdl:55408
  07-02 17:31:40.634 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.039861,0.000039, totalTime 0.039901 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:31:40.674 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000000,0.039975,0.000098, totalTime 0.040073 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:31:40.704 D/WifiClientModeImpl[24001351:wlan0]( 1698): updateLinkLayerStatsRssiSpeedFrequencyCapabilities rssi=-55 TxLinkspeed=54 freq=5765 
RxLinkSpeed=36
  07-02 17:31:40.705 D/WifiDataStall( 1698): tx tput in kbps: 50000
  07-02 17:31:40.705 D/WifiDataStall( 1698): rx tput in kbps: 50000
  07-02 17:31:40.705 V/WifiConfigManager( 1698): Updating scan detail cache freq=5765 BSSID=ac:4a:56:28:fe:ee RSSI=-54 for "TAUFIKKOPIBATOH@WIFI.ID"NONE
  07-02 17:31:40.705 D/WifiThroughputPredictor( 1698):  utilization (LLS) 15 isBluetoothConnected: false final utilization: 15
  07-02 17:31:40.705 D/WifiThroughputPredictor( 1698):  BW: 0 RSSI: -55 Nss: 1 Mode: 1 symDur: 4000 snrDb 25 bitPerTone: 4500 rate: 54 throughput: 50
  07-02 17:31:40.705 D/WifiThroughputPredictor( 1698):  utilization (LLS) 15 isBluetoothConnected: false final utilization: 15
  07-02 17:31:40.705 D/WifiThroughputPredictor( 1698):  BW: 0 RSSI: -55 Nss: 1 Mode: 1 symDur: 4000 snrDb 25 bitPerTone: 4500 rate: 54 throughput: 50
  07-02 17:31:40.706 D/WifiThroughputPredictor( 1698):  utilization (LLS) 15 isBluetoothConnected: false final utilization: 15
  07-02 17:31:40.706 D/WifiThroughputPredictor( 1698):  BW: 0 RSSI: -55 Nss: 1 Mode: 1 symDur: 4000 snrDb 25 bitPerTone: 4500 rate: 54 throughput: 50
  07-02 17:31:40.706 D/WifiThroughputPredictor( 1698):  utilization (LLS) 15 isBluetoothConnected: false final utilization: 15
  07-02 17:31:41.418 D/TranSignalStrengthComponentImpl(23237): [LTE] dbm: -86
  07-02 17:31:41.418 D/TranSignalStrengthComponentImpl(16756): [LTE] dbm: -86
  07-02 17:31:41.420 D/TranPhoneSwitcher( 2620): getNetworkType: 4G
  07-02 17:31:41.420 I/TranPhoneSwitcher( 2620): mDefaultsign:4subid :2
  07-02 17:31:41.420 D/TranSignalStrengthComponentImpl(30413): [LTE] dbm: -86
  07-02 17:31:41.426 D/TranSignalStrengthComponentImpl(30413): [LTE] dbm: -86
  07-02 17:31:41.546 I/mtkpower_client( 1080): perf_lock_rel, hdl:55408, tid:1080
  07-02 17:31:41.547 I/libPowerHal(  970): [PD] fpsgo update cmd:1408300 param:0
> 07-02 17:31:41.555 I/BufferQueueProducer( 1012): 
[SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity](BLAST)#19423](this:0xb40000731f5d6a18,id:-1,api:0,p:-1,c:1012) queueBuffer: fps=0.98 
dur=1015.88 max=1015.88 min=1015.88
  07-02 17:31:41.570 I/BufferQueueProducer( 1012): [VDS-studio.screen.sharing:0 SINK](this:0xb40000725f674618,id:-1,api:1,p:1012,c:1012) queueBuffer: 
fps=0.98 dur=1016.04 max=1016.04 min=1016.04
  07-02 17:31:41.571 I/hwcomposer(  935): [HWCDisplay] [Display_0 (type:1)] fps:0.984222,dur:1016.03,max:1016.03,min:1016.03  
  07-02 17:31:41.592 I/mtkpower_client( 1080): perf_lock_acq, hdl:0, dur:30000, num:2, tid:1080
  07-02 17:31:41.594 I/mtkpower_client( 1080): ret_hdl:55409
  07-02 17:31:41.597 I/mtkpower_client( 1080): perf_lock_rel, hdl:55409, tid:1080
  07-02 17:31:41.598 I/libPowerHal(  970): [PD] fpsgo update cmd:1408300 param:0
  07-02 17:31:41.624 I/StatusBarNetworkRateView( 2380): wifi is default. hide second network rate view. StatusBarNetworkRateView subId=2, 
isFirstSimCard=false, mLocation=QS_NEW NetworkRateState=NetworkRateState{visible=true, activeMobileDataSubId=2, totalRate=21.159, netWorkState=1, 
isAirplane=false, netRateStateBySettingGlobal=1, networkRate='21,2', networkRateUnit='KB/S'}
  07-02 17:31:41.637 D/ModeController( 2380): isSmartPanelState: setPackageName:, smartPanelState:false
  07-02 17:31:41.654 I/BufferQueueProducer( 1012): [StatusBar#97](this:0xb40000731f578a88,id:-1,api:0,p:-1,c:1012) queueBuffer: fps=4.59 dur=2613.87 
max=2247.59 min=16.31
> 07-02 17:31:41.654 I/BufferQueueProducer( 1012): [NotificationShade#19429](this:0xb40000731f5a6388,id:-1,api:0,p:-1,c:1012) queueBuffer: fps=9.59 
dur=2397.69 max=1996.48 min=16.25
  07-02 17:31:41.766 D/AudioALSAStreamOut(  920): standby(), flag 2
  07-02 17:31:41.766 D/AudioALSAStreamOut(  920): standbyStreamOut(), halRequest 0, mDestroy 0, flag 2
  07-02 17:31:41.766 D/AudioALSAStreamOut(  920): close(), flags 2
  07-02 17:31:41.767 D/AudioALSAPlaybackHandlerNormal(  920): +close(), flag = 2, mDevice = 0x2
  07-02 17:31:41.767 D/AudioALSAHardwareResourceManager(  920): +stopOutputDevice(), mOutputDevices = 0x2, mStartOutputDevicesCount = 1
  07-02 17:31:41.767 D/AudioALSAHardwareResourceManager(  920): CloseSpeakerPath(), defined MTK_GENERIC_HAL
  07-02 17:31:41.767 D/AudioALSADeviceConfigManager(  920): ApplyDeviceTurnoffSequenceByName(), DeviceName = ext_speaker_output 
descriptor->DeviceStatusCounter = 1, Ctlsize=2
  07-02 17:31:41.788 D/AudioALSADeviceConfigManager(  920): ApplyDeviceTurnoffSequenceByName(), DeviceName = dual_speaker_output 
descriptor->DeviceStatusCounter = 1, Ctlsize=4
  07-02 17:31:41.795 D/AudioALSAHardwareResourceManager(  920): notifyOutputDeviceStatusChange(), device = 2, status = 1, sampleRate = 0, 
mOpenSpeakerPathCount = 0
  07-02 17:31:41.795 D/AudioALSAStreamManager(  920): speakerStatusChangeCb(), status = 1, sampleRate = 0
  07-02 17:31:41.795 D/AudioALSAVoiceWakeUpController(  920): updateSpeakerPlaybackStatus(), isSpeakerPlaying = 0
  07-02 17:31:41.795 D/AudioALSAPlaybackHandlerBase(  920): +closePcmDriver(), mPcm = 0xb400007bfb2940f0
  07-02 17:31:41.796 D/AudioALSAPlaybackHandlerBase(  920): -closePcmDriver(), mPcm = 0x0
  07-02 17:31:41.796 D/AudioALSADeviceConfigManager(  920): ApplyDeviceTurnoffSequenceByName(), DeviceName = PLAYBACK1_TO_ADDA_DL 
descriptor->DeviceStatusCounter = 1, Ctlsize=4
  07-02 17:31:41.798 D/AudioALSAPlaybackHandlerBase(  920): DestroyAurisysLibManager()
  07-02 17:31:41.798 D/FSM     (  920): fsm_audio_destroy_handler(), p_handler = 0xb4000079f4a28000, scenario = 2
  07-02 17:31:41.798 D/aurisys_lib_handler(  920): aurisys_arsi_destroy_handler(), lib_name fsm_audio, 0xb400007aeb29e7d0, arsi_destroy_handler, 
arsi_handler = 0xb4000079f4a28000, retval = 0
  07-02 17:31:41.800 D/aurisys_lib_manager(  920): delete_aurisys_lib_manager(), manager 0xb400007bdb2cb8b0
  07-02 17:31:42.222 I/TranTele/TranPhoneInterfaceManager( 2620): [getPTWhiteList]
  07-02 17:31:42.223 I/TranTele/TranPhoneInterfaceManager( 2620): [getPtPolicyforSlotIndex]
  07-02 17:31:42.405 D/BoundBrokerSvc( 4458): onUnbind: Intent { act=com.google.android.gms.common.telemetry.service.START dat=chimera-action:/... 
cmp=com.google.android.gms/.chimera.PersistentApiService }
  07-02 17:31:42.421 I/native  ( 5782): I0000 00:00:1782988302.421105    5913 soda_impl.cc:1968] Adding hotword timeout event
  07-02 17:31:42.424 W/ProxyAndroidLoggerBackend( 5782): Too many Flogger logs received before configuration. Dropping old logs.
  07-02 17:31:42.424 W/ProxyAndroidLoggerBackend( 5782): Too many Flogger logs received before configuration. Dropping old logs.
  07-02 17:31:42.424 W/ProxyAndroidLoggerBackend( 5782): Too many Flogger logs received before configuration. Dropping old logs.
  07-02 17:31:42.535 D/TriggerService( 4219): trigger service is running
> 07-02 17:31:42.570 I/BufferQueueProducer( 1012): 
[SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity](BLAST)#19423](this:0xb40000731f5d6a18,id:-1,api:0,p:-1,c:1012) queueBuffer: fps=58.13 
dur=1015.00 max=33.22 min=15.89
  07-02 17:31:42.575 I/BufferQueueProducer( 1012): [VDS-studio.screen.sharing:0 SINK](this:0xb40000725f674618,id:-1,api:1,p:1012,c:1012) queueBuffer: 
fps=58.68 dur=1005.51 max=35.84 min=11.73
  07-02 17:31:42.577 I/hwcomposer(  935): [HWCDisplay] [Display_0 (type:1)] fps:58.691757,dur:1005.25,max:36.07,min:11.35  
  07-02 17:31:42.606 I/mtkpower_client( 1080): perf_lock_acq, hdl:0, dur:30000, num:2, tid:1080
  07-02 17:31:42.607 I/mtkpower_client( 1080): ret_hdl:55410
  07-02 17:31:42.612 I/mtkpower_client( 1080): perf_lock_rel, hdl:55410, tid:1080
  07-02 17:31:42.612 I/libPowerHal(  970): [PD] fpsgo update cmd:1408300 param:0
  07-02 17:31:42.822 D/BufferPoolAccessor2.0(11425): bufferpool2 0xb4000072a18c2a98 : 66(95050 size) total buffers - 1(678 size) used buffers - 761/1840 
(recycle/alloc) - 1128/1839 (fetch/transfer)
  07-02 17:31:42.874 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.039309,0.000121, totalTime 0.039431 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:31:42.887 I/mtkpower_client( 1080): perf_lock_acq, hdl:0, dur:30000, num:2, tid:1080
  07-02 17:31:42.889 I/mtkpower_client( 1080): ret_hdl:55411
  07-02 17:31:42.894 I/mtkpower_client( 1080): perf_lock_rel, hdl:55411, tid:1080
  07-02 17:31:42.896 I/libPowerHal(  970): [PD] fpsgo update cmd:1408300 param:0
  07-02 17:31:42.906 D/TranWifiTputMonitor( 1698): WIFI: TX: 1 RX: 1 TOTAL = 2
  07-02 17:31:42.906 D/TranWifiTputMonitor( 1698): High Tput: false, TOTAL TPUT: 2
  07-02 17:31:42.911 D/TranSignalStrengthComponentImpl( 2620): [LTE] dbm: -84
  07-02 17:31:42.913 D/TranSignalStrengthComponentImpl( 2620): [LTE] dbm: -82
  07-02 17:31:42.913 D/TranSignalStrengthComponentImpl( 2620): [LTE] dbm: -82
  07-02 17:31:42.920 D/TranSignalStrengthComponentImpl( 1698): [LTE] dbm: -82
  07-02 17:31:43.540 D/C2MtkComponentStore(  937): setDmaBufUsage: usage 5, flags 0, heapName mtk_mm for decoder.
  07-02 17:31:43.544 I/mtkpower_client( 1080): perf_lock_acq, hdl:0, dur:30000, num:2, tid:1080
  07-02 17:31:43.545 I/mtkpower_client( 1080): ret_hdl:55422
  07-02 17:31:43.554 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000000,0.039798,0.000093, totalTime 0.039891 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:31:43.557 I/mtkpower_client( 1080): perf_lock_rel, hdl:55422, tid:1080
  07-02 17:31:43.558 I/libPowerHal(  970): [PD] fpsgo update cmd:1408300 param:0
  07-02 17:31:43.577 I/BufferQueueProducer( 1012): [VDS-studio.screen.sharing:0 SINK](this:0xb40000725f674618,id:-1,api:1,p:1012,c:1012) queueBuffer: 
fps=49.93 dur=1001.42 max=51.73 min=10.73
  07-02 17:31:43.578 I/hwcomposer(  935): [HWCDisplay] [Display_0 (type:1)] fps:50.929436,dur:1001.39,max:51.61,min:9.21  
> 07-02 17:31:43.585 I/BufferQueueProducer( 1012): 
[SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity](BLAST)#19423](this:0xb40000731f5d6a18,id:-1,api:0,p:-1,c:1012) queueBuffer: fps=50.24 
dur=1015.06 max=50.14 min=16.00
  07-02 17:31:43.606 D/C2MtkComponentStore(  937): setDmaBufUsage: usage 5, flags 0, heapName mtk_mm for decoder.
  07-02 17:31:43.622 D/C2MtkComponentStore(  937): setDmaBufUsage: usage 5, flags 0, heapName mtk_mm for decoder.
  07-02 17:31:43.720 D/WifiClientModeImpl[24001351:wlan0]( 1698): updateLinkLayerStatsRssiSpeedFrequencyCapabilities rssi=-58 TxLinkspeed=54 freq=5765 
RxLinkSpeed=6
  07-02 17:31:43.725 D/WifiClientModeImpl[24001351:wlan0]( 1698): reported txKbps 12000 rxKbps 60000
  07-02 17:31:43.725 D/WifiDataStall( 1698): tx tput in kbps: 50000
  07-02 17:31:43.725 D/WifiDataStall( 1698): rx tput in kbps: 50000
  07-02 17:31:43.725 V/WifiConfigManager( 1698): Updating scan detail cache freq=5765 BSSID=ac:4a:56:28:fe:ee RSSI=-56 for "TAUFIKKOPIBATOH@WIFI.ID"NONE
  07-02 17:31:43.726 I/TranTele/TranPhoneInterfaceManager( 2620): [onReceive] action: android.net.wifi.RSSI_CHANGED
  07-02 17:31:43.726 D/WifiThroughputPredictor( 1698):  utilization (LLS) 15 isBluetoothConnected: false final utilization: 15
  07-02 17:31:43.726 D/WifiThroughputPredictor( 1698):  BW: 0 RSSI: -58 Nss: 1 Mode: 1 symDur: 4000 snrDb 22 bitPerTone: 4500 rate: 54 throughput: 50
  07-02 17:31:43.726 D/WifiThroughputPredictor( 1698):  utilization (LLS) 15 isBluetoothConnected: false final utilization: 15
  07-02 17:31:43.726 D/WifiThroughputPredictor( 1698):  BW: 0 RSSI: -58 Nss: 1 Mode: 1 symDur: 4000 snrDb 22 bitPerTone: 4500 rate: 54 throughput: 50
  07-02 17:31:43.726 I/WifiService( 1698): getConnectionInfo uid=1001
  07-02 17:31:43.727 V/WifiService( 1698): Clearing REDACT_FOR_LOCAL_MAC_ADDRESS for com.android.phone(uid=1001)
  07-02 17:31:43.727 V/WifiService( 1698): Clearing REDACT_FOR_NETWORK_SETTINGS for com.android.phone(uid=1001)
  07-02 17:31:43.727 V/WifiService( 1698): Clearing REDACT_FOR_ACCESS_FINE_LOCATION for com.android.phone(uid=1001)
  07-02 17:31:43.728 D/WifiThroughputPredictor( 1698):  utilization (LLS) 15 isBluetoothConnected: false final utilization: 15
  07-02 17:31:43.728 D/WifiThroughputPredictor( 1698):  BW: 0 RSSI: -58 Nss: 1 Mode: 1 symDur: 4000 snrDb 22 bitPerTone: 4500 rate: 54 throughput: 50
  07-02 17:31:44.278 E/ApplicationHelper( 1698): Fail to get PackageManager
  07-02 17:31:44.396 D/ULogGuard( 1342): Monitoring: 15 threads, 0 requests, 0 time-bombs; 3 guards. ResetFlags = 0x7
  07-02 17:31:44.486 D/BufferPoolAccessor2.0(11425): bufferpool2 0xb4000072a18c2a98 : 66(463096 size) total buffers - 1(532 size) used buffers - 764/1928 
(recycle/alloc) - 1213/1927 (fetch/transfer)
  07-02 17:31:44.536 D/TriggerService( 4219): trigger service is running
  07-02 17:31:44.541 I/Hiber/importantScene( 1698): widget: packageName=com.rlk.weathers
  07-02 17:31:44.542 I/Hiber/appStateMachine( 1698): uid:10244, pkg=com.rlk.weathers  can't transition from R to F ,importantcase is : widget
  07-02 17:31:44.593 I/BufferQueueProducer( 1012): [VDS-studio.screen.sharing:0 SINK](this:0xb40000725f674618,id:-1,api:1,p:1012,c:1012) queueBuffer: 
fps=58.07 dur=1015.96 max=36.03 min=13.47
  07-02 17:31:44.595 I/hwcomposer(  935): [HWCDisplay] [Display_0 (type:1)] fps:58.001232,dur:1017.22,max:36.10,min:12.82  
> 07-02 17:31:44.601 I/BufferQueueProducer( 1012): 
[SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity](BLAST)#19423](this:0xb40000731f5d6a18,id:-1,api:0,p:-1,c:1012) queueBuffer: fps=58.07 
dur=1016.00 max=33.50 min=15.70
  07-02 17:31:44.838 D/ModeController( 2380): isSmartPanelState: setPackageName:, smartPanelState:false
  07-02 17:31:44.842 W/TouchableRegionManager( 2380): onHeadsUpPinnedModeChanged
  07-02 17:31:44.842 D/ControlCenterController( 2380): setInHeadsUpPinned mInHeadsUpPinned=false, mPanelExpanded=false
  07-02 17:31:44.849 I/SysUI(260310)_OverviewSysUiProxyService( 2380):  isEnabled mIsEnabled false mIsFoldExpanded true
  07-02 17:31:44.874 D/TrNotificationContentView( 2380): setRemoteInputVisible: visible:false
  07-02 17:31:44.874 D/TrNotificationContentView( 2380): setRemoteInputVisible: visible:false
  07-02 17:31:44.874 D/BufferPoolAccessor2.0(11425): bufferpool2 0xb4000072a18c2a98 : 66(153046 size) total buffers - 1(436 size) used buffers - 770/1951 
(recycle/alloc) - 1230/1950 (fetch/transfer)
  07-02 17:31:44.876 D/TrNotificationContentView( 2380): setRemoteInputVisible: visible:false
  07-02 17:31:44.876 D/TrNotificationContentView( 2380): setRemoteInputVisible: visible:false
  07-02 17:31:44.878 D/TrNotificationContentView( 2380): setRemoteInputVisible: visible:false
  07-02 17:31:44.880 D/TrNotificationContentView( 2380): setRemoteInputVisible: visible:false
  07-02 17:31:44.882 D/TrNotificationContentView( 2380): setRemoteInputVisible: visible:false
  07-02 17:31:44.884 D/TrNotificationContentView( 2380): setRemoteInputVisible: visible:false
  07-02 17:31:44.886 D/TrNotificationContentView( 2380): setRemoteInputVisible: visible:false
  07-02 17:31:44.887 D/TrNotificationContentView( 2380): setRemoteInputVisible: visible:false
  07-02 17:31:44.887 D/TrNotificationContentView( 2380): setRemoteInputVisible: visible:false
  07-02 17:31:44.890 D/TrNotificationContentView( 2380): setRemoteInputVisible: visible:false
  07-02 17:31:44.890 D/TrNotificationContentView( 2380): setRemoteInputVisible: visible:false
  07-02 17:31:44.949 I/AppThermalMode(  970): [perfNotifyThermalState] hdl:0
  07-02 17:31:44.949 I/AppThermalMode(  970): [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: 60,fg->pid:11190
  07-02 17:31:44.949 I/AppThermalMode(  970): [perfNotifyThermalState] appThermalIdx -1:
  07-02 17:31:44.949 I/libPerfCtl(  970): xgfGetFPS pid:11190 fps:59
  07-02 17:31:44.949 I/AppThermalMode(  970): [perfNotifyThermalState] hdl:0
  07-02 17:31:44.949 I/AppThermalMode(  970): [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: 60,fg->pid:11190
  07-02 17:31:44.949 I/AppThermalMode(  970): [perfNotifyThermalState] appThermalIdx -1:
  07-02 17:31:44.952 I/BufferQueueProducer( 1012): [StatusBar#97](this:0xb40000731f578a88,id:-1,api:0,p:-1,c:1012) queueBuffer: fps=0.30 dur=3297.46 
max=3297.46 min=3297.46
> 07-02 17:31:44.952 I/BufferQueueProducer( 1012): [NotificationShade#19429](this:0xb40000731f5a6388,id:-1,api:0,p:-1,c:1012) queueBuffer: fps=0.30 
dur=3297.46 max=3297.46 min=3297.46
  07-02 17:31:44.952 D/SysUI(260310)_ControlCenterAnimHelper( 2380): resetControlPanelView: reason=resetViews
  07-02 17:31:44.952 D/SysUI(260310)_ControlCenterAnimHelper( 2380): resetControlPanelView: reason=resetViews
  07-02 17:31:44.953 D/ControlCenterController( 2380): setExpandedHeightInternal: return, mExpandedHeight=0.0
  07-02 17:31:44.953 I/CollapsedStatusBarViewModel( 2380): setShouldHideStatusBarIconsWhenExpanded: false
  07-02 17:31:44.953 I/ControlCenterController( 2380): updateStatusBarIcons: showIconsWhenExpanded=true
  07-02 17:31:44.953 I/CollapsedStatusBarViewModel( 2380): setShouldHideStatusBarIconsWhenExpanded: false
  07-02 17:31:44.955 D/SysUI(260310)_NotificationCenterAnimHelper( 2380): resetNotificationView: reason=resetViews animate:false resetPanel:true
  07-02 17:31:44.955 D/SysUI(260310)_TrPanelViewPagerController( 2380): onPanelFractionUpdate() return by panel is collapse
  07-02 17:31:44.955 W/WindowOnBackDispatcher( 2380): sendCancelIfRunning: isInProgress=false 
callback=androidx.appcompat.widget.Toolbar$Api33Impl$$ExternalSyntheticLambda0@a24e695
  07-02 17:31:44.956 D/CoreBackPreview( 1698): Window{dd05c0d u0 NotificationShade}: Setting back callback null
  07-02 17:31:44.965 I/SysUI(260310)_TrNotificationShadeWindowView( 2380): onWindowVisibilityChanged  visibility 4
  07-02 17:31:44.965 D/TrQSCustomizer( 2380): hide(false), mIsShown=false
  07-02 17:31:44.968 E/ApplicationHelper( 1698): Fail to get PackageManager
> 07-02 17:31:44.968 I/BufferQueueDebug( 1012): [Surface(name=f48663c StatusBar)/@0x8eec4a5 - animation-leash of 
insets_animation#19430](this:0xb40000731f5b4758,id:-1,api:0,p:-1,c:-1) BufferQueue core=(1012:/system/bin/surfaceflinger)
  07-02 17:31:44.976 D/C2MtkComponentStore(  937): setDmaBufUsage: usage 5, flags 0, heapName mtk_mm for decoder.
  07-02 17:31:44.978 I/TranWifiSmartAssistantController( 1698): start current network monitor 
  07-02 17:31:44.978 I/WifiService( 1698): getConnectionInfo uid=1000
  07-02 17:31:44.978 V/WifiService( 1698): Clearing REDACT_FOR_LOCAL_MAC_ADDRESS for android(uid=1000)
  07-02 17:31:44.978 V/WifiService( 1698): Clearing REDACT_FOR_NETWORK_SETTINGS for android(uid=1000)
  07-02 17:31:44.978 V/WifiService( 1698): Clearing REDACT_FOR_ACCESS_FINE_LOCATION for android(uid=1000)
  07-02 17:31:44.978 I/TranWifiSmartAssistantController( 1698): userIgnored :false isScoredCurrentNetwork :false
  07-02 17:31:44.978 I/TranWifiSmartAssistantController( 1698): mCurrentNetwork :133 SSID :"TAUFIKKOPIBATOH@WIFI.ID"
  07-02 17:31:44.979 I/WifiNetworkQuality( 1698): current rssi is sufficient
  07-02 17:31:44.979 I/TranWifiSmartAssistantController( 1698): mNoCandidateCount : -1
  07-02 17:31:44.979 I/TranWifiSmartAssistantController( 1698): ====>>rssi :-58
  07-02 17:31:44.981 I/WindowManager( 1698):   isAnimating=false  okToAnimate=true  win=Window{dd05c0d u0 NotificationShade}
> 07-02 17:31:44.987 I/SurfaceFlinger( 1012): onHandleDestroyed: name=Surface(name=f48663c StatusBar)/@0x8eec4a5 - animation-leash of 
insets_animation#19428, layerId=19428, parentId=0
> 07-02 17:31:44.989 I/DisplayDeviceRepository( 1698): Display device changed: DisplayDeviceInfo{"Layar Bawaan": uniqueId="local:0", 1080 x 2436, modeId 
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
  07-02 17:31:44.991 I/Griffin/DeviceState( 1698): virtualDisplayPackageName :{com.android.shell=2000}
> 07-02 17:31:44.990 D/BLASTBufferQueue( 2380): [VRI[NotificationShade]#525](f:0,a:3) destructor()
> 07-02 17:31:44.999 D/BufferQueueConsumer( 2380): [VRI[NotificationShade]#525(BLAST Consumer)525](id:94c0000021b,api:0,p:-1,c:2380) disconnect
> 07-02 17:31:45.005 I/BufferQueueDebug( 1012): [Surface(name=f48663c StatusBar)/@0x8eec4a5 - animation-leash of 
insets_animation#19428](this:0xb40000731f64e3b8,id:-1,api:0,p:-1,c:1012) onDestructor()
> 07-02 17:31:45.005 I/SurfaceFlinger( 1012): onHandleDestroyed: name=NotificationShade#19429, layerId=19429, parentId=0
> 07-02 17:31:45.019 I/BufferQueueDebug( 1012): [NotificationShade#19429](this:0xb40000731f5a6388,id:-1,api:0,p:-1,c:1012) onDestructor()
  07-02 17:31:45.031 I/Hiber/importantScene( 1698): isTrafficActive uid:10124 speed :0
  07-02 17:31:45.031 I/Hiber/appStateMachine( 1698): uid:10124 enter FrozenState
  07-02 17:31:45.035 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.039592,0.000090, totalTime 0.039684 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:31:45.037 I/Hiber/stateManager( 1698): freeze uid: 10124 com.android.chrome costTime=6ms ,last unfreeze 5s ago
  07-02 17:31:45.038 I/Hiber/hiber( 1698): msg for start proxy frozen state
  07-02 17:31:45.038 D/ActivityManager( 1698): Hiber try idle uid[10124] by hiber ,bgTime>0 ? true,isIdled before ? true ,isCurAllowListed ? false 
,isProcStateBackground?true
  07-02 17:31:45.038 D/ActivityManager( 1698): Hiber try idle uid[10124] by hiber
  07-02 17:31:45.038 I/Hiber/importantScene( 1698): isTrafficActive uid:10271 speed :0
  07-02 17:31:45.039 I/Hiber/proxyManager( 1698): p_service: 10124
  07-02 17:31:45.039 I/Hiber/proxyManager( 1698): p_job: 10124 pkgName=com.android.chrome which=2
  07-02 17:31:45.039 I/Hiber/hiber( 1698): proxy alarm (uid=10124, pkgName=com.android.chrome)
  07-02 17:31:45.039 I/Hiber/proxyManager( 1698): p_alarm: uid=10124, pkgName=com.android.chrome
  07-02 17:31:45.039 D/Hiber/alarmManagerServiceExtImpl( 1698): proxyAlarms leave, uid=10124, packageName=com.android.chrome
  07-02 17:31:45.039 I/Hiber/appStateMachine( 1698): uid:10271 enter FrozenState
  07-02 17:31:45.039 I/Hiber/proxyManager( 1698): p_sensor: uid=10124, pkgName=com.android.chrome
  07-02 17:31:45.039 E/ApplicationHelper( 1698): Fail to get PackageManager
  07-02 17:31:45.044 I/Hiber/stateManager( 1698): freeze uid: 10271 com.whatsapp costTime=5ms ,last unfreeze 5s ago
  07-02 17:31:45.044 I/Hiber/restrictionPolicy( 1698): uid:10271  pkgName:com.whatsapp isAllowedNet
  07-02 17:31:45.046 D/Hiber/alarmManagerServiceExtImpl( 1698): proxyAlarms, alarm=Alarm{b21966e type 2 origWhen 2675331340 whenElapsed 2675331340 
com.whatsapp}
  07-02 17:31:45.046 D/Hiber/alarmManagerServiceExtImpl( 1698): proxyAlarms, alarm=Alarm{2190d1e type 2 origWhen 2675331341 whenElapsed 2675331341 
com.whatsapp}
  07-02 17:31:45.046 D/Hiber/alarmManagerServiceExtImpl( 1698): proxyAlarms leave, uid=10271, packageName=com.whatsapp
  07-02 17:31:45.046 I/Hiber/proxyManager( 1698): p_sensor: uid=10271, pkgName=com.whatsapp
  07-02 17:31:45.205 D/BufferPoolAccessor2.0(11425): bufferpool2 0xb4000072a18c2a98 : 66(45323 size) total buffers - 1(414 size) used buffers - 773/1971 
(recycle/alloc) - 1247/1970 (fetch/transfer)
  07-02 17:31:45.499 D/BufferPoolAccessor2.0(11425): bufferpool2 0xb4000072a18c2a98 : 66(45209 size) total buffers - 1(388 size) used buffers - 774/1989 
(recycle/alloc) - 1264/1988 (fetch/transfer)
  07-02 17:31:45.608 I/BufferQueueProducer( 1012): [VDS-studio.screen.sharing:0 SINK](this:0xb40000725f674618,id:-1,api:1,p:1012,c:1012) queueBuffer: 
fps=60.07 dur=1015.45 max=21.80 min=12.75
  07-02 17:31:45.610 I/hwcomposer(  935): [HWCDisplay] [Display_0 (type:1)] fps:60.132519,dur:1014.43,max:21.94,min:11.62  
> 07-02 17:31:45.617 I/BufferQueueProducer( 1012): 
[SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity](BLAST)#19423](this:0xb40000731f5d6a18,id:-1,api:0,p:-1,c:1012) queueBuffer: fps=60.08 
dur=1015.25 max=18.19 min=14.53
  07-02 17:31:45.802 I/mtkpower_client( 1080): perf_lock_acq, hdl:0, dur:30000, num:2, tid:1080
  07-02 17:31:45.804 I/mtkpower_client( 1080): ret_hdl:55423
  07-02 17:31:45.909 D/TranWifiTputMonitor( 1698): WIFI: TX: 0 RX: 0 TOTAL = 0
  07-02 17:31:45.909 D/TranWifiTputMonitor( 1698): High Tput: false, TOTAL TPUT: 0
  07-02 17:31:45.949 I/libPerfCtl(  970): xgfGetFPS pid:2380 fps:50
  07-02 17:31:45.949 I/AppThermalMode(  970): [perfNotifyThermalState] hdl:0
  07-02 17:31:45.949 I/AppThermalMode(  970): [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: 60,fg->pid:11190
  07-02 17:31:45.949 I/AppThermalMode(  970): [perfNotifyThermalState] appThermalIdx -1:
  07-02 17:31:45.949 I/libPerfCtl(  970): xgfGetFPS pid:11190 fps:59
  07-02 17:31:45.950 I/AppThermalMode(  970): [perfNotifyThermalState] hdl:0
  07-02 17:31:45.950 I/AppThermalMode(  970): [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: 60,fg->pid:11190
  07-02 17:31:45.950 I/AppThermalMode(  970): [perfNotifyThermalState] appThermalIdx -1:
  07-02 17:31:45.983 I/Hiber/importantScene( 1698): default_sms: packageName=com.transsion.smartmessage
  07-02 17:31:45.983 I/Hiber/appStateMachine( 1698): uid:10131, pkg=com.transsion.smartmessage  can't transition from R to F ,importantcase is : 
default_sms
  07-02 17:31:46.038 I/Hiber/nativeServiceClient( 1698): check binder uid=10124
  07-02 17:31:46.045 I/Hiber/nativeServiceClient( 1698): check binder uid=10271
  07-02 17:31:46.256 D/BufferPoolAccessor2.0(11425): bufferpool2 0xb4000072a18c2158 : 0(0 size) total buffers - 0(0 size) used buffers - 47/50 
(recycle/alloc) - 3/49 (fetch/transfer)
  07-02 17:31:46.256 D/BufferPoolAccessor2.0(11425): evictor expired: 2, evicted: 1
  07-02 17:31:46.328 I/android.hardware.thermal@2.0-service.mtk(  940): fill_temperatures filterType1 name: SKIN type: SKIN throttlingStatus: NONE value: 
42.25 ret_temps size 0
  07-02 17:31:46.331 V/SettingsProvider( 1698): name : tran_board_temperature appId : 1000
  07-02 17:31:46.335 D/BackupManagerService( 1698): mUserServices size: 1
> 07-02 17:31:46.520 I/DisplayDeviceRepository( 1698): Display device changed: DisplayDeviceInfo{"Layar Bawaan": uniqueId="local:0", 1080 x 2436, modeId 
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
  07-02 17:31:46.521 I/Griffin/DeviceState( 1698): virtualDisplayPackageName :{com.android.shell=2000}
  07-02 17:31:46.527 D/TranSignalStrengthComponentImpl( 2620): [LTE] dbm: -86
  07-02 17:31:46.528 D/TranSignalStrengthComponentImpl( 2620): [LTE] dbm: -86
  07-02 17:31:46.533 D/CallbackProxy( 6515): [onSignalStrengthsChanged]
  07-02 17:31:46.534 I/TranTele/TranPhoneInterfaceManager( 2620): TTC - onSignalStrengthsChanged
  07-02 17:31:46.534 D/TranSignalStrengthComponentImpl(30413): [LTE] dbm: -86
  07-02 17:31:46.535 D/TranSignalStrengthComponentImpl( 1698): [LTE] dbm: -86
  07-02 17:31:46.536 D/TriggerService( 4219): trigger service is running
  07-02 17:31:46.536 D/TranSignalStrengthComponentImpl(16756): [LTE] dbm: -86
  07-02 17:31:46.539 D/TranPhoneSwitcher( 2620): getNetworkType: 4G
  07-02 17:31:46.539 I/TranPhoneSwitcher( 2620): mDefaultsign:4subid :2
  07-02 17:31:46.539 D/TranSignalStrengthComponentImpl(30413): [LTE] dbm: -86
  07-02 17:31:46.540 D/TranSignalStrengthComponentImpl(30413): [LTE] dbm: -86
  07-02 17:31:46.601 D/AlarmPingSender( 3885): Sending Ping at:1782988306601
  07-02 17:31:46.606 D/AlarmPingSender( 3885): Skip. Release lock
  07-02 17:31:46.628 I/StatusBarNetworkRateView( 2380): wifi is default. hide second network rate view. StatusBarNetworkRateView subId=2, 
isFirstSimCard=false, mLocation=QS_NEW NetworkRateState=NetworkRateState{visible=true, activeMobileDataSubId=2, totalRate=0.0, netWorkState=1, 
isAirplane=false, netRateStateBySettingGlobal=1, networkRate='0,00', networkRateUnit='KB/S'}
  07-02 17:31:46.650 I/BufferQueueProducer( 1012): [StatusBar#97](this:0xb40000731f578a88,id:-1,api:0,p:-1,c:1012) queueBuffer: fps=5.30 dur=1697.98 
max=1565.56 min=14.39
  07-02 17:31:46.666 I/BufferQueueProducer( 1012): [VDS-studio.screen.sharing:0 SINK](this:0xb40000725f674618,id:-1,api:1,p:1012,c:1012) queueBuffer: 
fps=11.35 dur=1057.68 max=870.89 min=12.64
  07-02 17:31:47.383 D/PhoneInterfaceManager( 2620): [checkCallMethod] slotIndex: 0, count: 3, simMode: 2
  07-02 17:31:47.397 D/ULogGuard( 1342): Monitoring: 15 threads, 0 requests, 0 time-bombs; 3 guards. ResetFlags = 0x7
  07-02 17:31:47.413 D/PhoneInterfaceManager( 2620): [checkCallMethod] slotIndex: 0, count: 3, simMode: 2
  07-02 17:31:47.420 D/PhoneInterfaceManager( 2620): [checkCallMethod] slotIndex: 0, count: 3, simMode: 2
  07-02 17:31:47.735 I/TranActivityTaskManager( 4272): tran getFocusedWinPkgName
  07-02 17:31:47.736 I/TranActivityTaskManager( 4272): tran getTopActivityComponent
  07-02 17:31:47.744 I/TranActivityTaskManager( 4272): tran isIMEShowing
  07-02 17:31:47.746 D/mol_MolService.run(L:134)( 4272): ----MolService focused pkg:com.erbete.customer, cmp:com.erbete.customer.MainActivity, 
curType:SCENE_UNKOWN, molAlive:true, asAlive:false, asCrashed:false, imeVis:false, this:com.transsion.mol.service.MolService@9ecbda5
> 07-02 17:31:47.815 I/BufferQueueProducer( 1012): 
[SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity](BLAST)#19423](this:0xb40000731f5d6a18,id:-1,api:0,p:-1,c:1012) queueBuffer: fps=5.00 
dur=2198.16 max=2031.14 min=16.11
  07-02 17:31:47.822 I/FPSGO   ( 1080): fpsgo_boost_sched_idle_prefer:1
  07-02 17:31:47.823 I/mtkpower_client( 1080): perf_lock_acq, hdl:0, dur:0, num:2, tid:1080
  07-02 17:31:47.824 I/mtkpower_client( 1080): ret_hdl:55424
  07-02 17:31:47.824 I/FPSGO   ( 1080): perfLockAcq hdl:55424
  07-02 17:31:47.824 I/FPSGO   ( 1080): fpsgo_boost_sched_rate_ns:0
  07-02 17:31:47.824 I/mtkpower_client( 1080): perf_lock_acq, hdl:0, dur:0, num:12, tid:1080
  07-02 17:31:47.826 I/mtkpower_client( 1080): ret_hdl:55425
  07-02 17:31:47.826 I/FPSGO   ( 1080): perfLockAcq hdl:55425
  07-02 17:31:47.828 I/libPowerHal(  970): cmdSetting - unknown cmd:1438500, scmd:(null) ,param_1:0
  07-02 17:31:47.828 I/libPowerHal(  970): cmdSetting - unknown cmd:1438800, scmd:(null) ,param_1:0
  07-02 17:31:47.828 I/BufferQueueProducer( 1012): [VDS-studio.screen.sharing:0 SINK](this:0xb40000725f674618,id:-1,api:1,p:1012,c:1012) queueBuffer: 
fps=0.86 dur=1162.67 max=1162.67 min=1162.67
  07-02 17:31:47.830 I/hwcomposer(  935): [HWCDisplay] [Display_0 (type:1)] fps:0.860714,dur:1161.83,max:1161.83,min:1161.83  
  07-02 17:31:47.841 W/TeeEndorsementInstaller( 1056): Endorsement token not found, wait a bit longer (81 sec) 
[vendor/mediatek/proprietary/trustzone/trustonic/source/external/mobicore/common/510/Daemon/src/EndorsementInstaller.cpp:104]
  07-02 17:31:47.949 I/libPerfCtl(  970): xgfGetFPS pid:2380 fps:-1
  07-02 17:31:47.950 I/AppThermalMode(  970): [perfNotifyThermalState] hdl:0
  07-02 17:31:47.950 I/AppThermalMode(  970): [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: -1,fg->pid:11190
  07-02 17:31:47.950 I/AppThermalMode(  970): [perfNotifyThermalState] appThermalIdx -1:
  07-02 17:31:47.950 I/libPerfCtl(  970): xgfGetFPS pid:11190 fps:60
  07-02 17:31:48.043 D/TranSignalStrengthComponentImpl( 1698): [LTE] dbm: -83
  07-02 17:31:48.046 D/TranPhoneSwitcher( 2620): getNetworkType: 4G
  07-02 17:31:48.046 I/TranPhoneSwitcher( 2620): mOthersign:4subid :1
  07-02 17:31:48.048 D/TranNetworkManagementServiceMultiLinkImpl( 1698): linkTurb destorySocketByUid  uid :10124
  07-02 17:31:48.049 I/Hiber/hiber( 1698): clearDnsCache again!!!
  07-02 17:31:48.537 D/TriggerService( 4219): trigger service is running
  07-02 17:31:48.584 D/BufferPoolAccessor2.0(11425): bufferpool2 0xb4000072a18c2a98 : 66(32838 size) total buffers - 1(616 size) used buffers - 810/2071 
(recycle/alloc) - 1319/2070 (fetch/transfer)
  07-02 17:31:48.657 W/native  ( 5782): W0000 00:00:1782988308.657325    5913 lag_detector.cc:58] Pipeline lagging by 955.803403ms. Continue processing 
samples.
> 07-02 17:31:48.830 I/BufferQueueProducer( 1012): 
[SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity](BLAST)#19423](this:0xb40000731f5d6a18,id:-1,api:0,p:-1,c:1012) queueBuffer: fps=59.08 
dur=1015.60 max=34.04 min=15.35
  07-02 17:31:48.841 I/BufferQueueProducer( 1012): [VDS-studio.screen.sharing:0 SINK](this:0xb40000725f674618,id:-1,api:1,p:1012,c:1012) queueBuffer: 
fps=59.25 dur=1012.72 max=33.97 min=11.73
  07-02 17:31:48.843 I/hwcomposer(  935): [HWCDisplay] [Display_0 (type:1)] fps:59.200642,dur:1013.50,max:33.87,min:12.31  
  07-02 17:31:48.913 D/TranWifiTputMonitor( 1698): WIFI: TX: 0 RX: 0 TOTAL = 0
  07-02 17:31:48.913 D/TranWifiTputMonitor( 1698): High Tput: false, TOTAL TPUT: 0
  07-02 17:31:48.949 I/libPerfCtl(  970): xgfGetFPS pid:2380 fps:-1
  07-02 17:31:48.950 I/AppThermalMode(  970): [perfNotifyThermalState] hdl:0
  07-02 17:31:48.950 I/AppThermalMode(  970): [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: 60,fg->pid:11190
  07-02 17:31:48.950 I/AppThermalMode(  970): [perfNotifyThermalState] appThermalIdx -1:
  07-02 17:31:48.950 I/libPerfCtl(  970): xgfGetFPS pid:11190 fps:59
  07-02 17:31:48.950 I/AppThermalMode(  970): [perfNotifyThermalState] hdl:0
  07-02 17:31:48.950 I/AppThermalMode(  970): [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: 60,fg->pid:11190
  07-02 17:31:48.950 I/AppThermalMode(  970): [perfNotifyThermalState] appThermalIdx -1:
  07-02 17:31:49.082 D/BufferPoolAccessor2.0(11425): bufferpool2 0xb4000072a18c2a98 : 66(31818 size) total buffers - 1(440 size) used buffers - 823/2101 
(recycle/alloc) - 1337/2100 (fetch/transfer)
  07-02 17:31:49.214 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.039909,0.000090, totalTime 0.039999 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:31:49.358 D/EventHub( 1698): getevents BTN_TOUCH DOWN
  07-02 17:31:49.361 D/AppFlingMode(  970): [CheckAppFlingHint] 25 com.erbete.customer 60
  07-02 17:31:49.363 D/TextSelection(11190): onUseCache cache=false
  07-02 17:31:49.363 D/TouchSliderConsumer( 4503): onInputEvent : ACTION_DOWN
  07-02 17:31:49.363 D/TouchSliderConsumer( 4503): consumeTouchEvent : 247.5 1253.1875 RectF(1035.0, 294.0, 1083.0, 660.0) 
  07-02 17:31:49.367 D/TouchMonitorProxy( 4272): handleInputEvent MotionEvent:MotionEvent { action=ACTION_DOWN, actionButton=0, id[0]=0, x[0]=247.5, 
y[0]=1253.1875, toolType[0]=TOOL_TYPE_FINGER, buttonState=0, classification=NONE, metaState=0, flags=0x0, edgeFlags=0x0, pointerCount=1, historySize=0, 
eventTime=161890491, downTime=161890491, deviceId=6, source=0x1002, displayId=0, eventId=838554751 }
  07-02 17:31:49.368 D/ScreenCapControl( 4272): onFingerDown: 1253, 108, 120
  07-02 17:31:49.399 D/TouchMonitorProxy( 4272): handleInputEvent MotionEvent:MotionEvent { action=ACTION_MOVE, actionButton=0, id[0]=0, x[0]=249.5, 
y[0]=1263.4375, toolType[0]=TOOL_TYPE_FINGER, buttonState=0, classification=NONE, metaState=0, flags=0x0, edgeFlags=0x0, pointerCount=1, historySize=0, 
eventTime=161890529, downTime=161890491, deviceId=6, source=0x1002, displayId=0, eventId=91191633 }
> 07-02 17:31:49.402 I/DisplayDeviceRepository( 1698): Display device changed: DisplayDeviceInfo{"Layar Bawaan": uniqueId="local:0", 1080 x 2436, modeId 
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
  07-02 17:31:49.406 I/Griffin/DeviceState( 1698): virtualDisplayPackageName :{com.android.shell=2000}
  07-02 17:31:49.407 D/TouchMonitorProxy( 4272): handleInputEvent MotionEvent:MotionEvent { action=ACTION_MOVE, actionButton=0, id[0]=0, x[0]=251.0, 
y[0]=1274.0625, toolType[0]=TOOL_TYPE_FINGER, buttonState=0, classification=NONE, metaState=0, flags=0x0, edgeFlags=0x0, pointerCount=1, historySize=0, 
eventTime=161890531, downTime=161890491, deviceId=6, source=0x1002, displayId=0, eventId=706685317 }
  07-02 17:31:49.407 D/TouchMonitorProxy( 4272): handleInputEvent MotionEvent:MotionEvent { action=ACTION_MOVE, actionButton=0, id[0]=0, x[0]=252.875, 
y[0]=1284.3125, toolType[0]=TOOL_TYPE_FINGER, buttonState=0, classification=NONE, metaState=0, flags=0x0, edgeFlags=0x0, pointerCount=1, historySize=0, 
eventTime=161890534, downTime=161890491, deviceId=6, source=0x1002, displayId=0, eventId=544935450 }
  07-02 17:31:49.407 D/TouchMonitorProxy( 4272): handleInputEvent MotionEvent:MotionEvent { action=ACTION_MOVE, actionButton=0, id[0]=0, x[0]=254.125, 
y[0]=1294.3125, toolType[0]=TOOL_TYPE_FINGER, buttonState=0, classification=NONE, metaState=0, flags=0x0, edgeFlags=0x0, pointerCount=1, historySize=0, 
eventTime=161890537, downTime=161890491, deviceId=6, source=0x1002, displayId=0, eventId=241075049 }
  07-02 17:31:49.407 D/TouchMonitorProxy( 4272): handleInputEvent MotionEvent:MotionEvent { action=ACTION_MOVE, actionButton=0, id[0]=0, x[0]=255.0, 
y[0]=1303.9375, toolType[0]=TOOL_TYPE_FINGER, buttonState=0, classification=NONE, metaState=0, flags=0x0, edgeFlags=0x0, pointerCount=1, historySize=0, 
eventTime=161890540, downTime=161890491, deviceId=6, source=0x1002, displayId=0, eventId=921246873 }
  07-02 17:31:49.407 D/AppFlingMode(  970): [CheckAppFlingHint] 45 com.erbete.customer 60
  07-02 17:31:49.408 I/Hiber/fastState( 1698): do fastFreeze reason=cpuboost
  07-02 17:31:49.408 I/Process ( 1698): String at 0: 0x767a2b0601 = ProcessCapacityNormal
  07-02 17:31:49.408 D/TranCPUBooster( 1698): [setAffinity] Pid:1012 mask:6-7
  07-02 17:31:49.408 I/Process ( 1698): String at 0: 0x767a2b0601 = ProcessCapacityNormal
  07-02 17:31:49.408 I/libPowerHal(  970): [thermal ux] update cluster0 to freqToSet:1500000 maxToSet:2000000
  07-02 17:31:49.408 D/TranCPUBooster( 1698): [setAffinity] Pid:1098 mask:5-7
  07-02 17:31:49.408 E/TranCPUBooster( 1698): setTranSchedUxTags fail tid: 2423 threadName: wmshell.anim
  07-02 17:31:49.410 E/TranCPUBooster( 1698): setTranSchedUxTags fail tid: 2421 threadName: ux_exact_wmshell.main
  07-02 17:31:49.410 W/KswapdLittleCoreFeature( 1698): [setAffinity] Pid:143 mask:63
  07-02 17:31:49.411 I/libPowerHal(  970): [thermal ux] update cluster1 to freqToSet:1500000 maxToSet:2200000
  07-02 17:31:49.412 D/TouchMonitorProxy( 4272): handleInputEvent MotionEvent:MotionEvent { action=ACTION_MOVE, actionButton=0, id[0]=0, x[0]=255.375, 
y[0]=1313.0625, toolType[0]=TOOL_TYPE_FINGER, buttonState=0, classification=NONE, metaState=0, flags=0x0, edgeFlags=0x0, pointerCount=1, historySize=0, 
eventTime=161890543, downTime=161890491, deviceId=6, source=0x1002, displayId=0, eventId=240042051 }
  07-02 17:31:49.413 I/libPowerHal(  970): [setClusterFreq] MTKPOWER_HINT_UX_MOVE_SCROLLING: sysfs_freq set cpu freq: 1500000 -1 1500000 -1 
  07-02 17:31:49.779 V/WifiService( 1698): Clearing REDACT_FOR_ACCESS_FINE_LOCATION for com.google.android.gms(uid=10113)
  07-02 17:31:49.783 I/NullBinder( 4458): NullBinder for android.net.action.RECOMMEND_NETWORKS triggering remote TransactionTooLargeException due to 
Service without Chimera impl, calling uid: 1000, calling pid: 0
  07-02 17:31:49.783 W/.gms.persistent( 4458): Large reply transaction of 1056768 bytes, interface descriptor , code 1
  07-02 17:31:49.789 I/NearbyMediums( 4458): Wifi changed new SSID: "TAUFIKKOPIBATOH@WIFI.ID"
  07-02 17:31:49.790 I/NearbyMediums( 4458): WifiLanConnectivityInfo is not changed, skip notify.
  07-02 17:31:49.790 D/ConnectivityService( 1698): NetReassign [no changes] [c 1] [a 1] [i 2]
  07-02 17:31:49.797 D/C2MtkComponentStore(  937): setDmaBufUsage: usage 5, flags 0, heapName mtk_mm for decoder.
  07-02 17:31:49.832 D/BufferPoolAccessor2.0(11425): bufferpool2 0xb4000072a18c2a98 : 66(327063 size) total buffers - 1(9260 size) used buffers - 831/2143 
(recycle/alloc) - 1372/2142 (fetch/transfer)
> 07-02 17:31:49.846 I/BufferQueueProducer( 1012): 
[SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity](BLAST)#19423](this:0xb40000731f5d6a18,id:-1,api:0,p:-1,c:1012) queueBuffer: fps=57.12 
dur=1015.38 max=33.52 min=15.04
  07-02 17:31:49.853 I/BufferQueueProducer( 1012): [VDS-studio.screen.sharing:0 SINK](this:0xb40000725f674618,id:-1,api:1,p:1012,c:1012) queueBuffer: 
fps=57.30 dur=1012.23 max=38.45 min=9.98
  07-02 17:31:49.855 I/hwcomposer(  935): [HWCDisplay] [Display_0 (type:1)] fps:57.355011,dur:1011.25,max:38.45,min:9.78  
  07-02 17:31:49.881 D/C2MtkComponentStore(  937): setDmaBufUsage: usage 5, flags 0, heapName mtk_mm for decoder.
  07-02 17:31:49.934 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.039841,0.000107, totalTime 0.039950 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:31:49.950 I/libPerfCtl(  970): xgfGetFPS pid:2380 fps:-1
  07-02 17:31:49.950 I/AppThermalMode(  970): [perfNotifyThermalState] hdl:0
  07-02 17:31:49.950 I/AppThermalMode(  970): [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: 60,fg->pid:11190
  07-02 17:31:49.950 I/AppThermalMode(  970): [perfNotifyThermalState] appThermalIdx -1:
  07-02 17:31:49.950 I/libPerfCtl(  970): xgfGetFPS pid:11190 fps:58
  07-02 17:31:49.950 I/AppThermalMode(  970): [perfNotifyThermalState] hdl:0
  07-02 17:31:49.950 I/AppThermalMode(  970): [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: 60,fg->pid:11190
  07-02 17:31:49.950 I/AppThermalMode(  970): [perfNotifyThermalState] appThermalIdx -1:
  07-02 17:31:49.975 D/C2MtkComponentStore(  937): setDmaBufUsage: usage 5, flags 0, heapName mtk_mm for decoder.
  07-02 17:31:50.013 W/NetworkTypeHelper( 1698): Failed to call buildTemplateCarrierMetered, java.lang.reflect.InvocationTargetException
  07-02 17:31:50.014 D/NetworkStatusMonitor( 1698): getAllInterfaceNames network type is unknown
  07-02 17:31:50.015 W/NetworkTypeHelper( 1698): Failed to call buildTemplateCarrierMetered, java.lang.reflect.InvocationTargetException
  07-02 17:31:50.015 D/NetworkStatusMonitor( 1698): getAllInterfaceNames network type is unknown
  07-02 17:31:50.015 D/NetworkStatusMonitor( 1698): getAllInterfaceNames network type is mobile
  07-02 17:31:50.015 D/NetworkStatusMonitor( 1698): getAllInterfaceNames network type is wifi
  07-02 17:31:50.015 D/NetworkStatusMonitor( 1698): onNetworkTypeChanged wifi => wifi
  07-02 17:31:50.119 D/BufferPoolAccessor2.0(11425): bufferpool2 0xb4000072a18c2a98 : 66(393242 size) total buffers - 1(3143 size) used buffers - 831/2160 
(recycle/alloc) - 1389/2159 (fetch/transfer)
> 07-02 17:31:50.181 E/BLASTBufferQueue(11190): [SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity]#1](f:1,a:6) acquireNextBufferLocked: 
Can't acquire next buffer. Already acquired max frames 6 max:4 + 2
> 07-02 17:31:50.200 E/BLASTBufferQueue(11190): [SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity]#1](f:1,a:6) acquireNextBufferLocked: 
Can't acquire next buffer. Already acquired max frames 6 max:4 + 2
> 07-02 17:31:50.213 E/BLASTBufferQueue(11190): [SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity]#1](f:1,a:6) acquireNextBufferLocked: 
Can't acquire next buffer. Already acquired max frames 6 max:4 + 2
> 07-02 17:31:50.232 E/BLASTBufferQueue(11190): [SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity]#1](f:1,a:6) acquireNextBufferLocked: 
Can't acquire next buffer. Already acquired max frames 6 max:4 + 2
> 07-02 17:31:50.245 E/BLASTBufferQueue(11190): [SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity]#1](f:1,a:6) acquireNextBufferLocked: 
Can't acquire next buffer. Already acquired max frames 6 max:4 + 2
> 07-02 17:31:50.267 E/BLASTBufferQueue(11190): [SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity]#1](f:1,a:6) acquireNextBufferLocked: 
Can't acquire next buffer. Already acquired max frames 6 max:4 + 2
> 07-02 17:31:50.280 E/BLASTBufferQueue(11190): [SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity]#1](f:1,a:6) acquireNextBufferLocked: 
Can't acquire next buffer. Already acquired max frames 6 max:4 + 2
  07-02 17:31:50.285 I/NearbySharing( 4458): Network state changed: NetworkState(isRestricted=false, isOnline=true, isCongested=false, isMetered=false, 
isWifiConnected=true)
> 07-02 17:31:50.298 E/BLASTBufferQueue(11190): [SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity]#1](f:1,a:6) acquireNextBufferLocked: 
Can't acquire next buffer. Already acquired max frames 6 max:4 + 2
> 07-02 17:31:50.312 E/BLASTBufferQueue(11190): [SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity]#1](f:1,a:6) acquireNextBufferLocked: 
Can't acquire next buffer. Already acquired max frames 6 max:4 + 2
> 07-02 17:31:50.333 E/BLASTBufferQueue(11190): [SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity]#1](f:1,a:6) acquireNextBufferLocked: 
Can't acquire next buffer. Already acquired max frames 6 max:4 + 2
> 07-02 17:31:50.344 E/BLASTBufferQueue(11190): [SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity]#1](f:1,a:6) acquireNextBufferLocked: 
Can't acquire next buffer. Already acquired max frames 6 max:4 + 2
> 07-02 17:31:50.368 E/BLASTBufferQueue(11190): [SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity]#1](f:1,a:6) acquireNextBufferLocked: 
Can't acquire next buffer. Already acquired max frames 6 max:4 + 2
> 07-02 17:31:50.377 E/BLASTBufferQueue(11190): [SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity]#1](f:1,a:6) acquireNextBufferLocked: 
Can't acquire next buffer. Already acquired max frames 6 max:4 + 2
> 07-02 17:31:50.400 E/BLASTBufferQueue(11190): [SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity]#1](f:1,a:6) acquireNextBufferLocked: 
Can't acquire next buffer. Already acquired max frames 6 max:4 + 2
  07-02 17:31:50.400 D/ULogGuard( 1342): Monitoring: 15 threads, 0 requests, 0 time-bombs; 3 guards. ResetFlags = 0x7
  07-02 17:31:50.411 D/BufferPoolAccessor2.0(11425): bufferpool2 0xb4000072a18c2a98 : 66(399350 size) total buffers - 1(711 size) used buffers - 831/2177 
(recycle/alloc) - 1406/2176 (fetch/transfer)
> 07-02 17:31:50.411 E/BLASTBufferQueue(11190): [SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity]#1](f:1,a:6) acquireNextBufferLocked: 
Can't acquire next buffer. Already acquired max frames 6 max:4 + 2
  07-02 17:31:50.418 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.023772,0.000138, totalTime 0.023911 > logTimeout 
0.022000 TIMEOUT!!
> 07-02 17:31:50.432 E/BLASTBufferQueue(11190): [SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity]#1](f:1,a:6) acquireNextBufferLocked: 
Can't acquire next buffer. Already acquired max frames 6 max:4 + 2
> 07-02 17:31:50.444 E/BLASTBufferQueue(11190): [SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity]#1](f:1,a:6) acquireNextBufferLocked: 
Can't acquire next buffer. Already acquired max frames 6 max:4 + 2
> 07-02 17:31:50.465 E/BLASTBufferQueue(11190): [SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity]#1](f:1,a:6) acquireNextBufferLocked: 
Can't acquire next buffer. Already acquired max frames 6 max:4 + 2
> 07-02 17:31:50.478 E/BLASTBufferQueue(11190): [SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity]#1](f:1,a:6) acquireNextBufferLocked: 
Can't acquire next buffer. Already acquired max frames 6 max:4 + 2
> 07-02 17:31:50.499 E/BLASTBufferQueue(11190): [SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity]#1](f:1,a:6) acquireNextBufferLocked: 
Can't acquire next buffer. Already acquired max frames 6 max:4 + 2
> 07-02 17:31:50.511 E/BLASTBufferQueue(11190): [SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity]#1](f:1,a:6) acquireNextBufferLocked: 
Can't acquire next buffer. Already acquired max frames 6 max:4 + 2
> 07-02 17:31:50.532 E/BLASTBufferQueue(11190): [SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity]#1](f:1,a:6) acquireNextBufferLocked: 
Can't acquire next buffer. Already acquired max frames 6 max:4 + 2
  07-02 17:31:50.537 D/TriggerService( 4219): trigger service is running
> 07-02 17:31:50.546 E/BLASTBufferQueue(11190): [SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity]#1](f:1,a:6) acquireNextBufferLocked: 
Can't acquire next buffer. Already acquired max frames 6 max:4 + 2
> 07-02 17:31:50.567 E/BLASTBufferQueue(11190): [SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity]#1](f:1,a:6) acquireNextBufferLocked: 
Can't acquire next buffer. Already acquired max frames 6 max:4 + 2
> 07-02 17:31:50.579 E/BLASTBufferQueue(11190): [SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity]#1](f:1,a:6) acquireNextBufferLocked: 
Can't acquire next buffer. Already acquired max frames 6 max:4 + 2
  07-02 17:31:50.615 I/mtkpower_client( 1080): perf_lock_acq, hdl:0, dur:30000, num:2, tid:1080
  07-02 17:31:50.617 I/mtkpower_client( 1080): ret_hdl:55434
  07-02 17:31:50.617 I/mtkpower_client( 1080): perf_lock_rel, hdl:55434, tid:1080
  07-02 17:31:50.620 I/libPowerHal(  970): [PD] fpsgo update cmd:1408300 param:0
  07-02 17:31:50.746 D/BufferPoolAccessor2.0(11425): bufferpool2 0xb4000072a18c2a98 : 66(295939 size) total buffers - 1(705 size) used buffers - 834/2197 
(recycle/alloc) - 1423/2196 (fetch/transfer)
> 07-02 17:31:50.862 I/BufferQueueProducer( 1012): 
[SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity](BLAST)#19423](this:0xb40000731f5d6a18,id:-1,api:0,p:-1,c:1012) queueBuffer: fps=59.06 
dur=1015.86 max=33.30 min=16.00
  07-02 17:31:50.870 I/BufferQueueProducer( 1012): [VDS-studio.screen.sharing:0 SINK](this:0xb40000725f674618,id:-1,api:1,p:1012,c:1012) queueBuffer: 
fps=59.01 dur=1016.86 max=35.33 min=13.25
  07-02 17:31:50.872 I/hwcomposer(  935): [HWCDisplay] [Display_0 (type:1)] fps:58.981155,dur:1017.27,max:35.54,min:12.96  
  07-02 17:31:50.950 I/libPerfCtl(  970): xgfGetFPS pid:2380 fps:-1
  07-02 17:31:50.950 I/AppThermalMode(  970): [perfNotifyThermalState] hdl:0
  07-02 17:31:50.950 I/AppThermalMode(  970): [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: 60,fg->pid:11190
  07-02 17:31:50.950 I/AppThermalMode(  970): [perfNotifyThermalState] appThermalIdx -1:
  07-02 17:31:50.951 I/libPerfCtl(  970): xgfGetFPS pid:11190 fps:59
  07-02 17:31:50.951 I/AppThermalMode(  970): [perfNotifyThermalState] hdl:0
  07-02 17:31:50.951 I/AppThermalMode(  970): [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: 60,fg->pid:11190
  07-02 17:31:50.951 I/AppThermalMode(  970): [perfNotifyThermalState] appThermalIdx -1:
  07-02 17:31:50.985 I/TranWifiSmartAssistantController( 1698): start current network monitor 
  07-02 17:31:50.986 I/WifiService( 1698): getConnectionInfo uid=1000
  07-02 17:31:50.986 V/WifiService( 1698): Clearing REDACT_FOR_LOCAL_MAC_ADDRESS for android(uid=1000)
  07-02 17:31:50.986 V/WifiService( 1698): Clearing REDACT_FOR_NETWORK_SETTINGS for android(uid=1000)
  07-02 17:31:50.986 V/WifiService( 1698): Clearing REDACT_FOR_ACCESS_FINE_LOCATION for android(uid=1000)
  07-02 17:31:50.986 I/TranWifiSmartAssistantController( 1698): userIgnored :false isScoredCurrentNetwork :false
  07-02 17:31:50.986 I/TranWifiSmartAssistantController( 1698): mCurrentNetwork :133 SSID :"TAUFIKKOPIBATOH@WIFI.ID"
  07-02 17:31:50.987 I/WifiNetworkQuality( 1698): current rssi is sufficient
  07-02 17:31:51.653 D/TranSignalStrengthComponentImpl(30413): [LTE] dbm: -87
  07-02 17:31:51.653 D/TranPhoneSwitcher( 2620): getNetworkType: 4G
  07-02 17:31:51.653 I/TranPhoneSwitcher( 2620): mDefaultsign:4subid :2
  07-02 17:31:51.656 D/TranSignalStrengthComponentImpl(16756): [LTE] dbm: -87
  07-02 17:31:51.662 D/TranSignalStrengthComponentImpl(30413): [LTE] dbm: -87
  07-02 17:31:51.663 D/TranSignalStrengthComponentImpl(30413): [LTE] dbm: -87
  07-02 17:31:51.674 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000000,0.039649,0.000097, totalTime 0.039746 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:31:51.677 I/BufferQueueProducer( 1012): [StatusBar#97](this:0xb40000731f578a88,id:-1,api:0,p:-1,c:1012) queueBuffer: fps=0.20 dur=5027.47 
max=5027.47 min=5027.47
> 07-02 17:31:51.877 I/BufferQueueProducer( 1012): 
[SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity](BLAST)#19423](this:0xb40000731f5d6a18,id:-1,api:0,p:-1,c:1012) queueBuffer: fps=43.33 
dur=1015.40 max=98.99 min=15.98
  07-02 17:31:51.886 I/BufferQueueProducer( 1012): [VDS-studio.screen.sharing:0 SINK](this:0xb40000725f674618,id:-1,api:1,p:1012,c:1012) queueBuffer: 
fps=43.32 dur=1015.68 max=96.64 min=12.77
  07-02 17:31:51.888 I/hwcomposer(  935): [HWCDisplay] [Display_0 (type:1)] fps:43.296238,dur:1016.25,max:96.21,min:12.38  
  07-02 17:31:51.914 D/TranWifiTputMonitor( 1698): WIFI: TX: 0 RX: 0 TOTAL = 0
  07-02 17:31:51.916 D/TranWifiTputMonitor( 1698): High Tput: false, TOTAL TPUT: 0
  07-02 17:31:51.942 D/BufferPoolAccessor2.0(11425): bufferpool2 0xb4000072a18c2a98 : 66(224054 size) total buffers - 1(1378 size) used buffers - 841/2252 
(recycle/alloc) - 1471/2251 (fetch/transfer)
  07-02 17:31:51.953 I/libPerfCtl(  970): xgfGetFPS pid:2380 fps:-1
  07-02 17:31:51.955 I/AppThermalMode(  970): [perfNotifyThermalState] hdl:0
  07-02 17:31:51.955 I/AppThermalMode(  970): [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: 60,fg->pid:11190
  07-02 17:31:51.955 I/AppThermalMode(  970): [perfNotifyThermalState] appThermalIdx -1:
  07-02 17:31:51.955 I/libPerfCtl(  970): xgfGetFPS pid:11190 fps:41
  07-02 17:31:51.955 I/AppThermalMode(  970): [perfNotifyThermalState] hdl:0
  07-02 17:31:51.955 I/AppThermalMode(  970): [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: 60,fg->pid:11190
  07-02 17:31:51.955 I/AppThermalMode(  970): [perfNotifyThermalState] appThermalIdx -1:
  07-02 17:31:52.239 D/EventHub( 1698): getevents BTN_TOUCH DOWN
  07-02 17:31:52.240 D/AppFlingMode(  970): [CheckAppFlingHint] 25 com.erbete.customer 60
  07-02 17:31:52.242 D/TouchSliderConsumer( 4503): onInputEvent : ACTION_DOWN
  07-02 17:31:52.242 D/TouchSliderConsumer( 4503): consumeTouchEvent : 307.625 1411.625 RectF(1035.0, 294.0, 1083.0, 660.0) 
  07-02 17:31:52.244 D/TextSelection(11190): onUseCache cache=false
  07-02 17:31:52.780 D/WifiThroughputPredictor( 1698):  utilization (LLS) 15 isBluetoothConnected: false final utilization: 15
  07-02 17:31:52.780 D/WifiThroughputPredictor( 1698):  BW: 0 RSSI: -60 Nss: 1 Mode: 1 symDur: 4000 snrDb 20 bitPerTone: 4500 rate: 54 throughput: 50
  07-02 17:31:52.780 D/WifiThroughputPredictor( 1698):  utilization (LLS) 15 isBluetoothConnected: false final utilization: 15
  07-02 17:31:52.780 D/WifiThroughputPredictor( 1698):  BW: 0 RSSI: -60 Nss: 1 Mode: 1 symDur: 4000 snrDb 20 bitPerTone: 4500 rate: 54 throughput: 50
  07-02 17:31:52.781 D/WifiScoreCard( 1698): BSSID update SIGNAL_POLL ID: 942782235 SSID: "TAUFIKKOPIBATOH@WIFI.ID", BSSID: ac:4a:56:28:fe:ee, MAC: 
02:16:3f:eb:28:01, IP: /10.226.145.77, Security type: 0, Supplicant state: COMPLETED, Wi-Fi standard: legacy, RSSI: -60, Link speed: 48Mbps, Tx Link 
speed: 48Mbps, Max Supported Tx Link speed: 54Mbps, Calculated Tx : 0Mbps, Rx Link speed: 48Mbps, Max Supported Rx Link speed: 54Mbps, Calculated Rx : 
0Mbps, Frequency: 5765MHz, Net ID: 142, Metered hint: false, score: 60, isUsable: true, CarrierMerged: false, SubscriptionId: -1, IsPrimary: 1, Trusted: 
true, Restricted: false, Ephemeral: false, OEM paid: false, OEM private: false, OSU AP: false, FQDN: <none>, Provider friendly name: <none>, Requesting 
package name: <none>"TAUFIKKOPIBATOH@WIFI.ID"openMLO Information: , Is TID-To-Link negotiation supported by the AP: false, AP MLD Address: <none>, AP MLO 
Link Id: <none>, AP MLO Affiliated links: <none>, Vendor Data: <none>
  07-02 17:31:52.781 D/WifiScoreCard( 1698): txRate: 39 txSpeed: 48
  07-02 17:31:52.781 D/WifiScoreCard( 1698): network update SIGNAL_POLL "TAUFIKKOPIBATOH@WIFI.ID" ID: 42486102 RSSI -60 txSpeed 48
  07-02 17:31:52.781 D/WifiClientModeImpl[24001351:wlan0]( 1698):  ClientModeImpl$L2ConnectedState screen=on 131 0 "TAUFIKKOPIBATOH@WIFI.ID" 
ac:4a:56:28:fe:ee rssi=-60 f=5765 sc=60 link=48 tx=38.3, 0.0, 0.0 rx=29.6 bcn=0 [on:0 tx:0 rx:0 period:3012] from screen [on:0 period:18591294] score=60
> 07-02 17:31:52.892 I/BufferQueueProducer( 1012): 
[SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity](BLAST)#19423](this:0xb40000731f5d6a18,id:-1,api:0,p:-1,c:1012) queueBuffer: fps=58.11 
dur=1015.36 max=33.46 min=16.22
  07-02 17:31:52.897 D/BufferPoolAccessor2.0(11425): bufferpool2 0xb4000072a18c2a98 : 66(352534 size) total buffers - 1(2828 size) used buffers - 845/2307 
(recycle/alloc) - 1522/2306 (fetch/transfer)
  07-02 17:31:52.901 I/BufferQueueProducer( 1012): [VDS-studio.screen.sharing:0 SINK](this:0xb40000725f674618,id:-1,api:1,p:1012,c:1012) queueBuffer: 
fps=58.10 dur=1015.56 max=34.30 min=12.85
  07-02 17:31:52.903 I/hwcomposer(  935): [HWCDisplay] [Display_0 (type:1)] fps:58.115799,dur:1015.21,max:34.94,min:12.32  
  07-02 17:31:52.917 I/mtkpower_client( 1080): perf_lock_acq, hdl:0, dur:30000, num:2, tid:1080
  07-02 17:31:52.919 I/mtkpower_client( 1080): ret_hdl:55449
  07-02 17:31:52.954 I/libPerfCtl(  970): xgfGetFPS pid:2380 fps:-1
  07-02 17:31:52.954 I/AppThermalMode(  970): [perfNotifyThermalState] hdl:0
  07-02 17:31:52.954 I/AppThermalMode(  970): [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: 60,fg->pid:11190
  07-02 17:31:52.954 I/AppThermalMode(  970): [perfNotifyThermalState] appThermalIdx -1:
  07-02 17:31:52.954 I/libPerfCtl(  970): xgfGetFPS pid:11190 fps:58
  07-02 17:31:52.954 I/AppThermalMode(  970): [perfNotifyThermalState] hdl:0
  07-02 17:31:52.954 I/AppThermalMode(  970): [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: 60,fg->pid:11190
  07-02 17:31:52.954 I/AppThermalMode(  970): [perfNotifyThermalState] appThermalIdx -1:
  07-02 17:31:52.960 D/EventHub( 1698): getevents BTN_TOUCH DOWN
  07-02 17:31:52.962 D/AppFlingMode(  970): [CheckAppFlingHint] 25 com.erbete.customer 60
  07-02 17:31:52.963 D/TouchSliderConsumer( 4503): onInputEvent : ACTION_DOWN
  07-02 17:31:52.963 D/TouchSliderConsumer( 4503): consumeTouchEvent : 294.25 1438.8125 RectF(1035.0, 294.0, 1083.0, 660.0) 
  07-02 17:31:52.964 D/TextSelection(11190): onUseCache cache=false
  07-02 17:31:53.955 I/libPerfCtl(  970): xgfGetFPS pid:11190 fps:53
  07-02 17:31:53.955 I/AppThermalMode(  970): [perfNotifyThermalState] hdl:0
  07-02 17:31:53.955 I/AppThermalMode(  970): [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: 60,fg->pid:11190
  07-02 17:31:53.955 I/AppThermalMode(  970): [perfNotifyThermalState] appThermalIdx -1:
  07-02 17:31:53.961 I/flutter (11190): STEP47D_RESTAURANT_DETAIL_ARGUMENTS: type=_Map<String, VendorModel> value={vendorModel: Instance of 'VendorModel'}
  07-02 17:31:53.961 I/flutter (11190): STEP47D_RESTAURANT_DETAIL_VENDOR_ARG: id=aceh_clone_6285ddbfd9598_1vMlKPiniUrzybKkWiS1 title=ahmed store 
zone=q8OOxNm1zgyVqggkCibX
  07-02 17:31:53.963 I/flutter (11190): STEP46O_RESTAURANT_WORKING_HOURS_PARSE_SKIP: rawTime=┘í┘ú:┘ó┘⌐
  07-02 17:31:53.963 I/flutter (11190): STEP46O_RESTAURANT_WORKING_HOURS_PARSE_SKIP: rawTime=┘ó┘ú:┘ú┘á
> 07-02 17:31:53.963 I/flutter (11190): STEP47D_RESTAURANT_DETAIL_BEFORE_PRODUCT_LOAD: vendorId=aceh_clone_6285ddbfd9598_1vMlKPiniUrzybKkWiS1 title=ahmed 
store
> 07-02 17:31:53.963 I/flutter (11190): STEP47D_GET_PRODUCT_BY_VENDOR_ID_START: vendorId=aceh_clone_6285ddbfd9598_1vMlKPiniUrzybKkWiS1 
selectedFoodType=Delivery collection=vendor_products
  07-02 17:31:53.964 I/flutter (11190): STEP47D_RESTAURANT_DETAIL_ONINIT_ENTER
  07-02 17:31:53.989 I/TranWifiSmartAssistantController( 1698): start current network monitor 
  07-02 17:31:53.989 I/WifiService( 1698): getConnectionInfo uid=1000
  07-02 17:31:53.989 V/WifiService( 1698): Clearing REDACT_FOR_LOCAL_MAC_ADDRESS for android(uid=1000)
  07-02 17:31:53.989 V/WifiService( 1698): Clearing REDACT_FOR_NETWORK_SETTINGS for android(uid=1000)
  07-02 17:31:53.989 V/WifiService( 1698): Clearing REDACT_FOR_ACCESS_FINE_LOCATION for android(uid=1000)
  07-02 17:31:53.989 I/TranWifiSmartAssistantController( 1698): userIgnored :false isScoredCurrentNetwork :false
  07-02 17:31:53.989 I/TranWifiSmartAssistantController( 1698): mCurrentNetwork :133 SSID :"TAUFIKKOPIBATOH@WIFI.ID"
  07-02 17:31:53.990 I/WifiNetworkQuality( 1698): current rssi is sufficient
  07-02 17:31:53.990 I/TranWifiSmartAssistantController( 1698): mNoCandidateCount : -1
  07-02 17:31:53.990 I/TranWifiSmartAssistantController( 1698): ====>>rssi :-60
  07-02 17:31:54.014 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.039716,0.000110, totalTime 0.039827 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:31:54.019 I/mtkpower_client( 1080): perf_lock_rel, hdl:55460, tid:1080
  07-02 17:31:54.020 I/libPowerHal(  970): [PD] fpsgo update cmd:1408300 param:0
> 07-02 17:31:54.024 I/BufferQueueProducer( 1012): 
[SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity](BLAST)#19423](this:0xb40000731f5d6a18,id:-1,api:0,p:-1,c:1012) queueBuffer: fps=37.99 
dur=1131.88 max=199.15 min=15.91
  07-02 17:31:54.030 I/BufferQueueProducer( 1012): [VDS-studio.screen.sharing:0 SINK](this:0xb40000725f674618,id:-1,api:1,p:1012,c:1012) queueBuffer: 
fps=38.11 dur=1128.33 max=193.79 min=12.96
  07-02 17:31:54.031 I/hwcomposer(  935): [HWCDisplay] [Display_0 (type:1)] fps:38.122189,dur:1127.95,max:192.44,min:12.94  
  07-02 17:31:54.052 I/mtkpower_client( 1080): perf_lock_acq, hdl:0, dur:30000, num:2, tid:1080
  07-02 17:31:54.053 I/mtkpower_client( 1080): ret_hdl:55461
  07-02 17:31:54.077 I/VoLTE_SIPTimer( 1551): timer expire, timer type:101, timer value:50 (module/volte//volte_stack/src/sip/sip_timer.c:89)
  07-02 17:31:54.077 I/VoLTE_SIPTimer( 1551): invoke_id1:50, invoke_id2:0 (module/volte//volte_stack/src/sip/sip_timer.c:94)
  07-02 17:31:54.096 I/mtkpower_client( 1080): perf_lock_rel, hdl:55461, tid:1080
  07-02 17:31:54.097 I/libPowerHal(  970): [PD] fpsgo update cmd:1408300 param:0
  07-02 17:31:54.098 W/erbete.customer(11190): ApkAssets: Deleting an ApkAssets object '<empty> and 
/data/app/~~TfisHYfad2p3ewQl9UBnpg==/com.google.android.marvin.talkback-M5lFtKU_ErW3v9Nh5S-imA==/base.apk' with 1 weak references
  07-02 17:31:54.098 W/erbete.customer(11190): ApkAssets: Deleting an ApkAssets object '<empty> and 
/data/app/~~TfisHYfad2p3ewQl9UBnpg==/com.google.android.marvin.talkback-M5lFtKU_ErW3v9Nh5S-imA==/split_config.arm64_v8a.apk' with 1 weak references
  07-02 17:31:54.098 W/erbete.customer(11190): ApkAssets: Deleting an ApkAssets object '<empty> and /system_ext/app/MasterOfLanguage/MasterOfLanguage.apk' 
with 1 weak references
  07-02 17:31:54.098 W/erbete.customer(11190): ApkAssets: Deleting an ApkAssets object '<empty> and /tr_preload/operator/app/Notepad/Notepad.apk' with 1 
weak references
  07-02 17:31:54.099 W/erbete.customer(11190): ApkAssets: Deleting an ApkAssets object '<empty> and 
/data/app/~~bGqm-8FfB71Jb_QvIY9YDw==/ai.x.grok-ShNb-Q4YrSfZT9jDj_Dyhw==/base.apk' with 1 weak references
  07-02 17:31:54.099 W/erbete.customer(11190): ApkAssets: Deleting an ApkAssets object '<empty> and 
/data/app/~~bGqm-8FfB71Jb_QvIY9YDw==/ai.x.grok-ShNb-Q4YrSfZT9jDj_Dyhw==/split_config.arm64_v8a.apk' with 1 weak references
  07-02 17:31:54.099 W/erbete.customer(11190): ApkAssets: Deleting an ApkAssets object '<empty> and 
/data/app/~~bGqm-8FfB71Jb_QvIY9YDw==/ai.x.grok-ShNb-Q4YrSfZT9jDj_Dyhw==/split_config.in.apk' with 1 weak references
  07-02 17:31:54.099 W/erbete.customer(11190): ApkAssets: Deleting an ApkAssets object '<empty> and 
/data/app/~~bGqm-8FfB71Jb_QvIY9YDw==/ai.x.grok-ShNb-Q4YrSfZT9jDj_Dyhw==/split_config.xxhdpi.apk' with 1 weak references
  07-02 17:31:54.099 W/erbete.customer(11190): ApkAssets: Deleting an ApkAssets object '<empty> and 
/data/app/~~AeblwLWIEvASMOi96GD59g==/com.deepseek.chat-T-YDxb9sSH25m_MEX72iAA==/base.apk' with 1 weak references
  07-02 17:31:54.099 W/erbete.customer(11190): ApkAssets: Deleting an ApkAssets object '<empty> and 
/data/app/~~AeblwLWIEvASMOi96GD59g==/com.deepseek.chat-T-YDxb9sSH25m_MEX72iAA==/split_config.arm64_v8a.apk' with 1 weak references
  07-02 17:31:54.103 W/erbete.customer(11190): ApkAssets: Deleting an ApkAssets object '<empty> and 
/data/app/~~pMlxE2ZPaAF3kbBxcpk1DQ==/com.zoho.notebook-bAlwsVNYgr2X7FEECVjpyw==/split_config.arm64_v8a.apk' with 1 weak references
  07-02 17:31:54.103 W/erbete.customer(11190): ApkAssets: Deleting an ApkAssets object '<empty> and 
/data/app/~~pMlxE2ZPaAF3kbBxcpk1DQ==/com.zoho.notebook-bAlwsVNYgr2X7FEECVjpyw==/split_config.in.apk' with 1 weak references
  07-02 17:31:54.103 W/erbete.customer(11190): ApkAssets: Deleting an ApkAssets object '<empty> and 
/data/app/~~pMlxE2ZPaAF3kbBxcpk1DQ==/com.zoho.notebook-bAlwsVNYgr2X7FEECVjpyw==/split_config.xxhdpi.apk' with 1 weak references
  07-02 17:31:54.103 W/erbete.customer(11190): ApkAssets: Deleting an ApkAssets object '<empty> and 
/data/app/~~4oBjzLBEYORBMCdIx6T7Gg==/org.plus18.android-jpIcXqwFKDJgkMRxur_omQ==/base.apk' with 1 weak references
  07-02 17:31:54.103 W/erbete.customer(11190): ApkAssets: Deleting an ApkAssets object '<empty> and 
/data/app/~~4oBjzLBEYORBMCdIx6T7Gg==/org.plus18.android-jpIcXqwFKDJgkMRxur_omQ==/split_config.arm64_v8a.apk' with 1 weak references
  07-02 17:31:54.103 W/erbete.customer(11190): ApkAssets: Deleting an ApkAssets object '<empty> and 
/data/app/~~4oBjzLBEYORBMCdIx6T7Gg==/org.plus18.android-jpIcXqwFKDJgkMRxur_omQ==/split_config.in.apk' with 1 weak references
  07-02 17:31:54.103 W/erbete.customer(11190): ApkAssets: Deleting an ApkAssets object '<empty> and 
/data/app/~~4oBjzLBEYORBMCdIx6T7Gg==/org.plus18.android-jpIcXqwFKDJgkMRxur_omQ==/split_config.xxhdpi.apk' with 1 weak references
  07-02 17:31:54.104 W/erbete.customer(11190): ApkAssets: Deleting an ApkAssets object '<empty> and /system_ext/app/AiWriting/AiWriting.apk' with 1 weak 
references
> 07-02 17:31:54.104 W/erbete.customer(11190): ApkAssets: Deleting an ApkAssets object '/product/overlay/AiWritingOverlay-XOS.apk' with 1 weak references
  07-02 17:31:54.114 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.039902,0.000216, totalTime 0.040119 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:31:54.234 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.039774,0.000109, totalTime 0.039884 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:31:54.299 I/mtkpower_client( 1080): perf_lock_acq, hdl:0, dur:30000, num:2, tid:1080
  07-02 17:31:54.301 I/mtkpower_client( 1080): ret_hdl:55462
  07-02 17:31:54.314 I/mtkpower_client( 1080): perf_lock_rel, hdl:55462, tid:1080
  07-02 17:31:54.315 I/libPowerHal(  970): [PD] fpsgo update cmd:1408300 param:0
  07-02 17:31:54.334 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.039715,0.000249, totalTime 0.039966 > logTimeout 
0.022000 TIMEOUT!!
> 07-02 17:31:54.366 I/flutter (11190): STEP47D_GET_PRODUCT_BY_VENDOR_ID_ITEM: vendorId=aceh_clone_6285ddbfd9598_1vMlKPiniUrzybKkWiS1 
productId=aceh_product_aceh_clone_6285ddbfd9598_1vMlKPiniUrzybKkWiS1_FOrI1vYtiK9BeUYyH9rL name=Pasta  categoryID=63aaf0142902b publish=true
> 07-02 17:31:54.366 I/flutter (11190): STEP47D_GET_PRODUCT_BY_VENDOR_ID_RESULT: vendorId=aceh_clone_6285ddbfd9598_1vMlKPiniUrzybKkWiS1 count=1
> 07-02 17:31:54.366 I/flutter (11190): STEP47D_RESTAURANT_DETAIL_PRODUCT_LIST_ASSIGNED: vendorId=aceh_clone_6285ddbfd9598_1vMlKPiniUrzybKkWiS1 count=1 
allCount=1
  07-02 17:31:54.445 D/BufferPoolAccessor2.0(11425): bufferpool2 0xb4000072a18c2a98 : 66(525557 size) total buffers - 1(1938 size) used buffers - 862/2370 
(recycle/alloc) - 1568/2369 (fetch/transfer)
  07-02 17:31:54.538 D/TriggerService( 4219): trigger service is running
  07-02 17:31:54.612 I/mtkpower_client( 1080): perf_lock_acq, hdl:0, dur:30000, num:2, tid:1080
  07-02 17:31:54.615 I/mtkpower_client( 1080): ret_hdl:55463
  07-02 17:31:54.619 I/mtkpower_client( 1080): perf_lock_rel, hdl:55463, tid:1080
  07-02 17:31:54.622 I/libPowerHal(  970): [PD] fpsgo update cmd:1408300 param:0
  07-02 17:31:54.753 D/BufferPoolAccessor2.0(11425): bufferpool2 0xb4000072a18c2a98 : 66(416220 size) total buffers - 1(972 size) used buffers - 862/2387 
(recycle/alloc) - 1585/2386 (fetch/transfer)
  07-02 17:31:54.814 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.040133,0.000063, totalTime 0.040197 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:31:54.919 D/TranWifiTputMonitor( 1698): WIFI: TX: 9 RX: 29 TOTAL = 38
  07-02 17:31:54.919 D/TranWifiTputMonitor( 1698): High Tput: false, TOTAL TPUT: 38
  07-02 17:31:54.955 I/libPerfCtl(  970): xgfGetFPS pid:2380 fps:-1
  07-02 17:31:54.955 I/AppThermalMode(  970): [perfNotifyThermalState] hdl:0
  07-02 17:31:54.955 I/AppThermalMode(  970): [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: 60,fg->pid:11190
  07-02 17:31:54.955 I/AppThermalMode(  970): [perfNotifyThermalState] appThermalIdx -1:
  07-02 17:31:54.955 I/libPerfCtl(  970): xgfGetFPS pid:11190 fps:50
  07-02 17:31:54.955 I/AppThermalMode(  970): [perfNotifyThermalState] hdl:0
  07-02 17:31:54.955 I/AppThermalMode(  970): [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: 60,fg->pid:11190
  07-02 17:31:54.955 I/AppThermalMode(  970): [perfNotifyThermalState] appThermalIdx -1:
  07-02 17:31:55.025 I/mtkpower_client( 1080): ret_hdl:55464
  07-02 17:31:55.041 I/system_server( 1698): Background young concurrent mark compact GC freed 17MB AllocSpace bytes, 40(2256KB) LOS objects, 12% free, 
161MB/184MB, paused 1.628ms,7.986ms total 340.269ms
  07-02 17:31:55.054 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.039873,0.000163, totalTime 0.040036 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:31:55.056 W/System  ( 1698): A resource failed to call close. 
  07-02 17:31:55.056 W/System  ( 1698): A resource failed to call close. 
  07-02 17:31:55.056 W/System  ( 1698): A resource failed to call close. 
  07-02 17:31:55.104 I/mtkpower_client( 1080): perf_lock_rel, hdl:55464, tid:1080
  07-02 17:31:55.105 I/libPowerHal(  970): [PD] fpsgo update cmd:1408300 param:0
> 07-02 17:31:55.107 I/BufferQueueProducer( 1012): 
[SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity](BLAST)#19423](this:0xb40000731f5d6a18,id:-1,api:0,p:-1,c:1012) queueBuffer: fps=47.11 
dur=1082.62 max=100.62 min=16.04
  07-02 17:31:55.115 I/BufferQueueProducer( 1012): [VDS-studio.screen.sharing:0 SINK](this:0xb40000725f674618,id:-1,api:1,p:1012,c:1012) queueBuffer: 
fps=47.02 dur=1084.73 max=104.07 min=13.56
  07-02 17:31:55.115 I/hwcomposer(  935): [HWCDisplay] [Display_0 (type:1)] fps:47.041882,dur:1084.14,max:104.11,min:12.84  
  07-02 17:31:55.137 I/mtkpower_client( 1080): perf_lock_acq, hdl:0, dur:30000, num:2, tid:1080
  07-02 17:31:55.138 I/mtkpower_client( 1080): ret_hdl:55465
  07-02 17:31:55.145 I/mtkpower_client( 1080): perf_lock_rel, hdl:55465, tid:1080
  07-02 17:31:55.146 I/libPowerHal(  970): [PD] fpsgo update cmd:1408300 param:0
  07-02 17:31:55.170 D/BufferPoolAccessor2.0(11425): bufferpool2 0xb4000072a18c2a98 : 66(270830 size) total buffers - 1(1994 size) used buffers - 864/2406 
(recycle/alloc) - 1602/2405 (fetch/transfer)
  07-02 17:31:55.527 D/BufferPoolAccessor2.0(11425): bufferpool2 0xb4000072a18c2a98 : 66(154470 size) total buffers - 1(684 size) used buffers - 867/2426 
(recycle/alloc) - 1619/2425 (fetch/transfer)
  07-02 17:31:55.654 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.040006,0.000098, totalTime 0.040104 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:31:55.673 I/mtkpower_client( 1080): perf_lock_acq, hdl:0, dur:30000, num:2, tid:1080
  07-02 17:31:55.675 I/mtkpower_client( 1080): ret_hdl:55466
  07-02 17:31:55.791 D/WifiClientModeImpl[24001351:wlan0]( 1698): updateLinkLayerStatsRssiSpeedFrequencyCapabilities rssi=-59 TxLinkspeed=54 freq=5765 
RxLinkSpeed=54
  07-02 17:31:55.795 D/WifiDataStall( 1698): tx tput in kbps: 50000
  07-02 17:31:55.795 D/WifiDataStall( 1698): rx tput in kbps: 50000
  07-02 17:31:55.795 V/WifiConfigManager( 1698): Updating scan detail cache freq=5765 BSSID=ac:4a:56:28:fe:ee RSSI=-59 for "TAUFIKKOPIBATOH@WIFI.ID"NONE
  07-02 17:31:55.795 D/WifiThroughputPredictor( 1698):  utilization (LLS) 15 isBluetoothConnected: false final utilization: 15
  07-02 17:31:55.796 D/WifiThroughputPredictor( 1698):  BW: 0 RSSI: -59 Nss: 1 Mode: 1 symDur: 4000 snrDb 21 bitPerTone: 4500 rate: 54 throughput: 50
  07-02 17:31:55.796 D/WifiThroughputPredictor( 1698):  utilization (LLS) 15 isBluetoothConnected: false final utilization: 15
  07-02 17:31:55.954 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.039414,0.000039, totalTime 0.039454 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:31:55.955 I/libPerfCtl(  970): xgfGetFPS pid:11190 fps:58
  07-02 17:31:55.955 I/AppThermalMode(  970): [perfNotifyThermalState] hdl:0
  07-02 17:31:55.955 I/AppThermalMode(  970): [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: 60,fg->pid:11190
  07-02 17:31:55.955 I/AppThermalMode(  970): [perfNotifyThermalState] appThermalIdx -1:
  07-02 17:31:55.966 E/ApplicationHelper( 1698): Fail to get PackageManager
  07-02 17:31:56.008 I/mtkpower_client( 1080): perf_lock_rel, hdl:55466, tid:1080
  07-02 17:31:56.009 I/libPowerHal(  970): [PD] fpsgo update cmd:1408300 param:0
> 07-02 17:31:56.122 I/BufferQueueProducer( 1012): 
[SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity](BLAST)#19423](this:0xb40000731f5d6a18,id:-1,api:0,p:-1,c:1012) queueBuffer: fps=37.45 
dur=1014.79 max=349.50 min=15.97
  07-02 17:31:56.128 I/BufferQueueProducer( 1012): [VDS-studio.screen.sharing:0 SINK](this:0xb40000725f674618,id:-1,api:1,p:1012,c:1012) queueBuffer: 
fps=37.50 dur=1013.26 max=346.72 min=11.56
  07-02 17:31:56.129 I/hwcomposer(  935): [HWCDisplay] [Display_0 (type:1)] fps:37.502567,dur:1013.26,max:346.17,min:10.70  
  07-02 17:31:56.174 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.040223,0.000095, totalTime 0.040319 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:31:56.214 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.039391,0.000114, totalTime 0.039506 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:31:56.226 D/AES     ( 1698): AEEIOCTL_GET/SET_SF_STATE IOCTL,cmd= 1074294797, lParam=0. 
  07-02 17:31:56.226 D/AES     ( 1698): AEEIOCTL_RT_MON_Kick IOCTL,cmd= 2147774474, lParam=300. 
  07-02 17:31:56.334 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.039983,0.000138, totalTime 0.040122 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:31:56.339 I/android.hardware.thermal@2.0-service.mtk(  940): fill_temperatures filterType1 name: SKIN type: SKIN throttlingStatus: NONE value: 
42.25 ret_temps size 0
  07-02 17:31:56.341 D/BufferPoolAccessor2.0(11425): bufferpool2 0xb4000072a18c2a98 : 66(160243 size) total buffers - 1(4878 size) used buffers - 869/2457 
(recycle/alloc) - 1648/2456 (fetch/transfer)
  07-02 17:31:56.401 D/ULogGuard( 1342): Monitoring: 15 threads, 0 requests, 0 time-bombs; 3 guards. ResetFlags = 0x7
  07-02 17:31:56.539 D/TriggerService( 4219): trigger service is running
  07-02 17:31:56.563 D/EventHub( 1698): getevents BTN_TOUCH DOWN
  07-02 17:31:56.564 D/AppFlingMode(  970): [CheckAppFlingHint] 25 com.erbete.customer 60
  07-02 17:31:56.564 D/TextSelection(11190): onUseCache cache=false
  07-02 17:31:56.567 D/TouchSliderConsumer( 4503): onInputEvent : ACTION_DOWN
  07-02 17:31:56.567 D/TouchSliderConsumer( 4503): consumeTouchEvent : 248.1875 1464.9375 RectF(1035.0, 294.0, 1083.0, 660.0) 
  07-02 17:31:56.568 D/TouchMonitorProxy( 4272): handleInputEvent MotionEvent:MotionEvent { action=ACTION_DOWN, actionButton=0, id[0]=0, x[0]=248.1875, 
y[0]=1464.9375, toolType[0]=TOOL_TYPE_FINGER, buttonState=0, classification=NONE, metaState=0, flags=0x0, edgeFlags=0x0, pointerCount=1, historySize=0, 
eventTime=161897696, downTime=161897696, deviceId=6, source=0x1002, displayId=0, eventId=672830758 }
  07-02 17:31:56.569 D/ScreenCapControl( 4272): onFingerDown: 1464, 108, 120
  07-02 17:31:56.996 I/WifiNetworkQuality( 1698): current rssi is sufficient
  07-02 17:31:56.996 I/TranWifiSmartAssistantController( 1698): mNoCandidateCount : -1
  07-02 17:31:56.996 I/TranWifiSmartAssistantController( 1698): ====>>rssi :-59
  07-02 17:31:57.128 I/BufferQueueProducer( 1012): [VDS-studio.screen.sharing:0 SINK](this:0xb40000725f674618,id:-1,api:1,p:1012,c:1012) queueBuffer: 
fps=55.99 dur=1000.16 max=34.76 min=13.14
  07-02 17:31:57.129 I/hwcomposer(  935): [HWCDisplay] [Display_0 (type:1)] fps:55.989182,dur:1000.19,max:35.70,min:12.87  
  07-02 17:31:57.133 D/InetDiagMessage( 1698): Destroyed 0 sockets, proto=IPPROTO_TCP, family=AF_INET, states=14
  07-02 17:31:57.135 D/InetDiagMessage( 1698): Destroyed 1 sockets, proto=IPPROTO_TCP, family=AF_INET6, states=14
  07-02 17:31:57.135 D/InetDiagMessage( 1698): Destroyed live tcp sockets for uids={10131} in 7ms
> 07-02 17:31:57.137 I/BufferQueueProducer( 1012): 
[SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity](BLAST)#19423](this:0xb40000731f5d6a18,id:-1,api:0,p:-1,c:1012) queueBuffer: fps=56.12 
dur=1015.73 max=33.40 min=16.02
  07-02 17:31:57.138 D/InetDiagMessage( 1698): Destroyed 0 sockets, proto=IPPROTO_TCP, family=AF_INET, states=14
  07-02 17:31:57.141 D/InetDiagMessage( 1698): Destroyed 0 sockets, proto=IPPROTO_TCP, family=AF_INET6, states=14
  07-02 17:31:57.141 D/InetDiagMessage( 1698): Destroyed live tcp sockets for uids={20131} in 5ms
  07-02 17:31:57.143 D/BufferPoolAccessor2.0(11425): bufferpool2 0xb4000072a18c2a98 : 66(520033 size) total buffers - 1(6881 size) used buffers - 883/2502 
(recycle/alloc) - 1679/2501 (fetch/transfer)
  07-02 17:31:57.174 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.040062,0.000053, totalTime 0.040115 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:31:57.234 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.039947,0.000100, totalTime 0.040048 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:31:57.308 D/BroadcastQueue( 1698): Hiber/broadcast restricted queue.uid=10271 action=BroadcastRecord{7054c30 
android.intent.action.BATTERY_CHANGED/u-1}
  07-02 17:31:57.311 D/BroadcastQueue( 1698): Hiber/broadcast restricted queue.uid=10124 action=BroadcastRecord{7054c30 
android.intent.action.BATTERY_CHANGED/u-1}
  07-02 17:31:57.422 D/BufferPoolAccessor2.0(11425): bufferpool2 0xb4000072a18c2a98 : 66(654975 size) total buffers - 1(9149 size) used buffers - 883/2519 
(recycle/alloc) - 1696/2518 (fetch/transfer)
  07-02 17:31:57.441 I/mtkpower_client( 1080): perf_lock_acq, hdl:0, dur:30000, num:2, tid:1080
  07-02 17:31:57.443 I/mtkpower_client( 1080): ret_hdl:55474
  07-02 17:31:57.556 I/WifiService( 1698): getConnectionInfo uid=10155
  07-02 17:31:57.557 V/WifiPermissionsUtil( 1698): checkCallersLocationPermission(com.transsion.trancare): uid 10155 doesn't have permission 
android.permission.ACCESS_FINE_LOCATION
  07-02 17:31:57.557 V/WifiPermissionsUtil( 1698): enforceCanAccessScanResults(pkg=com.transsion.trancare, uid=10155): canCallingUidAccessLocation=false, 
canAppPackageUseLocation=false
  07-02 17:31:57.558 V/WifiService( 1698): Keeping REDACT_FOR_ACCESS_FINE_LOCATION:java.lang.SecurityException: UID 10155 has no location permission
  07-02 17:31:57.559 I/WifiService( 1698): getConnectionInfo uid=10155
  07-02 17:31:57.560 V/WifiPermissionsUtil( 1698): checkCallersLocationPermission(com.transsion.trancare): uid 10155 doesn't have permission 
android.permission.ACCESS_FINE_LOCATION
  07-02 17:31:57.560 V/WifiPermissionsUtil( 1698): enforceCanAccessScanResults(pkg=com.transsion.trancare, uid=10155): canCallingUidAccessLocation=false, 
canAppPackageUseLocation=false
  07-02 17:31:57.956 I/AppThermalMode(  970): [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: 60,fg->pid:11190
  07-02 17:31:57.956 I/AppThermalMode(  970): [perfNotifyThermalState] appThermalIdx -1:
  07-02 17:31:57.956 I/libPerfCtl(  970): xgfGetFPS pid:11190 fps:59
  07-02 17:31:57.956 I/AppThermalMode(  970): [perfNotifyThermalState] hdl:0
  07-02 17:31:57.956 I/AppThermalMode(  970): [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: 60,fg->pid:11190
  07-02 17:31:57.956 I/AppThermalMode(  970): [perfNotifyThermalState] appThermalIdx -1:
  07-02 17:31:58.141 I/BufferQueueProducer( 1012): [VDS-studio.screen.sharing:0 SINK](this:0xb40000725f674618,id:-1,api:1,p:1012,c:1012) queueBuffer: 
fps=44.43 dur=1012.91 max=271.62 min=13.61
  07-02 17:31:58.142 I/hwcomposer(  935): [HWCDisplay] [Display_0 (type:1)] fps:44.426121,dur:1012.92,max:272.02,min:13.24  
> 07-02 17:31:58.153 I/BufferQueueProducer( 1012): 
[SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity](BLAST)#19423](this:0xb40000731f5d6a18,id:-1,api:0,p:-1,c:1012) queueBuffer: fps=44.31 
dur=1015.50 max=266.95 min=16.09
  07-02 17:31:58.273 D/TranSignalStrengthComponentImpl( 2620): [LTE] dbm: -83
  07-02 17:31:58.273 D/TranSignalStrengthComponentImpl( 2620): [LTE] dbm: -83
  07-02 17:31:58.277 D/CallbackProxy( 6515): [onSignalStrengthsChanged]
  07-02 17:31:58.277 D/TranSignalStrengthComponentImpl( 1698): [LTE] dbm: -83
  07-02 17:31:58.277 I/TranTele/TranPhoneInterfaceManager( 2620): TTC - onSignalStrengthsChanged
  07-02 17:31:58.280 D/TranPhoneSwitcher( 2620): getNetworkType: 4G
  07-02 17:31:58.280 I/TranPhoneSwitcher( 2620): mOthersign:4subid :1
  07-02 17:31:58.514 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.040097,0.000094, totalTime 0.040192 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:31:58.540 D/TriggerService( 4219): trigger service is running
  07-02 17:31:58.554 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.039139,0.000089, totalTime 0.039229 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:31:58.660 W/native  ( 5782): W0000 00:00:1782988318.660458    5913 lag_detector.cc:58] Pipeline lagging by 958.934249ms. Continue processing 
samples.
  07-02 17:31:58.806 D/WifiClientModeImpl[24001351:wlan0]( 1698): updateLinkLayerStatsRssiSpeedFrequencyCapabilities rssi=-57 TxLinkspeed=54 freq=5765 
RxLinkSpeed=54
  07-02 17:31:58.809 D/WifiDataStall( 1698): tx tput in kbps: 50000
  07-02 17:31:58.809 D/WifiDataStall( 1698): rx tput in kbps: 50000
  07-02 17:31:58.809 V/WifiConfigManager( 1698): Updating scan detail cache freq=5765 BSSID=ac:4a:56:28:fe:ee RSSI=-57 for "TAUFIKKOPIBATOH@WIFI.ID"NONE
  07-02 17:31:58.810 I/TranTele/TranPhoneInterfaceManager( 2620): [onReceive] action: android.net.wifi.RSSI_CHANGED
  07-02 17:31:58.810 D/WifiThroughputPredictor( 1698):  utilization (LLS) 15 isBluetoothConnected: false final utilization: 15
  07-02 17:31:58.810 D/WifiThroughputPredictor( 1698):  BW: 0 RSSI: -57 Nss: 1 Mode: 1 symDur: 4000 snrDb 23 bitPerTone: 4500 rate: 54 throughput: 50
  07-02 17:31:59.068 D/LonglinkService(17402): ΓöîΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ
ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓö
ÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ
  07-02 17:31:59.068 D/LonglinkService(17402): Γöé pool-19-thread-1, im.floo2.impl.session.LonglinkService.a(LonglinkService.kt:8)
  07-02 17:31:59.068 D/LonglinkService(17402): Γö£ΓöäΓöäΓöäΓöäΓöäΓöäΓöäΓöäΓöäΓöäΓöäΓöäΓöäΓöäΓöäΓöäΓöäΓöäΓöäΓöäΓöäΓöäΓöäΓöäΓöäΓöäΓöäΓöäΓöäΓöäΓöäΓöäΓöäΓöäΓöä
ΓöäΓöäΓöäΓöäΓöäΓöäΓöäΓöäΓöäΓöäΓöäΓöäΓöäΓöäΓöäΓöäΓöäΓöäΓöäΓöäΓöäΓöäΓöäΓöäΓöäΓöäΓöäΓöäΓöäΓöäΓöäΓöäΓöäΓöäΓöäΓöäΓöäΓöäΓöäΓöäΓöäΓöäΓöäΓöäΓöäΓöäΓöäΓöäΓöäΓöäΓöäΓö
äΓöäΓöäΓöäΓöäΓöäΓöäΓöäΓöäΓöäΓöäΓöäΓöäΓöäΓöäΓöäΓöäΓöäΓöäΓöäΓöäΓöäΓöäΓöäΓöäΓöä
  07-02 17:31:59.068 D/LonglinkService(17402): Γöé Schedule::intervalForReconnect() interval: 359
  07-02 17:31:59.068 D/LonglinkService(17402): ΓööΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ
ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓö
ÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ
  07-02 17:31:59.134 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.039874,0.000080, totalTime 0.039955 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:31:59.157 I/BufferQueueProducer( 1012): [VDS-studio.screen.sharing:0 SINK](this:0xb40000725f674618,id:-1,api:1,p:1012,c:1012) queueBuffer: 
fps=57.10 dur=1015.75 max=43.94 min=13.23
  07-02 17:31:59.157 I/hwcomposer(  935): [HWCDisplay] [Display_0 (type:1)] fps:57.105522,dur:1015.66,max:43.55,min:12.43  
> 07-02 17:31:59.169 I/BufferQueueProducer( 1012): 
[SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity](BLAST)#19423](this:0xb40000731f5d6a18,id:-1,api:0,p:-1,c:1012) queueBuffer: fps=57.10 
dur=1015.73 max=49.33 min=16.10
  07-02 17:31:59.174 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000000,0.039811,0.000065, totalTime 0.039877 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:31:59.205 I/mtkpower_client( 1080): perf_lock_acq, hdl:0, dur:30000, num:2, tid:1080
  07-02 17:31:59.206 I/mtkpower_client( 1080): ret_hdl:55476
  07-02 17:31:59.267 I/mtkpower_client( 1080): perf_lock_rel, hdl:55476, tid:1080
  07-02 17:31:59.269 I/libPowerHal(  970): [PD] fpsgo update cmd:1408300 param:0
  07-02 17:31:59.404 D/ULogGuard( 1342): Monitoring: 15 threads, 0 requests, 0 time-bombs; 3 guards. ResetFlags = 0x7
  07-02 17:31:59.483 D/BoundBrokerSvc( 4458): onRebind: Intent { act=com.google.android.gms.libs.gmscorelogger.service.START dat=chimera-action:/... 
cmp=com.google.android.gms/.chimera.PersistentDirectBootAwareApiService }
  07-02 17:31:59.536 I/mtkpower_client( 1080): perf_lock_acq, hdl:0, dur:30000, num:2, tid:1080
  07-02 17:31:59.537 I/mtkpower_client( 1080): ret_hdl:55477
  07-02 17:31:59.542 I/mtkpower_client( 1080): perf_lock_rel, hdl:55477, tid:1080
  07-02 17:31:59.543 I/libPowerHal(  970): [PD] fpsgo update cmd:1408300 param:0
  07-02 17:31:59.759 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.024476,0.000123, totalTime 0.024600 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:31:59.770 D/TLinkBrush_DATA( 1698): [NetdEvent]onTcpSocketStatsEvent
  07-02 17:31:59.771 D/TLinkBrush_DATA( 1698): [NetdEvent]onTcpSocketStatsEvent sent = 0, return
  07-02 17:31:59.771 D/TLinkBrush_DATA( 1698): [NetdEvent]onTcpSocketStatsEvent
  07-02 17:31:59.772 D/TLinkBrush_DATA( 1698): [NetdEvent]onTcpSocketStatsEvent sent = 0, return
  07-02 17:31:59.772 D/TLinkBrush_DATA( 1698): [NetdEvent]onTcpSocketStatsEvent
  07-02 17:31:59.956 I/libPerfCtl(  970): xgfGetFPS pid:2380 fps:-1
  07-02 17:32:00.000 V/WifiService( 1698): Clearing REDACT_FOR_ACCESS_FINE_LOCATION for android(uid=1000)
  07-02 17:32:00.000 I/TranWifiSmartAssistantController( 1698): userIgnored :false isScoredCurrentNetwork :false
  07-02 17:32:00.000 I/TranWifiSmartAssistantController( 1698): mCurrentNetwork :133 SSID :"TAUFIKKOPIBATOH@WIFI.ID"
  07-02 17:32:00.000 I/WifiNetworkQuality( 1698): current rssi is sufficient
  07-02 17:32:00.000 I/TranWifiSmartAssistantController( 1698): mNoCandidateCount : -1
  07-02 17:32:00.000 I/TranWifiSmartAssistantController( 1698): ====>>rssi :-57
  07-02 17:32:00.004 I/AlarmManager( 1698): going to acquire wakelock now
  07-02 17:32:00.006 I/Kolun_AI( 3928): StepCount:onTimeTick()
> 07-02 17:32:00.006 I/DisplayDeviceRepository( 1698): Display device changed: DisplayDeviceInfo{"Layar Bawaan": uniqueId="local:0", 1080 x 2436, modeId 
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
  07-02 17:32:00.007 W/BroadcastDispatcherLog( 2380): [21808] Broadcast received for user 0: Intent { act=android.intent.action.TIME_TICK flg=0x50200010 }
  07-02 17:32:00.008 W/BroadcastDispatcherLog( 2380): [21809] Broadcast received for user -1: Intent { act=android.intent.action.TIME_TICK flg=0x50200010 }
  07-02 17:32:00.009 I/Griffin/DeviceState( 1698): virtualDisplayPackageName :{com.android.shell=2000}
  07-02 17:32:00.010 I/UxDetectorRestHandler( 4461): loadDatabaseAtTime: 2746
  07-02 17:32:00.010 I/AiCommunicateHandler( 4461): loadDatabaseAtTime: 2746
  07-02 17:32:00.031 I/niex.vsimhelper( 9504): Explicit concurrent mark compact GC freed 448KB AllocSpace bytes, 0(0B) LOS objects, 71% free, 
2440KB/8584KB, paused 631us,2.020ms total 20.212ms
  07-02 17:32:00.032 V/KeyguardStatusViewController( 2380): onTimeChanged
  07-02 17:32:00.034 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.039718,0.000044, totalTime 0.039763 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:32:00.063 D/TrClockView( 2380): updateDataOnTimeChanged
  07-02 17:32:00.085 I/BufferQueueProducer( 1012): [StatusBar#97](this:0xb40000731f578a88,id:-1,api:0,p:-1,c:1012) queueBuffer: fps=0.29 dur=3413.56 
max=3413.56 min=3413.56
  07-02 17:32:00.174 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.039693,0.000021, totalTime 0.039714 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:32:00.175 I/BufferQueueProducer( 1012): [VDS-studio.screen.sharing:0 SINK](this:0xb40000725f674618,id:-1,api:1,p:1012,c:1012) queueBuffer: 
fps=53.00 dur=1018.86 max=87.12 min=12.09
  07-02 17:32:00.177 I/hwcomposer(  935): [HWCDisplay] [Display_0 (type:1)] fps:52.977432,dur:1019.30,max:87.54,min:11.94  
> 07-02 17:32:00.184 I/BufferQueueProducer( 1012): 
[SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity](BLAST)#19423](this:0xb40000731f5d6a18,id:-1,api:0,p:-1,c:1012) queueBuffer: fps=53.16 
dur=1015.74 max=83.93 min=15.36
  07-02 17:32:00.270 D/PhoneInterfaceManager( 2620): SubscriptionManager.getPhoneId(1)=0
  07-02 17:32:00.272 D/Tile.TrCellularTile( 2380): handleUpdateState: status=5 isMobileDataEnabled=true phone == null false
  07-02 17:32:00.277 D/PhoneInterfaceManager( 2620): SubscriptionManager.getPhoneId(2)=1
  07-02 17:32:00.279 D/Tile.TrCellularTile( 2380): handleUpdateState: status=5 isMobileDataEnabled=true phone == null false
  07-02 17:32:00.292 D/PhoneInterfaceManager( 2620): SubscriptionManager.getPhoneId(1)=0
  07-02 17:32:00.294 D/Tile.TrCellularTile( 2380): handleUpdateState: status=5 isMobileDataEnabled=true phone == null false
  07-02 17:32:00.298 D/PhoneInterfaceManager( 2620): SubscriptionManager.getPhoneId(2)=1
  07-02 17:32:00.299 D/Tile.TrCellularTile( 2380): handleUpdateState: status=5 isMobileDataEnabled=true phone == null false
  07-02 17:32:00.309 D/PhoneInterfaceManager( 2620): SubscriptionManager.getPhoneId(1)=0
  07-02 17:32:00.310 D/Tile.TrCellularTile( 2380): handleUpdateState: status=5 isMobileDataEnabled=true phone == null false
  07-02 17:32:00.311 D/PhoneInterfaceManager( 2620): SubscriptionManager.getPhoneId(2)=1
  07-02 17:32:00.312 D/Tile.TrCellularTile( 2380): handleUpdateState: status=5 isMobileDataEnabled=true phone == null false
  07-02 17:32:00.475 I/mtkpower_client( 1080): perf_lock_acq, hdl:0, dur:30000, num:2, tid:1080
  07-02 17:32:00.477 I/mtkpower_client( 1080): ret_hdl:55478
  07-02 17:32:00.479 I/mtkpower_client( 1080): perf_lock_rel, hdl:55478, tid:1080
  07-02 17:32:00.480 I/libPowerHal(  970): [PD] fpsgo update cmd:1408300 param:0
  07-02 17:32:00.540 D/TriggerService( 4219): trigger service is running
  07-02 17:32:00.927 D/TranWifiTputMonitor( 1698): WIFI: TX: 1 RX: 4 TOTAL = 5
  07-02 17:32:00.957 I/AppThermalMode(  970): [perfNotifyThermalState] appThermalIdx -1:
  07-02 17:32:00.957 I/libPerfCtl(  970): xgfGetFPS pid:11190 fps:60
  07-02 17:32:00.957 I/AppThermalMode(  970): [perfNotifyThermalState] hdl:0
  07-02 17:32:00.957 I/AppThermalMode(  970): [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: 60,fg->pid:11190
  07-02 17:32:00.957 I/AppThermalMode(  970): [perfNotifyThermalState] appThermalIdx -1:
  07-02 17:32:01.014 I/AlarmManager( 1698): going to release wakelock now
  07-02 17:32:01.191 I/BufferQueueProducer( 1012): [VDS-studio.screen.sharing:0 SINK](this:0xb40000725f674618,id:-1,api:1,p:1012,c:1012) queueBuffer: 
fps=59.06 dur=1015.91 max=36.12 min=12.34
  07-02 17:32:01.193 I/hwcomposer(  935): [HWCDisplay] [Display_0 (type:1)] fps:59.037529,dur:1016.30,max:37.11,min:11.52  
> 07-02 17:32:01.200 I/BufferQueueProducer( 1012): 
[SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity](BLAST)#19423](this:0xb40000731f5d6a18,id:-1,api:0,p:-1,c:1012) queueBuffer: fps=59.06 
dur=1015.93 max=33.40 min=15.82
  07-02 17:32:01.354 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.039551,0.000047, totalTime 0.039598 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:32:01.474 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.039498,0.000115, totalTime 0.039614 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:32:01.635 I/StatusBarNetworkRateView( 2380): wifi is default. hide second network rate view. StatusBarNetworkRateView subId=2, 
isFirstSimCard=false, mLocation=QS_NEW NetworkRateState=NetworkRateState{visible=true, activeMobileDataSubId=2, totalRate=4.321, netWorkState=1, 
isAirplane=false, netRateStateBySettingGlobal=1, networkRate='4,32', networkRateUnit='KB/S'}
  07-02 17:32:01.657 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.022194,0.000054, totalTime 0.022249 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:32:01.666 I/BufferQueueProducer( 1012): [StatusBar#97](this:0xb40000731f578a88,id:-1,api:0,p:-1,c:1012) queueBuffer: fps=0.63 dur=1581.76 
max=1581.76 min=1581.76
  07-02 17:32:01.833 D/WifiClientModeImpl[24001351:wlan0]( 1698): updateLinkLayerStatsRssiSpeedFrequencyCapabilities rssi=-57 TxLinkspeed=54 freq=5765 
RxLinkSpeed=54
  07-02 17:32:01.834 D/WifiDataStall( 1698): tx tput in kbps: 50000
  07-02 17:32:01.834 D/WifiDataStall( 1698): rx tput in kbps: 50000
  07-02 17:32:01.834 V/WifiConfigManager( 1698): Updating scan detail cache freq=5765 BSSID=ac:4a:56:28:fe:ee RSSI=-57 for "TAUFIKKOPIBATOH@WIFI.ID"NONE
  07-02 17:32:01.834 D/WifiThroughputPredictor( 1698):  utilization (LLS) 15 isBluetoothConnected: false final utilization: 15
  07-02 17:32:01.835 D/WifiThroughputPredictor( 1698):  BW: 0 RSSI: -57 Nss: 1 Mode: 1 symDur: 4000 snrDb 23 bitPerTone: 4500 rate: 54 throughput: 50
  07-02 17:32:01.835 D/WifiThroughputPredictor( 1698):  utilization (LLS) 15 isBluetoothConnected: false final utilization: 15
  07-02 17:32:01.835 D/WifiThroughputPredictor( 1698):  BW: 0 RSSI: -57 Nss: 1 Mode: 1 symDur: 4000 snrDb 23 bitPerTone: 4500 rate: 54 throughput: 50
  07-02 17:32:01.836 D/WifiThroughputPredictor( 1698):  utilization (LLS) 15 isBluetoothConnected: false final utilization: 15
  07-02 17:32:01.836 D/WifiThroughputPredictor( 1698):  BW: 0 RSSI: -57 Nss: 1 Mode: 1 symDur: 4000 snrDb 23 bitPerTone: 4500 rate: 54 throughput: 50
  07-02 17:32:01.836 D/WifiThroughputPredictor( 1698):  utilization (LLS) 15 isBluetoothConnected: false final utilization: 15
  07-02 17:32:01.836 D/WifiThroughputPredictor( 1698):  BW: 0 RSSI: -57 Nss: 1 Mode: 1 symDur: 4000 snrDb 23 bitPerTone: 4500 rate: 54 throughput: 50
  07-02 17:32:01.841 D/WifiScoreCard( 1698): BSSID update SIGNAL_POLL ID: 942782235 SSID: "TAUFIKKOPIBATOH@WIFI.ID", BSSID: ac:4a:56:28:fe:ee, MAC: 
02:16:3f:eb:28:01, IP: /10.226.145.77, Security type: 0, Supplicant state: COMPLETED, Wi-Fi standard: legacy, RSSI: -57, Link speed: 48Mbps, Tx Link 
speed: 48Mbps, Max Supported Tx Link speed: 54Mbps, Calculated Tx : 0Mbps, Rx Link speed: 48Mbps, Max Supported Rx Link speed: 54Mbps, Calculated Rx : 
0Mbps, Frequency: 5765MHz, Net ID: 142, Metered hint: false, score: 60, isUsable: true, CarrierMerged: false, SubscriptionId: -1, IsPrimary: 1, Trusted: 
true, Restricted: false, Ephemeral: false, OEM paid: false, OEM private: false, OSU AP: false, FQDN: <none>, Provider friendly name: <none>, Requesting 
package name: <none>"TAUFIKKOPIBATOH@WIFI.ID"openMLO Information: , Is TID-To-Link negotiation supported by the AP: false, AP MLD Address: <none>, AP MLO 
Link Id: <none>, AP MLO Affiliated links: <none>, Vendor Data: <none>
  07-02 17:32:01.958 I/AppThermalMode(  970): [perfNotifyThermalState] hdl:0
  07-02 17:32:01.958 I/AppThermalMode(  970): [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: 60,fg->pid:11190
  07-02 17:32:01.958 I/AppThermalMode(  970): [perfNotifyThermalState] appThermalIdx -1:
  07-02 17:32:01.988 I/mtkpower_client( 1080): perf_lock_rel, hdl:55479, tid:1080
  07-02 17:32:01.989 I/libPowerHal(  970): [PD] fpsgo update cmd:1408300 param:0
  07-02 17:32:02.079 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.024145,0.000142, totalTime 0.024289 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:32:02.207 I/BufferQueueProducer( 1012): [VDS-studio.screen.sharing:0 SINK](this:0xb40000725f674618,id:-1,api:1,p:1012,c:1012) queueBuffer: 
fps=54.17 dur=1015.40 max=114.36 min=11.73
  07-02 17:32:02.208 I/hwcomposer(  935): [HWCDisplay] [Display_0 (type:1)] fps:54.169304,dur:1015.34,max:114.82,min:11.44  
> 07-02 17:32:02.216 I/BufferQueueProducer( 1012): 
[SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity](BLAST)#19423](this:0xb40000731f5d6a18,id:-1,api:0,p:-1,c:1012) queueBuffer: fps=54.16 
dur=1015.46 max=116.59 min=15.93
  07-02 17:32:02.337 I/mtkpower_client( 1080): perf_lock_acq, hdl:0, dur:30000, num:2, tid:1080
  07-02 17:32:02.339 I/mtkpower_client( 1080): ret_hdl:55480
  07-02 17:32:02.361 I/native  ( 5782): I0000 00:00:1782988322.360989    5913 soda_async_impl.cc:1426] Current audio timestamp: 1782988321411520
  07-02 17:32:02.405 D/ULogGuard( 1342): Monitoring: 15 threads, 0 requests, 0 time-bombs; 3 guards. ResetFlags = 0x7
  07-02 17:32:02.542 D/TriggerService( 4219): trigger service is running
  07-02 17:32:02.639 D/BufferPoolAccessor2.0(11425): bufferpool2 0xb4000072a18c2a98 : 49(392433 size) total buffers - 1(279 size) used buffers - 1135/2787 
(recycle/alloc) - 1715/2786 (fetch/transfer)
  07-02 17:32:02.958 I/libPerfCtl(  970): xgfGetFPS pid:2380 fps:-1
  07-02 17:32:02.958 I/AppThermalMode(  970): [perfNotifyThermalState] hdl:0
  07-02 17:32:02.958 I/AppThermalMode(  970): [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: 60,fg->pid:11190
  07-02 17:32:02.958 I/AppThermalMode(  970): [perfNotifyThermalState] appThermalIdx -1:
  07-02 17:32:02.958 I/libPerfCtl(  970): xgfGetFPS pid:11190 fps:60
  07-02 17:32:02.958 I/AppThermalMode(  970): [perfNotifyThermalState] hdl:0
  07-02 17:32:02.958 I/AppThermalMode(  970): [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: 60,fg->pid:11190
  07-02 17:32:02.958 I/AppThermalMode(  970): [perfNotifyThermalState] appThermalIdx -1:
  07-02 17:32:03.003 I/TranWifiSmartAssistantController( 1698): start current network monitor 
  07-02 17:32:03.003 I/WifiService( 1698): getConnectionInfo uid=1000
  07-02 17:32:03.003 V/WifiService( 1698): Clearing REDACT_FOR_LOCAL_MAC_ADDRESS for android(uid=1000)
  07-02 17:32:03.003 V/WifiService( 1698): Clearing REDACT_FOR_NETWORK_SETTINGS for android(uid=1000)
  07-02 17:32:03.349 I/libPowerHal(  970): [PD] fpsgo update cmd:1438700 param:1000
  07-02 17:32:03.394 D/TranSignalStrengthComponentImpl( 2620): [LTE] dbm: -82
  07-02 17:32:03.395 D/TranSignalStrengthComponentImpl( 2620): [LTE] dbm: -82
  07-02 17:32:03.398 D/TranSignalStrengthComponentImpl( 1698): [LTE] dbm: -82
  07-02 17:32:03.401 D/CallbackProxy( 6515): [onSignalStrengthsChanged]
  07-02 17:32:03.403 I/TranTele/TranPhoneInterfaceManager( 2620): TTC - onSignalStrengthsChanged
  07-02 17:32:03.407 D/TranPhoneSwitcher( 2620): getNetworkType: 4G
  07-02 17:32:03.408 I/TranPhoneSwitcher( 2620): mOthersign:4subid :1
> 07-02 17:32:03.915 I/BufferQueueProducer( 1012): 
[SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity](BLAST)#19423](this:0xb40000731f5d6a18,id:-1,api:0,p:-1,c:1012) queueBuffer: fps=4.12 
dur=1698.75 max=1599.04 min=16.25
  07-02 17:32:03.921 I/FPSGO   ( 1080): fpsgo_boost_sched_idle_prefer:1
  07-02 17:32:03.921 I/mtkpower_client( 1080): perf_lock_acq, hdl:0, dur:0, num:2, tid:1080
  07-02 17:32:03.922 I/mtkpower_client( 1080): ret_hdl:55481
  07-02 17:32:03.923 I/FPSGO   ( 1080): perfLockAcq hdl:55481
  07-02 17:32:03.923 I/FPSGO   ( 1080): fpsgo_boost_sched_rate_ns:0
  07-02 17:32:03.923 I/mtkpower_client( 1080): perf_lock_acq, hdl:0, dur:0, num:12, tid:1080
  07-02 17:32:03.926 I/BufferQueueProducer( 1012): [VDS-studio.screen.sharing:0 SINK](this:0xb40000725f674618,id:-1,api:1,p:1012,c:1012) queueBuffer: 
fps=4.65 dur=1718.96 max=1603.23 min=15.13
  07-02 17:32:03.927 I/mtkpower_client( 1080): ret_hdl:55482
  07-02 17:32:03.927 I/FPSGO   ( 1080): perfLockAcq hdl:55482
  07-02 17:32:03.927 I/hwcomposer(  935): [HWCDisplay] [Display_0 (type:1)] fps:4.654887,dur:1718.62,max:1603.36,min:14.28  
  07-02 17:32:03.929 I/libPowerHal(  970): cmdSetting - unknown cmd:1438500, scmd:(null) ,param_1:0
  07-02 17:32:03.929 I/libPowerHal(  970): cmdSetting - unknown cmd:1438800, scmd:(null) ,param_1:0
  07-02 17:32:03.930 D/TranWifiTputMonitor( 1698): WIFI: TX: 0 RX: 0 TOTAL = 0
  07-02 17:32:03.930 D/TranWifiTputMonitor( 1698): High Tput: false, TOTAL TPUT: 0
  07-02 17:32:03.958 I/libPerfCtl(  970): xgfGetFPS pid:2380 fps:-1
  07-02 17:32:03.958 I/AppThermalMode(  970): [perfNotifyThermalState] hdl:0
  07-02 17:32:03.958 I/AppThermalMode(  970): [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: 60,fg->pid:11190
  07-02 17:32:03.958 I/AppThermalMode(  970): [perfNotifyThermalState] appThermalIdx -1:
  07-02 17:32:04.869 V/WifiService( 1698): Clearing REDACT_FOR_LOCAL_MAC_ADDRESS for com.android.phone(uid=1001)
  07-02 17:32:04.870 V/WifiService( 1698): Clearing REDACT_FOR_NETWORK_SETTINGS for com.android.phone(uid=1001)
  07-02 17:32:04.870 V/WifiService( 1698): Clearing REDACT_FOR_ACCESS_FINE_LOCATION for com.android.phone(uid=1001)
  07-02 17:32:04.874 D/WifiScoreCard( 1698): BSSID update SIGNAL_POLL ID: 942782235 SSID: "TAUFIKKOPIBATOH@WIFI.ID", BSSID: ac:4a:56:28:fe:ee, MAC: 
02:16:3f:eb:28:01, IP: /10.226.145.77, Security type: 0, Supplicant state: COMPLETED, Wi-Fi standard: legacy, RSSI: -60, Link speed: 48Mbps, Tx Link 
speed: 48Mbps, Max Supported Tx Link speed: 54Mbps, Calculated Tx : 0Mbps, Rx Link speed: 48Mbps, Max Supported Rx Link speed: 54Mbps, Calculated Rx : 
0Mbps, Frequency: 5765MHz, Net ID: 142, Metered hint: false, score: 60, isUsable: true, CarrierMerged: false, SubscriptionId: -1, IsPrimary: 1, Trusted: 
true, Restricted: false, Ephemeral: false, OEM paid: false, OEM private: false, OSU AP: false, FQDN: <none>, Provider friendly name: <none>, Requesting 
package name: <none>"TAUFIKKOPIBATOH@WIFI.ID"openMLO Information: , Is TID-To-Link negotiation supported by the AP: false, AP MLD Address: <none>, AP MLO 
Link Id: <none>, AP MLO Affiliated links: <none>, Vendor Data: <none>
  07-02 17:32:04.874 D/WifiScoreCard( 1698): txRate: 18 txSpeed: 48
  07-02 17:32:04.875 D/WifiScoreCard( 1698): network update SIGNAL_POLL "TAUFIKKOPIBATOH@WIFI.ID" ID: 42486102 RSSI -60 txSpeed 48
  07-02 17:32:04.875 D/WifiClientModeImpl[24001351:wlan0]( 1698):  ClientModeImpl$L2ConnectedState screen=on 131 0 "TAUFIKKOPIBATOH@WIFI.ID" 
ac:4a:56:28:fe:ee rssi=-60 f=5765 sc=60 link=48 tx=17.2, 0.0, 0.0 rx=14.2 bcn=0 [on:0 tx:0 rx:0 period:3030] from screen [on:0 period:18603388] score=60
  07-02 17:32:04.895 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.040006,0.000151, totalTime 0.040158 > logTimeout 
0.022000 TIMEOUT!!
> 07-02 17:32:04.929 I/BufferQueueProducer( 1012): 
[SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity](BLAST)#19423](this:0xb40000731f5d6a18,id:-1,api:0,p:-1,c:1012) queueBuffer: fps=58.15 
dur=1014.58 max=33.95 min=15.84
  07-02 17:32:04.938 I/BufferQueueProducer( 1012): [VDS-studio.screen.sharing:0 SINK](this:0xb40000725f674618,id:-1,api:1,p:1012,c:1012) queueBuffer: 
fps=58.29 dur=1012.12 max=35.07 min=12.84
  07-02 17:32:04.939 I/hwcomposer(  935): [HWCDisplay] [Display_0 (type:1)] fps:58.309898,dur:1011.84,max:34.86,min:12.18  
  07-02 17:32:04.959 I/libPerfCtl(  970): xgfGetFPS pid:2380 fps:-1
  07-02 17:32:04.959 I/AppThermalMode(  970): [perfNotifyThermalState] hdl:0
  07-02 17:32:04.959 I/AppThermalMode(  970): [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: -1,fg->pid:11190
  07-02 17:32:04.959 I/AppThermalMode(  970): [perfNotifyThermalState] appThermalIdx -1:
  07-02 17:32:04.959 I/libPerfCtl(  970): xgfGetFPS pid:11190 fps:59
  07-02 17:32:04.959 I/AppThermalMode(  970): [perfNotifyThermalState] hdl:0
  07-02 17:32:04.960 I/AppThermalMode(  970): [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: -1,fg->pid:11190
  07-02 17:32:04.960 I/AppThermalMode(  970): [perfNotifyThermalState] appThermalIdx -1:
  07-02 17:32:04.960 I/libPowerHal(  970): [updateFPS] pid(11190) : -1 => 60
  07-02 17:32:04.960 I/libPowerHal(  970): [perfNotifyAppState] pack:com.erbete.customer, act:com.erbete.customer.MainActivity, state:5, pid:11190, 
uid:10509, fps:60
  07-02 17:32:04.960 I/UxUtility(  970): notifyForegroundApp pack:com.erbete.customer, uid:10509
  07-02 17:32:04.961 I/TouchUtility(  970): notifyAppState error = NULL
  07-02 17:32:04.971 I/Hiber/importantScene( 1698): isTrafficActive uid:10185 speed :0
  07-02 17:32:04.971 I/Hiber/importantScene( 1698): app_lock: packageName=com.transsion.phonemaster
  07-02 17:32:04.972 I/Hiber/appStateMachine( 1698): uid:10185, pkg=com.transsion.phonemaster  can't transition from R to F ,importantcase is : app-lock
  07-02 17:32:05.242 V/Hiber/hiber( 1698): unfreeze from hiber: (4,-1,-1,-1,10314), rpcName: PKG, code: -1, reason:packet
  07-02 17:32:05.249 D/Hiber/JobExtImpl( 1698): un_job=JobStatus{24167ee androidx.work.systemjobscheduler:u0a314/6011 
@androidx.work.systemjobscheduler@com.twitter.android/androidx.work.impl.background.systemjob.SystemJobService u=0 s=10314 TIME=+20h12m58s87ms:none NET 
satisfied:0x13600000 unsatisfied:0x80000000}for uid=10314
  07-02 17:32:05.249 D/Hiber/JobExtImpl( 1698): unProxyJobs leave, uid=10314 discard=false
  07-02 17:32:05.249 D/Hiber/alarmManagerServiceExtImpl( 1698): unproxyAlarms leave, uid=10314, packageName=null
  07-02 17:32:05.249 I/Hiber/proxyManager( 1698): up_sensor: uid=10314, pkgName=com.twitter.android
  07-02 17:32:05.406 D/ULogGuard( 1342): Monitoring: 15 threads, 0 requests, 0 time-bombs; 3 guards. ResetFlags = 0x7
  07-02 17:32:05.414 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.039927,0.000042, totalTime 0.039970 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:32:05.654 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.039752,0.000120, totalTime 0.039873 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:32:05.777 W/ProxyAndroidLoggerBackend( 5782): Too many Flogger logs received before configuration. Dropping old logs.
> 07-02 17:32:05.945 I/BufferQueueProducer( 1012): 
[SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity](BLAST)#19423](this:0xb40000731f5d6a18,id:-1,api:0,p:-1,c:1012) queueBuffer: fps=59.05 
dur=1016.01 max=33.69 min=16.11
  07-02 17:32:05.955 I/BufferQueueProducer( 1012): [VDS-studio.screen.sharing:0 SINK](this:0xb40000725f674618,id:-1,api:1,p:1012,c:1012) queueBuffer: 
fps=59.01 dur=1016.78 max=35.86 min=12.34
  07-02 17:32:05.956 I/hwcomposer(  935): [HWCDisplay] [Display_0 (type:1)] fps:58.961124,dur:1017.62,max:36.01,min:12.37  
  07-02 17:32:05.959 I/libPerfCtl(  970): xgfGetFPS pid:11190 fps:58
  07-02 17:32:05.959 I/AppThermalMode(  970): [perfNotifyThermalState] hdl:0
  07-02 17:32:05.959 I/AppThermalMode(  970): [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: 60,fg->pid:11190
  07-02 17:32:05.959 I/AppThermalMode(  970): [perfNotifyThermalState] appThermalIdx -1:
  07-02 17:32:05.960 I/Hiber/importantScene( 1698): widget: packageName=com.facebook.katana
  07-02 17:32:05.960 I/Hiber/appStateMachine( 1698): uid:10254, pkg=com.facebook.katana  can't transition from R to F ,importantcase is : widget
  07-02 17:32:06.008 I/TranWifiSmartAssistantController( 1698): start current network monitor 
  07-02 17:32:06.008 I/WifiService( 1698): getConnectionInfo uid=1000
  07-02 17:32:06.009 V/WifiService( 1698): Clearing REDACT_FOR_LOCAL_MAC_ADDRESS for android(uid=1000)
  07-02 17:32:06.009 V/WifiService( 1698): Clearing REDACT_FOR_NETWORK_SETTINGS for android(uid=1000)
  07-02 17:32:06.009 V/WifiService( 1698): Clearing REDACT_FOR_ACCESS_FINE_LOCATION for android(uid=1000)
  07-02 17:32:06.009 I/TranWifiSmartAssistantController( 1698): userIgnored :false isScoredCurrentNetwork :false
  07-02 17:32:06.009 I/TranWifiSmartAssistantController( 1698): mCurrentNetwork :133 SSID :"TAUFIKKOPIBATOH@WIFI.ID"
  07-02 17:32:06.010 I/WifiNetworkQuality( 1698): current rssi is sufficient
  07-02 17:32:06.011 I/TranWifiSmartAssistantController( 1698): mNoCandidateCount : -1
  07-02 17:32:06.011 I/TranWifiSmartAssistantController( 1698): ====>>rssi :-60
  07-02 17:32:06.959 I/libPerfCtl(  970): xgfGetFPS pid:2380 fps:-1
  07-02 17:32:06.959 I/AppThermalMode(  970): [perfNotifyThermalState] hdl:0
  07-02 17:32:06.959 I/AppThermalMode(  970): [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: 60,fg->pid:11190
  07-02 17:32:06.959 I/AppThermalMode(  970): [perfNotifyThermalState] appThermalIdx -1:
  07-02 17:32:06.960 I/libPerfCtl(  970): xgfGetFPS pid:11190 fps:60
  07-02 17:32:06.960 I/AppThermalMode(  970): [perfNotifyThermalState] hdl:0
  07-02 17:32:06.960 I/AppThermalMode(  970): [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: 60,fg->pid:11190
  07-02 17:32:06.960 I/AppThermalMode(  970): [perfNotifyThermalState] appThermalIdx -1:
> 07-02 17:32:06.961 I/BufferQueueProducer( 1012): 
[SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity](BLAST)#19423](this:0xb40000731f5d6a18,id:-1,api:0,p:-1,c:1012) queueBuffer: fps=59.08 
dur=1015.55 max=33.75 min=16.14
  07-02 17:32:06.970 I/BufferQueueProducer( 1012): [VDS-studio.screen.sharing:0 SINK](this:0xb40000725f674618,id:-1,api:1,p:1012,c:1012) queueBuffer: 
fps=59.11 dur=1015.10 max=38.56 min=11.89
  07-02 17:32:06.972 I/hwcomposer(  935): [HWCDisplay] [Display_0 (type:1)] fps:59.080956,dur:1015.56,max:39.42,min:11.27  
  07-02 17:32:07.005 D/TranSignalStrengthComponentImpl( 2620): [LTE] dbm: -86
  07-02 17:32:07.006 D/TranSignalStrengthComponentImpl( 2620): [LTE] dbm: -86
  07-02 17:32:07.011 I/TranTele/TranPhoneInterfaceManager( 2620): TTC - onSignalStrengthsChanged
  07-02 17:32:07.012 D/TranSignalStrengthComponentImpl(30413): [LTE] dbm: -86
  07-02 17:32:07.014 D/TranSignalStrengthComponentImpl(30413): [LTE] dbm: -86
  07-02 17:32:07.014 D/TranSignalStrengthComponentImpl(16756): [LTE] dbm: -86
  07-02 17:32:07.015 D/TranSignalStrengthComponentImpl( 1698): [LTE] dbm: -86
  07-02 17:32:07.015 D/TranPhoneSwitcher( 2620): getNetworkType: 4G
  07-02 17:32:07.015 I/TranPhoneSwitcher( 2620): mDefaultsign:4subid :2
  07-02 17:32:07.017 D/CallbackProxy( 6515): [onSignalStrengthsChanged]
  07-02 17:32:07.017 D/TranSignalStrengthComponentImpl(30413): [LTE] dbm: -86
  07-02 17:32:07.766 I/TranActivityTaskManager( 4272): tran getFocusedWinPkgName
  07-02 17:32:07.768 I/TranActivityTaskManager( 4272): tran getTopActivityComponent
  07-02 17:32:07.778 I/TranActivityTaskManager( 4272): tran isIMEShowing
  07-02 17:32:07.782 D/mol_MolService.run(L:134)( 4272): ----MolService focused pkg:com.erbete.customer, cmp:com.erbete.customer.MainActivity, 
curType:SCENE_UNKOWN, molAlive:true, asAlive:false, asCrashed:false, imeVis:false, this:com.transsion.mol.service.MolService@9ecbda5
  07-02 17:32:07.835 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.040219,0.000144, totalTime 0.040364 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:32:07.959 I/libPerfCtl(  970): xgfGetFPS pid:2380 fps:-1
  07-02 17:32:07.960 I/AppThermalMode(  970): [perfNotifyThermalState] hdl:0
  07-02 17:32:07.960 I/AppThermalMode(  970): [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: 60,fg->pid:11190
  07-02 17:32:07.960 I/AppThermalMode(  970): [perfNotifyThermalState] appThermalIdx -1:
  07-02 17:32:07.960 I/libPerfCtl(  970): xgfGetFPS pid:11190 fps:57
  07-02 17:32:07.960 I/AppThermalMode(  970): [perfNotifyThermalState] hdl:0
  07-02 17:32:07.960 I/AppThermalMode(  970): [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: 60,fg->pid:11190
  07-02 17:32:07.960 I/AppThermalMode(  970): [perfNotifyThermalState] appThermalIdx -1:
> 07-02 17:32:07.976 I/BufferQueueProducer( 1012): 
[SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity](BLAST)#19423](this:0xb40000731f5d6a18,id:-1,api:0,p:-1,c:1012) queueBuffer: fps=59.08 
dur=1015.53 max=32.84 min=15.84
  07-02 17:32:07.984 I/BufferQueueProducer( 1012): [VDS-studio.screen.sharing:0 SINK](this:0xb40000725f674618,id:-1,api:1,p:1012,c:1012) queueBuffer: 
fps=59.13 dur=1014.64 max=30.11 min=10.52
  07-02 17:32:07.986 I/hwcomposer(  935): [HWCDisplay] [Display_0 (type:1)] fps:59.191315,dur:1013.66,max:30.24,min:10.38  
  07-02 17:32:07.994 D/BufferPoolAccessor2.0(11425): bufferpool2 0xb4000072a18c2a98 : 57(297577 size) total buffers - 1(222 size) used buffers - 1368/3034 
(recycle/alloc) - 1732/3033 (fetch/transfer)
  07-02 17:32:08.294 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.039591,0.000114, totalTime 0.039705 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:32:08.407 D/ULogGuard( 1342): Monitoring: 15 threads, 0 requests, 0 time-bombs; 3 guards. ResetFlags = 0x7
  07-02 17:32:08.513 D/TranSignalStrengthComponentImpl( 2620): [LTE] dbm: -83
  07-02 17:32:08.513 D/TranSignalStrengthComponentImpl( 2620): [LTE] dbm: -83
  07-02 17:32:08.517 D/TranSignalStrengthComponentImpl( 1698): [LTE] dbm: -83
  07-02 17:32:08.519 I/TranTele/TranPhoneInterfaceManager( 2620): TTC - onSignalStrengthsChanged
  07-02 17:32:08.520 D/CallbackProxy( 6515): [onSignalStrengthsChanged]
  07-02 17:32:08.521 D/TranPhoneSwitcher( 2620): getNetworkType: 4G
  07-02 17:32:08.521 I/TranPhoneSwitcher( 2620): mOthersign:4subid :1
  07-02 17:32:08.543 D/TriggerService( 4219): trigger service is running
  07-02 17:32:08.675 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.039875,0.000306, totalTime 0.040182 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:32:08.681 W/native  ( 5782): W0000 00:00:1782988328.681166    5913 lag_detector.cc:58] Pipeline lagging by 979.643481ms. Continue processing 
samples.
  07-02 17:32:08.748 I/mtkpower_client( 1080): perf_lock_acq, hdl:0, dur:30000, num:2, tid:1080
  07-02 17:32:08.749 I/mtkpower_client( 1080): ret_hdl:55484
  07-02 17:32:08.960 I/libPerfCtl(  970): xgfGetFPS pid:2380 fps:-1
  07-02 17:32:09.249 D/AppFlingMode(  970): [CheckAppFlingHint] 25 com.erbete.customer 60
  07-02 17:32:09.253 D/TextSelection(11190): onUseCache cache=false
  07-02 17:32:09.253 D/TouchSliderConsumer( 4503): onInputEvent : ACTION_DOWN
  07-02 17:32:09.253 D/TouchSliderConsumer( 4503): consumeTouchEvent : 379.25 1143.625 RectF(1035.0, 294.0, 1083.0, 660.0) 
  07-02 17:32:09.253 E/libPowerHal(  970): [getCPUFreq] error cid:2, nClusterNum:2
  07-02 17:32:09.255 D/TouchMonitorProxy( 4272): handleInputEvent MotionEvent:MotionEvent { action=ACTION_DOWN, actionButton=0, id[0]=0, x[0]=379.25, 
y[0]=1143.625, toolType[0]=TOOL_TYPE_FINGER, buttonState=0, classification=NONE, metaState=0, flags=0x0, edgeFlags=0x0, pointerCount=1, historySize=0, 
eventTime=161910378, downTime=161910378, deviceId=6, source=0x1002, displayId=0, eventId=766957033 }
  07-02 17:32:09.259 D/ScreenCapControl( 4272): onFingerDown: 1143, 108, 120
  07-02 17:32:09.260 I/libPowerHal(  970): [setClusterFreq] mtkpower@1.0-se: sysfs_freq set cpu freq: 2000000 -1 2200000 -1 
> 07-02 17:32:09.293 I/DisplayDeviceRepository( 1698): Display device changed: DisplayDeviceInfo{"Layar Bawaan": uniqueId="local:0", 1080 x 2436, modeId 
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
  07-02 17:32:09.293 I/hwcomposer(  935): [HWCDisplay] [Display_0 (type:1)] fps:35.188255,dur:1307.25,max:554.75,min:12.74  
  07-02 17:32:09.294 I/Griffin/DeviceState( 1698): virtualDisplayPackageName :{com.android.shell=2000}
  07-02 17:32:09.343 I/libPowerHal(  970): [PD] MTKPOWER_HINT_APP_TOUCH update cmd:3408b00 param:0
  07-02 17:32:09.344 I/ScreenTouchCollector( 3928): resetTouchPara:reason= InputEvent ACTION_UP or ACTION_CANCEL
  07-02 17:32:09.344 D/TouchMonitorProxy( 4272): handleInputEvent MotionEvent:MotionEvent { action=ACTION_UP, actionButton=0, id[0]=0, x[0]=379.25, 
y[0]=1143.625, toolType[0]=TOOL_TYPE_FINGER, buttonState=0, classification=NONE, metaState=0, flags=0x0, edgeFlags=0x0, pointerCount=1, historySize=0, 
eventTime=161910476, downTime=161910378, deviceId=6, source=0x1002, displayId=0, eventId=317619084 }
  07-02 17:32:09.397 I/mtkpower_client( 1080): perf_lock_rel, hdl:55484, tid:1080
  07-02 17:32:09.397 I/libPowerHal(  970): [setClusterFreq] mtkpower@1.0-se: sysfs_freq set cpu freq: -1 -1 -1 -1 
  07-02 17:32:09.399 I/libPowerHal(  970): [PD] fpsgo update cmd:1408300 param:0
  07-02 17:32:09.402 D/ccci_mdinit( 1034): (1):monitor_time_update_thread round:6879 ########
> 07-02 17:32:09.408 I/BufferQueueProducer( 1012): 
[SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity](BLAST)#19423](this:0xb40000731f5d6a18,id:-1,api:0,p:-1,c:1012) queueBuffer: fps=32.12 
dur=1432.00 max=682.75 min=14.65
  07-02 17:32:09.414 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.040196,0.000126, totalTime 0.040323 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:32:09.421 I/BufferQueueProducer( 1012): [VDS-studio.screen.sharing:0 SINK](this:0xb40000725f674618,id:-1,api:1,p:1012,c:1012) queueBuffer: 
fps=32.03 dur=1436.27 max=684.09 min=13.04
  07-02 17:32:09.430 I/mtkpower_client( 1080): perf_lock_acq, hdl:0, dur:30000, num:2, tid:1080
  07-02 17:32:09.432 I/mtkpower_client( 1080): ret_hdl:55487
  07-02 17:32:09.779 D/TLinkBrush_DATA( 1698): [NetdEvent]onTcpSocketStatsEvent
  07-02 17:32:09.779 D/TLinkBrush_DATA( 1698): [NetdEvent]onTcpSocketStatsEvent sent = 0, return
  07-02 17:32:09.780 D/TLinkBrush_DATA( 1698): [NetdEvent]onTcpSocketStatsEvent
  07-02 17:32:09.780 D/TLinkBrush_DATA( 1698): [NetdEvent]onTcpSocketStatsEvent sent = 0, return
  07-02 17:32:09.780 D/TLinkBrush_DATA( 1698): [NetdEvent]onTcpSocketStatsEvent
  07-02 17:32:09.936 D/TranWifiTputMonitor( 1698): WIFI: TX: 1 RX: 4 TOTAL = 5
  07-02 17:32:09.937 D/TranWifiTputMonitor( 1698): High Tput: false, TOTAL TPUT: 5
  07-02 17:32:09.960 I/libPerfCtl(  970): xgfGetFPS pid:2380 fps:-1
  07-02 17:32:09.960 I/AppThermalMode(  970): [perfNotifyThermalState] hdl:0
  07-02 17:32:09.960 I/AppThermalMode(  970): [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: 60,fg->pid:11190
  07-02 17:32:09.960 I/AppThermalMode(  970): [perfNotifyThermalState] appThermalIdx -1:
  07-02 17:32:09.960 I/libPerfCtl(  970): xgfGetFPS pid:11190 fps:-1
  07-02 17:32:09.960 I/AppThermalMode(  970): [perfNotifyThermalState] hdl:0
  07-02 17:32:09.960 I/AppThermalMode(  970): [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: 60,fg->pid:11190
  07-02 17:32:10.261 I/Hiber/proxyManager( 1698): p_job: 10314 pkgName=com.twitter.android which=2
  07-02 17:32:10.263 E/ApplicationHelper( 1698): Fail to get PackageManager
  07-02 17:32:10.270 D/Hiber/JobExtImpl( 1698): proxyJobs leave, uid=10314, pkg=com.twitter.android which=2
  07-02 17:32:10.270 I/Hiber/hiber( 1698): proxy alarm (uid=10314, pkgName=com.twitter.android)
  07-02 17:32:10.270 I/Hiber/proxyManager( 1698): p_alarm: uid=10314, pkgName=com.twitter.android
  07-02 17:32:10.271 D/Hiber/alarmManagerServiceExtImpl( 1698): proxyAlarms leave, uid=10314, packageName=com.twitter.android
  07-02 17:32:10.271 I/Hiber/proxyManager( 1698): p_sensor: uid=10314, pkgName=com.twitter.android
  07-02 17:32:10.299 I/hwcomposer(  935): [HWCDisplay] [Display_0 (type:1)] fps:19.881828,dur:1005.94,max:582.35,min:11.60  
> 07-02 17:32:10.423 I/BufferQueueProducer( 1012): 
[SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity](BLAST)#19423](this:0xb40000731f5d6a18,id:-1,api:0,p:-1,c:1012) queueBuffer: fps=26.60 
dur=1015.21 max=582.65 min=15.83
  07-02 17:32:10.431 I/BufferQueueProducer( 1012): [VDS-studio.screen.sharing:0 SINK](this:0xb40000725f674618,id:-1,api:1,p:1012,c:1012) queueBuffer: 
fps=26.72 dur=1010.56 max=582.64 min=12.07
  07-02 17:32:10.518 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.023590,0.000097, totalTime 0.023688 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:32:10.544 D/TriggerService( 4219): trigger service is running
  07-02 17:32:10.902 D/WifiClientModeImpl[24001351:wlan0]( 1698): updateLinkLayerStatsRssiSpeedFrequencyCapabilities rssi=-57 TxLinkspeed=54 freq=5765 
RxLinkSpeed=54
  07-02 17:32:10.905 D/WifiDataStall( 1698): tx tput in kbps: 50000
  07-02 17:32:10.906 D/WifiDataStall( 1698): rx tput in kbps: 50000
  07-02 17:32:10.907 V/WifiConfigManager( 1698): Updating scan detail cache freq=5765 BSSID=ac:4a:56:28:fe:ee RSSI=-57 for "TAUFIKKOPIBATOH@WIFI.ID"NONE
  07-02 17:32:10.908 D/WifiThroughputPredictor( 1698):  utilization (LLS) 15 isBluetoothConnected: false final utilization: 15
  07-02 17:32:10.908 D/WifiThroughputPredictor( 1698):  BW: 0 RSSI: -57 Nss: 1 Mode: 1 symDur: 4000 snrDb 23 bitPerTone: 4500 rate: 54 throughput: 50
  07-02 17:32:10.908 D/WifiThroughputPredictor( 1698):  utilization (LLS) 15 isBluetoothConnected: false final utilization: 15
  07-02 17:32:10.909 D/WifiThroughputPredictor( 1698):  BW: 0 RSSI: -57 Nss: 1 Mode: 1 symDur: 4000 snrDb 23 bitPerTone: 4500 rate: 54 throughput: 50
  07-02 17:32:10.909 D/WifiThroughputPredictor( 1698):  utilization (LLS) 15 isBluetoothConnected: false final utilization: 15
  07-02 17:32:10.910 D/WifiThroughputPredictor( 1698):  BW: 0 RSSI: -57 Nss: 1 Mode: 1 symDur: 4000 snrDb 23 bitPerTone: 4500 rate: 54 throughput: 50
  07-02 17:32:10.910 D/WifiThroughputPredictor( 1698):  utilization (LLS) 15 isBluetoothConnected: false final utilization: 15
  07-02 17:32:10.910 I/TranTele/TranPhoneInterfaceManager( 2620): [onReceive] action: android.net.wifi.RSSI_CHANGED
  07-02 17:32:10.911 D/WifiThroughputPredictor( 1698):  BW: 0 RSSI: -57 Nss: 1 Mode: 1 symDur: 4000 snrDb 23 bitPerTone: 4500 rate: 54 throughput: 50
  07-02 17:32:10.912 D/WifiScoreCard( 1698): BSSID update SIGNAL_POLL ID: 942782235 SSID: "TAUFIKKOPIBATOH@WIFI.ID", BSSID: ac:4a:56:28:fe:ee, MAC: 
02:16:3f:eb:28:01, IP: /10.226.145.77, Security type: 0, Supplicant state: COMPLETED, Wi-Fi standard: legacy, RSSI: -57, Link speed: 48Mbps, Tx Link 
speed: 48Mbps, Max Supported Tx Link speed: 54Mbps, Calculated Tx : 0Mbps, Rx Link speed: 48Mbps, Max Supported Rx Link speed: 54Mbps, Calculated Rx : 
0Mbps, Frequency: 5765MHz, Net ID: 142, Metered hint: false, score: 60, isUsable: true, CarrierMerged: false, SubscriptionId: -1, IsPrimary: 1, Trusted: 
true, Restricted: false, Ephemeral: false, OEM paid: false, OEM private: false, OSU AP: false, FQDN: <none>, Provider friendly name: <none>, Requesting 
package name: <none>"TAUFIKKOPIBATOH@WIFI.ID"openMLO Information: , Is TID-To-Link negotiation supported by the AP: false, AP MLD Address: <none>, AP MLO 
Link Id: <none>, AP MLO Affiliated links: <none>, Vendor Data: <none>
  07-02 17:32:10.913 D/WifiScoreCard( 1698): txRate: 14 txSpeed: 48
  07-02 17:32:11.229 D/AES     ( 1698): AEEIOCTL_RT_MON_Kick IOCTL,cmd= 2147774474, lParam=300. 
  07-02 17:32:11.257 I/Hiber/nativeServiceClient( 1698): check binder uid=10314
  07-02 17:32:11.295 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.039910,0.000102, totalTime 0.040013 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:32:11.300 I/hwcomposer(  935): [HWCDisplay] [Display_0 (type:1)] fps:59.946842,dur:1000.89,max:20.54,min:13.13  
  07-02 17:32:11.336 D/ZenModeController( 2380): Added callback class com.android.systemui.qs.tiles.DndTile$3
  07-02 17:32:11.350 D/ZenModeController( 2380): Removed callback class com.android.systemui.qs.tiles.DndTile$3
  07-02 17:32:11.408 D/ULogGuard( 1342): Monitoring: 15 threads, 0 requests, 0 time-bombs; 3 guards. ResetFlags = 0x7
  07-02 17:32:11.431 I/BufferQueueProducer( 1012): [VDS-studio.screen.sharing:0 SINK](this:0xb40000725f674618,id:-1,api:1,p:1012,c:1012) queueBuffer: 
fps=59.99 dur=1000.14 max=20.04 min=13.55
> 07-02 17:32:11.439 I/BufferQueueProducer( 1012): 
[SurfaceView[com.erbete.customer/com.erbete.customer.MainActivity](BLAST)#19423](this:0xb40000731f5d6a18,id:-1,api:0,p:-1,c:1012) queueBuffer: fps=60.06 
dur=1015.68 max=17.22 min=16.10
  07-02 17:32:11.547 I/adbd    ( 1129): adbd service requested 'shell,v2:export ANDROID_LOG_TAGS=''; exec logcat '-d' '-v' 'time''
  07-02 17:32:11.614 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.039960,0.000139, totalTime 0.040101 > logTimeout 
0.022000 TIMEOUT!!
  07-02 17:32:11.643 I/StatusBarNetworkRateView( 2380): wifi is default. hide second network rate view. StatusBarNetworkRateView subId=2, 
isFirstSimCard=false, mLocation=QS_NEW NetworkRateState=NetworkRateState{visible=true, activeMobileDataSubId=2, totalRate=4.309, netWorkState=1, 
isAirplane=false, netRateStateBySettingGlobal=1, networkRate='4,31', networkRateUnit='KB/S'}



TEXT_END

## Trace Counters
TEXT_START
MATCH_NULL_CHECK: 0
MATCH_WIDGET_EXCEPTION: 0
MATCH_DART_LINE: 0
TEXT_END

## Static Null Bang Audit Product/Category Related
TEXT_START
SEARCHED_FILE_COUNT: 119
MATCH_COUNT: 168

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
  lib\controllers\cart_controller.dart:642:            if (productModel.quantity != -1) {
  lib\controllers\cart_controller.dart:643:              productModel.quantity =
> lib\controllers\cart_controller.dart:644:                  (productModel.quantity! - tempProduc[i].quantity!);
  lib\controllers\cart_controller.dart:645:            }
  lib\controllers\cart_controller.dart:646:          }
  lib\controllers\cart_controller.dart:647:        } else {
  lib\controllers\cart_controller.dart:648:          if (productModel!.quantity != -1) {
  lib\controllers\cart_controller.dart:649:            productModel.quantity =
> lib\controllers\cart_controller.dart:650:                (productModel.quantity! - tempProduc[i].quantity!);
  lib\controllers\cart_controller.dart:651:          }
  lib\controllers\cart_controller.dart:652:        }
  lib\controllers\cart_controller.dart:653:
  lib\controllers\cart_controller.dart:654:        await FireStoreUtils.setProduct(productModel);
  lib\controllers\rate_product_controller.dart:68:          productModel.value = value;
  lib\controllers\rate_product_controller.dart:69:          if (ratingModel.value.id != null && ratingModel.value.id!.isNotEmpty) {
> lib\controllers\rate_product_controller.dart:70:            productReviewCount.value = value.reviewsCount! - 1;
  lib\controllers\rate_product_controller.dart:71:            productReviewSum.value = value.reviewsSum! - ratings.value;
  lib\controllers\rate_product_controller.dart:72:
  lib\controllers\rate_product_controller.dart:73:            if (value.reviewAttributes != null) {
  lib\controllers\rate_product_controller.dart:74:              value.reviewAttributes!.forEach((key, value) {
  lib\controllers\rate_product_controller.dart:75:                ReviewsAttribute reviewsAttributeModel = ReviewsAttribute.fromJson(value);
> lib\controllers\rate_product_controller.dart:76:                reviewsAttributeModel.reviewsCount = reviewsAttributeModel.reviewsCount! - 1;
  lib\controllers\rate_product_controller.dart:77:                reviewsAttributeModel.reviewsSum = reviewsAttributeModel.reviewsSum! - 
reviewAttribute[key];
  lib\controllers\rate_product_controller.dart:78:                reviewProductAttributes.addEntries([MapEntry(key, reviewsAttributeModel.toJson())]);
  lib\controllers\rate_product_controller.dart:79:              });
  lib\controllers\rate_product_controller.dart:80:            }
  lib\controllers\rate_product_controller.dart:93:          vendorModel.value = value;
  lib\controllers\rate_product_controller.dart:94:          if (ratingModel.value.id != null && ratingModel.value.id!.isNotEmpty) {
> lib\controllers\rate_product_controller.dart:95:            vendorReviewCount.value = value.reviewsCount! - 1;
  lib\controllers\rate_product_controller.dart:96:            vendorReviewSum.value = value.reviewsSum! - ratings.value;
  lib\controllers\rate_product_controller.dart:97:          } else {
  lib\controllers\rate_product_controller.dart:98:            vendorReviewCount.value = double.parse(value.reviewsCount.toString());
  lib\controllers\rate_product_controller.dart:99:            vendorReviewSum.value = double.parse(value.reviewsSum.toString());
  lib\controllers\rate_product_controller.dart:135:        reviewProductAttributes.forEach((key, value) {
  lib\controllers\rate_product_controller.dart:136:          ReviewsAttribute reviewsAttributeModel = ReviewsAttribute.fromJson(value);
> lib\controllers\rate_product_controller.dart:137:          reviewsAttributeModel.reviewsCount = reviewsAttributeModel.reviewsCount! + 1;
  lib\controllers\rate_product_controller.dart:138:          reviewsAttributeModel.reviewsSum = reviewsAttributeModel.reviewsSum! + reviewAttribute[key];
  lib\controllers\rate_product_controller.dart:139:          reviewProductAttributes.addEntries([MapEntry(key, reviewsAttributeModel.toJson())]);
  lib\controllers\rate_product_controller.dart:140:        });
  lib\controllers\rate_product_controller.dart:141:      }
  lib\controllers\restaurant_details_controller.dart:233:          allProductList
  lib\controllers\restaurant_details_controller.dart:234:              .where(
> lib\controllers\restaurant_details_controller.dart:235:                (p0) => p0.name!.toLowerCase().contains(name.toLowerCase()),
  lib\controllers\restaurant_details_controller.dart:236:              )
  lib\controllers\restaurant_details_controller.dart:237:              .toList();
  lib\controllers\restaurant_details_controller.dart:238:    }
  lib\controllers\restaurant_details_controller.dart:239:    update();
  lib\controllers\restaurant_details_controller.dart:375:
  lib\controllers\restaurant_details_controller.dart:376:    if (productModel.itemAttribute != null) {
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
  lib\controllers\restaurant_details_controller.dart:468:      cartProductModel.id =
  lib\controllers\restaurant_details_controller.dart:469:          "${productModel.id!}~${variantInfo.variantId.toString()}";
> lib\controllers\restaurant_details_controller.dart:470:      cartProductModel.name = productModel.name!;
  lib\controllers\restaurant_details_controller.dart:471:      cartProductModel.photo = service53bSafeProductImage(productModel);
> lib\controllers\restaurant_details_controller.dart:472:      cartProductModel.categoryId = productModel.categoryID!;
  lib\controllers\restaurant_details_controller.dart:473:      cartProductModel.price = price;
  lib\controllers\restaurant_details_controller.dart:474:      cartProductModel.discountPrice = discountPrice;
  lib\controllers\restaurant_details_controller.dart:475:      cartProductModel.vendorID = vendorModel.value.id;
  lib\controllers\restaurant_details_controller.dart:476:      cartProductModel.quantity = quantity;
  lib\controllers\restaurant_details_controller.dart:492:    } else {
  lib\controllers\restaurant_details_controller.dart:493:      cartProductModel.id = productModel.id!;
> lib\controllers\restaurant_details_controller.dart:494:      cartProductModel.name = productModel.name!;
  lib\controllers\restaurant_details_controller.dart:495:      cartProductModel.photo = service53bSafeProductImage(productModel);
> lib\controllers\restaurant_details_controller.dart:496:      cartProductModel.categoryId = productModel.categoryID!;
  lib\controllers\restaurant_details_controller.dart:497:      cartProductModel.price = price;
  lib\controllers\restaurant_details_controller.dart:498:      cartProductModel.discountPrice = discountPrice;
  lib\controllers\restaurant_details_controller.dart:499:      cartProductModel.vendorID = vendorModel.value.id;
  lib\controllers\restaurant_details_controller.dart:500:      cartProductModel.quantity = quantity;
  lib\screen_ui\ecommarce\all_brand_product_screen.dart:49:                            List<String> selectedIndexArray = [];
  lib\screen_ui\ecommarce\all_brand_product_screen.dart:50:                            if (productModel.itemAttribute != null) {
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
  lib\screen_ui\ecommarce\all_brand_product_screen.dart:94:                                    children: [
  lib\screen_ui\ecommarce\all_brand_product_screen.dart:95:                                      Text(
> lib\screen_ui\ecommarce\all_brand_product_screen.dart:96:                                        productModel.name!.capitalizeString(),
  lib\screen_ui\ecommarce\all_brand_product_screen.dart:97:                                        textAlign: TextAlign.start,
  lib\screen_ui\ecommarce\all_brand_product_screen.dart:98:                                        maxLines: 1,
  lib\screen_ui\ecommarce\all_brand_product_screen.dart:99:                                        style: AppThemeData.semiBoldTextStyle(fontSize: 18, 
color: isDark ? AppThemeData.greyDark600 : AppThemeData.grey600),
  lib\screen_ui\ecommarce\all_brand_product_screen.dart:100:                                      ),
  lib\screen_ui\ecommarce\all_category_product_screen.dart:49:                            List<String> selectedIndexArray = [];
  lib\screen_ui\ecommarce\all_category_product_screen.dart:50:                            if (productModel.itemAttribute != null) {
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
  lib\screen_ui\ecommarce\all_category_product_screen.dart:94:                                    children: [
  lib\screen_ui\ecommarce\all_category_product_screen.dart:95:                                      Text(
> lib\screen_ui\ecommarce\all_category_product_screen.dart:96:                                        productModel.name!.capitalizeString(),
  lib\screen_ui\ecommarce\all_category_product_screen.dart:97:                                        textAlign: TextAlign.start,
  lib\screen_ui\ecommarce\all_category_product_screen.dart:98:                                        maxLines: 1,
  lib\screen_ui\ecommarce\all_category_product_screen.dart:99:                                        style: AppThemeData.semiBoldTextStyle(fontSize: 18, 
color: isDark ? AppThemeData.greyDark600 : AppThemeData.grey600),
  lib\screen_ui\ecommarce\all_category_product_screen.dart:100:                                      ),
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:536:                                                        List<String> selectedIndexArray = [];
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:537:                                                        if (productModel.itemAttribute != null) {
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
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:584:                                                                children: [
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:585:                                                                  Text(
> lib\screen_ui\ecommarce\home_e_commerce_screen.dart:586:                                                                    
productModel.name!.capitalizeString(),
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:587:                                                                    textAlign: TextAlign.start,
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:588:                                                                    maxLines: 1,
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:589:                                                                    style: 
AppThemeData.semiBoldTextStyle(fontSize: 18, color: isDark ? AppThemeData.greyDark600 : AppThemeData.grey600),
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:590:                                                                  ),
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:1067:      onTap: () async {
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:1068:        ShowToastDialog.showLoader("Please wait...".tr);
> lib\screen_ui\ecommarce\home_e_commerce_screen.dart:1069:        VendorModel? vendorModel = await FireStoreUtils.getVendorById(model.vendorId!);
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:1070:        ShowToastDialog.closeLoader();
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:1071:        Get.to(const RestaurantDetailsScreen(), arguments: {"vendorModel": vendorModel});
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:1072:      },
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:1073:      child: Container(
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:1095:                    right: 8,
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:1096:                    child: FutureBuilder(
> lib\screen_ui\ecommarce\home_e_commerce_screen.dart:1097:                      future: FireStoreUtils.getVendorById(model.vendorId!),
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:1098:                      builder: (context, snapshot) {
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:1099:                        if (snapshot.connectionState == ConnectionState.waiting) {
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:1100:                          return const SizedBox();
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:1101:                        } else {
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:1115:                                    if (model.showRating == true) const SizedBox(width: 5),
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:1116:                                    Text(
> lib\screen_ui\ecommarce\home_e_commerce_screen.dart:1117:                                      "${model.showRating == true ? 
Constant.calculateReview(reviewCount: vendorModel.reviewsCount!.toStringAsFixed(0), reviewSum: vendorModel.reviewsSum.toString()) : ''} ${model.showReview 
== true ? '(${vendorModel.reviewsCount!.toStringAsFixed(0)})' : ''}",
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:1118:                                      style: TextStyle(fontSize: 14, color: isDark ? 
AppThemeData.primary300 : AppThemeData.primary300, fontFamily: AppThemeData.semiBold, fontWeight: FontWeight.w600),
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:1119:                                    ),
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:1120:                                  ],
  lib\screen_ui\ecommarce\home_e_commerce_screen.dart:1121:                                ),
  lib\screen_ui\multi_vendor_service\advertisement_screens\all_advertisement_screen.dart:74:      onTap: () async {
  lib\screen_ui\multi_vendor_service\advertisement_screens\all_advertisement_screen.dart:75:        ShowToastDialog.showLoader("Please wait...".tr);
> lib\screen_ui\multi_vendor_service\advertisement_screens\all_advertisement_screen.dart:76:        VendorModel? vendorModel = await 
FireStoreUtils.getVendorById(model.vendorId!);
  lib\screen_ui\multi_vendor_service\advertisement_screens\all_advertisement_screen.dart:77:        ShowToastDialog.closeLoader();
  lib\screen_ui\multi_vendor_service\advertisement_screens\all_advertisement_screen.dart:78:        Get.to(const RestaurantDetailsScreen(), arguments: 
{"vendorModel": vendorModel});
  lib\screen_ui\multi_vendor_service\advertisement_screens\all_advertisement_screen.dart:79:      },
  lib\screen_ui\multi_vendor_service\advertisement_screens\all_advertisement_screen.dart:80:      child: Container(
  lib\screen_ui\multi_vendor_service\advertisement_screens\all_advertisement_screen.dart:102:                    right: 8,
  lib\screen_ui\multi_vendor_service\advertisement_screens\all_advertisement_screen.dart:103:                    child: FutureBuilder(
> lib\screen_ui\multi_vendor_service\advertisement_screens\all_advertisement_screen.dart:104:                      future: 
FireStoreUtils.getVendorById(model.vendorId!),
  lib\screen_ui\multi_vendor_service\advertisement_screens\all_advertisement_screen.dart:105:                      builder: (context, snapshot) {
  lib\screen_ui\multi_vendor_service\advertisement_screens\all_advertisement_screen.dart:106:                        if (snapshot.connectionState == 
ConnectionState.waiting) {
  lib\screen_ui\multi_vendor_service\advertisement_screens\all_advertisement_screen.dart:107:                          return const SizedBox();
  lib\screen_ui\multi_vendor_service\advertisement_screens\all_advertisement_screen.dart:108:                        } else {
  lib\screen_ui\multi_vendor_service\advertisement_screens\all_advertisement_screen.dart:122:                                    if (model.showRating == 
true) const SizedBox(width: 5),
  lib\screen_ui\multi_vendor_service\advertisement_screens\all_advertisement_screen.dart:123:                                    Text(
> lib\screen_ui\multi_vendor_service\advertisement_screens\all_advertisement_screen.dart:124:                                      "${model.showRating == 
true ? Constant.calculateReview(reviewCount: vendorModel.reviewsCount!.toStringAsFixed(0), reviewSum: vendorModel.reviewsSum.toString()) : 
''}${model.showRating == true && model.showReview == true ? ' ' : ''}${model.showReview == true ? '(${vendorModel.reviewsCount!.toStringAsFixed(0)})' : 
''}",
  lib\screen_ui\multi_vendor_service\advertisement_screens\all_advertisement_screen.dart:125:                                      style: TextStyle(color: 
isDark ? AppThemeData.primary300 : AppThemeData.primary300, fontFamily: AppThemeData.semiBold, fontWeight: FontWeight.w600),
  lib\screen_ui\multi_vendor_service\advertisement_screens\all_advertisement_screen.dart:126:                                    ),
  lib\screen_ui\multi_vendor_service\advertisement_screens\all_advertisement_screen.dart:127:                                  ],
  lib\screen_ui\multi_vendor_service\advertisement_screens\all_advertisement_screen.dart:128:                                ),
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:219:                                                      InkWell(
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:220:                                                        onTap: () {
> lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:221:                                                          
controller.addToCart(cartProductModel: cartProductModel, isIncrement: false, quantity: cartProductModel.quantity! - 1);
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:222:                                                        },
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:223:                                                        child: Icon(Icons.remove, 
color: isDark ? AppThemeData.grey100 : AppThemeData.grey800),
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:224:                                                      ),
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:225:                                                      Padding(
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
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:251:                                                                      
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
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:265:                                                              if 
((productModel!.quantity ?? 0) > (cartProductModel.quantity ?? 0) || productModel!.quantity == -1) {
> lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:266:                                                                
controller.addToCart(cartProductModel: cartProductModel, isIncrement: true, quantity: cartProductModel.quantity! + 1);
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:267:                                                              } else {
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:268:                                                                
ShowToastDialog.showToast("Out of stock".tr);
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:269:                                                              }
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:270:                                                            }
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:271:                                                          } else {
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:272:                                                            if 
((productModel!.quantity ?? 0) > (cartProductModel.quantity ?? 0) || productModel!.quantity == -1) {
> lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:273:                                                              
controller.addToCart(cartProductModel: cartProductModel, isIncrement: true, quantity: cartProductModel.quantity! + 1);
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:274:                                                            } else {
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:275:                                                              
ShowToastDialog.showToast("Out of stock".tr);
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:276:                                                            }
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:277:                                                          }
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:285:                                            ],
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:286:                                          ),
> lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:287:                                          cartProductModel.variantInfo == null || 
cartProductModel.variantInfo!.variantOptions == null || cartProductModel.variantInfo!.variantOptions!.isEmpty
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:288:                                              ? Container()
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:289:                                              : Padding(
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:290:                                                padding: const 
EdgeInsets.symmetric(horizontal: 5, vertical: 10),
  lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:291:                                                child: Column(
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
  lib\screen_ui\multi_vendor_service\chat_screens\chat_screen.dart:192:                    const SizedBox(height: 5),
  lib\screen_ui\multi_vendor_service\chat_screens\chat_screen.dart:193:                    Text(
> lib\screen_ui\multi_vendor_service\chat_screens\chat_screen.dart:194:                      DateFormat('MMM d, yyyy hh:mm 
aa').format(DateTime.fromMillisecondsSinceEpoch(data.createdAt!.millisecondsSinceEpoch)),
  lib\screen_ui\multi_vendor_service\chat_screens\chat_screen.dart:195:                      style: const TextStyle(color: Colors.grey, fontSize: 12),
  lib\screen_ui\multi_vendor_service\chat_screens\chat_screen.dart:196:                    ),
  lib\screen_ui\multi_vendor_service\chat_screens\chat_screen.dart:197:                  ],
  lib\screen_ui\multi_vendor_service\chat_screens\chat_screen.dart:198:                ),
  lib\screen_ui\multi_vendor_service\chat_screens\chat_screen.dart:241:                    const SizedBox(height: 5),
  lib\screen_ui\multi_vendor_service\chat_screens\chat_screen.dart:242:                    Text(
> lib\screen_ui\multi_vendor_service\chat_screens\chat_screen.dart:243:                      DateFormat('MMM d, yyyy hh:mm 
aa').format(DateTime.fromMillisecondsSinceEpoch(data.createdAt!.millisecondsSinceEpoch)),
  lib\screen_ui\multi_vendor_service\chat_screens\chat_screen.dart:244:                      style: const TextStyle(color: Colors.grey, fontSize: 12),
  lib\screen_ui\multi_vendor_service\chat_screens\chat_screen.dart:245:                    ),
  lib\screen_ui\multi_vendor_service\chat_screens\chat_screen.dart:246:                  ],
  lib\screen_ui\multi_vendor_service\chat_screens\chat_screen.dart:247:                ),
  lib\screen_ui\multi_vendor_service\chat_screens\driver_inbox_screen.dart:102:                                      ),
  lib\screen_ui\multi_vendor_service\chat_screens\driver_inbox_screen.dart:103:                                      Text(
> lib\screen_ui\multi_vendor_service\chat_screens\driver_inbox_screen.dart:104:                                        
Constant.timestampToDate(inboxModel.createdAt!),
  lib\screen_ui\multi_vendor_service\chat_screens\driver_inbox_screen.dart:105:                                        textAlign: TextAlign.start,
  lib\screen_ui\multi_vendor_service\chat_screens\driver_inbox_screen.dart:106:                                        style: TextStyle(fontFamily: 
AppThemeData.regular, fontSize: 16, color: isDark ? AppThemeData.grey400 : AppThemeData.grey500),
  lib\screen_ui\multi_vendor_service\chat_screens\driver_inbox_screen.dart:107:                                      ),
  lib\screen_ui\multi_vendor_service\chat_screens\driver_inbox_screen.dart:108:                                    ],
  lib\screen_ui\multi_vendor_service\chat_screens\restaurant_inbox_screen.dart:100:                                      ),
  lib\screen_ui\multi_vendor_service\chat_screens\restaurant_inbox_screen.dart:101:                                      Text(
> lib\screen_ui\multi_vendor_service\chat_screens\restaurant_inbox_screen.dart:102:                                        
Constant.timestampToDate(inboxModel.createdAt!),
  lib\screen_ui\multi_vendor_service\chat_screens\restaurant_inbox_screen.dart:103:                                        textAlign: TextAlign.start,
  lib\screen_ui\multi_vendor_service\chat_screens\restaurant_inbox_screen.dart:104:                                        style: TextStyle(fontFamily: 
AppThemeData.regular, fontSize: 16, color: isDark ? AppThemeData.grey400 : AppThemeData.grey500),
  lib\screen_ui\multi_vendor_service\chat_screens\restaurant_inbox_screen.dart:105:                                      ),
  lib\screen_ui\multi_vendor_service\chat_screens\restaurant_inbox_screen.dart:106:                                    ],
  lib\screen_ui\multi_vendor_service\dine_in_booking\dine_in_booking_screen.dart:197:                          const SizedBox(height: 5),
  lib\screen_ui\multi_vendor_service\dine_in_booking\dine_in_booking_screen.dart:198:                          Text(
> lib\screen_ui\multi_vendor_service\dine_in_booking\dine_in_booking_screen.dart:199:                            
Constant.timestampToDateTime(orderModel.createdAt!),
  lib\screen_ui\multi_vendor_service\dine_in_booking\dine_in_booking_screen.dart:200:                            style: TextStyle(color: isDark ? 
AppThemeData.grey300 : AppThemeData.grey600, fontFamily: AppThemeData.medium, fontWeight: FontWeight.w500),
  lib\screen_ui\multi_vendor_service\dine_in_booking\dine_in_booking_screen.dart:201:                          ),
  lib\screen_ui\multi_vendor_service\dine_in_booking\dine_in_booking_screen.dart:202:                        ],
  lib\screen_ui\multi_vendor_service\dine_in_booking\dine_in_booking_screen.dart:203:                      ),
  lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_details_screen.dart:242:                                                  Text(
  lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_details_screen.dart:243:                                                    
Constant.calculateReview(
> lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_details_screen.dart:244:                                                      reviewCount: 
controller.vendorModel.value.reviewsCount!.toStringAsFixed(0),
  lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_details_screen.dart:245:                                                      reviewSum: 
controller.vendorModel.value.reviewsSum.toString(),
  lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_details_screen.dart:246:                                                    ),
  lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_details_screen.dart:247:                                                    style: 
TextStyle(color: isDark ? AppThemeData.primary300 : AppThemeData.primary300, fontFamily: AppThemeData.semiBold, fontWeight: FontWeight.w600),
  lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_details_screen.dart:248:                                                  ),
  lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_restaurant_list_screen.dart:223:                                                    const 
SizedBox(width: 5),
  lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_restaurant_list_screen.dart:224:                                                    Text(
> lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_restaurant_list_screen.dart:225:                                                      
"${Constant.calculateReview(reviewCount: vendorModel.reviewsCount!.toStringAsFixed(0), reviewSum: vendorModel.reviewsSum.toString())} 
(${vendorModel.reviewsCount!.toStringAsFixed(0)})",
  lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_restaurant_list_screen.dart:226:                                                      style: 
TextStyle(
  lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_restaurant_list_screen.dart:227:                                                        color:
  lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_restaurant_list_screen.dart:228:                                                            
isDark
  lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_restaurant_list_screen.dart:229:                                                              
  ? AppThemeData
  lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:356:                                    const SizedBox(width: 5),
  lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:357:                                    Text(
> lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:358:                                      
"${Constant.calculateReview(reviewCount: vendorModel.reviewsCount!.toStringAsFixed(0), reviewSum: vendorModel.reviewsSum.toString())} 
(${vendorModel.reviewsCount!.toStringAsFixed(0)})",
  lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:359:                                      style: TextStyle(color: isDark ? 
AppThemeData.primary300 : AppThemeData.primary300, fontFamily: AppThemeData.semiBold, fontWeight: FontWeight.w600),
  lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:360:                                    ),
  lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:361:                                  ],
  lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:362:                                ),
  lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:503:                                    const SizedBox(width: 5),
  lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:504:                                    Text(
> lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:505:                                      
"${Constant.calculateReview(reviewCount: vendorModel.reviewsCount.toString(), reviewSum: vendorModel.reviewsSum.toString())} 
(${vendorModel.reviewsCount!.toStringAsFixed(0)})",
  lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:506:                                      style: TextStyle(color: isDark ? 
AppThemeData.primary300 : AppThemeData.primary300, fontFamily: AppThemeData.semiBold, fontWeight: FontWeight.w600),
  lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:507:                                    ),
  lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:508:                                  ],
  lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:509:                                ),
  lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:647:                            const SizedBox(width: 10),
  lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:648:                            Text(
> lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:649:                              "${Constant.calculateReview(reviewCount: 
vendorModel.reviewsCount.toString(), reviewSum: vendorModel.reviewsSum.toString())} (${vendorModel.reviewsCount!.toStringAsFixed(0)})",
  lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:650:                              textAlign: TextAlign.start,
  lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:651:                              maxLines: 1,
  lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:652:                              style: TextStyle(
  lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:653:                                overflow: TextOverflow.ellipsis,
  lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:292:                                                                          
          const SizedBox(width: 5),
  lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:293:                                                                          
          Text(
> lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:294:                                                                          
            "${Constant.calculateReview(reviewCount: vendorModel.reviewsCount!.toStringAsFixed(0), reviewSum: vendorModel.reviewsSum.toString())} 
(${vendorModel.reviewsCount!.toStringAsFixed(0)})",
  lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:295:                                                                          
            style: TextStyle(
  lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:296:                                                                          
              color: isDark ? AppThemeData.primary300 : AppThemeData.primary300,
  lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:297:                                                                          
              fontFamily: AppThemeData.semiBold,
  lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:298:                                                                          
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
  lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:611:    VendorModel? vendorModel = await 
FireStoreUtils.getVendorById(productModel.vendorID.toString());
  lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:612:    if (productModel.itemAttribute != null) {
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
  lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:627:      price = Constant.productCommissionPrice(vendorModel!, 
productModel.price.toString());
  lib\screen_ui\multi_vendor_service\home_screen\category_restaurant_screen.dart:110:                                                    const 
SizedBox(width: 5),
  lib\screen_ui\multi_vendor_service\home_screen\category_restaurant_screen.dart:111:                                                    Text(
> lib\screen_ui\multi_vendor_service\home_screen\category_restaurant_screen.dart:112:                                                      
"${Constant.calculateReview(reviewCount: vendorModel.reviewsCount!.toStringAsFixed(0), reviewSum: vendorModel.reviewsSum.toString())} 
(${vendorModel.reviewsCount!.toStringAsFixed(0)})",
  lib\screen_ui\multi_vendor_service\home_screen\category_restaurant_screen.dart:113:                                                      style: 
TextStyle(
  lib\screen_ui\multi_vendor_service\home_screen\category_restaurant_screen.dart:114:                                                        fontSize: 14,
  lib\screen_ui\multi_vendor_service\home_screen\category_restaurant_screen.dart:115:                                                        color: isDark 
? AppThemeData.primary300 : AppThemeData.primary300,
  lib\screen_ui\multi_vendor_service\home_screen\category_restaurant_screen.dart:116:                                                        fontFamily: 
AppThemeData.semiBold,
  lib\screen_ui\multi_vendor_service\home_screen\discount_restaurant_list_screen.dart:115:                                                  const 
SizedBox(width: 5),
  lib\screen_ui\multi_vendor_service\home_screen\discount_restaurant_list_screen.dart:116:                                                  Text(
> lib\screen_ui\multi_vendor_service\home_screen\discount_restaurant_list_screen.dart:117:                                                    
"${Constant.calculateReview(reviewCount: vendorModel.reviewsCount!.toStringAsFixed(0), reviewSum: vendorModel.reviewsSum.toString())} 
(${vendorModel.reviewsCount!.toStringAsFixed(0)})",
  lib\screen_ui\multi_vendor_service\home_screen\discount_restaurant_list_screen.dart:118:                                                    style: 
TextStyle(color: isDark ? AppThemeData.primary300 : AppThemeData.primary300, fontFamily: AppThemeData.semiBold, fontWeight: FontWeight.w600),
  lib\screen_ui\multi_vendor_service\home_screen\discount_restaurant_list_screen.dart:119:                                                  ),
  lib\screen_ui\multi_vendor_service\home_screen\discount_restaurant_list_screen.dart:120:                                                ],
  lib\screen_ui\multi_vendor_service\home_screen\discount_restaurant_list_screen.dart:121:                                              ),
  lib\screen_ui\multi_vendor_service\home_screen\discount_restaurant_list_screen.dart:227:  //                         ),
  lib\screen_ui\multi_vendor_service\home_screen\discount_restaurant_list_screen.dart:228:  //                         Text(
> lib\screen_ui\multi_vendor_service\home_screen\discount_restaurant_list_screen.dart:229:  //                           
"${Constant.calculateReview(reviewCount: vendorModel.reviewsCount!.toStringAsFixed(0), reviewSum: vendorModel.reviewsSum.toString())} 
(${vendorModel.reviewsCount!.toStringAsFixed(0)})",
  lib\screen_ui\multi_vendor_service\home_screen\discount_restaurant_list_screen.dart:230:  //                           style: TextStyle(
  lib\screen_ui\multi_vendor_service\home_screen\discount_restaurant_list_screen.dart:231:  //                             color: isDark ? 
AppThemeData.primary300 : AppThemeData.primary300,
  lib\screen_ui\multi_vendor_service\home_screen\discount_restaurant_list_screen.dart:232:  //                             fontFamily: 
AppThemeData.semiBold,
  lib\screen_ui\multi_vendor_service\home_screen\discount_restaurant_list_screen.dart:233:  //                             fontWeight: FontWeight.w600,
  lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:797:                                  const SizedBox(width: 5),
  lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:798:                                  Text(
> lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:799:                                    "${Constant.calculateReview(reviewCount: 
vendorModel.reviewsCount!.toStringAsFixed(0), reviewSum: vendorModel.reviewsSum.toString())} (${vendorModel.reviewsCount!.toStringAsFixed(0)})",
  lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:800:                                    style: TextStyle(fontSize: 14, color: isDark ? 
AppThemeData.primary300 : AppThemeData.primary300, fontFamily: AppThemeData.semiBold, fontWeight: FontWeight.w600),
  lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:801:                                  ),
  lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:802:                                ],
  lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:803:                              ),
  lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:969:                                  const SizedBox(width: 5),
  lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:970:                                  Text(
> lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:971:                                    "${Constant.calculateReview(reviewCount: 
vendorModel.reviewsCount.toString(), reviewSum: vendorModel.reviewsSum.toString())} (${vendorModel.reviewsCount!.toStringAsFixed(0)})",
  lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:972:                                    style: TextStyle(fontSize: 14, color: isDark ? 
AppThemeData.primary300 : AppThemeData.primary300, fontFamily: AppThemeData.semiBold, fontWeight: FontWeight.w600),
  lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:973:                                  ),
  lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:974:                                ],
  lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:975:                              ),
  lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1140:                              const SizedBox(width: 4),
  lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1141:                              Text(
> lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1142:                                "${Constant.calculateReview(reviewCount: 
vendorModel.reviewsCount.toString(), reviewSum: vendorModel.reviewsSum.toString())} (${vendorModel.reviewsCount!.toStringAsFixed(0)})",
  lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1143:                                textAlign: TextAlign.start,
  lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1144:                                maxLines: 1,
  lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1145:                                style: TextStyle(
  lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1146:                                  overflow: TextOverflow.ellipsis,
  lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1203:      onTap: () async {
  lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1204:        ShowToastDialog.showLoader("Please wait...".tr);
> lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1205:        VendorModel? vendorModel = await 
FireStoreUtils.getVendorById(model.vendorId!);
  lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1206:        ShowToastDialog.closeLoader();
  lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1207:        Get.to(const RestaurantDetailsScreen(), arguments: {"vendorModel": 
vendorModel});
  lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1208:      },
  lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1209:      child: Container(
  lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1231:                    right: 8,
  lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1232:                    child: FutureBuilder(
> lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1233:                      future: FireStoreUtils.getVendorById(model.vendorId!),
  lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1234:                      builder: (context, snapshot) {
  lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1235:                        if (snapshot.connectionState == ConnectionState.waiting) {
  lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1236:                          return const SizedBox();
  lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1237:                        } else {
  lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1251:                                    if (model.showRating == true) const 
SizedBox(width: 5),
  lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1252:                                    Text(
> lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1253:                                      "${model.showRating == true ? 
Constant.calculateReview(reviewCount: vendorModel.reviewsCount!.toStringAsFixed(0), reviewSum: vendorModel.reviewsSum.toString()) : ''} ${model.showReview 
== true ? '(${vendorModel.reviewsCount!.toStringAsFixed(0)})' : ''}",
  lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1254:                                      style: TextStyle(fontSize: 14, color: isDark 
? AppThemeData.primary300 : AppThemeData.primary300, fontFamily: AppThemeData.semiBold, fontWeight: FontWeight.w600),
  lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1255:                                    ),
  lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1256:                                  ],
  lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1257:                                ),
  lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1437:                              const SizedBox(width: 10),
  lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1438:                              Text(
> lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1439:                                "${Constant.calculateReview(reviewCount: 
vendorModel.reviewsCount.toString(), reviewSum: vendorModel.reviewsSum.toString())} (${vendorModel.reviewsCount!.toStringAsFixed(0)})",
  lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1440:                                textAlign: TextAlign.start,
  lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1441:                                maxLines: 1,
  lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1442:                                style: TextStyle(
  lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1443:                                  fontSize: 12,
  lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1973:                                                            const SizedBox(width: 
5),
  lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1974:                                                            Text(
> lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1975:                                                              
"${Constant.calculateReview(reviewCount: vendorModel.reviewsCount.toString(), reviewSum: vendorModel.reviewsSum.toString())} 
(${vendorModel.reviewsCount!.toStringAsFixed(0)})",
  lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1976:                                                              style: TextStyle(
  lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1977:                                                                color: isDark ? 
AppThemeData.primary300 : AppThemeData.primary300,
  lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1978:                                                                fontFamily: 
AppThemeData.semiBold,
  lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1979:                                                                fontWeight: 
FontWeight.w600,
  lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:1028:                                            ),
  lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:1029:                                            Text(
> lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:1030:                                              
"${Constant.calculateReview(reviewCount: vendorModel.reviewsCount.toString(), reviewSum: vendorModel.reviewsSum.toString())} 
(${vendorModel.reviewsCount!.toStringAsFixed(0)})",
  lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:1031:                                              textAlign: TextAlign.start,
  lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:1032:                                              maxLines: 1,
  lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:1033:                                              style: TextStyle(
  lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:1034:                                                overflow: TextOverflow.ellipsis,
  lib\screen_ui\multi_vendor_service\home_screen\restaurant_list_screen.dart:144:                                                  const SizedBox(width: 
5),
  lib\screen_ui\multi_vendor_service\home_screen\restaurant_list_screen.dart:145:                                                  Text(
> lib\screen_ui\multi_vendor_service\home_screen\restaurant_list_screen.dart:146:                                                    
"${Constant.calculateReview(reviewCount: vendorModel.reviewsCount!.toStringAsFixed(0), reviewSum: vendorModel.reviewsSum.toString())} 
(${vendorModel.reviewsCount!.toStringAsFixed(0)})",
  lib\screen_ui\multi_vendor_service\home_screen\restaurant_list_screen.dart:147:                                                    style: TextStyle(
  lib\screen_ui\multi_vendor_service\home_screen\restaurant_list_screen.dart:148:                                                      fontSize: 14,
  lib\screen_ui\multi_vendor_service\home_screen\restaurant_list_screen.dart:149:                                                      color: isDark ? 
AppThemeData.primary300 : AppThemeData.primary300,
  lib\screen_ui\multi_vendor_service\home_screen\restaurant_list_screen.dart:150:                                                      fontFamily: 
AppThemeData.semiBold,
  lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:603:                                        ],
  lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:604:                                      ),
> lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:605:                                      cartProductModel.variantInfo == 
null || cartProductModel.variantInfo!.variantOptions!.isEmpty
  lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:606:                                          ? Container()
  lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:607:                                          : Padding(
  lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:608:                                            padding: const 
EdgeInsets.symmetric(horizontal: 5, vertical: 10),
  lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:609:                                            child: Column(
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
  lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:1011:                                      ),
  lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:1012:                                      Text(
> lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:1013:                                        
Constant.timestampToDateTime(controller.orderModel.value.createdAt!),
  lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:1014:                                        textAlign: TextAlign.start,
  lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:1015:                                        style: TextStyle(fontFamily: 
AppThemeData.regular, color: isDark ? AppThemeData.grey300 : AppThemeData.grey600, fontSize: 16),
  lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:1016:                                      ),
  lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:1017:                                    ],
  lib\screen_ui\multi_vendor_service\order_list_screen\order_screen.dart:296:                        const SizedBox(height: 5),
  lib\screen_ui\multi_vendor_service\order_list_screen\order_screen.dart:297:                        Text(
> lib\screen_ui\multi_vendor_service\order_list_screen\order_screen.dart:298:                          Constant.timestampToDateTime(orderModel.createdAt!),
  lib\screen_ui\multi_vendor_service\order_list_screen\order_screen.dart:299:                          style: TextStyle(
  lib\screen_ui\multi_vendor_service\order_list_screen\order_screen.dart:300:                            color: isDark ? AppThemeData.grey300 : 
AppThemeData.grey600,
  lib\screen_ui\multi_vendor_service\order_list_screen\order_screen.dart:301:                            fontFamily: AppThemeData.medium,
  lib\screen_ui\multi_vendor_service\order_list_screen\order_screen.dart:302:                            fontWeight: FontWeight.w500,
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
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1941:                                                      
(product) =>
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1942:                                                        
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
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1949:                                                        
    (product) =>
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1950:                                                        
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
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2760:                const SizedBox(height: 10),
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2761:                productModel.itemAttribute == null ||
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
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2944:                                                    
(product) =>
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2945:                                                        
product.id ==
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2946:                                                        
"${productModel.id}~${productModel.itemAttribute!.variants!.where((element) => element.variantSku == controller.selectedVariants.join('-')).isNotEmpty ? 
productModel.itemAttribute!.variants!.where((element) => element.variantSku == controller.selectedVariants.join('-')).first.variantId.toString() : ""}",
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2947:                                                  );
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2948:                                                  if 
(productIsInList) {
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2949:                                                    
CartProductModel
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2950:                                                    
element = cartItem.firstWhere(
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2951:                                                      
(product) =>
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2952:                                                        
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
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3355:                                    .toString(),
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3356:                                
controller.selectedVariants[productModel
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3357:                                    .itemAttribute!
> lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3358:                                    .attributes!
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3359:                                    .indexOf(element)],
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3360:                              ),
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3361:                            ]);
  lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:3362:                          }
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
  lib\screen_ui\multi_vendor_service\review_list_screen\review_list_screen.dart:189:                                  const SizedBox(height: 5),
  lib\screen_ui\multi_vendor_service\review_list_screen\review_list_screen.dart:190:                                  Text(
> lib\screen_ui\multi_vendor_service\review_list_screen\review_list_screen.dart:191:                                    
Constant.timestampToDateTime(ratingModel.createdAt!),
  lib\screen_ui\multi_vendor_service\review_list_screen\review_list_screen.dart:192:                                    style: TextStyle(color: isDark ? 
AppThemeData.grey300 : AppThemeData.grey600, fontSize: 14, fontFamily: AppThemeData.medium),
  lib\screen_ui\multi_vendor_service\review_list_screen\review_list_screen.dart:193:                                  ),
  lib\screen_ui\multi_vendor_service\review_list_screen\review_list_screen.dart:194:                                ],
  lib\screen_ui\multi_vendor_service\review_list_screen\review_list_screen.dart:195:                              ),
  lib\screen_ui\multi_vendor_service\search_screen\search_screen.dart:153:                                                        const SizedBox(width: 5),
  lib\screen_ui\multi_vendor_service\search_screen\search_screen.dart:154:                                                        Text(
> lib\screen_ui\multi_vendor_service\search_screen\search_screen.dart:155:                                                          
"${Constant.calculateReview(reviewCount: vendorModel.reviewsCount!.toStringAsFixed(0), reviewSum: vendorModel.reviewsSum.toString())} 
(${vendorModel.reviewsCount!.toStringAsFixed(0)})",
  lib\screen_ui\multi_vendor_service\search_screen\search_screen.dart:156:                                                          style: TextStyle(
  lib\screen_ui\multi_vendor_service\search_screen\search_screen.dart:157:                                                            fontSize: 14,
  lib\screen_ui\multi_vendor_service\search_screen\search_screen.dart:158:                                                            color: isDark ? 
AppThemeData.primary300 : AppThemeData.primary300,
  lib\screen_ui\multi_vendor_service\search_screen\search_screen.dart:159:                                                            fontFamily: 
AppThemeData.semiBold,
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
  lib\screen_ui\multi_vendor_service\search_screen\search_screen.dart:425:    VendorModel? vendorModel = await 
FireStoreUtils.getVendorById(productModel.vendorID.toString());
  lib\screen_ui\multi_vendor_service\search_screen\search_screen.dart:426:    if (productModel.itemAttribute != null) {
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
  lib\screen_ui\multi_vendor_service\search_screen\search_screen.dart:441:      price = Constant.productCommissionPrice(vendorModel!, 
productModel.price.toString());



TEXT_END

## Likely Product Card / Builder Files
TEXT_START

Path                                                                                                                                                       
----                                                                                                                                                       
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\all_brand_product_controller.dart                 
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\all_category_product_controller.dart              
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cart_controller.dart                              
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

STATUS: SERVICE_54D_CUSTOMER_VISUAL_RED_SCREEN_TRACE_FOUND