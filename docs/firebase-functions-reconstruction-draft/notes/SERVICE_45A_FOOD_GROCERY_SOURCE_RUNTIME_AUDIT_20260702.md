# SERVICE 45A FOOD GROCERY SOURCE + RUNTIME AUDIT

Generated: 07/02/2026 02:38:49
Mode: READ ONLY.
Section: Food Grocery
SectionId: 6319dc53314ee

Git customer path: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7
Runtime customer path: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer

## Path Check
TEXT_START
GIT_SOURCE_EXISTS: True
RUNTIME_SOURCE_EXISTS: True
TEXT_END

## Source Matches
TEXT_START
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\service_list_controller.dart:52:print("SERVICE_LIST_DEBUG: sectionList assigned count=${sectionList.length}");
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\service_list_controller.dart:53:for (final s in sectionList) {
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\service_list_controller.dart:54:  print("SERVICE_LIST_DEBUG_ITEM: id=${s.id} name=${s.name} type=${s.serviceTypeFlag} isActive=${s.isActive}");
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\service_list_controller.dart:55:}
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\service_list_controller.dart:56:// END TEMP DEBUG STEP35A
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\service_list_controller.dart:57:await FireStoreUtils.getSectionBannerList().then((value) {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\service_list_controller.dart:58:      serviceListBanner.assignAll(value);
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\service_list_controller.dart:59:    });
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\service_list_controller.dart:60:
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\service_list_controller.dart:84:          ShowToastDialog.closeLoader();
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\service_list_controller.dart:85:          if (sectionModel.serviceType == 'Ecommerce Service') {
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\service_list_controller.dart:86:            await Preferences.setString(Preferences.foodDeliveryType, 'Delivery');
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\service_list_controller.dart:87:          }
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\service_list_controller.dart:88:          await _navigate(sectionModel);
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\service_list_controller.dart:89:        } else {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\service_list_controller.dart:90:          ShowToastDialog.closeLoader();
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\service_list_controller.dart:91:          Get.offAll(() => const LoginScreen());
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\service_list_controller.dart:92:        }
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\service_list_controller.dart:118:    });
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\service_list_controller.dart:119:
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\service_list_controller.dart:120:    if (sectionModel.serviceTypeFlag == "ecommerce-service" || sectionModel.serviceTypeFlag == "delivery-service") {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\service_list_controller.dart:121:      if (cartItem.isNotEmpty) {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\service_list_controller.dart:122:        showAlertDialog(Get.context!, UserModel(), sectionModel);
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\service_list_controller.dart:123:      } else {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\service_list_controller.dart:124:        _goToServiceRoute(sectionModel);
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\service_list_controller.dart:125:      }
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\service_list_controller.dart:126:    } else {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\service_list_controller.dart:130:
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\service_list_controller.dart:131:  void _goToServiceRoute(SectionModel sectionModel) {
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\service_list_controller.dart:132:    if (sectionModel.serviceTypeFlag == "ecommerce-service") {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\service_list_controller.dart:133:      Get.to(DashBoardEcommerceScreen());
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\service_list_controller.dart:134:    } else if (sectionModel.serviceTypeFlag == "cab-service") {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\service_list_controller.dart:135:      Get.to(CabDashboardScreen());
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\service_list_controller.dart:136:    } else if (sectionModel.serviceTypeFlag == "rental-service") {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\service_list_controller.dart:137:      Get.to(RentalDashboardScreen());
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\service_list_controller.dart:138:    } else if (sectionModel.serviceTypeFlag == "parcel_delivery") {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\service_list_controller.dart:139:      Get.to(ParcelDashboardScreen());
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\service_list_controller.dart:140:    } else if (sectionModel.serviceTypeFlag == "ondemand-service") {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\service_list_controller.dart:141:      Get.to(OnDemandDashboardScreen());
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\service_list_controller.dart:142:    } else {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\service_list_controller.dart:143:      Get.to(() => DashBoardScreen());
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\service_list_controller.dart:144:    }
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\service_list_controller.dart:145:  }
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\service_list_controller.dart:146:
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\food_home_controller.dart:18:import '../service/fire_store_utils.dart';
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\food_home_controller.dart:19:
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\food_home_controller.dart:20:class FoodHomeController extends GetxController {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\food_home_controller.dart:21:  DashBoardController dashBoardController = Get.find<DashBoardController>();
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\food_home_controller.dart:22:  final CartProvider cartProvider = CartProvider();
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\food_home_controller.dart:23:
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\food_home_controller.dart:24:  Future<void> getCartData() async {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\food_home_controller.dart:25:    cartProvider.cartStream.listen((event) async {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\food_home_controller.dart:26:      cartItem.clear();
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\food_home_controller.dart:66:    isLoading.value = true;
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\food_home_controller.dart:67:    getCartData();
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\food_home_controller.dart:68:    selectedOrderTypeValue.value = Preferences.getString(Preferences.foodDeliveryType, defaultValue: "Delivery");
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\food_home_controller.dart:69:    await getZone();
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\food_home_controller.dart:70:    FireStoreUtils.getAllNearestRestaurant().listen((event) async {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\food_home_controller.dart:71:      popularRestaurantList.clear();
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\food_home_controller.dart:72:      newArrivalRestaurantList.clear();
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\food_home_controller.dart:73:      allNearestRestaurant.clear();
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\food_home_controller.dart:74:      advertisementList.clear();
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\food_home_controller.dart:85:      print("RESTAURANT_VENDOR_DEBUG: popular_count=${popularRestaurantList.length}");
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\food_home_controller.dart:86:      for (final vendor in allNearestRestaurant) {
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\food_home_controller.dart:87:        print("RESTAURANT_VENDOR_DEBUG_ITEM: id=${vendor.id} title=${vendor.title} section=${vendor.sectionId} zone=${vendor.zoneId} category=${vendor.categoryID}");
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\food_home_controller.dart:88:      }
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\food_home_controller.dart:89:      // END TEMP DEBUG STEP44U
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\food_home_controller.dart:90:      popularRestaurantList.sort(
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\food_home_controller.dart:91:        (a, b) => Constant.calculateReview(
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\food_home_controller.dart:92:          reviewCount: b.reviewsCount.toString(),
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\food_home_controller.dart:93:          reviewSum: b.reviewsSum.toString(),
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\food_home_controller.dart:95:      );
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\food_home_controller.dart:96:
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\food_home_controller.dart:97:      newArrivalRestaurantList.sort((a, b) => (b.createdAt ?? Timestamp.now()).toDate().compareTo((a.createdAt ?? Timestamp.now()).toDate()));
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\food_home_controller.dart:98:      await getVendorCategory();
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\food_home_controller.dart:99:      await FireStoreUtils.getHomeCoupon().then((value) {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\food_home_controller.dart:100:        couponRestaurantList.clear();
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\food_home_controller.dart:101:        couponList.clear();
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\food_home_controller.dart:102:        for (var element1 in value) {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\food_home_controller.dart:103:          for (var element in allNearestRestaurant) {
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\food_home_controller.dart:104:            if (element1.vendorID == element.id && element1.expiresAt!.toDate().isAfter(DateTime.now())) {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\food_home_controller.dart:105:              couponList.add(element1);
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\food_home_controller.dart:106:              couponRestaurantList.add(element);
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\food_home_controller.dart:107:            }
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\food_home_controller.dart:108:          }
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\food_home_controller.dart:109:        }
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\food_home_controller.dart:110:      });
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\food_home_controller.dart:118:
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\food_home_controller.dart:119:        print("nearestIds: $nearestIds");
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\food_home_controller.dart:120:        // Filter stories whose vendorID exists in nearestIds
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\food_home_controller.dart:121:        storyList.addAll(stories.where((story) => nearestIds.contains(story.vendorID)));
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\food_home_controller.dart:122:        print("Filtered storyList length: ${storyList.length}");
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\food_home_controller.dart:123:      });
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\food_home_controller.dart:124:
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\food_home_controller.dart:125:      if (Constant.isEnableAdsFeature == true) {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\food_home_controller.dart:126:        await FireStoreUtils.getAllAdvertisement().then((value) {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\food_home_controller.dart:127:          advertisementList.clear();
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\food_home_controller.dart:128:          for (var element1 in value) {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\food_home_controller.dart:129:            for (var element in allNearestRestaurant) {
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\food_home_controller.dart:130:              if (element1.vendorId == element.id) {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\food_home_controller.dart:131:                advertisementList.add(element1);
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\food_home_controller.dart:132:              }
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\food_home_controller.dart:133:            }
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\food_home_controller.dart:134:          }
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\food_home_controller.dart:135:        });
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\food_home_controller.dart:136:      }
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_details_controller.dart:125:  Future<void> getProduct() async {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_details_controller.dart:126:    print(
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_details_controller.dart:127:      "STEP47D_RESTAURANT_DETAIL_BEFORE_PRODUCT_LOAD: vendorId=${vendorModel.value.id} title=${vendorModel.value.title}",
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_details_controller.dart:128:    );
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_details_controller.dart:129:    await FireStoreUtils.getProductByVendorId(
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_details_controller.dart:130:      vendorModel.value.id.toString(),
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_details_controller.dart:131:    ).then((value) {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_details_controller.dart:132:      if ((Constant.isSubscriptionModelApplied == true ||
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_details_controller.dart:133:              vendorModel.value.adminCommission?.isEnabled == true) &&
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_details_controller.dart:134:          vendorModel.value.subscriptionPlan != null) {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_details_controller.dart:135:        if (vendorModel.value.subscriptionPlan?.itemLimit == '-1') {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_details_controller.dart:137:          productList.value = value;
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_details_controller.dart:138:          print(
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_details_controller.dart:139:            "STEP47D_RESTAURANT_DETAIL_PRODUCT_LIST_ASSIGNED: vendorId=${vendorModel.value.id} count=${productList.length} allCount=${allProductList.length}",
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_details_controller.dart:140:          );
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_details_controller.dart:141:        } else {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_details_controller.dart:142:          int selectedProduct =
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_details_controller.dart:143:              value.length <
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_details_controller.dart:144:                      int.parse(
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_details_controller.dart:145:                        vendorModel.value.subscriptionPlan?.itemLimit ?? '0',
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_details_controller.dart:156:        productList.value = value;
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_details_controller.dart:157:        print(
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_details_controller.dart:158:          "STEP47D_RESTAURANT_DETAIL_PRODUCT_LIST_ASSIGNED: vendorId=${vendorModel.value.id} count=${productList.length} allCount=${allProductList.length}",
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_details_controller.dart:159:        );
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_details_controller.dart:160:      }
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_details_controller.dart:161:    });
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_details_controller.dart:162:
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_details_controller.dart:163:    vendorCategoryList.clear();
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_details_controller.dart:164:    for (var element in productList) {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_details_controller.dart:262:      });
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_details_controller.dart:263:
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_details_controller.dart:264:      await FireStoreUtils.getOfferByVendorId(
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_details_controller.dart:265:        vendorModel.value.id.toString(),
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_details_controller.dart:266:      ).then((value) {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_details_controller.dart:267:        couponList.value = value;
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_details_controller.dart:268:      });
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_details_controller.dart:269:    }
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_details_controller.dart:270:    await getAttributeData();
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_details_controller.dart:433:      cartProductModel.price = price;
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_details_controller.dart:434:      cartProductModel.discountPrice = discountPrice;
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_details_controller.dart:435:      cartProductModel.vendorID = vendorModel.value.id;
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_details_controller.dart:436:      cartProductModel.quantity = quantity;
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_details_controller.dart:437:      cartProductModel.variantInfo = variantInfo;
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_details_controller.dart:438:      cartProductModel.extrasPrice = adOnsPrice;
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_details_controller.dart:439:      cartProductModel.extras = selectedAddOns.isEmpty ? [] : selectedAddOns;
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_details_controller.dart:440:      cartProductModel.taxSetting =
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_details_controller.dart:441:          (Constant.taxScope == "order"
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_details_controller.dart:457:      cartProductModel.price = price;
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_details_controller.dart:458:      cartProductModel.discountPrice = discountPrice;
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_details_controller.dart:459:      cartProductModel.vendorID = vendorModel.value.id;
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_details_controller.dart:460:      cartProductModel.quantity = quantity;
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_details_controller.dart:461:      cartProductModel.variantInfo = VariantInfo();
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_details_controller.dart:462:      cartProductModel.extrasPrice = adOnsPrice;
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_details_controller.dart:463:      cartProductModel.extras = selectedAddOns.isEmpty ? [] : selectedAddOns;
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_details_controller.dart:464:      cartProductModel.taxSetting =
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\controllers\restaurant_details_controller.dart:465:          (Constant.taxScope == "order"
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:236:    await fireStore
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:237:        .collection(CollectionName.zone)
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:238:        .where('publish', isEqualTo: true)
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:239:        .get()
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:240:        .then((value) {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:241:          for (var element in value.docs) {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:242:            ZoneModel ariPortModel = ZoneModel.fromJson(element.data());
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:243:            airPortList.add(ariPortModel);
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:244:          }
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:362:        .collection(CollectionName.favoriteVendor)
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:363:        .where('user_id', isEqualTo: getCurrentUid())
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:364:        .where("section_id", isEqualTo: Constant.sectionConstantModel!.id)
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:365:        .get()
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:366:        .then((value) {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:367:          for (var element in value.docs) {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:368:            FavouriteModel favouriteModel = FavouriteModel.fromJson(
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:369:              element.data(),
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:370:            );
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:517:  }
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:518:
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:519:  static Future<List<TaxModel>?> getTaxList(String? sectionId) async {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:520:    List<TaxModel> taxList = [];
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:521:    List<Placemark> placeMarks = await placemarkFromCoordinates(
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:522:      Constant.selectedLocation.location!.latitude ?? 0.0,
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:523:      Constant.selectedLocation.location!.longitude ?? 0.0,
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:524:    );
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:525:    await fireStore
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:526:        .collection(CollectionName.tax)
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:527:        .where('sectionId', isEqualTo: sectionId)
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:528:        .where('country', isEqualTo: placeMarks.first.country)
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:529:        .where('enable', isEqualTo: true)
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:530:        .get()
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:531:        .then((value) {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:532:          for (var element in value.docs) {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:533:            TaxModel taxModel = TaxModel.fromJson(element.data());
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:553:          .where('date', isGreaterThan: Timestamp.now())
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:554:          .orderBy('date', descending: true)
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:555:          .orderBy('createdAt', descending: true)
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:556:          .get()
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:557:          .then((value) {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:558:            for (var element in value.docs) {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:559:              DineInBookingModel taxModel = DineInBookingModel.fromJson(
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:560:                element.data(),
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:561:              );
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:572:          .where('date', isLessThan: Timestamp.now())
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:573:          .orderBy('date', descending: true)
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:574:          .orderBy('createdAt', descending: true)
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:575:          .get()
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:576:          .then((value) {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:577:            for (var element in value.docs) {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:578:              DineInBookingModel taxModel = DineInBookingModel.fromJson(
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:579:                element.data(),
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:580:              );
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:618:    String snapshotId,
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:619:    Map<String, dynamic> rawData, {
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:620:    String? fallbackVendorId,
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:621:  }) {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:622:    final normalizedData = Map<String, dynamic>.from(rawData);
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:623:    final rawId = (normalizedData['id'] ?? '').toString().trim();
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:624:    if (rawId.isEmpty) {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:625:      normalizedData['id'] = snapshotId;
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:626:    }
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:627:    final rawVendorId = (normalizedData['vendorID'] ?? '').toString().trim();
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:628:    if (rawVendorId.isEmpty && (fallbackVendorId ?? '').trim().isNotEmpty) {
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:629:      normalizedData['vendorID'] = fallbackVendorId;
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:630:    }
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:631:    return ProductModel.fromJson(normalizedData);
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:632:  }
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:633:
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:634:  static Future<List<VendorCategoryModel>> getHomeVendorCategory() async {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:635:    List<VendorCategoryModel> list = [];
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:636:    await fireStore
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:637:        .collection(CollectionName.vendorCategories)
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:638:        .where("section_id", isEqualTo: Constant.sectionConstantModel!.id)
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:639:        .where("show_in_homepage", isEqualTo: true)
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:640:        .where('publish', isEqualTo: true)
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:641:        .get()
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:642:        .then((value) {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:643:          for (var element in value.docs) {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:644:            VendorCategoryModel walletTransactionModel =
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:645:                _vendorCategoryModelFromSnapshot(element);
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:646:            list.add(walletTransactionModel);
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:660:        .collection(CollectionName.vendorProducts)
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:661:        .where('brandID', isEqualTo: brandId)
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:662:        .where('publish', isEqualTo: true)
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:663:        .get()
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:664:        .then((value) {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:665:          for (var element in value.docs) {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:666:            ProductModel walletTransactionModel = ProductModel.fromJson(
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:667:              element.data(),
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:668:            );
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:680:    await fireStore
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:681:        .collection(CollectionName.bannerItems)
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:682:        .where("is_publish", isEqualTo: true)
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:683:        .where("sectionId", isEqualTo: Constant.sectionConstantModel!.id)
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:684:        .where("position", isEqualTo: "middle")
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:685:        .orderBy("set_order", descending: false)
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:686:        .get()
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:687:        .then((value) {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:688:          for (var element in value.docs) {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:689:            BannerModel bannerHome = BannerModel.fromJson(element.data());
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:698:    await fireStore
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:699:        .collection(CollectionName.brands)
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:700:        .where("is_publish", isEqualTo: true)
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:701:        .get()
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:702:        .then((value) {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:703:          for (var element in value.docs) {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:704:            BrandsModel bannerHome = BrandsModel.fromJson(element.data());
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:705:            brandList.add(bannerHome);
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:706:          }
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:731:        await fireStore
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:732:            .collection(CollectionName.vendorProducts)
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:733:            .where('vendorID', isEqualTo: id)
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:734:            .get();
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:735:    await Future.forEach(productsQuery.docs, (
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:736:      QueryDocumentSnapshot<Map<String, dynamic>> document,
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:737:    ) {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:738:      if (document.data().containsKey("categoryID") &&
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:739:          document.data()['categoryID'].toString().isNotEmpty) {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:744:        await fireStore
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:745:            .collection(CollectionName.vendorCategories)
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:746:            .where('publish', isEqualTo: true)
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:747:            .get();
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:748:    await Future.forEach(catQuery.docs, (
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:749:      QueryDocumentSnapshot<Map<String, dynamic>> document,
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:750:    ) {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:751:      Map<String, dynamic> catDoc = document.data();
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:752:      if (catDoc.containsKey("id") &&
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:766:        .collection(CollectionName.favoriteItem)
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:767:        .where('user_id', isEqualTo: getCurrentUid())
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:768:        .where("section_id", isEqualTo: Constant.sectionConstantModel!.id)
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:769:        .get()
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:770:        .then((value) {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:771:          for (var element in value.docs) {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:772:            FavouriteItemModel favouriteModel = FavouriteItemModel.fromJson(
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:773:              element.data(),
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:774:            );
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:779:  }
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:780:
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:781:  static Future<VendorModel?> getVendorById(String vendorId) async {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:782:    VendorModel? vendorModel;
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:783:    try {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:784:      await fireStore
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:785:          .collection(CollectionName.vendors)
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:786:          .doc(vendorId)
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:787:          .get()
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:788:          .then((value) {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:789:            if (value.exists) {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:790:              vendorModel = _vendorModelFromSnapshotData(
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:791:                value.id,
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:792:                value.data()!,
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1073:              .collection(CollectionName.vendorOrders)
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1074:              .where("authorID", isEqualTo: getCurrentUid())
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1075:              .where("section_id", isEqualTo: Constant.sectionConstantModel!.id)
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1076:              .orderBy("createdAt", descending: true)
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1077:              .get();
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1078:
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1079:      print("Snapshot size: ${snapshot.docs.length}");
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1080:
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1081:      for (var element in snapshot.docs) {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1082:        OrderModel order = OrderModel.fromJson(element.data());
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1218:  }
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1219:
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1220:  static Future<List<ProductModel>> getProductByVendorId(
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1221:    String vendorId,
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1222:  ) async {
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1223:    String selectedFoodType = Preferences.getString(
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1224:      Preferences.foodDeliveryType,
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1225:      defaultValue: "Delivery",
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1226:    );
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1227:    List<ProductModel> list = [];
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1228:    log("GetProductByVendorId :: $selectedFoodType");
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1229:    print(
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1230:      "STEP47D_GET_PRODUCT_BY_VENDOR_ID_START: vendorId=$vendorId selectedFoodType=$selectedFoodType collection=${CollectionName.vendorProducts}",
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1231:    );
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1232:    if (selectedFoodType == "TakeAway") {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1233:      await fireStore
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1234:          .collection(CollectionName.vendorProducts)
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1235:          .where("vendorID", isEqualTo: vendorId)
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1236:          .where('publish', isEqualTo: true)
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1237:          .orderBy("createdAt", descending: false)
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1238:          .get()
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1239:          .then((value) {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1240:            for (var element in value.docs) {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1241:              ProductModel productModel = _productModelFromSnapshotData(
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1242:                element.id,
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1243:                element.data(),
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1244:                fallbackVendorId: vendorId,
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1245:              );
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1246:              list.add(productModel);
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1247:              print(
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1248:                "STEP47D_GET_PRODUCT_BY_VENDOR_ID_ITEM: vendorId=$vendorId productId=${productModel.id} name=${productModel.name} categoryID=${productModel.categoryID} publish=${productModel.publish}",
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1249:              );
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1250:            }
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1251:          })
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1252:          .catchError((error) {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1253:            log(error.toString());
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1254:          });
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1256:      await fireStore
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1257:          .collection(CollectionName.vendorProducts)
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1258:          .where("vendorID", isEqualTo: vendorId)
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1259:          .where("takeawayOption", isEqualTo: false)
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1260:          .where('publish', isEqualTo: true)
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1261:          .orderBy("createdAt", descending: false)
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1262:          .get()
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1263:          .then((value) {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1264:            for (var element in value.docs) {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1265:              ProductModel productModel = _productModelFromSnapshotData(
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1266:                element.id,
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1267:                element.data(),
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1268:                fallbackVendorId: vendorId,
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1269:              );
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1270:              list.add(productModel);
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1271:              print(
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1272:                "STEP47D_GET_PRODUCT_BY_VENDOR_ID_ITEM: vendorId=$vendorId productId=${productModel.id} name=${productModel.name} categoryID=${productModel.categoryID} publish=${productModel.publish}",
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1273:              );
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1274:            }
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1275:          })
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1276:          .catchError((error) {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1277:            log(error.toString());
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1278:          });
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1279:    }
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1280:    if (list.isEmpty && selectedFoodType != "TakeAway") {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1281:      print(
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1282:        "STEP47G_GET_PRODUCT_BY_VENDOR_ID_DELIVERY_FALLBACK_START: vendorId=$vendorId reason=delivery_takeawayOption_false_empty",
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1283:      );
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1284:      await fireStore
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1285:          .collection(CollectionName.vendorProducts)
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1286:          .where("vendorID", isEqualTo: vendorId)
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1287:          .where('publish', isEqualTo: true)
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1288:          .orderBy("createdAt", descending: false)
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1289:          .get()
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1290:          .then((value) {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1291:            for (var element in value.docs) {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1292:              ProductModel productModel = _productModelFromSnapshotData(
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1293:                element.id,
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1294:                element.data(),
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1295:                fallbackVendorId: vendorId,
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1296:              );
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1297:              list.add(productModel);
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1298:              print(
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1299:                "STEP47G_GET_PRODUCT_BY_VENDOR_ID_FALLBACK_ITEM: vendorId=$vendorId productId=${productModel.id} name=${productModel.name} categoryID=${productModel.categoryID} publish=${productModel.publish}",
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1300:              );
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1301:            }
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1302:          })
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1303:          .catchError((error) {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1304:            print(
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1305:              "STEP47G_GET_PRODUCT_BY_VENDOR_ID_FALLBACK_ERROR: vendorId=$vendorId error=$error",
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1306:            );
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1307:            log(error.toString());
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1308:          });
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1309:      print(
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1310:        "STEP47G_GET_PRODUCT_BY_VENDOR_ID_DELIVERY_FALLBACK_RESULT: vendorId=$vendorId count=${list.length}",
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1311:      );
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1312:    }
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1313:
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1314:    print(
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1315:      "STEP47D_GET_PRODUCT_BY_VENDOR_ID_RESULT: vendorId=$vendorId count=${list.length}",
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1316:    );
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1317:    return list;
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1318:  }
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1319:
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1320:  static Future<DeliveryCharge?> getDeliveryCharge() async {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1321:    DeliveryCharge? deliveryCharge;
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1338:
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1339:  static Future<List<CouponModel>> getAllVendorPublicCoupons(
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1340:    String vendorId,
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1341:  ) async {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1342:    List<CouponModel> coupon = [];
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1343:
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1344:    await fireStore
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1345:        .collection(CollectionName.coupons)
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1346:        .where("vendorID", isEqualTo: vendorId)
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1347:        .where('expiresAt', isGreaterThanOrEqualTo: Timestamp.now())
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1348:        .where("isEnabled", isEqualTo: true)
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1349:        .where("isPublic", isEqualTo: true)
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1350:        .get()
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1351:        .then((value) {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1352:          for (var element in value.docs) {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1362:  }
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1363:
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1364:  static Future<List<CouponModel>> getAllVendorCoupons(String vendorId) async {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1365:    List<CouponModel> coupon = [];
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1366:
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1367:    await fireStore
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1368:        .collection(CollectionName.coupons)
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1369:        .where("vendorID", isEqualTo: vendorId)
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1370:        .where('expiresAt', isGreaterThanOrEqualTo: Timestamp.now())
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1371:        .where("isEnabled", isEqualTo: true)
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1372:        .get()
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1373:        .then((value) {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1374:          for (var element in value.docs) {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1375:            CouponModel taxModel = CouponModel.fromJson(element.data());
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1463:  }
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1464:
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1465:  static Future<List<CouponModel>> getOfferByVendorId(String vendorId) async {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1466:    List<CouponModel> couponList = [];
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1467:    await fireStore
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1468:        .collection(CollectionName.coupons)
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1469:        .where("vendorID", isEqualTo: vendorId)
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1470:        .where("isEnabled", isEqualTo: true)
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1471:        .where("isPublic", isEqualTo: true)
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1472:        .where('expiresAt', isGreaterThanOrEqualTo: Timestamp.now())
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1473:        .get()
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1474:        .then((value) {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1475:          for (var element in value.docs) {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1517:  }
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1518:
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1519:  static Future<List<RatingModel>> getVendorReviews(String vendorId) async {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1520:    List<RatingModel> ratingList = [];
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1521:    await fireStore
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1522:        .collection(CollectionName.itemsReview)
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1523:        .where('VendorId', isEqualTo: vendorId)
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1524:        .get()
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1525:        .then((value) {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1526:          for (var element in value.docs) {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1527:            RatingModel giftCardsOrderModel = RatingModel.fromJson(
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1528:              element.data(),
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1529:            );
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1852:                    .collection(CollectionName.vendors)
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1853:                    .where(
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1854:                      'section_id',
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1855:                      isEqualTo: Constant.sectionConstantModel!.id,
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1856:                    )
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1857:                    .where("enabledDiveInFuture", isEqualTo: true)
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1858:                : fireStore
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1859:                    .collection(CollectionName.vendors)
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1860:                    .where(
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1861:                      'section_id',
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1862:                      isEqualTo: Constant.sectionConstantModel!.id,
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1863:                    );
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1864:      } else {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1865:        query =
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1866:            isDining == true
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1867:                ? fireStore
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1868:                    .collection(CollectionName.vendors)
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1869:                    .where(
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1870:                      'section_id',
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1871:                      isEqualTo: Constant.sectionConstantModel!.id,
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1872:                    )
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1873:                    .where(
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1874:                      'zoneId',
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1875:                      isEqualTo: Constant.selectedZone?.id.toString(),
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1876:                    )
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1879:                    .collection(CollectionName.vendors)
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1880:                    .where(
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1881:                      'section_id',
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1882:                      isEqualTo: Constant.sectionConstantModel!.id,
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1883:                    )
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1884:                    .where(
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1885:                      'zoneId',
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1886:                      isEqualTo: Constant.selectedZone?.id.toString(),
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1887:                    );
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1948:    await fireStore
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1949:        .collection(CollectionName.vendorCategories)
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1950:        .where("section_id", isEqualTo: Constant.sectionConstantModel!.id)
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1951:        .where("show_in_homepage", isEqualTo: true)
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1952:        .where('publish', isEqualTo: true)
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1953:        .get()
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1954:        .then((value) {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1955:          for (var element in value.docs) {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1956:            VendorCategoryModel vendorCategoryModel =
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1957:                _vendorCategoryModelFromSnapshot(element);
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1958:            vendorCategoryList.add(vendorCategoryModel);
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1995:            .collection(CollectionName.vendorProducts)
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1996:            .where('categoryID', isEqualTo: categoryId)
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1997:            .where('publish', isEqualTo: true)
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1998:            .get();
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:1999:    await Future.forEach(currencyQuery.docs, (
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2000:      QueryDocumentSnapshot<Map<String, dynamic>> document,
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2001:    ) {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2002:      try {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2003:        productList.add(
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2047:  }
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2048:
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2049:  static Future<List<ProductModel>> getAllProducts(String vendorId) async {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2050:    List<ProductModel> products = [];
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2051:    print(
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2052:      "STEP46S_GET_ALL_PRODUCTS_QUERY_START: vendorId=$vendorId collection=${CollectionName.vendorProducts} filter=vendorID/publish_true",
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2053:    );
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2054:
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2055:    QuerySnapshot<Map<String, dynamic>> productsQuery =
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2056:        await fireStore
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2057:            .collection(CollectionName.vendorProducts)
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2058:            .where("section_id", isEqualTo: Constant.sectionConstantModel!.id)
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2059:            .where('vendorID', isEqualTo: vendorId)
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2060:            .where('publish', isEqualTo: true)
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2061:            .orderBy('createdAt', descending: false)
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2062:            .get();
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2063:    await Future.forEach(productsQuery.docs, (
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2064:      QueryDocumentSnapshot<Map<String, dynamic>> document,
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2065:    ) {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2066:      try {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2067:        products.add(
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2069:            document.id,
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2070:            document.data(),
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2071:            fallbackVendorId: vendorId,
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2072:          ),
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2073:        );
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2074:        print(
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2075:          "STEP46S_GET_ALL_PRODUCTS_ITEM: vendorId=$vendorId productId=${document.id} name=${document.data()["name"]} publish=${document.data()["publish"]} categoryID=${document.data()["categoryID"]}",
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2076:        );
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2077:      } catch (e) {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2078:        print('product**-FireStoreUtils.getAllProducts Parse error $e');
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2079:      }
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2080:    });
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2081:    print(
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2082:      "STEP46S_GET_ALL_PRODUCTS_QUERY_RESULT: vendorId=$vendorId count=${products.length}",
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2083:    );
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2084:    return products;
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2085:  }
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2086:
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2087:  static Future<List<VendorModel>> getAllStoresFuture({
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2088:    String? categoryId,
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2099:                    .collection(CollectionName.vendors)
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2100:                    .where(
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2101:                      "section_id",
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2102:                      isEqualTo: Constant.sectionConstantModel!.id,
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2103:                    )
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2104:                : fireStore
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2105:                    .collection(CollectionName.vendors)
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2106:                    .where(
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2107:                      "section_id",
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2108:                      isEqualTo: Constant.sectionConstantModel!.id,
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2109:                    )
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2110:                    .where("categoryID", isEqualTo: categoryId);
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2111:      } else {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2112:        collectionReference =
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2113:            categoryId == null
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2115:                    .collection(CollectionName.vendors)
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2116:                    .where(
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2117:                      "section_id",
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2118:                      isEqualTo: Constant.sectionConstantModel!.id,
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2119:                    )
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2120:                    .where(
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2121:                      "zoneId",
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2122:                      isEqualTo: Constant.selectedZone!.id.toString(),
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2123:                    )
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2125:                    .collection(CollectionName.vendors)
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2126:                    .where(
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2127:                      "section_id",
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2128:                      isEqualTo: Constant.sectionConstantModel!.id,
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2129:                    )
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2130:                    .where("categoryID", isEqualTo: categoryId)
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2131:                    .where(
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2132:                      "zoneId",
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2133:                      isEqualTo: Constant.selectedZone!.id.toString(),
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2224:    await fireStore
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2225:        .collection(CollectionName.vendorCategories)
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2226:        .where('section_id', isEqualTo: Constant.sectionConstantModel!.id)
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2227:        .where('publish', isEqualTo: true)
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2228:        .get()
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2229:        .then((value) {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2230:          for (var element in value.docs) {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2231:            print("====>${value.docs.length}");
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2232:            VendorCategoryModel walletTransactionModel =
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2233:                _vendorCategoryModelFromSnapshot(element);
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2271:    FavouriteModel favouriteModel,
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2272:  ) async {
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2273:    favouriteModel.sectionId = Constant.sectionConstantModel!.id;
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2274:    log("setFavouriteRestaurant :: ${favouriteModel.toJson()}");
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2275:    await fireStore
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2276:        .collection(CollectionName.favoriteVendor)
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2277:        .add(favouriteModel.toJson());
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2278:  }
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2279:
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2300:    FavouriteItemModel favouriteModel,
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2301:  ) async {
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2302:    favouriteModel.sectionId = Constant.sectionConstantModel!.id;
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2303:    await fireStore
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2304:        .collection(CollectionName.favoriteItem)
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2305:        .add(favouriteModel.toJson());
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2306:  }
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2307:
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2308:  static Future<Url> uploadChatImageToFireStorage(
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2352:    await fireStore
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2353:        .collection(CollectionName.bannerItems)
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2354:        .where("is_publish", isEqualTo: true)
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2355:        .where("sectionId", isEqualTo: Constant.sectionConstantModel!.id)
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2356:        .where("position", isEqualTo: "top")
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2357:        .orderBy("set_order", descending: false)
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2358:        .get()
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2359:        .then((value) {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2360:          for (var element in value.docs) {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2361:            BannerModel bannerHome = BannerModel.fromJson(element.data());
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2370:    await fireStore
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2371:        .collection(CollectionName.story)
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2372:        .where('sectionID', isEqualTo: Constant.sectionConstantModel!.id)
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2373:        .get()
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2374:        .then((value) {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2375:          print("Number of Stories Fetched: ${value.docs.length}");
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2376:          for (var element in value.docs) {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2377:            StoryModel walletTransactionModel = StoryModel.fromJson(
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2378:              element.data(),
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2512:    await fireStore
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2513:        .collection(CollectionName.promos)
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2514:        .where("sectionId", isEqualTo: Constant.sectionConstantModel!.id)
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2515:        .where('expiresAt', isGreaterThanOrEqualTo: Timestamp.now())
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2516:        .where("isEnabled", isEqualTo: true)
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2517:        .get()
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2518:        .then((value) {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2519:          for (var element in value.docs) {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2520:            CouponModel bannerHome = CouponModel.fromJson(element.data());
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2529:    await fireStore
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2530:        .collection(CollectionName.parcelCoupons)
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2531:        .where("sectionId", isEqualTo: Constant.sectionConstantModel!.id)
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2532:        .where('expiresAt', isGreaterThanOrEqualTo: Timestamp.now())
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2533:        .where("isEnabled", isEqualTo: true)
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2534:        .get()
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2535:        .then((value) {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2536:          for (var element in value.docs) {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2537:            CouponModel bannerHome = CouponModel.fromJson(element.data());
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2546:    await fireStore
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2547:        .collection(CollectionName.rentalCoupons)
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2548:        .where("sectionId", isEqualTo: Constant.sectionConstantModel!.id)
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2549:        .where('expiresAt', isGreaterThanOrEqualTo: Timestamp.now())
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2550:        .where("isEnabled", isEqualTo: true)
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2551:        .get()
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2552:        .then((value) {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2553:          for (var element in value.docs) {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2554:            CouponModel bannerHome = CouponModel.fromJson(element.data());
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2630:    await fireStore
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2631:        .collection(CollectionName.parcelCategory)
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2632:        .where('publish', isEqualTo: true)
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2633:        .where('sectionId', isEqualTo: Constant.sectionConstantModel!.id)
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2634:        .orderBy('set_order', descending: false)
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2635:        .get()
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2636:        .then((value) {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2637:          for (var element in value.docs) {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2638:            try {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2639:              ParcelCategory category = ParcelCategory.fromJson(element.data());
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2728:      newString = newString.replaceAll(
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2729:        "{date}",
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2730:        DateFormat('dd-MM-yyyy').format(orderModel.createdAt!.toDate()),
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2731:      );
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2732:      newString = newString.replaceAll(
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2733:        "{sendername}",
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2734:        orderModel.sender!.name.toString(),
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2735:      );
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2736:      newString = newString.replaceAll(
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2766:  }) async {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2767:    try {
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2768:      final sid = orderModel.sectionId ?? '';
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2769:      String vType = '';
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2770:      String brand = '';
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2771:      String carModel = '';
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2772:      String plate = '';
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2773:      if (orderModel.driver?.vehicleDetails?.containsKey(sid) == true) {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2774:        final vehicle = orderModel.driver?.vehicleDetails?[sid];
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2788:      newString = newString.replaceAll(
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2789:        "{date}",
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2790:        DateFormat('dd-MM-yyyy').format(orderModel.createdAt!.toDate()),
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2791:      );
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2792:      newString = newString.replaceAll(
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2793:        "{time}",
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2794:        DateFormat('hh:mm a').format(orderModel.createdAt!.toDate()),
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2795:      );
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2796:      newString = newString.replaceAll(
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2797:        "{pickuplocation}",
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2798:        orderModel.sourceLocationName.toString(),
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2799:      );
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2800:      newString = newString.replaceAll(
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2844:      newString = newString.replaceAll(
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2845:        "{date}",
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2846:        DateFormat('dd-MM-yyyy').format(orderModel.createdAt!.toDate()),
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2847:      );
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2848:      newString = newString.replaceAll(
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2849:        "{time}",
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2850:        DateFormat('hh:mm a').format(orderModel.createdAt!.toDate()),
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2851:      );
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2852:      newString = newString.replaceAll(
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2853:        "{pickuplocation}",
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2854:        orderModel.sourceLocationName.toString(),
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2855:      );
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2856:
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2871:        .collection(CollectionName.parcelOrders)
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2872:        .where('authorID', isEqualTo: FireStoreUtils.getCurrentUid())
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2873:        .where('sectionId', isEqualTo: Constant.sectionConstantModel!.id)
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2874:        .orderBy('createdAt', descending: true)
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2875:        .snapshots()
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2876:        .map((snapshot) {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2877:          return snapshot.docs.map((doc) {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2878:            log("===>");
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2879:            print(doc.data());
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2880:            return ParcelOrderModel.fromJson(doc.data());
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2887:    await fireStore
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2888:        .collection(CollectionName.vehicleType)
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2889:        .where('sectionId', isEqualTo: Constant.sectionConstantModel!.id)
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2890:        .where("isActive", isEqualTo: true)
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2891:        .get()
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2892:        .then((value) {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2893:          for (var element in value.docs) {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2894:            try {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2895:              VehicleType category = VehicleType.fromJson(element.data());
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2908:    await fireStore
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2909:        .collection(CollectionName.popularDestinations)
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2910:        .where("sectionId", isEqualTo: Constant.sectionConstantModel!.id)
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2911:        .where('is_publish', isEqualTo: true)
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2912:        .get()
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2913:        .then((value) {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2914:          for (var element in value.docs) {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2915:            try {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2916:              PopularDestination category = PopularDestination.fromJson(
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:2917:                element.data(),
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3003:  // static Future<List<CabOrderModel>> getCabDriverOrders() async {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3004:  //   List<CabOrderModel> ordersList = [];
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3005:  //   await fireStore.collection(CollectionName.rides).where('authorID', isEqualTo: FireStoreUtils.getCurrentUid()).orderBy('createdAt', descending: true).get().then((value) {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3006:  //     for (var element in value.docs) {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3007:  //       CabOrderModel orderModel = CabOrderModel.fromJson(element.data());
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3008:  //       ordersList.add(orderModel);
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3009:  //     }
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3010:  //   });
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3011:  //   return ordersList;
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3016:        .collection(CollectionName.rides)
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3017:        .where('authorID', isEqualTo: FireStoreUtils.getCurrentUid())
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3018:        .where('sectionId', isEqualTo: Constant.sectionConstantModel!.id)
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3019:        .orderBy('createdAt', descending: true)
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3020:        .snapshots()
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3021:        .map((query) {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3022:          List<CabOrderModel> ordersList = [];
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3023:          for (var element in query.docs) {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3024:            ordersList.add(CabOrderModel.fromJson(element.data()));
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3025:          }
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3032:    await fireStore
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3033:        .collection(CollectionName.providerCategories)
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3034:        .where("sectionId", isEqualTo: Constant.sectionConstantModel!.id)
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3035:        .where("level", isEqualTo: 0)
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3036:        .where("publish", isEqualTo: true)
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3037:        .get()
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3038:        .then((value) {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3039:          for (var element in value.docs) {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3040:            CategoryModel orderModel = CategoryModel.fromJson(element.data());
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3041:            categoryList.add(orderModel);
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3042:          }
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3070:        collectionReference = fireStore
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3071:            .collection(CollectionName.providersServices)
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3072:            .where("sectionId", isEqualTo: Constant.sectionConstantModel!.id)
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3073:            .where('categoryId', isEqualTo: categoryId)
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3074:            .where("publish", isEqualTo: true);
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3075:      } else {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3076:        collectionReference = fireStore
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3077:            .collection(CollectionName.providersServices)
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3078:            .where("sectionId", isEqualTo: Constant.sectionConstantModel!.id)
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3079:            .where("publish", isEqualTo: true);
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3080:      }
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3081:
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3082:      GeoFirePoint center = Geoflutterfire().point(
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3083:        latitude: Constant.selectedLocation.location!.latitude ?? 0.0,
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3084:        longitude: Constant.selectedLocation.location!.longitude ?? 0.0,
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3085:      );
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3150:        .collection(CollectionName.providersServices)
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3151:        .where('author', isEqualTo: authId)
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3152:        .where('publish', isEqualTo: true)
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3153:        .orderBy('createdAt', descending: false)
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3154:        .get()
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3155:        .then((value) {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3156:          for (var element in value.docs) {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3157:            ProviderServiceModel orderModel = ProviderServiceModel.fromJson(
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3158:              element.data(),
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3159:            );
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3204:          .collection(CollectionName.providersServices)
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3205:          .where("author", isEqualTo: providerId)
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3206:          .where("sectionId", isEqualTo: Constant.sectionConstantModel!.id)
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3207:          .where("publish", isEqualTo: true);
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3208:
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3209:      // Geolocation center point
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3210:      GeoFirePoint center = Geoflutterfire().point(
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3211:        latitude: Constant.selectedLocation.location!.latitude ?? 0.0,
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3212:        longitude: Constant.selectedLocation.location!.longitude ?? 0.0,
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3213:      );
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3279:        .where('providerId', isEqualTo: providerId)
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3280:        .where("isEnabled", isEqualTo: true)
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3281:        .where('sectionId', isEqualTo: Constant.sectionConstantModel!.id)
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3282:        .where('expiresAt', isGreaterThanOrEqualTo: Timestamp.now())
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3283:        .get()
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3284:        .then((value) {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3285:          for (var element in value.docs) {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3286:            CouponModel favouriteOndemandServiceModel = CouponModel.fromJson(
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3287:              element.data(),
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3301:        .where('providerId', isEqualTo: providerId)
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3302:        .where('isEnabled', isEqualTo: true)
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3303:        .where('sectionId', isEqualTo: Constant.sectionConstantModel!.id)
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3304:        .where('isPublic', isEqualTo: true)
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3305:        .where('expiresAt', isGreaterThanOrEqualTo: Timestamp.now())
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3306:        .get()
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3307:        .then((value) {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3308:          for (var element in value.docs) {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3309:            CouponModel favouriteOndemandServiceModel = CouponModel.fromJson(
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3364:        newString = newString.replaceAll(
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3365:          "{date}",
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3366:          DateFormat('dd-MM-yyyy').format(orderModel.createdAt.toDate()),
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3367:        );
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3368:        newString = newString.replaceAll(
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3369:          "{address}",
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3370:          orderModel.address!.getFullAddress(),
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3371:        );
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3372:        newString = newString.replaceAll(
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3526:  //       .collection(CollectionName.providerOrders)
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3527:  //       .where("authorID", isEqualTo: FireStoreUtils.getCurrentUid())
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3528:  //       .where("sectionId", isEqualTo: Constant.sectionConstantModel!.id.toString())
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3529:  //       .orderBy("createdAt", descending: true)
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3530:  //       .get()
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3531:  //       .then((value) {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3532:  //         for (var element in value.docs) {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3533:  //           OnProviderOrderModel orderModel = OnProviderOrderModel.fromJson(element.data());
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3534:  //           ordersList.add(orderModel);
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3535:  //         }
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3543:        .where("authorID", isEqualTo: getCurrentUid())
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3544:        .where(
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3545:          "sectionId",
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3546:          isEqualTo: Constant.sectionConstantModel!.id.toString(),
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3547:        )
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3548:        .orderBy("createdAt", descending: true)
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3549:        .snapshots()
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3550:        .map(
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3551:          (snapshot) =>
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3552:              snapshot.docs
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3553:                  .map((doc) => OnProviderOrderModel.fromJson(doc.data()))
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3554:                  .toList(),
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3598:        .collection(CollectionName.itemsReview)
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3599:        .where('orderid', isEqualTo: orderId)
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3600:        .where('VendorId', isEqualTo: providerId)
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3601:        .limit(1)
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3602:        .get()
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3603:        .then((snapshot) {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3604:          if (snapshot.docs.isNotEmpty) {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3605:            ratingModel = RatingModel.fromJson(snapshot.docs.first.data());
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3606:          }
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3750:    await fireStore
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3751:        .collection(CollectionName.rentalVehicleType)
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3752:        .where('sectionId', isEqualTo: Constant.sectionConstantModel!.id)
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3753:        .where("isActive", isEqualTo: true)
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3754:        .get()
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3755:        .then((value) {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3756:          for (var element in value.docs) {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3757:            try {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3758:              RentalVehicleType category = RentalVehicleType.fromJson(
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3799:        .collection(CollectionName.rentalOrders)
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3800:        .where('authorID', isEqualTo: FireStoreUtils.getCurrentUid())
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3801:        .where('sectionId', isEqualTo: Constant.sectionConstantModel!.id)
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3802:        .orderBy('createdAt', descending: true)
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3803:        .snapshots()
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3804:        .map((query) {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3805:          List<RentalOrderModel> ordersList = [];
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3806:          for (var element in query.docs) {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3807:            ordersList.add(RentalOrderModel.fromJson(element.data()));
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3808:          }
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3954:      Map<String, dynamic> complaintData = {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3955:        'id': docRef.id,
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3956:        'createdAt': Timestamp.now(),
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3957:        'description': description,
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3958:        'driverId': driverID,
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3959:        'driverName': driverName,
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3960:        'orderId': orderId,
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3961:        'customerName': customerName,
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:3962:        'customerId': customerID,
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:4051:            .collection(CollectionName.favoriteService)
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:4052:            .where('user_id', isEqualTo: userId)
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:4053:            .where("section_id", isEqualTo: Constant.sectionConstantModel!.id)
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:4054:            .get();
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:4055:
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:4056:    await Future.forEach(favourites.docs, (
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:4057:      QueryDocumentSnapshot<Map<String, dynamic>> document,
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:4058:    ) {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:4059:      try {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:4078:            .collection(CollectionName.providersServices)
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:4079:            .where('id', isEqualTo: model.service_id)
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:4080:            .where('sectionId', isEqualTo: model.section_id)
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:4081:            .get();
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:4082:    await Future.forEach(reviewQuery.docs, (
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:4083:      QueryDocumentSnapshot<Map<String, dynamic>> document,
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:4084:    ) {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:4085:      try {
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\service\fire_store_utils.dart:4086:        providerService.add(ProviderServiceModel.fromJson(document.data()));
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\collection_name.dart:29:  static const String vendorAttributes = "vendor_attributes";
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\collection_name.dart:30:  static const String vendorCategories = "vendor_categories";
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\collection_name.dart:31:  static const String vendorProducts = "vendor_products";
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\collection_name.dart:32:  static const String vendors = "vendors";
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\collection_name.dart:33:  static const String wallet = "wallet";
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\collection_name.dart:34:  static const String withdrawMethod = "withdraw_method";
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\collection_name.dart:35:  static const String advertisements = "advertisements";
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\collection_name.dart:36:  static const String cashback = "cashback";
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\collection_name.dart:37:  static const String cashbackRedeem = "cashback_redeem";
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:982:      newString = newString.replaceAll(
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:983:        "{date}",
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:984:        DateFormat('yyyy-MM-dd').format(orderModel.createdAt!.toDate()),
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:985:      );
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:986:      newString = newString.replaceAll(
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:987:        "{address}",
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:988:        orderModel.address?.getFullAddress() ?? '',
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:989:      );
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\constant\constant.dart:990:      newString = newString.replaceAll(
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:504:                                  Constant
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:505:                                              .sectionConstantModel!
> C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:506:                                              .serviceTypeFlag ==
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:507:                                          "ecommerce-service"
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:508:                                      ? SizedBox()
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:509:                                      : Row(
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:510:                                        children: [
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:511:                                          Text(
  C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\apps\customer_v6_7\lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart:512:                                            controller.isOpen.value
TEXT_END

## Git vs Runtime Source Compare
TEXT_START

FILE: lib\models\product_model.dart
GIT_EXISTS: True
RUNTIME_EXISTS: True
GIT_SHA256: DF4C24BF22D50972AEC2516D471459364079B73C51190184DF3F9635DF8BF0BB
RUNTIME_SHA256: DF4C24BF22D50972AEC2516D471459364079B73C51190184DF3F9635DF8BF0BB
MATCH: True

FILE: lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart
GIT_EXISTS: True
RUNTIME_EXISTS: True
GIT_SHA256: 0D2501E9C7015E49923BAAAE8BE0AC4AC3F5D3BD0C648970D34B5E45AD28A647
RUNTIME_SHA256: 0D2501E9C7015E49923BAAAE8BE0AC4AC3F5D3BD0C648970D34B5E45AD28A647
MATCH: True

FILE: lib\service\fire_store_utils.dart
GIT_EXISTS: True
RUNTIME_EXISTS: True
GIT_SHA256: 5B9620DDE87F0B80383920C0D76193C49BF45B7B3763DF1CDBF16DBC0A58EDAA
RUNTIME_SHA256: 5B9620DDE87F0B80383920C0D76193C49BF45B7B3763DF1CDBF16DBC0A58EDAA
MATCH: True

FILE: lib\controllers\food_home_controller.dart
GIT_EXISTS: True
RUNTIME_EXISTS: True
GIT_SHA256: D7D17962C95C692094DDAA511304AC841BC1468334D941AEC3782812DBBA07DD
RUNTIME_SHA256: D7D17962C95C692094DDAA511304AC841BC1468334D941AEC3782812DBBA07DD
MATCH: True

FILE: lib\controllers\service_list_controller.dart
GIT_EXISTS: True
RUNTIME_EXISTS: True
GIT_SHA256: 50A290524E2FC41D8F6566BBE337A8C2502A8ED3934A5C8CB577441C4FEC1613
RUNTIME_SHA256: 50A290524E2FC41D8F6566BBE337A8C2502A8ED3934A5C8CB577441C4FEC1613
MATCH: True
TEXT_END

## Static Risk Counts
TEXT_START
COUNT_FOOD_REFS: 2
COUNT_PRODUCT_QUERY_REFS: 17
COUNT_PRODUCTMODEL_BANG_REFS: 152
COUNT_SERVICEFLAG_REFS: 18
TEXT_END

## First Decision
TEXT_START
DECISION: FOOD_GROCERY_SOURCE_REFERENCES_FOUND
TEXT_END

STATUS: SERVICE_45A_FOOD_GROCERY_SOURCE_RUNTIME_AUDITED