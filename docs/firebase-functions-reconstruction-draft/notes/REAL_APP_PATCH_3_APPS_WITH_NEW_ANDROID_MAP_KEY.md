# PATCH 3 APPS WITH NEW ANDROID MAP KEY

Generated: 06/29/2026 07:29:01
Mode: local code patch only. No Firebase write.
Key masked: AIzaSyCz...dyHnek

## APP: customer
```text
Manifest patched: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\android\app\src\main\AndroidManifest.xml
Manifest backup: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\android\app\src\main\AndroidManifest.xml.bak_12DK_20260629_072901
Constant patched: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\constant\constant.dart
Constant backup: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\constant\constant.dart.bak_12DK_20260629_072901
```

## APP: driver
```text
Manifest patched: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\driver\android\app\src\main\AndroidManifest.xml
Manifest backup: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\driver\android\app\src\main\AndroidManifest.xml.bak_12DK_20260629_072901
Constant patched: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\driver\lib\constant\constant.dart
Constant backup: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\driver\lib\constant\constant.dart.bak_12DK_20260629_072901
```

## APP: vendor
```text
Manifest patched: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\android\app\src\main\AndroidManifest.xml
Manifest backup: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\android\app\src\main\AndroidManifest.xml.bak_12DK_20260629_072901
Constant patched: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\constant\constant.dart
Constant backup: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\constant\constant.dart.bak_12DK_20260629_072901
```

## Verification
```text
APP: customer
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\android\app\src\main\AndroidManifest.xml:131:        <meta-data
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\android\app\src\main\AndroidManifest.xml:132:            android:name="com.google.android.geo.API_KEY"
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\android\app\src\main\AndroidManifest.xml:133:            android:value="AIzaSyCz...dyHnek" />
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\android\app\src\main\AndroidManifest.xml:134:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\constant\constant.dart:112:
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\constant\constant.dart:113:  static String mapAPIKey = "AIzaSyCz...dyHnek";
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\constant\constant.dart:114:  static String placeHolderImage = "";

APP: driver
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\driver\android\app\src\main\AndroidManifest.xml:52:        <meta-data
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\driver\android\app\src\main\AndroidManifest.xml:53:            android:name="com.google.android.geo.API_KEY"
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\driver\android\app\src\main\AndroidManifest.xml:54:            android:value="AIzaSyCz...dyHnek" />
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\driver\android\app\src\main\AndroidManifest.xml:55:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\driver\lib\constant\constant.dart:58:
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\driver\lib\constant\constant.dart:59:  static String mapAPIKey = "AIzaSyCz...dyHnek";
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\driver\lib\constant\constant.dart:60:  static String placeHolderImage = "";

APP: vendor
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\android\app\src\main\AndroidManifest.xml:42:        <meta-data
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\android\app\src\main\AndroidManifest.xml:43:            android:name="com.google.android.geo.API_KEY"
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\android\app\src\main\AndroidManifest.xml:44:            android:value="AIzaSyCz...dyHnek" />
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\android\app\src\main\AndroidManifest.xml:45:    </application>
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\constant\constant.dart:50:
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\constant\constant.dart:51:  static String mapAPIKey = "AIzaSyCz...dyHnek";
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\constant\constant.dart:52:  static String placeHolderImage = "";

```

## Final Status
STATUS: THREE_APPS_PATCHED_WITH_NEW_ANDROID_MAP_KEY