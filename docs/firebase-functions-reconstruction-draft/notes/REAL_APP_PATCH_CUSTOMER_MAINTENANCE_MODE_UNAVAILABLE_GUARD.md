# PATCH CUSTOMER MAINTENANCE MODE UNAVAILABLE GUARD

Generated: 06/29/2026 01:38:15

Mode: local code patch only. No Firebase write.

## Files
```text
Target: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart
Backup: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart.bak_12CB_20260629_013815
```

## Patch
- Added try/catch around settings/maintenance_settings Firestore read.
- On Firestore unavailable/network failure, returns false so splash can continue.
- Does not change normal maintenance behavior when Firestore is available.

## Verification Snippet
```dart
  188:     return isUpdate;
  189:   }
  190: 
  191:   static Future<bool> isMaintenanceMode() async {
  192:     bool isMaintenance = false;
  193:     try {
  194:       await fireStore.collection(CollectionName.settings).doc('maintenance_settings').get().then((value) async {
  195:         isMaintenance = value.data()?['isMaintenanceModeForCustomer'] == true;
  196:         log("isMaintenance :: $isMaintenance");
  197:       });
  198:     } catch (e) {
  199:       log("isMaintenanceMode() fallback false because Firestore read failed: $e");
  200:       isMaintenance = false;
  201:     }
  202:     return isMaintenance;
  203:   }
  204: 
  205:   static Future<List<OnBoardingModel>> getOnBoardingList() async {
```

## Final Status
STATUS: CUSTOMER_MAINTENANCE_MODE_UNAVAILABLE_GUARD_PATCHED