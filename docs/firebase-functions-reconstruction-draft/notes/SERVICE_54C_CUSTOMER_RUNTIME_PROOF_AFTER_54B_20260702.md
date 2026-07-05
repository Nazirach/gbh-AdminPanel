# SERVICE 54C CUSTOMER RUNTIME PROOF AFTER 54B

Generated: 07/02/2026 17:18:08
Mode: INSTALL + RUNTIME TEST. No patch.
Package: com.erbete.customer
Device: 115413747T003958

Purpose: verify Customer APK runtime after SERVICE 53F null-safe photos patch and SERVICE 54B syntax build fix.

## ADB Devices
TEXT_START
List of devices attached
115413747T003958	device


TEXT_END

BUILD_SKIPPED: APK already exists from previous service.

APK_PATH: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\build\app\outputs\flutter-apk\app-debug.apk
APK_SIZE_BYTES: 228167026
APK_LAST_WRITE: 07/02/2026 15:30:08

## Install Summary
TEXT_START
Performing Streamed Install
Success

TEXT_END

## Runtime Counters
TEXT_START
MATCH_NULL_CHECK: 0
MATCH_WIDGET_EXCEPTION: 0
MATCH_ANOTHER_EXCEPTION: 0
MATCH_UNHANDLED_EXCEPTION: 0
MATCH_NOSUCHMETHOD: 0
MATCH_RANGEERROR: 0
MATCH_LATEINIT: 0
MATCH_TYPE_NULL: 0
MATCH_FATAL_TOTAL: 0
TEXT_END

## Runtime Log Limited
TEXT_START

  07-02 17:20:22.788 I/mtkpower_client( 1080): perf_lock_rel, hdl:55211, tid:1080
  07-02 17:20:22.789 I/libPowerHal(  970): [PD] fpsgo update cmd:1408300 param:0
> 07-02 17:20:22.789 I/flutter ( 4859): STEP47G_RESTAURANT_DETAIL_ONCLOSE
  07-02 17:20:23.053 I/libPerfCtl(  970): xgfGetFPS pid:4859 fps:42
  07-02 17:20:23.053 I/AppThermalMode(  970): [perfNotifyThermalState] hdl:0
  07-02 17:20:23.053 I/AppThermalMode(  970): [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: 60,fg->pid:4859
  07-02 17:20:23.053 I/AppThermalMode(  970): [perfNotifyThermalState] appThermalIdx -1:
  07-02 17:20:23.189 D/ULogGuard( 1342): Monitoring: 15 threads, 0 requests, 0 time-bombs; 3 guards. ResetFlags = 0x7
  07-02 17:20:23.370 I/TranWifiSmartAssistantController( 1698): start current network monitor 
  07-02 17:20:23.371 I/WifiService( 1698): getConnectionInfo uid=1000
  07-02 17:20:23.379 V/WifiService( 1698): Clearing REDACT_FOR_LOCAL_MAC_ADDRESS for android(uid=1000)
  07-02 17:20:36.441 D/mol_MolService.run(L:134)( 4272): ----MolService focused pkg:com.erbete.customer, 
cmp:com.erbete.customer.MainActivity, curType:SCENE_UNKOWN, molAlive:true, asAlive:false, asCrashed:false, imeVis:false, 
this:com.transsion.mol.service.MolService@9ecbda5
  07-02 17:20:36.472 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.039916,0.000043, totalTime 
0.039960 > logTimeout 0.022000 TIMEOUT!!
> 07-02 17:20:36.473 I/flutter ( 4859): RESTAURANT_VENDOR_DEBUG: event_count=3
> 07-02 17:20:36.473 I/flutter ( 4859): RESTAURANT_VENDOR_DEBUG: allNearest_count=3
> 07-02 17:20:36.473 I/flutter ( 4859): RESTAURANT_VENDOR_DEBUG: newArrival_count=3
> 07-02 17:20:36.473 I/flutter ( 4859): RESTAURANT_VENDOR_DEBUG: popular_count=3
> 07-02 17:20:36.473 I/flutter ( 4859): RESTAURANT_VENDOR_DEBUG_ITEM: id=aceh_clone_6319dc53314ee_1BlB62hfbg7mX0MTIUeo title=D-Mart 
section=6319dc53314ee zone=q8OOxNm1zgyVqggkCibX category=[]
> 07-02 17:20:36.473 I/flutter ( 4859): RESTAURANT_VENDOR_DEBUG_ITEM: id=aceh_clone_6319dc53314ee_07RFZCxogqVjkbVTt9HE title=Food 
Grocery store section=6319dc53314ee zone=q8OOxNm1zgyVqggkCibX category=[]
> 07-02 17:20:36.473 I/flutter ( 4859): RESTAURANT_VENDOR_DEBUG_ITEM: id=aceh_clone_6319dc53314ee_10KPhdPgfOUpkHtzT3oS title=Simo 
Market section=6319dc53314ee zone=q8OOxNm1zgyVqggkCibX category=[]
  07-02 17:20:36.476 I/mtkpower_client( 1080): perf_lock_acq, hdl:0, dur:30000, num:2, tid:1080
  07-02 17:20:36.477 I/mtkpower_client( 1080): ret_hdl:55240
  07-02 17:20:36.482 I/mtkpower_client( 1080): perf_lock_rel, hdl:55240, tid:1080
  07-02 17:20:36.483 I/libPowerHal(  970): [PD] fpsgo update cmd:1408300 param:0
  07-02 17:20:37.033 I/mtkpower_client( 1080): perf_lock_acq, hdl:0, dur:30000, num:2, tid:1080
  07-02 17:20:37.034 I/mtkpower_client( 1080): ret_hdl:55241
  07-02 17:20:37.059 I/libPerfCtl(  970): xgfGetFPS pid:2380 fps:-1
  07-02 17:20:37.059 I/AppThermalMode(  970): [perfNotifyThermalState] hdl:0
  07-02 17:20:38.897 I/mtkpower_client( 1080): ret_hdl:55253
  07-02 17:20:38.897 I/FPSGO   ( 1080): perfLockAcq hdl:55253
> 07-02 17:20:38.916 I/flutter ( 4859): Number of Stories Fetched: 5
> 07-02 17:20:38.916 I/flutter ( 4859): Total stories fetched: 5
> 07-02 17:20:38.916 I/flutter ( 4859): nearestIds: {aceh_clone_6319dc53314ee_1BlB62hfbg7mX0MTIUeo, 
aceh_clone_6319dc53314ee_07RFZCxogqVjkbVTt9HE, aceh_clone_6319dc53314ee_10KPhdPgfOUpkHtzT3oS}
> 07-02 17:20:38.918 I/flutter ( 4859): Filtered storyList length: 0
  07-02 17:20:38.930 I/mtkpower_client( 1080): perf_lock_acq, hdl:0, dur:30000, num:2, tid:1080
  07-02 17:20:38.931 I/mtkpower_client( 1080): ret_hdl:55254
  07-02 17:20:38.932 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.040317,0.000052, totalTime 
0.040370 > logTimeout 0.022000 TIMEOUT!!
  07-02 17:20:39.030 I/mtkpower_client( 1080): perf_lock_rel, hdl:55254, tid:1080
  07-02 17:20:39.031 I/libPowerHal(  970): [PD] fpsgo update cmd:1408300 param:0
  07-02 17:20:39.060 I/libPerfCtl(  970): xgfGetFPS pid:2380 fps:-1
  07-02 17:20:39.060 I/AppThermalMode(  970): [perfNotifyThermalState] hdl:0
  07-02 17:20:39.060 I/AppThermalMode(  970): [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: 60,fg->pid:4859
  07-02 17:20:41.148 D/AES     ( 1698): AEEIOCTL_GET/SET_SF_STATE IOCTL,cmd= 1074294797, lParam=0. 
  07-02 17:20:41.148 D/AES     ( 1698): AEEIOCTL_RT_MON_Kick IOCTL,cmd= 2147774474, lParam=300. 
> 07-02 17:20:41.159 I/flutter ( 4859): STEP47D_RESTAURANT_DETAIL_ARGUMENTS: type=_Map<String, VendorModel> value={vendorModel: 
Instance of 'VendorModel'}
> 07-02 17:20:41.159 I/flutter ( 4859): STEP47D_RESTAURANT_DETAIL_VENDOR_ARG: id=aceh_clone_6319dc53314ee_07RFZCxogqVjkbVTt9HE 
title=Food Grocery store zone=q8OOxNm1zgyVqggkCibX
> 07-02 17:20:41.161 I/flutter ( 4859): 2026-07-02 09:05:00.000
> 07-02 17:20:41.161 I/flutter ( 4859): 2026-07-02 22:25:00.000
> 07-02 17:20:41.161 I/flutter ( 4859): 2026-07-02 17:20:41.161473
> 07-02 17:20:41.161 I/flutter ( 4859): STEP47D_RESTAURANT_DETAIL_BEFORE_PRODUCT_LOAD: 
vendorId=aceh_clone_6319dc53314ee_07RFZCxogqVjkbVTt9HE title=Food Grocery store
> 07-02 17:20:41.161 I/flutter ( 4859): STEP47D_GET_PRODUCT_BY_VENDOR_ID_START: 
vendorId=aceh_clone_6319dc53314ee_07RFZCxogqVjkbVTt9HE selectedFoodType=Delivery collection=vendor_products
> 07-02 17:20:41.162 I/flutter ( 4859): STEP47D_RESTAURANT_DETAIL_ONINIT_ENTER
  07-02 17:20:41.192 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.040029,0.000066, totalTime 
0.040095 > logTimeout 0.022000 TIMEOUT!!
  07-02 17:20:41.197 D/ULogGuard( 1342): Monitoring: 15 threads, 0 requests, 0 time-bombs; 3 guards. ResetFlags = 0x7
  07-02 17:20:41.213 I/mtkpower_client( 1080): perf_lock_rel, hdl:55263, tid:1080
  07-02 17:20:41.214 I/libPowerHal(  970): [setClusterFreq] mtkpower@1.0-se: sysfs_freq set cpu freq: -1 -1 -1 -1 
  07-02 17:20:41.214 I/libPowerHal(  970): [PD] fpsgo update cmd:1408300 param:0
  07-02 17:20:41.232 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000000,0.039847,0.000044, totalTime 
0.039891 > logTimeout 0.022000 TIMEOUT!!
  07-02 17:20:41.233 I/StatusBarNetworkRateView( 2380): wifi is default. hide second network rate view. StatusBarNetworkRateView 
subId=2, isFirstSimCard=false, mLocation=QS_NEW NetworkRateState=NetworkRateState{visible=true, activeMobileDataSubId=2, 
totalRate=22.849, netWorkState=1, isAirplane=false, netRateStateBySettingGlobal=1, networkRate='22,8', networkRateUnit='KB/S'}
  07-02 17:20:41.246 I/mtkpower_client( 1080): perf_lock_acq, hdl:0, dur:30000, num:2, tid:1080
  07-02 17:20:41.681 I/mtkpower_client( 1080): perf_lock_rel, hdl:55268, tid:1080
  07-02 17:20:41.682 I/libPowerHal(  970): [PD] fpsgo update cmd:1408300 param:0
> 07-02 17:20:41.742 I/flutter ( 4859): STEP47D_GET_PRODUCT_BY_VENDOR_ID_ITEM: 
vendorId=aceh_clone_6319dc53314ee_07RFZCxogqVjkbVTt9HE 
productId=aceh_product_aceh_clone_6319dc53314ee_07RFZCxogqVjkbVTt9HE_CeXrjmrha9h5FUmXfpFs name=Mengo categoryID=636e30433dd7e 
publish=true
> 07-02 17:20:41.743 I/flutter ( 4859): STEP47D_GET_PRODUCT_BY_VENDOR_ID_ITEM: 
vendorId=aceh_clone_6319dc53314ee_07RFZCxogqVjkbVTt9HE 
productId=aceh_product_aceh_clone_6319dc53314ee_07RFZCxogqVjkbVTt9HE_chn9QbA7UVCnzfO74jtk name=Cookies 
categoryID=zzq4LngLd8PWzYJfsvnjfV publish=true
> 07-02 17:20:41.743 I/flutter ( 4859): STEP47D_GET_PRODUCT_BY_VENDOR_ID_ITEM: 
vendorId=aceh_clone_6319dc53314ee_07RFZCxogqVjkbVTt9HE 
productId=aceh_product_aceh_clone_6319dc53314ee_07RFZCxogqVjkbVTt9HE_qtlemSKirYyIgfaQLIJX name=Meggi 
categoryID=zzq4LngLd8PWzYJfsvnjfV publish=true
> 07-02 17:20:41.743 I/flutter ( 4859): STEP47D_GET_PRODUCT_BY_VENDOR_ID_ITEM: 
vendorId=aceh_clone_6319dc53314ee_07RFZCxogqVjkbVTt9HE 
productId=aceh_product_aceh_clone_6319dc53314ee_07RFZCxogqVjkbVTt9HE_st8IsI550HxB1809QtqE name=Orange categoryID=636e30433dd7e 
publish=true
> 07-02 17:20:41.743 I/flutter ( 4859): STEP47D_GET_PRODUCT_BY_VENDOR_ID_ITEM: 
vendorId=aceh_clone_6319dc53314ee_07RFZCxogqVjkbVTt9HE 
productId=aceh_product_aceh_clone_6319dc53314ee_07RFZCxogqVjkbVTt9HE_x0nBdWe5CDp3eCavZr9P name=Apple categoryID=636e30433dd7e 
publish=true
> 07-02 17:20:41.743 I/flutter ( 4859): STEP47D_GET_PRODUCT_BY_VENDOR_ID_RESULT: 
vendorId=aceh_clone_6319dc53314ee_07RFZCxogqVjkbVTt9HE count=5
> 07-02 17:20:41.743 I/flutter ( 4859): STEP47D_RESTAURANT_DETAIL_PRODUCT_LIST_ASSIGNED: 
vendorId=aceh_clone_6319dc53314ee_07RFZCxogqVjkbVTt9HE count=5 allCount=5
  07-02 17:20:41.800 I/mtkpower_client( 1080): perf_lock_acq, hdl:0, dur:30000, num:2, tid:1080
  07-02 17:20:41.802 I/mtkpower_client( 1080): ret_hdl:55269
  07-02 17:20:41.802 I/mtkpower_client( 1080): perf_lock_rel, hdl:55269, tid:1080
  07-02 17:20:41.806 I/libPowerHal(  970): [PD] fpsgo update cmd:1408300 param:0
  07-02 17:20:41.831 D/WifiClientModeImpl[24001351:wlan0]( 1698): updateLinkLayerStatsRssiSpeedFrequencyCapabilities rssi=-54 
TxLinkspeed=54 freq=5765 RxLinkSpeed=24
  07-02 17:20:41.835 D/WifiDataStall( 1698): tx tput in kbps: 50000
  07-02 17:20:41.836 D/WifiDataStall( 1698): rx tput in kbps: 50000
  07-02 17:20:41.836 V/WifiConfigManager( 1698): Updating scan detail cache freq=5765 BSSID=ac:4a:56:28:fe:ee RSSI=-54 for 
"TAUFIKKOPIBATOH@WIFI.ID"NONE
  07-02 17:20:46.450 I/TranActivityTaskManager( 4272): tran isIMEShowing
  07-02 17:20:46.451 D/mol_MolService.run(L:134)( 4272): ----MolService focused pkg:com.erbete.customer, 
cmp:com.erbete.customer.MainActivity, curType:SCENE_UNKOWN, molAlive:true, asAlive:false, asCrashed:false, imeVis:false, 
this:com.transsion.mol.service.MolService@9ecbda5
> 07-02 17:20:46.584 I/flutter ( 4859): STEP47G_RESTAURANT_DETAIL_ONCLOSE
  07-02 17:20:46.855 I/Hiber/importantScene( 1698): isTrafficActive uid:10271 speed :0
  07-02 17:20:46.856 I/Hiber/appStateMachine( 1698): uid:10271 enter FrozenState
  07-02 17:20:46.861 I/Hiber/stateManager( 1698): freeze uid: 10271 com.whatsapp costTime=4ms ,last unfreeze 5s ago
  07-02 17:20:46.861 I/Hiber/restrictionPolicy( 1698): uid:10271  pkgName:com.whatsapp isAllowedNet
  07-02 17:20:46.862 I/Hiber/hiber( 1698): msg for start proxy frozen state
  07-02 17:20:46.862 D/ActivityManager( 1698): Hiber try idle uid[10271] by hiber ,bgTime>0 ? true,isIdled before ? true 
,isCurAllowListed ? false ,isProcStateBackground?true
  07-02 17:20:46.862 D/ActivityManager( 1698): Hiber try idle uid[10271] by hiber
  07-02 17:20:46.862 I/Hiber/proxyManager( 1698): p_service: 10271
  07-02 17:20:48.427 D/TouchMonitorProxy( 4272): handleInputEvent MotionEvent:MotionEvent { action=ACTION_UP, actionButton=0, 
id[0]=0, x[0]=605.3125, y[0]=1427.0625, toolType[0]=TOOL_TYPE_FINGER, buttonState=0, classification=NONE, metaState=0, flags=0x0, 
edgeFlags=0x0, pointerCount=1, historySize=0, eventTime=161229555, downTime=161229492, deviceId=6, source=0x1002, displayId=0, 
eventId=1054988166 }
  07-02 17:20:48.428 I/ScreenTouchCollector( 3928): resetTouchPara:reason= InputEvent ACTION_UP or ACTION_CANCEL
> 07-02 17:20:48.451 I/flutter ( 4859): STEP47D_RESTAURANT_DETAIL_ARGUMENTS: type=_Map<String, VendorModel> value={vendorModel: 
Instance of 'VendorModel'}
> 07-02 17:20:48.451 I/flutter ( 4859): STEP47D_RESTAURANT_DETAIL_VENDOR_ARG: id=aceh_clone_6319dc53314ee_10KPhdPgfOUpkHtzT3oS 
title=Simo Market zone=q8OOxNm1zgyVqggkCibX
> 07-02 17:20:48.455 I/flutter ( 4859): 2026-07-02 09:00:00.000
> 07-02 17:20:48.455 I/flutter ( 4859): 2026-07-02 23:30:00.000
> 07-02 17:20:48.455 I/flutter ( 4859): 2026-07-02 17:20:48.455258
> 07-02 17:20:48.455 I/flutter ( 4859): 2026-07-02 12:00:00.000
> 07-02 17:20:48.455 I/flutter ( 4859): 2026-07-02 02:00:00.000
> 07-02 17:20:48.456 I/flutter ( 4859): 2026-07-02 17:20:48.455993
> 07-02 17:20:48.456 I/flutter ( 4859): STEP47D_RESTAURANT_DETAIL_BEFORE_PRODUCT_LOAD: 
vendorId=aceh_clone_6319dc53314ee_10KPhdPgfOUpkHtzT3oS title=Simo Market
> 07-02 17:20:48.456 I/flutter ( 4859): STEP47D_GET_PRODUCT_BY_VENDOR_ID_START: 
vendorId=aceh_clone_6319dc53314ee_10KPhdPgfOUpkHtzT3oS selectedFoodType=Delivery collection=vendor_products
> 07-02 17:20:48.456 I/flutter ( 4859): STEP47D_RESTAURANT_DETAIL_ONINIT_ENTER
  07-02 17:20:48.458 I/mtkpower_client( 1080): perf_lock_acq, hdl:0, dur:30000, num:2, tid:1080
  07-02 17:20:48.459 I/mtkpower_client( 1080): ret_hdl:55291
  07-02 17:20:48.495 I/mtkpower_client( 1080): perf_lock_rel, hdl:55291, tid:1080
  07-02 17:20:48.496 I/libPowerHal(  970): [PD] fpsgo update cmd:1408300 param:0
  07-02 17:20:48.529 I/mtkpower_client( 1080): perf_lock_acq, hdl:0, dur:30000, num:2, tid:1080
  07-02 17:20:48.529 I/mtkpower_client( 1080): ret_hdl:55292
  07-02 17:20:48.548 I/mtkpower_client( 1080): perf_lock_rel, hdl:55292, tid:1080
  07-02 17:20:48.549 I/libPowerHal(  970): [PD] fpsgo update cmd:1408300 param:0
  07-02 17:20:49.007 I/mtkpower_client( 1080): perf_lock_rel, hdl:55295, tid:1080
  07-02 17:20:49.008 I/libPowerHal(  970): [PD] fpsgo update cmd:1408300 param:0
> 07-02 17:20:49.015 I/flutter ( 4859): STEP47D_GET_PRODUCT_BY_VENDOR_ID_ITEM: 
vendorId=aceh_clone_6319dc53314ee_10KPhdPgfOUpkHtzT3oS 
productId=aceh_product_aceh_clone_6319dc53314ee_10KPhdPgfOUpkHtzT3oS_V1SpZUEw203BJwGvbnaG name=Graps categoryID=636e30433dd7e 
publish=true
> 07-02 17:20:49.015 I/flutter ( 4859): STEP47D_GET_PRODUCT_BY_VENDOR_ID_ITEM: 
vendorId=aceh_clone_6319dc53314ee_10KPhdPgfOUpkHtzT3oS 
productId=aceh_product_aceh_clone_6319dc53314ee_10KPhdPgfOUpkHtzT3oS_b2r8Hp8MYio4LyH8Z1mR name=Fish Meat 
categoryID=OvjEAidyRSeuoH81pK4O publish=true
> 07-02 17:20:49.015 I/flutter ( 4859): STEP47D_GET_PRODUCT_BY_VENDOR_ID_ITEM: 
vendorId=aceh_clone_6319dc53314ee_10KPhdPgfOUpkHtzT3oS 
productId=aceh_product_aceh_clone_6319dc53314ee_10KPhdPgfOUpkHtzT3oS_k0cHUxOLfJvQn3pn74vm name=Cookies 
categoryID=zzq4LngLd8PWzYJfsvnjfV publish=true
> 07-02 17:20:49.016 I/flutter ( 4859): STEP47D_GET_PRODUCT_BY_VENDOR_ID_ITEM: 
vendorId=aceh_clone_6319dc53314ee_10KPhdPgfOUpkHtzT3oS 
productId=aceh_product_aceh_clone_6319dc53314ee_10KPhdPgfOUpkHtzT3oS_oGPyFHXL3uJHIPwA4ktM name=Masala Meggi 
categoryID=zzq4LngLd8PWzYJfsvnjfV publish=true
> 07-02 17:20:49.016 I/flutter ( 4859): STEP47D_GET_PRODUCT_BY_VENDOR_ID_ITEM: 
vendorId=aceh_clone_6319dc53314ee_10KPhdPgfOUpkHtzT3oS 
productId=aceh_product_aceh_clone_6319dc53314ee_10KPhdPgfOUpkHtzT3oS_r1WBqciM3iyIOvvjBvDE name=Chicken Meat 
categoryID=OvjEAidyRSeuoH81pK4O publish=true
> 07-02 17:20:49.016 I/flutter ( 4859): STEP47D_GET_PRODUCT_BY_VENDOR_ID_ITEM: 
vendorId=aceh_clone_6319dc53314ee_10KPhdPgfOUpkHtzT3oS 
productId=aceh_product_aceh_clone_6319dc53314ee_10KPhdPgfOUpkHtzT3oS_rMNaVr9UOshrt6Tpr3Rw name=Biscuits 
categoryID=zzq4LngLd8PWzYJfsvnjfV publish=true
> 07-02 17:20:49.016 I/flutter ( 4859): STEP47D_GET_PRODUCT_BY_VENDOR_ID_ITEM: 
vendorId=aceh_clone_6319dc53314ee_10KPhdPgfOUpkHtzT3oS 
productId=aceh_product_aceh_clone_6319dc53314ee_10KPhdPgfOUpkHtzT3oS_rvH1e0yXrSHnMetXACHU name=Broccoli 
categoryID=88pNxhccktxkSgIndZ8e publish=true
> 07-02 17:20:49.016 I/flutter ( 4859): STEP47D_GET_PRODUCT_BY_VENDOR_ID_ITEM: 
vendorId=aceh_clone_6319dc53314ee_10KPhdPgfOUpkHtzT3oS 
productId=aceh_product_aceh_clone_6319dc53314ee_10KPhdPgfOUpkHtzT3oS_tJoQSqNMDGvRWLEaTVgA name=Apple categoryID=636e30433dd7e 
publish=true
> 07-02 17:20:49.017 I/flutter ( 4859): STEP47D_GET_PRODUCT_BY_VENDOR_ID_ITEM: 
vendorId=aceh_clone_6319dc53314ee_10KPhdPgfOUpkHtzT3oS 
productId=aceh_product_aceh_clone_6319dc53314ee_10KPhdPgfOUpkHtzT3oS_tSqVXFKISP05jDRZy8VJ name=Orange categoryID=636e30433dd7e 
publish=true
> 07-02 17:20:49.017 I/flutter ( 4859): STEP47D_GET_PRODUCT_BY_VENDOR_ID_ITEM: 
vendorId=aceh_clone_6319dc53314ee_10KPhdPgfOUpkHtzT3oS 
productId=aceh_product_aceh_clone_6319dc53314ee_10KPhdPgfOUpkHtzT3oS_tjoJjD7WFoipvBD5WaPr name=Kiwi categoryID=636e30433dd7e 
publish=true
> 07-02 17:20:49.017 I/flutter ( 4859): STEP47D_GET_PRODUCT_BY_VENDOR_ID_RESULT: 
vendorId=aceh_clone_6319dc53314ee_10KPhdPgfOUpkHtzT3oS count=10
> 07-02 17:20:49.017 I/flutter ( 4859): STEP47D_RESTAURANT_DETAIL_PRODUCT_LIST_ASSIGNED: 
vendorId=aceh_clone_6319dc53314ee_10KPhdPgfOUpkHtzT3oS count=10 allCount=10
  07-02 17:20:49.065 I/libPerfCtl(  970): xgfGetFPS pid:2380 fps:-1
  07-02 17:20:49.065 I/AppThermalMode(  970): [perfNotifyThermalState] hdl:0
  07-02 17:20:49.065 I/AppThermalMode(  970): [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: 60,fg->pid:4859
  07-02 17:20:49.065 I/AppThermalMode(  970): [perfNotifyThermalState] appThermalIdx -1:
  07-02 17:20:49.065 I/libPerfCtl(  970): xgfGetFPS pid:4859 fps:49
  07-02 17:20:49.066 I/AppThermalMode(  970): [perfNotifyThermalState] hdl:0
  07-02 17:20:49.066 I/AppThermalMode(  970): [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: 60,fg->pid:4859
  07-02 17:20:49.066 I/AppThermalMode(  970): [perfNotifyThermalState] appThermalIdx -1:
  07-02 17:20:56.680 I/artd    (16397): GetBestInfo: dm 
(/data/app/~~TZMotzhcjK6gSoqHehFr4A==/com.bmoney.android-5S96zS83smeAm_VnJvBr2g==/base.dm) is kOatUpToDate with filter 'verify' 
executable 'false'
  07-02 17:20:56.693 I/artd    (16397): GetBestInfo: 
/data/app/~~S7cASBW7ql7v9UTCT548zw==/org.chromium.webapk.a2749e4574bcde5c0_v2-E2OFUgJL9-FqUidcXOOYnQ==/base.apk has no usable 
artifacts
> 07-02 17:20:56.701 I/artd    (16397): GetBestInfo: odex next to the dex file 
(/data/app/~~JvTXp542xlmtgbMnXoL5pQ==/com.google.android.apps.photos-cV3XHIT7TvpA2wkCzj-kNA==/oat/arm64/base.odex) is kOatUpToDate 
with filter 'speed-profile' executable 'false'
  07-02 17:20:56.711 I/artd    (16397): GetBestInfo: odex next to the dex file 
(/data/app/~~ErpKqeeFvSLui30Ne5ZPaA==/uk.co.maritimeradio965.player-Wist-A1mtpDlHv7t2JyjXg==/oat/arm64/base.odex) is kOatUpToDate 
with filter 'speed-profile' executable 'false'
  07-02 17:20:56.714 W/Finsky  ( 9107): [2] STU: Failed to get storage stats for package 'com.android.compos' (1601: Error getting 
stats: android.content.pm.PackageManager.NameNotFoundException)
  07-02 17:20:56.727 I/artd    (16397): GetBestInfo: dm 
(/data/app/~~rC-nG36eWihqwabmuxKAfw==/com.trassion.infinix.xclub-ODGzL4zMsfSyFNNGclDHdA==/base.dm) is kOatUpToDate with filter 
'verify' executable 'false'
  07-02 17:20:56.732 W/AudioALSACaptureDataProviderNormal(  920): readThread, latency_in_s,0.000001,0.039905,0.000033, totalTime 
0.039939 > logTimeout 0.022000 TIMEOUT!!
  07-02 17:20:56.741 I/artd    (16397): GetBestInfo: dm 
(/data/app/~~u1WfZKXYKl0OfWU_9Pf-9A==/com.google.earth-kK6nxE25R7U0wqE_tMPp4Q==/base.dm) is kOatUpToDate with filter 'verify' 
executable 'false'
  07-02 17:20:56.752 I/artd    (16397): GetBestInfo: 
/data/app/~~uPDUvqnzJRnz08g7L1av1g==/com.discord-UDZ08cVSSdTmVfRn95wn8g==/base.apk has no usable artifacts
  07-02 17:20:56.755 W/Finsky  ( 9107): [2] STU: Failed to get storage stats for package 'com.transsion.phone' (1601: Error getting 
stats: android.content.pm.PackageManager.NameNotFoundException)
  07-02 17:20:56.765 I/artd    (16397): GetBestInfo: odex next to the dex file 
(/data/app/~~nvr4sBYBapL1J8We0ljBMw==/net.metaquotes.metatrader5-m4fhAoGVtgstyNz2SDKXIw==/oat/arm64/base.odex) is kOatUpToDate with 
filter 'speed-profile' executable 'false'
  07-02 17:20:59.942 W/.apps.wellbeing(15784): ApkAssets: Deleting an ApkAssets object '<empty> and 
/system_ext/priv-app/GoogleFeedback/GoogleFeedback.apk' with 1 weak references
  07-02 17:20:59.943 W/.apps.wellbeing(15784): ApkAssets: Deleting an ApkAssets object '<empty> and 
/system_ext/app/GooglePrintRecommendationService/GooglePrintRecommendationService.apk' with 1 weak references
> 07-02 17:20:59.943 W/.apps.wellbeing(15784): ApkAssets: Deleting an ApkAssets object '<empty> and 
/data/app/~~JvTXp542xlmtgbMnXoL5pQ==/com.google.android.apps.photos-cV3XHIT7TvpA2wkCzj-kNA==/base.apk' with 1 weak references
> 07-02 17:20:59.943 W/.apps.wellbeing(15784): ApkAssets: Deleting an ApkAssets object '<empty> and 
/data/app/~~JvTXp542xlmtgbMnXoL5pQ==/com.google.android.apps.photos-cV3XHIT7TvpA2wkCzj-kNA==/split_config.arm64_v8a.apk' with 1 
weak references
> 07-02 17:20:59.943 W/.apps.wellbeing(15784): ApkAssets: Deleting an ApkAssets object '<empty> and 
/data/app/~~JvTXp542xlmtgbMnXoL5pQ==/com.google.android.apps.photos-cV3XHIT7TvpA2wkCzj-kNA==/split_config.in.apk' with 1 weak 
references
> 07-02 17:20:59.943 W/.apps.wellbeing(15784): ApkAssets: Deleting an ApkAssets object '<empty> and 
/data/app/~~JvTXp542xlmtgbMnXoL5pQ==/com.google.android.apps.photos-cV3XHIT7TvpA2wkCzj-kNA==/split_config.xxhdpi.apk' with 1 weak 
references
  07-02 17:20:59.944 W/.apps.wellbeing(15784): ApkAssets: Deleting an ApkAssets object '<empty> and 
/data/app/~~zoFJepcfly6yQUCmBbRXvQ==/com.skymavis.genesis-_G4tmrKEdEP-5hk7JFhkRQ==/base.apk' with 1 weak references
  07-02 17:20:59.944 W/.apps.wellbeing(15784): ApkAssets: Deleting an ApkAssets object '<empty> and 
/data/app/~~zoFJepcfly6yQUCmBbRXvQ==/com.skymavis.genesis-_G4tmrKEdEP-5hk7JFhkRQ==/split_config.arm64_v8a.apk' with 1 weak 
references
  07-02 17:20:59.944 W/.apps.wellbeing(15784): ApkAssets: Deleting an ApkAssets object '<empty> and 
/data/app/~~zoFJepcfly6yQUCmBbRXvQ==/com.skymavis.genesis-_G4tmrKEdEP-5hk7JFhkRQ==/split_config.in.apk' with 1 weak references
  07-02 17:20:59.944 W/.apps.wellbeing(15784): ApkAssets: Deleting an ApkAssets object '<empty> and 
/data/app/~~zoFJepcfly6yQUCmBbRXvQ==/com.skymavis.genesis-_G4tmrKEdEP-5hk7JFhkRQ==/split_config.ms.apk' with 1 weak references
  07-02 17:20:59.944 W/.apps.wellbeing(15784): ApkAssets: Deleting an ApkAssets object '<empty> and 
/data/app/~~zoFJepcfly6yQUCmBbRXvQ==/com.skymavis.genesis-_G4tmrKEdEP-5hk7JFhkRQ==/split_config.xxhdpi.apk' with 1 weak references
  07-02 17:20:59.944 W/.apps.wellbeing(15784): ApkAssets: Deleting an ApkAssets object '<empty> and 
/data/app/~~RlxKndiUU5Ltrk3nCB8SLQ==/com.google.android.calendar-t5mO4PqA37-igHaW_RtwlQ==/base.apk' with 1 weak references
  07-02 17:20:59.945 W/.apps.wellbeing(15784): ApkAssets: Deleting an ApkAssets object '<empty> and 
/data/app/~~RlxKndiUU5Ltrk3nCB8SLQ==/com.google.android.calendar-t5mO4PqA37-igHaW_RtwlQ==/split_config.arm64_v8a.apk' with 1 weak 
references
  07-02 17:20:59.945 W/.apps.wellbeing(15784): ApkAssets: Deleting an ApkAssets object '<empty> and 
/data/app/~~RlxKndiUU5Ltrk3nCB8SLQ==/com.google.android.calendar-t5mO4PqA37-igHaW_RtwlQ==/split_config.in.apk' with 1 weak 
references



TEXT_END

STATUS: SERVICE_54C_CUSTOMER_RUNTIME_NULL_SAFE_PASS