# CUSTOMER FIRESTORE ENV DEFAULT DB PATCH REPORT

Generated: 06/28/2026 18:54:40

Mode: local source patch only. No deploy. No Firebase write. No function change. No delete.

## Reason

- Customer app built and installed successfully.
- Runtime failed because app used Firestore databaseId staging.
- Firebase project erbete-putra does not have database named staging.
- For real app trial, customer app must point to default Firestore database.

## File

- C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart
- Backup: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart.bak_12F_20260628_185440

## Change

- From: const FirebaseEnv currentEnv = FirebaseEnv.staging;
- To: const FirebaseEnv currentEnv = FirebaseEnv.defaultDb;
- Patch status: PATCH_APPLIED

## Verification

```text

  lib\service\fire_store_utils.dart:83:import 'package:http/http.dart' as http;
  lib\service\fire_store_utils.dart:84:
> lib\service\fire_store_utils.dart:85:enum FirebaseEnv { defaultDb, staging }
  lib\service\fire_store_utils.dart:86:
  lib\service\fire_store_utils.dart:87:/// Change this to switch between default / staging
> lib\service\fire_store_utils.dart:88:const FirebaseEnv currentEnv = FirebaseEnv.defaultDb;
  lib\service\fire_store_utils.dart:89:
  lib\service\fire_store_utils.dart:90:class FireStoreUtils {
  lib\service\fire_store_utils.dart:91:  FireStoreUtils._privateConstructor();
  lib\service\fire_store_utils.dart:95:  static late FirebaseFirestore fireStore;
  lib\service\fire_store_utils.dart:96:
> lib\service\fire_store_utils.dart:97:  /// Initialize Firestore with a FirebaseApp and optional databaseId
> lib\service\fire_store_utils.dart:98:  void init(FirebaseApp app, {String? databaseId}) {
> lib\service\fire_store_utils.dart:99:    fireStore = FirebaseFirestore.instanceFor(app: app, databaseId: databaseId);
  lib\service\fire_store_utils.dart:100:  }
  lib\service\fire_store_utils.dart:101:
  lib\service\fire_store_utils.dart:102:  static String getCurrentUid() {



```

## Next Step

- Run flutter clean.
- Run flutter pub get.
- Run customer app again on device 115413747T003958.
- Register audit customer only after Firestore staging error disappears.

## Status

STATUS: CUSTOMER_FIRESTORE_ENV_DEFAULTDB_PATCH_RECORDED