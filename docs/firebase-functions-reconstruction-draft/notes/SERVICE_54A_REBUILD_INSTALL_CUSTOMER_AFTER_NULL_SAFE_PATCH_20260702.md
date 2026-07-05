# SERVICE 54A REBUILD INSTALL CUSTOMER AFTER NULL SAFE PATCH

Generated: 07/02/2026 14:43:11
Mode: build/install/test.
Package: com.erbete.customer
Device: 115413747T003958

## Flutter Clean
TEXT_START
Deleting build...                                                   5.8s
Deleting .dart_tool...                                              38ms
Deleting ephemeral...                                                1ms
Deleting Generated.xcconfig...                                       0ms
Deleting flutter_export_environment.sh...                            0ms
Deleting .flutter-plugins-dependencies...                            0ms

TEXT_END

## Flutter Pub Get
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

## Flutter Analyze
TEXT_START
Analyzing customer...                                           

   info - The imported package 'url_launcher' isn't a dependency of the importing package - lib\constant\constant.dart:27:8 - depend_on_referenced_packages
   info - The imported package 'http' isn't a dependency of the importing package - lib\constant\constant.dart:38:8 - depend_on_referenced_packages
   info - Don't use 'BuildContext's across async gaps - lib\constant\constant.dart:237:9 - use_build_context_synchronously
   info - Missing type annotation - lib\constant\constant.dart:582:40 - strict_top_level_inference
   info - Missing type annotation - lib\constant\constant.dart:594:39 - strict_top_level_inference
   info - Don't invoke 'print' in production code - lib\constant\constant.dart:696:7 - avoid_print
   info - Don't invoke 'print' in production code - lib\constant\constant.dart:759:7 - avoid_print
   info - Don't invoke 'print' in production code - lib\constant\constant.dart:761:7 - avoid_print
   info - Don't invoke 'print' in production code - lib\constant\constant.dart:763:9 - avoid_print
   info - Don't invoke 'print' in production code - lib\constant\constant.dart:767:7 - avoid_print
   info - Don't invoke 'print' in production code - lib\constant\constant.dart:1226:7 - avoid_print
   info - The file name '0n_demand_payment_controller.dart' isn't a lower_case_with_underscores identifier - lib\controllers\0n_demand_payment_controller.dart:1:1 - file_names
   info - The imported package 'http' isn't a dependency of the importing package - lib\controllers\0n_demand_payment_controller.dart:4:8 - depend_on_referenced_packages
   info - Don't invoke 'print' in production code - lib\controllers\0n_demand_payment_controller.dart:66:5 - avoid_print
   info - Don't invoke 'print' in production code - lib\controllers\0n_demand_payment_controller.dart:355:7 - avoid_print
   info - Don't invoke 'print' in production code - lib\controllers\0n_demand_payment_controller.dart:464:7 - avoid_print
   info - Missing type annotation - lib\controllers\0n_demand_payment_controller.dart:500:33 - strict_top_level_inference
   info - Missing type annotation - lib\controllers\0n_demand_payment_controller.dart:526:33 - strict_top_level_inference
   info - Missing type annotation - lib\controllers\0n_demand_payment_controller.dart:607:31 - strict_top_level_inference
   info - Missing type annotation - lib\controllers\0n_demand_payment_controller.dart:607:48 - strict_top_level_inference
   info - Missing type annotation - lib\controllers\0n_demand_payment_controller.dart:669:50 - strict_top_level_inference
   info - Don't use 'BuildContext's across async gaps - lib\controllers\0n_demand_payment_controller.dart:746:31 - use_build_context_synchronously
   info - Missing type annotation - lib\controllers\0n_demand_payment_controller.dart:899:30 - strict_top_level_inference
   info - Missing type annotation - lib\controllers\0n_demand_payment_controller.dart:899:39 - strict_top_level_inference
   info - Missing type annotation - lib\controllers\0n_demand_payment_controller.dart:917:57 - strict_top_level_inference
   info - The file name 'Intercity_home_controller.dart' isn't a lower_case_with_underscores identifier - lib\controllers\Intercity_home_controller.dart:1:1 - file_names
   info - The prefix 'flutterMap' isn't a lower_case_with_underscores identifier - lib\controllers\Intercity_home_controller.dart:46:50 - library_prefixes
   info - The imported package 'http' isn't a dependency of the importing package - lib\controllers\Intercity_home_controller.dart:52:8 - depend_on_referenced_packages
   info - Don't invoke 'print' in production code - lib\controllers\Intercity_home_controller.dart:179:11 - avoid_print
   info - Don't invoke 'print' in production code - lib\controllers\Intercity_home_controller.dart:245:7 - avoid_print
   info - 'fromBytes' is deprecated and shouldn't be used. Use BitmapDescriptor.bytes method instead - lib\controllers\Intercity_home_controller.dart:271:40 - deprecated_member_use
   info - 'fromBytes' is deprecated and shouldn't be used. Use BitmapDescriptor.bytes method instead - lib\controllers\Intercity_home_controller.dart:272:42 - deprecated_member_use
   info - 'fromBytes' is deprecated and shouldn't be used. Use BitmapDescriptor.bytes method instead - lib\controllers\Intercity_home_controller.dart:273:35 - deprecated_member_use
   info - Don't invoke 'print' in production code - lib\controllers\Intercity_home_controller.dart:337:7 - avoid_print
   info - Don't invoke 'print' in production code - lib\controllers\Intercity_home_controller.dart:370:9 - avoid_print
   info - Don't invoke 'print' in production code - lib\controllers\Intercity_home_controller.dart:373:7 - avoid_print
   info - Don't invoke 'print' in production code - lib\controllers\Intercity_home_controller.dart:693:9 - avoid_print
   info - Don't invoke 'print' in production code - lib\controllers\Intercity_home_controller.dart:696:7 - avoid_print
   info - Don't invoke 'print' in production code - lib\controllers\Intercity_home_controller.dart:728:9 - avoid_print
   info - Don't invoke 'print' in production code - lib\controllers\Intercity_home_controller.dart:731:7 - avoid_print
   info - 'fromAssetImage' is deprecated and shouldn't be used. Use BitmapDescriptor.asset method instead - lib\controllers\Intercity_home_controller.dart:864:48 - deprecated_member_use
   info - 'fromAssetImage' is deprecated and shouldn't be used. Use BitmapDescriptor.asset method instead - lib\controllers\Intercity_home_controller.dart:865:50 - deprecated_member_use
   info - 'fromAssetImage' is deprecated and shouldn't be used. Use BitmapDescriptor.asset method instead - lib\controllers\Intercity_home_controller.dart:866:43 - deprecated_member_use
   info - 'fromAssetImage' is deprecated and shouldn't be used. Use BitmapDescriptor.asset method instead - lib\controllers\Intercity_home_controller.dart:867:43 - deprecated_member_use
   info - Don't invoke 'print' in production code - lib\controllers\Intercity_home_controller.dart:870:7 - avoid_print
   info - Don't invoke 'print' in production code - lib\controllers\Intercity_home_controller.dart:1147:7 - avoid_print
   info - Don't invoke 'print' in production code - lib\controllers\Intercity_home_controller.dart:1260:7 - avoid_print
   info - Missing type annotation - lib\controllers\Intercity_home_controller.dart:1296:33 - strict_top_level_inference
   info - Missing type annotation - lib\controllers\Intercity_home_controller.dart:1322:33 - strict_top_level_inference
   info - Missing type annotation - lib\controllers\Intercity_home_controller.dart:1403:31 - strict_top_level_inference
   info - Missing type annotation - lib\controllers\Intercity_home_controller.dart:1403:48 - strict_top_level_inference
   info - Missing type annotation - lib\controllers\Intercity_home_controller.dart:1465:50 - strict_top_level_inference
   info - Missing type annotation - lib\controllers\Intercity_home_controller.dart:1588:30 - strict_top_level_inference
   info - Missing type annotation - lib\controllers\Intercity_home_controller.dart:1588:39 - strict_top_level_inference
   info - Missing type annotation - lib\controllers\Intercity_home_controller.dart:1606:57 - strict_top_level_inference
   info - The imported package 'http' isn't a dependency of the importing package - lib\controllers\book_parcel_controller.dart:12:8 - depend_on_referenced_packages
   info - Don't use 'BuildContext's across async gaps - lib\controllers\book_parcel_controller.dart:98:43 - use_build_context_synchronously
   info - Don't invoke 'print' in production code - lib\controllers\book_parcel_controller.dart:196:9 - avoid_print
   info - Don't invoke 'print' in production code - lib\controllers\book_parcel_controller.dart:197:9 - avoid_print
   info - Don't invoke 'print' in production code - lib\controllers\book_parcel_controller.dart:198:9 - avoid_print
   info - Don't invoke 'print' in production code - lib\controllers\book_parcel_controller.dart:223:5 - avoid_print
   info - The prefix 'flutterMap' isn't a lower_case_with_underscores identifier - lib\controllers\cab_booking_controller.dart:43:50 - library_prefixes
   info - The imported package 'http' isn't a dependency of the importing package - lib\controllers\cab_booking_controller.dart:49:8 - depend_on_referenced_packages
   info - Don't invoke 'print' in production code - lib\controllers\cab_booking_controller.dart:168:11 - avoid_print
   info - Don't invoke 'print' in production code - lib\controllers\cab_booking_controller.dart:234:7 - avoid_print
   info - 'fromBytes' is deprecated and shouldn't be used. Use BitmapDescriptor.bytes method instead - lib\controllers\cab_booking_controller.dart:260:40 - deprecated_member_use
   info - 'fromBytes' is deprecated and shouldn't be used. Use BitmapDescriptor.bytes method instead - lib\controllers\cab_booking_controller.dart:261:42 - deprecated_member_use
   info - 'fromBytes' is deprecated and shouldn't be used. Use BitmapDescriptor.bytes method instead - lib\controllers\cab_booking_controller.dart:262:35 - deprecated_member_use
   info - Don't invoke 'print' in production code - lib\controllers\cab_booking_controller.dart:326:7 - avoid_print
   info - Don't invoke 'print' in production code - lib\controllers\cab_booking_controller.dart:359:9 - avoid_print
   info - Don't invoke 'print' in production code - lib\controllers\cab_booking_controller.dart:362:7 - avoid_print
   info - Don't invoke 'print' in production code - lib\controllers\cab_booking_controller.dart:690:9 - avoid_print
   info - Don't invoke 'print' in production code - lib\controllers\cab_booking_controller.dart:693:7 - avoid_print
   info - Don't invoke 'print' in production code - lib\controllers\cab_booking_controller.dart:725:9 - avoid_print
   info - Don't invoke 'print' in production code - lib\controllers\cab_booking_controller.dart:728:7 - avoid_print
   info - 'fromAssetImage' is deprecated and shouldn't be used. Use BitmapDescriptor.asset method instead - lib\controllers\cab_booking_controller.dart:861:48 - deprecated_member_use
   info - 'fromAssetImage' is deprecated and shouldn't be used. Use BitmapDescriptor.asset method instead - lib\controllers\cab_booking_controller.dart:862:50 - deprecated_member_use
   info - 'fromAssetImage' is deprecated and shouldn't be used. Use BitmapDescriptor.asset method instead - lib\controllers\cab_booking_controller.dart:863:43 - deprecated_member_use
   info - 'fromAssetImage' is deprecated and shouldn't be used. Use BitmapDescriptor.asset method instead - lib\controllers\cab_booking_controller.dart:864:43 - deprecated_member_use
   info - Don't invoke 'print' in production code - lib\controllers\cab_booking_controller.dart:867:7 - avoid_print
   info - Don't invoke 'print' in production code - lib\controllers\cab_booking_controller.dart:1144:7 - avoid_print
   info - Don't invoke 'print' in production code - lib\controllers\cab_booking_controller.dart:1257:7 - avoid_print
   info - Missing type annotation - lib\controllers\cab_booking_controller.dart:1293:33 - strict_top_level_inference
   info - Missing type annotation - lib\controllers\cab_booking_controller.dart:1319:33 - strict_top_level_inference
   info - Missing type annotation - lib\controllers\cab_booking_controller.dart:1400:31 - strict_top_level_inference
   info - Missing type annotation - lib\controllers\cab_booking_controller.dart:1400:48 - strict_top_level_inference
   info - Missing type annotation - lib\controllers\cab_booking_controller.dart:1462:50 - strict_top_level_inference
   info - Missing type annotation - lib\controllers\cab_booking_controller.dart:1585:30 - strict_top_level_inference
   info - Missing type annotation - lib\controllers\cab_booking_controller.dart:1585:39 - strict_top_level_inference
   info - Missing type annotation - lib\controllers\cab_booking_controller.dart:1603:57 - strict_top_level_inference
   info - Don't invoke 'print' in production code - lib\controllers\cab_coupon_code_controller.dart:27:5 - avoid_print
   info - The imported package 'http' isn't a dependency of the importing package - lib\controllers\cab_order_details_controller.dart:6:8 - depend_on_referenced_packages
   info - Don't invoke 'print' in production code - lib\controllers\cab_order_details_controller.dart:67:7 - avoid_print
   info - The imported package 'http' isn't a dependency of the importing package - lib\controllers\cart_controller.dart:20:8 - depend_on_referenced_packages
   info - Don't invoke 'print' in production code - lib\controllers\cart_controller.dart:144:9 - avoid_print
   info - Don't invoke 'print' in production code - lib\controllers\cart_controller.dart:918:7 - avoid_print
   info - Don't invoke 'print' in production code - lib\controllers\cart_controller.dart:931:7 - avoid_print
   info - Don't invoke 'print' in production code - lib\controllers\cart_controller.dart:1057:7 - avoid_print
   info - Missing type annotation - lib\controllers\cart_controller.dart:1097:33 - strict_top_level_inference
   info - Missing type annotation - lib\controllers\cart_controller.dart:1141:5 - strict_top_level_inference
   info - Missing type annotation - lib\controllers\cart_controller.dart:1245:31 - strict_top_level_inference
   info - Missing type annotation - lib\controllers\cart_controller.dart:1245:48 - strict_top_level_inference
   info - Missing type annotation - lib\controllers\cart_controller.dart:1313:50 - strict_top_level_inference
   info - Don't use 'BuildContext's across async gaps - lib\controllers\cart_controller.dart:1428:9 - use_build_context_synchronously
   info - Missing type annotation - lib\controllers\cart_controller.dart:1500:30 - strict_top_level_inference
   info - Missing type annotation - lib\controllers\cart_controller.dart:1500:39 - strict_top_level_inference
   info - Missing type annotation - lib\controllers\cart_controller.dart:1524:57 - strict_top_level_inference
   info - Use interpolation to compose strings and values - lib\controllers\cart_controller.dart:1630:12 - prefer_interpolation_to_compose_strings
   info - Don't invoke 'print' in production code - lib\controllers\cart_controller.dart:1638:7 - avoid_print
   info - Don't invoke 'print' in production code - lib\controllers\cart_controller.dart:1645:7 - avoid_print
   info - Don't invoke 'print' in production code - lib\controllers\chat_controller.dart:104:5 - avoid_print
   info - Don't invoke 'print' in production code - lib\controllers\chat_controller.dart:105:5 - avoid_print
   info - Use interpolation to compose strings and values - lib\controllers\dine_in_restaurant_details_controller.dart:448:10 - prefer_interpolation_to_compose_strings
   info - Don't invoke 'print' in production code - lib\controllers\dine_in_restaurant_details_controller.dart:456:5 - avoid_print
   info - Don't invoke 'print' in production code - lib\controllers\dine_in_restaurant_details_controller.dart:463:5 - avoid_print
   info - Don't invoke 'print' in production code - lib\controllers\dine_in_restaurant_details_controller.dart:473:5 - avoid_print
   info - Use interpolation to compose strings and values - lib\controllers\dine_in_restaurant_details_controller.dart:479:9 - prefer_interpolation_to_compose_strings
   info - Don't invoke 'print' in production code - lib\controllers\dine_in_restaurant_details_controller.dart:484:5 - avoid_print
   info - Don't invoke 'print' in production code - lib\controllers\food_home_controller.dart:82:7 - avoid_print
   info - Don't invoke 'print' in production code - lib\controllers\food_home_controller.dart:83:7 - avoid_print
   info - Don't invoke 'print' in production code - lib\controllers\food_home_controller.dart:84:7 - avoid_print
   info - Don't invoke 'print' in production code - lib\controllers\food_home_controller.dart:85:7 - avoid_print
   info - Don't invoke 'print' in production code - lib\controllers\food_home_controller.dart:87:9 - avoid_print
   info - Don't invoke 'print' in production code - lib\controllers\food_home_controller.dart:115:9 - avoid_print
   info - Don't invoke 'print' in production code - lib\controllers\food_home_controller.dart:119:9 - avoid_print
   info - Don't invoke 'print' in production code - lib\controllers\food_home_controller.dart:122:9 - avoid_print
   info - The imported package 'http' isn't a dependency of the importing package - lib\controllers\gift_card_controller.dart:45:8 - depend_on_referenced_packages
   info - Don't invoke 'print' in production code - lib\controllers\gift_card_controller.dart:358:7 - avoid_print
   info - Don't invoke 'print' in production code - lib\controllers\gift_card_controller.dart:397:7 - avoid_print
   info - Don't invoke 'print' in production code - lib\controllers\gift_card_controller.dart:472:7 - avoid_print
   info - Missing type annotation - lib\controllers\gift_card_controller.dart:546:33 - strict_top_level_inference
   info - Missing type annotation - lib\controllers\gift_card_controller.dart:572:33 - strict_top_level_inference
   info - Don't invoke 'print' in production code - lib\controllers\gift_card_controller.dart:640:5 - avoid_print
   info - Missing type annotation - lib\controllers\gift_card_controller.dart:652:31 - strict_top_level_inference
   info - Missing type annotation - lib\controllers\gift_card_controller.dart:652:48 - strict_top_level_inference
   info - Missing type annotation - lib\controllers\gift_card_controller.dart:709:50 - strict_top_level_inference
   info - Missing type annotation - lib\controllers\gift_card_controller.dart:832:30 - strict_top_level_inference
   info - Missing type annotation - lib\controllers\gift_card_controller.dart:832:39 - strict_top_level_inference
   info - Missing type annotation - lib\controllers\gift_card_controller.dart:850:57 - strict_top_level_inference
   info - 'Share' is deprecated and shouldn't be used. Use SharePlus instead - lib\controllers\history_gift_card_controller.dart:34:11 - deprecated_member_use
   info - 'share' is deprecated and shouldn't be used. Use SharePlus.instance.share() instead - lib\controllers\history_gift_card_controller.dart:34:17 - deprecated_member_use
   info - Don't invoke 'print' in production code - lib\controllers\home_e_commerce_controller.dart:58:7 - avoid_print
   info - The prefix 'flutterMap' isn't a lower_case_with_underscores identifier - lib\controllers\live_tracking_controller.dart:12:50 - library_prefixes
   info - The imported package 'http' isn't a dependency of the importing package - lib\controllers\live_tracking_controller.dart:14:8 - depend_on_referenced_packages
   info - 'PolylineRequest' is deprecated and shouldn't be used. Use RoutesApiRequest instead - lib\controllers\live_tracking_controller.dart:183:16 - deprecated_member_use
   info - 'fromBytes' is deprecated and shouldn't be used. Use BitmapDescriptor.bytes method instead - lib\controllers\live_tracking_controller.dart:229:35 - deprecated_member_use
   info - 'fromBytes' is deprecated and shouldn't be used. Use BitmapDescriptor.bytes method instead - lib\controllers\live_tracking_controller.dart:230:36 - deprecated_member_use
   info - 'fromBytes' is deprecated and shouldn't be used. Use BitmapDescriptor.bytes method instead - lib\controllers\live_tracking_controller.dart:231:35 - deprecated_member_use
   info - The imported package 'crypto' isn't a dependency of the importing package - lib\controllers\login_controller.dart:16:8 - depend_on_referenced_packages
   info - Don't invoke 'print' in production code - lib\controllers\login_controller.dart:161:9 - avoid_print
   info - Don't invoke 'print' in production code - lib\controllers\login_controller.dart:162:9 - avoid_print
   info - Don't invoke 'print' in production code - lib\controllers\login_controller.dart:234:7 - avoid_print
   info - The prefix 'flutterMap' isn't a lower_case_with_underscores identifier - lib\controllers\map_view_controller.dart:4:50 - library_prefixes
   info - Don't invoke 'print' in production code - lib\controllers\my_booking_on_demand_controller.dart:45:9 - avoid_print
   info - The imported package 'http' isn't a dependency of the importing package - lib\controllers\my_cab_booking_controller.dart:42:8 - depend_on_referenced_packages
   info - Don't invoke 'print' in production code - lib\controllers\my_cab_booking_controller.dart:393:7 - avoid_print
   info - Don't invoke 'print' in production code - lib\controllers\my_cab_booking_controller.dart:506:7 - avoid_print
   info - Missing type annotation - lib\controllers\my_cab_booking_controller.dart:542:33 - strict_top_level_inference
   info - Missing type annotation - lib\controllers\my_cab_booking_controller.dart:568:33 - strict_top_level_inference
   info - Missing type annotation - lib\controllers\my_cab_booking_controller.dart:649:31 - strict_top_level_inference
   info - Missing type annotation - lib\controllers\my_cab_booking_controller.dart:649:48 - strict_top_level_inference
   info - Missing type annotation - lib\controllers\my_cab_booking_controller.dart:711:50 - strict_top_level_inference
   info - Missing type annotation - lib\controllers\my_cab_booking_controller.dart:834:30 - strict_top_level_inference
   info - Missing type annotation - lib\controllers\my_cab_booking_controller.dart:834:39 - strict_top_level_inference
   info - Missing type annotation - lib\controllers\my_cab_booking_controller.dart:852:57 - strict_top_level_inference
   info - The imported package 'http' isn't a dependency of the importing package - lib\controllers\my_profile_controller.dart:7:8 - depend_on_referenced_packages
   info - Don't invoke 'print' in production code - lib\controllers\my_rental_booking_controller.dart:43:11 - avoid_print
   info - Don't invoke 'print' in production code - lib\controllers\on_demand_booking_controller.dart:182:9 - avoid_print
   info - Don't invoke 'print' in production code - lib\controllers\on_demand_booking_controller.dart:183:9 - avoid_print
   info - Don't invoke 'print' in production code - lib\controllers\on_demand_category_controller.dart:24:7 - avoid_print
   info - Don't invoke 'print' in production code - lib\controllers\on_demand_home_controller.dart:74:11 - avoid_print
   info - Missing type annotation - lib\controllers\osm_search_place_controller.dart:23:29 - strict_top_level_inference
   info - Don't invoke 'print' in production code - lib\controllers\parcel_coupon_controller.dart:26:5 - avoid_print
   info - The imported package 'http' isn't a dependency of the importing package - lib\controllers\parcel_order_confirmation_controller.dart:12:8 - depend_on_referenced_packages
   info - Don't invoke 'print' in production code - lib\controllers\parcel_order_confirmation_controller.dart:131:7 - avoid_print
   info - Don't invoke 'print' in production code - lib\controllers\parcel_order_confirmation_controller.dart:378:7 - avoid_print
   info - Missing type annotation - lib\controllers\parcel_order_confirmation_controller.dart:596:33 - strict_top_level_inference
   info - Missing type annotation - lib\controllers\parcel_order_confirmation_controller.dart:622:33 - strict_top_level_inference
   info - Don't invoke 'print' in production code - lib\controllers\parcel_order_confirmation_controller.dart:675:5 - avoid_print
   info - Don't invoke 'print' in production code - lib\controllers\parcel_order_confirmation_controller.dart:676:5 - avoid_print
   info - Don't invoke 'print' in production code - lib\controllers\parcel_order_confirmation_controller.dart:677:5 - avoid_print
   info - Don't invoke 'print' in production code - lib\controllers\parcel_order_confirmation_controller.dart:678:5 - avoid_print
   info - Don't invoke 'print' in production code - lib\controllers\parcel_order_confirmation_controller.dart:679:5 - avoid_print
   info - Missing type annotation - lib\controllers\parcel_order_confirmation_controller.dart:740:31 - strict_top_level_inference
   info - Missing type annotation - lib\controllers\parcel_order_confirmation_controller.dart:740:48 - strict_top_level_inference
   info - Missing type annotation - lib\controllers\parcel_order_confirmation_controller.dart:802:50 - strict_top_level_inference
   info - Don't use 'BuildContext's across async gaps - lib\controllers\parcel_order_confirmation_controller.dart:893:31 - use_build_context_synchronously
   info - Missing type annotation - lib\controllers\parcel_order_confirmation_controller.dart:962:30 - strict_top_level_inference
   info - Missing type annotation - lib\controllers\parcel_order_confirmation_controller.dart:962:39 - strict_top_level_inference
   info - Missing type annotation - lib\controllers\parcel_order_confirmation_controller.dart:980:57 - strict_top_level_inference
   info - Don't invoke 'print' in production code - lib\controllers\rental_conformation_controller.dart:81:7 - avoid_print
   info - Don't invoke 'print' in production code - lib\controllers\rental_coupon_controller.dart:25:5 - avoid_print
   info - Don't use 'BuildContext's across async gaps - lib\controllers\rental_home_controller.dart:107:56 - use_build_context_synchronously
   info - Don't invoke 'print' in production code - lib\controllers\rental_home_controller.dart:133:5 - avoid_print
   info - Don't invoke 'print' in production code - lib\controllers\rental_home_controller.dart:134:5 - avoid_print
   info - The imported package 'http' isn't a dependency of the importing package - lib\controllers\rental_order_details_controller.dart:42:8 - depend_on_referenced_packages
   info - Don't invoke 'print' in production code - lib\controllers\rental_order_details_controller.dart:430:7 - avoid_print
   info - Don't invoke 'print' in production code - lib\controllers\rental_order_details_controller.dart:543:7 - avoid_print
   info - Missing type annotation - lib\controllers\rental_order_details_controller.dart:579:33 - strict_top_level_inference
   info - Missing type annotation - lib\controllers\rental_order_details_controller.dart:605:33 - strict_top_level_inference
   info - Missing type annotation - lib\controllers\rental_order_details_controller.dart:686:31 - strict_top_level_inference
   info - Missing type annotation - lib\controllers\rental_order_details_controller.dart:686:48 - strict_top_level_inference
   info - Missing type annotation - lib\controllers\rental_order_details_controller.dart:748:50 - strict_top_level_inference
   info - Missing type annotation - lib\controllers\rental_order_details_controller.dart:870:30 - strict_top_level_inference
   info - Missing type annotation - lib\controllers\rental_order_details_controller.dart:870:39 - strict_top_level_inference
   info - Missing type annotation - lib\controllers\rental_order_details_controller.dart:887:57 - strict_top_level_inference
   info - Don't invoke 'print' in production code - lib\controllers\restaurant_details_controller.dart:86:5 - avoid_print
   info - Don't invoke 'print' in production code - lib\controllers\restaurant_details_controller.dart:94:7 - avoid_print
   info - Don't invoke 'print' in production code - lib\controllers\restaurant_details_controller.dart:121:13 - avoid_print
   info - Don't invoke 'print' in production code - lib\controllers\restaurant_details_controller.dart:125:11 - avoid_print
   info - Don't invoke 'print' in production code - lib\controllers\restaurant_details_controller.dart:143:5 - avoid_print
   info - Don't invoke 'print' in production code - lib\controllers\restaurant_details_controller.dart:148:7 - avoid_print
   info - Don't invoke 'print' in production code - lib\controllers\restaurant_details_controller.dart:166:5 - avoid_print
   info - Don't invoke 'print' in production code - lib\controllers\restaurant_details_controller.dart:178:11 - avoid_print
   info - Don't invoke 'print' in production code - lib\controllers\restaurant_details_controller.dart:197:9 - avoid_print
   info - Don't invoke 'print' in production code - lib\controllers\restaurant_details_controller.dart:355:5 - avoid_print
   info - Don't invoke 'print' in production code - lib\controllers\restaurant_details_controller.dart:356:5 - avoid_print
   info - Don't invoke 'print' in production code - lib\controllers\restaurant_details_controller.dart:358:5 - avoid_print
   info - Don't invoke 'print' in production code - lib\controllers\restaurant_details_controller.dart:529:5 - avoid_print
   info - Don't invoke 'print' in production code - lib\controllers\restaurant_details_controller.dart:534:7 - avoid_print
   info - Use interpolation to compose strings and values - lib\controllers\restaurant_details_controller.dart:589:10 - prefer_interpolation_to_compose_strings
   info - Don't invoke 'print' in production code - lib\controllers\restaurant_details_controller.dart:600:5 - avoid_print
   info - Don't invoke 'print' in production code - lib\controllers\restaurant_details_controller.dart:607:5 - avoid_print
   info - Don't invoke 'print' in production code - lib\controllers\service_list_controller.dart:51:1 - avoid_print
   info - Don't invoke 'print' in production code - lib\controllers\service_list_controller.dart:52:1 - avoid_print
   info - Don't invoke 'print' in production code - lib\controllers\service_list_controller.dart:54:3 - avoid_print
   info - Don't invoke 'print' in production code - lib\controllers\service_list_controller.dart:98:7 - avoid_print
warning - Dead code - lib\controllers\splash_controller.dart:66:15 - dead_code
warning - Dead code - lib\controllers\splash_controller.dart:66:86 - dead_code
   info - Don't invoke 'print' in production code - lib\controllers\view_all_popular_service_controller.dart:64:11 - avoid_print
   info - The imported package 'http' isn't a dependency of the importing package - lib\controllers\wallet_controller.dart:37:8 - depend_on_referenced_packages
   info - Don't invoke 'print' in production code - lib\controllers\wallet_controller.dart:245:7 - avoid_print
   info - Don't invoke 'print' in production code - lib\controllers\wallet_controller.dart:357:7 - avoid_print
   info - Missing type annotation - lib\controllers\wallet_controller.dart:395:31 - strict_top_level_inference
   info - Missing type annotation - lib\controllers\wallet_controller.dart:395:48 - strict_top_level_inference
   info - Missing type annotation - lib\controllers\wallet_controller.dart:451:50 - strict_top_level_inference
   info - Don't use 'BuildContext's across async gaps - lib\controllers\wallet_controller.dart:518:31 - use_build_context_synchronously
   info - Don't invoke 'print' in production code - lib\controllers\wallet_controller.dart:546:5 - avoid_print
   info - Don't invoke 'print' in production code - lib\controllers\wallet_controller.dart:547:5 - avoid_print
   info - Missing type annotation - lib\controllers\wallet_controller.dart:572:30 - strict_top_level_inference
   info - Missing type annotation - lib\controllers\wallet_controller.dart:572:39 - strict_top_level_inference
   info - Missing type annotation - lib\controllers\wallet_controller.dart:589:57 - strict_top_level_inference
   info - The variable name 'redirect_type' isn't a lowerCamelCase identifier - lib\models\banner_model.dart:8:11 - non_constant_identifier_names
   info - The variable name 'redirect_id' isn't a lowerCamelCase identifier - lib\models\banner_model.dart:9:11 - non_constant_identifier_names
   info - The variable name 'redirect_type' isn't a lowerCamelCase identifier - lib\models\banner_model.dart:12:60 - non_constant_identifier_names
   info - The variable name 'redirect_id' isn't a lowerCamelCase identifier - lib\models\banner_model.dart:12:80 - non_constant_identifier_names
   info - Use the null-aware operator '?.' rather than an explicit 'null' comparison - lib\models\conversation_model.dart:48:14 - prefer_null_aware_operators
   info - Don't invoke 'print' in production code - lib\models\dine_in_booking_model.dart:46:5 - avoid_print
   info - The variable name 'service_id' isn't a lowerCamelCase identifier - lib\models\favorite_ondemand_service_model.dart:3:11 - non_constant_identifier_names
   info - The variable name 'user_id' isn't a lowerCamelCase identifier - lib\models\favorite_ondemand_service_model.dart:4:11 - non_constant_identifier_names
   info - The variable name 'section_id' isn't a lowerCamelCase identifier - lib\models\favorite_ondemand_service_model.dart:5:11 - non_constant_identifier_names
   info - The variable name 'service_id' isn't a lowerCamelCase identifier - lib\models\favorite_ondemand_service_model.dart:7:39 - non_constant_identifier_names
   info - The variable name 'user_id' isn't a lowerCamelCase identifier - lib\models\favorite_ondemand_service_model.dart:7:78 - non_constant_identifier_names
   info - The variable name 'section_id' isn't a lowerCamelCase identifier - lib\models\favorite_ondemand_service_model.dart:7:92 - non_constant_identifier_names
   info - The variable name 'payment_method' isn't a lowerCamelCase identifier - lib\models\onprovider_order_model.dart:7:20 - non_constant_identifier_names
   info - The variable name 'payment_method' isn't a lowerCamelCase identifier - lib\models\onprovider_order_model.dart:41:10 - non_constant_identifier_names
   info - The variable name 'DeliveryCharge' isn't a lowerCamelCase identifier - lib\models\provider_serivce_model.dart:55:5 - non_constant_identifier_names
   info - The variable name 'discount_type' isn't a lowerCamelCase identifier - lib\models\special_discount_model.dart:32:11 - non_constant_identifier_names
   info - The variable name 'variant_image' isn't a lowerCamelCase identifier - lib\models\variant_info.dart:5:11 - non_constant_identifier_names
   info - The variable name 'variant_options' isn't a lowerCamelCase identifier - lib\models\variant_info.dart:6:25 - non_constant_identifier_names
   info - The variable name 'variant_image' isn't a lowerCamelCase identifier - lib\models\variant_info.dart:8:56 - non_constant_identifier_names
   info - The variable name 'variant_options' isn't a lowerCamelCase identifier - lib\models\variant_info.dart:8:93 - non_constant_identifier_names
   info - The variable name 'delivery_charges_per_km' isn't a lowerCamelCase identifier - lib\models\vehicle_type.dart:10:8 - non_constant_identifier_names
   info - The variable name 'minimum_delivery_charges' isn't a lowerCamelCase identifier - lib\models\vehicle_type.dart:11:8 - non_constant_identifier_names
   info - The variable name 'minimum_delivery_charges_within_km' isn't a lowerCamelCase identifier - lib\models\vehicle_type.dart:12:8 - non_constant_identifier_names
   info - The variable name 'delivery_charges_per_km' isn't a lowerCamelCase identifier - lib\models\vehicle_type.dart:22:12 - non_constant_identifier_names
   info - The variable name 'minimum_delivery_charges' isn't a lowerCamelCase identifier - lib\models\vehicle_type.dart:23:12 - non_constant_identifier_names
   info - The variable name 'minimum_delivery_charges_within_km' isn't a lowerCamelCase identifier - lib\models\vehicle_type.dart:24:12 - non_constant_identifier_names
   info - The file name 'MercadoPagoScreen.dart' isn't a lower_case_with_underscores identifier - lib\payment\MercadoPagoScreen.dart:1:1 - file_names
   info - The imported package 'webview_flutter' isn't a dependency of the importing package - lib\payment\MercadoPagoScreen.dart:6:8 - depend_on_referenced_packages
   info - 'WillPopScope' is deprecated and shouldn't be used. Use PopScope instead. The Android predictive back feature will not work with WillPopScope. This feature was deprecated after v3.12.0-1.0.pre - lib\payment\MercadoPagoScreen.dart:69:12 - deprecated_member_use
   info - The imported package 'webview_flutter' isn't a dependency of the importing package - lib\payment\PayFastScreen.dart:9:8 - depend_on_referenced_packages
   info - 'WillPopScope' is deprecated and shouldn't be used. Use PopScope instead. The Android predictive back feature will not work with WillPopScope. This feature was deprecated after v3.12.0-1.0.pre - lib\payment\PayFastScreen.dart:63:12 - deprecated_member_use
   info - The file name 'RazorPayFailedModel.dart' isn't a lower_case_with_underscores identifier - lib\payment\RazorPayFailedModel.dart:1:1 - file_names
   info - The file name 'createRazorPayOrderModel.dart' isn't a lower_case_with_underscores identifier - lib\payment\createRazorPayOrderModel.dart:1:1 - file_names
   info - The file name 'getPaytmTxtToken.dart' isn't a lower_case_with_underscores identifier - lib\payment\getPaytmTxtToken.dart:1:1 - file_names
   info - The imported package 'webview_flutter' isn't a dependency of the importing package - lib\payment\midtrans_screen.dart:7:8 - depend_on_referenced_packages
   info - The file name 'orangePayScreen.dart' isn't a lower_case_with_underscores identifier - lib\payment\orangePayScreen.dart:1:1 - file_names
   info - The imported package 'http' isn't a dependency of the importing package - lib\payment\orangePayScreen.dart:8:8 - depend_on_referenced_packages
   info - The imported package 'webview_flutter' isn't a dependency of the importing package - lib\payment\orangePayScreen.dart:9:8 - depend_on_referenced_packages
   info - 'WillPopScope' is deprecated and shouldn't be used. Use PopScope instead. The Android predictive back feature will not work with WillPopScope. This feature was deprecated after v3.12.0-1.0.pre - lib\payment\orangePayScreen.dart:101:12 - deprecated_member_use
   info - The imported package 'webview_flutter' isn't a dependency of the importing package - lib\payment\paystack\pay_stack_screen.dart:7:8 - depend_on_referenced_packages
   info - 'WillPopScope' is deprecated and shouldn't be used. Use PopScope instead. The Android predictive back feature will not work with WillPopScope. This feature was deprecated after v3.12.0-1.0.pre - lib\payment\paystack\pay_stack_screen.dart:70:12 - deprecated_member_use
   info - The imported package 'http' isn't a dependency of the importing package - lib\payment\paystack\paystack_url_genrater.dart:7:8 - depend_on_referenced_packages
   info - The file name 'rozorpayConroller.dart' isn't a lower_case_with_underscores identifier - lib\payment\rozorpayConroller.dart:1:1 - file_names
   info - The imported package 'http' isn't a dependency of the importing package - lib\payment\rozorpayConroller.dart:5:8 - depend_on_referenced_packages
   info - Don't invoke 'print' in production code - lib\payment\rozorpayConroller.dart:13:5 - avoid_print
   info - Don't invoke 'print' in production code - lib\payment\rozorpayConroller.dart:14:5 - avoid_print
   info - Don't invoke 'print' in production code - lib\payment\rozorpayConroller.dart:16:5 - avoid_print
   info - Don't invoke 'print' in production code - lib\payment\rozorpayConroller.dart:33:7 - avoid_print
   info - The file name 'xenditModel.dart' isn't a lower_case_with_underscores identifier - lib\payment\xenditModel.dart:1:1 - file_names
   info - The file name 'xenditScreen.dart' isn't a lower_case_with_underscores identifier - lib\payment\xenditScreen.dart:1:1 - file_names
   info - The imported package 'http' isn't a dependency of the importing package - lib\payment\xenditScreen.dart:8:8 - depend_on_referenced_packages
   info - The imported package 'webview_flutter' isn't a dependency of the importing package - lib\payment\xenditScreen.dart:9:8 - depend_on_referenced_packages
   info - 'withOpacity' is deprecated and shouldn't be used. Use .withValues() to avoid precision loss - lib\screen_ui\auth_screens\login_screen.dart:102:160 - deprecated_member_use
   info - The file name 'Intercity_home_screen.dart' isn't a lower_case_with_underscores identifier - lib\screen_ui\cab_service_screens\Intercity_home_screen.dart:1:1 - file_names
   info - The prefix 'flutterMap' isn't a lower_case_with_underscores identifier - lib\screen_ui\cab_service_screens\Intercity_home_screen.dart:21:50 - library_prefixes
   info - 'withOpacity' is deprecated and shouldn't be used. Use .withValues() to avoid precision loss - lib\screen_ui\cab_service_screens\Intercity_home_screen.dart:1435:53 - deprecated_member_use
   info - Don't use 'BuildContext's across async gaps - lib\screen_ui\cab_service_screens\Intercity_home_screen.dart:1448:64 - use_build_context_synchronously
   info - Don't use 'BuildContext's across async gaps - lib\screen_ui\cab_service_screens\Intercity_home_screen.dart:1462:62 - use_build_context_synchronously
   info - 'groupValue' is deprecated and shouldn't be used. Use a RadioGroup ancestor to manage group value instead. This feature was deprecated after v3.32.0-0.0.pre - lib\screen_ui\cab_service_screens\Intercity_home_screen.dart:1603:21 - deprecated_member_use
   info - 'onChanged' is deprecated and shouldn't be used. Use RadioGroup to handle value change instead. This feature was deprecated after v3.32.0-0.0.pre - lib\screen_ui\cab_service_screens\Intercity_home_screen.dart:1605:21 - deprecated_member_use
   info - The prefix 'flutterMap' isn't a lower_case_with_underscores identifier - lib\screen_ui\cab_service_screens\cab_booking_screen.dart:20:50 - library_prefixes
   info - 'withOpacity' is deprecated and shouldn't be used. Use .withValues() to avoid precision loss - lib\screen_ui\cab_service_screens\cab_booking_screen.dart:1445:47 - deprecated_member_use
   info - Don't use 'BuildContext's across async gaps - lib\screen_ui\cab_service_screens\cab_booking_screen.dart:1459:39 - use_build_context_synchronously
   info - Don't use 'BuildContext's across async gaps - lib\screen_ui\cab_service_screens\cab_booking_screen.dart:1465:37 - use_build_context_synchronously
   info - 'groupValue' is deprecated and shouldn't be used. Use a RadioGroup ancestor to manage group value instead. This feature was deprecated after v3.32.0-0.0.pre - lib\screen_ui\cab_service_screens\cab_booking_screen.dart:1598:21 - deprecated_member_use
   info - 'onChanged' is deprecated and shouldn't be used. Use RadioGroup to handle value change instead. This feature was deprecated after v3.32.0-0.0.pre - lib\screen_ui\cab_service_screens\cab_booking_screen.dart:1600:21 - deprecated_member_use
   info - Missing type annotation - lib\screen_ui\cab_service_screens\cab_dashboard_screen.dart:59:45 - strict_top_level_inference
   info - 'color' is deprecated and shouldn't be used. Use colorFilter instead - lib\screen_ui\cab_service_screens\cab_dashboard_screen.dart:67:11 - deprecated_member_use
   info - 'color' is deprecated and shouldn't be used. Use colorFilter instead - lib\screen_ui\cab_service_screens\cab_order_details.dart:519:55 - deprecated_member_use
   info - 'withOpacity' is deprecated and shouldn't be used. Use .withValues() to avoid precision loss - lib\screen_ui\cab_service_screens\cab_review_screen.dart:106:104 - deprecated_member_use
   info - 'withOpacity' is deprecated and shouldn't be used. Use .withValues() to avoid precision loss - lib\screen_ui\cab_service_screens\cab_review_screen.dart:113:143 - deprecated_member_use
   info - 'withOpacity' is deprecated and shouldn't be used. Use .withValues() to avoid precision loss - lib\screen_ui\cab_service_screens\cab_review_screen.dart:161:74 - deprecated_member_use
   info - 'groupValue' is deprecated and shouldn't be used. Use a RadioGroup ancestor to manage group value instead. This feature was deprecated after v3.32.0-0.0.pre - lib\screen_ui\cab_service_screens\my_cab_booking_screen.dart:467:21 - deprecated_member_use
   info - 'onChanged' is deprecated and shouldn't be used. Use RadioGroup to handle value change instead. This feature was deprecated after v3.32.0-0.0.pre - lib\screen_ui\cab_service_screens\my_cab_booking_screen.dart:469:21 - deprecated_member_use
   info - Missing type annotation - lib\screen_ui\ecommarce\dash_board_e_commerce_screen.dart:63:45 - strict_top_level_inference
   info - 'color' is deprecated and shouldn't be used. Use colorFilter instead - lib\screen_ui\ecommarce\dash_board_e_commerce_screen.dart:71:11 - deprecated_member_use
   info - The imported package 'url_launcher' isn't a dependency of the importing package - lib\screen_ui\ecommarce\home_e_commerce_screen.dart:42:8 - depend_on_referenced_packages
   info - 'withOpacity' is deprecated and shouldn't be used. Use .withValues() to avoid precision loss - lib\screen_ui\ecommarce\home_e_commerce_screen.dart:1079:53 - deprecated_member_use
   info - Unnecessary use of multiple underscores - lib\screen_ui\ecommarce\home_e_commerce_screen.dart:1220:39 - unnecessary_underscores
   info - Unnecessary use of multiple underscores - lib\screen_ui\ecommarce\home_e_commerce_screen.dart:1221:34 - unnecessary_underscores
   info - Unnecessary use of multiple underscores - lib\screen_ui\ecommarce\home_e_commerce_screen.dart:1243:43 - unnecessary_underscores
   info - Unnecessary use of multiple underscores - lib\screen_ui\ecommarce\home_e_commerce_screen.dart:1244:38 - unnecessary_underscores
   info - Unnecessary use of multiple underscores - lib\screen_ui\ecommarce\home_e_commerce_screen.dart:1308:45 - unnecessary_underscores
   info - Unnecessary use of multiple underscores - lib\screen_ui\ecommarce\home_e_commerce_screen.dart:1309:40 - unnecessary_underscores
   info - 'WillPopScope' is deprecated and shouldn't be used. Use PopScope instead. The Android predictive back feature will not work with WillPopScope. This feature was deprecated after v3.12.0-1.0.pre - lib\screen_ui\help_support_screen\help_support_screen.dart:33:12 - deprecated_member_use
   info - Don't use 'BuildContext's across async gaps - lib\screen_ui\help_support_screen\help_support_screen.dart:377:95 - use_build_context_synchronously
   info - Don't use 'BuildContext's across async gaps - lib\screen_ui\help_support_screen\help_support_screen.dart:392:102 - use_build_context_synchronously
   info - Don't use 'BuildContext's across async gaps - lib\screen_ui\help_support_screen\help_support_screen.dart:409:95 - use_build_context_synchronously
   info - Don't use 'BuildContext's across async gaps - lib\screen_ui\help_support_screen\help_support_screen.dart:424:102 - use_build_context_synchronously
   info - 'color' is deprecated and shouldn't be used. Use colorFilter instead - lib\screen_ui\location_enable_screens\address_list_screen.dart:140:79 - deprecated_member_use
   info - The type of the right operand ('String') isn't a subtype or a supertype of the left operand ('RxString') - lib\screen_ui\location_enable_screens\enter_manually_location.dart:47:45 - unrelated_type_equality_checks
   info - 'desiredAccuracy' is deprecated and shouldn't be used. use settings parameter with AndroidSettings, AppleSettings, WebSettings, or LocationSettings - lib\screen_ui\location_enable_screens\location_permission_screen.dart:66:87 - deprecated_member_use
   info - 'desiredAccuracy' is deprecated and shouldn't be used. use settings parameter with AndroidSettings, AppleSettings, WebSettings, or LocationSettings - lib\screen_ui\location_enable_screens\location_permission_screen.dart:116:63 - deprecated_member_use
   info - 'withOpacity' is deprecated and shouldn't be used. Use .withValues() to avoid precision loss - lib\screen_ui\multi_vendor_service\advertisement_screens\all_advertisement_screen.dart:86:53 - deprecated_member_use
   info - Don't invoke 'print' in production code - lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:125:35 - avoid_print
   info - 'groupValue' is deprecated and shouldn't be used. Use a RadioGroup ancestor to manage group value instead. This feature was deprecated after v3.32.0-0.0.pre - lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:425:45 - deprecated_member_use
   info - 'onChanged' is deprecated and shouldn't be used. Use RadioGroup to handle value change instead. This feature was deprecated after v3.32.0-0.0.pre - lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:427:45 - deprecated_member_use
   info - 'pickerTitle' is deprecated and shouldn't be used. should use headerBuilder instead - lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:448:39 - deprecated_member_use
   info - 'groupValue' is deprecated and shouldn't be used. Use a RadioGroup ancestor to manage group value instead. This feature was deprecated after v3.32.0-0.0.pre - lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:476:43 - deprecated_member_use
   info - 'onChanged' is deprecated and shouldn't be used. Use RadioGroup to handle value change instead. This feature was deprecated after v3.32.0-0.0.pre - lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:478:43 - deprecated_member_use
   info - 'pickerTitle' is deprecated and shouldn't be used. should use headerBuilder instead - lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:487:47 - deprecated_member_use
   info - Don't use 'BuildContext's across async gaps - lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:1125:112 - use_build_context_synchronously
   info - Don't use 'BuildContext's across async gaps - lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:1129:75 - use_build_context_synchronously
   info - Don't use 'BuildContext's across async gaps - lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:1131:79 - use_build_context_synchronously
   info - Don't use 'BuildContext's across async gaps - lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:1133:67 - use_build_context_synchronously
   info - Don't use 'BuildContext's across async gaps - lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:1139:72 - use_build_context_synchronously
   info - Don't use 'BuildContext's across async gaps - lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:1141:70 - use_build_context_synchronously
   info - Don't use 'BuildContext's across async gaps - lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:1143:66 - use_build_context_synchronously
   info - 'groupValue' is deprecated and shouldn't be used. Use a RadioGroup ancestor to manage group value instead. This feature was deprecated after v3.32.0-0.0.pre - lib\screen_ui\multi_vendor_service\cart_screen\select_payment_screen.dart:198:21 - deprecated_member_use
   info - 'onChanged' is deprecated and shouldn't be used. Use RadioGroup to handle value change instead. This feature was deprecated after v3.32.0-0.0.pre - lib\screen_ui\multi_vendor_service\cart_screen\select_payment_screen.dart:200:21 - deprecated_member_use
   info - 'withOpacity' is deprecated and shouldn't be used. Use .withValues() to avoid precision loss - lib\screen_ui\multi_vendor_service\cashback_screen\cashback_offers_list.dart:39:69 - deprecated_member_use
   info - The file name 'ChatVideoContainer.dart' isn't a lower_case_with_underscores identifier - lib\screen_ui\multi_vendor_service\chat_screens\ChatVideoContainer.dart:1:1 - file_names
   info - Don't use 'BuildContext's across async gaps - lib\screen_ui\multi_vendor_service\chat_screens\chat_screen.dart:263:95 - use_build_context_synchronously
   info - Don't use 'BuildContext's across async gaps - lib\screen_ui\multi_vendor_service\chat_screens\chat_screen.dart:279:102 - use_build_context_synchronously
   info - Don't use 'BuildContext's across async gaps - lib\screen_ui\multi_vendor_service\chat_screens\chat_screen.dart:294:95 - use_build_context_synchronously
   info - Unnecessary use of string interpolation - lib\screen_ui\multi_vendor_service\chat_screens\driver_inbox_screen.dart:65:39 - unnecessary_string_interpolations
   info - Invalid use of a private type in a public API - lib\screen_ui\multi_vendor_service\chat_screens\full_screen_video_viewer.dart:16:3 - library_private_types_in_public_api
   info - Unnecessary use of string interpolation - lib\screen_ui\multi_vendor_service\chat_screens\restaurant_inbox_screen.dart:63:39 - unnecessary_string_interpolations
   info - Missing type annotation - lib\screen_ui\multi_vendor_service\dash_board_screens\dash_board_screen.dart:62:45 - strict_top_level_inference
   info - 'color' is deprecated and shouldn't be used. Use colorFilter instead - lib\screen_ui\multi_vendor_service\dash_board_screens\dash_board_screen.dart:70:11 - deprecated_member_use
   info - The imported package 'url_launcher' isn't a dependency of the importing package - lib\screen_ui\multi_vendor_service\dine_in_booking\dine_in_booking_details.dart:7:8 - depend_on_referenced_packages
   info - Missing type annotation - lib\screen_ui\multi_vendor_service\dine_in_booking\dine_in_booking_screen.dart:152:20 - strict_top_level_inference
   info - 'withOpacity' is deprecated and shouldn't be used. Use .withValues() to avoid precision loss - lib\screen_ui\multi_vendor_service\dine_in_booking\dine_in_booking_screen.dart:176:143 - deprecated_member_use
   info - 'groupValue' is deprecated and shouldn't be used. Use a RadioGroup ancestor to manage group value instead. This feature was deprecated after v3.32.0-0.0.pre - lib\screen_ui\multi_vendor_service\dine_in_screeen\book_table_screen.dart:289:33 - deprecated_member_use
   info - 'onChanged' is deprecated and shouldn't be used. Use RadioGroup to handle value change instead. This feature was deprecated after v3.32.0-0.0.pre - lib\screen_ui\multi_vendor_service\dine_in_screeen\book_table_screen.dart:291:33 - deprecated_member_use
   info - The imported package 'url_launcher' isn't a dependency of the importing package - lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_details_screen.dart:16:8 - depend_on_referenced_packages
   info - 'withOpacity' is deprecated and shouldn't be used. Use .withValues() to avoid precision loss - lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_details_screen.dart:125:149 - deprecated_member_use
  error - Expected an identifier - lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_details_screen.dart:134:53 - missing_identifier
  error - The getter '(' isn't defined for the type 'DineInRestaurantDetailsController' - lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_details_screen.dart:134:53 - undefined_getter
   info - 'withOpacity' is deprecated and shouldn't be used. Use .withValues() to avoid precision loss - lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_details_screen.dart:147:153 - deprecated_member_use
  error - Expected an identifier - lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_details_screen.dart:161:64 - missing_identifier
  error - The getter '(' isn't defined for the type 'DineInRestaurantDetailsController' - lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_details_screen.dart:161:64 - undefined_getter
   info - 'withOpacity' is deprecated and shouldn't be used. Use .withValues() to avoid precision loss - lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_restaurant_list_screen.dart:103:66 - deprecated_member_use
   info - The imported package 'url_launcher' isn't a dependency of the importing package - lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:16:8 - depend_on_referenced_packages
   info - Missing type annotation - lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:260:17 - strict_top_level_inference
   info - 'withOpacity' is deprecated and shouldn't be used. Use .withValues() to avoid precision loss - lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:314:146 - deprecated_member_use
   info - 'withOpacity' is deprecated and shouldn't be used. Use .withValues() to avoid precision loss - lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:461:146 - deprecated_member_use
   info - 'withOpacity' is deprecated and shouldn't be used. Use .withValues() to avoid precision loss - lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:605:145 - deprecated_member_use
   info - 'withOpacity' is deprecated and shouldn't be used. Use .withValues() to avoid precision loss - lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:207:107 - deprecated_member_use
   info - 'withOpacity' is deprecated and shouldn't be used. Use .withValues() to avoid precision loss - lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:536:109 - deprecated_member_use
   info - Don't invoke 'print' in production code - lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:607:5 - avoid_print
   info - Don't invoke 'print' in production code - lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:608:5 - avoid_print
   info - Don't invoke 'print' in production code - lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:609:5 - avoid_print
   info - 'groupValue' is deprecated and shouldn't be used. Use a RadioGroup ancestor to manage group value instead. This feature was deprecated after v3.32.0-0.0.pre - lib\screen_ui\multi_vendor_service\gift_card\select_gift_payment_screen.dart:210:17 - deprecated_member_use
   info - 'onChanged' is deprecated and shouldn't be used. Use RadioGroup to handle value change instead. This feature was deprecated after v3.32.0-0.0.pre - lib\screen_ui\multi_vendor_service\gift_card\select_gift_payment_screen.dart:212:17 - deprecated_member_use
   info - 'withOpacity' is deprecated and shouldn't be used. Use .withValues() to avoid precision loss - lib\screen_ui\multi_vendor_service\home_screen\category_restaurant_screen.dart:62:73 - deprecated_member_use
   info - 'withOpacity' is deprecated and shouldn't be used. Use .withValues() to avoid precision loss - lib\screen_ui\multi_vendor_service\home_screen\discount_restaurant_list_screen.dart:66:158 - deprecated_member_use
   info - The prefix 'flutterMap' isn't a lower_case_with_underscores identifier - lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:29:50 - library_prefixes
   info - The imported package 'url_launcher' isn't a dependency of the importing package - lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:36:8 - depend_on_referenced_packages
   info - Missing type annotation - lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:677:17 - strict_top_level_inference
   info - 'withOpacity' is deprecated and shouldn't be used. Use .withValues() to avoid precision loss - lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:733:146 - deprecated_member_use
   info - 'withOpacity' is deprecated and shouldn't be used. Use .withValues() to avoid precision loss - lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:906:146 - deprecated_member_use
   info - 'withOpacity' is deprecated and shouldn't be used. Use .withValues() to avoid precision loss - lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1075:145 - deprecated_member_use
   info - 'withOpacity' is deprecated and shouldn't be used. Use .withValues() to avoid precision loss - lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1215:53 - deprecated_member_use
   info - 'withOpacity' is deprecated and shouldn't be used. Use .withValues() to avoid precision loss - lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1365:146 - deprecated_member_use
   info - 'withOpacity' is deprecated and shouldn't be used. Use .withValues() to avoid precision loss - lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1727:53 - deprecated_member_use
   info - 'withOpacity' is deprecated and shouldn't be used. Use .withValues() to avoid precision loss - lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1902:81 - deprecated_member_use
   info - Unnecessary use of multiple underscores - lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:2105:39 - unnecessary_underscores
   info - Unnecessary use of multiple underscores - lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:2106:34 - unnecessary_underscores
   info - Unnecessary use of multiple underscores - lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:2120:39 - unnecessary_underscores
   info - Unnecessary use of multiple underscores - lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:2121:34 - unnecessary_underscores
   info - Unnecessary use of multiple underscores - lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:2138:39 - unnecessary_underscores
   info - Unnecessary use of multiple underscores - lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:2139:34 - unnecessary_underscores
   info - The imported package 'url_launcher' isn't a dependency of the importing package - lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:32:8 - depend_on_referenced_packages
   info - 'withOpacity' is deprecated and shouldn't be used. Use .withValues() to avoid precision loss - lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:624:148 - deprecated_member_use
   info - 'withOpacity' is deprecated and shouldn't be used. Use .withValues() to avoid precision loss - lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:787:61 - deprecated_member_use
   info - 'withOpacity' is deprecated and shouldn't be used. Use .withValues() to avoid precision loss - lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:932:152 - deprecated_member_use
   info - Unnecessary use of multiple underscores - lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:1126:37 - unnecessary_underscores
   info - Unnecessary use of multiple underscores - lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:1127:32 - unnecessary_underscores
   info - Unnecessary use of multiple underscores - lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:1141:37 - unnecessary_underscores
   info - Unnecessary use of multiple underscores - lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:1142:32 - unnecessary_underscores
   info - 'withOpacity' is deprecated and shouldn't be used. Use .withValues() to avoid precision loss - lib\screen_ui\multi_vendor_service\home_screen\restaurant_list_screen.dart:74:73 - deprecated_member_use
   info - The prefix 'flutterMap' isn't a lower_case_with_underscores identifier - lib\screen_ui\multi_vendor_service\order_list_screen\live_tracking_screen.dart:5:50 - library_prefixes
   info - 'withOpacity' is deprecated and shouldn't be used. Use .withValues() to avoid precision loss - lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:522:77 - deprecated_member_use
   info - Missing type annotation - lib\screen_ui\multi_vendor_service\order_list_screen\order_screen.dart:233:20 - strict_top_level_inference
   info - 'withOpacity' is deprecated and shouldn't be used. Use .withValues() to avoid precision loss - lib\screen_ui\multi_vendor_service\order_list_screen\order_screen.dart:264:53 - deprecated_member_use
   info - 'Share' is deprecated and shouldn't be used. Use SharePlus instead - lib\screen_ui\multi_vendor_service\profile_screen\profile_screen.dart:163:37 - deprecated_member_use
   info - 'share' is deprecated and shouldn't be used. Use SharePlus.instance.share() instead - lib\screen_ui\multi_vendor_service\profile_screen\profile_screen.dart:163:43 - deprecated_member_use
   info - 'Share' is deprecated and shouldn't be used. Use SharePlus instead - lib\screen_ui\multi_vendor_service\refer_friend_screen\refer_friend_screen.dart:134:41 - deprecated_member_use
   info - 'share' is deprecated and shouldn't be used. Use SharePlus.instance.share() instead - lib\screen_ui\multi_vendor_service\refer_friend_screen\refer_friend_screen.dart:134:47 - deprecated_member_use
   info - 'withOpacity' is deprecated and shouldn't be used. Use .withValues() to avoid precision loss - lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:298:54 - deprecated_member_use
  error - Expected an identifier - lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:311:46 - missing_identifier
  error - The getter '(' isn't defined for the type 'RestaurantDetailsController' - lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:311:46 - undefined_getter
   info - 'withOpacity' is deprecated and shouldn't be used. Use .withValues() to avoid precision loss - lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:332:58 - deprecated_member_use
  error - Expected an identifier - lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:350:42 - missing_identifier
  error - The getter '(' isn't defined for the type 'RestaurantDetailsController' - lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:350:42 - undefined_getter
   info - 'withOpacity' is deprecated and shouldn't be used. Use .withValues() to avoid precision loss - lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1795:54 - deprecated_member_use
   info - 'withOpacity' is deprecated and shouldn't be used. Use .withValues() to avoid precision loss - lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:2640:52 - deprecated_member_use
   info - 'withOpacity' is deprecated and shouldn't be used. Use .withValues() to avoid precision loss - lib\screen_ui\multi_vendor_service\search_screen\search_screen.dart:106:79 - deprecated_member_use
   info - 'withOpacity' is deprecated and shouldn't be used. Use .withValues() to avoid precision loss - lib\screen_ui\multi_vendor_service\search_screen\search_screen.dart:388:81 - deprecated_member_use
   info - Don't invoke 'print' in production code - lib\screen_ui\multi_vendor_service\search_screen\search_screen.dart:421:5 - avoid_print
   info - Don't invoke 'print' in production code - lib\screen_ui\multi_vendor_service\search_screen\search_screen.dart:422:5 - avoid_print
   info - Don't invoke 'print' in production code - lib\screen_ui\multi_vendor_service\search_screen\search_screen.dart:423:5 - avoid_print
   info - 'groupValue' is deprecated and shouldn't be used. Use a RadioGroup ancestor to manage group value instead. This feature was deprecated after v3.32.0-0.0.pre - lib\screen_ui\multi_vendor_service\wallet_screen\payment_list_screen.dart:170:17 - deprecated_member_use
   info - 'onChanged' is deprecated and shouldn't be used. Use RadioGroup to handle value change instead. This feature was deprecated after v3.32.0-0.0.pre - lib\screen_ui\multi_vendor_service\wallet_screen\payment_list_screen.dart:172:17 - deprecated_member_use
   info - 'pickerTitle' is deprecated and shouldn't be used. should use headerBuilder instead - lib\screen_ui\on_demand_service\on_demand_booking_screen.dart:223:23 - deprecated_member_use
   info - 'pickerTextStyle' is deprecated and shouldn't be used. should use pickerThemeData instead - lib\screen_ui\on_demand_service\on_demand_booking_screen.dart:225:23 - deprecated_member_use
   info - 'closeIconColor' is deprecated and shouldn't be used. should use headerBuilder instead - lib\screen_ui\on_demand_service\on_demand_booking_screen.dart:226:23 - deprecated_member_use
   info - Missing type annotation - lib\screen_ui\on_demand_service\on_demand_dashboard_screen.dart:64:45 - strict_top_level_inference
   info - 'color' is deprecated and shouldn't be used. Use colorFilter instead - lib\screen_ui\on_demand_service\on_demand_dashboard_screen.dart:72:11 - deprecated_member_use
   info - Don't invoke 'print' in production code - lib\screen_ui\on_demand_service\on_demand_details_screen.dart:45:31 - avoid_print
   info - Don't invoke 'print' in production code - lib\screen_ui\on_demand_service\on_demand_details_screen.dart:46:31 - avoid_print
   info - 'withOpacity' is deprecated and shouldn't be used. Use .withValues() to avoid precision loss - lib\screen_ui\on_demand_service\on_demand_details_screen.dart:170:131 - deprecated_member_use
   info - 'withOpacity' is deprecated and shouldn't be used. Use .withValues() to avoid precision loss - lib\screen_ui\on_demand_service\on_demand_details_screen.dart:179:116 - deprecated_member_use
   info - 'withOpacity' is deprecated and shouldn't be used. Use .withValues() to avoid precision loss - lib\screen_ui\on_demand_service\on_demand_details_screen.dart:241:44 - deprecated_member_use
   info - Unnecessary use of multiple underscores - lib\screen_ui\on_demand_service\on_demand_home_screen.dart:377:97 - unnecessary_underscores
   info - Unnecessary use of multiple underscores - lib\screen_ui\on_demand_service\on_demand_home_screen.dart:377:101 - unnecessary_underscores
   info - Don't use 'BuildContext's across async gaps - lib\screen_ui\on_demand_service\on_demand_order_details_screen.dart:105:64 - use_build_context_synchronously
   info - Don't invoke 'print' in production code - lib\screen_ui\on_demand_service\on_demand_order_details_screen.dart:890:27 - avoid_print
   info - Don't invoke 'print' in production code - lib\screen_ui\on_demand_service\on_demand_order_details_screen.dart:891:27 - avoid_print
   info - Don't invoke 'print' in production code - lib\screen_ui\on_demand_service\on_demand_order_details_screen.dart:896:29 - avoid_print
   info - Don't invoke 'print' in production code - lib\screen_ui\on_demand_service\on_demand_order_details_screen.dart:902:29 - avoid_print
   info - Don't invoke 'print' in production code - lib\screen_ui\on_demand_service\on_demand_payment_screen.dart:139:31 - avoid_print
   info - Missing type annotation - lib\screen_ui\on_demand_service\on_demand_payment_screen.dart:202:22 - strict_top_level_inference
   info - 'groupValue' is deprecated and shouldn't be used. Use a RadioGroup ancestor to manage group value instead. This feature was deprecated after v3.32.0-0.0.pre - lib\screen_ui\on_demand_service\on_demand_payment_screen.dart:249:21 - deprecated_member_use
   info - 'onChanged' is deprecated and shouldn't be used. Use RadioGroup to handle value change instead. This feature was deprecated after v3.32.0-0.0.pre - lib\screen_ui\on_demand_service\on_demand_payment_screen.dart:251:21 - deprecated_member_use
   info - 'color' is deprecated and shouldn't be used. Use colorFilter instead - lib\screen_ui\on_demand_service\provider_screen.dart:48:74 - deprecated_member_use
   info - 'color' is deprecated and shouldn't be used. Use colorFilter instead - lib\screen_ui\on_demand_service\provider_screen.dart:59:76 - deprecated_member_use
   info - Don't invoke 'print' in production code - lib\screen_ui\parcel_service\order_successfully_placed.dart:49:21 - avoid_print
   info - Missing type annotation - lib\screen_ui\parcel_service\parcel_dashboard_screen.dart:59:45 - strict_top_level_inference
   info - 'color' is deprecated and shouldn't be used. Use colorFilter instead - lib\screen_ui\parcel_service\parcel_dashboard_screen.dart:67:11 - deprecated_member_use
   info - 'color' is deprecated and shouldn't be used. Use colorFilter instead - lib\screen_ui\parcel_service\parcel_order_confirmation.dart:368:55 - deprecated_member_use
   info - Missing type annotation - lib\screen_ui\parcel_service\parcel_order_confirmation.dart:551:22 - strict_top_level_inference
   info - 'groupValue' is deprecated and shouldn't be used. Use a RadioGroup ancestor to manage group value instead. This feature was deprecated after v3.32.0-0.0.pre - lib\screen_ui\parcel_service\parcel_order_confirmation.dart:595:17 - deprecated_member_use
   info - 'onChanged' is deprecated and shouldn't be used. Use RadioGroup to handle value change instead. This feature was deprecated after v3.32.0-0.0.pre - lib\screen_ui\parcel_service\parcel_order_confirmation.dart:597:17 - deprecated_member_use
   info - 'color' is deprecated and shouldn't be used. Use colorFilter instead - lib\screen_ui\parcel_service\parcel_order_details.dart:512:55 - deprecated_member_use
   info - 'withOpacity' is deprecated and shouldn't be used. Use .withValues() to avoid precision loss - lib\screen_ui\parcel_service\parcel_review_screen.dart:74:104 - deprecated_member_use
   info - 'withOpacity' is deprecated and shouldn't be used. Use .withValues() to avoid precision loss - lib\screen_ui\parcel_service\parcel_review_screen.dart:81:143 - deprecated_member_use
   info - 'withOpacity' is deprecated and shouldn't be used. Use .withValues() to avoid precision loss - lib\screen_ui\parcel_service\parcel_review_screen.dart:129:74 - deprecated_member_use
   info - 'groupValue' is deprecated and shouldn't be used. Use a RadioGroup ancestor to manage group value instead. This feature was deprecated after v3.32.0-0.0.pre - lib\screen_ui\rental_service\my_rental_booking_screen.dart:318:21 - deprecated_member_use
   info - 'onChanged' is deprecated and shouldn't be used. Use RadioGroup to handle value change instead. This feature was deprecated after v3.32.0-0.0.pre - lib\screen_ui\rental_service\my_rental_booking_screen.dart:320:21 - deprecated_member_use
   info - Missing type annotation - lib\screen_ui\rental_service\rental_dashboard_screen.dart:60:45 - strict_top_level_inference
   info - 'color' is deprecated and shouldn't be used. Use colorFilter instead - lib\screen_ui\rental_service\rental_dashboard_screen.dart:68:11 - deprecated_member_use
   info - Don't use 'BuildContext's across async gaps - lib\screen_ui\rental_service\rental_home_screen.dart:283:65 - use_build_context_synchronously
   info - 'groupValue' is deprecated and shouldn't be used. Use a RadioGroup ancestor to manage group value instead. This feature was deprecated after v3.32.0-0.0.pre - lib\screen_ui\rental_service\rental_home_screen.dart:612:21 - deprecated_member_use
   info - 'onChanged' is deprecated and shouldn't be used. Use RadioGroup to handle value change instead. This feature was deprecated after v3.32.0-0.0.pre - lib\screen_ui\rental_service\rental_home_screen.dart:614:21 - deprecated_member_use
   info - 'groupValue' is deprecated and shouldn't be used. Use a RadioGroup ancestor to manage group value instead. This feature was deprecated after v3.32.0-0.0.pre - lib\screen_ui\rental_service\rental_order_details_screen.dart:851:21 - deprecated_member_use
   info - 'onChanged' is deprecated and shouldn't be used. Use RadioGroup to handle value change instead. This feature was deprecated after v3.32.0-0.0.pre - lib\screen_ui\rental_service\rental_order_details_screen.dart:853:21 - deprecated_member_use
   info - 'withOpacity' is deprecated and shouldn't be used. Use .withValues() to avoid precision loss - lib\screen_ui\rental_service\rental_review_screen.dart:134:89 - deprecated_member_use
   info - 'withOpacity' is deprecated and shouldn't be used. Use .withValues() to avoid precision loss - lib\screen_ui\rental_service\rental_review_screen.dart:147:89 - deprecated_member_use
   info - 'withOpacity' is deprecated and shouldn't be used. Use .withValues() to avoid precision loss - lib\screen_ui\rental_service\rental_review_screen.dart:210:74 - deprecated_member_use
   info - Unnecessary use of multiple underscores - lib\screen_ui\service_home_screen\service_list_screen.dart:261:37 - unnecessary_underscores
warning - Unused import: '../../constant/assets.dart' - lib\screen_ui\splash_screen\splash_screen.dart:3:8 - unused_import
   info - Don't use 'BuildContext's across async gaps - lib\service\cart_provider.dart:47:11 - use_build_context_synchronously
   info - Don't invoke 'print' in production code - lib\service\database_helper.dart:48:5 - avoid_print
   info - The imported package 'http' isn't a dependency of the importing package - lib\service\fire_store_utils.dart:83:8 - depend_on_referenced_packages
   info - Don't invoke 'print' in production code - lib\service\fire_store_utils.dart:259:7 - avoid_print
   info - Don't invoke 'print' in production code - lib\service\fire_store_utils.dart:280:7 - avoid_print
   info - Don't invoke 'print' in production code - lib\service\fire_store_utils.dart:301:9 - avoid_print
   info - Don't invoke 'print' in production code - lib\service\fire_store_utils.dart:385:11 - avoid_print
   info - Don't invoke 'print' in production code - lib\service\fire_store_utils.dart:387:13 - avoid_print
   info - Don't invoke 'print' in production code - lib\service\fire_store_utils.dart:1067:5 - avoid_print
   info - Don't invoke 'print' in production code - lib\service\fire_store_utils.dart:1068:5 - avoid_print
   info - Don't invoke 'print' in production code - lib\service\fire_store_utils.dart:1079:7 - avoid_print
   info - Don't invoke 'print' in production code - lib\service\fire_store_utils.dart:1083:9 - avoid_print
   info - Don't invoke 'print' in production code - lib\service\fire_store_utils.dart:1087:7 - avoid_print
   info - Don't invoke 'print' in production code - lib\service\fire_store_utils.dart:1089:7 - avoid_print
   info - Don't invoke 'print' in production code - lib\service\fire_store_utils.dart:1214:7 - avoid_print
   info - Don't invoke 'print' in production code - lib\service\fire_store_utils.dart:1229:5 - avoid_print
   info - Don't invoke 'print' in production code - lib\service\fire_store_utils.dart:1247:15 - avoid_print
   info - Don't invoke 'print' in production code - lib\service\fire_store_utils.dart:1271:15 - avoid_print
   info - Don't invoke 'print' in production code - lib\service\fire_store_utils.dart:1281:7 - avoid_print
   info - Don't invoke 'print' in production code - lib\service\fire_store_utils.dart:1298:15 - avoid_print
   info - Don't invoke 'print' in production code - lib\service\fire_store_utils.dart:1304:13 - avoid_print
   info - Don't invoke 'print' in production code - lib\service\fire_store_utils.dart:1309:7 - avoid_print
   info - Don't invoke 'print' in production code - lib\service\fire_store_utils.dart:1314:5 - avoid_print
   info - Don't invoke 'print' in production code - lib\service\fire_store_utils.dart:1360:5 - avoid_print
   info - Don't invoke 'print' in production code - lib\service\fire_store_utils.dart:1382:5 - avoid_print
   info - Don't invoke 'print' in production code - lib\service\fire_store_utils.dart:1727:9 - avoid_print
   info - Don't invoke 'print' in production code - lib\service\fire_store_utils.dart:1728:9 - avoid_print
   info - Don't invoke 'print' in production code - lib\service\fire_store_utils.dart:1833:7 - avoid_print
   info - Don't invoke 'print' in production code - lib\service\fire_store_utils.dart:1942:7 - avoid_print
   info - Don't invoke 'print' in production code - lib\service\fire_store_utils.dart:2007:9 - avoid_print
   info - Don't invoke 'print' in production code - lib\service\fire_store_utils.dart:2051:5 - avoid_print
   info - Don't invoke 'print' in production code - lib\service\fire_store_utils.dart:2074:9 - avoid_print
   info - Don't invoke 'print' in production code - lib\service\fire_store_utils.dart:2078:9 - avoid_print
   info - Don't invoke 'print' in production code - lib\service\fire_store_utils.dart:2081:5 - avoid_print
   info - Don't invoke 'print' in production code - lib\service\fire_store_utils.dart:2190:7 - avoid_print
   info - Don't invoke 'print' in production code - lib\service\fire_store_utils.dart:2203:11 - avoid_print
   info - Don't invoke 'print' in production code - lib\service\fire_store_utils.dart:2205:13 - avoid_print
   info - Don't invoke 'print' in production code - lib\service\fire_store_utils.dart:2231:13 - avoid_print
   info - Don't invoke 'print' in production code - lib\service\fire_store_utils.dart:2246:5 - avoid_print
   info - Don't invoke 'print' in production code - lib\service\fire_store_utils.dart:2247:5 - avoid_print
   info - Function literals shouldn't be passed to 'forEach' - lib\service\fire_store_utils.dart:2261:22 - avoid_function_literals_in_foreach_calls
   info - Don't invoke 'print' in production code - lib\service\fire_store_utils.dart:2295:7 - avoid_print
   info - Don't invoke 'print' in production code - lib\service\fire_store_utils.dart:2375:11 - avoid_print
   info - Don't invoke 'print' in production code - lib\service\fire_store_utils.dart:2504:7 - avoid_print
   info - Don't invoke 'print' in production code - lib\service\fire_store_utils.dart:2583:9 - avoid_print
   info - Don't invoke 'print' in production code - lib\service\fire_store_utils.dart:2608:7 - avoid_print
   info - Don't invoke 'print' in production code - lib\service\fire_store_utils.dart:2615:9 - avoid_print
   info - Don't invoke 'print' in production code - lib\service\fire_store_utils.dart:2621:7 - avoid_print
   info - Don't invoke 'print' in production code - lib\service\fire_store_utils.dart:2642:15 - avoid_print
   info - Don't invoke 'print' in production code - lib\service\fire_store_utils.dart:2643:15 - avoid_print
   info - Don't invoke 'print' in production code - lib\service\fire_store_utils.dart:2660:11 - avoid_print
   info - Don't invoke 'print' in production code - lib\service\fire_store_utils.dart:2661:11 - avoid_print
   info - Don't invoke 'print' in production code - lib\service\fire_store_utils.dart:2879:13 - avoid_print
   info - Don't invoke 'print' in production code - lib\service\fire_store_utils.dart:2898:15 - avoid_print
   info - Don't invoke 'print' in production code - lib\service\fire_store_utils.dart:2899:15 - avoid_print
   info - Don't invoke 'print' in production code - lib\service\fire_store_utils.dart:2921:15 - avoid_print
   info - Don't invoke 'print' in production code - lib\service\fire_store_utils.dart:2922:15 - avoid_print
   info - Don't invoke 'print' in production code - lib\service\fire_store_utils.dart:2962:7 - avoid_print
   info - Don't invoke 'print' in production code - lib\service\fire_store_utils.dart:2980:7 - avoid_print
   info - Don't invoke 'print' in production code - lib\service\fire_store_utils.dart:3487:7 - avoid_print
   info - Don't invoke 'print' in production code - lib\service\fire_store_utils.dart:3570:7 - avoid_print
   info - Don't invoke 'print' in production code - lib\service\fire_store_utils.dart:3609:11 - avoid_print
   info - Don't invoke 'print' in production code - lib\service\fire_store_utils.dart:3633:11 - avoid_print
   info - Don't invoke 'print' in production code - lib\service\fire_store_utils.dart:3650:7 - avoid_print
   info - Don't invoke 'print' in production code - lib\service\fire_store_utils.dart:3651:7 - avoid_print
   info - Don't invoke 'print' in production code - lib\service\fire_store_utils.dart:3666:7 - avoid_print
   info - Don't invoke 'print' in production code - lib\service\fire_store_utils.dart:3667:7 - avoid_print
   info - Don't invoke 'print' in production code - lib\service\fire_store_utils.dart:3682:7 - avoid_print
   info - Don't invoke 'print' in production code - lib\service\fire_store_utils.dart:3683:7 - avoid_print
   info - Don't invoke 'print' in production code - lib\service\fire_store_utils.dart:3696:7 - avoid_print
   info - Don't invoke 'print' in production code - lib\service\fire_store_utils.dart:3697:7 - avoid_print
   info - Don't invoke 'print' in production code - lib\service\fire_store_utils.dart:3713:7 - avoid_print
   info - Don't invoke 'print' in production code - lib\service\fire_store_utils.dart:3714:7 - avoid_print
   info - Don't invoke 'print' in production code - lib\service\fire_store_utils.dart:3743:7 - avoid_print
   info - Don't invoke 'print' in production code - lib\service\fire_store_utils.dart:3763:15 - avoid_print
   info - Don't invoke 'print' in production code - lib\service\fire_store_utils.dart:3764:15 - avoid_print
   info - Don't invoke 'print' in production code - lib\service\fire_store_utils.dart:3789:15 - avoid_print
   info - Don't invoke 'print' in production code - lib\service\fire_store_utils.dart:3790:15 - avoid_print
   info - Don't invoke 'print' in production code - lib\service\fire_store_utils.dart:3828:7 - avoid_print
   info - Don't invoke 'print' in production code - lib\service\fire_store_utils.dart:3861:11 - avoid_print
   info - Don't invoke 'print' in production code - lib\service\fire_store_utils.dart:3913:11 - avoid_print
   info - Don't invoke 'print' in production code - lib\service\fire_store_utils.dart:3916:11 - avoid_print
   info - Don't invoke 'print' in production code - lib\service\fire_store_utils.dart:3936:11 - avoid_print
   info - Don't invoke 'print' in production code - lib\service\fire_store_utils.dart:3969:7 - avoid_print
   info - Don't invoke 'print' in production code - lib\service\fire_store_utils.dart:3985:7 - avoid_print
   info - Don't invoke 'print' in production code - lib\service\fire_store_utils.dart:4007:7 - avoid_print
   info - Don't invoke 'print' in production code - lib\service\fire_store_utils.dart:4027:19 - avoid_print
   info - Don't invoke 'print' in production code - lib\service\fire_store_utils.dart:4040:11 - avoid_print
   info - Don't invoke 'print' in production code - lib\service\fire_store_utils.dart:4064:9 - avoid_print
   info - Don't invoke 'print' in production code - lib\service\fire_store_utils.dart:4088:9 - avoid_print
   info - The imported package 'http' isn't a dependency of the importing package - lib\service\send_notification.dart:6:8 - depend_on_referenced_packages
   info - Don't invoke 'print' in production code - lib\service\send_notification.dart:28:5 - avoid_print
   info - Don't invoke 'print' in production code - lib\service\send_notification.dart:104:7 - avoid_print
   info - Unnecessary 'const' keyword - lib\themes\app_them_data.dart:205:35 - unnecessary_const
   info - 'withOpacity' is deprecated and shouldn't be used. Use .withValues() to avoid precision loss - lib\themes\easy_loading_config.dart:18:32 - deprecated_member_use
   info - The import of 'package:get/get_core/src/get_main.dart' is unnecessary because all of the used elements are also provided by the import of 'package:get/get.dart' - lib\utils\notification_service.dart:14:8 - unnecessary_import
   info - The imported package 'rxdart' isn't a dependency of the importing package - lib\widget\geoflutterfire\src\collection\base.dart:5:8 - depend_on_referenced_packages
   info - Missing type annotation - lib\widget\geoflutterfire\src\collection\base.dart:48:23 - strict_top_level_inference
   info - Missing type annotation - lib\widget\geoflutterfire\src\utils\math.dart:34:21 - strict_top_level_inference
   info - Missing type annotation - lib\widget\geoflutterfire\src\utils\math.dart:34:35 - strict_top_level_inference
   info - Missing type annotation - lib\widget\geoflutterfire\src\utils\math.dart:34:50 - strict_top_level_inference
   info - The imported package 'http' isn't a dependency of the importing package - lib\widget\osm_map\map_controller.dart:6:8 - depend_on_referenced_packages
   info - Don't invoke 'print' in production code - lib\widget\osm_map\map_picker_page.dart:139:27 - avoid_print
   info - Don't use 'BuildContext's across async gaps - lib\widget\permission_dialog.dart:51:39 - use_build_context_synchronously
   info - 'desiredAccuracy' is deprecated and shouldn't be used. use settings parameter with AndroidSettings, AppleSettings, WebSettings, or LocationSettings - lib\widget\place_picker\location_controller.dart:37:63 - deprecated_member_use
   info - Don't invoke 'print' in production code - lib\widget\place_picker\location_controller.dart:46:7 - avoid_print
   info - Don't invoke 'print' in production code - lib\widget\place_picker\location_controller.dart:61:7 - avoid_print
   info - Don't invoke 'print' in production code - lib\widget\place_picker\location_controller.dart:77:7 - avoid_print
   info - The imported package 'rxdart' isn't a dependency of the importing package - lib\widget\story_view\controller\story_controller.dart:1:8 - depend_on_referenced_packages
   info - The imported package 'flutter_cache_manager' isn't a dependency of the importing package - lib\widget\story_view\widgets\story_image.dart:5:8 - depend_on_referenced_packages
   info - The imported package 'flutter_cache_manager' isn't a dependency of the importing package - lib\widget\story_view\widgets\story_video.dart:4:8 - depend_on_referenced_packages
   info - The imported package 'collection' isn't a dependency of the importing package - lib\widget\story_view\widgets\story_view.dart:4:8 - depend_on_referenced_packages
   info - 'red' is deprecated and shouldn't be used. Use (*.r * 255.0).round().clamp(0, 255) - lib\widget\story_view\widgets\story_view.dart:64:23 - deprecated_member_use
   info - 'green' is deprecated and shouldn't be used. Use (*.g * 255.0).round().clamp(0, 255) - lib\widget\story_view\widgets\story_view.dart:65:23 - deprecated_member_use
   info - 'blue' is deprecated and shouldn't be used. Use (*.b * 255.0).round().clamp(0, 255) - lib\widget\story_view\widgets\story_view.dart:66:23 - deprecated_member_use
   info - 'withOpacity' is deprecated and shouldn't be used. Use .withValues() to avoid precision loss - lib\widget\story_view\widgets\story_view.dart:831:50 - deprecated_member_use
   info - 'withOpacity' is deprecated and shouldn't be used. Use .withValues() to avoid precision loss - lib\widget\story_view\widgets\story_view.dart:835:40 - deprecated_member_use
   info - Missing type annotation - lib\widget\story_view\widgets\story_view.dart:871:26 - strict_top_level_inference
   info - Missing type annotation - lib\widget\story_view\widgets\story_view.dart:871:32 - strict_top_level_inference
   info - 'VideoPlayerController.network' is deprecated and shouldn't be used. Use VideoPlayerController.networkUrl instead - lib\widget\video_widget.dart:27:11 - deprecated_member_use
   info - 'VideoPlayerController.network' is deprecated and shouldn't be used. Use VideoPlayerController.networkUrl instead - lib\widget\video_widget.dart:104:11 - deprecated_member_use

flutter : 606 issues found. (ran in 4.4s)
At line:1 char:15
+ $analyzeLog = flutter analyze 2>&1
+               ~~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : NotSpecified: (606 issues found. (ran in 4.4s):String) [], RemoteException
    + FullyQualifiedErrorId : NativeCommandError
 

TEXT_END

## Flutter Build
TEXT_START
Running Gradle task 'assembleDebug'...                          
flutter : lib/screen_ui/multi_vendor_service/restaurant_details_screen/restaurant_details_screen.dart:311:46: Error: Expected an 
identifier, but got '('.
At line:1 char:13
+ $buildLog = flutter build apk --debug 2>&1
+             ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : NotSpecified: (lib/screen_ui/m...r, but got '('.:String) [], RemoteException
    + FullyQualifiedErrorId : NativeCommandError
 
Try inserting an identifier before '('.
                                  controller.(vendorModel.value.photos ?? []).length,
                                             ^
lib/screen_ui/multi_vendor_service/restaurant_details_screen/restaurant_details_screen.dart:350:42: Error: Expected an identifier, 
but got '('.
Try inserting an identifier before '('.
                              controller.(vendorModel.value.photos ?? []).length,
                                         ^
lib/screen_ui/multi_vendor_service/dine_in_screeen/dine_in_details_screen.dart:134:53: Error: Expected an identifier, but got '('.
Try inserting an identifier before '('.
                              itemCount: controller.(vendorModel.value.photos ?? []).length,
                                                    ^
lib/screen_ui/multi_vendor_service/dine_in_screeen/dine_in_details_screen.dart:161:64: Error: Expected an identifier, but got '('.
Try inserting an identifier before '('.
                            children: List.generate(controller.(vendorModel.value.photos ?? []).length, (index) {
                                                               ^
Target kernel_snapshot_program failed: Exception


FAILURE: Build failed with an exception.

* What went wrong:
Execution failed for task ':app:compileFlutterBuildDebug'.
> Process 'command 'C:\src\Flutter\bin\flutter.bat'' finished with non-zero exit value 1

* Try:
> Run with --stacktrace option to get the stack trace.
> Run with --info or --debug option to get more log output.
> Run with --scan to get full insights.
> Get more help at https://help.gradle.org.

BUILD FAILED in 1m 49s
Running Gradle task 'assembleDebug'...                            110.3s
Gradle task assembleDebug failed with exit code 1

TEXT_END

APK_NOT_FOUND: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\build\app\outputs\flutter-apk\app-debug.apk
STATUS: SERVICE_54A_BUILD_APK_NOT_FOUND