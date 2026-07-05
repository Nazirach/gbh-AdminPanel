# SYNC GOOGLE MAP API KEY TO ALL EMART APPS

Generated: 06/29/2026 03:21:16

Mode: local code patch only. No Firebase write.
Source: C:\deploy\adminpanel\.env / FIREBASE_API_KEY
API key masked: AIzaSyCY...qhWZ38

## Apps Processed
```text
APP: customer
  Root: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer
  Manifest: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\android\app\src\main\AndroidManifest.xml
  ManifestChanged: False
  Constant: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\constant\constant.dart
  ConstantExists: True
  ConstantChanged: False

APP: driver
  Root: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\driver
  Manifest: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\driver\android\app\src\main\AndroidManifest.xml
  ManifestChanged: True
  Constant: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\driver\lib\constant\constant.dart
  ConstantExists: True
  ConstantChanged: True

APP: vendor
  Root: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor
  Manifest: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\android\app\src\main\AndroidManifest.xml
  ManifestChanged: True
  Constant: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\constant\constant.dart
  ConstantExists: True
  ConstantChanged: True

```

## Verification
```text
APP: customer
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\android\app\src\main\AndroidManifest.xml:131:        <meta-data
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\android\app\src\main\AndroidManifest.xml:132:            android:name="com.google.android.geo.API_KEY"
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\android\app\src\main\AndroidManifest.xml:133:            android:value="AIzaSyCY...qhWZ38" />
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\android\app\src\main\AndroidManifest.xml:134:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\constant\constant.dart:112:
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\constant\constant.dart:113:  static String mapAPIKey = "AIzaSyCY...qhWZ38";
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\constant\constant.dart:114:  static String placeHolderImage = "";

APP: driver
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\driver\android\app\src\main\AndroidManifest.xml:52:        <meta-data
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\driver\android\app\src\main\AndroidManifest.xml:53:            android:name="com.google.android.geo.API_KEY"
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\driver\android\app\src\main\AndroidManifest.xml:54:            android:value="AIzaSyCY...qhWZ38" />
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\driver\android\app\src\main\AndroidManifest.xml:55:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\driver\lib\constant\constant.dart:58:
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\driver\lib\constant\constant.dart:59:  static String mapAPIKey = "AIzaSyCY...qhWZ38";
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\driver\lib\constant\constant.dart:60:  static String placeHolderImage = "";

APP: vendor
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\android\app\src\main\AndroidManifest.xml:42:        <meta-data
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\android\app\src\main\AndroidManifest.xml:43:            android:name="com.google.android.geo.API_KEY"
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\android\app\src\main\AndroidManifest.xml:44:            android:value="AIzaSyCY...qhWZ38" />
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\android\app\src\main\AndroidManifest.xml:45:    </application>
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\constant\constant.dart:50:
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\constant\constant.dart:51:  static String mapAPIKey = "AIzaSyCY...qhWZ38";
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\vendor\lib\constant\constant.dart:52:  static String placeHolderImage = "";

```

## Final Status
STATUS: GOOGLE_MAP_API_KEY_SYNCED_TO_ALL_FOUND_EMART_APPS