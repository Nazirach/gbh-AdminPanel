# AUDIT CUSTOMER SPLASH REDIRECT FLOW

Generated: 06/29/2026 02:04:50

Mode: read-only. No patch. No Firebase write.

## FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\splash_controller.dart
```dart
    1: import 'dart:async';
    2: import 'dart:convert';
    3: import 'dart:developer';
    4: import 'package:customer/constant/constant.dart';
    5: import 'package:customer/models/language_model.dart';
    6: import 'package:customer/models/user_model.dart';
    7: import 'package:customer/screen_ui/maintenance_mode_screen/maintenance_mode_screen.dart';
    8: import 'package:customer/screen_ui/service_home_screen/service_list_screen.dart';
    9: import 'package:customer/service/localization_service.dart';
   10: import 'package:customer/utils/notification_service.dart';
   11: import 'package:customer/utils/preferences.dart';
   12: import 'package:firebase_auth/firebase_auth.dart';
   13: import 'package:get/get.dart';
   14: import '../screen_ui/auth_screens/login_screen.dart';
   15: import '../screen_ui/location_enable_screens/location_permission_screen.dart';
   16: import '../screen_ui/on_boarding_screen/on_boarding_screen.dart';
   17: import '../service/fire_store_utils.dart';
   18: 
   19: class SplashController extends GetxController {
   20:   @override
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
   56:                   if (userModel.shippingAddress != null && userModel.shippingAddress!.isNotEmpty) {
   57:                     if (userModel.shippingAddress!.where((element) => element.isDefault == true).isNotEmpty) {
   58:                       Constant.selectedLocation = userModel.shippingAddress!.where((element) => element.isDefault == true).single;
   59:                     } else {
   60:                       Constant.selectedLocation = userModel.shippingAddress!.first;
   61:                     }
   62:                     Get.offAll(const ServiceListScreen());
   63:                   } else {
   64:                     Get.offAll(const LocationPermissionScreen());
   65:                   }
   66:                 } else {
   67:                   await FirebaseAuth.instance.signOut();
   68:                   Get.offAll(const LoginScreen());
   69:                 }
   70:               } else {
   71:                 await FirebaseAuth.instance.signOut();
   72:                 Get.offAll(const LoginScreen());
   73:               }
   74:             }
   75:           });
   76:         } else {
   77:           await FirebaseAuth.instance.signOut();
   78:           Get.offAll(const LoginScreen());
   79:         }
   80:       }
   81:     }
   82:   }
   83: }
```

## FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart
```dart
   80: import '../utils/preferences.dart';
  103:     return auth.FirebaseAuth.instance.currentUser!.uid;
  106:   static Future<bool> isLogin() async {
  107:     bool isLogin = false;
  108:     if (auth.FirebaseAuth.instance.currentUser != null) {
  109:       isLogin = await userExistOrNot(auth.FirebaseAuth.instance.currentUser!.uid);
  111:       isLogin = false;
  113:     return isLogin;
  119:     await fireStore
  137:   static Future<UserModel?> getUserProfile(String uuid) async {
  139:     await fireStore
  155:   static Future<UserModel?> getUserForChat(String uuid) async {
  158:     await fireStore
  176:     await fireStore
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
  206:     List<OnBoardingModel> onBoardingModel = [];
  207:     await fireStore
  208:         .collection(CollectionName.onBoarding)
  209:         .where("type", isEqualTo: "customer")
  210:         .get()
  211:         .then((value) {
  212:           for (var element in value.docs) {
  213:             OnBoardingModel documentModel = OnBoardingModel.fromJson(element.data());
  214:             onBoardingModel.add(documentModel);
  215:           }
  216:         })
  217:         .catchError((error) {
  218:           log(error.toString());
  219:         });
  220:     return onBoardingModel;
  221:   }
  222: 
  223:   static Future<List<ZoneModel>?> getZone() async {
  224:     List<ZoneModel> airPortList = [];
  225:     await fireStore
  226:         .collection(CollectionName.zone)
  227:         .where('publish', isEqualTo: true)
  228:         .get()
  229:         .then((value) {
  230:           for (var element in value.docs) {
  231:             ZoneModel ariPortModel = ZoneModel.fromJson(element.data());
  232:             airPortList.add(ariPortModel);
  233:           }
  234:         })
  235:         .catchError((error) {
  236:           log(error.toString());
  237:         });
  238:     return airPortList;
  239:   }
  240: 
  241:   static Future<String?> referralAdd(ReferralModel ratingModel) async {
  242:     try {
  243:       await fireStore.collection(CollectionName.referral).doc(ratingModel.id).set(ratingModel.toJson());
  244:     } catch (e, s) {
  245:       print('FireStoreUtils.referralAdd $e $s');
  246:       return "Couldn't review".tr;
  247:     }
  248:     return null;
  249:   }
  250: 
  251:   static Future<ReferralModel?> getReferralUserByCode(String referralCode) async {
  252:     ReferralModel? referralModel;
  253:     try {
  254:       await fireStore.collection(CollectionName.referral).where("referralCode", isEqualTo: referralCode).get().then((value) {
  255:         if (value.docs.isNotEmpty) {
  256:           referralModel = ReferralModel.fromJson(value.docs.first.data());
  257:         }
  258:       });
  259:     } catch (e, s) {
  260:       print('FireStoreUtils.firebaseCreateNewUser $e $s');
  268:     QuerySnapshot<Map<String, dynamic>> productsQuery = await fireStore.collection(CollectionName.sections).where("isActive", isEqualTo: true).orderBy("order", descending: false).get();
  270:     await Future.forEach(productsQuery.docs, (QueryDocumentSnapshot<Map<String, dynamic>> document) {
  282:     await fireStore.collection(CollectionName.settings).doc("AppHomeBanners").get().then((value) {
  292:     await fireStore.collection(CollectionName.currency).where("isActive", isEqualTo: true).get().then((value) {
  302:     await fireStore
  323:     await fireStore.collection(CollectionName.favoriteVendor).where('user_id', isEqualTo: getCurrentUid()).where("section_id", isEqualTo: Constant.sectionConstantModel!.id).get().then((value) {
  335:     await fireStore.collection(CollectionName.emailTemplates).where('type', isEqualTo: type).get().then((value) {
  348:       await fireStore
  372:     return await fireStore.collection("chat_driver").doc(inboxModel.orderId).set(inboxModel.toJson()).then((document) {
  378:     return await fireStore.collection("chat_driver").doc(conversationModel.orderId).collection("thread").doc(conversationModel.id).set(conversationModel.toJson()).then((document) {
  384:     return await fireStore.collection("chat_store").doc(inboxModel.orderId).set(inboxModel.toJson()).then((document) {
  390:     return await fireStore.collection("chat_store").doc(conversationModel.orderId).collection("thread").doc(conversationModel.id).set(conversationModel.toJson()).then((document) {
  396:     return await fireStore.collection("chat_worker").doc(inboxModel.orderId).set(inboxModel.toJson()).then((document) {
  402:     return await fireStore.collection("chat_worker").doc(conversationModel.orderId).collection("thread").doc(conversationModel.id).set(conversationModel.toJson()).then((document) {
  408:     return await fireStore.collection("chat_provider").doc(inboxModel.orderId).set(inboxModel.toJson()).then((document) {
  414:     return await fireStore.collection("chat_provider").doc(conversationModel.orderId).collection("thread").doc(conversationModel.id).set(conversationModel.toJson()).then((document) {
  421:     List<Placemark> placeMarks = await placemarkFromCoordinates(Constant.selectedLocation.location!.latitude ?? 0.0, Constant.selectedLocation.location!.longitude ?? 0.0);
  422:     await fireStore
  445:       await fireStore
  462:       await fireStore
  483:   static Future<List<VendorCategoryModel>> getHomeVendorCategory() async {
  485:     await fireStore
  488:         .where("show_in_homepage", isEqualTo: true)
  505:     await fireStore
  522:   static Future<List<BannerModel>> getHomeBottomBanner() async {
  524:     await fireStore
  533:             BannerModel bannerHome = BannerModel.fromJson(element.data());
  534:             bannerList.add(bannerHome);
  542:     await fireStore.collection(CollectionName.brands).where("is_publish", isEqualTo: true).get().then((value) {
  544:         BrandsModel bannerHome = BrandsModel.fromJson(element.data());
  545:         brandList.add(bannerHome);
  553:     await fireStore
  570:     QuerySnapshot<Map<String, dynamic>> productsQuery = await fireStore.collection(CollectionName.vendorProducts).where('vendorID', isEqualTo: id).get();
  571:     await Future.forEach(productsQuery.docs, (QueryDocumentSnapshot<Map<String, dynamic>> document) {
  576:     QuerySnapshot<Map<String, dynamic>> catQuery = await fireStore.collection(CollectionName.vendorCategories).where('publish', isEqualTo: true).get();
  577:     await Future.forEach(catQuery.docs, (QueryDocumentSnapshot<Map<String, dynamic>> document) {
  588:     await fireStore.collection(CollectionName.favoriteItem).where('user_id', isEqualTo: getCurrentUid()).where("section_id", isEqualTo: Constant.sectionConstantModel!.id).get().then((value) {
  600:       await fireStore.collection(CollectionName.vendors).doc(vendorId).get().then((value) {
  615:       await fireStore.collection(CollectionName.vendorProducts).doc(productId).get().then((value) {
  629:     QuerySnapshot<Map<String, dynamic>> currencyQuery = await fireStore.collection(CollectionName.giftCards).where("isEnable", isEqualTo: true).get();
  630:     await Future.forEach(currencyQuery.docs, (QueryDocumentSnapshot<Map<String, dynamic>> document) {
  643:     await fireStore
  657:   static Future<void> getSettings() async {
  659:       final restaurantSnap = await fireStore.collection(CollectionName.settings).doc('vendor').get();
  675:       final globalSettingsSnap = await fireStore.collection(CollectionName.settings).doc("globalSettings").get();
  706:       final cashbackSnap = await fireStore.collection(CollectionName.settings).doc("cashbackOffer").get();
  714:       final driverNearBySnap = await fireStore.collection(CollectionName.settings).doc("DriverNearBy").get();
  748:       final storySnap = await fireStore.collection(CollectionName.settings).doc('story').get();
  756:       final emailSnap = await fireStore.collection(CollectionName.settings).doc("emailSetting").get();
  762:       final specialDiscountSnap = await fireStore.collection(CollectionName.settings).doc("specialDiscountOffer").get();
  770:       log("getSettings() Error: $e");
  776:     await fireStore.collection(CollectionName.giftPurchases).where("userid", isEqualTo: FireStoreUtils.getCurrentUid()).get().then((value) {
  793:           await fireStore
  819:     await fireStore
  838:       await fireStore.collection(CollectionName.vendorCategories).doc(categoryId).get().then((value) {
  853:       await fireStore.collection(CollectionName.reviewAttributes).doc(attributeId).get().then((value) {
  867:   //   await fireStore
  882:     return await fireStore.collection(CollectionName.vendors).doc(vendor.id).set(vendor.toJson()).then((document) {
  889:     await fireStore
  906:       await fireStore.collection(CollectionName.referral).doc(getCurrentUid()).get().then((value) {
  917:     String selectedFoodType = Preferences.getString(Preferences.foodDeliveryType, defaultValue: "Delivery");
  921:       await fireStore
  937:       await fireStore
  961:       await fireStore.collection(CollectionName.settings).doc("DeliveryCharge").get().then((value) {
  976:     await fireStore
  999:     await fireStore
 1020:     await fireStore
 1040:       await fireStore.collection(CollectionName.cashbackRedeem).where('userId', isEqualTo: FireStoreUtils.getCurrentUid()).where('cashbackId', isEqualTo: cashbackId).get().then((value) {
 1055:     await fireStore
 1071:     await fireStore
 1087:     await fireStore
 1105:     await fireStore.collection(CollectionName.vendorAttributes).get().then((value) {
 1117:       await fireStore.collection(CollectionName.vendorCategories).doc(categoryId).get().then((value) {
 1131:     await fireStore.collection(CollectionName.itemsReview).where('VendorId', isEqualTo: vendorId).get().then((value) {
 1141:     await fireStore.collection(CollectionName.settings).doc("payFastSettings").get().then((value) async {
 1144:         await Preferences.setString(Preferences.payFastSettings, jsonEncode(payFastModel.toJson()));
 1147:     await fireStore.collection(CollectionName.settings).doc("MercadoPago").get().then((value) async {
 1150:         await Preferences.setString(Preferences.mercadoPago, jsonEncode(mercadoPagoModel.toJson()));
 1153:     await fireStore.collection(CollectionName.settings).doc("paypalSettings").get().then((value) async {
 1156:         await Preferences.setString(Preferences.paypalSettings, jsonEncode(payPalModel.toJson()));
 1159:     await fireStore.collection(CollectionName.settings).doc("stripeSettings").get().then((value) async {
 1162:         await Preferences.setString(Preferences.stripeSettings, jsonEncode(stripeModel.toJson()));
 1165:     await fireStore.collection(CollectionName.settings).doc("flutterWave").get().then((value) async {
 1168:         await Preferences.setString(Preferences.flutterWave, jsonEncode(flutterWaveModel.toJson()));
 1171:     await fireStore.collection(CollectionName.settings).doc("payStack").get().then((value) async {
 1174:         await Preferences.setString(Preferences.payStack, jsonEncode(payStackModel.toJson()));
 1177:     await fireStore.collection(CollectionName.settings).doc("PaytmSettings").get().then((value) async {
 1180:         await Preferences.setString(Preferences.paytmSettings, jsonEncode(paytmModel.toJson()));
 1183:     await fireStore.collection(CollectionName.settings).doc("walletSettings").get().then((value) async {
 1186:         await Preferences.setString(Preferences.walletSettings, jsonEncode(walletSettingModel.toJson()));
 1189:     await fireStore.collection(CollectionName.settings).doc("razorpaySettings").get().then((value) async {
 1192:         await Preferences.setString(Preferences.razorpaySettings, jsonEncode(razorPayModel.toJson()));
 1195:     await fireStore.collection(CollectionName.settings).doc("CODSettings").get().then((value) async {
 1198:         await Preferences.setString(Preferences.codSettings, jsonEncode(codSettingModel.toJson()));
 1202:     await fireStore.collection(CollectionName.settings).doc("midtrans_settings").get().then((value) async {
 1205:         await Preferences.setString(Preferences.midTransSettings, jsonEncode(midTrans.toJson()));
 1209:     await fireStore.collection(CollectionName.settings).doc("orange_money_settings").get().then((value) async {
 1212:         await Preferences.setString(Preferences.orangeMoneySettings, jsonEncode(orangeMoney.toJson()));
 1216:     await fireStore.collection(CollectionName.settings).doc("xendit_settings").get().then((value) async {
 1219:         await Preferences.setString(Preferences.xenditSettings, jsonEncode(xendit.toJson()));
 1226:     await getUserProfile(userId).then((value) async {
 1232:         await FireStoreUtils.updateUser(userModel).then((value) {
 1355:   static Future<List<VendorCategoryModel>> getHomePageShowCategory() async {
 1357:     await fireStore
 1360:         .where("show_in_homepage", isEqualTo: true)
 1378:     await fireStore
 1398:     QuerySnapshot<Map<String, dynamic>> currencyQuery = await fireStore.collection(CollectionName.vendorProducts).where('categoryID', isEqualTo: categoryId).where('publish', isEqualTo: true).get();
 1399:     await Future.forEach(currencyQuery.docs, (QueryDocumentSnapshot<Map<String, dynamic>> document) {
 1407:     List<VendorModel?> vendorList = await getAllStoresFuture();
 1411:       await getAllProducts(vendor!.id.toString()).then((value) {
 1441:         await fireStore
 1448:     await Future.forEach(productsQuery.docs, (QueryDocumentSnapshot<Map<String, dynamic>> document) {
 1483:           await Geoflutterfire()
 1519:     await fireStore.collection(CollectionName.dynamicNotification).where('type', isEqualTo: type).get().then((value) {
 1534:     await fireStore
 1555:     await fireStore.collection(CollectionName.giftPurchases).doc(giftCardsOrderModel.id).set(giftCardsOrderModel.toJson());
 1560:     await fireStore.collection(CollectionName.favoriteVendor).where("store_id", isEqualTo: favouriteModel.restaurantId).get().then((value) {
 1562:         await fireStore.collection(CollectionName.favoriteVendor).doc(element.id).delete();
 1570:     await fireStore.collection(CollectionName.favoriteVendor).add(favouriteModel.toJson());
 1576:       final querySnapshot = await favoriteCollection.where("product_id", isEqualTo: favouriteModel.productId).get();
 1578:         await favoriteCollection.doc(doc.id).delete();
 1587:     await fireStore.collection(CollectionName.favoriteItem).add(favouriteModel.toJson());
 1595:     var storageRef = (await uploadTask.whenComplete(() {})).ref;
 1596:     var downloadUrl = await storageRef.getDownloadURL();
 1597:     var metaData = await storageRef.getMetadata();
 1602:   static Future<List<CouponModel>> getHomeCoupon() async {
 1604:     await fireStore
 1622:   static Future<List<BannerModel>> getHomeTopBanner() async {
 1624:     await fireStore
 1633:             BannerModel bannerHome = BannerModel.fromJson(element.data());
 1634:             bannerList.add(bannerHome);
 1642:     await fireStore.collection(CollectionName.story).where('sectionID', isEqualTo: Constant.sectionConstantModel!.id).get().then((value) {
 1654:     await fireStore.collection(CollectionName.giftPurchases).where("giftCode", isEqualTo: giftCode).get().then((value) {
 1663:     EmailTemplateModel? emailTemplateModel = await FireStoreUtils.getEmailTemplates(Constant.walletTopup);
 1672:     await Constant.sendMail(subject: emailTemplateModel.subject, isAdmin: emailTemplateModel.isSendToAdmin, body: newString, recipients: [Constant.userModel!.email]);
 1681:       await uploadTask;
 1682:       final String videoUrl = await videoRef.getDownloadURL();
 1684:       File thumbnail = await VideoCompress.getFileThumbnail(
 1693:       await thumbnailUploadTask;
 1694:       final String thumbnailUrl = await thumbnailRef.getDownloadURL();
 1695:       var metaData = await thumbnailRef.getMetadata();
 1709:       await fireStore.collection(CollectionName.vendorOrders).doc(orderId).get().then((value) {
 1723:     await fireStore
 1731:             CouponModel bannerHome = CouponModel.fromJson(element.data());
 1732:             ordersList.add(bannerHome);
 1740:     await fireStore
 1748:             CouponModel bannerHome = CouponModel.fromJson(element.data());
 1749:             ordersList.add(bannerHome);
 1757:     await fireStore
 1765:             CouponModel bannerHome = CouponModel.fromJson(element.data());
 1766:             ordersList.add(bannerHome);
 1775:       await fireStore.collection(CollectionName.users).doc(FireStoreUtils.getCurrentUid()).delete();
 1778:       await deleteAuthUser(FireStoreUtils.getCurrentUid());
 1789:       final user = auth.FirebaseAuth.instance.currentUser;
 1795:       final idToken = await user.getIdToken();
 1799:       final response = await http.post(
 1824:     await fireStore
 1846:     await fireStore.collection(CollectionName.parcelWeight).get().then((value) {
 1886:     //     await FireStoreUtils.setWalletTransaction(transactionModel).then((value) async {
 1888:     //         await FireStoreUtils.updateUserWallet(amount: "-$totalAmount", userId: FireStoreUtils.getCurrentUid());
 1894:     //   await firestore.collection(CollectionName.parcelOrders).doc(orderModel.id).set(orderModel.toJson());
 1906:       EmailTemplateModel? emailTemplateModel = await FireStoreUtils.getEmailTemplates(Constant.newParcelBook);
 1919:       await Constant.sendMail(subject: subjectNewString, isAdmin: emailTemplateModel.isSendToAdmin, body: newString, recipients: [Constant.userModel!.email]);
 1939:       EmailTemplateModel? emailTemplateModel = await FireStoreUtils.getEmailTemplates(Constant.newCabRideBook);
 1952:       await Constant.sendMail(subject: subjectNewString, isAdmin: emailTemplateModel.isSendToAdmin, body: newString, recipients: [Constant.userModel!.email]);
 1960:       EmailTemplateModel? emailTemplateModel = await FireStoreUtils.getEmailTemplates(Constant.newCarRideBook);
 1969:       await Constant.sendMail(subject: subjectNewString, isAdmin: emailTemplateModel.isSendToAdmin, body: newString, recipients: [Constant.userModel!.email]);
 1993:     await fireStore.collection(CollectionName.vehicleType).where('sectionId', isEqualTo: Constant.sectionConstantModel!.id).where("isActive", isEqualTo: true).get().then((value) {
 2009:     await fireStore.collection(CollectionName.popularDestinations).where("sectionId", isEqualTo: Constant.sectionConstantModel!.id).where('is_publish', isEqualTo: true).get().then((value) {
 2024:     await fireStore.collection(CollectionName.rides).doc(orderModel.id).set(orderModel.toJson());
 2028:     await fireStore.collection(CollectionName.parcelOrders).doc(orderModel.id).set(orderModel.toJson());
 2032:     await fireStore.collection(CollectionName.rentalOrders).doc(orderModel.id).set(orderModel.toJson());
 2038:       final doc = await fireStore.collection(CollectionName.rides).doc(orderId).get();
 2055:       final doc = await fireStore.collection(CollectionName.rides).doc(orderId).get();
 2073:       final doc = await fireStore.collection(CollectionName.users).doc(userId).get();
 2087:   //   await fireStore.collection(CollectionName.rides).where('authorID', isEqualTo: FireStoreUtils.getCurrentUid()).orderBy('createdAt', descending: true).get().then((value) {
 2114:     await fireStore
 2131:     await fireStore.collection(CollectionName.providerCategories).doc(categoryId).get().then((value) {
 2159:       await Geoflutterfire()
 2195:     await fireStore.collection(CollectionName.providersServices).where('author', isEqualTo: authId).where('publish', isEqualTo: true).orderBy('createdAt', descending: false).get().then((value) {
 2206:     await fireStore.collection(CollectionName.providerCategories).doc(categoryId).get().then((value) {
 2216:     await fireStore.collection(CollectionName.itemsReview).where('productId', isEqualTo: serviceId).get().then((value) {
 2241:       await Geoflutterfire()
 2278:     await fireStore
 2296:     await fireStore
 2321:     await documentReference.set(orderModel.toJson());
 2341:       EmailTemplateModel? emailTemplateModel = await FireStoreUtils.getEmailTemplates(Constant.newOnDemandBook);
 2400:         await Constant.sendMail(subject: subjectNewString, isAdmin: emailTemplateModel.isSendToAdmin, body: newString, recipients: [Constant.userModel?.email]);
 2414:       await docRef.set(orderModel.toJson(), SetOptions(merge: true));
 2441:   //       await docRef.set(updateData, SetOptions(merge: true));
 2454:   //   await fireStore
 2481:       DocumentSnapshot<Map<String, dynamic>> doc = await fireStore.collection(CollectionName.providersWorkers).doc(id).get();
 2494:     await fireStore.collection(CollectionName.providerOrders).doc(orderId).get().then((value) {
 2505:     await fireStore
 2526:     await fireStore
 2546:       final doc = await fireStore.collection(CollectionName.providersServices).doc(uid).get();
 2559:       await fireStore.collection(CollectionName.itemsReview).doc(ratingProduct.id).set(ratingProduct.toJson());
 2570:       await fireStore.collection(CollectionName.providersServices).doc(provider.id).set(provider.toJson());
 2581:       await fireStore.collection(CollectionName.providersWorkers).doc(worker.id).set(worker.toJson());
 2592:       final doc = await fireStore.collection(CollectionName.parcelOrders).doc(orderId).get();
 2619:       await docRef.set(orderModel.toJson(), SetOptions(merge: true));
 2628:     await fireStore.collection(CollectionName.rentalVehicleType).where('sectionId', isEqualTo: Constant.sectionConstantModel!.id).where("isActive", isEqualTo: true).get().then((value) {
 2644:     await fireStore.collection(CollectionName.rentalPackages).where("vehicleTypeId", isEqualTo: vehicleId).orderBy("ordering", descending: false).get().then((value) {
 2678:       await fireStore.collection(CollectionName.referral).where("referralCode", isEqualTo: referralCode).get().then((value) {
 2694:     await fireStore.collection(CollectionName.rentalOrders).doc(orderId).get().then((value) {
 2705:     await fireStore
 2726:         final snapshot = await fireStore.collection(collection).where('id', isEqualTo: orderId).limit(1).get();
 2803:       await docRef.set(complaintData);
 2812:       QuerySnapshot querySnapshot = await fireStore.collection(CollectionName.complaints).where('orderId', isEqualTo: orderId).limit(1).get();
 2823:       QuerySnapshot querySnapshot = await fireStore.collection(CollectionName.complaints).where('orderId', isEqualTo: orderId).limit(1).get();
 2847:     await fireStore.collection(CollectionName.favoriteService).add(favouriteModel.toJson()).then((value) {
 2856:         await fireStore.collection(CollectionName.favoriteService).where('user_id', isEqualTo: userId).where("section_id", isEqualTo: Constant.sectionConstantModel!.id).get();
 2858:     await Future.forEach(favourites.docs, (QueryDocumentSnapshot<Map<String, dynamic>> document) {
 2873:         await fireStore.collection(CollectionName.providersServices).where('id', isEqualTo: model.service_id).where('sectionId', isEqualTo: model.section_id).get();
 2874:     await Future.forEach(reviewQuery.docs, (QueryDocumentSnapshot<Map<String, dynamic>> document) {
 2900:                 await doc.reference.update({'seen': true});
 2930:                 await doc.reference.update({'seen': true});
 2949:     await chatCollection.doc(docId).collection("thread").doc(conversationModel.id).set(conversationModel.toJson());
 2956:     await collection.doc(docId).set(inboxModel.toJson());
```

## FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\constant\constant.dart
```dart
   15: import 'package:customer/utils/preferences.dart';
  227:     LocationPermission permission = await Geolocator.checkPermission();
  229:       permission = await Geolocator.requestPermission();
  555:         await (await uploadTask.whenComplete(() {})).ref.getDownloadURL();
  561:     await launchUrl(launchUri);
  565:     if (!await launchUrl(url, mode: LaunchMode.externalApplication)) {
  571:     ByteData data = await rootBundle.load(path);
  572:     ui.Codec codec = await ui.instantiateImageCodec(
  576:     ui.FrameInfo fi = await codec.getNextFrame();
  577:     return (await fi.image.toByteData(
  584:     TimeOfDay? newTime = await showTimePicker(
  595:     DateTime? pickedDate = await showDatePicker(
  669:   static LanguageModel getLanguage() {
  671:     final String user = Preferences.getString(Preferences.languageCodeKey);
  758:       final sendReport = await send(message, smtpServer);
  773:     // await connection.send(message);
  959:         await FireStoreUtils.getEmailTemplates(newOrderPlaced);
 1153:       await sendMail(
 1211:       final http.Response response = await http.get(Uri.parse(url));
 1215:       final ui.Codec codec = await ui.instantiateImageCodec(
 1219:       final ui.FrameInfo frameInfo = await codec.getNextFrame();
 1221:       final ByteData? byteData = await frameInfo.image.toByteData(
 1227:       final ByteData data = await rootBundle.load('assets/images/ic_cab.png');
 1260:   //   final http.Response response = await http.get(Uri.parse(url));
 1268:   //   final ui.Codec codec = await ui.instantiateImageCodec(bytes, targetWidth: width);
 1269:   //   final ui.FrameInfo frameInfo = await codec.getNextFrame();
 1271:   //   final ByteData? byteData = await frameInfo.image.toByteData(format: ui.ImageByteFormat.png);
```

## FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\utils\preferences.dart
```dart
    1: import 'package:shared_preferences/shared_preferences.dart';
    3: class Preferences {
    5:   static const isLogin = "isLogin";
   28:   static late SharedPreferences pref;
   31:     pref = await SharedPreferences.getInstance();
   46:     await pref.setBool(key, value);
   54:     await pref.setString(key, value);
   62:     await pref.setInt(key, value);
   66:     await pref.clear();
   70:     await pref.remove(key);
```

## FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\main.dart
```dart
    1: import 'package:customer/screen_ui/splash_screen/splash_screen.dart';
    6: import 'package:customer/utils/preferences.dart';
   22:       firebaseApp = await Firebase.initializeApp(
   45:   await Preferences.initPref();
   48:   await configEasyLoading();
  125:         home: GetBuilder<GlobalSettingController>(
  128:             return const SplashScreen();
```

## Final Status
STATUS: CUSTOMER_SPLASH_REDIRECT_FLOW_AUDIT_CREATED