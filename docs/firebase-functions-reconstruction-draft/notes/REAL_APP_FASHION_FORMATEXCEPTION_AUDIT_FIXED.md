# FASHION FORMATEXCEPTION AUDIT FIXED

Generated: 06/28/2026 22:34:06

Mode: read-only. No patch. No Firebase write. No order creation.

## Observed

- Fashion click produced blank screen.
- Runtime error: FormatException: Unexpected end of input.
- Previous audit command failed because PowerShell automatic variable $Matches was accidentally reused.

## Log Context Around FormatException


### Context around log line 75
```text
50: 06-28 22:17:40.545  2377  2377 I TranNotificationExpandButton: Call setExpandedVisibility
51: 06-28 22:17:40.546  2377  2377 I TranNotificationExpandButton: Call setExpandedVisibility
52: 06-28 22:17:40.547  2377  2377 I TranNotificationExpandButton: Call setExpandedVisibility
53: 06-28 22:17:40.548  2377  2377 I TranNotificationExpandButton: Call setExpandedVisibility
54: 06-28 22:17:40.548  2377  2377 I TranNotificationExpandButton: Call setExpandedVisibility
55: 06-28 22:17:40.549  2377  2377 I TranNotificationExpandButton: Call setExpandedVisibility
56: 06-28 22:17:40.551  2377  2377 D ModeController: isSmartPanelState: setPackageName:, smartPanelState:false
57: 06-28 22:17:40.551  2377  2377 D ModeController: isSmartPanelState: setPackageName:, smartPanelState:false
58: 06-28 22:17:40.552  2377  2377 D ModeController: isSmartPanelState: setPackageName:, smartPanelState:false
59: 06-28 22:17:40.552  2377  2377 D ModeController: isSmartPanelState: setPackageName:, smartPanelState:false
60: 06-28 22:17:40.554  2377  2377 D ModeController: isSmartPanelState: setPackageName:, smartPanelState:false
61: 06-28 22:17:40.554  2377  2377 D ModeController: isSmartPanelState: setPackageName:, smartPanelState:false
62: 06-28 22:17:40.554  2377  2377 D ModeController: isSmartPanelState: setPackageName:, smartPanelState:false
63: 06-28 22:17:40.554  2377  2377 D ModeController: isSmartPanelState: setPackageName:, smartPanelState:false
64: 06-28 22:17:40.555  2377  2377 D ModeController: isSmartPanelState: setPackageName:, smartPanelState:false
65: 06-28 22:17:40.555  2377  2377 D ModeController: isSmartPanelState: setPackageName:, smartPanelState:false
66: 06-28 22:17:40.555  2377  2377 D ModeController: isSmartPanelState: setPackageName:, smartPanelState:false
67: 06-28 22:17:40.555  2377  2377 D ModeController: isSmartPanelState: setPackageName:, smartPanelState:false
68: 06-28 22:17:40.556  2377  2377 D ModeController: isSmartPanelState: setPackageName:, smartPanelState:false
69: 06-28 22:17:40.556  2377  2377 D ModeController: isSmartPanelState: setPackageName:, smartPanelState:false
70: 06-28 22:17:40.556  2377  2377 D ModeController: isSmartPanelState: setPackageName:, smartPanelState:false
71: 06-28 22:17:40.556  2377  2377 D ModeController: isSmartPanelState: setPackageName:, smartPanelState:false
72: 06-28 22:17:40.557  2377  2377 I SysUI(260310)_UserMonkeyUtils: isUserMonkey false 202063014 201983741
73: 06-28 22:17:40.561  1796  1913 I ActivityManager: isUserAMonkey mUserIsMonkey = false
74: 06-28 22:17:40.561  1796  1913 I ActivityTaskManager: isControllerAMonkey mController = null,mControllerIsAMonkey = true, mTrueTime = 2026-06-28 21:51:00.751, mFalseTime = null
75: 06-28 22:17:40.581  1032  1032 I BufferQueueProducer: [StatusBar#97](this:0xb40000744ea154e8,id:-1,api:0,p:-1,c:1032) queueBuffer: fps=1.04 dur=1930.84 max=1064.28 min=866.56
76: 06-28 22:17:40.594  1032  1032 I BufferQueueProducer: [VDS-studio.screen.sharing:0 SINK](this:0xb4000073be8db638,id:-1,api:1,p:1032,c:1032) queueBuffer: fps=1.04 dur=1930.72 max=1063.81 min=866.91
77: 06-28 22:17:40.596   937  1029 I hwcomposer: [HWCDisplay] [Display_0 (type:1)] fps:1.035948,dur:1930.60,max:1063.98,min:866.62  
78: 06-28 22:17:40.645   963  1017 I libPerfCtl: xgfGetFPS pid:2377 fps:-1
79: 06-28 22:17:40.645   963  1017 I AppThermalMode: [perfNotifyThermalState] hdl:0
80: 06-28 22:17:40.645   963  1017 I AppThermalMode: [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: -1,fg->pid:30923
81: 06-28 22:17:40.645   963  1017 I AppThermalMode: [perfNotifyThermalState] appThermalIdx -1:
82: 06-28 22:17:40.715  2377  2377 D ModeController: isSmartPanelState: setPackageName:, smartPanelState:false
83: 06-28 22:17:40.716  2377  2377 I SysUI(260310)_OverviewSysUiProxyService:  isEnabled mIsEnabled false mIsFoldExpanded true
84: 06-28 22:17:40.718  2377  2377 D SysUI(260310)_TrStackScrollerController: updateShowEmptyShadeView: noNotifications=false, visibleNotificationCount=52, mediaNotificationVisible=false
85: 06-28 22:17:40.719  2377  2377 I TranNotificationExpandButton: Call setExpandedVisibility
86: 06-28 22:17:40.720  2377  2377 I TranNotificationExpandButton: Call setExpandedVisibility
87: 06-28 22:17:40.721  2377  2377 I TranNotificationExpandButton: Call setExpandedVisibility
88: 06-28 22:17:40.721  2377  2377 I TranNotificationExpandButton: Call setExpandedVisibility
89: 06-28 22:17:40.722  2377  2377 I TranNotificationExpandButton: Call setExpandedVisibility
90: 06-28 22:17:40.722  2377  2377 I TranNotificationExpandButton: Call setExpandedVisibility
91: 06-28 22:17:40.723  2377  2377 I TranNotificationExpandButton: Call setExpandedVisibility
92: 06-28 22:17:40.723  2377  2377 I TranNotificationExpandButton: Call setExpandedVisibility
93: 06-28 22:17:40.724  2377  2377 I TranNotificationExpandButton: Call setExpandedVisibility
94: 06-28 22:17:40.724  2377  2377 I TranNotificationExpandButton: Call setExpandedVisibility
95: 06-28 22:17:40.725  2377  2377 I TranNotificationExpandButton: Call setExpandedVisibility
96: 06-28 22:17:40.725  2377  2453 D StatusBarIconView: unSupportMatrixIcon: key:0|com.talpa.hibrowser|936134645|null|10206 , isGrayscaleDrawable:false , isGrayscaleIcon:false
97: 06-28 22:17:40.725  2377  2377 I TranNotificationExpandButton: Call setExpandedVisibility
98: 06-28 22:17:40.726  2377  2377 I TranNotificationExpandButton: Call setExpandedVisibility
99: 06-28 22:17:40.726  2377  2377 I TranNotificationExpandButton: Call setExpandedVisibility
100: 06-28 22:17:40.727  2377  2377 I TranNotificationExpandButton: Call setExpandedVisibility
101: 06-28 22:17:40.727  2377  2377 I TranNotificationExpandButton: Call setExpandedVisibility
102: 06-28 22:17:40.728  2377  2470 D StatusBarIconView: unSupportMatrixIcon: key:0|com.talpa.hibrowser|936134645|null|10206 , isGrayscaleDrawable:false , isGrayscaleIcon:false
103: 06-28 22:17:40.728  2377  2377 I TranNotificationExpandButton: Call setExpandedVisibility
104: 06-28 22:17:40.728  2377  2377 I TranNotificationExpandButton: Call setExpandedVisibility
105: 06-28 22:17:40.729  2377  2377 I TranNotificationExpandButton: Call setExpandedVisibility
106: 06-28 22:17:40.730  2377  2377 D ModeController: isSmartPanelState: setPackageName:, smartPanelState:false
107: 06-28 22:17:40.730  2377  2377 D ModeController: isSmartPanelState: setPackageName:, smartPanelState:false
108: 06-28 22:17:40.731  2377  2377 D ModeController: isSmartPanelState: setPackageName:, smartPanelState:false
109: 06-28 22:17:40.731  2377  2377 D ModeController: isSmartPanelState: setPackageName:, smartPanelState:false
110: 06-28 22:17:40.733  2377  2377 D ModeController: isSmartPanelState: setPackageName:, smartPanelState:false
111: 06-28 22:17:40.733  2377  2377 D ModeController: isSmartPanelState: setPackageName:, smartPanelState:false
112: 06-28 22:17:40.734  2377  2377 D ModeController: isSmartPanelState: setPackageName:, smartPanelState:false
113: 06-28 22:17:40.734  2377  2377 D ModeController: isSmartPanelState: setPackageName:, smartPanelState:false
114: 06-28 22:17:40.734  2377  2377 D ModeController: isSmartPanelState: setPackageName:, smartPanelState:false
115: 06-28 22:17:40.734  2377  2377 D ModeController: isSmartPanelState: setPackageName:, smartPanelState:false
116: 06-28 22:17:40.735  2377  2377 D ModeController: isSmartPanelState: setPackageName:, smartPanelState:false
117: 06-28 22:17:40.735  2377  2377 D ModeController: isSmartPanelState: setPackageName:, smartPanelState:false
118: 06-28 22:17:40.735  2377  2377 D ModeController: isSmartPanelState: setPackageName:, smartPanelState:false
119: 06-28 22:17:40.735  2377  2377 D ModeController: isSmartPanelState: setPackageName:, smartPanelState:false
120: 06-28 22:17:40.736  2377  2377 D ModeController: isSmartPanelState: setPackageName:, smartPanelState:false
121: 06-28 22:17:40.736  2377  2377 D ModeController: isSmartPanelState: setPackageName:, smartPanelState:false
122: 06-28 22:17:40.738  2377  2377 D ModeController: isSmartPanelState: setPackageName:, smartPanelState:false
123: 06-28 22:17:40.739  2377  2757 D ModeController: isSmartPanelState: setPackageName:, smartPanelState:false
124: 06-28 22:17:40.739  2377  2757 D NotificationCompact$UIBuilder: create ui builder for android.app.Notification$Builder@560cb9a => com.transsion.notificationui.TranLocalNotificationUIBuilder@b5bcccb
125: 06-28 22:17:40.740  2377  2757 D SystemUINotificationLice: setThunderButtonVisibleNeeded Notification(channel=push_sdk_standard_channel shortcut=null contentView=com.talpa.hibrowser/0x7f0d0492 vibrate=null sound=null defaults=0 flags=ONLY_ALERT_ONCE|AUTO_CANCEL color=0x00000000 groupKey=com.talpa.hibrowser_harassment vis=PRIVATE)
126: 06-28 22:17:40.741  2377  2757 D SystemUINotificationLice: setThunderButtonVisibleNeeded Notification(channel=push_sdk_standard_channel shortcut=null contentView=com.talpa.hibrowser/0x7f0d0492 vibrate=null sound=null defaults=0 flags=ONLY_ALERT_ONCE|AUTO_CANCEL color=0x00000000 groupKey=com.talpa.hibrowser_harassment vis=PRIVATE)
127: 06-28 22:17:40.743  2377  2757 D SystemUINotificationLice: updateButtonVisibleIfNeeded Notification(channel=push_sdk_standard_channel shortcut=null contentView=com.talpa.hibrowser/0x7f0d0492 vibrate=null sound=null defaults=0 flags=ONLY_ALERT_ONCE|AUTO_CANCEL color=0x00000000 groupKey=com.talpa.hibrowser_harassment vis=PRIVATE)
128: 06-28 22:17:40.744  2377  2757 D SystemUINotificationLice: setThunderButtonVisibleNeeded Notification(channel=push_sdk_standard_channel shortcut=null contentView=com.talpa.hibrowser/0x7f0d0492 vibrate=null sound=null defaults=0 flags=ONLY_ALERT_ONCE|AUTO_CANCEL color=0x00000000 groupKey=com.talpa.hibrowser_harassment vis=PRIVATE)
129: 06-28 22:17:40.745  2377  2757 D SystemUINotificationLice: updateButtonVisibleIfNeeded Notification(channel=push_sdk_standard_channel shortcut=null contentView=com.talpa.hibrowser/0x7f0d0492 vibrate=null sound=null defaults=0 flags=ONLY_ALERT_ONCE|AUTO_CANCEL color=0x00000000 groupKey=com.talpa.hibrowser_harassment vis=PRIVATE)
130: 06-28 22:17:40.773  2377  2377 D TrNotificationHeaderViewWrapper: updateIcon: not support replace icon
131: 06-28 22:17:40.773  2377  2377 D TrNotificationHeaderViewWrapper: updateIcon: not support replace icon
132: 06-28 22:17:40.774  2377  2377 D ModeController: isSmartPanelState: setPackageName:, smartPanelState:false
133: 06-28 22:17:40.774  2377  2377 D game/all: updateBackgroundPublicIfGameMode: superGameHeadsUp mShouldPeek = false  isGameHeadsUp = false  mIsHeadsUp = false, isGameHeadsUpExtra = false
134: 06-28 22:17:40.774  2377  2377 D game/all: updateBackgroundPublicIfGameMode: this:0|com.talpa.hibrowser|936134645|null|10206
135: 06-28 22:17:40.774  2377  2377 D ModeController: isSmartPanelState: setPackageName:, smartPanelState:false
136: 06-28 22:17:40.779  2377  2377 I SysUI(260310)_OverviewSysUiProxyService:  isEnabled mIsEnabled false mIsFoldExpanded true
137: 06-28 22:17:40.781  2377  2377 D SysUI(260310)_TrStackScrollerController: updateShowEmptyShadeView: noNotifications=false, visibleNotificationCount=52, mediaNotificationVisible=false
138: 06-28 22:17:40.782  2377  2377 I TranNotificationExpandButton: Call setExpandedVisibility
139: 06-28 22:17:40.782  2377  2377 I TranNotificationExpandButton: Call setExpandedVisibility
140: 06-28 22:17:40.783  2377  2377 I TranNotificationExpandButton: Call setExpandedVisibility
141: 06-28 22:17:40.783  2377  2377 I TranNotificationExpandButton: Call setExpandedVisibility
142: 06-28 22:17:40.783  2377  2377 I TranNotificationExpandButton: Call setExpandedVisibility
143: 06-28 22:17:40.783  2377  2377 I TranNotificationExpandButton: Call setExpandedVisibility
144: 06-28 22:17:40.784  2377  2377 I TranNotificationExpandButton: Call setExpandedVisibility
145: 06-28 22:17:40.784  2377  2377 I TranNotificationExpandButton: Call setExpandedVisibility
146: 06-28 22:17:40.784  2377  2377 I TranNotificationExpandButton: Call setExpandedVisibility
147: 06-28 22:17:40.785  2377  2377 I TranNotificationExpandButton: Call setExpandedVisibility
148: 06-28 22:17:40.785  2377  2377 I TranNotificationExpandButton: Call setExpandedVisibility
149: 06-28 22:17:40.785  2377  2377 I TranNotificationExpandButton: Call setExpandedVisibility
150: 06-28 22:17:40.786  2377  2377 I TranNotificationExpandButton: Call setExpandedVisibility
151: 06-28 22:17:40.786  2377  2377 I TranNotificationExpandButton: Call setExpandedVisibility
152: 06-28 22:17:40.786  2377  2377 I TranNotificationExpandButton: Call setExpandedVisibility
153: 06-28 22:17:40.787  2377  2377 I TranNotificationExpandButton: Call setExpandedVisibility
154: 06-28 22:17:40.787  2377  2377 I TranNotificationExpandButton: Call setExpandedVisibility
155: 06-28 22:17:40.787  2377  2377 I TranNotificationExpandButton: Call setExpandedVisibility
```

### Context around log line 646
```text
621: 06-28 22:17:49.726  6420  6420 D BLab-PowerSaveProviderUtils: isPowerSaveModeReminderOn: 1
622: 06-28 22:17:49.726  2634  3228 I TranTele/TranPhoneInterfaceManager: [onReceive] action: android.intent.action.BATTERY_CHANGED
623: 06-28 22:17:49.728  1796  2411 I TranHBMManagerService: processValuesLocked normal temperature=376,Threshold=410
624: 06-28 22:17:49.728  1796  2411 I TranHBMComponentImpl: updateBatteryLevel:95
625: 06-28 22:17:49.728  1796  2411 D TranHBMManagerService: allowBatteryState = true, mAllowBatteryState = true
626: 06-28 22:17:49.728  1796  2411 D BatteryService: HealthInfoUpdate: HealthInfo:{.chargerAcOnline = false, .chargerUsbOnline = true, .chargerWirelessOnline = false, .maxChargingCurrent = 500000, .maxChargingVoltage = 5000000, .batteryStatus = 2, .batteryHealth = 2, .batteryPresent = true, .batteryLevel = 95, .batteryVoltage = 4360, .batteryTemperature = 376, .batteryCurrent = 198200, .batteryCycleCount = 1, .batteryFullCharge = 5000000, .batteryChargeCounter=4750000, .batteryTechnology = Li-ion, .batteryCapacityLevel = 4}
627: 06-28 22:17:49.729  6708  6708 I TranClouldConfigObserver: onReceive called: Intent.action = android.intent.action.BATTERY_CHANGED
628: 06-28 22:17:49.729  6708  6708 D TranClouldConfigObserver: [onReceive] action: android.intent.action.BATTERY_CHANGED
629: 06-28 22:17:49.729  6708  6708 D CallbackProxy: [onBatteryStateChanged]
630: 06-28 22:17:49.730  2377  2377 I ChargeAnima: TrSysChargeUtils-updateNativeCharge pumpstat Not fast charge}
631: 06-28 22:17:49.730  2377  2443 D PowerUI : can't show warning due to - plugged: true status unknown: false
632: 06-28 22:17:49.731  2634  3227 D EmergencyMsgController: powerPluggedIn: true level: 95 LowBatteryMode: false
633: 06-28 22:17:49.736  2634  3228 I TranTele/TranPhoneInterfaceManager: [onReceive] action: android.intent.action.BATTERY_CHANGED
634: 06-28 22:17:49.737  2634  3227 D EmergencyMsgController: powerPluggedIn: true level: 95 LowBatteryMode: false
635: 06-28 22:17:49.738  6420  6420 W BatteryLabPowerSaveUtils: isPowerSaveOpen: false
636: 06-28 22:17:49.738  6420  6420 D BatteryLabService: current level == 95, temperature == 376
637: 06-28 22:17:49.738  6420  6420 D BatteryLabService: funcNamepumpstat
638: 06-28 22:17:49.738  6420  6420 D BLab-SettingsProviderUtils: isUserSetupCompleteSdk = 1
639: 06-28 22:17:49.738  6420  6420 D BatteryLabService: system is charging
640: 06-28 22:17:49.738  6420  6420 D BLab-PowerSaveProviderUtils: isPowerSaveModeReminderOn: 1
641: 06-28 22:17:49.740  6708  6708 I TranClouldConfigObserver: onReceive called: Intent.action = android.intent.action.BATTERY_CHANGED
642: 06-28 22:17:49.740  6708  6708 D TranClouldConfigObserver: [onReceive] action: android.intent.action.BATTERY_CHANGED
643: 06-28 22:17:49.740  6708  6708 D CallbackProxy: [onBatteryStateChanged]
644: 06-28 22:17:49.747  2377  2472 D PowerUI : can't show warning due to - plugged: true status unknown: false
645: 06-28 22:17:49.748  2377  2377 I ChargeAnima: TrSysChargeUtils-updateNativeCharge pumpstat Not fast charge}
646: 06-28 22:17:49.771  1032  1032 I BufferQueueProducer: [StatusBar#97](this:0xb40000744ea154e8,id:-1,api:0,p:-1,c:1032) queueBuffer: fps=0.33 dur=9190.11 max=8957.17 min=49.78
647: 06-28 22:17:49.784  1032  1032 I BufferQueueProducer: [VDS-studio.screen.sharing:0 SINK](this:0xb4000073be8db638,id:-1,api:1,p:1032,c:1032) queueBuffer: fps=0.33 dur=9189.46 max=8958.27 min=52.10
648: 06-28 22:17:49.785   937  1029 I hwcomposer: [HWCDisplay] [Display_0 (type:1)] fps:0.326470,dur:9189.22,max:8958.20,min:52.34  
649: 06-28 22:17:49.858  1796  2042 I TranWifiSmartAssistantController: start current network monitor 
650: 06-28 22:17:49.859  1796  2042 I WifiService: getConnectionInfo uid=1000
651: 06-28 22:17:49.860  1796  2042 V WifiService: Clearing REDACT_FOR_LOCAL_MAC_ADDRESS for android(uid=1000)
652: 06-28 22:17:49.860  1796  2042 V WifiService: Clearing REDACT_FOR_NETWORK_SETTINGS for android(uid=1000)
653: 06-28 22:17:49.861  1796  2042 V WifiService: Clearing REDACT_FOR_ACCESS_FINE_LOCATION for android(uid=1000)
654: 06-28 22:17:49.861  1796  2042 I TranWifiSmartAssistantController: userIgnored :false isScoredCurrentNetwork :false
655: 06-28 22:17:49.862  1796  2042 I TranWifiSmartAssistantController: mCurrentNetwork :177 SSID :"TAUFIKKOPIBATOH@WIFI.ID"
656: 06-28 22:17:49.864  1796  2042 I WifiNetworkQuality: current rssi is sufficient
657: 06-28 22:17:49.865  1796  2042 I TranWifiSmartAssistantController: mNoCandidateCount : -1
658: 06-28 22:17:49.866  1796  2042 I TranWifiSmartAssistantController: ====>>rssi :-52
659: 06-28 22:17:49.914  1796  4743 D ActivityManager: getProcessesInErrorState callingUid=10452, CallingPid=26725
660: 06-28 22:17:50.022  1796  1825 E ApplicationHelper: Fail to get PackageManager
661: 06-28 22:17:50.023  1796  1825 E ApplicationHelper: Fail to get PackageManager
662: 06-28 22:17:50.023  1796  1825 E ApplicationHelper: Fail to get PackageManager
663: 06-28 22:17:50.028  1796  1825 E ApplicationHelper: Fail to get PackageManager
664: 06-28 22:17:50.029  1796  1825 E ApplicationHelper: Fail to get PackageManager
665: 06-28 22:17:50.029  1796  1825 E ApplicationHelper: Fail to get PackageManager
666: 06-28 22:17:50.038  1796  1825 E ApplicationHelper: Fail to get PackageManager
667: 06-28 22:17:50.038  1796  1825 E ApplicationHelper: Fail to get PackageManager
668: 06-28 22:17:50.038  1796  1825 E ApplicationHelper: Fail to get PackageManager
669: 06-28 22:17:50.047  1796  1825 E ApplicationHelper: Fail to get PackageManager
670: 06-28 22:17:50.047  1796  1825 E ApplicationHelper: Fail to get PackageManager
671: 06-28 22:17:50.047  1796  1825 E ApplicationHelper: Fail to get PackageManager
672: 06-28 22:17:50.055  1796  2353 I Hiber/nativeServiceClient: check binder uid=10271
673: 06-28 22:17:50.057  1796  2352 V Hiber/hiber: unfreeze from hiber: (2,-1,-1,-1,10271), rpcName: FROZEN_TRANS_PROC, code: 1, reason:transBinder
674: 06-28 22:17:50.071  1796  2352 W Hiber/stateManager: need check stop uid=10271 pkgName=com.whatsapp
675: 06-28 22:17:50.071  1796  2350 I Hiber/appStateMachine: uid=10271, pkg=com.whatsapp, transition from Frozen to Running, reason=transBinder
676: 06-28 22:17:50.071  1796  2350 I Hiber/appStateMachine: uid:10271 exit FrozenState
677: 06-28 22:17:50.071  1796  2352 I Hiber/stateManager: unfreeze uid: 10271 com.whatsapp pids:[3675]  reason:transBinder   cpninfo:TRANSACTION_1 costTime=13ms ,last freeze 1s ago
678: 06-28 22:17:50.072  1796  2351 I Hiber/proxyManager: up_service: 10271
679: 06-28 22:17:50.072  1796  2351 I Hiber/proxyManager: un_job: 10271
680: 06-28 22:17:50.072  1796  2976 D Hiber/proxyWakeLock: remove uid: 10271 wiht all pids from wakelockUidInfo list
681: 06-28 22:17:50.072  1796  2351 D Hiber/JobExtImpl: unProxyJobs leave, uid=10271 discard=true
682: 06-28 22:17:50.072  1796  2351 D Hiber/alarmManagerServiceExtImpl: unproxyAlarms leave, uid=10271, packageName=drop
683: 06-28 22:17:50.072  1796  2351 I Hiber/proxyManager: up_sensor: uid=10271, pkgName=com.whatsapp
684: 06-28 22:17:50.239  1796  1868 D BroadcastQueue: Hiber/broadcast restricted queue.uid=10258 action=BroadcastRecord{f88ea68 android.intent.action.BATTERY_CHANGED/u-1}
685: 06-28 22:17:50.240  1796  1868 D BroadcastQueue: Hiber/broadcast restricted queue.uid=10258 action=BroadcastRecord{f88ea68 android.intent.action.BATTERY_CHANGED/u-1}
686: 06-28 22:17:50.240  1796  1868 D BroadcastQueue: Hiber/broadcast restricted queue.uid=10258 action=BroadcastRecord{f88ea68 android.intent.action.BATTERY_CHANGED/u-1}
687: 06-28 22:17:50.241  1796  1868 D BroadcastQueue: Hiber/broadcast restricted queue.uid=10202 action=BroadcastRecord{f88ea68 android.intent.action.BATTERY_CHANGED/u-1}
688: 06-28 22:17:50.244  1796  1868 D BroadcastQueue: Hiber/broadcast restricted queue.uid=10124 action=BroadcastRecord{f88ea68 android.intent.action.BATTERY_CHANGED/u-1}
689: 06-28 22:17:50.246  1796  4725 W BroadcastQueue: Ignoring finishReceiverLocked; no active broadcast for BroadcastProcessQueue{169f7a2 26725:com.lemon.lvoverseas/u0a452}
690: 06-28 22:17:50.416  1796  4743 D ActivityManager: getProcessesInErrorState callingUid=10452, CallingPid=26725
691: 06-28 22:17:50.648   963  1017 I libPerfCtl: xgfGetFPS pid:2377 fps:-1
692: 06-28 22:17:50.648   963  1017 I AppThermalMode: [perfNotifyThermalState] hdl:0
693: 06-28 22:17:50.648   963  1017 I AppThermalMode: [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: -1,fg->pid:30923
694: 06-28 22:17:50.648   963  1017 I AppThermalMode: [perfNotifyThermalState] appThermalIdx -1:
695: 06-28 22:17:50.700  1796  2040 D TranWifiTputMonitor: WIFI: TX: 0 RX: 0 TOTAL = 0
696: 06-28 22:17:50.701  1796  2040 D TranWifiTputMonitor: High Tput: false, TOTAL TPUT: 0
697: 06-28 22:17:50.855  1796  1830 D AES     : AEEIOCTL_GET/SET_SF_STATE IOCTL,cmd= 1074294797, lParam=0. 
698: 06-28 22:17:50.855  1796  1830 D AES     : AEEIOCTL_RT_MON_Kick IOCTL,cmd= 2147774474, lParam=300. 
699: 06-28 22:17:50.919  1796  4743 D ActivityManager: getProcessesInErrorState callingUid=10452, CallingPid=26725
700: 06-28 22:17:51.007  4203  4385 D TriggerService: trigger service is running
701: 06-28 22:17:51.421  1796  4743 D ActivityManager: getProcessesInErrorState callingUid=10452, CallingPid=26725
702: 06-28 22:17:51.556  1796  2035 D WifiClientModeImpl[144517192:wlan0]: updateLinkLayerStatsRssiSpeedFrequencyCapabilities rssi=-51 TxLinkspeed=48 freq=5765 RxLinkSpeed=54
703: 06-28 22:17:51.557  1796  1825 E ApplicationHelper: Fail to get PackageManager
704: 06-28 22:17:51.557  1796  1825 E ApplicationHelper: Fail to get PackageManager
705: 06-28 22:17:51.558  1796  1825 E ApplicationHelper: Fail to get PackageManager
706: 06-28 22:17:51.562  1796  1825 E ApplicationHelper: Fail to get PackageManager
707: 06-28 22:17:51.562  1796  1825 E ApplicationHelper: Fail to get PackageManager
708: 06-28 22:17:51.562  1796  1825 E ApplicationHelper: Fail to get PackageManager
709: 06-28 22:17:51.566  1796  2035 D WifiClientModeImpl[144517192:wlan0]: reported txKbps 12000 rxKbps 60000
710: 06-28 22:17:51.566  1796  2035 D WifiDataStall: tx tput in kbps: 50000
711: 06-28 22:17:51.566  1796  2035 D WifiDataStall: rx tput in kbps: 50000
712: 06-28 22:17:51.566  1796  2035 V WifiConfigManager: Updating scan detail cache freq=5765 BSSID=ac:4a:56:28:fe:ee RSSI=-51 for "TAUFIKKOPIBATOH@WIFI.ID"NONE
713: 06-28 22:17:51.567  1796  2035 D WifiThroughputPredictor:  utilization (LLS) 15 isBluetoothConnected: false final utilization: 15
714: 06-28 22:17:51.567  1796  2035 D WifiThroughputPredictor:  BW: 0 RSSI: -51 Nss: 1 Mode: 1 symDur: 4000 snrDb 29 bitPerTone: 4500 rate: 54 throughput: 50
715: 06-28 22:17:51.567  1796  2035 D WifiThroughputPredictor:  utilization (LLS) 15 isBluetoothConnected: false final utilization: 15
716: 06-28 22:17:51.567  1796  2035 D WifiThroughputPredictor:  BW: 0 RSSI: -51 Nss: 1 Mode: 1 symDur: 4000 snrDb 29 bitPerTone: 4500 rate: 54 throughput: 50
717: 06-28 22:17:51.567  1796  2035 D WifiThroughputPredictor:  utilization (LLS) 15 isBluetoothConnected: false final utilization: 15
718: 06-28 22:17:51.567  1796  2035 D WifiThroughputPredictor:  BW: 0 RSSI: -51 Nss: 1 Mode: 1 symDur: 4000 snrDb 29 bitPerTone: 4500 rate: 54 throughput: 50
719: 06-28 22:17:51.567  1796  2035 D WifiThroughputPredictor:  utilization (LLS) 15 isBluetoothConnected: false final utilization: 15
720: 06-28 22:17:51.567  1796  2035 D WifiThroughputPredictor:  BW: 0 RSSI: -51 Nss: 1 Mode: 1 symDur: 4000 snrDb 29 bitPerTone: 4500 rate: 54 throughput: 50
721: 06-28 22:17:51.571  1796  2035 D WifiScoreCard: BSSID update SIGNAL_POLL ID: 942782235 SSID: "TAUFIKKOPIBATOH@WIFI.ID", BSSID: ac:4a:56:28:fe:ee, MAC: 5e:35:37:6c:b1:09, IP: /10.226.142.33, Security type: 0, Supplicant state: COMPLETED, Wi-Fi standard: legacy, RSSI: -51, Link speed: 48Mbps, Tx Link speed: 48Mbps, Max Supported Tx Link speed: 54Mbps, Calculated Tx : 0Mbps, Rx Link speed: 54Mbps, Max Supported Rx Link speed: 54Mbps, Calculated Rx : 0Mbps, Frequency: 5765MHz, Net ID: 141, Metered hint: false, score: 60, isUsable: true, CarrierMerged: false, SubscriptionId: -1, IsPrimary: 1, Trusted: true, Restricted: false, Ephemeral: false, OEM paid: false, OEM private: false, OSU AP: false, FQDN: <none>, Provider friendly name: <none>, Requesting package name: <none>"TAUFIKKOPIBATOH@WIFI.ID"openMLO Information: , Is TID-To-Link negotiation supported by the AP: false, AP MLD Address: <none>, AP MLO Link Id: <none>, AP MLO Affiliated links: <none>, Vendor Data: <none>
722: 06-28 22:17:51.571  2634  3228 I TranTele/TranPhoneInterfaceManager: [onReceive] action: android.net.wifi.RSSI_CHANGED
723: 06-28 22:17:51.571  1796  2035 D WifiScoreCard: txRate: 1 txSpeed: 48
724: 06-28 22:17:51.573  1796  2035 D WifiScoreCard: network update SIGNAL_POLL "TAUFIKKOPIBATOH@WIFI.ID" ID: 42486102 RSSI -51 txSpeed -1
725: 06-28 22:17:51.574  1796  2035 D WifiClientModeImpl[144517192:wlan0]:  ClientModeImpl$L2ConnectedState screen=on 41 0 "TAUFIKKOPIBATOH@WIFI.ID" ac:4a:56:28:fe:ee rssi=-51 f=5765 sc=60 link=48 tx=0.6, 0.0, 0.0 rx=1.0 bcn=0 [on:0 tx:0 rx:0 period:3031] from screen [on:0 period:13169537] score=60
726: 06-28 22:17:51.577  1796  2040 I WifiService: getConnectionInfo uid=1000
```

### Context around log line 904
```text
879: 06-28 22:17:54.618 10696 10911 D SystemNetworkMonitor: [AISpeech]Network capabilities changed: 177, capabilities: [ Transports: WIFI Capabilities: NOT_METERED&INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VPN&VALIDATED&NOT_ROAMING&FOREGROUND&NOT_CONGESTED&NOT_SUSPENDED&NOT_VCN_MANAGED&NOT_BANDWIDTH_CONSTRAINED LinkUpBandwidth>=12000Kbps LinkDnBandwidth>=60000Kbps TransportInfo: <SSID: <unknown ssid>, BSSID: 02:00:00:00:00:00, MAC: 02:00:00:00:00:00, IP: /10.226.142.33, Security type: 0, Supplicant state: COMPLETED, Wi-Fi standard: legacy, RSSI: -55, Link speed: 48Mbps, Tx Link speed: 48Mbps, Max Supported Tx Link speed: 54Mbps, Calculated Tx : 0Mbps, Rx Link speed: 6Mbps, Max Supported Rx Link speed: 54Mbps, Calculated Rx : 0Mbps, Frequency: 5765MHz, Net ID: -1, Metered hint: false, score: 60, isUsable: true, CarrierMerged: false, SubscriptionId: -1, IsPrimary: 1, Trusted: true, Restricted: false, Ephemeral: false, OEM paid: false, OEM private: false, OSU AP: false, FQDN: <none>, Provider friendly name: <none>, Requesting package name: <none><none>MLO Information: , Is TID-To-Link negotiation supported by the AP: false, AP MLD Address: <none>, AP MLO Link Id: <none>, AP MLO Affiliated links: <none>, Vendor Data: <none>> SignalStrength: -55 AdminUids: [10159] SSID: "TAUFIKKOPIBATOH@WIFI.ID" UnderlyingNetworks: Null]
880: 06-28 22:17:54.619 10696 10911 D WS_Ella-MAIN_83392955[1.1.0-202601081346]: [AISpeech]Network capabilities changed: NetworkInfo(status=CONNECTED, type=WIFI, isMetered=false, signalStrength=45),wss://api-ai-ireland.aibotplatform.com/gateway/1/audio-query?apikey=WmgAJtSi642yvC0STMM9sfT2FnVNbEOp
881: 06-28 22:17:54.620 10696 10911 D WS_T_Ella-MAIN_100962903[1.1.0-202601081346]: [AISpeech]Network capabilities changed: NetworkInfo(status=CONNECTED, type=WIFI, isMetered=false, signalStrength=45),wss://bus-ie.aibotplatform.com/ws/assistant/tts/text-to-speech
882: 06-28 22:17:54.620 10696 10911 D CompositeNetworkMonitor: [AISpeech]System network restored, type: WIFI, estimated quality: 0.7932499999999999
883: 06-28 22:17:54.620 10696 10911 D AI_CORE_SERVICE_: AI_ELLA_AppNetworkManager onCapabilitiesChanged 177 ,[ Transports: WIFI Capabilities: NOT_METERED&INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VPN&VALIDATED&NOT_ROAMING&FOREGROUND&NOT_CONGESTED&NOT_SUSPENDED&NOT_VCN_MANAGED&NOT_BANDWIDTH_CONSTRAINED LinkUpBandwidth>=12000Kbps LinkDnBandwidth>=60000Kbps TransportInfo: <SSID: <unknown ssid>, BSSID: 02:00:00:00:00:00, MAC: 02:00:00:00:00:00, IP: /10.226.142.33, Security type: 0, Supplicant state: COMPLETED, Wi-Fi standard: legacy, RSSI: -55, Link speed: 48Mbps, Tx Link speed: 48Mbps, Max Supported Tx Link speed: 54Mbps, Calculated Tx : 0Mbps, Rx Link speed: 6Mbps, Max Supported Rx Link speed: 54Mbps, Calculated Rx : 0Mbps, Frequency: 5765MHz, Net ID: -1, Metered hint: false, score: 60, isUsable: true, CarrierMerged: false, SubscriptionId: -1, IsPrimary: 1, Trusted: true, Restricted: false, Ephemeral: false, OEM paid: false, OEM private: false, OSU AP: false, FQDN: <none>, Provider friendly name: <none>, Requesting package name: <none><none>MLO Information: , Is TID-To-Link negotiation supported by the AP: false, AP MLD Address: <none>, AP MLO Link Id: <none>, AP MLO Affiliated links: <none>, Vendor Data: <none>> SignalStrength: -55 AdminUids: [10159] SSID: "TAUFIKKOPIBATOH@WIFI.ID" UnderlyingNetworks: Null]
884: 06-28 22:17:54.624 29515 29560 I WeatherPro: sendBroadcast isConnect = true
885: 06-28 22:17:54.628 23690 11997 I NearbyMediums: Wifi changed new SSID: "TAUFIKKOPIBATOH@WIFI.ID"
886: 06-28 22:17:54.629  1796  2046 D ConnectivityService: NetReassign [no changes] [c 1] [a 1] [i 2]
887: 06-28 22:17:54.629 23690 11997 I NearbyMediums: WifiLanConnectivityInfo is not changed, skip notify.
888: 06-28 22:17:54.641  1796  1825 E ApplicationHelper: Fail to get PackageManager
889: 06-28 22:17:54.641  1796  1825 E ApplicationHelper: Fail to get PackageManager
890: 06-28 22:17:54.642  1796  1825 E ApplicationHelper: Fail to get PackageManager
891: 06-28 22:17:54.646  1796  1825 E ApplicationHelper: Fail to get PackageManager
892: 06-28 22:17:54.646  1796  1825 E ApplicationHelper: Fail to get PackageManager
893: 06-28 22:17:54.646  1796  1825 E ApplicationHelper: Fail to get PackageManager
894: 06-28 22:17:54.649   963  1017 I libPerfCtl: xgfGetFPS pid:2377 fps:-1
895: 06-28 22:17:54.649   963  1017 I AppThermalMode: [perfNotifyThermalState] hdl:0
896: 06-28 22:17:54.649   963  1017 I AppThermalMode: [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: -1,fg->pid:30923
897: 06-28 22:17:54.649   963  1017 I AppThermalMode: [perfNotifyThermalState] appThermalIdx -1:
898: 06-28 22:17:54.653  1796  1825 E ApplicationHelper: Fail to get PackageManager
899: 06-28 22:17:54.653  1796  1825 E ApplicationHelper: Fail to get PackageManager
900: 06-28 22:17:54.654  1796  1825 E ApplicationHelper: Fail to get PackageManager
901: 06-28 22:17:54.662  1796  1825 E ApplicationHelper: Fail to get PackageManager
902: 06-28 22:17:54.662  1796  1825 E ApplicationHelper: Fail to get PackageManager
903: 06-28 22:17:54.662  1796  1825 E ApplicationHelper: Fail to get PackageManager
904: 06-28 22:17:54.716  1032  1079 I SurfaceFlinger: onHandleDestroyed: name=Surface(name=db76895 com.whatsapp/com.whatsapp.home.ui.HomeActivity)/@0x2ff86b9 - animation-leash of starting_reveal#19295, layerId=19295, parentId=0
905: 06-28 22:17:54.717  1032  1079 I SurfaceFlinger: onHandleDestroyed: name=ActivityRecord{e2c38a0 u0 com.whatsapp/.Main t47860}#19279, layerId=19279, parentId=0
906: 06-28 22:17:54.717  1032  1079 I SurfaceFlinger: onHandleDestroyed: name=ActivityRecord{d74b24a u0 com.whatsapp/.home.ui.HomeActivity t47860}#19287, layerId=19287, parentId=0
907: 06-28 22:17:54.717  1032  2002 I SurfaceFlinger: onHandleDestroyed: name=Task=47860#19278, layerId=19278, parentId=0
908: 06-28 22:17:54.733  1032  1032 I BufferQueueDebug: [Surface(name=db76895 com.whatsapp/com.whatsapp.home.ui.HomeActivity)/@0x2ff86b9 - animation-leash of starting_reveal#19295](this:0xb40000744e9dc5a8,id:-1,api:0,p:-1,c:1032) onDestructor()
909: 06-28 22:17:54.733  1032  1032 I BufferQueueDebug: [ActivityRecord{e2c38a0 u0 com.whatsapp/.Main t47860}#19279](this:0xb40000744eaa3b08,id:-1,api:0,p:-1,c:1032) onDestructor()
910: 06-28 22:17:54.733  1032  1032 I BufferQueueDebug: [ActivityRecord{d74b24a u0 com.whatsapp/.home.ui.HomeActivity t47860}#19287](this:0xb40000744eac02a8,id:-1,api:0,p:-1,c:1032) onDestructor()
911: 06-28 22:17:54.733  1032  1032 I BufferQueueDebug: [Task=47860#19278](this:0xb40000744eac3038,id:-1,api:0,p:-1,c:1032) onDestructor()
912: 06-28 22:17:54.746  1032  1032 I BufferQueueProducer: [VDS-studio.screen.sharing:0 SINK](this:0xb4000073be8db638,id:-1,api:1,p:1032,c:1032) queueBuffer: fps=0.40 dur=4962.25 max=4947.35 min=14.89
913: 06-28 22:17:54.747   937  1029 I hwcomposer: [HWCDisplay] [Display_0 (type:1)] fps:0.403025,dur:4962.47,max:4947.82,min:14.65  
914: 06-28 22:17:54.758  4978  5090 D BufferPoolAccessor2.0: bufferpool2 0xb4000079ab09a2b8 : 2(895 size) total buffers - 1(448 size) used buffers - 22663/67542 (recycle/alloc) - 46776/67541 (fetch/transfer)
915: 06-28 22:17:54.851  1796  1796 W NetworkTypeHelper: Failed to call buildTemplateCarrierMetered, java.lang.reflect.InvocationTargetException
916: 06-28 22:17:54.852  1796  1796 D NetworkStatusMonitor: getAllInterfaceNames network type is unknown
917: 06-28 22:17:54.853  1796  1796 W NetworkTypeHelper: Failed to call buildTemplateCarrierMetered, java.lang.reflect.InvocationTargetException
918: 06-28 22:17:54.854  1796  1796 D NetworkStatusMonitor: getAllInterfaceNames network type is unknown
919: 06-28 22:17:54.856  1796  1796 D NetworkStatusMonitor: getAllInterfaceNames network type is wifi
920: 06-28 22:17:54.857  1796  1796 D NetworkStatusMonitor: onNetworkTypeChanged wifi => wifi
921: 06-28 22:17:54.857  1796  1796 D NetworkStatusMonitor: getAllInterfaceNames network type is mobile
922: 06-28 22:17:54.939  1796  2838 D ActivityManager: getProcessesInErrorState callingUid=10452, CallingPid=26725
923: 06-28 22:17:55.011  4203  4385 D TriggerService: trigger service is running
924: 06-28 22:17:55.078  1796  2350 I Hiber/importantScene: isTrafficActive uid:10271 speed :0
925: 06-28 22:17:55.079  1796  2350 I Hiber/appStateMachine: uid:10271 enter FrozenState
926: 06-28 22:17:55.090  1796  2350 I Hiber/stateManager: freeze uid: 10271 com.whatsapp costTime=11ms ,last unfreeze 5s ago
927: 06-28 22:17:55.091  1796  2350 I Hiber/restrictionPolicy: uid:10271  pkgName:com.whatsapp isAllowedNet
928: 06-28 22:17:55.092  1796  2351 I Hiber/hiber: msg for start proxy frozen state
929: 06-28 22:17:55.092  1796  2351 D ActivityManager: Hiber try idle uid[10271] by hiber ,bgTime>0 ? false,isIdled before ? false ,isCurAllowListed ? false ,isProcStateBackground?false
930: 06-28 22:17:55.092  1796  2351 I Hiber/proxyManager: p_service: 10271
931: 06-28 22:17:55.092  1796  2351 I Hiber/proxyManager: p_job: 10271 pkgName=com.whatsapp which=2
932: 06-28 22:17:55.092  1796  2353 I Hiber/nativeServiceClient: watch app network uid=10271, persistent=0
933: 06-28 22:17:55.092  1796  2351 I Hiber/hiber: proxy alarm (uid=10271, pkgName=com.whatsapp)
934: 06-28 22:17:55.092  1796  2351 I Hiber/proxyManager: p_alarm: uid=10271, pkgName=com.whatsapp
935: 06-28 22:17:55.093  1796  2350 I Hiber/importantScene: widget: packageName=com.rlk.weathers
936: 06-28 22:17:55.093  1796  2350 I Hiber/appStateMachine: uid:10244, pkg=com.rlk.weathers  can't transition from R to F ,importantcase is : widget
937: 06-28 22:17:55.093  1796  2351 D Hiber/alarmManagerServiceExtImpl: proxyAlarms leave, uid=10271, packageName=com.whatsapp
938: 06-28 22:17:55.093  1796  2351 I Hiber/proxyManager: p_sensor: uid=10271, pkgName=com.whatsapp
939: 06-28 22:17:55.159  1352  1485 D ULogGuard: Monitoring: 14 threads, 0 requests, 0 time-bombs; 1 guards. ResetFlags = 0x7
940: 06-28 22:17:55.442  1796  2838 D ActivityManager: getProcessesInErrorState callingUid=10452, CallingPid=26725
941: 06-28 22:17:55.507 15859 15952 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
942: 06-28 22:17:55.624   927 13992 W AudioALSACaptureDataProviderNormal: readThread, latency_in_s,0.000001,0.021444,0.000607, totalTime 0.022052 > logTimeout 0.022000 TIMEOUT!!
943: 06-28 22:17:55.649   963  1017 I libPerfCtl: xgfGetFPS pid:2377 fps:-1
944: 06-28 22:17:55.650   963  1017 I AppThermalMode: [perfNotifyThermalState] hdl:0
945: 06-28 22:17:55.650   963  1017 I AppThermalMode: [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: -1,fg->pid:30923
946: 06-28 22:17:55.650   963  1017 I AppThermalMode: [perfNotifyThermalState] appThermalIdx -1:
947: 06-28 22:17:55.870  1796  2042 I TranWifiSmartAssistantController: start current network monitor 
948: 06-28 22:17:55.870  1796  2042 I WifiService: getConnectionInfo uid=1000
949: 06-28 22:17:55.870  1796  2042 V WifiService: Clearing REDACT_FOR_LOCAL_MAC_ADDRESS for android(uid=1000)
950: 06-28 22:17:55.870  1796  2042 V WifiService: Clearing REDACT_FOR_NETWORK_SETTINGS for android(uid=1000)
951: 06-28 22:17:55.871  1796  2042 V WifiService: Clearing REDACT_FOR_ACCESS_FINE_LOCATION for android(uid=1000)
952: 06-28 22:17:55.871  1796  2042 I TranWifiSmartAssistantController: userIgnored :false isScoredCurrentNetwork :false
953: 06-28 22:17:55.871  1796  2042 I TranWifiSmartAssistantController: mCurrentNetwork :177 SSID :"TAUFIKKOPIBATOH@WIFI.ID"
954: 06-28 22:17:55.872  1796  2042 I WifiNetworkQuality: current rssi is sufficient
955: 06-28 22:17:55.872  1796  2042 I TranWifiSmartAssistantController: mNoCandidateCount : -1
956: 06-28 22:17:55.872  1796  2042 I TranWifiSmartAssistantController: ====>>rssi :-55
957: 06-28 22:17:55.945  1796  2838 D ActivityManager: getProcessesInErrorState callingUid=10452, CallingPid=26725
958: 06-28 22:17:56.017  1796  2010 D EventHub: getevents BTN_TOUCH DOWN
959: 06-28 22:17:56.020   963   986 D AppFlingMode: [CheckAppFlingHint] 25 com.erbete.customer -1
960: 06-28 22:17:56.023 30923 30923 D TextSelection: onUseCache cache=false
961: 06-28 22:17:56.023  4596  4596 D TouchSliderConsumer: onInputEvent : ACTION_DOWN
962: 06-28 22:17:56.023  4596  4596 D TouchSliderConsumer: consumeTouchEvent : 842.875 1227.25 RectF(1035.0, 294.0, 1083.0, 660.0) 
963: 06-28 22:17:56.024   963  1018 E libPowerHal: [getCPUFreq] error cid:2, nClusterNum:2
964: 06-28 22:17:56.026  4428  4428 D TouchMonitorProxy: handleInputEvent MotionEvent:MotionEvent { action=ACTION_DOWN, actionButton=0, id[0]=0, x[0]=842.875, y[0]=1227.25, toolType[0]=TOOL_TYPE_FINGER, buttonState=0, classification=NONE, metaState=0, flags=0x0, edgeFlags=0x0, pointerCount=1, historySize=0, eventTime=85860183, downTime=85860183, deviceId=6, source=0x1002, displayId=0, eventId=173555377 }
965: 06-28 22:17:56.027   963  1060 I libPowerHal: [setClusterFreq] mtkpower@1.0-se: sysfs_freq set cpu freq: 1900000 1900000 2000000 2000000 
966: 06-28 22:17:56.027  1796  1898 D MagellanHandle: updateRefreshRateForSceneVsyncs what = 11
967: 06-28 22:17:56.027  1796  1898 I TranThermalBacklightCtrl: Brightness=0.077761404 AutoBackLight=true AmbientLux=9.768043 APTemp=39.777BatteryTemp = 37.5
968: 06-28 22:17:56.028  1796  1898 I TranThermalBacklightCtrl: current status=level_0 last status=level_0
969: 06-28 22:17:56.028  1796  1898 I DisplayPowerController2[0]: thermalLight brightnessState: 0.077761404 time: NaN
970: 06-28 22:17:56.028  1796  1898 D DisplayPowerController2[0]: animateScreenBrightness: target = 0.077761404, sdrTarget = 0.077761404, rate = 0.33333334, mShouldUpdateBrightnessSettingLater = false
971: 06-28 22:17:56.029  4428  4428 D ScreenCapControl: onFingerDown: 1227, 108, 120
972: 06-28 22:17:56.030  1796  1898 D DisplayPowerController2: caclDuration: currentBrightnessHlg=0.3365772, targetHlg=0.48299503, BACKLIGHT_200_LEVEL=0.04884005
973: 06-28 22:17:56.030  1796  1898 I TranHBMController[0]: hbm onBrightnessChanged brightness=0.077761404, sdrBrightness= 0.077761404,animate=true,duration=0.5,Inspire=false,isMaxBrightnessButApplimit=false
974: 06-28 22:17:56.031  1796  1898 V DisplayPowerController2[0]: Brightness [0.077761404] reason changing to: 'automatic', previous reason: 'automatic [ dim ]'.
975: 06-28 22:17:56.031  1796  1898 I DisplayPowerController2[0]: BrightnessEvent: disp=0, physDisp=local:0, displayState=ON, displayPolicy=BRIGHT, brt=0.077761404, initBrt=0.037761405, rcmdBrt=0.077761404, preBrt=0.18331158, lux=9.768043, preLux=55.23033, hbmMax=1.0, hbmMode=off, rbcStrength=50, thrmMax=1.0, powerFactor=1.0, wasShortTermModelActive=false, flags=, reason=automatic, autoBrightness=true, strategy=InvalidBrightnessStrategy, autoBrightnessMode=default
976: 06-28 22:17:56.031  1796  1898 V DisplayPowerController2[8]: Brightness [0.001960785] reason changing to: 'manual', previous reason: 'manual [ dim ]'.
977: 06-28 22:17:56.032  1796  1898 I DisplayPowerController2[8]: BrightnessEvent: disp=8, physDisp=virtual:com.android.shell,2000,studio.screen.sharing:0,6, displayState=ON, displayPolicy=BRIGHT, brt=0.001960785, initBrt=0.0, rcmdBrt=NaN, preBrt=NaN, lux=0.0, preLux=0.0, hbmMax=1.0, hbmMode=off, rbcStrength=-1, thrmMax=1.0, powerFactor=1.0, wasShortTermModelActive=false, flags=, reason=manual, autoBrightness=true, strategy=InvalidBrightnessStrategy, autoBrightnessMode=default
978: 06-28 22:17:56.032  1796  1827 D DisplayManagerService: Ignore redundant display event 0/4 to 10112/1300
979: 06-28 22:17:56.032  1796  1827 D DisplayManagerService: Ignore redundant display event 0/4 to 10416/10749
980: 06-28 22:17:56.032  1796  1827 D DisplayManagerService: Ignore redundant display event 0/4 to 10182/11204
981: 06-28 22:17:56.032  1796  1827 D DisplayManagerService: Ignore redundant display event 0/4 to 10204/14134
982: 06-28 22:17:56.032  1796  1827 D DisplayManagerService: Ignore redundant display event 0/4 to 10222/17937
983: 06-28 22:17:56.032  1796  1827 D DisplayManagerService: Ignore redundant display event 0/4 to 10258/22723
984: 06-28 22:17:56.032  1796  1827 D DisplayManagerService: Ignore redundant display event 0/4 to 10206/24650
```

### Context around log line 905
```text
880: 06-28 22:17:54.619 10696 10911 D WS_Ella-MAIN_83392955[1.1.0-202601081346]: [AISpeech]Network capabilities changed: NetworkInfo(status=CONNECTED, type=WIFI, isMetered=false, signalStrength=45),wss://api-ai-ireland.aibotplatform.com/gateway/1/audio-query?apikey=WmgAJtSi642yvC0STMM9sfT2FnVNbEOp
881: 06-28 22:17:54.620 10696 10911 D WS_T_Ella-MAIN_100962903[1.1.0-202601081346]: [AISpeech]Network capabilities changed: NetworkInfo(status=CONNECTED, type=WIFI, isMetered=false, signalStrength=45),wss://bus-ie.aibotplatform.com/ws/assistant/tts/text-to-speech
882: 06-28 22:17:54.620 10696 10911 D CompositeNetworkMonitor: [AISpeech]System network restored, type: WIFI, estimated quality: 0.7932499999999999
883: 06-28 22:17:54.620 10696 10911 D AI_CORE_SERVICE_: AI_ELLA_AppNetworkManager onCapabilitiesChanged 177 ,[ Transports: WIFI Capabilities: NOT_METERED&INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VPN&VALIDATED&NOT_ROAMING&FOREGROUND&NOT_CONGESTED&NOT_SUSPENDED&NOT_VCN_MANAGED&NOT_BANDWIDTH_CONSTRAINED LinkUpBandwidth>=12000Kbps LinkDnBandwidth>=60000Kbps TransportInfo: <SSID: <unknown ssid>, BSSID: 02:00:00:00:00:00, MAC: 02:00:00:00:00:00, IP: /10.226.142.33, Security type: 0, Supplicant state: COMPLETED, Wi-Fi standard: legacy, RSSI: -55, Link speed: 48Mbps, Tx Link speed: 48Mbps, Max Supported Tx Link speed: 54Mbps, Calculated Tx : 0Mbps, Rx Link speed: 6Mbps, Max Supported Rx Link speed: 54Mbps, Calculated Rx : 0Mbps, Frequency: 5765MHz, Net ID: -1, Metered hint: false, score: 60, isUsable: true, CarrierMerged: false, SubscriptionId: -1, IsPrimary: 1, Trusted: true, Restricted: false, Ephemeral: false, OEM paid: false, OEM private: false, OSU AP: false, FQDN: <none>, Provider friendly name: <none>, Requesting package name: <none><none>MLO Information: , Is TID-To-Link negotiation supported by the AP: false, AP MLD Address: <none>, AP MLO Link Id: <none>, AP MLO Affiliated links: <none>, Vendor Data: <none>> SignalStrength: -55 AdminUids: [10159] SSID: "TAUFIKKOPIBATOH@WIFI.ID" UnderlyingNetworks: Null]
884: 06-28 22:17:54.624 29515 29560 I WeatherPro: sendBroadcast isConnect = true
885: 06-28 22:17:54.628 23690 11997 I NearbyMediums: Wifi changed new SSID: "TAUFIKKOPIBATOH@WIFI.ID"
886: 06-28 22:17:54.629  1796  2046 D ConnectivityService: NetReassign [no changes] [c 1] [a 1] [i 2]
887: 06-28 22:17:54.629 23690 11997 I NearbyMediums: WifiLanConnectivityInfo is not changed, skip notify.
888: 06-28 22:17:54.641  1796  1825 E ApplicationHelper: Fail to get PackageManager
889: 06-28 22:17:54.641  1796  1825 E ApplicationHelper: Fail to get PackageManager
890: 06-28 22:17:54.642  1796  1825 E ApplicationHelper: Fail to get PackageManager
891: 06-28 22:17:54.646  1796  1825 E ApplicationHelper: Fail to get PackageManager
892: 06-28 22:17:54.646  1796  1825 E ApplicationHelper: Fail to get PackageManager
893: 06-28 22:17:54.646  1796  1825 E ApplicationHelper: Fail to get PackageManager
894: 06-28 22:17:54.649   963  1017 I libPerfCtl: xgfGetFPS pid:2377 fps:-1
895: 06-28 22:17:54.649   963  1017 I AppThermalMode: [perfNotifyThermalState] hdl:0
896: 06-28 22:17:54.649   963  1017 I AppThermalMode: [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: -1,fg->pid:30923
897: 06-28 22:17:54.649   963  1017 I AppThermalMode: [perfNotifyThermalState] appThermalIdx -1:
898: 06-28 22:17:54.653  1796  1825 E ApplicationHelper: Fail to get PackageManager
899: 06-28 22:17:54.653  1796  1825 E ApplicationHelper: Fail to get PackageManager
900: 06-28 22:17:54.654  1796  1825 E ApplicationHelper: Fail to get PackageManager
901: 06-28 22:17:54.662  1796  1825 E ApplicationHelper: Fail to get PackageManager
902: 06-28 22:17:54.662  1796  1825 E ApplicationHelper: Fail to get PackageManager
903: 06-28 22:17:54.662  1796  1825 E ApplicationHelper: Fail to get PackageManager
904: 06-28 22:17:54.716  1032  1079 I SurfaceFlinger: onHandleDestroyed: name=Surface(name=db76895 com.whatsapp/com.whatsapp.home.ui.HomeActivity)/@0x2ff86b9 - animation-leash of starting_reveal#19295, layerId=19295, parentId=0
905: 06-28 22:17:54.717  1032  1079 I SurfaceFlinger: onHandleDestroyed: name=ActivityRecord{e2c38a0 u0 com.whatsapp/.Main t47860}#19279, layerId=19279, parentId=0
906: 06-28 22:17:54.717  1032  1079 I SurfaceFlinger: onHandleDestroyed: name=ActivityRecord{d74b24a u0 com.whatsapp/.home.ui.HomeActivity t47860}#19287, layerId=19287, parentId=0
907: 06-28 22:17:54.717  1032  2002 I SurfaceFlinger: onHandleDestroyed: name=Task=47860#19278, layerId=19278, parentId=0
908: 06-28 22:17:54.733  1032  1032 I BufferQueueDebug: [Surface(name=db76895 com.whatsapp/com.whatsapp.home.ui.HomeActivity)/@0x2ff86b9 - animation-leash of starting_reveal#19295](this:0xb40000744e9dc5a8,id:-1,api:0,p:-1,c:1032) onDestructor()
909: 06-28 22:17:54.733  1032  1032 I BufferQueueDebug: [ActivityRecord{e2c38a0 u0 com.whatsapp/.Main t47860}#19279](this:0xb40000744eaa3b08,id:-1,api:0,p:-1,c:1032) onDestructor()
910: 06-28 22:17:54.733  1032  1032 I BufferQueueDebug: [ActivityRecord{d74b24a u0 com.whatsapp/.home.ui.HomeActivity t47860}#19287](this:0xb40000744eac02a8,id:-1,api:0,p:-1,c:1032) onDestructor()
911: 06-28 22:17:54.733  1032  1032 I BufferQueueDebug: [Task=47860#19278](this:0xb40000744eac3038,id:-1,api:0,p:-1,c:1032) onDestructor()
912: 06-28 22:17:54.746  1032  1032 I BufferQueueProducer: [VDS-studio.screen.sharing:0 SINK](this:0xb4000073be8db638,id:-1,api:1,p:1032,c:1032) queueBuffer: fps=0.40 dur=4962.25 max=4947.35 min=14.89
913: 06-28 22:17:54.747   937  1029 I hwcomposer: [HWCDisplay] [Display_0 (type:1)] fps:0.403025,dur:4962.47,max:4947.82,min:14.65  
914: 06-28 22:17:54.758  4978  5090 D BufferPoolAccessor2.0: bufferpool2 0xb4000079ab09a2b8 : 2(895 size) total buffers - 1(448 size) used buffers - 22663/67542 (recycle/alloc) - 46776/67541 (fetch/transfer)
915: 06-28 22:17:54.851  1796  1796 W NetworkTypeHelper: Failed to call buildTemplateCarrierMetered, java.lang.reflect.InvocationTargetException
916: 06-28 22:17:54.852  1796  1796 D NetworkStatusMonitor: getAllInterfaceNames network type is unknown
917: 06-28 22:17:54.853  1796  1796 W NetworkTypeHelper: Failed to call buildTemplateCarrierMetered, java.lang.reflect.InvocationTargetException
918: 06-28 22:17:54.854  1796  1796 D NetworkStatusMonitor: getAllInterfaceNames network type is unknown
919: 06-28 22:17:54.856  1796  1796 D NetworkStatusMonitor: getAllInterfaceNames network type is wifi
920: 06-28 22:17:54.857  1796  1796 D NetworkStatusMonitor: onNetworkTypeChanged wifi => wifi
921: 06-28 22:17:54.857  1796  1796 D NetworkStatusMonitor: getAllInterfaceNames network type is mobile
922: 06-28 22:17:54.939  1796  2838 D ActivityManager: getProcessesInErrorState callingUid=10452, CallingPid=26725
923: 06-28 22:17:55.011  4203  4385 D TriggerService: trigger service is running
924: 06-28 22:17:55.078  1796  2350 I Hiber/importantScene: isTrafficActive uid:10271 speed :0
925: 06-28 22:17:55.079  1796  2350 I Hiber/appStateMachine: uid:10271 enter FrozenState
926: 06-28 22:17:55.090  1796  2350 I Hiber/stateManager: freeze uid: 10271 com.whatsapp costTime=11ms ,last unfreeze 5s ago
927: 06-28 22:17:55.091  1796  2350 I Hiber/restrictionPolicy: uid:10271  pkgName:com.whatsapp isAllowedNet
928: 06-28 22:17:55.092  1796  2351 I Hiber/hiber: msg for start proxy frozen state
929: 06-28 22:17:55.092  1796  2351 D ActivityManager: Hiber try idle uid[10271] by hiber ,bgTime>0 ? false,isIdled before ? false ,isCurAllowListed ? false ,isProcStateBackground?false
930: 06-28 22:17:55.092  1796  2351 I Hiber/proxyManager: p_service: 10271
931: 06-28 22:17:55.092  1796  2351 I Hiber/proxyManager: p_job: 10271 pkgName=com.whatsapp which=2
932: 06-28 22:17:55.092  1796  2353 I Hiber/nativeServiceClient: watch app network uid=10271, persistent=0
933: 06-28 22:17:55.092  1796  2351 I Hiber/hiber: proxy alarm (uid=10271, pkgName=com.whatsapp)
934: 06-28 22:17:55.092  1796  2351 I Hiber/proxyManager: p_alarm: uid=10271, pkgName=com.whatsapp
935: 06-28 22:17:55.093  1796  2350 I Hiber/importantScene: widget: packageName=com.rlk.weathers
936: 06-28 22:17:55.093  1796  2350 I Hiber/appStateMachine: uid:10244, pkg=com.rlk.weathers  can't transition from R to F ,importantcase is : widget
937: 06-28 22:17:55.093  1796  2351 D Hiber/alarmManagerServiceExtImpl: proxyAlarms leave, uid=10271, packageName=com.whatsapp
938: 06-28 22:17:55.093  1796  2351 I Hiber/proxyManager: p_sensor: uid=10271, pkgName=com.whatsapp
939: 06-28 22:17:55.159  1352  1485 D ULogGuard: Monitoring: 14 threads, 0 requests, 0 time-bombs; 1 guards. ResetFlags = 0x7
940: 06-28 22:17:55.442  1796  2838 D ActivityManager: getProcessesInErrorState callingUid=10452, CallingPid=26725
941: 06-28 22:17:55.507 15859 15952 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
942: 06-28 22:17:55.624   927 13992 W AudioALSACaptureDataProviderNormal: readThread, latency_in_s,0.000001,0.021444,0.000607, totalTime 0.022052 > logTimeout 0.022000 TIMEOUT!!
943: 06-28 22:17:55.649   963  1017 I libPerfCtl: xgfGetFPS pid:2377 fps:-1
944: 06-28 22:17:55.650   963  1017 I AppThermalMode: [perfNotifyThermalState] hdl:0
945: 06-28 22:17:55.650   963  1017 I AppThermalMode: [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: -1,fg->pid:30923
946: 06-28 22:17:55.650   963  1017 I AppThermalMode: [perfNotifyThermalState] appThermalIdx -1:
947: 06-28 22:17:55.870  1796  2042 I TranWifiSmartAssistantController: start current network monitor 
948: 06-28 22:17:55.870  1796  2042 I WifiService: getConnectionInfo uid=1000
949: 06-28 22:17:55.870  1796  2042 V WifiService: Clearing REDACT_FOR_LOCAL_MAC_ADDRESS for android(uid=1000)
950: 06-28 22:17:55.870  1796  2042 V WifiService: Clearing REDACT_FOR_NETWORK_SETTINGS for android(uid=1000)
951: 06-28 22:17:55.871  1796  2042 V WifiService: Clearing REDACT_FOR_ACCESS_FINE_LOCATION for android(uid=1000)
952: 06-28 22:17:55.871  1796  2042 I TranWifiSmartAssistantController: userIgnored :false isScoredCurrentNetwork :false
953: 06-28 22:17:55.871  1796  2042 I TranWifiSmartAssistantController: mCurrentNetwork :177 SSID :"TAUFIKKOPIBATOH@WIFI.ID"
954: 06-28 22:17:55.872  1796  2042 I WifiNetworkQuality: current rssi is sufficient
955: 06-28 22:17:55.872  1796  2042 I TranWifiSmartAssistantController: mNoCandidateCount : -1
956: 06-28 22:17:55.872  1796  2042 I TranWifiSmartAssistantController: ====>>rssi :-55
957: 06-28 22:17:55.945  1796  2838 D ActivityManager: getProcessesInErrorState callingUid=10452, CallingPid=26725
958: 06-28 22:17:56.017  1796  2010 D EventHub: getevents BTN_TOUCH DOWN
959: 06-28 22:17:56.020   963   986 D AppFlingMode: [CheckAppFlingHint] 25 com.erbete.customer -1
960: 06-28 22:17:56.023 30923 30923 D TextSelection: onUseCache cache=false
961: 06-28 22:17:56.023  4596  4596 D TouchSliderConsumer: onInputEvent : ACTION_DOWN
962: 06-28 22:17:56.023  4596  4596 D TouchSliderConsumer: consumeTouchEvent : 842.875 1227.25 RectF(1035.0, 294.0, 1083.0, 660.0) 
963: 06-28 22:17:56.024   963  1018 E libPowerHal: [getCPUFreq] error cid:2, nClusterNum:2
964: 06-28 22:17:56.026  4428  4428 D TouchMonitorProxy: handleInputEvent MotionEvent:MotionEvent { action=ACTION_DOWN, actionButton=0, id[0]=0, x[0]=842.875, y[0]=1227.25, toolType[0]=TOOL_TYPE_FINGER, buttonState=0, classification=NONE, metaState=0, flags=0x0, edgeFlags=0x0, pointerCount=1, historySize=0, eventTime=85860183, downTime=85860183, deviceId=6, source=0x1002, displayId=0, eventId=173555377 }
965: 06-28 22:17:56.027   963  1060 I libPowerHal: [setClusterFreq] mtkpower@1.0-se: sysfs_freq set cpu freq: 1900000 1900000 2000000 2000000 
966: 06-28 22:17:56.027  1796  1898 D MagellanHandle: updateRefreshRateForSceneVsyncs what = 11
967: 06-28 22:17:56.027  1796  1898 I TranThermalBacklightCtrl: Brightness=0.077761404 AutoBackLight=true AmbientLux=9.768043 APTemp=39.777BatteryTemp = 37.5
968: 06-28 22:17:56.028  1796  1898 I TranThermalBacklightCtrl: current status=level_0 last status=level_0
969: 06-28 22:17:56.028  1796  1898 I DisplayPowerController2[0]: thermalLight brightnessState: 0.077761404 time: NaN
970: 06-28 22:17:56.028  1796  1898 D DisplayPowerController2[0]: animateScreenBrightness: target = 0.077761404, sdrTarget = 0.077761404, rate = 0.33333334, mShouldUpdateBrightnessSettingLater = false
971: 06-28 22:17:56.029  4428  4428 D ScreenCapControl: onFingerDown: 1227, 108, 120
972: 06-28 22:17:56.030  1796  1898 D DisplayPowerController2: caclDuration: currentBrightnessHlg=0.3365772, targetHlg=0.48299503, BACKLIGHT_200_LEVEL=0.04884005
973: 06-28 22:17:56.030  1796  1898 I TranHBMController[0]: hbm onBrightnessChanged brightness=0.077761404, sdrBrightness= 0.077761404,animate=true,duration=0.5,Inspire=false,isMaxBrightnessButApplimit=false
974: 06-28 22:17:56.031  1796  1898 V DisplayPowerController2[0]: Brightness [0.077761404] reason changing to: 'automatic', previous reason: 'automatic [ dim ]'.
975: 06-28 22:17:56.031  1796  1898 I DisplayPowerController2[0]: BrightnessEvent: disp=0, physDisp=local:0, displayState=ON, displayPolicy=BRIGHT, brt=0.077761404, initBrt=0.037761405, rcmdBrt=0.077761404, preBrt=0.18331158, lux=9.768043, preLux=55.23033, hbmMax=1.0, hbmMode=off, rbcStrength=50, thrmMax=1.0, powerFactor=1.0, wasShortTermModelActive=false, flags=, reason=automatic, autoBrightness=true, strategy=InvalidBrightnessStrategy, autoBrightnessMode=default
976: 06-28 22:17:56.031  1796  1898 V DisplayPowerController2[8]: Brightness [0.001960785] reason changing to: 'manual', previous reason: 'manual [ dim ]'.
977: 06-28 22:17:56.032  1796  1898 I DisplayPowerController2[8]: BrightnessEvent: disp=8, physDisp=virtual:com.android.shell,2000,studio.screen.sharing:0,6, displayState=ON, displayPolicy=BRIGHT, brt=0.001960785, initBrt=0.0, rcmdBrt=NaN, preBrt=NaN, lux=0.0, preLux=0.0, hbmMax=1.0, hbmMode=off, rbcStrength=-1, thrmMax=1.0, powerFactor=1.0, wasShortTermModelActive=false, flags=, reason=manual, autoBrightness=true, strategy=InvalidBrightnessStrategy, autoBrightnessMode=default
978: 06-28 22:17:56.032  1796  1827 D DisplayManagerService: Ignore redundant display event 0/4 to 10112/1300
979: 06-28 22:17:56.032  1796  1827 D DisplayManagerService: Ignore redundant display event 0/4 to 10416/10749
980: 06-28 22:17:56.032  1796  1827 D DisplayManagerService: Ignore redundant display event 0/4 to 10182/11204
981: 06-28 22:17:56.032  1796  1827 D DisplayManagerService: Ignore redundant display event 0/4 to 10204/14134
982: 06-28 22:17:56.032  1796  1827 D DisplayManagerService: Ignore redundant display event 0/4 to 10222/17937
983: 06-28 22:17:56.032  1796  1827 D DisplayManagerService: Ignore redundant display event 0/4 to 10258/22723
984: 06-28 22:17:56.032  1796  1827 D DisplayManagerService: Ignore redundant display event 0/4 to 10206/24650
985: 06-28 22:17:56.032  1796  1827 D DisplayManagerService: Ignore redundant display event 0/4 to 10153/26331
```

### Context around log line 906
```text
881: 06-28 22:17:54.620 10696 10911 D WS_T_Ella-MAIN_100962903[1.1.0-202601081346]: [AISpeech]Network capabilities changed: NetworkInfo(status=CONNECTED, type=WIFI, isMetered=false, signalStrength=45),wss://bus-ie.aibotplatform.com/ws/assistant/tts/text-to-speech
882: 06-28 22:17:54.620 10696 10911 D CompositeNetworkMonitor: [AISpeech]System network restored, type: WIFI, estimated quality: 0.7932499999999999
883: 06-28 22:17:54.620 10696 10911 D AI_CORE_SERVICE_: AI_ELLA_AppNetworkManager onCapabilitiesChanged 177 ,[ Transports: WIFI Capabilities: NOT_METERED&INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VPN&VALIDATED&NOT_ROAMING&FOREGROUND&NOT_CONGESTED&NOT_SUSPENDED&NOT_VCN_MANAGED&NOT_BANDWIDTH_CONSTRAINED LinkUpBandwidth>=12000Kbps LinkDnBandwidth>=60000Kbps TransportInfo: <SSID: <unknown ssid>, BSSID: 02:00:00:00:00:00, MAC: 02:00:00:00:00:00, IP: /10.226.142.33, Security type: 0, Supplicant state: COMPLETED, Wi-Fi standard: legacy, RSSI: -55, Link speed: 48Mbps, Tx Link speed: 48Mbps, Max Supported Tx Link speed: 54Mbps, Calculated Tx : 0Mbps, Rx Link speed: 6Mbps, Max Supported Rx Link speed: 54Mbps, Calculated Rx : 0Mbps, Frequency: 5765MHz, Net ID: -1, Metered hint: false, score: 60, isUsable: true, CarrierMerged: false, SubscriptionId: -1, IsPrimary: 1, Trusted: true, Restricted: false, Ephemeral: false, OEM paid: false, OEM private: false, OSU AP: false, FQDN: <none>, Provider friendly name: <none>, Requesting package name: <none><none>MLO Information: , Is TID-To-Link negotiation supported by the AP: false, AP MLD Address: <none>, AP MLO Link Id: <none>, AP MLO Affiliated links: <none>, Vendor Data: <none>> SignalStrength: -55 AdminUids: [10159] SSID: "TAUFIKKOPIBATOH@WIFI.ID" UnderlyingNetworks: Null]
884: 06-28 22:17:54.624 29515 29560 I WeatherPro: sendBroadcast isConnect = true
885: 06-28 22:17:54.628 23690 11997 I NearbyMediums: Wifi changed new SSID: "TAUFIKKOPIBATOH@WIFI.ID"
886: 06-28 22:17:54.629  1796  2046 D ConnectivityService: NetReassign [no changes] [c 1] [a 1] [i 2]
887: 06-28 22:17:54.629 23690 11997 I NearbyMediums: WifiLanConnectivityInfo is not changed, skip notify.
888: 06-28 22:17:54.641  1796  1825 E ApplicationHelper: Fail to get PackageManager
889: 06-28 22:17:54.641  1796  1825 E ApplicationHelper: Fail to get PackageManager
890: 06-28 22:17:54.642  1796  1825 E ApplicationHelper: Fail to get PackageManager
891: 06-28 22:17:54.646  1796  1825 E ApplicationHelper: Fail to get PackageManager
892: 06-28 22:17:54.646  1796  1825 E ApplicationHelper: Fail to get PackageManager
893: 06-28 22:17:54.646  1796  1825 E ApplicationHelper: Fail to get PackageManager
894: 06-28 22:17:54.649   963  1017 I libPerfCtl: xgfGetFPS pid:2377 fps:-1
895: 06-28 22:17:54.649   963  1017 I AppThermalMode: [perfNotifyThermalState] hdl:0
896: 06-28 22:17:54.649   963  1017 I AppThermalMode: [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: -1,fg->pid:30923
897: 06-28 22:17:54.649   963  1017 I AppThermalMode: [perfNotifyThermalState] appThermalIdx -1:
898: 06-28 22:17:54.653  1796  1825 E ApplicationHelper: Fail to get PackageManager
899: 06-28 22:17:54.653  1796  1825 E ApplicationHelper: Fail to get PackageManager
900: 06-28 22:17:54.654  1796  1825 E ApplicationHelper: Fail to get PackageManager
901: 06-28 22:17:54.662  1796  1825 E ApplicationHelper: Fail to get PackageManager
902: 06-28 22:17:54.662  1796  1825 E ApplicationHelper: Fail to get PackageManager
903: 06-28 22:17:54.662  1796  1825 E ApplicationHelper: Fail to get PackageManager
904: 06-28 22:17:54.716  1032  1079 I SurfaceFlinger: onHandleDestroyed: name=Surface(name=db76895 com.whatsapp/com.whatsapp.home.ui.HomeActivity)/@0x2ff86b9 - animation-leash of starting_reveal#19295, layerId=19295, parentId=0
905: 06-28 22:17:54.717  1032  1079 I SurfaceFlinger: onHandleDestroyed: name=ActivityRecord{e2c38a0 u0 com.whatsapp/.Main t47860}#19279, layerId=19279, parentId=0
906: 06-28 22:17:54.717  1032  1079 I SurfaceFlinger: onHandleDestroyed: name=ActivityRecord{d74b24a u0 com.whatsapp/.home.ui.HomeActivity t47860}#19287, layerId=19287, parentId=0
907: 06-28 22:17:54.717  1032  2002 I SurfaceFlinger: onHandleDestroyed: name=Task=47860#19278, layerId=19278, parentId=0
908: 06-28 22:17:54.733  1032  1032 I BufferQueueDebug: [Surface(name=db76895 com.whatsapp/com.whatsapp.home.ui.HomeActivity)/@0x2ff86b9 - animation-leash of starting_reveal#19295](this:0xb40000744e9dc5a8,id:-1,api:0,p:-1,c:1032) onDestructor()
909: 06-28 22:17:54.733  1032  1032 I BufferQueueDebug: [ActivityRecord{e2c38a0 u0 com.whatsapp/.Main t47860}#19279](this:0xb40000744eaa3b08,id:-1,api:0,p:-1,c:1032) onDestructor()
910: 06-28 22:17:54.733  1032  1032 I BufferQueueDebug: [ActivityRecord{d74b24a u0 com.whatsapp/.home.ui.HomeActivity t47860}#19287](this:0xb40000744eac02a8,id:-1,api:0,p:-1,c:1032) onDestructor()
911: 06-28 22:17:54.733  1032  1032 I BufferQueueDebug: [Task=47860#19278](this:0xb40000744eac3038,id:-1,api:0,p:-1,c:1032) onDestructor()
912: 06-28 22:17:54.746  1032  1032 I BufferQueueProducer: [VDS-studio.screen.sharing:0 SINK](this:0xb4000073be8db638,id:-1,api:1,p:1032,c:1032) queueBuffer: fps=0.40 dur=4962.25 max=4947.35 min=14.89
913: 06-28 22:17:54.747   937  1029 I hwcomposer: [HWCDisplay] [Display_0 (type:1)] fps:0.403025,dur:4962.47,max:4947.82,min:14.65  
914: 06-28 22:17:54.758  4978  5090 D BufferPoolAccessor2.0: bufferpool2 0xb4000079ab09a2b8 : 2(895 size) total buffers - 1(448 size) used buffers - 22663/67542 (recycle/alloc) - 46776/67541 (fetch/transfer)
915: 06-28 22:17:54.851  1796  1796 W NetworkTypeHelper: Failed to call buildTemplateCarrierMetered, java.lang.reflect.InvocationTargetException
916: 06-28 22:17:54.852  1796  1796 D NetworkStatusMonitor: getAllInterfaceNames network type is unknown
917: 06-28 22:17:54.853  1796  1796 W NetworkTypeHelper: Failed to call buildTemplateCarrierMetered, java.lang.reflect.InvocationTargetException
918: 06-28 22:17:54.854  1796  1796 D NetworkStatusMonitor: getAllInterfaceNames network type is unknown
919: 06-28 22:17:54.856  1796  1796 D NetworkStatusMonitor: getAllInterfaceNames network type is wifi
920: 06-28 22:17:54.857  1796  1796 D NetworkStatusMonitor: onNetworkTypeChanged wifi => wifi
921: 06-28 22:17:54.857  1796  1796 D NetworkStatusMonitor: getAllInterfaceNames network type is mobile
922: 06-28 22:17:54.939  1796  2838 D ActivityManager: getProcessesInErrorState callingUid=10452, CallingPid=26725
923: 06-28 22:17:55.011  4203  4385 D TriggerService: trigger service is running
924: 06-28 22:17:55.078  1796  2350 I Hiber/importantScene: isTrafficActive uid:10271 speed :0
925: 06-28 22:17:55.079  1796  2350 I Hiber/appStateMachine: uid:10271 enter FrozenState
926: 06-28 22:17:55.090  1796  2350 I Hiber/stateManager: freeze uid: 10271 com.whatsapp costTime=11ms ,last unfreeze 5s ago
927: 06-28 22:17:55.091  1796  2350 I Hiber/restrictionPolicy: uid:10271  pkgName:com.whatsapp isAllowedNet
928: 06-28 22:17:55.092  1796  2351 I Hiber/hiber: msg for start proxy frozen state
929: 06-28 22:17:55.092  1796  2351 D ActivityManager: Hiber try idle uid[10271] by hiber ,bgTime>0 ? false,isIdled before ? false ,isCurAllowListed ? false ,isProcStateBackground?false
930: 06-28 22:17:55.092  1796  2351 I Hiber/proxyManager: p_service: 10271
931: 06-28 22:17:55.092  1796  2351 I Hiber/proxyManager: p_job: 10271 pkgName=com.whatsapp which=2
932: 06-28 22:17:55.092  1796  2353 I Hiber/nativeServiceClient: watch app network uid=10271, persistent=0
933: 06-28 22:17:55.092  1796  2351 I Hiber/hiber: proxy alarm (uid=10271, pkgName=com.whatsapp)
934: 06-28 22:17:55.092  1796  2351 I Hiber/proxyManager: p_alarm: uid=10271, pkgName=com.whatsapp
935: 06-28 22:17:55.093  1796  2350 I Hiber/importantScene: widget: packageName=com.rlk.weathers
936: 06-28 22:17:55.093  1796  2350 I Hiber/appStateMachine: uid:10244, pkg=com.rlk.weathers  can't transition from R to F ,importantcase is : widget
937: 06-28 22:17:55.093  1796  2351 D Hiber/alarmManagerServiceExtImpl: proxyAlarms leave, uid=10271, packageName=com.whatsapp
938: 06-28 22:17:55.093  1796  2351 I Hiber/proxyManager: p_sensor: uid=10271, pkgName=com.whatsapp
939: 06-28 22:17:55.159  1352  1485 D ULogGuard: Monitoring: 14 threads, 0 requests, 0 time-bombs; 1 guards. ResetFlags = 0x7
940: 06-28 22:17:55.442  1796  2838 D ActivityManager: getProcessesInErrorState callingUid=10452, CallingPid=26725
941: 06-28 22:17:55.507 15859 15952 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
942: 06-28 22:17:55.624   927 13992 W AudioALSACaptureDataProviderNormal: readThread, latency_in_s,0.000001,0.021444,0.000607, totalTime 0.022052 > logTimeout 0.022000 TIMEOUT!!
943: 06-28 22:17:55.649   963  1017 I libPerfCtl: xgfGetFPS pid:2377 fps:-1
944: 06-28 22:17:55.650   963  1017 I AppThermalMode: [perfNotifyThermalState] hdl:0
945: 06-28 22:17:55.650   963  1017 I AppThermalMode: [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: -1,fg->pid:30923
946: 06-28 22:17:55.650   963  1017 I AppThermalMode: [perfNotifyThermalState] appThermalIdx -1:
947: 06-28 22:17:55.870  1796  2042 I TranWifiSmartAssistantController: start current network monitor 
948: 06-28 22:17:55.870  1796  2042 I WifiService: getConnectionInfo uid=1000
949: 06-28 22:17:55.870  1796  2042 V WifiService: Clearing REDACT_FOR_LOCAL_MAC_ADDRESS for android(uid=1000)
950: 06-28 22:17:55.870  1796  2042 V WifiService: Clearing REDACT_FOR_NETWORK_SETTINGS for android(uid=1000)
951: 06-28 22:17:55.871  1796  2042 V WifiService: Clearing REDACT_FOR_ACCESS_FINE_LOCATION for android(uid=1000)
952: 06-28 22:17:55.871  1796  2042 I TranWifiSmartAssistantController: userIgnored :false isScoredCurrentNetwork :false
953: 06-28 22:17:55.871  1796  2042 I TranWifiSmartAssistantController: mCurrentNetwork :177 SSID :"TAUFIKKOPIBATOH@WIFI.ID"
954: 06-28 22:17:55.872  1796  2042 I WifiNetworkQuality: current rssi is sufficient
955: 06-28 22:17:55.872  1796  2042 I TranWifiSmartAssistantController: mNoCandidateCount : -1
956: 06-28 22:17:55.872  1796  2042 I TranWifiSmartAssistantController: ====>>rssi :-55
957: 06-28 22:17:55.945  1796  2838 D ActivityManager: getProcessesInErrorState callingUid=10452, CallingPid=26725
958: 06-28 22:17:56.017  1796  2010 D EventHub: getevents BTN_TOUCH DOWN
959: 06-28 22:17:56.020   963   986 D AppFlingMode: [CheckAppFlingHint] 25 com.erbete.customer -1
960: 06-28 22:17:56.023 30923 30923 D TextSelection: onUseCache cache=false
961: 06-28 22:17:56.023  4596  4596 D TouchSliderConsumer: onInputEvent : ACTION_DOWN
962: 06-28 22:17:56.023  4596  4596 D TouchSliderConsumer: consumeTouchEvent : 842.875 1227.25 RectF(1035.0, 294.0, 1083.0, 660.0) 
963: 06-28 22:17:56.024   963  1018 E libPowerHal: [getCPUFreq] error cid:2, nClusterNum:2
964: 06-28 22:17:56.026  4428  4428 D TouchMonitorProxy: handleInputEvent MotionEvent:MotionEvent { action=ACTION_DOWN, actionButton=0, id[0]=0, x[0]=842.875, y[0]=1227.25, toolType[0]=TOOL_TYPE_FINGER, buttonState=0, classification=NONE, metaState=0, flags=0x0, edgeFlags=0x0, pointerCount=1, historySize=0, eventTime=85860183, downTime=85860183, deviceId=6, source=0x1002, displayId=0, eventId=173555377 }
965: 06-28 22:17:56.027   963  1060 I libPowerHal: [setClusterFreq] mtkpower@1.0-se: sysfs_freq set cpu freq: 1900000 1900000 2000000 2000000 
966: 06-28 22:17:56.027  1796  1898 D MagellanHandle: updateRefreshRateForSceneVsyncs what = 11
967: 06-28 22:17:56.027  1796  1898 I TranThermalBacklightCtrl: Brightness=0.077761404 AutoBackLight=true AmbientLux=9.768043 APTemp=39.777BatteryTemp = 37.5
968: 06-28 22:17:56.028  1796  1898 I TranThermalBacklightCtrl: current status=level_0 last status=level_0
969: 06-28 22:17:56.028  1796  1898 I DisplayPowerController2[0]: thermalLight brightnessState: 0.077761404 time: NaN
970: 06-28 22:17:56.028  1796  1898 D DisplayPowerController2[0]: animateScreenBrightness: target = 0.077761404, sdrTarget = 0.077761404, rate = 0.33333334, mShouldUpdateBrightnessSettingLater = false
971: 06-28 22:17:56.029  4428  4428 D ScreenCapControl: onFingerDown: 1227, 108, 120
972: 06-28 22:17:56.030  1796  1898 D DisplayPowerController2: caclDuration: currentBrightnessHlg=0.3365772, targetHlg=0.48299503, BACKLIGHT_200_LEVEL=0.04884005
973: 06-28 22:17:56.030  1796  1898 I TranHBMController[0]: hbm onBrightnessChanged brightness=0.077761404, sdrBrightness= 0.077761404,animate=true,duration=0.5,Inspire=false,isMaxBrightnessButApplimit=false
974: 06-28 22:17:56.031  1796  1898 V DisplayPowerController2[0]: Brightness [0.077761404] reason changing to: 'automatic', previous reason: 'automatic [ dim ]'.
975: 06-28 22:17:56.031  1796  1898 I DisplayPowerController2[0]: BrightnessEvent: disp=0, physDisp=local:0, displayState=ON, displayPolicy=BRIGHT, brt=0.077761404, initBrt=0.037761405, rcmdBrt=0.077761404, preBrt=0.18331158, lux=9.768043, preLux=55.23033, hbmMax=1.0, hbmMode=off, rbcStrength=50, thrmMax=1.0, powerFactor=1.0, wasShortTermModelActive=false, flags=, reason=automatic, autoBrightness=true, strategy=InvalidBrightnessStrategy, autoBrightnessMode=default
976: 06-28 22:17:56.031  1796  1898 V DisplayPowerController2[8]: Brightness [0.001960785] reason changing to: 'manual', previous reason: 'manual [ dim ]'.
977: 06-28 22:17:56.032  1796  1898 I DisplayPowerController2[8]: BrightnessEvent: disp=8, physDisp=virtual:com.android.shell,2000,studio.screen.sharing:0,6, displayState=ON, displayPolicy=BRIGHT, brt=0.001960785, initBrt=0.0, rcmdBrt=NaN, preBrt=NaN, lux=0.0, preLux=0.0, hbmMax=1.0, hbmMode=off, rbcStrength=-1, thrmMax=1.0, powerFactor=1.0, wasShortTermModelActive=false, flags=, reason=manual, autoBrightness=true, strategy=InvalidBrightnessStrategy, autoBrightnessMode=default
978: 06-28 22:17:56.032  1796  1827 D DisplayManagerService: Ignore redundant display event 0/4 to 10112/1300
979: 06-28 22:17:56.032  1796  1827 D DisplayManagerService: Ignore redundant display event 0/4 to 10416/10749
980: 06-28 22:17:56.032  1796  1827 D DisplayManagerService: Ignore redundant display event 0/4 to 10182/11204
981: 06-28 22:17:56.032  1796  1827 D DisplayManagerService: Ignore redundant display event 0/4 to 10204/14134
982: 06-28 22:17:56.032  1796  1827 D DisplayManagerService: Ignore redundant display event 0/4 to 10222/17937
983: 06-28 22:17:56.032  1796  1827 D DisplayManagerService: Ignore redundant display event 0/4 to 10258/22723
984: 06-28 22:17:56.032  1796  1827 D DisplayManagerService: Ignore redundant display event 0/4 to 10206/24650
985: 06-28 22:17:56.032  1796  1827 D DisplayManagerService: Ignore redundant display event 0/4 to 10153/26331
986: 06-28 22:17:56.032  1796  1827 D DisplayManagerService: Ignore redundant display event 0/4 to 10215/26909
```

### Context around log line 907
```text
882: 06-28 22:17:54.620 10696 10911 D CompositeNetworkMonitor: [AISpeech]System network restored, type: WIFI, estimated quality: 0.7932499999999999
883: 06-28 22:17:54.620 10696 10911 D AI_CORE_SERVICE_: AI_ELLA_AppNetworkManager onCapabilitiesChanged 177 ,[ Transports: WIFI Capabilities: NOT_METERED&INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VPN&VALIDATED&NOT_ROAMING&FOREGROUND&NOT_CONGESTED&NOT_SUSPENDED&NOT_VCN_MANAGED&NOT_BANDWIDTH_CONSTRAINED LinkUpBandwidth>=12000Kbps LinkDnBandwidth>=60000Kbps TransportInfo: <SSID: <unknown ssid>, BSSID: 02:00:00:00:00:00, MAC: 02:00:00:00:00:00, IP: /10.226.142.33, Security type: 0, Supplicant state: COMPLETED, Wi-Fi standard: legacy, RSSI: -55, Link speed: 48Mbps, Tx Link speed: 48Mbps, Max Supported Tx Link speed: 54Mbps, Calculated Tx : 0Mbps, Rx Link speed: 6Mbps, Max Supported Rx Link speed: 54Mbps, Calculated Rx : 0Mbps, Frequency: 5765MHz, Net ID: -1, Metered hint: false, score: 60, isUsable: true, CarrierMerged: false, SubscriptionId: -1, IsPrimary: 1, Trusted: true, Restricted: false, Ephemeral: false, OEM paid: false, OEM private: false, OSU AP: false, FQDN: <none>, Provider friendly name: <none>, Requesting package name: <none><none>MLO Information: , Is TID-To-Link negotiation supported by the AP: false, AP MLD Address: <none>, AP MLO Link Id: <none>, AP MLO Affiliated links: <none>, Vendor Data: <none>> SignalStrength: -55 AdminUids: [10159] SSID: "TAUFIKKOPIBATOH@WIFI.ID" UnderlyingNetworks: Null]
884: 06-28 22:17:54.624 29515 29560 I WeatherPro: sendBroadcast isConnect = true
885: 06-28 22:17:54.628 23690 11997 I NearbyMediums: Wifi changed new SSID: "TAUFIKKOPIBATOH@WIFI.ID"
886: 06-28 22:17:54.629  1796  2046 D ConnectivityService: NetReassign [no changes] [c 1] [a 1] [i 2]
887: 06-28 22:17:54.629 23690 11997 I NearbyMediums: WifiLanConnectivityInfo is not changed, skip notify.
888: 06-28 22:17:54.641  1796  1825 E ApplicationHelper: Fail to get PackageManager
889: 06-28 22:17:54.641  1796  1825 E ApplicationHelper: Fail to get PackageManager
890: 06-28 22:17:54.642  1796  1825 E ApplicationHelper: Fail to get PackageManager
891: 06-28 22:17:54.646  1796  1825 E ApplicationHelper: Fail to get PackageManager
892: 06-28 22:17:54.646  1796  1825 E ApplicationHelper: Fail to get PackageManager
893: 06-28 22:17:54.646  1796  1825 E ApplicationHelper: Fail to get PackageManager
894: 06-28 22:17:54.649   963  1017 I libPerfCtl: xgfGetFPS pid:2377 fps:-1
895: 06-28 22:17:54.649   963  1017 I AppThermalMode: [perfNotifyThermalState] hdl:0
896: 06-28 22:17:54.649   963  1017 I AppThermalMode: [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: -1,fg->pid:30923
897: 06-28 22:17:54.649   963  1017 I AppThermalMode: [perfNotifyThermalState] appThermalIdx -1:
898: 06-28 22:17:54.653  1796  1825 E ApplicationHelper: Fail to get PackageManager
899: 06-28 22:17:54.653  1796  1825 E ApplicationHelper: Fail to get PackageManager
900: 06-28 22:17:54.654  1796  1825 E ApplicationHelper: Fail to get PackageManager
901: 06-28 22:17:54.662  1796  1825 E ApplicationHelper: Fail to get PackageManager
902: 06-28 22:17:54.662  1796  1825 E ApplicationHelper: Fail to get PackageManager
903: 06-28 22:17:54.662  1796  1825 E ApplicationHelper: Fail to get PackageManager
904: 06-28 22:17:54.716  1032  1079 I SurfaceFlinger: onHandleDestroyed: name=Surface(name=db76895 com.whatsapp/com.whatsapp.home.ui.HomeActivity)/@0x2ff86b9 - animation-leash of starting_reveal#19295, layerId=19295, parentId=0
905: 06-28 22:17:54.717  1032  1079 I SurfaceFlinger: onHandleDestroyed: name=ActivityRecord{e2c38a0 u0 com.whatsapp/.Main t47860}#19279, layerId=19279, parentId=0
906: 06-28 22:17:54.717  1032  1079 I SurfaceFlinger: onHandleDestroyed: name=ActivityRecord{d74b24a u0 com.whatsapp/.home.ui.HomeActivity t47860}#19287, layerId=19287, parentId=0
907: 06-28 22:17:54.717  1032  2002 I SurfaceFlinger: onHandleDestroyed: name=Task=47860#19278, layerId=19278, parentId=0
908: 06-28 22:17:54.733  1032  1032 I BufferQueueDebug: [Surface(name=db76895 com.whatsapp/com.whatsapp.home.ui.HomeActivity)/@0x2ff86b9 - animation-leash of starting_reveal#19295](this:0xb40000744e9dc5a8,id:-1,api:0,p:-1,c:1032) onDestructor()
909: 06-28 22:17:54.733  1032  1032 I BufferQueueDebug: [ActivityRecord{e2c38a0 u0 com.whatsapp/.Main t47860}#19279](this:0xb40000744eaa3b08,id:-1,api:0,p:-1,c:1032) onDestructor()
910: 06-28 22:17:54.733  1032  1032 I BufferQueueDebug: [ActivityRecord{d74b24a u0 com.whatsapp/.home.ui.HomeActivity t47860}#19287](this:0xb40000744eac02a8,id:-1,api:0,p:-1,c:1032) onDestructor()
911: 06-28 22:17:54.733  1032  1032 I BufferQueueDebug: [Task=47860#19278](this:0xb40000744eac3038,id:-1,api:0,p:-1,c:1032) onDestructor()
912: 06-28 22:17:54.746  1032  1032 I BufferQueueProducer: [VDS-studio.screen.sharing:0 SINK](this:0xb4000073be8db638,id:-1,api:1,p:1032,c:1032) queueBuffer: fps=0.40 dur=4962.25 max=4947.35 min=14.89
913: 06-28 22:17:54.747   937  1029 I hwcomposer: [HWCDisplay] [Display_0 (type:1)] fps:0.403025,dur:4962.47,max:4947.82,min:14.65  
914: 06-28 22:17:54.758  4978  5090 D BufferPoolAccessor2.0: bufferpool2 0xb4000079ab09a2b8 : 2(895 size) total buffers - 1(448 size) used buffers - 22663/67542 (recycle/alloc) - 46776/67541 (fetch/transfer)
915: 06-28 22:17:54.851  1796  1796 W NetworkTypeHelper: Failed to call buildTemplateCarrierMetered, java.lang.reflect.InvocationTargetException
916: 06-28 22:17:54.852  1796  1796 D NetworkStatusMonitor: getAllInterfaceNames network type is unknown
917: 06-28 22:17:54.853  1796  1796 W NetworkTypeHelper: Failed to call buildTemplateCarrierMetered, java.lang.reflect.InvocationTargetException
918: 06-28 22:17:54.854  1796  1796 D NetworkStatusMonitor: getAllInterfaceNames network type is unknown
919: 06-28 22:17:54.856  1796  1796 D NetworkStatusMonitor: getAllInterfaceNames network type is wifi
920: 06-28 22:17:54.857  1796  1796 D NetworkStatusMonitor: onNetworkTypeChanged wifi => wifi
921: 06-28 22:17:54.857  1796  1796 D NetworkStatusMonitor: getAllInterfaceNames network type is mobile
922: 06-28 22:17:54.939  1796  2838 D ActivityManager: getProcessesInErrorState callingUid=10452, CallingPid=26725
923: 06-28 22:17:55.011  4203  4385 D TriggerService: trigger service is running
924: 06-28 22:17:55.078  1796  2350 I Hiber/importantScene: isTrafficActive uid:10271 speed :0
925: 06-28 22:17:55.079  1796  2350 I Hiber/appStateMachine: uid:10271 enter FrozenState
926: 06-28 22:17:55.090  1796  2350 I Hiber/stateManager: freeze uid: 10271 com.whatsapp costTime=11ms ,last unfreeze 5s ago
927: 06-28 22:17:55.091  1796  2350 I Hiber/restrictionPolicy: uid:10271  pkgName:com.whatsapp isAllowedNet
928: 06-28 22:17:55.092  1796  2351 I Hiber/hiber: msg for start proxy frozen state
929: 06-28 22:17:55.092  1796  2351 D ActivityManager: Hiber try idle uid[10271] by hiber ,bgTime>0 ? false,isIdled before ? false ,isCurAllowListed ? false ,isProcStateBackground?false
930: 06-28 22:17:55.092  1796  2351 I Hiber/proxyManager: p_service: 10271
931: 06-28 22:17:55.092  1796  2351 I Hiber/proxyManager: p_job: 10271 pkgName=com.whatsapp which=2
932: 06-28 22:17:55.092  1796  2353 I Hiber/nativeServiceClient: watch app network uid=10271, persistent=0
933: 06-28 22:17:55.092  1796  2351 I Hiber/hiber: proxy alarm (uid=10271, pkgName=com.whatsapp)
934: 06-28 22:17:55.092  1796  2351 I Hiber/proxyManager: p_alarm: uid=10271, pkgName=com.whatsapp
935: 06-28 22:17:55.093  1796  2350 I Hiber/importantScene: widget: packageName=com.rlk.weathers
936: 06-28 22:17:55.093  1796  2350 I Hiber/appStateMachine: uid:10244, pkg=com.rlk.weathers  can't transition from R to F ,importantcase is : widget
937: 06-28 22:17:55.093  1796  2351 D Hiber/alarmManagerServiceExtImpl: proxyAlarms leave, uid=10271, packageName=com.whatsapp
938: 06-28 22:17:55.093  1796  2351 I Hiber/proxyManager: p_sensor: uid=10271, pkgName=com.whatsapp
939: 06-28 22:17:55.159  1352  1485 D ULogGuard: Monitoring: 14 threads, 0 requests, 0 time-bombs; 1 guards. ResetFlags = 0x7
940: 06-28 22:17:55.442  1796  2838 D ActivityManager: getProcessesInErrorState callingUid=10452, CallingPid=26725
941: 06-28 22:17:55.507 15859 15952 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
942: 06-28 22:17:55.624   927 13992 W AudioALSACaptureDataProviderNormal: readThread, latency_in_s,0.000001,0.021444,0.000607, totalTime 0.022052 > logTimeout 0.022000 TIMEOUT!!
943: 06-28 22:17:55.649   963  1017 I libPerfCtl: xgfGetFPS pid:2377 fps:-1
944: 06-28 22:17:55.650   963  1017 I AppThermalMode: [perfNotifyThermalState] hdl:0
945: 06-28 22:17:55.650   963  1017 I AppThermalMode: [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: -1,fg->pid:30923
946: 06-28 22:17:55.650   963  1017 I AppThermalMode: [perfNotifyThermalState] appThermalIdx -1:
947: 06-28 22:17:55.870  1796  2042 I TranWifiSmartAssistantController: start current network monitor 
948: 06-28 22:17:55.870  1796  2042 I WifiService: getConnectionInfo uid=1000
949: 06-28 22:17:55.870  1796  2042 V WifiService: Clearing REDACT_FOR_LOCAL_MAC_ADDRESS for android(uid=1000)
950: 06-28 22:17:55.870  1796  2042 V WifiService: Clearing REDACT_FOR_NETWORK_SETTINGS for android(uid=1000)
951: 06-28 22:17:55.871  1796  2042 V WifiService: Clearing REDACT_FOR_ACCESS_FINE_LOCATION for android(uid=1000)
952: 06-28 22:17:55.871  1796  2042 I TranWifiSmartAssistantController: userIgnored :false isScoredCurrentNetwork :false
953: 06-28 22:17:55.871  1796  2042 I TranWifiSmartAssistantController: mCurrentNetwork :177 SSID :"TAUFIKKOPIBATOH@WIFI.ID"
954: 06-28 22:17:55.872  1796  2042 I WifiNetworkQuality: current rssi is sufficient
955: 06-28 22:17:55.872  1796  2042 I TranWifiSmartAssistantController: mNoCandidateCount : -1
956: 06-28 22:17:55.872  1796  2042 I TranWifiSmartAssistantController: ====>>rssi :-55
957: 06-28 22:17:55.945  1796  2838 D ActivityManager: getProcessesInErrorState callingUid=10452, CallingPid=26725
958: 06-28 22:17:56.017  1796  2010 D EventHub: getevents BTN_TOUCH DOWN
959: 06-28 22:17:56.020   963   986 D AppFlingMode: [CheckAppFlingHint] 25 com.erbete.customer -1
960: 06-28 22:17:56.023 30923 30923 D TextSelection: onUseCache cache=false
961: 06-28 22:17:56.023  4596  4596 D TouchSliderConsumer: onInputEvent : ACTION_DOWN
962: 06-28 22:17:56.023  4596  4596 D TouchSliderConsumer: consumeTouchEvent : 842.875 1227.25 RectF(1035.0, 294.0, 1083.0, 660.0) 
963: 06-28 22:17:56.024   963  1018 E libPowerHal: [getCPUFreq] error cid:2, nClusterNum:2
964: 06-28 22:17:56.026  4428  4428 D TouchMonitorProxy: handleInputEvent MotionEvent:MotionEvent { action=ACTION_DOWN, actionButton=0, id[0]=0, x[0]=842.875, y[0]=1227.25, toolType[0]=TOOL_TYPE_FINGER, buttonState=0, classification=NONE, metaState=0, flags=0x0, edgeFlags=0x0, pointerCount=1, historySize=0, eventTime=85860183, downTime=85860183, deviceId=6, source=0x1002, displayId=0, eventId=173555377 }
965: 06-28 22:17:56.027   963  1060 I libPowerHal: [setClusterFreq] mtkpower@1.0-se: sysfs_freq set cpu freq: 1900000 1900000 2000000 2000000 
966: 06-28 22:17:56.027  1796  1898 D MagellanHandle: updateRefreshRateForSceneVsyncs what = 11
967: 06-28 22:17:56.027  1796  1898 I TranThermalBacklightCtrl: Brightness=0.077761404 AutoBackLight=true AmbientLux=9.768043 APTemp=39.777BatteryTemp = 37.5
968: 06-28 22:17:56.028  1796  1898 I TranThermalBacklightCtrl: current status=level_0 last status=level_0
969: 06-28 22:17:56.028  1796  1898 I DisplayPowerController2[0]: thermalLight brightnessState: 0.077761404 time: NaN
970: 06-28 22:17:56.028  1796  1898 D DisplayPowerController2[0]: animateScreenBrightness: target = 0.077761404, sdrTarget = 0.077761404, rate = 0.33333334, mShouldUpdateBrightnessSettingLater = false
971: 06-28 22:17:56.029  4428  4428 D ScreenCapControl: onFingerDown: 1227, 108, 120
972: 06-28 22:17:56.030  1796  1898 D DisplayPowerController2: caclDuration: currentBrightnessHlg=0.3365772, targetHlg=0.48299503, BACKLIGHT_200_LEVEL=0.04884005
973: 06-28 22:17:56.030  1796  1898 I TranHBMController[0]: hbm onBrightnessChanged brightness=0.077761404, sdrBrightness= 0.077761404,animate=true,duration=0.5,Inspire=false,isMaxBrightnessButApplimit=false
974: 06-28 22:17:56.031  1796  1898 V DisplayPowerController2[0]: Brightness [0.077761404] reason changing to: 'automatic', previous reason: 'automatic [ dim ]'.
975: 06-28 22:17:56.031  1796  1898 I DisplayPowerController2[0]: BrightnessEvent: disp=0, physDisp=local:0, displayState=ON, displayPolicy=BRIGHT, brt=0.077761404, initBrt=0.037761405, rcmdBrt=0.077761404, preBrt=0.18331158, lux=9.768043, preLux=55.23033, hbmMax=1.0, hbmMode=off, rbcStrength=50, thrmMax=1.0, powerFactor=1.0, wasShortTermModelActive=false, flags=, reason=automatic, autoBrightness=true, strategy=InvalidBrightnessStrategy, autoBrightnessMode=default
976: 06-28 22:17:56.031  1796  1898 V DisplayPowerController2[8]: Brightness [0.001960785] reason changing to: 'manual', previous reason: 'manual [ dim ]'.
977: 06-28 22:17:56.032  1796  1898 I DisplayPowerController2[8]: BrightnessEvent: disp=8, physDisp=virtual:com.android.shell,2000,studio.screen.sharing:0,6, displayState=ON, displayPolicy=BRIGHT, brt=0.001960785, initBrt=0.0, rcmdBrt=NaN, preBrt=NaN, lux=0.0, preLux=0.0, hbmMax=1.0, hbmMode=off, rbcStrength=-1, thrmMax=1.0, powerFactor=1.0, wasShortTermModelActive=false, flags=, reason=manual, autoBrightness=true, strategy=InvalidBrightnessStrategy, autoBrightnessMode=default
978: 06-28 22:17:56.032  1796  1827 D DisplayManagerService: Ignore redundant display event 0/4 to 10112/1300
979: 06-28 22:17:56.032  1796  1827 D DisplayManagerService: Ignore redundant display event 0/4 to 10416/10749
980: 06-28 22:17:56.032  1796  1827 D DisplayManagerService: Ignore redundant display event 0/4 to 10182/11204
981: 06-28 22:17:56.032  1796  1827 D DisplayManagerService: Ignore redundant display event 0/4 to 10204/14134
982: 06-28 22:17:56.032  1796  1827 D DisplayManagerService: Ignore redundant display event 0/4 to 10222/17937
983: 06-28 22:17:56.032  1796  1827 D DisplayManagerService: Ignore redundant display event 0/4 to 10258/22723
984: 06-28 22:17:56.032  1796  1827 D DisplayManagerService: Ignore redundant display event 0/4 to 10206/24650
985: 06-28 22:17:56.032  1796  1827 D DisplayManagerService: Ignore redundant display event 0/4 to 10153/26331
986: 06-28 22:17:56.032  1796  1827 D DisplayManagerService: Ignore redundant display event 0/4 to 10215/26909
987: 06-28 22:17:56.032  1796  1827 D DisplayManagerService: Ignore redundant display event 0/4 to 10202/27266
```

### Context around log line 908
```text
883: 06-28 22:17:54.620 10696 10911 D AI_CORE_SERVICE_: AI_ELLA_AppNetworkManager onCapabilitiesChanged 177 ,[ Transports: WIFI Capabilities: NOT_METERED&INTERNET&NOT_RESTRICTED&TRUSTED&NOT_VPN&VALIDATED&NOT_ROAMING&FOREGROUND&NOT_CONGESTED&NOT_SUSPENDED&NOT_VCN_MANAGED&NOT_BANDWIDTH_CONSTRAINED LinkUpBandwidth>=12000Kbps LinkDnBandwidth>=60000Kbps TransportInfo: <SSID: <unknown ssid>, BSSID: 02:00:00:00:00:00, MAC: 02:00:00:00:00:00, IP: /10.226.142.33, Security type: 0, Supplicant state: COMPLETED, Wi-Fi standard: legacy, RSSI: -55, Link speed: 48Mbps, Tx Link speed: 48Mbps, Max Supported Tx Link speed: 54Mbps, Calculated Tx : 0Mbps, Rx Link speed: 6Mbps, Max Supported Rx Link speed: 54Mbps, Calculated Rx : 0Mbps, Frequency: 5765MHz, Net ID: -1, Metered hint: false, score: 60, isUsable: true, CarrierMerged: false, SubscriptionId: -1, IsPrimary: 1, Trusted: true, Restricted: false, Ephemeral: false, OEM paid: false, OEM private: false, OSU AP: false, FQDN: <none>, Provider friendly name: <none>, Requesting package name: <none><none>MLO Information: , Is TID-To-Link negotiation supported by the AP: false, AP MLD Address: <none>, AP MLO Link Id: <none>, AP MLO Affiliated links: <none>, Vendor Data: <none>> SignalStrength: -55 AdminUids: [10159] SSID: "TAUFIKKOPIBATOH@WIFI.ID" UnderlyingNetworks: Null]
884: 06-28 22:17:54.624 29515 29560 I WeatherPro: sendBroadcast isConnect = true
885: 06-28 22:17:54.628 23690 11997 I NearbyMediums: Wifi changed new SSID: "TAUFIKKOPIBATOH@WIFI.ID"
886: 06-28 22:17:54.629  1796  2046 D ConnectivityService: NetReassign [no changes] [c 1] [a 1] [i 2]
887: 06-28 22:17:54.629 23690 11997 I NearbyMediums: WifiLanConnectivityInfo is not changed, skip notify.
888: 06-28 22:17:54.641  1796  1825 E ApplicationHelper: Fail to get PackageManager
889: 06-28 22:17:54.641  1796  1825 E ApplicationHelper: Fail to get PackageManager
890: 06-28 22:17:54.642  1796  1825 E ApplicationHelper: Fail to get PackageManager
891: 06-28 22:17:54.646  1796  1825 E ApplicationHelper: Fail to get PackageManager
892: 06-28 22:17:54.646  1796  1825 E ApplicationHelper: Fail to get PackageManager
893: 06-28 22:17:54.646  1796  1825 E ApplicationHelper: Fail to get PackageManager
894: 06-28 22:17:54.649   963  1017 I libPerfCtl: xgfGetFPS pid:2377 fps:-1
895: 06-28 22:17:54.649   963  1017 I AppThermalMode: [perfNotifyThermalState] hdl:0
896: 06-28 22:17:54.649   963  1017 I AppThermalMode: [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: -1,fg->pid:30923
897: 06-28 22:17:54.649   963  1017 I AppThermalMode: [perfNotifyThermalState] appThermalIdx -1:
898: 06-28 22:17:54.653  1796  1825 E ApplicationHelper: Fail to get PackageManager
899: 06-28 22:17:54.653  1796  1825 E ApplicationHelper: Fail to get PackageManager
900: 06-28 22:17:54.654  1796  1825 E ApplicationHelper: Fail to get PackageManager
901: 06-28 22:17:54.662  1796  1825 E ApplicationHelper: Fail to get PackageManager
902: 06-28 22:17:54.662  1796  1825 E ApplicationHelper: Fail to get PackageManager
903: 06-28 22:17:54.662  1796  1825 E ApplicationHelper: Fail to get PackageManager
904: 06-28 22:17:54.716  1032  1079 I SurfaceFlinger: onHandleDestroyed: name=Surface(name=db76895 com.whatsapp/com.whatsapp.home.ui.HomeActivity)/@0x2ff86b9 - animation-leash of starting_reveal#19295, layerId=19295, parentId=0
905: 06-28 22:17:54.717  1032  1079 I SurfaceFlinger: onHandleDestroyed: name=ActivityRecord{e2c38a0 u0 com.whatsapp/.Main t47860}#19279, layerId=19279, parentId=0
906: 06-28 22:17:54.717  1032  1079 I SurfaceFlinger: onHandleDestroyed: name=ActivityRecord{d74b24a u0 com.whatsapp/.home.ui.HomeActivity t47860}#19287, layerId=19287, parentId=0
907: 06-28 22:17:54.717  1032  2002 I SurfaceFlinger: onHandleDestroyed: name=Task=47860#19278, layerId=19278, parentId=0
908: 06-28 22:17:54.733  1032  1032 I BufferQueueDebug: [Surface(name=db76895 com.whatsapp/com.whatsapp.home.ui.HomeActivity)/@0x2ff86b9 - animation-leash of starting_reveal#19295](this:0xb40000744e9dc5a8,id:-1,api:0,p:-1,c:1032) onDestructor()
909: 06-28 22:17:54.733  1032  1032 I BufferQueueDebug: [ActivityRecord{e2c38a0 u0 com.whatsapp/.Main t47860}#19279](this:0xb40000744eaa3b08,id:-1,api:0,p:-1,c:1032) onDestructor()
910: 06-28 22:17:54.733  1032  1032 I BufferQueueDebug: [ActivityRecord{d74b24a u0 com.whatsapp/.home.ui.HomeActivity t47860}#19287](this:0xb40000744eac02a8,id:-1,api:0,p:-1,c:1032) onDestructor()
911: 06-28 22:17:54.733  1032  1032 I BufferQueueDebug: [Task=47860#19278](this:0xb40000744eac3038,id:-1,api:0,p:-1,c:1032) onDestructor()
912: 06-28 22:17:54.746  1032  1032 I BufferQueueProducer: [VDS-studio.screen.sharing:0 SINK](this:0xb4000073be8db638,id:-1,api:1,p:1032,c:1032) queueBuffer: fps=0.40 dur=4962.25 max=4947.35 min=14.89
913: 06-28 22:17:54.747   937  1029 I hwcomposer: [HWCDisplay] [Display_0 (type:1)] fps:0.403025,dur:4962.47,max:4947.82,min:14.65  
914: 06-28 22:17:54.758  4978  5090 D BufferPoolAccessor2.0: bufferpool2 0xb4000079ab09a2b8 : 2(895 size) total buffers - 1(448 size) used buffers - 22663/67542 (recycle/alloc) - 46776/67541 (fetch/transfer)
915: 06-28 22:17:54.851  1796  1796 W NetworkTypeHelper: Failed to call buildTemplateCarrierMetered, java.lang.reflect.InvocationTargetException
916: 06-28 22:17:54.852  1796  1796 D NetworkStatusMonitor: getAllInterfaceNames network type is unknown
917: 06-28 22:17:54.853  1796  1796 W NetworkTypeHelper: Failed to call buildTemplateCarrierMetered, java.lang.reflect.InvocationTargetException
918: 06-28 22:17:54.854  1796  1796 D NetworkStatusMonitor: getAllInterfaceNames network type is unknown
919: 06-28 22:17:54.856  1796  1796 D NetworkStatusMonitor: getAllInterfaceNames network type is wifi
920: 06-28 22:17:54.857  1796  1796 D NetworkStatusMonitor: onNetworkTypeChanged wifi => wifi
921: 06-28 22:17:54.857  1796  1796 D NetworkStatusMonitor: getAllInterfaceNames network type is mobile
922: 06-28 22:17:54.939  1796  2838 D ActivityManager: getProcessesInErrorState callingUid=10452, CallingPid=26725
923: 06-28 22:17:55.011  4203  4385 D TriggerService: trigger service is running
924: 06-28 22:17:55.078  1796  2350 I Hiber/importantScene: isTrafficActive uid:10271 speed :0
925: 06-28 22:17:55.079  1796  2350 I Hiber/appStateMachine: uid:10271 enter FrozenState
926: 06-28 22:17:55.090  1796  2350 I Hiber/stateManager: freeze uid: 10271 com.whatsapp costTime=11ms ,last unfreeze 5s ago
927: 06-28 22:17:55.091  1796  2350 I Hiber/restrictionPolicy: uid:10271  pkgName:com.whatsapp isAllowedNet
928: 06-28 22:17:55.092  1796  2351 I Hiber/hiber: msg for start proxy frozen state
929: 06-28 22:17:55.092  1796  2351 D ActivityManager: Hiber try idle uid[10271] by hiber ,bgTime>0 ? false,isIdled before ? false ,isCurAllowListed ? false ,isProcStateBackground?false
930: 06-28 22:17:55.092  1796  2351 I Hiber/proxyManager: p_service: 10271
931: 06-28 22:17:55.092  1796  2351 I Hiber/proxyManager: p_job: 10271 pkgName=com.whatsapp which=2
932: 06-28 22:17:55.092  1796  2353 I Hiber/nativeServiceClient: watch app network uid=10271, persistent=0
933: 06-28 22:17:55.092  1796  2351 I Hiber/hiber: proxy alarm (uid=10271, pkgName=com.whatsapp)
934: 06-28 22:17:55.092  1796  2351 I Hiber/proxyManager: p_alarm: uid=10271, pkgName=com.whatsapp
935: 06-28 22:17:55.093  1796  2350 I Hiber/importantScene: widget: packageName=com.rlk.weathers
936: 06-28 22:17:55.093  1796  2350 I Hiber/appStateMachine: uid:10244, pkg=com.rlk.weathers  can't transition from R to F ,importantcase is : widget
937: 06-28 22:17:55.093  1796  2351 D Hiber/alarmManagerServiceExtImpl: proxyAlarms leave, uid=10271, packageName=com.whatsapp
938: 06-28 22:17:55.093  1796  2351 I Hiber/proxyManager: p_sensor: uid=10271, pkgName=com.whatsapp
939: 06-28 22:17:55.159  1352  1485 D ULogGuard: Monitoring: 14 threads, 0 requests, 0 time-bombs; 1 guards. ResetFlags = 0x7
940: 06-28 22:17:55.442  1796  2838 D ActivityManager: getProcessesInErrorState callingUid=10452, CallingPid=26725
941: 06-28 22:17:55.507 15859 15952 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
942: 06-28 22:17:55.624   927 13992 W AudioALSACaptureDataProviderNormal: readThread, latency_in_s,0.000001,0.021444,0.000607, totalTime 0.022052 > logTimeout 0.022000 TIMEOUT!!
943: 06-28 22:17:55.649   963  1017 I libPerfCtl: xgfGetFPS pid:2377 fps:-1
944: 06-28 22:17:55.650   963  1017 I AppThermalMode: [perfNotifyThermalState] hdl:0
945: 06-28 22:17:55.650   963  1017 I AppThermalMode: [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: -1,fg->pid:30923
946: 06-28 22:17:55.650   963  1017 I AppThermalMode: [perfNotifyThermalState] appThermalIdx -1:
947: 06-28 22:17:55.870  1796  2042 I TranWifiSmartAssistantController: start current network monitor 
948: 06-28 22:17:55.870  1796  2042 I WifiService: getConnectionInfo uid=1000
949: 06-28 22:17:55.870  1796  2042 V WifiService: Clearing REDACT_FOR_LOCAL_MAC_ADDRESS for android(uid=1000)
950: 06-28 22:17:55.870  1796  2042 V WifiService: Clearing REDACT_FOR_NETWORK_SETTINGS for android(uid=1000)
951: 06-28 22:17:55.871  1796  2042 V WifiService: Clearing REDACT_FOR_ACCESS_FINE_LOCATION for android(uid=1000)
952: 06-28 22:17:55.871  1796  2042 I TranWifiSmartAssistantController: userIgnored :false isScoredCurrentNetwork :false
953: 06-28 22:17:55.871  1796  2042 I TranWifiSmartAssistantController: mCurrentNetwork :177 SSID :"TAUFIKKOPIBATOH@WIFI.ID"
954: 06-28 22:17:55.872  1796  2042 I WifiNetworkQuality: current rssi is sufficient
955: 06-28 22:17:55.872  1796  2042 I TranWifiSmartAssistantController: mNoCandidateCount : -1
956: 06-28 22:17:55.872  1796  2042 I TranWifiSmartAssistantController: ====>>rssi :-55
957: 06-28 22:17:55.945  1796  2838 D ActivityManager: getProcessesInErrorState callingUid=10452, CallingPid=26725
958: 06-28 22:17:56.017  1796  2010 D EventHub: getevents BTN_TOUCH DOWN
959: 06-28 22:17:56.020   963   986 D AppFlingMode: [CheckAppFlingHint] 25 com.erbete.customer -1
960: 06-28 22:17:56.023 30923 30923 D TextSelection: onUseCache cache=false
961: 06-28 22:17:56.023  4596  4596 D TouchSliderConsumer: onInputEvent : ACTION_DOWN
962: 06-28 22:17:56.023  4596  4596 D TouchSliderConsumer: consumeTouchEvent : 842.875 1227.25 RectF(1035.0, 294.0, 1083.0, 660.0) 
963: 06-28 22:17:56.024   963  1018 E libPowerHal: [getCPUFreq] error cid:2, nClusterNum:2
964: 06-28 22:17:56.026  4428  4428 D TouchMonitorProxy: handleInputEvent MotionEvent:MotionEvent { action=ACTION_DOWN, actionButton=0, id[0]=0, x[0]=842.875, y[0]=1227.25, toolType[0]=TOOL_TYPE_FINGER, buttonState=0, classification=NONE, metaState=0, flags=0x0, edgeFlags=0x0, pointerCount=1, historySize=0, eventTime=85860183, downTime=85860183, deviceId=6, source=0x1002, displayId=0, eventId=173555377 }
965: 06-28 22:17:56.027   963  1060 I libPowerHal: [setClusterFreq] mtkpower@1.0-se: sysfs_freq set cpu freq: 1900000 1900000 2000000 2000000 
966: 06-28 22:17:56.027  1796  1898 D MagellanHandle: updateRefreshRateForSceneVsyncs what = 11
967: 06-28 22:17:56.027  1796  1898 I TranThermalBacklightCtrl: Brightness=0.077761404 AutoBackLight=true AmbientLux=9.768043 APTemp=39.777BatteryTemp = 37.5
968: 06-28 22:17:56.028  1796  1898 I TranThermalBacklightCtrl: current status=level_0 last status=level_0
969: 06-28 22:17:56.028  1796  1898 I DisplayPowerController2[0]: thermalLight brightnessState: 0.077761404 time: NaN
970: 06-28 22:17:56.028  1796  1898 D DisplayPowerController2[0]: animateScreenBrightness: target = 0.077761404, sdrTarget = 0.077761404, rate = 0.33333334, mShouldUpdateBrightnessSettingLater = false
971: 06-28 22:17:56.029  4428  4428 D ScreenCapControl: onFingerDown: 1227, 108, 120
972: 06-28 22:17:56.030  1796  1898 D DisplayPowerController2: caclDuration: currentBrightnessHlg=0.3365772, targetHlg=0.48299503, BACKLIGHT_200_LEVEL=0.04884005
973: 06-28 22:17:56.030  1796  1898 I TranHBMController[0]: hbm onBrightnessChanged brightness=0.077761404, sdrBrightness= 0.077761404,animate=true,duration=0.5,Inspire=false,isMaxBrightnessButApplimit=false
974: 06-28 22:17:56.031  1796  1898 V DisplayPowerController2[0]: Brightness [0.077761404] reason changing to: 'automatic', previous reason: 'automatic [ dim ]'.
975: 06-28 22:17:56.031  1796  1898 I DisplayPowerController2[0]: BrightnessEvent: disp=0, physDisp=local:0, displayState=ON, displayPolicy=BRIGHT, brt=0.077761404, initBrt=0.037761405, rcmdBrt=0.077761404, preBrt=0.18331158, lux=9.768043, preLux=55.23033, hbmMax=1.0, hbmMode=off, rbcStrength=50, thrmMax=1.0, powerFactor=1.0, wasShortTermModelActive=false, flags=, reason=automatic, autoBrightness=true, strategy=InvalidBrightnessStrategy, autoBrightnessMode=default
976: 06-28 22:17:56.031  1796  1898 V DisplayPowerController2[8]: Brightness [0.001960785] reason changing to: 'manual', previous reason: 'manual [ dim ]'.
977: 06-28 22:17:56.032  1796  1898 I DisplayPowerController2[8]: BrightnessEvent: disp=8, physDisp=virtual:com.android.shell,2000,studio.screen.sharing:0,6, displayState=ON, displayPolicy=BRIGHT, brt=0.001960785, initBrt=0.0, rcmdBrt=NaN, preBrt=NaN, lux=0.0, preLux=0.0, hbmMax=1.0, hbmMode=off, rbcStrength=-1, thrmMax=1.0, powerFactor=1.0, wasShortTermModelActive=false, flags=, reason=manual, autoBrightness=true, strategy=InvalidBrightnessStrategy, autoBrightnessMode=default
978: 06-28 22:17:56.032  1796  1827 D DisplayManagerService: Ignore redundant display event 0/4 to 10112/1300
979: 06-28 22:17:56.032  1796  1827 D DisplayManagerService: Ignore redundant display event 0/4 to 10416/10749
980: 06-28 22:17:56.032  1796  1827 D DisplayManagerService: Ignore redundant display event 0/4 to 10182/11204
981: 06-28 22:17:56.032  1796  1827 D DisplayManagerService: Ignore redundant display event 0/4 to 10204/14134
982: 06-28 22:17:56.032  1796  1827 D DisplayManagerService: Ignore redundant display event 0/4 to 10222/17937
983: 06-28 22:17:56.032  1796  1827 D DisplayManagerService: Ignore redundant display event 0/4 to 10258/22723
984: 06-28 22:17:56.032  1796  1827 D DisplayManagerService: Ignore redundant display event 0/4 to 10206/24650
985: 06-28 22:17:56.032  1796  1827 D DisplayManagerService: Ignore redundant display event 0/4 to 10153/26331
986: 06-28 22:17:56.032  1796  1827 D DisplayManagerService: Ignore redundant display event 0/4 to 10215/26909
987: 06-28 22:17:56.032  1796  1827 D DisplayManagerService: Ignore redundant display event 0/4 to 10202/27266
988: 06-28 22:17:56.032  1796  1827 D DisplayManagerService: Ignore redundant display event 0/4 to 10124/30130
```

### Context around log line 909
```text
884: 06-28 22:17:54.624 29515 29560 I WeatherPro: sendBroadcast isConnect = true
885: 06-28 22:17:54.628 23690 11997 I NearbyMediums: Wifi changed new SSID: "TAUFIKKOPIBATOH@WIFI.ID"
886: 06-28 22:17:54.629  1796  2046 D ConnectivityService: NetReassign [no changes] [c 1] [a 1] [i 2]
887: 06-28 22:17:54.629 23690 11997 I NearbyMediums: WifiLanConnectivityInfo is not changed, skip notify.
888: 06-28 22:17:54.641  1796  1825 E ApplicationHelper: Fail to get PackageManager
889: 06-28 22:17:54.641  1796  1825 E ApplicationHelper: Fail to get PackageManager
890: 06-28 22:17:54.642  1796  1825 E ApplicationHelper: Fail to get PackageManager
891: 06-28 22:17:54.646  1796  1825 E ApplicationHelper: Fail to get PackageManager
892: 06-28 22:17:54.646  1796  1825 E ApplicationHelper: Fail to get PackageManager
893: 06-28 22:17:54.646  1796  1825 E ApplicationHelper: Fail to get PackageManager
894: 06-28 22:17:54.649   963  1017 I libPerfCtl: xgfGetFPS pid:2377 fps:-1
895: 06-28 22:17:54.649   963  1017 I AppThermalMode: [perfNotifyThermalState] hdl:0
896: 06-28 22:17:54.649   963  1017 I AppThermalMode: [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: -1,fg->pid:30923
897: 06-28 22:17:54.649   963  1017 I AppThermalMode: [perfNotifyThermalState] appThermalIdx -1:
898: 06-28 22:17:54.653  1796  1825 E ApplicationHelper: Fail to get PackageManager
899: 06-28 22:17:54.653  1796  1825 E ApplicationHelper: Fail to get PackageManager
900: 06-28 22:17:54.654  1796  1825 E ApplicationHelper: Fail to get PackageManager
901: 06-28 22:17:54.662  1796  1825 E ApplicationHelper: Fail to get PackageManager
902: 06-28 22:17:54.662  1796  1825 E ApplicationHelper: Fail to get PackageManager
903: 06-28 22:17:54.662  1796  1825 E ApplicationHelper: Fail to get PackageManager
904: 06-28 22:17:54.716  1032  1079 I SurfaceFlinger: onHandleDestroyed: name=Surface(name=db76895 com.whatsapp/com.whatsapp.home.ui.HomeActivity)/@0x2ff86b9 - animation-leash of starting_reveal#19295, layerId=19295, parentId=0
905: 06-28 22:17:54.717  1032  1079 I SurfaceFlinger: onHandleDestroyed: name=ActivityRecord{e2c38a0 u0 com.whatsapp/.Main t47860}#19279, layerId=19279, parentId=0
906: 06-28 22:17:54.717  1032  1079 I SurfaceFlinger: onHandleDestroyed: name=ActivityRecord{d74b24a u0 com.whatsapp/.home.ui.HomeActivity t47860}#19287, layerId=19287, parentId=0
907: 06-28 22:17:54.717  1032  2002 I SurfaceFlinger: onHandleDestroyed: name=Task=47860#19278, layerId=19278, parentId=0
908: 06-28 22:17:54.733  1032  1032 I BufferQueueDebug: [Surface(name=db76895 com.whatsapp/com.whatsapp.home.ui.HomeActivity)/@0x2ff86b9 - animation-leash of starting_reveal#19295](this:0xb40000744e9dc5a8,id:-1,api:0,p:-1,c:1032) onDestructor()
909: 06-28 22:17:54.733  1032  1032 I BufferQueueDebug: [ActivityRecord{e2c38a0 u0 com.whatsapp/.Main t47860}#19279](this:0xb40000744eaa3b08,id:-1,api:0,p:-1,c:1032) onDestructor()
910: 06-28 22:17:54.733  1032  1032 I BufferQueueDebug: [ActivityRecord{d74b24a u0 com.whatsapp/.home.ui.HomeActivity t47860}#19287](this:0xb40000744eac02a8,id:-1,api:0,p:-1,c:1032) onDestructor()
911: 06-28 22:17:54.733  1032  1032 I BufferQueueDebug: [Task=47860#19278](this:0xb40000744eac3038,id:-1,api:0,p:-1,c:1032) onDestructor()
912: 06-28 22:17:54.746  1032  1032 I BufferQueueProducer: [VDS-studio.screen.sharing:0 SINK](this:0xb4000073be8db638,id:-1,api:1,p:1032,c:1032) queueBuffer: fps=0.40 dur=4962.25 max=4947.35 min=14.89
913: 06-28 22:17:54.747   937  1029 I hwcomposer: [HWCDisplay] [Display_0 (type:1)] fps:0.403025,dur:4962.47,max:4947.82,min:14.65  
914: 06-28 22:17:54.758  4978  5090 D BufferPoolAccessor2.0: bufferpool2 0xb4000079ab09a2b8 : 2(895 size) total buffers - 1(448 size) used buffers - 22663/67542 (recycle/alloc) - 46776/67541 (fetch/transfer)
915: 06-28 22:17:54.851  1796  1796 W NetworkTypeHelper: Failed to call buildTemplateCarrierMetered, java.lang.reflect.InvocationTargetException
916: 06-28 22:17:54.852  1796  1796 D NetworkStatusMonitor: getAllInterfaceNames network type is unknown
917: 06-28 22:17:54.853  1796  1796 W NetworkTypeHelper: Failed to call buildTemplateCarrierMetered, java.lang.reflect.InvocationTargetException
918: 06-28 22:17:54.854  1796  1796 D NetworkStatusMonitor: getAllInterfaceNames network type is unknown
919: 06-28 22:17:54.856  1796  1796 D NetworkStatusMonitor: getAllInterfaceNames network type is wifi
920: 06-28 22:17:54.857  1796  1796 D NetworkStatusMonitor: onNetworkTypeChanged wifi => wifi
921: 06-28 22:17:54.857  1796  1796 D NetworkStatusMonitor: getAllInterfaceNames network type is mobile
922: 06-28 22:17:54.939  1796  2838 D ActivityManager: getProcessesInErrorState callingUid=10452, CallingPid=26725
923: 06-28 22:17:55.011  4203  4385 D TriggerService: trigger service is running
924: 06-28 22:17:55.078  1796  2350 I Hiber/importantScene: isTrafficActive uid:10271 speed :0
925: 06-28 22:17:55.079  1796  2350 I Hiber/appStateMachine: uid:10271 enter FrozenState
926: 06-28 22:17:55.090  1796  2350 I Hiber/stateManager: freeze uid: 10271 com.whatsapp costTime=11ms ,last unfreeze 5s ago
927: 06-28 22:17:55.091  1796  2350 I Hiber/restrictionPolicy: uid:10271  pkgName:com.whatsapp isAllowedNet
928: 06-28 22:17:55.092  1796  2351 I Hiber/hiber: msg for start proxy frozen state
929: 06-28 22:17:55.092  1796  2351 D ActivityManager: Hiber try idle uid[10271] by hiber ,bgTime>0 ? false,isIdled before ? false ,isCurAllowListed ? false ,isProcStateBackground?false
930: 06-28 22:17:55.092  1796  2351 I Hiber/proxyManager: p_service: 10271
931: 06-28 22:17:55.092  1796  2351 I Hiber/proxyManager: p_job: 10271 pkgName=com.whatsapp which=2
932: 06-28 22:17:55.092  1796  2353 I Hiber/nativeServiceClient: watch app network uid=10271, persistent=0
933: 06-28 22:17:55.092  1796  2351 I Hiber/hiber: proxy alarm (uid=10271, pkgName=com.whatsapp)
934: 06-28 22:17:55.092  1796  2351 I Hiber/proxyManager: p_alarm: uid=10271, pkgName=com.whatsapp
935: 06-28 22:17:55.093  1796  2350 I Hiber/importantScene: widget: packageName=com.rlk.weathers
936: 06-28 22:17:55.093  1796  2350 I Hiber/appStateMachine: uid:10244, pkg=com.rlk.weathers  can't transition from R to F ,importantcase is : widget
937: 06-28 22:17:55.093  1796  2351 D Hiber/alarmManagerServiceExtImpl: proxyAlarms leave, uid=10271, packageName=com.whatsapp
938: 06-28 22:17:55.093  1796  2351 I Hiber/proxyManager: p_sensor: uid=10271, pkgName=com.whatsapp
939: 06-28 22:17:55.159  1352  1485 D ULogGuard: Monitoring: 14 threads, 0 requests, 0 time-bombs; 1 guards. ResetFlags = 0x7
940: 06-28 22:17:55.442  1796  2838 D ActivityManager: getProcessesInErrorState callingUid=10452, CallingPid=26725
941: 06-28 22:17:55.507 15859 15952 W ProxyAndroidLoggerBackend: Too many Flogger logs received before configuration. Dropping old logs.
942: 06-28 22:17:55.624   927 13992 W AudioALSACaptureDataProviderNormal: readThread, latency_in_s,0.000001,0.021444,0.000607, totalTime 0.022052 > logTimeout 0.022000 TIMEOUT!!
943: 06-28 22:17:55.649   963  1017 I libPerfCtl: xgfGetFPS pid:2377 fps:-1
944: 06-28 22:17:55.650   963  1017 I AppThermalMode: [perfNotifyThermalState] hdl:0
945: 06-28 22:17:55.650   963  1017 I AppThermalMode: [findAppThermalIdx] Fail: appThermalModeEnable: 0,currentFPS: -1,fg->pid:30923
946: 06-28 22:17:55.650   963  1017 I AppThermalMode: [perfNotifyThermalState] appThermalIdx -1:
947: 06-28 22:17:55.870  1796  2042 I TranWifiSmartAssistantController: start current network monitor 
948: 06-28 22:17:55.870  1796  2042 I WifiService: getConnectionInfo uid=1000
949: 06-28 22:17:55.870  1796  2042 V WifiService: Clearing REDACT_FOR_LOCAL_MAC_ADDRESS for android(uid=1000)
950: 06-28 22:17:55.870  1796  2042 V WifiService: Clearing REDACT_FOR_NETWORK_SETTINGS for android(uid=1000)
951: 06-28 22:17:55.871  1796  2042 V WifiService: Clearing REDACT_FOR_ACCESS_FINE_LOCATION for android(uid=1000)
952: 06-28 22:17:55.871  1796  2042 I TranWifiSmartAssistantController: userIgnored :false isScoredCurrentNetwork :false
953: 06-28 22:17:55.871  1796  2042 I TranWifiSmartAssistantController: mCurrentNetwork :177 SSID :"TAUFIKKOPIBATOH@WIFI.ID"
954: 06-28 22:17:55.872  1796  2042 I WifiNetworkQuality: current rssi is sufficient
955: 06-28 22:17:55.872  1796  2042 I TranWifiSmartAssistantController: mNoCandidateCount : -1
956: 06-28 22:17:55.872  1796  2042 I TranWifiSmartAssistantController: ====>>rssi :-55
957: 06-28 22:17:55.945  1796  2838 D ActivityManager: getProcessesInErrorState callingUid=10452, CallingPid=26725
958: 06-28 22:17:56.017  1796  2010 D EventHub: getevents BTN_TOUCH DOWN
959: 06-28 22:17:56.020   963   986 D AppFlingMode: [CheckAppFlingHint] 25 com.erbete.customer -1
960: 06-28 22:17:56.023 30923 30923 D TextSelection: onUseCache cache=false
961: 06-28 22:17:56.023  4596  4596 D TouchSliderConsumer: onInputEvent : ACTION_DOWN
962: 06-28 22:17:56.023  4596  4596 D TouchSliderConsumer: consumeTouchEvent : 842.875 1227.25 RectF(1035.0, 294.0, 1083.0, 660.0) 
963: 06-28 22:17:56.024   963  1018 E libPowerHal: [getCPUFreq] error cid:2, nClusterNum:2
964: 06-28 22:17:56.026  4428  4428 D TouchMonitorProxy: handleInputEvent MotionEvent:MotionEvent { action=ACTION_DOWN, actionButton=0, id[0]=0, x[0]=842.875, y[0]=1227.25, toolType[0]=TOOL_TYPE_FINGER, buttonState=0, classification=NONE, metaState=0, flags=0x0, edgeFlags=0x0, pointerCount=1, historySize=0, eventTime=85860183, downTime=85860183, deviceId=6, source=0x1002, displayId=0, eventId=173555377 }
965: 06-28 22:17:56.027   963  1060 I libPowerHal: [setClusterFreq] mtkpower@1.0-se: sysfs_freq set cpu freq: 1900000 1900000 2000000 2000000 
966: 06-28 22:17:56.027  1796  1898 D MagellanHandle: updateRefreshRateForSceneVsyncs what = 11
967: 06-28 22:17:56.027  1796  1898 I TranThermalBacklightCtrl: Brightness=0.077761404 AutoBackLight=true AmbientLux=9.768043 APTemp=39.777BatteryTemp = 37.5
968: 06-28 22:17:56.028  1796  1898 I TranThermalBacklightCtrl: current status=level_0 last status=level_0
969: 06-28 22:17:56.028  1796  1898 I DisplayPowerController2[0]: thermalLight brightnessState: 0.077761404 time: NaN
970: 06-28 22:17:56.028  1796  1898 D DisplayPowerController2[0]: animateScreenBrightness: target = 0.077761404, sdrTarget = 0.077761404, rate = 0.33333334, mShouldUpdateBrightnessSettingLater = false
971: 06-28 22:17:56.029  4428  4428 D ScreenCapControl: onFingerDown: 1227, 108, 120
972: 06-28 22:17:56.030  1796  1898 D DisplayPowerController2: caclDuration: currentBrightnessHlg=0.3365772, targetHlg=0.48299503, BACKLIGHT_200_LEVEL=0.04884005
973: 06-28 22:17:56.030  1796  1898 I TranHBMController[0]: hbm onBrightnessChanged brightness=0.077761404, sdrBrightness= 0.077761404,animate=true,duration=0.5,Inspire=false,isMaxBrightnessButApplimit=false
974: 06-28 22:17:56.031  1796  1898 V DisplayPowerController2[0]: Brightness [0.077761404] reason changing to: 'automatic', previous reason: 'automatic [ dim ]'.
975: 06-28 22:17:56.031  1796  1898 I DisplayPowerController2[0]: BrightnessEvent: disp=0, physDisp=local:0, displayState=ON, displayPolicy=BRIGHT, brt=0.077761404, initBrt=0.037761405, rcmdBrt=0.077761404, preBrt=0.18331158, lux=9.768043, preLux=55.23033, hbmMax=1.0, hbmMode=off, rbcStrength=50, thrmMax=1.0, powerFactor=1.0, wasShortTermModelActive=false, flags=, reason=automatic, autoBrightness=true, strategy=InvalidBrightnessStrategy, autoBrightnessMode=default
976: 06-28 22:17:56.031  1796  1898 V DisplayPowerController2[8]: Brightness [0.001960785] reason changing to: 'manual', previous reason: 'manual [ dim ]'.
977: 06-28 22:17:56.032  1796  1898 I DisplayPowerController2[8]: BrightnessEvent: disp=8, physDisp=virtual:com.android.shell,2000,studio.screen.sharing:0,6, displayState=ON, displayPolicy=BRIGHT, brt=0.001960785, initBrt=0.0, rcmdBrt=NaN, preBrt=NaN, lux=0.0, preLux=0.0, hbmMax=1.0, hbmMode=off, rbcStrength=-1, thrmMax=1.0, powerFactor=1.0, wasShortTermModelActive=false, flags=, reason=manual, autoBrightness=true, strategy=InvalidBrightnessStrategy, autoBrightnessMode=default
978: 06-28 22:17:56.032  1796  1827 D DisplayManagerService: Ignore redundant display event 0/4 to 10112/1300
979: 06-28 22:17:56.032  1796  1827 D DisplayManagerService: Ignore redundant display event 0/4 to 10416/10749
980: 06-28 22:17:56.032  1796  1827 D DisplayManagerService: Ignore redundant display event 0/4 to 10182/11204
981: 06-28 22:17:56.032  1796  1827 D DisplayManagerService: Ignore redundant display event 0/4 to 10204/14134
982: 06-28 22:17:56.032  1796  1827 D DisplayManagerService: Ignore redundant display event 0/4 to 10222/17937
983: 06-28 22:17:56.032  1796  1827 D DisplayManagerService: Ignore redundant display event 0/4 to 10258/22723
984: 06-28 22:17:56.032  1796  1827 D DisplayManagerService: Ignore redundant display event 0/4 to 10206/24650
985: 06-28 22:17:56.032  1796  1827 D DisplayManagerService: Ignore redundant display event 0/4 to 10153/26331
986: 06-28 22:17:56.032  1796  1827 D DisplayManagerService: Ignore redundant display event 0/4 to 10215/26909
987: 06-28 22:17:56.032  1796  1827 D DisplayManagerService: Ignore redundant display event 0/4 to 10202/27266
988: 06-28 22:17:56.032  1796  1827 D DisplayManagerService: Ignore redundant display event 0/4 to 10124/30130
989: 06-28 22:17:56.032  1796  1827 D DisplayManagerService: Ignore redundant display event 0/4 to 10154/31235
```

## Source Search: JSON Decode / HTTP / API


### FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\constant\constant.dart
```dart
46:   static String jsonNotificationFileURL = '';
47:   static String appVersion = '';
48:   static String? country = "";
49:   static String? selectedMapType = "";
50:   static String? websiteUrl = '';
51:   static MailSettings? mailSettings;
52:   static bool isSubscriptionModelApplied = false;
53:   static CurrencyModel? currencyData;
54:   static SectionModel? sectionConstantModel;
55:   static geolocator.Position? currentLocation;
56: 
57:   static String cabServiceType = "cab-service";
58:   static String parcelServiceType = "parcel-service";
59: 
60:   static bool isZoneAvailable = false;
61:   static ZoneModel? selectedZone;
62:   static List<ZoneModel> zoneList = [];
63: 
64:   static PlatformFeeModel? platformFeeModel;
65: 
66:   static String? taxScope = '';
67:   static List<TaxModel>? taxProductList = []; //multivendor , e-commarce, ondemand
68:   static List<TaxModel>? orderProductTaxList = []; //multivendor , e-commarce, ondemand || parcel , rental , cabservice

49:   static String? selectedMapType = "";
50:   static String? websiteUrl = '';
51:   static MailSettings? mailSettings;
52:   static bool isSubscriptionModelApplied = false;
53:   static CurrencyModel? currencyData;
54:   static SectionModel? sectionConstantModel;
55:   static geolocator.Position? currentLocation;
56: 
57:   static String cabServiceType = "cab-service";
58:   static String parcelServiceType = "parcel-service";
59: 
60:   static bool isZoneAvailable = false;
61:   static ZoneModel? selectedZone;
62:   static List<ZoneModel> zoneList = [];
63: 
64:   static PlatformFeeModel? platformFeeModel;
65: 
66:   static String? taxScope = '';
67:   static List<TaxModel>? taxProductList = []; //multivendor , e-commarce, ondemand
68:   static List<TaxModel>? orderProductTaxList = []; //multivendor , e-commarce, ondemand || parcel , rental , cabservice
69:   static List<TaxModel>? driverDeliveryTaxList = []; //multivendor , e-commarce, ondemand
70:   static List<TaxModel>? packagingTaxList = []; //multivendor , e-commarce, ondemand
71:   static List<TaxModel>? platformTaxList = []; //multivendor , e-commarce, ondemand  || parcel , rental , cabservice

50:   static String? websiteUrl = '';
51:   static MailSettings? mailSettings;
52:   static bool isSubscriptionModelApplied = false;
53:   static CurrencyModel? currencyData;
54:   static SectionModel? sectionConstantModel;
55:   static geolocator.Position? currentLocation;
56: 
57:   static String cabServiceType = "cab-service";
58:   static String parcelServiceType = "parcel-service";
59: 
60:   static bool isZoneAvailable = false;
61:   static ZoneModel? selectedZone;
62:   static List<ZoneModel> zoneList = [];
63: 
64:   static PlatformFeeModel? platformFeeModel;
65: 
66:   static String? taxScope = '';
67:   static List<TaxModel>? taxProductList = []; //multivendor , e-commarce, ondemand
68:   static List<TaxModel>? orderProductTaxList = []; //multivendor , e-commarce, ondemand || parcel , rental , cabservice
69:   static List<TaxModel>? driverDeliveryTaxList = []; //multivendor , e-commarce, ondemand
70:   static List<TaxModel>? packagingTaxList = []; //multivendor , e-commarce, ondemand
71:   static List<TaxModel>? platformTaxList = []; //multivendor , e-commarce, ondemand  || parcel , rental , cabservice
72: 

100:   static String userRoleVendor = 'vendor';
101:   static String userRoleProvider = 'provider';
102:   static String userRoleWorker = 'worker';
103: 
104:   static ShippingAddress selectedLocation = ShippingAddress();
105:   static UserModel? userModel;
106:   static const globalUrl = "https://Replace_your_domain/";
107: 
108:   static String mapAPIKey = "";
109:   static String placeHolderImage = "";
110:   static String defaultCountryCode = "";
111: 
112:   static bool isCashbackActive = false;
113:   static bool isEnableOTPTripStart = false;
114:   static bool isEnableOTPTripStartForRental = false;
115: 
116:   static String distanceType = "km";
117: 
118:   static String googlePlayLink = "";
119:   static String appStoreLink = "";
120:   static String termsAndConditions = "";
121:   static String privacyPolicy = "";
122:   static String supportURL = "";

281:       return "${double.parse(amount.toString()).toStringAsFixed(currencyModel?.decimal ?? 0)} ${currencyModel!.symbol.toString()}";
282:     } else {
283:       return "${currencyModel!.symbol.toString()} ${amount == null || amount.isEmpty ? "0.0" : double.parse(amount.toString()).toStringAsFixed(currencyModel?.decimal ?? 0)}";
284:     }
285:   }
286: 
287:   static Color statusColor({required String? status}) {
288:     if (status == orderPlaced) {
289:       return AppThemeData.ecommerce300;
290:     } else if (status == orderAccepted || status == orderCompleted) {
291:       return AppThemeData.success400;
292:     } else if (status == orderRejected) {
293:       return AppThemeData.danger300;
294:     } else {
295:       return AppThemeData.warning300;
296:     }
297:   }
298: 
299:   static Color statusText({required String? status}) {
300:     if (status == orderPlaced) {
301:       return AppThemeData.grey50;
302:     } else if (status == orderAccepted || status == orderCompleted) {
303:       return AppThemeData.grey50;

545:   }
546: 
547:   static DateTime stringToDate(String openDineTime) {
548:     return DateFormat('HH:mm').parse(DateFormat('HH:mm').format(DateFormat("hh:mm a").parse((Intl.getCurrentLocale() == "en_US") ? openDineTime : openDineTime.toLowerCase())));
549:   }
550: 
551:   static LanguageModel getLanguage() {
552:     final String user = Preferences.getString(Preferences.languageCodeKey);
553:     Map<String, dynamic> userMap = jsonDecode(user);
554:     return LanguageModel.fromJson(userMap);
555:   }
556: 
557:   static String orderId({String orderId = ''}) {
558:     return "#$orderId";
559:     //return "#${(orderId).substring(orderId.length - 10)}";
560:   }
561: 
562:   static bool isPointInPolygon(LatLng point, List<GeoPoint> polygon) {
563:     int crossings = 0;
564:     for (int i = 0; i < polygon.length; i++) {
565:       int next = (i + 1) % polygon.length;
566:       if (polygon[i].latitude <= point.latitude && polygon[next].latitude > point.latitude || polygon[i].latitude > point.latitude && polygon[next].latitude <= point.latitude) {
567:         double edgeLong = polygon[next].longitude - polygon[i].longitude;

615:     //
616:     // // Send the first message
617:     // await connection.send(message);
618:   }
619: 
620:   static Uri createCoordinatesUrl(double latitude, double longitude, [String? label]) {
621:     Uri uri;
622:     if (kIsWeb) {
623:       uri = Uri.https('www.google.com', '/maps/search/', {'api': '1', 'query': '$latitude,$longitude'});
624:     } else if (Platform.isAndroid) {
625:       var query = '$latitude,$longitude';
626:       if (label != null) query += '($label)';
627:       uri = Uri(scheme: 'geo', host: '0,0', queryParameters: {'q': query});
628:     } else if (Platform.isIOS) {
629:       var params = {'ll': '$latitude,$longitude'};
630:       if (label != null) params['q'] = label;
631:       uri = Uri.https('maps.apple.com', '/', params);
632:     } else {
633:       uri = Uri.https('www.google.com', '/maps/search/', {'api': '1', 'query': '$latitude,$longitude'});
634:     }
635: 
636:     return uri;
637:   }

625:       var query = '$latitude,$longitude';
626:       if (label != null) query += '($label)';
627:       uri = Uri(scheme: 'geo', host: '0,0', queryParameters: {'q': query});
628:     } else if (Platform.isIOS) {
629:       var params = {'ll': '$latitude,$longitude'};
630:       if (label != null) params['q'] = label;
631:       uri = Uri.https('maps.apple.com', '/', params);
632:     } else {
633:       uri = Uri.https('www.google.com', '/maps/search/', {'api': '1', 'query': '$latitude,$longitude'});
634:     }
635: 
636:     return uri;
637:   }
638: 
639:   static Future<void> sendOrderEmail({required OrderModel orderModel}) async {
640:     double deliveryCharges = 0.0;
641:     double deliveryTips = 0.0;
642:     double subTotal = 0.0;
643:     double packagingCharge = 0.0;
644:     double platformFee = 0.0;
645:     double couponAmount = 0.0;
646:     double specialDiscountAmount = 0.0;
647:     double productTaxAmount = 0.0;

915:         taxVal = (double.tryParse(amount) ?? 0.0) * (double.tryParse(taxModel.tax.toString()) ?? 0.0) / 100;
916:       }
917:     }
918:     return taxVal;
919:   }
920: 
921:   Future<Uint8List> getBytesFromUrl(String url, {int width = 100}) async {
922:     try {
923:       final http.Response response = await http.get(Uri.parse(url));
924:       if (response.statusCode != 200) throw Exception("Failed to load image");
925: 
926:       final Uint8List bytes = response.bodyBytes;
927:       final ui.Codec codec = await ui.instantiateImageCodec(bytes, targetWidth: width);
928:       final ui.FrameInfo frameInfo = await codec.getNextFrame();
929: 
930:       final ByteData? byteData = await frameInfo.image.toByteData(format: ui.ImageByteFormat.png);
931:       return byteData!.buffer.asUint8List();
932:     } catch (e) {
933:       print("âš ï¸ getBytesFromUrl error: $e â€” using default cab icon");
934:       final ByteData data = await rootBundle.load('assets/images/ic_cab.png');
935:       return data.buffer.asUint8List();
936:     }
937:   }

916:       }
917:     }
918:     return taxVal;
919:   }
920: 
921:   Future<Uint8List> getBytesFromUrl(String url, {int width = 100}) async {
922:     try {
923:       final http.Response response = await http.get(Uri.parse(url));
924:       if (response.statusCode != 200) throw Exception("Failed to load image");
925: 
926:       final Uint8List bytes = response.bodyBytes;
927:       final ui.Codec codec = await ui.instantiateImageCodec(bytes, targetWidth: width);
928:       final ui.FrameInfo frameInfo = await codec.getNextFrame();
929: 
930:       final ByteData? byteData = await frameInfo.image.toByteData(format: ui.ImageByteFormat.png);
931:       return byteData!.buffer.asUint8List();
932:     } catch (e) {
933:       print("âš ï¸ getBytesFromUrl error: $e â€” using default cab icon");
934:       final ByteData data = await rootBundle.load('assets/images/ic_cab.png');
935:       return data.buffer.asUint8List();
936:     }
937:   }
938: 

918:     return taxVal;
919:   }
920: 
921:   Future<Uint8List> getBytesFromUrl(String url, {int width = 100}) async {
922:     try {
923:       final http.Response response = await http.get(Uri.parse(url));
924:       if (response.statusCode != 200) throw Exception("Failed to load image");
925: 
926:       final Uint8List bytes = response.bodyBytes;
927:       final ui.Codec codec = await ui.instantiateImageCodec(bytes, targetWidth: width);
928:       final ui.FrameInfo frameInfo = await codec.getNextFrame();
929: 
930:       final ByteData? byteData = await frameInfo.image.toByteData(format: ui.ImageByteFormat.png);
931:       return byteData!.buffer.asUint8List();
932:     } catch (e) {
933:       print("âš ï¸ getBytesFromUrl error: $e â€” using default cab icon");
934:       final ByteData data = await rootBundle.load('assets/images/ic_cab.png');
935:       return data.buffer.asUint8List();
936:     }
937:   }
938: 
939:   static double calculatePlatFormMeModel({PlatformFeeModel? platFromFeeModel}) {
940:     double taxAmount = 0.0;

959:           } else {
960:             return "${tax.title} (${tax.tax}%)";
961:           }
962:         })
963:         .join(', ');
964:   }
965: 
966:   // Future<Uint8List> getBytesFromUrl(String url, {int width = 100}) async {
967:   //   final http.Response response = await http.get(Uri.parse(url));
968:   //   if (response.statusCode != 200) {
969:   //     throw Exception("Failed to load image from $url");
970:   //   }
971:   //
972:   //   final Uint8List bytes = response.bodyBytes;
973:   //
974:   //   // Decode & resize
975:   //   final ui.Codec codec = await ui.instantiateImageCodec(bytes, targetWidth: width);
976:   //   final ui.FrameInfo frameInfo = await codec.getNextFrame();
977:   //
978:   //   final ByteData? byteData = await frameInfo.image.toByteData(format: ui.ImageByteFormat.png);
979:   //   return byteData!.buffer.asUint8List();
980:   // }
981: }

960:             return "${tax.title} (${tax.tax}%)";
961:           }
962:         })
963:         .join(', ');
964:   }
965: 
966:   // Future<Uint8List> getBytesFromUrl(String url, {int width = 100}) async {
967:   //   final http.Response response = await http.get(Uri.parse(url));
968:   //   if (response.statusCode != 200) {
969:   //     throw Exception("Failed to load image from $url");
970:   //   }
971:   //
972:   //   final Uint8List bytes = response.bodyBytes;
973:   //
974:   //   // Decode & resize
975:   //   final ui.Codec codec = await ui.instantiateImageCodec(bytes, targetWidth: width);
976:   //   final ui.FrameInfo frameInfo = await codec.getNextFrame();
977:   //
978:   //   final ByteData? byteData = await frameInfo.image.toByteData(format: ui.ImageByteFormat.png);
979:   //   return byteData!.buffer.asUint8List();
980:   // }
981: }
982: 

964:   }
965: 
966:   // Future<Uint8List> getBytesFromUrl(String url, {int width = 100}) async {
967:   //   final http.Response response = await http.get(Uri.parse(url));
968:   //   if (response.statusCode != 200) {
969:   //     throw Exception("Failed to load image from $url");
970:   //   }
971:   //
972:   //   final Uint8List bytes = response.bodyBytes;
973:   //
974:   //   // Decode & resize
975:   //   final ui.Codec codec = await ui.instantiateImageCodec(bytes, targetWidth: width);
976:   //   final ui.FrameInfo frameInfo = await codec.getNextFrame();
977:   //
978:   //   final ByteData? byteData = await frameInfo.image.toByteData(format: ui.ImageByteFormat.png);
979:   //   return byteData!.buffer.asUint8List();
980:   // }
981: }
982: 
983: extension StringExtension on String {
984:   String capitalizeString() {
985:     return "${this[0].toUpperCase()}${substring(1).toLowerCase()}";
986:   }

976:   //   final ui.FrameInfo frameInfo = await codec.getNextFrame();
977:   //
978:   //   final ByteData? byteData = await frameInfo.image.toByteData(format: ui.ImageByteFormat.png);
979:   //   return byteData!.buffer.asUint8List();
980:   // }
981: }
982: 
983: extension StringExtension on String {
984:   String capitalizeString() {
985:     return "${this[0].toUpperCase()}${substring(1).toLowerCase()}";
986:   }
987: }

```

### FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\0n_demand_payment_controller.dart
```dart
142:           }
143:         });
144:       }
145: 
146:       // Handle wallet payment if needed
147:       if (selectedPaymentMethod.value != 'cod') {
148:         WalletTransactionModel transactionModel = WalletTransactionModel(
149:           id: Constant.getUuid(),
150:           serviceType: 'ondemand-service',
151:           amount: totalAmount.value,
152:           date: Timestamp.now(),
153:           paymentMethod: PaymentGateway.wallet.name,
154:           transactionUser: "provider",
155:           userId: onDemandOrderModel.value?.provider.author!,
156:           isTopup: true,
157:           orderId: onDemandOrderModel.value?.id,
158:           note: 'Extra Charge Amount Credited',
159:           paymentStatus: "success".tr,
160:         );
161: 
162:         await FireStoreUtils.setWalletTransaction(transactionModel).then((value) async {
163:           if (value == true) {
164:             await FireStoreUtils.updateUserWallet(amount: "-$totalAmount", userId: FireStoreUtils.getCurrentUid());

188: 
189:   Rx<MidTrans> midTransModel = MidTrans().obs;
190:   Rx<OrangeMoney> orangeMoneyModel = OrangeMoney().obs;
191:   Rx<Xendit> xenditModel = Xendit().obs;
192: 
193:   Future<void> getPaymentSettings() async {
194:     isLoading.value = true;
195:     await FireStoreUtils.getPaymentSettingsData().then((value) {
196:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
197:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
198:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
199:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
200:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
201:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
202:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
203:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
204:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
205:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
206:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
207:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
208:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
209: 
210:       if (walletSettingModel.value.isEnabled == true) {

189:   Rx<MidTrans> midTransModel = MidTrans().obs;
190:   Rx<OrangeMoney> orangeMoneyModel = OrangeMoney().obs;
191:   Rx<Xendit> xenditModel = Xendit().obs;
192: 
193:   Future<void> getPaymentSettings() async {
194:     isLoading.value = true;
195:     await FireStoreUtils.getPaymentSettingsData().then((value) {
196:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
197:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
198:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
199:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
200:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
201:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
202:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
203:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
204:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
205:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
206:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
207:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
208:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
209: 
210:       if (walletSettingModel.value.isEnabled == true) {
211:         selectedPaymentMethod.value = PaymentGateway.wallet.name;

190:   Rx<OrangeMoney> orangeMoneyModel = OrangeMoney().obs;
191:   Rx<Xendit> xenditModel = Xendit().obs;
192: 
193:   Future<void> getPaymentSettings() async {
194:     isLoading.value = true;
195:     await FireStoreUtils.getPaymentSettingsData().then((value) {
196:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
197:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
198:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
199:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
200:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
201:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
202:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
203:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
204:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
205:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
206:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
207:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
208:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
209: 
210:       if (walletSettingModel.value.isEnabled == true) {
211:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
212:       } else if (cashOnDeliverySettingModel.value.isEnabled == true) {

191:   Rx<Xendit> xenditModel = Xendit().obs;
192: 
193:   Future<void> getPaymentSettings() async {
194:     isLoading.value = true;
195:     await FireStoreUtils.getPaymentSettingsData().then((value) {
196:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
197:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
198:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
199:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
200:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
201:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
202:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
203:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
204:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
205:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
206:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
207:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
208:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
209: 
210:       if (walletSettingModel.value.isEnabled == true) {
211:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
212:       } else if (cashOnDeliverySettingModel.value.isEnabled == true) {
213:         selectedPaymentMethod.value = PaymentGateway.cod.name;

192: 
193:   Future<void> getPaymentSettings() async {
194:     isLoading.value = true;
195:     await FireStoreUtils.getPaymentSettingsData().then((value) {
196:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
197:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
198:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
199:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
200:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
201:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
202:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
203:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
204:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
205:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
206:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
207:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
208:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
209: 
210:       if (walletSettingModel.value.isEnabled == true) {
211:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
212:       } else if (cashOnDeliverySettingModel.value.isEnabled == true) {
213:         selectedPaymentMethod.value = PaymentGateway.cod.name;
214:       } else if (stripeModel.value.isEnabled == true) {

193:   Future<void> getPaymentSettings() async {
194:     isLoading.value = true;
195:     await FireStoreUtils.getPaymentSettingsData().then((value) {
196:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
197:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
198:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
199:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
200:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
201:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
202:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
203:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
204:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
205:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
206:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
207:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
208:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
209: 
210:       if (walletSettingModel.value.isEnabled == true) {
211:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
212:       } else if (cashOnDeliverySettingModel.value.isEnabled == true) {
213:         selectedPaymentMethod.value = PaymentGateway.cod.name;
214:       } else if (stripeModel.value.isEnabled == true) {
215:         selectedPaymentMethod.value = PaymentGateway.stripe.name;

194:     isLoading.value = true;
195:     await FireStoreUtils.getPaymentSettingsData().then((value) {
196:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
197:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
198:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
199:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
200:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
201:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
202:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
203:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
204:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
205:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
206:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
207:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
208:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
209: 
210:       if (walletSettingModel.value.isEnabled == true) {
211:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
212:       } else if (cashOnDeliverySettingModel.value.isEnabled == true) {
213:         selectedPaymentMethod.value = PaymentGateway.cod.name;
214:       } else if (stripeModel.value.isEnabled == true) {
215:         selectedPaymentMethod.value = PaymentGateway.stripe.name;
216:       } else if (payPalModel.value.isEnabled == true) {

195:     await FireStoreUtils.getPaymentSettingsData().then((value) {
196:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
197:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
198:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
199:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
200:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
201:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
202:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
203:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
204:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
205:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
206:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
207:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
208:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
209: 
210:       if (walletSettingModel.value.isEnabled == true) {
211:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
212:       } else if (cashOnDeliverySettingModel.value.isEnabled == true) {
213:         selectedPaymentMethod.value = PaymentGateway.cod.name;
214:       } else if (stripeModel.value.isEnabled == true) {
215:         selectedPaymentMethod.value = PaymentGateway.stripe.name;
216:       } else if (payPalModel.value.isEnabled == true) {
217:         selectedPaymentMethod.value = PaymentGateway.paypal.name;

196:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
197:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
198:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
199:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
200:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
201:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
202:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
203:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
204:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
205:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
206:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
207:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
208:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
209: 
210:       if (walletSettingModel.value.isEnabled == true) {
211:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
212:       } else if (cashOnDeliverySettingModel.value.isEnabled == true) {
213:         selectedPaymentMethod.value = PaymentGateway.cod.name;
214:       } else if (stripeModel.value.isEnabled == true) {
215:         selectedPaymentMethod.value = PaymentGateway.stripe.name;
216:       } else if (payPalModel.value.isEnabled == true) {
217:         selectedPaymentMethod.value = PaymentGateway.paypal.name;
218:       } else if (payStackModel.value.isEnable == true) {

197:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
198:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
199:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
200:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
201:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
202:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
203:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
204:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
205:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
206:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
207:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
208:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
209: 
210:       if (walletSettingModel.value.isEnabled == true) {
211:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
212:       } else if (cashOnDeliverySettingModel.value.isEnabled == true) {
213:         selectedPaymentMethod.value = PaymentGateway.cod.name;
214:       } else if (stripeModel.value.isEnabled == true) {
215:         selectedPaymentMethod.value = PaymentGateway.stripe.name;
216:       } else if (payPalModel.value.isEnabled == true) {
217:         selectedPaymentMethod.value = PaymentGateway.paypal.name;
218:       } else if (payStackModel.value.isEnable == true) {
219:         selectedPaymentMethod.value = PaymentGateway.payStack.name;

198:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
199:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
200:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
201:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
202:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
203:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
204:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
205:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
206:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
207:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
208:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
209: 
210:       if (walletSettingModel.value.isEnabled == true) {
211:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
212:       } else if (cashOnDeliverySettingModel.value.isEnabled == true) {
213:         selectedPaymentMethod.value = PaymentGateway.cod.name;
214:       } else if (stripeModel.value.isEnabled == true) {
215:         selectedPaymentMethod.value = PaymentGateway.stripe.name;
216:       } else if (payPalModel.value.isEnabled == true) {
217:         selectedPaymentMethod.value = PaymentGateway.paypal.name;
218:       } else if (payStackModel.value.isEnable == true) {
219:         selectedPaymentMethod.value = PaymentGateway.payStack.name;
220:       } else if (mercadoPagoModel.value.isEnabled == true) {

199:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
200:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
201:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
202:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
203:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
204:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
205:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
206:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
207:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
208:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
209: 
210:       if (walletSettingModel.value.isEnabled == true) {
211:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
212:       } else if (cashOnDeliverySettingModel.value.isEnabled == true) {
213:         selectedPaymentMethod.value = PaymentGateway.cod.name;
214:       } else if (stripeModel.value.isEnabled == true) {
215:         selectedPaymentMethod.value = PaymentGateway.stripe.name;
216:       } else if (payPalModel.value.isEnabled == true) {
217:         selectedPaymentMethod.value = PaymentGateway.paypal.name;
218:       } else if (payStackModel.value.isEnable == true) {
219:         selectedPaymentMethod.value = PaymentGateway.payStack.name;
220:       } else if (mercadoPagoModel.value.isEnabled == true) {
221:         selectedPaymentMethod.value = PaymentGateway.mercadoPago.name;

200:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
201:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
202:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
203:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
204:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
205:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
206:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
207:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
208:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
209: 
210:       if (walletSettingModel.value.isEnabled == true) {
211:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
212:       } else if (cashOnDeliverySettingModel.value.isEnabled == true) {
213:         selectedPaymentMethod.value = PaymentGateway.cod.name;
214:       } else if (stripeModel.value.isEnabled == true) {
215:         selectedPaymentMethod.value = PaymentGateway.stripe.name;
216:       } else if (payPalModel.value.isEnabled == true) {
217:         selectedPaymentMethod.value = PaymentGateway.paypal.name;
218:       } else if (payStackModel.value.isEnable == true) {
219:         selectedPaymentMethod.value = PaymentGateway.payStack.name;
220:       } else if (mercadoPagoModel.value.isEnabled == true) {
221:         selectedPaymentMethod.value = PaymentGateway.mercadoPago.name;
222:       } else if (flutterWaveModel.value.isEnable == true) {

276:   Future<void> displayStripePaymentSheet({required String amount}) async {
277:     try {
278:       await Stripe.instance.presentPaymentSheet().then((value) {
279:         ShowToastDialog.showToast("Payment successfully".tr);
280:         placeOrder();
281:       });
282:     } on StripeException catch (e) {
283:       var lo1 = jsonEncode(e);
284:       var lo2 = jsonDecode(lo1);
285:       StripePayFailedModel lom = StripePayFailedModel.fromJson(lo2);
286:       ShowToastDialog.showToast(lom.error.message);
287:     } catch (e) {
288:       ShowToastDialog.showToast(e.toString());
289:     }
290:   }
291: 
292:   Future createStripeIntent({required String amount}) async {
293:     try {
294:       Map<String, dynamic> body = {
295:         'amount': ((double.parse(amount) * 100).round()).toString(),
296:         'currency': "USD",
297:         'payment_method_types[]': 'card',
298:         "description": "Strip Payment",

299:         "shipping[name]": Constant.userModel?.fullName(),
300:         "shipping[address][line1]": "510 Townsend St",
301:         "shipping[address][postal_code]": "98140",
302:         "shipping[address][city]": "San Francisco",
303:         "shipping[address][state]": "CA",
304:         "shipping[address][country]": "US",
305:       };
306:       var stripeSecret = stripeModel.value.stripeSecret;
307:       var response = await http.post(
308:         Uri.parse('https://api.stripe.com/v1/payment_intents'),
309:         body: body,
310:         headers: {'Authorization': 'Bearer $stripeSecret', 'Content-Type': 'application/x-www-form-urlencoded'},
311:       );
312: 
313:       return jsonDecode(response.body);
314:     } catch (e) {
315:       log(e.toString());
316:     }
317:   }
318: 
319:   //mercadoo
320:   Future<Null> mercadoPagoMakePayment({required BuildContext context, required String amount}) async {
321:     ShowToastDialog.showLoader("Please wait".tr);

300:         "shipping[address][line1]": "510 Townsend St",
301:         "shipping[address][postal_code]": "98140",
302:         "shipping[address][city]": "San Francisco",
303:         "shipping[address][state]": "CA",
304:         "shipping[address][country]": "US",
305:       };
306:       var stripeSecret = stripeModel.value.stripeSecret;
307:       var response = await http.post(
308:         Uri.parse('https://api.stripe.com/v1/payment_intents'),
309:         body: body,
310:         headers: {'Authorization': 'Bearer $stripeSecret', 'Content-Type': 'application/x-www-form-urlencoded'},
311:       );
312: 
313:       return jsonDecode(response.body);
314:     } catch (e) {
315:       log(e.toString());
316:     }
317:   }
318: 
319:   //mercadoo
320:   Future<Null> mercadoPagoMakePayment({required BuildContext context, required String amount}) async {
321:     ShowToastDialog.showLoader("Please wait".tr);
322:     final headers = {'Authorization': 'Bearer ${mercadoPagoModel.value.accessToken}', 'Content-Type': 'application/json'};

305:       };
306:       var stripeSecret = stripeModel.value.stripeSecret;
307:       var response = await http.post(
308:         Uri.parse('https://api.stripe.com/v1/payment_intents'),
309:         body: body,
310:         headers: {'Authorization': 'Bearer $stripeSecret', 'Content-Type': 'application/x-www-form-urlencoded'},
311:       );
312: 
313:       return jsonDecode(response.body);
314:     } catch (e) {
315:       log(e.toString());
316:     }
317:   }
318: 
319:   //mercadoo
320:   Future<Null> mercadoPagoMakePayment({required BuildContext context, required String amount}) async {
321:     ShowToastDialog.showLoader("Please wait".tr);
322:     final headers = {'Authorization': 'Bearer ${mercadoPagoModel.value.accessToken}', 'Content-Type': 'application/json'};
323: 
324:     final body = jsonEncode({
325:       "items": [
326:         {
327:           "title": "Test",

332:         },
333:       ],
334:       "payer": {"email": Constant.userModel?.email},
335:       "back_urls": {"failure": "${Constant.globalUrl}payment/failure", "pending": "${Constant.globalUrl}payment/pending", "success": "${Constant.globalUrl}payment/success"},
336:       "auto_return": "approved",
337:       // Automatically return after payment is approved
338:     });
339: 
340:     final response = await http.post(Uri.parse("https://api.mercadopago.com/checkout/preferences"), headers: headers, body: body);
341: 
342:     if (response.statusCode == 200 || response.statusCode == 201) {
343:       final data = jsonDecode(response.body);
344:       ShowToastDialog.closeLoader();
345:       Get.to(MercadoPagoScreen(initialURl: data['init_point']))!.then((value) {
346:         if (value) {
347:           ShowToastDialog.showToast("Payment Successful!!".tr);
348:           placeOrder();
349:         } else {
350:           ShowToastDialog.showToast("Payment UnSuccessful!!".tr);
351:         }
352:       });
353:     } else {
354:       ShowToastDialog.closeLoader();

334:       "payer": {"email": Constant.userModel?.email},
335:       "back_urls": {"failure": "${Constant.globalUrl}payment/failure", "pending": "${Constant.globalUrl}payment/pending", "success": "${Constant.globalUrl}payment/success"},
336:       "auto_return": "approved",
337:       // Automatically return after payment is approved
338:     });
339: 
340:     final response = await http.post(Uri.parse("https://api.mercadopago.com/checkout/preferences"), headers: headers, body: body);
341: 
342:     if (response.statusCode == 200 || response.statusCode == 201) {
343:       final data = jsonDecode(response.body);
344:       ShowToastDialog.closeLoader();
345:       Get.to(MercadoPagoScreen(initialURl: data['init_point']))!.then((value) {
346:         if (value) {
347:           ShowToastDialog.showToast("Payment Successful!!".tr);
348:           placeOrder();
349:         } else {
350:           ShowToastDialog.showToast("Payment UnSuccessful!!".tr);
351:         }
352:       });
353:     } else {
354:       ShowToastDialog.closeLoader();
355:       print('Error creating preference: ${response.body}');
356:       return null;

```

### FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\book_parcel_controller.dart
```dart
285:       debugPrint("Failed to parse scheduled date/time: $e");
286:       return DateTime.now();
287:     }
288:   }
289: 
290:   Future<void> fetchGoogleRouteWithWaypoints() async {
291:     final origin = '${senderLocation.value!.latitude},${senderLocation.value!.longitude}';
292:     final destination = '${receiverLocation.value!.latitude},${receiverLocation.value!.longitude}';
293:     final url = Uri.parse('https://maps.googleapis.com/maps/api/directions/json?origin=$origin&destination=$destination&mode=driving&key=${Constant.mapAPIKey}');
294: 
295:     try {
296:       final response = await http.get(url);
297:       final data = json.decode(response.body);
298:       if (data['status'] == 'OK') {
299:         final route = data['routes'][0];
300:         final legs = route['legs'] as List;
301:         num totalDistance = 0;
302:         num totalDuration = 0;
303:         for (var leg in legs) {
304:           totalDistance += leg['distance']['value'];
305:           totalDuration += leg['duration']['value'];
306:         }
307:         if (Constant.distanceType.toLowerCase() == "KM".toLowerCase()) {

288:   }
289: 
290:   Future<void> fetchGoogleRouteWithWaypoints() async {
291:     final origin = '${senderLocation.value!.latitude},${senderLocation.value!.longitude}';
292:     final destination = '${receiverLocation.value!.latitude},${receiverLocation.value!.longitude}';
293:     final url = Uri.parse('https://maps.googleapis.com/maps/api/directions/json?origin=$origin&destination=$destination&mode=driving&key=${Constant.mapAPIKey}');
294: 
295:     try {
296:       final response = await http.get(url);
297:       final data = json.decode(response.body);
298:       if (data['status'] == 'OK') {
299:         final route = data['routes'][0];
300:         final legs = route['legs'] as List;
301:         num totalDistance = 0;
302:         num totalDuration = 0;
303:         for (var leg in legs) {
304:           totalDistance += leg['distance']['value'];
305:           totalDuration += leg['duration']['value'];
306:         }
307:         if (Constant.distanceType.toLowerCase() == "KM".toLowerCase()) {
308:           distance.value = totalDistance / 1000.0;
309:         } else {
310:           distance.value = totalDistance / 1609.34;

289: 
290:   Future<void> fetchGoogleRouteWithWaypoints() async {
291:     final origin = '${senderLocation.value!.latitude},${senderLocation.value!.longitude}';
292:     final destination = '${receiverLocation.value!.latitude},${receiverLocation.value!.longitude}';
293:     final url = Uri.parse('https://maps.googleapis.com/maps/api/directions/json?origin=$origin&destination=$destination&mode=driving&key=${Constant.mapAPIKey}');
294: 
295:     try {
296:       final response = await http.get(url);
297:       final data = json.decode(response.body);
298:       if (data['status'] == 'OK') {
299:         final route = data['routes'][0];
300:         final legs = route['legs'] as List;
301:         num totalDistance = 0;
302:         num totalDuration = 0;
303:         for (var leg in legs) {
304:           totalDistance += leg['distance']['value'];
305:           totalDuration += leg['duration']['value'];
306:         }
307:         if (Constant.distanceType.toLowerCase() == "KM".toLowerCase()) {
308:           distance.value = totalDistance / 1000.0;
309:         } else {
310:           distance.value = totalDistance / 1609.34;
311:         }

306:         }
307:         if (Constant.distanceType.toLowerCase() == "KM".toLowerCase()) {
308:           distance.value = totalDistance / 1000.0;
309:         } else {
310:           distance.value = totalDistance / 1609.34;
311:         }
312:         duration.value = (totalDuration / 60).round().toDouble();
313:       } else {
314:         debugPrint('Google Directions API Error: ${data['status']}');
315:       }
316:     } catch (e) {
317:       debugPrint("Google route fetch error: $e");
318:     }
319:   }
320: 
321:   Future<void> fetchRouteWithWaypoints(List<latlong.LatLng> points) async {
322:     final coordinates = points.map((p) => '${p.longitude},${p.latitude}').join(';');
323:     final url = Uri.parse('https://router.project-osrm.org/route/v1/driving/$coordinates?overview=full&geometries=geojson');
324: 
325:     try {
326:       final response = await http.get(url);
327:       if (response.statusCode == 200) {
328:         final decoded = json.decode(response.body);

318:     }
319:   }
320: 
321:   Future<void> fetchRouteWithWaypoints(List<latlong.LatLng> points) async {
322:     final coordinates = points.map((p) => '${p.longitude},${p.latitude}').join(';');
323:     final url = Uri.parse('https://router.project-osrm.org/route/v1/driving/$coordinates?overview=full&geometries=geojson');
324: 
325:     try {
326:       final response = await http.get(url);
327:       if (response.statusCode == 200) {
328:         final decoded = json.decode(response.body);
329:         final dist = decoded['routes'][0]['distance'];
330:         final dur = decoded['routes'][0]['duration'];
331: 
332:         if (Constant.distanceType.toLowerCase() == "KM".toLowerCase()) {
333:           distance.value = dist / 1000.00;
334:         } else {
335:           distance.value = dist / 1609.34;
336:         }
337:         duration.value = (dur / 60).round().toDouble();
338:       } else {
339:         debugPrint("Failed to get route: ${response.body}");
340:       }

319:   }
320: 
321:   Future<void> fetchRouteWithWaypoints(List<latlong.LatLng> points) async {
322:     final coordinates = points.map((p) => '${p.longitude},${p.latitude}').join(';');
323:     final url = Uri.parse('https://router.project-osrm.org/route/v1/driving/$coordinates?overview=full&geometries=geojson');
324: 
325:     try {
326:       final response = await http.get(url);
327:       if (response.statusCode == 200) {
328:         final decoded = json.decode(response.body);
329:         final dist = decoded['routes'][0]['distance'];
330:         final dur = decoded['routes'][0]['duration'];
331: 
332:         if (Constant.distanceType.toLowerCase() == "KM".toLowerCase()) {
333:           distance.value = dist / 1000.00;
334:         } else {
335:           distance.value = dist / 1609.34;
336:         }
337:         duration.value = (dur / 60).round().toDouble();
338:       } else {
339:         debugPrint("Failed to get route: ${response.body}");
340:       }
341:     } catch (e) {

320: 
321:   Future<void> fetchRouteWithWaypoints(List<latlong.LatLng> points) async {
322:     final coordinates = points.map((p) => '${p.longitude},${p.latitude}').join(';');
323:     final url = Uri.parse('https://router.project-osrm.org/route/v1/driving/$coordinates?overview=full&geometries=geojson');
324: 
325:     try {
326:       final response = await http.get(url);
327:       if (response.statusCode == 200) {
328:         final decoded = json.decode(response.body);
329:         final dist = decoded['routes'][0]['distance'];
330:         final dur = decoded['routes'][0]['duration'];
331: 
332:         if (Constant.distanceType.toLowerCase() == "KM".toLowerCase()) {
333:           distance.value = dist / 1000.00;
334:         } else {
335:           distance.value = dist / 1609.34;
336:         }
337:         duration.value = (dur / 60).round().toDouble();
338:       } else {
339:         debugPrint("Failed to get route: ${response.body}");
340:       }
341:     } catch (e) {
342:       debugPrint("Route fetch error: $e");

331: 
332:         if (Constant.distanceType.toLowerCase() == "KM".toLowerCase()) {
333:           distance.value = dist / 1000.00;
334:         } else {
335:           distance.value = dist / 1609.34;
336:         }
337:         duration.value = (dur / 60).round().toDouble();
338:       } else {
339:         debugPrint("Failed to get route: ${response.body}");
340:       }
341:     } catch (e) {
342:       debugPrint("Route fetch error: $e");
343:     }
344:   }
345: }

```

### FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_booking_controller.dart
```dart
326:       print("âŒ Error in updateRouteMarkers: $e");
327:     }
328:   }
329: 
330:   Future<void> fetchGoogleRouteBetween(LatLng originPoint, LatLng destPoint) async {
331:     final origin = '${originPoint.latitude},${originPoint.longitude}';
332:     final destination = '${destPoint.latitude},${destPoint.longitude}';
333:     final url = Uri.parse(
334:       'https://maps.googleapis.com/maps/api/directions/json'
335:       '?origin=$origin&destination=$destination'
336:       '&mode=driving&key=${Constant.mapAPIKey}',
337:     );
338: 
339:     try {
340:       final response = await http.get(url);
341:       final data = json.decode(response.body);
342: 
343:       if (data['status'] == 'OK') {
344:         final route = data['routes'][0];
345:         final encodedPolyline = route['overview_polyline']['points'];
346:         final decodedPoints = PolylinePoints.decodePolyline(encodedPolyline);
347:         final coordinates = decodedPoints.map((e) => LatLng(e.latitude, e.longitude)).toList();
348: 

328:   }
329: 
330:   Future<void> fetchGoogleRouteBetween(LatLng originPoint, LatLng destPoint) async {
331:     final origin = '${originPoint.latitude},${originPoint.longitude}';
332:     final destination = '${destPoint.latitude},${destPoint.longitude}';
333:     final url = Uri.parse(
334:       'https://maps.googleapis.com/maps/api/directions/json'
335:       '?origin=$origin&destination=$destination'
336:       '&mode=driving&key=${Constant.mapAPIKey}',
337:     );
338: 
339:     try {
340:       final response = await http.get(url);
341:       final data = json.decode(response.body);
342: 
343:       if (data['status'] == 'OK') {
344:         final route = data['routes'][0];
345:         final encodedPolyline = route['overview_polyline']['points'];
346:         final decodedPoints = PolylinePoints.decodePolyline(encodedPolyline);
347:         final coordinates = decodedPoints.map((e) => LatLng(e.latitude, e.longitude)).toList();
348: 
349:         addPolyLine(coordinates);
350: 

332:     final destination = '${destPoint.latitude},${destPoint.longitude}';
333:     final url = Uri.parse(
334:       'https://maps.googleapis.com/maps/api/directions/json'
335:       '?origin=$origin&destination=$destination'
336:       '&mode=driving&key=${Constant.mapAPIKey}',
337:     );
338: 
339:     try {
340:       final response = await http.get(url);
341:       final data = json.decode(response.body);
342: 
343:       if (data['status'] == 'OK') {
344:         final route = data['routes'][0];
345:         final encodedPolyline = route['overview_polyline']['points'];
346:         final decodedPoints = PolylinePoints.decodePolyline(encodedPolyline);
347:         final coordinates = decodedPoints.map((e) => LatLng(e.latitude, e.longitude)).toList();
348: 
349:         addPolyLine(coordinates);
350: 
351:         // Distance + duration update
352:         final leg = route['legs'][0];
353:         final totalDistance = leg['distance']['value'] / 1000.0;
354:         final totalDuration = leg['duration']['value'] / 60.0;

333:     final url = Uri.parse(
334:       'https://maps.googleapis.com/maps/api/directions/json'
335:       '?origin=$origin&destination=$destination'
336:       '&mode=driving&key=${Constant.mapAPIKey}',
337:     );
338: 
339:     try {
340:       final response = await http.get(url);
341:       final data = json.decode(response.body);
342: 
343:       if (data['status'] == 'OK') {
344:         final route = data['routes'][0];
345:         final encodedPolyline = route['overview_polyline']['points'];
346:         final decodedPoints = PolylinePoints.decodePolyline(encodedPolyline);
347:         final coordinates = decodedPoints.map((e) => LatLng(e.latitude, e.longitude)).toList();
348: 
349:         addPolyLine(coordinates);
350: 
351:         // Distance + duration update
352:         final leg = route['legs'][0];
353:         final totalDistance = leg['distance']['value'] / 1000.0;
354:         final totalDuration = leg['duration']['value'] / 60.0;
355: 

351:         // Distance + duration update
352:         final leg = route['legs'][0];
353:         final totalDistance = leg['distance']['value'] / 1000.0;
354:         final totalDuration = leg['duration']['value'] / 60.0;
355: 
356:         distance.value = totalDistance;
357:         duration.value = '${totalDuration.toStringAsFixed(0)} min';
358:       } else {
359:         print('Google Directions API error: ${data['status']}');
360:       }
361:     } catch (e) {
362:       print("Error fetching driver route: $e");
363:     }
364:   }
365: 
366:   void calculateTotalAmountAfterAccept() {
367:     taxAmount = 0.0.obs;
368:     discount = 0.0.obs;
369:     subTotal.value = double.parse(currentOrder.value.subTotal.toString());
370:     discount.value = double.parse(currentOrder.value.discount ?? '0.0');
371:     orderTaxAmount.value = 0.0;
372:     platformTaxAmount.value = 0.0;
373: 

439:           date: Timestamp.now(),
440:           paymentMethod: PaymentGateway.wallet.name,
441:           transactionUser: "customer",
442:           userId: FireStoreUtils.getCurrentUid(),
443:           isTopup: false,
444:           orderId: currentOrder.value.id,
445:           note: "Cab Amount debited",
446:           paymentStatus: "success",
447:           serviceType: Constant.parcelServiceType,
448:         );
449: 
450:         await FireStoreUtils.setWalletTransaction(transactionModel).then((value) async {
451:           if (value == true) {
452:             await FireStoreUtils.updateUserWallet(amount: "-${totalAmount.value.toString()}", userId: FireStoreUtils.getCurrentUid());
453:           }
454:         });
455:       }
456: 
457:       await FireStoreUtils.cabOrderPlace(currentOrder.value).then((value) {
458:         ShowToastDialog.showToast("Payment successfully".tr);
459:         Get.back();
460:       });
461:     }

642: 
643:   Future<void> fetchGoogleRouteWithWaypoints() async {
644:     if (departureLatLong.value.latitude == 0.0 || destinationLatLong.value.latitude == 0.0) return;
645: 
646:     final origin = '${departureLatLong.value.latitude},${departureLatLong.value.longitude}';
647:     final destination = '${destinationLatLong.value.latitude},${destinationLatLong.value.longitude}';
648: 
649:     final url = Uri.parse(
650:       'https://maps.googleapis.com/maps/api/directions/json'
651:       '?origin=$origin&destination=$destination'
652:       '&mode=driving&key=${Constant.mapAPIKey}',
653:     );
654: 
655:     try {
656:       final response = await http.get(url);
657:       final data = json.decode(response.body);
658:       log("=======>$data");
659:       if (data['status'] == 'OK') {
660:         final route = data['routes'][0];
661:         final legs = route['legs'] as List;
662: 
663:         // Polyline
664:         final encodedPolyline = route['overview_polyline']['points'];

644:     if (departureLatLong.value.latitude == 0.0 || destinationLatLong.value.latitude == 0.0) return;
645: 
646:     final origin = '${departureLatLong.value.latitude},${departureLatLong.value.longitude}';
647:     final destination = '${destinationLatLong.value.latitude},${destinationLatLong.value.longitude}';
648: 
649:     final url = Uri.parse(
650:       'https://maps.googleapis.com/maps/api/directions/json'
651:       '?origin=$origin&destination=$destination'
652:       '&mode=driving&key=${Constant.mapAPIKey}',
653:     );
654: 
655:     try {
656:       final response = await http.get(url);
657:       final data = json.decode(response.body);
658:       log("=======>$data");
659:       if (data['status'] == 'OK') {
660:         final route = data['routes'][0];
661:         final legs = route['legs'] as List;
662: 
663:         // Polyline
664:         final encodedPolyline = route['overview_polyline']['points'];
665:         final decodedPoints = PolylinePoints.decodePolyline(encodedPolyline);
666:         final coordinates = decodedPoints.map((e) => LatLng(e.latitude, e.longitude)).toList();

648: 
649:     final url = Uri.parse(
650:       'https://maps.googleapis.com/maps/api/directions/json'
651:       '?origin=$origin&destination=$destination'
652:       '&mode=driving&key=${Constant.mapAPIKey}',
653:     );
654: 
655:     try {
656:       final response = await http.get(url);
657:       final data = json.decode(response.body);
658:       log("=======>$data");
659:       if (data['status'] == 'OK') {
660:         final route = data['routes'][0];
661:         final legs = route['legs'] as List;
662: 
663:         // Polyline
664:         final encodedPolyline = route['overview_polyline']['points'];
665:         final decodedPoints = PolylinePoints.decodePolyline(encodedPolyline);
666:         final coordinates = decodedPoints.map((e) => LatLng(e.latitude, e.longitude)).toList();
667: 
668:         addPolyLine(coordinates);
669: 
670:         // Distance & Duration

649:     final url = Uri.parse(
650:       'https://maps.googleapis.com/maps/api/directions/json'
651:       '?origin=$origin&destination=$destination'
652:       '&mode=driving&key=${Constant.mapAPIKey}',
653:     );
654: 
655:     try {
656:       final response = await http.get(url);
657:       final data = json.decode(response.body);
658:       log("=======>$data");
659:       if (data['status'] == 'OK') {
660:         final route = data['routes'][0];
661:         final legs = route['legs'] as List;
662: 
663:         // Polyline
664:         final encodedPolyline = route['overview_polyline']['points'];
665:         final decodedPoints = PolylinePoints.decodePolyline(encodedPolyline);
666:         final coordinates = decodedPoints.map((e) => LatLng(e.latitude, e.longitude)).toList();
667: 
668:         addPolyLine(coordinates);
669: 
670:         // Distance & Duration
671:         num totalDistance = 0;

682:           distance.value = totalDistance / 1609.34;
683:         }
684: 
685:         // Format duration
686:         final hours = totalDuration ~/ 3600;
687:         final minutes = ((totalDuration % 3600) / 60).round();
688:         duration.value = '${hours}h ${minutes}m';
689:       } else {
690:         print('Google Directions API Error: ${data['status']}');
691:       }
692:     } catch (e) {
693:       print("Google route fetch error: $e");
694:     }
695:   }
696: 
697:   Future<void> fetchRouteWithWaypoints(List<latlong.LatLng> points) async {
698:     final coordinates = points.map((p) => '${p.longitude},${p.latitude}').join(';');
699:     final url = Uri.parse('https://router.project-osrm.org/route/v1/driving/$coordinates?overview=full&geometries=geojson');
700: 
701:     try {
702:       final response = await http.get(url);
703:       if (response.statusCode == 200) {
704:         final decoded = json.decode(response.body);

694:     }
695:   }
696: 
697:   Future<void> fetchRouteWithWaypoints(List<latlong.LatLng> points) async {
698:     final coordinates = points.map((p) => '${p.longitude},${p.latitude}').join(';');
699:     final url = Uri.parse('https://router.project-osrm.org/route/v1/driving/$coordinates?overview=full&geometries=geojson');
700: 
701:     try {
702:       final response = await http.get(url);
703:       if (response.statusCode == 200) {
704:         final decoded = json.decode(response.body);
705:         final geometry = decoded['routes'][0]['geometry']['coordinates'] as List;
706:         final dist = decoded['routes'][0]['distance'];
707:         final dur = decoded['routes'][0]['duration'];
708: 
709:         routePoints.clear();
710:         routePoints.addAll(geometry.map((coord) => latlong.LatLng(coord[1], coord[0])));
711: 
712:         if (Constant.distanceType.toLowerCase() == "KM".toLowerCase()) {
713:           distance.value = dist / 1000.00;
714:         } else {
715:           distance.value = dist / 1609.34;
716:         }

695:   }
696: 
697:   Future<void> fetchRouteWithWaypoints(List<latlong.LatLng> points) async {
698:     final coordinates = points.map((p) => '${p.longitude},${p.latitude}').join(';');
699:     final url = Uri.parse('https://router.project-osrm.org/route/v1/driving/$coordinates?overview=full&geometries=geojson');
700: 
701:     try {
702:       final response = await http.get(url);
703:       if (response.statusCode == 200) {
704:         final decoded = json.decode(response.body);
705:         final geometry = decoded['routes'][0]['geometry']['coordinates'] as List;
706:         final dist = decoded['routes'][0]['distance'];
707:         final dur = decoded['routes'][0]['duration'];
708: 
709:         routePoints.clear();
710:         routePoints.addAll(geometry.map((coord) => latlong.LatLng(coord[1], coord[0])));
711: 
712:         if (Constant.distanceType.toLowerCase() == "KM".toLowerCase()) {
713:           distance.value = dist / 1000.00;
714:         } else {
715:           distance.value = dist / 1609.34;
716:         }
717: 

696: 
697:   Future<void> fetchRouteWithWaypoints(List<latlong.LatLng> points) async {
698:     final coordinates = points.map((p) => '${p.longitude},${p.latitude}').join(';');
699:     final url = Uri.parse('https://router.project-osrm.org/route/v1/driving/$coordinates?overview=full&geometries=geojson');
700: 
701:     try {
702:       final response = await http.get(url);
703:       if (response.statusCode == 200) {
704:         final decoded = json.decode(response.body);
705:         final geometry = decoded['routes'][0]['geometry']['coordinates'] as List;
706:         final dist = decoded['routes'][0]['distance'];
707:         final dur = decoded['routes'][0]['duration'];
708: 
709:         routePoints.clear();
710:         routePoints.addAll(geometry.map((coord) => latlong.LatLng(coord[1], coord[0])));
711: 
712:         if (Constant.distanceType.toLowerCase() == "KM".toLowerCase()) {
713:           distance.value = dist / 1000.00;
714:         } else {
715:           distance.value = dist / 1609.34;
716:         }
717: 
718:         final hours = dur ~/ 3600;

717: 
718:         final hours = dur ~/ 3600;
719:         final minutes = ((dur % 3600) / 60).round();
720:         duration.value = '${hours}h ${minutes}m';
721: 
722:         // Zoom to fit polyline after drawing
723:         zoomToPolylineOSM();
724:       } else {
725:         print("Failed to get route: ${response.body}");
726:       }
727:     } catch (e) {
728:       print("Route fetch error: $e");
729:     }
730:   }
731: 
732:   void zoomToPolylineOSM() {
733:     if (routePoints.isEmpty) return;
734:     // LatLngBounds requires at least two points
735:     final bounds = flutterMap.LatLngBounds(routePoints.first, routePoints.first);
736:     for (final point in routePoints) {
737:       bounds.extend(point);
738:     }
739:     final center = bounds.center;

922: 
923:     clearMapDataIfLocationsRemoved();
924:     update();
925:   }
926: 
927:   Future<void> searchPlaceNameOSM() async {
928:     final url = Uri.parse('https://nominatim.openstreetmap.org/reverse?lat=${departureLatLongOsm.value.latitude}&lon=${departureLatLongOsm.value.longitude}&format=json');
929: 
930:     final response = await http.get(url, headers: {'User-Agent': 'FlutterMapApp/1.0 (menil.siddhiinfosoft@gmail.com)'});
931: 
932:     if (response.statusCode == 200) {
933:       log("response.body :: ${response.body}");
934:       Map<String, dynamic> data = json.decode(response.body);
935:       sourceTextEditController.value.text = data['display_name'] ?? '';
936:     }
937:   }
938: 
939:   Future<void> searchPlaceNameGoogle() async {
940:     final lat = departureLatLong.value.latitude;
941:     final lng = departureLatLong.value.longitude;
942: 
943:     final url = Uri.parse('https://maps.googleapis.com/maps/api/geocode/json?latlng=$lat,$lng&key=${Constant.mapAPIKey}');
944: 

924:     update();
925:   }
926: 
927:   Future<void> searchPlaceNameOSM() async {
928:     final url = Uri.parse('https://nominatim.openstreetmap.org/reverse?lat=${departureLatLongOsm.value.latitude}&lon=${departureLatLongOsm.value.longitude}&format=json');
929: 
930:     final response = await http.get(url, headers: {'User-Agent': 'FlutterMapApp/1.0 (menil.siddhiinfosoft@gmail.com)'});
931: 
932:     if (response.statusCode == 200) {
933:       log("response.body :: ${response.body}");
934:       Map<String, dynamic> data = json.decode(response.body);
935:       sourceTextEditController.value.text = data['display_name'] ?? '';
936:     }
937:   }
938: 
939:   Future<void> searchPlaceNameGoogle() async {
940:     final lat = departureLatLong.value.latitude;
941:     final lng = departureLatLong.value.longitude;
942: 
943:     final url = Uri.parse('https://maps.googleapis.com/maps/api/geocode/json?latlng=$lat,$lng&key=${Constant.mapAPIKey}');
944: 
945:     final response = await http.get(url);
946: 

925:   }
926: 
927:   Future<void> searchPlaceNameOSM() async {
928:     final url = Uri.parse('https://nominatim.openstreetmap.org/reverse?lat=${departureLatLongOsm.value.latitude}&lon=${departureLatLongOsm.value.longitude}&format=json');
929: 
930:     final response = await http.get(url, headers: {'User-Agent': 'FlutterMapApp/1.0 (menil.siddhiinfosoft@gmail.com)'});
931: 
932:     if (response.statusCode == 200) {
933:       log("response.body :: ${response.body}");
934:       Map<String, dynamic> data = json.decode(response.body);
935:       sourceTextEditController.value.text = data['display_name'] ?? '';
936:     }
937:   }
938: 
939:   Future<void> searchPlaceNameGoogle() async {
940:     final lat = departureLatLong.value.latitude;
941:     final lng = departureLatLong.value.longitude;
942: 
943:     final url = Uri.parse('https://maps.googleapis.com/maps/api/geocode/json?latlng=$lat,$lng&key=${Constant.mapAPIKey}');
944: 
945:     final response = await http.get(url);
946: 
947:     if (response.statusCode == 200) {

926: 
927:   Future<void> searchPlaceNameOSM() async {
928:     final url = Uri.parse('https://nominatim.openstreetmap.org/reverse?lat=${departureLatLongOsm.value.latitude}&lon=${departureLatLongOsm.value.longitude}&format=json');
929: 
930:     final response = await http.get(url, headers: {'User-Agent': 'FlutterMapApp/1.0 (menil.siddhiinfosoft@gmail.com)'});
931: 
932:     if (response.statusCode == 200) {
933:       log("response.body :: ${response.body}");
934:       Map<String, dynamic> data = json.decode(response.body);
935:       sourceTextEditController.value.text = data['display_name'] ?? '';
936:     }
937:   }
938: 
939:   Future<void> searchPlaceNameGoogle() async {
940:     final lat = departureLatLong.value.latitude;
941:     final lng = departureLatLong.value.longitude;
942: 
943:     final url = Uri.parse('https://maps.googleapis.com/maps/api/geocode/json?latlng=$lat,$lng&key=${Constant.mapAPIKey}');
944: 
945:     final response = await http.get(url);
946: 
947:     if (response.statusCode == 200) {
948:       final data = json.decode(response.body);

935:       sourceTextEditController.value.text = data['display_name'] ?? '';
936:     }
937:   }
938: 
939:   Future<void> searchPlaceNameGoogle() async {
940:     final lat = departureLatLong.value.latitude;
941:     final lng = departureLatLong.value.longitude;
942: 
943:     final url = Uri.parse('https://maps.googleapis.com/maps/api/geocode/json?latlng=$lat,$lng&key=${Constant.mapAPIKey}');
944: 
945:     final response = await http.get(url);
946: 
947:     if (response.statusCode == 200) {
948:       final data = json.decode(response.body);
949:       if (data['status'] == 'OK') {
950:         final results = data['results'] as List;
951:         if (results.isNotEmpty) {
952:           final formattedAddress = results[0]['formatted_address'];
953:           sourceTextEditController.value.text = formattedAddress;
954:         }
955:       } else {
956:         log("Google API Error: ${data['status']}");
957:       }

```

### FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_home_controller.dart
```dart
9:   @override
10:   void onInit() {
11:     // TODO: implement onInit
12:     getData();
13:     super.onInit();
14:   }
15: 
16:   Future<void> getData() async {
17:     await FireStoreUtils.getHomeTopBanner().then((value) {
18:       bannerTopHome.value = value;
19:     });
20:     isLoading.value = false;
21:   }
22: }

```

### FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_order_details_controller.dart
```dart
20: 
21:   // Google Maps Data
22:   RxSet<gmap.Marker> googleMarkers = <gmap.Marker>{}.obs;
23:   RxSet<gmap.Polyline> googlePolylines = <gmap.Polyline>{}.obs;
24: 
25:   // OSM Data
26:   RxList<osm.LatLng> osmPolyline = <osm.LatLng>[].obs;
27: 
28:   final String googleApiKey = Constant.mapAPIKey;
29: 
30:   final Rx<UserModel> driverUser = UserModel().obs;
31:   Rx<RatingModel> ratingModel = RatingModel().obs;
32: 
33:   @override
34:   void onInit() {
35:     super.onInit();
36:     final args = Get.arguments;
37:     if (args != null) {
38:       cabOrder.value = args['cabOrderModel'] as CabOrderModel;
39:       calculateTotalAmount();
40:       _setMarkers();
41:       _getGoogleRoute();
42:       _getOsmRoute();

107: 
108:     // ignore: invalid_use_of_protected_member
109:     googleMarkers.value = {
110:       gmap.Marker(markerId: const gmap.MarkerId('source'), position: gmap.LatLng(sourceLat!, sourceLng!), icon: gmap.BitmapDescriptor.defaultMarkerWithHue(gmap.BitmapDescriptor.hueGreen)),
111:       gmap.Marker(markerId: const gmap.MarkerId('destination'), position: gmap.LatLng(destLat!, destLng!), icon: gmap.BitmapDescriptor.defaultMarkerWithHue(gmap.BitmapDescriptor.hueRed)),
112:     };
113:   }
114: 
115:   ///Google Directions API
116:   Future<void> _getGoogleRoute() async {
117:     final src = cabOrder.value.sourceLocation;
118:     final dest = cabOrder.value.destinationLocation;
119: 
120:     final url = "https://maps.googleapis.com/maps/api/directions/json?origin=${src!.latitude},${src.longitude}&destination=${dest!.latitude},${dest.longitude}&key=$googleApiKey";
121: 
122:     final response = await http.get(Uri.parse(url));
123:     final data = jsonDecode(response.body);
124: 
125:     if (data["routes"].isNotEmpty) {
126:       final points = data["routes"][0]["overview_polyline"]["points"];
127:       final polylinePoints = PolylinePoints.decodePolyline(points);
128: 
129:       final polylineCoords = polylinePoints.map((p) => gmap.LatLng(p.latitude, p.longitude)).toList();

112:     };
113:   }
114: 
115:   ///Google Directions API
116:   Future<void> _getGoogleRoute() async {
117:     final src = cabOrder.value.sourceLocation;
118:     final dest = cabOrder.value.destinationLocation;
119: 
120:     final url = "https://maps.googleapis.com/maps/api/directions/json?origin=${src!.latitude},${src.longitude}&destination=${dest!.latitude},${dest.longitude}&key=$googleApiKey";
121: 
122:     final response = await http.get(Uri.parse(url));
123:     final data = jsonDecode(response.body);
124: 
125:     if (data["routes"].isNotEmpty) {
126:       final points = data["routes"][0]["overview_polyline"]["points"];
127:       final polylinePoints = PolylinePoints.decodePolyline(points);
128: 
129:       final polylineCoords = polylinePoints.map((p) => gmap.LatLng(p.latitude, p.longitude)).toList();
130: 
131:       // ignore: invalid_use_of_protected_member
132:       googlePolylines.value = {gmap.Polyline(polylineId: const gmap.PolylineId("google_route"), color: AppThemeData.onDemandDark100, width: 5, points: polylineCoords)};
133:     }
134:   }

114: 
115:   ///Google Directions API
116:   Future<void> _getGoogleRoute() async {
117:     final src = cabOrder.value.sourceLocation;
118:     final dest = cabOrder.value.destinationLocation;
119: 
120:     final url = "https://maps.googleapis.com/maps/api/directions/json?origin=${src!.latitude},${src.longitude}&destination=${dest!.latitude},${dest.longitude}&key=$googleApiKey";
121: 
122:     final response = await http.get(Uri.parse(url));
123:     final data = jsonDecode(response.body);
124: 
125:     if (data["routes"].isNotEmpty) {
126:       final points = data["routes"][0]["overview_polyline"]["points"];
127:       final polylinePoints = PolylinePoints.decodePolyline(points);
128: 
129:       final polylineCoords = polylinePoints.map((p) => gmap.LatLng(p.latitude, p.longitude)).toList();
130: 
131:       // ignore: invalid_use_of_protected_member
132:       googlePolylines.value = {gmap.Polyline(polylineId: const gmap.PolylineId("google_route"), color: AppThemeData.onDemandDark100, width: 5, points: polylineCoords)};
133:     }
134:   }
135: 
136:   /// OSM Route (OSRM API)

115:   ///Google Directions API
116:   Future<void> _getGoogleRoute() async {
117:     final src = cabOrder.value.sourceLocation;
118:     final dest = cabOrder.value.destinationLocation;
119: 
120:     final url = "https://maps.googleapis.com/maps/api/directions/json?origin=${src!.latitude},${src.longitude}&destination=${dest!.latitude},${dest.longitude}&key=$googleApiKey";
121: 
122:     final response = await http.get(Uri.parse(url));
123:     final data = jsonDecode(response.body);
124: 
125:     if (data["routes"].isNotEmpty) {
126:       final points = data["routes"][0]["overview_polyline"]["points"];
127:       final polylinePoints = PolylinePoints.decodePolyline(points);
128: 
129:       final polylineCoords = polylinePoints.map((p) => gmap.LatLng(p.latitude, p.longitude)).toList();
130: 
131:       // ignore: invalid_use_of_protected_member
132:       googlePolylines.value = {gmap.Polyline(polylineId: const gmap.PolylineId("google_route"), color: AppThemeData.onDemandDark100, width: 5, points: polylineCoords)};
133:     }
134:   }
135: 
136:   /// OSM Route (OSRM API)
137:   Future<void> _getOsmRoute() async {

128: 
129:       final polylineCoords = polylinePoints.map((p) => gmap.LatLng(p.latitude, p.longitude)).toList();
130: 
131:       // ignore: invalid_use_of_protected_member
132:       googlePolylines.value = {gmap.Polyline(polylineId: const gmap.PolylineId("google_route"), color: AppThemeData.onDemandDark100, width: 5, points: polylineCoords)};
133:     }
134:   }
135: 
136:   /// OSM Route (OSRM API)
137:   Future<void> _getOsmRoute() async {
138:     final src = cabOrder.value.sourceLocation;
139:     final dest = cabOrder.value.destinationLocation;
140: 
141:     final url = "http://router.project-osrm.org/route/v1/driving/${src!.longitude},${src.latitude};${dest!.longitude},${dest.latitude}?overview=full&geometries=geojson";
142: 
143:     final response = await http.get(Uri.parse(url));
144:     final data = jsonDecode(response.body);
145: 
146:     if (data["routes"].isNotEmpty) {
147:       final coords = data["routes"][0]["geometry"]["coordinates"] as List<dynamic>;
148: 
149:       osmPolyline.value = coords.map((c) => osm.LatLng(c[1].toDouble(), c[0].toDouble())).toList();
150:     }

135: 
136:   /// OSM Route (OSRM API)
137:   Future<void> _getOsmRoute() async {
138:     final src = cabOrder.value.sourceLocation;
139:     final dest = cabOrder.value.destinationLocation;
140: 
141:     final url = "http://router.project-osrm.org/route/v1/driving/${src!.longitude},${src.latitude};${dest!.longitude},${dest.latitude}?overview=full&geometries=geojson";
142: 
143:     final response = await http.get(Uri.parse(url));
144:     final data = jsonDecode(response.body);
145: 
146:     if (data["routes"].isNotEmpty) {
147:       final coords = data["routes"][0]["geometry"]["coordinates"] as List<dynamic>;
148: 
149:       osmPolyline.value = coords.map((c) => osm.LatLng(c[1].toDouble(), c[0].toDouble())).toList();
150:     }
151:   }
152: }

136:   /// OSM Route (OSRM API)
137:   Future<void> _getOsmRoute() async {
138:     final src = cabOrder.value.sourceLocation;
139:     final dest = cabOrder.value.destinationLocation;
140: 
141:     final url = "http://router.project-osrm.org/route/v1/driving/${src!.longitude},${src.latitude};${dest!.longitude},${dest.latitude}?overview=full&geometries=geojson";
142: 
143:     final response = await http.get(Uri.parse(url));
144:     final data = jsonDecode(response.body);
145: 
146:     if (data["routes"].isNotEmpty) {
147:       final coords = data["routes"][0]["geometry"]["coordinates"] as List<dynamic>;
148: 
149:       osmPolyline.value = coords.map((c) => osm.LatLng(c[1].toDouble(), c[0].toDouble())).toList();
150:     }
151:   }
152: }

```

### FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cart_controller.dart
```dart
172:         totalDistance.value = double.parse(
173:           Constant.getDistance(
174:             lat1: selectedAddress.value.location!.latitude.toString(),
175:             lng1: selectedAddress.value.location!.longitude.toString(),
176:             lat2: vendorModel.value.latitude.toString(),
177:             lng2: vendorModel.value.longitude.toString(),
178:           ),
179:         );
180:         if (Constant.sectionConstantModel?.serviceType == 'Ecommerce Service') {
181:           deliveryCharges.value = double.parse(Constant.sectionConstantModel?.deliveryCharge ?? '0.0');
182:         } else if (vendorModel.value.isSelfDelivery == true && Constant.isSelfDeliveryFeature == true) {
183:           deliveryCharges.value = 0.0;
184:         } else if (deliveryChargeModel.value.vendorCanModify == false) {
185:           deliveryCharges.value =
186:               totalDistance.value > deliveryChargeModel.value.minimumDeliveryChargesWithinKm!
187:                   ? totalDistance.value * deliveryChargeModel.value.deliveryChargesPerKm!
188:                   : deliveryChargeModel.value.minimumDeliveryCharges!.toDouble();
189:         } else {
190:           final charge = vendorModel.value.deliveryCharge ?? deliveryChargeModel.value;
191:           deliveryCharges.value = totalDistance.value > charge.minimumDeliveryChargesWithinKm! ? totalDistance.value * charge.deliveryChargesPerKm! : charge.minimumDeliveryCharges!.toDouble();
192:         }
193:       }
194:     }

549:   Rx<MidTrans> midTransModel = MidTrans().obs;
550:   Rx<OrangeMoney> orangeMoneyModel = OrangeMoney().obs;
551:   Rx<Xendit> xenditModel = Xendit().obs;
552:   RxBool isLoading = true.obs;
553: 
554:   Future<void> getPaymentSettings() async {
555:     isLoading.value = true;
556:     await FireStoreUtils.getPaymentSettingsData().then((value) {
557:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
558:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
559:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
560:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
561:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
562:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
563:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
564:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
565:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
566:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
567:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
568:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
569:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
570: 
571:       if (walletSettingModel.value.isEnabled == true) {

550:   Rx<OrangeMoney> orangeMoneyModel = OrangeMoney().obs;
551:   Rx<Xendit> xenditModel = Xendit().obs;
552:   RxBool isLoading = true.obs;
553: 
554:   Future<void> getPaymentSettings() async {
555:     isLoading.value = true;
556:     await FireStoreUtils.getPaymentSettingsData().then((value) {
557:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
558:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
559:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
560:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
561:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
562:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
563:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
564:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
565:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
566:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
567:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
568:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
569:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
570: 
571:       if (walletSettingModel.value.isEnabled == true) {
572:         selectedPaymentMethod.value = PaymentGateway.wallet.name;

551:   Rx<Xendit> xenditModel = Xendit().obs;
552:   RxBool isLoading = true.obs;
553: 
554:   Future<void> getPaymentSettings() async {
555:     isLoading.value = true;
556:     await FireStoreUtils.getPaymentSettingsData().then((value) {
557:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
558:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
559:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
560:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
561:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
562:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
563:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
564:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
565:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
566:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
567:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
568:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
569:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
570: 
571:       if (walletSettingModel.value.isEnabled == true) {
572:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
573:       } else if (cashOnDeliverySettingModel.value.isEnabled == true) {

552:   RxBool isLoading = true.obs;
553: 
554:   Future<void> getPaymentSettings() async {
555:     isLoading.value = true;
556:     await FireStoreUtils.getPaymentSettingsData().then((value) {
557:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
558:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
559:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
560:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
561:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
562:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
563:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
564:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
565:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
566:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
567:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
568:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
569:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
570: 
571:       if (walletSettingModel.value.isEnabled == true) {
572:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
573:       } else if (cashOnDeliverySettingModel.value.isEnabled == true) {
574:         selectedPaymentMethod.value = PaymentGateway.cod.name;

553: 
554:   Future<void> getPaymentSettings() async {
555:     isLoading.value = true;
556:     await FireStoreUtils.getPaymentSettingsData().then((value) {
557:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
558:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
559:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
560:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
561:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
562:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
563:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
564:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
565:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
566:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
567:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
568:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
569:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
570: 
571:       if (walletSettingModel.value.isEnabled == true) {
572:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
573:       } else if (cashOnDeliverySettingModel.value.isEnabled == true) {
574:         selectedPaymentMethod.value = PaymentGateway.cod.name;
575:       } else if (stripeModel.value.isEnabled == true) {

554:   Future<void> getPaymentSettings() async {
555:     isLoading.value = true;
556:     await FireStoreUtils.getPaymentSettingsData().then((value) {
557:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
558:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
559:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
560:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
561:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
562:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
563:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
564:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
565:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
566:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
567:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
568:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
569:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
570: 
571:       if (walletSettingModel.value.isEnabled == true) {
572:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
573:       } else if (cashOnDeliverySettingModel.value.isEnabled == true) {
574:         selectedPaymentMethod.value = PaymentGateway.cod.name;
575:       } else if (stripeModel.value.isEnabled == true) {
576:         selectedPaymentMethod.value = PaymentGateway.stripe.name;

555:     isLoading.value = true;
556:     await FireStoreUtils.getPaymentSettingsData().then((value) {
557:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
558:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
559:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
560:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
561:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
562:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
563:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
564:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
565:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
566:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
567:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
568:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
569:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
570: 
571:       if (walletSettingModel.value.isEnabled == true) {
572:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
573:       } else if (cashOnDeliverySettingModel.value.isEnabled == true) {
574:         selectedPaymentMethod.value = PaymentGateway.cod.name;
575:       } else if (stripeModel.value.isEnabled == true) {
576:         selectedPaymentMethod.value = PaymentGateway.stripe.name;
577:       } else if (payPalModel.value.isEnabled == true) {

556:     await FireStoreUtils.getPaymentSettingsData().then((value) {
557:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
558:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
559:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
560:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
561:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
562:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
563:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
564:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
565:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
566:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
567:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
568:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
569:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
570: 
571:       if (walletSettingModel.value.isEnabled == true) {
572:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
573:       } else if (cashOnDeliverySettingModel.value.isEnabled == true) {
574:         selectedPaymentMethod.value = PaymentGateway.cod.name;
575:       } else if (stripeModel.value.isEnabled == true) {
576:         selectedPaymentMethod.value = PaymentGateway.stripe.name;
577:       } else if (payPalModel.value.isEnabled == true) {
578:         selectedPaymentMethod.value = PaymentGateway.paypal.name;

557:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
558:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
559:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
560:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
561:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
562:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
563:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
564:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
565:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
566:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
567:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
568:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
569:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
570: 
571:       if (walletSettingModel.value.isEnabled == true) {
572:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
573:       } else if (cashOnDeliverySettingModel.value.isEnabled == true) {
574:         selectedPaymentMethod.value = PaymentGateway.cod.name;
575:       } else if (stripeModel.value.isEnabled == true) {
576:         selectedPaymentMethod.value = PaymentGateway.stripe.name;
577:       } else if (payPalModel.value.isEnabled == true) {
578:         selectedPaymentMethod.value = PaymentGateway.paypal.name;
579:       } else if (payStackModel.value.isEnable == true) {

558:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
559:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
560:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
561:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
562:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
563:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
564:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
565:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
566:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
567:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
568:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
569:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
570: 
571:       if (walletSettingModel.value.isEnabled == true) {
572:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
573:       } else if (cashOnDeliverySettingModel.value.isEnabled == true) {
574:         selectedPaymentMethod.value = PaymentGateway.cod.name;
575:       } else if (stripeModel.value.isEnabled == true) {
576:         selectedPaymentMethod.value = PaymentGateway.stripe.name;
577:       } else if (payPalModel.value.isEnabled == true) {
578:         selectedPaymentMethod.value = PaymentGateway.paypal.name;
579:       } else if (payStackModel.value.isEnable == true) {
580:         selectedPaymentMethod.value = PaymentGateway.payStack.name;

559:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
560:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
561:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
562:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
563:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
564:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
565:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
566:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
567:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
568:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
569:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
570: 
571:       if (walletSettingModel.value.isEnabled == true) {
572:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
573:       } else if (cashOnDeliverySettingModel.value.isEnabled == true) {
574:         selectedPaymentMethod.value = PaymentGateway.cod.name;
575:       } else if (stripeModel.value.isEnabled == true) {
576:         selectedPaymentMethod.value = PaymentGateway.stripe.name;
577:       } else if (payPalModel.value.isEnabled == true) {
578:         selectedPaymentMethod.value = PaymentGateway.paypal.name;
579:       } else if (payStackModel.value.isEnable == true) {
580:         selectedPaymentMethod.value = PaymentGateway.payStack.name;
581:       } else if (mercadoPagoModel.value.isEnabled == true) {

560:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
561:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
562:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
563:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
564:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
565:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
566:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
567:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
568:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
569:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
570: 
571:       if (walletSettingModel.value.isEnabled == true) {
572:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
573:       } else if (cashOnDeliverySettingModel.value.isEnabled == true) {
574:         selectedPaymentMethod.value = PaymentGateway.cod.name;
575:       } else if (stripeModel.value.isEnabled == true) {
576:         selectedPaymentMethod.value = PaymentGateway.stripe.name;
577:       } else if (payPalModel.value.isEnabled == true) {
578:         selectedPaymentMethod.value = PaymentGateway.paypal.name;
579:       } else if (payStackModel.value.isEnable == true) {
580:         selectedPaymentMethod.value = PaymentGateway.payStack.name;
581:       } else if (mercadoPagoModel.value.isEnabled == true) {
582:         selectedPaymentMethod.value = PaymentGateway.mercadoPago.name;

561:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
562:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
563:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
564:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
565:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
566:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
567:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
568:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
569:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
570: 
571:       if (walletSettingModel.value.isEnabled == true) {
572:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
573:       } else if (cashOnDeliverySettingModel.value.isEnabled == true) {
574:         selectedPaymentMethod.value = PaymentGateway.cod.name;
575:       } else if (stripeModel.value.isEnabled == true) {
576:         selectedPaymentMethod.value = PaymentGateway.stripe.name;
577:       } else if (payPalModel.value.isEnabled == true) {
578:         selectedPaymentMethod.value = PaymentGateway.paypal.name;
579:       } else if (payStackModel.value.isEnable == true) {
580:         selectedPaymentMethod.value = PaymentGateway.payStack.name;
581:       } else if (mercadoPagoModel.value.isEnabled == true) {
582:         selectedPaymentMethod.value = PaymentGateway.mercadoPago.name;
583:       } else if (flutterWaveModel.value.isEnable == true) {

637:   Future<void> displayStripePaymentSheet({required String amount}) async {
638:     try {
639:       await Stripe.instance.presentPaymentSheet().then((value) {
640:         ShowToastDialog.showToast("Payment successfully".tr);
641:         placeOrder();
642:       });
643:     } on StripeException catch (e) {
644:       var lo1 = jsonEncode(e);
645:       var lo2 = jsonDecode(lo1);
646:       StripePayFailedModel lom = StripePayFailedModel.fromJson(lo2);
647:       ShowToastDialog.showToast(lom.error.message);
648:     } catch (e) {
649:       ShowToastDialog.showToast(e.toString());
650:     }
651:   }
652: 
653:   Future createStripeIntent({required String amount}) async {
654:     try {
655:       Map<String, dynamic> body = {
656:         'amount': ((double.parse(amount) * 100).round()).toString(),
657:         'currency': "USD",
658:         'payment_method_types[]': 'card',
659:         "description": "Strip Payment",

660:         "shipping[name]": userModel.value.fullName(),
661:         "shipping[address][line1]": "510 Townsend St",
662:         "shipping[address][postal_code]": "98140",
663:         "shipping[address][city]": "San Francisco",
664:         "shipping[address][state]": "CA",
665:         "shipping[address][country]": "US",
666:       };
667:       var stripeSecret = stripeModel.value.stripeSecret;
668:       var response = await http.post(
669:         Uri.parse('https://api.stripe.com/v1/payment_intents'),
670:         body: body,
671:         headers: {'Authorization': 'Bearer $stripeSecret', 'Content-Type': 'application/x-www-form-urlencoded'},
672:       );
673: 
674:       return jsonDecode(response.body);
675:     } catch (e) {
676:       log(e.toString());
677:     }
678:   }
679: 
680:   //mercadoo
681:   Future<Null> mercadoPagoMakePayment({required BuildContext context, required String amount}) async {
682:     ShowToastDialog.showLoader("Please wait".tr);

661:         "shipping[address][line1]": "510 Townsend St",
662:         "shipping[address][postal_code]": "98140",
663:         "shipping[address][city]": "San Francisco",
664:         "shipping[address][state]": "CA",
665:         "shipping[address][country]": "US",
666:       };
667:       var stripeSecret = stripeModel.value.stripeSecret;
668:       var response = await http.post(
669:         Uri.parse('https://api.stripe.com/v1/payment_intents'),
670:         body: body,
671:         headers: {'Authorization': 'Bearer $stripeSecret', 'Content-Type': 'application/x-www-form-urlencoded'},
672:       );
673: 
674:       return jsonDecode(response.body);
675:     } catch (e) {
676:       log(e.toString());
677:     }
678:   }
679: 
680:   //mercadoo
681:   Future<Null> mercadoPagoMakePayment({required BuildContext context, required String amount}) async {
682:     ShowToastDialog.showLoader("Please wait".tr);
683:     final headers = {'Authorization': 'Bearer ${mercadoPagoModel.value.accessToken}', 'Content-Type': 'application/json'};

666:       };
667:       var stripeSecret = stripeModel.value.stripeSecret;
668:       var response = await http.post(
669:         Uri.parse('https://api.stripe.com/v1/payment_intents'),
670:         body: body,
671:         headers: {'Authorization': 'Bearer $stripeSecret', 'Content-Type': 'application/x-www-form-urlencoded'},
672:       );
673: 
674:       return jsonDecode(response.body);
675:     } catch (e) {
676:       log(e.toString());
677:     }
678:   }
679: 
680:   //mercadoo
681:   Future<Null> mercadoPagoMakePayment({required BuildContext context, required String amount}) async {
682:     ShowToastDialog.showLoader("Please wait".tr);
683:     final headers = {'Authorization': 'Bearer ${mercadoPagoModel.value.accessToken}', 'Content-Type': 'application/json'};
684: 
685:     final body = jsonEncode({
686:       "items": [
687:         {
688:           "title": "Test",

693:         },
694:       ],
695:       "payer": {"email": userModel.value.email},
696:       "back_urls": {"failure": "${Constant.globalUrl}payment/failure", "pending": "${Constant.globalUrl}payment/pending", "success": "${Constant.globalUrl}payment/success"},
697:       "auto_return": "approved",
698:       // Automatically return after payment is approved
699:     });
700: 
701:     final response = await http.post(Uri.parse("https://api.mercadopago.com/checkout/preferences"), headers: headers, body: body);
702:     final data = jsonDecode(response.body);
703: 
704:     if (response.statusCode == 200 || response.statusCode == 201) {
705:       print("MercadoPago Preference Created: $data");
706:       ShowToastDialog.closeLoader();
707:       Get.to(MercadoPagoScreen(initialURl: data['init_point']))!.then((value) {
708:         if (value) {
709:           ShowToastDialog.showToast("Payment Successful!!".tr);
710:           placeOrder();
711:         } else {
712:           ShowToastDialog.showToast("Payment UnSuccessful!!".tr);
713:         }
714:       });
715:     } else {

694:       ],
695:       "payer": {"email": userModel.value.email},
696:       "back_urls": {"failure": "${Constant.globalUrl}payment/failure", "pending": "${Constant.globalUrl}payment/pending", "success": "${Constant.globalUrl}payment/success"},
697:       "auto_return": "approved",
698:       // Automatically return after payment is approved
699:     });
700: 
701:     final response = await http.post(Uri.parse("https://api.mercadopago.com/checkout/preferences"), headers: headers, body: body);
702:     final data = jsonDecode(response.body);
703: 
704:     if (response.statusCode == 200 || response.statusCode == 201) {
705:       print("MercadoPago Preference Created: $data");
706:       ShowToastDialog.closeLoader();
707:       Get.to(MercadoPagoScreen(initialURl: data['init_point']))!.then((value) {
708:         if (value) {
709:           ShowToastDialog.showToast("Payment Successful!!".tr);
710:           placeOrder();
711:         } else {
712:           ShowToastDialog.showToast("Payment UnSuccessful!!".tr);
713:         }
714:       });
715:     } else {
716:       ShowToastDialog.closeLoader();

```

### FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\category_restaurant_controller.dart
```dart
20:   Rx<VendorCategoryModel> vendorCategoryModel = VendorCategoryModel().obs;
21:   RxList<VendorModel> allNearestRestaurant = <VendorModel>[].obs;
22: 
23:   Future<void> getArgument() async {
24:     dynamic argumentData = Get.arguments;
25:     if (argumentData != null) {
26:       vendorCategoryModel.value = argumentData['vendorCategoryModel'];
27:       dineIn.value = argumentData['dineIn'];
28:       ecommarce.value = argumentData['ecommerce'] ?? false;
29:       await getZone();
30:       await getRestaurant();
31:     }
32:     Future.delayed(Duration(seconds: 1), () {
33:       isLoading.value = false;
34:     });
35:   }
36: 
37:   Future getRestaurant() async {
38:     FireStoreUtils.getAllNearestRestaurantByCategoryId(categoryId: vendorCategoryModel.value.id.toString(), isDining: dineIn.value).listen((event) async {
39:       allNearestRestaurant.clear();
40:       allNearestRestaurant.addAll(event);
41:     });
42:   }

```

### FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\dash_board_ecommarce_controller.dart
```dart
1: import 'package:customer/constant/constant.dart';
2: import 'package:customer/screen_ui/ecommarce/home_e_commerce_screen.dart';
3: import '../screen_ui/multi_vendor_service/favourite_screens/favourite_screen.dart';
4: import '../screen_ui/multi_vendor_service/order_list_screen/order_screen.dart';
5: import '../screen_ui/multi_vendor_service/profile_screen/profile_screen.dart';
6: import '../screen_ui/multi_vendor_service/wallet_screen/wallet_screen.dart';
7: import 'package:get/get.dart';
8: 
9: class DashBoardEcommerceController extends GetxController {
10:   RxInt selectedIndex = 0.obs;
11: 
12:   RxList pageList = [].obs;
13: 
14:   @override
15:   void onInit() {
16:     // TODO: implement onInit
17:     if (Constant.walletSetting == false) {
18:       pageList.value = [const HomeECommerceScreen(), const FavouriteScreen(), const OrderScreen(), const ProfileScreen()];
19:     } else {
20:       pageList.value = [const HomeECommerceScreen(), const FavouriteScreen(), const WalletScreen(), const OrderScreen(), const ProfileScreen()];
21:     }
22:     super.onInit();
23:   }

10:   RxInt selectedIndex = 0.obs;
11: 
12:   RxList pageList = [].obs;
13: 
14:   @override
15:   void onInit() {
16:     // TODO: implement onInit
17:     if (Constant.walletSetting == false) {
18:       pageList.value = [const HomeECommerceScreen(), const FavouriteScreen(), const OrderScreen(), const ProfileScreen()];
19:     } else {
20:       pageList.value = [const HomeECommerceScreen(), const FavouriteScreen(), const WalletScreen(), const OrderScreen(), const ProfileScreen()];
21:     }
22:     super.onInit();
23:   }
24: 
25:   DateTime? currentBackPressTime;
26:   RxBool canPopNow = false.obs;
27: }

12:   RxList pageList = [].obs;
13: 
14:   @override
15:   void onInit() {
16:     // TODO: implement onInit
17:     if (Constant.walletSetting == false) {
18:       pageList.value = [const HomeECommerceScreen(), const FavouriteScreen(), const OrderScreen(), const ProfileScreen()];
19:     } else {
20:       pageList.value = [const HomeECommerceScreen(), const FavouriteScreen(), const WalletScreen(), const OrderScreen(), const ProfileScreen()];
21:     }
22:     super.onInit();
23:   }
24: 
25:   DateTime? currentBackPressTime;
26:   RxBool canPopNow = false.obs;
27: }

```

### FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\dine_in_controller.dart
```dart
58: 
59:     update();
60:     Future.delayed(const Duration(seconds: 3), () {
61:       isLoading.value = false;
62:     });
63:   }
64: 
65:   Future<void> getCategory() async {
66:     await FireStoreUtils.getHomeVendorCategory().then((value) {
67:       vendorCategoryModel.value = value;
68:     });
69: 
70:     await FireStoreUtils.getHomeBottomBanner().then((value) {
71:       bannerBottomModel.value = value;
72:     });
73:     if (Constant.userModel != null) {
74:       await FireStoreUtils.getFavouriteRestaurant().then((value) {
75:         favouriteList.value = value;
76:       });
77:     }
78:   }
79: 
80:   Future<void> getZone() async {

62:     });
63:   }
64: 
65:   Future<void> getCategory() async {
66:     await FireStoreUtils.getHomeVendorCategory().then((value) {
67:       vendorCategoryModel.value = value;
68:     });
69: 
70:     await FireStoreUtils.getHomeBottomBanner().then((value) {
71:       bannerBottomModel.value = value;
72:     });
73:     if (Constant.userModel != null) {
74:       await FireStoreUtils.getFavouriteRestaurant().then((value) {
75:         favouriteList.value = value;
76:       });
77:     }
78:   }
79: 
80:   Future<void> getZone() async {
81:     await FireStoreUtils.getZone().then((value) {
82:       if (value != null) {
83:         for (int i = 0; i < value.length; i++) {
84:           if (Constant.isPointInPolygon(LatLng(Constant.selectedLocation.location!.latitude ?? 0.0, Constant.selectedLocation.location!.longitude ?? 0.0), value[i].area!)) {

```

### FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart
```dart
81:         (a, b) => Constant.calculateReview(
82:           reviewCount: b.reviewsCount.toString(),
83:           reviewSum: b.reviewsSum.toString(),
84:         ).compareTo(Constant.calculateReview(reviewCount: a.reviewsCount.toString(), reviewSum: a.reviewsSum.toString())),
85:       );
86: 
87:       newArrivalRestaurantList.sort((a, b) => (b.createdAt ?? Timestamp.now()).toDate().compareTo((a.createdAt ?? Timestamp.now()).toDate()));
88:       await getVendorCategory();
89:       await FireStoreUtils.getHomeCoupon().then((value) {
90:         couponRestaurantList.clear();
91:         couponList.clear();
92:         for (var element1 in value) {
93:           for (var element in allNearestRestaurant) {
94:             if (element1.vendorID == element.id && element1.expiresAt!.toDate().isAfter(DateTime.now())) {
95:               couponList.add(element1);
96:               couponRestaurantList.add(element);
97:             }
98:           }
99:         }
100:       });
101: 
102:       await FireStoreUtils.getStory().then((stories) {
103:         storyList.clear();

137:       } else {
138:         isLoading.value = false;
139:       }
140:       update();
141:     });
142:   }
143: 
144:   Future<void> getVendorCategory() async {
145:     await FireStoreUtils.getHomeVendorCategory().then((value) {
146:       vendorCategoryModel.value = value;
147:       if (Constant.restaurantList != null) {
148:         List<String> usedCategoryIds = Constant.restaurantList!.expand((vendor) => vendor.categoryID ?? []).whereType<String>().toSet().toList();
149:         vendorCategoryModel.value = vendorCategoryModel.where((category) => usedCategoryIds.contains(category.id)).toList();
150:       }
151:     });
152: 
153:     await FireStoreUtils.getHomeTopBanner().then((value) {
154:       bannerModel.value = value;
155:     });
156: 
157:     await FireStoreUtils.getHomeBottomBanner().then((value) {
158:       bannerBottomModel.value = value;
159:     });

145:     await FireStoreUtils.getHomeVendorCategory().then((value) {
146:       vendorCategoryModel.value = value;
147:       if (Constant.restaurantList != null) {
148:         List<String> usedCategoryIds = Constant.restaurantList!.expand((vendor) => vendor.categoryID ?? []).whereType<String>().toSet().toList();
149:         vendorCategoryModel.value = vendorCategoryModel.where((category) => usedCategoryIds.contains(category.id)).toList();
150:       }
151:     });
152: 
153:     await FireStoreUtils.getHomeTopBanner().then((value) {
154:       bannerModel.value = value;
155:     });
156: 
157:     await FireStoreUtils.getHomeBottomBanner().then((value) {
158:       bannerBottomModel.value = value;
159:     });
160: 
161:     await getFavouriteRestaurant();
162:   }
163: 
164:   Future<void> getFavouriteRestaurant() async {
165:     if (Constant.userModel?.id != null) {
166:       await FireStoreUtils.getFavouriteRestaurant().then((value) {
167:         favouriteList.value = value;

149:         vendorCategoryModel.value = vendorCategoryModel.where((category) => usedCategoryIds.contains(category.id)).toList();
150:       }
151:     });
152: 
153:     await FireStoreUtils.getHomeTopBanner().then((value) {
154:       bannerModel.value = value;
155:     });
156: 
157:     await FireStoreUtils.getHomeBottomBanner().then((value) {
158:       bannerBottomModel.value = value;
159:     });
160: 
161:     await getFavouriteRestaurant();
162:   }
163: 
164:   Future<void> getFavouriteRestaurant() async {
165:     if (Constant.userModel?.id != null) {
166:       await FireStoreUtils.getFavouriteRestaurant().then((value) {
167:         favouriteList.value = value;
168:       });
169:     }
170:     log("Constant.userModel?.id :: ${favouriteList.length}");
171:   }

```

### FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\gift_card_controller.dart
```dart
173:   Rx<RazorPayModel> razorPayModel = RazorPayModel().obs;
174: 
175:   Rx<MidTrans> midTransModel = MidTrans().obs;
176:   Rx<OrangeMoney> orangeMoneyModel = OrangeMoney().obs;
177:   Rx<Xendit> xenditModel = Xendit().obs;
178: 
179:   Future<void> getPaymentSettings() async {
180:     await FireStoreUtils.getPaymentSettingsData().then((value) {
181:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
182:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
183:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
184:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
185:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
186:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
187:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
188:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
189:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
190:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
191:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
192:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
193:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
194:       if (walletSettingModel.value.isEnabled == true) {
195:         selectedPaymentMethod.value = PaymentGateway.wallet.name;

174: 
175:   Rx<MidTrans> midTransModel = MidTrans().obs;
176:   Rx<OrangeMoney> orangeMoneyModel = OrangeMoney().obs;
177:   Rx<Xendit> xenditModel = Xendit().obs;
178: 
179:   Future<void> getPaymentSettings() async {
180:     await FireStoreUtils.getPaymentSettingsData().then((value) {
181:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
182:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
183:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
184:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
185:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
186:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
187:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
188:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
189:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
190:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
191:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
192:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
193:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
194:       if (walletSettingModel.value.isEnabled == true) {
195:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
196:       } else if (stripeModel.value.isEnabled == true) {

175:   Rx<MidTrans> midTransModel = MidTrans().obs;
176:   Rx<OrangeMoney> orangeMoneyModel = OrangeMoney().obs;
177:   Rx<Xendit> xenditModel = Xendit().obs;
178: 
179:   Future<void> getPaymentSettings() async {
180:     await FireStoreUtils.getPaymentSettingsData().then((value) {
181:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
182:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
183:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
184:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
185:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
186:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
187:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
188:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
189:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
190:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
191:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
192:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
193:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
194:       if (walletSettingModel.value.isEnabled == true) {
195:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
196:       } else if (stripeModel.value.isEnabled == true) {
197:         selectedPaymentMethod.value = PaymentGateway.stripe.name;

176:   Rx<OrangeMoney> orangeMoneyModel = OrangeMoney().obs;
177:   Rx<Xendit> xenditModel = Xendit().obs;
178: 
179:   Future<void> getPaymentSettings() async {
180:     await FireStoreUtils.getPaymentSettingsData().then((value) {
181:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
182:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
183:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
184:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
185:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
186:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
187:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
188:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
189:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
190:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
191:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
192:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
193:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
194:       if (walletSettingModel.value.isEnabled == true) {
195:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
196:       } else if (stripeModel.value.isEnabled == true) {
197:         selectedPaymentMethod.value = PaymentGateway.stripe.name;
198:       } else if (payPalModel.value.isEnabled == true) {

177:   Rx<Xendit> xenditModel = Xendit().obs;
178: 
179:   Future<void> getPaymentSettings() async {
180:     await FireStoreUtils.getPaymentSettingsData().then((value) {
181:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
182:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
183:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
184:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
185:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
186:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
187:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
188:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
189:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
190:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
191:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
192:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
193:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
194:       if (walletSettingModel.value.isEnabled == true) {
195:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
196:       } else if (stripeModel.value.isEnabled == true) {
197:         selectedPaymentMethod.value = PaymentGateway.stripe.name;
198:       } else if (payPalModel.value.isEnabled == true) {
199:         selectedPaymentMethod.value = PaymentGateway.paypal.name;

178: 
179:   Future<void> getPaymentSettings() async {
180:     await FireStoreUtils.getPaymentSettingsData().then((value) {
181:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
182:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
183:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
184:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
185:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
186:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
187:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
188:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
189:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
190:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
191:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
192:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
193:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
194:       if (walletSettingModel.value.isEnabled == true) {
195:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
196:       } else if (stripeModel.value.isEnabled == true) {
197:         selectedPaymentMethod.value = PaymentGateway.stripe.name;
198:       } else if (payPalModel.value.isEnabled == true) {
199:         selectedPaymentMethod.value = PaymentGateway.paypal.name;
200:       } else if (payStackModel.value.isEnable == true) {

179:   Future<void> getPaymentSettings() async {
180:     await FireStoreUtils.getPaymentSettingsData().then((value) {
181:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
182:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
183:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
184:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
185:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
186:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
187:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
188:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
189:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
190:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
191:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
192:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
193:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
194:       if (walletSettingModel.value.isEnabled == true) {
195:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
196:       } else if (stripeModel.value.isEnabled == true) {
197:         selectedPaymentMethod.value = PaymentGateway.stripe.name;
198:       } else if (payPalModel.value.isEnabled == true) {
199:         selectedPaymentMethod.value = PaymentGateway.paypal.name;
200:       } else if (payStackModel.value.isEnable == true) {
201:         selectedPaymentMethod.value = PaymentGateway.payStack.name;

180:     await FireStoreUtils.getPaymentSettingsData().then((value) {
181:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
182:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
183:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
184:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
185:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
186:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
187:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
188:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
189:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
190:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
191:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
192:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
193:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
194:       if (walletSettingModel.value.isEnabled == true) {
195:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
196:       } else if (stripeModel.value.isEnabled == true) {
197:         selectedPaymentMethod.value = PaymentGateway.stripe.name;
198:       } else if (payPalModel.value.isEnabled == true) {
199:         selectedPaymentMethod.value = PaymentGateway.paypal.name;
200:       } else if (payStackModel.value.isEnable == true) {
201:         selectedPaymentMethod.value = PaymentGateway.payStack.name;
202:       } else if (mercadoPagoModel.value.isEnabled == true) {

181:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
182:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
183:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
184:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
185:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
186:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
187:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
188:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
189:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
190:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
191:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
192:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
193:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
194:       if (walletSettingModel.value.isEnabled == true) {
195:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
196:       } else if (stripeModel.value.isEnabled == true) {
197:         selectedPaymentMethod.value = PaymentGateway.stripe.name;
198:       } else if (payPalModel.value.isEnabled == true) {
199:         selectedPaymentMethod.value = PaymentGateway.paypal.name;
200:       } else if (payStackModel.value.isEnable == true) {
201:         selectedPaymentMethod.value = PaymentGateway.payStack.name;
202:       } else if (mercadoPagoModel.value.isEnabled == true) {
203:         selectedPaymentMethod.value = PaymentGateway.mercadoPago.name;

182:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
183:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
184:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
185:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
186:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
187:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
188:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
189:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
190:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
191:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
192:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
193:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
194:       if (walletSettingModel.value.isEnabled == true) {
195:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
196:       } else if (stripeModel.value.isEnabled == true) {
197:         selectedPaymentMethod.value = PaymentGateway.stripe.name;
198:       } else if (payPalModel.value.isEnabled == true) {
199:         selectedPaymentMethod.value = PaymentGateway.paypal.name;
200:       } else if (payStackModel.value.isEnable == true) {
201:         selectedPaymentMethod.value = PaymentGateway.payStack.name;
202:       } else if (mercadoPagoModel.value.isEnabled == true) {
203:         selectedPaymentMethod.value = PaymentGateway.mercadoPago.name;
204:       } else if (flutterWaveModel.value.isEnable == true) {

183:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
184:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
185:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
186:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
187:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
188:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
189:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
190:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
191:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
192:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
193:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
194:       if (walletSettingModel.value.isEnabled == true) {
195:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
196:       } else if (stripeModel.value.isEnabled == true) {
197:         selectedPaymentMethod.value = PaymentGateway.stripe.name;
198:       } else if (payPalModel.value.isEnabled == true) {
199:         selectedPaymentMethod.value = PaymentGateway.paypal.name;
200:       } else if (payStackModel.value.isEnable == true) {
201:         selectedPaymentMethod.value = PaymentGateway.payStack.name;
202:       } else if (mercadoPagoModel.value.isEnabled == true) {
203:         selectedPaymentMethod.value = PaymentGateway.mercadoPago.name;
204:       } else if (flutterWaveModel.value.isEnable == true) {
205:         selectedPaymentMethod.value = PaymentGateway.flutterWave.name;

184:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
185:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
186:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
187:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
188:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
189:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
190:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
191:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
192:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
193:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
194:       if (walletSettingModel.value.isEnabled == true) {
195:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
196:       } else if (stripeModel.value.isEnabled == true) {
197:         selectedPaymentMethod.value = PaymentGateway.stripe.name;
198:       } else if (payPalModel.value.isEnabled == true) {
199:         selectedPaymentMethod.value = PaymentGateway.paypal.name;
200:       } else if (payStackModel.value.isEnable == true) {
201:         selectedPaymentMethod.value = PaymentGateway.payStack.name;
202:       } else if (mercadoPagoModel.value.isEnabled == true) {
203:         selectedPaymentMethod.value = PaymentGateway.mercadoPago.name;
204:       } else if (flutterWaveModel.value.isEnable == true) {
205:         selectedPaymentMethod.value = PaymentGateway.flutterWave.name;
206:       } else if (payFastModel.value.isEnable == true) {

185:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
186:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
187:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
188:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
189:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
190:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
191:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
192:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
193:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
194:       if (walletSettingModel.value.isEnabled == true) {
195:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
196:       } else if (stripeModel.value.isEnabled == true) {
197:         selectedPaymentMethod.value = PaymentGateway.stripe.name;
198:       } else if (payPalModel.value.isEnabled == true) {
199:         selectedPaymentMethod.value = PaymentGateway.paypal.name;
200:       } else if (payStackModel.value.isEnable == true) {
201:         selectedPaymentMethod.value = PaymentGateway.payStack.name;
202:       } else if (mercadoPagoModel.value.isEnabled == true) {
203:         selectedPaymentMethod.value = PaymentGateway.mercadoPago.name;
204:       } else if (flutterWaveModel.value.isEnable == true) {
205:         selectedPaymentMethod.value = PaymentGateway.flutterWave.name;
206:       } else if (payFastModel.value.isEnable == true) {
207:         selectedPaymentMethod.value = PaymentGateway.payFast.name;

319:   Future<void> displayStripePaymentSheet({required String amount}) async {
320:     try {
321:       await Stripe.instance.presentPaymentSheet().then((value) {
322:         ShowToastDialog.showToast("Payment successfully".tr);
323:         placeOrder();
324:       });
325:     } on StripeException catch (e) {
326:       var lo1 = jsonEncode(e);
327:       var lo2 = jsonDecode(lo1);
328:       StripePayFailedModel lom = StripePayFailedModel.fromJson(lo2);
329:       ShowToastDialog.showToast(lom.error.message);
330:     } catch (e) {
331:       ShowToastDialog.showToast(e.toString());
332:     }
333:   }
334: 
335:   Future createStripeIntent({required String amount}) async {
336:     try {
337:       Map<String, dynamic> body = {
338:         'amount': ((double.parse(amount) * 100).round()).toString(),
339:         'currency': "USD",
340:         'payment_method_types[]': 'card',
341:         "description": "Strip Payment",

342:         "shipping[name]": userModel.value.fullName(),
343:         "shipping[address][line1]": "510 Townsend St",
344:         "shipping[address][postal_code]": "98140",
345:         "shipping[address][city]": "San Francisco",
346:         "shipping[address][state]": "CA",
347:         "shipping[address][country]": "US",
348:       };
349:       var stripeSecret = stripeModel.value.stripeSecret;
350:       var response = await http.post(
351:         Uri.parse('https://api.stripe.com/v1/payment_intents'),
352:         body: body,
353:         headers: {'Authorization': 'Bearer $stripeSecret', 'Content-Type': 'application/x-www-form-urlencoded'},
354:       );
355: 
356:       return jsonDecode(response.body);
357:     } catch (e) {
358:       print(e.toString());
359:     }
360:   }
361: 
362:   //mercadoo
363:   Future<Null> mercadoPagoMakePayment({required BuildContext context, required String amount}) async {
364:     ShowToastDialog.showLoader("Please wait".tr);

343:         "shipping[address][line1]": "510 Townsend St",
344:         "shipping[address][postal_code]": "98140",
345:         "shipping[address][city]": "San Francisco",
346:         "shipping[address][state]": "CA",
347:         "shipping[address][country]": "US",
348:       };
349:       var stripeSecret = stripeModel.value.stripeSecret;
350:       var response = await http.post(
351:         Uri.parse('https://api.stripe.com/v1/payment_intents'),
352:         body: body,
353:         headers: {'Authorization': 'Bearer $stripeSecret', 'Content-Type': 'application/x-www-form-urlencoded'},
354:       );
355: 
356:       return jsonDecode(response.body);
357:     } catch (e) {
358:       print(e.toString());
359:     }
360:   }
361: 
362:   //mercadoo
363:   Future<Null> mercadoPagoMakePayment({required BuildContext context, required String amount}) async {
364:     ShowToastDialog.showLoader("Please wait".tr);
365:     final headers = {'Authorization': 'Bearer ${mercadoPagoModel.value.accessToken}', 'Content-Type': 'application/json'};

348:       };
349:       var stripeSecret = stripeModel.value.stripeSecret;
350:       var response = await http.post(
351:         Uri.parse('https://api.stripe.com/v1/payment_intents'),
352:         body: body,
353:         headers: {'Authorization': 'Bearer $stripeSecret', 'Content-Type': 'application/x-www-form-urlencoded'},
354:       );
355: 
356:       return jsonDecode(response.body);
357:     } catch (e) {
358:       print(e.toString());
359:     }
360:   }
361: 
362:   //mercadoo
363:   Future<Null> mercadoPagoMakePayment({required BuildContext context, required String amount}) async {
364:     ShowToastDialog.showLoader("Please wait".tr);
365:     final headers = {'Authorization': 'Bearer ${mercadoPagoModel.value.accessToken}', 'Content-Type': 'application/json'};
366: 
367:     final body = jsonEncode({
368:       "items": [
369:         {
370:           "title": "Test",

374:           "unit_price": double.parse(amount),
375:         },
376:       ],
377:       "payer": {"email": userModel.value.email},
378:       "back_urls": {"failure": "${Constant.globalUrl}payment/failure", "pending": "${Constant.globalUrl}payment/pending", "success": "${Constant.globalUrl}payment/success"},
379:       "auto_return": "approved", // Automatically return after payment is approved
380:     });
381: 
382:     final response = await http.post(Uri.parse("https://api.mercadopago.com/checkout/preferences"), headers: headers, body: body);
383: 
384:     if (response.statusCode == 200 || response.statusCode == 201) {
385:       final data = jsonDecode(response.body);
386:       ShowToastDialog.closeLoader();
387:       Get.to(MercadoPagoScreen(initialURl: data['init_point']))!.then((value) {
388:         if (value) {
389:           ShowToastDialog.showToast("Payment Successful!!".tr);
390:           placeOrder();
391:         } else {
392:           ShowToastDialog.showToast("Payment UnSuccessful!!".tr);
393:         }
394:       });
395:     } else {
396:       ShowToastDialog.closeLoader();

376:       ],
377:       "payer": {"email": userModel.value.email},
378:       "back_urls": {"failure": "${Constant.globalUrl}payment/failure", "pending": "${Constant.globalUrl}payment/pending", "success": "${Constant.globalUrl}payment/success"},
379:       "auto_return": "approved", // Automatically return after payment is approved
380:     });
381: 
382:     final response = await http.post(Uri.parse("https://api.mercadopago.com/checkout/preferences"), headers: headers, body: body);
383: 
384:     if (response.statusCode == 200 || response.statusCode == 201) {
385:       final data = jsonDecode(response.body);
386:       ShowToastDialog.closeLoader();
387:       Get.to(MercadoPagoScreen(initialURl: data['init_point']))!.then((value) {
388:         if (value) {
389:           ShowToastDialog.showToast("Payment Successful!!".tr);
390:           placeOrder();
391:         } else {
392:           ShowToastDialog.showToast("Payment UnSuccessful!!".tr);
393:         }
394:       });
395:     } else {
396:       ShowToastDialog.closeLoader();
397:       print('Error creating preference: ${response.body}');
398:       return null;

377:       "payer": {"email": userModel.value.email},
378:       "back_urls": {"failure": "${Constant.globalUrl}payment/failure", "pending": "${Constant.globalUrl}payment/pending", "success": "${Constant.globalUrl}payment/success"},
379:       "auto_return": "approved", // Automatically return after payment is approved
380:     });
381: 
382:     final response = await http.post(Uri.parse("https://api.mercadopago.com/checkout/preferences"), headers: headers, body: body);
383: 
384:     if (response.statusCode == 200 || response.statusCode == 201) {
385:       final data = jsonDecode(response.body);
386:       ShowToastDialog.closeLoader();
387:       Get.to(MercadoPagoScreen(initialURl: data['init_point']))!.then((value) {
388:         if (value) {
389:           ShowToastDialog.showToast("Payment Successful!!".tr);
390:           placeOrder();
391:         } else {
392:           ShowToastDialog.showToast("Payment UnSuccessful!!".tr);
393:         }
394:       });
395:     } else {
396:       ShowToastDialog.closeLoader();
397:       print('Error creating preference: ${response.body}');
398:       return null;
399:     }

```

### FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\home_e_commerce_controller.dart
```dart
7: import 'package:customer/models/vendor_model.dart';
8: import 'package:customer/service/cart_provider.dart';
9: import 'package:customer/service/fire_store_utils.dart';
10: import 'package:flutter/material.dart';
11: import 'package:get/get.dart';
12: 
13: import '../constant/constant.dart';
14: 
15: class HomeECommerceController extends GetxController {
16:   final CartProvider cartProvider = CartProvider();
17: 
18:   Future<void> getCartData() async {
19:     cartProvider.cartStream.listen((event) async {
20:       cartItem.clear();
21:       cartItem.addAll(event);
22:     });
23:     update();
24:   }
25: 
26:   RxBool isLoading = true.obs;
27:   RxBool isListView = true.obs;
28:   RxBool isPopular = true.obs;
29: 

94:       } else {
95:         isLoading.value = false;
96:       }
97:       update();
98:     });
99:   }
100: 
101:   Future<void> getVendorCategory() async {
102:     await FireStoreUtils.getHomeVendorCategory().then((value) {
103:       vendorCategoryModel.value = value;
104:     });
105:     await FireStoreUtils.getHomePageShowCategory().then((value) {
106:       categoryWiseProductList.value = value;
107:     });
108: 
109:     await FireStoreUtils.getHomeTopBanner().then((value) {
110:       bannerModel.value = value;
111:     });
112: 
113:     await FireStoreUtils.getHomeBottomBanner().then((value) {
114:       bannerBottomModel.value = value;
115:     });
116: 

97:       update();
98:     });
99:   }
100: 
101:   Future<void> getVendorCategory() async {
102:     await FireStoreUtils.getHomeVendorCategory().then((value) {
103:       vendorCategoryModel.value = value;
104:     });
105:     await FireStoreUtils.getHomePageShowCategory().then((value) {
106:       categoryWiseProductList.value = value;
107:     });
108: 
109:     await FireStoreUtils.getHomeTopBanner().then((value) {
110:       bannerModel.value = value;
111:     });
112: 
113:     await FireStoreUtils.getHomeBottomBanner().then((value) {
114:       bannerBottomModel.value = value;
115:     });
116: 
117:     await FireStoreUtils.getBrandList().then((value) {
118:       brandList.value = value;
119:     });

101:   Future<void> getVendorCategory() async {
102:     await FireStoreUtils.getHomeVendorCategory().then((value) {
103:       vendorCategoryModel.value = value;
104:     });
105:     await FireStoreUtils.getHomePageShowCategory().then((value) {
106:       categoryWiseProductList.value = value;
107:     });
108: 
109:     await FireStoreUtils.getHomeTopBanner().then((value) {
110:       bannerModel.value = value;
111:     });
112: 
113:     await FireStoreUtils.getHomeBottomBanner().then((value) {
114:       bannerBottomModel.value = value;
115:     });
116: 
117:     await FireStoreUtils.getBrandList().then((value) {
118:       brandList.value = value;
119:     });
120:     await getFavouriteRestaurant();
121:   }
122: 
123:   RxList<FavouriteModel> favouriteList = <FavouriteModel>[].obs;

105:     await FireStoreUtils.getHomePageShowCategory().then((value) {
106:       categoryWiseProductList.value = value;
107:     });
108: 
109:     await FireStoreUtils.getHomeTopBanner().then((value) {
110:       bannerModel.value = value;
111:     });
112: 
113:     await FireStoreUtils.getHomeBottomBanner().then((value) {
114:       bannerBottomModel.value = value;
115:     });
116: 
117:     await FireStoreUtils.getBrandList().then((value) {
118:       brandList.value = value;
119:     });
120:     await getFavouriteRestaurant();
121:   }
122: 
123:   RxList<FavouriteModel> favouriteList = <FavouriteModel>[].obs;
124: 
125:   Future<void> getFavouriteRestaurant() async {
126:     if (Constant.userModel?.id != null) {
127:       await FireStoreUtils.getFavouriteRestaurant().then((value) {

```

### FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\home_parcel_controller.dart
```dart
15:     loadData();
16:   }
17: 
18:   void loadData() async {
19:     try {
20:       isLoading.value = true;
21: 
22:       // Load banners
23:       await FireStoreUtils.getHomeTopBanner().then((value) {
24:         bannerTopHome.value = value;
25:       });
26: 
27:       // Load parcel categories
28:       await FireStoreUtils.getParcelServiceCategory().then((value) {
29:         parcelCategory.value = value;
30:       });
31: 
32:     } catch (e) {
33:       bannerTopHome.clear();
34:       parcelCategory.clear();
35:     } finally {
36:       isLoading.value = false;
37:     }

```

### FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart
```dart
337:       print("âŒ Error in updateRouteMarkers: $e");
338:     }
339:   }
340: 
341:   Future<void> fetchGoogleRouteBetween(LatLng originPoint, LatLng destPoint) async {
342:     final origin = '${originPoint.latitude},${originPoint.longitude}';
343:     final destination = '${destPoint.latitude},${destPoint.longitude}';
344:     final url = Uri.parse(
345:       'https://maps.googleapis.com/maps/api/directions/json'
346:       '?origin=$origin&destination=$destination'
347:       '&mode=driving&key=${Constant.mapAPIKey}',
348:     );
349: 
350:     try {
351:       final response = await http.get(url);
352:       final data = json.decode(response.body);
353: 
354:       if (data['status'] == 'OK') {
355:         final route = data['routes'][0];
356:         final encodedPolyline = route['overview_polyline']['points'];
357:         final decodedPoints = PolylinePoints.decodePolyline(encodedPolyline);
358:         final coordinates = decodedPoints.map((e) => LatLng(e.latitude, e.longitude)).toList();
359: 

339:   }
340: 
341:   Future<void> fetchGoogleRouteBetween(LatLng originPoint, LatLng destPoint) async {
342:     final origin = '${originPoint.latitude},${originPoint.longitude}';
343:     final destination = '${destPoint.latitude},${destPoint.longitude}';
344:     final url = Uri.parse(
345:       'https://maps.googleapis.com/maps/api/directions/json'
346:       '?origin=$origin&destination=$destination'
347:       '&mode=driving&key=${Constant.mapAPIKey}',
348:     );
349: 
350:     try {
351:       final response = await http.get(url);
352:       final data = json.decode(response.body);
353: 
354:       if (data['status'] == 'OK') {
355:         final route = data['routes'][0];
356:         final encodedPolyline = route['overview_polyline']['points'];
357:         final decodedPoints = PolylinePoints.decodePolyline(encodedPolyline);
358:         final coordinates = decodedPoints.map((e) => LatLng(e.latitude, e.longitude)).toList();
359: 
360:         addPolyLine(coordinates);
361: 

343:     final destination = '${destPoint.latitude},${destPoint.longitude}';
344:     final url = Uri.parse(
345:       'https://maps.googleapis.com/maps/api/directions/json'
346:       '?origin=$origin&destination=$destination'
347:       '&mode=driving&key=${Constant.mapAPIKey}',
348:     );
349: 
350:     try {
351:       final response = await http.get(url);
352:       final data = json.decode(response.body);
353: 
354:       if (data['status'] == 'OK') {
355:         final route = data['routes'][0];
356:         final encodedPolyline = route['overview_polyline']['points'];
357:         final decodedPoints = PolylinePoints.decodePolyline(encodedPolyline);
358:         final coordinates = decodedPoints.map((e) => LatLng(e.latitude, e.longitude)).toList();
359: 
360:         addPolyLine(coordinates);
361: 
362:         // Distance + duration update
363:         final leg = route['legs'][0];
364:         final totalDistance = leg['distance']['value'] / 1000.0;
365:         final totalDuration = leg['duration']['value'] / 60.0;

344:     final url = Uri.parse(
345:       'https://maps.googleapis.com/maps/api/directions/json'
346:       '?origin=$origin&destination=$destination'
347:       '&mode=driving&key=${Constant.mapAPIKey}',
348:     );
349: 
350:     try {
351:       final response = await http.get(url);
352:       final data = json.decode(response.body);
353: 
354:       if (data['status'] == 'OK') {
355:         final route = data['routes'][0];
356:         final encodedPolyline = route['overview_polyline']['points'];
357:         final decodedPoints = PolylinePoints.decodePolyline(encodedPolyline);
358:         final coordinates = decodedPoints.map((e) => LatLng(e.latitude, e.longitude)).toList();
359: 
360:         addPolyLine(coordinates);
361: 
362:         // Distance + duration update
363:         final leg = route['legs'][0];
364:         final totalDistance = leg['distance']['value'] / 1000.0;
365:         final totalDuration = leg['duration']['value'] / 60.0;
366: 

362:         // Distance + duration update
363:         final leg = route['legs'][0];
364:         final totalDistance = leg['distance']['value'] / 1000.0;
365:         final totalDuration = leg['duration']['value'] / 60.0;
366: 
367:         distance.value = totalDistance;
368:         duration.value = '${totalDuration.toStringAsFixed(0)} min';
369:       } else {
370:         print('Google Directions API error: ${data['status']}');
371:       }
372:     } catch (e) {
373:       print("Error fetching driver route: $e");
374:     }
375:   }
376: 
377:   void calculateTotalAmountAfterAccept() {
378:     taxAmount = 0.0.obs;
379:     discount = 0.0.obs;
380:     orderTaxAmount.value = 0.0;
381:     platformTaxAmount.value = 0.0;
382:     subTotal.value = double.parse(currentOrder.value.subTotal.toString());
383:     discount.value = double.parse(currentOrder.value.discount ?? '0.0');
384: 

442:           date: Timestamp.now(),
443:           paymentMethod: PaymentGateway.wallet.name,
444:           transactionUser: "customer",
445:           userId: FireStoreUtils.getCurrentUid(),
446:           isTopup: false,
447:           orderId: currentOrder.value.id,
448:           note: "Cab Amount debited".tr,
449:           paymentStatus: "success".tr,
450:           serviceType: Constant.parcelServiceType,
451:         );
452: 
453:         await FireStoreUtils.setWalletTransaction(transactionModel).then((value) async {
454:           if (value == true) {
455:             await FireStoreUtils.updateUserWallet(amount: "-${totalAmount.value.toString()}", userId: FireStoreUtils.getCurrentUid());
456:           }
457:         });
458:       }
459: 
460:       await FireStoreUtils.cabOrderPlace(currentOrder.value).then((value) {
461:         ShowToastDialog.showToast("Payment successfully".tr);
462:         Get.back();
463:       });
464:     }

645: 
646:   Future<void> fetchGoogleRouteWithWaypoints() async {
647:     if (departureLatLong.value.latitude == 0.0 || destinationLatLong.value.latitude == 0.0) return;
648: 
649:     final origin = '${departureLatLong.value.latitude},${departureLatLong.value.longitude}';
650:     final destination = '${destinationLatLong.value.latitude},${destinationLatLong.value.longitude}';
651: 
652:     final url = Uri.parse(
653:       'https://maps.googleapis.com/maps/api/directions/json'
654:       '?origin=$origin&destination=$destination'
655:       '&mode=driving&key=${Constant.mapAPIKey}',
656:     );
657: 
658:     try {
659:       final response = await http.get(url);
660:       final data = json.decode(response.body);
661:       log("=======>$data");
662:       if (data['status'] == 'OK') {
663:         final route = data['routes'][0];
664:         final legs = route['legs'] as List;
665: 
666:         // Polyline
667:         final encodedPolyline = route['overview_polyline']['points'];

647:     if (departureLatLong.value.latitude == 0.0 || destinationLatLong.value.latitude == 0.0) return;
648: 
649:     final origin = '${departureLatLong.value.latitude},${departureLatLong.value.longitude}';
650:     final destination = '${destinationLatLong.value.latitude},${destinationLatLong.value.longitude}';
651: 
652:     final url = Uri.parse(
653:       'https://maps.googleapis.com/maps/api/directions/json'
654:       '?origin=$origin&destination=$destination'
655:       '&mode=driving&key=${Constant.mapAPIKey}',
656:     );
657: 
658:     try {
659:       final response = await http.get(url);
660:       final data = json.decode(response.body);
661:       log("=======>$data");
662:       if (data['status'] == 'OK') {
663:         final route = data['routes'][0];
664:         final legs = route['legs'] as List;
665: 
666:         // Polyline
667:         final encodedPolyline = route['overview_polyline']['points'];
668:         final decodedPoints = PolylinePoints.decodePolyline(encodedPolyline);
669:         final coordinates = decodedPoints.map((e) => LatLng(e.latitude, e.longitude)).toList();

651: 
652:     final url = Uri.parse(
653:       'https://maps.googleapis.com/maps/api/directions/json'
654:       '?origin=$origin&destination=$destination'
655:       '&mode=driving&key=${Constant.mapAPIKey}',
656:     );
657: 
658:     try {
659:       final response = await http.get(url);
660:       final data = json.decode(response.body);
661:       log("=======>$data");
662:       if (data['status'] == 'OK') {
663:         final route = data['routes'][0];
664:         final legs = route['legs'] as List;
665: 
666:         // Polyline
667:         final encodedPolyline = route['overview_polyline']['points'];
668:         final decodedPoints = PolylinePoints.decodePolyline(encodedPolyline);
669:         final coordinates = decodedPoints.map((e) => LatLng(e.latitude, e.longitude)).toList();
670: 
671:         addPolyLine(coordinates);
672: 
673:         // Distance & Duration

652:     final url = Uri.parse(
653:       'https://maps.googleapis.com/maps/api/directions/json'
654:       '?origin=$origin&destination=$destination'
655:       '&mode=driving&key=${Constant.mapAPIKey}',
656:     );
657: 
658:     try {
659:       final response = await http.get(url);
660:       final data = json.decode(response.body);
661:       log("=======>$data");
662:       if (data['status'] == 'OK') {
663:         final route = data['routes'][0];
664:         final legs = route['legs'] as List;
665: 
666:         // Polyline
667:         final encodedPolyline = route['overview_polyline']['points'];
668:         final decodedPoints = PolylinePoints.decodePolyline(encodedPolyline);
669:         final coordinates = decodedPoints.map((e) => LatLng(e.latitude, e.longitude)).toList();
670: 
671:         addPolyLine(coordinates);
672: 
673:         // Distance & Duration
674:         num totalDistance = 0;

685:           distance.value = totalDistance / 1609.34;
686:         }
687: 
688:         // Format duration
689:         final hours = totalDuration ~/ 3600;
690:         final minutes = ((totalDuration % 3600) / 60).round();
691:         duration.value = '${hours}h ${minutes}m';
692:       } else {
693:         print('Google Directions API Error: ${data['status']}');
694:       }
695:     } catch (e) {
696:       print("Google route fetch error: $e");
697:     }
698:   }
699: 
700:   Future<void> fetchRouteWithWaypoints(List<latlong.LatLng> points) async {
701:     final coordinates = points.map((p) => '${p.longitude},${p.latitude}').join(';');
702:     final url = Uri.parse('https://router.project-osrm.org/route/v1/driving/$coordinates?overview=full&geometries=geojson');
703: 
704:     try {
705:       final response = await http.get(url);
706:       if (response.statusCode == 200) {
707:         final decoded = json.decode(response.body);

697:     }
698:   }
699: 
700:   Future<void> fetchRouteWithWaypoints(List<latlong.LatLng> points) async {
701:     final coordinates = points.map((p) => '${p.longitude},${p.latitude}').join(';');
702:     final url = Uri.parse('https://router.project-osrm.org/route/v1/driving/$coordinates?overview=full&geometries=geojson');
703: 
704:     try {
705:       final response = await http.get(url);
706:       if (response.statusCode == 200) {
707:         final decoded = json.decode(response.body);
708:         final geometry = decoded['routes'][0]['geometry']['coordinates'] as List;
709:         final dist = decoded['routes'][0]['distance'];
710:         final dur = decoded['routes'][0]['duration'];
711: 
712:         routePoints.clear();
713:         routePoints.addAll(geometry.map((coord) => latlong.LatLng(coord[1], coord[0])));
714: 
715:         if (Constant.distanceType.toLowerCase() == "KM".toLowerCase()) {
716:           distance.value = dist / 1000.00;
717:         } else {
718:           distance.value = dist / 1609.34;
719:         }

698:   }
699: 
700:   Future<void> fetchRouteWithWaypoints(List<latlong.LatLng> points) async {
701:     final coordinates = points.map((p) => '${p.longitude},${p.latitude}').join(';');
702:     final url = Uri.parse('https://router.project-osrm.org/route/v1/driving/$coordinates?overview=full&geometries=geojson');
703: 
704:     try {
705:       final response = await http.get(url);
706:       if (response.statusCode == 200) {
707:         final decoded = json.decode(response.body);
708:         final geometry = decoded['routes'][0]['geometry']['coordinates'] as List;
709:         final dist = decoded['routes'][0]['distance'];
710:         final dur = decoded['routes'][0]['duration'];
711: 
712:         routePoints.clear();
713:         routePoints.addAll(geometry.map((coord) => latlong.LatLng(coord[1], coord[0])));
714: 
715:         if (Constant.distanceType.toLowerCase() == "KM".toLowerCase()) {
716:           distance.value = dist / 1000.00;
717:         } else {
718:           distance.value = dist / 1609.34;
719:         }
720: 

699: 
700:   Future<void> fetchRouteWithWaypoints(List<latlong.LatLng> points) async {
701:     final coordinates = points.map((p) => '${p.longitude},${p.latitude}').join(';');
702:     final url = Uri.parse('https://router.project-osrm.org/route/v1/driving/$coordinates?overview=full&geometries=geojson');
703: 
704:     try {
705:       final response = await http.get(url);
706:       if (response.statusCode == 200) {
707:         final decoded = json.decode(response.body);
708:         final geometry = decoded['routes'][0]['geometry']['coordinates'] as List;
709:         final dist = decoded['routes'][0]['distance'];
710:         final dur = decoded['routes'][0]['duration'];
711: 
712:         routePoints.clear();
713:         routePoints.addAll(geometry.map((coord) => latlong.LatLng(coord[1], coord[0])));
714: 
715:         if (Constant.distanceType.toLowerCase() == "KM".toLowerCase()) {
716:           distance.value = dist / 1000.00;
717:         } else {
718:           distance.value = dist / 1609.34;
719:         }
720: 
721:         final hours = dur ~/ 3600;

720: 
721:         final hours = dur ~/ 3600;
722:         final minutes = ((dur % 3600) / 60).round();
723:         duration.value = '${hours}h ${minutes}m';
724: 
725:         // Zoom to fit polyline after drawing
726:         zoomToPolylineOSM();
727:       } else {
728:         print("Failed to get route: ${response.body}");
729:       }
730:     } catch (e) {
731:       print("Route fetch error: $e");
732:     }
733:   }
734: 
735:   void zoomToPolylineOSM() {
736:     if (routePoints.isEmpty) return;
737:     // LatLngBounds requires at least two points
738:     final bounds = flutterMap.LatLngBounds(routePoints.first, routePoints.first);
739:     for (final point in routePoints) {
740:       bounds.extend(point);
741:     }
742:     final center = bounds.center;

925: 
926:     clearMapDataIfLocationsRemoved();
927:     update();
928:   }
929: 
930:   Future<void> searchPlaceNameOSM() async {
931:     final url = Uri.parse('https://nominatim.openstreetmap.org/reverse?lat=${departureLatLongOsm.value.latitude}&lon=${departureLatLongOsm.value.longitude}&format=json');
932: 
933:     final response = await http.get(url, headers: {'User-Agent': 'FlutterMapApp/1.0 (menil.siddhiinfosoft@gmail.com)'});
934: 
935:     if (response.statusCode == 200) {
936:       log("response.body :: ${response.body}");
937:       Map<String, dynamic> data = json.decode(response.body);
938:       sourceTextEditController.value.text = data['display_name'] ?? '';
939:     }
940:   }
941: 
942:   Future<void> searchPlaceNameGoogle() async {
943:     final lat = departureLatLong.value.latitude;
944:     final lng = departureLatLong.value.longitude;
945: 
946:     final url = Uri.parse('https://maps.googleapis.com/maps/api/geocode/json?latlng=$lat,$lng&key=${Constant.mapAPIKey}');
947: 

927:     update();
928:   }
929: 
930:   Future<void> searchPlaceNameOSM() async {
931:     final url = Uri.parse('https://nominatim.openstreetmap.org/reverse?lat=${departureLatLongOsm.value.latitude}&lon=${departureLatLongOsm.value.longitude}&format=json');
932: 
933:     final response = await http.get(url, headers: {'User-Agent': 'FlutterMapApp/1.0 (menil.siddhiinfosoft@gmail.com)'});
934: 
935:     if (response.statusCode == 200) {
936:       log("response.body :: ${response.body}");
937:       Map<String, dynamic> data = json.decode(response.body);
938:       sourceTextEditController.value.text = data['display_name'] ?? '';
939:     }
940:   }
941: 
942:   Future<void> searchPlaceNameGoogle() async {
943:     final lat = departureLatLong.value.latitude;
944:     final lng = departureLatLong.value.longitude;
945: 
946:     final url = Uri.parse('https://maps.googleapis.com/maps/api/geocode/json?latlng=$lat,$lng&key=${Constant.mapAPIKey}');
947: 
948:     final response = await http.get(url);
949: 

928:   }
929: 
930:   Future<void> searchPlaceNameOSM() async {
931:     final url = Uri.parse('https://nominatim.openstreetmap.org/reverse?lat=${departureLatLongOsm.value.latitude}&lon=${departureLatLongOsm.value.longitude}&format=json');
932: 
933:     final response = await http.get(url, headers: {'User-Agent': 'FlutterMapApp/1.0 (menil.siddhiinfosoft@gmail.com)'});
934: 
935:     if (response.statusCode == 200) {
936:       log("response.body :: ${response.body}");
937:       Map<String, dynamic> data = json.decode(response.body);
938:       sourceTextEditController.value.text = data['display_name'] ?? '';
939:     }
940:   }
941: 
942:   Future<void> searchPlaceNameGoogle() async {
943:     final lat = departureLatLong.value.latitude;
944:     final lng = departureLatLong.value.longitude;
945: 
946:     final url = Uri.parse('https://maps.googleapis.com/maps/api/geocode/json?latlng=$lat,$lng&key=${Constant.mapAPIKey}');
947: 
948:     final response = await http.get(url);
949: 
950:     if (response.statusCode == 200) {

929: 
930:   Future<void> searchPlaceNameOSM() async {
931:     final url = Uri.parse('https://nominatim.openstreetmap.org/reverse?lat=${departureLatLongOsm.value.latitude}&lon=${departureLatLongOsm.value.longitude}&format=json');
932: 
933:     final response = await http.get(url, headers: {'User-Agent': 'FlutterMapApp/1.0 (menil.siddhiinfosoft@gmail.com)'});
934: 
935:     if (response.statusCode == 200) {
936:       log("response.body :: ${response.body}");
937:       Map<String, dynamic> data = json.decode(response.body);
938:       sourceTextEditController.value.text = data['display_name'] ?? '';
939:     }
940:   }
941: 
942:   Future<void> searchPlaceNameGoogle() async {
943:     final lat = departureLatLong.value.latitude;
944:     final lng = departureLatLong.value.longitude;
945: 
946:     final url = Uri.parse('https://maps.googleapis.com/maps/api/geocode/json?latlng=$lat,$lng&key=${Constant.mapAPIKey}');
947: 
948:     final response = await http.get(url);
949: 
950:     if (response.statusCode == 200) {
951:       final data = json.decode(response.body);

938:       sourceTextEditController.value.text = data['display_name'] ?? '';
939:     }
940:   }
941: 
942:   Future<void> searchPlaceNameGoogle() async {
943:     final lat = departureLatLong.value.latitude;
944:     final lng = departureLatLong.value.longitude;
945: 
946:     final url = Uri.parse('https://maps.googleapis.com/maps/api/geocode/json?latlng=$lat,$lng&key=${Constant.mapAPIKey}');
947: 
948:     final response = await http.get(url);
949: 
950:     if (response.statusCode == 200) {
951:       final data = json.decode(response.body);
952:       if (data['status'] == 'OK') {
953:         final results = data['results'] as List;
954:         if (results.isNotEmpty) {
955:           final formattedAddress = results[0]['formatted_address'];
956:           sourceTextEditController.value.text = formattedAddress;
957:         }
958:       } else {
959:         log("Google API Error: ${data['status']}");
960:       }

```

### FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\live_tracking_controller.dart
```dart
29:   RxMap<MarkerId, Marker> markers = <MarkerId, Marker>{}.obs;
30:   RxMap<PolylineId, Polyline> polyLines = <PolylineId, Polyline>{}.obs;
31:   RxList<flutterMap.Marker> osmMarkers = <flutterMap.Marker>[].obs;
32: 
33:   BitmapDescriptor? pickupIcon;
34:   BitmapDescriptor? dropoffIcon;
35:   BitmapDescriptor? driverIcon;
36: 
37:   PolylinePoints polylinePoints = PolylinePoints(apiKey: Constant.mapAPIKey);
38: 
39:   StreamSubscription? orderSub;
40:   StreamSubscription? driverSub;
41: 
42:   @override
43:   void onInit() {
44:     super.onInit();
45:     addMarkerIcons();
46:     getArguments();
47:   }
48: 
49:   @override
50:   void onClose() {
51:     orderSub?.cancel();

135:     polyLines.clear();
136:     routePoints.clear();
137:   }
138: 
139:   Future<void> fetchRoute(location.LatLng source, location.LatLng destination) async {
140:     final url = Uri.parse(
141:       'https://router.project-osrm.org/route/v1/driving/${source.longitude},${source.latitude};${destination.longitude},${destination.latitude}?overview=full&geometries=geojson',
142:     );
143:     final response = await http.get(url);
144:     if (response.statusCode == 200) {
145:       final data = json.decode(response.body);
146:       final coords = data['routes'][0]['geometry']['coordinates'];
147:       routePoints.value = coords.map<location.LatLng>((c) => location.LatLng(c[1].toDouble(), c[0].toDouble())).toList();
148:     }
149:   }
150: 
151:   void animateToOSMLocation(location.LatLng loc) {
152:     osmMapController.move(loc, 15);
153:   }
154: 
155:   void addOsmMarkers({bool showPickup = false, bool showDrop = false}) {
156:     final List<flutterMap.Marker> tempMarkers = [
157:       // Driver Marker

136:     routePoints.clear();
137:   }
138: 
139:   Future<void> fetchRoute(location.LatLng source, location.LatLng destination) async {
140:     final url = Uri.parse(
141:       'https://router.project-osrm.org/route/v1/driving/${source.longitude},${source.latitude};${destination.longitude},${destination.latitude}?overview=full&geometries=geojson',
142:     );
143:     final response = await http.get(url);
144:     if (response.statusCode == 200) {
145:       final data = json.decode(response.body);
146:       final coords = data['routes'][0]['geometry']['coordinates'];
147:       routePoints.value = coords.map<location.LatLng>((c) => location.LatLng(c[1].toDouble(), c[0].toDouble())).toList();
148:     }
149:   }
150: 
151:   void animateToOSMLocation(location.LatLng loc) {
152:     osmMapController.move(loc, 15);
153:   }
154: 
155:   void addOsmMarkers({bool showPickup = false, bool showDrop = false}) {
156:     final List<flutterMap.Marker> tempMarkers = [
157:       // Driver Marker
158:       flutterMap.Marker(point: driverCurrent.value, width: 40, height: 40, child: Image.asset('assets/images/food_delivery.png')),

137:   }
138: 
139:   Future<void> fetchRoute(location.LatLng source, location.LatLng destination) async {
140:     final url = Uri.parse(
141:       'https://router.project-osrm.org/route/v1/driving/${source.longitude},${source.latitude};${destination.longitude},${destination.latitude}?overview=full&geometries=geojson',
142:     );
143:     final response = await http.get(url);
144:     if (response.statusCode == 200) {
145:       final data = json.decode(response.body);
146:       final coords = data['routes'][0]['geometry']['coordinates'];
147:       routePoints.value = coords.map<location.LatLng>((c) => location.LatLng(c[1].toDouble(), c[0].toDouble())).toList();
148:     }
149:   }
150: 
151:   void animateToOSMLocation(location.LatLng loc) {
152:     osmMapController.move(loc, 15);
153:   }
154: 
155:   void addOsmMarkers({bool showPickup = false, bool showDrop = false}) {
156:     final List<flutterMap.Marker> tempMarkers = [
157:       // Driver Marker
158:       flutterMap.Marker(point: driverCurrent.value, width: 40, height: 40, child: Image.asset('assets/images/food_delivery.png')),
159:     ];

```

### FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\my_cab_booking_controller.dart
```dart
210:           date: Timestamp.now(),
211:           paymentMethod: PaymentGateway.wallet.name,
212:           transactionUser: "customer",
213:           userId: FireStoreUtils.getCurrentUid(),
214:           isTopup: false,
215:           orderId: selectedOrder.value.id,
216:           note: "Cab Amount debited".tr,
217:           paymentStatus: "success".tr,
218:           serviceType: Constant.parcelServiceType,
219:         );
220: 
221:         await FireStoreUtils.setWalletTransaction(transactionModel).then((value) async {
222:           await FireStoreUtils.updateUserWallet(amount: "-${totalAmount.value.toString()}", userId: FireStoreUtils.getCurrentUid());
223:         });
224:       }
225:       selectedOrder.value.paymentStatus = true;
226:       await FireStoreUtils.cabOrderPlace(selectedOrder.value).then((value) {
227:         ShowToastDialog.showToast("Payment successfully".tr);
228:         Get.back();
229:       });
230:     }
231:   }
232: 

227:         ShowToastDialog.showToast("Payment successfully".tr);
228:         Get.back();
229:       });
230:     }
231:   }
232: 
233:   Future<void> getPaymentSettings() async {
234:     await FireStoreUtils.getPaymentSettingsData().then((value) {
235:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
236:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
237:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
238:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
239:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
240:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
241:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
242:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
243:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
244:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
245:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
246:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
247:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
248: 
249:       if (walletSettingModel.value.isEnabled == true) {

228:         Get.back();
229:       });
230:     }
231:   }
232: 
233:   Future<void> getPaymentSettings() async {
234:     await FireStoreUtils.getPaymentSettingsData().then((value) {
235:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
236:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
237:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
238:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
239:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
240:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
241:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
242:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
243:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
244:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
245:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
246:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
247:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
248: 
249:       if (walletSettingModel.value.isEnabled == true) {
250:         selectedPaymentMethod.value = PaymentGateway.wallet.name;

229:       });
230:     }
231:   }
232: 
233:   Future<void> getPaymentSettings() async {
234:     await FireStoreUtils.getPaymentSettingsData().then((value) {
235:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
236:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
237:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
238:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
239:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
240:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
241:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
242:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
243:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
244:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
245:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
246:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
247:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
248: 
249:       if (walletSettingModel.value.isEnabled == true) {
250:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
251:       } else if (cashOnDeliverySettingModel.value.isEnabled == true) {

230:     }
231:   }
232: 
233:   Future<void> getPaymentSettings() async {
234:     await FireStoreUtils.getPaymentSettingsData().then((value) {
235:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
236:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
237:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
238:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
239:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
240:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
241:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
242:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
243:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
244:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
245:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
246:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
247:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
248: 
249:       if (walletSettingModel.value.isEnabled == true) {
250:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
251:       } else if (cashOnDeliverySettingModel.value.isEnabled == true) {
252:         selectedPaymentMethod.value = PaymentGateway.cod.name;

231:   }
232: 
233:   Future<void> getPaymentSettings() async {
234:     await FireStoreUtils.getPaymentSettingsData().then((value) {
235:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
236:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
237:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
238:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
239:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
240:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
241:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
242:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
243:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
244:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
245:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
246:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
247:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
248: 
249:       if (walletSettingModel.value.isEnabled == true) {
250:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
251:       } else if (cashOnDeliverySettingModel.value.isEnabled == true) {
252:         selectedPaymentMethod.value = PaymentGateway.cod.name;
253:       } else if (stripeModel.value.isEnabled == true) {

232: 
233:   Future<void> getPaymentSettings() async {
234:     await FireStoreUtils.getPaymentSettingsData().then((value) {
235:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
236:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
237:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
238:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
239:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
240:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
241:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
242:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
243:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
244:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
245:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
246:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
247:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
248: 
249:       if (walletSettingModel.value.isEnabled == true) {
250:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
251:       } else if (cashOnDeliverySettingModel.value.isEnabled == true) {
252:         selectedPaymentMethod.value = PaymentGateway.cod.name;
253:       } else if (stripeModel.value.isEnabled == true) {
254:         selectedPaymentMethod.value = PaymentGateway.stripe.name;

233:   Future<void> getPaymentSettings() async {
234:     await FireStoreUtils.getPaymentSettingsData().then((value) {
235:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
236:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
237:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
238:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
239:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
240:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
241:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
242:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
243:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
244:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
245:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
246:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
247:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
248: 
249:       if (walletSettingModel.value.isEnabled == true) {
250:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
251:       } else if (cashOnDeliverySettingModel.value.isEnabled == true) {
252:         selectedPaymentMethod.value = PaymentGateway.cod.name;
253:       } else if (stripeModel.value.isEnabled == true) {
254:         selectedPaymentMethod.value = PaymentGateway.stripe.name;
255:       } else if (payPalModel.value.isEnabled == true) {

234:     await FireStoreUtils.getPaymentSettingsData().then((value) {
235:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
236:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
237:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
238:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
239:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
240:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
241:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
242:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
243:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
244:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
245:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
246:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
247:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
248: 
249:       if (walletSettingModel.value.isEnabled == true) {
250:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
251:       } else if (cashOnDeliverySettingModel.value.isEnabled == true) {
252:         selectedPaymentMethod.value = PaymentGateway.cod.name;
253:       } else if (stripeModel.value.isEnabled == true) {
254:         selectedPaymentMethod.value = PaymentGateway.stripe.name;
255:       } else if (payPalModel.value.isEnabled == true) {
256:         selectedPaymentMethod.value = PaymentGateway.paypal.name;

235:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
236:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
237:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
238:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
239:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
240:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
241:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
242:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
243:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
244:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
245:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
246:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
247:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
248: 
249:       if (walletSettingModel.value.isEnabled == true) {
250:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
251:       } else if (cashOnDeliverySettingModel.value.isEnabled == true) {
252:         selectedPaymentMethod.value = PaymentGateway.cod.name;
253:       } else if (stripeModel.value.isEnabled == true) {
254:         selectedPaymentMethod.value = PaymentGateway.stripe.name;
255:       } else if (payPalModel.value.isEnabled == true) {
256:         selectedPaymentMethod.value = PaymentGateway.paypal.name;
257:       } else if (payStackModel.value.isEnable == true) {

236:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
237:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
238:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
239:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
240:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
241:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
242:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
243:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
244:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
245:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
246:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
247:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
248: 
249:       if (walletSettingModel.value.isEnabled == true) {
250:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
251:       } else if (cashOnDeliverySettingModel.value.isEnabled == true) {
252:         selectedPaymentMethod.value = PaymentGateway.cod.name;
253:       } else if (stripeModel.value.isEnabled == true) {
254:         selectedPaymentMethod.value = PaymentGateway.stripe.name;
255:       } else if (payPalModel.value.isEnabled == true) {
256:         selectedPaymentMethod.value = PaymentGateway.paypal.name;
257:       } else if (payStackModel.value.isEnable == true) {
258:         selectedPaymentMethod.value = PaymentGateway.payStack.name;

237:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
238:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
239:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
240:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
241:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
242:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
243:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
244:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
245:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
246:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
247:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
248: 
249:       if (walletSettingModel.value.isEnabled == true) {
250:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
251:       } else if (cashOnDeliverySettingModel.value.isEnabled == true) {
252:         selectedPaymentMethod.value = PaymentGateway.cod.name;
253:       } else if (stripeModel.value.isEnabled == true) {
254:         selectedPaymentMethod.value = PaymentGateway.stripe.name;
255:       } else if (payPalModel.value.isEnabled == true) {
256:         selectedPaymentMethod.value = PaymentGateway.paypal.name;
257:       } else if (payStackModel.value.isEnable == true) {
258:         selectedPaymentMethod.value = PaymentGateway.payStack.name;
259:       } else if (mercadoPagoModel.value.isEnabled == true) {

238:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
239:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
240:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
241:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
242:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
243:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
244:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
245:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
246:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
247:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
248: 
249:       if (walletSettingModel.value.isEnabled == true) {
250:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
251:       } else if (cashOnDeliverySettingModel.value.isEnabled == true) {
252:         selectedPaymentMethod.value = PaymentGateway.cod.name;
253:       } else if (stripeModel.value.isEnabled == true) {
254:         selectedPaymentMethod.value = PaymentGateway.stripe.name;
255:       } else if (payPalModel.value.isEnabled == true) {
256:         selectedPaymentMethod.value = PaymentGateway.paypal.name;
257:       } else if (payStackModel.value.isEnable == true) {
258:         selectedPaymentMethod.value = PaymentGateway.payStack.name;
259:       } else if (mercadoPagoModel.value.isEnabled == true) {
260:         selectedPaymentMethod.value = PaymentGateway.mercadoPago.name;

239:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
240:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
241:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
242:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
243:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
244:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
245:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
246:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
247:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
248: 
249:       if (walletSettingModel.value.isEnabled == true) {
250:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
251:       } else if (cashOnDeliverySettingModel.value.isEnabled == true) {
252:         selectedPaymentMethod.value = PaymentGateway.cod.name;
253:       } else if (stripeModel.value.isEnabled == true) {
254:         selectedPaymentMethod.value = PaymentGateway.stripe.name;
255:       } else if (payPalModel.value.isEnabled == true) {
256:         selectedPaymentMethod.value = PaymentGateway.paypal.name;
257:       } else if (payStackModel.value.isEnable == true) {
258:         selectedPaymentMethod.value = PaymentGateway.payStack.name;
259:       } else if (mercadoPagoModel.value.isEnabled == true) {
260:         selectedPaymentMethod.value = PaymentGateway.mercadoPago.name;
261:       } else if (flutterWaveModel.value.isEnable == true) {

314:   Future<void> displayStripePaymentSheet({required String amount}) async {
315:     try {
316:       await Stripe.instance.presentPaymentSheet().then((value) {
317:         ShowToastDialog.showToast("Payment successfully".tr);
318:         completeOrder();
319:       });
320:     } on StripeException catch (e) {
321:       var lo1 = jsonEncode(e);
322:       var lo2 = jsonDecode(lo1);
323:       StripePayFailedModel lom = StripePayFailedModel.fromJson(lo2);
324:       ShowToastDialog.showToast(lom.error.message);
325:     } catch (e) {
326:       ShowToastDialog.showToast(e.toString());
327:     }
328:   }
329: 
330:   Future createStripeIntent({required String amount}) async {
331:     try {
332:       Map<String, dynamic> body = {
333:         'amount': ((double.parse(amount) * 100).round()).toString(),
334:         'currency': "USD",
335:         'payment_method_types[]': 'card',
336:         "description": "Strip Payment",

337:         "shipping[name]": Constant.userModel!.fullName(),
338:         "shipping[address][line1]": "510 Townsend St",
339:         "shipping[address][postal_code]": "98140",
340:         "shipping[address][city]": "San Francisco",
341:         "shipping[address][state]": "CA",
342:         "shipping[address][country]": "US",
343:       };
344:       var stripeSecret = stripeModel.value.stripeSecret;
345:       var response = await http.post(
346:         Uri.parse('https://api.stripe.com/v1/payment_intents'),
347:         body: body,
348:         headers: {'Authorization': 'Bearer $stripeSecret', 'Content-Type': 'application/x-www-form-urlencoded'},
349:       );
350: 
351:       return jsonDecode(response.body);
352:     } catch (e) {
353:       log(e.toString());
354:     }
355:   }
356: 
357:   //mercadoo
358:   Future<Null> mercadoPagoMakePayment({required BuildContext context, required String amount}) async {
359:     ShowToastDialog.showLoader("Please wait".tr);

338:         "shipping[address][line1]": "510 Townsend St",
339:         "shipping[address][postal_code]": "98140",
340:         "shipping[address][city]": "San Francisco",
341:         "shipping[address][state]": "CA",
342:         "shipping[address][country]": "US",
343:       };
344:       var stripeSecret = stripeModel.value.stripeSecret;
345:       var response = await http.post(
346:         Uri.parse('https://api.stripe.com/v1/payment_intents'),
347:         body: body,
348:         headers: {'Authorization': 'Bearer $stripeSecret', 'Content-Type': 'application/x-www-form-urlencoded'},
349:       );
350: 
351:       return jsonDecode(response.body);
352:     } catch (e) {
353:       log(e.toString());
354:     }
355:   }
356: 
357:   //mercadoo
358:   Future<Null> mercadoPagoMakePayment({required BuildContext context, required String amount}) async {
359:     ShowToastDialog.showLoader("Please wait".tr);
360:     final headers = {'Authorization': 'Bearer ${mercadoPagoModel.value.accessToken}', 'Content-Type': 'application/json'};

343:       };
344:       var stripeSecret = stripeModel.value.stripeSecret;
345:       var response = await http.post(
346:         Uri.parse('https://api.stripe.com/v1/payment_intents'),
347:         body: body,
348:         headers: {'Authorization': 'Bearer $stripeSecret', 'Content-Type': 'application/x-www-form-urlencoded'},
349:       );
350: 
351:       return jsonDecode(response.body);
352:     } catch (e) {
353:       log(e.toString());
354:     }
355:   }
356: 
357:   //mercadoo
358:   Future<Null> mercadoPagoMakePayment({required BuildContext context, required String amount}) async {
359:     ShowToastDialog.showLoader("Please wait".tr);
360:     final headers = {'Authorization': 'Bearer ${mercadoPagoModel.value.accessToken}', 'Content-Type': 'application/json'};
361: 
362:     final body = jsonEncode({
363:       "items": [
364:         {
365:           "title": "Test",

370:         },
371:       ],
372:       "payer": {"email": Constant.userModel!.email},
373:       "back_urls": {"failure": "${Constant.globalUrl}payment/failure", "pending": "${Constant.globalUrl}payment/pending", "success": "${Constant.globalUrl}payment/success"},
374:       "auto_return": "approved",
375:       // Automatically return after payment is approved
376:     });
377: 
378:     final response = await http.post(Uri.parse("https://api.mercadopago.com/checkout/preferences"), headers: headers, body: body);
379: 
380:     if (response.statusCode == 200 || response.statusCode == 201) {
381:       final data = jsonDecode(response.body);
382:       ShowToastDialog.closeLoader();
383:       Get.to(MercadoPagoScreen(initialURl: data['init_point']))!.then((value) {
384:         if (value) {
385:           ShowToastDialog.showToast("Payment Successful!!".tr);
386:           completeOrder();
387:         } else {
388:           ShowToastDialog.showToast("Payment UnSuccessful!!".tr);
389:         }
390:       });
391:     } else {
392:       ShowToastDialog.closeLoader();

372:       "payer": {"email": Constant.userModel!.email},
373:       "back_urls": {"failure": "${Constant.globalUrl}payment/failure", "pending": "${Constant.globalUrl}payment/pending", "success": "${Constant.globalUrl}payment/success"},
374:       "auto_return": "approved",
375:       // Automatically return after payment is approved
376:     });
377: 
378:     final response = await http.post(Uri.parse("https://api.mercadopago.com/checkout/preferences"), headers: headers, body: body);
379: 
380:     if (response.statusCode == 200 || response.statusCode == 201) {
381:       final data = jsonDecode(response.body);
382:       ShowToastDialog.closeLoader();
383:       Get.to(MercadoPagoScreen(initialURl: data['init_point']))!.then((value) {
384:         if (value) {
385:           ShowToastDialog.showToast("Payment Successful!!".tr);
386:           completeOrder();
387:         } else {
388:           ShowToastDialog.showToast("Payment UnSuccessful!!".tr);
389:         }
390:       });
391:     } else {
392:       ShowToastDialog.closeLoader();
393:       print('Error creating preference: ${response.body}');
394:       return null;

```

### FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\my_profile_controller.dart
```dart
32: 
33:     // Update ThemeController for instant app theme change
34:     if (Get.isRegistered<ThemeController>()) {
35:       final themeController = Get.find<ThemeController>();
36:       themeController.isDark.value = value;
37:     }
38:   }
39: 
40:   // Delete user API
41:   Future<bool> deleteUserFromServer() async {
42:     var url = '${Constant.websiteUrl}/api/delete-user';
43:     try {
44:       var response = await http.post(Uri.parse(url), body: {'uuid': FireStoreUtils.getCurrentUid()});
45:       log("deleteUserFromServer :: ${response.body}");
46:       return response.statusCode == 200;
47:     } catch (e) {
48:       return false;
49:     }
50:   }
51: }

34:     if (Get.isRegistered<ThemeController>()) {
35:       final themeController = Get.find<ThemeController>();
36:       themeController.isDark.value = value;
37:     }
38:   }
39: 
40:   // Delete user API
41:   Future<bool> deleteUserFromServer() async {
42:     var url = '${Constant.websiteUrl}/api/delete-user';
43:     try {
44:       var response = await http.post(Uri.parse(url), body: {'uuid': FireStoreUtils.getCurrentUid()});
45:       log("deleteUserFromServer :: ${response.body}");
46:       return response.statusCode == 200;
47:     } catch (e) {
48:       return false;
49:     }
50:   }
51: }

36:       themeController.isDark.value = value;
37:     }
38:   }
39: 
40:   // Delete user API
41:   Future<bool> deleteUserFromServer() async {
42:     var url = '${Constant.websiteUrl}/api/delete-user';
43:     try {
44:       var response = await http.post(Uri.parse(url), body: {'uuid': FireStoreUtils.getCurrentUid()});
45:       log("deleteUserFromServer :: ${response.body}");
46:       return response.statusCode == 200;
47:     } catch (e) {
48:       return false;
49:     }
50:   }
51: }

37:     }
38:   }
39: 
40:   // Delete user API
41:   Future<bool> deleteUserFromServer() async {
42:     var url = '${Constant.websiteUrl}/api/delete-user';
43:     try {
44:       var response = await http.post(Uri.parse(url), body: {'uuid': FireStoreUtils.getCurrentUid()});
45:       log("deleteUserFromServer :: ${response.body}");
46:       return response.statusCode == 200;
47:     } catch (e) {
48:       return false;
49:     }
50:   }
51: }

38:   }
39: 
40:   // Delete user API
41:   Future<bool> deleteUserFromServer() async {
42:     var url = '${Constant.websiteUrl}/api/delete-user';
43:     try {
44:       var response = await http.post(Uri.parse(url), body: {'uuid': FireStoreUtils.getCurrentUid()});
45:       log("deleteUserFromServer :: ${response.body}");
46:       return response.statusCode == 200;
47:     } catch (e) {
48:       return false;
49:     }
50:   }
51: }

```

### FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\my_rental_booking_controller.dart
```dart
133:           date: Timestamp.now(),
134:           paymentMethod: PaymentGateway.wallet.name,
135:           transactionUser: "customer",
136:           userId: FireStoreUtils.getCurrentUid(),
137:           isTopup: false,
138:           orderId: selectedOrder.value.id,
139:           note: "Rental Amount debited".tr,
140:           paymentStatus: "success".tr,
141:           serviceType: Constant.parcelServiceType,
142:         );
143: 
144:         await FireStoreUtils.setWalletTransaction(transactionModel).then((value) async {
145:           if (value == true) {
146:             await FireStoreUtils.updateUserWallet(amount: "-${totalAmount.value.toString()}", userId: FireStoreUtils.getCurrentUid());
147:           }
148:         });
149:       }
150: 
151:       await FireStoreUtils.rentalOrderPlace(selectedOrder.value).then((value) {
152:         ShowToastDialog.showToast("Payment successfully".tr);
153:         Get.back();
154:         Get.back();
155:       });

197:           paymentMethod: PaymentGateway.wallet.name,
198:           transactionUser: "customer",
199:           userId: FireStoreUtils.getCurrentUid(),
200:           isTopup: true,
201:           // refund
202:           orderId: order.id,
203:           note: "Refund for cancelled booking".tr,
204:           paymentStatus: "success".tr,
205:           serviceType: Constant.parcelServiceType,
206:         );
207: 
208:         await FireStoreUtils.setWalletTransaction(walletTransaction);
209:         await FireStoreUtils.updateUserWallet(amount: refundAmount.toString(), userId: FireStoreUtils.getCurrentUid());
210:       }
211:       ShowToastDialog.showToast("Booking cancelled successfully".tr);
212:     } catch (e) {
213:       ShowToastDialog.showToast("Failed to cancel booking: $e".tr);
214:     } finally {
215:       isLoading.value = false;
216:     }
217:   }
218: 
219:   @override

```

### FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart
```dart
23:     super.onInit();
24:   }
25: 
26:   Future<void> getData() async {
27:     isLoading.value = true;
28:     await getZone();
29: 
30:     // Fetch banners
31:     FireStoreUtils.getHomeTopBanner().then((value) {
32:       bannerTopHome.value = value;
33:     });
34: 
35:     // Fetch categories
36:     FireStoreUtils.getOnDemandCategory().then((catValue) {
37:       categories.value = catValue;
38:     });
39: 
40:     // Fetch provider services
41:     FireStoreUtils.getProviderFuture()
42:         .then((providerServiceList) {
43:           Set<String?> uniqueAuthorIds = providerServiceList.map((service) => service.author).toSet();
44:           List<String?> listOfUniqueProviders = uniqueAuthorIds.toList();
45: 

```

### FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_order_details_controller.dart
```dart
203:         }
204:       }
205:       final provider = await FireStoreUtils.getUserProfile(order.provider.author ?? '');
206:       // Refund customer wallet if not COD
207:       if ((order.payment_method).toLowerCase() != 'cod') {
208:         await FireStoreUtils.setWalletTransaction(
209:           WalletTransactionModel(
210:             id: Constant.getUuid(),
211:             serviceType: 'ondemand-service',
212:             amount: totalAmount,
213:             date: Timestamp.now(),
214:             paymentMethod: 'wallet',
215:             transactionUser: 'customer',
216:             userId: Constant.userModel?.id,
217:             isTopup: true,
218:             orderId: order.id,
219:             note: 'Booking Amount Refund',
220:             paymentStatus: "success".tr,
221:           ),
222:         );
223: 
224:         // Deduct from provider if accepted
225:         if (order.status == Constant.orderAccepted) {

221:           ),
222:         );
223: 
224:         // Deduct from provider if accepted
225:         if (order.status == Constant.orderAccepted) {
226:           await FireStoreUtils.setWalletTransaction(
227:             WalletTransactionModel(
228:               id: Constant.getUuid(),
229:               serviceType: 'ondemand-service',
230:               amount: totalAmount,
231:               date: Timestamp.now(),
232:               paymentMethod: 'wallet',
233:               transactionUser: 'provider',
234:               userId: order.provider.author ?? '',
235:               isTopup: false,
236:               orderId: order.id,
237:               note: 'Booking Amount Refund',
238:               paymentStatus: "success".tr,
239:             ),
240:           );
241:         }
242:         await FireStoreUtils.updateUserWallet(amount: totalAmount.toString(), userId: FireStoreUtils.getCurrentUid());
243:       }

242:         await FireStoreUtils.updateUserWallet(amount: totalAmount.toString(), userId: FireStoreUtils.getCurrentUid());
243:       }
244: 
245:       // Refund admin commission
246:       if (order.status == Constant.orderAccepted && adminComm > 0) {
247:         await FireStoreUtils.setWalletTransaction(
248:           WalletTransactionModel(
249:             id: Constant.getUuid(),
250:             serviceType: 'ondemand-service',
251:             amount: adminComm,
252:             date: Timestamp.now(),
253:             paymentMethod: 'wallet',
254:             transactionUser: 'provider',
255:             userId: order.provider.author ?? '',
256:             isTopup: true,
257:             orderId: order.id,
258:             note: 'Admin commission refund',
259:             paymentStatus: "success".tr,
260:           ),
261:         );
262:       }
263: 
264:       // Update order status & reason

```

### FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_my_booking_controller.dart
```dart
109:           paymentMethod: PaymentGateway.wallet.name,
110:           transactionUser: "customer",
111:           userId: FireStoreUtils.getCurrentUid(),
112:           isTopup: true,
113:           // refund
114:           orderId: order.id,
115:           note: "Refund for cancelled parcel order",
116:           paymentStatus: "success",
117:           serviceType: Constant.parcelServiceType,
118:         );
119: 
120:         // Save wallet transaction
121:         await FireStoreUtils.setWalletTransaction(walletTransaction);
122: 
123:         // Update wallet balance
124:         await FireStoreUtils.updateUserWallet(amount: refundAmount.toString(), userId: FireStoreUtils.getCurrentUid());
125:       }
126: 
127:       ShowToastDialog.showToast("Order cancelled successfully".tr);
128:     } catch (e) {
129:       ShowToastDialog.showToast("${'Failed to cancel order:'.tr} $e".tr);
130:     } finally {
131:       isLoading.value = false;

```

### FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_order_confirmation_controller.dart
```dart
172:             date: Timestamp.now(),
173:             paymentMethod: PaymentGateway.wallet.name,
174:             transactionUser: "customer",
175:             userId: FireStoreUtils.getCurrentUid(),
176:             isTopup: false,
177:             orderId: parcelOrder.value.id,
178:             note: "Parcel Amount debited",
179:             paymentStatus: "success",
180:             serviceType: Constant.parcelServiceType,
181:           );
182: 
183:           await FireStoreUtils.setWalletTransaction(transactionModel).then((value) async {
184:             if (value == true) {
185:               await FireStoreUtils.updateUserWallet(amount: "-${totalAmount.value.toString()}", userId: FireStoreUtils.getCurrentUid());
186:             }
187:           });
188:         }
189:       }
190: 
191:       await FireStoreUtils.parcelOrderPlace(parcelOrder.value).then((value) async {
192:         ShowToastDialog.closeLoader();
193:         ShowToastDialog.showToast("Order placed successfully".tr);
194:         Get.offAll(() => OrderSuccessfullyPlaced(), arguments: {'parcelOrder': parcelOrder.value});

212:   Rx<RazorPayModel> razorPayModel = RazorPayModel().obs;
213: 
214:   Rx<MidTrans> midTransModel = MidTrans().obs;
215:   Rx<OrangeMoney> orangeMoneyModel = OrangeMoney().obs;
216:   Rx<Xendit> xenditModel = Xendit().obs;
217: 
218:   Future<void> getPaymentSettings() async {
219:     await FireStoreUtils.getPaymentSettingsData().then((value) {
220:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
221:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
222:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
223:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
224:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
225:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
226:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
227:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
228:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
229:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
230:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
231:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
232:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
233: 
234:       if (walletSettingModel.value.isEnabled == true) {

213: 
214:   Rx<MidTrans> midTransModel = MidTrans().obs;
215:   Rx<OrangeMoney> orangeMoneyModel = OrangeMoney().obs;
216:   Rx<Xendit> xenditModel = Xendit().obs;
217: 
218:   Future<void> getPaymentSettings() async {
219:     await FireStoreUtils.getPaymentSettingsData().then((value) {
220:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
221:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
222:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
223:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
224:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
225:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
226:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
227:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
228:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
229:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
230:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
231:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
232:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
233: 
234:       if (walletSettingModel.value.isEnabled == true) {
235:         selectedPaymentMethod.value = PaymentGateway.wallet.name;

214:   Rx<MidTrans> midTransModel = MidTrans().obs;
215:   Rx<OrangeMoney> orangeMoneyModel = OrangeMoney().obs;
216:   Rx<Xendit> xenditModel = Xendit().obs;
217: 
218:   Future<void> getPaymentSettings() async {
219:     await FireStoreUtils.getPaymentSettingsData().then((value) {
220:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
221:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
222:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
223:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
224:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
225:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
226:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
227:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
228:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
229:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
230:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
231:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
232:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
233: 
234:       if (walletSettingModel.value.isEnabled == true) {
235:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
236:       } else if (cashOnDeliverySettingModel.value.isEnabled == true) {

215:   Rx<OrangeMoney> orangeMoneyModel = OrangeMoney().obs;
216:   Rx<Xendit> xenditModel = Xendit().obs;
217: 
218:   Future<void> getPaymentSettings() async {
219:     await FireStoreUtils.getPaymentSettingsData().then((value) {
220:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
221:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
222:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
223:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
224:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
225:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
226:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
227:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
228:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
229:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
230:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
231:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
232:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
233: 
234:       if (walletSettingModel.value.isEnabled == true) {
235:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
236:       } else if (cashOnDeliverySettingModel.value.isEnabled == true) {
237:         selectedPaymentMethod.value = PaymentGateway.cod.name;

216:   Rx<Xendit> xenditModel = Xendit().obs;
217: 
218:   Future<void> getPaymentSettings() async {
219:     await FireStoreUtils.getPaymentSettingsData().then((value) {
220:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
221:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
222:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
223:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
224:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
225:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
226:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
227:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
228:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
229:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
230:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
231:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
232:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
233: 
234:       if (walletSettingModel.value.isEnabled == true) {
235:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
236:       } else if (cashOnDeliverySettingModel.value.isEnabled == true) {
237:         selectedPaymentMethod.value = PaymentGateway.cod.name;
238:       } else if (stripeModel.value.isEnabled == true) {

217: 
218:   Future<void> getPaymentSettings() async {
219:     await FireStoreUtils.getPaymentSettingsData().then((value) {
220:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
221:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
222:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
223:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
224:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
225:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
226:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
227:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
228:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
229:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
230:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
231:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
232:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
233: 
234:       if (walletSettingModel.value.isEnabled == true) {
235:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
236:       } else if (cashOnDeliverySettingModel.value.isEnabled == true) {
237:         selectedPaymentMethod.value = PaymentGateway.cod.name;
238:       } else if (stripeModel.value.isEnabled == true) {
239:         selectedPaymentMethod.value = PaymentGateway.stripe.name;

218:   Future<void> getPaymentSettings() async {
219:     await FireStoreUtils.getPaymentSettingsData().then((value) {
220:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
221:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
222:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
223:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
224:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
225:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
226:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
227:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
228:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
229:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
230:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
231:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
232:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
233: 
234:       if (walletSettingModel.value.isEnabled == true) {
235:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
236:       } else if (cashOnDeliverySettingModel.value.isEnabled == true) {
237:         selectedPaymentMethod.value = PaymentGateway.cod.name;
238:       } else if (stripeModel.value.isEnabled == true) {
239:         selectedPaymentMethod.value = PaymentGateway.stripe.name;
240:       } else if (payPalModel.value.isEnabled == true) {

219:     await FireStoreUtils.getPaymentSettingsData().then((value) {
220:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
221:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
222:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
223:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
224:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
225:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
226:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
227:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
228:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
229:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
230:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
231:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
232:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
233: 
234:       if (walletSettingModel.value.isEnabled == true) {
235:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
236:       } else if (cashOnDeliverySettingModel.value.isEnabled == true) {
237:         selectedPaymentMethod.value = PaymentGateway.cod.name;
238:       } else if (stripeModel.value.isEnabled == true) {
239:         selectedPaymentMethod.value = PaymentGateway.stripe.name;
240:       } else if (payPalModel.value.isEnabled == true) {
241:         selectedPaymentMethod.value = PaymentGateway.paypal.name;

220:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
221:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
222:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
223:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
224:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
225:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
226:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
227:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
228:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
229:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
230:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
231:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
232:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
233: 
234:       if (walletSettingModel.value.isEnabled == true) {
235:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
236:       } else if (cashOnDeliverySettingModel.value.isEnabled == true) {
237:         selectedPaymentMethod.value = PaymentGateway.cod.name;
238:       } else if (stripeModel.value.isEnabled == true) {
239:         selectedPaymentMethod.value = PaymentGateway.stripe.name;
240:       } else if (payPalModel.value.isEnabled == true) {
241:         selectedPaymentMethod.value = PaymentGateway.paypal.name;
242:       } else if (payStackModel.value.isEnable == true) {

221:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
222:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
223:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
224:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
225:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
226:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
227:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
228:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
229:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
230:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
231:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
232:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
233: 
234:       if (walletSettingModel.value.isEnabled == true) {
235:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
236:       } else if (cashOnDeliverySettingModel.value.isEnabled == true) {
237:         selectedPaymentMethod.value = PaymentGateway.cod.name;
238:       } else if (stripeModel.value.isEnabled == true) {
239:         selectedPaymentMethod.value = PaymentGateway.stripe.name;
240:       } else if (payPalModel.value.isEnabled == true) {
241:         selectedPaymentMethod.value = PaymentGateway.paypal.name;
242:       } else if (payStackModel.value.isEnable == true) {
243:         selectedPaymentMethod.value = PaymentGateway.payStack.name;

222:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
223:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
224:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
225:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
226:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
227:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
228:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
229:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
230:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
231:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
232:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
233: 
234:       if (walletSettingModel.value.isEnabled == true) {
235:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
236:       } else if (cashOnDeliverySettingModel.value.isEnabled == true) {
237:         selectedPaymentMethod.value = PaymentGateway.cod.name;
238:       } else if (stripeModel.value.isEnabled == true) {
239:         selectedPaymentMethod.value = PaymentGateway.stripe.name;
240:       } else if (payPalModel.value.isEnabled == true) {
241:         selectedPaymentMethod.value = PaymentGateway.paypal.name;
242:       } else if (payStackModel.value.isEnable == true) {
243:         selectedPaymentMethod.value = PaymentGateway.payStack.name;
244:       } else if (mercadoPagoModel.value.isEnabled == true) {

223:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
224:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
225:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
226:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
227:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
228:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
229:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
230:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
231:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
232:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
233: 
234:       if (walletSettingModel.value.isEnabled == true) {
235:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
236:       } else if (cashOnDeliverySettingModel.value.isEnabled == true) {
237:         selectedPaymentMethod.value = PaymentGateway.cod.name;
238:       } else if (stripeModel.value.isEnabled == true) {
239:         selectedPaymentMethod.value = PaymentGateway.stripe.name;
240:       } else if (payPalModel.value.isEnabled == true) {
241:         selectedPaymentMethod.value = PaymentGateway.paypal.name;
242:       } else if (payStackModel.value.isEnable == true) {
243:         selectedPaymentMethod.value = PaymentGateway.payStack.name;
244:       } else if (mercadoPagoModel.value.isEnabled == true) {
245:         selectedPaymentMethod.value = PaymentGateway.mercadoPago.name;

224:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
225:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
226:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
227:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
228:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
229:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
230:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
231:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
232:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
233: 
234:       if (walletSettingModel.value.isEnabled == true) {
235:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
236:       } else if (cashOnDeliverySettingModel.value.isEnabled == true) {
237:         selectedPaymentMethod.value = PaymentGateway.cod.name;
238:       } else if (stripeModel.value.isEnabled == true) {
239:         selectedPaymentMethod.value = PaymentGateway.stripe.name;
240:       } else if (payPalModel.value.isEnabled == true) {
241:         selectedPaymentMethod.value = PaymentGateway.paypal.name;
242:       } else if (payStackModel.value.isEnable == true) {
243:         selectedPaymentMethod.value = PaymentGateway.payStack.name;
244:       } else if (mercadoPagoModel.value.isEnabled == true) {
245:         selectedPaymentMethod.value = PaymentGateway.mercadoPago.name;
246:       } else if (flutterWaveModel.value.isEnable == true) {

299:   Future<void> displayStripePaymentSheet({required String amount}) async {
300:     try {
301:       await Stripe.instance.presentPaymentSheet().then((value) {
302:         ShowToastDialog.showToast("Payment successfully".tr);
303:         placeOrder();
304:       });
305:     } on StripeException catch (e) {
306:       var lo1 = jsonEncode(e);
307:       var lo2 = jsonDecode(lo1);
308:       StripePayFailedModel lom = StripePayFailedModel.fromJson(lo2);
309:       ShowToastDialog.showToast(lom.error.message);
310:     } catch (e) {
311:       ShowToastDialog.showToast(e.toString());
312:     }
313:   }
314: 
315:   Future createStripeIntent({required String amount}) async {
316:     try {
317:       Map<String, dynamic> body = {
318:         'amount': ((double.parse(amount) * 100).round()).toString(),
319:         'currency': "USD",
320:         'payment_method_types[]': 'card',
321:         "description": "Strip Payment",

322:         "shipping[name]": Constant.userModel?.fullName(),
323:         "shipping[address][line1]": "510 Townsend St",
324:         "shipping[address][postal_code]": "98140",
325:         "shipping[address][city]": "San Francisco",
326:         "shipping[address][state]": "CA",
327:         "shipping[address][country]": "US",
328:       };
329:       var stripeSecret = stripeModel.value.stripeSecret;
330:       var response = await http.post(
331:         Uri.parse('https://api.stripe.com/v1/payment_intents'),
332:         body: body,
333:         headers: {'Authorization': 'Bearer $stripeSecret', 'Content-Type': 'application/x-www-form-urlencoded'},
334:       );
335: 
336:       return jsonDecode(response.body);
337:     } catch (e) {
338:       log(e.toString());
339:     }
340:   }
341: 
342:   //mercadoo
343:   Future<Null> mercadoPagoMakePayment({required BuildContext context, required String amount}) async {
344:     ShowToastDialog.showLoader("Please wait".tr);

323:         "shipping[address][line1]": "510 Townsend St",
324:         "shipping[address][postal_code]": "98140",
325:         "shipping[address][city]": "San Francisco",
326:         "shipping[address][state]": "CA",
327:         "shipping[address][country]": "US",
328:       };
329:       var stripeSecret = stripeModel.value.stripeSecret;
330:       var response = await http.post(
331:         Uri.parse('https://api.stripe.com/v1/payment_intents'),
332:         body: body,
333:         headers: {'Authorization': 'Bearer $stripeSecret', 'Content-Type': 'application/x-www-form-urlencoded'},
334:       );
335: 
336:       return jsonDecode(response.body);
337:     } catch (e) {
338:       log(e.toString());
339:     }
340:   }
341: 
342:   //mercadoo
343:   Future<Null> mercadoPagoMakePayment({required BuildContext context, required String amount}) async {
344:     ShowToastDialog.showLoader("Please wait".tr);
345:     final headers = {'Authorization': 'Bearer ${mercadoPagoModel.value.accessToken}', 'Content-Type': 'application/json'};

328:       };
329:       var stripeSecret = stripeModel.value.stripeSecret;
330:       var response = await http.post(
331:         Uri.parse('https://api.stripe.com/v1/payment_intents'),
332:         body: body,
333:         headers: {'Authorization': 'Bearer $stripeSecret', 'Content-Type': 'application/x-www-form-urlencoded'},
334:       );
335: 
336:       return jsonDecode(response.body);
337:     } catch (e) {
338:       log(e.toString());
339:     }
340:   }
341: 
342:   //mercadoo
343:   Future<Null> mercadoPagoMakePayment({required BuildContext context, required String amount}) async {
344:     ShowToastDialog.showLoader("Please wait".tr);
345:     final headers = {'Authorization': 'Bearer ${mercadoPagoModel.value.accessToken}', 'Content-Type': 'application/json'};
346: 
347:     final body = jsonEncode({
348:       "items": [
349:         {
350:           "title": "Test",

355:         },
356:       ],
357:       "payer": {"email": Constant.userModel?.email},
358:       "back_urls": {"failure": "${Constant.globalUrl}payment/failure", "pending": "${Constant.globalUrl}payment/pending", "success": "${Constant.globalUrl}payment/success"},
359:       "auto_return": "approved",
360:       // Automatically return after payment is approved
361:     });
362: 
363:     final response = await http.post(Uri.parse("https://api.mercadopago.com/checkout/preferences"), headers: headers, body: body);
364: 
365:     if (response.statusCode == 200 || response.statusCode == 201) {
366:       final data = jsonDecode(response.body);
367:       ShowToastDialog.closeLoader();
368:       Get.to(MercadoPagoScreen(initialURl: data['init_point']))!.then((value) {
369:         if (value) {
370:           ShowToastDialog.showToast("Payment Successful!!".tr);
371:           placeOrder();
372:         } else {
373:           ShowToastDialog.showToast("Payment UnSuccessful!!".tr);
374:         }
375:       });
376:     } else {
377:       ShowToastDialog.closeLoader();

357:       "payer": {"email": Constant.userModel?.email},
358:       "back_urls": {"failure": "${Constant.globalUrl}payment/failure", "pending": "${Constant.globalUrl}payment/pending", "success": "${Constant.globalUrl}payment/success"},
359:       "auto_return": "approved",
360:       // Automatically return after payment is approved
361:     });
362: 
363:     final response = await http.post(Uri.parse("https://api.mercadopago.com/checkout/preferences"), headers: headers, body: body);
364: 
365:     if (response.statusCode == 200 || response.statusCode == 201) {
366:       final data = jsonDecode(response.body);
367:       ShowToastDialog.closeLoader();
368:       Get.to(MercadoPagoScreen(initialURl: data['init_point']))!.then((value) {
369:         if (value) {
370:           ShowToastDialog.showToast("Payment Successful!!".tr);
371:           placeOrder();
372:         } else {
373:           ShowToastDialog.showToast("Payment UnSuccessful!!".tr);
374:         }
375:       });
376:     } else {
377:       ShowToastDialog.closeLoader();
378:       print('Error creating preference: ${response.body}');
379:       return null;

```

### FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_order_details_controller.dart
```dart
110:         date: Timestamp.now(),
111:         paymentMethod: PaymentGateway.wallet.name,
112:         transactionUser: "customer",
113:         userId: FireStoreUtils.getCurrentUid(),
114:         isTopup: true,
115:         orderId: parcelOrder.value.id,
116:         note: "Refund for cancelled parcel order",
117:         paymentStatus: "success",
118:         serviceType: Constant.parcelServiceType,
119:       );
120: 
121:       // Save wallet transaction
122:       await FireStoreUtils.setWalletTransaction(walletTransaction);
123: 
124:       // Update wallet balance
125:       await FireStoreUtils.updateUserWallet(amount: totalAmount.value.toString(), userId: FireStoreUtils.getCurrentUid());
126:     }
127: 
128:     await FireStoreUtils.parcelOrderPlace(parcelOrder.value);
129:     ShowToastDialog.closeLoader();
130:     ShowToastDialog.showToast("Order cancelled successfully".tr);
131:     Get.back(result: true);
132:   }

```

### FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_home_controller.dart
```dart
196:   Rx<RazorPayModel> razorPayModel = RazorPayModel().obs;
197: 
198:   Rx<MidTrans> midTransModel = MidTrans().obs;
199:   Rx<OrangeMoney> orangeMoneyModel = OrangeMoney().obs;
200:   Rx<Xendit> xenditModel = Xendit().obs;
201: 
202:   Future<void> getPaymentSettings() async {
203:     await FireStoreUtils.getPaymentSettingsData().then((value) {
204:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
205:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
206:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
207:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
208:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
209:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
210:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
211:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
212:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
213:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
214:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
215:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
216:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
217: 
218:       if (walletSettingModel.value.isEnabled == true) {

197: 
198:   Rx<MidTrans> midTransModel = MidTrans().obs;
199:   Rx<OrangeMoney> orangeMoneyModel = OrangeMoney().obs;
200:   Rx<Xendit> xenditModel = Xendit().obs;
201: 
202:   Future<void> getPaymentSettings() async {
203:     await FireStoreUtils.getPaymentSettingsData().then((value) {
204:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
205:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
206:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
207:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
208:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
209:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
210:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
211:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
212:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
213:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
214:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
215:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
216:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
217: 
218:       if (walletSettingModel.value.isEnabled == true) {
219:         selectedPaymentMethod.value = PaymentGateway.wallet.name;

198:   Rx<MidTrans> midTransModel = MidTrans().obs;
199:   Rx<OrangeMoney> orangeMoneyModel = OrangeMoney().obs;
200:   Rx<Xendit> xenditModel = Xendit().obs;
201: 
202:   Future<void> getPaymentSettings() async {
203:     await FireStoreUtils.getPaymentSettingsData().then((value) {
204:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
205:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
206:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
207:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
208:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
209:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
210:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
211:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
212:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
213:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
214:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
215:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
216:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
217: 
218:       if (walletSettingModel.value.isEnabled == true) {
219:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
220:       } else if (cashOnDeliverySettingModel.value.isEnabled == true) {

199:   Rx<OrangeMoney> orangeMoneyModel = OrangeMoney().obs;
200:   Rx<Xendit> xenditModel = Xendit().obs;
201: 
202:   Future<void> getPaymentSettings() async {
203:     await FireStoreUtils.getPaymentSettingsData().then((value) {
204:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
205:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
206:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
207:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
208:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
209:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
210:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
211:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
212:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
213:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
214:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
215:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
216:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
217: 
218:       if (walletSettingModel.value.isEnabled == true) {
219:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
220:       } else if (cashOnDeliverySettingModel.value.isEnabled == true) {
221:         selectedPaymentMethod.value = PaymentGateway.cod.name;

200:   Rx<Xendit> xenditModel = Xendit().obs;
201: 
202:   Future<void> getPaymentSettings() async {
203:     await FireStoreUtils.getPaymentSettingsData().then((value) {
204:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
205:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
206:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
207:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
208:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
209:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
210:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
211:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
212:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
213:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
214:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
215:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
216:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
217: 
218:       if (walletSettingModel.value.isEnabled == true) {
219:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
220:       } else if (cashOnDeliverySettingModel.value.isEnabled == true) {
221:         selectedPaymentMethod.value = PaymentGateway.cod.name;
222:       } else if (stripeModel.value.isEnabled == true) {

201: 
202:   Future<void> getPaymentSettings() async {
203:     await FireStoreUtils.getPaymentSettingsData().then((value) {
204:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
205:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
206:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
207:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
208:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
209:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
210:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
211:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
212:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
213:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
214:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
215:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
216:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
217: 
218:       if (walletSettingModel.value.isEnabled == true) {
219:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
220:       } else if (cashOnDeliverySettingModel.value.isEnabled == true) {
221:         selectedPaymentMethod.value = PaymentGateway.cod.name;
222:       } else if (stripeModel.value.isEnabled == true) {
223:         selectedPaymentMethod.value = PaymentGateway.stripe.name;

202:   Future<void> getPaymentSettings() async {
203:     await FireStoreUtils.getPaymentSettingsData().then((value) {
204:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
205:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
206:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
207:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
208:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
209:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
210:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
211:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
212:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
213:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
214:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
215:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
216:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
217: 
218:       if (walletSettingModel.value.isEnabled == true) {
219:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
220:       } else if (cashOnDeliverySettingModel.value.isEnabled == true) {
221:         selectedPaymentMethod.value = PaymentGateway.cod.name;
222:       } else if (stripeModel.value.isEnabled == true) {
223:         selectedPaymentMethod.value = PaymentGateway.stripe.name;
224:       } else if (payPalModel.value.isEnabled == true) {

203:     await FireStoreUtils.getPaymentSettingsData().then((value) {
204:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
205:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
206:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
207:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
208:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
209:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
210:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
211:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
212:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
213:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
214:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
215:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
216:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
217: 
218:       if (walletSettingModel.value.isEnabled == true) {
219:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
220:       } else if (cashOnDeliverySettingModel.value.isEnabled == true) {
221:         selectedPaymentMethod.value = PaymentGateway.cod.name;
222:       } else if (stripeModel.value.isEnabled == true) {
223:         selectedPaymentMethod.value = PaymentGateway.stripe.name;
224:       } else if (payPalModel.value.isEnabled == true) {
225:         selectedPaymentMethod.value = PaymentGateway.paypal.name;

204:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
205:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
206:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
207:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
208:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
209:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
210:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
211:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
212:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
213:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
214:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
215:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
216:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
217: 
218:       if (walletSettingModel.value.isEnabled == true) {
219:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
220:       } else if (cashOnDeliverySettingModel.value.isEnabled == true) {
221:         selectedPaymentMethod.value = PaymentGateway.cod.name;
222:       } else if (stripeModel.value.isEnabled == true) {
223:         selectedPaymentMethod.value = PaymentGateway.stripe.name;
224:       } else if (payPalModel.value.isEnabled == true) {
225:         selectedPaymentMethod.value = PaymentGateway.paypal.name;
226:       } else if (payStackModel.value.isEnable == true) {

205:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
206:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
207:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
208:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
209:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
210:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
211:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
212:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
213:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
214:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
215:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
216:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
217: 
218:       if (walletSettingModel.value.isEnabled == true) {
219:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
220:       } else if (cashOnDeliverySettingModel.value.isEnabled == true) {
221:         selectedPaymentMethod.value = PaymentGateway.cod.name;
222:       } else if (stripeModel.value.isEnabled == true) {
223:         selectedPaymentMethod.value = PaymentGateway.stripe.name;
224:       } else if (payPalModel.value.isEnabled == true) {
225:         selectedPaymentMethod.value = PaymentGateway.paypal.name;
226:       } else if (payStackModel.value.isEnable == true) {
227:         selectedPaymentMethod.value = PaymentGateway.payStack.name;

206:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
207:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
208:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
209:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
210:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
211:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
212:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
213:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
214:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
215:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
216:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
217: 
218:       if (walletSettingModel.value.isEnabled == true) {
219:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
220:       } else if (cashOnDeliverySettingModel.value.isEnabled == true) {
221:         selectedPaymentMethod.value = PaymentGateway.cod.name;
222:       } else if (stripeModel.value.isEnabled == true) {
223:         selectedPaymentMethod.value = PaymentGateway.stripe.name;
224:       } else if (payPalModel.value.isEnabled == true) {
225:         selectedPaymentMethod.value = PaymentGateway.paypal.name;
226:       } else if (payStackModel.value.isEnable == true) {
227:         selectedPaymentMethod.value = PaymentGateway.payStack.name;
228:       } else if (mercadoPagoModel.value.isEnabled == true) {

207:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
208:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
209:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
210:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
211:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
212:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
213:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
214:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
215:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
216:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
217: 
218:       if (walletSettingModel.value.isEnabled == true) {
219:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
220:       } else if (cashOnDeliverySettingModel.value.isEnabled == true) {
221:         selectedPaymentMethod.value = PaymentGateway.cod.name;
222:       } else if (stripeModel.value.isEnabled == true) {
223:         selectedPaymentMethod.value = PaymentGateway.stripe.name;
224:       } else if (payPalModel.value.isEnabled == true) {
225:         selectedPaymentMethod.value = PaymentGateway.paypal.name;
226:       } else if (payStackModel.value.isEnable == true) {
227:         selectedPaymentMethod.value = PaymentGateway.payStack.name;
228:       } else if (mercadoPagoModel.value.isEnabled == true) {
229:         selectedPaymentMethod.value = PaymentGateway.mercadoPago.name;

208:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
209:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
210:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
211:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
212:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
213:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
214:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
215:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
216:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
217: 
218:       if (walletSettingModel.value.isEnabled == true) {
219:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
220:       } else if (cashOnDeliverySettingModel.value.isEnabled == true) {
221:         selectedPaymentMethod.value = PaymentGateway.cod.name;
222:       } else if (stripeModel.value.isEnabled == true) {
223:         selectedPaymentMethod.value = PaymentGateway.stripe.name;
224:       } else if (payPalModel.value.isEnabled == true) {
225:         selectedPaymentMethod.value = PaymentGateway.paypal.name;
226:       } else if (payStackModel.value.isEnable == true) {
227:         selectedPaymentMethod.value = PaymentGateway.payStack.name;
228:       } else if (mercadoPagoModel.value.isEnabled == true) {
229:         selectedPaymentMethod.value = PaymentGateway.mercadoPago.name;
230:       } else if (flutterWaveModel.value.isEnable == true) {

```

### FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_order_details_controller.dart
```dart
192:           date: Timestamp.now(),
193:           paymentMethod: PaymentGateway.wallet.name,
194:           transactionUser: "customer",
195:           userId: FireStoreUtils.getCurrentUid(),
196:           isTopup: false,
197:           orderId: order.value.id,
198:           note: "Rental Amount debited",
199:           paymentStatus: "success",
200:           serviceType: Constant.parcelServiceType,
201:         );
202: 
203:         await FireStoreUtils.setWalletTransaction(transactionModel).then((value) async {
204:           if (value == true) {
205:             await FireStoreUtils.updateUserWallet(amount: "-${totalAmount.toString()}", userId: FireStoreUtils.getCurrentUid());
206:           }
207:         });
208:       }
209: 
210:       await FireStoreUtils.rentalOrderPlace(order.value).then((value) {
211:         ShowToastDialog.showToast("Payment successfully".tr);
212:         Get.back();
213:         Get.back();
214:       });

232:           paymentMethod: PaymentGateway.wallet.name,
233:           transactionUser: "customer",
234:           userId: FireStoreUtils.getCurrentUid(),
235:           isTopup: true,
236:           // refund
237:           orderId: order.id,
238:           note: "Refund for cancelled booking",
239:           paymentStatus: "success",
240:           serviceType: Constant.parcelServiceType,
241:         );
242: 
243:         await FireStoreUtils.setWalletTransaction(walletTransaction);
244:         await FireStoreUtils.updateUserWallet(amount: refundAmount.toString(), userId: FireStoreUtils.getCurrentUid());
245:       }
246:       ShowToastDialog.showToast("Booking cancelled successfully".tr);
247:       Get.back();
248:     } catch (e) {
249:       ShowToastDialog.showToast("${'Failed to cancel booking:'.tr} $e".tr);
250:     } finally {
251:       isLoading.value = false;
252:     }
253:   }
254: 

264:   Rx<RazorPayModel> razorPayModel = RazorPayModel().obs;
265: 
266:   Rx<MidTrans> midTransModel = MidTrans().obs;
267:   Rx<OrangeMoney> orangeMoneyModel = OrangeMoney().obs;
268:   Rx<Xendit> xenditModel = Xendit().obs;
269: 
270:   Future<void> getPaymentSettings() async {
271:     await FireStoreUtils.getPaymentSettingsData().then((value) {
272:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
273:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
274:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
275:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
276:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
277:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
278:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
279:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
280:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
281:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
282:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
283:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
284:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
285: 
286:       if (walletSettingModel.value.isEnabled == true) {

265: 
266:   Rx<MidTrans> midTransModel = MidTrans().obs;
267:   Rx<OrangeMoney> orangeMoneyModel = OrangeMoney().obs;
268:   Rx<Xendit> xenditModel = Xendit().obs;
269: 
270:   Future<void> getPaymentSettings() async {
271:     await FireStoreUtils.getPaymentSettingsData().then((value) {
272:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
273:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
274:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
275:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
276:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
277:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
278:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
279:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
280:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
281:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
282:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
283:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
284:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
285: 
286:       if (walletSettingModel.value.isEnabled == true) {
287:         selectedPaymentMethod.value = PaymentGateway.wallet.name;

266:   Rx<MidTrans> midTransModel = MidTrans().obs;
267:   Rx<OrangeMoney> orangeMoneyModel = OrangeMoney().obs;
268:   Rx<Xendit> xenditModel = Xendit().obs;
269: 
270:   Future<void> getPaymentSettings() async {
271:     await FireStoreUtils.getPaymentSettingsData().then((value) {
272:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
273:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
274:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
275:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
276:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
277:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
278:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
279:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
280:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
281:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
282:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
283:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
284:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
285: 
286:       if (walletSettingModel.value.isEnabled == true) {
287:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
288:       } else if (cashOnDeliverySettingModel.value.isEnabled == true) {

267:   Rx<OrangeMoney> orangeMoneyModel = OrangeMoney().obs;
268:   Rx<Xendit> xenditModel = Xendit().obs;
269: 
270:   Future<void> getPaymentSettings() async {
271:     await FireStoreUtils.getPaymentSettingsData().then((value) {
272:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
273:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
274:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
275:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
276:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
277:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
278:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
279:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
280:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
281:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
282:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
283:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
284:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
285: 
286:       if (walletSettingModel.value.isEnabled == true) {
287:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
288:       } else if (cashOnDeliverySettingModel.value.isEnabled == true) {
289:         selectedPaymentMethod.value = PaymentGateway.cod.name;

268:   Rx<Xendit> xenditModel = Xendit().obs;
269: 
270:   Future<void> getPaymentSettings() async {
271:     await FireStoreUtils.getPaymentSettingsData().then((value) {
272:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
273:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
274:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
275:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
276:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
277:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
278:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
279:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
280:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
281:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
282:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
283:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
284:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
285: 
286:       if (walletSettingModel.value.isEnabled == true) {
287:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
288:       } else if (cashOnDeliverySettingModel.value.isEnabled == true) {
289:         selectedPaymentMethod.value = PaymentGateway.cod.name;
290:       } else if (stripeModel.value.isEnabled == true) {

269: 
270:   Future<void> getPaymentSettings() async {
271:     await FireStoreUtils.getPaymentSettingsData().then((value) {
272:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
273:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
274:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
275:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
276:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
277:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
278:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
279:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
280:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
281:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
282:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
283:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
284:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
285: 
286:       if (walletSettingModel.value.isEnabled == true) {
287:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
288:       } else if (cashOnDeliverySettingModel.value.isEnabled == true) {
289:         selectedPaymentMethod.value = PaymentGateway.cod.name;
290:       } else if (stripeModel.value.isEnabled == true) {
291:         selectedPaymentMethod.value = PaymentGateway.stripe.name;

270:   Future<void> getPaymentSettings() async {
271:     await FireStoreUtils.getPaymentSettingsData().then((value) {
272:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
273:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
274:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
275:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
276:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
277:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
278:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
279:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
280:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
281:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
282:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
283:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
284:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
285: 
286:       if (walletSettingModel.value.isEnabled == true) {
287:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
288:       } else if (cashOnDeliverySettingModel.value.isEnabled == true) {
289:         selectedPaymentMethod.value = PaymentGateway.cod.name;
290:       } else if (stripeModel.value.isEnabled == true) {
291:         selectedPaymentMethod.value = PaymentGateway.stripe.name;
292:       } else if (payPalModel.value.isEnabled == true) {

271:     await FireStoreUtils.getPaymentSettingsData().then((value) {
272:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
273:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
274:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
275:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
276:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
277:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
278:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
279:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
280:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
281:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
282:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
283:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
284:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
285: 
286:       if (walletSettingModel.value.isEnabled == true) {
287:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
288:       } else if (cashOnDeliverySettingModel.value.isEnabled == true) {
289:         selectedPaymentMethod.value = PaymentGateway.cod.name;
290:       } else if (stripeModel.value.isEnabled == true) {
291:         selectedPaymentMethod.value = PaymentGateway.stripe.name;
292:       } else if (payPalModel.value.isEnabled == true) {
293:         selectedPaymentMethod.value = PaymentGateway.paypal.name;

272:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
273:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
274:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
275:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
276:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
277:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
278:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
279:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
280:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
281:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
282:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
283:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
284:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
285: 
286:       if (walletSettingModel.value.isEnabled == true) {
287:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
288:       } else if (cashOnDeliverySettingModel.value.isEnabled == true) {
289:         selectedPaymentMethod.value = PaymentGateway.cod.name;
290:       } else if (stripeModel.value.isEnabled == true) {
291:         selectedPaymentMethod.value = PaymentGateway.stripe.name;
292:       } else if (payPalModel.value.isEnabled == true) {
293:         selectedPaymentMethod.value = PaymentGateway.paypal.name;
294:       } else if (payStackModel.value.isEnable == true) {

273:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
274:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
275:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
276:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
277:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
278:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
279:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
280:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
281:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
282:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
283:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
284:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
285: 
286:       if (walletSettingModel.value.isEnabled == true) {
287:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
288:       } else if (cashOnDeliverySettingModel.value.isEnabled == true) {
289:         selectedPaymentMethod.value = PaymentGateway.cod.name;
290:       } else if (stripeModel.value.isEnabled == true) {
291:         selectedPaymentMethod.value = PaymentGateway.stripe.name;
292:       } else if (payPalModel.value.isEnabled == true) {
293:         selectedPaymentMethod.value = PaymentGateway.paypal.name;
294:       } else if (payStackModel.value.isEnable == true) {
295:         selectedPaymentMethod.value = PaymentGateway.payStack.name;

274:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
275:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
276:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
277:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
278:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
279:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
280:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
281:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
282:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
283:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
284:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
285: 
286:       if (walletSettingModel.value.isEnabled == true) {
287:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
288:       } else if (cashOnDeliverySettingModel.value.isEnabled == true) {
289:         selectedPaymentMethod.value = PaymentGateway.cod.name;
290:       } else if (stripeModel.value.isEnabled == true) {
291:         selectedPaymentMethod.value = PaymentGateway.stripe.name;
292:       } else if (payPalModel.value.isEnabled == true) {
293:         selectedPaymentMethod.value = PaymentGateway.paypal.name;
294:       } else if (payStackModel.value.isEnable == true) {
295:         selectedPaymentMethod.value = PaymentGateway.payStack.name;
296:       } else if (mercadoPagoModel.value.isEnabled == true) {

275:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
276:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
277:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
278:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
279:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
280:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
281:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
282:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
283:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
284:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
285: 
286:       if (walletSettingModel.value.isEnabled == true) {
287:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
288:       } else if (cashOnDeliverySettingModel.value.isEnabled == true) {
289:         selectedPaymentMethod.value = PaymentGateway.cod.name;
290:       } else if (stripeModel.value.isEnabled == true) {
291:         selectedPaymentMethod.value = PaymentGateway.stripe.name;
292:       } else if (payPalModel.value.isEnabled == true) {
293:         selectedPaymentMethod.value = PaymentGateway.paypal.name;
294:       } else if (payStackModel.value.isEnable == true) {
295:         selectedPaymentMethod.value = PaymentGateway.payStack.name;
296:       } else if (mercadoPagoModel.value.isEnabled == true) {
297:         selectedPaymentMethod.value = PaymentGateway.mercadoPago.name;

276:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
277:       paytmModel.value = PaytmModel.fromJson(jsonDecode(Preferences.getString(Preferences.paytmSettings)));
278:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
279:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
280:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
281:       orangeMoneyModel.value = OrangeMoney.fromJson(jsonDecode(Preferences.getString(Preferences.orangeMoneySettings)));
282:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
283:       walletSettingModel.value = WalletSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.walletSettings)));
284:       cashOnDeliverySettingModel.value = CodSettingModel.fromJson(jsonDecode(Preferences.getString(Preferences.codSettings)));
285: 
286:       if (walletSettingModel.value.isEnabled == true) {
287:         selectedPaymentMethod.value = PaymentGateway.wallet.name;
288:       } else if (cashOnDeliverySettingModel.value.isEnabled == true) {
289:         selectedPaymentMethod.value = PaymentGateway.cod.name;
290:       } else if (stripeModel.value.isEnabled == true) {
291:         selectedPaymentMethod.value = PaymentGateway.stripe.name;
292:       } else if (payPalModel.value.isEnabled == true) {
293:         selectedPaymentMethod.value = PaymentGateway.paypal.name;
294:       } else if (payStackModel.value.isEnable == true) {
295:         selectedPaymentMethod.value = PaymentGateway.payStack.name;
296:       } else if (mercadoPagoModel.value.isEnabled == true) {
297:         selectedPaymentMethod.value = PaymentGateway.mercadoPago.name;
298:       } else if (flutterWaveModel.value.isEnable == true) {

351:   Future<void> displayStripePaymentSheet({required String amount}) async {
352:     try {
353:       await Stripe.instance.presentPaymentSheet().then((value) {
354:         ShowToastDialog.showToast("Payment successfully".tr);
355:         completeOrder();
356:       });
357:     } on StripeException catch (e) {
358:       var lo1 = jsonEncode(e);
359:       var lo2 = jsonDecode(lo1);
360:       StripePayFailedModel lom = StripePayFailedModel.fromJson(lo2);
361:       ShowToastDialog.showToast(lom.error.message);
362:     } catch (e) {
363:       ShowToastDialog.showToast(e.toString());
364:     }
365:   }
366: 
367:   Future createStripeIntent({required String amount}) async {
368:     try {
369:       Map<String, dynamic> body = {
370:         'amount': ((double.parse(amount) * 100).round()).toString(),
371:         'currency': "USD",
372:         'payment_method_types[]': 'card',
373:         "description": "Strip Payment",

374:         "shipping[name]": Constant.userModel!.fullName(),
375:         "shipping[address][line1]": "510 Townsend St",
376:         "shipping[address][postal_code]": "98140",
377:         "shipping[address][city]": "San Francisco",
378:         "shipping[address][state]": "CA",
379:         "shipping[address][country]": "US",
380:       };
381:       var stripeSecret = stripeModel.value.stripeSecret;
382:       var response = await http.post(
383:         Uri.parse('https://api.stripe.com/v1/payment_intents'),
384:         body: body,
385:         headers: {'Authorization': 'Bearer $stripeSecret', 'Content-Type': 'application/x-www-form-urlencoded'},
386:       );
387: 
388:       return jsonDecode(response.body);
389:     } catch (e) {
390:       log(e.toString());
391:     }
392:   }
393: 
394:   //mercadoo
395:   Future<Null> mercadoPagoMakePayment({required BuildContext context, required String amount}) async {
396:     ShowToastDialog.showLoader("Please wait".tr);

375:         "shipping[address][line1]": "510 Townsend St",
376:         "shipping[address][postal_code]": "98140",
377:         "shipping[address][city]": "San Francisco",
378:         "shipping[address][state]": "CA",
379:         "shipping[address][country]": "US",
380:       };
381:       var stripeSecret = stripeModel.value.stripeSecret;
382:       var response = await http.post(
383:         Uri.parse('https://api.stripe.com/v1/payment_intents'),
384:         body: body,
385:         headers: {'Authorization': 'Bearer $stripeSecret', 'Content-Type': 'application/x-www-form-urlencoded'},
386:       );
387: 
388:       return jsonDecode(response.body);
389:     } catch (e) {
390:       log(e.toString());
391:     }
392:   }
393: 
394:   //mercadoo
395:   Future<Null> mercadoPagoMakePayment({required BuildContext context, required String amount}) async {
396:     ShowToastDialog.showLoader("Please wait".tr);
397:     final headers = {'Authorization': 'Bearer ${mercadoPagoModel.value.accessToken}', 'Content-Type': 'application/json'};

380:       };
381:       var stripeSecret = stripeModel.value.stripeSecret;
382:       var response = await http.post(
383:         Uri.parse('https://api.stripe.com/v1/payment_intents'),
384:         body: body,
385:         headers: {'Authorization': 'Bearer $stripeSecret', 'Content-Type': 'application/x-www-form-urlencoded'},
386:       );
387: 
388:       return jsonDecode(response.body);
389:     } catch (e) {
390:       log(e.toString());
391:     }
392:   }
393: 
394:   //mercadoo
395:   Future<Null> mercadoPagoMakePayment({required BuildContext context, required String amount}) async {
396:     ShowToastDialog.showLoader("Please wait".tr);
397:     final headers = {'Authorization': 'Bearer ${mercadoPagoModel.value.accessToken}', 'Content-Type': 'application/json'};
398: 
399:     final body = jsonEncode({
400:       "items": [
401:         {
402:           "title": "Test",

407:         },
408:       ],
409:       "payer": {"email": Constant.userModel!.email},
410:       "back_urls": {"failure": "${Constant.globalUrl}payment/failure", "pending": "${Constant.globalUrl}payment/pending", "success": "${Constant.globalUrl}payment/success"},
411:       "auto_return": "approved",
412:       // Automatically return after payment is approved
413:     });
414: 
415:     final response = await http.post(Uri.parse("https://api.mercadopago.com/checkout/preferences"), headers: headers, body: body);
416: 
417:     if (response.statusCode == 200 || response.statusCode == 201) {
418:       final data = jsonDecode(response.body);
419:       ShowToastDialog.closeLoader();
420:       Get.to(MercadoPagoScreen(initialURl: data['init_point']))!.then((value) {
421:         if (value) {
422:           ShowToastDialog.showToast("Payment Successful!!".tr);
423:           completeOrder();
424:         } else {
425:           ShowToastDialog.showToast("Payment UnSuccessful!!".tr);
426:         }
427:       });
428:     } else {
429:       ShowToastDialog.closeLoader();

```

### FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart
```dart
20: import 'package:get/get.dart';
21: import '../screen_ui/auth_screens/login_screen.dart';
22: import '../screen_ui/multi_vendor_service/dash_board_screens/dash_board_screen.dart';
23: import '../screen_ui/on_demand_service/on_demand_dashboard_screen.dart';
24: 
25: class ServiceListController extends GetxController {
26:   var isLoading = false.obs;
27:   var serviceListBanner = <dynamic>[].obs;
28:   var sectionList = <SectionModel>[].obs;
29:   var currencyData = CurrencyModel().obs;
30: 
31:   @override
32:   void onInit() {
33:     super.onInit();
34:     loadData();
35:   }
36: 
37:   Future<void> loadData() async {
38:     isLoading.value = true;
39: 
40:     // fetch currency
41:     CurrencyModel? currency = await FireStoreUtils.getCurrency();
42: 

38:     isLoading.value = true;
39: 
40:     // fetch currency
41:     CurrencyModel? currency = await FireStoreUtils.getCurrency();
42: 
43:     currencyData.value = currency ?? CurrencyModel(id: "", code: "USD", decimal: 2, isactive: true, name: "US Dollar", symbol: "\$", symbolatright: false);
44: 
45:     // Load sections
46:     List<SectionModel> sections = await FireStoreUtils.getSections();
47: 
48:     sectionList.assignAll(sections);
49: 
50:     await FireStoreUtils.getSectionBannerList().then((value) {
51:       serviceListBanner.assignAll(value);
52:     });
53: 
54:     await getZone();
55:     isLoading.value = false;
56:   }
57: 
58:   Future<void> getZone() async {
59:     await FireStoreUtils.getZone().then((value) {
60:       if (value != null) {

58:   Future<void> getZone() async {
59:     await FireStoreUtils.getZone().then((value) {
60:       if (value != null) {
61:         Constant.zoneList = value;
62:       }
63:     });
64:   }
65: 
66:   Future<void> onServiceTap(BuildContext context, SectionModel sectionModel) async {
67:     try {
68:       ShowToastDialog.showLoader("Please wait...".tr);
69:       Constant.sectionConstantModel = sectionModel;
70:       AppThemeData.primary300 = Color(int.tryParse(sectionModel.color?.replaceFirst("#", "0xff") ?? '') ?? 0xff2196F3);
71:       if (auth.FirebaseAuth.instance.currentUser != null) {
72:         String uid = auth.FirebaseAuth.instance.currentUser!.uid;
73:         UserModel? user = await FireStoreUtils.getUserProfile(uid);
74:         if (user != null && user.role == Constant.userRoleCustomer) {
75:           user.fcmToken = await NotificationService.getToken();
76:           await FireStoreUtils.updateUser(user);
77:           ShowToastDialog.closeLoader();
78:           if (sectionModel.serviceType == 'Ecommerce Service') {
79:             await Preferences.setString(Preferences.foodDeliveryType, 'Delivery');
80:           }

61:         Constant.zoneList = value;
62:       }
63:     });
64:   }
65: 
66:   Future<void> onServiceTap(BuildContext context, SectionModel sectionModel) async {
67:     try {
68:       ShowToastDialog.showLoader("Please wait...".tr);
69:       Constant.sectionConstantModel = sectionModel;
70:       AppThemeData.primary300 = Color(int.tryParse(sectionModel.color?.replaceFirst("#", "0xff") ?? '') ?? 0xff2196F3);
71:       if (auth.FirebaseAuth.instance.currentUser != null) {
72:         String uid = auth.FirebaseAuth.instance.currentUser!.uid;
73:         UserModel? user = await FireStoreUtils.getUserProfile(uid);
74:         if (user != null && user.role == Constant.userRoleCustomer) {
75:           user.fcmToken = await NotificationService.getToken();
76:           await FireStoreUtils.updateUser(user);
77:           ShowToastDialog.closeLoader();
78:           if (sectionModel.serviceType == 'Ecommerce Service') {
79:             await Preferences.setString(Preferences.foodDeliveryType, 'Delivery');
80:           }
81:           await _navigate(sectionModel);
82:         } else {
83:           ShowToastDialog.closeLoader();

62:       }
63:     });
64:   }
65: 
66:   Future<void> onServiceTap(BuildContext context, SectionModel sectionModel) async {
67:     try {
68:       ShowToastDialog.showLoader("Please wait...".tr);
69:       Constant.sectionConstantModel = sectionModel;
70:       AppThemeData.primary300 = Color(int.tryParse(sectionModel.color?.replaceFirst("#", "0xff") ?? '') ?? 0xff2196F3);
71:       if (auth.FirebaseAuth.instance.currentUser != null) {
72:         String uid = auth.FirebaseAuth.instance.currentUser!.uid;
73:         UserModel? user = await FireStoreUtils.getUserProfile(uid);
74:         if (user != null && user.role == Constant.userRoleCustomer) {
75:           user.fcmToken = await NotificationService.getToken();
76:           await FireStoreUtils.updateUser(user);
77:           ShowToastDialog.closeLoader();
78:           if (sectionModel.serviceType == 'Ecommerce Service') {
79:             await Preferences.setString(Preferences.foodDeliveryType, 'Delivery');
80:           }
81:           await _navigate(sectionModel);
82:         } else {
83:           ShowToastDialog.closeLoader();
84:           Get.offAll(() => const LoginScreen());

70:       AppThemeData.primary300 = Color(int.tryParse(sectionModel.color?.replaceFirst("#", "0xff") ?? '') ?? 0xff2196F3);
71:       if (auth.FirebaseAuth.instance.currentUser != null) {
72:         String uid = auth.FirebaseAuth.instance.currentUser!.uid;
73:         UserModel? user = await FireStoreUtils.getUserProfile(uid);
74:         if (user != null && user.role == Constant.userRoleCustomer) {
75:           user.fcmToken = await NotificationService.getToken();
76:           await FireStoreUtils.updateUser(user);
77:           ShowToastDialog.closeLoader();
78:           if (sectionModel.serviceType == 'Ecommerce Service') {
79:             await Preferences.setString(Preferences.foodDeliveryType, 'Delivery');
80:           }
81:           await _navigate(sectionModel);
82:         } else {
83:           ShowToastDialog.closeLoader();
84:           Get.offAll(() => const LoginScreen());
85:         }
86:       } else {
87:         ShowToastDialog.closeLoader();
88:         await _navigate(sectionModel);
89:       }
90:     } catch (e) {
91:       print("Error during service tap: $e");
92:       ShowToastDialog.closeLoader();

73:         UserModel? user = await FireStoreUtils.getUserProfile(uid);
74:         if (user != null && user.role == Constant.userRoleCustomer) {
75:           user.fcmToken = await NotificationService.getToken();
76:           await FireStoreUtils.updateUser(user);
77:           ShowToastDialog.closeLoader();
78:           if (sectionModel.serviceType == 'Ecommerce Service') {
79:             await Preferences.setString(Preferences.foodDeliveryType, 'Delivery');
80:           }
81:           await _navigate(sectionModel);
82:         } else {
83:           ShowToastDialog.closeLoader();
84:           Get.offAll(() => const LoginScreen());
85:         }
86:       } else {
87:         ShowToastDialog.closeLoader();
88:         await _navigate(sectionModel);
89:       }
90:     } catch (e) {
91:       print("Error during service tap: $e");
92:       ShowToastDialog.closeLoader();
93:     }
94:   }
95: 

80:           }
81:           await _navigate(sectionModel);
82:         } else {
83:           ShowToastDialog.closeLoader();
84:           Get.offAll(() => const LoginScreen());
85:         }
86:       } else {
87:         ShowToastDialog.closeLoader();
88:         await _navigate(sectionModel);
89:       }
90:     } catch (e) {
91:       print("Error during service tap: $e");
92:       ShowToastDialog.closeLoader();
93:     }
94:   }
95: 
96:   Future<void> _navigate(SectionModel sectionModel) async {
97:     await FireStoreUtils.getTaxList(Constant.sectionConstantModel!.id).then((value) {
98:       if (value != null) {
99:         Constant.taxProductList = value.where((TaxModel taxModel) => taxModel.scope == "product").toList();
100:         Constant.orderProductTaxList = value.where((TaxModel taxModel) => taxModel.scope == "order").toList();
101:         Constant.driverDeliveryTaxList = value.where((TaxModel taxModel) => taxModel.scope == "delivery").toList();
102: 

88:         await _navigate(sectionModel);
89:       }
90:     } catch (e) {
91:       print("Error during service tap: $e");
92:       ShowToastDialog.closeLoader();
93:     }
94:   }
95: 
96:   Future<void> _navigate(SectionModel sectionModel) async {
97:     await FireStoreUtils.getTaxList(Constant.sectionConstantModel!.id).then((value) {
98:       if (value != null) {
99:         Constant.taxProductList = value.where((TaxModel taxModel) => taxModel.scope == "product").toList();
100:         Constant.orderProductTaxList = value.where((TaxModel taxModel) => taxModel.scope == "order").toList();
101:         Constant.driverDeliveryTaxList = value.where((TaxModel taxModel) => taxModel.scope == "delivery").toList();
102: 
103:         if (sectionModel.packagingChargeEnable == true) {
104:           Constant.packagingTaxList = value.where((TaxModel taxModel) => taxModel.scope == "packaging").toList();
105:         }
106:         if (sectionModel.platformFee?.enable == true) {
107:           Constant.platformFeeModel = sectionModel.platformFee;
108:           Constant.platformTaxList = value.where((TaxModel taxModel) => taxModel.scope == "platform").toList();
109:         }
110:       }

95: 
96:   Future<void> _navigate(SectionModel sectionModel) async {
97:     await FireStoreUtils.getTaxList(Constant.sectionConstantModel!.id).then((value) {
98:       if (value != null) {
99:         Constant.taxProductList = value.where((TaxModel taxModel) => taxModel.scope == "product").toList();
100:         Constant.orderProductTaxList = value.where((TaxModel taxModel) => taxModel.scope == "order").toList();
101:         Constant.driverDeliveryTaxList = value.where((TaxModel taxModel) => taxModel.scope == "delivery").toList();
102: 
103:         if (sectionModel.packagingChargeEnable == true) {
104:           Constant.packagingTaxList = value.where((TaxModel taxModel) => taxModel.scope == "packaging").toList();
105:         }
106:         if (sectionModel.platformFee?.enable == true) {
107:           Constant.platformFeeModel = sectionModel.platformFee;
108:           Constant.platformTaxList = value.where((TaxModel taxModel) => taxModel.scope == "platform").toList();
109:         }
110:       }
111:     });
112: 
113:     if (sectionModel.serviceTypeFlag == "ecommerce-service" || sectionModel.serviceTypeFlag == "delivery-service") {
114:       if (cartItem.isNotEmpty) {
115:         showAlertDialog(Get.context!, UserModel(), sectionModel);
116:       } else {
117:         if (sectionModel.serviceTypeFlag == "ecommerce-service") {

98:       if (value != null) {
99:         Constant.taxProductList = value.where((TaxModel taxModel) => taxModel.scope == "product").toList();
100:         Constant.orderProductTaxList = value.where((TaxModel taxModel) => taxModel.scope == "order").toList();
101:         Constant.driverDeliveryTaxList = value.where((TaxModel taxModel) => taxModel.scope == "delivery").toList();
102: 
103:         if (sectionModel.packagingChargeEnable == true) {
104:           Constant.packagingTaxList = value.where((TaxModel taxModel) => taxModel.scope == "packaging").toList();
105:         }
106:         if (sectionModel.platformFee?.enable == true) {
107:           Constant.platformFeeModel = sectionModel.platformFee;
108:           Constant.platformTaxList = value.where((TaxModel taxModel) => taxModel.scope == "platform").toList();
109:         }
110:       }
111:     });
112: 
113:     if (sectionModel.serviceTypeFlag == "ecommerce-service" || sectionModel.serviceTypeFlag == "delivery-service") {
114:       if (cartItem.isNotEmpty) {
115:         showAlertDialog(Get.context!, UserModel(), sectionModel);
116:       } else {
117:         if (sectionModel.serviceTypeFlag == "ecommerce-service") {
118:           Get.to(DashBoardEcommerceScreen());
119:         } else if (sectionModel.serviceTypeFlag == "cab-service") {
120:           Get.to(CabDashboardScreen());

99:         Constant.taxProductList = value.where((TaxModel taxModel) => taxModel.scope == "product").toList();
100:         Constant.orderProductTaxList = value.where((TaxModel taxModel) => taxModel.scope == "order").toList();
101:         Constant.driverDeliveryTaxList = value.where((TaxModel taxModel) => taxModel.scope == "delivery").toList();
102: 
103:         if (sectionModel.packagingChargeEnable == true) {
104:           Constant.packagingTaxList = value.where((TaxModel taxModel) => taxModel.scope == "packaging").toList();
105:         }
106:         if (sectionModel.platformFee?.enable == true) {
107:           Constant.platformFeeModel = sectionModel.platformFee;
108:           Constant.platformTaxList = value.where((TaxModel taxModel) => taxModel.scope == "platform").toList();
109:         }
110:       }
111:     });
112: 
113:     if (sectionModel.serviceTypeFlag == "ecommerce-service" || sectionModel.serviceTypeFlag == "delivery-service") {
114:       if (cartItem.isNotEmpty) {
115:         showAlertDialog(Get.context!, UserModel(), sectionModel);
116:       } else {
117:         if (sectionModel.serviceTypeFlag == "ecommerce-service") {
118:           Get.to(DashBoardEcommerceScreen());
119:         } else if (sectionModel.serviceTypeFlag == "cab-service") {
120:           Get.to(CabDashboardScreen());
121:         } else if (sectionModel.serviceTypeFlag == "rental-service") {

105:         }
106:         if (sectionModel.platformFee?.enable == true) {
107:           Constant.platformFeeModel = sectionModel.platformFee;
108:           Constant.platformTaxList = value.where((TaxModel taxModel) => taxModel.scope == "platform").toList();
109:         }
110:       }
111:     });
112: 
113:     if (sectionModel.serviceTypeFlag == "ecommerce-service" || sectionModel.serviceTypeFlag == "delivery-service") {
114:       if (cartItem.isNotEmpty) {
115:         showAlertDialog(Get.context!, UserModel(), sectionModel);
116:       } else {
117:         if (sectionModel.serviceTypeFlag == "ecommerce-service") {
118:           Get.to(DashBoardEcommerceScreen());
119:         } else if (sectionModel.serviceTypeFlag == "cab-service") {
120:           Get.to(CabDashboardScreen());
121:         } else if (sectionModel.serviceTypeFlag == "rental-service") {
122:           Get.to(RentalDashboardScreen());
123:         } else if (sectionModel.serviceTypeFlag == "parcel_delivery") {
124:           Get.to(ParcelDashboardScreen());
125:         } else if (sectionModel.serviceTypeFlag == "ondemand-service") {
126:           Get.to(OnDemandDashboardScreen());
127:         } else {

107:           Constant.platformFeeModel = sectionModel.platformFee;
108:           Constant.platformTaxList = value.where((TaxModel taxModel) => taxModel.scope == "platform").toList();
109:         }
110:       }
111:     });
112: 
113:     if (sectionModel.serviceTypeFlag == "ecommerce-service" || sectionModel.serviceTypeFlag == "delivery-service") {
114:       if (cartItem.isNotEmpty) {
115:         showAlertDialog(Get.context!, UserModel(), sectionModel);
116:       } else {
117:         if (sectionModel.serviceTypeFlag == "ecommerce-service") {
118:           Get.to(DashBoardEcommerceScreen());
119:         } else if (sectionModel.serviceTypeFlag == "cab-service") {
120:           Get.to(CabDashboardScreen());
121:         } else if (sectionModel.serviceTypeFlag == "rental-service") {
122:           Get.to(RentalDashboardScreen());
123:         } else if (sectionModel.serviceTypeFlag == "parcel_delivery") {
124:           Get.to(ParcelDashboardScreen());
125:         } else if (sectionModel.serviceTypeFlag == "ondemand-service") {
126:           Get.to(OnDemandDashboardScreen());
127:         } else {
128:           Get.to(() => DashBoardScreen());
129:         }

109:         }
110:       }
111:     });
112: 
113:     if (sectionModel.serviceTypeFlag == "ecommerce-service" || sectionModel.serviceTypeFlag == "delivery-service") {
114:       if (cartItem.isNotEmpty) {
115:         showAlertDialog(Get.context!, UserModel(), sectionModel);
116:       } else {
117:         if (sectionModel.serviceTypeFlag == "ecommerce-service") {
118:           Get.to(DashBoardEcommerceScreen());
119:         } else if (sectionModel.serviceTypeFlag == "cab-service") {
120:           Get.to(CabDashboardScreen());
121:         } else if (sectionModel.serviceTypeFlag == "rental-service") {
122:           Get.to(RentalDashboardScreen());
123:         } else if (sectionModel.serviceTypeFlag == "parcel_delivery") {
124:           Get.to(ParcelDashboardScreen());
125:         } else if (sectionModel.serviceTypeFlag == "ondemand-service") {
126:           Get.to(OnDemandDashboardScreen());
127:         } else {
128:           Get.to(() => DashBoardScreen());
129:         }
130:       }
131:     } else {

110:       }
111:     });
112: 
113:     if (sectionModel.serviceTypeFlag == "ecommerce-service" || sectionModel.serviceTypeFlag == "delivery-service") {
114:       if (cartItem.isNotEmpty) {
115:         showAlertDialog(Get.context!, UserModel(), sectionModel);
116:       } else {
117:         if (sectionModel.serviceTypeFlag == "ecommerce-service") {
118:           Get.to(DashBoardEcommerceScreen());
119:         } else if (sectionModel.serviceTypeFlag == "cab-service") {
120:           Get.to(CabDashboardScreen());
121:         } else if (sectionModel.serviceTypeFlag == "rental-service") {
122:           Get.to(RentalDashboardScreen());
123:         } else if (sectionModel.serviceTypeFlag == "parcel_delivery") {
124:           Get.to(ParcelDashboardScreen());
125:         } else if (sectionModel.serviceTypeFlag == "ondemand-service") {
126:           Get.to(OnDemandDashboardScreen());
127:         } else {
128:           Get.to(() => DashBoardScreen());
129:         }
130:       }
131:     } else {
132:       if (sectionModel.serviceTypeFlag == "ecommerce-service") {

111:     });
112: 
113:     if (sectionModel.serviceTypeFlag == "ecommerce-service" || sectionModel.serviceTypeFlag == "delivery-service") {
114:       if (cartItem.isNotEmpty) {
115:         showAlertDialog(Get.context!, UserModel(), sectionModel);
116:       } else {
117:         if (sectionModel.serviceTypeFlag == "ecommerce-service") {
118:           Get.to(DashBoardEcommerceScreen());
119:         } else if (sectionModel.serviceTypeFlag == "cab-service") {
120:           Get.to(CabDashboardScreen());
121:         } else if (sectionModel.serviceTypeFlag == "rental-service") {
122:           Get.to(RentalDashboardScreen());
123:         } else if (sectionModel.serviceTypeFlag == "parcel_delivery") {
124:           Get.to(ParcelDashboardScreen());
125:         } else if (sectionModel.serviceTypeFlag == "ondemand-service") {
126:           Get.to(OnDemandDashboardScreen());
127:         } else {
128:           Get.to(() => DashBoardScreen());
129:         }
130:       }
131:     } else {
132:       if (sectionModel.serviceTypeFlag == "ecommerce-service") {
133:         Get.to(DashBoardEcommerceScreen());

113:     if (sectionModel.serviceTypeFlag == "ecommerce-service" || sectionModel.serviceTypeFlag == "delivery-service") {
114:       if (cartItem.isNotEmpty) {
115:         showAlertDialog(Get.context!, UserModel(), sectionModel);
116:       } else {
117:         if (sectionModel.serviceTypeFlag == "ecommerce-service") {
118:           Get.to(DashBoardEcommerceScreen());
119:         } else if (sectionModel.serviceTypeFlag == "cab-service") {
120:           Get.to(CabDashboardScreen());
121:         } else if (sectionModel.serviceTypeFlag == "rental-service") {
122:           Get.to(RentalDashboardScreen());
123:         } else if (sectionModel.serviceTypeFlag == "parcel_delivery") {
124:           Get.to(ParcelDashboardScreen());
125:         } else if (sectionModel.serviceTypeFlag == "ondemand-service") {
126:           Get.to(OnDemandDashboardScreen());
127:         } else {
128:           Get.to(() => DashBoardScreen());
129:         }
130:       }
131:     } else {
132:       if (sectionModel.serviceTypeFlag == "ecommerce-service") {
133:         Get.to(DashBoardEcommerceScreen());
134:       } else if (sectionModel.serviceTypeFlag == "cab-service") {
135:         Get.to(CabDashboardScreen());

115:         showAlertDialog(Get.context!, UserModel(), sectionModel);
116:       } else {
117:         if (sectionModel.serviceTypeFlag == "ecommerce-service") {
118:           Get.to(DashBoardEcommerceScreen());
119:         } else if (sectionModel.serviceTypeFlag == "cab-service") {
120:           Get.to(CabDashboardScreen());
121:         } else if (sectionModel.serviceTypeFlag == "rental-service") {
122:           Get.to(RentalDashboardScreen());
123:         } else if (sectionModel.serviceTypeFlag == "parcel_delivery") {
124:           Get.to(ParcelDashboardScreen());
125:         } else if (sectionModel.serviceTypeFlag == "ondemand-service") {
126:           Get.to(OnDemandDashboardScreen());
127:         } else {
128:           Get.to(() => DashBoardScreen());
129:         }
130:       }
131:     } else {
132:       if (sectionModel.serviceTypeFlag == "ecommerce-service") {
133:         Get.to(DashBoardEcommerceScreen());
134:       } else if (sectionModel.serviceTypeFlag == "cab-service") {
135:         Get.to(CabDashboardScreen());
136:       } else if (sectionModel.serviceTypeFlag == "rental-service") {
137:         Get.to(RentalDashboardScreen());

117:         if (sectionModel.serviceTypeFlag == "ecommerce-service") {
118:           Get.to(DashBoardEcommerceScreen());
119:         } else if (sectionModel.serviceTypeFlag == "cab-service") {
120:           Get.to(CabDashboardScreen());
121:         } else if (sectionModel.serviceTypeFlag == "rental-service") {
122:           Get.to(RentalDashboardScreen());
123:         } else if (sectionModel.serviceTypeFlag == "parcel_delivery") {
124:           Get.to(ParcelDashboardScreen());
125:         } else if (sectionModel.serviceTypeFlag == "ondemand-service") {
126:           Get.to(OnDemandDashboardScreen());
127:         } else {
128:           Get.to(() => DashBoardScreen());
129:         }
130:       }
131:     } else {
132:       if (sectionModel.serviceTypeFlag == "ecommerce-service") {
133:         Get.to(DashBoardEcommerceScreen());
134:       } else if (sectionModel.serviceTypeFlag == "cab-service") {
135:         Get.to(CabDashboardScreen());
136:       } else if (sectionModel.serviceTypeFlag == "rental-service") {
137:         Get.to(RentalDashboardScreen());
138:       } else if (sectionModel.serviceTypeFlag == "parcel_delivery") {
139:         Get.to(ParcelDashboardScreen());

```

### FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\splash_controller.dart
```dart
21:   void onInit() {
22:     Timer(const Duration(seconds: 3), () => redirectScreen());
23:     super.onInit();
24:   }
25: 
26:   Future<void> getLanguage() async {
27:     final jsonString = Preferences.getString(Preferences.languageCodeKey);
28:     if (jsonString != '' && jsonString.isNotEmpty) {
29:       final Map<String, dynamic> jsonData = jsonDecode(jsonString);
30:       final model = LanguageModel.fromJson(jsonData);
31:       LocalizationService().changeLocale(model.slug!);
32:     } else {
33:       LocalizationService().changeLocale('en');
34:     }
35:   }
36: 
37:   Future<void> redirectScreen() async {
38:     getLanguage();
39:     if (await FireStoreUtils.isMaintenanceMode() == true) {
40:       Get.offAll(() => MaintenanceModeScreen());
41:       return;
42:     } else {
43:       if (Preferences.getBoolean(Preferences.isFinishOnBoardingKey) == false) {

```

### FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\wallet_controller.dart
```dart
65:   Rx<PayStackModel> payStackModel = PayStackModel().obs;
66:   Rx<RazorPayModel> razorPayModel = RazorPayModel().obs;
67:   Rx<MidTrans> midTransModel = MidTrans().obs;
68:   Rx<OrangeMoney> orangeMoneyModel = OrangeMoney().obs;
69:   Rx<Xendit> xenditModel = Xendit().obs;
70: 
71:   Future<void> getPaymentSettings() async {
72:     await FireStoreUtils.getPaymentSettingsData().then((value) {
73:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
74:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
75:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
76:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
77:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
78:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
79:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
80: 
81:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
82:       orangeMoneyModel.value = OrangeMoney.fromJson(json.decode(Preferences.getString(Preferences.orangeMoneySettings)));
83:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
84: 
85:       Stripe.publishableKey = stripeModel.value.clientpublishableKey.toString();
86:       Stripe.merchantIdentifier = 'GoRide';
87:       Stripe.instance.applySettings();

66:   Rx<RazorPayModel> razorPayModel = RazorPayModel().obs;
67:   Rx<MidTrans> midTransModel = MidTrans().obs;
68:   Rx<OrangeMoney> orangeMoneyModel = OrangeMoney().obs;
69:   Rx<Xendit> xenditModel = Xendit().obs;
70: 
71:   Future<void> getPaymentSettings() async {
72:     await FireStoreUtils.getPaymentSettingsData().then((value) {
73:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
74:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
75:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
76:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
77:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
78:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
79:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
80: 
81:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
82:       orangeMoneyModel.value = OrangeMoney.fromJson(json.decode(Preferences.getString(Preferences.orangeMoneySettings)));
83:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
84: 
85:       Stripe.publishableKey = stripeModel.value.clientpublishableKey.toString();
86:       Stripe.merchantIdentifier = 'GoRide';
87:       Stripe.instance.applySettings();
88:       setRef();

67:   Rx<MidTrans> midTransModel = MidTrans().obs;
68:   Rx<OrangeMoney> orangeMoneyModel = OrangeMoney().obs;
69:   Rx<Xendit> xenditModel = Xendit().obs;
70: 
71:   Future<void> getPaymentSettings() async {
72:     await FireStoreUtils.getPaymentSettingsData().then((value) {
73:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
74:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
75:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
76:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
77:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
78:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
79:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
80: 
81:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
82:       orangeMoneyModel.value = OrangeMoney.fromJson(json.decode(Preferences.getString(Preferences.orangeMoneySettings)));
83:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
84: 
85:       Stripe.publishableKey = stripeModel.value.clientpublishableKey.toString();
86:       Stripe.merchantIdentifier = 'GoRide';
87:       Stripe.instance.applySettings();
88:       setRef();
89: 

68:   Rx<OrangeMoney> orangeMoneyModel = OrangeMoney().obs;
69:   Rx<Xendit> xenditModel = Xendit().obs;
70: 
71:   Future<void> getPaymentSettings() async {
72:     await FireStoreUtils.getPaymentSettingsData().then((value) {
73:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
74:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
75:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
76:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
77:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
78:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
79:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
80: 
81:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
82:       orangeMoneyModel.value = OrangeMoney.fromJson(json.decode(Preferences.getString(Preferences.orangeMoneySettings)));
83:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
84: 
85:       Stripe.publishableKey = stripeModel.value.clientpublishableKey.toString();
86:       Stripe.merchantIdentifier = 'GoRide';
87:       Stripe.instance.applySettings();
88:       setRef();
89: 
90:       razorPay.on(Razorpay.EVENT_PAYMENT_SUCCESS, handlePaymentSuccess);

69:   Rx<Xendit> xenditModel = Xendit().obs;
70: 
71:   Future<void> getPaymentSettings() async {
72:     await FireStoreUtils.getPaymentSettingsData().then((value) {
73:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
74:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
75:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
76:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
77:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
78:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
79:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
80: 
81:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
82:       orangeMoneyModel.value = OrangeMoney.fromJson(json.decode(Preferences.getString(Preferences.orangeMoneySettings)));
83:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
84: 
85:       Stripe.publishableKey = stripeModel.value.clientpublishableKey.toString();
86:       Stripe.merchantIdentifier = 'GoRide';
87:       Stripe.instance.applySettings();
88:       setRef();
89: 
90:       razorPay.on(Razorpay.EVENT_PAYMENT_SUCCESS, handlePaymentSuccess);
91:       razorPay.on(Razorpay.EVENT_EXTERNAL_WALLET, handleExternalWaller);

70: 
71:   Future<void> getPaymentSettings() async {
72:     await FireStoreUtils.getPaymentSettingsData().then((value) {
73:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
74:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
75:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
76:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
77:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
78:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
79:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
80: 
81:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
82:       orangeMoneyModel.value = OrangeMoney.fromJson(json.decode(Preferences.getString(Preferences.orangeMoneySettings)));
83:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
84: 
85:       Stripe.publishableKey = stripeModel.value.clientpublishableKey.toString();
86:       Stripe.merchantIdentifier = 'GoRide';
87:       Stripe.instance.applySettings();
88:       setRef();
89: 
90:       razorPay.on(Razorpay.EVENT_PAYMENT_SUCCESS, handlePaymentSuccess);
91:       razorPay.on(Razorpay.EVENT_EXTERNAL_WALLET, handleExternalWaller);
92:       razorPay.on(Razorpay.EVENT_PAYMENT_ERROR, handlePaymentError);

71:   Future<void> getPaymentSettings() async {
72:     await FireStoreUtils.getPaymentSettingsData().then((value) {
73:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
74:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
75:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
76:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
77:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
78:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
79:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
80: 
81:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
82:       orangeMoneyModel.value = OrangeMoney.fromJson(json.decode(Preferences.getString(Preferences.orangeMoneySettings)));
83:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
84: 
85:       Stripe.publishableKey = stripeModel.value.clientpublishableKey.toString();
86:       Stripe.merchantIdentifier = 'GoRide';
87:       Stripe.instance.applySettings();
88:       setRef();
89: 
90:       razorPay.on(Razorpay.EVENT_PAYMENT_SUCCESS, handlePaymentSuccess);
91:       razorPay.on(Razorpay.EVENT_EXTERNAL_WALLET, handleExternalWaller);
92:       razorPay.on(Razorpay.EVENT_PAYMENT_ERROR, handlePaymentError);
93:     });

73:       payFastModel.value = PayFastModel.fromJson(jsonDecode(Preferences.getString(Preferences.payFastSettings)));
74:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
75:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
76:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
77:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
78:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
79:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
80: 
81:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
82:       orangeMoneyModel.value = OrangeMoney.fromJson(json.decode(Preferences.getString(Preferences.orangeMoneySettings)));
83:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
84: 
85:       Stripe.publishableKey = stripeModel.value.clientpublishableKey.toString();
86:       Stripe.merchantIdentifier = 'GoRide';
87:       Stripe.instance.applySettings();
88:       setRef();
89: 
90:       razorPay.on(Razorpay.EVENT_PAYMENT_SUCCESS, handlePaymentSuccess);
91:       razorPay.on(Razorpay.EVENT_EXTERNAL_WALLET, handleExternalWaller);
92:       razorPay.on(Razorpay.EVENT_PAYMENT_ERROR, handlePaymentError);
93:     });
94:   }
95: 

74:       mercadoPagoModel.value = MercadoPagoModel.fromJson(jsonDecode(Preferences.getString(Preferences.mercadoPago)));
75:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
76:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
77:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
78:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
79:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
80: 
81:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
82:       orangeMoneyModel.value = OrangeMoney.fromJson(json.decode(Preferences.getString(Preferences.orangeMoneySettings)));
83:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
84: 
85:       Stripe.publishableKey = stripeModel.value.clientpublishableKey.toString();
86:       Stripe.merchantIdentifier = 'GoRide';
87:       Stripe.instance.applySettings();
88:       setRef();
89: 
90:       razorPay.on(Razorpay.EVENT_PAYMENT_SUCCESS, handlePaymentSuccess);
91:       razorPay.on(Razorpay.EVENT_EXTERNAL_WALLET, handleExternalWaller);
92:       razorPay.on(Razorpay.EVENT_PAYMENT_ERROR, handlePaymentError);
93:     });
94:   }
95: 
96:   Future<void> getWalletTransaction() async {

75:       payPalModel.value = PayPalModel.fromJson(jsonDecode(Preferences.getString(Preferences.paypalSettings)));
76:       stripeModel.value = StripeModel.fromJson(jsonDecode(Preferences.getString(Preferences.stripeSettings)));
77:       flutterWaveModel.value = FlutterWaveModel.fromJson(jsonDecode(Preferences.getString(Preferences.flutterWave)));
78:       payStackModel.value = PayStackModel.fromJson(jsonDecode(Preferences.getString(Preferences.payStack)));
79:       razorPayModel.value = RazorPayModel.fromJson(jsonDecode(Preferences.getString(Preferences.razorpaySettings)));
80: 
81:       midTransModel.value = MidTrans.fromJson(jsonDecode(Preferences.getString(Preferences.midTransSettings)));
82:       orangeMoneyModel.value = OrangeMoney.fromJson(json.decode(Preferences.getString(Preferences.orangeMoneySettings)));
83:       xenditModel.value = Xendit.fromJson(jsonDecode(Preferences.getString(Preferences.xenditSettings)));
84: 
85:       Stripe.publishableKey = stripeModel.value.clientpublishableKey.toString();
86:       Stripe.merchantIdentifier = 'GoRide';
87:       Stripe.instance.applySettings();
88:       setRef();
89: 
90:       razorPay.on(Razorpay.EVENT_PAYMENT_SUCCESS, handlePaymentSuccess);
91:       razorPay.on(Razorpay.EVENT_EXTERNAL_WALLET, handleExternalWaller);
92:       razorPay.on(Razorpay.EVENT_PAYMENT_ERROR, handlePaymentError);
93:     });
94:   }
95: 
96:   Future<void> getWalletTransaction() async {
97:     if (Constant.userModel != null) {

166:   Future<void> displayStripePaymentSheet({required String amount}) async {
167:     try {
168:       await Stripe.instance.presentPaymentSheet().then((value) {
169:         ShowToastDialog.showToast("Payment successfully".tr);
170:         walletTopUp();
171:       });
172:     } on StripeException catch (e) {
173:       var lo1 = jsonEncode(e);
174:       var lo2 = jsonDecode(lo1);
175:       StripePayFailedModel lom = StripePayFailedModel.fromJson(lo2);
176:       ShowToastDialog.showToast(lom.error.message);
177:     } catch (e) {
178:       ShowToastDialog.showToast(e.toString());
179:     }
180:   }
181: 
182:   Future createStripeIntent({required String amount}) async {
183:     try {
184:       Map<String, dynamic> body = {
185:         'amount': ((double.parse(amount) * 100).round()).toString(),
186:         'currency': "USD",
187:         'payment_method_types[]': 'card',
188:         "description": "Strip Payment",

189:         "shipping[name]": userModel.value.fullName(),
190:         "shipping[address][line1]": "510 Townsend St",
191:         "shipping[address][postal_code]": "98140",
192:         "shipping[address][city]": "San Francisco",
193:         "shipping[address][state]": "CA",
194:         "shipping[address][country]": "US",
195:       };
196:       var stripeSecret = stripeModel.value.stripeSecret;
197:       var response = await http.post(
198:         Uri.parse('https://api.stripe.com/v1/payment_intents'),
199:         body: body,
200:         headers: {'Authorization': 'Bearer $stripeSecret', 'Content-Type': 'application/x-www-form-urlencoded'},
201:       );
202: 
203:       return jsonDecode(response.body);
204:     } catch (e) {
205:       log(e.toString());
206:     }
207:   }
208: 
209:   //mercadoo
210:   Future<Null> mercadoPagoMakePayment({required BuildContext context, required String amount}) async {
211:     ShowToastDialog.showLoader("Please wait".tr);

190:         "shipping[address][line1]": "510 Townsend St",
191:         "shipping[address][postal_code]": "98140",
192:         "shipping[address][city]": "San Francisco",
193:         "shipping[address][state]": "CA",
194:         "shipping[address][country]": "US",
195:       };
196:       var stripeSecret = stripeModel.value.stripeSecret;
197:       var response = await http.post(
198:         Uri.parse('https://api.stripe.com/v1/payment_intents'),
199:         body: body,
200:         headers: {'Authorization': 'Bearer $stripeSecret', 'Content-Type': 'application/x-www-form-urlencoded'},
201:       );
202: 
203:       return jsonDecode(response.body);
204:     } catch (e) {
205:       log(e.toString());
206:     }
207:   }
208: 
209:   //mercadoo
210:   Future<Null> mercadoPagoMakePayment({required BuildContext context, required String amount}) async {
211:     ShowToastDialog.showLoader("Please wait".tr);
212:     final headers = {'Authorization': 'Bearer ${mercadoPagoModel.value.accessToken}', 'Content-Type': 'application/json'};

195:       };
196:       var stripeSecret = stripeModel.value.stripeSecret;
197:       var response = await http.post(
198:         Uri.parse('https://api.stripe.com/v1/payment_intents'),
199:         body: body,
200:         headers: {'Authorization': 'Bearer $stripeSecret', 'Content-Type': 'application/x-www-form-urlencoded'},
201:       );
202: 
203:       return jsonDecode(response.body);
204:     } catch (e) {
205:       log(e.toString());
206:     }
207:   }
208: 
209:   //mercadoo
210:   Future<Null> mercadoPagoMakePayment({required BuildContext context, required String amount}) async {
211:     ShowToastDialog.showLoader("Please wait".tr);
212:     final headers = {'Authorization': 'Bearer ${mercadoPagoModel.value.accessToken}', 'Content-Type': 'application/json'};
213: 
214:     final body = jsonEncode({
215:       "items": [
216:         {
217:           "title": "Test",

221:           "unit_price": double.parse(amount),
222:         },
223:       ],
224:       "payer": {"email": userModel.value.email},
225:       "back_urls": {"failure": "${Constant.globalUrl}payment/failure", "pending": "${Constant.globalUrl}payment/pending", "success": "${Constant.globalUrl}payment/success"},
226:       "auto_return": "approved", // Automatically return after payment is approved
227:     });
228: 
229:     final response = await http.post(Uri.parse("https://api.mercadopago.com/checkout/preferences"), headers: headers, body: body);
230: 
231:     if (response.statusCode == 200 || response.statusCode == 201) {
232:       final data = jsonDecode(response.body);
233:       ShowToastDialog.closeLoader();
234:       Get.to(MercadoPagoScreen(initialURl: data['init_point']))!.then((value) {
235:         if (value) {
236:           ShowToastDialog.showToast("Payment Successful!!".tr);
237:           walletTopUp();
238:         } else {
239:           ShowToastDialog.showToast("Payment UnSuccessful!!".tr);
240:         }
241:       });
242:     } else {
243:       ShowToastDialog.closeLoader();

223:       ],
224:       "payer": {"email": userModel.value.email},
225:       "back_urls": {"failure": "${Constant.globalUrl}payment/failure", "pending": "${Constant.globalUrl}payment/pending", "success": "${Constant.globalUrl}payment/success"},
226:       "auto_return": "approved", // Automatically return after payment is approved
227:     });
228: 
229:     final response = await http.post(Uri.parse("https://api.mercadopago.com/checkout/preferences"), headers: headers, body: body);
230: 
231:     if (response.statusCode == 200 || response.statusCode == 201) {
232:       final data = jsonDecode(response.body);
233:       ShowToastDialog.closeLoader();
234:       Get.to(MercadoPagoScreen(initialURl: data['init_point']))!.then((value) {
235:         if (value) {
236:           ShowToastDialog.showToast("Payment Successful!!".tr);
237:           walletTopUp();
238:         } else {
239:           ShowToastDialog.showToast("Payment UnSuccessful!!".tr);
240:         }
241:       });
242:     } else {
243:       ShowToastDialog.closeLoader();
244:       ShowToastDialog.showToast("Something want wrong please contact administrator".tr);
245:       print('Error creating preference: ${response.body}');

224:       "payer": {"email": userModel.value.email},
225:       "back_urls": {"failure": "${Constant.globalUrl}payment/failure", "pending": "${Constant.globalUrl}payment/pending", "success": "${Constant.globalUrl}payment/success"},
226:       "auto_return": "approved", // Automatically return after payment is approved
227:     });
228: 
229:     final response = await http.post(Uri.parse("https://api.mercadopago.com/checkout/preferences"), headers: headers, body: body);
230: 
231:     if (response.statusCode == 200 || response.statusCode == 201) {
232:       final data = jsonDecode(response.body);
233:       ShowToastDialog.closeLoader();
234:       Get.to(MercadoPagoScreen(initialURl: data['init_point']))!.then((value) {
235:         if (value) {
236:           ShowToastDialog.showToast("Payment Successful!!".tr);
237:           walletTopUp();
238:         } else {
239:           ShowToastDialog.showToast("Payment UnSuccessful!!".tr);
240:         }
241:       });
242:     } else {
243:       ShowToastDialog.closeLoader();
244:       ShowToastDialog.showToast("Something want wrong please contact administrator".tr);
245:       print('Error creating preference: ${response.body}');
246:       return null;

237:           walletTopUp();
238:         } else {
239:           ShowToastDialog.showToast("Payment UnSuccessful!!".tr);
240:         }
241:       });
242:     } else {
243:       ShowToastDialog.closeLoader();
244:       ShowToastDialog.showToast("Something want wrong please contact administrator".tr);
245:       print('Error creating preference: ${response.body}');
246:       return null;
247:     }
248:   }
249: 
250:   void paypalPaymentSheet(String amount, context) {
251:     Navigator.of(context).push(
252:       MaterialPageRoute(
253:         builder:
254:             (BuildContext context) => UsePaypal(
255:               sandboxMode: payPalModel.value.isLive == true ? false : true,
256:               clientId: payPalModel.value.paypalClient ?? '',
257:               secretKey: payPalModel.value.paypalSecret ?? '',
258:               returnURL: "com.parkme://paypalpay",
259:               cancelURL: "com.parkme://paypalpay",

317:         ShowToastDialog.showToast("Something went wrong, please contact admin.".tr);
318:       }
319:     });
320:   }
321: 
322:   //flutter wave Payment Method
323:   Future<Null> flutterWaveInitiatePayment({required BuildContext context, required String amount}) async {
324:     ShowToastDialog.showLoader("Please wait".tr);
325:     final url = Uri.parse('https://api.flutterwave.com/v3/payments');
326:     final headers = {'Authorization': 'Bearer ${flutterWaveModel.value.secretKey}', 'Content-Type': 'application/json'};
327: 
328:     final body = jsonEncode({
329:       "tx_ref": _ref,
330:       "amount": amount,
331:       "currency": "NGN",
332:       "redirect_url": "${Constant.globalUrl}payment/success",
333:       "payment_options": "ussd, card, barter, payattitude",
334:       "customer": {
335:         "email": userModel.value.email.toString(),
336:         "phonenumber": userModel.value.phoneNumber, // Add a real phone number
337:         "name": userModel.value.fullName(), // Add a real customer name
338:       },
339:       "customizations": {"title": "Payment for Services", "description": "Payment for XYZ services"},

334:       "customer": {
335:         "email": userModel.value.email.toString(),
336:         "phonenumber": userModel.value.phoneNumber, // Add a real phone number
337:         "name": userModel.value.fullName(), // Add a real customer name
338:       },
339:       "customizations": {"title": "Payment for Services", "description": "Payment for XYZ services"},
340:     });
341: 
342:     final response = await http.post(url, headers: headers, body: body);
343: 
344:     if (response.statusCode == 200) {
345:       final data = jsonDecode(response.body);
346:       ShowToastDialog.closeLoader();
347:       Get.to(MercadoPagoScreen(initialURl: data['data']['link']))!.then((value) {
348:         if (value) {
349:           ShowToastDialog.showToast("Payment Successful!!".tr);
350:           walletTopUp();
351:         } else {
352:           ShowToastDialog.showToast("Payment UnSuccessful!!".tr);
353:         }
354:       });
355:     } else {
356:       ShowToastDialog.closeLoader();

```

### FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\models\payment_model\xendit.dart
```dart
1: class Xendit {
2:   bool? enable;
3:   String? name;
4:   bool? isSandbox;
5:   String? apiKey;
6:   String? image;
7: 
8:   Xendit({
9:     this.name,
10:     this.enable,
11:     this.apiKey,
12:     this.isSandbox,
13:     this.image,
14:   });
15: 
16:   Xendit.fromJson(Map<String, dynamic> json) {
17:     enable = json['enable'];
18:     name = json['name'];
19:     isSandbox = json['isSandbox'];

3:   String? name;
4:   bool? isSandbox;
5:   String? apiKey;
6:   String? image;
7: 
8:   Xendit({
9:     this.name,
10:     this.enable,
11:     this.apiKey,
12:     this.isSandbox,
13:     this.image,
14:   });
15: 
16:   Xendit.fromJson(Map<String, dynamic> json) {
17:     enable = json['enable'];
18:     name = json['name'];
19:     isSandbox = json['isSandbox'];
20:     apiKey = json['apiKey'];
21:     image = json['image'];
22:   }
23: 
24:   Map<String, dynamic> toJson() {
25:     final Map<String, dynamic> data = <String, dynamic>{};

12:     this.isSandbox,
13:     this.image,
14:   });
15: 
16:   Xendit.fromJson(Map<String, dynamic> json) {
17:     enable = json['enable'];
18:     name = json['name'];
19:     isSandbox = json['isSandbox'];
20:     apiKey = json['apiKey'];
21:     image = json['image'];
22:   }
23: 
24:   Map<String, dynamic> toJson() {
25:     final Map<String, dynamic> data = <String, dynamic>{};
26: 
27:     data['enable'] = enable;
28:     data['name'] = name;
29:     data['isSandbox'] = isSandbox;
30:     data['apiKey'] = apiKey;
31:     data['image'] = image;
32:     return data;
33:   }
34: }

22:   }
23: 
24:   Map<String, dynamic> toJson() {
25:     final Map<String, dynamic> data = <String, dynamic>{};
26: 
27:     data['enable'] = enable;
28:     data['name'] = name;
29:     data['isSandbox'] = isSandbox;
30:     data['apiKey'] = apiKey;
31:     data['image'] = image;
32:     return data;
33:   }
34: }

```

### FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\models\cart_product_model.dart
```dart
28:     vendorID = json['vendorID'];
29:     quantity = json['quantity'];
30:     extrasPrice = json['extras_price'];
31: 
32:     extras =
33:         json['extras'] == "null" || json['extras'] == null
34:             ? null
35:             : "String" == json['extras'].runtimeType.toString()
36:             ? List<dynamic>.from(jsonDecode(json['extras']))
37:             : List<dynamic>.from(json['extras']);
38: 
39:     variantInfo =
40:         json['variant_info'] == "null" || json['variant_info'] == null
41:             ? null
42:             : "String" == json['variant_info'].runtimeType.toString()
43:             ? VariantInfo.fromJson(jsonDecode(json['variant_info']))
44:             : VariantInfo.fromJson(json['variant_info']);
45: 
46:     taxSetting =
47:         json['taxSetting'] == null
48:             ? []
49:             : json['taxSetting'] is String
50:             ? (jsonDecode(json['taxSetting']) as List).map((e) => TaxModel.fromJson(e)).toList()

35:             : "String" == json['extras'].runtimeType.toString()
36:             ? List<dynamic>.from(jsonDecode(json['extras']))
37:             : List<dynamic>.from(json['extras']);
38: 
39:     variantInfo =
40:         json['variant_info'] == "null" || json['variant_info'] == null
41:             ? null
42:             : "String" == json['variant_info'].runtimeType.toString()
43:             ? VariantInfo.fromJson(jsonDecode(json['variant_info']))
44:             : VariantInfo.fromJson(json['variant_info']);
45: 
46:     taxSetting =
47:         json['taxSetting'] == null
48:             ? []
49:             : json['taxSetting'] is String
50:             ? (jsonDecode(json['taxSetting']) as List).map((e) => TaxModel.fromJson(e)).toList()
51:             : json['taxSetting'] is List
52:             ? (json['taxSetting'] as List).map((e) => TaxModel.fromJson(e)).toList()
53:             : [];
54:   }
55: 
56:   Map<String, dynamic> toJson() {
57:     final Map<String, dynamic> data = <String, dynamic>{};

42:             : "String" == json['variant_info'].runtimeType.toString()
43:             ? VariantInfo.fromJson(jsonDecode(json['variant_info']))
44:             : VariantInfo.fromJson(json['variant_info']);
45: 
46:     taxSetting =
47:         json['taxSetting'] == null
48:             ? []
49:             : json['taxSetting'] is String
50:             ? (jsonDecode(json['taxSetting']) as List).map((e) => TaxModel.fromJson(e)).toList()
51:             : json['taxSetting'] is List
52:             ? (json['taxSetting'] as List).map((e) => TaxModel.fromJson(e)).toList()
53:             : [];
54:   }
55: 
56:   Map<String, dynamic> toJson() {
57:     final Map<String, dynamic> data = <String, dynamic>{};
58:     data['id'] = id;
59:     data['category_id'] = categoryId;
60:     data['name'] = name;
61:     data['photo'] = photo;
62:     data['price'] = price;
63:     data['discountPrice'] = discountPrice;
64:     data['vendorID'] = vendorID;

```

### FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\models\section_model.dart
```dart
1: import 'package:customer/models/admin_commission_model.dart';
2: import 'package:customer/models/platform_fee_model.dart';
3: 
4: class SectionModel {
5:   String? referralAmount;
6:   String? serviceType;
7:   String? color;
8:   String? name;
9:   String? sectionImage;
10:   String? markerIcon;
11:   String? id;
12:   bool? isActive;
13:   bool? dineInActive;
14:   bool? isProductDetails;
15:   String? serviceTypeFlag;
16:   String? deliveryCharge;
17:   String? rideType;
18:   String? theme;

1: import 'package:customer/models/admin_commission_model.dart';
2: import 'package:customer/models/platform_fee_model.dart';
3: 
4: class SectionModel {
5:   String? referralAmount;
6:   String? serviceType;
7:   String? color;
8:   String? name;
9:   String? sectionImage;
10:   String? markerIcon;
11:   String? id;
12:   bool? isActive;
13:   bool? dineInActive;
14:   bool? isProductDetails;
15:   String? serviceTypeFlag;
16:   String? deliveryCharge;
17:   String? rideType;
18:   String? theme;
19:   int? nearByRadius;
20:   AdminCommission? adminCommision;

7:   String? color;
8:   String? name;
9:   String? sectionImage;
10:   String? markerIcon;
11:   String? id;
12:   bool? isActive;
13:   bool? dineInActive;
14:   bool? isProductDetails;
15:   String? serviceTypeFlag;
16:   String? deliveryCharge;
17:   String? rideType;
18:   String? theme;
19:   int? nearByRadius;
20:   AdminCommission? adminCommision;
21:   PlatformFeeModel? platformFee;
22:   bool? packagingChargeEnable;
23: 
24:   SectionModel({
25:     this.referralAmount,
26:     this.serviceType,
27:     this.color,
28:     this.name,
29:     this.sectionImage,

16:   String? deliveryCharge;
17:   String? rideType;
18:   String? theme;
19:   int? nearByRadius;
20:   AdminCommission? adminCommision;
21:   PlatformFeeModel? platformFee;
22:   bool? packagingChargeEnable;
23: 
24:   SectionModel({
25:     this.referralAmount,
26:     this.serviceType,
27:     this.color,
28:     this.name,
29:     this.sectionImage,
30:     this.markerIcon,
31:     this.id,
32:     this.isActive,
33:     this.theme,
34:     this.adminCommision,
35:     this.dineInActive,
36:     this.deliveryCharge,
37:     this.nearByRadius,
38:     this.isProductDetails,

18:   String? theme;
19:   int? nearByRadius;
20:   AdminCommission? adminCommision;
21:   PlatformFeeModel? platformFee;
22:   bool? packagingChargeEnable;
23: 
24:   SectionModel({
25:     this.referralAmount,
26:     this.serviceType,
27:     this.color,
28:     this.name,
29:     this.sectionImage,
30:     this.markerIcon,
31:     this.id,
32:     this.isActive,
33:     this.theme,
34:     this.adminCommision,
35:     this.dineInActive,
36:     this.deliveryCharge,
37:     this.nearByRadius,
38:     this.isProductDetails,
39:     this.serviceTypeFlag,
40:     this.rideType,

31:     this.id,
32:     this.isActive,
33:     this.theme,
34:     this.adminCommision,
35:     this.dineInActive,
36:     this.deliveryCharge,
37:     this.nearByRadius,
38:     this.isProductDetails,
39:     this.serviceTypeFlag,
40:     this.rideType,
41:     this.platformFee,
42:     this.packagingChargeEnable,
43:   });
44: 
45:   SectionModel.fromJson(Map<String, dynamic> json) {
46:     referralAmount = json['referralAmount'] ?? '';
47:     serviceType = json['serviceType'] ?? '';
48:     color = json['color'];
49:     name = json['name'];
50:     sectionImage = json['sectionImage'];
51:     markerIcon = json['markerIcon'];
52:     id = json['id'];
53:     adminCommision = json.containsKey('adminCommision') ? AdminCommission.fromJson(json['adminCommision']) : null;

37:     this.nearByRadius,
38:     this.isProductDetails,
39:     this.serviceTypeFlag,
40:     this.rideType,
41:     this.platformFee,
42:     this.packagingChargeEnable,
43:   });
44: 
45:   SectionModel.fromJson(Map<String, dynamic> json) {
46:     referralAmount = json['referralAmount'] ?? '';
47:     serviceType = json['serviceType'] ?? '';
48:     color = json['color'];
49:     name = json['name'];
50:     sectionImage = json['sectionImage'];
51:     markerIcon = json['markerIcon'];
52:     id = json['id'];
53:     adminCommision = json.containsKey('adminCommision') ? AdminCommission.fromJson(json['adminCommision']) : null;
54:     isActive = json['isActive'];
55:     theme = json['theme'] ?? "theme_2";
56:     dineInActive = json['dine_in_active'] ?? false;
57:     isProductDetails = json['is_product_details'] ?? false;
58:     serviceTypeFlag = json['serviceTypeFlag'] ?? '';
59:     deliveryCharge = json['delivery_charge'] ?? '';

39:     this.serviceTypeFlag,
40:     this.rideType,
41:     this.platformFee,
42:     this.packagingChargeEnable,
43:   });
44: 
45:   SectionModel.fromJson(Map<String, dynamic> json) {
46:     referralAmount = json['referralAmount'] ?? '';
47:     serviceType = json['serviceType'] ?? '';
48:     color = json['color'];
49:     name = json['name'];
50:     sectionImage = json['sectionImage'];
51:     markerIcon = json['markerIcon'];
52:     id = json['id'];
53:     adminCommision = json.containsKey('adminCommision') ? AdminCommission.fromJson(json['adminCommision']) : null;
54:     isActive = json['isActive'];
55:     theme = json['theme'] ?? "theme_2";
56:     dineInActive = json['dine_in_active'] ?? false;
57:     isProductDetails = json['is_product_details'] ?? false;
58:     serviceTypeFlag = json['serviceTypeFlag'] ?? '';
59:     deliveryCharge = json['delivery_charge'] ?? '';
60:     rideType = json['rideType'] ?? 'ride';
61: 

50:     sectionImage = json['sectionImage'];
51:     markerIcon = json['markerIcon'];
52:     id = json['id'];
53:     adminCommision = json.containsKey('adminCommision') ? AdminCommission.fromJson(json['adminCommision']) : null;
54:     isActive = json['isActive'];
55:     theme = json['theme'] ?? "theme_2";
56:     dineInActive = json['dine_in_active'] ?? false;
57:     isProductDetails = json['is_product_details'] ?? false;
58:     serviceTypeFlag = json['serviceTypeFlag'] ?? '';
59:     deliveryCharge = json['delivery_charge'] ?? '';
60:     rideType = json['rideType'] ?? 'ride';
61: 
62:     // ðŸ‘‡ Safe parsing for number (handles NaN, double, int)
63:     final rawRadius = json['nearByRadius'];
64:     if (rawRadius == null || rawRadius is! num || rawRadius.isNaN) {
65:       nearByRadius = 5000;
66:     } else {
67:       nearByRadius = rawRadius.toInt();
68:     }
69:     platformFee = PlatformFeeModel.fromJson(json['platformFee']);
70:     packagingChargeEnable = json['packagingChargeEnable'] ?? false;
71:   }
72: 

68:     }
69:     platformFee = PlatformFeeModel.fromJson(json['platformFee']);
70:     packagingChargeEnable = json['packagingChargeEnable'] ?? false;
71:   }
72: 
73:   Map<String, dynamic> toJson() {
74:     final Map<String, dynamic> data = <String, dynamic>{};
75:     data['referralAmount'] = referralAmount;
76:     data['serviceType'] = serviceType;
77:     data['color'] = color;
78:     data['name'] = name;
79:     data['sectionImage'] = sectionImage;
80:     data['markerIcon'] = markerIcon;
81:     data['rideType'] = rideType;
82:     data['theme'] = theme;
83:     if (adminCommision != null) {
84:       data['adminCommision'] = adminCommision!.toJson();
85:     }
86:     data['id'] = id;
87:     data['isActive'] = isActive;
88:     data['dine_in_active'] = dineInActive;
89:     data['is_product_details'] = isProductDetails;
90:     data['serviceTypeFlag'] = serviceTypeFlag;

82:     data['theme'] = theme;
83:     if (adminCommision != null) {
84:       data['adminCommision'] = adminCommision!.toJson();
85:     }
86:     data['id'] = id;
87:     data['isActive'] = isActive;
88:     data['dine_in_active'] = dineInActive;
89:     data['is_product_details'] = isProductDetails;
90:     data['serviceTypeFlag'] = serviceTypeFlag;
91:     data['delivery_charge'] = deliveryCharge;
92:     data['nearByRadius'] = nearByRadius;
93: 
94:     if (platformFee?.enable == true) {
95:       data['platformFee'] = platformFee?.toJson();
96:     }
97:     data['packagingChargeEnable'] = packagingChargeEnable;
98: 
99:     return data;
100:   }
101: }

```

### FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\models\wallet_transaction_model.dart
```dart
6:   double? amount;
7:   bool? isTopup;
8:   String? orderId;
9:   String? paymentStatus;
10:   Timestamp? date;
11:   String? id;
12:   String? transactionUser;
13:   String? note;
14:   String? serviceType;
15: 
16:   WalletTransactionModel({
17:     this.userId,
18:     this.paymentMethod,
19:     this.amount,
20:     this.isTopup,
21:     this.orderId,
22:     this.paymentStatus,
23:     this.date,
24:     this.id,
25:     this.transactionUser,
26:     this.note,
27:     this.serviceType,
28:   });

19:     this.amount,
20:     this.isTopup,
21:     this.orderId,
22:     this.paymentStatus,
23:     this.date,
24:     this.id,
25:     this.transactionUser,
26:     this.note,
27:     this.serviceType,
28:   });
29: 
30:   WalletTransactionModel.fromJson(Map<String, dynamic> json) {
31:     id = json['id'];
32:     userId = json['user_id'];
33:     paymentMethod = json['payment_method'];
34:     amount = double.parse("${json['amount'] ?? 0.0}");
35:     isTopup = json['isTopUp'];
36:     orderId = json['order_id'];
37:     paymentStatus = json['payment_status'];
38:     date = json['date'];
39:     transactionUser = json['transactionUser'] ?? 'customer';
40:     note = json['note'] ?? 'Wallet Top-up';
41:     serviceType = json['serviceType'];

33:     paymentMethod = json['payment_method'];
34:     amount = double.parse("${json['amount'] ?? 0.0}");
35:     isTopup = json['isTopUp'];
36:     orderId = json['order_id'];
37:     paymentStatus = json['payment_status'];
38:     date = json['date'];
39:     transactionUser = json['transactionUser'] ?? 'customer';
40:     note = json['note'] ?? 'Wallet Top-up';
41:     serviceType = json['serviceType'];
42:   }
43: 
44:   Map<String, dynamic> toJson() {
45:     final Map<String, dynamic> data = <String, dynamic>{};
46:     data['id'] = id;
47:     data['user_id'] = userId;
48:     data['payment_method'] = paymentMethod;
49:     data['amount'] = amount;
50:     data['isTopUp'] = isTopup;
51:     data['order_id'] = orderId;
52:     data['payment_status'] = paymentStatus;
53:     data['date'] = date;
54:     data['transactionUser'] = transactionUser;
55:     data['note'] = note;

```

### FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\payment\paystack\paystack_url_genrater.dart
```dart
3: import 'package:customer/models/payment_model/pay_fast_model.dart';
4: import 'package:customer/models/user_model.dart';
5: import 'package:customer/payment/paystack/pay_stack_url_model.dart';
6: import 'package:flutter/foundation.dart';
7: import 'package:http/http.dart' as http;
8: 
9: class PayStackURLGen {
10:   static Future payStackURLGen({required String amount, required String secretKey, required String currency, required UserModel userModel}) async {
11:     const url = "https://api.paystack.co/transaction/initialize";
12:     final response = await http.post(Uri.parse(url), body: {
13:       "email": userModel.email,
14:       "amount": amount,
15:       "currency": currency,
16:     }, headers: {
17:       "Authorization": "Bearer $secretKey",
18:     });
19:     debugPrint(response.body);
20:     final data = jsonDecode(response.body);
21:     if (!data["status"]) {
22:       return null;
23:     }
24:     return PayStackUrlModel.fromJson(data);
25:   }

4: import 'package:customer/models/user_model.dart';
5: import 'package:customer/payment/paystack/pay_stack_url_model.dart';
6: import 'package:flutter/foundation.dart';
7: import 'package:http/http.dart' as http;
8: 
9: class PayStackURLGen {
10:   static Future payStackURLGen({required String amount, required String secretKey, required String currency, required UserModel userModel}) async {
11:     const url = "https://api.paystack.co/transaction/initialize";
12:     final response = await http.post(Uri.parse(url), body: {
13:       "email": userModel.email,
14:       "amount": amount,
15:       "currency": currency,
16:     }, headers: {
17:       "Authorization": "Bearer $secretKey",
18:     });
19:     debugPrint(response.body);
20:     final data = jsonDecode(response.body);
21:     if (!data["status"]) {
22:       return null;
23:     }
24:     return PayStackUrlModel.fromJson(data);
25:   }
26: 

11:     const url = "https://api.paystack.co/transaction/initialize";
12:     final response = await http.post(Uri.parse(url), body: {
13:       "email": userModel.email,
14:       "amount": amount,
15:       "currency": currency,
16:     }, headers: {
17:       "Authorization": "Bearer $secretKey",
18:     });
19:     debugPrint(response.body);
20:     final data = jsonDecode(response.body);
21:     if (!data["status"]) {
22:       return null;
23:     }
24:     return PayStackUrlModel.fromJson(data);
25:   }
26: 
27:   static Future<bool> verifyTransaction({
28:     required String reference,
29:     required String secretKey,
30:     required String amount,
31:   }) async {
32:     debugPrint("we Enter payment Settle");
33:     debugPrint(reference);

12:     final response = await http.post(Uri.parse(url), body: {
13:       "email": userModel.email,
14:       "amount": amount,
15:       "currency": currency,
16:     }, headers: {
17:       "Authorization": "Bearer $secretKey",
18:     });
19:     debugPrint(response.body);
20:     final data = jsonDecode(response.body);
21:     if (!data["status"]) {
22:       return null;
23:     }
24:     return PayStackUrlModel.fromJson(data);
25:   }
26: 
27:   static Future<bool> verifyTransaction({
28:     required String reference,
29:     required String secretKey,
30:     required String amount,
31:   }) async {
32:     debugPrint("we Enter payment Settle");
33:     debugPrint(reference);
34: 

27:   static Future<bool> verifyTransaction({
28:     required String reference,
29:     required String secretKey,
30:     required String amount,
31:   }) async {
32:     debugPrint("we Enter payment Settle");
33:     debugPrint(reference);
34: 
35:     final url = "https://api.paystack.co/transaction/verify/$reference";
36: 
37:     var response = await http.get(Uri.parse(url), headers: {
38:       "Authorization": "Bearer $secretKey",
39:     });
40: 
41:     debugPrint(response.body);
42:     final data = jsonDecode(response.body);
43:     if (data["status"] == true) {
44:       if (data["message"] == "Verification successful") {}
45:     }
46: 
47:     return data["status"];
48: 
49:     //PayPalClientSettleModel.fromJson(data);

29:     required String secretKey,
30:     required String amount,
31:   }) async {
32:     debugPrint("we Enter payment Settle");
33:     debugPrint(reference);
34: 
35:     final url = "https://api.paystack.co/transaction/verify/$reference";
36: 
37:     var response = await http.get(Uri.parse(url), headers: {
38:       "Authorization": "Bearer $secretKey",
39:     });
40: 
41:     debugPrint(response.body);
42:     final data = jsonDecode(response.body);
43:     if (data["status"] == true) {
44:       if (data["message"] == "Verification successful") {}
45:     }
46: 
47:     return data["status"];
48: 
49:     //PayPalClientSettleModel.fromJson(data);
50:   }
51: 

33:     debugPrint(reference);
34: 
35:     final url = "https://api.paystack.co/transaction/verify/$reference";
36: 
37:     var response = await http.get(Uri.parse(url), headers: {
38:       "Authorization": "Bearer $secretKey",
39:     });
40: 
41:     debugPrint(response.body);
42:     final data = jsonDecode(response.body);
43:     if (data["status"] == true) {
44:       if (data["message"] == "Verification successful") {}
45:     }
46: 
47:     return data["status"];
48: 
49:     //PayPalClientSettleModel.fromJson(data);
50:   }
51: 
52:   static Future<String> getPayHTML({required String amount, required PayFastModel payFastSettingData, required UserModel userModel}) async {
53:     String newUrl = 'https://${payFastSettingData.isSandbox == false ? "www" : "sandbox"}.payfast.co.za/eng/process';
54:     Map body = {
55:       'merchant_id': payFastSettingData.merchantId,

34: 
35:     final url = "https://api.paystack.co/transaction/verify/$reference";
36: 
37:     var response = await http.get(Uri.parse(url), headers: {
38:       "Authorization": "Bearer $secretKey",
39:     });
40: 
41:     debugPrint(response.body);
42:     final data = jsonDecode(response.body);
43:     if (data["status"] == true) {
44:       if (data["message"] == "Verification successful") {}
45:     }
46: 
47:     return data["status"];
48: 
49:     //PayPalClientSettleModel.fromJson(data);
50:   }
51: 
52:   static Future<String> getPayHTML({required String amount, required PayFastModel payFastSettingData, required UserModel userModel}) async {
53:     String newUrl = 'https://${payFastSettingData.isSandbox == false ? "www" : "sandbox"}.payfast.co.za/eng/process';
54:     Map body = {
55:       'merchant_id': payFastSettingData.merchantId,
56:       'merchant_key': payFastSettingData.merchantKey,

59:       'return_url': payFastSettingData.returnUrl,
60:       'cancel_url': payFastSettingData.cancelUrl,
61:       'notify_url': payFastSettingData.notifyUrl,
62:       'name_first': userModel.firstName,
63:       'name_last': userModel.lastName,
64:       'email_address': userModel.email,
65:     };
66: 
67:     final response = await http.post(
68:       Uri.parse(newUrl),
69:       body: body,
70:     );
71: 
72:     debugPrint(response.body);
73:     return response.body;
74:   }
75: }

64:       'email_address': userModel.email,
65:     };
66: 
67:     final response = await http.post(
68:       Uri.parse(newUrl),
69:       body: body,
70:     );
71: 
72:     debugPrint(response.body);
73:     return response.body;
74:   }
75: }

65:     };
66: 
67:     final response = await http.post(
68:       Uri.parse(newUrl),
69:       body: body,
70:     );
71: 
72:     debugPrint(response.body);
73:     return response.body;
74:   }
75: }

```

### FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\payment\paystack\pay_stack_url_model.dart
```dart
1: // To parse this JSON data, do
2: //
3: //     final payStackUrlModel = payStackUrlModelFromJson(jsonString);
4: 
5: import 'dart:convert';
6: 
7: PayStackUrlModel payStackUrlModelFromJson(String str) => PayStackUrlModel.fromJson(json.decode(str));
8: 
9: String payStackUrlModelToJson(PayStackUrlModel data) => json.encode(data.toJson());
10: 
11: class PayStackUrlModel {
12:   PayStackUrlModel({
13:     required this.status,
14:     required this.message,
15:     required this.data,
16:   });
17: 
18:   bool status;
19:   String message;
20:   Data data;
21: 

```

### FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\payment\createRazorPayOrderModel.dart
```dart
1: // To parse this JSON data, do
2: //
3: //     final createRazorPayOrderModel = createRazorPayOrderModelFromJson(jsonString);
4: 
5: import 'dart:convert';
6: 
7: CreateRazorPayOrderModel createRazorPayOrderModelFromJson(String str) => CreateRazorPayOrderModel.fromJson(json.decode(str));
8: 
9: String createRazorPayOrderModelToJson(CreateRazorPayOrderModel data) => json.encode(data.toJson());
10: 
11: class CreateRazorPayOrderModel {
12:   CreateRazorPayOrderModel({
13:     required this.id,
14:     required this.entity,
15:     required this.amount,
16:     required this.amountPaid,
17:     required this.amountDue,
18:     required this.currency,
19:     required this.receipt,
20:     required this.offerId,
21:     required this.status,

```

### FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\payment\getPaytmTxtToken.dart
```dart
1: // To parse this JSON data, do
2: //
3: //     final getPaymentTxtTokenModel = getPaymentTxtTokenModelFromJson(jsonString);
4: 
5: import 'dart:convert';
6: 
7: GetPaymentTxtTokenModel getPaymentTxtTokenModelFromJson(String str) => GetPaymentTxtTokenModel.fromJson(json.decode(str));
8: 
9: String getPaymentTxtTokenModelToJson(GetPaymentTxtTokenModel data) => json.encode(data.toJson());
10: 
11: class GetPaymentTxtTokenModel {
12:   GetPaymentTxtTokenModel({
13:     required this.head,
14:     required this.body,
15:   });
16: 
17:   Head head;
18:   Body body;
19: 
20:   factory GetPaymentTxtTokenModel.fromJson(Map<String, dynamic> json) =>
21:       GetPaymentTxtTokenModel(

78:     "resultStatus": resultStatus,
79:     "resultCode": resultCode,
80:     "resultMsg": resultMsg,
81:   };
82: }
83: 
84: class Head {
85:   Head({
86:     this.responseTimestamp,
87:     this.version,
88:     this.signature,
89:   });
90: 
91:   String? responseTimestamp;
92:   String? version;
93:   String? signature;
94: 
95:   factory Head.fromJson(Map<String, dynamic> json) => Head(
96:     responseTimestamp: json["responseTimestamp"],
97:     version: json["version"],
98:     signature: json["signature"],
99:   );
100: 

83: 
84: class Head {
85:   Head({
86:     this.responseTimestamp,
87:     this.version,
88:     this.signature,
89:   });
90: 
91:   String? responseTimestamp;
92:   String? version;
93:   String? signature;
94: 
95:   factory Head.fromJson(Map<String, dynamic> json) => Head(
96:     responseTimestamp: json["responseTimestamp"],
97:     version: json["version"],
98:     signature: json["signature"],
99:   );
100: 
101:   Map<String, dynamic> toJson() => {
102:     "responseTimestamp": responseTimestamp,
103:     "version": version,
104:     "signature": signature,
105:   };

88:     this.signature,
89:   });
90: 
91:   String? responseTimestamp;
92:   String? version;
93:   String? signature;
94: 
95:   factory Head.fromJson(Map<String, dynamic> json) => Head(
96:     responseTimestamp: json["responseTimestamp"],
97:     version: json["version"],
98:     signature: json["signature"],
99:   );
100: 
101:   Map<String, dynamic> toJson() => {
102:     "responseTimestamp": responseTimestamp,
103:     "version": version,
104:     "signature": signature,
105:   };
106: }
107: 
108: 
109: // class GetPaymentTxtTokenModel {
110: //   GetPaymentTxtTokenModel({

94: 
95:   factory Head.fromJson(Map<String, dynamic> json) => Head(
96:     responseTimestamp: json["responseTimestamp"],
97:     version: json["version"],
98:     signature: json["signature"],
99:   );
100: 
101:   Map<String, dynamic> toJson() => {
102:     "responseTimestamp": responseTimestamp,
103:     "version": version,
104:     "signature": signature,
105:   };
106: }
107: 
108: 
109: // class GetPaymentTxtTokenModel {
110: //   GetPaymentTxtTokenModel({
111: //     required this.head,
112: //     required this.body,
113: //   });
114: //
115: //   Head head;
116: //   Body body;

175: //         "resultStatus": resultStatus,
176: //         "resultCode": resultCode,
177: //         "resultMsg": resultMsg,
178: //       };
179: // }
180: //
181: // class Head {
182: //   Head({
183: //     required this.responseTimestamp,
184: //     required this.version,
185: //     required this.signature,
186: //   });
187: //
188: //   String responseTimestamp;
189: //   String version;
190: //   String signature;
191: //
192: //   factory Head.fromJson(Map<String, dynamic> json) => Head(
193: //         responseTimestamp: json["responseTimestamp"],
194: //         version: json["version"],
195: //         signature: json["signature"],
196: //       );
197: //

180: //
181: // class Head {
182: //   Head({
183: //     required this.responseTimestamp,
184: //     required this.version,
185: //     required this.signature,
186: //   });
187: //
188: //   String responseTimestamp;
189: //   String version;
190: //   String signature;
191: //
192: //   factory Head.fromJson(Map<String, dynamic> json) => Head(
193: //         responseTimestamp: json["responseTimestamp"],
194: //         version: json["version"],
195: //         signature: json["signature"],
196: //       );
197: //
198: //   Map<String, dynamic> toJson() => {
199: //         "responseTimestamp": responseTimestamp,
200: //         "version": version,
201: //         "signature": signature,
202: //       };

185: //     required this.signature,
186: //   });
187: //
188: //   String responseTimestamp;
189: //   String version;
190: //   String signature;
191: //
192: //   factory Head.fromJson(Map<String, dynamic> json) => Head(
193: //         responseTimestamp: json["responseTimestamp"],
194: //         version: json["version"],
195: //         signature: json["signature"],
196: //       );
197: //
198: //   Map<String, dynamic> toJson() => {
199: //         "responseTimestamp": responseTimestamp,
200: //         "version": version,
201: //         "signature": signature,
202: //       };
203: // }

191: //
192: //   factory Head.fromJson(Map<String, dynamic> json) => Head(
193: //         responseTimestamp: json["responseTimestamp"],
194: //         version: json["version"],
195: //         signature: json["signature"],
196: //       );
197: //
198: //   Map<String, dynamic> toJson() => {
199: //         "responseTimestamp": responseTimestamp,
200: //         "version": version,
201: //         "signature": signature,
202: //       };
203: // }

```

### FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\payment\orangePayScreen.dart
```dart
30:   @override
31:   void initState() {
32:     controller.clearCache();
33:     initController();
34:     startTransactionPolling();
35:     super.initState();
36:   }
37: 
38:   // ðŸ”¹ Poll Orange API every 3 seconds to check status
39:   void startTransactionPolling() {
40:     timer = Timer.periodic(const Duration(seconds: 3), (Timer t) async {
41:       if (!mounted) return;
42: 
43:       String status = await transactionStatus(accessToken: widget.accessToken, amount: widget.amount, orderId: widget.orderId, payToken: widget.payToken);
44: 
45:       if (status == 'SUCCESS') {
46:         timer?.cancel();
47:         debugPrint('âœ… Payment successful for Order ID: ${widget.orderId}');
48:         Get.back(result: true);
49:       } else if (status == 'FAILED' || status == 'CANCELLED') {
50:         timer?.cancel();
51:         debugPrint('âŒ Payment failed or cancelled.');
52:         Get.back(result: false);

67:                 });
68:               },
69:             ),
70:           )
71:           ..loadRequest(Uri.parse(widget.initialURl));
72:   }
73: 
74:   Future<String> transactionStatus({required String orderId, required String amount, required String payToken, required String accessToken}) async {
75:     String apiUrl = widget.orangePay.isSandbox == true ? 'https://api.orange.com/orange-money-webpay/dev/v1/transactionstatus' : 'https://api.orange.com/orange-money-webpay/cm/v1/transactionstatus';
76: 
77:     Map<String, String> requestBody = {"order_id": orderId, "amount": amount, "pay_token": payToken};
78: 
79:     try {
80:       var response = await http.post(
81:         Uri.parse(apiUrl),
82:         headers: {'Authorization': 'Bearer $accessToken', 'Content-Type': 'application/json', 'Accept': 'application/json'},
83:         body: json.encode(requestBody),
84:       );
85: 
86:       if (response.statusCode == 201) {
87:         Map<String, dynamic> responseData = jsonDecode(response.body);
88:         debugPrint('ðŸ” Transaction Status: ${responseData['status']}');
89:         return responseData['status'];

72:   }
73: 
74:   Future<String> transactionStatus({required String orderId, required String amount, required String payToken, required String accessToken}) async {
75:     String apiUrl = widget.orangePay.isSandbox == true ? 'https://api.orange.com/orange-money-webpay/dev/v1/transactionstatus' : 'https://api.orange.com/orange-money-webpay/cm/v1/transactionstatus';
76: 
77:     Map<String, String> requestBody = {"order_id": orderId, "amount": amount, "pay_token": payToken};
78: 
79:     try {
80:       var response = await http.post(
81:         Uri.parse(apiUrl),
82:         headers: {'Authorization': 'Bearer $accessToken', 'Content-Type': 'application/json', 'Accept': 'application/json'},
83:         body: json.encode(requestBody),
84:       );
85: 
86:       if (response.statusCode == 201) {
87:         Map<String, dynamic> responseData = jsonDecode(response.body);
88:         debugPrint('ðŸ” Transaction Status: ${responseData['status']}');
89:         return responseData['status'];
90:       } else {
91:         return '';
92:       }
93:     } catch (e) {
94:       debugPrint('âš ï¸ Transaction check error: $e');

73: 
74:   Future<String> transactionStatus({required String orderId, required String amount, required String payToken, required String accessToken}) async {
75:     String apiUrl = widget.orangePay.isSandbox == true ? 'https://api.orange.com/orange-money-webpay/dev/v1/transactionstatus' : 'https://api.orange.com/orange-money-webpay/cm/v1/transactionstatus';
76: 
77:     Map<String, String> requestBody = {"order_id": orderId, "amount": amount, "pay_token": payToken};
78: 
79:     try {
80:       var response = await http.post(
81:         Uri.parse(apiUrl),
82:         headers: {'Authorization': 'Bearer $accessToken', 'Content-Type': 'application/json', 'Accept': 'application/json'},
83:         body: json.encode(requestBody),
84:       );
85: 
86:       if (response.statusCode == 201) {
87:         Map<String, dynamic> responseData = jsonDecode(response.body);
88:         debugPrint('ðŸ” Transaction Status: ${responseData['status']}');
89:         return responseData['status'];
90:       } else {
91:         return '';
92:       }
93:     } catch (e) {
94:       debugPrint('âš ï¸ Transaction check error: $e');
95:       return '';

78: 
79:     try {
80:       var response = await http.post(
81:         Uri.parse(apiUrl),
82:         headers: {'Authorization': 'Bearer $accessToken', 'Content-Type': 'application/json', 'Accept': 'application/json'},
83:         body: json.encode(requestBody),
84:       );
85: 
86:       if (response.statusCode == 201) {
87:         Map<String, dynamic> responseData = jsonDecode(response.body);
88:         debugPrint('ðŸ” Transaction Status: ${responseData['status']}');
89:         return responseData['status'];
90:       } else {
91:         return '';
92:       }
93:     } catch (e) {
94:       debugPrint('âš ï¸ Transaction check error: $e');
95:       return '';
96:     }
97:   }
98: 
99:   @override
100:   Widget build(BuildContext context) {

79:     try {
80:       var response = await http.post(
81:         Uri.parse(apiUrl),
82:         headers: {'Authorization': 'Bearer $accessToken', 'Content-Type': 'application/json', 'Accept': 'application/json'},
83:         body: json.encode(requestBody),
84:       );
85: 
86:       if (response.statusCode == 201) {
87:         Map<String, dynamic> responseData = jsonDecode(response.body);
88:         debugPrint('ðŸ” Transaction Status: ${responseData['status']}');
89:         return responseData['status'];
90:       } else {
91:         return '';
92:       }
93:     } catch (e) {
94:       debugPrint('âš ï¸ Transaction check error: $e');
95:       return '';
96:     }
97:   }
98: 
99:   @override
100:   Widget build(BuildContext context) {
101:     return WillPopScope(

80:       var response = await http.post(
81:         Uri.parse(apiUrl),
82:         headers: {'Authorization': 'Bearer $accessToken', 'Content-Type': 'application/json', 'Accept': 'application/json'},
83:         body: json.encode(requestBody),
84:       );
85: 
86:       if (response.statusCode == 201) {
87:         Map<String, dynamic> responseData = jsonDecode(response.body);
88:         debugPrint('ðŸ” Transaction Status: ${responseData['status']}');
89:         return responseData['status'];
90:       } else {
91:         return '';
92:       }
93:     } catch (e) {
94:       debugPrint('âš ï¸ Transaction check error: $e');
95:       return '';
96:     }
97:   }
98: 
99:   @override
100:   Widget build(BuildContext context) {
101:     return WillPopScope(
102:       onWillPop: () async {

81:         Uri.parse(apiUrl),
82:         headers: {'Authorization': 'Bearer $accessToken', 'Content-Type': 'application/json', 'Accept': 'application/json'},
83:         body: json.encode(requestBody),
84:       );
85: 
86:       if (response.statusCode == 201) {
87:         Map<String, dynamic> responseData = jsonDecode(response.body);
88:         debugPrint('ðŸ” Transaction Status: ${responseData['status']}');
89:         return responseData['status'];
90:       } else {
91:         return '';
92:       }
93:     } catch (e) {
94:       debugPrint('âš ï¸ Transaction check error: $e');
95:       return '';
96:     }
97:   }
98: 
99:   @override
100:   Widget build(BuildContext context) {
101:     return WillPopScope(
102:       onWillPop: () async {
103:         _showCancelDialog();

231: //   }
232: //
233: //   Future transactionstatus({
234: //     required String orderId,
235: //     required String amount,
236: //     required String payToken,
237: //     required String accessToken,
238: //   }) async {
239: //     String apiUrl = widget.orangePay.isSandbox == true
240: //         ? 'https://api.orange.com/orange-money-webpay/dev/v1/transactionstatus'
241: //         : 'https://api.orange.com/orange-money-webpay/cm/v1/transactionstatus';
242: //     Map<String, String> requestBody = {
243: //       "order_id": orderId,
244: //       "amount": amount, // "OUV",
245: //       "pay_token": payToken
246: //     };
247: //
248: //     var response = await http.post(Uri.parse(apiUrl),
249: //         headers: <String, String>{
250: //           'Authorization': 'Bearer $accessToken',
251: //           'Content-Type': 'application/json',
252: //           'Accept': 'application/json',
253: //         },

232: //
233: //   Future transactionstatus({
234: //     required String orderId,
235: //     required String amount,
236: //     required String payToken,
237: //     required String accessToken,
238: //   }) async {
239: //     String apiUrl = widget.orangePay.isSandbox == true
240: //         ? 'https://api.orange.com/orange-money-webpay/dev/v1/transactionstatus'
241: //         : 'https://api.orange.com/orange-money-webpay/cm/v1/transactionstatus';
242: //     Map<String, String> requestBody = {
243: //       "order_id": orderId,
244: //       "amount": amount, // "OUV",
245: //       "pay_token": payToken
246: //     };
247: //
248: //     var response = await http.post(Uri.parse(apiUrl),
249: //         headers: <String, String>{
250: //           'Authorization': 'Bearer $accessToken',
251: //           'Content-Type': 'application/json',
252: //           'Accept': 'application/json',
253: //         },
254: //         body: json.encode(requestBody));

233: //   Future transactionstatus({
234: //     required String orderId,
235: //     required String amount,
236: //     required String payToken,
237: //     required String accessToken,
238: //   }) async {
239: //     String apiUrl = widget.orangePay.isSandbox == true
240: //         ? 'https://api.orange.com/orange-money-webpay/dev/v1/transactionstatus'
241: //         : 'https://api.orange.com/orange-money-webpay/cm/v1/transactionstatus';
242: //     Map<String, String> requestBody = {
243: //       "order_id": orderId,
244: //       "amount": amount, // "OUV",
245: //       "pay_token": payToken
246: //     };
247: //
248: //     var response = await http.post(Uri.parse(apiUrl),
249: //         headers: <String, String>{
250: //           'Authorization': 'Bearer $accessToken',
251: //           'Content-Type': 'application/json',
252: //           'Accept': 'application/json',
253: //         },
254: //         body: json.encode(requestBody));
255: //

240: //         ? 'https://api.orange.com/orange-money-webpay/dev/v1/transactionstatus'
241: //         : 'https://api.orange.com/orange-money-webpay/cm/v1/transactionstatus';
242: //     Map<String, String> requestBody = {
243: //       "order_id": orderId,
244: //       "amount": amount, // "OUV",
245: //       "pay_token": payToken
246: //     };
247: //
248: //     var response = await http.post(Uri.parse(apiUrl),
249: //         headers: <String, String>{
250: //           'Authorization': 'Bearer $accessToken',
251: //           'Content-Type': 'application/json',
252: //           'Accept': 'application/json',
253: //         },
254: //         body: json.encode(requestBody));
255: //
256: //     // Handle the response
257: //     if (response.statusCode == 201) {
258: //       Map<String, dynamic> responseData = jsonDecode(response.body);
259: //       return responseData['status'];
260: //     } else {
261: //       return '';
262: //     }

248: //     var response = await http.post(Uri.parse(apiUrl),
249: //         headers: <String, String>{
250: //           'Authorization': 'Bearer $accessToken',
251: //           'Content-Type': 'application/json',
252: //           'Accept': 'application/json',
253: //         },
254: //         body: json.encode(requestBody));
255: //
256: //     // Handle the response
257: //     if (response.statusCode == 201) {
258: //       Map<String, dynamic> responseData = jsonDecode(response.body);
259: //       return responseData['status'];
260: //     } else {
261: //       return '';
262: //     }
263: //   }
264: //
265: //   @override
266: //   Widget build(BuildContext context) {
267: //     // ignore: deprecated_member_use
268: //     return WillPopScope(
269: //       onWillPop: () async {
270: //         _showMyDialog();

249: //         headers: <String, String>{
250: //           'Authorization': 'Bearer $accessToken',
251: //           'Content-Type': 'application/json',
252: //           'Accept': 'application/json',
253: //         },
254: //         body: json.encode(requestBody));
255: //
256: //     // Handle the response
257: //     if (response.statusCode == 201) {
258: //       Map<String, dynamic> responseData = jsonDecode(response.body);
259: //       return responseData['status'];
260: //     } else {
261: //       return '';
262: //     }
263: //   }
264: //
265: //   @override
266: //   Widget build(BuildContext context) {
267: //     // ignore: deprecated_member_use
268: //     return WillPopScope(
269: //       onWillPop: () async {
270: //         _showMyDialog();
271: //         return false;

250: //           'Authorization': 'Bearer $accessToken',
251: //           'Content-Type': 'application/json',
252: //           'Accept': 'application/json',
253: //         },
254: //         body: json.encode(requestBody));
255: //
256: //     // Handle the response
257: //     if (response.statusCode == 201) {
258: //       Map<String, dynamic> responseData = jsonDecode(response.body);
259: //       return responseData['status'];
260: //     } else {
261: //       return '';
262: //     }
263: //   }
264: //
265: //   @override
266: //   Widget build(BuildContext context) {
267: //     // ignore: deprecated_member_use
268: //     return WillPopScope(
269: //       onWillPop: () async {
270: //         _showMyDialog();
271: //         return false;
272: //       },

251: //           'Content-Type': 'application/json',
252: //           'Accept': 'application/json',
253: //         },
254: //         body: json.encode(requestBody));
255: //
256: //     // Handle the response
257: //     if (response.statusCode == 201) {
258: //       Map<String, dynamic> responseData = jsonDecode(response.body);
259: //       return responseData['status'];
260: //     } else {
261: //       return '';
262: //     }
263: //   }
264: //
265: //   @override
266: //   Widget build(BuildContext context) {
267: //     // ignore: deprecated_member_use
268: //     return WillPopScope(
269: //       onWillPop: () async {
270: //         _showMyDialog();
271: //         return false;
272: //       },
273: //       child: Scaffold(

```

### FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\payment\RazorPayFailedModel.dart
```dart
1: // To parse this JSON data, do
2: //
3: //     final razorPayFailedModel = razorPayFailedModelFromJson(jsonString);
4: 
5: import 'dart:convert';
6: 
7: RazorPayFailedModel razorPayFailedModelFromJson(String str) => RazorPayFailedModel.fromJson(json.decode(str));
8: 
9: String razorPayFailedModelToJson(RazorPayFailedModel data) => json.encode(data.toJson());
10: 
11: class RazorPayFailedModel {
12:   RazorPayFailedModel({
13:     required this.error,
14:     required this.httpStatusCode,
15:   });
16: 
17:   Error error;
18:   int httpStatusCode;
19: 
20:   factory RazorPayFailedModel.fromJson(Map<String, dynamic>? json) => RazorPayFailedModel(
21:         error: Error.fromJson(json!["error"]),

```

### FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\payment\rozorpayConroller.dart
```dart
9: class RazorPayController {
10:   Future<CreateRazorPayOrderModel?> createOrderRazorPay({required double amount, required RazorPayModel? razorpayModel}) async {
11:     final String orderId = DateTime.now().millisecondsSinceEpoch.toString();
12:     RazorPayModel razorPayData = razorpayModel!;
13:     print(razorPayData.razorpayKey);
14:     print("we Enter In");
15:     const url = "${Constant.globalUrl}payments/razorpay/createorder";
16:     print(orderId);
17:     final response = await http.post(
18:       Uri.parse(url),
19:       body: {
20:         "amount": (amount.round() * 100).toString(),
21:         "receipt_id": orderId,
22:         "currency": "INR",
23:         "razorpaykey": razorPayData.razorpayKey,
24:         "razorPaySecret": razorPayData.razorpaySecret,
25:         "isSandBoxEnabled": razorPayData.isSandboxEnabled.toString(),
26:       },
27:     );
28: 
29:     if (response.statusCode == 500) {
30:       return null;
31:     } else {

21:         "receipt_id": orderId,
22:         "currency": "INR",
23:         "razorpaykey": razorPayData.razorpayKey,
24:         "razorPaySecret": razorPayData.razorpaySecret,
25:         "isSandBoxEnabled": razorPayData.isSandboxEnabled.toString(),
26:       },
27:     );
28: 
29:     if (response.statusCode == 500) {
30:       return null;
31:     } else {
32:       final data = jsonDecode(response.body);
33:       print(data);
34: 
35:       return CreateRazorPayOrderModel.fromJson(data);
36:     }
37:   }
38: }

24:         "razorPaySecret": razorPayData.razorpaySecret,
25:         "isSandBoxEnabled": razorPayData.isSandboxEnabled.toString(),
26:       },
27:     );
28: 
29:     if (response.statusCode == 500) {
30:       return null;
31:     } else {
32:       final data = jsonDecode(response.body);
33:       print(data);
34: 
35:       return CreateRazorPayOrderModel.fromJson(data);
36:     }
37:   }
38: }

```

### FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\payment\stripe_failed_model.dart
```dart
1: // To parse this JSON data, do
2: //
3: //     final stripePayFailedModel = stripePayFailedModelFromJson(jsonString);
4: 
5: import 'dart:convert';
6: 
7: StripePayFailedModel stripePayFailedModelFromJson(String str) => StripePayFailedModel.fromJson(json.decode(str));
8: 
9: String stripePayFailedModelToJson(StripePayFailedModel data) => json.encode(data.toJson());
10: 
11: class StripePayFailedModel {
12:   StripePayFailedModel({
13:     required this.error,
14:   });
15: 
16:   Error error;
17: 
18:   factory StripePayFailedModel.fromJson(Map<String, dynamic> json) => StripePayFailedModel(
19:         error: Error.fromJson(json["error"]),
20:       );
21: 

```

### FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\payment\xenditScreen.dart
```dart
6: import 'package:flutter/material.dart';
7: import 'package:get/get.dart';
8: import 'package:http/http.dart' as http;
9: import 'package:webview_flutter/webview_flutter.dart';
10: 
11: class XenditScreen extends StatefulWidget {
12:   final String initialURl;
13:   final String transId;
14:   final String apiKey;
15: 
16:   const XenditScreen({super.key, required this.initialURl, required this.transId, required this.apiKey});
17: 
18:   @override
19:   State<XenditScreen> createState() => _XenditScreenState();
20: }
21: 
22: class _XenditScreenState extends State<XenditScreen> {
23:   WebViewController controller = WebViewController();
24:   bool isLoading = true;
25: 
26:   @override
27:   void initState() {
28:     controller.clearCache();

8: import 'package:http/http.dart' as http;
9: import 'package:webview_flutter/webview_flutter.dart';
10: 
11: class XenditScreen extends StatefulWidget {
12:   final String initialURl;
13:   final String transId;
14:   final String apiKey;
15: 
16:   const XenditScreen({super.key, required this.initialURl, required this.transId, required this.apiKey});
17: 
18:   @override
19:   State<XenditScreen> createState() => _XenditScreenState();
20: }
21: 
22: class _XenditScreenState extends State<XenditScreen> {
23:   WebViewController controller = WebViewController();
24:   bool isLoading = true;
25: 
26:   @override
27:   void initState() {
28:     controller.clearCache();
29:     initController();
30:     callTransaction();

130:             ),
131:           ],
132:         );
133:       },
134:     );
135:   }
136: 
137:   Future<XenditModel> checkStatus({required String paymentId}) async {
138:     // API endpoint
139:     var url = Uri.parse('https://api.xendit.co/v2/invoices/$paymentId');
140: 
141:     // Headers
142:     var headers = {'Content-Type': 'application/json', 'Authorization': generateBasicAuthHeader(widget.apiKey.toString())};
143: 
144:     // Making the POST request
145:     var response = await http.get(url, headers: headers);
146: 
147:     // Checking the response status
148:     if (response.statusCode == 200) {
149:       XenditModel model = XenditModel.fromJson(jsonDecode(response.body));
150:       return model;
151:     } else {
152:       return XenditModel();

131:           ],
132:         );
133:       },
134:     );
135:   }
136: 
137:   Future<XenditModel> checkStatus({required String paymentId}) async {
138:     // API endpoint
139:     var url = Uri.parse('https://api.xendit.co/v2/invoices/$paymentId');
140: 
141:     // Headers
142:     var headers = {'Content-Type': 'application/json', 'Authorization': generateBasicAuthHeader(widget.apiKey.toString())};
143: 
144:     // Making the POST request
145:     var response = await http.get(url, headers: headers);
146: 
147:     // Checking the response status
148:     if (response.statusCode == 200) {
149:       XenditModel model = XenditModel.fromJson(jsonDecode(response.body));
150:       return model;
151:     } else {
152:       return XenditModel();
153:     }

134:     );
135:   }
136: 
137:   Future<XenditModel> checkStatus({required String paymentId}) async {
138:     // API endpoint
139:     var url = Uri.parse('https://api.xendit.co/v2/invoices/$paymentId');
140: 
141:     // Headers
142:     var headers = {'Content-Type': 'application/json', 'Authorization': generateBasicAuthHeader(widget.apiKey.toString())};
143: 
144:     // Making the POST request
145:     var response = await http.get(url, headers: headers);
146: 
147:     // Checking the response status
148:     if (response.statusCode == 200) {
149:       XenditModel model = XenditModel.fromJson(jsonDecode(response.body));
150:       return model;
151:     } else {
152:       return XenditModel();
153:     }
154:   }
155: 
156:   String generateBasicAuthHeader(String apiKey) {

137:   Future<XenditModel> checkStatus({required String paymentId}) async {
138:     // API endpoint
139:     var url = Uri.parse('https://api.xendit.co/v2/invoices/$paymentId');
140: 
141:     // Headers
142:     var headers = {'Content-Type': 'application/json', 'Authorization': generateBasicAuthHeader(widget.apiKey.toString())};
143: 
144:     // Making the POST request
145:     var response = await http.get(url, headers: headers);
146: 
147:     // Checking the response status
148:     if (response.statusCode == 200) {
149:       XenditModel model = XenditModel.fromJson(jsonDecode(response.body));
150:       return model;
151:     } else {
152:       return XenditModel();
153:     }
154:   }
155: 
156:   String generateBasicAuthHeader(String apiKey) {
157:     String credentials = '$apiKey:';
158:     String base64Encoded = base64Encode(utf8.encode(credentials));
159:     return 'Basic $base64Encoded';

139:     var url = Uri.parse('https://api.xendit.co/v2/invoices/$paymentId');
140: 
141:     // Headers
142:     var headers = {'Content-Type': 'application/json', 'Authorization': generateBasicAuthHeader(widget.apiKey.toString())};
143: 
144:     // Making the POST request
145:     var response = await http.get(url, headers: headers);
146: 
147:     // Checking the response status
148:     if (response.statusCode == 200) {
149:       XenditModel model = XenditModel.fromJson(jsonDecode(response.body));
150:       return model;
151:     } else {
152:       return XenditModel();
153:     }
154:   }
155: 
156:   String generateBasicAuthHeader(String apiKey) {
157:     String credentials = '$apiKey:';
158:     String base64Encoded = base64Encode(utf8.encode(credentials));
159:     return 'Basic $base64Encoded';
160:   }
161: }

140: 
141:     // Headers
142:     var headers = {'Content-Type': 'application/json', 'Authorization': generateBasicAuthHeader(widget.apiKey.toString())};
143: 
144:     // Making the POST request
145:     var response = await http.get(url, headers: headers);
146: 
147:     // Checking the response status
148:     if (response.statusCode == 200) {
149:       XenditModel model = XenditModel.fromJson(jsonDecode(response.body));
150:       return model;
151:     } else {
152:       return XenditModel();
153:     }
154:   }
155: 
156:   String generateBasicAuthHeader(String apiKey) {
157:     String credentials = '$apiKey:';
158:     String base64Encoded = base64Encode(utf8.encode(credentials));
159:     return 'Basic $base64Encoded';
160:   }
161: }

141:     // Headers
142:     var headers = {'Content-Type': 'application/json', 'Authorization': generateBasicAuthHeader(widget.apiKey.toString())};
143: 
144:     // Making the POST request
145:     var response = await http.get(url, headers: headers);
146: 
147:     // Checking the response status
148:     if (response.statusCode == 200) {
149:       XenditModel model = XenditModel.fromJson(jsonDecode(response.body));
150:       return model;
151:     } else {
152:       return XenditModel();
153:     }
154:   }
155: 
156:   String generateBasicAuthHeader(String apiKey) {
157:     String credentials = '$apiKey:';
158:     String base64Encoded = base64Encode(utf8.encode(credentials));
159:     return 'Basic $base64Encoded';
160:   }
161: }

148:     if (response.statusCode == 200) {
149:       XenditModel model = XenditModel.fromJson(jsonDecode(response.body));
150:       return model;
151:     } else {
152:       return XenditModel();
153:     }
154:   }
155: 
156:   String generateBasicAuthHeader(String apiKey) {
157:     String credentials = '$apiKey:';
158:     String base64Encoded = base64Encode(utf8.encode(credentials));
159:     return 'Basic $base64Encoded';
160:   }
161: }

149:       XenditModel model = XenditModel.fromJson(jsonDecode(response.body));
150:       return model;
151:     } else {
152:       return XenditModel();
153:     }
154:   }
155: 
156:   String generateBasicAuthHeader(String apiKey) {
157:     String credentials = '$apiKey:';
158:     String base64Encoded = base64Encode(utf8.encode(credentials));
159:     return 'Basic $base64Encoded';
160:   }
161: }

```

### FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\auth_screens\forgot_password_screen.dart
```dart
70:                     child: Center(
71:                       child: Text.rich(
72:                         TextSpan(
73:                           text: "Remember Password?".tr,
74:                           style: AppThemeData.mediumTextStyle(color: isDark ? AppThemeData.greyDark800 : AppThemeData.grey800),
75:                           children: [
76:                             TextSpan(
77:                               text: "Log in".tr,
78:                               style: AppThemeData.mediumTextStyle(color: AppThemeData.ecommerce300, decoration: TextDecoration.underline, decorationColor: AppThemeData.ecommerce300),
79:                               recognizer:
80:                                   TapGestureRecognizer()
81:                                     ..onTap = () {
82:                                       Get.offAll(() => const LoginScreen());
83:                                     },
84:                             ),
85:                           ],
86:                         ),
87:                       ),
88:                     ),
89:                   ),
90:                 ],
91:               ),
92:             ),

```

### FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\auth_screens\login_screen.dart
```dart
158:                     child: Center(
159:                       child: Text.rich(
160:                         TextSpan(
161:                           text: "Didn't have an account? ".tr,
162:                           style: AppThemeData.mediumTextStyle(color: isDark ? AppThemeData.greyDark900 : AppThemeData.grey900),
163:                           children: [
164:                             TextSpan(
165:                               text: "Sign up".tr,
166:                               style: AppThemeData.mediumTextStyle(color: AppThemeData.ecommerce300, decoration: TextDecoration.underline),
167:                               recognizer:
168:                                   TapGestureRecognizer()
169:                                     ..onTap = () {
170:                                       Get.offAll(() => const SignUpScreen());
171:                                     },
172:                             ),
173:                           ],
174:                         ),
175:                       ),
176:                     ),
177:                   ),
178:                 ],
179:               ),
180:             ),

```

### FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\auth_screens\mobile_login_screen.dart
```dart
139:                       child: Text.rich(
140:                         TextSpan(
141:                           text: "Didn't have an account? ".tr,
142:                           style: AppThemeData.mediumTextStyle(color: isDark ? AppThemeData.greyDark800 : AppThemeData.grey800),
143:                           children: [
144:                             TextSpan(
145:                               text: "Sign up".tr,
146:                               style: AppThemeData.mediumTextStyle(
147:                                 color: AppThemeData.ecommerce300,
148:                                 decoration: TextDecoration.underline,
149:                                 decorationColor: AppThemeData.ecommerce300,
150:                                 decorationStyle: TextDecorationStyle.solid,
151:                               ),
152:                               recognizer:
153:                                   TapGestureRecognizer()
154:                                     ..onTap = () {
155:                                       Get.offAll(() => const SignUpScreen());
156:                                     },
157:                             ),
158:                           ],
159:                         ),
160:                       ),
161:                     ),

141:                           text: "Didn't have an account? ".tr,
142:                           style: AppThemeData.mediumTextStyle(color: isDark ? AppThemeData.greyDark800 : AppThemeData.grey800),
143:                           children: [
144:                             TextSpan(
145:                               text: "Sign up".tr,
146:                               style: AppThemeData.mediumTextStyle(
147:                                 color: AppThemeData.ecommerce300,
148:                                 decoration: TextDecoration.underline,
149:                                 decorationColor: AppThemeData.ecommerce300,
150:                                 decorationStyle: TextDecorationStyle.solid,
151:                               ),
152:                               recognizer:
153:                                   TapGestureRecognizer()
154:                                     ..onTap = () {
155:                                       Get.offAll(() => const SignUpScreen());
156:                                     },
157:                             ),
158:                           ],
159:                         ),
160:                       ),
161:                     ),
162:                   ),
163:                 ],

```

### FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\auth_screens\otp_verification_screen.dart
```dart
127:                     child: Center(
128:                       child: Text.rich(
129:                         TextSpan(
130:                           text: "Didn't have an account? ".tr,
131:                           style: AppThemeData.mediumTextStyle(color: isDark ? AppThemeData.greyDark800 : AppThemeData.grey800),
132:                           children: [
133:                             TextSpan(
134:                               text: "Sign up".tr,
135:                               style: AppThemeData.mediumTextStyle(color: AppThemeData.ecommerce300, decoration: TextDecoration.underline),
136:                               recognizer: TapGestureRecognizer()..onTap = () => Get.offAll(() => const SignUpScreen()),
137:                             ),
138:                           ],
139:                         ),
140:                       ),
141:                     ),
142:                   ),
143:                 ],
144:               ),
145:             ),
146:           ),
147:         );
148:       },
149:     );

```

### FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\auth_screens\sign_up_screen.dart
```dart
235:                         child: Text.rich(
236:                           TextSpan(
237:                             text: "Already have an account?".tr,
238:                             style: AppThemeData.mediumTextStyle(color: isDark ? AppThemeData.greyDark800 : AppThemeData.grey800),
239:                             children: [
240:                               TextSpan(
241:                                 text: "Log in".tr,
242:                                 style: AppThemeData.mediumTextStyle(
243:                                   color: AppThemeData.ecommerce300,
244:                                   decoration: TextDecoration.underline,
245:                                   decorationColor: AppThemeData.ecommerce300,
246:                                   decorationStyle: TextDecorationStyle.solid,
247:                                 ),
248:                                 recognizer:
249:                                     TapGestureRecognizer()
250:                                       ..onTap = () {
251:                                         Get.offAll(() => const LoginScreen());
252:                                       },
253:                               ),
254:                             ],
255:                           ),
256:                         ),
257:                       ),

237:                             text: "Already have an account?".tr,
238:                             style: AppThemeData.mediumTextStyle(color: isDark ? AppThemeData.greyDark800 : AppThemeData.grey800),
239:                             children: [
240:                               TextSpan(
241:                                 text: "Log in".tr,
242:                                 style: AppThemeData.mediumTextStyle(
243:                                   color: AppThemeData.ecommerce300,
244:                                   decoration: TextDecoration.underline,
245:                                   decorationColor: AppThemeData.ecommerce300,
246:                                   decorationStyle: TextDecorationStyle.solid,
247:                                 ),
248:                                 recognizer:
249:                                     TapGestureRecognizer()
250:                                       ..onTap = () {
251:                                         Get.offAll(() => const LoginScreen());
252:                                       },
253:                               ),
254:                             ],
255:                           ),
256:                         ),
257:                       ),
258:                     ),
259:                   ],

```

### FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\cab_service_screens\cab_booking_screen.dart
```dart
1568:                   ),
1569:                   const SizedBox(width: 10),
1570:                   value.name == "wallet"
1571:                       ? Expanded(
1572:                         child: Column(
1573:                           crossAxisAlignment: CrossAxisAlignment.start,
1574:                           children: [
1575:                             Text(
1576:                               value.name.capitalizeString(),
1577:                               textAlign: TextAlign.start,
1578:                               style: AppThemeData.semiBoldTextStyle(fontSize: 16, color: isDark ? AppThemeData.grey50 : AppThemeData.grey900),
1579:                             ),
1580:                             Text(
1581:                               Constant.amountShow(amount: controller.userModel.value.walletAmount == null ? '0.0' : controller.userModel.value.walletAmount.toString()),
1582:                               textAlign: TextAlign.start,
1583:                               style: AppThemeData.semiBoldTextStyle(fontSize: 14, color: isDark ? AppThemeData.primary300 : AppThemeData.primary300),
1584:                             ),
1585:                           ],
1586:                         ),
1587:                       )
1588:                       : Expanded(
1589:                         child: Text(
1590:                           value.name.capitalizeString(),

1582:                               textAlign: TextAlign.start,
1583:                               style: AppThemeData.semiBoldTextStyle(fontSize: 14, color: isDark ? AppThemeData.primary300 : AppThemeData.primary300),
1584:                             ),
1585:                           ],
1586:                         ),
1587:                       )
1588:                       : Expanded(
1589:                         child: Text(
1590:                           value.name.capitalizeString(),
1591:                           textAlign: TextAlign.start,
1592:                           style: AppThemeData.semiBoldTextStyle(fontSize: 16, color: isDark ? AppThemeData.grey50 : AppThemeData.grey900),
1593:                         ),
1594:                       ),
1595:                   const Expanded(child: SizedBox()),
1596:                   Radio(
1597:                     value: value.name,
1598:                     groupValue: controller.selectedPaymentMethod.value,
1599:                     activeColor: isDark ? AppThemeData.primary300 : AppThemeData.primary300,
1600:                     onChanged: (value) {
1601:                       controller.selectedPaymentMethod.value = value.toString();
1602:                     },
1603:                   ),
1604:                 ],

```

### FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\cab_service_screens\Intercity_home_screen.dart
```dart
1573:                   ),
1574:                   const SizedBox(width: 10),
1575:                   value.name == "wallet"
1576:                       ? Expanded(
1577:                         child: Column(
1578:                           crossAxisAlignment: CrossAxisAlignment.start,
1579:                           children: [
1580:                             Text(
1581:                               value.name.capitalizeString(),
1582:                               textAlign: TextAlign.start,
1583:                               style: AppThemeData.semiBoldTextStyle(fontSize: 16, color: isDark ? AppThemeData.grey50 : AppThemeData.grey900),
1584:                             ),
1585:                             Text(
1586:                               Constant.amountShow(amount: controller.userModel.value.walletAmount == null ? '0.0' : controller.userModel.value.walletAmount.toString()),
1587:                               textAlign: TextAlign.start,
1588:                               style: AppThemeData.semiBoldTextStyle(fontSize: 14, color: isDark ? AppThemeData.primary300 : AppThemeData.primary300),
1589:                             ),
1590:                           ],
1591:                         ),
1592:                       )
1593:                       : Expanded(
1594:                         child: Text(
1595:                           value.name.capitalizeString(),

1587:                               textAlign: TextAlign.start,
1588:                               style: AppThemeData.semiBoldTextStyle(fontSize: 14, color: isDark ? AppThemeData.primary300 : AppThemeData.primary300),
1589:                             ),
1590:                           ],
1591:                         ),
1592:                       )
1593:                       : Expanded(
1594:                         child: Text(
1595:                           value.name.capitalizeString(),
1596:                           textAlign: TextAlign.start,
1597:                           style: AppThemeData.semiBoldTextStyle(fontSize: 16, color: isDark ? AppThemeData.grey50 : AppThemeData.grey900),
1598:                         ),
1599:                       ),
1600:                   const Expanded(child: SizedBox()),
1601:                   Radio(
1602:                     value: value.name,
1603:                     groupValue: controller.selectedPaymentMethod.value,
1604:                     activeColor: isDark ? AppThemeData.primary300 : AppThemeData.primary300,
1605:                     onChanged: (value) {
1606:                       controller.selectedPaymentMethod.value = value.toString();
1607:                     },
1608:                   ),
1609:                 ],

```

### FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\cab_service_screens\my_cab_booking_screen.dart
```dart
437:                   ),
438:                   const SizedBox(width: 10),
439:                   value.name == "wallet"
440:                       ? Expanded(
441:                         child: Column(
442:                           crossAxisAlignment: CrossAxisAlignment.start,
443:                           children: [
444:                             Text(
445:                               value.name.capitalizeString(),
446:                               textAlign: TextAlign.start,
447:                               style: AppThemeData.semiBoldTextStyle(fontSize: 16, color: isDark ? AppThemeData.grey50 : AppThemeData.grey900),
448:                             ),
449:                             Text(
450:                               Constant.amountShow(amount: Constant.userModel!.walletAmount == null ? '0.0' : Constant.userModel!.walletAmount.toString()),
451:                               textAlign: TextAlign.start,
452:                               style: AppThemeData.semiBoldTextStyle(fontSize: 14, color: isDark ? AppThemeData.primary300 : AppThemeData.primary300),
453:                             ),
454:                           ],
455:                         ),
456:                       )
457:                       : Expanded(
458:                         child: Text(
459:                           value.name.capitalizeString(),

451:                               textAlign: TextAlign.start,
452:                               style: AppThemeData.semiBoldTextStyle(fontSize: 14, color: isDark ? AppThemeData.primary300 : AppThemeData.primary300),
453:                             ),
454:                           ],
455:                         ),
456:                       )
457:                       : Expanded(
458:                         child: Text(
459:                           value.name.capitalizeString(),
460:                           textAlign: TextAlign.start,
461:                           style: AppThemeData.semiBoldTextStyle(fontSize: 16, color: isDark ? AppThemeData.grey50 : AppThemeData.grey900),
462:                         ),
463:                       ),
464:                   const Expanded(child: SizedBox()),
465:                   Radio(
466:                     value: value.name,
467:                     groupValue: controller.selectedPaymentMethod.value,
468:                     activeColor: isDark ? AppThemeData.primary300 : AppThemeData.primary300,
469:                     onChanged: (value) {
470:                       controller.selectedPaymentMethod.value = value.toString();
471:                     },
472:                   ),
473:                 ],

```

### FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\ecommarce\all_brand_product_screen.dart
```dart
88:                                       child: NetworkImageWidget(imageUrl: productModel.photo.toString(), fit: BoxFit.cover),
89:                                     ),
90:                                   ),
91:                                   Column(
92:                                     mainAxisAlignment: MainAxisAlignment.start,
93:                                     crossAxisAlignment: CrossAxisAlignment.start,
94:                                     children: [
95:                                       Text(
96:                                         productModel.name!.capitalizeString(),
97:                                         textAlign: TextAlign.start,
98:                                         maxLines: 1,
99:                                         style: AppThemeData.semiBoldTextStyle(fontSize: 18, color: isDark ? AppThemeData.greyDark600 : AppThemeData.grey600),
100:                                       ),
101:                                       disPrice == "" || disPrice == "0"
102:                                           ? Text(Constant.amountShow(amount: price), style: AppThemeData.semiBoldTextStyle(fontSize: 16, color: AppThemeData.primary300))
103:                                           : Row(
104:                                             children: [
105:                                               Text(
106:                                                 Constant.amountShow(amount: price),
107:                                                 style: AppThemeData.semiBoldTextStyle(fontSize: 14, color: Colors.grey, decoration: TextDecoration.lineThrough),
108:                                               ),
109:                                               const SizedBox(width: 5),
110:                                               Text(

```

### FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\ecommarce\all_category_product_screen.dart
```dart
88:                                       child: NetworkImageWidget(imageUrl: productModel.photo.toString(), fit: BoxFit.cover),
89:                                     ),
90:                                   ),
91:                                   Column(
92:                                     mainAxisAlignment: MainAxisAlignment.start,
93:                                     crossAxisAlignment: CrossAxisAlignment.start,
94:                                     children: [
95:                                       Text(
96:                                         productModel.name!.capitalizeString(),
97:                                         textAlign: TextAlign.start,
98:                                         maxLines: 1,
99:                                         style: AppThemeData.semiBoldTextStyle(fontSize: 18, color: isDark ? AppThemeData.greyDark600 : AppThemeData.grey600),
100:                                       ),
101:                                       disPrice == "" || disPrice == "0"
102:                                           ? Text(Constant.amountShow(amount: price), style: AppThemeData.semiBoldTextStyle(fontSize: 16, color: AppThemeData.primary300))
103:                                           : Row(
104:                                             children: [
105:                                               Text(
106:                                                 Constant.amountShow(amount: price),
107:                                                 style: AppThemeData.semiBoldTextStyle(fontSize: 14, color: Colors.grey, decoration: TextDecoration.lineThrough),
108:                                               ),
109:                                               const SizedBox(width: 5),
110:                                               Text(

```

### FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\ecommarce\dash_board_e_commerce_screen.dart
```dart
3: import 'package:customer/controllers/dash_board_ecommarce_controller.dart';
4: import 'package:customer/themes/app_them_data.dart';
5: import 'package:flutter/material.dart';
6: import 'package:flutter_svg/flutter_svg.dart';
7: import 'package:get/get.dart';
8: 
9: import '../../controllers/theme_controller.dart';
10: 
11: class DashBoardEcommerceScreen extends StatelessWidget {
12:   const DashBoardEcommerceScreen({super.key});
13: 
14:   @override
15:   Widget build(BuildContext context) {
16:     final themeController = Get.find<ThemeController>();
17:     return Obx(() {
18:       final isDark = themeController.isDark.value;
19:       return GetX(
20:         init: DashBoardEcommerceController(),
21:         builder: (controller) {
22:           return Scaffold(
23:             body: controller.pageList[controller.selectedIndex.value],
24:             bottomNavigationBar: BottomNavigationBar(
25:               type: BottomNavigationBarType.fixed,

4: import 'package:customer/themes/app_them_data.dart';
5: import 'package:flutter/material.dart';
6: import 'package:flutter_svg/flutter_svg.dart';
7: import 'package:get/get.dart';
8: 
9: import '../../controllers/theme_controller.dart';
10: 
11: class DashBoardEcommerceScreen extends StatelessWidget {
12:   const DashBoardEcommerceScreen({super.key});
13: 
14:   @override
15:   Widget build(BuildContext context) {
16:     final themeController = Get.find<ThemeController>();
17:     return Obx(() {
18:       final isDark = themeController.isDark.value;
19:       return GetX(
20:         init: DashBoardEcommerceController(),
21:         builder: (controller) {
22:           return Scaffold(
23:             body: controller.pageList[controller.selectedIndex.value],
24:             bottomNavigationBar: BottomNavigationBar(
25:               type: BottomNavigationBarType.fixed,
26:               showUnselectedLabels: true,

12:   const DashBoardEcommerceScreen({super.key});
13: 
14:   @override
15:   Widget build(BuildContext context) {
16:     final themeController = Get.find<ThemeController>();
17:     return Obx(() {
18:       final isDark = themeController.isDark.value;
19:       return GetX(
20:         init: DashBoardEcommerceController(),
21:         builder: (controller) {
22:           return Scaffold(
23:             body: controller.pageList[controller.selectedIndex.value],
24:             bottomNavigationBar: BottomNavigationBar(
25:               type: BottomNavigationBarType.fixed,
26:               showUnselectedLabels: true,
27:               showSelectedLabels: true,
28:               selectedFontSize: 12,
29:               selectedLabelStyle: const TextStyle(fontFamily: AppThemeData.bold),
30:               unselectedLabelStyle: const TextStyle(fontFamily: AppThemeData.bold),
31:               currentIndex: controller.selectedIndex.value,
32:               backgroundColor: isDark ? AppThemeData.grey900 : AppThemeData.grey50,
33:               selectedItemColor: isDark ? AppThemeData.primary300 : AppThemeData.primary300,
34:               unselectedItemColor: isDark ? AppThemeData.grey300 : AppThemeData.grey600,

55:                       ],
56:             ),
57:           );
58:         },
59:       );
60:     });
61:   }
62: 
63:   BottomNavigationBarItem navigationBarItem(isDark, {required int index, required String label, required String assetIcon, required DashBoardEcommerceController controller}) {
64:     return BottomNavigationBarItem(
65:       icon: Padding(
66:         padding: const EdgeInsets.symmetric(vertical: 5),
67:         child: SvgPicture.asset(
68:           assetIcon,
69:           height: 22,
70:           width: 22,
71:           color:
72:               controller.selectedIndex.value == index
73:                   ? isDark
74:                       ? AppThemeData.primary300
75:                       : AppThemeData.primary300
76:                   : isDark
77:                   ? AppThemeData.grey300

```

### FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\ecommarce\home_e_commerce_screen.dart
```dart
36: import 'package:flutter/material.dart';
37: import 'package:flutter_svg/flutter_svg.dart';
38: import 'package:shimmer/shimmer.dart';
39: import 'package:geocoding/geocoding.dart';
40: import 'package:geolocator/geolocator.dart';
41: import 'package:get/get.dart';
42: import 'package:url_launcher/url_launcher.dart';
43: 
44: class HomeECommerceScreen extends StatelessWidget {
45:   const HomeECommerceScreen({super.key});
46: 
47:   @override
48:   Widget build(BuildContext context) {
49:     final themeController = Get.find<ThemeController>();
50:     final isDark = themeController.isDark.value;
51:     return GetX(
52:       init: HomeECommerceController(),
53:       builder: (controller) {
54:         return Scaffold(
55:           backgroundColor: isDark ? AppThemeData.grey900 : AppThemeData.grey50,
56:           appBar: AppBar(
57:             backgroundColor: isDark ? AppThemeData.ecommerce300 : AppThemeData.ecommerce300,
58:             titleSpacing: 0,

37: import 'package:flutter_svg/flutter_svg.dart';
38: import 'package:shimmer/shimmer.dart';
39: import 'package:geocoding/geocoding.dart';
40: import 'package:geolocator/geolocator.dart';
41: import 'package:get/get.dart';
42: import 'package:url_launcher/url_launcher.dart';
43: 
44: class HomeECommerceScreen extends StatelessWidget {
45:   const HomeECommerceScreen({super.key});
46: 
47:   @override
48:   Widget build(BuildContext context) {
49:     final themeController = Get.find<ThemeController>();
50:     final isDark = themeController.isDark.value;
51:     return GetX(
52:       init: HomeECommerceController(),
53:       builder: (controller) {
54:         return Scaffold(
55:           backgroundColor: isDark ? AppThemeData.grey900 : AppThemeData.grey50,
56:           appBar: AppBar(
57:             backgroundColor: isDark ? AppThemeData.ecommerce300 : AppThemeData.ecommerce300,
58:             titleSpacing: 0,
59:             leading: InkWell(

44: class HomeECommerceScreen extends StatelessWidget {
45:   const HomeECommerceScreen({super.key});
46: 
47:   @override
48:   Widget build(BuildContext context) {
49:     final themeController = Get.find<ThemeController>();
50:     final isDark = themeController.isDark.value;
51:     return GetX(
52:       init: HomeECommerceController(),
53:       builder: (controller) {
54:         return Scaffold(
55:           backgroundColor: isDark ? AppThemeData.grey900 : AppThemeData.grey50,
56:           appBar: AppBar(
57:             backgroundColor: isDark ? AppThemeData.ecommerce300 : AppThemeData.ecommerce300,
58:             titleSpacing: 0,
59:             leading: InkWell(
60:               onTap: () {
61:                 Get.offAll(const ServiceListScreen());
62:               },
63:               child: Icon(Icons.arrow_back, color: isDark ? AppThemeData.grey50 : AppThemeData.grey50, size: 20),
64:             ),
65:             title: Column(
66:               crossAxisAlignment: CrossAxisAlignment.start,

49:     final themeController = Get.find<ThemeController>();
50:     final isDark = themeController.isDark.value;
51:     return GetX(
52:       init: HomeECommerceController(),
53:       builder: (controller) {
54:         return Scaffold(
55:           backgroundColor: isDark ? AppThemeData.grey900 : AppThemeData.grey50,
56:           appBar: AppBar(
57:             backgroundColor: isDark ? AppThemeData.ecommerce300 : AppThemeData.ecommerce300,
58:             titleSpacing: 0,
59:             leading: InkWell(
60:               onTap: () {
61:                 Get.offAll(const ServiceListScreen());
62:               },
63:               child: Icon(Icons.arrow_back, color: isDark ? AppThemeData.grey50 : AppThemeData.grey50, size: 20),
64:             ),
65:             title: Column(
66:               crossAxisAlignment: CrossAxisAlignment.start,
67:               children: [
68:                 Constant.userModel == null
69:                     ? InkWell(
70:                       onTap: () {
71:                         Get.offAll(const LoginScreen());

216:                     ),
217:                   ),
218:                 ),
219:               ),
220:             ),
221:           ),
222:           body:
223:               controller.isLoading.value
224:                   ? _buildHomeECommerceShimmer(isDark)
225:                   : SingleChildScrollView(
226:                     child: Padding(
227:                       padding: const EdgeInsets.symmetric(vertical: 10),
228:                       child: Column(
229:                         mainAxisAlignment: MainAxisAlignment.start,
230:                         crossAxisAlignment: CrossAxisAlignment.start,
231:                         children: [
232:                           Padding(
233:                             padding: const EdgeInsets.symmetric(horizontal: 16),
234:                             child: Row(
235:                               children: [
236:                                 Expanded(
237:                                   child: Text(
238:                                     "Category".tr,

266:                                 shrinkWrap: true,
267:                                 physics: const NeverScrollableScrollPhysics(),
268:                                 itemCount: controller.vendorCategoryModel.length,
269:                                 scrollDirection: Axis.horizontal,
270:                                 itemBuilder: (context, index) {
271:                                   VendorCategoryModel vendorCategoryModel = controller.vendorCategoryModel[index];
272:                                   return InkWell(
273:                                     onTap: () {
274:                                       Get.to(const CategoryRestaurantScreen(), arguments: {"vendorCategoryModel": vendorCategoryModel, "dineIn": false, "ecommerce": true});
275:                                     },
276:                                     child: Padding(
277:                                       padding: const EdgeInsets.only(right: 18),
278:                                       child: Column(
279:                                         mainAxisAlignment: MainAxisAlignment.start,
280:                                         crossAxisAlignment: CrossAxisAlignment.center,
281:                                         children: [
282:                                           NetworkImageWidget(imageUrl: vendorCategoryModel.photo.toString(), height: 60, width: 60, fit: BoxFit.cover),
283:                                           const SizedBox(height: 5),
284:                                           Text(
285:                                             vendorCategoryModel.title.toString(),
286:                                             textAlign: TextAlign.center,
287:                                             style: AppThemeData.mediumTextStyle(color: isDark ? AppThemeData.greyDark800 : AppThemeData.grey800, fontSize: 14),
288:                                           ),

537:                                                                   child: NetworkImageWidget(imageUrl: productModel.photo.toString(), fit: BoxFit.cover),
538:                                                                 ),
539:                                                               ),
540:                                                               Column(
541:                                                                 mainAxisAlignment: MainAxisAlignment.start,
542:                                                                 crossAxisAlignment: CrossAxisAlignment.start,
543:                                                                 children: [
544:                                                                   Text(
545:                                                                     productModel.name!.capitalizeString(),
546:                                                                     textAlign: TextAlign.start,
547:                                                                     maxLines: 1,
548:                                                                     style: AppThemeData.semiBoldTextStyle(fontSize: 18, color: isDark ? AppThemeData.greyDark600 : AppThemeData.grey600),
549:                                                                   ),
550:                                                                   disPrice == "" || disPrice == "0"
551:                                                                       ? Text(Constant.amountShow(amount: price), style: AppThemeData.semiBoldTextStyle(fontSize: 16, color: AppThemeData.primary300))
552:                                                                       : Column(
553:                                                                         children: [
554:                                                                           Text(
555:                                                                             Constant.amountShow(amount: price),
556:                                                                             style: AppThemeData.semiBoldTextStyle(fontSize: 14, color: Colors.grey, decoration: TextDecoration.lineThrough),
557:                                                                           ),
558:                                                                           const SizedBox(width: 5),
559:                                                                           Text(

834:           ),
835:         ],
836:       ),
837:     );
838:   }
839: }
840: 
841: class BannerView extends StatelessWidget {
842:   final HomeECommerceController controller;
843: 
844:   const BannerView({super.key, required this.controller});
845: 
846:   @override
847:   Widget build(BuildContext context) {
848:     return Column(
849:       children: [
850:         SizedBox(
851:           height: 160,
852:           child: PageView.builder(
853:             physics: const BouncingScrollPhysics(),
854:             controller: controller.pageController.value,
855:             scrollDirection: Axis.horizontal,
856:             itemCount: controller.bannerModel.length,

921:           ),
922:         ),
923:       ],
924:     );
925:   }
926: }
927: 
928: class BannerBottomView extends StatelessWidget {
929:   final HomeECommerceController controller;
930: 
931:   const BannerBottomView({super.key, required this.controller});
932: 
933:   @override
934:   Widget build(BuildContext context) {
935:     return Column(
936:       children: [
937:         SizedBox(
938:           height: 150,
939:           child: PageView.builder(
940:             physics: const BouncingScrollPhysics(),
941:             controller: controller.pageBottomController.value,
942:             scrollDirection: Axis.horizontal,
943:             itemCount: controller.bannerBottomModel.length,

1009:         ),
1010:       ],
1011:     );
1012:   }
1013: }
1014: 
1015: class AdvertisementHomeCard extends StatelessWidget {
1016:   final AdvertisementModel model;
1017:   final HomeECommerceController controller;
1018: 
1019:   const AdvertisementHomeCard({super.key, required this.controller, required this.model});
1020: 
1021:   @override
1022:   Widget build(BuildContext context) {
1023:     final themeController = Get.find<ThemeController>();
1024:     final isDark = themeController.isDark.value;
1025:     return InkWell(
1026:       onTap: () async {
1027:         ShowToastDialog.showLoader("Please wait...".tr);
1028:         VendorModel? vendorModel = await FireStoreUtils.getVendorById(model.vendorId!);
1029:         ShowToastDialog.closeLoader();
1030:         Get.to(const RestaurantDetailsScreen(), arguments: {"vendorModel": vendorModel});
1031:       },

1143:             ),
1144:           ],
1145:         ),
1146:       ),
1147:     );
1148:   }
1149: }
1150: 
1151: Widget _buildHomeECommerceShimmer(bool isDark) {
1152:   final baseColor = isDark ? const Color(0xFF2A2A2A) : const Color(0xFFE0E0E0);
1153:   final highlightColor = isDark ? const Color(0xFF3A3A3A) : const Color(0xFFF5F5F5);
1154: 
1155:   Widget box({double w = double.infinity, double h = 14, double radius = 8}) =>
1156:       Container(width: w, height: h, decoration: BoxDecoration(color: baseColor, borderRadius: BorderRadius.circular(radius)));
1157: 
1158:   return Shimmer.fromColors(
1159:     baseColor: baseColor,
1160:     highlightColor: highlightColor,
1161:     child: SingleChildScrollView(
1162:       physics: const NeverScrollableScrollPhysics(),
1163:       padding: const EdgeInsets.symmetric(vertical: 10),
1164:       child: Column(
1165:         crossAxisAlignment: CrossAxisAlignment.start,

```

### FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\help_support_screen\help_support_screen.dart
```dart
96:                     child: SizedBox(
97:                       height: 50,
98:                       child: Padding(
99:                         padding: const EdgeInsets.only(left: 10),
100:                         child: TextField(
101:                           style: TextStyle(color: isDark ? AppThemeData.primary50 : AppThemeData.primary600, fontFamily: AppThemeData.medium, fontSize: 14),
102:                           textInputAction: TextInputAction.send,
103:                           keyboardType: TextInputType.text,
104:                           textCapitalization: TextCapitalization.sentences,
105:                           controller: controller.messageController.value,
106:                           decoration: InputDecoration(
107:                             contentPadding: const EdgeInsets.only(left: 10),
108:                             filled: true,
109:                             fillColor: isDark ? AppThemeData.grey900 : AppThemeData.grey100,
110:                             disabledBorder: OutlineInputBorder(
111:                               borderRadius: const BorderRadius.all(Radius.circular(10)),
112:                               borderSide: BorderSide(color: isDark ? AppThemeData.grey900 : AppThemeData.grey100, width: 1),
113:                             ),
114:                             focusedBorder: OutlineInputBorder(
115:                               borderRadius: const BorderRadius.all(Radius.circular(10)),
116:                               borderSide: BorderSide(color: isDark ? AppThemeData.primary300 : AppThemeData.primary300, width: 1),
117:                             ),
118:                             enabledBorder: OutlineInputBorder(

```

### FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\location_enable_screens\enter_manually_location.dart
```dart
129:                                             controller.location.value = UserLocation(latitude: selectedLocationModel.latLng!.latitude, longitude: selectedLocationModel.latLng!.longitude);
130:                                             Get.back();
131:                                           }
132:                                         });
133:                                       }
134:                                     },
135:                                   );
136:                                 },
137:                                 child: Padding(padding: const EdgeInsets.only(right: 10), child: Icon(Icons.gps_fixed, size: 24, color: AppThemeData.ecommerce300)),
138:                               ),
139:                             ),
140:                           ),
141:                           const SizedBox(height: 15),
142:                           TextFieldWidget(title: "Flat/House/Floor/Building*".tr, hintText: "Enter address details".tr, controller: controller.houseBuildingTextEditingController.value),
143:                           const SizedBox(height: 15),
144:                           TextFieldWidget(title: "Area/Sector/Locality*".tr, hintText: "Enter area/locality".tr, controller: controller.localityEditingController.value),
145:                           const SizedBox(height: 15),
146:                           TextFieldWidget(title: "Nearby Landmark".tr, hintText: "Add a landmark".tr, controller: controller.landmarkEditingController.value),
147:                           const SizedBox(height: 30),
148:                           Container(height: 1, color: AppThemeData.grey200),
149:                           const SizedBox(height: 25),
150:                           Text("Save Address As".tr, style: AppThemeData.boldTextStyle(fontSize: 14, color: AppThemeData.grey900)),
151:                           const SizedBox(height: 10),

```

### FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\cart_screen\oder_placing_screens.dart
```dart
195:                   controller.isPlacing.value
196:                       ? RoundedButtonFill(
197:                         title: "Track Order".tr,
198:                         height: 5.5,
199:                         color: AppThemeData.primary300,
200:                         textColor: AppThemeData.grey50,
201:                         fontSizes: 16,
202:                         onPress: () async {
203:                           if (Constant.sectionConstantModel!.serviceTypeFlag == "ecommerce-service") {
204:                             Get.offAll(const DashBoardEcommerceScreen());
205:                             DashBoardEcommerceController controller = Get.put(DashBoardEcommerceController());
206:                             controller.selectedIndex.value = 3;
207:                           } else {
208:                             Get.offAll(const DashBoardScreen());
209:                             DashBoardController controller = Get.put(DashBoardController());
210:                             controller.selectedIndex.value = 3;
211:                           }
212:                         },
213:                       )
214:                       : RoundedButtonFill(
215:                         title: "Track Order".tr,
216:                         height: 5.5,
217:                         color: isDark ? AppThemeData.grey700 : AppThemeData.grey200,

196:                       ? RoundedButtonFill(
197:                         title: "Track Order".tr,
198:                         height: 5.5,
199:                         color: AppThemeData.primary300,
200:                         textColor: AppThemeData.grey50,
201:                         fontSizes: 16,
202:                         onPress: () async {
203:                           if (Constant.sectionConstantModel!.serviceTypeFlag == "ecommerce-service") {
204:                             Get.offAll(const DashBoardEcommerceScreen());
205:                             DashBoardEcommerceController controller = Get.put(DashBoardEcommerceController());
206:                             controller.selectedIndex.value = 3;
207:                           } else {
208:                             Get.offAll(const DashBoardScreen());
209:                             DashBoardController controller = Get.put(DashBoardController());
210:                             controller.selectedIndex.value = 3;
211:                           }
212:                         },
213:                       )
214:                       : RoundedButtonFill(
215:                         title: "Track Order".tr,
216:                         height: 5.5,
217:                         color: isDark ? AppThemeData.grey700 : AppThemeData.grey200,
218:                         textColor: isDark ? AppThemeData.grey900 : AppThemeData.grey50,

197:                         title: "Track Order".tr,
198:                         height: 5.5,
199:                         color: AppThemeData.primary300,
200:                         textColor: AppThemeData.grey50,
201:                         fontSizes: 16,
202:                         onPress: () async {
203:                           if (Constant.sectionConstantModel!.serviceTypeFlag == "ecommerce-service") {
204:                             Get.offAll(const DashBoardEcommerceScreen());
205:                             DashBoardEcommerceController controller = Get.put(DashBoardEcommerceController());
206:                             controller.selectedIndex.value = 3;
207:                           } else {
208:                             Get.offAll(const DashBoardScreen());
209:                             DashBoardController controller = Get.put(DashBoardController());
210:                             controller.selectedIndex.value = 3;
211:                           }
212:                         },
213:                       )
214:                       : RoundedButtonFill(
215:                         title: "Track Order".tr,
216:                         height: 5.5,
217:                         color: isDark ? AppThemeData.grey700 : AppThemeData.grey200,
218:                         textColor: isDark ? AppThemeData.grey900 : AppThemeData.grey50,
219:                         fontSizes: 16,

```

### FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\cart_screen\select_payment_screen.dart
```dart
168:                   ),
169:                   const SizedBox(width: 10),
170:                   value.name == "wallet"
171:                       ? Expanded(
172:                         child: Column(
173:                           crossAxisAlignment: CrossAxisAlignment.start,
174:                           children: [
175:                             Text(
176:                               value.name.capitalizeString(),
177:                               textAlign: TextAlign.start,
178:                               style: TextStyle(fontFamily: AppThemeData.medium, fontSize: 16, color: isDark ? AppThemeData.grey50 : AppThemeData.grey900),
179:                             ),
180:                             Text(
181:                               Constant.amountShow(amount: controller.userModel.value.walletAmount == null ? '0.0' : controller.userModel.value.walletAmount.toString()),
182:                               textAlign: TextAlign.start,
183:                               style: TextStyle(fontFamily: AppThemeData.semiBold, fontSize: 16, color: isDark ? AppThemeData.primary300 : AppThemeData.primary300),
184:                             ),
185:                           ],
186:                         ),
187:                       )
188:                       : Expanded(
189:                         child: Text(
190:                           value.name.capitalizeString(),

182:                               textAlign: TextAlign.start,
183:                               style: TextStyle(fontFamily: AppThemeData.semiBold, fontSize: 16, color: isDark ? AppThemeData.primary300 : AppThemeData.primary300),
184:                             ),
185:                           ],
186:                         ),
187:                       )
188:                       : Expanded(
189:                         child: Text(
190:                           value.name.capitalizeString(),
191:                           textAlign: TextAlign.start,
192:                           style: TextStyle(fontFamily: AppThemeData.medium, fontSize: 16, color: isDark ? AppThemeData.grey50 : AppThemeData.grey900),
193:                         ),
194:                       ),
195:                   const Expanded(child: SizedBox()),
196:                   Radio(
197:                     value: value.name,
198:                     groupValue: controller.selectedPaymentMethod.value,
199:                     activeColor: isDark ? AppThemeData.primary300 : AppThemeData.primary300,
200:                     onChanged: (value) {
201:                       controller.selectedPaymentMethod.value = value.toString();
202:                     },
203:                   ),
204:                 ],

```

### FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\chat_screens\chat_screen.dart
```dart
95:                             child: SvgPicture.asset("assets/icons/ic_picture_one.svg"),
96:                           ),
97:                           Flexible(
98:                             child: Padding(
99:                               padding: const EdgeInsets.only(left: 10),
100:                               child: TextField(
101:                                 textInputAction: TextInputAction.send,
102:                                 keyboardType: TextInputType.text,
103:                                 textCapitalization: TextCapitalization.sentences,
104:                                 controller: controller.messageController.value,
105:                                 decoration: InputDecoration(
106:                                   contentPadding: const EdgeInsets.only(top: 3, left: 10),
107:                                   focusedBorder: InputBorder.none,
108:                                   enabledBorder: InputBorder.none,
109:                                   hintText: 'Type message here....'.tr,
110:                                 ),
111:                                 onSubmitted: (value) async {
112:                                   if (controller.messageController.value.text.isNotEmpty) {
113:                                     controller.sendMessage(controller.messageController.value.text, null, '', 'text', controller);
114:                                     Timer(const Duration(milliseconds: 500), () => controller.scrollController.value.jumpTo(controller.scrollController.value.position.minScrollExtent));
115:                                     controller.messageController.value.clear();
116:                                   }
117:                                 },

```

### FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_details_screen.dart
```dart
244:                                         },
245:                                         child: Text(
246:                                           "View Timings".tr,
247:                                           textAlign: TextAlign.start,
248:                                           maxLines: 1,
249:                                           style: TextStyle(
250:                                             fontSize: 14,
251:                                             decoration: TextDecoration.underline,
252:                                             decorationColor: AppThemeData.ecommerce300,
253:                                             overflow: TextOverflow.ellipsis,
254:                                             fontFamily: AppThemeData.semiBold,
255:                                             fontWeight: FontWeight.w600,
256:                                             color: isDark ? AppThemeData.ecommerce300 : AppThemeData.ecommerce300,
257:                                           ),
258:                                         ),
259:                                       ),
260:                                       Padding(padding: const EdgeInsets.symmetric(horizontal: 10), child: Icon(Icons.circle, size: 5, color: isDark ? AppThemeData.grey400 : AppThemeData.grey500)),
261:                                       Text(
262:                                         "${Constant.amountShow(amount: controller.vendorModel.value.restaurantCost)} ${'for two'.tr}".tr,
263:                                         textAlign: TextAlign.start,
264:                                         maxLines: 1,
265:                                         style: TextStyle(
266:                                           fontSize: 14,

248:                                           maxLines: 1,
249:                                           style: TextStyle(
250:                                             fontSize: 14,
251:                                             decoration: TextDecoration.underline,
252:                                             decorationColor: AppThemeData.ecommerce300,
253:                                             overflow: TextOverflow.ellipsis,
254:                                             fontFamily: AppThemeData.semiBold,
255:                                             fontWeight: FontWeight.w600,
256:                                             color: isDark ? AppThemeData.ecommerce300 : AppThemeData.ecommerce300,
257:                                           ),
258:                                         ),
259:                                       ),
260:                                       Padding(padding: const EdgeInsets.symmetric(horizontal: 10), child: Icon(Icons.circle, size: 5, color: isDark ? AppThemeData.grey400 : AppThemeData.grey500)),
261:                                       Text(
262:                                         "${Constant.amountShow(amount: controller.vendorModel.value.restaurantCost)} ${'for two'.tr}".tr,
263:                                         textAlign: TextAlign.start,
264:                                         maxLines: 1,
265:                                         style: TextStyle(
266:                                           fontSize: 14,
267:                                           overflow: TextOverflow.ellipsis,
268:                                           fontFamily: AppThemeData.semiBold,
269:                                           fontWeight: FontWeight.w600,
270:                                           color: isDark ? AppThemeData.primary300 : AppThemeData.primary300,

```

### FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_restaurant_list_screen.dart
```dart
242:                                               ),
243:                                             ),
244:                                             const SizedBox(width: 10),
245:                                             Container(
246:                                               decoration: ShapeDecoration(
247:                                                 color:
248:                                                     isDark
249:                                                         ? AppThemeData
250:                                                             .ecommerce600
251:                                                         : AppThemeData
252:                                                             .ecommerce50,
253:                                                 shape: RoundedRectangleBorder(
254:                                                   borderRadius:
255:                                                       BorderRadius.circular(
256:                                                         120,
257:                                                       ),
258:                                                 ),
259:                                               ),
260:                                               child: Padding(
261:                                                 padding:
262:                                                     const EdgeInsets.symmetric(
263:                                                       horizontal: 12,
264:                                                       vertical: 8,

244:                                             const SizedBox(width: 10),
245:                                             Container(
246:                                               decoration: ShapeDecoration(
247:                                                 color:
248:                                                     isDark
249:                                                         ? AppThemeData
250:                                                             .ecommerce600
251:                                                         : AppThemeData
252:                                                             .ecommerce50,
253:                                                 shape: RoundedRectangleBorder(
254:                                                   borderRadius:
255:                                                       BorderRadius.circular(
256:                                                         120,
257:                                                       ),
258:                                                 ),
259:                                               ),
260:                                               child: Padding(
261:                                                 padding:
262:                                                     const EdgeInsets.symmetric(
263:                                                       horizontal: 12,
264:                                                       vertical: 8,
265:                                                     ),
266:                                                 child: Row(

265:                                                     ),
266:                                                 child: Row(
267:                                                   children: [
268:                                                     SvgPicture.asset(
269:                                                       "assets/icons/ic_map_distance.svg",
270:                                                       colorFilter:
271:                                                           ColorFilter.mode(
272:                                                             AppThemeData
273:                                                                 .ecommerce300,
274:                                                             BlendMode.srcIn,
275:                                                           ),
276:                                                     ),
277:                                                     const SizedBox(width: 5),
278:                                                     Text(
279:                                                       "${Constant.getDistance(lat1: vendorModel.latitude.toString(), lng1: vendorModel.longitude.toString(), lat2: Constant.selectedLocation.location!.latitude.toString(), lng2: Constant.selectedLocation.location!.longitude.toString())} ${Constant.distanceType}",
280:                                                       style: TextStyle(
281:                                                         color:
282:                                                             isDark
283:                                                                 ? AppThemeData
284:                                                                     .ecommerce300
285:                                                                 : AppThemeData
286:                                                                     .ecommerce300,
287:                                                         fontFamily:

276:                                                     ),
277:                                                     const SizedBox(width: 5),
278:                                                     Text(
279:                                                       "${Constant.getDistance(lat1: vendorModel.latitude.toString(), lng1: vendorModel.longitude.toString(), lat2: Constant.selectedLocation.location!.latitude.toString(), lng2: Constant.selectedLocation.location!.longitude.toString())} ${Constant.distanceType}",
280:                                                       style: TextStyle(
281:                                                         color:
282:                                                             isDark
283:                                                                 ? AppThemeData
284:                                                                     .ecommerce300
285:                                                                 : AppThemeData
286:                                                                     .ecommerce300,
287:                                                         fontFamily:
288:                                                             AppThemeData
289:                                                                 .semiBold,
290:                                                         fontWeight:
291:                                                             FontWeight.w600,
292:                                                       ),
293:                                                     ),
294:                                                   ],
295:                                                 ),
296:                                               ),
297:                                             ),
298:                                           ],

278:                                                     Text(
279:                                                       "${Constant.getDistance(lat1: vendorModel.latitude.toString(), lng1: vendorModel.longitude.toString(), lat2: Constant.selectedLocation.location!.latitude.toString(), lng2: Constant.selectedLocation.location!.longitude.toString())} ${Constant.distanceType}",
280:                                                       style: TextStyle(
281:                                                         color:
282:                                                             isDark
283:                                                                 ? AppThemeData
284:                                                                     .ecommerce300
285:                                                                 : AppThemeData
286:                                                                     .ecommerce300,
287:                                                         fontFamily:
288:                                                             AppThemeData
289:                                                                 .semiBold,
290:                                                         fontWeight:
291:                                                             FontWeight.w600,
292:                                                       ),
293:                                                     ),
294:                                                   ],
295:                                                 ),
296:                                               ),
297:                                             ),
298:                                           ],
299:                                         ),
300:                                       ),

```

### FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart
```dart
360:                                     ),
361:                                   ],
362:                                 ),
363:                               ),
364:                             ),
365:                             const SizedBox(width: 10),
366:                             Container(
367:                               decoration: ShapeDecoration(
368:                                 color: isDark ? AppThemeData.ecommerce600 : AppThemeData.ecommerce50,
369:                                 shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(120)),
370:                               ),
371:                               child: Padding(
372:                                 padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
373:                                 child: Row(
374:                                   children: [
375:                                     SvgPicture.asset("assets/icons/ic_map_distance.svg", colorFilter: ColorFilter.mode(AppThemeData.ecommerce300, BlendMode.srcIn)),
376:                                     const SizedBox(width: 5),
377:                                     Text(
378:                                       "${Constant.getDistance(lat1: vendorModel.latitude.toString(), lng1: vendorModel.longitude.toString(), lat2: Constant.selectedLocation.location!.latitude.toString(), lng2: Constant.selectedLocation.location!.longitude.toString())} ${Constant.distanceType}",
379:                                       style: TextStyle(color: isDark ? AppThemeData.ecommerce300 : AppThemeData.ecommerce300, fontFamily: AppThemeData.semiBold, fontWeight: FontWeight.w600),
380:                                     ),
381:                                   ],
382:                                 ),

367:                               decoration: ShapeDecoration(
368:                                 color: isDark ? AppThemeData.ecommerce600 : AppThemeData.ecommerce50,
369:                                 shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(120)),
370:                               ),
371:                               child: Padding(
372:                                 padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
373:                                 child: Row(
374:                                   children: [
375:                                     SvgPicture.asset("assets/icons/ic_map_distance.svg", colorFilter: ColorFilter.mode(AppThemeData.ecommerce300, BlendMode.srcIn)),
376:                                     const SizedBox(width: 5),
377:                                     Text(
378:                                       "${Constant.getDistance(lat1: vendorModel.latitude.toString(), lng1: vendorModel.longitude.toString(), lat2: Constant.selectedLocation.location!.latitude.toString(), lng2: Constant.selectedLocation.location!.longitude.toString())} ${Constant.distanceType}",
379:                                       style: TextStyle(color: isDark ? AppThemeData.ecommerce300 : AppThemeData.ecommerce300, fontFamily: AppThemeData.semiBold, fontWeight: FontWeight.w600),
380:                                     ),
381:                                   ],
382:                                 ),
383:                               ),
384:                             ),
385:                           ],
386:                         ),
387:                       ),
388:                     ],
389:                   ),

371:                               child: Padding(
372:                                 padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
373:                                 child: Row(
374:                                   children: [
375:                                     SvgPicture.asset("assets/icons/ic_map_distance.svg", colorFilter: ColorFilter.mode(AppThemeData.ecommerce300, BlendMode.srcIn)),
376:                                     const SizedBox(width: 5),
377:                                     Text(
378:                                       "${Constant.getDistance(lat1: vendorModel.latitude.toString(), lng1: vendorModel.longitude.toString(), lat2: Constant.selectedLocation.location!.latitude.toString(), lng2: Constant.selectedLocation.location!.longitude.toString())} ${Constant.distanceType}",
379:                                       style: TextStyle(color: isDark ? AppThemeData.ecommerce300 : AppThemeData.ecommerce300, fontFamily: AppThemeData.semiBold, fontWeight: FontWeight.w600),
380:                                     ),
381:                                   ],
382:                                 ),
383:                               ),
384:                             ),
385:                           ],
386:                         ),
387:                       ),
388:                     ],
389:                   ),
390:                   const SizedBox(height: 15),
391:                   Padding(
392:                     padding: const EdgeInsets.symmetric(horizontal: 16),
393:                     child: Column(

507:                                     ),
508:                                   ],
509:                                 ),
510:                               ),
511:                             ),
512:                             const SizedBox(width: 10),
513:                             Container(
514:                               decoration: ShapeDecoration(
515:                                 color: isDark ? AppThemeData.ecommerce600 : AppThemeData.ecommerce50,
516:                                 shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(120)),
517:                               ),
518:                               child: Padding(
519:                                 padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
520:                                 child: Row(
521:                                   children: [
522:                                     SvgPicture.asset("assets/icons/ic_map_distance.svg", colorFilter: ColorFilter.mode(AppThemeData.ecommerce300, BlendMode.srcIn)),
523:                                     const SizedBox(width: 5),
524:                                     Text(
525:                                       "${Constant.getDistance(lat1: vendorModel.latitude.toString(), lng1: vendorModel.longitude.toString(), lat2: Constant.selectedLocation.location!.latitude.toString(), lng2: Constant.selectedLocation.location!.longitude.toString())} ${Constant.distanceType}",
526:                                       style: TextStyle(color: isDark ? AppThemeData.ecommerce300 : AppThemeData.ecommerce300, fontFamily: AppThemeData.semiBold, fontWeight: FontWeight.w600),
527:                                     ),
528:                                   ],
529:                                 ),

514:                               decoration: ShapeDecoration(
515:                                 color: isDark ? AppThemeData.ecommerce600 : AppThemeData.ecommerce50,
516:                                 shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(120)),
517:                               ),
518:                               child: Padding(
519:                                 padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
520:                                 child: Row(
521:                                   children: [
522:                                     SvgPicture.asset("assets/icons/ic_map_distance.svg", colorFilter: ColorFilter.mode(AppThemeData.ecommerce300, BlendMode.srcIn)),
523:                                     const SizedBox(width: 5),
524:                                     Text(
525:                                       "${Constant.getDistance(lat1: vendorModel.latitude.toString(), lng1: vendorModel.longitude.toString(), lat2: Constant.selectedLocation.location!.latitude.toString(), lng2: Constant.selectedLocation.location!.longitude.toString())} ${Constant.distanceType}",
526:                                       style: TextStyle(color: isDark ? AppThemeData.ecommerce300 : AppThemeData.ecommerce300, fontFamily: AppThemeData.semiBold, fontWeight: FontWeight.w600),
527:                                     ),
528:                                   ],
529:                                 ),
530:                               ),
531:                             ),
532:                           ],
533:                         ),
534:                       ),
535:                     ],
536:                   ),

518:                               child: Padding(
519:                                 padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
520:                                 child: Row(
521:                                   children: [
522:                                     SvgPicture.asset("assets/icons/ic_map_distance.svg", colorFilter: ColorFilter.mode(AppThemeData.ecommerce300, BlendMode.srcIn)),
523:                                     const SizedBox(width: 5),
524:                                     Text(
525:                                       "${Constant.getDistance(lat1: vendorModel.latitude.toString(), lng1: vendorModel.longitude.toString(), lat2: Constant.selectedLocation.location!.latitude.toString(), lng2: Constant.selectedLocation.location!.longitude.toString())} ${Constant.distanceType}",
526:                                       style: TextStyle(color: isDark ? AppThemeData.ecommerce300 : AppThemeData.ecommerce300, fontFamily: AppThemeData.semiBold, fontWeight: FontWeight.w600),
527:                                     ),
528:                                   ],
529:                                 ),
530:                               ),
531:                             ),
532:                           ],
533:                         ),
534:                       ),
535:                     ],
536:                   ),
537:                   const SizedBox(height: 15),
538:                   Padding(
539:                     padding: const EdgeInsets.symmetric(horizontal: 16),
540:                     child: Column(

```

### FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart
```dart
300:                                                                                     ),
301:                                                                                   ],
302:                                                                                 ),
303:                                                                               ),
304:                                                                               const SizedBox(width: 6),
305:                                                                               Container(
306:                                                                                 padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 7),
307:                                                                                 decoration: ShapeDecoration(
308:                                                                                   color: isDark ? AppThemeData.ecommerce600 : AppThemeData.ecommerce50,
309:                                                                                   shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(120)),
310:                                                                                 ),
311:                                                                                 child: Row(
312:                                                                                   children: [
313:                                                                                     SvgPicture.asset(
314:                                                                                       "assets/icons/ic_map_distance.svg",
315:                                                                                       colorFilter: ColorFilter.mode(AppThemeData.ecommerce300, BlendMode.srcIn),
316:                                                                                     ),
317:                                                                                     const SizedBox(width: 5),
318:                                                                                     Text(
319:                                                                                       "${Constant.getDistance(lat1: vendorModel.latitude.toString(), lng1: vendorModel.longitude.toString(), lat2: Constant.selectedLocation.location!.latitude.toString(), lng2: Constant.selectedLocation.location!.longitude.toString())} ${Constant.distanceType}",
320:                                                                                       style: TextStyle(
321:                                                                                         fontSize: 14,
322:                                                                                         color: isDark ? AppThemeData.ecommerce300 : AppThemeData.ecommerce300,

307:                                                                                 decoration: ShapeDecoration(
308:                                                                                   color: isDark ? AppThemeData.ecommerce600 : AppThemeData.ecommerce50,
309:                                                                                   shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(120)),
310:                                                                                 ),
311:                                                                                 child: Row(
312:                                                                                   children: [
313:                                                                                     SvgPicture.asset(
314:                                                                                       "assets/icons/ic_map_distance.svg",
315:                                                                                       colorFilter: ColorFilter.mode(AppThemeData.ecommerce300, BlendMode.srcIn),
316:                                                                                     ),
317:                                                                                     const SizedBox(width: 5),
318:                                                                                     Text(
319:                                                                                       "${Constant.getDistance(lat1: vendorModel.latitude.toString(), lng1: vendorModel.longitude.toString(), lat2: Constant.selectedLocation.location!.latitude.toString(), lng2: Constant.selectedLocation.location!.longitude.toString())} ${Constant.distanceType}",
320:                                                                                       style: TextStyle(
321:                                                                                         fontSize: 14,
322:                                                                                         color: isDark ? AppThemeData.ecommerce300 : AppThemeData.ecommerce300,
323:                                                                                         fontFamily: AppThemeData.semiBold,
324:                                                                                         fontWeight: FontWeight.w600,
325:                                                                                       ),
326:                                                                                     ),
327:                                                                                   ],
328:                                                                                 ),
329:                                                                               ),

314:                                                                                       "assets/icons/ic_map_distance.svg",
315:                                                                                       colorFilter: ColorFilter.mode(AppThemeData.ecommerce300, BlendMode.srcIn),
316:                                                                                     ),
317:                                                                                     const SizedBox(width: 5),
318:                                                                                     Text(
319:                                                                                       "${Constant.getDistance(lat1: vendorModel.latitude.toString(), lng1: vendorModel.longitude.toString(), lat2: Constant.selectedLocation.location!.latitude.toString(), lng2: Constant.selectedLocation.location!.longitude.toString())} ${Constant.distanceType}",
320:                                                                                       style: TextStyle(
321:                                                                                         fontSize: 14,
322:                                                                                         color: isDark ? AppThemeData.ecommerce300 : AppThemeData.ecommerce300,
323:                                                                                         fontFamily: AppThemeData.semiBold,
324:                                                                                         fontWeight: FontWeight.w600,
325:                                                                                       ),
326:                                                                                     ),
327:                                                                                   ],
328:                                                                                 ),
329:                                                                               ),
330:                                                                             ],
331:                                                                           ),
332:                                                                         ),
333:                                                                       ],
334:                                                                     ),
335:                                                                     const SizedBox(height: 15),
336:                                                                     Padding(

```

### FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\gift_card\gift_card_screen.dart
```dart
222:                               borderRadius: BorderRadius.circular(10),
223:                               child: NetworkImageWidget(imageUrl: controller.selectedGiftCard.value.image.toString(), height: Responsive.height(20, context), width: Responsive.width(100, context)),
224:                             ),
225:                             const SizedBox(height: 10),
226:                             Padding(
227:                               padding: const EdgeInsets.symmetric(vertical: 10),
228:                               child: Container(
229:                                 padding: const EdgeInsets.all(8),
230:                                 decoration: ShapeDecoration(color: AppThemeData.ecommerce50, shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12))),
231:                                 child: Text(
232:                                   'Complete payment and share this e-gift card with loved ones using any app'.tr,
233:                                   style: TextStyle(color: AppThemeData.ecommerce300, fontSize: 14, fontFamily: AppThemeData.medium, fontWeight: FontWeight.w500),
234:                                 ),
235:                               ),
236:                             ),
237:                             Column(
238:                               crossAxisAlignment: CrossAxisAlignment.start,
239:                               children: [
240:                                 Text(
241:                                   "Bill Details".tr,
242:                                   textAlign: TextAlign.start,
243:                                   style: TextStyle(fontFamily: AppThemeData.semiBold, color: isDark ? AppThemeData.grey50 : AppThemeData.grey900, fontSize: 16),
244:                                 ),

225:                             const SizedBox(height: 10),
226:                             Padding(
227:                               padding: const EdgeInsets.symmetric(vertical: 10),
228:                               child: Container(
229:                                 padding: const EdgeInsets.all(8),
230:                                 decoration: ShapeDecoration(color: AppThemeData.ecommerce50, shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12))),
231:                                 child: Text(
232:                                   'Complete payment and share this e-gift card with loved ones using any app'.tr,
233:                                   style: TextStyle(color: AppThemeData.ecommerce300, fontSize: 14, fontFamily: AppThemeData.medium, fontWeight: FontWeight.w500),
234:                                 ),
235:                               ),
236:                             ),
237:                             Column(
238:                               crossAxisAlignment: CrossAxisAlignment.start,
239:                               children: [
240:                                 Text(
241:                                   "Bill Details".tr,
242:                                   textAlign: TextAlign.start,
243:                                   style: TextStyle(fontFamily: AppThemeData.semiBold, color: isDark ? AppThemeData.grey50 : AppThemeData.grey900, fontSize: 16),
244:                                 ),
245:                                 const SizedBox(height: 10),
246:                                 Container(
247:                                   width: Responsive.width(100, context),

```

### FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\gift_card\history_gift_card.dart
```dart
42:                                       children: [
43:                                         Row(
44:                                           children: [
45:                                             Expanded(
46:                                               child: Text(
47:                                                 giftCardOrderModel.giftTitle.toString(),
48:                                                 style: TextStyle(
49:                                                   fontSize: 16,
50:                                                   color: isDark ? AppThemeData.ecommerce300 : AppThemeData.ecommerce300,
51:                                                   fontFamily: AppThemeData.semiBold,
52:                                                   fontWeight: FontWeight.w500,
53:                                                 ),
54:                                               ),
55:                                             ),
56:                                             Text(
57:                                               Constant.amountShow(amount: giftCardOrderModel.price.toString()),
58:                                               style: TextStyle(
59:                                                 fontSize: 16,
60:                                                 color: isDark ? AppThemeData.grey50 : AppThemeData.grey900,
61:                                                 fontFamily: AppThemeData.semiBold,
62:                                                 fontWeight: FontWeight.w500,
63:                                               ),
64:                                             ),

```

### FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\gift_card\select_gift_payment_screen.dart
```dart
180:               ),
181:               const SizedBox(width: 10),
182:               value.name == "wallet"
183:                   ? Expanded(
184:                     child: Column(
185:                       crossAxisAlignment: CrossAxisAlignment.start,
186:                       children: [
187:                         Text(
188:                           value.name.capitalizeString(),
189:                           textAlign: TextAlign.start,
190:                           style: TextStyle(fontFamily: AppThemeData.medium, fontSize: 16, color: isDark ? AppThemeData.grey50 : AppThemeData.grey900),
191:                         ),
192:                         Text(
193:                           Constant.amountShow(amount: controller.userModel.value.walletAmount == null ? '0.0' : controller.userModel.value.walletAmount.toString()),
194:                           textAlign: TextAlign.start,
195:                           style: TextStyle(fontFamily: AppThemeData.semiBold, fontSize: 16, color: isDark ? AppThemeData.primary300 : AppThemeData.primary300),
196:                         ),
197:                       ],
198:                     ),
199:                   )
200:                   : Expanded(
201:                     child: Text(
202:                       value.name.capitalizeString(),

194:                           textAlign: TextAlign.start,
195:                           style: TextStyle(fontFamily: AppThemeData.semiBold, fontSize: 16, color: isDark ? AppThemeData.primary300 : AppThemeData.primary300),
196:                         ),
197:                       ],
198:                     ),
199:                   )
200:                   : Expanded(
201:                     child: Text(
202:                       value.name.capitalizeString(),
203:                       textAlign: TextAlign.start,
204:                       style: TextStyle(fontFamily: AppThemeData.medium, fontSize: 16, color: isDark ? AppThemeData.grey50 : AppThemeData.grey900),
205:                     ),
206:                   ),
207:               const Expanded(child: SizedBox()),
208:               Radio(
209:                 value: value.name,
210:                 groupValue: controller.selectedPaymentMethod.value,
211:                 activeColor: isDark ? AppThemeData.primary300 : AppThemeData.primary300,
212:                 onChanged: (value) {
213:                   controller.selectedPaymentMethod.value = value.toString();
214:                 },
215:               ),
216:             ],

```

### FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\category_restaurant_screen.dart
```dart
119:                                                     ),
120:                                                   ],
121:                                                 ),
122:                                               ),
123:                                             ),
124:                                             const SizedBox(width: 6),
125:                                             Container(
126:                                               decoration: ShapeDecoration(
127:                                                 color: isDark ? AppThemeData.ecommerce600 : AppThemeData.ecommerce50,
128:                                                 shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(120)),
129:                                               ),
130:                                               child: Padding(
131:                                                 padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 7),
132:                                                 child: Row(
133:                                                   children: [
134:                                                     SvgPicture.asset("assets/icons/ic_map_distance.svg", colorFilter: ColorFilter.mode(AppThemeData.ecommerce300, BlendMode.srcIn)),
135:                                                     const SizedBox(width: 5),
136:                                                     Text(
137:                                                       "${Constant.getDistance(lat1: vendorModel.latitude.toString(), lng1: vendorModel.longitude.toString(), lat2: Constant.selectedLocation.location!.latitude.toString(), lng2: Constant.selectedLocation.location!.longitude.toString())} ${Constant.distanceType}",
138:                                                       style: TextStyle(
139:                                                         fontSize: 14,
140:                                                         color: isDark ? AppThemeData.ecommerce300 : AppThemeData.ecommerce300,
141:                                                         fontFamily: AppThemeData.semiBold,

126:                                               decoration: ShapeDecoration(
127:                                                 color: isDark ? AppThemeData.ecommerce600 : AppThemeData.ecommerce50,
128:                                                 shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(120)),
129:                                               ),
130:                                               child: Padding(
131:                                                 padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 7),
132:                                                 child: Row(
133:                                                   children: [
134:                                                     SvgPicture.asset("assets/icons/ic_map_distance.svg", colorFilter: ColorFilter.mode(AppThemeData.ecommerce300, BlendMode.srcIn)),
135:                                                     const SizedBox(width: 5),
136:                                                     Text(
137:                                                       "${Constant.getDistance(lat1: vendorModel.latitude.toString(), lng1: vendorModel.longitude.toString(), lat2: Constant.selectedLocation.location!.latitude.toString(), lng2: Constant.selectedLocation.location!.longitude.toString())} ${Constant.distanceType}",
138:                                                       style: TextStyle(
139:                                                         fontSize: 14,
140:                                                         color: isDark ? AppThemeData.ecommerce300 : AppThemeData.ecommerce300,
141:                                                         fontFamily: AppThemeData.semiBold,
142:                                                         fontWeight: FontWeight.w600,
143:                                                       ),
144:                                                     ),
145:                                                   ],
146:                                                 ),
147:                                               ),
148:                                             ),

132:                                                 child: Row(
133:                                                   children: [
134:                                                     SvgPicture.asset("assets/icons/ic_map_distance.svg", colorFilter: ColorFilter.mode(AppThemeData.ecommerce300, BlendMode.srcIn)),
135:                                                     const SizedBox(width: 5),
136:                                                     Text(
137:                                                       "${Constant.getDistance(lat1: vendorModel.latitude.toString(), lng1: vendorModel.longitude.toString(), lat2: Constant.selectedLocation.location!.latitude.toString(), lng2: Constant.selectedLocation.location!.longitude.toString())} ${Constant.distanceType}",
138:                                                       style: TextStyle(
139:                                                         fontSize: 14,
140:                                                         color: isDark ? AppThemeData.ecommerce300 : AppThemeData.ecommerce300,
141:                                                         fontFamily: AppThemeData.semiBold,
142:                                                         fontWeight: FontWeight.w600,
143:                                                       ),
144:                                                     ),
145:                                                   ],
146:                                                 ),
147:                                               ),
148:                                             ),
149:                                           ],
150:                                         ),
151:                                       ),
152:                                     ],
153:                                   ),
154:                                   const SizedBox(height: 15),

```

### FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\discount_restaurant_list_screen.dart
```dart
66:                                             gradient: LinearGradient(begin: const Alignment(-0.00, -1.00), end: const Alignment(0, 1), colors: [Colors.black.withOpacity(0), const Color(0xFF111827)]),
67:                                           ),
68:                                         ),
69:                                         Positioned(
70:                                           top: 10,
71:                                           left: 10,
72:                                           child: Container(
73:                                             decoration: ShapeDecoration(
74:                                               color: isDark ? AppThemeData.ecommerce300 : AppThemeData.ecommerce300,
75:                                               shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(120)),
76:                                             ),
77:                                             child: Padding(
78:                                               padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
79:                                               child: Text(
80:                                                 "${offerModel.discountType == "Fix Price" ? Constant.currencyModel!.symbol : ""}${offerModel.discount}${offerModel.discountType == "Percentage" ? "% off".toUpperCase().tr : " off".toUpperCase().tr}",
81:                                                 textAlign: TextAlign.start,
82:                                                 maxLines: 1,
83:                                                 style: TextStyle(overflow: TextOverflow.ellipsis, fontFamily: AppThemeData.semiBold, color: isDark ? AppThemeData.grey50 : AppThemeData.grey50),
84:                                               ),
85:                                             ),
86:                                           ),
87:                                         ),
88:                                       ],

237:   //                     ),
238:   //                   ),
239:   //                 ),
240:   //                 const SizedBox(
241:   //                   width: 10,
242:   //                 ),
243:   //                 Container(
244:   //                   decoration: ShapeDecoration(
245:   //                     color: isDark ? AppThemeData.ecommerce600 : AppThemeData.ecommerce50,
246:   //                     shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(120)),
247:   //                   ),
248:   //                   child: Padding(
249:   //                     padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
250:   //                     child: Row(
251:   //                       children: [
252:   //                         SvgPicture.asset(
253:   //                           "assets/icons/ic_map_distance.svg",
254:   //                           colorFilter: const ColorFilter.mode(AppThemeData.ecommerce300, BlendMode.srcIn),
255:   //                         ),
256:   //                         const SizedBox(
257:   //                           width: 5,
258:   //                         ),
259:   //                         Text(

246:   //                     shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(120)),
247:   //                   ),
248:   //                   child: Padding(
249:   //                     padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
250:   //                     child: Row(
251:   //                       children: [
252:   //                         SvgPicture.asset(
253:   //                           "assets/icons/ic_map_distance.svg",
254:   //                           colorFilter: const ColorFilter.mode(AppThemeData.ecommerce300, BlendMode.srcIn),
255:   //                         ),
256:   //                         const SizedBox(
257:   //                           width: 5,
258:   //                         ),
259:   //                         Text(
260:   //                           "${Constant.getDistance(
261:   //                             lat1: vendorModel.latitude.toString(),
262:   //                             lng1: vendorModel.longitude.toString(),
263:   //                             lat2: Constant.selectedLocation.location!.latitude.toString(),
264:   //                             lng2: Constant.selectedLocation.location!.longitude.toString(),
265:   //                           )} ${Constant.distanceType}",
266:   //                           style: TextStyle(
267:   //                             color: isDark ? AppThemeData.ecommerce300 : AppThemeData.ecommerce300,
268:   //                             fontFamily: AppThemeData.semiBold,

259:   //                         Text(
260:   //                           "${Constant.getDistance(
261:   //                             lat1: vendorModel.latitude.toString(),
262:   //                             lng1: vendorModel.longitude.toString(),
263:   //                             lat2: Constant.selectedLocation.location!.latitude.toString(),
264:   //                             lng2: Constant.selectedLocation.location!.longitude.toString(),
265:   //                           )} ${Constant.distanceType}",
266:   //                           style: TextStyle(
267:   //                             color: isDark ? AppThemeData.ecommerce300 : AppThemeData.ecommerce300,
268:   //                             fontFamily: AppThemeData.semiBold,
269:   //                             fontWeight: FontWeight.w600,
270:   //                           ),
271:   //                         ),
272:   //                       ],
273:   //                     ),
274:   //                   ),
275:   //                 ),
276:   //               ],
277:   //             ),
278:   //           )
279:   //         ],
280:   //       ),
281:   //       const SizedBox(

```

### FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart
```dart
66:       init: FoodHomeController(),
67:       builder: (controller) {
68:         return Scaffold(
69:           backgroundColor: isDark ? AppThemeData.grey900 : AppThemeData.grey50,
70:           body: Container(
71:             decoration: BoxDecoration(
72:               gradient: LinearGradient(
73:                 begin: const Alignment(0.00, -3),
74:                 colors: [isDark ? AppThemeData.ecommerce300 : AppThemeData.ecommerce50, isDark ? AppThemeData.surfaceDark : AppThemeData.surface],
75:                 end: const Alignment(0, 1),
76:               ),
77:             ),
78:             child:
79:                 controller.isLoading.value
80:                     ? _buildHomeShimmer(isDark)
81:                     : Constant.isZoneAvailable == false || controller.allNearestRestaurant.isEmpty
82:                     ? Padding(
83:                       padding: const EdgeInsets.symmetric(horizontal: 16),
84:                       child: Column(
85:                         mainAxisAlignment: MainAxisAlignment.center,
86:                         crossAxisAlignment: CrossAxisAlignment.center,
87:                         children: [
88:                           Image.asset("assets/images/location.gif", height: 120),

258:                                                   style: TextStyle(
259:                                                     fontSize: 14,
260:                                                     overflow: TextOverflow.ellipsis,
261:                                                     fontFamily: AppThemeData.semiBold,
262:                                                     fontWeight: FontWeight.w600,
263:                                                     color: isDark ? AppThemeData.grey50 : AppThemeData.grey50,
264:                                                   ),
265:                                                 ),
266:                                                 badgeStyle: badges.BadgeStyle(shape: badges.BadgeShape.circle, badgeColor: AppThemeData.ecommerce300),
267:                                                 child: InkWell(
268:                                                   onTap: () async {
269:                                                     (await Get.to(const CartScreen()));
270:                                                     controller.getCartData();
271:                                                   },
272:                                                   child: ClipOval(
273:                                                     child: Container(
274:                                                       width: 42,
275:                                                       height: 42,
276:                                                       decoration: ShapeDecoration(
277:                                                         shape: RoundedRectangleBorder(
278:                                                           side: BorderSide(width: 1, color: isDark ? AppThemeData.grey700 : AppThemeData.grey200),
279:                                                           borderRadius: BorderRadius.circular(120),
280:                                                         ),

801:                                   ),
802:                                 ],
803:                               ),
804:                             ),
805:                             const SizedBox(width: 6),
806:                             Container(
807:                               padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 7),
808:                               decoration: ShapeDecoration(
809:                                 color: isDark ? AppThemeData.ecommerce600 : AppThemeData.ecommerce50,
810:                                 shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(120)),
811:                               ),
812:                               child: Row(
813:                                 children: [
814:                                   SvgPicture.asset("assets/icons/ic_map_distance.svg", colorFilter: ColorFilter.mode(AppThemeData.ecommerce300, BlendMode.srcIn)),
815:                                   const SizedBox(width: 5),
816:                                   Text(
817:                                     "${Constant.getDistance(lat1: vendorModel.latitude.toString(), lng1: vendorModel.longitude.toString(), lat2: Constant.selectedLocation.location!.latitude.toString(), lng2: Constant.selectedLocation.location!.longitude.toString())} ${Constant.distanceType}",
818:                                     style: TextStyle(
819:                                       fontSize: 14,
820:                                       color: isDark ? AppThemeData.ecommerce300 : AppThemeData.ecommerce300,
821:                                       fontFamily: AppThemeData.semiBold,
822:                                       fontWeight: FontWeight.w600,
823:                                     ),

806:                             Container(
807:                               padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 7),
808:                               decoration: ShapeDecoration(
809:                                 color: isDark ? AppThemeData.ecommerce600 : AppThemeData.ecommerce50,
810:                                 shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(120)),
811:                               ),
812:                               child: Row(
813:                                 children: [
814:                                   SvgPicture.asset("assets/icons/ic_map_distance.svg", colorFilter: ColorFilter.mode(AppThemeData.ecommerce300, BlendMode.srcIn)),
815:                                   const SizedBox(width: 5),
816:                                   Text(
817:                                     "${Constant.getDistance(lat1: vendorModel.latitude.toString(), lng1: vendorModel.longitude.toString(), lat2: Constant.selectedLocation.location!.latitude.toString(), lng2: Constant.selectedLocation.location!.longitude.toString())} ${Constant.distanceType}",
818:                                     style: TextStyle(
819:                                       fontSize: 14,
820:                                       color: isDark ? AppThemeData.ecommerce300 : AppThemeData.ecommerce300,
821:                                       fontFamily: AppThemeData.semiBold,
822:                                       fontWeight: FontWeight.w600,
823:                                     ),
824:                                   ),
825:                                 ],
826:                               ),
827:                             ),
828:                           ],

812:                               child: Row(
813:                                 children: [
814:                                   SvgPicture.asset("assets/icons/ic_map_distance.svg", colorFilter: ColorFilter.mode(AppThemeData.ecommerce300, BlendMode.srcIn)),
815:                                   const SizedBox(width: 5),
816:                                   Text(
817:                                     "${Constant.getDistance(lat1: vendorModel.latitude.toString(), lng1: vendorModel.longitude.toString(), lat2: Constant.selectedLocation.location!.latitude.toString(), lng2: Constant.selectedLocation.location!.longitude.toString())} ${Constant.distanceType}",
818:                                     style: TextStyle(
819:                                       fontSize: 14,
820:                                       color: isDark ? AppThemeData.ecommerce300 : AppThemeData.ecommerce300,
821:                                       fontFamily: AppThemeData.semiBold,
822:                                       fontWeight: FontWeight.w600,
823:                                     ),
824:                                   ),
825:                                 ],
826:                               ),
827:                             ),
828:                           ],
829:                         ),
830:                       ),
831:                     ],
832:                   ),
833:                   const SizedBox(height: 15),
834:                   Padding(

973:                                   ),
974:                                 ],
975:                               ),
976:                             ),
977:                             const SizedBox(width: 6),
978:                             Container(
979:                               padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 7),
980:                               decoration: ShapeDecoration(
981:                                 color: isDark ? AppThemeData.ecommerce600 : AppThemeData.ecommerce50,
982:                                 shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(120)),
983:                               ),
984:                               child: Row(
985:                                 children: [
986:                                   SvgPicture.asset("assets/icons/ic_map_distance.svg", colorFilter: ColorFilter.mode(AppThemeData.ecommerce300, BlendMode.srcIn)),
987:                                   const SizedBox(width: 5),
988:                                   Text(
989:                                     "${Constant.getDistance(lat1: vendorModel.latitude.toString(), lng1: vendorModel.longitude.toString(), lat2: Constant.selectedLocation.location!.latitude.toString(), lng2: Constant.selectedLocation.location!.longitude.toString())} ${Constant.distanceType}",
990:                                     style: TextStyle(
991:                                       fontSize: 14,
992:                                       color: isDark ? AppThemeData.ecommerce300 : AppThemeData.ecommerce300,
993:                                       fontFamily: AppThemeData.semiBold,
994:                                       fontWeight: FontWeight.w600,
995:                                     ),

978:                             Container(
979:                               padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 7),
980:                               decoration: ShapeDecoration(
981:                                 color: isDark ? AppThemeData.ecommerce600 : AppThemeData.ecommerce50,
982:                                 shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(120)),
983:                               ),
984:                               child: Row(
985:                                 children: [
986:                                   SvgPicture.asset("assets/icons/ic_map_distance.svg", colorFilter: ColorFilter.mode(AppThemeData.ecommerce300, BlendMode.srcIn)),
987:                                   const SizedBox(width: 5),
988:                                   Text(
989:                                     "${Constant.getDistance(lat1: vendorModel.latitude.toString(), lng1: vendorModel.longitude.toString(), lat2: Constant.selectedLocation.location!.latitude.toString(), lng2: Constant.selectedLocation.location!.longitude.toString())} ${Constant.distanceType}",
990:                                     style: TextStyle(
991:                                       fontSize: 14,
992:                                       color: isDark ? AppThemeData.ecommerce300 : AppThemeData.ecommerce300,
993:                                       fontFamily: AppThemeData.semiBold,
994:                                       fontWeight: FontWeight.w600,
995:                                     ),
996:                                   ),
997:                                 ],
998:                               ),
999:                             ),
1000:                           ],

984:                               child: Row(
985:                                 children: [
986:                                   SvgPicture.asset("assets/icons/ic_map_distance.svg", colorFilter: ColorFilter.mode(AppThemeData.ecommerce300, BlendMode.srcIn)),
987:                                   const SizedBox(width: 5),
988:                                   Text(
989:                                     "${Constant.getDistance(lat1: vendorModel.latitude.toString(), lng1: vendorModel.longitude.toString(), lat2: Constant.selectedLocation.location!.latitude.toString(), lng2: Constant.selectedLocation.location!.longitude.toString())} ${Constant.distanceType}",
990:                                     style: TextStyle(
991:                                       fontSize: 14,
992:                                       color: isDark ? AppThemeData.ecommerce300 : AppThemeData.ecommerce300,
993:                                       fontFamily: AppThemeData.semiBold,
994:                                       fontWeight: FontWeight.w600,
995:                                     ),
996:                                   ),
997:                                 ],
998:                               ),
999:                             ),
1000:                           ],
1001:                         ),
1002:                       ),
1003:                     ],
1004:                   ),
1005:                   const SizedBox(height: 15),
1006:                   Padding(

1981:                                                             ),
1982:                                                           ],
1983:                                                         ),
1984:                                                       ),
1985:                                                     ),
1986:                                                     const SizedBox(width: 10),
1987:                                                     Container(
1988:                                                       decoration: ShapeDecoration(
1989:                                                         color: isDark ? AppThemeData.ecommerce600 : AppThemeData.ecommerce50,
1990:                                                         shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(120)),
1991:                                                       ),
1992:                                                       child: Padding(
1993:                                                         padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
1994:                                                         child: Row(
1995:                                                           children: [
1996:                                                             SvgPicture.asset("assets/icons/ic_map_distance.svg", colorFilter: ColorFilter.mode(AppThemeData.ecommerce300, BlendMode.srcIn)),
1997:                                                             const SizedBox(width: 5),
1998:                                                             Text(
1999:                                                               "${Constant.getDistance(lat1: vendorModel.latitude.toString(), lng1: vendorModel.longitude.toString(), lat2: Constant.selectedLocation.location!.latitude.toString(), lng2: Constant.selectedLocation.location!.longitude.toString())} ${Constant.distanceType}",
2000:                                                               style: TextStyle(
2001:                                                                 color: isDark ? AppThemeData.ecommerce300 : AppThemeData.ecommerce300,
2002:                                                                 fontFamily: AppThemeData.semiBold,
2003:                                                                 fontWeight: FontWeight.w600,

1988:                                                       decoration: ShapeDecoration(
1989:                                                         color: isDark ? AppThemeData.ecommerce600 : AppThemeData.ecommerce50,
1990:                                                         shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(120)),
1991:                                                       ),
1992:                                                       child: Padding(
1993:                                                         padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
1994:                                                         child: Row(
1995:                                                           children: [
1996:                                                             SvgPicture.asset("assets/icons/ic_map_distance.svg", colorFilter: ColorFilter.mode(AppThemeData.ecommerce300, BlendMode.srcIn)),
1997:                                                             const SizedBox(width: 5),
1998:                                                             Text(
1999:                                                               "${Constant.getDistance(lat1: vendorModel.latitude.toString(), lng1: vendorModel.longitude.toString(), lat2: Constant.selectedLocation.location!.latitude.toString(), lng2: Constant.selectedLocation.location!.longitude.toString())} ${Constant.distanceType}",
2000:                                                               style: TextStyle(
2001:                                                                 color: isDark ? AppThemeData.ecommerce300 : AppThemeData.ecommerce300,
2002:                                                                 fontFamily: AppThemeData.semiBold,
2003:                                                                 fontWeight: FontWeight.w600,
2004:                                                               ),
2005:                                                             ),
2006:                                                           ],
2007:                                                         ),
2008:                                                       ),
2009:                                                     ),
2010:                                                   ],

1993:                                                         padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
1994:                                                         child: Row(
1995:                                                           children: [
1996:                                                             SvgPicture.asset("assets/icons/ic_map_distance.svg", colorFilter: ColorFilter.mode(AppThemeData.ecommerce300, BlendMode.srcIn)),
1997:                                                             const SizedBox(width: 5),
1998:                                                             Text(
1999:                                                               "${Constant.getDistance(lat1: vendorModel.latitude.toString(), lng1: vendorModel.longitude.toString(), lat2: Constant.selectedLocation.location!.latitude.toString(), lng2: Constant.selectedLocation.location!.longitude.toString())} ${Constant.distanceType}",
2000:                                                               style: TextStyle(
2001:                                                                 color: isDark ? AppThemeData.ecommerce300 : AppThemeData.ecommerce300,
2002:                                                                 fontFamily: AppThemeData.semiBold,
2003:                                                                 fontWeight: FontWeight.w600,
2004:                                                               ),
2005:                                                             ),
2006:                                                           ],
2007:                                                         ),
2008:                                                       ),
2009:                                                     ),
2010:                                                   ],
2011:                                                 ),
2012:                                               ),
2013:                                             ],
2014:                                           ),
2015:                                           const SizedBox(height: 15),

```

### FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\restaurant_list_screen.dart
```dart
153:                                                   ),
154:                                                 ],
155:                                               ),
156:                                             ),
157:                                             const SizedBox(width: 6),
158:                                             Container(
159:                                               padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 7),
160:                                               decoration: ShapeDecoration(
161:                                                 color: isDark ? AppThemeData.ecommerce600 : AppThemeData.ecommerce50,
162:                                                 shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(120)),
163:                                               ),
164:                                               child: Row(
165:                                                 children: [
166:                                                   SvgPicture.asset("assets/icons/ic_map_distance.svg", colorFilter: ColorFilter.mode(AppThemeData.ecommerce300, BlendMode.srcIn)),
167:                                                   const SizedBox(width: 5),
168:                                                   Text(
169:                                                     "${Constant.getDistance(lat1: vendorModel.latitude.toString(), lng1: vendorModel.longitude.toString(), lat2: Constant.selectedLocation.location!.latitude.toString(), lng2: Constant.selectedLocation.location!.longitude.toString())} ${Constant.distanceType}",
170:                                                     style: TextStyle(
171:                                                       fontSize: 14,
172:                                                       color: isDark ? AppThemeData.ecommerce300 : AppThemeData.ecommerce300,
173:                                                       fontFamily: AppThemeData.semiBold,
174:                                                       fontWeight: FontWeight.w600,
175:                                                     ),

158:                                             Container(
159:                                               padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 7),
160:                                               decoration: ShapeDecoration(
161:                                                 color: isDark ? AppThemeData.ecommerce600 : AppThemeData.ecommerce50,
162:                                                 shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(120)),
163:                                               ),
164:                                               child: Row(
165:                                                 children: [
166:                                                   SvgPicture.asset("assets/icons/ic_map_distance.svg", colorFilter: ColorFilter.mode(AppThemeData.ecommerce300, BlendMode.srcIn)),
167:                                                   const SizedBox(width: 5),
168:                                                   Text(
169:                                                     "${Constant.getDistance(lat1: vendorModel.latitude.toString(), lng1: vendorModel.longitude.toString(), lat2: Constant.selectedLocation.location!.latitude.toString(), lng2: Constant.selectedLocation.location!.longitude.toString())} ${Constant.distanceType}",
170:                                                     style: TextStyle(
171:                                                       fontSize: 14,
172:                                                       color: isDark ? AppThemeData.ecommerce300 : AppThemeData.ecommerce300,
173:                                                       fontFamily: AppThemeData.semiBold,
174:                                                       fontWeight: FontWeight.w600,
175:                                                     ),
176:                                                   ),
177:                                                 ],
178:                                               ),
179:                                             ),
180:                                           ],

164:                                               child: Row(
165:                                                 children: [
166:                                                   SvgPicture.asset("assets/icons/ic_map_distance.svg", colorFilter: ColorFilter.mode(AppThemeData.ecommerce300, BlendMode.srcIn)),
167:                                                   const SizedBox(width: 5),
168:                                                   Text(
169:                                                     "${Constant.getDistance(lat1: vendorModel.latitude.toString(), lng1: vendorModel.longitude.toString(), lat2: Constant.selectedLocation.location!.latitude.toString(), lng2: Constant.selectedLocation.location!.longitude.toString())} ${Constant.distanceType}",
170:                                                     style: TextStyle(
171:                                                       fontSize: 14,
172:                                                       color: isDark ? AppThemeData.ecommerce300 : AppThemeData.ecommerce300,
173:                                                       fontFamily: AppThemeData.semiBold,
174:                                                       fontWeight: FontWeight.w600,
175:                                                     ),
176:                                                   ),
177:                                                 ],
178:                                               ),
179:                                             ),
180:                                           ],
181:                                         ),
182:                                       ),
183:                                     ],
184:                                   ),
185:                                   const SizedBox(height: 15),
186:                                   Padding(

```

### FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart
```dart
68:                                 width: 32,
69:                                 height: 4.5,
70:                                 textColor: Constant.statusText(status: controller.orderModel.value.status.toString()),
71:                                 onPress: () async {},
72:                               ),
73:                             ],
74:                           ),
75:                           const SizedBox(height: 14),
76:                           Constant.sectionConstantModel!.serviceTypeFlag == 'ecommerce-service' &&
77:                                   (controller.orderModel.value.status == Constant.orderShipped ||
78:                                       controller.orderModel.value.status == Constant.orderInTransit ||
79:                                       controller.orderModel.value.status == Constant.orderCompleted ||
80:                                       controller.orderModel.value.status == Constant.orderCancelled)
81:                               ? Container(
82:                                 width: Responsive.width(100, context),
83:                                 decoration: ShapeDecoration(color: isDark ? AppThemeData.grey900 : AppThemeData.grey50, shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12))),
84:                                 child: Padding(
85:                                   padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 10),
86:                                   child: Column(
87:                                     crossAxisAlignment: CrossAxisAlignment.start,
88:                                     children: [
89:                                       Text(
90:                                         "Courier company name :  ${controller.orderModel.value.courierCompanyName}",

590:                                                     ),
591:                                                 if (Constant.taxScope == "product")
592:                                                   cartProductModel.taxSetting?.isEmpty == true
593:                                                       ? SizedBox()
594:                                                       : Text(
595:                                                         "${'Tax:'.tr} ${Constant.getTaxDisplayText(cartProductModel.taxSetting)}",
596:                                                         maxLines: 2,
597:                                                         overflow: TextOverflow.ellipsis,
598:                                                         style: TextStyle(fontSize: 12, color: isDark ? AppThemeData.ecommerce300 : AppThemeData.ecommerce300, fontFamily: AppThemeData.semiBold),
599:                                                       ),
600:                                               ],
601:                                             ),
602:                                           ),
603:                                         ],
604:                                       ),
605:                                       cartProductModel.variantInfo == null || cartProductModel.variantInfo!.variantOptions!.isEmpty
606:                                           ? Container()
607:                                           : Padding(
608:                                             padding: const EdgeInsets.symmetric(horizontal: 5, vertical: 10),
609:                                             child: Column(
610:                                               crossAxisAlignment: CrossAxisAlignment.start,
611:                                               children: [
612:                                                 Text(

1080:                       controller.orderModel.value.status == Constant.orderCompleted
1081:                   ? Container(
1082:                     color: isDark ? AppThemeData.grey900 : AppThemeData.grey50,
1083:                     padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 20),
1084:                     child: Padding(
1085:                       padding: const EdgeInsets.only(bottom: 20),
1086:                       child:
1087:                           controller.orderModel.value.status == Constant.orderShipped || controller.orderModel.value.status == Constant.orderInTransit
1088:                               ? Constant.sectionConstantModel!.serviceTypeFlag == 'ecommerce-service'
1089:                                   ? SizedBox()
1090:                                   : RoundedButtonFill(
1091:                                     title: "Track Order".tr,
1092:                                     height: 5.5,
1093:                                     color: AppThemeData.warning300,
1094:                                     textColor: AppThemeData.grey900,
1095:                                     onPress: () async {
1096:                                       Get.to(const LiveTrackingScreen(), arguments: {"orderModel": controller.orderModel.value});
1097:                                     },
1098:                                   )
1099:                               : RoundedButtonFill(
1100:                                 title: "Reorder".tr,
1101:                                 height: 5.5,
1102:                                 color: AppThemeData.primary300,

```

### FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\order_list_screen\order_screen.dart
```dart
368:                               fontFamily: AppThemeData.semiBold,
369:                               fontWeight: FontWeight.w600,
370:                               fontSize: 16,
371:                             ),
372:                           ),
373:                         ),
374:                       )
375:                       : orderModel.status == Constant.orderShipped || orderModel.status == Constant.orderInTransit
376:                       ? Constant.sectionConstantModel!.serviceTypeFlag == 'ecommerce-service'
377:                           ? SizedBox()
378:                           : Expanded(
379:                             child: InkWell(
380:                               onTap: () {
381:                                 Get.to(const LiveTrackingScreen(), arguments: {"orderModel": orderModel});
382:                               },
383:                               child: Text(
384:                                 "Track Order".tr,
385:                                 textAlign: TextAlign.center,
386:                                 style: TextStyle(
387:                                   color: isDark ? AppThemeData.primary300 : AppThemeData.primary300,
388:                                   fontFamily: AppThemeData.semiBold,
389:                                   fontWeight: FontWeight.w600,
390:                                   fontSize: 16,

```

### FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\rate_us_screen\rate_product_screen.dart
```dart
197:                                   DottedBorder(
198:                                     options: RoundedRectDottedBorderOptions(
199:                                       radius: const Radius.circular(12),
200:                                       dashPattern: const [6, 6, 6, 6],
201:                                       color: isDark ? AppThemeData.grey700 : AppThemeData.grey200,
202:                                     ),
203:                                     child: TextFormField(
204:                                       keyboardType: TextInputType.text,
205:                                       textCapitalization: TextCapitalization.sentences,
206:                                       controller: controller.commentController.value,
207:                                       maxLines: 4,
208:                                       textInputAction: TextInputAction.done,
209:                                       style: TextStyle(color: isDark ? AppThemeData.grey50 : AppThemeData.grey900, fontFamily: AppThemeData.medium),
210:                                       decoration: InputDecoration(
211:                                         errorStyle: const TextStyle(color: Colors.red),
212:                                         filled: true,
213:                                         fillColor: isDark ? AppThemeData.grey900 : AppThemeData.grey50,
214:                                         disabledBorder: InputBorder.none,
215:                                         focusedBorder: InputBorder.none,
216:                                         enabledBorder: InputBorder.none,
217:                                         errorBorder: InputBorder.none,
218:                                         border: InputBorder.none,
219:                                         hintText: "Type comment".tr,

```

### FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\refer_friend_screen\refer_friend_screen.dart
```dart
58:                                 "${Constant.amountShow(amount: Constant.sectionConstantModel!.referralAmount)} ${'EachðŸŽ‰'.tr}",
59:                                 style: TextStyle(fontSize: 24, color: isDark ? AppThemeData.grey50 : AppThemeData.grey50, fontFamily: AppThemeData.semiBold, fontWeight: FontWeight.w500),
60:                               ),
61:                               const SizedBox(height: 32),
62:                               Text(
63:                                 "Invite Friends & Businesses".tr,
64:                                 style: TextStyle(
65:                                   fontSize: 16,
66:                                   color: isDark ? AppThemeData.ecommerce100 : AppThemeData.ecommerceDark100,
67:                                   fontFamily: AppThemeData.semiBold,
68:                                   fontWeight: FontWeight.w500,
69:                                 ),
70:                               ),
71:                               const SizedBox(height: 8),
72:                               Text(
73:                                 "${'Invite your friends to sign up with emart using your code, and youâ€™ll earn'.tr} ${Constant.amountShow(amount: Constant.sectionConstantModel!.referralAmount)} ${'after their Success the first order! ðŸ’¸ðŸ”'.tr}"
74:                                     .tr,
75:                                 textAlign: TextAlign.center,
76:                                 style: TextStyle(fontSize: 16, color: isDark ? AppThemeData.grey50 : AppThemeData.grey50, fontFamily: AppThemeData.regular, fontWeight: FontWeight.w500),
77:                               ),
78:                               const SizedBox(height: 40),
79:                               Container(
80:                                 decoration: ShapeDecoration(

84:                                 ),
85:                                 child: Padding(
86:                                   padding: const EdgeInsets.symmetric(horizontal: 80, vertical: 16),
87:                                   child: Row(
88:                                     mainAxisSize: MainAxisSize.min,
89:                                     children: [
90:                                       Text(
91:                                         controller.referralModel.value.referralCode.toString(),
92:                                         style: TextStyle(fontSize: 16, color: AppThemeData.ecommerce100, fontFamily: AppThemeData.semiBold, fontWeight: FontWeight.w500),
93:                                       ),
94:                                       const SizedBox(width: 10),
95:                                       InkWell(
96:                                         onTap: () {
97:                                           Clipboard.setData(ClipboardData(text: controller.referralModel.value.referralCode.toString()));
98:                                           ShowToastDialog.showToast("Copied".tr);
99:                                         },
100:                                         child: const Icon(Icons.copy, color: AppThemeData.ecommerce100),
101:                                       ),
102:                                     ],
103:                                   ),
104:                                 ),
105:                               ),
106:                               Padding(

92:                                         style: TextStyle(fontSize: 16, color: AppThemeData.ecommerce100, fontFamily: AppThemeData.semiBold, fontWeight: FontWeight.w500),
93:                                       ),
94:                                       const SizedBox(width: 10),
95:                                       InkWell(
96:                                         onTap: () {
97:                                           Clipboard.setData(ClipboardData(text: controller.referralModel.value.referralCode.toString()));
98:                                           ShowToastDialog.showToast("Copied".tr);
99:                                         },
100:                                         child: const Icon(Icons.copy, color: AppThemeData.ecommerce100),
101:                                       ),
102:                                     ],
103:                                   ),
104:                                 ),
105:                               ),
106:                               Padding(
107:                                 padding: const EdgeInsets.symmetric(horizontal: 40),
108:                                 child: Row(
109:                                   children: [
110:                                     Expanded(child: Divider(thickness: 1, color: isDark ? AppThemeData.ecommerce100 : AppThemeData.ecommerceDark100)),
111:                                     Padding(
112:                                       padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 30),
113:                                       child: Text(
114:                                         "or".tr,

102:                                     ],
103:                                   ),
104:                                 ),
105:                               ),
106:                               Padding(
107:                                 padding: const EdgeInsets.symmetric(horizontal: 40),
108:                                 child: Row(
109:                                   children: [
110:                                     Expanded(child: Divider(thickness: 1, color: isDark ? AppThemeData.ecommerce100 : AppThemeData.ecommerceDark100)),
111:                                     Padding(
112:                                       padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 30),
113:                                       child: Text(
114:                                         "or".tr,
115:                                         textAlign: TextAlign.center,
116:                                         style: TextStyle(
117:                                           color: isDark ? AppThemeData.ecommerce100 : AppThemeData.ecommerceDark100,
118:                                           fontSize: 12,
119:                                           fontFamily: AppThemeData.medium,
120:                                           fontWeight: FontWeight.w500,
121:                                         ),
122:                                       ),
123:                                     ),
124:                                     Expanded(child: Divider(color: isDark ? AppThemeData.ecommerce100 : AppThemeData.ecommerceDark100)),

109:                                   children: [
110:                                     Expanded(child: Divider(thickness: 1, color: isDark ? AppThemeData.ecommerce100 : AppThemeData.ecommerceDark100)),
111:                                     Padding(
112:                                       padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 30),
113:                                       child: Text(
114:                                         "or".tr,
115:                                         textAlign: TextAlign.center,
116:                                         style: TextStyle(
117:                                           color: isDark ? AppThemeData.ecommerce100 : AppThemeData.ecommerceDark100,
118:                                           fontSize: 12,
119:                                           fontFamily: AppThemeData.medium,
120:                                           fontWeight: FontWeight.w500,
121:                                         ),
122:                                       ),
123:                                     ),
124:                                     Expanded(child: Divider(color: isDark ? AppThemeData.ecommerce100 : AppThemeData.ecommerceDark100)),
125:                                   ],
126:                                 ),
127:                               ),
128:                               RoundedButtonFill(
129:                                 title: "Share Code".tr,
130:                                 width: 55,
131:                                 color: AppThemeData.ecommerce300,

116:                                         style: TextStyle(
117:                                           color: isDark ? AppThemeData.ecommerce100 : AppThemeData.ecommerceDark100,
118:                                           fontSize: 12,
119:                                           fontFamily: AppThemeData.medium,
120:                                           fontWeight: FontWeight.w500,
121:                                         ),
122:                                       ),
123:                                     ),
124:                                     Expanded(child: Divider(color: isDark ? AppThemeData.ecommerce100 : AppThemeData.ecommerceDark100)),
125:                                   ],
126:                                 ),
127:                               ),
128:                               RoundedButtonFill(
129:                                 title: "Share Code".tr,
130:                                 width: 55,
131:                                 color: AppThemeData.ecommerce300,
132:                                 textColor: AppThemeData.grey50,
133:                                 onPress: () async {
134:                                   await Share.share(
135:                                     "${"Hey there, thanks for choosing Foodie. Hope you love our product. If you do, share it with your friends using code".tr} ${controller.referralModel.value.referralCode.toString()} ${"and get".tr}${Constant.amountShow(amount: Constant.sectionConstantModel!.referralAmount.toString())} ${"when order completed".tr}",
136:                                   );
137:                                 },
138:                               ),

123:                                     ),
124:                                     Expanded(child: Divider(color: isDark ? AppThemeData.ecommerce100 : AppThemeData.ecommerceDark100)),
125:                                   ],
126:                                 ),
127:                               ),
128:                               RoundedButtonFill(
129:                                 title: "Share Code".tr,
130:                                 width: 55,
131:                                 color: AppThemeData.ecommerce300,
132:                                 textColor: AppThemeData.grey50,
133:                                 onPress: () async {
134:                                   await Share.share(
135:                                     "${"Hey there, thanks for choosing Foodie. Hope you love our product. If you do, share it with your friends using code".tr} ${controller.referralModel.value.referralCode.toString()} ${"and get".tr}${Constant.amountShow(amount: Constant.sectionConstantModel!.referralAmount.toString())} ${"when order completed".tr}",
136:                                   );
137:                                 },
138:                               ),
139:                             ],
140:                           ),
141:                         ],
142:                       ),
143:                     ),
144:                   ),
145:                 ),

```

### FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart
```dart
125:                             style: TextStyle(
126:                               fontSize: 14,
127:                               overflow: TextOverflow.ellipsis,
128:                               fontFamily: AppThemeData.semiBold,
129:                               fontWeight: FontWeight.w600,
130:                               color: isDark ? AppThemeData.grey50 : AppThemeData.grey50,
131:                             ),
132:                           ),
133:                           badgeStyle: badges.BadgeStyle(shape: badges.BadgeShape.circle, badgeColor: AppThemeData.ecommerce300),
134:                           child: InkWell(
135:                             onTap: () {
136:                               Get.to(const CartScreen());
137:                             },
138:                             child: ClipOval(
139:                               child: SvgPicture.asset("assets/icons/ic_shoping_cart.svg", width: 24, height: 24, colorFilter: const ColorFilter.mode(AppThemeData.grey50, BlendMode.srcIn)),
140:                             ),
141:                           ),
142:                         ),
143:                       ),
144:                     ],
145:                   ),
146:                   flexibleSpace: FlexibleSpaceBar(
147:                     background: Stack(

291:                                               "${controller.vendorModel.value.reviewsCount} ${'Ratings'.tr}",
292:                                               style: TextStyle(decoration: TextDecoration.underline, color: isDark ? AppThemeData.grey200 : AppThemeData.grey700, fontFamily: AppThemeData.regular),
293:                                             ),
294:                                           ),
295:                                         ],
296:                                       ),
297:                                     ],
298:                                   ),
299:                                   Constant.sectionConstantModel!.serviceTypeFlag == "ecommerce-service"
300:                                       ? SizedBox()
301:                                       : Row(
302:                                         children: [
303:                                           Text(
304:                                             controller.isOpen.value ? "Open".tr : "Close".tr,
305:                                             textAlign: TextAlign.start,
306:                                             maxLines: 1,
307:                                             style: TextStyle(
308:                                               fontSize: 14,
309:                                               overflow: TextOverflow.ellipsis,
310:                                               fontFamily: AppThemeData.semiBold,
311:                                               fontWeight: FontWeight.w600,
312:                                               color: controller.isOpen.value ? AppThemeData.success400 : AppThemeData.danger300,
313:                                             ),

323:                                             },
324:                                             child: Text(
325:                                               "View Timings".tr,
326:                                               textAlign: TextAlign.start,
327:                                               maxLines: 1,
328:                                               style: TextStyle(
329:                                                 fontSize: 14,
330:                                                 decoration: TextDecoration.underline,
331:                                                 decorationColor: AppThemeData.ecommerce300,
332:                                                 overflow: TextOverflow.ellipsis,
333:                                                 fontFamily: AppThemeData.semiBold,
334:                                                 fontWeight: FontWeight.w600,
335:                                                 color: isDark ? AppThemeData.ecommerce300 : AppThemeData.ecommerce300,
336:                                               ),
337:                                             ),
338:                                           ),
339:                                         ],
340:                                       ),
341:                                   controller.vendorModel.value.dineInActive == true || (controller.vendorModel.value.openDineTime != null && controller.vendorModel.value.openDineTime!.isNotEmpty)
342:                                       ? Column(
343:                                         crossAxisAlignment: CrossAxisAlignment.start,
344:                                         children: [
345:                                           const SizedBox(height: 20),

327:                                               maxLines: 1,
328:                                               style: TextStyle(
329:                                                 fontSize: 14,
330:                                                 decoration: TextDecoration.underline,
331:                                                 decorationColor: AppThemeData.ecommerce300,
332:                                                 overflow: TextOverflow.ellipsis,
333:                                                 fontFamily: AppThemeData.semiBold,
334:                                                 fontWeight: FontWeight.w600,
335:                                                 color: isDark ? AppThemeData.ecommerce300 : AppThemeData.ecommerce300,
336:                                               ),
337:                                             ),
338:                                           ),
339:                                         ],
340:                                       ),
341:                                   controller.vendorModel.value.dineInActive == true || (controller.vendorModel.value.openDineTime != null && controller.vendorModel.value.openDineTime!.isNotEmpty)
342:                                       ? Column(
343:                                         crossAxisAlignment: CrossAxisAlignment.start,
344:                                         children: [
345:                                           const SizedBox(height: 20),
346:                                           Text(
347:                                             "Also applicable on table booking".tr,
348:                                             textAlign: TextAlign.start,
349:                                             maxLines: 1,

```

### FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\search_screen\search_screen.dart
```dart
162:                                                         ),
163:                                                       ],
164:                                                     ),
165:                                                   ),
166:                                                   const SizedBox(width: 6),
167:                                                   Container(
168:                                                     padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 7),
169:                                                     decoration: ShapeDecoration(
170:                                                       color: isDark ? AppThemeData.ecommerce600 : AppThemeData.ecommerce50,
171:                                                       shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(120)),
172:                                                     ),
173:                                                     child: Row(
174:                                                       children: [
175:                                                         SvgPicture.asset("assets/icons/ic_map_distance.svg", colorFilter: ColorFilter.mode(AppThemeData.ecommerce300, BlendMode.srcIn)),
176:                                                         const SizedBox(width: 5),
177:                                                         Text(
178:                                                           "${Constant.getDistance(lat1: vendorModel.latitude.toString(), lng1: vendorModel.longitude.toString(), lat2: Constant.selectedLocation.location!.latitude.toString(), lng2: Constant.selectedLocation.location!.longitude.toString())} ${Constant.distanceType}",
179:                                                           style: TextStyle(
180:                                                             fontSize: 14,
181:                                                             color: isDark ? AppThemeData.ecommerce300 : AppThemeData.ecommerce300,
182:                                                             fontFamily: AppThemeData.semiBold,
183:                                                             fontWeight: FontWeight.w600,
184:                                                           ),

167:                                                   Container(
168:                                                     padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 7),
169:                                                     decoration: ShapeDecoration(
170:                                                       color: isDark ? AppThemeData.ecommerce600 : AppThemeData.ecommerce50,
171:                                                       shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(120)),
172:                                                     ),
173:                                                     child: Row(
174:                                                       children: [
175:                                                         SvgPicture.asset("assets/icons/ic_map_distance.svg", colorFilter: ColorFilter.mode(AppThemeData.ecommerce300, BlendMode.srcIn)),
176:                                                         const SizedBox(width: 5),
177:                                                         Text(
178:                                                           "${Constant.getDistance(lat1: vendorModel.latitude.toString(), lng1: vendorModel.longitude.toString(), lat2: Constant.selectedLocation.location!.latitude.toString(), lng2: Constant.selectedLocation.location!.longitude.toString())} ${Constant.distanceType}",
179:                                                           style: TextStyle(
180:                                                             fontSize: 14,
181:                                                             color: isDark ? AppThemeData.ecommerce300 : AppThemeData.ecommerce300,
182:                                                             fontFamily: AppThemeData.semiBold,
183:                                                             fontWeight: FontWeight.w600,
184:                                                           ),
185:                                                         ),
186:                                                       ],
187:                                                     ),
188:                                                   ),
189:                                                 ],

173:                                                     child: Row(
174:                                                       children: [
175:                                                         SvgPicture.asset("assets/icons/ic_map_distance.svg", colorFilter: ColorFilter.mode(AppThemeData.ecommerce300, BlendMode.srcIn)),
176:                                                         const SizedBox(width: 5),
177:                                                         Text(
178:                                                           "${Constant.getDistance(lat1: vendorModel.latitude.toString(), lng1: vendorModel.longitude.toString(), lat2: Constant.selectedLocation.location!.latitude.toString(), lng2: Constant.selectedLocation.location!.longitude.toString())} ${Constant.distanceType}",
179:                                                           style: TextStyle(
180:                                                             fontSize: 14,
181:                                                             color: isDark ? AppThemeData.ecommerce300 : AppThemeData.ecommerce300,
182:                                                             fontFamily: AppThemeData.semiBold,
183:                                                             fontWeight: FontWeight.w600,
184:                                                           ),
185:                                                         ),
186:                                                       ],
187:                                                     ),
188:                                                   ),
189:                                                 ],
190:                                               ),
191:                                             ),
192:                                           ],
193:                                         ),
194:                                         const SizedBox(height: 15),
195:                                         Padding(

```

### FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\wallet_screen\payment_list_screen.dart
```dart
154:                 width: 50,
155:                 height: 50,
156:                 decoration: ShapeDecoration(shape: RoundedRectangleBorder(side: const BorderSide(width: 1, color: Color(0xFFE5E7EB)), borderRadius: BorderRadius.circular(8))),
157:                 child: Padding(padding: EdgeInsets.all(value.name == "payFast" ? 0 : 8.0), child: Image.asset(image)),
158:               ),
159:               const SizedBox(width: 10),
160:               Expanded(
161:                 child: Text(
162:                   value.name.capitalizeString(),
163:                   textAlign: TextAlign.start,
164:                   style: TextStyle(fontFamily: AppThemeData.medium, fontSize: 16, color: isDark ? AppThemeData.grey50 : AppThemeData.grey900),
165:                 ),
166:               ),
167:               const Expanded(child: SizedBox()),
168:               Radio(
169:                 value: value.name,
170:                 groupValue: controller.selectedPaymentMethod.value,
171:                 activeColor: isDark ? AppThemeData.primary300 : AppThemeData.primary300,
172:                 onChanged: (value) {
173:                   controller.selectedPaymentMethod.value = value.toString();
174:                 },
175:               ),
176:             ],

```

### FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\on_demand_service\on_demand_payment_screen.dart
```dart
219:                   ),
220:                   const SizedBox(width: 10),
221:                   value.name == "wallet"
222:                       ? Expanded(
223:                         child: Column(
224:                           crossAxisAlignment: CrossAxisAlignment.start,
225:                           children: [
226:                             Text(
227:                               value.name.capitalizeString(),
228:                               textAlign: TextAlign.start,
229:                               style: AppThemeData.semiBoldTextStyle(fontSize: 16, color: isDark ? AppThemeData.grey50 : AppThemeData.grey900),
230:                             ),
231:                             Text(
232:                               Constant.amountShow(amount: Constant.userModel?.walletAmount == null ? '0.0' : Constant.userModel?.walletAmount.toString()),
233:                               textAlign: TextAlign.start,
234:                               style: AppThemeData.semiBoldTextStyle(fontSize: 14, color: isDark ? AppThemeData.primary300 : AppThemeData.primary300),
235:                             ),
236:                           ],
237:                         ),
238:                       )
239:                       : Expanded(
240:                         child: Text(
241:                           value.name.capitalizeString(),

233:                               textAlign: TextAlign.start,
234:                               style: AppThemeData.semiBoldTextStyle(fontSize: 14, color: isDark ? AppThemeData.primary300 : AppThemeData.primary300),
235:                             ),
236:                           ],
237:                         ),
238:                       )
239:                       : Expanded(
240:                         child: Text(
241:                           value.name.capitalizeString(),
242:                           textAlign: TextAlign.start,
243:                           style: AppThemeData.semiBoldTextStyle(fontSize: 16, color: isDark ? AppThemeData.grey50 : AppThemeData.grey900),
244:                         ),
245:                       ),
246:                   const Expanded(child: SizedBox()),
247:                   Radio(
248:                     value: value.name,
249:                     groupValue: controller.selectedPaymentMethod.value,
250:                     activeColor: isDark ? AppThemeData.primary300 : AppThemeData.primary300,
251:                     onChanged: (value) {
252:                       controller.selectedPaymentMethod.value = value.toString();
253:                     },
254:                   ),
255:                 ],

```

### FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\parcel_service\parcel_order_confirmation.dart
```dart
566:               ),
567:               const SizedBox(width: 10),
568:               value.name == "wallet"
569:                   ? Expanded(
570:                     child: Column(
571:                       crossAxisAlignment: CrossAxisAlignment.start,
572:                       children: [
573:                         Text(
574:                           value.name.capitalizeString(),
575:                           textAlign: TextAlign.start,
576:                           style: AppThemeData.semiBoldTextStyle(fontSize: 16, color: isDark ? AppThemeData.grey50 : AppThemeData.grey900),
577:                         ),
578:                         Text(
579:                           Constant.amountShow(amount: Constant.userModel?.walletAmount == null ? '0.0' : Constant.userModel?.walletAmount.toString()),
580:                           textAlign: TextAlign.start,
581:                           style: AppThemeData.semiBoldTextStyle(fontSize: 14, color: isDark ? AppThemeData.primary300 : AppThemeData.primary300),
582:                         ),
583:                       ],
584:                     ),
585:                   )
586:                   : Expanded(
587:                     child: Text(
588:                       value.name.capitalizeString(),

580:                           textAlign: TextAlign.start,
581:                           style: AppThemeData.semiBoldTextStyle(fontSize: 14, color: isDark ? AppThemeData.primary300 : AppThemeData.primary300),
582:                         ),
583:                       ],
584:                     ),
585:                   )
586:                   : Expanded(
587:                     child: Text(
588:                       value.name.capitalizeString(),
589:                       textAlign: TextAlign.start,
590:                       style: AppThemeData.semiBoldTextStyle(fontSize: 16, color: isDark ? AppThemeData.grey50 : AppThemeData.grey900),
591:                     ),
592:                   ),
593:               Radio(
594:                 value: value.name,
595:                 groupValue: controller.selectedPaymentMethod.value,
596:                 activeColor: isDark ? AppThemeData.primary300 : AppThemeData.primary300,
597:                 onChanged: (value) {
598:                   controller.selectedPaymentMethod.value = value.toString();
599:                 },
600:               ),
601:             ],
602:           ),

```

### FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\rental_service\my_rental_booking_screen.dart
```dart
288:                   ),
289:                   const SizedBox(width: 10),
290:                   value.name == "wallet"
291:                       ? Expanded(
292:                         child: Column(
293:                           crossAxisAlignment: CrossAxisAlignment.start,
294:                           children: [
295:                             Text(
296:                               value.name.capitalizeString(),
297:                               textAlign: TextAlign.start,
298:                               style: AppThemeData.semiBoldTextStyle(fontSize: 16, color: isDark ? AppThemeData.grey50 : AppThemeData.grey900),
299:                             ),
300:                             Text(
301:                               Constant.amountShow(amount: Constant.userModel!.walletAmount == null ? '0.0' : Constant.userModel!.walletAmount.toString()),
302:                               textAlign: TextAlign.start,
303:                               style: AppThemeData.semiBoldTextStyle(fontSize: 14, color: isDark ? AppThemeData.primary300 : AppThemeData.primary300),
304:                             ),
305:                           ],
306:                         ),
307:                       )
308:                       : Expanded(
309:                         child: Text(
310:                           value.name.capitalizeString(),

302:                               textAlign: TextAlign.start,
303:                               style: AppThemeData.semiBoldTextStyle(fontSize: 14, color: isDark ? AppThemeData.primary300 : AppThemeData.primary300),
304:                             ),
305:                           ],
306:                         ),
307:                       )
308:                       : Expanded(
309:                         child: Text(
310:                           value.name.capitalizeString(),
311:                           textAlign: TextAlign.start,
312:                           style: AppThemeData.semiBoldTextStyle(fontSize: 16, color: isDark ? AppThemeData.grey50 : AppThemeData.grey900),
313:                         ),
314:                       ),
315:                   const Expanded(child: SizedBox()),
316:                   Radio(
317:                     value: value.name,
318:                     groupValue: controller.selectedPaymentMethod.value,
319:                     activeColor: isDark ? AppThemeData.primary300 : AppThemeData.primary300,
320:                     onChanged: (value) {
321:                       controller.selectedPaymentMethod.value = value.toString();
322:                     },
323:                   ),
324:                 ],

```

### FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\rental_service\rental_home_screen.dart
```dart
582:                   ),
583:                   const SizedBox(width: 10),
584:                   value.name == "wallet"
585:                       ? Expanded(
586:                         child: Column(
587:                           crossAxisAlignment: CrossAxisAlignment.start,
588:                           children: [
589:                             Text(
590:                               value.name.capitalizeString(),
591:                               textAlign: TextAlign.start,
592:                               style: AppThemeData.semiBoldTextStyle(fontSize: 16, color: isDark ? AppThemeData.grey50 : AppThemeData.grey900),
593:                             ),
594:                             Text(
595:                               Constant.amountShow(amount: controller.userModel.value.walletAmount == null ? '0.0' : controller.userModel.value.walletAmount.toString()),
596:                               textAlign: TextAlign.start,
597:                               style: AppThemeData.semiBoldTextStyle(fontSize: 14, color: isDark ? AppThemeData.primary300 : AppThemeData.primary300),
598:                             ),
599:                           ],
600:                         ),
601:                       )
602:                       : Expanded(
603:                         child: Text(
604:                           value.name.capitalizeString(),

596:                               textAlign: TextAlign.start,
597:                               style: AppThemeData.semiBoldTextStyle(fontSize: 14, color: isDark ? AppThemeData.primary300 : AppThemeData.primary300),
598:                             ),
599:                           ],
600:                         ),
601:                       )
602:                       : Expanded(
603:                         child: Text(
604:                           value.name.capitalizeString(),
605:                           textAlign: TextAlign.start,
606:                           style: AppThemeData.semiBoldTextStyle(fontSize: 16, color: isDark ? AppThemeData.grey50 : AppThemeData.grey900),
607:                         ),
608:                       ),
609:                   const Expanded(child: SizedBox()),
610:                   Radio(
611:                     value: value.name,
612:                     groupValue: controller.selectedPaymentMethod.value,
613:                     activeColor: isDark ? AppThemeData.primary300 : AppThemeData.primary300,
614:                     onChanged: (value) {
615:                       controller.selectedPaymentMethod.value = value.toString();
616:                     },
617:                   ),
618:                 ],

```

### FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\rental_service\rental_order_details_screen.dart
```dart
821:                   ),
822:                   const SizedBox(width: 10),
823:                   value.name == "wallet"
824:                       ? Expanded(
825:                         child: Column(
826:                           crossAxisAlignment: CrossAxisAlignment.start,
827:                           children: [
828:                             Text(
829:                               value.name.capitalizeString(),
830:                               textAlign: TextAlign.start,
831:                               style: AppThemeData.semiBoldTextStyle(fontSize: 16, color: isDark ? AppThemeData.grey50 : AppThemeData.grey900),
832:                             ),
833:                             Text(
834:                               Constant.amountShow(amount: Constant.userModel!.walletAmount == null ? '0.0' : Constant.userModel!.walletAmount.toString()),
835:                               textAlign: TextAlign.start,
836:                               style: AppThemeData.semiBoldTextStyle(fontSize: 14, color: isDark ? AppThemeData.primary300 : AppThemeData.primary300),
837:                             ),
838:                           ],
839:                         ),
840:                       )
841:                       : Expanded(
842:                         child: Text(
843:                           value.name.capitalizeString(),

835:                               textAlign: TextAlign.start,
836:                               style: AppThemeData.semiBoldTextStyle(fontSize: 14, color: isDark ? AppThemeData.primary300 : AppThemeData.primary300),
837:                             ),
838:                           ],
839:                         ),
840:                       )
841:                       : Expanded(
842:                         child: Text(
843:                           value.name.capitalizeString(),
844:                           textAlign: TextAlign.start,
845:                           style: AppThemeData.semiBoldTextStyle(fontSize: 16, color: isDark ? AppThemeData.grey50 : AppThemeData.grey900),
846:                         ),
847:                       ),
848:                   const Expanded(child: SizedBox()),
849:                   Radio(
850:                     value: value.name,
851:                     groupValue: controller.selectedPaymentMethod.value,
852:                     activeColor: isDark ? AppThemeData.primary300 : AppThemeData.primary300,
853:                     onChanged: (value) {
854:                       controller.selectedPaymentMethod.value = value.toString();
855:                     },
856:                   ),
857:                 ],

```

### FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart
```dart
253:       });
254:     } catch (e, s) {
255:       print('FireStoreUtils.firebaseCreateNewUser $e $s');
256:       return null;
257:     }
258:     return referralModel;
259:   }
260: 
261:   static Future<List<SectionModel>> getSections() async {
262:     List<SectionModel> sections = [];
263:     QuerySnapshot<Map<String, dynamic>> productsQuery = await fireStore.collection(CollectionName.sections).where("isActive", isEqualTo: true).orderBy("order", descending: false).get();
264: 
265:     await Future.forEach(productsQuery.docs, (QueryDocumentSnapshot<Map<String, dynamic>> document) {
266:       try {
267:         sections.add(SectionModel.fromJson(document.data()));
268:       } catch (e) {
269:         print('**-FireStoreUtils.getSection Parse error $e');
270:       }
271:     });
272:     return sections;
273:   }
274: 
275:   static Future<List<dynamic>> getSectionBannerList() async {

254:     } catch (e, s) {
255:       print('FireStoreUtils.firebaseCreateNewUser $e $s');
256:       return null;
257:     }
258:     return referralModel;
259:   }
260: 
261:   static Future<List<SectionModel>> getSections() async {
262:     List<SectionModel> sections = [];
263:     QuerySnapshot<Map<String, dynamic>> productsQuery = await fireStore.collection(CollectionName.sections).where("isActive", isEqualTo: true).orderBy("order", descending: false).get();
264: 
265:     await Future.forEach(productsQuery.docs, (QueryDocumentSnapshot<Map<String, dynamic>> document) {
266:       try {
267:         sections.add(SectionModel.fromJson(document.data()));
268:       } catch (e) {
269:         print('**-FireStoreUtils.getSection Parse error $e');
270:       }
271:     });
272:     return sections;
273:   }
274: 
275:   static Future<List<dynamic>> getSectionBannerList() async {
276:     List<dynamic> sections = [];

259:   }
260: 
261:   static Future<List<SectionModel>> getSections() async {
262:     List<SectionModel> sections = [];
263:     QuerySnapshot<Map<String, dynamic>> productsQuery = await fireStore.collection(CollectionName.sections).where("isActive", isEqualTo: true).orderBy("order", descending: false).get();
264: 
265:     await Future.forEach(productsQuery.docs, (QueryDocumentSnapshot<Map<String, dynamic>> document) {
266:       try {
267:         sections.add(SectionModel.fromJson(document.data()));
268:       } catch (e) {
269:         print('**-FireStoreUtils.getSection Parse error $e');
270:       }
271:     });
272:     return sections;
273:   }
274: 
275:   static Future<List<dynamic>> getSectionBannerList() async {
276:     List<dynamic> sections = [];
277:     await fireStore.collection(CollectionName.settings).doc("AppHomeBanners").get().then((value) {
278:       if (value.exists) {
279:         sections = value.data()!['banners'] ?? [];
280:       }
281:     });

470:           .catchError((error) {
471:             log(error.toString());
472:           });
473:     }
474: 
475:     return list;
476:   }
477: 
478:   static Future<List<VendorCategoryModel>> getHomeVendorCategory() async {
479:     List<VendorCategoryModel> list = [];
480:     await fireStore
481:         .collection(CollectionName.vendorCategories)
482:         .where("section_id", isEqualTo: Constant.sectionConstantModel!.id)
483:         .where("show_in_homepage", isEqualTo: true)
484:         .where('publish', isEqualTo: true)
485:         .get()
486:         .then((value) {
487:           for (var element in value.docs) {
488:             VendorCategoryModel walletTransactionModel = VendorCategoryModel.fromJson(element.data());
489:             list.add(walletTransactionModel);
490:           }
491:         })
492:         .catchError((error) {

509:           }
510:         })
511:         .catchError((error) {
512:           log(error.toString());
513:         });
514:     return list;
515:   }
516: 
517:   static Future<List<BannerModel>> getHomeBottomBanner() async {
518:     List<BannerModel> bannerList = [];
519:     await fireStore
520:         .collection(CollectionName.bannerItems)
521:         .where("is_publish", isEqualTo: true)
522:         .where("sectionId", isEqualTo: Constant.sectionConstantModel!.id)
523:         .where("position", isEqualTo: "middle")
524:         .orderBy("set_order", descending: false)
525:         .get()
526:         .then((value) {
527:           for (var element in value.docs) {
528:             BannerModel bannerHome = BannerModel.fromJson(element.data());
529:             bannerList.add(bannerHome);
530:           }
531:         });

677:         String? colorStr = globalSettingsSnap.data()?['app_customer_color'];
678:         if (colorStr != null && colorStr.isNotEmpty) {
679:           AppThemeData.primary300 = Color(int.parse(colorStr.replaceFirst("#", "0xff")));
680:         }
681:       }
682: 
683:       fireStore.collection(CollectionName.settings).doc("googleMapKey").snapshots().listen((event) {
684:         if (event.exists && event.data() != null) {
685:           Constant.mapAPIKey = event.data()?["key"] ?? "";
686:         }
687:       });
688:       fireStore.collection(CollectionName.settings).doc("placeHolderImage").snapshots().listen((event) {
689:         if (event.exists && event.data() != null) {
690:           Constant.placeHolderImage = event.data()?["image"] ?? "";
691:         }
692:       });
693: 
694:       fireStore.collection(CollectionName.settings).doc("notification_setting").snapshots().listen((event) {
695:         if (event.exists) {
696:           Constant.senderId = event.data()?["senderId"];
697:           Constant.jsonNotificationFileURL = event.data()?["serviceJson"];
698:         }
699:       });

1342:       });
1343: 
1344:       yield* getNearestVendorController!.stream;
1345:     } catch (e) {
1346:       print(e);
1347:     }
1348:   }
1349: 
1350:   static Future<List<VendorCategoryModel>> getHomePageShowCategory() async {
1351:     List<VendorCategoryModel> vendorCategoryList = [];
1352:     await fireStore
1353:         .collection(CollectionName.vendorCategories)
1354:         .where("section_id", isEqualTo: Constant.sectionConstantModel!.id)
1355:         .where("show_in_homepage", isEqualTo: true)
1356:         .where('publish', isEqualTo: true)
1357:         .get()
1358:         .then((value) {
1359:           for (var element in value.docs) {
1360:             VendorCategoryModel vendorCategoryModel = VendorCategoryModel.fromJson(element.data());
1361:             vendorCategoryList.add(vendorCategoryModel);
1362:           }
1363:         })
1364:         .catchError((error) {

1589:     UploadTask uploadTask = upload.putFile(image);
1590:     var storageRef = (await uploadTask.whenComplete(() {})).ref;
1591:     var downloadUrl = await storageRef.getDownloadURL();
1592:     var metaData = await storageRef.getMetadata();
1593:     ShowToastDialog.closeLoader();
1594:     return Url(mime: metaData.contentType ?? 'image', url: downloadUrl.toString());
1595:   }
1596: 
1597:   static Future<List<CouponModel>> getHomeCoupon() async {
1598:     List<CouponModel> list = [];
1599:     await fireStore
1600:         .collection(CollectionName.coupons)
1601:         .where('expiresAt', isGreaterThanOrEqualTo: Timestamp.now())
1602:         .where("isEnabled", isEqualTo: true)
1603:         .where("isPublic", isEqualTo: true)
1604:         .get()
1605:         .then((value) {
1606:           for (var element in value.docs) {
1607:             CouponModel walletTransactionModel = CouponModel.fromJson(element.data());
1608:             list.add(walletTransactionModel);
1609:           }
1610:         })
1611:         .catchError((error) {

1609:           }
1610:         })
1611:         .catchError((error) {
1612:           log(error.toString());
1613:         });
1614:     return list;
1615:   }
1616: 
1617:   static Future<List<BannerModel>> getHomeTopBanner() async {
1618:     List<BannerModel> bannerList = [];
1619:     await fireStore
1620:         .collection(CollectionName.bannerItems)
1621:         .where("is_publish", isEqualTo: true)
1622:         .where("sectionId", isEqualTo: Constant.sectionConstantModel!.id)
1623:         .where("position", isEqualTo: "top")
1624:         .orderBy("set_order", descending: false)
1625:         .get()
1626:         .then((value) {
1627:           for (var element in value.docs) {
1628:             BannerModel bannerHome = BannerModel.fromJson(element.data());
1629:             bannerList.add(bannerHome);
1630:           }
1631:         });

1786:         print("Ã¢ÂÅ’ No user is logged in.");
1787:         return false;
1788:       }
1789: 
1790:       final idToken = await user.getIdToken();
1791:       final projectId = DefaultFirebaseOptions.currentPlatform.projectId;
1792:       final url = Uri.parse('https://us-central1-$projectId.cloudfunctions.net/deleteUser');
1793: 
1794:       final response = await http.post(
1795:         url,
1796:         headers: {'Authorization': 'Bearer $idToken', 'Content-Type': 'application/json'},
1797:         body: jsonEncode({
1798:           'data': {'uid': uid}, // Ã°Å¸â€˜Ë† matches your Cloud Function structure
1799:         }),
1800:       );
1801: 
1802:       print("Response [${response.statusCode}]: ${response.body}");
1803: 
1804:       if (response.statusCode == 200) {
1805:         final decoded = jsonDecode(response.body);
1806:         return decoded['result']?['success'] == true || decoded['success'] == true;
1807:       } else {
1808:         print("Ã¢Å¡Â Ã¯Â¸Â Cloud Function failed: ${response.body}");

1794:       final response = await http.post(
1795:         url,
1796:         headers: {'Authorization': 'Bearer $idToken', 'Content-Type': 'application/json'},
1797:         body: jsonEncode({
1798:           'data': {'uid': uid}, // Ã°Å¸â€˜Ë† matches your Cloud Function structure
1799:         }),
1800:       );
1801: 
1802:       print("Response [${response.statusCode}]: ${response.body}");
1803: 
1804:       if (response.statusCode == 200) {
1805:         final decoded = jsonDecode(response.body);
1806:         return decoded['result']?['success'] == true || decoded['success'] == true;
1807:       } else {
1808:         print("Ã¢Å¡Â Ã¯Â¸Â Cloud Function failed: ${response.body}");
1809:         return false;
1810:       }
1811:     } catch (e) {
1812:       print("Ã¢ÂÅ’ Error deleting driver: $e");
1813:       return false;
1814:     }
1815:   }
1816: 

1796:         headers: {'Authorization': 'Bearer $idToken', 'Content-Type': 'application/json'},
1797:         body: jsonEncode({
1798:           'data': {'uid': uid}, // Ã°Å¸â€˜Ë† matches your Cloud Function structure
1799:         }),
1800:       );
1801: 
1802:       print("Response [${response.statusCode}]: ${response.body}");
1803: 
1804:       if (response.statusCode == 200) {
1805:         final decoded = jsonDecode(response.body);
1806:         return decoded['result']?['success'] == true || decoded['success'] == true;
1807:       } else {
1808:         print("Ã¢Å¡Â Ã¯Â¸Â Cloud Function failed: ${response.body}");
1809:         return false;
1810:       }
1811:     } catch (e) {
1812:       print("Ã¢ÂÅ’ Error deleting driver: $e");
1813:       return false;
1814:     }
1815:   }
1816: 
1817:   static Future<List<ParcelCategory>> getParcelServiceCategory() async {
1818:     List<ParcelCategory> parcelCategoryList = [];

1797:         body: jsonEncode({
1798:           'data': {'uid': uid}, // Ã°Å¸â€˜Ë† matches your Cloud Function structure
1799:         }),
1800:       );
1801: 
1802:       print("Response [${response.statusCode}]: ${response.body}");
1803: 
1804:       if (response.statusCode == 200) {
1805:         final decoded = jsonDecode(response.body);
1806:         return decoded['result']?['success'] == true || decoded['success'] == true;
1807:       } else {
1808:         print("Ã¢Å¡Â Ã¯Â¸Â Cloud Function failed: ${response.body}");
1809:         return false;
1810:       }
1811:     } catch (e) {
1812:       print("Ã¢ÂÅ’ Error deleting driver: $e");
1813:       return false;
1814:     }
1815:   }
1816: 
1817:   static Future<List<ParcelCategory>> getParcelServiceCategory() async {
1818:     List<ParcelCategory> parcelCategoryList = [];
1819:     await fireStore

1800:       );
1801: 
1802:       print("Response [${response.statusCode}]: ${response.body}");
1803: 
1804:       if (response.statusCode == 200) {
1805:         final decoded = jsonDecode(response.body);
1806:         return decoded['result']?['success'] == true || decoded['success'] == true;
1807:       } else {
1808:         print("Ã¢Å¡Â Ã¯Â¸Â Cloud Function failed: ${response.body}");
1809:         return false;
1810:       }
1811:     } catch (e) {
1812:       print("Ã¢ÂÅ’ Error deleting driver: $e");
1813:       return false;
1814:     }
1815:   }
1816: 
1817:   static Future<List<ParcelCategory>> getParcelServiceCategory() async {
1818:     List<ParcelCategory> parcelCategoryList = [];
1819:     await fireStore
1820:         .collection(CollectionName.parcelCategory)
1821:         .where('publish', isEqualTo: true)
1822:         .where('sectionId', isEqualTo: Constant.sectionConstantModel!.id)

1861:     //   if (isNew) {
1862:     //     orderModel.id = docRef.id;
1863:     //   }
1864:     //
1865:     //   // Handle wallet payment if needed
1866:     //   if (orderModel.paymentCollectByReceiver == false && orderModel.paymentMethod == "wallet") {
1867:     //     WalletTransactionModel transactionModel = WalletTransactionModel(
1868:     //       id: Constant.getUuid(),
1869:     //       serviceType: 'parcel-service',
1870:     //       amount: totalAmount,
1871:     //       date: Timestamp.now(),
1872:     //       paymentMethod: PaymentGateway.wallet.name,
1873:     //       transactionUser: "customer",
1874:     //       userId: FireStoreUtils.getCurrentUid(),
1875:     //       isTopup: false,
1876:     //       orderId: orderModel.id,
1877:     //       note: "Order Amount debited".tr,
1878:     //       paymentStatus: "success".tr,
1879:     //     );
1880:     //
1881:     //     await FireStoreUtils.setWalletTransaction(transactionModel).then((value) async {
1882:     //       if (value == true) {
1883:     //         await FireStoreUtils.updateUserWallet(amount: "-$totalAmount", userId: FireStoreUtils.getCurrentUid());

```

### FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\send_notification.dart
```dart
1: import 'dart:convert';
2: import 'package:customer/constant/constant.dart';
3: import 'package:customer/models/notification_model.dart';
4: import 'package:customer/service/fire_store_utils.dart';
5: import 'package:flutter/cupertino.dart';
6: import 'package:http/http.dart' as http;
7: import 'package:googleapis_auth/auth_io.dart';
8: 
9: class SendNotification {
10:   static final _scopes = ['https://www.googleapis.com/auth/firebase.messaging'];
11: 
12:   static Future getCharacters() {
13:     return http.get(Uri.parse(Constant.jsonNotificationFileURL.toString()));
14:   }
15: 
16:   static Future<String> getAccessToken() async {
17:     Map<String, dynamic> jsonData = {};
18: 
19:     await getCharacters().then((response) {
20:       jsonData = json.decode(response.body);
21:     });

2: import 'package:customer/constant/constant.dart';
3: import 'package:customer/models/notification_model.dart';
4: import 'package:customer/service/fire_store_utils.dart';
5: import 'package:flutter/cupertino.dart';
6: import 'package:http/http.dart' as http;
7: import 'package:googleapis_auth/auth_io.dart';
8: 
9: class SendNotification {
10:   static final _scopes = ['https://www.googleapis.com/auth/firebase.messaging'];
11: 
12:   static Future getCharacters() {
13:     return http.get(Uri.parse(Constant.jsonNotificationFileURL.toString()));
14:   }
15: 
16:   static Future<String> getAccessToken() async {
17:     Map<String, dynamic> jsonData = {};
18: 
19:     await getCharacters().then((response) {
20:       jsonData = json.decode(response.body);
21:     });
22:     final serviceAccountCredentials = ServiceAccountCredentials.fromJson(jsonData);
23:     final client = await clientViaServiceAccount(serviceAccountCredentials, _scopes);
24:     return client.credentials.accessToken.data;

5: import 'package:flutter/cupertino.dart';
6: import 'package:http/http.dart' as http;
7: import 'package:googleapis_auth/auth_io.dart';
8: 
9: class SendNotification {
10:   static final _scopes = ['https://www.googleapis.com/auth/firebase.messaging'];
11: 
12:   static Future getCharacters() {
13:     return http.get(Uri.parse(Constant.jsonNotificationFileURL.toString()));
14:   }
15: 
16:   static Future<String> getAccessToken() async {
17:     Map<String, dynamic> jsonData = {};
18: 
19:     await getCharacters().then((response) {
20:       jsonData = json.decode(response.body);
21:     });
22:     final serviceAccountCredentials = ServiceAccountCredentials.fromJson(jsonData);
23:     final client = await clientViaServiceAccount(serviceAccountCredentials, _scopes);
24:     return client.credentials.accessToken.data;
25:   }
26: 
27:   static Future<bool> sendFcmMessage(String type, String token, Map<String, dynamic>? payload) async {

11: 
12:   static Future getCharacters() {
13:     return http.get(Uri.parse(Constant.jsonNotificationFileURL.toString()));
14:   }
15: 
16:   static Future<String> getAccessToken() async {
17:     Map<String, dynamic> jsonData = {};
18: 
19:     await getCharacters().then((response) {
20:       jsonData = json.decode(response.body);
21:     });
22:     final serviceAccountCredentials = ServiceAccountCredentials.fromJson(jsonData);
23:     final client = await clientViaServiceAccount(serviceAccountCredentials, _scopes);
24:     return client.credentials.accessToken.data;
25:   }
26: 
27:   static Future<bool> sendFcmMessage(String type, String token, Map<String, dynamic>? payload) async {
28:     print(type);
29:     try {
30:       final String accessToken = await getAccessToken();
31:       debugPrint("accessToken=======>");
32:       debugPrint(accessToken);
33:       NotificationModel? notificationModel = await FireStoreUtils.getNotificationContent(type);

12:   static Future getCharacters() {
13:     return http.get(Uri.parse(Constant.jsonNotificationFileURL.toString()));
14:   }
15: 
16:   static Future<String> getAccessToken() async {
17:     Map<String, dynamic> jsonData = {};
18: 
19:     await getCharacters().then((response) {
20:       jsonData = json.decode(response.body);
21:     });
22:     final serviceAccountCredentials = ServiceAccountCredentials.fromJson(jsonData);
23:     final client = await clientViaServiceAccount(serviceAccountCredentials, _scopes);
24:     return client.credentials.accessToken.data;
25:   }
26: 
27:   static Future<bool> sendFcmMessage(String type, String token, Map<String, dynamic>? payload) async {
28:     print(type);
29:     try {
30:       final String accessToken = await getAccessToken();
31:       debugPrint("accessToken=======>");
32:       debugPrint(accessToken);
33:       NotificationModel? notificationModel = await FireStoreUtils.getNotificationContent(type);
34: 

27:   static Future<bool> sendFcmMessage(String type, String token, Map<String, dynamic>? payload) async {
28:     print(type);
29:     try {
30:       final String accessToken = await getAccessToken();
31:       debugPrint("accessToken=======>");
32:       debugPrint(accessToken);
33:       NotificationModel? notificationModel = await FireStoreUtils.getNotificationContent(type);
34: 
35:       final response = await http.post(
36:         Uri.parse('https://fcm.googleapis.com/v1/projects/${Constant.senderId}/messages:send'),
37:         headers: <String, String>{'Content-Type': 'application/json', 'Authorization': 'Bearer $accessToken'},
38:         body: jsonEncode(<String, dynamic>{
39:           'message': {
40:             'token': token,
41:             'notification': {'body': notificationModel?.message ?? '', 'title': notificationModel?.subject ?? ''},
42:             'data': payload,
43:           },
44:         }),
45:       );
46: 
47:       debugPrint("Notification=======>");
48:       debugPrint(response.statusCode.toString());
49:       debugPrint(response.body);

28:     print(type);
29:     try {
30:       final String accessToken = await getAccessToken();
31:       debugPrint("accessToken=======>");
32:       debugPrint(accessToken);
33:       NotificationModel? notificationModel = await FireStoreUtils.getNotificationContent(type);
34: 
35:       final response = await http.post(
36:         Uri.parse('https://fcm.googleapis.com/v1/projects/${Constant.senderId}/messages:send'),
37:         headers: <String, String>{'Content-Type': 'application/json', 'Authorization': 'Bearer $accessToken'},
38:         body: jsonEncode(<String, dynamic>{
39:           'message': {
40:             'token': token,
41:             'notification': {'body': notificationModel?.message ?? '', 'title': notificationModel?.subject ?? ''},
42:             'data': payload,
43:           },
44:         }),
45:       );
46: 
47:       debugPrint("Notification=======>");
48:       debugPrint(response.statusCode.toString());
49:       debugPrint(response.body);
50:       return true;

40:             'token': token,
41:             'notification': {'body': notificationModel?.message ?? '', 'title': notificationModel?.subject ?? ''},
42:             'data': payload,
43:           },
44:         }),
45:       );
46: 
47:       debugPrint("Notification=======>");
48:       debugPrint(response.statusCode.toString());
49:       debugPrint(response.body);
50:       return true;
51:     } catch (e) {
52:       debugPrint(e.toString());
53:       return false;
54:     }
55:   }
56: 
57:   static Future<bool> sendOneNotification({required String token, required String title, required String body, required Map<String, dynamic> payload}) async {
58:     try {
59:       final String accessToken = await getAccessToken();
60:       debugPrint("accessToken=======>");
61:       debugPrint(accessToken);
62: 

41:             'notification': {'body': notificationModel?.message ?? '', 'title': notificationModel?.subject ?? ''},
42:             'data': payload,
43:           },
44:         }),
45:       );
46: 
47:       debugPrint("Notification=======>");
48:       debugPrint(response.statusCode.toString());
49:       debugPrint(response.body);
50:       return true;
51:     } catch (e) {
52:       debugPrint(e.toString());
53:       return false;
54:     }
55:   }
56: 
57:   static Future<bool> sendOneNotification({required String token, required String title, required String body, required Map<String, dynamic> payload}) async {
58:     try {
59:       final String accessToken = await getAccessToken();
60:       debugPrint("accessToken=======>");
61:       debugPrint(accessToken);
62: 
63:       final response = await http.post(

55:   }
56: 
57:   static Future<bool> sendOneNotification({required String token, required String title, required String body, required Map<String, dynamic> payload}) async {
58:     try {
59:       final String accessToken = await getAccessToken();
60:       debugPrint("accessToken=======>");
61:       debugPrint(accessToken);
62: 
63:       final response = await http.post(
64:         Uri.parse('https://fcm.googleapis.com/v1/projects/${Constant.senderId}/messages:send'),
65:         headers: <String, String>{'Content-Type': 'application/json', 'Authorization': 'Bearer $accessToken'},
66:         body: jsonEncode(<String, dynamic>{
67:           'message': {
68:             'token': token,
69:             'notification': {'body': body, 'title': title},
70:             'data': payload,
71:           },
72:         }),
73:       );
74: 
75:       debugPrint("Notification=======>");
76:       debugPrint(response.statusCode.toString());
77:       debugPrint(response.body);

56: 
57:   static Future<bool> sendOneNotification({required String token, required String title, required String body, required Map<String, dynamic> payload}) async {
58:     try {
59:       final String accessToken = await getAccessToken();
60:       debugPrint("accessToken=======>");
61:       debugPrint(accessToken);
62: 
63:       final response = await http.post(
64:         Uri.parse('https://fcm.googleapis.com/v1/projects/${Constant.senderId}/messages:send'),
65:         headers: <String, String>{'Content-Type': 'application/json', 'Authorization': 'Bearer $accessToken'},
66:         body: jsonEncode(<String, dynamic>{
67:           'message': {
68:             'token': token,
69:             'notification': {'body': body, 'title': title},
70:             'data': payload,
71:           },
72:         }),
73:       );
74: 
75:       debugPrint("Notification=======>");
76:       debugPrint(response.statusCode.toString());
77:       debugPrint(response.body);
78:       return true;

68:             'token': token,
69:             'notification': {'body': body, 'title': title},
70:             'data': payload,
71:           },
72:         }),
73:       );
74: 
75:       debugPrint("Notification=======>");
76:       debugPrint(response.statusCode.toString());
77:       debugPrint(response.body);
78:       return true;
79:     } catch (e) {
80:       debugPrint(e.toString());
81:       return false;
82:     }
83:   }
84: 
85:   static Future<bool> sendChatFcmMessage(String title, String message, String token, Map<String, dynamic>? payload) async {
86:     try {
87:       final String accessToken = await getAccessToken();
88:       final response = await http.post(
89:         Uri.parse('https://fcm.googleapis.com/v1/projects/${Constant.senderId}/messages:send'),
90:         headers: <String, String>{'Content-Type': 'application/json', 'Authorization': 'Bearer $accessToken'},

69:             'notification': {'body': body, 'title': title},
70:             'data': payload,
71:           },
72:         }),
73:       );
74: 
75:       debugPrint("Notification=======>");
76:       debugPrint(response.statusCode.toString());
77:       debugPrint(response.body);
78:       return true;
79:     } catch (e) {
80:       debugPrint(e.toString());
81:       return false;
82:     }
83:   }
84: 
85:   static Future<bool> sendChatFcmMessage(String title, String message, String token, Map<String, dynamic>? payload) async {
86:     try {
87:       final String accessToken = await getAccessToken();
88:       final response = await http.post(
89:         Uri.parse('https://fcm.googleapis.com/v1/projects/${Constant.senderId}/messages:send'),
90:         headers: <String, String>{'Content-Type': 'application/json', 'Authorization': 'Bearer $accessToken'},
91:         body: jsonEncode(<String, dynamic>{

80:       debugPrint(e.toString());
81:       return false;
82:     }
83:   }
84: 
85:   static Future<bool> sendChatFcmMessage(String title, String message, String token, Map<String, dynamic>? payload) async {
86:     try {
87:       final String accessToken = await getAccessToken();
88:       final response = await http.post(
89:         Uri.parse('https://fcm.googleapis.com/v1/projects/${Constant.senderId}/messages:send'),
90:         headers: <String, String>{'Content-Type': 'application/json', 'Authorization': 'Bearer $accessToken'},
91:         body: jsonEncode(<String, dynamic>{
92:           'message': {
93:             'token': token,
94:             'notification': {'body': message, 'title': title},
95:             'data': payload,
96:           },
97:         }),
98:       );
99:       debugPrint("Notification=======>");
100:       debugPrint(response.statusCode.toString());
101:       debugPrint(response.body);
102:       return true;

81:       return false;
82:     }
83:   }
84: 
85:   static Future<bool> sendChatFcmMessage(String title, String message, String token, Map<String, dynamic>? payload) async {
86:     try {
87:       final String accessToken = await getAccessToken();
88:       final response = await http.post(
89:         Uri.parse('https://fcm.googleapis.com/v1/projects/${Constant.senderId}/messages:send'),
90:         headers: <String, String>{'Content-Type': 'application/json', 'Authorization': 'Bearer $accessToken'},
91:         body: jsonEncode(<String, dynamic>{
92:           'message': {
93:             'token': token,
94:             'notification': {'body': message, 'title': title},
95:             'data': payload,
96:           },
97:         }),
98:       );
99:       debugPrint("Notification=======>");
100:       debugPrint(response.statusCode.toString());
101:       debugPrint(response.body);
102:       return true;
103:     } catch (e) {

92:           'message': {
93:             'token': token,
94:             'notification': {'body': message, 'title': title},
95:             'data': payload,
96:           },
97:         }),
98:       );
99:       debugPrint("Notification=======>");
100:       debugPrint(response.statusCode.toString());
101:       debugPrint(response.body);
102:       return true;
103:     } catch (e) {
104:       print(e);
105:       return false;
106:     }
107:   }
108: }

93:             'token': token,
94:             'notification': {'body': message, 'title': title},
95:             'data': payload,
96:           },
97:         }),
98:       );
99:       debugPrint("Notification=======>");
100:       debugPrint(response.statusCode.toString());
101:       debugPrint(response.body);
102:       return true;
103:     } catch (e) {
104:       print(e);
105:       return false;
106:     }
107:   }
108: }

```

### FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\themes\app_them_data.dart
```dart
18:   static const Color carRentDark100 = Color(0xFF1E5235);
19:   static const Color carRentDark200 = Color(0xFF37905E);
20:   static const Color carRentDark300 = Color(0xFF4FCF88);
21:   static const Color carRentDark400 = Color(0xFF83DDAB);
22:   static const Color carRentDark500 = Color(0xFFB7EBCE);
23:   static const Color carRentDark600 = Color(0xFFEBFAF2);
24: 
25:   // === E-Commerce (Light) ===
26:   static const Color ecommerce50 = Color(0xFFE5EDFF);
27:   static const Color ecommerce100 = Color(0xFFABC4FF);
28:   static const Color ecommerce200 = Color(0xFF72BCFF);
29:   static Color ecommerce300 = const Color(0xFF3974FF);
30:   static const Color ecommerce400 = Color(0xFF2650B2);
31:   static const Color ecommerce500 = Color(0xFF132C66);
32:   static const Color ecommerce600 = Color(0xFF00081A);
33: 
34:   // === E-Commerce (Dark) ===
35:   static const Color ecommerceDark50 = Color(0xFF00081A);
36:   static const Color ecommerceDark100 = Color(0xFF132C66);
37:   static const Color ecommerceDark200 = Color(0xFF2650B2);
38:   static const Color ecommerceDark300 = Color(0xFF3974FF);
39:   static const Color ecommerceDark400 = Color(0xFF729CFF);
40:   static const Color ecommerceDark500 = Color(0xFFABC4FF);

19:   static const Color carRentDark200 = Color(0xFF37905E);
20:   static const Color carRentDark300 = Color(0xFF4FCF88);
21:   static const Color carRentDark400 = Color(0xFF83DDAB);
22:   static const Color carRentDark500 = Color(0xFFB7EBCE);
23:   static const Color carRentDark600 = Color(0xFFEBFAF2);
24: 
25:   // === E-Commerce (Light) ===
26:   static const Color ecommerce50 = Color(0xFFE5EDFF);
27:   static const Color ecommerce100 = Color(0xFFABC4FF);
28:   static const Color ecommerce200 = Color(0xFF72BCFF);
29:   static Color ecommerce300 = const Color(0xFF3974FF);
30:   static const Color ecommerce400 = Color(0xFF2650B2);
31:   static const Color ecommerce500 = Color(0xFF132C66);
32:   static const Color ecommerce600 = Color(0xFF00081A);
33: 
34:   // === E-Commerce (Dark) ===
35:   static const Color ecommerceDark50 = Color(0xFF00081A);
36:   static const Color ecommerceDark100 = Color(0xFF132C66);
37:   static const Color ecommerceDark200 = Color(0xFF2650B2);
38:   static const Color ecommerceDark300 = Color(0xFF3974FF);
39:   static const Color ecommerceDark400 = Color(0xFF729CFF);
40:   static const Color ecommerceDark500 = Color(0xFFABC4FF);
41:   static const Color ecommerceDark600 = Color(0xFFE5EDFF);

20:   static const Color carRentDark300 = Color(0xFF4FCF88);
21:   static const Color carRentDark400 = Color(0xFF83DDAB);
22:   static const Color carRentDark500 = Color(0xFFB7EBCE);
23:   static const Color carRentDark600 = Color(0xFFEBFAF2);
24: 
25:   // === E-Commerce (Light) ===
26:   static const Color ecommerce50 = Color(0xFFE5EDFF);
27:   static const Color ecommerce100 = Color(0xFFABC4FF);
28:   static const Color ecommerce200 = Color(0xFF72BCFF);
29:   static Color ecommerce300 = const Color(0xFF3974FF);
30:   static const Color ecommerce400 = Color(0xFF2650B2);
31:   static const Color ecommerce500 = Color(0xFF132C66);
32:   static const Color ecommerce600 = Color(0xFF00081A);
33: 
34:   // === E-Commerce (Dark) ===
35:   static const Color ecommerceDark50 = Color(0xFF00081A);
36:   static const Color ecommerceDark100 = Color(0xFF132C66);
37:   static const Color ecommerceDark200 = Color(0xFF2650B2);
38:   static const Color ecommerceDark300 = Color(0xFF3974FF);
39:   static const Color ecommerceDark400 = Color(0xFF729CFF);
40:   static const Color ecommerceDark500 = Color(0xFFABC4FF);
41:   static const Color ecommerceDark600 = Color(0xFFE5EDFF);
42: 

21:   static const Color carRentDark400 = Color(0xFF83DDAB);
22:   static const Color carRentDark500 = Color(0xFFB7EBCE);
23:   static const Color carRentDark600 = Color(0xFFEBFAF2);
24: 
25:   // === E-Commerce (Light) ===
26:   static const Color ecommerce50 = Color(0xFFE5EDFF);
27:   static const Color ecommerce100 = Color(0xFFABC4FF);
28:   static const Color ecommerce200 = Color(0xFF72BCFF);
29:   static Color ecommerce300 = const Color(0xFF3974FF);
30:   static const Color ecommerce400 = Color(0xFF2650B2);
31:   static const Color ecommerce500 = Color(0xFF132C66);
32:   static const Color ecommerce600 = Color(0xFF00081A);
33: 
34:   // === E-Commerce (Dark) ===
35:   static const Color ecommerceDark50 = Color(0xFF00081A);
36:   static const Color ecommerceDark100 = Color(0xFF132C66);
37:   static const Color ecommerceDark200 = Color(0xFF2650B2);
38:   static const Color ecommerceDark300 = Color(0xFF3974FF);
39:   static const Color ecommerceDark400 = Color(0xFF729CFF);
40:   static const Color ecommerceDark500 = Color(0xFFABC4FF);
41:   static const Color ecommerceDark600 = Color(0xFFE5EDFF);
42: 
43:   // === Multi-Vendor ===

22:   static const Color carRentDark500 = Color(0xFFB7EBCE);
23:   static const Color carRentDark600 = Color(0xFFEBFAF2);
24: 
25:   // === E-Commerce (Light) ===
26:   static const Color ecommerce50 = Color(0xFFE5EDFF);
27:   static const Color ecommerce100 = Color(0xFFABC4FF);
28:   static const Color ecommerce200 = Color(0xFF72BCFF);
29:   static Color ecommerce300 = const Color(0xFF3974FF);
30:   static const Color ecommerce400 = Color(0xFF2650B2);
31:   static const Color ecommerce500 = Color(0xFF132C66);
32:   static const Color ecommerce600 = Color(0xFF00081A);
33: 
34:   // === E-Commerce (Dark) ===
35:   static const Color ecommerceDark50 = Color(0xFF00081A);
36:   static const Color ecommerceDark100 = Color(0xFF132C66);
37:   static const Color ecommerceDark200 = Color(0xFF2650B2);
38:   static const Color ecommerceDark300 = Color(0xFF3974FF);
39:   static const Color ecommerceDark400 = Color(0xFF729CFF);
40:   static const Color ecommerceDark500 = Color(0xFFABC4FF);
41:   static const Color ecommerceDark600 = Color(0xFFE5EDFF);
42: 
43:   // === Multi-Vendor ===
44:   static const Color multiVendor50 = Color(0xFFFFE6E6);

23:   static const Color carRentDark600 = Color(0xFFEBFAF2);
24: 
25:   // === E-Commerce (Light) ===
26:   static const Color ecommerce50 = Color(0xFFE5EDFF);
27:   static const Color ecommerce100 = Color(0xFFABC4FF);
28:   static const Color ecommerce200 = Color(0xFF72BCFF);
29:   static Color ecommerce300 = const Color(0xFF3974FF);
30:   static const Color ecommerce400 = Color(0xFF2650B2);
31:   static const Color ecommerce500 = Color(0xFF132C66);
32:   static const Color ecommerce600 = Color(0xFF00081A);
33: 
34:   // === E-Commerce (Dark) ===
35:   static const Color ecommerceDark50 = Color(0xFF00081A);
36:   static const Color ecommerceDark100 = Color(0xFF132C66);
37:   static const Color ecommerceDark200 = Color(0xFF2650B2);
38:   static const Color ecommerceDark300 = Color(0xFF3974FF);
39:   static const Color ecommerceDark400 = Color(0xFF729CFF);
40:   static const Color ecommerceDark500 = Color(0xFFABC4FF);
41:   static const Color ecommerceDark600 = Color(0xFFE5EDFF);
42: 
43:   // === Multi-Vendor ===
44:   static const Color multiVendor50 = Color(0xFFFFE6E6);
45:   static const Color multiVendor100 = Color(0xFFFEB9B9);

24: 
25:   // === E-Commerce (Light) ===
26:   static const Color ecommerce50 = Color(0xFFE5EDFF);
27:   static const Color ecommerce100 = Color(0xFFABC4FF);
28:   static const Color ecommerce200 = Color(0xFF72BCFF);
29:   static Color ecommerce300 = const Color(0xFF3974FF);
30:   static const Color ecommerce400 = Color(0xFF2650B2);
31:   static const Color ecommerce500 = Color(0xFF132C66);
32:   static const Color ecommerce600 = Color(0xFF00081A);
33: 
34:   // === E-Commerce (Dark) ===
35:   static const Color ecommerceDark50 = Color(0xFF00081A);
36:   static const Color ecommerceDark100 = Color(0xFF132C66);
37:   static const Color ecommerceDark200 = Color(0xFF2650B2);
38:   static const Color ecommerceDark300 = Color(0xFF3974FF);
39:   static const Color ecommerceDark400 = Color(0xFF729CFF);
40:   static const Color ecommerceDark500 = Color(0xFFABC4FF);
41:   static const Color ecommerceDark600 = Color(0xFFE5EDFF);
42: 
43:   // === Multi-Vendor ===
44:   static const Color multiVendor50 = Color(0xFFFFE6E6);
45:   static const Color multiVendor100 = Color(0xFFFEB9B9);
46:   static const Color multiVendor200 = Color(0xFFEB8B8B);

27:   static const Color ecommerce100 = Color(0xFFABC4FF);
28:   static const Color ecommerce200 = Color(0xFF72BCFF);
29:   static Color ecommerce300 = const Color(0xFF3974FF);
30:   static const Color ecommerce400 = Color(0xFF2650B2);
31:   static const Color ecommerce500 = Color(0xFF132C66);
32:   static const Color ecommerce600 = Color(0xFF00081A);
33: 
34:   // === E-Commerce (Dark) ===
35:   static const Color ecommerceDark50 = Color(0xFF00081A);
36:   static const Color ecommerceDark100 = Color(0xFF132C66);
37:   static const Color ecommerceDark200 = Color(0xFF2650B2);
38:   static const Color ecommerceDark300 = Color(0xFF3974FF);
39:   static const Color ecommerceDark400 = Color(0xFF729CFF);
40:   static const Color ecommerceDark500 = Color(0xFFABC4FF);
41:   static const Color ecommerceDark600 = Color(0xFFE5EDFF);
42: 
43:   // === Multi-Vendor ===
44:   static const Color multiVendor50 = Color(0xFFFFE6E6);
45:   static const Color multiVendor100 = Color(0xFFFEB9B9);
46:   static const Color multiVendor200 = Color(0xFFEB8B8B);
47:   static const Color multiVendor300 = Color(0xFFFE5D5D);
48:   static const Color multiVendor400 = Color(0xFFB13E3E);
49:   static const Color multiVendor500 = Color(0xFF651F1F);

28:   static const Color ecommerce200 = Color(0xFF72BCFF);
29:   static Color ecommerce300 = const Color(0xFF3974FF);
30:   static const Color ecommerce400 = Color(0xFF2650B2);
31:   static const Color ecommerce500 = Color(0xFF132C66);
32:   static const Color ecommerce600 = Color(0xFF00081A);
33: 
34:   // === E-Commerce (Dark) ===
35:   static const Color ecommerceDark50 = Color(0xFF00081A);
36:   static const Color ecommerceDark100 = Color(0xFF132C66);
37:   static const Color ecommerceDark200 = Color(0xFF2650B2);
38:   static const Color ecommerceDark300 = Color(0xFF3974FF);
39:   static const Color ecommerceDark400 = Color(0xFF729CFF);
40:   static const Color ecommerceDark500 = Color(0xFFABC4FF);
41:   static const Color ecommerceDark600 = Color(0xFFE5EDFF);
42: 
43:   // === Multi-Vendor ===
44:   static const Color multiVendor50 = Color(0xFFFFE6E6);
45:   static const Color multiVendor100 = Color(0xFFFEB9B9);
46:   static const Color multiVendor200 = Color(0xFFEB8B8B);
47:   static const Color multiVendor300 = Color(0xFFFE5D5D);
48:   static const Color multiVendor400 = Color(0xFFB13E3E);
49:   static const Color multiVendor500 = Color(0xFF651F1F);
50:   static const Color multiVendor600 = Color(0xFF910000);

29:   static Color ecommerce300 = const Color(0xFF3974FF);
30:   static const Color ecommerce400 = Color(0xFF2650B2);
31:   static const Color ecommerce500 = Color(0xFF132C66);
32:   static const Color ecommerce600 = Color(0xFF00081A);
33: 
34:   // === E-Commerce (Dark) ===
35:   static const Color ecommerceDark50 = Color(0xFF00081A);
36:   static const Color ecommerceDark100 = Color(0xFF132C66);
37:   static const Color ecommerceDark200 = Color(0xFF2650B2);
38:   static const Color ecommerceDark300 = Color(0xFF3974FF);
39:   static const Color ecommerceDark400 = Color(0xFF729CFF);
40:   static const Color ecommerceDark500 = Color(0xFFABC4FF);
41:   static const Color ecommerceDark600 = Color(0xFFE5EDFF);
42: 
43:   // === Multi-Vendor ===
44:   static const Color multiVendor50 = Color(0xFFFFE6E6);
45:   static const Color multiVendor100 = Color(0xFFFEB9B9);
46:   static const Color multiVendor200 = Color(0xFFEB8B8B);
47:   static const Color multiVendor300 = Color(0xFFFE5D5D);
48:   static const Color multiVendor400 = Color(0xFFB13E3E);
49:   static const Color multiVendor500 = Color(0xFF651F1F);
50:   static const Color multiVendor600 = Color(0xFF910000);
51: 

30:   static const Color ecommerce400 = Color(0xFF2650B2);
31:   static const Color ecommerce500 = Color(0xFF132C66);
32:   static const Color ecommerce600 = Color(0xFF00081A);
33: 
34:   // === E-Commerce (Dark) ===
35:   static const Color ecommerceDark50 = Color(0xFF00081A);
36:   static const Color ecommerceDark100 = Color(0xFF132C66);
37:   static const Color ecommerceDark200 = Color(0xFF2650B2);
38:   static const Color ecommerceDark300 = Color(0xFF3974FF);
39:   static const Color ecommerceDark400 = Color(0xFF729CFF);
40:   static const Color ecommerceDark500 = Color(0xFFABC4FF);
41:   static const Color ecommerceDark600 = Color(0xFFE5EDFF);
42: 
43:   // === Multi-Vendor ===
44:   static const Color multiVendor50 = Color(0xFFFFE6E6);
45:   static const Color multiVendor100 = Color(0xFFFEB9B9);
46:   static const Color multiVendor200 = Color(0xFFEB8B8B);
47:   static const Color multiVendor300 = Color(0xFFFE5D5D);
48:   static const Color multiVendor400 = Color(0xFFB13E3E);
49:   static const Color multiVendor500 = Color(0xFF651F1F);
50:   static const Color multiVendor600 = Color(0xFF910000);
51: 
52:   static const Color multiVendorDark50 = Color(0xFF910000);

31:   static const Color ecommerce500 = Color(0xFF132C66);
32:   static const Color ecommerce600 = Color(0xFF00081A);
33: 
34:   // === E-Commerce (Dark) ===
35:   static const Color ecommerceDark50 = Color(0xFF00081A);
36:   static const Color ecommerceDark100 = Color(0xFF132C66);
37:   static const Color ecommerceDark200 = Color(0xFF2650B2);
38:   static const Color ecommerceDark300 = Color(0xFF3974FF);
39:   static const Color ecommerceDark400 = Color(0xFF729CFF);
40:   static const Color ecommerceDark500 = Color(0xFFABC4FF);
41:   static const Color ecommerceDark600 = Color(0xFFE5EDFF);
42: 
43:   // === Multi-Vendor ===
44:   static const Color multiVendor50 = Color(0xFFFFE6E6);
45:   static const Color multiVendor100 = Color(0xFFFEB9B9);
46:   static const Color multiVendor200 = Color(0xFFEB8B8B);
47:   static const Color multiVendor300 = Color(0xFFFE5D5D);
48:   static const Color multiVendor400 = Color(0xFFB13E3E);
49:   static const Color multiVendor500 = Color(0xFF651F1F);
50:   static const Color multiVendor600 = Color(0xFF910000);
51: 
52:   static const Color multiVendorDark50 = Color(0xFF910000);
53:   static const Color multiVendorDark100 = Color(0xFF651F1F);

32:   static const Color ecommerce600 = Color(0xFF00081A);
33: 
34:   // === E-Commerce (Dark) ===
35:   static const Color ecommerceDark50 = Color(0xFF00081A);
36:   static const Color ecommerceDark100 = Color(0xFF132C66);
37:   static const Color ecommerceDark200 = Color(0xFF2650B2);
38:   static const Color ecommerceDark300 = Color(0xFF3974FF);
39:   static const Color ecommerceDark400 = Color(0xFF729CFF);
40:   static const Color ecommerceDark500 = Color(0xFFABC4FF);
41:   static const Color ecommerceDark600 = Color(0xFFE5EDFF);
42: 
43:   // === Multi-Vendor ===
44:   static const Color multiVendor50 = Color(0xFFFFE6E6);
45:   static const Color multiVendor100 = Color(0xFFFEB9B9);
46:   static const Color multiVendor200 = Color(0xFFEB8B8B);
47:   static const Color multiVendor300 = Color(0xFFFE5D5D);
48:   static const Color multiVendor400 = Color(0xFFB13E3E);
49:   static const Color multiVendor500 = Color(0xFF651F1F);
50:   static const Color multiVendor600 = Color(0xFF910000);
51: 
52:   static const Color multiVendorDark50 = Color(0xFF910000);
53:   static const Color multiVendorDark100 = Color(0xFF651F1F);
54:   static const Color multiVendorDark200 = Color(0xFFB13E3E);

33: 
34:   // === E-Commerce (Dark) ===
35:   static const Color ecommerceDark50 = Color(0xFF00081A);
36:   static const Color ecommerceDark100 = Color(0xFF132C66);
37:   static const Color ecommerceDark200 = Color(0xFF2650B2);
38:   static const Color ecommerceDark300 = Color(0xFF3974FF);
39:   static const Color ecommerceDark400 = Color(0xFF729CFF);
40:   static const Color ecommerceDark500 = Color(0xFFABC4FF);
41:   static const Color ecommerceDark600 = Color(0xFFE5EDFF);
42: 
43:   // === Multi-Vendor ===
44:   static const Color multiVendor50 = Color(0xFFFFE6E6);
45:   static const Color multiVendor100 = Color(0xFFFEB9B9);
46:   static const Color multiVendor200 = Color(0xFFEB8B8B);
47:   static const Color multiVendor300 = Color(0xFFFE5D5D);
48:   static const Color multiVendor400 = Color(0xFFB13E3E);
49:   static const Color multiVendor500 = Color(0xFF651F1F);
50:   static const Color multiVendor600 = Color(0xFF910000);
51: 
52:   static const Color multiVendorDark50 = Color(0xFF910000);
53:   static const Color multiVendorDark100 = Color(0xFF651F1F);
54:   static const Color multiVendorDark200 = Color(0xFFB13E3E);
55:   static const Color multiVendorDark300 = Color(0xFFFE5D5D);

```

### FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\themes\text_field_widget.dart
```dart
88:       crossAxisAlignment: CrossAxisAlignment.start,
89:       children: [
90:         if (widget.title != null) ...[
91:           Text(widget.title!.tr, style: AppThemeData.boldTextStyle(fontSize: 14, color: isDark ? AppThemeData.greyDark800 : AppThemeData.grey800)),
92:           const SizedBox(height: 5),
93:         ],
94:         TextFormField(
95:           keyboardType: widget.textInputType ?? TextInputType.text,
96:           textCapitalization: TextCapitalization.sentences,
97:           controller: widget.controller,
98:           maxLines: widget.maxLine ?? 1,
99:           focusNode: _focusNode,
100:           textInputAction: widget.textInputAction ?? TextInputAction.done,
101:           inputFormatters: widget.inputFormatters,
102:           obscureText: widget.obscureText ?? false,
103:           obscuringCharacter: 'â—',
104:           onChanged: widget.onchange,
105:           readOnly: widget.readOnly ?? false,
106:           onFieldSubmitted: widget.onFieldSubmitted,
107:           style: AppThemeData.semiBoldTextStyle(color: textColor),
108:           decoration: InputDecoration(
109:             errorStyle: const TextStyle(color: Colors.red),
110:             filled: true,

```

### FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\utils\notification_service.dart
```dart
26:     var request = await FirebaseMessaging.instance.requestPermission(alert: true, announcement: false, badge: true, carPlay: false, criticalAlert: false, provisional: false, sound: true);
27: 
28:     if (request.authorizationStatus == AuthorizationStatus.authorized || request.authorizationStatus == AuthorizationStatus.provisional) {
29:       const AndroidInitializationSettings initializationSettingsAndroid = AndroidInitializationSettings('@mipmap/ic_launcher');
30:       var iosInitializationSettings = const DarwinInitializationSettings();
31:       final InitializationSettings initializationSettings = InitializationSettings(android: initializationSettingsAndroid, iOS: iosInitializationSettings);
32:       await flutterLocalNotificationsPlugin.initialize(
33:         settings: initializationSettings,
34:         onDidReceiveNotificationResponse: (response) {
35:           if (response.payload != null) {
36:             final data = jsonDecode(response.payload!);
37:             final String type = data['type'] ?? '';
38:             final String role = data['chatType'] ?? '';
39:             handleMessageClick(type: type, role: role, isBgApp: false);
40:           }
41:         },
42:       );
43:       setupInteractedMessage();
44:     }
45:   }
46: 
47:   Future<void> setupInteractedMessage() async {
48:     RemoteMessage? initialMessage = await FirebaseMessaging.instance.getInitialMessage();

27: 
28:     if (request.authorizationStatus == AuthorizationStatus.authorized || request.authorizationStatus == AuthorizationStatus.provisional) {
29:       const AndroidInitializationSettings initializationSettingsAndroid = AndroidInitializationSettings('@mipmap/ic_launcher');
30:       var iosInitializationSettings = const DarwinInitializationSettings();
31:       final InitializationSettings initializationSettings = InitializationSettings(android: initializationSettingsAndroid, iOS: iosInitializationSettings);
32:       await flutterLocalNotificationsPlugin.initialize(
33:         settings: initializationSettings,
34:         onDidReceiveNotificationResponse: (response) {
35:           if (response.payload != null) {
36:             final data = jsonDecode(response.payload!);
37:             final String type = data['type'] ?? '';
38:             final String role = data['chatType'] ?? '';
39:             handleMessageClick(type: type, role: role, isBgApp: false);
40:           }
41:         },
42:       );
43:       setupInteractedMessage();
44:     }
45:   }
46: 
47:   Future<void> setupInteractedMessage() async {
48:     RemoteMessage? initialMessage = await FirebaseMessaging.instance.getInitialMessage();
49:     if (initialMessage != null) {

28:     if (request.authorizationStatus == AuthorizationStatus.authorized || request.authorizationStatus == AuthorizationStatus.provisional) {
29:       const AndroidInitializationSettings initializationSettingsAndroid = AndroidInitializationSettings('@mipmap/ic_launcher');
30:       var iosInitializationSettings = const DarwinInitializationSettings();
31:       final InitializationSettings initializationSettings = InitializationSettings(android: initializationSettingsAndroid, iOS: iosInitializationSettings);
32:       await flutterLocalNotificationsPlugin.initialize(
33:         settings: initializationSettings,
34:         onDidReceiveNotificationResponse: (response) {
35:           if (response.payload != null) {
36:             final data = jsonDecode(response.payload!);
37:             final String type = data['type'] ?? '';
38:             final String role = data['chatType'] ?? '';
39:             handleMessageClick(type: type, role: role, isBgApp: false);
40:           }
41:         },
42:       );
43:       setupInteractedMessage();
44:     }
45:   }
46: 
47:   Future<void> setupInteractedMessage() async {
48:     RemoteMessage? initialMessage = await FirebaseMessaging.instance.getInitialMessage();
49:     if (initialMessage != null) {
50:       final String type = initialMessage.data['type'] ?? '';

```

### FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\widget\osm_map\map_controller.dart
```dart
17:     if (query.length < 3) {
18:       searchResults.clear();
19:       return;
20:     }
21: 
22:     final url = Uri.parse(
23:         'https://nominatim.openstreetmap.org/search?q=$query&format=json&addressdetails=1&limit=10');
24: 
25:     final response = await http.get(url, headers: {
26:       'User-Agent': 'FlutterMapApp/1.0 (menil.siddhiinfosoft@gmail.com)',
27:     });
28: 
29:     if (response.statusCode == 200) {
30:       final data = json.decode(response.body);
31:       searchResults.value = data;
32:     }
33:   }
34: 
35:   void selectSearchResult(Map<String, dynamic> place) {
36:     final lat = double.parse(place['lat']);
37:     final lon = double.parse(place['lon']);
38:     final address = place['display_name'];
39: 

21: 
22:     final url = Uri.parse(
23:         'https://nominatim.openstreetmap.org/search?q=$query&format=json&addressdetails=1&limit=10');
24: 
25:     final response = await http.get(url, headers: {
26:       'User-Agent': 'FlutterMapApp/1.0 (menil.siddhiinfosoft@gmail.com)',
27:     });
28: 
29:     if (response.statusCode == 200) {
30:       final data = json.decode(response.body);
31:       searchResults.value = data;
32:     }
33:   }
34: 
35:   void selectSearchResult(Map<String, dynamic> place) {
36:     final lat = double.parse(place['lat']);
37:     final lon = double.parse(place['lon']);
38:     final address = place['display_name'];
39: 
40:     // Store only the selected place
41:     pickedPlace.value = PlaceModel(
42:       coordinates: LatLng(lat, lon),
43:       address: address,

22:     final url = Uri.parse(
23:         'https://nominatim.openstreetmap.org/search?q=$query&format=json&addressdetails=1&limit=10');
24: 
25:     final response = await http.get(url, headers: {
26:       'User-Agent': 'FlutterMapApp/1.0 (menil.siddhiinfosoft@gmail.com)',
27:     });
28: 
29:     if (response.statusCode == 200) {
30:       final data = json.decode(response.body);
31:       searchResults.value = data;
32:     }
33:   }
34: 
35:   void selectSearchResult(Map<String, dynamic> place) {
36:     final lat = double.parse(place['lat']);
37:     final lon = double.parse(place['lon']);
38:     final address = place['display_name'];
39: 
40:     // Store only the selected place
41:     pickedPlace.value = PlaceModel(
42:       coordinates: LatLng(lat, lon),
43:       address: address,
44:     );

49:     final address = await _getAddressFromLatLng(coords);
50:     pickedPlace.value = PlaceModel(coordinates: coords, address: address);
51:   }
52: 
53:   Future<String> _getAddressFromLatLng(LatLng coords) async {
54:     final url = Uri.parse(
55:         'https://nominatim.openstreetmap.org/reverse?lat=${coords.latitude}&lon=${coords.longitude}&format=json');
56: 
57:     final response = await http.get(url, headers: {
58:       'User-Agent': 'FlutterMapApp/1.0 (menil.siddhiinfosoft@gmail.com)',
59:     });
60: 
61:     if (response.statusCode == 200) {
62:       final data = json.decode(response.body);
63:       return data['display_name'] ?? 'Unknown location';
64:     } else {
65:       return 'Unknown location';
66:     }
67:   }
68: 
69:   void clearAll() {
70:     pickedPlace.value = null; // Clear the selected place
71:   }

53:   Future<String> _getAddressFromLatLng(LatLng coords) async {
54:     final url = Uri.parse(
55:         'https://nominatim.openstreetmap.org/reverse?lat=${coords.latitude}&lon=${coords.longitude}&format=json');
56: 
57:     final response = await http.get(url, headers: {
58:       'User-Agent': 'FlutterMapApp/1.0 (menil.siddhiinfosoft@gmail.com)',
59:     });
60: 
61:     if (response.statusCode == 200) {
62:       final data = json.decode(response.body);
63:       return data['display_name'] ?? 'Unknown location';
64:     } else {
65:       return 'Unknown location';
66:     }
67:   }
68: 
69:   void clearAll() {
70:     pickedPlace.value = null; // Clear the selected place
71:   }
72: 
73:   @override
74:   void onInit() {
75:     // TODO: implement onInit

54:     final url = Uri.parse(
55:         'https://nominatim.openstreetmap.org/reverse?lat=${coords.latitude}&lon=${coords.longitude}&format=json');
56: 
57:     final response = await http.get(url, headers: {
58:       'User-Agent': 'FlutterMapApp/1.0 (menil.siddhiinfosoft@gmail.com)',
59:     });
60: 
61:     if (response.statusCode == 200) {
62:       final data = json.decode(response.body);
63:       return data['display_name'] ?? 'Unknown location';
64:     } else {
65:       return 'Unknown location';
66:     }
67:   }
68: 
69:   void clearAll() {
70:     pickedPlace.value = null; // Clear the selected place
71:   }
72: 
73:   @override
74:   void onInit() {
75:     // TODO: implement onInit
76:     super.onInit();

```

### FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\widget\place_picker\location_picker_screen.dart
```dart
5: import 'package:customer/constant/constant.dart';
6: import 'package:customer/controllers/theme_controller.dart';
7: import 'package:flutter/material.dart';
8: import 'package:flutter_google_places_hoc081098/flutter_google_places_hoc081098.dart';
9: import 'package:flutter_google_places_hoc081098/google_maps_webservice_places.dart';
10: import 'package:get/get.dart';
11: import 'package:google_maps_flutter/google_maps_flutter.dart';
12: 
13: final GoogleMapsPlaces _places = GoogleMapsPlaces(apiKey: Constant.mapAPIKey);
14: 
15: class LocationPickerScreen extends StatelessWidget {
16:   const LocationPickerScreen({super.key});
17: 
18:   @override
19:   Widget build(BuildContext context) {
20:     final themeController = Get.find<ThemeController>();
21:     final isDark = themeController.isDark.value;
22:     return GetX<LocationController>(
23:       init: LocationController(),
24:       builder: (controller) {
25:         return Scaffold(
26:           body: Stack(
27:             children: [

69:                       child: Container(
70:                         decoration: BoxDecoration(color: isDark ? AppThemeData.greyDark50 : AppThemeData.grey50, borderRadius: BorderRadius.circular(30)),
71:                         child: Padding(padding: const EdgeInsets.all(10), child: Icon(Icons.arrow_back_ios_new_outlined, color: isDark ? AppThemeData.greyDark900 : AppThemeData.grey900)),
72:                       ),
73:                     ),
74:                     SizedBox(height: 20),
75:                     GestureDetector(
76:                       onTap: () async {
77:                         Prediction? p = await PlacesAutocomplete.show(context: context, apiKey: Constant.mapAPIKey, mode: Mode.overlay, language: "en");
78:                         if (p != null) {
79:                           final detail = await _places.getDetailsByPlaceId(p.placeId!);
80:                           final lat = detail.result.geometry!.location.lat;
81:                           final lng = detail.result.geometry!.location.lng;
82:                           final LatLng pos = LatLng(lat, lng);
83:                           controller.selectedLocation.value = pos;
84:                           controller.mapController?.animateCamera(CameraUpdate.newLatLngZoom(pos, 15));
85:                           controller.getAddressFromLatLng(pos);
86:                         }
87:                       },
88:                       child: Container(
89:                         width: Responsive.width(100, context),
90:                         padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 12),
91:                         decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(60)),

```

### FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\widget\story_view\widgets\story_image.dart
```dart
27:     if (frames != null) {
28:       state = LoadState.success;
29:       onComplete();
30:     }
31: 
32:     final fileStream = DefaultCacheManager().getFileStream(url, headers: requestHeaders as Map<String, String>?);
33: 
34:     fileStream.listen(
35:       (fileResponse) {
36:         if (fileResponse is! FileInfo) return;
37:         // the reason for this is that, when the cache manager fetches
38:         // the image again from network, the provided `onComplete` should
39:         // not be called again
40:         if (frames != null) {
41:           return;
42:         }
43: 
44:         final imageBytes = fileResponse.file.readAsBytesSync();
45: 
46:         state = LoadState.success;
47: 
48:         ui.instantiateImageCodec(imageBytes).then((codec) {
49:           frames = codec;

28:       state = LoadState.success;
29:       onComplete();
30:     }
31: 
32:     final fileStream = DefaultCacheManager().getFileStream(url, headers: requestHeaders as Map<String, String>?);
33: 
34:     fileStream.listen(
35:       (fileResponse) {
36:         if (fileResponse is! FileInfo) return;
37:         // the reason for this is that, when the cache manager fetches
38:         // the image again from network, the provided `onComplete` should
39:         // not be called again
40:         if (frames != null) {
41:           return;
42:         }
43: 
44:         final imageBytes = fileResponse.file.readAsBytesSync();
45: 
46:         state = LoadState.success;
47: 
48:         ui.instantiateImageCodec(imageBytes).then((codec) {
49:           frames = codec;
50:           onComplete();

36:         if (fileResponse is! FileInfo) return;
37:         // the reason for this is that, when the cache manager fetches
38:         // the image again from network, the provided `onComplete` should
39:         // not be called again
40:         if (frames != null) {
41:           return;
42:         }
43: 
44:         final imageBytes = fileResponse.file.readAsBytesSync();
45: 
46:         state = LoadState.success;
47: 
48:         ui.instantiateImageCodec(imageBytes).then((codec) {
49:           frames = codec;
50:           onComplete();
51:         }, onError: (error) {
52:           state = LoadState.failure;
53:           onComplete();
54:         });
55:       },
56:       onError: (error) {
57:         state = LoadState.failure;
58:         onComplete();

```

### FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\widget\story_view\widgets\story_video.dart
```dart
20:   void loadVideo(VoidCallback onComplete) {
21:     if (videoFile != null) {
22:       state = LoadState.success;
23:       onComplete();
24:     }
25: 
26:     final fileStream = DefaultCacheManager().getFileStream(url, headers: requestHeaders as Map<String, String>?);
27: 
28:     fileStream.listen((fileResponse) {
29:       if (fileResponse is FileInfo) {
30:         if (videoFile == null) {
31:           state = LoadState.success;
32:           videoFile = fileResponse.file;
33:           onComplete();
34:         }
35:       }
36:     });
37:   }
38: }
39: 
40: class StoryVideo extends StatefulWidget {
41:   final StoryController? storyController;
42:   final VideoLoader videoLoader;

21:     if (videoFile != null) {
22:       state = LoadState.success;
23:       onComplete();
24:     }
25: 
26:     final fileStream = DefaultCacheManager().getFileStream(url, headers: requestHeaders as Map<String, String>?);
27: 
28:     fileStream.listen((fileResponse) {
29:       if (fileResponse is FileInfo) {
30:         if (videoFile == null) {
31:           state = LoadState.success;
32:           videoFile = fileResponse.file;
33:           onComplete();
34:         }
35:       }
36:     });
37:   }
38: }
39: 
40: class StoryVideo extends StatefulWidget {
41:   final StoryController? storyController;
42:   final VideoLoader videoLoader;
43:   final Widget? loadingWidget;

24:     }
25: 
26:     final fileStream = DefaultCacheManager().getFileStream(url, headers: requestHeaders as Map<String, String>?);
27: 
28:     fileStream.listen((fileResponse) {
29:       if (fileResponse is FileInfo) {
30:         if (videoFile == null) {
31:           state = LoadState.success;
32:           videoFile = fileResponse.file;
33:           onComplete();
34:         }
35:       }
36:     });
37:   }
38: }
39: 
40: class StoryVideo extends StatefulWidget {
41:   final StoryController? storyController;
42:   final VideoLoader videoLoader;
43:   final Widget? loadingWidget;
44:   final Widget? errorWidget;
45: 
46:   StoryVideo(

```

### FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\firebase_options.dart
```dart
44:       default:
45:         throw UnsupportedError(
46:           'DefaultFirebaseOptions are not supported for this platform.',
47:         );
48:     }
49:   }
50: 
51:   static const FirebaseOptions android = FirebaseOptions(
52:     apiKey: 'YOUR_ANDROID_API_KEY',
53:     appId: 'YOUR_ANDROID_APP_ID',
54:     messagingSenderId: 'YOUR_ANDROID_MESSAGING_SENDER_ID',
55:     projectId: 'YOUR_ANDROID_PROJECT_ID',
56:     databaseURL: 'YOUR_ANDROID_DATABASE_URL',
57:     storageBucket: 'YOUR_ANDROID_STORAGE_BUCKET',
58:   );
59: 
60:   static const FirebaseOptions ios = FirebaseOptions(
61:     apiKey: 'YOUR_IOS_API_KEY',
62:     appId: 'YOUR_IOS_APP_ID',
63:     messagingSenderId: 'YOUR_IOS_MESSAGING_SENDER_ID',
64:     projectId: 'YOUR_IOS_PROJECT_ID',
65:     databaseURL: 'YOUR_IOS_DATABASE_URL',
66:     storageBucket: 'YOUR_IOS_STORAGE_BUCKET',

48:     }
49:   }
50: 
51:   static const FirebaseOptions android = FirebaseOptions(
52:     apiKey: 'YOUR_ANDROID_API_KEY',
53:     appId: 'YOUR_ANDROID_APP_ID',
54:     messagingSenderId: 'YOUR_ANDROID_MESSAGING_SENDER_ID',
55:     projectId: 'YOUR_ANDROID_PROJECT_ID',
56:     databaseURL: 'YOUR_ANDROID_DATABASE_URL',
57:     storageBucket: 'YOUR_ANDROID_STORAGE_BUCKET',
58:   );
59: 
60:   static const FirebaseOptions ios = FirebaseOptions(
61:     apiKey: 'YOUR_IOS_API_KEY',
62:     appId: 'YOUR_IOS_APP_ID',
63:     messagingSenderId: 'YOUR_IOS_MESSAGING_SENDER_ID',
64:     projectId: 'YOUR_IOS_PROJECT_ID',
65:     databaseURL: 'YOUR_IOS_DATABASE_URL',
66:     storageBucket: 'YOUR_IOS_STORAGE_BUCKET',
67:     androidClientId: 'YOUR_ANDROID_CLIENT_ID',
68:     iosClientId: 'YOUR_IOS_CLIENT_ID',
69:     iosBundleId: 'YOUR_IOS_BUNDLE_ID',
70:   );

53:     appId: 'YOUR_ANDROID_APP_ID',
54:     messagingSenderId: 'YOUR_ANDROID_MESSAGING_SENDER_ID',
55:     projectId: 'YOUR_ANDROID_PROJECT_ID',
56:     databaseURL: 'YOUR_ANDROID_DATABASE_URL',
57:     storageBucket: 'YOUR_ANDROID_STORAGE_BUCKET',
58:   );
59: 
60:   static const FirebaseOptions ios = FirebaseOptions(
61:     apiKey: 'YOUR_IOS_API_KEY',
62:     appId: 'YOUR_IOS_APP_ID',
63:     messagingSenderId: 'YOUR_IOS_MESSAGING_SENDER_ID',
64:     projectId: 'YOUR_IOS_PROJECT_ID',
65:     databaseURL: 'YOUR_IOS_DATABASE_URL',
66:     storageBucket: 'YOUR_IOS_STORAGE_BUCKET',
67:     androidClientId: 'YOUR_ANDROID_CLIENT_ID',
68:     iosClientId: 'YOUR_IOS_CLIENT_ID',
69:     iosBundleId: 'YOUR_IOS_BUNDLE_ID',
70:   );
71: }

57:     storageBucket: 'YOUR_ANDROID_STORAGE_BUCKET',
58:   );
59: 
60:   static const FirebaseOptions ios = FirebaseOptions(
61:     apiKey: 'YOUR_IOS_API_KEY',
62:     appId: 'YOUR_IOS_APP_ID',
63:     messagingSenderId: 'YOUR_IOS_MESSAGING_SENDER_ID',
64:     projectId: 'YOUR_IOS_PROJECT_ID',
65:     databaseURL: 'YOUR_IOS_DATABASE_URL',
66:     storageBucket: 'YOUR_IOS_STORAGE_BUCKET',
67:     androidClientId: 'YOUR_ANDROID_CLIENT_ID',
68:     iosClientId: 'YOUR_IOS_CLIENT_ID',
69:     iosBundleId: 'YOUR_IOS_BUNDLE_ID',
70:   );
71: }

```

## Final Status

STATUS: FASHION_FORMATEXCEPTION_AUDITED_FIXED