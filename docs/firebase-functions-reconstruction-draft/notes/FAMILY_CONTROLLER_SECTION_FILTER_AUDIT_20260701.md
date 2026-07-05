# FAMILY CONTROLLER SECTION FILTER AUDIT

Generated: 07/01/2026 01:39:01
Mode: READ ONLY. No patch. No Firebase write.

Goal: verify whether each family dashboard/controller filters data by selected section.

## 1. Files Checked
```text
FOUND: lib\controllers\service_list_controller.dart
FOUND: lib\controllers\food_home_controller.dart
FOUND: lib\controllers\home_e_commerce_controller.dart
FOUND: lib\controllers\rental_home_controller.dart
FOUND: lib\controllers\on_demand_home_controller.dart
FOUND: lib\screen_ui\multi_vendor_service\dash_board_screens\dash_board_screen.dart
FOUND: lib\screen_ui\ecommarce\dash_board_e_commerce_screen.dart
FOUND: lib\screen_ui\rental_service\rental_dashboard_screen.dart
FOUND: lib\screen_ui\parcel_service\parcel_dashboard_screen.dart
FOUND: lib\screen_ui\on_demand_service\on_demand_dashboard_screen.dart
FOUND: lib\screen_ui\cab_service_screens\cab_dashboard_screen.dart
```

## 2. Focused Matches Per Target File
```text

### FILE: lib\controllers\service_list_controller.dart
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:72:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:73:  Future<void> onServiceTap(BuildContext context, SectionModel sectionModel) async {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:74:    try {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:75:      ShowToastDialog.showLoader("Please wait...".tr);
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:76:      Constant.sectionConstantModel = sectionModel;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:77:      AppThemeData.primary300 = Color(int.tryParse(sectionModel.color?.replaceFirst("#", "0xff") ?? '') ?? 0xff2196F3);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:78:      if (auth.FirebaseAuth.instance.currentUser != null) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:79:        String uid = auth.FirebaseAuth.instance.currentUser!.uid;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:80:        UserModel? user = await FireStoreUtils.getUserProfile(uid);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:81:        if (user != null && user.role == Constant.userRoleCustomer) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:82:          user.fcmToken = await NotificationService.getToken();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:83:          await FireStoreUtils.updateUser(user);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:84:          ShowToastDialog.closeLoader();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:85:          if (sectionModel.serviceType == 'Ecommerce Service') {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:86:            await Preferences.setString(Preferences.foodDeliveryType, 'Delivery');
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:100:    }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:101:  }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:102:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:103:  Future<void> _navigate(SectionModel sectionModel) async {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:104:    await FireStoreUtils.getTaxList(Constant.sectionConstantModel!.id).then((value) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:105:      if (value != null) {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:106:        Constant.taxProductList = value.where((TaxModel taxModel) => taxModel.scope == "product").toList();
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:107:        Constant.orderProductTaxList = value.where((TaxModel taxModel) => taxModel.scope == "order").toList();
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:108:        Constant.driverDeliveryTaxList = value.where((TaxModel taxModel) => taxModel.scope == "delivery").toList();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:109:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:110:        if (sectionModel.packagingChargeEnable == true) {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:111:          Constant.packagingTaxList = value.where((TaxModel taxModel) => taxModel.scope == "packaging").toList();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:112:        }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:113:        if (sectionModel.platformFee?.enable == true) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:114:          Constant.platformFeeModel = sectionModel.platformFee;
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:115:          Constant.platformTaxList = value.where((TaxModel taxModel) => taxModel.scope == "platform").toList();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:116:        }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:117:      }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:118:    });
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:119:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:120:    if (sectionModel.serviceTypeFlag == "ecommerce-service" || sectionModel.serviceTypeFlag == "delivery-service") {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:121:      if (cartItem.isNotEmpty) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:122:        showAlertDialog(Get.context!, UserModel(), sectionModel);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:123:      } else {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:124:        _goToServiceRoute(sectionModel);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\service_list_controller.dart:125:      }

### FILE: lib\controllers\food_home_controller.dart
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:90:        couponRestaurantList.clear();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:91:        couponList.clear();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:92:        for (var element1 in value) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:93:          for (var element in allNearestRestaurant) {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:94:            if (element1.vendorID == element.id && element1.expiresAt!.toDate().isAfter(DateTime.now())) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:95:              couponList.add(element1);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:96:              couponRestaurantList.add(element);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:97:            }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:98:          }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:99:        }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:100:      });
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:101:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:102:      await FireStoreUtils.getStory().then((stories) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:103:        storyList.clear();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:104:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:106:        // Create a fast lookup Set of all nearest vendor IDs
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:107:        final nearestIds = allNearestRestaurant.map((e) => e.id).toSet();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:108:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:109:        print("nearestIds: $nearestIds");
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:110:        // Filter stories whose vendorID exists in nearestIds
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:111:        storyList.addAll(stories.where((story) => nearestIds.contains(story.vendorID)));
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:112:        print("Filtered storyList length: ${storyList.length}");
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:113:      });
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:114:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:115:      if (Constant.isEnableAdsFeature == true) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:116:        await FireStoreUtils.getAllAdvertisement().then((value) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:117:          advertisementList.clear();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:118:          for (var element1 in value) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:119:            for (var element in allNearestRestaurant) {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:120:              if (element1.vendorId == element.id) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:121:                advertisementList.add(element1);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:122:              }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:123:            }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:124:          }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:125:        });
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:126:      }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:127:    });
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:128:    setLoading();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:129:  }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:130:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:144:  Future<void> getVendorCategory() async {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:145:    await FireStoreUtils.getHomeVendorCategory().then((value) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:146:      vendorCategoryModel.value = value;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:147:      if (Constant.restaurantList != null) {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:148:        List<String> usedCategoryIds = Constant.restaurantList!.expand((vendor) => vendor.categoryID ?? []).whereType<String>().toSet().toList();
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:149:        vendorCategoryModel.value = vendorCategoryModel.where((category) => usedCategoryIds.contains(category.id)).toList();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:150:      }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:151:    });
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:152:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:153:    await FireStoreUtils.getHomeTopBanner().then((value) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:154:      bannerModel.value = value;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:155:    });
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:156:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:157:    await FireStoreUtils.getHomeBottomBanner().then((value) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:158:      bannerBottomModel.value = value;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:159:    });

### FILE: lib\controllers\home_e_commerce_controller.dart
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\home_e_commerce_controller.dart:63:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\home_e_commerce_controller.dart:64:      allNearestRestaurant.addAll(event);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\home_e_commerce_controller.dart:65:      newArrivalRestaurantList.addAll(event);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\home_e_commerce_controller.dart:66:      Constant.restaurantList = allNearestRestaurant;
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\home_e_commerce_controller.dart:67:      List<String> usedCategoryIds = allNearestRestaurant.expand((vendor) => vendor.categoryID ?? []).whereType<String>().toSet().toList();
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\home_e_commerce_controller.dart:68:      vendorCategoryModel.value = vendorCategoryModel.where((category) => usedCategoryIds.contains(category.id)).toList();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\home_e_commerce_controller.dart:69:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\home_e_commerce_controller.dart:70:      newArrivalRestaurantList.sort((a, b) => (b.createdAt ?? Timestamp.now()).toDate().compareTo((a.createdAt ?? Timestamp.now()).toDate()));
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\home_e_commerce_controller.dart:71:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\home_e_commerce_controller.dart:72:      if (Constant.isEnableAdsFeature == true) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\home_e_commerce_controller.dart:73:        await FireStoreUtils.getAllAdvertisement().then((value) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\home_e_commerce_controller.dart:74:          advertisementList.clear();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\home_e_commerce_controller.dart:75:          for (var element1 in value) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\home_e_commerce_controller.dart:76:            for (var element in allNearestRestaurant) {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\home_e_commerce_controller.dart:77:              if (element1.vendorId == element.id) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\home_e_commerce_controller.dart:78:                advertisementList.add(element1);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\home_e_commerce_controller.dart:79:              }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\home_e_commerce_controller.dart:80:            }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\home_e_commerce_controller.dart:81:          }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\home_e_commerce_controller.dart:82:        });
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\home_e_commerce_controller.dart:83:      }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\home_e_commerce_controller.dart:84:    });
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\home_e_commerce_controller.dart:85:    setLoading();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\home_e_commerce_controller.dart:86:  }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\home_e_commerce_controller.dart:87:

### FILE: lib\controllers\rental_home_controller.dart
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_home_controller.dart:138:    rentalOrderModel.authorID = userModel.value.id;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_home_controller.dart:139:    rentalOrderModel.author = userModel.value;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_home_controller.dart:140:    rentalOrderModel.rentalVehicleType = selectedVehicleType.value;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_home_controller.dart:141:    rentalOrderModel.vehicleId = selectedVehicleType.value!.id;
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_home_controller.dart:142:    rentalOrderModel.sectionId = Constant.sectionConstantModel!.id;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_home_controller.dart:143:    rentalOrderModel.sourceLocationName = sourceTextEditController.value.text;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_home_controller.dart:144:    rentalOrderModel.bookingDateTime = Timestamp.fromDate(selectedDate.value);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_home_controller.dart:145:    rentalOrderModel.paymentMethod = selectedPaymentMethod.value;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_home_controller.dart:146:    rentalOrderModel.paymentStatus = false;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_home_controller.dart:147:    rentalOrderModel.status = Constant.orderPlaced;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_home_controller.dart:148:    rentalOrderModel.subTotal = selectedPackage.value!.baseFare;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_home_controller.dart:149:    rentalOrderModel.rentalPackageModel = selectedPackage.value;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_home_controller.dart:150:    rentalOrderModel.taxSetting = Constant.orderProductTaxList;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_home_controller.dart:151:    rentalOrderModel.createdAt = Timestamp.now();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_home_controller.dart:152:    rentalOrderModel.sourceLocation = sourceLocation;
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_home_controller.dart:153:    rentalOrderModel.adminCommission = Constant.sectionConstantModel!.adminCommision!.amount;
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_home_controller.dart:154:    rentalOrderModel.adminCommissionType = Constant.sectionConstantModel!.adminCommision!.commissionType;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_home_controller.dart:155:    rentalOrderModel.sourcePoint = G(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_home_controller.dart:156:      geopoint: GeoPoint(sourceLocation.latitude ?? 0.0, sourceLocation.longitude ?? 0.0),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_home_controller.dart:157:      geohash: Geoflutterfire().point(latitude: sourceLocation.latitude ?? 0.0, longitude: sourceLocation.longitude ?? 0.0).hash,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_home_controller.dart:158:    );
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_home_controller.dart:159:    rentalOrderModel.zoneId = Constant.getZoneId(sourceLocation.latitude ?? 0.0, sourceLocation.longitude ?? 0.0);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_home_controller.dart:160:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_home_controller.dart:161:    log(rentalOrderModel.toJson().toString());
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_home_controller.dart:162:    Get.back();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_home_controller.dart:163:    Get.back();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_home_controller.dart:164:
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_home_controller.dart:165:    Get.to(() => RentalConformationScreen(), arguments: {"rentalOrderModel": rentalOrderModel});
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_home_controller.dart:166:  }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_home_controller.dart:167:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_home_controller.dart:168:  void setDepartureMarker(double lat, double lng) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_home_controller.dart:169:    if (Constant.selectedMapType == 'osm') {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_home_controller.dart:170:      departureLatLongOsm.value = latlong.LatLng(lat, lng);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_home_controller.dart:171:    } else {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_home_controller.dart:172:      departureLatLong.value = gmaps.LatLng(lat, lng);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_home_controller.dart:173:    }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_home_controller.dart:174:  }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_home_controller.dart:175:

### FILE: lib\controllers\on_demand_home_controller.dart
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart:45:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart:46:          List<ProviderServiceModel> filteredProviders = [];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart:47:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart:48:          for (var provider in listOfUniqueProviders) {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart:49:            List<ProviderServiceModel> filteredList = providerServiceList.where((service) => service.author == provider).toList();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart:50:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart:51:            filteredList.sort((a, b) => a.createdAt!.compareTo(b.createdAt!));
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart:52:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart:53:            for (int index = 0; index < filteredList.length; index++) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart:54:              final service = filteredList[index];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart:55:
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart:56:              if (Constant.isSubscriptionModelApplied == true || Constant.sectionConstantModel?.adminCommision?.isEnabled == true) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart:57:                if (service.subscriptionPlan?.itemLimit == "-1") {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart:58:                  filteredProviders.add(service);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart:59:                } else {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart:60:                  if (index < int.parse(service.subscriptionPlan?.itemLimit ?? '0')) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart:61:                    filteredProviders.add(service);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart:62:                  }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart:63:                }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart:64:              } else {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart:65:                filteredProviders.add(service);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart:66:              }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart:80:    });
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart:81:  }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart:82:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart:83:  /// Get category by id safely from cached categories
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart:84:  Future<CategoryModel?> getCategory(String? categoryId) async {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart:85:    if (categoryId == null || categoryId.isEmpty) return null;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart:86:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart:87:    // Try to find category from cached list
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart:88:    CategoryModel? cat = categories.firstWhereOrNull((element) => element.id == categoryId);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart:89:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart:90:    // If not found, fetch from Firestore
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart:91:    cat ??= await FireStoreUtils.getCategoryById(categoryId);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart:92:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart:93:    categoryModel.value = cat;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart:94:    return cat;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart:95:  }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart:96:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart:97:  RxList<FavouriteOndemandServiceModel> lstFav = <FavouriteOndemandServiceModel>[].obs;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart:98:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart:99:  void toggleFavourite(ProviderServiceModel provider) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart:100:    if (Constant.userModel == null) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart:101:      Get.to(LoginScreen());
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart:102:    } else {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart:103:      var contain = lstFav.where((element) => element.service_id == provider.id);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart:104:      if (contain.isNotEmpty) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart:105:        FavouriteOndemandServiceModel favouriteModel = FavouriteOndemandServiceModel(
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart:106:          section_id: provider.sectionId,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart:107:          service_id: provider.id,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart:108:          user_id: FireStoreUtils.getCurrentUid(),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart:109:          serviceAuthorId: provider.author,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart:110:        );
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart:111:        FireStoreUtils.removeFavouriteOndemandService(favouriteModel);
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart:112:        lstFav.removeWhere((item) => item.service_id == provider.id);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart:113:      } else {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart:114:        FavouriteOndemandServiceModel favouriteModel = FavouriteOndemandServiceModel(
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart:115:          section_id: provider.sectionId,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart:116:          service_id: provider.id,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart:117:          user_id: FireStoreUtils.getCurrentUid(),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart:118:          serviceAuthorId: provider.author,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart:119:        );
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart:120:        FireStoreUtils.setFavouriteOndemandSection(favouriteModel);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart:121:        lstFav.add(favouriteModel);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart:122:      }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart:123:    }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart:124:  }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart:125:

### FILE: lib\screen_ui\multi_vendor_service\dash_board_screens\dash_board_screen.dart

### FILE: lib\screen_ui\ecommarce\dash_board_e_commerce_screen.dart

### FILE: lib\screen_ui\rental_service\rental_dashboard_screen.dart

### FILE: lib\screen_ui\parcel_service\parcel_dashboard_screen.dart

### FILE: lib\screen_ui\on_demand_service\on_demand_dashboard_screen.dart

### FILE: lib\screen_ui\cab_service_screens\cab_dashboard_screen.dart
```

## 3. Wider Search For Actual Parcel Controllers
```text

### FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\0n_demand_payment_controller.dart
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\0n_demand_payment_controller.dart:60:  void onInit() {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\0n_demand_payment_controller.dart:61:    super.onInit();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\0n_demand_payment_controller.dart:62:    isLoading.value = true;
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\0n_demand_payment_controller.dart:63:    final args = Get.arguments as Map<String, dynamic>;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\0n_demand_payment_controller.dart:64:    onDemandOrderModel = args['onDemandOrderModel'];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\0n_demand_payment_controller.dart:65:    totalAmount = (args['totalAmount'] as double).obs;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\0n_demand_payment_controller.dart:66:    print("payment totalAmount ::::::::: $totalAmount");
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\0n_demand_payment_controller.dart:67:    isExtra = args['isExtra'];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\0n_demand_payment_controller.dart:68:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\0n_demand_payment_controller.dart:69:    getPaymentSettings();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\0n_demand_payment_controller.dart:70:  }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\0n_demand_payment_controller.dart:71:

### FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\book_parcel_controller.dart
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\book_parcel_controller.dart:68:  @override
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\book_parcel_controller.dart:69:  void onInit() {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\book_parcel_controller.dart:70:    super.onInit();
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\book_parcel_controller.dart:71:    setArguments();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\book_parcel_controller.dart:72:    getParcelWeight();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\book_parcel_controller.dart:73:    setCurrentLocationForSenderAndReceiver();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\book_parcel_controller.dart:74:  }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\book_parcel_controller.dart:75:
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\book_parcel_controller.dart:76:  void setArguments() {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\book_parcel_controller.dart:77:    if (Get.arguments != null && Get.arguments['parcelCategory'] != null) {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\book_parcel_controller.dart:78:      selectedCategory = Get.arguments['parcelCategory'];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\book_parcel_controller.dart:79:    }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\book_parcel_controller.dart:80:  }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\book_parcel_controller.dart:81:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\book_parcel_controller.dart:82:  Future<void> getParcelWeight() async {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\book_parcel_controller.dart:83:    parcelWeight.value = await FireStoreUtils.getParcelWeight();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\book_parcel_controller.dart:84:  }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\book_parcel_controller.dart:85:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\book_parcel_controller.dart:86:  Future<void> pickScheduledDate(BuildContext context) async {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\book_parcel_controller.dart:225:      id: Constant.getUuid(),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\book_parcel_controller.dart:226:      subTotal: subTotal.value.toString(),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\book_parcel_controller.dart:227:      parcelType: selectedCategory?.title ?? '',
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\book_parcel_controller.dart:228:      parcelCategoryID: selectedCategory?.id ?? '',
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\book_parcel_controller.dart:229:      note: senderNoteController.value.text,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\book_parcel_controller.dart:230:      receiverNote: receiverNoteController.value.text,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\book_parcel_controller.dart:231:      distance: distance.value.toStringAsFixed(4),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\book_parcel_controller.dart:232:      parcelWeight: selectedWeight?.title ?? '',
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\book_parcel_controller.dart:233:      parcelWeightCharge: selectedWeight?.deliveryCharge,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\book_parcel_controller.dart:234:      sendToDriver: isScheduled.value == true ? false : true,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\book_parcel_controller.dart:235:      senderPickupDateTime: Timestamp.fromDate(senderPickup),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\book_parcel_controller.dart:236:      receiverPickupDateTime: Timestamp.fromDate(DateTime.now()),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\book_parcel_controller.dart:256:      ),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\book_parcel_controller.dart:257:      receiverLatLong: receiverLocation.value,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\book_parcel_controller.dart:258:      senderLatLong: senderLocation.value,
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\book_parcel_controller.dart:259:      sectionId: Constant.sectionConstantModel?.id ?? '',
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\book_parcel_controller.dart:260:      taxSetting: Constant.orderProductTaxList,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\book_parcel_controller.dart:261:      platformFee: Constant.platformFeeModel?.fee ?? '0.0',
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\book_parcel_controller.dart:262:      platformTax: Constant.platformTaxList,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\book_parcel_controller.dart:263:    );
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\book_parcel_controller.dart:264:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\book_parcel_controller.dart:265:    debugPrint("Order Distance: ${distance.value}");
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\book_parcel_controller.dart:266:    debugPrint("Subtotal: ${subTotal.value}");
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\book_parcel_controller.dart:267:    debugPrint("Order JSON: ${order.toJson()}");
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\book_parcel_controller.dart:268:
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\book_parcel_controller.dart:269:    Get.to(() => ParcelOrderConfirmationScreen(), arguments: {'parcelOrder': order, 'images': images});
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\book_parcel_controller.dart:270:  }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\book_parcel_controller.dart:271:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\book_parcel_controller.dart:272:  DateTime parseScheduledDateTime(String dateStr, String timeStr) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\book_parcel_controller.dart:273:    try {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\book_parcel_controller.dart:274:      final dateParts = dateStr.split('/');
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\book_parcel_controller.dart:275:      final day = int.parse(dateParts[0]);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\book_parcel_controller.dart:276:      final month = int.parse(dateParts[1]);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\book_parcel_controller.dart:277:      final year = int.parse(dateParts[2]);

### FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_dashboard_controller.dart

### FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_home_controller.dart

### FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_rental_dashboard_controllers.dart

### FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:91:        couponList.clear();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:92:        for (var element1 in value) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:93:          for (var element in allNearestRestaurant) {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:94:            if (element1.vendorID == element.id && element1.expiresAt!.toDate().isAfter(DateTime.now())) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:95:              couponList.add(element1);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:96:              couponRestaurantList.add(element);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:97:            }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:98:          }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:99:        }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:100:      });
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:101:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:102:      await FireStoreUtils.getStory().then((stories) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:107:        final nearestIds = allNearestRestaurant.map((e) => e.id).toSet();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:108:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:109:        print("nearestIds: $nearestIds");
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:110:        // Filter stories whose vendorID exists in nearestIds
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:111:        storyList.addAll(stories.where((story) => nearestIds.contains(story.vendorID)));
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:112:        print("Filtered storyList length: ${storyList.length}");
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:113:      });
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:114:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:115:      if (Constant.isEnableAdsFeature == true) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:116:        await FireStoreUtils.getAllAdvertisement().then((value) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:117:          advertisementList.clear();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:118:          for (var element1 in value) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:119:            for (var element in allNearestRestaurant) {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:120:              if (element1.vendorId == element.id) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:121:                advertisementList.add(element1);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:122:              }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:123:            }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:124:          }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:125:        });
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:126:      }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:127:    });
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:128:    setLoading();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:145:    await FireStoreUtils.getHomeVendorCategory().then((value) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:146:      vendorCategoryModel.value = value;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:147:      if (Constant.restaurantList != null) {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:148:        List<String> usedCategoryIds = Constant.restaurantList!.expand((vendor) => vendor.categoryID ?? []).whereType<String>().toSet().toList();
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:149:        vendorCategoryModel.value = vendorCategoryModel.where((category) => usedCategoryIds.contains(category.id)).toList();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:150:      }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:151:    });
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:152:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:153:    await FireStoreUtils.getHomeTopBanner().then((value) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:154:      bannerModel.value = value;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:155:    });
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:156:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\food_home_controller.dart:157:    await FireStoreUtils.getHomeBottomBanner().then((value) {

### FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\home_e_commerce_controller.dart
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\home_e_commerce_controller.dart:64:      allNearestRestaurant.addAll(event);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\home_e_commerce_controller.dart:65:      newArrivalRestaurantList.addAll(event);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\home_e_commerce_controller.dart:66:      Constant.restaurantList = allNearestRestaurant;
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\home_e_commerce_controller.dart:67:      List<String> usedCategoryIds = allNearestRestaurant.expand((vendor) => vendor.categoryID ?? []).whereType<String>().toSet().toList();
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\home_e_commerce_controller.dart:68:      vendorCategoryModel.value = vendorCategoryModel.where((category) => usedCategoryIds.contains(category.id)).toList();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\home_e_commerce_controller.dart:69:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\home_e_commerce_controller.dart:70:      newArrivalRestaurantList.sort((a, b) => (b.createdAt ?? Timestamp.now()).toDate().compareTo((a.createdAt ?? Timestamp.now()).toDate()));
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\home_e_commerce_controller.dart:71:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\home_e_commerce_controller.dart:72:      if (Constant.isEnableAdsFeature == true) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\home_e_commerce_controller.dart:73:        await FireStoreUtils.getAllAdvertisement().then((value) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\home_e_commerce_controller.dart:74:          advertisementList.clear();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\home_e_commerce_controller.dart:75:          for (var element1 in value) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\home_e_commerce_controller.dart:76:            for (var element in allNearestRestaurant) {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\home_e_commerce_controller.dart:77:              if (element1.vendorId == element.id) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\home_e_commerce_controller.dart:78:                advertisementList.add(element1);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\home_e_commerce_controller.dart:79:              }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\home_e_commerce_controller.dart:80:            }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\home_e_commerce_controller.dart:81:          }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\home_e_commerce_controller.dart:82:        });
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\home_e_commerce_controller.dart:83:      }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\home_e_commerce_controller.dart:84:    });
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\home_e_commerce_controller.dart:85:    setLoading();

### FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\home_parcel_controller.dart

### FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart:264:      final departureBytes = await Constant().getBytesFromAsset('assets/images/location_black3x.png', 50);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart:265:      final destinationBytes = await Constant().getBytesFromAsset('assets/images/location_orange3x.png', 50);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart:266:      final driverBytesRaw =
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart:267:          (Constant.sectionConstantModel?.markerIcon?.isNotEmpty ?? false)
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart:268:              ? await Constant().getBytesFromUrl(Constant.sectionConstantModel!.markerIcon!, width: 120)
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart:269:              : await Constant().getBytesFromAsset('assets/images/ic_cab.png', 50);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart:270:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart:271:      departureIcon = BitmapDescriptor.fromBytes(departureBytes);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart:272:      destinationIcon = BitmapDescriptor.fromBytes(destinationBytes);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart:273:      taxiIcon = BitmapDescriptor.fromBytes(driverBytesRaw);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart:274:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart:275:      if (Constant.selectedMapType == 'osm') {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart:276:        if (order.status == Constant.driverAccepted) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart:284:              child: CachedNetworkImage(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart:285:                width: 50,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart:286:                height: 50,
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart:287:                imageUrl: Constant.sectionConstantModel!.markerIcon.toString(),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart:288:                placeholder: (context, url) => Constant.loader(),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart:289:                errorWidget: (context, url, error) => SizedBox(width: 30, height: 30, child: CircularProgressIndicator(strokeWidth: 2)),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart:290:              ),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart:291:            ),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart:292:          ]);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart:293:        } else if (order.status == Constant.orderInTransit) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart:294:          osmMarker.addAll([
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart:295:            flutterMap.Marker(point: latlong.LatLng(destLat, destLng), width: 40, height: 40, child: Image.asset('assets/images/location_orange3x.png', width: 40)),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart:301:              child: CachedNetworkImage(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart:302:                width: 50,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart:303:                height: 50,
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart:304:                imageUrl: Constant.sectionConstantModel!.markerIcon.toString(),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart:305:                placeholder: (context, url) => Constant.loader(),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart:306:                errorWidget: (context, url, error) => SizedBox(width: 30, height: 30, child: CircularProgressIndicator(strokeWidth: 2)),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart:307:              ),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart:308:            ),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart:309:          ]);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart:310:        }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart:311:      } else {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart:312:        if (order.status == Constant.driverAccepted) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart:495:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart:496:    orderModel.taxSetting = Constant.orderProductTaxList;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart:497:    orderModel.adminCommissionType =
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart:498:        Constant.sectionConstantModel!.adminCommision != null && Constant.sectionConstantModel!.adminCommision!.isEnabled == true
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart:499:            ? Constant.sectionConstantModel!.adminCommision!.commissionType.toString()
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart:500:            : null;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart:501:    orderModel.adminCommission =
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart:502:        Constant.sectionConstantModel!.adminCommision != null && Constant.sectionConstantModel!.adminCommision!.isEnabled == true
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart:503:            ? Constant.sectionConstantModel!.adminCommision!.amount.toString()
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart:504:            : null;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart:505:    orderModel.couponCode = couponCodeTextEditController.value.text;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart:506:    orderModel.paymentMethod = selectedPaymentMethod.value;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart:507:    orderModel.paymentStatus = false;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart:508:    orderModel.triggerDelevery = Timestamp.now();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart:509:    orderModel.tipAmount = "0.0";
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart:510:    orderModel.scheduleReturnDateTime = Timestamp.now();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart:511:    orderModel.rideType = 'intercity';
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart:512:    orderModel.roundTrip = false;
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart:513:    orderModel.sectionId = Constant.sectionConstantModel!.id;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart:514:    orderModel.createdAt = Timestamp.now();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart:515:    orderModel.otpCode = (maths.Random().nextInt(9000) + 1000).toString(); // Generate a 4-digit OTP
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart:516:    orderModel.status = Constant.orderPlaced;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart:517:    orderModel.scheduleDateTime = Timestamp.now();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart:518:    log("Order Model : ${orderModel.toJson()}");
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart:519:    ShowToastDialog.showLoader("Please wait".tr);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart:520:    await FireStoreUtils.cabOrderPlace(orderModel);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart:521:    await FireStoreUtils.sendCabBookEmail(orderModel: orderModel);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart:560:    } else {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart:561:      final markerId = MarkerId('Stop $index');
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart:562:
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart:563:      markers.removeWhere((marker) => marker.markerId == markerId);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart:564:      markers.add(Marker(markerId: markerId, infoWindow: InfoWindow(title: 'Stop ${String.fromCharCode(index + 65)}'), position: LatLng(lat, lng), icon: stopIcon!));
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart:565:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart:566:      getDirections();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart:567:    }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart:568:  }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart:569:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart:570:  void _setOsmMarker(double lat, double lng, {required bool isDeparture}) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart:571:    final marker = flutterMap.Marker(point: latlong.LatLng(lat, lng), width: 40, height: 40, child: isDeparture ? departureIconOsm! : destinationIconOsm!);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart:594:    }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart:595:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart:596:    // Remove only the matching departure/destination marker
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart:597:    markers.removeWhere((marker) => marker.markerId == markerId);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart:598:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart:599:    // Add new marker
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart:600:    markers.add(Marker(markerId: markerId, position: pos, icon: icon, infoWindow: InfoWindow(title: title)));
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart:601:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart:602:    mapController.animateCamera(CameraUpdate.newLatLngZoom(pos, 14));
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart:603:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart:604:    if (departureLatLong.value.latitude != 0 && destinationLatLong.value.latitude != 0) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart:605:      getDirections();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart:902:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart:903:    // Remove marker
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart:904:    if (Constant.selectedMapType == 'osm') {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart:905:      osmMarker.removeWhere((marker) => marker.point == departureLatLongOsm.value);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart:906:    } else {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart:907:      markers.removeWhere((marker) => marker.markerId.value == 'Departure');
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart:908:    }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart:909:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart:910:    // Clear polylines and route info if needed
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart:911:    clearMapDataIfLocationsRemoved();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart:912:    update();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart:913:  }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart:914:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart:915:  void removeDestination() {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart:918:    destinationTextEditController.value.clear();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart:919:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart:920:    if (Constant.selectedMapType == 'osm') {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart:921:      osmMarker.removeWhere((marker) => marker.point == destinationLatLongOsm.value);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart:922:    } else {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart:923:      markers.removeWhere((marker) => marker.markerId.value == 'Destination');
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart:924:    }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart:925:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart:926:    clearMapDataIfLocationsRemoved();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart:927:    update();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart:928:  }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart:929:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart:930:  Future<void> searchPlaceNameOSM() async {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\Intercity_home_controller.dart:931:    final url = Uri.parse('https://nominatim.openstreetmap.org/reverse?lat=${departureLatLongOsm.value.latitude}&lon=${departureLatLongOsm.value.longitude}&format=json');

### FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\my_booking_on_demand_controller.dart
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\my_booking_on_demand_controller.dart:53:  List<OnProviderOrderModel> getOrdersForTab(String tab) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\my_booking_on_demand_controller.dart:54:    switch (tab) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\my_booking_on_demand_controller.dart:55:      case "Placed":
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\my_booking_on_demand_controller.dart:56:        return orders.where((order) => ["Order Placed", "Order Accepted", "Order Assigned", "Order Ongoing", "In Transit"].contains(order.status)).toList();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\my_booking_on_demand_controller.dart:57:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\my_booking_on_demand_controller.dart:58:      case "Completed":
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\my_booking_on_demand_controller.dart:59:        return orders.where((order) => ["Order Completed"].contains(order.status)).toList();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\my_booking_on_demand_controller.dart:60:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\my_booking_on_demand_controller.dart:61:      case "Cancelled":
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\my_booking_on_demand_controller.dart:62:        return orders.where((order) => ["Order Rejected", "Order Cancelled", "Driver Rejected"].contains(order.status)).toList();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\my_booking_on_demand_controller.dart:63:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\my_booking_on_demand_controller.dart:64:      default:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\my_booking_on_demand_controller.dart:65:        return [];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\my_booking_on_demand_controller.dart:66:    }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\my_booking_on_demand_controller.dart:67:  }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\my_booking_on_demand_controller.dart:68:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\my_booking_on_demand_controller.dart:69:  WorkerModel? getWorker(String? workerId) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\my_booking_on_demand_controller.dart:70:    if (workerId == null || workerId.isEmpty) return null;

### FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\my_rental_booking_controller.dart
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\my_rental_booking_controller.dart:160:  List<RentalOrderModel> getOrdersForTab(String tab) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\my_rental_booking_controller.dart:161:    switch (tab) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\my_rental_booking_controller.dart:162:      case "New":
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\my_rental_booking_controller.dart:163:        return rentalOrders.where((order) => ["Order Placed", "Order Accepted", "Driver Pending"].contains(order.status)).toList();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\my_rental_booking_controller.dart:164:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\my_rental_booking_controller.dart:165:      case "On Going":
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\my_rental_booking_controller.dart:166:        return rentalOrders.where((order) => ["Driver Accepted", "Order Shipped", "In Transit"].contains(order.status)).toList();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\my_rental_booking_controller.dart:167:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\my_rental_booking_controller.dart:168:      case "Completed":
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\my_rental_booking_controller.dart:169:        return rentalOrders.where((order) => ["Order Completed"].contains(order.status)).toList();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\my_rental_booking_controller.dart:170:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\my_rental_booking_controller.dart:171:      case "Cancelled":
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\my_rental_booking_controller.dart:172:        return rentalOrders.where((order) => ["Order Rejected", "Order Cancelled", "Driver Rejected"].contains(order.status)).toList();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\my_rental_booking_controller.dart:173:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\my_rental_booking_controller.dart:174:      default:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\my_rental_booking_controller.dart:175:        return [];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\my_rental_booking_controller.dart:176:    }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\my_rental_booking_controller.dart:177:  }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\my_rental_booking_controller.dart:178:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\my_rental_booking_controller.dart:179:  /// Old helper (optional)
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\my_rental_booking_controller.dart:180:  List<RentalOrderModel> get filteredRentalOrders => getOrdersForTab(selectedTab.value);

### FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_booking_controller.dart
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_booking_controller.dart:45:  @override
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_booking_controller.dart:46:  void onInit() {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_booking_controller.dart:47:    super.onInit();
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_booking_controller.dart:48:    final Map<String, dynamic>? args = Get.arguments;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_booking_controller.dart:49:    if (args != null) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_booking_controller.dart:50:      provider.value = args['providerModel'];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_booking_controller.dart:51:      categoryTitle.value = args['categoryTitle'] ?? '';
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_booking_controller.dart:52:    }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_booking_controller.dart:53:    selectedAddress.value = Constant.selectedLocation;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_booking_controller.dart:54:    fetchCoupons();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_booking_controller.dart:55:    calculatePrice();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_booking_controller.dart:56:  }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_booking_controller.dart:157:          authorID: FireStoreUtils.getCurrentUid(),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_booking_controller.dart:158:          author: Constant.userModel!,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_booking_controller.dart:159:          quantity: double.parse(quantity.value.toString()),
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_booking_controller.dart:160:          sectionId: Constant.sectionConstantModel!.id,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_booking_controller.dart:161:          address: selectedAddress.value,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_booking_controller.dart:162:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_booking_controller.dart:163:          provider: provider.value,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_booking_controller.dart:164:          status: Constant.orderPlaced,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_booking_controller.dart:165:          scheduleDateTime: Timestamp.fromDate(selectedDateTime.value),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_booking_controller.dart:166:          notes: descriptionController.value.text,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_booking_controller.dart:167:          discount: discountAmount.toString(),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_booking_controller.dart:168:          discountType: discountType.toString(),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_booking_controller.dart:169:          discountLabel: discountLabel.toString(),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_booking_controller.dart:170:          adminCommission:
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_booking_controller.dart:171:              Constant.sectionConstantModel?.adminCommision?.isEnabled == false ? '0' : "${providerUser?.adminCommissionModel?.amount ?? Constant.sectionConstantModel?.adminCommision?.amount ?? 0}",
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_booking_controller.dart:172:          adminCommissionType:
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_booking_controller.dart:173:              Constant.sectionConstantModel?.adminCommision?.isEnabled == false
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_booking_controller.dart:174:                  ? 'fixed'
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_booking_controller.dart:175:                  : providerUser?.adminCommissionModel?.commissionType ?? Constant.sectionConstantModel?.adminCommision?.commissionType,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_booking_controller.dart:176:          otp: Constant.getReferralCode(),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_booking_controller.dart:177:          couponCode: offerCode.toString(),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_booking_controller.dart:178:          taxModel: Constant.orderProductTaxList,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_booking_controller.dart:179:          platformFee: Constant.platformFeeModel?.fee ?? '0.0',
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_booking_controller.dart:180:          platformTax: Constant.platformTaxList,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_booking_controller.dart:181:        );
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_booking_controller.dart:182:        print('totalAmount ::::::: ${double.tryParse(Constant.amountShow(amount: totalAmount.value.toString())) ?? 0.0}');
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_booking_controller.dart:183:        print('totalAmount value ::::::: ${totalAmount.value}');
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_booking_controller.dart:184:
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_booking_controller.dart:185:        Get.to(() => OnDemandPaymentScreen(), arguments: {'onDemandOrderModel': Rxn<OnProviderOrderModel>(onDemandOrderModel), 'totalAmount': totalAmount.value, 'isExtra': false});
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_booking_controller.dart:186:      } else {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_booking_controller.dart:187:        ShowToastDialog.showLoader("Please wait...".tr);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_booking_controller.dart:188:        OnProviderOrderModel onDemandOrder = OnProviderOrderModel(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_booking_controller.dart:189:          otp: Constant.getReferralCode(),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_booking_controller.dart:190:          authorID: FireStoreUtils.getCurrentUid(),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_booking_controller.dart:191:          author: Constant.userModel!,
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_booking_controller.dart:192:          sectionId: Constant.sectionConstantModel!.id,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_booking_controller.dart:193:          address: selectedAddress.value,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_booking_controller.dart:194:          status: Constant.orderPlaced,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_booking_controller.dart:195:          createdAt: Timestamp.now(),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_booking_controller.dart:196:          quantity: double.parse(quantity.value.toString()),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_booking_controller.dart:197:          provider: provider.value,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_booking_controller.dart:198:          extraPaymentStatus: true,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_booking_controller.dart:199:          scheduleDateTime: Timestamp.fromDate(selectedDateTime.value),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_booking_controller.dart:200:          notes: descriptionController.value.text,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_booking_controller.dart:201:          adminCommission:
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_booking_controller.dart:202:              Constant.sectionConstantModel?.adminCommision?.isEnabled == false ? '0' : "${providerUser?.adminCommissionModel?.amount ?? Constant.sectionConstantModel?.adminCommision?.amount ?? 0}",
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_booking_controller.dart:203:          adminCommissionType:
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_booking_controller.dart:204:              Constant.sectionConstantModel?.adminCommision?.isEnabled == false
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_booking_controller.dart:205:                  ? 'fixed'
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_booking_controller.dart:206:                  : providerUser?.adminCommissionModel?.commissionType ?? Constant.sectionConstantModel?.adminCommision?.commissionType,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_booking_controller.dart:207:          paymentStatus: true,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_booking_controller.dart:208:          taxModel: Constant.orderProductTaxList,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_booking_controller.dart:209:          platformFee: Constant.platformFeeModel?.fee ?? '0.0',
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_booking_controller.dart:210:          platformTax: Constant.platformTaxList,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_booking_controller.dart:211:        );
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_booking_controller.dart:212:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_booking_controller.dart:213:        await FireStoreUtils.onDemandOrderPlace(onDemandOrder, 0.0);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_booking_controller.dart:214:        await FireStoreUtils.sendOrderOnDemandServiceEmail(orderModel: onDemandOrder);

### FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_category_controller.dart

### FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_dashboard_controller.dart

### FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_details_controller.dart
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_details_controller.dart:22:  @override
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_details_controller.dart:23:  void onInit() {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_details_controller.dart:24:    super.onInit();
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_details_controller.dart:25:    provider = Get.arguments['providerModel'];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_details_controller.dart:26:    timeCheck();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_details_controller.dart:27:    getData();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_details_controller.dart:28:  }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_details_controller.dart:29:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_details_controller.dart:30:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_details_controller.dart:31:  Future<void> getData() async {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_details_controller.dart:32:    await getReviewList();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_details_controller.dart:33:    await getAuthor(); //fetch and set provider author here
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_details_controller.dart:38:  }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_details_controller.dart:39:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_details_controller.dart:40:  Future<void> getReviewList() async {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_details_controller.dart:41:    await FireStoreUtils.getCategoryById(provider.categoryId.toString()).then((value) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_details_controller.dart:42:      if (value != null) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_details_controller.dart:43:        categoryTitle.value = value.title.toString();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_details_controller.dart:44:      }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_details_controller.dart:45:    });
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_details_controller.dart:46:
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_details_controller.dart:47:    await FireStoreUtils.getSubCategoryById(provider.subCategoryId.toString()).then((value) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_details_controller.dart:48:      if (value != null) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_details_controller.dart:49:        subCategoryTitle.value = value.title.toString();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_details_controller.dart:50:      }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_details_controller.dart:51:    });
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_details_controller.dart:52:
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_details_controller.dart:53:    await FireStoreUtils.getReviewByProviderServiceId(provider.id.toString()).then((value) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_details_controller.dart:54:      ratingService.value = value;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_details_controller.dart:55:    });
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_details_controller.dart:56:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_details_controller.dart:57:    if (Constant.userModel != null) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_details_controller.dart:58:      await FireStoreUtils.getFavouritesServiceList(FireStoreUtils.getCurrentUid()).then((value) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_details_controller.dart:59:        lstFav.value = value;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_details_controller.dart:60:      });
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_details_controller.dart:61:    }

### FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart:46:          List<ProviderServiceModel> filteredProviders = [];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart:47:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart:48:          for (var provider in listOfUniqueProviders) {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart:49:            List<ProviderServiceModel> filteredList = providerServiceList.where((service) => service.author == provider).toList();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart:50:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart:51:            filteredList.sort((a, b) => a.createdAt!.compareTo(b.createdAt!));
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart:52:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart:53:            for (int index = 0; index < filteredList.length; index++) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart:54:              final service = filteredList[index];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart:55:
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart:56:              if (Constant.isSubscriptionModelApplied == true || Constant.sectionConstantModel?.adminCommision?.isEnabled == true) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart:57:                if (service.subscriptionPlan?.itemLimit == "-1") {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart:58:                  filteredProviders.add(service);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart:59:                } else {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart:60:                  if (index < int.parse(service.subscriptionPlan?.itemLimit ?? '0')) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart:61:                    filteredProviders.add(service);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart:62:                  }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart:63:                }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart:64:              } else {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart:81:  }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart:82:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart:83:  /// Get category by id safely from cached categories
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart:84:  Future<CategoryModel?> getCategory(String? categoryId) async {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart:85:    if (categoryId == null || categoryId.isEmpty) return null;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart:86:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart:87:    // Try to find category from cached list
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart:88:    CategoryModel? cat = categories.firstWhereOrNull((element) => element.id == categoryId);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart:89:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart:90:    // If not found, fetch from Firestore
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart:91:    cat ??= await FireStoreUtils.getCategoryById(categoryId);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart:92:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart:93:    categoryModel.value = cat;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart:94:    return cat;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart:95:  }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart:96:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart:97:  RxList<FavouriteOndemandServiceModel> lstFav = <FavouriteOndemandServiceModel>[].obs;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart:98:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart:99:  void toggleFavourite(ProviderServiceModel provider) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart:100:    if (Constant.userModel == null) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart:101:      Get.to(LoginScreen());
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart:102:    } else {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart:103:      var contain = lstFav.where((element) => element.service_id == provider.id);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart:104:      if (contain.isNotEmpty) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart:105:        FavouriteOndemandServiceModel favouriteModel = FavouriteOndemandServiceModel(
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart:106:          section_id: provider.sectionId,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart:107:          service_id: provider.id,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart:108:          user_id: FireStoreUtils.getCurrentUid(),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart:109:          serviceAuthorId: provider.author,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart:110:        );
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart:111:        FireStoreUtils.removeFavouriteOndemandService(favouriteModel);
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart:112:        lstFav.removeWhere((item) => item.service_id == provider.id);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart:113:      } else {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart:114:        FavouriteOndemandServiceModel favouriteModel = FavouriteOndemandServiceModel(
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart:115:          section_id: provider.sectionId,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart:116:          service_id: provider.id,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart:117:          user_id: FireStoreUtils.getCurrentUid(),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart:118:          serviceAuthorId: provider.author,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart:119:        );
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart:120:        FireStoreUtils.setFavouriteOndemandSection(favouriteModel);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart:121:        lstFav.add(favouriteModel);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart:122:      }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_home_controller.dart:123:    }

### FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_order_details_controller.dart
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_order_details_controller.dart:41:  void onInit() {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_order_details_controller.dart:42:    super.onInit();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_order_details_controller.dart:43:
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_order_details_controller.dart:44:    final args = Get.arguments;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_order_details_controller.dart:45:    if (args != null && args is OnProviderOrderModel) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_order_details_controller.dart:46:      onProviderOrder.value = args;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_order_details_controller.dart:47:    }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_order_details_controller.dart:48:    getData();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_order_details_controller.dart:49:  }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_order_details_controller.dart:50:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_order_details_controller.dart:51:  Future<void> getData() async {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_order_details_controller.dart:52:    try {

### FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_review_controller.dart
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_review_controller.dart:34:  @override
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_review_controller.dart:35:  void onInit() {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_review_controller.dart:36:    super.onInit();
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_review_controller.dart:37:    final args = Get.arguments;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_review_controller.dart:38:    if (args != null) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_review_controller.dart:39:      order.value = args['order'];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_review_controller.dart:40:      reviewFor.value = args['reviewFor'];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_review_controller.dart:41:      getReview();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_review_controller.dart:42:    }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_review_controller.dart:43:  }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_review_controller.dart:44:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_review_controller.dart:45:  void getReview() async {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_review_controller.dart:46:    // Get existing rating
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_review_controller.dart:47:    if (reviewFor.value == "Provider") {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_review_controller.dart:48:      RatingModel? value = await FireStoreUtils.getReviewsByProviderID(order.value!.id, order.value!.provider.author.toString());
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_review_controller.dart:49:      if (value != null) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_review_controller.dart:50:        ratingModel.value = value;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_review_controller.dart:51:        ratings.value = value.rating ?? 0.0;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_review_controller.dart:52:        comment.text = value.comment ?? '';
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_review_controller.dart:53:      }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_review_controller.dart:54:    } else {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_review_controller.dart:55:      RatingModel? value = await FireStoreUtils.getReviewsByWorkerID(order.value!.id, order.value!.workerId.toString());
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_review_controller.dart:56:      if (value != null) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_review_controller.dart:126:      photos: ratingModel.value?.photos ?? [],
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_review_controller.dart:127:      rating: ratings.value,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_review_controller.dart:128:      orderId: ratingModel.value?.orderId ?? order.value!.id,
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_review_controller.dart:129:      vendorId: ratingModel.value?.vendorId ?? order.value!.provider.author.toString(),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_review_controller.dart:130:      customerId: Constant.userModel?.id,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_review_controller.dart:131:      uname: '${Constant.userModel?.firstName ?? ''} ${Constant.userModel?.lastName ?? ''}',
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_review_controller.dart:132:      profile: Constant.userModel?.profilePictureURL,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_review_controller.dart:133:      createdAt: Timestamp.now(),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_review_controller.dart:134:    );
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_review_controller.dart:135:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_review_controller.dart:136:    await FireStoreUtils.updateReviewById(rate);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_review_controller.dart:137:    await FireStoreUtils.updateUser(provider.value!);

### FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_coupon_controller.dart

### FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_dashboard_controller.dart

### FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_my_booking_controller.dart
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_my_booking_controller.dart:52:  List<ParcelOrderModel> getOrdersForTab(String tab) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_my_booking_controller.dart:53:    switch (tab) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_my_booking_controller.dart:54:      case "New":
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_my_booking_controller.dart:55:        return parcelOrder.where((order) => ["Order Placed"].contains(order.status)).toList();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_my_booking_controller.dart:56:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_my_booking_controller.dart:57:      case "In Transit":
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_my_booking_controller.dart:58:        return parcelOrder.where((order) => ["Order Accepted", "Driver Accepted", "Driver Pending", "Order Shipped", "In Transit"].contains(order.status)).toList();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_my_booking_controller.dart:59:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_my_booking_controller.dart:60:      case "Delivered":
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_my_booking_controller.dart:61:        return parcelOrder.where((order) => ["Order Completed"].contains(order.status)).toList();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_my_booking_controller.dart:62:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_my_booking_controller.dart:63:      case "Cancelled":
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_my_booking_controller.dart:64:        return parcelOrder.where((order) => ["Order Rejected", "Order Cancelled", "Driver Rejected"].contains(order.status)).toList();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_my_booking_controller.dart:65:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_my_booking_controller.dart:66:      default:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_my_booking_controller.dart:67:        return [];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_my_booking_controller.dart:68:    }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_my_booking_controller.dart:69:  }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_my_booking_controller.dart:70:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_my_booking_controller.dart:71:  /// Old helper (optional)
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_my_booking_controller.dart:72:  List<ParcelOrderModel> get filteredParcelOrders => getOrdersForTab(selectedTab.value);

### FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_order_confirmation_controller.dart
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_order_confirmation_controller.dart:76:  Rx<CouponModel> selectedCouponModel = CouponModel().obs;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_order_confirmation_controller.dart:77:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_order_confirmation_controller.dart:78:  Future<void> getArgument() async {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_order_confirmation_controller.dart:79:    final dynamic args = Get.arguments;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_order_confirmation_controller.dart:80:    if (args != null) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_order_confirmation_controller.dart:81:      parcelOrder.value = args['parcelOrder'];
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_order_confirmation_controller.dart:82:      images.value = List<XFile>.from(args['images'] ?? []);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_order_confirmation_controller.dart:83:      calculatePrice();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_order_confirmation_controller.dart:84:    }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_order_confirmation_controller.dart:85:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_order_confirmation_controller.dart:86:    userModel.value = Constant.userModel!;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_order_confirmation_controller.dart:87:    await fetchCoupons();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_order_confirmation_controller.dart:153:      parcelOrder.value.discount = discount.value.toString();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_order_confirmation_controller.dart:154:      parcelOrder.value.discountType = selectedCouponModel.value.discountType.toString();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_order_confirmation_controller.dart:155:      parcelOrder.value.discountLabel = selectedCouponModel.value.code.toString();
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_order_confirmation_controller.dart:156:      parcelOrder.value.adminCommission = Constant.sectionConstantModel?.adminCommision?.amount?.toString();
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_order_confirmation_controller.dart:157:      parcelOrder.value.adminCommissionType = Constant.sectionConstantModel?.adminCommision?.commissionType;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_order_confirmation_controller.dart:158:      parcelOrder.value.status = Constant.orderPlaced;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_order_confirmation_controller.dart:159:      parcelOrder.value.createdAt = Timestamp.now();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_order_confirmation_controller.dart:160:      parcelOrder.value.author = userModel.value;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_order_confirmation_controller.dart:161:      parcelOrder.value.authorID = FireStoreUtils.getCurrentUid();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_order_confirmation_controller.dart:162:      parcelOrder.value.paymentMethod = paymentBy.value == "Receiver" ? "cod" : selectedPaymentMethod.value;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_order_confirmation_controller.dart:163:      parcelOrder.value.paymentCollectByReceiver = paymentBy.value == "Receiver";
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_order_confirmation_controller.dart:164:      parcelOrder.value.senderZoneId = Constant.getZoneId(parcelOrder.value.senderLatLong!.latitude ?? 0.0, parcelOrder.value.senderLatLong!.longitude ?? 0.0);
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_order_confirmation_controller.dart:165:      parcelOrder.value.receiverZoneId = Constant.getZoneId(parcelOrder.value.receiverLatLong!.latitude ?? 0.0, parcelOrder.value.receiverLatLong!.longitude ?? 0.0);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_order_confirmation_controller.dart:166:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_order_confirmation_controller.dart:167:      if (paymentBy.value != "Receiver") {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_order_confirmation_controller.dart:168:        if (selectedPaymentMethod.value == PaymentGateway.wallet.name) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_order_confirmation_controller.dart:169:          WalletTransactionModel transactionModel = WalletTransactionModel(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_order_confirmation_controller.dart:170:            id: Constant.getUuid(),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_order_confirmation_controller.dart:171:            amount: double.parse(totalAmount.value.toString()),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_order_confirmation_controller.dart:172:            date: Timestamp.now(),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_order_confirmation_controller.dart:173:            paymentMethod: PaymentGateway.wallet.name,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_order_confirmation_controller.dart:191:      await FireStoreUtils.parcelOrderPlace(parcelOrder.value).then((value) async {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_order_confirmation_controller.dart:192:        ShowToastDialog.closeLoader();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_order_confirmation_controller.dart:193:        ShowToastDialog.showToast("Order placed successfully".tr);
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_order_confirmation_controller.dart:194:        Get.offAll(() => OrderSuccessfullyPlaced(), arguments: {'parcelOrder': parcelOrder.value});
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_order_confirmation_controller.dart:195:        await FireStoreUtils.sendParcelBookEmail(orderModel: parcelOrder.value);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_order_confirmation_controller.dart:196:      });
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_order_confirmation_controller.dart:197:    } catch (e) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_order_confirmation_controller.dart:198:      ShowToastDialog.closeLoader();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_order_confirmation_controller.dart:199:      ShowToastDialog.showToast("Something went wrong. Please try again.".tr);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_order_confirmation_controller.dart:200:    }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_order_confirmation_controller.dart:201:  }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_order_confirmation_controller.dart:202:

### FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_order_details_controller.dart
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_order_details_controller.dart:22:  @override
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_order_details_controller.dart:23:  void onInit() {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_order_details_controller.dart:24:    super.onInit();
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_order_details_controller.dart:25:    final args = Get.arguments;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_order_details_controller.dart:26:    if (args != null && args is ParcelOrderModel) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_order_details_controller.dart:27:      parcelOrder.value = args;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_order_details_controller.dart:28:      setStatusHistoryFromString(parcelOrder.value);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_order_details_controller.dart:29:    }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_order_details_controller.dart:30:    loadParcelCategories();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_order_details_controller.dart:31:    calculateTotalAmount();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_order_details_controller.dart:32:    fetchDriverDetails();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_order_details_controller.dart:33:  }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_order_details_controller.dart:145:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_order_details_controller.dart:146:  ParcelCategory? getSelectedCategory() {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_order_details_controller.dart:147:    try {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_order_details_controller.dart:148:      return parcelCategory.firstWhere((cat) => cat.title?.toLowerCase().trim() == parcelOrder.value.parcelType?.toLowerCase().trim(), orElse: () => ParcelCategory());
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_order_details_controller.dart:149:    } catch (e) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_order_details_controller.dart:150:      return null;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_order_details_controller.dart:151:    }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_order_details_controller.dart:152:  }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_order_details_controller.dart:153:}

### FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_review_controller.dart
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_review_controller.dart:11:class ParcelReviewController extends GetxController {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_review_controller.dart:12:  RxBool isLoading = true.obs;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_review_controller.dart:13:
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_review_controller.dart:14:  /// Order from arguments
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_review_controller.dart:15:  final Rx<ParcelOrderModel?> order = Rx<ParcelOrderModel?>(null);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_review_controller.dart:16:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_review_controller.dart:17:  /// Rating data
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_review_controller.dart:18:  final Rx<RatingModel?> ratingModel = Rx<RatingModel?>(null);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_review_controller.dart:19:  final RxDouble ratings = 0.0.obs;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_review_controller.dart:20:  final Rx<TextEditingController> comment = TextEditingController().obs;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_review_controller.dart:21:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_review_controller.dart:22:  /// Driver (to be reviewed)
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_review_controller.dart:29:  @override
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_review_controller.dart:30:  void onInit() {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_review_controller.dart:31:    super.onInit();
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_review_controller.dart:32:    final args = Get.arguments;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_review_controller.dart:33:    if (args != null && args['order'] != null) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_review_controller.dart:34:      order.value = args['order'] as ParcelOrderModel;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_review_controller.dart:35:      getReview();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_review_controller.dart:36:    }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_review_controller.dart:37:  }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_review_controller.dart:38:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_review_controller.dart:39:  /// Fetch old review + driver stats
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_review_controller.dart:40:  Future<void> getReview() async {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_review_controller.dart:92:        orderId: ratingModel.value!.orderId,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_review_controller.dart:93:        driverId: ratingModel.value!.driverId,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_review_controller.dart:94:        customerId: ratingModel.value!.customerId,
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_review_controller.dart:95:        vendorId: ratingModel.value?.vendorId,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_review_controller.dart:96:        uname: "${Constant.userModel?.firstName ?? ''} ${Constant.userModel?.lastName ?? ''}",
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_review_controller.dart:97:        profile: Constant.userModel?.profilePictureURL,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_review_controller.dart:98:        createdAt: Timestamp.now(),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_review_controller.dart:99:      );
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_review_controller.dart:100:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_review_controller.dart:101:      await FireStoreUtils.updateReviewById(updatedRating);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_review_controller.dart:102:      if (user != null) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_review_controller.dart:103:        await FireStoreUtils.updateUser(user);

### FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_conformation_controller.dart
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_conformation_controller.dart:20:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_conformation_controller.dart:21:  @override
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_conformation_controller.dart:22:  void onInit() {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_conformation_controller.dart:23:    getArguments();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_conformation_controller.dart:24:    fetchCoupons();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_conformation_controller.dart:25:    super.onInit();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_conformation_controller.dart:26:  }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_conformation_controller.dart:27:
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_conformation_controller.dart:28:  void getArguments() {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_conformation_controller.dart:29:    final args = Get.arguments;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_conformation_controller.dart:30:    if (args.containsKey('rentalOrderModel') && args['rentalOrderModel'] is RentalOrderModel) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_conformation_controller.dart:31:      rentalOrderModel.value = args['rentalOrderModel'] as RentalOrderModel;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_conformation_controller.dart:32:      calculateAmount();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_conformation_controller.dart:33:    } else {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_conformation_controller.dart:34:      debugPrint('No rental order found in arguments or invalid format.');
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_conformation_controller.dart:35:    }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_conformation_controller.dart:36:    isLoading.value = false;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_conformation_controller.dart:37:  }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_conformation_controller.dart:38:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_conformation_controller.dart:39:  RxDouble subTotal = 0.0.obs;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_conformation_controller.dart:40:  RxDouble discount = 0.0.obs;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_conformation_controller.dart:41:  RxDouble taxAmount = 0.0.obs;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_conformation_controller.dart:42:  RxDouble orderTaxAmount = 0.0.obs;

### FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_coupon_controller.dart

### FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_home_controller.dart
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_home_controller.dart:139:    rentalOrderModel.author = userModel.value;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_home_controller.dart:140:    rentalOrderModel.rentalVehicleType = selectedVehicleType.value;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_home_controller.dart:141:    rentalOrderModel.vehicleId = selectedVehicleType.value!.id;
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_home_controller.dart:142:    rentalOrderModel.sectionId = Constant.sectionConstantModel!.id;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_home_controller.dart:143:    rentalOrderModel.sourceLocationName = sourceTextEditController.value.text;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_home_controller.dart:144:    rentalOrderModel.bookingDateTime = Timestamp.fromDate(selectedDate.value);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_home_controller.dart:145:    rentalOrderModel.paymentMethod = selectedPaymentMethod.value;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_home_controller.dart:146:    rentalOrderModel.paymentStatus = false;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_home_controller.dart:147:    rentalOrderModel.status = Constant.orderPlaced;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_home_controller.dart:148:    rentalOrderModel.subTotal = selectedPackage.value!.baseFare;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_home_controller.dart:149:    rentalOrderModel.rentalPackageModel = selectedPackage.value;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_home_controller.dart:150:    rentalOrderModel.taxSetting = Constant.orderProductTaxList;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_home_controller.dart:151:    rentalOrderModel.createdAt = Timestamp.now();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_home_controller.dart:152:    rentalOrderModel.sourceLocation = sourceLocation;
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_home_controller.dart:153:    rentalOrderModel.adminCommission = Constant.sectionConstantModel!.adminCommision!.amount;
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_home_controller.dart:154:    rentalOrderModel.adminCommissionType = Constant.sectionConstantModel!.adminCommision!.commissionType;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_home_controller.dart:155:    rentalOrderModel.sourcePoint = G(
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_home_controller.dart:156:      geopoint: GeoPoint(sourceLocation.latitude ?? 0.0, sourceLocation.longitude ?? 0.0),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_home_controller.dart:157:      geohash: Geoflutterfire().point(latitude: sourceLocation.latitude ?? 0.0, longitude: sourceLocation.longitude ?? 0.0).hash,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_home_controller.dart:158:    );
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_home_controller.dart:159:    rentalOrderModel.zoneId = Constant.getZoneId(sourceLocation.latitude ?? 0.0, sourceLocation.longitude ?? 0.0);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_home_controller.dart:160:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_home_controller.dart:161:    log(rentalOrderModel.toJson().toString());
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_home_controller.dart:162:    Get.back();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_home_controller.dart:163:    Get.back();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_home_controller.dart:164:
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_home_controller.dart:165:    Get.to(() => RentalConformationScreen(), arguments: {"rentalOrderModel": rentalOrderModel});
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_home_controller.dart:166:  }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_home_controller.dart:167:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_home_controller.dart:168:  void setDepartureMarker(double lat, double lng) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_home_controller.dart:169:    if (Constant.selectedMapType == 'osm') {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_home_controller.dart:170:      departureLatLongOsm.value = latlong.LatLng(lat, lng);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_home_controller.dart:171:    } else {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_home_controller.dart:172:      departureLatLong.value = gmaps.LatLng(lat, lng);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_home_controller.dart:173:    }

### FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_order_details_controller.dart
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_order_details_controller.dart:73:  }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_order_details_controller.dart:74:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_order_details_controller.dart:75:  Future<void> getData() async {
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_order_details_controller.dart:76:    final args = Get.arguments;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_order_details_controller.dart:77:    if (args != null) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_order_details_controller.dart:78:      order.value = args as RentalOrderModel;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_order_details_controller.dart:79:      calculateTotalAmount();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_order_details_controller.dart:80:      await fetchDriverDetails();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_order_details_controller.dart:81:      await getPaymentSettings();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_order_details_controller.dart:82:    }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_order_details_controller.dart:83:    isLoading.value = false;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_order_details_controller.dart:84:  }

### FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_review_controller.dart
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_review_controller.dart:12:class RentalReviewController extends GetxController {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_review_controller.dart:13:  RxBool isLoading = true.obs;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_review_controller.dart:14:
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_review_controller.dart:15:  /// Order from arguments
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_review_controller.dart:16:  final Rx<RentalOrderModel?> order = Rx<RentalOrderModel?>(null);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_review_controller.dart:17:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_review_controller.dart:18:  /// Rating data
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_review_controller.dart:19:  final Rx<RatingModel?> ratingModel = Rx<RatingModel?>(null);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_review_controller.dart:20:  final RxDouble ratings = 0.0.obs;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_review_controller.dart:21:  final Rx<TextEditingController> comment = TextEditingController().obs;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_review_controller.dart:22:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_review_controller.dart:23:  /// Driver (to be reviewed)
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_review_controller.dart:30:  @override
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_review_controller.dart:31:  void onInit() {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_review_controller.dart:32:    super.onInit();
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_review_controller.dart:33:    final args = Get.arguments;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_review_controller.dart:34:    if (args != null && args['order'] != null) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_review_controller.dart:35:      order.value = args['order'] as RentalOrderModel;
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_review_controller.dart:36:      getReview();
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_review_controller.dart:37:    }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_review_controller.dart:38:  }
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_review_controller.dart:39:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_review_controller.dart:40:  /// Fetch old review + driver stats
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_review_controller.dart:41:  Future<void> getReview() async {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_review_controller.dart:93:        orderId: ratingModel.value!.orderId,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_review_controller.dart:94:        driverId: ratingModel.value!.driverId,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_review_controller.dart:95:        customerId: ratingModel.value!.customerId,
> C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_review_controller.dart:96:        vendorId: ratingModel.value?.vendorId,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_review_controller.dart:97:        uname: "${Constant.userModel?.firstName ?? ''} ${Constant.userModel?.lastName ?? ''}",
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_review_controller.dart:98:        profile: Constant.userModel?.profilePictureURL,
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_review_controller.dart:99:        createdAt: Timestamp.now(),
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_review_controller.dart:100:      );
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_review_controller.dart:101:
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_review_controller.dart:102:      await FireStoreUtils.updateReviewById(updatedRating);
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_review_controller.dart:103:      if (user != null) {
  C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\rental_review_controller.dart:104:        await FireStoreUtils.updateUser(user);
```

## 4. Preliminary Interpretation
```text
PASS if controller queries include selected section id:
- Constant.sectionConstantModel!.id
- section_id == Constant.sectionConstantModel!.id
- sectionId == Constant.sectionConstantModel!.id

RISK if family only filters by zoneId/category but not selected section.
FAIL if multiple services in same family can mix content.
```

## Final Status
STATUS: FAMILY_CONTROLLER_SECTION_FILTER_AUDIT_CREATED