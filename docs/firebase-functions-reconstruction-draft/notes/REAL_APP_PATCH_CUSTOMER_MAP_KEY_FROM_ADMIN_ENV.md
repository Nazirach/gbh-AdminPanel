# PATCH CUSTOMER MAP KEY FROM ADMIN ENV

Generated: 06/29/2026 03:09:35

Mode: local code patch only. No Firebase write.

Source: C:\deploy\adminpanel\.env / FIREBASE_API_KEY
Manifest backup: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\android\app\src\main\AndroidManifest.xml.bak_12CX_MANUAL_20260629_030935
Constant backup: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\constant\constant.dart.bak_12CX_MANUAL_20260629_030935

## Verification
```text
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\android\app\src\main\AndroidManifest.xml:131:        <meta-data
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\android\app\src\main\AndroidManifest.xml:132:            android:name="com.google.android.geo.API_KEY"
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\android\app\src\main\AndroidManifest.xml:133:            android:value="AIzaSyCYaa2ILmCFYLhWNEE3MWF6h74ECqhWZ38" />
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\android\app\src\main\AndroidManifest.xml:134:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\constant\constant.dart:112:
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\constant\constant.dart:113:  static String mapAPIKey = "AIzaSyCYaa2ILmCFYLhWNEE3MWF6h74ECqhWZ38";
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\constant\constant.dart:114:  static String placeHolderImage = "";
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\constant\constant.dart:115:  static String defaultCountryCode = "";
```

## Final Status
STATUS: CUSTOMER_MAP_KEY_PATCHED_FROM_ADMIN_ENV