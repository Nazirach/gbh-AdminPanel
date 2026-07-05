# CUSTOMER PERMISSION AND PROCESS CHECK

Generated: 06/29/2026 01:32:20

Mode: read-only. No patch. No Firebase write.

## Package Permission Check
```text
      android.permission.POST_NOTIFICATIONS
      android.permission.ACCESS_FINE_LOCATION
      android.permission.ACCESS_COARSE_LOCATION
      com.google.android.c2dm.permission.RECEIVE: granted=true
      com.google.android.providers.gsf.permission.READ_GSERVICES: granted=true
      android.permission.NFC: granted=true
      android.permission.FOREGROUND_SERVICE: granted=true
      android.permission.BLUETOOTH: granted=true
      android.permission.INTERNET: granted=true
      com.erbete.customer.DYNAMIC_RECEIVER_NOT_EXPORTED_PERMISSION: granted=true
      com.android.vending.BILLING: granted=true
      android.permission.BLUETOOTH_ADMIN: granted=true
      android.permission.ACCESS_NETWORK_STATE: granted=true
      android.permission.USE_FINGERPRINT: granted=true
      android.permission.READ_BASIC_PHONE_STATE: granted=true
      android.permission.VIBRATE: granted=true
      android.permission.USE_BIOMETRIC: granted=true
      android.permission.WAKE_LOCK: granted=true
        android.permission.POST_NOTIFICATIONS: granted=true, flags=[ USER_SET|USER_SENSITIVE_WHEN_GRANTED|USER_SENSITIVE_WHEN_DENIED]
        android.permission.ACCESS_FINE_LOCATION: granted=true, flags=[ USER_SET|USER_SENSITIVE_WHEN_GRANTED|USER_SENSITIVE_WHEN_DENIED|524288]
        android.permission.BLUETOOTH_CONNECT: granted=false, flags=[ USER_SENSITIVE_WHEN_GRANTED|USER_SENSITIVE_WHEN_DENIED]
        android.permission.READ_EXTERNAL_STORAGE: granted=false, flags=[ USER_SENSITIVE_WHEN_GRANTED|USER_SENSITIVE_WHEN_DENIED|RESTRICTION_INSTALLER_EXEMPT]
        android.permission.ACCESS_COARSE_LOCATION: granted=true, flags=[ USER_SET|USER_SENSITIVE_WHEN_GRANTED|USER_SENSITIVE_WHEN_DENIED]
        android.permission.CAMERA: granted=false, flags=[ USER_SENSITIVE_WHEN_GRANTED|USER_SENSITIVE_WHEN_DENIED]
        android.permission.RECORD_AUDIO: granted=false, flags=[ USER_SENSITIVE_WHEN_GRANTED|USER_SENSITIVE_WHEN_DENIED]
        android.permission.BLUETOOTH_SCAN: granted=false, flags=[ USER_SENSITIVE_WHEN_GRANTED|USER_SENSITIVE_WHEN_DENIED]
```

## AppOps Location Check
```text
Uid mode: COARSE_LOCATION: foreground
FINE_LOCATION: foreground
READ_CONTACTS: ignore
WRITE_CONTACTS: ignore
READ_CALL_LOG: ignore
WRITE_CALL_LOG: ignore
READ_CALENDAR: ignore
WRITE_CALENDAR: ignore
CALL_PHONE: ignore
READ_SMS: ignore
RECEIVE_SMS: ignore
RECEIVE_MMS: ignore
RECEIVE_WAP_PUSH: ignore
SEND_SMS: ignore
CAMERA: ignore
RECORD_AUDIO: ignore
READ_PHONE_STATE: ignore
ADD_VOICEMAIL: ignore
USE_SIP: ignore
PROCESS_OUTGOING_CALLS: ignore
BODY_SENSORS: ignore
READ_CELL_BROADCASTS: ignore
READ_EXTERNAL_STORAGE: ignore
WRITE_EXTERNAL_STORAGE: ignore
GET_ACCOUNTS: ignore
READ_PHONE_NUMBERS: ignore
ANSWER_PHONE_CALLS: ignore
ACCEPT_HANDOVER: ignore
BLUETOOTH_SCAN: ignore
ACTIVITY_RECOGNITION: ignore
READ_MEDIA_AUDIO: ignore
READ_MEDIA_VIDEO: ignore
READ_MEDIA_IMAGES: ignore
LEGACY_STORAGE: ignore
ACCESS_MEDIA_LOCATION: ignore
BLUETOOTH_CONNECT: ignore
UWB_RANGING: ignore
BLUETOOTH_ADVERTISE: ignore
NEARBY_WIFI_DEVICES: ignore
READ_MEDIA_VISUAL_USER_SELECTED: ignore
FINE_LOCATION: allow; time=+10m48s986ms ago
GPS: allow; time=+10m48s966ms ago; duration=+27ms
WAKE_LOCK: allow; time=+2m17s14ms ago; duration=+369ms
MONITOR_LOCATION: allow; time=+10m48s988ms ago; duration=+15ms
MONITOR_HIGH_POWER_LOCATION: allow; time=+10m48s987ms ago; duration=+13ms
ACCESS_RESTRICTED_SETTINGS: default; rejectTime=+6h20m2s425ms ago
```

## Process Check
```text
8789
u0_a502       8789   918   23273636 606812 0                   0 S com.erbete.customer
```

## Activity Check
```text
  * Task{aebc520 #47876 type=standard A=10502:com.erbete.customer U=0 visible=true visibleRequested=true mode=fullscreen translucent=false sz=1}
    topResumedActivity=ActivityRecord{1475152 u0 com.erbete.customer/.MainActivity t47876}
    * Hist  #0: ActivityRecord{1475152 u0 com.erbete.customer/.MainActivity t47876}
      packageName=com.erbete.customer processName=com.erbete.customer
      app=ProcessRecord{f09ce6f 8789:com.erbete.customer/u0a502}
      Intent { act=android.intent.action.MAIN cat=[android.intent.category.LAUNCHER] flg=0x10200000 cmp=com.erbete.customer/.MainActivity }
      rootOfTask=true task=Task{aebc520 #47876 type=standard A=10502:com.erbete.customer}
      taskAffinity=10502:com.erbete.customer
      mActivityComponent=com.erbete.customer/.MainActivity
      baseDir=/data/app/~~wYIKaEGsmpynXgklEJswEQ==/com.erbete.customer-5e8kPAckZ6hrtvhMfvKaMg==/base.apk
      dataDir=/data/user/0/com.erbete.customer
      taskDescription: label="" icon=null iconResource=com.erbete.customer/0 iconFilename=null primaryColor=ff6750a4
      keysPaused=false inHistory=true idle=true
      windows=[Window{72f1a9d u0 com.erbete.customer/com.erbete.customer.MainActivity}]
      connections={ConnectionRecord{f34837b u0 CR com.erbete.customer com.erbete.customer 10502 ST:139709ms com.erbete.customer/com.lyokone.location.FlutterLocationService:@ec46f0a flags=0x1}}
      * Hist  #0: ActivityRecord{4f4f328 u0 com.transsion.XOSLauncher/com.android.launcher3.uioverrides.QuickstepLauncher t5}
        keysPaused=false inHistory=true idle=true
    * Hist  #0: ActivityRecord{c86cd80 u0 com.whatsapp/.Conversation t47872}
      keysPaused=false inHistory=true idle=true
    * Hist  #0: ActivityRecord{f3ecc18 u0 com.deepseek.chat/.MainActivity t47871}
      keysPaused=false inHistory=true idle=true
    Resumed: ActivityRecord{1475152 u0 com.erbete.customer/.MainActivity t47876}
  ResumedActivity: ActivityRecord{1475152 u0 com.erbete.customer/.MainActivity t47876}
  topDisplayFocusedRootTask=Task{aebc520 #47876 type=standard A=10502:com.erbete.customer}
  deepestLastOrientationSource=ActivityRecord{1475152 u0 com.erbete.customer/.MainActivity t47876}
  mCurrentFocus=Window{72f1a9d u0 com.erbete.customer/com.erbete.customer.MainActivity}
  mFocusedApp=ActivityRecord{1475152 u0 com.erbete.customer/.MainActivity t47876}
      mPreferredTopFocusableRootTask=Task{aebc520 #47876 type=standard A=10502:com.erbete.customer}
      mLastFocusedRootTask=Task{aebc520 #47876 type=standard A=10502:com.erbete.customer}
      * Task{aebc520 #47876 type=standard A=10502:com.erbete.customer U=0 visible=true visibleRequested=true mode=fullscreen translucent=false sz=1}
        * ActivityRecord{1475152 u0 com.erbete.customer/.MainActivity t47876}
    mFocusedWindow=Window{72f1a9d u0 com.erbete.customer/com.erbete.customer.MainActivity}
    mTopFullscreenOpaqueWindowState=Window{72f1a9d u0 com.erbete.customer/com.erbete.customer.MainActivity}
    mSystemBarColorApps={ActivityRecord{1475152 u0 com.erbete.customer/.MainActivity t47876}}
    mNavBarColorWindowCandidate=Window{72f1a9d u0 com.erbete.customer/com.erbete.customer.MainActivity}
    mNavBarBackgroundWindowCandidate=Window{72f1a9d u0 com.erbete.customer/com.erbete.customer.MainActivity}
      Window{72f1a9d u0 com.erbete.customer/com.erbete.customer.MainActivity}
        mTiltHistory={last: 89.0}
    RotationHistory
        source=ActivityRecord{2e2479f u0 com.erbete.customer/.MainActivity t47844} SCREEN_ORIENTATION_UNSPECIFIED
        source=ActivityRecord{2e2479f u0 com.erbete.customer/.MainActivity t47844} SCREEN_ORIENTATION_UNSPECIFIED
        RotationLockHistory
      Window{72f1a9d u0 com.erbete.customer/com.erbete.customer.MainActivity}:
        mControlTarget=Window{72f1a9d u0 com.erbete.customer/com.erbete.customer.MainActivity}
        mControlTarget=Window{72f1a9d u0 com.erbete.customer/com.erbete.customer.MainActivity}
        mControlTarget=Window{72f1a9d u0 com.erbete.customer/com.erbete.customer.MainActivity}
  mNoHistoryActivities=[]
        (fullscreen) Task{aebc520 #47876 type=standard A=10502:com.erbete.customer}
  VisibleActivityProcess:[ ProcessRecord{f09ce6f 8789:com.erbete.customer/u0a502}]
```

## Final Status
STATUS: CUSTOMER_PERMISSION_PROCESS_CHECK_CREATED