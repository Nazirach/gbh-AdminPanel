# ERBETE DRIVER APP DETAIL AUDIT

Generated: 06/28/2026 04:32:53

## Root

- App root: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver
- Git top-level: C:/Users/Hp/Documents/Codex/2026-06-12/files-mentioned-by-the-user-documentation

## Pubspec First 80 Lines

name: driver
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
version: 1.0.3+1003

environment:
  sdk: '>=3.4.0 <4.0.0'

# Dependencies specify other packages that your package needs in order to work.
# To automatically upgrade your package dependencies to the latest versions
# consider running `flutter pub upgrade --major-versions`. Alternatively,
# dependencies can be manually updated by changing the version numbers below to
# the latest version available on pub.dev. To see which dependencies have newer
# versions available, run `flutter pub outdated`.
dependencies:
  flutter:
    sdk: flutter


  cupertino_icons: ^1.0.9
  firebase_core: ^3.12.1
  firebase_auth: ^5.5.1
  cloud_firestore: ^5.6.5
  firebase_database: ^11.3.5
  firebase_storage: ^12.4.4
  firebase_messaging: ^15.2.4
  firebase_app_check: ^0.3.2+10
  googleapis_auth: ^2.0.0
  country_code_picker: ^3.4.1
  crypto: ^3.0.7

  dotted_border: ^3.1.0
  geocoding: ^4.0.0

  cached_network_image: ^3.4.1
  flutter_easyloading: ^3.0.5
  flutter_email_sender: ^8.0.0
  flutter_html: any
  flutter_local_notifications: ^21.0.0
  flutter_svg: ^2.2.4
  shimmer: ^3.0.0
  location: ^8.0.1
  get: ^4.7.3
  google_maps_flutter: ^2.16.0
  google_sign_in: ^6.2.2

  image_picker: ^1.2.1
  intl: ^0.20.2
  pin_code_fields: ^9.1.0

  provider: ^6.1.5+1
  qr_flutter: ^4.1.0
  shared_preferences: ^2.5.5
  sign_in_with_apple: ^7.0.1
  syncfusion_flutter_datepicker: ^33.1.45
  timer_count_down: ^2.2.2
  url_launcher: ^6.3.2
  uuid: ^4.5.3
  date_picker_timeline: ^1.2.7
  flutter_rating_bar: ^4.0.1
  flutter_polyline_points: ^3.1.0
  clipboard: ^3.0.14
  map_launcher: ^4.5.0
  timelines_plus: ^2.0.0
  in_app_review: ^2.0.11

## Android Package / Firebase Config

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\android\app\build.gradle.kts
LINE: 22
TEXT: namespace = "com.erbete.driver"
NEXT: compileSdk = flutter.compileSdkVersion

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\android\app\build.gradle.kts
LINE: 34
TEXT: applicationId = "com.erbete.driver"
NEXT: // You can update the following values to match your application needs.

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\android\app\google-services.json
LINE: 4
TEXT: "firebase_url": "https://erbete-putra-default-rtdb.asia-southeast1.firebasedatabase.app",
NEXT: "project_id": "erbete-putra",

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\android\app\google-services.json
LINE: 5
TEXT: "project_id": "erbete-putra",
NEXT: "storage_bucket": "erbete-putra.appspot.com"

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\android\app\google-services.json
LINE: 6
TEXT: "storage_bucket": "erbete-putra.appspot.com"
NEXT: },

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\android\app\google-services.json
LINE: 11
TEXT: "mobilesdk_app_id": "1:620343172253:android:c67719229e2e3e83414874",
NEXT: "android_client_info": {

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\android\app\google-services.json
LINE: 13
TEXT: "package_name": "com.erbete.customer"
NEXT: }

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\android\app\google-services.json
LINE: 47
TEXT: "mobilesdk_app_id": "1:620343172253:android:28dd66f1fb1c6e02414874",
NEXT: "android_client_info": {

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\android\app\google-services.json
LINE: 49
TEXT: "package_name": "com.erbete.driver"
NEXT: }

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\android\app\google-services.json
LINE: 57
TEXT: "package_name": "com.erbete.driver",
NEXT: "certificate_hash": "e2387b1ac9ad0c285a38d8453e40a0d523db2954"

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\android\app\google-services.json
LINE: 91
TEXT: "mobilesdk_app_id": "1:620343172253:android:42180706e09e072c414874",
NEXT: "android_client_info": {

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\android\app\google-services.json
LINE: 93
TEXT: "package_name": "com.erbete.restaurant"
NEXT: }

## Firebase Options / Dart References

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\lib\app\auth_screen\login_screen.dart
LINE: 42
TEXT: "Sign in to access your eMart account and manage your deliveries seamlessly.".tr,
NEXT: style: TextStyle(color: isDark ? AppThemeData.grey50 : AppThemeData.grey500, fontFamily: AppThemeData.regular),

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\lib\app\auth_screen\signup_screen.dart
LINE: 47
TEXT: "Sign up now to start your journey as a eMart driver and begin earning with every delivery.".tr,
NEXT: style: TextStyle(color: isDark ? AppThemeData.grey50 : AppThemeData.grey500, fontFamily: AppThemeData.regular),

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\lib\app\cab_screen\cab_dashboard_screen.dart
LINE: 516
TEXT: '${'Check out eMart, your ultimate food delivery application!'.tr} \n\n${'Google Play:'.tr} ${Constant.googlePlayLink} \n\n${'App Store:'.tr} ${Constant.appStoreLink}',
NEXT: subject: 'Look what I made!'.tr);

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\lib\app\cab_screen\cab_home_screen.dart
LINE: 167
TEXT: userAgentPackageName: 'com.emart.driver',
NEXT: ),

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\lib\app\cab_screen\cab_order_details.dart
LINE: 178
TEXT: fm.TileLayer(urlTemplate: "https://tile.openstreetmap.org/{z}/{x}/{y}.png", userAgentPackageName: 'com.emart.driver'),

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\lib\app\dash_board_screen\dash_board_screen.dart
LINE: 552
TEXT: '${'Check out eMart, your ultimate food delivery application!'.tr} \n\n${'Google Play:'.tr} ${Constant.googlePlayLink} \n\n${'App Store:'.tr} ${Constant.appStoreLink}',
NEXT: subject: 'Look what I made!'.tr);

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\lib\app\home_screen\home_screen.dart
LINE: 152
TEXT: userAgentPackageName: 'com.emart.driver',
NEXT: ),

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\lib\app\owner_screen\driver_location_screen.dart
LINE: 55
TEXT: userAgentPackageName: 'com.emart.app',
NEXT: ),

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\lib\app\owner_screen\owner_dashboard_screen.dart
LINE: 444
TEXT: '${'Check out eMart, your ultimate food delivery application!'.tr} \n\n${'Google Play:'.tr} ${Constant.googlePlayLink} \n\n${'App Store:'.tr} ${Constant.appStoreLink}',
NEXT: subject: 'Look what I made!'.tr);

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\lib\app\parcel_screen\parcel_dashboard_screen.dart
LINE: 489
TEXT: '${'Check out eMart, your ultimate food delivery application!'.tr} \n\n${'Google Play:'.tr} ${Constant.googlePlayLink} \n\n${'App Store:'.tr} ${Constant.appStoreLink}',
NEXT: subject: 'Look what I made!'.tr);

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\lib\app\parcel_screen\parcel_tracking_screen.dart
LINE: 44
TEXT: userAgentPackageName: Platform.isAndroid ? 'com.emart.driver' : 'com.emart.driver',
NEXT: ),

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\lib\app\rental_service\rental_dashboard_screen.dart
LINE: 512
TEXT: '${'Check out eMart, your ultimate food delivery application!'.tr} \n\n${'Google Play:'.tr} ${Constant.googlePlayLink} \n\n${'App Store:'.tr} ${Constant.appStoreLink}',
NEXT: subject: 'Look what I made!'.tr);

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\lib\app\splash_screen.dart
LINE: 32
TEXT: "Welcome to eMart Driver".tr,
NEXT: style: TextStyle(color: isDark ? AppThemeData.grey50 : AppThemeData.grey50, fontSize: 24, fontFamily: AppThemeData.bold),

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\lib\controllers\wallet_controller.dart
LINE: 181
TEXT: flutterStipe.Stripe.merchantIdentifier = 'eMart Driver';
NEXT: flutterStipe.Stripe.instance.applySettings();

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\lib\controllers\wallet_controller.dart
LINE: 800
TEXT: 'name': 'eMart',
NEXT: 'order_id': orderId,

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\lib\lang\app_ar.dart
LINE: 3
TEXT: 'Sign in to access your eMart account and manage your deliveries seamlessly.':
NEXT: 'Sign in to access your eMart account and manage your deliveries seamlessly.',

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\lib\lang\app_ar.dart
LINE: 4
TEXT: 'Sign in to access your eMart account and manage your deliveries seamlessly.',
NEXT: 'Didn’t Have an account?': 'Didn’t Have an account?',

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\lib\lang\app_ar.dart
LINE: 40
TEXT: 'Sign up now to start your journey as a eMart driver and begin earning with every delivery.':
NEXT: 'Sign up now to start your journey as a eMart driver and begin earning with every delivery.',

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\lib\lang\app_ar.dart
LINE: 41
TEXT: 'Sign up now to start your journey as a eMart driver and begin earning with every delivery.',
NEXT: 'Service': 'Service',

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\lib\lang\app_ar.dart
LINE: 92
TEXT: "Check out eMart, your ultimate food delivery application!": "Check out eMart, your ultimate food delivery application!",
NEXT: "Google Play:": "Google Play:",

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\lib\lang\app_ar.dart
LINE: 403
TEXT: "Welcome to eMart Driver": "Welcome to eMart Driver",
NEXT: "Your Favorite Ride, Parcel, Rental & Item Delivered Fast!": "Your Favorite Ride, Parcel, Rental & Item Delivered Fast!",

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\lib\lang\app_de.dart
LINE: 3
TEXT: 'Sign in to access your eMart account and manage your deliveries seamlessly.':
NEXT: 'Sign in to access your eMart account and manage your deliveries seamlessly.',

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\lib\lang\app_de.dart
LINE: 4
TEXT: 'Sign in to access your eMart account and manage your deliveries seamlessly.',
NEXT: 'Didn’t Have an account?': 'Didn’t Have an account?',

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\lib\lang\app_de.dart
LINE: 40
TEXT: 'Sign up now to start your journey as a eMart driver and begin earning with every delivery.':
NEXT: 'Sign up now to start your journey as a eMart driver and begin earning with every delivery.',

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\lib\lang\app_de.dart
LINE: 41
TEXT: 'Sign up now to start your journey as a eMart driver and begin earning with every delivery.',
NEXT: 'Service': 'Service',

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\lib\lang\app_de.dart
LINE: 92
TEXT: "Check out eMart, your ultimate food delivery application!": "Check out eMart, your ultimate food delivery application!",
NEXT: "Google Play:": "Google Play:",

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\lib\lang\app_de.dart
LINE: 403
TEXT: "Welcome to eMart Driver": "Welcome to eMart Driver",
NEXT: "Your Favorite Ride, Parcel, Rental & Item Delivered Fast!": "Your Favorite Ride, Parcel, Rental & Item Delivered Fast!",

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\lib\lang\app_en.dart
LINE: 3
TEXT: 'Sign in to access your eMart account and manage your deliveries seamlessly.': 'Sign in to access your eMart account and manage your deliveries seamlessly.',
NEXT: 'Didn’t Have an account?': 'Didn’t Have an account?',

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\lib\lang\app_en.dart
LINE: 36
TEXT: 'Sign up now to start your journey as a eMart driver and begin earning with every delivery.': 'Sign up now to start your journey as a eMart driver and begin earning with every delivery.',
NEXT: 'Service': 'Service',

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\lib\lang\app_en.dart
LINE: 87
TEXT: "Check out eMart, your ultimate food delivery application!": "Check out eMart, your ultimate food delivery application!",
NEXT: "Google Play:": "Google Play:",

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\lib\lang\app_en.dart
LINE: 390
TEXT: "Welcome to eMart Driver": "Welcome to eMart Driver",
NEXT: "Your Favorite Ride, Parcel, Rental & Item Delivered Fast!": "Your Favorite Ride, Parcel, Rental & Item Delivered Fast!",

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\lib\lang\app_fr.dart
LINE: 3
TEXT: 'Sign in to access your eMart account and manage your deliveries seamlessly.':
NEXT: 'Sign in to access your eMart account and manage your deliveries seamlessly.',

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\lib\lang\app_fr.dart
LINE: 4
TEXT: 'Sign in to access your eMart account and manage your deliveries seamlessly.',
NEXT: 'Didn’t Have an account?': 'Didn’t Have an account?',

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\lib\lang\app_fr.dart
LINE: 40
TEXT: 'Sign up now to start your journey as a eMart driver and begin earning with every delivery.':
NEXT: 'Sign up now to start your journey as a eMart driver and begin earning with every delivery.',

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\lib\lang\app_fr.dart
LINE: 41
TEXT: 'Sign up now to start your journey as a eMart driver and begin earning with every delivery.',
NEXT: 'Service': 'Service',

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\lib\lang\app_fr.dart
LINE: 92
TEXT: "Check out eMart, your ultimate food delivery application!": "Check out eMart, your ultimate food delivery application!",
NEXT: "Google Play:": "Google Play:",

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\lib\lang\app_fr.dart
LINE: 403
TEXT: "Welcome to eMart Driver": "Welcome to eMart Driver",
NEXT: "Your Favorite Ride, Parcel, Rental & Item Delivered Fast!": "Your Favorite Ride, Parcel, Rental & Item Delivered Fast!",

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\lib\lang\app_hi.dart
LINE: 3
TEXT: 'Sign in to access your eMart account and manage your deliveries seamlessly.':
NEXT: 'Sign in to access your eMart account and manage your deliveries seamlessly.',

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\lib\lang\app_hi.dart
LINE: 4
TEXT: 'Sign in to access your eMart account and manage your deliveries seamlessly.',
NEXT: 'Didn’t Have an account?': 'Didn’t Have an account?',

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\lib\lang\app_hi.dart
LINE: 40
TEXT: 'Sign up now to start your journey as a eMart driver and begin earning with every delivery.':
NEXT: 'Sign up now to start your journey as a eMart driver and begin earning with every delivery.',

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\lib\lang\app_hi.dart
LINE: 41
TEXT: 'Sign up now to start your journey as a eMart driver and begin earning with every delivery.',
NEXT: 'Service': 'Service',

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\lib\lang\app_hi.dart
LINE: 92
TEXT: "Check out eMart, your ultimate food delivery application!": "Check out eMart, your ultimate food delivery application!",
NEXT: "Google Play:": "Google Play:",

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\lib\lang\app_hi.dart
LINE: 403
TEXT: "Welcome to eMart Driver": "Welcome to eMart Driver",
NEXT: "Your Favorite Ride, Parcel, Rental & Item Delivered Fast!": "Your Favorite Ride, Parcel, Rental & Item Delivered Fast!",

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\lib\lang\app_ja.dart
LINE: 3
TEXT: 'Sign in to access your eMart account and manage your deliveries seamlessly.':
NEXT: 'Sign in to access your eMart account and manage your deliveries seamlessly.',

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\lib\lang\app_ja.dart
LINE: 4
TEXT: 'Sign in to access your eMart account and manage your deliveries seamlessly.',
NEXT: 'Didn’t Have an account?': 'Didn’t Have an account?',

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\lib\lang\app_ja.dart
LINE: 40
TEXT: 'Sign up now to start your journey as a eMart driver and begin earning with every delivery.':
NEXT: 'Sign up now to start your journey as a eMart driver and begin earning with every delivery.',

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\lib\lang\app_ja.dart
LINE: 41
TEXT: 'Sign up now to start your journey as a eMart driver and begin earning with every delivery.',
NEXT: 'Service': 'Service',

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\lib\lang\app_ja.dart
LINE: 92
TEXT: "Check out eMart, your ultimate food delivery application!": "Check out eMart, your ultimate food delivery application!",
NEXT: "Google Play:": "Google Play:",

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\lib\lang\app_ja.dart
LINE: 403
TEXT: "Welcome to eMart Driver": "Welcome to eMart Driver",
NEXT: "Your Favorite Ride, Parcel, Rental & Item Delivered Fast!": "Your Favorite Ride, Parcel, Rental & Item Delivered Fast!",

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\lib\lang\app_pt.dart
LINE: 3
TEXT: 'Sign in to access your eMart account and manage your deliveries seamlessly.':
NEXT: 'Sign in to access your eMart account and manage your deliveries seamlessly.',

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\lib\lang\app_pt.dart
LINE: 4
TEXT: 'Sign in to access your eMart account and manage your deliveries seamlessly.',
NEXT: 'Didn’t Have an account?': 'Didn’t Have an account?',

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\lib\lang\app_pt.dart
LINE: 40
TEXT: 'Sign up now to start your journey as a eMart driver and begin earning with every delivery.':
NEXT: 'Sign up now to start your journey as a eMart driver and begin earning with every delivery.',

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\lib\lang\app_pt.dart
LINE: 41
TEXT: 'Sign up now to start your journey as a eMart driver and begin earning with every delivery.',
NEXT: 'Service': 'Service',

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\lib\lang\app_pt.dart
LINE: 92
TEXT: "Check out eMart, your ultimate food delivery application!": "Check out eMart, your ultimate food delivery application!",
NEXT: "Google Play:": "Google Play:",

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\lib\lang\app_pt.dart
LINE: 403
TEXT: "Welcome to eMart Driver": "Welcome to eMart Driver",
NEXT: "Your Favorite Ride, Parcel, Rental & Item Delivered Fast!": "Your Favorite Ride, Parcel, Rental & Item Delivered Fast!",

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\lib\lang\app_ru.dart
LINE: 3
TEXT: 'Sign in to access your eMart account and manage your deliveries seamlessly.':
NEXT: 'Sign in to access your eMart account and manage your deliveries seamlessly.',

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\lib\lang\app_ru.dart
LINE: 4
TEXT: 'Sign in to access your eMart account and manage your deliveries seamlessly.',
NEXT: 'Didn’t Have an account?': 'Didn’t Have an account?',

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\lib\lang\app_ru.dart
LINE: 40
TEXT: 'Sign up now to start your journey as a eMart driver and begin earning with every delivery.':
NEXT: 'Sign up now to start your journey as a eMart driver and begin earning with every delivery.',

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\lib\lang\app_ru.dart
LINE: 41
TEXT: 'Sign up now to start your journey as a eMart driver and begin earning with every delivery.',
NEXT: 'Service': 'Service',

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\lib\lang\app_ru.dart
LINE: 92
TEXT: "Check out eMart, your ultimate food delivery application!": "Check out eMart, your ultimate food delivery application!",
NEXT: "Google Play:": "Google Play:",

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\lib\lang\app_ru.dart
LINE: 403
TEXT: "Welcome to eMart Driver": "Welcome to eMart Driver",
NEXT: "Your Favorite Ride, Parcel, Rental & Item Delivered Fast!": "Your Favorite Ride, Parcel, Rental & Item Delivered Fast!",

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\lib\lang\app_zh.dart
LINE: 3
TEXT: 'Sign in to access your eMart account and manage your deliveries seamlessly.':
NEXT: 'Sign in to access your eMart account and manage your deliveries seamlessly.',

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\lib\lang\app_zh.dart
LINE: 4
TEXT: 'Sign in to access your eMart account and manage your deliveries seamlessly.',
NEXT: 'Didn’t Have an account?': 'Didn’t Have an account?',

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\lib\lang\app_zh.dart
LINE: 40
TEXT: 'Sign up now to start your journey as a eMart driver and begin earning with every delivery.':
NEXT: 'Sign up now to start your journey as a eMart driver and begin earning with every delivery.',

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\lib\lang\app_zh.dart
LINE: 41
TEXT: 'Sign up now to start your journey as a eMart driver and begin earning with every delivery.',
NEXT: 'Service': 'Service',

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\lib\lang\app_zh.dart
LINE: 92
TEXT: "Check out eMart, your ultimate food delivery application!": "Check out eMart, your ultimate food delivery application!",
NEXT: "Google Play:": "Google Play:",

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\lib\lang\app_zh.dart
LINE: 403
TEXT: "Welcome to eMart Driver": "Welcome to eMart Driver",
NEXT: "Your Favorite Ride, Parcel, Rental & Item Delivered Fast!": "Your Favorite Ride, Parcel, Rental & Item Delivered Fast!",

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\lib\utils\fire_store_utils.dart
LINE: 1597
TEXT: final projectId = DefaultFirebaseOptions.currentPlatform.projectId;
NEXT: final url = Uri.parse('https://us-central1-$projectId.cloudfunctions.net/deleteUser');

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\lib\utils\fire_store_utils.dart
LINE: 1598
TEXT: final url = Uri.parse('https://us-central1-$projectId.cloudfunctions.net/deleteUser');

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\lib\widget\osm_map\map_picker_page.dart
LINE: 46
TEXT: TileLayer(urlTemplate: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png', userAgentPackageName: 'com.emart.driver'),
NEXT: MarkerLayer(

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\lib\firebase_options.dart
LINE: 55
TEXT: projectId: 'erbete-putra',
NEXT: databaseURL: 'https://erbete-putra-default-rtdb.asia-southeast1.firebasedatabase.app',

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\lib\firebase_options.dart
LINE: 56
TEXT: databaseURL: 'https://erbete-putra-default-rtdb.asia-southeast1.firebasedatabase.app',
NEXT: storageBucket: 'erbete-putra.appspot.com',

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\lib\firebase_options.dart
LINE: 57
TEXT: storageBucket: 'erbete-putra.appspot.com',
NEXT: );

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\lib\firebase_options.dart
LINE: 64
TEXT: projectId: 'YOUR_IOS_PROJECT_ID',
NEXT: databaseURL: 'YOUR_IOS_DATABASE_URL',

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\lib\firebase_options.dart
LINE: 65
TEXT: databaseURL: 'YOUR_IOS_DATABASE_URL',
NEXT: storageBucket: 'YOUR_IOS_STORAGE_BUCKET',

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\driver\lib\firebase_options.dart
LINE: 66
TEXT: storageBucket: 'YOUR_IOS_STORAGE_BUCKET',
NEXT: androidClientId: 'YOUR_ANDROID_CLIENT_ID',
