# ERBETE CUSTOMER APP DETAIL AUDIT

Generated: 06/28/2026 04:32:19

## Root

- App root: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\customer
- Git top-level: C:/Users/Hp/Documents/Codex/2026-06-12/files-mentioned-by-the-user-documentation

## Pubspec First 80 Lines

name: customer
description: "A new Flutter project."

version: 1.0.0+4

environment:
  sdk: ^3.7.2

dependencies:
  flutter:
    sdk: flutter

  # Icons & UI
  cupertino_icons: ^1.0.8
  flutter_svg: ^2.2.4
  shimmer: ^3.0.0
  flutter_easyloading: ^3.0.5
  flutter_rating_bar: ^4.0.1
  dotted_border: ^3.1.0
  flutter_html: ^3.0.0
  photo_view: ^0.15.0
  bottom_picker: ^4.1.1
  timelines_plus: ^2.0.0
  badges: ^3.1.2
  in_app_review: ^2.0.11
  dropdown_textfield: ^1.2.0

  # State Management
  get: ^4.7.3
  provider: ^6.1.5+1

  # Network & Storage
  cached_network_image: ^3.4.1
  shared_preferences: ^2.5.4
  path_provider: ^2.1.5
  path: ^1.9.1

  # Firebase & Notifications
  firebase_core: ^3.12.1
  firebase_auth: ^5.5.1
  cloud_firestore: ^5.6.5
  firebase_database: ^11.3.5
  firebase_storage: ^12.4.4
  firebase_messaging: ^15.2.4
  firebase_app_check: ^0.3.2+10
  flutter_local_notifications: ^21.0.0

  # Authentication / User
  country_code_picker: ^3.4.1
  pin_code_fields: ^9.1.0
  google_sign_in: ^6.2.2
  sign_in_with_apple: ^7.0.1

  # Maps & Location
  google_maps_flutter: ^2.15.0
  flutter_osm_plugin: ^1.4.3
  osm_nominatim: ^4.0.1
  geolocator: ^14.0.2
  geocoding: ^4.0.0
  flutter_polyline_points: ^3.1.0
  map_launcher: ^4.4.3
  flutter_map: ^8.2.2
  latlong2: ^0.9.1
  location: ^8.0.1

  # Media
  image_picker: ^1.2.1
  video_player: ^2.11.0
  video_compress: ^3.1.4

  # Sharing & QR
  share_plus: ^12.0.1
  qr_flutter: ^4.1.0
  qr_code_dart_scan: ^0.11.5
  clipboard: ^3.0.14

  # Payment
  flutter_stripe: ^12.3.0
  razorpay_flutter: ^1.4.1
  flutter_paypal: ^0.2.1

## Android Package / Firebase Config

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\customer\android\app\src\main\AndroidManifest.xml
LINE: 56
TEXT: android:name="com.erbete.customer.MainActivity"
NEXT: android:configChanges="orientation|keyboardHidden|keyboard|screenSize|smallestScreenSize|locale|layoutDirection|fontScale|screenLayout|density|uiMode"

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\customer\android\app\src\main\AndroidManifest.xml
LINE: 93
TEXT: android:scheme="com.erbete.customer" />
NEXT: </intent-filter>

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\customer\android\app\src\main\AndroidManifest.xml
LINE: 105
TEXT: android:scheme="com.erbete.customer" />

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\customer\android\app\src\main\AndroidManifest.xml
LINE: 164
TEXT: android:authorities="${applicationId}.provider"
NEXT: android:exported="false"

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\customer\android\app\build.gradle.kts
LINE: 22
TEXT: namespace = "com.erbete.customer"
NEXT: compileSdk = 36

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\customer\android\app\build.gradle.kts
LINE: 33
TEXT: applicationId = "com.erbete.customer"
NEXT: minSdk = 26

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\customer\android\app\google-services.json
LINE: 4
TEXT: "firebase_url": "https://erbete-putra-default-rtdb.asia-southeast1.firebasedatabase.app",
NEXT: "project_id": "erbete-putra",

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\customer\android\app\google-services.json
LINE: 5
TEXT: "project_id": "erbete-putra",
NEXT: "storage_bucket": "erbete-putra.appspot.com"

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\customer\android\app\google-services.json
LINE: 6
TEXT: "storage_bucket": "erbete-putra.appspot.com"
NEXT: },

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\customer\android\app\google-services.json
LINE: 11
TEXT: "mobilesdk_app_id": "1:620343172253:android:c67719229e2e3e83414874",
NEXT: "android_client_info": {

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\customer\android\app\google-services.json
LINE: 13
TEXT: "package_name": "com.erbete.customer"
NEXT: }

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\customer\android\app\google-services.json
LINE: 21
TEXT: "package_name": "com.erbete.customer",
NEXT: "certificate_hash": "e2387b1ac9ad0c285a38d8453e40a0d523db2954"

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\customer\android\app\google-services.json
LINE: 46
TEXT: "bundle_id": "com.erbete.customer.ios"
NEXT: }

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\customer\android\app\google-services.json
LINE: 55
TEXT: "mobilesdk_app_id": "1:620343172253:android:28dd66f1fb1c6e02414874",
NEXT: "android_client_info": {

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\customer\android\app\google-services.json
LINE: 57
TEXT: "package_name": "com.erbete.driver"
NEXT: }

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\customer\android\app\google-services.json
LINE: 65
TEXT: "package_name": "com.erbete.driver",
NEXT: "certificate_hash": "e2387b1ac9ad0c285a38d8453e40a0d523db2954"

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\customer\android\app\google-services.json
LINE: 90
TEXT: "bundle_id": "com.erbete.customer.ios"
NEXT: }

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\customer\android\app\google-services.json
LINE: 99
TEXT: "mobilesdk_app_id": "1:620343172253:android:42180706e09e072c414874",
NEXT: "android_client_info": {

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\customer\android\app\google-services.json
LINE: 101
TEXT: "package_name": "com.erbete.restaurant"
NEXT: }

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\customer\android\app\google-services.json
LINE: 126
TEXT: "bundle_id": "com.erbete.customer.ios"
NEXT: }

## Firebase Options / Dart References

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\customer\lib\controllers\0n_demand_payment_controller.dart
LINE: 236
TEXT: Stripe.merchantIdentifier = 'eMart Customer';
NEXT: Stripe.instance.applySettings();

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\customer\lib\controllers\0n_demand_payment_controller.dart
LINE: 611
TEXT: 'name': 'eMart',
NEXT: 'order_id': orderId,

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\customer\lib\controllers\cab_booking_controller.dart
LINE: 1026
TEXT: Stripe.merchantIdentifier = 'eMart Customer';
NEXT: Stripe.instance.applySettings();

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\customer\lib\controllers\cab_booking_controller.dart
LINE: 1404
TEXT: 'name': 'eMart',
NEXT: 'order_id': orderId,

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\customer\lib\controllers\cart_controller.dart
LINE: 976
TEXT: 'name': 'eMart',
NEXT: 'order_id': orderId,

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\customer\lib\controllers\gift_card_controller.dart
LINE: 656
TEXT: 'name': 'eMart',
NEXT: 'order_id': orderId,

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart
LINE: 1029
TEXT: Stripe.merchantIdentifier = 'eMart Customer';
NEXT: Stripe.instance.applySettings();

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart
LINE: 1407
TEXT: 'name': 'eMart',
NEXT: 'order_id': orderId,

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\customer\lib\controllers\my_cab_booking_controller.dart
LINE: 275
TEXT: Stripe.merchantIdentifier = 'eMart Customer';
NEXT: Stripe.instance.applySettings();

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\customer\lib\controllers\my_cab_booking_controller.dart
LINE: 653
TEXT: 'name': 'eMart',
NEXT: 'order_id': orderId,

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\customer\lib\controllers\parcel_order_confirmation_controller.dart
LINE: 260
TEXT: Stripe.merchantIdentifier = 'eMart Customer';
NEXT: Stripe.instance.applySettings();

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\customer\lib\controllers\parcel_order_confirmation_controller.dart
LINE: 395
TEXT: returnURL: "com.erbete.customer://paypalpay",
NEXT: cancelURL: "com.erbete.customer://paypalcancel",

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\customer\lib\controllers\parcel_order_confirmation_controller.dart
LINE: 396
TEXT: cancelURL: "com.erbete.customer://paypalcancel",

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\customer\lib\controllers\parcel_order_confirmation_controller.dart
LINE: 436
TEXT: //             returnURL: "https://success.emart.com/return",
NEXT: //             cancelURL: "https://cancel.emart.com/cancel",

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\customer\lib\controllers\parcel_order_confirmation_controller.dart
LINE: 437
TEXT: //             cancelURL: "https://cancel.emart.com/cancel",
NEXT: //             // returnURL: "com.emart.customer://paypalpay",

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\customer\lib\controllers\parcel_order_confirmation_controller.dart
LINE: 438
TEXT: //             // returnURL: "com.emart.customer://paypalpay",
NEXT: //             // cancelURL: "com.emart.customer://paypalpay",

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\customer\lib\controllers\parcel_order_confirmation_controller.dart
LINE: 439
TEXT: //             // cancelURL: "com.emart.customer://paypalpay",
NEXT: //             transactions: [

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\customer\lib\controllers\parcel_order_confirmation_controller.dart
LINE: 744
TEXT: 'name': 'eMart',
NEXT: 'order_id': orderId,

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\customer\lib\controllers\rental_order_details_controller.dart
LINE: 312
TEXT: Stripe.merchantIdentifier = 'eMart Customer';
NEXT: Stripe.instance.applySettings();

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\customer\lib\controllers\rental_order_details_controller.dart
LINE: 690
TEXT: 'name': 'eMart',
NEXT: 'order_id': orderId,

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\customer\lib\controllers\wallet_controller.dart
LINE: 399
TEXT: 'name': 'eMart',
NEXT: 'order_id': orderId,

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\customer\lib\lang\app_ar.dart
LINE: 74
TEXT: 'eMart': 'إي مارت',
NEXT: 'All Your Needs in One App!': 'كل احتياجاتك في تطبيق واحد!',

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\customer\lib\lang\app_ar.dart
LINE: 479
TEXT: 'Check out emart, the ultimate all-in-one multi-vendor eBusiness platform.': 'اطلع على emart، المنصة الشاملة متعددة البائعين للأعمال الإلكترونية.',
NEXT: 'Google Play:': 'جوجل بلاي:',

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\customer\lib\lang\app_ar.dart
LINE: 786
TEXT: 'Invite your friends to sign up with emart using your code, and you’ll earn': 'ادعُ أصدقاءك للتسجيل في emart باستخدام رمزك وستكسب',
NEXT: 'lease select a future date & time': 'يرجى اختيار تاريخ ووقت مستقبلي',

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\customer\lib\lang\app_en.dart
LINE: 74
TEXT: 'eMart': 'eMart',
NEXT: 'All Your Needs in One App!': 'All Your Needs in One App!',

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\customer\lib\lang\app_en.dart
LINE: 475
TEXT: 'Check out emart, the ultimate all-in-one multi-vendor eBusiness platform.': 'Check out emart, the ultimate all-in-one multi-vendor eBusiness platform.',
NEXT: 'Google Play:': 'Google Play:',

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\customer\lib\lang\app_en.dart
LINE: 783
TEXT: 'Invite your friends to sign up with emart using your code, and you’ll earn': 'Invite your friends to sign up with emart using your code, and you’ll earn',
NEXT: 'lease select a future date & time': 'lease select a future date & time',

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\customer\lib\screen_ui\cab_service_screens\cab_booking_screen.dart
LINE: 71
TEXT: userAgentPackageName: Platform.isAndroid ? "com.erbete.customer" : "com.erbete.customer.ios",
NEXT: ),

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\customer\lib\screen_ui\cab_service_screens\cab_order_details.dart
LINE: 194
TEXT: fm.TileLayer(urlTemplate: "https://tile.openstreetmap.org/{z}/{x}/{y}.png", userAgentPackageName: 'com.erbete.customer'),

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\customer\lib\screen_ui\cab_service_screens\Intercity_home_screen.dart
LINE: 69
TEXT: flutterMap.TileLayer(urlTemplate: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png', userAgentPackageName: 'com.erbete.customer'),
NEXT: flutterMap.MarkerLayer(markers: controller.osmMarker),

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart
LINE: 1813
TEXT: flutterMap.TileLayer(urlTemplate: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png', userAgentPackageName: 'com.erbete.customer'),
NEXT: flutterMap.MarkerLayer(markers: controller.osmMarker),

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\customer\lib\screen_ui\multi_vendor_service\order_list_screen\live_tracking_screen.dart
LINE: 34
TEXT: flutterMap.TileLayer(urlTemplate: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png', userAgentPackageName: 'com.erbete.customer'),
NEXT: if (controller.routePoints.isNotEmpty) flutterMap.PolylineLayer(polylines: [flutterMap.Polyline(points: controller.routePoints, strokeWidth: 5.0, color: Colors.blue)]),

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\customer\lib\screen_ui\multi_vendor_service\profile_screen\profile_screen.dart
LINE: 164
TEXT: '${'Check out emart, the ultimate all-in-one multi-vendor eBusiness platform.'.tr} \n\n${'Google Play:'.tr} ${Constant.googlePlayLink} \n\n${'App Store:'.tr} ${Constant.appStoreLink}',
NEXT: subject: 'Look what I made!'.tr,

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\customer\lib\screen_ui\multi_vendor_service\refer_friend_screen\refer_friend_screen.dart
LINE: 73
TEXT: "${'Invite your friends to sign up with emart using your code, and you’ll earn'.tr} ${Constant.amountShow(amount: Constant.sectionConstantModel!.referralAmount)} ${'after their Success the first order! 💸🍔'.tr}"
NEXT: .tr,

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\customer\lib\screen_ui\service_home_screen\service_list_screen.dart
LINE: 28
TEXT: Text("eMart".tr, style: AppThemeData.semiBoldTextStyle(fontSize: 22, color: themeController.isDark.value ? AppThemeData.grey50 : AppThemeData.grey900)),
NEXT: Text("All Your Needs in One App!".tr, style: AppThemeData.regularTextStyle(fontSize: 14, color: themeController.isDark.value ? AppThemeData.grey100 : AppThemeData.grey700)),

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\customer\lib\screen_ui\splash_screen\splash_screen.dart
LINE: 24
TEXT: Text("eMart".tr, style: TextStyle(color: AppThemeData.grey50, fontSize: 24, fontFamily: AppThemeData.bold)),
NEXT: ],

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\customer\lib\service\fire_store_utils.dart
LINE: 1794
TEXT: final projectId = DefaultFirebaseOptions.currentPlatform.projectId;
NEXT: final url = Uri.parse('https://us-central1-$projectId.cloudfunctions.net/deleteUser');

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\customer\lib\service\fire_store_utils.dart
LINE: 1795
TEXT: final url = Uri.parse('https://us-central1-$projectId.cloudfunctions.net/deleteUser');

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\customer\lib\utils\notification_service.dart
LINE: 101
TEXT: //     String projectId = data['projectId'];
NEXT: //

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\customer\lib\utils\notification_service.dart
LINE: 104
TEXT: //     PricingRequestModel? pricingRequestModel = await FireStoreUtils.getPricingRequestById(projectId);
NEXT: //     BusinessModel? businessModel = await FireStoreUtils.getBusinessById(businessId);

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\customer\lib\utils\notification_service.dart
LINE: 116
TEXT: //     String projectId = data['projectId'];
NEXT: //     BusinessModel? businessModel = await FireStoreUtils.getBusinessById(businessId);

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\customer\lib\utils\notification_service.dart
LINE: 155
TEXT: AndroidNotificationChannel channel = const AndroidNotificationChannel('0', 'eMart customer', description: 'Show eMart Notification', importance: Importance.max);
NEXT: AndroidNotificationDetails notificationDetails = AndroidNotificationDetails(

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\customer\lib\widget\osm_map\map_picker_page.dart
LINE: 41
TEXT: TileLayer(urlTemplate: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png', userAgentPackageName: 'com.erbete.customer'),
NEXT: MarkerLayer(

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\customer\lib\firebase_options.dart
LINE: 55
TEXT: projectId: 'erbete-putra',
NEXT: databaseURL: 'https://erbete-putra-default-rtdb.asia-southeast1.firebasedatabase.app',

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\customer\lib\firebase_options.dart
LINE: 56
TEXT: databaseURL: 'https://erbete-putra-default-rtdb.asia-southeast1.firebasedatabase.app',
NEXT: storageBucket: 'erbete-putra.appspot.com',

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\customer\lib\firebase_options.dart
LINE: 57
TEXT: storageBucket: 'erbete-putra.appspot.com',
NEXT: );

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\customer\lib\firebase_options.dart
LINE: 64
TEXT: projectId: 'YOUR_IOS_PROJECT_ID',
NEXT: databaseURL: 'YOUR_IOS_DATABASE_URL',

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\customer\lib\firebase_options.dart
LINE: 65
TEXT: databaseURL: 'YOUR_IOS_DATABASE_URL',
NEXT: storageBucket: 'YOUR_IOS_STORAGE_BUCKET',

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\customer\lib\firebase_options.dart
LINE: 66
TEXT: storageBucket: 'YOUR_IOS_STORAGE_BUCKET',
NEXT: androidClientId: 'YOUR_ANDROID_CLIENT_ID',
