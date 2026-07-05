# SERVICE 44D-FIX1 CLEAN BUILD INSTALL AFTER PRODUCT NULL GUARD

Generated: 07/02/2026 01:15:25
Mode: CLEAN BUILD CACHE ONLY + BUILD + INSTALL.

OLD_APK_TIME: 07/02/2026 00:05:00
OLD_APK_SIZE: 228161926
REMOVED_STALE_FLUTTER_DEBUG: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\build\app\intermediates\flutter\debug
STALE_FONT_PATH: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\build\app\intermediates\flutter\debug\flutter_assets\assets\fonts\essential_sans_Regular.otf

## source verify
TEXT_START
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1481:                    List<String> selectedIndexArray = [];
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1482:                    if (productModel.itemAttribute != null &&
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1483:                        (productModel.itemAttribute?.attributes?.isNotEmpty ??
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1484:                            false) &&
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1485:                        (productModel.itemAttribute?.variants?.isNotEmpty ??
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1486:                            false) &&
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1487:                        (productModel
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1488:                                .itemAttribute
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1489:                                ?.attributes
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1490:                                ?.first
TEXT_END

## flutter clean
TEXT_START
Deleting build...                                                   7.1s
Deleting .dart_tool...                                              39ms
Deleting ephemeral...                                                0ms
Deleting Generated.xcconfig...                                       0ms
Deleting flutter_export_environment.sh...                            0ms
Deleting .flutter-plugins-dependencies...                            0ms
TEXT_END

## flutter pub get
TEXT_START
Resolving dependencies...
Downloading packages...
  _flutterfire_internals 1.3.59 (1.3.73 available)
  camera 0.11.4 (0.12.0+1 available)
  camera_android_camerax 0.6.30 (0.7.3 available)
  camera_avfoundation 0.9.23+2 (0.10.1 available)
  camera_platform_interface 2.12.0 (2.13.0 available)
  camera_web 0.3.5+3 (0.3.5+4 available)
  characters 1.4.0 (1.4.1 available)
  cloud_firestore 5.6.12 (6.6.0 available)
  cloud_firestore_platform_interface 6.6.12 (8.0.3 available)
  cloud_firestore_web 4.4.12 (5.6.0 available)
  code_assets 1.0.0 (1.2.1 available)
  cross_file 0.3.5+2 (0.3.5+3 available)
  dart_either 1.0.0 (2.1.0 available)
  dbus 0.7.12 (0.7.14 available)
  dio 5.9.2 (5.10.0 available)
  dio_web_adapter 2.1.2 (2.2.0 available)
  firebase_app_check 0.3.2+10 (0.4.5 available)
  firebase_app_check_platform_interface 0.1.1+10 (0.4.1 available)
  firebase_app_check_web 0.2.0+14 (0.2.5 available)
  firebase_auth 5.7.0 (6.5.4 available)
  firebase_auth_platform_interface 7.7.3 (9.0.3 available)
  firebase_auth_web 5.15.3 (6.2.3 available)
  firebase_core 3.15.2 (4.11.0 available)
  firebase_core_platform_interface 6.0.3 (7.1.0 available)
  firebase_core_web 2.24.1 (3.9.0 available)
  firebase_database 11.3.10 (12.4.4 available)
  firebase_database_platform_interface 0.2.6+10 (0.4.0+3 available)
  firebase_database_web 0.2.6+16 (0.2.7+10 available)
  firebase_messaging 15.2.10 (16.4.1 available)
  firebase_messaging_platform_interface 4.6.10 (4.9.0 available)
  firebase_messaging_web 3.10.10 (4.2.1 available)
  firebase_storage 12.4.10 (13.4.3 available)
  firebase_storage_platform_interface 5.2.10 (6.0.3 available)
  firebase_storage_web 3.10.17 (3.11.9 available)
  flutter_local_notifications 21.0.0 (22.0.1 available)
  flutter_local_notifications_linux 8.0.0 (8.0.1 available)
  flutter_local_notifications_platform_interface 11.0.0 (12.0.0 available)
  flutter_local_notifications_windows 3.0.0 (3.1.1 available)
  flutter_map 8.2.2 (8.3.1 available)
  flutter_osm_plugin 1.4.3 (1.4.6 available)
  flutter_osm_web 1.4.2 (1.4.4 available)
  flutter_plugin_android_lifecycle 2.0.34 (2.0.35 available)
  flutter_stripe 12.5.0 (13.0.0 available)
  flutter_svg 2.2.4 (2.3.0 available)
  geocoding_android 4.0.1 (5.0.1 available)
  geocoding_platform_interface 3.2.0 (5.0.0 available)
  geolocator 14.0.2 (14.0.3 available)
  geolocator_android 5.0.2 (5.0.3 available)
  geolocator_apple 2.3.13 (2.3.14 available)
  geolocator_linux 0.2.4 (0.2.6 available)
  geolocator_platform_interface 4.2.6 (4.2.8 available)
  geolocator_web 4.1.3 (4.1.4 available)
! google_api_headers 5.1.0 (overridden) (5.3.3 available)
  google_maps_flutter 2.17.0 (2.17.1 available)
  google_maps_flutter_android 2.19.6 (2.19.12 available)
  google_maps_flutter_ios 2.18.1 (2.18.4 available)
  google_maps_flutter_web 0.6.2 (0.6.2+3 available)
  google_sign_in_android 7.2.10 (7.2.14 available)
  googleapis_auth 2.0.0 (2.3.2 available)
  hooks 1.0.2 (2.0.2 available)
! http 1.6.0 (overridden)
  image 4.8.0 (4.9.1 available)
  image_picker 1.2.1 (1.2.3 available)
  image_picker_android 0.8.13+16 (0.8.13+19 available)
  in_app_review 2.0.11 (2.0.12 available)
  intl 0.20.2 (0.20.3 available)
  json_annotation 4.11.0 (4.12.0 available)
  latlong2 0.9.1 (0.10.1 available)
  matcher 0.12.17 (0.12.20 available)
  material_color_utilities 0.11.1 (0.13.0 available)
  meta 1.17.0 (1.18.3 available)
  mgrs_dart 2.0.0 (3.0.0 available)
  native_toolchain_c 0.17.6 (0.19.2 available)
  objective_c 9.3.0 (9.4.1 available)
  package_config 2.2.0 (3.0.0 available)
! package_info_plus 9.0.1 (overridden) (10.2.0 available)
  package_info_plus_platform_interface 3.2.1 (4.1.0 available)
  path_provider 2.1.5 (2.1.6 available)
  path_provider_linux 2.2.1 (2.2.2 available)
  path_provider_platform_interface 2.1.2 (2.1.3 available)
  permission_handler 12.0.1 (12.0.3 available)
  permission_handler_apple 9.4.7 (9.4.10 available)
  pin_code_fields 9.3.0 (9.4.0 available)
  proj4dart 2.1.0 (3.0.0 available)
  punycoder 0.2.2 (0.3.0 available)
  qr 3.0.2 (4.0.0 available)
  razorpay_flutter 1.4.4 (1.4.5 available)
  routing_client_dart 0.5.5 (1.0.8 available)
  share_plus 12.0.2 (13.2.0 available)
  share_plus_platform_interface 6.1.0 (7.1.0 available)
  shared_preferences_android 2.4.23 (2.4.26 available)
  sign_in_with_apple 7.0.1 (8.1.0 available)
  sqflite 2.4.2 (2.4.3 available)
  sqflite_android 2.4.2+3 (2.4.3 available)
  sqflite_common 2.5.6 (2.5.11 available)
  sqflite_darwin 2.4.2 (2.4.3+1 available)
  sqflite_platform_interface 2.4.0 (2.4.1 available)
  stripe_android 12.5.0 (13.0.0 available)
  stripe_ios 12.5.0 (13.0.0 available)
  stripe_platform_interface 12.5.0 (13.0.0 available)
  synchronized 3.4.0 (3.4.1 available)
  test_api 0.7.7 (0.7.13 available)
  timezone 0.11.0 (0.11.1 available)
  unicode 0.3.1 (1.1.9 available)
  url_launcher_android 6.3.29 (6.3.32 available)
  url_launcher_web 2.4.2 (2.4.3 available)
  vector_graphics 1.1.21 (1.2.2 available)
  vector_graphics_compiler 1.2.0 (1.2.6 available)
  vector_math 2.2.0 (2.4.0 available)
  video_player_android 2.9.5 (2.10.0 available)
  video_player_avfoundation 2.9.4 (2.10.0 available)
  video_player_platform_interface 6.6.0 (6.8.0 available)
  vm_service 15.0.2 (15.2.0 available)
! webview_flutter 4.9.0 (overridden) (4.14.0 available)
  webview_flutter_android 3.16.9 (4.13.0 available)
  webview_flutter_wkwebview 3.24.3 (3.26.0 available)
  win32 5.15.0 (6.3.0 available)
  xml 6.6.1 (7.0.1 available)
Got dependencies!
117 packages have newer versions incompatible with dependency constraints.
Try `flutter pub outdated` for more information.
TEXT_END

## dart format
TEXT_START
Formatted 1 file (0 changed) in 0.19 seconds.
TEXT_END

## flutter build apk --debug
TEXT_START
Running Gradle task 'assembleDebug'...                          
warning: [options] source value 8 is obsolete and will be removed in a future release
warning: [options] target value 8 is obsolete and will be removed in a future release
warning: [options] To suppress warnings about obsolete options, use -Xlint:-options.
3 warnings
Note: Some input files use or override a deprecated API.
Note: Recompile with -Xlint:deprecation for details.
warning: [options] source value 8 is obsolete and will be removed in a future release
warning: [options] target value 8 is obsolete and will be removed in a future release
warning: [options] To suppress warnings about obsolete options, use -Xlint:-options.
3 warnings
warning: [options] source value 8 is obsolete and will be removed in a future release
warning: [options] target value 8 is obsolete and will be removed in a future release
warning: [options] To suppress warnings about obsolete options, use -Xlint:-options.
3 warnings
Note: Some input files use or override a deprecated API.
Note: Recompile with -Xlint:deprecation for details.
warning: [options] source value 8 is obsolete and will be removed in a future release
warning: [options] target value 8 is obsolete and will be removed in a future release
warning: [options] To suppress warnings about obsolete options, use -Xlint:-options.
Note: C:\Users\Hp\AppData\Local\Pub\Cache\hosted\pub.dev\razorpay_flutter-1.4.4\android\src\main\java\com\razorpay\razorpay_flutter\RazorpayDelegate.java uses or overrides a deprecated API.
Note: Recompile with -Xlint:deprecation for details.
3 warnings
Note: Some input files use or override a deprecated API.
Note: Recompile with -Xlint:deprecation for details.
Running Gradle task 'assembleDebug'...                            231.0s
Γ£ô Built build\app\outputs\flutter-apk\app-debug.apk
TEXT_END

APK: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\build\app\outputs\flutter-apk\app-debug.apk
APK_SIZE: 228181366
APK_TIME: 07/02/2026 01:15:20
APK_TIME_CHANGED: True

## adb install
TEXT_START
Performing Streamed Install
Success
TEXT_END

STATUS: SERVICE_44D_FIX1_CLEAN_BUILD_INSTALL_AFTER_PRODUCT_NULL_GUARD_PASS