# AUDIT MAINTENANCE MODE SOURCE

Generated: 06/29/2026 01:37:12

Mode: read-only. No patch.

## FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart
```dart
  175:     bool isUpdate = false;
  176:     await fireStore
  177:         .collection(CollectionName.users)
  178:         .doc(userModel.id)
  179:         .set(userModel.toJson())
  180:         .whenComplete(() {
  181:           Constant.userModel = userModel;
  182:           isUpdate = true;
  183:         })
  184:         .catchError((error) {
  185:           log("Failed to update user: $error");
  186:           isUpdate = false;
  187:         });
  188:     return isUpdate;
  189:   }
  190: 
  191:   static Future<bool> isMaintenanceMode() async {
  192:     bool isMaintenance = false;
  193:     await fireStore.collection(CollectionName.settings).doc('maintenance_settings').get().then((value) async {
  194:       isMaintenance = value.data()?['isMaintenanceModeForCustomer'] == true;
  195:       log("isMaintenance :: $isMaintenance");
  196:     });
  197:     return isMaintenance;
  198:   }
  199: 
  200:   static Future<List<OnBoardingModel>> getOnBoardingList() async {
  201:     List<OnBoardingModel> onBoardingModel = [];
  202:     await fireStore
  203:         .collection(CollectionName.onBoarding)
  204:         .where("type", isEqualTo: "customer")
  205:         .get()
  206:         .then((value) {
  207:           for (var element in value.docs) {
  208:             OnBoardingModel documentModel = OnBoardingModel.fromJson(element.data());
  209:             onBoardingModel.add(documentModel);
  210:           }
  277:     await fireStore.collection(CollectionName.settings).doc("AppHomeBanners").get().then((value) {
  652:   static Future<void> getSettings() async {
  654:       final restaurantSnap = await fireStore.collection(CollectionName.settings).doc('vendor').get();
  662:       fireStore.collection(CollectionName.settings).doc("DriverNearBy").snapshots().listen((event) {
  670:       final globalSettingsSnap = await fireStore.collection(CollectionName.settings).doc("globalSettings").get();
  672:       if (globalSettingsSnap.exists && globalSettingsSnap.data() != null) {
  673:         Constant.isEnableAdsFeature = globalSettingsSnap.data()?['isEnableAdsFeature'] ?? false;
  674:         Constant.isSelfDeliveryFeature = globalSettingsSnap.data()?['isSelfDelivery'] ?? false;
  675:         Constant.defaultCountryCode = globalSettingsSnap.data()?['defaultCountryCode'] ?? '';
  676:         Constant.taxScope = globalSettingsSnap.data()?['taxScope'] ?? "";
  677:         String? colorStr = globalSettingsSnap.data()?['app_customer_color'];
  683:       fireStore.collection(CollectionName.settings).doc("googleMapKey").snapshots().listen((event) {
  688:       fireStore.collection(CollectionName.settings).doc("placeHolderImage").snapshots().listen((event) {
  694:       fireStore.collection(CollectionName.settings).doc("notification_setting").snapshots().listen((event) {
  701:       final cashbackSnap = await fireStore.collection(CollectionName.settings).doc("cashbackOffer").get();
  709:       final driverNearBySnap = await fireStore.collection(CollectionName.settings).doc("DriverNearBy").get();
  716:       fireStore.collection(CollectionName.settings).doc("privacyPolicy").snapshots().listen((event) {
  722:       fireStore.collection(CollectionName.settings).doc("termsAndConditions").snapshots().listen((event) {
  728:       fireStore.collection(CollectionName.settings).doc("walletSettings").snapshots().listen((event) {
  734:       fireStore.collection(CollectionName.settings).doc("Version").snapshots().listen((event) {
  743:       final storySnap = await fireStore.collection(CollectionName.settings).doc('story').get();
  751:       final emailSnap = await fireStore.collection(CollectionName.settings).doc("emailSetting").get();
  754:         Constant.mailSettings = MailSettings.fromJson(emailSnap.data()!);
  757:       final specialDiscountSnap = await fireStore.collection(CollectionName.settings).doc("specialDiscountOffer").get();
  765:       log("getSettings() Error: $e");
  956:       await fireStore.collection(CollectionName.settings).doc("DeliveryCharge").get().then((value) {
 1135:   static Future getPaymentSettingsData() async {
 1136:     await fireStore.collection(CollectionName.settings).doc("payFastSettings").get().then((value) async {
 1139:         await Preferences.setString(Preferences.payFastSettings, jsonEncode(payFastModel.toJson()));
 1142:     await fireStore.collection(CollectionName.settings).doc("MercadoPago").get().then((value) async {
 1148:     await fireStore.collection(CollectionName.settings).doc("paypalSettings").get().then((value) async {
 1151:         await Preferences.setString(Preferences.paypalSettings, jsonEncode(payPalModel.toJson()));
 1154:     await fireStore.collection(CollectionName.settings).doc("stripeSettings").get().then((value) async {
 1157:         await Preferences.setString(Preferences.stripeSettings, jsonEncode(stripeModel.toJson()));
 1160:     await fireStore.collection(CollectionName.settings).doc("flutterWave").get().then((value) async {
 1166:     await fireStore.collection(CollectionName.settings).doc("payStack").get().then((value) async {
 1172:     await fireStore.collection(CollectionName.settings).doc("PaytmSettings").get().then((value) async {
 1175:         await Preferences.setString(Preferences.paytmSettings, jsonEncode(paytmModel.toJson()));
 1178:     await fireStore.collection(CollectionName.settings).doc("walletSettings").get().then((value) async {
 1181:         await Preferences.setString(Preferences.walletSettings, jsonEncode(walletSettingModel.toJson()));
 1184:     await fireStore.collection(CollectionName.settings).doc("razorpaySettings").get().then((value) async {
 1187:         await Preferences.setString(Preferences.razorpaySettings, jsonEncode(razorPayModel.toJson()));
 1190:     await fireStore.collection(CollectionName.settings).doc("CODSettings").get().then((value) async {
 1193:         await Preferences.setString(Preferences.codSettings, jsonEncode(codSettingModel.toJson()));
 1197:     await fireStore.collection(CollectionName.settings).doc("midtrans_settings").get().then((value) async {
 1200:         await Preferences.setString(Preferences.midTransSettings, jsonEncode(midTrans.toJson()));
 1204:     await fireStore.collection(CollectionName.settings).doc("orange_money_settings").get().then((value) async {
 1207:         await Preferences.setString(Preferences.orangeMoneySettings, jsonEncode(orangeMoney.toJson()));
 1211:     await fireStore.collection(CollectionName.settings).doc("xendit_settings").get().then((value) async {
 1214:         await Preferences.setString(Preferences.xenditSettings, jsonEncode(xendit.toJson()));
```

## FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\splash_controller.dart
```dart
    7: import 'package:customer/screen_ui/maintenance_mode_screen/maintenance_mode_screen.dart';
   22:     Timer(const Duration(seconds: 3), () => redirectScreen());
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
   44:         Get.offAll(const OnboardingScreen());
   45:       } else {
   46:         bool isLogin = await FireStoreUtils.isLogin();
   47:         if (isLogin == true) {
   48:           await FireStoreUtils.getUserProfile(FireStoreUtils.getCurrentUid()).then((value) async {
   49:             if (value != null) {
   50:               UserModel userModel = value;
   51:               log(userModel.toJson().toString());
   52:               if (userModel.role == Constant.userRoleCustomer) {
   53:                 if (userModel.active == true) {
   54:                   userModel.fcmToken = await NotificationService.getToken();
   55:                   await FireStoreUtils.updateUser(userModel);
```

## Final Status
STATUS: MAINTENANCE_MODE_SOURCE_AUDIT_CREATED