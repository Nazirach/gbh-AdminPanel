# AUDIT CUSTOMER HOME MENU LIMIT

Generated: 06/29/2026 08:04:46

Mode: read-only. No patch. No Firebase write.

## Pattern: sections
```text
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\constant\collection_name.dart:6: static const String sections = "sections";
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:45: // Load sections
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:46: List<SectionModel> sections = await FireStoreUtils.getSections();
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:48: sectionList.assignAll(sections);
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\ecommarce\home_e_commerce_screen.dart:1248: // Category-wise product sections (2 sections)
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:266: static Future<List<SectionModel>> getSections() async {
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:267: List<SectionModel> sections = [];
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:268: QuerySnapshot<Map<String, dynamic>> productsQuery = await fireStore.collection(CollectionName.sections).where("isActive", isEqualTo: true).orderBy("order", descending: false).get();
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:272: sections.add(SectionModel.fromJson(document.data()));
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:277: return sections;
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:281: List<dynamic> sections = [];
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:284: sections = value.data()!['banners'] ?? [];
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:287: return sections;
```

## Pattern: collection.*sections
```text
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:268: QuerySnapshot<Map<String, dynamic>> productsQuery = await fireStore.collection(CollectionName.sections).where("isActive", isEqualTo: true).orderBy("order", descending: false).get();
```

## Pattern: limit\(9\)
```text
```

## Pattern: limit\(10\)
```text
```

## Pattern: take\(9\)
```text
```

## Pattern: take\(10\)
```text
```

## Pattern: itemCount
```text
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\cab_service_screens\cab_booking_screen.dart:315: itemCount: controller.vehicleTypes.length,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\cab_service_screens\cab_coupon_code_screen.dart:52: itemCount: controller.cabCouponList.length,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\cab_service_screens\cab_home_screen.dart:199: itemCount: bannerList.length,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\cab_service_screens\cab_review_screen.dart:129: itemCount: 5,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\cab_service_screens\Intercity_home_screen.dart:264: itemCount: controller.popularDestination.length,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\cab_service_screens\Intercity_home_screen.dart:372: itemCount: controller.vehicleTypes.length,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\cab_service_screens\my_cab_booking_screen.dart:115: itemCount: orders.length,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\ecommarce\all_brand_product_screen.dart:35: itemCount:  controller.productList.length,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\ecommarce\all_category_product_screen.dart:35: itemCount: controller.productList.length,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\ecommarce\home_e_commerce_screen.dart:268: itemCount: controller.vendorCategoryModel.length,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\ecommarce\home_e_commerce_screen.dart:342: itemCount: controller.advertisementList.length >= 10 ? 10 : controller.advertisementList.length,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\ecommarce\home_e_commerce_screen.dart:404: itemCount: controller.brandList.length,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\ecommarce\home_e_commerce_screen.dart:447: itemCount: controller.categoryWiseProductList.length,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\ecommarce\home_e_commerce_screen.dart:481: itemCount: productList.length > 6 ? 6 : productList.length,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\ecommarce\home_e_commerce_screen.dart:667: //               itemCount:
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\ecommarce\home_e_commerce_screen.dart:697: itemCount: controller.allNearestRestaurant.length > 8 ? 8 : controller.allNearestRestaurant.length,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\ecommarce\home_e_commerce_screen.dart:856: itemCount: controller.bannerModel.length,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\ecommarce\home_e_commerce_screen.dart:943: itemCount: controller.bannerBottomModel.length,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\ecommarce\home_e_commerce_screen.dart:1178: itemCount: 6,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\ecommarce\home_e_commerce_screen.dart:1201: itemCount: 4,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\ecommarce\home_e_commerce_screen.dart:1266: itemCount: 3,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\location_enable_screens\address_list_screen.dart:52: itemCount: controller.shippingAddressList.length,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\advertisement_screens\all_advertisement_screen.dart:50: itemCount: controller.advertisementList.length,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:117: itemCount: cartItem.length,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:1205: itemCount: Constant.driverDeliveryTaxList!.length,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:1221: itemCount: Constant.packagingTaxList!.length,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:1239: itemCount: Constant.platformTaxList!.length,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\cart_screen\coupon_list_screen.dart:74: itemCount: controller.couponList.length,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\cart_screen\oder_placing_screens.dart:162: itemCount: controller.orderModel.value.products!.length,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\cashback_screen\cashback_offers_list.dart:31: itemCount: controller.cashbackList.length,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_booking\dine_in_booking_screen.dart:126: itemCount: controller.featureList.length,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_booking\dine_in_booking_screen.dart:135: itemCount: controller.historyList.length,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\book_table_screen.dart:115: itemCount: controller.dateList.length,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_details_screen.dart:93: itemCount: controller.vendorModel.value.photos!.length,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_details_screen.dart:442: itemCount: controller.vendorModel.value.restaurantMenuPhotos!.length,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_details_screen.dart:687: itemCount: productModel.vendorModel.value.workingHours!.length,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_details_screen.dart:713: itemCount: workingHours.timeslot!.length,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_restaurant_list_screen.dart:48: itemCount: controller.vendorSearchList.length,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:289: itemCount: controller.popularRestaurantList.length,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:436: itemCount: controller.allNearestRestaurant.length,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:583: itemCount: controller.newArrivalRestaurantList.length >= 10 ? 10 : controller.newArrivalRestaurantList.length,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:712: itemCount: controller.vendorCategoryModel.length,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_screen.dart:772: itemCount: controller.bannerBottomModel.length,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\view_all_category_dine_in_screen.dart:44: itemCount: controller.vendorCategoryModel.length,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:172: itemCount: controller.favouriteVendorList.length,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\favourite_screens\favourite_screen.dart:377: itemCount: controller.favouriteFoodList.length,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\gift_card\gift_card_screen.dart:68: itemCount: controller.giftCardList.length,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\gift_card\gift_card_screen.dart:120: itemCount: controller.amountList.length,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\gift_card\history_gift_card.dart:31: itemCount: controller.giftCardsOrderList.length,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\category_restaurant_screen.dart:34: itemCount: controller.allNearestRestaurant.length,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\discount_restaurant_list_screen.dart:43: itemCount: controller.vendorList.length,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:447: itemCount: controller.advertisementList.length >= 10 ? 10 : controller.advertisementList.length,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:706: itemCount: controller.popularRestaurantList.length,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:879: itemCount: controller.allNearestRestaurant.length,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1051: itemCount: controller.newArrivalRestaurantList.length >= 10 ? 10 : controller.newArrivalRestaurantList.length,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1342: itemCount: controller.couponRestaurantList.length >= 15 ? 15 : controller.couponRestaurantList.length,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1481: itemCount: controller.bannerModel.length,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1568: itemCount: controller.bannerBottomModel.length,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1654: itemCount: controller.vendorCategoryModel.length,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1710: itemCount: controller.storyList.length,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:1866: itemCount: controller.homeController.allNearestRestaurant.length,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:2104: itemCount: 5,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:2119: itemCount: 5,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen.dart:2137: itemCount: 3,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:329: itemCount: controller.advertisementList.length >= 10 ? 10 : controller.advertisementList.length,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:523: itemCount: controller.vendorCategoryModel.length >= 8 ? 8 : controller.vendorCategoryModel.length,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:605: itemCount: controller.couponRestaurantList.length >= 15 ? 15 : controller.couponRestaurantList.length,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:685: itemCount: controller.bannerModel.length,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:770: itemCount: controller.storyList.length,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:901: itemCount: controller.allNearestRestaurant.length,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:1125: itemCount: 5,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:1140: itemCount: 3,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\restaurant_list_screen.dart:44: itemCount: controller.vendorSearchList.length,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\view_all_category_screen.dart:37: itemCount: controller.vendorCategoryModel.length,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:321: itemCount: 2,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:494: itemCount: controller.orderModel.value.products!.length,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:1147: itemCount: controller.orderModel.value.driverDeliveryTax?.length,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:1162: itemCount: controller.orderModel.value.packagingTax!.length,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:1180: itemCount: controller.orderModel.value.platformTax!.length,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\order_list_screen\order_screen.dart:152: itemCount: controller.allList.length,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\order_list_screen\order_screen.dart:166: itemCount: controller.inProgressList.length,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\order_list_screen\order_screen.dart:180: itemCount: controller.deliveredList.length,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\order_list_screen\order_screen.dart:194: itemCount: controller.cancelledList.length,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\order_list_screen\order_screen.dart:208: itemCount: controller.rejectedList.length,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\order_list_screen\order_screen.dart:312: itemCount: orderModel.products!.length,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\rate_us_screen\rate_product_screen.dart:62: itemCount: 5,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\rate_us_screen\rate_product_screen.dart:73: itemCount: controller.reviewAttributeList.length,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\rate_us_screen\rate_product_screen.dart:93: itemCount: 5,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\rate_us_screen\rate_product_screen.dart:156: itemCount: controller.images.length,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:169: itemCount: controller.vendorModel.value.photos!.length,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:668: itemCount: productModel.vendorModel.value.workingHours!.length,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:694: itemCount: workingHours.timeslot!.length,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:768: itemCount: controller.couponList.length,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:857: itemCount: controller.vendorCategoryList.length,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:873: itemCount: controller.productList.where((p0) => p0.categoryID == vendorCategoryModel.id).toList().length,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1374: itemCount: productModel.productSpecification!.length,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1550: itemCount: productModel.itemAttribute!.attributes!.length,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1715: itemCount: productModel.addOnsTitle!.length,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\review_list_screen\review_list_screen.dart:44: itemCount: controller.ratingList.length,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\review_list_screen\review_list_screen.dart:91: itemCount: 5,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\review_list_screen\review_list_screen.dart:110: itemCount: ratingModel.reviewAttributes!.length,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\review_list_screen\review_list_screen.dart:148: itemCount: 5,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\review_list_screen\review_list_screen.dart:165: itemCount: ratingModel.photos?.length,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\search_screen\search_screen.dart:78: itemCount: controller.vendorSearchList.length,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\search_screen\search_screen.dart:249: itemCount: controller.productSearchList.length,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\wallet_screen\wallet_screen.dart:156: itemCount: controller.walletTransactionList.length,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\on_boarding_screen\on_boarding_screen.dart:48: itemCount: pageCount,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\on_demand_service\favourite_ondemand_screen.dart:83: itemCount: controller.lstFav.length,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\on_demand_service\my_booking_on_demand_screen.dart:62: itemCount: orders.length,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\on_demand_service\on_demand_booking_screen.dart:240: itemCount: controller.couponList.length,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\on_demand_service\on_demand_category_screen.dart:70: itemCount: controller.categories.length,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\on_demand_service\on_demand_details_screen.dart:346: itemCount: photos.length,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\on_demand_service\on_demand_details_screen.dart:380: itemCount: reviews.length,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\on_demand_service\on_demand_home_screen.dart:214: itemCount: controller.categories.length > 3 ? 3 : controller.categories.length,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\on_demand_service\on_demand_home_screen.dart:283: itemCount: controller.providerList.length >= 6 ? 6 : controller.providerList.length,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\on_demand_service\on_demand_home_screen.dart:331: itemCount: bannerList.length,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\on_demand_service\on_demand_order_details_screen.dart:563: itemCount: controller.couponList.length,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\on_demand_service\on_demand_review_screen.dart:77: itemCount: 5,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\on_demand_service\provider_screen.dart:92: itemCount: controller.providerList.length,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\on_demand_service\view_all_popular_service_screen.dart:57: itemCount: controller.providerList.length,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\on_demand_service\view_category_service_screen.dart:52: itemCount: controller.providerList.length,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\parcel_service\home_parcel_screen.dart:173: itemCount: controller.parcelCategory.length,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\parcel_service\home_parcel_screen.dart:253: itemCount: bannerList.length,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\parcel_service\my_booking_screen.dart:90: itemCount: orders.length,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\parcel_service\parcel_coupon_screen.dart:52: itemCount: controller.cabCouponList.length,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\parcel_service\parcel_order_details.dart:197: itemCount: controller.parcelOrder.value.parcelImages!.length,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\parcel_service\parcel_order_details.dart:462: itemCount: history.length,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\parcel_service\parcel_review_screen.dart:97: itemCount: 5,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\rental_service\my_rental_booking_screen.dart:89: itemCount: orders.length,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\rental_service\rental_coupon_screen.dart:52: itemCount: controller.cabCouponList.length,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\rental_service\rental_home_screen.dart:154: itemCount: controller.vehicleTypes.length,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\rental_service\rental_home_screen.dart:326: itemCount: controller.rentalPackages.length,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\rental_service\rental_review_screen.dart:171: itemCount: 5,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\service_home_screen\service_list_screen.dart:51: itemCount: controller.sectionList.length,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\service_home_screen\service_list_screen.dart:130: itemCount: bannerList.length,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\widget\firebase_pagination\src\widgets\views\build_pagination.dart:101: itemCount: items.length + (isLoading ? 1 : 0),
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\widget\firebase_pagination\src\widgets\views\build_pagination.dart:118: itemCount: items.length + (isLoading ? 1 : 0),
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\widget\firebase_pagination\src\widgets\views\build_pagination.dart:168: itemCount: items.length + (isLoading ? 1 : 0),
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\widget\osm_map\map_picker_page.dart:82: itemCount: controller.searchResults.length,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\widget\restaurant_image_view.dart:66: itemCount: widget.vendorModel.photos!.length,
```

## Pattern: GridView
```text
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\ecommarce\all_brand_product_screen.dart:31: child: GridView.builder(
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\ecommarce\all_category_product_screen.dart:31: child: GridView.builder(
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\ecommarce\home_e_commerce_screen.dart:368: child: GridView.count(
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\ecommarce\home_e_commerce_screen.dart:401: GridView.builder(
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\ecommarce\home_e_commerce_screen.dart:476: GridView.builder(
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\ecommarce\home_e_commerce_screen.dart:1216: child: GridView.count(
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\ecommarce\home_e_commerce_screen.dart:1237: child: GridView.count(
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\change langauge\change_language_screen.dart:42: child: GridView.count(
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\view_all_category_dine_in_screen.dart:41: child: GridView.builder(
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\home_screen_two.dart:520: GridView.builder(
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\home_screen\view_all_category_screen.dart:34: child: GridView.builder(
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\on_demand_service\on_demand_category_screen.dart:68: : GridView.builder(
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\on_demand_service\on_demand_details_screen.dart:345: return GridView.builder(
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\service_home_screen\service_list_screen.dart:50: GridView.builder(
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\widget\firebase_pagination\src\models\view_type.dart:11: /// Loads the data as a [GridView].
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\widget\firebase_pagination\src\widgets\views\build_pagination.dart:57: /// The delegate to use for the [GridView].
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\widget\firebase_pagination\src\widgets\views\build_pagination.dart:111: return GridView.builder(
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\widget\firebase_pagination\src\firestore_pagination.dart:30: /// Data can be represented in a [ListView], [GridView] or scollable [Wrap].
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\widget\firebase_pagination\src\firestore_pagination.dart:40: /// Data can be represented in a [ListView], [GridView] or scollable [Wrap].
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\widget\firebase_pagination\src\firestore_pagination.dart:101: /// The delegate to use for the [GridView].
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\widget\firebase_pagination\src\realtime_db_pagination.dart:30: /// Data can be represented in a [ListView], [GridView] or scollable [Wrap].
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\widget\firebase_pagination\src\realtime_db_pagination.dart:40: /// Data can be represented in a [ListView], [GridView] or scollable [Wrap].
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\widget\firebase_pagination\src\realtime_db_pagination.dart:122: /// The delegate to use for the [GridView].
```

## Pattern: Explore Our Services
```text
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\lang\app_ar.dart:76: 'Explore Our Services': 'استكشف خدماتنا',
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\lang\app_en.dart:76: 'Explore Our Services': 'Explore Our Services',
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\service_home_screen\service_list_screen.dart:48: Text("Explore Our Services".tr, style: AppThemeData.semiBoldTextStyle(fontSize: 20, color: themeController.isDark.value ? AppThemeData.grey50 : AppThemeData.grey900)),
```

## Pattern: serviceTypeFlag
```text
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:113: if (sectionModel.serviceTypeFlag == "ecommerce-service" || sectionModel.serviceTypeFlag == "delivery-service") {
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:117: if (sectionModel.serviceTypeFlag == "ecommerce-service") {
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:119: } else if (sectionModel.serviceTypeFlag == "cab-service") {
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:121: } else if (sectionModel.serviceTypeFlag == "rental-service") {
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:123: } else if (sectionModel.serviceTypeFlag == "parcel_delivery") {
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:125: } else if (sectionModel.serviceTypeFlag == "ondemand-service") {
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:132: if (sectionModel.serviceTypeFlag == "ecommerce-service") {
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:134: } else if (sectionModel.serviceTypeFlag == "cab-service") {
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:136: } else if (sectionModel.serviceTypeFlag == "rental-service") {
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:138: } else if (sectionModel.serviceTypeFlag == "parcel_delivery") {
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:140: } else if (sectionModel.serviceTypeFlag == "ondemand-service") {
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:180: if (sectionModel.serviceTypeFlag == "ecommerce-service") {
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\models\section_model.dart:15: String? serviceTypeFlag;
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\models\section_model.dart:39: this.serviceTypeFlag,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\models\section_model.dart:58: serviceTypeFlag = json['serviceTypeFlag'] ?? '';
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\models\section_model.dart:90: data['serviceTypeFlag'] = serviceTypeFlag;
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\cart_screen\oder_placing_screens.dart:203: if (Constant.sectionConstantModel!.serviceTypeFlag == "ecommerce-service") {
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:76: Constant.sectionConstantModel!.serviceTypeFlag == 'ecommerce-service' &&
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\order_list_screen\order_details_screen.dart:1088: ? Constant.sectionConstantModel!.serviceTypeFlag == 'ecommerce-service'
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\order_list_screen\order_screen.dart:376: ? Constant.sectionConstantModel!.serviceTypeFlag == 'ecommerce-service'
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:299: Constant.sectionConstantModel!.serviceTypeFlag == "ecommerce-service"
```

## Pattern: orderBy
```text
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_order_details_controller.dart:53: final order = await FireStoreUtils.getProviderOrderById(onProviderOrder.value!.id);
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\help_support_screen\help_support_screen.dart:80: query: FireStoreUtils.fireStore.collection(CollectionName.chat).doc(FireStoreUtils.getCurrentUid()).collection('thread').orderBy('createdAt', descending: true),
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\chat_screens\chat_screen.dart:74: // orderBy is compulsory to enable pagination
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\chat_screens\chat_screen.dart:75: query: FireStoreUtils.fireStore.collection(CollectionName.chat).doc(controller.orderId.value).collection("thread").orderBy('createdAt', descending: true),
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\chat_screens\driver_inbox_screen.dart:41: .orderBy('createdAt', descending: true),
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\chat_screens\driver_inbox_screen.dart:132: // orderBy is compulsory to enable pagination
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\chat_screens\restaurant_inbox_screen.dart:39: .orderBy('createdAt', descending: true),
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\chat_screens\restaurant_inbox_screen.dart:130: // orderBy is compulsory to enable pagination
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\wallet_screen\wallet_screen.dart:178: final orderData = await FireStoreUtils.getOrderByIdFromAllCollections(orderId);
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\wallet_screen\wallet_screen.dart:206: //       .getOrderByOrderId(transactionModel.orderId.toString())
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\on_demand_service\provider_inbox_screen.dart:37: .orderBy('createdAt', descending: true),
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\on_demand_service\provider_inbox_screen.dart:128: // orderBy is compulsory to enable pagination
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\on_demand_service\provider_inbox_screen.dart:238: //         // orderBy is compulsory to enable pagination
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\on_demand_service\provider_inbox_screen.dart:239: //         query: FireStoreUtils.fireStore.collection('chat_provider').where("customerId", isEqualTo: FireStoreUtils.getCurrentUid()).orderBy('createdAt', descending: true),
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\on_demand_service\worker_inbox_screen.dart:37: .orderBy('createdAt', descending: true),
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\on_demand_service\worker_inbox_screen.dart:129: // orderBy is compulsory to enable pagination
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\on_demand_service\worker_inbox_screen.dart:239: //         // orderBy is compulsory to enable pagination
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\on_demand_service\worker_inbox_screen.dart:240: //         query: FireStoreUtils.fireStore.collection('chat_provider').where("customerId", isEqualTo: FireStoreUtils.getCurrentUid()).orderBy('createdAt', descending: true),
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:268: QuerySnapshot<Map<String, dynamic>> productsQuery = await fireStore.collection(CollectionName.sections).where("isActive", isEqualTo: true).orderBy("order", descending: false).get();
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:308: .orderBy('priority', descending: false)
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:449: .orderBy('date', descending: true)
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:450: .orderBy('createdAt', descending: true)
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:466: .orderBy('date', descending: true)
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:467: .orderBy('createdAt', descending: true)
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:529: .orderBy("set_order", descending: false)
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:797: .orderBy("createdAt", descending: true)
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:925: .orderBy("createdAt", descending: false)
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:942: .orderBy("createdAt", descending: false)
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1381: .orderBy('date', descending: true)
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1446: .orderBy('createdAt', descending: false)
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1629: .orderBy("set_order", descending: false)
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1706: static Future<OrderModel?> getOrderByOrderId(String orderId) async {
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1828: .orderBy('set_order', descending: false)
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1980: .orderBy('createdAt', descending: true)
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2035: static Future<CabOrderModel?> getCabOrderById(String orderId) async {
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2046: print('getCabOrderById error: $e\n$s');
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2063: print('getCabOrderById error: $e\n$s');
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2087: //   await fireStore.collection(CollectionName.rides).where('authorID', isEqualTo: FireStoreUtils.getCurrentUid()).orderBy('createdAt', descending: true).get().then((value) {
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2101: .orderBy('createdAt', descending: true)
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2195: await fireStore.collection(CollectionName.providersServices).where('author', isEqualTo: authId).where('publish', isEqualTo: true).orderBy('createdAt', descending: false).get().then((value) {
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2458: //       .orderBy("createdAt", descending: true)
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2474: .orderBy("createdAt", descending: true)
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2492: static Future<OnProviderOrderModel?> getProviderOrderById(String orderId) async {
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2644: await fireStore.collection(CollectionName.rentalPackages).where("vehicleTypeId", isEqualTo: vehicleId).orderBy("ordering", descending: false).get().then((value) {
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2664: .orderBy('createdAt', descending: true)
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2692: static Future<RentalOrderModel?> getRentalOrderById(String orderId) async {
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2721: static Future<dynamic> getOrderByIdFromAllCollections(String orderId) async {
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\widget\firebase_pagination\src\realtime_db_pagination.dart:44: required this.orderBy,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\widget\firebase_pagination\src\realtime_db_pagination.dart:87: /// FirebaseDatabase.instance.ref('messages').orderByChild('createdAt')
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\widget\firebase_pagination\src\realtime_db_pagination.dart:89: /// Then the value of [orderBy] should be `createdAt`.
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\widget\firebase_pagination\src\realtime_db_pagination.dart:92: final String? orderBy;
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\widget\firebase_pagination\src\realtime_db_pagination.dart:94: /// Fetches data is decending order for the given [orderBy] field.
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\widget\firebase_pagination\src\realtime_db_pagination.dart:239: )[widget.orderBy],
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\widget\firebase_pagination\src\realtime_db_pagination.dart:249: )[widget.orderBy],
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\widget\firebase_pagination\src\realtime_db_pagination.dart:311: )[widget.orderBy],
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\widget\firebase_pagination\src\realtime_db_pagination.dart:319: )[widget.orderBy],
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\widget\geoflutterfire\src\collection\base.dart:182: return temp.orderBy('$field.geohash').startAt([geoHash]).endAt([end]);
```

## Pattern: isActive
```text
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\constant\constant.dart:675: isActive: true,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\change_language_controller.dart:28: if (languageModel.isActive == true) {
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\global_setting_controller.dart:21: FireStoreUtils.fireStore.collection(CollectionName.currencies).where("isActive", isEqualTo: true).snapshots().listen((event) {
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\global_setting_controller.dart:25: Constant.currencyModel = CurrencyModel(id: "", code: "USD", decimal: 2, isactive: true, name: "US Dollar", symbol: "\$", symbolatright: false);
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:43: currencyData.value = currency ?? CurrencyModel(id: "", code: "USD", decimal: 2, isactive: true, name: "US Dollar", symbol: "\$", symbolatright: false);
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\models\currency_model.dart:5: bool isactive;
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\models\currency_model.dart:14: this.isactive = false,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\models\currency_model.dart:26: isactive: parsedJson['isActive'] ?? '',
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\models\currency_model.dart:40: 'isActive': isactive,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\models\language_model.dart:2: bool? isActive;
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\models\language_model.dart:8: LanguageModel({this.isActive, this.slug, this.title, this.isRtl, this.image});
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\models\language_model.dart:11: isActive = json['isActive'];
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\models\language_model.dart:20: data['isActive'] = isActive;
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\models\rental_vehicle_type.dart:7: bool? isActive;
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\models\rental_vehicle_type.dart:11: RentalVehicleType({this.rentalVehicleIcon, this.shortDescription, this.name, this.description, this.id, this.isActive, this.supportedVehicle, this.capacity});
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\models\rental_vehicle_type.dart:19: isActive = json['isActive'];
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\models\rental_vehicle_type.dart:31: data['isActive'] = isActive;
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\models\section_model.dart:12: bool? isActive;
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\models\section_model.dart:32: this.isActive,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\models\section_model.dart:54: isActive = json['isActive'];
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\models\section_model.dart:87: data['isActive'] = isActive;
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\models\user_model.dart:19: bool? isActive;
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\models\user_model.dart:61: this.isActive,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\models\user_model.dart:129: isActive = json['isActive'];
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\models\user_model.dart:191: data['isActive'] = isActive ?? false;
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\models\vehicle_type.dart:7: bool? isActive;
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\models\vehicle_type.dart:20: this.isActive,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\models\vehicle_type.dart:33: isActive = json['isActive'];
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\models\vehicle_type.dart:48: data['isActive'] = isActive;
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\models\worker_provider.dart:95: //       active: json['active'] ?? json['isActive'] ?? false,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\models\worker_provider.dart:135: //       'isActive': active,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:268: QuerySnapshot<Map<String, dynamic>> productsQuery = await fireStore.collection(CollectionName.sections).where("isActive", isEqualTo: true).orderBy("order", descending: false).get();
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:292: await fireStore.collection(CollectionName.currency).where("isActive", isEqualTo: true).get().then((value) {
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1993: await fireStore.collection(CollectionName.vehicleType).where('sectionId', isEqualTo: Constant.sectionConstantModel!.id).where("isActive", isEqualTo: true).get().then((value) {
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2628: await fireStore.collection(CollectionName.rentalVehicleType).where('sectionId', isEqualTo: Constant.sectionConstantModel!.id).where("isActive", isEqualTo: true).get().then((value) {
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\widget\story_view\widgets\story_view.dart:672: if (_nextDebouncer?.isActive == false) {
```

## Pattern: active
```text
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\constant\constant.dart:117: static bool isCashbackActive = false;
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\constant\constant.dart:675: isActive: true,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cart_controller.dart:313: if (Constant.isCashbackActive == true) {
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cart_controller.dart:512: if (Constant.isCashbackActive == true && bestCashback.value.id != null) {
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\change_language_controller.dart:28: if (languageModel.isActive == true) {
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\global_setting_controller.dart:21: FireStoreUtils.fireStore.collection(CollectionName.currencies).where("isActive", isEqualTo: true).snapshots().listen((event) {
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\global_setting_controller.dart:25: Constant.currencyModel = CurrencyModel(id: "", code: "USD", decimal: 2, isactive: true, name: "US Dollar", symbol: "\$", symbolatright: false);
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\login_controller.dart:53: if (userModel.active == true) {
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\login_controller.dart:113: if (userModel.active == true) {
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\login_controller.dart:179: if (userModel.active == true) {
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_booking_controller.dart:60: FireStoreUtils.getProviderCoupon(provider.value!.author!).then((activeCoupons) => couponList.assignAll(activeCoupons));
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\otp_verification_controller.dart:18: /// Reactive Strings
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\otp_verification_controller.dart:73: final userModel = UserModel(id: result.user!.uid, countryCode: countryCode.value, countryISOCode: countryISOCode.value, phoneNumber: phoneNumber.value, fcmToken: fcmToken, active: true);
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\otp_verification_controller.dart:95: if (userModel.active == false) {
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_details_controller.dart:279: (Constant.taxScope == "order" ? [] : Constant.taxProductList?.where((activeTax) => productModel.taxSetting?.any((productTax) => productTax.id == activeTax.id) ?? false).toList())!;
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_details_controller.dart:293: (Constant.taxScope == "order" ? [] : Constant.taxProductList?.where((activeTax) => productModel.taxSetting?.any((productTax) => productTax.id == activeTax.id) ?? false).toList())!;
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:43: currencyData.value = currency ?? CurrencyModel(id: "", code: "USD", decimal: 2, isactive: true, name: "US Dollar", symbol: "\$", symbolatright: false);
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\sign_up_controller.dart:87: userModel.value.active = true;
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\sign_up_controller.dart:127: userModel.value.active = true;
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\splash_controller.dart:107: if (userModel.active == false) {
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\splash_controller.dart:108: log("SPLASH_DEBUG_NAV: LoginScreen_inactive_user");
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\models\currency_model.dart:5: bool isactive;
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\models\currency_model.dart:14: this.isactive = false,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\models\currency_model.dart:26: isactive: parsedJson['isActive'] ?? '',
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\models\currency_model.dart:40: 'isActive': isactive,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\models\language_model.dart:2: bool? isActive;
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\models\language_model.dart:8: LanguageModel({this.isActive, this.slug, this.title, this.isRtl, this.image});
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\models\language_model.dart:11: isActive = json['isActive'];
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\models\language_model.dart:20: data['isActive'] = isActive;
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\models\rental_vehicle_type.dart:7: bool? isActive;
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\models\rental_vehicle_type.dart:11: RentalVehicleType({this.rentalVehicleIcon, this.shortDescription, this.name, this.description, this.id, this.isActive, this.supportedVehicle, this.capacity});
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\models\rental_vehicle_type.dart:19: isActive = json['isActive'];
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\models\rental_vehicle_type.dart:31: data['isActive'] = isActive;
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\models\section_model.dart:12: bool? isActive;
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\models\section_model.dart:13: bool? dineInActive;
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\models\section_model.dart:32: this.isActive,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\models\section_model.dart:35: this.dineInActive,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\models\section_model.dart:54: isActive = json['isActive'];
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\models\section_model.dart:56: dineInActive = json['dine_in_active'] ?? false;
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\models\section_model.dart:87: data['isActive'] = isActive;
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\models\section_model.dart:88: data['dine_in_active'] = dineInActive;
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\models\user_model.dart:18: bool? active;
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\models\user_model.dart:19: bool? isActive;
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\models\user_model.dart:60: this.active,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\models\user_model.dart:61: this.isActive,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\models\user_model.dart:128: active = json['active'];
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\models\user_model.dart:129: isActive = json['isActive'];
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\models\user_model.dart:190: data['active'] = active;
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\models\user_model.dart:191: data['isActive'] = isActive ?? false;
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\models\vehicle_type.dart:7: bool? isActive;
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\models\vehicle_type.dart:20: this.isActive,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\models\vehicle_type.dart:33: isActive = json['isActive'];
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\models\vehicle_type.dart:48: data['isActive'] = isActive;
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\models\vendor_model.dart:8: bool? dineInActive;
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\models\vendor_model.dart:54: this.dineInActive,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\models\vendor_model.dart:101: dineInActive = json['dine_in_active'];
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\models\vendor_model.dart:171: data['dine_in_active'] = dineInActive;
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\models\worker_model.dart:17: bool? active;
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\models\worker_model.dart:37: this.active = false,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\models\worker_model.dart:63: active: parsedJson['active'] ?? false,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\models\worker_model.dart:86: 'active': active,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\models\worker_provider.dart:11: //   bool active;
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\models\worker_provider.dart:53: //     this.active = false,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\models\worker_provider.dart:95: //       active: json['active'] ?? json['isActive'] ?? false,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\models\worker_provider.dart:134: //       'active': active,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\models\worker_provider.dart:135: //       'isActive': active,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\cab_service_screens\cab_booking_screen.dart:91: markers: controller.markers.toSet(), // reactive marker set
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\cab_service_screens\cab_booking_screen.dart:1599: activeColor: isDark ? AppThemeData.primary300 : AppThemeData.primary300,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\cab_service_screens\Intercity_home_screen.dart:88: markers: controller.markers.toSet(), // reactive marker set
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\cab_service_screens\Intercity_home_screen.dart:1604: activeColor: isDark ? AppThemeData.primary300 : AppThemeData.primary300,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\cab_service_screens\my_cab_booking_screen.dart:468: activeColor: isDark ? AppThemeData.primary300 : AppThemeData.primary300,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\location_enable_screens\enter_manually_location.dart:66: activeThumbColor: Colors.green,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\location_enable_screens\enter_manually_location.dart:67: inactiveThumbColor: Colors.grey,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:426: activeColor: AppThemeData.primary300,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\cart_screen\cart_screen.dart:477: activeColor: AppThemeData.primary300,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\cart_screen\select_payment_screen.dart:199: activeColor: isDark ? AppThemeData.primary300 : AppThemeData.primary300,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\book_table_screen.dart:290: activeColor: AppThemeData.primary300,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\book_table_screen.dart:307: activeColor: AppThemeData.primary300,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\gift_card\select_gift_payment_screen.dart:211: activeColor: isDark ? AppThemeData.primary300 : AppThemeData.primary300,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\profile_screen\profile_screen.dart:81: if (Constant.sectionConstantModel!.dineInActive == true)
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\profile_screen\profile_screen.dart:88: if (Constant.isCashbackActive == true)
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\profile_screen\profile_screen.dart:97: Constant.sectionConstantModel!.dineInActive == true
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\profile_screen\profile_screen.dart:392: child: Obx(() => CupertinoSwitch(value: controller.isDarkModeSwitch.value, activeTrackColor: AppThemeData.primary300, onChanged: controller.toggleDarkMode)),
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:341: controller.vendorModel.value.dineInActive == true || (controller.vendorModel.value.openDineTime != null && controller.vendorModel.value.openDineTime!.isNotEmpty)
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:1759: activeColor: AppThemeData.primary300,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\wallet_screen\payment_list_screen.dart:171: activeColor: isDark ? AppThemeData.primary300 : AppThemeData.primary300,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\on_demand_service\on_demand_payment_screen.dart:250: activeColor: isDark ? AppThemeData.primary300 : AppThemeData.primary300,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\parcel_service\parcel_order_confirmation.dart:596: activeColor: isDark ? AppThemeData.primary300 : AppThemeData.primary300,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\rental_service\my_rental_booking_screen.dart:319: activeColor: isDark ? AppThemeData.primary300 : AppThemeData.primary300,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\rental_service\rental_home_screen.dart:613: activeColor: isDark ? AppThemeData.primary300 : AppThemeData.primary300,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\rental_service\rental_order_details_screen.dart:852: activeColor: isDark ? AppThemeData.primary300 : AppThemeData.primary300,
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:268: QuerySnapshot<Map<String, dynamic>> productsQuery = await fireStore.collection(CollectionName.sections).where("isActive", isEqualTo: true).orderBy("order", descending: false).get();
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:292: await fireStore.collection(CollectionName.currency).where("isActive", isEqualTo: true).get().then((value) {
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:709: Constant.isCashbackActive = cashbackSnap.data()?["isEnable"] ?? false;
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:711: Constant.isCashbackActive = false;
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:1993: await fireStore.collection(CollectionName.vehicleType).where('sectionId', isEqualTo: Constant.sectionConstantModel!.id).where("isActive", isEqualTo: true).get().then((value) {
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart:2628: await fireStore.collection(CollectionName.rentalVehicleType).where('sectionId', isEqualTo: Constant.sectionConstantModel!.id).where("isActive", isEqualTo: true).get().then((value) {
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\themes\show_toast_dialog.dart:22: /// Dismiss any active loading indicator.
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\widget\story_view\widgets\story_view.dart:671: // if debounce timed out (not active) then continue anim
C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\widget\story_view\widgets\story_view.dart:672: if (_nextDebouncer?.isActive == false) {
```

## Final Status
STATUS: CUSTOMER_HOME_MENU_LIMIT_AUDIT_CREATED