# CUSTOMER FIRESTORE STAGING DATABASE BLOCKER

Generated: 06/28/2026 18:52:29

Mode: audit-only. No patch. No deploy. No source edit. No Firebase write.

## Runtime Result

- Customer app built successfully.
- Customer app installed on Infinix X6853.
- Runtime reached Firebase/Firestore.
- Firestore failed because database named staging does not exist in project erbete-putra.

## Meaning

- App is pointing to Firestore databaseId: staging.
- Live Firebase project likely uses default Firestore database.
- Real registration/order trial is blocked until database target is confirmed.

## Search Results

```text

lib\controllers\0n_demand_payment_controller.dart:521:        startTransaction(context, txnTokenBy: result.body.txnToken ?? '', 
orderId: orderId, amount: amount, callBackURL: callback, isStaging: paytmModel.value.isSandboxEnabled);
lib\controllers\0n_demand_payment_controller.dart:526:  Future<void> startTransaction(context, {required String txnTokenBy, 
required orderId, required double amount, required callBackURL, required isStaging}) async {
lib\controllers\0n_demand_payment_controller.dart:534:    //     isStaging,
lib\controllers\cab_booking_controller.dart:1314:    //     startTransaction(context, txnTokenBy: result.body.txnToken, orderId: 
orderId, amount: amount, callBackURL: callback, isStaging: paytmModel.value.isSandboxEnabled);
lib\controllers\cab_booking_controller.dart:1319:  Future<void> startTransaction(context, {required String txnTokenBy, required 
orderId, required double amount, required callBackURL, required isStaging}) async {
lib\controllers\cab_booking_controller.dart:1327:    //     isStaging,
lib\controllers\cart_controller.dart:886:        startTransaction(context, txnTokenBy: result.body.txnToken ?? '', orderId: 
orderId, amount: amount, callBackURL: callback, isStaging: paytmModel.value.isSandboxEnabled);
lib\controllers\cart_controller.dart:891:  Future<void> startTransaction(context, {required String txnTokenBy, required orderId, 
required double amount, required callBackURL, required isStaging}) async {
lib\controllers\cart_controller.dart:899:    //     isStaging,
lib\controllers\gift_card_controller.dart:240:  //     //sandbox, staging, live etc
lib\controllers\gift_card_controller.dart:567:        startTransaction(context, txnTokenBy: result.body.txnToken ?? '', orderId: 
orderId, amount: amount, callBackURL: callback, isStaging: paytmModel.value.isSandboxEnabled);
lib\controllers\gift_card_controller.dart:572:  Future<void> startTransaction(context, {required String txnTokenBy, required 
orderId, required double amount, required callBackURL, required isStaging}) async {
lib\controllers\gift_card_controller.dart:580:    //     isStaging,
lib\controllers\Intercity_home_controller.dart:1317:    //     startTransaction(context, txnTokenBy: result.body.txnToken, orderId: 
orderId, amount: amount, callBackURL: callback, isStaging: paytmModel.value.isSandboxEnabled);
lib\controllers\Intercity_home_controller.dart:1322:  Future<void> startTransaction(context, {required String txnTokenBy, required 
orderId, required double amount, required callBackURL, required isStaging}) async {
lib\controllers\Intercity_home_controller.dart:1330:    //     isStaging,
lib\controllers\my_cab_booking_controller.dart:563:    //     startTransaction(context, txnTokenBy: result.body.txnToken, orderId: 
orderId, amount: amount, callBackURL: callback, isStaging: paytmModel.value.isSandboxEnabled);
lib\controllers\my_cab_booking_controller.dart:568:  Future<void> startTransaction(context, {required String txnTokenBy, required 
orderId, required double amount, required callBackURL, required isStaging}) async {
lib\controllers\my_cab_booking_controller.dart:576:    //     isStaging,
lib\controllers\parcel_order_confirmation_controller.dart:617:        startTransaction(context, txnTokenBy: result.body.txnToken ?? 
'', orderId: orderId, amount: amount, callBackURL: callback, isStaging: paytmModel.value.isSandboxEnabled);
lib\controllers\parcel_order_confirmation_controller.dart:622:  Future<void> startTransaction(context, {required String txnTokenBy, 
required orderId, required double amount, required callBackURL, required isStaging}) async {
lib\controllers\parcel_order_confirmation_controller.dart:630:    //     isStaging,
lib\controllers\parcel_order_confirmation_controller.dart:679:    print("Env: ${(paytmModel.value.isSandboxEnabled ?? false) ? 
"STAGING" : "LIVE"}");
lib\controllers\rental_order_details_controller.dart:600:    //     startTransaction(context, txnTokenBy: result.body.txnToken, 
orderId: orderId, amount: amount, callBackURL: callback, isStaging: paytmModel.value.isSandboxEnabled);
lib\controllers\rental_order_details_controller.dart:605:  Future<void> startTransaction(context, {required String txnTokenBy, 
required orderId, required double amount, required callBackURL, required isStaging}) async {
lib\controllers\rental_order_details_controller.dart:613:    //     isStaging,
lib\service\fire_store_utils.dart:85:enum FirebaseEnv { defaultDb, staging }
lib\service\fire_store_utils.dart:87:/// Change this to switch between default / staging
lib\service\fire_store_utils.dart:88:const FirebaseEnv currentEnv = FirebaseEnv.staging;
lib\service\fire_store_utils.dart:97:  /// Initialize Firestore with a FirebaseApp and optional databaseId
lib\service\fire_store_utils.dart:98:  void init(FirebaseApp app, {String? databaseId}) {
lib\service\fire_store_utils.dart:99:    fireStore = FirebaseFirestore.instanceFor(app: app, databaseId: databaseId);
lib\service\fire_store_utils.dart:1791:      final projectId = DefaultFirebaseOptions.currentPlatform.projectId;
lib\service\fire_store_utils.dart:1857:    //   final firestore = FirebaseFirestore.instance;
android\app\google-services.json:5:    "project_id": "erbete-putra",
android\app\google-services.json:11:        "mobilesdk_app_id": "1:620343172253:android:c67719229e2e3e83414874",
android\app\google-services.json:13:          "package_name": "com.erbete.customer"
android\app\google-services.json:21:            "package_name": "com.erbete.customer",
android\app\google-services.json:55:        "mobilesdk_app_id": "1:620343172253:android:28dd66f1fb1c6e02414874",
android\app\google-services.json:57:          "package_name": "com.erbete.driver"
android\app\google-services.json:65:            "package_name": "com.erbete.driver",
android\app\google-services.json:99:        "mobilesdk_app_id": "1:620343172253:android:42180706e09e072c414874",
android\app\google-services.json:101:          "package_name": "com.erbete.restaurant"
android\app\google-services.json:109:            "package_name": "com.erbete.restaurant",



```

## Decision

- Do not create audit customer account yet.
- Do not run driver/vendor yet.
- Do not create test order yet.
- Next step: identify exact source line setting Firestore databaseId staging.

## Status

STATUS: CUSTOMER_FIRESTORE_STAGING_DATABASE_BLOCKER_RECORDED