# ERBETE VENDOR / RESTAURANT APP DETAIL AUDIT

Generated: 06/28/2026 04:29:19

## Root

- Vendor root: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor
- Git top-level: C:/Users/Hp/Documents/Codex/2026-06-12/files-mentioned-by-the-user-documentation

## Pubspec First 80 Lines

name: vendor
description: "A new Flutter project."
# The following line prevents the package from being accidentally published to
# pub.dev using `flutter pub publish`. This is preferred for private packages.
publish_to: 'none' # Remove this line if you wish to publish to pub.dev

# The following defines the version and build number for your application.
# A version number is three numbers separated by dots, like 1.2.43
# followed by an optional build number separated by a +.
# Both the version and the builder number may be overridden in flutter
# build by specifying --build-name and --build-number, respectively.
# In Android, build-name is used as versionName while build-number used as versionCode.
# Read more about Android versioning at https://developer.android.com/studio/publish/versioning
# In iOS, build-name is used as CFBundleShortVersionString while build-number is used as CFBundleVersion.
# Read more about iOS versioning at
# https://developer.apple.com/library/archive/documentation/General/Reference/InfoPlistKeyReference/Articles/CoreFoundationKeys.html
# In Windows, build-name is used as the major, minor, and patch parts
# of the product and file versions while build-number is used as the build suffix.
version: 6.0.0+1

environment:
  sdk: ^3.8.1

# Dependencies specify other packages that your package needs in order to work.
# To automatically upgrade your package dependencies to the latest versions
# consider running `flutter pub upgrade --major-versions`. Alternatively,
# dependencies can be manually updated by changing the version numbers below to
# the latest version available on pub.dev. To see which dependencies have newer
# versions available, run `flutter pub outdated`.
dependencies:
  flutter:
    sdk: flutter

  cupertino_icons: ^1.0.8
  firebase_core: ^3.12.1
  firebase_auth: ^5.5.1
  cloud_firestore: ^5.6.5
  firebase_database: ^11.3.5
  firebase_storage: ^12.4.4
  firebase_messaging: ^15.2.4
  firebase_app_check: ^0.3.2+10
  crypto: ^3.0.7

  country_code_picker: ^3.4.1

  dotted_border: ^3.1.0
  geocoding: ^4.0.0
  googleapis_auth: ^2.0.0

  cached_network_image: ^3.4.1
  flutter_easyloading: ^3.0.5
  flutter_email_sender: ^8.0.0
  flutter_html: any
  flutter_local_notifications: ^21.0.0
  flutter_svg: ^2.2.4
  shimmer: ^3.0.0
  geolocator: any
  location: ^8.0.1
  get: ^4.7.3
#  google_sign_in: ^6.2.2
  google_sign_in: ^7.2.0
  image_picker: ^1.2.1
  intl: ^0.20.2
  pin_code_fields: ^9.1.0

  qr_flutter: ^4.1.0
  shared_preferences: ^2.5.4
  sign_in_with_apple: ^7.0.1
  syncfusion_flutter_datepicker: ^32.2.8
  timer_count_down: ^2.2.2
  url_launcher: ^6.3.2
  uuid: ^4.5.3
  date_picker_timeline: ^1.2.7
  flutter_rating_bar: ^4.0.1
  datetime_picker_formfield_new: ^2.1.0
  flutter_polyline_points: ^3.1.0
  clipboard: ^3.0.14
  map_launcher: ^4.4.3
  story_view: ^0.16.6
  bottom_picker: ^4.1.1

## Android Package / Firebase Config

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\android\app\build.gradle.kts
LINE: 22
TEXT: namespace = "com.erbete.restaurant"
NEXT: compileSdk = 36

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\android\app\build.gradle.kts
LINE: 33
TEXT: applicationId = "com.erbete.restaurant"
NEXT: minSdk = 26

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\android\app\google-services.json
LINE: 4
TEXT: "firebase_url": "https://erbete-putra-default-rtdb.asia-southeast1.firebasedatabase.app",
NEXT: "project_id": "erbete-putra",

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\android\app\google-services.json
LINE: 5
TEXT: "project_id": "erbete-putra",
NEXT: "storage_bucket": "erbete-putra.appspot.com"

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\android\app\google-services.json
LINE: 6
TEXT: "storage_bucket": "erbete-putra.appspot.com"
NEXT: },

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\android\app\google-services.json
LINE: 11
TEXT: "mobilesdk_app_id": "1:620343172253:android:42180706e09e072c414874",
NEXT: "android_client_info": {

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\android\app\google-services.json
LINE: 13
TEXT: "package_name": "com.erbete.restaurant"
NEXT: }

## Firebase Options / Dart References

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\auth_screen\signup_screen.dart
LINE: 38
TEXT: "Join eMart Store today and start managing your orders effortlessly.".tr,
NEXT: style: TextStyle(color: isDark ? AppThemeData.grey400 : AppThemeData.grey500, fontSize: 16, fontFamily: AppThemeData.regular),

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\dine_in_order_screen\dine_in_order_screen.dart
LINE: 48
TEXT: "Welcome to eMart Store".tr,
NEXT: style: TextStyle(color: isDark ? AppThemeData.grey900 : AppThemeData.grey50, fontSize: 12, fontFamily: AppThemeData.regular),

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\Home_screen\home_screen.dart
LINE: 80
TEXT: "Welcome to eMart Store".tr,
NEXT: style: TextStyle(color: isDark ? AppThemeData.grey900 : AppThemeData.grey50, fontSize: 12, fontFamily: AppThemeData.regular),

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\splash_screen.dart
LINE: 29
TEXT: "Welcome to eMart Store".tr,
NEXT: textAlign: TextAlign.center,

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\app\splash_screen.dart
LINE: 34
TEXT: "Your eMart, Your Products, Delivered Fast!".tr,
NEXT: textAlign: TextAlign.center,

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\controller\subscription_controller.dart
LINE: 150
TEXT: Stripe.merchantIdentifier = 'eMart Store'.tr;
NEXT: Stripe.instance.applySettings();

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\controller\subscription_controller.dart
LINE: 540
TEXT: 'name': 'eMart',
NEXT: 'order_id': orderId,

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\lang\app_ar.dart
LINE: 676
TEXT: "Join eMart Store today and start managing your orders effortlessly.": "انضم إلى eMart Store اليوم وابدأ في إدارة طلباتك بسهولة",
NEXT: "We'll be back soon!": "سنعود قريبًا!",

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\lang\app_ar.dart
LINE: 689
TEXT: "Welcome to eMart Store": "مرحبًا بك في eMart Store",
NEXT: "Your eMart, Your Products, Delivered Fast!": "متجرك، منتجاتك، يتم توصيلها بسرعة!",

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\lang\app_ar.dart
LINE: 690
TEXT: "Your eMart, Your Products, Delivered Fast!": "متجرك، منتجاتك، يتم توصيلها بسرعة!",
NEXT: "Email is Required": "البريد الإلكتروني مطلوب",

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\lang\app_en.dart
LINE: 681
TEXT: "Join eMart Store today and start managing your orders effortlessly.": "Join eMart Store today and start managing your orders effortlessly.",
NEXT: "We'll be back soon!": "We'll be back soon!",

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\lang\app_en.dart
LINE: 696
TEXT: 'Welcome to eMart Store': 'Welcome to eMart Store',
NEXT: 'Your eMart, Your Products, Delivered Fast!': 'Your eMart, Your Products, Delivered Fast!',

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\lang\app_en.dart
LINE: 697
TEXT: 'Your eMart, Your Products, Delivered Fast!': 'Your eMart, Your Products, Delivered Fast!',
NEXT: 'Email is Required': 'Email is Required',

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\utils\fire_store_utils.dart
LINE: 1345
TEXT: final projectId = DefaultFirebaseOptions.currentPlatform.projectId;
NEXT: final url = Uri.parse('https://us-central1-$projectId.cloudfunctions.net/deleteUser');

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\utils\fire_store_utils.dart
LINE: 1346
TEXT: final url = Uri.parse('https://us-central1-$projectId.cloudfunctions.net/deleteUser');

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\widget\osm_map\map_picker_page.dart
LINE: 47
TEXT: userAgentPackageName: 'com.erbete.restaurant',
NEXT: ),

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\firebase_options.dart
LINE: 55
TEXT: projectId: 'erbete-putra',
NEXT: databaseURL: 'https://erbete-putra-default-rtdb.asia-southeast1.firebasedatabase.app',

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\firebase_options.dart
LINE: 56
TEXT: databaseURL: 'https://erbete-putra-default-rtdb.asia-southeast1.firebasedatabase.app',
NEXT: storageBucket: 'erbete-putra.appspot.com',

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\firebase_options.dart
LINE: 57
TEXT: storageBucket: 'erbete-putra.appspot.com',
NEXT: );

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\firebase_options.dart
LINE: 64
TEXT: projectId: 'YOUR_IOS_PROJECT_ID',
NEXT: databaseURL: 'YOUR_IOS_DATABASE_URL',

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\firebase_options.dart
LINE: 65
TEXT: databaseURL: 'YOUR_IOS_DATABASE_URL',
NEXT: storageBucket: 'YOUR_IOS_STORAGE_BUCKET',

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\firebase_options.dart
LINE: 66
TEXT: storageBucket: 'YOUR_IOS_STORAGE_BUCKET',
NEXT: androidClientId: 'YOUR_ANDROID_CLIENT_ID',

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\vendor\lib\main.dart
LINE: 61
TEXT: title: 'Erbete Restaurant'.tr,
NEXT: debugShowCheckedModeBanner: false,
