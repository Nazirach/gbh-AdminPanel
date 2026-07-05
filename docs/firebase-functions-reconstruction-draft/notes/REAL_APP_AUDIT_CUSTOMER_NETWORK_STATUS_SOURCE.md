# AUDIT CUSTOMER NETWORK STATUS SOURCE

Generated: 06/29/2026 01:49:01

Mode: read-only. No patch.

## FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\constant\constant.dart
```dart
  762:       for (var p in e.problems) {
  763:         print('Problem: ${p.code}: ${p.msg}');
  764:       }
  765:     } catch (e) {
  766:       // Catches SocketException (DNS failure, no network) and any other errors
  767:       print('sendMail failed: $e');
  768:     }
  769: 
  770:     // var connection = PersistentConnection(smtpServer);
  771:     //
  772:     // // Send the first message
  773:     // await connection.send(message);
  774:   }

```

## FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_booking_controller.dart
```dart
    2: import 'dart:developer';
    3: import 'dart:io';
    4: import 'dart:math' as math;
    5: import 'dart:math' as maths;
    6: import 'package:cached_network_image/cached_network_image.dart';
    7: import 'package:cloud_firestore/cloud_firestore.dart';
    8: import 'package:customer/constant/collection_name.dart';
    9: import 'package:customer/constant/constant.dart';
   10: import 'package:customer/models/cab_order_model.dart';
   11: import 'package:customer/models/coupon_model.dart';
   12: import 'package:customer/models/payment_model/cod_setting_model.dart';
   13: import 'package:customer/models/payment_model/flutter_wave_model.dart';
   14: import 'package:customer/models/payment_model/mercado_pago_model.dart';

  269:               point: latlong.LatLng(driverLat, driverLng),
  270:               width: 45,
  271:               height: 45,
  272:               rotate: true,
  273:               child: CachedNetworkImage(
  274:                 width: 50,
  275:                 height: 50,
  276:                 imageUrl: Constant.sectionConstantModel!.markerIcon.toString(),
  277:                 placeholder: (context, url) => Constant.loader(),
  278:                 errorWidget: (context, url, error) => SizedBox(width: 30, height: 30, child: CircularProgressIndicator(strokeWidth: 2)),
  279:               ),
  280:             ),
  281:           ]);

  286:               point: latlong.LatLng(driverLat, driverLng),
  287:               width: 45,
  288:               height: 45,
  289:               rotate: true,
  290:               child: CachedNetworkImage(
  291:                 width: 50,
  292:                 height: 50,
  293:                 imageUrl: Constant.sectionConstantModel!.markerIcon.toString(),
  294:                 placeholder: (context, url) => Constant.loader(),
  295:                 errorWidget: (context, url, error) => SizedBox(width: 30, height: 30, child: CircularProgressIndicator(strokeWidth: 2)),
  296:               ),
  297:             ),
  298:           ]);

```

## FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart
```dart
    3: import 'dart:io';
    4: import 'dart:math' as math;
    5: import 'dart:math' as maths;
    6: 
    7: import 'package:cached_network_image/cached_network_image.dart';
    8: import 'package:cloud_firestore/cloud_firestore.dart';
    9: import 'package:customer/constant/collection_name.dart';
   10: import 'package:customer/constant/constant.dart';
   11: import 'package:customer/models/cab_order_model.dart';
   12: import 'package:customer/models/coupon_model.dart';
   13: import 'package:customer/models/payment_model/cod_setting_model.dart';
   14: import 'package:customer/models/payment_model/flutter_wave_model.dart';
   15: import 'package:customer/models/payment_model/mercado_pago_model.dart';

  280:               point: latlong.LatLng(driverLat, driverLng),
  281:               width: 45,
  282:               height: 45,
  283:               rotate: true,
  284:               child: CachedNetworkImage(
  285:                 width: 50,
  286:                 height: 50,
  287:                 imageUrl: Constant.sectionConstantModel!.markerIcon.toString(),
  288:                 placeholder: (context, url) => Constant.loader(),
  289:                 errorWidget: (context, url, error) => SizedBox(width: 30, height: 30, child: CircularProgressIndicator(strokeWidth: 2)),
  290:               ),
  291:             ),
  292:           ]);

  297:               point: latlong.LatLng(driverLat, driverLng),
  298:               width: 45,
  299:               height: 45,
  300:               rotate: true,
  301:               child: CachedNetworkImage(
  302:                 width: 50,
  303:                 height: 50,
  304:                 imageUrl: Constant.sectionConstantModel!.markerIcon.toString(),
  305:                 placeholder: (context, url) => Constant.loader(),
  306:                 errorWidget: (context, url, error) => SizedBox(width: 30, height: 30, child: CircularProgressIndicator(strokeWidth: 2)),
  307:               ),
  308:             ),
  309:           ]);

```

## FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\cab_service_screens\cab_booking_screen.dart
```dart
    1: import 'dart:io';
    2: import 'package:cached_network_image/cached_network_image.dart';
    3: import 'package:customer/models/coupon_model.dart';
    4: import 'package:customer/models/vehicle_type.dart';
    5: import 'package:customer/payment/createRazorPayOrderModel.dart';
    6: import 'package:customer/payment/rozorpayConroller.dart';
    7: import 'package:customer/screen_ui/cab_service_screens/cab_coupon_code_screen.dart';
    8: import 'package:customer/screen_ui/multi_vendor_service/chat_screens/chat_screen.dart';
    9: import 'package:customer/screen_ui/multi_vendor_service/wallet_screen/wallet_screen.dart';
   10: import 'package:customer/themes/responsive.dart';

    8: import 'package:customer/screen_ui/multi_vendor_service/chat_screens/chat_screen.dart';
    9: import 'package:customer/screen_ui/multi_vendor_service/wallet_screen/wallet_screen.dart';
   10: import 'package:customer/themes/responsive.dart';
   11: import 'package:customer/themes/round_button_border.dart';
   12: import 'package:customer/utils/network_image_widget.dart';
   13: import 'package:customer/utils/utils.dart';
   14: import 'package:customer/widget/my_separator.dart';
   15: import 'package:dotted_border/dotted_border.dart';
   16: import 'package:flutter/material.dart';
   17: import 'package:flutter_svg/flutter_svg.dart';
   18: import 'package:get/get.dart';
   19: import 'package:google_maps_flutter/google_maps_flutter.dart';
   20: import 'package:flutter_map/flutter_map.dart' as flutterMap;

  352:                                   child: Row(
  353:                                     children: [
  354:                                       ClipRRect(
  355:                                         //borderRadius: BorderRadius.circular(10),
  356:                                         child: CachedNetworkImage(
  357:                                           imageUrl: vehicleType.vehicleIcon.toString(),
  358:                                           height: 60,
  359:                                           width: 60,
  360:                                           imageBuilder:
  361:                                               (context, imageProvider) =>
  362:                                                   Container(decoration: BoxDecoration(borderRadius: BorderRadius.circular(10), image: DecorationImage(image: imageProvider, fit: BoxFit.cover))),
  363:                                           placeholder: (context, url) => Center(child: CircularProgressIndicator.adaptive(valueColor: AlwaysStoppedAnimation(AppThemeData.primary300))),
  364:                                           errorWidget: (context, url, error) => ClipRRect(borderRadius: BorderRadius.circular(20), child: Image.network(Constant.placeHolderImage, fit: BoxFit.cover)),

  360:                                           imageBuilder:
  361:                                               (context, imageProvider) =>
  362:                                                   Container(decoration: BoxDecoration(borderRadius: BorderRadius.circular(10), image: DecorationImage(image: imageProvider, fit: BoxFit.cover))),
  363:                                           placeholder: (context, url) => Center(child: CircularProgressIndicator.adaptive(valueColor: AlwaysStoppedAnimation(AppThemeData.primary300))),
  364:                                           errorWidget: (context, url, error) => ClipRRect(borderRadius: BorderRadius.circular(20), child: Image.network(Constant.placeHolderImage, fit: BoxFit.cover)),
  365:                                           fit: BoxFit.cover,
  366:                                         ),
  367:                                       ),
  368:                                       Expanded(
  369:                                         child: Padding(
  370:                                           padding: const EdgeInsets.symmetric(horizontal: 10),
  371:                                           child: Column(
  372:                                             crossAxisAlignment: CrossAxisAlignment.start,

 1170:                               crossAxisAlignment: CrossAxisAlignment.start,
 1171:                               children: [
 1172:                                 ClipRRect(
 1173:                                   borderRadius: BorderRadiusGeometry.circular(10),
 1174:                                   child: NetworkImageWidget(imageUrl: controller.currentOrder.value.driver?.profilePictureURL ?? '', height: 70, width: 70, borderRadius: 35),
 1175:                                 ),
 1176:                                 SizedBox(width: 10),
 1177:                                 Expanded(
 1178:                                   child: Column(
 1179:                                     mainAxisAlignment: MainAxisAlignment.start,
 1180:                                     crossAxisAlignment: CrossAxisAlignment.start,
 1181:                                     children: [
 1182:                                       Text(

```

## FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\cab_service_screens\cab_home_screen.dart
```dart
    5: import 'package:customer/screen_ui/auth_screens/login_screen.dart';
    6: import 'package:customer/screen_ui/service_home_screen/service_list_screen.dart';
    7: import 'package:customer/themes/app_them_data.dart';
    8: import 'package:customer/themes/responsive.dart';
    9: import 'package:customer/utils/network_image_widget.dart';
   10: import 'package:flutter/material.dart';
   11: import 'package:flutter_svg/flutter_svg.dart';
   12: import 'package:get/get.dart';
   13: 
   14: import 'Intercity_home_screen.dart';
   15: import 'cab_booking_screen.dart';
   16: 
   17: class CabHomeScreen extends StatelessWidget {

  201:                 itemBuilder: (context, index) {
  202:                   final banner = bannerList[index];
  203:                   return ClipRRect(
  204:                     borderRadius: BorderRadius.circular(15),
  205:                     child: SizedBox(width: MediaQuery.of(context).size.width * 0.8, child: NetworkImageWidget(imageUrl: banner.photo ?? '', fit: BoxFit.cover)),
  206:                   );
  207:                 },
  208:               ),
  209:             ),
  210:             const SizedBox(height: 8),
  211:             Obx(() {
  212:               return Row(
  213:                 children: List.generate(bannerList.length, (index) {

```

## FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\cab_service_screens\cab_order_details.dart
```dart
   15: import 'package:latlong2/latlong.dart' as osm;
   16: import '../../themes/round_button_border.dart';
   17: import '../../themes/round_button_fill.dart';
   18: import '../../themes/show_toast_dialog.dart';
   19: import '../../utils/network_image_widget.dart';
   20: import '../multi_vendor_service/chat_screens/chat_screen.dart';
   21: import 'cab_review_screen.dart';
   22: import 'complain_screen.dart';
   23: 
   24: class CabOrderDetails extends StatelessWidget {
   25:   const CabOrderDetails({super.key});
   26: 
   27:   @override

  250:                                                 width: 52,
  251:                                                 height: 52,
  252:                                                 child: ClipRRect(
  253:                                                   borderRadius: BorderRadiusGeometry.circular(10),
  254:                                                   child: NetworkImageWidget(imageUrl: controller.cabOrder.value.driver?.profilePictureURL ?? '', height: 70, width: 70, borderRadius: 35),
  255:                                                 ),
  256:                                               ),
  257:                                               SizedBox(width: 20),
  258:                                               Column(
  259:                                                 crossAxisAlignment: CrossAxisAlignment.start,
  260:                                                 children: [
  261:                                                   Text(
  262:                                                     controller.cabOrder.value.driver?.fullName() ?? '',

```

## FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\cab_service_screens\cab_review_screen.dart
```dart
    6: import '../../controllers/theme_controller.dart';
    7: import '../../themes/app_them_data.dart';
    8: import '../../themes/round_button_fill.dart';
    9: import '../../themes/text_field_widget.dart';
   10: import '../../utils/network_image_widget.dart';
   11: 
   12: class CabReviewScreen extends StatelessWidget {
   13:   const CabReviewScreen({super.key});
   14: 
   15:   @override
   16:   Widget build(BuildContext context) {
   17:     final themeController = Get.find<ThemeController>();
   18:     final isDark = themeController.isDark.value;

  161:                                 boxShadow: [BoxShadow(color: Colors.grey.withOpacity(0.15), blurRadius: 8, spreadRadius: 6)],
  162:                               ),
  163:                               child: ClipRRect(
  164:                                 borderRadius: BorderRadius.circular(60),
  165:                                 child: NetworkImageWidget(imageUrl: controller.order.value?.driver?.profilePictureURL ?? '', fit: BoxFit.cover, height: 110, width: 110),
  166:                               ),
  167:                             ),
  168:                           ),
  169:                         ],
  170:                       ),
  171:                     ),
  172:           ),
  173:         );

```

## FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\cab_service_screens\Intercity_home_screen.dart
```dart
    1: import 'package:cached_network_image/cached_network_image.dart';
    2: import 'package:customer/controllers/Intercity_home_controller.dart';
    3: import 'package:customer/models/coupon_model.dart';
    4: import 'package:customer/models/vehicle_type.dart';
    5: import 'package:customer/payment/createRazorPayOrderModel.dart';
    6: import 'package:customer/payment/rozorpayConroller.dart';
    7: import 'package:customer/screen_ui/cab_service_screens/cab_coupon_code_screen.dart';
    8: import 'package:customer/screen_ui/multi_vendor_service/wallet_screen/wallet_screen.dart';
    9: import 'package:customer/screen_ui/service_home_screen/service_list_screen.dart';

    8: import 'package:customer/screen_ui/multi_vendor_service/wallet_screen/wallet_screen.dart';
    9: import 'package:customer/screen_ui/service_home_screen/service_list_screen.dart';
   10: import 'package:customer/themes/responsive.dart';
   11: import 'package:customer/themes/round_button_border.dart';
   12: import 'package:customer/utils/network_image_widget.dart';
   13: import 'package:customer/utils/utils.dart';
   14: import 'package:customer/widget/my_separator.dart';
   15: import 'package:dotted_border/dotted_border.dart';
   16: import 'package:flutter/material.dart';
   17: import 'package:flutter_svg/flutter_svg.dart';
   18: import 'package:geocoding/geocoding.dart' as get_cord_address;
   19: import 'package:get/get.dart';
   20: import 'package:google_maps_flutter/google_maps_flutter.dart';

  287:                           child: Padding(
  288:                             padding: const EdgeInsets.only(right: 10),
  289:                             child: Stack(
  290:                               children: [
  291:                                 CachedNetworkImage(
  292:                                   imageUrl:
  293:                                       (controller.popularDestination[index].image != null && controller.popularDestination[index].image!.isNotEmpty)
  294:                                           ? controller.popularDestination[index].image!
  295:                                           : Constant.placeHolderImage,
  296:                                   height: 160,
  297:                                   width: 120,
  298:                                   imageBuilder:
  299:                                       (context, imageProvider) =>

  300:                                           Container(decoration: BoxDecoration(borderRadius: BorderRadius.circular(10), image: DecorationImage(image: imageProvider, fit: BoxFit.cover))),
  301:                                   placeholder: (context, url) => Center(child: CircularProgressIndicator.adaptive(valueColor: AlwaysStoppedAnimation(AppThemeData.primary300))),
  302:                                   errorWidget:
  303:                                       (context, url, error) =>
  304:                                           ClipRRect(borderRadius: BorderRadius.circular(10), child: Image.network(Constant.placeHolderImage, fit: BoxFit.cover, cacheHeight: 80, cacheWidth: 80)),
  305:                                   fit: BoxFit.cover,
  306:                                 ),
  307:                                 Positioned(
  308:                                   left: 5,
  309:                                   top: 80,
  310:                                   child: Text(controller.popularDestination[index].title.toString(), style: AppThemeData.boldTextStyle(fontSize: 15, color: AppThemeData.surface)),
  311:                                 ),
  312:                               ],

  409:                                   child: Row(
  410:                                     children: [
  411:                                       ClipRRect(
  412:                                         //borderRadius: BorderRadius.circular(10),
  413:                                         child: CachedNetworkImage(
  414:                                           imageUrl: vehicleType.vehicleIcon.toString(),
  415:                                           height: 60,
  416:                                           width: 60,
  417:                                           imageBuilder:
  418:                                               (context, imageProvider) =>
  419:                                                   Container(decoration: BoxDecoration(borderRadius: BorderRadius.circular(10), image: DecorationImage(image: imageProvider, fit: BoxFit.cover))),
  420:                                           placeholder: (context, url) => Center(child: CircularProgressIndicator.adaptive(valueColor: AlwaysStoppedAnimation(AppThemeData.primary300))),
  421:                                           errorWidget: (context, url, error) => ClipRRect(borderRadius: BorderRadius.circular(20), child: Image.network(Constant.userPlaceHolder, fit: BoxFit.cover)),

  417:                                           imageBuilder:
  418:                                               (context, imageProvider) =>
  419:                                                   Container(decoration: BoxDecoration(borderRadius: BorderRadius.circular(10), image: DecorationImage(image: imageProvider, fit: BoxFit.cover))),
  420:                                           placeholder: (context, url) => Center(child: CircularProgressIndicator.adaptive(valueColor: AlwaysStoppedAnimation(AppThemeData.primary300))),
  421:                                           errorWidget: (context, url, error) => ClipRRect(borderRadius: BorderRadius.circular(20), child: Image.network(Constant.userPlaceHolder, fit: BoxFit.cover)),
  422:                                           fit: BoxFit.cover,
  423:                                         ),
  424:                                       ),
  425:                                       Expanded(
  426:                                         child: Padding(
  427:                                           padding: const EdgeInsets.symmetric(horizontal: 10),
  428:                                           child: Column(
  429:                                             crossAxisAlignment: CrossAxisAlignment.start,

 1224:                           crossAxisAlignment: CrossAxisAlignment.start,
 1225:                           children: [
 1226:                             ClipRRect(
 1227:                               borderRadius: BorderRadiusGeometry.circular(10),
 1228:                               child: NetworkImageWidget(imageUrl: controller.currentOrder.value.driver?.profilePictureURL ?? '', height: 70, width: 70, borderRadius: 35),
 1229:                             ),
 1230:                             SizedBox(width: 10),
 1231:                             Expanded(
 1232:                               child: Column(
 1233:                                 mainAxisAlignment: MainAxisAlignment.start,
 1234:                                 crossAxisAlignment: CrossAxisAlignment.start,
 1235:                                 children: [
 1236:                                   Text(

```

## FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\ecommarce\all_brand_product_screen.dart
```dart
    6: import 'package:customer/screen_ui/multi_vendor_service/restaurant_details_screen/restaurant_details_screen.dart';
    7: import 'package:customer/service/fire_store_utils.dart';
    8: import 'package:customer/themes/app_them_data.dart';
    9: import 'package:customer/themes/responsive.dart';
   10: import 'package:customer/utils/network_image_widget.dart';
   11: import 'package:flutter/material.dart';
   12: import 'package:get/get.dart';
   13: 
   14: class AllBrandProductScreen extends StatelessWidget {
   15:   const AllBrandProductScreen({super.key});
   16: 
   17:   @override
   18:   Widget build(BuildContext context) {

   84:                                     borderRadius: BorderRadius.circular(10),
   85:                                     child: SizedBox(
   86:                                       height: 90,
   87:                                       width: Responsive.width(100, context),
   88:                                       child: NetworkImageWidget(imageUrl: productModel.photo.toString(), fit: BoxFit.cover),
   89:                                     ),
   90:                                   ),
   91:                                   Column(
   92:                                     mainAxisAlignment: MainAxisAlignment.start,
   93:                                     crossAxisAlignment: CrossAxisAlignment.start,
   94:                                     children: [
   95:                                       Text(
   96:                                         productModel.name!.capitalizeString(),

```

## FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\ecommarce\all_category_product_screen.dart
```dart
    6: import 'package:customer/screen_ui/multi_vendor_service/restaurant_details_screen/restaurant_details_screen.dart';
    7: import 'package:customer/service/fire_store_utils.dart';
    8: import 'package:customer/themes/app_them_data.dart';
    9: import 'package:customer/themes/responsive.dart';
   10: import 'package:customer/utils/network_image_widget.dart';
   11: import 'package:flutter/material.dart';
   12: import 'package:get/get.dart';
   13: 
   14: class AllCategoryProductScreen extends StatelessWidget {
   15:   const AllCategoryProductScreen({super.key});
   16: 
   17:   @override
   18:   Widget build(BuildContext context) {

   84:                                     borderRadius: BorderRadius.circular(10),
   85:                                     child: SizedBox(
   86:                                       height: 90,
   87:                                       width: Responsive.width(100, context),
   88:                                       child: NetworkImageWidget(imageUrl: productModel.photo.toString(), fit: BoxFit.cover),
   89:                                     ),
   90:                                   ),
   91:                                   Column(
   92:                                     mainAxisAlignment: MainAxisAlignment.start,
   93:                                     crossAxisAlignment: CrossAxisAlignment.start,
   94:                                     children: [
   95:                                       Text(
   96:                                         productModel.name!.capitalizeString(),

```

## FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\ecommarce\home_e_commerce_screen.dart
```dart
   27: import 'package:customer/themes/responsive.dart';
   28: import 'package:customer/themes/round_button_border.dart';
   29: import 'package:customer/themes/show_toast_dialog.dart';
   30: import 'package:customer/themes/text_field_widget.dart';
   31: import 'package:customer/utils/network_image_widget.dart';
   32: import 'package:customer/widget/osm_map/map_picker_page.dart';
   33: import 'package:customer/widget/place_picker/location_picker_screen.dart';
   34: import 'package:customer/widget/place_picker/selected_location_model.dart';
   35: import 'package:customer/widget/video_widget.dart';
   36: import 'package:flutter/material.dart';
   37: import 'package:flutter_svg/flutter_svg.dart';
   38: import 'package:shimmer/shimmer.dart';
   39: import 'package:geocoding/geocoding.dart';

  278:                                       child: Column(
  279:                                         mainAxisAlignment: MainAxisAlignment.start,
  280:                                         crossAxisAlignment: CrossAxisAlignment.center,
  281:                                         children: [
  282:                                           NetworkImageWidget(imageUrl: vendorCategoryModel.photo.toString(), height: 60, width: 60, fit: BoxFit.cover),
  283:                                           const SizedBox(height: 5),
  284:                                           Text(
  285:                                             vendorCategoryModel.title.toString(),
  286:                                             textAlign: TextAlign.center,
  287:                                             style: AppThemeData.mediumTextStyle(color: isDark ? AppThemeData.greyDark800 : AppThemeData.grey800, fontSize: 14),
  288:                                           ),
  289:                                         ],
  290:                                       ),

  421:                                                 side: BorderSide(width: 1, strokeAlign: BorderSide.strokeAlignOutside, color: isDark ? AppThemeData.grey800 : AppThemeData.grey100),
  422:                                                 borderRadius: BorderRadius.circular(10),
  423:                                               ),
  424:                                             ),
  425:                                             child: Padding(padding: const EdgeInsets.all(10), child: ClipOval(child: NetworkImageWidget(imageUrl: brandModel.photo.toString(), fit: BoxFit.cover))),
  426:                                           ),
  427:                                           SizedBox(height: 5),
  428:                                           Text(
  429:                                             '${brandModel.title}',
  430:                                             textAlign: TextAlign.center,
  431:                                             maxLines: 2,
  432:                                             style: AppThemeData.mediumTextStyle(color: isDark ? AppThemeData.grey50 : AppThemeData.grey900),
  433:                                           ),

  533:                                                                 borderRadius: BorderRadius.circular(10),
  534:                                                                 child: SizedBox(
  535:                                                                   height: 90,
  536:                                                                   width: Responsive.width(100, context),
  537:                                                                   child: NetworkImageWidget(imageUrl: productModel.photo.toString(), fit: BoxFit.cover),
  538:                                                                 ),
  539:                                                               ),
  540:                                                               Column(
  541:                                                                 mainAxisAlignment: MainAxisAlignment.start,
  542:                                                                 crossAxisAlignment: CrossAxisAlignment.start,
  543:                                                                 children: [
  544:                                                                   Text(
  545:                                                                     productModel.name!.capitalizeString(),

  704:                                       child: Padding(
  705:                                         padding: const EdgeInsets.only(bottom: 20),
  706:                                         child: Row(
  707:                                           children: [
  708:                                             ClipRRect(borderRadius: BorderRadius.circular(10), child: NetworkImageWidget(imageUrl: item.photo.toString(), height: 80, width: 130, fit: BoxFit.cover)),
  709:                                             SizedBox(width: 10),
  710:                                             Expanded(
  711:                                               child: Column(
  712:                                                 crossAxisAlignment: CrossAxisAlignment.start,
  713:                                                 children: [
  714:                                                   Text(item.title.toString(), style: AppThemeData.semiBoldTextStyle(color: isDark ? AppThemeData.greyDark900 : AppThemeData.grey900, fontSize: 16)),
  715:                                                   Row(
  716:                                                     children: [

  791:         crossAxisAlignment: CrossAxisAlignment.start,
  792:         children: [
  793:           ClipRRect(
  794:             borderRadius: BorderRadius.circular(10),
  795:             child: NetworkImageWidget(
  796:               height: 100,
  797:               width: double.infinity,
  798:               fit: BoxFit.cover,
  799:               imageUrl: item.photo != null && item.photo!.isNotEmpty ? item.photo.toString() : Constant.placeHolderImage.toString(),
  800:             ),
  801:           ),
  802:           SizedBox(height: 5),
  803:           Text(item.title.toString(), style: AppThemeData.semiBoldTextStyle(color: isDark ? AppThemeData.greyDark900 : AppThemeData.grey900, fontSize: 14)),

  895:                   }
  896:                 },
  897:                 child: Padding(
  898:                   padding: const EdgeInsets.only(right: 14),
  899:                   child: ClipRRect(borderRadius: const BorderRadius.all(Radius.circular(12)), child: NetworkImageWidget(imageUrl: bannerModel.photo.toString(), fit: BoxFit.cover)),
  900:                 ),
  901:               );
  902:             },
  903:           ),
  904:         ),
  905:         Padding(
  906:           padding: const EdgeInsets.symmetric(vertical: 10),
  907:           child: Row(

  982:                   }
  983:                 },
  984:                 child: Padding(
  985:                   padding: const EdgeInsets.only(right: 14),
  986:                   child: ClipRRect(borderRadius: const BorderRadius.all(Radius.circular(12)), child: NetworkImageWidget(imageUrl: bannerModel.photo.toString(), fit: BoxFit.cover)),
  987:                 ),
  988:               );
  989:             },
  990:           ),
  991:         ),
  992:         Padding(
  993:           padding: const EdgeInsets.symmetric(vertical: 10),
  994:           child: Row(

 1044:               children: [
 1045:                 model.type == 'restaurant_promotion'
 1046:                     ? ClipRRect(
 1047:                       borderRadius: BorderRadius.vertical(top: Radius.circular(16)),
 1048:                       child: NetworkImageWidget(imageUrl: model.coverImage ?? '', height: 135, width: double.infinity, fit: BoxFit.cover),
 1049:                     )
 1050:                     : VideoAdvWidget(url: model.video ?? '', height: 135, width: double.infinity),
 1051:                 if (model.type != 'video_promotion' && model.vendorId != null && (model.showRating == true || model.showReview == true))
 1052:                   Positioned(
 1053:                     bottom: 8,
 1054:                     right: 8,
 1055:                     child: FutureBuilder(
 1056:                       future: FireStoreUtils.getVendorById(model.vendorId!),

 1092:               child: Row(
 1093:                 crossAxisAlignment: CrossAxisAlignment.start,
 1094:                 children: [
 1095:                   if (model.type == 'restaurant_promotion')
 1096:                     ClipRRect(borderRadius: BorderRadius.circular(30), child: NetworkImageWidget(imageUrl: model.profileImage ?? '', height: 50, width: 50, fit: BoxFit.cover)),
 1097:                   SizedBox(width: 8),
 1098:                   Expanded(
 1099:                     child: Column(
 1100:                       crossAxisAlignment: CrossAxisAlignment.start,
 1101:                       children: [
 1102:                         Text(
 1103:                           model.title ?? '',
 1104:                           style: TextStyle(color: isDark ? AppThemeData.grey50 : AppThemeData.grey900, fontSize: 14, fontWeight: FontWeight.bold),

```

## FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\help_support_screen\help_support_screen.dart
```dart
    1: import 'dart:io';
    2: import 'package:cached_network_image/cached_network_image.dart';
    3: import 'package:customer/constant/collection_name.dart';
    4: import 'package:customer/constant/constant.dart';
    5: import 'package:customer/controllers/help_support_controller.dart';
    6: import 'package:customer/controllers/theme_controller.dart';
    7: import 'package:customer/models/conversation_model.dart';
    8: import 'package:customer/screen_ui/multi_vendor_service/chat_screens/ChatVideoContainer.dart';
    9: import 'package:customer/screen_ui/multi_vendor_service/chat_screens/full_screen_image_viewer.dart';
   10: import 'package:customer/screen_ui/multi_vendor_service/chat_screens/full_screen_video_viewer.dart';

   12: import 'package:customer/service/fire_store_utils.dart';
   13: import 'package:customer/themes/app_them_data.dart';
   14: import 'package:customer/themes/responsive.dart';
   15: import 'package:customer/themes/show_toast_dialog.dart';
   16: import 'package:customer/utils/network_image_widget.dart';
   17: import 'package:customer/utils/preferences.dart';
   18: import 'package:customer/widget/firebase_pagination/src/firestore_pagination.dart';
   19: import 'package:customer/widget/firebase_pagination/src/models/view_type.dart';
   20: import 'package:flutter/cupertino.dart';
   21: import 'package:flutter/material.dart';
   22: import 'package:get/get.dart';
   23: import 'package:image_picker/image_picker.dart';
   24: 

  209:                                         Get.to(FullScreenImageViewer(imageUrl: data.url!.url));
  210:                                       },
  211:                                       child: Hero(
  212:                                         tag: data.url!.url,
  213:                                         child: CachedNetworkImage(
  214:                                           imageUrl: data.url!.url,
  215:                                           placeholder: (context, url) => Constant.loader(),
  216:                                           errorWidget: (context, url, error) => const Icon(Icons.error),
  217:                                         ),
  218:                                       ),
  219:                                     ),
  220:                                   ],
  221:                                 ),

  233:                                     alignment: Alignment.center,
  234:                                     children: [
  235:                                       Hero(
  236:                                         tag: data.url!.url,
  237:                                         child: CachedNetworkImage(
  238:                                           imageUrl: data.videoThumbnail ?? '',
  239:                                           placeholder: (context, url) => Constant.loader(),
  240:                                           errorWidget: (context, url, error) => const Icon(Icons.error),
  241:                                         ),
  242:                                       ),
  243:                                       Icon(Icons.play_arrow, size: 50),
  244:                                     ],
  245:                                   ),

  249:                         Padding(
  250:                           padding: const EdgeInsets.only(left: 5),
  251:                           child: ClipRRect(
  252:                             borderRadius: BorderRadius.circular(60),
  253:                             child: NetworkImageWidget(
  254:                               height: Responsive.width(5, context),
  255:                               width: Responsive.width(5, context),
  256:                               imageUrl: controller.userModel.value.profilePictureURL.toString(),
  257:                               fit: BoxFit.cover,
  258:                             ),
  259:                           ),
  260:                         ),
  261:                       ],

  311:                                     Get.to(FullScreenImageViewer(imageUrl: data.url!.url));
  312:                                   },
  313:                                   child: Hero(
  314:                                     tag: data.url!.url,
  315:                                     child: CachedNetworkImage(imageUrl: data.url!.url, placeholder: (context, url) => Constant.loader(), errorWidget: (context, url, error) => const Icon(Icons.error)),
  316:                                   ),
  317:                                 ),
  318:                               ],
  319:                             ),
  320:                           ),
  321:                         )
  322:                         : ConstrainedBox(
  323:                           constraints: const BoxConstraints(minWidth: 50, maxWidth: 200),

  331:                                 alignment: Alignment.center,
  332:                                 children: [
  333:                                   Hero(
  334:                                     tag: data.url!.url,
  335:                                     child: CachedNetworkImage(
  336:                                       imageUrl: data.videoThumbnail ?? '',
  337:                                       placeholder: (context, url) => Constant.loader(),
  338:                                       errorWidget: (context, url, error) => const Icon(Icons.error),
  339:                                     ),
  340:                                   ),
  341:                                   Icon(Icons.play_arrow, size: 50),
  342:                                 ],
  343:                               ),

```

## FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\advertisement_screens\all_advertisement_screen.dart
```dart
    4: import 'package:customer/models/favourite_model.dart';
    5: import 'package:customer/models/vendor_model.dart';
    6: import 'package:customer/themes/app_them_data.dart';
    7: import 'package:customer/themes/responsive.dart';
    8: import 'package:customer/utils/network_image_widget.dart';
    9: import 'package:flutter/material.dart';
   10: import 'package:flutter_svg/svg.dart';
   11: import 'package:get/get.dart';
   12: 
   13: import '../../../controllers/theme_controller.dart';
   14: import '../../../service/fire_store_utils.dart';
   15: import '../../../themes/show_toast_dialog.dart';
   16: import '../../../widget/video_widget.dart';

   92:               children: [
   93:                 model.type == 'restaurant_promotion'
   94:                     ? ClipRRect(
   95:                       borderRadius: BorderRadius.vertical(top: Radius.circular(16)),
   96:                       child: NetworkImageWidget(imageUrl: model.coverImage ?? '', height: 150, width: double.infinity, fit: BoxFit.cover),
   97:                     )
   98:                     : VideoAdvWidget(url: model.video ?? '', height: 150, width: double.infinity),
   99:                 if (model.type != 'video_promotion' && model.vendorId != null && (model.showRating == true || model.showReview == true))
  100:                   Positioned(
  101:                     bottom: 8,
  102:                     right: 8,
  103:                     child: FutureBuilder(
  104:                       future: FireStoreUtils.getVendorById(model.vendorId!),

  140:               child: Row(
  141:                 crossAxisAlignment: CrossAxisAlignment.start,
  142:                 children: [
  143:                   if (model.type == 'restaurant_promotion')
  144:                     ClipRRect(borderRadius: BorderRadius.circular(30), child: NetworkImageWidget(imageUrl: model.profileImage ?? '', height: 50, width: 50, fit: BoxFit.cover)),
  145:                   SizedBox(width: 8),
  146:                   Expanded(
  147:                     child: Column(
  148:                       crossAxisAlignment: CrossAxisAlignment.start,
  149:                       children: [
  150:                         Text(
  151:                           model.title ?? '',
  152:                           style: TextStyle(color: isDark ? AppThemeData.grey50 : AppThemeData.grey900, fontSize: 16, fontWeight: FontWeight.bold),

```

## FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart
```dart
   11: import 'package:customer/themes/app_them_data.dart';
   12: import 'package:customer/themes/responsive.dart';
   13: import 'package:customer/themes/round_button_fill.dart';
   14: import 'package:customer/themes/text_field_widget.dart';
   15: import 'package:customer/utils/network_image_widget.dart';
   16: import 'package:flutter/material.dart';
   17: import 'package:flutter/services.dart';
   18: import 'package:flutter_svg/flutter_svg.dart';
   19: import 'package:get/get.dart';
   20: 
   21: import '../../../controllers/theme_controller.dart';
   22: import '../../../models/user_model.dart';
   23: import '../../../service/fire_store_utils.dart';

  140:                                             crossAxisAlignment: CrossAxisAlignment.center,
  141:                                             children: [
  142:                                               ClipRRect(
  143:                                                 borderRadius: const BorderRadius.all(Radius.circular(16)),
  144:                                                 child: NetworkImageWidget(
  145:                                                   imageUrl: cartProductModel.photo.toString(),
  146:                                                   height: Responsive.height(10, context),
  147:                                                   width: Responsive.width(20, context),
  148:                                                   fit: BoxFit.cover,
  149:                                                 ),
  150:                                               ),
  151:                                               const SizedBox(width: 10),
  152:                                               Expanded(

```

## FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\change langauge\change_language_screen.dart
```dart
    1: import 'dart:convert';
    2: import 'package:customer/constant/constant.dart';
    3: import 'package:customer/controllers/change_language_controller.dart';
    4: import 'package:customer/themes/app_them_data.dart';
    5: import 'package:customer/utils/network_image_widget.dart';
    6: import 'package:customer/utils/preferences.dart';
    7: import 'package:flutter/material.dart';
    8: import 'package:get/get.dart';
    9: import '../../../controllers/theme_controller.dart';
   10: import '../../../service/localization_service.dart';
   11: 
   12: class ChangeLanguageScreen extends StatelessWidget {
   13:   const ChangeLanguageScreen({super.key});

   57:                                           child: Container(
   58:                                             padding: const EdgeInsets.all(16),
   59:                                             child: Column(
   60:                                               children: [
   61:                                                 NetworkImageWidget(imageUrl: data.image.toString(), height: 80, width: 80),
   62:                                                 // SvgPicture.network(
   63:                                                 //   data.image.toString(),
   64:                                                 //   height: 80,
   65:                                                 //   width: 80,
   66:                                                 //   fit: BoxFit.contain,
   67:                                                 //   placeholderBuilder: (context) => const Center(child: CircularProgressIndicator(strokeWidth: 1.5)),
   68:                                                 // ),
   69:                                                 const SizedBox(height: 5),

   58:                                             padding: const EdgeInsets.all(16),
   59:                                             child: Column(
   60:                                               children: [
   61:                                                 NetworkImageWidget(imageUrl: data.image.toString(), height: 80, width: 80),
   62:                                                 // SvgPicture.network(
   63:                                                 //   data.image.toString(),
   64:                                                 //   height: 80,
   65:                                                 //   width: 80,
   66:                                                 //   fit: BoxFit.contain,
   67:                                                 //   placeholderBuilder: (context) => const Center(child: CircularProgressIndicator(strokeWidth: 1.5)),
   68:                                                 // ),
   69:                                                 const SizedBox(height: 5),
   70:                                                 Text(

```

## FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\chat_screens\chat_screen.dart
```dart
    6: import 'package:customer/models/conversation_model.dart';
    7: import 'package:customer/themes/app_them_data.dart';
    8: import 'package:customer/themes/show_toast_dialog.dart';
    9: import '../../../controllers/theme_controller.dart';
   10: import 'package:customer/utils/network_image_widget.dart';
   11: import 'package:flutter/cupertino.dart';
   12: import 'package:flutter/material.dart';
   13: import 'package:flutter_svg/flutter_svg.dart';
   14: import 'package:get/get.dart';
   15: import 'package:image_picker/image_picker.dart';
   16: import 'package:intl/intl.dart';
   17: import '../../../service/fire_store_utils.dart';
   18: import '../../../widget/firebase_pagination/src/fireStore_pagination.dart';

  174:                               GestureDetector(
  175:                                 onTap: () {
  176:                                   Get.to(FullScreenImageViewer(imageUrl: data.url!.url));
  177:                                 },
  178:                                 child: Hero(tag: data.url!.url, child: NetworkImageWidget(imageUrl: data.url!.url, height: 100, width: 100, fit: BoxFit.cover)),
  179:                               ),
  180:                             ],
  181:                           ),
  182:                         )
  183:                         : FloatingActionButton(
  184:                           mini: true,
  185:                           heroTag: data.id,
  186:                           backgroundColor: AppThemeData.primary300,

  222:                                 GestureDetector(
  223:                                   onTap: () {
  224:                                     Get.to(FullScreenImageViewer(imageUrl: data.url!.url));
  225:                                   },
  226:                                   child: Hero(tag: data.url!.url, child: NetworkImageWidget(imageUrl: data.url!.url)),
  227:                                 ),
  228:                               ],
  229:                             ),
  230:                           ),
  231:                         )
  232:                         : FloatingActionButton(
  233:                           mini: true,
  234:                           heroTag: data.id,

```

## FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\chat_screens\driver_inbox_screen.dart
```dart
    5: import 'package:customer/models/inbox_model.dart';
    6: import 'package:customer/models/user_model.dart';
    7: import 'package:customer/themes/app_them_data.dart';
    8: import 'package:customer/themes/responsive.dart';
    9: import 'package:customer/utils/network_image_widget.dart';
   10: import 'package:flutter/material.dart';
   11: import 'package:get/get.dart';
   12: 
   13: import '../../../controllers/theme_controller.dart';
   14: import '../../../service/fire_store_utils.dart';
   15: import '../../../themes/show_toast_dialog.dart';
   16: import '../../../widget/firebase_pagination/src/fireStore_pagination.dart';
   17: import '../../../widget/firebase_pagination/src/models/view_type.dart';

   83:                         child: Row(
   84:                           children: [
   85:                             ClipRRect(
   86:                               borderRadius: const BorderRadius.all(Radius.circular(10)),
   87:                               child: NetworkImageWidget(imageUrl: driver?.profilePictureURL ?? '', fit: BoxFit.cover, height: Responsive.height(6, context), width: Responsive.width(12, context)),
   88:                             ),
   89:                             const SizedBox(width: 10),
   90:                             Expanded(
   91:                               child: Column(
   92:                                 crossAxisAlignment: CrossAxisAlignment.start,
   93:                                 children: [
   94:                                   Row(
   95:                                     children: [

```

## FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\chat_screens\full_screen_image_viewer.dart
```dart
   23:           color: Colors.black,
   24:           child: Hero(
   25:             tag: imageUrl,
   26:             child: PhotoView(
   27:               imageProvider: imageFile == null ? NetworkImage(imageUrl) : Image.file(imageFile!).image,
   28:             ),
   29:           ),
   30:         ));
   31:   }
   32: }

```

## FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\chat_screens\full_screen_video_viewer.dart
```dart
   21: 
   22:   @override
   23:   void initState() {
   24:     super.initState();
   25:     _controller = widget.videoFile == null ? VideoPlayerController.networkUrl(Uri.parse(widget.videoUrl)) : VideoPlayerController.file(widget.videoFile!)
   26:       ..initialize().then((_) {
   27:         // Ensure the first frame is shown after the video is initialized, even before the play button has been pressed.
   28:         setState(() {});
   29:       });
   30:     _controller.setLooping(true);
   31:   }
   32: 
   33:   @override

```

## FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\chat_screens\restaurant_inbox_screen.dart
```dart
    3: import 'package:customer/models/inbox_model.dart';
    4: import 'package:customer/models/user_model.dart';
    5: import 'package:customer/themes/app_them_data.dart';
    6: import 'package:customer/themes/responsive.dart';
    7: import 'package:customer/utils/network_image_widget.dart';
    8: import 'package:customer/widget/firebase_pagination/src/fireStore_pagination.dart';
    9: import 'package:customer/widget/firebase_pagination/src/models/view_type.dart';
   10: import 'package:flutter/material.dart';
   11: import 'package:get/get.dart';
   12: 
   13: import '../../../controllers/theme_controller.dart';
   14: import '../../../service/fire_store_utils.dart';
   15: import '../../../themes/show_toast_dialog.dart';

   81:                         child: Row(
   82:                           children: [
   83:                             ClipRRect(
   84:                               borderRadius: const BorderRadius.all(Radius.circular(10)),
   85:                               child: NetworkImageWidget(imageUrl: restaurant?.profilePictureURL ?? '', fit: BoxFit.cover, height: Responsive.height(6, context), width: Responsive.width(12, context)),
   86:                             ),
   87:                             const SizedBox(width: 10),
   88:                             Expanded(
   89:                               child: Column(
   90:                                 crossAxisAlignment: CrossAxisAlignment.start,
   91:                                 children: [
   92:                                   Row(
   93:                                     children: [

```

## FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_booking\dine_in_booking_screen.dart
```dart
    1: import 'package:customer/constant/constant.dart';
    2: import 'package:customer/controllers/dine_in_booking_controller.dart';
    3: import 'package:customer/models/dine_in_booking_model.dart';
    4: import 'package:customer/themes/responsive.dart';
    5: import 'package:customer/utils/network_image_widget.dart';
    6: import 'package:flutter/material.dart';
    7: import 'package:flutter_svg/flutter_svg.dart';
    8: import 'package:get/get.dart';
    9: import '../../../controllers/theme_controller.dart';
   10: import '../../../themes/app_them_data.dart';
   11: import '../../../widget/my_separator.dart';
   12: import 'dine_in_booking_details.dart';
   13: 

  167:                     ClipRRect(
  168:                       borderRadius: const BorderRadius.all(Radius.circular(16)),
  169:                       child: Stack(
  170:                         children: [
  171:                           NetworkImageWidget(imageUrl: orderModel.vendor!.photo.toString(), fit: BoxFit.cover, height: Responsive.height(10, context), width: Responsive.width(20, context)),
  172:                           Container(
  173:                             height: Responsive.height(10, context),
  174:                             width: Responsive.width(20, context),
  175:                             decoration: BoxDecoration(
  176:                               gradient: LinearGradient(begin: const Alignment(0.00, 1.00), end: const Alignment(0, -1), colors: [Colors.black.withOpacity(0), AppThemeData.grey900]),
  177:                             ),
  178:                           ),
  179:                         ],

```

## FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\book_table_screen.dart
```dart
    3: import 'package:customer/themes/app_them_data.dart';
    4: import 'package:customer/themes/responsive.dart';
    5: import 'package:customer/themes/round_button_fill.dart';
    6: import 'package:customer/themes/text_field_widget.dart';
    7: import 'package:customer/utils/network_image_widget.dart';
    8: import 'package:flutter/material.dart';
    9: import 'package:get/get.dart';
   10: import 'package:intl/intl.dart';
   11: 
   12: import '../../../controllers/theme_controller.dart';
   13: 
   14: class BookTableScreen extends StatelessWidget {
   15:   const BookTableScreen({super.key});

  327:                       child: Row(
  328:                         crossAxisAlignment: CrossAxisAlignment.center,
  329:                         children: [
  330:                           ClipOval(
  331:                             child: NetworkImageWidget(
  332:                               imageUrl: Constant.userModel!.profilePictureURL.toString(),
  333:                               width: 50,
  334:                               height: 50,
  335:                               errorWidget: Image.asset(Constant.userPlaceHolder, fit: BoxFit.cover, width: 50, height: 50),
  336:                             ),
  337:                           ),
  338:                           const SizedBox(width: 10),
  339:                           Column(

```

## FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_details_screen.dart
```dart
    8: import '../../../service/fire_store_utils.dart';
    9: import '../../../themes/show_toast_dialog.dart';
   10: import '../chat_screens/full_screen_image_viewer.dart';
   11: import '../restaurant_details_screen/restaurant_details_screen.dart';
   12: import 'package:customer/utils/network_image_widget.dart';
   13: import 'package:flutter/material.dart';
   14: import 'package:flutter_svg/flutter_svg.dart';
   15: import 'package:get/get.dart';
   16: import 'package:url_launcher/url_launcher.dart';
   17: import '../review_list_screen/review_list_screen.dart';
   18: import 'book_table_screen.dart';
   19: 
   20: class DineInDetailsScreen extends StatelessWidget {

   72:                       children: [
   73:                         controller.vendorModel.value.photos == null || controller.vendorModel.value.photos!.isEmpty
   74:                             ? Stack(
   75:                               children: [
   76:                                 NetworkImageWidget(
   77:                                   imageUrl: controller.vendorModel.value.photo.toString(),
   78:                                   fit: BoxFit.cover,
   79:                                   width: Responsive.width(100, context),
   80:                                   height: Responsive.height(40, context),
   81:                                 ),
   82:                                 Container(
   83:                                   decoration: BoxDecoration(
   84:                                     gradient: LinearGradient(begin: const Alignment(0.00, -1.00), end: const Alignment(0, 1), colors: [Colors.black.withOpacity(0), Colors.black]),

   99:                               itemBuilder: (BuildContext context, int index) {
  100:                                 String image = controller.vendorModel.value.photos![index];
  101:                                 return Stack(
  102:                                   children: [
  103:                                     NetworkImageWidget(imageUrl: image.toString(), fit: BoxFit.cover, width: Responsive.width(100, context), height: Responsive.height(40, context)),
  104:                                     Container(
  105:                                       decoration: BoxDecoration(
  106:                                         gradient: LinearGradient(begin: const Alignment(0.00, -1.00), end: const Alignment(0, 1), colors: [Colors.black.withOpacity(0), Colors.black]),
  107:                                       ),
  108:                                     ),
  109:                                   ],
  110:                                 );
  111:                               },

  450:                                                   child: Padding(
  451:                                                     padding: const EdgeInsets.all(6.0),
  452:                                                     child: ClipRRect(
  453:                                                       borderRadius: BorderRadius.circular(10),
  454:                                                       child: NetworkImageWidget(
  455:                                                         imageUrl: controller.vendorModel.value.restaurantMenuPhotos![index],
  456:                                                         height: Responsive.height(12, context),
  457:                                                         width: Responsive.height(12, context),
  458:                                                         fit: BoxFit.fill,
  459:                                                       ),
  460:                                                     ),
  461:                                                   ),
  462:                                                 );

```

## FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart
```dart
    8: import 'package:customer/screen_ui/multi_vendor_service/dine_in_screeen/view_all_category_dine_in_screen.dart';
    9: import 'package:customer/themes/app_them_data.dart';
   10: import 'package:customer/themes/responsive.dart';
   11: import 'package:customer/themes/round_button_fill.dart';
   12: import 'package:customer/utils/network_image_widget.dart';
   13: import 'package:flutter/material.dart';
   14: import 'package:flutter_svg/flutter_svg.dart';
   15: import 'package:get/get.dart';
   16: import 'package:url_launcher/url_launcher.dart';
   17: import '../../../controllers/theme_controller.dart';
   18: import '../../../models/banner_model.dart';
   19: import '../../../service/fire_store_utils.dart';
   20: import '../../../themes/show_toast_dialog.dart';

  598:                       child: ClipRRect(
  599:                         borderRadius: const BorderRadius.all(Radius.circular(10)),
  600:                         child: Stack(
  601:                           children: [
  602:                             NetworkImageWidget(imageUrl: vendorModel.photo.toString(), fit: BoxFit.cover, height: Responsive.height(100, context), width: Responsive.width(100, context)),
  603:                             Container(
  604:                               decoration: BoxDecoration(
  605:                                 gradient: LinearGradient(begin: const Alignment(0.00, 1.00), end: const Alignment(0, -1), colors: [Colors.black.withOpacity(0), AppThemeData.grey900]),
  606:                               ),
  607:                             ),
  608:                             Positioned(
  609:                               right: 10,
  610:                               top: 10,

  731:                   child: Column(
  732:                     mainAxisAlignment: MainAxisAlignment.spaceEvenly,
  733:                     crossAxisAlignment: CrossAxisAlignment.center,
  734:                     children: [
  735:                       SizedBox(width: 60, height: 60, child: ClipOval(child: NetworkImageWidget(imageUrl: vendorCategoryModel.photo.toString(), fit: BoxFit.cover))),
  736:                       Padding(
  737:                         padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 10),
  738:                         child: Text(
  739:                           '${vendorCategoryModel.title}',
  740:                           textAlign: TextAlign.center,
  741:                           maxLines: 1,
  742:                           style: TextStyle(color: isDark ? AppThemeData.grey50 : AppThemeData.grey900, fontFamily: AppThemeData.medium),
  743:                         ),

  810:                   }
  811:                 },
  812:                 child: Padding(
  813:                   padding: const EdgeInsets.only(right: 14),
  814:                   child: ClipRRect(borderRadius: const BorderRadius.all(Radius.circular(12)), child: NetworkImageWidget(imageUrl: bannerModel.photo.toString(), fit: BoxFit.cover)),
  815:                 ),
  816:               );
  817:             },
  818:           ),
  819:         ),
  820:         Padding(
  821:           padding: const EdgeInsets.symmetric(vertical: 10),
  822:           child: Row(

```

## FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\view_all_category_dine_in_screen.dart
```dart
    1: import 'package:customer/constant/constant.dart';
    2: import 'package:customer/controllers/view_all_category_controller.dart';
    3: import 'package:customer/models/vendor_category_model.dart';
    4: import 'package:customer/themes/app_them_data.dart';
    5: import 'package:customer/utils/network_image_widget.dart';
    6: import 'package:flutter/material.dart';
    7: import 'package:get/get.dart';
    8: 
    9: import '../../../controllers/theme_controller.dart';
   10: import '../home_screen/category_restaurant_screen.dart';
   11: 
   12: class ViewAllCategoryDineInScreen extends StatelessWidget {
   13:   const ViewAllCategoryDineInScreen({super.key});

   71:                                   SizedBox(
   72:                                     width: 60,
   73:                                     height: 60,
   74:                                     child: ClipOval(
   75:                                       child: NetworkImageWidget(
   76:                                         imageUrl: vendorCategoryModel.photo.toString(),
   77:                                         fit: BoxFit.cover,
   78:                                       ),
   79:                                     ),
   80:                                   ),
   81:                                   Padding(
   82:                                     padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 10),
   83:                                     child: Text(

```

## FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\edit_profile_screen\edit_profile_screen.dart
```dart
    4: import 'package:customer/themes/app_them_data.dart';
    5: import 'package:customer/themes/responsive.dart';
    6: import 'package:customer/themes/round_button_fill.dart';
    7: import 'package:customer/themes/text_field_widget.dart';
    8: import 'package:customer/utils/network_image_widget.dart';
    9: import 'package:flutter/material.dart';
   10: import 'package:flutter_svg/flutter_svg.dart';
   11: import 'package:get/get.dart';
   12: import 'package:image_picker/image_picker.dart';
   13: import '../../../controllers/theme_controller.dart';
   14: 
   15: class EditProfileScreen extends StatelessWidget {
   16:   const EditProfileScreen({super.key});

   53:                               child: Image.file(File(controller.profileImage.value), height: Responsive.width(24, context), width: Responsive.width(24, context), fit: BoxFit.cover),
   54:                             )
   55:                             : ClipRRect(
   56:                               borderRadius: BorderRadius.circular(60),
   57:                               child: NetworkImageWidget(
   58:                                 fit: BoxFit.cover,
   59:                                 imageUrl: controller.profileImage.value,
   60:                                 height: Responsive.width(24, context),
   61:                                 width: Responsive.width(24, context),
   62:                                 errorWidget: Image.asset(Constant.userPlaceHolder, fit: BoxFit.cover, height: Responsive.width(24, context), width: Responsive.width(24, context)),
   63:                               ),
   64:                             ),
   65:                         Positioned(

```

## FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart
```dart
    7: import 'package:customer/themes/app_them_data.dart';
    8: import 'package:customer/themes/responsive.dart';
    9: import 'package:customer/themes/round_button_fill.dart';
   10: import '../../../controllers/theme_controller.dart';
   11: import 'package:customer/utils/network_image_widget.dart';
   12: import 'package:flutter/material.dart';
   13: import 'package:flutter_svg/flutter_svg.dart';
   14: import 'package:get/get.dart';
   15: import '../../../service/fire_store_utils.dart';
   16: import '../../../themes/show_toast_dialog.dart';
   17: import '../../../widget/restaurant_image_view.dart';
   18: import '../../auth_screens/login_screen.dart';
   19: import '../restaurant_details_screen/restaurant_details_screen.dart';

  519:                                                                           ClipRRect(
  520:                                                                             borderRadius: const BorderRadius.all(Radius.circular(16)),
  521:                                                                             child: Stack(
  522:                                                                               children: [
  523:                                                                                 NetworkImageWidget(
  524:                                                                                   imageUrl: productModel.photo.toString(),
  525:                                                                                   fit: BoxFit.cover,
  526:                                                                                   height: Responsive.height(16, context),
  527:                                                                                   width: Responsive.width(34, context),
  528:                                                                                 ),
  529:                                                                                 Container(
  530:                                                                                   height: Responsive.height(16, context),
  531:                                                                                   width: Responsive.width(34, context),

```

## FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\gift_card\gift_card_screen.dart
```dart
    6: import 'package:customer/themes/app_them_data.dart';
    7: import 'package:customer/themes/responsive.dart';
    8: import 'package:customer/themes/round_button_fill.dart';
    9: import 'package:customer/themes/text_field_widget.dart';
   10: import 'package:customer/utils/network_image_widget.dart';
   11: import 'package:flutter/material.dart';
   12: import 'package:flutter/services.dart';
   13: import 'package:flutter_svg/flutter_svg.dart';
   14: import 'package:get/get.dart';
   15: import '../../../controllers/theme_controller.dart';
   16: import '../../../themes/show_toast_dialog.dart';
   17: import 'history_gift_card.dart';
   18: 

   86:                                     child: Container(
   87:                                       decoration: BoxDecoration(borderRadius: BorderRadius.circular(10), border: Border.all(color: AppThemeData.primary300)),
   88:                                       child: ClipRRect(
   89:                                         borderRadius: BorderRadius.circular(10),
   90:                                         child: NetworkImageWidget(imageUrl: giftCardModel.image.toString(), width: Responsive.width(80, context), fit: BoxFit.cover),
   91:                                       ),
   92:                                     ),
   93:                                   ),
   94:                                 );
   95:                               },
   96:                             ),
   97:                           ),
   98:                           const SizedBox(height: 20),

  219:                           children: [
  220:                             const SizedBox(height: 20),
  221:                             ClipRRect(
  222:                               borderRadius: BorderRadius.circular(10),
  223:                               child: NetworkImageWidget(imageUrl: controller.selectedGiftCard.value.image.toString(), height: Responsive.height(20, context), width: Responsive.width(100, context)),
  224:                             ),
  225:                             const SizedBox(height: 10),
  226:                             Padding(
  227:                               padding: const EdgeInsets.symmetric(vertical: 10),
  228:                               child: Container(
  229:                                 padding: const EdgeInsets.all(8),
  230:                                 decoration: ShapeDecoration(color: AppThemeData.ecommerce50, shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12))),
  231:                                 child: Text(

```

## FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\discount_restaurant_list_screen.dart
```dart
    3: import 'package:customer/models/coupon_model.dart';
    4: import 'package:customer/models/vendor_model.dart';
    5: import 'package:customer/themes/app_them_data.dart';
    6: import 'package:customer/themes/responsive.dart';
    7: import 'package:customer/utils/network_image_widget.dart';
    8: import 'package:dotted_border/dotted_border.dart';
    9: import 'package:flutter/material.dart';
   10: import 'package:flutter_svg/flutter_svg.dart';
   11: import 'package:get/get.dart';
   12: import '../../../controllers/theme_controller.dart';
   13: import '../restaurant_details_screen/restaurant_details_screen.dart';
   14: 
   15: class DiscountRestaurantListScreen extends StatelessWidget {

   57:                                   ClipRRect(
   58:                                     borderRadius: const BorderRadius.only(topLeft: Radius.circular(16), bottomLeft: Radius.circular(16)),
   59:                                     child: Stack(
   60:                                       children: [
   61:                                         NetworkImageWidget(imageUrl: vendorModel.photo.toString(), fit: BoxFit.cover, height: Responsive.height(16, context), width: Responsive.width(28, context)),
   62:                                         Container(
   63:                                           height: Responsive.height(16, context),
   64:                                           width: Responsive.width(28, context),
   65:                                           decoration: BoxDecoration(
   66:                                             gradient: LinearGradient(begin: const Alignment(-0.00, -1.00), end: const Alignment(0, 1), colors: [Colors.black.withOpacity(0), const Color(0xFF111827)]),
   67:                                           ),
   68:                                         ),
   69:                                         Positioned(

```

## FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart
```dart
   19: import 'package:customer/themes/app_them_data.dart';
   20: import 'package:customer/themes/custom_dialog_box.dart';
   21: import 'package:customer/themes/responsive.dart';
   22: import 'package:customer/themes/round_button_fill.dart';
   23: import 'package:customer/utils/network_image_widget.dart';
   24: import 'package:customer/utils/preferences.dart';
   25: import 'package:customer/widget/osm_map/map_picker_page.dart';
   26: import 'package:customer/widget/place_picker/location_picker_screen.dart';
   27: import 'package:customer/widget/place_picker/selected_location_model.dart';
   28: import 'package:flutter/material.dart';
   29: import 'package:flutter_map/flutter_map.dart' as flutterMap;
   30: import 'package:flutter_svg/flutter_svg.dart';
   31: import 'package:geocoding/geocoding.dart';

 1068:                       child: ClipRRect(
 1069:                         borderRadius: const BorderRadius.all(Radius.circular(10)),
 1070:                         child: Stack(
 1071:                           children: [
 1072:                             NetworkImageWidget(imageUrl: vendorModel.photo.toString(), fit: BoxFit.cover, height: Responsive.height(100, context), width: Responsive.width(100, context)),
 1073:                             Container(
 1074:                               decoration: BoxDecoration(
 1075:                                 gradient: LinearGradient(begin: const Alignment(0.00, 1.00), end: const Alignment(0, -1), colors: [Colors.black.withOpacity(0), AppThemeData.grey900]),
 1076:                               ),
 1077:                             ),
 1078:                             Positioned(
 1079:                               right: 10,
 1080:                               top: 10,

 1221:               children: [
 1222:                 model.type == 'restaurant_promotion'
 1223:                     ? ClipRRect(
 1224:                       borderRadius: BorderRadius.vertical(top: Radius.circular(16)),
 1225:                       child: NetworkImageWidget(imageUrl: model.coverImage ?? '', height: 135, width: double.infinity, fit: BoxFit.cover),
 1226:                     )
 1227:                     : VideoAdvWidget(url: model.video ?? '', height: 135, width: double.infinity),
 1228:                 if (model.type != 'video_promotion' && model.vendorId != null && (model.showRating == true || model.showReview == true))
 1229:                   Positioned(
 1230:                     bottom: 8,
 1231:                     right: 8,
 1232:                     child: FutureBuilder(
 1233:                       future: FireStoreUtils.getVendorById(model.vendorId!),

 1269:               child: Row(
 1270:                 crossAxisAlignment: CrossAxisAlignment.start,
 1271:                 children: [
 1272:                   if (model.type == 'restaurant_promotion')
 1273:                     ClipRRect(borderRadius: BorderRadius.circular(30), child: NetworkImageWidget(imageUrl: model.profileImage ?? '', height: 50, width: 50, fit: BoxFit.cover)),
 1274:                   SizedBox(width: 8),
 1275:                   Expanded(
 1276:                     child: Column(
 1277:                       crossAxisAlignment: CrossAxisAlignment.start,
 1278:                       children: [
 1279:                         Text(
 1280:                           model.title ?? '',
 1281:                           style: TextStyle(color: isDark ? AppThemeData.grey50 : AppThemeData.grey900, fontSize: 14, fontWeight: FontWeight.bold),

 1358:                       child: ClipRRect(
 1359:                         borderRadius: const BorderRadius.all(Radius.circular(10)),
 1360:                         child: Stack(
 1361:                           children: [
 1362:                             NetworkImageWidget(imageUrl: vendorModel.photo.toString(), fit: BoxFit.cover, height: Responsive.height(100, context), width: Responsive.width(100, context)),
 1363:                             Container(
 1364:                               decoration: BoxDecoration(
 1365:                                 gradient: LinearGradient(begin: const Alignment(-0.00, -1.00), end: const Alignment(0, 1), colors: [Colors.black.withOpacity(0), AppThemeData.grey900]),
 1366:                               ),
 1367:                             ),
 1368:                             Positioned(
 1369:                               bottom: 5,
 1370:                               left: 10,

 1520:                   }
 1521:                 },
 1522:                 child: Padding(
 1523:                   padding: const EdgeInsets.only(right: 14),
 1524:                   child: ClipRRect(borderRadius: const BorderRadius.all(Radius.circular(12)), child: NetworkImageWidget(imageUrl: bannerModel.photo.toString(), fit: BoxFit.cover)),
 1525:                 ),
 1526:               );
 1527:             },
 1528:           ),
 1529:         ),
 1530:         Padding(
 1531:           padding: const EdgeInsets.symmetric(vertical: 10),
 1532:           child: Row(

 1607:                   }
 1608:                 },
 1609:                 child: Padding(
 1610:                   padding: const EdgeInsets.only(right: 14),
 1611:                   child: ClipRRect(borderRadius: const BorderRadius.all(Radius.circular(12)), child: NetworkImageWidget(imageUrl: bannerModel.photo.toString(), fit: BoxFit.cover)),
 1612:                 ),
 1613:               );
 1614:             },
 1615:           ),
 1616:         ),
 1617:         Padding(
 1618:           padding: const EdgeInsets.symmetric(vertical: 10),
 1619:           child: Row(

 1673:                   child: Column(
 1674:                     mainAxisAlignment: MainAxisAlignment.spaceEvenly,
 1675:                     crossAxisAlignment: CrossAxisAlignment.center,
 1676:                     children: [
 1677:                       SizedBox(width: 60, height: 60, child: ClipOval(child: NetworkImageWidget(imageUrl: vendorCategoryModel.photo.toString(), fit: BoxFit.cover))),
 1678:                       Padding(
 1679:                         padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 10),
 1680:                         child: Text(
 1681:                           '${vendorCategoryModel.title}',
 1682:                           textAlign: TextAlign.center,
 1683:                           maxLines: 1,
 1684:                           style: TextStyle(color: isDark ? AppThemeData.grey50 : AppThemeData.grey900, fontFamily: AppThemeData.medium),
 1685:                         ),

 1722:                 child: ClipRRect(
 1723:                   borderRadius: const BorderRadius.all(Radius.circular(10)),
 1724:                   child: Stack(
 1725:                     children: [
 1726:                       NetworkImageWidget(imageUrl: storyModel.videoThumbnail.toString(), fit: BoxFit.cover, height: Responsive.height(100, context), width: Responsive.width(100, context)),
 1727:                       Container(color: Colors.black.withOpacity(0.30)),
 1728:                       Padding(
 1729:                         padding: const EdgeInsets.symmetric(horizontal: 5, vertical: 8),
 1730:                         child: FutureBuilder(
 1731:                           future: FireStoreUtils.getVendorById(storyModel.vendorID.toString()),
 1732:                           builder: (context, snapshot) {
 1733:                             if (snapshot.connectionState == ConnectionState.waiting) {
 1734:                               return Constant.loader();

 1742:                                 return Row(
 1743:                                   mainAxisAlignment: MainAxisAlignment.start,
 1744:                                   crossAxisAlignment: CrossAxisAlignment.start,
 1745:                                   children: [
 1746:                                     ClipOval(child: NetworkImageWidget(imageUrl: vendorModel.photo.toString(), width: 30, height: 30, fit: BoxFit.cover)),
 1747:                                     const SizedBox(width: 4),
 1748:                                     Expanded(
 1749:                                       child: Column(
 1750:                                         mainAxisAlignment: MainAxisAlignment.start,
 1751:                                         crossAxisAlignment: CrossAxisAlignment.start,
 1752:                                         children: [
 1753:                                           Text(
 1754:                                             vendorModel.title.toString(),

 1885:                                               ClipRRect(
 1886:                                                 borderRadius: const BorderRadius.only(topLeft: Radius.circular(16), topRight: Radius.circular(16)),
 1887:                                                 child: Stack(
 1888:                                                   children: [
 1889:                                                     NetworkImageWidget(
 1890:                                                       imageUrl: vendorModel.photo.toString(),
 1891:                                                       fit: BoxFit.cover,
 1892:                                                       height: Responsive.height(14, context),
 1893:                                                       width: Responsive.width(100, context),
 1894:                                                     ),
 1895:                                                     Container(
 1896:                                                       height: Responsive.height(14, context),
 1897:                                                       width: Responsive.width(100, context),

```

## FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart
```dart
   18: import 'package:customer/themes/custom_dialog_box.dart';
   19: import 'package:customer/themes/responsive.dart';
   20: import 'package:customer/themes/round_button_fill.dart';
   21: import 'package:customer/themes/text_field_widget.dart';
   22: import 'package:customer/utils/network_image_widget.dart';
   23: import 'package:customer/utils/preferences.dart';
   24: import 'package:customer/widget/osm_map/map_picker_page.dart';
   25: import 'package:customer/widget/place_picker/location_picker_screen.dart';
   26: import 'package:customer/widget/place_picker/selected_location_model.dart';
   27: import 'package:flutter/material.dart';
   28: import 'package:flutter_svg/flutter_svg.dart';
   29: import 'package:geocoding/geocoding.dart';
   30: import 'package:geolocator/geolocator.dart';

  530:                     Get.to(const CategoryRestaurantScreen(), arguments: {"vendorCategoryModel": vendorCategoryModel, "dineIn": false});
  531:                   },
  532:                   child: Column(
  533:                     children: [
  534:                       ClipOval(child: SizedBox(width: 60, height: 60, child: NetworkImageWidget(imageUrl: vendorCategoryModel.photo.toString(), fit: BoxFit.cover))),
  535:                       Text(
  536:                         "${vendorCategoryModel.title}",
  537:                         textAlign: TextAlign.center,
  538:                         style: TextStyle(fontFamily: AppThemeData.medium, color: isDark ? AppThemeData.grey50 : AppThemeData.grey900, fontSize: 12),
  539:                       ),
  540:                     ],
  541:                   ),
  542:                 );

  617:                         child: ClipRRect(
  618:                           borderRadius: const BorderRadius.all(Radius.circular(10)),
  619:                           child: Stack(
  620:                             children: [
  621:                               NetworkImageWidget(imageUrl: vendorModel.photo.toString(), fit: BoxFit.cover, height: Responsive.height(100, context), width: Responsive.width(100, context)),
  622:                               Container(
  623:                                 decoration: BoxDecoration(
  624:                                   gradient: LinearGradient(begin: const Alignment(-0.00, -1.00), end: const Alignment(0, 1), colors: [Colors.black.withOpacity(0), AppThemeData.grey900]),
  625:                                 ),
  626:                               ),
  627:                               Align(
  628:                                 alignment: Alignment.bottomCenter,
  629:                                 child: Padding(

  723:               }
  724:             },
  725:             child: Padding(
  726:               padding: const EdgeInsets.only(right: 14),
  727:               child: ClipRRect(borderRadius: const BorderRadius.all(Radius.circular(12)), child: NetworkImageWidget(imageUrl: bannerModel.photo.toString(), fit: BoxFit.cover)),
  728:             ),
  729:           );
  730:         },
  731:       ),
  732:     );
  733:   }
  734: }
  735: 

  782:                         child: ClipRRect(
  783:                           borderRadius: const BorderRadius.all(Radius.circular(10)),
  784:                           child: Stack(
  785:                             children: [
  786:                               NetworkImageWidget(imageUrl: storyModel.videoThumbnail.toString(), fit: BoxFit.cover, height: Responsive.height(100, context), width: Responsive.width(100, context)),
  787:                               Container(color: Colors.black.withOpacity(0.30)),
  788:                               Padding(
  789:                                 padding: const EdgeInsets.symmetric(horizontal: 5, vertical: 8),
  790:                                 child: FutureBuilder(
  791:                                   future: FireStoreUtils.getVendorById(storyModel.vendorID.toString()),
  792:                                   builder: (context, snapshot) {
  793:                                     if (snapshot.connectionState == ConnectionState.waiting) {
  794:                                       return Constant.loader();

  802:                                         return Row(
  803:                                           mainAxisAlignment: MainAxisAlignment.start,
  804:                                           crossAxisAlignment: CrossAxisAlignment.start,
  805:                                           children: [
  806:                                             ClipOval(child: NetworkImageWidget(imageUrl: vendorModel.photo.toString(), width: 30, height: 30, fit: BoxFit.cover)),
  807:                                             const SizedBox(width: 4),
  808:                                             Expanded(
  809:                                               child: Column(
  810:                                                 mainAxisAlignment: MainAxisAlignment.start,
  811:                                                 crossAxisAlignment: CrossAxisAlignment.start,
  812:                                                 children: [
  813:                                                   Text(
  814:                                                     vendorModel.title.toString(),

  923:                             ClipRRect(
  924:                               borderRadius: const BorderRadius.all(Radius.circular(16)),
  925:                               child: Stack(
  926:                                 children: [
  927:                                   NetworkImageWidget(height: Responsive.height(14, context), width: Responsive.width(30, context), imageUrl: vendorModel.photo.toString(), fit: BoxFit.cover),
  928:                                   Container(
  929:                                     height: Responsive.height(14, context),
  930:                                     width: Responsive.width(30, context),
  931:                                     decoration: BoxDecoration(
  932:                                       gradient: LinearGradient(begin: const Alignment(-0.00, -1.00), end: const Alignment(0, 1), colors: [Colors.black.withOpacity(0), const Color(0xFF111827)]),
  933:                                     ),
  934:                                   ),
  935:                                   discountAmountTempList.isEmpty

```

## FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\story_view.dart
```dart
    1: import 'package:customer/constant/constant.dart';
    2: import 'package:customer/models/story_model.dart';
    3: import 'package:customer/models/vendor_model.dart';
    4: import 'package:customer/themes/app_them_data.dart';
    5: import 'package:customer/utils/network_image_widget.dart';
    6: import 'package:customer/widget/story_view/controller/story_controller.dart';
    7: import 'package:customer/widget/story_view/utils.dart';
    8: import 'package:flutter/material.dart';
    9: import 'package:flutter_svg/flutter_svg.dart';
   10: import 'package:get/get.dart';
   11: import '../../../service/fire_store_utils.dart';
   12: import '../../../widget/story_view/widgets/story_view.dart';
   13: import '../restaurant_details_screen/restaurant_details_screen.dart';

  115:                         child: Row(
  116:                           mainAxisAlignment: MainAxisAlignment.start,
  117:                           crossAxisAlignment: CrossAxisAlignment.start,
  118:                           children: [
  119:                             ClipOval(child: NetworkImageWidget(imageUrl: vendorModel.photo.toString(), width: 50, height: 50, fit: BoxFit.cover)),
  120:                             const SizedBox(width: 10),
  121:                             Expanded(
  122:                               child: Column(
  123:                                 mainAxisAlignment: MainAxisAlignment.start,
  124:                                 crossAxisAlignment: CrossAxisAlignment.start,
  125:                                 children: [
  126:                                   Text(
  127:                                     vendorModel.title.toString(),

```

## FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\view_all_category_screen.dart
```dart
    1: import 'package:customer/constant/constant.dart';
    2: import 'package:customer/controllers/view_all_category_controller.dart';
    3: import 'package:customer/models/vendor_category_model.dart';
    4: import 'package:customer/themes/app_them_data.dart';
    5: import 'package:customer/utils/network_image_widget.dart';
    6: import 'package:flutter/material.dart';
    7: import 'package:get/get.dart';
    8: 
    9: import '../../../controllers/theme_controller.dart';
   10: import 'category_restaurant_screen.dart';
   11: 
   12: class ViewAllCategoryScreen extends StatelessWidget {
   13:   const ViewAllCategoryScreen({super.key});

   56:                               child: Column(
   57:                                 mainAxisAlignment: MainAxisAlignment.spaceEvenly,
   58:                                 crossAxisAlignment: CrossAxisAlignment.center,
   59:                                 children: [
   60:                                   SizedBox(width: 60, height: 60, child: ClipOval(child: NetworkImageWidget(imageUrl: vendorCategoryModel.photo.toString(), fit: BoxFit.cover))),
   61:                                   Padding(
   62:                                     padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 10),
   63:                                     child: Text(
   64:                                       '${vendorCategoryModel.title}',
   65:                                       textAlign: TextAlign.center,
   66:                                       maxLines: 2,
   67:                                       style: AppThemeData.mediumTextStyle(color: isDark ? AppThemeData.grey50 : AppThemeData.grey900, fontSize: 12),
   68:                                     ),

```

## FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart
```dart
    5: import 'package:customer/models/vendor_model.dart';
    6: import 'package:customer/themes/app_them_data.dart';
    7: import 'package:customer/themes/responsive.dart';
    8: import 'package:customer/themes/round_button_fill.dart';
    9: import 'package:customer/utils/network_image_widget.dart';
   10: import 'package:flutter/material.dart';
   11: import 'package:flutter_svg/flutter_svg.dart';
   12: import 'package:get/get.dart';
   13: import 'package:timelines_plus/timelines_plus.dart';
   14: 
   15: import '../../../controllers/theme_controller.dart';
   16: import '../../../service/fire_store_utils.dart';
   17: import '../../../themes/show_toast_dialog.dart';

  378:                                                   : controller.orderModel.value.driver != null
  379:                                                   ? Row(
  380:                                                     children: [
  381:                                                       ClipOval(
  382:                                                         child: NetworkImageWidget(
  383:                                                           imageUrl: controller.orderModel.value.author!.profilePictureURL.toString(),
  384:                                                           fit: BoxFit.cover,
  385:                                                           height: Responsive.height(5, context),
  386:                                                           width: Responsive.width(10, context),
  387:                                                         ),
  388:                                                       ),
  389:                                                       const SizedBox(width: 10),
  390:                                                       Expanded(

  505:                                           ClipRRect(
  506:                                             borderRadius: const BorderRadius.all(Radius.circular(14)),
  507:                                             child: Stack(
  508:                                               children: [
  509:                                                 NetworkImageWidget(
  510:                                                   imageUrl: cartProductModel.photo.toString(),
  511:                                                   height: Responsive.height(8, context),
  512:                                                   width: Responsive.width(16, context),
  513:                                                   fit: BoxFit.cover,
  514:                                                 ),
  515:                                                 Container(
  516:                                                   height: Responsive.height(8, context),
  517:                                                   width: Responsive.width(16, context),

```

## FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\order_list_screen\order_screen.dart
```dart
    4: import 'package:customer/models/order_model.dart';
    5: import 'package:customer/themes/app_them_data.dart';
    6: import 'package:customer/themes/responsive.dart';
    7: import 'package:customer/themes/round_button_fill.dart';
    8: import 'package:customer/utils/network_image_widget.dart';
    9: import 'package:flutter/material.dart';
   10: import 'package:get/get.dart';
   11: import '../../../controllers/theme_controller.dart';
   12: import '../../../themes/show_toast_dialog.dart';
   13: import '../../../widget/my_separator.dart';
   14: import '../../auth_screens/login_screen.dart';
   15: import 'live_tracking_screen.dart';
   16: import 'order_details_screen.dart';

  247:                   ClipRRect(
  248:                     borderRadius: const BorderRadius.all(Radius.circular(16)),
  249:                     child: Stack(
  250:                       children: [
  251:                         NetworkImageWidget(
  252:                           imageUrl: orderModel.vendor!.photo.toString(),
  253:                           fit: BoxFit.cover,
  254:                           height: Responsive.height(10, context),
  255:                           width: Responsive.width(20, context),
  256:                         ),
  257:                         Container(
  258:                           height: Responsive.height(10, context),
  259:                           width: Responsive.width(20, context),

```

## FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\rate_us_screen\rate_product_screen.dart
```dart
    3: import 'package:customer/controllers/rate_product_controller.dart';
    4: import 'package:customer/themes/app_them_data.dart';
    5: import 'package:customer/themes/responsive.dart';
    6: import 'package:customer/themes/round_button_fill.dart';
    7: import 'package:customer/utils/network_image_widget.dart';
    8: import 'package:dotted_border/dotted_border.dart';
    9: import 'package:flutter/material.dart';
   10: import 'package:flutter_rating_bar/flutter_rating_bar.dart';
   11: import 'package:flutter_svg/flutter_svg.dart';
   12: import 'package:get/get.dart';
   13: import 'package:image_picker/image_picker.dart';
   14: 
   15: import '../../../controllers/theme_controller.dart';

  166:                                                           borderRadius: const BorderRadius.all(Radius.circular(10)),
  167:                                                           child:
  168:                                                               (controller.images[index] is XFile)
  169:                                                                   ? Image.file(File((controller.images[index] as XFile).path), fit: BoxFit.cover, width: 80, height: 80)
  170:                                                                   : NetworkImageWidget(imageUrl: controller.images[index]?.toString() ?? '', fit: BoxFit.cover, width: 80, height: 80),
  171:                                                           // controller.images[index].runtimeType == XFile
  172:                                                           //     ? Image.file(File(controller.images[index].path), fit: BoxFit.cover, width: 80, height: 80)
  173:                                                           //     : NetworkImageWidget(imageUrl: controller.images[index], fit: BoxFit.cover, width: 80, height: 80),
  174:                                                         ),
  175:                                                         Positioned(
  176:                                                           bottom: 0,
  177:                                                           top: 0,
  178:                                                           left: 0,

  169:                                                                   ? Image.file(File((controller.images[index] as XFile).path), fit: BoxFit.cover, width: 80, height: 80)
  170:                                                                   : NetworkImageWidget(imageUrl: controller.images[index]?.toString() ?? '', fit: BoxFit.cover, width: 80, height: 80),
  171:                                                           // controller.images[index].runtimeType == XFile
  172:                                                           //     ? Image.file(File(controller.images[index].path), fit: BoxFit.cover, width: 80, height: 80)
  173:                                                           //     : NetworkImageWidget(imageUrl: controller.images[index], fit: BoxFit.cover, width: 80, height: 80),
  174:                                                         ),
  175:                                                         Positioned(
  176:                                                           bottom: 0,
  177:                                                           top: 0,
  178:                                                           left: 0,
  179:                                                           right: 0,
  180:                                                           child: InkWell(
  181:                                                             onTap: () {

```

## FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart
```dart
   11: import 'package:customer/themes/app_them_data.dart';
   12: import 'package:customer/themes/responsive.dart';
   13: import 'package:customer/themes/round_button_fill.dart';
   14: import 'package:customer/themes/text_field_widget.dart';
   15: import 'package:customer/utils/network_image_widget.dart';
   16: import 'package:flutter/material.dart';
   17: import 'package:flutter/services.dart';
   18: import 'package:flutter_svg/flutter_svg.dart';
   19: import 'package:get/get.dart';
   20: 
   21: import '../../../controllers/theme_controller.dart';
   22: import '../../../service/fire_store_utils.dart';
   23: import '../../../themes/show_toast_dialog.dart';

  148:                       children: [
  149:                         controller.vendorModel.value.photos == null || controller.vendorModel.value.photos!.isEmpty
  150:                             ? Stack(
  151:                               children: [
  152:                                 NetworkImageWidget(
  153:                                   imageUrl: controller.vendorModel.value.photo.toString(),
  154:                                   fit: BoxFit.cover,
  155:                                   width: Responsive.width(100, context),
  156:                                   height: Responsive.height(40, context),
  157:                                 ),
  158:                                 Container(
  159:                                   decoration: BoxDecoration(
  160:                                     gradient: LinearGradient(begin: const Alignment(0.00, -1.00), end: const Alignment(0, 1), colors: [Colors.black.withOpacity(0), Colors.black]),

  173:                               itemBuilder: (BuildContext context, int index) {
  174:                                 String image = controller.vendorModel.value.photos![index];
  175:                                 return Stack(
  176:                                   children: [
  177:                                     NetworkImageWidget(imageUrl: image.toString(), fit: BoxFit.cover, width: Responsive.width(100, context), height: Responsive.height(40, context)),
  178:                                     Container(
  179:                                       decoration: BoxDecoration(
  180:                                         gradient: LinearGradient(begin: const Alignment(0.00, -1.00), end: const Alignment(0, 1), colors: [Colors.black.withOpacity(0), Colors.black]),
  181:                                       ),
  182:                                     ),
  183:                                   ],
  184:                                 );
  185:                               },

 1014:                           ClipRRect(
 1015:                             borderRadius: const BorderRadius.all(Radius.circular(16)),
 1016:                             child: Stack(
 1017:                               children: [
 1018:                                 NetworkImageWidget(imageUrl: productModel.photo.toString(), fit: BoxFit.cover, height: Responsive.height(16, context), width: Responsive.width(34, context)),
 1019:                                 Container(
 1020:                                   height: Responsive.height(16, context),
 1021:                                   width: Responsive.width(34, context),
 1022:                                   decoration: BoxDecoration(
 1023:                                     gradient: LinearGradient(begin: const Alignment(-0.00, -1.00), end: const Alignment(0, 1), colors: [Colors.black.withOpacity(0), const Color(0xFF111827)]),
 1024:                                   ),
 1025:                                 ),
 1026:                                 Positioned(

 1468:                         ClipRRect(
 1469:                           borderRadius: const BorderRadius.all(Radius.circular(16)),
 1470:                           child: Stack(
 1471:                             children: [
 1472:                               NetworkImageWidget(imageUrl: productModel.photo.toString(), height: Responsive.height(11, context), width: Responsive.width(22, context), fit: BoxFit.cover),
 1473:                               Container(
 1474:                                 height: Responsive.height(11, context),
 1475:                                 width: Responsive.width(22, context),
 1476:                                 decoration: BoxDecoration(
 1477:                                   gradient: LinearGradient(begin: const Alignment(-0.00, -1.00), end: const Alignment(0, 1), colors: [Colors.black.withOpacity(0), const Color(0xFF111827)]),
 1478:                                 ),
 1479:                               ),
 1480:                             ],

```

## FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\review_list_screen\review_list_screen.dart
```dart
    7: import 'package:customer/themes/app_them_data.dart';
    8: import 'package:customer/themes/responsive.dart';
    9: import 'package:flutter_rating_bar/flutter_rating_bar.dart';
   10: import '../../../controllers/theme_controller.dart';
   11: import 'package:customer/utils/network_image_widget.dart';
   12: import 'package:flutter/material.dart';
   13: import 'package:get/get.dart';
   14: 
   15: import '../../../service/fire_store_utils.dart';
   16: import '../chat_screens/full_screen_image_viewer.dart';
   17: 
   18: class ReviewListScreen extends StatelessWidget {
   19:   const ReviewListScreen({super.key});

  173:                                             child: Padding(
  174:                                               padding: const EdgeInsets.all(6.0),
  175:                                               child: ClipRRect(
  176:                                                 borderRadius: BorderRadius.circular(10),
  177:                                                 child: NetworkImageWidget(
  178:                                                   imageUrl: ratingModel.photos?[index],
  179:                                                   height: Responsive.height(9, context),
  180:                                                   width: Responsive.height(8, context),
  181:                                                   fit: BoxFit.fill,
  182:                                                 ),
  183:                                               ),
  184:                                             ),
  185:                                           );

```

## FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\search_screen\search_screen.dart
```dart
    5: import 'package:customer/themes/app_them_data.dart';
    6: import 'package:customer/themes/responsive.dart';
    7: import 'package:customer/themes/text_field_widget.dart';
    8: import '../../../controllers/theme_controller.dart';
    9: import 'package:customer/utils/network_image_widget.dart';
   10: import 'package:flutter/material.dart';
   11: import 'package:flutter_svg/flutter_svg.dart';
   12: import 'package:get/get.dart';
   13: 
   14: import '../../../service/fire_store_utils.dart';
   15: import '../../../widget/restaurant_image_view.dart';
   16: import '../restaurant_details_screen/restaurant_details_screen.dart';
   17: 

  371:                                               ClipRRect(
  372:                                                 borderRadius: const BorderRadius.all(Radius.circular(16)),
  373:                                                 child: Stack(
  374:                                                   children: [
  375:                                                     NetworkImageWidget(
  376:                                                       imageUrl: productModel.photo.toString(),
  377:                                                       fit: BoxFit.cover,
  378:                                                       height: Responsive.height(16, context),
  379:                                                       width: Responsive.width(34, context),
  380:                                                     ),
  381:                                                     Container(
  382:                                                       height: Responsive.height(16, context),
  383:                                                       width: Responsive.width(34, context),

```

## FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\on_boarding_screen\on_boarding_screen.dart
```dart
    3: import 'package:flutter/material.dart';
    4: import 'package:get/get.dart';
    5: import '../../controllers/on_boarding_controller.dart';
    6: import '../../themes/app_them_data.dart';
    7: import '../../utils/network_image_widget.dart';
    8: import '../../utils/preferences.dart';
    9: import '../auth_screens/login_screen.dart';
   10: 
   11: class OnboardingScreen extends StatelessWidget {
   12:   const OnboardingScreen({super.key});
   13: 
   14:   @override
   15:   Widget build(BuildContext context) {

   54:                                   Text(item.title ?? '', style: AppThemeData.boldTextStyle(color: AppThemeData.grey900), textAlign: TextAlign.center),
   55:                                   const SizedBox(height: 5),
   56:                                   Text(item.description ?? '', style: AppThemeData.boldTextStyle(color: AppThemeData.grey500, fontSize: 14), textAlign: TextAlign.center),
   57:                                   const SizedBox(height: 40),
   58:                                   NetworkImageWidget(imageUrl: item.image ?? '', width: double.infinity, height: 500,showShimmer: false,),
   59:                                 ],
   60:                               ),
   61:                             );
   62:                           },
   63:                         ),
   64:                       ),
   65:                       const SizedBox(height: 20),
   66:                       controller.currentPage.value == pageCount - 1

```

## FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\on_demand_service\favourite_ondemand_screen.dart
```dart
    1: import 'package:cached_network_image/cached_network_image.dart';
    2: import 'package:customer/constant/constant.dart';
    3: import 'package:customer/controllers/favourite_ondemmand_controller.dart';
    4: import 'package:customer/controllers/theme_controller.dart';
    5: import 'package:customer/models/category_model.dart';
    6: import 'package:customer/models/provider_serivce_model.dart';
    7: import 'package:customer/screen_ui/auth_screens/login_screen.dart';
    8: import 'package:customer/screen_ui/on_demand_service/on_demand_details_screen.dart';
    9: import 'package:customer/service/fire_store_utils.dart';

  111:                                           child: Row(
  112:                                             children: [
  113:                                               ClipRRect(
  114:                                                 borderRadius: const BorderRadius.only(bottomLeft: Radius.circular(10), topLeft: Radius.circular(10)),
  115:                                                 child: CachedNetworkImage(
  116:                                                   imageUrl: provider.photos.isNotEmpty ? provider.photos.first : Constant.placeHolderImage,
  117:                                                   height: MediaQuery.of(context).size.height * 0.16,
  118:                                                   width: 110,
  119:                                                   fit: BoxFit.cover,
  120:                                                   placeholder: (context, url) => Center(child: CircularProgressIndicator.adaptive(valueColor: AlwaysStoppedAnimation(AppThemeData.primary300))),
  121:                                                   errorWidget: (context, url, error) => Image.network(Constant.placeHolderImage, fit: BoxFit.cover),
  122:                                                 ),
  123:                                               ),

  117:                                                   height: MediaQuery.of(context).size.height * 0.16,
  118:                                                   width: 110,
  119:                                                   fit: BoxFit.cover,
  120:                                                   placeholder: (context, url) => Center(child: CircularProgressIndicator.adaptive(valueColor: AlwaysStoppedAnimation(AppThemeData.primary300))),
  121:                                                   errorWidget: (context, url, error) => Image.network(Constant.placeHolderImage, fit: BoxFit.cover),
  122:                                                 ),
  123:                                               ),
  124:                                               Expanded(
  125:                                                 child: Padding(
  126:                                                   padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 10),
  127:                                                   child: Column(
  128:                                                     mainAxisAlignment: MainAxisAlignment.spaceBetween,
  129:                                                     crossAxisAlignment: CrossAxisAlignment.start,

  195:                                               child: Row(
  196:                                                 children: [
  197:                                                   ClipRRect(
  198:                                                     borderRadius: const BorderRadius.only(bottomLeft: Radius.circular(10), topLeft: Radius.circular(10)),
  199:                                                     child: CachedNetworkImage(
  200:                                                       imageUrl: snapshot.data![0].photos.isNotEmpty ? snapshot.data![0].photos[0] : Constant.placeHolderImage,
  201:                                                       height: MediaQuery.of(context).size.height * 0.16,
  202:                                                       width: 110,
  203:                                                       fit: BoxFit.cover,
  204:                                                       placeholder: (context, url) => Center(child: CircularProgressIndicator.adaptive(valueColor: AlwaysStoppedAnimation(AppThemeData.primary300))),
  205:                                                       errorWidget: (context, url, error) => Image.network(Constant.placeHolderImage, fit: BoxFit.cover),
  206:                                                     ),
  207:                                                   ),

  201:                                                       height: MediaQuery.of(context).size.height * 0.16,
  202:                                                       width: 110,
  203:                                                       fit: BoxFit.cover,
  204:                                                       placeholder: (context, url) => Center(child: CircularProgressIndicator.adaptive(valueColor: AlwaysStoppedAnimation(AppThemeData.primary300))),
  205:                                                       errorWidget: (context, url, error) => Image.network(Constant.placeHolderImage, fit: BoxFit.cover),
  206:                                                     ),
  207:                                                   ),
  208:                                                   Expanded(
  209:                                                     child: Padding(
  210:                                                       padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 10),
  211:                                                       child: Column(
  212:                                                         mainAxisAlignment: MainAxisAlignment.spaceBetween,
  213:                                                         crossAxisAlignment: CrossAxisAlignment.start,

```

## FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\on_demand_service\my_booking_on_demand_screen.dart
```dart
    1: import 'package:cached_network_image/cached_network_image.dart';
    2: import 'package:flutter/material.dart';
    3: import 'package:get/get.dart';
    4: import 'package:intl/intl.dart';
    5: import '../../constant/constant.dart';
    6: import '../../controllers/my_booking_on_demand_controller.dart';
    7: import '../../controllers/theme_controller.dart';
    8: import '../../models/onprovider_order_model.dart';
    9: import '../../models/worker_model.dart';

   82:                                         Row(
   83:                                           children: [
   84:                                             Padding(
   85:                                               padding: const EdgeInsets.symmetric(horizontal: 10),
   86:                                               child: CachedNetworkImage(
   87:                                                 imageUrl: onProviderOrder.provider.photos.first,
   88:                                                 height: 80,
   89:                                                 width: 80,
   90:                                                 imageBuilder:
   91:                                                     (context, imageProvider) =>
   92:                                                         Container(decoration: BoxDecoration(borderRadius: BorderRadius.circular(10), image: DecorationImage(image: imageProvider, fit: BoxFit.cover))),
   93:                                                 placeholder: (context, url) => Center(child: CircularProgressIndicator.adaptive(valueColor: AlwaysStoppedAnimation(AppThemeData.primary300))),
   94:                                                 errorWidget:

   93:                                                 placeholder: (context, url) => Center(child: CircularProgressIndicator.adaptive(valueColor: AlwaysStoppedAnimation(AppThemeData.primary300))),
   94:                                                 errorWidget:
   95:                                                     (context, url, error) => ClipRRect(
   96:                                                       borderRadius: BorderRadius.circular(10),
   97:                                                       child: Image.network(Constant.placeHolderImage, fit: BoxFit.cover, cacheHeight: 80, cacheWidth: 80),
   98:                                                     ),
   99:                                                 fit: BoxFit.cover,
  100:                                               ),
  101:                                             ),
  102:                                             Expanded(
  103:                                               child: Padding(
  104:                                                 padding: const EdgeInsets.symmetric(horizontal: 20),
  105:                                                 child: Column(

```

## FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\on_demand_service\on_demand_booking_screen.dart
```dart
   97:                         height: 100,
   98:                         decoration: BoxDecoration(
   99:                           borderRadius: BorderRadius.circular(20),
  100:                           color: Colors.grey.shade300,
  101:                           image: controller.provider.value!.photos.isNotEmpty ? DecorationImage(image: NetworkImage(controller.provider.value?.photos.first), fit: BoxFit.cover) : null,
  102:                         ),
  103:                       ),
  104:                     ],
  105:                   ),
  106:                 ),
  107:                 const SizedBox(height: 15),
  108:                 Container(
  109:                   padding: const EdgeInsets.all(8),

```

## FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\on_demand_service\on_demand_category_screen.dart
```dart
    1: import 'package:cached_network_image/cached_network_image.dart';
    2: import 'package:customer/screen_ui/on_demand_service/view_category_service_screen.dart';
    3: import 'package:flutter/material.dart';
    4: import 'package:get/get.dart';
    5: import '../../constant/constant.dart';
    6: import '../../controllers/on_demand_category_controller.dart';
    7: import '../../controllers/theme_controller.dart';
    8: import '../../models/category_model.dart';
    9: import '../../themes/app_them_data.dart';

   90:         Get.to(() => ViewCategoryServiceListScreen(), arguments: {'categoryId': category.id, 'categoryTitle': category.title});
   91:       },
   92:       child: Column(
   93:         children: [
   94:           ClipRRect(borderRadius: BorderRadius.circular(12), child: CachedNetworkImage(imageUrl: category.image ?? "", height: 60, width: 60, fit: BoxFit.cover)),
   95:           const SizedBox(height: 5),
   96:           Text(category.title ?? "", style: AppThemeData.semiBoldTextStyle(fontSize: 12, color: isDark ? AppThemeData.greyDark900 : AppThemeData.grey900), textAlign: TextAlign.center),
   97:         ],
   98:       ),
   99:     );
  100:   }
  101: }

```

## FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\on_demand_service\on_demand_details_screen.dart
```dart
    1: import 'package:cached_network_image/cached_network_image.dart';
    2: import 'package:customer/constant/constant.dart';
    3: import 'package:customer/screen_ui/on_demand_service/provider_screen.dart';
    4: import 'package:flutter/material.dart';
    5: import 'package:flutter_rating_bar/flutter_rating_bar.dart';
    6: import 'package:get/get.dart';
    7: import 'package:intl/intl.dart';
    8: import '../../controllers/theme_controller.dart';
    9: import '../../models/provider_serivce_model.dart';

   65:         crossAxisAlignment: CrossAxisAlignment.start,
   66:         children: [
   67:           Stack(
   68:             children: [
   69:               CachedNetworkImage(
   70:                 imageUrl: provider.photos.isNotEmpty ? provider.photos.first : "",
   71:                 placeholder: (context, url) => Center(child: CircularProgressIndicator(valueColor: AlwaysStoppedAnimation(AppThemeData.primary300))),
   72:                 errorWidget: (context, url, error) => Image.network(Constant.placeHolderImage, fit: BoxFit.fitWidth),
   73:                 fit: BoxFit.fitWidth,
   74:                 width: width,
   75:                 height: height * 0.45,
   76:               ),
   77:               Positioned(top: height * 0.05, left: width * 0.03, child: _circleButton(context, icon: Icons.arrow_back, onTap: () => Get.back())),

   68:             children: [
   69:               CachedNetworkImage(
   70:                 imageUrl: provider.photos.isNotEmpty ? provider.photos.first : "",
   71:                 placeholder: (context, url) => Center(child: CircularProgressIndicator(valueColor: AlwaysStoppedAnimation(AppThemeData.primary300))),
   72:                 errorWidget: (context, url, error) => Image.network(Constant.placeHolderImage, fit: BoxFit.fitWidth),
   73:                 fit: BoxFit.fitWidth,
   74:                 width: width,
   75:                 height: height * 0.45,
   76:               ),
   77:               Positioned(top: height * 0.05, left: width * 0.03, child: _circleButton(context, icon: Icons.arrow_back, onTap: () => Get.back())),
   78:               Positioned(
   79:                 top: height * 0.05,
   80:                 right: width * 0.03,

  287:                       children: [
  288:                         Expanded(
  289:                           child: Row(
  290:                             children: [
  291:                               CircleAvatar(radius: 30, backgroundImage: NetworkImage(user.profilePictureURL?.isNotEmpty == true ? user.profilePictureURL! : Constant.placeHolderImage)),
  292:                               const SizedBox(width: 10),
  293:                               Expanded(
  294:                                 child: Column(
  295:                                   crossAxisAlignment: CrossAxisAlignment.start,
  296:                                   children: [
  297:                                     Text(user.fullName(), style: TextStyle(color: isDark ? Colors.white : Colors.black, fontFamily: AppThemeData.regular, fontSize: 14, fontWeight: FontWeight.bold)),
  298:                                     const SizedBox(height: 5),
  299:                                     Text(user.email ?? '', style: TextStyle(color: isDark ? Colors.white : Colors.black, fontFamily: AppThemeData.regular, fontSize: 14)),

  353:         return Padding(
  354:           padding: const EdgeInsets.all(8.0),
  355:           child: ClipRRect(
  356:             borderRadius: BorderRadius.circular(10),
  357:             child: CachedNetworkImage(
  358:               imageUrl: imageUrl,
  359:               height: 60,
  360:               width: 60,
  361:               imageBuilder: (context, imageProvider) => Container(decoration: BoxDecoration(borderRadius: BorderRadius.circular(10), image: DecorationImage(image: imageProvider, fit: BoxFit.cover))),
  362:               placeholder: (context, url) => Center(child: CircularProgressIndicator.adaptive(valueColor: AlwaysStoppedAnimation(AppThemeData.primary300))),
  363:               errorWidget: (context, url, error) => Image.network(Constant.placeHolderImage, fit: BoxFit.cover),
  364:               fit: BoxFit.cover,
  365:             ),

  359:               height: 60,
  360:               width: 60,
  361:               imageBuilder: (context, imageProvider) => Container(decoration: BoxDecoration(borderRadius: BorderRadius.circular(10), image: DecorationImage(image: imageProvider, fit: BoxFit.cover))),
  362:               placeholder: (context, url) => Center(child: CircularProgressIndicator.adaptive(valueColor: AlwaysStoppedAnimation(AppThemeData.primary300))),
  363:               errorWidget: (context, url, error) => Image.network(Constant.placeHolderImage, fit: BoxFit.cover),
  364:               fit: BoxFit.cover,
  365:             ),
  366:           ),
  367:         );
  368:       },
  369:     );
  370:   }
  371: 

```

## FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\on_demand_service\on_demand_home_screen.dart
```dart
    1: import 'package:cached_network_image/cached_network_image.dart';
    2: import 'package:customer/constant/constant.dart';
    3: import 'package:customer/controllers/theme_controller.dart';
    4: import 'package:customer/models/banner_model.dart';
    5: import 'package:customer/models/user_model.dart';
    6: import 'package:customer/screen_ui/auth_screens/login_screen.dart';
    7: import 'package:customer/screen_ui/location_enable_screens/address_list_screen.dart';
    8: import 'package:customer/screen_ui/location_enable_screens/location_permission_screen.dart';
    9: import 'package:customer/screen_ui/on_demand_service/view_all_popular_service_screen.dart';

   11: import 'package:customer/screen_ui/service_home_screen/service_list_screen.dart';
   12: import 'package:customer/themes/app_them_data.dart';
   13: import 'package:customer/themes/round_button_fill.dart';
   14: import 'package:customer/themes/show_toast_dialog.dart';
   15: import 'package:customer/utils/network_image_widget.dart';
   16: import 'package:customer/widget/osm_map/map_picker_page.dart';
   17: import 'package:customer/widget/place_picker/location_picker_screen.dart';
   18: import 'package:customer/widget/place_picker/selected_location_model.dart';
   19: import 'package:flutter/material.dart';
   20: import 'package:flutter_svg/svg.dart';
   21: import 'package:geocoding/geocoding.dart';
   22: import 'package:geolocator/geolocator.dart';
   23: import 'package:get/get.dart';

  333:             itemBuilder: (context, index) {
  334:               final banner = bannerList[index];
  335:               return ClipRRect(
  336:                 borderRadius: BorderRadius.circular(15),
  337:                 child: SizedBox(width: MediaQuery.of(context).size.width * 0.8, child: NetworkImageWidget(imageUrl: banner.photo ?? '', fit: BoxFit.cover)),
  338:               );
  339:             },
  340:           ),
  341:         ),
  342:         const SizedBox(height: 8),
  343:         Obx(() {
  344:           return Row(
  345:             children: List.generate(bannerList.length, (index) {

  373:             decoration: BoxDecoration(color: Constant.colorList[index % Constant.colorList.length], borderRadius: BorderRadius.circular(50)),
  374:             child: ClipOval(
  375:               child: Padding(
  376:                 padding: const EdgeInsets.all(14.0),
  377:                 child: CachedNetworkImage(imageUrl: category.image.toString(), errorWidget: (_, __, ___) => Image.network(Constant.placeHolderImage, fit: BoxFit.cover)),
  378:               ),
  379:             ),
  380:           ),
  381:           const SizedBox(height: 5),
  382:           SizedBox(
  383:             width: 70,
  384:             child: Center(
  385:               child: Text(category.title ?? "", textAlign: TextAlign.center, maxLines: 1, style: AppThemeData.semiBoldTextStyle(color: isDark ? AppThemeData.greyDark900 : AppThemeData.grey900)),

  415:           children: [
  416:             // --- Left Image ---
  417:             ClipRRect(
  418:               borderRadius: const BorderRadius.only(topLeft: Radius.circular(10), bottomLeft: Radius.circular(10)),
  419:               child: CachedNetworkImage(
  420:                 imageUrl: provider.photos.isNotEmpty ? provider.photos[0] : Constant.placeHolderImage,
  421:                 width: 110,
  422:                 height: MediaQuery.of(context).size.height * 0.16,
  423:                 fit: BoxFit.cover,
  424:                 placeholder: (context, url) => Center(child: CircularProgressIndicator.adaptive(valueColor: AlwaysStoppedAnimation(AppThemeData.primary300))),
  425:                 errorWidget: (context, url, error) => Image.network(Constant.placeHolderImage, fit: BoxFit.cover),
  426:               ),
  427:             ),

  421:                 width: 110,
  422:                 height: MediaQuery.of(context).size.height * 0.16,
  423:                 fit: BoxFit.cover,
  424:                 placeholder: (context, url) => Center(child: CircularProgressIndicator.adaptive(valueColor: AlwaysStoppedAnimation(AppThemeData.primary300))),
  425:                 errorWidget: (context, url, error) => Image.network(Constant.placeHolderImage, fit: BoxFit.cover),
  426:               ),
  427:             ),
  428: 
  429:             // --- Right Content ---
  430:             Expanded(
  431:               child: Padding(
  432:                 padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 10),
  433:                 child: Column(

```

## FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\on_demand_service\on_demand_order_details_screen.dart
```dart
  134:                                   width: 80,
  135:                                   decoration: BoxDecoration(
  136:                                     borderRadius: BorderRadius.circular(10),
  137:                                     image: DecorationImage(
  138:                                       image: NetworkImage(
  139:                                         (controller.onProviderOrder.value != null && controller.onProviderOrder.value!.provider.photos.isNotEmpty)
  140:                                             ? controller.onProviderOrder.value!.provider.photos.first
  141:                                             : Constant.placeHolderImage,
  142:                                       ),
  143:                                       fit: BoxFit.cover,
  144:                                     ),
  145:                                   ),
  146:                                 ),

  224:                                               child: Row(
  225:                                                 children: [
  226:                                                   CircleAvatar(
  227:                                                     radius: 30,
  228:                                                     backgroundImage: NetworkImage(
  229:                                                       controller.worker.value?.profilePictureURL.isNotEmpty == true ? controller.worker.value!.profilePictureURL : Constant.placeHolderImage,
  230:                                                     ),
  231:                                                   ),
  232:                                                   const SizedBox(width: 10),
  233:                                                   Expanded(
  234:                                                     child: Column(
  235:                                                       crossAxisAlignment: CrossAxisAlignment.start,
  236:                                                       children: [

  398:                                       child: Row(
  399:                                         children: [
  400:                                           CircleAvatar(
  401:                                             radius: 30,
  402:                                             backgroundImage: NetworkImage(
  403:                                               controller.providerUser.value?.profilePictureURL?.isNotEmpty == true ? controller.providerUser.value!.profilePictureURL! : Constant.placeHolderImage,
  404:                                             ),
  405:                                           ),
  406:                                           const SizedBox(width: 10),
  407:                                           Expanded(
  408:                                             child: Column(
  409:                                               crossAxisAlignment: CrossAxisAlignment.start,
  410:                                               children: [

```

## FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\on_demand_service\on_demand_review_screen.dart
```dart
    6: import '../../controllers/theme_controller.dart';
    7: import '../../themes/app_them_data.dart';
    8: import '../../themes/round_button_fill.dart';
    9: import '../../themes/text_field_widget.dart';
   10: import '../../utils/network_image_widget.dart';
   11: 
   12: class OnDemandReviewScreen extends StatelessWidget {
   13:   const OnDemandReviewScreen({super.key});
   14: 
   15:   @override
   16:   Widget build(BuildContext context) {
   17:     final themeController = Get.find<ThemeController>();
   18:     final isDark = themeController.isDark.value;

  102:                           Align(
  103:                             alignment: Alignment.topCenter,
  104:                             child: ClipRRect(
  105:                               borderRadius: BorderRadius.circular(50),
  106:                               child: NetworkImageWidget(
  107:                                 imageUrl: controller.reviewFor.value == "Provider" ? controller.order.value?.provider.authorProfilePic ?? '' : controller.workerModel.value?.profilePictureURL ?? '',
  108:                                 fit: BoxFit.cover,
  109:                                 height: 100,
  110:                                 width: 100,
  111:                               ),
  112:                             ),
  113:                           ),
  114:                         ],

```

## FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\on_demand_service\provider_inbox_screen.dart
```dart
    4: import 'package:customer/models/user_model.dart';
    5: import 'package:customer/screen_ui/multi_vendor_service/chat_screens/chat_screen.dart';
    6: import 'package:customer/themes/app_them_data.dart';
    7: import 'package:customer/themes/responsive.dart';
    8: import 'package:customer/utils/network_image_widget.dart';
    9: import 'package:customer/widget/firebase_pagination/src/fireStore_pagination.dart';
   10: import 'package:customer/widget/firebase_pagination/src/models/view_type.dart';
   11: import 'package:flutter/material.dart';
   12: import 'package:get/get.dart';
   13: import '../../../controllers/theme_controller.dart';
   14: import '../../../service/fire_store_utils.dart';
   15: import '../../../themes/show_toast_dialog.dart';
   16: 

   79:                         child: Row(
   80:                           children: [
   81:                             ClipRRect(
   82:                               borderRadius: const BorderRadius.all(Radius.circular(10)),
   83:                               child: NetworkImageWidget(imageUrl: restaurant?.profilePictureURL ?? '', fit: BoxFit.cover, height: Responsive.height(6, context), width: Responsive.width(12, context)),
   84:                             ),
   85:                             const SizedBox(width: 10),
   86:                             Expanded(
   87:                               child: Column(
   88:                                 crossAxisAlignment: CrossAxisAlignment.start,
   89:                                 children: [
   90:                                   Row(
   91:                                     children: [

  188: //                   child: Row(
  189: //                     children: [
  190: //                       ClipRRect(
  191: //                         borderRadius: const BorderRadius.all(Radius.circular(10)),
  192: //                         child: NetworkImageWidget(
  193: //                           imageUrl: inboxModel.restaurantProfileImage.toString(),
  194: //                           fit: BoxFit.cover,
  195: //                           height: Responsive.height(6, context),
  196: //                           width: Responsive.width(12, context),
  197: //                         ),
  198: //                       ),
  199: //                       const SizedBox(width: 10),
  200: //                       Expanded(

```

## FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\on_demand_service\provider_screen.dart
```dart
   32:                       children: [
   33:                         Center(
   34:                           child:
   35:                               (controller.userModel.value?.profilePictureURL ?? "").isNotEmpty
   36:                                   ? CircleAvatar(backgroundImage: NetworkImage(controller.userModel.value?.profilePictureURL ?? ''), radius: 50.0)
   37:                                   : CircleAvatar(backgroundImage: NetworkImage(Constant.placeHolderImage), radius: 50.0),
   38:                         ),
   39:                         const SizedBox(height: 10),
   40:                         Text(
   41:                           controller.userModel.value?.fullName() ?? '',
   42:                           style: TextStyle(color: isDark ? Colors.white : Colors.black, fontFamily: AppThemeData.regular, fontSize: 20, fontWeight: FontWeight.w900),
   43:                         ),
   44:                         const SizedBox(height: 5),

   33:                         Center(
   34:                           child:
   35:                               (controller.userModel.value?.profilePictureURL ?? "").isNotEmpty
   36:                                   ? CircleAvatar(backgroundImage: NetworkImage(controller.userModel.value?.profilePictureURL ?? ''), radius: 50.0)
   37:                                   : CircleAvatar(backgroundImage: NetworkImage(Constant.placeHolderImage), radius: 50.0),
   38:                         ),
   39:                         const SizedBox(height: 10),
   40:                         Text(
   41:                           controller.userModel.value?.fullName() ?? '',
   42:                           style: TextStyle(color: isDark ? Colors.white : Colors.black, fontFamily: AppThemeData.regular, fontSize: 20, fontWeight: FontWeight.w900),
   43:                         ),
   44:                         const SizedBox(height: 5),
   45:                         Row(

```

## FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\on_demand_service\worker_inbox_screen.dart
```dart
    4: import 'package:customer/models/user_model.dart';
    5: import 'package:customer/screen_ui/multi_vendor_service/chat_screens/chat_screen.dart';
    6: import 'package:customer/themes/app_them_data.dart';
    7: import 'package:customer/themes/responsive.dart';
    8: import 'package:customer/utils/network_image_widget.dart';
    9: import 'package:customer/widget/firebase_pagination/src/fireStore_pagination.dart';
   10: import 'package:customer/widget/firebase_pagination/src/models/view_type.dart';
   11: import 'package:flutter/material.dart';
   12: import 'package:get/get.dart';
   13: import '../../../controllers/theme_controller.dart';
   14: import '../../../service/fire_store_utils.dart';
   15: import '../../../themes/show_toast_dialog.dart';
   16: 

   80:                         child: Row(
   81:                           children: [
   82:                             ClipRRect(
   83:                               borderRadius: const BorderRadius.all(Radius.circular(10)),
   84:                               child: NetworkImageWidget(imageUrl: restaurant?.profilePictureURL ?? '', fit: BoxFit.cover, height: Responsive.height(6, context), width: Responsive.width(12, context)),
   85:                             ),
   86:                             const SizedBox(width: 10),
   87:                             Expanded(
   88:                               child: Column(
   89:                                 crossAxisAlignment: CrossAxisAlignment.start,
   90:                                 children: [
   91:                                   Row(
   92:                                     children: [

  189: //                   child: Row(
  190: //                     children: [
  191: //                       ClipRRect(
  192: //                         borderRadius: const BorderRadius.all(Radius.circular(10)),
  193: //                         child: NetworkImageWidget(
  194: //                           imageUrl: inboxModel.restaurantProfileImage.toString(),
  195: //                           fit: BoxFit.cover,
  196: //                           height: Responsive.height(6, context),
  197: //                           width: Responsive.width(12, context),
  198: //                         ),
  199: //                       ),
  200: //                       const SizedBox(width: 10),
  201: //                       Expanded(

```

## FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\parcel_service\home_parcel_screen.dart
```dart
   10: import '../../models/parcel_category.dart';
   11: import '../../models/user_model.dart';
   12: import '../../themes/app_them_data.dart';
   13: import '../../themes/show_toast_dialog.dart';
   14: import '../../utils/network_image_widget.dart';
   15: import '../../widget/osm_map/map_picker_page.dart';
   16: import '../../widget/place_picker/location_picker_screen.dart';
   17: import '../../widget/place_picker/selected_location_model.dart';
   18: import '../auth_screens/login_screen.dart';
   19: import '../location_enable_screens/address_list_screen.dart';
   20: import 'book_parcel_screen.dart';
   21: 
   22: class HomeParcelScreen extends StatelessWidget {

  204:         },
  205:         child: Row(
  206:           crossAxisAlignment: CrossAxisAlignment.center,
  207:           children: [
  208:             NetworkImageWidget(imageUrl: item.image ?? '', height: 38, width: 38),
  209:             const SizedBox(width: 20),
  210:             Expanded(child: Text(item.title ?? '', style: AppThemeData.semiBoldTextStyle(color: isDark ? AppThemeData.greyDark900 : AppThemeData.grey900, fontSize: 16))),
  211:             Icon(Icons.arrow_forward_ios, color: isDark ? AppThemeData.greyDark800 : AppThemeData.grey800, size: 20),
  212:           ],
  213:         ),
  214:       ),
  215:     );
  216:   }

  255:             itemBuilder: (context, index) {
  256:               final banner = bannerList[index];
  257:               return ClipRRect(
  258:                 borderRadius: BorderRadius.circular(15),
  259:                 child: SizedBox(width: MediaQuery.of(context).size.width * 0.8, child: NetworkImageWidget(imageUrl: banner.photo ?? '', fit: BoxFit.cover)),
  260:               );
  261:             },
  262:           ),
  263:         ),
  264:         const SizedBox(height: 8),
  265:         Obx(() {
  266:           return Row(
  267:             children: List.generate(bannerList.length, (index) {

```

## FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\parcel_service\parcel_order_details.dart
```dart
   13: import '../../themes/app_them_data.dart';
   14: import '../../themes/round_button_border.dart';
   15: import '../../themes/round_button_fill.dart';
   16: import '../../themes/show_toast_dialog.dart';
   17: import '../../utils/network_image_widget.dart';
   18: import '../multi_vendor_service/chat_screens/chat_screen.dart';
   19: 
   20: class ParcelOrderDetails extends StatelessWidget {
   21:   const ParcelOrderDetails({super.key});
   22: 
   23:   @override
   24:   Widget build(BuildContext context) {
   25:     final themeController = Get.find<ThemeController>();

  183:                                         style: AppThemeData.semiBoldTextStyle(fontSize: 16, color: isDark ? AppThemeData.greyDark800 : AppThemeData.grey800),
  184:                                       ),
  185:                                       const SizedBox(width: 8),
  186:                                       if (controller.getSelectedCategory()?.image != null && controller.getSelectedCategory()!.image!.isNotEmpty)
  187:                                         NetworkImageWidget(imageUrl: controller.getSelectedCategory()?.image ?? '', height: 20, width: 20),
  188:                                     ],
  189:                                   ),
  190:                                 ],
  191:                               ),
  192:                               controller.parcelOrder.value.parcelImages!.isEmpty
  193:                                   ? SizedBox()
  194:                                   : SizedBox(
  195:                                     height: 120,

  201:                                         return Padding(
  202:                                           padding: const EdgeInsets.all(8.0),
  203:                                           child: ClipRRect(
  204:                                             borderRadius: BorderRadius.circular(10),
  205:                                             child: NetworkImageWidget(imageUrl: controller.parcelOrder.value.parcelImages![index], width: 100, fit: BoxFit.cover, borderRadius: 10),
  206:                                           ),
  207:                                         );
  208:                                       },
  209:                                     ),
  210:                                   ),
  211:                             ],
  212:                           ),
  213:                         ),

  255:                                               width: 52,
  256:                                               height: 52,
  257:                                               child: ClipRRect(
  258:                                                 borderRadius: BorderRadiusGeometry.circular(10),
  259:                                                 child: NetworkImageWidget(imageUrl: controller.driverUser.value?.profilePictureURL ?? '', height: 70, width: 70, borderRadius: 35),
  260:                                               ),
  261:                                             ),
  262:                                             SizedBox(width: 20),
  263:                                             Text(
  264:                                               controller.parcelOrder.value.driver?.fullName() ?? '',
  265:                                               style: AppThemeData.boldTextStyle(color: isDark ? AppThemeData.greyDark900 : AppThemeData.grey900, fontSize: 18),
  266:                                             ),
  267:                                           ],

```

## FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\parcel_service\parcel_review_screen.dart
```dart
    6: import '../../controllers/theme_controller.dart';
    7: import '../../themes/app_them_data.dart';
    8: import '../../themes/round_button_fill.dart';
    9: import '../../themes/text_field_widget.dart';
   10: import '../../utils/network_image_widget.dart';
   11: 
   12: class ParcelReviewScreen extends StatelessWidget {
   13:   const ParcelReviewScreen({super.key});
   14: 
   15:   @override
   16:   Widget build(BuildContext context) {
   17:     final themeController = Get.find<ThemeController>();
   18:     final isDark = themeController.isDark.value;

  129:                                 boxShadow: [BoxShadow(color: Colors.grey.withOpacity(0.15), blurRadius: 8, spreadRadius: 6)],
  130:                               ),
  131:                               child: ClipRRect(
  132:                                 borderRadius: BorderRadius.circular(60),
  133:                                 child: NetworkImageWidget(imageUrl: controller.order.value?.driver?.profilePictureURL ?? '', fit: BoxFit.cover, height: 110, width: 110),
  134:                               ),
  135:                             ),
  136:                           ),
  137:                         ],
  138:                       ),
  139:                     ),
  140:           ),
  141:         );

```

## FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\rental_service\my_rental_booking_screen.dart
```dart
    1: import 'package:cached_network_image/cached_network_image.dart';
    2: import 'package:customer/models/rental_order_model.dart';
    3: import 'package:customer/screen_ui/auth_screens/login_screen.dart';
    4: import 'package:customer/screen_ui/multi_vendor_service/wallet_screen/wallet_screen.dart';
    5: import 'package:customer/screen_ui/rental_service/rental_order_details_screen.dart';
    6: import 'package:customer/themes/round_button_fill.dart';
    7: import 'package:flutter/material.dart';
    8: import 'package:get/get.dart';
    9: import '../../constant/constant.dart';

  157:                                           child: Row(
  158:                                             children: [
  159:                                               ClipRRect(
  160:                                                 //borderRadius: BorderRadius.circular(10),
  161:                                                 child: CachedNetworkImage(
  162:                                                   imageUrl: order.rentalVehicleType!.rentalVehicleIcon.toString(),
  163:                                                   height: 60,
  164:                                                   width: 60,
  165:                                                   imageBuilder:
  166:                                                       (context, imageProvider) => Container(
  167:                                                         decoration: BoxDecoration(borderRadius: BorderRadius.circular(10), image: DecorationImage(image: imageProvider, fit: BoxFit.cover)),
  168:                                                       ),
  169:                                                   placeholder: (context, url) => Center(child: CircularProgressIndicator.adaptive(valueColor: AlwaysStoppedAnimation(AppThemeData.primary300))),

  166:                                                       (context, imageProvider) => Container(
  167:                                                         decoration: BoxDecoration(borderRadius: BorderRadius.circular(10), image: DecorationImage(image: imageProvider, fit: BoxFit.cover)),
  168:                                                       ),
  169:                                                   placeholder: (context, url) => Center(child: CircularProgressIndicator.adaptive(valueColor: AlwaysStoppedAnimation(AppThemeData.primary300))),
  170:                                                   errorWidget: (context, url, error) => Image.network(Constant.placeHolderImage, fit: BoxFit.cover),
  171:                                                   fit: BoxFit.cover,
  172:                                                 ),
  173:                                               ),
  174:                                               Expanded(
  175:                                                 child: Padding(
  176:                                                   padding: const EdgeInsets.symmetric(horizontal: 10),
  177:                                                   child: Column(
  178:                                                     crossAxisAlignment: CrossAxisAlignment.start,

```

## FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\rental_service\rental_conformation_screen.dart
```dart
    2: import 'package:customer/models/coupon_model.dart';
    3: import 'package:customer/screen_ui/rental_service/rental_coupon_screen.dart';
    4: import 'package:customer/themes/responsive.dart';
    5: import 'package:customer/themes/show_toast_dialog.dart';
    6: import 'package:customer/utils/network_image_widget.dart';
    7: import 'package:customer/widget/my_separator.dart';
    8: import 'package:dotted_border/dotted_border.dart';
    9: import 'package:flutter/material.dart';
   10: import 'package:flutter_svg/svg.dart';
   11: import 'package:get/get.dart';
   12: import '../../controllers/rental_conformation_controller.dart';
   13: import '../../controllers/theme_controller.dart';
   14: import '../../themes/app_them_data.dart';

  149:                                   crossAxisAlignment: CrossAxisAlignment.start,
  150:                                   children: [
  151:                                     ClipRRect(
  152:                                       borderRadius: BorderRadiusGeometry.circular(10),
  153:                                       child: NetworkImageWidget(imageUrl: controller.rentalOrderModel.value.rentalVehicleType!.rentalVehicleIcon.toString(), height: 50, width: 50, borderRadius: 10),
  154:                                     ),
  155:                                     SizedBox(width: 10),
  156:                                     Expanded(
  157:                                       child: Column(
  158:                                         crossAxisAlignment: CrossAxisAlignment.start,
  159:                                         children: [
  160:                                           Text(
  161:                                             "${controller.rentalOrderModel.value.rentalVehicleType!.name}",

```

## FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\rental_service\rental_home_screen.dart
```dart
    1: import 'dart:developer';
    2: 
    3: import 'package:cached_network_image/cached_network_image.dart';
    4: import 'package:cloud_firestore/cloud_firestore.dart';
    5: import 'package:customer/constant/constant.dart';
    6: import 'package:customer/screen_ui/service_home_screen/service_list_screen.dart';
    7: import 'package:flutter/material.dart';
    8: import 'package:get/get.dart';
    9: import '../../controllers/rental_home_controller.dart';
   10: import '../../controllers/theme_controller.dart';
   11: import '../../models/rental_vehicle_type.dart';

  191:                                         child: Row(
  192:                                           children: [
  193:                                             ClipRRect(
  194:                                               //borderRadius: BorderRadius.circular(10),
  195:                                               child: CachedNetworkImage(
  196:                                                 imageUrl: vehicleType.rentalVehicleIcon.toString(),
  197:                                                 height: 60,
  198:                                                 width: 60,
  199:                                                 imageBuilder:
  200:                                                     (context, imageProvider) =>
  201:                                                         Container(decoration: BoxDecoration(borderRadius: BorderRadius.circular(10), image: DecorationImage(image: imageProvider, fit: BoxFit.cover))),
  202:                                                 placeholder: (context, url) => Center(child: CircularProgressIndicator.adaptive(valueColor: AlwaysStoppedAnimation(AppThemeData.primary300))),
  203:                                                 errorWidget: (context, url, error) => Image.network(Constant.placeHolderImage, fit: BoxFit.cover),

  199:                                                 imageBuilder:
  200:                                                     (context, imageProvider) =>
  201:                                                         Container(decoration: BoxDecoration(borderRadius: BorderRadius.circular(10), image: DecorationImage(image: imageProvider, fit: BoxFit.cover))),
  202:                                                 placeholder: (context, url) => Center(child: CircularProgressIndicator.adaptive(valueColor: AlwaysStoppedAnimation(AppThemeData.primary300))),
  203:                                                 errorWidget: (context, url, error) => Image.network(Constant.placeHolderImage, fit: BoxFit.cover),
  204:                                                 fit: BoxFit.cover,
  205:                                               ),
  206:                                             ),
  207:                                             Expanded(
  208:                                               child: Padding(
  209:                                                 padding: const EdgeInsets.symmetric(horizontal: 10),
  210:                                                 child: Column(
  211:                                                   crossAxisAlignment: CrossAxisAlignment.start,

```

## FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\rental_service\rental_order_details_screen.dart
```dart
    5: import 'package:customer/screen_ui/multi_vendor_service/wallet_screen/wallet_screen.dart';
    6: import 'package:customer/screen_ui/rental_service/rental_review_screen.dart';
    7: import 'package:customer/themes/responsive.dart';
    8: import 'package:customer/themes/show_toast_dialog.dart';
    9: import 'package:customer/utils/network_image_widget.dart';
   10: import 'package:customer/widget/my_separator.dart';
   11: import 'package:flutter/material.dart';
   12: import 'package:flutter/services.dart';
   13: import 'package:flutter_svg/svg.dart';
   14: import 'package:get/get.dart';
   15: import '../../controllers/rental_order_details_controller.dart';
   16: import '../../controllers/theme_controller.dart';
   17: import '../../models/user_model.dart';

  191:                                                       width: 52,
  192:                                                       height: 52,
  193:                                                       child: ClipRRect(
  194:                                                         borderRadius: BorderRadiusGeometry.circular(10),
  195:                                                         child: NetworkImageWidget(imageUrl: controller.driverUser.value?.profilePictureURL ?? '', height: 70, width: 70, borderRadius: 35),
  196:                                                       ),
  197:                                                     ),
  198:                                                     SizedBox(width: 20),
  199:                                                     Column(
  200:                                                       crossAxisAlignment: CrossAxisAlignment.start,
  201:                                                       children: [
  202:                                                         Text(
  203:                                                           controller.order.value.driver?.fullName() ?? '',

  354:                                         Row(
  355:                                           children: [
  356:                                             ClipRRect(
  357:                                               borderRadius: BorderRadius.circular(10),
  358:                                               child: NetworkImageWidget(imageUrl: controller.order.value.rentalVehicleType!.rentalVehicleIcon ?? "", height: 50, width: 50),
  359:                                             ),
  360:                                             const SizedBox(width: 10),
  361:                                             Expanded(
  362:                                               child: Column(
  363:                                                 crossAxisAlignment: CrossAxisAlignment.start,
  364:                                                 children: [
  365:                                                   Text(
  366:                                                     controller.order.value.rentalVehicleType!.name ?? "",

```

## FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\rental_service\rental_review_screen.dart
```dart
    6: import '../../controllers/theme_controller.dart';
    7: import '../../themes/app_them_data.dart';
    8: import '../../themes/round_button_fill.dart';
    9: import '../../themes/text_field_widget.dart';
   10: import '../../utils/network_image_widget.dart';
   11: 
   12: class RentalReviewScreen extends StatelessWidget {
   13:   const RentalReviewScreen({super.key});
   14: 
   15:   @override
   16:   Widget build(BuildContext context) {
   17:     final themeController = Get.find<ThemeController>();
   18:     final isDark = themeController.isDark.value;

  210:                                 boxShadow: [BoxShadow(color: Colors.grey.withOpacity(0.15), blurRadius: 8, spreadRadius: 6)],
  211:                               ),
  212:                               child: ClipRRect(
  213:                                 borderRadius: BorderRadius.circular(60),
  214:                                 child: NetworkImageWidget(
  215:                                   imageUrl: controller.order.value?.driver?.profilePictureURL ?? '',
  216:                                   fit: BoxFit.cover,
  217:                                   height: 110,
  218:                                   width: 110,
  219:                                 ),
  220:                               ),
  221:                             ),
  222:                           ),

```

## FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\service_home_screen\service_list_screen.dart
```dart
    3: import 'package:get/get.dart';
    4: import '../../controllers/service_list_controller.dart';
    5: import '../../controllers/theme_controller.dart';
    6: import '../../themes/app_them_data.dart';
    7: import '../../utils/network_image_widget.dart';
    8: 
    9: class ServiceListScreen extends StatelessWidget {
   10:   const ServiceListScreen({super.key});
   11: 
   12:   @override
   13:   Widget build(BuildContext context) {
   14:     final themeController = Get.find<ThemeController>();
   15:     return GetX(

   74:                                               style: AppThemeData.semiBoldTextStyle(fontSize: 14, color: AppThemeData.grey900),
   75:                                             ),
   76:                                           ),
   77:                                           const Spacer(),
   78:                                           NetworkImageWidget(imageUrl: section.sectionImage ?? '', width: 80, height: 60, fit: BoxFit.contain, showShimmer: false),
   79:                                         ],
   80:                                       ),
   81:                                     ),
   82:                                   );
   83:                                 },
   84:                               ),
   85:                             ],
   86:                           ),

  131:               separatorBuilder: (_, __) => const SizedBox(width: 12),
  132:               itemBuilder: (context, index) {
  133:                 return ClipRRect(
  134:                   borderRadius: BorderRadius.circular(12),
  135:                   child: SizedBox(width: MediaQuery.of(context).size.width * 0.8, child: NetworkImageWidget(imageUrl: bannerList[index].toString(), fit: BoxFit.fill, showShimmer: false)),
  136:                 );
  137:               },
  138:             ),
  139:           ),
  140:           const SizedBox(height: 8),
  141:           Obx(() {
  142:             return Row(
  143:               children: List.generate(bannerList.length, (index) {

```

## FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\utils\network_image_widget.dart
```dart
    1: import 'package:cached_network_image/cached_network_image.dart';
    2: import 'package:flutter/material.dart';
    3: import 'package:shimmer/shimmer.dart';
    4: import '../constant/constant.dart';
    5: 
    6: class NetworkImageWidget extends StatelessWidget {
    7:   final String imageUrl;
    8:   final double? height;
    9:   final double? width;

    2: import 'package:flutter/material.dart';
    3: import 'package:shimmer/shimmer.dart';
    4: import '../constant/constant.dart';
    5: 
    6: class NetworkImageWidget extends StatelessWidget {
    7:   final String imageUrl;
    8:   final double? height;
    9:   final double? width;
   10:   final Widget? errorWidget;
   11:   final BoxFit? fit;
   12:   final double? borderRadius;
   13:   final Color? color;
   14: 

   13:   final Color? color;
   14: 
   15:   final bool showShimmer;
   16: 
   17:   const NetworkImageWidget({super.key, this.height, this.width, this.fit, required this.imageUrl, this.borderRadius, this.errorWidget, this.color, this.showShimmer = true});
   18: 
   19:   @override
   20:   Widget build(BuildContext context) {
   21:     final brightness = Theme.of(context).brightness;
   22:     final isDark = brightness == Brightness.dark;
   23:     return CachedNetworkImage(
   24:       imageUrl: imageUrl,
   25:       fit: fit ?? BoxFit.fitWidth,

   19:   @override
   20:   Widget build(BuildContext context) {
   21:     final brightness = Theme.of(context).brightness;
   22:     final isDark = brightness == Brightness.dark;
   23:     return CachedNetworkImage(
   24:       imageUrl: imageUrl,
   25:       fit: fit ?? BoxFit.fitWidth,
   26:       height: height,
   27:       width: width,
   28:       color: color,
   29:       placeholder: (context, url) => showShimmer
   30:           ? Shimmer.fromColors(
   31:               baseColor: isDark ? const Color(0xFF2A2A2A) : const Color(0xFFE0E0E0),

   36:                 color: isDark ? const Color(0xFF2A2A2A) : const Color(0xFFE0E0E0),
   37:               ),
   38:             )
   39:           : SizedBox(height: height, width: width),
   40:       errorWidget: (context, url, error) => errorWidget ?? Image.network(Constant.placeHolderImage, fit: fit ?? BoxFit.fitWidth, height: height, width: width),
   41:     );
   42:   }
   43: }

```

## FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\widget\story_view\widgets\story_image.dart
```dart
   20:   LoadState state = LoadState.loading; // by default
   21: 
   22:   ImageLoader(this.url, {this.requestHeaders});
   23: 
   24:   /// Load image from disk cache first, if not found then load from network.
   25:   /// `onComplete` is called when [imageBytes] become available.
   26:   void loadImage(VoidCallback onComplete) {
   27:     if (frames != null) {
   28:       state = LoadState.success;
   29:       onComplete();
   30:     }
   31: 
   32:     final fileStream = DefaultCacheManager().getFileStream(url, headers: requestHeaders as Map<String, String>?);

   34:     fileStream.listen(
   35:       (fileResponse) {
   36:         if (fileResponse is! FileInfo) return;
   37:         // the reason for this is that, when the cache manager fetches
   38:         // the image again from network, the provided `onComplete` should
   39:         // not be called again
   40:         if (frames != null) {
   41:           return;
   42:         }
   43: 
   44:         final imageBytes = fileResponse.file.readAsBytesSync();
   45: 
   46:         state = LoadState.success;

```

## FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\widget\story_view\widgets\story_view.dart
```dart
  265:         duration: duration ?? const Duration(seconds: 10));
  266:   }
  267: 
  268:   /// Shorthand for creating a story item from an image provider such as `AssetImage`
  269:   /// or `NetworkImage`. However, the story continues to play while the image loads
  270:   /// up.
  271:   factory StoryItem.pageProviderImage(
  272:     ImageProvider image, {
  273:     Key? key,
  274:     BoxFit imageFit = BoxFit.fitWidth,
  275:     String? caption,
  276:     bool shown = false,
  277:     Duration? duration,

  323:         duration: duration ?? const Duration(seconds: 3));
  324:   }
  325: 
  326:   /// Shorthand for creating an inline story item from an image provider such as `AssetImage`
  327:   /// or `NetworkImage`. However, the story continues to play while the image loads
  328:   /// up.
  329:   factory StoryItem.inlineProviderImage(
  330:     ImageProvider image, {
  331:     Key? key,
  332:     Text? caption,
  333:     bool shown = false,
  334:     bool roundedTop = true,
  335:     bool roundedBottom = false,

```

## FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\widget\restaurant_image_view.dart
```dart
    1: import 'dart:async';
    2: 
    3: import 'package:customer/models/vendor_model.dart';
    4: import 'package:customer/themes/responsive.dart';
    5: import 'package:customer/utils/network_image_widget.dart';
    6: import 'package:flutter/material.dart';
    7: 
    8: class RestaurantImageView extends StatefulWidget {
    9:   final VendorModel vendorModel;
   10: 
   11:   const RestaurantImageView({super.key, required this.vendorModel});
   12: 
   13:   @override

   51:   Widget build(BuildContext context) {
   52:     return SizedBox(
   53:       height: Responsive.height(20, context),
   54:       child: widget.vendorModel.photos == null || widget.vendorModel.photos!.isEmpty
   55:           ? NetworkImageWidget(
   56:               imageUrl: widget.vendorModel.photo.toString(),
   57:               fit: BoxFit.cover,
   58:               height: Responsive.height(20, context),
   59:               width: Responsive.width(100, context),
   60:             )
   61:           : PageView.builder(
   62:               physics: const BouncingScrollPhysics(),
   63:               controller: pageController,

   67:               padEnds: false,
   68:               pageSnapping: true,
   69:               itemBuilder: (BuildContext context, int index) {
   70:                 String image = widget.vendorModel.photos![index];
   71:                 return NetworkImageWidget(
   72:                   imageUrl: image.toString(),
   73:                   fit: BoxFit.cover,
   74:                   height: Responsive.height(20, context),
   75:                   width: Responsive.width(100, context),
   76:                 );
   77:               },
   78:             ),
   79:     );

```

## FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\widget\video_widget.dart
```dart
   23:     _controller = widget.url is File
   24:         ? VideoPlayerController.file(
   25:             widget.url,
   26:           )
   27:         : VideoPlayerController.network(
   28:             widget.url,
   29:           );
   30: 
   31:     _initializeVideoPlayerFuture = _controller.initialize();
   32:   }
   33: 
   34:   @override
   35:   void dispose() {

  100:     _controller = widget.url is File
  101:         ? VideoPlayerController.file(
  102:             widget.url,
  103:           )
  104:         : VideoPlayerController.network(
  105:             widget.url,
  106:           );
  107: 
  108:     _initializeVideoPlayerFuture = _controller.initialize();
  109:     _controller.play();
  110:     _controller.setLooping(true);
  111:     _controller.setVolume(0);
  112:   }

```

## Final Status
STATUS: CUSTOMER_NETWORK_STATUS_SOURCE_AUDIT_CREATED